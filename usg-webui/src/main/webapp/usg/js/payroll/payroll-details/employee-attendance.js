/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function payrollEmployeeAttendanceMaster(divId) {
    if (checkUserPrivelege(pvCreateEmployeeAttendance)) {
        var financialYear = getUserSessionElement(seCurrentFinancialYear);
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a>><a href="javascript:void(0)" onclick="payrollEmployeeAttendanceMaster("dashboardBodyMainDiv")" data-toggle="tab">Employee Attendance</a>');
        $("#" + divId).text("").append('<div id="employeeAttendanceProcessDivId"></div>');
        $("#employeeAttendanceProcessDivId").text("").append('<div id="employeeAttendanceProcessTabMenu" />');

        $("#employeeAttendanceProcessTabMenu").append('<div id="employeeAttendanceProcessMainMenu" class="row" />');
        $("#employeeAttendanceProcessTabMenu").append('<div id="attendanceNotProcessedEmployeeList" class="row" />');
        $("#employeeAttendanceProcessTabMenu").append('<div id="attendanceProcessedButtonDiv" class="row" />');
        $("#employeeAttendanceProcessTabMenu").append('<div id="attendanceProcessedEmployeeList" class="row" />');
        $("#employeeAttendanceProcessTabMenu").append('<div id="attendanceUnProcessedButtonDiv" class="row" />');
        $("#employeeAttendanceProcessTabMenu").append('<div id="attendanceLockedEmployeeList" class="row" />');

        $("#employeeAttendanceProcessMainMenu").append('<div id="employeeAttendanceProcessMainPanel" class="panel panel-blue" />');
        $("#employeeAttendanceProcessMainPanel").append('<div id="employeeAttendanceProcessMainHeading" class="panel-heading" />');
        $("#employeeAttendanceProcessMainHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Employee Attendance</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colEmployeeAttendence"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#employeeAttendanceProcessMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colEmployeeAttendence").click(function () {
            $("#collapseOne1").toggle();
            if ($("#colEmployeeAttendence span").hasClass("glyphicon-minus-sign")) {
                $("#colEmployeeAttendence").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colEmployeeAttendence").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="employeeAttendanceProcessMainBody" class = "panel-body pan" />');
        $("#employeeAttendanceProcessMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#employeeAttendanceProcessMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#employeeAttendanceProcessMainBody").append('<center><span id="employeeAttendanceProcessMessageDiv"></span></center>');
        $("#employeeAttendanceProcessMainBody").append('<div id="employeeAttendanceProcessBodyDiv" class="row" />');

        $("#employeeAttendanceProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ddoDiv"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" name="ddoId" id="ddoId"></select><span id="ddoErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employCode">Employee Code </label><select  id="empcode" class="form-control"></select><span id="empCodeErr" class="text-danger"></span></div></div>');

        getLoggedInDDOInDropDown("ddoId", "");
        $("#employeeAttendanceProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employeeName">Employee Name </label><input type="text" id="empname" class="form-control"/><span id="empNameErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="empCodeM">Employee Code(M) </label><input type="text" id="empcodem" class="form-control" /><span id="empCodeMErr" class="text-danger"></span></div></div>');
        $("#employeeAttendanceProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="LocationId" id="LocationId"></select><span id="locationErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="deptId" id="deptId"></select><span id="departmentErr" class="text-danger"></span></div></div>');
        $("#employeeAttendanceProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="desiId" id="desiId"></select><span id="designationErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureId" id="natureId"></select><span id="natureTypeErr" class="text-danger"></span></div></div>');
        $("#employeeAttendanceProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="cityid" id="cityid"></select><span id="postingCityError" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="pfType">PF Type </label><select class="form-control" name="pfId" id="pfId"></select><span id="pfTypeError" class="text-danger"></span></div></div>');
        $("#employeeAttendanceProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="budgetHead">Budget Head </label><select class="form-control" name="budgetheadId" id="budgetheadId"></select><span id="budgetHeadErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for=" employeeFundType">Fund type </label><select class="form-control" name="fundtypeId" id="fundtypeId"></select><span id=" employeeFundTypeErr" class="text-danger"></span></div></div>');
        $("#employeeAttendanceProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="attendanceYearDiv"><label for="attendanceYear">Year <span class="require">*</span></label><select class="form-control" name="attendanceYear" id="attendanceYear"></select><span id="attendanceYearErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6" id="attendancemonthDiv"><label for="attendancemonth">Month <span class="require">*</span></label><select class="form-control" name="attendancemonth" id="attendancemonth"></select><span id="attendancemonthErr" class="text-danger"></span></div></div>');
//    $("#employeeAttendanceProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="attendanceYear">Year <span class="require">*</span></label><select class="form-control" name="attendanceYear" id="attendanceYear"></select><span id="attendanceYearErr" class="text-danger"></span></div></div>');
        $("#employeeAttendanceProcessBodyDiv").append("<div class='form-group col-lg-12'><center><button onclick=validateEmployeeAttendance() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetAttendanceReset() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
   getLoggedInLocationInDropDown("LocationId","");
        //    getCityAutosalary();
        $("#empname").prop("readonly", true);
        $("#empcodem").prop("readonly", true);
        getEmployeeDataInSalIncDateWise();
        getFinancialYear("attendancemonth", "attendanceYear");
        // $("#ddoId").attr("onchange", "getEmployeeDataInSalIncDateWise()");
        $("#empcode").attr("onchange", "getEmpDemodetailsforEmployeeAttendance()");

//    $("#empcode").keypress(function (event) {
//        if (event.which == 13) {
//            getEmpDemodetailsforEmployeeAttendance()
//
//        }
//    });

//    setTimeout(function () {
//        ddoListEmployeeAttendance();
//    }, 100);
//        setTimeout(function () {
//            locationEmployeeList();
//        }, 200);
        setTimeout(function () {
            employeeDepartmentList();
        }, 300);
        setTimeout(function () {
            employeeDesignationList();
        }, 400);
        setTimeout(function () {
            employeeNatureTypeList();
        }, 500);
        setTimeout(function () {
            employeeCityList();
        }, 600);
        setTimeout(function () {
            employeePFTypeList();
        }, 700);
        setTimeout(function () {
            employeeFundType();
        }, 800);

        setTimeout(function () {
            employeeBudgetHeadList();
        }, 950);
        setTimeout(function () {
            // employeeYearList();
        }, 1000);

    }

}
$(document).on('change', '#attendanceYear', function () {
    var year = $("#attendanceYear").val();
    getFinancialMonth("attendancemonth", year);
});


//---------------------------------------------------------------- start validation------------------------------------------
function  getEmpDemodetailsforEmployeeAttendance()
{
    var ecode = $("#empcode").val();
    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function (pdata) {

        if (pdata == null || pdata == "" || pdata == 500)
        {
            displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
        } else {
            $('#empname').val(pdata[0].employeeName);
            $('#empcodem').val(pdata[0].employeeCodeM);
            $.get(server_base_url + "hrms/salary/Department/ViewList", {
            }).done(function (bdata) {

                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].department == bdata[i].department) {
                        $("#deptId").append("<option id=''value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].department + "</option>");
                    }
                }
            });
            $.get(server_base_url + "hrms/salary/Designation/ViewList", {
            }).done(function (bdata) {

                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].designation == bdata[i].designation) {
                        $("#desiId").append("<option id=''value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].designation + "</option>");
                    }
                }
            });
            $.get(server_base_url + "hrms/common/Nature/View", {
            }).done(function (bdata) {

                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].natureType == bdata[i].natureName) {
                        $("#natureId").append("<option id=''value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].natureName + "</option>");
                    }
                }
            });
            $.get(server_base_url + "budget/master/FundType/View", {
            }).done(function (bdata) {

                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].employeeFundType == bdata[i].description) {
                        $("#fundtypeId").append("<option id=''value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].description + "</option>");
                    }
                }
            });
            $.get(server_base_url + "hrms/common/BudgetHead/View", {
            }).done(function (bdata) {
                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].budgetHead == bdata[i].budgetHead) {
                        $("#budgetheadId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].budgetHead + "</option>");
                    }
                }
            });
            $.get(server_base_url + "hrms/salary/PFType/ViewList", {
            }).done(function (bdata) {
                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].pfType == bdata[i].PFType) {
                        $("#pfId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].PFType + "</option>");
                    }
                }
            });
            $.get(server_base_url + "hrms/salary/City/ViewList", {
            }).done(function (bdata) {
                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].postingCity == bdata[i].cityName) {
                        $("#cityid").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].cityName + "</option>");
                    }
                }
            });
            $('#LocationId').val(pdata[0].location);
        }

    });
}

//---------------------------------------------------- -------------------------------------------------------------------


function loadEmpcodeSearchFunctionalityforAutoSalary() {
    var ddo = $("#ddoId").val();
    $.get(server_base_url + "hrms/EmployeeMaster/GetEmpcode", {
        ddo: ddo
    }).done(function (pdata) {

        var availablecodes = [];
        for (var i = 0; i < pdata.length; i++)
        {
            availablecodes.push(pdata[i].employeeCode);
        }
        $("#empcode").autocomplete({
            source: availablecodes
        });
    });
}

//---------------------------------------------start appending all the drop down box----------------------------------------

function ddoListEmployeeAttendance() {
    $("#ddoId").text("").append("<option value='0'>----Select DDO----</option>");
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (pdata) {
        for (var i = 0; i < pdata.length; i++) {
            $("#ddoId").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
        }
    });
}

function   locationEmployeeList() {
    $("#LocationId").text("").append("<option value='0'>----Select Location----</option>");
    $.get(server_base_url + "/financial/account/Location/ViewList", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#LocationId").append("<option value='" + subData._id.$oid + "'>" + subData.locationName + "</option>");
            }
        }
    });
}

function  employeeDepartmentList() {
    $("#deptId").text("").append("<option value='0'>----Select Department----</option>");
    $.get(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function (bdata) {
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#deptId").append("<option id=''value='" + bdata[i]._id.$oid + "' >" + bdata[i].department + "</option>");
            }
    });
}

function  employeeDesignationList() {
    $("#desiId").text("").append("<option value='0'>----Select Designation----</option>");
    $.get(server_base_url + "hrms/salary/Designation/ViewList", {
    }).done(function (bdata) {

        if (bdata != null) {
            for (var i = 0; i < bdata.length; i++) {
                $("#desiId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].designation + "</option>");
            }
        }
    });
}

function  employeeNatureTypeList() {
    $("#natureId").text("").append("<option value='0'>----Select Nature Type----</option>");
    $.get(server_base_url + "hrms/common/Nature/View", {
    }).done(function (bdata) {

        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#natureId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].natureName + "</option>");
            }
    });
}


function  employeeCityList()
{
    $("#cityid").text("").append("<option value='0'>----Select City----</option>");
    $.get(server_base_url + "/hrms/salary/City/ViewList", {
    }).done(function (bdata) {
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#cityid").append("<option id=''value='" + bdata[i]._id.$oid + "' >" + bdata[i].cityName + "</option>");
            }
    });
}

function  employeePFTypeList() {
    $("#pfId").text("").append("<option value='0'>----Select PF Type----</option>");
    $.get(server_base_url + "hrms/salary/PFType/ViewList", {
    }).done(function (bdata) {
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#pfId").append("<option id=''value='" + bdata[i]._id.$oid + "' >" + bdata[i].PFType + "</option>");
            }
    });
}

function  employeeFundType() {
    $("#fundtypeId").text("").append("<option value='0'>----Select Fund Type----</option>");
    $.get(server_base_url + "budget/master/FundType/View", {
    }).done(function (bdata) {

        if (bdata != null) {
            if (bdata.length > 0)
                for (var i = 0; i < bdata.length; i++) {
                    $("#fundtypeId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
                }
        }
    });
}

//function  employeeMonthList() {
//    $("#attendancemonth").text("").append("<option value='0'>----Select Month ----</option><option value='1'> January </option>"
//            + "<option value='2'> February </option>"
//            + "<option value='3'> March </option>"
//            + "<option value='4'> April </option>"
//            + "<option value='5'> May </option>"
//            + "<option value='6'> June </option>"
//            + "<option value='7'> July </option>"
//            + "<option value='8'> August </option>"
//            + "<option value='9'> September </option>"
//            + "<option value='10'> October </option>"
//            + "<option value='11'> November </option>"
//            + "<option value='12'> December </option>");
//}

function  employeeBudgetHeadList() {
    $("#budgetheadId").text("").append("<option value='0'>----Select Budget Head----</option>");
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function (bdata) {

        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#budgetheadId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].budgetHead + "</option>");
            }
    });
}

//function  employeeYearList() {
//    $("#attendanceYear").text("").append("<option value='0'>----Select Year----</option>");
//    $("#attendanceYear").append("<option value='2016'>2016</option>");
//    $("#attendanceYear").append("<option value='2017'>2017</option>");
//    $("#attendanceYear").append("<option value='2018'>2018</option>");
//    $("#attendanceYear").append("<option value='2019'>2019</option>");
//    $("#attendanceYear").append("<option value='2020'>2020</option>");
//    $("#attendanceYear").append("<option value='2021'>2021</option>");
//    $("#attendancemonth").text("").append("<option value='0'>----Select Month ----</option>");
//    $("#attendancemonth").append("<option value='1'> January </option>");
//    $("#attendancemonth").append("<option value='2'> February </option>");
//    $("#attendancemonth").append("<option value='3'> March </option>");
//    $("#attendancemonth").append("<option value='4'> April </option>");
//    $("#attendancemonth").append("<option value='5'> May </option>");
//    $("#attendancemonth").append("<option value='6'> June </option>");
//    $("#attendancemonth").append("<option value='7'> July </option>");
//    $("#attendancemonth").append("<option value='8'> August </option>");
//    $("#attendancemonth").append("<option value='9'> September </option>");
//    $("#attendancemonth").append("<option value='10'> October </option>");
//    $("#attendancemonth").append("<option value='11'> November </option>");
//    $("#attendancemonth").append("<option value='12'> December </option>");
//
//}

//---------------------------------------------End appending all the drop down box----------------------------------------


//------------------------------------------------function---------------------------------------------------------
function getDetails() {

    if (event.which == 13) {
        getEmpDemodetailsforempattendance()

    }
}

function getEmpDemodetailsforempattendance()
{
    var ecode = $("#empcode").val();
    //alert(ecode);
    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function (pdata) {

        if (pdata == null || pdata == "" || pdata == 500)
        {
            displayLargeErrorMessages(successMsgDivCF, "" + noDataAvailable + "<br /><br />");
        } else {

            $('#empname').val(pdata[0].employeeName);
            $('#empcodem').val(pdata[0].employeeCodeM);

        }

    });
}


//------------------------------------------------function---------------------------------------------------------


//---------------------------------------Start search Form validation---------------------------------------------


function validateEmployeeAttendance()
{

    var ddo = $("#ddoId").val();
    var attendancemonth = $("#attendancemonth").val();
    var attendanceYear = $("#attendanceYear").val();
//    var bhead = $('#budgetheadId').val();
    if (ddo == "" || ddo == 0 || attendancemonth == "" || attendancemonth == 0 || attendanceYear == 0) {
        $("#employeeAttendanceProcessMessageDiv").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please enter * fields</strong><h5></div></center>");
        $("#ddoDiv").addClass('has-error');
        $("#attendancemonthDiv").addClass('has-error');
        $("#attendanceYearDiv").addClass('has-error');
        $("#processedButton").attr('disabled', false);
//        $("#mobileErr").append("Mobile Number should not be less then 10 digits");
    } else {
        $("#employeeAttendanceProcessMessageDiv").text("");
        $("#ddoDiv").removeClass('has-error');
        $("#attendancemonthDiv").removeClass('has-error');
        $("#attendanceYearDiv").removeClass('has-error');
        viewempsearchListforEmployeeAttendance()

    }
}

//---------------------------------------End  search Form validation---------------------------------------------




function viewempsearchListforEmployeeAttendance() {

    if (checkUserPrivelege(pvViewEmployeeAttendence)) {
        var attendancemonth = $("#attendancemonth").val();
        var attendanceYear = $("#attendanceYear").val();
        if (!isNaN(attendancemonth) && attendancemonth.length != 0) {
            attendancemonth = parseFloat(attendancemonth);
        }
        if (!isNaN(attendanceYear) && attendanceYear.length != 0) {
            attendanceYear = parseFloat(attendanceYear);
        }
        var employeeSearchJSON = {
            employeeCode: $("#empcode").val(),
            employeeCodeM: $("#empcodem").val(),
            employeeName: $("#empname").val(),
            ddo: $("#ddoId").val(),
            location: $("#LocationId").val(),
            department: $("#deptId").val(),
            designation: $("#desiId").val(),
            natureType: $("#natureId").val(),
            postingCity: $("#cityid").val(),
            pfType: $("#pfId").val(),
            fundType: $("#fundtypeId").val(),
            month: attendancemonth,
            year: attendanceYear,
            budgetHead: $("#budgetheadId").val()
        }
        var loginUserId = getUserSessionElement("userId");
        $.get(server_base_url + "Payroll/PayrollDetails/EmployeeAttendanceSearch", {
            processedBy: loginUserId,
            employeeJson: JSON.stringify(employeeSearchJSON),
            action: "view"
        }).done(function (data) {

            if (data == NoData) {
                $("#processedButton").attr('disabled', false);
                displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", NoDataFoundMessage + "");
            } else if (data == fail || data.statuscode == fail) {
                $("#processedButton").attr('disabled', false);
                displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", NoDataFoundMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                $("#processedButton").attr('disabled', false);
                displayErrMsgInTable("employeeAttendanceProcessMessageDiv", unauthorizedMessage);
            } else if (data == statusException || data.statuscode == statusException) {
                $("#processedButton").attr('disabled', false);
                displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession || data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                $("#processedButton").attr('disabled', false);
            } else {
                $("#processedButton").attr('disabled', false);
                var mainData = data.result;
                var unprocessData = mainData.notprocessed;
                var processData = mainData.processed;
                var lockedprocessData = mainData.lockedprocess;
            }
            setTimeout(function () {
                unProcessAttendanceList(unprocessData);
            }, 100);
            setTimeout(function () {
                ProcessAttendanceDiv();
            }, 100);
            setTimeout(function () {
                attendanceProcessed(processData);
                lockedAttendanceDiv();
            }, 100);
            setTimeout(function () {
                lockedEmployeeAttendance(lockedprocessData);
            }, 100);





        });
    } else {
        displayLargeErrorMessagesInCenterInRed("employeeAttendanceProcessMessageDiv", privilageNotExist);
    }
}

function unProcessAttendanceList(unprocessData) {
    if (checkUserPrivelege(pvViewEmployeeAttendence)) {

        $("#attendanceNotProcessedEmployeeList").text("").append('<div id="empSearchListPanel" class="panel panel-blue" />');
        $("#empSearchListPanel").append('<div id="empSearchListHeading" class="panel-heading" />');
        $("#empSearchListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee(Attendance Not Processed)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colEmpAttendenceUnprocess"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#empSearchListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#colEmpAttendenceUnprocess").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colEmpAttendenceUnprocess span").hasClass("glyphicon-minus-sign")) {
                $("#colEmpAttendenceUnprocess").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colEmpAttendenceUnprocess").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append('<div id="empSearchListBody" class = "panel-body pan" />');
        $("#empSearchListBody").append('<div id="panelRow" class="row" />');

        $("#empSearchListBody").append('<center><div id="empSearchListErrorMsgId" /></center>');
        $("#empSearchListBody").append('<div id="empSearchListMainBody" class="table-responsive" />');
        $("#empSearchListMainBody").append('<table id="empSearchTable" class="table table-striped table-bordered table-hover" />');
        $("#empSearchTable").append('<thead id="empSearchTableHeadId" />');
        $("#empSearchTable").append('<tbody id="empSearchTableBodyId" />');
        $("#empSearchTableHeadId").append('<tr><th><input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/> All</th><th>Employee Code</th><th>Employee Name</th><th>DDO</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th></tr>');
        if (unprocessData == NoDataFoundMessage || unprocessData == undefined) {
            $("#empSearchTable").dataTable().fnDestroy();
            displayErrMsgInTable("empSearchTable", NoDataFoundMessage);
        } else {
            var sno;
            for (var i = unprocessData.length - 1; i >= 0; i--) {
                sno++;
                var subData = unprocessData[i];
                $("#empSearchTableBodyId").append("<tr style='cursor:pointer;' >"
                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.employeeCode + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.ddo + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.location + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.department + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.designation + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.salaryType + "</td></tr>");

            }
            $("#empSearchTable").dataTable();
            $("#empSearchTable thead tr th:first input:checkbox").change(function () {
                $("#empSearchTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
            $("#empSearchTable tbody tr td:first-child input:checkbox").change(function () {
                var tot = $(".case").length;
                var tot_checked = $(".case:checked").length;
                if (tot != tot_checked) {
                    $("#selectall").prop('checked', false);
                }
            });
        }
    } else {
        displayLargeErrorMessagesInCenterInRed("empSearchTable", privilageNotExist);
    }
}
function ProcessAttendanceDiv() {
    $("#attendanceProcessedButtonDiv").text("").append("<div class='form-group col-lg-12'><center><button id='processedButton' onclick=processAttendance() class='btn btn-success'>Process</button></center></div>");
}
function lockedAttendanceDiv() {
    $("#attendanceUnProcessedButtonDiv").text("").append("<div class='form-group col-lg-12'><center><button id='unprocessedButton' onclick=unProcessAttendance() class='btn btn-warning'>Un Process</button></center></div>");

}
function processAttendance() {


    var attendanceJson = {};
    var checkedrowList = [];
    var length = $('#empSearchTable tr input[type="checkbox"][name="case"]:checked').length;
    if (length > 0) {
        $("#processedButton").attr('disabled', true);
        $('#empSearchTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
            var row = $(this).closest('tr');
            //We are sending List to backend
            checkedrowList.push({
                employeeCode: row.find('td:eq(1)').text(),
//        $(this).closest('tr').remove();
            });
        });

        attendanceJson = checkedrowList;
        $.post(server_base_url + "Payroll/PayrollDetails/EmpAttendance/Save", {
            processAttendance: JSON.stringify(attendanceJson),
            month: $("#attendancemonth").val(),
            year: $("#attendanceYear").val(),
            ddo: $("#ddoId").val(),
            loginId: getUserSessionElement(seUserId)
        }).done(function (data) {
            if (data.statuscode == NoData) {
                $("#processedButton").attr('disabled', false);
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", NoDataFoundMessage + "");
            }
            if (data == fail) {
                $("#processedButton").attr('disabled', false);
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", failMessage + "");
            } else if (data == unauthorized) {
                $("#processedButton").attr('disabled', false);
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                $("#processedButton").attr('disabled', false);
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                $("#processedButton").attr('disabled', false);
                callSessionTimeout();
            } else if (data == null) {
                $("#processedButton").attr('disabled', false);
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", "No User available" + "");
            } else if (data) {
                $("#processedButton").attr('disabled', false);
                displaySuccessMessages("empSearchListErrorMsgId", "Employee Attendance is successfully Processed", "");
                $('#empSearchTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
                    $(this).closest('tr').remove();
                });
                viewempsearchListforEmployeeAttendance();
                setTimeout(function () {
                    $("#empSearchListErrorMsgId").text("");
                }, 3000);
            }
        });
    } else {
        $("#processedButton").attr('disabled', false);
        //alert("please select row");
        displaySmallErrorMessagesInRed("empSearchListErrorMsgId", "Please select atleast one employee.");
    }
}


function attendanceProcessed(processData) {
    if (checkUserPrivelege(pvViewEmployeeAttendence)) {


        $("#attendanceProcessedEmployeeList").text("").append('<div id="attendanceproceesedListPanel" class="panel panel-blue" />');
        $("#attendanceproceesedListPanel").append('<div id="attendanceproceesedListHeading" class="panel-heading" />');
        $("#attendanceproceesedListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee(Attendance Processed)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colEmpListAttdenceList"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#attendanceproceesedListPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
        $("#colEmpListAttdenceList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colEmpListAttdenceList span").hasClass("glyphicon-minus-sign")) {
                $("#colEmpListAttdenceList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colEmpListAttdenceList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append('<div id="attendanceproceesedListBody" class = "panel-body pan" />');
        $("#attendanceproceesedListBody").append('<div id="panelRow" class="row" />');

        $("#attendanceproceesedListBody").append('<center><div id="attendanceproceesedListErrorMsgId"/></center>');
        $("#attendanceproceesedListBody").append('<div id="attendanceproceesedListMainBody" class="table-responsive" />');
        $("#attendanceproceesedListMainBody").append('<table id="attendanceproceesedTable" class="table table-striped table-bordered table-hover" />');
        $("#attendanceproceesedTable").append('<thead id="attendanceproceesedTableHeadId" />');
        $("#attendanceproceesedTable").append('<tbody id="attendanceproceesedTableBodyId" />');

        $("#attendanceproceesedTableHeadId").append('<tr><th><input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/> All</th><th>Employee Code</th><th>Employee Name</th><th>DDO</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th></tr>');

        if (processData == NoDataFoundMessage || processData == undefined) {
            $("#attendanceproceesedTable").dataTable().fnDestroy();
            displayErrMsgInTable("attendanceproceesedTable", NoDataFoundMessage);
        } else {
            var sno;
            for (var i = processData.length - 1; i >= 0; i--) {
                sno++;
                var subData = processData[i];

                $("#attendanceproceesedTableBodyId").append("<tr style='cursor:pointer;' >"
                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                        + "<td style='cursor:pointer;'><input type='hidden' value='" + subData.idStr + "'/>" + subData.employeeCode + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.ddo + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.location + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.department + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.designation + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.salaryType + "</td></tr>");

            }
            $("#attendanceproceesedTable").dataTable();
            $("#attendanceproceesedTable thead tr th:first input:checkbox").change(function () {
                $("#attendanceproceesedTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
            $("#attendanceproceesedTable tbody tr td:first-child input:checkbox").change(function () {
                var tot = $(".case").length;
                var tot_checked = $(".case:checked").length;
                if (tot != tot_checked) {
                    $("#selectall").prop('checked', false);
                }
            });

        }



    } else {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, privilageNotExist);
    }
}

function unProcessAttendance() {
    if (checkUserPrivelege(pvDeleteEmployeeAttendance)) {
        var ddo = $("#ddoId").val();
        var attendancemonth = $("#attendancemonth").val();
        var attendanceYear = $("#attendanceYear").val();

        if (ddo == "" || ddo == 0 || attendancemonth == "" || attendancemonth == 0 || attendanceYear == 0) {
            $("#employeeAttendanceProcessMessageDiv").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please enter * fields</strong><h5></div></center>");
            $("#ddoDiv").addClass('has-error');
            $("#attendancemonthDiv").addClass('has-error');
            $("#attendanceYearDiv").addClass('has-error');
//        $("#mobileErr").append("Mobile Number should not be less then 10 digits");
        } else {
            $("#employeeAttendanceProcessMessageDiv").text("");
            $("#ddoDiv").removeClass('has-error');
            $("#attendancemonthDiv").removeClass('has-error');
            $("#attendanceYearDiv").removeClass('has-error');

            var checkrowList = [];
            var attendanceJson = {};
            var length = $('#attendanceproceesedTable tr input[type="checkbox"][name="case"]:checked').length;
            if (length > 0) {
                $("#unprocessedButton").attr('disabled', true);
                $('#attendanceproceesedTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
                    var row = $(this).closest('tr');
                    //We are sending List to backend
                    checkrowList.push({
                        idStr: row.find('td:eq(1)').find('input[type="hidden"]').val(),
//        $(this).closest('tr').remove();
                    });
                });
                var loginUserId = getUserSessionElement("userId");
                attendanceJson = checkrowList;
                $.post(server_base_url + "payroll/attendance/Unprocess", {
                    unProcessAttendance: JSON.stringify(attendanceJson),
                    loginUserId: loginUserId,
                }).done(function (data) {
                    $("#unprocessedButton").attr('disabled', false);
                    viewempsearchListforEmployeeAttendance();
                    setTimeout(function () {
                        $("#empSearchListErrorMsgId").text("");
                    }, 1000);
                });
            } else {
                $("#unprocessedButton").attr('disabled', false);
                //alert("please select row");
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", "Please select atleast one employee.");
            }
        }
    } else {
        displayLargeErrorMessagesInCenterInRed("empSearchListErrorMsgId", privilageNotExist);
    }
}


function lockedEmployeeAttendance(lockedData) {
    if (checkUserPrivelege(pvViewEmployeeAttendence)) {

        $("#attendanceLockedEmployeeList").text("").append('<div id="attendanceLockedListPanel" class="panel panel-blue" />');
        $("#attendanceLockedListPanel").append('<div id="attendanceLockedListHeading" class="panel-heading" />');
        $("#attendanceLockedListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee(Attendance Locked)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="empLockedAttendence"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#attendanceLockedListPanel").append('<div id="collapseOne4" class="panel-collapse collapse in pal" />');
        $("#empLockedAttendence").click(function () {
            $("#collapseOne4").toggle();
            if ($("#empLockedAttendence span").hasClass("glyphicon-minus-sign")) {
                $("#empLockedAttendence").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#empLockedAttendence").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne4").append('<div id="attendanceLockedListBody" class = "panel-body pan" />');
        $("#attendanceLockedListBody").append('<div id="panelRow" class="row" />');

        $("#attendanceLockedListBody").append('<center><div id="attendanceLockedListErrorMsgId" /></center>');
        $("#attendanceLockedListBody").append('<div id="attendanceLockedListMainBody" class="table-responsive" />');
        $("#attendanceLockedListMainBody").append('<table id="attendanceLockedTable" class="table table-striped table-bordered table-hover" />');
        $("#attendanceLockedTable").append('<thead id="attendanceLockedTableHeadId" />');
        $("#attendanceLockedTable").append('<tbody id="attendanceLockedTableBodyId" />');
        $("#attendanceLockedTableHeadId").append('<tr><th>S.No</th><th>Employee Code</th><th>Employee Name</th><th>DDO</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th></tr>');
        var sno = 0;

        if (lockedData == NoDataFoundMessage || lockedData == undefined) {

            displayErrMsgInTable("attendanceLockedTable", NoDataFoundMessage);
        } else {
            for (var i = lockedData.length - 1; i >= 0; i--) {
                sno++;
                var subData = lockedData[i];

                $("#attendanceLockedTableBodyId").append("<tr style='cursor:pointer;' >"
                        + "<td style='cursor:pointer;'>" + sno + "</td>"
                        + "<td style='cursor:pointer;'><input type='hidden' value='" + subData.idStr + "'/>" + subData.employeeCode + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.ddo + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.location + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.department + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.designation + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.salaryType + "</td></tr>");

            }
            $("#attendanceLockedTable").dataTable();
        }
    } else {
        displayLargeErrorMessagesInCenterInRed("attendanceLockedTable", privilageNotExist);
    }
}



function resetAttendanceReset() {
//    $("#employeeAttendanceProcessMessageDiv").text("");
//    $("#ddoDiv").removeClass('has-error');
//    $("#attendancemonthDiv").removeClass('has-error');
//    $("#attendanceYearDiv").removeClass('has-error');
//    $("#empcode").val("");
//    $("#empcodem").val("");
//    $("#empname").val("");
//    $("#ddoId").val('0');
//    $("#LocationId").val('0');
//    $("#deptId").val('0');
//    $("#desiId").val('0');
//    $("#natureId").val('0');
//    $("#cityid").val('0');
//    $("#pfId").val('0');
//    $("#fundtypeId").val('0');
//    $("#attendancemonth").val('0');
//    $("#attendanceYear").val('0');
//    $("#budgetheadId").val('0');
    payrollEmployeeAttendanceMaster("dashboardBodyMainDiv");

}
