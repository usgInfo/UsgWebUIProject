function payrollAutoSalaryProcess(divId) {
    if (checkUserPrivelege(pvCreateAutoSalary)) {
        var financialYear = getUserSessionElement(seCurrentFinancialYear);
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a>><a href="javascript:void(0)" onclick="payrollAutoSalaryProcess()" data-toggle="tab">Auto Salary Process</a>');
        $("#" + divId).text("").append('<div id="autoSalaryProcessDivId"></div>');
        $("#autoSalaryProcessDivId").text("").append('<div id="autoSalaryProcessTabMenu" />');

        $("#autoSalaryProcessTabMenu").append('<div id="autoSalaryProcessMainMenu" class="row" />');
        $("#autoSalaryProcessTabMenu").append('<div id="salaryNotProcessedEmployeeList" class="row" />');
        $("#autoSalaryProcessTabMenu").append('<div id="salaryProcessedEmployeeList" class="row" />');
        $("#autoSalaryProcessTabMenu").append('<div id="salaryLockedEmployeeList" class="row" />');

        $("#autoSalaryProcessMainMenu").append('<div id="autoSalaryProcessMainPanel" class="panel panel-blue" />');
        $("#autoSalaryProcessMainPanel").append('<div id="autoSalaryProcessMainHeading" class="panel-heading" />');
        $("#autoSalaryProcessMainHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Auto Salary Process</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colAutoSalaryProcess"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#autoSalaryProcessMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colAutoSalaryProcess").click(function() {
            $("#collapseOne1").toggle();
            if ($("#colAutoSalaryProcess span").hasClass("glyphicon-minus-sign")) {
                $("#colAutoSalaryProcess").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colAutoSalaryProcess").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });

        $("#collapseOne1").append('<div id="autoSalaryProcessMainBody" class = "panel-body pan" />');
        $("#autoSalaryProcessMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#autoSalaryProcessMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#autoSalaryProcessMainBody").append('<center><span id="autoSalaryProcessMessageDiv"></span></center>');
        $("#autoSalaryProcessMainBody").append('<div id="autoSalaryProcessBodyDiv" class="row" />');

        //pay stop checkbox
        $("#autoSalaryProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"/>'
                + '<div class="form-group col-lg-6"><span style="float:right;"><label>Pay Stop Salary</label>&nbsp;<input type="checkbox" onchange="payStopSalaryYearAndMonth()" id="salaryProcessType" style="height:20px;width:20px;" /></span></div>');

        $("#autoSalaryProcessBodyDiv").append('<div class="col-lg-12">'
                + '<div class="form-group col-lg-6" id="ddoDiv"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" name="ddoId" id="ddoId"></select><span id="ddoErr" class="text-danger"></span></div>'
                + '<div class="form-group col-lg-6"><label for="employCode">Employee Code </label><select type="text" id="empcode" class="form-control"></select><span id="empCodeErr" class="text-danger"></span></div></div>');

        getLoggedInDDOInDropDown("ddoId", "");
        $("#autoSalaryProcessBodyDiv").append('<div class="col-lg-12">'
                + '<div class="form-group col-lg-6"><label for="employeeName">Employee Name </label><input type="text" id="empname" class="form-control"/><span id="empNameErr" class="text-danger"></span></div>'
                + '<div class="form-group col-lg-6"><label for="empCodeM">Employee Code(M) </label><input type="text" id="empcodem" class="form-control" /><span id="empCodeMErr" class="text-danger"></span></div></div>');
        $("#autoSalaryProcessBodyDiv").append('<div class="col-lg-12">'
                + '<div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="LocationId" id="LocationId"></select><span id="locationErr" class="text-danger"></span></div>'
                + '<div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="deptId" id="deptId"></select><span id="departmentErr" class="text-danger"></span></div></div>');

        getLoggedInLocationInDropDown("LocationId", "");
        $("#autoSalaryProcessBodyDiv").append('<div class="col-lg-12">'
                + '<div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="desiId" id="desiId"></select><span id="designationErr" class="text-danger"></span></div>'
                + '<div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureId" id="natureId"></select><span id="natureTypeErr" class="text-danger"></span></div></div>');
        $("#autoSalaryProcessBodyDiv").append('<div class="col-lg-12">'
                + '<div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="cityid" id="cityid"></select><span id="postingCityError" class="text-danger"></span></div>'
                + '<div class="form-group col-lg-6"><label for="pfType">PF Type </label><select class="form-control" name="pfId" id="pfId"></select><span id="pfTypeError" class="text-danger"></span></div></div>');
        $("#autoSalaryProcessBodyDiv").append('<div class="col-lg-12">'
                + '<div class="form-group col-lg-6" id="yearDiv"><label for="year">Salary Year <span class="require">*</span></label><select class="form-control" name="year" id="year"></select><span id="yearErr" class="text-danger"></span></div>'
                + '<div class="form-group col-lg-6"><label for="fundType">Fund type </label><select class="form-control" name="fundtypeId" id="fundtypeId"></select><span id="fundTypeErr" class="text-danger"></span></div></div>');
        $("#autoSalaryProcessBodyDiv").append('<div class="col-lg-12">'
                + '<div class="form-group col-lg-6" id="monthDiv"><label for="month">Salary Month <span class="require">*</span></label><select class="form-control" name="month" id="month"></select><span id="monthErr" class="text-danger"></span></div>'
                + '<div class="form-group col-lg-6"><label for="budgetHead">Budget Head </label><select class="form-control" name="budgetheadId" id="budgetheadId"></select><span id="budgetHeadErr" class="text-danger"></span></div></div>');
        $("#autoSalaryProcessBodyDiv").append('<div class="col-lg-12" id="payStopYearDisplayDiv" />');
        $("#autoSalaryProcessBodyDiv").append('<div class="col-lg-12" id="payStopMonthDisplayDiv" />');

        $("#autoSalaryProcessBodyDiv").append("<div class='form-group col-lg-12'><center><button onclick=validateSalarySearch() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetSearchEmployees() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
        $("#autoSalaryProcessBodyDiv").append("<center><br /><div id='viewErrorMsgDivId' /></center>");
        $("#empname").prop("readonly", true);
        $("#empcodem").prop("readonly", true);

        $("#empcode").keypress(function(event) {
            if (event.which == 13) {
                getEmpDemodetailsforautosalary();
            }
        });



        $("#empcode").attr("onchange", "getEmpDemodetailsforautosalary()");

        yearList();
        setTimeout(function() {
            getEmployeeDataInAutoSalary();
        }, 100);
//        setTimeout(function () {
//            locationList();
//        }, 200);
        setTimeout(function() {
            departmentList();
        }, 300);
        setTimeout(function() {
            designationList();
        }, 400);
        setTimeout(function() {
            natureTypeList();
        }, 500);
        setTimeout(function() {
            cityList();
        }, 600);
        setTimeout(function() {
            pfTypeList();
        }, 700);
        setTimeout(function() {
            fundType();
        }, 800);
        setTimeout(function() {
            budgetHeadList();
        }, 950);
    }
}

function getEmployeeDataInAutoSalary() {

    var ddo = $("#ddoId").val();
    var location = $("#LocationId").val();
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];

    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: ddo,
        location: location,
        fromDt: fromDate,
        toDate: toDate
    }).done(function(data) {
        data = JSON.parse(data)
        if (data == fail || data == "" || data == undefined) {
            $("#empcode").text("").append("<option  value='' selected disabled>---No data available ----</option>");
        } else if (data != null) {
            $("#empcode").text("").append("<option  value='' selected disabled>----[Employee Code]-Employee Name ----</option>");
            for (var i = 0; i < data.length; i++)
            {
                $("#empcode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
            }
        }

    });
}






function getEmpDemodetailsforautosalary() {
    $('#ddoId').val("0");
    $('#empname').val("");
    $('#empcodem').val("");
    $('#LocationId').val("0");
    $('#deptId').val("0");
    $('#desiId').val("0");
    $('#natureId').val("0");
    $('#cityid').val("0");
    $('#pfId').val("0");
    $('#fundtypeId').val("0");
    $('#budgetheadId').val("0");
    $("#viewErrorMsgDivId").text("");

    var ecode = $("#empcode").val();
    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function(pdata) {
        if (pdata == null || pdata == "" || pdata == statusException || pdata == undefined || pdata == fail || pdata == unauthorized || pdata == invalidSession) {
        } else {
            var ddoOption = $('#ddoId option:contains("' + pdata[0].ddo + '")').val();
            if (ddoOption != undefined) {
                $('#ddoId').val(ddoOption);
            }
            $('#empname').val(pdata[0].employeeName);
            $('#empcodem').val(pdata[0].employeeCodeM);
            $('#LocationId').val(pdata[0].location);
            $.get(server_base_url + "hrms/salary/Department/ViewList", {
            }).done(function(bdata) {
                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].department == bdata[i].department) {
                        $("#deptId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].department + "</option>");
                    }
                }
            });

            $.get(server_base_url + "hrms/salary/Designation/ViewList", {
            }).done(function(bdata) {
                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].designation == bdata[i].designation) {
                        $("#desiId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].designation + "</option>");
                    }
                }
            });

            $.get(server_base_url + "hrms/common/Nature/View", {
            }).done(function(bdata) {
                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].natureType == bdata[i].natureName) {
                        $("#natureId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].natureName + "</option>");
                    }
                }
            });

            $.get(server_base_url + "budget/master/FundType/View", {
            }).done(function(bdata) {
                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].fundType == bdata[i].description) {
                        $("#fundtypeId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].description + "</option>");
                    }
                }
            });

            $.get(server_base_url + "hrms/common/BudgetHead/View", {
            }).done(function(bdata) {
                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].budgetHead == bdata[i].budgetHead) {
                        $("#budgetheadId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].budgetHead + "</option>");
                    }
                }
            });

            $.get(server_base_url + "hrms/salary/PFType/ViewList", {
            }).done(function(bdata) {
                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].pfType == bdata[i].PFType) {
                        $("#pfId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].PFType + "</option>");
                    }
                }
            });

            $.get(server_base_url + "hrms/salary/City/ViewList", {
            }).done(function(bdata) {
                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].postingCity == bdata[i].cityName) {
                        $("#cityid").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].cityName + "</option>");
                    }
                }
            });
        }
    });
}

function loadEmpcodeSearchFunctionalityforautoSalaryProcess() {
    var ddo = $("#ddoId").val();
    $.get(server_base_url + "hrms/EmployeeMaster/GetEmpcode", {
        ddo: ddo
    }).done(function(pdata) {
        var availablecodes = [];
        for (var i = 0; i < pdata.length; i++) {
            availablecodes.push(pdata[i].employeeCode);
        }
        $("#empcode").autocomplete({
            source: availablecodes
        });
    });
}

function ddoListAutoSalary() {
    $("#ddoId").text("").append("<option value='0'>----Select DDO----</option>");
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function(pdata) {
        for (var i = 0; i < pdata.length; i++) {
            $("#ddoId").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
        }
    });
}

function locationList() {
    $("#LocationId").text("").append("<option value='0'>----Select Location----</option>");
    $.get(server_base_url + "/financial/account/Location/ViewList", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
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

function departmentList() {
    $("#deptId").text("").append("<option value='0'>----Select Department----</option>");
    $.get(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function(bdata) {
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#deptId").append("<option value='" + bdata[i]._id.$oid + "' >" + bdata[i].department + "</option>");
            }
    });
}

function designationList() {
    $("#desiId").text("").append("<option value='0'>----Select Designation----</option>");
    $.get(server_base_url + "hrms/salary/Designation/ViewList", {
    }).done(function(bdata) {

        if (bdata != null) {
            for (var i = 0; i < bdata.length; i++) {
                $("#desiId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].designation + "</option>");
            }
        }
    });
}

function natureTypeList() {
    $("#natureId").text("").append("<option value='0'>----Select Nature Type----</option>");
    $.get(server_base_url + "hrms/common/Nature/View", {
    }).done(function(bdata) {

        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#natureId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].natureName + "</option>");
            }
    });
}

function cityList() {
    $("#cityid").text("").append("<option value='0'>----Select City----</option>");
    $.get(server_base_url + "/hrms/salary/City/ViewList", {
    }).done(function(bdata) {
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#cityid").append("<option value='" + bdata[i]._id.$oid + "' >" + bdata[i].cityName + "</option>");
            }
    });
}

function pfTypeList() {
    $("#pfId").text("").append("<option value='0'>----Select PF Type----</option>");
    $.get(server_base_url + "hrms/salary/PFType/ViewList", {
    }).done(function(bdata) {
        if (bdata.length > 0) {
            for (var i = 0; i < bdata.length; i++) {
                $("#pfId").append("<option value='" + bdata[i]._id.$oid + "' >" + bdata[i].PFType + "</option>");
            }
        }
    });
}

function fundType() {
    $("#fundtypeId").text("").append("<option value='0'>----Select Fund Type----</option>");
    $.get(server_base_url + "budget/master/FundType/View", {
    }).done(function(bdata) {
        if (bdata != null) {
            if (bdata.length > 0) {
                for (var i = 0; i < bdata.length; i++) {
                    $("#fundtypeId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
                }
            }
        }
    });
}

function budgetHeadList() {
    $("#budgetheadId").text("").append("<option value='0'>----Select Budget Head----</option>");
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function(bdata) {
        if (bdata.length > 0) {
            for (var i = 0; i < bdata.length; i++) {
                $("#budgetheadId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].budgetHead + "</option>");
            }
        }
    });
}

function yearList() {
    //create year
    $("#year").text("").append("<option value='0'>----Select Salary Year----</option>");
//    var i, yr;
//    var now = new Date();
//    for (i = 0; i < 10; i++) {
//        yr = now.getFullYear() + i;
//        $("#year").append($('<option/>').val(yr).text(yr));
//    }

    $.get(server_base_url + "/common/date", {
    }).done(function(data) {
        var financialYears = [];
        financialYears = data.finacialYears;
        if (financialYears != undefined && financialYears != "undefined" && financialYears != "") {
            for (var i = 0; i < financialYears.length; i++) {
                $("#year").append($('<option/>').val(financialYears[i]).text(financialYears[i]));
            }
        }
    });

    //create month
    $("#month").text("").append("<option value='0'>----Select Salary Month ----</option>");
    $("#month").append("<option value='1'> January </option>");
    $("#month").append("<option value='2'> February </option>");
    $("#month").append("<option value='3'> March </option>");
    $("#month").append("<option value='4'> April </option>");
    $("#month").append("<option value='5'> May </option>");
    $("#month").append("<option value='6'> June </option>");
    $("#month").append("<option value='7'> July </option>");
    $("#month").append("<option value='8'> August </option>");
    $("#month").append("<option value='9'> September </option>");
    $("#month").append("<option value='10'> October </option>");
    $("#month").append("<option value='11'> November </option>");
    $("#month").append("<option value='12'> December </option>");
}

function payStopSalaryYearAndMonth() {
    var salaryProcessType = $("#salaryProcessType").is(":checked");
    if (salaryProcessType != undefined && salaryProcessType == true) {
        $("#payStopYearDisplayDiv").text("").append('<div class="form-group col-lg-6"/><div class="form-group col-lg-6" id="payYearDiv"><label for="payYear">Pay Year <span class="require">*</span></label><select class="form-control" name="payYear" id="payYear"></select></div>');
        $("#payStopMonthDisplayDiv").text("").append('<div class="form-group col-lg-6"/><div class="form-group col-lg-6" id="payMonthDiv"><label for="payMonth">Pay Month <span class="require">*</span></label><select class="form-control" name="payMonth" id="payMonth"></select></div>');

        //create year
        $("#payYear").text("").append("<option value='0'>----Select Pay Year----</option>");
        var i, yr;
        var now = new Date();
        for (i = -5; i < 6; i++) {
            yr = now.getFullYear() + i;
            $("#payYear").append($('<option/>').val(yr).text(yr));
        }

        //create month
        $("#payMonth").text("").append("<option value='0'>----Select Pay Month ----</option>");
        $("#payMonth").append("<option value='1'> January </option>");
        $("#payMonth").append("<option value='2'> February </option>");
        $("#payMonth").append("<option value='3'> March </option>");
        $("#payMonth").append("<option value='4'> April </option>");
        $("#payMonth").append("<option value='5'> May </option>");
        $("#payMonth").append("<option value='6'> June </option>");
        $("#payMonth").append("<option value='7'> July </option>");
        $("#payMonth").append("<option value='8'> August </option>");
        $("#payMonth").append("<option value='9'> September </option>");
        $("#payMonth").append("<option value='10'> October </option>");
        $("#payMonth").append("<option value='11'> November </option>");
        $("#payMonth").append("<option value='12'> December </option>");
    } else {
        $("#payStopYearDisplayDiv").text("");
        $("#payStopMonthDisplayDiv").text("");
    }
}

function validateSalarySearch() {
    var ddo = $("#ddoId").val();
    var month = $("#month").val();
    var year = $("#year").val();
    var payMonth = $("#payMonth").val();
    var payYear = $("#payYear").val();

    if (ddo != "" && ddo != "0") {
        $("#ddoDiv").removeClass('has-error');
    } else {
        $("#ddoDiv").addClass('has-error');
    }

    if (month != "" && month != "0") {
        $("#monthDiv").removeClass('has-error');
    } else {
        $("#monthDiv").addClass('has-error');
    }

    if (year != "" && year != "0") {
        $("#yearDiv").removeClass('has-error');
    } else {
        $("#yearDiv").addClass('has-error');
    }

    var salaryProcessType = $("#salaryProcessType").is(":checked");
    if (salaryProcessType != undefined && salaryProcessType == true) {
        if (payYear != "" && payYear != "0") {
            $("#payYearDiv").removeClass('has-error');
        } else {
            $("#payYearDiv").addClass('has-error');
        }
        if (payMonth != "" && payMonth != "0") {
            $("#payMonthDiv").removeClass('has-error');
        } else {
            $("#payMonthDiv").addClass('has-error');
        }
    } else {
        $("#payYearDiv").removeClass('has-error');
        $("#payMonthDiv").removeClass('has-error');
    }

    if (ddo == "" || ddo == 0 || month == "" || month == 0 || year == "" || year == 0 || (salaryProcessType != undefined && salaryProcessType == true && (payMonth == 0 || payYear == 0))) {
        $("#autoSalaryProcessMessageDiv").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please select * fields</strong><h5></div></center>");
        return false;
    } else {
        $("#autoSalaryProcessMessageDiv").text("");
        $("#viewErrorMsgDivId").text("");
        displayLoader("salaryNotProcessedEmployeeList");
        displayLoader("salaryProcessedEmployeeList");
        displayLoader("salaryLockedEmployeeList");
        searchEmployees("true", "true");
    }
}

function resetSearchEmployees() {
    $("#viewErrorMsgDivId").text("");
    $("#autoSalaryProcessMessageDiv").text("");

    $('#empcode').val("");
    $('#empname').val("");
    $('#empcodem').val("");

    $('#deptId').val("0");
    $('#desiId').val("0");
    $('#natureId').val("0");
    $('#cityid').val("0");
    $('#pfId').val("0");
    $('#fundtypeId').val("0");
    $('#budgetheadId').val("0");
    $('#month').val("0");
    $('#year').val("0");
    $("#salaryNotProcessedEmployeeList").text("");
    $("#salaryProcessedEmployeeList").text("");
    $("#salaryLockedEmployeeList").text("");
    $('html,body').scrollTop(0);
}

function searchEmployees(notprocessed, processed) {
    var salarySearchJson = {
        ddo: $("#ddoId").val(),
        employeeCode: $("#empcode").val(),
        location: $("#LocationId").val(),
        department: $("#deptId").val(),
        designation: $("#desiId").val(),
        natureType: $("#natureId").val(),
        postingCity: $("#cityid").val(),
        pfType: $("#pfId").val(),
        fundType: $("#fundtypeId").val(),
        budgetHead: $("#budgetheadId").val(),
        month: $("#month").val(),
        year: $("#year").val()
    }
    var salaryProcessType = $("#salaryProcessType").is(":checked");
    if (salaryProcessType == true) {
        salaryProcessType = "paystopsalary";
    } else {
        salaryProcessType = "salary";
    }

    $.post(server_base_url + "/payroll/payrolldetails/AutoSalaryProcess/Search", {
        searchJson: JSON.stringify(salarySearchJson), processedBy: getUserSessionElement(seUserId),
        action: "view", salaryProcessType: salaryProcessType
    }).done(function(data) {
        $("#salaryNotProcessedEmployeeList").text("");
        $("#salaryProcessedEmployeeList").text("");
        $("#salaryLockedEmployeeList").text("");
        $('html, body').animate({
            scrollTop: $("#salaryNotProcessedEmployeeList").offset().top
        }, 1000);
        var statusCode = data.statuscode;
        var result = data.result;
        var msg = data.msg;
        if (statusCode == fail) {
            displaySmallErrorMessagesInRed("viewErrorMsgDivId", msg);
        } else if (statusCode == unauthorized) {
            displaySmallErrorMessagesInRed("viewErrorMsgDivId", msg);
        } else if (statusCode == statusException) {
            displaySmallErrorMessagesInRed("viewErrorMsgDivId", msg);
        } else if (statusCode == invalidSession) {
            callSessionTimeout();
        } else if (statusCode == success && result != undefined && result != "") {
//            displaySmallSuccessMessages("viewErrorMsgDivId", msg);
            lockedList(result.lockedlist);
            if (notprocessed == "true") {
                unprocessedList(result.notprocessed);
            }
            if (processed == "true") {
                processedList(result.processed);
            }

            //verify the table length & display no data message
            var processedTr = $('#salaryProcessedTable tr').length;
            if (processedTr == 0) {
                displaySmallErrorMessagesInRed("salaryProcessedListMainBody", NoDataFoundMessage);
            }
            var unprocessedTr = $('#empSearchTable tr').length;
            if (unprocessedTr == 0) {
                displaySmallErrorMessagesInRed("empSearchListMainBody", NoDataFoundMessage);
            }
            var lockedTr = $('#salaryLockedTable tr').length;
            if (lockedTr == 0) {
                displaySmallErrorMessagesInRed("salaryLockedListMainBody", NoDataFoundMessage);
            }
        }
    });
}

function unprocessedList(unprocessedData) {
    if (checkUserPrivelege(pvViewAutoSalary)) {
        $("#salaryNotProcessedEmployeeList").text("").append('<div id="empSearchListPanel" class="panel panel-blue" />');
        $("#empSearchListPanel").append('<div id="empSearchListHeading" class="panel-heading" />');
        $("#empSearchListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee (Salary Not Processed)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colAutoSalaryList"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#empSearchListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#colAutoSalaryList").click(function() {
            $("#collapseOne2").toggle();
            if ($("#colAutoSalaryList span").hasClass("glyphicon-minus-sign")) {
                $("#colAutoSalaryList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colAutoSalaryList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });

        $("#collapseOne2").append('<div id="empSearchListBody" class="panel-body pan" />');
        $("#empSearchListBody").append('<div id="panelRow" class="row" />');
        $("#empSearchListBody").append('<center><div id="empSearchListMainBody" class="table-responsive" /></center>');

        if (unprocessedData == NoDataFoundMessage) {
            displaySmallErrorMessagesInRed("empSearchListMainBody", NoDataFoundMessage);
        } else {
            $("#empSearchListMainBody").text("").append('<table id="empSearchTable" class="table table-striped table-bordered" />');
            $("#empSearchTable").append('<thead id="empSearchTableHeadId" />');
            $("#empSearchTableHeadId").append('<tr><th>All <input type="checkbox" style="width:15px;height:15px;align:center" id="unprocessSelectall"/></th><th>S.No.</th><th>Employee Code</th><th>Employee Name</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th><th>Status</th></tr>');
            $("#empSearchTable").append('<tbody id="empSearchTableBodyId" />');

            $.each(unprocessedData, function(index, value) {
                var employeeCode = encryptBase64String(encodeURIComponent(encryptBase64String(value.employeeCode)));
                if (employeeCode.indexOf("=") >= 0) {
                    employeeCode = employeeCode.replace(new RegExp("\\=", "g"), "");
                }

                $("#empSearchTableBodyId").append("<tr id=" + employeeCode + ">"
                        + "<td><input type='checkbox' style='width:15px;height:15px;align:center' type='checkbox' name='unprocessCheckbox' class='unprocessCheckbox' /></td>"
                        + "<td>" + (index + 1) + "</td>"
                        + "<td>" + value.employeeCode + "</td>"
                        + "<td>" + value.employeeName + "</td>"
                        + "<td>" + value.location + "</td>"
                        + "<td>" + value.department + "</td>"
                        + "<td>" + value.designation + "</td>"
                        + "<td>" + value.salaryType + "</td>"
                        + "<td id='status" + employeeCode + "'>Not processed</td></tr>");
            });

            $("#empSearchTable").dataTable();

            $("#empSearchTable thead tr th:first input:checkbox").change(function() {
                $("#empSearchTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
            $("#empSearchTable tbody tr td:first-child input:checkbox").change(function() {
                var tot = $(".unprocessCheckbox").length;
                var tot_checked = $(".unprocessCheckbox:checked").length;
                if (tot != tot_checked) {
                    $("#unprocessSelectall").prop('checked', false);
                } else {
                    $("#unprocessSelectall").prop('checked', true);
                }
                $("#empSearchListErrorMsgId").text("");
            });
            $("#empSearchListMainBody").append("<div class='form-group col-lg-12'><center><button id='processButton' onclick=processSalary() class='btn btn-success'>Process</button></center></div>");
            $("#empSearchListBody").append('<center><div id="empSearchListErrorMsgId" /></center>');
        }
    }
}

function processSalary() {
    if (checkUserPrivelege(pvCreateAutoSalary)) {
        var checkedrowList = [];
        $('#empSearchTable tr input[type="checkbox"][name="unprocessCheckbox"]:checked').each(function(i) {
            var row = $(this).closest('tr');
            checkedrowList.push(row.find('td:eq(2)').text());
        });

        if (checkedrowList.length > 0) {
            $("#processButton").hide();
            $("#unprocessButton").hide();
            $("#empSearchListErrorMsgId").text("");
            for (var i = 0; i < checkedrowList.length; i++) {
                var employeeCode = encryptBase64String(encodeURIComponent(encryptBase64String(checkedrowList[i])));
                if (employeeCode.indexOf("=") >= 0) {
                    employeeCode = employeeCode.replace(new RegExp("\\=", "g"), "");
                }
                displayLoaderImage("status" + employeeCode);
            }

            var salaryProcessType = $("#salaryProcessType").is(":checked");
            if (salaryProcessType == true) {
                salaryProcessType = "paystopsalary";
            } else {
                salaryProcessType = "salary";
            }

            $.post(server_base_url + "/payroll/payrollDetails/ProcessSalary/Save", {
                processSalary: checkedrowList,
                month: $("#month").val(),
                year: $("#year").val(),
                payMonth: $("#payMonth").val(),
                payYear: $("#payYear").val(),
                loginId: getUserSessionElement(seUserId),
                operationType: "process",
                salaryProcessType: salaryProcessType
            }).done(function(data) {
                //removing all spinners
                for (var i = 0; i < checkedrowList.length; i++) {
                    var employeeCode = encryptBase64String(encodeURIComponent(encryptBase64String(checkedrowList[i])));
                    if (employeeCode.indexOf("=") >= 0) {
                        employeeCode = employeeCode.replace(new RegExp("\\=", "g"), "");
                    }
                    $("#status" + employeeCode).text("");
                }

                $("#processButton").show();
                $("#unprocessButton").show();
                var statusCode = data.statuscode;
                var result = data.result;
                var msg = data.msg;
                if (statusCode == fail) {
                    displaySmallErrorMessagesInRed("empSearchListErrorMsgId", msg);
                } else if (statusCode == unauthorized) {
                    displaySmallErrorMessagesInRed("empSearchListErrorMsgId", msg);
                } else if (statusCode == statusException) {
                    displaySmallErrorMessagesInRed("empSearchListErrorMsgId", msg);
                } else if (statusCode == invalidSession) {
                    callSessionTimeout();
                } else if (statusCode == success && result != "" && result != undefined) {
                    $("#processButton").hide();
//                displaySmallSuccessMessages("empSearchListErrorMsgId", msg);
                    $.each(result, function(index, value) {
                        var employeeCode = encryptBase64String(encodeURIComponent(encryptBase64String(index)));
                        if (employeeCode.indexOf("=") >= 0) {
                            employeeCode = employeeCode.replace(new RegExp("\\=", "g"), "");
                        }
                        if (value == success) {
                            $("#status" + employeeCode).text("").append("<strong style='color:green;'>Success</strong>");
                            setTimeout(function() {
                                $("#" + employeeCode).remove();
                            }, 2000);
                        } else if (value == fail) {
                            $("#status" + employeeCode).text("").append("<strong style='color:brown;'>Fail</strong>");
                        } else if (value == "Salary already processed") {
                            $("#status" + employeeCode).text("").append("<strong style='color:brown;'>" + value + "</strong>");
                        }
                    });

                    setTimeout(function() {
                        searchEmployees("true", "true");
                    }, 2000);
                    setTimeout(function() {
                        $("#empSearchListErrorMsgId").text("");
                        $("#processButton").show();
                    }, 5000);
                }
            });
        } else {
            displaySmallErrorMessagesInRed("empSearchListErrorMsgId", "Please select atleast one employee.");
        }
    }
}

function processedList(processedData) {
    if (checkUserPrivelege(pvViewAutoSalary)) {
        $("#salaryProcessedEmployeeList").text("").append('<div id="salaryProcessedListPanel" class="panel panel-blue" />');
        $("#salaryProcessedListPanel").append('<div id="salaryProcessedListHeading" class="panel-heading" />');
        $("#salaryProcessedListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee (Salary Processed)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="EmpSalaryProceedList"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#salaryProcessedListPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
        $("#EmpSalaryProceedList").click(function() {
            $("#collapseOne3").toggle();
            if ($("#EmpSalaryProceedList span").hasClass("glyphicon-minus-sign")) {
                $("#EmpSalaryProceedList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#EmpSalaryProceedList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append('<div id="salaryProcessedListBody" class = "panel-body pan" />');
        $("#salaryProcessedListBody").append('<div id="panelRow" class="row" />');
        $("#salaryProcessedListBody").append('<center><div id="salaryProcessedListMainBody" class="table-responsive" /></center>');

        if (processedData == NoDataFoundMessage) {
            displaySmallErrorMessagesInRed("salaryProcessedListMainBody", NoDataFoundMessage);
        } else {
            $("#salaryProcessedListMainBody").text("").append('<table id="salaryProcessedTable" class="table table-striped table-bordered" />');
            $("#salaryProcessedTable").append('<thead id="salaryProcessedTableHeadId" />');
            $("#salaryProcessedTableHeadId").append('<tr><th>All <input type="checkbox" style="width:15px;height:15px;align:center" id="processedSelectall" /></th><th>S.No.</th><th>Employee Code</th><th>Employee Name</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th><th>Status</th></tr>');
            $("#salaryProcessedTable").append('<tbody id="salaryProcessedTableBodyId" />');

            $.each(processedData, function(index, value) {
                $("#salaryProcessedTableBodyId").append("<tr id=" + value.idStr + ">"
                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" name="processedCheckbox" class="processedCheckbox" />' + "</td>"
                        + "<td>" + (index + 1) + "</td>"
                        + "<td><input type='hidden' value='" + value.idStr + "'/>" + value.employeeCode + "</td>"
                        + "<td>" + value.employeeName + "</td>"
                        + "<td>" + value.locationName + "</td>"
                        + "<td>" + value.departmentName + "</td>"
                        + "<td>" + value.designationName + "</td>"
                        + "<td>" + value.salaryType + "</td>"
                        + "<td id='status" + value.idStr + "'>" + value.status + "</td></tr>");
            });

            $("#salaryProcessedTable").dataTable();
            $("#salaryProcessedTable thead tr th:first input:checkbox").change(function() {
                $("#salaryProcessedTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
            $("#salaryProcessedTable tbody tr td:first-child input:checkbox").change(function() {
                var tot = $(".processedCheckbox").length;
                var tot_checked = $(".processedCheckbox:checked").length;
                if (tot != tot_checked) {
                    $("#processedSelectall").prop('checked', false);
                } else {
                    $("#processedSelectall").prop('checked', true);
                }
                $("#salaryProcessedListErrorMsgId").text("");
            });
            $("#salaryProcessedListMainBody").append("<div class='form-group col-lg-12'><center><button id='unprocessButton' onclick='unProcessSalary()' class='btn btn-warning'>Unprocess</button></center></div>");
            $("#salaryProcessedListBody").append('<center><div id="salaryProcessedListErrorMsgId" /></center>');
        }
    }
}

function unProcessSalary() {
    if (checkUserPrivelege(pvCreateAutoSalary) || checkUserPrivelege(pvUpdateAutoSalary)) {
        var checkrowList = [];
        $('#salaryProcessedTable tr input[type="checkbox"][name="processedCheckbox"]:checked').each(function(i) {
            var row = $(this).closest('tr');
            checkrowList.push(row.find('input[type=hidden]').val());
        });

        if (checkrowList.length > 0) {
            $("#unprocessButton").hide();
            $("#processButton").hide();
            $("#salaryProcessedListErrorMsgId").text("");
            for (var i = 0; i < checkrowList.length; i++) {
                displayLoaderImage("status" + checkrowList[i]);
            }

            var salaryProcessType = $("#salaryProcessType").is(":checked");
            if (salaryProcessType == true) {
                salaryProcessType = "paystopsalary";
            } else {
                salaryProcessType = "salary";
            }

            $.post(server_base_url + "/payroll/payrollDetails/ProcessSalary/Save", {
                unprocessSalary: checkrowList,
                month: $("#month").val(),
                year: $("#year").val(),
                payMonth: $("#payMonth").val(),
                payYear: $("#payYear").val(),
                loginId: getUserSessionElement(seUserId),
                operationType: "unprocess",
                salaryProcessType: salaryProcessType
            }).done(function(data) {
                //removing all spinners
                for (var i = 0; i < checkrowList.length; i++) {
                    $("#status" + checkrowList[i]);
                }

                $("#processButton").show();
                $("#unprocessButton").show();
                var statusCode = data.statuscode;
                var result = data.result;
                var msg = data.msg;
                if (statusCode == fail) {
                    displaySmallErrorMessagesInRed("salaryProcessedListErrorMsgId", msg);
                } else if (statusCode == unauthorized) {
                    displaySmallErrorMessagesInRed("salaryProcessedListErrorMsgId", msg);
                } else if (statusCode == statusException) {
                    displaySmallErrorMessagesInRed("salaryProcessedListErrorMsgId", msg);
                } else if (statusCode == invalidSession) {
                    callSessionTimeout();
                } else if (statusCode == success && result != "" && result != undefined) {
                    $("#unprocessButton").hide();
                    displaySmallSuccessMessages("salaryProcessedListErrorMsgId", msg);
                    $.each(result, function(index, value) {
                        if (value == success) {
                            $("#status" + index).text("").append("<strong style='color:green;'>Success</strong>");
                            setTimeout(function() {
                                $("#" + index).remove();
                            }, 2000);
                        } else if (value == notAllowed) {
                            $("#status" + index).text("").append("<strong style='color:brown;'>Not allowed</strong>");
                        } else if (value == fail) {
                            $("#status" + index).text("").append("<strong style='color:brown;'>Fail</strong>");
                        } else if (value == "Salary already unprocessed") {
                            $("#status" + index).text("").append("<strong style='color:brown;'>" + value + "</strong>");
                        }
                    });

                    setTimeout(function() {
                        searchEmployees("true", "true");
                    }, 2000);
                    setTimeout(function() {
                        $("#salaryProcessedListErrorMsgId").text("");
                        $("#unprocessButton").show();
                    }, 5000);
                }
            });
        } else {
            displaySmallErrorMessagesInRed("salaryProcessedListErrorMsgId", "Please select atleast one employee.");
        }
    }
}

function lockedList(lockedData) {
    if (checkUserPrivelege(pvViewAutoSalary)) {
        $("#salaryLockedEmployeeList").text("").append('<div id="salaryLockedListPanel" class="panel panel-blue" />');
        $("#salaryLockedListPanel").append('<div id="salaryLockedListHeading" class="panel-heading" />');
        $("#salaryLockedListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee (Salary Locked)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colSalaryLocked"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#salaryLockedListPanel").append('<div id="salaryLockedCollapse" class="panel-collapse collapse in pal" />');
        $("#colSalaryLocked").click(function() {
            $("#salaryLockedCollapse").toggle();
            if ($("#colSalaryLocked span").hasClass("glyphicon-minus-sign")) {
                $("#colSalaryLocked").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSalaryLocked").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#salaryLockedCollapse").append('<div id="salaryLockedListBody" class = "panel-body pan" />');
        $("#salaryLockedListBody").append('<div id="panelRow" class="row" />');
        $("#salaryLockedListBody").append('<center><div id="salaryLockedListMainBody" class="table-responsive" /></center>');

        if (lockedData == NoDataFoundMessage) {
            displaySmallErrorMessagesInRed("salaryLockedListMainBody", NoDataFoundMessage);
        } else {
            $("#salaryLockedListMainBody").text("").append('<table id="salaryLockedTable" class="table table-striped table-bordered" />');
            $("#salaryLockedTable").append('<thead id="salaryLockedTableHeadId" />');
            $("#salaryLockedTableHeadId").append('<tr><th>S.No.</th><th>Employee Code</th><th>Employee Name</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th></tr>');
            $("#salaryLockedTable").append('<tbody id="salaryLockedTableBodyId" />');

            $.each(lockedData, function(index, value) {
                $("#salaryLockedTableBodyId").append("<tr>"
                        + "<td>" + (index + 1) + "</td>"
                        + "<td>" + value.employeeCode + "</td>"
                        + "<td>" + value.employeeName + "</td>"
                        + "<td>" + value.locationName + "</td>"
                        + "<td>" + value.departmentName + "</td>"
                        + "<td>" + value.designationName + "</td>"
                        + "<td>" + value.salaryType + "</td></tr>");
            });
            $("#salaryLockedTable").dataTable();
        }
    }
}
