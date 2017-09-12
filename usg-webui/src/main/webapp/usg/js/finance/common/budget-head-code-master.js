/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function financalBudgetHeadCodeMaster(divId) {
    alert("finance");
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financalBudgetHeadCodeMaster("dashboardBodyMainDiv")>Budget Head Code Master</a>');
    createForm(divId, innerDivCF, "Budget Head Code Master", FieldGroupForCF, successMsgDivCF);
    getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
    $("#Row0Col1").append(getLabel("Government Budget Head", "required") + "" + getDropDown("governmentBudgetHead"));
    $("#Row0Col2").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));

    getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Budget Head", "required", "budgetHead", "Enter budget head", "onkeypress='return validatealphanumeric(event)'"));
    $("#Row1Col2").append(getLabel_InputWithSpan("Display Budget Head", "required", "displayBudgetHead", "Enter display budget head code", ""));

    getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel_InputWithSpan("Budget Head Description", "required", "budgetHeadDescription", "Enter budget head description", ""));
    $("#Row2Col2").append(getLabel("Under Budget Head", "required") + "" + getDropDown("underBudgetHead"));

    getTwoColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel("Remarks", "") + "" + getTextareaWithErrSpan("remarks", "Enter Remarks", "", "maxlength=200"));
    $("#Row3Col2").append(getLabel("Is Active", "") + "" + getCheckboxWithSpan("isActive"));

    getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "BudgetHeadCodeValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
    GetGovtBudgetHeadListForFinancialBudgetHeadMaster("governmentBudgetHead", "Government Budget Head");
    viewOption("financial/common/FundType/ViewList", "", "description", "fundType", "Fund Type");
    viewOption("financial/common/UnderBudgetHead/ViewList", "", "underBudgetHead", "underBudgetHead", "Under Budget Head");
    $("#" + innerDivCF).append("<div id='SearchFinancialBudgetHeadCode' class=''/>");
    SearchFinancialBudgetHeadCode("SearchFinancialBudgetHeadCode");

    setTimeout(function () {
        fetchUnderBudgetHead();
    }, 1000);
    viewFinancialBudgetHeadCodeList("viewFinancialBudgetHeadCodeList");
}





function SearchFinancialBudgetHeadCode(divId) {
    $("#" + divId).text("").append("<div id='innerDivForSearch' class='' />");
    $("#innerDivForSearch").text("").append("<div id='SearchtableHeader' />");
    $("#SearchtableHeader").append("<div id='SearchFirstPanel' class='panel panel-blue ' />");
    $("#SearchFirstPanel").append("<div id='SearchfirstPanelHeading' class='panel-heading' />");
    $("#SearchfirstPanelHeading").append("<h4 id='SearchtableHeader1' class='panel-title' />");
    $("#SearchtableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseSearch'><center>Search Criteria</center>");
    $("#SearchFirstPanel").append("<div id='collapseSearch' class='panel-collapse collapse in ' />");
    $("#collapseSearch").append("<div id='SearchpanelMainBody' class = 'panel-body' />");
    $("#SearchpanelMainBody").append("<div id='SearchpanelRow' class='row' />");
    var SearchErrorDiv = successMsgDivCF + "Search";
    $("#SearchpanelRow").append("<div id='" + SearchErrorDiv + "'></div>");
    $("#SearchpanelRow").append("<div id='FiledGroupSearch' class='form-groupn pal' />");

    getTwoColumnInRow("FiledGroupSearch", "RowSearch0", "col1Search", "col2Search");
    $("#col1Search").append(getLabel("Government Budget Head", "") + "" + getDropDown("governmentBudgetHeadSearch"));
    $("#col2Search").append(getLabel("Fund Type", "") + "" + getDropDown("fundTypeSearch"));

    getTwoColumnInRow("FiledGroupSearch", "RowSearch1", "col1Search1", "col2Search2");
    $("#col1Search1").append(getLabel_InputWithSpan("Budget Head", "", "budgetHeadSearch", "", "maxlength=30"));
    $("#col2Search2").append(getLabel_InputWithSpan("Budget Head Description", "", "budgetHeadDescriptionSearch", "", "maxlength=30"));
    viewOption("financial/common/FundType/ViewList", "", "description", "fundTypeSearch", "Fund Type");
    GetGovtBudgetHeadListForFinancialBudgetHeadMaster("governmentBudgetHeadSearch", "Government Budget Head");
    getSaveResetUpdateBackButton("FiledGroupSearch", "RowSearch2", "Search", "SearchButtonId", "validateBudgetHeadCodeSearch()", "Reset", "ResetSearchId", "resetAllValuesInSpecifiedDiv('FiledGroupSearch')");
}





function validateBudgetHeadCodeSearch() {
    var divId = "viewFinancialBudgetHeadCodeList";
    var divIdBody = divId + "body";
    var financialBudgetHeadJson = {
        governmentBudgetHead: $('#governmentBudgetHeadSearch').val(),
        fundType: $('#fundTypeSearch').val(),
        budgetHead: $('#budgetHeadSearch').val(),
        budgetHeadDescription: $('#budgetHeadDescriptionSearch').val()
    };
    $.post(server_base_url + "financial/common/BudgetHeadCode/Search", {
        searchJSON: JSON.stringify(financialBudgetHeadJson),
        condition: "No"
    }).done(function (bdata) {
        var sno = 0;
        $("#" + divIdBody).text("");
        if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {
            for (var i = bdata.length - 1; i >= 0; i--) {
                sno++;
                var obj = JSON.stringify(bdata[i]);
                $("#" + divIdBody).append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].governmentBudgetHead + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].budgetHead + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].fundType + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadDescription + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].isActive + "</td>"
                        + "<td style='cursor:pointer;' onclick=updatefinancialBudgetHeadCode('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                        + "<td onclick=deletefinancialBudgetHeadCode('" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
            }
        }
    });
}
function BudgetHeadCodeValidation()
{
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    var result = 1;
    var saveorupdate = $("#saveorupdate").val();
    var governmentBudgetHead = $("#governmentBudgetHead").val();
    var fundType = $("#fundType").val();
    var budgetHead = $("#budgetHead").val();
    var displayBudgetHead = $("#displayBudgetHead").val();
    var budgetHeadDescription = $("#budgetHeadDescription").val();
    var underBudgetHead = $("#underBudgetHead").val();
    if (governmentBudgetHead == "" || governmentBudgetHead == "undefined" || governmentBudgetHead == null || fundType == "" || fundType == "undefined" || fundType == null || displayBudgetHead == "" || displayBudgetHead == "undefined" || displayBudgetHead == null || underBudgetHead == "" || underBudgetHead == "undefined" || underBudgetHead == null || budgetHeadDescription == "" || budgetHeadDescription == "undefined" || budgetHeadDescription == null || underBudgetHead == "" || underBudgetHead == "undefined" || underBudgetHead == null) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        if (budgetHeadDescription == "") {
            $("#budgetHeadDescription").focus();
            displaySmallErrorMessagesInRed("budgetHeadDescriptionErr", "Please enter retirement age.");
            result = 0;
        }
        if (underBudgetHead == "") {
            $("#underBudgetHead").focus();
            displaySmallErrorMessagesInRed("underBudgetHeadErr", "Please select under budget head.");
            result = 0;
        }
        if (displayBudgetHead == "") {
            $("#displayBudgetHead").focus();
            displaySmallErrorMessagesInRed("displayBudgetHeadErr", "Please enter Budget Head");
            result = 0;
        }
        if (budgetHead == "") {
            $("#budgetHead").focus();
            displaySmallErrorMessagesInRed("budgetHeadErr", "Please enter Budget Head");
            result = 0;
        }
        if (fundType == null) {
            $("#fundType").focus();
            displaySmallErrorMessagesInRed("fundTypeErr", "Please select Fund Type.");
            result = 0;
        }
        if (governmentBudgetHead == null) {
            $("#governmentBudgetHead").focus();
            displaySmallErrorMessagesInRed("governmentBudgetHeadErr", "Please Select  Government Budget Head.");
            result = 0;
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveFinancialBudgetHeadCodeDetails();
            } else if (saveorupdate == "update") {
                updateFinancialBudgetHeadCodeDetails();
            }
        }
    }
}
function saveFinancialBudgetHeadCodeDetails() {
    var isActive = "No";
    if ($("#isActive").prop("checked") == true) {
        isActive = "Yes";
    }
    var financialBudgetHeadJson = {
        governmentBudgetHead: $('#governmentBudgetHead').val(),
        fundType: $('#fundType').val(),
        budgetHead: $('#budgetHead').val(),
        displayBudgetHead: $('#displayBudgetHead').val(),
        budgetHeadDescription: $('#budgetHeadDescription').val(),
        underBudgetHead: $('#underBudgetHead').val(),
        remarks: $('#remarks').val(),
        isActive: isActive
    };
    $.post(server_base_url + "financial/common/BudgetHeadCode/Save", {
        obj: JSON.stringify(financialBudgetHeadJson)
    }).done(function (data) {
        saveOrUpdateCommonFunctionInBudgetHeadCode(data);
    });
}
function  saveOrUpdateCommonFunctionInBudgetHeadCode(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        setTimeout(function () {
            scrolupfunction();
            financalBudgetHeadCodeMaster("dashBoardBodyMainDiv");
            displaySuccessMessages(successMsgDivCF, successMessage, "");
        }, 1000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function viewFinancialBudgetHeadCodeList(divId) {
    var columsName = ["Government Budget Head", "Budget Head", "Fund Type", "Budget Head Description", "Is Active"];
    createTable(innerDivCF, "List of Under Budget Head", divId, MsgDivInTableCF, columsName);
    $.get(server_base_url + "financial/common/BudgetHeadCode/ViewList", {
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
                                + "<td style='cursor:pointer;'>" + bdata[i].governmentBudgetHead + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].budgetHead + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].fundType + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadDescription + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].isActive + "</td>"
                                + "<td style='cursor:pointer;' onclick=updatefinancialBudgetHeadCode('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                                + "<td onclick=deletePopUp('deletefinancialBudgetHeadCode','viewFinancialBudgetHeadCodeList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                    }
                    $('#' + divId).append("</table>");
                    $('#' + divId).dataTable();
                }
            }
        }
    });
}
function updatefinancialBudgetHeadCode(obj) {
    obj = JSON.parse(decodeURI(obj));
    resetAllValuesInSpecifiedDiv(FieldGroupForCF);
    $("#Id").val(obj._id.$oid);
    $("#budgetHead").val(obj.budgetHead);
    $("#displayBudgetHead").val(obj.displayBudgetHead);
    $("#budgetHeadDescription").val(obj.budgetHeadDescription);
    $("#remarks").val(obj.remarks);
    $("#governmentBudgetHead option:contains(" + obj.governmentBudgetHead + ")").attr('selected', 'selected');
    $("#fundType option:contains(" + obj.fundType + ")").attr('selected', 'selected');
    $("#underBudgetHead option:contains(" + obj.underBudgetHead + ")").attr('selected', 'selected');
    if (obj.isActive == "Yes")
        $("#isActive").attr("checked", true);
    $("#saveorupdate").val("update");
    $("#saveUpdateBtnId").text("").text("Update");
    addButtonOnclickFunction("resetBackBtnId", "Back", "financalBudgetHeadCodeMaster('" + DashboardMainDivID + "')");
}
function updateFinancialBudgetHeadCodeDetails() {
    var Id = $('#Id').val();
    var isActive = "No";
    if ($("#isActive").prop("checked") == true) {
        isActive = "Yes";
    }
    var financialBudgetHeadJson = {
        governmentBudgetHead: $('#governmentBudgetHead').val(),
        fundType: $('#fundType').val(),
        budgetHead: $('#budgetHead').val(),
        displayBudgetHead: $('#displayBudgetHead').val(),
        budgetHeadDescription: $('#budgetHeadDescription').val(),
        underBudgetHead: $('#underBudgetHead').val(),
        remarks: $('#remarks').val(),
        isActive: isActive
    };
    $.post(server_base_url + "fiancial/common/BudgetHeadCode/Update", {
        obj: JSON.stringify(financialBudgetHeadJson),
        objId: Id
    }).done(function (data) {
        saveOrUpdateCommonFunctionInBudgetHeadCode(data);
    });
}
function deletefinancialBudgetHeadCode(Id) {

    $.post(server_base_url + "financial/common/BudgetHeadCode/Delete", {
        objId: Id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {
        if (BasicIfElseForTable(data, MsgDivInTableCF)) {
            financalBudgetHeadCodeMaster(DashboardMainDivID);
//            displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, "Deleted Succesfully");
            displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
            clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
        }
    });
}

function GetGovtBudgetHeadListForFinancialBudgetHeadMaster(DivId, message) {
    $.get(server_base_url + "financial/common/GovtBudgetHead/ViewList", {
    }).done(function (pdata) {
        if (pdata != null) {
            if (pdata.length > 0) {
                $("#" + DivId).append("<option value = '' selected disabled>---- Select " + message + " ----</option>");
                for (var i = pdata.length - 1; i >= 0; i--) {
                    $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].majorHead + "-" + pdata[i].subMajorHead + "-" + pdata[i].minorHead + "-" + pdata[i].subMinorHead + "-" + pdata[i].order + "</option>");
                }
            }
        }
    });
}

