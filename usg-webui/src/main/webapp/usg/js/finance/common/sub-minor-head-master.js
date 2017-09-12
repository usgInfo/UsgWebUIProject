/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function financalSubMinorHeadMaster(divId, screenId) {
    if (screenId == "FINANCE")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayFinanceHorizontalBar()">Financial Management</a></label> ');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financalSubMajorHeadMaster("dashboardBodyMainDiv")>Sub Minor Head Master</a>');
        // $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a>><a href="javascript:void(0)" data-toggle="tab">Major Head</a>');
    } else if (screenId == "BUDGET")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
        //$("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetCommonMenuTabs()">Common Masters</a>><a href="javascript:void(0)" data-toggle="tab" onclick=displayBudgetFundType("dashboardBodyMainDiv")>Fund Type Master</a>');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetCommonMenuTabs()">Common Master</a>><a href="javascript:void(0)" data-toggle="tab">Sub Minor Head Master</a>');

    }
    // $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financalSubMinorHeadMaster("dashboardBodyMainDiv")>Sub Minor Head Master</a>');
    createFormWithPrivilage(divId, innerDivCF, "Sub  Minor Head", FieldGroupForCF, successMsgDivCF, pvCreateSubMinorCode);
    if (checkUserPrivelege(pvCreateSubMinorCode)) {
        getLabelInputInRow(FieldGroupForCF, "Sub Minor Head Name", "required", "Row0", "Row0Col1", "subMinorHeadName", "onkeypress=''");
        getLabelInputInRow(FieldGroupForCF, "Sub Minor Head Code", "required", "Row1", "Row1Col1", "subMinorHeadCode", "onkeypress=''");
        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "SubMinorHeadValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");


        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });



    }
    viewFinancialSubMinorHeadList("viewFinancialSubMinorHeadList");
}
function SubMinorHeadValidation()
{
    var result = 1;
    var saveorupdate = $("#saveorupdate").val();
    var SubMinorHead = $("#subMinorHeadName").val();
    var SubMinorcode = $("#subMinorHeadCode").val();
    if (SubMinorcode == "") {
        $("#subMinorHeadCode").focus();
        displaySmallErrorMessagesInRed("subMinorHeadCodeErr", "Please enter Sub Minor Head Code.");
        result = 0;
    } else if (SubMinorcode != "") {
        $("subMinorHeadCodeErr").text("");
    }
    if (SubMinorHead == "") {
        $("#subMinorHeadName").focus();
        displaySmallErrorMessagesInRed("subMinorHeadNameErr", "Please enter Sub Minor Head Name.");
        result = 0;
    } else if (SubMinorHead != "") {
        $("subMinorHeadNameErr").text("");
    }
    if (result != 0) {
        if (saveorupdate == "save") {
            saveFinancialSubMinorHeadDetails();
        } else if (saveorupdate == "update") {
            updateFinancialSubMinorHeadDetails();
        }
    }
}
function saveFinancialSubMinorHeadDetails() {
    if (checkUserPrivelege(pvCreateSubMinorCode)) {
        var SubMinorHead = $("#subMinorHeadName").val();
        var SubMinorcode = $("#subMinorHeadCode").val();
        $.post(server_base_url + "financial/common/SubMinorHead/Save", {
            head: SubMinorHead,
            code: SubMinorcode,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            saveCommonFunctionInSubMinorHead(data);
        });
    }
}
function  saveCommonFunctionInSubMinorHead(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        if (data == duplicate_Message) {
            disableDiv(FieldGroupForCF);
            displayErrorMessages(successMsgDivCF, existed, "");
            setTimeout(function () {
                scrolupfunction();
                financalSubMinorHeadMaster("dashBoardBodyMainDiv");
            }, 3000);
            clearSuccessMessageAfterTwoSecond(successMsgDivCF);
        } else {
            disableDiv(FieldGroupForCF);
            displaySuccessMessages(successMsgDivCF, successMessage, "");
            setTimeout(function () {
                scrolupfunction();
                financalSubMinorHeadMaster("dashBoardBodyMainDiv");
            }, 3000);
            clearSuccessMessageAfterTwoSecond(successMsgDivCF);
        }

    }
}
function viewFinancialSubMinorHeadList(divId) {
    if (checkUserPrivelege(pvViewSubMinorCode)) {
        var columsName = ["Sub Minor Head Name", "Sub Minor Head Code"];
        createTableWithEditDeletePrivilage(innerDivCF, "List of Sub Minor Head(s)", divId, MsgDivInTableCF, columsName, pvUpdateSubMinorCode, pvDeleteSubMinorCode);
        $.get(server_base_url + "financial/common/SubMinorHead/ViewList", {
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
                                    + "<td style='cursor:pointer;'>" + bdata[i].subMinorHead + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].subMinorHeadCode + "</td>");
                            if (checkUserPrivelege(pvUpdateSubMinorCode)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatefinancialSubMinorHead('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>")
                            }
                            if (checkUserPrivelege(pvDeleteSubMinorCode)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletefinancialSubMinorHead','viewFinancialSubMinorHeadList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
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
function updatefinancialSubMinorHead(obj) {
    if (checkUserPrivelege(pvUpdateSubMinorCode)) {

        //viewFinancialSubMinorHeadListbody

        obj = JSON.parse(decodeURI(obj));
        resetAllValuesInSpecifiedDiv(FieldGroupForCF);
        $("#subMinorHeadName").val(obj.subMinorHead);
        $("#subMinorHeadCode").val(obj.subMinorHeadCode);
        $("#Id").val(obj._id.$oid);
        $("#viewFinancialSubMinorHeadListbody tr").css("background-color", "white");
        $("#viewFinancialSubMinorHeadListbody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#saveorupdate").val("update");
        $("#saveUpdateBtnId").text("").text("Update");
        $("#viewFinancialSubMinorHeadListbody tr").css("background-color", "white");
        $("#viewFinancialSubMinorHeadListbody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
        addButtonOnclickFunction("resetBackBtnId", "Back", "financalSubMinorHeadMaster('" + DashboardMainDivID + "')");
    }
}
function updateFinancialSubMinorHeadDetails() {
    if (checkUserPrivelege(pvUpdateSubMinorCode)) {
        var Id = $('#Id').val();
        var SubMinorHead = $("#subMinorHeadName").val();
        var SubMinorcode = $("#subMinorHeadCode").val();
        $.post(server_base_url + "financial/common/SubMinorHead/Update", {
            minorhead: SubMinorHead,
            id: Id,
            subminorheadcode: SubMinorcode,
            userId: getUserSessionElement("userId")
        }).done(function (data) {

            updateCommonFunctionInSubMinorHead(data);
        });
    }
}

function  updateCommonFunctionInSubMinorHead(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        if (data == duplicate_Message) {
            disableDiv(FieldGroupForCF);
            displayErrorMessages(successMsgDivCF, existed, "");
            setTimeout(function () {
                scrolupfunction();
                financalSubMinorHeadMaster("dashBoardBodyMainDiv");
            }, 3000);
            clearSuccessMessageAfterTwoSecond(successMsgDivCF);
        } else {
            disableDiv(FieldGroupForCF);
            displaySuccessMessages(successMsgDivCF, updateSuccessMessage, "");
            setTimeout(function () {
                scrolupfunction();
                financalSubMinorHeadMaster("dashBoardBodyMainDiv");
            }, 3000);
            clearSuccessMessageAfterTwoSecond(successMsgDivCF);
        }


    }
}
function deletefinancialSubMinorHead(Id) {
    if (checkUserPrivelege(pvDeleteSubMinorCode)) {

        $.post(server_base_url + "financial/common/SubMinor/Delete", {
            id: Id,
            userId: getUserSessionElement("userId")

        }).done(function (data) {

            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                if (data == delete_map) {
                    financalSubMinorHeadMaster(DashboardMainDivID);
                    displayErrorMessages(MsgDivInTableCF, delete_map_messages, "");
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
                } else {

                    financalSubMinorHeadMaster(DashboardMainDivID);
                    displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
                }



            }
        });
    }
}


