/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Not used this page

function displayBudgetExpense() {
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetTransactionMenuTabs()">Budget Transaction</a></label> >> <label>Create Expense Budget @ Department</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetTypeMainDiv"/>');
    $("#budgetTypeMainDiv").text("").append("<div id='mainTabMenu' class='page-content'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Create Expense Budget</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='budgetIncomepanelRow' class='row' />");

    $("#budgetIncomepanelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#budgetIncomepanelRow").append("<div id='budgetIncomeFieldGroup' class='form-group' />");
    getTwoColumnInRow("budgetIncomeFieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel("From DDO", "required") + "" + getDropDown("ddo"));
    $("#Row1Col2").append(getLabel("From Location", "") + "" + getInputwithErrSpan("location", "", "", "readonly"));
    $("#panelMainBody").append("<div id='budgetIncomepanelRow1' class='row' />");
    $("#budgetIncomepanelRow1").append("<div id='budgetIncomeFieldGroup1' class='form-group' />");
    getTwoColumnInRow("budgetIncomeFieldGroup1", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel("Financial Year", "required") + "" + getDropDown("financialYear"));
    $("#Row2Col2").append(getLabel("Budget Code", "") + "" + getInputwithErrSpan("budgetCode", "", "", "readonly"));
    $("#panelMainBody").append("<div id='budgetIncomepanelRow2' class='row' />");
    $("#budgetIncomepanelRow2").append("<div id='budgetIncomeFieldGroup2' class='form-group' />");
    getTwoColumnInRow("budgetIncomeFieldGroup2", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));
    $("#Row3Col2").append(getLabel("Sector", "required") + "" + getDropDown("sector"));
    //
    $("#budgetIncomeFieldDiv4").append("<span id='fundTypeErr'></span>");
    $("#budgetIncomeFieldDiv5").append("<span id='sectorErr'></span><br>");
    //
    $("#panelMainBody").append("<div id='budgetIncomepanelRow3' class='row' />");
    $("#budgetIncomepanelRow3").append("<div id='budgetIncomeFieldGroup3' class='form-group' />");
    getTwoColumnInRow("budgetIncomeFieldGroup3", "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col1").append(getLabel("Budget Type", "required") + "" + getDropDown("budgetType"));
    $("#Row4Col2").append(getLabel("Budget Date", "") + "" + getInputwithErrSpan("budgetDate", "", "", ""));

    $("#budgetDate").datepicker();

    //
    $("#panelMainBody").append("<div id='budgetIncomepanelRow4' class='row' />");
    $("#budgetIncomepanelRow4").append("<div id='budgetIncomeFieldGroup4' class='form-group' />");
    getTwoColumnInRow("budgetIncomeFieldGroup4", "Row5", "Row5Col1", "Row5Col2");

    $("#Row5Col1").append(getLabel("Previous Budget", "") + "" + getInputwithErrSpan("previousBudget", "", "", ""));



    // $("#budgetIncomepanelRow4").append('<div class="col-md-6" id="Row5Col2">');
    //  $("#Row5Col2").append('<div class="form-group has-success" id="form_group_div">');
    $("#Row5Col2").append('<label for="remarks" class="control-label">Remarks</label>');
    $("#Row5Col2").append('<textarea id="remarks" type="text" placeholder="Remarks" class="form-control"/>');


    $("#panelMainBody").append("<div id='budgetIncomepanelRow5' class='row' />");
    $("#budgetIncomepanelRow5").append("<div  class='col-xs-3' />\n\
<div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success pull-right mr5'  onclick='validateBudgetExpense()'>Create</button></div>\n\
<div class='col-xs-2'><button type='button' onclick='resetPensionBank()' class='btn btn-warning pull-left mr5' name='reset' value='reset'>Reset</button></div>");





    fetchAllSectorValues("", "sector", "Sector");
    fetchAllDDOValues("", "ddo", "DDO");
    fetchAllfinancialYearValues("", "financialYear", "Financial Year");
    fetchAllfundTypeValues("", "fundType", "Fund Type");
    fetchAllbudgetTypeValues("", "budgetType", "Budget Type");


    $("#tableHeader").append("<div id='associationListPanel' class='panel panel-blue' />");
    $("#associationListPanel").append("<div id='associationListPanelHeading' class='panel-heading' />");
    $("#associationListPanelHeading").append("<h4 id='associationfirstHeader1' class='panel-title' />");
    $("#associationfirstHeader1").append("<a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#associationpanel' href='#collapseOneass2'><center>List of DDO HeadCode Mapping(s)</center></a>");
    $("#associationListPanel").append("<div id='collapseOneassociationthr12' class='panel-collapse collapse in' />");
    $("#collapseOneassociationthr12").append("<div id='associationpanelMainBody2' class = 'panel-body' />");
    //  $("#associationpanelMainBody2").append("<center><span id='pregviewsuccessBeforeassociation'></span></center>");
    $("#associationpanelMainBody2").append("<div id='associationpanelRow4' class='row' />");

    $("#tableHeader").append("<div id='budgetIncomeListPanel' class='panel panel-blue' />");
    $("#budgetIncomeListPanel").append("<div id='budgetIncomeListPanelHeading' class='panel-heading' />");
    $("#budgetIncomeListPanelHeading").append("<h4 id='budgetIncomefirstHeader1' class='panel-title' />");
    $("#budgetIncomefirstHeader1").append("<a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#associationpanel' href='#collapseOneass2'><center>List of Budget Expense Request(s)</center></a>");
    $("#budgetIncomeListPanel").append("<div id='budgetIncomeListPanelcolapse' class='panel-collapse collapse in' />");
    $("#budgetIncomeListPanelcolapse").append("<div id='budgetIncomepanelMainBody2' class = 'panel-body' />");

    viewAllExpenseBudget('budgetIncomepanelMainBody2');
}
function fetchAllSectorValues(name, DivId, message) {
    $.get(server_base_url + "/budget/master/BudgetSector/View", {
    }).done(function(pdata) {
        if (pdata.length > 0) {
            $("#" + DivId).append("<option value ='' selected disabled>---- Select " + message + " ----</option>");
            for (var i = 0; i < pdata.length; i++) {
                if (name == pdata[i].description) {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                } else {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                }
            }
        }

    });

}
function fetchAllDDOValues(name, DivId, message) {

    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function(pdata) {
        if (pdata.length > 0) {
            $("#" + DivId).append("<option value ='' selected disabled>---- Select " + message + " ----</option>");
            for (var i = 0; i < pdata.length; i++) {
                if (name == pdata[i].ddoName) {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
                } else {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
                }
            }
        }

    });
}
//function fetchAllfinancialYearValues(name, DivId, message) {
//
//    $.get(server_base_url + "/budget/master/FinancialYear/View", {
//    }).done(function (pdata) {
//        for (var i = 0; i < pdata.length; i++) {
//            var active = pdata[i].active;
//            if (active == 'Yes') {
//                $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].fromDate + "-" + pdata[i].toDate + "</option>");
//            } else {
//                $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].fromDate + "-" + pdata[i].toDate + "</option>");
//            }
//        }
//    });
//
//}
function fetchAllfundTypeValues(name, DivId, message) {

    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function(pdata) {
        if (pdata.length > 0) {
            $("#" + DivId).append("<option value ='' selected disabled>---- Select " + message + " ----</option>");
            for (var i = 0; i < pdata.length; i++) {
                if (name == pdata[i].description) {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                } else {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                }
            }
        }

    });
}

function fetchAllbudgetTypeValues(name, DivId, message) {

    $.get(server_base_url + "/budget/master/BudgetType/View", {
    }).done(function(pdata) {
        if (pdata.length > 0) {
            $("#" + DivId).append("<option value ='' selected disabled>---- Select " + message + " ----</option>");
            for (var i = 0; i < pdata.length; i++) {
                if (name == pdata[i].description) {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                } else {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                }
            }
        }

    });
}
function getAllDDOValues(name) {
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function(bdata) {
        if (bdata.length > 0) {
            $("#ddo").append("<option value ='' selected disabled>---- Select DDO ----</option>");
            for (var i = 0; i < bdata.length; i++) {
                if (name == bdata[i].ddoName) {
                    $("#ddo").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].ddoName + "</option>");
                } else {
                    $("#ddo").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].ddoName + "</option>");
                }
            }
        }

    });

}
function getAllSectorValues(name) {
    $.get(server_base_url + "/budget/master/BudgetSector/View", {
    }).done(function(bdata) {
        if (bdata.length > 0) {
            $("#sector").append("<option value ='' selected disabled>---- Select Sector ----</option>");
            for (var i = 0; i < bdata.length; i++) {
                if (name == bdata[i].description) {
                    $("#sector").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
                } else {
                    $("#sector").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
                }
            }
        }

    });

}

function getAllfinancialYearValues(name, DivId, message) {

    $.get(server_base_url + "/budget/master/FinancialYear/View", {
    }).done(function(bdata) {
        for (var i = 0; i < bdata.length; i++) {
            var active = bdata[i].active;
            if (active == 'Yes') {
                $("#financialYear").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].fromDate + "-" + bdata[i].toDate + "</option>");
            } else {
                $("#financialYear").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].fromDate + "-" + bdata[i].toDate + "</option>");
            }
        }
    });

}
function getAllfundTypeValues(name, DivId, message) {

    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function(bdata) {
        if (bdata.length > 0) {
            $("#" + DivId).append("<option value ='' selected disabled>---- Select Fundtype----</option>");
            for (var i = 0; i < bdata.length; i++) {
                if (name == bdata[i].description) {
                    $("#funddType").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
                } else {
                    $("#fundType").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
                }
            }
        }

    });
}

function getAllbudgetTypeValues(name, DivId, message) {

    $.get(server_base_url + "/budget/master/BudgetType/View", {
    }).done(function(bdata) {
        if (bdata.length > 0) {
            $("#" + DivId).append("<option value ='' selected disabled>---- Select " + message + " ----</option>");
            for (var i = 0; i < bdata.length; i++) {
                if (name == bdata[i].description) {
                    $("#" + DivId).append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
                } else {
                    $("#" + DivId).append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
                }
            }
        }

    });
}

function validateBudgetExpense() {
    var fundType = $("#fundType").val();
    var ddo = $("#ddo").val();
    var sector = $("#sector").val();
    var financialYear = $("#financialYear").val();
    if (fundType == "" || fundType == undefined || fundType == null || ddo == "" || ddo == undefined || ddo == null || sector == "" || sector == undefined || sector == null || financialYear == "" || financialYear == undefined || financialYear == null) {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
    } else {
        viewExpenseDDOList();
    }
}

function viewExpenseDDOList() {

    var ddo = $("#ddo").val();
    var sector = $("#sector").val();
    var fundType = $("#fundType").val();
    $("#associationpanelRow4").text("").append("<div id='associationSubDiv1' class = 'panel panel-primary-head'></div>");
    $("#associationSubDiv1").append("<table id='associationTable' class='table table-striped table-bordered'></table>");
    $("#associationTable").append("<thead class=''><tr>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Select</th>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Head Code</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Budget Head</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Previous actual Amount(In Lac)</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Requested Amonut(In Lac)</th>"

            + "</tr></thead>");

    // var religion = $("#religionName").val();
    $.get(server_base_url + "/budget/transaction/IncomeBudget/Create", {
        ddo: ddo,
        sector: sector,
        fundType: fundType
    }).done(function(pdata) {


        if (pdata == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (pdata == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata == statusException) {
            displayLargeSuccessMessages("pregviewsuccessBeforeassociation", "" + NoDataFound + "<br /><br />");
            displayLargeSuccessMessages("pregviewsuccessBeforeassociation", "" + NoDataFound + "<br /><br />");
        } else {
            if (pdata != null) {

                if (pdata.length > 0) {

                    var sno = 0;

                    $("#associationTable").append("<tbody id='associationTableBody' class='table-striped table-bordered' />");

                    for (var i = 0; i < pdata.length; i++) {

                        sno++;

                        var objJson = {
                            bid: pdata[i]._id.$oid,
                            govtBudgetHead: pdata[i].govtBudgetHead,
                            fundType: pdata[i].fundType,
                            budgetHeadDisplay: pdata[i].budgetHeadDisplay,
                            budgetHead: pdata[i].budgetHead,
                            budgetHeadDescription: pdata[i].budgetHeadDesc,
                            underBudgetHead: pdata[i].underBudgetHead,
                            remarks: pdata[i].remarks,
                            activeStatus: pdata[i].activeStatus
                        }
                        objJson = JSON.stringify(objJson);
                        $("#associationTableBody").append("<tr  style='cursor:pointer;' >"
                                + "<td><input type='checkbox'  name='case'></td>"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i]._id.$oid + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].budgetHead + "</td>"
                                + "<td style='cursor:pointer;'><input type='text' id='previousActualAmount' readonly/></td>"
                                + "<td style='cursor:pointer;'><input type='text' id='requestedAmount'/></td></tr>");
                    }
                    $("#associationSubDiv1").append("<center><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='saveSomeDta()'>Save</button></center>");
                    $("#associationTable").DataTable({
                        paging: true
                    });
                }
            }
        }
    });
}

function saveSomeDta() {

    var financialYear = $("#financialYear").val();
    var budgetType = $("#budgetType").val();
    var budgetDate = $("#budgetDate").val();
    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var budgetCode = $("#budgetCode").val();
    var fundType = $("#fundType").val();
    var sector = $("#sector").val();
    var previousBudget = $("#previousBudget").val();

    var rowid = [];
    var checkedrowList = [];
    $('#associationTable tr input[type="checkbox"][name="case"]:checked').each(function() {
        var row = $(this).closest('tr');

        checkedrowList.push({
            headCode: row.find('td:eq(2)').text(),
            budgetHead: row.find('td:eq(3)').text(),
            requestedAmount: row.find('td:eq(5)').find('input').val(),
            financialYear: financialYear,
            budgetType: budgetType,
            budgetDate: budgetDate,
            ddo: ddo,
            location: location,
            budgetCode: budgetCode,
            fundType: fundType,
            previousBudget: previousBudget,
            sector: sector
        });
    });



    if (checkedrowList.length > 0) {
        $.get(server_base_url + "/budget/BudgetTransactions/BudgetExpense/Save", {
            objJson: JSON.stringify(checkedrowList)
        }).done(function(data) {

            if (data == fail) {
                displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized) {
                displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            } else {
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function() {
                    displayBudgetExpense();
                }, 3000);

            }

        });
    }
    {
        scrolupfunction();
        displayErrorMessages("pregsuccessBefore", selectAtleastoneRecord, "");
        setTimeout(function() {
            $("#pregsuccessBefore").text("");
        }, 3000);
    }
}