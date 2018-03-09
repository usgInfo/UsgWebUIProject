/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function boardMaster(divId)
{
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayAdmissionModule()">Admission</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="admissionMasterTabs()">Admission Masters</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=boardMaster("dashboardBodyMainDiv")>Board Master</a>');
    createForm(divId, innerDivCF, "Board Master", FieldGroupForCF, successMsgDivCF);
    $("#financialYearDiv").remove();
    getLabelInputInRow(FieldGroupForCF, "Board ", "required", "row1", "", "boardName", "onkeypress='return validatealphanumeric(event)'");
    getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "saveOrUpdateBoard()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
    boardNameMasterListTable("boardNameMasterListTable");
}
function saveOrUpdateBoard() {
    var boardName = $("#boardName").val();
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    if (preValidation(boardName)) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, mandatoryFieldMsg);
        return false;
    }
    var saveorupdate = ($("#saveorupdate").val() == "save") ? "save" : ($("#saveorupdate").val() == "update") ? "update" : "";
    if (saveorupdate == "save") {
        $.get(server_base_url + "Admission/AdmissionMaster/BoardMasterSaveService/Save", {
            boardName: boardName,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            data = JSON.parse(data);
            commonFunctionSaveUpdateBoardMaster(data, successMsgDivCF, successMessage);
        });
    } else if (saveorupdate == "update") {
        var id = $("#Id").val();
        $.get(server_base_url + "Admission/AdmissionMaster/BoardMasterUpdateService/Update", {
            boardName: boardName,
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            data = JSON.parse(data);
            commonFunctionSaveUpdateBoardMaster(data, successMsgDivCF, updateMessage);
        });
    }
}
function commonFunctionSaveUpdateBoardMaster(data, successMsgDivCF, message) {
    if (BasicIfElseForSaveUpdateResponseDataWithExisted(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        displaySuccessMessages(successMsgDivCF, message, "");
        setTimeout(function () {
            scrolupfunction();
            boardMaster(DashboardMainDivID);
        }, 3000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function boardNameMasterListTable(divId) {
    createTable(innerDivCF, "List of Board Masters", divId, MsgDivInTableCF, ["Board Name"]);
    $.get(server_base_url + "Admission/AdmissionMaster/BoardMasterListService/View", {
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
                                + "<td style='cursor:pointer;'>" + bdata[i].board + "</td>");
                        if (true) {
                            $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateBoardNameDeatails('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
//                            $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editMajorHead('" + bdata[i]._id.$oid + "','" + encodeURI(bdata[i].board) + "','"  + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                        }
                        if (true) {
                            $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteBoardMaster','','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                        }

                    }
                    $('#' + divId).append("</table>");
                    $('#' + divId).dataTable();
                }
            }
        }
    });
}

function updateBoardNameDeatails(obj) {
    obj=JSON.parse(decodeURI(obj));
    $("#boardName").val(obj.board);
    $("#saveUpdateBtnId").text("").text("Update");
    $("#saveorupdate").val("update");
    $("#Id").val(obj._id.$oid);
    addButtonOnclickFunction("resetBackBtnId", "Back", "boardMaster('" + DashboardMainDivID + "')");
}
function deleteBoardMaster(id) {
    if (true) {
        $.post(server_base_url + "Admission/AdmissionMaster/BoardMasterDeleteService/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                boardNameMasterListTable(DashboardMainDivID);
                displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
            }
        });
    }
}