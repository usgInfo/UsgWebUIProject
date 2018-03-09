/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Form of Consolidate Expense Report
function budgetConsolidateIncomeBudgetmaster(divId) {
    scrolupfunction();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetTransactionMenuTabs()">Budget Transaction</a></label> >> <label>Consolidate Income Budget @ DDO</label>');
    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;'    />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#mainTabMenu").append("<div id='SearchFormTable' />");
    $("#mainTabMenu").append("<div id='tableHeaderTable' />");
    if (checkUserPrivelege(pvCreateBudgetConsolidatedIncome)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Consolidate Income Budget @ DDO</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#collapseFin").click(function() {
            $("#accordion2").toggle();
            if ($("#collapseFin span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#FirstPanel").append("<div id='accordion2' class='panel-collapse collapse in pal' />");
        $("#accordion2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");

        $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        //FinancialConsolidateExpenseBudgetCode Table

        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("Financial Year", "required") + "" + getDropDown("financialYear"));
        $("#Row1Col2").append(getLabel("Budget Code", "") + "" + getInputwithErrSpan("budgetCode", "", "", ""));
        $("#FieldDiv").append("<span id='financialYearErr'></span>");
        $("#FieldDiv1").append("<span id='budgetCodeErr'></span>");
        //
        $("#panelMainBody").append("<div id='panelRow1' class='row' />");
        $("#panelRow1").append("<div id='FieldGroup1' class='form-group' />");
        getTwoColumnInRow("FieldGroup1", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));
        $("#Row2Col2").append(getLabel("Sector", "required") + "" + getDropDown("sector"));

        $("#panelMainBody").append("<div id='panelRow2' class='row' />");
        $("#panelRow2").append("<div id='FieldGroup2' class='form-group' />");
        getTwoColumnInRow("FieldGroup2", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Budget Type", "required") + "" + getDropDown("budgetType"));
        $("#Row3Col2").append(getLabel("Consolidate Budget Date", "required") + "" + getInputwithErrSpan("consolidateBudgetDate", "", "", "onkeypress='return false'"));
        var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
        if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
        {
            var finyearArray = currentFinancialYear.split("~");
        }
        if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
        {
            var fromFinacialYear = finyearArray[0];
            var toFinacialYear = finyearArray[1];
        }
        $('#consolidateBudgetDate').datepicker({
            changeYear: true,
            changeMonth: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear
        });
        //

        $("#panelMainBody").append("<div id='panelRow3' class='row' />");
        $("#panelRow3").append("<div id='FieldGroup3' class='form-group' />");
        getTwoColumnInRow("FieldGroup3", "Row4", "Row4Col1", "Row4Col2");
        //$("#Row4Col1").append(getLabel("Previous Budget", "") + "" + getInputwithErrSpan("previousBudget", "", "", "onkeypress='return validateNumber(event)'"));
        $("#Row4Col2").append(getLabel("Previous Budget", "") + "" + getDropDown("previousBudget", "", "", ""));
        document.getElementById("previousBudget").disabled = true;
        $("#Row4Col1").append(getLabel("BudgetHead", "") + "" + getDropDown("budgethead"));

        $("#budgetType").attr("onchange", " getAllSrNosForConsolidated('previousBudget')");

        $("#panelMainBody").append("<div id='panelRow4' class='row' />");

        $("#panelRow4").append("<div  class='col-xs-12' /><center><button type='button'  value='Save' class='btn btn-success mr5 ' id='createIncomeBudgetButton' onclick='CreateConsolidateIncomeBudgetValidation()'>Create</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllFinancialConsolidateIncomeBudgetCodeData()' class='btn btn-warning mr5 ' name='reset' value='reset'>Reset</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='searchforIncomeBudget()' class='btn btn-warning mr5' name='reset' value='reset'>Search</button></center></div>");

        getBudgetfinancialyearForConsolidateExpense("financialYear");
        viewReDddoListForList("", "ddo");
        viewOption("budget/master/FundType/View", "", "description", "fundType", "Fund Type");
        fetchAllSec("", "sector", "Sector");

        viewOption("/hrms/common/BudgetHead/View", "", "budgetHead", "budgethead", "Budget Head");
        viewOption("budget/master/BudgetType/View", "", "description", "budgetType", "Budget Type");
    }

}
//Search Div
function getAllSrNosForConsolidated(id)
{

    var fundType = $("#fundType").val();
    var sector = $("#sector").val();
    var location = $("#location").val();
    var finYear = $("#financialYear").val();
    var budgetType = $("#budgetType").val();
    $("#" + id).val("");
    $("#previousBudget").val("");
    if (location == "" || location == null)
        var Json = {
            sector: sector,
            fundType: fundType,
            budgetType: budgetType,
            financialYear: finYear
        }
    var Json = JSON.stringify(Json);
    //alert(Json);
    var department = [];
    if ($("#department").val() == "")
    {
        $("#department option").each(function()
        {
            // Add $(this).val() to your list

            if ($(this).val() != "")
            {
                department.push($(this).val());
            }

        });
    } else
    {
        department.push($("#department").val());
    }
    $.get(server_base_url + "/budget/transaction/IncomeBudget/getAllConsolidatedserNos", {
        obj: Json,
        department: JSON.stringify(department)

    }).done(function(pdata)
    {
        if (pdata != null)
        {
            $("#" + id).text("");
            //alert(pdata);
            if (pdata == null || pdata == "" || pdata == 500 || pdata == 501)
            {
                document.getElementById(id).disabled = true;
                // $("#"+ id).text("").append("<option >" + NoDataFound + "</option>");
            } else
            {
                $("#" + id).text("");
                $("#" + id).text("").append("<option >---------- Previous Budgets-------</option>");
                for (var i = 0; i < pdata.length; i++)
                {
                    document.getElementById(id).disabled = false;
                    $("#" + id).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].srNo + "</option>");

                }
            }
        }
    });

}
function searchforIncomeBudget() {
    if (checkUserPrivelege(pvViewBudgetConsolidatedIncome)) {
        $("#SearchFormTable").text("").append("<div id='searchPanel' class='panel panel-blue' />");
        $("#searchPanel").append("<div id='searchHeading' class='panel-heading' />");
        $("#searchHeading").append("<h4 id='searcHheaderName' class='panel-title' />");
        $("#searcHheaderName").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion21' href='#Searchbody'><center>Search Criteria</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#collapseFin1").click(function() {
            $("#accordion21").toggle();
            if ($("#collapseFin1 span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin1").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin1").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#searchPanel").append("<div id='accordion21' class='panel-collapse collapse in pal' />");
        $("#accordion21").append("<div id='SearchbodyMainBody' class = 'panel-body' />");

        $("#SearchbodyMainBody").append("<div id='SearchbodyMainBodypanelRow' class='row'/>");
        $("#SearchbodyMainBodypanelRow").append("<center><span id='pregsuccessBeforeSearchId'></span></center>");

        $("#SearchbodyMainBodypanelRow").append("<div id='row1' class='form-group' />");
        getTwoColumnInRow("row1", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel("Financial Year", "") + "" + getDropDown("financailYearSearch"));
//    $("#Row5Col2").append(getLabel("DDO", "required") + "" + getDropDown("ddoSearch"));

        $("#SearchbodyMainBodypanelRow").append("<div id='BudegtheadSearch' class='form-group' />");
        getTwoColumnInRow("BudegtheadSearch", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel("Budget Type", "required") + "" + getDropDown("budgetTypeSearch"));
        $("#Row6Col2").append(getLabel("Status", "required") + "" + getDropDown("status"));

        $("#SearchbodyMainBodypanelRow").append("<div id='row2' class='form-group' />");
        getTwoColumnInRow("row2", "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundTypeSearch"));
        $("#Row7Col2").append(getLabel("Sector", "required") + "" + getDropDown("sectorSearch"));

        $("#SearchbodyMainBodypanelRow").append("<div id='searchbut' class='form-group' />");
        $("#searchbut").append("<label class='col-sm-5 control-label'></label>");
        $("#searchbut").append("<div id='savesearchButton' class='col-sm-7' />");
        $("#savesearchButton").append("<button class='btn btn-success mr5 btn-flat' id='ConsolidateSearchIncomeButton' onclick='validateConsolidateIncomeBudgetSearch()'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp");
        $("#savesearchButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='resetConsolidateExpenseBudgetCodeSearch()'>Reset</button>&nbsp&nbsp&nbsp");
        getBudgetfinancialyearForConsolidateExpense("financailYearSearch");
        viewReDddoListForList("", "ddoSearch");
        viewOption("budget/master/FundType/View", "", "description", "fundTypeSearch", "Fund Type");
        fetchAllSec("", "sectorSearch", "Sector");
//    viewOption("budget/master/BudgetSector/View", "", "description", "sectorSearch", "Sector");
        viewOption("budget/master/BudgetType/View", "", "description", "budgetTypeSearch", "Budget Type");
        var statusOptions = ["Save", "Submit"];
        getHardCodedOptions("status", "Status", statusOptions);
    }
}

function fetchAllSec(name, DivId, message) {
    $.get(server_base_url + "/budget/master/BudgetSector/View", {
    }).done(function(pdata) {

        $("#" + DivId).append("<option value ='' selected disabled>---- Select " + message + " ----</option>");
        var sno = 0;
        var mainData = pdata.result;

        for (var i = 0; i < mainData.length; i++) {
            var subData = mainData[i];
            if (name == subData.description) {
                $("#" + DivId).append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
            } else {
                $("#" + DivId).append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
            }
        }


    });

}

function CreateConsolidateIncomeBudgetValidation() {

    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv("FieldGroup");
    $("#financialYearErr").text("");
    $("#fundTypeErr").text("");
    $("#sectorErr").text("");
    $("#budgetTypeErr").text("");
    $("#consolidateBudgetDateErr").text("");
    var financialYear = $("#financialYear").val();
    var fundType = $("#fundType").val();
    var sector = $("#sector").val();
    var budgetType = $("#budgetType").val();
    var consolidateBudgetDate = $("#consolidateBudgetDate").val();
//    if (preValidation(financialYear) || preValidation(fundType) || preValidation(sector) || preValidation(budgetType) || preValidation(consolidateBudgetDate)) {
//        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", mandatoryFieldMsg);
//        return false;
//    } else {
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
    if ($('#consolidateBudgetDate').val() == null || $('#consolidateBudgetDate').val() == "") {
        $("#consolidateBudgetDate").focus();
        displaySmallErrorMessages("consolidateBudgetDateErr", "Please enter date.");
        result = 0;
    }
//    if ($('#budgethead').val() == null || $('#budgethead').val() == "") {
//        $("#budgethead").focus();
//        displaySmallErrorMessages("budgetheadErr", "Please Select Budget Head.");
//        result = 0;
//    }
    if (result != 0) {
        viewConsolidateIncomeBudgetCodeList();
    }
    //  }
}

function viewConsolidateIncomeBudgetCodeList()
{
    if (checkUserPrivelege(pvViewBudgetConsolidatedIncome)) {
        var ddo = getUserSessionElement(seDDOId);
        var financialYear = $("#financialYear").val();
        var fundType = $("#fundType").val();
        var sector = $("#sector").val();
        var budgetType = $("#budgetType").val();
        var budgethead = $("#budgethead").val();
        var consolidateBudgetDate = $("#consolidateBudgetDate").val();
        //For List Table

        $("#tableHeaderTable").text("").append("<div id='incomeBudgetListPanel' class='panel panel-blue' />");
        $("#incomeBudgetListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        //$("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List Of Ledgers</center>");
        $("#firstHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>List Of Ledgers</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanelSearch").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#collapseFin11").click(function() {
            $("#collapseOne3").toggle();
            if ($("#collapseFin11 span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin11").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin11").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#incomeBudgetListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='ErrorDiv'/>");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");

        var searchObj = {
            ddo: ddo,
            financialYear: financialYear,
            fundType: fundType,
            sector: sector,
            budgetType: budgetType,
            budgetHead: budgethead
        };
        setTimeout(function() {
            $.get(server_base_url + "budget/transaction/ConsolidateExpenseBudget/Search", {
                searchObj: JSON.stringify(searchObj),
                condition: "IncomeBudget"
            }).done(function(bdata) {
                $("#SearchFormTable").text("");
                bdata = JSON.parse(bdata);
                if (bdata == fail) {
                    displayLargeErrorMessagesInCenterInRed("ErrorDiv", noDataAvailable);
                } else if (bdata == unauthorized) {
                    displayLargeErrorMessagesInCenterInRed("ErrorDiv", unauthorizedMessage);
                } else if (bdata == invalidSession) {
                    callSessionTimeout();
                } else if (bdata == statusException) {
                    displayLargeErrorMessagesInCenterInRed("ErrorDiv", noDataAvailable);
                } else {
                    if (bdata != null) {
                        if (bdata.length > 0) {
                            $("#displayBankTable").append("<thead class=''><tr>"
                                    //   + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                                    + " <th> S.No</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Ledger Name </th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Requested Amount(In Lacs)</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Asked for Amount(In Lacs)</th>"
                                    + "</tr></thead>");
                            var sno = 0;
                            $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                            for (var i = bdata.length - 1; i >= 0; i--) {
                                var result = 1;
                                result = 1;
                                var amount = 0;
                                if (result != 0) {
                                    sno++;
                                    var spanErr = sno + "Err";
                                    var objJson = JSON.stringify(bdata[i]);
                                    $("#displayBankTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                            //     + "<td><input type='checkbox' value='" + sno + "' name='case'></td>"
                                            + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                            + "<td style='cursor:pointer;'>" + bdata[i].ledger + "<input type='hidden' value='" + consolidateBudgetDate + "'></td>"
                                            + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                            + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].requestedAmount + "' readonly></td>"
                                            + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + amount + "'><span id=" + spanErr + "></span><span id='emountErr" + sno + "'></span></td>");

                                    $("#displayBankTable thead tr th:first input:checkbox").change(function() {
                                        $("#displayBankTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                                    });
                                    $("#displayBankTable tbody tr td:first-child input:checkbox").change(function() {
                                        var tot = $(".case").length;
                                        var tot_checked = $(".case:checked").length;
                                        if (tot != tot_checked) {
                                            $("#selectall").prop('checked', false);
                                        }
                                    });

                                }
                            }
                            if (sno > 0) {
                                var save = "Save";
                                var submit = "Submit";
                                if (checkUserPrivelege(pvCreateBudgetConsolidatedIncome)) {
                                    $("#listpanelRow").append("<div class='row' id='saveSubmitResetPrintRow'/>");
                                    $("#saveSubmitResetPrintRow").append('<center><button type="button"  value="Save" class="btn btn-success mr5 btn-flat"  onclick=saveConsolidateExpenseBudgetDetails("' + save + '")>Save</button>&nbsp;&nbsp;&nbsp;<button name="reset" value="reset" type="button" class="btn btn-warning mr5" onclick=resetTextFieldsofTable("displayBankTable","5")>Reset</button></center>');

                                }
                            }
                            $('#displayBankTable').dataTable();
                        } else {
                            displayLargeErrorMessagesInCenterInRed("ErrorDiv", noDataAvailable);
                        }
                    }
                }
            });
        }, 1000);
    }
}

function saveConsolidateExpenseBudgetDetails(saveorsubmit, searchSubmit) {
    if (checkUserPrivelege(pvCreateBudgetConsolidatedIncome)) {
        var status = "false";
        $('#displayBankTable tbody  tr').each(function(i) {
            i++;

            $("#emountErr" + i).text("").val("");
        });
        $('#displayBankTable tbody  tr ').each(function(i) {
            var row = $(this).closest('tr');
            var requestedAmount = row.find('td:eq(4) input').val();
            var rowId = row.find('td:eq(0)').text();
            if (requestedAmount == "")
            {
                displaySmallErrorMessages("emountErr" + rowId, "Please enter Amount");

                status = "true";
            }
        });

        if (status == "false")
        {

            var result = 1;
            var saveThisConsolidateDetails = [];
            var rows = $("#displayBankTable").dataTable().fnGetNodes();
            for (var i = 0; i < rows.length; i++)
            {
                var row = $(rows[i]);
//            $('#displayBankTable tbody tr input[type="checkbox"][name="case"]:checked').each(function(i) {
//                var row = $(this).closest('tr');
                var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
                saveThisConsolidateDetails.push({
                    ddo: budgetIncomeDetails.ddo,
                    financialYear: budgetIncomeDetails.financialYear,
                    budgetCode: budgetIncomeDetails.budgetCode,
                    fundType: budgetIncomeDetails.fundType,
                    budgetType: budgetIncomeDetails.budgetType,
                    sector: budgetIncomeDetails.sector,
                    budgetDate: budgetIncomeDetails.budgetDate,
                    requestedAmount: budgetIncomeDetails.requestedAmount,
                    budgetHead: budgetIncomeDetails.budgetHead,
                    budgetHeadName: budgetIncomeDetails.budgetHeadName,
                    headCode: budgetIncomeDetails.headCode,
                    ledgerId: budgetIncomeDetails.ledgerId,
                    ledger: budgetIncomeDetails.ledger,
                    headDescription: budgetIncomeDetails.headDescription,
                    location: budgetIncomeDetails.location,
                    prievioueBudget: budgetIncomeDetails.prievioueBudget,
                    incomeBudgetIdList: budgetIncomeDetails.incomeBudgetIdList,
                    askedForAmount: row.find('td:eq(4) input').val(),
                    consolidateBudgetDate: row.find('td:eq(1) input').val(),
                    consolidateBudgetStatus: saveorsubmit,
                    isSanctioned: "false"
                });
                $(this).closest('tr').remove();
            }
            if (saveThisConsolidateDetails == null || saveThisConsolidateDetails == "") {
                result = 0;
            }
            if (result != 0)
            {
                $.post(server_base_url + "budget/transaction/ConsolidateExpenseBudget/Save", {
                    objJson: JSON.stringify(saveThisConsolidateDetails),
                    userid: getUserSessionElement("userId"),
                    financialYear: $('#financialYear').val(),
                    budgetType: $('#budgetType').val(),
                    fundType: $('#fundType').val(),
                    sector: $('#sector').val()
                }).done(function(data) {
                    if (data == fail) {
                        displaySmallErrorMessages("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
                    } else if (data == unauthorized) {
                        displaySmallErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
                    } else if (data == statusException) {
                        displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
                    } else if (data == invalidSession) {
                        callSessionTimeout();
                    } else if (data == null) {
                        displaySmallErrorMessages("pregsuccessBefore", "No User available" + "<br/><br/>");
                    } else {
                        if (saveorsubmit == "Submit")
                        {
                            displaySuccessMessages("ErrorDiv", sendMessage, "");
                        } else
                        {
                            displaySuccessMessages("ErrorDiv", successMessage, "");
                        }
                        setTimeout(function() {
                            budgetConsolidateIncomeBudgetmaster("dashBoardBodyMainDiv");
                        }, 3000);
                        clearSuccessMessageAfterTwoSecond("ErrorDiv");
                    }
                });
            } else
            {
                displayErrorMessages("ErrorDiv", selectAtleastoneRecord, "");
                setTimeout(function() {
                    $("#ErrorDiv").text("");
                }, 3000);
            }
        }
    }
}
function UpdateConExpenseBudgetDetailsInSearch() {
    if (checkUserPrivelege(pvUpdateBudgetConsolidatedIncome)) {
        var result = 1;
        var saveThisConsolidateDetails = [];
//        $('#displayBankTable tbody tr input[type="checkbox"][name="case"]:checked').each(function(i) {
        var rows = $("#displayBankTable").dataTable().fnGetNodes();
        for (var i = 0; i < rows.length; i++)
        {
            var row = $(rows[i]);
            var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
            saveThisConsolidateDetails.push({
                incomeBudgetId: row.find('td:eq(1) input').val()
            });
            $(this).closest('tr').remove();
        }
        if (saveThisConsolidateDetails == null || saveThisConsolidateDetails == "") {
            result = 0;
        }
        if (result != 0)
        {
            var userid = getUserSessionElement("userId");
            $.post(server_base_url + "budget/transaction/ConsolidateIncomeBudget/Submit", {
                objJson: JSON.stringify(saveThisConsolidateDetails),
                userid: userid
            }).done(function(data) {
                if (data == fail) {
                    displaySmallErrorMessages("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
                } else if (data == unauthorized) {
                    displaySmallErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
                } else if (data == statusException) {
                    displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
                } else if (data == invalidSession) {
                    callSessionTimeout();
                } else if (data == null) {
                    displaySmallErrorMessages("pregsuccessBefore", "No User available" + "<br/><br/>");
                } else {
                    displaySuccessMessages("messageDiv", sendMessage, "");
                    setTimeout(function() {
                        $("#ConsolidateSearchIncomeButton").click();
                    }, 3000);
                }
            });
        } else
        {
            displayErrorMessages("messageDiv", selectAtleastoneRecord, "");
            setTimeout(function() {
                $("#messageDiv").text("");
            }, 3000);
        }
    }
}
function updatebudgetConsolidateExpenseBudget(obj) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#dashBoardBodyMainDiv").text("").append("<div id='testMainDivId' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu' class='col-md-6' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-primary' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Update Budget Head Code Details</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
//    $("#FirstPanel").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    //row1
    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='update'>");

    $("#FieldGroup").append("<input type='hidden' id='budgetConsolidateExpenseBudgetId' value='" + obj.budgetConsolidateExpenseBudgetId + "'>");

    $("#FieldGroup").append("<label class='col-sm-2 control-label'>Government Budget Head <em>*</em></label>");
    $("#FieldGroup").append("<div id='FieldDiv' class='col-sm-4' />");
    $("#FieldDiv").append("<select input='text' id='governmentConsolidateExpenseBudget' class='form-control'></select>");
    $("#FieldDiv").append("<span id='governmentConsolidateExpenseBudgetErr'></span>");
    $("#FieldGroup").append("<label class='col-sm-2 control-label'>Fund Type<em>*</em></label>");
    $("#FieldGroup").append("<div id='FieldDiv1' class='col-sm-4' />");
    $("#FieldDiv1").append("<select input='text' id='fundType' class='form-control'></select>");
    $("#FieldDiv1").append("<span id='fundTypeErr'></span>");
    //
    $("#panelMainBody").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div id='FieldGroup1' class='form-group' />");
    $("#FieldGroup1").append("<label class='col-sm-2 control-label'>Budget Head <em>*</em></label>");
    $("#FieldGroup1").append("<div id='FieldDiv2' class='col-sm-4' class='form-control' />");
    $("#FieldDiv2").append("<input input='text' value='" + obj.budgetHead + "' id='budgetHead' class='form-control'>");
    $("#FieldGroup1").append("<label class='col-sm-2 control-label'>Display Budget Head <em>*</em></label>");
    $("#FieldGroup1").append("<div id='FieldDiv3' class='col-sm-4' />");
    $("#FieldDiv3").append("<input type='text'   id='displayConsolidateExpenseBudget' value='" + obj.displayConsolidateExpenseBudget + "' class='form-control'   size=15 maxlength=15>");
    $("#FieldDiv2").append("<span id='budgetHeadErr'></span>");
    $("#FieldDiv3").append("<span id='displayConsolidateExpenseBudgetErr'></span>");
    //
    $("#panelMainBody").append("<div id='panelRow2' class='row' />");
    $("#panelRow2").append("<div id='FieldGroup2' class='form-group' />");
    $("#FieldGroup2").append("<label class='col-sm-2 control-label'>Budget Head Description<em>*</em></label>");
    $("#FieldGroup2").append("<div id='FieldDiv4' class='col-sm-4' />");
    $("#FieldDiv4").append("<input type='text'  id='budgetHeadDescription'  value='" + obj.budgetHeadDescription + "' class='form-control'   size=50 maxlength=50>");
    $("#FieldGroup2").append("<label class='col-sm-2 control-label'>Under Budget Head</label>");
    $("#FieldGroup2").append("<div id='FieldDiv5' class='col-sm-4' />");
    $("#FieldDiv5").append("<select type='text' id='underConsolidateExpenseBudget' class='form-control' ></select>");
    $("#FieldDiv4").append("<span id='budgetHeadDescriptionErr'></span>");
    $("#FieldDiv5").append("<span id='underConsolidateExpenseBudgetErr'></span>");
    //
    $("#panelMainBody").append("<div id='panelRow3' class='row' />");
    $("#panelRow3").append("<div id='FieldGroup3' class='form-group' />");

    $("#FieldGroup3").append("<label class='col-sm-2 control-label'>Remarks</label>");
    $("#FieldGroup3").append("<div id='FieldDiv6' class='col-sm-4' />");
    $("#FieldDiv6").append("<textarea type='text'   id='remarks' class='form-control' placeholder='Enter remarks'   size=50 maxlength=50>" + obj.remarks + "</textarea>");
    $("#FieldGroup3").append("<label class='col-sm-2 control-label'>Is Active</label>");
    $("#FieldGroup3").append("<div id='FieldDiv7' class='col-sm-4' />");
    $("#FieldDiv7").append("<input type='checkbox' id='isActive' " + obj.isActive + "  >");
    $("#FieldDiv7").append("<span id='isActiveErr'></span>");
    $("#FieldDiv6").append("<span id='remarksErr'></span>");

    $("#panelMainBody").append("<div id='panelRow4' class='row' />");
    $("#panelRow4").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Update' class='btn btn-success pull-right mr5' onclick='CreateConsolidateIncomeBudgetValidation()'>Update</button></div><div class='col-xs-2'><button type='button' onclick=budgetConsolidateIncomeBudgetmaster('dashBoardBodyMainDiv') class='btn btn-warning pull-left mr5' name='reset' value='reset'>Back</button></div>");
    scrolupfunction();
}

function updateConsolidateExpenseBudgetCodeDetails() {
    if (checkUserPrivelege(pvUpdateBudgetConsolidatedIncome)) {
        var budgetConsolidateExpenseBudgetId = $('#budgetConsolidateExpenseBudgetId').val();
        var isActive = "No";
        if ($("#isActive").prop("checked") == true) {
            isActive = "Yes";
        }
        var budgetConsolidateExpenseBudgetJson = {
            governmentConsolidateExpenseBudget: $('#governmentConsolidateExpenseBudget').val(),
            fundType: $('#fundType').val(),
            budgetHead: $('#budgetHead').val(),
            displayConsolidateExpenseBudget: $('#displayConsolidateExpenseBudget').val(),
            budgetHeadDescription: $('#budgetHeadDescription').val(),
            underConsolidateExpenseBudget: $('#underConsolidateExpenseBudget').val(),
            remarks: $('#remarks').val(),
            isActive: isActive
        };
        $.post(server_base_url + "fiancial/common/ConsolidateExpenseBudgetCode/Update", {
            obj: JSON.stringify(budgetConsolidateExpenseBudgetJson),
            objId: budgetConsolidateExpenseBudgetId
        }).done(function(data) {
            if (data == fail) {
                displaySmallErrorMessages("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessages("pregsuccessBefore", "No User available" + "<br/><br/>");
            } else {
                displaySuccessMessages("pregsuccessBefore", updateMessage, "");
                setTimeout(function() {
                    budgetConsolidateIncomeBudgetmaster("dashBoardBodyMainDiv");
                }, 1000);
            }
        });
    }
}
// validate all fields
//Clear All Entered Data
function wipeAllFinancialConsolidateIncomeBudgetCodeData() {


    $("#fundTypeErr").text("");
    $("#sectorErr").text("");
    $("#budgetTypeErr").text("");
    $("#consolidateBudgetDateErr").text("");
    $("#budgetCodeErr").text("");
    $("#previousBudgetErr").text("");
    $("#budgetheadErr").text("");
    $("#budgethead").val("");
    $("#budgetHead").val("");
    $("#fundType").val("");
    $("#sector").val("");
    $("#budgetType").val("");
    $("#consolidateBudgetDate").val("");
    $("#budgetCode").val("");
    $("#previousBudget").val("");
    $("#department").val("");
    $("#departmentErr").text("");
    $("#financialYearErr").text("");
    $("#fundTypeErr").text("");
    $("#sectorErr").text("");
    $("#budgetTypeErr").text("");
    $("#consolidateBudgetDateErr").text("");


    $("#pregsuccessBefore").text("");


}


function validateConsolidateIncomeBudgetSearch(previousSearchJson) {
    if (checkUserPrivelege(pvViewBudgetConsolidatedIncome)) {
        if (previousSearchJson == "" || previousSearchJson == undefined || previousSearchJson == "undefined") {

        }
        var result = 1;
//    if ($('#financailYearSearch').val() == null || $('#financailYearSearch').val() == "" || $('#budgetTypeSearch').val() == null || $('#budgetTypeSearch').val() == "" ||
//            $('#fundTypeSearch').val() == null || $('#fundTypeSearch').val() == "" || $('#status').val() == null || $('#status').val() == "") {
//        displayLargeErrorMessagesInCenterInRed("pregsuccessBeforeSearchId", "Please fill all mandatory fields");
//        result = 0;
//    }

        if ($('#financailYearSearch').val() == null || $('#financailYearSearch').val() == "") {
            $("#financailYearSearch").focus();
            displaySmallErrorMessages("financailYearSearchErr", "Please Select Financial Year.");
            result = 0;
        }
        if ($('#budgetTypeSearch').val() == null || $('#budgetTypeSearch').val() == "") {
            $("#budgetTypeSearch").focus();
            displaySmallErrorMessages("budgetTypeSearchErr", "Please Select Budget Type.");
            result = 0;
        }
        if ($('#fundTypeSearch').val() == null || $('#fundTypeSearch').val() == "") {
            $("#fundTypeSearch").focus();
            displaySmallErrorMessages("fundTypeSearchErr", "Please Select Fund Type.");
            result = 0;
        }
        if ($('#sectorSearch').val() == null || $('#sectorSearch').val() == "") {
            $("#sectorSearch").focus();
            displaySmallErrorMessages("sectorSearchErr", "Please Select Sector.");
            result = 0;
        }
        if ($('#status').val() == null || $('#status').val() == "") {
            $("#status").focus();
            displaySmallErrorMessages("statusErr", "Please Select Status.");
            result = 0;
        }
        if ($('#sectorSearch').val() == null || $('#sectorSearch').val() == "") {
            $("#sectorSearch").focus();
            displaySmallErrorMessages("sectorSearchErr", "Please Select Sector.");
            result = 0;
        }


        if (result != 0) {
            var searchObj = {
                financialYear: $('#financailYearSearch').val(),
                budgetType: $('#budgetTypeSearch').val(),
                fundType: $('#fundTypeSearch').val(),
                consolidateBudgetStatus: $('#status').val(),
                sector: $('#sectorSearch').val(),
                ddo: getUserSessionElement(seDDOId)
            };
            $("#tableHeaderTable").text("").append("<div id='maritalListPanelSearch' class='panel panel-blue' />");
            $("#maritalListPanelSearch").append("<div id='maritalListPanelHeading' class='panel-heading' />");
            $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
            // $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List Of Ledgers</center>");
            $("#firstHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>List Of Ledgers</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin11'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
            $("#maritalListPanelSearch").append("<div id='collapseOne5' class='panel-collapse collapse in' />");
            $("#collapseFin11").click(function() {
                $("#collapseOne5").toggle();
                if ($("#collapseFin11 span").hasClass("glyphicon-minus-sign")) {
                    $("#collapseFin11").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
                } else {
                    $("#collapseFin11").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
                }
            });
            //$("#maritalListPanelSearch").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
            $("#collapseOne5").append("<div id='listpanelMainBody' class = 'panel-body' />");
            $("#listpanelMainBody").append("<div id='listpanelRow1' class='row' />");
            $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
            $("#listpanelRow1").text("").append("<div id='messageDiv'></div>");
            $("#listpanelRow").text("").append("<div class='tab-pane' id='viewUser'/>");
            $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
            $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");

            $.post(server_base_url + "budget/transaction/ConsolidateExpenseBudget/Search", {
                searchObj: JSON.stringify(searchObj),
                condition: "SearchInConsolidateTable"
            }).done(function(bdata) {
                bdata = JSON.parse(bdata);
                if (bdata != null) {
                    var consolidateBudgetStatus = $('#status').val();
                    if (consolidateBudgetStatus == "Save") {
                        if (bdata.length > 0) {
                            $("#displayBankTable").append("<thead class=''><tr id='TableHeaderTrHeadIdList'>"
                                    //  + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                                    + " <th> S.No</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Requested Amount(In Lacs)</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Asked for Amount(In Lacs)</th>");
                            if (checkUserPrivelege(pvUpdateBudgetConsolidatedIncome)) {
                                $("#TableHeaderTrHeadIdList").append("<th style='min-width:1%;width:80px;'><i ></i>Edit</th>");
                            }
                            if (checkUserPrivelege(pvDeleteBudgetConsolidateIncome)) {
                                $("#TableHeaderTrHeadIdList").append("<th style='min-width:1%;width:80px;'><i ></i>Delete</th>");
                            }
//                                    + "</tr></thead>");
                            var sno = 0;
                            $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                            for (var i = bdata.length - 1; i >= 0; i--) {
                                sno++;
                                var objJson = JSON.stringify(bdata[i]);
                                $("#displayBankTableBody").append("<tr id='" + sno + "' style='cursor:pointer;' >"
                                        //  + "<td><input type='checkbox' value='" + bdata[i]._id.$oid + "' name='case'></td>"
                                        + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].ledger + "<input type='hidden' value='" + bdata[i]._id.$oid + "'></td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                        + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].requestedAmount + "' readonly></td>"
                                        + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + bdata[i].askedForAmount + "' readonly></td>");
                                if (checkUserPrivelege(pvUpdateBudgetConsolidatedIncome)) {
                                    $("#" + sno).append("<td style='cursor:pointer;' onclick=updateConsolidateBudgetIncome('" + encodeURI(objJson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                                }
                                if (checkUserPrivelege(pvDeleteBudgetConsolidateIncome)) {
                                    $("#" + sno).append("<td onclick=deletePopUp('deleteConsolidateIncomeBudget','nothingToDo','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                                }
                                $("#displayBankTable thead tr th:first input:checkbox").change(function() {
                                    $("#displayBankTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                                });
                                $("#displayBankTable tbody tr td:first-child input:checkbox").change(function() {
                                    var tot = $(".case").length;
                                    var tot_checked = $(".case:checked").length;
                                    if (tot != tot_checked) {
                                        $("#selectall").prop('checked', false);
                                    }
                                });
                            }
                            if (sno > 0) {
                                var submit = "Submit";
                                if (checkUserPrivelege(pvCreateBudgetConsolidatedIncome) || checkUserPrivelege(pvUpdateBudgetConsolidatedIncome)) {
                                    $("#listpanelRow").append("<div class='row' id='saveSubmitResetPrintRow'/>");
                                    $("#saveSubmitResetPrintRow").append("<div class='col-sm-3'></div>");
                                    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");
                                    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-success mr5 btn-flat'  onclick='UpdateConExpenseBudgetDetailsInSearch()'>Submit</button></div>");
                                    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-warning mr5 btn-flat' onclick=budgetConsolidateIncomeBudgetmaster('dashBoardBodyMainDiv') >Reset</button></div>");
                                    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");
                                }
                            }
                            $("#displayBankTable").DataTable({
                                paging: true
                            });
                        } else {
                            displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
                        }
                    } else if (consolidateBudgetStatus == "Submit") {
                        if (bdata.length > 0) {
                            $("#displayBankTable").append("<thead class=''><tr>"
                                    + " <th> S.No</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Ledger</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head </th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Requested Amount(In Lacs)</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Asked for Amount(In Lacs)</th>"
                                    + "</tr></thead>");
                            var sno = 0;
                            $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                            for (var i = bdata.length - 1; i >= 0; i--) {
                                sno++;
                                var objJson = JSON.stringify(bdata[i]);
                                $("#displayBankTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                        + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].ledger + "</td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                        + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].requestedAmount + "' readonly></td>"
                                        + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + bdata[i].askedForAmount + "' readonly></td></tr>");
                            }
                            $("#displayBankTable").DataTable({
                                paging: true
                            });
                        } else {
                            displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
                        }
                    }
                } else {
                    displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
                }
            });
        }
    }
}
//reset the values
function resetConsolidateExpenseBudgetCodeSearch() {
    $("#pregsuccessBeforeSearchId").text("");
    $("#sectorSearchErr").text("");
    $("#budgetTypeSearchErr").text("");
    $("#fundTypeSearchErr").text("");
    $("#statusErr").text("");
    $("#sectorSearch").val("");
    $("#budgetTypeSearch").val("");
    $("#fundTypeSearch").val("");
    $("#status").val("");
    $("#departmentSearch").val("");
    $("#departmentSearchErr").text("");
}
//Get Financial Year Options
function getBudgetfinancialyearForConsolidateExpense(divId) {
    var fromyear = getFincialYearForAllReports();
    $("#" + divId).append("<option value='" + fromyear + "' selected>" + fromyear + "</option>");
//    $.get(server_base_url + "/budget/master/FinancialYear/View", {
//    }).done(function(bdata) {
//        for (var i = 0; i < bdata.length; i++) {
//            var active = bdata[i].active;
//            if (active == 'Yes') {
//                $("#" + divId).append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].fromDate + "-" + bdata[i].toDate + "</option>");
//            } else {
//                $("#" + divId).append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].fromDate + "-" + bdata[i].toDate + "</option>");
//            }
//        }
//    });
}
function deleteConsolidateIncomeBudget(Id) {
    if (checkUserPrivelege(pvDeleteBudgetConsolidateIncome)) {
        $.post(server_base_url + "budget/Transaction/ConsolidateIncomeBudget/Delete", {
            Id: Id,
            userid: sessionStorage.getItem("userId")
        }).done(function(data) {
            if (data == fail) {
                displaySmallErrorMessages("authonticationMsgId", "Invalid username / password");
            } else if (data == unauthorized) {
                displaySmallErrorMessages("authonticationMsgId", unauthorizedMessage);
            } else if (data == statusException) {
                displaySmallErrorMessages("authonticationMsgId", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessages("authonticationMsgId", "No User available");
            } else {

                displaySuccessMessages("ErrorDiv", deleteMessage, "");
                setTimeout(function() {
                    $("#ConsolidateSearchIncomeButton").click();
                }, 1000);
            }
        });
    }
}
function updateConsolidateBudgetIncome(obj) {
    $("#messageDiv").text("");
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#tableHeaderTable").text("").append("<div id='maritalListPanelSearch' class='panel panel-blue' />");
    $("#maritalListPanelSearch").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    // $("#firstHeader1").append("<div class='panel-title'  style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List Of Ledgers</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin11'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#firstHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>List Of Ledgers</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalListPanelSearch").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseFin11").click(function() {
        $("#collapseOne3").toggle();
        if ($("#collapseFin11 span").hasClass("glyphicon-minus-sign")) {
            $("#collapseFin11").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#collapseFin11").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").append("<div id='listpanelRow1' class='row' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow1").text("").append("<div id='messageDiv'></div>");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='viewUser'/>");
    $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayListTable' />");
    $("#displayListTable").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Requested Amount(In Lacs)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Asked for Amount(In Lacs)</th>"
            + "</tr></thead>");
    $("#displayListTable").append("<tbody id='displayListTableBody' class='table-striped table-bclased' />");
    $("#displayListTableBody").text("").append("<tr id='" + obj.status + "' style='cursor:pointer;' >"
            + "<td>1<input type='hidden' value='" + encodeURI(JSON.stringify(obj)) + "'></td>"
            + "<td style='cursor:pointer;'>" + obj.ledger + "<input type='hidden' value='" + obj._id.$oid + "'></td>"
            + "<td style='cursor:pointer;'>" + obj.budgetHeadName + "</td>"
            + "<td style='cursor:pointer;'><input type='text' value='" + obj.requestedAmount + "' readonly></td>"
            + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + obj.askedForAmount + "' ></td>");
    $("#listpanelRow").append("<div class='row' id='saveSubmitResetPrintRow12'/>");
    $("#saveSubmitResetPrintRow12").append("<div class='col-sm-12' id='buttonIdofTable'/>");
    $("#buttonIdofTable").append("<center><button class='btn btn-success mr5 btn-flat'  onclick='UpdateCinsolidateIncomeBudgetRow()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button class='btn btn-warning mr5 btn-flat' onclick='goBackToConsolidateIncomeBudgetSearchFunction()'>Back</button></center>");
}
function goBackToConsolidateIncomeBudgetSearchFunction() {
    $("#ConsolidateSearchIncomeButton").click();
}
function UpdateCinsolidateIncomeBudgetRow() {
    if (checkUserPrivelege(pvUpdateBudgetConsolidatedIncome)) {
        var id;
        var askedForMoney;
        $('#displayListTable tbody tr ').each(function(i) {
            var row = $(this).closest('tr');
            var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
            id = budgetIncomeDetails._id.$oid;
            askedForMoney = row.find('td:eq(4) input').val();
            $(this).closest('tr').remove();
        });
        $.post(server_base_url + "budget/transaction/ConsolidateIncomeBudget/Update", {
            Id: id,
            askedForMoney: askedForMoney,
            userid: getUserSessionElement("userId")
        }).done(function(data) {
            if (data == fail) {
                displaySmallErrorMessages("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
            } else if (data == unauthorized) {
                displaySmallErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessages("pregsuccessBefore", "No User available" + "<br/><br/>");
            } else {
                $("#ConsolidateSearchIncomeButton").click();
                displaySuccessMessages("messageDiv", updateSuccessMessage, "");
                clearSuccessMessageAfterTwoSecond("messageDiv");
            }
        });
    }
}
function  editThisConsolidateIncomeBudgetRow(i) {
    $('table#displayBankTable tbody tr').each(function() {
        if ($(this).find("tr:eq(" + i + ")")) {
            var j = i - 1;
            $("#gradeOne").val($("table#displayGradeAddTable tbody tr:eq(" + j + ")").find('td:eq(0)').text());
            $("#gradeTwo").val($("table#displayGradeAddTable tbody tr:eq(" + j + ")").find('td:eq(1)').text());
            $("#gradeThree").val($("table#displayGradeAddTable tbody tr:eq(" + j + ")").find('td:eq(2)').text());
            $("#order").val($("table#displayGradeAddTable tbody tr:eq(" + j + ")").find('td:eq(3)').text());
        }
    });
    document.getElementById('displayBankTable').deleteRow(i - 1);
}
function resetTextFieldsofTable(tableId, index) {
    $('#' + tableId + ' tbody tr ').each(function(i) {
        var row = $(this).closest('tr');
        row.find('input[type="checkbox"][name="case"]:checked').prop("checked", false);
        row.find('td:eq(' + index + ') input').val("");
    });
}


