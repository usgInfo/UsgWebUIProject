/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */

function financialBankChequeConfigurationMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financialBankChequeConfigurationMaster("dashboardBodyMainDiv")>Bank Cheque Configuration</a>');

    createFormWithPrivilage(divId, innerDivCF, "Bank Cheque Configuration", FieldGroupForCF, successMsgDivCF, pvCreateChequeConfiguation);
    if (checkUserPrivelege(pvCreateChequeConfiguation)) {
        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("Bank", "required") + "" + getDropDown("bank"));
        $("#" + FieldGroupForCF).append("<p style='color:red;'>&nbsp&nbsp&nbspNote : All details must be  in mili meter(mm).</p>");


        getThreeEqualColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2", "Row1Col3");
        $("#Row1Col1").append(getLabel_InputWithSpan("Name From Left", "required", "nameFromLeft", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row1Col2").append(getLabel_InputWithSpan("Name From Top", "required", "nameFromTop", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row1Col3").append(getLabel_InputWithSpan("Amount In Words From Left", "required", "amountInWordsFromLeft", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));

        getThreeEqualColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2", "Row2Col3");
        $("#Row2Col1").append(getLabel_InputWithSpan("Amount In Words From Top", "required", "amountInWordsFromTop", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row2Col2").append(getLabel_InputWithSpan("Amount From Left", "required", "amountFromLeft", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row2Col3").append(getLabel_InputWithSpan("Amount From Top", "required", "amountFromTop", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));

        getThreeEqualColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2", "Row3Col3");
        $("#Row3Col1").append(getLabel("Date Format", "required") + "<input  type='radio' name='dateFormat' id='d1' class='col-sm-2' style='height:17px; width:17px; vertical-align: middle;'>&nbsp&nbsp<label>dd/mm/yyyy</label><br><input  type='radio' name='dateFormat' id='d2' class='col-sm-2' style='height:17px; width:17px; vertical-align: middle;'>&nbsp&nbsp<label>|d|m|m|y|y|y|y</label></div>");
//    $("#Row3Col1").append(getLabel_InputWithSpan("Date Format", "required", "dateFormat", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row3Col2").append(getLabel_InputWithSpan("Cheque Height", "required", "chequeHeight", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row3Col3").append(getLabel_InputWithSpan("Date From Top", "required", "dateFromTop", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));

        getThreeEqualColumnInRow(FieldGroupForCF, "Row4", "Row4Col1", "Row4Col2", "Row4Col3");
        $("#Row4Col1").append(getLabel_InputWithSpan("D1 From Left", "required", "d1FromLeft", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row4Col2").append(getLabel_InputWithSpan("D2 From Left", "", "d2FromLeft", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row4Col3").append(getLabel_InputWithSpan("M1 From Left", "", "m1FromLeft", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));

        getThreeEqualColumnInRow(FieldGroupForCF, "Row5", "Row5Col1", "Row5Col2", "Row5Col3");
        $("#Row5Col1").append(getLabel_InputWithSpan("M2 From Left", "", "m2FromLeft", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row5Col2").append(getLabel_InputWithSpan("Y1 From Left", "", "y1FromLeft", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row5Col3").append(getLabel_InputWithSpan("Y2 From Left", "", "y2FromLeft", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));

        getThreeEqualColumnInRow(FieldGroupForCF, "Row6", "Row6Col1", "Row6Col2", "Row6Col3");
        $("#Row6Col1").append(getLabel_InputWithSpan("Y3 From Left", "", "y3FromLeft", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row6Col2").append(getLabel_InputWithSpan("Y4 From Left", "", "y4FromLeft", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row6Col3").append(getLabel_InputWithSpan("Value", "", "value", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));

        getThreeEqualColumnInRow(FieldGroupForCF, "Row7", "Row7Col1", "Row7Col2", "Row7Col3");
        $("#Row7Col1").append(getLabel_InputWithSpan("Interval", "", "interval", "", 'onkeypress="return validateFloat(event)" maxlength="10"'));
        $("#Row7Col2").append(getLabel("", "") + "" + getDropDown("intervalDropDownValue"));
        getHardCodedOptions("intervalDropDownValue", "Interval", ["Plus", "Minus"]);
        viewOption("financial/common/BankName/ViewList", "", "bankName", "bank", "Bank");
        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "bankChequeConfigurationValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
    }
    viewFinancialBanckChequeConfigurationList("viewFinancialBanckChequeConfigurationList");

}
function bankChequeConfigurationValidation() {
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    var saveorupdate = $("#saveorupdate").val();
    var bank = $('#bank').val();
    var nameFromLeft = $('#nameFromLeft').val();
    var nameFromTop = $('#nameFromTop').val();
    var amountInWordsFromLeft = $('#amountInWordsFromLeft').val();
    var amountInWordsFromTop = $('#amountInWordsFromTop').val();
    var amountFromLeft = $('#amountFromLeft').val();
    var amountFromTop = $('#amountFromTop').val();
    var chequeHeight = $('#chequeHeight').val();
    var dateFromTop = $('#dateFromTop').val();
    var d1FromLeft = $('#d1FromLeft').val();
    var d2FromLeft = $('#d2FromLeft').val();
    var m1FromLeft = $('#m1FromLeft').val();
    var m2FromLeft = $('#m2FromLeft').val();
    var y1FromLeft = $('#y1FromLeft').val();
    var y2FromLeft = $('#y2FromLeft').val();
    var y3FromLeft = $('#y3FromLeft').val();
    var y4FromLeft = $('#y4FromLeft').val();
    var value = $('#value').val();
    var interval = $('#interval').val();
    var result = 1;
    if (preValidation(bank) || preValidation(nameFromLeft) || preValidation(nameFromTop) || preValidation(amountInWordsFromLeft) || preValidation(amountInWordsFromTop) || preValidation(amountFromLeft) || preValidation(amountFromLeft) || preValidation(amountFromTop) || preValidation(chequeHeight)) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        if (interval != "") {
            if (interval.match((numbervalidation()))) {
                result = 1;
            } else if (interval.match((doubleValidation()))) {
            } else {
                $("#interval").focus();
                displaySmallErrorMessagesInRed("intervalErr", "Please enter valid interval .");
                result = 0;
            }
        }
        if (value != "") {
            if (value.match((numbervalidation()))) {
            } else if (value.match((doubleValidation()))) {
            } else {
                $("#value").focus();
                displaySmallErrorMessagesInRed("valueErr", "Please enter valid value .");
                result = 0;
            }
        }
        if (y4FromLeft != "") {
            if (y4FromLeft.match((numbervalidation()))) {
            } else if (y4FromLeft.match((doubleValidation()))) {
            } else {
                $("#y4FromLeft").focus();
                displaySmallErrorMessagesInRed("y4FromLeftErr", "Please enter valid Y4 From Left .");
                result = 0;
            }
        }
        if (y3FromLeft != "") {
            if (y3FromLeft.match((numbervalidation()))) {
            } else if (y3FromLeft.match((doubleValidation()))) {
            } else {
                $("#y3FromLeft").focus();
                displaySmallErrorMessagesInRed("y3FromLeftErr", "Please enter valid Y3 From Left .");
                result = 0;
            }
        }
        if (y2FromLeft != "") {
            if (y2FromLeft.match((numbervalidation()))) {
                result = 1;
            } else if (y2FromLeft.match((doubleValidation()))) {
            } else {
                $("#y2FromLeft").focus();
                displaySmallErrorMessagesInRed("y2FromLeftErr", "Please enter valid Y2 From Left .");
                result = 0;
            }
        }
        if (y1FromLeft != "") {
            if (y1FromLeft.match((numbervalidation()))) {
            } else if (y1FromLeft.match((doubleValidation()))) {
            } else {
                $("#y1FromLeft").focus();
                displaySmallErrorMessagesInRed("y1FromLeftErr", "Please enter valid Y1 From Left .");
                result = 0;
            }
        }
        if (m2FromLeft != "") {
            if (m2FromLeft.match((numbervalidation()))) {
            } else if (m2FromLeft.match((doubleValidation()))) {
            } else {
                $("#m2FromLeft").focus();
                displaySmallErrorMessagesInRed("m2FromLeftErr", "Please enter valid M2 From Left .");
                result = 0;
            }
        }
        if (m1FromLeft != "") {
            if (m1FromLeft.match((numbervalidation()))) {
            } else if (m1FromLeft.match((doubleValidation()))) {
            } else {
                $("#m1FromLeft").focus();
                displaySmallErrorMessagesInRed("m1FromLeftErr", "Please enter valid M1 From Left .");
                result = 0;
            }
        }
        if (d2FromLeft != "") {
            if (d2FromLeft.match((numbervalidation()))) {
            } else if (d2FromLeft.match((doubleValidation()))) {
            } else {
                $("#d2FromLeft").focus();
                displaySmallErrorMessagesInRed("d2FromLeftErr", "Please enter valid D2 From Left .");
                result = 0;
            }
        }
        if (d1FromLeft == "") {
            $("#d1FromLeft").focus();
            displaySmallErrorMessagesInRed("d1FromLeftErr", "Please enter D1 From Left.");
            result = 0;
        } else if (d1FromLeft != "") {
            if (dateFromTop.match((numbervalidation()))) {
            } else if (d1FromLeft.match((doubleValidation()))) {
            } else {
                $("#d1FromLeft").focus();
                displaySmallErrorMessagesInRed("d1FromLeftErr", "Please enter valid D1 From Left .");
                result = 0;
            }
            removeSomeClass("d1FromLeftFieldGroup", "has-error");
        }
        if (dateFromTop == "") {
            $("#dateFromTop").focus();
            displaySmallErrorMessagesInRed("dateFromTopErr", "Please enter Date From Top.");
            result = 0;
        } else if (dateFromTop != "") {
            if (dateFromTop.match((numbervalidation()))) {
            } else if (dateFromTop.match((doubleValidation()))) {
            } else {
                $("#dateFromTop").focus();
                displaySmallErrorMessagesInRed("dateFromTopErr", "Please enter valid  Date FromTop .");
                result = 0;
            }
        }
        if (chequeHeight == "") {
            $("#chequeHeight").focus();
            displaySmallErrorMessagesInRed("chequeHeightErr", "Please enter Cheque Height.");
            result = 0;
        } else if (chequeHeight != "") {
            if (chequeHeight.match((numbervalidation()))) {
            } else if (chequeHeight.match((doubleValidation()))) {
            } else {
                $("#chequeHeight").focus();
                displaySmallErrorMessagesInRed("chequeHeightErr", "Please enter valid Cheque Height .");
                result = 0;
            }
        }
        if (amountFromTop == "") {
            $("#amountFromTop").focus();
            displaySmallErrorMessagesInRed("amountFromTopErr", "Please enter Amount From Top.");
            result = 0;
        } else if (amountFromTop != "") {
            if (amountFromTop.match((numbervalidation()))) {
            } else if (amountFromTop.match((doubleValidation()))) {
            } else {
                $("#amountFromTop").focus();
                displaySmallErrorMessagesInRed("amountFromTopErr", "Please enter valid Amount From Top .");
                result = 0;
            }
        }
        if (amountFromLeft == "") {
            $("#amountFromLeft").focus();
            addSomeClass("amountFromLeftFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("amountFromLeftErr", "Please enter Amount From Left.");
            result = 0;
        } else if (amountFromLeft != "") {
            if (amountFromLeft.match((numbervalidation()))) {
            } else if (amountFromLeft.match((doubleValidation()))) {
            } else {
                $("#amountFromLeft").focus();
                displaySmallErrorMessagesInRed("amountFromLeftErr", "Please enter valid Amount From Left .");
                result = 0;
            }
        }
        if (amountInWordsFromTop == "") {
            $("#amountInWordsFromTop").focus();
            displaySmallErrorMessagesInRed("amountInWordsFromTopErr", "Please enter Amount In Words From Top.");
            result = 0;
        } else if (amountInWordsFromTop != "") {
            if (amountInWordsFromTop.match((numbervalidation()))) {
            } else if (amountInWordsFromTop.match((doubleValidation()))) {
            } else {
                $("#amountInWordsFromTop").focus();
                displaySmallErrorMessagesInRed("amountInWordsFromTopErr", "Please enter valid Amount In Words From Top .");
                result = 0;
            }
        }
        if (amountInWordsFromLeft == "") {
            $("#amountInWordsFromLeft").focus();
            displaySmallErrorMessagesInRed("amountInWordsFromLeftErr", "Please enter Amount In Words From Left.");
            result = 0;
        } else if (amountInWordsFromLeft != "") {
            if (amountInWordsFromLeft.match((numbervalidation()))) {
            } else if (amountInWordsFromLeft.match((doubleValidation()))) {
            } else {
                $("#amountInWordsFromLeft").focus();
                displaySmallErrorMessagesInRed("amountInWordsFromLeftErr", "Please enter valid Amount In Words From Left .");
                result = 0;
            }
        }
        if (nameFromTop == "") {
            $("#nameFromTop").focus();
            displaySmallErrorMessagesInRed("nameFromTopErr", "Please enter name From Top.");
            result = 0;
        } else if (nameFromTop != "") {
            if (nameFromTop.match((numbervalidation()))) {
            } else if (nameFromTop.match((doubleValidation()))) {
            } else {
                $("#nameFromTop").focus();
                displaySmallErrorMessagesInRed("nameFromTopErr", "Please Enter name from top .");
                result = 0;
            }
        }
        if (nameFromLeft == "") {
            $("#nameFromLeft").focus();
            displaySmallErrorMessagesInRed("nameFromLeftErr", "Please enter  Name From Left.");
            result = 0;
        } else if (nameFromLeft != "") {
            if (nameFromLeft.match((numbervalidation()))) {
            } else if (nameFromLeft.match((doubleValidation()))) {
            } else {
                $("#nameFromLeft").focus();
                displaySmallErrorMessagesInRed("nameFromLeftErr", "Please enter  Name From Left.");
                result = 0;
            }
        }
        if (bank == null) {
            $("#bank").focus();
            displaySmallErrorMessagesInRed("bankErr", "Please select bank.");
            result = 0;
        } else if (bank != null) {
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveFinancialBankChequeConfigurationDetails();
            } else if (saveorupdate == "update") {
                updateFinancialBankChequeConfigurationDetails();
            }
        }

    }
}
function saveFinancialBankChequeConfigurationDetails() {
    if (checkUserPrivelege(pvCreateChequeConfiguation)) {
        var dateformate = "";
        if ($('#d1').is(':checked')) {
            dateformate = "d1";
        } else if ($('#d2').is(':checked')) {
            dateformate = "d2";
        }
        var bankChequeConfigurationjson = {
            bank: $('#bank').val(),
            nameFromLeft: $('#nameFromLeft').val(),
            nameFromTop: $('#nameFromTop').val(),
            amountInWordsFromLeft: $('#amountInWordsFromLeft').val(),
            amountInWordsFromTop: $('#amountInWordsFromTop').val(),
            amountFromLeft: $('#amountFromLeft').val(),
            amountFromTop: $('#amountFromTop').val(),
            dateFormat: dateformate,
            chequeHeight: $('#chequeHeight').val(),
            dateFromTop: $('#dateFromTop').val(),
            d1FromLeft: $('#d1FromLeft').val(),
            d2FromLeft: $('#d2FromLeft').val(),
            m1FromLeft: $('#m1FromLeft').val(),
            m2FromLeft: $('#m2FromLeft').val(),
            y1FromLeft: $('#y1FromLeft').val(),
            y2FromLeft: $('#y2FromLeft').val(),
            y3FromLeft: $('#y3FromLeft').val(),
            y4FromLeft: $('#y4FromLeft').val(),
            value: $('#value').val(),
            interval: $('#interval').val(),
            intervalDropDownValue: $('#intervalDropDownValue').val(),
        };
        $.post(server_base_url + "financial/common/BankChequeConfiguration/Save", {
            obj: JSON.stringify(bankChequeConfigurationjson),
            userId: getUserSessionElement("userId")
        }).done(function (data) {

            saveOrUpdateCommonFunctionInBankChequeConfiguration(data);
        });
    }
}
function updateFinancialBankChequeConfigurationDetails() {
    if (checkUserPrivelege(pvUpdateChequeConfiguation)) {
        var Id = $("#Id").val();
        var dateformate = "";
        if ($('#d1').is(':checked')) {
            dateformate = "d1";
        } else if ($('#d2').is(':checked')) {
            dateformate = "d2";
        }
        var dateformate;
        var bankChequeConfigurationjson = {
            bank: $('#bank').val(),
            nameFromLeft: $('#nameFromLeft').val(),
            nameFromTop: $('#nameFromTop').val(),
            amountInWordsFromLeft: $('#amountInWordsFromLeft').val(),
            amountInWordsFromTop: $('#amountInWordsFromTop').val(),
            amountFromLeft: $('#amountFromLeft').val(),
            amountFromTop: $('#amountFromTop').val(),
            dateFormat: dateformate,
            chequeHeight: $('#chequeHeight').val(),
            dateFromTop: $('#dateFromTop').val(),
            d1FromLeft: $('#d1FromLeft').val(),
            bankname: $('#bankname').val(),
            d2FromLeft: $('#d2FromLeft').val(),
            m1FromLeft: $('#m1FromLeft').val(),
            m2FromLeft: $('#m2FromLeft').val(),
            y1FromLeft: $('#y1FromLeft').val(),
            y2FromLeft: $('#y2FromLeft').val(),
            y3FromLeft: $('#y3FromLeft').val(),
            y4FromLeft: $('#y4FromLeft').val(),
            value: $('#value').val(),
            interval: $('#interval').val(),
            intervalDropDownValue: $('#intervalDropDownValue').val(),
        }

        $.post(server_base_url + "financial/common/BankChequeConfiguration/Update", {
            objId: Id,
            obj: JSON.stringify(bankChequeConfigurationjson),
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            updateCommonFunctionInBankChequeConfiguration(data);
        });
    }
}
function  updateCommonFunctionInBankChequeConfiguration(data) {

    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        if (data == duplicate) {
            disableDiv(FieldGroupForCF);
            setTimeout(function () {
                scrolupfunction();
                financialBankChequeConfigurationMaster("dashBoardBodyMainDiv");
                displayErrorMessages(successMsgDivCF, existed, "");
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 3000);
        } else {
            disableDiv(FieldGroupForCF);
            setTimeout(function () {
                scrolupfunction();
                financialBankChequeConfigurationMaster(DashboardMainDivID);
                displaySuccessMessages(successMsgDivCF, updateSuccessMessage, "");
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 3000);
        }
    }
}
function  saveOrUpdateCommonFunctionInBankChequeConfiguration(data) {

    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        if (data == duplicate) {
            disableDiv(FieldGroupForCF);
            setTimeout(function () {
                scrolupfunction();
                financialBankChequeConfigurationMaster("dashBoardBodyMainDiv");
                displayErrorMessages(successMsgDivCF, existed, "");
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 3000);
        } else {
            disableDiv(FieldGroupForCF);
            setTimeout(function () {
                scrolupfunction();
                financialBankChequeConfigurationMaster(DashboardMainDivID);
                displaySuccessMessages(successMsgDivCF, successMessage, "");
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }, 3000);
        }
    }
}
function viewFinancialBanckChequeConfigurationList(divId) {
    if (checkUserPrivelege(pvViewChequeConfiguation)) {
        var columsName = ["Bank Name", "Date Format"];
        createTableWithEditDeletePrivilage(innerDivCF, "List of Bank Cheque Configuration(s)", divId, MsgDivInTableCF, columsName, pvUpdateChequeConfiguation, pvDeleteChequeConfiguation);
        $.get(server_base_url + "financial/common/BankChequeConfiguration/ViewList", {
        }).done(function (bdata) {
            if (BasicIfElseForTable(bdata, MsgDivInTableCF, divId)) {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var divIdBody = divId + "body";
                        $("#" + divId).append("<tbody id='" + divIdBody + "' class='table-striped table-bordered' />");
                        var sno = 0;
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var dateformate = "dd/mm/yyyy";
                            if (bdata[i].dateFormat == "d2") {
                                dateformate = "d|d|m|m|y|y|y|y";
                            }
                            var obj = JSON.stringify(bdata[i]);
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].bank + "</td>"
                                    + "<td style='cursor:pointer;'>" + dateformate + "</td>");
                            if (checkUserPrivelege(pvUpdateChequeConfiguation)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatefinancialBankChequeConfiguration('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteChequeConfiguation)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletefinancialBankChequeConfiguration','viewFinancialBanckChequeConfigurationList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
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
function updatefinancialBankChequeConfiguration(obj) {
    if (checkUserPrivelege(pvUpdateChequeConfiguation)) {
        obj = JSON.parse(decodeURI(obj));
        resetAllValuesInSpecifiedDiv(FieldGroupForCF);
        $("#Id").val(obj._id.$oid);
        $("#saveorupdate").val("update");
        $("#saveUpdateBtnId").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "financialBankChequeConfigurationMaster('" + DashboardMainDivID + "')");
        $("#nameFromLeft").val(obj.nameFromLeft);
        $("#nameFromTop").val(obj.nameFromTop);
        $("#amountInWordsFromLeft").val(obj.amountInWordsFromLeft);
        $("#amountInWordsFromTop").val(obj.amountInWordsFromTop);
        $("#amountFromLeft").val(obj.amountFromLeft);
        $("#amountFromTop").val(obj.amountFromTop);
        $("#dateFormat").val(obj.dateformate);
        $("#chequeHeight").val(obj.chequeHeight);
        $("#dateFromTop").val(obj.dateFromTop);
        $("#d1FromLeft").val(obj.d1FromLeft);
        $("#d2FromLeft").val(obj.d2FromLeft);
        $("#m1FromLeft").val(obj.m1FromLeft);
        $("#m2FromLeft").val(obj.m2FromLeft);
        $("#y1FromLeft").val(obj.y1FromLeft);
        $("#y2FromLeft").val(obj.y2FromLeft);
        $("#y3FromLeft").val(obj.y3FromLeft);
        $("#y4FromLeft").val(obj.y4FromLeft);
        $("#value").val(obj.value);
        $("#interval").val(obj.interval);
        $("#bank option:contains(" + obj.bank + ")").attr("selected", "selected");
        $("#intervalDropDownValue option:contains(" + obj.intervalDropDownValue + ")").attr("selected", "selected");

        if (obj.dateFormat == "d2")
            $("#d2").attr("checked", "checked");
        else
            $("#d1").prop("checked", "checked");
        $("#viewFinancialBanckChequeConfigurationListbody tr").css("background-color", "white");
        $("#viewFinancialBanckChequeConfigurationListbody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
    }
}
function deletefinancialBankChequeConfiguration(Id) {
    if (checkUserPrivelege(pvDeleteChequeConfiguation)) {
        $.post(server_base_url + "financial/common/BankChequeConfiguration/Delete", {
            objId: Id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                financialBankChequeConfigurationMaster(DashboardMainDivID);
                displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
            }
        });
    }
}