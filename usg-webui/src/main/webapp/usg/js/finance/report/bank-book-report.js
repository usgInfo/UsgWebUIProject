/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function bankBookReport(divId)
{
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeReportMenuTabs()">Finance Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="bankBookReport()">Bank Book </a>');

    $("#" + divId).text("").append('<div id="bankBookListDivId"></div>');
    $("#bankBookListDivId").text("").append('<div id="bankBookListTabMenu" />');

    $("#bankBookListTabMenu").append('<div id="bankBookListMainMenu" class="row" />');
    $("#bankBookListTabMenu").append('<div id="bankBookListListMainMenu" class="row" />');
    $("#bankBookListTabMenu").append('<div id="PreviewList" class="row" />');

    if (checkUserPrivelege(pvViewBankBookReport)) {
    $("#bankBookListMainMenu").append('<div id="bankBookListMainPanel" class="panel panel-blue" />');
    $("#bankBookListMainPanel").append('<div id="bankBookListMainHeading" class="panel-heading" />');
    $("#bankBookListMainHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne1"><center>Bank Book</center></a>');
    
    $("#bankBookListMainHeading").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    addToggleToId("colMaritial", "collapseOne1");
    $("#bankBookListMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#collapseOne1").append('<div id="bankBookListMainBody" class = "panel-body pan" />');
    $("#bankBookListMainBody").append('<div id="panelRow1" class="row" />');
    $("#bankBookListMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#bankBookListMainBody").append('<center><span id="bankBookListMessageDiv"></span></center>');
    $("#bankBookListMainBody").append('<div id="bankBookListBodyDiv" class="row" />');

    $("#panelRow1").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + getUserSessionElement(seCurrentFinancialYear) + "</strong></span>");
    $("#panelRow").append("<div class=''/><label  class='col-sm-2' >Bank Book(Ledgerwise) </label><div class='col-sm-2'/><label  class='col-sm-1' >Day Wise</label><input  type='radio' id='dayWiseRadioButton' name='paymentmoderadiobutton'   onclick=dayWiseDetailRowForBankBook('panelRowPaymentModeDivision1') class='col-sm-1'><div class='col-sm-1'/><label class='col-sm-2'>Between Dates</label><input type='radio' id='betweenDaysRadioButton' onclick=betweenDaysDetailRowForBankBook('panelRowPaymentModeDivision1') name='paymentmoderadiobutton'  class='col-sm-1'></div>");
    }
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#bankBookListMainBody").append('<center><span id="cashBookMessageDiv"></span></center>');
    $("#bankBookListMainBody").append("<div id='panelRowPaymentModeDivision' class='row' />");
    $("#panelRowPaymentModeDivision").append("<div id='panelRowPaymentModeDivision1' class='row' />");
}

function dayWiseDetailRowForBankBook(DivId)
{
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
    $("#viewGroup1").append('<center><button id="BankBookBtnView" type="submit" onclick="validateDateWiseDetailsForBankBook()" class="btn btn-success mr5">VIEW</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetDateWiseDetailsForBankBook()">RESET</button></center>');
    getGroupListForBankBook("", "groupId");

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
        fetchLedgerForBankBook("", "ledger");
    }, 3000);
}

function betweenDaysDetailRowForBankBook(DivId)
{
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
    $("#viewGroup1").append('<center><button id="BankBookBtnView" type="submit" onclick="validateBetweenDatesDetails()" class="btn btn-success mr5">VIEW</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetBetweenDatesDetailsForBankBook()">RESET</button></center>');
    getGroupListForBankBook("", "groupId");
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
        fetchLedgerForBankBook("", "ledger");
    }, 400);

}

function fetchLedgerCategoryForBankBook(name, DivId, message) {
    $.get(server_base_url + "financial/common/LedgerCategory/ListForOptions", {
    }).done(function (bpdata) {
        bpdata = JSON.parse(bpdata);
        if (bpdata != null) {
            $("#" + DivId).append("<option value='' selected disabled>---- Select " + message + "----</option>");
            if (bpdata.length > 0) {
                for (var i = 0; i < bpdata.length; i++) {
                    if (name == bpdata[i].ledgerCategory) {
                        $("#" + DivId).append("<option  value='" + bpdata[i].ledgerCategory + "' selected>" + bpdata[i].ledgerCategory + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + bpdata[i].ledgerCategory + "' >" + bpdata[i].ledgerCategory + "</option>");
                    }
                }
            }
        }
    });
}

function fetchLedgerForBankBook(name, DivId) {

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

function getGroupListForBankBook(name, DivId) {

    $.get(server_base_url + "/financial/account/GroupMaster/ViewList", {
    }).done(function (data) {
        if (data != null) {
            var sno = 0;
            var mainData = data.result;
            $("#" + DivId).text("");
            for (var i = mainData.length - 1; i >= 0; i--) {
                var subData = mainData[i];

                if (subData.nature == "Assets")
                {
                    if (subData.groupName == "Bank Group")
                    {

                        $("#" + DivId).append("<option value='" + subData._id.$oid + "'selected>" + subData.groupName + "</option>");
                    }
                }

            }
        }
    });
}

function getDDOForBankBook(name, DivId)
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

function validateDateWiseDetailsForBankBook()
{
    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var ledger = $("#ledger").val();
    var fundType = $("#fundType").val();
    var budgetHead = $("#budgetHead").val();
    var date = $("#date").val();
    var ledger = $("#ledger").val();
    if (ddo == "" || ddo == "undefined" || location == "" || location == "undefined" || ledger == "" || ledger == "undefined" || ledger == null || date == "" || date == "undefined" || date == null) {
        $("#bankBookListMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill * fields<strong></div></center>");
        return false;
    } else
    {
        $("#bankBookListMessageDiv").text("");

        viewDateWiseDetailsForBankBook();
    }
}

function viewDateWiseDetailsForBankBook()
{
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    var employeeSearchJSON = {
        date: $("date").val(),
        DDO: $("#ddo").val(),
        location: $("#location").val(),
        fundType: $("#fundType").val(),
        budgetHead: $("#budgetHead").val(),
        ledger: $("#ledger").val()
    }

    var date = $("#date").val();
    var ledger = encodeURIComponent($("#ledger").val());
    $("#bankBookListListMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + '/Finance/FinanceReports/DateWiseBankBook/BankBookReport?date=' + date + '&fin=' + encodeURI(financialyear) + '&ledger=' + ledger + '&voucherList=' + encodeURIComponent(JSON.stringify(employeeSearchJSON)) + " height='500px' width='100%'></iframe>");
}

function validateBetweenDatesDetails()
{
    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var ledger = $("#ledger").val();
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    var result = 1;
    var days = checkFromDateAndToDateBankBookReport();
    if (ddo == "" || ddo == "undefined" || location == "" || location == "undefined" || ledger == "" || ledger == "undefined" || ledger == null || fromDate == "" || fromDate == "undefined" || fromDate == null || toDate == "" || toDate == "undefined" || toDate == null) {
        $("#bankBookListMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill * fields<strong></div></center>");
        return false;
    } else
    {
        $("#bankBookListMessageDiv").text("");
        if(days < 0){
            $("#toDate").focus();
        displaySmallErrorMessagesInRed("todateerr", "To Date should be greater than or equal to From Date ");
        result = 0;
        }else{
            $("#todateerr").text("");
        viewBetweendatesDetailsForBankBook();
    }

    }
}

function viewBetweendatesDetailsForBankBook()
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
    $("#bankBookListListMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + '/Finance/FinanceReports/BetweenDatesBankBookReportService/BankBookReport?fromDate=' + fromDate + '&toDate=' + toDate + '&fin=' + encodeURI(financialyear) + '&ledger=' + ledger + '&voucherList=' + encodeURIComponent(JSON.stringify(employeeSearchJSON)) + " height='500px' width='100%'></iframe>");
}

function resetDateWiseDetailsForBankBook()
{
    $("#date").val("");
    $("#fundType").val('');
    $("#budgetHead").val('');
    $("#ledger").val('');
    $("#reportFormat1").prop('checked', false);
    $("#reportFormat2").prop('checked', false);
    $("#reportFormat3").prop('checked', false);
    $("#bankBookListMessageDiv").text("");
    $("#bankBookListListMainMenu").text("");
}

function resetBetweenDatesDetailsForBankBook() {

    $("#fromDate").val("");
    $("#toDate").val("");
    $("#fundType").val('0');
    $("#budgetHead").val('0');
    $("#ledger").val('0');
    $("#reportFormat1").prop('checked', false);
    $("#reportFormat2").prop('checked', false);
    $("#reportFormat3").prop('checked', false);
    $("#bankBookListMessageDiv").text("");
    $("#bankBookListListMainMenu").text("");
    $("#todateerr").text("");
}
function checkFromDateAndToDateBankBookReport() {
    var fDate = $("#fromDate").datepicker("getDate");
    var tDate = $("#toDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
