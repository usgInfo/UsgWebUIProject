/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function leaveAdjustmentRequestDisplay(divId)
{
    scrolupfunction();
    $("#" + divId).text("").append("<div id='testMainDivId' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu' class='col-md-6' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");

    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");

    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Leave Adjustment Request</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row pal' />");
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelRow").append("<div id='FieldGroup0' class='form-group' />");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");

    getLabelDropDownInRow("FieldGroup0", "Employee Name", "required", "Row0aCol1", "Col1a", "employeeName", "onchange=getEmployeeLeavesDetailsDetailsForLeaveAdjustment()");
    $("#panelMainBody").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div id='FieldGroup1' class='form-group pal' />");
    $("#FieldGroup1").append("<input type='hidden' id='saveorupdate' value='save'>");

    getLabelDropDownInRow("FieldGroup1", "Reporting To", "required", "Row0Col1", "Col1", "reportingTo", "");
    getLabelDropDownInRow("FieldGroup1", "Leave Request", "required", "Row1Col1", "Col2", "leaveRequest", "");
    getLabelTextareaInRow("FieldGroup1", "Remarks", "required", "Row2Col1", "Col3", "remarks", "");

    $("#panelMainBody").append("<div id='panelRow4' class='row' />");
    $("#panelRow4").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'   value='View' class='btn btn-primary mr5 pull-right'  onclick='validateListOfLeaveAdjustmentRequest()'>View</button></div><div class='col-xs-2'><button type='button' onclick='wipeAllLeaveAdjustmentRequestData()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Reset</button></div>");

    $("#tableHeader").append("<div id='leaveAdjustmentListPanel' class='panel panel-blue' />");

    $("#leaveAdjustmentListPanel").append("<div id='leaveAdjustmentListPanelHeading' class='panel-heading' />");
    $("#leaveAdjustmentListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Leave AdjustmentRequest</center>");

    $("#leaveAdjustmentListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelMainBody").append("<div id='editBoxDiv' class='row pal' />");


    fetchReportingToLeaveAdjustmentRequestDetails();
    fetchEmployeeNameForLeaveAdjustmentRequest();
//    fetchLeaveTypeFromDateToDate('leaveRequest');
}



function getEmployeeLeavesDetailsDetailsForLeaveAdjustment() {
    $("#leaveType").text("");
    $("#FieldGroup").text("").append("<div class='tab-pane' id='viewleaveType'/>");
    $("#viewleaveType").append("<div class='table-responsive' id='viewleaveTypeSectionTableDiv1' />");
    $("#viewleaveTypeSectionTableDiv1").append("<table class='table table-bordered table-striped table-warning ' id='displayLeaveTypeTable' />");
    $("#displayLeaveTypeTable").append("<thead class=''><tr>"
            + "<th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Leave Type</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Total Leave (Days)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Availed Leave (Days)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Adjusted Leave (Days)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Balance Leave (Days)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Applied Leave (Days)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Applied Balance Leave (Days)</th>"
            + "</tr></thead>");
    var employeeId = $("#employeeName").val();
    $.get(server_base_url + "leave/LeaveRequest/GetEmpLeaves", {
        employeeId: employeeId,
        condition: "getEntireDetailsOFEmpLeaves"
    }).done(function (data) {
        $("#displayLeaveTypeTable").append("<tbody id='displayLeaveTypeTableBody' class='table-striped table-bordered' />");
        var sno = 0;
        $("#leaveType").append("<option value=''>--Select Leave Type ----</option>");
        for (var i = 0; i < data.length; i++) {
            sno++;
            $("#leaveType").append("<option value=" + data[i].leaveTypeId + ">" + data[i].leavetypeName + "</option>");
            $("#displayLeaveTypeTableBody").append("<tr id='" + sno + "' style='cursor:pointer;' >"
                    + "<td>" + sno + "</td>"
                    + "<td style='cursor:pointer;'>" + data[i].leavetypeName + "</td>"
                    + "<td style='cursor:pointer;'>" + data[i].maxLeavePerYear + "</td>"
                    + "<td style='cursor:pointer;'>" + data[i].totalApprovedLeaves + "</td>"
                    + "<td style='cursor:pointer;'>" + data[i].adjustedLeavesApproved + "</td>"
                    + "<td style='cursor:pointer;'>" + data[i].balanceLeaves + "</td>"
                    + "<td style='cursor:pointer;'>" + data[i].totalAppliedLeaves + "</td>"
                    + "<td style='cursor:pointer;'>" + data[i].appliedBalanceLeaves + "</td></tr>");
        }
        $("#leaveTypeList").val(encodeURI(JSON.stringify(data)));
        fetchLeaveTypeFromDateToDate("leaveRequest");
    });
}
function viewlistOfLeaveAdjustmentRequest(divId)
{
    $("#" + divId).text("").append("<div class='tab-pane' id='viewLeaveAdjustmentRequestList'/>");
    $("#viewLeaveAdjustmentRequestList").append("<div class='table-responsive' id='viewLeaveAdjustmentRequestListSectionTableDiv' />");
    $("#viewLeaveAdjustmentRequestListSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayLeaveAdjustmentRequestListTable' />");
    $("#displayLeaveAdjustmentRequestListTable").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Reporting To</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Leave Type</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Adj.Req.Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>From Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>To Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Total Leave Days</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Status</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "leave/LeaveAdjustmentRequest/ViewList", {
    }).done(function (bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + failMessage + "<br /><br />");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    var adjustedRequestedDate = fetchadjustedRequestedDate();
                    $("#displayLeaveAdjustmentRequestListTable").append("<tbody id='displayLeaveAdjustmentRequestListTableBody' class='table-striped table-bordered' />");
                    bdata = JSON.parse(bdata);
                    for (var i = 0; i < bdata.length; i++) {
                        sno++;
                        var leaveAdjustmentRequestListjson = {
                            lid: bdata[i]._id.$oid,
                            reportingTo: bdata[i].reportingTo,
                            leaveType: bdata[i].leaveType,
                            adjustedRequestedDate: adjustedRequestedDate,
                            fromDate: bdata[i].fromDate,
                            toDate: bdata[i].toDate,
                            totalLeaveDays: bdata[i].totalLeaveDays,
                            leaveStatus: bdata[i].leaveStatus,
                            contactNumber: bdata[i].contactNumber,
                            reasonForLeave: bdata[i].reasonForLeave
                        };
                        leaveAdjustmentRequestListjson = JSON.stringify(leaveAdjustmentRequestListjson);
                        $("#displayLeaveAdjustmentRequestListTableBody").append("<tr id='" + bdata[i].leaveStatus + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].reportingTo + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].leaveType + "</td>"
                                + "<td style='cursor:pointer;'>" + dateConvert(adjustedRequestedDate) + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].fromDate + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].toDate + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].totalLeaveDays + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].leaveStatus + "</td>"
                                + "<td style='cursor:pointer;' onclick=updateListOfLeaveAdjustmentRequestDetails('" + encodeURI(leaveAdjustmentRequestListjson) + "')>" + ' <button type="button"  class="btn btn-primary mr5" style="align:center;color:white"   >EDIT</button>' + "</td>"
                                + "<td onclick=deleteListOfLeaveAdjustmentRequestDetails('" + bdata[i]._id.$oid + "')>" + ' <button type="button" class="btn btn-danger mr5"   style="align:center;color:white" >DELETE</button>' + "</td></tr>");
                    }
                    $('#displayLeaveAdjustmentRequestListTable').append("</table>");
                    $('#displayLeaveAdjustmentRequestListTable').dataTable();
                }
            }
        }
    });
}
function editBoxDiv(obj) {
    obj = JSON.parse(decodeURI(obj));
    getTwoColumnInRow("editBoxDiv", "R0", "C1", "C2");
    $("#C1").append(getLabel_InputWithSpan("From Date", "required", "adjustmentFromDate", "", "onkeypress='return false'"));
    $("#C2").append(getLabel_InputWithSpan("To Date", "required", "adjustmentToDate", "", "onkeypress='return false'"));
    $("#adjustmentFromDate").datepicker({
        format: "dd/mm/yyyy"
    });
    $("#adjustmentToDate").datepicker({
        format: "dd/mm/yyyy"
    });
    getLabelTextareaFullRow("editBoxDiv", "Reason For Adjustment", "required", "R2", "C3", "adjustmentRemarks", "");
    getSaveResetUpdateBackButton("editBoxDiv", "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "saveAdjustmentValidation('" + encodeURI(JSON.stringify(obj)) + "')", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
    $("#adjustmentFromDate").val(obj.fromDate);
    $("#adjustmentToDate").val(obj.toDate);
}
function saveAdjustmentValidation(obj) {
    var adjustmentRemarks = $("#adjustmentRemarks").val();
    var adjustmentToDate = $("#adjustmentToDate").val();
    var adjustmentFromDate = $("#adjustmentFromDate").val();
    var reportingTo = $("#reportingTo").val();
    var adjustedRequestedDate = fetchAdjustmentRequestedDate();
    var totalAdjustmentLeaves = fetchtotalLeavesAdjustmentLeqavesApplied() + 1;
    obj = JSON.parse(decodeURI(obj));
    var Id = obj._id.$oid;
    var objJson = {
        adjustmentReportingTo: reportingTo,
        adjustmentRemarks: adjustmentRemarks,
        adjustmentToDate: adjustmentToDate,
        adjustmentFromDate: adjustmentFromDate,
        adjustedRequestedDate: adjustedRequestedDate,
        totalAdjustmentLeaves: totalAdjustmentLeaves
    };
    $.post(server_base_url + "leave/LeaveAdjustment/Save", {
        objJson: JSON.stringify(objJson),
        Id: Id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {
        saveOrUpdateCommonFunctionInLeaveAdjustment(data);
    });
}
function fetchAdjustmentRequestedDate()
{
    var presentDay = new Date().getDate();
    if (presentDay < 10) {
        presentDay = "0" + presentDay;
    }
    var presentMonth = new Date().getMonth() + 1;
    var presentYear = new Date().getFullYear();
    var requestedDate = presentDay + "/0" + presentMonth + "/" + presentYear;
    return requestedDate;
}
function fetchtotalLeavesAdjustmentLeqavesApplied() {
    var fDate = $("#adjustmentFromDate").datepicker("getDate");
    var tDate = $("#adjustmentToDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
function  saveOrUpdateCommonFunctionInLeaveAdjustment(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv("tableHeader");
        setTimeout(function () {
            leaveAdjustmentRequestDisplay("dashBoardBodyMainDiv");
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
        }, 1000);
        clearSuccessMessageAfterTwoSecond("pregsuccessBefore");
    }
}

function deleteListOfLeaveAdjustmentRequestDetails(leaveAdjustmentId) {
    var result = confirm('Are you Sure?');
    if (result) {
        $.post(server_base_url + "leave/LeaveAdjustment/Delete", {
            leaveAdjustment: leaveAdjustment
        }).done(function (data) {
            leaveAdjustmentRequestDisplay("dashBoardBodyMainDiv");
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
                leaveAdjustmentRequestDisplay("dashBoardBodyMainDiv");
                displayLargeSuccessMessages("pregsuccessBefore", "Deleted Succesfully<br><br>");
                scrolupfunction();
            }
        });
    }
}

function validateListOfLeaveAdjustmentRequest()
{
    var saveorupdate = $("#saveorupdate").val();
    $("#reportingToErr").text("");
    $("#leaveRequestErr").text("");
    $("#remarksErr").text("");

    var employeeName = $("employeeName").val();
    var reportingTo = $("#reportingTo").val();
    var leaveRequest = $("#leaveRequest").val();
    var remarks = $("#remarks").val();
    var count = 0;
    var result = 1;
    var leaveType = null;
    var fromDate = null;
    var toDate = null;
//    $.get(server_base_url + "leave/LeaveRequest/ViewList", {
//    }).done(function (padata) {
//        padata = JSON.parse(padata);
//        for (var i = 0; i < padata.length; i++) {
//            $("#leaveRequest").append("<option value=" + padata[i].leaveType + ' | ' + padata[i].fromDate + '| ' + padata[i].toDate + ">" + padata[i].leaveType + " | " + padata[i].fromDate + " | " + padata[i].toDate + "</option>");
//        }
//        leaveType = padata[i].leaveType;
//        fromDate = padata[i].fromDate;
//        toDate = padata[i].toDate;
//    });
    if (reportingTo != "") {
        if (reportingTo == null) {
            $("#reportingTo").focus();
            addSomeClass("reportingToFieldGroup", "has-error");
            displaySmallErrorMessages("reportingToErr", "Please select Reporting To details.");
            result = 0;
        }
        removeSomeClass("reportingToFieldGroup", "has-error");
        count++;
    }
    if (leaveRequest != "") {
        if (leaveRequest == null) {
            $("#leaveRequest").focus();
            addSomeClass("leaveRequestFieldGroup", "has-error");
            displaySmallErrorMessages("leaveRequestErr", "Please select Leave Request details.");
            result = 0;
        }
        removeSomeClass("leaveRequestFieldGroup", "has-error");
        count++;
    }
    if (result != 0) {
        if (count == 2) {
            if (saveorupdate == "save") {
                viewLeaveDetails();
            } else {
                updateListOfLeaveAdjustmentRequestDetails();
            }
        }
    }
}
function viewLeaveDetails() {
    var leaveRequest = JSON.parse(decodeURI(decryptBase64String($("#leaveRequest").val())));
    $("#listpanelRow").text("").append("<div class='tab-pane' id='viewLeaveAdjustmentRequestList'/>");
    $("#viewLeaveAdjustmentRequestList").append("<div class='table-responsive' id='viewLeaveAdjustmentRequestListSectionTableDiv' />");
    $("#viewLeaveAdjustmentRequestListSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayLeaveAdjustmentRequestListTable' />");
    $("#displayLeaveAdjustmentRequestListTable").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Reporting To</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Leave Type</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Adj.Req.Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>From Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>To Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Total Leave Days</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Status</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "</tr></thead>");
    var bdata = JSON.parse(decodeURI(decryptBase64String($("#leaveRequest").val())));
    console.log(JSON.stringify(bdata));
    if (bdata != null) {
        var sno = 0;
        var adjustedRequestedDate = fetchadjustedRequestedDateInAdjustment();
        console.log(adjustedRequestedDate);
        $("#displayLeaveAdjustmentRequestListTable").append("<tbody id='displayLeaveAdjustmentRequestListTableBody' class='table-striped table-bordered' />");
        sno++;
        var leaveAdjustmentRequestListjson;
        leaveAdjustmentRequestListjson = JSON.stringify(bdata);
        $("#displayLeaveAdjustmentRequestListTableBody").append("<tr id='" + bdata.leaveStatus + "' style='cursor:pointer;' >"
                + "<td>" + sno + "</td>"
                + "<td style='cursor:pointer;'>" + bdata.reportingTo + "</td>"
                + "<td style='cursor:pointer;'>" + bdata.leaveType + "</td>"
                + "<td style='cursor:pointer;'>" + adjustedRequestedDate + "</td>"
                + "<td style='cursor:pointer;'>" + bdata.fromDate + "</td>"
                + "<td style='cursor:pointer;'>" + bdata.toDate + "</td>"
                + "<td style='cursor:pointer;'>" + bdata.totalLeaveDays + "</td>"
                + "<td style='cursor:pointer;'>" + bdata.leaveStatus + "</td>"
                + "<td style='cursor:pointer;' onclick=editBoxDiv('" + encodeURI(leaveAdjustmentRequestListjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td></tr>");
//        +"<td style='cursor:pointer;' onclick=updateListOfLeaveAdjustmentRequestDetails('" + encodeURI(leaveAdjustmentRequestListjson) + "')>" + ' <button type="button"  class="btn btn-primary mr5" style="align:center;color:white"   >EDIT</button>' + "</td>"
//                + "<td onclick=deleteListOfLeaveAdjustmentRequestDetails('" + bdata._id.$oid + "')>" + ' <button type="button" class="btn btn-danger mr5"   style="align:center;color:white" >DELETE</button>' + "</td></tr>");
//        $('#displayLeaveAdjustmentRequestListTable').append("</table>");
//        $('#displayLeaveAdjustmentRequestListTable').dataTable();
    }
}

function saveListOfLeaveAdjustmentRequestDetails()
{
    var reportingTo = $("#reportingTo").val();
    var leaveRequest = $("#leaveRequest").val();
    var remarks = $("#remarks").val();

    var leaveAdjustmentRequestJson = {
        reportingTo: reportingTo,
        leaveRequest: leaveRequest,
        remarks: remarks
    };

    $.post(server_base_url + "leave/LeaveAdjustmentRequest/Save", {
        leaveAdjustmentRequestJson: JSON.stringify(leaveAdjustmentRequestJson)
    }).done(function (data) {
        if (data == fail) {
            displaySmallErrorMessages("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessages("pregsuccessBefore", "No User available" + "<br/><br/>");
        } else {
            leaveAdjustmentRequestDisplay("dashBoardBodyMainDiv");
            displayLargeSuccessMessages("pregsuccessBefore", "" + successMessage + "<br/><br/>");
            scrolupfunction();
        }
    });
}

function updateListOfLeaveAdjustmentRequestDetails()
{
    var leaveAdjustmentId = $("#leaveAdjustment").val();
    var reportingTo = $("#reportingTo").val();
    var leaveRequest = $("#leaveRequest").val();
    var remarks = $("#remarks").val();

    var leaveAdjustmentListJson = {
        reportingTo: reportingTo,
        leaveRequest: leaveRequest,
        remarks: remarks
    };

    $.post(server_base_url + "leave/LeaveAdjustment/Update", {
        LeaveAdjustmentRequestJson: JSON.stringify(LeaveAdjustmentRequestJson),
        LeaveAdjustmentRequestId: LeaveAdjustmentRequestId
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessages("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessages("pregsuccessBefore", "No User available" + "<br/><br/>");
        } else {
            LeaveAdjustmentRequestDisplay("dashBoardBodyMainDiv");
            displayLargeSuccessMessages("pregsuccessBefore", "" + successMessage + "<br/><br/>");
            scrolupfunction();
        }
    });
}

function updateListOfLeaveAdjustmentRequestDetails(obj)
{
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#" + divId).text("").append("<div id='testMainDivId' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu' class='col-md-6' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");


    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");

    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Leave Adjustment Request</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    //$("#panelRow").append("<div id='FieldGroup0' class='form-group' />");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");

    $("#panelMainBody").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div id='FieldGroup1' class='form-group' />");
    $("#FieldGroup1").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup1").append("<input type='hidden' id='leaveAdjustmentRequestId' value='" + obj.leaveAdjustmentId + "'>");
    $("#FieldGroup1").append("<label class='col-sm-2 control-label'>Reporting To</label>");
    $("#FieldGroup1").append("<div id='FieldDiv1' class='col-sm-4' />");
    $("#FieldDiv1").append("<select value='" + obj.reportingTo + "' id='reportingTo' class='form-control'></select>");

    $("#FieldDiv1").append("<span id='reportingToErr'></span>");

    $("#panelMainBody").append("<div id='panelRow2' class='row' />");
    $("#panelRow2").append("<div id='FieldGroup2' class='form-group' />");
    //$("#FieldGroup2").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup2").append("<label class='col-sm-2 control-label'>Leave Request<em>*</em></label>");
    $("#FieldGroup2").append("<div id='FieldDiv2' class='col-sm-4' />");
    $("#FieldDiv2").append("<select value='" + obj.leaveRequest + "' id='leaveRequest' class='form-control'></select>");

    $("#FieldDiv2").append("<span id='leaveRequestErr'></span>");

    $("#panelMainBody").append("<div id='panelRow3' class='row' />");
    $("#panelRow3").append("<div id='FieldGroup3' class='form-group' />");
    $("#FieldGroup3").append("<label class='col-sm-2 control-label'>Remarks: </label>");
    $("#FieldGroup3").append("<div id='FieldDiv3' class='col-sm-4' />");
    $("#FieldDiv3").append("<input type='text' class='form-control ' value='" + obj.remarks + "' id='remarks'>");

    $("#FieldDiv3").append("<span id='remarksErr'></span>");

}


function wipeAllLeaveAdjustmentRequestData()
{
    $('#reportingTo').val("");
    $('#leaveRequest').val("");
    $('#remarks').val("");
}
function fetchEmployeeNameForLeaveAdjustmentRequest()
{
    $("#employeeName").text("").append("<option value='0'>----Select Employee----</option>");
    $.get(server_base_url + "hrms/salary/Employee/ViewList", {
    }).done(function (data) {

        for (var i = 0; i < data.length; i++) {

            $("#employeeName").append("<option value='" + data[i]._id.$oid + "'>" + data[i].employeeName + "</option>");
        }

    });
}

function fetchReportingToLeaveAdjustmentRequestDetails()
{
    $("#reportingTo").text("").append("<option value='0'>----Select Employee----</option>");
    $.get(server_base_url + "hrms/salary/Employee/ViewList", {
    }).done(function (data) {

        for (var i = 0; i < data.length; i++) {

            $("#reportingTo").append("<option value='" + data[i]._id.$oid + "'>" + data[i].employeeName + "</option>");
        }

    });

}
function fetchLeaveTypeFromDateToDate(divId)
{
    $("#" + divId).text("").append("<option value=''>----Select Leave Request----</option>");
    var employeeId = $("#employeeName").val();
    $.get(server_base_url + "leave/transaction/LeaveRequest/ViewByEmpId", {
        employeeId: employeeId,
    }).done(function (data) {
        data = JSON.parse(data);
        alert(data);
        if (data != "500" || data != 500 || data != "400" || data != 400 || data != 404 || data != "404" || data != 501 || data != "501") {
            $("#" + divId).append("<option value='' selected disabled>---- Select Leave Request ----</option>");
            for (var i = 0; i < data.length; i++) {
                $("#" + divId).append("<option value=" + encryptBase64String(encodeURI(JSON.stringify(data[i]))) + ">" + data[i].leaveType + " | " + data[i].fromDate + " | " + data[i].toDate + "</option>");
            }
        } else {
            $("#" + divId).append("<option value='' selected disabled>No Data Available</option>");
        }
    });
}
function fetchadjustedRequestedDateInAdjustment()
{
    var presentDay = new Date().getDate();
    if (presentDay < 10) {
        presentDay = "0" + presentDay;
    }
    var presentMonth = new Date().getMonth() + 1;
    var presentYear = new Date().getFullYear();
    var adjustedRequestedDate = presentDay + "-0" + presentMonth + "-" + presentYear;
    return adjustedRequestedDate;
}
function dateConvert(date)
{
    var date1 = date / 1000;
    var d = new Date(0);
    d.setUTCSeconds(date1);
    var tempDate = new Date(d);
    var temp = tempDate.getDate() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getFullYear();
    d = temp;
    return d;

}
//function viewlistOfLeaveAdjustmentRequest(divId)
//{
//    $("#" + divId).text("").append("<div class='tab-pane' id='viewLeaveAdjustmentRequestList'/>");
//    $("#viewLeaveAdjustmentRequestList").append("<div class='table-responsive' id='viewLeaveAdjustmentRequestListSectionTableDiv' />");
//    $("#viewLeaveAdjustmentRequestListSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayLeaveAdjustmentRequestListTable' />");
//    $("#displayLeaveAdjustmentRequestListTable").append("<thead class=''><tr>"
//            + " <th> S.No</th>"
//            + "<th style='min-width:30%;width:auto;'><i ></i>Reporting To</th>"
//            + "<th style='min-width:30%;width:auto;'><i ></i>Leave Type</th>"
//            + "<th style='min-width:30%;width:auto;'><i ></i>Adj.Req.Date</th>"
//            + "<th style='min-width:30%;width:auto;'><i ></i>From Date</th>"
//            + "<th style='min-width:30%;width:auto;'><i ></i>To Date</th>"
//            + "<th style='min-width:30%;width:auto;'><i ></i>Total Leave Days</th>"
//            + "<th style='min-width:30%;width:auto;'><i ></i>Status</th>"
//            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
//            + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>"
//            + "</tr></thead>");
//    $.get(server_base_url + "leave/LeaveAdjustmentRequest/ViewList", {
//    }).done(function (bdata) {
//
//        if (bdata == fail) {
//            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + failMessage + "<br /><br />");
//        } else if (bdata == unauthorized) {
//            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
//        } else if (bdata == invalidSession) {
//            callSessionTimeout();
//        } else if (bdata == statusException) {
//            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
//        } else {
//            if (bdata != null) {
//                if (bdata.length > 0) {
//                    var sno = 0;
//                    var adjustedRequestedDate = fetchadjustedRequestedDate();
//                    $("#displayLeaveAdjustmentRequestListTable").append("<tbody id='displayLeaveAdjustmentRequestListTableBody' class='table-striped table-bordered' />");
//                    bdata = JSON.parse(bdata);
//                    for (var i = 0; i < bdata.length; i++) {
//                        sno++;
//                        var leaveAdjustmentRequestListjson = {
//                            lid: bdata[i]._id.$oid,
//                            reportingTo: bdata[i].reportingTo,
//                            leaveType: bdata[i].leaveType,
//                            adjustedRequestedDate: adjustedRequestedDate,
//                            fromDate: bdata[i].fromDate,
//                            toDate: bdata[i].toDate,
//                            totalLeaveDays: bdata[i].totalLeaveDays,
//                            leaveStatus: bdata[i].leaveStatus,
//                            contactNumber: bdata[i].contactNumber,
//                            reasonForLeave: bdata[i].reasonForLeave
//                        };
//                        leaveAdjustmentRequestListjson = JSON.stringify(leaveAdjustmentRequestListjson);
//                        $("#displayLeaveAdjustmentRequestListTableBody").append("<tr id='" + bdata[i].leaveStatus + "' style='cursor:pointer;' >"
//                                + "<td>" + sno + "</td>"
//                                + "<td style='cursor:pointer;'>" + bdata[i].reportingTo + "</td>"
//                                + "<td style='cursor:pointer;'>" + bdata[i].leaveType + "</td>"
//                                + "<td style='cursor:pointer;'>" + dateConvert(adjustedRequestedDate) + "</td>"
//                                + "<td style='cursor:pointer;'>" + bdata[i].fromDate + "</td>"
//                                + "<td style='cursor:pointer;'>" + bdata[i].toDate + "</td>"
//                                + "<td style='cursor:pointer;'>" + bdata[i].totalLeaveDays + "</td>"
//                                + "<td style='cursor:pointer;'>" + bdata[i].leaveStatus + "</td>"
//                                + "<td style='cursor:pointer;' onclick=updateListOfLeaveAdjustmentRequestDetails('" + encodeURI(leaveAdjustmentRequestListjson) + "')>" + ' <button type="button"  class="btn btn-primary mr5" style="align:center;color:white"   >EDIT</button>' + "</td>"
//                                + "<td onclick=deleteListOfLeaveAdjustmentRequestDetails('" + bdata[i]._id.$oid + "')>" + ' <button type="button" class="btn btn-danger mr5"   style="align:center;color:white" >DELETE</button>' + "</td></tr>");
//                    }
//                    $('#displayLeaveAdjustmentRequestListTable').append("</table>");
//                    $('#displayLeaveAdjustmentRequestListTable').dataTable();
//                }
//            }
//        }
//    });
//}

