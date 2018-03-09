/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//To create period master form
function createPeriodMaster() {
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayAdmissionModule()">Admission</a></label>>> <label><a href="javascript:admissionMasterTabs()">Admission Masters</a></label> >><label>Period Master</label>');
    createFormWithoutDisplayingFY("dashboardBodyMainDiv", "innerDiv", "Period Master", "fieldGroup", "successMessage");
    getSingleColumnRowInputTextboxWithLable("fieldGroup", "Period Name", "required", "row0", "periodName", "");
    getSingleColumnRowInputTextboxWithLable("fieldGroup", "Total Period Duration(Years)", "required", "row1", "totalPeriodDuration", "onchange=calculateTotalNumberOfExams() onkeypress='return acceptNumeric(event)' maxlength=2");
    getSingleColumnRowDropdownWithLable("fieldGroup", "Duration Type", "required", "row2", "durationType", "onchange=calculateTotalNumberOfExams()");
    var options = ["Year", "Semister"];
    getHardCodedOptions('durationType', 'Duration', options);
    getSingleColumnRowCheckBoxWithLable("fieldGroup", "Mid Sem", "", "row2", "midSem", "");
    getSingleColumnRowInputTextboxWithLable("fieldGroup", "Total Number of Exams", "required", "row3", "totalNumberOfExams", "readonly");
    getSaveResetUpdateBackButton("fieldGroup", "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "savePeriod()", "Reset", "resetBackBtnId", "createPeriodMaster('fieldGroup')");
    restictSpaceInTheBegining();
    viewPeriodList("viewPeriodList");
}


function calculateTotalNumberOfExams() {
    var durationType = $("#durationType").val();
    var totalPeriodDuration = $("#totalPeriodDuration").val();
    if (durationType !== "undefined" || durationType !== "") {
        if (durationType === "Year") {
            $("#totalNumberOfExams").val(totalPeriodDuration);
        } else if (durationType === "Semister") {
            $("#totalNumberOfExams").val(totalPeriodDuration * 2);
        }
    }
}

//To save period master data to collection
function savePeriod() {
    var periodName = $("#periodName").val().trim();
    var totalPeriodDuration = $("#totalPeriodDuration").val().trim();
    var durationType = $("#durationType").val().trim();
    var midSem;
    var totalNumberOfExams = $("#totalNumberOfExams").val().trim();
    if (periodName === null || periodName === undefined || periodName === "" || totalPeriodDuration === null || totalPeriodDuration === undefined || totalPeriodDuration === "" || durationType === null || durationType === undefined || durationType === ""||totalNumberOfExams===""||totalNumberOfExams===undefined ) {
        displayLargeErrorMessagesInCenterInRed("successMessage", "Please fill all mandatory fields");
        return false;
    }

    if ($('#midSem').prop('checked')) {
        midSem = "Yes";
    } else
    {
        midSem = "No";
    }

    var period = {
        periodName: periodName,
        totalPeriodDuration: totalPeriodDuration,
        durationType: durationType,
        totalNumberOfExams: totalNumberOfExams,
        midSem: midSem
    };

    var periodJson = JSON.stringify(period);

    $.get(server_base_url + "/Admission/Masters/Period/Save", {
        periodJson: periodJson,
        loginUserId: getUserSessionElement("userId")
    }).done(function (data) {
        successOrErrorMeassages("successMessage", createPeriodMaster, data, "Save", "");
    });
}
//To Display all period master data
function  viewPeriodList(divId) {
    var columsName = ["Period Name", "Duration", "Total Exams", "Duration Type", "Mid Sem"];
    createTable("innerDiv", "List of Period(s)", divId, "successMessageInTable", columsName);
    $.get(server_base_url + "/Admission/Masters/Period/FetchAll", {
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
                                + "<td class='table_body'>" + bdata[i].periodName + "</td>"
                                + "<td class='table_body'>" + bdata[i].totalPeriodDuration + "</td>"
                                + "<td class='table_body'>" + bdata[i].totalNumberOfExams + "</td>"
                                + "<td class='table_body'>" + bdata[i].durationType + "</td>"
                                + "<td class='table_body'>" + bdata[i].midSem + "</td>"
                                + "<td class='table_body'>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a href="javascript:void(0);" onclick=updatePeriod("' + encodeURI(obj) + '") class="anchor_edit"  >Edit</a>' + "</td>"
                                + "<td class='table_body'>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  href="javascript:void(0);" onclick=deletePopUp("deletePeriodData","createPeriodMaster","' + bdata[i]._id.$oid + '") class="anchor_delete"  >Delete</a>' + "</td></tr>");
                    }
                    $("#" + divId).dataTable();
                }
            }
        }
    });
}

//To create update form of period master
function updatePeriod(obj) {
    var data = decodeURI(obj);
    data = JSON.parse(data);

    $("#periodName").val(data.periodName);
    $("#totalPeriodDuration").val(data.totalPeriodDuration);
    $("#durationType").val(data.durationType);
    $("#totalNumberOfExams").val(data.totalNumberOfExams);

    if (data.midSem === "Yes") {
        $("#midSem").prop("checked", true);
    } else {
        $("#midSem").prop("checked", false);
    }

    $("#Id").val(data._id.$oid);
    $("#saveOrUpdateRowId").text("");
    getSaveResetUpdateBackButton("fieldGroup", "saveOrUpdateRowId", "Update", "saveUpdateBtnId", "updatePeriodData()", "Back", "resetBackBtnId", "createPeriodMaster()");
}

//To update selected row from list of period(s) grid
function updatePeriodData() {
    var periodName = $("#periodName").val().trim();
    var totalPeriodDuration = $("#totalPeriodDuration").val().trim();
    var durationType = $("#durationType").val().trim();
    var midSem;
    var totalNumberOfExams = $("#totalNumberOfExams").val().trim();
    var primaryKey = $("#Id").val();
    if ($('#midSem').prop('checked')) {
        midSem = "Yes";
    } else
    {
        midSem = "No";
    }

    var period = {
        periodName: periodName,
        totalPeriodDuration: totalPeriodDuration,
        durationType: durationType,
        totalNumberOfExams: totalNumberOfExams,
        midSem: midSem
    };

    var periodJson = JSON.stringify(period);

    $.get(server_base_url + "/Admission/Masters/Period/Update", {
        periodJson: periodJson,
        loginUserId: getUserSessionElement("userId"),
        primaryKey: primaryKey
    }).done(function (data) {
        successOrErrorMeassages("successMessage", createPeriodMaster, data, "Update", "");
    });
}

//To delete selected row from list of period(s) grid
function deletePeriodData(primaryKey) {
    $.get(server_base_url + "/Admission/Masters/Period/Delete", {
        loginUserId: getUserSessionElement("userId"),
        primaryKey: primaryKey
    }).done(function (data) {
        successOrErrorMeassages("", createPeriodMaster, data, "Delete", "successMessageInTable");
    });
}