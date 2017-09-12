/* 
 *Employee Master....Curd Operation
 */
var BasicPay = "Basic Pay";
var Deductions = "Deductions";
var Earnings = "Earnings";
var basicE_V = "basicE_V";
var gradePayE_V = "gradePayE_V";
var associationE_V = "associationE_V";
var stopGPFE_V = "stopGPFE_V";
var classMasterE_V = "classMasterE_V";
var postingCityE_V = "postingCityE_V";
var ptApplicableE_V = "ptApplicable";
var natureTypeE_V = "natureTypeE_V";
var ddoE_V = "ddoE_V";
var salaryTypeE_V = "salaryTypeE_V";
var ADD_BASIC_SALARY_HEAD_FIRST = "Add Basic Salary Heads  First";
var JoiningDtE_V = "JoiningDtE_V";
function setDdoDependencies() {
    setUserSessionElement("ddo", "57e8cc6ebc3ec4e93c0b0786");
    var ddo = getUserSessionElement("ddo");
    $.get(server_base_url + "common/GetLoggedInDDO", {
        ddo: ddo,
        userId: getUserSessionElement("userId")
    }).done(function (data) {
        data = JSON.parse(data);
        $("#ddo").text("").append("<option value=" + data._id.$oid + " selected>" + data.ddoName + "</option>").prop("disabled", true);
        $("#ddo").trigger("change");
    });
}
function employeemaster(divId) {
    scrolupfunction();
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS ></a></label> <label><a href="javascript:hrmsEmployeeMasterTabs()"> Employee Master</a></label> > <label> Create & Manage Employee</label>');
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateEmployee)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Employee Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='empMaster'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#empMaster").click(function () {
            $("#collapseOne2").toggle();
            if ($("#empMaster span").hasClass("glyphicon-minus-sign")) {
                $("#empMaster").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#empMaster").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");

        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        $("#FieldGroup").append("<input type='hidden' id='employeeId'>");
        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("Employee Code", "required") + "" + getInputwithErrSpan("employeeCode", "", "", "disabled"));
        $("#Row1Col2").append(getLabel("Manual Employee Code", "required") + "" + getInputwithErrSpan("employeeCodeM", "", "", ""));
        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col2").append("<label class='col-sm-12 control-label'>Upload Photo</label>");
        $("#Row2Col2").append("<div class='col-sm-4' id='FieldDiv3' ><input type='file' id='employeePic' size='100' name='employeePic' onchange='uploadfunction()'></input></div>");
        $("#Row2Col1").append("<div id='FieldDiv2' class='col-sm-4'  >");
        $("#FieldDiv2").append("<label class=' control-label'>Salutation</label><select class='form-control' id='salutationOption'></select></div>");
        $("#Row2Col1").append("<div id='FieldDiv3' class='col-sm-8'  >");
        $("#FieldDiv3").append("<label class='control-label'>Employee Name<span class='require'>*</span></label><input type='text' id='employeeName' onkeypress='return validatealphanumeric(event)' onclick='return validatealphanumeric(event)' placeholder='Enter Employee Name' class='form-control'></input></div>");
        $("#FieldDiv3").append("<span id='employeeNameErr'></span><br>");
        $("#Row2Col1").attr("class", "row");
        $("#panelMainBody").append("<div id='panelRow2' class='row' />");
//Division Strats here
        $("#panelRow2").append("<div id='panelRow2ini' class='col-sm-6' />");
        $("#panelRow2").append("<div id='panelRow2out1' class='col-sm-1'  />");
        $("#panelRow2").append("<div id='panelRow2outa' class='col-sm-4' width='500' height='550'/>");
        $("#panelRow2outa").append("<div id='panelRow2out' class='col-sm-12'  width='500' height='550'/>");
        $("#panelRow2outa").append("<div id='RemoveButtonDiv' />");
//    $("#panelRow2").append("<div id='panelRow2outa' class='col-sm-4'  width='500' height='550'/>");
//    $("#panelRow2").append("<div id='panelRow2out' class='col-sm-4'  width='500' height='550'/>");
        $("#panelRow2").append("<div id='panelRow2out2' class='col-sm-1'  />");
        $("#panelRow2out").append("[File size should not be larger than 100KB ]<br>[File Format :&nbsp .jpeg , .gif , .png and .bmp &nbsp  ] ");
        $("#panelRow2ini").append("<div id='FieldGroup2' class='row form-group' />");
        $("#FieldGroup2").append("<label class='control-label'>Father Name</label><input type='text' onkeypress='return validatealphanumeric(event)' id='fatherName' class='form-control'  placeholder='Enter father name'  size=50 maxlength=50>");
        $("#panelRow2ini").append("<div id='FieldGroup3' class='row' />");
        $("#FieldGroup3").append("<label class='control-label'>Gender<span class='require'>*</span></label><select id='gender' class='form-control'></select>");
        $("#FieldGroup3").append("<span id='genderErr'></span><br>");
        $("#panelRow2ini").append("<div id='FieldGroup4' class='row' />");
        $("#FieldGroup4").append("<label class='control-label'>Category<span class='require'>*</span></label><select id='category' class='form-control'></select>");
        $("#FieldGroup4").append("<span id='categoryErr'></span><br>");
        $("#panelRow2ini").append("<div id='FieldGroup5' class='row' />");
        $("#FieldGroup5").append("<label class=' control-label'>Religion<span class='require'>*</span></label><select id='religion' class='form-control'></select>");
        $("#FieldGroup5").append("<span id='religionErr'></span><br>");
        $("#panelRow2ini").append("<div id='FieldGroup6' class='row' />");
        $("#FieldGroup6").append("<label class='control-label'>Marital Status<span class='require'>*</span></label><select id='maritalStatus' class='form-control'></select>");
        $("#FieldGroup6").append("<span id='maritalStatusErr'></span><br>");
        //  $("#FieldDiv8").append("<span id='maritalStatusErr'></span><br>");
        $("#panelRow2ini").append("<div id='FieldGroup7' class='row' />");
        $("#FieldGroup7").append("<label class='control-label'>Date of Birth<span class='require'>*</span></label><input type='text' class='form-control ' placeholder='Click here to enter DOB' onkeypress='return false' id='dob'/>");
//        $(function () {
        var start = new Date();
        start.setFullYear(start.getFullYear() - 70);
        var end = new Date();
        end.setFullYear(end.getFullYear() - 18);
        $('#dob').datepicker({
            changeMonth: true,
            changeYear: true,
            startDate: start,
            endDate: end,
            yearRange: start.getFullYear() + ':' + end.getFullYear()
        });
//        });
        $("#FieldGroup7").append("<span id='dobErr'></span><br>");
        $("#panelRow2ini").append("<div id='FieldGroup8' class='row' />");
        $("#FieldGroup8").append("<label class='control-label'>Email<span class='require'>*</span></label><input type='email' class='form-control' id='email'>");
        $("#FieldGroup8").append("<span id='emailErr'></span><br>");
        $("#panelRow2ini").append("<div id='FieldGroup9' class='row' />");
        $("#FieldGroup9").append("<label class='control-label'>PAN<span class='require'>*</span></label><input type='text' id='panNo'   class='form-control' placeholder='Enter Pan No Ex. XXXXX1234X' maxlength=10>");
        $("#FieldGroup9").append("<span id='panNoErr'></span><br>");
        $("#panelRow2ini").append("<div id='FieldGroup10' class='row' />");
        $("#FieldGroup10").append("<label class='control-label'>Remarks</label><textarea type='text' id='remarks'  class='form-control' placeholder='Enter Remarks'></textarea>");
        //Bank Details

        $("#panelMainBody").append("<label><u><h3>Bank Details</h3><u></label><hr><div id='panelRow3' class='row' />");
        $("#panelRow3").append("<div id='FieldGroup11' class='form-group' />");
        getTwoColumnInRow("FieldGroup11", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel("Pay Mode", "required") + "" + getDropDown("payMode"));
        $("#Row5Col2").append(getLabel("Account Number", "") + "" + getInputwithErrSpan("acnumber", "", "", "onkeypress='return validateNumber(event)'"));
        //row 2
        getTwoColumnInRow("FieldGroup11", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel("Bank", "") + "" + getDropDown("bank"));
        $("#panelMainBody").append("<label><u><h3>Other Details</h3><u></label><hr><div id='panelRow5' class='row' />");
        $("#panelRow5").append("<div id='FieldGroup13' class='form-group' />");
        getTwoColumnInRow("FieldGroup13", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        $("#Row6Col2").append(getLabel("Date Of Appointment", "required") + "" + getInputwithErrSpan("dateOfAppointment", "", "", "onkeypress='return false'"));
        $('#dateOfAppointment').datepicker({
            changeYear: true,
            changeMonth: true,
            yearRange: '-50:+50'

        });
        getTwoColumnInRow("FieldGroup13", "Row6a", "Row6aCol1", "Row6aCol2");
        $("#Row6aCol1").append(getLabel("Designation", "required") + "" + getDropDown("designation"));
        $("#Row6aCol2").append(getLabel("Date Of Retirement", "") + "" + getInput("dateOfRetirement", "", "", "readonly")).removeAttr("class", "form-group");
        //
        getTwoColumnInRow("FieldGroup13", "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel("Location", "required") + "" + getDropDown("location"));
        $("#Row7Col2").append(getLabel("Date Of Joining", "required") + "" + getInputwithErrSpan("dateOfJoining", "", "", "onkeypress='return false'"));
        $('#dateOfJoining').datepicker({
            changeYear: true,
            changeMonth: true,
            yearRange: '-100:+100'

        });
//        
        getTwoColumnInRow("FieldGroup13", "Row8", "Row8Col1", "Row8Col2");
        $("#Row8Col1").append(getLabel("Department", "required") + "" + getDropDown("department"));
        $("#Row8Col2").append(getLabel("Last Appointment Date", "") + "" + getInputwithErrSpan("lastAppointmentDate", "", "", "onkeypress='return false'"));
        $('#lastAppointmentDate').datepicker({
            changeYear: true,
            changeMonth: true,
            yearRange: '-100:+0'

        });
        //
        getTwoColumnInRow("FieldGroup13", "Row9", "Row9Col1", "Row9Col2");
        $("#Row9Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));
        $("#Row9Col2").append(getLabel("Last Joining Date", "") + "" + getInputwithErrSpan("lastJoiningDate", "", "", "onkeypress='return false'"));
        $('#lastJoiningDate').datepicker({
            changeYear: true,
            changeMonth: true,
            yearRange: '-100:+0',
            format: 'dd/mm/yyyy'
        });
        //
        getTwoColumnInRow("FieldGroup13", "Row10", "Row10Col1", "Row10Col2row");
        $("#Row10Col1").append("<label class='control-label'>Budget Head<span class='require'>*</span></label><select id='budgetHead' class='form-control'></select>");
        $("#Row10Col2row").append("<div class='row' id='Row10Col2aa'>");
        $("#Row10Col2aa").append("<div id='FieldDiv6aa' class='col-sm-4' />");
        $("#Row10Col2aa").append("<div id='FieldDiv7aa' class='col-sm-8' />");
        $("#FieldDiv6aa").append("<label class=' control-label'>Employee's Left Status</label><select onchange='disable()' class='form-control' id='EmployeeLeftStatusYesNo'><option value='No'>No</option><option value='Yes'>Yes</option></select></div>");
        $("#FieldDiv7aa").append("<label class='control-label'></label><select id='EmployeeLeftStatus' class='form-control'></select></div>");
        //
        getTwoColumnInRow("FieldGroup13", "Row11", "Row11Col1", "Row11Col2");
        $("#Row11Col1").append(getLabel("Nature Type", "required") + "" + getDropDown("natureType"));
        $("#Row11Col2").append(getLabel("Leaving Date", "") + "" + getInputwithErrSpan("LeavingDate", "", "", "onkeypress='return false'"));
        $('#LeavingDate').datepicker({
            changeYear: true,
            changeMonth: true,
            yearRange: '-0:+50',
            minDate: '+0D'
        });
        //
        getTwoColumnInRow("FieldGroup13", "Row12", "Row12Col1", "Row12Col2");
        $("#Row12Col1").append(getLabel("Discipline", "required") + "" + getDropDown("discipline"));
        $("#Row12Col2").append(getLabel("Leaving Remarks", "") + "" + getInputwithErrSpan("LeavingRemarks", "", "", ""));
        //
        getTwoColumnInRow("FieldGroup13", "Row13", "Row13Col1", "Row13Col2");
        $("#Row13Col1").append(getLabel("Reporting To", "") + "" + getDropDown("reportingTo"));
        $("#Row13Col2").append(getLabel("Increment Due Date", "") + "" + getInputwithErrSpan("IncrementDueDate", "", "", "onkeypress='return false'"));
//        $('#IncrementDueDate').datepicker({
//            changeYear: true,
//            changeMonth: true,
//            yearRange: '-0:+100',
//            startDate: '+1'
//        });

        var dateString = new Date();
        var day = dateString.getDate();
        var month = (dateString.getMonth() == 0) ? 12 : (dateString.getMonth());
        var year = (dateString.getMonth() == 0) ? (dateString.getFullYear() - 1) : dateString.getFullYear();
        var dateObject = new Date(month + "/" + day + "/" + year);
        $("#IncrementDueDate").datepicker(
                {
                    startDate: dateObject,
                    beforeShowDay: function (date) {
                        if (date.getDate() == 1) {
                            return true;
                        }
                        return false;
                    }
                });

        getTwoColumnInRow("FieldGroup13", "Row14", "Row14Col1", "Row14Col2");
        $("#Row14Col1").append(getLabel("PF Bank", "") + "" + getDropDown("pfBank"));
        getTwoColumnInRow("Row14Col2", "depuationIsSuspendedRow", "depuationCol", "isSuspendedCol");
//    $("#Row14Col2").append(getLabel("On Deputation", "") + "" + getCheckBoxwithLabel("onDeputation"));
        $("#depuationCol").append(getLabel("On Deputation", "") + "" + getCheckBoxwithLabel("onDeputation"));
        $("#isSuspendedCol").append(getLabel("Is Suspended", "") + "" + getCheckBoxwithLabel("isSuspended"));
        $("#isSuspended").prop("disabled", true);
        $("#onDeputation").prop("disabled", true);
        //
        getTwoColumnInRow("FieldGroup13", "Row15", "Row15Col1", "Row15Col2");
        $("#Row15Col1").append(getLabel("PF Number", "") + "" + getInputwithErrSpan("pfNumber", "", "", ""));
        $("#Row15Col2").append(getLabel("To DDO", "") + "" + getDropDown("fromDDO"));
        $("#fromDDO").prop("disabled", true);
        //
        getTwoColumnInRow("FieldGroup13", "Row16", "Row16Col1", "Row16Col2");
        $("#Row16Col1").append(getLabel("PF Balance", "") + "" + getInputwithErrSpan("pfBalance", "", "", ""));
        $("#Row16Col2").append(getLabel("Association", "") + "" + getDropDown("association"));
        //
        getTwoColumnInRow("FieldGroup13", "Row17", "Row17Col1", "Row17Col2");
        $("#Row17Col1").append(getLabel("Is PG Teacher", "") + "" + getCheckBoxwithLabel("isPgTeacher"));
        $("#Row17Col2").append(getLabel("Is Handicapped", "") + "" + getCheckBoxwithLabel("isHandicapped"));
        //
        getTwoColumnInRow("FieldGroup13", "Row18", "Row18Col1", "Row18Col2");
        $("#Row18Col1").append(getLabel("PT Applicable", "") + "" + getCheckBoxwithLabel("ptApplicable"));
        $("#Row18Col2").append(getLabel("Stop Salary", "") + "" + getCheckBoxwithLabel("stopSalary"));
        //
        getTwoColumnInRow("FieldGroup13", "Row19", "Row19Col1", "Row19Col2");
        $("#Row19Col1").append(getLabel("Stop GPF", "") + "" + getCheckBoxwithLabel("stopGPF"));
        $("#Row19Col2").append(getLabel("Is Gazetted", "") + "" + getCheckBoxwithLabel("isGazetted"));
        //
        getTwoColumnInRow("FieldGroup13", "Row20", "Row20Col1", "Row20Col2");
        $("#Row20Col1").append(getLabel("Audit Number", "") + "" + getInputwithErrSpan("auditNumber", "", "", ""));
        $("#Row20Col2").append(getLabel("Personal File No", "") + "" + getInputwithErrSpan("personalFileNo", "", "", ""));
        //
        getTwoColumnInRow("FieldGroup13", "Row21", "Row21Col1", "Row21Col2");
        $("#Row21Col1").append(getLabel("Work Details", "") + "" + getInputwithErrSpan("workDetails", "", "", ""));
        $("#Row21Col2").append(getLabel("Welfare No", "") + "" + getInputwithErrSpan("welfareNo", "", "", ""));
        //
        getTwoColumnInRow("FieldGroup13", "Row22", "Row22Col1", "Row22Col2");
        $("#Row22Col1").append(getLabel("PG Code", "") + "" + getInputwithErrSpan("pgCode", "", "", ""));
        $("#Row22Col2").append(getLabel("Posting DDO", "") + "" + getDropDown("postingDDO"));
        //
        getTwoColumnInRow("FieldGroup13", "Row23", "Row23Col1", "Row23Col2");
        $("#Row23Col1").append(getLabel("Salary Bill Type", "required") + "" + getDropDown("salaryBillType"));
        $("#Row23Col2").append(getLabel("Class", "required") + "" + getDropDown("class"));
        //
        //Salary Details
        $("#panelMainBody").append("<label><u><h3>Define Salary Structure</h3><u></label><hr><div id='panelRow22' class='row' />");
        $("#panelRow22").append("<div id='FieldGroup31' class='form-group' />");
        getTwoColumnInRow("FieldGroup31", "Row24", "Row24Col1", "Row24Col2");
        $("#Row24Col1").append(getLabel("Salary Type", "required") + "" + getDropDown("salaryType"));
        $("#Row24Col2").append(getLabel("Posting City", "required") + "" + getDropDown("postingCity"));
        //
        getTwoColumnInRow("FieldGroup31", "Row25", "Row25Col1", "Row25Col2");
        $("#Row25Col1").append(getLabel("Designation", "required") + "" + getDropDownreadonly("seconddesignation", "readonly"));
        $("#Row25Col2").append(getLabel("Posted Designation", "required") + "" + getDropDown("postedDesignation"));
        //
        getTwoColumnInRow("FieldGroup31", "Row26", "Row26Col1", "Row26Col2");
        $("#Row26Col1").append(getLabel("PF Type", "required") + "" + getDropDown("pfType"));
        $("#Row26Col2").append(getLabel("Quarter No", "") + "" + getDropDown("quarterNo"));
        //
        getTwoColumnInRow("FieldGroup31", "Row27", "Row27Col1", "Row27Col2");
        $("#Row27Col1").append(getLabel("Grade", "required") + "" + getDropDown("grade"));
        $("#Row27Col2").append(getLabel("Grade Pay", "") + "" + getInputwithErrSpan("gradePay", "", "", "onkeypress='return validateNumber(event)'"));
        //
        getTwoColumnInRow("FieldGroup31", "Row28", "Row28Col1", "Row28Col2");
        $("#Row28Col1").append(getLabel("Basic", "required") + "" + getInputwithErrSpan("basic", "", "", "onkeypress='return validateNumber(event)'"));
        $("#Row28Col2").append(getLabel("Increment Percentage", "") + "" + getInputwithErrSpan("incrementPercentage", "", "", "onkeypress='return validateNumber(event)'"));
        //
//    getTwoColumnInRow("FieldGroup35a", "Row29", "Row29Col1", "Row29Col2");
//    $("#Row29Col1").append(getLabel("Head Slab", "required") + "" + getDropDown("headSlab"));

        $("#panelMainBody").append("<input type='hidden' id='headButtonDisableFlag'>");
        $("#panelMainBody").append("<div id='panelRowForErrorMsg' />");
        $("#panelMainBody").append("<div id='panelRow27' class='row' />");

        getOneColumnInRow("FieldGroup31", "Row30", "Row30Col1");
        getOneColumnInRow("FieldGroup31", "Row30a", "Row30Col2");
//    getTwoColumnInRow("FieldGroup31", "Row30", "Row30Col1", "Row30Col2");
        $("#panelMainBody").append("<div id='panelRow27a' class='row form-group' />");
        getOneColumnInRow("panelRow27a", "Row36a", "Row36aCol1");
        getOneColumnInRow("panelRow27a", "Row36b", "Row36aCol2");
//    getTwoColumnInRow("panelRow27a", "Row36a", "Row36aCol1", "Row36aCol2");

        //
        $("#panelMainBody").append("<div id='HeadsMessagesDivBeforeSaveButton' />");
        $("#panelMainBody").append("<div id='panelRow28' class='row' />");
        $("#panelRow28").append("<div  class='col-xs-12'/><center><button type='button' id='headsbuttton' class='btn btn-success mr5 '  onclick='addBothHeadsInEmployee()'>HEADS</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick=employeemaster('" + DashboardMainDivID + "') class='btn btn-warning mr5' name='reset' value='reset'>RESET</button></center></div>");
//    $("#panelRow28").append("<div  class='col-xs-12'/><center><button type='button' value='Save' id='saveupdatebuttonId' class='btn btn-success mr5 '  onclick='employeeValidation1()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllEmployeeDataa()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");

        $('#panNo').on("change", function () {
            this.value = this.value.toUpperCase();
        });
        $('#pfNumber').on("change", function () {
            this.value = this.value.toUpperCase();
        });
        viewSalutationListForOption("", "salutationOption");
        viewReligionListForOption();
        viewMaritalListForOption();
        setPayMode();
        viewBankListForOption("", "bank");
        viewBankListForOption("", "pfBank");
//        viewReDddoListForList("", "ddo");
        viewReDddoListForList("", "postingDDO");
        viewSalaryHeadListForOption("", "salaryType");
        viewCityForOption("", "postingCity");
        viewDesignationListForOption("", "postedDesignation", "Posted Designation");
        getGenderOption("", "gender");
        getAssociationFoorOption("", "association", "Association");
        getCategoryOptionsForTables("", "category", "Category");
        viewOption("hrms/salary/PFType/ViewList", "", "PFType", "pfType", "PF Type");
        viewOption("hrms/salary/SalaryBillTypeOrEC/ViewList", "", "description", "salaryBillType", "Salary Bill Type");
//        getAllLocationForOptions("", "location", "Location");
        getAllReportingToForOptions("", "reportingTo", "Reporting To");
        //    viewDepartmentForOption();
        //    viewDisciplineForOption();
        //    fetchAllNaturesTypeForOption();
        //    fetchAllFundsForOption();
        //    viewBudgetHeadForOption();
        //    viewDesignationListForOption("", "designation", "Designation");
        //    viewOption("hrms/salary/Class/ViewList", "", "name", "class", "Class");
        //    viewOption("hrms/salary/Grade/ViewList", "", "gradeName", "grade", "Grade");
        //    viewOption("hrms/salary/Employee/ViewList", "", "employeeName", "reportingTo", "Reporting To");

        //********************************************************************On changes functions********************************************************************
        $("#ddo").attr("onchange", "getdatatoemployeeUsingDDO();getDepartmentBasedOnDDO();");
//        $("#ddo").attr("onchange", "getdatatoemployeeUsingDDO();getLocationBasedOnDDO();getDepartmentBasedOnDDO();");
        $("#designation").attr("onchange", "getFTGradeClassBasedOnDDODESIGNATION();getDesignationCopytoSecondDesignation();getempRetirementDate()");
        getDesignationCopytoSecondDesignation();
        // $("#designation").attr("onchange", "getRetirementDate()");
        //  $("#onDeputation").attr("onclick", "validateonDeputation()");
        $("#fundType").attr("onchange", "getBudgetHeadBasedOnDDODesignationFundType()");
        $("#budgetHead").attr("onchange", "getNatureTypeBasedOnDDODesignationFundTypeBudgetHead()");
        $("#natureType").attr("onchange", "getDesciplineBasedOnDDODesignationFundTypeBudgetHeadNatureType()");
        $("#payMode").attr("onchange", "disableEnableBankAccNumberDropDown()");
        $("#grade").attr("onchange", "getGradePayValueinemployee()");
        $("#bank").prop("disabled", true);
        $("#acnumber").prop("disabled", true);
        $("#class").prop("disabled", true);
        $("#quarterNo").prop("disabled", true);

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        // $("#grade").prop("disabled", true);
        //  $("#employeeCode").prop("disabled", true);
        //  $("#ddo").attr("onchange", "getdepartmentsUsingDDO()");
//***************************************************************************Get Employee Code***************************************************************
//    setDdoDependencies();
        getEmployeeCodeUnique();
        if (checkUserPrivelege(pvViewEmployee)) {
            $("#tableHeader").append("<div id='maritalListPanel' class='panel panel-blue' />");
            $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
            $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
            $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Employee(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='empMasterList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
            $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
            $("#empMasterList").click(function () {
                $("#collapseOne3").toggle();
                if ($("#empMasterList span").hasClass("glyphicon-minus-sign")) {
                    $("#empMasterList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
                } else {
                    $("#empMasterList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
                }
            });
            $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
            $("#FieldGroup").append("<input type='hidden' id='basicId'>");
            viewEmployeeList('listpanelMainBody');
        }
    }
}

function addBothHeadsInEmployee(earoptions, dedoption) {
    $("#HeadsMessagesDivBeforeSaveButton").text("");
    $("#basicErr").text("").val();
    var salaryType = $("#salaryType").val();
    var postedDesignation = $("#postedDesignation").val();
    var pfType = $("#pfType").val();
    var grade = $("#grade").val();
    //This going to backend to get salary heads
    var ddo = $("#ddo").val();
    var basic = Number($("#basic").val());
    var joiningDt = $("#dateOfJoining").val();
    var postingCity = $("#postingCity").val();
    var classMaster = $("#class").val();
    var natureType = $("#natureType").val();
    var gradePay = Number($("#gradePay").val());
    var association = $("#association").val();
    var stopGPF = "No";
    if ($("#stopGPF").prop("checked") == true) {
        stopGPF = "Yes";
    }
    var ptApplicable = "No";
    if ($("#ptApplicable").prop("checked") == true) {
        ptApplicable = "Yes";
    }
    if (preValidation(grade) || preValidation(pfType) || preValidation(postedDesignation) || preValidation(basic) || preValidation(gradePay) || preValidation(classMaster) || preValidation(postingCity) || preValidation(natureType) || preValidation(ddo) || preValidation(salaryType)) {
        displayLargeErrorMessagesInCenterInRed("panelRowForErrorMsg", mandatoryFieldMsg);
    } else {
        $("#panelRowForErrorMsg").text("");
        if (HeadsValidation()) {
            var employeeGetHeadsJson = {
                basic: basic,
                gradePay: gradePay,
                association: association,
                stopGPF: stopGPF,
                classMaster: classMaster,
                postingCity: postingCity,
                natureType: natureType,
                ddo: ddo,
                salaryType: salaryType,
                ptApplicable: ptApplicable
            };
            $.get(server_base_url + "hrms/employee/Employee/GetSalaryHeads", {
                employeeGetHeadsJson: JSON.stringify(employeeGetHeadsJson),
            }).done(function (data) {
                data = JSON.parse(data);
                if (data.statusMessageOfHeads == ADD_BASIC_SALARY_HEAD_FIRST || data == "500" || data == 500 || data == 400 || data == "400" || data == "404" || data == 404) {
                    EarningHeads = null;
                    DeductionHeads = null;
                    EarningHeadsDisplay("Row30Col1", EarningHeads, earoptions);
                    DeductionHeadsDisplay("Row30Col2", DeductionHeads, dedoption);
                    if ($("#saveorupdate").val() == "save" || $("#saveorupdate").val() == "Save")
                        $("#panelRow28").text("").append("<div  class='col-xs-12'/><center><button type='button' value='Save' id='saveupdatebuttonId' class='btn btn-success mr5 '  onclick='employeeValidation1()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button'  onclick=employeemaster('" + DashboardMainDivID + "') id='resetBackBtnId' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
                    if ($("#saveorupdate").val() == "Update" || $("#saveorupdate").val() == "update")
                        $("#panelRow28").text("").append("<div  class='col-xs-12'/><center><button type='button' value='Save' id='saveupdatebuttonId' class='btn btn-success mr5 '  onclick='employeeValidation1()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button'  onclick=employeemaster('" + DashboardMainDivID + "') id='resetBackBtnId' class='btn btn-warning mr5' name='reset' value='reset'>Back</button></center></div>");
                    $("#totalRow1").append("<label class='col-sm-4'>Total Deductions</label><input class='col-sm-4' type='text' id='displayTotalDeductions' readonly >");
                    $("#Row36aCol1").text("").append(getLabel_InputWithSpan("Total Earnings", "", "displayTotalEarnings", "", "readonly"));
                    $("#Row36aCol2").text("").append(getLabel_InputWithSpan("Total Deductions", "", "displayTotalDeductions", "", "readonly"));
                    $("#headsbuttton").prop("disabled", false);
                    $("#headButtonDisableFlag").text('').val("").val("disabled");
                    setUserSessionElement(basicE_V, basic);
                    setUserSessionElement(gradePayE_V, gradePay);
                    setUserSessionElement(associationE_V, association);
                    setUserSessionElement(stopGPFE_V, stopGPF);
                    setUserSessionElement(classMasterE_V, classMaster);
                    setUserSessionElement(postingCityE_V, postingCity);
                    setUserSessionElement(ptApplicableE_V, ptApplicable);
                    setUserSessionElement(natureTypeE_V, natureType);
                    setUserSessionElement(ddoE_V, ddo);
                    setUserSessionElement(salaryTypeE_V, salaryType);
                    setUserSessionElement(JoiningDtE_V, joiningDt);
                }
                var EarningHeads = data.EarningHeads;
                var DeductionHeads = data.DeductionHeads;
                EarningHeads = JSON.parse(EarningHeads);
                DeductionHeads = JSON.parse(DeductionHeads);
                EarningHeads = encodeURI(JSON.stringify(EarningHeads));
                DeductionHeads = encodeURI(JSON.stringify(DeductionHeads));
                if ($("#headButtonDisableFlag").val("enable")) {
                    if ($("#saveorupdate").val() == "save" || $("#saveorupdate").val() == "Save")
                        $("#panelRow28").text("").append("<div  class='col-xs-12'/><center><button type='button' value='Save' id='saveupdatebuttonId' class='btn btn-success mr5 '  onclick='employeeValidation1()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button'  onclick=employeemaster('" + DashboardMainDivID + "') id='resetBackBtnId' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
                    if ($("#saveorupdate").val() == "Update" || $("#saveorupdate").val() == "update")
                        $("#panelRow28").text("").append("<div  class='col-xs-12'/><center><button type='button' value='Save' id='saveupdatebuttonId' class='btn btn-success mr5 '  onclick='employeeValidation1()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick=employeemaster('" + DashboardMainDivID + "')  id='resetBackBtnId' class='btn btn-warning mr5' name='reset' value='reset'>Back</button></center></div>");
                    $("#totalRow1").append("<label class='col-sm-4'>Total Deductions</label><input class='col-sm-4' type='text' id='displayTotalDeductions' readonly >");
                    $("#Row36aCol1").text("").append(getLabel_InputWithSpan("Total Earnings", "", "displayTotalEarnings", "", "readonly"));
                    $("#Row36aCol2").text("").append(getLabel_InputWithSpan("Total Deductions", "", "displayTotalDeductions", "", "readonly"));
                    $("#headsbuttton").prop("disabled", false);
                    $("#headButtonDisableFlag").text('').val("").val("disabled");
                    setTimeout(function () {
                        //  $('table#displayEarningHeadTable tbody tr input[type="checkbox"][name="case"]:checked').trigger("keyup");
                        $(".EarningsAmount").trigger("keyup");
                        $(".DeductionAmount").trigger("keyup");
                    }, 2000);
                } else {
                    $("#headsbuttton").prop("disabled", false);
                    $("#headButtonDisableFlag").text('').val("").val("disabled");
                }
                setUserSessionElement(basicE_V, basic);
                setUserSessionElement(gradePayE_V, gradePay);
                setUserSessionElement(associationE_V, association);
                setUserSessionElement(stopGPFE_V, stopGPF);
                setUserSessionElement(classMasterE_V, classMaster);
                setUserSessionElement(postingCityE_V, postingCity);
                setUserSessionElement(ptApplicableE_V, ptApplicable);
                setUserSessionElement(natureTypeE_V, natureType);
                setUserSessionElement(ddoE_V, ddo);
                setUserSessionElement(salaryTypeE_V, salaryType);
                setUserSessionElement(JoiningDtE_V, joiningDt);
                EarningHeadsDisplay("Row30Col1", EarningHeads, earoptions);
                DeductionHeadsDisplay("Row30Col2", DeductionHeads, dedoption);
                //Setting the salary head related fields value .... to validate in save or update ... if something is change 

//                setUserSessionElement(countForHeads, 1);
                //
//Deductions
                $("#displayDeductionHeadTable").append("<tbody id='displayDeductionHeadTableBody' class='table-striped table-bordered' />");
            });
        } else {
            displayLargeErrorMessagesInCenterInRed("panelRowForErrorMsg", mandatoryFieldMsg);
        }
    }

}
function EarningHeadsDisplay(DivId, EarningHeads, options) {
    if (EarningHeads != null || EarningHeads != undefined || EarningHeads != "" || EarningHeads != "null") {
        EarningHeads = JSON.parse(decodeURI(EarningHeads));
        $("#" + DivId).text("").append("<h4><u>Earning Heads</u></h4><div class='row' id='EarningDatatablemainDiv' style='overflow-x:auto;'/>");
        $("#EarningDatatablemainDiv").append("<table class='table table-bordered table-striped table-warning' id='displayEarningHeadTable' />");
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
        var totalEarningAmount = 0;
        var inputEffectiveDate = 0;
        var checkcon = "";

        if (EarningHeads != null) {

            if (options != null) {
                options = JSON.parse(decodeURI(options));
                var joindate = $("#dateOfJoining").val();
                if (joindate == "" || joindate == null)
                {
//                    var date = new Date();
//                    inputEffectiveDate = "01" + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                    inputEffectiveDate = joindate;
                } else
                {
//                    var res = joindate.substring(0, 2);
//                    inputEffectiveDate = joindate.replace(res, "01");
                    inputEffectiveDate = joindate;
                }

                for (var i = 0; i < EarningHeads.length; i++) {
                    checkcon = "";
//                totalEarningAmount = totalEarningAmount + EarningHeads[i].calculatedAmount;

                    if (options != null) {


                        for (var j = 0; j < options.length; j++) {

                            if (EarningHeads[i]._id.$oid == options[j].salaryHeadId) {
                                totalEarningAmount = totalEarningAmount + options[j].amount;
                                checkcon = "checked";
                            }
                        }
                    }
                    //Current  Date

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
                        var gradeval = $("#gradePay").val();
                        $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "' onclick=getValueForThisHead('" + EarningHeads[i]._id.$oid + "','displayEarningHeadTableBody',this.parentNode.parentNode.rowIndex) name='case' checked disabled></td>"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i]._id.$oid + "'></td>"
                                + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
                                + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + gradeval + "'  onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                                + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
                                + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "'  name='case'  disabled></td>");
                    } else {
                        sno++;
                        var checkBoxId = EarningHeads[i]._id.$oid + "checkBox";
                        var inputTextBoxId = EarningHeads[i]._id.$oid + "inputBox";
                        $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "' class='earcheck' name='case' onchange=checkconditioninemp('" + EarningHeads[i]._id.$oid + "') " + checkcon + "></td>"
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


            } else
            {
                var joindate = $("#dateOfJoining").val();
                if (joindate == "" || joindate == null)
                {
//                    var date = new Date();
//                    inputEffectiveDate = "01" + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                    inputEffectiveDate = joindate;
                } else
                {
//                    var res = joindate.substring(0, 2);
//                    inputEffectiveDate = joindate.replace(res, "01");
                    inputEffectiveDate = joindate;
                }
                for (var i = 0; i < EarningHeads.length; i++) {
                    totalEarningAmount = totalEarningAmount + EarningHeads[i].calculatedAmount;


                    //Current  Date

//                    var date = new Date();
//                    inputEffectiveDate = "01" + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
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
                        var gradeval = $("#gradePay").val();
                        $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "' onclick=getValueForThisHead('" + EarningHeads[i]._id.$oid + "','displayEarningHeadTableBody',this.parentNode.parentNode.rowIndex) name='case' checked disabled></td>"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i]._id.$oid + "'></td>"
                                + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
                                + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + gradeval + "'  onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                                + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
                                + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "'  name='case'  disabled></td>");

                    } else {
                        sno++;
                        var checkBoxId = EarningHeads[i]._id.$oid + "checkBox";
                        var inputTextBoxId = EarningHeads[i]._id.$oid + "inputBox";
                        $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td><input type='checkbox' value='" + EarningHeads[i]._id.$oid + "' class='earcheck' name='case' onchange=checkconditioninemp('" + EarningHeads[i]._id.$oid + "') checked></td>"
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
    } else {
        $("#EarningDatatablemainDiv").text("No Eanings Heads Available");
    }
}
function checkconditioninemp(id)
{
    //  $('table#displayEarningHeadTable tbody tr td input[type="checkbox"][name="case"]:checked')
    // var con = $("#" + id).find('td input[type="checkbox"][name="case"]:checked');
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
function checkconditioninempdedu(id)
{
    //  $('table#displayEarningHeadTable tbody tr td input[type="checkbox"][name="case"]:checked')
    // var con = $("#" + id).find('td input[type="checkbox"][name="case"]:checked');

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
function  enableDisableThisinputBox(checkBoxId, inputTextBoxId) {
    if ($("#" + checkBoxId).prop("checked"))
        $("#" + inputTextBoxId).prop("disabled", false);
    else
        $("#" + inputTextBoxId).prop("disabled", true);

}
function DeductionHeadsDisplay(DivId, DeductionHeads, options) {
    if (DeductionHeads != null || DeductionHeads != undefined || DeductionHeads != "" || DeductionHeads != "null") {
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
                + "<th></i>Is Manual</th>"
                + "</tr></thead>");
        $("#displayDeductionHeadTable").append("<tbody id='displayDeductionHeadTableBody' class='table-striped table-bordered' />");
        var sno = 0;
        var totalDeductionAmount = 0;
        var inputEffectiveDate = 0;
        var checkcon = "";

        if (DeductionHeads != null) {
            var pftypeoption = $('#pfType option');
            var arr = [];
            var j = 0;
            for (var i = 1; i < pftypeoption.length; i++) {
                arr.push(pftypeoption[i].text);
                j++;
            }
            var index = arr.indexOf($("#pfType option:selected").text());
            arr.splice(index, 1);

            if (options != null) {
                options = JSON.parse(decodeURI(options));
                var joindate = $("#dateOfJoining").val();
                if (joindate == "" || joindate == null)
                {
//                    var date = new Date();
//                    inputEffectiveDate = "01" + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                    inputEffectiveDate = joindate;
                } else
                {
//                    var res = joindate.substring(0, 2);
//                    inputEffectiveDate = joindate.replace(res, "01");
                    inputEffectiveDate = joindate;
                }
                for (var i = 0; i < DeductionHeads.length; i++) {
                    checkcon = "";
                    //   totalDeductionAmount = totalDeductionAmount + DeductionHeads[i].calculatedAmount;
                    var inputValue = 0;
                    if (options != null) {


                        for (var j = 0; j < options.length; j++) {

                            if (DeductionHeads[i]._id.$oid == options[j].salaryHeadId) {
                                checkcon = "checked";
                                totalDeductionAmount = totalDeductionAmount + options[j].amount;
                            }
                        }
                    }
                    if (arr.length > 0)
                    {
                        var pftyCon = "display";
                        for (var j = 0; j < arr.length; j++)
                        {

                            if (arr[j] == DeductionHeads[i].shortDescription || arr[j] == DeductionHeads[i].description)
                            {
                                pftyCon = "dontdisplay";
                                break;

                            }

                        }
                        if (pftyCon == "display")
                        {
                            sno++;
                            var spanId = "spanIdDeductions" + sno;
                            var ids = "effectiveFromDate1" + sno;
                            var checkBoxId = DeductionHeads[i]._id.$oid + "checkBox";
                            var inputTextBoxId = DeductionHeads[i]._id.$oid + "inputBox";
                            $("#displayDeductionHeadTableBody").append("<tr id='" + DeductionHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td><input type='checkbox' value='" + DeductionHeads[i]._id.$oid + "'  name='case' onchange=checkconditioninempdedu('" + DeductionHeads[i]._id.$oid + "') " + checkcon + "></td>"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + DeductionHeads[i].description + "<input type='hidden' value='" + DeductionHeads[i]._id.$oid + "'></td>"
                                    + "<td style='cursor:pointer;'>" + DeductionHeads[i].mapping + "</td>"
                                    + "<td style='cursor:pointer;'><input type='text'id=" + inputTextBoxId + " class='DeductionAmount' value='" + DeductionHeads[i].calculatedAmount + "' onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                                    + "<td style='cursor:pointer;'><input type='text'  id=" + ids + " value='" + inputEffectiveDate + "' readonly='true'></td>"
                                    + "<td><input type='checkbox' onclick=enableDisableThisinputBox('" + checkBoxId + "','" + inputTextBoxId + "') id='" + checkBoxId + "'  name='case'></td>");

                        }
                    }

//                    var spanId = "spanIdDeductions" + sno;
//                    var ids = "effectiveFromDate1" + sno;
//                    var checkBoxId = DeductionHeads[i]._id.$oid + "checkBox";
//                    var inputTextBoxId = DeductionHeads[i]._id.$oid + "inputBox";
//                    $("#displayDeductionHeadTableBody").append("<tr id='" + DeductionHeads[i]._id.$oid + "' style='cursor:pointer;' >"
//                            + "<td><input type='checkbox' value='" + DeductionHeads[i]._id.$oid + "'  name='case' onchange=checkconditioninempdedu('" + DeductionHeads[i]._id.$oid + "') " + checkcon + "></td>"
//                            + "<td>" + sno + "</td>"
//                            + "<td style='cursor:pointer;'>" + DeductionHeads[i].description + "<input type='hidden' value='" + DeductionHeads[i]._id.$oid + "'></td>"
//                            + "<td style='cursor:pointer;'>" + DeductionHeads[i].mapping + "</td>"
//                            + "<td style='cursor:pointer;'><input type='text'id=" + inputTextBoxId + " class='DeductionAmount' value='" + DeductionHeads[i].calculatedAmount + "' onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
//                            + "<td style='cursor:pointer;'><input type='text'  id=" + ids + " value='" + inputEffectiveDate + "' readonly='true'></td>"
//                            + "<td><input type='checkbox' onclick=enableDisableThisinputBox('" + checkBoxId + "','" + inputTextBoxId + "') id='" + checkBoxId + "'  name='case'></td>");



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
                var pftypeoption = $('#pfType option');
                var arr = [];
                var j = 0;
                for (var i = 1; i < pftypeoption.length; i++) {
                    arr.push(pftypeoption[i].text);
                    j++;
                }
                var index = arr.indexOf($("#pfType option:selected").text());
                arr.splice(index, 1);

                var joindate = $("#dateOfJoining").val();
                if (joindate == "" || joindate == null)
                {
//                    var date = new Date();
//                    inputEffectiveDate = "01" + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                    inputEffectiveDate = joindate;
                } else
                {
//                    var res = joindate.substring(0, 2);
//                    inputEffectiveDate = joindate.replace(res, "01");
                    inputEffectiveDate = joindate;
                }
                for (var i = 0; i < DeductionHeads.length; i++) {


                    if (arr.length > 0)
                    {
                        var pftyCon = "display";
                        for (var j = 0; j < arr.length; j++)
                        {

                            if (arr[j] == DeductionHeads[i].shortDescription || arr[j] == DeductionHeads[i].description)
                            {
                                pftyCon = "dontdisplay";
                                break;

                            }

                        }
                        if (pftyCon == "display")
                        {
                            totalDeductionAmount = totalDeductionAmount + DeductionHeads[i].calculatedAmount;

                            sno++;

                            var spanId = "spanIdDeductions" + sno;
                            var ids = "effectiveFromDate1" + sno;
                            var checkBoxId = DeductionHeads[i]._id.$oid + "checkBox";
                            var inputTextBoxId = DeductionHeads[i]._id.$oid + "inputBox";
                            $("#displayDeductionHeadTableBody").append("<tr id='" + DeductionHeads[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td><input type='checkbox' value='" + DeductionHeads[i]._id.$oid + "'  name='case' onchange=checkconditioninempdedu('" + DeductionHeads[i]._id.$oid + "') checked></td>"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + DeductionHeads[i].description + "<input type='hidden' value='" + DeductionHeads[i]._id.$oid + "'></td>"
                                    + "<td style='cursor:pointer;'>" + DeductionHeads[i].mapping + "</td>"
                                    + "<td style='cursor:pointer;'><input type='text'id=" + inputTextBoxId + " class='DeductionAmount' value='" + DeductionHeads[i].calculatedAmount + "' onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                                    + "<td style='cursor:pointer;'><input type='text'  id=" + ids + " value='" + inputEffectiveDate + "' readonly='true'></td>"
                                    + "<td><input type='checkbox' onclick=enableDisableThisinputBox('" + checkBoxId + "','" + inputTextBoxId + "') id='" + checkBoxId + "'  name='case'></td>");


                        }
                    }






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
            $("#DeductionDatatablemainDiv").append("No Deductions Hedas Available");
        }
    } else {
        $("#" + DivId).text("").append("<h4><u>Deduction Heads</u></h4><div class='tab-pane' id='DeductionDatatablemainDiv'/>");
        $("#DeductionDatatablemainDiv").append("No Deductions Hedas Available");
    }
}
function getEmployeeCodeUnique() {
    getLoggedInDDOLocationInDropDown("ddo", "location");
    var ddoCode = getUserSessionElement(seDDOId);
    var locationCode = getUserSessionElement(seLocationId);
    $.get(server_base_url + "hrms/salary/Employee/GetEmpCode", {
        ddoCode: ddoCode,
        locationCode: locationCode
    }).done(function (data) {
        if (data.status == "success") {
            var employeeCode = data.employeeCode;
            if (employeeCode != null || employeeCode != undefined) {
                $("#employeeCode").val(employeeCode).prop("disabled", true);
            }
//            $("#ddo").text("").append("<option  value=" + data.ddoId + ">" + data.ddoName + "</option>").prop("disabled", true);
//            $("#location").text("").append("<option  value=" + data.locationId + ">" + data.locationName + "</option>").prop("disabled", true);
            $("#ddo").trigger("onchange");
//            $("#location").val(data.locationId);
        }
    });
}
function  validateonDeputation() {
    if ($("#onDeputation").is(':checked')) {
        $("#fromDDO").prop("disabled", false);
        viewReDddoListForList("", "fromDDO");
    } else {
        $("#fromDDO").prop("disabled", true);
        $("#fromDDO").val("");
    }
}

function  disable() {
    if ($("#EmployeeLeftStatusYesNo").val() == "No") {
        $("#EmployeeLeftStatus").prop("disabled", true);
        $("#EmployeeLeftStatus").val("");
    } else {
        $("#EmployeeLeftStatus").prop("disabled", false);
        getEmployeeLeftStatusOption("", "EmployeeLeftStatus", "Employee Left Status");
        //  viewOption("hrms/salary/EmployeeLeftStatus/ViewList", "", "employeeLeftStatus", "EmployeeLeftStatus", "Employee Left Status");
    }
}

//View All
function viewEmployeeList(divId)
{
    if (checkUserPrivelege(pvViewEmployee)) {
        $("#" + divId).text("").append("<div id='ErrorDiv'/>");
        $("#" + divId).append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").text("").append("<div class='tab-pane' id='viewList'/>");
        $("#viewList").append("<div class='table-responsive' id='viewSectionTableDiv' />");
        $("#viewList").append("<div class='ErrorMsgDivInEmployee' id='viewSectionTableDiv' />");
        $("#viewSectionTableDiv").append("<table class='table table-bordered' id='displayBankTable' />");
        $("#displayBankTable").append("<thead class=''><tr id='tableheadrowid'>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code(M)</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Location</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Department</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Salary Type</th>");
        if (checkUserPrivelege(pvUpdateEmployee)) {
            $("#tableheadrowid").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteEmployee)) {
            $("#tableheadrowid").append("<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>");
        }
        $("#tableheadrowid").append("</tr></thead>");
        var employeeSearchJSON = {
            ddo: getUserSessionElement(seDDOId),
            location: getUserSessionElement(seLocationId)
        };
        $.get(server_base_url + "hrms/salary/Employee/Search", {
            condition: "No",
            employeeSearchJSON: JSON.stringify(employeeSearchJSON)
        }).done(function (bdata) {
//        $.get(server_base_url + "hrms/salary/Employee/ViewList", {
//        }).done(function (bdata) {
            if (bdata == fail || bdata.statuscode == fail) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFound + "<br /><br />");
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + unauthorizedMessage + "<br /><br />");
            } else if (bdata == invalidSession || bdata.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException || bdata.statuscode == statusException) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFound + "<br /><br />");
            } else if (bdata == null) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFound + "<br /><br />");
            } else {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var employeejson = {
                                employeeId: bdata[i]._id.$oid,
                                employeeCode: bdata[i].employeeCode,
                                salutationOption: bdata[i].salutationOption,
                                employeeCodeM: bdata[i].employeeCodeM,
                                employeeName: bdata[i].employeeName,
                                fatherName: bdata[i].fatherName,
                                gender: bdata[i].gender,
                                category: bdata[i].category,
                                religion: bdata[i].religion,
                                maritalStatus: bdata[i].maritalStatus,
                                dob: bdata[i].dob,
                                email: bdata[i].email,
                                panNo: bdata[i].panNo,
                                remarks: bdata[i].remarks,
                                payMode: bdata[i].payMode,
                                bank: bdata[i].bank,
                                acnumber: bdata[i].acnumber,
                                ddo: bdata[i].ddo,
                                location: bdata[i].location,
                                department: bdata[i].department,
                                discipline: bdata[i].discipline,
                                natureType: bdata[i].natureType,
                                fundType: bdata[i].fundType,
                                budgetHead: bdata[i].budgetHead,
                                reportingTo: bdata[i].reportingTo,
                                pfBank: bdata[i].pfBank,
                                pfNumber: bdata[i].pfNumber,
                                pfBalance: bdata[i].pfBalance,
                                siPremNo: bdata[i].siPremNo,
                                ptApplicable: bdata[i].ptApplicable,
                                stopGPF: bdata[i].stopGPF,
                                auditNumber: bdata[i].auditNumber,
                                workDetails: bdata[i].workDetails,
                                welfareNo: bdata[i].welfareNo,
                                isPgTeacher: bdata[i].isPgTeacher,
                                pgCode: bdata[i].pgCode,
                                postingDDO: bdata[i].postingDDO,
                                dateOfJoining: bdata[i].dateOfJoining,
                                lastAppointmentDate: bdata[i].lastAppointmentDate,
                                dateOfAppointment: bdata[i].dateOfAppointment,
                                lastJoiningDate: bdata[i].lastJoiningDate,
                                EmployeeLeftStatus: bdata[i].EmployeeLeftStatus,
                                EmployeeLeftReason: bdata[i].EmployeeLeftReason,
                                LeavingDate: bdata[i].LeavingDate,
                                LeavingRemarks: bdata[i].LeavingRemarks,
                                IncrementDueDate: bdata[i].IncrementDueDate,
                                onDeputation: bdata[i].onDeputation,
                                fromDDO: bdata[i].fromDDO,
                                association: bdata[i].association,
                                isHandicapped: bdata[i].isHandicapped,
                                stopSalary: bdata[i].stopSalary,
                                isGazetted: bdata[i].isGazetted,
                                personalFileNo: bdata[i].personalFileNo,
                                salaryType: bdata[i].salaryType,
                                designation: bdata[i].designation,
                                pfType: bdata[i].pfType,
                                grade: bdata[i].grade,
                                basic: bdata[i].basic,
                                postingCity: bdata[i].postingCity,
                                postedDesignation: bdata[i].postedDesignation,
                                quarterNo: bdata[i].quarterNo,
                                gradePay: bdata[i].gradePay,
                                incrementPercentage: bdata[i].incrementPercentage,
                                salaryBillType: bdata[i].salaryBillType,
                                class: bdata[i].classMaster
                            };
                            employeejson = JSON.stringify(employeejson);
                            $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeCode + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeCodeM + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].location + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].department + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].salaryType + "</td>");
                            if (checkUserPrivelege(pvUpdateEmployee)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=fetchEmployeeJsonForUpdate('" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteEmployee)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteemployee','','" + bdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td>");
                            }
                            $("#" + bdata[i]._id.$oid).append("</tr>");
                        }
                        $('#displayBankTable').dataTable();
                    } else {
                        displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFound + "<br /><br />");
                    }
                }
            }
        });
    }
}
//Sava Bank Details
function deleteemployee(employeeId) {
    if (checkUserPrivelege(pvDeleteEmployee)) {
        $.post(server_base_url + "hrms/salary/Employee/Delete", {
            employeeId: employeeId,
            userId: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail || data.statuscode == fail) {
                displayErrorMessages("ErrorDiv", "This Employee  " + delete_map_message, "");
                setTimeout(function () {
                    viewEmployeeList('listpanelMainBody');
                }, 1000);
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("authonticationMsgId", unauthorizedMessage);
            } else if (data == statusException || data.statuscode == statusException) {
                displayErrorMessages("authonticationMsgId", statusExceptionMessage);
            } else if (data == invalidSession || data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("authonticationMsgId", "No User available");
            } else {
                displaySuccessMessages("ErrorDiv", deleteMessage, "");
                setTimeout(function () {
                    viewEmployeeList('listpanelMainBody');
                }, 4000);
            }
        });
    }
}

function employeeValidation1() {

    $("#employeeCodeErr").text("");
    $("#employeeCodeMErr").text("");
    $("#employeeNameErr").text("");
    $("#fatherNameErr").text("");
    $("#genderErr").text("");
    $("#religionErr").text("");
    $("#maritalStatusErr").text("");
    $("#dobErr").text("");
    $("#emailErr").text("");
    $("#panNoErr").text("");
    $("#remarksErr").text("");
    $("#payModeErr").text("");
    $("#acnumberErr").text("");
    $("#bankErr").text("");
    $("#ddoErr").text("");
    $("#locationErr").text("");
    $("#departmentErr").text("");
    $("#disciplineErr").text("");
    $("#natureTypeErr").text("");
    $("#fundTypeErr").text("");
    $("#budgetHeadErr").text("");
    $("#reportingToErr").text("");
    $("#pfBankErr").text("");
    $("#pfNumberErr").text("");
    $("#pfBalanceErr").text("");
    $("#categoryErr").text("");
    $("#siPremNoErr").text("");
    $("#ptApplicableErr").text("");
    $("#stopGPFErr").text("");
    $("#auditNumberErr").text("");
    $("#workDetailsErr").text("");
    $("#welfareNoErr").text("");
    $("#isPgTeacherErr").text("");
    $("#pgCodeErr").text("");
    $("#postingDDOErr").text("");
    $("#dateOfAppointmentErr").text("");
    $("#dateOfJoiningErr").text("");
    $("#lastAppointmentDateErr").text("");
    $("#lastJoiningDateErr").text("");
    $("#EmployeeLeftStatusErr").text("");
    $("#EmployeeLeftReasonErr").text("");
    $("#LeavingDateErr").text("");
    $("#LeavingRemarksErr").text("");
    $("#IncrementDueDateErr").text("");
    $("#onDeputationErr").text("");
    $("#fromDDOErr").text("");
    $("#associationErr").text("");
    $("#isHandicappedErr").text("");
    $("#stopSalaryErr").text("");
    $("#isGazettedErr").text("");
    $("#personalFileNoErr").text("");
    $("#salaryTypeErr").text("");
    $("#designationErr").text("");
    $("#pfTypeErr").text("");
    $("#gradeErr").text("");
    $("#basicErr").text("");
    $("#postingCityErr").text("");
    $("#postedDesignationErr").text("");
    $("#quarterNoErr").text("");
    $("#gradePayErr").text("");
    $("#incrementPercentageErr").text("");
    $("#salaryBillTypeErr").text("");
    // $("#headSlabErr").text("");
    var days = checkDateofAppointmentandJoin();
    var totdays = checkLastAppointmentandJoin();
    var count = 0;
    var result = 1;
    var saveorupdate = $('#saveorupdate').val();
    if ($('#basic').val() == "" || $('#basic').val() == null) {
        $("#basic").focus();
        addSomeClass("basicFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("basicErr", "Please enter basic.");
        result = 0;
    } else if ($('#basic').val() != "" && $('#basic').val() != null) {
        if (!$('#basic').val().match((numbervalidation()))) {
            $("#basic").focus();
            addSomeClass("basicFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("basicErr", "Please enter valid  basic.");
            result = 0;
        }
        removeSomeClass("basicFieldGroup", "has-error");
        count++;
    }
    if ($('#gradePay').val() != "" && $('#gradePay').val() != null) {
        if (!$('#gradePay').val().match((numbervalidation()))) {
            $("#gradePay").focus();
            addSomeClass("gradePayFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("gradePayErr", "Please enter valid  Grade Pay.");
            result = 0;
        }
        removeSomeClass("gradePayFieldGroup", "has-error");
    }
    if ($('#grade').val() == null || $('#grade').val() == "") {
        $("#grade").focus();
        addSomeClass("gradeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("gradeErr", "Please Select grade.");
        result = 0;
    } else if ($('#grade').val() != null || $('#grade').val() != "") {
        removeSomeClass("gradeFieldGroup", "has-error");
        count++;
    }
    if ($('#pfType').val() == null || $('#pfType').val() == "") {
        $("#pfType").focus();
        addSomeClass("pfTypeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pfTypeErr", "Please Select PF Type.");
        result = 0;
    } else if ($('#pfType').val() != null || $('#pfType').val() != "") {
        removeSomeClass("pfTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#postedDesignation').val() == null || $('#postedDesignation').val() == "") {
        $("#postedDesignation").focus();
        addSomeClass("postedDesignationFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("postedDesignationErr", "Please Select Posted Designation.");
        result = 0;
    } else if ($('#postedDesignation').val() != null && $('#postedDesignation').val() != "") {
        removeSomeClass("postedDesignationFieldGroup", "has-error");
        count++;
    }
    if ($('#designation').val() == null || $('#designation').val() == "") {
        $("#designation").focus();
        addSomeClass("designationFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("designationErr", "Please Select  Designation.");
        result = 0;
    } else if ($('#designation').val() != null && $('#designation').val() != "") {
        removeSomeClass("designationFieldGroup", "has-error");
        count++;
    }
    if ($('#postingCity').val() == null || $('#postingCity').val() == "") {
        $("#postingCity").focus();
        addSomeClass("postingCityFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("postingCityErr", "Please Select  Posting City.");
        result = 0;
    } else if ($('#postingCity').val() != null && $('#postingCity').val() != "") {
        removeSomeClass("postingCityFieldGroup", "has-error");
        count++;
    }
    if ($('#salaryBillType').val() == null || $('#salaryBillType').val() == "") {
        $("#salaryBillType").focus();
        displaySmallErrorMessagesInRed("salaryBillTypeErr", "Please Select  Salary Bill Type.");
        result = 0;
    } else if ($('#salaryBillType').val() != null || $('#salaryBillType').val() != "") {
        removeSomeClass("salaryBillTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#salaryType').val() == null || $('#salaryType').val() == "") {
        $("#salaryType").focus();
        addSomeClass("salaryTypeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("salaryTypeErr", "Please Select  Salary Type.");
        result = 0;
    } else if ($('#salaryType').val() != null && $('#salaryType').val() != "") {
        removeSomeClass("salaryTypeFieldGroup", "has-error");
        count++;
    }

    if ($('#budgetHead').val() == null || $('#budgetHead').val() == "") {
        $("#budgetHead").focus();
        addSomeClass("budgetHeadFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("budgetHeadErr", "Please Select Budget Head.");
        result = 0;
    } else if ($('#budgetHead').val() != null && $('#budgetHead').val() != "") {
        removeSomeClass("budgetHeadFieldGroup", "has-error");
        count++;
    }
    if ($('#fundType').val() == null || $('#fundType').val() == "") {
        $("#fundType").focus();
        addSomeClass("fundTypeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("fundTypeErr", "Please Select  Fund Type.");
        result = 0;
    } else if ($('#fundType').val() != null && $('#fundType').val() != "") {
        removeSomeClass("fundTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#natureType').val() == null || $('#natureType').val() == "") {
        $("#natureType").focus();
        addSomeClass("natureTypeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("natureTypeErr", "Please Select Nature Type.");
        result = 0;
    } else if ($('#natureType').val() != null && $('#natureType').val() != "") {
        removeSomeClass("natureTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#discipline').val() == null || $('#discipline').val() == "") {
        $("#discipline").focus();
        addSomeClass("disciplineFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("disciplineErr", "Please Select Discipline.");
        result = 0;
    } else if ($('#discipline').val() != null && $('#discipline').val() != "") {
        removeSomeClass("disciplineFieldGroup", "has-error");
        count++;
    }
    if ($('#department').val() == null || $('#department').val() == "") {
        $("#department").focus();
        addSomeClass("departmentFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("departmentErr", "Please Select Department.");
        result = 0;
    } else if ($('#department').val() != null && $('#department').val() != "") {
        removeSomeClass("departmentFieldGroup", "has-error");
        count++;
    }
    if ($('#location').val() == "" || $('#location').val() == null) {
        $("#location").focus();
        addSomeClass("locationFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("locationErr", "Please Select Location.");
        result = 0;
    } else if ($('#location').val() != "" || $('#location').val() != null) {
        removeSomeClass("locationFieldGroup", "has-error");
    }
    if ($('#ddo').val() == null || $('#ddo').val() == "") {
        $("#ddo").focus();
        addSomeClass("ddoFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("ddoErr", "Please enter DDO.");
        result = 0;
    } else if ($('#ddo').val() != null && $('#ddo').val() != "") {
        removeSomeClass("ddoFieldGroup", "has-error");
        count++;
    }
    if ($('#payMode').val() == null || $('#payMode').val() == "") {
        $("#payMode").focus();
        addSomeClass("payModeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("payModeErr", "Please Select Pay Mode.");
        result = 0;
    } else if ($('#payMode').val() != null && $('#payMode').val() != "") {
        removeSomeClass("payModeFieldGroup", "has-error");
        count++;
    }
    if ($('#panNo').val() != "") {
        if (!$('#panNo').val().match((PanNumberValidation()))) {
            $("#panNo").focus();
            addSomeClass("panNoFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("panNoErr", "Please enter valid Pan Number .");
            result = 0;
        }
        removeSomeClass("panNoFieldGroup", "has-error");
        count++;
    }
    if ($('#email').val() == "") {
        $("#email").focus();
        addSomeClass("emailFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("emailErr", "Please enter email.");
        result = 0;
    } else if ($('#email').val() != "") {
        if (!$('#email').val().match((EmailValidation()))) {
            $("#email").focus();
            addSomeClass("emailFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("emailErr", "Please enter valid Email .");
            result = 0;
        }
        removeSomeClass("emailFieldGroup", "has-error");
        count++;
    }
    if ($('#dob').val() == null || $('#dob').val() == "") {
        $("#dob").focus();
        addSomeClass("dobFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("dobErr", "Please enter date.");
        result = 0;
    } else if ($('#dob').val() != "" || $('#dob').val() != null) {
        removeSomeClass("dobFieldGroup", "has-error");
        count++;
    }
    if ($('#maritalStatus').val() == null || $('#maritalStatus').val() == "") {
        $("#maritalStatus").focus();
        addSomeClass("maritalStatusFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("maritalStatusErr", "Please Select Marital Status.");
        result = 0;
    } else if ($('#maritalStatus').val() != null && $('#maritalStatus').val() != "") {
        removeSomeClass("maritalStatusFieldGroup", "has-error");
        count++;
    }
    if ($('#religion').val() == null || $('#religion').val() == "") {
        $("#religion").focus();
        addSomeClass("religionFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("religionErr", "Please Select Religion.");
        result = 0;
    } else if ($('#religion').val() != null && $('#religion').val() != "") {
        removeSomeClass("religionFieldGroup", "has-error");
        count++;
    }
    if ($('#category').val() == null || $('#category').val() == "") {
        $("#category").focus();
        addSomeClass("categoryFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("categoryErr", "Please Select Category .");
        result = 0;
    } else if ($('#category').val() != null && $('#category').val() != "") {
        removeSomeClass("categoryFieldGroup", "has-error");
        count++;
    }
    if ($('#gender').val() == null || $('#gender').val() == "") {
        $("#gender").focus();
        $("#categoryErr").text("").val();
        addSomeClass("genderFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("genderErr", "Please Select Gender.");
        result = 0;
    } else if ($('#gender').val() != null && $('#gender').val() != "") {
        removeSomeClass("genderFieldGroup", "has-error");
        count++;
    }

    if ($('#employeeCodeM').val() == "") {
        $("#employeeCodeM").focus();
        addSomeClass("employeeCodeMFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("employeeCodeMErr", "Please Enter Employee Code(M) .");
        result = 0;
    } else if ($('#employeeCodeM').val() != "") {
        removeSomeClass("employeeCodeMFieldGroup", "has-error");
        count++;
    }
    if ($('#employeeName').val() == "" || $('#employeeName').val() == null) {
        $("#employeeName").focus();
        addSomeClass("employeeNameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("employeeNameErr", "Please Enter Employee Name");
        result = 0;
    } else if ($('#employeeName').val() != "" && $('#employeeName').val() != null) {
        removeSomeClass("employeeNameFieldGroup", "has-error");
        count++;
    }
    if ($('#employeeCode').val() == "") {
        $("#employeeCode").focus();
        addSomeClass("employeeCodeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("employeeCodeErr", "Please Enter Employee Code.");
        result = 0;
    } else if ($('#employeeCodeM').val() != "") {
        removeSomeClass("employeeCodeMFieldGroup", "has-error");
        count++;
    }
    if ($('#dateOfJoining').val() == "") {
        $("#dateOfJoining").focus();
        addSomeClass("employeeCodeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("dateOfJoiningErr", "Please Select Joining Date.");
        result = 0;
    } else if ($('#dateOfJoining').val() != "") {
        removeSomeClass("employeeCodeMFieldGroup", "has-error");
        count++;
    }
    if (days < 0) {
        $("#dateOfAppointment").focus();
        addSomeClass("genderFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("dateOfAppointmentErr", "Please Check  Appointment Date .");
        result = 0;
    } else {
        removeSomeClass("genderFieldGroup", "has-error");
        count++;
    }
    if (totdays < 0) {
        $("#lastAppointmentDate").focus();
        addSomeClass("genderFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("lastAppointmentDateErr", "Please Check Last Appointment Date .");
        result = 0;
    } else {
        removeSomeClass("genderFieldGroup", "has-error");
        count++;
    }
    var conditionOFHeads = checkSalaryCalculationDetailsIsChangedOrNot();
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
        if (count > 17) {
            $("#panelRowForErrorMsg").text("");
            if (saveorupdate == "save") {
                saveEmployeeDetails1();
            } else if (saveorupdate == "update") {
                updateEmployeeDetailsmaster();
            }
        }
    }
}
function removeE_VelementsFromSession() {
    removeUserSessionElement(basicE_V);
    removeUserSessionElement(gradePayE_V);
    removeUserSessionElement(associationE_V);
    removeUserSessionElement(stopGPFE_V);
    removeUserSessionElement(classMasterE_V);
    removeUserSessionElement(postingCityE_V);
    removeUserSessionElement(ptApplicableE_V);
    removeUserSessionElement(natureTypeE_V);
    removeUserSessionElement(ddoE_V);
    removeUserSessionElement(salaryTypeE_V);
    removeUserSessionElement(JoiningDtE_V);
}
function checkSalaryCalculationDetailsIsChangedOrNot() {
    var basicE = Number(getUserSessionElement(basicE_V));
    var gradePayE = Number(getUserSessionElement(gradePayE_V));
    var associationE = getUserSessionElement(associationE_V);
    var stopGPFE = getUserSessionElement(stopGPFE_V);
    var classMasterE = getUserSessionElement(classMasterE_V);
    var postingCityE = getUserSessionElement(postingCityE_V);
    var natureTypeE = getUserSessionElement(natureTypeE_V);
    var ptApplicableE = getUserSessionElement(ptApplicableE_V);
    var ddoE = getUserSessionElement(ddoE_V);
    var salaryTypeE = getUserSessionElement(salaryTypeE_V);
    var joiningDateE = getUserSessionElement(JoiningDtE_V);
    var basic = Number($("#basic").val());
    var gradePay = Number($("#gradePay").val());
    var association = $("#association").val();
    var joingDate = $("#dateOfJoining").val();
    var stopGPF = "No";
    if ($("#stopGPF").prop("checked") == true) {
        stopGPF = "Yes";
    }
    var ptApplicable = "No";
    if ($("#ptApplicable").prop("checked") == true) {
        ptApplicable = "Yes";
    }

    var classMaster = $("#class").val();
    var postingCity = $("#postingCity").val();
    var natureType = $("#natureType").val();
    var ddo = $("#ddo").val();
    var salaryType = $("#salaryType").val();
    if (ptApplicableE == ptApplicable && basicE == basic && gradePayE == gradePay && associationE == association && stopGPFE == stopGPF && classMasterE == classMaster && postingCityE == postingCity && natureTypeE == natureType && salaryTypeE == salaryType && ddoE == ddo && joiningDateE == joingDate) {
        $("#panelRow27").text("").append("<div  class='col-xs-12'/><center><button type='button' id='headsbuttton' class='btn btn-success mr5 '  onclick='addBothHeadsInEmployee()'>HEADS</button></div>");
        $("#HeadsMessagesDivBeforeSaveButton").text("");
        return true;
    } else {
        displayLargeErrorMessagesInCenterInRed("HeadsMessagesDivBeforeSaveButton", "Please Click on Heads button");
        $("#panelRow27").text("").append("<div  class='col-xs-12'/><center><button type='button' id='headsbuttton' class='btn btn-success mr5 '  onclick='addBothHeadsInEmployee()'>HEADS</button></div>");
        return false;
    }
}

function saveEmployeeDetails1() {
    var conditionOFHeads = checkSalaryCalculationDetailsIsChangedOrNot();
    if (conditionOFHeads == false) {
        return;
    } else if (conditionOFHeads == true) {
        var onDeputation = "No";
        var ptApplicable = "No";
        var isHandicapped = "No";
        var stopGPF = "No";
        var isGazetted = "No";
        var isPgTeacher = "No";
        var stopSalary = "No";
        if ($("#onDeputation").prop("checked") == true) {
            onDeputation = "Yes";
        }
        if ($("#ptApplicable").prop("checked") == true) {
            ptApplicable = "Yes";
        }
        if ($("#isHandicapped").prop("checked") == true) {
            isHandicapped = "Yes";
        }
        if ($("#isGazetted").prop("checked") == true) {
            isGazetted = "Yes";
        }
        if ($("#stopGPF").prop("checked") == true) {
            stopGPF = "Yes";
        }
        if ($("#isPgTeacher").prop("checked") == true) {
            isPgTeacher = "Yes";
        }
        if ($("#stopSalary").prop("checked") == true) {
            stopSalary = "Yes";
        }
        var earningHeads = [];
        var deductionHeads = [];
        var totalDedcutions = 0;
        var totalEarnings = 0;
        $('table#displayEarningHeadTable tbody tr input[type="checkbox"][name="case"]:checked').each(function () {
            var row = $(this).closest('tr');
            earningHeads.push({
                description: row.find('td:eq(2) input').val(),
                mapping: row.find('td:eq(3)').text(),
                amount: Number(row.find('td:eq(4) input').val()),
                effectiveFromDate: row.find('td:eq(5) input').val()
            });
            totalEarnings = totalEarnings + Number(row.find('td:eq(4) input').val());
        });
        $('table#displayDeductionHeadTable tbody tr input[type="checkbox"][name="case"]:checked').each(function () {
            var row = $(this).closest('tr');
            deductionHeads.push({
                description: row.find('td:eq(2) input').val(),
                mapping: row.find('td:eq(3)').text(),
                amount: Number(row.find('td:eq(4) input').val()),
                effectiveFromDate: row.find('td:eq(5) input').val()
            });
            totalDedcutions = totalDedcutions + Number(row.find('td:eq(4) input').val());
        });
        var res = $("#IncrementDueDate").val().substring(0, 2);
        var incDueDate = $("#IncrementDueDate").val().replace(res, "01");
        var employeeJson = {
            employeeCode: $("#employeeCode").val(),
            employeeCodeM: $("#employeeCodeM").val(),
            salutationOption: $("#salutationOption").val(),
            employeeName: $("#employeeName").val(),
            fatherName: $("#fatherName").val(),
            gender: $("#gender").val(),
            category: $("#category").val(),
            religion: $("#religion").val(),
            maritalStatus: $("#maritalStatus").val(),
            dob: $("#dob").val(),
            email: $("#email").val(),
            panNo: $("#panNo").val(),
            remarks: $("#remarks").val(),
            payMode: $("#payMode").val(),
            acnumber: $("#acnumber").val(),
            bank: $("#bank").val(),
            ddo: $("#ddo").val(),
            location: $("#location").val(),
            department: $("#department").val(),
            discipline: $("#discipline").val(),
            natureType: $("#natureType").val(),
            fundType: $("#fundType").val(),
            budgetHead: $("#budgetHead").val(),
            reportingTo: $("#reportingTo").val(),
            pfBank: $("#pfBank").val(),
            pfNumber: $("#pfNumber").val(),
            pfBalance: $("#pfBalance").val(),
            siPremNo: $("#siPremNo").val(),
            ptApplicable: ptApplicable,
            stopGPF: stopGPF,
            auditNumber: $("#auditNumber").val(),
            workDetails: $("#workDetails").val(),
            welfareNo: $("#welfareNo").val(),
            isPgTeacher: isPgTeacher,
            pgCode: $("#pgCode").val(),
            postingDDO: $("#postingDDO").val(),
            dateOfJoining: $("#dateOfJoining").val(),
            lastAppointmentDate: $("#lastAppointmentDate").val(),
            dateOfAppointment: $("#dateOfAppointment").val(),
            lastJoiningDate: $("#lastJoiningDate").val(),
            EmployeeLeftStatus: $("#EmployeeLeftStatusYesNo").val(),
            EmployeeLeftReason: $("#EmployeeLeftStatus").val(),
            LeavingDate: $("#LeavingDate").val(),
            LeavingRemarks: $("#LeavingRemarks").val(),
            IncrementDueDate: incDueDate,
            onDeputation: onDeputation,
            fromDDO: $("#fromDDO").val(),
            association: $("#association").val(),
            isHandicapped: isHandicapped,
            stopSalary: stopSalary,
            isGazetted: isGazetted,
            personalFileNo: $("#personalFileNo").val(),
            salaryType: $("#salaryType").val(),
            designation: $("#designation").val(),
            pfType: $("#pfType").val(),
            grade: $("#grade").val(),
            basic: $("#basic").val(),
            postingCity: $("#postingCity").val(),
            postedDesignation: $("#postedDesignation").val(),
            quarterNo: $("#quarterNo").val(),
            gradePay: $("#gradePay").val(),
            incrementPercentage: $("#incrementPercentage").val(),
            salaryBillType: $("#salaryBillType").val(),
            earningHeads: earningHeads,
            deductionHeads: deductionHeads,
            totalEarnings: totalEarnings,
            totalDeductions: totalDedcutions,
            dateOfRetirement: $("#dateOfRetirement").val(),
            classMaster: $("#class").val()
        };
        $("#basicErr").text("");
        var form_data = new FormData();
        var imageCount = document.getElementById("employeePic").files.length;
        for (i = 0; i < imageCount; i++) {
            form_data.append("file", document.getElementById("employeePic").files[i]);
        }
//    var filesize = document.getElementById("employeePic").files[0].size;
//    alert(filesize);
//    if (filesize < 102, 401) {
//        alert("Yes 100 Kb");
//    } else {
//        alert("No More than 100 kb");
//        return;
//    }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/usg-server/hrms/salary/Employee/Add", true);
        xhr.setRequestHeader("employeeJson", JSON.stringify(employeeJson));
        xhr.setRequestHeader("userId", getUserSessionElement("userId"));
        if (imageCount == 1) {
            xhr.send(form_data);
        } else {
            xhr.send();
        }
        disableDiv("mainTabMenu");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    scrolupfunction();
                    console.log(xhr.response);
                    var parsedResponse = JSON.parse(xhr.response);
                    parsedResponse = JSON.parse(parsedResponse);
                    if (parsedResponse.statusMessage == "success") {
                        employeemaster("dashBoardBodyMainDiv");
                        scrolupfunction();
                        if (parsedResponse.employeeCodeStatus == "Updated") {
                            displaySuccessMessages("pregsuccessBefore", successMessage + "!", "! Employee Code is updated to" + parsedResponse.employeeCodeUpdate);
                            clearSuccessMessageAfterFourSecond("pregsuccessBefore");
                        } else {
                            displaySuccessMessages("pregsuccessBefore", successMessage, "");
                            clearSuccessMessageAfterTwoSecond("pregsuccessBefore");
                        }
                    } else if (parsedResponse.statusMessage == "NoPostAvailableForThisCategory") {
                        displayErrorMessages("pregsuccessBefore", "No Post available", "");
                        enableEmployeeDiv("mainTabMenu");
                        scrolupfunction();
                        clearSuccessMessageAfterFourSecond("pregsuccessBefore");
                    } else if (parsedResponse.statusMessage == "PAN already Existed") {
                        displayErrorMessages("pregsuccessBefore", "PAN already Existed", "");
                        enableEmployeeDiv("mainTabMenu");
                        scrolupfunction();
                        clearSuccessMessageAfterFourSecond("pregsuccessBefore");
                    } else if (parsedResponse.statusMessage == "Email already Existed") {
                        displayErrorMessages("pregsuccessBefore", "Email already Existed", "");
                        enableEmployeeDiv("mainTabMenu");
                        scrolupfunction();
                        clearSuccessMessageAfterFourSecond("pregsuccessBefore");
                    } else {
                        enableEmployeeDiv("mainTabMenu");
                    }

//                    if (xhr.response == "NoPostAvailableForThisCategory") {
//                        alert("No Post Available For This Category");
//                        return;
//                    }
//                    if (xhr.response != NoPostAvailableForThisCategory) {
//                        setTimeout(function () {
//                            removeE_VelementsFromSession();
////                            employeemaster("dashBoardBodyMainDiv");
//                            displaySuccessMessages("pregsuccessBefore", successMessage, "");
//                        }, 900);
//                        clearSuccessMessageAfterTwoSecond("pregsuccessBefore");
//                    } else {
//                        displaySuccessMessages("pregsuccessBefore", NoPostAvailableForThisCategory);
//                        scrolupfunction();
//                    }
                    enableEmployeeDiv("mainTabMenu");
                }
            }
        }
    }
}
function enableEmployeeDiv() {
    enableDiv("mainTabMenu");
    $("#emcployeeCode").prop("disabled", true);
    $("#seconddesignation").prop("disabled", true);
    $("#dateOfRetirement").prop("disabled", true);
    $("#isSuspended").prop("disabled", true);
    $("#onDeputation").prop("disabled", true);
    $("#class").prop("disabled", true);
    $("#gradePay").prop("disabled", true);
    //  $("#grade").prop("disabled", true);
}

function addHeadsInEmployee() {
    var salarytype = $("#salaryType").val();
    var postcity = $("#postingCity").val();
    var postdesig = $("#postedDesignation").val();
    var pftype = $("#pfType").val();
    var grade = $("#grade").val();
    //This going to backend to get salary heads
    var basic = $("#basic").val();
    var gradePay = $("#gradePay").val();
    var association = $("#association").val();
    var stopGPF = "No";
    if ($("#ptApplicable").prop("checked") == true) {
        stopGPF = "Yes";
    }
    var ptApplicable = "No";
    if ($("#ptApplicable").prop("checked") == true) {
        ptApplicable = "Yes";
    }
    var employeeGetHeadsJson = {
        basic: basic,
        gradePay: gradePay,
        association: association,
        stopGPF: stopGPF
    };
    if (basic != "" && salarytype != "" && postcity != "" && postdesig != "" && pftype != "" && grade != "")
    {
        $("#basicErr").text("").val();
        if ($("#headButtonDisableFlag").val("enable")) {
//            $.get(server_base_url + "hrms/salary/Employee/GetHeads", {
//                employeeGetHeadsJson: JSON.stringify(employeeGetHeadsJson)
//            }).done(function (pdata) {
//
//
//            });

            viewEarningHeadsListInEmployeeMaster('Row30Col1');
            viewDeductionHeadsListInEmployeeMaster('Row30Col2');
            $("#panelRow28").text("").append("<div  class='col-xs-12'/><center><button type='button' value='Save' id='saveupdatebuttonId' class='btn btn-success mr5 '  onclick='employeeValidation1()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick=employeemaster('" + DashboardMainDivID + "')  class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
            $("#totalRow1").append("<label class='col-sm-4'>Total Deductions</label><input class='col-sm-4' type='text' id='displayTotalDeductions' readonly >");
            $("#Row36aCol1").text("").append(getLabel_InputWithSpan("Total Earnings", "", "displayTotalEarnings", "", "readonly"));
            $("#Row36aCol2").text("").append(getLabel_InputWithSpan("Total Deductions", "", "displayTotalDeductions", "", "readonly"));
            $("#headsbuttton").prop("disabled", false);
            $("#headButtonDisableFlag").text('').val("").val("disabled");
        } else {
            $("#headsbuttton").prop("disabled", false);
            $("#headButtonDisableFlag").text('').val("").val("disabled");
        }
    } else
    {
        displaySmallErrorMessagesInRed("FieldGroup35a", "Please Enter All Salary Filelds.");
    }
}
function viewEarningHeadsListInEmployeeMaster(DivId, options) {
//    $("#" + DivId).text("").append("<h4><u>Earning Heads</u></h4><div class='tab-pane' id='EarningDatatablemainDiv'/>");
    $("#" + DivId).text("").append("<h4><u>Earning Heads</u></h4><div class='row' id='EarningDatatablemainDiv' style='overflow-x:auto;'/>");
//    $("#EarningDatatablemainDiv").append("<div class='table-responsive' id='viewEarningDataTableDiv' />");
    $("#EarningDatatablemainDiv").append("<table class='table table-bordered table-striped table-warning' id='displayEarningHeadTable' />");
    $("#displayEarningHeadTable").append("<thead class=''><tr>"
            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
            + " <th> Select</th>"
            + " <th> S.No</th>"
            + "<th ></i>Description</th>"
            + "<th >Mapping</th>"
            + "<th >Amount</th>"
            + "<th></i>Effective From</th>"
            + "</tr></thead>");
    $.get(server_base_url + "hrms/salary/SalaryHead/SearchByHeadType", {
        headType: "headType",
        value: Earnings
    }).done(function (pdata) {
        if (pdata != null) {
            if (pdata.length > 0) {
                var sno = 0;
                $("#displayEarningHeadTable").append("<tbody id='displayEarningHeadTableBody' class='table-striped table-bordered' />");
                for (var i = 0; i < pdata.length; i++) {
                    var inputValue = "0";
                    var inputEffectiveDate = "";
                    if (options != null) {
                        for (var j = 0; j < options.length; j++) {
                            if (pdata[i]._id.$oid == options[j].description) {
                                inputValue = options[j].amount;
                            }
                        }
                    }
                    var idss = "effectiveFromDateForEarning" + sno;
                    var spanId = "spanIdEarning" + sno;
                    if (pdata[i].description == BasicPay) {
                        sno++;
                        inputValue = $("#basic").val();
                        $("#basicId").val(pdata[i]._id.$oid);
                        $("#displayEarningHeadTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td><input type='checkbox' value='" + pdata[i]._id.$oid + "' onclick=getValueForThisHead('" + pdata[i]._id.$oid + "','displayEarningHeadTableBody',this.parentNode.parentNode.rowIndex) name='case' checked disabled></td>"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].description + "<input type='hidden' value='" + pdata[i]._id.$oid + "'></td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].mapping + "</td>"
                                + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + inputValue + "'  onkeypress='return validateFloat(event)'><span id=" + spanId + "></span></td>"
                                + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>");
                    } else if (pdata[i].description == "GRADE PAY" || pdata[i].description == "Grade Pay") {
                        sno++;
                        inputValue = $("#gradePay").val();
                        $("#displayEarningHeadTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td><input type='checkbox' value='" + pdata[i]._id.$oid + "' onclick=getValueForThisHead('" + pdata[i]._id.$oid + "','displayEarningHeadTableBody',this.parentNode.parentNode.rowIndex) name='case' checked disabled></td>"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].description + "<input type='hidden' value='" + pdata[i]._id.$oid + "'></td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].mapping + "</td>"
                                + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + inputValue + "'  onkeypress='return validateFloat(event)'><span id=" + spanId + "></span></td>"
                                + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>");
                    } else {
                        sno++;
                        $("#displayEarningHeadTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td><input type='checkbox' value='" + pdata[i]._id.$oid + "' onclick=getValueForThisHead('" + pdata[i]._id.$oid + "','displayEarningHeadTableBody',this.parentNode.parentNode.rowIndex) name='case'></td>"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].description + "<input type='hidden' value='" + pdata[i]._id.$oid + "'></td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].mapping + "</td>"
                                + "<td style='cursor:pointer;'><input type='text' class='EarningsAmount' value='" + inputValue + "'  onchange='return validateFloat(event)'><span id=" + spanId + "></span></td>"
                                + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>");
                    }
                    $("#" + idss).datepicker({
                        changeYear: true,
                        changeMonth: true,
                        format: "dd/mm/yyyy"
                    });
                }
                $('.EarningsAmount').keyup(function () {
                    var sum = 0;
                    $('.EarningsAmount').each(function () {
                        sum += Number($(this).val());
                    });
                    $('#displayTotalEarnings').val(sum);
                });
            }

        }
    });
}
function viewDeductionHeadsListInEmployeeMaster(DivId, options) {

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
    var association = $("#association").val();
    $.get(server_base_url + "hrms/salary/SalaryHead/SearchByHeadType", {
        headType: "headType",
        value: Deductions
    }).done(function (pdata) {

        if (pdata != null) {
            if (pdata.length > 0) {
                var sno = 0;
                $("#displayDeductionHeadTable").append("<tbody id='displayDeductionHeadTableBody' class='table-striped table-bordered' />");
                for (var i = 0; i < pdata.length; i++) {
                    var inputValue = "0";
                    if (options != null) {
                        for (var j = 0; j < options.length; j++) {
                            if (pdata[i]._id.$oid == options[j].description) {
                                inputValue = "";
                                inputValue = options[j].amount;
                            }
                        }
                    }
                    if (pdata[i].description == "PT") {
                        if ($("#ptApplicable").prop("checked") == true) {
                            sno++;
                            var spanId = "spanIdDeductions" + sno;
                            var ids = "effectiveFromDate1" + sno;
                            $("#displayDeductionHeadTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td><input type='checkbox' value='" + pdata[i]._id.$oid + "' onclick=getValueForThisHead('" + pdata[i]._id.$oid + "','displayDeductionHeadTableBody',this.parentNode.parentNode.rowIndex) name='case' checked></td>"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].description + "<input type='hidden' value='" + pdata[i]._id.$oid + "'></td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].mapping + "</td>"
                                    + "<td style='cursor:pointer;'><input type='text' class='DeductionAmount' value='" + inputValue + "' onkeypress='return validateFloat(event)'><span id=" + spanId + "></span></td>"
                                    + "<td style='cursor:pointer;'><input type='text'  id=" + ids + " value='' readonly='true'></td>");
                        } else {
                            console.log("pt");
                        }
                    } else if (pdata[i].description == "Association") {
                        if (association != null || association != "") {
                            var ob = pdata[i];
                            $.get(server_base_url + "/hrms/salary/Association/ViewList", {
                            }).done(function (bdata) {
                                for (var j = bdata.length - 1; j >= 0; j--) {
                                    if (bdata[j]._id.$oid == association)
                                    {
                                        sno++;
                                        var ids = "effectiveFromDate1" + sno;
                                        var spanId = "spanIdDeductions" + sno;
                                        $("#displayDeductionHeadTableBody").append("<tr id='" + ob._id.$oid + "' style='cursor:pointer;' >"
                                                + "<td><input type='checkbox' value='" + ob._id.$oid + "' onclick=getValueForThisHead('" + ob._id.$oid + "','displayDeductionHeadTableBody',this.parentNode.parentNode.rowIndex) name='case' checked></td>"
                                                + "<td>" + sno + "</td>"
                                                + "<td style='cursor:pointer;'>" + ob.description + "<input type='hidden' value='" + ob._id.$oid + "'></td>"
                                                + "<td style='cursor:pointer;'>" + ob.mapping + "</td>"
                                                + "<td style='cursor:pointer;'><input type='text' class='DeductionAmount' value='" + bdata[j].fees + "' onkeypress='return validateFloat(event)'><span id=" + spanId + "></span></td>"
                                                + "<td style='cursor:pointer;'><input type='text'  id=" + ids + " value='' readonly='true'></td>");
                                    } else {
                                        console.log("Association");
                                    }
                                }
                            });
                        }

                    } else {
                        sno++;
                        var spanId = "spanIdDeductions" + sno;
                        var ids = "effectiveFromDate1" + sno;
                        $("#displayDeductionHeadTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td><input type='checkbox' value='" + pdata[i]._id.$oid + "' onclick=getValueForThisHead('" + pdata[i]._id.$oid + "','displayDeductionHeadTableBody',this.parentNode.parentNode.rowIndex) name='case'></td>"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].description + "<input type='hidden' value='" + pdata[i]._id.$oid + "'></td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].mapping + "</td>"
                                + "<td style='cursor:pointer;'><input type='text' class='DeductionAmount' value='" + inputValue + "' onkeypress='return validateFloat(event)'><span id=" + spanId + "></span></td>"
                                + "<td style='cursor:pointer;'><input type='text'  id=" + ids + " value='' readonly='true'></td>");
                    }
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
            }
        }
    });
}
function getValueForThisHead(id, tableName, rowIndex) {
    var basicId = $("#basicId").val();
    var basicAmount = $("#basic").val();
    $.get(server_base_url + "hrms/EmployeeMaster/Employee/getHeadAmount", {
        id: id,
        basicId: basicId,
        basicAmount: basicAmount
    }).done(function (pdata) {
        pdata = JSON.parse(pdata);
        rowIndex = rowIndex - 1;
        $('table#displayEarningHeadTable tbody tr:eq(' + rowIndex + ')').each(function () {
            $(this).find('td:eq(4) input').val(pdata.amount);
        });
    });
}
//Clear All Entered Data
function wipeAllEmployeeDataa() {
    $("#HeadsMessagesDivBeforeSaveButton").text("");
    $("#pregsuccessBefore").text("");
    $("#panelRowForErrorMsg").text("");
    $("#order").val("");
    $("#employeeThree").val("");
    $("#employeeTwo").val("");
    $("#employeeOne").val("");
    $("#incrementType").val("");
    $("#employeePay").val("");
    $("#employeeName").val("");
    $("#orderErr").text("");
    $("#employeeThree").val("");
    $("#employeeTwo").val("");
    $("#employeeOne").val("");
    $("#incrementType").val("");
    $("#employeePay").val("");
    $("#employeeName").val("");
//    $("#employeeCode").val("");
    $("#employeeCodeM").val("");
    $("#employeeName").val("");
    $("#fatherName").val("");
    $("#gender").val("");
    $("#religion").val("");
    $("#maritalStatus").val("");
    $("#category").val("");
    $("#dob").val("");
    $("#email").val("");
    $("#panNo").val("");
    $("#remarks").val("");
    $("#payMode").val("");
    $("#acnumber").val("");
    $("#bank").val("");
    $("#ddo").val("");
    $("#location").val("");
    $("#department").val("");
    $("#discipline").val("");
    $("#natureType").val("");
    $("#fundType").val("");
    $("#budgetHead").val("");
    $("#reportingTo").val("");
    $("#pfBank").val("");
    $("#pfNumber").val("");
    $("#pfBalance").val("");
    $("#siPremNo").val("");
    $("#ptApplicable").val("");
    $("#stopGPF").val("");
    $("#auditNumber").val("");
    $("#workDetails").val("");
    $("#welfareNo").val("");
    $("#isPgTeacher").val("");
    $("#pgCode").val("");
    $("#postingDDO").val("");
    $("#dateOfAppointment").val("");
    $("#dateOfJoining").val("");
    $("#lastAppointmentDate").val("");
    $("#lastJoiningDate").val("");
    $("#EmployeeLeftStatus").val("");
    $("#EmployeeLeftReason").val("");
    $("#LeavingDate").val("");
    $("#LeavingRemarks").val("");
    $("#IncrementDueDate").val("");
    $("#onDeputation").val("");
    $("#fromDDO").val("");
    $("#association").val("");
    $("#isHandicapped").val("");
    $("#stopSalary").val("");
    $("#isGazetted").val("");
    $("#personalFileNo").val("");
    $("#salaryType").val("");
    $("#designation").val("");
    $("#pfType").val("");
    $("#grade").val("");
    $("#basic").val("");
    $("#postingCity").val("");
    $("#postedDesignation").val("");
    $("#quarterNo").val("");
    $("#gradePay").val("");
    $("#incrementPercentage").val("");
    $("#salaryBillType").val("");
    $("#class").val("");
    //
    $("#employeeCodeErr").text("");
    $("#employeeCodeMErr").text("");
    $("#employeeNameErr").text("");
    $("#fatherNameErr").text("");
    $("#genderErr").text("");
    $("#religionErr").text("");
    $("#maritalStatusErr").text("");
    $("#dobErr").text("");
    $("#emailErr").text("");
    $("#panNoErr").text("");
    $("#remarksErr").text("");
    $("#payModeErr").text("");
    $("#acnumberErr").text("");
    $("#bankErr").text("");
    $("#ddoErr").text("");
    $("#locationErr").text("");
    $("#departmentErr").text("");
    $("#disciplineErr").text("");
    $("#natureTypeErr").text("");
    $("#fundTypeErr").text("");
    $("#budgetHeadErr").text("");
    $("#reportingToErr").text("");
    $("#pfBankErr").text("");
    $("#pfNumberErr").text("");
    $("#pfBalanceErr").text("");
    $("#siPremNoErr").text("");
    $("#ptApplicableErr").text("");
    $("#stopGPFErr").text("");
    $("#auditNumberErr").text("");
    $("#workDetailsErr").text("");
    $("#welfareNoErr").text("");
    $("#isPgTeacherErr").text("");
    $("#pgCodeErr").text("");
    $("#postingDDOErr").text("");
    $("#dateOfAppointmentErr").text("");
    $("#dateOfJoiningErr").text("");
    $("#lastAppointmentDateErr").text("");
    $("#lastJoiningDateErr").text("");
    $("#EmployeeLeftStatusErr").text("");
    $("#EmployeeLeftReasonErr").text("");
    $("#LeavingDateErr").text("");
    $("#LeavingRemarksErr").text("");
    $("#IncrementDueDateErr").text("");
    $("#onDeputationErr").text("");
    $("#fromDDOErr").text("");
    $("#associationErr").text("");
    $("#isHandicappedErr").text("");
    $("#stopSalaryErr").text("");
    $("#isGazettedErr").text("");
    $("#personalFileNoErr").text("");
    $("#salaryTypeErr").text("");
    $("#designationErr").text("");
    $("#pfTypeErr").text("");
    $("#gradeErr").text("");
    $("#basicErr").text("");
    $("#postingCityErr").text("");
    $("#postedDesignationErr").text("");
    $("#quarterNoErr").text("");
    $("#categoryErr").text("");
    $("#gradePayErr").text("");
    $("#incrementPercentageErr").text("");
    $("#salaryBillTypeErr").text("");
    $("#panelRow2out").text("");
    $("#panelRow2out").append("[File size should not be larger than 100KB ]<br>[File Format  : &nbsp .jpeg  ,  .gif  ,  .png  and  .bmp   &nbsp ]");
//    $("#employeeCode").focus();
    $('input:checkbox').removeAttr('checked');
    scrolupfunction();
}

function validate(key)
{
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    //comparing pressed keycodes
    if (!(keycode == 8 || keycode == 12) && (keycode < 13 || keycode > 13) && (keycode < 48 || keycode > 57))
    {
        return false;
    } else {
        return true;
    }
}
//Function to allow only alpha numeric to textbox
function validatealphanumeric(key) {

    var keycode = (key.which) ? key.which : key.keyCode;
//comparing pressed keycodes
    if (!(keycode == 8 || keycode == 12) && (keycode < 13 || keycode > 13) && (keycode < 32 || keycode > 33) && (keycode < 65 || keycode > 90) && (keycode < 97 || keycode > 122)) {

        return false;
    } else {

        return true;
    }
}
function removeImageOfEmployee() {
    $("#employeePic").val("");
    $("#panelRow2out").text("");
    $("#RemoveButtonDiv").text("");
    $("#panelRow2out").append("[File size should not be larger than 100KB ]<br>[File Format  : &nbsp .jpeg  ,  .gif  ,  .png  and  .bmp   &nbsp ]");

}
function addRemoveButton() {
    $("#RemoveButtonDiv").text("").append("<center><button id='removeButton' onclick='removeImageOfEmployee()' name='Remove'>Remove</button></center>");
}

function uploadfunction() {
    var countFiles = $("#employeePic")[0].files.length;
    var imgPath = $("#employeePic")[0].value;
    var sizeOfImage = $("#employeePic")[0].files[0].size;
    var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
    var image_holder = $("#panelRow2out");
    image_holder.empty();
    if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
        if (sizeOfImage < 102401) {
            if (typeof (FileReader) != "undefined") {
//loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++)
                {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $("<img />", {
                            "src": e.target.result,
                            "class": "thumb-image "
                        }).appendTo(image_holder).attr("width", "300");
                    }
                    image_holder.show();
                    reader.readAsDataURL($("#employeePic")[0].files[i]);
                }
                addRemoveButton();

            } else {
                alertPopUpMessage("This browser does not support FileReader.");
            }
        } else {
//            window.alert = function (message) {
//                $('<div />').text(message).dialog({
//                    modal: true,
//                    title: 'Message',
//                    buttons: {
//                        'OK': function () {
//                            $(this).dialog('close');
//                        }
//                    },
//                    close: function () {
//                        $(this).dialog('destroy').remove();
//                    }
//                });
//            };
            alertPopUpMessage("File should not be larger than 100KB");
            $("#employeePic").val("");
//            $("#panelRow2out").append("<a href='#popupDialog' data-rel='popup' data-position-to='window' data-transition='pop' class='ui-btn ui-corner-all ui-shadow ui-btn-inline ui-icon-delete ui-btn-icon-left ui-btn-b'>Delete page...</a><div data-role='popup' id='popupDialog' data-overlay-theme='b' data-theme='b' data-dismissible='false' style='max-width:400px;'> <div data-role='header' data-theme='a'> <h1>Delete Page?</h1> </div> <div role='main' class='ui-content'>  <h3 class='ui-title'>Are you sure you want to delete this page?</h3><p>This action cannot be undone.</p>   <a href='#' class='ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b' data-rel='back'>Cancel</a> <a href='#' class='ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b' data-rel='back' data-transition='flow'>Delete</a> </div></div>");
        }
    } else {
        alertPopUpMessage("Pls select only images");
    }
}
function fetchEmployeeJsonForUpdate(employeeId) {
    $("#displayBankTableBody tr").css("background-color", "white");
    $("#displayBankTableBody tr" + "#" + employeeId).css("background-color", "rgba(10, 129, 156, 0.3)");
    $.get(server_base_url + "hrms/EmployeeMaster/Employee/getEmployeeForUpdate", {
        employeeId: employeeId
    }).done(function (pdata) {
        //alert(pdata);
        pdata = encodeURI(JSON.stringify(pdata));
        updateemployeemaster(pdata);
    });
}
function updateemployeemaster(obj) {
    if (checkUserPrivelege(pvUpdateEmployee)) {
//    obj = decryptBase64String(obj);
        obj = decodeURI(obj);
        obj = JSON.parse(obj);
        setUserSessionElement(basicE_V, obj.basic);
        setUserSessionElement(JoiningDtE_V, obj.dateOfJoining);
        setUserSessionElement(gradePayE_V, obj.gradePay);
        setUserSessionElement(associationE_V, obj.association);
        setUserSessionElement(stopGPFE_V, obj.stopGPF);
        setUserSessionElement(classMasterE_V, obj.classMaster);
        setUserSessionElement(postingCityE_V, obj.postingCity);
        setUserSessionElement(ptApplicableE_V, obj.ptApplicable);
        setUserSessionElement(natureTypeE_V, obj.natureType);
        setUserSessionElement(ddoE_V, obj.ddo);
        setUserSessionElement(salaryTypeE_V, obj.salaryType);
        $("#ddo").val(obj.ddo);
        $("#employeeId").val(obj._id.$oid);
        getDesignationUsingDDOInUpdate(obj.ddo, obj.designation);
        getLocationBasedOnDDOInUpdate(obj.ddo, obj.location);
        getDepartmentBasedOnDDOInUpdate(obj.ddo, obj.department);
        getFTGradeClassBasedOnDDODESIGNATIONInUpdate(obj.ddo, obj.designation, obj.fundType);
        getBudgetHeadBasedOnDDODesignationFundTypeInUpdate(obj.ddo, obj.designation, obj.fundType, obj.budgetHead);
        getNatureTypeBasedOnDDODesignationFundTypeBudgetHeadInUpdate(obj.ddo, obj.designation, obj.fundType, obj.budgetHead, obj.natureType);
        getDisciplineBasedOnDDODesignationFundTypeBudgetHeadNatureTypeInUpdate(obj.ddo, obj.designation, obj.fundType, obj.budgetHead, obj.natureType, obj.discipline);
        getDesignationCopytoSecondDesignationInUpdate(obj.designation);
//        getLocationBasedOnDDO();
        $("#quarterNo").prop("disabled", true);
        viewQuarterListForOption(obj.employeeCode, "quarterNo", "Quarter No");
        $("#employeeCode").val(obj.employeeCode).attr("disabled", true);
        $("#employeeCodeM").val(obj.employeeCodeM);
        $("#employeeName").val(obj.employeeName);
        $("#fatherName").val(obj.fatherName);
        $("#dob").val(obj.dob);
        $("#email").val(obj.email);
        $("#panNo").val(obj.panNo);
        $("#remarks").val(obj.remarks);
        if (obj.acnumber != null)
        {

            $("#acnumber").attr('disabled', false);
            $("#acnumber").val(obj.acnumber);
        }
        if (obj.bank != null)
        {

            $("#bank").attr('disabled', false);
            $("#bank").val(obj.bank);
        }
//        $("#dateOfAppointment").val(obj.dateOfAppointment);
//        alert(obj.dateOfAppointment);
        $("#dateOfAppointment").datepicker('setDate', obj.dateOfAppointment);
        $("#dateOfJoining").datepicker('setDate', obj.dateOfJoining);
        // $("#dateOfJoining").val(obj.dateOfJoining);
        $("#lastAppointmentDate").val(obj.lastAppointmentDate);
        $("#lastJoiningDate").val(obj.lastJoiningDate);
        $("#LeavingDate").val(obj.LeavingDate);
        $("#LeavingRemarks").val(obj.LeavingRemarks);
        $("#IncrementDueDate").val(obj.IncrementDueDate);
        $("#pfNumber").val(obj.pfNumber);
        $("#pfBalance").val(obj.pfBalance);
        $("#personalFileNo").val(obj.personalFileNo);
        $("#welfareNo").val(obj.welfareNo);
        $("#pgCode").val(obj.pgCode);
        $("#gradePay").val(obj.gradePay);
        $("#incrementPercentage").val(obj.incrementPercentage);
        $("#auditNumber").val(obj.auditNumber);
        $("#workDetails").val(obj.workDetails);
//        $("#salutationOption option:contains('" + obj.salutationOption + "')").attr("selected", "selected");
        $("#salutationOption").val(obj.salutationOption);
//        $("#ddo option:contains('" + obj.ddo + "')").attr("selected", "selected");
//        $("#category option:contains('" + obj.category + "')").attr("selected", "selected");
        $("#category").val(obj.category);
//        $("#religion option:contains('" + obj.religion + "')").attr("selected", "selected");
        $("#religion").val(obj.religion);
//        $("#maritalStatus option:contains('" + obj.maritalStatus + "')").attr("selected", "selected");
        $("#maritalStatus").val(obj.maritalStatus);
//        $("#payMode option:contains('" + obj.payMode + "')").attr("selected", "selected");
        $("#payMode").val(obj.payMode);

//        $("#pfBank option:contains('" + obj.pfBank + "')").attr("selected", "selected");
        $("#pfBank").val(obj.pfBank);
//        $("#postingDDO option:contains('" + obj.postingDDO + "')").attr("selected", "selected");
        $("#postingDDO").val(obj.postingDDO);
        $("#dateOfRetirement").val(obj.dateOfRetirement);
//        $("#department option:contains('" + obj.department + "')").attr("selected", "selected");
//        $("#discipline option:contains('" + obj.discipline + "')").attr("selected", "selected");
//        $("#natureType option:contains('" + obj.natureType + "')").attr("selected", "selected");
//        $("#fundType option:contains('" + obj.fundType + "')").attr("selected", "selected");
//        $("#budgetHead option:contains('" + obj.budgetHead + "')").attr("selected", "selected");
//        $("#salaryType option:contains('" + obj.salaryType + "')").attr("selected", "selected");
        $("#salaryType").val(obj.salaryType);
//        $("#postingCity option:contains('" + obj.postingCity + "')").attr("selected", "selected");
        $("#postingCity").val(obj.postingCity);
//        $("#designation option:contains('" + obj.designation + "')").attr("selected", "selected");
        $("#postedDesignation").val(obj.postedDesignation);
//        $("#postedDesignation option:contains('" + obj.postedDesignation + "')").attr("selected", "selected");
//        $("#quarterNo option:contains('" + obj.quarterNo + "')").attr("selected", "selected");

        $("#gender").val(obj.gender);
//        $("#gender option:contains('" + obj.gender + "')").attr("selected", "selected");
        $("#association").val(obj.association);
//        $("#association option:contains('" + obj.association + "')").attr("selected", "selected");
        $("#pfType").val(obj.pfType);
        $("#pfType").prop("disabled", true);
//        $("#pfType option:contains('" + obj.pfType + "')").attr("selected", "selected");
        $("#grade").val(obj.grade);
//        $("#grade option:contains('" + obj.grade + "')").attr("selected", "selected");
        $("#salaryBillType").val(obj.salaryBillType);
        $("#reportingTo").val(obj.reportingTo);
//        $("#reportingTo option:contains('" + obj.reportingTo + "')").attr("selected", "selected");
        $("#location").val(obj.location);
//        $("#location option:contains('" + obj.location + "')").attr("selected", "selected");
//        $("#class option:contains('" + obj.class + "')").attr("selected", "selected");

        getEmployeeLeftStatusOption(obj.EmployeeLeftReason, "EmployeeLeftStatus", "");
        $("#basic").val(obj.basic);
//        if (obj.onDeputation == "Yes") {
//            $("#onDeputation").prop("checked", "checked");
//            $("#fromDDO").prop("disabled", false);
//            viewFROMDddoListForListINUPDATE(obj.fromDDO, "fromDDO");
//        }
        if (obj.onDeputation == "Yes") {
            $("#onDeputation").prop("checked", "checked").prop("disabled", false);
            viewFROMDddoListForListINUPDATE(obj.fromDDO, "fromDDO");
        } else {
            $("#onDeputation").prop("checked", "");
        }
        $("#EmployeeLeftStatusYesNo").val(obj.EmployeeLeftStatus);
        if (obj.EmployeeLeftStatus != "" || obj.EmployeeLeftStatus != null || obj.EmployeeLeftStatus != undefined) {
            if (obj.EmployeeLeftStatus == "Retirement" || obj.EmployeeLeftStatus == "Termination" || obj.EmployeeLeftStatus == "Death" || obj.EmployeeLeftStatus == "Resignation" || obj.EmployeeLeftStatus == "Voluntary Retirement") {
                getEmployeeLeftStatusOption(obj.EmployeeLeftStatus, "EmployeeLeftStatus", "Employee Left Status");
                $("#EmployeeLeftStatusYesNo").val("Yes");
            }
        }
        if (obj.ptApplicable == "Yes")
            $("#ptApplicable").prop("checked", "checked");
        if (obj.isHandicapped == "Yes")
            $("#isHandicapped").prop("checked", "checked");
        if (obj.stopGPF == "Yes")
            $("#stopGPF").prop("checked", "checked");
        if (obj.isGazetted == "Yes")
            $("#isGazetted").prop("checked", "checked");
        if (obj.isPgTeacher == "Yes")
            $("#isPgTeacher").prop("checked", "checked");
        if (obj.stopSalary == "Yes")
            $("#stopSalary").prop("checked", "checked");
        if (obj.imageAvailable == true) {
            $.post(server_base_url + "hrms/salary/Employee/ImageSearch", {
                employeeId: obj._id.$oid
            }).done(function (data) {
                if (data != 500 || data != undefined || data != "500" || data != null || data != "null" || data != "404" || data != 404 || data != "400" || data != 400 || data != "undefined") {
                    $("#panelRow2out").text("").append("<img class='thumb-image' src='data:image/jpg;base64," + data + "' />");
                    $("#RemoveButtonDiv").text("").append("<center><button id='removeButton' onclick='removeImageOfEmployee()' name='Remove'>Remove</button></center>");
                } else {
                    $("#employeePic").val("");
                    $("#panelRow2out").text("");
                    $("#RemoveButtonDiv").text("");
                    $("#panelRow2out").append("[File size should not be larger than 100KB ]<br>[File Format  : &nbsp .jpeg  ,  .gif  ,  .png  and  .bmp   &nbsp ]");
                }
            });
        }
        $('#panNo').on("change", function () {
            this.value = this.value.toUpperCase();
        });
        if (obj.isSuspended == true) {
            $("#isSuspended").prop("checked", "checked").prop("disabled", true);
        } else {
            $("#isSuspended").prop("checked", "");
        }
        scrolupfunction();
        $("#pregsuccessBefore").text("");
        $("#saveorupdate").val("update");
        $("#panelRow28").text("");
        setTimeout(function () {
            $(".EarningsAmount").trigger("keyup");
            $(".DeductionAmount").trigger("keyup");
        }, 1000)
        addBothHeadsInEmployeeInUpdate(encodeURI(JSON.stringify(obj.earningHeads)), encodeURI(JSON.stringify(obj.deductionHeads)));
        $("#saveupdatebuttonId").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "employeemaster('" + DashboardMainDivID + "')");


    }
}
function addBothHeadsInEmployeeInUpdate(EarningHeads, DeductionHeads) {
    EarningHeadsDisplayInUpdate("Row30Col1", EarningHeads);
    DeductionHeadsDisplayInUpdate("Row30Col2", DeductionHeads);

    //
    if ($("#headButtonDisableFlag").val("enable")) {
        var saveorUpdate = $("#saveorupdate").val();
        if (saveorUpdate == "save")
            $("#panelRow28").text("").append("<div  class='col-xs-12'/><center><button type='button' value='Save' id='saveupdatebuttonId' class='btn btn-success mr5 '  onclick='employeeValidation1()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='resetBackBtnId' onclick=employeemaster('" + DashboardMainDivID + "') class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
        else if (saveorUpdate == "update") {
            $("#panelRow28").text("").append("<div  class='col-xs-12'/><center><button type='button' value='Save' id='saveupdatebuttonId' class='btn btn-success mr5 '  onclick='employeeValidation1()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='resetBackBtnId' onclick=employeemaster('" + DashboardMainDivID + "') class='btn btn-warning mr5' name='reset' value='reset'>Back</button></center></div>");
            $("#panelRow27").text("").append("<div  class='col-xs-12'/><center><button type='button' id='headsbuttton' class='btn btn-success mr5 '  onclick=addBothHeadsInEmployee('" + EarningHeads + "','" + DeductionHeads + "')>HEADS</button></div>");
        }
        $("#totalRow1").append("<label class='col-sm-4'>Total Deductions</label><input class='col-sm-4' type='text' id='displayTotalDeductions' readonly >");
        $("#Row36aCol1").text("").append(getLabel_InputWithSpan("Total Earnings", "", "displayTotalEarnings", "", "readonly"));
        $("#Row36aCol2").text("").append(getLabel_InputWithSpan("Total Deductions", "", "displayTotalDeductions", "", "readonly"));
        $("#headsbuttton").prop("disabled", false);
        $("#headButtonDisableFlag").text('').val("").val("disabled");
    } else {
        $("#headsbuttton").prop("disabled", false);
        $("#headButtonDisableFlag").text('').val("").val("disabled");
    }
//Deductions
    $("#displayDeductionHeadTable").append("<tbody id='displayDeductionHeadTableBody' class='table-striped table-bordered' />");
}
function EarningHeadsDisplayInUpdate(DivId, EarningHeads) {
    if (EarningHeads != null || EarningHeads != "" || EarningHeads != undefined || EarningHeads != "null") {
        EarningHeads = JSON.parse(decodeURI(EarningHeads));
        $("#" + DivId).text("").append("<h4><u>Earning Heads</u></h4><div class='row' id='EarningDatatablemainDiv' style='overflow-x:auto;'/>");
        $("#EarningDatatablemainDiv").append("<table class='table table-bordered table-striped table-warning' id='displayEarningHeadTable' />");
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
        var totalEarningAmount = 0;
        if (EarningHeads != null) {
            for (var i = 0; i < EarningHeads.length; i++) {
                var inputValue = EarningHeads[i].amount;
                totalEarningAmount = totalEarningAmount + EarningHeads[i].amount;
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
                            + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + inputValue + "'  onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                            + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
                            + "<td><input type='checkbox' value='" + EarningHeads[i].salaryHeadId + "'  name='case'  disabled></td>");
                } else if (EarningHeads[i].description == "GRADE PAY" || EarningHeads[i].description == "Grade Pay") {
                    sno++;
                    var gradeval = $("#gradePay").val();
                    $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i].salaryHeadId + "' style='cursor:pointer;' >"
                            + "<td><input type='checkbox' value='" + EarningHeads[i].salaryHeadId + "' onclick=getValueForThisHead('" + EarningHeads[i].salaryHeadId + "','displayEarningHeadTableBody',this.parentNode.parentNode.rowIndex) name='case' checked disabled></td>"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i].salaryHeadId + "'></td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
                            + "<td style='cursor:pointer;'><input type='text' id='' class='EarningsAmount' value='" + gradeval + "'  onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
                            + "<td style='cursor:pointer;'><input type='text'  id='" + idss + "' value='" + inputEffectiveDate + "' readonly='true'></td>"
                            + "<td><input type='checkbox' value='" + EarningHeads[i].salaryHeadId + "'  name='case'  disabled></td>");
                } else {
                    var checkOrUncheck = "checked";
                    if (EarningHeads[i].isActive == "No") {
                        checkOrUncheck = " disabled";
                    }
                    var checkBoxId = EarningHeads[i].salaryHeadId + "checkBox";
                    var inputTextBoxId = EarningHeads[i].salaryHeadId + "inputBox";
                    sno++;
                    $("#displayEarningHeadTableBody").append("<tr id='" + EarningHeads[i].salaryHeadId + "' style='cursor:pointer;' >"
                            + "<td><input type='checkbox' value='" + EarningHeads[i].salaryHeadId + "'  name='case' onchange=checkconditioninemp('" + EarningHeads[i].salaryHeadId + "') " + checkOrUncheck + "></td>"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].description + "<input type='hidden' value='" + EarningHeads[i].salaryHeadId + "'></td>"
                            + "<td style='cursor:pointer;'>" + EarningHeads[i].mapping + "</td>"
                            + "<td style='cursor:pointer;'><input type='text' class='EarningsAmount' id=" + inputTextBoxId + " value='" + inputValue + "'  onchange='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
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
}
function DeductionHeadsDisplayInUpdate(DivId, DeductionHeads) {
    if (DeductionHeads != null || DeductionHeads != "" || DeductionHeads != undefined || DeductionHeads != "null") {

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
                + "<th></i>Is Manual</th>"
                + "</tr></thead>");
        $("#displayDeductionHeadTable").append("<tbody id='displayDeductionHeadTableBody' class='table-striped table-bordered' />");
        var sno = 0;
        if (DeductionHeads != null) {
            for (var i = 0; i < DeductionHeads.length; i++) {
                var inputValue = DeductionHeads[i].amount;
                var inputEffectiveDate = DeductionHeads[i].effectiveFromDate;
                sno++;
                var spanId = "spanIdDeductions" + sno;
                var ids = "effectiveFromDate1" + sno;
                var checkOrUncheck = "checked";
                if (DeductionHeads[i].isActive == "No") {
                    checkOrUncheck = "disabled";
                }
                var checkBoxId = DeductionHeads[i].salaryHeadId + "checkBox";
                var inputTextBoxId = DeductionHeads[i].salaryHeadId + "inputBox";
                $("#displayDeductionHeadTableBody").append("<tr id='" + DeductionHeads[i].salaryHeadId + "' style='cursor:pointer;' >"
                        + "<td><input type='checkbox' value='" + DeductionHeads[i].salaryHeadId + "'  name='case' onchange=checkconditioninempdedu('" + DeductionHeads[i].salaryHeadId + "') " + checkOrUncheck + "></td>"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + DeductionHeads[i].description + "<input type='hidden' value='" + DeductionHeads[i].salaryHeadId + "'></td>"
                        + "<td style='cursor:pointer;'>" + DeductionHeads[i].mapping + "</td>"
                        + "<td style='cursor:pointer;'><input type='text' class='DeductionAmount' value='" + inputValue + "' onkeypress='return validateFloat(event)' disabled><span id=" + spanId + "></span></td>"
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
}

function checkLastAppointmentandJoin() {
    var fDate = $("#lastAppointmentDate").datepicker("getDate");
    var tDate = $("#lastJoiningDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
function checkLastAppointmentandJoinDate() {
    var fDate = $("#lastAppointmentDate").datepicker("getDate");
    var tDate = $("#dateOfJoining").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
function checkLeavingDateandJoinDate() {
    var fDate = $("#dateOfJoining").datepicker("getDate");
    var tDate = $("#LeavingDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
function checkDateofAppointmentandJoin() {
    var fDate = $("#dateOfAppointment").datepicker("getDate");
    var tDate = $("#dateOfJoining").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
function HeadsValidation() {

    $("#employeeNameErr").text("");
    $("#categoryErr").text("");
    $("#employeeCodeErr").text("");
    $("#employeeCodeMErr").text("");
    $("#employeeNameErr").text("");
    $("#fatherNameErr").text("");
    $("#genderErr").text("");
    $("#religionErr").text("");
    $("#maritalStatusErr").text("");
    $("#dobErr").text("");
    $("#emailErr").text("");
    $("#panNoErr").text("");
    $("#remarksErr").text("");
    $("#payModeErr").text("");
    $("#acnumberErr").text("");
    $("#bankErr").text("");
    $("#ddoErr").text("");
    $("#locationErr").text("");
    $("#departmentErr").text("");
    $("#disciplineErr").text("");
    $("#natureTypeErr").text("");
    $("#fundTypeErr").text("");
    $("#budgetHeadErr").text("");
    $("#reportingToErr").text("");
    $("#pfBankErr").text("");
    $("#pfNumberErr").text("");
    $("#pfBalanceErr").text("");
    $("#siPremNoErr").text("");
    $("#ptApplicableErr").text("");
    $("#stopGPFErr").text("");
    $("#auditNumberErr").text("");
    $("#workDetailsErr").text("");
    $("#welfareNoErr").text("");
    $("#isPgTeacherErr").text("");
    $("#pgCodeErr").text("");
    $("#postingDDOErr").text("");
    $("#dateOfAppointmentErr").text("");
    $("#dateOfJoiningErr").text("");
    $("#lastAppointmentDateErr").text("");
    $("#lastJoiningDateErr").text("");
    $("#EmployeeLeftStatusErr").text("");
    $("#EmployeeLeftReasonErr").text("");
    $("#LeavingDateErr").text("");
    $("#LeavingRemarksErr").text("");
    $("#IncrementDueDateErr").text("");
    $("#onDeputationErr").text("");
    $("#fromDDOErr").text("");
    $("#associationErr").text("");
    $("#isHandicappedErr").text("");
    $("#stopSalaryErr").text("");
    $("#isGazettedErr").text("");
    $("#personalFileNoErr").text("");
    $("#salaryTypeErr").text("");
    $("#designationErr").text("");
    $("#pfTypeErr").text("");
    $("#gradeErr").text("");
    $("#basicErr").text("");
    $("#postingCityErr").text("");
    $("#postedDesignationErr").text("");
    $("#quarterNoErr").text("");
    $("#gradePayErr").text("");
    $("#incrementPercentageErr").text("");
    $("#salaryBillTypeErr").text("");
    // $("#headSlabErr").text("");
    var days = checkDateofAppointmentandJoin();
    var totdays = checkLastAppointmentandJoin();
    var result = 1;
    var count = 0;
    if ($('#basic').val() == "" || $('#basic').val() == null) {
        $("#basic").focus();
        addSomeClass("basicFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("basicErr", "Please enter basic.");
        result = 0;
    } else if ($('#basic').val() != "" && $('#basic').val() != null) {
        if (!$('#basic').val().match((numbervalidation()))) {
            $("#basic").focus();
            addSomeClass("basicFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("basicErr", "Please enter valid  basic.");
            result = 0;
        }
        removeSomeClass("basicFieldGroup", "has-error");
        count++;
    }
    if ($('#gradePay').val() != "" && $('#gradePay').val() != null) {
        if (!$('#gradePay').val().match((numbervalidation()))) {
            $("#gradePay").focus();
            addSomeClass("gradePayFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("gradePayErr", "Please enter valid  Grade Pay.");
            result = 0;
        }
        removeSomeClass("gradePayFieldGroup", "has-error");
    }
    if ($('#grade').val() == null || $('#grade').val() == "") {
        $("#grade").focus();
        addSomeClass("gradeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("gradeErr", "Please Select grade.");
        result = 0;
    } else if ($('#grade').val() != null || $('#grade').val() != "") {
        removeSomeClass("gradeFieldGroup", "has-error");
        count++;
    }
    if ($('#pfType').val() == null || $('#pfType').val() == "") {
        $("#pfType").focus();
        addSomeClass("pfTypeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pfTypeErr", "Please Select PF Type.");
        result = 0;
    } else if ($('#pfType').val() != null || $('#pfType').val() != "") {
        removeSomeClass("pfTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#postedDesignation').val() == null || $('#postedDesignation').val() == "") {
        $("#postedDesignation").focus();
        addSomeClass("postedDesignationFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("postedDesignationErr", "Please Select Posted Designation.");
        result = 0;
    } else if ($('#postedDesignation').val() != null && $('#postedDesignation').val() != "") {
        removeSomeClass("postedDesignationFieldGroup", "has-error");
        count++;
    }
    if ($('#designation').val() == null || $('#designation').val() == "") {
        $("#designation").focus();
        addSomeClass("designationFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("designationErr", "Please Select  Designation.");
        result = 0;
    } else if ($('#designation').val() != null && $('#designation').val() != "") {
        removeSomeClass("designationFieldGroup", "has-error");
        count++;
    }
    if ($('#postingCity').val() == null || $('#postingCity').val() == "") {
        $("#postingCity").focus();
        addSomeClass("postingCityFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("postingCityErr", "Please Select  Posting City.");
        result = 0;
    } else if ($('#postingCity').val() != null && $('#postingCity').val() != "") {
        removeSomeClass("postingCityFieldGroup", "has-error");
        count++;
    }
    if ($('#salaryBillType').val() == null || $('#salaryBillType').val() == "") {
        $("#salaryBillType").focus();
        displaySmallErrorMessagesInRed("salaryBillTypeErr", "Please Select  Salary Bill Type.");
        result = 0;
    } else if ($('#salaryBillType').val() != null || $('#salaryBillType').val() != "") {
        removeSomeClass("salaryBillTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#salaryType').val() == null || $('#salaryType').val() == "") {
        $("#salaryType").focus();
        addSomeClass("salaryTypeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("salaryTypeErr", "Please Select  Salary Type.");
        result = 0;
    } else if ($('#salaryType').val() != null && $('#salaryType').val() != "") {
        removeSomeClass("salaryTypeFieldGroup", "has-error");
        count++;
    }

    if ($('#budgetHead').val() == null || $('#budgetHead').val() == "") {
        $("#budgetHead").focus();
        addSomeClass("budgetHeadFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("budgetHeadErr", "Please Select Budget Head.");
        result = 0;
    } else if ($('#budgetHead').val() != null && $('#budgetHead').val() != "") {
        removeSomeClass("budgetHeadFieldGroup", "has-error");
        count++;
    }
    if ($('#fundType').val() == null || $('#fundType').val() == "") {
        $("#fundType").focus();
        addSomeClass("fundTypeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("fundTypeErr", "Please Select  Fund Type.");
        result = 0;
    } else if ($('#fundType').val() != null && $('#fundType').val() != "") {
        removeSomeClass("fundTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#employeeName').val() == null || $('#employeeName').val() == "") {
        $("#employeeName").focus();
        addSomeClass("fundTypeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("employeeNameErr", "Please Enter Employee Name.");
        result = 0;
    } else if ($('#employeeName').val() != null && $('#employeeName').val() != "") {
        removeSomeClass("fundTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#dateOfAppointment').val() == null || $('#dateOfAppointment').val() == "") {
        $("#dateOfAppointment").focus();
        addSomeClass("fundTypeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("dateOfAppointmentErr", "Please Enter Appointment Date.");
        result = 0;
    } else if ($('#dateOfAppointment').val() != null && $('#dateOfAppointment').val() != "") {
        removeSomeClass("fundTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#natureType').val() == null || $('#natureType').val() == "") {
        $("#natureType").focus();
        addSomeClass("natureTypeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("natureTypeErr", "Please Select Nature Type.");
        result = 0;
    } else if ($('#natureType').val() != null && $('#natureType').val() != "") {
        removeSomeClass("natureTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#discipline').val() == null || $('#discipline').val() == "") {
        $("#discipline").focus();
        addSomeClass("disciplineFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("disciplineErr", "Please Select Discipline.");
        result = 0;
    } else if ($('#discipline').val() != null && $('#discipline').val() != "") {
        removeSomeClass("disciplineFieldGroup", "has-error");
        count++;
    }
    if ($('#department').val() == null || $('#department').val() == "") {
        $("#department").focus();
        addSomeClass("departmentFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("departmentErr", "Please Select Department.");
        result = 0;
    } else if ($('#department').val() != null && $('#department').val() != "") {
        removeSomeClass("departmentFieldGroup", "has-error");
        count++;
    }
    if ($('#location').val() == "" || $('#location').val() == null) {
        $("#location").focus();
        addSomeClass("locationFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("locationErr", "Please Select Location.");
        result = 0;
    } else if ($('#location').val() != "" || $('#location').val() != null) {
        removeSomeClass("locationFieldGroup", "has-error");
    }
    if ($('#ddo').val() == null || $('#ddo').val() == "") {
        $("#ddo").focus();
        addSomeClass("ddoFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("ddoErr", "Please enter DDO.");
        result = 0;
    } else if ($('#ddo').val() != null && $('#ddo').val() != "") {
        removeSomeClass("ddoFieldGroup", "has-error");
        count++;
    }
    if ($('#payMode').val() == null || $('#payMode').val() == "") {
        $("#payMode").focus();
        addSomeClass("payModeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("payModeErr", "Please Select Pay Mode.");
        result = 0;
    } else if ($('#payMode').val() != null && $('#payMode').val() != "") {
        removeSomeClass("payModeFieldGroup", "has-error");
        count++;
    }

    if ($('#panNo').val() == "") {
        $("#panNo").focus();
        addSomeClass("emailFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("panNoErr", "Please enter Pan Number.");
        result = 0;
    } else if ($('#panNo').val() != "") {
        if (!$('#panNo').val().match((PanNumberValidation()))) {
            $("#panNo").focus();
            addSomeClass("panNoFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("panNoErr", "Please enter valid Pan Number .");
            result = 0;
        }
        removeSomeClass("panNoFieldGroup", "has-error");
        count++;
    }
    if ($('#email').val() == "") {
        $("#email").focus();
        addSomeClass("emailFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("emailErr", "Please enter email.");
        result = 0;
    } else if ($('#email').val() != "") {
        if (!$('#email').val().match((EmailValidation()))) {
            $("#email").focus();
            addSomeClass("emailFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("emailErr", "Please enter valid Email .");
            result = 0;
        }
        removeSomeClass("emailFieldGroup", "has-error");
        count++;
    }
    if ($('#dob').val() == null || $('#dob').val() == "") {
        $("#dob").focus();
        addSomeClass("dobFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("dobErr", "Please enter date.");
        result = 0;
    } else if ($('#dob').val() != "" || $('#dob').val() != null) {
        removeSomeClass("dobFieldGroup", "has-error");
        count++;
    }
    if ($('#maritalStatus').val() == null || $('#maritalStatus').val() == "") {
        $("#maritalStatus").focus();
        addSomeClass("maritalStatusFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("maritalStatusErr", "Please Select Marital Status.");
        result = 0;
    } else if ($('#maritalStatus').val() != null && $('#maritalStatus').val() != "") {
        removeSomeClass("maritalStatusFieldGroup", "has-error");
        count++;
    }
    if ($('#religion').val() == null || $('#religion').val() == "") {
        $("#religion").focus();
        addSomeClass("religionFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("religionErr", "Please Select Religion.");
        result = 0;
    } else if ($('#religion').val() != null && $('#religion').val() != "") {
        removeSomeClass("religionFieldGroup", "has-error");
        count++;
    }
    if ($('#category').val() == null || $('#category').val() == "") {
        $("#category").focus();
        addSomeClass("categoryFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("categoryErr", "Please Select Category .");
        result = 0;
    } else if ($('#category').val() != null && $('#category').val() != "") {
        removeSomeClass("categoryFieldGroup", "has-error");
        count++;
    }
    if ($('#gender').val() == null || $('#gender').val() == "") {
        $("#gender").focus();
        addSomeClass("genderFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("genderErr", "Please Select Gender.");
        result = 0;
    } else if ($('#gender').val() != null && $('#gender').val() != "") {
        removeSomeClass("genderFieldGroup", "has-error");
        count++;
    }

    if ($('#employeeCodeM').val() == "") {
        $("#employeeCodeM").focus();
        addSomeClass("employeeCodeMFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("employeeCodeMErr", "Please Enter Employee Code(M) .");
        result = 0;
    } else if ($('#employeeCodeM').val() != "") {
        removeSomeClass("employeeCodeMFieldGroup", "has-error");
        count++;
    }
    if ($('#employeeName').val() == "" || $('#employeeName').val() == null) {
        $("#employeeName").focus();
        addSomeClass("employeeNameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("employeeNameErr", "Please Enter Employee Name");
        result = 0;
    } else if ($('#employeeName').val() != "" && $('#employeeName').val() != null) {
        removeSomeClass("employeeNameFieldGroup", "has-error");
        count++;
    }
    if ($('#employeeCode').val() == "") {
        $("#employeeCode").focus();
        addSomeClass("employeeCodeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("employeeCodeErr", "Please Enter Employee Code.");
        result = 0;
    } else if ($('#employeeCodeM').val() != "") {
        removeSomeClass("employeeCodeMFieldGroup", "has-error");
        count++;
    }
    if (days < 0) {
        $("#dateOfJoining").focus();
        displaySmallErrorMessagesInRed("dateOfJoiningErr", "Please Check Joining Date.");
        result = 0;
    } else {
        $("#dateOfJoiningErr").text("");
    }
    if (totdays < 0) {
        $("#lastJoiningDate").focus();
        displaySmallErrorMessagesInRed("lastJoiningDateErr", "Please Check Last Joining Date .");
        result = 0;
    } else {
    }
    if (result != 0) {
        return true;
    }
}
function checkJoiningDateAndIncrementDateForEmployee() {
    var fDate = $("#dateOfJoining").datepicker("getDate");
    var tDate = $("#IncrementDueDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}