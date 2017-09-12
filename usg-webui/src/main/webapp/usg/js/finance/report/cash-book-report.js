/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function cashBookReport(divId)
{
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeReportMenuTabs()">Finance Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="cashBookReport()">Cash Book(Ledgerwise)</a>');
    scrolupfunction();
    $("#" + divId).text("").append("<div id='testMainDivId' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'/>");
    $("#mainTabMenu").append("<div id='tableHeader'/>");
    $("#mainTabMenu").append("<div id='cashBookReportTableHeader'/>");
    if (checkUserPrivelege(pvViewCashBookReport)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Cash Book (Ledgerwise)</center>");
        $("#tableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        addToggleToId("colMaritial", "collapseOne2");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow1' class='row' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");

        $("#panelRow1").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + getUserSessionElement(seCurrentFinancialYear) + "</strong></span>");
        $("#panelRow").append("<div class=''/><label  class='col-sm-2' >Cash Book(Ledgerwise) </label><div class='col-sm-2'/><label  class='col-sm-1' >Day Wise</label><input  type='radio' id='dayWiseRadioButton' name='paymentmoderadiobutton'   onclick=dayWiseDetailRow('panelRowPaymentModeDivision1') class='col-sm-1'><div class='col-sm-1'/><label class='col-sm-2'>Between Dates</label><input type='radio' id='betweenDaysRadioButton' onclick=betweenDaysDetailRow('panelRowPaymentModeDivision1') name='paymentmoderadiobutton'  class='col-sm-1'></div>");
    }
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelMainBody").append('<center><span id="cashBookMessageDiv"></span></center>');
    $("#panelMainBody").append("<div id='panelRowPaymentModeDivision' class='row' />");
    $("#panelRowPaymentModeDivision").append("<div id='panelRowPaymentModeDivision1' class='row' />");
}

function dayWiseDetailRow(DivId) {

    $("#" + DivId).text("").append("<div id='chequeDetailsRow' class='row pal' class='form-group'>");
    $("#chequeDetailsRow").append("<div id='chequeDetailsRowFieldGroup2' class='form-group' />");

    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="fromFinancialYear" class="form-control">'
            + '</div><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="currentFinancialYear" class="form-control"></div></div>');
    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="toFinancialYear" class="form-control">'
            + '</div></div>');
    $("#chequeDetailsRowFieldGroup2").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><label for="location">Date <span class="require">*</span> </label><input type="text"   id="date" placeholder="DD/MM/YYYY" class="form-control"></div></div>');


    $("#chequeDetailsRowFieldGroup2").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ddoerr"><label for="">DDO <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="ddo" onchange=getLocationBasedOnDDOInCashBook()></select>'
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
    $("#chequeDetailsRowFieldGroup2").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="fundTypeerr"><label for="">Fund Type </label><select class="form-control" name="chequeBankName" id="fundType"></select>'
            + '</div><div class="form-group col-lg-6" id="budgetHeaderr"><label for="location">Budget Head  </label><select class="form-control" name="chequeBankName" id="budgetHead"></select></div></div>');

    $("#chequeDetailsRowFieldGroup2").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ledgererr"><label for="">Ledger <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="ledger"></select>'
            + '</div><div class="form-group col-lg-6" id="grouperr"><label for="location"></label><select class="form-control" name="chequeBankName" id="groupId" onchange=fetchLedgerForCashBook("", "ledger")></select></div></div>');

    $('#groupId').hide();

    $("#chequeDetailsRowFieldGroup2").append("<div id='viewRow1' class='row' />");
    $("#viewRow1").append("<div id='viewGroup1' class='form-group' />");
    $("#viewGroup1").append('<center><button id="CashBookBtnView" type="submit" onclick="validateDateWiseDetails()" class="btn btn-success mr5">VIEW</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetDateWiseDetails()">RESET</button></center>');

    getGroupListForCashBook("", "groupId");
    setTimeout(function () {
        viewOptionIdName("budget/master/FundType/View", "", "description", "fundType", "Fund Type");
    }, 200);
    setTimeout(function () {
        fetchLedgerForCashBook("", "ledger");
    }, 400);

    setTimeout(function () {
        getLoggedInDDOLocationInDropDown("ddo", "location");
    }, 200);
    setTimeout(function () {
        viewOptionIdName("hrms/common/BudgetHead/View", "", "budgetHead", "budgetHead", "Budget Head");
    }, 300);
}

function betweenDaysDetailRow(DivId) {

    $("#" + DivId).text("").append("<div id='chequeDetailsRow' class='row pal' class='form-group'>");
    $("#chequeDetailsRow").append("<div id='chequeDetailsRowFieldGroup2' class='form-group' />");

    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="fromFinancialYear" class="form-control">'
            + '</div><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="currentFinancialYear" class="form-control"></div></div>');
    $("#dayWiseDetailsRowFieldGroup2").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="toFinancialYear" class="form-control">'
            + '</div></div>');
    $("#chequeDetailsRowFieldGroup2").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><label for="location">From Date <span class="require">*</span> </label><input type="text"   id="fromDate" placeholder="DD/MM/YYYY" class="form-control">'
            + '</div><div class="form-group col-lg-6" id="dateerr"><label for="location">To Date <span class="require">*</span> <span id="todateerr"></span> </label><input type="text"   id="toDate" placeholder="DD/MM/YYYY" class="form-control"></div></div>');


    $("#chequeDetailsRowFieldGroup2").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ddoerr"><label for="">DDO <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="ddo" onchange=getLocationBasedOnDDOInCashBook()></select>'
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
    $("#chequeDetailsRowFieldGroup2").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="fundTypeerr"><label for="">Fund Type </label><select class="form-control" name="chequeBankName" id="fundType"></select>'
            + '</div><div class="form-group col-lg-6" id="budgetHeaderr"><label for="location">Budget Head  </label><select class="form-control" name="chequeBankName" id="budgetHead"></select></div></div>');

    $("#chequeDetailsRowFieldGroup2").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ledgererr"><label for="">Ledger <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="ledger"></select>'
            + '</div><div class="form-group col-lg-6" id="grouperr"><label for="location"></label><select class="form-control" name="chequeBankName" id="groupId" onchange=fetchLedgerForCashBook("", "ledger")></select></div></div>');

    $('#groupId').hide();

    $("#chequeDetailsRowFieldGroup2").append("<div id='viewRow1' class='row' />");
    $("#viewRow1").append("<div id='viewGroup1' class='form-group' />");
    $("#viewGroup1").append('<center><button id="CashBookBtnView" type="submit" onclick="validateBetweenDatesDetails1()" class="btn btn-success mr5">VIEW</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetBetweenDatesDetails()">RESET</button></center>');
    $("#chequeamterr").append("<span id='chequeAmountErr'></span>");
    $("#infavourerr").append("<span id='inFavorOfErr'></span>");

    getGroupListForCashBook("", "groupId");
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
        fetchLedgerForCashBook("", "ledger");
    }, 400);
}
function getDDOForCashBook(name, DivId)
{
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (pdata) {
        if (pdata != null) {
            $("#" + DivId).text("").append("<option value='' selected>---- Select DDO ----</option>");
            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {
                    if (name == pdata[i]._id.$oid) {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].ddoName + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].ddoName + "</option>");
                    }
                }
            }
        }
    });
}

function getLocationBasedOnDDOInCashBook(name, ddoId) {
    var ddo = $("#ddo").val();

    if (ddo == null)
    {
        ddo = ddoId
    }
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getLocationBasedOnDdo
    }).done(function (pdata) {

        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#location").text("").append("<option value = '' selected>---- Select Location ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                if (name == pdata[k]._id.$oid)
                {
                    $("#location").append("<option  value='" + pdata[k]._id.$oid + "' selected>" + pdata[k].locationName + "</option>");
                } else
                {
                    $("#location").append("<option  value='" + pdata[k]._id.$oid + "' >" + pdata[k].locationName + "</option>");
                }
            }

        } else
        {
            $("#location").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}


function fetchLedgerForCashBook(name, DivId) {

    var group;
    group = $("#groupId").val();
    $.get(server_base_url + "/financial/Transaction/ReceiptVoucher/GetLedger", {
        group: group
    }).done(function (pdata) {

        if (pdata != "500" && pdata != "" && pdata != null)
        {

            $("#" + DivId).text("").append("<option value = '' selected>---- Select Ledger----</option>");
            for (var k = 0; k < pdata.length; k++) {
 
                $("#" + DivId).append("<option  value='" + pdata[k].idStr + "'>" + pdata[k].ledgerName + "(" + pdata[k].ledgerCode + ")" + "</option>");
            }
        } else
        {
            $("#" + DivId).text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}

function getGroupListForCashBook(name, DivId)
{
    $.get(server_base_url + "/financial/account/GroupMaster/ViewList", {
    }).done(function (data) {
        if (data != null) {
            var mainData = data.result;
            $("#" + DivId).text("");
            for (var i = mainData.length - 1; i >= 0; i--) {
                var subData = mainData[i];

                if (subData.nature == "Assets" && subData.groupName == "Cash Group")
                {
                    $("#" + DivId).append("<option value='" + subData._id.$oid + "'selected>" + subData.groupName + "</option>");
                }

            }
        }
    });
}

function resetDateWiseDetails() {

    $("#date").val("");
    $("#fundType").val('');
    $("#budgetHead").val('');
    $("#ledger").val('');
    $("#reportFormat1").prop('checked', false);
    $("#reportFormat2").prop('checked', false);
    $("#reportFormat3").prop('checked', false);
    $("#cashBookMessageDiv").text("");
    $("#cashBookReportTableHeader").text("");

}

function resetBetweenDatesDetails() {
    $("#fromDate").val("");
    $("#toDate").val("");
    $("#fundType").val('0');
    $("#budgetHead").val('0');
    $("#ledger").val('0');
    $("#reportFormat1").prop('checked', false);
    $("#reportFormat2").prop('checked', false);
    $("#reportFormat3").prop('checked', false);
    $("#cashBookMessageDiv").text("");
    $("#cashBookReportTableHeader").text("");
    $("#todateerr").text("");
}

function validateDateWiseDetails()
{
    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var ledger = $("#ledger").val();
    var date = $("#date").val();
    if (ddo == "" || ddo == "undefined" || location == "" || location == "undefined" || ledger == "" || ledger == "undefined" || ledger == null || date == "" || date == "undefined" || date == null) {
        $("#cashBookMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill * fields<strong></div></center>");
        return false;
    } else
    {
        $("#cashBookMessageDiv").text("");
        getDateWiseDetailsForCashBook();
    }
}

function validateBetweenDatesDetails1()
{
    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var ledger = $("#ledger").val();
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    var result = 1;
    var days = checkFromDateAndToDateCashBookReport();
    if (ddo == "" || ddo == "undefined" || location == "" || location == "undefined" || ledger == "" || ledger == "undefined" || ledger == null || fromDate == "" || fromDate == "undefined" || fromDate == null || toDate == "" || toDate == "undefined" || toDate == null) {
        $("#cashBookMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill * fields<strong></div></center>");
        return false;
    } else
    {
        $("#cashBookMessageDiv").text("");
        if (days < 0) {
            $("#toDate").focus();
            displaySmallErrorMessagesInRed("todateerr", "To Date should be greater than or equal to From Date ");
            result = 0;
        } else {
            $("#todateerr").text("");
            getBetweenDatesDetailsForCashBook();
        }
    }
}

function getDateWiseDetailsForCashBook()
{
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    var voucherSearchJSON = {
        date: $("date").val(),
        DDO: $("#ddo").val(),
        location: $("#location").val(),
        fundType: $("#fundType").val(),
        budgetHead: $("#budgetHead").val(),
        ledger: $("#ledger").val()
    }

    var date = $("#date").val();
    var ledger = encodeURIComponent($("#ledger").val());

    $("#cashBookReportTableHeader").text("").append("<iframe id='iframe'  src=" + server_base_url + '/Finance/FinanceReports/DateWiseCashBook/CashBookReport?date=' + date + '&fin=' + encodeURI(financialyear) + '&ledger=' + ledger + '&voucherList=' + encodeURIComponent(JSON.stringify(voucherSearchJSON)) + " height='500px' width='100%'></iframe>");
}

function getBetweenDatesDetailsForCashBook()
{
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    var employeeSearchJSON = {
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
    $("#cashBookReportTableHeader").text("").append("<iframe id='iframe'  src=" + server_base_url + '/Finance/FinanceReports/BetweenDatesWiseCashBook/CashBookReport?fromDate=' + fromDate + '&toDate=' + toDate + '&fin=' + encodeURI(financialyear) + '&ledger=' + ledger + '&voucherList=' + encodeURIComponent(JSON.stringify(employeeSearchJSON)) + " height='500px' width='100%'></iframe>");
}
function checkFromDateAndToDateCashBookReport() {
    var fDate = $("#fromDate").datepicker("getDate");
    var tDate = $("#toDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}