/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function financalSubMajorHeadMaster(divId, screenId) {
    if (screenId == "FINANCE")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayFinanceHorizontalBar()">Financial Management</a></label> ');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financalSubMajorHeadMaster("dashboardBodyMainDiv")>Sub Major Head Master</a>');


        // $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a>><a href="javascript:void(0)" data-toggle="tab">Major Head</a>');

    } else if (screenId == "BUDGET")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
        //$("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetCommonMenuTabs()">Common Masters</a>><a href="javascript:void(0)" data-toggle="tab" onclick=displayBudgetFundType("dashboardBodyMainDiv")>Fund Type Master</a>');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetCommonMenuTabs()">Common Master</a>><a href="javascript:void(0)" data-toggle="tab">Sub Major Head Master</a>');

    }
    createFormWithPrivilage(divId, innerDivCF, "Sub  Major Head", FieldGroupForCF, successMsgDivCF, pvCreateSubMajorCode);
    if (checkUserPrivelege(pvCreateSubMajorCode)) {
        getLabelInputInRow(FieldGroupForCF, "Sub Major Head Name", "required", "Row0", "Row0Col1", "subMajorHeadName", "onkeypress=''");
        getLabelInputInRow(FieldGroupForCF, "Sub Major Head Code", "required", "Row1", "Row1Col1", "subMajorHeadCode", "onkeypress=''");
        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "SubMajorHeadValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
 
      $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    
    
    }
    viewFinancialSubMajorHeadList("viewFinancialSubMajorHeadList");
}
function SubMajorHeadValidation()
{
    var result = 1;
    var saveorupdate = $("#saveorupdate").val();
    var SubMajorHead = $("#subMajorHeadName").val();
    var SubMajorcode = $("#subMajorHeadCode").val();
    if (SubMajorcode == "") {
        $("#subMajorHeadCode").focus();
        displaySmallErrorMessagesInRed("subMajorHeadCodeErr", "Please enter sub major head code.");
        result = 0;
    } else if (SubMajorcode != "") {
        $("subMajorHeadCodeErr").text("");
    }
    if (SubMajorHead == "") {
        $("#subMajorHeadName").focus();
        displaySmallErrorMessagesInRed("subMajorHeadNameErr", "Please enter sub major head.");
        result = 0;
    } else if (SubMajorHead != "") {
        $("subMajorHeadNameErr").text("");
    }
    if (result != 0) {
        if (saveorupdate == "save") {
            saveFinancialSubMajorHeadDetails();
        } else if (saveorupdate == "update") {
            updateFinancialSubMajorHeadDetails();
        }
    }
}
function saveFinancialSubMajorHeadDetails() {
    if (checkUserPrivelege(pvCreateSubMajorCode)) {
        var SubMajorHead = $("#subMajorHeadName").val();
        var SubMajorcode = $("#subMajorHeadCode").val();
        $.post(server_base_url + "financial/common/SubMajorHead/Save", {
            head: SubMajorHead,
            code: SubMajorcode,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            saveOrUpdateCommonFunctionInSubMajorHead(data);
        });
    }
}
function  saveOrUpdateCommonFunctionInSubMajorHead(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        if (data == duplicate_Message) {
            disableDiv(FieldGroupForCF);
            displayErrorMessages(successMsgDivCF, existed, "");
            setTimeout(function () {
                scrolupfunction();
                financalSubMinorHeadMaster("dashBoardBodyMainDiv");
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 2500);
        } else {
            disableDiv(FieldGroupForCF);
            displaySuccessMessages(successMsgDivCF, successMessage, "");
            setTimeout(function () {
                scrolupfunction();
                financalSubMajorHeadMaster("dashBoardBodyMainDiv");
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 2500);
        }
    }
}
function viewFinancialSubMajorHeadList(divId) {
    if (checkUserPrivelege(pvViewSubMajorCode)) {
        var columsName = ["Sub Major Head Name", "Sub Major Head Code"];
        createTableWithEditDeletePrivilage(innerDivCF, "List of Sub Major Head(s)", divId, MsgDivInTableCF, columsName, pvUpdateSubMajorCode, pvDeleteSubMajorCode);
        $.get(server_base_url + "financial/common/SubMajorHead/ViewList", {
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
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].subMajorHead + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].subMajorHeadCode + "</td>");
                            if (checkUserPrivelege(pvUpdateSubMajorCode)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatefinancialSubMajorHead('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteSubMajorCode)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletefinancialSubMajorHead','viewFinancialSubMajorHeadList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                            }
                        }
                        $('#' + divId).append("</table>");
                        $('#' + divId).dataTable();
                    }
                }
            }
        });
    }
}
function deletefinancialSubMajorHead(Id) {
    if (checkUserPrivelege(pvDeleteSubMajorCode)) {
        $.post(server_base_url + "financial/common/SubMajorHead/Delete", {
            id: Id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {

                if (data == delete_map) {
                    financalSubMajorHeadMaster(DashboardMainDivID);
//                displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, "Deleted Succesfully");
                    displayErrorMessages(MsgDivInTableCF, delete_map_messages, "");
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
                } else {
                    financalSubMajorHeadMaster(DashboardMainDivID);
//                displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, "Deleted Succesfully");
                    displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
                }



            }
        });
    }
}

function updatefinancialSubMajorHead(obj) {
    if (checkUserPrivelege(pvUpdateSubMajorCode)) {
        obj = JSON.parse(decodeURI(obj));
        resetAllValuesInSpecifiedDiv(FieldGroupForCF);
        $("#subMajorHeadName").val(obj.subMajorHead);
        $("#subMajorHeadCode").val(obj.subMajorHeadCode);
        $("#Id").val(obj._id.$oid);
        $("#viewFinancialSubMajorHeadListbody tr").css("background-color", "white");
        $("#viewFinancialSubMajorHeadListbody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#saveorupdate").val("update");
        $("#saveUpdateBtnId").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "financalSubMajorHeadMaster('" + DashboardMainDivID + "')");
    }
}
function updateFinancialSubMajorHeadDetails() {
    if (checkUserPrivelege(pvUpdateSubMajorCode)) {
        var Id = $('#Id').val();
        var SubMajorHead = $("#subMajorHeadName").val();
        var SubMajorcode = $("#subMajorHeadCode").val();
        $.post(server_base_url + "financial/common/SubMajorHead/Update", {
            submajorhead: SubMajorHead,
            id: Id,
            submajorheadcode: SubMajorcode,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            saveOrUpdateCommonFunctionInSubMajorHead(data);
        });
    }
}


