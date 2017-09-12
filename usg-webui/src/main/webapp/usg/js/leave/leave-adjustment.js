/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function leaveAdjustment(divId) {

    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave </a></label> > <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> > <label>Leave Adjustment</label>');

    $("#" + divId).text("").append('<div id="leaveAdjustmentDivId"></div>');
    $("#leaveAdjustmentDivId").text("").append('<div id="leaveAdjustmentTabMenu" />');

    $("#leaveAdjustmentTabMenu").append('<div id="leaveAdjustmentMainMenu" class="row" />');
    $("#leaveAdjustmentTabMenu").append('<div id="leaveAdjustmentListMainMenu" class="row" />');
    $("#leaveAdjustmentTabMenu").append('<div id="leaveAdjustmentDetailsMainMenu" class="row" />');
    $("#leaveAdjustmentTabMenu").append('<div id="leaveAdjustmentEmployeeListMainMenu" class="row" />');

    $("#leaveAdjustmentMainMenu").append('<div id="leaveAdjustmentMainPanel" class="panel panel-blue" />');
    $("#leaveAdjustmentMainPanel").append('<div id="leaveAdjustmentMainHeading" class="panel-heading" />');
    $("#leaveAdjustmentMainHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Leave Adjustment Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colleaveAdjustment"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

    $("#leaveAdjustmentMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#colleaveAdjustment").click(function () {
        $("#collapseOne1").toggle();
        if ($("#colleaveAdjustment span").hasClass("glyphicon-minus-sign")) {
            $("#colleaveAdjustment").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colleaveAdjustment").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne1").append('<div id="leaveAdjustmentMainBody" class = "panel-body pan" />');
    $("#leaveAdjustmentMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#leaveAdjustmentMainBody").append('<center><span id="leaveAdjustmentMessageDiv"></span></center>');
    $("#leaveAdjustmentMainBody").append('<div id="leaveAdjustmentBodyDiv" class="form-body pal" />');

    $("#leaveAdjustmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ddo">DDO </label><select class="form-control" name="ddoSelect" id="ddoSelect"></select>'
            + '</div><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="locationSelect" id="locationSelect"></select></div></div>');

    $("#leaveAdjustmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employeeName">Employee Name </label><input type="text" class="form-control" id="empName">'
            + '</div><div class="form-group col-lg-6"><label for="empCode">Employee Code </label><input type="text" class="form-control" id="empCode"></div></div>');

    $("#leaveAdjustmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureTypeSelect" id="natureType"></select>'
            + '</div><div class="form-group col-lg-6"><label for="leaveType">Leave Type </label><select class="form-control" name="leaveTypeSelect" id="leaveTypeSelect"></select></div></div>');

    $("#leaveAdjustmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="designationSelect" id="designation"></select>'
            + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="departmentSelect" id="department"></select></div></div>');

    $("#leaveAdjustmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fromDate">From Date </label><input type="text" class="form-control" id="fromDate" placeholder="DD/MM/YYYY"></div>'
            + '<div class="form-group col-lg-6"><label for="toDate">To Date </label><input type="text" class="form-control" id="toDate" placeholder="DD/MM/YYYY"></div></div>');
    var start = new Date();
    $("#fromDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd/mm/yy",
        startDate: start
    });

    $("#toDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd/mm/yy",
        startDate: start
    });

    $("#leaveAdjustmentBodyDiv").append("<div class='form-group' id='changeButton'><center><button id='searchButton' class='btn btn-success' onclick=searchLeaveTransactionEmployee() style='height:40px;width:80px'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetButton' onclick='resetLeaveAdjustment()' class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    getLoggedInDDOLocationInDropDown("ddoSelect", "locationSelect");
    viewOptionDropDownValues("hrms/salary/Department/ViewList", "", "department", "department", "Department");
    viewDesignationListForOption("", "designation", "Designation");
    fetchAllNaturesTypeForOptionv2("natureType");
    viewOptionDropDownValues("leave/LeaveType/ViewList", "", "leaveType", "leaveTypeSelect", "Leave Type");

    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    $("textarea").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    empLeaveTransactionDetails();
    leaveAdjustmentEmployeeList();
}

function resetLeaveAdjustment() {
    $("#empName").val("");
    $("#empCode").val("");
    $("#natureType").val('0');
    $("#leaveTypeSelect").val('0');
    $("#designation").val('0');
    $("#department").val('0');
    $("#fromDate").val("");
    $("#toDate").val("");

}


function searchLeaveTransactionEmployee() {

    $("#leaveAdjustmentListMainMenu").text("").append('<div id="empLeaveTransactionMainPanel" class="panel panel-blue" />');
    $("#empLeaveTransactionMainPanel").append('<div id="empLeaveTransactionMainHeading" class="panel-heading" />');
    $("#empLeaveTransactionMainHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>List of Employees</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colLeavePensionEmployeeList"><span class="glyphicon glyphicon-minus-sign"></span></div>');


    $("#empLeaveTransactionMainPanel").append('<div id="empLeaveTransactionCollapse" class="panel-collapse collapse in pal" />');
    $("#colLeavePensionEmployeeList").click(function () {
        $("#empLeaveTransactionCollapse").toggle();
        if ($("#colLeavePensionEmployeeList span").hasClass("glyphicon-minus-sign")) {
            $("#colLeavePensionEmployeeList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colLeavePensionEmployeeList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#empLeaveTransactionCollapse").append('<div id="empLeaveTransactionListBody" class = "panel-body pan" />');
    $("#empLeaveTransactionListBody").append('<div id="panelRow" class="row" />');

    $("#empLeaveTransactionListBody").append('<div id="empLeaveTransactionErrorMsgId"/>');
    $("#empLeaveTransactionListBody").append('<div id="empLeaveTransactionListMainBody" class="table-responsive" />');
    $("#empLeaveTransactionListMainBody").append('<table id="empLeaveTransactionTable" class="table table-bordered" />');
    $("#empLeaveTransactionTable").append('<thead id="empLeaveTransactionTableHeadId"/>');
    $("#empLeaveTransactionTable").append('<tbody id="empLeaveTransactionTableBodyId"/>');
    $("#empLeaveTransactionTableHeadId").append('<tr id="pensionEmpListHeadId"><th>Tick Any One</th><th>S.No</th><th>Employee Code</th><th>Employee Name</th><th>Location</th><th>Designation</th><th>Nature Type</th><th>Leave Type</th>');
    $("#empLeaveTransactionListMainBody").append('<center><button id="leaveTransactionData" onclick="populateLeaveTransactionData()" class="btn btn-success" style="height:40px;width:80px">Submit</button><center>');

    var ddo = getUserSessionElement(seDDOId);
    var location = getUserSessionElement(seLocationId);
    var ddoName = getUserSessionElement(seDDOName);
    var locationName = getUserSessionElement(seLocationName);
    var employeeCode = $("#empCode").val();
    var employeeName = $("#empName").val();
    var natureType = $("#natureType").val();
    var leaveType = $("#leaveTypeSelect").val();
    var designation = $("#designation").val();
    var department = $("#department").val();
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();

    var leaveAdjustmentJson = {
        ddo: ddo,
        location: location,
        employeeCode: employeeCode,
        employeeName: employeeName,
        natureType: natureType,
        leaveType: leaveType,
        designation: designation,
        department: department,
        fromDate: fromDate,
        toDate: toDate
    }

    $.get(server_base_url + "/Leave/LeaveAdjustment/Search", {
        leaveAdjustmentJson: JSON.stringify(leaveAdjustmentJson),
    }).done(function (data) {
        if (data.result == "") {
            displayErrorMessages("empLeaveTransactionErrorMsgId", NoDataFoundMessage + "");
        } else if (data.statuscode == fail) {
            displayErrorMessages("empLeaveTransactionErrorMsgId", failMessage + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displayErrorMessages("empLeaveTransactionErrorMsgId", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displayErrorMessages("empLeaveTransactionErrorMsgId", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data.result != "") {
            var mainData = data.result;
            var parseData = JSON.parse(mainData);
            var sno = 0;
            for (var i = 0; i < parseData.length; i++) {
                sno++;
                var subData = parseData[i];
                console.log(subData);

                var desName = subData.designationName;
                if (desName == undefined || desName == "undefined") {
                    desName = "";
                }

                var natureName = subData.natureTypeName;
                if (natureName == undefined || natureName == "undefined") {
                    natureName = "";
                }

                var leaveTypeName = subData.leaveTypeDescription;
                if (leaveTypeName == undefined || leaveTypeName == "undefined") {
                    leaveTypeName = "";
                }

                //Pension master Data
                $("#empLeaveTransactionTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                        + "<td><input type='radio' name='leaveTransEmp' id='leaveTransEmp" + sno + "'></td>"
                        + "<td style='cursor:pointer;'>" + sno + "<input type='hidden' value='" + encodeURI(JSON.stringify(subData)) + "'></td>"
                        + "<td style='cursor:pointer;'>" + subData.employeeCode + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                        + "<td style='cursor:pointer;'>" + locationName + "</td>"
                        + "<td style='cursor:pointer;'>" + desName + "</td>"
                        + "<td style='cursor:pointer;'>" + natureName + "</td>"
                        + "<td style='cursor:pointer;'>" + leaveTypeName + "</td>");

            }
        } else {
            displayErrorMessages("empLeaveTransactionErrorMsgId", " NO DATA FOUND" + "");
        }
    });

}

function populateLeaveTransactionData() {
    $('#empLeaveTransactionTable tbody tr input[type="radio"][name="leaveTransEmp"]:checked').each(function (i) {
        var row = $(this).closest('tr');
        var leaveTransactionData = JSON.parse(decodeURI(row.find('td:eq(1) input').val()));
        console.log(leaveTransactionData);

        if (leaveTransactionData.requestingDateInMillisecond !== "") {
            var requestDate = convertMillisecondsToDateFormat(leaveTransactionData.requestingDateInMillisecond);
            $("#leaveRequestDate").val(requestDate).attr("disabled", true);
        }

        if (leaveTransactionData.totalAppliedLeaves !== "") {
            $("#totalAppliedLeaves").val(leaveTransactionData.totalAppliedLeaves).attr("disabled", true);
        }

        if (leaveTransactionData.totalBalanceLeaves !== "") {
            $("#totalLeaveBalance").val(leaveTransactionData.totalBalanceLeaves).attr("disabled", true);
        }

        if (leaveTransactionData.fromDateInMilliSecond !== "") {
            var fromDate = convertMillisecondsToDateFormat(leaveTransactionData.fromDateInMilliSecond);
            $("#fDate").val(fromDate).attr("disabled", true);
        }

        if (leaveTransactionData.toDateInMilliSecond !== "") {
            var toDate = convertMillisecondsToDateFormat(leaveTransactionData.toDateInMilliSecond);
            $("#tDate").val(toDate).attr("disabled", true);
        }


    });
}

function empLeaveTransactionDetails() {


    $("#leaveAdjustmentDetailsMainMenu").text("").append('<div id="empLeaveTransactionDetailsDiv" class = "panel" />');
    $("#empLeaveTransactionDetailsDiv").append('<div id="empLeaveTransactionDetailsDivId" class = "panel-body pan" />');
    $("#empLeaveTransactionDetailsDivId").append('<div id="panelRow" class="form-horizontal" />');
    $("#empLeaveTransactionDetailsDivId").append('<center><h3><strong>Leave Transaction Details</strong></h3></center>')

    $("#empLeaveTransactionDetailsDivId").append('<center><span id="empLeaveTransactionDetailsMessageDiv"></span></center>');
    $("#empLeaveTransactionDetailsDivId").append('<div id="empLeaveTransactionDetailsMainDiv" class="form-body pal" />');
    $("#empLeaveTransactionDetailsMainDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="leaveRequestDate">Leave Request Date </label><input type="text" class="form-control" id="leaveRequestDate" placeholder="DD/MM/YYYY"></div>'
            + '<div class="form-group col-lg-6"><label for="totalAppliedLeaves">Total Applied Leaves </label><input type="text" class="form-control" id="totalAppliedLeaves"></div></div>');
    $("#leaveRequestDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd/mm/yy",
        yearRange: '-0:+50',
        minDate: '+0D'
    });
    $("#empLeaveTransactionDetailsMainDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="totalLeaveBalance">Total Leave Balance </label><input type="text" class="form-control" id="totalLeaveBalance"></div>'
            + '<div class="form-group col-lg-6"><label for="remarks">Remarks </label><input type="text" class="form-control" id="remarks"></div></div>');
    $("#empLeaveTransactionDetailsMainDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label>From Date </label><input type="text" class="form-control" id="fDate" placeholder="DD/MM/YYYY"></div>'
            + '<div class="form-group col-lg-6"><label>To Date </label><input type="text" class="form-control" id="tDate" placeholder="DD/MM/YYYY"></div></div>');
    var start = new Date();
    $("#fDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd/mm/yy",
        startDate: start
    });

    $("#tDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd/mm/yy",
        startDate: start
    });
    $("#empLeaveTransactionDetailsMainDiv").append('<div id="saveLeaveAdjustmentButton"><center><button id="saveLoanTransaction" class="btn btn-success" onclick="saveLeaveAdjustment()" style="height:40px;width:80px">Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;<button id="resetLoanTransaction" class="btn btn-warning" style="height:40px;width:80px">Reset</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;<button id="submitLoanTransaction" class="btn btn-success" style="height:40px;width:80px">Submit</button><center></div>');
}

function saveLeaveAdjustment() {

    $('#empLeaveTransactionTable tbody tr input[type="radio"][name="leaveTransEmp"]:checked').each(function (i) {
        var row = $(this).closest('tr');
        var leaveTransactionData = JSON.parse(decodeURI(row.find('td:eq(1) input').val()));
        console.log(leaveTransactionData);

        if (leaveTransactionData.requestingDateInMillisecond !== "") {
            var requestDateInMillis = leaveTransactionData.requestingDateInMillisecond;
        }
        if (leaveTransactionData.requestingDate !== "") {
            var requestDate = leaveTransactionData.requestingDate;
        }

        if (leaveTransactionData.totalAppliedLeaves !== "") {
            var totalAppliedLeaves = leaveTransactionData.totalAppliedLeaves;
        }

        if (leaveTransactionData.totalBalanceLeaves !== "") {
            var totalBalancedLeaves = leaveTransactionData.totalBalanceLeaves;
        }

        if (leaveTransactionData.fromDateInMilliSecond !== "") {
            var fromDateInMillis = leaveTransactionData.fromDateInMilliSecond;
        }

        if (leaveTransactionData.toDateInMilliSecond !== "") {
            var toDateInMillis = leaveTransactionData.toDateInMilliSecond;
        }
        if (leaveTransactionData.fromDate !== "") {
            var fromDate = leaveTransactionData.fromDate;
        }

        if (leaveTransactionData.toDate !== "") {
            var toDate = leaveTransactionData.toDate;
        }

        if (leaveTransactionData.department !== "") {
            var department = leaveTransactionData.department;
        }

        if (leaveTransactionData.designation !== "") {
            var designation = leaveTransactionData.designation;
        }

        if (leaveTransactionData.designationName !== "") {
            var designationName = leaveTransactionData.designationName;
        }

        if (leaveTransactionData.leaveType !== "") {
            var leaveType = leaveTransactionData.leaveType;
        }

        if (leaveTransactionData.leaveTypeDescription !== "") {
            var leaveTypeDescription = leaveTransactionData.leaveTypeDescription;
        }

        if (leaveTransactionData.natureType !== "") {
            var natureType = leaveTransactionData.natureType;
        }

        if (leaveTransactionData.natureTypeName !== "") {
            var natureTypeName = leaveTransactionData.natureTypeName;
        }

        if (leaveTransactionData.employeeCode !== "") {
            var employeeCode = leaveTransactionData.employeeCode;
        }

        if (leaveTransactionData.employeeName !== "") {
            var employeeName = leaveTransactionData.employeeName;
        }

        var loanTransactionRowId = leaveTransactionData._id.$oid;
        var ddo = getUserSessionElement(seDDOId);
        var location = getUserSessionElement(seLocationId);
        var ddoName = getUserSessionElement(seDDOName);
        var locationName = getUserSessionElement(seLocationName);

        var leaveAdjustmentJson = {
            location: location,
            ddo: ddo,
            employeeCode: employeeCode,
            employeeName: employeeName,
            natureType: natureType,
            natureTypeName: natureTypeName,
            leaveType: leaveType,
            leaveTypeDescription: leaveTypeDescription,
            department: department,
            designation: designation,
            fromDate: fromDate,
            toDate: toDate,
            fromDateInMilliSecond: fromDateInMillis,
            toDateInMilliSecond: toDateInMillis,
            totalAppliedLeaves: totalAppliedLeaves,
            totalBalanceLeaves: totalBalancedLeaves,
            requestDate: requestDate,
            requestDateInMillisecond: requestDateInMillis,
            loanTransactionRowId: loanTransactionRowId
        }

        var loginUserId = getUserSessionElement("userId");

        $.get(server_base_url + "/Leave/LeaveAdjustment/Save", {
            leaveAdjustmentJson: JSON.stringify(leaveAdjustmentJson),
            userid: loginUserId
        }).done(function (data) {
            if (data.statuscode == fail) {
                displayErrorMessages("empLeaveTransactionDetailsMessageDiv", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("empLeaveTransactionDetailsMessageDiv", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displayErrorMessages("empLeaveTransactionDetailsMessageDiv", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {

                displaySuccessMessages("empLeaveTransactionDetailsMessageDiv", successMessage, "");
                setTimeout(function () {
                    empLeaveTransactionDetails();
                    leaveAdjustmentEmployeeList();
                }, 3000);

            } else {
                displayErrorMessages("empLeaveTransactionDetailsMessageDiv", "DDO Creation Failed" + "");
            }
        });

    });

}

function leaveAdjustmentEmployeeList() {

    $("#leaveAdjustmentEmployeeListMainMenu").text("").append('<div id="empLeaveAdjustmentListDiv" class="panel panel-blue" />');
    $("#empLeaveAdjustmentListDiv").append('<div id="empLeaveAdjustmentListMainHeading" class="panel-heading" />');
    $("#empLeaveAdjustmentListMainHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>Leave Adjustment Employee List</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colLeaveAdjustmentList"><span class="glyphicon glyphicon-minus-sign"></span></div>');


    $("#empLeaveAdjustmentListDiv").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
    $("#colLeaveAdjustmentList").click(function () {
        $("#collapseOne2").toggle();
        if ($("#colLeaveAdjustmentList span").hasClass("glyphicon-minus-sign")) {
            $("#colLeaveAdjustmentList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colLeaveAdjustmentList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });

    $("#collapseOne2").append('<div id="leaveAdjustmentListBody" class = "panel-body pan" />');
    $("#leaveAdjustmentListBody").append('<div id="panelRow" class="row" />');

    $("#leaveAdjustmentListBody").append('<div id="leaveAdjustmentListErrorMsgId" />');
    $("#leaveAdjustmentListBody").append('<div id="leaveAdjustmentListMainBody" class="table-responsive" />');
    $("#leaveAdjustmentListMainBody").append('<table id="leaveAdjustmentTable" class="table table-bordered" />');
    $("#leaveAdjustmentTable").append('<thead id="leaveAdjustmentTableHeadId" />');
    $("#leaveAdjustmentTable").append('<tbody id="leaveAdjustmentTableBodyId" />');
    $("#leaveAdjustmentTableHeadId").append('<tr id="ddoListHeadId"><th>Sno</th><th>Employee Name</th><th>Employee Code</th><th>Total Cancelled Leave</th><th>Total Leave Balance</th><th>Edit</th><th>Delete</th>');

    $.post(server_base_url + "/Leave/LeaveAdjustment/List", {
    }).done(function (data) {
        if (data.statuscode == NoData) {
            displayErrorMessages("leaveAdjustmentListErrorMsgId", NoDataFoundMessage + "");
        }
        if (data == fail) {
            displayErrorMessages("leaveAdjustmentListErrorMsgId", failMessage + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displayErrorMessages("leaveAdjustmentListErrorMsgId", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("leaveAdjustmentListErrorMsgId", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("leaveAdjustmentListErrorMsgId", "No User available" + "");
        } else if (data != null) {
            var sno = 0;
            var mainData = data.result;
            for (var i = mainData.length - 1; i >= 0; i--) {
                sno++;
                var subData = mainData[i];
                var cancelLeaves = subData.totalCancelledLeaves;
                if (cancelLeaves == undefined || cancelLeaves == "undefined") {
                    cancelLeaves = "";
                }

                var balanceLeaves = subData.totalBalanceLeaves;
                if (balanceLeaves == undefined || balanceLeaves == "undefined") {
                    balanceLeaves = "";
                }
                var statusFlag = subData.status;

                $("#leaveAdjustmentTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
//                        + "<td style='cursor:pointer;'>" + location + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.employeeCode + "</td>"
                        + "<td style='cursor:pointer;'>" + cancelLeaves + "</td>"
                        + "<td style='cursor:pointer;'>" + balanceLeaves + "</td>");
                if (statusFlag == "Active") {
                    $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=editLeaveAdjustment('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>");
                    $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteLeaveAdjustment','leaveAdjustmentEmployeeList','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");
                } else if (statusFlag == "Submit") {
                    $("#" + subData._id.$oid).append("<td style='cursor:pointer;'></td>");
                    $("#" + subData._id.$oid).append("<td style='cursor:pointer;'></td>");
                }
            }
            $("#leaveAdjustmentTable").dataTable();
        } else {
            displayErrorMessages("leaveAdjustmentListErrorMsgId", NoDataFoundMessage + "");
        }
    });

}

function editLeaveAdjustment(leaveAdjustmentData, leaveAdjustmentId) {
    var leaveAdjustmentDataa = JSON.parse(decodeURI(leaveAdjustmentData));
    $("#leaveRequestDate").val(leaveAdjustmentDataa.requestDate);
    $("#totalAppliedLeaves").val(leaveAdjustmentDataa.totalAppliedLeaves);
    $("#totalLeaveBalance").val(leaveAdjustmentDataa.totalBalanceLeaves);
    $("#fDate").val(leaveAdjustmentDataa.fromDate);
    $("#tDate").val(leaveAdjustmentDataa.toDate);
    $("#remarks").val(leaveAdjustmentDataa.remarks);
    var loanTransactionRowId = leaveAdjustmentDataa.loanTransactionRowId;
    $("#saveLeaveAdjustmentButton").text("").append('<div id="updateLeaveAdjustmentButton"><center><button id="saveLoanTransaction" class="btn btn-success" onclick=updateLeaveAdjustment("' + leaveAdjustmentId + '") style="height:40px;width:80px">Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;<button id="resetLoanTransaction" class="btn btn-warning" style="height:40px;width:80px">Reset</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;<button id="submitLoanTransaction" class="btn btn-success" onclick=updateLoanTransaction("' + loanTransactionRowId + '","' + leaveAdjustmentId + '") style="height:40px;width:80px">Submit</button><center></div>');
}

function updateLoanTransaction(loanTransactionRowId, leaveAdjustmentRowId) {

    var leaveRequestDate = $("#leaveRequestDate").val();
    var fDate = $("#fDate").val();
    var tDate = $("#tDate").val();
    var remarks = $("#remarks").val();

    var leaveTransactionJson = {
        requestDate: leaveRequestDate,
        fromDate: fDate,
        toDate: tDate,
        remarks: remarks
    }

    var loginUserId = getUserSessionElement("userId");

    $.get(server_base_url + "/Leave/LeaveTransaction/Update", {
        leaveTransactionJson: JSON.stringify(leaveTransactionJson),
        userid: loginUserId,
        leaveAdjustmentUpdateId: leaveAdjustmentRowId,
        loanTransactionRowId: loanTransactionRowId
    }).done(function (data) {
        if (data.statuscode == fail) {
            displayErrorMessages("empLeaveTransactionDetailsMessageDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displayErrorMessages("empLeaveTransactionDetailsMessageDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displayErrorMessages("empLeaveTransactionDetailsMessageDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {

            displaySuccessMessages("empLeaveTransactionDetailsMessageDiv", updateMessage, "");
            setTimeout(function () {
                empLeaveTransactionDetails();
                leaveAdjustmentEmployeeList();
            }, 3000);

        } else {
            displayErrorMessages("empLeaveTransactionDetailsMessageDiv", "Leave Adjustment Creation Failed" + "");
        }
    });

}

function updateLeaveAdjustment(leaveAdjustmentId) {
    var leaveRequestDate = $("#leaveRequestDate").val();
    var fDate = $("#fDate").val();
    var tDate = $("#tDate").val();
    var remarks = $("#remarks").val();

    var leaveAdjustmentUpdateJson = {
        requestDate: leaveRequestDate,
        fromDate: fDate,
        toDate: tDate,
        remarks: remarks
    }

    var loginUserId = getUserSessionElement("userId");

    $.get(server_base_url + "/Leave/LeaveAdjustment/Update", {
        leaveAdjustmentJson: JSON.stringify(leaveAdjustmentUpdateJson),
        userid: loginUserId,
        leaveAdjustmentUpdateId: leaveAdjustmentId
    }).done(function (data) {
        if (data.statuscode == fail) {
            displayErrorMessages("empLeaveTransactionDetailsMessageDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displayErrorMessages("empLeaveTransactionDetailsMessageDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displayErrorMessages("empLeaveTransactionDetailsMessageDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {

            displaySuccessMessages("empLeaveTransactionDetailsMessageDiv", updateMessage, "");
            setTimeout(function () {
                empLeaveTransactionDetails();
                leaveAdjustmentEmployeeList();
            }, 3000);

        } else {
            displayErrorMessages("empLeaveTransactionDetailsMessageDiv", "Leave Adjustment Creation Failed" + "");
        }
    });

}

function deleteLeaveAdjustment(leaveAdjustmentId) {
    var currentLoginUser = getUserSessionElement("userId");
    $.get(server_base_url + "/Leave/LeaveAdjustment/Delete", {
        currentuser: currentLoginUser,
        leaveAdjustmentId: leaveAdjustmentId
    }).done(function (data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("leaveAdjustmentListErrorMsgId", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("leaveAdjustmentListErrorMsgId", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("leaveAdjustmentListErrorMsgId", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displaySuccessMessages("leaveAdjustmentListErrorMsgId", "This Leave Adjustment " + delete_map_message, "");
            setTimeout(function () {
                ddoListTable();
            }, 1000);
        } else if (data != null) {
            displaySuccessMessages("leaveAdjustmentListErrorMsgId", deleteMessage, "");
            setTimeout(function () {
                leaveAdjustmentEmployeeList();
            }, 3000);
        } else {
            displaySmallErrorMessagesInRed("ddoListErrorMsgId", "DDO Deletion Failed" + "");
        }
    });

}