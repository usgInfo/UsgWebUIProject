/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function createBudgetReport(divId) {
    if (checkUserPrivelege(pvBudgetReportView)) {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
        $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">\n\
    Budget</a></label> >> <label><a href="javascript:budgetReportTab()">Budget Report</a>\n\
    </label> >><a href="javascript:void(0)" data-toggle="tab" onclick="createBudgetReport(dashboardBodyMainDiv)\n\
    (dashboardBodyMainDiv)"> <label>Budget Report</label></a>');
        scrolupfunction();
        $("#" + divId).text("").append("<div id='budgetReportMainDivId' />");
        $("#budgetReportMainDivId").append("<div id='budgetReportFilter' class='row'/>");
        $("#budgetReportFilter").append("<div id='tableHeader'/>");
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' a style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Budget Report</center>");
        $("#tableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        addToggleToId("colMaritial", "collapseOne2");
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#panelRow").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + getUserSessionElement(seCurrentFinancialYear) + "</strong></span>");
        //start of ddo & location
        $("#panelRow").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fromDate">DDO \n\
    </label><select class="form-control" name="ddo" id="ddo" placeholder="----Select DDO----">\n\
    </select><span id="ddoErr" class="text-danger"></span></div><div class="form-group col-lg-6"><label for="location">Location </label>\n\
    <select class="form-control" name="location" id="location" placeholder="----Select Location----">\n\
    </select><span id="locationErr" class="text-danger"></span></div></div>');
        //end of ddo & location

        //start of financial year & fund type
        $("#panelRow").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="financialYear">Financial Year </label>\n\
    <span class="require">*</span><select class="form-control" name="financialYear" id="financialYear" placeholder="----Select Financial Year----">\n\
    </select><span id="financialYearErr" class="text-danger"></span></div>\n\
    <div class="form-group col-lg-6"><label for="fundType">Fund Type \n\
    </label><span class="require">*</span><select class="form-control" name="fundType" id="fundType" placeholder="----Select Fund Type----">\n\
    </select><span id="fundTypeErr" class="text-danger"></span></div></div>');
        //end of financial year & fund type

        //start of sector & budget type
        $("#panelRow").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="sector">Sector </label><span class="require">*</span>\n\
    <select class="form-control" name="sector" id="sector" placeholder="----Select Sector----">\n\
    </select><span id="sectorErr" class="text-danger"></span></div></div>');
//    <div class="form-group col-lg-6"><label for="budgetType">Budget Type \n\
//    </label><span class="require">*</span><select class="form-control" name="budgetType" id="budgetType" placeholder="----Select Budget Type----">\n\
//    </select><span id="budgetTypeErr" class="text-danger"></span></div></div>');
        //end of sector & budget type

        //start of month
//    $("#panelRow").append('<div class="col-lg-12">\n\
//    <div class="form-group col-lg-6"><label for="month">Month \n\
//    </label><span class="require">*</span><select class="form-control" name="month" id="month" placeholder="----Select Month----">\n\
//    </select><span id="monthErr" class="text-danger"></span></div></div>');
        //end of month

        //Start of view & reset
        $("#panelMainBody").append("<div id='viewRow1' class='row' />");
        $("#viewRow1").append("<div id='viewGroup1' class='form-group' />");
        $("#viewGroup1").append("<center><button type='button' \n\
    style='margin-left:10px' value='View' class='btn btn-success mr5' onclick=validateBudgetReport()>\n\
    VIEW</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' \n\
    class='btn btn-warning mr5' name='reset' value='reset' onclick=wipeAllDropDownsInDiv('collapseOne2')>RESET</button></center>");
        //End of view & reset

        //start of populate ddo & location
//    viewReDddoListForList("", "ddo");
//    $("#ddo").on("change", {selected: $("#ddo option:selected").text()}, function (event) {
//
//        getLocationBasedOnDDO();
//    });
        getLoggedInDDOLocationInDropDown("ddo", "location");
        //end of populate ddo & location

        //start of populate financial year
        fetchAllfinancialYearValues("", "financialYear", "Financial Year");
        //end of populate financial year

        //start of populate fund type
        fetchAllfundTypeValues("", "fundType", "Fund Type", "");
        //end of populate fund type

        //start of populate sector
        fetchAllSectorValues("", "sector", "Sector");
        //end of populate sector

        //start of populate budget type
        fetchAllbudgetTypeValues("", "budgetType", "Budget Type");
        //end of populate budget type

        //start of populate month

        //end of populate month
    }
}
function validateBudgetReport()
{
    $("#pregsuccessBefore").text("");
    var financialYearId = $("#financialYear").val();
    var fundType = $("#fundType").val();
    var sector = $("#sector").val();
    if (preValidation(financialYearId) || preValidation(fundType) || preValidation(sector))
    {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
        return false;
    } else
    {
        loadBudgetReportPdf();
    }

}
function loadBudgetReportPdf() {
    if (checkUserPrivelege(pvBudgetReportView)) {
        var ddo = $("#ddo").val();
        var location = $("#location").val();
        var financialYearId = $("#financialYear").prop('selectedIndex') > 0 ? $("#financialYear").val() : "";
        var fundType = $("#fundType").prop('selectedIndex') > 0 ? $("#fundType").val() : "";
        var sector = $("#sector").prop('selectedIndex') > 0 ? $("#sector").val() : "";
//    var budgetType = $("#budgetType").prop('selectedIndex') > 0 ? $("#budgetType").val() : "";
        var budgetReport = {
            ddo: ddo,
            location: location,
            financialYearId: financialYearId,
            fundType: fundType,
            sector: sector
//        budgetType: budgetType
        };
        $("#iframe").remove();
        $("#dashboardBodyMainDiv").append("<iframe id='iframe' "
                + "name='Budget Report' title='Budget Report' src=" +
                server_base_url + "BudgetAtAGlanceService?budgetExpenseDetails=" + encodeURI(
                        JSON.stringify(budgetReport)) + " \n\
                    height='500px' width='100%'></iframe>");
    }
}

