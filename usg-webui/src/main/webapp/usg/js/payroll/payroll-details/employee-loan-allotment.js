/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function payrollLoanAllotmentMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=payrollLoanAllotmentMaster("dashboardBodyMainDiv")>Employee Loan Allotment</a>');

    createFormWithPrivilage(divId, innerDivCF, "Employee Loan Allotment", FieldGroupForCF, successMsgDivCF, pvCreateLoanAllotment);
    if (checkUserPrivelege(pvCreateLoanAllotment)) {
        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
         getLoggedInDDOInDropDown("ddo", "");
        $("#Row0Col2").append(getLabel("Loan/Adv.Type", "required") + "" + getDropDown("loantype"));
        $("#loantype").attr("onchange", "getempcodesforloanAllotment()");
        $("#Row0Col2").append("<div id='loanTypeDataDiv'>");
        $("#loanTypeDataDiv").append("<input type='hidden' id='loanTypeData' />");
        $("#loanTypeDataDiv").append("<input type='hidden' id='interestPercentage' />");
        $("#loanTypeDataDiv").append("<input type='hidden' id='applyNumber' />");
        $("#loanTypeDataDiv").append("<input type='hidden' id='finYear' />");
        $("#loanTypeDataDiv").append("<input type='hidden' id='currentFinancialYear' />");

        var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
        var toFinacialYear = null;
        if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
        {
            var finyearArray = currentFinancialYear.split("~");
        }
        if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
        {
            var fromFinacialYear = finyearArray[0];
            var toFinacialYear= finyearArray[1];
        }
        $("#currentFinancialYear").val(currentFinancialYear);
        getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel_InputWithSpan("Order No", "required", "ordeId", "", "readonly"));
        $("#Row1Col2").append(getLabel_InputWithSpan("Loan/Adv.Nature", "required", "loannature", "", "readonly"));

        getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel("Employee Code", "required") + "" + getDropDown("empcode"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Employee Name", "required", "empname", "", "readonly"));
        $("#empcode").attr("onchange", "getempdetailsallot()");

        getTwoColumnInRow(FieldGroupForCF, "Row2a", "Row2aCol1", "Row2aCol2");
        $("#Row2aCol1").append(getLabel_InputWithSpan("Department", "required", "department", "", "readonly"));
        $("#Row2aCol2").append(getLabel_InputWithSpan("Designation", "required", "designation", "", "readonly"));

        getTwoColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel_InputWithSpan("Dated", "required", "dated", "", "onkeypress='return false'"));
        $('#dated').datepicker({
            changeYear: true,
            changeMonth: true,
        startDate: fromFinacialYear,
        endDate:toFinacialYear
    });

        $("#Row3Col1").append("<div id='loanApplyDateDiv'>");
        $("#loanApplyDateDiv").append("<input type='hidden' id='loanApplyDate' />");
        $("#loanApplyDateDiv").append("<input type='hidden' id='dateOfRetirement' />");
        $("#Row3Col2").append(getLabel_InputWithSpan("Requested Amount", "required", "requestamount", "", " readonly onkeypress='return false'"));


        getTwoColumnInRow(FieldGroupForCF, "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel_InputWithSpan("Sanctioned Amount", "required", "sanctionedamount", "", "onkeypress='return validateNumber(event)'"));
        $("#Row4Col2").append(getLabel_InputWithSpan("Adjustment Amount", "required", "adjustamount", "", "onkeypress='return validateNumber(event)'"));

        getTwoColumnInRow(FieldGroupForCF, "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel_InputWithSpan("Alloted Amount", "required", "allotamount", "", " readonly onkeypress='return false'"));
        $("#Row5Col2").append(getLabel_InputWithSpan("Total No Of Installment", "required", "totalinstallment", "", "readonly onkeypress='return validateNumber(event)'"));

        getTwoColumnInRow(FieldGroupForCF, "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel_InputWithSpan("Installment  Amount", "required", "installmentAmount", "", "onkeypress='return validateNumber(event)'"));

        $("#Row6Col2").append(getLabel_InputWithSpan("Remarks", "", "remarks", "", ""));


        // getLabelTextareaFullRow(FieldGroupForCF, "Remarks", "", "Row7", "Row7Col1", "remarks", "maxlength=300");
        $("#sanctionedamount").attr("onchange", "validateSanctnAmount1()");
        $("#adjustamount").attr("onchange", "validateAdjAmount()");
        $("#dated").attr("onchange", "validateDate()");
        //$("#totalinstallment").attr("onchange", "validateTotalinstallment()");
        $("#loannature").attr("onchange", "validateIsnndable()");
        $("#installmentAmount").attr("onchange", "validatinstallmentAmount()");
        getLoanOrAdvanceType("loantype", "allotment");
      //  viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");
        //viewOption("hrms/common/LoanNature/View", "", "loanName", "loantype", "Loan Type");
        viewOption("hrms/salary/Employee/ViewList", "", "employeeName", "sanctionedBy", "Sanctioned By");
        viewOption("hrms/salary/Employee/ViewList", "", "employeeName", "comptroller", "Comptroller");
        // viewOption("hrms/common/LoanNature/View", "", "loanName", "loannature", "Loan Nature");
        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "LoanAllotmentValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "','ddo','')");
    
     $("input").on("keypress", function(e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        
        $("textarea").on("keypress", function(e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    
    
    
    }
    if (checkUserPrivelege(pvViewLoanAllotment)) {
        viewPayrollLoanAllotmentList("viewPayrollLoanAllotmentList");
    }
}


function validateDate()
{

    $("#datedErr").text("");
    var empcode = $("#empcode").val();
    if (preValidation(empcode))
    {
        displaySmallErrorMessages("empcodeErr", "Please select employee code .");
        $("#dated").val("");
    } else
    {

        var applydateDate = $("#loanApplyDate").val();
        //Get applied date from hidden parameter ..
        var applydateDate = $("#loanApplyDate").val();
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
        //
        demoDate1.setDate(d1[0]);
        demoDate1.setMonth(d1[1] - 1);
        demoDate1.setYear(d1[2]);
        //alert(demoDate);

        //  alert(demoDate1);
        var totalDays = fetchtotalLeavesAppliedAllot(demoDate, demoDate1) + 1;
        //  alert(totalDays);
        if (totalDays < 0 || totalDays == 0) {
            displaySmallErrorMessages("datedErr", "Please select Date Greater than Applied Date.");
            $("#dated").val(" ");
        }
//        if ((demoDate1.getDate() < demoDate.getDate()))
//        {
//
//            displaySmallErrorMessages("datedErr", "Please select Date Greater than Applied Date.");
//        }

    }
}
function fetchtotalLeavesAppliedAllot(fromDate, toDate) {
    var fDate = new Date(fromDate);
    var tDate = new Date(toDate);
    //alert(fDate);
    // alert(tDate);
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
function daysBetweenTheseDates(applydateDate, allotDate) {
//    var fDate = $("#fromDate").datepicker("getDate");
//    var tDate = $("#toDate").datepicker("getDate");
    var fDate = new Date(allotDate);
    var tDate = new Date(applydateDate);
    console.log(fDate + "-" + tDate);
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
function dateString2Date(dateString) {
    var dt = dateString.split(/\-|\s/);
    return new Date(dt.slice(0, 3).reverse().join('-') + ' ' + dt[3]);
}
function  validateSanctnAmount1()
{

    $("#sanctionedamountErr").text("");
    $("#empcodeErr").text("");
    $("#adjustamountErr").text("");
    $("#allotamountErr").text("");
    $("#totalinstallment").val("");
    $("#installmentAmount").val("");
    $("#allotamount").val("");
    $("#adjustamount").val("");
    var loannature = $("#loannature").val();
    if (loannature == "Refundable")
    {
        //alert("elem");
        $("#installmentAmount").val("");
        $("#totalinstallment").val("");

    } else
    {
        $("#installmentAmount").val("0");
        $("#totalinstallment").val("0");
    }
    var SanAmnt = $("#sanctionedamount").val();
    var requestamount = $("#requestamount").val();
    if (requestamount == null || requestamount == "")
    {
        displaySmallErrorMessages("empcodeErr", "Please select employee code .");
        $("#sanctionedamount").val("");
    } else if (SanAmnt == null || SanAmnt == "0")
    {
        displaySmallErrorMessages("sanctionedamountErr", "Please enter valid sanction amount .");
        $("#sanctionedamount").val("");
    } else
    {
        $("#empcodeErr").text("");
        if (parseInt(SanAmnt) > parseInt(requestamount))
        {
            displaySmallErrorMessages("sanctionedamountErr", "amount must be less than Requested amount.");
            $("#sanctionedamount").val("");
        }
    }
}
function  validateAdjAmount()
{

    $("#adjustamountErr").text("");
    var adjAmount = $("#adjustamount").val();
    var sanctionedamount = $("#sanctionedamount").val();

    if (sanctionedamount == null || sanctionedamount == "")
    {
        displaySmallErrorMessages("sanctionedamountErr", "Please enter sanction amount .");
        $("#adjustamount").val("");
    } else
    {
        if (parseInt(adjAmount) > parseInt(sanctionedamount))
        {
            $("#sanctionedamount").val("");
            $("#adjustamount").val("");
            displaySmallErrorMessages("adjustamountErr", "Adjustment amount must be less than Sanctioned amount.");
        } else
        {
            var allotedAmount = parseInt(sanctionedamount) - parseInt(adjAmount);
            $("#allotamount").val(allotedAmount);
        }
    }



}

function  validateAllotedAmount()
{

    $("#allotamountErr").text("");
    var allotamount = $("#allotamount").val();
    var sanctionedamount = $("#sanctionedamount").val();

    if (sanctionedamount == null || sanctionedamount == "")
    {
        displaySmallErrorMessages("sanctionedamountErr", "Please enter sanction amount .");
        $("#allotamount").val("");
    } else
    {
        if (parseInt(allotamount) > parseInt(sanctionedamount))
        {
            displaySmallErrorMessages("allotamountErr", "Alloted amount must  be less than Sanctioned amount.");
        }
    }
}
//function validatinstallmentAmount()
//{
//      $("#sanctionedamountErr").text("");
//     $("#totalinstallmentErr").text("");
//   
//    var totalinstallment = $("#totalinstallment").val();
//    var sanctionedamount = $("#sanctionedamount").val();
//     var tonInstlmentInt =parseInt(totalinstallment);
//     if(sanctionedamount == null || sanctionedamount =="")
//     {
//            displaySmallErrorMessages("sanctionedamountErr", "Please enter sanction amount .");
//            $("#totalinstallment").val("");
//     }
//    if(tonInstlmentInt ==0 || tonInstlmentInt>=20 )
//     {
//            displaySmallErrorMessages("totalinstallmentErr", "Please enter valid Total Installment .");
//            $("#totalinstallment").val("");
//     }
//}
function validatinstallmentAmount()
{

    $("#sanctionedamountErr").text("");
    $("#installmentAmountErr").text("");

    var installmentAmount = $("#installmentAmount").val();
    var sanctionedamount = $("#sanctionedamount").val();
    var installmentAmount = parseInt(installmentAmount);
    if (sanctionedamount == null || sanctionedamount == "")
    {
        displaySmallErrorMessages("sanctionedamountErr", "Please enter sanction amount .");
        $("#totalinstallment").val("");
        $("#installmentAmount").val("");
    } else if (installmentAmount == 0 || installmentAmount > sanctionedamount)
    {
        displaySmallErrorMessages("installmentAmountErr", "Please enter valid Installment amount .");
        $("#installmentAmount").val("");
        $("#totalinstallment").val("");
    } else
    {
        var totalinstallment = (parseInt(sanctionedamount) / parseInt(installmentAmount));
        // alert(totalinstallment);
        totalinstallment = Math.ceil(totalinstallment);
        var applydateDate = $("#loanApplyDate").val();
        var dateOfRetirement = $("#dateOfRetirement").val();
        //(applydateDate);
        //alert(dateOfRetirement);

        if (dateOfRetirement != "" && applydateDate != "")
        {
            var totalMonth = GetMonthFromDates(applydateDate, dateOfRetirement);
            if (parseInt(totalinstallment) > parseInt(totalMonth))
            {
                //alert("cannot apply loan");
                displaySmallErrorMessages("installmentAmountErr", "Please provide installment amount acording to retirement date .");
                $("#installmentAmount").val("");
                $("#totalinstallment").val("");
            } else
            {
                $("#totalinstallment").val(totalinstallment);
            }
        } else
        {
            $("#totalinstallment").val(totalinstallment);
        }
    }
}
function GetMonthFromDates(applyDate, retirementdate) {
    var appDate = applyDate;
    var retirdate = retirementdate;
    // alert(appDate);

    //alert(retirdate);
    var date1 = new Date(appDate.split("/").reverse().join("-"));
    //var dd=d.getDate();
    //var yy=d.getFullYear();
    var mm = date1.getMonth() + 1;

    var date2 = new Date(retirdate.split("/").reverse().join("-"));
    var mm1 = date2.getMonth() + 1;
    var Nomonths;
    Nomonths = (date2.getFullYear() - date1.getFullYear()) * 12;
    Nomonths -= date1.getMonth() + 1;
    Nomonths += date2.getMonth() + 1; // we should add + 1 to get correct month number
    //alert(Nomonths);
    return Nomonths <= 0 ? 0 : Nomonths;
    return Nomonths;
}
function LoanAllotmentValidation()
{
    $("#" + successMsgDivCF).text("");
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    var result = 1;
    var saveorupdate = $("#saveorupdate").val();
    var ddo = $("#ddo").val();
    var applyno = $("#applyno").val();
    var loantype = $("#loantype").val();
    var empcode = $("#empcode").val();
    var empname = $("#empname").val();
    var sanctionedamount = $("#sanctionedamount").val();
    var requestamount = $("#requestamount").val();
    var allotamount = $("#allotamount").val();
    var installmentAmount = $("#installmentAmount").val();
    var adjustamount = $("#adjustamount").val();
    var totalinstallment = $("#totalinstallment").val();
    var loannature = $("#loannature").val();
    var empcode = $("#empcode").val();
    var comptroller = $("#comptroller").val();
    var ordeId = $("#ordeId").val();
    var dated = $('#dated').val();
    if (preValidation(ordeId) || preValidation(loannature) || preValidation(ddo) || preValidation(adjustamount) || preValidation(empname) || preValidation(sanctionedamount) || preValidation(allotamount) || preValidation(totalinstallment) || preValidation(installmentAmount) || preValidation(requestamount) || preValidation(dated)) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        if (totalinstallment == "" || totalinstallment == null) {
            $("#totalinstallment").focus();
            displaySmallErrorMessagesInRed("totalinstallmentErr", "Please select total installment.");
            result = 0;
        } else if (totalinstallment != "") {
            if (!totalinstallment.match((numbervalidation()))) {
                $("#totalinstallment").focus();
                displaySmallErrorMessagesInRed("totalinstallmentErr", "Please enter valid number.");
                result = 0;
            }
        }
        if (installmentAmount == "" || installmentAmount == null) {
            $("#installmentAmount").focus();
            displaySmallErrorMessagesInRed("installmentAmountErr", "Please select  installment amount.");
            result = 0;
        } else if (installmentAmount != "") {
//            if (!installmentAmount.match((numbervalidation()))) {
//                $("#installmentAmount").focus();
//                displaySmallErrorMessagesInRed("installmentAmountErr", "Please enter valid number.");
//                result = 0;
//            }
        }
        if (allotamount == "" || allotamount == null) {
            $("#allotamount").focus();
            displaySmallErrorMessagesInRed("allotamountErr", "Please select total installment.");
            result = 0;
        } else if (allotamount != "") {
            if (!allotamount.match((numbervalidation()))) {
                $("#allotamount").focus();
                displaySmallErrorMessagesInRed("allotamountErr", "Please enter valid number.");
                result = 0;
            }
        }
        if (adjustamount == "" || adjustamount == null) {
            $("#adjustamount").focus();
            displaySmallErrorMessagesInRed("adjustamountErr", "Please enter adjusted amount.");
            result = 0;
        } else if (adjustamount != "") {
            if (!adjustamount.match((numbervalidation()))) {
                $("#adjustamount").focus();
                displaySmallErrorMessagesInRed("adjustamountErr", "Please enter valid number.");
                result = 0;
            }
        }
        if (sanctionedamount == "" || sanctionedamount == null) {
            $("#sanctionedamount").focus();
            displaySmallErrorMessagesInRed("sanctionedamountErr", "Please enter sanctioned amount.");
            result = 0;
        } else if (sanctionedamount != "") {
            if (!sanctionedamount.match((numbervalidation()))) {
                $("#sanctionedamount").focus();
                displaySmallErrorMessagesInRed("sanctionedamountErr", "Please enter valid number.");
                result = 0;
            }
        }
        if (loannature == "" || loannature == null) {
            $("#loannature").focus();
            displaySmallErrorMessagesInRed("loannatureErr", "Please select loan nature.");
            result = 0;
        }
        if (ddo == "" || ddo == null) {
            $("#ddo").focus();
            displaySmallErrorMessagesInRed("ddoIdErr", "Please select ddo.");
            result = 0;
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                savePayrollLoanAllotmentDetails();
            } else if (saveorupdate == "update") {
                updatePayrollLoanAllotmentDetails();
            }
        }
    }
}
function getempcodesforloanAllotment()
{
    $("#ddoErr").text("");
    $('#department').val("");
    $('#empname').val("");
    $('#designation').val("");
    $('#requestamount').val("");
    $("#sanctionedamount").val("");
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
        validateIsRefundable1();
    }
    getOrderId(ddo, loantype);
    var scrId = "allotment";
    var currentFinancialYear = $('#currentFinancialYear').val();
    $.get(server_base_url + "Payroll/PayrollDetails/GetEmpCodesforLoanTransaction", {
        ddo: ddo,
        loanType: loantype,
        scrId: scrId,
        currentFinancialYear: currentFinancialYear
    }).done(function (pdata) {
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
    // alert("pdata");

}
function getOrderId(ddo, loanType)
{
    //("pdata");
    $.get(server_base_url + "Payroll/PayrollDetails/LoanOrder/getOrderNo", {
        ddo: ddo,
        loanType: loanType
    }).done(function (pdata) {
        // alert(pdata);
        if (pdata == null || pdata == "" || pdata == 500)
        {

            displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
        } else {

            var obj = JSON.parse(pdata);


            $('#ordeId').val(obj[0].orderNo);
        }
    });


}
function getempdetailsallot()
{
    $('#department').val("");
    $('#empname').val("");
    $('#designation').val("");
    $('#requestamount').val("");
    $("#sanctionedamount").val("");

    var loannature = $("#loannature").val();
    if (loannature == "Refundable")
    {
        //alert("elem");
        $("#installmentAmount").val("");
        $("#totalinstallment").val("");

    } else
    {
        $("#installmentAmount").val("0");
        $("#totalinstallment").val("0");
    }

    $("#empcodeErr").text("");
    $("#sanctionedamountErr").text("");
    $("#installmentAmountErr").text("");
    $("#totalinstallmentErr").text("");
    var ecode = $("#empcode").val();
    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function (pdata) {
        if (pdata == null || pdata == "" || pdata == 500)
        {
            displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
        } else {

            $('#department').val(pdata[0].department);
            $('#empname').val(pdata[0].employeeName);
            $('#designation').val(pdata[0].designation);
            $('#dateOfRetirement').val(pdata[0].dateOfRetirement);
            getreqamount(ecode);
        }
    });
}
function getreqamount(code)
{
    var loantype = $("#loantype").val();
    // alert("loanType"+loantype);
    $.get(server_base_url + "Payroll/PayrollDetails/LoanApply/View", {
         ddo: getUserSessionElement(seDDOId)
    }).done(function (pdata) {

        pdata = JSON.stringify(pdata);
        var obj = JSON.parse(pdata);
        for (var k = 0; k < obj.length; k++) {
            var ecode = obj[k].empCode;
            var loanType = obj[k].loanTypeId;
            // alert("loanType"+loanType);
            if (code == ecode && loanType == loantype)
            {
                $('#requestamount').val(obj[k].amount);
                $('#applyNumber').val(obj[k].applyNo);
                $('#finYear').val(obj[k].financialYear);
                //$('#loantype').val(obj[k].loanType);
                var loanType = obj[k].loanTypeId;
                var ddo = $("#ddo").val();
                // var d1=new Date();
                $('#loanApplyDate').val(obj[k].dated);
                // alert(obj[k].dated);

            }
        }

    });
}

function savePayrollLoanAllotmentDetails() {
    if (checkUserPrivelege(pvCreateLoanAllotment)) {
        var ddo = $('#ddo').val();
        var loantype = $('#loantype').val();
        var order = $('#ordeId').val();
        var loannature = $('#loannature').val();
        var empcode = $('#empcode').val();
        var empname = $('#empname').val();
        var department = $('#department').val();
        var designation = $('#designation').val();
        var dated = $('#dated').val();
        var loan = $('#loan').val();
        var requestamount = $('#requestamount').val();
        var sanctionedamount = $('#sanctionedamount').val();
        var adjustamount = $('#adjustamount').val();
        var allotamount = $('#allotamount').val();
        var installmentAmount = $('#installmentAmount').val();
        var totalinstallment = $('#totalinstallment').val();
        var remarks = $('#remarks').val();
        var interestPercentage = $('#interestPercentage').val();
        var applyNumber = $('#applyNumber').val();
        var finYear = $('#finYear').val();
        if (interestPercentage == "" || interestPercentage == null)
        {
            interestPercentage = "0.0";
        }
        var demojson = {
            ddo: ddo,
            loanType: loantype,
            orderNo: order,
            loanNature: loannature,
            empCode: empcode,
            empName: empname,
            department: department,
            designation: designation,
            loan: loan,
            dated: dated,
            requestAmount: requestamount,
            sanctionedAmount: sanctionedamount,
            adjustAmount: adjustamount,
            allotAmount: allotamount,
            installmentAmount: installmentAmount,
            totalInstallment: totalinstallment,
            remarks: remarks,
            interestPercentage: interestPercentage,
            applyNo: applyNumber,
            financialYear: finYear
        };
        //alert(JSON.stringify(demojson));
        $.post(server_base_url + "Payroll/PayrollDetails/LoanAllotment/Save", {
            demojson: JSON.stringify(demojson),
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == existed) {
                displaySuccessMessages(successMsgDivCF, existMessage, "");
                return false;
            } else {
                saveOrUpdateCommonFunctionInLoanAllotment(data);
            }
        });
    } else {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, privilageNotExist);
    }
}
function  saveOrUpdateCommonFunctionInLoanAllotment(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);

        setTimeout(function () {

            scrolupfunction();
            var successmessagetobedisplayed = successMessage;
            if ($("#saveorupdate").val() == "update" || $("#saveorupdate").val() == "Update") {
                successmessagetobedisplayed = updateMessage;
            }
            payrollLoanAllotmentMaster("dashBoardBodyMainDiv");
            displaySuccessMessages(successMsgDivCF, successmessagetobedisplayed, "");

        }, 3000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function viewPayrollLoanAllotmentList(divId) {
    if (checkUserPrivelege(pvViewLoanAllotment)) {
        var columsName = ["Employee Name", "Order No", "Date", "Req.Amount", "Allo.Amount", "Inst.Amount", "Total Installments"];
        createTableWithEditDeletePrivilage(innerDivCF, "List of Employee Loan Allotted", divId, MsgDivInTableCF, columsName, pvUpdateLoanAllotment, pvDeleteLoanAllotment);
        $.get(server_base_url + "Payroll/PayrollDetails/LoanAllotment/View", {
              ddo: getUserSessionElement(seDDOId)
        }).done(function (bdata) {
            if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {
                if (bdata != null) {
                    //alert(bdata);
                    if (bdata.length > 0) {
                        var sno = 0;
                        var divIdBody = divId + "body";
                        $("#" + divId).append("<tbody id='" + divIdBody + "' class='table-striped table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var obj = JSON.stringify(bdata[i]);
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].empName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].orderNo + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].dated + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].requestAmount + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].allotAmount + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].installmentAmount + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].totalInstallment + "</td>");
                            if (checkUserPrivelege(pvUpdateLoanAllotment)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatepayrollLoanAllotment('" + encryptBase64String(encodeURI(obj)) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteLoanAllotment)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletepayrollLoanAllotment','viewPayrollLoanAllotmentList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                            }
                            $("#" + bdata[i]._id.$oid).append("</tr>");
                        }
                        $('#' + divId).append("</table>");
                        $('#' + divId).dataTable();
                    }
                }
            }
        });
    } else {
        displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, privilageNotExist);
    }
}
function updatepayrollLoanAllotment(obj) {
    if (checkUserPrivelege(pvUpdateLoanAllotment)) {
        obj = JSON.parse(decodeURI(decryptBase64String(obj)));
        resetAllValuesInSpecifiedDiv(FieldGroupForCF);
        $("#ddo option:contains(" + obj.ddo + ")").attr('selected', 'selected');
        $("#loannature option:contains(" + obj.loanNature + ")").attr('selected', 'selected');
//    $("#loantype option:contains(" + obj.loanType + ")").attr('selected', 'selected');
        $("#Row2Col1").text("").append(getLabel("Employee Code", "") + "<input type='hidden' id='empcode' value='" + obj.empCode + "'><h6><strong>" + obj.empCode + "</strong></h6>")
        $("#viewPayrollLoanAllotmentListbody tr").css("background-color", "white");
        $("#viewPayrollLoanAllotmentListbody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#loantype").val(obj.loanType);
        $("#ordeId").val(obj.orderNo);
        $("#empname").val(obj.empName);
        $("#department").val(obj.department);
        $("#designation").val(obj.designation);
        $("#dateId").val(obj.dated);
        $("#requestamount").val(obj.requestAmount);
        $("#sanctionedamount").val(obj.sanctionedAmount);
        $("#adjustamount").val(obj.adjustAmount);
        $("#dated").val(obj.dated);
        $("#empcode").val(obj.empCode);
        $("#department").val(obj.department);
        $("#designation").val(obj.designation);
        $("#requestamount").val(obj.requestAmount);
        $("#sanctionedamount").val(obj.sanctionedAmount);
        $("#adjustamount").val(obj.adjustAmount);
        $("#allotamount").val(obj.allotAmount);
        $("#installmentAmount").val(obj.installmentAmount);
        $("#totalinstallment").val(obj.totalInstallment);
        $("#remarks").val(obj.remarks);
        $("#applyNumber").val(obj.applyNo);
        $("#finYear").val(obj.financialYear);

        $("#Id").val(obj._id.$oid);
        $("#loannature").val(obj.loanNature);
        var loannature = obj.loanNature;
        if (loannature == "Non Refundable")
        {
            //alert("elem");
            $("#installmentAmount").attr('disabled', 'disabled');

        }
        $("#saveorupdate").val("update");
        $("#saveUpdateBtnId").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "payrollLoanAllotmentMaster('" + DashboardMainDivID + "')");
        setTimeout(function () {
            $('#ddo').attr('disabled', true);
            $('#loantype').attr('disabled', true);
        }, 700);
    }
}
function updatePayrollLoanAllotmentDetails() {
    if (checkUserPrivelege(pvUpdateLoanAllotment)) {
        var Id = $("#Id").val();
        var ddo = $('#ddo').val();
        var loantype = $('#loantype').val();
        var order = $('#ordeId').val();
        var loannature = $('#loannature').val();
        if (loannature == "0")
        {
            loannature = null;
        }
        var empcode = $('#empcode').val();
        var empname = $('#empname').val();
        var department = $('#department').val();
        var designation = $('#designation').val();
        var dated = $('#dated').val();
        var loan = $('#loan').val();
        var requestamount = $('#requestamount').val();
        var sanctionedamount = $('#sanctionedamount').val();
        var adjustamount = $('#adjustamount').val();
        var allotamount = $('#allotamount').val();
        var installmentAmount = $('#installmentAmount').val();
        var totalinstallment = $('#totalinstallment').val();
        var remarks = $('#remarks').val();
        var interestPercentage = $('#interestPercentage').val();
        var applyNumber = $('#applyNumber').val();
        var finYear = $('#finYear').val();
        var demojson = {
            ddo: ddo,
            loanType: loantype,
            orderNo: order,
            loanNature: loannature,
            empCode: empcode,
            empName: empname,
            department: department,
            designation: designation,
            loan: loan,
            dated: dated,
            requestAmount: requestamount,
            sanctionedAmount: sanctionedamount,
            adjustAmount: adjustamount,
            allotAmount: allotamount,
            installmentAmount: installmentAmount,
            totalInstallment: totalinstallment,
            remarks: remarks,
            interestPercentage: interestPercentage,
            applyNo: applyNumber,
            financialYear: finYear

        };
        $.post(server_base_url + "Payroll/PayrollDetails/LoanAllotment/Update", {
            demojson: JSON.stringify(demojson),
            id: Id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            saveOrUpdateCommonFunctionInLoanAllotment(data);
        });
    }
}
function deletepayrollLoanAllotment(Id) {
    if (checkUserPrivelege(pvDeleteLoanAllotment)) {
        $.post(server_base_url + "Payroll/PayrollDetails/LoanAllotment/Delete", {
            id: Id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                payrollLoanAllotmentMaster(DashboardMainDivID);
                displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
            }
        });
    } else {
        displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, privilageNotExist);
    }
}
function validateIsRefundable1()
{
    //alert("elem");
    var loannature = $('#loannature').val();
    if (loannature == "Non Refundable")
    {
        //alert("elem");
        $("#installmentAmount").val("0");
        $("#totalinstallment").val("0");
        $("#installmentAmount").attr('disabled', 'disabled');
        $("#totalinstallment").attr('disabled', 'disabled');
    } else if (loannature == "Refundable")
    {
        $("#installmentAmount").removeAttr('disabled', 'disabled');
        $("#totalinstallment").removeAttr('disabled', 'disabled');
        $("#installmentAmount").val("");
        $("#totalinstallment").val("");
    }

//    });

}
//function  validateInstalmentAmount()
//{
//    
//       $("#installmentAmountErr").text("");
//       $("#totalinstallmentErr").text("");
//      var allotamount =$("#allotamount").val();
//     var installmentAmount =$("#installmentAmount").val();
//      var totalinstallment = $("#totalinstallment").val();
//    
//     
//       var sanctionedamount = $("#sanctionedamount").val();
//     
//     if(sanctionedamount == null || sanctionedamount =="")
//     {
//            displaySmallErrorMessages("sanctionedamountErr", "Please enter sanction amount .");
//            $("#installmentAmount").val("");
//     }
//      else if(allotamount == null || allotamount =="")
//     {
//            displaySmallErrorMessages("allotamountErr", "Please enter Alloted Amount .");
//            $("#installmentAmount").val("");
//     }
//     else if(totalinstallment == null || totalinstallment =="")
//     {
//            
//         
//            displaySmallErrorMessages("totalinstallmentErr", "Please enter Total Installment .");
//            $("#installmentAmount").val("");
//     }
//     else
//     {
//        
//     
//            var installmentAmount=parseInt(installmentAmount);
//            var totalinstallment=parseInt(totalinstallment);
//             var totAmunt=installmentAmount*totalinstallment;
//             if( totAmunt> sanctionedamount)
//            {
//               displaySmallErrorMessages("installmentAmountErr", "please provide valid amount based on   amount and Total Installment.");
//            }
//      }
//}


