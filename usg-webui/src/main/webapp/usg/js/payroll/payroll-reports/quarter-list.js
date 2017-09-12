/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function quarterListReport(divId)
{
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="quarterListReport()">Generate Quarter List</a>');
    $("#" + divId).text("").append('<div id="quarterListDivId"></div>');
    $("#quarterListDivId").text("").append('<div id="quarterListTabMenu" />');
    $("#quarterListTabMenu").append('<div id="quarterListMainMenu" class="row" />');
    $("#quarterListTabMenu").append('<div id="quarterListListMainMenu" class="row" />');

    if (checkUserPrivelege(pvViewQuarterList)) {
        $("#quarterListMainMenu").append('<div id="quarterListMainPanel" class="panel panel-blue" />');
        $("#quarterListMainPanel").append('<div id="quarterListMainHeading" class="panel-heading" />');
    $("#quarterListMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Quarter List</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="quarterList"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

    $("#quarterListMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#quarterList").click(function() {
        $("#collapseOne1").toggle();
        if ($("#quarterList span").hasClass("glyphicon-minus-sign")) {
            $("#quarterList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#quarterList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne1").append('<div id="quarterListMainBody" class = "panel-body pan" />');
    $("#quarterListMainBody").append('<div id="panelRow" class="form-horizontal" />');
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#quarterListMainBody").append('<center><span id="quarterListMessageDiv"></span></center>');
    $("#quarterListMainBody").append('<div id="quarterListBodyDiv" class="row" />');

    $("#quarterListBodyDiv").append('<div class="form-group col-lg-12"><label for="city" class="col-lg-3 control-label">City : <span class = "require"> * </span></label><div class="col-lg-6 col-sm-offset-1"><div id="cityDiv"><select class="form-control" name="city" id="citySelect"></select></div></div></div>');
    $("#quarterListBodyDiv").append('<div class="form-group col-lg-12"><label for="quarterCategory" class="col-lg-3 control-label">Quarter Category : <span class = "require"> * </span></label><div class="col-lg-6 col-sm-offset-1"><div id="quarterCategoryDiv"><select class="form-control" name="quarterCategory" id="quarterCategorySelect"></select></div></div></div>');
    $("#quarterListBodyDiv").append('<div class="form-group col-lg-12"><label for="condition" class="col-lg-3 control-label">Condition : <span class = "require"> * </span></label><div class="col-lg-6 col-sm-offset-1"><div id="conditionDiv"><select class="form-control" name="condition" id="conditionSelect"></select></div></div></div>');
    $("#quarterListBodyDiv").append('<div class="form-group col-lg-12"><label for="reportType" class="col-lg-3 control-label">Report Type : </label><div class="col-lg-6 col-sm-offset-1"><div id="reportTypeDiv"><select class="form-control" name="reportType" id="reportTypeSelect"></select></div></div></div>');
    $("#quarterListBodyDiv").append("<div class='form-group'><center><button onclick=validateQuarterMasterReportDetails() class='btn btn-success' style='height:40px;width:80px'>PREVIEW</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetquarterList() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    $("#citySelect").attr("onchange", "getQuarterListCategory()");
    }
    getCityForQuarterList();
    getConditionForQuarterList();
    getReportTypeForQuarterList();

}
function validateQuarterMasterReportDetails()
{
    var city = $("#citySelect").val();
    var quarterCategory = $("#quarterCategorySelect").val();
    var condition = $("#conditionSelect").val();
    var reportType = $("#reportTypeSelect").val();
    if (city == "" || city == "undefined" || quarterCategory == "" || quarterCategory == "undefined" || quarterCategory == null || condition == "" || condition == "undefined" || condition == null) {
        $("#quarterListMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill * fields<strong></div></center>");
        return false;
    } else
    {
        $("#quarterListMessageDiv").text("");
        getEmpDetailsForQuarterList();
    }

}
function resetquarterList()
{
    $("#quarterListMessageDiv").text("");
    $("#citySelect").val("");
    $("#quarterCategorySelect").val("");
    $("#conditionSelect").val("");
    $("#reportTypeSelect").val("");
}
function getCityForQuarterList()
{
    $.get(server_base_url + "hrms/salary/City/ViewList", {
    }).done(function(pdata) {
        if (pdata != null) {
            $("#citySelect").text("").append("<option value = '' selected>---- Select City ----</option>");
            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {

                    $("#citySelect").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].cityName + "</option>");
                }
            }

        }
    });
}

function getQuarterListCategory() {
    var city = $("#citySelect").val();
    var ddo = $("#ddo").val();
    $.get(server_base_url + "payroll/PayrollDetails/GetQuarterCategory", {
        city: city
    }).done(function(data) {

        data = JSON.parse(data);

        if (data == NoData) {
            displaySmallErrorMessagesInRed("cityErr", "No Quarter Category available for this city .Please select valid One");
        }
        if (data != null) {

            $("#quarterCategorySelect").text("").append("<option  value='' selected disabled>----Select Quarter Category ----</option>");
            for (var i = 0; i < data.length; i++)
            {
                $("#quarterCategorySelect").append("<option  value='" + data[i]._id.$oid + "'>" + data[i].category + "</option>");
            }
        }
    });
}

function getConditionForQuarterList(condition) {
    $("#conditionSelect").append("<option value='' selected disabled>---- Select Condition ----</option>");
    if (condition == "Good") {
        $("#conditionSelect").append("<option value='Good' selected>Good</option>");
        $("#conditionSelect").append("<option value='Bad' >Bad</option>");
    } else if (condition == "Bad") {
        $("#conditionSelect").append("<option value='Good'>Good</option>");
        $("#conditionSelect").append("<option value='Bad' selected>Bad</option>");
    } else {
        $("#conditionSelect").append("<option value='Good'>Good</option>");
        $("#conditionSelect").append("<option value='Bad'>Bad</option>");
    }
}

function getReportTypeForQuarterList(report) {
    $("#reportTypeSelect").append("<option value='' selected disabled>---- Select Report Type ----</option>");
    if (report == "PDF") {
        $("#reportTypeSelect").append("<option value='quarterListDetails' selected>Quarter list Details</option>");
    } else {
        $("#reportTypeSelect").append("<option value='quarterListDetails'>Quarter list Details</option>");
    }

}

function getEmpDetailsForQuarterList()
{
    if (checkUserPrivelege(pvViewQuarterList)) {
        var city = $("#citySelect").val();
        var quarterCategory = $("#quarterCategorySelect").val();
        var condition = $("#conditionSelect").val();
        var reportType = $("#reportTypeSelect").val();
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    $("#quarterListListMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + '/Payroll/PayrollReports/QuarterListStatement/QuarterMasterReport?city=' + city + '&fin=' + encodeURI(financialyear) + '&condition=' + condition + '&quarterCategory=' + quarterCategory + " height='600' width='100%'></iframe>");
    }
}