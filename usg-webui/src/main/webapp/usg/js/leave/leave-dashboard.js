/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayLeaveHorizontalBar() {

    $("#dashboardBodyMainDiv").text("");
    $("#dashboardOrderListId").text("");
    $("#side-menu").text("");
    prepareSideBar();
    $("#dashboardTitleMainDiv").text("").append('<label>Leave</label>');
    //$("#dashboardOrderListId").text("");
    $("#dashboardOrderListId").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayLeaveHorizontalBar()">Leave</a>');
    $("#dashboardBodyMainDiv").append('<div id="leaveHoarizontalBarId" />');
    $("#leaveHoarizontalBarId").append('<div id="leaveHoarizontalMainId" class="row" />');
    $("#leaveHoarizontalMainId").append('<ul id="leaveHorizontalUlId" class="nav nav-tabs ul-edit nav-justified"/>');

    if (checkUserRole(rlLeaveAdmin) || checkUserRole(rlSuperAdmin)) {
        $("#leaveHorizontalUlId").append('<li><a href="#home6" data-toggle="tab" onclick="leaveManagementMasterTabs()"><strong>Leave Management</strong></a></li>');
        $("#leaveHorizontalUlId").append('<li><a href="#home6" data-toggle="tab" onclick="leaveManagementReportTab()"><strong>Leave Report</strong></a></li>');
    }


}
function leaveManagementMasterTabs() {

    prepareSideBar();
    $("#dashboardBodyMainDiv").text("");
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayLeaveHorizontalBar()">Leave</a> >> <a href="javascript:void(0)" data-toggle="tab" onclick="leaveManagementMasterTabs()">Leave Management</a>');

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave Management</a></label>');
    $("#dashboardBodyMainDiv").text("");
    //displayHolidayLocationMaster
    $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-circle"></i><span class="menu-title">Leave Management</span><span class="fa arrow"></span></a><ul class="nav nav-second-level" id="leaveManaegementMenuUl" /></li>');

    $("#leaveManaegementMenuUl").append('<li><a href=javascript:displayLeaveFinancialYearMaster("dashboardBodyMainDiv") id="LeaveFinancialSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Financial Year Master</span></a></li>');


    if (checkUserPrivelege(pvCreateHolidayType) || checkUserPrivelege(pvViewHolidayType)) {
        $("#leaveManaegementMenuUl").append('<li><a href=javascript:displayHolidayTypeMaster("dashboardBodyMainDiv") id="holidayTypeSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Holiday Type Master</span></a></li>');
    }

    $("#leaveManaegementMenuUl").append('<li><a href=javascript:displayCommonHolidaysMaster("dashboardBodyMainDiv") id="commonHolidayMasterSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Common Holidays Master</span></a></li>');
    $("#leaveManaegementMenuUl").append('<li><a href=javascript:LocationMasterCreation("dashboardBodyMainDiv","leavemanagement") id="holidayLocationMasterSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Location Master</span></a></li>');
    $("#leaveManaegementMenuUl").append('<li><a href=javascript:displayLocationWiseHolidaysMaster("dashboardBodyMainDiv") id="locationWiseHolidayTypeSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Location Wise Holidays Master</span></a></li>');

    $("#leaveManaegementMenuUl").append('<li><a href=javascript:displayWeeklyOffMaster("dashboardBodyMainDiv") id="weeklyOffSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Weekly Off Master</span></a></li>');
    if (checkUserPrivelege(pvCreateLeaveType) || checkUserPrivelege(pvViewLeaveType)) {
        $("#leaveManaegementMenuUl").append('<li><a href=javascript:leaveTypemaster("dashboardBodyMainDiv") id="leaveTypeSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Leave Type Master</span></a></li>');
    }
    $("#leaveManaegementMenuUl").append('<li><a href=javascript:employeeLeaveAssignment("dashboardBodyMainDiv") id="employeeLeaveAssignmentSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Employee Leave Assignment</span></a></li>');
    $("#leaveManaegementMenuUl").append('<li><a href=javascript:employeeLeaveTransaction("dashboardBodyMainDiv") id="employeeLeaveTransactionSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Employee Leave Transaction</span></a></li>');
    $("#leaveManaegementMenuUl").append('<li><a href=javascript:leaveAdjustment("dashboardBodyMainDiv") id="leaveAdjustmentSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Leave Adjustment</span></a></li>');
    $("#leaveManaegementMenuUl").append('<li><a href=javascript:employeeEncashment("dashboardBodyMainDiv") id="leaveEncashmentSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Leave Encashment</span></a></li>');
    $("#leaveManaegementMenuUl").append('<li><a href=javascript:employeeLeaveCarryForwad("dashboardBodyMainDiv") id="leaveCarryForwardSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Leave Carry Forward</span></a></li>');
//    $("#leaveManaegementMenuUl").append('<li><a href=javascript:leaveAdjustmentApprovalDisplay("dashboardBodyMainDiv") id="leaveAdjustmentApprovalSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Leave Adjustment Approval Master</span></a></li>');

//    $("#leaveManaegementMenuUl").append('<li><a href=javascript:leaveTransactionReport("dashboardBodyMainDiv") id="leaveTransactionReportSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Leave Transaction Report</span></a></li>');

    $('#side-menu').metisMenu();

    $("#LeaveFinancialSideMenu,#holidayTypeSideMenu,#commonHolidayMasterSideMenu,#holidayLocationMasterSideMenu,#locationWiseHolidayTypeSideMenu,\n\
    #weeklyOffSideMenu,#leaveTypeSideMenu,#employeeLeaveAssignmentSideMenu,#employeeLeaveTransactionSideMenu,\n\
    #leaveAdjustmentSideMenu,#leaveCarryForwardSideMenu,#leaveAdjustmentApprovalSideMenu,#leaveEncashmentSideMenu,#leaveTransactionReportSideMenu").click(function() {
        $(this).parent().siblings().children("a").css("color", "white");
        $(this).css("color", "red");
        $(this).siblings().css("color", "white");
    });
}

function leaveManagementReportTab() {
    prepareSideBar();

    $("#dashboardBodyMainDiv").text("");
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayLeaveHorizontalBar()">Leave</a> >> <a href="javascript:void(0)" data-toggle="tab" onclick="leaveManagementReportTab()">Leave Report</a>');

    $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-circle"></i><span class="menu-title">Leave Report</span><span class="fa arrow"></span></a><ul class="nav nav-second-level" id="leaveManaegementMenuUl" /></li>');
    $("#leaveManaegementMenuUl").append('<li><a href=javascript:leaveTransactionReport("dashboardBodyMainDiv") id="leaveTransactionReportSideMenu"><i class="fa fa-circle"></i><span class="submenu-title">Leave Transaction Report</span></a></li>');
    $("#leaveTransactionReportSideMenu").click(function() {
        $(this).parent().siblings().children("a").css("color", "white");
        $(this).css("color", "red");
        $(this).siblings().css("color", "white");
    });

    $('#side-menu').metisMenu();
}