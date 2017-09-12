/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function financalSubGovtBudgetHeadHeadMaster(divId, screenId) {
    if (screenId == "FINANCE")
    {
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financalSubGovtBudgetHeadHeadMaster("dashboardBodyMainDiv")>Government Budget Head Master</a>');

    } else if (screenId == "BUDGET")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
        //$("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetCommonMenuTabs()">Common Masters</a>><a href="javascript:void(0)" data-toggle="tab" onclick=displayBudgetFundType("dashboardBodyMainDiv")>Fund Type Master</a>');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetCommonMenuTabs()">Common Master</a>><a href="javascript:void(0)" data-toggle="tab">Government Budget Head Master</a>');

    }
    createFormWithPrivilage(divId, innerDivCF, "Government Budget Head", FieldGroupForCF, successMsgDivCF, pvCreateGovernmentBudgetHead);
    if (checkUserPrivelege(pvCreateGovernmentBudgetHead)) {
        getLabelDropDownInRow(FieldGroupForCF, "Major Head", "required", "Row0", "Row0Col1", "majorHead", "");
        getLabelDropDownInRow(FieldGroupForCF, "Sub Major Head", "required", "Row1", "Row1Col1", "subMajorHead", "");
        getLabelDropDownInRow(FieldGroupForCF, "Minor Head", "required", "Row2", "Row2Col1", "minorHead", "");
        getLabelDropDownInRow(FieldGroupForCF, "Sub Minor Head", "required", "Row3", "Row3Col1", "subMinorHead", "");
        getLabelTextareaInRow(FieldGroupForCF, "Remarks", "", "Row4", "Row4Col1", "remarks", "");
        getLabelInputInRow(FieldGroupForCF, "Order", "required", "Row5", "Row5Col1", "order", "onkeypress='return validateNumber(event)'");
        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "SubGovtBudgetHeadHeadValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
        viewOption("financial/common/MajorHead/ViewList", "", "majorHead", "majorHead", "Major Head");
        viewOption("financial/common/SubMajorHead/ViewList", "", "subMajorHead", "subMajorHead", "Sub Major Head");
        viewOption("financial/common/MinorHead/ViewList", "", "minorHead", "minorHead", "Minor Head");
        viewOption("financial/common/SubMinorHead/ViewList", "", "subMinorHead", "subMinorHead", "Sub Minor Head");
   
     $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    
    
    
    }
    viewFinancialSubGovtBudgetHeadHeadList("viewFinancialSubGovtBudgetHeadHeadList");
}
function SubGovtBudgetHeadHeadValidation()
{
    $("#" + successMsgDivCF).text("");
    $("#orderErr").text("");
    $("#subMinorHeadErr").text("");
    $("#minorHeadErr").text("");
    $("#subMajorHeadErr").text("");
    $("#majorHeadErr").text("");
    var result = 1;
    var saveorupdate = $("#saveorupdate").val();
    var majorHead = $("#majorHead").val();
    var subMajorHead = $("#subMajorHead").val();
    var minorHead = $("#minorHead").val();
    var subMinorHead = $("#subMinorHead").val();
    var order = $("#order").val();
    if (order == "" || order == "undefined" || majorHead == "" || majorHead == "undefined" || majorHead == null || subMajorHead == "" || subMajorHead == "undefined" || subMajorHead == null || minorHead == "" || minorHead == "undefined" || minorHead == null || subMinorHead == "" || subMinorHead == "undefined" || subMinorHead == null) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        if (order == "" || order == null) {
            $("#order").focus();
            displaySmallErrorMessagesInRed("orderErr", "Please select order.");
            result = 0;
        } else if (order != "") {
            $("#orderErr").text("");
        }
        if (subMinorHead == "" || subMinorHead == null) {
            $("#subMinorHead").focus();
            displaySmallErrorMessagesInRed("subMinorHeadErr", "Please select sub minor head.");
            result = 0;
        } else if (subMinorHead != "") {
            $("#subMinorHeadErr").text("");
        }
        if (minorHead == "" || minorHead == null) {
            $("#minorHead").focus();
            displaySmallErrorMessagesInRed("minorHeadErr", "Please select minor head.");
            result = 0;
        } else if (minorHead != "") {
            $("#minorHeadErr").text("");
        }
        if (subMajorHead == "" || subMajorHead == null) {
            $("#subMajorHead").focus();
            displaySmallErrorMessagesInRed("subMajorHeadErr", "Please select sub major head.");
            result = 0;
        } else if (subMajorHead != "") {
            $("#subMajorHeadErr").text("");
        }
        if (majorHead == "" || majorHead == null) {
            $("#majorHead").focus();
            displaySmallErrorMessagesInRed("majorHeadErr", "Please select major head.");
            result = 0;
        } else if (majorHead != "") {
            $("#majorHeadErr").text("");
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveFinancialSubGovtBudgetHeadHeadDetails();
            } else if (saveorupdate == "update") {
                updateFinancialSubGovtBudgetHeadHeadDetails();
            }
        }
    }
}
function saveFinancialSubGovtBudgetHeadHeadDetails() {
    if (checkUserPrivelege(pvCreateGovernmentBudgetHead)) {
        var majorHead = $("#majorHead").val();
        var subMajorHead = $("#subMajorHead").val();
        var minorHead = $("#minorHead").val();
        var subMinorHead = $("#subMinorHead").val();
        var remarks = $("#remarks").val();
        var order = $("#order").val();
        var obj = {
            majorHead: majorHead,
            subMajorHead: subMajorHead,
            minorHead: minorHead,
            subMinorHead: subMinorHead,
            order: order,
            remarks: remarks
        };
        $.post(server_base_url + "financial/common/GovtBudgetHead/Save", {
            govtbhJson: JSON.stringify(obj),
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            saveOrUpdateCommonFunctionInSubGovtBudgetHeadHead(data);
        });
    }
}
function  saveOrUpdateCommonFunctionInSubGovtBudgetHeadHead(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        if (data == duplicate_Message) {
            disableDiv(FieldGroupForCF);
            setTimeout(function () {
                scrolupfunction();
                financalSubGovtBudgetHeadHeadMaster("dashBoardBodyMainDiv");
                displayErrorMessages(successMsgDivCF, existed, "");
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 3000);
        } else {
            disableDiv(FieldGroupForCF);
            setTimeout(function () {
                scrolupfunction();
                financalSubGovtBudgetHeadHeadMaster("dashBoardBodyMainDiv");
                displaySuccessMessages(successMsgDivCF, successMessage, "");
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 2500);
        }
    }
}
function viewFinancialSubGovtBudgetHeadHeadList(divId) {
    if (checkUserPrivelege(pvViewGovernmentBudgetHead)) {
        var columsName = ["Major Head", "Sub Major Head", "Minor Head", "Sub Minor Head", "Remarks", "Order"];
        createTableWithEditDeletePrivilage(innerDivCF, "List of Government Budget Head(s)", divId, MsgDivInTableCF, columsName, pvUpdateGovernmentBudgetHead, pvDeleteGovernmentBudgetHead);
        $.get(server_base_url + "financial/common/GovtBudgetHead/ViewList", {
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
                                    + "<td style='cursor:pointer;'>" + bdata[i].majorHead + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].subMajorHead + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].minorHead + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].subMinorHead + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].remarks + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].order + "</td>");
                            if (checkUserPrivelege(pvUpdateGovernmentBudgetHead)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatefinancialSubGovtBudgetHeadHead('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteGovernmentBudgetHead)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletefinancialSubGovtBudgetHeadHead','viewFinancialSubGovtBudgetHeadHeadList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
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
function updatefinancialSubGovtBudgetHeadHead(obj) {
    obj = JSON.parse(decodeURI(obj));
    resetAllValuesInSpecifiedDiv(FieldGroupForCF);

    $("#majorHead option:contains(" + obj.majorHead + ")").attr('selected', 'selected');
    $("#subMajorHead option:contains(" + obj.subMajorHead + ")").attr('selected', 'selected');
    $("#minorHead option:contains(" + obj.minorHead + ")").attr('selected', 'selected');
    $("#subMinorHead option:contains(" + obj.subMinorHead + ")").attr('selected', 'selected');
    $("#remarks").val(obj.remarks);
    $("#order").val(obj.order);
    $("#Id").val(obj._id.$oid);
    $("#viewFinancialSubGovtBudgetHeadHeadListbody tr").css("background-color", "white");
    $("#viewFinancialSubGovtBudgetHeadHeadListbody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
    //viewOption("financial/common/MajorHead/ViewList", "", "majorHead", "majorHead", "Major Head");
    // viewOption("financial/common/SubMajorHead/ViewList", "", "subMajorHead", "subMajorHead", "Sub Major Head");
    //viewOption("financial/common/MinorHead/ViewList", "", "minorHead", "minorHead", "Minor Head");
    // viewOption("financial/common/SubMinorHead/ViewList", "", "subMinorHead", "subMinorHead", "Sub Minor Head");
    $("#saveorupdate").val("update");
    $("#saveUpdateBtnId").text("").text("Update");
    addButtonOnclickFunction("resetBackBtnId", "Back", "financalSubGovtBudgetHeadHeadMaster('" + DashboardMainDivID + "')");
}
function updateFinancialSubGovtBudgetHeadHeadDetails() {
    if (checkUserPrivelege(pvUpdateGovernmentBudgetHead)) {
        var Id = $('#Id').val();
        var majorHead = $("#majorHead").val();
        var subMajorHead = $("#subMajorHead").val();
        var minorHead = $("#minorHead").val();
        var subMinorHead = $("#subMinorHead").val();
        var remarks = $("#remarks").val();
        var order = $("#order").val();
        var obj = {
            majorHead: majorHead,
            subMajorHead: subMajorHead,
            minorHead: minorHead,
            subMinorHead: subMinorHead,
            order: order,
            remarks: remarks
        }
        $.post(server_base_url + "financial/common/GovtBudgetHead/Update", {
            govtbhJson: JSON.stringify(obj),
            id: Id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            updateCommonFunctionInSubGovtBudgetHeadHead(data);
        });
    }
}

function  updateCommonFunctionInSubGovtBudgetHeadHead(data) {

    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        if (data == duplicate_Message) {
            disableDiv(FieldGroupForCF);
            setTimeout(function () {
                scrolupfunction();
                financalSubGovtBudgetHeadHeadMaster("dashBoardBodyMainDiv");
                displayErrorMessages(successMsgDivCF, existed, "");
            clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 2500);
        } else {
            disableDiv(FieldGroupForCF);
            setTimeout(function () {
                scrolupfunction();
                financalSubGovtBudgetHeadHeadMaster("dashBoardBodyMainDiv");
                displaySuccessMessages(successMsgDivCF, updateSuccessMessage, "");
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 2500);
        }
    }
}
function deletefinancialSubGovtBudgetHeadHead(Id) {
    if (checkUserPrivelege(pvDeleteGovernmentBudgetHead)) {

        $.post(server_base_url + "financial/common/GovtBudgetHead/Delete", {
            id: Id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {

                if (data == delete_map) {
                    financalSubGovtBudgetHeadHeadMaster(DashboardMainDivID);
                    displayErrorMessages(MsgDivInTableCF, delete_map_messages, "");
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
                } else {
                    financalSubGovtBudgetHeadHeadMaster(DashboardMainDivID);
                    displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
                }
            }
        });
    }
}


