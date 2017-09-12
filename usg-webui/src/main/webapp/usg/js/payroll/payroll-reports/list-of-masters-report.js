/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function listOfMastersReport(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="">List Of Masters</a>');

    $("#" + divId).text("").append('<div id="listOfMastersReportDivId"></div>');
    $("#listOfMastersReportDivId").text("").append('<div id="listOfMastersReportTabMenu" />');

    $("#listOfMastersReportTabMenu").append('<div id="listOfMastersReportMainMenu" class="row" />');
    $("#listOfMastersReportTabMenu").append('<div id="listOfMastersReportListMainMenu" class="row" />');
    
    if (checkUserPrivelege(pvViewMastersList)) {
        $("#listOfMastersReportMainMenu").append('<div id="listOfMastersReportMainPanel" class="panel panel-blue" />');
        $("#listOfMastersReportMainPanel").append('<div id="listOfMastersReportMainHeading" class="panel-heading" />');
    $("#listOfMastersReportMainHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Master Report</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="listOfMaster"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

    $("#listOfMastersReportMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#listOfMaster").click(function() {
        $("#collapseOne1").toggle();
        if ($("#listOfMaster span").hasClass("glyphicon-minus-sign")) {
            $("#listOfMaster").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#listOfMaster").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne1").append('<div id="listOfMastersReportMainBody" class = "panel-body pan" />');
    $("#listOfMastersReportMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#listOfMastersReportMainBody").append('<center><span id="listOfMastersReportMessageDiv"></span></center>');
    $("#listOfMastersReportMainBody").append('<div id="listOfMastersReportBodyDiv" class="row" />');
    $("#listOfMastersReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-3"></div><div class="form-group col-lg-6" id="reportTypeDiv"><label for="reportType">Master <span class="require">*</span></label><select class="form-control" name="reportType" id="reportType"></select><span id="reportTypeErr" class="text-danger"></span>')
    $("#listOfMastersReportBodyDiv").append("<div class='form-group'><center><button onclick=getListOfMasterReport() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=listOfMastersReport('dashboardBodyMainDiv') class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    }
    reportTypeList();
}
function reportTypeList()
{
    $("#reportType").text("").append("<option value='0'>----Select Report Type ----</option><option value='FORMULA'> Formula Details </option>"
            + "<option value='FUND_TYPE'>Fund Type Details</option>"
            + "<option value='BANK'>Bank Details</option>"
            + "<option value='DESIGNATION'>Designation Details</option>"
            + "<option value='DA_MA'> DA/MA Defined Rate(s) Details</option>"
            + "<option value='NATURE_TYPE'>Nature Type Details</option>"
            + "<option value='PF_TYPE'>PF Type Details</option>"
            + "<option value='DESIGNATION_FUND_TYPE_MAPPING'>Designation Fund Type Details </option>"
            + "<option value='DDO_DEPARTMENT_MASTER'>DDO Department Details</option>"
            + "<option value='FUND_HEAD_MAPPING'>Fund Head Mapping Details</option>"
            + "<option value='SALARY_HEAD_MASTER'>Salary Head Details</option>"
            + "<option value='HEAD_SLAB_MASTER'>Head Slab Details</option>"
            + "<option value='GRADE_MASTER'>Grade Details</option>"
            + "<option value='CLASS_MASTER'>Class Details</option>"
            + "<option value='GIS_GROUP_MASTER'>GIS Group Details</option>");
}
function getListOfMasterReport()
{
    if (checkUserPrivelege(pvViewMastersList)) {
         var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
        var reportType = $("#reportType").val();
        if (reportType == "" || reportType == "0") {
            displayLargeErrorMessagesInCenterInRed("listOfMastersReportMessageDiv", "Please select any Report");
            return false;
        } else
        {
            $("#listOfMastersReportMessageDiv").text("");
        $("#listOfMastersReportListMainMenu").text("").append("<iframe id='iframe' name='Hello' title='Hello' src=" + server_base_url + '/Payroll/PayrolReports/CommMastrReports/Fetch?reportType=' + reportType + '&fin=' + encodeURI(financialyear) + " height='500px' width='100%'></iframe>");

    }
    }
}