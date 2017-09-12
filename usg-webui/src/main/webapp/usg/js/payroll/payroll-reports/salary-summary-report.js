/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function salarySummaryReport(divID) {
    if (checkUserPrivelege(pvViewSalarySummary)) {
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="salarySummaryReport(' + divID + ')">Salary Summary Detail Report</a>');

        $("#" + divID).text("").append('<div id="salaryslipsummaryDivId"></div>');
        $("#salaryslipsummaryDivId").text("").append('<div id="salaryslipsummaryTabMenu" />');

        $("#salaryslipsummaryTabMenu").append('<div id="salaryslipsummaryMainMenu" class="row" />');
        $("#salaryslipsummaryTabMenu").append('<div id="salaryslipsummaryListMainMenu" class="row" />');
        $("#salaryslipsummaryTabMenu").append('<div id="salarySummaryerentPreviewMainMenu" class="row" />');

        $("#salaryslipsummaryMainMenu").append('<div id="salaryslipsummaryMainPanel" class="panel panel-blue" />');
        $("#salaryslipsummaryMainPanel").append('<div id="salaryslipsummaryMainHeading" class="panel-heading" />');
        $("#salaryslipsummaryMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Salary Summary Detail Report</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colSummaryReport"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#salaryslipsummaryMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colSummaryReport").click(function () {
            $("#collapseOne1").toggle();
            if ($("#colSummaryReport span").hasClass("glyphicon-minus-sign")) {
                $("#colSummaryReport").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSummaryReport").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="salaryslipsummaryMainBody" class = "panel-body pan" />');
        $("#salaryslipsummaryMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#salaryslipsummaryMainBody").append('<center><span id="salaryslipsummaryMessageDiv"></span></center>');
        $("#salaryslipsummaryMainBody").append('<div id="salaryslipsummaryBodyDiv" class="row" />');

        $("#salaryslipsummaryBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employCode">Employee Code </label><input type="text" id="employeecodeSummary" placeholder="Employee Code" class="form-control"/><span id="employeeCodeErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employCodeM">Employee Code(M) </label><input type="text" id="employeecodeMSummary" placeholder="Employee Code(M)" class="form-control" /><span id="employeeCodeMErr" class="text-danger"></span></div></div>');

        $("#salaryslipsummaryBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employName">Employee Name</label><input type="text" id="employeeNameSummary" placeholder="Employee Name" class="form-control" /><span id="employeeNameErr" class="text-danger">'
                + '</div><div class="form-group col-lg-6" id="ddoDiv"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" id="ddoSummary" multiple></select><span id="ddoSelectErr" class="text-danger"></span></div></div>');

        $("#salaryslipsummaryBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="locationSummary" id="locationSummary"></select><span id="locationSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="departmentSelect" id="departmentSummary"></select><span id="departmentSelectErr" class="text-danger"></span></div></div>');

        $("#salaryslipsummaryBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="designationSummary" id="designationSummary"></select><span id="designationSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureTypeSelect" id="natureTypeSummary"><option value="0">----Select Nature----</option><option>ONE</option><option>TWO</option></select><span id="displayNameErr" class="text-danger"></span></div></div>');

        $("#salaryslipsummaryBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="postingCitySummary" id="postingCitySummary"></select><span id="postingCitySelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="pfType">PF Type </label><select class="form-control" name="pfTypeSelect" id="pfTypeSummary"></select><span id="pfTypeSelectErr" class="text-danger"></span></div></div>');

        $("#salaryslipsummaryBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fundType">Fund Type </label><select class="form-control" name="fundTypeSummary" id="fundTypeSummary"></select><span id="fundTypeSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6" id="yearDiv"><label for="year">Year <span class="require">*</span> </label><select class="form-control" name="yearSelect" id="yearSelect"></select><span id="yearSelectErr" class="text-danger"></span></div></div>');

        $("#salaryslipsummaryBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="budgetHead">Budget Head </label><select class="form-control" name="budgetHeadSummary" id="budgetHeadSummary"></select><span id="budgetHeadSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6" id="monthDiv"><label for="month">Month <span class="require">*</span> </label><select class="form-control" name="underGroup" id="monthSelect"></select><span id="monthSelectErr" class="text-danger"></span></div></div>');



        $("#salaryslipsummaryBodyDiv").append("<div class='form-group'><center><button onclick=ValidationSalarySlipSummary() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetSalarySlipSummary() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");

        fetchDDOSummary("ddoSummary");
        fetchLocationList("locationSummary");
        //  fetchYearListsalarySummary("yearSelect");
        fetchDepartmentList("departmentSummary");
        fetchDesignationList("designationSummary");
        fetchPostingCityList("postingCitySummary");
        fetchPfTypeList("pfTypeSummary");
        fetchFundTypeList("fundTypeSummary");
        fetchAllNaturesTypeForOptionCommon("natureTypeSummary");
        //fetchYearListSS();
        // getfinancialyearForReport("monthSelect","yearSelect");
        getFinancialYear("monthSelect", "yearSelect");
        fetchBudgetHeadList("budgetHeadSummary");
    }
}

function fetchDDOSummary(divid) {
    $("#" + divid).text("").append("<option value='0'>----Select DDO----</option>");
    $.get(server_base_url + "/financial/account/DDO/ViewList", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            $("#" + divid).append("<option value='All'>All DDO</option>");
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#" + divid).append("<option value='" + subData._id.$oid + "'>" + subData.ddoName + "</option>");
            }
        }
    });
}
function ValidationSalarySlipSummary() {

    $("#salarySummaryerentPreviewMainMenu").text("");
    var ddo = $("#ddoSummary").val();
    var month = $("#monthSelect").val();
    var year = $("#yearSelect").val();
//    var bhead = $('#budgetheadId').val();
    if (ddo == "" || ddo == 0 || month == "" || month == 0 || year == 0) {
        $("#salaryslipsummaryMessageDiv").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please select (*)mandatory fields</strong><h5></div></center>");
        $("#ddoSummary").addClass('has-error');
        $("#monthSelect").addClass('has-error');
        $("#yearSelect").addClass('has-error');
//        $("#mobileErr").append("Mobile Number should not be less then 10 digits");
    } else {
        $("#salaryslipsummaryMessageDiv").text("");
        $("#ddoSummary").removeClass('has-error');
        $("#monthSelect").removeClass('has-error');
        $("#yearSelect").removeClass('has-error');
        viewSearchListForSalarySummary();

    }
}

function viewSearchListForSalarySummary() {
    var month = $("#monthSelect").val();
    var year = $("#yearSelect").val();
    if (!isNaN(month) && month.length != 0) {
        month = parseFloat(month);
    }
    if (!isNaN(year) && year.length != 0) {
        year = parseFloat(year);
    }
    var salarySearchSearchJSON = {
        employeeCode: $("#employeecodeSummary").val(),
        employeeCodeM: $("#employeecodeMSummary").val(),
        employeeName: $("#employeeNameSummary").val(),
        location: $("#locationSummary").val(),
        department: $("#departmentSummary").val(),
        designation: $("#designationSummary").val(),
        natureType: $("#natureTypeSummary").val(),
        postingCity: $("#postingCitySummary").val(),
        pfType: $("#pfTypeSummary").val(),
        fundType: $("#fundTypeSummary").val(),
        budgetHead: $("#budgetHeadSummary").val()
    }
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    var ddo = $("#ddoSummary").val();
    $("#salarySummaryerentPreviewMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + 'payroll/reports/salary/Summary?month=' + month + '&year=' + year + '&fin=' + encodeURI(financialyear) + '&salaryJson=' + JSON.stringify(salarySearchSearchJSON) + '&ddo=' + ddo + " height='500px' width='100%'></iframe>");
}

$(document).on('change', '#ddoSummary', function () {
    if ($(this).children('option:nth-child(2)').is(':selected')) {
        $('#ddoSummary').find('option').not(':nth-child(2)').removeAttr('selected');
    }
});

function resetSalarySlipSummary() {
    $("#employeecodeSummary").val(""),
            $("#employeecodeMSummary").val(""),
            $("#employeeNameSummary").val(""),
            $("#locationSummary").val("0"),
            $("#departmentSummary").val("0"),
            $("#designationSummary").val("0"),
            $("#natureTypeSummary").val("0"),
            $("#postingCitySummary").val("0"),
            $("#pfTypeSummary").val("0"),
            $("#fundTypeSummary").val("0"),
            $("#budgetHeadSummary").val("0")
    $("#yearSelect").val("0")
    $("#monthSelect").val("0")
}