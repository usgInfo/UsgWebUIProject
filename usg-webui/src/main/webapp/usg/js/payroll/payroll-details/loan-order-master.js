/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function payrollLoanOrderMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=payrollLoanOrderMaster("dashboardBodyMainDiv")>Loan Order Master</a>');

    createFormWithPrivilage(divId, innerDivCF, "Loan Order Master", FieldGroupForCF, successMsgDivCF, pvCreateLoanOrder);
    if (checkUserPrivelege(pvCreateLoanOrder)) {
        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        $("#Row0Col2").append(getLabel_InputWithSpan("Order No", "required", "applyno", "", "onkeypress=return validateNumber(event)"));
        //$("#ddo").attr("onchange", "getLoanTypeDropDown()");

        getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("Loan/Advance Type", "required") + "" + getDropDown("loantype"));
        $("#Row1Col2").append(getLabel("Sanctioned By ", "required") + "" + getDropDown("sanctionedBy"));

        getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel("Remarks", "") + "" + getTextareaWithErrSpan("remarks", "Enter Remarks", "", "maxlength=100"));
        $("#Row2Col2").append(getLabel("Comptroller ", "required") + "" + getDropDown("comptroller"));

        //viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");
        $("#ddo").attr("onchange", "getSanctionedByDropDown('sanctionedBy')");
          getLoggedInDDOInDropDown("ddo", "");
          getSanctionedByDropDown("sanctionedBy");
        //viewOption("hrms/common/LoanNature/View", "", "loanName", "loantype", "Loan Type");
        //  viewOption("hrms/Common/LoanType/View", "", "loanType", "loantype", "Loan Type");
        // viewOption("hrms/salary/Employee/ViewList", "", "employeeName", "sanctionedBy", "Sanctioned By");
        //  viewOption("hrms/salary/Employee/ViewList", "", "employeeName", "comptroller", "Comptroller");
        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "LoanOrderValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "','ddo')");
        getLoanOrAdvanceType("loantype");
        
         $("input").on("keypress", function(e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        
        $("textarea").on("keypress", function(e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    }
    if (checkUserPrivelege(pvViewLoanOrder)) {
        viewPayrollLoanOrderList("viewPayrollLoanOrderList");
    }

}
function getSanctionedByDropDown(id, name, comptroller) {
    //alert("getComptrollerDropDown");
    var ddo = $("#ddo").val();
    //alert(ddo);
    $.get(server_base_url + "/PayrollDetails/LoanOrder/getSanctionedByDropdown", {
        ddo: ddo
    }).done(function (data) {
        if (data != null) {
            data = JSON.parse(data);
            //alert(data);
            $("#" + id).text("").append("<option value = '' selected disabled>----Select Sanctioned By ----</option>");
            if (data == null || data == "" || data == 500 || data == 501)
            {
                $("#" + id).text("").append("<option value='0'>" + NoDataFound + "</option>");
            } else {
                for (var i = 0; i < data.length; i++)
                {
                    $("#" + id).append("<option  value='" + data[i]._id.$oid + "'>" + data[i].employeeName + "" + "</option>");
                }
                if (name != null || name != undefined)
                    $("#" + id).val(name);
            }
        }
    });
    getComptrollerDropDown("comptroller", comptroller);
}
function getComptrollerDropDown(id, comptroller) {
    //alert("getComptrollerDropDown");

    var ddo = $("#ddo").val();
    //alert(ddo);
    $.get(server_base_url + "/PayrollDetails/LoanOrder/getComptrollerDropDown", {
        ddo: ddo
    }).done(function (data) {
        if (data != null) {
            data = JSON.parse(data);
            //alert(data);
            $("#" + id).text("").append("<option value = '' selected disabled>----Select Comptroller ----</option>");
            if (data == null || data == "" || data == 500 || data == 501)
            {
                $("#" + id).text("").append("<option value='0'>" + NoDataFound + "</option>");
            } else {
                for (var i = 0; i < data.length; i++)
                {
                    $("#" + id).append("<option  value='" + data[i]._id.$oid + "'>" + data[i].employeeName + "" + "</option>");
                }
                if (comptroller != null || comptroller != undefined)
                    $("#" + id).val(comptroller);
            }
        }
    });
}
function getLoanTypeDropDown()
{
    //alert();
    $.get(server_base_url + "hrms/Common/LoanType/View", {
    }).done(function (pdata) {
        $("#loantype").text("");
        if (pdata != null) {
            var ddo = $("#ddo").val();
            var ids = [];
            $.get(server_base_url + "/Payroll/PayrollDetails/LoanOrder/LoanTypeBasedOnDdoService", {
                ddo: ddo
            }).done(function (data1) {
                data1 = JSON.parse(data1);
                data1 = JSON.parse(data1);
                if (data1 != null)
                {
                    for (var j = 0; j < data1.length; j++)
                    {
                        ids.push(data1[j].loanType);
                    }
                }

            });
            //alert(ids);
            // getLoanTypeDropDownBasedOnId(ddo)
            setTimeout(function () {
                if (pdata.length > 0) {
                    $("#loantype").append("<option value = '' selected disabled>-Select-</option>");
                    for (var i = 0; i < pdata.length; i++)
                    {
                        var flag = "a";
                        if (ids != null) {
                            for (var j = 0; j < ids.length; j++)
                            {
                                if (pdata[i]._id.$oid == ids[j])
                                {
                                    flag = "b";
                                }
                            }
                            if (flag == "a") {
                                $("#loantype").append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].loanType + "</option>");
                            }
                        } else {
                            for (var j = 0; j < data1.length; j++) {
                                $("#loantype").append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].loanType + "</option>");
                            }
                        }

                    }
                }
            }, 1300);

        }
    });
    getSanctionedByDropDown("sanctionedBy");
}
//function ()
//{
//    $.get(server_base_url + "/Payroll/PayrollDetails/LoanOrder/LoanTypeBasedOnDdoService", 
//                       {
//                           ddo:ddo
//                        }).done(function (pdata1)
//                        {
//                        }
//}
function LoanOrderValidation()
{
    $("#" + successMsgDivCF).text("");
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    var result = 1;
    var saveorupdate = $("#saveorupdate").val();
    var ddo = $("#ddo").val();
    var applyno = $("#applyno").val();
    var loantype = $("#loantype").val();
    var sanctionedBy = $("#sanctionedBy").val();
    var comptroller = $("#comptroller").val();
    if (preValidation(ddo) || preValidation(applyno) || preValidation(loantype) || preValidation(sanctionedBy) || preValidation(comptroller)) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        if (comptroller == "" || comptroller == null || comptroller == "0") {
            $("#comptroller").focus();
            displaySmallErrorMessagesInRed("comptrolErr", "Please select comptroller.");
            result = 0;
        }

        if (sanctionedBy == "" || sanctionedBy == null || sanctionedBy == "0") {
            $("#sanctionedBy").focus();
            displaySmallErrorMessagesInRed("sanctionedByErr", "Please select sanctioned by.");
            result = 0;
        }
        if (loantype == "" || loantype == null) {
            $("#loantype").focus();
            displaySmallErrorMessagesInRed("bhd1IdErr", "Please select Loan/Advance Type.");
            result = 0;
        }
        if (applyno == "" || applyno == null) {
            $("#comptroller").focus();
            displaySmallErrorMessagesInRed("applynoErr", "Please select apply no");
            result = 0;
        }
        if (ddo == "" || ddo == null) {
            $("#ddo").focus();
            displaySmallErrorMessagesInRed("ddoIdErr", "Please select ddo.");
            result = 0;
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                savePayrollLoanOrderDetails();
            } else if (saveorupdate == "update") {
                updatePayrollLoanOrderDetails();
            }
        }
    }
}
function savePayrollLoanOrderDetails() {
    if (checkUserPrivelege(pvCreateLoanOrder)) {
        var orderno = $("#applyno").val();
        var sanctionedBy = $("#sanctionedBy").val();
        var loantype = $("#loantype").val();
        var comptroller = $("#comptroller").val();
        var ddo = $("#ddo").val();
        var remarks = $("#remarks").val();
        var obj = {
            ddo: ddo,
            orderNo: orderno,
            loanType: loantype,
            sanctionedBy: sanctionedBy,
            comptroller: comptroller,
            remarks: remarks
        };
        $.post(server_base_url + "Payroll/PayrollDetails/LoanOrder/Save", {
            demojson: JSON.stringify(obj),
            userid: getUserSessionElement("userId"),
            ddo: ddo,
            orderNo: orderno,
            loanType: loantype
        }).done(function (data) {
            if (data == exist) {
                setTimeout(function () {
                    scrolupfunction();
                    payrollLoanOrderMaster("dashBoardBodyMainDiv");
                    displayErrorMessages(successMsgDivCF, existed, "");
                    clearSuccessMessageAfterTwoSecond(successMsgDivCF);
                }, 3000);
            } else {
                saveOrUpdateCommonFunctionInLoanOrder(data);
            }

        });
    } else {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, privilageNotExist);
    }
}
function  saveOrUpdateCommonFunctionInLoanOrder(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        setTimeout(function () {
            scrolupfunction();
            payrollLoanOrderMaster("dashBoardBodyMainDiv");
            displaySuccessMessages(successMsgDivCF, successMessage, "");
        }, 3000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function viewPayrollLoanOrderList(divId) {
    if (checkUserPrivelege(pvViewLoanOrder)) {
        var columsName = ["DDO Name", "Loan/Adv.Type", "Order No"];
        createTableWithEditDeletePrivilage(innerDivCF, "List of Loan Order", divId, MsgDivInTableCF, columsName, pvUpdateLoanOrder, pvDeleteLoanOrder);
        $.get(server_base_url + "Payroll/PayrollDetails/LoanOrder/View", {
               ddo: getUserSessionElement(seDDOId)
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
                                    + "<td style='cursor:pointer;'>" + bdata[i].ddo + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].loanType + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].orderNo + "</td>");
                            if (checkUserPrivelege(pvUpdateLoanOrder)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatepayrollLoanOrder('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteLoanOrder)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletepayrollLoanOrder','viewPayrollLoanOrderList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                            }
                            $("#" + bdata[i]._id.$oid).append("</tr>");
                        }
                        $('#' + divId).append("</table>");
                        $('#' + divId).dataTable(
                                {
                                    aaSorting: [[3, 'asc']]
                                });

                    }
                }
            }
        });
    }
}
function updatepayrollLoanOrder(obj) {
    if (checkUserPrivelege(pvUpdateLoanOrder)) {
        obj = JSON.parse(decodeURI(obj));
        var ddo = obj.ddo;
        $("#viewPayrollLoanOrderListbody tr").css("background-color", "white");
        $("#viewPayrollLoanOrderListbody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
        //alert(obj);
        $("#ddo").val(obj.ddoId);
        getSanctionedByDropDown("sanctionedBy", obj.sanctionedBy, obj.comptroller);
        resetAllValuesInSpecifiedDiv(FieldGroupForCF);
        $("#ddo option:contains(" + obj.ddo + ")").attr('selected', 'selected');
//    $("#sanctionedBy option:contains(" + obj.sanctionedBy + ")").attr('selected', 'selected');
//    $("#comptroller option:contains(" + obj.comptroller + ")").attr('selected', 'selected');
//    $("#sanctionedBy").val(obj.sanctionedBy);
//    $("#comptroller").val(obj.comptroller);
        $("#sanctionedBy option:contains(" + obj.sanctionedBy + ")").attr('selected', 'selected');
        $("#comptroller option:contains(" + obj.comptroller + ")").attr('selected', 'selected');
        $("#loantype option:contains(" + obj.loanType + ")").attr('selected', 'selected');

        $("#remarks").val(obj.remarks);
        $("#applyno").val(obj.orderNo);
        $("#Id").val(obj._id.$oid);
        $("#saveorupdate").val("update");
        $("#saveUpdateBtnId").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "payrollLoanOrderMaster('" + DashboardMainDivID + "')");
    }
}
function updatePayrollLoanOrderDetails() {
    if (checkUserPrivelege(pvUpdateLoanOrder)) {
        var Id = $("#Id").val();
        var orderno = $("#applyno").val();
        var sanctionedBy = $("#sanctionedBy").val();
        var loantype = $("#loantype").val();
        var comptroller = $("#comptroller").val();
        var ddo = $("#ddo").val();
        var remarks = $("#remarks").val();
        var obj = {
            ddo: ddo,
            orderNo: orderno,
            loanType: loantype,
            sanctionedBy: sanctionedBy,
            comptroller: comptroller,
            remarks: remarks
        };
        $.post(server_base_url + "Payroll/PayrollDetails/LoanOrder/Update", {
            demojson: JSON.stringify(obj),
            id: Id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == exist) {
                setTimeout(function () {
                    scrolupfunction();
                    payrollLoanOrderMaster("dashBoardBodyMainDiv");
                    displayErrorMessages(successMsgDivCF, existed, "");
                    clearSuccessMessageAfterTwoSecond(successMsgDivCF);
                }, 3000);
            } else
            {
                saveOrUpdateCommonFunctionInLoanOrder(data);
            }

        });
    } else {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, privilageNotExist);
    }
}
function deletepayrollLoanOrder(Id) {
    if (checkUserPrivelege(pvDeleteLoanOrder)) {
        $.post(server_base_url + "Payroll/PayrollDetails/LoanOrder/Delete", {
            id: Id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                if (data == delete_map)
                {
                    // dispalyhrmsCommonReligion();
                    displayErrorMessages(MsgDivInTableCF, delete_map_messages, "");
                    setTimeout(function () {
                        payrollLoanOrderMaster(DashboardMainDivID);
                    }, 2000);
                } else {
                    payrollLoanOrderMaster(DashboardMainDivID);
                    displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                    clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
                }
            }
        });
    }
}


