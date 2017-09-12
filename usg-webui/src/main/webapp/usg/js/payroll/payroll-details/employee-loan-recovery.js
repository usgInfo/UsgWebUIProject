/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 * @author Misha
 */
function payrollEmployeeLoanRecoveryMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=payrollEmployeeLoanRecoveryMaster("dashboardBodyMainDiv")>Employee Loan Recovery</a>');

    createFormWithPrivilage(divId, innerDivCF, "Employee Loan/Advance Recovery", FieldGroupForCF, successMsgDivCF, pvCreateLoanRecovery);
    if (checkUserPrivelege(pvCreateLoanRecovery)) {
        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        getLoggedInDDOInDropDown("ddo", "");
        $("#Row0Col2").append(getLabel("Loan/Adv.Type", "required") + "" + getDropDown("loantype"));
        $("#Row0Col2").append("<div id='loanTypeDataDiv'>");
        $("#loanTypeDataDiv").append("<input type='hidden' id='loanTypeData' />");
        $("#loanTypeDataDiv").append("<input type='hidden' id='interestPercentage' />");
        $("#loanTypeDataDiv").append("<input type='hidden' id='applyNumber' />");
        $("#loanTypeDataDiv").append("<input type='hidden' id='finYearFromLoanAllot' />");
        $("#loanTypeDataDiv").append("<input type='hidden' id='currentFinancialYear' />");
        getLoanOrAdvanceType("loantype");
        //$("#ddo").attr("onchange", "getempcodesforloantrans1()");
        $("#loantype").attr("onchange", "getempcodesforloantrans()");

        getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("Employee Code", "required") + "" + getDropDown("empcode"));
        $("#empcode").attr("onchange", "getEmpDemodetailsLR()");
        $("#Row1Col2").append(getLabel_InputWithSpan("Employee Name.", "required", "empname", "", "readonly"));

        getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Designation", "required", "designation", "", "readonly"));
        // $("#Row2Col2").append(getLabel_InputWithSpan("Loan/Adv.Type", "", "loantype", "", "readonly"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Loan Date", "", "loanDate", "", "readonly"));
        getTwoColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel_InputWithSpan("Allotment/Order No.", "", "oredrno", "", "readonly"));
        $("#Row3Col2").append(getLabel_InputWithSpan("Account No", "", "accountNo", "", "readonly "));
        getTwoColumnInRow(FieldGroupForCF, "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel_InputWithSpan("Loan/Adv.Nature", "", "loanNature", "", "readonly"));
        $("#Row4Col2").append(getLabel_InputWithSpan("Loan Amount", "", "loanAmount", "", "readonly"));
        getTwoColumnInRow(FieldGroupForCF, "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel_InputWithSpan("Balance Amount", "", "balanceAmount", "", "readonly"));
        $("#Row5Col2").append(getLabel_InputWithSpan("Ins. Amount", "", "installmentAmount", "", "readonly"));
        getTwoColumnInRow(FieldGroupForCF, "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel("Year", "required") + "" + getDropDown("year"));
        $("#month").append("<option id=''value='0' >---- Select Month ----</option>");
        $("#month").append("<option id=''value='1' >Jan</option><option id=''value='2'>Feb</option><option id=''value='3'>Mar</option><option id=''value='4'>Apr</option>");
        $("#month").append("<option id=''value='5' >May</option><option id=''value='6'>Jun</option><option id=''value='7'>Jul</option><option id=''value='8'>Aug</option>");
        $("#month").append("<option id=''value='9' >Sep</option><option id=''value='10'>Oct</option><option id=''value='11'>Nov</option><option id=''value='12'>Dec</option>");
        $("#Row6Col2").append(getLabel_InputWithSpan("Pre.Recovery", "", "preRecovery", "", "readonly"));
        getTwoColumnInRow(FieldGroupForCF, "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel("Month", "required") + "" + getDropDown("month"));
        //yearList();
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
        }
        $("#currentFinancialYear").val(currentFinancialYear);
        $("#Row7Col2").append(getLabel_InputWithSpan("Dated", "required", "date", "", ""));
        $('#date').datepicker({
            changeYear: true,
            changeMonth: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear
        });
        $("#Row7Col2").append("<div id='loanAllottedDateDiv'>");
        $("#loanAllottedDateDiv").append("<input type='hidden' id='loanAllottedDate' />");
        $("#date").attr("onchange", "validateDateForRecovery()");
//    getYearBetweenSpecifiedYear("", "year", 0, 2, "Year");
        getFinancialYear("month", "year");

        getTwoColumnInRow(FieldGroupForCF, "Row8", "Row8Col1", "Row8Col2");
        $("#Row8Col1").append(getLabel_InputWithSpan("Paid Amount", "required", "paidAmount", "", "onkeypress='return validateNumber(event)'"));
        $("#paidAmount").attr("onchange", "validatePaidAmount()");
        $("#Row8Col2").append(getLabel_InputWithSpan("Remarks", "", "remarks", "", ""));
        //  viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");
        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "EmployeeLoanRecoveryValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "','ddo')");

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });


    }
    if (checkUserPrivelege(pvViewLoanRecovery)) {
        viewFinancialEmployeeLoanRecoveryList("viewFinancialEmployeeLoanRecoveryList");
    }
}
function validateDateForRecovery()
{

    $("#dateErr").text("");
    $("#empcodeErr").text("");
    var empcode = $("#empcode").val();
    if (preValidation(empcode))
    {
        displaySmallErrorMessages("empcodeErr", "Please select employee code .");
        $("#date").val("");
    } else
    {

        //Get applied date from hidden parameter ..
        var loanAllottedDate = $("#loanAllottedDate").val();
        //Read the date selected from the datepicker
        var recoverDate = $("#date").val();
        //alert(loanAllottedDate);
        //alert(recoverDate);
        //Create dummy 2 date isntances
        var demoDate = new Date();
        var demoDate1 = new Date();
        //Split By /(use that regex function which u are using previous..)
        var d = loanAllottedDate.split("/");
        var d1 = recoverDate.split("/");
        //Set the readed date to dummy instances
        demoDate.setDate(d[0]);
        demoDate.setMonth(d[1] - 1);
        demoDate.setYear(d[2]);
        //
        demoDate1.setDate(d1[0]);
        demoDate1.setMonth(d1[1] - 1);
        demoDate1.setYear(d1[2]);

        var totalDays = fetchtotalLeavesAppliedAllot(demoDate, demoDate1) + 1;
        //alert("totalDays"+totalDays);
        if (totalDays < 0 || totalDays == 0) {
            displaySmallErrorMessages("dateErr", "Please select Date Greater than Allotted Date.");
            $("#date").val("");
        }

    }
}
function getempcodesforloantrans()
{
    //alert("loanTypeData");
    $("#ddoErr").text("");
    var ddo = $("#ddo").val();
    if (ddo == "" || ddo == null)
    {
        $("#ddo").focus();
        displaySmallErrorMessagesInRed("ddoErr", "Please select ddo.");
        $("#loantype").val("");
    }
    var loantype = $("#loantype").val();
    var loanTypeData = $("#loanTypeData").val();
    //alert("loanTypeData"+loanTypeData);
    if (loanTypeData != null || loanTypeData != "")
    {
        var data = JSON.parse(loanTypeData);

        for (var j = 0; j < loanTypeData.length; j++)
        {

            //alert(data[j]._id.$oid);

            if (loantype == data[j]._id.$oid)
            {
                // alert(j+"inside");
                loanTypeData = data[j];
                var isRefundable = data[j].isRefundable;
                //alert(isRefundable);
                var isInterestCalculated = data[j].InterestCalculated;
                if (isInterestCalculated == "Yes")
                {
                    var interestPercentage = data[j].interestPercentage;
                    $("#interestPercentage").val(interestPercentage);
                }
                if (isRefundable == "Yes")
                {
                    $("#loannature").val("Refundable");
                } else
                {
                    $("#loannature").val("Non Refundable");
                }
                break;
            }
        }
        validateIsRefundable();
    }
    var scrId = "recovery";
    var currentFinancialYear = $('#currentFinancialYear').val();
    $.get(server_base_url + "Payroll/PayrollDetails/GetEmpCodesforLoanTransaction", {
        ddo: ddo,
        loanType: loantype,
        scrId: scrId,
        currentFinancialYear: currentFinancialYear
    }).done(function (pdata) {
        //alert()
        if (pdata == null || pdata == "" || pdata == 500)
        {
            $("#empcode").text("").append("<option >" + NoDataFound + "</option>");
        } else
        {
            $("#empcode").text("").append("<option id=''value='0' >----[Employee Code]-Employee Name ----</option>");
            for (var i = 0; i < pdata.length; i++) {
                $("#empcode").append("<option value='" + pdata[i].empCode + "'>[" + pdata[i].empCode + "]-" + pdata[i].empName + "</option>");
            }
        }

    });
    getOrderNoInRecovery1(ddo, loantype);
}
function getOrderNoInRecovery1(ddo, loanType)
{
    //alert("pdata111");
    $.get(server_base_url + "Payroll/PayrollDetails/LoanOrder/getOrderNo", {
        ddo: ddo,
        loanType: loanType
    }).done(function (pdata) {
        if (pdata == null || pdata == "" || pdata == 500)
        {

            displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
        } else {

            var obj = JSON.parse(pdata);


            $('#oredrno').val(obj[0].orderNo);
        }
    });


}
function EmployeeLoanRecoveryValidation()
{
    $("#" + successMsgDivCF).text("");
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    var ddo = $('#ddo').val();
    var empcode = $('#empcode').val();
    var month = $('#month').val();
    var year = $('#year').val();
    var paidAmount = $('#paidAmount').val();
    var date = $('#date').val();
    var result = 1;
    var saveorupdate = $("#saveorupdate").val();
    if (preValidation(ddo) || preValidation(empcode) || preValidation(month) || preValidation(year) || preValidation(paidAmount) || preValidation(date)) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        if (paidAmount == "") {
            $("#paidAmount").focus();
            displaySmallErrorMessagesInRed("paidAmountErr", "Please enter paid amount.");
            result = 0;
        } else if (paidAmount != "") {
            if (!paidAmount.match((numbervalidation()))) {
                $("#paidAmount").focus();
                displaySmallErrorMessagesInRed("paidAmountErr", "Please enter valid amount.");
                result = 0;
            }
        }
        if (date == "" || date == null) {
            $("#date").focus();
            displaySmallErrorMessages("dateErr", "Please enter date.");
        }
        if (year == "" || year == null) {
            $("#year").focus();
            displaySmallErrorMessages("yearErr", "Please select  year.");
        }
        if (month == "" || month == null) {
            $("#month").focus();
            displaySmallErrorMessages("monthErr", "Please select  month.");
        }
        if (ddo == "" || ddo == null) {
            $("#ddo").focus();
            displaySmallErrorMessages("ddoErr", "Please Select DDO.");
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveFinancialEmployeeLoanRecoveryDetails();
            } else if (saveorupdate == "update") {
                updateFinancialEmployeeLoanRecoveryDetails();
            }
        }
    }
}
function saveFinancialEmployeeLoanRecoveryDetails()
{
    if (checkUserPrivelege(pvCreateLoanRecovery)) {
        var loanAmount = $('#loanAmount').val();
        var installmentAmount = $('#installmentAmount').val();
        var totalinstallment = parseFloat(loanAmount) / parseFloat(installmentAmount);
        totalinstallment = Math.ceil(totalinstallment);
        var interestPercentage = $('#interestPercentage').val();
        var applyNumber = $('#applyNumber').val();
        var demojson = {
            ddo: $('#ddo').val(),
            empCode: $('#empcode').val(),
            empName: $('#empname').val(),
            designation: $('#designation').val(),
            loanType: $('#loantype').val(),
            loanDate: $('#loanDate').val(),
            orderNo: $('#oredrno').val(),
            accountNo: $('#accountNo').val(),
            loanNature: $('#loanNature').val(),
            loanAmount: parseFloat(loanAmount),
            balanceAmount: parseFloat($('#balanceAmount').val()),
            installmentAmount: parseFloat(installmentAmount),
            month: $('#month').val(),
            preRecovery: $('#preRecovery').val(),
            year: $('#year').val(),
            date: $('#date').val(),
            paidAmount: parseFloat($('#paidAmount').val()),
            remarks: $('#remarks').val(),
            totalInstallment: parseFloat(totalinstallment),
            sanctionedAmount: parseFloat(loanAmount),
            interestPercentage: parseFloat(interestPercentage),
            applyNo: applyNumber,
            financialYear: $('#finYearFromLoanAllot').val()
        };
        $.post(server_base_url + "Payroll/PayrollDetails/LoanRecovery/Save", {
            demojson: JSON.stringify(demojson),
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            //alert(data);
            if (data == exist || data == existMessage) {
                scrolupfunction();
                //alert(salaryProcessedMessage)
                displaySuccessMessages(successMsgDivCF, salaryProcessedMessage, "");
                setTimeout(function () {
                    payrollEmployeeLoanRecoveryMaster("dashBoardBodyMainDiv");
                }, 1500);

            } else {
                scrolupfunction();
                displaySuccessMessages(successMsgDivCF, successMessage, "");
                setTimeout(function () {
                    payrollEmployeeLoanRecoveryMaster("dashBoardBodyMainDiv");
                }, 1500);
            }
        });
    } else {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, privilageNotExist);
    }
}
function  saveOrUpdateCommonFunctionInEmployeeLoanRecovery(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        setTimeout(function () {
            //scrolupfunction();
            //alert("data"+data);
            var successmessagetobedisplayed = successMessage;
            if ($("#saveorupdate").val() == "update" || $("#saveorupdate").val() == "Update") {
                successmessagetobedisplayed = updateMessage;
            }
            payrollEmployeeLoanRecoveryMaster("dashBoardBodyMainDiv");
            if (data == "success")
            {
                displaySuccessMessages(successMsgDivCF, successmessagetobedisplayed, "");
            } else
            {
                displayErrorMessages(successMsgDivCF, salaryProcessedMessage, "");
            }
        }, 1000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function viewFinancialEmployeeLoanRecoveryList(divId) {
    if (checkUserPrivelege(pvViewLoanRecovery)) {
        var columsName = ["Appy No", "Loan/Adv.Nature", "Month", "Year", "Dated", "Loan Amount", "Paid Amount"];
        createTableWithEditDeletePrivilage(innerDivCF, "List of Employee Loan/Advance Recovery Details", divId, MsgDivInTableCF, columsName, pvUpdateLoanRecovery, pvDeleteLoanRecovery);
        $.get(server_base_url + "Payroll/payrollDetails/LoanRecovery/View", {
            ddo: getUserSessionElement(seDDOId)
        }).done(function (bdata) {

            // alert(bdata);

            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        var divIdBody = divId + "body";
                        $("#" + divId).append("<tbody id='" + divIdBody + "' class='table-striped table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var obj = JSON.stringify(bdata[i]);
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].applyNo + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].loanNature + "</td>"
                                    + "<td style='cursor:pointer;'>" + monthNames[bdata[i].month] + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].year + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].date + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].loanAmount + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].paidAmount + "</td>");
//                                + "<td style='cursor:pointer;'>" + bdata[i].balanceAmount + "</td>"
                            if (checkUserPrivelege(pvUpdateLoanRecovery)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatefinancialEmployeeLoanRecovery('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteLoanRecovery)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletefinancialEmployeeLoanRecovery','viewFinancialEmployeeLoanRecoveryList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                            }
                            $("#" + bdata[i]._id.$oid).append("</tr>");
                        }
                        $('#' + divId).append("</table>");
                        $('#' + divId).dataTable();
                    }
                }
            }
        });
    }
}
function updatefinancialEmployeeLoanRecovery(obj) {
    if (checkUserPrivelege(pvUpdateLoanRecovery)) {
        obj = JSON.parse(decodeURI(obj));
        var balanceAmount = 0.0;
        var previousBalanceAmount = obj.balanceAmount;
        balanceAmount = parseFloat(previousBalanceAmount) + parseFloat(obj.paidAmount);

        $("#ddo option:contains(" + obj.ddo + ")").attr('selected', 'selected');
        $("#Row1Col1").text("").append(getLabel("Employee Code", "") + "<input type='hidden' id='empcode' value='" + obj.empCode + "'><h6><strong>" + obj.empCode + "</strong></h6>")
//    $('#empcode').val(obj.empcode);
        $('#empname').val(obj.empName);
        $("#viewFinancialEmployeeLoanRecoveryListbody tr").css("background-color", "white");
        $("#viewFinancialEmployeeLoanRecoveryListbody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
        $('#designation').val(obj.designation);
        $('#loantype').val(obj.loanType);
        $('#loanDate').val(obj.loanDate);
        $('#oredrno').val(obj.orderNo);
        $('#accountNo').val(obj.accountNo);
        $('#loanNature').val(obj.loanNature);
        $('#loanAmount').val(obj.loanAmount);

        $('#balanceAmount').val(balanceAmount);
        $('#installmentAmount').val(obj.installmentAmount);
        $('#month').val(obj.month);
        $('#preRecovery').val(obj.preRecovery);
        $('#year').val(obj.year);
        $('#date').val(obj.date);
        $('#paidAmount').val(obj.paidAmount);
        $('#remarks').val(obj.remarks);
        $("#Id").val(obj._id.$oid);
        $("#applyNumber").val(obj.applyNo);
        $("#saveorupdate").val("update");
        $("#saveUpdateBtnId").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "payrollEmployeeLoanRecoveryMaster('" + DashboardMainDivID + "')");
        setTimeout(function () {
            $('#ddo').attr('disabled', true);
            $('#loantype').attr('disabled', true);
        }, 1000);
    }
}
function updateFinancialEmployeeLoanRecoveryDetails() {
    if (checkUserPrivelege(pvUpdateLoanRecovery)) {
        var Id = $("#Id").val();
        var loanAmount = $('#loanAmount').val();
        var installmentAmount = $('#installmentAmount').val();
        var totalinstallment = parseFloat(loanAmount) / parseFloat(installmentAmount);
        totalinstallment = Math.ceil(totalinstallment);
        var interestPercentage = $('#interestPercentage').val();
        var applyNumber = $('#applyNumber').val();
        var obj = {
            ddo: $('#ddo').val(),
            empCode: $('#empcode').val(),
            empName: $('#empname').val(),
            designation: $('#designation').val(),
            loanType: $('#loantype').val(),
            loanDate: $('#loanDate').val(),
            orderNo: $('#oredrno').val(),
            accountNo: $('#accountNo').val(),
            loanNature: $('#loanNature').val(),
            loanAmount: parseFloat($('#loanAmount').val()),
            balanceAmount: parseFloat($('#balanceAmount').val()),
            installmentAmount: parseFloat($('#installmentAmount').val()),
            month: $('#month').val(),
            preRecovery: $('#preRecovery').val(),
            year: $('#year').val(),
            date: $('#date').val(),
            paidAmount: parseFloat($('#paidAmount').val()),
            remarks: $('#remarks').val(),
            totalInstallment: parseFloat(totalinstallment),
            sanctionedAmount: parseFloat(loanAmount),
            interestPercentage: parseFloat(interestPercentage),
            applyNo: applyNumber
        };
        $.post(server_base_url + "Payroll/PayrollDetails/LoanRecovery/Update", {
            demojson: JSON.stringify(obj),
            id: Id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            saveOrUpdateCommonFunctionInEmployeeLoanRecovery(data);
        });
    } else {
        displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, privilageNotExist);
    }
}
function deletefinancialEmployeeLoanRecovery(Id)
{
    if (checkUserPrivelege(pvDeleteLoanRecovery)) {
        $.post(server_base_url + "Payroll/payrollDetails/LoanRecovery/Delete", {
            id: Id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                payrollEmployeeLoanRecoveryMaster(DashboardMainDivID);
                displaySuccessMessages(successMsgDivCF, deleteMessage, "");
            }
        });
    } else {
        displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, privilageNotExist);
    }
}
function loadEmpcodeSearchFunctionalityforLR() {
    var ddo = $("#ddo").val();
    $.get(server_base_url + "hrms/EmployeeMaster/GetEmpcode", {
        ddo: ddo
    }).done(function (pdata) {
        $("#empCode").text("").append("<option value = '' selected disabled>---- Select Employee Code ----</option>");
        for (var i = 0; i < pdata.length; i++)
        {
            $("#empCode").append("<option  value='" + pdata[i].employeeCode + "'>" + pdata[i].employeeCode + "</option>");
        }
    });
}
function getPresentLoanForRecovery(ddo, empcode, loantype) {


    $.get(server_base_url + "Payroll/PayrollDetails/GetEmpCurrentLoanDetails", {
        ddo: ddo,
        empcode: empcode,
        loantype: loantype
    }).done(function (pdata)
    {
        // alert("pdata"+pdata);
        var data = JSON.parse(pdata);
        var applyNumber = data.applyNo;
        var loandate = data.dated;
        //alert(loandate);
        $('#finYearFromLoanAllot').val(data.financialYear);
        $("#applyNumber").val(applyNumber);
        $("#loanDate").val(loandate);
        getEMPLoanRecoveryDetails(ddo, empcode, loantype)

    });


}
function getEmpDemodetailsLR() {
    var ddo = $("#ddo").val();
    var ecode = $("#empcode").val();
    var loantype = $("#loantype").val();
    $("#empcodeErr").text("");
    // getLoanallotLR(ecode,loantype);

    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function (pdata) {
        //alert(pdata);
        //  pdata = JSON.stringify(pdata);
        //var obj = JSON.parse(pdata);
        //alert(obj);
        for (var i = 0; i < pdata.length; i++) {
            var code = pdata[i].employeeCode;
            if (ecode == code)
            {
                $('#empname').val(pdata[i].employeeName);
                $('#designation').val(pdata[i].designation);
                $('#accountNo').val(pdata[i].acnumber);
            }
        }
        getPresentLoanForRecovery(ddo, ecode, loantype);
    });



}
function  getEMPLoanRecoveryDetails(ddo, empCode, loantype)
{
    var applyNo = $('#applyNumber').val();
    var ddo = $("#ddo").val();
    var ecode = $("#empcode").val();
    var loantype = $("#loantype").val();
    //alert("-------"+ddo+"------"+empCode+"-------"+loantype+"-------"+applyNo);
    $.get(server_base_url + "Payroll/PayrollDetails/LoanPaymentTransDetails/View", {
        ddo: ddo,
        ecode: empCode,
        loanType: loantype,
        applyNo: applyNo
    }).done(function (bdata) {
        //alert("bdata111"+bdata);
        if (bdata != "" || bdata != "500" || bdata != undefined)
        {
            //  alert(bdata);
            var obj = JSON.parse(bdata);
            //alert(bdata);
            $('#preRecovery').val(obj.paidAmount);
            $('#oredrno').val(obj.orderNo);
            $('#loanNature').val(obj.loannature);
            $('#loanAmount').val(obj.loanAmount);
            $('#installmentAmount').val(obj.instalmentAmount);
            $('#loanAllottedDate').val(obj.allotedDate);
            $('#balanceAmount').val(obj.balanceAmount);
        }
    });
}
function getBlanaceAmount(ecode, loanType, applyNo)
{
    $.post(server_base_url + "Payroll/PayrollDetails/GetLoanPymentDetailsService/View", {
        ecode: ecode,
        loanType: loanType,
        applyNo: applyNo
    }).done(function (data) {
        var obj = JSON.parse(data);
        obj = JSON.parse(obj);
        $('#balanceAmount').val(obj.Value);
    });


}
function validatePaidAmount()
{
    $("#paidAmountErr").text("");
    var balAmount = $('#balanceAmount').val();
    var paidAmount = $('#paidAmount').val();
    if (parseFloat(paidAmount) > parseFloat(balAmount))
    {
        displaySmallErrorMessages("paidAmountErr", "Please enter paid amount less than balance amount .");
        $("#paidAmount").val("");
    }
}

function validateIsRefundable()
{

    var loannature = $('#loannature').val();
    var elem = document.getElementById("Row6Col1");
    var elem1 = document.getElementById("Row6Col2");
    //alert(elem);
    if (loannature == "Non Refundable")
    {
        //alert("inside");

        elem.remove();
        elem1.remove();
        //alert("removed");
    } else if (loannature == "Refundable")
    {
        if (elem == null || elem == "")
        {
            $("#Row6").append("<div id ='Row6Col1' class='form-group col-md-6'/>");
            $("#Row6").append("<div id ='Row6Col2' class=' col-md-6 form-group'/>");
            $("#Row6Col1").append(getLabel_InputWithSpan("Installment  Amount", "required", "installmentAmount", "", "readonly"));
            $("#Row6Col2").append(getLabel_InputWithSpan("Total Installment", "required", "totalinstallment", "", "onkeypress='return validateNumber(event)'"));
        }
    }
}
