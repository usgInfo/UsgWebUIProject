/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function salaryDifferenceReport(divID) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="salarySlipReport()">Salary Difference Register </a>');

    $("#" + divID).text("").append('<div id="salaryslipdifferenceDivId"></div>');
    $("#salaryslipdifferenceDivId").text("").append('<div id="salaryslipdifferenceTabMenu" />');

    $("#salaryslipdifferenceTabMenu").append('<div id="salaryslipdifferenceMainMenu" class="row" />');
    $("#salaryslipdifferenceTabMenu").append('<div id="salaryslipdifferenceListMainMenu" class="row" />');
    $("#salaryslipdifferenceTabMenu").append('<div id="salaryDifferentPreviewMainMenu" class="row" />');

    if (checkUserPrivelege(pvViewSalarySlip)) {
        $("#salaryslipdifferenceMainMenu").append('<div id="salaryslipdifferenceMainPanel" class="panel panel-blue" />');
        $("#salaryslipdifferenceMainPanel").append('<div id="salaryslipdifferenceMainHeading" class="panel-heading" />');
        $("#salaryslipdifferenceMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Salary Difference Register </center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colSalaryDiff"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#salaryslipdifferenceMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colSalaryDiff").click(function() {
            $("#collapseOne1").toggle();
            if ($("#colSalaryDiff span").hasClass("glyphicon-minus-sign")) {
                $("#colSalaryDiff").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSalaryDiff").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="salaryslipdifferenceMainBody" class = "panel-body pan" />');
        $("#salaryslipdifferenceMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#salaryslipdifferenceMainBody").append('<center><span id="salaryslipdifferenceMessageDiv"></span></center>');
        $("#salaryslipdifferenceMainBody").append('<div id="salaryslipdifferenceBodyDiv" class="row" />');

        $("#salaryslipdifferenceBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employCode">Employee Code </label><select type="text" id="employeeCode" placeholder="Employee Code" class="form-control"></select><span id="employeeCodeErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employCodeM">Employee Code(M) </label><input type="text" id="employCodeM" placeholder="Employee Code(M)" class="form-control"></input><span id="employeeCodeMErr" class="text-danger"></span></div></div>');

        $("#salaryslipdifferenceBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employName">Employee Name</label><input type="text" id="employeeNameDiff" placeholder="Employee Name" class="form-control" /><span id="employeeNameErr" class="text-danger">'
                + '</div><div class="form-group col-lg-6" id="ddoDiv"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" id="ddoSelect"></select><span id="ddoSelectErr" class="text-danger"></span></div></div>');

        $("#salaryslipdifferenceBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="locationSelect" id="locationSelect"></select><span id="locationSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="departmentSelect" id="departmentDiff"></select><span id="departmentSelectErr" class="text-danger"></span></div></div>');

        $("#salaryslipdifferenceBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="designationDiff" id="designationDiff"></select><span id="designationSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureTypeSelect" id="natureTypeDiff"></select><span id="displayNameErr" class="text-danger"></span></div></div>');

        $("#salaryslipdifferenceBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="postingCityDiff" id="postingCityDiff"></select><span id="postingCitySelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="pfType">PF Type </label><select class="form-control" name="pfTypeSelect" id="pfTypeDiff"></select><span id="pfTypeSelectErr" class="text-danger"></span></div></div>');

        $("#salaryslipdifferenceBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fundType">Fund Type </label><select class="form-control" name="fundTypeSelect" id="fundTypeSelect" onchange="getBudgetHeadBasedOnDDOFundTypeCommon()"></select><span id="fundTypeSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6" id="yearDiv"><label for="year">Year <span class="require">*</span> </label><select class="form-control" name="yearSelect" id="yearSelect"></select><span id="yearSelectErr" class="text-danger"></span></div></div>');

        $("#salaryslipdifferenceBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="budgetHead">Budget Head </label><select class="form-control" name="budgetHeadSelect" id="budgetHeadSelect"></select><span id="budgetHeadSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6" id="monthDiv"><label for="month">Month <span class="require">*</span> </label><select class="form-control" name="underGroup" id="monthSelect"></select><span id="monthSelectErr" class="text-danger"></span></div></div>');

        $("#salaryslipdifferenceBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label>Pay Stop Salary</label>&nbsp;<input type="checkbox"  id="salaryType" style="height:20px;width:20px;" class="form-control" /><span id="rowInPageErr" class="text-danger"></span></div></div>');



        $("#salaryslipdifferenceBodyDiv").append("<div class='form-group'><center><button onclick=ValidationSalarySlipDiff() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetSalaryDifferenceForm() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    }
    getLoggedInDDOLocationInDropDown("ddoSelect", "locationSelect");
    $("#ddoSelect").attr("onchange", "ddoOnChangeFunction()").trigger("onchange");
//    fetchDDOList("ddoSelect");
//    fetchLocationList("locationSelect");
    //fetchYearListsalarydiff("yearSelect");
    fetchDepartmentList("departmentDiff");
    fetchDesignationList("designationDiff");
    fetchPostingCityList("postingCityDiff");
    fetchPfTypeList("pfTypeDiff");
    fetchFundTypeList("fundTypeSelect");
    // fetchYearListSS();
    fetchAllNaturesTypeForOptionCommon("natureTypeDiff");
    // getfinancialyearForReport("monthSelect","yearSelect");
    getFinancialYear("monthSelect", "yearSelect");
    fetchBudgetHeadList("budgetHeadSelect");
}
$(document).on('change', '#yearSelect', function() {
    var year = $("#yearSelect").val();
    getFinancialMonth("monthSelect", year);
});

function resetSalaryDifferenceForm() {
    $("#salaryslipdifferenceListMainMenu").text("");
    $("#salaryDifferentPreviewMainMenu").text("");
    $("#employeeCode").val("");
    $("#employeeCode").val("");
    $("#employeeNameDiff").val("");
//    $("#ddoSelect").val("0");
//    $("#locationSelect").val("0");
    $("#departmentDiff").val("0");
    $("#designationDiff").val("0");
    $("#natureTypeDiff").val("0");
    $("#postingCityDiff").val("0");
    $("#pfTypeDiff").val("0");
    $("#fundTypeSelect").val("0");
    $("#budgetHeadSelect").val("0");
    $("#monthSelect").val("0");
    $("#yearSelect").val("0");
    $("#salaryType").removeAttr('checked');
}





function ValidationSalarySlipDiff() {
    if (checkUserPrivelege(pvViewSalarySlip)) {
        $("#salaryslipdifferenceListMainMenu").text("");
        $("#salaryDifferentPreviewMainMenu").text("");
        $("#salaryPreviewMainMenu").text("");
        var ddo = $("#ddoSelect").val();
        var month = $("#monthSelect").val();
        var year = $("#yearSelect").val();
//    var bhead = $('#budgetheadId').val();
        if (ddo == "" || ddo == 0 || month == "" || month == 0 || year == 0) {
            $("#salaryslipdifferenceMessageDiv").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please select (*)mandatory fields</strong><h5></div></center>");
            $("#ddoSelect").addClass('has-error');
            $("#monthSelect").addClass('has-error');
            $("#yearSelect").addClass('has-error');
//        $("#mobileErr").append("Mobile Number should not be less then 10 digits");
        } else {
            $("#salaryslipdifferenceMessageDiv").text("");
            $("#ddoSelect").removeClass('has-error');
            $("#monthSelect").removeClass('has-error');
            $("#yearSelect").removeClass('has-error');
            viewSearchListForSalaryDifferent();

        }
    }
}

function viewSearchListForSalaryDifferent() {
    if (checkUserPrivelege(pvViewSalarySlip)) {

        var month = $("#monthSelect").val();
        var year = $("#yearSelect").val();
        if (!isNaN(month) && month.length != 0) {
            month = parseFloat(month);
        }
        if (!isNaN(year) && year.length != 0) {
            year = parseFloat(year);
        }
        var salaryProcessType = "salary";
        if ($("#salaryType").is(':checked')) {
            salaryProcessType = "paystopsalary";
        }
        var salarySearchSearchJSON = {
            employeeCode: $("#employeeCode").val(),
            employeeCodeM: $("#employCodeM").val(),
            employeeName: $("#employeeNameDiff").val(),
            ddo: $("#ddoSelect").val(),
            location: $("#locationSelect").val(),
            department: $("#departmentDiff").val(),
            designation: $("#designationDiff").val(),
            natureType: $("#natureTypeDiff").val(),
            postingCity: $("#postingCityDiff").val(),
            pfType: $("#pfTypeDiff").val(),
            fundType: $("#fundTypeSelect").val(),
            month: month,
            year: year,
            salaryProcessType: salaryProcessType,
            budgetHead: $("#budgetHeadSelect").val()
        }
        var loginUserId = getUserSessionElement("userId");
        $.get(server_base_url + "payroll/reports/SalarySlipRegister", {
            processedBy: loginUserId,
            salaryJson: JSON.stringify(salarySearchSearchJSON),
            action: "view"
        }).done(function(data) {
            if (data == NoData) {
                displaySmallErrorMessagesInRed("salaryslipdifferenceMessageDiv", NoDataFoundMessage + "");
            } else if (data == fail) {
                displaySmallErrorMessagesInRed("salaryslipdifferenceMessageDiv", NoDataFoundMessage + "");
            } else if (data == unauthorized) {
                displayErrMsgInTable("salaryslipdifferenceMessageDiv", unauthorizedMessage);
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("salaryslipdifferenceMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {

            } else {




                var mainData = data.result;
                var salaryreportData = mainData.salaryreportData;

                salaryReportDifferent(salaryreportData);
            }


        });
    }
}

function salaryReportDifferent(salaryreportData) {

    if (checkUserPrivelege(pvViewSalarySlip)) {
        $("#salaryslipdifferenceListMainMenu").text("").append('<div id="salaryslipdifferentListPanel" class="panel panel-blue" />');
        $("#salaryDifferentreportListPanel").append('<div id="salaryslipdifferentListHeading" class="panel-heading" />');
        $("#salaryslipdifferentListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne3"><center>List of Employee</center></a>');

        $("#salaryslipdifferentListPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
        $("#collapseOne3").append('<div id="salaryslipdifferentListBody" class = "panel-body pan" />');
        $("#salaryslipdifferentListBody").append('<div id="panelRow" class="row" />');

        $("#salaryslipdifferentListBody").append('<center><div id="salaryslipdifferentListErrorMsgId"/></center>');
        $("#salaryslipdifferentListBody").append('<div id="salaryslipdifferentListMainBody" class="table-responsive" />');
        $("#salaryslipdifferentListMainBody").append('<table id="salaryslipdifferentTable" class="table table-striped table-bordered table-hover" />');
        $("#salaryslipdifferentTable").append('<thead id="salaryslipdifferentTableHeadId" />');
        $("#salaryslipdifferentTable").append('<tbody id="salaryslipdifferentTableBodyId" />');

        $("#salaryslipdifferentTableHeadId").append('<tr><th>S.NO</th><th>Employee Code</th><th>Employee Name</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th><th>Preview</th></tr>');

        if (salaryreportData == NoDataFoundMessage || salaryreportData == undefined) {
            $("#salaryslipdifferentTable").dataTable().fnDestroy();
            displayErrMsgInTable("salaryslipdifferentTable", NoDataFoundMessage);
        } else {
            var sno = 0;
            for (var i = salaryreportData.length - 1; i >= 0; i--) {
                sno++;
                var subData = salaryreportData[i];
                var location = "";
                var department = "";
                var designation = "";
                var salaryType = "";
                if (subData.department != null && subData.department != "" && subData.department != undefined) {
                    department = subData.department;
                }
                if (subData.designation != null && subData.designation != "" && subData.designation != undefined) {
                    designation = subData.designation;
                }
                if (subData.location != null && subData.location != "" && subData.location != undefined) {
                    location = subData.location;
                }
                if (subData.salaryType != null && subData.salaryType != "" && subData.salaryType != undefined) {
                    salaryType = subData.salaryType;
                }


                $("#salaryslipdifferentTableBodyId").append("<tr style='cursor:pointer;' >"
                        + "<td style='cursor:pointer;'>" + sno + "</td>"
                        + "<td style='cursor:pointer;'><input type='hidden' value='" + subData.idStr + "'/>" + subData.employeeCode + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                        + "<td style='cursor:pointer;'>" + location + "</td>"
                        + "<td style='cursor:pointer;'>" + department + "</td>"
                        + "<td style='cursor:pointer;'>" + designation + "</td>"
                        + "<td style='cursor:pointer;'>" + salaryType + "</td>"
                        + "<td> <a href='javascript:void(0);' onclick=previewsalaryDifferenceSlip('" + subData.employeeCode + "','" + subData.ddo + "','" + subData.month + "','" + subData.year + "','" + subData.salaryProcessType + "') class='anchor_edit'>Preview</a></td></tr>");
            }
            $("#salaryslipdifferentTable").dataTable();
            $("#salaryslipdifferentTable thead tr th:first input:checkbox").change(function() {
                $("#salaryslipdifferentTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
            $("#salaryslipdifferentTable tbody tr td:first-child input:checkbox").change(function() {
                var tot = $(".case").length;
                var tot_checked = $(".case:checked").length;
                if (tot != tot_checked) {
                    $("#selectall").prop('checked', false);
                }
            });

        }
    }
}

function previewsalaryDifferenceSlip(primaryId, ddo, month, year, processType) {
    $("#salaryDifferentPreviewMainMenu").text("");
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    var salaryProcessType = "salary";
    if ($("#salaryType").is(':checked')) {
        salaryProcessType = "paystopsalary";
    }
    $("#salaryDifferentPreviewMainMenu").text("").append("<iframe  class ='panel-body pan' id='iframe' style='border:1px solid #666CCC' title='PDF in an i-Frame' scrolling='auto' src=" + server_base_url + 'payroll/reports/salaryslip/Difference?id=' + primaryId + '&ddo=' + ddo + '&fin=' + encodeURI(financialyear) + '&month=' + month + '&year=' + year + '&processType=' + encodeURI(salaryProcessType) + " height='500px' width='100%'></iframe>");
}