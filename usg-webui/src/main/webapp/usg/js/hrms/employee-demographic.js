/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function addDemographic()
{
    scrolupfunction();
    // $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsEmployeeMasterTabs()">Employee Master</a></label> >> <label>Employee Demographic</label>');
//    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Employee Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="">Employee Demographic</a>');
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS ></a></label> <label><a href="javascript:hrmsEmployeeMasterTabs()"> Employee Master</a></label> > <label> Employee Demographic</label>');
//    getEmpcodesEmpDemographic();
    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateEmployeeDemographics)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Employee Demographic Details</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colDemographics'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colDemographics").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colDemographics span").hasClass("glyphicon-minus-sign")) {
                $("#colDemographics").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colDemographics").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");

        $("#panelRow").append("<div id='pregsuccessBefore'></div>");

        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");

        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        $("#FieldGroup").append("<input type='hidden' id='eid' >");

        $("#FieldGroup").append("<input type='hidden' id='empid' >");
        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        // $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "required", "employeeCode", "Enter Employee Code", ""));

        //  $("#Row1Col1").append("<span style='padding-top: 10px;padding-left: 0px;'class='col-sm-1 glyphicon glyphicon-search' onclick='getEmpDemographicdetails()'></span>");

        $("#Row1Col1").append(getLabel("Employee Code", "required") + "" + getDropDown("employeeCode"));

        $("#Row1Col2").append(getLabel_InputWithSpan("Quarter No.", "", "quarterNo", " ", "onkeypress='return validatealphanumeric(event)' readonly"));
        $("#employeeCode").attr("onchange", "getEmpDemographicdetails()");
//    $("#FieldGroup").append("<div id='Row2' class='row'/>");
//    $("#Row2").append("<div  class='col-md-12' id='GoRow'/><button type='button'  id='goButton' value='Go' class='btn btn-blue'  onclick='getEmpDemographicdetails()' style='height:40px;width:80px'>Go</button></div>");

        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel_InputWithSpan("Department", "", "department", "", "onkeypress='' readonly"));
        $("#Row3Col2").append(getLabel("Religion", "required") + "" + getDropDown("religion"));
        getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel_InputWithSpan("Designation", "", "designation", "", "onkeypress='' readonly"));
        $("#Row4Col2").append(getLabel("Gender", "required") + "" + getDropDown("gender"));
        getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
//    $("#Row5Col1").append(getLabel_InputWithSpan("DDO", "", "ddo", "", ""));
        $("#Row5Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        $("#Row5Col2").append(getLabel("Category", "required") + "" + getDropDown("category"));
        getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel_InputWithSpan("Employee Code(M)", "", "empCodeM", "", "onkeypress='' readonly"));
        $("#Row6Col2").append(getLabel_InputWithSpan("Date Of Birth", "", "dob", " ", "onkeypress='' readonly"));

        getTwoColumnInRow("FieldGroup", "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel_InputWithSpan("Employee Name", "", "empName", "", "onkeypress='' readonly"));
        $("#Row7Col2").append(getLabel_InputWithSpan("Date Of Appointment", "", "doa", " ", "onkeypress='' readonly"));

        getTwoColumnInRow("FieldGroup", "Row8", "Row8Col1", "Row8Col2");
        $("#Row8Col1").append(getLabel_InputWithSpan("Father Name", "", "fatherName", "", "onkeypress='' readonly"));
        $("#Row8Col2").append(getLabel_InputWithSpan("Date Of Joining", "", "doj", " ", "onkeypress='' readonly"));


        getTwoColumnInRow("FieldGroup", "Row9", "Row9Col1", "Row9Col2");
        $("#Row9Col1").append(getLabel("Current Address", "") + "" + getTextareaWithErrSpan("currentAddress", "", "", ""))
        $("#Row9Col2").append(getLabel("Confirmation Date", "") + "" + getInputwithErrSpan("conformationDate", "", "", "readonly"));



        getTwoColumnInRow("FieldGroup", "Row10", "Row10Col1", "Row10Col2");
        $("#Row10Col1").append(getLabel_InputWithSpan("Current Contact No", "", "currentContactNo", "", "onkeypress='return validateNumber(event)' maxlength=10"));
        $("#Row10Col2").append(getLabel_InputWithSpan("Retirement Date", "", "retirementDate", "", "readonly"));


        getTwoColumnInRow("FieldGroup", "Row11", "Row11Col1", "Row11Col2");
        $("#Row11Col1").append(getLabel("Permanent Address", "") + "" + getTextareaWithErrSpan("permanentAddress", "", "", ""))
        $("#Row11Col2").append(getLabel("Last Appointment Date", "") + "" + getInputwithErrSpan("lastAppointmentDate", "", "", "readonly"));



        getTwoColumnInRow("FieldGroup", "Row12", "Row12Col1", "Row12Col2");
        $("#Row12Col1").append(getLabel_InputWithSpan("Permanent Contact Number", "", "permanentContactNo", "", "onkeypress='return validateNumber(event)' maxlength=10"));
        $("#Row12Col2").append(getLabel_InputWithSpan("Last Joining Date", "", "ljd", " ", "onkeypress='' readonly"));

        getTwoColumnInRow("FieldGroup", "Row13", "Row13Col1", "Row13Col2");
        $("#Row13Col1").append(getLabel_InputWithSpan("Identification Mark", "", "identificationMarks", "", "onkeypress=''"));
        $("#Row13Col2").append(getLabel_InputWithSpan("Height(In Cms)", "", "height", "", "onkeypress='return validateNumber(event)'"));

        getTwoColumnInRow("FieldGroup", "Row14", "Row14Col1", "Row14Col2");
        $("#Row14Col1").append(getLabel_InputWithSpan("Tech.Qualification", "", "techQualification", "", "onkeypress=''"));
        $("#Row14Col2").append(getLabel_InputWithSpan("Scholarship", "", "scholarShip", "", "onkeypress=''"));


        getTwoColumnInRow("FieldGroup", "Row15", "Row15Col1", "Row15Col2");
        $("#Row15Col1").append(getLabel("Remarks", "") + "" + getTextareaWithErrSpan("remarks", "", "", ""));
        $("#Row15Col2").append(getLabel("Reference", "") + "" + getTextareaWithErrSpan("references", "", "", ""))
        getLoggedInDDOInDropDown("ddo", " ");
        getEmpcodesEmpDemographic();

        $("#FieldGroup").append('<div  id="Row16"  class="form-group"/>');
        $("#Row16").append('<div id="Row161" class="col-md-6" />');
        //$("#Row161").append('<label for="saltype"  class="col-md-6 control-label">saltype</label>');
        $("#Row161").append("<input type='hidden' id='salType'  class='form-control'>");
        $("#Row16").append('<div id="Row162" class="col-md-6" />');
        //$("#Row162").append('<label for="location"  class="col-md-6 control-label">location</label>');
        $("#Row162").append("<input type='hidden' id='location'  class='form-control'>");

        $("#FieldGroup").append("<div id='Row17' class='row' />");
        $("#Row17").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='demographicValidation()' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='resetBackbutton'onclick='resetDemographic()' class='btn btn-warning mr5' name='reset' value='reset' style='height:40px;width:80px'>Reset</button></center></div>");
        //  loadEmpcodesEmpDemographic();

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });





    }
    if (checkUserPrivelege(pvViewEmployeeDemographics)) {
        $("#mainTabMenu").append("<div id='tableHeaderForEmployeeDemographicList'/>");
        viewEmployeeDemographicList("tableHeaderForEmployeeDemographicList");
    }
    setTimeout(function () {
        $("#pregsuccessBefore").text("");
    }, 2100);

    $("#employeeCode").keypress(function (event) {
        if (event.which == 13) {
            getEmpDemographicdetails();

        }
    });

}
function getEmpcodesEmpDemographic()
{
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];
    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: getUserSessionElement(seDDOId),
        fromDt: fromDate,
        toDate: toDate,
        location: getUserSessionElement(seLocationId)
    }).done(function (data) {
        data = JSON.parse(data);
        $("#pregsuccessBefore").text("");
        if (data != 501) {
            if (data == null || data == "" || data == 500)
            {
                $("#employeeCode").text("").append("<option >" + NoDataFound + "</option>");
            } else {
                $("#employeeCode").text("").append("<option  value='' selected >----[Employee Code]-Employee Name ----</option>");
                for (var i = 0; i < data.length; i++)
                {
                    $("#employeeCode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
                }
            }
        } else
        {
            displaySmallErrorMessagesInRed("pregsuccessBefore", "DDO has not Mapped to User " + "<br/><br/>");
        }

    });

}
function viewEmployeeDemographicList(divId)
{
    if (checkUserPrivelege(pvViewEmployeeDemographics)) {
        $("#" + divId).text("").append("<div id='employeeDemographicListPanel' class='panel panel-blue' />");
        $("#employeeDemographicListPanel").text("").append("<div id='employeeDemographicListPanelHeading' class='panel-heading' />");
        $("#employeeDemographicListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Employee Demographic Details</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colEmpDemographicsList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#employeeDemographicListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colEmpDemographicsList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colEmpDemographicsList span").hasClass("glyphicon-minus-sign")) {
                $("#colEmpDemographicsList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colEmpDemographicsList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");
        $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displayEmployeeDemographicTable' />");
        $("#displayEmployeeDemographicTable").append("<thead class=''><tr id='displayEmployeeDemographicTableHeadRow'>"
                + " <th class='sno_width'> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Employee Code(M)</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Department</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Designation</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Salary Type</th>");
        if (checkUserPrivelege(pvUpdateEmployeeDemographics)) {
            $("#displayEmployeeDemographicTableHeadRow").append("<th class='table_anchor_width'><i ></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteEmployeeDemographics)) {
            $("#displayEmployeeDemographicTableHeadRow").append("<th class='table_anchor_width'><i  style='font-size:21px;'></i> Delete</th>");
        }
        $("#displayEmployeeDemographicTableHeadRow").append("</tr></thead>");
        $.get(server_base_url + "hrms/EmployeeMaster/EmployeeDemographic/View", {
            ddoId: getUserSessionElement(seDDOId)
        }).done(function (bdata) {
            if (bdata == fail || bdata.statuscode == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
//            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />")
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (bdata == invalidSession || bdata.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException || bdata.statuscode == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#displayEmployeeDemographicTable").append("<tbody id='displayEmployeeDemographicTableBody' class='table-striped table-bordered' />");
//                    for (var i = bdata.length-1; i >=0 ; i--) {
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var demoJson = {
                                empid: bdata[i]._id.$oid,
                                empCode: bdata[i].employeeCode,
                                employeeCodem: bdata[i].employeeCodeM,
                                employeeName: bdata[i].employeeName,
                                fatherName: bdata[i].fatherName,
                                department: bdata[i].department,
                                designation: bdata[i].designation,
                                currentAddress: bdata[i].currentAddress,
                                confirmationDate: bdata[i].conformationDate,
                                currentContactNo: bdata[i].currentContactNo,
                                retirementDate: bdata[i].dateOfRetirement,
                                permanentAddress: bdata[i].permanentAddress,
                                permanentContactNo: bdata[i].permanentContactNo,
                                identificationMarks: bdata[i].identificationMarks,
                                techQualification: bdata[i].techQualification,
                                salaryType: bdata[i].salaryType,
                                location: bdata[i].location,
                                scholarship: bdata[i].scholarship,
                                height: bdata[i].height,
                                remarks: bdata[i].remarks,
                                references: bdata[i].refference,
                                quarterNo: bdata[i].quarterNo,
                                religion: bdata[i].religion,
                                gender: bdata[i].gender,
                                category: bdata[i].category,
                                ddo: bdata[i].ddo,
                                dob: bdata[i].dob,
                                dateofAppointment: bdata[i].dateOfAppointment,
                                doj: bdata[i].dateOfJoining,
                                lastappointmentDate: bdata[i].lastAppointmentDate,
                                lastJoiningDate: bdata[i].lastJoiningDate,
                                dateOfRetirement: bdata[i].dateOfRetirement

                            };

                            demoJson = JSON.stringify(demoJson);

                            $("#displayEmployeeDemographicTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeCodeM + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].department + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].salaryType + "</td>");
                            if (checkUserPrivelege(pvUpdateEmployeeDemographics)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateEmployeeDemographic('" + encodeURI(demoJson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteEmployeeDemographics)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteEmployeeDemographic','displayEmployeeDemographicTable','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                            }
                            $("#" + bdata[i]._id.$oid).append("</tr>");
                        }
                        $('#displayEmployeeDemographicTable').dataTable();
                        $('#displayEmployeeDemographicTable').append("</table>");

                    }
                }
            }
        });
    }
}

function updateEmployeeDemographic(obj)
{
    if (checkUserPrivelege(pvUpdateEmployeeDemographics)) {
        $("#pregsuccessBefore").text("");
        obj = JSON.parse(decodeURI(obj));
        $("#displayEmployeeDemographicTableBody tr").css("background-color", "white");
        $("#displayEmployeeDemographicTableBody tr" + "#" + obj.empid).css("background-color", "rgba(10, 129, 156, 0.3)");
        $('#employeeCode').val(obj.empCode);
        $('#quarterNo').val(obj.quarterNo);
        $('#empid').val(obj.empid);
        $('#department').val(obj.department);
        viewReligionListForOption(obj.religion);
        $('#designation').val(obj.designation);
        getGenderOption(obj.gender, "gender");
        $('#ddo').val(obj.ddo);
        getCategoryOptionsForEmpDemo(obj.category, "category", "Category");
        $('#empCodeM').val(obj.employeeCodem);
        $('#dob').val(obj.dob);
        $('#empName').val(obj.employeeName);
        $('#doa').val(obj.dateofAppointment);
        $('#fatherName').val(obj.fatherName);
        $('#doj').val(obj.doj);
        $("#remarks").val(obj.remarks);
        $('#lastAppointmentDate').val(obj.lastappointmentDate);
        $('#permanentAddress').val(obj.permanentAddress);
        $('#currentAddress').val(obj.currentAddress);
        $('#currentContactNo').val(obj.currentContactNo);
        $('#permanentContactNo').val(obj.permanentContactNo);
        $('#ljd').val(obj.lastJoiningDate);
        $('#identificationMarks').val(obj.identificationMarks);
        $('#height').val(obj.height);
        $('#techQualification').val(obj.techQualification);
        $('#scholarShip').val(obj.scholarship);
        $('#references').val(obj.references);
        $('#conformationDate').val(obj.conformationDate);
        $('#retirementDate').val(obj.dateOfRetirement);
        $("#saveorupdate").val("update");
        $("#saveupdatebutton").text("").text("Update");
        // $("#saveupdatebutton").text("").text("Reset");
        $("#resetBackbutton").val("Back");
        $("#resetBackbutton").text("").text("Back");
    }
}
function deleteEmployeeDemographic(id) {
    if (checkUserPrivelege(pvDeleteEmployeeDemographics)) {
        var userid = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/EmployeeMaster/EmployeeDemographic/Delete", {
            id: id,
            userid: userid
        }).done(function (data) {
            if (data == fail || data.statuscode == fail) {
                displayErrorMessages("authonticationMsgId", "Invalid username / password");
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
                    addDemographic();
                }, 4000);
            }
        });

    }
}

function getEmpDemographicdetails()
{
    var ecode = $("#employeeCode").val();

    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function (pdata) {

        if (pdata == null || pdata == "" || pdata == 500)
        {
            displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");

        } else {
            $('#pregsuccessBefore').text("").val("");
            $('#quarterNo').val(pdata[0].quarterNo);
            $('#empid').val(pdata[0]._id.$oid);
            $('#department').val(pdata[0].department);
            viewReligionListForOption(pdata[0].religion);
            $('#designation').val(pdata[0].designation);
            getGenderOption(pdata[0].gender, "gender");
//            $('#ddo').val(pdata[0].ddo);
            getCategoryOptionsForEmpDemo(pdata[0].category, "category", "");
            $('#empCodeM').val(pdata[0].employeeCodeM);
            $('#dob').val(pdata[0].dob);
            $('#empName').val(pdata[0].employeeName);
            $('#doa').val(pdata[0].dateOfAppointment);
            $('#fatherName').val(pdata[0].fatherName);
            $('#doj').val(pdata[0].dateOfJoining);
            $("#remarks").val(pdata[0].remarks);
            $('#lastAppointmentDate').val(pdata[0].lastAppointmentDate);
            $('#permanentAddress').val(pdata[0].permanentAddress);
            $('#currentAddress').val(pdata[0].currentAddress);
            $('#currentContactNo').val(pdata[0].currentContactNo);
            $('#permanentContactNo').val(pdata[0].permanentContactNo);
            $('#ljd').val(pdata[0].lastJoiningDate);
            $('#identificationMarks').val(pdata[0].identificationMarks);
            $('#height').val(pdata[0].height);
            $('#techQualification').val(pdata[0].techQualification);
            $('#scholarShip').val(pdata[0].scholarship);
            $('#references').val(pdata[0].refference);
            $('#retirementDate').val(pdata[0].dateOfRetirement);


        }
    });
}

function demographicValidation()
{
    var saveorupdate = $("#saveorupdate").val();
    $("#employeeCodeErr").text("");
    $("#quarterNoErr").text("");
    $("#departmentErr").text("");
    $("#religionErr").text("");
    $("#designationErr").text("");
    $("#genderErr").text("");
    $("#ddoErr").text("");
    $("#categoryErr").text("");
    $("#empCodeMErr").text("");
    $("#dobErr").text("");
    $("#empNameErr").text("");
    $("#pregsuccessBefore").text("");
    $("#doaErr").text("");
    $("#dojErr").text("");
    $("#currentAddressErr").text("");
    $("#conformationDateErr").text("");
    $("#currentContactNoErr").text("");
    $("#retirementDateErr").text("");
    $("#permanentAddressErr").text("");
    $("#lastAppointmentDateErr").text("");
    $("#permanentAddressErr").text("");
    $("#lastAppointmentDateErr").text("");
    $("#permanentContactNoErr").text("");
    $("#ljdErr").text("");
    $("#identificationMarksErr").text("");
    $("#heightErr").text("");
    $("#techQualificationErr").text("");
    $("#scholarShipErr").text("");

    var empcod = $('#employeeCode').val();
    var religin = $('#religion').val();
    var gendr = $('#gender').val();
    var catgor = $('#category').val();
    var currentcontact = $('#currentContactNo').val();
    var percontact = $('#permanentContactNo').val();

    var result = 1;

    if (empcod == "") {
        $("#employeeCode").focus();
        displaySmallErrorMessagesInRed("employeeCodeErr", "Please enter Employee Code.");
        result = 0;
    }
    if (religin == null || religin == "") {
        $("#religion").focus();
        $("#employeeCodeErr").text("");
        displaySmallErrorMessagesInRed("religionErr", "Please Select Religion.");
        result = 0;
    }
    if (gendr == null || gendr == "") {
        $("#gender").focus();
        $("#religionErr").text("");
        displaySmallErrorMessagesInRed("genderErr", "Please Select Gender.");
        result = 0;
    }
    if (catgor == null || catgor == "") {
        $("#category").focus();
        $("#genderErr").text("");
        displaySmallErrorMessagesInRed("categoryErr", "Please Select Category.");
        result = 0;
    }
    if (currentcontact.length < 10) {

        $("#currentContactNo").focus();
        $("#genderErr").text("");
        displaySmallErrorMessagesInRed("currentContactNoErr", "Please Enter Proper Contact Number.");
        result = 0;
    }
    if (percontact.length < 10) {
        $("#permanentContactNo").focus();
        $("#genderErr").text("");
        $("#currentContactNoErr").text("");
        displaySmallErrorMessagesInRed("permanentContactNoErr", "Please Enter Proper Contact Number.");
        result = 0;
    }
    if (result != 0) {
        if (saveorupdate == "save") {
            $("#categoryErr").text("");
            $("#permanentContactNoErr").text("");
            saveEmployeeDemographicDetails();
        } else {
            $("#categoryErr").text("");
            $("#permanentContactNoErr").text("");
            updateEmployeeDemographicDetails();
        }
    }
//    }


}

function saveEmployeeDemographicDetails()
{
    if (checkUserPrivelege(pvCreateEmployeeDemographics)) {
        var religion = $('#religion').val();
        var gender = $('#gender').val();
        var category = $('#category').val();
        var caddress = $('#currentAddress').val();
        var ccontnum = $('#currentContactNo').val();
        var peraddress = $('#permanentAddress').val();
        var percontactno = $('#permanentContactNo').val();
        var idfmarks = $('#identificationMarks').val();
        var techqualifi = $('#techQualification').val();
        var scholrship = $('#scholarShip').val();
        var height = $('#height').val();
        var reffer = $('#references').val();
        var remarks = $('#remarks').val();

        var demojson = {
            religion: religion,
            category: category,
            gender: gender,
            currentAddress: caddress,
            currentContactNo: ccontnum,
            permanentAddress: peraddress,
            permanentContactNo: percontactno,
            identificationMarks: idfmarks,
            techQualification: techqualifi,
            scholarship: scholrship,
            height: height,
            remarks: remarks,
            refference: reffer
        }

        var id = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/EmployeeMaster/EmpDemographic/Save", {
            demojson: JSON.stringify(demojson),
            userid: id,
            empid: $("#empid").val()
        }).done(function (data) {
            if (data == fail || data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            } else if (data == unauthorized || data == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == statusException || data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == invalidSession || data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else {
                scrolupfunction();
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function () {
                    addDemographic();
                }, 4000);
            }
        });
    }
}

function updateEmployeeDemographicDetails()
{
    if (checkUserPrivelege(pvUpdateEmployeeDemographics)) {
        var eid = $('#empid').val();


        var religion = $('#religion').val();
        var gender = $('#gender').val();
        var category = $('#category').val();
        var caddress = $('#currentAddress').val();
        var ccontnum = $('#currentContactNo').val();
        var peraddress = $('#permanentAddress').val();
        var percontactno = $('#permanentContactNo').val();
        var idfmarks = $('#identificationMarks').val();
        var techqualifi = $('#techQualification').val();
        var scholrship = $('#scholarShip').val();
        var height = $('#height').val();
        var reffer = $('#references').val();
        var remarks = $('#remarks').val();

        var demojson = {
            religion: religion,
            category: category,
            gender: gender,
            currentAddress: caddress,
            currentContactNo: ccontnum,
            permanentAddress: peraddress,
            permanentContactNo: percontactno,
            identificationMarks: idfmarks,
            techQualification: techqualifi,
            scholarship: scholrship,
            height: height,
            remarks: remarks,
            refference: reffer
        }

        var id = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/EmployeeMaster/EmpDemographic/Update", {
            demoJson: JSON.stringify(demojson),
            eid: eid,
            userid: id
        }).done(function (data) {
            if (data == fail || data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            } else if (data == unauthorized || data == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == statusException || data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == invalidSession || data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else {
                disableDiv("FieldGroup");
                scrolupfunction();
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function () {
                    addDemographic();
                }, 4000);
            }
        });
    }
}

function resetDemographic()
{
    if ($("#resetBackbutton").val() == "Back")
    {
        addDemographic();
    } else
    {
        $('#employeeCode').val("");
        $('#quarterNo').val("");
        $('#department').val("");
        $('#religion').val("");
        $('#designation').val("");
        $('#gender').val("");
//        $('#ddo').val("");
        $('#category').val("");
        $('#empCodeM').val("");
        $('#dob').val("");
        $('#empName').val("");
        $('#doa').val("");
        $('#fatherName').val("");
        $('#doj').val("");
        $('#currentAddress').val("");
        $('#conformationDate').val("");
        $('#currentContactNo').val("");
        $('#retirementDate').val("");
        $('#permanentAddress').val("");
        $('#lastAppointmentDate').val("");
        $('#permanentContactNo').val("");
        $('#ljd').val("");
        $('#identificationMarks').val("");
        $('#height').val("");
        $('#techQualification').val("");
        $('#scholarShip').val("");
        $('#remarks').val("");
        $('#references').val("");

        $('#employeeCodeErr').text("");
        $('#quarterNoErr').text("");
        $('#departmentErr').text("");
        $('#religionErr').text("");
        $('#designationErr').text("");
        $('#genderErr').text("");
        $('#ddoErr').text("");
        $('#categoryErr').text("");
        $('#empCodeMErr').text("");
        $('#dobErr').text("");
        $('#empNameErr').text("");
        $('#doaErr').text("");
        $("#fatherNameErr").text("");
        $("#dojErr").text("");
        $("#currentAddressErr").text("");
        $("#conformationDateErr").text("");
        $("#currentContactNoErr").text("");
        $("#retirementDateErr").text("");
        $("#permanentAddressErr").text("");
        $("#lastAppointmentDateErr").text("");
        $("#permanentContactNoErr").text("");
        $("#ljdErr").text("");
        $("#identificationMarksErr").text("");
        $("#heightErr").text("");
        $("#techQualificationErr").text("");
        $("#scholarShipErr").text("");
        $("#remarksErr").text("");
        $("#referencesErr").text("");

        $('#employeeCodeFieldGroup').val("");
        $('#quarterNoFieldGroup').val("");
        $('#departmentFieldGroup').val("");
        $('#religionFieldGroup').val("");
        $('#designationFieldGroup').val("");
        $('#genderFieldGroup').val("");
        $('#ddoFieldGroup').val("");
        $('#categoryFieldGroup').val("");
        $('#empCodeMFieldGroup').val("");
        $('#dobFieldGroup').val("");
        $('#empNameFieldGroup').val("");
        $('#doaFieldGroup').val("");
        $('#fatherNameFieldGroup').val("");
        $('#dojFieldGroup').val("");
        $('#currentAddressFieldGroup').val("");
        $('#conformationDateFieldGroup').val("");
        $('#currentContactNoFieldGroup').val("");
        $('#retirementDateFieldGroup').val("");
        $('#permanentAddressFieldGroup').val("");
        $('#lastAppointmentDateFieldGroup').val("");
        $('#permanentContactNoFieldGroup').val("");
        $('#lastAppointmentDateFieldGroup').val("");
        $('#permanentContactNoFieldGroup').val("");
        $('#ljdFieldGroup').val("");
        $('#identificationMarksFieldGroup').val("");
        $('#heightFieldGroup').val("");
        $('#techQualificationFieldGroup').val("");
        $('#scholarShipFieldGroup').val("");
        $('#remarksFieldGroup').val("");
        $('#referencesFieldGroup').val("");
        $("#pregsuccessBefore").text("");
        $("#ErrorDiv").text("");
    }
}
function getCategoryOptionsForEmpDemo(name, DivId, message) {
    $.get(server_base_url + "hrms/common/Category/View", {
    }).done(function (bdata) {
        if (bdata != null) {
            $("#" + DivId).text("").append("<option value ='' selected>---- Select " + message + " ----</option>");
            if (bdata.length > 0) {
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i]._id.$oid) {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].categoryy + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' >" + bdata[i].categoryy + "</option>");
                    }
                }
            }
        }
    });
}