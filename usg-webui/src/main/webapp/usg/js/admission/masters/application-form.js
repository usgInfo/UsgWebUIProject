/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function applicationForm(divId) {
    scrolupfunction();
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayAdmissionHorizontalBar()">Admission</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayAdmissionHorizontalBar()">Admission Process ></a></label> <label><a href="javascript:hrmsEmployeeMasterTabs()">Application Form</a></label> > <label>Admission Form</label>');
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateEmployee)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Application Form</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='empMaster'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
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
        //$("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
        //$("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");

        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        $("#panelMainBody").append("<div id='panelRow2' class='row' />");

        $("#panelMainBody").append("<div id='panelRow3' class='row' />");
        $("#panelRow3").append("<div id='FieldGroup11' class='form-group' />");

        getTwoColumnInRow("FieldGroup11", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("Name of The Candidate", "required") + "" + getInputwithErrSpan("candidateName", "", "", ""));
        $("#Row1Col2").append(getLabel("Mother's Name", "required") + "" + getInputwithErrSpan("motherName", "", "", ""));

        getTwoColumnInRow("FieldGroup11", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel("Father's Name", "required") + "" + getInputwithErrSpan("fatherName", "", "", ""));
        $("#Row2Col2").append("<label class='control-label'>Date of Birth<span class='require'>*</span></label><input type='text' class='form-control ' placeholder='Click here to enter DOB' onkeypress='return false' id='dob'/>");

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

        getTwoColumnInRow("FieldGroup11", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Programme Name", "required") + "" + getDropDown("programmeName"));
        $("#Row3Col2").append(getLabel("College Name", "required") + "" + getDropDown("collegeName"));

        getTwoColumnInRow("FieldGroup11", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel("Form Number", "required") + "" + getInputwithErrSpan("formNumber", "", "", ""));
        $("#Row4Col2").append(getLabel("Phone Number", "required") + "" + getInputwithErrSpan("phoneNumber", "", "", ""));

        getTwoColumnInRow("FieldGroup11", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel("Gender", "required") + "" + getDropDown("gender"));
        $("#Row5Col2").append(getLabel("Category", "required") + "" + getDropDown("category"));

        getTwoColumnInRow("FieldGroup11", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel("Special Claim", "required") + "" + getDropDown("specialClaim"));
        $("#Row6Col2").append(getLabel("Email Address", "required") + "" + getInputwithErrSpan("email", "", "", ""));

        getTwoColumnInRow("FieldGroup11", "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel("Nationality", "required") + "" + getInputwithErrSpan("nationality", "", "", ""));
        $("#Row7Col2").append("<label class='control-label'>Address</label><textarea type='text' id='address'  class='form-control' placeholder='Enter Address'></textarea>");

        //Education Details
        $("#panelMainBody").append("<label><u><h3>Education Details</h3><u></label><hr><div id='panelRow12' class='row' />");
        $("#panelRow12").append("<div id='FieldGroup12' class='form-group' />");
        getTwoColumnInRow("FieldGroup12", "Row8", "Row8Col1", "Row8Col2");
        $("#Row8Col1").append(getLabel("Class X Board", "required") + "" + getDropDown("boardX"));
        $("#Row8Col2").append(getLabel("Class X Passing Year", "required") + "" + getInputwithErrSpan("passingYearX", "", "", ""));

        getTwoColumnInRow("FieldGroup12", "Row9", "Row9Col1", "Row9Col2");
        $("#Row9Col1").append(getLabel("Marks Obtained in Class X  ", "required") + "" + getInputwithErrSpan("marksObtainedX", "", "", ""));
        $("#Row9Col2").append(getLabel("Out of in Class X", "required") + "" + getInputwithErrSpan("marksOutOfX", "", "", ""));

        getTwoColumnInRow("FieldGroup12", "Row10", "Row10Col1", "Row10Col2");
        $("#Row10Col1").append(getLabel("Class XII Board", "required") + "" + getDropDown("boardXII"));
        $("#Row10Col2").append(getLabel("Class XII Passing Year", "required") + "" + getInputwithErrSpan("passingYearXII", "", "", ""));

        getTwoColumnInRow("FieldGroup12", "Row11", "Row11Col1", "Row11Col2");
        $("#Row11Col1").append(getLabel("Marks Obtained in Class XII  ", "required") + "" + getInputwithErrSpan("marksObtainedXII", "", "", ""));
        $("#Row11Col2").append(getLabel("Out of in Class XII", "required") + "" + getInputwithErrSpan("marksOutOfXII", "", "", ""));

        //Graduation Details
        $("#panelMainBody").append("<label><u><h3>Graduation Details</h3><u></label><hr><div id='panelRow14' class='row' />");
        $("#panelRow14").append("<div id='FieldGroup14' class='form-group' />");
        getTwoColumnInRow("FieldGroup14", "Row12", "Row12Col1", "Row12Col2");
        $("#Row12Col1").append(getLabel("Name of Degree", "required") + "" + getInputwithErrSpan("degreeName", "", "", ""));
        $("#Row12Col2").append(getLabel("Branch / Subject of specialization", "required") + "" + getInputwithErrSpan("specialization", "", "", ""));

        getTwoColumnInRow("FieldGroup14", "Row14", "Row14Col1", "Row14Col2");
        $("#Row14Col1").append(getLabel("Duration of Degree in Years", "required") + "" + getInputwithErrSpan("degreeDuration", "", "", ""));
        $("#Row14Col2").append(getLabel("Medium of Instruction", "required") + "" + getDropDown("medium"));

        getTwoColumnInRow("FieldGroup14", "Row15", "Row15Col1", "Row15Col2");
        $("#Row15Col1").append(getLabel("Aggregate Total Percentage", "required") + "" + getInputwithErrSpan("gradPercentage", "", "", ""));
        $("#Row15Col2").append(getLabel("Mode of Study", "required") + "" + getDropDown("mode"));

        getTwoColumnInRow("FieldGroup14", "Row16", "Row16Col1", "Row16Col2");
        $("#Row16Col1").append(getLabel("Name of University", "required") + "" + getInputwithErrSpan("universityName", "", "", ""));
        $("#Row16Col2").append(getLabel("Name of College", "required") + "" + getInputwithErrSpan("collegeName", "", "", ""));

        getTwoColumnInRow("FieldGroup14", "Row17", "Row17Col1", "Row17Col2");
        $("#Row17Col1").append(getLabel("University Enrollment Number", "required") + "" + getInputwithErrSpan("univEnrollNum", "", "", ""));
        $("#Row17Col2").append(getLabel("City", "required") + "" + getInputwithErrSpan("city", "", "", ""));

        //Post-Graduation Details
        $("#panelMainBody").append("<label><u><h3>Post Graduation Details</h3><u></label><hr><div id='panelRow15' class='row' />");
        $("#panelRow15").append("<div id='FieldGroup15' class='form-group' />");
        getTwoColumnInRow("FieldGroup15", "Row18", "Row18Col1", "Row18Col2");
        $("#Row18Col1").append(getLabel("Name of Degree", "required") + "" + getInputwithErrSpan("pgdegreeName", "", "", ""));
        $("#Row18Col2").append(getLabel("Branch / Subject of specialization", "required") + "" + getInputwithErrSpan("pgspecialization", "", "", ""));

        getTwoColumnInRow("FieldGroup15", "Row19", "Row19Col1", "Row19Col2");
        $("#Row19Col1").append(getLabel("Duration of Degree in Years", "required") + "" + getInputwithErrSpan("pgdegreeDuration", "", "", ""));
        $("#Row19Col2").append(getLabel("Medium of Instruction", "required") + "" + getDropDown("pgmedium"));

        getTwoColumnInRow("FieldGroup15", "Row20", "Row20Col1", "Row20Col2");
        $("#Row20Col1").append(getLabel("Aggregate Total Percentage", "required") + "" + getInputwithErrSpan("pggradPercentage", "", "", ""));
        $("#Row20Col2").append(getLabel("Mode of Study", "required") + "" + getDropDown("pgmode"));

        getTwoColumnInRow("FieldGroup15", "Row21", "Row21Col1", "Row21Col2");
        $("#Row21Col1").append(getLabel("Name of University", "required") + "" + getInputwithErrSpan("pguniversityName", "", "", ""));
        $("#Row21Col2").append(getLabel("Name of College", "required") + "" + getInputwithErrSpan("pgcollegeName", "", "", ""));

        getTwoColumnInRow("FieldGroup15", "Row22", "Row22Col1", "Row22Col2");
        $("#Row22Col1").append(getLabel("University Enrollment Number", "required") + "" + getInputwithErrSpan("pgunivEnrollNum", "", "", ""));
        $("#Row22Col2").append(getLabel("City", "required") + "" + getInputwithErrSpan("pgcity", "", "", ""));


        getOneColumnInRow("FieldGroup31", "Row30", "Row30Col1");
        getOneColumnInRow("FieldGroup31", "Row30a", "Row30Col2");
        $("#panelMainBody").append("<div id='panelRow27a' class='row form-group' />");
        getOneColumnInRow("panelRow27a", "Row36a", "Row36aCol1");
        getOneColumnInRow("panelRow27a", "Row36b", "Row36aCol2");

        $("#panelMainBody").append("<div id='HeadsMessagesDivBeforeSaveButton' />");
        $("#panelMainBody").append("<div id='panelRow28' class='row' />");
        $("#panelRow28").append("<div  class='col-xs-12'/><center><button type='button' id='submit' class='btn btn-success mr5 '  onclick='saveFormDetails()' >Submit</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick=applicationForm('dashboardBodyMainDiv') class='btn btn-warning mr5' name='reset' value='reset'>RESET</button></center></div>");

        getModeOfStudy("", "mode");
        getModeOfStudy("", "pgmode");
        getGenderOption("", "gender");
        getCategoryOptionsForTables("", "category", "Category");
        getMediumOfInstruction("", "medium");
        getMediumOfInstruction("", "pgmedium");

        $("#tableHeader").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Candidate(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='empMasterList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
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
        viewCandidateList('listpanelMainBody');

    }
}

function saveFormDetails() {

    var formJson = {
        candidateName: $("#candidateName").val(),
        motherName: $("#motherName").val(),
        fatherName: $("#fatherName").val(),
        dob: $("#dob").val(),
        programmeName: $("#programmeName").val(),
        collegeName: $("#collegeName").val(),
        formNumber: $("#formNumber").val(),
        phoneNumber: $("#phoneNumber").val(),
        gender: $("#gender").val(),
        category: $("#category").val(),
        specialClaim: $("#specialClaim").val(),
        emailAddress: $("#email").val(),
        nationality: $("#nationality").val(),
        address: $("#address").val(),
//            //For Class 10th details
        board_X: $("#boardX").val(),
        passingYear_X: $("#passingYearX").val(),
//            marksX: $("#marksObtainedX").val(),
//            marksOutOfX: $("#marksOutOfX").val(),
//            //For Class 12th details
        board_XII: $("#boardXII").val(),
        passingYear_XII: $("#passingYearXII").val(),
//            marksXII: $("#marksObtainedXII").val(),
//            marksOutOfXII: $("#marksOutOfXII").val(),
//            //For Graduation Details
        nameOfDegree_grad: $("#degreeName").val(),
        specialization_grad: $("#specialization").val(),
        duration_grad: $("#degreeDuration").val(),
        medium_grad: $("#medium").val(),
        percentage_grad: $("#gradPercentage").val(),
        mode_grad: $("#mode").val(),
        nameOfUniversity_grad: $("#universityName").val(),
        nameOfCollege_grad: $("#gcollegeName").val(),
        univ_rollNum_grad: $("#univEnrollNum").val(),
        city_grad: $("#city").val(),
        //For Post-Graduation Details
        nameOfDegree_pg: $("#pgdegreeName").val(),
        specialization_pg: $("#pgspecialization").val(),
        duration_pg: $("#pgdegreeDuration").val(),
        medium_pg: $("#pgmedium").val(),
        percentage_pg: $("#pggradPercentage").val(),
        mode_pg: $("#pgmode").val(),
        nameOfUniversity_pg: $("#pguniversityName").val(),
        nameOfCollege_pg: $("#pgcollegeName").val(),
        univ_rollNum_pg: $("#pgunivEnrollNum").val(),
        city_pg: $("#pgcity").val()

    }
    alert(JSON.stringify(formJson));
    $.post(server_base_url + "/usg/admission/ApplicationFormSave", {
        formJson: JSON.stringify(formJson),
        userid: getUserSessionElement("userId"),
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessages("panelRow", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displaySmallErrorMessages("panelRow", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessages("panelRow", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessages("panelRow", "No User available" + "<br/><br/>");
        } else {
            scrolupfunction();
            displaySuccessMessages("panelRow", successMessage, "");
            setTimeout(function () {
                applicationForm("dashboardBodyMainDiv");
            }, 1500);
        }
    }
    );
}

function viewCandidateList(divId)
{
    $("#" + divId).text("").append("<div id='ErrorDiv'/>");
    $("#" + divId).append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='viewList'/>");
    $("#viewList").append("<div class='table-responsive' id='viewSectionTableDiv' />");
    $("#viewList").append("<div class='ErrorMsgDivInEmployee' id='viewSectionTableDiv' />");
    $("#viewSectionTableDiv").append("<table class='table table-bordered' id='displayBankTable' />");
    $("#displayBankTable").append("<thead class=''><tr id='tableheadrowid'>"

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Candidate Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Form Number</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Programme Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>College Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Date of Birth</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Phone Number</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Email</th>");
    $("#tableheadrowid").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
    $("#tableheadrowid").append("<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>");
    $("#tableheadrowid").append("</tr></thead>");

    $.get(server_base_url + "/usg/admission/ApplicationForm_FetchAllService", {
    }).done(function (bdata) {

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
                bdata = JSON.parse(bdata);
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var formjson = {
                            candidateId: bdata[i]._id.$oid,
                            candidateName: bdata[i].candidateName,
                            motherName: bdata[i].motherName,
                            fatherName: bdata[i].fatherName,
                            dob: bdata[i].dob,
                            programmeName: bdata[i].programmeName,
                            collegeName: bdata[i].collegeName,
                            formNumber: bdata[i].formNumber,
                            phoneNumber: bdata[i].phoneNumber,
                            gender: bdata[i].gender,
                            category: bdata[i].category,
                            specialClaim: bdata[i].specialClaim,
                            emailAddress: bdata[i].emailAddress,
                            nationality: bdata[i].nationality,
                            address: bdata[i].address,
                            //For Class 10th details
                            board_X: bdata[i].boardX,
                            passingYear_X: bdata[i].passingYearX,
//                          marksX: bdata[i].marksObtainedX,
//                          marksOutOfX: bdata[i].marksOutOfX,
//                          //For Class 12th details
                            board_XII: bdata[i].boardXII,
                            passingYear_XII: bdata[i].passingYearXII,
//                          marksXII: bdata[i].marksObtainedXII,
//                          marksOutOfXII: bdata[i].marksOutOfXII,
//                          //For Graduation Details
                            nameOfDegree_grad: bdata[i].degreeName,
                            specialization_grad: bdata[i].specialization,
                            duration_grad: bdata[i].degreeDuration,
                            medium_grad: bdata[i].medium,
                            percentage_grad: bdata[i].gradPercentage,
                            mode_grad: bdata[i].mode,
                            nameOfUniversity_grad: bdata[i].universityName,
                            nameOfCollege_grad: bdata[i].gcollegeName,
                            univ_rollNum_grad: bdata[i].univEnrollNum,
                            city_grad: bdata[i].city,
                            //For Post-Graduation Details
                            nameOfDegree_pg: bdata[i].pgdegreeName,
                            specialization_pg: bdata[i].pgspecialization,
                            duration_pg: bdata[i].pgdegreeDuration,
                            medium_pg: bdata[i].pgmedium,
                            percentage_pg: bdata[i].pggradPercentage,
                            mode_pg: bdata[i].pgmode,
                            nameOfUniversity_pg: bdata[i].pguniversityName,
                            nameOfCollege_pg: bdata[i].pgcollegeName,
                            univ_rollNum_pg: bdata[i].pgunivEnrollNum,
                            city_pg: bdata[i].pgcity

                        };
                        formjson = JSON.stringify(formjson);
                        $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].candidateName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].formNumber + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].programmeName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].collegeName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].dob + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].phoneNumber + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].emailAddress + "</td>");
                        $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=fetchCandidateFormToUpdate('" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>");
                        $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteCandidateForm','','" + bdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td>");
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

function fetchCandidateFormToUpdate(candidateId) {
    $("#displayBankTableBody tr").css("background-color", "white");
    $("#displayBankTableBody tr" + "#" + candidateId).css("background-color", "rgba(10, 129, 156, 0.3)");
    $.get(server_base_url + "/usg/admission/ApplicationFormFetchForUpdate", {
        candidateId: candidateId
    }).done(function (pdata) {
        //alert(pdata);
        pdata = encodeURI(JSON.stringify(pdata));
        updateCandidateForm(pdata);
    });
}

function updateCandidateForm(obj) {
    //obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#candidateId").val(obj._id.$oid);
    $("#gradePay").val(obj.gradePay);
    $("#candidateName").val(obj.candidateName);
    $("#motherName").val(obj.motherName);
    $("#fatherName").val(obj.fatherName);
    $("#dob").val(obj.dob);
    $("#programmeName").val(obj.programmeName);
    $("#collegeName").val(obj.collegeName);
    $("#formNumber").val(obj.formNumber);
    $("#phoneNumber").val(obj.phoneNumber);
    $("#gender").val(obj.gender);
    $("#category").val(obj.category);
    $("#specialClaim").val(obj.specialClaim);
    $("#email").val(obj.emailAddress);
    $("#nationality").val(obj.nationality);
    $("#address").val(obj.address);
//            //For Class 10th details
    $("#boardX").val(obj.board_X);
    $("#passingYearX").val(obj.passingYear_X);
//            $("#marksObtainedX").val( obj.marksX);
//            $("#marksOutOfX").val(obj.marksOutOfX);
//            //For Class 12th details
    $("#boardXII").val(obj.board_XII);
    $("#passingYearXII").val(obj.passingYear_XII);
//             $("#marksObtainedXII").val(obj.marksXII);
//         $("#marksOutOfXII").val(obj.marksOutOfXII),
//            //For Graduation Details
    $("#degreeName").val(obj.nameOfDegree_grad),
            $("#specialization").val(obj.specialization_grad),
            $("#degreeDuration").val(obj.duration_grad),
            $("#medium").val(obj.medium_grad);
    $("#gradPercentage").val(obj.percentage_grad);
    $("#mode").val(obj.mode_grad);
    $("#universityName").val(obj.nameOfUniversity_grad);
    $("#gcollegeName").val(obj.nameOfCollege_grad);
    $("#univEnrollNum").val(obj.univ_rollNum_grad);
    $("#city").val(obj.city_grad);
    //For Post-Graduation Details
    $("#pgdegreeName").val(obj.nameOfDegree_pg);
    $("#pgspecialization").val(obj.specialization_pg);
    $("#pgdegreeDuration").val(obj.duration_pg);
    $("#pgmedium").val(obj.medium_pg);
    $("#pggradPercentage").val(obj.percentage_pg);
    $("#pgmode").val(obj.mode_pg);
    $("#pguniversityName").val(obj.nameOfUniversity_pg);
    $("#pgcollegeName").val(obj.nameOfCollege_pg);
    $("#pgunivEnrollNum").val(obj.univ_rollNum_pg);
    $("#pgcity").val(obj.city_pg);
    
    $.post(server_base_url + "hrms/salary/Employee/ImageSearch", {
        employeeId: obj._id.$oid
    }).done(function (data) {
        
    });
}

function deleteCandidateForm(candidateId) {

    $.post(server_base_url + "/usg/admission/ApplicationFormDeleteService", {
        candidateId: candidateId,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail || data.statuscode == fail) {
            displayErrorMessages("ErrorDiv", "This Employee  " + delete_map_message, "");
            setTimeout(function () {
                viewCandidateList('listpanelMainBody');
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
                viewCandidateList("listpanelMainBody");
            }, 4000);
        }
    });
}

function getModeOfStudy(name, DivId) {
    var mode = ["Full Time", "Part Time", "Correspondance"];
    $("#" + DivId).text("").append("<option value='' selected >---- Select Mode of Study ----</option>");
    for (var i = 0; i < mode.length; i++) {
        $("#" + DivId).append("<option  value='" + mode[i] + "' >" + mode[i] + "</option>");
    }
    $("#" + DivId).val(name);
}

function getMediumOfInstruction(name, DivId) {
    var medium = ["English", "Hindi", "Others"];
    $("#" + DivId).text("").append("<option value='' selected >---- Select Medium of Instruction ----</option>");
    for (var i = 0; i < medium.length; i++) {
        $("#" + DivId).append("<option  value='" + medium[i] + "' >" + medium[i] + "</option>");
    }
    $("#" + DivId).val(name);
}