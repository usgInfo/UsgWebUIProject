/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var successMsgDivCF = "successMsgDivBeforeDivCF";
var MsgDivInTableCF = "TableMsgDivCF";
var FieldGroupForCF = "FieldGroupCF";
var innerDivCF = "innerDivCF";
var mandatoryFieldMsg = "Please fill all mandatory fields";
var DashboardMainDivID = "dashBoardBodyMainDiv";

function createForm(DivId, innerDiv, masterName, FiledGroup, successMsgDivCF) {
    var collapseId = "FormCollapseInCommonFunction";
    var collapseIdwithHash = "#" + collapseId;
    var collapseIdPlusOrMinus = collapseId + "PlusOrMinus";
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#" + DivId).text("").append("<div id='" + innerDiv + "' class='' />");
    $("#" + innerDiv).text("").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>" + masterName + "</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='" + collapseIdPlusOrMinus + "'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='" + collapseId + "' class='panel-collapse collapse in ' />");
    $("#" + collapseIdPlusOrMinus).click(function () {
        $("#" + collapseId).toggle();
        if ($("#" + collapseIdPlusOrMinus + " span").hasClass("glyphicon-minus-sign")) {
            $("#" + collapseIdPlusOrMinus).text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#" + collapseIdPlusOrMinus).text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });

    $("#" + collapseId).append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
    $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<div id='" + successMsgDivCF + "'></div>");
    $("#panelRow").append("<div id='" + FiledGroup + "' class='form-groupn pal' />");
    $("#" + FiledGroup).append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#" + FiledGroup).append("<input type='hidden' id='Id' >");
}
function createTable(innerDiv, TableName, tableId, ErrorDiv, ColumnsName) {
    $("#" + innerDiv).append("<div id='tableHeaderForList' class=''/>");
    var collapseId = "TableCollapseInCommonFunction";
    var collapseIdwithHash = "#" + collapseId;
    var collapseIdPlusOrMinus = collapseId + "PlusOrMinus";
    $("#tableHeaderForList").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>" + TableName + "</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='" + collapseIdPlusOrMinus + "'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalListPanel").append("<div id='" + collapseId + "' class='panel-collapse collapse in' />");
    $("#" + collapseIdPlusOrMinus).click(function () {
        $("#" + collapseId).toggle();
        if ($("#" + collapseIdPlusOrMinus + " span").hasClass("glyphicon-minus-sign")) {
            $("#" + collapseIdPlusOrMinus).text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#" + collapseIdPlusOrMinus).text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#" + collapseId).append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").append("<div  id='" + ErrorDiv + "'/>");
    $("#listpanelRow").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered  mb30' id='" + tableId + "' />");
    var columnStr = "<th class='sno_width'> S.No</th>";
    for (var j = 0; j < ColumnsName.length; j++) {
        columnStr = columnStr + "<th style='min-width:30%;width:auto;'><i ></i>" + ColumnsName[j] + "</th>"
    }
    var theadId = tableId + "TheadId";
    $("#" + tableId).append("<thead id='" + theadId + "' class=''><tr>"
            + columnStr
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>"
            + "</tr></thead>"
            );
}
function BasicIfElseForTable(data, MsgDivInTableCF, TableId) {
    if (data == fail || data.statuscode == fail) {
        displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, "No Data Available.");
        $("#" + TableId + "TheadId").text("");
        return false;
    } else if (data == unauthorized || data.statuscode == unauthorized) {
        displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, "" + unauthorizedMessage + "<br /><br />");
        $("#" + TableId + "TheadId").text("");
        return false;
    } else if (data == invalidSession || data.statuscode == invalidSession) {
        callSessionTimeout();
        $("#" + TableId + "TheadId").text("");
        return false;
    } else if (data == statusException || data.statuscode == statusException) {
        displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, "No Data Available.");
        $("#" + TableId + "TheadId").text("");
        return false;
    } else if (data == null) {
        displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, "No Data Available.");
        $("#" + TableId + "TheadId").text("");
        return false;
    } else {
        return true;
    }
}
function BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF) {
    if (data == fail || data.statuscode == fail) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Invalid username / password" + "<br/>");
        return false;
    } else if (data == unauthorized || data.statuscode == unauthorized) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, unauthorizedMessage + "<br/>");
        return false;
    } else if (data == statusException || data.statuscode == statusException) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, statusExceptionMessage + "<br/>");
        return false;
    } else if (data == invalidSession || data.statuscode == invalidSession) {
        callSessionTimeout();
        return false;
    } else if (data == null) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "No User available" + "<br/>");
        return false;
    } else {
        return true;
    }
}
function getSaveResetUpdateBackButton(FieldGroup, RowId, SaveOrUpdateButton, SaveOrUpdateButtonId, SaveUpdateFuncName, ResetBackButton, ResetBackButtonId, ResetBackFuncName) {
    $("#" + FieldGroup).append("<div id=" + RowId + " class='row ' />");
    $("#" + RowId).append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='" + SaveOrUpdateButtonId + "' value='Save' class='btn btn-success mr5'>" + SaveOrUpdateButton + "</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button'  id='" + ResetBackButtonId + "' class='btn btn-warning mr5' name='reset' value='reset'>" + ResetBackButton + "</button></center></div>");
    $("#" + SaveOrUpdateButtonId).attr("onclick", SaveUpdateFuncName);
    $("#" + ResetBackButtonId).attr("onclick", ResetBackFuncName);
}
function addButtonOnclickFunction(buttonId, buttonName, functionName) {
    $("#" + buttonId + " " + buttonName).remove();
    $("#" + buttonId).removeAttr("onclick");
    $("#" + buttonId).text("").text(buttonName);
    $("#" + buttonId).attr("onclick", functionName);
}
function clearSuccessMessageAfterTwoSecond(MsgDivID) {
    setTimeout(function () {
        $("#" + MsgDivID).text("");
    }, 3000);
}
function clearSuccessMessageAfterThreeSecond(MsgDivID) {
    setTimeout(function () {
        $("#" + MsgDivID).text("");
    }, 3000);
}
function clearSuccessMessageAfterFourSecond(MsgDivID) {
    setTimeout(function () {
        $("#" + MsgDivID).text("");
    }, 4000);
}
function resetAllValuesInSpecifiedDiv(DivId, ddoId, locationId) {

    $('#' + DivId).find('input:text').val('');
    $('#' + DivId).find('textarea').val('');
    $('#' + DivId).find('select').val("");
    $('#' + DivId).find('input:checkbox').removeAttr('checked');
    $('#' + DivId).find('input:radio').removeAttr('checked');
    $('#pregsuccessBefore').text("");
    $('#' + successMsgDivCF).text("");
    $('#' + MsgDivInTableCF).text("");
    $('#ErrorDiv').text("");
    var inputIds = $('#' + DivId).find('input:text');
    for (var i = 0; i < inputIds.length; i++) {
        var eachInput = inputIds[i].id;
        if (eachInput != ddoId || eachInput != locationId)
            $("#" + eachInput + "Err").text("");
    }
    var selectIds = $('#' + DivId).find('select');
    for (var i = 0; i < selectIds.length; i++) {
        var eachInput = selectIds[i].id;
        if (eachInput != ddoId || eachInput != locationId)
            $("#" + eachInput + "Err").text("");
    }
    var checkboxIds = $('#' + DivId).find('input:checkbox');
    for (var i = 0; i < checkboxIds.length; i++) {
        var eachInput = checkboxIds[i].id;
        $("#" + eachInput + "Err").text("");
    }
    var radioIds = $('#' + DivId).find('input:radio');
    for (var i = 0; i < radioIds.length; i++) {
        var eachInput = radioIds[i].id;
        $("#" + eachInput + "Err").text("");
    }

    getLoggedInDDOInDropDown(ddoId, "");
    getLoggedInLocationInDropDown(locationId, "");


}
//Validation will done when ever user clicks the save/update button,
//Save >>before validation remove previous error messages so that upcomming error messages wont overlaps on displayed error messages
function resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(divId) {
    $('#pregsuccessBefore').text("");
    $('#ErrorDiv').text("");
    $('#' + successMsgDivCF).text("");
    $('#' + MsgDivInTableCF).text("");
    var inputIds = $('#' + divId).find('input:text');
    for (var i = 0; i < inputIds.length; i++) {
        var eachInput = inputIds[i].id;
        $("#" + eachInput + "Err").text("");
    }
}
function getEmployeeDataByEmployeeCode(empCode) {
    $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
        employeeCode: empCode
    }).done(function (data) {
        return encryptBase64String(data);
    });
}
function getEmployeeCodesByDdo(ddo) {
    $.get(server_base_url + "hrms/EmployeeMaster/GetEmpcode", {
        ddo: ddo
    }).done(function (data) {
        if (data != null) {
//        return encryptBase64String(data);
            return encodeURI(data);
        } else {
            return null;
        }
    });

}
function getSaveButton(FieldGroup, RowId, SaveOrUpdateButton, SaveOrUpdateButtonId, SaveUpdateFuncName) {
    $("#" + FieldGroup).append("<div id=" + RowId + " class='row ' />");
    $("#" + RowId).append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='" + SaveOrUpdateButtonId + "' value='Save' class='btn btn-success mr5'>" + SaveOrUpdateButton + "</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button'  id='" + ResetBackButtonId + "' class='btn btn-warning mr5' name='reset' value='reset'>" + ResetBackButton + "</button></center></div>");
    $("#" + SaveOrUpdateButtonId).attr("onclick", SaveUpdateFuncName);

}

function createFormWithPrivilage(DivId, innerDiv, masterName, FiledGroup, successMsgDivCF, PrivilageName) {
    var collapseId = "FormCollapseInCommonFunction";
    var collapseIdwithHash = "#" + collapseId;
    var collapseIdPlusOrMinus = collapseId + "PlusOrMinus";
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#" + DivId).text("").append("<div id='" + innerDiv + "' class='' />");
    $("#" + innerDiv).text("").append("<div id='tableHeader' />");
    if (checkUserPrivelege(PrivilageName)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>" + masterName + "</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='" + collapseIdPlusOrMinus + "'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='" + collapseId + "' class='panel-collapse collapse in ' />");
        $("#" + collapseIdPlusOrMinus).click(function () {
            $("#" + collapseId).toggle();
            if ($("#" + collapseIdPlusOrMinus + " span").hasClass("glyphicon-minus-sign")) {
                $("#" + collapseIdPlusOrMinus).text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#" + collapseIdPlusOrMinus).text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#" + collapseId).append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<div id='" + successMsgDivCF + "'></div>");
        $("#panelRow").append("<div id='" + FiledGroup + "' class='form-groupn pal' />");
        $("#" + FiledGroup).append("<input type='hidden' id='saveorupdate' value='save'>");
        $("#" + FiledGroup).append("<input type='hidden' id='Id' >");
    }
}

function createTableWithEditDeletePrivilage(innerDiv, TableName, tableId, ErrorDiv, ColumnsName, PrivilageEdit, PrivilageDelete) {
    $("#" + innerDiv).append("<div id='tableHeaderForList' class='row'/>");
    var collapseId = "TableCollapseInCommonFunction";
    var collapseIdwithHash = "#" + collapseId;
    var collapseIdPlusOrMinus = collapseId + "PlusOrMinus";
    $("#tableHeaderForList").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>" + TableName + "</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='" + collapseIdPlusOrMinus + "'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalListPanel").append("<div id='" + collapseId + "' class='panel-collapse collapse in' />");
    $("#" + collapseIdPlusOrMinus).click(function () {
        $("#" + collapseId).toggle();
        if ($("#" + collapseIdPlusOrMinus + " span").hasClass("glyphicon-minus-sign")) {
            $("#" + collapseIdPlusOrMinus).text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#" + collapseIdPlusOrMinus).text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#" + collapseId).append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").append("<div  id='" + ErrorDiv + "'/>");
    $("#listpanelRow").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='" + tableId + "' />");
    var columnStr = "<th class='sno_width'> S.No</th>";
    for (var j = 0; j < ColumnsName.length; j++) {
        columnStr = columnStr + "<th style='min-width:30%;width:auto;'><i ></i>" + ColumnsName[j] + "</th>"
    }
    var theadId = tableId + "TheadId";
    var trId = tableId + "TrId";
    $("#" + tableId).append("<thead id='" + theadId + "' class=''><tr id='" + trId + "'>"
            + columnStr);
    if (checkUserPrivelege(PrivilageEdit)) {
        $("#" + trId).append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
    }
    if (checkUserPrivelege(PrivilageDelete)) {
        $("#" + trId).append("<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>");
    }
    $("#" + trId).append("</tr></thead>");
}

function checkMandatoryFieldsAreEnteredForTextBox(mandatoryFieldsIdList) {

    for (var i = 0; i < mandatoryFieldsIdList.length; i++) {
        var mandatoryFieldId = mandatoryFieldsIdList[i];
        if ($(mandatoryFieldId).val() === null || $(mandatoryFieldId).
                val() === "") {
            displaySmallErrorMessages($(mandatoryFieldId).siblings('span').attr('id'), "Please Select Value .");
            $(mandatoryFieldId).focus();
            return 0;
        }
    }

    return 1;
}

function wipeAllTextBoxesInDiv(id) {

    $("#" + id).find("input[type='text']").each(function () {
        $("#" + this.id).val("");
    });

}

function wipeAllDropDownsInDiv(id) {

    $('#' + id).find('select').each(function () {
        $("#" + this.id).prop('selectedIndex', 0);
    });
}

function addToggleToId(clickId, toggleId) {
    $("#" + clickId).click(function () {
        $("#" + toggleId).toggle();
        if ($("#" + clickId + " span").hasClass("glyphicon-minus-sign")) {
            $("#" + clickId).text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#" + clickId).text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
}

function fetchBudgetHeadListDDForTrialBalance(id) {
    $("#" + id).text("").append("<option value=''>----Select Budget Head----</option>");
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
        action: "budgetHead"
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#" + id).append("<option value='" + subData._id.$oid + "'>" + subData.budgetHead + "</option>");
            }
        }
    });
}

function compareTwoDates(fromDateId, toDateId) {

    var date1Arr = $("#" + fromDateId).val().split("/");
    var fromDate = new Date(date1Arr[2], date1Arr[1] - 1, date1Arr[0]);

    var date2Arr = $("#" + toDateId).val().split("/");
    var toDate = new Date(date2Arr[2], date2Arr[1] - 1, date2Arr[0]);

    if (toDate < fromDate) {
        $("#" + fromDateId).focus();
        var message1 = $("#" + fromDateId).siblings("label").text();
        var message2 = $("#" + toDateId).siblings("label").text();
        alertPopUpMessage(message1 + " greater than " + message2);
        return 1;
    }

    return 0;
}

function checkDrCrAmountAndAddEntryForVoucher(drCrId, voucherTableIdIsRowCreated) {

    if (voucherTableIdIsRowCreated.indexOf((drCrId)) === -1) {

        var drCrVal = $("#" + drCrId).val();

        if (drCrVal.toLowerCase() === "dr") {
            var isEqual = parseFloat($("#totalDrAmount").val()) === parseFloat($("#totalCrAmount").val());
            if (!isEqual) {
                addReceiptVoucherRows('displayReceiptVoucherAddTableBody');
                voucherTableIdIsRowCreated[voucherTableIdIsRowCreated.length] = drCrId;
            }
        }

        if (drCrVal.toLowerCase() === "cr") {
            var isEqual = parseFloat($("#totalCrAmount").val()) === parseFloat($("#totalDrAmount").val());
            if (!isEqual) {
                addReceiptVoucherRows('displayReceiptVoucherAddTableBody');
                voucherTableIdIsRowCreated[voucherTableIdIsRowCreated.length] = drCrId;
            }
        }
    }
}
function BasicIfElseForSaveUpdateResponseDataWithExisted(data, successMsgDivCF) {
    if (data == fail || data.statuscode == fail) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Invalid username / password" + "<br/>");
        return false;
    } else if (data == unauthorized || data.statuscode == unauthorized) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, unauthorizedMessage + "<br/>");
        return false;
    } else if (data == statusException || data.statuscode == statusException) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, statusExceptionMessage + "<br/>");
        return false;
    } else if (data == invalidSession || data.statuscode == invalidSession) {
        callSessionTimeout();
        return false;
    } else if (data == null) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "No User available" + "<br/>");
        return false;
    } else if (data == existMessage || data.statuscode == existMessage || data == exist || data.statuscode == exist || data == existed || data.statuscode == existed) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, existMessage + "<br/>");
        return false;
    } else {
        return true;
    }
}
//Restric to enter space in the begining of textboxes
function restictSpaceInTheBegining() {

    var textStr;
    var textareaStr;

    $("input:text").keydown(function (event) {
        if (($(this).val().length) === 0 && event.keyCode === 32) {
            return false;
        }
    }).keyup(function (event) {
        textStr = $(this).val();
        if (textStr.charAt(0) === ' ') {
            var textStrVal = $.trim(textStr);
            $(this).val(textStrVal);
        }
    });

    $("textarea").keydown(function (event) {
        if (($(this).val().length) === 0 && event.keyCode === 32) {
            return false;
        }
    }).keyup(function (event) {
        textareaStr = $(this).val();
        if (textStr.charAt(0) === ' ') {
            var textareaStrVal = $.trim(textareaStr);
            $(this).val(textareaStrVal);
        }
    });
}

//To create single column textbox in a row
function getSingleColumnRowInputTextboxWithLable(DivID, labelName, required, rowId, inputId, str) {
    if (str === undefined || str === "undefined" || str === null) {
        str = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    if (required === "required") {
        $("#" + rowId).append('<div class="col-md-3" ><label style="font-weight: bold;" class="pull-right">' + labelName + '<span class="require">*</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-3" ><label  style="font-weight: bold;" class="pull-right " >' + labelName + '</label></div>');
    }
    $("#" + rowId).append('<div class="col-md-9"> <input type="text" id="' + inputId + '" class="form-control" ' + str + ' ondrop="return false;" onpaste="return false;" ><span id="' + inputIdErr + '" ></span></div>');
}

//To create single column textarea in a row
function getSingleColumnRowInputTextareaWithLable(DivID, labelName, required, rowId, inputId, str) {
    if (str === undefined || str === "undefined" || str === null) {
        str = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    if (required === "required") {
        $("#" + rowId).append('<div class="col-md-3" ><label style="font-weight: bold;" class="pull-right">' + labelName + '<span class="require">*</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-3" ><label  style="font-weight: bold;" class="pull-right " >' + labelName + '</label></div>');
    }
    $("#" + rowId).append('<div class="col-md-9"> <textarea type="text" id="' + inputId + '" class="form-control" ' + str + ' ondrop="return false;" onpaste="return false;" ></textarea><span id="' + inputIdErr + '" ></span></div>');
}
//To create single column checkbox in a row
function getSingleColumnRowCheckBoxWithLable(DivID, labelName, required, rowId, inputId, str) {
    if (str === undefined || str === "undefined" || str === null) {
        str = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    if (required === "required") {
        $("#" + rowId).append('<div class="col-sm-3" ><label style="font-weight: bold;" class="pull-right">' + labelName + '<span class="require">*</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-sm-3" ><label  style="font-weight: bold;" class="pull-right" >' + labelName + '</label></div>');
    }
    $("#" + rowId).append('<div class="col-sm-3"> <input type="checkbox" id="' + inputId + '" class="form-group" ' + str + '  ><span id="' + inputIdErr + '" ></span></div>');
}

//To get two column dropdown in a row
function getTwoColumnRowDropdownWithLable(DivID, labelName, required, rowId, inputId, str) {
    if (str === undefined || str === "undefined" || str === null) {
        str = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    if (required === "required") {
        $("#" + rowId).append('<div class="col-md-3" ><label style="font-weight: bold;" class="pull-right">' + labelName + '<span class="require">*</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-3" ><label  style="font-weight: bold;" class="pull-right " >' + labelName + '</label></div>');
    }
    $("#" + rowId).append('<div class="col-md-9"> <Select id="' + inputId + '" class="form-control" ' + str + ' value="" ><span id="' + inputIdErr + '" ></span></div>');
}


//To create single column dropdown in a row
function getSingleColumnRowDropdownWithLable(DivID, labelName, required, rowId, inputId, str) {
    if (str === undefined || str === "undefined" || str === null) {
        str = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    if (required === "required") {
        $("#" + rowId).append('<div class="col-md-3" ><label style="font-weight: bold;" class="pull-right">' + labelName + '<span class="require">*</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-3" ><label  style="font-weight: bold;" class="pull-right " >' + labelName + '</label></div>');
    }
    $("#" + rowId).append('<div class="col-md-3"> <Select id="' + inputId + '" class="form-control" ' + str + ' value="" ><span id="' + inputIdErr + '" ></span></div>');
}
//for form creation
function createFormWithoutDisplayingFY(DivId, innerDiv, masterName, FiledGroup, successMsgDivCF) {
    var collapseId = "FormCollapseInCommonFunction";
    var collapseIdPlusOrMinus = collapseId + "PlusOrMinus";

    $("#" + DivId).text("").append("<div id='" + innerDiv + "' class='' />");
    $("#" + innerDiv).text("").append("<div id='formHeader' />");
    $("#formHeader").append("<div id='panel' class='panel panel-blue ' />");
    $("#panel").append("<div id='panelHeading' class='panel-heading' />");
    $("#panelHeading").append("<h4 id='panelTitle' class='panel-title' />");
    $("#panelTitle").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>" + masterName + "</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='" + collapseIdPlusOrMinus + "'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#panel").append("<div id='" + collapseId + "' class='panel-collapse collapse in ' />");
    $("#" + collapseIdPlusOrMinus).click(function () {
        $("#" + collapseId).toggle();
        if ($("#" + collapseIdPlusOrMinus + " span").hasClass("glyphicon-minus-sign")) {
            $("#" + collapseIdPlusOrMinus).text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#" + collapseIdPlusOrMinus).text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#" + collapseId).append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<div id='" + successMsgDivCF + "'></div>");
    $("#panelRow").append("<div id='" + FiledGroup + "' class='form-groupn pal' />");
    $("#" + FiledGroup).append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#" + FiledGroup).append("<input type='hidden' id='Id' >");

}

//To dispay error or success messages after saving or updation data
function successOrErrorMeassages(messageDisplayDiv, defaultFunctionName, data, buttonValue, tableMessgeDisplayDiv) {
    data = JSON.parse(data);
    if (data == fail) {
        displayErrorMessages(messageDisplayDiv, "Invalid username / password" + "");
        setTimeout(function () {
            defaultFunctionName();
        }, 4000);
    } else if (data == unauthorized) {
        displayErrorMessages(messageDisplayDiv, unauthorizedMessage + "");
        setTimeout(function () {
            defaultFunctionName();
        }, 4000);
    } else if (data == statusException) {
        displayErrorMessages(messageDisplayDiv, statusExceptionMessage + "");
        setTimeout(function () {
            defaultFunctionName();
        }, 4000);
    } else if (data.statuscode == invalidSession) {
        callSessionTimeout();
    } else if (data == duplicate_Message) {
        displayErrorMessages(messageDisplayDiv, existed + "");
        setTimeout(function () {
            defaultFunctionName();
        }, 4000);
    } else if (data == delete_map) {
        displayErrorMessages(tableMessgeDisplayDiv, "This Data" + delete_map_message, "");
        setTimeout(function () {
            defaultFunctionName();
        }, 4000);
    } else {
        if (buttonValue === "Save") {
            displaySuccessMessages(messageDisplayDiv, successMessage, "");
        } else if (buttonValue === "Update") {
            displaySuccessMessages(messageDisplayDiv, updateSuccessMessage, "");
        } else if (buttonValue === "Delete") {
            displaySuccessMessages(tableMessgeDisplayDiv, deleteSuccessMessage, "");
        }
        setTimeout(function () {
            defaultFunctionName();
        }, 4000);
    }

}




