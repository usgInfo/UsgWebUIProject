/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//author Shwetha T S

//To create Faculty master form

function createFacultyMaster() {

    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayAdmissionModule()">Admission</a></label>>> <label><a href="javascript:admissionMasterTabs()">Admission Masters</a></label> >><label>Faculty Master</label>');
    createFormWithoutDisplayingFY("dashboardBodyMainDiv", "innerDiv", "Faculty Master", "fieldGroup", "successMessage");

    getTwoColumnInRow("fieldGroup", "Row0", "Row0Col1", "Row0Col2");
    getTwoColumnRowDropdownWithLable("Row0", "DDO", "required", "Row0Col1", "ddo", "");
    getTwoColumnRowDropdownWithLable("Row0", "Location", "required", "Row0Col2", "location", "");

    getLoggedInDDOInDropDown("ddo", "");
    getLoggedInLocationInDropDown("location", "");

    getTwoColumnInRow("fieldGroup", "Row1", "Row1Col1", "Row1Col2");
    getSingleColumnRowInputTextboxWithLable("Row1", "Faculty Code", "required", "Row1Col1", "facultyCode", "");
    getSingleColumnRowInputTextboxWithLable("Row1", "Faculty Name", "required", "Row1Col2", "facultyName", "");

    getSaveResetUpdateBackButton("fieldGroup", "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "saveFaculty()", "Reset", "resetBackBtnId", "createFacultyMaster('fieldGroup')");

    restictSpaceInTheBegining();
    viewFacultyList("viewFacultyList");

}
//to get all facult master data from database
function viewFacultyList(divId) {

    var columsName = ["Faculty Code", "Faculty Name", "Location"];
    createTable("innerDiv", "List of Faculties", divId, "successMessageInTable", columsName);
    $.get(server_base_url + "/Admission/Masters/Faculty/FetchAll", {
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
                                + "<td class='table_body'>" + bdata[i].facultyCode + "</td>"
                                + "<td class='table_body'>" + bdata[i].facultyName + "</td>"
                                + "<td class='table_body'>" + bdata[i].location + "</td>"
                                + "<td class='table_body'>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a href="javascript:void(0);" onclick=updateFaculty("' + encodeURI(obj) + '") class="anchor_edit"  >Edit</a>' + "</td>"
                                + "<td class='table_body'>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  href="javascript:void(0);" onclick=deletePopUp("deleteFacultyData","createFacultyMaster","' + bdata[i]._id.$oid + '") class="anchor_delete"  >Delete</a>' + "</td></tr>");
                    }
                    $("#" + divId).dataTable();
                }
            }
        }
    });
}
//to save faculty master data into database
function saveFaculty() {
    var ddo = $("#ddo").val().trim();
    var location = $("#location").val().trim();
    var facultyCode = $("#facultyCode").val().trim();
    var facultyName = $("#facultyName").val().trim();

    if (ddo === null || ddo === undefined || ddo === "" || location === null || location === undefined || location === "" || facultyCode === null || facultyCode === undefined || facultyCode === "" || facultyName === "" || facultyName === undefined) {
        displayLargeErrorMessagesInCenterInRed("successMessage", "Please fill all mandatory fields");
        return false;
    }

    var faculty = {
        ddo: ddo,
        location: location,
        facultyCode: facultyCode,
        facultyName: facultyName
    };
    var facultyJson = JSON.stringify(faculty);
    $.get(server_base_url + "/Admission/Masters/Faculty/Save", {
        facultyJson: facultyJson,
        loginUserId: getUserSessionElement("userId")
    }).done(function (data) {
        successOrErrorMeassages("successMessage", createFacultyMaster, data, "Save", "");
    });
}

//to create faculty master update form

function updateFaculty(obj) {
    var data = decodeURI(obj);
    data = JSON.parse(data);

    getLoggedInDDOInDropDown("ddo", "");
    getLoggedInLocationInDropDown("location", "");
    $("#facultyCode").val(data.facultyCode);
    $("#facultyName").val(data.facultyName);

    $("#Id").val(data._id.$oid);
    $("#saveOrUpdateRowId").text("");
    getSaveResetUpdateBackButton("fieldGroup", "saveOrUpdateRowId", "Update", "saveUpdateBtnId", "updateFacultyData()", "Back", "resetBackBtnId", "createFacultyMaster()");

}
//to update selected row in the list of faculties grid
function updateFacultyData() {
    var ddo = $("#ddo").val().trim();
    var location = $("#location").val().trim();
    var facultyCode = $("#facultyCode").val().trim();
    var facultyName = $("#facultyName").val().trim();
    var primaryKey = $("#Id").val().trim();

    var faculty = {
        ddo: ddo,
        location: location,
        facultyCode: facultyCode,
        facultyName: facultyName
    };
    var facultyJson = JSON.stringify(faculty);
    $.get(server_base_url + "/Admission/Masters/Faculty/Update", {
        facultyJson: facultyJson,
        loginUserId: getUserSessionElement("userId"),
        primaryKey: primaryKey
    }).done(function (data) {
        successOrErrorMeassages("successMessage", createFacultyMaster, data, "Update", "");
    });
}


//To delete selected row from list of faculties grid
function deleteFacultyData(primaryKey) {
    $.get(server_base_url + "/Admission/Masters/Faculty/Delete", {
        loginUserId: getUserSessionElement("userId"),
        primaryKey: primaryKey
    }).done(function (data) {
        successOrErrorMeassages("", createFacultyMaster, data, "Delete", "successMessageInTable");
    });
}