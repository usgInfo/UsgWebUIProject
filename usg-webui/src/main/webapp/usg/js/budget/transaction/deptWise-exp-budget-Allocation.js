/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function createDeptWiseBudgetExpense()
{
    //if (checkUserPrivelege(pvViewBudgetApprovalDDO)) {
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetTransactionMenuTabs()">Budget Transaction</a></label> >> <label>Expense Budget Allocation @ Department</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetapprovalMainDiv"/>');
    $("#budgetapprovalMainDiv").text("").append("<div id='mainTabMenu'  class='page-content'  />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#mainTabMenu").append("<div id='tableHeaderTable' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Expense Budget Allocation @ Department</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
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
    $("#Row1Col1").append(getLabel("DDO", "required") + "" + getDropDownWithOnChange("ddoId"));
    $("#Row1Col2").append(getLabel("Location", "required") + "" + getDropDown("location"));
//    $("#ddoId").attr("onchange", "getDdoLocationforexpbudappr()");

    $("#panelRow").append("<div id='firstRow' class='form-group' />");
    getTwoColumnInRow("firstRow", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel("Financial Year", "required") + "" + getDropDown("finyearId"));
    $("#Row2Col2").append(getLabel("Fund Type", "required") + "" + getDropDown("fundtypeId"));
    $("#panelRow").append("<div id='secondRow' class='form-group' />");
    getTwoColumnInRow("secondRow", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel("Sector", "required") + "" + getDropDown("sectorId"));
    $("#Row3Col2").append(getLabel("Budget Type", "required") + "" + getDropDown("budgettypeId"));

    $("#panelRow").append("<div id='lastRow' class='form-group' />");
    getTwoColumnInRow("lastRow", "Row5", "Row5Col1", "Row5Col2");
    $("#Row5Col1").append(getLabel("BudgetHead", "") + "" + getDropDown("budgethead"));
    $("#Row5Col2").append(getLabel("Department", "required") + "" + getDropDown("department"));
    $("#panelMainBody").append("<div id='saveButtonId' class='form-group' />");
    $("#saveButtonId").append("<label class='col-sm-3 control-label'></label>");
    $("#saveButtonId").append("<div id='saveButton' class='col-sm-9' />");
    $("#saveButton").append("<button class='btn btn-success btn-flat' onclick='validateapprovalDeptWiseExpBudget()'>Show Ledgers</button>&nbsp&nbsp&nbsp");
    $("#saveButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='createDeptWiseBudgetExpense()'>Reset</button>&nbsp&nbsp&nbsp");
    $("#saveButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='searchforDeptWiseExpbudgetApproval()'>Search</button>");
    getLoggedInDDOLocationInDropDown("ddoId", "location");
    viewOption("budget/master/BudgetType/View", "", "description", "budgettypeId", "Budget Type");
    viewOption("hrms/common/BudgetHead/View", "", "budgetHead", "budgethead", "Budget Head");
    viewOption("/budget/master/FundType/View", "", "description", "fundtypeId", "Fund Type");
    fetchAlSectors("", "sectorId", "Sector");
    getExpenseBudgetAprprovafinyear();
    fetchAllDeptCreteIncome("", "department", "Department");
//          getDepartment("department");
    //   }

}
function searchforDeptWiseExpbudgetApproval() {
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
        $("#Row9Col2").append(getLabel("Department", "required") + "" + getDropDown("departmentSearch"));



        $("#SearchbodyMainBodypanelRow").append("<div id='searchbut' class='form-group' />");
        $("#searchbut").append("<label class='col-sm-5 control-label'></label>");
        $("#searchbut").append("<div id='savesearchButton' class='col-sm-7' />");
        $("#savesearchButton").append("<button class='btn btn-success mr5 btn-flat' id='SearchIncomeBudgetButton' onclick='validateDeptWiseExpenseBudgetSearch()'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp");
        $("#savesearchButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='ResetExpenseBudgetApprovalSearch()'>Reset</button>&nbsp&nbsp&nbsp");

        getLoggedInDDOLocationInDropDown("searchddo", "searchlocation");
        getBudgetfinancialyear();
        viewOption("budget/master/BudgetType/View", "", "description", "budgetTypeSearch", "Budget Type");
        viewOption("hrms/common/BudgetHead/View", "", "budgetHead", "budgetheadSearch", "Budget Head");
        viewOption("budget/master/FundType/View", "", "description", "fundTypeSearch", "Fund Type");
        fetchAlSectors("", "sectorSearch", "Sector");
        fetchAllDeptCreteIncome("", "departmentSearch", "Department");
    }
}
function validateapprovalDeptWiseExpBudget()
{
    var result = 1;
    var ddo = $('#ddoId').val();
    var finyear = $('#finyearId').val();
    var fundtype = $('#fundtypeId').val();
    var sector = $('#sectorId').val();
    var location = $('#location').val();
    var budgetHead = $('#budgethead').val();
    var budgetType = $('#budgettypeId').val();
    var department = $('#department').val();

    if ($('#fundtypeId').val() == null || $('#fundtypeId').val() == "") {
        $("#fundtypeId").focus();
        displaySmallErrorMessages("fundtypeIdErr", "Please Select Fund Type.");
        result = 0;
    }
    if ($('#department').val() == null || $('#department').val() == "") {
        $("#department").focus();
        displaySmallErrorMessages("departmentErr", "Please Select Fund Type.");
        result = 0;
    }
    if ($('#sectorId').val() == null || $('#sectorId').val() == "") {
        $("#fundtypeId").focus();
        displaySmallErrorMessages("sectorIdErr", "Please Select Sector.");
        result = 0;
    }
    if ($('#budgettypeId').val() == null || $('#budgettypeId').val() == "") {
        $("#budgettypeId").focus();
        displaySmallErrorMessages("budgettypeIdErr", "Please Select Budget Type.");
        result = 0;
    }
    if (result != 0) {
        $("#ddoIdErr").text("").val("");
        $("#finyearIdErr").text("").val("");
        $("#fundtypeIdErr").text("").val("");
        $("#sectorIdErr").text("").val("");
        $("#budgettypeIdErr").text("").val("");
        $("#locationErr").text("").val("");
        $("#budgetheadErr").text("").val("");
        $("#budgettypeIdErr").text("").val("");
        $("#departmentErr").text("").val("");
        viewLedgersforDeptWiseExpenseBudget();
    }
}


function validateDeptWiseExpenseBudgetSearch() {
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
    if ($('#departmentSearch').val() == null || $('#departmentSearch').val() == "") {
        $("#departmentSearch").focus();
        displaySmallErrorMessages("departmentSearchErr", "Please Select department.");
        result = 0;
    }
    var financialYear = $('#financailYearSearch').val();
    var budgetType = $('#budgetTypeSearch').val();
    var fundType = $('#fundTypeSearch').val();
    var location = $('#searchlocation').val();
    var sector = $('#sectorSearch').val();
    var ddo = $('#searchddo').val();
    var budgethead = $('#budgetheadSearch').val();
    var department = $('#departmentSearch').val();

    if (result != 0) {
        var searchObj = {
            financialYear: financialYear,
            fundType: fundType,
            sector: sector,
            budgetType: budgetType,
            ddo: ddo,
            location: location,
            budgetHead: budgethead,
            department: department
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
        $.post(server_base_url + "/Budget/BudgetTrans/deptWiseExpBudgetAlloc/ledgerSearch", {
            searchObj: JSON.stringify(searchObj)
        }).done(function(bdata) {
            bdata = JSON.parse(bdata);
            if (bdata != null) {
                if (bdata.length > 0) {
                    $("#displayBankTable").append("<thead class=''><tr>"
                            //    + " <th> Select</th>"
                            + " <th> S.No</th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Asked Amount(In Lacs)</th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Approved Amount(In Lacs)</th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Extra Provision Amount(In Lacs)</th>"
//                            + "<th style='min-width:1%;width:80px;'><i ></i>Edit</th>"
//                            + "<th style='min-width:1%;width:80px;'><i ></i>Delete</th>"
                            + "</tr></thead>");
                    var sno = 0;
                    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        var extraProvision = bdata[i].extraProvisionAmount;
                        if (extraProvision == undefined || extraProvision == "undefined") {
                            extraProvision = "0";
                        }
                        sno++;
                        var objJson = JSON.stringify(bdata[i]);
                        $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                //    + "<td><input type='checkbox' value='" + bdata[i]._id.$oid + "' name='case'></td>"
                                + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].ledgerName + "<input type='hidden' value='" + bdata[i]._id.$oid + "'></td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].requestAmount + "' readonly></td>"
                                + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + bdata[i].approvedAmount + "' readonly></td>"
                                + "<td style='cursor:pointer;'><input type='text' value='" + extraProvision + "' readonly></td></tr>");
                        //    + "<td style='cursor:pointer;' onclick=updateSactionUniversityBudgetExpense('" + encodeURI(objJson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                        //    + "<td onclick=deletePopUp('deleteIncomeSanctionBudget','nothingToDo','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");

                    }

                    $('#displayBankTable').datatable();
                } else {
                    displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
                }

            } else {
                displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
            }
        });
    }
}
function viewLedgersforDeptWiseExpenseBudget()
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
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Requested Amount(In.Lacs)</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Sanctioned Amount(In.Lacs)</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Approved Amount(In.Lacs)</th>"
                + "</tr></thead>");
        $.get(server_base_url + "/Budget/BudgetTrans/deptWiseExpBudgetAlloc/getLedgers", {
            ddo: $('#ddoId').val(),
            fund: $('#fundtypeId').val(),
            sector: $('#sectorId').val(),
            finyear: $('#finyearId').val(),
            budgetHead: $('#budgethead').val(),
            location: $('#location').val(),
            department: $('#department').val()
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
                    var sno = 0;
                    var amount = 0;
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
                                + "<td style='cursor:pointer;')>" + ' <input type="text" value=' + pdata[i].requestedAmount + ' style="min-width:1%;width:80px;" readonly/>' + "</td>"
                                + "<td style='cursor:pointer;')>" + ' <input type="text" value=' + sanamt + ' style="min-width:1%;width:80px;" readonly/>' + "</td>"
                                + "<td style='cursor:pointer;')>" + ' <input type="text"  style="min-width:1%;width:80px;" name="approveAmout" value=' + amount + ' id="approveAmout" onchange = validateSanctnAmount("' + pdata[i].sanctionedAmount + '", "' + i + '") onkeypress = "return validateNumber(event)"/></td></tr>');

                    }
                    $("#approvalexpensebudgetheadstable").DataTable({
                        paging: true
                    });
                }
                else {
                    displayLargeErrorMessagesInCenterInRed("ErrorDiv", noDataAvailable);
                }
            }
        });
        $("#budgetIncomepanelMainBody").append("<div id='approvalbudgetheadButtonId' class='form-group' />");
        $("#approvalbudgetheadButtonId").append("<label class='col-sm-3 control-label'></label>");
        $("#approvalbudgetheadButtonId").append("<div id='approvalbudgetheadsaveButton' class='col-sm-9' />");
        $("#approvalbudgetheadsaveButton").append("<button class='btn btn-success mr5 btn-flat' onclick='saveDeptWiseExpBudgetApprovalvalidation()'>Save</button>&nbsp&nbsp&nbsp");
        $("#approvalbudgetheadsaveButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='resetDeptWiseExpBudgetApprovalList()'>Reset</button>&nbsp&nbsp&nbsp");
    }
}

function saveDeptWiseExpBudgetApprovalvalidation()
{

    var budgetheads = [];
    var rows = $("#approvalexpensebudgetheadstable").dataTable().fnGetNodes();
    for (var i = 0; i < rows.length; i++)
    {
        var row1 = $(rows[i]);
        budgetheads.push({
            sancAmount: row1.find('td:eq(3) input').val(),
            approvedamt: row1.find('td:eq(4) input').val()
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

        displaySuccessMessages("ErrorDiv", amountmsg, "");
        setTimeout(function() {
            $("#ErrorDiv").text("").val();
        }, 1500);
    } else
    {
        saveDeptWiseExpBudgetApproval();
    }
}


function saveDeptWiseExpBudgetApproval()
{
    if (checkUserPrivelege(pvViewBudgetApprovalDDO)) {
        var result = 1;
        var budgetheads = [];
        var rows = $("#approvalexpensebudgetheadstable").dataTable().fnGetNodes();
        for (var i = 0; i < rows.length; i++)
        {
            var row1 = $(rows[i]);
            var budgetExpenseDetails = JSON.parse(decodeURI(row1.find('td:eq(0) input').val()));

            budgetheads.push({
                budgetHead: budgetExpenseDetails.budgetHead,
                requestAmount: row1.find('td:eq(2) input').val(),
                sanctionedAmount: row1.find('td:eq(3) input').val(),
                ddo: $("#ddoId").val(),
                location: $("#location").val(),
                fundtype: $("#fundtypeId").val(),
                sector: $("#sectorId").val(),
                finYear: $("#finyearId").val(),
                department: $("#department").val(),
                budgetType: $("#budgettypeId").val(),
                approvedAmount: row1.find('td:eq(4) input').val(),
                consolidatedExpenseId: budgetExpenseDetails.consolidatedExpenseId,
                createExpenseId: budgetExpenseDetails.createExpenseId,
                ledgerId: budgetExpenseDetails.ledgerId,
                ledgerName: budgetExpenseDetails.ledgerName,
                budgetHeadName: budgetExpenseDetails.budgetHeadName
            });
            $(this).closest('tr').remove();
        }
        if (budgetheads == null || budgetheads == "") {
            result = 0;
        }
        if (result != 0)
        {
            budgetheads = JSON.stringify(budgetheads);

            var id = getUserSessionElement("userId");
            $.post(server_base_url + "Budget/budgetTrans/DeptWiseExpBudgetAllocSave", {
                expensebudgetJson: budgetheads,
                userid: id
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
                        createDeptWiseBudgetExpense();
                        $("#ErrorDiv").text("").val();
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

function validateDeptWiseExpBudgetApprovalSearch() {
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
    if ($('#budgetheadSearch').val() == null || $('#budgetheadSearch').val() == "") {
        $("#budgetheadSearch").focus();
        displaySmallErrorMessages("budgetheadSearchErr", "Please Select Budget Head.");
        result = 0;
    }
    var financialYear = $('#financailYearSearch').val();
    var budgetType = $('#budgetTypeSearch').val();
    var fundType = $('#fundTypeSearch').val();
    var location = $('#searchlocation').val();
    var sector = $('#sectorSearch').val();
    var ddo = $('#searchddo').val();
    var budgethead = $('#budgetheadSearch').val();

    if (result != 0) {
        var searchObj = {
            financialYear: financialYear,
            fundType: fundType,
            sector: sector,
            budgetType: budgetType,
            ddo: ddo,
            location: location,
            budgetHead: budgethead
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
        $.post(server_base_url + "/Budget/BudgetTransaction/DeptWiseExpBudpproval/Search", {
            searchObj: JSON.stringify(searchObj)
        }).done(function(bdata) {
            bdata = JSON.parse(bdata);
            if (bdata != null) {
                if (bdata.length > 0) {
                    $("#displayBankTable").append("<thead class=''><tr>"
                            //    + " <th> Select</th>"
                            + " <th> S.No</th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Asked Amount(In Lacs)</th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Approved Amount(In Lacs)</th>"
//                            + "<th style='min-width:1%;width:80px;'><i ></i>Edit</th>"
//                            + "<th style='min-width:1%;width:80px;'><i ></i>Delete</th>"
                            + "</tr></thead>");
                    var sno = 0;
                    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var objJson = JSON.stringify(bdata[i]);
                        $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                //    + "<td><input type='checkbox' value='" + bdata[i]._id.$oid + "' name='case'></td>"
                                + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].ledgerName + "<input type='hidden' value='" + bdata[i]._id.$oid + "'></td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].requestAmount + "' readonly></td>"
                                + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + bdata[i].approvedAmount + "' readonly></td></tr>");
                        //    + "<td style='cursor:pointer;' onclick=updateSactionUniversityBudgetDeptWiseExp('" + encodeURI(objJson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                        //    + "<td onclick=deletePopUp('deleteIncomeSanctionBudget','nothingToDo','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");

                    }

                    $('#displayBankTable').datatable();
                } else {
                    displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
                }

            } else {
                displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
            }
        });
    }
}

