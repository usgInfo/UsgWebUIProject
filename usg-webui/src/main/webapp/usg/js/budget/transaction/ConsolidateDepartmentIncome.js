/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function ConsolidateDepartmentIncomeBudget(divId) {
    scrolupfunction();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetTransactionMenuTabs()">Budget Transaction</a></label> >> <label>Consolidate Income Budget @ Department Head</label>');
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
        $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Consolidate Income Budget @ Department Head</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
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


        //FinancialConsolidateExpenseBudgetCode Table

        $("#panelMainBody").append("<div id='panelRow8' class='row' />");
        $("#panelRow8").append("<div id='FieldGroup9' class='form-group' />");
        getTwoColumnInRow("FieldGroup9", "Row9", "Row9Col1", "Row9Col2");
        $("#Row9Col1").append(getLabel("From DDO", "required") + "" + getDropDownWithOnChange("ddo"));
        $("#Row9Col2").append(getLabel("From Location", "required") + "" + getDropDown("location"));

        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
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
        $("#sector").attr("onchange", " getBudgetHeads('budgetHead')");
        $("#fundType").attr("onchange", "clearSector()");
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
        $("#Row4Col2").append(getLabel("Department", "") + "" + getDropDown("department", "", "", ""));
        //   document.getElementById("previousBudget").disabled = true;
        $("#Row4Col1").append(getLabel("BudgetHead", "") + "" + getDropDown("budgetHead"));
        $("#panelMainBody").append("<div id='panelRow4' class='row' />");
        $("#panelRow4").append("<div id='FieldGroup4' class='form-group' />");
        getTwoColumnInRow("FieldGroup4", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel("Previous Budget", "") + "" + getDropDown("previousBudget", "", "", ""));
        document.getElementById("previousBudget").disabled = true;
        $("#budgetType").attr("onchange", " getAllSrNosForConsolidated('previousBudget')");

        $("#panelMainBody").append("<div id='panelRow4' class='row' />");

        $("#panelRow4").append("<div  class='col-xs-12' /><center><button type='button'  value='Save' class='btn btn-success mr5 ' id='createIncomeBudgetButton'  onclick='consolidateDeptincomeBudgetValidation()'>Create</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllFinancialConsolidateIncomeBudgetCodeData()' class='btn btn-warning mr5 ' name='reset' value='reset'>Reset</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='searchforConsolidateDeptIncomeBudget()' class='btn btn-warning mr5' name='reset' value='reset'>Search</button></center></div>");

        getBudgetfinancialyearForConsolidateExpense("financialYear");
        //  viewReDddoListForList("", "ddo");
        getLoggedInDDOLocationInDropDown("ddo", "location");
        viewOption("budget/master/FundType/View", "", "description", "fundType", "Fund Type");
        fetchAllSec("", "sector", "Sector");
        fetchAllDeptCreteIncome("", "department", "Department");
        //  viewOption("/hrms/common/BudgetHead/View", "", "budgetHead", "budgetHead", "Budget Head");
        viewOption("budget/master/BudgetType/View", "", "description", "budgetType", "Budget Type");
    }

}
function consolidateDeptincomeBudgetValidation() {

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

    if (result != 0) {
        viewConsolidateDepartmentIncome();
    }
    //  }
}
function searchforConsolidateDeptIncomeBudget() {
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
        getTwoColumnInRow("row1", "Row8", "Row8Col1", "Row8Col2");
        $("#Row8Col1").append(getLabel("Financial Year", "") + "" + getDropDown("financailYearSearch"));
        $("#Row8Col2").append(getLabel("Department", "") + "" + getDropDown("departmentSearch"));

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
        $("#savesearchButton").append("<button class='btn btn-success mr5 btn-flat' id='SearchIncomeBudgetButton' onclick='validateConsolidateDeptIncomeSearch()'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp");
        $("#savesearchButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='resetConsolidateExpenseBudgetCodeSearch()'>Reset</button>&nbsp&nbsp&nbsp");
        getBudgetfinancialyearForConsolidateExpense("financailYearSearch");
        viewReDddoListForList("", "ddoSearch");
        viewOption("budget/master/FundType/View", "", "description", "fundTypeSearch", "Fund Type");
        fetchAllSec("", "sectorSearch", "Sector");
        fetchAllDeptCreteIncome("", "departmentSearch", "Department");
        viewOption("budget/master/BudgetType/View", "", "description", "budgetTypeSearch", "Budget Type");
        var statusOptions = ["Save", "Submit"];
        getHardCodedOptions("status", "Status", statusOptions);
    }
}
function validateConsolidateDeptIncomeSearch(previousSearchJson) {
    if (checkUserPrivelege(pvViewBudgetConsolidatedIncome)) {
        if (previousSearchJson == "" || previousSearchJson == undefined || previousSearchJson == "undefined") {

        }
        var result = 1;

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
//        if ($('#departmentSearch').val() == null || $('#departmentSearch').val() == "") {
//            $("#departmentSearch").focus();
//            displaySmallErrorMessages("departmentSearchErr", "Please Select Department.");
//            result = 0;
//        }

        if (result != 0) {
            var searchObj = {
                financialYear: $('#financailYearSearch').val(),
                budgetType: $('#budgetTypeSearch').val(),
                fundType: $('#fundTypeSearch').val(),
                consolidateBudgetStatus: $('#status').val(),
                sector: $('#sectorSearch').val()
//                department: $('#departmentSearch').val()
            };
            var department = []
            if ($("#departmentSearch").val() == "")
            {
                $("#departmentSearch option").each(function()
                {
                    // Add $(this).val() to your list

                    if ($(this).val() != "")
                    {
                        department.push($(this).val());
                    }

                });
            } else
            {
                department.push($("#departmentSearch").val());
            }
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

            $.post(server_base_url + "budget/transaction/ConsolidateDeptIncome/Search", {
                searchObj: JSON.stringify(searchObj),
                condition: "SearchInConsolidateTable",
                department: JSON.stringify(department)
            }).done(function(bdata) {
                bdata = JSON.parse(bdata);
                if (bdata != null) {
                    var consolidateBudgetStatus = $('#status').val();
                    if (consolidateBudgetStatus == "Save") {
                        if (bdata.length > 0) {
                            $("#displayBankTable").append("<thead class=''><tr id='TableHeaderTrHeadIdList'>"
                                    //   + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                                    + " <th> S.No</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Requested Amount(In Lacs)</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Asked for Amount(In Lacs)</th>"
                                    + "</tr></thead>");
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
                                        // + "<td><input type='checkbox' value='" + bdata[i]._id.$oid + "' name='case'></td>"
                                        + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].ledger + "<input type='hidden' value='" + bdata[i]._id.$oid + "'></td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                        + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].requestedAmount + "' readonly></td>"
                                        + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + bdata[i].askedForAmount + "' readonly></td>");
                                if (checkUserPrivelege(pvUpdateBudgetConsolidatedIncome)) {
                                    $("#" + sno).append("<td style='cursor:pointer;' onclick=updateConsolidateDeptIncome('" + encodeURI(objJson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                                }
                                if (checkUserPrivelege(pvDeleteBudgetConsolidateIncome)) {
                                    $("#" + sno).append("<td onclick=deletePopUp('deleteConsolidateDeptIncome','nothingToDo','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
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
                                    $("#saveSubmitResetPrintRow").append('<center><button type="button"  value="Submit" class="btn btn-success mr5 btn-flat"  onclick="SubmitConDeptInSearch()">Submit</button>&nbsp;&nbsp;&nbsp;<button name="reset" value="reset" type="button" class="btn btn-warning mr5 btn-flat" onclick=ConsolidateDepartmentIncomeBudget("dashBoardBodyMainDiv")>Reset</button></center>');

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
function viewConsolidateDepartmentIncome(divId)
{
    if (checkUserPrivelege(pvViewBudgetConsolidatedIncome)) {
        var ddo = $("#ddo").val();
        var location = $("#location").val();
        var financialYear = $("#financialYear").val();
        var fundType = $("#fundType").val();
        var sector = $("#sector").val();
        var budgetType = $("#budgetType").val();
        var budgetHead = $("#budgetHead").val();
        var consolidateBudgetDate = $("#consolidateBudgetDate").val();
        // var department = $("#department").val();
        var department = []
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
            budgetHead: budgetHead,
            location: location
        };
        setTimeout(function() {
            $.get(server_base_url + "budget/transaction/ConsolidateDeptIncome/Search", {
                searchObj: JSON.stringify(searchObj),
                condition: "IncomeBudget",
                department: JSON.stringify(department)
            }).done(function(bdata) {
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
                                var amount = 0;
                                result = 1;
                                if (result != 0) {
                                    sno++;
                                    var spanErr = sno + "Err";
                                    var objJson = JSON.stringify(bdata[i]);
                                    $("#displayBankTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
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
                                    $("#saveSubmitResetPrintRow").append('<center><button type="button"  value="Save" class="btn btn-success mr5 btn-flat"  onclick=saveConsolidateDeptIncome("' + save + '")>Save</button>&nbsp;&nbsp;&nbsp;<button name="reset" value="reset" type="button" class="btn btn-warning mr5" onclick=resetTextFieldsofTable("displayBankTable","5")>Reset</button></center>');

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
function saveConsolidateDeptIncome(saveorsubmit, searchSubmit) {
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
//            $('#displayBankTable tbody tr input[type="checkbox"][name="case"]:checked').each(function(i) {
            var rows = $("#displayBankTable").dataTable().fnGetNodes();
            for (var i = 0; i < rows.length; i++)
            {
                var row = $(rows[i]);
//                var row = $(this).closest('tr');
                var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
                saveThisConsolidateDetails.push({
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
                    prievioueBudget: budgetIncomeDetails.prievioueBudget,
                    incomeBudgetIdList: budgetIncomeDetails.incomeBudgetIdList,
                    askedForAmount: row.find('td:eq(4) input').val(),
                    consolidateBudgetDate: row.find('td:eq(1) input').val(),
                    consolidateBudgetStatus: saveorsubmit,
                    isSanctioned: "false",
                    isConsolidated: "false",
                    department: $('#department').val(),
                    ddo: $('#ddo').val(),
                    location: $('#location').val(),
                    departmentName: $('#department option:selected').text()
                });
                $(this).closest('tr').remove();
            }


            if (saveThisConsolidateDetails == null || saveThisConsolidateDetails == "") {
                result = 0;
            }
            if (result != 0)
            {
                $.post(server_base_url + "/budget/transaction/ConsolidateDeptIncome/Save", {
                    objJson: JSON.stringify(saveThisConsolidateDetails),
                    userid: getUserSessionElement("userId"),
                    financialYear: $('#financialYear').val(),
                    budgetHead: $('#budgetHead').val(),
                    fundType: $('#fundType').val(),
                    sector: $('#sector').val(),
                    department: $('#department').val()
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
                            ConsolidateDepartmentIncomeBudget("dashBoardBodyMainDiv");

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
function SubmitConDeptInSearch() {
    if (checkUserPrivelege(pvUpdateBudgetConsolidatedIncome)) {
        var result = 1;
        var saveThisConsolidateDetails = [];
//        $('#displayBankTable tbody tr input[type="checkbox"][name="case"]:checked').each(function(i) {
//            var row = $(this).closest('tr');
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
            $.post(server_base_url + "budget/transaction/ConsolidateDeptIncome/Submit", {
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
                        $("#SearchIncomeBudgetButton").click();
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
function updateConsolidateDeptIncome(obj) {
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
    $("#buttonIdofTable").append("<center><button class='btn btn-success mr5 btn-flat'  onclick='UpdateCinsolidateDeptIncomeRow()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button class='btn btn-warning mr5 btn-flat' onclick='goBackToConsolidateSearchFunction()'>Back</button></center>");
}
function UpdateCinsolidateDeptIncomeRow() {
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
        $.post(server_base_url + "/budget/transactions/ConsolidateDeptIncome/Update", {
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
                $("#SearchIncomeBudgetButton").click();
                displaySuccessMessages("messageDiv", updateSuccessMessage, "");
                clearSuccessMessageAfterTwoSecond("messageDiv");
            }
        });
    }
}
function deleteConsolidateDeptIncome(Id) {
    if (checkUserPrivelege(pvDeleteBudgetConsolidateIncome)) {
        $.post(server_base_url + "budget/transaction/ConsolidateDeptIncome/Delete", {
            Id: Id,
            userid: getUserSessionElement("userId")
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
                    $("#SearchIncomeBudgetButton").click();
                }, 1000);
            }
        });
    }
}