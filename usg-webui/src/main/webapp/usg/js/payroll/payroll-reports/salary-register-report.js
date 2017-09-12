/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function salarySlipReport(divId) {



    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="salarySlipReport()">Salary Reports(Salary Slip/Register)</a>');
    $("#" + divId).text("").append('<div id="salaryRegisterReportDivId"></div>');
    $("#salaryRegisterReportDivId").text("").append('<div id="salaryRegisterReportTabMenu" />');
    $("#salaryRegisterReportTabMenu").append('<div id="salaryRegisterReportMainMenu" class="row" />');
    $("#salaryRegisterReportTabMenu").append('<div id="salaryRegisterReportListMainMenu" class="row" />');
    $("#salaryRegisterReportTabMenu").append('<div id="salaryPreviewMainMenu" class="row" />');
    $("#salaryRegisterReportMainMenu").append('<div id="salaryRegisterReportMainPanel" class="panel panel-blue" />');
    if (checkUserPrivelege(pvViewSalarySlip)) {
        $("#salaryRegisterReportMainPanel").append('<div id="salaryRegisterReportMainHeading" class="panel-heading" />');
        $("#salaryRegisterReportMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Salary Reports(Salary Slip/Register)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colSalaryRegister"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#salaryRegisterReportMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colSalaryRegister").click(function() {
            $("#collapseOne1").toggle();
            if ($("#colSalaryRegister span").hasClass("glyphicon-minus-sign")) {
                $("#colSalaryRegister").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSalaryRegister").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="salaryRegisterReportMainBody" class = "panel-body pan" />');
        $("#salaryRegisterReportMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#salaryRegisterReportMainBody").append('<center><span id="salaryRegisterReportMessageDiv"></span></center>');
        $("#salaryRegisterReportMainBody").append('<div id="salaryRegisterReportBodyDiv" class="row" />');

    $("#salaryRegisterReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ddoDiv"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" id="ddoSelect" ></select><span id="ddoSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employCode">Employee Code </label><select id="employeeCode" placeholder="Employee Code" class="form-control"></select><span id="employeeCodeErr" class="text-danger"></div></div>');

        $("#salaryRegisterReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employName">Employee Name</label><input type="text" id="employeeName" placeholder="Employee Name" class="form-control" /><span id="employeeNameErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employCodeM">Employee Code(M) </label><input type="text" id="employeeCodeM" placeholder="Employee Code(M)" class="form-control" /><span id="employeeCodeMErr" class="text-danger"></span></div></div>');


        $("#salaryRegisterReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="locationSelect" id="locationSelect"></select><span id="locationSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="departmentSelect" id="departmentSelect"></select><span id="departmentSelectErr" class="text-danger"></span></div></div>');

        $("#salaryRegisterReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="designationSelect" id="designationSelect"></select><span id="designationSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureTypeSelect" id="natureTypeSelect"></select><span id="displayNameErr" class="text-danger"></span></div></div>');

        $("#salaryRegisterReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="postingCitySelect" id="postingCitySelect"></select><span id="postingCitySelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="pfType">PF Type </label><select class="form-control" name="pfTypeSelect" id="pfTypeSelect"></select><span id="pfTypeSelectErr" class="text-danger"></span></div></div>');

        $("#salaryRegisterReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fundType">Fund Type </label><select class="form-control" name="fundTypeSelect" id="fundTypeSelect" onchange="getBudgetHeadBasedOnDDOFundTypeCommon()"></select><span id="fundTypeSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6" id="yearDiv"><label for="year">Year <span class="require">*</span> </label><select class="form-control" name="yearSelect" id="yearSelect"></select><span id="yearSelectErr" class="text-danger"></span></div></div>');

        $("#salaryRegisterReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="budgetHead">Budget Head </label><select class="form-control" name="budgetHeadSelect" id="budgetHeadSelect"></select><span id="budgetHeadSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6" id="monthDiv"><label for="month">Month <span class="require">*</span> </label><select class="form-control" name="underGroup" id="monthSelect"></select><span id="monthSelectErr" class="text-danger"></span></div></div>');


        $("#salaryRegisterReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="reportType">Report Type </label><select class="form-control" name="reportTypeSelect" id="reportTypeSelect">\n\
     <option value="MonthlySalarySlip" selected>Monthly Salary Slip</option>\n\
     <option value="MonthlyITRegister">Monthly IT Register</option>\n\
     <option value="MonthlySalaryRegister">Monthly Salary Register</option>\n\
     <option value="SalaryEarningRegister">Salary Earning Register</option>\n\
    </select><span id="reportTypeSelectErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label>Pay Stop Salary</label>&nbsp;<input type="checkbox"  id="salaryType" style="height:20px;width:20px;" class="form-control" /><span id="rowInPageErr" class="text-danger"></span></div></div>');

        $("#salaryRegisterReportBodyDiv").append("<div class='form-group'><center><button onclick=ValidationSalaryReport() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetSalarySlip() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    }
    //onchange="ddoOnChangeFunction()"
    getLoggedInDDOLocationInDropDown("ddoSelect", "locationSelect");
    $("#ddoSelect").attr("onchange", "ddoOnChangeFunction()").trigger("onchange");
//    fetchDDOList("ddoSelect");
//    fetchLocationList("locationSelect");
    fetchAllNaturesTypeForOptionCommon("natureTypeSelect");
    getFinancialYear("monthSelect", "yearSelect");
    fetchDepartmentList("departmentSelect");
    fetchDesignationList("designationSelect");
    fetchPostingCityList("postingCitySelect");
    fetchPfTypeList("pfTypeSelect");
    fetchFundTypeList("fundTypeSelect");
    // AllMonth("monthSelect");
    fetchBudgetHeadList("budgetHeadSelect");
}

$(document).on('change', '#yearSelect', function() {
    var year = $("#yearSelect").val();
    getFinancialMonth("monthSelect", year);
});


function resetSalarySlip() {
    $("#employeeCode").val("");
    $("#employeeCodeM").val("");
    $("#employeeName").val("");
//    $("#ddoSelect").val("0");
//    $("#locationSelect").val("0");
    $("#departmentSelect").val("0");
    $("#designationSelect").val("0");
    $("#natureTypeSelect").val("0");
    $("#postingCitySelect").val("0");
    $("#pfTypeSelect").val("0");
    $("#fundTypeSelect").val("0");
    $("#monthSelect").val("0");
    $("#budgetHeadSelect").val("0");
    $("#yearSelect").val("0");
    $("#reportTypeSelect").val("0");
    $("#rowInPage").val("");
    $("#salaryType").removeAttr('checked');
}

function fetchDDOList(divid) {
    $("#" + divid).text("").append("<option value='0'>----Select DDO----</option>");
    $.get(server_base_url + "/financial/account/DDO/ViewList", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#" + divid).append("<option value='" + subData._id.$oid + "'>" + subData.ddoName + "</option>");
            }
        }
    });
}

function fetchLocationList(divid) {
    $("#" + divid).text("").append("<option value='0'>----Select Location----</option>");
    $.get(server_base_url + "/financial/account/Location/ViewList", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#" + divid).append("<option value='" + subData._id.$oid + "'>" + subData.locationName + "</option>");
            }
        }
    });
}

function fetchYearListSS() {
    $("#yearSelect").text("").append("<option value='0'>----Select Year----</option>");
    $("#yearSelect").text("").append("<option value='0'>----Select Year----</option>");
    $("#yearSelect").append("<option value='2016'>2016</option>");
    $("#yearSelect").append("<option value='2017'>2017</option>");
    $("#yearSelect").append("<option value='2018'>2018</option>");
    $("#yearSelect").append("<option value='2019'>2019</option>");
    $("#yearSelect").append("<option value='2020'>2020</option>");
    $("#yearSelect").append("<option value='2021'>2021</option>");
    $("#monthSelect").text("").append("<option value='0'>----Select Month ----</option>");
    $("#monthSelect").append("<option value='1'> January </option>");
    $("#monthSelect").append("<option value='2'> February </option>");
    $("#monthSelect").append("<option value='3'> March </option>");
    $("#monthSelect").append("<option value='4'> April </option>");
    $("#monthSelect").append("<option value='5'> May </option>");
    $("#monthSelect").append("<option value='6'> June </option>");
    $("#monthSelect").append("<option value='7'> July </option>");
    $("#monthSelect").append("<option value='8'> August </option>");
    $("#monthSelect").append("<option value='9'> September </option>");
    $("#monthSelect").append("<option value='10'> October </option>");
    $("#monthSelect").append("<option value='11'> November </option>");
    $("#monthSelect").append("<option value='12'> December </option>");


}

function fetchDepartmentList(divid) {
    $("#" + divid).text("").append("<option value='0'>----Select Department----</option>");
    $.get(server_base_url + "/payroll/SalarySlip/Report", {
        action: "department"
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#" + divid).append("<option value='" + subData._id.$oid + "'>" + subData.department + "</option>");
            }
        }
    });
}

function fetchDesignationList(divid) {
    $("#" + divid).text("").append("<option value='0'>----Select Designation----</option>");
    $.get(server_base_url + "/payroll/SalarySlip/Report", {
        action: "designation"
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#" + divid).append("<option value='" + subData._id.$oid + "'>" + subData.designation + "</option>");
            }
        }
    });
}

function fetchPostingCityList(divid) {
    $("#" + divid).text("").append("<option value='0'>----Select Posting City----</option>");
    $.get(server_base_url + "/payroll/SalarySlip/Report", {
        action: "postingCity"
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#" + divid).append("<option value='" + subData._id.$oid + "'>" + subData.cityName + "</option>");
            }
        }
    });
}

function fetchPfTypeList(divid) {
    $("#" + divid).text("").append("<option value='0'>----Select PF Type----</option>");
    $.get(server_base_url + "/payroll/SalarySlip/Report", {
        action: "pfType"
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#" + divid).append("<option value='" + subData._id.$oid + "'>" + subData.PFType + "</option>");
            }
        }
    });
}

function fetchFundTypeList(divid) {
    $("#" + divid).text("").append("<option value='0'>----Select Fund Type----</option>");
    $.get(server_base_url + "/payroll/SalarySlip/Report", {
        action: "fundType"
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#" + divid).append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
            }
        }
    });
}



function fetchBudgetHeadList(divid) {
    $("#" + divid).text("").append("<option value='0'>----Select Budget Head----</option>");
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#" + divid).append("<option value='" + subData._id.$oid + "'>" + subData.budgetHead + "</option>");
            }
        }
    });
}

//------------------------------------------------------Validation Search Field---------------------------------------

function ValidationSalaryReport() {
    if (checkUserPrivelege(pvViewSalarySlip)) {
        $("#salaryPreviewMainMenu").text("");
        var ddo = $("#ddoSelect").val();
        var month = $("#monthSelect").val();
        var year = $("#yearSelect").val();
//    var bhead = $('#budgetheadId').val();
        if (ddo == "" || ddo == 0 || month == "" || month == 0 || year == 0) {
            $("#salaryRegisterReportMessageDiv").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please select (*)mandatory fields</strong><h5></div></center>");
            $("#ddoDiv").addClass('has-error');
            $("#monthDiv").addClass('has-error');
            $("#yearDiv").addClass('has-error');
//        $("#mobileErr").append("Mobile Number should not be less then 10 digits");
        } else {
            $("#salaryRegisterReportMessageDiv").text("");
            $("#ddoDiv").removeClass('has-error');
            $("#monthDiv").removeClass('has-error');
            $("#yearDiv").removeClass('has-error');
            var reporttype = $("#reportTypeSelect").val();
            var salaryReportValue = "MonthlySalarySlip";
            var incomeReportValue = "MonthlyITRegister";
            var salaryRegister = "MonthlySalaryRegister";
            var EarningsRegister = "SalaryEarningRegister";
            if (reporttype == salaryReportValue) {
                viewempsearchListforAutoSalaryProcess();
            }
            if (reporttype == incomeReportValue) {
                $("#salaryRegisterReportListMainMenu").text("");
                IncomeReport();
            }

            if (reporttype == salaryRegister) {
                $("#salaryRegisterReportListMainMenu").text("");
                salaryRegisterReport();
            }

            if (reporttype == EarningsRegister) {
                $("#salaryRegisterReportListMainMenu").text("");
                salaryRegisterReport();
            }



        }
    }
}

function viewempsearchListforAutoSalaryProcess() {

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
            employeeCodeM: $("#employeeCodeM").val(),
            employeeName: $("#employeeName").val(),
            ddo: $("#ddoSelect").val(),
            location: $("#locationSelect").val(),
            department: $("#departmentSelect").val(),
            designation: $("#designationSelect").val(),
            natureType: $("#natureTypeSelect").val(),
            postingCity: $("#postingCitySelect").val(),
            pfType: $("#pfTypeSelect").val(),
            fundType: $("#fundtypeId").val(),
            month: month,
            salaryProcessType: salaryProcessType,
            year: year,
            budgetHead: $("#budgetHeadSelect").val()
        }
        var loginUserId = getUserSessionElement("userId");
        $.get(server_base_url + "payroll/reports/SalarySlipRegister", {
            processedBy: loginUserId,
            salaryJson: JSON.stringify(salarySearchSearchJSON),
            action: "view"
        }).done(function(data) {
            if (data == NoData) {
                displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", NoDataFoundMessage + "");
            } else if (data == fail) {
                displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", NoDataFoundMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrMsgInTable("employeeAttendanceProcessMessageDiv", unauthorizedMessage);
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {

            } else {




                var mainData = data.result;
                var salaryreportData = mainData.salaryreportData;

                salaryReportProcessed(salaryreportData);
            }


        });
    }
}


function salaryReportProcessed(salaryreportData) {


    $("#salaryRegisterReportListMainMenu").text("").append('<div id="salaryslipreportListPanel" class="panel panel-blue" />');
    $("#salaryslipreportListPanel").append('<div id="salaryslipreportListHeading" class="panel-heading" />');
    $("#salaryslipreportListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne3"><center>List of Employee</center></a>');
    $("#salaryslipreportListPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
    $("#collapseOne3").append('<div id="salaryslipreportListBody" class = "panel-body pan" />');
    $("#salaryslipreportListBody").append('<div id="panelRow" class="row" />');
    $("#salaryslipreportListBody").append('<center><div id="salaryslipreportListErrorMsgId"/></center>');
    $("#salaryslipreportListBody").append('<div id="salaryslipreportListMainBody" class="table-responsive" />');
    $("#salaryslipreportListMainBody").append('<table id="salaryslipreportTable" class="table table-striped table-bordered table-hover" />');
    $("#salaryslipreportTable").append('<thead id="salaryslipreportTableHeadId" />');
    $("#salaryslipreportTable").append('<tbody id="salaryslipreportTableBodyId" />');
    $("#salaryslipreportTableHeadId").append('<tr><th>S.NO</th><th>Employee Code</th><th>Employee Name</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th><th>Preview</th></tr>');
    if (salaryreportData == NoDataFoundMessage || salaryreportData == undefined) {
        $("#salaryslipreportTable").dataTable().fnDestroy();
        displayErrMsgInTable("salaryslipreportTable", NoDataFoundMessage);
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



            $("#salaryslipreportTableBodyId").append("<tr style='cursor:pointer;' >"
                    + "<td style='cursor:pointer;'>" + sno + "</td>"
                    + "<td style='cursor:pointer;'><input type='hidden' value='" + subData.idStr + "'/>" + subData.employeeCode + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                    + "<td style='cursor:pointer;'>" + location + "</td>"
                    + "<td style='cursor:pointer;'>" + department + "</td>"
                    + "<td style='cursor:pointer;'>" + designation + "</td>"
                    + "<td style='cursor:pointer;'>" + salaryType + "</td>"
                    + "<td> <a href='javascript:void(0);' onclick=previewsalarySlip('" + subData.idStr + "','" + subData.ddo + "','" + subData.month + "','" + subData.year + "') class='anchor_edit'>Preview</a></td></tr>");
        }
        $("#salaryslipreportTable").dataTable();
        $("#salaryslipreportTable thead tr th:first input:checkbox").change(function() {
            $("#salaryslipreportTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
        });
        $("#salaryslipreportTable tbody tr td:first-child input:checkbox").change(function() {
            var tot = $(".case").length;
            var tot_checked = $(".case:checked").length;
            if (tot != tot_checked) {
                $("#selectall").prop('checked', false);
            }
        });
    }
}

function previewsalarySlip(primaryId, ddo, month, year) {
    var reportType = $("#reportTypeSelect").val();
    var financialyear = getUserSessionElement("currentFinancialYear");
    var financialyearArray = financialyear.split("~");
    var fromYearDate = financialyearArray[0].trim();
    var toyearDate = financialyearArray[1].trim();
    $("#salaryPreviewMainMenu").text("").append("<iframe  class ='panel-body pan' id='iframe' style='border:1px solid #666CCC' title='PDF in an i-Frame' scrolling='auto' src=" + server_base_url + 'payroll/salary/Report?id=' + primaryId + '&ddo=' + ddo + '&month=' + month + '&year=' + year + '&reportType=' + reportType + '&financialyearStart=' + fromYearDate + '&financialyearEnd=' + toyearDate + " height='500px' width='100%'></iframe>");

}

function IncomeReport() {
    var month = $("#monthSelect").val();
    var year = $("#yearSelect").val();
    if (!isNaN(month) && month.length != 0) {
        month = parseFloat(month);
    }
    if (!isNaN(year) && year.length != 0) {
        year = parseFloat(year);
    }
    var salarySearchSearchJSON = {
        employeeCode: $("#employeeCode").val(),
        employeeCodeM: $("#employeeCodeM").val(),
        employeeName: $("#employeeName").val(),
        ddo: $("#ddoSelect").val(),
        location: $("#locationSelect").val(),
        department: $("#departmentSelect").val(),
        designation: $("#designationSelect").val(),
        natureType: $("#natureTypeSelect").val(),
        postingCity: $("#postingCitySelect").val(),
        pfType: $("#pfTypeSelect").val(),
        fundType: $("#fundtypeId").val(),
        month: month,
        year: year,
        budgetHead: $("#budgetHeadSelect").val()
    }
    var reportType = $("#reportTypeSelect").val();
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    $("#salaryPreviewMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + 'payroll/reports/monthlyincometax/Report?month=' + month + '&year=' + year + '&fin=' + encodeURI(financialyear) + '&salaryJson=' + JSON.stringify(salarySearchSearchJSON) + '&reportType=' + reportType + " height='500px' width='100%'></iframe>");

}

function salaryRegisterReport() {
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
        employeeCodeM: $("#employeeCodeM").val(),
        employeeName: $("#employeeName").val(),
        ddo: $("#ddoSelect").val(),
        location: $("#locationSelect").val(),
        department: $("#departmentSelect").val(),
        designation: $("#designationSelect").val(),
        natureType: $("#natureTypeSelect").val(),
        postingCity: $("#postingCitySelect").val(),
        pfType: $("#pfTypeSelect").val(),
        fundType: $("#fundtypeId").val(),
        month: month,
        salaryProcessType: salaryProcessType,
        year: year,
        budgetHead: $("#budgetHeadSelect").val()
    }
    var reportType = $("#reportTypeSelect").val();
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    $("#salaryPreviewMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + '/payroll/salaryregister/Report?month=' + month + '&year=' + year + '&fin=' + encodeURI(financialyear) + '&salaryJson=' + JSON.stringify(salarySearchSearchJSON) + '&reportType=' + reportType + " height='500px' width='100%'></iframe>");

}

