/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function depositReport(divId)
{
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeReportMenuTabs()">Finance Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="depositReport()">Deposit Report </a>');

    $("#" + divId).text("").append('<div id="depositReportListDivId"></div>');
    $("#depositReportListDivId").text("").append('<div id="depositReportListTabMenu" />');

    $("#depositReportListTabMenu").append('<div id="depositReportListMainMenu" class="row" />');
    $("#depositReportListTabMenu").append('<div id="depositReportListListMainMenu" class="row" />');
    $("#depositReportListTabMenu").append('<div id="PreviewList" class="row" />');

    $("#depositReportListMainMenu").append('<div id="depositReportListMainPanel" class="panel panel-blue" />');
    $("#depositReportListMainPanel").append('<div id="depositReportListMainHeading" class="panel-heading" />');
    $("#depositReportListMainHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne1"><center> Deposit </center></a>');

    $("#depositReportListMainHeading").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    addToggleToId("colMaritial", "collapseOne1");
    $("#depositReportListMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#collapseOne1").append('<div id="depositReportListMainBody" class = "panel-body pan" />');
    $("#depositReportListMainBody").append('<div id="panelRow1" class="row" />');
    $("#depositReportListMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#depositReportListMainBody").append('<center><span id="depositReportListMessageDiv"></span></center>');
    $("#depositReportListMainBody").append('<div id="depositReportListBodyDiv" class="row" />');

    $("#panelRow1").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + getUserSessionElement(seCurrentFinancialYear) + "</strong></span>");
    $("#panelRow").append("<div class=''/><label  class='col-sm-2' >Deposit Book : </label><div class='col-sm-2'/><label  class='col-sm-1' >Day Wise</label><input  type='radio' id='dayWiseRadioButton' name='paymentmoderadiobutton'   onclick=dayWiseDetailRowForDepositBook('panelRowPaymentModeDivision1') class='col-sm-1'><div class='col-sm-1'/><label class='col-sm-2'>Between Dates</label><input type='radio' id='betweenDaysRadioButton' onclick=betweenDaysDetailRowForDepositBook('panelRowPaymentModeDivision1') name='paymentmoderadiobutton'  class='col-sm-1'></div>");

    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#depositReportListMainBody").append('<center><span id="depositReportMessageDiv"></span></center>');
    $("#depositReportListMainBody").append("<div id='panelRowPaymentModeDivision' class='row' />");
    $("#panelRowPaymentModeDivision").append("<div id='panelRowPaymentModeDivision1' class='row' />");
}

function dayWiseDetailRowForDepositBook(DivId)
{
    $("#depositReportListMessageDiv").text("");
    $("#" + DivId).text("").append("<div id='dayWiseDetailsRow' class='row pal' class='form-group'>");
    $("#dayWiseDetailsRow").append("<div id='dayWiseDetailsRowFieldGroup2' class='form-group' />");

    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="fromFinancialYear" class="form-control">'
            + '</div><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="currentFinancialYear" class="form-control"></div></div>');
    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="toFinancialYear" class="form-control">'
            + '</div></div>');
    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><label for="location">Date <span class="require">*</span> </label><input type="text"   id="date" placeholder="DD/MM/YYYY" class="form-control"></div></div>');


    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ddoerr"><label for="">DDO <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="ddo" onchange=getLocationBasedOnDDOInCashBook()></select>'
            + '</div><div class="form-group col-lg-6" id="locationerr"><label for="location">Location <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="location"></select></div></div>');

    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    var toFinacialYear = null;
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
    {
        var fromFinacialYear = finyearArray[0];
        var toFinacialYear = finyearArray[1];

        $("#fromFinancialYear").val(fromFinacialYear);
        $("#toFinancialYear").val(toFinacialYear);

    }
    $("#currentFinancialYear").val(currentFinancialYear);
    $('#date').datepicker({
        changeYear: true,
        changeMonth: true,
        startDate: fromFinacialYear,
        endDate: toFinacialYear
    });
    $("#date").keypress(function (event) {
        event.preventDefault();
    });
    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="fundTypeerr"><label for="">Fund Type </label><select class="form-control" name="chequeBankName" id="fundType"></select>'
            + '</div><div class="form-group col-lg-6" id="budgetHeaderr"><label for="location">Budget Head  </label><select class="form-control" name="chequeBankName" id="budgetHead"></select></div></div>');

    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ledgererr"><label for="">Ledger <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="ledger"></select>'
            + '</div><div class="form-group col-lg-6" id="grouperr"><label for="location"></label><select class="form-control" name="chequeBankName" id="groupId" onchange=fetchLedgerForBankBook("", "ledger")></select></div></div>');

    $('#groupId').hide();

    $("#dayWiseDetailsRowFieldGroup2").append("<div id='viewRow1' class='row' />");
    $("#viewRow1").append("<div id='viewGroup1' class='form-group' />");
    $("#viewGroup1").append('<center><button id="depositReportBtnView" type="submit" onclick="validateDateWiseDetailsForDepositReport()" class="btn btn-success mr5">VIEW</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetDateWiseDetailsForDepositReport()">RESET</button></center>');
    getGroupListForDepositReport("", "groupId");

    setTimeout(function () {
        viewOptionIdName("budget/master/FundType/View", "", "description", "fundType", "Fund Type");
    }, 200);

    setTimeout(function () {
        getLoggedInDDOLocationInDropDown("ddo", "location");
    }, 200);
    setTimeout(function () {
        viewOptionIdName("hrms/common/BudgetHead/View", "", "budgetHead", "budgetHead", "Budget Head");
    }, 300);


    setTimeout(function () {
        fetchLedgerForDepositReport("", "ledger");
    }, 3000);
}

function betweenDaysDetailRowForDepositBook(DivId)
{
    $("#depositReportListMessageDiv").text("");
    $("#" + DivId).text("").append("<div id='dayWiseDetailsRow' class='row pal' class='form-group'>");
    $("#dayWiseDetailsRow").append("<div id='dayWiseDetailsRowFieldGroup2' class='form-group' />");

    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="fromFinancialYear" class="form-control">'
            + '</div><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="currentFinancialYear" class="form-control"></div></div>');
    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="toFinancialYear" class="form-control">'
            + '</div></div>');
    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><label for="location">From Date <span class="require">*</span> </label><input type="text"   id="fromDate" placeholder="DD/MM/YYYY" class="form-control">'
            + '</div><div class="form-group col-lg-6" id="dateerr"><label for="location">To Date <span class="require">*</span> <span id="todateerr"></span> </label><input type="text"   id="toDate" placeholder="DD/MM/YYYY" class="form-control"></div></div>');

    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ddoerr"><label for="">DDO <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="ddo" onchange=getLocationBasedOnDDOInCashBook()></select>'
            + '</div><div class="form-group col-lg-6" id="locationerr"><label for="location">Location <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="location"></select></div></div>');

    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    var toFinacialYear = null;
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
    {
        var fromFinacialYear = finyearArray[0];
        var toFinacialYear = finyearArray[1];

        $("#fromFinancialYear").val(fromFinacialYear);
        $("#toFinancialYear").val(toFinacialYear);

    }
    $("#currentFinancialYear").val(currentFinancialYear);
    $('#fromDate').datepicker({
        changeYear: true,
        changeMonth: true,
        startDate: fromFinacialYear,
        endDate: toFinacialYear
    });

    $('#toDate').datepicker({
        changeYear: true,
        changeMonth: true,
        startDate: fromFinacialYear,
        endDate: toFinacialYear
    });

    $("#toDate").keypress(function (event) {
        event.preventDefault();
    });
    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="fundTypeerr"><label for="">Fund Type </label><select class="form-control" name="chequeBankName" id="fundType"></select>'
            + '</div><div class="form-group col-lg-6" id="budgetHeaderr"><label for="location">Budget Head  </label><select class="form-control" name="chequeBankName" id="budgetHead"></select></div></div>');

    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ledgererr"><label for="">Ledger <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="ledger"></select>'
            + '</div><div class="form-group col-lg-6" id="grouperr"><label for="location"></label><select class="form-control" name="chequeBankName" id="groupId" onchange=fetchLedgerForBankBook("", "ledger")></select></div></div>');

    $('#groupId').hide();

    $("#dayWiseDetailsRowFieldGroup2").append("<div id='viewRow1' class='row' />");
    $("#viewRow1").append("<div id='viewGroup1' class='form-group' />");
    $("#viewGroup1").append('<center><button id="depositReportBtnView" type="submit" onclick="validateBetweenDatesDetailsForDepositReport()" class="btn btn-success mr5">VIEW</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetBetweenDatesDetailsForDepositReport()">RESET</button></center>');
    getGroupListForDepositReport("", "groupId");
    setTimeout(function () {
        viewOptionIdName("budget/master/FundType/View", "", "description", "fundType", "Fund Type");
    }, 200);
    setTimeout(function () {
        getLoggedInDDOLocationInDropDown("ddo", "location");
    }, 200);
    setTimeout(function () {
        viewOptionIdName("hrms/common/BudgetHead/View", "", "budgetHead", "budgetHead", "Budget Head");
    }, 300);
    setTimeout(function () {
        fetchLedgerForDepositReport("", "ledger");
    }, 400);

}

function validateDateWiseDetailsForDepositReport()
{
    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var ledger = $("#ledger").val();
    var fundType = $("#fundType").val();
    var budgetHead = $("#budgetHead").val();
    var date = $("#date").val();
    var ledger = $("#ledger").val();
    if (ddo == "" || ddo == "undefined" || location == "" || location == "undefined" || ledger == "" || ledger == "undefined" || ledger == null || date == "" || date == "undefined" || date == null) {
        $("#depositReportListMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill * fields<strong></div></center>");
        return false;
    } else
    {
        $("#depositReportListMessageDiv").text("");

        viewDateWiseDetailsForDepositReport();
    }
}
function viewDateWiseDetailsForDepositReport()
{
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    var depositReportSearchJSON = {
        date: $("date").val(),
        DDO: $("#ddo").val(),
        location: $("#location").val(),
        fundType: $("#fundType").val(),
        budgetHead: $("#budgetHead").val(),
        ledger: $("#ledger").val()
    }

    var date = $("#date").val();
    var ledger = encodeURIComponent($("#ledger").val());
    $("#depositReportListListMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + '/Finance/FinanceReports/DateWiseDepositReport/DepositReport?date=' + date + '&fin=' + encodeURI(financialyear) + '&ledger=' + ledger + '&voucherList=' + encodeURIComponent(JSON.stringify(depositReportSearchJSON)) + " height='500px' width='100%'></iframe>");
}

function resetDateWiseDetailsForDepositReport()
{
    $("#date").val("");
    $("#fundType").val('');
    $("#budgetHead").val('');
    $("#ledger").val('');
    $("#reportFormat1").prop('checked', false);
    $("#reportFormat2").prop('checked', false);
    $("#reportFormat3").prop('checked', false);
    $("#depositReportListMessageDiv").text("");
    $("#bankBookListListMainMenu").text("");
}

function validateBetweenDatesDetailsForDepositReport()
{
    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var ledger = $("#ledger").val();
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    var result = 1;
    var days = checkFromDateAndToDateBankBookReport();
    if (ddo == "" || ddo == "undefined" || location == "" || location == "undefined" || ledger == "" || ledger == "undefined" || ledger == null || fromDate == "" || fromDate == "undefined" || fromDate == null || toDate == "" || toDate == "undefined" || toDate == null) {
        $("#depositReportListMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill * fields<strong></div></center>");
        return false;
    } else
    {
        $("#depositReportListMessageDiv").text("");
        if (days < 0) {
            $("#toDate").focus();
            displaySmallErrorMessagesInRed("todateerr", "To Date should be greater than or equal to From Date ");
            result = 0;
        } else {
            $("#todateerr").text("");
            viewBetweendatesDetailsForDepositReport();
        }

    }
}

function viewBetweendatesDetailsForDepositReport()
{
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    var depositReportSearchJSON = {
        fromDate: $("fromDate").val(),
        toDate: $("toDate").val(),
        DDO: $("#ddo").val(),
        location: $("#location").val(),
        fundType: $("#fundType").val(),
        budgetHead: $("#budgetHead").val(),
        ledger: $("#ledger").val()
    }
    var ledger = $("#ledger").val();
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    $("#depositReportListListMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + '/Finance/FinanceReports/BetweenDatesDepositReport/DepositReport?fromDate=' + fromDate + '&toDate=' + toDate + '&fin=' + encodeURI(financialyear) + '&ledger=' + ledger + '&voucherList=' + encodeURIComponent(JSON.stringify(depositReportSearchJSON)) + " height='500px' width='100%'></iframe>");
}

function resetBetweenDatesDetailsForDepositReport()
{
    $("#fromDate").val("");
    $("#toDate").val("");
    $("#fundType").val('0');
    $("#budgetHead").val('0');
    $("#ledger").val('0');
    $("#reportFormat1").prop('checked', false);
    $("#reportFormat2").prop('checked', false);
    $("#reportFormat3").prop('checked', false);
    $("#depositReportListMessageDiv").text("");
    $("#depositReportListListMainMenu").text("");
    $("#todateerr").text("");
}

function getGroupListForDepositReport(name, DivId) {

    $.get(server_base_url + "/financial/account/GroupMaster/ViewList", {
    }).done(function (data) {
        if (data != null) {
            var sno = 0;
            var mainData = data.result;
            $("#" + DivId).text("");
            for (var i = mainData.length - 1; i >= 0; i--) {
                var subData = mainData[i];

                if (subData.nature == "Liability")
                {
                    if (subData.groupName == "Deposit Group")
                    {

                        $("#" + DivId).append("<option value='" + subData._id.$oid + "'selected>" + subData.groupName + "</option>");
                    }
                }

            }
        }
    });
}

function fetchLedgerForDepositReport(name, DivId) {

    var group;
    group = $("#groupId").val();
    $.get(server_base_url + "/financial/Transaction/ReceiptVoucher/GetLedger", {
        group: group
    }).done(function (pdata) {
        if (pdata == "500" || pdata == "" || pdata == null || pdata == "501")
        {
            $("#" + DivId).text("").append("<option value = '' selected>---- No Data Available ----</option>");
        } else
        {
            $("#" + DivId).text("").append("<option value = '' selected>---- Select Ledger----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#" + DivId).append("<option  value='" + pdata[k].idStr + "'>" + pdata[k].ledgerName + "(" + pdata[k].ledgerCode + ")" + "</option>");
            }
        }
    });
}

