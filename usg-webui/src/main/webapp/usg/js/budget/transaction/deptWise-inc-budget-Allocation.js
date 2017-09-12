/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createDeptWiseBudgetIncome() {
    // alert();
//alert(getUserSessionElement(seUserId));
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetTransactionMenuTabs()">Budget Transaction</a></label> >> <label>Income Budget Allocation @ Department</label>');

    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetTypeMainDiv"/>');

    $("#budgetTypeMainDiv").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");
    $("#mainTabMenu").append("<div id='tableHeaderTable' />");
    // if (checkUserPrivelege(pvCreateLocationBudgetAllocation)) {
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Income Budget Allocation @ Department</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
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
    $("#panelMainBody").append("<div id='locationWiseBudgetIncomeDivRow' class='row' />");


    $("#locationWiseBudgetIncomeDivRow").append("<center><span id='pregsuccessBefore'></span></center>");

    $("#locationWiseBudgetIncomeDivRow").append("<div id='locationWiseBudgetIncomeFieldGroup' class='form-group' />");
    getTwoColumnInRow("locationWiseBudgetIncomeFieldGroup", "Row1", "Row1Col1", "Row1Col2");
    //  $("#Row1Col1").append(getLabel("From DDO", "required") + "" + getDropDownWithOnChange("ddo", "onChange='getLocationOnDDOSelection()'"));
    $("#Row1Col1").append(getLabel("From DDO", "required") + "" + getDropDownWithOnChange("ddo"));
    $("#Row1Col2").append(getLabel("From Location", "") + "" + getDropDown("location"));
//    $("#ddo").attr("onchange","getDdoLocation()");
    //
    $("#panelMainBody").append("<div id='locationWiseBudgetIncomeDivRow1' class='row' />");
    $("#locationWiseBudgetIncomeDivRow1").append("<div id='locationWiseBudgetIncomeFieldGroup1' class='form-group' />");
    getTwoColumnInRow("locationWiseBudgetIncomeFieldGroup1", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel("Financial Year", "required") + "" + getDropDown("finyearId"));
    $("#Row2Col2").append(getLabel("Budget Type", "required") + "" + getDropDown("budgetType"));


    $("#panelMainBody").append("<div id='locationWiseBudgetIncomeDivRow2' class='row' />");
    $("#locationWiseBudgetIncomeDivRow2").append("<div id='locationWiseBudgetIncomeFieldGroup2' class='form-group' />");
    getTwoColumnInRow("locationWiseBudgetIncomeFieldGroup2", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));
    $("#Row3Col2").append(getLabel("Sector", "required") + "" + getDropDown("sector"));


    $("#panelMainBody").append("<div id='locationWiseBudgetIncomeDivRow5' class='row' />");
    $("#locationWiseBudgetIncomeDivRow5").append("<div id='locationWiseBudgetIncomeFieldGroup5' class='form-group' />");
    getTwoColumnInRow("locationWiseBudgetIncomeFieldGroup5", "Row5", "Row5Col1", "Row5Col2");
    $("#Row5Col1").append(getLabel("BudgetHead", "") + "" + getDropDown("budgethead"));
    $("#Row5Col2").append(getLabel("Department", "required") + "" + getDropDown("department"));
    $("#sector").attr("onchange", " getBudgetHeads('budgethead')");
    $("#fundType").attr("onchange", "clearSector()");
    $("#incomeBudgetGrantDivMainBody").append("<div id='incomeBudgetGrantDivRow3' class='row' />");
    $("#incomeBudgetGrantDivRow3").append("<div id='incomeBudgetGrantFieldGroup3' class='form-group' />");
    $("#panelMainBody").append("<div id='incomeBudgetGrantDivRow4' class='row' />");
    $("#incomeBudgetGrantDivRow4").append("<div  class='col-xs-12' /><center><button type='button'  value='Save' class='btn btn-success'  onclick='showBudgetHeadsdeptWise()'>Show Ledgers</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='createDeptWiseBudgetIncome()' class='btn btn-warning mr5 ' name='reset' value='reset'>Reset</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='searchforDeptWiseBudgetIncome()' class='btn btn-warning mr5' name='reset' value='reset'>Search</button></div>");
    getLoggedInDDOLocationInDropDown("ddo", "location");
    getBudgetfinancialyear();

    viewOption("budget/master/BudgetType/View", "", "description", "budgetType", "Budget Type");
    viewOption("budget/master/FundType/View", "", "description", "fundType", "Fund Type");
    fetchAlSectors("", "sector", "Sector");
    fetchAllDeptCreteIncome("", "department", "Department");
}
function getDepartment(id)
{
    var ddoId = getUserSessionElement(seDDOId);
    var ddoName = getUserSessionElement(seDDOName);
    var locationId = getUserSessionElement(seLocationId);
    $.get(server_base_url + "budget/budgetTrans/GetDepartmentValues", {
        ddo: ddoId,
        location: locationId,
        userid: getUserSessionElement(seUserId)
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#" + id).text("").append("<option value = '' selected>---- Select Department ----</option>");
            var sss = pdata.departmentList;
            for (var k = 0; k < sss.length; k++) {

                $("#" + id).append("<option  value='" + sss[k].department + "'>" + sss[k].departmentName + "</option>");
            }

        } else
        {
            $("#" + id).text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}

function showBudgetHeadsdeptWise()
{

    $("#finyearIder").text("");
    $("#budgetTypeErr").text("");
    $("#ddoErr").text("");
    $("#fundTypeErr").text("");
    $("#sectorErr").text("");

    var result = 1;
    var fundtype = $('#fundType').val();
    var sectorid = $('#sector').val();
    var budgethead = $('#budgethead').val();
    var budgetype = $('#budgetType').val();
    var location = $('#location').val();
    var department = $('#department').val();

    //alert(ddo+"---ddo--"+"---finyear--"+finyear+"---budgetype---"+budgetype+"----fundtype---"+fundtype+"---sectorid---"+sectorid);
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
        $("#department").focus();
        displaySmallErrorMessages("departmentErr", "Please SelectDepartment.");
        result = 0;
    }
    if (result != 0) {
        DeptWisebudgetHeadsList();

    }
}
function DeptWisebudgetHeadsList()
{
    // if (checkUserPrivelege(pvCreateLocationBudgetAllocation) || checkUserPrivelege(pvViewLocationBudgetAllocation)) {
    var ddo = $("#ddo").val();
    var financialYear = $("#finyearId").val();
    var location = $("#location").val();
    var fundType = $("#fundType").val();
    var sector = $("#sector").val();
    var budgetType = $("#budgetType").val();
    var budgethead = $("#budgethead").val();
    var department = $("#department").val();

    $("#tableHeader").append("<div id='listPanel' />");
    $("#listPanel").text("").append("<div class='panel panel-blue ' id='maritalListPanel'/>");
    $("#maritalListPanel").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<center>List of Ledgers</center>");
    $("#maritalListPanel").append("<div id='collapseOne4' class='panel-collapse collapse in' />");
    $("#collapseOne4").append("<div id='listpanelMainBodyDiv' class = 'panel-body' style='padding-bottom: 0px;' />");
    $("#listpanelMainBodyDiv").append("<div id='approvedAmountDiv' class='row' />");
    $("#approvedAmountDiv").append("<div id='approvedAmountDivFieldGroup' class='form-group' />");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='viewList'/>");
    $("#viewList").append("<div class='table-responsive' id='viewSectionTableDiv' />");
    $("#viewSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
    $("#displayBankTable").append("<thead class=''><tr>"
            + " <th style='min-width:40%;width:auto;'><i ></i> S.No</th>"
            + "<th style='min-width:40%;width:auto;'><i ></i>Ledger</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Requested Amount(In Lacs)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Approved Amount(In Lacs)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Sanction Amount(In Lacs)</th>"
            + "</tr></thead>");

    var searchObj = {
        ddo: ddo,
        financialYear: financialYear,
        fundType: fundType,
        sector: sector,
        budgetType: budgetType,
        budgetHead: budgethead,
        location: location,
        department: department
    };
    $.get(server_base_url + "Budget/IncomeBudget/SearchLedgersbasedOnHeads", {
        searchObj: JSON.stringify(searchObj)
    }).done(function(bdata) {

        bdata = JSON.parse(bdata);
        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", noDataAvailable);
        } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", unauthorizedMessage);
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", noDataAvailable);
        } else {
            if (bdata != null) {
                var amount = 0;
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                    for (var i = 0; i < bdata.length; i++) {
                        sno++;
                        // alert("----bdata[i].financalYear----------"+bdata[i].financalYear);
                        var objJson = JSON.stringify(bdata[i]);
                        $("#displayBankTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].ledger + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].requestedAmount + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].sanctionedAmount + "</td>"
                                + "<td style='cursor:pointer;'><input type='text' name='approveAmout' id='approveAmout" + i + "' value='" + amount + "' onchange=validateDeptSanctnAmount('" + bdata[i].sanctionedAmount + "','" + i + "') onkeypress='return validateNumber(event)' ><div id='error" + i + "'></div></td></tr>");

                    }
                    $("#displayBankTable").DataTable({
                        paging: true
                    });

                    $("#viewList").append("<div id='panelRow8' class='row' />");
                    $("#panelRow8").append("<div  class='col-xs-3' />\n\<div class='col-xs-2'>\n\ <button type='button'  value='Preview' class='btn btn-success  pull-right mr5'onclick='validateDeptBeforeSave()'>Save</button></div><div class='col-xs-2'><button type='button' onclick=resetAllValuesInSpecifiedDiv('listPanel') class='btn btn-warning pull-left mr5' name='reset' value='reset'>Reset</button></div> \n\</div>");

                }
                else {
                    displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", noDataAvailable);
                }
            }
        }
    });
    //}
}
function  validateDeptSanctnAmount(sanctionedAmount, i)
{
    //alert();
    $("#error" + i).text("");
    var SanValue = $("#approveAmout" + i).val();
    //alert(SanValue);
    //alert(sanctionedAmount);
    if (parseInt(SanValue) > parseInt(sanctionedAmount))
    {
        displaySmallErrorMessages("error" + i, "Sanction amount must be less than approved amount.");
    }


}
function validateDeptBeforeSave()
{

    var result = "true";
    var rows = $("#displayBankTable").dataTable().fnGetNodes();
    for (var i = 0; i < rows.length; i++)
    {
        var row = $(rows[i]);
        $("#error" + i).text("");
        var SanValue = $("#approveAmout" + i).val();
        var sanctionedAmount = row.find('td:eq(3) ').text();
        if (SanValue == "")
        {
            displaySmallErrorMessages("error" + i, "Please Enter Sanction amount .");
            result = "false";
        }
        if (SanValue != "")
        {

            if (parseInt(SanValue) > parseInt(sanctionedAmount))
            {

                result = "false";
                displaySmallErrorMessages("error" + i, "Sanction amount must be less than approved amount.");
            }
        }
        //  $(this).closest('tr').remove();  
    }

    if (result == "true") {
        //alert("success");
        saveDeptBudgetApprove();

    }
}
function saveDeptBudgetApprove()
{
    // if (checkUserPrivelege(pvCreateLocationBudgetAllocation)) {
    var result = 1;
    var saveThisConsolidateDetails = [];
//    $('#displayBankTable tbody tr ').each(function(i) {
//        var row = $(this).closest('tr');
    var rows = $("#displayBankTable").dataTable().fnGetNodes();
    for (var i = 0; i < rows.length; i++)
    {
        var row = $(rows[i]);
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
            headDescription: budgetIncomeDetails.headDescription,
            location: budgetIncomeDetails.location,
            ledger: budgetIncomeDetails.ledger,
            ledgerId: budgetIncomeDetails.ledgerId,
            prievioueBudget: budgetIncomeDetails.prievioueBudget,
            consolidatedIncomeId: budgetIncomeDetails.consolidatedIncomeId,
            sanctionAmount: row.find('td:eq(4) input').val(),
            budgetIncomeSanctionId: budgetIncomeDetails._id.$oid,
            approvedAmount: budgetIncomeDetails.sanctionedAmount,
            department: $("#department").val()
        });
        $(this).closest('tr').remove();
    }
    if (saveThisConsolidateDetails == null || saveThisConsolidateDetails == "") {
        result = 0;
    }
    if (result != 0)
    {
        var id = getUserSessionElement("userId");
        $.post(server_base_url + "Budget/budgetTrans/SaveDeptWiseIncBudgetAlloc", {
            objJson: JSON.stringify(saveThisConsolidateDetails),
            userid: id
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
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                scrolupfunction();
                setTimeout(function() {
                    createDeptWiseBudgetIncome();
                }, 3000);
            }
        });
    } else
    {
        displayErrorMessages("pregsuccessBefore", selectAtleastoneRecord, "");
        setTimeout(function() {
            $("#ErrorDiv").text("");
        }, 3000);
    }
    //}
}
function validateIncomeDeptBudgetSearch() {
    if (checkUserPrivelege(pvCreateLocationBudgetAllocation) || checkUserPrivelege(pvViewLocationBudgetAllocation)) {
        var result = 1;


        if ($('#searchddo').val() == null || $('#searchddo').val() == "" || $('#searchlocation').val() == null || $('#searchlocation').val() == "" ||
                $('#fundTypeSearch').val() == null || $('#fundTypeSearch').val() == "" || $('#budgetTypeSearch').val() == null || $('#budgetTypeSearch').val() == "" ||
                $('#sectorSearch').val() == null || $('#sectorSearch').val() == "") {
            //errMessageDiv  
            displayLargeErrorMessagesInCenterInRed("errMessageDiv1", "Please fill all mandatory fields");
            result = 0;
        }
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
        if ($('#departmentSearch').val() == null || $('#departmentSearch').val() == "") {
            $("#departmentSearch").focus();
            displaySmallErrorMessages("departmentSearchErr", "Please Select Department.");
            result = 0;
        }
        if ($('#sectorSearch').val() == null || $('#sectorSearch').val() == "") {
            $("#sectorSearch").focus();
            displaySmallErrorMessages("sectorSearchErr", "Please Select Sector.");
            result = 0;
        }
//        if ($('#budgetheadSearch').val() == null || $('#budgetheadSearch').val() == "") {
//            $("#budgetheadSearch").focus();
//            displaySmallErrorMessages("budgetheadSearchErr", "Please Select Budget Head.");
//            result = 0;
//        }
        var financialYear = $('#financailYearSearch').val();
        var budgetType = $('#budgetTypeSearch').val();
        var fundType = $('#fundTypeSearch').val();
        var location = $('#searchlocation').val();
        var sector = $('#sectorSearch').val();
        var ddo = $('#searchddo').val();
        var budgethead = $('#budgetheadSearch').val();
        var departmentSearch = $('#departmentSearch').val();

        if (result != 0) {
            var searchObj = {
                financialYear: financialYear,
                fundType: fundType,
                sector: sector,
                budgetType: budgetType,
                ddo: ddo,
                location: location,
                budgetHead: budgethead,
                department: departmentSearch
            };
            $("#maritalListPanel").remove("");
            $("#tableHeaderTable").text("").append("<div id='maritalListPanelSearch' class='panel panel-blue' />");
            $("#maritalListPanelSearch").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
            $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
            $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>List Of Ledgers</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin11'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
            $("#maritalListPanelSearch").append("<div id='collapseOne31' class='panel-collapse collapse in' />");
            $("#collapseFin11").click(function() {
                $("#collapseOne31").toggle();
                if ($("#collapseFin11 span").hasClass("glyphicon-minus-sign")) {
                    $("#collapseFin11").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
                } else {
                    $("#collapseFin11").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
                }
            });
            $("#collapseOne31").append("<div id='listpanelMainBody' class = 'panel-body' />");
            $("#listpanelMainBody").append("<div id='listpanelRow1' class='row' />");
            $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
            $("#listpanelRow1").text("").append("<div id='messageDiv'></div>");
            $("#listpanelRow").text("").append("<div class='tab-pane' id='viewUser'/>");
            $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
            $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
            $.post(server_base_url + "/Budget/BudgetTransaction/DeptWiseBudgetIncome/Search", {
                searchObj: JSON.stringify(searchObj)
            }).done(function(bdata) {
                bdata = JSON.parse(bdata);
                if (bdata != null) {
                    if (bdata.length > 0) {
                        $("#displayBankTable").append("<thead class=''><tr>"
                                //    + " <th> Select</th>"
                                + " <th> S.No</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Date</th>"
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
                                    + "<td style='cursor:pointer;'>" + bdata[i].ledger + "<input type='hidden' value='" + bdata[i]._id.$oid + "'></td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].budgetDate + "</td>"
                                    + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].requestedAmount + "' readonly></td>"
                                    + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + bdata[i].sanctionAmount + "' readonly></td>"
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
}
function searchforDeptWiseBudgetIncome() {
    if (checkUserPrivelege(pvCreateLocationBudgetAllocation) || checkUserPrivelege(pvViewLocationBudgetAllocation)) {
        $("#searchPanel").remove("");
        $("#tableHeader").append("<div id='searchPanel' class='panel panel-blue' />");
        $("#searchPanel").text("").append("<div id='searchHeading' class='panel-heading' />");
        $("#searchHeading").append("<h4 id='searcHheaderName' class='panel-title' />");
        $("#searcHheaderName").append("<div class='panel-title'  style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#Searchbody'><center>Search Criteria</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
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

        $("#SearchbodyMainBodypanelRow").append("<div id='errMessageDiv1'  ></div>");

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
        //  getDepartment("departmentSearch");
        $("#SearchbodyMainBodypanelRow").append("<div id='searchbut' class='form-group' />");
        $("#searchbut").append("<label class='col-sm-5 control-label'></label>");
        $("#searchbut").append("<div id='savesearchButton' class='col-sm-7' />");
        $("#savesearchButton").append("<button class='btn btn-success mr5 btn-flat' id='SearchIncomeBudgetButton' onclick='validateIncomeDeptBudgetSearch()'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp");
        $("#savesearchButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='searchforDeptWiseBudgetIncome()'>Reset</button>&nbsp&nbsp&nbsp");
        getLoggedInDDOLocationInDropDown("searchddo", "searchlocation");
        // viewReDddoListForList("", "searchddo");
        getBudgetfinancialyear();
        viewOption("budget/master/BudgetType/View", "", "description", "budgetTypeSearch", "Budget Type");
        viewOption("hrms/common/BudgetHead/View", "", "budgetHead", "budgetheadSearch", "Budget Head");
        viewOption("budget/master/FundType/View", "", "description", "fundTypeSearch", "Fund Type");
        fetchAlSectors("", "sectorSearch", "Sector");
        fetchAllDeptCreteIncome("", "departmentSearch", "Department");
    } else {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", privilageNotExist);
    }
}