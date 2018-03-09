/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author KC
 */
function learningCentreMaster(divId)
{
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayAdmissionModule()">Admission</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="admissionMasterTabs()">Admission Masters</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=learningCentreMaster("dashboardBodyMainDiv")>Learning Centre</a>');
    createForm(divId, innerDivCF, "Learning Centre", FieldGroupForCF, successMsgDivCF);
    $("#financialYearDiv").remove();
    if (true) {
        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        getSingleColumnRowInputTextboxWithLable("Row0", "Institution", "", "Row0Col1", "institution", "readonly");
//     getLoggedInDDOInDropDown("institution", "");
        getSingleColumnRowInputTextboxWithLable("Row0", "City", "", "Row0Col2", "city", "onkeypress='return acceptAlphanumeric(event)'");
        $("#institution").val(getUserSessionElement(seLocationName));
        getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
        getSingleColumnRowInputTextboxWithLable("Row1", "Centre Code", "required", "Row1Col1", "centreCode", "onkeypress='return acceptAlphanumeric(event)'");
        getTwoColumnRowDropdownWithLable("Row1", "State", "", "Row1Col2", "state", "");
        getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
        getSingleColumnRowInputTextboxWithLable("Row2", "Centre Name", "required", "Row2Col1", "centreName", "onkeypress='return acceptAlphanumeric(event)'");
        getSingleColumnRowInputTextboxWithLable("Row2", "Country", "", "Row2Col2", "country", "onkeypress='return acceptAlphanumeric(event)'");
        getTwoColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2");
        getSingleColumnRowInputTextboxWithLable("Row3", "Email", "", "Row3Col1", "email", "");
        getSingleColumnRowInputTextboxWithLable("Row3", "Contact No", "", "Row3Col2", "contactNumber", "onkeypress='return validateNumber(event)'");
        getTwoColumnInRow(FieldGroupForCF, "Row4", "Row4Col1", "Row4Col2");
        getSingleColumnRowInputTextareaWithLable("Row4", "Address", "", "Row4Col1", "address", "");

        setStates("", "state");
        restictSpaceInTheBegining();
        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "LearningCentreValidation()", "Reset", "resetBackBtnId", "resetLearningCentreData()")
        viewLearningCentreList("viewLearningCentreList");
    }
}

function LearningCentreValidation()
{
    $("#" + successMsgDivCF).text("");
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    var saveorupdate = $("#saveorupdate").val();
    var institution = $("#institution").val();
    var centreCode = $("#centreCode").val();
    var centreName = $("#centreName").val();
    var contactNumber = $("#contactNumber").val();
    var email = $("#email").val();
    var result = 1;
    if (preValidation(institution) || preValidation(centreCode) || preValidation(centreName)) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        
        if (institution == "" || institution == null) {
            $("#institution").focus();
            displaySmallErrorMessagesInRed("institutionErr", "Please enter institution.");
            result = 0;
        } 
        if (centreCode == "" || centreCode == null) {
            $("#centreCode").focus();
            displaySmallErrorMessagesInRed("centreCodeErr", "Please enter Centre Code.");
            result = 0;
        }
        if (centreName == "" || centreName == null) {
            $("#centreName").focus();
            displaySmallErrorMessagesInRed("centreNameErr", "Please enter Centre Name.");
            result = 0;
        }
        if (contactNumber != "") {
            if (!contactNumber.match((Phonevalidation()))) {
                $("#contactNumber").focus();
                displaySmallErrorMessagesInRed("contactNumberErr", "Please enter valid Contact No");
                result = 0;
            }
            else
            {
                $("#contactNumberErr").text("");
            }
        }
        if (email != "") {
            if (!email.match((EmailValidation()))) {
                $("#email").focus();
                displaySmallErrorMessagesInRed("emailErr", "Please enter valid Email");
                result = 0;
            }
            else
            {
                $("#emailErr").text("");
            }
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveLearningCentreDetails();
            } else if (saveorupdate == "update") {
                updateLearningCentreDetails();
            }
        }
    }
}

function saveLearningCentreDetails() {
//    if (checkUserPrivelege(pvCreateLoanApply)) {
        var institution = $("#institution").val();
//        var institution = getUserSessionElement(seLocationId);
        var city = $("#city").val();
        var centreCode = $("#centreCode").val();
        var state = $("#state").val();
        var centreName = $("#centreName").val();
        var country = $("#country").val();
        var email = $("#email").val();
        var contactNumber = $("#contactNumber").val();
        var address = $("#address").val();
        var learningCentreJson = {
            institution: institution,
            city: city,
            centreCode: centreCode,
            state: state,
            centreName: centreName,
            country: country,
            email: email,
            contactNumber: contactNumber,
            address: address
        };
        $.post(server_base_url + "admission/admissionMaster/LearningCentre/Save", {
            learningCentreJson: JSON.stringify(learningCentreJson),
            userid: getUserSessionElement("userId")
        }).done(function(data) {
            if (data == "existed") {
                displayErrorMessages(successMsgDivCF, existed, "");
                setTimeout(function() {
                    scrolupfunction();
                    learningCentreMaster("dashBoardBodyMainDiv");

                }, 3000);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
                return false;
            }
            saveOrUpdateCommonFunctionInLearningCentre(data);
        });
//    }
}

function  saveOrUpdateCommonFunctionInLearningCentre(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        displaySuccessMessages(successMsgDivCF, successMessage, "");
        setTimeout(function() {
            scrolupfunction();
            learningCentreMaster("dashBoardBodyMainDiv");

        }, 3000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}

function viewLearningCentreList(divId) {
//    if (checkUserPrivelege(pvViewLoanApply)) {
        var columsName = ["Institution", "City", "Centre Code", "State", "Centre Name"];
//        createTableWithEditDeletePrivilage(innerDivCF, "List of Learning Centre(s)", divId, MsgDivInTableCF, columsName, pvUpdateLoanApply, pvDeleteLoanApply);
        createTable(innerDivCF, "List of Learning Centre(s)", divId, MsgDivInTableCF, columsName);
        $.get(server_base_url + "admission/admissionMaster/LearningCentre/View", {
        }).done(function(bdata) {
            bdata=JSON.parse(bdata);
            if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        var divIdBody = divId + "body";
                        $("#" + divId).append("<tbody id='" + divIdBody + "' class='tabel table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var obj = JSON.stringify(bdata[i]);
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].institution + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].city + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].centreCode + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].state + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].centreName + "</td>");
                         
                                if (true)
                                    $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateLearningCentre('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                                if (true)
                                    $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteLearningCentre','viewLearningCentreList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                        }
                        $('#' + divId).append("</table>");
                        $('#' + divId).dataTable();
                    }
                }
            }
        });
//    }
}
function updateLearningCentre(obj) {
    var data = decodeURI(obj);
    data = JSON.parse(data);

    $("#institution").vr(data.institution);
    $("#city").val(data.city);
    $("#centreCode").val(data.centreCode);
    $("#state").val(data.state);
    $("#centreName").val(data.centreName);
    $("#country").val(data.country);
    $("#email").val(data.email);
    $("#contactNumber").val(data.contactNumber);
    $("#address").val(data.address);

    $("#Id").val(data._id.$oid);
//    $("#saveOrUpdateRowId").text("");
    $("#saveorupdate").val("update");
    $("#saveUpdateBtnId").text("").text("Update");
//    getSaveResetUpdateBackButton("fieldGroup", "saveOrUpdateRowId", "Update", "saveUpdateBtnId", "updateFacultyData()", "Back", "resetBackBtnId", "createFacultyMaster()");
    addButtonOnclickFunction("resetBackBtnId", "Back", "learningCentreMaster('" + DashboardMainDivID + "')");
}

function updateLearningCentreDetails() {
    if (true) {
//        var empData = JSON.parse(decodeURI(decryptBase64String($("#empData").val())));
        var id = $("#Id").val();
        var institution = $("#institution").val();
//        var institution = getUserSessionElement(seLocationId);
        var city = $("#city").val();
        var centreCode = $("#centreCode").val();
        var state = $("#state").val();
        var centreName = $("#centreName").val();
        var country = $("#country").val();
        var email = $("#email").val();
        var contactNumber = $("#contactNumber").val();
        var address = $("#address").val();
        var learningCentreJson = {
            institution: institution,
            city: city,
            centreCode: centreCode,
            state: state,
            centreName: centreName,
            country: country,
            email: email,
            contactNumber: contactNumber,
            address: address
        };
        $.post(server_base_url + "admission/admissionMaster/LearningCentre/Update", {
            learningCentreJson: JSON.stringify(learningCentreJson),
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function(data) {(data)
            saveOrUpdateCommonFunctionInLearningCentre(data);
        });
    } else {
        displaySmallErrorMessagesInRed(successMsgDivCF, privilageNotExist);
    }
}
function deleteLearningCentre(id) {
    if (true) {
        $.post(server_base_url + "admission/admissionMaster/LearningCentre/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function(data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                learningCentreMaster(DashboardMainDivID);
                displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
            }
        });
    } else {
        displaySmallErrorMessagesInRed(successMsgDivCF, privilageNotExist);
    }
}
function resetLearningCentreData()
{
    $("#city").val("");
    $("#centreCode").val("");
    $("#state").val("");
    $("#centreName").val("");
    $("#country").val("");
    $("#email").val("");
    $("#contactNumber").val("");
    $("#address").val("");
    $("#institutionErr").text("");
    $("#cityErr").text("");
    $("#centreCodeErr").text("");
    $("#stateErr").text("");
    $("#centreNameErr").text("");
    $("#countryErr").text("");
    $("#emailErr").text("");
    $("#contactNumberErr").text("");
    $("#addressErr").text("");
    $("#successMsgDivBeforeDivCF").text("");
    $("#pregsuccessBefore").text("");

}
