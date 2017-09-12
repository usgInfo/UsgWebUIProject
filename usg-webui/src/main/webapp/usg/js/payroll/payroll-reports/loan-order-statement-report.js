/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function loanOrderStatamentReport(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="loanOrderStatamentReport()">Loan Order Statement</a>');
    $("#" + divId).text("").append('<div id="loanOrderStatementDivId"></div>');
    $("#loanOrderStatementDivId").text("").append('<div id="loanOrderStatementTabMenu" />');
    $("#loanOrderStatementTabMenu").append('<div id="loanOrderStatementMainMenu" class="row" />');
    $("#loanOrderStatementTabMenu").append('<div id="loanOrderStatementListMainMenu" class="row" />');

    if (checkUserPrivelege(pvViewLoanOrderStatement)) {
        $("#loanOrderStatementMainMenu").append('<div id="loanOrderStatementMainPanel" class="panel panel-blue" />');
        $("#loanOrderStatementMainPanel").append('<div id="loanOrderStatementMainHeading" class="panel-heading" />');
    $("#loanOrderStatementMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Loan Order Statement</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colLoanOrder"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#loanOrderStatementMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#colLoanOrder").click(function() {
        $("#collapseOne1").toggle();
        if ($("#colLoanOrder span").hasClass("glyphicon-minus-sign")) {
            $("#colLoanOrder").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colLoanOrder").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne1").append('<div id="loanOrderStatementMainBody" class = "panel-body pan" />');
    $("#loanOrderStatementMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#loanOrderStatementMainBody").append('<center><span id="loanOrderStatementMessageDiv"></span></center>');
        $("#loanOrderStatementMainBody").append('<div id="loanOrderStatementBodyDiv" class="row" />');

        $("#loanOrderStatementBodyDiv").append('<div class="form-group col-lg-12"><label for="loanOrder" class="col-lg-3 control-label">Allotment/Order No. <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div id="locationDiv"><select class="form-control" name="loanOrder" id="loanOrderSelect"></select></div></div></div>');
        $("#loanOrderStatementBodyDiv").append("<div class='form-group'><center><button onclick=getEmpDetailsForOrderStatement() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetLoanOrderStatement() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    }
    getOrderNoforLoanOrder();

}
function getOrderNoforLoanOrder()
{
    $.get(server_base_url + "Payroll/PayrollDetails/LoanOrder/View", {
         ddo: getUserSessionElement(seDDOId)
    }).done(function(pdata) {
        if (pdata == fail) {
            $("#loanOrderSelect").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        } else if (pdata == unauthorized) {
            $("#loanOrderSelect").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        } else if (pdata == invalidSession) {
            $("#loanOrderSelect").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        } else if (pdata == statusException) {
            $("#loanOrderSelect").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        } else {
            if (pdata != null) {
                $("#loanOrderSelect").text("").append("<option value = '' selected>---- Select Order No ----</option>");
                if (pdata.length > 0) {
                    for (var i = 0; i < pdata.length; i++) {

                        $("#loanOrderSelect").append("<option value='" + pdata[i].orderNo + "'>" + pdata[i].orderNo + "</option>");
                    }
                }

            }
        }
    });
}

function getEmpDetailsForOrderStatement()
{
    if (checkUserPrivelege(pvViewLoanOrderStatement)) {
        var orderId = $("#loanOrderSelect").val();
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;

    $("#loanOrderStatementListMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + 'Payroll/PayrollReports/LoanOrderStatement?orderid=' + orderId + '&fin=' + encodeURI(financialyear) + " height='500px' width='100%'></iframe>");

    }
}

function resetLoanOrderStatement()
{
    $("#loanOrderStatementListMainMenu").text("");
    $("#loanOrderSelect").val('');
}