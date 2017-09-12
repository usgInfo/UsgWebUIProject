/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function employeeLeaveAssignment(divId) {

    if (!checkUserPrivelege(pvViewEmployeeLeaveAssignmentMaster)) {
        return;
    }

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> >> <label>Leave Assignment</label>');

    $("#" + divId).text("").append('<div id="empLeaveAssignmentDivId"></div>');
    $("#empLeaveAssignmentDivId").text("").append('<div id="empLeaveAssignmentTabMenu" />');

    $("#empLeaveAssignmentTabMenu").append('<div id="empLeaveAssignmentMainMenu" class="row" />');
    $("#empLeaveAssignmentTabMenu").append('<div id="empLeaveAssignmentListMainMenu" class="row" />');
    $("#empLeaveAssignmentTabMenu").append('<div id="empLeaveAssignedListMainMenu" class="row" />');

    $("#empLeaveAssignmentMainMenu").append('<div id="empLeaveAssignmentMainPanel" class="panel panel-blue" />');
    $("#empLeaveAssignmentMainPanel").append('<div id="empLeaveAssignmentMainHeading" class="panel-heading" />');

    $("#empLeaveAssignmentMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>Employee Leave Assignment</center></a>');
    $("#empLeaveAssignmentMainHeading").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#empLeaveAssignmentMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');

    addToggleToId("colMaritial1", "collapseOne1");

    $("#collapseOne1").append('<div id="empLeaveAssignmentMainBody" class = "panel-body pan" />');
    $("#empLeaveAssignmentMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#empLeaveAssignmentMainBody").append('<center><span id="empLeaveAssignmentMessageDiv"></span></center>');
    $("#empLeaveAssignmentMainBody").append('<div id="empLeaveAssignmentBodyDiv" class="row" />');
    $("#empLeaveAssignmentMainBody").append('<input type="hidden" id="gender" value="Both">');

    $("#empLeaveAssignmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" id="ddo"></select><span id="ddoErr" class="text-danger"></span></div>'
            + '<div class="form-group col-lg-6"><label for="employCode">Employee Code <span class="require"></span></label><select class="form-control" id="employeeCode"></select><span id="employeeCodeErr" class="text-danger"></span></div></div>');
    $("#empLeaveAssignmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employName">Employee Name <span class="require"></span></label><input type="text" id="employeeName" placeholder="Employee Name" class="form-control" /><span id="employeeNameErr" class="text-danger">'
            + '</div><div class="form-group col-lg-6"><label for="employCodeM">Employee Code(M) <span class="require"></span></label><input type="text" id="employeeCodeM" placeholder="Enter Employee Code(M)  Ex:ORKGEMP-97" class="form-control" /><span id="employeeCodeMErr" class="text-danger"></span></div></div>');
    $("#empLeaveAssignmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="location" id="location"></select><span id="locationErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="department" id="department"></select><span id="departmentErr" class="text-danger"></span></div></div>');
    $("#empLeaveAssignmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="designation" id="designation"></select><span id="designationErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="postingCity" id="postingCity"></select><span id="postingCityErr" class="text-danger"></span></div></div>');
    $("#empLeaveAssignmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="natureType">Nature Type <span class="require">*</span></label><select class="form-control" name="natureType" id="natureType" onchange="getLeaveTypeBasedOnEC()"></select><span id="natureTypeErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="employeeCategory">Employee Category <span class="require">*</span></label><select class="form-control" name="employeeCategory" onchange="getLeaveTypeBasedOnEC()" id="employeeCategory"></select><span id="employeeCategoryErr" class="text-danger"></span></div></div>');
    $("#empLeaveAssignmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="leaveType">Leave Type <span class="require">*</span></label><select class="form-control" name="leaveType" id="leaveType"></select><span id="leaveTypeErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="year">Year <span class="require">*</span></label><select class="form-control" name="year" id="year"></select><span id="yearErr" class="text-danger"></span></div></div>');
//    $("#empLeaveAssignmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="instalment">Instalment </label><select class="form-control" name="instalment" id="instalment"><option value="">----Select Installment----</option><option>1</option><option>2</option><option>3</option><option>4</option></select><span id="instalmentErr" class="text-danger"></span>'
    /*$("#empLeaveAssignmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="instalment">Instalment <span class="require">*</span> </label><input class="form-control" name="instalment" type="text" onkeypress="return validateNumber(event)" id="instalment"> <span id="instalmentErr" class="text-danger"></span>'
     + '</div><div class="form-group col-lg-6"><label for="noOfDays">No. Of Days <span class="require">*</span></label><input type="text" class="form-control"  id="noOfDays" /><span id="noOfDaysErr" class="text-danger"></span></div></div>');*/
    $("#empLeaveAssignmentBodyDiv").append("<div class='form-group'><center><button id='searchbutton' onclick=searchEmployeeForEmpLeaveAssignmentMaster() class='btn btn-success' style='height:40px;width:80px'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=wipeAllEmployeeSearchDateInLeaveAssignment() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    getClassAssign();
    getLoggedInDDOInDropDown("ddo", "");
    getLoggedInLocationInDropDown("location", "");
//    $("#ddo").trigger("onchange");
    $("#employeeCode").attr("onchange", "setEmployeeDetailsInLeaveAssignment()");
    getDepartmentBasedOnDDO();


    fetchYearList();
    viewDesignationListForOption("", "designation", "Designation");
    viewCityForOption("", "postingCity");
    viewOption("hrms/common/Nature/View", "", "natureName", "natureType", "Nature Type");

    var instalmentOptions = ["1", "2", "3", "4"];
    getHardCodedOptions("", "instalment", "Instalment", instalmentOptions);
    LeaveAssignedListTable();
    $("#natureName").attr("onchange", "getLeaveTypeBasedOnEC()");
    setTimeout(function() {
        getEmployeeCodeInLeaveAssign();
    }, 2000);


    $("input").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });



    //getLeaveTypeBasedOnEC();


}

//changed on 23-9-2016

function populateLocationDropDown() {

    $.post(server_base_url + "financial/account/Location/ViewList", {}).done(function(data) {

        var data = data.result;

        $("#location").text("").append("<option value ='' selected disabled>---- Select Location ----</option>");
        for (i = 0; i < data.length; i++) {
            $("#location").append("<option  value='" + data[i]._id.$oid + "'>" + data[i].locationName + "</option>");

        }
    });
}
function getEmployeeCodeInLeaveAssign() {

    var ddo = $("#ddo").val();
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear !== null || currentFinancialYear !== "" || currentFinancialYear !== undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = "31/12/" + $("#year").text();
    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: ddo,
        fromDt: fromDate,
        toDate: toDate,
        location: getUserSessionElement(seLocationId)
                //    location: getUserSessionElement(seLocationId)
    }).done(function(data) {
        data = JSON.parse(data);

        if (data === fail || data === "" || data === undefined) {
            $("#employeeCode").text("").append("<option  value='' selected disabled>---No data available ----</option>");
        } else if (data !== null) {
            $("#employeeCode").text("").append("<option  value='' selected disabled>----[Employee Code]-Employee Name ----</option>");
            for (var i = 0; i < data.length; i++)
            {
                $("#employeeCode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
            }
        }

    });
}
function fetchYearList() {
    $.get(server_base_url + "/Leave/FinancialYear/View", {
        value: "view"
    }).done(function(pdata) {
        pdata = JSON.parse(pdata)
        if (pdata != null && pdata != 501 && pdata != "501" && pdata != "500")
        {
            largest = parseInt(pdata[0].year);
            //   $('#year').append("<option value='' class='form-control' selected disabled >----Select Year----</option>");
            var count = 0;
            for (var i = 0; i < pdata.length; i++)
            {
                if (pdata[i].isActive == "Yes") {
                    count++;
                    $('#year').append("<option value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].year + "</option>");
                }
            }
            if (count == 0)
                $('#year').append("<option value='' selected>---No Active Leave Financila Year----</option>");
        }
    });
}

function  searchEmployeeForEmpLeaveAssignmentMaster() {

    $("#employeeCodeErr").text("");
    $("#natureTypeErr").text("");
    $("#ddoErr").text("");
    $("#employeeCategoryErr").text("");
    $("#leaveTypeErr").text("");
    $("#noOfDaysErr").text("");
    $("#yearErr").text("");
    $("#instalmentErr").text("");
    $("#empLeaveAssignmentMessageDiv").text("");

    var year = $("#year").val();
    var leaveType = $("#leaveType").val();
    var employeeCategory = $("#employeeCategory").val();
    if (preValidation(year) || preValidation(leaveType) || preValidation(employeeCategory) || year == '0') {
        displayLargeErrorMessagesInCenterInRed("empLeaveAssignmentMessageDiv", "Please fill all mandatory fields");
        return false;
    } else {
        var result = 1;
        if ($('#year').val() === null) {
            $("#year").focus();
            displaySmallErrorMessages("yearErr", "Please Select Year.");
            result = 0;
        }
        if ($('#leaveType').val() === null) {
            $("#leaveType").focus();
            displaySmallErrorMessages("leaveTypeErr", "Please Select  Leave Type .");
            result = 0;
        } else if ($('#leaveType').val() !== null) {
        }
        if ($('#employeeCategory').val() === null) {
            $("#employeeCategory").focus();
            displaySmallErrorMessages("employeeCategoryErr", "Please Select  Employee Category .");
            result = 0;
        } else if ($('#employeeCategory').val() !== null) {
        }
        if ($('#natureType').val() === null) {
            $("#natureType").focus();
            displaySmallErrorMessages("natureTypeErr", "Please Select  Nature Type .");
            result = 0;
        } else if ($('#natureType').val() !== null) {
        }
        if ($('#ddo').val() === null) {
            $("#ddo").focus();
            displaySmallErrorMessages("ddoErr", "Please Select  DDO .");
            result = 0;
        } else if ($('#ddo').val() !== null) {
        }
        if (result !== 0) {
            viewEmployeeListmasterSearchForEmpLeaveAssignmentMaster('empLeaveAssignmentListMainMenu');
            LeaveAssignedListTableForLeaveAdjustment("AssignedTableRow");
        }

    }
}


function viewEmployeeListmasterSearchForEmpLeaveAssignmentMaster(divId) {

    $("#empLeaveAssignmentListMainMenu").text("").append('<div id="empLeaveAssignmentListPanel" class="panel panel-blue" />');
    $("#empLeaveAssignmentListPanel").append('<div id="empLeaveAssignmentListHeading" class="panel-heading" />');

    $("#empLeaveAssignmentListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>List of Employee(s)</center></a>');
    $("#empLeaveAssignmentListHeading").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#empLeaveAssignmentListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');

    addToggleToId("colMaritial2", "collapseOne2");

    $("#collapseOne2").append('<div id="empLeaveAssignmentListBody" class = "panel-body pan" />');
    $("#empLeaveAssignmentListBody").append('<div id="panelRow" class="row" />');

    $("#empLeaveAssignmentListBody").append('<div id="empLeaveAssignmentListErrorMsgId" />');
    $("#empLeaveAssignmentListBody").append('<div id="empLeaveAssignmentListMainBody" class="table-responsive" />');
    $("#empLeaveAssignmentListBody").append('<div id="saveResetRow" class="row" />');
    $("#empLeaveAssignmentListMainBody").append('<table id="empLeaveAssignmentTable" class="table table-striped table-bordered table-hover" />');
    $("#empLeaveAssignmentTable").append('<div id="errormsgdis" />');
    $("#empLeaveAssignmentTable").append('<input type="hidden" id="maxleavePerYearForValidation" />');
    $("#empLeaveAssignmentTable").append('<input type="hidden" id="maxleaveBalanceForValidation" />');
    $("#empLeaveAssignmentTable").append('<thead id="empLeaveAssignmentTableHeadId" />');
    $("#empLeaveAssignmentTable").append('<tbody id="empLeaveAssignmentTableBodyId" />');
    $("#saveResetRow").append('<div id="saveResetRow" class="row" />');
    $("#saveResetRow").append("<div  class='col-xs-12' /><center><button type='button'  value='Save' class='btn btn-success  mr5'  onclick='MovecheckeddataintoLeaveAssignedTableMaster()' disabled='true' id='save'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick=wipeAllDataInThisDivInLeaveAssignnment('dashBoardBodyMainDiv') class='btn btn-warning  mr5' name='reset' value='reset' disabled='true' id='reset'>Reset</button></div>");
    $("#empLeaveAssignmentTableHeadId").append("<tr>"
            + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code(M)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Nature Type</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Current Year Leaves</th>"
            + "<th style='min-width:15%;width:auto;align:center;'><i></i>Total Earned Leaves</th>"
            + "</tr>");
    var employeeSearchJSON = {
        employeeCode: $("#employeeCode").val(),
        employeeCodeM: $("#employeeCodeM").val(),
        employeeName: $("#employeeName").val(),
        ddo: $("#ddo").val(),
        location: $("#location").val(),
        department: $("#department").val(),
        designation: $("#designation").val(),
        postingCity: $("#postingCity").val(),
        natureType: $("#natureType").val(),
        salaryBillType: $("#employeeCategory").val(),
        classMaster: $("#employeeCategory").val(),
    };
    var natureType = $("#natureType").val();
    var natureTypeName = $("#natureType option:selected").text();
    var employeeCategory = $("#employeeCategory").val();
    var employeeCategoryName = $("#employeeCategory option:selected").text();
    var leaveType = $("#leaveType").val();
    var totalEarnedLeaves = 0;
    $.get(server_base_url + "leave/LeaveType/Search", {
        leaveType: leaveType
    }).done(function(bdata) {

        for (var i = bdata.leaveTypeDetails.length - 1; i >= 0; i--) {
            if (employeeCategoryName == bdata.leaveTypeDetails[i].employeeCategory && natureTypeName == bdata.leaveTypeDetails[i].natureType) {
                totalEarnedLeaves = bdata.leaveTypeDetails[i].maxLeavePerYear;
                $("#maxleavePerYearForValidation").val(bdata.leaveTypeDetails[i].maxLeavePerYear);
                $("#maxleaveBalanceForValidation").val(bdata.leaveTypeDetails[i].maxLeaveBalance);
            }
        }
    });
    var year = $("#year").val();
    var condition = "yes";
    var ddo = $("#ddo").val();
    if (ddo != null) {
        condition = "No";
    }

    //changed on 25-9-2016
    //hrms/salary/Employee/Search

    $.get(server_base_url + "EmployeeSearchServiceV2", {
        condition: condition,
        employeeSearchJSON: JSON.stringify(employeeSearchJSON),
        leaveType: leaveType,
        year: year
    }).done(function(bdata) {
        if (bdata.statuscode === NoData) {
            displaySmallErrorMessagesInRed("empLeaveAssignmentListErrorMsgId", "<center>" + NoDataFoundMessage + "</center>");
        }
        if (bdata === fail) {
            displaySmallErrorMessagesInRed("empLeaveAssignmentListErrorMsgId", "Invalid username / password" + "");
        } else if (bdata === unauthorized) {
            displaySmallErrorMessagesInRed("empLeaveAssignmentListErrorMsgId", "<center>" + NoDataFoundMessage + "</center>");
        } else if (bdata === statusException) {
            displaySmallErrorMessagesInRed("empLeaveAssignmentListErrorMsgId", "<center>" + NoDataFoundMessage + "</center>");
        } else if (bdata === invalidSession) {
            callSessionTimeout();
        } else if (bdata === null) {
            displaySmallErrorMessagesInRed("empLeaveAssignmentListErrorMsgId", "<center>" + NoDataFoundMessage + "</center>");
        } else if (bdata !== null) {
            var adata = bdata;
            var sno = 0;
            bdata = bdata.leaveunassigned;
            for (var i = bdata.length - 1; i >= 0; i--) {
                sno++;
                var employeejson = bdata[i];
                employeejson = JSON.stringify(employeejson);
                $("#empLeaveAssignmentTableBodyId").append("<tr id='" + bdata[i].employeeId + "' style='cursor:pointer;' >"
                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].employeeCodeM + "<input type='hidden' value='" + encodeURI(employeejson) + "'></td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "<input type='hidden' value='" + employeeCategory + "'></td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].ddo + "<input type='hidden' value='" + leaveType + "'></td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].designation + "<input type='hidden' value='" + year + "'></td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].natureType + "<input type='hidden' value='" + natureType + "'></td>"
                        + "<td style='cursor:pointer;'><input type='text' id='loecyl" + sno + "' value='0' onkeypress='return validateNumber(event)' disabled></td>"
                        + "<td style='cursor:pointer;'><input type='text' id='loetel" + sno + "' onkeypress='return validateNumber(event)' onchange=asgnTotErndLvsToCurYrLvs('" + totalEarnedLeaves + "','" + sno + "') value='" + totalEarnedLeaves + "' disabled><div id='error" + sno + "'></div></td></tr>");

                $("#" + bdata[i].employeeId + ' td input[type="checkbox"][name="case"]').
                        on("change", {id: sno, case: bdata[i].employeeId}, enableTotEarndLeavs);
//                $("#loetel" + sno).on("change", {id: sno, case: bdata[i].employeeId}, asgnTotErndLvsToCurYrLvs);
//                     $("#loetel" + sno).on("change", {id: sno, case: bdata[i].employeeId}, function(event) {
//                  asgnTotErndLvsToCurYrLvs(totalEarnedLeaves);
//                });
            }
            $('#empLeaveAssignmentTable').append("</table>");
            $("#empLeaveAssignmentTable thead tr th:first input:checkbox").change(function() {
                $("#empLeaveAssignmentTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                $("tr").find("input[type=text]").attr("disabled", false);
            });
            LeaveAssignedListTableForLeaveAdjustment("AssignedTableRow", adata.leaveassigned);
            $("#empLeaveAssignmentTable tbody tr td:first-child input:checkbox").change(function() {
                var tot = $(".case").length;
                var tot_checked = $(".case:checked").length;
                if (tot !== tot_checked) {
                    $("#selectall").prop('checked', false);
                }
            });
        }
    });

    if ($("#empLeaveAssignmentTable tr").length > 1) {
        $("#save").attr('disabled', false);
        $("#reset").attr('disabled', false);

    }

}

function enableTotEarndLeavs(event) {

    var isSelected = $("#" + event.data.case + ' td input[type="checkbox"][name="case"]').prop("checked");

    if (isSelected === true) {
        $("#loetel" + event.data.id).attr("disabled", false);
        $("#loecyl" + event.data.id).attr("disabled", false);
    } else {
        $("#loetel" + event.data.id).attr("disabled", true);
        $("#loecyl" + event.data.id).attr("disabled", true);
//        $("#loetel" + event.data.id).val("");
//        $("#loecyl" + event.data.id).val("");
    }
}

function asgnTotErndLvsToCurYrLvs(sanctionedAmount, i) {

    // var totErndLvs = $("#loetel" + event.data.id).val();
    $("#error" + i).text("");
    var SanValue = $("#loetel" + i).val();

    if (parseInt(SanValue) > parseInt(sanctionedAmount))
    {
        displaySmallErrorMessagesInRed("error" + i, "Total Earned Leaves More than Max Leave Per Year.");
    }
//    $("#loecyl" + event.data.id).val(totErndLvs).text(totErndLvs);
}

function LeaveAssignedListTableForLeaveAdjustment(id, bdata) {
    $("#empLeaveAssignedListMainMenu").text("").append('<div id="empLeaveAssignedListPanel" class="panel panel-blue" />');
    $("#empLeaveAssignedListPanel").append('<div id="empLeaveAssignedListHeading" class="panel-heading" />');

    $("#empLeaveAssignedListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>List of Employee(s) (Leave Assigned)</center></a>');
    $("#empLeaveAssignedListHeading").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial3'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#empLeaveAssignedListPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');

    addToggleToId("colMaritial3", "collapseOne3");

    $("#collapseOne3").append('<div id="empLeaveAssignedListBody" class = "panel-body pan" />');
    $("#empLeaveAssignedListBody").append('<div id="panelRow" class="row" />');

    $("#empLeaveAssignedListBody").append('<div id="empLeaveAssignedListErrorMsgId" />');
    $("#empLeaveAssignedListBody").append('<div id="empLeaveAssignedListMainBody" class="table-responsive" />');
    $("#empLeaveAssignedListMainBody").append('<table id="displayAssignedTable" class="table table-striped table-bordered table-hover" />');


    $("#displayAssignedTable").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code(M)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Nature Type</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Current Year Leaves</th>"
            + "<th style='min-width:15%;width:auto;align:center;'><i></i>Total Earned Leaves</th>"
            + "<th style='min-width:15%;width:auto;align:center;'><i></i>Edit</th>"
            + "<th style='min-width:15%;width:auto;align:center;'><i></i>Delete</th>"
            + "</tr></thead>");

    $("#displayAssignedTable").append("<tbody id='displayAssignedTableBody' class='table-striped table-bordered' />");
    var checkedrowListleaveprocessed = [];
    $('#displayBankTable tr input[type="checkbox"][name="case"]:checked').each(function(i) {
        var row1 = $(this).closest('tr');
        checkedrowListleaveprocessed.push(decodeURI(row1.find('td:eq(1) input').val()));
        $(this).closest('tr').remove();
    });

    if (bdata !== undefined && bdata.length > 0) {
        var sno = 0;
        for (var i = 0; i < bdata.length; i++) {
            ++sno;
            var employeejson = JSON.stringify(bdata[i]);
            $("#displayAssignedTableBody").append("<tr id='" + bdata[i].employeeId + "' style='cursor:pointer;' >"
                    + "<td style='cursor:pointer;'>" + sno + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].employeeCodeM + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].ddo + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].natureType + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].currentYearLeaves + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].totalEarnedLeaves + "</td>"
                    + "<td style='cursor:pointer;' onclick=editLeaveAssignment('" + encodeURI(employeejson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                    + "<td>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a onclick=deletePopUp("deleteLeaveAssignment","","' + bdata[i]._id.$oid + '")   class="anchor_delete"  style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
            $('#displayAssignedTable').append("</table>");
        }
    }

    if ($("#empLeaveAssignmentTable tr").length > 1) {
        $("#save").attr('disabled', false);
        $("#reset").attr('disabled', false);

    }

}
function editLeaveAssignment(editData)
{
    editData = decodeURI(editData);
    editData = JSON.parse(editData);
    $("#empLeaveAssignmentListMainMenu").text("").append('<div id="empLeaveAssignmentListPanel" class="panel panel-blue" />');
    $("#empLeaveAssignmentListPanel").append('<div id="empLeaveAssignmentListHeading" class="panel-heading" />');

    $("#empLeaveAssignmentListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>List of Employee(s)</center></a>');
    $("#empLeaveAssignmentListHeading").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#empLeaveAssignmentListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');

    addToggleToId("colMaritial2", "collapseOne2");

    $("#collapseOne2").append('<div id="empLeaveAssignmentListBody" class = "panel-body pan" />');
    $("#empLeaveAssignmentListBody").append('<div id="panelRow" class="row" />');

    $("#empLeaveAssignmentListBody").append('<div id="empLeaveAssignmentListErrorMsgId" />');
    $("#empLeaveAssignmentListBody").append('<div id="empLeaveAssignmentListMainBody" class="table-responsive" />');
    $("#empLeaveAssignmentListBody").append('<div id="saveResetRow" class="row" />');
    $("#empLeaveAssignmentListMainBody").append('<table id="empLeaveAssignmentTable" class="table table-striped table-bordered table-hover" />');
    $("#empLeaveAssignmentTable").append('<div id="errormsgdis" />');
    $("#empLeaveAssignmentTable").append('<input type="hidden" id="maxleavePerYearForValidationUpdate" />');
    $("#empLeaveAssignmentTable").append('<input type="hidden" id="maxleaveBalanceForValidationUpdate" />');
    $("#empLeaveAssignmentTable").append('<thead id="empLeaveAssignmentTableHeadId" />');
    $("#empLeaveAssignmentTable").append('<tbody id="empLeaveAssignmentTableBodyId" />');
    $("#saveResetRow").append('<div id="saveResetRow" class="row" />');
    $("#saveResetRow").append("<div  class='col-xs-12' /><center><button type='button'  value='Update' class='btn btn-success  mr5'  onclick='leaveAssignUpdateValidation()' id='update'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick=wipeAllDataInThisDivInLeaveAssignnment('dashBoardBodyMainDiv') class='btn btn-warning  mr5' name='reset' value='reset' id='reset'>Back</button></div>");
    $("#empLeaveAssignmentTableHeadId").append("<tr>"
            + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code(M)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Nature Type</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Current Year Leaves</th>"
            + "<th style='min-width:15%;width:auto;align:center;'><i></i>Total Earned Leaves</th>"
            + "</tr>");
    var totalEarnedLeaves = 0;
    $.get(server_base_url + "leave/LeaveType/Search", {
        leaveType: editData.leaveType
    }).done(function(bdata) {
        for (var i = bdata.leaveTypeDetails.length - 1; i >= 0; i--) {
            if (editData.employeeCategory == bdata.leaveTypeDetails[i].employeeCategoryName) {
                totalEarnedLeaves = bdata.leaveTypeDetails[i].maxLeavePerYear;
                $("#maxleavePerYearForValidationUpdate").val(bdata.leaveTypeDetails[i].maxLeavePerYear);
                $("#maxleaveBalanceForValidationUpdate").val(bdata.leaveTypeDetails[i].maxLeaveBalance);
            }
        }
    });


    var sno = 1;
    var employeejson = JSON.stringify(editData);
    $("#empLeaveAssignmentTableBodyId").append("<tr id='" + editData.employeeId + "' style='cursor:pointer;' >"
            + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case" checked/>' + "</td>"
            + "<td style='cursor:pointer;'>" + editData.employeeCodeM + "<input type='hidden' value='" + encodeURI(employeejson) + "'></td>"
            + "<td style='cursor:pointer;'>" + editData.employeeName + "<input type='hidden' value='" + editData.employeeCategory + "'></td>"
            + "<td style='cursor:pointer;'>" + editData.ddo + "<input type='hidden' value='" + editData.leaveType + "'></td>"
            + "<td style='cursor:pointer;'>" + editData.designation + "<input type='hidden' value='" + editData.year + "'></td>"
            + "<td style='cursor:pointer;'>" + editData.natureType + "<input type='hidden' value='" + editData.natureTypeId + "'></td>"
            + "<td style='cursor:pointer;'><input type='text' id='loecyl" + sno + "' onkeypress='return numericVal(event)' value='" + editData.currentYearLeaves + "' disabled></td>"
            + "<td style='cursor:pointer;'><input type='text' id='loetel" + sno + "' onkeypress='return numericVal(event)' onchange=asgnTotErndLvsToCurYrLvs('" + editData.totalEarnedLeaves + "','" + sno + "') value='" + editData.totalEarnedLeaves + "' disabled><div id='error" + sno + "'></div></td></tr>");

    $("#" + editData.employeeId + ' td input[type="checkbox"][name="case"]').
            on("change", {id: sno, case: editData.employeeId}, enableTotEarndLeavs);
    $("#" + editData.employeeId + ' td input[type="checkbox"][name="case"]').change();
//                $("#loetel" + sno).on("change", {id: sno, case: bdata[i].employeeId}, asgnTotErndLvsToCurYrLvs);
//                     $("#loetel" + sno).on("change", {id: sno, case: bdata[i].employeeId}, function(event) {
//                  asgnTotErndLvsToCurYrLvs(totalEarnedLeaves);
//                });

    $('#empLeaveAssignmentTable').append("</table>");
    $("#empLeaveAssignmentTable thead tr th:first input:checkbox").change(function() {
        $("#empLeaveAssignmentTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
    });

    $("#empLeaveAssignmentTable tbody tr td:first-child input:checkbox").change(function() {
        var tot = $(".case").length;
        var tot_checked = $(".case:checked").length;
        if (tot !== tot_checked) {
            $("#selectall").prop('checked', false);
        }
    });

}
function MovecheckeddataintoLeaveAssignedTableMaster()
{

    if (!checkUserPrivelege(pvCreateEmployeeLeaveAssignmentMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }
    var flag = true;
    var saveThisAssignedDetails = [];
    var maxLeavePeryear = parseInt($("#maxleavePerYearForValidation").val());
    var maxLeaveBalance = parseInt($("#maxleaveBalanceForValidation").val());
    var snoOftable = 0;
    $('#empLeaveAssignmentTable tbody tr ').each(function(i) {
        var row = $(this).closest('tr');
        snoOftable++;
        var isSelected = row.find('td:eq(0) input').prop("checked");
        var empJson = JSON.parse(decodeURI(row.find('td:eq(1) input').val()));

        if (isSelected) {
            var currentYearLeavess = parseInt(row.find('td:eq(6) input').val());
            var earnedLeaves = parseInt(row.find('td:eq(7) input').val());
            if (row.find('td:eq(6) input').val() == "" || row.find('td:eq(7) input').val() == "")
            {
                displaySmallErrorMessagesInRed("error" + snoOftable, "Current Year Leaves or Earned Leaves can not be left blank");
                flag = false;
                return;
            }
            $("#error" + snoOftable).text("");
            if (currentYearLeavess > maxLeaveBalance) {
                displaySmallErrorMessagesInRed("error" + snoOftable, "Current Year Leaves Should not be greater than Max Leave Balance");
                flag = false;
                return;
            }
            if (earnedLeaves > maxLeavePeryear) {
                displaySmallErrorMessagesInRed("error" + snoOftable, "Earned Leaves Should not be greater than Max Leave Per Year");
                flag = false;
                return;
            }
            saveThisAssignedDetails.push({
                sno: row.find('td:eq(0)').text(),
                natureType: row.find('td:eq(5) input').val(),
                totalEarnedLeaves: row.find('td:eq(7) input').val(),
                employeeId: row.attr("id"),
                employeeCodeM: empJson.employeeCodeM,
                employeeName: row.find('td:eq(2)').text(),
                employeeCode: empJson.employeeCode,
//                employeeCategory: $("#employeeCategory option:selected").val(), //row.find('td:eq(2) input').val(),
                employeeCategory: row.find('td:eq(2) input').val(),
//                leaveType: $("#leaveType option:selected").val(), //row.find('td:eq(3) input').val(),
                leaveType: row.find('td:eq(3) input').val(),
                currentYearLeaves: row.find('td:eq(6) input').val(),
//                year: $("#year option:selected").val(), //row.find('td:eq(4) input').val(),
                year: row.find('td:eq(4) input').val(),
                //instalment: row.find('td:eq(5) input').val(),
                ddo: row.find('td:eq(3) ').text(),
                designation: row.find('td:eq(4) ').text(),
                employeeDetails: JSON.stringify(empJson),
                //noOfDays: row.find('td:eq(7) ').text()
            });
            $(this).closest('tr').remove();
        }
    });

    if (saveThisAssignedDetails.length > 0) {
        $.get(server_base_url + "leave/EmployeeLeaveAssignment/Save", {
            objJson: JSON.stringify(saveThisAssignedDetails),
            userid: getUserSessionElement("userId")
        }).done(function(bdata) {
            if (bdata == "true" || bdata == "True") {
                displaySuccessMessages("empLeaveAssignedListErrorMsgId", successMessage);
                clearSuccessMessageAfterTwoSecond("empLeaveAssignedListErrorMsgId");
                $("#selectall").removeAttr("checked");
                setTimeout(function() {
                    $("#searchbutton").click();
                }, 2000);
//                $("#empLeaveAssignedListErrorMsgId").text("").append("<center><h3>Succesfully Saved.</h3></center>");
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                displayErrorMessage("empLeaveAssignedListErrorMsgId", unauthorizedMessage);
                $("#selectall").removeAttr("checked");
                setTimeout(function() {
                    $("#searchbutton").click();
                }, 2000);
            } else {
                displayErrorMessage("empLeaveAssignedListErrorMsgId", "Record Not Saved");
                $("#selectall").removeAttr("checked");
                setTimeout(function() {
                    $("#searchbutton").click();
                }, 2000);
            }
        });
    } else
    {
        if (flag == true) {
            displaySmallErrorMessages("errormsgdis", selectAtleastoneRecord);
            setTimeout(function() {
                $("#errormsgdis").text("").val();
            }, 2000);
        }
    }
    /*var checkedrowList = [];
     $('#empLeaveAssignmentTableBodyId  tr input[type="checkbox"][name="case"]:checked').each(function (i) {
     var row = $(this).closest('tr');
     checkedrowList.push({
     natureType: row.find('td:eq(5) ').text(),
     currentYearLeaves: row.find('td:eq(6) input').val(),
     totalEarnedLeaves: row.find('td:eq(7) input').val(),
     employeeCategory: row.find('td:eq(2) input').val(),
     leaveType: row.find('td:eq(3) input').val(),
     year: row.find('td:eq(4) input').val(),
     instalment: row.find('td:eq(5) input').val(),
     employeeDetails: decodeURI(row.find('td:eq(1) input').val())
     });
     $(this).closest('tr').remove();
     });*/

//    var checkedrowListcopy = [];
//    checkedrowListcopy = JSON.stringify(saveThisAssignedDetails);
//    checkedrowListcopy = JSON.parse(checkedrowListcopy);
//    var sno = $('#displayAssignedTable tbody tr').length;
//    if (sno === undefined) {
//        sno = 0;
//    }
//    for (var i = 0; i < checkedrowListcopy.length; i++) {
//        var valDemo = JSON.parse(checkedrowListcopy[i].employeeDetails);
//        $("#displayAssignedTableBody").append("<tr id='" + valDemo.employeeId + "' style='cursor:pointer;' >"
//                + "<td>" + ++sno + "<input type='hidden' value='" + valDemo.employeeId + "'></td>"
//                + "<td style='cursor:pointer;'>" + valDemo.employeeCodeM + "<input type='hidden' value='" + valDemo.employeeCode + "'></td>"
//                + "<td style='cursor:pointer;'>" + valDemo.employeeName + "<input type='hidden' value='" + checkedrowListcopy[i].employeeCategory + "'></td>"
//                + "<td style='cursor:pointer;'>" + valDemo.ddo + "<input type='hidden' value='" + checkedrowListcopy[i].leaveType + "'></td>"
//                + "<td style='cursor:pointer;'>" + valDemo.designation + "<input type='hidden' value='" + checkedrowListcopy[i].year + "'></td>"
//                + "<td style='cursor:pointer;'>" + checkedrowListcopy[i].natureType + "<input type='hidden' value='" + checkedrowListcopy[i].instalment + "'></td>"
//                + "<td style='cursor:pointer;'>" + checkedrowListcopy[i].currentYearLeaves + "</td>"
//                + "<td style='cursor:pointer;'>" + checkedrowListcopy[i].totalEarnedLeaves + "</td></tr>");
//    }
//    $('#displayAssignedTable').append("</table>");
}
function wipeAllEmployeeSearchDateInLeaveAssignment() {
    $("#employeeCode").val("");
    $("#employeeCodeM").val("");
    $("#employeeName").val("");

    $("#department").val("");
    $("#designation").val("0");
    $("#natureType").val("");
    $("#postingCity").val("0");
    $("#fundType").val("");
    $("#budgetHead").val("");
    $("#sortby").val("");
    $("#EmployeeStatus").val("");
    $("#employeeCategory").val("");
    //  $("#leaveType").val("");
    // $("#year").val("0");
    $("#instalment").val("");
    $("#noOfDays").val("");

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
    $("#yearErr").text("");
    $("#instalmentErr").val("");
    $("#noOfDaysErr").val("");
    $("#empLeaveAssignmentListMainMenu").text("");
    $("#empLeaveAssignmentMessageDiv").text("");
    $("#empLeaveAssignedListMainMenu").text("")
}
function getLeaveTypeBasedOnEC() {

    var flag = 0;
    var employeeCategory = $("#employeeCategory").val();
    var natureType = $("#natureType").val();
    var gender = $("#gender").val();

    if ($("#employeeCategory").prop('selectedIndex') === 0 || $("#natureType").prop('selectedIndex') === 0) {
        return;
    }

    $.get(server_base_url + "/leave/leaveTransaction/GetLeaveTypeBasedOnEmpCatandEmpNature", {
        employeeCategory: employeeCategory,
        natureType: natureType,
        gender: gender
    }).done(function(data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("empLeaveAssignmentListErrorMsgId", "<center>" + NoDataFoundMessage + "</center>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("empLeaveAssignmentListErrorMsgId", "<center>" + NoDataFoundMessage + "</center>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("empLeaveAssignmentListErrorMsgId", "<center>" + NoDataFoundMessage + "</center>");
        } else if (data == invalidSession) {
            //callSessionTimeout();
            return false;
        }
        data = JSON.parse(data);
        if (data !== null || data != statusException || data != fail || data != unauthorized || data != "500" || data != "501") {
            $("#leaveType").text("").append("<option  value='' selected>----Select Leave Type----</option>");
            var gender = $("#gender").val();
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    $("#leaveType").append("<option  value='" + data[i].idStr + "' >" + data[i].leaveType + "</option>");
                }
            } else {
                $("#leaveType").text("").append("<option  value='' selected >---No data available ----</option>");
            }
        } else {
            $("#leaveType").text("").append("<option  value='' selected >---No data available ----</option>");
        }

    });
}

function wipeAllDataInThisDivInLeaveAssignnment(id) {
    $("#empLeaveAssignmentListMainMenu").text("");
    $("#empLeaveAssignedListMainMenu").text("");
    $('#displayAssignedTable tbody tr ').each(function(i) {

        $(this).closest('tr').remove();
    });
}
function setEmployeeDetailsInLeaveAssignment() {
    var ddo = $("#ddo").val();
    $("#ddoErr").text("");
    //   $("#employeeCategory").text("");
    if (ddo == "" || ddo == null) {
        $("#ddo").focus();
        $("#employeeCode").val("");
        displaySmallErrorMessagesInRed("ddoErr", "Please select ddo.");
    } else
    {
        //alert();
        var employeeCode = $("#employeeCode").val();
        $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
            employeeCode: employeeCode
        }).done(function(data) {
            // alert(data);             data = data[0];
            $("#department option:contains('" + data[0].department + "')").attr("selected", "selected");
            $("#designation").val(data[0].designation);
            $("#designation option:contains('" + data[0].designation + "')").attr("selected", "selected");
            $("#employeeName").val(data[0].employeeName);
            $("#employeeCodeM").val(data[0].employeeCodeM);
            $("#postingCity option:contains('" + data[0].postingCity + "')").attr("selected", "selected");
            $("#natureType option:contains('" + data[0].natureType + "')").attr("selected", "selected");
            //  $("#employeeCategory option:contains('" + data[0].classMaster + "')").attr("selected", "selected");
            getClassAssign(data[0].classMasterId);
//            $("#employeeCategory option:contains('" + data[0].classMasterId + "')").each(function() {
//                return $(this).text() == data[0].classMasterId;
//            }).prop("selected", "selected");
            $("#gender").text("").val(data[0].gender);
            $("#employeeCategory").trigger("onchange");
        });
    }
}
function getClassAssign(name)
{

    $("#employeeCategory").text("").append("<option value=''>----Select Employee Category----</option>");
    $.get(server_base_url + "hrms/salary/Class/ViewList", {
    }).done(function(bdata) {


        for (var i = 0; i < bdata.length; i++) {
            if (name == bdata[i]._id.$oid)
            {
                $("#employeeCategory").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].name + "</option>");
                $("#employeeCategory").trigger("onchange");
            } else {
                $("#employeeCategory").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].name + "</option>");
                $("#employeeCategory").trigger("onchange");
            }
        }

    });
}
function leaveAssignUpdateValidation()
{

    if (!checkUserPrivelege(pvCreateEmployeeLeaveAssignmentMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }
    var flag = true;
    var maxLeavePeryear = parseInt($("#maxleavePerYearForValidationUpdate").val());

    var maxLeaveBalance = parseInt($("#maxleaveBalanceForValidationUpdate").val());
    var snoOftable = 0;
    var saveThisAssignedDetails = [];
    $('#empLeaveAssignmentTable tbody tr ').each(function(i) {
        var row = $(this).closest('tr');
        snoOftable++;
        var isSelected = row.find('td:eq(0) input').prop("checked");
        var empJson = JSON.parse(decodeURI(row.find('td:eq(1) input').val()));
        if (isSelected) {
            var currentYearLeavess = parseInt(row.find('td:eq(6) input').val());
            var earnedLeaves = parseInt(row.find('td:eq(7) input').val());
            $("#error" + snoOftable).text("");
            if (currentYearLeavess > maxLeaveBalance) {
                displaySmallErrorMessagesInRed("error" + snoOftable, "Current Year Leaves Should not be greater than Max Leave Balance");
                flag = false;
                return;
            }
            if (earnedLeaves > maxLeavePeryear) {
                displaySmallErrorMessagesInRed("error" + snoOftable, "Earned Leaves Should not be greater than Max Leave Per Year");
                flag = false;
                return;
            }
            saveThisAssignedDetails.push({
                sno: row.find('td:eq(0)').text(),
                natureType: row.find('td:eq(5) input').val(),
                totalEarnedLeaves: row.find('td:eq(7) input').val(),
                employeeId: row.attr("id"),
                employeeCodeM: empJson.employeeCodeM,
                employeeName: row.find('td:eq(2)').text(),
                employeeCode: empJson.employeeCode,
//                employeeCategory: $("#employeeCategory option:selected").val(), //row.find('td:eq(2) input').val(),
                employeeCategory: row.find('td:eq(2) input').val(),
//                leaveType: $("#leaveType option:selected").val(), //row.find('td:eq(3) input').val(),
                leaveType: row.find('td:eq(3) input').val(),
                currentYearLeaves: row.find('td:eq(6) input').val(),
//                year: $("#year option:selected").val(), //row.find('td:eq(4) input').val(),
                year: row.find('td:eq(4) input').val(),
                //instalment: row.find('td:eq(5) input').val(),
                ddo: empJson.ddoId,
                designation: empJson.designationId,
                employeeDetails: JSON.stringify(empJson),
                rowId: empJson._id.$oid
                        //noOfDays: row.find('td:eq(7) ').text()
            });
            $(this).closest('tr').remove();
        }
    });

    if (saveThisAssignedDetails.length > 0) {
        $.get(server_base_url + "/LeaveManagement/LeaveAssignment/Update", {
            objJson: JSON.stringify(saveThisAssignedDetails),
            userid: getUserSessionElement("userId")
        }).done(function(bdata) {
            if (bdata == "success") {
                displaySuccessMessages("empLeaveAssignedListErrorMsgId", successMessage);
                clearSuccessMessageAfterTwoSecond("empLeaveAssignedListErrorMsgId");
                $("#selectall").removeAttr("checked");
                setTimeout(function() {
                    $("#searchbutton").click();
                }, 2000);
//                $("#empLeaveAssignedListErrorMsgId").text("").append("<center><h3>Succesfully Saved.</h3></center>");
            } else if (bdata == "RecordMapped")
            {
                displayLargeErrorMessagesInCenterInRed("empLeaveAssignedListErrorMsgId", "Record Already Mapped");
                $("#selectall").removeAttr("checked");
                setTimeout(function() {
                    $("#searchbutton").click();
                }, 2000);
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                displayErrorMessage("empLeaveAssignedListErrorMsgId", unauthorizedMessage);
                $("#selectall").removeAttr("checked");
                setTimeout(function() {
                    $("#searchbutton").click();
                }, 2000);
            } else {
                displayErrorMessage("empLeaveAssignedListErrorMsgId", "Record Not Saved");
                $("#selectall").removeAttr("checked");
                setTimeout(function() {
                    $("#searchbutton").click();
                }, 2000);
            }
        });
    } else
    {
        //  displaySmallErrorMessages("errormsgdis", selectAtleastoneRecord);
        setTimeout(function() {
            $("#errormsgdis").text("").val();
        }, 1000);
    }
}
function  deleteLeaveAssignment(Id) {

    $.post(server_base_url + "/LeaveManagement/LeaveAssignment/Delete", {
        id: Id,
        userId: getUserSessionElement("userId")
    }).done(function(data) {
        if (data == fail) {
            displaySmallErrorMessages("empLeaveAssignedListErrorMsgId", "Invalid username / password");
        } else if (data == unauthorized) {
            displaySmallErrorMessages("empLeaveAssignedListErrorMsgId", unauthorizedMessage);
        } else if (data == statusException) {
            displaySmallErrorMessages("empLeaveAssignedListErrorMsgId", statusExceptionMessage);
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessages("empLeaveAssignedListErrorMsgId", "No User available");
        }
        else if (data == "success") {
            displaySuccessMessages("empLeaveAssignedListErrorMsgId", successMessage);
            clearSuccessMessageAfterTwoSecond("empLeaveAssignedListErrorMsgId");
            $("#selectall").removeAttr("checked");
            setTimeout(function() {
                $("#searchbutton").click();
            }, 2000);
//                $("#empLeaveAssignedListErrorMsgId").text("").append("<center><h3>Succesfully Saved.</h3></center>");
        } else if (data == "RecordMapped")
        {
            displayLargeErrorMessagesInCenterInRed("empLeaveAssignedListErrorMsgId", "Record Already Mapped");
            $("#selectall").removeAttr("checked");
            setTimeout(function() {
                $("#searchbutton").click();
            }, 2000);
        }
        else {

            displaySuccessMessages("empLeaveAssignedListErrorMsgId", deleteMessage, "");
            setTimeout(function() {
                $("#searchbutton").attr("onclick", searchEmployeeForEmpLeaveAssignmentMaster());
            }, 2000);
        }
    });
//        }
}
