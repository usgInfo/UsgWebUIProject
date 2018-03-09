/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//author Shwetha T S

//To create program type master form
function createProgramTypeMaster() {
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayAdmissionModule()">Admission</a></label>>> <label><a href="javascript:admissionMasterTabs()">Admission Masters</a></label> >><label>Program Type Master</label>');
    createFormWithoutDisplayingFY("dashboardBodyMainDiv", "innerDiv", "Program Type Master", "fieldGroup", "successMessage");
    getSingleColumnRowInputTextboxWithLable("fieldGroup", "Program Type", "required", "row0", "programType", "onkeypress='return acceptAlphanumeric(event)' ");
    getSaveResetUpdateBackButton("fieldGroup", "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "saveProgramType()", "Reset", "resetBackBtnId", "createProgramTypeMaster('fieldGroup')");
    restictSpaceInTheBegining();
    viewProgramTypeList("viewProgramTypeList");
}


//To save program type master data to collection
function saveProgramType() {
    var programType = $("#programType").val().trim();

    if (programType === null || programType === undefined || programType === "") {
        displayLargeErrorMessagesInCenterInRed("successMessage", "Please fill all mandatory fields");
        return false;
    }
    $.get(server_base_url + "/Admission/Masters/ProgramType/Save", {
        programType: programType,
        loginUserId: getUserSessionElement("userId")
    }).done(function (data) {
        successOrErrorMeassages("successMessage", createProgramTypeMaster, data, "Save", "");
    });
}

//To Display all program type master data
function viewProgramTypeList(divId) {
    var columsName = ["Program Type"];
    createTable("innerDiv", "List of Program Type(s)", divId, "successMessageInTable", columsName);
    $.get(server_base_url + "/Admission/Masters/ProgramType/FetchAll", {
    }).done(function (bdata) {
        bdata = JSON.parse(bdata);
        if (BasicIfElseForTable(bdata, "successMessageInTable")) {
            if (bdata !== null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    var divIdBody = divId + "body";
                    $("#" + divId).append("<tbody id='" + divIdBody + "' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var obj = JSON.stringify(bdata[i]);
                        $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td class='table_body'>" + bdata[i].programType + "</td>"
                                + "<td class='table_body'>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a href="javascript:void(0);" onclick=updateProgramType("' + encodeURI(obj) + '") class="anchor_edit"  >Edit</a>' + "</td>"
                                + "<td class='table_body'>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  href="javascript:void(0);" onclick=deletePopUp("deleteProgramTypeData","createProgramTypeMaster","' + bdata[i]._id.$oid + '") class="anchor_delete"  >Delete</a>' + "</td></tr>");
                    }
                    $("#" + divId).dataTable();
                }
            }
        }
    });
}

//To create update form of progrm type master
function updateProgramType(obj) {
    var data = decodeURI(obj);
    data = JSON.parse(data);
    $("#programType").val(data.programType);
    $("#Id").val(data._id.$oid);
    $("#saveOrUpdateRowId").text("");
    getSaveResetUpdateBackButton("fieldGroup", "saveOrUpdateRowId", "Update", "saveUpdateBtnId", "updateProgramTypeData()", "Back", "resetBackBtnId", "createProgramTypeMaster()");
}

//To update selected row from list of progrm type grid
function updateProgramTypeData() {
    var programType = $("#programType").val().trim();

    if (programType === null || programType === undefined || programType === "") {
        displayLargeErrorMessagesInCenterInRed("successMessage", "Please fill all mandatory fields");
        return false;
    }

    var primaryKey = $("#Id").val().trim();
    $.get(server_base_url + "/Admission/Masters/ProgramType/Update", {
        programType: programType,
        loginUserId: getUserSessionElement("userId"),
        primaryKey: primaryKey
    }).done(function (data) {
        successOrErrorMeassages("successMessage", createProgramTypeMaster, data, "Update", "");
    });
}

//To delete selected row from list of progrm type grid
function deleteProgramTypeData(primaryKey) {
    $.get(server_base_url + "/Admission/Masters/ProgramType/Delete", {
        loginUserId: getUserSessionElement("userId"),
        primaryKey: primaryKey
    }).done(function (data) {
        successOrErrorMeassages("", createProgramTypeMaster, data, "Delete", "successMessageInTable");
    });
}