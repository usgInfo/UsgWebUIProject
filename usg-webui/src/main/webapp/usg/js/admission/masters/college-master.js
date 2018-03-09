/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function collegeMaster(divId)
{
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayAdmissionModule()">Admission</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="admissionMasterTabs()">Admission Masters</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=collegeMaster("dashboardBodyMainDiv")>School/College Master</a>');
    createForm(divId, innerDivCF, "School/College Master", FieldGroupForCF, successMsgDivCF);
    $("#financialYearDiv").remove();
    getLabelInputInRow(FieldGroupForCF, "School/College ", "required", "row1", "", "collegeName", "onkeypress='return validatealphanumeric(event)'");
    getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "saveOrUpdateCollege()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
    collegeNameMasterListTable("collegeNameMasterListTable");
}

function saveOrUpdateCollege() {
    var collegeName = $("#collegeName").val();
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    if (preValidation(collegeName)) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, mandatoryFieldMsg);
        return false;
    }
    var saveorupdate = ($("#saveorupdate").val() == "save") ? "save" : ($("#saveorupdate").val() == "update") ? "update" : "";
    if (saveorupdate == "save") {
        $.get(server_base_url + "Admission/AdmissionMaster/CollegeMasterSaveService/Save", {
            collegeName: collegeName,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            data = JSON.parse(data);
            commonFunctionSaveUpdateCollegeMaster(data, successMsgDivCF, successMessage);
        });
    } else if (saveorupdate == "update") {
        var id = $("#Id").val();
        $.get(server_base_url + "Admission/AdmissionMaster/CollegeMasterUpdateService/Update", {
            collegeName: collegeName,
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            data = JSON.parse(data);
            commonFunctionSaveUpdateCollegeMaster(data, successMsgDivCF, updateMessage);
        });
    }
}

function commonFunctionSaveUpdateCollegeMaster(data, successMsgDivCF, message) {
    if (BasicIfElseForSaveUpdateResponseDataWithExisted(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        displaySuccessMessages(successMsgDivCF, message, "");
        setTimeout(function () {
            scrolupfunction();
            collegeMaster(DashboardMainDivID);
        }, 3000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function collegeNameMasterListTable(divId) {
    createTable(innerDivCF, "List of School/College Masters", divId, MsgDivInTableCF, ["School/College Name"]);
    $.get(server_base_url + "Admission/AdmissionMaster/CollegeMasterListService/View", {
    }).done(function (bdata) {
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
                                + "<td style='cursor:pointer;'>" + bdata[i].collegeName + "</td>");
                        if (true) {
                            $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateCollegeNameDeatails('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                        }
                        if (true) {
                            $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteCollegeMaster','','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                        }

                    }
                    $('#' + divId).append("</table>");
                    $('#' + divId).dataTable();
                }
            }
        }
    });
}

function updateCollegeNameDeatails(obj) {
    obj=JSON.parse(decodeURI(obj));
    $("#collegeName").val(obj.collegeName);
    $("#saveUpdateBtnId").text("").text("Update");
    $("#saveorupdate").val("update");
    $("#Id").val(obj._id.$oid);
    addButtonOnclickFunction("resetBackBtnId", "Back", "collegeMaster('" + DashboardMainDivID + "')");
}

function deleteCollegeMaster(id) {
    if (true) {
        $.post(server_base_url + "Admission/AdmissionMaster/CollegeMasterDeleteService/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                collegeNameMasterListTable(DashboardMainDivID);
                displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
            }
        });
    }
}

