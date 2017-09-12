/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function financeFinancialYearMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financeFinancialYearMaster("dashboardBodyMainDiv")>Financial Year</a>');
    createForm(divId, innerDivCF, "Financial Year", FieldGroupForCF, successMsgDivCF);
    getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
    $("#Row0Col1").append(getLabel("Year", "required") + "" + getDropDown("selectYear"));
    getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("From Date", "required", "fromDate", "DD/MM/YYYY", "onkeypress='return false'"));
    $("#Row1Col2").append(getLabel_InputWithSpan("To Date", "required", "toDate", "DD/MM/YYYY", ""));
    $('#fromDate').datepicker({
        changeYear: true,
        changeMonth: true,
        dateformat: "dd/mm/yy",
        onSelect: function(date) {
            var date1 = $('#fromDate').datepicker('getDate');
            var date = new Date(Date.parse(date1));
            date.setDate(date.getDate() + 1);
            var newDate = date.toDateString();
            newDate = new Date(Date.parse(newDate));
            $('#toDate').datepicker("option", "minDate", newDate);
        }
    });
    $("#toDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateformat: "dd/mm/yy",
        minDate: $("#fromDate").datepicker('getDate')
    });
    getYearBetweenSpecifiedYear("", "selectYear", 0, 2, "Year");
    getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "FinancialYearValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
    viewFinancialFinancialYearList("viewFinancialFinancialYearList");
}
function FinancialYearValidation()
{
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    var result = 1;
    var saveorupdate = $("#saveorupdate").val();
    var fromDate = $("#fromDate").val();
    var selectYear = $("#selectYear").val();
    var toDate = $("#toDate").val();
    if (fromDate == "" || fromDate == "undefined" || fromDate == null || toDate == "" || toDate == "undefined" || toDate == null || selectYear == "" || selectYear == null || selectYear == "undefined") {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        var cal = days_between(fromDate, toDate);
        if (fromDate == "") {
            $("#fromDate").focus();
            displaySmallErrorMessagesInRed("fromDateErr", "Please enter FromDate.");
            result = 0;
        } else if (toDate == "") {
            $("#toDate").focus();
            $("#pregppid2").text("");
            displaySmallErrorMessagesInRed("toDateErr", "Please enter ToDate.");
            result = 0;
        }
        if (cal > 365 || cal < 1) {
            $("#toDate").focus();
            $("#pregppid2").text("");
            displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please Enter Valid DD-MM-YYYY");
            result = 0;
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveFinancialFinancialYearDetails();
            } else if (saveorupdate == "update") {
                updateFinancialFinancialYearDetails();
            }
        }
    }
}
function saveFinancialFinancialYearDetails() {
    var year = $("#selectYear").val();
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    $.post(server_base_url + "financial/common/FinancialYear/Save", {
        year: year,
        fromdate: fromDate,
        todate: toDate
    }).done(function(data) {
        saveOrUpdateCommonFunctionInFinancialYear(data);
    });
}
function  saveOrUpdateCommonFunctionInFinancialYear(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        setTimeout(function() {
            scrolupfunction();
            financeFinancialYearMaster("dashBoardBodyMainDiv");
            displaySuccessMessages(successMsgDivCF, successMessage, "");
        }, 1000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function viewFinancialFinancialYearList(divId) {
    var columsName = ["From Date", "To Date", "Active"];
    createTable(innerDivCF, "List of Financial Year", divId, MsgDivInTableCF, columsName);
    $.get(server_base_url + "financial/common/FinancialYear/ViewList", {
    }).done(function(bdata) {
        if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    var divIdBody = divId + "body";
                    $("#" + divId).append("<tbody id='" + divIdBody + "' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var active = bdata[i].active;
                        if (active == 'Yes')
                        {
                            var obj = JSON.stringify(bdata[i]);
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].fromDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].toDate + "</td>"
                                    + "<td style='cursor:pointer;'class='activebut1' >" + ' <a   style="align:center;color:brown" disabled><center>Active</center></a>' + "</td>"
                                    + "<td style='cursor:pointer;'>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px;color: black;" >Edit</a>' + "</td>"
                                    + "<td style='cursor:pointer;'>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px;color: black;" >Delete</a>' + "</td></tr>");
                        } else
                        {
                            var obj = JSON.stringify(bdata[i]);
                            $("#" + divIdBody).append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].fromDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].toDate + "</td>"
                                    + "<td style='cursor:pointer;' class='activebut' onclick=makeActiveYear('" + encryptBase64String(bdata[i]._id.$oid) + "')>" + ' <a style="align:center;color:orange"><center>InActive</center></a>' + "</td>"
                                    + "<td style='cursor:pointer;' onclick=updatefinancialFinancialYear('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                                    + "<td onclick=deletePopUp('deletefinancialFinancialYear','viewFinancialFinancialYearList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                        }
                    }
                    $("#" + divId).dataTable();
                }
            }
        }
    });
}
function makeActiveYear(id) {
    id = decryptBase64String(id);
    $.post(server_base_url + "financial/common/FinancialYear/Change", {
        id: id
    }).done(function(data) {
        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "" + failMessage + "<br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "" + statusExceptionMessage + "<br /><br />");
        } else {
            viewFinancialFinancialYearList("viewFinancialFinancialYearList");
        }
    });
}
function updatefinancialFinancialYear(obj) {
    obj = JSON.parse(decodeURI(obj));
    resetAllValuesInSpecifiedDiv(FieldGroupForCF);
    $("#fromDate").val(obj.fromDate);
    $("#toDate").val(obj.toDate);
    $("#selectYear").val(obj.year);
    $("#Id").val(obj._id.$oid);
    $("#saveorupdate").val("update");
    $("#saveUpdateBtnId").text("").text("Update");
    addButtonOnclickFunction("resetBackBtnId", "Back", "financeFinancialYearMaster('" + DashboardMainDivID + "')");
}
function updateFinancialFinancialYearDetails() {
    var Id = $('#Id').val();
    var updatefromdat = $("#fromDate").val();
    var year = $("#selectYear").val();
    var updatetodat = $("#toDate").val();
    $.post(server_base_url + "financial/commom/FinancialYear/Update", {
        updatefromdate: updatefromdat,
        id: Id,
        year: year,
        updatetodate: updatetodat,
        userid:  getUserSessionElement("userId")
    }).done(function(data) {
        saveOrUpdateCommonFunctionInFinancialYear(data);
    });
}
function deletefinancialFinancialYear(Id) {

    $.post(server_base_url + "financial/common/FinancialYear/Delete", {
        id: Id,
        userid:  getUserSessionElement("userId")
    }).done(function(data) {
        if (BasicIfElseForTable(data, MsgDivInTableCF)) {
            financeFinancialYearMaster(DashboardMainDivID);
//                displayLargeErrorMessagesInCenterInRed(MsgDivInTableCF, "Deleted Succesfully");
            displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
            clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
        }
    });
}


