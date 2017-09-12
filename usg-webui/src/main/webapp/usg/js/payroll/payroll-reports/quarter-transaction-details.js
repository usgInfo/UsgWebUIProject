/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function quarterTransactionReport(divId)
{
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="quarterTransactionReport()">Quarter Transaction Details</a>');

    $("#" + divId).text("").append('<div id="quarterTransactionDivId"></div>');
    $("#quarterTransactionDivId").text("").append('<div id="quarterTransactionTabMenu" />');

    $("#quarterTransactionTabMenu").append('<div id="quarterTransactionMainMenu" class="row" />');
    $("#quarterTransactionTabMenu").append('<div id="quarterTransactionListMainMenu" class="row" />');
    if (checkUserPrivelege(pvViewQuarterTransactionList)) {
        
        $("#quarterTransactionMainMenu").append('<div id="quarterTransactionMainPanel" class="panel panel-blue" />');
        $("#quarterTransactionMainPanel").append('<div id="quarterTransactionMainHeading" class="panel-heading" />');
    $("#quarterTransactionMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Quarter Transaction Details</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="QuarterTransaction"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

    $("#quarterTransactionMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#QuarterTransaction").click(function() {
        $("#collapseOne1").toggle();
        if ($("#QuarterTransaction span").hasClass("glyphicon-minus-sign")) {
            $("#QuarterTransaction").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#QuarterTransaction").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne1").append('<div id="quarterTransactionMainBody" class = "panel-body pan" />');
    $("#quarterTransactionMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#quarterTransactionMainBody").append('<center><span id="quarterTransactionMessageDiv"></span></center>');
    $("#quarterTransactionMainBody").append('<div id="quarterTransactionBodyDiv" class="row" />');

    getTwoColumnInRow("quarterTransactionBodyDiv", "Row1", "Row1Col1", "Row1Col2");

    $("#Row1Col1").append(getLabel("City", "required") + "" + getDropDown("citySelect"));
    $("#Row1Col2").append(getLabel("Quarter Category", "required") + "" + getDropDown("quarterCategorySelect"));


    getTwoColumnInRow("quarterTransactionBodyDiv", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel_InputWithSpan("From Allocation Date", "required", "fromAllocationDate", "Select From Allocation Date", "onkeypress='return false'"));
    $("#Row2Col2").append(getLabel_InputWithSpan("To Allocation Date", "required", "toAllocationDate", "Select To Allocation Date", "onkeypress='return false'"));

        $("#fromAllocationDate").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy",
            yearRange: '-2:+50',
            minDate: '+0D'
        });
        $("#toAllocationDate").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy",
            yearRange: '-2:+50',
            minDate: '+0D'
        });

    getTwoColumnInRow("quarterTransactionBodyDiv", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel_InputWithSpan("From Left Date", "required", "fromLeftDate", "Select From Left Date", "onkeypress='return false'"));
    $("#Row3Col2").append(getLabel_InputWithSpan("To Left Date", "required", "toLeftDate", "Select To Left Date", "onkeypress='return false'"));
    }

    $("#fromLeftDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd/mm/yy",
        yearRange: '-2:+50',
        minDate: '+0D'
    });
    $("#toLeftDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd/mm/yy",
        yearRange: '-2:+50',
        minDate: '+0D'
    });

    $("#quarterTransactionBodyDiv").append("<div class='form-group'><center><button onclick=validateQuarterTransactionReportDetails() class='btn btn-success' style='height:40px;width:80px'>PREVIEW</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetQuarterTransaction() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    fetchCityForQuarterTransaction();
    $("#citySelect").attr("onchange", "getQuarterListCategory()");

}
function validateQuarterTransactionReportDetails()
{
    var city = $("#citySelect").val();
    var quarterCategory = $("#quarterCategorySelect").val();
    var fromAllocationDate = $("#fromAllocationDate").val();
    var toAllocationDate = $("#toAllocationDate").val();
    var fromLeftDate = $("#fromLeftDate").val();
    var toLeftDate = $("#toLeftDate").val();
    var result = 1;
    var days = checkFromAllocationDateAndToAllocationDateQuarterTransaction();
    var days1 = checkFromLeftDateAndToLeftDateQuarterTransaction();

    if (city == "" || city == "undefined" || quarterCategory == "" || quarterCategory == "undefined" || fromAllocationDate == "" || fromAllocationDate == "undefined" || fromAllocationDate == null || toAllocationDate == "" || toAllocationDate == "undefined" || toAllocationDate == null || fromLeftDate == "" || fromLeftDate == "undefined" || fromLeftDate == null || toLeftDate == "" || toLeftDate == "undefined" || toLeftDate == null) {
        $("#quarterTransactionMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
        return false;
    } else
    {
        if(days < 0){
            $("#toAllocationDate").focus();
        displaySmallErrorMessagesInRed("toAllocationDateErr", "To Allocation Date should be greater than or equal to From Allocation Date ");
        result = 0;
        }
        else if(days1 < 0){
            $("#toLeftDate").focus();
        displaySmallErrorMessagesInRed("toLeftDateErr", "To Left Date should be greater than or equal to From Left Date ");
        result = 0;
        }
        else{
        $("#quarterTransactionMessageDiv").text("");
        $("#toAllocationDateErr").text("");
        $("#toLeftDateErr").text("");
        getEmpDetailsForQuarterTransaction();
        }
    }

}
function resetQuarterTransaction()
{
    $("#quarterTransactionMessageDiv").text("");
    $("#citySelect").val('0');
    $("#quarterCategorySelect").val('0');
    $("#fromAllocationDate").val("");
    $("#toAllocationDate").val("");
    $("#fromLeftDate").val("");
    $("#toLeftDate").val("");
    $("#quarterTransactionListMainMenu").text("");
    $("#toAllocationDateErr").text("");
    $("#toLeftDateErr").text("");
}
function fetchCityForQuarterTransaction()
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

function fetchQuarterCategoryForQuarterTransaction()
{
    $.get(server_base_url + "hrms/salary/QuarterCategory/ViewList", {
    }).done(function(pdata) {
        if (pdata != null) {
            $("#quarterCategorySelect").text("").append("<option value = '' selected>---- Select Quarter Category ----</option>");
            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {

                    $("#quarterCategorySelect").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].category + "</option>");
                }
            }

        }
    });
}

function getEmpDetailsForQuarterTransaction()
{
    if (checkUserPrivelege(pvViewQuarterTransactionList)) {
        var city = $("#citySelect").val();
        var quarterCategory = $("#quarterCategorySelect").val();
        var fromAllocationDate = $("#fromAllocationDate").val();
        var toAllocationDate = $("#toAllocationDate").val();
        var fromLeftDate = $("#fromLeftDate").val();
        var toLeftDate = $("#toLeftDate").val();
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    $("#quarterTransactionListMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + '/Payroll/PayrollReports/QuarterTransactionReport/QuarterTransactionReport?city=' + city + '&fin=' + encodeURI(financialyear) + '&quarterCategory=' + quarterCategory + '&fromAllocationDate=' + fromAllocationDate + '&toAllocationDate=' + toAllocationDate + '&fromLeftDate=' + fromLeftDate + '&toLeftDate=' + toLeftDate + " height='600' width='100%'></iframe>");
    }
}

function checkFromAllocationDateAndToAllocationDateQuarterTransaction() {
    var fDate = $("#fromAllocationDate").datepicker("getDate");
    var tDate = $("#toAllocationDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
function checkFromLeftDateAndToLeftDateQuarterTransaction() {
    var fDate = $("#fromLeftDate").datepicker("getDate");
    var tDate = $("#toLeftDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}