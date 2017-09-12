/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function payrollEmployeeLoanTransactionMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=payrollEmployeeLoanTransactionMaster("dashboardBodyMainDiv")>Employee Loan Transaction</a>');

    createFormWithPrivilage(divId, innerDivCF, "Employee Loan/Advance Transaction", FieldGroupForCF, successMsgDivCF, pvCreateLoanTransaction);
    if (checkUserPrivelege(pvCreateLoanTransaction)) {
        $("#" + innerDivCF).append('<div id="loanTransDiv"  />');
        $("#" + innerDivCF).append('<div id="loanInterstDiv"  />');
        $("#" + innerDivCF).append('<div id="loanSupressDiv"  />');
        $("#" + innerDivCF).append('<div id="saveButtonDiv"  />');

        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        getLoggedInDDOInDropDown("ddo", "");
        $("#Row0Col2").append(getLabel("Loan/Adv.Type", "required") + "" + getDropDown("loantype"));
        $("#loantype").attr("onchange", "getLoanNatureForloantransactions()");
        $("#Row0Col2").append("<div id='loanTypeDataDiv'>");
        getLoanOrAdvanceType("loantype");
        $("#loanTypeDataDiv").append("<input type='hidden' id='loanTypeData' />");
        $("#loanTypeDataDiv").append("<input type='hidden' id='applyNumber' />");
        $("#loanTypeDataDiv").append("<input type='hidden' id='suppressYear' />");
        $("#loanTypeDataDiv").append("<input type='hidden' id='allottedDate' />");
        $("#loanTypeDataDiv").append("<input type='hidden' id='currentFinancialYear' />");
        // $("#ddo").attr("onchange", "getLoanTransactionempcodes()");
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
        getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("Financial Year", "") + "" + getDropDown("financialYear"));
        $("#Row1Col2").append(getLabel("Employee Code", "required") + "" + getDropDown("empcode"));


        $("#empcode").attr("onchange", "getEmpDemodetailsTR()");
        $("#financialYear").attr("onchange", "clearEmpCode()");


        getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Employee Name", "required", "empname", "", "readonly"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Department", "required", "department", "", "readonly"));


        getTwoColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel_InputWithSpan("Designation", "required", "designation", "", "readonly"));
        $("#Row3Col2").append(getLabel_InputWithSpan("Allotment/Order No.", "required", "oredrno", "", "readonly"));
        //$("#Row3Col1").append(getLabel_InputWithSpan("Loan/Adv.Type", "required", "loantype", "", "readonly"));






        getTwoColumnInRow(FieldGroupForCF, "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel_InputWithSpan("Loan/Adv.Nature", "required", "loannature", "", "readonly"));
        $("#Row4Col2").append(getLabel_InputWithSpan("Account Number", "", "accountNo", "", "readonly"));



        getTwoColumnInRow(FieldGroupForCF, "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel_InputWithSpan("Dated", "required", "dated", "", "onkeypress='return false'"));
        $('#dated').datepicker({
            changeYear: true,
            changeMonth: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear
        });
        $("#dated").attr("onchange", "validateTransDate()");
        $("#Row5Col2").append(getLabel("Loan From City", "required") + "" + getDropDown("city"));
        // $("#Row5Col1").append(getLabel_InputWithSpan("Loan From City", "required", "city", "", "onkeypress='return validatealphanumeric(event)'"));

        // viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");
        fetchAllfinancialYearValues("", "financialYear", "Financial Year");
        getThreeColumnInRow(FieldGroupForCF, "Row6", "Row6Col1", "Row6Col2", "Row6Col3");

        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "EmployeeLoanTransactionValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "','ddo')");
  
     $("input").on("keypress", function(e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        
        $("textarea").on("keypress", function(e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    
    
    }

    viewFinancialEmployeeLoanAllotmentList("viewFinancialEmployeeLoanAllotmentList");
    viewCityForOption("city", "city");
    //viewEmployeeLoanTransatnList();
    // viewEmpInterstDetails(" viewEmpInterstDetails(obj);");
}
function clearEmpCode()
{
    $("#empcode").val("0");
    $("#loanTransDiv").text("");
    $("#loanInterstDiv").text("");
    getEmpoyeeCodeBasedOnFinYear();

}
function validateTransDate()
{

    $("#datedErr").text("");
    var empcode = $("#empcode").val();
    if (preValidation(empcode))
    {
        displaySmallErrorMessages("empcodeErr", "Please select employee code .");
        $("#dated").val("");
    } else
    {

        // var applydateDate = $("#loanApplyDate").val();
        //Get applied date from hidden parameter ..
        var applydateDate = $("#allottedDate").val();
        //Read the date selected from the datepicker
        var allotDate = $("#dated").val();

        //Create dummy 2 date isntances
        var demoDate = new Date();
        var demoDate1 = new Date();
        //Split By /(use that regex function which u are using previous..)
        var d = applydateDate.split("/");
        var d1 = allotDate.split("/");
        //Set the readed date to dummy instances
        demoDate.setDate(d[0]);
        demoDate.setMonth(d[1] - 1);
        demoDate.setYear(d[2]);
        $("#suppressYear").val(d1[2]);
        demoDate1.setDate(d1[0]);
        demoDate1.setMonth(d1[1] - 1);
        demoDate1.setYear(d1[2]);
        var totalDays = fetchtotalLeavesAppliedAllot(demoDate, demoDate1) + 1;
        //  alert(totalDays);
        if (totalDays < 0 || totalDays == 0) {
            displaySmallErrorMessages("datedErr", "Please select Date Greater than Allotted Date.");
            $("#dated").val("");
        }

    }
}
function getPresentLoan(ddo, empcode, loantype) {


//      $.get(server_base_url + "Payroll/PayrollDetails/GetEmpCurrentLoanDetails", {
//        ddo: ddo,
//        empcode: empcode,
//        loantype: loantype
//    }).done(function (pdata) 
//    { 
//        alert(pdata);
//        var data = JSON.parse(pdata);
//        var applyNumber=data.applyNo;
//        alert(applyNumber);
//        $("#applyNumber").val(applyNumber);
    viewEmployeeLoanTransatnList();
//    });

}
function validateSuppressedMonth()
{
    // $("#pregsuccessBefore").text("");
    var supressedMonth = $("#suppressMonth").val();
    //alert(supressedMonth);
    var TodayDate = new Date();
    var d = TodayDate.getDate();  //it returns the date 
    var m = TodayDate.getMonth(); //re
    $("#suppressMonthErr").text("");
    var isSuppressed = $("#isSuppressed").val();
    //alert(isSuppressed);
    if (parseInt(supressedMonth) < parseInt(m))
    {

        displaySmallErrorMessagesInRed("suppressMonthErr", "Please select month greater than current month.");
    }

}
function getEmpDemodetailsTR() {

    var ecode = $("#empcode").val();
    $("#financialYearErr").text("");
    var financialYear = $("#financialYear").val();
//    getLoanallotLR(ecode);
    if (financialYear == "" || financialYear == null)
    {
        $("#financialYear").focus();
        displaySmallErrorMessagesInRed("financialYearErr", "Please select Financial Year.");
        $("#empcode").val("");
    }
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
                $('#department').val(pdata[i].department);

            }
        }
    });
    var ddo = $("#ddo").val();
    var empcode = $("#empcode").val();
    var loantype = $("#loantype").val();
    getPresentLoan(ddo, empcode, loantype);


}
function viewEmpInterstDetails(obj)
{
    var sno = 1;
    $("#applyNumber").val(obj.applyNo);
    $("#interestDetailsTableBodyId").append("<tr style='cursor:pointer;' >"
            + "<td style='cursor:pointer;'>" + sno + "</td>"
            + "<td style='cursor:pointer;'>" + obj.applyNo + "</td>"
            + "<td style='cursor:pointer;'>" + obj.ddo + "</td>"
            + "<td style='cursor:pointer;'>" + obj.empcode + "</td>"
            + "<td style='cursor:pointer;'>" + obj.loantype + "</td>"
            + "<td style='cursor:pointer;'>" + obj.interestPercent + "</td>"
            + "<td style='cursor:pointer;'>" + obj.interestAmount + "</td>"
            + "<td style='cursor:pointer;'>" + obj.interestpaid + "</td>"
            + "<td style='cursor:pointer;'>" + obj.balanceInterest + "</td>"
            + "</td></tr>");
    $('#interestDetailsTable').append("</table>");
}
function getLoanNatureForloantransactions()
{
    var ddo = $("#ddo").val();
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
    // alert(loanTypeData);
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
                // alert(isRefundable);
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
        // validateIsRefundable()
    }

    getOrderNoInRecovery(ddo, loantype);
}
function getEmpoyeeCodeBasedOnFinYear()
{
    var ddo = $("#ddo").val();
    $("#ddoErr").text("");
    var ddo = $("#ddo").val();
    if (ddo == "" || ddo == null)
    {
        $("#ddo").focus();
        displaySmallErrorMessagesInRed("ddoErr", "Please select ddo.");
        $("#loantype").val("");
    }
    var financialYear = $("#financialYear").val();
//    getLoanallotLR(ecode);
    if (financialYear == "" || financialYear == null)
    {
        $("#financialYear").focus();
        displaySmallErrorMessagesInRed("financialYearErr", "Please select Financial Year.");
        $("#empcode").val("");
    }
    var loantype = $("#loantype").val();

    var scrId = "transactions";
    var currentFinancialYear = $('#financialYear').val();
    $.get(server_base_url + "Payroll/PayrollDetails/GetEmpCodesforLoanTransaction", {
        ddo: ddo,
        loanType: loantype,
        scrId: scrId,
        currentFinancialYear: currentFinancialYear

    }).done(function (pdata) {
        //alert(pdata);
        if (pdata == null || pdata == "" || pdata == 500)
        {
            $("#empcode").text("").append("<option >" + NoDataFound + "</option>");
        } else
        {
            $("#empcode").text("").append("<option id=''value='0' >---- [Employee Code]-Employee Name ----</option>");
            for (var i = 0; i < pdata.length; i++) {
                $("#empcode").append("<option value='" + pdata[i].empCode + "'>[" + pdata[i].empCode + "]-"+ pdata[i].empName +"</option>");
            }
        }

    });
}
//function validateIsRefundable()
//{
//
//    var loannature = $('#loannature').val();
////   $.post(server_base_url + "Payroll/PayrollDetails/LoanNature/GetLoanNatureFromIdService", {
////        id: loannature
////      }).done(function(data) {
////          //alert(data);
////        var obj = JSON.parse(data);
////         //alert(obj);
////       
////        var isRefundable=obj.isrefundable;
//    var elem = document.getElementById("Row6Col1");
//    var elem1 = document.getElementById("Row6Col2");
//    //alert(elem);
//    if (loannature == "Non Refundable")
//    {
//        //alert("inside");
//
//        elem.remove();
//        elem1.remove();
//        //alert("removed");
//    } else if (loannature == "Refundable")
//    {
//        if (elem == null || elem == "")
//        {
//            $("#Row6").append("<div id ='Row6Col1' class='form-group col-md-6'/>");
//            $("#Row6").append("<div id ='Row6Col2' class=' col-md-6 form-group'/>");
//            $("#Row6Col1").append(getLabel_InputWithSpan("Installment  Amount", "required", "installmentAmount", "", "readonly"));
//            $("#Row6Col2").append(getLabel_InputWithSpan("Total Installment", "required", "totalinstallment", "", "onkeypress='return validateNumber(event)'"));
//        }
//        // alert("proceed");
//    }
//
////    });
//
//}
function getOrderNoInRecovery(ddo, loanType)
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

function EmployeeLoanTransactionValidation()
{
    $("#" + successMsgDivCF).text("");
//    $("#suppressMonthErr").text("");
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    var saveorupdate = $("#saveorupdate").val();
    var result = 1;
    var ddo = $("#ddo").val();
    var oredrno = $("#oredrno").val();
    var empcode = $("#empcode").val();
    var empname = $("#empname").val();
//    var loantype = $("#loantype").val();
    var loannature = $("#loannature").val();
    var accountNo = $("#accountNo").val();
    var dated = $("#dated").val();
    var city = $("#city").val();
    var financialYear = $("#financialYear").val();

//    var suppressMonth = $("#suppressMonth").val();
    if (preValidation(city) || preValidation(dated) || preValidation(loannature) || preValidation(empname) || preValidation(empcode) || preValidation(oredrno) || preValidation(ddo) || preValidation(financialYear)) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, MandoryFieldMsg);
        return false;
    } else {
        if (city == "") {
            $("#city").focus();
            displaySmallErrorMessagesInRed("cityErr", "Please enter city.");
            result = 0;
        }
//         else if (city != "") {
//            if (!city.match((alphaNumericPattern()))) {
//                $("#city").focus();
//                displaySmallErrorMessagesInRed("cityErr", "Please enter city.");
//                result = 0;
//            }
//        }
        if (dated == "") {
            $("#dated").focus();
            displaySmallErrorMessagesInRed("datedErr", "Please enter date.");
            result = 0;
        }
//        if (accountNo == "") {
//            $("#accountNo").focus();
//            displaySmallErrorMessagesInRed("accountNoErr", "Please enter account no.");
//            result = 0;
//        } else if (accountNo != "") 
//        {
//            if (!accountNo.match((numbervalidation()))) {
//            $("#accountNo").focus();
//            addSomeClass("acnumberFieldGroup", "has-error");
//            displaySmallErrorMessages("accountNoErr", "Please enter valid Account Number.");
//            result = 0;
//        } else if (accountNo.length < 4) {
//            $("#accountNo").focus();
//            addSomeClass("accountNoFieldGroup", "has-error");
//            displaySmallErrorMessages("accountNoErr", "Invalid! Account No. Must be more than 3 digits.");
//            result = 0;
//        }
//        }
        if (empcode == "") {
            $("#empcode").focus();
            displaySmallErrorMessagesInRed("empcodeErr", "Please enter employee code.");
            result = 0;
        }
        if (ddo == "") {
            $("#ddo").focus();
            displaySmallErrorMessagesInRed("ddoErr", "Please enter ddo.");
            result = 0;
        }
//         if ($('#isSuppressed').prop('checked')) 
//         {
//            var suppressyear = $("#suppressyear").val();
//            var suppressMonth = $("#suppressMonth").val();
//            if (suppressyear == "" || suppressyear== null) 
//                {
//                   displaySmallErrorMessagesInRed("suppressyearErr", "Please enter ddo."); 
//                   result = 0;
//                }
//            if (suppressMonth == "" || suppressMonth== null) 
//                {
//                    displaySmallErrorMessagesInRed("suppressMonthErr", "Please enter ddo.");
//                    result = 0;
//                }
//        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveFinancialEmployeeLoanTransactionDetails();
            } else if (saveorupdate == "update") {
                updateFinancialEmployeeLoantransactionDetails();
            }
        }
    }
}
function saveFinancialEmployeeLoanTransactionDetails() {
    if (checkUserPrivelege(pvCreateLoanTransaction)) {
        var ddo = $("#ddo").val();
        var loantype = $("#loantype").val();
        var oredrno = $("#oredrno").val();
        var loannature = $("#loannature").val();
        var empcode = $("#empcode").val();
        var empname = $("#empname").val();
        var department = $("#department").val();
        var designation = $("#designation").val();
        var dated = $("#dated").val();
        var accountNo = $("#accountNo").val();
        var city = $("#city").val();
        var remarks = $("#remarks").val();
        var isSuppressed = $("#isSuppressed").val();
        var financialYear = $("#financialYear").val();
//    var suppressMonth = $("#suppressMonth").val();
        var applyNumber = $("#applyNumber").val();
        var isLocked = "false";
        var suppressYear = $("#suppressYear").val();
        if ($('#isSuppressed').prop('checked')) {
            isSuppressed = $("#isSuppressed").val();
        } else
        {
            isSuppressed = "No";
        }
        var obj = {
            applyNo: applyNumber,
            ddo: ddo,
            orderNo: oredrno,
            empCode: empcode,
            empName: empname,
            department: department,
            designation: designation,
            loanType: loantype,
            loanNature: loannature,
            accountNo: accountNo,
            dated: dated,
            city: city,
            remarks: remarks,
            isSuppressed: isSuppressed,
            financialYear: financialYear,
//        suppressMonth: suppressMonth,
            suppressyear: suppressYear,
            isLocked: isLocked

        };
        $.post(server_base_url + "Payroll/payrollDetails/LoanTransaction/Save", {
            demojson: JSON.stringify(obj),
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            //alert(data);
            if (data == exist) {
                setTimeout(function () {
                    scrolupfunction();
                    payrollEmployeeLoanTransactionMaster("dashBoardBodyMainDiv");
                    displayErrorMessages(successMsgDivCF, existed, "");
                }, 3000);
                return false;
            } else {
                saveOrUpdateCommonFunctionInEmployeeLoanAllotment(data);
            }
        });
    } else {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, privilageNotExist);
    }
}
function  saveOrUpdateCommonFunctionInEmployeeLoanAllotment(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        setTimeout(function () {
            scrolupfunction();
            var successmessagetobedisplayed = successMessage;
            if ($("#saveorupdate").val() == "update" || $("#saveorupdate").val() == "Update") {
                successmessagetobedisplayed = updateMessage;
            }
            payrollEmployeeLoanTransactionMaster("dashBoardBodyMainDiv");
            displaySuccessMessages(successMsgDivCF, successmessagetobedisplayed, "");
        }, 1000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function viewFinancialEmployeeLoanAllotmentList(divId) {
    if (checkUserPrivelege(pvViewLoanTransaction)) {
        var columsName = ["Apply Number", "Loan/Adv.Type", "Loan/Adv.Nature", "Loan From City", "Dated", "Allotment/Order.No"];
        createTableWithEditDeletePrivilage(innerDivCF, "List of Employee Loan/Advance Details", divId, MsgDivInTableCF, columsName, pvUpdateLoanTransaction, pvDeleteLoanTransaction);
        $.get(server_base_url + "Payroll/PayrollDetails/LoanTrasaction/View", {
            ddo: getUserSessionElement(seDDOId)
        }).done(function (bdata) {
            if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        var divIdBody = divId + "body";
                        $("#" + divId).append("<tbody id='" + divIdBody + "' class='table-striped table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var obj = JSON.stringify(bdata[i]);
                            var isLocked = bdata[i].isLocked
//                        var month = getMonth(bdata[i].suppressMonth);
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"

                                    + "<td>" + sno + "</td>"
                                    + "<td>" + bdata[i].applyNo + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].loanType + "</td>"
//                                + "<td style='cursor:pointer;'>" + month + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].loanNature + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].city + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].dated + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].orderNo + "</td>");
                            if (isLocked == "false")
                            {
                                if (checkUserPrivelege(pvUpdateLoanTransaction)) {
                                    $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatepayrollEmployeeLoanTransactionDetails('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                                }
                                if (checkUserPrivelege(pvDeleteLoanTransaction)) {
                                    $("#" + bdata[i]._id.$oid).append("<td onclick=deletepayrollEmployeeLoanTransaction('" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                                }
                            } else
                            {
                                if (checkUserPrivelege(pvUpdateLoanTransaction)) {
                                    $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=alertPopUp('viewEmployeeLoanTransatnList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                                }
                                if (checkUserPrivelege(pvDeleteLoanTransaction)) {
                                    $("#" + bdata[i]._id.$oid).append("<td onclick=alertPopUp('viewEmployeeLoanTransatnList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                                }
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
function getMonth(no) {
    var month = new Array();
    month[0] = "0";
    month[1] = "January";
    month[2] = "February";
    month[3] = "March";
    month[4] = "April";
    month[5] = "May";
    month[6] = "June";
    month[7] = "July";
    month[8] = "August";
    month[9] = "September";
    month[10] = "October";
    month[11] = "November";
    month[12] = "December";

    var d = new Date();
    var n = month[no];
    return n;
}
function viewEmployeeLoanTransatnList() {

    var ddo = $("#ddo").val();
    var loantype = $("#loantype").val();
    var empcode = $("#empcode").val();
    var finYear = $("#financialYear").val();


    $("#" + innerDivCF).append("<div id='relationListPanelDiv' class=''/>");
    $("#loanTransDiv").text("").append('<div id="paymentDetailsListPanel" class="panel panel-blue" />');
    $("#paymentDetailsListPanel").append('<div id="paymentDetailsListHeading" class="panel-heading" />');
    $("#paymentDetailsListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>Employee Transaction Details</center></a>');

    $("#paymentDetailsListPanel").append('<div id="collapseOne2" class="" />');
    $("#collapseOne2").append('<div id="paymentDetailsListBody" class = "panel-body pan" />');
    $("#paymentDetailsListBody").append('<div id="panelRow" class="row" />');

    $("#paymentDetailsListBody").append('<div id="paymentDetailsListErrorMsgId" />');
    $("#paymentDetailsListBody").append('<div id="paymentDetailsListMainBody" class="table-responsive" />');
    $("#paymentDetailsListMainBody").append('<table id="paymentDetailsTable" class="table table-striped table-bordered table-hover" />');
    $("#paymentDetailsTable").append('<thead id="paymentDetailsTableHeadId" />');
    $("#paymentDetailsTable").append('<tbody id="paymentDetailsTableBodyId" />');

    $("#paymentDetailsTableHeadId").append('<tr><th>Sno</th><th>DDO</th><th>EmployeeCode</th><th>Loan Type</th><th>Apply Number</th><th><center>Loan Amount</center</th><th><center>Paid Amount</center></th><th><center>Cash Recovery</center></th><th><center>Balance Amount</center></th><th><center>Total No of Installments</center></th><th><center>Balance No of Installments</center></th></tr>');

    $("#" + innerDivCF).append("<div id='relationListPanelDiv1' class=''/>");
    $("#loanInterstDiv").text("").append('<div id="interestDetailsListPanel" class="panel panel-blue" />');
    $("#interestDetailsListPanel").append('<div id="interestDetailsListHeading" class="panel-heading" />');
    $("#interestDetailsListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne6"><center>Interest Details</center></a>');

    $("#interestDetailsListPanel").append('<div id="collapseOne6" class="" />');
    $("#collapseOne6").append('<div id="interestDetailsListBody" class = "panel-body pan" />');
    $("#interestDetailsListBody").append('<div id="panelRow" class="row" />');

    $("#interestDetailsListBody").append('<div id="interestDetailsListErrorMsgId" />');
    $("#interestDetailsListBody").append('<div id="interestDetailsListMainBody" class="table-responsive" />');
    $("#interestDetailsListMainBody").append('<table id="interestDetailsTable" class="table table-striped table-bordered table-hover" />');
    $("#interestDetailsTable").append('<thead id="interestDetailsTableHeadId" />');
    $("#interestDetailsTable").append('<tbody id="interestDetailsTableBodyId" />');

    $("#interestDetailsTableHeadId").append('<tr><th>Sno</th><th>Apply Number</th><th>DDO</th><th>EmployeeCode</th><th>Loan Type</th><th><center>Interest Rate</center</th><th><center>Interest Amount </center></th><th><center>Paid Interest</center></th><th><center>Balance Interest</center></th></tr>');

    $.get(server_base_url + "/Payroll/PayrollDetails/EmpTransactionDetail", {
        ddo: ddo,
        ecode: empcode,
        loanType: loantype,
        finYear: finYear
    }).done(function (bdata) {

        var obj = JSON.parse(bdata);
        //alert(obj);
        // $("#interestDetailsTable").text("");
        if (obj == fail) {
            $("#disciplineMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + failMessage + "<strong></div></center>");
        } else if (obj == unauthorized) {
            $("#disciplineMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + unauthorizedMessage + "<strong></div></center>");
        } else if (obj == statusException) {
            $("#disciplineMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + statusExceptionMessage + "<strong></div></center>");
        } else if (obj == invalidSession) {
            callSessionTimeout();
        } else if (obj == duplicate) {
            displayErrorMessages("pregsuccessBefore", "" + existed + "");
        } else {

            //alert(bdata);
            //var obj = JSON.parse(bdata);
            var sno = 1;
            if (obj.isAmountPaid == "False")
            {

//                $("#Row6Col2").text("").append(getLabel("Supress for Month", "required") + "" + getDropDown("suppressMonth"));
//                $("#suppressMonth").append("<option id=''value='0' >---- Select Month ----</option>");
//                $("#suppressMonth").append("<option id=''value='1' >Jan</option><option id=''value='2'>Feb</option><option id=''value='3'>Mar</option><option id=''value='4'>Apr</option>");
//                $("#suppressMonth").append("<option id=''value='5' >May</option><option id=''value='6'>Jun</option><option id=''value='7'>Jul</option><option id=''value='8'>Aug</option>");
//                $("#suppressMonth").append("<option id=''value='9' >Sep</option><option id=''value='10'>Oct</option><option id=''value='11'>Nov</option><option id=''value='12'>Dec</option>");
//                $("#suppressMonth").attr("onchange", "validateSuppressedMonth()");
                var loannature = $("#loannature").val();
                if (loannature == "Refundable")
                {
                    $("#Row6Col3").text("").append('<div  id="chekboxLabelDiv"/>');
                    $("#chekboxLabelDiv").append('<label class="control-label">Suppress</label>');
                    $("#Row6Col3").append('<div  id="chekboxDiv" class="" style=" border-left-width: 9px; padding-left: 16px; padding-top: 6px;" />');
                    $("#chekboxDiv").append('<input type="checkbox" id="isSuppressed" value="Yes"/>');
                    $("#chekboxDiv").append('<span id="yearErr"></span>');
                    getTwoColumnInRow(FieldGroupForCF, "Row7", "Row7Col1", "Row7Col2");
                    $("#Row7").text("");
                    $("#saveButtonDiv").text("");
                    getSaveResetUpdateBackButton("saveButtonDiv", "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "EmployeeLoanTransactionValidation()", "Reset", "resetBackBtnId", "payrollEmployeeLoanTransactionMaster()");
                } else
                {
                    $("#Row6Col3").text("");
                    $("#saveButtonDiv").text("");
                }
            }
            $("#allottedDate").val(obj.allotedDate);
            $("#paymentDetailsTableHeadId").append("<tr style='cursor:pointer;' >"
                    + "<td style='cursor:pointer;'>" + sno + "</td>"
                    + "<td style='cursor:pointer;'>" + obj.ddo + "</td>"
                    + "<td style='cursor:pointer;'>" + obj.empcode + "</td>"
                    + "<td style='cursor:pointer;'>" + obj.loantype + "</td>"
                    + "<td style='cursor:pointer;'>" + obj.applyNo + "</td>"
                    + "<td style='cursor:pointer;'>" + obj.loanAmount + "</td>"
                    + "<td style='cursor:pointer;'>" + obj.paidAmount + "</td>"
                    + "<td style='cursor:pointer;'>" + obj.cashRecoveryAmount + "</td>"
                    + "<td style='cursor:pointer;'>" + obj.balanceAmount + "</td>"
                    + "<td style='cursor:pointer;'>" + obj.totalNoOfInstalments + "</td>"
                    + "<td style='cursor:pointer;'>" + obj.balNoOfInstalments + "</td>"
                    + "</td></tr>");
            $('#paymentDetailsTable').append("</table>");
            viewEmpInterstDetails(obj);
        }

    });

}
function updatepayrollEmployeeLoanTransactionDetails(obj) {
    if (checkUserPrivelege(pvUpdateLoanTransaction)) {
//    $("#Row6Col2").text("").append(getLabel("Supress for Month", "required") + "" + getDropDown("suppressMonth"));
//    $("#suppressMonth").append("<option id=''value='0' >---- Select Month ----</option>");
//    $("#suppressMonth").append("<option id=''value='1' >Jan</option><option id=''value='2'>Feb</option><option id=''value='3'>Mar</option><option id=''value='4'>Apr</option>");
//    $("#suppressMonth").append("<option id=''value='5' >May</option><option id=''value='6'>Jun</option><option id=''value='7'>Jul</option><option id=''value='8'>Aug</option>");
//    $("#suppressMonth").append("<option id=''value='9' >Sep</option><option id=''value='10'>Oct</option><option id=''value='11'>Nov</option><option id=''value='12'>Dec</option>");
//    $("#suppressMonth").attr("onchange", "validateSuppressedMonth()");

        $("#Row6Col3").text("").append('<div  id="chekboxLabelDiv"/>');
        $("#chekboxLabelDiv").append('<label class="control-label">Suppress</label>');
        $("#Row6Col3").append('<div  id="chekboxDiv" class="" style=" border-left-width: 9px; padding-left: 16px; padding-top: 6px;" />');
        $("#chekboxDiv").append('<input type="checkbox" id="isSuppressed" value="Yes"/>');
        $("#chekboxDiv").append('<span id="yearErr"></span>');
        $("#Row7").text("");
        getTwoColumnInRow(FieldGroupForCF, "Row7", "Row7Col1", "Row7Col2");
        $("#saveButtonDiv").text("");
        getSaveResetUpdateBackButton("saveButtonDiv", "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "EmployeeLoanTransactionValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
        obj = JSON.parse(decodeURI(obj));
        resetAllValuesInSpecifiedDiv(FieldGroupForCF);
        $("#ddo option:contains(" + obj.ddo + ")").attr('selected', 'selected');
        $("#Row1Col2").text("").append(getLabel("Employee Code", "") + "<input type='hidden' id='empcode' value='" + obj.empCode + "'><h6><strong>" + obj.empCode + "</strong></h6>")
        $("#oredrno").val(obj.orderNo);
//    alert(obj.empcode);
//    //$("#empcode").val(obj.empcode);
//     $("#empcode option:contains(" + obj.empcode + ")").attr('selected', 'selected');
        $("#empname").val(obj.empName);
        $("#department").val(obj.department);
        $("#designation").val(obj.designation);
        $("#loantype").val(obj.loanTypeId);
        $("#loannature").val(obj.loanNature);
        $("#accountNo").val(obj.accountNo);
        $("#dated").val(obj.dated);
        //$("#city").val(obj.city);
        $("#city option:contains(" + obj.city + ")").attr('selected', 'selected');
        $("#remarks").val(obj.remarks);
        $("#financialYear").val(obj.financialYear);

//    $("#suppressMonth").val(obj.suppressMonth);
        var isSuppressed = obj.isSuppressed
        if (isSuppressed == "Yes")
        {
            $("#isSuppressed").prop("checked", true);
            $("#isSuppressed").val("YES");
        }
//      else
//    {
//        $("#isSuppressed").prop("checked", flase);
//        $("#isSuppressed").val("No");
//    }
        $("#viewFinancialEmployeeLoanAllotmentListbody tr").css("background-color", "white");
        $("#viewFinancialEmployeeLoanAllotmentListbody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#Id").val(obj._id.$oid);
        $("#ddo").prop("disabled", true);
        $("#saveorupdate").val("update");
        $("#saveUpdateBtnId").text("").text("Update");

        setTimeout(function () {
            $('#ddo').attr('disabled', true);
            $('#loantype').attr('disabled', true);
        }, 700);
        addButtonOnclickFunction("resetBackBtnId", "Back", "payrollEmployeeLoanTransactionMaster('" + DashboardMainDivID + "')");
    }
}
function updateFinancialEmployeeLoantransactionDetails() {
    if (checkUserPrivelege(pvUpdateLoanTransaction)) {
        var ddo = $("#ddo").val();
        var loantype = $("#loantype").val();
        var oredrno = $("#oredrno").val();
        var loannature = $("#loannature").val();
        var empcode = $("#empcode").val();
        var empname = $("#empname").val();
        var department = $("#department").val();
        var designation = $("#designation").val();
        var dated = $("#dated").val();
        var accountNo = $("#accountNo").val();
        var city = $("#city").val();
        var remarks = $("#remarks").val();
        var isSuppressed = $("#isSuppressed").val();
        var financialYear = $("#financialYear").val();
//    var suppressMonth = $("#suppressMonth").val();
        var isLocked = "false";
        if ($('#isSuppressed').prop('checked')) {
            isSuppressed = "Yes"
        } else
        {
            isSuppressed = "No";
        }
        var applyNumber = $("#applyNumber").val();
        var obj = {
            applyNo: applyNumber,
            ddo: ddo,
            orderNo: oredrno,
            empCode: empcode,
            empName: empname,
            department: department,
            designation: designation,
            loanType: loantype,
            loanNature: loannature,
            accountNo: accountNo,
            dated: dated,
            city: city,
            remarks: remarks,
            isSuppressed: isSuppressed,
            financialYear: financialYear,
//        suppressMonth: suppressMonth,
            isLocked: isLocked
        };
        var Id = $("#Id").val();
        $.post(server_base_url + "Payroll/PayrollDetails/LoanTransaction/Update", {
            demojson: JSON.stringify(obj),
            id: Id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            saveOrUpdateCommonFunctionInEmployeeLoanAllotment(data);
        });
    } else {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, privilageNotExist);
    }
}
function deletepayrollEmployeeLoanTransaction(Id) {
    if (checkUserPrivelege(pvDeleteLoanTransaction)) {
        var result = confirm('Are you Sure?');
        if (result) {
            $.post(server_base_url + "Payroll/PayrollDetails/LoanTransaction/Delete", {
                id: Id,
                userid: getUserSessionElement("userId")
            }).done(function (data) {
                if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                    payrollEmployeeLoanTransactionMaster(DashboardMainDivID);
                    displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
                }
            });
        }
    } else {
        displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, privilageNotExist);
    }
}
function getLoanTransactionempcodes()
{
    var ddo = $("#ddo").val();
    $.get(server_base_url + "Payroll/PayrollDetails/LoanTransactionEmpcodes", {
        ddo: ddo
    }).done(function (pdata) {
        if (pdata == null || pdata == "" || pdata == 500)
        {
            $("#empcode").text("").append("<option >" + NoDataFound + "</option>");
        } else
        {
            $("#empcode").text("").append("<option id=''value='0' >----[Employee Code]-[Employee Name]----</option>");
            for (var i = 0; i < pdata.length; i++) {
                $("#empcode").append("<option value='" + pdata[i].empcode + "'>" + pdata[i].empcode + "</option>");
            }
        }
    });
}
function getLoanTransactionempdetails() {
    var ecode = $("#empcode").val();
    $.get(server_base_url + "Payroll/PayrollDetails/LoanAllotment/View", {
        ddo: getUserSessionElement(seDDOId)
    }).done(function (pdata) {
        if (pdata == null || pdata == "" || pdata == 500)
        {
            scrolupfunction();
            displayLargeErrorMessages(successMsgDivCF, "" + NoDataFound + "<br />");
            $('#department').val("");
            $('#empname').val("");
            $('#designation').val("");
            $('#loannature').val("");
            $('#oredrno').val("");
            // $('#loantype').val("");
        } else {
            pdata = JSON.stringify(pdata);
            var obj = JSON.parse(pdata);
            for (var k = 0; k < obj.length; k++) {
                if (obj[k].empcode == ecode)
                {
                    $('#department').val(obj[k].department);
                    $('#empname').val(obj[k].empName);
                    $('#designation').val(obj[k].designation);
                    $('#oredrno').val(obj[k].orderNo);
                    //  $('#loantype').val(obj[k].loantype);
                    $('#loannature').val(obj[k].loanNature);
                }
            }
        }
    });
}


