/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function specialClaimMaster(divId)
{
   $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayAdmissionModule()">Admission</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="admissionMasterTabs()">Admission Masters</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=specialClaimMaster("dashboardBodyMainDiv")>SpecialClaim Master</a>');
    createForm(divId, innerDivCF, "Special Claim Master", FieldGroupForCF, successMsgDivCF);
    $("#financialYearDiv").remove();
    getSingleColumnRowInputTextboxWithLable(FieldGroupForCF, "Special Claim ", "required", "row1", "specialClaimName", "onkeypress='return acceptAlphanumeric(event)'");
    getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "saveOrUpdateSpecialClaim()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
    specialClaimMasterListTable("specialClaimMasterListTable"); 
}

function saveOrUpdateSpecialClaim() {
    var specialClaimName = $("#specialClaimName").val();
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    if (preValidation(specialClaimName)) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, mandatoryFieldMsg);
        return false;
    }
    var saveorupdate = ($("#saveorupdate").val() == "save") ? "save" : ($("#saveorupdate").val() == "update") ? "update" : "";
    if (saveorupdate == "save") {
        $.get(server_base_url + "admission/admissionMaster/SpecialClaimSaveService/Save", {
            specialClaimName: specialClaimName,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            data = JSON.parse(data);
            commonFunctionSaveUpdateSpecialClaimMaster(data, successMsgDivCF, successMessage);
        });
    } else if (saveorupdate == "update") {
        var id = $("#Id").val();
        $.get(server_base_url + "admission/admissionMaster/SpecialClaimUpdateService/Update", {
            specialClaimName: specialClaimName,
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            data = JSON.parse(data);
            commonFunctionSaveUpdateSpecialClaimMaster(data, successMsgDivCF, updateMessage);
        });
    }
}

function commonFunctionSaveUpdateSpecialClaimMaster(data, successMsgDivCF, message) {
    if (BasicIfElseForSaveUpdateResponseDataWithExisted(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        displaySuccessMessages(successMsgDivCF, message, "");
        setTimeout(function () {
            scrolupfunction();
            specialClaimMaster(DashboardMainDivID);
        }, 3000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function specialClaimMasterListTable(divId) {
    createTable(innerDivCF, "List of Special Claim Masters", divId, MsgDivInTableCF, ["Special Claim Name"]);
    $.get(server_base_url + "admission/admissionMaster/SpecialClaimListService/View", {
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
                                + "<td style='cursor:pointer;'>" + bdata[i].specialClaimName + "</td>");
                        if (true) {
                            $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateSpecialClaimDeatails('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                        }
                        if (true) {
                            $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteSpecialClaimMaster','','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                        }

                    }
                    $('#' + divId).append("</table>");
                    $('#' + divId).dataTable();
                }
            }
        }
    });
}
function updateSpecialClaimDeatails(obj) {
    obj=JSON.parse(decodeURI(obj));
    $("#specialClaimName").val(obj.specialClaimName);
    $("#saveUpdateBtnId").text("").text("Update");
    $("#saveorupdate").val("update");
    $("#Id").val(obj._id.$oid);
    addButtonOnclickFunction("resetBackBtnId", "Back", "specialClaimMaster('" + DashboardMainDivID + "')");
}
function deleteSpecialClaimMaster(id) {
    if (true) {
        $.post(server_base_url + "admission/admissionMaster/SpecialClaimDeleteService/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                specialClaimMasterListTable(DashboardMainDivID);
                displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
            }
        });
    }
}
