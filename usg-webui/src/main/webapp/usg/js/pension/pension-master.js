/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayPensionMaster(divId)
{
    scrolupfunction();
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
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">Pension</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="#">Pension >></a></label> <label><a href="javascript:pensionMasters()"> Pension Master</a></label> >> <label> Pension Master</label>');
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
//    if (checkUserPrivelege(pvCreateEmployee)) {
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Pension Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='pensionMaster'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#pensionMaster").click(function() {
        $("#collapseOne2").toggle();
        if ($("#pensionMaster span").hasClass("glyphicon-minus-sign")) {
            $("#pensionMaster").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#pensionMaster").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
    $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + currentFinancialYear + "</strong></span>");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<div id='pregsuccessBefore'></div>");

    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    $("#FieldGroup").append("<input type='hidden' id='employeeId'>");
    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");

    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel("Employee Code", "required") + "" + getInputwithErrSpan("employeeCode", "", "", ""));
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
    $("#FieldGroup2").append("<label class='control-label'>Father Name<span class='require'>*</span></label><input type='text' onkeypress='return validatealphanumeric(event)' id='fatherName' class='form-control'  placeholder='Enter father name'  size=50 maxlength=50>");
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
    viewSalutationListForOption("", "salutationOption");

    $("#panelMainBody").append("<label><u><h3>Main Details</h3><u></label><hr><div id='panelRow3' class='row' />");
    $("#panelRow3").append("<div id='FieldGroup11' class='form-group' />");

    getTwoColumnInRow("FieldGroup11", "Row5", "Row5Col1", "Row5Col2");
    $("#Row5Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
    $("#Row5Col2").append(getLabel_InputWithSpan("Date Of Appointment", "required", "dateOfAppointment", "", ""));
    $('#dateOfAppointment').datepicker({
        changeYear: true,
        changeMonth: true,
        startDate: fromFinacialYear,
        endDate: toFinacialYear
    });
    //row 2
    getTwoColumnInRow("FieldGroup11", "Row6", "Row6Col1", "Row6Col2");
    $("#Row6Col1").append(getLabel("Location", "required") + "" + getDropDown("location"));
     $("#Row6Col2").append(getLabel_InputWithSpan("Date Of Joining", "required", "dateOfJoining", "", ""));
    $('#dateOfJoining').datepicker({
        changeYear: true,
        changeMonth: true,
        startDate: fromFinacialYear,
        endDate: toFinacialYear
    });
   

    getTwoColumnInRow("FieldGroup11", "Row7", "Row7Col1", "Row7Col2");
    $("#Row7Col1").append(getLabel("Department", "required") + "" + getDropDown("department"));
     $("#Row7Col2").append(getLabel_InputWithSpan("Last Appointment Date", "", "lastAppointmentDate", "", ""));
    $('#lastAppointmentDate').datepicker({
        changeYear: true,
        changeMonth: true,
        startDate: fromFinacialYear,
        endDate: toFinacialYear
    });
    getTwoColumnInRow("FieldGroup11", "Row8", "Row8Col1", "Row8Col2");
    $("#Row8Col1").append(getLabel("Designation", "required") + "" + getDropDown("designation"));
    $("#Row8Col2").append(getLabel_InputWithSpan("Last Joining Date", "", "lastJoiningDate", "", ""));
    $('#lastJoiningDate').datepicker({
        changeYear: true,
        changeMonth: true,
        startDate: fromFinacialYear,
        endDate: toFinacialYear
    });

    getTwoColumnInRow("FieldGroup11", "Row9", "Row9Col1", "Row9Col2");
    $("#Row9Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));
     $("#Row9Col2").append(getLabel_InputWithSpan("Retirement Date", "required", "dateOfRetirement", "", ""));
    $('#dateOfRetirement').datepicker({
        changeYear: true,
        changeMonth: true,
        startDate: fromFinacialYear,
        endDate: toFinacialYear
    });
   // $("#Row9ol2").append(getLabel_InputWithSpan("Leaving Date", "required", "LeavingDate", "", ""));
//    $('#LeavingDate').datepicker({
//        changeYear: true,
//        changeMonth: true,
//        startDate: fromFinacialYear,
//        endDate: toFinacialYear
//    });

    getTwoColumnInRow("FieldGroup11", "Row10", "Row10Col1", "Row10Col2");
    $("#Row10Col1").append(getLabel("Budget Head", "required") + "" + getDropDown("budgetHead"));
    $("#Row10Col2").append(getLabel_InputWithSpan("Leaving Remarks", "", "LeavingRemarks", "", ""));

    getTwoColumnInRow("FieldGroup11", "Row11", "Row11Col1", "Row11Col2");
    $("#Row11Col1").append(getLabel("Nature Type", "required") + "" + getDropDown("natureType"));
   $("#Row11Col2").append(getLabel("Leaving Reason", "required") + "" + getDropDown("leavingReason"));
    var sortByOptions = ["Retirement", "Voluntary Retirement ", "Death"];
    getHardCodedOptions("leavingReason", "Leaving Reason", sortByOptions);


    getTwoColumnInRow("FieldGroup11", "Row12", "Row12Col1", "Row12Col2");
    $("#Row12Col1").append(getLabel("Discipline", "required") + "" + getDropDown("discipline"));
     $("#Row12Col2").append(getLabel("Grade", "required") + "" + getDropDown("gradePension"));
    viewOption("hrms/salary/Grade/ViewList", "", "gradeName", "gradePension", "Grade");
     $("#gradePension").attr("onchange", "getGradePayValueinPensionemployee()");

    getTwoColumnInRow("FieldGroup11", "Row13", "Row13Col1", "Row13Col2");
    $("#Row13Col1").append(getLabel("Grade Pay", "required") + "" + getInputwithErrSpan("gradePay", "", "", "readOnly"));


    getLoggedInDDOLocationInDropDown("ddo", "location");

    //viewDesignationListForOption("", "designation", "Designation");
    getGenderOption("", "gender");
    getCategoryOptionsForTables("", "category", "Category");
    viewReligionListForOption();
    viewMaritalListForOption();
    getdatatoemployeeUsingDDO();
    getDepartmentBasedOnDDO();
    $("#fundType").attr("onchange", "getBudgetHeadBasedOnDDODesignationFundType()");
    $("#designation").attr("onchange", "getFTGradeClassBasedOnDDODESIGNATION()");

    $("#budgetHead").attr("onchange", "getNatureTypeBasedOnDDODesignationFundTypeBudgetHead()");
    $("#natureType").attr("onchange", "getDesciplineBasedOnDDODesignationFundTypeBudgetHeadNatureType()");
    getSaveResetUpdateBackButton("FieldGroup11", "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "pensionValidation()", "Reset", "resetBackBtnId", "displayPensionMaster()");



    $("#tableHeader").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Pension Employee(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='empMasterList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#empMasterList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#empMasterList span").hasClass("glyphicon-minus-sign")) {
            $("#empMasterList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#empMasterList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#FieldGroup").append("<input type='hidden' id='basicId'>");
    pensionEmployeeList('listpanelMainBody');
}
function getGradePayValueinPensionemployee() {
    var id = getUserSessionElement("userId");
    $.get(server_base_url + "hrms/salary/Designation/getGradepayValue", {
        id: $("#gradePension").val(),
        userId: id
    }).done(function(data) {
        if (data != null) {
            // //alert(data);
            var bdata = JSON.parse(data);
            // //alert(bdata.gradePay);
            $("#gradePay").val(bdata.gradePay);
        }
    });
}
function pensionValidation()
{

    $("#pregsuccessBefore").text("");
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
    $("#ddoErr").text("");
    $("#locationErr").text("");
    $("#departmentErr").text("");
    $("#disciplineErr").text("");
    $("#natureTypeErr").text("");
    $("#fundTypeErr").text("");
    $("#budgetHeadErr").text("");
    $("#dateOfAppointmentErr").text("");
    $("#dateOfJoiningErr").text("");
    $("#lastAppointmentDateErr").text("");
    $("#lastJoiningDateErr").text("");
    $("#LeavingDateErr").text("");
    $("#LeavingRemarksErr").text("");
    $("#designationErr").text("");
    $("#pfTypeErr").text("");
    $("#gradeErr").text("");
//    var days = checkDateofAppointmentandJoin();
//    var totdays = checkLastAppointmentandJoin();
    var count = 0;
    var result = 1;
    var employeeCode = $("#employeeCode").val();
    var employeeCodeM = $("#employeeCodeM").val();
    var salutationOption = $("#salutationOption").val();
    var employeeName = $("#employeeName").val();
    var fatherName = $("#fatherName").val();
    var gender = $("#gender").val();
    var category = $("#category").val();
    var religion = $("#religion").val();
    var maritalStatus = $("#maritalStatus").val();
    var dob = $("#dob").val();
    var email = $("#email").val();
    var panNo = $("#panNo").val();
    var remarks = $("#remarks").val();

    var department = $("#department").val();
    var designation = $("#designation").val();
    var discipline = $("#discipline").val();
    var natureType = $("#natureType").val();
    var fundType = $("#fundType").val();
    var budgetHead = $("#budgetHead").val();

    var dateOfAppointment = $("#dateOfAppointment").val();
    var dateOfJoining = $("#dateOfJoining").val();
    var lastAppointmentDate = $("#lastAppointmentDate").val();
    var lastJoiningDate = $("#lastJoiningDate").val();
   // var LeavingDate = $("#LeavingDate").val();
    var LeavingRemarks = $("#LeavingRemarks").val();
     var leavingReason = $("#leavingReason").val();
    var dateOfRetirement = $("#dateOfRetirement").val();
    var grade = $("#gradePension").val();
    var gradePay = $("#gradePay").val();








    ////alert(dateOfAppointment+dateOfJoining+employeeCode+employeeCodeM+employeeName+fatherName+gender+category+religion+maritalStatus+dob+email+panNo+department+designation+discipline+natureType+fundType+budgetHead);
    var saveorupdate = $('#saveorupdate').val();
    if (preValidation(leavingReason) || preValidation(dateOfRetirement)||preValidation(dateOfAppointment)|| preValidation(dateOfJoining) || preValidation(employeeCode) || preValidation(employeeCodeM) || preValidation(employeeName) || preValidation(fatherName) || preValidation(gender) || preValidation(category) || preValidation(religion) || preValidation(maritalStatus) || preValidation(dob) || preValidation(email) || preValidation(panNo) || preValidation(department) || preValidation(designation) || preValidation(discipline) || preValidation(natureType) || preValidation(fundType) || preValidation(budgetHead) || preValidation(grade) || preValidation(gradePay))
    {
        scrolupfunction();
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", MandoryFieldMsg);
        return false;
    }
    else if ($('#panNo').val() != "") {
        if (!$('#panNo').val().match((PanNumberValidation()))) {
            $("#panNo").focus();
            addSomeClass("panNoFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("panNoErr", "Please enter valid Pan Number .");
            result = 0;
            return false;
        }
        removeSomeClass("panNoFieldGroup", "has-error");
        count++;
    }
    else if ($('#email').val() != "")
    {
        if (!$('#email').val().match((EmailValidation()))) {
            $("#email").focus();
            addSomeClass("emailFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("emailErr", "Please enter valid Email .");
            return false;
        }
        removeSomeClass("emailFieldGroup", "has-error");
        count++;
    }
     var days = checkDateofAppointmentandJoin();
    var totdays = checkLastAppointmentandJoin();
    var totdays1=checkLastAppointmentandJoinDate();
  //  var totdays12=checkLeavingDateandJoinDate();
    var count=0;
  if (days < 0) {
        $("#dateOfJoining").focus();
        displaySmallErrorMessagesInRed("dateOfJoiningErr", "Please Check Joining Date.");
      $("#dateOfJoining").val("");
        count++
    } else {
        $("#dateOfJoiningErr").text("");
    }
     if (totdays1 < 0) {
        $("#dateOfJoining").focus();
        displaySmallErrorMessagesInRed("dateOfJoiningErr", "Please Check Joining Date.");
      $("#dateOfJoining").val("");
        count++
    } else {
        $("#dateOfJoiningErr").text("");
    }
    if (totdays < 0) {
        $("#lastJoiningDate").focus();
        displaySmallErrorMessagesInRed("lastJoiningDateErr", "Please Check Last Joining Date .");
        $("#lastJoiningDate").val("");
        count++
    } else 
    {
    }
//    if (totdays12 < 0) {
//        $("#LeavingDate").focus();
//        displaySmallErrorMessagesInRed("LeavingDateErr", "Leaving Date Must Be Greater Than Joining Date ");
//        $("#LeavingDate").val("");
//        count++
//    } else 
//    {
//    }
       if(count==0)
       {
           ////alert(saveorupdate);
       if (saveorupdate == "save") {
                 savePensionEmpDetails();
            } else if (saveorupdate == "update") {
                updatePensionEmployeeDetailsmaster();
            }
      
       }
   ///("success");
}
function savePensionEmpDetails()
{
    ////alert();
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
        ddo: $("#ddo").val(),
        location: $("#location").val(),
        department: $("#department").val(),
        discipline: $("#discipline").val(),
        natureType: $("#natureType").val(),
        fundType: $("#fundType").val(),
        budgetHead: $("#budgetHead").val(),
        dateOfJoining: $("#dateOfJoining").val(),
        lastAppointmentDate: $("#lastAppointmentDate").val(),
        dateOfAppointment: $("#dateOfAppointment").val(),
        lastJoiningDate: $("#lastJoiningDate").val(),
       // LeavingDate: $("#LeavingDate").val(),
        designation: $("#designation").val(),
        dateOfRetirement: $("#dateOfRetirement").val(),
        LeavingRemarks: $("#LeavingRemarks").val(),
        grade: $("#gradePension").val(),
        gradePay: $("#gradePay").val(),
        leavingReason:$("#leavingReason").val()
    };
    var form_data = new FormData();
    var imageCount = document.getElementById("employeePic").files.length;
    for (i = 0; i < imageCount; i++) {
        form_data.append("file", document.getElementById("employeePic").files[i]);
    }
//    var filesize = document.getElementById("employeePic").files[0].size;
//    //alert(filesize);
//    if (filesize < 102, 401) {
//        //alert("Yes 100 Kb");
//    } else {
//        //alert("No More than 100 kb");
//        return;
//    }
    ////alert("aaaaa");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/usg-server/Pension/PensionMaster/PensionEmployeeSaveService", true);
    xhr.setRequestHeader("employeeJson", JSON.stringify(employeeJson));
    xhr.setRequestHeader("userId", getUserSessionElement("userId"));
    // //alert("aaaaa");
    if (imageCount == 1) {
        xhr.send(form_data);
    } else {
        xhr.send();
    }
    //disableDiv("mainTabMenu");
    xhr.onreadystatechange = function() {
        ////alert(xhr.readyState);
        if (xhr.readyState === 4) {
            ////alert(xhr.status);
            if (xhr.status === 200) {
                scrolupfunction();
                console.log(xhr.response);
                var parsedResponse = JSON.parse(xhr.response);
                parsedResponse = JSON.parse(parsedResponse);
                // //alert(parsedResponse.statusMessage);
                if (parsedResponse.statusMessage == "success") {
                    displayPensionMaster("dashBoardBodyMainDiv");
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
//                        //alert("No Post Available For This Category");
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

function pensionEmployeeList(divId)
{
    //if (checkUserPrivelege(pvViewEmployee)) {
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
            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>");
    // + "<th style='min-width:30%;width:auto;'><i ></i>Salary Type</th>");
    //if (checkUserPrivelege(pvUpdateEmployee)) {
    $("#tableheadrowid").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
    // }
    // if (checkUserPrivelege(pvDeleteEmployee)) {
    $("#tableheadrowid").append("<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>");
    //}
    $("#tableheadrowid").append("</tr></thead>");
    var employeeSearchJSON = {
        ddo: getUserSessionElement(seDDOId),
        location: getUserSessionElement(seLocationId)
    };
    $.get(server_base_url + "/Pension/Pension-master/PensionEmpSearchService", {
        condition: "No",
        employeeSearchJSON: JSON.stringify(employeeSearchJSON)
    }).done(function(bdata) {
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
                            ddo: bdata[i].ddo,
                            location: bdata[i].location,
                            department: bdata[i].department,
                            discipline: bdata[i].discipline,
                            natureType: bdata[i].natureType,
                            fundType: bdata[i].fundType,
                            budgetHead: bdata[i].budgetHead,
                            dateOfJoining: bdata[i].dateOfJoining,
                            lastAppointmentDate: bdata[i].lastAppointmentDate,
                            dateOfAppointment: bdata[i].dateOfAppointment,
                            lastJoiningDate: bdata[i].lastJoiningDate,
                            dateOfRetirement: bdata[i].dateOfRetirement,
                            LeavingDate: bdata[i].LeavingDate,
                            LeavingRemarks: bdata[i].LeavingDate,
                            designation: bdata[i].designation,
                            grade: bdata[i].grade,
                            gradePay: bdata[i].designation
                        };

                        var pdata = encodeURI(JSON.stringify(bdata[i]));
                        employeejson = encodeURI(JSON.stringify(employeejson));
                        $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeCode + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeCodeM + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].locationName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].departmentName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].designationName + "</td>");
                        //+ "<td style='cursor:pointer;'>" + bdata[i].salaryType + "</td>");
                        // if (checkUserPrivelege(pvUpdateEmployee)) {
                        $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=fetchPensionEmployForUpdate('" + pdata + "','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>");
                        // }
                        // if (checkUserPrivelege(pvDeleteEmployee)) {
                        $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletePensionemployee','','" + bdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td>");
                        //  }
                        $("#" + bdata[i]._id.$oid).append("</tr>");
                    }
                    $('#displayBankTable').dataTable();
                } else {
                    displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFound + "<br /><br />");
                }
            }
        }
    });
    //}
}
function updatePensionEmployeeDetailsmaster() {

    var employeeId = $("#employeeId").val();
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
        ddo: $("#ddo").val(),
        location: $("#location").val(),
        department: $("#department").val(),
        discipline: $("#discipline").val(),
        natureType: $("#natureType").val(),
        fundType: $("#fundType").val(),
        budgetHead: $("#budgetHead").val(),
        dateOfJoining: $("#dateOfJoining").val(),
        lastAppointmentDate: $("#lastAppointmentDate").val(),
        dateOfAppointment: $("#dateOfAppointment").val(),
        lastJoiningDate: $("#lastJoiningDate").val(),
        LeavingDate: $("#LeavingDate").val(),
        LeavingRemarks: $("#LeavingRemarks").val(),
        dateOfRetirement: $("#dateOfRetirement").val(),
        designation: $("#designation").val(),
        grade: $("#gradePension").val(),
        gradePay: $("#gradePay").val()
    };
    $("#basicErr").text("");
    var form_data = new FormData();
    var imageCount = document.getElementById("employeePic").files.length;
    for (i = 0; i < imageCount; i++) {
        form_data.append("file", document.getElementById("employeePic").files[i]);
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/usg-server/pension/PensionMaster/Update", true);
    xhr.setRequestHeader("employeeJson", JSON.stringify(employeeJson));
    xhr.setRequestHeader("employeeId", employeeId);
    xhr.setRequestHeader("userId", getUserSessionElement("userId"));
    if (imageCount == 1) {
        xhr.send(form_data);
    } else {
        xhr.send();
    }
    disableDiv("mainTabMenu");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var responseObj = JSON.parse(xhr.response);
                if (responseObj == NoPostAvailableForThisCategory) {
                    displayErrorMessages("pregsuccessBefore", "No Post available", "");
                    enableEmployeeDiv("mainTabMenu");
                    scrolupfunction();
                    clearSuccessMessageAfterFourSecond("pregsuccessBefore");
                    return;
                }
                if (responseObj == "Email Already Existed") {
                    displayErrorMessages("pregsuccessBefore", "Email Already Existed", "");
                    enableEmployeeDiv("mainTabMenu");
                    scrolupfunction();
                    clearSuccessMessageAfterFourSecond("pregsuccessBefore");
                    return;
                }
                if (responseObj == "PAN Already Existed") {
                    displayErrorMessages("pregsuccessBefore", "PAN Already Existed", "");
                    enableEmployeeDiv("mainTabMenu");
                    scrolupfunction();
                    clearSuccessMessageAfterFourSecond("pregsuccessBefore");
                    return;
                }
                if (responseObj == "Updated" || xhr.response == "updated") {
                    setTimeout(function() {
                        displayPensionMaster("dashBoardBodyMainDiv");
                        enableEmployeeDiv("mainTabMenu");
                        scrolupfunction();
                        displaySuccessMessages("pregsuccessBefore", updateSuccessMessage, "");
                    }, 1000);
                    clearSuccessMessageAfterFourSecond("pregsuccessBefore");
                } else {
                    scrolupfunction();
                    displayErrorMessages("pregsuccessBefore", "Employee Not Updated.");
                    enableEmployeeDiv("mainTabMenu");
                }
            }
        }
    }
    //}
}
function fetchPensionEmployForUpdate(obj, id)
{
    // //alert(obj);
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#employeeCode").val(obj.employeeCode).attr("disabled", true);
    $("#employeeCodeM").val(obj.employeeCodeM);
    $("#employeeName").val(obj.employeeName);
    $("#salutationOption").val(obj.salutationOption);
    $("#fatherName").val(obj.fatherName);
    $("#gender").val(obj.gender);
    $("#category").val(obj.category);
    $("#religion").val(obj.religion);
    $("#maritalStatus").val(obj.maritalStatus);
    $("#dob").val(obj.dob);
    $("#email").val(obj.email);
    $("#panNo").val(obj.panNo);
    $("#remarks").val(obj.remarks);
    $("#ddo").val(obj.ddo);
    $("#employeeId").val(obj._id.$oid);
    $("#location").val(obj.location);
    // //alert(obj.remarks);
    $("#saveorupdate").val("update");
    $("#dateOfAppointment").val(obj.dateOfAppointment);
    $("#dateOfJoining").val(obj.dateOfJoining);
    $("#lastAppointmentDate").val(obj.lastAppointmentDate);
    $("#lastJoiningDate").val(obj.lastJoiningDate);
    $("#LeavingDate").val(obj.LeavingDate);
    $("#dateOfAppointment").datepicker('setDate', obj.dateOfAppointment);
   $("#dateOfJoining").datepicker('setDate', obj.dateOfJoining);
    $("#lastAppointmentDate").datepicker('setDate', obj.lastAppointmentDate);
    $("#LeavingRemarks").val(obj.LeavingRemarks);
    $("#dateOfRetirement").val(obj.dateOfRetirement);
    $("#department").val(obj.department);
    $("#designation").val(obj.designation);
    $("#gradePension").val(obj.grade);
    $("#gradePay").val(obj.gradePay);
    $("#leavingReason").val(obj.leavingReason);
    getFTGradeClassBasedOnDDODESIGNATION();
    
     $("#displayBankTable tr").css("background-color", "white");
    $("#displayBankTable tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    
    if (obj.imageAvailable == true)
    {
        $.post(server_base_url + "pension/pensionMaster/PensionImageSearch", {
            employeeId: obj._id.$oid
        }).done(function(data) {
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
    setTimeout(function() {
        $("#fundType").val(obj.fundType);
        getBudgetHeadBasedOnDDODesignationFundType();

    }, 3100);
    setTimeout(function()
    {
        $("#budgetHead").val(obj.budgetHead);
        getNatureTypeBasedOnDDODesignationFundTypeBudgetHead();

    }, 4100);
    setTimeout(function() {
        $("#natureType").val(obj.natureType);
        getDesciplineBasedOnDDODesignationFundTypeBudgetHeadNatureType();

    }, 5000);
    setTimeout(function() {
        $("#discipline").val(obj.discipline);
    }, 5500);
    $("#saveOrUpdateRowId").text("");
    getSaveResetUpdateBackButton("FieldGroup11", "saveOrUpdateRowId", "Update", "UpdateBtnId", "pensionValidation()", "Back", "backBtnId", "displayPensionMaster()");


}
function deletePensionemployee(employeeId) {
    // if (checkUserPrivelege(pvDeleteEmployee)) {
    $.post(server_base_url + "Pension/PensionMaster/Delete", {
        employeeId: employeeId,
        userId: getUserSessionElement("userId")
    }).done(function(data) {

        if (data == fail || data.statuscode == fail) {
            displayErrorMessages("ErrorDiv", "This Employee  " + delete_map_message, "");
            setTimeout(function() {
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
            setTimeout(function() {
                pensionEmployeeList('listpanelMainBody');
            }, 4000);
        }
    });
    //  }
}