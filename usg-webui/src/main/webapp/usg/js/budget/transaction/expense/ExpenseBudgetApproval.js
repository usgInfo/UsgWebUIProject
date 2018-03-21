/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function approvalExpenseBudget()
{
    if (checkUserPrivelege(pvViewBudgetApprovalDDO)) {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
        $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetTransactionMenuTabs()">Budget Transaction</a></label> >> <label>Expense Budget Approval @ Department Head</label>');
        $("#dashboardBodyMainDiv").text("").append('<div id="budgetapprovalMainDiv"/>');
        $("#budgetapprovalMainDiv").text("").append("<div id='mainTabMenu'  class='page-content'  />");
        $("#mainTabMenu").append("<div id='tableHeader' />");
        $("#mainTabMenu").append("<div id='tableHeaderTable' />");
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Expense Budget Approval @ Department Head</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#collapseFin1").click(function() {
            $("#collapseOne2").toggle();
            if ($("#collapseFin1 span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin1").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin1").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        //for ddo

        $("#panelRow").append("<div id='thirdrow' class='form-group' />");
        getTwoColumnInRow("thirdrow", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("DDO", "required") + "" + getDropDownWithOnChange("ddo"));
        $("#Row1Col2").append(getLabel("Location", "required") + "" + getDropDown("location"));
//    $("#ddo").attr("onchange", "getDdoLocationforexpbudappr()");

        $("#panelRow").append("<div id='firstRow' class='form-group' />");
        getTwoColumnInRow("firstRow", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel("Financial Year", "required") + "" + getDropDown("finyearId"));
        $("#Row2Col2").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));
        $("#panelRow").append("<div id='secondRow' class='form-group' />");
        getTwoColumnInRow("secondRow", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Sector", "required") + "" + getDropDown("sector"));
        $("#Row3Col2").append(getLabel("Budget Type", "required") + "" + getDropDown("budgettypeId"));
        $("#sector").attr("onchange", " getBudgetHeads('budgethead')");
        $("#fundType").attr("onchange", "clearSector()");
        $("#panelRow").append("<div id='lastRow' class='form-group' />");
        getTwoColumnInRow("lastRow", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel("BudgetHead", "") + "" + getDropDown("budgethead"));
        $("#Row5Col2").append(getLabel("Department", "") + "" + getDropDown("department", "", "", ""));
        $("#panelMainBody").append("<div id='saveButtonId' class='form-group' />");
        $("#saveButtonId").append("<label class='col-sm-3 control-label'></label>");
        $("#saveButtonId").append("<div id='saveButton' class='col-sm-9' />");
        $("#saveButton").append("<button class='btn btn-success btn-flat' onclick='validateapprovalExpenseBudget()'>Show Ledgers</button>&nbsp&nbsp&nbsp");
        $("#saveButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='resetapprovalExpenseBudget()'>Reset</button>&nbsp&nbsp&nbsp");
        $("#saveButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='searchforExpensebudgetApproval()'>Search</button>");
        getLoggedInDDOLocationInDropDown("ddo", "location");
        fetchAllDeptCreteIncome("", "department", "Department");
        viewOption("budget/master/BudgetType/View", "", "description", "budgettypeId", "Budget Type");
        // viewOption("hrms/common/BudgetHead/View", "", "budgetHead", "budgethead", "Budget Head");
        viewOption("/budget/master/FundType/View", "", "description", "fundType", "Fund Type");
        fetchAlSectors("", "sector", "Sector");
        getExpenseBudgetAprprovafinyear();
    }

}
function searchforExpensebudgetApproval() {
    if (checkUserPrivelege(pvViewBudgetApprovalDDO)) {
        $("#searchPanel").remove("");
        $("#tableHeader").append("<div id='searchPanel' class='panel panel-blue' />");
        $("#searchPanel").text("").append("<div id='searchHeading' class='panel-heading' />");
        $("#searchHeading").append("<h4 id='searcHheaderName' class='panel-title' />");
        $("#searcHheaderName").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#Searchbody'><center>Search Criteria</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#searchPanel").append("<div id='Searchbody' class='panel-collapse collapse in pal' />");
        $("#collapseFin1").click(function() {
            $("#Searchbody").toggle();
            if ($("#collapseFin1 span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin1").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin1").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#Searchbody").append("<div id='SearchbodyMainBody' class = 'panel-body' />");

        $("#SearchbodyMainBody").append("<div id='SearchbodyMainBodypanelRow' class='row'/>");

        $("#SearchbodyMainBodypanelRow").append("<div id='row1' class='form-group' />");
        getTwoColumnInRow("row1", "Row8", "Row8Col1", "Row8Col2");
        $("#Row8Col1").append(getLabel("From DDO", "required") + "" + getDropDownWithOnChange("searchddo"));
        $("#Row8Col2").append(getLabel("From Location", "required") + "" + getDropDown("searchlocation"));

        $("#SearchbodyMainBodypanelRow").append("<div id='BudegtheadSearch' class='form-group' />");
        getTwoColumnInRow("BudegtheadSearch", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel("Budget Type", "required") + "" + getDropDown("budgetTypeSearch"));
        $("#Row6Col2").append(getLabel("Financial Year", "required") + "" + getDropDown("financailYearSearch"));

        $("#SearchbodyMainBodypanelRow").append("<div id='row2' class='form-group' />");
        getTwoColumnInRow("row2", "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundTypeSearch"));
        $("#Row7Col2").append(getLabel("Sector", "required") + "" + getDropDown("sectorSearch"));

        $("#SearchbodyMainBodypanelRow").append("<div id='row3' class='form-group' />");
        getTwoColumnInRow("row3", "Row9", "Row9Col1", "Row9Col2");
        $("#Row9Col1").append(getLabel("Budget Head", "") + "" + getDropDown("budgetheadSearch"));
        $("#Row9Col2").append(getLabel("Status", "required") + "" + getDropDown("status"));
        $("#SearchbodyMainBodypanelRow").append("<div id='row5' class='form-group' />");
        getTwoColumnInRow("row5", "Row10", "Row10Col1", "Row10Col2");
        $("#Row10Col1").append(getLabel("Department", "") + "" + getDropDown("departmentSearch"));

        $("#SearchbodyMainBodypanelRow").append("<div id='searchbut' class='form-group' />");
        $("#searchbut").append("<label class='col-sm-5 control-label'></label>");
        $("#searchbut").append("<div id='savesearchButton' class='col-sm-7' />");
        $("#savesearchButton").append("<button class='btn btn-success mr5 btn-flat' id='SearchIncomeBudgetButton' onclick='validateExpenseBudgetApprovalSearch()'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp");
        $("#savesearchButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='ResetExpenseBudgetApprovalSearch()'>Reset</button>&nbsp&nbsp&nbsp");

        getLoggedInDDOLocationInDropDown("searchddo", "searchlocation");
        fetchAllDeptCreteIncome("", "departmentSearch", "Department");
        getBudgetfinancialyear();
        viewOption("budget/master/BudgetType/View", "", "description", "budgetTypeSearch", "Budget Type");
        viewOption("hrms/common/BudgetHead/View", "", "budgetHead", "budgetheadSearch", "Budget Head");
        viewOption("budget/master/FundType/View", "", "description", "fundTypeSearch", "Fund Type");
        fetchAlSectors("", "sectorSearch", "Sector");
        var statusOptions = ["Save", "Submit"];
        getHardCodedOptions("status", "Status", statusOptions);
    }
}
function ResetExpenseBudgetApprovalSearch()
{
    $("#errMessageDiv1").text("");
    $("#errMessageDiv").text("");
    $("#searchddoErr").text("").val("");
    $("#searchlocationErr").text("").val("");
    $("#financailYearSearchErr").text("").val("");
    $("#fundTypeSearchErr").text("").val("");
    $("#sectorSearchErr").text("").val("");
    $("#budgetTypeSearchErr").text("").val("");
    $("#budgetheadSearchErr").text("").val("");
    $('#dateIdErr').text("").val("");
    $('#fundTypeSearch').val("");
    $('#budgetheadSearch').val("");
    $('#sectorSearch').val("");
    $('#budgetTypeSearch').val("");
}
function validateExpenseBudgetApprovalSearch() {
    var result = 1;
    if ($('#searchddo').val() == null || $('#searchddo').val() == "") {
        $("#searchddo").focus();
        displaySmallErrorMessages("searchddoErr", "Please Select DDO.");
        result = 0;
    }
    if ($('#searchlocation').val() == null || $('#searchlocation').val() == "") {
        $("#searchlocation").focus();
        displaySmallErrorMessages("searchlocationErr", "Please Select Location.");
        result = 0;
    }
    if ($('#fundTypeSearch').val() == null || $('#fundTypeSearch').val() == "") {
        $("#fundTypeSearch").focus();
        displaySmallErrorMessages("fundTypeSearchErr", "Please Select Fund Type.");
        result = 0;
    }
    if ($('#budgetTypeSearch').val() == null || $('#budgetTypeSearch').val() == "") {
        $("#budgetTypeSearch").focus();
        displaySmallErrorMessages("budgetTypeSearchErr", "Please Select Budget Type.");
        result = 0;
    }
    if ($('#financailYearSearch').val() == null || $('#financailYearSearch').val() == "") {
        $("#financailYearSearch").focus();
        displaySmallErrorMessages("financailYearSearchErr", "Please Select Financial Year.");
        result = 0;
    }
    if ($('#sectorSearch').val() == null || $('#sectorSearch').val() == "") {
        $("#sectorSearch").focus();
        displaySmallErrorMessages("sectorSearchErr", "Please Select Sector.");
        result = 0;
    }
//    if ($('#budgetheadSearch').val() == null || $('#budgetheadSearch').val() == "") {
//        $("#budgetheadSearch").focus();
//        displaySmallErrorMessages("budgetheadSearchErr", "Please Select Budget Head.");
//        result = 0;
//    }
    if ($('#status').val() == null || $('#status').val() == "") {
        $("#status").focus();
        displaySmallErrorMessages("statusErr", "Please Select Status.");
        result = 0;
    }
    var financialYear = $('#financailYearSearch').val();
    var budgetType = $('#budgetTypeSearch').val();
    var fundType = $('#fundTypeSearch').val();
    var location = $('#searchlocation').val();
    var sector = $('#sectorSearch').val();
    var ddo = $('#searchddo').val();
    var budgethead = $('#budgetheadSearch').val();
    var department = []
    if ($("#departmentSearch").val() == "")
    {
        $("#departmentSearch option").each(function()
        {
            if ($(this).val() != "")
            {
                department.push($(this).val());
            }

        });
    } else
    {
        department.push($("#departmentSearch").val());
    }
    if (result != 0) {
        var searchObj = {
            finYear: financialYear,
            fundType: fundType,
            sector: sector,
            budgetType: budgetType,
            ddo: ddo,
            location: location,
            budgetHead: budgethead,
            consolidateBudgetStatus: $('#status').val()
        };

        $("#budgetIncomeListPanel").remove("");
        $("#tableHeaderTable").text("").append("<div id='maritalListPanelSearch' class='panel panel-blue' />");
        $("#maritalListPanelSearch").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List Of Ledgers</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin11'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");


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
        $("#listpanelMainBody").append("<div id='listpanelRow2' class='row' />");
        $("#listpanelRow1").text("").append("<div id='messageDiv'></div>");
        $("#listpanelRow2").text("").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
        $.post(server_base_url + "/Budget/BudgetTransaction/ExpenseBudpproval/Search", {
            searchObj: JSON.stringify(searchObj),
            department: JSON.stringify(department)
        }).done(function(bdata) {
            bdata = JSON.parse(bdata);

            if (bdata != null) {
                var locationBudgetStatus = $('#status').val();
                if (locationBudgetStatus == "Save") {
                    if (bdata.length > 0) {
                        $("#displayBankTable").append("<thead class=''><tr>"
                                + " <th> S.No</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head </th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Asked Amount(In Lacs)</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Sanctioned Amount(In Lacs)</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Approved Amount(In Lacs)</th>"
                                + "<th style='min-width:1%;width:80px;'><i ></i>Edit</th>"
                                + "<th style='min-width:1%;width:80px;'><i ></i>Delete</th>"
                                + "</tr></thead>");
                        var sno = 0;
                        $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var objJson = JSON.stringify(bdata[i]);
                            $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].ledgerName + "<input type='hidden' value='" + bdata[i]._id.$oid + "'></td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                    + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].requestAmount + "' readonly></td>"
                                    + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].sanctionedAmount + "' readonly></td>"
                                    + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + bdata[i].approvedAmount + "' readonly></td>"
                                    + "<td style='cursor:pointer;' onclick=updateExpenseBUdgetApproval('" + encodeURI(objJson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                                    + "<td onclick=deletePopUp('deleteExpenseBudgetApproval','nothingToDo','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");

                        }
                        if (sno > 0) {
                            var submit = "Submit";

                            $("#listpanelRow2").append("<div class='row' id='saveSubmitResetPrintRow'/>");
                            $("#saveSubmitResetPrintRow").append('<center><button type="button"  value="Submit" class="btn btn-success mr5 btn-flat"  onclick="expenseBUdgetApprovalSubmit()">Submit</button>&nbsp;&nbsp;&nbsp;<button name="reset" value="reset" type="button" class="btn btn-warning mr5 btn-flat" onclick=approvalExpenseBudget()>Reset</button></center>');

                        }
                        $("#displayBankTable").DataTable({
                            paging: true
                        });

                    } else {
                        displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
                    }

                } else if (locationBudgetStatus == "Submit") {
                    if (bdata.length > 0) {
                        $("#displayBankTable").append("<thead class=''><tr>"
                                + " <th> S.No</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Ledger</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head </th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Asked Amount(In Lacs) </th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Sanctioned Amount(In Lacs)</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Approved Amount(In Lacs)</th>"
                                + "</tr></thead>");
                        var sno = 0;
                        $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var objJson = JSON.stringify(bdata[i]);
                            $("#displayBankTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].ledgerName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                    + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].requestAmount + "' readonly></td>"
                                    + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].sanctionedAmount + "' readonly></td>"
                                    + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + bdata[i].approvedAmount + "' readonly></td></tr>");
                        }
                        $("#displayBankTable").DataTable({
                            paging: true
                        });
                    } else {
                        displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
                    }
                }
                else {
                    displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
                }
            } else {
                displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
            }
        });
    }
}

function getLocationBasedOnDDOExpense() {
    var ddo = $("#ddo").val();
//    alert(ddo);
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getLocationBasedOnDdo
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#location").text("").append("<option value = '' selected>---- Select Location ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#location").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].locationName + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#location option:contains('" + name + "')").attr("selected", "selected");
            }
        } else
        {
            $("#location").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}


function getDdoLocationforexpbudappr() {

    var _id = $("#ddo").val();
    //alert();
    $.get(server_base_url + "/Budget/Common/BudgetHead/SearchDdoLocation", {
        _id: _id
    }).done(function(pdata) {
        // alert(pdata);
        pdata = JSON.parse(pdata);
        $('#location').val(pdata[0].location);
        //  $('#employeeJsonObject').val(encodeURI(JSON.stringify(pdata[0])));
    });
}
function getExpenseBudgetAprprovafinyear() {
    var fromyear = getFincialYearForAllReports();
    $("#finyearId").append("<option value='" + fromyear + "' selected>" + fromyear + "</option>");
}
function validateapprovalExpenseBudget()
{
    var result = 1;
    var ddo = $('#ddo').val();
    var finyear = $('#finyearId').val();
    var fundtype = $('#fundType').val();
    var sector = $('#sector').val();
    var location = $('#location').val();
    var budgetHead = $('#budgethead').val();
    var budgetType = $('#budgettypeId').val();

    if ($('#fundType').val() == null || $('#fundType').val() == "") {
        $("#fundType").focus();
        displaySmallErrorMessages("fundTypeErr", "Please Select Fund Type.");
        result = 0;
    }
    if ($('#sector').val() == null || $('#sector').val() == "") {
        $("#fundType").focus();
        displaySmallErrorMessages("sectorErr", "Please Select Sector.");
        result = 0;
    }
    if ($('#budgettypeId').val() == null || $('#budgettypeId').val() == "") {
        $("#budgettypeId").focus();
        displaySmallErrorMessages("budgettypeIdErr", "Please Select Budget Type.");
        result = 0;
    }
    if (result != 0) {
        $("#ddoErr").text("").val("");
        $("#finyearIdErr").text("").val("");
        $("#fundTypeErr").text("").val("");
        $("#sectorErr").text("").val("");
        $("#budgettypeIdErr").text("").val("");
        $("#locationErr").text("").val("");
        $("#budgetheadErr").text("").val("");
        $("#budgettypeIdErr").text("").val("");
        viewBudgetHeadsforapprovalExpensiveBudget();
    }
}
function resetapprovalExpenseBudget()
{
    $("#ddoErr").text("").val("");
    $("#finyearIdErr").text("").val("");
    $("#fundTypeErr").text("").val("");
    $("#sectorErr").text("").val("");
    $("#budgettypeIdErr").text("").val("");
    $("#budgetheadErr").text("").val("");
    $('#dateIdErr').text("").val("");
    $('#fundType').val("");
    $('#budgethead').val("");
    $('#sector').val("");
    $('#budgettypeId').val("");
}
function viewBudgetHeadsforapprovalExpensiveBudget()
{
    if (checkUserPrivelege(pvViewBudgetApprovalDDO)) {
        $("#searchPanel").remove("");
        $("#maritalListPanelSearch").remove("");
        $("#budgetIncomeListPanel").remove("");
        $("#tableHeader").append("<div id='budgetIncomeListPanel' class='panel panel-blue' />");
        $("#budgetIncomeListPanel").text("").append("<div id='budgetIncomeListPanelHeading' class='panel-heading' />");
        $("#budgetIncomeListPanelHeading").append("<h4 id='budgetIncomefirstHeader1' class='panel-title' />");
        $("#budgetIncomefirstHeader1").text("").append("<a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#associationpanel' href='#collapseOneass2'><center>List of Ledgers</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin12'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#budgetIncomeListPanel").append("<div id='budgetIncomeListPanelcolapse' class='panel-collapse collapse in' />");

        $("#collapseFin12").click(function() {
            $("#budgetIncomeListPanelcolapse").toggle();
            if ($("#collapseFin12 span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin12").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin12").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#budgetIncomeListPanelcolapse").append("<div id='budgetIncomepanelMainBody' class = 'panel-body' />");
        $("#budgetIncomepanelMainBody").text("").append("<div id='ErrorDiv'/>");
        $("#budgetIncomepanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div id='budgetheadrow' class='form-group' />");
        $("#listpanelRow").append("<div class='tab-pane' id='DatatablemainDiv'/>");
        $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
        $("#viewDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='approvalexpensebudgetheadstable' />");
        $("#approvalexpensebudgetheadstable").append("<thead class=''><tr>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Ledger</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Budget Head</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Requested Amount(In.Lacs)</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Sanctioned Amount(In.Lacs)</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Approved Amount(In.Lacs)</th>"
                + "</tr></thead>");
        var department = []
        if ($("#department").val() == "")
        {
            $("#department option").each(function()
            {
                if ($(this).val() != "")
                {
                    department.push($(this).val());
                }

            });
        } else
        {
            department.push($("#department").val());
        }
        $.get(server_base_url + "/Budget/BudgetTransaction/ExpenseBudgetApproval/Search", {
            ddo: $('#ddo').val(),
            fund: $('#fundType').val(),
            sector: $('#sector').val(),
            finyear: $('#finyearId').val(),
            budgetHead: $('#budgethead').val(),
            location: $('#location').val(),
            department: JSON.stringify(department)
        }).done(function(pdata) {
            if (pdata == fail) {
                displaySuccessMessages("ErrorDiv", emptyListMessage, "");
            } else if (pdata == unauthorized || pdata.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == statusException) {
                displaySuccessMessages("ErrorDiv", emptyListMessage, "");

            } else {
                if (pdata.length > 0) {
                    var amount = 0;
                    var sno = 0;
                    $("#approvalexpensebudgetheadstable").append("<tbody id='approvalexpensebudgetheadstableBody'/>");
                    for (var i = 0; i < pdata.length; i++) {
                        sno++;
                        var sanamt = pdata[i].sanctionedAmount;
                        if (sanamt == undefined || sanamt == null)
                        {
                            sanamt = 0;
                        }
                        var objJson = JSON.stringify(pdata[i]);
                        $("#approvalexpensebudgetheadstableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].ledgerName + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].budgetHeadName + "</td>"
                                + "<td style='cursor:pointer;')>" + ' <input type="text" value=' + pdata[i].requestedAmount + ' style="min-width:1%;width:80px;" readonly/>' + "</td>"
                                + "<td style='cursor:pointer;')>" + ' <input type="text" value=' + sanamt + ' style="min-width:1%;width:80px;" readonly/>' + "</td>"
                                + "<td style='cursor:pointer;')>" + ' <input type="text"  style="min-width:1%;width:80px;" name="approveAmout" value=' + amount + ' id="approveAmout" onchange = validateSanctnAmount("' + pdata[i].sanctionedAmount + '", "' + i + '") onkeypress = "return validateNumber(event)"/></td></tr>');

                    }
                    $("#approvalexpensebudgetheadstable").DataTable({paging: true, "bDestroy": true});
                }
            }
        });
        $("#budgetIncomepanelMainBody").append("<div id='approvalbudgetheadButtonId' class='form-group' />");
        $("#approvalbudgetheadButtonId").append("<label class='col-sm-3 control-label'></label>");
        $("#approvalbudgetheadButtonId").append("<div id='approvalbudgetheadsaveButton' class='col-sm-9' />");
        $("#approvalbudgetheadsaveButton").append("<button class='btn btn-success mr5 btn-flat' id='saveButton' onclick='saveExpenseBudgetApprovalvalidation()'>Save</button>&nbsp&nbsp&nbsp");
        $("#approvalbudgetheadsaveButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='resetExpenseBudgetApprovalList()'>Reset</button>&nbsp&nbsp&nbsp");
    }
}

function resetExpenseBudgetApprovalList()
{
    resetapprovalExpenseBudget();
    $("#approvalexpensebudgetheadstableBody").text("");
}
function saveExpenseBudgetApprovalvalidation()
{

    var budgetheads = [];
    var rows = $("#approvalexpensebudgetheadstable").dataTable().fnGetNodes();
    for (var i = 0; i < rows.length; i++)
    {
        var row1 = $(rows[i]);
        budgetheads.push({
            sancAmount: row1.find('td:eq(4) input').val(),
            approvedamt: row1.find('td:eq(5) input').val()
        });
    }

    var sanamt = 0;
    var k = 0;
    for (var i = 0; i < budgetheads.length; i++)
    {
        sanamt = parseInt(sanamt) + parseInt(budgetheads[i].sancAmount);
        k = parseInt(k) + parseInt(budgetheads[i].approvedamt);
    }

    if (k > sanamt)
    {

        displayErrorMessages("ErrorDiv", amountmsg, "");
        setTimeout(function() {
            $("#ErrorDiv").text("").val();
        }, 2000);
    } else
    {
        saveExpenseBudgetApproval();
    }
}


function saveExpenseBudgetApproval()
{
    if (checkUserPrivelege(pvViewBudgetApprovalDDO)) {
          $("#saveButton").attr("disabled", true);
        var result = 1;
        var budgetheads = [];
        var rows = $("#approvalexpensebudgetheadstable").dataTable().fnGetNodes();
        for (var i = 0; i < rows.length; i++)
        {
            var row1 = $(rows[i]);
            var budgetExpenseDetails = JSON.parse(decodeURI(row1.find('td:eq(0) input').val()));
            budgetheads.push({
                budgetHead: budgetExpenseDetails.budgetHead,
                requestAmount: row1.find('td:eq(3) input').val(),
                sanctionedAmount: row1.find('td:eq(4) input').val(),
                ddo: $("#ddo").val(),
                location: $("#location").val(),
                fundtype: $("#fundType").val(),
                sector: $("#sector").val(),
                finYear: $("#finyearId").val(),
                budgetType: $("#budgettypeId").val(),
                approvedAmount: row1.find('td:eq(5) input').val(),
                consolidatedExpenseId: budgetExpenseDetails._id.$oid,
                ledgerId: budgetExpenseDetails.ledgerId,
                ledgerName: budgetExpenseDetails.ledgerName,
                budgetHeadName: budgetExpenseDetails.budgetHeadName,
                departmentName: budgetExpenseDetails.departmentName,
                consolidateBudgetStatus: "Save"
            });
            $(this).closest('tr').remove();
        }
        var department = []
        if ($("#department").val() == "")
        {
            $("#department option").each(function()
            {
                if ($(this).val() != "")
                {
                    department.push($(this).val());
                }

            });
        } else
        {
            department.push($("#department").val());
        }
        if (budgetheads == null || budgetheads == "") {
            result = 0;
        }
        if (result != 0)
        {
            budgetheads = JSON.stringify(budgetheads);
//
            var id = getUserSessionElement("userId");
            $.post(server_base_url + "Budget/BudgetTransaction/ExpenseBudgetApproval/Save", {
                expensebudgetJson: budgetheads,
                userid: id,
                department: JSON.stringify(department)
            }).done(function(data) {

                if (data.statuscode == fail) {
                    displaySmallErrorMessagesInRed("pregsuccessBefore", failMessage + "");
                } else if (data.statuscode == unauthorized) {
                    displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "");
                } else if (data.statuscode == statusException) {
                    displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "");
                } else if (data.statuscode == invalidSession) {
                    callSessionTimeout();
                } else {
                    displaySuccessMessages("ErrorDiv", successMessage, "");
                    setTimeout(function() {
                        $("#ErrorDiv").text("").val();
                        approvalExpenseBudget();
                    }, 3000);
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
function updateExpenseBUdgetApproval(obj) {
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
            + "<th style='min-width:30%;width:auto;'><i ></i>Asked for Amount(In Lacs)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Approved Amount(In Lacs)</th>"
            + "</tr></thead>");
    $("#displayListTable").append("<tbody id='displayListTableBody' class='table-striped table-bclased' />");
    $("#displayListTableBody").text("").append("<tr id='" + obj.status + "' style='cursor:pointer;' >"
            + "<td>1<input type='hidden' value='" + encodeURI(JSON.stringify(obj)) + "'></td>"
            + "<td style='cursor:pointer;'>" + obj.ledgerName + "<input type='hidden' value='" + obj._id.$oid + "'></td>"
            + "<td style='cursor:pointer;'><input type='text' value='" + obj.requestAmount + "' readonly></td>"
            + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + obj.sanctionedAmount + "' ></td>");
    $("#listpanelRow").append("<div class='row' id='saveSubmitResetPrintRow12'/>");
    $("#saveSubmitResetPrintRow12").append("<div class='col-sm-12' id='buttonIdofTable'/>");
    $("#buttonIdofTable").append("<center><button class='btn btn-success mr5 btn-flat'  onclick='UpdateExpenseBUdgetApprovalRow()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button class='btn btn-warning mr5 btn-flat' onclick='goBackToConsolidateSearchFunction()'>Back</button></center>");
}
function UpdateExpenseBUdgetApprovalRow() {
    if (checkUserPrivelege(pvUpdateBudgetConsolidatedIncome)) {
        var id;
        var askedForMoney;
        $('#displayListTable tbody tr ').each(function(i) {
            var row = $(this).closest('tr');
            var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
            id = budgetIncomeDetails._id.$oid;
            askedForMoney = row.find('td:eq(3) input').val();
            $(this).closest('tr').remove();
        });
        $.post(server_base_url + "/budget/budgetTransaction/ExpenseBudgetApprovalUpdate", {
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
function deleteExpenseBudgetApproval(Id) {

    $.post(server_base_url + "/budget/budgetTranscation/ExpenseBUdgetApprovalDelete", {
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
function expenseBUdgetApprovalSubmit() {
    if (checkUserPrivelege(pvUpdateBudgetConsolidatedIncome)) {
        var result = 1;
        var saveThisConsolidateDetails = [];
        var department = []
        if ($("#departmentSearch").val() == "")
        {
            $("#departmentSearch option").each(function()
            {
                if ($(this).val() != "")
                {
                    department.push($(this).val());
                }

            });
        } else
        {
            department.push($("#departmentSearch").val());
        }
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
            $.post(server_base_url + "/budget/budgetTransaction/ExpenseBudgetApprovalSubmit", {
                objJson: JSON.stringify(saveThisConsolidateDetails),
                userid: userid,
                department: JSON.stringify(department)
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