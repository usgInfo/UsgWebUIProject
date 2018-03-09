/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function budgetReAppropriationReport(divId) {
    if (checkUserPrivelege(pvViewBudgetReAppropriation)) {
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> >> <a href="javascript:void(0)" data-toggle="tab" onclick="budgetTransactionMenuTabs()">Budget Transactions</a> >> <a href="javascript:void(0)" data-toggle="tab" onclick="budgetReAppropriation()">Budget Re-Appropriation Report</a>');

        $("#" + divId).text("").append('<div id="budgetReAppropriationDivId"></div>');
        $("#budgetReAppropriationDivId").text("").append('<div id="budgetReAppropriationTabMenu" />');

        $("#budgetReAppropriationTabMenu").append('<div id="budgetReAppropriationMainMenu" class="row" />');
        $("#budgetReAppropriationTabMenu").append('<div id="budgetReAppropriationListMainMenu" class="row" />');
        $("#budgetReAppropriationTabMenu").append('<div id="reAppropriationTable" class="row" />');

        $("#budgetReAppropriationMainMenu").append('<div id="budgetReAppropriationMainPanel" class="panel panel-blue" />');
        $("#budgetReAppropriationMainPanel").append('<div id="budgetReAppropriationMainHeading" class="panel-heading" />');
        $("#budgetReAppropriationMainHeading").append('<div class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>Budget Re-Appropriation Report</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colDDOHeadCodeMappingId"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#budgetReAppropriationMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colDDOHeadCodeMappingId").click(function () {
            $("#collapseOne1").toggle();
            if ($("#colDDOHeadCodeMappingId span").hasClass("glyphicon-minus-sign")) {
                $("#colDDOHeadCodeMappingId").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colDDOHeadCodeMappingId").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });



        $("#collapseOne1").append('<div id="budgetReAppropriationMainBody" class = "panel-body pan" />');
        $("#budgetReAppropriationMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#budgetReAppropriationMainBody").append('<center><span id="budgetReAppropriationMessageDiv"></span></center>');
        $("#budgetReAppropriationMainBody").append('<div id="budgetReAppropriationBodyDiv" class="form-body pal" />');

        $("#budgetReAppropriationBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ddo">from DDO <span class="require">*</span></label><select class="form-control" name="ddo" id="ddo"></select><span id="ddoErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="fundType">Location <span class="require">*</span></label><select class="form-control" name="location" id="location"></select><span id="locationErr" class="text-danger"></span></div></div>');
        $("#ddo").attr("onchange", "getLocationBasedonDDOIncome()");
        $("#budgetReAppropriationBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="financialYear">Financial Year <span class="require">*</span></label><select class="form-control" name="financialYear" id="financialYear"></select><span id="financialYearErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="fundType">Fund Type <span class="require">*</span></label><select class="form-control" name="fundType" id="fundType"></select><span id="fundTypeErr" class="text-danger"></span></div></div>');

        $("#budgetReAppropriationBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="sector">Sector <span class="require">*</span></label><select class="form-control" name="sector" id="sector"></select><span id="sectorErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="budgetHead">Budget Head <span class="require"></span></label><select class="form-control" name="budgetHead" id="budgetHead"></select><span id="budgetHeadErr" class="text-danger"></span></div></div>');
        $("#budgetReAppropriationBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="budgetType">Budget Type <span class="require">*</span></label><select class="form-control" name="budgetType" id="budgetType"></select><span id="budgetTypeErr" class="text-danger"></span></div></div>');
        $("#budgetReAppropriationBodyDiv").append("<div class='form-group col-lg-12' id='budgetButton'><center><button id='showBudgetHead' onclick='validateBudgetReAppropriationRepo()' class='btn btn-success'>Show Budget Heads</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=budgetReAppropriationReport() class='btn btn-warning' id='resetButton'>Reset</button></center></div>");
        var finyear = getFincialYearForAllReports();
        //ddoList();
        getLoggedInDDOLocationInDropDown("ddo", "location");
        getFinYear("financialYear", finyear);
        sectorList();
        fundTypeList();
        budgetType();
        $("#sector").attr("onchange", " getBudgetHeads('budgetHead')");
        $("#fundType").attr("onchange", "clearSector()");
    }
}
function validateBudgetReAppropriationRepo() {
    var result = 1;
    $('#ddoErr').text("").val("");
    $("#financialYearErr").text("").val("");
    $("#fundTypeErr").text("").val("");
    $("#sectorErr").text("").val("");
    $("#budgetHeadErr").text("").val("");
    $("#budgetTypeErr").text("").val("");
    var ddo = $("#ddo").val();
    var finacialYear = $("#financialYear").val();
    var fundType = $("#fundType").val();
    var sector = $("#sector").val();
    var budgetType = $("#budgetType").val();
    var budgetHead = $("#budgetHead").val();
    var location = $("#location").val();

    //alert(ddo+finacialYear+fundType+sector+budgetType);

    if (fundType == "" || fundType == null || fundType == "0") {
        $("#fundType").focus();
        //alert("---");
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("fundTypeErr", "Please Select Fund Type");
        result = 0;
    }
    if (sector == "" || sector == null || sector == "0") {
        $("#sector").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("sectorErr", "Please Select Sector");
        result = 0;
    }
    if (budgetType == "" || budgetType == null || budgetType == "0") {
        $("#budgetType").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("budgetTypeErr", "Please Select Budget Type");
        result = 0;
    }
//    if (budgetHead == "" || budgetHead == null || budgetHead == "0") {
//        $("#budgetHead").focus();
//        addSomeClass("budgetIncomeFieldDiv", "has-error");
//        displaySmallErrorMessages("budgetHeadErr", "Please Select Budget Head");
//        result = 0;
//    }

    if (result != 0) 
    {
        viewBudgetRepropriationReport();
    }
}
function viewBudgetRepropriationReport()
{
      var financialYear = $("#financialYear").val();
        var fundType = $("#fundType").val();
        var sector = $("#sector").val();
        var location = $("#location").val();
        var budgetHead = $("#budgetHead").val();
        var budgetType = $("#budgetType").val();
        var ddo = $("#ddo").val();
         var fromyear = getFincialYearForAllReports();
        var toyear = parseInt(fromyear) + 1;
         var finyear = fromyear + "-" + toyear;
        var budgetReport = {
            finYear: financialYear,
            fundtype: fundType,
            sector: sector,
            ddo: ddo,
            budgetType: budgetType,
            budgetHead: budgetHead,
            location: location
        };
       $("#iframe").remove();
        $("#dashboardBodyMainDiv").append("<iframe id='iframe' "
                + "name='Budget Report' title='Budget Report' src=" +
                server_base_url + "BudgetReapropriationReport?budgetsearchDetails=" + encodeURI(
                        JSON.stringify(budgetReport)) +'&finYear=' + encodeURI(finyear) + " \n\
                    height='500px' width='100%'></iframe>");
}