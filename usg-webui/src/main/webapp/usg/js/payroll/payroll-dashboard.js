/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayPayrollHorizontalBar() {
    prepareSideBar();
    $("#dashboardBodyMainDiv").text("");
    $("#dashboardOrderListId").text("");
    prepareSideBar();
    $("#dashboardTitleMainDiv").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll Management</a>');
    $("#dashboardOrderListId").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll Management</a>');
    $("#dashboardBodyMainDiv").append('<div id="payrollHoarizontalBarId" />');
    $("#payrollHoarizontalBarId").append('<div id="payrollHoarizontalMainId" class="row" />');
    $("#payrollHoarizontalMainId").append('<ul id="payrollHorizontalUlId" class="nav nav-tabs ul-edit nav-justified" />');
    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlPayrollAdmin)) {
        $("#payrollHorizontalUlId").append('<li><a href="#home6"  onclick="payrollDetailsMenuTabs()" data-toggle="tab"><strong>Payroll Details</strong></a></li>');
    }
    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlPayrollAdmin) || checkUserRole(rlPayrollUser)) {
        $("#payrollHorizontalUlId").append('<li><a href="#home6" onclick="payrollReportsMenuTabs()" data-toggle="tab"><strong>Payroll Reports</a></strong></li>');
    }
    //analytics
    $("#payrollHoarizontalBarId").append('<br /><center><div id="analyticsRow0" class="row"><h4><b>Financial Year : ' + getUserSessionElement(seCurrentFinancialYear) + '</b></h4></div></center>');
    $("#payrollHoarizontalBarId").append('<br /><div id="analyticsRow1" class="row" />');
    $("#analyticsRow1").text("").append('<center><div id="salaryProcessedDiv" class="col-md-6" /></center>');
    $("#analyticsRow1").append('<center><div id="salaryNotProcessedDiv" class="col-md-6" /></center>');

    $("#payrollHoarizontalBarId").append('<br /><div id="analyticsRow2" class="row" />');
    $("#analyticsRow2").text("").append('<center><div id="salaryPaidDiv" class="col-md-12" /></center>');
    fetchProcessedSalary();
    fetchNotProcessedSalary();
    fetchSalaryPaid();
}


function payrollDetailsMenuTabs() {
    prepareSideBar();
    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlPayrollAdmin)) {
        $("#dashboardBodyMainDiv").text("");
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a>');

        $("#" + innerDivCF).text("");
        $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-pinterest-square"></i><span class="menu-title"><strong>Payroll  Details</strong></span><span class="fa arrow"></span></a><ul class="nav nav-second-level" id="payrollDetailsMenuUl" /></li>');
        //Options
        if (checkUserPrivelege(pvCreateLoanApply) || checkUserPrivelege(pvViewLoanApply)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:payrollLoanApplyMaster("dashboardBodyMainDiv") id="payrollLoanApplyMaster"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Loan Apply</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateLoanOrder) || checkUserPrivelege(pvViewLoanOrder)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:payrollLoanOrderMaster("dashboardBodyMainDiv") id="payrollLoanOrderMaster"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Loan Order Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateLoanAllotment) || checkUserPrivelege(pvViewLoanAllotment)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:payrollLoanAllotmentMaster("dashboardBodyMainDiv") id="payrollLoanAllotmentMaster"><i class="fa fa-pinterest-square"></i><span class="submenu-title"> Loan Allotment</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateLoanTransaction) || checkUserPrivelege(pvViewLoanTransaction)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:payrollEmployeeLoanTransactionMaster("dashboardBodyMainDiv") id="payrollEmployeeLoanTransactionMaster"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Loan Transactions</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateLoanRecovery) || checkUserPrivelege(pvViewLoanRecovery)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:payrollEmployeeLoanRecoveryMaster("dashboardBodyMainDiv") id="payrollEmployeeLoanRecoveryMaster"><i class="fa fa-pinterest-square"></i><span class="submenu-title"> Loan Recovery</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateInsuranceTransaction) || checkUserPrivelege(pvViewInsuranceTransaction)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:displayInsuranceTranasction("dashboardBodyMainDiv") id="displayInsuranceTranasction"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Insurance Transaction</span></a></li>');

        }
        if (checkUserPrivelege(pvCreateEmployeeAttendance) || checkUserPrivelege(pvViewEmployeeAttendence)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:payrollEmployeeAttendanceMaster("dashboardBodyMainDiv") id="payrollEmployeeAttendanceMaster"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Employee Attendance</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateAttendanceAdjustment) || checkUserPrivelege(pvViewArrearAdjustment)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:payrollAttendanceAdjustmentMaster("dashboardBodyMainDiv") id="payrollAttendanceAdjustmentMaster"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Attendance Adjustment</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateAutoSalary) || checkUserPrivelege(pvViewAutoSalary)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:payrollAutoSalaryProcess("dashboardBodyMainDiv") id="payrollAutoSalaryProcess"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Auto Salary Process</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateIncomeTax) || checkUserPrivelege(pvViewIncomeTax)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:createIncomeTax1("dashboardBodyMainDiv") id="createIncomeTax1"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Manage Income Tax Process</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateArrear) || checkUserPrivelege(pvViewArrear)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:arrearProcess("dashboardBodyMainDiv") id="arrearProcess"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Arrear Process</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateArrearConfiguration) || checkUserPrivelege(pvViewArrearConfiguration)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:arrearConfiguration("dashboardBodyMainDiv") id="arrearConfiguration"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Arrear Configuration</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateArrearAdjustment) || checkUserPrivelege(pvViewArrearAdjustment)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:arrearAdjustment("dashboardBodyMainDiv") id="arrearAdjustment"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Arrear Adjustments</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateEmployeePromotion) || checkUserPrivelege(pvViewEmployeePromotion)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:payrollEmployeePromotionMaster("dashboardBodyMainDiv") id="payrollEmployeePromotionMaster"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Employee Promotion</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateQuarterTransaction) || checkUserPrivelege(pvViewQuarterTransaction)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:payrollquarterTranasctionMaster("dashboardBodyMainDiv") id="payrollquarterTranasctionMaster"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Quarter Transaction</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateSalaryIncrement) || checkUserPrivelege(pvViewSalaryIncrement)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:salaryIncrement("dashboardBodyMainDiv") id="salaryIncrement"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Salary Increment DateWise</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateSalaryBill) || checkUserPrivelege(pvViewSalaryBill)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:salaryBillCreation("dashboardBodyMainDiv") id="salaryBillCreation"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Salary Bill Creation</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateArrearBill) || checkUserPrivelege(pvViewArrearBill)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:arrearBillCreation("dashboardBodyMainDiv") id="arrearBillCreation"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Arrear Bill Creation</span></a></li>');
        }
//        if (checkUserPrivelege(pvCreateTransferForm) || checkUserPrivelege(pvViewTransferForm)) {
//            $("#payrollDetailsMenuUl").append('<li><a href=javascript:employeeJoiningForm("dashboardBodyMainDiv") id="employeeJoiningForm"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Transfer Joining Form</span></a></li>');
//        }
        if (checkUserPrivelege(pvCreateEmployeePromotion) || checkUserPrivelege(pvViewEmployeePromotion)) {
            $("#payrollDetailsMenuUl").append('<li><a href=javascript:employeeSuspension("dashboardBodyMainDiv") id="employeeSuspension"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Employee Suspension</span></a></li>');
        }
        $("#payrollLoanApplyMaster,#payrollLoanOrderMaster,#payrollLoanAllotmentMaster,#payrollEmployeeLoanTransactionMaster,#payrollEmployeeLoanRecoveryMaster,#displayInsuranceTranasction,#payrollEmployeeAttendanceMaster,#payrollAttendanceAdjustmentMaster,#payrollAutoSalaryProcess,#createIncomeTax1,#arrearProcess,#arrearConfiguration,#arrearAdjustment,#payrollEmployeePromotionMaster,#payrollquarterTranasctionMaster,#salaryIncrement,#salaryBillCreation,#arrearBillCreation,#employeeJoiningForm,#employeeSuspension").click(function () {
            $(this).parent().siblings().children("a").css("color", "white");
            $(this).css("color", "red");
            $(this).siblings().css("color", "white");
        })
        $('#side-menu').metisMenu();
    }
}

function payrollReportsMenuTabs() {
    prepareSideBar();
    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlPayrollAdmin) || checkUserRole(rlPayrollUser)) {
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a>');
        $("#dashboardBodyMainDiv").text("");
        $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-pinterest-square"></i><span class="menu-title">Payroll Reports</span><span class="fa arrow"></span></a><ul class="nav nav-second-level" id="payrollReportsMenuUl" />');
        // $("#payrollReportsMenuUl").append('<li><a href=javascript:displayEmployeeImportPage("dashboardBodyMainDiv")><i class="fa fa-pinterest-square"></i><span class="submenu-title">Employee Import</span></a></li>');
        if (checkUserPrivelege(pvViewSalarySlip)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:salarySlipReport("dashboardBodyMainDiv") id="salarySlipReport"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Salary Slip/Register Report</span></a></li>');

        }
        if (checkUserPrivelege(pvViewDeductionView)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:deductionDetailsReport("dashboardBodyMainDiv") id="deductionDetailsReport"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Deduction Details</span></a></li>');
        }
        if (checkUserPrivelege(pvViewBankStatement)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:bankStatementReport("dashboardBodyMainDiv") id="bankStatementReport"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Bank Statement</span></a></li>');
        }
        if (checkUserPrivelege(pvViewLoanOrderStatement)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:loanOrderStatamentReport("dashboardBodyMainDiv") id="loanOrderStatamentReport"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Loan Order Statement</span></a></li>');
        }
        if (checkUserPrivelege(pvViewEmployeeList)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:employeeListReport("dashboardBodyMainDiv") id="employeeListReport"><i class="fa fa-pinterest-square"></i><span class="submenu-title">List of Employees</span></a></li>');
        }
        if (checkUserPrivelege(pvViewSalaryRegisterDiff)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:salaryDifferenceReport("dashboardBodyMainDiv") id="salaryDifferenceReport"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Salary Difference Register</span></a></li>');
        }
        if (checkUserPrivelege(pvViewSalarySlipMail)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:GenerateSalarySlipMail("dashboardBodyMainDiv") id="GenerateSalarySlipMail"><i class="fa fa-pinterest-square"></i><span class="submenu-title"> Salary Slip Mail</span></a></li>');
        }
        // $("#payrollReportsMenuUl").append('<li><a href=javascript:displayEmployeeImportandExportPage("dashboardBodyMainDiv")><i class="fa fa-pinterest-square"></i><span class="submenu-title">Employee Import and Export</span></a></li>');
        if (checkUserPrivelege(pvViewSalaryStatus)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:monthlySalaryStatus("dashboardBodyMainDiv") id="monthlySalaryStatus"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Monthly Salary Status</span></a></li>');
        }

        //$("#payrollReportsMenuUl").append('<li><a href=javascript:displaypageSalaryExport("dashboardBodyMainDiv")><i class="fa fa-pinterest-square"></i><span class="submenu-title">Manage Salary Export</span></a></li>');
        // $("#payrollReportsMenuUl").append('<li><a href=javascript:displaypagemanageHeadImportandExport("dashboardBodyMainDiv")><i class="fa fa-pinterest-square"></i><span class="submenu-title">Manage Head Import and Export</span></a></li>');
        if (checkUserPrivelege(pvViewQuarterList)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:quarterListReport("dashboardBodyMainDiv") id="quarterListReport"><i class="fa fa-pinterest-square"></i><span class="submenu-title"> Quarter List</span></a></li>');
        }
        if (checkUserPrivelege(pvViewQuarterTransactionList)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:quarterTransactionReport("dashboardBodyMainDiv") id="quarterTransactionReport"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Quarter Transaction Details</span></a></li>');
        }
        if (checkUserPrivelege(pvViewMastersList)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:listOfMastersReport("dashboardBodyMainDiv") id="listOfMastersReport"><i class="fa fa-pinterest-square"></i><span class="submenu-title">List Of Masters</span></a></li>');
        }
        if (checkUserPrivelege(pvViewSalarySummary)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:salarySummaryReport("dashboardBodyMainDiv") id="salarySummaryReport"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Salary Summary Detail Report</span></a></li>');
        }
        if (checkUserPrivelege(pvViewArrearReport)) {
            $("#payrollReportsMenuUl").append('<li><a href=javascript:arrearReport("dashboardBodyMainDiv") id="arrearReportLink"><i class="fa fa-pinterest-square"></i><span class="submenu-title">Arrear Report</span></a></li>');
        }
        $("#arrearReportLink,#salarySlipReport,#deductionDetailsReport,#bankStatementReport,#loanOrderStatamentReport,#employeeListReport,#salaryDifferenceReport,#GenerateSalarySlipMail,#monthlySalaryStatus,#quarterListReport,#quarterTransactionReport,#arrearProcess,#arrearConfiguration,#arrearAdjustment,#payrollEmployeePromotionMaster,#payrollquarterTranasctionMaster,#listOfMastersReport,#salarySummaryReport").click(function () {
            $(this).parent().siblings().children("a").css("color", "white");
            $(this).css("color", "red");
            $(this).siblings().css("color", "white");
        })
        $('#side-menu').metisMenu();

    }
}

getMonthName = function (v) {
    var n = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return n[v]
}

function fetchProcessedSalary() {
    displayLoader("salaryProcessedDiv");
    $.post(server_base_url + "/payroll/analytics", {
        type: "processedsalary",
        ddoId: getUserSessionElement(seDDOId)
    }).done(function (data) {
        $("#salaryProcessedDiv").text("");
        var statusCode = data.statuscode;
        var result = data.result;
        var msg = data.msg;
        if (statusCode == fail) {
            displaySmallErrorMessagesInRed("salaryProcessedDiv", msg);
        } else if (statusCode == unauthorized) {
            displaySmallErrorMessagesInRed("salaryProcessedDiv", msg);
        } else if (statusCode == statusException) {
            displaySmallErrorMessagesInRed("salaryProcessedDiv", msg);
        } else if (statusCode == invalidSession) {
            callSessionTimeout();
        } else if (statusCode == success && result != undefined && result != "") {
            var graphData = "";
            $.each(result, function (index, value) {
                graphData = graphData + "['" + getMonthName(index) + "'," + parseInt(value) + "],";
            });
            graphData = "[" + graphData.substring(0, graphData.length - 1) + "]";
            graphData = eval(graphData);

            //construct graph
            var options = {
                chart: {type: 'column', renderTo: 'salaryProcessedDiv'},
                title: {text: 'Salary Processed Status Month Wise'},
                xAxis: {type: 'category', labels: {rotation: -45, style: {fontSize: '13px', fontFamily: 'Verdana, sans-serif'}}},
                yAxis: {min: 0, title: {text: 'Employees'}},
                legend: {enabled: false},
                tooltip: {formatter: function () {
                        return '<span style="font-size:16px;font-weight:bold;">' + this.point.name + ': </span><span style="font-size:16px;font-weight:bold;color:chocolate;">' + this.point.y + '</span>';
                    }
                },
                series: [{name: 'Salary Processed', colorByPoint: true, data: graphData}]
            }
            var chart = new Highcharts.Chart(options);
        }
    });
}


function fetchNotProcessedSalary() {
    displayLoader("salaryNotProcessedDiv");
    $.post(server_base_url + "/payroll/analytics", {
        type: "unprocessedsalary",
        ddoId: getUserSessionElement(seDDOId)
    }).done(function (data) {
        $("#salaryNotProcessedDiv").text("");
        var statusCode = data.statuscode;
        var result = data.result;
        var msg = data.msg;
        if (statusCode == fail) {
            displaySmallErrorMessagesInRed("salaryNotProcessedDiv", msg);
        } else if (statusCode == unauthorized) {
            displaySmallErrorMessagesInRed("salaryNotProcessedDiv", msg);
        } else if (statusCode == statusException) {
            displaySmallErrorMessagesInRed("salaryNotProcessedDiv", msg);
        } else if (statusCode == invalidSession) {
            callSessionTimeout();
        } else if (statusCode == success && result != undefined && result != "") {
            var graphData = "";
            $.each(result, function (index, value) {
                graphData = graphData + "['" + getMonthName(index) + "'," + parseInt(value) + "],";
            });
            graphData = "[" + graphData.substring(0, graphData.length - 1) + "]";
            graphData = eval(graphData);

            //construct graph
            var options = {
                chart: {type: 'column', renderTo: 'salaryNotProcessedDiv'},
                title: {text: 'Salary Unprocessed Status Month Wise'},
                xAxis: {type: 'category', labels: {rotation: -45, style: {fontSize: '13px', fontFamily: 'Verdana, sans-serif'}}},
                yAxis: {min: 0, title: {text: 'Employees'}},
                legend: {enabled: false},
                tooltip: {
                    formatter: function () {
                        return '<span style="font-size:16px;font-weight:bold;">' + this.point.name + ': </span><span style="font-size:16px;font-weight:bold;color:chocolate;">' + this.point.y + '</span>';
                    }
                },
                series: [{name: 'Salary Not Processed', colorByPoint: true, data: graphData}]
            }
            var chart = new Highcharts.Chart(options);
        }
    });
}


function fetchSalaryPaid() {
    displayLoader("salaryPaidDiv");
    $.post(server_base_url + "/payroll/analytics", {
        type: "salarypaid",
        ddoId: getUserSessionElement(seDDOId)
    }).done(function (data) {
        $("#salaryPaidDiv").text("");
        var statusCode = data.statuscode;
        var result = data.result;
        var msg = data.msg;
        if (statusCode == fail) {
            displaySmallErrorMessagesInRed("salaryPaidDiv", msg);
        } else if (statusCode == unauthorized) {
            displaySmallErrorMessagesInRed("salaryPaidDiv", msg);
        } else if (statusCode == statusException) {
            displaySmallErrorMessagesInRed("salaryPaidDiv", msg);
        } else if (statusCode == invalidSession) {
            callSessionTimeout();
        } else if (statusCode == success && result != undefined && result != "") {
            var graphData = "";
            $.each(result, function (index, value) {
                graphData = graphData + "['" + getMonthName(index) + "'," + parseInt(value) + "],";
            });
            graphData = "[" + graphData.substring(0, graphData.length - 1) + "]";
            graphData = eval(graphData);

            //construct graph
            var options = {
                chart: {type: 'line', renderTo: 'salaryPaidDiv'},
                title: {text: 'Salary Disbursed Month Wise'},
                xAxis: {type: 'category', labels: {rotation: -45, style: {fontSize: '13px', fontFamily: 'Verdana, sans-serif'}}},
                yAxis: {min: 0, title: {text: 'Amount'}},
                legend: {enabled: false},
                tooltip: {
                    formatter: function () {
                        return '<span style="font-size:16px;font-weight:bold;">' + this.point.name + ': </span><span style="font-size:16px;font-weight:bold;color:chocolate;">Rs.' + this.point.y + '</span>';
                    }
                },
                series: [{name: 'Salary Paid', data: graphData}]
            }
            var chart = new Highcharts.Chart(options);
        }
    });
}