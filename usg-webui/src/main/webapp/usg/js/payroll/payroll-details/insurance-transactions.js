/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayInsuranceTranasction(divId) {
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=displayInsuranceTranasction("dashboardBodyMainDiv")>Insurance Transaction</a>');
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateInsuranceTransaction)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Insurance Transaction</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colInsuranceTransaction'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colInsuranceTransaction").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colInsuranceTransaction span").hasClass("glyphicon-minus-sign")) {
                $("#colInsuranceTransaction").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colInsuranceTransaction").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<div id='insuranceMessageDiv'  ></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        $("#FieldGroup").append("<input type='hidden' id='bid' >");
        $("#FieldGroup").append("<input type='hidden' id='fromFinyear' >");
        $("#FieldGroup").append("<input type='hidden' id='toFinyear' >");
        var fromFinYear = getFromDateFromFinancialYear();

        getTwoColumnInRow("FieldGroup", "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        $("#Row0Col2").append(getLabel("Employee Code", "required") + "" + getDropDown("employeeCode"));

      //  getAllDDOForIT();
        getLoggedInDDOInDropDown("ddo", "");
        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        getEmployeeDateInQTUsingEmp();
        $("#Row1Col1").append(getLabel_InputWithSpan("Employee Name", "", "employeeName", "", "readonly"));
        $("#Row1Col2").append(getLabel_InputWithSpan("Department", "", "department", "", "readonly"));

        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Designation", "", "designation", "", "readonly"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Dated", "required", "dated", "", "onkeypress='return false'"));
        var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
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

        $("#dated").datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            startDate: fromFinYear,
            endDate: toFinacialYear
        });
        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Insurance Name", "required") + "" + getDropDown("insuranceName"));
        $("#Row3Col2").append(getLabel_InputWithSpan("Policy Number", "required", "policyNumber", "", "onkeypress='return numericVal(event)'"));
        getAllInsuranceNameForIT();

        getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel_InputWithSpan("Installment Amount", "required", "monthlyInstallments", "", "onkeypress='return numericVal(event)'"));
        $("#Row4Col2").append(getLabel_InputWithSpan("Total Contributions", "required", "totalContributions", "", "onkeypress='return numericVal(event)'"));

        getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel_InputWithSpan("Last Insurance Date", "required", "lastInsuranceDate", "", "onkeypress='return false'"));
        $("#Row5Col2").append(getLabel_InputWithSpan("Insurance Details", "", "insuranceDetails", "", ""));

        $("#lastInsuranceDate").datepicker({
            format: "dd/mm/yyyy",
            autoclose: true
        });
        getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel_InputWithSpan("Total Installments", "required", "totalInstallments", "", "onkeypress='return numericVal(event)'"));
        $("#Row6Col2").append('<div  id="associationFieldDiv4"  class="form-group" />');
        $("#associationFieldDiv4").append('<label   class="col-md-3 control-label">Suppress</label>');
        $("#associationFieldDiv4").append('<div id="colmd94" class="col-md-9 " />');
        $("#colmd94").append("<input type='checkbox' id='suppress' / >");

        getTwoColumnInRow("FieldGroup", "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel("Effect Type", "required") + "" + getDropDown("effectType"));
        $("#Row7Col2").append('<label for="remarks" class="control-label">Remarks</label>');
        $("#Row7Col2").append('<textarea id="remarks" type="text" placeholder="remarks" class="form-control"/>');
        $("#panelMainBody").append("<div id='row8' class='row' />");

        $("#row").append(getLabel_InputWithSpan("<input type='hidden' id='hiddenfield' value='save'>"));
        getAllEffectType();

        $("#row8").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='savePensionHead' value='Save' class='btn btn-success bn'  onclick='insuranceTranasctionValidations()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='displayInsuranceTranasction()' class='btn btn-warning bn' id='reserPensionHead' name='reset' value='reset'>Reset</button></center></div>");
        $("#mainTabMenu").append("<div id='InscTransactionListPanelrowdiv' />");

        $("#ddo").attr("onchange", "getEmployeeDateInQTUsingEmp()");
        $("#employeeCode").attr("onchange", "setEmployeeDetailsInIT()");
        $("#insuranceName").attr("onchange", "validateInsuranceName()");
        
         $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });


        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

    }
    // viewInsuranceTranasctionList("InscTransactionLeftstatuslistpanelRow");
}

function validateInsuranceName() {
    $("#monthlyInstallments").val("");
    var insuranceName = $("#insuranceName").val();
    var ddo = $("#ddo").val();
    var employeeCode = $("#employeeCode").val();
    $.post(server_base_url + "/payroll/transactions/InsuranceTrasaction/GetRateOfSubscription", {
        insuranceName: insuranceName,
        ddo: ddo,
        employeeCode: employeeCode
    }).done(function (data) {
        if (data != null) {
            data = JSON.parse(data);
            data = JSON.parse(data);
            $("#monthlyInstallments").val(data.rateOfSub);
        }
    });
}

function calculateDate() {
    var effectType = $("#effectType").val();
    var lstVlaue = $("#lastInsuranceDate").val();

    var date1 = null;
    if ($("#effectType").val() == 'Monthly') {
        date1 = createDate("", 2, "");
    } else if ($("#effectType").val() == 'Quarterly') {
        date1 = createDate("", 4, "");
    } else if ($("#effectType").val() == 'Yearly') {
        date1 = createDate("", 1, 1);
    }

    var dd = date1.getDate();
    var mm = date1.getMonth();
    var yy = date1.getFullYear();
    if (mm == '0') {
        mm = 12;
        yy = date1.getFullYear() - 1;
    }
    if (mm < 10) {
        mm = "0" + date1.getMonth();
    }
    if (dd < 10) {
        dd = "0" + date1.getDate();
    }
    $("#lastInsuranceDate").val(dd + '/' + mm + '/' + yy);
}

function calculateMinusDate() {
    var effectType = $("#effectType").val();
    var lstVlaue = $("#lastInsuranceDate").val();

    var date1 = null;
    if ($("#effectType").val() == 'Monthly') {
        date1 = createUpdateMinusDate("", 1, "");
    } else if ($("#effectType").val() == 'Quarterly') {
        date1 = createUpdateMinusDate("", 2, "");
    } else if ($("#effectType").val() == 'Yearly') {
        date1 = createUpdateMinusDate("", 0, 1);
    }

    var dd = date1.getDate();
    var mm = date1.getMonth();
    var yy = date1.getFullYear();
    if (mm == '0') {
        mm = 12;
        yy = date1.getFullYear() - 1;
    }
    if (mm < 10) {
        mm = "0" + date1.getMonth();
    }
    if (dd < 10) {
        dd = "0" + date1.getDate();
    }
    $("#lastInsuranceDate").val(dd + '/' + mm + '/' + yy);
}


function createDate(days, months, years) {
    var lst = document.getElementById("lastInsuranceDate").value;
    var date = $("#lastInsuranceDate").datepicker("getDate");
    console.log(date);
    date.setDate(date.getDate() + days);
    date.setMonth(date.getMonth() + months);
    date.setFullYear(date.getFullYear() + years);
    return date;
}
function createMinusDate(days, months, years) {
    var lst = document.getElementById("lastInsuranceDate").value;
    var date = $("#lastInsuranceDate").datepicker("getDate");
    date.setDate(date.getDate() - days);
    date.setMonth(date.getMonth() - months);
    date.setFullYear(date.getFullYear() - years);
    return date;
}

function insuranceTranasctionValidations() {
    var employeeCode = $("#employeeCode").val();
    var ddo = $("#ddo").val();
    var employeeName = $("#employeeName").val();
    var department = $("#department").val();
    var designation = $("#designation").val();
    var dated = $("#dated").val();
    var insuranceName = $("#insuranceName").val();
    var policyNumber = $("#policyNumber").val();
    var monthlyInstallments = $("#monthlyInstallments").val();
    var totalContributions = $("#totalContributions").val();
    var lastInsuranceDate = $("#lastInsuranceDate").val();
    var insuranceDetails = $("#insuranceDetails").val();
    var totalInstallments = $("#totalInstallments").val();
    var effectType = $("#effectType").val();
    var remarks = $("#remarks").val();



    if (employeeCode == "" || ddo == "" || dated == "" || insuranceName == "" || policyNumber == "" || monthlyInstallments == "" || totalContributions == "" || lastInsuranceDate == "" || totalInstallments == "" || totalInstallments == undefined||effectType==""||effectType==undefined||effectType==null) {
        displayLargeErrorMessagesInCenterInRed("insuranceMessageDiv", "Please fill all mandatory fields");
        return false;
    } else {
        insuranceTranasctionSave();
    }
}
function resetInsuranceTransactions() {
    $("#InscTransactionListPanelrowdiv").text("");
    $("#employeeCode").val("");
  //  $("#ddo").val("");
    $("#employeeName").val("");
    $("#department").val("");
    $("#designation").val("");
    $("#dated").val("");
    $("#insuranceName").val("");
    $("#insuranceDetails").val("");
    $("#policyNumber").val("");
    $("#monthlyInstallments").val("");
    $("#totalContributions").val("");
    $("#lastInsuranceDate").val("");
    $("#totalInstallments").val("");
    $("#effectType").val("");
    $("#remarks").val("");
    $('#suppress').prop('checked', false);

    $("#employeeCodeErr").text("");
    $("#ddoErr").text("");
    $("#employeeNameErr").text("");
    $("#departmentErr").text("");
    $("#designationErr").text("");
    $("#datedErr").text("");
    $("#insuranceNameErr").text("");
    $("#insuranceDetailsErr").text("");
    $("#policyNumberErr").text("");
    $("#monthlyInstallmentsErr").text("");
    $("#totalContributionsErr").text("");
    $("#lastInsuranceDateErr").text("");
    $("#totalInstallmentsErr").text("");
    $("#effectTypeErr").text("");
    $("#remarksErr").text("");


    $("#insuranceDetails").attr('readonly', false);
    $("#totalInstallments").attr('readonly', false);

    $("#employeeCode").attr("readonly", false);
    $("#ddo").attr("readonly", false);
    $("#insuranceName").attr("readonly", false);
    $("#policyNumber").attr("readonly", false);
    $("#monthlyInstallments").attr("readonly", false);
    $("#totalContributions").attr("readonly", false);
    $("#effectType").attr("readonly", false);
    $("#remarks").attr("readonly", false);
}

function getAllEffectType(name, divId) {
    var states = ["Monthly", "Quarterly", "Yearly"];

    $("#effectType").append("<option value='' selected disabled>---- Select Effect Type----</option>");
    for (var i = 0; i < states.length; i++) {
        $("#effectType").append("<option  value='" + states[i] + "' >" + states[i] + "</option>");
    }
    $("#" + divId).val(name);
}
function insuranceTranasctionSave() {
    if (checkUserPrivelege(pvCreateInsuranceTransaction)) {
        var employeeCode = $("#employeeCode").val();
        var ddo = $("#ddo").val();
        var employeeName = $("#employeeName").val();
        var department = $("#department").val();
        var designation = $("#designation").val();
        var dated = $("#dated").val();
        var insuranceName = $("#insuranceName").val();
        var policyNumber = $("#policyNumber").val();
        var monthlyInstallments = $("#monthlyInstallments").val();
        var totalContributions = $("#totalContributions").val();
        var lastInsuranceDate = $("#lastInsuranceDate").val();
        var insuranceDetails = $("#insuranceDetails").val();
        var totalInstallments = $("#totalInstallments").val();
        var effectType = $("#effectType").val();
        var remarks = $("#remarks").val();
        var salaryProcess;
        var suppressedlist = [];
        var checked;

        if ($('#suppress').prop('checked')) {
            checked = true;
        } else {
            checked = false;
        }
        if ($('#suppress').prop('checked') && (effectType != "" || effectType != undefined || effectType != null)) {
            calculateAddUpdateDate();
            lastInsuranceDate = $("#lastInsuranceDate").val();
        }
        var obj = {
            empCode: employeeCode,
            ddo: ddo,
            employeeName: employeeName,
            department: department,
            designation: designation,
            dated: dated,
            inscName: insuranceName,
            policyNumber: policyNumber,
            installmentAmount: monthlyInstallments,
            totalContribution: totalContributions,
            lastInscDate: lastInsuranceDate,
            inscDetails: insuranceDetails,
            totalInstallment: totalInstallments,
            effectType: effectType,
            inscRemarks: remarks,
            checked: checked
        };

        obj = JSON.stringify(obj);

        $.post(server_base_url + "/payroll/Transactions/InsuranceTransactions/Save", {
            obj: obj,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == validateDateValue) {
                displaySmallErrorMessagesInRed("lastInsuranceDateErr", "Last Insurance Date is Gratter than Retirement Date", "");

            } else if (data == salaryAlreadyProcessed) {
                $("#insuranceMessageDiv").focus();
                displaySuccessMessages("insuranceMessageDiv", "Salary Already Processed", "");
                setTimeout(function () {
                    displayInsuranceTranasction();
                }, 3000);
            } else if (data == duplicate) {
                displayErrorMessages("insuranceMessageDiv", existed, "");
                setTimeout(function () {
                    displayInsuranceTranasction();
                }, 3000);
            } else if (data == fail) {
                displaySmallErrorMessagesInRed("insuranceMessageDiv", "Invalid username / password" + "<br/><br/>");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("insuranceMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("insuranceMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {
                $("#employeeCode").prop("disabled", true);
                $("#ddo").prop("disabled", true);
                $("#employeeName").prop("disabled", true);
                $("#department").prop("checked", false);
                $("#designation").prop("checked", false);
                $("#dated").prop("checked", false);
                $("#insuranceName").prop("checked", false);
                $("#policyNumber").prop("checked", false);
                $("#monthlyInstallments").prop("checked", false);
                $("#totalContributions").prop("checked", false);
                $("#lastInsuranceDate").prop("checked", false);
                $("#insuranceDetails").prop("checked", false);
                $("#totalInstallments").attr('disabled', true);
                $("#effectType").attr('disabled', true);
                $("#remarks").attr('disabled', true);

                $("#employeeCode").prop("readonly", false);
                $("#ddo").prop("readonly", false);
                $("#employeeName").prop("readonly", false);
                $("#department").prop("readonly", false);
                $("#designation").prop("readonly", false);
                $("#dated").prop("readonly", false);
                $("#inscName").prop("readonly", false);
                $("#policyNumber").prop("readonly", false);
                $("#monthlyInstallment").prop("readonly", false);
                $("#totalContribution").prop("readonly", false);
                $("#effectType").prop("readonly", false);
                $("#remarks").prop("readonly", false);

                displaySuccessMessages("insuranceMessageDiv", successMessage, "");
                setTimeout(function () {
                    displayInsuranceTranasction();
                }, 3000);
            }
        });
    } else {
        displayLargeErrorMessagesInCenterInRed("insuranceMessageDiv", privilageNotExist);
    }
}

function getAllDDOForIT() {
    $.post(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (bdata) {
        $("#ddo").append("<option value=''>----Select DDO----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#ddo").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].ddoName + "</option>");
        }
    });
}

function getAllInsuranceNameForIT() {
    $.post(server_base_url + "/payroll/transactions/InsuranceTransaction/InsuranceName", {
    }).done(function (bdata) {

        bdata = JSON.parse(bdata);
        $("#insuranceName").append("<option value=''>----Select Insurance Name----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#insuranceName").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].shortDescription + "</option>");
        }
    });
}

function setEmployeeDetailsInIT() {

    var employeeCode = $("#employeeCode").val();
    var ddo = $("#ddo").val();
    $.post(server_base_url + "/payroll/transactions/InsuranceTransactions/GetEmployee", {
        employeeCode: employeeCode,
        ddo: ddo
    }).done(function (data) {

        data = JSON.parse(data);

        if (data[0].department != null) {
            $("#department").attr('readonly', true);
            $("#department").val(data[0].department);
        }

        if (data[0].designation != null) {
            $("#designation").attr('readonly', true);
            $("#designation").val(data[0].designation);
        }
        if (data[0].employeeName != null) {
            $("#employeeName").attr('readonly', true);
            $("#employeeName").val(data[0].employeeName);
        }

        $("#totalContributions").attr('readonly', true);
        $("#totalContributions").val("0");
        viewInsuranceTranasctionList("InscTransactionListPanelrowdiv");
    });
}



















//function setEmployeeDetailsInIT() {
//
//    var employeeCode = $("#employeeCode").val();
//    var ddo = $("#ddo").val();
//    $.post(server_base_url + "/payroll/transactions/InsuranceTransactions/GetEmployee", {
//        employeeCode: employeeCode,
//        ddo: ddo
//    }).done(function (data) {
//
//        data = JSON.parse(data);
//        if (data[0].department != null) {
//            $("#department").attr('readonly', true);
//            $("#department").val(data[0].department);
//        }
//        if (data[0].ddo != null) {
//            $("#ddo").attr('readonly', true);
//            $("#ddo").val(data[0].ddo);
//        }
//        if (data[0].dated != null) {
//            $("#dated").attr('readonly', true);
//            $("#dated").val(data[0].dated);
//        }
//        if (data[0].designation != null) {
//            $("#designation").attr('readonly', true);
//            $("#designation").val(data[0].designation);
//        }
//        if (data[0].employeeName != null) {
//            $("#employeeName").attr('readonly', true);
//            $("#employeeName").val(data[0].employeeName);
//        }
//        if (data[0].policyNumber != null) {
//            $("#policyNumber").attr('readonly', true);
//            $("#policyNumber").val(data[0].policyNumber);
//        }
//        if (data[0].monthlyInstallment != null) {
//            $("#monthlyInstallments").attr('readonly', true);
//            $("#monthlyInstallments").val(data[0].monthlyInstallment);
//        }
//        if (data[0].inscName != null) {
//            $("#insuranceName").attr('readonly', true);
//            $("#insuranceName").val(data[0].inscName);
//        }
//        if (data[0].inscDetails != null) {
//            $("#insuranceDetails").attr('readonly', true);
//            $("#insuranceDetails").val(data[0].inscDetails);
//
//
//        }
//        if (data[0].lastInscDate != null) {
//            $("#lastInsuranceDate").attr('readonly', true);
//            $("#lastInsuranceDate").val(data[0].lastInscDate);
//        }
//        if (data[0].effectType != null) {
//            $("#effectType").attr('readonly', true);
//            $("#effectType").val(data[0].effectType);
//
//
//        }
//        if (data[0].installmentAmount != null) {
//            $("#monthlyInstallments").attr('readonly', true);
//            $("#monthlyInstallments").val(data[0].installmentAmount);
//        }
//        if (data[0].totalInstallment != null) {
//            $("#totalInstallments").attr('readonly', true);
//            $("#totalInstallments").val(data[0].totalInstallment);
//        }
//        if (data[0].installmentAmount != null) {
//            $("#monthlyInstallments").attr('readonly', true);
//            $("#monthlyInstallments").val(data[0].installmentAmount);
//        }
//        if (data[0].totalContribution != null) {
//            $("#totalContributions").attr('readonly', true);
//            $("#totalContributions").val(data[0].totalContribution);
//        } else {
//            $("#totalContributions").attr('readonly', true);
//            $("#totalContributions").val("0");
//        }
//        if (data[0].inscRemarks != null) {
//            $("#remarks").attr('readonly', true);
//            $("#remarks").val(data[0].inscRemarks);
//        }
//
//
//        if (data[0].checked == true) {
//            $("#suppress").attr('checked', true);
//        } else {
//            $("#suppress").attr('checked', false);
//        }
//
//    });
//}

function viewInsuranceTranasctionList(divId) {
    //InscTransactionListPanelrowdiv
    if (checkUserPrivelege(pvViewInsuranceTransaction)) {
        $("#" + divId).text("").append("<div id='InscTransactionListPanel' class='panel panel-blue' />");
        $("#InscTransactionListPanel").append("<div id='InscTransactionListPanelHeading' class='panel-heading' />");
        $("#InscTransactionListPanelHeading").append("<h4 id='InscTransactionfirstHeader1' class='panel-title' />");
        $("#InscTransactionfirstHeader1").append("<class='panel-title' class='panel_font' data-parent='#accordion2'><center>Insurance Transaction Detail(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colInsuranceTransactionList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#InscTransactionListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colInsuranceTransactionList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colInsuranceTransactionList span").hasClass("glyphicon-minus-sign")) {
                $("#colInsuranceTransactionList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colInsuranceTransactionList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='InscTransactionPanellistpanelMainBody' class = 'panel-body' />");
        $("#InscTransactionPanellistpanelMainBody").append("<div id='InscTransactionlistMessageDiv'  ></div>");
        $("#InscTransactionPanellistpanelMainBody").append("<div id='InscTransactionlistpanelRow' class='row' />");
        $("#InscTransactionlistpanelRow").append("<div id='incErrorDiv'>");
        $("#InscTransactionlistpanelRow").append("<div id='InscTransactionLeftstatuslistpanelRow' class='table-responsive' />");

        $("#InscTransactionLeftstatuslistpanelRow").append("<div class='tab-pane' id='viewInsurance'/>");
        $("#viewInsurance").append("<div class='table-responsive' id='viewInsuranceSectionTableDiv' />");
        $("#viewInsuranceSectionTableDiv").append("<table class='table table-bordered' id='displayInsuranceTable' />");
        $("#displayInsuranceTable").append("<thead class=''><tr id='displaypensionHeadTableRow'>"
                + "<th class='sno_width'> S.No</th>"
                + "<th class='table_col_width'><i class='fa'></i>DDO</th>"
                + "<th class='table_col_width'><i class='fa'></i>Employee Code</th>"
                + "<th class='table_col_width'><i class='fa'></i>Employee Name</th>"
                + "<th class='table_col_width'><i class='fa'></i>Insurance Name</th>"
                + "<th class='table_col_width'><i class='fa'></i>Policy Number</th>"
                + "<th class='table_col_width'><i class='fa'></i>Last Insurance Date</th>");
        if (checkUserPrivelege(pvUpdateInsuranceTransaction))
            $("#displaypensionHeadTableRow").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
        if (checkUserPrivelege(pvDeleteInsuranceTransaction))
            $("#displaypensionHeadTableRow").append("<th class='table_anchor_width'><i class='fa'></i> Delete</th>");
        $("#displaypensionHeadTableRow").append("</tr></thead>");
        $.get(server_base_url + "/payroll/transactions/InsuranceTransactions/List", {
            employeeCode: $("#employeeCode").val()
        }).done(function (data) {

            if (data == fail || data.statuscode == fail) {
                displayLargeErrorMessagesInCenterInRed("InscTransactionlistMessageDiv", emptyListMessage + "<br/><br/>");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("InscTransactionlistMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException || data.statuscode == statusException) {
                displayLargeErrorMessagesInCenterInRed("InscTransactionlistMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession || data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayLargeErrorMessagesInCenterInRed("InscTransactionlistMessageDiv", emptyListMessage + "<br/><br/>");
            } else if (data != null) {
                if (data.length > 0) {
                    var sno = 0;

                    $("#displayInsuranceTable").append("<tbody id='displayInsuranceTableBody' class='table-striped table-bordered' />");
                    for (var i = data.length - 1; i >= 0; i--) {
                        sno++;
                        var obj = {
                            aid: data[i]._id.$oid,
                            empCode: data[i].employeeCode,
                            ddo: data[i].ddo,
                            employeeName: data[i].employeeName,
                            department: data[i].department,
                            designation: data[i].designation,
                            dated: data[i].dated,
                            inscName: data[i].inscName,
                            policyNumber: data[i].policyNumber,
                            installmentAmount: data[i].installmentAmount,
                            totalContribution: data[i].totalContributions,
                            lastInscDate: data[i].lastInsuranceDate,
                            inscDetails: data[i].insuranceDetails,
                            totalInstallment: data[i].totalInstallments,
                            effectType: data[i].effectType,
                            inscRemarks: data[i].remarks
                        };

                        obj = JSON.stringify(data[i]);

                        $("#displayInsuranceTableBody").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].ddo + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].empCode + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].employeeName + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].inscName + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].policyNumber + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].lastInscDate + "</td>");
                        if (checkUserPrivelege(pvUpdateInsuranceTransaction)) {
                            $("#" + data[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateInsuranceTranasction('" + encodeURI(obj) + "','" + data[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                        }
                        if (checkUserPrivelege(pvDeleteInsuranceTransaction)) {
                            $("#" + data[i]._id.$oid).append("<td onclick=deletePopUp('deleteInsuranceTranasction','displayInsuranceTranasction','" + data[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                        }
                    }
                    $('#displayInsuranceTable').append("</table>");
                    $('#displayInsuranceTable').dataTable();
                }
            }

        });
    }
}

function deleteInsuranceTranasction(id) {
    if (checkUserPrivelege(pvDeleteInsuranceTransaction)) {
        $.post(server_base_url + "/payroll/transactions/InsuranceTransactions/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail || data.statuscode == fail) {
                displayLargeErrorMessagesInCenterInRed("incErrorDiv", emptyListMessage + "<br/><br/>");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("incErrorDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException || data.statuscode == statusException) {
                displayLargeErrorMessagesInCenterInRed("incErrorDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession || data.statuscode == invalidSession) {
                callSessionTimeout();
            } else {
                displaySuccessMessages("incErrorDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    displayInsuranceTranasction();
                }, 4000);
            }
        });
    } else {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, privilageNotExist);
    }
}

function getAllEffectTypeForUpdate(name, divId) {
    var states = ["Monthly", "Quarterly", "Yearly"];

    $("#updateEffectType").append("<option value='' selected disabled>---- Select Effect Type----</option>");
    for (var i = 0; i < states.length; i++) {
        $("#updateEffectType").append("<option  value='" + states[i] + "' >" + states[i] + "</option>");
    }
    $("#" + divId).val(name);
}
function  updateInsuranceTranasction(obj1, id) {
    if (checkUserPrivelege(pvUpdateInsuranceTransaction)) {

        var obj = decodeURI(obj1);
        var obj = JSON.parse(obj);

        if (obj.checked == true) {
            $("#suppress").prop("checked", true);

        } else {
            $("#suppress").prop('checked', false);
        }
        $("#employeeCode").prop("readonly", true);
        $("#displayInsuranceTableBody tr").css("background-color", "white");
        $("#displayInsuranceTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#employeeName").prop("readonly", true);
        $("#department").prop("readonly", true);
        $("#designation").prop("readonly", true);
        $("#dated").prop("readonly", true);
        $("#inscName").prop("readonly", false);
        $("#policyNumber").prop("readonly", false);
        $("#ddo").attr('readonly', true);
        $("#monthlyInstallment").prop("readonly", true);
        $("#totalContributions").prop("readonly", true);
        $("#effectType").prop("readonly", false);
        $("#remarks").prop("readonly", false);


        $("#ddo").val(obj.ddo);
        $("#ddo option:contains(" + obj.ddo + ")").attr('selected', 'selected');
        getEmployeeDateInQTUsingEmp();
        setTimeout(function () {
            $("#employeeCode").val(obj.empCode);
            $("#employeeCode option:contains(" + obj.empCode + ")").attr('selected', 'selected');

        }, 2000);
        $("#employeeName").val(obj.employeeName);
        $("#department").val(obj.department);
        $("#designation").val(obj.designation);
        $("#dated").val(obj.dated);
        $("#insuranceName").val(obj.inscName);
        $("#policyNumber").val(obj.policyNumber);
        $("#monthlyInstallments").val(obj.installmentAmount);
        $("#totalInstallments").val(obj.totalInstallment);
        $("#insuranceDetails").val(obj.inscDetails);
        $("#totalContributions").val(obj.totalContribution);
        $("#lastInsuranceDate").val(obj.lastInscDate);
        $("#lastInsuranceDate").datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            endDate: 0
        });

        $("#effectType").val(obj.effectType);
        $("#remarks").val(obj.remarks);
        $("#insuranceName option:contains(" + obj.inscName + ")").attr('selected', 'selected');
        $("#row8").text("").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='savePensionHead' value='Save' class='btn btn-success bn'  onclick=updateInsuranceTranasctionData('" + obj.checked + "','" + id + "')>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button'  class='btn btn-warning bn' onclick='displayInsuranceTranasction()' name='reset' value='reset'>Back</button></center></div>");

    }
}

function updateInsuranceTranasctionData(obj, id) {
    if (checkUserPrivelege(pvUpdateInsuranceTransaction)) {
        var employeeCode = $("#employeeCode").val();

        var ddo = $("#ddo").val();
        var employeeName = $("#employeeName").val();
        var department = $("#department").val();
        var designation = $("#designation").val();
        var dated = $("#dated").val();
        var insuranceName = $("#insuranceName").val();
        var policyNumber = $("#policyNumber").val();
        var monthlyInstallments = $("#monthlyInstallments").val();
        var totalContributions = $("#totalContributions").val();
        var lastInsuranceDate = $("#lastInsuranceDate").val();
        var insuranceDetails = $("#insuranceDetails").val();
        var totalInstallments = $("#totalInstallments").val();
        var effectType = $("#effectType").val();
        var remarks = $("#remarks").val();
        var suppressedlist = [];
        var checked;
        if (employeeCode == "" || ddo == "" || dated == "" || insuranceName == "" || policyNumber == "" || monthlyInstallments == "" || totalContributions == "" || lastInsuranceDate == "" || totalInstallments == "" || totalInstallments == undefined||effectType==""||effectType==undefined||effectType==null) {
            displayLargeErrorMessagesInCenterInRed("insuranceMessageDiv", "Please fill all mandatory fields");
            return false;
        } else {
            if (obj == 'true') {
                if ($('#suppress').prop('checked')) {
                    lastInsuranceDate = $("#lastInsuranceDate").val();

                } else {
                    calculateSubUpdateDate();
                    lastInsuranceDate = $("#lastInsuranceDate").val();

                }
            } else if (obj == 'false') {
                if ($('#suppress').prop('checked')) {
                    calculateAddUpdateDate();
                    lastInsuranceDate = $("#lastInsuranceDate").val();
                } else {
                    lastInsuranceDate = $("#lastInsuranceDate").val();
                }
            }

            if ($('#suppress').prop('checked')) {
                checked = true;
            } else {
                checked = false;
            }

            var obj1 = {
                empCode: employeeCode,
                ddo: ddo,
                employeeName: employeeName,
                department: department,
                designation: designation,
                dated: dated,
                inscName: insuranceName,
                policyNumber: policyNumber,
                installmentAmount: monthlyInstallments,
                totalContribution: totalContributions,
                lastInscDate: lastInsuranceDate,
                inscDetails: insuranceDetails,
                totalInstallment: totalInstallments,
                effectType: effectType,
                remarks: remarks,
                checked: checked
            };
            obj1 = JSON.stringify(obj1);
            $.post(server_base_url + "/payroll/Transactions/InsuranceTransactions/Update", {
                object: obj1,
                id: id,
                userid: getUserSessionElement("userId")
            }).done(function (data) {


                if (data == validateDateValue) {
                    displaySmallErrorMessagesInRed("lastInsuranceDateErr", "Last Insurance Date is Gratter than Retirement Date", "");

                } else if (data == salaryAlreadyProcessed) {
                    displaySuccessMessages("insuranceMessageDiv", "Salary Already Processed", "");

                    setTimeout(function () {
                        displayInsuranceTranasction();
                    }, 1000);

                } else if (data == duplicate) {
                    displayErrorMessages("insuranceMessageDiv", existed, "");
                    setTimeout(function () {
                        displayInsuranceTranasction();
                    }, 3000);
                } else if (data == fail || data.statuscode == fail) {
                    displaySmallErrorMessagesInRed("insuranceMessageDiv", "Invalid username / password" + "<br/><br/>");
                } else if (data == unauthorized || data.statuscode == unauthorized) {
                    displaySmallErrorMessagesInRed("insuranceMessageDiv", unauthorizedMessage + "<br/><br/>");
                } else if (data == statusException || data.statuscode == statusException) {
                    displaySmallErrorMessagesInRed("insuranceMessageDiv", statusExceptionMessage + "<br/><br/>");
                } else if (data == invalidSession || data.statuscode == invalidSession) {
                    callSessionTimeout();
                } else if (data != null) {
                    $("#employeeCode").prop("disabled", true);
                    $("#ddo").prop("disabled", true);
                    $("#employeeName").prop("disabled", true);
                    $("#department").prop("checked", false);
                    $("#designation").prop("checked", false);
                    $("#dated").prop("checked", false);
                    $("#insuranceName").prop("checked", false);
                    $("#policyNumber").prop("checked", false);
                    $("#monthlyInstallments").prop("checked", false);
                    $("#totalContributions").prop("checked", false);
                    $("#lastInsuranceDate").prop("checked", false);
                    $("#insuranceDetails").prop("checked", false);
                    $("#totalInstallments").attr('disabled', true);
                    $("#effectType").attr('disabled', true);
                    $("#remarks").attr('disabled', true);
                    displaySuccessMessages("insuranceMessageDiv", updateMessage, "");
                    setTimeout(function () {
                        displayInsuranceTranasction();
                    }, 4000);
                }
            });
        }


    }
}

function calculateAddUpdateDate() {
    var effectType = $("#effectType").val();

    var date1 = null;
    if ($("#effectType").val() == 'Monthly') {
        date1 = createUpdateDate("", 1, "");
    } else if ($("#effectType").val() == 'Quarterly') {
        date1 = createUpdateDate("", 3, "");
    } else if ($("#effectType").val() == 'Yearly') {
        date1 = createUpdateDate("", "", 1);
    }

    $("#lastInsuranceDate").val(date1);
}

function calculateSubUpdateDate() {
    var effectType = $("#effectType").val();

    var date1 = null;
    if ($("#effectType").val() == 'Monthly') {

        date1 = createUpdateMinusDate("", 1, "");


    } else if ($("#effectType").val() == 'Quarterly') {

        date1 = createUpdateMinusDate("", 3, "");


    } else if ($("#effectType").val() == 'Yearly') {
        date1 = createUpdateMinusDate("", "", 1);

    }

    $("#lastInsuranceDate").val(date1);
}

function createUpdateDate(days, months, years) {
    var lst = document.getElementById("lastInsuranceDate").value;

    var date = [];
    date = lst.split('/');
    var dd = date[0];
    var mm = date[1];
    var yy = date[2];

    var fResult = mm + '/' + dd + '/' + yy;

    var cDate = new Date(fResult);

    var mon = cDate.getMonth() + 1 + months;

    var day = cDate.getDate() + days;
    var year = cDate.getFullYear() + years;

    if (mon > 12) {
        mon = mon - 12;
        mon = 0 + mon;
        year = cDate.getFullYear() + 1;

    }
    if (mon == 0) {
        mon = 12;
        year = cDate.getFullYear() - 1;
    }

    if (mon < 0) {
        mon = mon + 12;
        year = cDate.getFullYear() - 1;
    }

    if (mon < 10) {
        mon = "0" + mon;
    }
    if (day < 10) {
        day = "0" + day;
    }

    var cfResult = day + '/' + mon + '/' + year;

    return cfResult;
}


function createUpdateMinusDate(days, months, years) {
    var lst = document.getElementById("lastInsuranceDate").value;

    var date = [];
    date = lst.split('/');
    var dd = date[0];
    var mm = date[1];
    var yy = date[2];

    var fResult = mm + '/' + dd + '/' + yy;

    var cDate = new Date(fResult);

    var mon = cDate.getMonth() + 1 - months;
    var day = cDate.getDate() - days;
    var year = cDate.getFullYear() - years;

    if (mon > 12) {
        mon = mon - 12;
        mon = 0 + mon;
        year = cDate.getFullYear() + 1;

    }
    if (mon == 0) {
        mon = 12;
        year = cDate.getFullYear() - 1;
    }

    if (mon < 0) {
        mon = mon + 12;
        year = cDate.getFullYear() - 1;

    }

    if (mon < 10) {
        mon = "0" + mon;
    }
    if (day < 10) {
        day = "0" + day;
    }

    var cfResult = day + '/' + mon + '/' + year;

    return cfResult;
}
