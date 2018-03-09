/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//To create subject master form
function createSubjectMaster() {
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayAdmissionModule()">Admission</a></label>>> <label><a href="javascript:admissionMasterTabs()">Admission Masters</a></label> >><label>Subject Master</label>');
    createFormWithoutDisplayingFY("dashboardBodyMainDiv", "innerDiv", "Subject Master", "fieldGroup", "successMessage");

    getTwoColumnInRow("fieldGroup", "Row0", "Row0Col1", "Row0Col2");
    getTwoColumnRowDropdownWithLable("Row0", "DDO", "required", "Row0Col1", "ddo", "");
    getTwoColumnRowDropdownWithLable("Row0", "Location", "required", "Row0Col2", "location", "");

    getLoggedInDDOInDropDown("ddo", "");
    getLoggedInLocationInDropDown("location", "");

    getTwoColumnInRow("fieldGroup", "Row1", "Row1Col1", "Row1Col2");
    getSingleColumnRowInputTextboxWithLable("Row1", "Subject Code", "required", "Row1Col1", "subjectCode", "");
    getSingleColumnRowInputTextboxWithLable("Row1", "Subject Alias", "", "Row1Col2", "subjectAlias", "");

    getTwoColumnInRow("fieldGroup", "Row2", "Row2Col1", "Row2Col2");
    getSingleColumnRowInputTextboxWithLable("Row2", "Subject Name", "required", "Row2Col1", "subjectName", "");
    getSingleColumnRowCheckBoxWithLable("Row2", "is Practical", "", "Row2Col2", "isPractical", "");

    getSaveResetUpdateBackButton("fieldGroup", "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "saveSubject()", "Reset", "resetBackBtnId", "createSubjectMaster('fieldGroup')");
    restictSpaceInTheBegining();
    viewSubjectList("viewSubjectList");

}
//To save subject master data to collection
function saveSubject() {
    var ddo = $("#ddo").val().trim();
    var location = $("#location").val().trim();
    var subjectCode = $("#subjectCode").val().trim();
    var subjectName = $("#subjectName").val().trim();
    var subjectAliasName = $("#subjectAlias").val().trim();
    var isPractical;

    if ($('#midSem').prop('checked')) {
        isPractical = "Yes";
    } else
    {
        isPractical = "No";
    }

    if (ddo === null || ddo === undefined || ddo === "" || location == "" || location == undefined || location == null || subjectCode == "" || subjectCode == null || subjectCode == undefined || subjectName == "" || subjectName == undefined || subjectName == null) {
        displayLargeErrorMessagesInCenterInRed("successMessage", "Please fill all mandatory fields");
        return false;
    }

    var subject = {
        ddo: ddo,
        location: location,
        subjectCode: subjectCode,
        subjectName: subjectName,
        subjectAlias: subjectAliasName,
        isPractical: isPractical
    };

    var subjectJson = JSON.stringify(subject);
    $.get(server_base_url + "/Admission/Masters/Subject/Save", {
        subjectJson: subjectJson,
        loginUserId: getUserSessionElement("userId")
    }).done(function (data) {
        successOrErrorMeassages("successMessage", createSubjectMaster, data, "Save", "");
    });
}
//To display all the data in subject master
function viewSubjectList(divId) {

    var columsName = ["Subject Code", "Subject Name", "Subject Alias", "Is Practical", "DDO", "Location"];
    createTable("innerDiv", "List of Subject(s)", divId, "successMessageInTable", columsName);
    $.get(server_base_url + "/Admission/Masters/Subject/FetchAll", {
        ddo: getUserSessionElement(seDDOId),
        location: getUserSessionElement(seLocationId)
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
                                + "<td class='table_body'>" + bdata[i].subjectCode + "</td>"
                                + "<td class='table_body'>" + bdata[i].subjectName + "</td>"
                                + "<td class='table_body'>" + bdata[i].subjectAlias + "</td>"
                                + "<td class='table_body'>" + bdata[i].isPractical + "</td>"
                                + "<td class='table_body'>" + bdata[i].ddo + "</td>"
                                + "<td class='table_body'>" + bdata[i].location + "</td>"
                                + "<td class='table_body'>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a href="javascript:void(0);" onclick=updateSubject("' + encodeURI(obj) + '") class="anchor_edit"  >Edit</a>' + "</td>"
                                + "<td class='table_body'>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  href="javascript:void(0);" onclick=deletePopUp("deleteSubjectData","createSubjectMaster","' + bdata[i]._id.$oid + '") class="anchor_delete"  >Delete</a>' + "</td></tr>");
                    }
                    $("#" + divId).dataTable();
                }
            }
        }
    });
}

function updateSubject(obj) {
    var data = decodeURI(obj);
    data = JSON.parse(data);

    $("#subjectCode").val(data.subjectCode);
    $("#subjectName").val(data.subjectName);
    $("#subjectAlias").val(data.subjectAlias);
    getLoggedInDDOInDropDown("ddo", "");
    getLoggedInLocationInDropDown("location", "");

    if (data.isPractical === "Yes") {
        $("#isPractical").prop("checked", true);
    } else {
        $("#isPractical").prop("checked", false);
    }

    $("#Id").val(data._id.$oid);
    $("#saveOrUpdateRowId").text("");
    getSaveResetUpdateBackButton("fieldGroup", "saveOrUpdateRowId", "Update", "saveUpdateBtnId", "updateSubjectData()", "Back", "resetBackBtnId", "createSubjectMaster()");

}
//To update selected row in the list of subject(s) table
function updateSubjectData() {

    var ddo = $("#ddo").val().trim();
    var location = $("#location").val().trim();
    var subjectCode = $("#subjectCode").val().trim();
    var subjectName = $("#subjectName").val().trim();
    var subjectAliasName = $("#subjectAlias").val().trim();
    var isPractical;
    var primaryKey = $("#Id").val();

    if ($('#isPractical').prop('checked')) {
        isPractical = "Yes";
    } else
    {
        isPractical = "No";
    }

    if (ddo === null || ddo === undefined || ddo === "" || location == "" || location == undefined || location == null || subjectCode == "" || subjectCode == null || subjectCode == undefined || subjectName == "" || subjectName == undefined || subjectName == null) {
        displayLargeErrorMessagesInCenterInRed("successMessage", "Please fill all mandatory fields");
        return false;
    }

    var subject = {
        ddo: ddo,
        location: location,
        subjectCode: subjectCode,
        subjectName: subjectName,
        subjectAlias: subjectAliasName,
        isPractical: isPractical
    };

    var subjectJson = JSON.stringify(subject);
    $.get(server_base_url + "/Admission/Masters/Subject/Update", {
        subjectJson: subjectJson,
        loginUserId: getUserSessionElement("userId"),
        primaryKey: primaryKey
    }).done(function (data) {
        successOrErrorMeassages("successMessage", createSubjectMaster, data, "Update", "");
    });
}

//To delete selected row from list of subject(s) grid
function deleteSubjectData(primaryKey) {
    $.get(server_base_url + "/Admission/Masters/Subject/Delete", {
        loginUserId: getUserSessionElement("userId"),
        primaryKey: primaryKey
    }).done(function (data) {
        successOrErrorMeassages("", createSubjectMaster, data, "Delete", "successMessageInTable");
    });
}