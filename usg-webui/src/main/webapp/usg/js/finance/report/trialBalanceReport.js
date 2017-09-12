/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var getLocationBasedOnDdo = "GetLocationBasedOnDdo";

function trialBalanceReportPage(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" \n\
    data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > \n\
    <a href="javascript:void(0)" data-toggle="tab" onclick="financeReportMenuTabs()">\n\
    Finance Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="trialBalanceReportPage\n\
    (dashboardBodyMainDiv)">Trial Balance (Ledgerwise)</a>');
    scrolupfunction();
    $("#" + divId).text("").append("<div id='trialBalanceReportMainDivId' />");
    $("#trialBalanceReportMainDivId").append("<div id='trialBalanceReportFilter' class='row'/>");
    $("#trialBalanceReportFilter").append("<div id='tableHeader'/>");
    if (checkUserPrivelege(pvViewTrialBalanceLedgerwiseReport)) {
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");

    $("#tableHeader1").append("<class='panel-title' a style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Trial Balance (Ledger Wise)</center>");
    $("#tableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");

    addToggleToId("colMaritial", "collapseOne2");

    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    }

    var dateArray = getCurrentFinancialYearDateArray();

    $("#panelRow").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + dateArray[0] + "~" + dateArray[1] + "</strong></span>");

    //start of ddo & location
    $("#panelRow").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fromDate">DDO <span class="require">*</span>\n\
    </label><select class="form-control" name="ddo" id="ddo" placeholder="----Select DDO----">\n\
    </select><span id="ddoErr" class="text-danger"></span></div><div class="form-group col-lg-6"><label for="location">Location <span class="require">*</span></label>\n\
    <select class="form-control" name="location" id="location" placeholder="----Select Location----">\n\
    </select><span id="locationErr" class="text-danger"></span></div></div>');
    //end of ddo & location

    //start of fundtype & budget head
    $("#panelRow").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fundType">Fund Type \n\
    </label><select class="form-control" name="fundType" id="fundType" placeholder="----Select Fund Type----">\n\
    </select><span id="fundTypeErr" class="text-danger"></span></div><div class="form-group col-lg-6"><label for="budgetHead">Budget Head </label>\n\
    <select class="form-control" name="budgetHead" id="budgetHead" placeholder="----Select Budget Head----">\n\
    </select><span id="budgetHeadErr" class="text-danger"></span></div></div>');
    //end of fundtype & budget head

    //start of as on date & suppress zero
    $("#panelRow").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="asOnDate">As On Date \n\
    <span class="require">*</span></label><input type="text" class="form-control" name="asOnDate" id="asOnDate" placeholder="DD/MM/YYYY"/>\n\
    <span id="asOnDateErr" class="text-danger"></span></div><div class="form-group col-lg-6"><label for="suppressZero">Suppress Zero </label>\n\
    &nbsp&nbsp&nbsp&nbsp<input type="checkbox" name="suppressZero" id="suppressZero" selected="false"/>\n\
    <span id="suppressZeroErr" class="text-danger"></span></div></div>');

    $("#asOnDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd/mm/yy",
        startDate: dateArray[0],
        endDate: dateArray[1],
    });

    //end of as on date & suppress zero

    //Start of view & reset
    $("#panelMainBody").append("<div id='viewRow1' class='row' />");
    $("#viewRow1").append("<div id='viewGroup1' class='form-group' />");
    $("#viewGroup1").append("<center><button type='button' \n\
    style='margin-left:10px' value='View' class='btn btn-success mr5' onclick='queryTrialBalanceTable()'>\n\
    VIEW</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' \n\
    class='btn btn-warning mr5' name='reset' value='reset' onclick=resetAllFields('collapseOne2')>RESET</button></center>");
    //End of view & reset

    //start of populate ddo & location
    //viewReDddoListForList("", "ddo");
//    $("#ddo").on("change", {selected: $("#ddo option:selected").text()}, function (event) {
//
//        getLocationBasedOnDDO();
//
//    });
    getLoggedInDDOLocationInDropDown("ddo", "location");
    //end of populate ddo & location

    //start of populate fund type
    fetchAllfundTypeValues("", "fundType", "Fund Type", "");
    //end of populate fund type

    fetchBudgetHeadListDDForTrialBalance("budgetHead");

}

function resetAllFields(id) {

    wipeAllDropDownsInDiv(id);
    wipeAllTextBoxesInDiv(id);
}

function queryTrialBalanceTable() {

    var ddo = $("#ddo option:selected").val();
    var location = $("#location option:selected").val();
    var asOnDateStr = $("#asOnDate").val();

    if (checkMandatoryFieldsAreEnteredForTextBox(["#ddo", "#location", "#asOnDate"]) === 0) {
        return;

    }

    var dateArray = getCurrentFinancialYearDateArray();
    var fromDateStr;
    var toDateStr = asOnDateStr;
    if (dateArray.length > 0) {
        fromDateStr = dateArray[0];
        var toDateSplitArray = dateArray[1].split("/");
        var toDate = new Date(toDateSplitArray[2], toDateSplitArray[1] - 1, toDateSplitArray[0]);
        var asOnDateSplitArray = asOnDateStr.split("/");
        var asOnDate = new Date(asOnDateSplitArray[2], asOnDateSplitArray[1] - 1, asOnDateSplitArray[0]);
        if (asOnDate > toDate) {
            toDateStr = dateArray[1];

        }

        var fromDateSplitArray = fromDateStr.split("/");
        var fromDate = new Date(fromDateSplitArray[2], fromDateSplitArray[1] - 1, fromDateSplitArray[0]);
        if (asOnDate < fromDate) {
            toDateStr = fromDateStr;
        }

    }

    var fundType = "";

    if ($("#fundType").prop('selectedIndex') > 0) {
        fundType = $("#fundType option:selected").text();
    }

    var budgetHead = "";

    if ($("#budgetHead").prop('selectedIndex') > 0) {
        budgetHead = $("#budgetHead option:selected").text();
    }

    var trialBalanceCriteria = {
        DDO: ddo,
        location: location,
        fundType: fundType,
        budgetHead: budgetHead,
        createDate: asOnDate
    };
    var suppressZero = $("#suppressZero").prop('checked');
    $("#iframe").remove();
    $("#dashboardBodyMainDiv").append("<iframe id='iframe' "
            + "name='Trial Balance Ledgerwise' title='Trial Balance Ledgerwise' src=" +
            server_base_url + "FetchTrialBalanceRecords?trialBalanceCriteria=" + encodeURI(
                    JSON.stringify(trialBalanceCriteria) + "&suppressZero=" +
                    suppressZero + "&fromDate=" + fromDateStr + "&toDate=" + toDateStr) +
            " height='500px' width='100%'></iframe>");

}

function fetchAllfundTypeValues(name, DivId, message, xyz) {

    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function (pdata) {
        if (pdata.length > 0) {
            $("#" + DivId).append("<option value =''>---- Select " + message + " ----</option>");
            for (var i = 0; i < pdata.length; i++) {
                if (name === pdata[i].description) {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                } else {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                }
            }
        }

    });
}

function getCurrentFinancialYearDateArray() {

    var financialDate = getUserSessionElement(seCurrentFinancialYear);
    var dateArray = financialDate.split("~");

    return dateArray;
}