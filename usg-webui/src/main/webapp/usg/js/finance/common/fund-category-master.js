/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function financalFundCategoryMaster(screenId) {
     if (screenId == "FINANCE")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayFinanceHorizontalBar()">Financial Management</a></label> ');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financeFinancialYearMaster("dashboardBodyMainDiv")>Fund Category Master</a>');

    } else if(screenId == "BUDGET")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
        $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetCommonMenuTabs()">Common Master</a></label> >> <label>Fund Category Master</label>');

    }
//    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financalFundCategoryMaster("dashboardBodyMainDiv")>Fund Category Master</a>');
    createFormWithPrivilage("dashboardBodyMainDiv", innerDivCF, "Fund Category", FieldGroupForCF, successMsgDivCF, pvCreateFundCategory);
    if (checkUserPrivelege(pvCreateFundCategory)) {
        getLabelInputInRow(FieldGroupForCF, "Fund Category", "required", "Row0", "Row0Col1", "category", "onkeypress='return acceptAlphanumeric(event)' placeholder='Enter fund category'");
        getLabelTextareaInRow(FieldGroupForCF, "Remarks", "", "Row1", "Row1Col1", "remarks", "");
        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "FundCategoryValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
  
      $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    
    
    
    }
    viewFinancialFundCategoryList("viewFinancialFundCategoryList");
}
function FundCategoryValidation()
{
    var saveorupdate = $("#saveorupdate").val();
    $("#categoryErr").text("");
    $("#remarksErr").text("");
    var category = $("#category").val();
    var result = 1;
    $("#" + successMsgDivCF).text("");
    if (category == "" || category == "undefined") {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        if (category == "") {
            $("#category").focus();
            displaySmallErrorMessagesInRed("categoryErr", "Please enter Fund Category.");
            result = 0;
        } else if (category != "") {
            if (!category.match((alphaNumericPatterns()))) {
                $("#category").focus();
                displaySmallErrorMessagesInRed("categoryErr", "Please enter valid fund category.");
                result = 0;
            }
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveFinancialFundCategoryDetails();
            } else if (saveorupdate == "update") {
                updateFinancialFundCategoryDetails();
            }
        }
    }
}
function saveFinancialFundCategoryDetails() {
    if (checkUserPrivelege(pvCreateFundCategory)) {
        var category = $('#category').val();
        var remarks = $('#remarks').val();
        var obj = {
            category: category,
            remarks: remarks
        };
        $.post(server_base_url + "financial/common/FundCategory/Save", {
            fundcategoryJson: JSON.stringify(obj),
            userId: getUserSessionElement("userId")

        }).done(function (data) {

            saveCommonFunctionInFundCategory(data);
        });
    }
}
function  saveCommonFunctionInFundCategory(data) {

    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {

        if (data == duplicate) {
            disableDiv(FieldGroupForCF);
            displayErrorMessages(successMsgDivCF, existed, "");
            setTimeout(function () {
                scrolupfunction();
                financalFundCategoryMaster("dashBoardBodyMainDiv");

                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 3000);
        } else {
            disableDiv(FieldGroupForCF);
            displaySuccessMessages(successMsgDivCF, successMessage, "");
            setTimeout(function () {
                scrolupfunction();
                financalFundCategoryMaster("dashBoardBodyMainDiv");

                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 3000);
        }
    }
}
function viewFinancialFundCategoryList(divId) {
    var columsName = ["Fund Category", "Remarks"];
    createTableWithEditDeletePrivilage(innerDivCF, "List of Fund Categories", divId, MsgDivInTableCF, columsName, pvUpdateFundCategory, pvDeleteFundCategory);
    $.get(server_base_url + "financial/common/FundCategory/ViewList", {
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
                                + "<td style='cursor:pointer;'>" + bdata[i].category + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].remarks + "</td>");
                        if (checkUserPrivelege(pvUpdateFundCategory)) {
                            $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatefinancialFundCategory('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                        }
                        if (checkUserPrivelege(pvDeleteFundCategory)) {
                            $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletefinancialFundCategory','viewFinancialFundCategoryList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                        }
                    }
                    $('#' + divId).append("</table>");
                    $('#' + divId).dataTable();
                }
            }
        }
    });
}
function updatefinancialFundCategory(obj) {
    obj = JSON.parse(decodeURI(obj));
    resetAllValuesInSpecifiedDiv(FieldGroupForCF);

    $("#category").val(obj.category);
    $("#remarks").val(obj.remarks);
    $("#Id").val(obj._id.$oid);
    //viewFinancialFundCategoryListbody
    $("#viewFinancialFundCategoryListbody tr").css("background-color", "white");
    $("#viewFinancialFundCategoryListbody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#saveorupdate").val("update");
    $("#saveUpdateBtnId").text("").text("Update");
    addButtonOnclickFunction("resetBackBtnId", "Back", "financalFundCategoryMaster('" + DashboardMainDivID + "')");
}
function updateFinancialFundCategoryDetails() {
    if (checkUserPrivelege(pvUpdateFundCategory)) {
        var Id = $('#Id').val();
        var category = $('#category').val();
        var remarks = $('#remarks').val();
        var obj = {
            category: category,
            remarks: remarks
        };
        $.post(server_base_url + "financial/common/FundCategory/Update", {
            fundcategoryJson: JSON.stringify(obj),
            fcId: Id,
            userId: getUserSessionElement("userId")

        }).done(function (data) {
            updateCommonFunctionInFundCategory(data);
        });
    }
}

function  updateCommonFunctionInFundCategory(data) {

    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {

        if (data == duplicate) {
            disableDiv(FieldGroupForCF);
            displayErrorMessages(successMsgDivCF, existed, "");
            setTimeout(function () {
                scrolupfunction();
                financalFundCategoryMaster("dashBoardBodyMainDiv");

            }, 3000);
            clearSuccessMessageAfterTwoSecond(successMsgDivCF);
        } else {
            disableDiv(FieldGroupForCF);
            displaySuccessMessages(successMsgDivCF, updateMessage, "");
            setTimeout(function () {
                scrolupfunction();
                financalFundCategoryMaster("dashBoardBodyMainDiv");

            }, 3000);
            clearSuccessMessageAfterTwoSecond(successMsgDivCF);
        }
    }
}

function deletefinancialFundCategory(Id) {
    if (checkUserPrivelege(pvDeleteFundCategory)) {

        $.post(server_base_url + "financial/common/FundCategory/Delete", {
            fcId: Id,
            userId: getUserSessionElement("userId")

        }).done(function (data) {

            if (BasicIfElseForTable(data, MsgDivInTableCF)) {

                if (data == delete_map) {
                    financalFundCategoryMaster(DashboardMainDivID);
                    displayErrorMessages(MsgDivInTableCF, delete_map_messages, "");
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
                } else {
                    financalFundCategoryMaster(DashboardMainDivID);
                    displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
                }

            }
        });
    }
}


