/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function chequeIssueRegisterReport(divId)
{
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeReportMenuTabs()">Finance Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="chequeIssueRegisterReport()">Cheque Issue Register </a>');

    $("#" + divId).text("").append('<div id="chequeIssueRegisterListDivId"></div>');
    $("#chequeIssueRegisterListDivId").text("").append('<div id="chequeIssueRegisterListTabMenu" />');

    $("#chequeIssueRegisterListTabMenu").append('<div id="chequeIssueRegisterListMainMenu" class="row" />');
    $("#chequeIssueRegisterListTabMenu").append('<div id="chequeIssueRegisterListListMainMenu" class="row" />');
    $("#chequeIssueRegisterListTabMenu").append('<div id="PreviewList" class="row" />');

    if (checkUserPrivelege(pvViewChequeIssueRegisterReport)) {
    $("#chequeIssueRegisterListMainMenu").append('<div id="chequeIssueRegisterListMainPanel" class="panel panel-blue" />');
    $("#chequeIssueRegisterListMainPanel").append('<div id="chequeIssueRegisterListMainHeading" class="panel-heading" />');
    $("#chequeIssueRegisterListMainHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne1"><center> Cheque Issue Register </center></a>');

    $("#chequeIssueRegisterListMainHeading").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    addToggleToId("colMaritial", "collapseOne1");
    $("#chequeIssueRegisterListMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#collapseOne1").append('<div id="chequeIssueRegisterListMainBody" class = "panel-body pan" />');
    $("#chequeIssueRegisterListMainBody").append('<div id="panelRow" class="form-horizontal" />');
    $("#panelRow").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + getUserSessionElement(seCurrentFinancialYear) + "</strong></span>");

    $("#chequeIssueRegisterListMainBody").append('<center><span id="chequeIssueRegisterListMessageDiv"></span></center>');
    $("#chequeIssueRegisterListMainBody").append('<div id="chequeIssueRegisterListBodyDiv" class="row" />');

    $("#chequeIssueRegisterListBodyDiv").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="fromFinancialYear" class="form-control">'
                + '</div><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="currentFinancialYear" class="form-control"></div></div>');
    $("#chequeIssueRegisterListBodyDiv").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="toFinancialYear" class="form-control">'
                + '</div></div>');
        
    $("#chequeIssueRegisterListBodyDiv").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><label for="location">From Date <span class="require">*</span> </label><input type="text"   id="fromDate" placeholder="DD/MM/YYYY" class="form-control">'
                + '</div><div class="form-group col-lg-6" id="dateerr"><label for="location">To Date <span class="require">*</span> <span id="todateerr"></span></label><input type="text"   id="toDate" placeholder="DD/MM/YYYY" class="form-control"></div></div>');
        

        $("#chequeIssueRegisterListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ddoerr"><label for="">DDO <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="ddo" onchange=getLocationBasedOnDDOInCashBook()></select>'
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
        $("#chequeIssueRegisterListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="fundTypeerr"><label for="">Fund Type </label><select class="form-control" name="chequeBankName" id="fundType"></select>'
                + '</div><div class="form-group col-lg-6" id="budgetHeaderr"><label for="location">Budget Head  </label><select class="form-control" name="chequeBankName" id="budgetHead"></select></div></div>');

        $("#chequeIssueRegisterListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ledgererr"><label for="">Ledger  </label><select class="form-control" name="chequeBankName" id="ledger"></select>'
                + '</div><div class="form-group col-lg-6" id="grouperr"><label for="location"></label><select class="form-control" name="chequeBankName" id="groupId" onchange=fetchLedgerForChequeIssueRegister("", "ledger")></select></div></div>');
        $('#groupId').hide();
        $("#chequeIssueRegisterListBodyDiv").append("<div id='viewRow1' class='row' />");
        $("#viewRow1").append("<div id='viewGroup1' class='form-group' />");
        $("#viewGroup1").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button' style='margin-left:10px' value='View' class='btn btn-success mr5 pull-right' onclick='validateChequeIssueRegisterDetails()'>VIEW</button></div><div class='col-xs-2'><button type='button' onclick='resetChequeIssueRegisterDetails()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>RESET</button></div>");
        
        getGroupListForChequeIssueRegister("", "groupId");
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
        fetchLedgerForChequeIssueRegister("", "ledger");
        }, 400);
    }
}

function getGroupListForChequeIssueRegister(name, DivId) {

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
function validateChequeIssueRegisterDetails()
{
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var ledger = $("#ledger").val();
    var result = 1;
    var days = checkFromDateAndToDateChequeissueRegisterReport();
    if (ddo == "" || ddo == "undefined" || location == "" || location == "undefined" || fromDate == "" || fromDate == "undefined" || toDate == "" || toDate == "undefined") {
        $("#chequeIssueRegisterListMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill * fields<strong></div></center>");
        return false;
    }
    else
    {
        $("#chequeIssueRegisterListMessageDiv").text("");
        if(days < 0){
            $("#toDate").focus();
        displaySmallErrorMessagesInRed("todateerr", "To Date should be greater than or equal to From Date ");
        result = 0;
        }else{
            $("#todateerr").text("");
        viewchequeIssueRegisterDetails();
    }
        
    }
}

function viewchequeIssueRegisterDetails()
{
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    var employeeSearchJSON = {
       
        fromDate : $("fromDate").val(),
        toDate : $("toDate").val(),
        DDO: $("#ddo").val(),
        location: $("#location").val(),
        fundType: $("#fundType").val(),
        budgetHead: $("#budgetHead").val(),
        ledger: $("#ledger").val()
    }
    var ledger = $("#ledger").val();
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    $("#chequeIssueRegisterListListMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + '/Finance/FinanceReports/ChequeIssueRegisterReportService/ChequeIssueRegisterReport?fromDate=' + fromDate + '&toDate=' + toDate + '&fin=' + encodeURI(financialyear) + '&ledger=' + ledger + '&voucherList=' + encodeURIComponent(JSON.stringify(employeeSearchJSON)) + " height='500px' width='100%'></iframe>");

}

function resetChequeIssueRegisterDetails() {

    $("#fromDate").val("");
    $("#toDate").val("");
    $("#fundType").val('');
    $("#budgetHead").val('');
    $("#ledger").val('');
    $("#reportFormat1").prop('checked', false);
    $("#reportFormat2").prop('checked', false);
    $("#reportFormat3").prop('checked', false);
    $("#chequeIssueRegisterListMessageDiv").text("");
    $("#chequeIssueRegisterListListMainMenu").text("");
    $("#todateerr").text("");
}

function getDDOForChequeIssueRegister(name, DivId)
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

function fetchLedgerForChequeIssueRegister(name, DivId) {
    
    var group;
    group = $("#groupId").val();
    $.get(server_base_url + "/financial/Transaction/ReceiptVoucher/GetLedger", {
        group: group
    }).done(function (pdata) {
      

        if (pdata != "500" && pdata != "" && pdata != null)
        {
            $("#" + DivId).text("").append("<option value = '' selected>---- Select Ledger----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#" + DivId).append("<option  value='" + pdata[k].idStr + "'>" + pdata[k].ledgerName +"("+pdata[k].ledgerCode+")"+ "</option>");
            }
        } else
        {
            $("#" + DivId).text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}
function checkFromDateAndToDateChequeissueRegisterReport() {
    var fDate = $("#fromDate").datepicker("getDate");
    var tDate = $("#toDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
