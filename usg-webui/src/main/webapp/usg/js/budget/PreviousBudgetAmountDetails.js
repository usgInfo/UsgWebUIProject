/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function createPreviousBudgetActualAmount() {
    scrolupfunction();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetMenuTabs()">Budget Master</a></label> >> <label>Actual  Budget for Previous Years</label>');
    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu' class='page-content'     />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#mainTabMenu").append("<div id='tableHeaderTable' />");
    $("#mainTabMenu").append("<div id='ViewDataList' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Actual Budget for Previous Year</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseFin").click(function () {
        $("#collapseOne2").toggle();
        if ($("#collapseFin span").hasClass("glyphicon-minus-sign")) {
            $("#collapseFin").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#collapseFin").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");

    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    //FinancialIncomeUniversitysBudgetCode Table

    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    getTwoColumnInRow("FieldGroup", "Row0", "Row0Col1", "Row0Col2");
    $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
    $("#Row0Col2").append(getLabel("Location", "required") + "" + getDropDown("location"));
    getLoggedInDDOInDropDown("ddo", "");
    getLoggedInLocationInDropDown("location", "");

    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));
    $("#Row1Col2").append(getLabel("Sector", "required") + "" + getDropDown("sector"));

    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel("Financial Year", "required") + "" + getDropDown("financialYear"));
    $("#Row2Col2").append(getLabel("Budget Nature", "required") + "" + getDropDown("budgetNature"));


    getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel("Budget Type", "required") + "" + getDropDown("budgetType"));
//    $("#Row3Col2").append(getLabel_InputWithSpan("Actual Budget Amount", "required", "actualBudgetAmount", "", "onkeypress='return numericVal(event)'  maxlength='15'"));
//    $("#Row3Col2").append('<input type="hidden" id="idValue" >');
    $("#Row3Col2").append(getLabel("Department", "required") + "" + getDropDown("department", "", "", ""));

    getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col1").append(getLabel("Budget Head", "") + "" + getDropDown("budgetHead"));


    $("#FieldGroup").append("<div id='previousBudgetAmountButtonRowDiv' class='row' />");

    $("#previousBudgetAmountButtonRowDiv").append("<div  class='col-xs-12' id='previousBudgetAmountButtonRowDivButtonRow'/><center><button type='button'  id='previousBudgetAmountButton' value='Save' class='btn btn-success bn'  onclick='previousBudgetAmountValidation()'>Create</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='createPreviousBudgetActualAmount()' class='btn btn-warning bn' id='previousBudgetAmountReset' name='reset' value='reset'>Reset</button></center></div>");

    fundTypeDDOHeadMapp();
    getSectorDDOHeadMapp();
    getAllActiveBudgetHead();
    getAllBudgetType();
    getPreviousYear();
    getBudgetnaturePB("", "budgetNature");
    fetchAllDeptCreteIncome("", "department", "Department");
}
function getBudgetnaturePB(name, divId) {
    var data = ["Income", "Expense"];
    $("#" + divId).append("<option value='' selected disabled>---- Select Budget Nature ----</option>");
    for (var i = 0; i < data.length; i++) {
        $("#budgetNature").append("<option  value='" + data[i] + "' >" + data[i] + "</option>");
    }
    $("#" + divId).val(name);
}
function getAllActiveBudgetHead() {
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function (bdata) {
        $("#budgetHead").text("").append("<option value=''>----Select Budget Head----</option>");
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#budgetHead").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].budgetHead + "</option>");
            }
    });
}
function getPreviousYear() {
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear !== null || currentFinancialYear !== "" || currentFinancialYear !== undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var date = fromDate.split("/");
    var currentYear = date[2];
    var year = parseInt(currentYear);
    $("#financialYear").text("").append("<option value=''>----Select Financial Year----</option>");
    $("#financialYear").append("<option value='" + year + "'>" + year + "</option>");


}
function getAllBudgetType() {

    var budgetType = ["Actual"];
    $("#budgetType").text("").append("<option value=''>----Select Budget Type----</option>");
    for (var i = 0; i < budgetType.length; i++) {
        $("#budgetType").append("<option value='" + budgetType[i] + "'>" + budgetType[i] + "</option>");
    }
}

//------------------------End Search Function Sanction Income Form -------------------

//------------------------Start Search Consolidate Income Form Validation -------------
function previousBudgetAmountValidation() {
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv("FieldGroup");
    var result = 1;
    if ($('#financialYear').val() == null || $('#financialYear').val() == "") {
        $("#financialYear").focus();
        displaySmallErrorMessages("financialYearErr", "Please Select Financial Year.");
        result = 0;
    }
    if ($('#fundType').val() == null || $('#fundType').val() == "") {
        $("#fundType").focus();
        displaySmallErrorMessages("fundTypeErr", "Please Select Fund Type.");
        result = 0;
    }
    if ($('#sector').val() == null || $('#sector').val() == "") {
        $("#sector").focus();
        displaySmallErrorMessages("sectorErr", "Please Select Sector.");
        result = 0;
    }
    if ($('#budgetType').val() == null || $('#budgetType').val() == "") {
        $("#budgetType").focus();
        displaySmallErrorMessages("budgetTypeErr", "Please Select Budget Type.");
        result = 0;
    }
    if ($('#department').val() == null || $('#department').val() == "") {

        displaySmallErrorMessages("departmentErr", "Please Select Department.");
        result = 0;
    }
    if ($('#budgetNature').val() == null || $('#budgetNature').val() == "") {

        displaySmallErrorMessages("budgetNatureErr", "Please Select type.");
        result = 0;
    }
    if (result != 0) {
        viewPreviousBudgetAmountList();
        displayTablePB();
    }
}

//------------------------Start Search Consolidate Income Form Validation -------------

//------------------------Start Display Consolidate Income Data  ----------------------

function viewPreviousBudgetAmountList(divId)
{
    var fundType = $("#fundType").val();
    var budgetType = $("#budgetType").val();
    var budgetHead = $("#budgethead").val();
    //For List Table
    $(".smallErrorMsg").text("");
    $("#ViewDataList").text("");
    $("#tableHeaderTable").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Ledgers</center>");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").text("").append("<div id='ErrorDiv'/>");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
    $.get(server_base_url + "GetLedgersPreviousBudgetAmount", {
        budgetHead: budgetHead,
        fundType: fundType,
        budgetType: budgetType,
        ddo: $('#ddo').val(),
        location: $('#location').val(),
        financialYear: $('#financialYear').val(),
        sector: $('#sector').val(),
        department: $('#department').val(),
        type: $('#budgetNature').val()
    }).done(function (bdata) {
//        if (bdata == "Already Existed") {
//
//            displayErrorMessages("ErrorDiv", duplicate_MessagsExist, "");
//            displayTablePB();
//            setTimeout(function() {
//
//                $(".smallErrorMsg").text("");
//            }, 3000);
//            clearSuccessMessageAfterTwoSecond("ErrorDiv");
//        } else
//        {
        var requestedAmount = 0;
        if (bdata.length > 0 && bdata != "Already Existed") {
            $("#viewUser").text("").append("<div id='prebiousBudgetSubDiv1' class = 'panel panel-primary-head'></div>");
            $("#prebiousBudgetSubDiv1").append("<table id='prebiousBudgetTable1' class='table table-striped table-bordered'></table>");
            $("#prebiousBudgetTable1").append("<thead><tr>"
                    //   + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                    + " <th> S.No</th>"
                    + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Ledger Name</th>"
                    + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Budget Head</th>"
                    + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Requested Amount(In Lac)<span class='require'>&nbsp;&nbsp*</span></th>"
                    + "</tr></thead>");
            var sno = 0;
            $("#prebiousBudgetTable1").append("<tbody id='prebiousBudgetTableBody' class='table-striped table-bordered' />");
            for (var i = bdata.length - 1; i >= 0; i--) {
                sno++;
                var objJson = JSON.stringify(bdata[i]);
                $("#prebiousBudgetTableBody").append("<tr  style='cursor:pointer;' >"
                        //   + "<td><input type='checkbox' value='" + sno + "' name='case'></td>"
                        + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].ledgerName + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
//                        + "<td style='cursor:pointer;'class='hidden'>" + bdata[i]._id.$oid + "</td>"
                        + "<td style='cursor:pointer;'><input type='text' onkeypress='return numericVal(event)' id='requestedAmount' value='" + requestedAmount + "'/><span id='emountErr" + sno + "'></span></td></tr>");
            }
            $("#prebiousBudgetSubDiv1").append("<center><button type='button'  value='Save' class='btn btn-success mr5' onclick='savePreviousBudgetAmount()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button'  value='Save' class='btn btn-warning mr5 ' onclick='reset1BudgetIncome()'>Reset</button></center>");
            $("#prebiousBudgetTable1").dataTable({
                paging: true

            });
        }
//        }
    });
}

//------------------------End Display Consolidate Income Data  ----------------------




function savePreviousBudgetAmount() {
    var status = "false";
    var rows = $("#prebiousBudgetTable1").dataTable().fnGetNodes();
    for (var i = 0; i < rows.length; i++)
    {
        i++;
        $("#emountErr" + i).text("").val("");
    }
    var rows = $("#prebiousBudgetTable1").dataTable().fnGetNodes();
    for (var i = 0; i < rows.length; i++)
    {
        var row = $(rows[i]);
        var requestedAmount = row.find('td:eq(3) input').val();
        var rowId = row.find('td:eq(0)').text();
        if (requestedAmount == "")
        {
            displaySmallErrorMessages("emountErr" + rowId, "Please enter Amount");
            status = "true";
        }
    }

    if (status == "false")
    {

        var result = 1;
        var saveThisIncomeDetails = [];
        var rows = $("#prebiousBudgetTable1").dataTable().fnGetNodes();
        for (var i = 0; i < rows.length; i++)
        {
            var row = $(rows[i]);
            var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
            saveThisIncomeDetails.push({
                ddo: $('#ddo').val(),
                location: $('#location').val(),
                ledger: budgetIncomeDetails.ledgerName,
                ledgerId: budgetIncomeDetails._id.$oid,
                budgetHeadName: budgetIncomeDetails.budgetHeadName,
                budgetHead: budgetIncomeDetails.budgetHeadCode,
                budgetType: budgetIncomeDetails.budgetType,
                actualAmount: row.find('td:eq(3) input').val(),
                financialYear: $('#financialYear').val(),
                fundType: $('#fundType').val(),
                sector: $('#sector').val(),
                department: $('#department').val(),
                budgetNature: $('#budgetNature').val()
            });
            $(this).closest('tr').remove();
        }

        if (saveThisIncomeDetails == null || saveThisIncomeDetails == "") {
            result = 0;
        }
        if (result != 0)
        {
            var id = getUserSessionElement("userId");
            $.post(server_base_url + "/budget/BudgetMaster/PreviousBudgetAmountDetails/Save", {
                objJson: JSON.stringify(saveThisIncomeDetails),
                userid: id,
                status: "Save"
            }).done(function (data) {
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

                    displaySuccessMessages("ErrorDiv", successMessage, "");
                    setTimeout(function () {
                        createPreviousBudgetActualAmount();
                        $(".smallErrorMsg").text("");
                    }, 3000);
                    clearSuccessMessageAfterTwoSecond("ErrorDiv");
                }
            });
        } else
        {
            displayErrorMessages("ErrorDiv", selectAtleastoneRecord, "");
            setTimeout(function () {
                $("#ErrorDiv").text("");
            }, 3000);
        }
    }
}

function displayTablePB(divId)
{
    var fundType = $("#fundType").val();
    var budgetType = $("#budgetType").val();
    var budgetHead = $("#budgethead").val();
    $(".smallErrorMsg").text("");

    $("#ViewDataList").text("").append("<div id='ViewDataListPanel' class='panel panel-blue' />");
    $("#ViewDataListPanel").text("").append("<div id='ViewDataListPanelHeading' class='panel-heading' />");
    $("#ViewDataListPanelHeading").append("<h4 id='ViewDatafirstHeader1' class='panel-title' />");
    $("#ViewDatafirstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>View Previous Budget Actual Amount Data</center>");

    $("#ViewDataListPanel").append("<div id='ViewDatacollapseOne3' class='panel-collapse collapse in' />");
    $("#ViewDatacollapseOne3").append("<div id='ViewDatalistpanelMainBody' class = 'panel-body' />");
    $("#ViewDatalistpanelMainBody").text("").append("<div id='ErrorDiv'/>");
    $("#ViewDatalistpanelMainBody").append("<div id='ViewDatalistpanelRow' class='row' />");
    $("#ViewDatalistpanelRow").append("<div class='tab-pane' id='ViewDataviewUser'/>");
    $("#ViewDataviewUser").append("<div class='table-responsive' id='ViewDataviewUserSectionTableDiv' />");
    $("#ViewDataviewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='ViewDatadisplayBankTable' />");
    $("#ViewDatadisplayBankTable").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Actual Budget(Lac)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Edit</th>"
            + "</tr></thead>");

    $.get(server_base_url + "/budget/BudgetMaster/PreviousBudgetAmountDetails/View", {
        budgetHead: budgetHead,
        fundType: fundType,
        budgetType: budgetType,
        ddo: $('#ddo').val(),
        location: $('#location').val(),
        financialYear: $('#financialYear').val(),
        sector: $('#sector').val(),
        department: $('#department').val(),
        type: $('#budgetNature').val()
    }).done(function (bdata) {
        bdata = JSON.parse(bdata);
//        alert(JSON.stringify(bdata));
        if (bdata == fail) {
        } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#ViewDatadisplayBankTable").append("<tbody id='ViewDatadisplayBankTableBody' class='table-striped table-bclased' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {

                        sno++;
                        var objJson = JSON.stringify(bdata[i]);
                        $("#ViewDatadisplayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].ledger + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].actualAmount + "</td>"
                                + "<td style='cursor:pointer;' onclick=displayPreviousBudgetForEdit('" + encodeURI(objJson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");

                    }
                    $("#ViewDatadisplayBankTable").dataTable({
                        paging: true

                    });

                }
            }
        }

    });
}
function displayPreviousBudgetForEdit(obj) {
    $("#messageDiv").text("");
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $(".smallErrorMsg").text("");
    $("#tableHeaderTable").text("").append("<div id='maritalListPanelSearch' class='panel panel-blue' />");
    $("#maritalListPanelSearch").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>Update Income Sanction Budget</center>");
    $("#maritalListPanelSearch").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").append("<div id='listpanelRow1' class='row' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow1").text("").append("<div id='messageDiv'></div>");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='viewUser'/>");
    $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
    $("#displayBankTable").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Ledger Name</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Budget Head</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Requested Amount(In Lac)<span class='require'>&nbsp;&nbsp*</span></th>"
            + "</tr></thead>");
    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
    $("#displayBankTableBody").text("").append("<tr id='" + obj.status + "' style='cursor:pointer;' >"
            + "<td>1<input type='hidden' value='" + encodeURI(JSON.stringify(obj)) + "'></td>"
            + "<td style='cursor:pointer;'>" + obj.ledger + "<input type='hidden' value='" + obj._id.$oid + "'></td>"
            + "<td style='cursor:pointer;'>" + obj.budgetHeadName + "</td>"
            + "<td style='cursor:pointer;'><input type='text'  value='" + obj.actualAmount + "'></td>");
    $("#listpanelRow").append("<div class='row' id='saveSubmitResetPrintRow'/>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-3'></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-success mr5 btn-flat'  onclick='UpdatePreviousBudgetAmount()'>Update</button></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-warning mr5 btn-flat' onclick=UpdatePreviousBudgetAmountBack() >Back</button></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");

}
function UpdatePreviousBudgetAmount() {
    var id;
    var totalAmount;
    $('#displayBankTable tbody tr ').each(function (i) {
        var row = $(this).closest('tr');
        var actualBudget = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
        id = actualBudget._id.$oid;
        totalAmount = row.find('td:eq(3) input').val();
        $(this).closest('tr').remove();
    });
    $.post(server_base_url + "/budget/BudgetMaster/PreviousBudgetAmountDetails/Update", {
        Id: id,
        totalAmount: totalAmount,
        userid: getUserSessionElement("userId")
    }).done(function (data) {
        if (data == fail) {
            displaySmallErrorMessages("messageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displaySmallErrorMessages("messageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessages("messageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessages("messageDiv", "No User available" + "<br/><br/>");
        } else {
            $(".smallErrorMsg").text("");
            displaySuccessMessages("ErrorDiv", updateMessage, "");
            $("#previousBudgetAmountButton").click();
            setTimeout(function () {
            }, 3000);
            displaySuccessMessages("ErrorDiv", updateSuccessMessage, "");
            clearSuccessMessageAfterTwoSecond("ErrorDiv");
        }
    });
}
function UpdatePreviousBudgetAmountBack()
{
    $("#tableHeaderTable").text("");
}