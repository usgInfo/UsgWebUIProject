/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayPreviousEmployeeDetails()
{
    scrolupfunction();
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS ></a></label> <label><a href="javascript:hrmsEmployeeMasterTabs()"> Employee Master</a></label> > <label> Employee Previous Job Details</label>');

    $("#dashboardBodyMainDiv").text("").append('<div id="employeePreviousDivId"></div>');
    $("#employeePreviousDivId").text("").append('<div id="employeePreviousTabMenu" />');

    $("#employeePreviousTabMenu").append('<div id="employeePreviousMainMenu" class="row" />');
    $("#employeePreviousTabMenu").append('<div id="employeePreviousListMainMenu" class="row" />');
    if (checkUserPrivelege(pvCreateEmployeeJob)) {
        $("#employeePreviousMainMenu").append('<div id="employeePreviousMainPanel" class="panel panel-blue" />');
        $("#employeePreviousMainPanel").append('<div id="employeePreviousMainHeading" class="panel-heading" />');
        $("#employeePreviousMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center> Employee Previous Job Details Master </center></a><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="previousJobDetails"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#employeePreviousMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#previousJobDetails").click(function() {
            $("#collapseOne1").toggle();
            if ($("#previousJobDetails span").hasClass("glyphicon-minus-sign")) {
                $("#previousJobDetails").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#previousJobDetails").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="employeePreviousMainBody" class = "panel-body pan" />');
        $("#employeePreviousMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#employeePreviousMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#employeePreviousMainBody").append('<center><span id="employeePreviousMessageDiv"></span></center>');
        $("#employeePreviousMainBody").append('<div id="employeePreviousBodyDiv" class="row" />');

        $("#employeePreviousBodyDiv").append("<input type='hidden' id='cid' >");
        $("#employeePreviousBodyDiv").append('<div  id="Row1"  class="row" class="col-md-12"/>');
        $("#Row1").append('<div id="Row1col1" class="col-md-6" />');
        $("#Row1col1").append('<label for="ddo"  class="col-md-6 control-label">DDO <span class="require">*</span></label>');
        $("#Row1col1").append("<select id='employeeDDO'  class='form-control'></select>");
        getLoggedInDDOInDropDown("employeeDDO", "");
        getEmployeeDataForPreviousJob();
        $("#Row1").append('<div id="Row1col2" class="col-md-6" class="row"/>');
        $("#Row1col2").append('<label for="employeeCode"  class="col-md-12 control-label">Employee Code <span class="require">*</span></label>');
        $("#Row1col2").append("<select id='employeeCode'  class='form-control'></select>");
        $("#employeeCode").attr("onchange", "getEmpPreDetails()");

        $("#Row1col1").append("<span id='employeeDDOErr'></span>");
        $("#Row1col2").append("<span id='employeeCodeErr'></span><br>");

        getTwoColumnInRow("employeePreviousBodyDiv", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Employee Name", "", "employeeName", "", "onkeypress='return validatealphanumeric(event)'"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Department", "", "employeeDepartment", " ", "onkeypress='return validatealphanumeric(event)' "));

        getTwoColumnInRow("employeePreviousBodyDiv", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel_InputWithSpan("Previous Department", "required", "employeePriviousDepartment", "", "onkeypress='return validatealphanumeric(event)'"));
        $("#Row3Col2").append(getLabel_InputWithSpan("Previous Location", "required", "employeeLocation", "Employee Location", "onkeypress='return validatealphanumeric(event)'"));

        getTwoColumnInRow("employeePreviousBodyDiv", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel_InputWithSpan("Previous Designation", "required", "employeePriviousDesignation", "Previous Designation", "onkeypress='return validatealphanumeric(event)'"));
        $("#Row4Col2").append(getLabel_InputWithSpan("Previous Grade", "", "employeePreviousGrade", "Previous Grade", "onkeypress='' "));

        getTwoColumnInRow("employeePreviousBodyDiv", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel_InputWithSpan("Designation", "", "employeeDesignation", "", "onkeypress='return validatealphanumeric(event)'"));
        $("#Row5Col2").append(getLabel_InputWithSpan("Previous Basic Pay", "required", "employeebasicPay", "Enter Previous Basic Pay", "onkeypress='return validateNumber(event)' "));

        getTwoColumnInRow("employeePreviousBodyDiv", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel_InputWithSpan("Previous DP", "required", "employeeDP", "Employee Previous DP", "onkeypress='return validateNumber(event)' "));
        $("#Row6Col2").append(getLabel_InputWithSpan("Previous DA", "required", "employeeDA", "Employee Previous DA", "onkeypress='return validateNumber(event)' "));

        getTwoColumnInRow("employeePreviousBodyDiv", "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel_InputWithSpan("From Date", "required", "fromDate", "", "onkeypress='return false'"));
        $("#Row7Col2").append(getLabel_InputWithSpan("To Date", "required", "toDate", "", "onkeypress='return false' "));

        $("#fromDate").datepicker({
            format: "dd/mm/yyyy",
            autoclose: true
        });
        $("#toDate").datepicker({
            format: "dd/mm/yyyy",
            autoclose: true
        });

        $("#employeePreviousBodyDiv").append('<div  id="Row8"  class="row" class="col-md-12"/>');
        $("#Row8").append('<div id="Row8col1" class="col-md-6" />');
        $("#Row8col1").append('<label for="station"  class="col-md-6 control-label">Station</label>');
        $("#Row8col1").append("<input type='text' id='station'  class='form-control' onkeypress='return validatealphanumeric(event)'>");
        $("#Row8").append('<div id="Row8col2" class="col-md-6" />');
        $("#Row8col2").append('<label for="InService"  class="col-md-6 control-label">In Service</label>');

        $("#Row8col2").append("<input type='checkbox' id='inService' value='YES'class='form-contro' / >");

        $("#Row8col1").append("<span id='stationErr'></span>");
        $("#Row8col2").append("<span id='inServiceErr'></span><br>");

        getTwoColumnInRow("employeePreviousBodyDiv", "Row9", "Row9Col1", "Row9Col2");
        $("#Row9Col1").append(getLabel_InputWithSpan("Reason for Leaving Job", "", "reasonForLeavingJob", "Enter Reason for Leaving Job", "onkeypress=''"));

        $("#employeePreviousBodyDiv").append("<div class='form-group' id='employeePreviousButton'><center><button onclick=saveemployeePreviousInfo() class='btn btn-success' id='employeePreviousButton' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetButton' onclick=resetEmployeePrevious() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
 
      $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        
        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    
    
    }
    viewEmployeePreviousJobDetails();

}

function getEmployeeDataForPreviousJob() {

    var ddo = $("#employeeDDO").val();
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
    }).done(function(data) {
        data = JSON.parse(data);
        if (data == fail || data == "" || data == undefined) {
            $("#employeeCode").text("").append("<option  value='' selected disabled>---No data available ----</option>");
        } else if (data != null) {
            $("#employeeCode").text("").append("<option  value='' selected disabled>----[Employee Code]-Employee Name ----</option>");
            for (var i = 0; i < data.length; i++)
            {
                $("#employeeCode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
            }
        }

    });
}

function viewEmployeePreviousJobDetails()
{
    if (checkUserPrivelege(pvViewEmployeeJob)) {
        $("#employeePreviousListMainMenu").text("").append('<div id="employeePreviousListPanel" class="panel panel-blue" />');
        $("#employeePreviousListPanel").append('<div id="employeePreviousListHeading" class="panel-heading" />');
        $("#employeePreviousListHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List Of Employee Previous Job Details</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="empPreviousJobList"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');
        $("#employeePreviousListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#empPreviousJobList").click(function() {
            $("#collapseOne2").toggle();
            if ($("#empPreviousJobList span").hasClass("glyphicon-minus-sign")) {
                $("#empPreviousJobList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#empPreviousJobList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append('<div id="employeePreviousListBody" class = "panel-body pan" />');
        $("#employeePreviousListBody").append('<div id="panelRow" class="row" />');
        $("#employeePreviousListBody").append('<div id="employeePreviousListErrorMsgId" />');
        $("#employeePreviousListBody").append('<div id="employeePreviousListMainBody" class="table-responsive" />');
        $("#employeePreviousListMainBody").append('<table id="employeePreviousTable" class="table table-bordered" />');
        $("#employeePreviousTable").append("<thead class=''><tr id='employeePreviousTableTableHeadRow'>"
                + " <th class='sno_width'> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> DDO</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Previous Basic Pay</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Previous DA</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Previous DP</th>");
        if (checkUserPrivelege(pvUpdateEmployeeJob)) {
            $("#employeePreviousTableTableHeadRow").append("<th class='table_anchor_width'><i ></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteEmployeeJob)) {
            $("#employeePreviousTableTableHeadRow").append("<th class='table_anchor_width'><i  style='font-size:21px;'></i> Delete</th>");
        }
        $("#employeePreviousTableTableHeadRow").append("</tr></thead>");
        $.get(server_base_url + "/hrms/EmployeeMaster/EmployeePriviousJob/View", {
            ddo: getUserSessionElement(seDDOId)
        }).done(function(bdata) {

            if (bdata == fail) {
                displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + NoDataFoundMessage + "<br /><br />");
                displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + NoDataFoundMessage + "<br /><br />")
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (bdata == invalidSession || bdata.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException || bdata.statuscode == statusException) {
                displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#employeePreviousTable").append("<tbody id='employeePreviousTableBody' class='table-striped table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var classjson1 = {
                                cid: bdata[i]._id.$oid,
                                employeeDDO: bdata[i].employeeDDO,
                                employeeName: bdata[i].employeeName,
                                employeeCode: bdata[i].employeeCode,
                                department: bdata[i].department,
                                designation: bdata[i].designation,
                                previousDepartment: bdata[i].previousDepartment,
                                previousDesignation: bdata[i].previousDesignation,
                                priviousGrade: bdata[i].priviousGrade,
                                basicPay: bdata[i].basicPay,
                                employeeDP: bdata[i].employeeDP,
                                employeeDA: bdata[i].employeeDA,
                                fromDate: bdata[i].fromDate,
                                toDate: bdata[i].toDate,
                                station: bdata[i].station,
                                inService: bdata[i].inService,
                                reasonForLeaving: bdata[i].reasonForLeaving,
                                previousLocation: bdata[i].previousLocation
                            };
                            classjson1 = JSON.stringify(classjson1);

                            $("#employeePreviousTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeDDO + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeCode + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].basicPay + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeDA + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeDP + "</td>");
                            if (checkUserPrivelege(pvUpdateEmployeeJob)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateEmployeePreviousJobDetails('" + encodeURI(classjson1) + "','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteEmployeeJob)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteEmployeePreviousJobDetails','employeePreviousTable','" + bdata[i]._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td></tr>");
                            }
                            $("#" + bdata[i]._id.$oid).append("</tr>");
                        }
                        $('#employeePreviousTable').dataTable();
                        $('#employeePreviousTable').append("</table>");

                    }
                }
            }
        });

    }
}

function saveemployeePreviousInfo()
{
    if (checkUserPrivelege(pvCreateEmployeeJob)) {
        var employeeDDO = $("#employeeDDO").val();
        var employeeCode = $("#employeeCode").val();
        var employeeName = $("#employeeName").val();
        var department = $("#employeeDepartment").val();
        var previousDepartment = $("#employeePriviousDepartment").val();
        var designation = $("#employeeDesignation").val();
        var employeeLocation = $("#employeeLocation").val();
        var previousDesignation = $("#employeePriviousDesignation").val();
        var priviousGrade = $("#employeePreviousGrade").val();
        var basicPay = $("#employeebasicPay").val();
        var employeeDP = $("#employeeDP").val();
        var employeeDA = $("#employeeDA").val();
        var fromDate = $("#fromDate").val();
        var toDate = $("#toDate").val();
        var station = $("#station").val();
        var reasonForLeaving = $("#reasonForLeavingJob").val();

        if ($('#inService').prop('checked')) {
            var inService = $("#inService").val();
        } else
        {
            inService = "NO";
        }

        if (employeeDDO == "" || employeeDDO == "undefined" || employeeCode == "" || employeeCode == "undefined" || previousDepartment == "" || previousDepartment == "undefined" || employeeLocation == "" || employeeLocation == "undefined" || previousDesignation == "" || previousDesignation == "undefined" || basicPay == "" || basicPay == "undefined" || fromDate == "" || fromDate == "undefined" || toDate == "" || toDate == "undefined") {
            displaySmallErrorMessagesInRed("employeePreviousMessageDiv", "Please Fill * fields" + "");
            return false;
        }

        var employeePriviousdetailsJson = {
            employeeDDO: employeeDDO,
            employeeCode: employeeCode,
            employeeName: employeeName,
            department: department,
            designation: designation,
            previousDepartment: previousDepartment,
            previousDesignation: previousDesignation,
            previousLocation: employeeLocation,
            priviousGrade: priviousGrade,
            basicPay: basicPay,
            employeeDP: employeeDP,
            employeeDA: employeeDA,
            fromDate: fromDate,
            toDate: toDate,
            station: station,
            inService: inService,
            reasonForLeaving: reasonForLeaving
        };

        $.post(server_base_url + "/hrms/EmployeeMaster/employeePreviousJobDetails/Save", {
            employeePreviousJobJson: JSON.stringify(employeePriviousdetailsJson),
            userId: getUserSessionElement("userId")
        }).done(function(data) {
            if (data.statuscode == fail) {
                displayErrorMessages("employeePreviousMessageDiv", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("employeePreviousMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("employeePreviousMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {

                $("#employeePreviousButton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);

                displaySuccessMessages("employeePreviousMessageDiv", successMessage, "");
                setTimeout(function() {
                    displayPreviousEmployeeDetails();
                }, 4000);
            } else {
                displayErrorMessages("employeePreviousMessageDiv", " Previous Details Creation Failed" + "");
            }
        });

    }
}


function updateEmployeePreviousJobDetails(obj, id) {
    if (checkUserPrivelege(pvUpdateEmployeeJob)) {
        $("#pregsuccessBefore").text("");
        obj = JSON.parse(decodeURI(obj));
        $("#employeePreviousTableBody tr").css("background-color", "white");
        $("#employeePreviousTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#employeeDDO").val(obj.employeeDDO);
        $("#employeeCode").val(obj.employeeCode);
        $("#employeeName").val(obj.employeeName);
        $("#employeeDepartment").val(obj.department);
        $("#employeePriviousDepartment").val(obj.previousDepartment);
        $("#employeeLocation").val(obj.previousLocation);
        $("#employeePriviousDesignation").val(obj.previousDesignation);
        $("#employeePreviousGrade").val(obj.priviousGrade);
        $("#employeeDesignation").val(obj.designation);
        $("#employeebasicPay").val(obj.basicPay);
        $("#employeeDP").val(obj.employeeDP);
        $("#employeeDA").val(obj.employeeDA);
        $("#fromDate").val(obj.fromDate);
        $("#toDate").val(obj.toDate);
        $("#station").val(obj.station);
        $("#inService").val(obj.inService);
        $("#reasonForLeavingJob").val(obj.reasonForLeaving);
        $("#cid").val(obj.id);
        if (obj.inService == "YES") {
            $("#inService").attr('checked', true);
        } else {
            $("#inService").attr('checked', false);
        }

        $("#employeePreviousButton").text("").append("<div class='form-group'><center><button id='updateEmployeePreviousButton' onclick=updateEmployeePreviousInfo('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetUpdateButton' onclick='displayPreviousEmployeeDetails()' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center></div>");
    }
}

function updateEmployeePreviousInfo(id)
{
    if (checkUserPrivelege(pvUpdateEmployeeJob)) {

        var employeeDDO = $("#employeeDDO").val();
        var employeeCode = $("#employeeCode").val();
        var employeeName = $("#employeeName").val();
        var department = $("#employeeDepartment").val();
        var previousDepartment = $("#employeePriviousDepartment").val();
        var designation = $("#employeeDesignation").val();
        var previousLocation = $("#employeeLocation").val();
        var previousDesignation = $("#employeePriviousDesignation").val();
        var priviousGrade = $("#employeePreviousGrade").val();
        var basicPay = $("#employeebasicPay").val();
        var employeeDP = $("#employeeDP").val();
        var employeeDA = $("#employeeDA").val();
        var fromDate = $("#fromDate").val();
        var toDate = $("#toDate").val();
        var station = $("#station").val();

        var reasonForLeaving = $("#reasonForLeavingJob").val();
        if ($('#inService').prop('checked')) {
            var inService = $("#inService").val();
        } else
        {
            inService = "NO";
        }

        var updateemployeePriviousdetailsJson = {
            employeeDDO: employeeDDO,
            employeeCode: employeeCode,
            employeeName: employeeName,
            department: department,
            designation: designation,
            previousDepartment: previousDepartment,
            previousDesignation: previousDesignation,
            previousLocation: previousLocation,
            priviousGrade: priviousGrade,
            basicPay: basicPay,
            employeeDP: employeeDP,
            employeeDA: employeeDA,
            fromDate: fromDate,
            toDate: toDate,
            station: station,
            inService: inService,
            reasonForLeaving: reasonForLeaving
        };
        $.post(server_base_url + "/hrms/EmployeeMaster/EmployeePriviousJob/Update", {
            employeePreviousJobJson: JSON.stringify(updateemployeePriviousdetailsJson),
            id: id,
            userId: getUserSessionElement("userId")
        }).done(function(data) {
            if (data == fail) {
                displaySmallErrorMessagesInRed("employeePreviousMessageDiv", "Invalid username / password" + "<br/><br/>");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("employeePreviousMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("employeePreviousMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("employeePreviousMessageDiv", "No User available" + "<br/><br/>");
            } else {

                displaySuccessMessages("employeePreviousMessageDiv", updateMessage, "");

                setTimeout(function() {

                    displayPreviousEmployeeDetails();
                }, 4000);
            }
        });

    }
}
function deleteEmployeePreviousJobDetails(id) {
    if (checkUserPrivelege(pvDeleteEmployeeJob)) {

        $.post(server_base_url + "/hrms/EmployeeMaster/EmployeePriviousJob/Delete", {
            id: id,
            userId: getUserSessionElement("userId")
        }).done(function(data) {
            if (data == fail) {
                displaySmallErrorMessagesInRed("employeePreviousListErrorMsgId", "Invalid username / password");
            } else if (data == unauthorized) {
                displaySmallErrorMessagesInRed("employeePreviousListErrorMsgId", unauthorizedMessage);
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("employeePreviousListErrorMsgId", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("employeePreviousListErrorMsgId", "No User available");
            } else {
                displaySuccessMessages("employeePreviousListErrorMsgId", deleteMessage, "");
                setTimeout(function() {
                    viewEmployeePreviousJobDetails();
                }, 4000);
            }
        });
        //}
    }
}

function resetEmployeePrevious() {

    $('#employeeCode').val("");
    $('#employeeName').val("");
    $('#employeeDepartment').val("");
    $('#employeePriviousDepartment').val("");

    $('#employeePriviousDesignation').val("");
    $('#employeePreviousGrade').val("");
    $('#employeeDesignation').val("");
    $('#employeebasicPay').val("");
    $('#employeeDP').val("");
    $('#employeeDA').val("");
    $('#fromDate').val("");
    $('#toDate').val("");
    $('#station').val("");
    $("#inService").removeAttr('checked');
    $('#reasonForLeavingJob').val("");

    $('#employeeDDOErr').text("");
    $('#employeeCodeErr').text("");
    $('#employeeNameErr').text("");
    $('#employeeDepartmentErr').text("");
    $('#employeePriviousDepartmentErr').text("");
    $('#employeeLocationnameErr').text("");
    $('#employeePriviousDesignationErr').text("");
    $('#employeePreviousGradeErr').text("");
    $('#employeeDesignationErr').text("");
    $('#employeebasicPayErr').text("");
    $('#employeeDPErr').text("");
    $('#employeeDAErr').text("");
    $("#fromDateErr").text("");
    $("#toDateErr").text("");
    $("#stationErr").text("");
    $("#inServiceErr").text("");
    $("#reasonForLeavingJobErr").text("");
    $("#employeePreviousMessageDiv").text("");

    $('#employeeDDOFieldGroup').val("");
    $('#employeeCodeFieldGroup').val("");
    $('#employeeNameFieldGroup').val("");
    $('#employeeDepartmentFieldGroup').val("");
    $('#employeePriviousDepartmentFieldGroup').val("");
    $('#employeeLocationFieldGroup').val("");
    $('#employeePriviousDesignationFieldGroup').val("");
    $('#employeePreviousGradeFieldGroup').val("");
    $('#employeeDesignationFieldGroup').val("");
    $('#employeebasicPayFieldGroup').val("");
    $('#employeeDPFieldGroup').val("");
    $('#employeeDAFieldGroup').val("");
    $('#fromDateFieldGroup').val("");
    $('#toDateFieldGroup').val("");
    $('#stationFieldGroup').val("");
    $('#inServiceFieldGroup').val("");
    $('#reasonForLeavingJobFieldGroup').val("");
    $("#pregsuccessBefore").text("");
    $("#ErrorDiv").text("");
}

function fetchDdoDetailsOptions(name) {


    $.post(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            $("#employeeDDO").append("<option value = '' selected disabled> ------------------------Select DDO-----------------------------------------</option>");
            for (var i = 0; i < data.length; i++) {
                if (name == data[i].ddoName) {
                    $("#employeeDDO").append("<option  value='" + data[i].ddoName + "' selected>" + data[i].ddoName + "</option>");
                } else {
                    $("#employeeDDO").append("<option  value='" + data[i].ddoName + "' >" + data[i].ddoName + "</option>");
                }
            }
        }
    });
}

function getEmpPreDetails()
{
    var empcode = $("#employeeCode").val();
    $.get(server_base_url + "/pension/master/FetchPensionEmployeeBYEmployeeCode", {
        employeeCode: empcode
    }).done(function(pdata) {
        if (pdata == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (pdata == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata == statusException) {

        } else {
            $("#employeeName").val(pdata[0].employeeName);
            $("#employeeDepartment").val(pdata[0].department);
            $("#employeeDesignation").val(pdata[0].designation);

        }
    });
}