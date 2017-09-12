/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function leaveAdjustmentApprovalDisplay(divId)
{



    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> >> <label>Leave Adjustmet Approval</label>');
    $("#" + divId).text("").append("<div id='testMainDivId' />");
    $("#testMainDivId").text("").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    
    $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>Pending Leave Adjustment Requests</center>");
    $("#tableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    
    addToggleToId("colMaritial1", "collapseOne2");
    
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");

    getAllPendingLeaveAdjustmentRequestsDisplay('FieldGroup');

    $("#tableHeader").append("<div id='approvedLeaveAdjustmentRequestsListPanel' class='panel panel-blue' />");
    $("#approvedLeaveAdjustmentRequestsListPanel").append("<div id='approvedLeaveAdjustmentRequestsListPanelHeading' class='panel-heading' />");
    $("#approvedLeaveAdjustmentRequestsListPanelHeading").append("<h4 id='firstHeaderapprovedLeaveAdjustmentRequests' class='panel-title' />");
    
    $("#firstHeaderapprovedLeaveAdjustmentRequests").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Approved Leave Adjustment Requests</center>");
    $("#firstHeaderapprovedLeaveAdjustmentRequests").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#approvedLeaveAdjustmentRequestsListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    
    addToggleToId("colMaritial2", "collapseOne3");
    
    $("#collapseOne3").append("<div id='listpanelApprovedLeaveAdjustmentRequestsMainBody' class = 'panel-body' />");
    $("#listpanelApprovedLeaveAdjustmentRequestsMainBody").append("<div id='listApprovedLeaveAdjustmentRequestspanelRow' class='row' />");
    $("#listApprovedLeaveAdjustmentRequestspanelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#listApprovedLeaveAdjustmentRequestspanelRow").append("<div id='FieldGroup1' class='form-group' />");

    getAllApprovedLeaveAdjustmentRequestsDisplay('FieldGroup1');
    
    scrolupfunction();
}

function getAllPendingLeaveAdjustmentRequestsDisplay(divId)
{
    $("#" + divId).text("").append("<div class='tab-pane' id='viewPendingLeaveAdjustmentRequests'/>");
    $("#viewPendingLeaveAdjustmentRequests").append("<div class='table-responsive' id='viewPendingLeaveAdjustmentRequestsSectionTableDiv' />");
    $("#viewPendingLeaveAdjustmentRequestsSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayPendingLeaveAdjustmentRequestsTable' />");
    $("#displayPendingLeaveAdjustmentRequestsTable").append("<thead class=''><tr>"
            + "<th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Requested By</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Leave Type</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Requested Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>From Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>To Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Total Leave Days</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Current Status</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Contact No.</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Approve Leave</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Reject Leave</th>"
            + "</tr></thead>");
}
function getAllApprovedLeaveAdjustmentRequestsDisplay(divId)
{
    $("#" + divId).text("").append("<div class='tab-pane' id='viewApprovedLeaveAdjustmentRequests'/>");
    $("#viewApprovedLeaveAdjustmentRequests").append("<div class='table-responsive' id='viewApprovedLeaveAdjustmentRequestsTableDiv' />");
    $("#viewApprovedLeaveAdjustmentRequestsTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayApprovedLeaveAdjustmentRequestsTable' />");
    $("#displayApprovedLeaveAdjustmentRequestsTable").append("<thead class=''><tr>"
            + "<th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Requested By</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Leave Type</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Requested Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>From Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>To Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Total Leave Days</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Current Status</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Approved Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Comments</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Contact No.</th>"
            + "</tr></thead>");
}
