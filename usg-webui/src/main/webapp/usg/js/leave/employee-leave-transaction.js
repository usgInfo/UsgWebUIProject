/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//1. functionality of calculate button to be done

var updateEmpJsonData = "";
function employeeLeaveTransaction(divId) {
    scrolupfunction();
    if (!checkUserPrivelege(pvViewEmployeeLeaveTransactionMaster)) {
        return;
    }
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> >> <label>Leave Transaction</label>');
    $("#" + divId).text("").append('<div id="empLeaveTransactionDivId"></div>');
    $("#empLeaveTransactionDivId").text("").append('<div id="empLeaveTransactionTabMenu" />');
    $("#empLeaveTransactionTabMenu").append('<div id="empLeaveTransactionMainMenu" class="row" />');
    $("#empLeaveTransactionTabMenu").append('<div id="empLeaveTransactionListMainMenu" class="row" />');
    $("#empLeaveTransactionTabMenu").append('<div id="saveButtonRow" class="row" />');
    $("#empLeaveTransactionMainMenu").append('<div id="empLeaveTransactionMainPanel" class="panel panel-blue" />');
    $("#empLeaveTransactionMainPanel").append('<div id="empLeaveTransactionMainHeading" class="panel-heading" />');
    $("#empLeaveTransactionMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>Employee Leave Transaction</center></a>');
    $("#empLeaveTransactionMainHeading").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#empLeaveTransactionMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    addToggleToId("colMaritial1", "collapseOne1");
    $("#collapseOne1").append('<div id="empLeaveTransactionMainBody" class = "panel-body pan" />');
    $("#empLeaveTransactionMainBody").append('<div id="panelRow" class="form-horizontal" />');
    $("#empLeaveTransactionMainBodyErr").append('<div id="panelRowErr" class="form-horizontal" />');
    $("#panelRowErr").append('<label id=eltpanelRowErr></label>');
    $("#empLeaveTransactionMainBody").append('<center><span id="empLeaveTransactionMessageDiv"></span></center>');
    $("#empLeaveTransactionMainBody").append('<div id="empLeaveTransactionBodyDiv" class="row" />');
    $("#empLeaveTransactionBodyDiv").append('<div id="errDiv" />');
    $("#empLeaveTransactionBodyDiv").append('<div id="saveorupdate" />');
    //  $("#empLeaveTransactionBodyDiv").append('<div id="' + successMsgDivCF + '" />');

    $("#empLeaveTransactionBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ddo">DDO <span class="require">*</span></label><select id="ddo"  class="form-control"></select><input type="hidden" id="employeeId"/><input type="hidden" id="name"/><input type="hidden" id="employeeJsonObject" /><input type="hidden" id="leaveTypeJson" /><input type="hidden" id="appliedLeavesDate" /><span id="employeeNameErr" class="text-danger"></span></div></div>');
    $("#empLeaveTransactionBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employeeName">Employee Name</label><select id="employeeName"  class="form-control"></select><span id="ddoErr" class="text-danger"></span></div>'
            + '<div class="form-group col-lg-6"><label for="leaveType">Leave Type <span class="require">*</span> </label><select  id="leaveType"  class="form-control"  /><span id="leaveTypeErr" class="text-danger"></span></div></div>');
    getLoggedInDDOInDropDown("ddo", "");
    $("#empLeaveTransactionBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="department">Department </label><input type="text" id="department" class="form-control" readonly /><span id="departmentErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="designation">Designation </label><input type="text" id="designation" class="form-control" readonly /><span id="designationErr" class="text-danger"></span></div></div></div>');
    $("#empLeaveTransactionBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="contactNumber">Contact Number <span class="require">*</span></label><input type="text" id="contactNumber" maxlength="10" onkeypress="return numericVal(event)" class="form-control" /><span id="contactNumberErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="earnedLeaves">Earned Leaves <span class="require">*</span></label><input type="text" id="earnedLeaves" class="form-control" /><span id="earnedLeavesErr" class="text-danger"></span></div></div>');
//     $("#empLeaveTransactionBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="eligibilityLeaves">Eligibility Leaves <span class="require">*</span></label><input type="text" id="eligibilityLeaves" class="form-control" /><span id="eligibilityLeavesErr" class="text-danger"></span>'
//            + '</div><div class="form-group col-lg-6"><label for="earnedLeaves">Earned Leaves <span class="require">*</span></label><input type="text" id="earnedLeaves" class="form-control" /><span id="earnedLeavesErr" class="text-danger"></span></div></div>');
    $("#empLeaveTransactionBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="totalAppliedLeaves">Total Applied Leaves </label><input type="text" id="totalAppliedLeaves" class="form-control" /><span id="totalAppliedLeavesErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="totalBalanceLeaves">Total Balance Leaves </label><input type="text" id="totalBalanceLeaves" class="form-control" /><span id="totalBalanceLeavesErr" class="text-danger"></span></div></div>');
    $("#empLeaveTransactionBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fromDate">From Date <span class="require">*</span></label><input type="text" id="fromDate" class="form-control" /><span id="fromDateErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="toDate">To Date <span class="require">*</span><span id="todateerr"></span></label><input type="text" id="toDate" class="form-control" /><span id="toDateErr" class="text-danger"></span></div></div>');
//    var start = new Date();
//    $('#fromDate').datepicker({
//        changeMonth: true,
//        changeYear: true,
//        startDate: start
//
//    });
//    $('#toDate').datepicker({
//        changeMonth: true,
//        changeYear: true,
//        startDate: start
//
//    });
    var currentFinancialYear = getUserSessionElement(seLeaveCurrentFinancialYear);
    if (currentFinancialYear != null)
    {
        var toFinacialYear = null;
        var fromFinacialYear = null;
        if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
        {
            var finyearArray = currentFinancialYear.split("~");
        }
        if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
        {
            fromFinacialYear = finyearArray[0];
            toFinacialYear = finyearArray[1];
        }

        $("#fromDate").datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear
        });
        $('#toDate').datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear

        });
    } else
    {
        var start = new Date();
        $('#fromDate').datepicker({
            changeMonth: true,
            changeYear: true,
            startDate: start

        });
        $('#toDate').datepicker({
            changeMonth: true,
            changeYear: true,
            startDate: start

        });
    }
    $("#empLeaveTransactionBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="reasonForLeaves">Reason For Leave </label><textarea class="form-control" rows="2" id="reasonForLeave" placeholder="Please enter Reason..."></textarea></div></div>');
    // + '</div><div class="form-group col-lg-6"><label for="reasonForLeaves">Reason For Leave </label><textarea class="form-control" rows="2" id="reasonForLeave" placeholder="Please enter Reason..."></textarea></div></div>');
//    $("#empLeaveTransactionBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="contactNumber">Contact Number <span class="require">*</span></label><input type="text" id="contactNumber" maxlength="10" class="form-control" /><span id="contactNumberErr" class="text-danger"></span>'
//            + '</div><div class="form-group col-lg-6"><label for="reasonForLeaves">Reason For Leave </label><textarea class="form-control" rows="2" id="reasonForLeave" placeholder="Please enter Reason..."></textarea></div></div>');
    $("#empLeaveTransactionBodyDiv").append("<div class='form-group col-lg-12' id='ddoButton'><center><button id='calculateButton' onclick=calculateLeavetransaction() class='btn btn-success' style='height:40px;width:80px'>Calculate</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=wipeAllDataInThisDivInLeaveTransaction('collapseOne1') class='btn btn-warning' id='reset' value='reset' style='height:40px;width:80px'>Reset</button></center></div>");
    viewCityForOption("", "postingCity");
    var options = ["Option 1", "Option 2"];
    viewOptionIdName("hrms/common/Nature/View", "", "natureName", "natureType", "Nature Type");
    viewOptionIdName("leave/LeaveType/ViewList", "", "leaveType", "leaveType", "Leave Type");
    //   getHardCodedOptions("", "employeeCategory", "Employee Category", options);
    viewEmployeeNameEmployeeCode("employeeName", "Employee Name");
//    $("#leaveType").attr("onchange", "getAllEmployeeBasedOnLeaveType()");


    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    $("textarea").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });


    $("#dashboardBodyMainDiv #viewButtonRow").remove();
    $("#dashboardBodyMainDiv").append('<div id="viewButtonRow" class="row" />');
    $("#viewButtonRow").append("<div id='eltSecondPanel' class='panel panel-blue' />");
    $("#eltSecondPanel").append("<div id='eltListPanelHeading1' class='panel-heading' />");
    $("#eltListPanelHeading1").append("<h4 id='eltfirstHeader1' class='panel-title' />");
    $("#eltfirstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>List of Employee Leave Transaction(s)</center>");
    $("#eltfirstHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#eltSecondPanel").append("<div id='eltcollapseOne3' class='panel-collapse collapse in pal' />");
    addToggleToId("colMaritial2", "eltcollapseOne3");
    $("#eltcollapseOne3").append("<div id='eltlistpanelMainBody1' class = 'panel-body pan' />");
    $("#eltlistpanelMainBody1").append("<div id='eltlistpanelRow1' class='row' />");
    $("#eltlistpanelRow1").append("<div class='tab-pane' id='viewList'/>");
    $("#viewList").append("<div class='table-responsive' id='viewSectionTableDiv' />");
    $("#viewList").append("<div class='form-group col-lg-12' id='savebtn'><center><button id='saveButton' onclick=saveLeaveTransaction() class='btn btn-success' style='height:40px;width:80px' disabled=true>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='resetViewTable()' class='btn btn-warning' id='reset1' value='reset' style='height:40px;width:80px' disabled=true>Reset</button></center></div>");
    $("#viewList").append('<div id="' + successMsgDivCF + '" />');
    $("#dashboardBodyMainDiv #editButtonRow").remove();
    $("#employeeName").attr("onchange", "getEmployeeDataForEmployeeTransaction()");
    $("#leaveType").attr("onchange", "getLeaveDaysDetailsForLeaveTransaction()");
//    $("#dashboardBodyMainDiv").append('<div id="editButtonRow" class="row" />');
//    $("#editButtonRow").append("<div id='eltThirdPanel' class='panel panel-blue' />");
//    $("#eltThirdPanel").append("<div id='eltListPanelHeading2' class='panel-heading' />");
//    $("#eltListPanelHeading2").append("<h4 id='eltfirstHeader2' class='panel-title' />");
//
//    $("#eltfirstHeader2").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>Edit Employee Leave Transaction</center>");
//    $("#eltfirstHeader2").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial3'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
//    $("#eltThirdPanel").append("<div id='eltcollapseOne4' class='panel-collapse collapse in pal' />");
//
//    addToggleToId("colMaritial3", "eltcollapseOne4");
//
//    $("#eltcollapseOne4").append("<div id='eltlistpanelMainBody2' class = 'panel-body pan' />");
//    $("#eltcollapseOne4").append("<center><label id='updatefailed' span='red'></label></center>");
//    $("#eltlistpanelMainBody2").append("<div id='eltlistpanelRow2' class='row' />");
//    $("#eltlistpanelRow2").append("<div class='tab-pane' id='viewList2'/>");
//    $("#viewList2").append("<div class='table-responsive' id='viewSectionTableDiv2' />");
//    $("#viewList2").append("<div class='form-group col-lg-12' id='updatebtn'><center><button id='updateButton' onclick=updateLeaveTransaction() class='btn btn-success' style='height:40px;width:80px' disabled=true>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='resetEditTable()' class='btn btn-warning' id='reset2' value='reset' style='height:40px;width:80px' disabled=true>Reset</button></center></div>");
    $("#employeeLeaveTransactionListBasedOnDDoLocation").text("");
    $("#" + divId).append('<div id="employeeLeaveTransactionListBasedOnDDoLocation"></div>');
    setFromdateTodate("fromDate", "toDate");
}
function  setFromdateTodate(fromDateId, toDate) {

    $.get(server_base_url + "leave/financialYear/FetchActive", {
    }).done(function (bdata) {
        bdata = JSON.parse(bdata);
        var todates = bdata.fromDate.split("/");
        var fromDates = bdata.toDate.split("/");
        var fromdt = new Date(fromDates[1] + "/" + fromDates[0] + "/" + fromDates[2]);
        var todt = new Date(todates[1] + "/" + todates[0] + "/" + todates[2]);
        $("#fromDate").datepicker({
            startDate: todt,
            endDate: fromdt,
        });
        $("#toDate").datepicker({
            startDate: todt,
            endDate: fromdt,
        });
    });
}
function updateLeaveTransaction() {

    if (!checkUserPrivelege(pvUpdateEmployeeLeaveTransactionMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    if (updateEmpJsonData !== "") {
        $.get(server_base_url + "UpdateLeaveTransaction", {
            leavetransaction: JSON.stringify(updateEmpJsonData),
            loginid: getUserSessionElement("userId")
        }).done(function (bdata) {
            if (validateResponseData(bdata, "")) {
                return;
            }

            if (bdata === "true") {
                $("#updatefailed").html("Update Successful");
                resetEditTable();
                $("#updateButton").attr("disabled", false);
                $("#reset2").attr("disabled", false);
            } else {
                $("#updatefailed").html("Update Failed");
            }

        });
    }
}

//function viewCityForOption(name, DivId) {
//
//    $.get(server_base_url + "hrms/salary/City/ViewList", {
//    }).done(function (pdata) {
//        if (validateResponseData(pdata, "")) {
//            return;
//        }
//        if (pdata !== null) {
//            if (pdata.length > 0) {
//                $("#" + DivId).append("<option value = '' selected disabled>---- Select City ----</option>");
//                for (var i = 0; i < pdata.length; i++) {
//                    if (name == pdata[i].cityName) {
//                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].cityName + "</option>");
//                    } else {
//                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].cityName + "</option>");
//                    }
//                }
//            }
//        }
//    });
//}

function viewEmployeeNameEmployeeCode(DivId, message)
{
//    $.get(server_base_url + "hrms/salary/Employee/ViewName", {    
    var ddo = getUserSessionElement(seDDOId);
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];
    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: ddo,
        fromDt: fromDate,
        toDate: toDate,
        location: getUserSessionElement(seLocationId)
    }).done(function (data) {
        data = JSON.parse(data)
        if (data == fail || data == "" || data == undefined) {
            $("#" + DivId).text("").append("<option  value='' selected disabled>---No data available ----</option>");
        } else if (data != null) {
            $("#" + DivId).text("").append("<option  value='' selected disabled>----[Employee Code]-Employee Name ----</option>");
            for (var i = 0; i < data.length; i++)
            {
                $("#" + DivId).append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
            }
        }

    });
}

function getEmployeeDataForEmployeeTransaction() {
    var empCode = $("#employeeName").val();
    $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
        employeeCode: empCode
    }).done(function (pdata) {
        $("#pregsuccessBefore").text("");
        $('#employeeId').val(pdata[0]._id.$oid);
        $('#name').val(pdata[0].employeeName);
        // $('#ddo').val(pdata[0].ddo);
        $('#designation').val(pdata[0].designation);
        $('#department').val(pdata[0].department);
        getLeaveTypeForLeaveTransactionBasedOnEc(pdata[0].classMaster, pdata[0].gender);
        $('#employeeJsonObject').val(encodeURI(JSON.stringify(pdata[0])));
        $('#eligibilityLeaves').text("").val("");
        $('#earnedLeaves').text("").val("");
        $('#totalAppliedLeaves').text("").val("");
        $('#totalBalanceLeaves').text("").val("");
    });
}
function getLeaveTypeForLeaveTransactionBasedOnEc(employeeCategory, gender) {
    if (employeeCategory !== undefined) {
        employeeCategory = employeeCategory.toLowerCase().replace(" ", "");
    }
    var employeeId = $('#employeeId').val();
//    $.get(server_base_url + "leave/LeaveType/ViewList", {
    $.get(server_base_url + "leave/GetLeaveTypeFromLeaveAssignment", {
        employeeId: employeeId
    }).done(function (data) {
        data = JSON.parse(data);
        if (data != null && data != fail && data != undefined && data != statusException && data != unauthorized && data != 500 && data != 501 && data != 404) {
            $("#leaveType").text("").append("<option value='' selected disabled>---- Select Leave Type ----</option>");
            if (data.length > 0) {
                $("#leaveTypeJson").val(encodeURI(JSON.stringify(data)));
                for (var i = 0; i < data.length; i++) {
                    $("#leaveType").append("<option  value='" + data[i].leaveType + "' >" + data[i].leaveTypeName + "</option>");
                }
            }
        } else {
            alertPopUpMessage("No Leaves have been assigned to selected Employee! Please assign some Leaves First!");
            $("#leaveType").text("").append("<option value='' selected disabled>----No Data Available----</option>");
        }
    });
}

function getLeaveDaysDetailsForLeaveTransaction() {
//    getEmployeeDataForEmployeeTransaction();
    var leaveType = $("#leaveType").val();
    var employeeJsonObject = JSON.parse(decodeURI($("#employeeJsonObject").val()));
    var leaveTypeJson = $("#leaveTypeJson").val();
    var employeeCategory = employeeJsonObject.classMaster;
    var eligiblilityLeaves = 0;
    var earnedLeaves = 0;
    for (var i = 0; i < leaveTypeJson.length; i++) {
        if (leaveType == leaveTypeJson[i].leaveType) {
            earnedLeaves == leaveTypeJson.totalEarnedLeaves;
        }
    }
    var totalAppliedLeaves = 0;
    setTimeout(function () {
        $.get(server_base_url + "/getLeaveAssignforTransc", {
            leaveType: leaveType,
            employeeid: employeeJsonObject._id.$oid
        }).done(function (bdata) {
            eligiblilityLeaves = parseInt(bdata.currentYearLeaves) + parseInt(bdata.totalEarnedLeaves);
            $("#eligibilityLeaves").val(eligiblilityLeaves).attr("disabled", true);
            $("#earnedLeaves").val(bdata.totalEarnedLeaves).attr("disabled", true);
//            for (var j = 0; j < bdata.leaveTypeDetails.length; j++) {
//                var innerData = bdata.leaveTypeDetails[j];
//                if (innerData.employeeCategory == employeeCategory) {
//                    eligiblilityLeaves = parseInt(bdata.leaveTypeDetails[j].maxLeavePerYear);
//                    $("#eligibilityLeaves").val(eligiblilityLeaves).attr("disabled", true);
//                    
//                }
//            }
        });
    }, 300);
//    setTimeout(function() {
//        $("#earnedLeaves").val(earnedLeaves).attr("disabled", true);
//        ;
//    }, 100);
    /*setTimeout(function () {
     $("#totalAppliedLeaves").val(0);
     var totalBalanceLeaves = $("#eligibilityLeaves").val() - $("#earnedLeaves").val() - $("#totalAppliedLeaves").val();
     $("#totalBalanceLeaves").val(totalBalanceLeaves);
     }, 500);*/
    setTimeout(function () {
        $.get(server_base_url + "GetRecentEmployeeLeaveTransaction", {
            employeeid: employeeJsonObject._id.$oid,
            leavetype: leaveType
        }).done(function (bdata) {
            if (bdata === fail || bdata === unauthorized ||
                    bdata === invalidSession || bdata === statusException) {
                $("#eltpanelRowErr").text("").append("<center><div class='col-sm-12'  \n\
                style='color:red;'><strong>No Data Available..<strong></div></center>");
                return;
            } else if (bdata == null) {
                $("#totalAppliedLeaves").val(0);
                setTimeout(function () {
                    var totalBalanceLeaves = eligiblilityLeaves - $("#totalAppliedLeaves").val();
                    $("#totalBalanceLeaves").val(totalBalanceLeaves).attr("disabled", true);
                }, 100);
            } else {
                $("#totalAppliedLeaves").val(bdata.totalLeaveDays).attr("disabled", true);
                setTimeout(function () {
                    var totalBalanceLeaves = eligiblilityLeaves - $("#totalAppliedLeaves").val();
                    $("#totalBalanceLeaves").val(totalBalanceLeaves).attr("disabled", true);
                }, 1000);
            }
        });
    }, 300);
    viewLeaveTransactionListBasedOnDDOLocation("employeeLeaveTransactionListBasedOnDDoLocation", employeeJsonObject._id.$oid, leaveType);
}

function calculateLeavetransaction() {
    $("#calculateButton").attr("disabled", "disabled");
    var days = checkFromDateAndToDateLeaveTransac();
    if (days < 0) {
        displaySmallErrorMessagesInRed("todateerr", "To Date should be greater than or equal to From Date ");
        setTimeout('$("#calculateButton").removeAttr("disabled")', 1500);
    } else
    {
        $("#todateerr").text("");
        viewTransactionDetailsOfEmp('empLeaveTransactionListMainMenu');
    }
}
function viewTransactionDetailsOfEmp(divId)
{
    setTimeout('$("#calculateButton").removeAttr("disabled")', 1500);
    var result = 1;
    $("#fromDateErr").text("");
    $("#toDateErr").text("");
    $("#contactNumberErr").text("");
    $("#reasonForLeaveErr").text("");
    $("#employeeNameErr").text("");
    $("#leaveTypeErr").text("");
    var employeeJsonObject = $("#employeeJsonObject").val();
    var contactNumber = $("#contactNumber").val();
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    var employeeName = $("#employeeName").val();
    var ddo = $("#ddo").val();
    var designation = $("#designation").val();
    var department = $("#department").val();
    var leaveType = $("#leaveType").val();
    //  var eligibilityLeave = $("#eligibilityLeaves").val();
    var earnedLeaves = $("#earnedLeaves").val();
    var totalAppliedLeaves = $("#totalAppliedLeaves").val();
    var totalBalancedLeaves = $("#totalBalancedLeaves").val();
    var lveTxt = $("#leaveType option:selected").text();
    if (fromDate == null || fromDate == "" || fromDate == undefined || toDate == null || toDate == "" || toDate == undefined || leaveType == "" || leaveType == undefined || leaveType == null || contactNumber == null || contactNumber == "" || contactNumber == undefined) {
        displayLargeErrorMessagesInCenterInRed("errDiv", "Please Fill All Mandatory Fields");
        result = 0;
    } else {
        if (contactNumber !== "" || contactNumber !== null) {
            if (!contactNumber.match((numbervalidation()))) {
                $("#contactNumber").focus();
                displaySmallErrorMessages("contactNumberErr", "Please Enter Valid Contact Number.");
                result = 0;
            } else if (contactNumber.length !== 10) {
                $("#contactNumber").focus();
                displaySmallErrorMessages("contactNumberErr", "Please Enter Valid 10 Digits.");
                result = 0;
                return;
            }
        } else if (contactNumber === "" || contactNumber === null) {
            $("#contactNumber").focus();
            displaySmallErrorMessages("contactNumberErr", "Please Enter Contact Number.");
            result = 0;
        }

        var mandatoryFieldsIdList = ['#leaveType', '#employeeName', '#eligibilityLeaves', '#fromDate', '#toDate',
        ];
        result = checkMandatoryFieldsAreEnteredForTextBox(mandatoryFieldsIdList);
        if (result !== 0) {
            var fromDate = $("#fromDate").datepicker("getDate");
            var toDate = $("#toDate").datepicker("getDate");
            var totalAppliedleave = days_betweenToDates(fromDate, toDate) + 1;
            //  $("#saveorupdate").val("update");
            if ($("#saveorupdate").val() != "update")
            {
                if (!(totalAppliedleave <= $("#totalBalanceLeaves").val())) {
                    alertPopUpMessage("Don't have enough balance leaves to apply.");
                    result = 0;
                }
            }
        }
        if (result !== 0) {
            $("#errDiv").text("");
            var count = 0;
            $('#displayBankTableBody tbody tr ').each(function (i) {
                count++;
            });
            $("#viewSectionTableDiv table").remove();
            $("#viewSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
            $("#displayBankTable").append("<thead class=''><tr>"
                    + " <th>S.No.</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i>Date</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i>Leave Type</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i>Remarks</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i>Half Day</th>"
                    /*+ "<th style='min-width:10%;width:auto;'><i class='fa'></i>Edit</th>"
                     + "<th style='min-width:15%;width:auto;align:center;'><i></i>Delete</th>"*/
                    + "</tr></thead>");
            $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");
            var list = [];
            var LWP = "LWP";
            var objJson = {
                employeeId: $("#employeeId").val(),
                location: getUserSessionElement(seLocationId),
                leaveType: $("#leaveType").val(),
                leaveTypeDescription: $("#leaveType option:selected").text(),
                fromDate: $("#fromDate").val(),
                toDate: $("#toDate").val(),
                dateRemarksAndIsHalfDay: null
            };
            $.get(server_base_url + "/Leave/LeaveTransaction/getLeaveTypeofDate", {
                objJson: JSON.stringify(objJson),
            }).done(function (data) {
                list = data.LWP;
                if (list == undefined)
                {
                    list = [];
                }
            });
            var fromDate = $("#fromDate").datepicker("getDate");
            var toDate = $("#toDate").datepicker("getDate");
            var totalAppliedleave = days_betweenToDates(fromDate, toDate);
            var contactNumber = $("#contactNumber").val();
            var reasonForLeave = $("#reasonForLeave").val();
            fromDate = $("#fromDate").val();
            toDate = $("#toDate").val();
            var dayMonthYear = fromDate.split("/");
            var lveDays = new Date(dayMonthYear[2], dayMonthYear[1] - 1, dayMonthYear[0]);
            var month = "";
            var appliedLeavesDays = getUserSessionElement("appliedLeavesDate");
//            var appliedLeavesDays = 0;
            setTimeout(function () {
                for (var i = totalAppliedleave; i >= 0; i--) {
                    count++;
                    month = (lveDays.getMonth() + 1);
                    if (month.length === 1) {
                        month = '0' + lveDays.getMonth();
                    }
                    var ddmmyyyyfromat = (lveDays.getDate() < 10 ? '0' + lveDays.getDate() : lveDays.getDate()) + '/' + (month < 10 ? '0' + month : month) + '/' + lveDays.getFullYear();
                    if (appliedLeavesDays != null) {
                        if (appliedLeavesDays.length > 0) {
                            for (var k = 0; k < appliedLeavesDays.length; k++) {
                                if (appliedLeavesDays.match(ddmmyyyyfromat)) {
                                    $("#displayBankTableBody").text("");
                                    alertPopUpMessage(" Already Applied for " + ddmmyyyyfromat);
                                    $("#saveButton").attr("disabled", true);
                                    $("#reset1").attr("disabled", true);
                                    return;
                                }
                            }
                        }
                    }
                    if (list.includes(ddmmyyyyfromat))
                    {
                        $("#displayBankTableBody").append("<tr id='' style='cursor:pointer;' >"
                                + "<td>" + count + "</td>"
//                    + "<td style='cursor:pointer;'>" + lveDays.getDate() + "/" + month + "/" + lveDays.getFullYear()
                                + "<td style='cursor:pointer;'>" + ddmmyyyyfromat
                                + "<input type='hidden' value='" + contactNumber + "'></td>"
                                + "<td style='cursor:pointer;'>" + LWP + "<input type='hidden' value='" + reasonForLeave + "'></td>"
                                + "<td style='cursor:pointer;min-width:30%;width:auto;'><input type='text' style='min-width:30%;width:auto;'/></td>"
                                + "<td style='cursor:pointer;'><input type='checkbox' style='width:15px;height:15px;align:center'/></td></tr>");
//                + "<td style='cursor:pointer;'>" + ' <a class="anchor_edit" onclick=editThisLeavetransactionRow(this.parentNode.parentNode.rowIndex) >EDIT</a>' + "</td>"
//                + "<td style='cursor:pointer;'>" + ' <button type="button" class="btn mr5 btn-primary"  style="align:center;color:white">EDIT</button>' + "</td>"
//                + "<td style='cursor:pointer;' onclick=deleteThisRowofEmpLeaveTransaction(this.parentNode.parentNode.rowIndex)>" + ' <a  id="deleteGradeListRow" class="anchor_delete" >DELETE</a>' + "</td></tr>");
                        lveDays.setDate(lveDays.getDate() + 1);
                    } else
                    {
                        $("#displayBankTableBody").append("<tr id='' style='cursor:pointer;' >"
                                + "<td>" + count + "</td>"
//                    + "<td style='cursor:pointer;'>" + lveDays.getDate() + "/" + month + "/" + lveDays.getFullYear()
                                + "<td style='cursor:pointer;'>" + ddmmyyyyfromat
                                + "<input type='hidden' value='" + contactNumber + "'></td>"
                                + "<td style='cursor:pointer;'>" + lveTxt + "<input type='hidden' value='" + reasonForLeave + "'></td>"
                                + "<td style='cursor:pointer;min-width:30%;width:auto;'><input type='text' style='min-width:30%;width:auto;'/></td>"
                                + "<td style='cursor:pointer;'><input type='checkbox' style='width:15px;height:15px;align:center'/></td></tr>");
//                + "<td style='cursor:pointer;'>" + ' <a class="anchor_edit" onclick=editThisLeavetransactionRow(this.parentNode.parentNode.rowIndex) >EDIT</a>' + "</td>"
//                + "<td style='cursor:pointer;'>" + ' <button type="button" class="btn mr5 btn-primary"  style="align:center;color:white">EDIT</button>' + "</td>"
//                + "<td style='cursor:pointer;' onclick=deleteThisRowofEmpLeaveTransaction(this.parentNode.parentNode.rowIndex)>" + ' <a  id="deleteGradeListRow" class="anchor_delete" >DELETE</a>' + "</td></tr>");
                        lveDays.setDate(lveDays.getDate() + 1);
                    }
                }
            }, 1000);
//$("#saveButtonRow").text("").append("<div class='col-sm-12'><button  onclick='saveLeaveTransaction()' class='btn btn-success' >Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=wipeAllDataInThisDivInLeaveTransaction('dashBoardBodyMainDiv') class='btn btn-warning mr5' id='resetButton' >Reset</button>");
            $("#saveButton").attr("disabled", false);
            $("#reset1").attr("disabled", false);
//            $("#fromDate").val("");
//            $("#toDate").val("");
            //  $("#reasonForLeave").val("");
//            $("#contactNumber").val("");
            //   $("#calculateButton").prop("disabled", "disabled");
        }
    }

}

function wipeAllDataInThisDivInLeaveTransaction(id) {
//    wipeAllTextBoxesInDiv(id);
//    wipeAllDropDownsInDiv(id);
//    $("#errDiv").text("");
    //  $("#employeeLeaveTransactionListBasedOnDDoLocation").text("");
    // $("#dashboardBodyMainDiv #viewButtonRow").remove();
    // $("#leaveType").empty();
    employeeLeaveTransaction("dashBoardBodyMainDiv");
}

function days_betweenToDates(date1, date2) {
    var diff = new Date(date2 - date1);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
function saveLeaveTransaction() {
    $("#saveButton").attr("disabled", "disabled");
    if (!checkUserPrivelege(pvCreateEmployeeLeaveTransactionMaster)) {
        alertPopUpMessage("You are not authorised");
        setTimeout('$("#saveButton").removeAttr("disabled")', 1500);
        return;

    }

    var checkedrowList = [];
    var cntctNmbr = $("#contactNumber").val();
    var frmDte = $("#fromDate").val();
    var toDte = $("#toDate").val();
    var rsnFrLve = $("#reasonForLeave").val();
    $('#displayBankTableBody tr ').each(function (i) {
        var row = $(this).closest('tr');
        checkedrowList.push({
            date: row.find('td:eq(1)').text(),
            leavetype: row.find('td:eq(2)').text(),
            reason: row.find('td:eq(3) input').val(),
            isHalfDay: row.find('td:eq(4) input').prop("checked")
        });
    });
    var fromDate = $("#fromDate").datepicker("getDate");
    var month = (fromDate.getMonth() + 1) + '';
    if (month.length === 1) {
        month = '0' + month;
    }
    var fromDateStr = fromDate.getDate() + "/" + month + "/" + fromDate.getFullYear();
    var toDate = $("#toDate").datepicker("getDate");
    month = (toDate.getMonth() + 1) + '';
    if (month.length === 1) {
        month = '0' + month;
    }
    var toDateStr = toDate.getDate() + "/" + month + "/" + toDate.getFullYear();
    var totalAppliedleave = days_betweenToDates(fromDate, toDate) + 1;
    var leaveType = $("#leaveType").val();
    var empId = $("#employeeId").val();
    if (totalAppliedleave <= $("#totalBalanceLeaves").val()) {

        var objJson = {
            employeeCode: $("#employeeName").val(),
            employeeId: $("#employeeId").val(),
            employeeName: $("#name").val(),
            ddo: $("#ddo").val(),
            location: getUserSessionElement(seLocationId),
            designation: $("#designation").val(),
            department: $("#department").val(),
            leaveType: leaveType,
            leaveTypeDescription: $("#leaveType option:selected").text(),
            eligibilityLeaves: $("#eligibilityLeaves").val(),
            earnedLeaves: $("#earnedLeaves").val(),
            totalAppliedLeaves: $("#totalAppliedLeaves").val(),
            totalBalanceLeaves: $("#totalBalanceLeaves").val(),
            fromDate: $("#fromDate").val(),
            toDate: $("#toDate").val(),
            contactNumber: cntctNmbr,
            reasonForLeave: rsnFrLve,
            totalLeaveDays: totalAppliedleave,
            requestingDate: frmDte,
            dateRemarksAndIsHalfDay: checkedrowList
        };
        $.get(server_base_url + "leave/LeaveTransaction/Save", {
            objJson: JSON.stringify(objJson),
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            data = JSON.parse(data);
            if (data.statusMessage == "success") {
//    scrolupfunction();
                displaySuccessMessages(successMsgDivCF, successMessage, "");
                setTimeout('$("#saveButton").removeAttr("disabled")', 1500);
                setTimeout(function () {
                    $('#fromDate').text("").val("");
                    $('#toDate').text("").val("");
                    getLeaveDaysDetailsForLeaveTransaction();
                    $('#viewSectionTableDiv').text("");
                    $('#successMsgDivBeforeDivCF').text("");

                    //  $("#dashboardBodyMainDiv #viewButtonRow").remove();
                }, 3000);
            } else if (data.statusMessage == "LeaveAssignLWP")
            {
                setTimeout('$("#saveButton").removeAttr("disabled")', 1500);
                setTimeout(function () {
//  scrolupfunction();
                    displayErrorMessages(successMsgDivCF, "Please Assign LWP Leave to Employee", "");
                }, 100);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            } else if (data.statusMessage == "LeaveTypeLWP")
            {
                setTimeout('$("#saveButton").removeAttr("disabled")', 1500);
                setTimeout(function () {
//  scrolupfunction();
                    displayErrorMessages(successMsgDivCF, "Create LWP Leave in Leave Type Master", "");
                }, 100);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            } else if (data.statusMessage == "LeaveLimit")
            {
                setTimeout('$("#saveButton").removeAttr("disabled")', 1500);
                setTimeout(function () {
//  scrolupfunction();
                    displayErrorMessages(successMsgDivCF, LeaveLimit, "");
                }, 100);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            } else if (data.statusMessage == "LeaveFixedTime")
            {
                setTimeout('$("#saveButton").removeAttr("disabled")', 1500);
                setTimeout(function () {
//   scrolupfunction();
                    displayErrorMessages(successMsgDivCF, LeaveFixedCon, "");
                }, 100);
//                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
                setTimeout(function () {
                    employeeLeaveTransaction("dashboardBodyMainDiv");
                }, 3000);
            } else if (data.statusMessage == "Attendance")
            {
                setTimeout('$("#saveButton").removeAttr("disabled")', 1500);
                setTimeout(function () {
//   scrolupfunction();
                    displayErrorMessages(successMsgDivCF, "Attendance Already Processed for this month", "");
                }, 100);
//                
                setTimeout(function () {
                    clearSuccessMessageAfterTwoSecond(successMsgDivCF);
                }, 3000);
            } else
            {
                setTimeout('$("#saveButton").removeAttr("disabled")', 1500);
                setTimeout(function () {
//  scrolupfunction();
                    displayErrorMessages(successMsgDivCF, "This Date" + data.statusMessage + "already Applied", "");
                }, 100);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }
//            if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
//                disableDiv("empLeaveTransactionTabMenu");
//                setTimeout(function() {
//                    scrolupfunction();
//                    employeeLeaveTransaction("dashBoardBodyMainDiv");
//                    displaySuccessMessages(successMsgDivCF, successMessage, "");
//                }, 100);
//                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
//                $("#saveButton").attr("disabled", true);
//                $("#reset1").attr("disabled", true);
//                setTimeout(function() {
//
//                    clearAndReloadEmployeeEdit(leaveType, empId);
//                }, 150);
//            }
        });
    } else {
        alertPopUpMessage("You don't have enough balance to apply leave");
        setTimeout('$("#saveButton").removeAttr("disabled")', 1500);
    }
}
function  editThisLeavetransactionRow(i) {
    $('table#displayBankTable tbody tr').each(function () {
        if ($(this).find("tr:eq(" + i + ")")) {
            var j = i - 1;
            $("#fromDate").val($("table#displayBankTable tbody tr:eq(" + j + ")").find('td:eq(2)').text());
            $("#toDate").val($("table#displayBankTable tbody tr:eq(" + j + ")").find('td:eq(3)').text());
            $("#contactNumber").val($("table#displayBankTable tbody tr:eq(" + j + ")").find('td:eq(1) input').val());
            $("#reasonForLeave").val($("table#displayBankTable tbody tr:eq(" + j + ")").find('td:eq(2) input').val());
        }
    });
    $("#displayBankTable").text("");
    $("#saveButtonRow").text("");
    $("#calculateButton").prop("disabled", false);
    $("#calculateButton").removeAttr("disabled");
    document.getElementById('displayBankTableBody').deleteRow(i - 1);
}
function deleteThisRowofEmpLeaveTransaction(i) {
    document.getElementById('displayBankTableBody').deleteRow(i - 1);
    $("#displayBankTable").text("");
    $("#saveButtonRow").text("");
    $("#calculateButton").prop("disabled", false);
}

function getRowsLengthOfLeaveTransaction() {
    var HowManyRows = 0;
    $('table#displayBankTable tbody tr').each(function () {
        HowManyRows++;
    });
    return HowManyRows;
}

function clearAndReloadEmployeeEdit(leaveType, empId) {

    $("#viewSectionTableDiv2 table").remove();
    $.get(server_base_url + "GetRecentEmployeeLeaveTransaction", {
        employeeid: empId,
        leavetype: leaveType
    }).done(function (bdata) {
        if (validateResponseData(bdata, "successMsgDivCF")) {
            return;
        }

        if (bdata !== null) {
            updateEmpJsonData = bdata;
            $("#viewSectionTableDiv2").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable2' />");
            $("#displayBankTable2").append("<thead class=''><tr>"
                    + " <th>S.No.</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i>Date</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i>Leave Type</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i>Remarks</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i>Half Day</th></tr></thead>");
            $("#displayBankTable2").append("<tbody id='displayBankTableBody2' class='table-striped table-bordered' />");
            var count = 0
            var arr = bdata.dateRemarksAndIsHalfDay;
            for (var i = 0; i < arr.length; i++) {
                var date = new Date(arr[i].date);
                var str = "<tr id='' style='cursor:pointer;' >"
                        + "<td>" + ++count + "</td>"
                        + "<td style='cursor:pointer;'>" + arr[i].date
                        + "<input type='hidden' value='" + bdata.employeeId + "'></td>"
                        + "<td style='cursor:pointer;'>" + bdata.leaveTypeDescription + "<input type='hidden' value='" + arr[i].reason + "'></td>"
                        + "<td style='cursor:pointer;min-width:30%;width:auto;'><input type='text' style='min-width:30%;width:auto;' "
                        + "value='" + arr[i].reason + "'/></td>";
                if (arr[i].isHalfDay === "true") {
                    str += "<td style='cursor:pointer;'><input type='checkbox' checked style='width:15px;height:15px;align:center' disabled=true/></td></tr>";
                } else {
                    str += "<td style='cursor:pointer;'><input type='checkbox' style='width:15px;height:15px;align:center' disabled=true/></td></tr>";
                }
                $("#displayBankTableBody2").append(str);
            }

            $("#updateButton").attr("disabled", false);
            $("#reset2").attr("disabled", false);
        }

    });
}

function resetEditTable() {

    $("#viewSectionTableDiv2 table").remove();
}
function show_date() {
    var today = new Date();
    var FullDate = [today.getDate(), today.getMonth() + 1, today.getFullYear()];
    if (FullDate[0] < 10) {
        FullDate[0] = "0" + FullDate[0]
    }
    ;
    if (FullDate[1] < 10) {
        FullDate[1] = "0" + FullDate[1]
    }
    ;
    return FullDate.join("/");
}

function resetViewTable() {
    $("#viewSectionTableDiv table").remove();
}
function viewLeaveTransactionListBasedOnDDOLocation(divId, employeeId, leaveTypeId) {
    removeUserSessionElement("appliedLeavesDate");
    removeUserSessionElement("appliedLeavesDateBackUp");
    createTableWithEditDeletePrivilage(divId, "List Of Leaves Taken", "viewLeaveTransactionListBasedOnDDOLocation", MsgDivInTableCF, ["Request Date", "Leave Type", "From Date", "To Date", "Total Leaves Days"], pvUpdateEmployeeLeaveTransactionMaster, pvDeleteEmployeeLeaveTransactionMaster);
    divId = "viewLeaveTransactionListBasedOnDDOLocation";
    $.get(server_base_url + "/leave/LeaveTransaction/ViewList", {
        employeeId: employeeId,
        leaveTypeId: leaveTypeId
    }).done(function (bdata) {
        if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var appliedLeavesDate = [];
                    var sno = 0;
                    var divIdBody = "tableid" + "body";
                    $("#" + divId).append("<tbody id='" + divIdBody + "' class='tabel table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var obj = JSON.stringify(bdata[i]);
                        for (var j = bdata[i].dateRemarksAndIsHalfDay.length - 1; j >= 0; j--) {
                            appliedLeavesDate.push(bdata[i].dateRemarksAndIsHalfDay[j].date);
                        }
                        // if (bdata[i].fromDate < show_date())
                        if ($.datepicker.parseDate('dd/mm/yy', show_date()) > $.datepicker.parseDate('dd/mm/yy', bdata[i].fromDate))
                        {
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].requestingDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].leaveTypeDescription + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].fromDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].toDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].totalAppliedLeaves + "</td>");
                            if (checkUserPrivelege(pvUpdateEmployeeLeaveTransactionMaster))
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;'>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            if (checkUserPrivelege(pvDeleteEmployeeLeaveTransactionMaster))
                                $("#" + bdata[i]._id.$oid).append("<td>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete"  style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                        } else if (bdata[i].leaveType != leaveTypeId && bdata[i].leaveTypeDescription == "LWP")
                        {
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].requestingDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].leaveTypeDescription + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].fromDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].toDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].totalAppliedLeaves + "</td>");
                            if (checkUserPrivelege(pvUpdateEmployeeLeaveTransactionMaster))
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;'>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            if (checkUserPrivelege(pvDeleteEmployeeLeaveTransactionMaster))
                                $("#" + bdata[i]._id.$oid).append("<td>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete"  style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                        } else

                        {
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].requestingDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].leaveTypeDescription + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].fromDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].toDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].totalAppliedLeaves + "</td>");
                            if (checkUserPrivelege(pvUpdateEmployeeLeaveTransactionMaster))
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editLeaveTransaction('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            if (checkUserPrivelege(pvDeleteEmployeeLeaveTransactionMaster))
                                $("#" + bdata[i]._id.$oid).append("<td>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a onclick=deletePopUp("deleteLeaveTransaction","","' + bdata[i]._id.$oid + '")   class="anchor_delete"  style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                        }
                    }
                    $('#' + divId).append("</table>");
                    $('#' + divId).dataTable();
                    setUserSessionElement("appliedLeavesDate", appliedLeavesDate);
                    setUserSessionElement("appliedLeavesDateBackUp", appliedLeavesDate);
                }
            }
        }
    });
}
function  deleteLeaveTransaction(Id) {
    if (checkUserPrivelege(pvDeleteEmployeeLeaveTransactionMaster)) {
        $.post(server_base_url + "leave/leaveTransaction/Delete", {
            id: Id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == "502") {
                displayErrorMessages(MsgDivInTableCF, "" + delete_map_messages, "");
                $("#leaveType").trigger("onchange");
                setTimeout(function () {
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF)
                }, 3000);
            } else if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                setTimeout(function () {
                    $("#leaveType").trigger("onchange");
                    $('#fromDate').datepicker('setDate', null);
                    $('#toDate').datepicker('setDate', null);
                }, 2100);
            } else {
                setTimeout(function () {
                    $("#leaveType").trigger("onchange");
                }, 2100);
            }
        });
//        }
    }
}
function checkFromDateAndToDateLeaveTransac() {
    var fDate = $("#fromDate").datepicker("getDate");
    var tDate = $("#toDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
function editLeaveTransaction(editData)
{
    editData = decodeURI(editData);
    //  alert(editData);
    editData = JSON.parse(editData);
    $("#saveorupdate").val("update");
    $("#saveButton").text("").text("Update");
    $("#reset1").text("").text("Back");
    // $("#fromDate").val(editData.fromDate);
    $("#fromDate").datepicker("setDate", editData.fromDate);
    $("#toDate").datepicker("setDate", editData.toDate);
    $("#contactNumber").val(editData.contactNumber);
    $("#reasonForLeave").val(editData.reasonForLeave);
    var employeejson = JSON.stringify(editData);
    var appliedLeaveDates = getUserSessionElement("appliedLeavesDateBackUp").split(",");
    var removedLeaveDates = [];
    for (var i = appliedLeaveDates.length - 1; i >= 0; i--) {
        var flag = false;
        for (var j = editData.dateRemarksAndIsHalfDay.length - 1; j >= 0; j--) {
            if (appliedLeaveDates[i] == editData.dateRemarksAndIsHalfDay[j].date) {
                flag = true;
                break;
            }
        }
        if (flag == false) {
            removedLeaveDates.push(appliedLeaveDates[i]);
        }
    }
    removeUserSessionElement("appliedLeavesDate");
    setUserSessionElement("appliedLeavesDate", removedLeaveDates);
    addButtonOnclickFunction("saveButton", "Update", "updateLeaveTrasa('" + encodeURI(employeejson) + "')");
    $("#viewList").append('<div id="' + successMsgDivCF + '" />');
}
function updateLeaveTrasa(empDataLeave)
{
    empDataLeave = decodeURI(empDataLeave);
    //  alert(editData);
    empDataLeave = JSON.parse(empDataLeave);
    if (!checkUserPrivelege(pvUpdateEmployeeLeaveTransactionMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    var checkedrowList = [];
    var cntctNmbr = $("#contactNumber").val();
    var frmDte = $("#fromDate").val();
    var rsnFrLve = $("#reasonForLeave").val();
    $('#displayBankTableBody tr ').each(function (i) {
        var row = $(this).closest('tr');
        checkedrowList.push({
            date: row.find('td:eq(1)').text(),
            reason: row.find('td:eq(3) input').val(),
            isHalfDay: row.find('td:eq(4) input').prop("checked")
        });
    });
    var fromDate = $("#fromDate").datepicker("getDate");
    var toDate = $("#toDate").datepicker("getDate");
    var totalAppliedleave = days_betweenToDates(fromDate, toDate) + 1;
    var halfdaylen = empDataLeave.dateRemarksAndIsHalfDay;
    var totalBalanceleave = parseInt($("#totalBalanceLeaves").val()) + parseInt(halfdaylen.length);
    var leaveType = $("#leaveType").val();
    if (totalAppliedleave <= totalBalanceleave) {

        var objJson = {
            employeeCode: $("#employeeName").val(),
            employeeId: $("#employeeId").val(),
            employeeName: $("#name").val(),
            ddo: $("#ddo").val(),
            location: getUserSessionElement(seLocationId),
            designation: $("#designation").val(),
            department: $("#department").val(),
            leaveType: leaveType,
            leaveTypeDescription: $("#leaveType option:selected").text(),
            eligibilityLeaves: $("#eligibilityLeaves").val(),
            earnedLeaves: $("#earnedLeaves").val(),
            totalAppliedLeaves: $("#totalAppliedLeaves").val(),
            totalBalanceLeaves: $("#totalBalanceLeaves").val(),
            fromDate: $("#fromDate").val(),
            toDate: $("#toDate").val(),
            contactNumber: cntctNmbr,
            reasonForLeave: rsnFrLve,
            totalLeaveDays: totalAppliedleave,
            requestingDate: frmDte,
            dateRemarksAndIsHalfDay: checkedrowList,
            rowId: empDataLeave._id.$oid
        };
//UpdateLeaveTransaction
        $.get(server_base_url + "UpdateLeaveTransaction", {
            leavetransaction: JSON.stringify(objJson),
            loginid: getUserSessionElement("userId")
        }).done(function (data) {
            data = JSON.parse(data);
            data = JSON.parse(data);
            if (data.statusMessage == "success") {
                displaySuccessMessages(successMsgDivCF, successMessage, "");
                setTimeout(function () {
                    employeeLeaveTransaction("dashBoardBodyMainDiv");
                    $("#employeeLeaveTransactionListBasedOnDDoLocation").text("");
                }, 3000);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            } else if (data.statusMessage == "LeaveLimit")
            {
                setTimeout(function () {
                    displaySuccessMessages(successMsgDivCF, LeaveLimit, "");
                }, 100);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            } else if (data.statusMessage == "LeaveFixedTime")
            {
                setTimeout(function () {
                    //   scrolupfunction();
                    displaySuccessMessages(successMsgDivCF, LeaveFixedCon, "");
                }, 100);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            } else if (data.statusMessage == "Fail")
            {
                setTimeout(function () {
                    //   scrolupfunction();
                    displaySuccessMessages(successMsgDivCF, "Record Not Inserted", "");
                }, 100);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }
        });
    } else {
        alert("You don't have enough balance to apply leave");
    }
}