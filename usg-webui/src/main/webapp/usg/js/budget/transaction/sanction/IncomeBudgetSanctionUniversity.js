/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//------------------Form of Income Consolidate Search Form---------------------------

function createIncomeBudgetSanctionAtUniversity() {
    scrolupfunction();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetTransactionMenuTabs()">Budget Transaction</a></label> >> <label>Income Budget Approval & Sanction @ DDO</label>');
    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu' class='page-content'     />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#mainTabMenu").append("<div id='tableHeaderTable' />");
    if (checkUserPrivelege(pvCreateIncomeBudgetUniversity)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Income Budget Approval & Sanction @ DDO</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#collapseFin").click(function() {
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

//    $("#budgetCode").prop('disabled', true);
//    $("#previousBudget").prop('disabled', true);

        $("#panelMainBody").append("<div id='panelRow2' class='row' />");
        $("#panelRow2").append("<div id='FieldGroup2' class='form-group' />");
        getTwoColumnInRow("FieldGroup2", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Budget Type", "required") + "" + getDropDown("budgetType"));
        $("#Row3Col2").append(getLabel("Budget Date", "required") + "" + '<div class="" /><input class="form-control" type="text" id="universityBudgetDate" onkeydown="return false;"><span id="universityBudgetDateErr"></span></input>');
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
        $('#universityBudgetDate').datepicker({
            changeYear: true,
            changeMonth: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear
        });
        $("#panelMainBody").append("<div id='panelRow3' class='row' />");
        $("#panelRow3").append("<div id='FieldGroup3' class='form-group' />");
        getTwoColumnInRow("FieldGroup3", "Row4", "Row4Col1", "Row4Col2");
        $("#budgetType").attr("onchange", " getAllSrNosForSanction('previousBudget')");
        $("#Row4Col2").append(getLabel("Previous Budget", "") + "" + getDropDown("previousBudget", "", "", ""));
        //  $("#Row4Col1").append(getLabel("Previous Budget", "required") + "" + getInputwithErrSpan("previousBudget", "", "", ""));
        document.getElementById("previousBudget").disabled = true;
        $("#Row4Col1").append(getLabel("BudgetHead", "") + "" + getDropDown("budgethead"));
//    $("#budgetCode").prop('disabled', true);
//    $("#previousBudget").prop('disabled', true);
        $("#panelMainBody").append("<div id='panelRow4' class='row' />");
        $("#panelRow4").append("<div  class='col-xs-12' /><center><button type='button' id='createIncomeBudgetButtonSanc' value='Save' class='btn btn-success mr5'  onclick='CreateIncomeUniversityBudgetValidation()'>Create</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllIncomeUniversitysBudgetCodeData()' class='btn btn-warning mr5 ' name='reset' value='reset'>Reset</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='searchforUniversityBudget()' class='btn btn-warning mr5' name='reset' value='reset'>Search</button></div>");

        getBudgetfinancialyearForIncomeUniversity("financialYear");
        viewReDddoListForList("", "ddo");
        fetchAlSectors("", "sector", "Sector");
        viewOption("budget/master/FundType/View", "", "description", "fundType", "Fund Type");
        viewOption("hrms/common/BudgetHead/View", "", "budgetHead", "budgethead", "Budget Head");
        viewOption("budget/master/BudgetType/View", "", "description", "budgetType", "Budget Type");
    }
}

function getAllSrNosForSanction(id)
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
    $.get(server_base_url + "/budget/transaction/IncomeBudget/getAllSanctionSrNos", {
        obj: Json

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
//------------------Form of Income Consolidate Search Form---------------------------


//------------------------ Start Append  Financial Year Drop Down---------------------------

function getBudgetfinancialyearForIncomeUniversity(divId) {
    var fromyear = getFincialYearForAllReports();
    $("#" + divId).append("<option value='" + fromyear + "' selected>" + fromyear + "</option>");
}

//------------------------End Append  Financial Year Drop Down---------------------------

//------------------------Start Search Function Sanction Income Form-------------------


function fetchAlSectors(name, DivId, message) {
    $.get(server_base_url + "/budget/master/BudgetSector/View", {
    }).done(function(pdata) {

        $("#" + DivId).append("<option value ='' selected>---- Select " + message + " ----</option>");
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
function fetchAlSectorsincomsanction(name, DivId, message) {
    $.get(server_base_url + "/budget/master/BudgetSector/View", {
    }).done(function(pdata) {

        $("#" + DivId).append("<option value ='' selected>---- Select " + message + " ----</option>");
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

function searchforUniversityBudget() {
    if (checkUserPrivelege(pvViewIncomeBudgetUniversity)) {

        $("#searchPanel").remove("");
        $("#tableHeader").append("<div id='searchPanel' class='panel panel-blue' />");
        $("#searchPanel").text("").append("<div id='searchHeading' class='panel-heading' />");
        $("#searchHeading").append("<h4 id='searcHheaderName' class='panel-title' />");
        $("#searcHheaderName").append("<div class='panel-title'  style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#Searchbody'><center>Search Criteria</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin12'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#searchPanel").append("<div id='Searchbody' class='panel-collapse collapse in pal' />");
        $("#collapseFin12").click(function() {
            $("#Searchbody").toggle();
            if ($("#collapseFin12 span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin12").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin12").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#Searchbody").append("<div id='SearchbodyMainBody' class = 'panel-body' />");

        $("#SearchbodyMainBody").append("<div id='SearchbodyMainBodypanelRow' class='row'/>");
        $("#SearchbodyMainBodypanelRow").append("<div id='messageDiv'  ></div>");

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
        $("#savesearchButton").append("<button class='btn btn-success mr5 btn-flat' id='SearchIncomeBudgetButton' onclick='validateIncomeUniversityBudgetSearch()'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp");
        $("#savesearchButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='ResetIncomeSearchBudgetSanctionAtUniversity()'>Reset</button>&nbsp&nbsp&nbsp");
        getBudgetfinancialyearForIncomeUniversity("financailYearSearch");
        viewReDddoListForList("", "ddoSearch");
        viewOption("budget/master/FundType/View", "", "description", "fundTypeSearch", "Fund Type");
        // viewOption("/budget/master/BudgetSector/View", "", "description", "sectorSearch", "Sector");
        fetchAlSectorsincomsanction("", "sectorSearch", "Sector");
        viewOption("budget/master/BudgetType/View", "", "description", "budgetTypeSearch", "Budget Type");
        var statusOptions = ["Save", "Submit"];
        getHardCodedOptions("status", "Status", statusOptions);
    } else {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", privilageNotExist);
    }
}

//------------------------End Search Function Sanction Income Form -------------------

//------------------------Start Search Consolidate Income Form Validation -------------
function CreateIncomeUniversityBudgetValidation() {
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
    if ($('#universityBudgetDate').val() == null || $('#universityBudgetDate').val() == "") {

        displaySmallErrorMessages("universityBudgetDateErr", "Please Select Budget Date.");
        result = 0;
    }
    if (result != 0) {
        viewIncomeUniversityBudgetCodeList();
    }
}

function viewIncomeUniversityBudgetCodeList(divId)
{
    if (checkUserPrivelege(pvViewIncomeBudgetUniversity)) {
        var financialYear = $("#financialYear").val();
        var fundType = $("#fundType").val();
        var sector = $("#sector").val();
        var budgetType = $("#budgetType").val();
        var budgetHead = $("#budgethead").val();
        var universityBudgetDate = $("#universityBudgetDate").val();
        //For List Table
        $(".smallErrorMsg").text("");

        $("#tableHeaderTable").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Consolidated Budget Request</center>");

        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").text("").append("<div id='ErrorDiv'/>");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
        $("#displayBankTable").append("<thead class=''><tr>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Asked Amount(In Lacs)</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Approved Amount(In Lacs)</th>"
                + "</tr></thead>");
        var searchObj = {
            financialYear: financialYear,
            fundType: fundType,
            sector: sector,
            budgetType: budgetType,
            budgetHead: budgetHead,
            ddo: getUserSessionElement(seDDOId)
        };

        $.get(server_base_url + "/budget/transaction/ConsolidateExpense/Search", {
            searchObj: JSON.stringify(searchObj),
            condition: "IncomeBudget"
        }).done(function(bdata) {
            bdata = JSON.parse(bdata);
            if (bdata == fail) {
                // displayLargeErrorMessagesInCenterInRed("ErrorDiv", noDataAvailable);
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                //   displayLargeErrorMessagesInCenterInRed("ErrorDiv", unauthorizedMessage);
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException) {
                // displayLargeErrorMessagesInCenterInRed("ErrorDiv", statusExceptionMessage);
            } else {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            var result = 1;
                            var amount = 0;
                            result = 1;
                            if (result != 0) {
                                sno++;
                                var objJson = JSON.stringify(bdata[i]);
                                $("#displayBankTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                        //  + "<td><input type='checkbox' value='" + sno + "' name='case'></td>"
                                        + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].ledger + "<input type='hidden' value='" + universityBudgetDate + "'></td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                        + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].askedForAmount + "' readonly></td>"
                                        + "<td style='cursor:pointer;'><input class='sactionamount' type='text' onkeypress='return validate(event)' value='" + amount + "'><span id='emountErr" + sno + "'></span></td>");

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
                            $("#listpanelRow").append("<div class='row' id='saveSubmitResetPrintRow'/>");
                            $("#saveSubmitResetPrintRow").append('<center><button type="button"  value="Save" class="btn btn-success mr5 btn-flat"  onclick=saveIncomeUniversitySanctionBudgetDetails("' + save + '")>Save</button>&nbsp;&nbsp;&nbsp;<button name="reset" value="reset" type="button" class="btn btn-warning mr5" onclick=ResetIncomeUniversitysBudgetmaster()>Reset</button></center>');
                        }

                    }
                }
            }
            $('#displayBankTable').dataTable();
        });
    }
}
//------------------------End Display Consolidate Income Data  ----------------------




function saveIncomeUniversitySanctionBudgetDetails(saveorsubmit) {
    if (checkUserPrivelege(pvCreateIncomeBudgetUniversity)) {

        var status = "false";
        var rows = $("#displayBankTable").dataTable().fnGetNodes();
        for (var i = 0; i < rows.length; i++)
        {

            i++;

            $("#emountErr" + i).text("").val("");
        }

        for (var i = 0; i < rows.length; i++)
        {
            var row = $(rows[i]);
            var requestedAmount = row.find('td:eq(4) input').val();
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

            var rows = $("#displayBankTable").dataTable().fnGetNodes();
            for (var i = 0; i < rows.length; i++)
            {
                var row = $(rows[i]);
                var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
                saveThisIncomeDetails.push({
                    incomeBudgetId: budgetIncomeDetails.ddo,
                    ddo: budgetIncomeDetails.ddo,
                    consolidateExpenseBudgetId: budgetIncomeDetails._id.$oid,
                    location: budgetIncomeDetails.location,
                    financialYear: budgetIncomeDetails.financialYear,
                    budgetCode: budgetIncomeDetails.budgetCode,
                    fundType: budgetIncomeDetails.fundType,
                    budgetType: budgetIncomeDetails.budgetType,
                    ledger: budgetIncomeDetails.ledger,
                    ledgerId: budgetIncomeDetails.ledgerId,
                    budgetHeadName: budgetIncomeDetails.budgetHeadName,
                    sector: budgetIncomeDetails.sector,
                    prievioueBudget: budgetIncomeDetails.prievioueBudget,
                    budgetHead: budgetIncomeDetails.budgetHead,
                    headDescription: budgetIncomeDetails.headDescription,
                    budgetDate: budgetIncomeDetails.budgetDate,
                    askedForAmount: row.find('td:eq(3) input').val(),
                    approvedAmount: row.find('td:eq(4) input').val(),
                    sanctionincomeDate: row.find('td:eq(1) input').val(),
                    requestedAmount: budgetIncomeDetails.requestedAmount,
                    consolidateBudgetAmount: budgetIncomeDetails.consolidateBudgetAmount,
                    consolidateBudgetStatus: budgetIncomeDetails.consolidateBudgetStatus,
                    consolidateBudgetDate: budgetIncomeDetails.consolidateBudgetDate,
                    sanctionIncomeStatus: saveorsubmit,
                });

                $(this).closest('tr').remove();
            }
            if (saveThisIncomeDetails == null || saveThisIncomeDetails == "") {
                result = 0;
            }
            if (result != 0)
            {
                var id = getUserSessionElement("userId");
                $.post(server_base_url + "/budget/transaction/sanction/Save", {
                    objJson: JSON.stringify(saveThisIncomeDetails),
                    userid: id,
                    financialYear: $('#financialYear').val(),
                    budgetHead: $('#budgethead').val(),
                    fundType: $('#fundType').val(),
                    sector: $('#sector').val(),
                    status: saveorsubmit
                }).done(function(data) {
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
                        if (saveorsubmit == "Submit")
                        {
                            displaySuccessMessages("ErrorDiv", sendMessage, "");
                        } else
                        {
                            displaySuccessMessages("ErrorDiv", successMessage, "");
                        }
                        setTimeout(function() {
                            //createIncomeBudgetButtonSanc
                            $("#viewUserSectionTableDiv").text("");
                            // $("#SearchIncomeBudgetButton").click();
                            $(".smallErrorMsg").text("");
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
//function UpdateConUniversityBudgetDetailsInSearch() {
//    if (checkUserPrivelege(pvCreateIncomeBudgetUniversity) || checkUserPrivelege(pvUpdateIncomeBudgetUniversity)) {
//        var saveThisIncomeDetails = [];
//        $('#displayBankTable tbody tr input[type="checkbox"][name="case"]:checked').each(function(i) {
//            var row = $(this).closest('tr');
//            var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(1) input').val()));
//            saveThisIncomeDetails.push({
//                incomeBudgetId: row.find('td:eq(2) input').val()
//            });
//            $(this).closest('tr').remove();
//        });
//        var userid = getUserSessionElement("userId");
//        $.post(server_base_url + "budget/transaction/IncomeExpense/Submit", {
//            objJson: JSON.stringify(saveThisIncomeDetails),
//            userid: userid
//        }).done(function(data) {
//            if (data == fail) {
//                displaySmallErrorMessagesInRed("messageDiv", "Invalid username / password" + "<br/><br/>");
//            } else if (data == unauthorized || data.statuscode == unauthorized) {
//                displaySmallErrorMessagesInRed("messageDiv", unauthorizedMessage + "<br/><br/>");
//            } else if (data == statusException) {
//                displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
//            } else if (data == invalidSession) {
//                callSessionTimeout();
//            } else if (data == null) {
//                displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");
//            } else {
//                $(".smallErrorMsg").text("");
//                displaySuccessMessages("messageDiv", sendMessage, "");
//                setTimeout(function() {
//                    $("#SearchIncomeBudgetButton").click();
//                }, 3000);
//            }
//        });
//    }
//}
function updatebudgetIncomeUniversityBudget(obj) {
    $("#messageDiv").text("");
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $(".smallErrorMsg").text("");
    $("#tableHeaderTable").text("").append("<div id='maritalListPanelSearch' class='panel panel-blue' />");
    $("#maritalListPanelSearch").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>Update Consolidate Expense Budget</center>");
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
            + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head </th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Head Description</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Asked  Amount(In Lacs)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Approved Amount(In Lacs)</th>"
            + "</tr></thead>");
    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
    $("#displayBankTableBody").text("").append("<tr id='" + obj.status + "' style='cursor:pointer;' >"
            + "<td>1<input type='hidden' value='" + encodeURI(JSON.stringify(obj)) + "'></td>"
            + "<td style='cursor:pointer;'>" + obj.budgetHead + "<input type='hidden' value='" + obj._id.$oid + "'></td>"
            + "<td style='cursor:pointer;'>" + obj.headDescription + "</td>"
            + "<td style='cursor:pointer;'><input type='text' value='" + obj.askedForAmount + "' readonly></td>"
            + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + obj.approvedAmount + "' ></td>");
    $("#listpanelRow").append("<div class='row' id='saveSubmitResetPrintRow'/>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-3'></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-success mr5 btn-flat'  onclick='SanctionExpenseBudgetRow()'>Update</button></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-warning mr5 btn-flat' onclick=goBackToConsolidateSearchFunction() >Back</button></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");
}
//------------------------------------ Start Back Button------------------------------
function goBackToConsolidateSearchFunction() {
    $("#SearchExpenseBudgetButton").click();
}
//------------------------------------ End Back Button--------------------------------

//------------------------------------ Start Update Function------------------------------
function SanctionExpenseBudgetRow() {
    if (checkUserPrivelege(pvUpdateIncomeBudgetUniversity) || checkUserPrivelege(pvUpdateIncomeBudgetUniversity)) {
        var id;
        var approvedMoney;
        $('#displayBankTable tbody tr ').each(function(i) {
            var row = $(this).closest('tr');
            var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
            id = budgetIncomeDetails._id.$oid;
            approvedMoney = row.find('td:eq(4) input').val();
            $(this).closest('tr').remove();
        });
        $.post(server_base_url + "/budget/transaction/sanction/Update", {
            Id: id,
            approvedAmount: approvedMoney,
            userid: getUserSessionElement("userId")
        }).done(function(data) {
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
                displaySuccessMessages("messageDiv", updateMessage, "");
                $("#SearchIncomeBudgetButton").click();
                setTimeout(function() {
                    displaySuccessMessages("messageDiv", updateSuccessMessage, "");
                    clearSuccessMessageAfterTwoSecond("messageDiv");
                }, 3000);

            }
        });
    }
}

//------------------------------------ End Update Function------------------------------


//------------------------------------ Start Submit Function------------------------------

function UpdateIncomeUniversityBudgetDetailsInSearch() {
    if (checkUserPrivelege(pvUpdateIncomeBudgetUniversity) || checkUserPrivelege(pvUpdateIncomeBudgetUniversity)) {
        var result = 1;
        var saveThisConsolidateDetails = [];
//        $('#displayBankTable tbody tr input[type="checkbox"][name="case"]:checked').each(function(i) {
//            var row = $(this).closest('tr');
        var rows = $("#displayBankTable").dataTable().fnGetNodes();
        for (var i = 0; i < rows.length; i++)
        {
            var row = $(rows[i]);
            var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
            var obctList;
            saveThisConsolidateDetails.push({
                consolidateExpenseBudgetId: row.find('td:eq(1) input').val()
            });
            $(this).closest('tr').remove();
        }
        if (saveThisConsolidateDetails == null || saveThisConsolidateDetails == "") {
            result = 0;
        }
        if (result != 0)
        {
            var userid = getUserSessionElement("userId");
            $.post(server_base_url + "/budget/transaction/income/Submit", {
                objJson: JSON.stringify(saveThisConsolidateDetails),
                userid: userid
            }).done(function(data) {

                if (data == fail) {
                    displaySmallErrorMessagesInRed("messageDiv", "Invalid username / password" + "<br/><br/>");
                } else if (data == unauthorized || data.statuscode == unauthorized) {
                    displaySmallErrorMessagesInRed("messageDiv", unauthorizedMessage + "<br/><br/>");
                } else if (data == statusException) {
                    displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
                } else if (data == invalidSession) {
                    callSessionTimeout();
                } else if (data == null) {
                    displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");
                } else {
                    $(".smallErrorMsg").text("");
                    displaySuccessMessages("messageDiv", sendMessage, "");
                    setTimeout(function() {
                        $("#SearchIncomeBudgetButton").click();
                        $("#messageDiv").text("").val("");
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

//------------------------------------ End  Submit Function------------------------------

//------------------------------------Start Validation For Saction Income University-----

function validateIncomeUniversityBudgetSearch(previousSearchJson) {
    if (checkUserPrivelege(pvUpdateIncomeBudgetUniversity) || checkUserPrivelege(pvUpdateIncomeBudgetUniversity) || checkUserPrivelege(pvViewIncomeBudgetUniversity)) {
        if (previousSearchJson == "" || previousSearchJson == undefined || previousSearchJson == "undefined") {
        }



        var result = 1;
//    
//    if($('#financailYearSearch').val() == null || $('#financailYearSearch').val() == ""||$('#budgetTypeSearch').val() == null || $('#budgetTypeSearch').val() == ""
//            ||$('#fundTypeSearch').val() == null || $('#fundTypeSearch').val() == ""||$('#status').val() == null || $('#status').val() == ""){
//         displayLargeErrorMessagesInCenterInRed("messageDiv", "Please fill all mandatory fields");
//         result = 0;
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
        var financialYear = $('#financailYearSearch').val();
        var budgetType = $('#budgetTypeSearch').val();
        var fundType = $('#fundTypeSearch').val();
        var status = $('#status').val();
        var sector = $('#sectorSearch').val();
        if (result != 0) {
            var searchObj = {
                financialYear: financialYear,
                fundType: fundType,
                sector: sector,
                budgetType: budgetType,
                sanctionIncomeStatus: status,
                ddo: getUserSessionElement(seDDOId)
            };
            $("#maritalListPanel").remove("");
            $("#tableHeaderTable").text("").append("<div id='maritalListPanelSearch' class='panel panel-blue' />");
            $("#maritalListPanelSearch").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
            $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
            $("#firstHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List Of Ledgers</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
            $("#maritalListPanelSearch").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
            $("#collapseFin1").click(function() {
                $("#collapseOne3").toggle();
                if ($("#collapseFin1 span").hasClass("glyphicon-minus-sign")) {
                    $("#collapseFin1").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
                } else {
                    $("#collapseFin1").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
                }
            });
            $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
            $("#listpanelMainBody").append("<div id='listpanelRow1' class='row' />");

            $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
            $("#listpanelRow1").text("").append("<div id='messageDiv'></div>");
            $("#listpanelRow").text("").append("<div class='tab-pane' id='viewUser'/>");
            $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
            $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
            $.post(server_base_url + "/budget/transaction/saction/search", {
                searchObj: JSON.stringify(searchObj),
            }).done(function(bdata) {
                bdata = JSON.parse(bdata);
                if (bdata != null) {
                    var universityBudgetStatus = $('#status').val();
                    if (universityBudgetStatus == "Save") {
                        if (bdata.length > 0) {
                            $("#displayBankTable").append("<thead class=''><tr id='TableHeaderTrHeadId'>"
                                    //+ " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                                    + " <th> S.No</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Asked Amount(In Lacs)</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Approved Amount(In Lacs)</th>");
                            if (checkUserPrivelege(pvUpdateIncomeBudgetUniversity)) {
                                $("#TableHeaderTrHeadId").append("<th style='min-width:1%;width:80px;'><i ></i>Edit</th>");
                            }
                            if (checkUserPrivelege(pvDeleteIncomeBudgetUniversity)) {
                                $("#TableHeaderTrHeadId").append("<th style='min-width:1%;width:80px;'><i ></i>Delete</th>");
                            }
//                                    + "</tr></thead>");
                            var sno = 0;
                            $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                            for (var i = bdata.length - 1; i >= 0; i--) {
                                sno++;
                                var objJson = JSON.stringify(bdata[i]);
                                $("#displayBankTableBody").append("<tr id='" + sno + "' style='cursor:pointer;' >"
                                        //      + "<td><input type='checkbox' value='" + bdata[i]._id.$oid + "' name='case'></td>"
                                        + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].ledger + "<input type='hidden' value='" + bdata[i]._id.$oid + "'></td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                        + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].askedForAmount + "' readonly></td>"
                                        + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + bdata[i].approvedAmount + "' readonly></td>");
                                if (checkUserPrivelege(pvUpdateIncomeBudgetUniversity)) {
                                    $("#" + sno).append("<td style='cursor:pointer;' onclick=updateSactionUniversityBudgetExpense('" + encodeURI(objJson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                                }
                                if (checkUserPrivelege(pvDeleteIncomeBudgetUniversity)) {
                                    $("#" + sno).append("<td onclick=deletePopUp('deleteIncomeSanctionBudget','nothingToDo','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
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
                                $("#listpanelRow").append("<div class='row' id='saveSubmitResetPrintRow'/>");
                                $("#saveSubmitResetPrintRow").append("<div class='col-sm-3'></div>");
                                $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");
                                $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-success mr5 btn-flat'  onclick='UpdateIncomeUniversityBudgetDetailsInSearch()'>Submit</button></div>");
                                $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-warning mr5 btn-flat' onclick=ResetIncomeUniversitysBudgetmaster()>Reset</button></div>");
                                $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");
                            }

                            $("#displayBankTable").DataTable({
                                paging: true
                            });
                        } else {
                            displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
                        }
                    } else if (universityBudgetStatus == "Submit") {
                        if (bdata.length > 0) {
                            $("#displayBankTable").append("<thead class=''><tr>"
                                    + " <th> S.No</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Asked Amount(In Lacs)</th>"
                                    + "<th style='min-width:30%;width:auto;'><i ></i>Approved Amount(In Lacs)</th>"
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
                                        + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].askedForAmount + "' readonly></td>"
                                        + "<td style='cursor:pointer;'><input class='approveamounts' type='text' onkeypress='return validate(event)' value='" + bdata[i].approvedAmount + "' readonly></td></tr>");
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

//------------------------------------End  Validation For Saction Income University-----

//------------------------------------- Delete Function Start-------------------------------

function deleteIncomeSanctionBudget(Id) {
    if (checkUserPrivelege(pvDeleteIncomeBudgetUniversity)) {
        $.post(server_base_url + "/budget/transaction/sanction/Delete", {
            Id: Id,
            userid: getUserSessionElement("userId")
        }).done(function(data) {
            if (data == fail) {
                displaySmallErrorMessages("authonticationMsgId", "Invalid username / password");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessages("authonticationMsgId", unauthorizedMessage);
            } else if (data == statusException) {
                displaySmallErrorMessages("authonticationMsgId", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessages("authonticationMsgId", "No User available");
            } else {
                $(".smallErrorMsg").text("");
                displaySuccessMessages("ErrorDiv", deleteMessage, "");
                setTimeout(function() {
                    $("#SearchIncomeBudgetButton").click();
                }, 3000);
            }
        });
    }
}

//------------------------------------- Delete Function End-------------------------------

//-------------------------------------------- Start Display Update Table ---------------------------------

function updateSactionUniversityBudgetExpense(obj) {
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
            + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Asked Amount(In Lacs)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Approved for Amount(In Lacs)</th>"
            + "</tr></thead>");
    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
    $("#displayBankTableBody").text("").append("<tr id='" + obj.status + "' style='cursor:pointer;' >"
            + "<td>1<input type='hidden' value='" + encodeURI(JSON.stringify(obj)) + "'></td>"
            + "<td style='cursor:pointer;'>" + obj.ledger + "<input type='hidden' value='" + obj._id.$oid + "'></td>"
            + "<td style='cursor:pointer;'>" + obj.budgetHeadName + "</td>"
            + "<td style='cursor:pointer;'><input type='text' value='" + obj.askedForAmount + "' readonly></td>"
            + "<td style='cursor:pointer;'><input type='text' class='approveamount' onkeypress='return validate(event)' value='" + obj.approvedAmount + "' ></td>");
    $("#listpanelRow").append("<div class='row' id='saveSubmitResetPrintRow'/>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-3'></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-success mr5 btn-flat'  onclick='UpdateIncomeUniversityBudgetRow()'>Update</button></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-warning mr5 btn-flat' onclick=goBackToIncomeSearchFunction() >Back</button></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");
}

//-------------------------------------------- End Display Update Table ---------------------------------


//-------------------------------------------- Back Button Start-----------------------------

function goBackToIncomeSearchFunction() {
    $("#SearchIncomeBudgetButton").click();
}
//-------------------------------------------- Back Button End-----------------------------

//---------------------------------------update Function Start-------------------------------

function UpdateIncomeUniversityBudgetRow() {
    if (checkUserPrivelege(pvUpdateIncomeBudgetUniversity)) {
        var id;
        var approvedForMoney;
        $('#displayBankTable tbody tr ').each(function(i) {
            var row = $(this).closest('tr');
            var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
            id = budgetIncomeDetails._id.$oid;
            approvedForMoney = row.find('td:eq(4) input').val();
            $(this).closest('tr').remove();
        });
        $.post(server_base_url + "/budget/transaction/sanction/Update", {
            Id: id,
            approvedAmount: approvedForMoney,
            userid: getUserSessionElement("userId")
        }).done(function(data) {
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
                displaySuccessMessages("messageDiv", updateMessage, "");
                $("#SearchIncomeBudgetButton").click();
                setTimeout(function() {
                }, 3000);
                displaySuccessMessages("messageDiv", updateSuccessMessage, "");
                clearSuccessMessageAfterTwoSecond("messageDiv");
            }
        });
    }
}

//---------------------------------------update Function End-------------------------------

function  editThisIncomeIncomeBudgetRow(i) {
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

function nothingToDo() {

}

//------------------------------All Reset Function Start ----------------------------------
function wipeAllIncomeUniversitysBudgetCodeData() {
    $("#fundType").val("").change();
    $(".smallErrorMsg").text("");
    $("#sector").val("").change();
    $("#budgethead").val("").change();
    $("#budgetType").val("").change();
    $("#universityBudgetDate").val("");
}
function resettextboxSactionAmount() {
    $(".smallErrorMsg").text("");
    $('.sactionamount').val('');
}
function ResetIncomeSearchBudgetSanctionAtUniversity() {
    $("#budgetTypeSearch").val("").change();
    $(".smallErrorMsg").text("");
    $("#status").val("").change();
    $("#sectorSearch").val("").change();
    $("#fundTypeSearch").val("").change();
}

function ResetIncomeUniversitysBudgetmaster() {
    $('input:checkbox').attr('checked', false);
}

//------------------------------All Reset Function End----------------------------------