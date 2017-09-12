/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Form Display for Search Panel in Pension-Employee Master
function displayPensionEmployeeDetails(divId) {
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionMasters()">Pension  Master</a></label> >><label>Pension Employee</label>');
    $("#" + divId).text("").append("<div id='SearchMainDivId' class='' />");
    $("#" + divId).append("<div id='employeeListMainDivId' />");
    $("#" + divId).append("<div id='testMainDivId' class='' />");
    $("#SearchMainDivId").append('<div id="searchPensionMainPanel" class="panel panel-blue" />');
    $("#searchPensionMainPanel").append('<div id="searchPensionMainHeading" class="panel-heading" />');
    $("#searchPensionMainHeading").append("<h4 id='searchPensionMainTitleHeading' class='panel-title' />");

    $("#searchPensionMainTitleHeading").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>Employee Search</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colPensionEmployeeSearch'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#searchPensionMainPanel").append("<div id='colPensionEmployeeSearchDiv' class='panel-collapse collapse in' />");
    $("#colPensionEmployeeSearch").click(function () {
        $("#colPensionEmployeeSearchDiv").toggle();
        if ($("#colPensionEmployeeSearch span").hasClass("glyphicon-minus-sign")) {
            $("#colPensionEmployeeSearch").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colPensionEmployeeSearch").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });

    $("#colPensionEmployeeSearchDiv").append('<div id="searchEmployeePensionMainBody" class = "panel-body" />');
    $("#searchEmployeePensionMainBody").append('<div id="pensionEmployeePanelRow" class="row" />');
    $("#searchEmployeePensionMainBody").append('<center><span id="pensionEmployeeMessageDiv"></span></center>');
    $("#searchEmployeePensionMainBody").append('<div id="pensionEmployeeBodyDiv"/>');
    $("#pensionEmployeeBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="empCode">Employee Code </label><input type="text" class="form-control" id="empCode" placeholder="Employee Code"><span id="empCodeErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="empCodeM">Employee Code(M) </label><input type="text" class="form-control" id="empCodeM" placeholder="Employee Code (M)"><span id="empCodeMErr" class="text-danger"></span></div></div>');
    $("#pensionEmployeeBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="empName">Employee Name </label><input type="text" class="form-control" id="empName" placeholder="Employee Name"><span id="empNameErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="ddo">DDO </label><select class="form-control" id="ddoSelect"></select></div></div>');
    $("#pensionEmployeeBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="locationSelect" id="locationSelect"></select>'
            + '</div><div class="form-group col-lg-6"><label for="Department">Department </label><select class="form-control" id="departmentSelect"></select></div></div>');
    $("#pensionEmployeeBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="designationSelect" id="designationSelect"></select>'
            + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" id="natureTypeSelect"></select></div></div>');
    $("#pensionEmployeeBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="postingCity" id="postingCitySelect"></select>'
            + '</div><div class="form-group col-lg-6"><label for="employeeStatus">Employee Status </label><select class="form-control" id="employeeStatusSelect"><option value="0">----Select Employee Status----</option><option value="Retirement">Retirement</option><option value="Death">Death</option><option value="Voluntary Retirement">Voluntary Retirement</option></select></div></div>');
    $("#pensionEmployeeBodyDiv").append("<div class='form-group' id='changeButton'><center><button id='searchButton' onclick=searchPensionEmployeeS() class='btn btn-success' style='height:40px;width:80px'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetButton' onclick='resetPensionEmployee()' class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");

//    employeeList();
    searchPensionEmployee();
    viewOptionDropDownValues("hrms/salary/Department/ViewList", "", "department", "departmentSelect", "Department");
    viewDesignationListForOption("", "designationSelect", "Designation");
    fetchAllNaturesTypeForOptionv2("natureTypeSelect");
    viewCityForOption("", "postingCitySelect");
//    getAllLocationForOptions("", "locationSelect", "Location");
    getLoggedInDDOLocationInDropDown("ddoSelect", "locationSelect");
}

function resetPensionEmployee() {
    $("#empCode").val("");
    $("#empCodeM").val("");
    $("#empName").val("");
    $("#departmentSelect").val('0');
    $("#designationSelect").val('0');
    $("#natureTypeSelect").val('0');
    $("#postingCitySelect").val('0');
    $("#employeeStatusSelect").val("0");
}

//Use for searching employee on any selected Criteria by default it will search for default ddo and location 
function searchPensionEmployeeS() {

    $("#employeeListMainDivId").text("").append('<div id="searchListMainPanel" class="panel panel-blue" />');
    $("#searchListMainPanel").append('<div id="employeeListMainHeading" class="panel-heading" />');
    $("#employeeListMainHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>List of Employee Details</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colPensionEmployeeList"><span class="glyphicon glyphicon-minus-sign"></span></div>');
    $("#searchListMainPanel").append('<div id="pensionEmpCollapse" class="panel-collapse collapse in pal" />');
    $("#colPensionEmployeeList").click(function () {
        $("#pensionEmpCollapse").toggle();
        if ($("#colPensionEmployeeList span").hasClass("glyphicon-minus-sign")) {
            $("#colPensionEmployeeList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colPensionEmployeeList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#pensionEmpCollapse").append('<div id="pensionEmpListBody" class = "panel-body pan" />');
    $("#pensionEmpListBody").append('<div id="panelRow" class="row" />');
    $("#pensionEmpListBody").append('<div id="empListListErrorMsgId" />');
    $("#pensionEmpListBody").append('<div id="pensionEmpListMainBody" class="table-responsive" />');
    $("#pensionEmpListMainBody").append('<table id="pensionEmployeeTable" class="table table-bordered" />');
    $("#pensionEmployeeTable").append('<thead id="pensionEmployeeTableHeadId" />');
    $("#pensionEmployeeTable").append('<tbody id="pensionEmployeeTableBodyId" />');
    $("#pensionEmployeeTableHeadId").append('<tr id="pensionEmpListHeadId"><th>Tick Any One</th><th>Employee Name</th><th>Employee Code</th><th>Employee Code M</th><th>DDO</th><th>Location</th><th>Source</th>');
    $("#pensionEmpListMainBody").append('<center><button id="selectPensionEmp" onclick="populateEmployeeData()" class="btn btn-success" style="height:40px;width:80px">Submit</button><center>');
    var employeeCode = $("#empCode").val();
    var employeeCodeM = $("#empCodeM").val();
    var employeeName = $("#empName").val();
    var ddo = getUserSessionElement(seDDOId);
    var location = getUserSessionElement(seLocationId);
    var department = $("#departmentSelect").val();
    var designation = $("#designationSelect").val();
    var natureType = $("#natureTypeSelect").val();
    var postingCity = $("#postingCitySelect").val();
    var employeeStatus = $("#employeeStatusSelect").val();
    var ddoName = getUserSessionElement(seDDOName);
    var locationName = getUserSessionElement(seLocationName);
    var employeeJson = {
        employeeCode: employeeCode,
        employeeCodeM: employeeCodeM,
        employeeName: employeeName,
        ddo: ddo,
        location: location,
        department: department,
        designation: designation,
        natureType: natureType,
        postingCity: postingCity,
        EmployeeLeftReason: employeeStatus
    }

    $.get(server_base_url + "/pension/PensionEmployee/Search", {
        employJson: JSON.stringify(employeeJson),
    }).done(function (data) {
        if (data == fail) {
            displayErrorMessages("pensionEmployeeMessageDiv", failMessage + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displayErrorMessages("pensionEmployeeMessageDiv", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("pensionEmployeeMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            var mainData = data.result;
            console.log(data.result);
            var sno = 0;
            if (mainData.pensionEmployee != undefined) {
                for (var i = mainData.pensionEmployee.length - 1; i >= 0; i--) {
                    sno++;
                    var subData = mainData.pensionEmployee;
                    var pensionEmpData = subData[i];
                    //Pension master Data
                    $("#pensionEmployeeTableBodyId").append("<tr id='" + pensionEmpData._id.$oid + "' style='cursor:pointer;' >"
                            + "<td><input type='radio' name='pensionEmp' id='pensionEmp" + sno + "'></td>"
                            + "<td style='cursor:pointer;'>" + pensionEmpData.employeeName + "<input type='hidden' value='" + encodeURI(JSON.stringify(pensionEmpData)) + "'></td>"
                            + "<td style='cursor:pointer;'>" + pensionEmpData.employeeCode + "</td>"
                            + "<td style='cursor:pointer;'>" + pensionEmpData.employeeCodeM + "</td>"
                            + "<td style='cursor:pointer;'>" + ddoName + "</td>"
                            + "<td style='cursor:pointer;'>" + locationName + "</td>"
                            + "<td style='cursor:pointer;'><strong>Pension Master</strong></td>");
                }
            }
            if (mainData.employee != undefined) {
                for (var i = mainData.employee.length - 1; i >= 0; i--) {
                    sno++;
                    var subData = mainData.employee;
                    var EmpData = subData[i];
//                Employee Master Data
                    $("#pensionEmployeeTableBodyId").append("<tr id='" + EmpData._id.$oid + "' style='cursor:pointer;' >"
                            + "<td><input type='radio' name='pensionEmp' id='pensionEmp" + sno + "'></td>"
                            + "<td style='cursor:pointer;'>" + EmpData.employeeName + "<input type='hidden' value='" + encodeURI(JSON.stringify(EmpData)) + "'></td>"
                            + "<td style='cursor:pointer;'>" + EmpData.employeeCode + "</td>"
                            + "<td style='cursor:pointer;'>" + EmpData.employeeCodeM + "</td>"
                            + "<td style='cursor:pointer;'>" + ddoName + "</td>"
                            + "<td style='cursor:pointer;'>" + locationName + "</td>"
                            + "<td style='cursor:pointer;'><strong>Employee Master</strong></td>");
                }
            }
        } else {
            displaySmallErrorMessagesInRed("pensionEmployeeMessageDiv", " NO DATA FOUND" + "");
        }
    });
}

function populateEmployeeData() {
    $("#penEmpFormCollapse").attr("style", "display:block");
    var ddoId = getUserSessionElement(seDDOId);
    var locationId = getUserSessionElement(seLocationId);
    $('#pensionEmployeeTable tbody tr input[type="radio"][name="pensionEmp"]:checked').each(function (i) {
        var row = $(this).closest('tr');
        var empJson = JSON.parse(decodeURI(row.find('td:eq(1) input').val()));
        if (empJson.employeeCode !== "" && (empJson.employeeCode !== null && empJson.employeeCode !== undefined)) {
            $("#employeeCode").text("").val("").val(empJson.employeeCode).attr("disabled", true);
        }

        if (empJson.employeeCodeM !== "" && (empJson.employeeCodeM !== null && empJson.employeeCodeM !== undefined)) {
            $("#manualCode").text("").val("").val(empJson.employeeCodeM).attr("disabled", true);
        }

        if (empJson.employeeName !== "" && (empJson.employeeName !== null && empJson.employeeName !== undefined)) {
            $("#employeeName").text("").val("").val(empJson.employeeName).attr("disabled", true);
        }

        if (empJson.fatherName !== "" && (empJson.fatherName !== null && empJson.fatherName !== undefined)) {
            $("#fatherName").text("").val("").val(empJson.fatherName).attr("disabled", true);
        }

        if (ddoId !== "" && (ddoId !== null && ddoId !== undefined)) {
            $("#ddo").val(ddoId).attr("disabled", true).attr("disabled", true);
        }

        if (locationId !== "" && (locationId !== null && locationId !== undefined)) {
            $("#location").val(locationId).attr("disabled", true).attr("disabled", true);
        }

        if (empJson.department !== "" && (empJson.department !== null && empJson.department !== undefined)) {
            $("#department").val(empJson.department).attr("disabled", true);
        }

        if (empJson.designation !== "" && (empJson.designation !== null && empJson.designation !== undefined)) {
            $("#designation").val(empJson.designation).attr("disabled", true);
        }

        if (empJson.religion !== "" && (empJson.religion !== null && empJson.religion !== undefined)) {
            $("#religion").val(empJson.religion).attr("disabled", true);
        }

        if (empJson.category !== "" && (empJson.category !== null && empJson.category !== undefined)) {
            $("#category").val(empJson.category).attr("disabled", true);
        }

        if (empJson.category !== "" && (empJson.category !== null && empJson.category !== undefined)) {
            $("#category").val(empJson.category).attr("disabled", true);
        }

        if (empJson.association !== "" && (empJson.association !== null && empJson.association !== undefined)) {
            $("#association").val(empJson.association);
        }

        if (empJson.acnumber !== "" && (empJson.acnumber !== null && empJson.acnumber !== undefined)) {
            $("#accNum").val(empJson.acnumber).attr("disabled", true);
        }

        if (empJson.dateOfAppointment !== "" && (empJson.dateOfAppointment !== null && empJson.dateOfAppointment !== undefined)) {
            $("#appointmentDate").val(empJson.dateOfAppointment).attr("disabled", true);
        }
        if (empJson.dob !== "" && (empJson.dob !== null && empJson.dob !== undefined)) {
            $("#dob").val(empJson.dob).attr("disabled", true);
        }
        if (empJson.dateOfRetirementInMillisecond !== "" && (empJson.dateOfRetirementInMillisecond !== null && empJson.dateOfRetirementInMillisecond !== undefined)) {
            var retirementDate = convertMillisecondsToDateFormat(empJson.dateOfRetirementInMillisecond);
            $("#retirementDate").val(retirementDate).attr("disabled", true);
        }

        if (empJson.grade !== "" && (empJson.grade !== null && empJson.grade !== undefined)) {
            $("#grade").val(empJson.grade);
        }
        if (empJson.gradePay !== "" && (empJson.gradePay !== null && empJson.gradePay !== undefined)) {
            $("#gradePay").val(empJson.gradePay);
        }


        var gender = empJson.gender;
        if (gender == "Male") {
            $("#male").attr('checked', true);
            $("#female").prop('disabled', true);
        } else {
            $("#female").attr('checked', true);
            $("#male").prop('disabled', true);
        }

    });

}

function searchPensionEmployee() {

    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Pension Employee Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colPensionEmpForm'><span class='glyphicon glyphicon-minus-sign'></span></div>");
    $("#FirstPanel").append("<div id='penEmpFormCollapse' class='panel-collapse collapse in pal' />");
    $("#colPensionEmpForm").click(function () {
        $("#penEmpFormCollapse").toggle();
        if ($("#colPensionEmpForm span").hasClass("glyphicon-minus-sign")) {
            $("#colPensionEmpForm").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colPensionEmpForm").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#penEmpFormCollapse").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<div id='pregsuccessBefore'  ></div>");
    $("#panelRow").append("<div id='pensionEmployeeMessageDiv'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "required", "employeeCode", "Enter Employee Code", "onkeyup='getEmpPensionEmployeeByEmployeeCode()'"));
    //$("#Row1Col1").append("<span class='input-group-btn'><button class='btn btn-info btn-flat' style='align-top:4px' onclick='getEmpPensionEmployeeByEmployeeCode()' type='button'>Search</button></span>");
    $("#Row1Col2").append(getLabel("Pension Type", "required") + "" + getDropDown("pensionType"));
    getAllPensionTypes();
    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel("Pension Classification", "") + "" + getDropDown("pensionClassification"));
    $("#Row2Col2").append(getLabel_InputWithSpan("Manual Code", "", "manualCode", "Enter Employee Manual Code", ""));
    getAllPensionClassification();
    getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append('<label class="control-label">Pay Mode<span class=""></label>');
    $("#Row3Col1").append('<div class=""></div>');
    $("#Row3Col1").append('<div id="DAFieldDiv" class="">Bank<input type="radio" name="payMode" id="bank" value="bank" style="margin-left:20px;margin-right:20px;">Cheque<input type="radio" name="payMode" id="cheque" value="cheque" style="margin-left:20px;margin-right:20px">Draft<input type="radio" name="payMode" id="draft" value="draft" style="margin-left:20px;"></div>');
    $("#Row3Col2").append(getLabel_InputWithSpan("Employee Name", "required", "employeeName", "Enter Employee Name", ""));
    getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col1").append(getLabel("Bank Name", "") + "" + getDropDown("bankName"));
    $("#Row4Col2").append(getLabel_InputWithSpan("Father Name", "", "fatherName", "Enter Father Name", ""));
    getAllPensionBank();
    getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
    $("#Row5Col1").append(getLabel_InputWithSpan("Account Number", "required", "accNum", "Enter Account Number", "onkeypress='return validateNumber(event)' maxlength=18"));
    $("#Row5Col2").append(getLabel_InputWithSpan("Mother Name", "required", "motherName", "Enter Mother Name", "onkeypress='return validatealphanumeric(event)' onclick='return validatealphanumeric(event)'"));
    //  $("#motherName").attr("onchange","validateName(motherName, motherNameErr)");

    getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
    $("#Row6Col1").append(getLabel_InputWithSpan("Date Of Birth", "required", "dob", "Date of Birth", "onkeypress='return false'"));
    $("#Row6Col2").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
    getAllDDO();
    $("#dob").datepicker({
        maxDate: 0,
        format: "dd/mm/yyyy",
        autoclose: true,
    });
    getTwoColumnInRow("FieldGroup", "Row7", "Row7Col1", "Row7Col2");
    $("#Row7Col1").append(getLabel_InputWithSpan("Appointment Date", "required", "appointmentDate", "Appointment Date", "onkeypress='return false'"));
    $("#Row7Col2").append(getLabel("Location", "") + "" + getDropDown("location"));
    $("#appointmentDate").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        maxDate: "0"
    });
    getAllLocation();
    getTwoColumnInRow("FieldGroup", "Row8", "Row8Col1", "Row8Col2");
    $("#Row8Col1").append(getLabel_InputWithSpan("Retirement Date", "required", "retirementDate", "Retirement Date", "onkeypress='return false'"));
    $("#Row8Col2").append(getLabel("Department", "required") + "" + getDropDown("department"));
    $("#retirementDate").datepicker();
    getRetirementDate();
    getAllDepartment();
    getTwoColumnInRow("FieldGroup", "Row9", "Row9Col1", "Row9Col2");
    $("#Row9Col1").append(getLabel_InputWithSpan("Pension Start Date", "required", "pensionStartDate", "Pension Start Date", "onkeypress='return false'"));
    $("#Row9Col2").append(getLabel("Designation", "required") + "" + getDropDown("designation"));
    $("#pensionStartDate").datepicker({
    });
    $("#incrementDate").attr("onchange", "validateDates('pensionStartDate', 'incrementDate', 'Increment Date should be greater than Pension start date')");
    getAllDesignation();
    getTwoColumnInRow("FieldGroup", "Row10", "Row10Col1", "Row10Col2");
    $("#Row10Col1").append(getLabel_InputWithSpan("Commuted Matured Date", "", "commutedMaturedDate", "Commuted Matured  Date", "onkeypress='return false'"));
    //$("#Row10Col2").append(getLabel("Grade", "required") + "" + getDropDown("grade"));
    $("#commutedMaturedDate").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    });
    getAllGrade();
    getTwoColumnInRow("FieldGroup", "Row11", "Row11Col1", "Row11Col2");
    $("#Row11Col1").append(getLabel_InputWithSpan("Increment Date", "", "incrementDate", "Increment Date", "onkeypress='return false'"));
    $("#Row11Col2").append(getLabel_InputWithSpan("Height", "", "height", "Enter Height", "onkeypress='return numericVal(event)''"));
    $("#incrementDate").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    });
    getTwoColumnInRow("FieldGroup", "Row12", "Row12Col1", "Row12Col2");
    $("#Row12Col1").append(getLabel("Employee Status", "required") + "" + getDropDown("employeeStatus"));
    $("#employeeStatus").attr("onchange", "validateEmployeeStatus()");
    $("#Row12Col2").append('<label class="control-label">Gender<span class="require">*</span></label>');
    $("#Row12Col2").append('<div class=""></div>');
    $("#Row12Col2").append('<div id="genderDiv" class="">Male<input type="radio" name="gender" id="male" value="male" style="margin-left:20px;margin-right:20px;">Female<input type="radio" name="gender" id="female" value="female" style="margin-left:20px;"></div>');
    getAllEmployeeStatus("", "employeeStatus");
    getTwoColumnInRow("FieldGroup", "Row13", "Row13Col1", "Row13Col2");
    $("#Row13Col1").append(getLabel_InputWithSpan("Death Date", "required", "deathDate", "Death Date", "onkeypress='return false'"));
    $("#Row13Col2").append(getLabel("Religion", "required") + "" + getDropDown("religion"));
    $("#deathDate").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        maxDate: "0"
    });
    getAllReligion();
    getTwoColumnInRow("FieldGroup", "Row14", "Row14Col1", "Row14Col2");
    $("#Row14Col1").append(getLabel_InputWithSpan("Age On Next Birthday", "required", "ageOnNextBirtthday", "Enter age on next birthday", "onkeypress='return numericVal(event)'"));
    $("#Row14Col2").append(getLabel("Category", "required") + "" + getDropDown("category"));
    getAllCastCategory();
    getTwoColumnInRow("FieldGroup", "Row15", "Row15Col1", "Row15Col2");
    $("#Row15Col1").append(getLabel("Association", "required") + "" + getDropDown("association"));
    $("#Row15Col2").append('<label class="control-label">Corresponding Address</label>');
    $("#Row15Col2").append('<textarea id="corrsAddress" type="text" placeholder="Corresponding Address" class="form-control"/>');
    getAllAssociation();
    getTwoColumnInRow("FieldGroup", "Row16", "Row16Col1", "Row16Col2");
    $("#Row16Col1").append('<label class="control-label">Permanent Address</label>');
    $("#Row16Col1").append('<textarea id="permanentAddress" type="text" placeholder="Permanent Address" class="form-control"/>');
    $("#Row16Col2").append(getLabel_InputWithSpan("Contact No[C]", "", "contactNumberC", "Contact Number", "onkeypress='return numericVal(event)'  maxlength='10'"));
    getTwoColumnInRow("FieldGroup", "Row17", "Row17Col1", "Row17Col2");
    $("#Row17Col1").append(getLabel_InputWithSpan("Contact No[P]", "", "contactNumberP", "Contact Number", "onkeypress='return numericVal(event)'  maxlength='10'"));
    $("#Row17Col2").append(getLabel_InputWithSpan("Date", "", "date", "Date", "onkeypress='return false'"));
    $("#date").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    });
    getTwoColumnInRow("FieldGroup", "Row18", "Row18Col1", "Row18Col2");
    $("#Row18Col1").append(getLabel_InputWithSpan("Pension Order No.", "", "pensionOrderNumber", "Pension Order Number", "onkeypress='return numericVal(event)'"));
    $("#Row18Col2").append(getLabel("Pension Left Status", "required") + "" + getDropDown("pensionLeftStatus"));
    getAllPensionLeftStatus("", "pensionLeftStatus");
    getTwoColumnInRow("FieldGroup", "Row19", "Row19Col1", "Row19Col2");
    $("#Row19Col1").append(getLabel_InputWithSpan("Left Date", "", "leftDate", "Left Date", "onkeypress='return false'"));
    $("#Row19Col2").append('<label class="control-label">Identification  Mark</label>');
    $("#Row19Col2").append('<textarea id="indentationMark" type="text" placeholder="Identification  mark" class="form-control"/>');
    $("#leftDate").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        maxDate: new Date()
    });
    getTwoColumnInRow("FieldGroup", "Row20", "Row20Col1", "Row20Col2");
    $("#Row20Col1").append('<label class="control-label">Remarks</label>');
    $("#Row20Col1").append('<textarea id="pensionRemarks" type="text" placeholder="Remarks" class="form-control"/>');
    $("#Row20Col2").append("<label class='control-label'>Stop Pension</label>");
    $("#Row20Col2").append('<div class="bankname"></div>');
    $("#Row20Col2").append("<input type='checkbox' id='stopPension' name='stopPension' value='YES' > ");
    $("#tableHeader").append("<div id='pensionDeatailsRow' class='row' />");
    getTwoColumnInRow("FieldGroup", "Row21", "Row21Col1", "Row21Col2");
    //$("#Row21Col1").append(getLabel_InputWithSpan("Grade", "required", "grade", "", "onkeypress='return numericVal(event)''"));

    $("#Row21Col2").append(getLabel_InputWithSpan("Grade Pay", "required", "gradePay", "", "onkeypress='return numericVal(event)''"));
    $('#gradePay').attr('readonly', 'true');
    $("#Row21Col1").append(getLabel("Grade", "required") + "" + getDropDown("grade"));
    viewOption("hrms/salary/Grade/ViewList", "", "gradeName", "grade", "Grade");
    $("#grade").attr("disabled", true);
//    $("#Row21Col2").append(getLabel("Grade Pay", "required") + "" + getDropDown("gradePay"));
//    viewOption("hrms/salary/Grade/ViewList", "", "gradePay", "gradePay", "Grade Pay");

    getTwoColumnInRow("FieldGroup", "Row22", "Row22Col1", "Row22Col2");
    $("#Row22Col1").append(getLabel("Corresponding Pay Scale", "required") + "" + getDropDown("payBand"));
    getCorrespondingPayScale("", "payBand", "Corresponding Pay Scale")
    $("#Row22Col2").append(getLabel("Formula", "required") + "" + getDropDown("formula"));
    getFormula("", "formula", "formula");
    $("#formula").attr("onchange", "validatePensionFormula()");
    getTwoColumnInRow("FieldGroup", "Row23", "Row23Col1", "");
    $("#Row23Col1").append("<div  class='col-xs-12' id='buttoncalEmuRow'  /><center><button type='button'  id='calPenbutton' value='calPenbutton' class='btn btn-success'  onclick='calculatePension()'>Calculate Pension</button></div>");
    //$("#Row22Col2").append("<div  class='col-xs-12' id='buttoncalPenRow'  /><button type='button'  id='calPenbutton' value='calPenbutton' class='btn btn-success'  onclick='calculatePension()'>Calculate Pension</button></div>");

    getTwoColumnInRow("FieldGroup", "Row24", "Row24Col1", "Row24Col2");
    $("#Row24Col1").append(getLabel_InputWithSpan("Pension", "", "pension", "", "onkeypress='return numericVal(event)''"));
    $('#pension').attr('readonly', 'true');
    $("#Row24Col2").append(getLabel_InputWithSpan("Family Pension", "", "familyPension", "", "onkeypress='return numericVal(event)''"));
    $('#familyPension').attr('readonly', 'true');
    // $("#mainTabMenu").append("<div id='pensionDetailsListPanel' class='panel panel-blue' />");
    $("#pensionDetailsListPanel").append("<div id='pensionDetailsListPanelHeading' class='panel-heading' />");
    $("#pensionDetailsListPanelHeading").append("<h4 id='pensionDetailsfirstHeader1' class='panel-title' />");
    // $("#pensionDetailsfirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>Pension Details</center>");
    $("#pensionDetailsListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='pensionDetailsPanellistpanelMainBody' class = 'panel-body' />");
    $("#pensionDetailsPanellistpanelMainBody").append("<div class='col-lg-4'></div><div id='pensionDetails1listMessageDiv' class='col-lg-4' ><div class='col-lg-4'></div></div>");
    $("#pensionDetailsPanellistpanelMainBody").append("<div id='pensionDetailslistpanelRow' class='row' />");
    $("#pensionDetailslistpanelRow").append("<div id='pensionDetailsLeftstatuslistpanelRow' class='table-responsive' />");
    viewPensionDetailsForm("pensionDetailsLeftstatuslistpanelRow");
    $("#mainTabMenu").append("<div id='pensionNomineeListPanel' class='panel panel-blue' />");
    $("#pensionNomineeListPanel").append("<div id='pensionNomineeListPanelHeading' class='panel-heading' />");
    $("#pensionNomineeListPanelHeading").append("<h4 id='pensionNomineefirstHeader1' class='panel-title' />");
    $("#pensionNomineefirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>Pension Nominee Details</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='pensionNomineeDetails'><span class='glyphicon glyphicon-minus-sign'></span></div>");
    $("#pensionNomineeListPanel").append("<div id='pensionNomineeCollapse' class='panel-collapse collapse in' />");
    $("#pensionNomineeDetails").click(function () {
        $("#pensionNomineeCollapse").toggle();
        if ($("#pensionNomineeDetails span").hasClass("glyphicon-minus-sign")) {
            $("#pensionNomineeDetails").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#pensionNomineeDetails").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#pensionNomineeCollapse").append("<div id='pensionNomineePanellistpanelMainBody' class = 'panel-body' />");
    $("#pensionNomineePanellistpanelMainBody").append("<div class='col-lg-4'></div><div id='pensionNominee1listMessageDiv' class='col-lg-4' ><div class='col-lg-4'></div></div>");
    $("#pensionNomineePanellistpanelMainBody").append("<div id='pensionNomineelistpanelRow' class='row' />");
    $("#pensionNomineelistpanelRow").append("<div id='pensionNomineeLeftstatuslistpanelRow' class='table-responsive' />");
    viewPensionNominee("pensionNomineeLeftstatuslistpanelRow");
    $("#mainTabMenu").append("<div id='pensionMainNomineeMainRowPanel' class='row' />");


    $("#pensionMainNomineeMainRowPanel").append("<div id='pensionHeadsubNomineeListPanel' class='col-lg-12' />");
    $("#pensionHeadsubNomineeListPanel").append("<div id='pensionnomListPanel' class='panel panel-blue' />");
    $("#pensionnomListPanel").append("<div id='pensionnomListPanelHeading' class='panel-heading' />");
    $("#pensionnomListPanelHeading").append("<h4 id='pensionnomfirstHeader1' class='panel-title' />");
    $("#pensionnomfirstHeader1").append("<div class='panel-title' a data-toggle='collapse' class='panel_font' style='font-weight:bold;font-size:15px;'  data-parent='#accordion2' ><center>List of Pension Nominee</center><div class='pull-right' style='position: relative; bottom: 15px; cursor:pointer;' id='listOfNomineeDetails'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#pensionnomListPanel").append("<div id='listOfNomineeCollapse' class='panel-collapse collapse in' />");
    $("#listOfNomineeDetails").click(function () {
        $("#listOfNomineeCollapse").toggle();
        if ($("#listOfNomineeDetails span").hasClass("glyphicon-minus-sign")) {
            $("#listOfNomineeDetails").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#listOfNomineeDetails").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#listOfNomineeCollapse").append("<div id='pensionnomPanellistpanelMainBody' class = 'panel-body' />");
    $("#pensionnomPanellistpanelMainBody").append("<div id='pensionDetails1listMessageDiv'  ></div>");
    $("#pensionnomPanellistpanelMainBody").append("<div id='pensionnomlistpanelRow' class='row' />");
    $("#pensionnomlistpanelRow").append("<div id='pensionDetailsnomLeftstatuslistpanelRow' class='table-responsive' />");
    $("#pensionDetailsnomLeftstatuslistpanelRow").append("<div class='tab-pane' id='nomineeDatatablemainDiv'/>");
    $("#nomineeDatatablemainDiv").append("<div class='table-responsive' id='viewNomineeDataTableDiv' />");
    $("#viewNomineeDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='pensiondisplayNomineeTable' />");
    $("#pensiondisplayNomineeTable").append("<thead class=''><tr>"
            + "<th   class='hidden-xs hidden-sm hidden-md hidden-lg'><i class='glyphicon'></i>S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Member Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Date Of Birth</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa'></i> Delete</th>"

            + "</tr></thead>");

    $("#pensiondisplayNomineeTable").append("<tbody id='displayNomineeTableBody' class='table-striped table-bordered' />");

    $("#mainTabMenu").append("<div id='panelRow38' class='row' />");
    $("#panelRow38").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='pensionEmployeeSave' value='Save' class='btn btn-success bn'  onclick='validatePensionEmployee()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='pensionEmployeeReset' onclick='resetPensionEmployee()' class='btn btn-warning bn' name='reset' value='reset'>Reset</button></center></div>");
    $("#mainTabMenu").append("<div id='pensionEmployeeListPanel' class='panel panel-blue' />");
    $("#pensionEmployeeListPanel").append("<div id='pensionEmployeeListPanelHeading' class='panel-heading' />");
    $("#pensionEmployeeListPanelHeading").append("<h4 id='pensionEmployeefirstHeader1' class='panel-title' />");
    $("#pensionEmployeefirstHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List Of Pension Employee</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='pensionEmpList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");

    //$("#pensionEmployeefirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List Of Pension Employee</center><div class='pull-right' style='position: relative; bottom: 15px; cursor:pointer;' id='pensionEmpList'><span class='glyphicon glyphicon-minus-sign'></span></div>");
    $("#pensionEmployeeListPanel").append("<div id='pensionEmpListCollapse' class='panel-collapse collapse in' />");
    $("#pensionEmpList").click(function () {
        $("#pensionEmpListCollapse").toggle();
        if ($("#pensionEmpList span").hasClass("glyphicon-minus-sign")) {
            $("#pensionEmpList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#pensionEmpList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#pensionEmpListCollapse").append("<div id='pensionEmployeePanellistpanelMainBody' class = 'panel-body' />");
    $("#pensionEmployeePanellistpanelMainBody").append("<div id='pensionEmployeelistMessageDiv'  ></div>");
    $("#pensionEmployeePanellistpanelMainBody").append("<div id='pensionEmployeelistpanelRow' class='row' />");
    $("#pensionEmployeelistpanelRow").append("<div id='pensionEmployeeLeftstatuslistpanelRow' class='table-responsive' />");
    viewPensionEmployee("pensionEmployeeLeftstatuslistpanelRow");
    // $("#colPensionEmpForm").click();
    // $("#pensionNomineeDetails").click();
    // $("#listOfNomineeDetails").click();
    // $("#pensionEmpList").click();
}

function getRetirementDate() {
    var designation = $("#designation").val();
    var dateOfBirth = $("#dob").val();
    $.post(server_base_url + "/pension/master/PensionEmployee/RetirementDate", {
        designation: designation,
        dateOfBirth: dateOfBirth
    }).done(function (pdata) {
        $("#manualCode").val(pdata[0].employeeCodeM);
    });
}


function getEmpPensionEmployeeByEmployeeCode() {
    var empcode = $("#employeeCode").val();
    $.post(server_base_url + "/pension/master/FetchPensionEmployeeBYEmployeeCode", {
        employeeCode: empcode
    }).done(function (pdata) {

        $("#manualCode").val(pdata[0].employeeCodeM);
        $("#employeeName").val(pdata[0].employeeName);
        $("#designation").val(pdata[0].designation);
        $("#bankName").val(pdata[0].bank);
        $("#fatherName").val(pdata[0].fatherName);
        $("#accNumber").val(pdata[0].acnumber);
        $("#dob").val(pdata[0].dob);
        $("#ddo").val(pdata[0].ddo);
        $("#appointmentDate").val(pdata[0].dateOfAppointment);
        $("#department").val(pdata[0].department);
        $("#grade").val(pdata[0].grade);
        $("#religion").val(pdata[0].religion);
        $("#ddo option:contains(" + pdata[0].ddo + ")").attr('selected', 'selected');
        $("#designation option:contains(" + pdata[0].designation + ")").attr('selected', 'selected');
        $("#department option:contains(" + pdata[0].department + ")").attr('selected', 'selected');
        $("#bankName option:contains(" + pdata[0].bank + ")").attr('selected', 'selected');
    });
}





function viewPensionEmployee(divId) {


    $("#pensionEmployeeLeftstatuslistpanelRow").append("<table id='pensionEmployeeListTable' class='table table-bordered'></table>");
    $("#pensionEmployeeListTable").append("<thead class=''><tr>"

            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Employee Code</th>"
            + "<th class='table_col_width'><i class='fa'></i>Employee Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Designation</th>"
            + "<th class='table_col_width'><i class='fa'></i>Department</th>"
            + "<th class='table_col_width'><i class='fa'></i>Pension Type</th>"
            + "<th class='table_col_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_col_width'><i class='fa'></i> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "/pension/master/PensionEmploy/ViewList", {
    }).done(function (pdata) {


        if (pdata == fail) {

            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (pdata == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            if (pdata != null) {
                if (pdata.length > 0) {

                    var sno = 0;
                    $("#pensionEmployeeListTable").append("<tbody id='pensionEmployeeListTableBody' class='table-striped table-bordered' />");
                    for (var i = pdata.length - 1; i >= 0; i--) {
                        sno++;
                        var assjson = {
                            aid: pdata[i]._id.$oid,
                            employeecode: pdata[i].employeecode,
                            pensionType: pdata[i].pensionType,
                            pensionClassification: pdata[i].pensionClassification,
                            manualCode: pdata[i].manualCode,
                            payMode: pdata[i].payMode,
                            employeeName: pdata[i].employeeName,
                            bank: pdata[i].bank,
                            fatherName: pdata[i].fatherName,
                            motherName: pdata[i].motherName,
                            accountNumber: pdata[i].accountNumber,
                            dateofBirth: pdata[i].dateofBirth,
                            DDO: pdata[i].DDO,
                            appointmentDate: pdata[i].appointmentDate,
                            location: pdata[i].location,
                            retDate: pdata[i].retDate,
                            department: pdata[i].department,
                            pensionStartDate: pdata[i].pensionStartDate,
                            designation: pdata[i].designation,
                            gender: pdata[i].gender,
                            comMatDate: pdata[i].comMatDate,
                            incDate: pdata[i].incDate,
                            height: pdata[i].height,
                            empStatus: pdata[i].empStatus,
                            deathDate: pdata[i].deathDate,
                            religion: pdata[i].religion,
                            ageOnNextDob: pdata[i].ageOnNextDob,
                            casteCategory: pdata[i].casteCategory,
                            association: pdata[i].association,
                            corrAddress: pdata[i].corrAddress,
                            permanentAddress: pdata[i].permanentAddress,
                            contactNOC: pdata[i].contactNOC,
                            contactNOP: pdata[i].contactNOP,
                            date: pdata[i].date,
                            pensionOrderNum: pdata[i].pensionOrderNum,
                            pensionLeftStatus: pdata[i].pensionLeftStatus,
                            leftDate: pdata[i].leftDate,
                            indentationMark: pdata[i].indentationMark,
                            remarks: pdata[i].remarks,
                            stopPension: pdata[i].stopPension,
                            grade: pdata[i].grade,
                            gradePay: pdata[i].gradePay,
                            pension: pdata[i].pension,
                            familyPension: pdata[i].familyPension,
                            correspondingPayScale: pdata[i].correspondingPayScale,
                            formula: pdata[i].formula,
                            pensionEmployeenomineeList: pdata[i].pensionEmployeenomineeList
                        };
                        assjson = JSON.stringify(assjson);
                        $("#pensionEmployeeListTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td >" + pdata[i].employeecode + "</td>"
                                + "<td >" + pdata[i].employeeName + "</td>"
                                + "<td >" + pdata[i].designation + "</td>"
                                + "<td >" + pdata[i].department + "</td>"
                                + "<td >" + pdata[i].pensionType + "</td>"
                                + "<td> <a href='javascript:void(0);' onclick=updatePensionEmployee('" + encodeURI(assjson) + "') class='anchor_edit'><i class='fa fa-edit'></i>  Edit</a></td>"
                                + "<td> <a href='javascript:void(0);' onclick=deletePopUp('deletePensionEmployeeData',displayPensionEmployeeDetails('dashboardBodyMainDiv'),'" + pdata[i]._id.$oid + "')  class='anchor_delete'><i class='fa fa-trash-o'></i>  Delete</a></td></tr>");
                    }
                    $("#pensionEmployeeListTable").DataTable({
                        paging: true
                    });
                }
            }

        }
    });
}

function updatePensionEmployee(obj) {

    $("#pregsuccessBefore").text("");


    obj = decodeURI(obj);
    obj = JSON.parse(obj);

    var gender = obj.gender;

    if (obj.empStatus === "Alive") {

        $("#deathDate").attr("disabled", true);

        $("#ageOnNextBirtthday").attr("disabled", false);

    } else if (obj.empStatus == "Dead") {
        $("#ageOnNextBirtthday").attr("disabled", true);
        $("#deathDate").attr("disabled", false);
    }




    if (obj.stopPension == "YES") {
        $("#stopPension").prop("checked", true);

    }
//height

    $("#manualCode").val(obj.manualCode);
    $("#height").val(obj.height);
    $("#indentationMark").val(obj.indentationMark);

    $("#pensionRemarks").val(obj.remarks);
    $("#retirementDate").val(obj.retDate);

    if (gender == "Male") {
        $("#male").attr('checked', true);
        $("#female").prop('disabled', true);
    } else {
        $("#female").attr('checked', true);
        $("#male").prop('disabled', true);
    }
    if ($('#bank').is(':checked')) {
        payMode = "bank";
    } else if ($('#cheque').is(':checked')) {
        payMode = "cheque";
    } else if ($('#draft').is(':checked')) {
        payMode = "draft";
    }

    var payMode = obj.payMode;

    if (payMode == "bank") {
        $("#bank").attr('checked', true);
    } else if (payMode == "cheque") {
        $("#cheque").attr('checked', true);
    } else if (payMode == "draft") {
        $("#draft").attr('checked', true);

    }

    $("#ddo").val(obj.DDO);
    $("#ddo option:contains(" + obj.DDO + ")").attr('selected', 'selected');

    $("#religion").val(obj.religion);
    $("#religion option:contains(" + obj.religion + ")").attr('selected', 'selected');



    getAllAssociation();
    setTimeout(function () {
        $("#association").val(obj.association);
        $("#association option:contains(" + obj.association + ")").attr('selected', 'selected');
    }, 3000);



    $("#category").val(obj.casteCategory);
    $("#category option:contains(" + obj.casteCategory + ")").attr('selected', 'selected');


    getAllLocation();
    setTimeout(function () {
        $("#location").val(obj.location);
        $("#location option:contains(" + obj.location + ")").attr('selected', 'selected');
    }, 3000);



    getAllDesignation();
    setTimeout(function () {
        $("#designation").val(obj.designation);
        $("#designation option:contains(" + obj.designation + ")").attr('selected', 'selected');
    }, 3000);


    getAllDepartment();
    setTimeout(function () {
        $("#department").val(obj.department);
        $("#department option:contains(" + obj.department + ")").attr('selected', 'selected');
    }, 3000);



    getAllGrade();
    setTimeout(function () {
        $("#grade").val(obj.grade);
        $("#grade option:contains(" + obj.grade + ")").attr('selected', 'selected');
    }, 3000);

    getFormula("", "formula", "formula");

    getAllPensionTypes();
    getAllPensionClassification();


    setTimeout(function () {
        $("#pensionClassification").val(obj.pensionClassification);
        $("#pensionClassification option:contains(" + obj.pensionClassification + ")").attr('selected', 'selected');
    }, 3000);
    getAllPensionBank();



    getAllEmployeeStatus("", "employeeStatus");

    getAllAssociation();
    getAllPensionLeftStatus("", "pensionLeftStatus");
    getCorrespondingPayScale("", "payBand", "Corresponding Pay Scale");

    $("#formula").val(obj.formula);
    $("#formula option:contains(" + obj.formula + ")").attr('selected', 'selected');

    $("#payBand").val(obj.correspondingPayScale);
    $("#payBand option:contains(" + obj.correspondingPayScale + ")").attr('selected', 'selected');
    $("#pensionType").val(obj.pensionType);
    $("#pensionType option:contains(" + obj.pensionType + ")").attr('selected', 'selected');

    $("#bankName").val(obj.bank);
    $("#bankName option:contains(" + obj.bank + ")").attr('selected', 'selected');


    $("#manualCode").val(obj.manualCode);
    $("#accNum").val(obj.accountNumber);

    $("#gradePay").val(obj.gradePay);
    //gradePay



    $("#ageOnNextBirtthday").val(obj.ageOnNextDob);
    $("#retirementDate").val(obj.retDate);
    $("#gradePay").val(obj.gradePay);
    $("#employeeCode").val(obj.employeecode);
    $("#pensionType").val(obj.pensionType);
    $("#pensionClassification").val(obj.pensionClassification);
    $("#pension").val(obj.pension);
    $("#payMode").val(obj.payMode);
    $("#employeeName").val(obj.employeeName);
    $("#bankName").val(obj.bank);
    $("#fatherName").val(obj.fatherName);
    $("#accNumber").val(obj.accountNumber);
    $("#motherName").val(obj.motherName);
    $("#dob").val(obj.dateofBirth);
    $("#appointmentDate").val(obj.appointmentDate);
    $("#location").val(obj.retDate);
    // $("#retirementDate").val(obj.PFType);
    $("#department").val(obj.department);
    $("#pensionStartDate").val(obj.pensionStartDate);
    $("#designation").val(obj.designation);
    $("#commutedMaturedDate").val(obj.comMatDate);
    $("#grade").val(obj.grade);
    $("#incrementDate").val(obj.incDate);
    $("#employeeStatus").val(obj.empStatus);
    $("#Gender").val(obj.gender);
    $("#deathDate").val(obj.deathDate);
    $("#religion").val(obj.religion);
    $("#ageOnNextBirthday").val(obj.ageOnNextDob);
    $("#category").val(obj.casteCategory);
    $("#corrsAddress").val(obj.corrAddress);
    $("#association").val(obj.association);
    $("#permanentAddress").val(obj.permanentAddress);
    $("#contactNumberC").val(obj.contactNOC);
    $("#contactNumberP").val(obj.contactNOP);
    $("#date").val(obj.date);
    $("#pensionOrderNumber").val(obj.pensionOrderNum);
    $("#pensionLeftStatus").val(obj.pensionLeftStatus);

    $("#leftDate").val(obj.leftDate);
    $("#stopPension").val(obj.stopPension);
    $("#qualifyingService").val(obj.qualifyingServiceYear);
    $("#lastDrawnPayWithDA").val(obj.lastDrawnPayWithDA);
    $("#qualifyingServiceR").val(obj.qualifyingServiceYearR);
    $("#nonqualifyingServiceR").val(obj.nonQualifyingServiceYearR);
    $("#commFactor").val(obj.commFact);
    $("#residualPension").val(obj.residualPension);
    $("#lastDrawnPayWithoutDA").val(obj.lastDrawnPayWithoutDA);
    $("#monthlyCommutedAmount").val(obj.monthlyCommutedAmount);
    $("#averageEmoluments").val(obj.AverageEmoluments);
    $("#gratuity").val(obj.gratuity);
    $("#deathGratuity").val(obj.deathGratuity);
    $("#familyPension").val(obj.familyPension);
    $("#familyPensionYear").val(obj.familyPensionYearly);
    $("#familyPensionAfterYear").val(obj.famPensionAfterYear);
    $("#commutedPercentage").val(obj.PFType);
    $("#commutedAmount").val(obj.commutedAmount);

    $("#lessAmountFromGratuity").val(obj.lessAmountFromGratuity);

    $("#others").val(obj.otherDeduction);
    $("#pensionEmployeeListTable tr").css("background-color", "white");
    $("#pensionEmployeeListTable tr" + "#" + obj.aid).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#employeeCode").prop("readonly", false);
    $("#pensionType").prop("readonly", false);
    $("#pensionClassification").prop("readonly", false);
    $("#pension").prop("readonly", false);
    $("#payMode").prop("readonly", false);
    $("#employeeName").prop("readonly", false);
    $("#bankName").prop("readonly", false);
    $("#fatherName").prop("readonly", false);
    $("#accNumber").prop("readonly", false);
    $("#motherName").prop("readonly", false);
    $("#dob").prop("readonly", false);
    $("#appointmentDate").prop("readonly", false);
    $("#location").prop("readonly", false);
    $("#retirementDate").prop("readonly", false);
    $("#department").prop("readonly", false);
    $("#pensionStartDate").prop("readonly", false);
    $("#designation").prop("readonly", false);
    $("#commutedMaturedDate").prop("readonly", false);
    $("#grade").prop("readonly", false);
    $("#incrementDate").prop("readonly", false);
    $("#height").prop("readonly", false);
    $("#employeeStatus").prop("readonly", false);
    $("#Gender").prop("readonly", false);
    $("#deathDate").prop("readonly", false);
    $("#religion").prop("readonly", false);
    $("#ageOnNextBirthday").prop("readonly", false);
    $("#category").prop("readonly", false);
    $("#corrsAddress").prop("readonly", false);
    $("#association").prop("readonly", false);
    $("#permanentAddress").prop("readonly", false);
    $("#contactNumberC").prop("readonly", false);
    $("#contactNumberP").prop("readonly", false);
    $("#date").prop("readonly", false);
    $("#pensionOrderNumber").prop("readonly", false);
    $("#pensionLeftStatus").prop("readonly", false);
    $("#indentationMark").prop("readonly", false);
    $("#leftDate").prop("readonly", false);
    $("#stopPension").prop("readonly", false);
    $("#qualifyingService").prop("readonly", false);
    $("#lastDrawnPayWithDA").prop("readonly", false);
    $("#qualifyingServiceR").prop("readonly", false);
    $("#nonqualifyingServiceR").prop("readonly", false);
    $("#commFactor").prop("readonly", false);
    $("#residualPension").prop("readonly", false);
    $("#lastDrawnPayWithoutDA").prop("readonly", false);
    $("#monthlyCommutedAmount").prop("readonly", false);
    $("#averageEmoluments").prop("readonly", false);
    $("#gratuity").prop("readonly", false);
    $("#deathGratuity").prop("readonly", false);
    $("#familyPension").prop("readonly", false);
    $("#familyPensionYear").prop("readonly", false);
    $("#familyPensionAfterYear").prop("readonly", false);
    $("#commutedPercentage").prop("readonly", false);
    $("#commutedAmount").prop("readonly", false);
    $("#pensionRemarks").prop("readonly", false);
    $("#it").prop("readonly", false);
    $("#others").prop("readonly", false);
    $("#panelRow38").text("").append("<center><button id='updateButton' onclick=updatePensionEmployeeData('" + obj.aid + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='resetPensionEmployee()'  class='btn btn-warning bn' >Back</button></center>");


    var sno = getSrNo();
    //  var snoId = sno - 1;
//    $("#pensionMainNomineeMainRowPanel").append("<div id='pensionHeadsubNomineeListPanel' class='col-lg-12' />");
//    $("#pensionHeadsubNomineeListPanel").append("<div id='pensionnomListPanel' class='panel panel-blue' />");
//    $("#pensionnomListPanel").append("<div id='pensionnomListPanelHeading' class='panel-heading' />");
//    $("#pensionnomListPanelHeading").append("<h4 id='pensionnomfirstHeader1' class='panel-title' />");
//    $("#pensionnomfirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Pension Nominee</center><div class='pull-right' style='position: relative; bottom: 15px; cursor:pointer;' id='listOfNomineeDetails'><span class='glyphicon glyphicon - minus - sign'></span></div>");
//    $("#pensionnomListPanel").append("<div id='listOfNomineeCollapse' class='panel-collapse collapse in' />");
//    $("#listOfNomineeDetails").click(function () {
//        $("#listOfNomineeCollapse").toggle();
//        if ($("#listOfNomineeDetails span").hasClass("glyphicon-minus-sign")) {
//            $("#listOfNomineeDetails").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
//        } else {
//            $("#listOfNomineeDetails").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
//        }
//    });
//    $("#listOfNomineeCollapse").append("<div id='pensionnomPanellistpanelMainBody' class = 'panel-body' />");
//    $("#pensionnomPanellistpanelMainBody").append("<div id='pensionDetails1listMessageDiv'  ></div>");
//    $("#pensionnomPanellistpanelMainBody").append("<div id='pensionnomlistpanelRow' class='row' />");
//    $("#pensionnomlistpanelRow").append("<div id='pensionDetailsnomLeftstatuslistpanelRow' class='table-responsive' />");
//    $("#pensionDetailsnomLeftstatuslistpanelRow").append("<div class='tab-pane' id='nomineeDatatablemainDiv'/>");
//    $("#nomineeDatatablemainDiv").append("<div class='table-responsive' id='viewNomineeDataTableDiv' />");
//    $("#viewNomineeDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='pensiondisplayNomineeTable' />");
//    $("#pensiondisplayNomineeTable").append("<thead class=''><tr>"
//            + "<th class='sno_width'><i class='glyphicon'></i>S.No</th>"
//            + "<th class='table_col_width'><i class='fa'></i>Member Name</th>"
//            + "<th class='table_col_width'><i class='fa'></i>Date Of Birth</th>"
//            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
//            + "<th class='table_anchor_width'><i class='fa'></i> Delete</th>"
//
//            + "</tr></thead>");
    $("#displayNomineeTableBody").text("");

    for (var i = 0; i < obj.pensionEmployeenomineeList.length; i++) {

        $("#displayNomineeTableBody").append("<tr style='cursor:pointer;' >"

                + "<td  class='hidden-xs hidden-sm hidden-md hidden-lg'>" + sno + "</td>"
                + "<td >" + obj.pensionEmployeenomineeList[i].memberName + "</td>"
                + "<td >" + obj.pensionEmployeenomineeList[i].DateOfBirth + "</td>"
                + "<td  onclick=editThisPensionNomineeRowDetais(" + sno + ")><a href='javascript:void(0);'  class='anchor_edit'><i class='fa fa-edit'></i>  Edit</a></td>"
                + "<td  onclick=deleteRow1(" + sno + ")>" + '  <a href="javascript:void(0);"  class="anchor_delete"><i class="fa fa-trash-o">  Delete</button>' + "</td>"
                + "<td  class='hidden-xs hidden-sm hidden-md hidden-lg'>" + obj.pensionEmployeenomineeList[i].nonominee + "</td>"
                + "<td class='hidden-xs hidden-sm hidden-md hidden-lg'>" + obj.pensionEmployeenomineeList[i].remarks + "</td>"
                + "<td  class='hidden-xs hidden-sm hidden-md hidden-lg'>" + obj.pensionEmployeenomineeList[i].relation + "</td></tr>");

    }

    $("#displayNomineeTable").dataTable();

}


function  getSrNo() {


    var count = 1;
    $('table#displayNomineeTableBody tbody tr').each(function () {
        count++;
    });
    return count;
}
function deleteRow1(i) {

    document.getElementById('displayNomineeTableBody').deleteRow(i - 1);
}

function updatePensionEmployeeData(id) {

    var result = 1;

    var employeeCode = $("#employeeCode").val();
    var manualCode = $("#manualCode").val();
    var pensionType = $("#pensionType").val();
    var pensionClassification = $("#pensionClassification").val();
    var pension = $("#pension").val();
    var AccountNumber = $("#accNum").val();
    var payMode;
    var ddo = $("#ddo").val();
    var employeeName = $("#employeeName").val();
    var bankName = $("#bankName").val();
    var fatherName = $("#fatherName").val();
    var accNumber = $("#accNumber").val();
    var motherName = $("#motherName").val();
    var dob = $("#dob").val();
    var appointmentDate = $("#appointmentDate").val();
    var location = $("#location").val();
    var retirementDate = $("#retirementDate").val();
    var department = $("#department").val();
    var pensionStartDate = $("#pensionStartDate").val();
    var designation = $("#designation").val();
    var commutedMaturedDate = $("#commutedMaturedDate").val();
    var grade = $("#grade").val();
    var incrementDate = $("#incrementDate").val();
    var height = $("#height").val();
    var employeeStatus = $("#employeeStatus").val();
    var Gender;
    var deathDate = $("#deathDate").val();
    var religion = $("#religion").val();
    var ageOnNextBirthday = $("#ageOnNextBirthday").val();
    var category = $("#category").val();
    var corrsAddress = $("#corrsAddress").val();
    var association = $("#association").val();
    var permanentAddress = $("#permanentAddress").val();
    var contactNumberC = $("#contactNumberC").val();
    var contactNumberP = $("#contactNumberP").val();
    var date = $("#date").val();
    var pensionOrderNumber = $("#pensionOrderNumber").val();
    var pensionLeftStatus = $("#pensionLeftStatus").val();
    var indentationMark = $("#indentationMark").val();
    var leftDate = $("#leftDate").val();
    var stopPension = $("#stopPension").val();
    var qualifyingService = $("#qualifyingService").val();
    var lastDrawnPayWithDA = $("#lastDrawnPayWithDA").val();
    var qualifyingServiceR = $("#qualifyingServiceR").val();
    var nonqualifyingServiceR = $("#nonqualifyingServiceR").val();
    var commFactor = $("#commFactor").val();
    var residualPension = $("#residualPension").val();
    var lastDrawnPayWithoutDA = $("#lastDrawnPayWithoutDA").val();
    var monthlyCommutedAmount = $("#monthlyCommutedAmount").val();
    var averageEmoluments = $("#averageEmoluments").val();
    var gratuity = $("#gratuity").val();
    var deathGratuity = $("#deathGratuity").val();
    var LessAmountFromGratuity = $("#lessAmountFromGratuity").val();
    var familyPension = $("#familyPension").val();
    var familyPensionYear = $("#familyPensionYear").val();
    var familyPensionAfterYear = $("#familyPensionAfterYear").val();
    var commutedPercentage = $("#commutedPercentage").val();
    var commutedAmount = $("#commutedAmount").val();
    var pensionRemarks = $("#pensionRemarks").val();
    var pensionType = $("#pensionType").val();
    var it = $("#it").val();
    var others = $("#others").val();
    var payBand = $("#payBand").val();
    var formula = $("#formula").val();
    var ageOnNextBirtthday = $("#ageOnNextBirtthday").val();
    //var pensionType=$("#pensionType").val();


    var stopPension;

    if ($('#stopPension').prop('checked')) {
        stopPension = "YES"
    } else
    {
        stopPension = "NO";
    }

    var gradePay = $("#gradePay").val();
    if ($('#male').is(':checked')) {
        Gender = "male";

    } else if ($('#female').is(':checked')) {
        Gender = "female";

    }
    if ($('#bank').is(':checked')) {
        payMode = "bank";

    } else if ($('#cheque').is(':checked')) {
        payMode = "cheque";

    } else if ($('#draft').is(':checked')) {
        payMode = "draft";

    }



//    if (preValidation(employeeCode) || preValidation(pensionType) || preValidation(employeeName) || preValidation(AccountNumber) || preValidation(motherName) || preValidation(ddo) || preValidation(dob) || preValidation(appointmentDate) || preValidation(retirementDate) || preValidation(designation) || preValidation(department) || preValidation(pensionStartDate) || preValidation(association) || preValidation(category) || preValidation(religion) || preValidation(pensionLeftStatus) || preValidation(grade) || preValidation(gradePay) || preValidation(payBand) || preValidation(formula)) {
//        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", MandoryFieldMsg);
//        result = 0;
//        return false;
//    }



    if (preValidation(employeeStatus)) {
        displaySmallErrorMessages("employeeStatusErr", "Please Select Employee Status");
        result = 0;
    } else if (employeeStatus !== "") {
        if (employeeStatus == "Alive") {
            if (preValidation(ageOnNextBirtthday)) {
                displaySmallErrorMessages("ageOnNextBirtthdayErr", "Please enter age on next birthday");
                result = 0;
            } else if (ageOnNextBirtthday != "") {
                if (!$("#ageOnNextBirtthday").val().match((numbervalidation()))) {
                    displaySmallErrorMessages("ageOnNextBirtthdayErr", "Only numbers are allowed");
                    result = 0;
                }
            }

        } else if (employeeStatus == "Dead") {
            if (preValidation(deathDate)) {
                displaySmallErrorMessages("deathDateErr", "Please select death date");
                result = 0;
            }

        }

    }


    if ($("#pensionStartDate").val() != "" && $("#incrementDate").val() != "") {
        var fDate = $("#pensionStartDate").datepicker("getDate");
        var t0Date = $("#retirementDate").val();
        var tDate = new Date(t0Date)

        var diff = new Date(tDate - fDate);
        var days = diff / 1000 / 60 / 60 / 24;
        if (days < 0) {
            displaySmallErrorMessages("incrementDateErr", "Pension start date should be greater than or equals to retirement date");
            result = 0;

        }
    }

    if (result !== 0) {
        var rows = [];
        $('table#pensiondisplayNomineeTable tbody tr').each(function () {
            var row = $(this).closest('tr');
            rows.push({
                memberName: $(this).find('td:eq(1)').text(),
                DateOfBirth: $(this).find('td:eq(2)').text(),
                remarks: $(this).find('td:eq(6)').text(),
                relation: $(this).find('td:eq(7)').text(),
                nonominee: $(this).find('td:eq(5)').text()

            });

        });

        var pensionEmployeeJson = {
            employeecode: employeeCode,
            pensionType: $("#pensionType").val(),
            pensionClassification: pensionClassification,
            manualCode: manualCode,
            payMode: payMode,
            employeeName: employeeName,
            bank: bankName,
            fatherName: fatherName,
            motherName: motherName,
            accountNumber: $("#accNum").val(),
            dateofBirth: dob,
            DDO: ddo,
            appointmentDate: appointmentDate,
            location: location,
            retDate: retirementDate,
            department: department,
            pensionStartDate: pensionStartDate,
            designation: designation,
            gender: Gender,
            comMatDate: commutedMaturedDate,
            incDate: incrementDate,
            height: height,
            empStatus: employeeStatus,
            deathDate: deathDate,
            religion: religion,
            ageOnNextDob: $("#ageOnNextBirtthday").val(),
            casteCategory: category,
            association: association,
            corrAddress: corrsAddress,
            permanentAddress: permanentAddress,
            contactNOC: contactNumberC,
            contactNOP: contactNumberP,
            date: date,
            pensionOrderNum: pensionOrderNumber,
            pensionLeftStatus: pensionLeftStatus,
            leftDate: leftDate,
            indentationMark: indentationMark,
            remarks: pensionRemarks,
            stopPension: stopPension,
            grade: grade,
            gradePay: gradePay,
            pension: $("#pension").val(),
            familyPension: $("#familyPension").val(),
            correspondingPayScale: payBand,
            formula: formula


        };

        pensionEmployeeJson["pensionEmployeenomineeList"] = rows;
        pensionEmployeeJson = JSON.stringify(pensionEmployeeJson);

        $.post(server_base_url + "/pension/master/PensionEmploy/Update", {
            pensionEmployeeJson: pensionEmployeeJson,
            id: id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displaySmallErrorMessagesInRed("pensionEmployeeMessageDiv", "Invalid username / password" + "<br/><br/>");
            } else if (data == unauthorized) {
                displaySmallErrorMessagesInRed("pensionEmployeeMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("pensionEmployeeMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {

                displaySuccessMessages("pensionEmployeeMessageDiv", successMessage, "");
                setTimeout(function () {
                    displayPensionEmployeeDetails("dashboardBodyMainDiv");
                }, 1000);
            }

        });
    }



























//    var result = 1;
//    var rows = [];
//    var employeeCode = $("#employeeCode").val();
//    var manualCode = $("#manualCode").val();
//    var pensionType = $("#pensionType").val();
//    var pensionClassification = $("#pensionClassification").val();
//    var pension = $("#pension").val();
//    var AccountNumber = $("#accNum").val();
//    var payMode;
//    var ddo = $("#ddo").val();
//    var employeeName = $("#employeeName").val();
//    var bankName = $("#bankName").val();
//    var fatherName = $("#fatherName").val();
//    var accNumber = $("#accNumber").val();
//    var motherName = $("#motherName").val();
//    var dob = $("#dob").val();
//    var appointmentDate = $("#appointmentDate").val();
//    var location = $("#location").val();
//    var retirementDate = $("#retirementDate").val();
//    var department = $("#department").val();
//    var pensionStartDate = $("#pensionStartDate").val();
//    var designation = $("#designation").val();
//    var commutedMaturedDate = $("#commutedMaturedDate").val();
//    var grade = $("#grade").val();
//    var incrementDate = $("#incrementDate").val();
//    var height = $("#height").val();
//    var employeeStatus = $("#employeeStatus").val();
//    var Gender;
//    var deathDate = $("#deathDate").val();
//    var religion = $("#religion").val();
//    var ageOnNextBirthday = $("#ageOnNextBirthday").val();
//    var category = $("#category").val();
//    var corrsAddress = $("#corrsAddress").val();
//    var association = $("#association").val();
//    var permanentAddress = $("#permanentAddress").val();
//    var contactNumberC = $("#contactNumberC").val();
//    var contactNumberP = $("#contactNumberP").val();
//    var date = $("#date").val();
//    var pensionOrderNumber = $("#pensionOrderNumber").val();
//    var pensionLeftStatus = $("#pensionLeftStatus").val();
//    var indentationMark = $("#indentationMark").val();
//    var leftDate = $("#leftDate").val();
//    var stopPension = $("#stopPension").val();
//    var qualifyingService = $("#qualifyingService").val();
//    var lastDrawnPayWithDA = $("#lastDrawnPayWithDA").val();
//    var qualifyingServiceR = $("#qualifyingServiceR").val();
//    var nonqualifyingServiceR = $("#nonqualifyingServiceR").val();
//    var commFactor = $("#commFactor").val();
//    var residualPension = $("#residualPension").val();
//    var lastDrawnPayWithoutDA = $("#lastDrawnPayWithoutDA").val();
//    var monthlyCommutedAmount = $("#monthlyCommutedAmount").val();
//    var averageEmoluments = $("#averageEmoluments").val();
//    var gratuity = $("#gratuity").val();
//    var deathGratuity = $("#deathGratuity").val();
//    var LessAmountFromGratuity = $("#lessAmountFromGratuity").val();
//    var familyPension = $("#familyPension").val();
//    var familyPensionYear = $("#familyPensionYear").val();
//    var familyPensionAfterYear = $("#familyPensionAfterYear").val();
//    var commutedPercentage = $("#commutedPercentage").val();
//    var commutedAmount = $("#commutedAmount").val();
//    var pensionRemarks = $("#pensionRemarks").val();
//    var it = $("#it").val();
//    var others = $("#others").val();
//    if ($('#male').is(':checked')) {
//        Gender = "male";
//    } else if ($('#female').is(':checked')) {
//        Gender = "female";
//    }
//    if ($('#bank').is(':checked')) {
//        payMode = "bank";
//    } else if ($('#cheque').is(':checked')) {
//        payMode = "cheque";
//    } else if ($('#draft').is(':checked')) {
//        payMode = "draft";
//    }
//
//
//
//
//    if (result !== 0) {
//        var pensionEmployeeJson = {
//            manualCode: manualCode,
//            pensionType: pensionType,
//            pensionClassification: pensionClassification,
//            motherName: motherName,
//            pensionStartDate: pensionStartDate,
//            comMatDate: commutedMaturedDate,
//            bank: bankName,
//            incDate: incrementDate,
//            height: height,
//            empStatus: employeeStatus,
//            deathDate: deathDate,
//            empReligion: religion,
//            ageOnNextDob: ageOnNextBirthday,
//            association: association,
//            corrAddress: corrsAddress,
//            permanentAddress: permanentAddress,
//            contactNOC: contactNumberC,
//            contactNOP: contactNumberP,
//            date: date,
//            pensionOrderNum: pensionOrderNumber,
//            pensionLeftStatus: pensionLeftStatus,
//            leftDate: leftDate,
//            idMarks: indentationMark,
//            remarksemarks: pensionRemarks,
//            stopPension: stopPension,
//            lastDrawnPayWithDA: lastDrawnPayWithDA,
//            commutedPension: commutedPercentage,
//            commutedAmount: commutedAmount,
//            lastDrawnPayWithoutDA: lastDrawnPayWithoutDA,
//            monthlyCommutedAmount: monthlyCommutedAmount,
//            commFact: commFactor,
//            residualPension: residualPension,
//            AverageEmoluments: averageEmoluments,
//            gratuity: gratuity,
//            pension: pension,
//            deathGratuity: deathGratuity,
//            familyPension: familyPension,
//            lessAmountFromGratuity: LessAmountFromGratuity,
//            famPensionAfterYear: familyPensionAfterYear,
//            it: it,
//            familyPensionYearly: familyPensionYear,
//            retDate: retirementDate,
//            otherDeduction: others,
//            qualifyingServiceYear: qualifyingService,
//            qualifyingServiceYearR: qualifyingServiceR,
//            nonQualifyingServiceYearR: nonqualifyingServiceR,
//            payMode: payMode,
//            accountNumber: accNumber,
//            gender: Gender,
//            dateofBirth: dob,
//            employeeName: employeeName,
//            fatherName: fatherName,
//            DDO: ddo,
//            department: department,
//            religion: religion,
//            location: location,
//            grade: grade
//        };
//        pensionEmployeeJson["pensionEmployeenomineeList"] = rows;
//        pensionEmployeeJson = JSON.stringify(pensionEmployeeJson);
//        $.post(server_base_url + "/pension/master/PensionEmploy/Update", {
//            pensionEmployeeJson: pensionEmployeeJson,
//            id: id,
//            userid: getUserSessionElement("userId")
//        }).done(function (data) {
//
//            if (data == fail) {
//                displayLargeErrorMessagesInCenterInRed("pensionEmployeeMessageDiv", emptyListMessage + "<br/><br/>");
//            } else if (data == unauthorized) {
//                displayLargeErrorMessagesInCenterInRed("pensionEmployeeMessageDiv", unauthorizedMessage + "<br/><br/>");
//            } else if (data == statusException) {
//                displayLargeErrorMessagesInCenterInRed("pensionEmployeeMessageDiv", statusExceptionMessage + "<br/><br/>");
//            } else if (data == invalidSession) {
//                callSessionTimeout();
//            } else if (data == null) {
//
//            } else {
//                $("#employeeCode").prop("disabled", true);
//                $("#pensionType").prop("disabled", true);
//                $("#pensionClassification").prop("disabled", true);
//                $("#pension").prop("disabled", true);
//                $("#payMode").prop("disabled", true);
//                $("#employeeName").prop("disabled", true);
//                $("#bankName").prop("disabled", true);
//                $("#fatherName").prop("disabled", true);
//                $("#accNumber").prop("disabled", true);
//                $("#motherName").prop("disabled", true);
//                $("#dob").prop("disabled", true);
//                $("#appointmentDate").prop("disabled", true);
//                $("#location").prop("disabled", true);
//                $("#retirementDate").prop("disabled", true);
//                $("#department").prop("disabled", true);
//                $("#pensionStartDate").prop("disabled", true);
//                $("#designation").prop("disabled", true);
//                $("#commutedMaturedDate").prop("disabled", true);
//                $("#grade").prop("disabled", true);
//                $("#incrementDate").prop("disabled", true);
//                $("#height").prop("disabled", true);
//                $("#employeeStatus").prop("disabled", true);
//                $("#Gender").prop("disabled", true);
//                $("#deathDate").prop("disabled", true);
//                $("#religion").prop("disabled", true);
//                $("#ageOnNextBirthday").prop("disabled", true);
//                $("#category").prop("disabled", true);
//                $("#corrsAddress").prop("disabled", true);
//                $("#association").prop("disabled", true);
//                $("#permanentAddress").prop("disabled", true);
//                $("#contactNumberC").prop("disabled", true);
//                $("#contactNumberP").prop("disabled", true);
//                $("#date").prop("disabled", true);
//                $("#pensionOrderNumber").prop("disabled", true);
//                $("#pensionLeftStatus").prop("disabled", true);
//                $("#indentationMark").prop("disabled", true);
//                $("#leftDate").prop("disabled", true);
//                $("#stopPension").prop("disabled", true);
//                $("#qualifyingService").prop("disabled", true);
//                $("#lastDrawnPayWithDA").prop("disabled", true);
//                $("#qualifyingServiceR").prop("disabled", true);
//                $("#nonqualifyingServiceR").prop("disabled", true);
//                $("#commFactor").prop("disabled", true);
//                $("#residualPension").prop("disabled", true);
//                $("#lastDrawnPayWithoutDA").prop("disabled", true);
//                $("#monthlyCommutedAmount").prop("disabled", true);
//                $("#averageEmoluments").prop("disabled", true);
//                $("#gratuity").prop("disabled", true);
//                $("#deathGratuity").prop("disabled", true);
//                $("#familyPension").prop("disabled", true);
//                $("#familyPensionYear").prop("disabled", true);
//                $("#familyPensionAfterYear").prop("disabled", true);
//                $("#commutedPercentage").prop("disabled", true);
//                $("#commutedAmount").prop("disabled", true);
//                $("#pensionRemarks").prop("disabled", true);
//                $("#it").prop("disabled", true);
//                $("#others").prop("disabled", true);
//                $("#pensionEmployeeSave").attr('disabled', true);
//                $("#pensionEmployeeReset").attr('disabled', true);
//                $("#employeeCode").focus();
//                displaySuccessMessages("pensionEmployeeMessageDiv", updateSuccessMessage, "");
//                setTimeout(function () {
//                    displayPensionEmployeeDetails();
//                }, 1000);
//            }
//        });
//    }


}

function deletePensionEmployee(id) {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deletePensionEmployeeData(id);
    }
}
function deletePensionEmployeeData(id) {
    $.post(server_base_url + "/pension/master/PensionEmployee/Delete", {
        id: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("PFTypelistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("PFTypelistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("PFTypelistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("pensionEmployeeMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                displayPensionEmployeeDetails("dashboardBodyMainDiv");
            }, 1000);
        }
    });
}
function viewPensionDetailsForm(divId) {
    $("#" + divId).append("<div id='panelMainBody1' class = 'panel-body' />");
    $("#panelMainBody1").append("<div id='FieldGroup1' class='form-group' />");

    $("#FieldGroup1").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup1").append("<input type='hidden' id='bid' >");
    $("#FieldGroup1").append("<div id='Row121' class='row'></div>");
    //Uncomment This to get the PENSION DETAILS FIELDS:-
    /*$("#Row121").append("<div  class='col-xs-12' id='buttoncalEmuRow'  /><center><button type='button'  id='calEmubutton' value='calEmubutton' class='btn btn-success'  onclick='some Function()'>Emolument Calculation</button></div>");
     
     getTwoColumnInRow("FieldGroup1", "Row21", "Row21Col1", "Row21Col2");
     $("#Row21Col1").append(getLabel_InputWithSpan("Qualifying Service", "required", "qualifyingService", "Enter Qualifying Service", ""));
     $("#Row21Col2").append(getLabel_InputWithSpan("Last Drawn Pay Without DA", "required", "lastDrawnPayWithDA", "Enter Last Drawn Pay Without DA", "onkeypress='return numericVal(event)'"));
     $("#qualifyingService").datepicker({
     format: "dd/mm/yyyy",
     autoclose: true
     });
     getTwoColumnInRow("FieldGroup1", "Row22", "Row22Col1", "Row22Col2");
     $("#Row22Col1").append(getLabel_InputWithSpan("Qualifying Service(Round Years)", "required", "qualifyingServiceR", "Enter Non Qualifying Service", ""));
     $("#Row22Col2").append(getLabel_InputWithSpan("Commuted Percentage", "required", "commutedPercentage", "Commuted Percentage", "onkeypress='return numericVal(event)'"));
     $("#qualifyingServiceR").datepicker();
     getTwoColumnInRow("FieldGroup1", "Row23", "Row23Col1", "Row23Col2");
     $("#Row23Col1").append(getLabel_InputWithSpan("Non Qualifying Service(Round Years)", "required", "nonqualifyingServiceR", "Enter Qualifying Service", ""));
     $("#Row23Col2").append(getLabel_InputWithSpan("Commuted Amount", "required", "commutedAmount", "Commuted Amount", "onkeypress='return numericVal(event)'"));
     $("#nonqualifyingServiceR").datepicker({
     format: "dd/mm/yyyy",
     autoclose: true
     });
     $("#FieldGroup1").append("<div id='Row122' class='row'></div>");
     $("#Row122").append("<div  class='col-xs-12' id='buttoncalPenRow'  /><center><button type='button'  id='calPenbutton' value='calPenbutton' class='btn btn-success'  onclick='someFunction()'>Calculate Pension</button></div>");
     
     getTwoColumnInRow("FieldGroup1", "Row24", "Row24Col1", "Row24Col2");
     $("#Row24Col1").append(getLabel_InputWithSpan("Last Drawn Pay Without DA", "required", "lastDrawnPayWithoutDA", "Enter Last Drawn Pay Without DA", "onkeypress='return numericVal(event)'"));
     $("#Row24Col2").append(getLabel_InputWithSpan("Monthly Commuted Amount", "required", "monthlyCommutedAmount", "Enter Monthly Commuted Amount", "onkeypress='return numericVal(event)'"));
     
     getTwoColumnInRow("FieldGroup1", "Row25", "Row25Col1", "Row25Col2");
     $("#Row25Col1").append(getLabel_InputWithSpan("Comm. Factor", "required", "commFactor", "Enter Comm. Factor", "onkeypress='return numericVal(event)'"));
     $("#Row25Col2").append(getLabel_InputWithSpan("Residual Pension", "required", "residualPension", "Enter Residual Pension", "onkeypress='return numericVal(event)'"));
     
     getTwoColumnInRow("FieldGroup1", "Row26", "Row26Col1", "Row26Col2");
     $("#Row26Col1").append(getLabel_InputWithSpan("Average Emoluments", "required", "averageEmoluments", "Enter Average Emoluments", "onkeypress='return numericVal(event)'"));
     $("#Row26Col2").append(getLabel_InputWithSpan("Gratuity", "required", "gratuity", "Enter Gratuity", "onkeypress='return numericVal(event)'"));
     
     getTwoColumnInRow("FieldGroup1", "Row27", "Row27Col1", "Row27Col2");
     $("#Row27Col1").append(getLabel_InputWithSpan("Pension", "required", "pension", "Enter Pension", "onkeypress='return numericVal(event)'"));
     $("#Row27Col2").append(getLabel_InputWithSpan("Death Gratuity", "required", "deathGratuity", "Enter Death Gratuity", "onkeypress='return numericVal(event)'"));
     
     getTwoColumnInRow("FieldGroup1", "Row28", "Row28Col1", "Row28Col2");
     $("#Row28Col1").append(getLabel_InputWithSpan("Family Pension", "required", "familyPension", "Enter Family Pension", "required", "onkeypress='return numericVal(event)'"));
     $("#Row28Col2").append(getLabel_InputWithSpan("Less Amount From Gratuity", "", "lessAmountFromGratuity", "Enter Less Amount From Gratuity", "onkeypress='return numericVal(event)'"));
     
     getTwoColumnInRow("FieldGroup1", "Row29", "Row29Col1", "Row29Col2");
     $("#Row29Col1").append(getLabel_InputWithSpan("Family Pension After Year", "required", "familyPensionAfterYear", "Enter Family Pension After Year", "onkeypress='return numericVal(event)'"));
     $("#Row29Col2").append(getLabel_InputWithSpan("IT", "", "it", "Enter IT", "onkeypress='return numericVal(event)'"));
     
     getTwoColumnInRow("FieldGroup1", "Row30", "Row30Col1", "Row30Col2");
     $("#Row30Col1").append(getLabel_InputWithSpan("Family Pension Year", "required", "familyPensionYear", "Family Pension Year", "onkeypress='return numericVal(event)'"));
     $("#Row30Col2").append(getLabel_InputWithSpan("others", "", "others", "others", "onkeypress='return numericVal(event)'"));
     */
}
function viewPensionNominee(divId) {
    $("#" + divId).append("<div id='panelMainBody2' class = 'panel-body' />");
    $("#panelMainBody2").append("<div id='FieldGroup2' class='form-group' />");
    getTwoColumnInRow("FieldGroup2", "Row31", "Row31Col1", "Row31Col2");



    $("#Row31Col1").append("<label class='control-label'>If No Nominee</label>");
    $("#Row31Col1").append('<div class="bankname"></div>');
    $("#Row31Col1").append("<input type='checkbox' id='ifNoNominee' name='ifNoNominee'  > ");

    $("#ifNoNominee").attr("onchange", "disabledMandatoryField()");



    $("#Row31Col2").append(getLabel_InputWithSpan("Date Of Birth", "required", "nomineedateOfBirth", "Enter Date Of Birth", "onkeypress='return false'"));
    $("#nomineedateOfBirth").datepicker();
    getTwoColumnInRow("FieldGroup2", "Row32", "Row32Col1", "Row32Col2");
    $("#Row32Col1").append(getLabel_InputWithSpan("Member Name", "required", "memberName", "Enter Member Name", ""));
    $("#Row32Col2").append(getLabel("Relation", "required") + "" + getDropDown("relation"));
    getAllRelation()

    getTwoColumnInRow("FieldGroup2", "Row33", "Row33Col1", "Row33Col2");
    $("#Row33Col1").append('<label class="control-label">Remarks</label>');
    $("#Row33Col1").append('<textarea id="remarks" type="text" placeholder="Remarks" class="form-control"/>');
    ;

    $("#FieldGroup2").append("<div id='Row34' class='row' />");
    $("#Row34").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success bn'  onclick='savePensionNominee()'>Add</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetPensionNominee()' class='btn btn-warning bn' name='reset' value='reset'>Reset</button></center></div>");
}

function savePensionNominee() {
    var sno = 0;
    var memberName = $("#memberName").val();
    var dateOfBirth = $("#nomineedateOfBirth").val();
    var remarks = $("#remarks").val();
    var relation = $("#relation").val();
    var nonominee;
    var result = 1;




    if ($('#ifNoNominee').prop('checked')) {
        nonominee = "YES";
        memberName = "NA";
        dateOfBirth = "NA";
        remarks = "NA";
        relation = "";

    } else
    {
        nonominee = "NO";

    }


    if (nonominee != "YES") {

        if (memberName == "" || memberName == null || dateOfBirth == "" || dateOfBirth == null) {

            displayLargeErrorMessagesInCenterInRed('pensionNominee1listMessageDiv', "Please fill all mandatory fields");
            result = 0;
        }

    }

    if (result !== 0) {

        var sno = 0;

        $("#displayNomineeTableBody").append("<tr style='cursor:pointer;' >"

                + "<td  class='hidden-xs hidden-sm hidden-md hidden-lg'>" + ++sno + "</td>"
                + "<td >" + memberName + "</td>"
                + "<td >" + dateOfBirth + "</td>"
                + "<td >" + ' <a href="javascript:void(0); " onclick=editThisPensionNomineeRowDetais(this.parentNode.parentNode.rowIndex) class="anchor_edit"><i class="fa fa-edit"></i>  Edit</a>' + "</td>"
                + "<td  >" + '<a href="javascript:void(0);" onclick=(this.parentNode.parentNode.rowIndex) class="anchor_delete"><i class="fa fa-trash-o">  Delete</button>' + "</td>"
                + "<td  class='hidden-xs hidden-sm hidden-md hidden-lg'>" + nonominee + "</td>"
                + "<td class='hidden-xs hidden-sm hidden-md hidden-lg'>" + remarks + "</td>"
                + "<td  class='hidden-xs hidden-sm hidden-md hidden-lg'>" + relation + "</td></tr>");
        $("#displayNomineeTable").dataTable();


        $("#memberName").prop("disabled", false);
        $("#nomineedateOfBirth").prop("disabled", false);
        $("#remarks").prop("disabled", false);
        $("#relation").prop("disabled", false);



        $("#memberName").val("");
        $("#nomineedateOfBirth").val("");
        $("#remarks").val("");
        $("#relation").val("");
        $("#ifNoNominee").prop("checked", false);
        $("#pensionNominee1listMessageDiv").text("");
    }


}

function editThisPensionNomineeRowDetais(i) {


    $('table#pensiondisplayNomineeTable tbody tr').each(function () {

        if ($(this).find("tr:eq(" + i + ")")) {
            var j = i - 1;

            $("#memberName").val($("table#pensiondisplayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(1)').text());
            $("#nomineedateOfBirth").val($("table#pensiondisplayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(2)').text());
            $("#remarks").val($("table#pensiondisplayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(6)').text());
            $("#relation").val($("table#pensiondisplayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(7)').text());

            var testNominee = $("table#pensiondisplayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(5)').text();

            if (testNominee == "YES") {
                $('#ifNoNominee').prop('checked', true);
            } else {
                $('#ifNoNominee').prop('checked', false);
            }

        }
    });


    var count = 1
    $('table #pensiondisplayNomineeTable tbody tr').each(function () {
        $(this).find('td:eq(0) ').text("").text(count);
        count++;
    });
    if (doesTableHaveRows("displayLeaveTypeAddTable")) {
        enableElement({data: {id: "saveUpdateBtnId"}});
        enableElement({data: {id: "resetBackBtnId"}});
    } else {
        disableElement({data: {id: "saveUpdateBtnId"}});
        disableElement({data: {id: "resetBackBtnId"}});
    }


    deleteRow1(i);


}


function viewPensionHead(divId) {
    $("#" + divId).append("<div id='pensiontextpanelFirstPanel'' />");
    $("#pensiontextpanelFirstPanel").append("<table id='pensionexample1' class='table table-bordered table-striped'></table>");
    $("#pensionexample1").append("<thead class=''><tr>"

            + " <th class='sno_width'> S.No</th>"

            + "<th  class='table_col_width'><i class='glyphicon'></i> Description</th>"
            + "<th  class='table_col_width'><i class='glyphicon'></i> Amount</th>"

            + "</tr></thead>");
    $.get(server_base_url + "/pension/master/PensionHead/ViewList", {
    }).done(function (pdata) {



        if (pdata != null) {

            if (pdata.length > 0) {

                var sno = 0;
                var id = 0;
                $("#pensionexample1").append("<tbody id='pensionexample1TableBody' class='table-striped table-bordered' />");
                for (var i = pdata.length - 1; i >= 0; i--) {
                    sno++;
                    id++;
                    var assjson = {
                        aid: pdata[i]._id.$oid,
                        pensionHeadName: pdata[i].pensionHeadName,
                        pensionAmount: pdata[i].pensionAmount


                    }

                    assjson = JSON.stringify(assjson);
                    $("#pensionexample1TableBody").append("<tr id='" + pdata[i].status + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td >" + pdata[i].pensionHeadName + "</td>"
                            + "<td >" + pdata[i].pensionAmount + "</td></tr>");
                }
                $("#pensionexample1").DataTable();
            }
        }

    });
}

function viewPensionNomineeList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='nomineeDatatablemainDiv'/>");
    $("#nomineeDatatablemainDiv").append("<div class='table-responsive' id='viewNomineeDataTableDiv' />");
    $("#viewNomineeDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='pensiondisplayNomineeTable' />");
    $("#pensiondisplayNomineeTable").append("<thead class=''><tr>"
            + "<th  class='hidden-xs hidden-sm hidden-md hidden-lg'><i class='glyphicon'></i>S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Member Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Date Of Birth</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa'></i> Delete</th>"

            + "</tr></thead>");
    $("#pensiondisplayNomineeTable").append("<tbody id='displayNomineeTableBody' class='table-striped table-bordered' />");
}

function getAllRelation() {
    $.get(server_base_url + "/hrms/common/Relation/View", {
    }).done(function (bdata) {
        $("#relation").text("").append("<option value=''>----Select Relation----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#relation").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].relation + "</option>");
        }
    });
}
function getAllCastCategory() {
    $.get(server_base_url + "hrms/common/Category/View", {
    }).done(function (bdata) {
        $("#category").text("").append("<option value=''>----Select Cast Category----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#category").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].categoryy + "</option>");
        }
    });
}
function getAllReligion() {
    $.get(server_base_url + "/hrms/common/Religion/View", {
    }).done(function (bdata) {
        $("#religion").text("").append("<option value=''>----Select Religion----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#religion").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].religion + "</option>");
        }
    });
}
function getAllEmployeeStatus(name, divId) {
    var states = ["Alive", "Dead"];
    $("#" + divId).append("<option value='' selected disabled>---- Select Employee Status ----</option>");
    for (var i = 0; i < states.length; i++) {
        $("#employeeStatus").append("<option  value='" + states[i] + "' >" + states[i] + "</option>");
    }
    $("#" + divId).val(name);
}
function getAllPensionLeftStatus(name, divId) {
    var states = ["YES", "NO"];
    $("#" + divId).append("<option value='' selected disabled>---- Select Pension Left Status ----</option>");
    for (var i = 0; i < states.length; i++) {
        $("#pensionLeftStatus").append("<option  value='" + states[i] + "' >" + states[i] + "</option>");
    }
    $("#" + divId).val(name);
}
function getAllDepartment() {
    $.get(server_base_url + "/hrms/salary/Department/ViewList", {
    }).done(function (bdata) {
        $("#department").text("").append("<option value=''>----Select Department----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#department").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].department + "</option>");
        }
    });
}
function getAllDesignation() {
    $.get(server_base_url + "/hrms/salary/Designation/ViewList", {
    }).done(function (bdata) {
        $("#designation").text("").append("<option value=''>----Select Designation----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#designation").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].designation + "</option>");
        }
    });
}
function getAllGrade() {
    $.get(server_base_url + "/hrms/salary/Grade/ViewList", {
    }).done(function (bdata) {
        $("#grade").text("").append("<option value=''>----Select Grade----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#grade").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].gradeName + "</option>");
        }
    });
}
function getAllAssociation() {
    $.get(server_base_url + "/pension/master/PensionAssociation/ViewList", {
    }).done(function (bdata) {
        $("#association").text("").append("<option value=''>----Select Association----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#association").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].pensionAssociationName + "</option>");
        }
    });
}
function getAllLocation() {
    $.get(server_base_url + "hrms/salary/Employee/LocationForOptions", {
    }).done(function (bdata) {

        $("#location").text("").append("<option value=''>----Select Location----</option>");
        for (var i = 0; i < bdata.length; i++) {

            $("#location").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].locationName + "</option>");
        }
    });
}
function getAllDDO() {
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (bdata) {
        $("#ddo").text("").append("<option value=''>----Select DDO----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#ddo").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].ddoName + "</option>");
        }
    });
}
function getAllPensionBank() {
    $.get(server_base_url + "/pension/master/PensionBank/ViewList", {
    }).done(function (bdata) {
        $("#bankName").text("").append("<option value=''>----Select Pension Bank----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#bankName").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].bankName + "</option>");
        }
    });
}
function getAllPensionClassification() {
    $.get(server_base_url + "/pension/master/PensionClassification/View", {
    }).done(function (bdata) {
        $("#pensionClassification").text("").append("<option value=''>----Select Pension Classification----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#pensionClassification").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].pensionClassification + "</option>");
        }
    });
}
function getAllPensionTypes() {
    var states = ["Monthly Pension", "Family Pension"];
    $("#pensionType").text("").append("<option value='' selected disabled>---- Select Pension Type----</option>");
    for (var i = 0; i < states.length; i++) {
        $("#pensionType").append("<option  value='" + states[i] + "' >" + states[i] + "</option>");
    }
}

function getCorrespondingPayScale(name, DivId, message) {
    var payScale = ["4440-7440", "5200-20200", "9300-34800", "15600-39100", "37400-67000"];
    $("#" + DivId).text("").append("<option value='' selected >--- Select " + message + "-------</option>");
    for (var i = 0; i < payScale.length; i++) {
        $("#" + DivId).append("<option  value='" + payScale[i] + "' >" + payScale[i] + "</option>");
    }
    $("#" + DivId).val(name);
}
function getFormula(name, DivId, message) {
    var form = ["Pension", "Family Pension"];
    $("#" + DivId).text("").append("<option value='' selected >--- Select " + message + "-------</option>");
    for (var i = 0; i < form.length; i++) {
        $("#" + DivId).append("<option  value='" + form[i] + "' >" + form[i] + "</option>");
    }
    $("#" + DivId).val(name);
}

function calculatePension() {
    var result = 1;
    var formula = $("#formula").val();
    var pensionType = $("#pensionType").val();

    if ((pensionType === "Family Pension") && (formula !== "Family Pension")) {
        displaySmallErrorMessages("formulaErr", "Please select valid formula");
        result = 0;
    }
    if (result != 0) {

        $("#formulaErr").text("");
        $.post(server_base_url + "/pension/master/PensionEmployee/CalculatePension", {
            payBand: $("#payBand").val(),
            gradePay: $("#gradePay").val(),
            formula: $("#formula").val()
        }).done(function (data) {
            $('#pension').removeAttr('value');
            $('#familyPension').removeAttr('value');
            if ($("#formula").val() == "Pension") {
                $("#pension").val(data);
            } else {
                $("#familyPension").val(data);
            }
        });
    }
}

