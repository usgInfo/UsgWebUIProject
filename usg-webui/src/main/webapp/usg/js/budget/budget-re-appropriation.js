/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function budgetReAppropriation(divId) {
    if (checkUserPrivelege(pvViewBudgetReAppropriation)) {
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> >> <a href="javascript:void(0)" data-toggle="tab" onclick="budgetTransactionMenuTabs()">Budget Transaction</a> >> <a href="javascript:void(0)" data-toggle="tab" onclick="budgetReAppropriation()">Budget Re-Appropriation</a>');

        $("#" + divId).text("").append('<div id="budgetReAppropriationDivId" class="row"></div>');
        $("#budgetReAppropriationDivId").text("").append('<div id="budgetReAppropriationTabMenu" />');

        $("#budgetReAppropriationTabMenu").append('<div id="budgetReAppropriationMainMenu" />');
        $("#budgetReAppropriationTabMenu").append('<div id="budgetReAppropriationListMainMenu"  />');
        $("#budgetReAppropriationTabMenu").append('<div id="reAppropriationTable" class="row" />');

        $("#budgetReAppropriationMainMenu").append('<div id="budgetReAppropriationMainPanel" class="panel panel-blue" />');
        $("#budgetReAppropriationMainPanel").append('<div id="budgetReAppropriationMainHeading" class="panel-heading" />');
        $("#budgetReAppropriationMainHeading").append('<div class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>Budget Re-Appropriation</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colDDOHeadCodeMappingId"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#budgetReAppropriationMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colDDOHeadCodeMappingId").click(function() {
            $("#collapseOne1").toggle();
            if ($("#colDDOHeadCodeMappingId span").hasClass("glyphicon-minus-sign")) {
                $("#colDDOHeadCodeMappingId").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colDDOHeadCodeMappingId").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });



        $("#collapseOne1").append('<div id="budgetReAppropriationMainBody" class = "panel-body pan" />');
        $("#budgetReAppropriationMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#budgetReAppropriationMainBody").append('<center><span id="budgetReAppropriationMessageDiv"></span></center>');
        $("#budgetReAppropriationMainBody").append('<div id="budgetReAppropriationBodyDiv" class="form-body pal" />');

        $("#budgetReAppropriationBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ddo">from DDO <span class="require">*</span></label><select class="form-control" name="ddo" id="ddo"></select><span id="ddoErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="fundType">Location <span class="require">*</span></label><select class="form-control" name="location" id="location"></select><span id="locationErr" class="text-danger"></span></div></div>');
        $("#ddo").attr("onchange", "getLocationBasedonDDOIncome()");
        $("#budgetReAppropriationBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="financialYear">Financial Year <span class="require">*</span></label><select class="form-control" name="financialYear" id="financialYear"></select><span id="financialYearErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="fundType">Fund Type <span class="require">*</span></label><select class="form-control" name="fundType" id="fundType"></select><span id="fundTypeErr" class="text-danger"></span></div></div>');

        $("#budgetReAppropriationBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="sector">Sector <span class="require">*</span></label><select class="form-control" name="sector" id="sector"></select><span id="sectorErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="budgetHead">Budget Head </label><select class="form-control" name="budgetHead" id="budgetHead"></select><span id="budgetHeadErr" class="text-danger"></span></div></div>');
        $("#budgetReAppropriationBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="budgetType">Budget Type <span class="require">*</span></label><select class="form-control" name="budgetType" id="budgetType"></select><span id="budgetTypeErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department <span class="require">*</span></label><select class="form-control" name="department" id="department"></select><span id="departmentErr" class="text-danger"></span></div></div>');
        $("#budgetReAppropriationBodyDiv").append("<div class='form-group col-lg-12' id='budgetButton'><center><button id='showBudgetHead' onclick='validateBudgetReAppropriation()' class='btn btn-success'>Show Budget Heads</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=budgetReAppropriation() class='btn btn-warning' id='resetButton'>Reset</button></center></div>");
        var finyear = getFincialYearForAllReports();
        //ddoList();
        getLoggedInDDOLocationInDropDown("ddo", "location");
        getFinYear("financialYear", finyear);
        sectorList();
        fundTypeList();
        budgetType();
        $("#sector").attr("onchange", " getBudgetHeads('budgetHead')");
        $("#fundType").attr("onchange", "clearSector()");
        fetchAllDeptCreteIncome("", "department", "Department");
    }
}
function validateBudgetReAppropriation() {
    var result = 1;
    $('#ddoErr').text("").val("");
    $("#financialYearErr").text("").val("");
    $("#fundTypeErr").text("").val("");
    $("#sectorErr").text("").val("");
    $("#budgetHeadErr").text("").val("");
    $("#budgetTypeErr").text("").val("");
    $("#departmentErr").text("").val("");
    var ddo = $("#ddo").val();
    var finacialYear = $("#financialYear").val();
    var fundType = $("#fundType").val();
    var sector = $("#sector").val();
    var budgetType = $("#budgetType").val();
    var budgetHead = $("#budgetHead").val();
    var location = $("#location").val();
    var department = $("#department").val();

    //alert(ddo+finacialYear+fundType+sector+budgetType);

    if (fundType == "" || fundType == null || fundType == "0") {
        $("#fundType").focus();
        //alert("---");
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("fundTypeErr", "Please Select Fund Type");
        result = 0;
    }
    if (sector == "" || sector == null || sector == "0") {
        $("#sector").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("sectorErr", "Please Select Sector");
        result = 0;
    }
    if (budgetType == "" || budgetType == null || budgetType == "0") {
        $("#budgetType").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("budgetTypeErr", "Please Select Budget Type");
        result = 0;
    }
    if (department == "" || department == null || department == "0") {
        $("#department").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("departmentErr", "Please Select Department");
        result = 0;
    }

    if (result != 0) {
        searchBudgetReAppropriation();
    }
}
function searchBudgetReAppropriation() {
    if (checkUserPrivelege(pvViewBudgetReAppropriation)) {
        var financialYear = $("#financialYear").val();
        var fundType = $("#fundType").val();
        var sector = $("#sector").val();
        var location = $("#location").val();
        var department = $("#department").val();
        var budgetHead = $("#budgetHead").val();
        var budgetType = $("#budgetType").val();
        var ddo = $("#ddo").val();
        var searchObj = {
            financialYear: financialYear,
            fundType: fundType,
            sector: sector,
            ddo: ddo,
            budgetType: budgetType,
            budgetHead: budgetHead,
            location: location,
            department: department
        };
        $.get(server_base_url + "/budget/transactions/BudgetReAppropriation/Search", {
            searchObj: JSON.stringify(searchObj),
            condition: "IncomeBudget"
        }).done(function(data) {
            $("#budgetReAppropriationListMainMenu").text("").append('<div id="budgetReAppropriationListPanel" class="panel panel-blue" />');
            $("#budgetReAppropriationListPanel").append('<div id="budgetReAppropriationListHeading" class="panel-heading" />');
            $("#budgetReAppropriationListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>Budget Re-Appropriation Table</center></a>');

            $("#budgetReAppropriationListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
            $("#collapseOne2").append('<div id="budgetReAppropriationListBody" class = "panel-body pan" />');
            $("#budgetReAppropriationListBody").append('<div id="panelRow" class="row" />');
            $("#budgetReAppropriationListBody").append('<div id="budgetReAppropriationConstenetMsg" />');
            $("#budgetReAppropriationConstenetMsg").append('<class="panel-title" style="font-weight:bold;font-size:13px;color:red"><center>Enter a negative (-) number to indicate amount to be deducted from a ledger</center>');
            $("#budgetReAppropriationListBody").append('<div id="budgetReAppropriationListErrorMsgId" />');
            $("#budgetReAppropriationListBody").append('<div id="budgetReAppropriationListMainBody" class="table-responsive" />');
            $("#budgetReAppropriationListMainBody").append('<table id="budgetReAppropriationTable" class="table table-striped table-bordered table-hover" />');
            $("#budgetReAppropriationListMainBody").append('<div class="row" id="buttonRow"/>');
            $("#budgetReAppropriationTable").append('<thead id="budgetReAppropriationTableHeadId" />');
            $("#budgetReAppropriationTable").append('<tbody id="budgetReAppropriationTableBodyId" />');

            $("#budgetReAppropriationTableHeadId").append("<tr><th>Sno</th><th>ADD</th><th>Ledgers</th><th>Sanction Amount(In Lacs)</th></tr>");
            var sno = 0;
            data = JSON.parse(data);

            for (var i = data.length - 1; i >= 0; i--) {
                var approvedAmount = parseInt(data[i].approvedAmount) + parseInt(data[i].extraProvisionAmount);
//                if (data[i].appropriationValue != null) {
//                    console.log(data[i].appropriationValue)
//                    approvedAmount = parseInt(approvedAmount) + parseInt(data[i].appropriationValue);
//                }
                var ledgerName = data[i].ledgerName
                if (ledgerName == undefined || ledgerName == "undefined") {
                    ledgerName = "";
                }
                sno++;

                $("#budgetReAppropriationTableBodyId").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "<input type='hidden' value='" + encodeURI(JSON.stringify(data[i])) + "'></td>"
                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                        + "<td style='cursor:pointer;'>" + ledgerName + "</td>"
                        + "<td style='cursor:pointer;'>" + approvedAmount + "</td>");
//                    + "<td style='cursor:pointer;'>" + data[i].subMajorHeadCode + "</td>"
//                    + "<td style='cursor:pointer;' onclick=updateBudgetSubMajorHead('" + data[i]._id.$oid + "','" + encodeURI(data[i].subMajorHead) + "','" + encodeURI(data[i].subMajorHeadCode) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>"
//                    + "<td style='cursor:pointer;' onclick=deletePopUp('deleteBudgetSubMajorHead','viewBudgetSubMajorHeadList','" + data[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");
            }

            $("#buttonRow").append("<div class='col-sm-12'><center><button onclick='BudgetReAppropriationTable()' class='btn btn-primary '>Re Approppriate</button></center></div>");
        });
    }
}
function BudgetReAppropriationTable() {
    var sno = 0;
    var checkedList = [];
    $('#budgetReAppropriationTable tbody tr input[type="checkbox"][name="case"]:checked').each(function(i) {
        var row = $(this).closest('tr');
        checkedList.push(JSON.parse(decodeURI(row.find('td:eq(0) input').val())));
    });
    if (checkedList != null) {
        $("#budgetReAppropriationListErrorMsgId").text("");
        if (checkedList.length > 1) {

            $("#reAppropriationTable").text("").append('<div id="budgetReAppropriationTablePanel" class="panel panel-blue" />');
            $("#budgetReAppropriationTablePanel").append('<div id="budgetReAppropriationTableHeading" class="panel-heading" />');
            $("#budgetReAppropriationTableHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>Budget Re-Appropriation Table</center></a>');

            $("#budgetReAppropriationTablePanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
            $("#collapseOne3").append('<div id="budgetReAppropriationTableBody" class = "panel-body pan" />');
            $("#budgetReAppropriationTableBody").append('<div id="panelRow" class="row" />');

            $("#budgetReAppropriationTableBody").append('<div id="ReAppropriationTableMsgId" />');
            $("#budgetReAppropriationTableBody").append('<div id="budgetReAppropriationTableMainBody" class="table-responsive" />');
            $("#budgetReAppropriationTableMainBody").append('<table id="ReAppropriationTable" class="table table-striped table-bordered table-hover" />');
            $("#budgetReAppropriationTableMainBody").append('<div id="saveOrResetButtonRow"/>');
            $("#ReAppropriationTable").append('<thead id="ReAppropriationTableHeadId" />');
            $("#ReAppropriationTable").append('<tbody id="ReAppropriationTableBodyId" />');

            $("#ReAppropriationTableHeadId").append("<tr><th>Sno</th><th>Budget Head</th><th>Sanction Amount(In lacs)</th><th>Amount(In lacs)</th></tr>");
            for (var i = checkedList.length - 1; i >= 0; i--) {
                sno++;
                var appropriationValue = 0;
                if (checkedList[i].appropriationValue != null)
                {
                    appropriationValue = checkedList[i].appropriationValue;
                }
                var approvedAmount = parseInt(checkedList[i].approvedAmount) + parseInt(checkedList[i].extraProvisionAmount);
//                if (checkedList[i].appropriationValue != null) {
//                    console.log(checkedList[i].appropriationValue)
//                    approvedAmount = parseInt(approvedAmount) + parseInt(checkedList[i].appropriationValue);
//                }
                var ledgerName = checkedList[i].ledgerName
                if (ledgerName == undefined || ledgerName == "undefined") {
                    ledgerName = "";
                }
                //JSON.stringify(checkedList[i]));
                $("#ReAppropriationTableBodyId").append("<tr id='" + checkedList[i].consolidatedExpenseId + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "<input type='hidden' value='" + encodeURI(JSON.stringify(checkedList[i])) + "'></td>"
                        + "<td style='cursor:pointer;'>" + ledgerName + "</td>"
                        + "<td style='cursor:pointer;'>" + approvedAmount + "</td>"
                        + "<td style='cursor:pointer;'><input type='text' value='' onkeypress='return validateNumberWithMinus(event)'></td>");
            }
            getSaveResetUpdateBackButton("saveOrResetButtonRow", "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "saveReAppropriation()", "Reset", "resetBackBtnId", "resetBudgetReAppropriation()");
        } else {
            displayLargeErrorMessagesInCenterInRed("budgetReAppropriationListErrorMsgId", selectAtleast2Records);
        }
    } else {
        displayLargeErrorMessagesInCenterInRed("budgetReAppropriationListErrorMsgId", selectAtleast2Records);
    }
//    $("#saveOrResetButtonRow").append("<center><button class='btn btn-primary mr5' value='Save' onclick='saveReAppropriation() >Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='' class='btn btn-warning mr5'>Reset</button></center>");
}
function validateNumberWithMinus(key)
{
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    //comparing pressed keycodes
    if (keycode == 45) {
        return true;
    }
    if (!(keycode == 8 || keycode == 12) && (keycode < 13 || keycode > 13) && (keycode < 48 || keycode > 57))
    {
        return false;
    } else {
        return true;
    }
}
function saveReAppropriation() {
    if (checkUserPrivelege(pvViewBudgetReAppropriation)) {
        var resultantAmount = 0;
        var saveThisReAppropriation = [];
        $('#ReAppropriationTable tbody tr').each(function(i) {
            var row = $(this).closest('tr');
            var obj = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
            saveThisReAppropriation.push({
                idStr: obj._id.$oid,
                createExpenseId: obj.createExpenseId,
                appropriationValue: row.find('td:eq(3) input').val()
            });
            resultantAmount = resultantAmount + parseInt(row.find('td:eq(3) input').val());
//        $(this).closest('tr').remove();
        });
        if (resultantAmount == 0) {
            //alert(JSON.stringify(saveThisReAppropriation));
            $.post(server_base_url + "budget/transactions/BudgetReAppropriation/Save", {
                obj: JSON.stringify(saveThisReAppropriation),
                userId: getUserSessionElement("userId")
            }).done(function(data) {
                //alert(JSON.stringify(data));
                if (data == fail) {
                    displaySmallErrorMessages("ErrorDiv", "Invalid username / password" + "<br/><br/>");
                } else if (data == unauthorized || data.statuscode == unauthorized) {
                    displaySmallErrorMessages("ErrorDiv", unauthorizedMessage + "<br/><br/>");
                } else if (data == statusException) {
                    displaySmallErrorMessages("ErrorDiv", statusExceptionMessage + "<br/><br/>");
                } else if (data == invalidSession) {
                    callSessionTimeout();
                } else if (data == null) {
                    displaySmallErrorMessages("ErrorDiv", "No User available" + "<br/><br/>");
                } else {
                    $("#showBudgetHead").click();
                    setTimeout(function() {
                        displaySuccessMessages("budgetReAppropriationListErrorMsgId", updateMessage);
                        clearSuccessMessageAfterTwoSecond("budgetReAppropriationListErrorMsgId");
                        $("#reAppropriationTable").text("");
                    }, 300);
                }
            });
        } else {
            displayLargeErrorMessagesInCenterInRed("ReAppropriationTableMsgId", "Approppriation amount has to be divide  equally.");
        }
    } else {
        displayLargeErrorMessagesInCenterInRed("budgetReAppropriationMessageDiv", privilageNotExist);
    }
}
function resetBudgetReAppropriation() {
    $("#ddo").val('0');
    $("#financialYear").val('0');
    $("#fundType").val('0');
    $("#sector").val('0');
    $("#budgetType").val('0');

}

function ddoList() {
    $("#ddo").text("").append("<option value='0'>----Select DDO----</option>");
    $.get(server_base_url + "/financial/account/DDO/ViewList", {
    }).done(function(data) {
        if (data == fail || data == unauthorized || data.statuscode == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#ddo").append("<option value='" + subData._id.$oid + "'>" + subData.ddoName + "</option>");
            }
        }
    });
}

function financialYearList() {
    $("#financialYear").text("").append("<option value='0'>----Select Financial Year----</option>");
    $.get(server_base_url + "/budget/master/FinancialYear/View", {
    }).done(function(data) {
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {

                $("#financialYear").append("<option value='" + data[i]._id.$oid + "'>" + data[i].fromDate + "-" + data[i].toDate + "</option>");

            }
        }
    });

}


function fundTypeList() {
    $("#fundType").text("").append("<option value='0'>----Select Fund Type----</option>");
    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function(data) {
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {

                $("#fundType").append("<option value='" + data[i]._id.$oid + "'>" + data[i].description + "</option>");

            }
        }
    });
}

function sectorList() {

    $("#sector").text("").append("<option value='0'>----Select Sector----</option>");
    $.get(server_base_url + "/budget/master/BudgetSector/View", {
    }).done(function(data) {
        if (data.result != null) {
            var sno = 0;
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#sector").append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");

            }
        }
    });
}

function budgetType() {
    $("#budgetType").text("").append("<option value='0'>----Select Budget Type----</option>");
    $.get(server_base_url + "/budget/master/BudgetType/View", {
    }).done(function(data) {
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {

                $("#budgetType").append("<option value='" + data[i]._id.$oid + "'>" + data[i].description + "</option>");

            }
        }
    });
}