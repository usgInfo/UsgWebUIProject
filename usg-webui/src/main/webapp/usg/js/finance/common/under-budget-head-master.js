/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function financalUnderBudgetHeadMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financalUnderBudgetHeadMaster("dashboardBodyMainDiv")>Under Budget Head Master</a>');
    createForm(divId, innerDivCF, "Under Budget Head Master", FieldGroupForCF, successMsgDivCF);
    getLabelInputInRow(FieldGroupForCF, "Under Budget Head", "required", "Row0", "Row0Col1", "underBudgetHead", "onkeypress='return validatealphanumeric(event)'");
    getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "UnderBudgetHeadValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
    viewFinancialUnderBudgetHeadList("viewFinancialUnderBudgetHeadList");
}
function UnderBudgetHeadValidation()
{
    $("#" + successMsgDivCF).text("");
    $("#underBudgetHeadErr").text("");
    var result = 1;
    var saveorupdate = $("#saveorupdate").val();
    var underBudgetHead = $("#underBudgetHead").val();
    if (underBudgetHead == "" || underBudgetHead == "undefined") {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        if (underBudgetHead == "") {
            $("#underBudgetHead").focus();
            displaySmallErrorMessagesInRed("underBudgetHeadErr", "Please enter under group.");
            result = 0;
        } else if (underBudgetHead != "") {
            if (!underBudgetHead.match((alphaNumericPattern()))) {
                $("#underBudgetHead").focus();
                displaySmallErrorMessagesInRed("underBudgetHeadErr", "Please enter valid under group.");
                result = 0;
            }
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveFinancialUnderBudgetHeadDetails();
            } else if (saveorupdate == "update") {
                updateFinancialUnderBudgetHeadDetails();
            }
        }
    }
}
function saveFinancialUnderBudgetHeadDetails() {
    var underBudgetHead = $('#underBudgetHead').val();
    var objJson = {
        underBudgetHead: underBudgetHead
    };
    $.post(server_base_url + "financial/common/UnderBudgetHead/Save", {
        objJson: JSON.stringify(objJson),
        userid:  getUserSessionElement("userId")
    }).done(function(data) {
        saveOrUpdateCommonFunctionInUnderBudgetHead(data);
    });
}
function  saveOrUpdateCommonFunctionInUnderBudgetHead(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        setTimeout(function() {
            scrolupfunction();
            financalUnderBudgetHeadMaster("dashBoardBodyMainDiv");
            displaySuccessMessages(successMsgDivCF, successMessage, "");
        }, 1000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function viewFinancialUnderBudgetHeadList(divId) {
    var columsName = ["Under Budget Head"];
    createTable(innerDivCF, "List of Under Budget Head", divId, MsgDivInTableCF, columsName);
    $.get(server_base_url + "financial/common/UnderBudgetHead/ViewList", {
    }).done(function(bdata) {
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
                                + "<td style='cursor:pointer;'>" + bdata[i].underBudgetHead + "</td>"
                                + "<td style='cursor:pointer;' onclick=updatefinancialUnderBudgetHead('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                                + "<td onclick=deletePopUp('deletefinancialUnderBudgetHead','viewFinancialUnderBudgetHeadList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                    }
                    $('#' + divId).append("</table>");
                    $('#' + divId).dataTable();
                }
            }
        }
    });
}
function updatefinancialUnderBudgetHead(obj) {
    obj = JSON.parse(decodeURI(obj));
    resetAllValuesInSpecifiedDiv(FieldGroupForCF);
    $("#underBudgetHead").val(obj.underBudgetHead);
    $("#Id").val(obj._id.$oid);
    $("#saveorupdate").val("update");
    $("#saveUpdateBtnId").text("").text("Update");
    addButtonOnclickFunction("resetBackBtnId", "Back", "financalUnderBudgetHeadMaster('" + DashboardMainDivID + "')");
}
function updateFinancialUnderBudgetHeadDetails() {
    var Id = $('#Id').val();
    var underBudgetHead = $('#underBudgetHead').val();
    var objJson = {
        underBudgetHead: underBudgetHead
    }
    $.post(server_base_url + "financial/common/UnderBudgetHead/Update", {
        objJson: JSON.stringify(objJson),
        Id: Id,
        userid:  getUserSessionElement("userId")
    }).done(function(data) {
        saveOrUpdateCommonFunctionInUnderBudgetHead(data);
    });
}
function deletefinancialUnderBudgetHead(Id) {

    $.post(server_base_url + "financial/common/UnderBudgetHead/Delete", {
        Id: Id,
        userid: getUserSessionElement("userId")
    }).done(function(data) {
        if (BasicIfElseForTable(data, MsgDivInTableCF)) {
            financalUnderBudgetHeadMaster(DashboardMainDivID);
            displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
            clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
        }
    });
}


