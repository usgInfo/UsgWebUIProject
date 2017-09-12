/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Misha
 */

function designationmaster()
{
    scrolupfunction();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=designationmaster()>Designation Master</a>');

    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateDesignation)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Designation Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colDesignation'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colDesignation").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colDesignation span").hasClass("glyphicon-minus-sign")) {
                $("#colDesignation").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colDesignation").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
//    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        //bank name branch name
        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        //$("#FieldGroup").append("<input type='hidden' id='bid' >");

        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel_InputWithSpan("Designation", "required", "designation", "Enter Designation", ""));
        //$("#Row1Col2").append(getLabel_InputWithSpan("Insurance Coverage:", "required", "insCoverage", "Enter ins Coverage ", "onkeypress='return numericVal(event)'"));
        $("#Row1Col2").append(getLabel("Designation Category", "required") + "" + getDropDown("designationCategory"));

        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        //$("#Row2Col1").append(getLabel_InputWithSpan("Grade Pay From: ", "required", "gradePayFrom", "EnterGrade Pay From", "onkeypress='return numericVal(event)'"));
        $("#Row2Col1").append(getLabel("Grade", "") + "" + getDropDown("grade"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Seniority Level:", "required", "seniorityLevel", "Enter Seniority Level  .Ex: 8", "onkeypress='return numericVal(event)' maxlength=1"));

        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel_InputWithSpan("Retirement Age: ", "required", "retirementAge", "Enter Retirement Age", "onkeypress='return numericVal(event)' maxlength=2"));
        $("#Row3Col2").append(getLabel_InputWithSpan("Qualification: ", "", "qualification", "Enter Qualification", "onkeypress='return validatealphanumeric(event)'"));
        getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel_InputWithSpan("Grade Pay: ", "", "gradePay", "", "readonly"));
        $("#Row4Col2").append(getLabel_InputWithSpan("Remarks: ", "", "remarks", "Enter Remarks", ""));
        getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel("Class", "required") + "" + getDropDown("clas"));
        $("#FieldGroup").append("<div id='panelRow7' class='' />");
        $("#panelRow7").append("<center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='saveDesignationDetails()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllDesignationData()' class='btn btn-warning mr5' id='resetButton' value='reset'>Reset</button></center>");
        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });




    }

    viewClassListOption();
    GradeListOptionForDesignation("", "grade", "Grade");
    viewDesignationList();
    DesignationCategoryListOptionForDesignation("", "designationCategory", "Designation Category");

    $("#grade").attr("onchange", "getGradePayValue()");
    setTimeout(function () {
        $("#pregsuccessBefore").text("");
    }, 50);

}

function getGradePayValue() {
    var id = getUserSessionElement("userId");
    $.get(server_base_url + "hrms/salary/Designation/getGradepayValue", {
        id: $("#grade").val(),
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
function saveDesignationDetails() {
    if (checkUserPrivelege(pvCreateDesignation)) {
        var designation = $('#designation').val();
        var designationCategory = $('#designationCategory').val();
        var grade = $('#grade').val();
        var seniorityLevel = $('#seniorityLevel').val();
        var retirementAge = $('#retirementAge').val();
        var qualification = $('#qualification').val();
        var gradePay = $('#gradePay').val();
        var remarks = $('#remarks').val();
        var clas = $('#clas').val();

        $("#pregsuccessBefore").text("");
        $("#designationErr").text("");
        $("#designationCategoryErr").text("");
        $("#seniorityLevelErr").text("");
        $("#retirementAgeErr").text("");
        $("#qualificationErr").text("");
        $("#gradePayErr").text("");
        $("#remarksErr").text("");
        $("#clasErr").text("");
        $("#gradeErr").text("");

        removeSomeClass("Row1Col1", "has-error");
        removeSomeClass("Row1Col2", "has-error");

        removeSomeClass("Row2Col1", "has-error");
        removeSomeClass("Row2Col2", "has-error");
        removeSomeClass("Row3Col1", "has-error");
        removeSomeClass("Row3Col2", "has-error");
        removeSomeClass("Row4Col1", "has-error");
        removeSomeClass("Row4Col2", "has-error");
        removeSomeClass("Row5Col1", "has-error");


        if (designationCategory == null || designationCategory == "" || designationCategory == "undefined" || designation == "" || designation == "undefined" || seniorityLevel == "" || seniorityLevel == "undefined" || retirementAge == "" || retirementAge == "undefined" || clas == "" || clas == "undefined" || clas == null)
        {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
            return false;
        } else
        {
            var flag = "y";
//        if (designation != "") {
//            // alert();
//            if (!designation.match(alphaNumericPattern())) {
//                // alert("Please Enter Valid Description.");
//                addSomeClass("Row1Col1", "has-error");
//                $("#designation").focus();
//                $("#designationErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Designation.</span>");



//                flag = "n";
//            } else
//            {
//                $("#designationErr").text("");

//
//                removeSomeClass("Row1Col1", "has-error");
//                //sendSectionData();


//            }
//        }
            if (seniorityLevel != "") {
                // alert();
                if (!seniorityLevel.match(numbervalidation())) {
                    // alert("Please Enter Valid Description.");
                    addSomeClass("Row2Col2", "has-error");
                    $("#seniorityLevel").focus();
                    // displaySmallErrorMessages("", );
                    $("#seniorityLevelErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Insurance Coverage.</span>");
                    // alert("Please Enter Valid Description.");
                    //return false;
                    flag = "n";
                } else
                {
                    $("#seniorityLevelErr").text("");
                    removeSomeClass("Row2Col2", "has-error");
                    //sendSectionData();
                }
            }

            if (retirementAge != "") {
// alert();
                if (!retirementAge.match(numbervalidation())) {
// alert("Please Enter Valid Description.");
                    addSomeClass("Row3Col1", "has-error");
                    $("#retirementAge").focus();
                    // displaySmallErrorMessages("", );
                    $("#retirementAgeErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Insurance Coverage.</span>");
                    // alert("Please Enter Valid Description.");
                    //return false;
                    flag = "n";
                } else
                {
                    $("#retirementAgeErr").text("");
                    removeSomeClass("Row3Col1", "has-error");
                    //sendSectionData();
                }
            }

            if (gradePay != "") {
// alert();
                if (!gradePay.match(numbervalidation())) {
// alert("Please Enter Valid Description.");
                    addSomeClass("Row4Col1", "has-error");
                    $("#gradePay").focus();
                    // displaySmallErrorMessages("", );
                    $("#gradePayErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Insurance Coverage.</span>");
                    // alert("Please Enter Valid Description.");
                    //return false;
                    flag = "n";
                } else
                {
                    $("#gradePayErr").text("");
                    removeSomeClass("Row4Col1", "has-error");
                    //sendSectionData();
                }
            }

            if (qualification != "") {
// alert();
                if (!qualification.match(alphaNumericPattern())) {
// alert("Please Enter Valid Description.");
                    addSomeClass("Row3Col2", "has-error");
                    $("#qualification").focus();
                    $("#qualificationErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Designation.</span>");
                    flag = "n";
                } else
                {
                    $("#qualificationErr").text("");

                    removeSomeClass("Row3Col2", "has-error");
                    //sendSectionData();
                }
            }
            if (flag == "n")
            {
                return false;
            }

        }
        var designationJson = {
            designation: designation,
            designationCategory: designationCategory,
            grade: grade,
            seniorityLevel: seniorityLevel,
            retirementAge: retirementAge,
            qualification: qualification,
            gradePay: gradePay,
            remarks: remarks,
            clas: clas
        }
        $.post(server_base_url + "hrms/salary/Designation/Save", {
            designationJson: JSON.stringify(designationJson),
            userId: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else if (data == duplicate_Message) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function () {
                    designationmaster();
                }, 500);
            } else if (data != null) {

                $("#designation").prop("disabled", true);
                $("#designationCategory").prop("disabled", true);
                $("#grade").prop("disabled", true);
                $("#seniorityLevel").prop("disabled", true);
                $("#retirementAge").prop("disabled", true);
                $("#qualification").prop("disabled", true);
                $("#gradePay").prop("disabled", true);
                $("#remarks").prop("disabled", true);

                $("#saveupdatebutton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function () {
                    designationmaster();
                }, 4000);

            } else {
                displaySmallErrorMessagesInRed("pregsuccessBefore", failMessage, "");
            }


        });
    }
}

function viewDesignationList()
{
    if (checkUserPrivelege(pvViewDesignation)) {
        $("#tableHeader").append("<div id='maritalListPanel1' />");
        $("#maritalListPanel1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Designations</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colDesignationList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colDesignationList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colDesignationList span").hasClass("glyphicon-minus-sign")) {
                $("#colDesignationList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colDesignationList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");
        $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displayBankTable' />");
//    $("#" + divId).text("").append("<div id='displayBankSubDiv' class = 'panel panel-primary'></div>");
//    $("#" + divId).text("").append("<div id='displayBankSubDiv' class = 'panel-heading'></div>");
//    $("#displayBankSubDiv").append("<table id='displayBankTable' class='table table-striped table-bclased'></table>");
        $("#displayBankTable").append("<thead class=''><tr id='displayDesignationId'>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Class</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Grade</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Retirement Age</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Seniority Level</th>");
        if (checkUserPrivelege(pvUpdateDesignation)) {
            $("#displayDesignationId").append("<th style='min-width:1%;width:80px;''><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteDesignation)) {
            $("#displayDesignationId").append("<th style='min-width:1%;width:80px;''><i class='fa' style='font-size:21px;'></i> Delete</th>");
        }
//            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Edit</th>"
//            + "<th style='min-width:15%;width:auto;align:center;'><i class='fa' style='font-size:21px;'></i> Delete</th>"

        $.get(server_base_url + "hrms/salary/Designation/ViewList", {
        }).done(function (bdata) {

            if (bdata == fail) {
                displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + NoDataFoundMessage + "<br /><br />");
                displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + NoDataFoundMessage + "<br /><br />");
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + unauthorizedMessage + "<br /><br />");
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + statusExceptionMessage + "<br /><br />");
            } else {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");

//                    for (var i = 0; i < bdata.length; i++) {
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var designationjson = {
                                designationId: bdata[i]._id.$oid,
                                designation: bdata[i].designation,
                                designationCategory: bdata[i].designationCategory,
                                grade: bdata[i].grade,
                                seniorityLevel: bdata[i].seniorityLevel,
                                remarks: bdata[i].remarks,
                                retirementAge: bdata[i].retirementAge,
                                qualification: bdata[i].qualification,
                                gradePay: bdata[i].gradePay,
                                clas: bdata[i].clas
                            }
                            designationjson = JSON.stringify(designationjson);
                            var gradeName = bdata[i].gradeName;
                            if (gradeName == undefined || gradeName == "undefined") {
                                gradeName = "";
                            }
                            $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"

                                    + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].clas + "</td>"
                                    + "<td style='cursor:pointer;'>" + gradeName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].retirementAge + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].seniorityLevel + "</td>");
                            if (checkUserPrivelege(pvUpdateDesignation)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editDesignation('" + encodeURI(designationjson) + "','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;&nbsp;<a type="button"  class="anchor_edit"style="align:center;"  >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteDesignation)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletedesignation','viewDesignationList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;&nbsp;<a type="button" class="anchor_delete"  style="align:center;" >Delete</a>' + "</td>");
                            }
                        }
                        $('#displayBankTable').dataTable();
                    }
                }
            }
        });
    }
}
function editDesignation(obj, id)
{
    if (checkUserPrivelege(pvUpdateDesignation)) {
        $('#designation').val("");
        $('#remarks').val("");
        $('#retirementAge').val("");
        $('#gradePay').val("");
        $('#clas').val("");
        $('#designationCategory').val("");
        $('#designationCategoryErr').text("");
        $('#grade').val("");
        $('#gradePay').val("");
        $('#qualification').val("");
        $('#seniorityLevel').val("");
        $("#pregsuccessBefore").text("");
        $("#designationErr").text("");
        $("#designationCategoryErr").text("");
        $("#seniorityLevelErr").text("");
        $("#retirementAgeErr").text("");
        $("#qualificationErr").text("");
        $("#gradePayErr").text("");
        $("#remarksErr").text("");
        $("#clasErr").text("");
        $("#gradeErr").text("");
        removeSomeClass("Row1Col1", "has-error");
        removeSomeClass("Row1Col2", "has-error");
        removeSomeClass("Row2Col1", "has-error");
        removeSomeClass("Row2Col2", "has-error");
        removeSomeClass("Row3Col1", "has-error");
        removeSomeClass("Row3Col2", "has-error");
        removeSomeClass("Row4Col1", "has-error");
        removeSomeClass("Row4Col2", "has-error");
        removeSomeClass("Row5Col1", "has-error");
        if (obj == null || obj == "" || obj == undefined) {
            return false;
        }

        obj = JSON.parse(decodeURI(obj));
        //alert(obj.disciplineName);
        $("#designation").val(obj.designation);
        $("#designationCategory").val(obj.designationCategory);
        $("#grade").val(obj.grade);
        $("#seniorityLevel").val(obj.seniorityLevel);
        $("#retirementAge").val(obj.retirementAge);
        $("#qualification").val(obj.qualification);
        $("#remarks").val(obj.remarks);
        // $("#clas").val(obj.clas);
        $("#clas option:contains('" + obj.clas + "')").attr("selected", "selected");
        $("#gradePay").val(obj.gradePay);

        $("#displayBankTableBody tr").css("background-color", "white");
        $("#displayBankTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#clas option:contains(" + obj.clas + ")").attr('selected', 'selected');
        $("#pregsuccessBefore").text("");

        $("#designation").prop("readonly", false);
        $("#designationCategory").prop("readonly", false);
        $("#grade").prop("readonly", false);
        $("#seniorityLevel").prop("readonly", false);
        $("#retirementAge").prop("readonly", false);
        $("#qualification").prop("readonly", false);
        $("#remarks").prop("readonly", false);
        $("#clas").prop("readonly", false);

        $("#panelRow7").text("").append("<center><button id='updateButton' onclick=updateDesignationDetails('" + id + "') class='btn btn-success mr5'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button  id='resetButton' class='btn btn-warning mr5'  onclick='designationmaster()'>Back</button></center>");
    }

}
function updateDesignationDetails(id) {
    if (checkUserPrivelege(pvUpdateDesignation)) {
        var designationId = id;
        var designation = $('#designation').val();
        var designationCategory = $('#designationCategory').val();
        var grade = $('#grade').val();
        var seniorityLevel = $('#seniorityLevel').val();
        var retirementAge = $('#retirementAge').val();
        var qualification = $('#qualification').val();
        var gradePay = $('#gradePay').val();
        var remarks = $('#remarks').val();
        var clas = $('#clas').val();

        $("#pregsuccessBefore").text("");
        $("#designationErr").text("");
        $("#designationCategoryErr").text("");
        $("#seniorityLevelErr").text("");
        $("#retirementAgeErr").text("");
        $("#qualificationErr").text("");
        $("#gradePayErr").text("");
        $("#remarksErr").text("");
        $("#clasErr").text("");
        $("#gradeErr").text("");

        removeSomeClass("Row1Col1", "has-error");
        removeSomeClass("Row1Col2", "has-error");

        removeSomeClass("Row2Col1", "has-error");
        removeSomeClass("Row2Col2", "has-error");
        removeSomeClass("Row3Col1", "has-error");
        removeSomeClass("Row3Col2", "has-error");
        removeSomeClass("Row4Col1", "has-error");
        removeSomeClass("Row4Col2", "has-error");
        removeSomeClass("Row5Col1", "has-error");


        if (designationCategory == null || designationCategory == "" || designationCategory == "undefined" || designation == "" || designation == "undefined" || seniorityLevel == "" || seniorityLevel == "undefined" || retirementAge == "" || retirementAge == "undefined" || clas == "" || clas == "undefined" || clas == null)
        {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
            return false;
        } else
        {
            var flag = "y";
//        if (designation != "") {
//            // alert();
//            if (!designation.match(alphaNumericPattern())) {
//                // alert("Please Enter Valid Description.");
//                addSomeClass("Row1Col1", "has-error");
//                $("#designation").focus();
//                $("#designationErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Designation.</span>");



//                flag = "n";
//            } else
//            {
//                $("#designationErr").text("");

//
//                removeSomeClass("Row1Col1", "has-error");
//                //sendSectionData();


//            }
//        }
            if (seniorityLevel != "") {
                // alert();
                if (!seniorityLevel.match(numbervalidation())) {
                    // alert("Please Enter Valid Description.");
                    addSomeClass("Row2Col2", "has-error");
                    $("#seniorityLevel").focus();
                    // displaySmallErrorMessages("", );
                    $("#seniorityLevelErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Insurance Coverage.</span>");
                    // alert("Please Enter Valid Description.");
                    //return false;
                    flag = "n";
                } else
                {
                    $("#seniorityLevelErr").text("");
                    removeSomeClass("Row2Col2", "has-error");
                    //sendSectionData();
                }
            }

            if (retirementAge != "") {
// alert();
                if (!retirementAge.match(numbervalidation())) {
// alert("Please Enter Valid Description.");
                    addSomeClass("Row3Col1", "has-error");
                    $("#retirementAge").focus();
                    // displaySmallErrorMessages("", );
                    $("#retirementAgeErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Insurance Coverage.</span>");
                    // alert("Please Enter Valid Description.");
                    //return false;
                    flag = "n";
                } else
                {
                    $("#retirementAgeErr").text("");
                    removeSomeClass("Row3Col1", "has-error");
                    //sendSectionData();
                }
            }

            if (gradePay != "") {
// alert();
                if (!gradePay.match(numbervalidation())) {
// alert("Please Enter Valid Description.");
                    addSomeClass("Row4Col1", "has-error");
                    $("#gradePay").focus();
                    // displaySmallErrorMessages("", );
                    $("#gradePayErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Insurance Coverage.</span>");
                    // alert("Please Enter Valid Description.");
                    //return false;
                    flag = "n";
                } else
                {
                    $("#gradePayErr").text("");
                    removeSomeClass("Row4Col1", "has-error");
                    //sendSectionData();
                }
            }

            if (qualification != "") {
// alert();
                if (!qualification.match(alphaNumericPattern())) {
// alert("Please Enter Valid Description.");
                    addSomeClass("Row3Col2", "has-error");
                    $("#qualification").focus();
                    $("#qualificationErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Designation.</span>");
                    flag = "n";
                } else
                {
                    $("#qualificationErr").text("");

                    removeSomeClass("Row3Col2", "has-error");
                    //sendSectionData();
                }
            }
            if (flag == "n")
            {
                return false;
            }

        }
        var designationJson = {
            designation: designation,
            designationCategory: designationCategory,
            grade: grade,
            seniorityLevel: seniorityLevel,
            retirementAge: retirementAge,
            qualification: qualification,
            gradePay: gradePay,
            remarks: remarks,
            clas: clas
        }
        $.post(server_base_url + "hrms/salary/Designation/Update", {
            designationJson: JSON.stringify(designationJson),
            designationId: designationId,
            userId: getUserSessionElement("userId")

        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function () {
                    designationmaster();
                }, 500);
            } else if (data == null) {
                displayErrorMessages("pregsuccessBefore", "No User available" + "<br/><br/>");
            } else if (data != null) {

                $("#designation").prop("disabled", true);
                $("#designationCategory").prop("disabled", true);
                $("#grade").prop("disabled", true);
                $("#seniorityLevel").prop("disabled", true);
                $("#retirementAge").prop("disabled", true);
                $("#qualification").prop("disabled", true);
                $("#gradePay").prop("disabled", true);
                $("#remarks").prop("disabled", true);

                $("#updateButton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);

                setTimeout(function () {
                    designationmaster();
                }, 4000);
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
            } else {
                displayErrorMessages("pregsuccessBefore", failMessage, "");
            }
        });

    }
}
function wipeAllDesignationData() {
    $('#designation').val("");
    $('#remarks').val("");
    $('#retirementAge').val("");
    $('#gradePay').val("");
    $('#clas').val("");
    $('#designationCategory').val("");
    $('#designationCategoryErr').text("");
    $('#grade').val("");
    $('#qualification').val("");
    $('#seniorityLevel').val("");
    $("#pregsuccessBefore").text("");
    $("#designationErr").text("");
    $("#designationCategoryErr").text("");
    $("#seniorityLevelErr").text("");
    $("#retirementAgeErr").text("");
    $("#qualificationErr").text("");
    $("#gradePayErr").text("");
    $("#remarksErr").text("");
    $("#clasErr").text("");
    $("#gradeErr").text("");
    removeSomeClass("Row1Col1", "has-error");
    removeSomeClass("Row1Col2", "has-error");
    removeSomeClass("Row2Col1", "has-error");
    removeSomeClass("Row2Col2", "has-error");
    removeSomeClass("Row3Col1", "has-error");
    removeSomeClass("Row3Col2", "has-error");
    removeSomeClass("Row4Col1", "has-error");
    removeSomeClass("Row4Col2", "has-error");
    removeSomeClass("Row5Col1", "has-error");
}
function deletedesignation(designationId) {
    if (checkUserPrivelege(pvDeleteDesignation)) {
        $("#pregsuccessBefore").text("");
        $.post(server_base_url + "hrms/salary/Designation/Delete", {
            designationId: designationId,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("ErrorDiv", "Invalid username / password");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("ErrorDiv", unauthorizedMessage);
            } else if (data == statusException) {
                displayErrorMessages("ErrorDiv", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("ErrorDiv", "No User available");
            } else if (data == delete_map) {
                // dispalyhrmsCommonReligion();
                displayErrorMessages("ErrorDiv", " " + delete_map_messages, "");
                setTimeout(function () {
                    viewDesignationList();
                }, 1000);
            } else {
                // alert();
                displaySuccessMessages("ErrorDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    viewDesignationList();
                }, 4000);

            }
        });
    }

}
function viewClassListOption(name) {
    $.get(server_base_url + "hrms/salary/Class/ViewList", {
    }).done(function (bdata) {
        if (bdata == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (bdata.statuscode == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            if (bdata != null) {
                $("#clas").append("<option value='' selected disabled>---- Select Class ----</option>");
                if (bdata.length > 0)
                    for (var i = 0; i < bdata.length; i++) {

                        $("#clas").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].name + "</option>");
                    }
                $("#clas").val(name);
            }
        }
    });
}
function GradeListOptionForDesignation(name, DivId, message) {
    $.get(server_base_url + "hrms/salary/Grade/ViewList", {
    }).done(function (bdata) {
        if (bdata != null) {
            $("#" + DivId).append("<option value='' selected disabled>---- Select " + message + " ----</option>");
            if (bdata.length > 0) {

                for (var i = 0; i < bdata.length; i++) {
                    $("#" + DivId).append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].gradeName + "</option>");
                }
            }
            $("#" + DivId).val(name);
        }
    });
}

function DesignationCategoryListOptionForDesignation(name, DivId, message) {
    var options = ["ASSISTANT PROFESSOR", "NON TEACHING", "OFFICER", "SMS/VAS/INSTRUCTOR", "TEACHING"];
    $("#" + DivId).text("").append("<option value='' selected disabled>---- Select " + message + " ----</option>");
    for (var i = 0; i < options.length; i++) {
        $("#" + DivId).append("<option  value='" + options[i] + "' >" + options[i] + "</option>");
    }
    $("#" + DivId).val(name);
}
