/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */

function getApplyNumber(divId) {

    var applyNumbervalue = "";
    $.post(server_base_url + "Payroll/PayrollDetails/LoanApply/GetApplyNumber", {
    }).done(function(data) {
        // alert(data);
        var obj = JSON.parse(data);
        var val = obj[0].applyNo;
        //alert(val);
        applyNumbervalue = applyNumbervalue + val;
        $("#applyno").val(applyNumbervalue);
        // $("#parr").append(applyNumbervalue);
    });

}
var existMessage = "Already Existed";
function payrollLoanApplyMaster(divId) {
    getApplyNumber()
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=payrollLoanApplyMaster("dashboardBodyMainDiv")>Loan Apply Master</a>');

    createFormWithPrivilage(divId, innerDivCF, "Loan Apply", FieldGroupForCF, successMsgDivCF, pvCreateLoanApply);
    if (checkUserPrivelege(pvCreateLoanApply)) {
        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        getLoggedInDDOInDropDown("ddo", "");
        $("#Row0Col2").append(getLabel_InputWithSpan("Apply Number", "required", "applyno", "", "readonly"));

        getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("Employee Code", "required") + "" + getDropDown("employeeCode"));
        $("#Row1Col2").append(getLabel_InputWithSpan("Employee Name", "required", "employeeName", "", "readonly"));

        getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append('<input type="hidden" id="empData">');
        $("#Row2Col1").append("<input type='hidden' id='fromFinancialYear'/>");
        $("#Row2Col1").append("<input type='hidden' id='currentFinancialYear'/>");
        var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
        var toFinacialYear = null;
        if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
        {
            var finyearArray = currentFinancialYear.split("~");
        }
        if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
        {
            var fromFinacialYear = finyearArray[0];
            var toFinacialYear = finyearArray[1];

            $("#fromFinancialYear").val(fromFinacialYear);

        }
        $("#currentFinancialYear").val(currentFinancialYear);
        $("#Row2Col1").append(getLabel_InputWithSpan("Department", "required", "department", "", "readonly"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Designation", "required", "designation", "", "readonly"));

        getTwoColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel_InputWithSpan("PF Type", "required", "pfType", "", "readonly"));
        $("#Row3Col2").append(getLabel("Loan/Advance Type", "required") + "" + getDropDown("loanOrAdvanceType"));
//    $("#Row3Col2").append("<div id='loanTypeDataDiv'");
//    $("#loanTypeDataDiv").append("<input type='hidden' id='loanTypeData'/ >");
        getTwoColumnInRow(FieldGroupForCF, "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel_InputWithSpan("Dated", "required", "dated", "", ""));
        $("#Row4Col2").append(getLabel_InputWithSpan("Amount", "required", "amount", "", "onkeypress='return validateNumber(event)'"));
        //$("#dated").datepicker();
//    $("#dated").datepicker({
//        format: "dd/mm/yyyy",
//        maxDate: '+0D',
//        autoclose: true
//    });
        //alert(fromFinacialYear);
        $('#dated').datepicker({
            changeYear: true,
            changeMonth: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear
        });

        getLabelTextareaFullRow(FieldGroupForCF, "Remarks", "", "Row5", "Row5Col1", "remarks");
        getEmployeeDateInLAUsingEmp();
        //$("#ddo").attr("onchange", "getEmployeeDateInLAUsingEmp()");
        $("#employeeCode").attr("onchange", "setEmployeeDetailsInLA()");
        getLoanOrAdvanceType("loanOrAdvanceType");
        //  viewOption("Payroll/PayrollDetails/LoanApply/GetSalryheadsbasedOndeductionTypeService", "", "shortDescription", "loanOrAdvanceType", "Loan Type");
        // viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");

        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "LoanApplyValidation()", "Reset", "resetBackBtnId", "resetData()");
        if (checkUserPrivelege(pvViewLoanApply)) {
            viewFinancialLoanApplyList("viewFinancialLoanApplyList");
        }
        $("input").on("keypress", function(e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        
        $("textarea").on("keypress", function(e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    }

}
function loadEmpcodeSearchFunctionality() {
    var ddo = $("#ddo").val();
    $("#ddoErr").text("");
    $.get(server_base_url + "hrms/EmployeeMaster/GetEmpcode", {
        ddo: ddo
    }).done(function(pdata) {

        var availablecodes = [];
        for (var i = 0; i < pdata.length; i++)
        {
            availablecodes.push(pdata[i].employeeCode);
        }
        $("#employeeCode").autocomplete({
            source: availablecodes
        });
    });

}

function getEmployeeDateInLAUsingEmp() {
//    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
//    var toFinacialYear = null;
//    //alert(currentFinancialYear);
//    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
//    {
//        var finyearArray = currentFinancialYear.split("~");
//    }
//    if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
//    {
//        var fromFinacialYear = finyearArray[0];
//        var toFinacialYear = finyearArray[1];
//
//    }
    //alert(toFinacialYear);
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];
    var ddo = $("#ddo").val();
    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: ddo,
        fromDt: fromDate,
        toDate: toDate,
        location: getUserSessionElement(seLocationId)
    }).done(function(data) {
        data = JSON.parse(data);
        if (data != null) {
            if (data == null || data == "" || data == 500 || data == 501)
            {
                $("#employeeCode").text("").append("<option >----No Data Available----</option>");
            } else {
                $("#employeeCode").text("").append("<option value = '' selected disabled>----Select Employee Code ----</option>");
                for (var i = 0; i < data.length; i++)
                {
                    $("#employeeCode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
                }
            }
        }
    });
}
function getLoanOrAdvanceType(id, screenId) {
    // alert("ffff");
    $.get(server_base_url + "Payroll/PayrollDetails/LoanApply/GetSalryheadsbasedOndeductionTypeService", {
        id: screenId
    }).done(function(data) {
        if (data != null) {
            $("#loanTypeData").val(data);
            data = JSON.parse(data);


            $("#" + id).text("").append("<option value = '' selected disabled>---- Select Loan/Adv Type ----</option>");
            if (data == null || data == "" || data == 500)
            {
                $("#" + id).text("").append("<option >" + NoDataFound + "</option>");
            } else {
                for (var i = 0; i < data.length; i++)
                {
                    $("#" + id).append("<option  value='" + data[i]._id.$oid + "'>" + data[i].shortDescription + "" + "</option>");
                }
            }
        }
    });
}
function setEmployeeDetailsInLA() {
    var ddo = $("#ddo").val();
    $("#ddoErr").text("");
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
            // alert(data);
            data = data[0];
            $("#department").val(data.department);
            $("#designation").val(data.designation);
            $("#employeeName").val(data.employeeName);
            $("#pfType").val(data.pfType);
        });
    }
}
function preValidation(val) {
    if (val == "" || val == undefined || val == null || val == "undefined")
        return true;
    return false;
}
function LoanApplyValidation()
{
    $("#" + successMsgDivCF).text("");
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    var saveorupdate = $("#saveorupdate").val();
    var applyno = $("#applyno").val();
    var amount = $("#amount").val();
    var date = $("#dated").val();
    var employeeCode = $("#employeeCode").val();
    var ddo = $("#ddo").val();
    var result = 1;
    var loantype = $('#loanOrAdvanceType').val();
    if (preValidation(loantype) || preValidation(ddo) || preValidation(employeeCode) || preValidation(date) || preValidation(amount) || preValidation(applyno)) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        if (amount == "" || amount == null) {
            $("#amount").focus();
            displaySmallErrorMessagesInRed("amountErr", "Please enter amount.");
            result = 0;
        } else if (amount != "") {
            if (!amount.match((numbervalidation()))) {
                $("#amount").focus();
                displaySmallErrorMessagesInRed("amountErr", "Please enter valid amount");
                result = 0;
            }
        }
        if (date == "" || date == null) {
            $("#date").focus();
            displaySmallErrorMessagesInRed("dateErr", "Please enter date.");
            result = 0;
        } else if (date != "") {
        }
        if (loantype == "" || loantype == null) {
            $("#loantype").focus();
            displaySmallErrorMessagesInRed("loantypeErr", "Please select loan type.");
            result = 0;
        }
        if (ddo == "" || ddo == null) {
            $("#ddo").focus();
            displaySmallErrorMessagesInRed("ddoErr", "Please select ddo.");
            result = 0;
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveFinancialLoanApplyDetails();
            } else if (saveorupdate == "update") {
                updateFinancialLoanApplyDetails();
            }
        }
    }
}
function saveFinancialLoanApplyDetails() {
    if (checkUserPrivelege(pvCreateLoanApply)) {
        var applyno = $("#applyno").val();
        var amount = $("#amount").val();
        var date = $("#dated").val();
        var employeeCode = $("#employeeCode").val();
        var employeeName = $("#employeeName").val();
        var department = $("#department").val();
        var designation = $("#designation").val();
        var pftype = $("#pfType").val();
        var ddo = $("#ddo").val();
        var loantype = $('#loanOrAdvanceType').val();
        var remarks = $('#remarks').val();
        var currentFinancialYear = $('#currentFinancialYear').val();
        var obj = {
            empCode: employeeCode,
            ddo: ddo,
            empName: employeeName,
            department: department,
            designation: designation,
            applyNo: applyno,
            pfType: pftype,
            loanType: loantype,
            dated: date,
            amount: amount,
            remarks: remarks
        };
        $.post(server_base_url + "payroll/PayrollDetails/LoanApply/Save", {
            demojson: JSON.stringify(obj),
            userid: getUserSessionElement("userId"),
            currentFinancialYear: currentFinancialYear
        }).done(function(data) {
            if (data == "existed") {
                displayErrorMessages(successMsgDivCF, existed, "");
                setTimeout(function() {
                    scrolupfunction();
                    payrollLoanApplyMaster("dashBoardBodyMainDiv");

                }, 3000);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
                return false;
            }
            saveOrUpdateCommonFunctionInLoanApply(data);
        });
    }
}
function  saveOrUpdateCommonFunctionInLoanApply(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        displaySuccessMessages(successMsgDivCF, successMessage, "");
        setTimeout(function() {
            scrolupfunction();
            payrollLoanApplyMaster("dashBoardBodyMainDiv");

        }, 3000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function viewFinancialLoanApplyList(divId) {
    if (checkUserPrivelege(pvViewLoanApply)) {
        var columsName = ["Name", "Loan Apply", "Apply No", "Dated", "Amount"];
        var nonEditableGroups = ["Branch", "Division", "Capital Account", "Current Assets", "Current Liabilities", "Direct Expenses", "Direct Incomes", "Fixed Assets", "Indirect Expenses", "Indirect Incomes", "Investments", "Loans", "Liability", "Misc.Expenses", "Purchase Accounts", "Sales Accounts", "Suspense A/c"]
        createTableWithEditDeletePrivilage(innerDivCF, "List of Employee Applied For Loan", divId, MsgDivInTableCF, columsName, pvUpdateLoanApply, pvDeleteLoanApply);
        $.get(server_base_url + "Payroll/PayrollDetails/LoanApply/View", {
            ddo: getUserSessionElement(seDDOId)
        }).done(function(bdata) {
            if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        var divIdBody = divId + "body";
                        $("#" + divId).append("<tbody id='" + divIdBody + "' class='tabel table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var obj = JSON.stringify(bdata[i]);
                            var isAllotted = bdata[i].isAllotted
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].empName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].loanType + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].applyNo + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].dated + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].amount + "</td>");
                            if (isAllotted == "True")
                            {
                                if (checkUserPrivelege(pvUpdateLoanApply))
                                    $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=alertPopUp('payrollLoanApplyMaster','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                                if (checkUserPrivelege(pvDeleteLoanApply))
                                    $("#" + bdata[i]._id.$oid).append("<td onclick=alertPopUp('payrollLoanApplyMaster','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");

                            } else
                            {
                                if (checkUserPrivelege(pvUpdateLoanApply))
                                    $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatefinancialLoanApply('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                                if (checkUserPrivelege(pvDeleteLoanApply))
                                    $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletefinancialLoanApply','viewFinancialLoanApplyList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                            }
                        }
                        $('#' + divId).append("</table>");
                        $('#' + divId).dataTable();
                    }
                }
            }
        });
    }
}
function resetData()
{


    $("#employeeName").val("");
    $("#employeeCode").val("");
    $("#department").val("");
    $("#designation").val("");
    $("#amount").val("");
    $("#pfType").val("");
    $("#dated").val("");
    $("#remarks").val("");
    $("#loanOrAdvanceType").val("");
    $("#employeeNameErr").text("");
    $("#employeeCodeErr").text("");
    $("#departmentErr").text("");
    $("#designationErr").text("");
    $("#datedErr").text("");
    $("#pfTypeErr").text("");
    $("#amountErr").text("");
    $("#remarksErr").text("");
    $("#successMsgDivBeforeDivCF").text("");
    $("#pregsuccessBefore").text("");

}
function updatefinancialLoanApply(obj) {
    if (checkUserPrivelege(pvUpdateLoanApply)) {
        obj = JSON.parse(decodeURI(obj));
        $("#viewFinancialLoanApplyListbody tr").css("background-color", "white");
        $("#viewFinancialLoanApplyListbody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#ddo").val("");
        $("#employeeName").val("");
        $("#employeeCode").val("");
        $("#department").val("");
        $("#designation").val("");
        $("#amount").val("");
        $("#pfType").val("");
        $("#dated").val("");
        $("#remarks").val("");
        $("#loanOrAdvanceType").val("");
        $("#employeeNameErr").text("");
        $("#employeeCodeErr").text("");
        $("#departmentErr").text("");
        $("#designationErr").text("");
        $("#datedErr").text("");
        $("#pfTypeErr").text("");
        $("#amountErr").text("");
        $("#remarksErr").text("");
        $("#successMsgDivBeforeDivCF").text("");
        $("#pregsuccessBefore").text("");


        $("#ddo").val(obj.ddo);
        getEmployeeDateInQTUsingEmp(obj.ddo);
        $("#Row1Col1").text("").append(getLabel("Employee Code", "") + "<input type='hidden' id='employeeCode' value='" + obj.empCode + "'><h6><strong>" + obj.empCode + "</strong></h6>")
        $("#employeeName").val(obj.empName);
        $("#employeeCode").val(obj.empCode);
        $("#department").val(obj.department);
        $("#designation").val(obj.designation);
        $("#applyno").val(obj.applyNo);
        $("#amount").val(obj.amount);
        $("#dated").val(obj.dated);
        $("#pfType").val(obj.pfType);
        $("#remarks").val(obj.remarks);
        //alert(obj.ddo);
        $("#ddo option:contains('" + obj.ddo + "')").attr("selected", "selected");
        $("#loanOrAdvanceType").val(obj.loanType);
        $("#loanOrAdvanceType option:contains('" + obj.loanType + "')").attr("selected", "selected");
        $("#empData").val(encryptBase64String(encodeURI(JSON.stringify(obj))));
        $("#Id").val(obj._id.$oid);
        $("#saveorupdate").val("update");
        $("#saveUpdateBtnId").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "payrollLoanApplyMaster('" + DashboardMainDivID + "')");
        setTimeout(function() {
            $('#ddo').attr('disabled', true);
        }, 1000);
    }
}
function updateFinancialLoanApplyDetails() {
    if (checkUserPrivelege(pvUpdateLoanApply)) {
        var empData = JSON.parse(decodeURI(decryptBase64String($("#empData").val())));
        var id = $("#Id").val();
        var applyno = $("#applyno").val();
        var amount = $("#amount").val();
        var dated = $("#dated").val();
        var ddo = $("#ddo").val();
        var loantype = $('#loanOrAdvanceType').val();
        var remarks = $('#remarks').val();
        //alert(id);
        var obj = {
            empCode: empData.empCode,
            ddo: empData.ddo,
            empName: empData.empName,
            department: empData.department,
            designation: empData.designation,
            applyNo: applyno,
            pfType: empData.pfType,
            loanType: loantype,
            dated: dated,
            amount: amount,
            remarks: remarks
        };
        $.post(server_base_url + "Payroll/PayrollDetails/LoanApply/Update", {
            demojson: JSON.stringify(obj),
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function(data) {
            saveOrUpdateCommonFunctionInLoanApply(data);
        });
    } else {
        displaySmallErrorMessagesInRed(successMsgDivCF, privilageNotExist);
    }
}
function deletefinancialLoanApply(id) {
    if (checkUserPrivelege(pvDeleteLoanApply)) {
        $.post(server_base_url + "Payroll/PayrollDetails/LoanApply/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function(data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                payrollLoanApplyMaster(DashboardMainDivID);
                displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
            }
        });
    } else {
        displaySmallErrorMessagesInRed(successMsgDivCF, privilageNotExist);
    }
}
//function getEmpDemodetails()
//{
//    var ecode = $("#empcode").val();
//    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
//        ecode: ecode
//    }).done(function(pdata) {
//
//        if (pdata == null || pdata == "" || pdata == 500)
//        {
//            displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
//        }
//
//        else {
//
//            $('#empname').val(pdata[0].employeeName);
//            $('#dept').val(pdata[0].department);
//            $('#designa').val(pdata[0].designation);
//            $('#pfty').val(pdata[0].pfType);
//        }
//
//    });
//}


