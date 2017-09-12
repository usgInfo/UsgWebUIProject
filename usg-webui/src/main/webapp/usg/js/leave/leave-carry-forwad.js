/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var leaveTypeDetails = [];

function employeeLeaveCarryForwad(divId)
{

    if (!checkUserPrivelege(pvViewLeaveCarryForwardMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> >> <label>Leave Carry Forward</label>');
    createForm(divId, innerDivCF, "Leave Carry Forward", FieldGroupForCF, successMsgDivCF);

    $("#innerDivCF").append("<div  id='relationListPanelDiv' />");

    getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
    $("#Row0Col1").append(getLabel_InputWithSpan("Employee Code", "", "employeeCode", "", ""));
    $("#Row0Col2").append(getLabel_InputWithSpan("Employee Code(M)", "", "", "", ""));


    getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Name", "", "employeeName", "", ""));
    $("#Row1Col2").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));

    getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel("Location", "") + "" + getDropDown("location"));
    $("#Row2Col2").append(getLabel("Department", "") + "" + getDropDown("department"));

    getTwoColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel("Designation") + "" + getDropDown("designation"));
    $("#Row3Col2").append(getLabel("Nature Type", "required") + "" + getDropDown("natureType"));

    getTwoColumnInRow(FieldGroupForCF, "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col1").append(getLabel("Posting City", "") + "" + getDropDown("postingCity"));
    $("#Row4Col2").append(getLabel("Employee Category", "required") + "" + getDropDown("employeeCategory"));

    $("#employeeCategory").attr("onchange", "getLeaveTypeBasedOnECForLeaveCarryForward()");
    getTwoColumnInRow(FieldGroupForCF, "Row5", "Row5Col1", "Row5Col2");
    $("#Row5Col1").append(getLabel("Leave Type", "required") + "" + getDropDown("leaveType"));
    $("#Row5Col2").append(getLabel("Transfer From Year", "") + "" + getDropDown("transferFromYear"));

    getTwoColumnInRow(FieldGroupForCF, "Row6", "Row6Col1");
    $("#Row6Col1").append(getLabel("Transfer To Year", "required") + "" + getDropDown("transferToYear"));

    getSaveResetUpdateBackButton(FieldGroupForCF, "findRowId", "View", "findBtnId", "searchEmployeeForEmpLeaveCarryForward()", "Reset", "resetBackBtnId", "employeeLeaveCarryForwad('dashboardBodyMainDiv')");

    getLoggedInDDOLocationInDropDown("ddo", "location");


    viewOption("hrms/common/Nature/View", "", "natureName", "natureType", "Nature Type");
//    viewDepartmentForOption();
    getDepartmentBasedOnDDO();
    viewDesignationListForOption("", "designation", "Designation");
    viewCityForOption("", "postingCity");

    getEmployeeCategory();


    var reportTypeOptions = ["Leave Transaction Details"];
    getHardCodedOptions("reportType", "Report Type", reportTypeOptions);
//    viewOption("Leave/FinancialYear/View", "", "year", "transferFromYear", "From Year");
//    ListOfLeaveFinancialYear("transferFromYear");
//    ListOfLeaveFinancialYear("transferToYear");
//    viewOption("Leave/FinancialYear/View", "", "year", "transferToYear", "To Year");
//    getYearBetweenSpecifiedYear("", "transferFromYear", 1, 0, "From Year");
//    getYearBetweenSpecifiedYear("", "transferToYear", 0, 1, "To Year");
    //Method to get the to year from year and financial year in form
    getFromAndToYear();

    var sortByOptions = ["EmployeeCodeM", "EmployeeName", "Department"];
    getHardCodedOptions("sortBy", "Sort By", sortByOptions);

    $("#innerDivCF").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");

    $("#firstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>List of Employee(s) (Leaves Not Carry Forwarded) </center>");
    $("#firstHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");

    addToggleToId("colMaritial2", "collapseOne3");

    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' style='overflow-x:auto;'  />");
    $("#listpanelMainBody").append("<div id='NotAssignedmessageDiv' class='row' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
//    <<<<<<<<<<<
    $("#listpanelMainBody").append("<div id='leaveNotCarryForwardtableresponsiveDiv' class='table-responsive' />");
    $("#listpanelMainBody").append('<table id="example1" class="table table-bordered">');
//    <<<<<<<<<<<<<<

    $("#listpanelMainBody").append("<div class='row'><center><button type='button'  value='Save' class='btn btn-success mr5'  onclick='MovecheckedIntoLeaveCarryForwardedTable()' disabled='true' id='process'>Process</button></center></row>");

    $("#innerDivCF").append("<div id='AssignedTableopanel' class='panel panel-blue' />");
    $("#AssignedTableopanel").append("<div id='AssignedTableopanelHeading' class='panel-heading' />");
    $("#AssignedTableopanelHeading").append("<h4 id='AssignedHeader' class='panel-title' />");

    $("#AssignedHeader").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Employee(s) (Leave Carry Forwarded) </center>");
    $("#AssignedHeader").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial3'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#AssignedTableopanel").append("<div id='collapseOne6' class='panel-collapse collapse in' />");

    addToggleToId("colMaritial3", "collapseOne6");

    $("#collapseOne6").append("<div id='AssignedTableopanelBody' class = 'panel-body' style='overflow-x:auto;' />");
    $("#AssignedTableopanelBody").append("<div id='AssignedTableRowMessageDiv' class='row' />");
    $("#AssignedTableRowMessageDiv").append("<div id='AssignedMessageDiv'/>");
    $("#AssignedTableopanelBody").append("<div id='AssignedTableRow' class='row' />");

    //    <<<<<<<<<<<
    $("#AssignedTableopanelBody").append("<div id='leaveCarryForwardtableresponsiveDiv' class='table-responsive' />");
    $("#AssignedTableopanelBody").append('<table id="example2" class="table table-bordered">');
//    <<<<<<<<<<<<<<

    $("#innerDivCF").append("<div id='panelRow7' class='row' />");
    $("#AssignedTableopanelBody").append("<div class='row'><center><button type='button' onclick='unprocessCheckedDataIntoLeaveAssigningTable()' class='btn btn-warning' name='reset' value='reset' disabled='true' id='unprocess'>Unprocess</button></center></div>");

    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    $("textarea").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });



}
function ListOfLeaveFinancialYear(divId)
{
    $.get(server_base_url + "/Leave/FinancialYear/View", {
        value: "view"
    }).done(function (pdata) {
        pdata = JSON.parse(pdata);
        if (pdata == fail || pdata == unauthorized || pdata.statuscode == unauthorized || pdata == invalidSession || pdata == statusException) {
        } else {
            if (pdata != null) {
                if (pdata.length > 0) {
                    for (var i = pdata.length - 1; i >= 0; i--) {
                        $("#" + divId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].year + "</option>");
                    }
                }
            }
        }
    });
}
function getFromAndToYear()
{
    $("#financialYearDiv").text("");
    $.get(server_base_url + "/Leave/FinancialYear/View", {
    }).done(function (pdata) {
        pdata = JSON.parse(pdata);
        if (pdata == fail || pdata == unauthorized || pdata.statuscode == unauthorized || pdata == invalidSession || pdata == statusException) {
        } else {
            if (pdata != null) {
                if (pdata.length > 0) {
                    var fromYear = 0;
                    for (var i = pdata.length - 1; i >= 0; i--) {
                        if (pdata[i].isActive == "Yes") {
                            $("#transferFromYear").append("<option value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].year + "</option>");
                            $("#financialYearDiv").text("").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + pdata[i].fromDate + "-" + pdata[i].toDate + "</strong></span>");
                            fromYear = parseInt(pdata[i].year) + 1;
                            for (var i = pdata.length - 1; i >= 0; i--) {
                                if (fromYear == pdata[i].year)
                                    $("#transferToYear").append("<option value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].year + "</option>");
                            }
                        }
                    }
                    var toYearOptionLenght = $("#transferToYear option").length;
                    if (toYearOptionLenght == 0) {
                        $("#transferToYear").append("<option  value='' selected >---" + noDataAvailable + " ----</option>");
                    }
                }
            }
        }
    });
}
function getLeaveTypeBasedOnECForLeaveCarryForward() {
    var natureType = $("#natureType").val();
    var employeeCategory = $("#employeeCategory").val();
    //Only For leave Carry Forward
    $.get(server_base_url + "GetLeaveTypeBasedOnLeaveTypeMaster", {
        natureType: natureType,
        employeeCategory: employeeCategory
    }).done(function (data) {
        if (data !== null) {
            data = JSON.parse(JSON.parse(data));
            leaveTypeDetails = data;
            $("#leaveType").text("").append("<option value='' selected disabled>---- Select Leave Type ----</option>");
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    $("#leaveType").append("<option  value='" + data[i].idStr + "' >" + data[i].leaveType + "</option>");
                }
            } else {
                $("#leaveType").text("").append("<option  value='' selected >---No data available ----</option>");
            }
        }
    });
}
function wipeAllEmpSearchDataInLeaveCarryForward() {
    $("#employeeCode").val("");
    $("#employeeCodeM").val("");
    $("#employeeName").val("");
    $("#ddo").val("");
    $("#location").val("");
    $("#department").val("");
    $("#designation").val("");
    $("#natureType").val("");
    $("#postingCity").val("");
    $("#fundType").val("");
    $("#budgetHead").val("");
    $("#sortby").val("");
    $("#EmployeeStatus").val("");
    $("#employeeCategory").val("");
    $("#leaveType").val("");

    $("#employeeCodeErr").text("");
    $("#employeeCodeMErr").text("");
    $("#employeeNameErr").text("");
    $("#ddoErr").text("");
    $("#locationErr").text("");
    $("#departmentErr").text("");
    $("#designationErr").text("");
    $("#natureTypeErr").text("");
    $("#postingCityErr").text("");
    $("#fundTypeErr").text("");
    $("#budgetHeadErr").text("");
    $("#sortbyErr").text("");
    $("#EmployeeStatusErr").text("");
    $("#employeeCategoryErr").text("");
    $("#leaveTypeErr").text("");
}

function  searchEmployeeForEmpLeaveCarryForward() {
    disableButton("findBtnId");
    $("#employeeCodeErr").text("");
    $("#" + successMsgDivCF).text("");
    $("#natureTypeErr").text("");
    $("#ddoErr").text("");
    $("#employeeCategoryErr").text("");
    $("#leaveTypeErr").text("");
    var result = 1;
    var mandatoryFieldsIdList = ['#ddo', '#natureType', '#employeeCategory',
        '#leaveType', '#transferToYear'];
    var ddo = $('#ddo').val();
    var natureType = $('#natureType').val();
    var employeeCategory = $('#employeeCategory').val();
    var leaveType = $('#leaveType').val();
    var transferToYear = $('#transferToYear').val();

    if (preValidation(ddo) || preValidation(natureType) || preValidation(employeeCategory) || preValidation(leaveType) || preValidation(transferToYear)) {
        enableButton("findBtnId");
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        result = 0;
        return false;
    }
//    result = checkMandatoryFieldsAreEnteredForTextBox(mandatoryFieldsIdList);

    if (result !== 0) {
        viewListEmpLeavecarryForward('listpanelRow');
//        LeaveAssignedListTable("AssignedTableRow");
//        LeaveCarryForwardedListTable("AssignedTableRow");
        enableButton("process");
    } else {
        enableButton("findBtnId");
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
    }
}

function enableButton(id) {

    $("#" + id).attr("disabled", false);
}

function disableButton(id) {

    $("#" + id).attr("disabled", true);
}

function viewListEmpLeavecarryForward(divId)
{
    $("#AssignedMessageDiv").text("");
    $("#NotAssignedmessageDiv").text("");
    $("#" + divId).text("").append("<div class='tab-pane' id='viewList'/>");
    $("#viewList").append("<div class='table-responsive' id='viewSectionTableDiv' />");
    $("#viewSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
    $("#displayBankTable").append("<thead class=''><tr>"
            + " <th>" + '<input type="checkbox" style="min-width:30%;width:auto;height:15px;align:center" id="selectall"/>All' + "</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code(M)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Nature Type</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Current Year Leaves</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Leave Availed</th>"
            + "<th style='min-width:15%;width:auto;align:center;'><i></i>Total Earned Leaves</th>"
            + "</tr></thead>");

    $("#AssignedTableRow").text("").append("<div class='tab-pane' id='viewAssignedList'/>");
    $("#viewAssignedList").append("<div class='table-responsive' id='viewAssignedTableDiv' />");
    $("#viewAssignedTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayAssignedTable' />");
    $("#displayAssignedTable").append("<thead class=''><tr>"
            + " <th>" + '<input type="checkbox" style="min-width:30%;width:auto;height:15px;align:center" id="selectall"/>All' + "</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code(M)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Nature Type</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Current Year Leaves</th>"
            + "<th style='min-width:15%;width:auto;align:center;'><i></i>Total Earned Leaves</th>"
            + "</tr></thead>");

    $("#displayAssignedTable").append("<tbody id='displayAssignedTableBody' class='table-striped table-bordered' />");

    var leaveType = $("#leaveType").val();
    var gender;
    for (var i = 0; i < leaveTypeDetails.length; i++) {
        if (leaveType === leaveTypeDetails[i]._id) {
            gender = leaveTypeDetails[i].gender;
        }
    }
    var fromYear = $("#transferFromYear").val();
    var toYear = $("#transferToYear").val();
    var employeeSearchJSON = {
        employeeCode: $("#employeeCode").val(),
        employeeCodeM: $("#employeeCodeM").val(),
        employeeName: $("#employeeName").val(),
        ddo: $("#ddo").val(),
        location: $("#location").val(),
        department: $("#department").val(),
        designation: $("#designation").val(),
        natureType: $("#natureType").val(),
        postingCity: $("#postingCity").val(),
        employeeCategory: $("#employeeCategory").val(),
        leaveType: leaveType,
        gender: gender,
        fromYear: fromYear,
        toYear: toYear
    };
    var employeeCategoryName = $("#employeeCategory option:selected").text();

    var currentYearLeaves = 0;
    var leaveType = $("#leaveType").val();
    setTimeout(function () {
        $.get(server_base_url + "leave/LeaveType/Search", {
            leaveType: leaveType
        }).done(function (bdata) {
            if (validateResponseData(bdata, "")) {
                for (var i = bdata.leaveTypeDetails.length - 1; i >= 0; i--) {
                    if (employeeCategoryName.toUpperCase() ===
                            bdata.leaveTypeDetails[i].employeeCategory.toUpperCase()) {
                        currentYearLeaves = bdata.leaveTypeDetails[i].maxLeavePerYear;
                    }
                }
            }
        });
    }, 500);



    var natureType = $("#natureType option:selected").text();

    var condition = "yes";
    var ddo = $("#ddo").val();
    if (ddo !== null) {
        condition = "No";
    }
    setTimeout(function () {

//        $.get(server_base_url + "hrms/salary/Employee/Search", {
        $.get(server_base_url + "leave/carryforward/Search", {
            employeeSearchJSON: JSON.stringify(employeeSearchJSON)
        }).done(function (bdata) {
            enableButton("findBtnId");
            if (bdata === fail) {
                displayLargeErrorMessagesInCenterInRed("NotAssignedmessageDiv", noDataAvailable, "");
                displayLargeErrorMessagesInCenterInRed("AssignedMessageDiv", noDataAvailable, "");
            } else if (bdata === unauthorized) {
                displayLargeErrorMessagesInCenterInRed("NotAssignedmessageDiv", unauthorizedMessage, "");
                displayLargeErrorMessagesInCenterInRed("AssignedMessageDiv", unauthorizedMessage, "");
            } else if (bdata === invalidSession) {
                callSessionTimeout();
            } else if (bdata === statusException) {
                displayLargeErrorMessagesInCenterInRed("NotAssignedmessageDiv", noDataAvailable, "");
                displayLargeErrorMessagesInCenterInRed("AssignedMessageDiv", noDataAvailable, "");
            } else {
                if (bdata !== null) {
                    var carryForwardedList = bdata.CarryForwarded;
                    bdata = bdata.notCarryForwarded;
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var employeejson = bdata[i];
                            var ddoName = getUserSessionElement(seDDOName);
                            employeejson = JSON.stringify(employeejson);
                            $("#displayBankTableBody").append("<tr id='" + bdata[i].employeeId + "' style='cursor:pointer;' >"
                                    + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeCodeM + "<input type='hidden' value='" + encodeURI(employeejson) + "'></td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                    + "<td style='cursor:pointer;'>" + ddoName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].designationName + "</td>"
                                    + "<td style='cursor:pointer;'>" + natureType + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].currentYearLeaves + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].leaveAvailed + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].totalEarnedLeaves + "</td></tr>");
                        }
                        $('#displayBankTable').append("</table>");
                        $('#displayBankTable').dataTable();
                        $("#displayBankTable thead tr th:first input:checkbox").change(function () {
                            $("#displayBankTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                        });
                        $("#displayBankTable tbody tr td:first-child input:checkbox").change(function () {
                            var tot = $(".case").length;
                            var tot_checked = $(".case:checked").length;
                            if (tot !== tot_checked) {
                                $("#selectall").prop('checked', false);
                            }
                        });
                    } else {
                        displayLargeErrorMessagesInCenterInRed("NotAssignedmessageDiv", noDataAvailable, "");
                    }
                    if (carryForwardedList.length > 0) {
                        for (var i = 0; i < carryForwardedList.length; i++) {
                            $("#displayAssignedTable").append("<tbody id='displayAssignedTableBody' class='table-striped table-bordered' />");
                            $("#displayAssignedTableBody").append("<tr id='" + carryForwardedList[i].idString + "' style='cursor:pointer;' >"
                                    + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                                    + "<td style='cursor:pointer;'>" + carryForwardedList[i].employeeCodeM + "<input type='hidden' value='" + carryForwardedList[i].idString + "'></td>"
                                    + "<td style='cursor:pointer;'>" + carryForwardedList[i].employeeName + "</td>"
                                    + "<td style='cursor:pointer;'>" + carryForwardedList[i].ddo + "</td>"
                                    + "<td style='cursor:pointer;'>" + carryForwardedList[i].designation + "</td>"
                                    + "<td style='cursor:pointer;'>" + carryForwardedList[i].natureType + "</td>"
                                    + "<td style='cursor:pointer;'>" + carryForwardedList[i].currentYearLeaves + "</td>"
                                    + "<td style='cursor:pointer;'>" + carryForwardedList[i].totalEarnedLeaves + "</td></tr>");
                        }

                        $('#displayAssignedTable').append("</table>");
                        $("#displayAssignedTable thead tr th:first input:checkbox").change(function () {
                            $("#displayAssignedTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                        });
                        $("#displayAssignedTable tbody tr td:first-child input:checkbox").change(function () {
                            var tot = $(".case").length;
                            var tot_checked = $(".case:checked").length;
                            if (tot !== tot_checked) {
                                $("#selectall").prop('checked', false);
                            }
                        });
                        if (carryForwardedList.length > 0) {
                            enableButton("unprocess");
                        }
                    } else {
                        displayLargeErrorMessagesInCenterInRed("AssignedMessageDiv", noDataAvailable, "");
                    }
                }
            }
        });
    }, 500);
}


function LeaveAssignedListTable(divId)
{
    $("#" + divId).text("").append("<div class='tab-pane' id='viewAssignedList'/>");
    $("#viewAssignedList").append("<div class='table-responsive' id='viewAssignedTableDiv' />");
    $("#viewAssignedTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayAssignedTable' />");
    $("#displayAssignedTable").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code(M)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Nature Type</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Current Year Leaves</th>"
            + "<th style='min-width:15%;width:auto;align:center;'><i></i>Total Earned Leaves</th>"
            + "</tr></thead>");

    $("#displayAssignedTable").append("<tbody id='displayAssignedTableBody' class='table-striped table-bordered' />");
    var checkedrowListleaveprocessed = [];

    $('#displayBankTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
        var row1 = $(this).closest('tr');
        checkedrowListleaveprocessed.push(decodeURI(row1.find('td:eq(1) input').val()));
        $(this).closest('tr').remove();
    });
//    $('table#displayLeaveTypeAddTable tbody tr').each(function () {
//        leaveTypeDetails.push(JSON.parse($(this).find('td:eq(1) input').val()));
//    });

    if (checkedrowListleaveprocessed !== null) {
        if (checkedrowListleaveprocessed.length > 0) {

            var sno = 0;
//            $("#displayAssignedTable").append("<tbody id='displayAssignedTableBody' class='table-striped table-bordered' />");
            for (var i = checkedrowListleaveprocessed.length - 1; i >= 0; i--) {
                checkedrowListleaveprocessed[i] = JSON.parse(checkedrowListleaveprocessed[i]);
                sno++;


                $("#displayAssignedTableBody").append("<tr id='" + checkedrowListleaveprocessed[i].employeeId + "' style='cursor:pointer;' >"
                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                        + "<td style='cursor:pointer;'>" + checkedrowListleaveprocessed[i].employeeCodeM + "</td>"
                        + "<td style='cursor:pointer;'>" + checkedrowListleaveprocessed[i].employeeName + "</td>"
                        + "<td style='cursor:pointer;'>" + checkedrowListleaveprocessed[i].ddo + "</td>"
                        + "<td style='cursor:pointer;'>" + checkedrowListleaveprocessed[i].designation + "</td>"
                        + "<td style='cursor:pointer;'>Nature Type</td>"
                        + "<td style='cursor:pointer;'><input type='text' value='15'></td>"
                        + "<td style='cursor:pointer;'><input type='text' value='0'></td></tr>");
            }
            $('#displayAssignedTable').append("</table>");
            $('#displayAssignedTable').dataTable();
        }
    }
}
function LeaveCarryForwardedListTable(divId)
{

    if (!checkUserPrivelege(pvUpdateLeaveCarryForwardMaster) ||
            !checkUserPrivelege(pvDeleteLeaveCarryForwardMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    $("#" + divId).text("").append("<div class='tab-pane' id='viewAssignedList'/>");
    $("#viewAssignedList").append("<div class='table-responsive' id='viewAssignedTableDiv' />");
    $("#viewAssignedTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayAssignedTable' />");
    $("#displayAssignedTable").append("<thead class=''><tr>"
            + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall1"/>All' + "</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code(M)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Nature Type</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Current Year Leaves</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Leave Availed</th>"
            + "<th style='min-width:15%;width:auto;align:center;'><i></i>Total Earned Leaves</th>"
            + "</tr></thead>");

    $("#displayAssignedTable").append("<tbody id='displayAssignedTableBody' class='table-striped table-bordered' />");

}
function unprocessCheckedDataIntoLeaveAssigningTable()
{
    $("#AssignedMessageDiv").text("");
    var checkedrowListcopy = [];
    $('#displayAssignedTable tbody tr input[type="checkbox"][name="case"]:checked').each(function (i) {
        var row = $(this).closest('tr');
        var JsonIdString = row.find('td:eq(1) input').val();
        checkedrowListcopy.push(JsonIdString);
    });
    if (checkedrowListcopy !== null) {
        if (checkedrowListcopy.length > 0) {
            $.get(server_base_url + "/leave/leavecarryForward/UnProcess", {
                checkedrowList: JSON.stringify(checkedrowListcopy),
                userid: getUserSessionElement("userId")
            }).done(function (bdata) {
                if (BasicIfElseForSaveUpdateResponseData(bdata, "AssignedMessageDiv")) {
//                    $("#AssignedMessageDiv").text("").append("<center><div class='col-sm-12' style='color:green;'><strong>Un Processed Succesfully<strong></div></center>");
                    displaySuccessMessages("AssignedMessageDiv", "Un Processed Succesfully", "");
                    setTimeout(function () {
                        $("#findBtnId").click();
                    }, 2000);
                }
            });
        } else {
            displayLargeErrorMessagesInCenterInRed("AssignedMessageDiv", "Please Select at least one employee", "");
            return;
        }
    }
}
function MovecheckedIntoLeaveCarryForwardedTable()
{
    $("#NotAssignedmessageDiv").text("");
    if (!checkUserPrivelege(pvCreateLeaveCarryForwardMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }
    var saveThisAssignedDetails = [];
    $('#displayBankTable tbody tr input[type="checkbox"][name="case"]:checked').each(function (i) {
        var row = $(this).closest('tr');
        var JsonObject = JSON.parse(decodeURI(row.find('td:eq(1) input').val()));
        saveThisAssignedDetails.push({
            employeeId: JsonObject.employeeId,
            employeeName: JsonObject.employeeName,
            employeeCode: JsonObject.employeeCode,
            employeeCodeM: JsonObject.employeeCodeM,
            employeeCategory: JsonObject.employeeCategory,
            ddo: JsonObject.ddo,
            designation: JsonObject.designation,
            department: JsonObject.department,
            natureType: JsonObject.natureType,
            leaveType: JsonObject.leaveType,
            fromYear: JsonObject.fromYear,
            toYear: JsonObject.toYear,
            currentYearLeaves: JsonObject.currentYearLeaves,
            leaveAvailed: JsonObject.leaveAvailed,
            totalEarnedLeaves: JsonObject.totalEarnedLeaves,
            carryForwardingLeaves: JsonObject.carryForwardingLeaves});
        $(this).closest('tr').remove();
    });
    if (saveThisAssignedDetails !== null) {
        if (saveThisAssignedDetails.length > 0) {
            $.get(server_base_url + "leave/LeaveCarryForward/Save", {
                objJson: JSON.stringify(saveThisAssignedDetails),
                userid: getUserSessionElement("userId")
            }).done(function (bdata) {
                if (BasicIfElseForTable(bdata, "NotAssignedmessageDiv")) {
//                    $("#AssignedMessageDiv").text("").append("<center><div class='col-sm-12' style='color:green;'><strong>Successfully Saved.<strong></div></center>");
                    displaySuccessMessages("NotAssignedmessageDiv", "Processed Succesfully", "");
                    setTimeout(function () {
                        $("#findBtnId").click();
                    }, 2000);
                }
            });
        } else {
            displayLargeErrorMessagesInCenterInRed("NotAssignedmessageDiv", "Please Select at least one employee", "");
            return;
        }
    }
    var checkedrowList = [];
    $('#displayBankTable tbody tr input[type="checkbox"][name="case"]:checked').each(function (i) {
        var row = $(this).closest('tr');
        checkedrowList.push({
            employeeDetails: decodeURI(row.find('td:eq(1) input').val()),
            natureType: row.find('td:eq(5)').text(),
            currentYearLeaves: row.find('td:eq(6) input').val(),
            leaveAvailed: row.find('td:eq(7) input').val(),
            totalEarnedLeaves: row.find('td:eq(8) input').val()
        });
        $(this).closest('tr').remove();
    });
    $("#selectall").removeAttr("checked");
    var checkedrowListcopy = [];
    checkedrowListcopy = JSON.stringify(checkedrowList);
    checkedrowListcopy = JSON.parse(checkedrowListcopy);
    if (getTotalRowsInTable("displayBankTable tbody tr") === 0) {
        disableButton("process");

    }
}

function getTotalRowsInTable(id) {
    return $('#' + id).length;
}