/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//1. Disable the fields after saving
//2. Edit functionality
//4. UPdate

var leaveTypeName;

function employeeEncashment(divId) {

    leaveTypeName = undefined;

    if (!checkUserPrivelege(pvViewEmployeeEncashmentMaster)) {
        return;
    }

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> >> <label>Leave Encashment</label>');
    $("#" + divId).text("").append('<div id="leaveEncashmentDivId"></div>');
    $("#leaveEncashmentDivId").text("").append('<div id="leaveEncashmentTabMenu" />');

    $("#leaveEncashmentTabMenu").append('<div id="leaveEncashmentMainMenu" class="row" />');
    $("#leaveEncashmentTabMenu").append('<div id="leaveEncashmentListMainMenu" class="row" />');

    $("#leaveEncashmentMainMenu").append('<div id="leaveEncashmentMainPanel" class="panel panel-blue" />');
    $("#leaveEncashmentMainPanel").append('<div id="leaveEncashmentMainHeading" class="panel-heading" />');

    $("#leaveEncashmentMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>Leave Encashment</center></a>');
    $("#leaveEncashmentMainHeading").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#leaveEncashmentMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');

    addToggleToId("colMaritial1", "collapseOne1");

    $("#collapseOne1").append('<div id="leaveEncashmentMainBody" class = "panel-body pan" />');
    $("#leaveEncashmentMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#leaveEncashmentMainBody").append('<center><span id="leaveEncashmentMessageDiv"></span></center>');
    $("#leaveEncashmentMainBody").append('<div id="leaveEncashmentBodyDiv" class="row" />');
    $("#leaveEncashmentBodyDiv").append('<div class="col-lg-12"><div   class="form-group col-lg-6"><label for="employeeName">Employee Name <span class="require">*</span></label><div id="employeeNamecollg6"><select  id="employeeName" placeholder="Employee Name" onchange="getEmployeeDataForEmployeeLeaveEncashment()" class="form-control"></select></div><span id="employeeNameErr" class="text-danger"></span></div><input type="hidden" value="save" id="saveorupdate"></div>');
    $("#leaveEncashmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ddo">DDO </label><input type="text" id="ddo" class="form-control" readonly/><span id="ddoErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="department">Department </label><input type="text" id="department" class="form-control" readonly /><span id="departmentErr" class="text-danger"></span></div></div>');
    $("#leaveEncashmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><input type="text" id="designation" class="form-control" readonly /><span id="designationErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="leftStatus">Left Status </label><input type="text" id="leftStatus" class="form-control" readonly /><span id="leftStatusErr" class="text-danger"></span></div></div>');
    $("#leaveEncashmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Leave  Type <span class="require">*</span></label><select id="leaveType"   class="form-control"></select><span id="leaveTypeErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="encashmentDate">Encashment Date <span class="require">*</span> </label><input type="text" id="encashmentDate" class="form-control" /><span id="encashmentDateErr" class="text-danger"></span></div></div>');
    var d = new Date();
    ////////alert(d);
    $("#encashmentDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd-mm-yy",
        yearRange: '-0:+1',
        startDate: d,
        endDate: d,
        defaultDate: d
    });
    // $("#leaveEncashmentBodyDiv").append('<input type="hidden" name="formula"'
    $("#leaveEncashmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="leaveBalance">Leave Balance </label><input type="text" id="leaveBalance" class="form-control" readonly/><span id="leaveBalanceErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="cashableLeaves">Cashable Leaves </label><input type="text" id="cashableLeaves" class="form-control" readonly/><span id="totalBalanceLeavesErr" class="text-danger"></span></div></div>');
    $("#leaveEncashmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="leaveToBeEncashed">Leave To Be Encashed <span class="require">*</span> </label><input type="text" id="leaveToBeEncashed" class="form-control"/><input id="employeeJsonObject" type="hidden"><span id="leaveToBeEncashedErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="remarks">Remarks </label><textarea class="form-control" rows="1" id="remarks" placeholder="Please enter remarks..."></textarea><span id="remarksErr" class="text-danger"></span></div></div>');
    $("#leaveEncashmentBodyDiv").append("<div  class='col-lg-12'><center><button class='btn btn-success form-group' onclick='calculateChashbleAmount()' >Calculate</button></center><br></div>");
    $("#leaveEncashmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="totalAmount">Total Amount<span class="require">*</span>  </label><input type="text" id="totalAmount" class="form-control" readonly /><span id="totalAmountErr" class="text-danger"></span></div></div>');
    $("#leaveEncashmentBodyDiv").append("<div class='form-group' id='ledgerButton'><center><button onclick=leaveEnchashmentSave() class='btn btn-success' id='saveUpdateBtnId' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button  onclick=employeeEncashment('dashBoardBodyMainDiv') class='btn btn-warning' style='height:40px;width:80px' name='reset' id='resetBackBtnId' value='reset'>Reset</button></center></div>");

    getempolyeesForLeaveAssignment("employeeName", "Employee Name");

    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    $("textarea").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    viewEmployeeListmasterSearchForEmpLeaveEncashment();
    $("#leaveType").attr("onchange", "getLeaveDaysDetailsForLeaveEncashment()");
    //$("#leaveType").attr("onchange", "getBalanceLeave()");
    $("#leaveToBeEncashed").attr("onchange", "validateAmount()");
    //$("#leaveToBeEncashed").attr("onchange", "validateNumberIsFive()");
    $("#leaveToBeEncashed").attr("onKeydown", "return isNumberKeyCheckTest(event,this)");
    //getEmployeeDataForEmployeeLeaveEncashment();
}

function isNumberKeyCheckTest(evt, thisobj)
{
    var charCode = (evt.which) ? evt.which : event.keyCode;
    var textboxValue = thisobj.value + "";
    if (charCode == 17 || charCode == 67)
        return true;
    if (charCode == 17 || charCode == 86)
        return true;
    if (charCode == 17 || charCode == 88)
        return true;

    if (charCode == 190 || charCode == 110) {
        var contains = textboxValue.indexOf(".") != -1;
        if (contains)
            return false;
    }

    var temp = parseFloat(textboxValue);


    temp = temp.toFixed(1);
    var noofdecimal = 1; // it decides how many number to be printed after decimal point.
    var temp1 = textboxValue.split('.');

    if (temp1.length == 2) {
        if (temp1[1].length >= noofdecimal) {
            if (charCode == 8 || charCode == 9) {
                return true;
            }
            return false;
        }


    }

    if (charCode == 37 || charCode == 39)
        return true;  // allow arrows
    if (charCode == 46)
        return true; //delete
    if (charCode == 190 || charCode == 110)
        return true; // period or dot
    if (charCode == 35 || charCode == 36)
        return true; // home, end
    if (charCode == 8 || charCode == 9)
        return true; // backspace , tab
    if (charCode > 47 && charCode < 58)
        return true; //0-9  // special character keys
    if (charCode > 95 && charCode < 106)
        return true; //0-9 // number keys

    return false;
}

function validateNumberIsFive() {

    // $("#leaveToBeEncashedErr").text("");
    var value = $("#leaveToBeEncashed").val();

//alert(value);

    var leaveToBeEncashed = value.split('.');

    if (leaveToBeEncashed.length === 2) {
        if (parseInt(leaveToBeEncashed[0]) == 0 && parseInt(leaveToBeEncashed[1]) !== 5) {
            displaySmallErrorMessagesInRed("leaveToBeEncashedErr", "This field should be multiples of 0.5");
            $("#leaveToBeEncashed").val("");
        }
        if (parseInt(leaveToBeEncashed[1]) === 5 || parseInt(leaveToBeEncashed[1]) === 0) {
            return true;
        } else {
            displaySmallErrorMessagesInRed("leaveToBeEncashedErr", "This field should be multiples of 0.5");
            $("#leaveToBeEncashed").val("");
        }
    } else {
        if (parseInt(value) === 0) {
            displaySmallErrorMessagesInRed("leaveToBeEncashedErr", "Please enter valid input");
            $("#leaveToBeEncashed").val("");
        }
    }

}


function validateAmount()
{
    var leaveToBeEncashed = $("#leaveToBeEncashed").val();
    var cashableLeaves = $("#cashableLeaves").val();
    var leaveBalance = $("#leaveBalance").val();
    $("#leaveToBeEncashedErr").text("");
    $("#totalAmount").val("")
    // alert("---cashableLeaves---"+cashableLeaves+"---leaveBalance---"+leaveBalance+"--leaveToBeEncashed--"+leaveToBeEncashed);

    if (leaveBalance != null || cashableLeaves != null)
    {
        if (parseFloat(leaveToBeEncashed) > parseFloat(cashableLeaves))
        {
            // alert("991");
            displaySmallErrorMessagesInRed("leaveToBeEncashedErr", "Sorry! Can not encash leaves more than Cashable Leaves");
            $("#leaveToBeEncashed").val("");
        } else if (parseFloat(leaveToBeEncashed) > parseFloat(leaveBalance))
        {
            displaySmallErrorMessagesInRed("leaveToBeEncashedErr", "Sorry! You don't have sufficient leave balance for encashment");
            $("#leaveToBeEncashed").val("");
        }
        validateNumberIsFive();
    }

}
function getempolyeesForLeaveAssignment(DivId, message)
{
    //////////alert;
//    $.get(server_base_url + "hrms/salary/Employee/ViewName", {    
    var ddo = getUserSessionElement(seDDOId);
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];

    $.get(server_base_url + "/leave/LeaveEncash/LeaveAssignedEmpListService", {
        ddo: ddo,
        fromDt: fromDate,
        toDate: toDate,
        location: getUserSessionElement(seLocationId)
    }).done(function (data) {
        // //////alert(data);
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
function calculateChashbleAmount() {
    $("#totalAmount").val("");
    var result = 1;
    var employeeJsonObject = JSON.parse(decodeURI($("#employeeJsonObject").val()));
    $("#leaveToBeEncashedErr").text("");
    var leaveToBeEnchashed = parseFloat($("#leaveToBeEncashed").val());
    var leaveType = $("#leaveType").val();
    //alert(parseFloat($("#leaveToBeEncashed").val()));
    //alert;
    //alert(parseFloat($("#leaveToBeEncashed").val()));
    var aa = parseFloat($("#leaveToBeEncashed").val().match((doubleValidation())));
    var bb = parseInt($("#leaveToBeEncashed").val().match((numberValidation())));
    if ($("#leaveToBeEncashed").val() == null || $("#leaveToBeEncashed").val() == "")
    {
        displaySmallErrorMessagesInRed("leaveToBeEncashedErr", "Please enter Value.");
        $("#leaveToBeEncashed").val(" ");


    } else if (!parseInt($("#leaveToBeEncashed").val().match((numberValidation())))) {
        $("#leaveToBeEncashed").focus();
        displaySmallErrorMessages("leaveToBeEncashedErr", "Please enter valid input");
        result = 0;
    }
    var id = "";
    if (result !== 0) {
        var saveorupdate = $("#saveorupdate").val();

        if (saveorupdate == "save")
        {
            id = employeeJsonObject._id.$oid;
        } else if (saveorupdate == "update")
        {
            id = employeeJsonObject.employeeId;
        }
//alert(JSON.stringify(employeeJsonObject));
//alert(id);
        if (employeeJsonObject.basic !== null || employeeJsonObject.basic !== "") {

            $.get(server_base_url + "CalculateEmployeeLeaveEncashableAmount", {
                leaveToBeEnchashed: leaveToBeEnchashed,
                employeeId: id,
                leaveType: leaveType,
                ddo: getUserSessionElement(seDDOId),
                location: getUserSessionElement(seLocationId),
                natureType: employeeJsonObject.natureType
            }).done(function (bdata) {
                if (validateResponseData(bdata, "") !== true) {
                    $("#totalAmount").val(bdata);
                }
            });
        }
    }
}

function getLeaveDaysDetailsBasedOnLeaveType(employeeCategory) {
    //////////alert;
    var leaveType = $("#leaveType").val();
    var totalLeaves = 0;
    var cashableLeaves;
    var leaveToBeEnchashed;
    var cashable;

    var empObj = decodeURI($('#employeeJsonObject').val());

    empObj = JSON.parse(empObj);

    setTimeout(function () {
        $.get(server_base_url + "leave/LeaveType/Search", {
            leaveType: leaveType
        }).done(function (bdata) {
            // alert(bdata);
            //totalLeaves = bdata.leaveTypeDetails[0].maxLeavePerYear;
            ////////alert(empObj.EmployeeLeftStatus);
            var details = bdata.leaveTypeDetails;
            ////alert
            for (var i = 0; i < details.length; i++)
            {
                if (details[i].employeeCategoryName == employeeCategory)
                {
                    // alert("inside");
                    if (empObj.EmployeeLeftStatus === "No") {
                        cashableLeaves = details[i].leaveEncashmentBeforeRetirement;
                    } else {
                        cashableLeaves = details[i].leaveEncashmentAfterRetirement;
                    }
                    if (cashableLeaves === "") {
                        cashableLeaves = 0;
                    }
                    // $("#leaveBalance").val(parseInt(totalLeaves) - parseInt(cashableLeaves));
                    cashable = details[i].cashable;
                    var formula = details[i].formula;
                    var amount = details[i].amount;
                    if (cashable === "Yes") {
                        $("#cashableLeaves").val(cashableLeaves);
                        // $("#leaveToBeEncashed").val(cashableLeaves);
                    } else {
                        $("#cashableLeaves").val(0);
                        //$("#leaveToBeEncashed").val(0);
                    }
                }
            }
        });
    }, 1000);
}

//function viewEmployeeNameEmployeeCode(DivId, message)
//{
////    $.get(server_base_url + "hrms/salary/Employee/ViewName", {    
//    $.get(server_base_url + "hrms/salary/Employee/ViewList", {
//    }).done(function (bdata) {
//        if (bdata != null) {
//            $("#" + DivId).text("").append("<option value = '' selected disabled> [Employee Code] -" + message + " </option>");
//            if (bdata.length > 0) {
//                for (var i = 0; i < bdata.length; i++) {
//                    $("#" + DivId).append("<option  value='" + bdata[i].employeeCode + "' >[" + bdata[i].employeeCode + "] - " + bdata[i].employeeName + "</option>");
//                }
//            }
//        }
//    });
//}

function getEmployeeDataForEmployeeLeaveEncashment() {
    var empCode = $("#employeeName").val();
    $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
        employeeCode: empCode
    }).done(function (pdata) {
        $("#pregsuccessBefore").text("");
        $("#leaveToBeEncashed").val("");
        $("#cashableLeaves").val("");
        $("#totalAmount").val("");
        $("#leaveBalance").val("");
//        $('#employeeId').val(pdata[0]._id.$oid);
        $('#name').val(pdata[0].employeeName);
        $('#ddo').val(pdata[0].ddo);
        $('#designation').val(pdata[0].postedDesignation);
        $('#department').val(pdata[0].department);
        getLeaveTypeForLeaveEncashmentBasedOnEc(pdata[0].classMaster, pdata[0].gender, empCode);
        $('#employeeJsonObject').val(encodeURI(JSON.stringify(pdata[0])));
        $("#leftStatus").val(pdata[0].EmployeeLeftStatus);
    });
}
//function getBalanceLeave() {
//    var flag = 0;
//    var empCode = $("#employeeName").val();
//    var leaveType = $("#leaveType").val();
//    var ddo = getUserSessionElement(seDDOId);
//    //var leaveBalance = $("#leaveBalance").val();
//    // //////alert("/leave/LeaveType/ViewcashableLeaveTypeList")
//    $.get(server_base_url + "/leave/LeaveEncash/getLeaveBalanceFromTransaction", {
//        employeeCode: empCode,
//        leaveType: leaveType,
//        ddo: ddo,
//        location: getUserSessionElement(seLocationId)
//
//    }).done(function(data) {
//        if (data !== null) {
//            data = JSON.parse(data);
//            ////////alert(data);
//            if (data.length > 0) {
//                $('#leaveBalance').val(data);
//            }
//        }
//    });
//}
function getLeaveDaysDetailsForLeaveEncashment()
{
    var leaveType = $("#leaveType").val();
    var employeeJsonObject = JSON.parse(decodeURI($("#employeeJsonObject").val()));
//    var leaveTypeJson = $("#leaveTypeJson").val()
//    var employeeCategory = employeeJsonObject.classMaster;
//    var eligiblilityLeaves = 0;
//    var earnedLeaves = 0;
//    for (var i = 0; i < leaveTypeJson.length; i++) 
//    {
//        if (leaveType == leaveTypeJson[i].leaveType) {
//            earnedLeaves == leaveTypeJson.totalEarnedLeaves;
//        }
//    }
    var eligiblilityLeaves = 0;
    var totalAppliedLeaves = 0;
    var employeeCategory = "";
    setTimeout(function ()
    {
        $.get(server_base_url + "/getLeaveAssignforTransc", {
            leaveType: leaveType,
            employeeid: employeeJsonObject._id.$oid
        }).done(function (bdata)
        {
            eligiblilityLeaves = parseInt(bdata.currentYearLeaves) + parseInt(bdata.totalEarnedLeaves);
            employeeCategory = bdata.employeeCategory;
            ////////alert(eligiblilityLeaves);
            getLeaveDaysDetailsBasedOnLeaveType(employeeCategory);
        });
    }, 300);
    setTimeout(function ()
    {
        $.get(server_base_url + "GetRecentEmployeeLeaveTransaction", {
            employeeid: employeeJsonObject._id.$oid,
            leavetype: leaveType
        }).done(function (bdata) {
            if (bdata === fail || bdata === unauthorized ||
                    bdata === invalidSession || bdata === statusException) {
                return;
            } else if (bdata == null)
            {
                setTimeout(function () {
                    var totalBalanceLeaves = parseFloat(eligiblilityLeaves) - 0;
                    $("#leaveBalance").val(totalBalanceLeaves).attr("disabled", true);
                }, 100);
            } else
            {
                setTimeout(function () {
                    var totalBalanceLeaves = parseFloat(eligiblilityLeaves) - parseFloat(bdata.totalLeaveDays);
                    $("#leaveBalance").val(totalBalanceLeaves).attr("disabled", true);
                }, 1000);
            }
        });
    }, 300);

}
function viewEmployeeListmasterSearchForEmpLeaveEncashment() {

    $("#leaveEncashmentListMainMenu").text("").append('<div id="leaveEncashmentListPanel" class="panel panel-blue" />');
    $("#leaveEncashmentListPanel").append('<div id="leaveEncashmentListHeading" class="panel-heading" />');

    $("#leaveEncashmentListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>List of Encashable Leave(s)</center></a>');
    $("#leaveEncashmentListHeading").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#leaveEncashmentListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');

    addToggleToId("colMaritial2", "collapseOne2");

    $("#collapseOne2").append('<div id="leaveEncashmentListBody" class = "panel-body pan" />');
    $("#leaveEncashmentListBody").append('<div id="panelRow" class="row" />');

    $("#leaveEncashmentListBody").append('<div id="leaveEncashmentListErrorMsgId" />');
    $("#leaveEncashmentListBody").append('<div id="leaveEncashmentListMainBody" class="table-responsive" />');
    $("#leaveEncashmentListMainBody").append('<table id="leaveEncashmentTable" class="table table-bordered" />');
//    $("#leaveEncashmentTable").append('<thead id="leaveEncashmentTableHeadId" />');
    $("#leaveEncashmentTable").append('<tbody id="leaveEncashmentTableBodyId" />');

    $("#leaveEncashmentTable").append("<thead class=''><tr>"
            + " <th>" + 'S.No.' + "</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Leave Type</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Encashment Date</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Encashed Leaves</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Total Amount</th>"
            + "<th style='min-width:10%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:15%;width:80px;align:center;'><i></i>Delete</th>"
            + "</tr></thead>");

    $.get(server_base_url + "leave/LeaveEncashment/ViewList", {
        ddo: getUserSessionElement(seDDOId),
        location: getUserSessionElement(seLocationId)
    }).done(function (bdata) {
        bdata = JSON.parse(bdata)
        ////////alert(bdata);
        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("leaveEncashmentListErrorMsgId", NoDataFound + "");
        } else if (bdata == NoDataFoundMessage) {
            displayLargeErrorMessagesInCenterInRed("leaveEncashmentListErrorMsgId", "Invalid username / password" + "");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("leaveEncashmentListErrorMsgId", unauthorizedMessage + "");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("leaveEncashmentListErrorMsgId", statusExceptionMessage + "");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == null) {
            displayLargeErrorMessagesInCenterInRed("leaveEncashmentListErrorMsgId", "No User available" + "");
        } else if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                for (var i = bdata.length - 1; i >= 0; i--) {
                    sno++;
                    var objJson = JSON.stringify(bdata[i]);
                    $("#leaveEncashmentTableBodyId").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].leaveTypeName + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].encashmentDate + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].leaveToBeEncashed + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].totalAmount + "</td>"
                            + "<td style='cursor:pointer;' onclick=updateLeaveEncashmentDetails('" + encodeURI(objJson) + "','" + bdata[i]._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>"
                            + "<td style='cursor:pointer;' onclick=deletePopUp('deleteLeaveEncashment','','" + bdata[i]._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td></tr>");
                }
//                    $('#displayBankTable').append("</table>");
                $('#leaveEncashmentTable').dataTable();
            }
        }
    });
}

function deleteLeaveEncashment(Id) {

    if (!checkUserPrivelege(pvDeleteEmployeeEncashmentMaster)) {
        //////alertPopUpMessage("You are not authorised");
        return;
    }

    var loginUserId = getUserSessionElement("userId");
    $.post(server_base_url + "leave/LeaveEncashment/Delete", {
        Id: Id,
        userid: loginUserId
    }).done(function (data) {
        if (data.statuscode === fail) {
            displaySmallErrorMessagesInRed("leaveEncashmentListErrorMsgId", failMessage + "");
        } else if (data.statuscode === unauthorized) {
            displaySmallErrorMessagesInRed("leaveEncashmentListErrorMsgId", unauthorizedMessage + "");
        } else if (data.statuscode === statusException) {
            displaySmallErrorMessagesInRed("leaveEncashmentListErrorMsgId", statusExceptionMessage + "");
        } else if (data.statuscode === invalidSession) {
            callSessionTimeout();
        } else if (data !== null) {
            displaySuccessMessages("leaveEncashmentListErrorMsgId", deleteMessage);
            setTimeout(function () {
                viewEmployeeListmasterSearchForEmpLeaveEncashment();
            }, 1000);
        } else {
            displaySmallErrorMessagesInRed("leaveEncashmentListErrorMsgId", "Leave Encashment Deletion Failed" + "");
        }
    });
}

//Dsiable the fields after saving

function leaveEnchashmentSave() {

    if (!checkUserPrivelege(pvCreateEmployeeEncashmentMaster)) {
        //////alertPopUpMessage("You are not authorised");
        return;
    }

    var leaveType = $("#leaveType").val();
    var encashmentDate = $("#encashmentDate").val();
    var leaveBalance = $("#leaveBalance").val();
    var cashableLeaves = $("#cashableLeaves").val();
    var leaveToBeEncashed = $("#leaveToBeEncashed").val();
    var totalAmount = $("#totalAmount").val();
    var remarks = $("#remarks").val();

    if (preValidation(leaveType) || preValidation(totalAmount) || preValidation(encashmentDate) || preValidation(leaveToBeEncashed) || preValidation(totalAmount)) {
        displayLargeErrorMessagesInCenterInRed("leaveEncashmentMessageDiv", MandoryFieldMsg);
        return false;
    }
//    if(totalAmount=="")
//    {
//          //////alert("-999---");
//         displayLargeErrorMessagesInCenterInRed("leaveEncashmentMessageDiv", MandoryFieldMsg);
//        return false;
//    }
    else {
        var employeeJsonObject = JSON.parse(decodeURI($("#employeeJsonObject").val()));
        if (!preValidation(employeeJsonObject)) {

            var loginUserId = getUserSessionElement("userId");
            var saveorupdate = $("#saveorupdate").val();

            var objJson = {
                employeeCode: employeeJsonObject.employeeCode,
                employeeCodeM: employeeJsonObject.employeeCodeM,
                employeeId: employeeJsonObject._id.$oid,
                employeeName: employeeJsonObject.employeeName,
                ddo: employeeJsonObject.ddo,
                ddoId: getUserSessionElement(seDDOId),
                location: getUserSessionElement(seLocationId),
                department: employeeJsonObject.department,
                designation: employeeJsonObject.designation,
                postingCity: employeeJsonObject.postingCity,
                natureType: employeeJsonObject.natureType,
                leftStatus: employeeJsonObject.EmployeeLeftStatus,
                leaveType: leaveType,
                encashmentDate: encashmentDate,
                leaveBalance: leaveBalance,
                cashableLeaves: cashableLeaves,
                leaveToBeEncashed: leaveToBeEncashed,
                totalAmount: totalAmount,
                remarks: remarks
            };
            if (saveorupdate === "save") {
                $.get(server_base_url + "leave/LeaveEncashment/Save", {
                    objJson: JSON.stringify(objJson),
                    userid: loginUserId
                }).done(function (data) {
                    if (data.statuscode === fail) {
                        displaySmallErrorMessagesInRed("leaveEncashmentMessageDiv", failMessage + "");
                    } else if (data.statuscode === unauthorized) {
                        displaySmallErrorMessagesInRed("leaveEncashmentMessageDiv", unauthorizedMessage + "");
                    } else if (data.statuscode === statusException) {
                        displaySmallErrorMessagesInRed("leaveEncashmentMessageDiv", statusExceptionMessage + "");
                    } else if (data.statuscode === invalidSession) {
                        callSessionTimeout();
                    } else if (data !== null) {
                        disableDiv("leaveEncashmentMainBody");
                        setTimeout(function () {
                            scrolupfunction();
                            employeeEncashment("dashBoardBodyMainDiv");
                            displaySuccessMessages("leaveEncashmentMessageDiv", successMessage, "");
                        }, 1000);
                        clearSuccessMessageAfterTwoSecond("leaveEncashmentMessageDiv");
                    }
                });
////////alert(employeeJsonObject._id.$oid);
                $.get(server_base_url + "/UpdateRecentEmployeeLeaveTransaction", {
                    employeeid: employeeJsonObject.employeeId,
                    leavetype: leaveType,
                    lveTrsctnObjct: {}
                }).
                        done(function (bdata) {
                        });

            }
        }
    }

}

function getLeaveTypeForLeaveEncashmentBasedOnEc(employeeCategory, gender, empCode) {
    var flag = 0;
    var employeeCategory = employeeCategory;
    // //////alert(empCode);
    // //////alert("/leave/LeaveType/ViewcashableLeaveTypeList")
    $.get(server_base_url + "/leave/LeaveType/ViewcashableLeaveTypeList", {
        employeeCode: empCode
    }).done(function (data) {
        if (data !== null) {
            employeeCategory = employeeCategory.replace(/\s+/g, '').toLowerCase();
            $("#leaveType").text("").append("<option value='' selected >---- Select Leave Type ----</option>");
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    flag = 0;
                    var innerdata = data[i].leaveTypeDetails;
                    for (var j = 0; j < innerdata.length; j++) {
                        if (employeeCategory === innerdata[j].employeeCategory.replace(/\s+/g, '').toLowerCase() &&
                                (data[i].gender.toLowerCase() === "both" || data[i].gender.toLowerCase()
                                        === gender)) {
                            flag = 1;
                        }
                    }
                    if (flag !== 0) {
                        if (leaveTypeName !== undefined && leaveTypeName.toLowerCase() === data[i].leaveType.toLowerCase()) {
                            $("#leaveType").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].leaveType + "</option>");
                        } else {
                            $("#leaveType").append("<option  value='" + data[i]._id.$oid + "'>" + data[i].leaveType + "</option>");
                        }
                    }
                }
            }
        }
    });
}
function updateLeaveEncashmentDetails(obj, id) {
    obj = JSON.parse(decodeURI(obj));
    resetAllValuesInSpecifiedDiv("leaveEncashmentMainBody");
    $("#employeeNamecollg6").text("").append("<input type='text' id='employeeName' class='form-control'  style='width: 100%;' readonly/>");

    $("#employeeCode").val(obj.employeeCode);
    $("#employeeCodeM").val(obj.employeeCodeM);
    $("#employeeName").val(obj.employeeName);
    $("#natureType").val(obj.natureType);
    $("#postingCity").val(obj.postingCity);
    $("#encashmentDate").val(obj.encashmentDate);
    $("#leaveBalance").val(obj.leaveBalance);
    $("#cashableLeaves").val(obj.cashableLeaves);
    $("#leaveToBeEncashed").val(obj.leaveToBeEncashed);
    $("#leaveType").val(obj.leaveType);
    $("#totalAmount").val(obj.totalAmount);
    $("#Id").val(obj._id.$oid);
    $("#remarks").val(obj.remarks);
    $("#saveorupdate").text("").val("").val("update");
    $("#saveUpdateBtnId").text("").text("Update");

    leaveTypeName = obj.leaveTypeName;
    addButtonOnclickFunction("saveUpdateBtnId", "Update", "leaveEnchashmentUpdate('" + obj._id.$oid + "')");
    addButtonOnclickFunction("resetBackBtnId", "Back", "employeeEncashment('" + DashboardMainDivID + "')");
    UpdateEmployeeDataForEmployeeLeaveEncashment(obj.employeeCode, obj.leaveType);
    //
    $("#employeeJsonObject").val(encodeURI(JSON.stringify(obj)));
    //}, 550);
    setTimeout(function () {
        $("#employeeName").val("[" + obj.employeeCode + "]-" + obj.employeeName);
    }, 350);
    setTimeout(function () {
        $("#ddo").val(obj.ddo);
        $("#department").val(obj.department);
        $("#designation").val(obj.designation);
        $("#leftStatus").val(obj.leftStatus);
        // //////alert(JSON.stringify(obj)+"---"+obj.EmployeeLeftStatus);
    }, 350);
    setTimeout(function () {
        $("#totalAmount").val(obj.totalAmount);
        $("#cashableLeaves").val(obj.cashableLeaves);
        $("#leaveBalance").val(obj.leaveBalance);
        $("#encashmentDate").val(obj.encashmentDate);
        $("#leaveToBeEncashed").val(obj.leaveToBeEncashed);
        $("#natureType").val(obj.natureType);
    }, 350);

    $("#leaveEncashmentTable tr").css("background-color", "white");
    $("#leaveEncashmentTable tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");

}
function UpdateEmployeeDataForEmployeeLeaveEncashment(empCode, leaveType) {
    $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
        employeeCode: empCode
    }).done(function (pdata) {
        $("#pregsuccessBefore").text("");
        $('#employeeId').val(pdata[0]._id.$oid);
        $('#name').val(pdata[0].employeeName);
        $('#ddo').val(pdata[0].ddo);
        $('#designation').val(pdata[0].designation);
        $('#department').val(pdata[0].department);
        getLeaveTypeForLeaveEncashmentBasedOnEc(pdata[0].classMaster, pdata[0].gender, empCode);
        //$('#employeeJsonObject').val(encodeURI(JSON.stringify(pdata[0])));
    });
}
function leaveEnchashmentUpdate(id) {

    if (!checkUserPrivelege(pvUpdateEmployeeEncashmentMaster)) {
        //////alertPopUpMessage("You are not authorised");
        return;
    }

    var saveorupdate = $("#saveorupdate").val();
    var employeeJsonObject = JSON.parse(decodeURI($("#employeeJsonObject").val()));
    var leaveType = $("#leaveType").val();
    var encashmentDate = $("#encashmentDate").val();
    var leaveBalance = $("#leaveBalance").val();
    var cashableLeaves = $("#cashableLeaves").val();
    var leaveToBeEncashed = $("#leaveToBeEncashed").val();
    var totalAmount = $("#totalAmount").val();
    var remarks = $("#remarks").val();
    if (preValidation(leaveType) || preValidation(totalAmount) || preValidation(encashmentDate)) {
        displayLargeErrorMessagesInCenterInRed("leaveEncashmentMessageDiv", MandoryFieldMsg);
        return false;
    } else {
        var objJson = {
            employeeCode: employeeJsonObject.employeeCode,
            employeeCodeM: employeeJsonObject.employeeCodeM,
            employeeId: employeeJsonObject.employeeId,
            employeeName: employeeJsonObject.employeeName,
            ddo: employeeJsonObject.ddo,
            department: employeeJsonObject.department,
            designation: employeeJsonObject.designation,
            postingCity: employeeJsonObject.postingCity,
            natureType: employeeJsonObject.natureType,
            leftStatus: employeeJsonObject.leftStatus,
            leaveType: leaveType,
            encashmentDate: encashmentDate,
            leaveBalance: leaveBalance,
            cashableLeaves: cashableLeaves,
            leaveToBeEncashed: leaveToBeEncashed,
            totalAmount: totalAmount,
            remarks: remarks
        };
        ////////alert(id);
        var Id = employeeJsonObject._id.$oid;
        if (saveorupdate === "update") {
            $.get(server_base_url + "leave/LeaveEncashment/Update", {
                objJson: JSON.stringify(objJson),
                Id: id,
                userid: getUserSessionElement("userId")
            }).done(function (data) {
                if (data === fail) {
                    displayErrorMessages("leaveEncashmentMessageDiv", "Invalid username / password", "");
                } else if (data === unauthorized) {
                    displayErrorMessages("leaveEncashmentMessageDiv", unauthorizedMessage, "");
                } else if (data === statusException) {
                    displaySmallErrorMessages("leaveEncashmentMessageDiv", statusExceptionMessage, "");
                } else if (data === invalidSession) {
                    callSessionTimeout();
                } else if (data === null) {
                    displayErrorMessages("leaveEncashmentMessageDiv", "No User available", "");
                } else {
                    disableDiv("leaveEncashmentMainBody");
                    setTimeout(function () {
                        scrolupfunction();
                        employeeEncashment("dashBoardBodyMainDiv");
                        displaySuccessMessages("leaveEncashmentMessageDiv", successMessage, "");
                    }, 1000);
                    clearSuccessMessageAfterTwoSecond("leaveEncashmentMessageDiv");
                }
            });
        }
    }
}