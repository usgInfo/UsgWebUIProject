function leaveRequestDisplay1(divId)
{
    scrolupfunction();
    $("#" + divId).text("").append("<div id='testMainDivId' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'  />");
    $("#mainTabMenu").append("<div id='tableHeader'/>");

    $("#tableHeader").append("<div id='FirstPanel1' class='row' />");
    $("#tableHeader").append("<div id='tablePanel' class='row' />");
    $("#FirstPanel1").append("<div id='FirstPanel' class='panel panel-blue' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Leave Request</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelRow").append("<div id='FieldGroup0' class='form-group' />");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");


    $("#FieldGroup0").append("<div id='panelRow0' class='row' />");
    $("#panelRow0").append("<div id='FieldGroup0 ' class='form-group pal' />");
    $("#FieldGroup0").append("<div id='FieldDiv0' class='col-sm-6' />");
    $("#FieldDiv0").append("<label class=' control-label'>Employee Name</label>");
    $("#FieldDiv0").append("<select onchange='getEmployeeLeavesDetailsDetails()' id='employeeName' class='form-control'></select>");
    fetchEmployeeNameForLeaveRequest();
    $("#FieldDiv0").append("<span id='empCodeErr'></span>");
    $("#FieldDiv0").append("<input type='hidden' id='leaveTypeList' />");
    $("#FieldDiv0").append("<input type='hidden' id='id' />");
    $("#FieldDiv0").append("<input type='hidden' id='employeeJsonObject' />");
    $("#panelMainBody").append("<input type='hidden' id='saveorupdate' value='save'>");

    $("#panelMainBody").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div id='FieldGroup1' class='form-group pal' />");
    getTwoColumnInRow("FieldGroup1", "Row0", "Row0Col1", "Row0Col2");
    $("#Row0Col1").append(getLabel("Reporting To", "required") + "" + getDropDown("reportingTo"));
    $("#Row0Col2").append(getLabel("Leave Type", "required") + "" + getDropDown("leaveType"));
    getTwoColumnInRow("FieldGroup1", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("From Date", "required", "fromDate", "Enter from date", "onkeypress='return false'"));
    $("#Row1Col2").append(getLabel_InputWithSpan("To Date", "required", "toDate", "Enter to date", "onkeypress='return false'"));
    getTwoColumnInRow("FieldGroup1", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel_InputWithSpan("Contact Number", "required", "contactNumber", "Enter contact number", "onkeypress='return validateNumber(event)' maxlength=10"));
    $("#Row2Col2").append(getLabel_InputWithSpan("Reason for Leave", "required", "reasonForLeave", "Enter reason for leave", ""));
    $('#fromDate').datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd-mm-yy",
        yearRange: '-10:+10',
        minDate: '+0D'
    });
    $('#toDate').datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd-mm-yy",
        yearRange: '-10:+10',
        minDate: '+0D'
    });
//    fetchReportingToRequestDetails();
    $("#panelMainBody").append("<div id='panelRow4' class='row' />");
    $("#panelRow4").append("<div  class='col-xs-12' ><center><button type='button' id='savebuttonId'   value='Calculate' class='btn btn-primary  mr5'  onclick='validateListofLeaveRequest()'>Apply</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllLeaveRequestData()' class='btn btn-warning mr5' id='resertBackButtonId' name='reset' value='reset'>Reset</button></center></div>");

    viewlistOfLeaveRequest();
}

function validateListofLeaveRequest()
{
    $("#reportingToErr").text("");
    $("#leaveTypeErr").text("");
    $("#fromDateErr").text("");
    $("#toDateErr").text("");
    $("#contactNumberErr").text("");
    $("#reasonForLeaveErr").text("");
    var leaveType = $('#leaveType').val();
    var saveorupdate = $("#saveorupdate").val();
    var employeeName = $('#employeeName').val();
    var reportingTo = $('#reportingTo').val();
    var leaveType = $('#leaveType').val();
    var fromDate = $('#fromDate').val();
    var toDate = $('#toDate').val();
    var contactNumber = $('#contactNumber').val();
    var result = 1;
    if (preValidation(employeeName) || preValidation(reportingTo) || preValidation(fromDate) || preValidation(toDate) || preValidation(leaveType) || preValidation(contactNumber)) {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", mandatoryFieldMsg);
        return false;
    } else {
        if (reportingTo == null) {
            $("#reportingTo").focus();
            addSomeClass("reportingToFieldGroup", "has-error");
            displaySmallErrorMessages("reportingToErr", "Please select Reporting To lable Name.");
            result = 0;
        } else if (reportingTo != null) {
            removeSomeClass("reportingToFieldGroup", "has-error");
        }
        if (fromDate == null || fromDate == "") {
            displaySmallErrorMessages("fromDateErr", "Please enter from date.");
            result = 0;
        }
        if (toDate == null || toDate == "") {
            displaySmallErrorMessages("toDateErr", "Please enter to date.");
            result = 0;
        }
        if (leaveType == null || leaveType == "") {
            $("#leaveType").focus();
            addSomeClass("leaveTypeFieldGroup", "has-error");
            displaySmallErrorMessages("leaveTypeErr", "Please select Leave Type of an employee.");
            result = 0;
        } else if (leaveType != null) {
            removeSomeClass("leaveTypeFieldGroup", "has-error");
        }
        if (employeeName == null || employeeName == "") {
            $("#employeeName").focus();
            addSomeClass("employeeNameFieldGroup", "has-error");
            displaySmallErrorMessages("employeeNameErr", "Please select employee name");
            result = 0;
        } else if (employeeName != null) {
            removeSomeClass("employeeNameFieldGroup", "has-error");
        }
        if (contactNumber != "") {
            if (!contactNumber.match(numbervalidation())) {
                $("#contactNumber").focus();
                addSomeClass("contactNumberFieldGroup", "has-error");
                displaySmallErrorMessages("contactNumberErr", "Please enter valid Contact person Number.");
                result = 0;
            } else if (contactNumber.length != 10) {
                $("#contactNumber").focus();
                addSomeClass("contactNumberFieldGroup", "has-error");
                displaySmallErrorMessages("contactNumberErr", "Please enter valid 10 digits.");
                result = 0;
            }
            removeSomeClass("contactNumberFieldGroup", "has-error");
        }
        if (result != 0) {
            if (saveorupdate == "save")
                saveListOfLeaveRequestDetails();
            else if (saveorupdate == "update")
                updateListOfLeaveRequestDetails();
        }
    }
}
function saveListOfLeaveRequestDetails()
{
    var leaveTypeList = JSON.parse(decodeURI($("#leaveTypeList").val()));
    var leaveType = $('#leaveType').val();
    var leaveTypename = $("#leaveType option:selected").text();
    var leaveTypeId;
    var balanceLeaves = 0;
    var employeeId = 0;
    var employeeName = 0;
    var employeeCode;
    for (var i = 0; i < leaveTypeList.length; i++) {
        if (leaveType == leaveTypeList[i].leaveTypeId) {
            leaveTypeId = leaveTypeList[i].leaveTypeId;
            balanceLeaves = leaveTypeList[i].appliedBalanceLeaves;
            employeeId = leaveTypeList[i].employeeId;
            employeeName = leaveTypeList[i].employeeName;
            employeeCode = leaveTypeList[i].employeeCode;
        }
    }
    var reportingTo = $('#reportingTo').val();
    var fromDate = $('#fromDate').val();
    var toDate = $('#toDate').val();
    var contactNumber = $('#contactNumber').val();
    var reasonForLeave = $('#reasonForLeave').val();
    var totalLeaveGoingToApply = fetchtotalLeavesApplied("fromDate", "toDate") + 1;
    if (totalLeaveGoingToApply < 0 || totalLeaveGoingToApply == 0) {
        displaySmallErrorMessages("toDateErr", "Please enter valid To date.");
        return;
    }
    var requestedDate = fetchRequestedDate();
    var leaveStatus = "Applied";
    if (totalLeaveGoingToApply <= balanceLeaves) {
        var leaveRequestJson = {
            reportingTo: reportingTo,
            leaveType: leaveTypename,
            leaveTypeId: leaveTypeId,
            requestedDate: requestedDate,
            fromDate: fromDate,
            toDate: toDate,
            contactNumber: contactNumber,
            reasonForLeave: reasonForLeave,
            leaveStatus: leaveStatus,
            totalLeaveDays: totalLeaveGoingToApply,
            employeeId: employeeId,
            employeeName: employeeName,
            employeeCode: employeeCode,
        };
        $.post(server_base_url + "leave/LeaveRequest/Save", {
            leaveRequestJson: JSON.stringify(leaveRequestJson)
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
                leaveRequestDisplay1("dashBoardBodyMainDiv");
                displaySuccessMessages("pregsuccessBefore", "" + successMessage + "");
                clearSuccessMessageAfterTwoSecond("pregsuccessBefore");
            }
        });
    } else {
        alert("Only " + balanceLeaves + " Leaves are remaining");
    }
}
function updateListOfLeaveRequest(obj)
{
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#employeeName option:contains('" + obj.employeeName + "')").attr("selected", "selected");
    $("#reportingTo option:contains('" + obj.reportingTo + "')").attr("selected", "selected");
    $("#fromDate").val(obj.fromDate);
    $("#toDate").val(obj.toDate);
    $("#contactNumber").val(obj.contactNumber);
    $("#reasonForLeave").val(obj.reasonForLeave);
    $("#id").val(obj._id.$oid);
    $("#saveorupdate").val("update");
    $("#savebuttonId").val("").text("").text("Update");
    setTimeout(function () {
        $("#leaveType option:contains('" + obj.leaveType + "')").attr("selected", "selected");
    }, 800);
    getEmployeeLeavesDetailsDetailsInUpdate(encodeURI(JSON.stringify(obj)));
    addButtonOnclickFunction("resertBackButtonId", "Back", "leaveRequestDisplay1('" + DashboardMainDivID + "')");
}

function updateListOfLeaveRequestDetails()
{
    var leaveTypeList = JSON.parse(decodeURI($("#leaveTypeList").val()));
    var leaveType = $('#leaveType').val();
    var leaveTypename = $("#leaveType option:selected").text();
    var id = $('#id').val();
    var leaveTypeId;
    var balanceLeaves = 0;
    var employeeId = 0;
    var employeeName = 0;
    var employeeCode;
    for (var i = 0; i < leaveTypeList.length; i++) {
        if (leaveType == leaveTypeList[i].leaveTypeId) {
            leaveTypeId = leaveTypeList[i].leaveTypeId;
            balanceLeaves = leaveTypeList[i].appliedBalanceLeaves;
            employeeId = leaveTypeList[i].employeeId;
            employeeName = leaveTypeList[i].employeeName;
            employeeCode = leaveTypeList[i].employeeCode;
        }
    }
    var reportingTo = $('#reportingTo').val();
    var fromDate = $('#fromDate').val();
    var toDate = $('#toDate').val();
    var contactNumber = $('#contactNumber').val();
    var reasonForLeave = $('#reasonForLeave').val();
    var totalLeaveGoingToApply = fetchtotalLeavesApplied("fromDate", "toDate") + 1;
    if (totalLeaveGoingToApply < 0 || totalLeaveGoingToApply == 0) {
        displaySmallErrorMessages("toDateErr", "Please enter valid To date.");
        return;
    }
    var requestedDate = fetchRequestedDate();
    var leaveStatus = "Applied";
    if (totalLeaveGoingToApply <= balanceLeaves) {
        var leaveRequestJson = {
            reportingTo: reportingTo,
            leaveType: leaveTypename,
            leaveTypeId: leaveTypeId,
            requestedDate: requestedDate,
            fromDate: fromDate,
            toDate: toDate,
            contactNumber: contactNumber,
            reasonForLeave: reasonForLeave,
            leaveStatus: leaveStatus,
            totalLeaveDays: totalLeaveGoingToApply,
            employeeId: employeeId,
            employeeName: employeeName,
            employeeCode: employeeCode,
        };
        $.post(server_base_url + "leave/LeaveRequest/Update", {
            objJson: JSON.stringify(leaveRequestJson),
            Id: id
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
                leaveRequestDisplay1("dashBoardBodyMainDiv");
                displaySuccessMessages("pregsuccessBefore", "" + updateMessage + "");
                clearSuccessMessageAfterTwoSecond("pregsuccessBefore");
            }
        });
    } else {
        alert("Only " + balanceLeaves + " Leaves are remaining");
    }
}
function fetchEmployeeNameForLeaveRequest()
{
    $("#employeeName").text("").append("<option value='0'>----Select Employee----</option>");
    $("#reportingTo").text("").append("<option value='0'>----Select Employee----</option>");
    $.get(server_base_url + "hrms/salary/Employee/ViewList", {
    }).done(function (data) {
        for (var i = 0; i < data.length; i++) {
            $("#employeeName").append("<option value='" + data[i]._id.$oid + "'>" + data[i].employeeName + "</option>");
            $("#reportingTo").append("<option value='" + data[i].employeeName + "'>" + data[i].employeeName + "</option>");
        }
    });
}

function fetchReportingToRequestDetails()
{
    $("#reportingTo").text("").append("<option value='0'>----Select Employee----</option>");
    $.get(server_base_url + "hrms/salary/Employee/ViewList", {
    }).done(function (data) {
        for (var i = 0; i < data.length; i++) {
            $("#reportingTo").append("<option>" + data[i].employeeName + "</option>");
        }
    });
}
function fetchLeaveTypeRequestDetails(divId)
{
    $("#" + divId).text("").append("<option value=''>----Select Leave Type----</option>");
    $.get(server_base_url + "leave/LeaveType/ViewList", {
    }).done(function (data) {

        for (var i = 0; i < data.length; i++) {

            $("#" + divId).append("<option>" + data[i].leaveType + "</option>");
        }

    });
}
function viewLeaveRequest(divId)
{
    $("#" + divId).text("").append("<div class='tab-pane' id='viewUser'/>");
    $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv1' />");
    $("#viewUserSectionTableDiv1").append("<table class='table table-bordered table-striped table-warning mb30' id='displayLeaveRequestTable' />");
    $("#displayLeaveRequestTable").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Leave Type</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Total Leave (Days)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Applied Leave (Days)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Adjusted Leave (Days)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Balance Leave (Days)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Applied Leave (Days)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Applied Balance Leave (Days)</th>"
            + "</tr></thead>");
}
function viewlistOfLeaveRequest()
{
    $("#tablePanel").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Leave Request</center>");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").append("<div id='MessageDivInTable' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");

    $("#listpanelRow").text("").append("<div class='tab-pane' id='viewUser1'/>");
    $("#viewUser1").append("<div class='table-responsive' id='viewUserSectionTableDiv2' />");
    $("#viewUserSectionTableDiv2").append("<table class='table table-bordered table-striped table-warning mb30' id='displayLeaveRequestTable1' />");
    $("#displayLeaveRequestTable1").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Reporting To</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Leave Type</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Requested Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>From Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>To Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Total Leave Days</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Status</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "leave/LeaveRequest/ViewList", {
    }).done(function (bdata) {
        if (bdata == fail) {
            displayLargeErrorMessages("MessageDivInTable", noDataAvailable);
        } else if (bdata == unauthorized) {
            displayLargeErrorMessages("MessageDivInTable", "" + unauthorizedMessage + "<br />");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayLargeErrorMessages("MessageDivInTable", "" + statusExceptionMessage + "<br/><br />");
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayLeaveRequestTable1").append("<tbody id='displayLeaveRequestBody' class='table-striped table-bordered' />");
                    bdata = JSON.parse(bdata);
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var leaveRequestListjson = JSON.stringify(bdata[i]);
                        if (bdata[i].leaveStatus != "Approved") {
                            $("#displayLeaveRequestBody").append("<tr id='" + bdata[i].leaveStatus + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].reportingTo + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].leaveType + "</td>"
                                    + "<td style='cursor:pointer;'>" + dateConversion(bdata[i].requestedDate) + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].fromDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].toDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].totalLeaveDays + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].leaveStatus + "</td>"
                                    + "<td style='cursor:pointer;' onclick=updateListOfLeaveRequest('" + encodeURI(leaveRequestListjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                                    + "<td onclick=deletePopUp('deleteListOfLeaveRequest','viewlistOfLeaveRequest','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;&nbsp;<a  class="anchor_delete"  style="align:center;" >Delete</a>' + "</td></tr>");
                        } else if (bdata[i].leaveStatus == "Approved") {
                            $("#displayLeaveRequestBody").append("<tr id='" + bdata[i].leaveStatus + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].reportingTo + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].leaveType + "</td>"
                                    + "<td style='cursor:pointer;'>" + dateConversion(bdata[i].requestedDate) + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].fromDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].toDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].totalLeaveDays + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].leaveStatus + "</td>"

                                    + "<td style='cursor:pointer;' onclick='javascript:void(0)')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a   class="anchor_edit" style="margin-width:1%,width:80px" disabled>Edit</a>' + "</td>"
                                    + "<td onclick='javascript:void(0)'>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;&nbsp;<a  class="anchor_delete"  style="align:center;" disabled>Delete</a>' + "</td></tr>");
                        }

                    }
                    $('#displayLeaveRequestTable1').append("</table>");
                    $('#displayLeaveRequestTable1').dataTable();
                }
            }
        }
    });
}
function dateConversion(date) {
    var date1 = date / 1000;
    var d = new Date(0);
    d.setUTCSeconds(date1);
    var tempDate = new Date(d);
    var temp = tempDate.getDate() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getFullYear();
    d = temp;
    return d;
}
function deleteListOfLeaveRequest(id)
{
    $.post(server_base_url + "leave/LeaveRequest/Delete", {
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
            viewlistOfLeaveRequest();
            displaySuccessMessages("MessageDivInTable", deleteMessage, "");
            clearSuccessMessageAfterTwoSecond("MessageDivInTable");
        }
    });
}
function validatecontactNumber(key)
{
    var keycode = (key.which) ? key.which : key.keyCode;
    //comparing pressed keycodes
    if (!(keycode == 8 || keycode == 12) && (keycode < 13 || keycode > 13) && (keycode < 48 || keycode > 57))
    {
        return false;
    } else {
        return true;
    }
}
function wipeAllLeaveRequestData()
{
    $('#reportingTo').val("");
    $('#leaveType').val("");
    $('#fromDate').val("");
    $('#toDate').val("");
    $('#contactNumber').val("");
    $('#reasonForLeave').val("");
    $('#reportingToErr').text("");
    $('#leaveTypeErr').text("");
    $('#fromDateErr').text("");
    $('#toDateErr').text("");
    $('#contactNumberErr').text("");
    $('#reasonForLeaveErr').text("");
}
function fetchtotalLeavesApplied(fromDate, toDate) {
    var fDate = $("#fromDate").datepicker("getDate");
    var tDate = $("#toDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
function fetchRequestedDate()
{
    var presentDay = new Date().getDate();
    if (presentDay < 10) {
        presentDay = "0" + presentDay;
    }
    var presentMonth = new Date().getMonth() + 1;
    var presentYear = new Date().getFullYear();
    var requestedDate = presentDay + "-0" + presentMonth + "-" + presentYear;
    return requestedDate;
}
function getEmployeeDetailByEmployeeCodeInLeaveRequest() {
    var empCode = $("#employeeName").val();
    $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
        employeeCode: empCode
    }).done(function (data) {
        $("#employeeJsonObject").val(encryptBase64String(encodeURI(JSON.stringify(data[0]))));
        var empDetails = encryptBase64String(encodeURI(JSON.stringify(data[0])));
//        $.get(server_base_url + "leave/LeaveRequest/GetEmpLeaves", {
//            employeeCode: empCode
//        }).done(function (bdata) {
//            alert(bdata);
//        });
        setTimeout(function () {
            getAllLeaveTypeList("FieldGroup", empDetails);
        });
    });
}
function getAllLeaveTypeList(divId, empDetails)
{
    empDetails = JSON.parse(decodeURI(decryptBase64String(empDetails)));
    $("#leaveType").text("");
    $("#" + divId).text("").append("<div class='tab-pane' id='viewleaveType'/>");
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
    $.get(server_base_url + "leave/LeaveType/ViewList", {
    }).done(function (bdata) {
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
                    $("#displayLeaveTypeTable").append("<tbody id='displayLeaveTypeTableBody' class='table-striped table-bordered' />");
                    var sno = 0;
                    var adjustedLeave = 0;
                    var totalLeave = 0;
                    var balanceLeave = 0;
                    var appliedBalanceLeave = 0;
                    var leaveTypeList = [];
                    var arrayJson = [];
                    for (var i = 0; i < bdata.length; i++) {
                        for (var j = 0; j < bdata[i].leaveTypeDetails.length; j++) {
                            if (empDetails.salaryBillType == bdata[i].leaveTypeDetails[j].employeeCategory) {
                                $("#leaveType").append("<option id=" + bdata[i].leaveType + ">" + bdata[i].leaveType + "</option>");
                                var totalnoOfleavesApproved = 0;
                                var appliedLeave = 0;
                                sno++;
                                $.get(server_base_url + "leave/LeaveRequest/GetEmpLeaves", {
                                    leaveTypeId: bdata[i]._id.$oid,
                                    employeeId: empDetails._id.$oid,
                                    condition: "SearchEmployeeAppliedLeaves"
                                }).done(function (pdata) {
                                    totalnoOfleavesApproved = pdata.totalnoOfleavesApproved;
                                    appliedLeave = pdata.appliedLeave;
                                    var objArray = {
                                        totalnoOfleavesApproved: totalnoOfleavesApproved,
                                        appliedLeave: pdata.appliedLeave,
                                        sno: sno
                                    };
                                    arrayJson[sno] = objArray;
                                });
                            }
                        }
                    }
                    //
                    sno = 0;
                    for (var i = 0; i < bdata.length; i++) {
                        for (var j = 0; j < bdata[i].leaveTypeDetails.length; j++) {
                            if (empDetails.salaryBillType == bdata[i].leaveTypeDetails[j].employeeCategory) {
                                setTimeout(function () {
                                    console.log(sno);
                                }, 2000);
                                sno++;
                                totalLeave = bdata[i].leaveTypeDetails[j].maxLeavePerYear;
                                balanceLeave = totalLeave - arrayJson[j].totalnoOfleavesApproved;
                                appliedBalanceLeave = totalLeave - arrayJson[j].totalnoOfleavesApproved - arrayJson[j].appliedLeave;
                                bdata[i].balanceLeave = appliedBalanceLeave;
                                leaveTypeList.push(bdata[i]);
                                $("#displayLeaveTypeTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                        + "<td>" + sno + "</td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].leaveType + "</td>"
                                        + "<td style='cursor:pointer;'>" + totalLeave + "</td>"
                                        + "<td style='cursor:pointer;'>" + totalnoOfleavesApproved + "</td>"
                                        + "<td style='cursor:pointer;'>" + adjustedLeave + "</td>"
                                        + "<td style='cursor:pointer;'>" + balanceLeave + "</td>"
                                        + "<td style='cursor:pointer;'>" + appliedLeave + "</td>"
                                        + "<td style='cursor:pointer;'>" + appliedBalanceLeave + "</td></tr>");
                            }
                        }
                    }
                    $("#leaveTypeList").val(encodeURI(JSON.stringify((leaveTypeList))));
                }
            }
        }
    });
//    }, 400);
}
function appendDataToLeaveType(sno, bdata, totalLeave, totalnoOfleavesApproved, adjustedLeave, balanceLeave, appliedLeave, appliedBalanceLeave) {
    bdata = JSON.parse(decodeURI(bdata));
    $("#displayLeaveTypeTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
            + "<td>" + sno + "</td>"
            + "<td style='cursor:pointer;'>" + bdata[i].leaveType + "</td>"
            + "<td style='cursor:pointer;'>" + totalLeave + "</td>"
            + "<td style='cursor:pointer;'>" + totalnoOfleavesApproved + "</td>"
            + "<td style='cursor:pointer;'>" + adjustedLeave + "</td>"
            + "<td style='cursor:pointer;'>" + balanceLeave + "</td>"
            + "<td style='cursor:pointer;'>" + appliedLeave + "</td>"
            + "<td style='cursor:pointer;'>" + appliedBalanceLeave + "</td></tr>");
}
function getRemainingLeaves() {
    return 10;
}
function getEmployeeLeavesDetailsDetails() {
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
    });
}
function getEmployeeLeavesDetailsDetailsInUpdate(obj) {
    obj = JSON.parse(decodeURI(obj));
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
            if (obj.leaveType == data[i].leavetypeName) {
                data[i].totalAppliedLeaves = data[i].totalAppliedLeaves - obj.totalLeaveDays;
                data[i].appliedBalanceLeaves = parseInt(data[i].appliedBalanceLeaves) + parseInt(obj.totalLeaveDays);
            }
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
    });
}