/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function monthlySalaryStatus(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="">Monthly Salary Status Report</a>');

    $("#" + divId).text("").append('<div id="monthlySalaryStatusDivId"></div>');
    $("#monthlySalaryStatusDivId").text("").append('<div id="monthlySalaryStatusTabMenu" />');

    $("#monthlySalaryStatusTabMenu").append('<div id="monthlySalaryStatusMainMenu" class="row" />');
    $("#monthlySalaryStatusTabMenu").append('<div id="monthlySalaryStatusListMainMenu" class="row" />');

    if (checkUserPrivelege(pvViewSalaryStatus)) {
        $("#monthlySalaryStatusMainMenu").append('<div id="monthlySalaryStatusMainPanel" class="panel panel-blue" />');
        $("#monthlySalaryStatusMainPanel").append('<div id="monthlySalaryStatusMainHeading" class="panel-heading" />');
        $("#monthlySalaryStatusMainHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Monthly Salary Status Report</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colMonthlySalary"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#monthlySalaryStatusMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#colMonthlySalary").click(function() {
        $("#collapseOne1").toggle();
        if ($("#colMonthlySalary span").hasClass("glyphicon-minus-sign")) {
            $("#colMonthlySalary").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colMonthlySalary").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne1").append('<div id="monthlySalaryStatusMainBody" class = "panel-body pan" />');
    $("#monthlySalaryStatusMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#monthlySalaryStatusMainBody").append('<center><span id="monthlySalaryStatusMessageDiv"></span></center>');
        $("#monthlySalaryStatusMainBody").append('<div id="monthlySalaryStatusBodyDiv" class="row" />');
        $("#monthlySalaryStatusBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-3"></div><div class="form-group col-lg-6" id="yearDiv"><label for="year">Year <span class="require">*</span></label><select class="form-control" name="year" id="year"></select><span id="yearErr" class="text-danger"></span>')
    $("#monthlySalaryStatusBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-3"></div><div class="form-group col-lg-6" id="monthDiv"><label for="month">Month <span class="require">*</span></label><select class="form-control" name="month" id="month"></select><span id="monthErr" class="text-danger"></span>')

    $("#monthlySalaryStatusBodyDiv").append("<div class='form-group'><center><button onclick=viewMonthlySalaryStatusReportValidation() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=monthlySalaryStatus('dashboardBodyMainDiv') class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    getFinancialYear("month", "year");
    $(document).on('change', '#year', function() {
        var year = $("#year").val();
        getFinancialMonth("month", year);
    });
 }
}
function yearListofMonthlySalaryReport() {
    $("#year").text("").append("<option value='0'>----Select Year----</option>");
    var i, yr;
    var now = new Date();
    for (i = 0; i < 10; i++) {
        yr = now.getFullYear() + i; // or whatever
        $("#year").append($('<option/>').val(yr).text(yr));
    }
}
function monthListofMonthlySalaryReport() {
    $("#month").text("").append("<option value='0'>----Select Month ----</option><option value='1'> January </option>"
            + "<option value='2'> February </option>"
            + "<option value='3'> March </option>"
            + "<option value='4'> April </option>"
            + "<option value='5'> May </option>"
            + "<option value='6'> June </option>"
            + "<option value='7'> July </option>"
            + "<option value='8'> August </option>"
            + "<option value='9'> September </option>"
            + "<option value='10'> October </option>"
            + "<option value='11'> November </option>"
            + "<option value='12'> December </option>");
}
function viewMonthlySalaryStatusReportValidation()
{
    if (checkUserPrivelege(pvViewSalaryStatus)) {
        var month = $('#month').val();
        var year = $('#year').val();
        if (month == "" || month == null) {
            $("#ddoSelectBS").focus();
            addSomeClass("fnameFieldGroup", "has-error");
            displaySmallErrorMessages("monthErr", "Please Select Month.");
        }
        else if (year == "" || year == null) {
            $("#transadate").focus();
            $("#monthErr").text("");
            addSomeClass("fnameFieldGroup", "has-error");
            displaySmallErrorMessages("yearErr", "Please Select Year.");
        }
        else
        {
            $("#monthErr").text("").val("");
            $("#yearErr").text("").val("");

            getMonthlySalaryStatusReport();
        }
    }
}
function getMonthlySalaryStatusReport()
{
    if (checkUserPrivelege(pvViewSalaryStatus)) {
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    var month = $('#month').val();
    var year = $('#year').val();

    $("#monthlySalaryStatusListMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + '/Payroll/PayrollReports/MonthlySalaryStatusReport?month=' + month + '&year=' + year + '&fin=' + encodeURI(financialyear) + " height='500px' width='100%'></iframe>");

    }
}