/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function createCourseMaster(divId) {
    scrolupfunction();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayAdmissionHorizontalBar()">Course Master</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayAdmissionModule()">Admission</a></label>>> <label><a href="javascript:admissionMasterTabs()">Admission Masters</a></label> >><label>CourseMaster</label>');
    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateQuarter)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Course Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colCourse'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colCourse").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colCourse span").hasClass("glyphicon-minus-sign")) {
                $("#colCourse").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colCourse").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
//    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        //DDO name Location name
        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        //$("#FieldGroup").append("<input type='hidden' id='bid' >");

        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("University", "required") + "" + getDropDown("university"));
        $("#Row1Col2").append(getLabel("Institution", "required") + "" + getDropDown("institution"));
        getLoggedInDDOInDropDown("university", "");
        getLoggedInLocationInDropDown("institution", "");

        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Course Code: ", "required", "courseCode", "Enter Course Id", ""));
        $("#Row2Col2").append(getLabel_InputWithSpan("Course Name:", "required", "courseName", "Enter Course Name", ""));

        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        getSingleColumnRowCheckBoxWithLable("fieldGroup", "Mid Exam", "", "Row3Col1", "midSem", "");
        $("#FieldGroup").append("<div id='panelRow7' class='' />");

        $("#panelRow7").append("<center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='saveCourseMaster()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllQuarterData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center>");

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });



    }

    //viewallCategoriess();
    getConditionOption();
    courseMasterListTable();
    viewOption("addmission/masters/CourseMaster/ViewList", "", "ddoName", "ddo", "DDO");

}
//To save course master data to collection
function saveCourseMaster() {
    //if (checkUserPrivelege(pvCreateCourse)) {
    var ddo = $('#ddo').val();
    var location = $('#location').val();
    var courseCode = $('#courseCode').val();
    var courseName = $('#courseName').val();
    var isMidExamApplicable;
    if ($('#midSem').prop('checked')) {
        isMidExamApplicable = "Yes";
    } else
    {
        isMidExamApplicable = "No";
    }
    $("#pregsuccessBefore").text("");
    $("#ddoErr").text("");
    $("#locationErr").text("");
    $("#courseCodeNoErr").text("");
    $("#courseNameErr").text("");
    $("#cisMidExamApplicableErr").text("");


    removeSomeClass("Row1Col1", "has-error");
    removeSomeClass("Row1Col2", "has-error");

    removeSomeClass("Row2Col2", "has-error");
    removeSomeClass("Row2Col2", "has-error");
    removeSomeClass("Row2Col1", "has-error");
    removeSomeClass("Row3Col1", "has-error");

//    if (ddo == null || ddo == "" || ddo == "undefined" || location == "" || location == "undefined" || courseCode == "" || courseCode == "undefined" || courseName == "" || courseName == "undefined")
//    {
//        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
//        //  return false;
//    } else
//    {
//        var flag = "y";
//        if (ddo != "" && ddo != null) {
//            // alert();
//            $("#ddoErr").text("");
//            removeSomeClass("Row1Col1", "has-error");
//        } else {
//            $("#ddoErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid DDO.</span>");
//            $("#ddo").focus();
//            flag = "n";
//            addSomeClass("Row1Col1", "has-error");
//        }
//    }
//        if (location != ""&& location != null) {
//            // alert();
//            if (!location.match(locationValidation()))
//            {
//                addSomeClass("Row2Col1", "has-error");
//                $("#location").focus();
//                $("#locationErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Location Name.</span>");
//                flag = "n";
//            } else
//            {
//                $("#locationErr").text("");
//                removeSomeClass("Row2Col1", "has-error");
//                //sendSectionData();
//            }
//        }
//        if (courseCode != "")
//        {
//            // alert();
//            if (!courseCode.match(numbervalidation())) {
//                // alert("Please Enter Valid Description.");
//                addSomeClass("Row2Col2", "has-error");
//                $("#courseCode").focus();
//                $("#courseCodeErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid courseCode.</span>");
//                flag = "n";
//            } else
//            {
//                $("#courseCodeErr").text("");
//                removeSomeClass("Row2Col2", "has-error");
//            }
//        }
//        if (courseName != "")
//        {
//            // alert();
//            if (!courseName.match(numbervalidation())) {
//                // alert("Please Enter Valid Description.");
//                addSomeClass("Row2Col2", "has-error");
//                $("#courseName").focus();
//                $("#courseNameErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Course Name.</span>");
//                flag = "n";
//            } else
//            {
//                $("#courseNameErr").text("");
//                removeSomeClass("Row2Col2", "has-error");
//            }
//        }
//        if (flag == "n")
//        {
//            return false;
//        }
    var CourseMasterJson = {
//        ddo: ddo,
//        location: location,
        ddo: getUserSessionElement(seDDOId),
        location: getUserSessionElement(seLocationName),
        courseCode: courseCode,
        courseName: courseName,
        isMidExamApplicable: isMidExamApplicable,

    }
    $.post(server_base_url + "admission/masters/Course/Save", {
        courseJson: JSON.stringify(CourseMasterJson),
        loginUserId: getUserSessionElement("userId")
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
                createCourseMaster();
            }, 500);
        } else if (data != null) {
            $("#ddo").prop("disabled", true);
            $("#location").prop("disabled", true);
            $("#courseCode").prop("disabled", true);
            $("#courseName").prop("disabled", true);
            $("#isMidExamApplicable").prop("disabled", true);


            $("#saveupdatebutton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function () {
                createCourseMaster();
            }, 4000);

        } else {
            displayErrorMessages("pregsuccessBefore", failMessage, "");
        }
    });
    // }
}



function wipeAllCourseMaterData() {
    $("#ddo").val("");
    $("#location").val("");
    $("#coursId").val("");
    $("#courseName").val("");
    $("#isMidExamApplicable").val("");


    $("#pregsuccessBefore").text("");
    $("#ddoErr").text("");
    $("#locationErr").text("");
    $("#coursIdErr").text("");
    $("#courseNameErr").text("");
    $("#isMidExamApplicable").text("");


    removeSomeClass("Row1Col1", "has-error");
    removeSomeClass("Row1Col2", "has-error");

    removeSomeClass("Row2Col2", "has-error");
    removeSomeClass("Row2Col2", "has-error");
    removeSomeClass("Row2Col1", "has-error");
    removeSomeClass("Row3Col1", "has-error");
}

//To Display all course master data

function courseMasterListTable() {

//    if (checkUserPrivelege(pvViewCourse)) {
    $("#tableHeader").append("<div id='maritalListPanel1'/>");
    $("#maritalListPanel1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Course Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colCourseList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colCourseList").click(function () {
        $("#collapseOne3").toggle();
        if ($("#colCourseList span").hasClass("glyphicon-minus-sign")) {
            $("#colCourseList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colCourseList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").append("<div  id='ErrorDiv'/>");
    $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
    $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displayCourseTable' />");

    $("#displayCourseTable").append("<thead class=''><tr id='courseTableHeadId'>"

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>CourseId</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Course Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Mid  Exam Applicable</th>");
    //if (checkUserPrivelege(pvUpdateCourseMaster)) {
    $("#courseTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
    //}
    // if (checkUserPrivelege(pvDeleteCourseMaster)) {
    $("#courseTableHeadId").append("<th style='min-width:1%;width:80px;''><i class='fa' style='font-size:21px;'></i> Delete</th>");
    // }
  
    $.get(server_base_url + "admission/masters/Course/Fetch", {
        ddo: getUserSessionElement(seDDOId),
        location: getUserSessionElement(seLocationId)
    }).done(function (bdata) {

        bdata = JSON.parse(bdata)

        //     bdata = JSON.parse(bdata)

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + noDataAvailable + "");
        } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + unauthorizedMessage + "");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + noDataAvailable + "");
        } else {
            if (bdata != null) {


                if (bdata.length > 0) {

                    var sno = 0;
                    $("#displayCourseTable").append("<tbody id='displayCourseTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var coursejson = {
                            bid: bdata[i]._id.$oid,
                            ddo: bdata[i].ddo,
                            location: bdata[i].location,
                            courseCode: bdata[i].courseCode,
                            courseName: bdata[i].courseName,
                            isMidExamApplicable: bdata[i].isMidExamApplicable,

                        };
                        coursejson = JSON.stringify(coursejson);
                        $("#displayCourseTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].ddo + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].location + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].courseCode + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].courseName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].isMidExamApplicable + "</td>");
                        // if (checkUserPrivelege(pvUpdateCourseMaster)) {
                        $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editCourseMaster('" + encodeURI(coursejson) + "','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;&nbsp;<a   class="anchor_edit"style="align:center;"  >Edit</a>' + "</td>");
                        // }
                        // if (checkUserPrivelege(pvDeleteCourseMaster)) {
                        $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteCourse','','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;&nbsp;<a  class="anchor_delete"  style="align:center;" >Delete</a>' + "</td>");
                        //  }
                    }
                    $('#displayCourseTable').dataTable();
                }
            }
        }
    });
//    }
}

function editCourseMaster(obj, id)
{
//    if (checkUserPrivelege(pvUpdateCourseMaster)) {
    scrolupfunction();
    $("#ddo").val("");
    $("#location").val("");
    $("#courseCode").val("");
    $("#courseName").val("");
    $("#isMidExamApplicable").val("");


    $("#ddoErr").text("");
    $("#locationErr").text("");
    $("#courseCodeErr").text("");
    $("#courseNameErr").text("");
    $("#isMidExamApplicableErr").text("");


    removeSomeClass("Row1Col1", "has-error");
    removeSomeClass("Row1Col2", "has-error");

    removeSomeClass("Row2Col1", "has-error");
    removeSomeClass("Row2Col2", "has-error");
    //removeSomeClass("Row2Col1", "has-error");
    removeSomeClass("Row3Col1", "has-error");

    if (obj == null || obj == "" || obj == undefined) {
        return false;
    }

    obj = JSON.parse(decodeURI(obj));

    $("#ddo").val(obj.ddo);
    $("#location").val(obj.location);
    $("#courseCode").val(obj.courseCode);
    $("#courseName").val(obj.courseName);
    $("#carpetArea").val(obj.carpetArea);
    $("#isMidExamApplicableErr").val(obj.isMidExamApplicableErr);
    $("#isMidExamApplicableErr option:contains(" + obj.category + ")").attr('selected', 'selected');

    $("#displayCourseTableBody tr").css("background-color", "white");
    $("#displayCourseTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");

    $("#pregsuccessBefore").text("");
    $("#ddo").prop("readonly", false);
    $("#location").val(obj.city).prop("readonly", false);
    $("#courseCode").prop("readonly", false);
    $("#courseName").prop("readonly", false);
    $("#isMidExamApplicableErr").prop("readonly", false);

    $("#panelRow7").text("").append("<center><button id='updateButton' onclick=updateCourseMaster('" + id + "') class='btn btn-success mr5'>Update</button>&nbsp&nbsp&nbsp;<button  id='ddoUpdateReset' class='btn btn-warning mr5'  onclick='createCourseMaster()'>Back</button></center>");
}
//}

function updateCourseMaster(id) {
   
//    if (checkUserPrivelege(pvUpdateCourse)) {
    var id = id;
    var ddo = $('#ddo').val();
    var location = $('#location').val();
    var courseCode = $('#courseCode').val();
    var courseName = $('#courseName').val();
    var isMidExamApplicable;
    if ($('#midSem').prop('checked')) {
        isMidExamApplicable = "Yes";
    } else
    {
        isMidExamApplicable = "No";
    }
    var courseJson = {
        ddo: getUserSessionElement(seDDOId),
        location: getUserSessionElement(seLocationName),
        courseCode: courseCode,
        courseName: courseName,
        isMidExamApplicable: isMidExamApplicable,

    }
    $.post(server_base_url + "/admission/masters/Course/Update", {
        courseJson: JSON.stringify(courseJson),
        primaryKey: id,
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
                createCourseMaster();
            }, 500);
        } else if (data != null) {
            $("#ddo").prop("disabled", true);
            $("#location").prop("disabled", true);
            $("#courseCode").prop("disabled", true);
            $("#courseName").prop("disabled", true);
            $("#isMidExamApplicable").prop("disabled", true);


            $("#saveupdatebutton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages("pregsuccessBefore", updateSuccessMessage, "");
            setTimeout(function () {
                createCourseMaster();
            }, 4000);

        } else {
            displayErrorMessages("pregsuccessBefore", failMessage + "");
        }
    });
}
//}
function deleteCourse(id) {
//    if (checkUserPrivelege(pvDeleteCourse)) {
    $("#pregsuccessBefore").text("");
    $.post(server_base_url + "/admission/masters/Course/Delete", {
        loginUserId: getUserSessionElement("userId"),
        primaryKey: id
   }).done(function (data) {
        successOrErrorMeassages("", createCourseMaster, data, "Delete", "successMessageInTable");
    });
}

//}
function getConditionOption(condition) {
    $("#condition").append("<option value='' selected disabled>---- Select Condition ----</option>");
    if (condition == "Good") {
        $("#condition").append("<option value='Good' selected>Good</option>");
        $("#condition").append("<option value='Bad' >Bad</option>");
    } else if (condition == "Bad") {
        $("#condition").append("<option value='Good'>Good</option>");
        $("#condition").append("<option value='Bad' selected>Bad</option>");
    } else {
        $("#condition").append("<option value='Good'>Good</option>");
        $("#condition").append("<option value='Bad'>Bad</option>");
    }

}

