/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function payrollAttendanceAdjustmentMaster(divId) {
    if (checkUserPrivelege(pvCreateAttendanceAdjustment)) {
        var financialYear = getUserSessionElement(seCurrentFinancialYear);
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a>><a href="javascript:void(0)" onclick="payrollAttendanceAdjustmentMaster("dashboardBodyMainDiv)" data-toggle="tab">Employee Attendance Adjustment</a>');
        $("#" + divId).text("").append('<div id="employeeAttendanceAdjProcessDivId"></div>');
        $("#employeeAttendanceAdjProcessDivId").text("").append('<div id="employeeAttendanceAdjProcessTabMenu" />');

        $("#employeeAttendanceAdjProcessTabMenu").append('<div id="employeeAttendanceAdjProcessMainMenu" class="row" />');
        $("#employeeAttendanceAdjProcessTabMenu").append('<div id="attendanceAdjProcessedEmployeeList" class="row" />');
        $("#employeeAttendanceAdjProcessMainMenu").append('<div id="employeeAttendanceAdjProcessMainPanel" class="panel panel-blue" />');
        $("#employeeAttendanceAdjProcessMainPanel").append('<div id="employeeAttendanceAdjProcessMainHeading" class="panel-heading" />');
        $("#employeeAttendanceAdjProcessMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Attendance Adjustment</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="empAttendenceAdjustment"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#employeeAttendanceAdjProcessMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#empAttendenceAdjustment").click(function () {
            $("#collapseOne1").toggle();
            if ($("#empAttendenceAdjustment span").hasClass("glyphicon-minus-sign")) {
                $("#empAttendenceAdjustment").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colPempAttendenceAdjustmentFType").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="employeeAttendanceAdjProcessMainBody" class = "panel-body pan" />');
        $("#employeeAttendanceAdjProcessMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#employeeAttendanceAdjProcessMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#employeeAttendanceAdjProcessMainBody").append('<center><span id="employeeAttendanceAdjProcessMessageDiv"></span></center>');
        $("#employeeAttendanceAdjProcessMainBody").append('<div id="employeeAttendanceAdjProcessBodyDiv" class="row" />');

        $("#employeeAttendanceAdjProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ddoDiv"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" name="ddoId" id="ddoId"></select><span id="ddoErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employCode">Employee Code </label><select  id="empcode" class="form-control"></select><span id="empCodeErr" class="text-danger"></span></div></div>');
        $("#employeeAttendanceAdjProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employeeName">Employee Name </label><input type="text" id="empname" class="form-control"/><span id="empNameErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="empCodeM">Employee Code(M) </label><input type="text" id="empcodem" class="form-control" /><span id="empCodeMErr" class="text-danger"></span></div></div>');
        $("#employeeAttendanceAdjProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="LocationId" id="LocationId"></select><span id="locationErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="deptId" id="deptId"></select><span id="departmentErr" class="text-danger"></span></div></div>');

        getLoggedInLocationInDropDown("LocationId","");

        $("#employeeAttendanceAdjProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="desiId" id="desiId"></select><span id="designationErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureId" id="natureId"></select><span id="natureTypeErr" class="text-danger"></span></div></div>');
        $("#employeeAttendanceAdjProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="cityid" id="cityid"></select><span id="postingCityError" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="pfType">PF Type </label><select class="form-control" name="pfId" id="pfId"></select><span id="pfTypeError" class="text-danger"></span></div></div>');
        $("#employeeAttendanceAdjProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="budgetHead">Budget Head </label><select class="form-control" name="budgetheadId" id="budgetheadId"></select><span id="budgetHeadErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for=" employeeFundType">Fund type </label><select class="form-control" name="fundtypeId" id="fundtypeId"></select><span id=" employeeFundTypeErr" class="text-danger"></span></div></div>');
        $("#employeeAttendanceAdjProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="yearDiv"><label for="year">Year <span class="require">*</span></label><select class="form-control" name="year" id="year"></select><span id="yearErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6" id="monthDiv"><label for="month">Month <span class="require">*</span></label><select class="form-control" name="month" id="month"></select><span id="monthErr" class="text-danger"></span></div></div>');
//    $("#employeeAttendanceAdjProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="year">Year <span class="require">*</span></label><select class="form-control" name="year" id="year"></select><span id="yearErr" class="text-danger"></span></div></div>');
        $("#employeeAttendanceAdjProcessBodyDiv").append("<div class='form-group col-lg-12'><center><button onclick=validateEmployeeAttendanceAdj() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetAttendanceAdjReset() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
        getLoggedInDDOInDropDown("ddoId", "");
        getEmployeeDataInSalIncDateWise();
        //    getCityAutosalary();
        $("#empname").prop("readonly", true);
        $("#empcodem").prop("readonly", true);

//    $("#empcode").keypress(function (event) {
//        if (event.which == 13) {
//            getEmpDemodetailsforEmployeeAttendance()
//
//        }
//    });
        // $("#ddoId").attr("onchange", "getEmployeeDataInSalIncDateWise()");
        $("#empcode").attr("onchange", "getEmpDemodetailsforEmployeeAttendance()");
        getFinancialYear("month", "year");

//        setTimeout(function () {
//            ddoListEmployeeAttendance();
//        }, 100);
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
//    setTimeout(function () {
//        employeeMonthList();
//    }, 900);
        setTimeout(function () {
            employeeBudgetHeadList();
        }, 950);
//    setTimeout(function () {
//        employeeYearList();
//    }, 1000);
    }
}

$(document).on('change', '#year', function () {
    var year = $("#year").val();
    getFinancialMonth("month", year);
});

function validateEmployeeAttendanceAdj()
{
    var ddo = $("#ddoId").val();
    var month = $("#month").val();
    var year = $("#year").val();
//    var bhead = $('#budgetheadId').val();
    if (ddo == "" || ddo == 0 || month == "" || month == 0 || year == 0) {
        $("#employeeAttendanceAdjProcessMessageDiv").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please enter * fields</strong><h5></div></center>");
        $("#ddoDiv").addClass('has-error');
        $("#monthDiv").addClass('has-error');
        $("#yearDiv").addClass('has-error');
//        $("#mobileErr").append("Mobile Number should not be less then 10 digits");
    } else {
        $("#employeeAttendanceAdjProcessMessageDiv").text("");
        $("#ddoDiv").removeClass('has-error');
        $("#monthDiv").removeClass('has-error');
        $("#yearDiv").removeClass('has-error');
        viewattenadjsearchList();
    }
}

function viewattenadjsearchList()
{
    if (checkUserPrivelege(pvViewAttendanceAdjustment)) {
        //alert(Ddo+Month+Year);
        $("#attendanceAdjProcessedEmployeeList").text("").append("<div id='employeeAttendanceAdjListPanel' class='panel panel-blue' />");
        $("#employeeAttendanceAdjListPanel").append("<div id='employeeAttendanceAdjListPanelHeading' class='panel-heading' />");
        $("#employeeAttendanceAdjListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Employee(Attendance  Marked)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='empMarkedAttendence'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");

        $("#employeeAttendanceAdjListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#empMarkedAttendence").click(function () {
            $("#collapseOne3").toggle();
            if ($("#empMarkedAttendence span").hasClass("glyphicon-minus-sign")) {
                $("#empMarkedAttendence").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#empMarkedAttendence").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<span style='color:#bf4346'>[Note PBS/P:Present Before Suspended/Promotion And PAS/P:Present After Suspended/Promotion And SD:Stop All deductions]</span>");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div><center><span id='msgDiv'></span></center></div>");
        $("#listpanelRow").append("<div id='sectionlistpanelRow' class='table-responsive' style='overflow-x:auto;'/>");

        $("#sectionlistpanelRow").text("").append("<div id='displaySectionDiv' class = 'panel panel-primary-head'></div>");
        $("#displaySectionDiv").append("<table id='employeeAttendanceAdjTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");
        // pqrs table header


        $("#employeeAttendanceAdjTable").append("<thead class=''><tr>"
                //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"

                + "<th><input type='checkbox' style='width:15px;height:15px;align:center' id='selectall'/> All</th>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code(M)</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Location</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Designation</th>"
                + "<th style='min-width:1%;width:20px;'><i class='fa'></i>T Days</th>"
                + "<th style='min-width:1%;width:20px;'><i class='fa'></i>Present</th>"
                + "<th style='min-width:1%;width:20px;'><i class='fa'></i>SL</th>"
                + "<th style='min-width:1%;width:20px;'><i class='fa'></i>LWP</th>"
                + "<th style='min-width:1%;width:20px;'><i class='fa'></i>PBS/P</th>"
                + "<th style='min-width:1%;width:20px;'><i class='fa'></i>PAS/P</th>"
                + "<th style='min-width:1%;width:20px;'><i class='fa'></i>SD</th>"
                + "<th style='min-width:1%;width:20px;'><i class='fa'></i>Remarks</th>"
                + "</tr></thead>");




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
            month: $("#month").val(),
            year: $("#year").val(),
            budgetHead: $("#budgetheadId").val()
        }
        var loginUserId = getUserSessionElement("userId");

        $.post(server_base_url + "payroll/payrolldetails/attendanceadj/Search", {
            processedBy: loginUserId,
            employeeJson: JSON.stringify(employeeSearchJSON),
            action: "view"
        }).done(function (pdata) {
            if (pdata == emptyListMessage) {
                // displaySmallErrorMessagesInRed("employeeAttendanceAdjProcessMessageDiv", NoDataFoundMessage + "");
                $("#employeeAttendanceAdjTable").dataTable().fnDestroy();
                displayErrMsgInTable("employeeAttendanceAdjTable", NoDataFoundMessage);
            } else if (pdata == fail || pdata.statuscode == fail) {
                displaySmallErrorMessagesInRed("employeeAttendanceAdjProcessMessageDiv", NoDataFoundMessage + "");
            } else if (pdata == unauthorized || pdata.statuscode == unauthorized) {
                displayErrMsgInTable("employeeAttendanceAdjProcessMessageDiv", unauthorizedMessage);
            } else if (pdata == statusException || pdata.statuscode == statusException) {
                displaySmallErrorMessagesInRed("employeeAttendanceAdjProcessMessageDiv", statusExceptionMessage + "");
            } else if (pdata == invalidSession || pdata.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (pdata == null) {
            } else {

                var sno = 0;
                $("#employeeAttendanceAdjTable").append("<tbody id='displayCategoryTableBody' class='table-striped table-bordered' />");
                var sno = 0;
                var mainData = pdata.result;
                //console.log(JSON.stringify(mainData));
                var attendanceAdjData = mainData.attendanceadjview;
                if (attendanceAdjData != emptyListMessage) {
                    if (attendanceAdjData.length > 0) {
                        for (var i = attendanceAdjData.length - 1; i >= 0; i--) {
                            sno++;
                            var subData = attendanceAdjData[i];
                            var sd = subData.sd;
                            var isSupspend = subData.isSuspended;
                            // console.log(sd);
                            var isSd;
                            if (sd) {
                                isSd = "checked";
                            } else {
                                isSd = "";
                            }
                            var dis = "";
                            var isCondition = subData.isSuspended;
                            var pas = subData.pasP;
                            var pbs = subData.pbsP;
                            var attendanceFlag = subData.isattendanceAdjFlag;
                            var dissL = "";
                            if (isCondition) {
                                if (attendanceFlag) {
                                    dis = "disabled";
                                    dissL = "disabled";
                                }
                            }

                            if (isCondition) {
                                if (!attendanceFlag) {
                                    dissL = "";
                                }
                            }
                            if (!isCondition) {
                                if (!attendanceFlag) {
                                    dis = "disabled";
                                }
                            }
                            $("#displayCategoryTableBody").append("<tr id='" + subData.idStr + "'  class='inputval' style='cursor:pointer;' >"
                                    + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"  value="' + subData.idStr + '"/>' + "</td>"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + subData.employeeCodeM + "</td>"
                                    + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                                    + "<td style='cursor:pointer;'>" + subData.location + "</td>"
                                    + "<td style='cursor:pointer;'>" + subData.designation + "</td>"
                                    + "<td style='cursor:pointer;' class='totalDays'>" + subData.totalDays + "</td>"
                                    + "<td style='cursor:pointer;'>" + ' <input type="text" style="min-width:1%;width:30px;" onkeypress="return validateNumber(event)"  maxlength="2"  class="inputvalpresent"  ' + dis + ' value=' + subData.present + ' >' + "</td>"
                                    + "<td style='cursor:pointer;'>" + ' <input type="text" style="min-width:1%;width:30px;"  onkeypress="return validateNumber(event)" maxlength="2"  class="inputvalSickLeave"   value=' + subData.sickLeave + '>' + "</td>"
                                    + "<td style='cursor:pointer;'>" + ' <input type="text" style="min-width:1%;width:30px;" onkeypress="return validateNumber(event)" maxlength="2"  class="inputvalLWP"   value=' + subData.leaveWithoutPay + '>' + "</td>"
                                    + "<td style='cursor:pointer;'>" + ' <input type="text" style="min-width:1%;width:30px;"  onkeypress="return validateNumber(event)" maxlength="2" ' + dis + ' value=' + subData.pbsP + '>' + "</td>"
                                    + "<td style='cursor:pointer;'>" + ' <input type="text" style="min-width:1%;width:30px;" onkeypress="return validateNumber(event)"  maxlength="2"   value=' + subData.pasP + ' >' + "</td>"
                                    + "<td style='cursor:pointer;'>" + ' <input type="checkbox" style="min-width:1%;width:30px;"  ' + isSd + ' value=' + subData.sd + '>' + "</td>"
                                    + "<td style='cursor:pointer;'>" + ' <input type="text" style="min-width:1%;width:80px;"  value=' + subData.remarks + '>' + "</td></tr>");
                        }
                    }
                }
            }
            $("#employeeAttendanceAdjTable").dataTable();
            $("#employeeAttendanceAdjTable thead tr th:first input:checkbox").change(function () {
                $("#employeeAttendanceAdjTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
            $('#employeeAttendanceAdjTable tr input[type="text"]').change(function () {

                var row = $(this).closest('tr');

                var sl = row.find('td:eq(8)').find('input').val();
                var lwp = row.find('td:eq(9)').find('input').val();
                var total = row.find('td:eq(6)').text();
                if (!isNaN(lwp) && lwp.length != 0 && lwp != undefined) {
                    lwp = parseFloat(lwp);
                }
                if (sl.length != 0 && sl != undefined) {
                    sl = parseFloat(sl);
                }
                if (total.length != 0) {
                    total = parseFloat(total);
                }
                // var present = total - (sl + lwp);
                // row.find('td:eq(7)').find('input').val(present);

                var pbs = row.find('td:eq(10)').find('input').val();
                var pas = row.find('td:eq(11)').find('input').val();
                if (!isNaN(pbs) && pbs.length != 0 && pbs != undefined) {

                    pbs = parseFloat(pbs);
                }
                if (!isNaN(pas) && pas.length != 0 && pas != undefined) {

                    pas = parseFloat(pas);
                }
                if (pbs > 0 && pas > 0) {
                    var present = (pbs + pas - lwp);
                    row.find('td:eq(7)').find('input').val(present);

                } else if (pbs > 0 || pas > 0) {
                    var present = (pbs + pas - lwp);
                    row.find('td:eq(7)').find('input').val(present);
                } else {
                    var present = total - lwp;
                    row.find('td:eq(7)').find('input').val(present);
                }

            });
            $("#employeeAttendanceAdjTable tbody tr td:first-child input:checkbox").change(function () {
                var tot = $(".case").length;
                var tot_checked = $(".case:checked").length;
                if (tot != tot_checked) {
                    $("#selectall").prop('checked', false);
                }
            });
        });
        $("#displaySectionDiv").append("<div id='Button' />");
        $("#Button").append("<center><button class='btn btn-success mr5' id='saveattendance' onclick='SaveAttendanceadj()'>Save</button>&nbsp&nbsp&nbsp<button class='btn btn-warning mr5'  style='padding-left: 2px;' onclick='ReturnAttendanceadj()'>Return</button></center>");
    }


}


function SaveAttendanceadj() {
    if (checkUserPrivelege(pvCreateAttendanceAdjustment)) {
        $("#saveattendance").attr('disabled', true);
        var attendanceAdjJson = {};
        var checkedrowList = [];


        var result = 0;

        $('#employeeAttendanceAdjTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
            var inputDays = 0;

            var row = $(this).closest('tr');

            var sl = row.find('td:eq(8)').find('input').val();
            var lwp = row.find('td:eq(9)').find('input').val();
            var present = row.find('td:eq(7)').find('input').val();
            var pbs = row.find('td:eq(10)').find('input').val();
            var pas = row.find('td:eq(11)').find('input').val();
            var inputPresentDays = 0;
            if (pbs == 0 && pbs == 0) {
                if (!isNaN(present) && present.length != 0 && present != undefined) {
                    inputPresentDays += parseFloat(present);

                }
                if (!isNaN(lwp) && lwp.length != 0 && lwp != undefined) {

                    inputPresentDays += parseFloat(lwp);
                }
            }

//
//        if (!isNaN(pbs) && pbs.length != 0 && pbs != undefined) {
//
//            inputDays += parseFloat(pbs);
//        }
//        if (!isNaN(pas) && pas.length != 0 && pas != undefined) {
//
//            inputDays += parseFloat(pas);
//        }
            if (!isNaN(present) && present.length != 0 && present != undefined) {
                inputDays += parseFloat(present);

            }
//        if (!isNaN(lwp) && lwp.length != 0 && lwp != undefined) {
//
//            inputDays += parseFloat(lwp);
//        }
//        if (!isNaN(sl) && sl.length != 0 && sl != undefined) {
//            inputDays += parseFloat(sl);
//        }

            var totaldays = row.find('td:eq(6)').text();
            var totalD = 0;
            if (!isNaN(totaldays) && totaldays.length != 0) {
                totalD += parseFloat(totaldays);
            }
            if ((totalD != inputDays)) {
                if (totalD != inputPresentDays) {
                    result = 1;
                    displaySmallErrorMessagesInRed("msgDiv", "Incorrect Data" + "");
                    row.find('td:eq(7)').css({'background-color': 'yellow'});
                    row.find('td:eq(8)').css({'background-color': 'yellow'});
                    row.find('td:eq(9)').css({'background-color': 'yellow'});
                    row.find('td:eq(10)').css({'background-color': 'yellow'});
                    row.find('td:eq(11)').css({'background-color': 'yellow'});
                }
            }

//        if (pbs > 0 && pas > 0) {
//            result = 1;
//            displaySmallErrorMessagesInRed("msgDiv", "Incorrect Data" + "");
//            row.find('td:eq(10)').css({'background-color': 'yellow'});
//            row.find('td:eq(11)').css({'background-color': 'yellow'});
//        }
        });

        attendanceAdjJson = checkedrowList;
        var ddo = $("#ddoId").val();
        var month = $("#month").val();
        var year = $("#year").val();
//    var bhead = $('#budgetheadId').val();
        if (ddo == "" || ddo == 0 || month == "" || month == 0 || year == 0) {
            $("#employeeAttendanceAdjProcessMessageDiv").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please enter * fields</strong><h5></div></center>");
            $("#ddoDiv").addClass('has-error');
            $("#monthDiv").addClass('has-error');
            $("#yearDiv").addClass('has-error');
            $("#saveattendance").attr('disabled', false);
//        $("#mobileErr").append("Mobile Number should not be less then 10 digits");
        } else {
            $("#employeeAttendanceAdjProcessMessageDiv").text("");
            $("#ddoDiv").removeClass('has-error');
            $("#monthDiv").removeClass('has-error');
            $("#yearDiv").removeClass('has-error');
            if (result != 1) {
                $("#msgDiv").text("");
                var length = $('#employeeAttendanceAdjTable tr input[type="checkbox"][name="case"]:checked').length;
                if (length > 0) {
                    $("#saveattendance").attr('disabled', true);
                    $('#employeeAttendanceAdjTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
                        var row = $(this).closest('tr');
                        var present = 0;
                        var pbsP = 0;
                        var pasP = 0;
                        var sickLeave = 0;
                        var leaveWithoutPay = 0;
                        if (row.find('td:eq(7)').find('input').val() != '' && row.find('td:eq(7)').find('input').val() != undefined && row.find('td:eq(7)').find('input').val() != 0) {
                            present = row.find('td:eq(7)').find('input').val();
                        }
                        if (row.find('td:eq(10)').find('input').val() != '' && row.find('td:eq(10)').find('input').val() != undefined && row.find('td:eq(10)').find('input').val() != 0) {
                            pbsP = row.find('td:eq(10)').find('input').val();
                        }
                        if (row.find('td:eq(11)').find('input').val() != '' && row.find('td:eq(11)').find('input').val() != undefined && row.find('td:eq(11)').find('input').val() != 0) {
                            pasP = row.find('td:eq(11)').find('input').val();
                        }
                        if (row.find('td:eq(8)').find('input').val() != '' && row.find('td:eq(8)').find('input').val() != undefined && row.find('td:eq(8)').find('input').val() != 0) {
                            sickLeave = row.find('td:eq(8)').find('input').val();
                        }
                        if (row.find('td:eq(9)').find('input').val() != '' && row.find('td:eq(9)').find('input').val() != undefined && row.find('td:eq(9)').find('input').val() != 0) {
                            leaveWithoutPay = row.find('td:eq(9)').find('input').val();
                        }
                        checkedrowList.push({
                            idStr: row.find('td:eq(0)').find('input[type="checkbox"]').val(),
                            employeeCodeM: row.find('td:eq(1)').text(),
                            employeeName: row.find('td:eq(2)').text(),
                            sickLeave: sickLeave,
                            leaveWithoutPay: leaveWithoutPay,
                            present: present,
                            pbsP: pbsP,
                            pasP: pasP,
                            sd: row.find('td:eq(12)').find('input[type="checkbox"]').is(':checked'),
                            remarks: row.find('td:eq(13)').find('input').val(),
                        });
                    });
                    var loginUserId = getUserSessionElement("userId");
                    $.post(server_base_url + "payroll/payrolldetails/attendance/Adjustment", {
                        processedBy: loginUserId,
                        employeeJson: JSON.stringify(checkedrowList)
                    }).done(function (data) {
                        if (data.statuscode == NoData) {
                            //displaySmallErrorMessagesInRed("employeeAttendanceAdjProcessMessageDiv", NoDataFoundMessage + "");
                            $("#employeeAttendanceAdjTable").dataTable().fnDestroy();
                            displayErrMsgInTable("employeeAttendanceAdjTable", NoDataFoundMessage);
                        }
                        if (data == fail || data.statuscode == fail) {
                            $("#saveattendance").attr('disabled', false);
                            displaySmallErrorMessagesInRed("employeeAttendanceAdjProcessMessageDiv", failMessage + "");
                        } else if (data == unauthorized || data.statuscode == unauthorized) {
                            $("#saveattendance").attr('disabled', false);
                            displaySmallErrorMessagesInRed("employeeAttendanceAdjProcessMessageDiv", unauthorizedMessage + "");
                        } else if (data == statusException || data.statuscode == statusException) {
                            $("#saveattendance").attr('disabled', false);
                            displaySmallErrorMessagesInRed("employeeAttendanceAdjProcessMessageDiv", statusExceptionMessage + "");
                        } else if (data == invalidSession || data.statuscode == invalidSession) {
                            callSessionTimeout();
                        } else if (data == null) {
                            $("#saveattendance").attr('disabled', false);
                            displaySmallErrorMessagesInRed("msgDiv", "No User available" + "");
                        } else if (data) {
                            $("#saveattendance").attr('disabled', false);
                            viewattenadjsearchList();
                            displaySuccessMessages("msgDiv", "Attendance is successfully updated", "");
                            $('#employeeAttendanceAdjTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
                                $(this).closest('tr').remove();
                            });
                            setTimeout(function () {
                                $("#msgDiv").text("");
                            }, 2000);
                        }
                    });
                } else {
                    $("#saveattendance").attr('disabled', false);
                    alert("please select the row");
                }
            } else {
                $("#saveattendance").attr('disabled', false);
            }
        }
    }
}

function resetAttendanceAdjReset() {
//    $("#employeeAttendanceAdjProcessMessageDiv").text("");
//    $("#ddoDiv").removeClass('has-error');
//    $("#monthDiv").removeClass('has-error');
//    $("#yearDiv").removeClass('has-error');
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
//    $("#month").val('0');
//    $("#year").val('0');
//    $("#budgetheadId").val('0');
    payrollAttendanceAdjustmentMaster("dashboardBodyMainDiv");

}

function ReturnAttendanceadj() {
    viewattenadjsearchList();
}