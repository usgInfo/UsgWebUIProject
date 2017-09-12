/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function leaveAprrovalMaster(divId)
{
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayLeaveHorizontalBar()">Leave Management</a> > <a data-toggle="tab" href="javascript:void(0)" >Leave Approval Master</a>');
    $("#" + divId).text("").append("<div id='testMainDivId' />");
    $("#testMainDivId").text("").append("<div id='tableHeader'/>");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Pending Leave Requests</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<div id='" + successMsgDivCF + "'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    getAllPendingLeaveRequestsDisplay('FieldGroup');
    $("#tableHeader").append("<div id='approvedLeaveRequestsListPanel' class='panel panel-blue' />");
    $("#approvedLeaveRequestsListPanel").append("<div id='approvedLeaveRequestsListPanelHeading' class='panel-heading' />");
    $("#approvedLeaveRequestsListPanelHeading").append("<h4 id='firstHeaderapprovedLeaveRequests' class='panel-title' />");
    $("#firstHeaderapprovedLeaveRequests").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>Approved Leave Requests</center>");
    $("#approvedLeaveRequestsListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelApprovedLeaveRequestsMainBody' class = 'panel-body' />");
    $("#listpanelApprovedLeaveRequestsMainBody").append("<div id='listApprovedLeaveRequestspanelRow' class='row' />");
    $("#listApprovedLeaveRequestspanelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#listApprovedLeaveRequestspanelRow").append("<div id='FieldGroup1' class='form-group' />");
    getAllApprovedLeaveRequestsDisplay('FieldGroup1');
}

function getAllPendingLeaveRequestsDisplay(divId)
{
    $("#" + divId).text("").append("<div class='tab-pane' id='viewPendingLeaveRequests'/>");
    $("#viewPendingLeaveRequests").append("<div class='table-responsive' id='viewPendingLeaveRequestsSectionTableDiv' />");
    $("#viewPendingLeaveRequestsSectionTableDiv").append("<table class='table table-bordered table-striped table-warning ' id='displayPendingLeaveRequestsTable' />");
    $.get(server_base_url + "leave/LeaveApproval/ViewList", {
        condition: "Applied"
    }).done(function (bdata) {
        bdata = JSON.parse(bdata);
        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "No Data Available");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed(successMsgDivCF, unauthorizedMessage + "<br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed(successMsgDivCF, statusExceptionMessage + "<br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else {
            if (bdata != null) {

                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayPendingLeaveRequestsTable").append("<thead class=''><tr>"
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
                    $("#displayPendingLeaveRequestsTable").append("<tbody id='displayPendingLeaveRequestsTableBody' class='table-striped table-bordered' />");
//                    for (var i = 0; i < bdata.length; i++) {
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        $("#displayPendingLeaveRequestsTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].leaveType + "</td>"
                                + "<td style='cursor:pointer;'>" + dateConverter(bdata[i].requestedDate) + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].fromDate + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].toDate + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].totalLeaveDays + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].leaveStatus + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].contactNumber + "</td>"
//                                + "<td style='cursor:pointer;' onclick=saveCurrentStatus('" + bdata[i]._id.$oid + "')>" + ' <a class="anchor_edit" href="javascript:saveCurrentStatus("' + bdata[i]._id.$oid + '")">APPROVE</a>' + "</td></tr></tbody>");
                                + "<td onclick=deletePopUp('saveCurrentStatus','','" + bdata[i]._id.$oid + "')>" + ' <i class="fa"></i>&nbsp;&nbsp;&nbsp;<a  class="anchor_edit"  style="align:center;" >Approve</a>' + "</td>"
                                + "<td onclick=deletePopUp('saveRejectStatus','','" + bdata[i]._id.$oid + "')>" + ' <i class="fa"></i>&nbsp;&nbsp;&nbsp;<a  class="anchor_delete"  style="align:center;" >Reject</a>' + "</td></tr>");


                    }
                    $('#displayPendingLeaveRequestsTable').append("</table>");
                    $('#displayPendingLeaveRequestsTable').dataTable();
                }
            } else {
                displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "No Data Available");
            }
        }
    });
}
function saveCurrentStatus(id)
{
    disableDiv("testMainDivId");
    $.post(server_base_url + "leave/LeaveApproval/Save", {
        lid: id
    }).done(function (data) {
        if (data == fail) {
            displaySmallErrorMessages("authonticationMsgId", "Invalid username / password");
        } else if (data == unauthorized) {
            displaySmallErrorMessages("authonticationMsgId", unauthorizedMessage);
        } else if (data == statusException) {
            displaySmallErrorMessages("authonticationMsgId", statusExceptionMessage);
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessages("authonticationMsgId", "No User available");
        } else {
            setTimeout(function () {
                leaveAprrovalMaster('dashBoardBodyMainDiv');
                displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Saved Succesfully");
            }, 800);
        }
    });
}
function saveRejectStatus(id)
{
    $.post(server_base_url + "leave/transaction/LeaveApproval/Reject", {
        id: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {
        if (data == fail) {
            displaySmallErrorMessages("authonticationMsgId", "Invalid username / password");
        } else if (data == unauthorized) {
            displaySmallErrorMessages("authonticationMsgId", unauthorizedMessage);
        } else if (data == statusException) {
            displaySmallErrorMessages("authonticationMsgId", statusExceptionMessage);
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessages("authonticationMsgId", "No User available");
        } else {
            leaveAprrovalMaster('dashBoardBodyMainDiv');
            displayLargeSuccessMessages("pregsuccessBefore", leaveRejected);
            getAllApprovedLeaveRequestsDisplay('FieldGroup1');
        }
    });

}
function dateConverter(date) {
    var date1 = date / 1000;
    var d = new Date(0);
    d.setUTCSeconds(date1);
    var tempDate = new Date(d);
    var temp = tempDate.getDate() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getFullYear();
    d = temp;
    return d;
}

function getAllApprovedLeaveRequestsDisplay()
{
    $("#FieldGroup1").text("").append("<div class='tab-pane' id='viewApprovedLeaveRequests'/>");
    $("#viewApprovedLeaveRequests").append("<div class='table-responsive' id='viewApprovedLeaveRequestsTableDiv' />");
    $("#viewApprovedLeaveRequestsTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayApprovedLeaveRequestsTable' />");

    $.get(server_base_url + "leave/LeaveApproval/ViewList", {
        condition: "Approved"
    }).done(function (bdata) {
        bdata = JSON.parse(bdata);
        if (bdata == fail) {
            $("#ErrorMessageDiv1").text("").append("<center><div class='col-sm-12'  style='color:red;'><strong>No Data Available..<strong></div></center>");
        } else if (bdata == unauthorized) {
            $("#ErrorMessageDiv1").text("").append("<center><div class='col-sm-12'  style='color:red;'><strong>No Data Available..<strong></div></center>");
        } else if (bdata == invalidSession) {
            $("#ErrorMessageDiv1").text("").append("<center><div class='col-sm-12'  style='color:red;'><strong>No Data Available..<strong></div></center>");
            callSessionTimeout();
        } else if (bdata == statusException) {
            $("#ErrorMessageDiv1").text("").append("<center><div class='col-sm-12'  style='color:red;'><strong>No Data Available..<strong></div></center>");
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    var comments = "Accepted";
                    var currentStatus = "Approved";
                    var approvedDate = getApprovedDate();
                    $("#displayApprovedLeaveRequestsTable").append("<thead class=''><tr>"
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
                    $("#displayApprovedLeaveRequestsTable").append("<tbody id='displayLeaveApprovalTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var leaveApprovaljson = JSON.stringify(bdata[i]);
                        leaveApprovaljson = JSON.stringify(leaveApprovaljson);
                        $("#displayLeaveApprovalTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].leaveType + "</td>"
                                + "<td style='cursor:pointer;'>" + dateConverter(bdata[i].requestedDate) + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].fromDate + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].toDate + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].totalLeaveDays + "</td>"
                                + "<td style='cursor:pointer;'>" + currentStatus + "</td>"
                                + "<td style='cursor:pointer;'>" + dateConverter(bdata[i].approvedDate) + "</td>"
                                + "<td style='cursor:pointer;'>" + comments + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].contactNumber + "</td></tr>");
                    }
                    $('#displayApprovedLeaveRequestsTable').append("</table>");
                    $('#displayApprovedLeaveRequestsTable').dataTable();
                }
            }
        }

    }
    );
}
function dateConverter(date) {
    var date1 = date / 1000;
    var d = new Date(0);
    d.setUTCSeconds(date1);
    var tempDate = new Date(d);
    var temp = tempDate.getDate() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getFullYear();
    d = temp;
    return d;
}

function getApprovedDate()
{
    var presentDay = new Date().getDate();
    if (presentDay < 10) {
        presentDay = "0" + approvedDate;
    }
    var presentMonth = new Date().getMonth() + 1;
    var presentYear = new Date().getFullYear();
    var approvedDate = presentDay + "-0" + presentMonth + "-" + presentYear;
}