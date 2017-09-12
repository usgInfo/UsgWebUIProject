/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function GenerateSalarySlipMail(divID) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="salarySlipReport()">Generate Salary Slip Mail</a>');

    $("#" + divID).text("").append('<div id="salaryslipmailDivId"></div>');
    $("#salaryslipmailDivId").text("").append('<div id="salaryslipmailTabMenu" />');

    $("#salaryslipmailTabMenu").append('<div id="salaryslipmailMainMenu" class="row" />');
    $("#salaryslipmailTabMenu").append('<div id="salaryslipmailListMainMenu" class="row" />');
    $("#salaryslipmailTabMenu").append('<div id="salaryPreviewMainMenu" class="row" />');

    if (checkUserPrivelege(pvViewSalarySlipMail)) {
        $("#salaryslipmailMainMenu").append('<div id="salaryslipmailMainPanel" class="panel panel-blue" />');
        $("#salaryslipmailMainPanel").append('<div id="salaryslipmailMainHeading" class="panel-heading" />');
    $("#salaryslipmailMainHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Salary Slip Mail</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="salarySlip"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

    $("#salaryslipmailMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#salarySlip").click(function () {
        $("#collapseOne1").toggle();
        if ($("#salarySlip span").hasClass("glyphicon-minus-sign")) {
            $("#salarySlip").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#salarySlip").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne1").append('<div id="salaryslipmailMainBody" class = "panel-body pan" />');
    $("#salaryslipmailMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#salaryslipmailMainBody").append('<center><span id="salaryslipmailMessageDiv"></span></center>');
    $("#salaryslipmailMainBody").append('<div id="salaryslipmailBodyDiv" class="row" />');

    $("#salaryslipmailBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employCode">Employee Code </label><Select type="text" id="employeeCode" placeholder="Employee Code" class="form-control"></select><span id="employeeCodeErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="employCodeM">Employee Code(M) </label><input type="text" id="employeeCode" placeholder="Employee Code(M)" class="form-control" /><span id="employeeCodeMErr" class="text-danger"></span></div></div>');

    $("#salaryslipmailBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employName">Employee Name</label><input type="text" id="employeeNameMail" placeholder="Employee Name" class="form-control" /><span id="employeeNameErr" class="text-danger">'
            + '</div><div class="form-group col-lg-6" id="ddoDiv"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" id="ddoSelect"></select><span id="ddoSelectErr" class="text-danger"></span></div></div>');

    $("#salaryslipmailBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="locationSelect" id="locationSelect"></select><span id="locationSelectErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="departmentSelect" id="departmentSelect"></select><span id="departmentSelectErr" class="text-danger"></span></div></div>');

    $("#salaryslipmailBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="designationMail" id="designationMail"></select><span id="designationSelectErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureTypeSelect" id="natureTypeMail"><option value="0">----Select Nature----</option><option>ONE</option><option>TWO</option></select><span id="displayNameErr" class="text-danger"></span></div></div>');

    $("#salaryslipmailBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="postingCityMail" id="postingCityMail"></select><span id="postingCitySelectErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="pfType">PF Type </label><select class="form-control" name="pfTypeSelect" id="pfTypeMail"></select><span id="pfTypeSelectErr" class="text-danger"></span></div></div>');

    $("#salaryslipmailBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fundType">Fund Type </label><select class="form-control" name="fundTypeSelect" id="fundTypeSelect" onchange="getBudgetHeadBasedOnDDOFundTypeCommon()"></select><span id="fundTypeSelectErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6" id="yearDiv"><label for="year">Year <span class="require">*</span> </label><select class="form-control" name="yearSelect" id="yearMail"></select><span id="yearSelectErr" class="text-danger"></span></div></div>');

    $("#salaryslipmailBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="budgetHead">Budget Head </label><select class="form-control" name="budgetHeadSelect" id="budgetHeadSelect"></select><span id="budgetHeadSelectErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6" id="monthDiv"><label for="month">Month <span class="require">*</span> </label><select class="form-control" name="underGroup" id="monthMail"></select><span id="monthSelectErr" class="text-danger"></span></div></div>');

    $("#salaryslipmailBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label>Pay Stop Salary</label>&nbsp;<input type="checkbox"  id="salaryType" style="height:20px;width:20px;" class="form-control" /><span id="rowInPageErr" class="text-danger"></span></div></div>');

        $("#salaryslipmailBodyDiv").append("<div class='form-group'><center><button onclick=ValidationSalarySlipMail() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetSalarySlip() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    }

//    fetchDDOList("ddoSelect");
//    fetchLocationList("locationSelect");
        getLoggedInDDOLocationInDropDown("ddoSelect", "locationSelect");
    $("#ddoSelect").attr("onchange", "ddoOnChangeFunction()").trigger("onchange");
    //  fetchYearListMail();
    //getfinancialyearForReport("monthMail","yearMail");
    getFinancialYear("monthMail", "yearMail");
    fetchDepartmentList("departmentSelect");
    fetchDesignationList("designationMail");
    fetchPostingCityList("postingCityMail");
    fetchPfTypeList("pfTypeMail");
    fetchFundTypeList("fundTypeSelect");
    fetchAllNaturesTypeForOptionCommon("natureTypeMail");
    fetchBudgetHeadList("budgetHeadSelect");
}


$(document).on('change', '#yearMail', function () {
    var year = $("#yearMail").val();
    getFinancialMonth("monthMail", year);
});

function fetchYearListMail() {
    $("#monthMail").text("").append("<option value='0'>----Select Month ----</option>");
    $("#yearMail").text("").append("<option value='0'>----Select Year----</option>");
    $("#yearMail").append("<option value='2016'>2016</option>");
    $("#yearMail").append("<option value='2017'>2017</option>");
    $("#yearMail").append("<option value='2018'>2018</option>");
    $("#yearMail").append("<option value='2019'>2019</option>");
    $("#yearMail").append("<option value='2020'>2020</option>");
    $("#yearMail").append("<option value='2021'>2021</option>");

    $("#monthMail").append("<option value='1'> January </option>");
    $("#monthMail").append("<option value='2'> February </option>");
    $("#monthMail").append("<option value='3'> March </option>");
    $("#monthMail").append("<option value='4'> April </option>");
    $("#monthMail").append("<option value='5'> May </option>");
    $("#monthMail").append("<option value='6'> June </option>");
    $("#monthMail").append("<option value='7'> July </option>");
    $("#monthMail").append("<option value='8'> August </option>");
    $("#monthMail").append("<option value='9'> September </option>");
    $("#monthMail").append("<option value='10'> October </option>");
    $("#monthMail").append("<option value='11'> November </option>");
    $("#monthMail").append("<option value='12'> December </option>");


}


function ValidationSalarySlipMail() {
    if (checkUserPrivelege(pvViewSalarySlipMail)) {
        $("#salaryPreviewMainMenu").text("");
    var ddo = $("#ddoSelect").val();
    var month = $("#monthMail").val();
    var year = $("#yearMail").val();
//    var bhead = $('#budgetheadId').val();
        if (ddo == "" || ddo == 0 || month == "" || month == 0 || year == 0) {
            $("#salaryslipmailMessageDiv").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please select (*)mandatory fields</strong><h5></div></center>");
            $("#ddoDiv").addClass('has-error');
            $("#monthDiv").addClass('has-error');
            $("#yearDiv").addClass('has-error');
//        $("#mobileErr").append("Mobile Number should not be less then 10 digits");
        } else {
            $("#salaryslipmailMessageDiv").text("");
            $("#ddoDiv").removeClass('has-error');
            $("#monthDiv").removeClass('has-error');
            $("#yearDiv").removeClass('has-error');
            viewempsearchListforSalarySlip();

        }
    }
}

function viewempsearchListforSalarySlip() {
    if (checkUserPrivelege(pvViewSalarySlipMail)) {
        
        var month = $("#monthMail").val();
        var year = $("#yearMail").val();
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
        employeeCodeM: $("#employeeCode").val(),
        employeeName: $("#employeeNameMail").val(),
        ddo: $("#ddoSelect").val(),
        location: $("#locationSelect").val(),
        department: $("#departmentSelect").val(),
        designation: $("#designationMail").val(),
        natureType: $("#natureTypeMail").val(),
        postingCity: $("#postingCityMail").val(),
        pfType: $("#pfTypeMail").val(),
        fundType: $("#fundtypeMail").val(),
        month: month,
        year: year,
        salaryProcessType:salaryProcessType,
        budgetHead: $("#budgetHeadSelect").val()
    }
    var loginUserId = getUserSessionElement("userId");
    $.get(server_base_url + "payroll/reports/SalarySlipRegister", {
        processedBy: loginUserId,
        salaryJson: JSON.stringify(salarySearchSearchJSON),
        action: "view"
    }).done(function (data) {
        if (data == NoData) {
            displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", NoDataFoundMessage + "");
        } else if (data == fail) {
            displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", NoDataFoundMessage + "");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            displayErrMsgInTable("employeeAttendanceProcessMessageDiv", unauthorizedMessage);
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {

            } else {




                var mainData = data.result;
                var salaryreportData = mainData.salaryreportData;

                salarySlipMailProcessed(salaryreportData);
            }


        });
    }
}


function salarySlipMailProcessed(salaryreportData) {
    if (checkUserPrivelege(pvViewSalarySlipMail)) {


        $("#salaryslipmailListMainMenu").text("").append('<div id="salaryslipmailtPanel" class="panel panel-blue" />');
        $("#salaryslipmailtPanel").append('<div id="salaryslipmailtHeading" class="panel-heading" />');
        $("#salaryslipmailtHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne3"><center>List of Employee</center></a>');

        $("#salaryslipmailtPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
        $("#collapseOne3").append('<div id="salaryslipmailtBody" class = "panel-body pan" />');
        $("#salaryslipmailtBody").append('<div id="panelRow" class="row" />');

        $("#salaryslipmailtBody").append('<center><div id="salaryslipmailtErrorMsgId"/></center>');
        $("#salaryslipmailtBody").append('<div id="salaryslipmailtMainBody" class="table-responsive" />');
        $("#salaryslipmailtMainBody").append('<table id="salaryslipMailTable" class="table table-striped table-bordered table-hover" />');
        $("#salaryslipMailTable").append('<thead id="salaryslipMailTableHeadId" />');
        $("#salaryslipMailTable").append('<tbody id="salaryslipMailTableBodyId" />');

        $("#salaryslipMailTableHeadId").append('<tr> <th style="min-width:30%;width:auto;"><input type="checkbox" id="selectall"/>All</th>"<th>S.NO</th><th>Employee Code</th><th>Employee Name</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th></tr>');

        if (salaryreportData == NoDataFoundMessage || salaryreportData == undefined) {
            $("#salaryslipMailTable").dataTable().fnDestroy();
            displayErrMsgInTable("salaryslipMailTable", NoDataFoundMessage);
        } else {
            var sno = 0;
            for (var i = salaryreportData.length - 1; i >= 0; i--) {
                sno++;
                var subData = salaryreportData[i];
                var location = "";
                var department = "";
                var designation = "";
                var salaryType = "";
                var checkboxID = "case" + sno;
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



                $("#salaryslipMailTableBodyId").append("<tr style='cursor:pointer;' >"
                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="' + checkboxID + '" name="case" class="case" value=' + subData.idStr + '>' + "</td>"
                        + "<td style='cursor:pointer;'>" + sno + "</td>"
                        + "<td style='cursor:pointer;'><input type='hidden' value='" + subData.ddo + "'/>" + subData.employeeCode + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                        + "<td style='cursor:pointer;'>" + location + "</td>"
                        + "<td style='cursor:pointer;'>" + department + "</td>"
                        + "<td style='cursor:pointer;'>" + designation + "</td>"
                        + "<td style='cursor:pointer;'>" + salaryType + "</td></tr>");


            }
            $("#salaryslipMailTable").dataTable();
        $("#salaryslipMailTable thead tr th:first input:checkbox").change(function () {
                $("#salaryslipMailTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
        $("#salaryslipMailTable tbody tr td:first-child input:checkbox").change(function () {
                var tot = $(".case").length;
                var tot_checked = $(".case:checked").length;
                if (tot != tot_checked) {
                    $("#selectall").prop('checked', false);
                }
            });

        }

        $("#salaryslipmailtMainBody").append("<div class='form-group'><center><button onclick=employeesalarySlipMailtoSend() class='btn btn-warning' style='height:40px;width:80px'>Send Mail</button></center></div>");

    $("#salaryslipMailTable thead tr th:first input:checkbox").change(function () {
            $("#example1 tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
        });
    $("#salaryslipMailTable tbody tr td:first-child input:checkbox").change(function () {
            var tot = $(".case").length;

            var tot_checked = $(".case:checked").length;
            if (tot != tot_checked) {
                $("#selectall").prop('checked', false);
            }
            if (tot == tot_checked) {
                $("#selectall").prop('checked', true);
            }
        });
    }
}

function employeesalarySlipMailtoSend() {
    var checkrowList = [];

    var month = $("#monthMail").val();
    var year = $("#yearMail").val();
    var ddo = $("#ddoSelect").val();
    var length = $('#salaryslipMailTableBodyId tr input[type="checkbox"][name="case"]:checked').length;
    if (length > 0) {

        $('#salaryslipMailTableBodyId tr input[type="checkbox"][name="case"]:checked').each(function () {
            var row = $(this).closest('tr');
            checkrowList.push({
                employeeCode: row.find('td:eq(2)').text(),
            });
        });
        financialyear = getUserSessionElement("currentFinancialYear")
        var financialyearArray = financialyear.split("~");
        var fromYearDate = financialyearArray[0].trim();
        var toyearDate = financialyearArray[1].trim();

        $.get(server_base_url + "payroll/report/salaryslip/Mail", {
            employeeCodeList: JSON.stringify(checkrowList),
            month: month,
            year: year,
            ddo: ddo,
            financialyearStart: fromYearDate,
            financialyearEnd: toyearDate
        }).done(function (data) {
            console.log(data);
            if (data == NoData) {
                displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", NoDataFoundMessage + "");
            } else if (data == fail) {
                displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", NoDataFoundMessage + "");
            } else if (data == unauthorized) {
                displayErrMsgInTable("employeeAttendanceProcessMessageDiv", unauthorizedMessage);
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {

            } else {
                displaySuccessMessages("salaryslipmailtErrorMsgId", "Sent Succesfully");
                setTimeout(function () {
                    $("#salaryslipmailtErrorMsgId").text("");
                }, 1000);
                $(".case").prop('checked', false);
            }




        });
    }

}