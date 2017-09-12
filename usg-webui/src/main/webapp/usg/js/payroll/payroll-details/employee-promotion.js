/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function payrollEmployeePromotionMaster(divId) {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=payrollEmployeePromotionMaster("dashboardBodyMainDiv")>Employee Promotion</a>');
    createFormWithPrivilage(divId, innerDivCF, "Employee Promotion", FieldGroupForCF, successMsgDivCF, pvCreateEmployeePromotion);
    if (checkUserPrivelege(pvCreateEmployeePromotion)) {
        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("odlDDO"));
        $("#Row0Col2").append(getLabel_InputWithSpan("Prom./Trans.Code ", "required", "promOrTransCode", "", ""));
        getLoggedInDDOInDropDown("odlDDO", "");
        getEmployeeDataInEPUsingEmp();
        //$("#odlDDO").attr("onchange", "getEmployeeDataInEPUsingEmp()");
        getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("Employee Code", "required") + "" + getDropDown("employeeCode"));
        $("#Row1Col2").append(getLabel("Status", "required") + "" + getDropDown("status"));
        $("#employeeCode").attr("onchange", "setEmployeeDetailsInEP()");
        $("#status").attr("onchange", "enableconditions()");
        $("#" + FieldGroupForCF).append("<input type='hidden' id='employeeId' >");
        $("#" + FieldGroupForCF).append("<input type='hidden' id='category' >");
        $("#" + FieldGroupForCF).append("<input type='hidden' id='Id' >");
        getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Employee Name", "", "employeeName", "", "readonly"));
        $("#Row2Col2").append(getLabel("New DDO", "required") + "" + getDropDown("ddo"));
        getTwoColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Location", "") + "" + getDropDown("Oldlocation"));
        //  $("#Row3Col1").append(getLabel_InputWithSpan("Location", "", "Oldlocation", "", "readonly"));
        getLoggedInLocationInDropDown("Oldlocation", "");
        $("#Row3Col2").append(getLabel("New Location", "") + "" + getDropDown("location"));
        getTwoColumnInRow(FieldGroupForCF, "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel_InputWithSpan("Department ", "", "Olddepartment", "", "readonly"));
        $("#Row4Col2").append(getLabel("New Department", "required") + "" + getDropDown("department"));
        getTwoColumnInRow(FieldGroupForCF, "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel_InputWithSpan("Designation", "", "Olddesignation", "", "readonly"));
        $("#Row5Col2").append(getLabel("New Designation", "required") + "" + getDropDown("designation"));
        getTwoColumnInRow(FieldGroupForCF, "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel_InputWithSpan("Grade", "", "Oldgrade", "", "readonly"));
        $("#Row6Col2").append(getLabel("New Grade", "required") + "" + getDropDown("gradePromo"));
        getTwoColumnInRow(FieldGroupForCF, "Row6a", "Row6aCol1", "Row6aCol2");
        $("#Row6aCol1").append(getLabel_InputWithSpan("Nature", "", "Oldnature", "", "readonly"));
        $("#Row6aCol2").append(getLabel("New Fund Type", "required") + "" + getDropDown("fundType"));
        getTwoColumnInRow(FieldGroupForCF, "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel_InputWithSpan("Posting City", "", "OldpostingCity", "", "readonly"));
        $("#Row7Col2").append(getLabel("New Budget Head", "required") + "" + getDropDown("budgetHead"));
        getTwoColumnInRow(FieldGroupForCF, "Row8", "Row8Col1", "Row8Col2");
        $("#Row8Col1").append(getLabel_InputWithSpan("Fund Type", "", "OldfundType", "", "readonly"));
        $("#Row8Col2").append(getLabel("New Nature", "required") + "" + getDropDown("natureType"));
        getTwoColumnInRow(FieldGroupForCF, "Row9", "Row9Col1", "Row9Col2");
        $("#Row9Col1").append(getLabel_InputWithSpan("Budget Head", "", "OldbudgetHead", "", "readonly"));
        $("#Row9Col2").append(getLabel("New Discipline", "required") + "" + getDropDown("discipline"));
        getTwoColumnInRow(FieldGroupForCF, "Row10", "Row10Col1", "Row10Col2");
        $("#Row10Col1").append(getLabel_InputWithSpan("Discipline", "", "Olddiscipline", "", "readonly"));
        $("#Row10Col2").append(getLabel("New Posting City", "required") + "" + getDropDown("postingCity"));
        getTwoColumnInRow(FieldGroupForCF, "Row11", "Row11Col1", "Row11Col2");
        $("#Row11Col1").append(getLabel_InputWithSpan("Association", "", "Oldassociation", "", "readonly"));
        $("#Row11Col2").append(getLabel("New Association", "") + "" + getDropDown("association"));
        getTwoColumnInRow(FieldGroupForCF, "Row12", "Row12Col1", "Row12Col2");
        $("#Row12Col1").append(getLabel_InputWithSpan("Bank", "", "Oldbank", "", "readonly"));
        $("#Row12Col2").append(getLabel("New Bank", "") + "" + getDropDown("bank"));
        getTwoColumnInRow(FieldGroupForCF, "Row13", "Row13Col1", "Row13Col2");
        $("#Row13Col1").append(getLabel_InputWithSpan("Account Number", "", "Oldacnumber", "", "readonly"));
        $("#Row13Col2").append(getLabel_InputWithSpan("New Account Number", "", "acnumber", "", ""));
        getTwoColumnInRow(FieldGroupForCF, "Row13a", "Row13aCol1", "Row13aCol2");
        $("#Row13aCol1").append(getLabel_InputWithSpan("Basic [Pay Band]", "", "Oldbasic", "", "readonly"));
        $("#Row13aCol2").append(getLabel_InputWithSpan("New Basic [Pay Band]", "required", "basic", "", "onkeypress='return validateNumber(event)'"));
        getTwoColumnInRow(FieldGroupForCF, "Row14", "Row14Col1", "Row14Col2");
        $("#Row14Col1").append(getLabel_InputWithSpan("Grade Pay", "", "OldgradePay", "", "readonly"));
        $("#Row14Col2").append(getLabel_InputWithSpan("New Grade Pay", "", "gradePay", "", ""));
        getTwoColumnInRow(FieldGroupForCF, "Row15", "Row15Col1", "Row15Col2");
        $("#Row15Col1").append(getLabel_InputWithSpan("Increment Percentage", "", "OldincrementPercentage", "", "readonly"));
        $("#Row15Col2").append(getLabel_InputWithSpan("New Next Inc.Amt/Percentage", "required", "incrementPercentage", "", ""));
        getTwoColumnInRow(FieldGroupForCF, "Row16", "Row16Col1", "Row16Col2");
        $("#Row16Col1").append(getLabel_InputWithSpan("Dated", "required", "dated", "", ""));
        $("#Row16Col2").append(getLabel_InputWithSpan("Increment Due Date", "required", "duedate", "", ""));
        $("#dated").datepicker();
//        $("#duedate").datepicker();
        var dateString = new Date();
        var day = dateString.getDate();
        var month = (dateString.getMonth() == 0) ? 12 : (dateString.getMonth());
        var year = (dateString.getMonth() == 0) ? (dateString.getFullYear() - 1) : dateString.getFullYear();
        var dateObject = new Date(month + "/" + day + "/" + year);
        $("#duedate").datepicker(
                {
                    startDate: dateObject,
                    beforeShowDay: function (date) {
                        if (date.getDate() == 1) {
                            return true;
                        }
                        return false;
                    }
                });
        getTwoColumnInRow(FieldGroupForCF, "Row17", "Row17Col1", "Row17Col2");
        $("#Row17Col1").append(getLabel("Remarks", "") + "" + getTextareaWithErrSpan("remarks", "", "", ""));
        //Drop Down Values Goes Here
        $("#Row17Col2").append("<div id='errorIdMsg'/>");
        viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");
        //  viewOption("financial/common/DDOListForOptions", "", "ddoName", "odlDDO", "DDO");
        viewOption("hrms/salary/City/ViewList", "", "cityName", "postingCity", "City");
        viewOption("hrms/salary/Bank/ViewList", "", "bankname", "bank", "Bank");
        viewOption("financial/account/Common/Location/ViewList", "", "locationName", "location", "Location");
        viewOption("hrms/salary/Association/ViewList", "", "associationName", "association", "Association");
        viewOptionIdName("financial/common/DDOListForOptions", "", "location", "location", "Location");
        var monthOptions = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        getHardCodedOptions("dueMonth", "Due Month", monthOptions);
        getHardCodedOptions("status", "Status", ["Promotion/Higher Grade", "Transfer", "Deputation"]);
        getYearForOption("", "dueYear", "Due Year");
//    var statusOptions = ["Status 1", "Status 2"];
//    getHardCodedOptions("", "status", "Status", statusOptions);
        $("#ddo").attr("onchange", "getdatatoemployeeUsingDDO();getDepartmentBasedOnDDO();getLocationBasedOnDDO()");
        $("#designation").attr("onchange", "getFTGradeClassBasedOnDDODESIGNATION()");
        $("#fundType").attr("onchange", "getBudgetHeadBasedOnDDODesignationFundType()");
        $("#budgetHead").attr("onchange", "getNatureTypeBasedOnDDODesignationFundTypeBudgetHead()");
        $("#natureType").attr("onchange", "getDesciplineBasedOnDDODesignationFundTypeBudgetHeadNatureType()");
        $("#gradePromo").attr("onchange", "getGradePayValueinemployeePromotion()");
        $("#panelMainBody").append("<div id='HeadsMessagesDivBeforeSaveButton' />");
        $("#panelMainBody").append("<div id='HeadsButtonRow' class='row' />");
        $("#HeadsButtonRow").append("<div  class='col-xs-4' /><div class='col-xs-2'><button type='button'   class='btn btn-success mr5 pull-right' id='headsbuttton' onclick='addHeadsEmpPromotion()'>Heads</button></div><div class='col-xs-2'></div>");
        $("#panelMainBody").append("<div id='EarningDeductionListPanelRow' class='row' /><br>");
        $("#EarningDeductionListPanelRow").append("<div id='EarningListTable' class='col-md-6 form-group' />");
        $("#EarningDeductionListPanelRow").append("<div id='DeductionListTable' class='col-md-6' />");
        $("#EarningDeductionListPanelRow").append("<input type='hidden' id='headButtonDisableFlag'>");
        $("#panelMainBody").append("<div id='panelRow27a' class='row form-group' />");
        getOneColumnInRow("panelRow27a", "Row36a", "Row36aCol1");
        getOneColumnInRow("panelRow27a", "Row36b", "Row36aCol2");
        $("#panelMainBody").append("<div id='panelRow19' class='row' />");
        disableParticularFieldsBasedOnStatusInEmpPromotion();

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });


        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    }
    if (checkUserPrivelege(pvViewEmployeePromotion)) {
        viewPayrollEmployeePromotionList("viewPayrollEmployeePromotionList");
    }
}
function disableParticularFieldsBasedOnStatusInEmpPromotion() {
    $("#ddo").prop("disabled", true);
    $("#location").prop("disabled", true);
    $("#department").prop("disabled", true);
    $("#designation").prop("disabled", true);
    $("#natureType").prop("disabled", true);
    $("#postingCity").prop("disabled", true);
    $("#fundType").prop("disabled", true);
    $("#budgetHead").prop("disabled", true);
    $("#discipline").prop("disabled", true);
    $("#association").prop("disabled", true);
    $("#bank").prop("disabled", true);
    $("#gradePromo").prop("disabled", true);
}
function enableconditions()
{
    var condition = $("#status").val();
    if (condition == "Transfer" || condition == "Deputation")
    {
        $("#ddo").prop("disabled", false);
        $("#location").prop("disabled", false);
        $("#department").prop("disabled", false);
        $("#designation").prop("disabled", false);
        $("#natureType").prop("disabled", false);
        $("#postingCity").prop("disabled", false);
        $("#fundType").prop("disabled", false);
        $("#budgetHead").prop("disabled", false);
        $("#discipline").prop("disabled", false);
        $("#association").prop("disabled", false);
        $("#bank").prop("disabled", false);
        $("#gradePromo").prop("disabled", false);
        $("#department").text("");

        getdatatoemployeeUsingDDO();
        getDepartmentBasedOnDDO();
    } else if (condition == "Promotion/Higher Grade")
    {
        $("#ddo").prop("disabled", true);
        $("#location").prop("disabled", true);
        $("#department").prop("disabled", false);
        $("#designation").prop("disabled", false);
        $("#natureType").prop("disabled", false);
        $("#postingCity").prop("disabled", false);
        $("#fundType").prop("disabled", false);
        $("#budgetHead").prop("disabled", false);
        $("#discipline").prop("disabled", false);
        $("#association").prop("disabled", false);
        $("#bank").prop("disabled", false);
        $("#gradePromo").prop("disabled", false);
        getdatatoemployeeUsingDDO();
        getDepartmentBasedOnDDO();
    }
}
function  getYearForOption(val, DivId, message) {
    var dateToday = new Date();
    var yrRange = dateToday.getFullYear();
    var yrForward = yrRange + 50;
    $("#" + DivId).append("<option value='' selected disabled>---- Select " + message + " ----</option>");
    for (var i = yrRange; i < yrForward; i++) {
        $("#" + DivId).append("<option value=" + i + ">" + i + "</option>");
    }
    $("#" + DivId).val(val);
}
function getEmployeeDataInEPUsingEmp() {
    var ddo = $("#odlDDO").val();
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
        if (data != null) {
            $('#employeeId').text("").val("");
            $('#category').text("").val("");
            $('#Olddepartment').text("").val("");
            $('#Olddesignation').text("").val("");
            $('#Oldgrade').text("").val("");
            $('#Oldnature').text("").val("");
            $('#OldpostingCity').text("").val("");
            $('#OldfundType').text("").val("");
            $('#OldbudgetHead').text("").val("");
            $('#Olddiscipline').text("").val("");
            $('#Oldassociation').text("").val("");
            $('#Oldbank').text("").val("");
            $('#Oldacnumber').text("").val("");
            $('#Oldbasic').text("").val("");
            $('#OldgradePay').text("").val("");
            $('#OldincrementPercentage').text("").val("");
            //   $('#Oldlocation').text("").val("");
            $('#dob').text("").val("");
            $('#employeeName').text("").val("");
            $("#employeeCode").text("");
            if (data == null || data == "" || data == 500 || data == 501)
            {
                $("#employeeCode").text("").append("<option >----" + NoDataFound + "----</option>");
            } else {
                $("#employeeCode").text("").append("<option  value='' selected >----[Employee Code]-Employee Name ----</option>");
                for (var i = 0; i < data.length; i++)
                {
                    $("#employeeCode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
                }
            }
        }
    });
}

function setEmployeeDetailsInEP() {
    var employeeCode = $("#employeeCode").val();
    $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
        employeeCode: employeeCode
    }).done(function (pdata) {

        $('#errorIdMsg').text("").val("");
        $('#employeeId').val(pdata[0]._id.$oid);
        $('#category').val(pdata[0].category);
        $('#Olddepartment').text("").val("").val(pdata[0].department);
        $('#Olddesignation').text("").val("").val(pdata[0].designation);
        $('#Oldgrade').text("").val("").val(pdata[0].grade);
        $('#Oldnature').text("").val("").val(pdata[0].natureType);
        $('#OldpostingCity').text("").val("").val(pdata[0].postingCity);
        $('#OldfundType').text("").val("").val(pdata[0].fundType);
        $('#OldbudgetHead').text("").val("").val(pdata[0].budgetHead);
        $('#Olddiscipline').text("").val("").val(pdata[0].discipline);
        $('#Oldassociation').text("").val("").val(pdata[0].association);
        $('#Oldbank').text("").val("").val(pdata[0].bank);
        $('#Oldacnumber').text("").val("").val(pdata[0].acnumber);
        $('#Oldbasic').text("").val("").val(pdata[0].basic);
        $('#OldgradePay').text("").val("").val(pdata[0].gradePay);
        $('#OldincrementPercentage').text("").val("").val(pdata[0].incrementPercentage);
        //  $('#Oldlocation').text("").val("").val(pdata[0].location);
        $('#dob').text("").val("").val(pdata[0].dob);
        $('#employeeName').text("").val("").val(pdata[0].employeeName);
        $('#duedate').text("").val("").val(pdata[0].IncrementDueDate);
        $("#ddo option:contains('" + pdata[0].ddo + "')").attr("selected", "selected");
        $('#status').text("").val("");
        getHardCodedOptions("status", "Status", ["Promotion/Higher Grade", "Transfer", "Deputation"]);
        getLocationBasedOnDDO(pdata[0].location);
        fetchEmployeeJsonForUpdateInEMP_Promotion(pdata[0]._id.$oid);
    });
}
function  fetchEmployeeJsonForUpdateInEMP_Promotion(employeeId, value) {
    $.get(server_base_url + "hrms/EmployeeMaster/Employee/getEmployeeForUpdate", {
        employeeId: employeeId
    }).done(function (pdata) {
        pdata = encodeURI(JSON.stringify(pdata));
        updateemployeemasterInEMPPromotion(pdata, value);
    });
}
function updateemployeemasterInEMPPromotion(obj, val) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    setUserSessionElement(basicE_V, obj.basic);
    setUserSessionElement(gradePayE_V, obj.gradePay);
    setUserSessionElement(associationE_V, obj.association);
    setUserSessionElement(stopGPFE_V, obj.stopGPF);
    setUserSessionElement(classMasterE_V, obj.classMaster);
    setUserSessionElement(postingCityE_V, obj.postingCity);
    setUserSessionElement(ptApplicableE_V, obj.ptApplicable);
    setUserSessionElement(natureTypeE_V, obj.natureType);
    setUserSessionElement(ddoE_V, obj.ddo);
    setUserSessionElement(salaryTypeE_V, obj.salaryType);
    if (val != null && val != undefined)
    {
        getDesignationUsingDDOInUpdate(obj.ddo, obj.designation);
        getLocationBasedOnDDOInUpdate(obj.ddo, obj.location);
        getDepartmentBasedOnDDOInUpdate(obj.ddo, obj.department);
        getFTGradeClassBasedOnDDODESIGNATIONInUpdate(obj.ddo, obj.designation, obj.fundType, obj.grade);
        getBudgetHeadBasedOnDDODesignationFundTypeInUpdate(obj.ddo, obj.designation, obj.fundType, obj.budgetHead);
        getNatureTypeBasedOnDDODesignationFundTypeBudgetHeadInUpdate(obj.ddo, obj.designation, obj.fundType, obj.budgetHead, obj.natureType);
        getDisciplineBasedOnDDODesignationFundTypeBudgetHeadNatureTypeInUpdate(obj.ddo, obj.designation, obj.fundType, obj.budgetHead, obj.natureType, obj.discipline);
        getDesignationCopytoSecondDesignationInUpdate(obj.designation);
    }
    addBothHeadsInEMP_PromotionInOnchage(encodeURI(JSON.stringify(obj.earningHeads)), encodeURI(JSON.stringify(obj.deductionHeads)), val);
    setTimeout(function () {
        $(".EarningsAmount").trigger("keyup");
        $(".DeductionAmount").trigger("keyup");
    }, 2000)
}
function addBothHeadsInEMP_PromotionInOnchage(EarningHeads, DeductionHeads, val) {
    EarningHeadsDisplayInEmployeeUseEmpCode("EarningListTable", EarningHeads);
    DeductionHeadsDisplayInEmployeeUseEmpCode("DeductionListTable", DeductionHeads);
    //

    if ($("#headButtonDisableFlag").val("enable")) {
        if (val == "update")
        {
            $("#panelRow19").text("").append("<div  class='col-xs-12'/><center><button type='button' value='update' id='saveorupdate' class='btn btn-success mr5 '  onclick=EmployeePromotionValidation('" + EarningHeads + "','" + DeductionHeads + "')>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick=payrollEmployeePromotionMaster('dashBoardBodyMainDiv') class='btn btn-warning mr5' name='reset' value='reset'>Back</button></center></div>");
        } else {
            $("#panelRow19").text("").append("<div  class='col-xs-12'/><center><button type='button' value='save' id='saveorupdate' class='btn btn-success mr5 '  onclick=EmployeePromotionValidation('" + EarningHeads + "','" + DeductionHeads + "')>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick=resetEmpPromotion() class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
        }
        $("#totalRow1").append("<label class='col-sm-4'>Total Deductions</label><input class='col-sm-4' type='text' id='displayTotalDeductions' readonly >");
        $("#Row36aCol1").text("").append(getLabel_InputWithSpan("Total Earnings", "", "displayTotalEarnings", "", "readonly"));
        $("#Row36aCol2").text("").append(getLabel_InputWithSpan("Total Deductions", "", "displayTotalDeductions", "", "readonly"));
        $("#headsbuttton").prop("disabled", true);
        $("#headButtonDisableFlag").text('').val("").val("disabled");
    } else {
        $("#headsbuttton").prop("disabled", true);
        $("#headButtonDisableFlag").text('').val("").val("disabled");
    }
}

function resetEmpPromotion()
{
    payrollEmployeePromotionMaster("dashboardBodyMainDiv");
}
function addBothHeadsInEmployeePromotion(EmpEarningHeads, EmpDeductionHeads) {
    $("#basicErr").text("").val();
    var salaryType = getUserSessionElement(salaryTypeE_V);
    //This going to backend to get salary heads
    var ddo = $("#ddo").val();
    var basic = Number($("#basic").val());
    var postingCity = $("#postingCity").val();
    var natureType = $("#natureType").val();
    var gradePay = Number($("#gradePay").val());
    var association = $("#association").val();
    if (preValidation(basic) || preValidation(gradePay) || preValidation(postingCity) || preValidation(natureType) || preValidation(ddo) || preValidation(salaryType)) {
        displayLargeErrorMessagesInCenterInRed("panelRowForErrorMsg", mandatoryFieldMsg);
    } else {
//        if (HeadsValidation()) {
        var stopGpf = getUserSessionElement(stopGPFE_V);
        var classMaster = getUserSessionElement(classMasterE_V);
        var ptApplicable = getUserSessionElement(ptApplicableE_V);
        var employeeGetHeadsJson = {
            basic: basic,
            gradePay: gradePay,
            association: association,
            stopGPF: stopGpf,
            classMaster: classMaster,
            postingCity: postingCity,
            natureType: natureType,
            ddo: ddo,
            salaryType: salaryType,
            ptApplicable: ptApplicable
        };
        $.get(server_base_url + "hrms/employee/Employee/GetSalaryHeads", {
            employeeGetHeadsJson: JSON.stringify(employeeGetHeadsJson)
        }).done(function (data) {
            data = JSON.parse(data);
            var EarningHeads = data.EarningHeads;
            var DeductionHeads = data.DeductionHeads;
            EarningHeads = JSON.parse(EarningHeads);
            DeductionHeads = JSON.parse(DeductionHeads);
            EarningHeads = encodeURI(JSON.stringify(EarningHeads));
            DeductionHeads = encodeURI(JSON.stringify(DeductionHeads));
            //Setting the salary head related fields value .... to validate in save or update ... if something is change 
            setUserSessionElement(basicE_V, basic);
            setUserSessionElement(gradePayE_V, gradePay);
            setUserSessionElement(associationE_V, association);
            setUserSessionElement(postingCityE_V, postingCity);
            setUserSessionElement(natureTypeE_V, natureType);
            setUserSessionElement(ddoE_V, ddo);
            //
            if ($("#headButtonDisableFlag").val("enable")) {
//    $("#panelRow28").text("").append("<div  class='col-xs-12'/><center><button type='button' value='Save' id='saveupdatebuttonId' class='btn btn-success mr5 '  onclick='employeeValidation1()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllEmployeeDataa()' id='resetBackBtnId' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
                $("#totalRow1").append("<label class='col-sm-4'>Total Deductions</label><input class='col-sm-4' type='text' id='displayTotalDeductions' readonly >");
                $("#Row36aCol1").text("").append(getLabel_InputWithSpan("Total Earnings", "", "displayTotalEarnings", "", "readonly"));
                $("#Row36aCol2").text("").append(getLabel_InputWithSpan("Total Deductions", "", "displayTotalDeductions", "", "readonly"));
                $("#headsbuttton").prop("disabled", true);
                $("#headButtonDisableFlag").text('').val("").val("disabled");
//                setTimeout(function() {
//                    $(".EarningsAmount").trigger("keyup");
//                    $(".DeductionAmount").trigger("keyup");
//                }, 2000);
            } else {
                $("#headsbuttton").prop("disabled", true);
                $("#headButtonDisableFlag").text('').val("").val("disabled");
            }
            setTimeout(function () {
                $(".EarningsAmount").trigger("keyup");
                $(".DeductionAmount").trigger("keyup");
            }, 2000)
            EarningHeadsDisplayInEmployeePromotionUpdate("EarningListTable", EarningHeads, EmpEarningHeads);
            DeductionHeadsDisplayInEmployeePromotionUpdate("DeductionListTable", DeductionHeads, EmpDeductionHeads);
//Deductions
            $("#displayDeductionHeadTable").append("<tbody id='displayDeductionHeadTableBody' class='table-striped table-bordered' />");
        });
    }
}
function EarningHeadsDisplayInEmployeeUseEmpCode(DivId, EarningHeads) {
    EarningHeads = JSON.parse(decodeURI(EarningHeads));
    $("#" + DivId).text("").append("<h4><u>Earning Heads</u></h4><div class='row' id='EarningDatatablemainDiv' style='overflow-x:auto;'/>");
    $("#EarningDatatablemainDiv").text("").append("<table class='table table-bordered table-striped table-warning' id='displayEarningHeadTable' />");
    $("#displayEarningHeadTable").append("<thead class=''><tr>"
            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
            + " <th> Select</th>"
            + " <th> S.No</th>"
            + "<th ></i>Description</th>"
            + "<th >Mapping</th>"
            + "<th >Amount</th>"
            + "<th>Effective From</th>"
            + "<th>Is Manual</th>"
            + "</tr></thead>");
    $("#displayEarningHeadTable").append("<tbody id='displayEarningHeadTableBody' class='table-striped table-bordered' />");
    var sno = 0;
    if (EarningHeads != null) {
        for (var i = 0; i < EarningHeads.length; i++) {
            var inputValue = EarningHeads[i].amount;
            var inputEffectiveDate = EarningHeads[i].effectiveFromDate;
            var idss = "effectiveFromDateForEarning" + sno;
            var spanId = "spanIdEarning" + sno;
            if (EarningHeads[i].isBasic == "Yes") {
                sno++;
                inputValue = $("#basic").val();
                $("#basicId").val(EarningHeads[i].salaryHeadId);
                $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i].salaryHeadId + "' style='cursor:pointer;' >"
                        + "<td><input type='checkbox' value='" + EarningHeads[i].salaryHeadId + "'  name='case' checked disabled></td>"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i].salaryHeadId + "'></td>"
                        + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
                        + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + EarningHeads[i].amount + "'  onkeypress='return validateFloat(event)'><span id=" + spanId + "></span></td>"
                        + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
                        + "<td><input type='checkbox' value='" + EarningHeads[i].salaryHeadId + "'  name='case'  disabled></td>");
            }
//            else if (EarningHeads[i].description == "GRADE PAY" || EarningHeads[i].description == "Grade Pay") {
//                sno++;
//                var gradepay = $("#gradePay").val();
//                $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i].salaryHeadId + "' style='cursor:pointer;' >"
//                        + "<td><input type='checkbox' value='" + EarningHeads[i].salaryHeadId + "'  name='case' checked disabled></td>"
//                        + "<td>" + sno + "</td>"
//                        + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i].salaryHeadId + "'></td>"
//                        + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
//                        + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + gradepay + "'  onkeypress='return validateFloat(event)'><span id=" + spanId + "></span></td>"
//                        + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
//                        + "<td><input type='checkbox' value='" + EarningHeads[i].salaryHeadId + "'  name='case'  disabled></td>");
//            }
            else {
                var checkOrUncheck = "checked";
                if (EarningHeads[i].isActive == "No") {
                    checkOrUncheck = "checked disabled";
                }
                var checkBoxId = EarningHeads[i].salaryHeadId + "checkBox";
                var inputTextBoxId = EarningHeads[i].salaryHeadId + "inputBox";
                sno++;
                $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i].salaryHeadId + "' style='cursor:pointer;' >"
                        + "<td><input type='checkbox' value='" + EarningHeads[i].salaryHeadId + "'  name='case' onchange=checkconditioninemppro('" + EarningHeads[i].salaryHeadId + "') " + checkOrUncheck + "></td>"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i].salaryHeadId + "'></td>"
                        + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
                        + "<td style='cursor:pointer;'><input type='text' class='EarningsAmount' id=" + inputTextBoxId + " value='" + inputValue + "'  onchange='return validateFloat(event)'><span id=" + spanId + "></span></td>"
                        + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
                        + "<td><input type='checkbox' onclick=enableDisableThisinputBox('" + checkBoxId + "','" + inputTextBoxId + "') id='" + checkBoxId + "'  name='case'></td>");
            }
            $("#" + idss).datepicker({
                changeYear: true,
                changeMonth: true,
                format: "dd/mm/yyyy"
            });
        }
        $(".EarningsAmount").trigger("keyup");
        $('.EarningsAmount').keyup(function () {
            var sum = 0;
            $('.EarningsAmount').each(function () {
                sum += Number($(this).val());
            });
            $('#displayTotalEarnings').val(sum);
        });
    }
}
function DeductionHeadsDisplayInEmployeeUseEmpCode(DivId, DeductionHeads) {
    DeductionHeads = JSON.parse(decodeURI(DeductionHeads));
    $("#" + DivId).text("").append("<h4><u>Deduction Heads</u></h4><div class='tab-pane' id='DeductionDatatablemainDiv'/>");
    $("#DeductionDatatablemainDiv").append("<div class='table-responsive' id='viewDeductionDataTableDiv'  style='overflow-x:auto;'/>");
    $("#viewDeductionDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayDeductionHeadTable' />");
    $("#displayDeductionHeadTable").append("<thead class=''><tr>"
            + " <th>Select</th>"
            + " <th>S.No</th>"
            + "<th></i>Description</th>"
            + "<th></i>Mapping</th>"
            + "<th></i>Amount</th>"
            + "<th></i>Effective From</th>"
            + "</tr></thead>");
    $("#displayDeductionHeadTable").append("<tbody id='displayDeductionHeadTableBody' class='table-striped table-bordered' />");
    var sno = 0;
    if (DeductionHeads != null)
    {
        for (var i = 0; i < DeductionHeads.length; i++) {
            var inputValue = DeductionHeads[i].amount;
            var inputEffectiveDate = DeductionHeads[i].effectiveFromDate;
            sno++;
            var spanId = "spanIdDeductions" + sno;
            var ids = "effectiveFromDate1" + sno;
            var checkOrUncheck = "checked";
            if (DeductionHeads[i].isActive == "No") {
                checkOrUncheck = "checked disabled";
            }
            var checkBoxId = DeductionHeads[i].salaryHeadId + "checkBox";
            var inputTextBoxId = DeductionHeads[i].salaryHeadId + "inputBox";
            $("#displayDeductionHeadTableBody").append("<tr id='" + DeductionHeads[i].salaryHeadId + "' style='cursor:pointer;' >"
                    + "<td><input type='checkbox' value='" + DeductionHeads[i].salaryHeadId + "'  name='case' onchange=checkconditioninDeductionHeademppro('" + DeductionHeads[i].salaryHeadId + "') " + checkOrUncheck + "></td>"
                    + "<td>" + sno + "</td>"
                    + "<td style='cursor:pointer;'>" + DeductionHeads[i].description + "<input type='hidden' value='" + DeductionHeads[i].salaryHeadId + "'></td>"
                    + "<td style='cursor:pointer;'>" + DeductionHeads[i].mapping + "</td>"
                    + "<td style='cursor:pointer;'><input type='text' class='DeductionAmount' value='" + inputValue + "' onkeypress='return validateFloat(event)'><span id=" + spanId + "></span></td>"
                    + "<td style='cursor:pointer;'><input type='text'  id=" + ids + " value='" + inputEffectiveDate + "' readonly='true'></td>"
                    + "<td><input type='checkbox' onclick=enableDisableThisinputBox('" + checkBoxId + "','" + inputTextBoxId + "') id='" + checkBoxId + "'  name='case'></td>");
            $("#" + ids).datepicker({
                changeYear: true,
                changeMonth: true,
                format: "dd/mm/yyyy"
            });
        }
        $('.DeductionAmount').keyup(function () {
            var sum = 0;
            $('.DeductionAmount').each(function () {
                sum += Number($(this).val());
            });
            $('#displayTotalDeductions').val(sum);
        });
        $(".DeductionAmount").trigger("keyup");
    }
}

function checkconditioninemppro(id)
{

    var con = $("#" + id).find(':checkbox').attr('checked');
    var total;
    var amount = $("#" + id).find('td .EarningsAmount').val();
    var tot = $('#displayTotalEarnings').val();
    if (con == "checked")
    {
        total = parseInt(tot) + parseInt(amount);
    } else
    {
        total = parseInt(tot) - parseInt(amount);
    }

    $('#displayTotalEarnings').val(total);
}
function checkconditioninDeductionHeademppro(id)
{

    var con = $("#" + id).find(':checkbox').attr('checked');
    var total;
    var amount = $("#" + id).find('td .DeductionAmount').val();
    var tot = $('#displayTotalDeductions').val();
    if (con == "checked")
    {
        total = parseInt(tot) + parseInt(amount);
    } else
    {
        total = parseInt(tot) - parseInt(amount);
    }

    $('#displayTotalDeductions').val(total);
}
function EarningHeadsDisplayInEmployeePromotionUpdate(DivId, EarningHeads, EmpEarningHeads) {
    EarningHeads = JSON.parse(decodeURI(EarningHeads));
    EmpEarningHeads = JSON.parse(decodeURI(EmpEarningHeads));
    $("#" + DivId).text("").append("<h4><u>Earning Heads</u></h4><div class='row' id='EarningDatatablemainDiv' style='overflow-x:auto;'/>");
    $("#EarningDatatablemainDiv").text("").append("<table class='table table-bordered table-striped table-warning' id='displayEarningHeadTable' />");
    $("#displayEarningHeadTable").append("<thead class=''><tr>"
            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
            + " <th> Select</th>"
            + " <th> S.No</th>"
            + "<th ></i>Description</th>"
            + "<th >Mapping</th>"
            + "<th >Amount</th>"
            + "<th>Effective From</th>"
            + "<th>Is Manual</th>"
            + "</tr></thead>");
    $("#displayEarningHeadTable").append("<tbody id='displayEarningHeadTableBody' class='table-striped table-bordered' />");
//    var sno = 0;
//    // var totalEarningAmount = 0;
//    if (EarningHeads != null) {
//        for (var i = 0; i < EarningHeads.length; i++) {
//            //   totalEarningAmount = totalEarningAmount + EarningHeads[i].calculatedAmount;
//            var inputValue = EarningHeads[i].calculatedAmount;
//            var date = new Date();
//            var inputEffectiveDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
//
//            var idss = "effectiveFromDateForEarning" + sno;
//            var spanId = "spanIdEarning" + sno;
//            if (EarningHeads[i].isBasic == "Yes") {
//                sno++;
//                inputValue = $("#basic").val();
//                $("#basicId").val(EarningHeads[i]._id.$oid);
//                $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i]._id.$oid + "' style='cursor:pointer;' >"
//                        + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "'  name='case' checked disabled></td>"
//                        + "<td>" + sno + "</td>"
//                        + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i]._id.$oid + "'></td>"
//                        + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
//                        + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + EarningHeads[i].calculatedAmount + "'  onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
//                        + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
//                        + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "'  name='case'  disabled></td>");
//            } else {
//                sno++;
//                var checkBoxId = EarningHeads[i]._id.$oid + "checkBox";
//                var inputTextBoxId = EarningHeads[i]._id.$oid + "inputBox";
//                $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i]._id.$oid + "' style='cursor:pointer;' >"
//                        + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "' class='earcheck' name='case' onchange=checkconditioninemppro('" + EarningHeads[i]._id.$oid + "') checked></td>"
//                        + "<td>" + sno + "</td>"
//                        + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i]._id.$oid + "'></td>"
//                        + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
//                        + "<td style='cursor:pointer;'><input type='text' class='EarningsAmount' id=" + inputTextBoxId + " value='" + EarningHeads[i].calculatedAmount + "'  onchange='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
//                        + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
//                        + "<td><input type='checkbox' onclick=enableDisableThisinputBox('" + checkBoxId + "','" + inputTextBoxId + "') id='" + checkBoxId + "'  name='case'></td>");
//            }
//            $("#" + idss).datepicker({
//                changeYear: true,
//                changeMonth: true,
//                format: "dd/mm/yyyy"
//            });
//        }
//        //   $("#displayTotalEarnings").val(totalEarningAmount);
//        $(".EarningsAmount").trigger("keyup");
//        $('.EarningsAmount').keyup(function() {
//            var sum = 0;
//            $('.EarningsAmount').each(function() {
//                sum += Number($(this).val());
//            });
//            $('#displayTotalEarnings').val(sum);
//        });
//    }



    var sno = 0;
    var totalEarningAmount = 0;
    var inputEffectiveDate = 0;
    var checkcon = "";
    if (EarningHeads != null) {

        if (EmpEarningHeads != null) {

            for (var i = 0; i < EarningHeads.length; i++) {
                checkcon = "";
//                totalEarningAmount = totalEarningAmount + EarningHeads[i].calculatedAmount;

                if (EmpEarningHeads != null) {

                    inputEffectiveDate = EmpEarningHeads[0].effectiveFromDate;
                    for (var j = 0; j < EmpEarningHeads.length; j++) {

                        if (EarningHeads[i]._id.$oid == EmpEarningHeads[j].salaryHeadId) {
                            totalEarningAmount = totalEarningAmount + EmpEarningHeads[j].amount;
                            checkcon = "checked";
                        }
                    }
                }
//Current  Date
                if (inputEffectiveDate == 0)
                {
                    var date = new Date();
                    inputEffectiveDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                }
                var idss = "effectiveFromDateForEarning" + sno;
                var spanId = "spanIdEarning" + sno;
                if (EarningHeads[i].isBasic == "Yes") {
                    sno++;
                    inputValue = $("#basic").val();
                    $("#basicId").val(EarningHeads[i]._id.$oid);
                    $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "'  name='case' checked disabled></td>"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i]._id.$oid + "'></td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
                            + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + EarningHeads[i].calculatedAmount + "'  onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                            + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
                            + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "'  name='case'  disabled></td>");
                } else if (EarningHeads[i].description == "GRADE PAY" || EarningHeads[i].description == "Grade Pay") {
                    sno++;
                    var gradepay = $("#gradePay").val();
                    $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "'  name='case' checked disabled></td>"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i]._id.$oid + "'></td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
                            + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + gradepay + "'  onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                            + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
                            + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "'  name='case'  disabled></td>");
                } else {
                    sno++;
                    var checkBoxId = EarningHeads[i]._id.$oid + "checkBox";
                    var inputTextBoxId = EarningHeads[i]._id.$oid + "inputBox";
                    $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "' class='earcheck' name='case' onchange=checkconditioninemppro('" + EarningHeads[i]._id.$oid + "') " + checkcon + "></td>"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i]._id.$oid + "'></td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
                            + "<td style='cursor:pointer;'><input type='text' class='EarningsAmount' id=" + inputTextBoxId + " value='" + EarningHeads[i].calculatedAmount + "'  onchange='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                            + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
                            + "<td><input type='checkbox' onclick=enableDisableThisinputBox('" + checkBoxId + "','" + inputTextBoxId + "') id='" + checkBoxId + "'  name='case'></td>");
                }
                $("#" + idss).datepicker({
                    changeYear: true,
                    changeMonth: true,
                    format: "dd/mm/yyyy"
                });
            }
            $('#displayTotalEarnings').val(totalEarningAmount);
//           $(".EarningsAmount").trigger("keyup");
//            $('.EarningsAmount').keyup(function() {
//                var sum = 0;
//                $('.EarningsAmount').each(function() {
//                    sum += Number($(this).val());
//                });
//                $('#displayTotalEarnings').val(sum);
//            });
        } else
        {

            for (var i = 0; i < EarningHeads.length; i++) {
                totalEarningAmount = totalEarningAmount + EarningHeads[i].calculatedAmount;
                //Current  Date

                var date = new Date();
                inputEffectiveDate = "01" + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                var idss = "effectiveFromDateForEarning" + sno;
                var spanId = "spanIdEarning" + sno;
                if (EarningHeads[i].isBasic == "Yes") {
                    sno++;
                    inputValue = $("#basic").val();
                    $("#basicId").val(EarningHeads[i]._id.$oid);
                    $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "'  name='case' checked disabled></td>"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i]._id.$oid + "'></td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
                            + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + EarningHeads[i].calculatedAmount + "'  onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                            + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
                            + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "'  name='case'  disabled></td>");
                } else if (EarningHeads[i].description == "GRADE PAY" || EarningHeads[i].description == "Grade Pay") {
                    sno++;
                    var gradepay = $("#gradePay").val();
                    $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "'  name='case' checked disabled></td>"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i]._id.$oid + "'></td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
                            + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + gradepay + "'  onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                            + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
                            + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "'  name='case'  disabled></td>");
                } else {
                    sno++;
                    var checkBoxId = EarningHeads[i]._id.$oid + "checkBox";
                    var inputTextBoxId = EarningHeads[i]._id.$oid + "inputBox";
                    $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "' class='earcheck' name='case' onchange=checkconditioninemppro('" + EarningHeads[i]._id.$oid + "') checked></td>"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i]._id.$oid + "'></td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
                            + "<td style='cursor:pointer;'><input type='text' class='EarningsAmount' id=" + inputTextBoxId + " value='" + EarningHeads[i].calculatedAmount + "'  onchange='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                            + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
                            + "<td><input type='checkbox' onclick=enableDisableThisinputBox('" + checkBoxId + "','" + inputTextBoxId + "') id='" + checkBoxId + "'  name='case'></td>");
                }
                $("#" + idss).datepicker({
                    changeYear: true,
                    changeMonth: true,
                    format: "dd/mm/yyyy"
                });
            }
            $('#displayTotalEarnings').val(totalEarningAmount);
//            $('.EarningsAmount').keyup(function() {
//                var sum = 0;
//                // $('table#displayEarningHeadTable tbody tr td input[type="checkbox"][name="case"]:checked').each(function() {
//                $('.EarningsAmount').each(function() {
//                    sum += Number($(this).val());
//                });
//                $('#displayTotalEarnings').val(sum);
//                $('.EarningsAmount').trigger("keyup");
//
//            });

        }
    } else {
        $("#EarningDatatablemainDiv").text("No Eanings Heads Available");
    }
//     else {
//        $("#EarningDatatablemainDiv").text("No Eanings Heads Available");
//    }
}





function DeductionHeadsDisplayInEmployeePromotionUpdate(DivId, DeductionHeads, EmpDeductionHeads) {
    DeductionHeads = JSON.parse(decodeURI(DeductionHeads));
    EmpDeductionHeads = JSON.parse(decodeURI(EmpDeductionHeads));
    $("#" + DivId).text("").append("<h4><u>Deduction Heads</u></h4><div class='tab-pane' id='DeductionDatatablemainDiv'/>");
    $("#DeductionDatatablemainDiv").append("<div class='table-responsive' id='viewDeductionDataTableDiv'  style='overflow-x:auto;'/>");
    $("#viewDeductionDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayDeductionHeadTable' />");
    $("#displayDeductionHeadTable").append("<thead class=''><tr>"
            + " <th>Select</th>"
            + " <th>S.No</th>"
            + "<th></i>Description</th>"
            + "<th></i>Mapping</th>"
            + "<th></i>Amount</th>"
            + "<th></i>Effective From</th>"
            + "</tr></thead>");
    $("#displayDeductionHeadTable").append("<tbody id='displayDeductionHeadTableBody' class='table-striped table-bordered' />");
//    var sno = 0;
//    if (DeductionHeads != null)
//    {
//        for (var i = 0; i < DeductionHeads.length; i++) {
//            var inputValue = DeductionHeads[i].calculatedAmount;
//            var date = new Date();
//            var inputEffectiveDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
//            sno++;
//            var spanId = "spanIdDeductions" + sno;
//            var ids = "effectiveFromDate1" + sno;
//            var checkBoxId = DeductionHeads[i]._id.$oid + "checkBox";
//            var inputTextBoxId = DeductionHeads[i]._id.$oid + "inputBox";
//            $("#displayDeductionHeadTableBody").append("<tr id='" + DeductionHeads[i]._id.$oid + "' style='cursor:pointer;' >"
//                    + "<td><input type='checkbox' value='" + DeductionHeads[i]._id.$oid + "'  name='case' onchange=checkconditioninDeductionHeademppro('" + DeductionHeads[i]._id.$oid + "') checked></td>"
//                    + "<td>" + sno + "</td>"
//                    + "<td style='cursor:pointer;'>" + DeductionHeads[i].description + "<input type='hidden' value='" + DeductionHeads[i]._id.$oid + "'></td>"
//                    + "<td style='cursor:pointer;'>" + DeductionHeads[i].mapping + "</td>"
//                    + "<td style='cursor:pointer;'><input type='text'id=" + inputTextBoxId + " class='DeductionAmount' value='" + DeductionHeads[i].calculatedAmount + "' onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
//                    + "<td style='cursor:pointer;'><input type='text'  id=" + ids + " value='" + inputEffectiveDate + "' readonly='true'></td>"
//                    + "<td><input type='checkbox' onclick=enableDisableThisinputBox('" + checkBoxId + "','" + inputTextBoxId + "') id='" + checkBoxId + "'  name='case'></td>");
//            $("#" + ids).datepicker({
//                changeYear: true,
//                changeMonth: true,
//                format: "dd/mm/yyyy"
//            });
//        }
//        $('.DeductionAmount').keyup(function() {
//            var sum = 0;
//            $('.DeductionAmount').each(function() {
//                sum += Number($(this).val());
//            });
//            $('#displayTotalDeductions').val(sum);
//            $(".DeductionAmount").trigger("keyup");
//        });
//    }


    var sno = 0;
    var totalDeductionAmount = 0;
    var inputEffectiveDate = 0;
    var checkcon = "";
    if (DeductionHeads != null) {

        if (EmpDeductionHeads != null) {

            for (var i = 0; i < DeductionHeads.length; i++) {
                checkcon = "";
                //   totalDeductionAmount = totalDeductionAmount + DeductionHeads[i].calculatedAmount;
                var inputValue = 0;
                if (EmpDeductionHeads != null) {

                    inputEffectiveDate = EmpDeductionHeads[0].effectiveFromDate;
                    for (var j = 0; j < EmpDeductionHeads.length; j++) {
                        if (DeductionHeads[i]._id.$oid == EmpDeductionHeads[j].salaryHeadId) {
                            checkcon = "checked";
                            totalDeductionAmount = totalDeductionAmount + EmpDeductionHeads[j].amount;
                        }
                    }
                }
                sno++;
                if (inputEffectiveDate == 0)
                {

                    var date = new Date();
                    var inputEffectiveDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                }
                var spanId = "spanIdDeductions" + sno;
                var ids = "effectiveFromDate1" + sno;
                var checkBoxId = DeductionHeads[i]._id.$oid + "checkBox";
                var inputTextBoxId = DeductionHeads[i]._id.$oid + "inputBox";
                $("#displayDeductionHeadTableBody").append("<tr id='" + DeductionHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                        + "<td><input type='checkbox' value='" + DeductionHeads[i]._id.$oid + "'  name='case' onchange=checkconditioninDeductionHeademppro('" + DeductionHeads[i]._id.$oid + "') " + checkcon + "></td>"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + DeductionHeads[i].description + "<input type='hidden' value='" + DeductionHeads[i]._id.$oid + "'></td>"
                        + "<td style='cursor:pointer;'>" + DeductionHeads[i].mapping + "</td>"
                        + "<td style='cursor:pointer;'><input type='text'id=" + inputTextBoxId + " class='DeductionAmount' value='" + DeductionHeads[i].calculatedAmount + "' onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                        + "<td style='cursor:pointer;'><input type='text'  id=" + ids + " value='" + inputEffectiveDate + "' readonly='true'></td>"
                        + "<td><input type='checkbox' onclick=enableDisableThisinputBox('" + checkBoxId + "','" + inputTextBoxId + "') id='" + checkBoxId + "'  name='case'></td>");
                $("#" + ids).datepicker({
                    changeYear: true,
                    changeMonth: true,
                    format: "dd/mm/yyyy"
                });
            }
            $('#displayTotalDeductions').val(totalDeductionAmount);
//                $('.DeductionAmount').keyup(function() {
//                    var sum = 0;
//                    $('.DeductionAmount').each(function() {
//                        sum += Number($(this).val());
//                    });
//                    $('#displayTotalDeductions').val(sum);
//                    $(".DeductionAmount").trigger("keyup");
//                });
        } else
        {
            for (var i = 0; i < DeductionHeads.length; i++) {

                totalDeductionAmount = totalDeductionAmount + DeductionHeads[i].calculatedAmount;
                sno++;
                var date = new Date();
                var inputEffectiveDate = "01" + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                var spanId = "spanIdDeductions" + sno;
                var ids = "effectiveFromDate1" + sno;
                var checkBoxId = DeductionHeads[i]._id.$oid + "checkBox";
                var inputTextBoxId = DeductionHeads[i]._id.$oid + "inputBox";

                $("#displayDeductionHeadTableBody").append("<tr id='" + DeductionHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                        + "<td><input type='checkbox' value='" + DeductionHeads[i]._id.$oid + "'  name='case' onchange=checkconditioninDeductionHeademppro('" + DeductionHeads[i]._id.$oid + "') checked></td>"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + DeductionHeads[i].description + "<input type='hidden' value='" + DeductionHeads[i]._id.$oid + "'></td>"
                        + "<td style='cursor:pointer;'>" + DeductionHeads[i].mapping + "</td>"
                        + "<td style='cursor:pointer;'><input type='text'id=" + inputTextBoxId + " class='DeductionAmount' value='" + DeductionHeads[i].calculatedAmount + "' onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                        + "<td style='cursor:pointer;'><input type='text'  id=" + ids + " value='" + inputEffectiveDate + "' readonly='true'></td>"
                        + "<td><input type='checkbox' onclick=enableDisableThisinputBox('" + checkBoxId + "','" + inputTextBoxId + "') id='" + checkBoxId + "'  name='case'></td>");

                $("#" + ids).datepicker({
                    changeYear: true,
                    changeMonth: true,
                    format: "dd/mm/yyyy"
                });
            }
            $('#displayTotalDeductions').val(totalDeductionAmount);
//                $('.DeductionAmount').keyup(function() {
//                    var sum = 0;
//                    $('.DeductionAmount').each(function() {
//                        sum += Number($(this).val());
//                    });
//                    $('#displayTotalDeductions').val(sum);
//                    $(".DeductionAmount").trigger("keyup");
//                });
        }


    } else {
        displayErrorMessages(DeductionDatatablemainDiv, "" + "No Deductions Hedas Available" + "<br />");
        // $("#DeductionDatatablemainDiv").append("No Deductions Hedas Available");
    }


}

function EmployeePromotionValidation(EarningHeads, DeductionHeads)
{
    var result = 1;
    $("#" + successMsgDivCF).text("");
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    if ($("#employeeCode").val() == null || $("#employeeCode").val() == "") {
        $("#employeeCode").focus();
        addSomeClass("employeeCodeFieldGroup", "has-error");
        displaySmallErrorMessages("employeeCodeErr", "Please Enter Employee Code.");
        return;
        result = 0;
    }
    if ($('#ddo').val() == null || $('#ddo').val() == "") {
        $("#ddo").focus();
        addSomeClass("ddoFieldGroup", "has-error");
        displaySmallErrorMessages("ddoErr", "Please Select DDO.");
        result = 0;
    } else if ($('#ddo').val() != null || $('#ddo').val() != "") {
        removeSomeClass("ddoFieldGroup", "has-error");
    }
//    if ($('#location').val() == null || $('#location').val() == "") {
//        $("#location").focus();
//        addSomeClass("locationFieldGroup", "has-error");
//        displaySmallErrorMessages("locationErr", "Please Select Location.");
//        result = 0;
//    } else if ($('#location').val() != null || $('#location').val() != "") {
//        removeSomeClass("locationFieldGroup", "has-error");
//    }
    if ($('#department').val() == null || $('#department').val() == "") {
        $("#department").focus();
        addSomeClass("departmentFieldGroup", "has-error");
        displaySmallErrorMessages("departmentErr", "Please Select Department.");
        result = 0;
    } else if ($('#department').val() != null || $('#department').val() != "") {
        removeSomeClass("departmentFieldGroup", "has-error");
    }
    if ($('#designation').val() == null || $('#designation').val() == "") {
        $("#designation").focus();
        addSomeClass("designationFieldGroup", "has-error");
        displaySmallErrorMessages("designationErr", "Please Select Designation.");
        result = 0;
    } else if ($('#designation').val() != null || $('#designation').val() != "") {
        removeSomeClass("designationFieldGroup", "has-error");
    }
    if ($('#gradePromo').val() == null || $('#gradePromo').val() == "") {
        $("#gradePromo").focus();
        addSomeClass("gradeFieldGroup", "has-error");
        displaySmallErrorMessages("gradePromoErr", "Please Select Grade.");
        result = 0;
    } else if ($('#gradePromo').val() != null || $('#gradePromo').val() != "") {
        removeSomeClass("gradeFieldGroup", "has-error");
    }
    if ($('#natureType').val() == null || $('#natureType').val() == "") {
        $("#natureType").focus();
        addSomeClass("natureFieldGroup", "has-error");
        displaySmallErrorMessages("natureTypeErr", "Please Select Nature.");
        result = 0;
    } else if ($('#natureType').val() != null || $('#natureType').val() != "") {
        removeSomeClass("natureTypeFieldGroup", "has-error");
    }
    if ($('#postingCity').val() == null || $('#postingCity').val() == "") {
        $("#postingCity").focus();
        addSomeClass("postingCityFieldGroup", "has-error");
        displaySmallErrorMessages("postingCityErr", "Please Select Posting City.");
        result = 0;
    } else if ($('#postingCity').val() != null || $('#postingCity').val() != "") {
        removeSomeClass("postingCityFieldGroup", "has-error");
    }
    if ($('#fundType').val() == null || $('#fundType').val() == "") {
        $("#fundType").focus();
        addSomeClass("fundTypeFieldGroup", "has-error");
        displaySmallErrorMessages("fundTypeErr", "Please Select Fund Type.");
        result = 0;
    } else if ($('#fundType').val() != null || $('#fundType').val() != "") {
        removeSomeClass("fundTypeFieldGroup", "has-error");
    }
    if ($('#budgetHead').val() == null || $('#budgetHead').val() == "") {
        $("#budgetHead").focus();
        addSomeClass("budgetHeadFieldGroup", "has-error");
        displaySmallErrorMessages("budgetHeadErr", "Please Select Budget Head.");
        result = 0;
    } else if ($('#budgetHead').val() != null || $('#budgetHead').val() != "") {
        removeSomeClass("budgetHeadFieldGroup", "has-error");
    }
    if ($('#discipline').val() == null || $('#discipline').val() == "") {
        $("#discipline").focus();
        addSomeClass("disciplineFieldGroup", "has-error");
        displaySmallErrorMessages("disciplineErr", "Please Select Discipline.");
        result = 0;
    } else if ($('#discipline').val() != null || $('#discipline').val() != "") {
        removeSomeClass("disciplineFieldGroup", "has-error");
    }
    if ($('#association').val() == null || $('#association').val() == "") {
        $("#association").focus();
        addSomeClass("associationFieldGroup", "has-error");
        displaySmallErrorMessages("associationErr", "Please Select Association.");
        result = 0;
    } else if ($('#association').val() != null || $('#association').val() != "") {
        removeSomeClass("associationFieldGroup", "has-error");
    }
//    if ($('#bank').val() == null || $('#bank').val() == "") {
//        $("#bank").focus();
//        addSomeClass("bankFieldGroup", "has-error");
//        displaySmallErrorMessages("bankErr", "Please Select Bank.");
//        result = 0;
//    } else if ($('#bank').val() != null || $('#bank').val() != "") {
//        removeSomeClass("bankFieldGroup", "has-error");
//    }
    if ($('#promOrTransCode').val() == null || $('#promOrTransCode').val() == "") {
        $("#promOrTransCode").focus();
        addSomeClass("promOrTransCodeFieldGroup", "has-error");
        displaySmallErrorMessages("promOrTransCodeErr", "Please Enter Promotion/Transfer Code.");
        result = 0;
    } else if ($('#promOrTransCode').val() != null || $('#promOrTransCode').val() != "") {
        removeSomeClass("promOrTransCodeFieldGroup", "has-error");
    }
    if ($('#basic').val() == null || $('#basic').val() == "") {
        $("#basic").focus();
        addSomeClass("basicFieldGroup", "has-error");
        displaySmallErrorMessages("basicErr", "Please Enter Basic.");
        result = 0;
    } else if ($('#basic').val() != null || $('#basic').val() != "") {
        removeSomeClass("basicFieldGroup", "has-error");
    }
    var conditionOFHeads = checkSalaryCalculationDetaailsInEmpPromotion(EarningHeads, DeductionHeads);
    if (conditionOFHeads == true) {
        $('table#displayEarningHeadTable tbody tr input[type="checkbox"][name="case"]:checked').each(function () {
            var row = $(this).closest('tr');
            var flag = "s"
            if (row.find('td:eq(4) input').val() == "" || row.find('td:eq(4) input').val() == undefined || row.find('td:eq(4) input').val() == null) {
                result = 0;
                flag = "n";
            }
            if (row.find('td:eq(5) input').val() == "" || row.find('td:eq(5) input').val() == undefined || row.find('td:eq(5) input').val() == null) {
                result = 0;
                flag = "n";
            }
            if (flag == "n") {
                displayLargeErrorMessagesInCenterInRed("panelRowForErrorMsg", "Please enter valid  amount and effective date");
            }

        });
        $('table#displayDeductionHeadTable tbody tr input[type="checkbox"][name="case"]:checked').each(function () {
            var row = $(this).closest('tr');
            var flag = "s";
            if (row.find('td:eq(4) input').val() == "" || row.find('td:eq(4) input').val() == undefined || row.find('td:eq(4) input').val() == null) {
                result = 0;
                flag = "n";
            }
            if (row.find('td:eq(5) input').val() == "" || row.find('td:eq(5) input').val() == undefined || row.find('td:eq(5) input').val() == null) {
                result = 0;
                flag = "n";
            }
            if (flag == "n") {
                displayLargeErrorMessagesInCenterInRed("panelRowForErrorMsg", "Please enter valid  amount and effective date");
            }
        });
    } else {
        result = 0;
    }
    if (result != 0) {
        if ($("#saveorupdate").val() == "save") {
            savePayrollEmployeePromotionDetails();
        } else if ($("#saveorupdate").val() == "update") {
            updatePayrollEmployeePromotionDetails();
        }
    }
}
function checkSalaryCalculationDetaailsInEmpPromotion(EarningHeads, DeductionHeads) {
    var basicE = Number(getUserSessionElement(basicE_V));
    var gradePayE = Number(getUserSessionElement(gradePayE_V));
    var associationE = getUserSessionElement(associationE_V);
    var postingCityE = getUserSessionElement(postingCityE_V);
    var natureTypeE = getUserSessionElement(natureTypeE_V);
    var ddoE = getUserSessionElement(ddoE_V);
    var basic = Number($("#basic").val());
    var gradePay = Number($("#gradePay").val());
    var association = $("#association").val();
    var postingCity = $("#postingCity").val();
    var natureType = $("#natureType").val();
    var ddo = $("#ddo").val();
    if (basicE == basic && gradePayE == gradePay && associationE == association && postingCityE == postingCity && natureTypeE == natureType && ddoE == ddo) {
        $("#HeadsButtonRow").text("").append("<div  class='col-xs-12'/><center><button type='button' id='headsbuttton' class='btn btn-success mr5 '  onclick=addBothHeadsInEmployeePromotion('" + EarningHeads + "','" + DeductionHeads + "')>HEADS</button></div>");
        $("#HeadsMessagesDivBeforeSaveButton").text("");
        return true;
    } else {
        displayLargeErrorMessagesInCenterInRed("HeadsMessagesDivBeforeSaveButton", "Please Click on Heads button");
        $("#HeadsButtonRow").text("").append("<div  class='col-xs-12'/><center><button type='button' id='headsbuttton' class='btn btn-success mr5 '  onclick=addBothHeadsInEmployeePromotion('" + EarningHeads + "','" + DeductionHeads + "')>HEADS</button></div>");
        return false;
    }
}

function savePayrollEmployeePromotionDetails() {
    if (checkUserPrivelege(pvCreateEmployeePromotion)) {
        var earningHeads = [];
        var deductionHeads = [];
        $('table#displayEarningHeadTable tbody tr input[type="checkbox"][name="case"]:checked').each(function () {
            var row = $(this).closest('tr');
            earningHeads.push({
                description: row.find('td:eq(2) input').val(),
                mapping: row.find('td:eq(3)').text(),
                amount: Number(row.find('td:eq(4) input').val()),
                effectiveFromDate: row.find('td:eq(5) input').val()
            });
        });
        $('table#displayDeductionHeadTable tbody tr input[type="checkbox"][name="case"]:checked').each(function () {
            var row = $(this).closest('tr');
            deductionHeads.push({
                description: row.find('td:eq(2) input').val(),
                mapping: row.find('td:eq(3)').text(),
                amount: Number(row.find('td:eq(4) input').val()),
                effectiveFromDate: row.find('td:eq(5) input').val()
            });
        });
        var obj = {
            ddo: $("#ddo").val(),
            location: $('#location').val(),
            department: $('#department').val(),
            designation: $('#designation').val(),
            grade: $('#gradePromo').val(),
            fundType: $('#fundType').val(),
            category: $('#category').val(),
            budgetHead: $('#budgetHead').val(),
            natureType: $('#natureType').val(),
            discipline: $('#discipline').val(),
            postingCity: $('#postingCity').val(),
            association: $('#association').val(),
            bank: $('#bank').val(),
            acnumber: $('#acnumber').val(),
            basic: Number($('#basic').val()),
            gradePay: Number($('#gradePay').val()),
            incrementPercentage: $('#incrementPercentage').val(),
            IncrementDueDate: $('#duedate').val(),
            promotionCode: $('#promOrTransCode').val(),
            promotionStatus: $('#status').val(),
            promotedDate: $('#dated').val(),
            oldDDO: $('#odlDDO').val(),
            empCode: $('#employeeCode').val(),
            empName: $('#employeeName').val(),
            oldLocation: $('#Oldlocation').val(),
            oldDept: $('#Olddepartment').val(),
            oldDesignation: $('#Olddesignation').val(),
            oldGrade: $('#Oldgrade').val(),
            oldNature: $('#Oldnature').val(),
            oldPostingCity: $('#OldpostingCity').val(),
            oldFundType: $('#OldfundType').val(),
            oldBudgetHead: $('#OldbudgetHead').val(),
            oldDispline: $('#Olddiscipline').val(),
            oldAssociation: $('#Oldassociation').val(),
            oldBank: $('#Oldbank').val(),
            oldAccountNum: $('#Oldacnumber').val(),
            oldBasic: $('#Oldbasic').val(),
            oldGradePay: $('#OldgradePay').val(),
            oldIncrementPercent: $('#OldincrementPercentage').val(),
            remarks: $('#remarks').val(),
            earningHeads: earningHeads,
            deductionHeads: deductionHeads,
            totalEarnings: Number($("#displayTotalEarnings").val()),
            totalDeductions: Number($("#displayTotalDeductions").val())
        };
        $.post(server_base_url + "hrms/salary/EmployeePromotion/Save", {
            obj: JSON.stringify(obj),
            userid: getUserSessionElement("userId"),
            empid: $('#employeeId').val()
        }).done(function (data) {
            var datastr = data.noposts;
            if (datastr == "NoPostAvailableForThisCategory")
            {
                if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
                    disableDiv(FieldGroupForCF);
                    setTimeout(function () {
                        scrolupfunction();
                        payrollEmployeePromotionMaster("dashBoardBodyMainDiv");
                        displayErrorMessages(successMsgDivCF, "NoPostAvailableForThisCategory", "");
                    }, 3000);
                    clearSuccessMessageAfterTwoSecond(successMsgDivCF);
                }
            } else
            {
                saveOrUpdateCommonFunctionInEmployeePromotion(data);
            }
        });
    }
}
function  saveOrUpdateCommonFunctionInEmployeePromotion(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        setTimeout(function () {
            scrolupfunction();
            if ($("#saveorupdate").val() == "update" || $("#saveorupdate").val() == "Update") {
                successmessagetobedisplayed = updateMessage;
            }
            payrollEmployeePromotionMaster("dashBoardBodyMainDiv");
            displaySuccessMessages(successMsgDivCF, successmessagetobedisplayed, "");
        }, 1000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function viewPayrollEmployeePromotionList(divId) {
    if (checkUserPrivelege(pvViewEmployeePromotion)) {
        var columsName = ["Prom./Trans.Code", "Employee Code", "Employee Name", "Dated"];
        createTableWithEditDeletePrivilage(innerDivCF, "List of Employee Promoted", divId, MsgDivInTableCF, columsName, pvUpdateEmployeePromotion, pvDeleteEmployeePromotion);
        $.get(server_base_url + "hrms/salary/EmployeePromotion/ViewList", {
            ddo: getUserSessionElement(seDDOId),
            location: getUserSessionElement(seLocationId)
        }).done(function (bdata) {
            if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        var divIdBody = divId + "body";
                        $("#" + divId).append("<tbody id='" + divIdBody + "' class='tabel table-bordered'/>");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var obj = JSON.stringify(bdata[i]);
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].promotionCode + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].empCode + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].empName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].promotedDate + "</td>");
                            if (checkUserPrivelege(pvUpdateEmployeePromotion)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=fetchEmployeePromotionForUpdate('" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteEmployeePromotion)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletepayrollEmployeePromotion','viewPayrollEmployeePromotionList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
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

function fetchEmployeePromotionForUpdate(employeeId) {
    $("#viewPayrollEmployeePromotionListbody tr").css("background-color", "white");
    $("#viewPayrollEmployeePromotionListbody tr" + "#" + employeeId).css("background-color", "rgba(10, 129, 156, 0.3)");

    $.get(server_base_url + "payroll/PayrollDetails/EmployeePromotion/FetchforUpdate", {
        employeeId: employeeId
    }).done(function (pdata) {

        pdata = encodeURI(JSON.stringify(pdata));
        updatepayrollEmployeePromotion(pdata, employeeId);
    });
}

function updatepayrollEmployeePromotion(obj, employeeId) {
    if (checkUserPrivelege(pvUpdateEmployeePromotion)) {
        obj = decodeURI(obj);
        obj = JSON.parse(obj);
        resetAllValuesInSpecifiedDiv(FieldGroupForCF);
        if (obj.category != undefined && obj.category != null && obj.category != "" && obj.category != "undefined")
        {
            $('#category').text("").val("").val(obj.category);
        } else
        {
            $.get(server_base_url + "hrms/EmployeeMaster/Employee/getEmployeeForUpdate", {
                employeeId: obj.empid
            }).done(function (pdata) {
                $('#category').text("").val("").val(pdata.category);
            });
        }
        $("#employeeCode").append("<option value='" + obj.empCode + "' selected>" + obj.empCode + "</option>");
        $("#employeeName").val(obj.empName);
        $("#Oldlocation").val(obj.oldLocation);
        $("#Olddesignation").val(obj.oldDesignation);
        $("#Olddepartment").val(obj.oldDept);
        $("#Oldgrade").val(obj.oldGrade);
        $("#Oldnature").val(obj.oldNature);
        $("#OldpostingCity").val(obj.oldPostingCity);
        $("#OldfundType").val(obj.oldFundType);
        $("#OldbudgetHead").val(obj.oldBudgetHead);
        $("#Olddiscipline").val(obj.oldDispline);
        $("#Oldassociation").val(obj.oldAssociation);
        $("#Oldbank").val(obj.oldBank);
        $("#Oldacnumber").val(obj.oldAccountNum);
        $("#Oldbasic").val(obj.oldBasic);
        $("#OldgradePay").val(obj.oldGradePay);
        $("#OldincrementPercentage").val(obj.oldIncrementPercent);
        $("#employeeId").text("").val("").val(obj.empid);

        getDesignationUsingDDOInUpdate(obj.ddo, obj.designation);
        getLocationBasedOnDDOInUpdate(obj.ddo, obj.location);
        getDepartmentBasedOnDDOInUpdate(obj.ddo, obj.department);
        getFTGradeClassBasedOnDDODESIGNATIONInUpdate(obj.ddo, obj.designation, obj.fundType, obj.grade);
        getBudgetHeadBasedOnDDODesignationFundTypeInUpdate(obj.ddo, obj.designation, obj.fundType, obj.budgetHead);
        getNatureTypeBasedOnDDODesignationFundTypeBudgetHeadInUpdate(obj.ddo, obj.designation, obj.fundType, obj.budgetHead, obj.natureType);
        getDisciplineBasedOnDDODesignationFundTypeBudgetHeadNatureTypeInUpdate(obj.ddo, obj.designation, obj.fundType, obj.budgetHead, obj.natureType, obj.discipline);
        $("#ddo").val(obj.ddo);
        $("#postingCity").val(obj.postingCity);
        $("#location").val(obj.location);
        $("#association").val(obj.association);
        $("#bank").val(obj.bank);
        $("#promOrTransCode").val(obj.promotionCode);
        $("#acnumber").val(obj.acnumber);
        $("#gradePay").val(obj.gradePay);
        $("#incrementPercentage").val(obj.incrementPercentage);
        $("#dated").val(obj.promotedDate);
        $("#remarks").val(obj.remarks);
        $("#duedate").val(obj.IncrementDueDate);
        $("#basic").val(obj.basic);
        $("#status").val(obj.promotionStatus);
        $("#odlDDO").val(obj.oldDDO);
        $('#displayTotalEarnings').text("").val(obj.totalEarnings);
        $('#displayTotalDeductions').text("").val(obj.totalDeductions);
        $("#Id").val(obj._id.$oid);
        enableconditions();
        $("#saveorupdate").val("update");
        $("#saveOrUpdateRowId").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "payrollEmployeePromotionMaster('" + DashboardMainDivID + "')");
        fetchEmployeeJsonForUpdateInEMP_Promotion(obj.empid, "update");
    }
}

function updatePayrollEmployeePromotionDetails() {
    if (checkUserPrivelege(pvUpdateEmployeePromotion)) {
        var Id = $("#Id").val();
        var earningHeads = [];
        var deductionHeads = [];
        $('table#displayEarningHeadTable tbody tr input[type="checkbox"][name="case"]:checked').each(function () {
            var row = $(this).closest('tr');
            earningHeads.push({
                description: row.find('td:eq(2) input').val(),
                mapping: row.find('td:eq(3)').text(),
                amount: Number(row.find('td:eq(4) input').val()),
                effectiveFromDate: row.find('td:eq(5) input').val()
            });
        });
        $('table#displayDeductionHeadTable tbody tr input[type="checkbox"][name="case"]:checked').each(function () {
            var row = $(this).closest('tr');
            deductionHeads.push({
                description: row.find('td:eq(2) input').val(),
                mapping: row.find('td:eq(3)').text(),
                amount: Number(row.find('td:eq(4) input').val()),
                effectiveFromDate: row.find('td:eq(5) input').val()
            });
        });
        var obj = {
            empid: $('#employeeId').val(),
            ddo: $("#ddo").val(),
            location: $('#location').val(),
            department: $('#department').val(),
            designation: $('#designation').val(),
            grade: $('#gradePromo').val(),
            fundType: $('#fundType').val(),
            category: $('#category').val(),
            budgetHead: $('#budgetHead').val(),
            natureType: $('#natureType').val(),
            discipline: $('#discipline').val(),
            postingCity: $('#postingCity').val(),
            association: $('#association').val(),
            bank: $('#bank').val(),
            acnumber: $('#acnumber').val(),
            basic: Number($('#basic').val()),
            gradePay: Number($('#gradePay').val()),
            incrementPercentage: $('#incrementPercentage').val(),
            IncrementDueDate: $('#duedate').val(),
            promotionCode: $('#promOrTransCode').val(),
            promotionStatus: $('#status').val(),
            promotedDate: $('#dated').val(),
            remarks: $('#remarks').val(),
            earningHeads: earningHeads,
            deductionHeads: deductionHeads,
            totalEarnings: Number($("#displayTotalEarnings").val()),
            totalDeductions: Number($("#displayTotalDeductions").val())
        };
        $.post(server_base_url + "hrms/salary/EmployeePromotion/Update", {
            objId: Id,
            obj: JSON.stringify(obj),
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == "Updated" || data == Updated)
            {
                saveOrUpdateCommonFunctionInEmployeePromotion(data);
            } else
            {
                if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
                    disableDiv(FieldGroupForCF);
                    setTimeout(function () {
                        scrolupfunction();
                        payrollEmployeePromotionMaster("dashBoardBodyMainDiv");
                        displayErrorMessages(successMsgDivCF, "No Post Available For This Category", "");
                    }, 3000);
                    clearSuccessMessageAfterTwoSecond(successMsgDivCF);
                }
            }
        });
    }
}
function deletepayrollEmployeePromotion(Id) {
    if (checkUserPrivelege(pvDeleteEmployeePromotion)) {
        $.post(server_base_url + "hrms/salary/EmployeePromotion/Delete", {
            objId: Id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                payrollEmployeePromotionMaster(DashboardMainDivID);
                displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
            }
        });
    }
}
function getGradePayValueinemployeePromotion() {
    var id = getUserSessionElement("userId");
    $.get(server_base_url + "hrms/salary/Designation/getGradepayValue", {
        id: $("#gradePromo").val(),
        userId: id
    }).done(function (data) {
        if (data != null) {
// alert(data);
            var bdata = JSON.parse(data);
            // alert(bdata.gradePay);
            $("#gradePay").val(bdata.gradePay);
        }
    });
}

