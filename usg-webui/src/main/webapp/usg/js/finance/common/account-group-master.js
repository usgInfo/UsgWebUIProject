/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function financalAccountGroupMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financalAccountGroupMaster("dashboardBodyMainDiv")>Account Group Master</a>');

    createFormWithPrivilage(divId, innerDivCF, "Group Master", FieldGroupForCF, successMsgDivCF, pvCreateGroup);
    if (checkUserPrivelege(pvCreateGroup)) {
        getLabelInputInRow(FieldGroupForCF, "Group Name", "required", "Row0", "Row0Col1", "groupName", "");
        getLabelInputInRow(FieldGroupForCF, "Group Alias", "required", "Row1", "Row1Col1", "groupAlias", "onkeypress='return acceptAlphanumeric(event)'");
        getLabelDropDownInRow(FieldGroupForCF, "Under Group", "", "Row2", "Row2Col1", "underGroup", "");
        $("#" + FieldGroupForCF).append("<div class='col-md-3' style='padding-right: 32px;'><label class='control-label pull-right'>Nature </label></div>");
        $("#" + FieldGroupForCF).append("<div id='FieldDiv3' class='col-md-9' />");
        $("#" + FieldGroupForCF).append("&nbsp;&nbsp;&nbsp;<input type='radio'id='nature0' name='nature'>&nbsp&nbsp&nbsp<label>Assets</label>");
        $("#" + FieldGroupForCF).append("&nbsp&nbsp&nbsp<input type='radio' id='nature1'  name='nature'>&nbsp&nbsp&nbsp<label>Liability</label>");
        $("#" + FieldGroupForCF).append("&nbsp&nbsp&nbsp<input type='radio' id='nature2' name='nature'>&nbsp&nbsp&nbsp<label>Income</label>");
        $("#" + FieldGroupForCF).append("&nbsp&nbsp&nbsp<input type='radio' id='nature3' name='nature'>&nbsp&nbsp&nbsp<label>Expenditure</label>");
        $("#FieldDiv3").append("<span id='natureErr'></span>");
        getLabelCheckBoxInRow(FieldGroupForCF, "Is Active", "", "Row3", "Row3Col1", "isActive", "");
        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "AccountGroupValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
        fetchUnderGroupForAccountGroup();
        $("#underGroup").attr("onchange", "getNatureTypeForUnderGroup()");
 
      $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    
    
    }
    viewFinancialAccountGroupList("viewFinancialAccountGroupList");
}
function fetchUnderGroupForAccountGroup() {
    $("#underGroup").text("").append("<option value=''>---- Select Group ----</option>");
    $.get(server_base_url + "/financial/account/GroupMaster/ViewList", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#underGroup").append("<option value='" + subData._id.$oid + "'>" + subData.groupName + "</option>");
            }
        }
    });
}
function getNatureTypeForUnderGroup()
{
    var underGroup = $("#underGroup").val();
    if (underGroup != null)
    {
        $.get(server_base_url + "Finance/common/GetNatureForUnderGroupService", {
            underGroupId: underGroup
        }).done(function (data) {
            if (data == fail || data == unauthorized) {
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == "" || data == null)
            {

            } else
            {
                var natureType = data.result;
                if (natureType == "Assets") {
                    $("#nature0").attr("checked", "checked");
                } else if (natureType == "Liability") {
                    $("#nature1").attr("checked", "checked");
                } else if (natureType == "Income") {
                    $("#nature2").attr("checked", "checked");
                } else if (natureType == "Expenditure") {
                    $("#nature3").attr("checked", "checked");
                }
                //alert(natureType);

            }
        });
    }
}

function AccountGroupValidation()
{
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    var saveorupdate = $("#saveorupdate").val();
    var groupName = $("#groupName").val();
    var groupAlias = $("#groupAlias").val();
    var underGroup = $("#underGroup").val();
    var result = 1;
    if (groupName == "" || groupName == "undefined" || groupName == null || groupAlias == "" || groupAlias == "undefined" || groupAlias == null || underGroup == null) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        if (underGroup == null) {
            $("#underGroup").focus();
            displaySmallErrorMessagesInRed("underGroupErr", "Please select under group name.");
            result = 0;
        } else if (underGroup != null) {
        }
        if (groupAlias == "") {
            $("#groupAlias").focus();
            displaySmallErrorMessagesInRed("groupAliasErr", "Please enter group alias.");
            result = 0;
        } else if (groupAlias != "") {
            if (!groupAlias.match((alphaNumericPatterns()))) {
                $("#groupAlias").focus();
                displaySmallErrorMessagesInRed("groupAliasErr", "Please enter valid group alias.");
                result = 0;
            }
        }
        if (groupName == "") {
            $("#groupName").focus();
            displaySmallErrorMessages("groupNameErr", "Please enter group name.");
            result = 0;
        } else if (groupName != "") {
            if (!groupName.match((alphaNumericPatterns()))) {
                $("#groupName").focus();
                displaySmallErrorMessagesInRed("groupNameErr", "Please enter valid group name.");
                result = 0;
            }
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveFinancialAccountGroupDetails();
            } else if (saveorupdate == "update") {
                updateFinancialAccountGroupDetails();
            }
        }
    }
}
function saveFinancialAccountGroupDetails() {
    if (checkUserPrivelege(pvCreateGroup)) {
        var nature = "";
        if ($('#nature0').is(':checked')) {
            nature = "Assets";
        } else if ($('#nature1').is(':checked')) {
            nature = "Liability";
        } else if ($('#nature2').is(':checked')) {
            nature = "Income";
        } else if ($('#nature3').is(':checked')) {
            nature = "Expenditure";
        }
        var isActive = "No";
        if ($("#isActive").prop("checked") == true) {
            isActive = "Yes";
        }
        var obj = {
            groupName: $('#groupName').val(),
            groupAlias: $('#groupAlias').val(),
            underGroup: $('#underGroup').val(),
            nature: nature,
            isActive: isActive
        };
        $.post(server_base_url + "financial/common/Group/Save", {
            groupJson: JSON.stringify(obj),
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            saveOrUpdateCommonFunctionInAccountGroup(data);
        });
    }
}
function  saveOrUpdateCommonFunctionInAccountGroup(data) {

    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        if (data == "duplicate") {
            disableDiv(FieldGroupForCF);
            setTimeout(function () {
                scrolupfunction();
                financalAccountGroupMaster("dashBoardBodyMainDiv");
                displayErrorMessages(successMsgDivCF, existed, "");
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 2000);
        } else {
            disableDiv(FieldGroupForCF);
            setTimeout(function () {
                scrolupfunction();
                financalAccountGroupMaster("dashBoardBodyMainDiv");
                displaySuccessMessages(successMsgDivCF, successMessage, "");
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 2000);
        }
    }
}
function viewFinancialAccountGroupList(divId) {
    if (checkUserPrivelege(pvViewGroup)) {
        var columsName = ["Group Name", "Group Alias", "Under Group", "Group Nature", "Is Active"];
        var nonEditableGroups = ["Branch", "Division", "Capital Account", "Current Assets", "Current Liabilities", "Direct Expenses", "Direct Incomes", "Fixed Assets", "Indirect Expenses", "Indirect Incomes", "Investments", "Loans", "Liability", "Misc.Expenses", "Purchase Accounts", "Sales Accounts", "Suspense A/c"]
        createTableWithEditDeletePrivilage(innerDivCF, "List of Group(s)", divId, MsgDivInTableCF, columsName, pvUpdateGroup, pvDeleteGroup);
        $.get(server_base_url + "financial/common/Group/ViewList", {
        }).done(function (bdata) {
            //alert(bdata);
            if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        var divIdBody = divId + "body";
                        $("#" + divId).append("<tbody id='" + divIdBody + "' class='table-striped table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var exists = nonEditableGroups.indexOf(bdata[i].groupName);
                            var obj = JSON.stringify(bdata[i]);
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].groupName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].groupAlias + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].underGroupName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].nature + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].isActive + "</td>");
                            if (exists != "-1")
                            {
                                if (checkUserPrivelege(pvUpdateGroup)) {
                                    $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;'>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_non_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                                }
                                if (checkUserPrivelege(pvDeleteGroup)) {
                                    $("#" + bdata[i]._id.$oid).append("<td >" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_non_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                                }
                            } else
                            {
                                if (checkUserPrivelege(pvUpdateGroup)) {
                                    $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatefinancialAccountGroup('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                                }
                                if (checkUserPrivelege(pvDeleteGroup)) {
                                    $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletefinancialAccountGroup','viewFinancialAccountGroupList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                                }
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
function updatefinancialAccountGroup(obj) {
    if (checkUserPrivelege(pvUpdateGroup)) {
        obj = JSON.parse(decodeURI(obj));
        resetAllValuesInSpecifiedDiv(FieldGroupForCF);
        $("#groupName").val(obj.groupName);
        $("#groupAlias").val(obj.groupAlias);
        $("#underGroup").val(obj.underGroup);
        //$("#underGroup option:contains(" + obj.underGroup + ")").attr('selected', 'selected');
        if (obj.isActive == "Yes") {
            $("#isActive").attr("checked", true);
        }
        if (obj.nature == "Assets") {
            $("#nature0").attr("checked", "checked");
        } else if (obj.nature == "Liability") {
            $("#nature1").attr("checked", "checked");
        } else if (obj.nature == "Income") {
            $("#nature2").attr("checked", "checked");
        } else if (obj.nature == "Expenditure") {
            $("#nature3").attr("checked", "checked");
        }
        $("#Id").val(obj._id.$oid);
        $("#saveorupdate").val("update");
        $("#saveUpdateBtnId").text("").text("Update");
        $("#viewFinancialAccountGroupListbody tr").css("background-color", "white");
        $("#viewFinancialAccountGroupListbody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
        //getNatureTypeForUnderGroup();
        addButtonOnclickFunction("resetBackBtnId", "Back", "financalAccountGroupMaster('" + DashboardMainDivID + "')");
    }
}
function updateFinancialAccountGroupDetails() {
    if (checkUserPrivelege(pvUpdateGroup)) {
        var Id = $('#Id').val();
        var nature = "";
        if ($('#nature0').is(':checked')) {
            nature = "Assets";
        } else if ($('#nature1').is(':checked')) {
            nature = "Liability";
        } else if ($('#nature2').is(':checked')) {
            nature = "Income";
        } else if ($('#nature3').is(':checked')) {
            nature = "Expenditure";
        }
        var isActive = "No";
        if ($("#isActive").prop("checked") == true) {
            isActive = "Yes";
        }
        var obj = {
            groupName: $('#groupName').val(),
            groupAlias: $('#groupAlias').val(),
            underGroup: $('#underGroup').val(),
            nature: nature,
            isActive: isActive
        };
        $.post(server_base_url + "financial/common/Group/Update", {
            groupJson: JSON.stringify(obj),
            gId: Id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            updateCommonFunctionInAccountGroup(data);
        });
    }
}

function  updateCommonFunctionInAccountGroup(data) {

    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        if (data == "duplicate") {
            disableDiv(FieldGroupForCF);
            displayErrorMessages(successMsgDivCF, existed, "");
            setTimeout(function () {
                scrolupfunction();
                financalAccountGroupMaster("dashBoardBodyMainDiv");

                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 2000);
        } else {
            disableDiv(FieldGroupForCF);
            displaySuccessMessages(successMsgDivCF, updateSuccessMessage, "");
            setTimeout(function () {
                scrolupfunction();
                financalAccountGroupMaster("dashBoardBodyMainDiv");

                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 2000);
        }
    }
}
function deletefinancialAccountGroup(Id) {
    if (checkUserPrivelege(pvDeleteGroup)) {

        $.post(server_base_url + "financial/common/Group/Delete", {
            gId: Id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                if (data == delete_map) {
                    financalAccountGroupMaster(DashboardMainDivID);
                    displayErrorMessages(MsgDivInTableCF, delete_map_messages, "");
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
                } else {
                    financalAccountGroupMaster(DashboardMainDivID);
                    displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
                }




//            displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, "Deleted Succesfully");
            }
        });
    }
}


