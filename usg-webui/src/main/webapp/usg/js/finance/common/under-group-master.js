/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function financalUnderGroupMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financalUnderGroupMaster("dashboardBodyMainDiv")>Under Group Master</a>');
    createForm(divId, innerDivCF, "Under Group Master", FieldGroupForCF, successMsgDivCF);
    getLabelInputInRow(FieldGroupForCF, "Under Group", "required", "Row0", "Row0Col1", "underGroup", "onkeypress='return validatealphanumeric(event)'");
    getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "UnderGroupValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
    viewFinancialUnderGroupList("viewFinancialUnderGroupList");
}
function UnderGroupValidation()
{
    var result = 1;
    var saveorupdate = $("#saveorupdate").val();
    var underGroup = $("#underGroup").val();
    $("#underGroupErr").text("");
    $("#" + successMsgDivCF).text("");
    if (underGroup == "" || underGroup == "undefined") {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        if (underGroup == "") {
            $("#underGroup").focus();
            displaySmallErrorMessagesInRed("underGroupErr", "Please enter under group.");
            result = 0;
        } else if (underGroup != "") {
            if (!underGroup.match((alphaNumericPattern()))) {
                $("#underGroup").focus();
                displaySmallErrorMessagesInRed("underGroupErr", "Please enter valid under group.");
                result = 0;
            }
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveFinancialUnderGroupDetails();
            } else if (saveorupdate == "update") {
                updateFinancialUnderGroupDetails();
            }
        }
    }
}
function saveFinancialUnderGroupDetails() {
    var underGroup = $('#underGroup').val();
    var objJson = {
        underGroup: underGroup
    };
    $.post(server_base_url + "financial/common/UnderGroup/Save", {
        objJson: JSON.stringify(objJson),
        userid:  getUserSessionElement("userId")
    }).done(function (data) {
        saveOrUpdateCommonFunctionInUnderGroup(data);
    });
}
function  saveOrUpdateCommonFunctionInUnderGroup(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        setTimeout(function () {
            scrolupfunction();
            financalUnderGroupMaster("dashBoardBodyMainDiv");
            displaySuccessMessages(successMsgDivCF, successMessage, "");
        }, 1000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function viewFinancialUnderGroupList(divId) {
    var columsName = ["Under Group"];
    createTable(innerDivCF, "List of Under Group", divId, MsgDivInTableCF, columsName);
    $.get(server_base_url + "financial/common/UnderGroup/ViewList", {
    }).done(function (bdata) {
        if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    var divIdBody = divId + "body";
                    $("#" + divId).append("<tbody id='" + divIdBody + "' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var obj = JSON.stringify(bdata[i]);
                        $("#" + divIdBody).append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].underGroup + "</td>"
                                + "<td style='cursor:pointer;' onclick=updatefinancialUnderGroup('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                                + "<td onclick=deletefinancialUnderGroup('" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                    }
                    $('#' + divId).append("</table>");
                    $('#' + divId).dataTable();
                }
            }
        }
    });
}
function updatefinancialUnderGroup(obj) {
    obj = JSON.parse(decodeURI(obj));
    resetAllValuesInSpecifiedDiv(FieldGroupForCF);
    $("#underGroup").val(obj.underGroup);
    $("#Id").val(obj._id.$oid);
    $("#saveorupdate").val("update");
    $("#saveUpdateBtnId").text("").text("Update");
    addButtonOnclickFunction("resetBackBtnId", "Back", "financalUnderGroupMaster('" + DashboardMainDivID + "')");
}
function updateFinancialUnderGroupDetails() {
    var Id = $('#Id').val();
    var underGroup = $('#underGroup').val();
    var objJson = {
        underGroup: underGroup
    }
    $.post(server_base_url + "financial/common/UnderGroup/Update", {
        objJson: JSON.stringify(objJson),
        Id: Id,
        userid:  getUserSessionElement("userId")
    }).done(function (data) {
        saveOrUpdateCommonFunctionInUnderGroup(data);
    });
}
function deletefinancialUnderGroup(Id) {
    var result = confirm('Are you Sure?');
    if (result) {
        $.post(server_base_url + "financial/common/UnderGroup/Delete", {
            Id: Id,
            userid:  getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                financalUnderGroupMaster(DashboardMainDivID);
                displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, "Deleted Succesfully");
            }
        });
    }
}


