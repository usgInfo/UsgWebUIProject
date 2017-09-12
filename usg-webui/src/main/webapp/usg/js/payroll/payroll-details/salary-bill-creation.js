/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */
function salaryBillCreation(divId) {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a>><a href="javascript:void(0)" data-toggle="tab">Salary Bill Creation</a>');
    createFormWithPrivilage(divId, innerDivCF, "Salary Bill Creation", FieldGroupForCF, successMsgDivCF, pvCreateSalaryBill);
    if (checkUserPrivelege(pvViewSalaryBill)) {
        $("#" + innerDivCF).append("<div  id='BillNotCreatedListPanelDiv' />");
        $("#" + innerDivCF).append("<div  id='billCreatedNotSentToAccountTable' />");
        $("#" + innerDivCF).append("<div  id='billCreatedSentToAccountTable'  />");
    }
    if (checkUserPrivelege(pvCreateSalaryBill)) {
        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        getLoggedInDDOInDropDown("ddo", "");
        getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("Year", "required") + "" + getDropDown("year"));
        $("#Row1Col2").append(getLabel("Month", "required") + "" + getDropDown("month"));
        // viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");

//    getHardCodedOptionsSalarybill("", "month");
//    getYearBetweenSpecifiedYear("", "year", 3, 1, "Year");
        getFinancialYear("month", "year");
        $("#ddo").attr("onchange", "loadEmpcodeSearchFunctionalityforempatd()");

        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "View", "saveUpdateBtnId", "validateSalaryBill()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "','ddo')");
        loadEmpcodeSearchFunctionalityforempatd();
    }

}
function validateSalaryBill() {
    var ddo = $('#ddo').val();
    var month = $('#month').val();
    var year = $('#year').val();
    if (preValidation(ddo) || preValidation(month) || preValidation(year)) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, mandatoryFieldMsg);
        return false;
    } else {
        viewEmpSalaryProcessedList();
    }
}

function viewEmpSalaryProcessedList() {
    if (checkUserPrivelege(pvViewSalaryBill)) {
        $("#BillNotCreatedListPanelDiv").text("").append("<div id='EmpSalaryProcessedPanel' class='panel panel-blue' />");
        $("#EmpSalaryProcessedPanel").append("<div id='EmpSalaryProcessedPanelHeading' class='panel-heading' />");
        $("#EmpSalaryProcessedPanelHeading").append("<h4 id='salaryProcessedHeader' class='panel-title' />");
        $("#salaryProcessedHeader").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Employee(Salary Processed)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='salaryBillCreationList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#EmpSalaryProcessedPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#salaryBillCreationList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#salaryBillCreationList span").hasClass("glyphicon-minus-sign")) {
                $("#salaryBillCreationList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#salaryBillCreationList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });

        $("#collapseOne3").append("<div id='salaryProcessedlistpanelMainBody' class = 'panel-body' />");
        $("#salaryProcessedlistpanelMainBody").append("<div id='salaryProcessedlistpanelRow' class='row' />");
        $("#EmpSalaryProcessedPanel").append("<div id='MsgDiv1'>");
        $("#salaryProcessedlistpanelMainBody").append("<div id='salaryProcessedlistpanelRow' class='table-responsive' />");
        $("#salaryProcessedlistpanelMainBody").append("<div id='displaySalaryProcessedDiv' class = 'panel panel-primary-head'></div>");
        $("#displaySalaryProcessedDiv").append("<table id='salaryProcessedTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");
//Table Header
        $("#salaryProcessedTable").append("<thead class=''><tr>"
                + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>FundType</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Budget Head</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Designation</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Earn Gross</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Total Deductions</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>NetPay</th>"
                + "</tr></thead>");

        var ddo = $('#ddo').val();
        var Month = $('#month').val();
        var year = $('#year').val();
        $.get(server_base_url + "/payroll/payrolldetails/salarybillcreation/GetListService", {
            ddo: ddo,
            //location: getUserSessionElement(seLocationId),
            month: Month,
            year: year
        }).done(function (bdata) {
           
            var salaryProcessedList = bdata.SalaryProcessedList;
            salaryProcessedList = JSON.stringify(salaryProcessedList);
            salaryProcessedList = JSON.parse(salaryProcessedList);
            salaryProcessedList = JSON.parse(salaryProcessedList);

            var notTransfertoAccctList = bdata.NotTranferredToAccounts;
            notTransfertoAccctList = JSON.stringify(notTransfertoAccctList);
            notTransfertoAccctList = JSON.parse(notTransfertoAccctList);
            notTransfertoAccctList = JSON.parse(notTransfertoAccctList);



            var transfertoAccountList = bdata.TranferredToAccounts;
            transfertoAccountList = JSON.stringify(transfertoAccountList);
            transfertoAccountList = JSON.parse(transfertoAccountList);
            transfertoAccountList = JSON.parse(transfertoAccountList);



            if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {

                if (salaryProcessedList != null) {
                    var tableId = "salaryProcessedTable";
                    var tableBodyId = tableId + "body";
                    $("#" + tableId).append("<tbody id='" + tableBodyId + "' class='table-striped table-bordered' />");

                    for (var k = salaryProcessedList.length - 1; k >= 0; k--) {

                        $("#" + tableBodyId).append("<tr id='" + salaryProcessedList[k].idStr + "' style='cursor:pointer;' >"
                                + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                                + "<td style='cursor:pointer;'>" + salaryProcessedList[k].fundTypeName + "</td>"
                                + "<td style='cursor:pointer;'>" + salaryProcessedList[k].budgetHeadName + "</td>"
                                + "<td style='cursor:pointer;'>" + salaryProcessedList[k].employeeCodeM + "</td>"
                                + "<td style='cursor:pointer;'>" + salaryProcessedList[k].employeeName + "</td>"
                                + "<td style='cursor:pointer;'>" + salaryProcessedList[k].designationName + "</td>"
                                + "<td style='cursor:pointer;'>" + salaryProcessedList[k].earnings + "</td>"
                                + "<td style='cursor:pointer;'>" + salaryProcessedList[k].deductions + "</td>"
                                + "<td style='cursor:pointer;'>" + salaryProcessedList[k].finalPayment + "</td></tr>");

                    }
                    $('#' + tableId).append("</table>");
                    $('#' + tableId).dataTable();
                    $("#" + tableId + " thead tr th:first input:checkbox").change(function () {
                        $("#" + tableId + " tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                    });
                    $("#" + tableId + " tbody tr td:first-child input:checkbox").change(function () {
                        var tot = $(".case").length;
                        var tot_checked = $(".case:checked").length;
                        if (tot != tot_checked) {
                            $("#selectall").prop('checked', false);
                        }
                    });

                }
                viewBillCreatedAndNotSendToAccountList(notTransfertoAccctList);
                viewBillCreatedAndSalarySentToAccountList(transfertoAccountList);
            }
        });
        $("#displaySalaryProcessedDiv").append("<div class='col-sm-12'><center><button class='btn btn-success' onclick='Createsalarybill()'>Create Salary Bill</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button class='btn btn-warning mr5' onclick=salaryBillCreation('dashboardBodyMainDiv')>Reset</button></center></div>")

    }
}


function viewBillCreatedAndNotSendToAccountList(list) {
    if (checkUserPrivelege(pvViewSalaryBill)) {
        $("#billCreatedNotSentToAccountTable").text("").append("<div id='createdBillmarkpanelListPanel' class='panel panel-blue' />");
        $("#createdBillmarkpanelListPanel").append("<div id='createdBillmarkpanelListPanelHeading' class='panel-heading' />");
        $("#createdBillmarkpanelListPanelHeading").append("<h4 id='createdBillHeader' class='panel-title' />");
        $("#createdBillHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Salary Bills(Not Tranaferred To Account)</center>");

        $("#createdBillmarkpanelListPanel").append("<div id='collapseOne4' class='panel-collapse collapse in' />");
        $("#collapseOne4").append("<div id='listpanelMainBody1' class = 'panel-body' />");
        $("#listpanelMainBody1").append("<div id='listpanelRow1' class='row' />");
        $("#listpanelMainBody1").append("<div id='MsgDiv2'>");
        $("#listpanelMainBody1").append("<div id='createdBilllistpanelRow1' class='table-responsive' />");

        $("#listpanelMainBody1").append("<div id='displaySectionDiv1' class = 'panel panel-primary-head'></div>");
        $("#displaySectionDiv1").append("<table id='createdBillmarkTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");


        $("#createdBillmarkTable").append("<thead class=''><tr>"
                + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                + "<th style='max-width:30%;width:auto;'><i class='glyphicon'></i>AutoGenerated Bill No.</th>"
                + "<th style='max-width:30%;width:auto;'><i class='glyphicon'></i>Bud.Head</th>"
                + "<th style='max-width:10%;width:auto;'><i class='glyphicon'></i>Manual Bill No.</th>"
                + "<th style='max-width:10%;width:auto;'><i class='glyphicon'></i>Bill Date</th>"
                + "<th style='max-width:10%;width:auto;'><i class='glyphicon'></i>Earn Gross</th>"
                + "<th style='max-width:10%;width:auto;'><i class='glyphicon'></i>Total Deductions</th>"
                + "<th style='max-width:10%;width:auto;'><i class='glyphicon'></i>NetPay</th>"
                + "<th style='max-width:10%;width:auto;'><i class='glyphicon'></i>Delete</th>"
                + "</tr></thead>");

        if (list != null) {
            var tableId = "createdBillmarkTable";
            var tableBodyId = tableId + "body";
            $("#" + tableId).append("<tbody id='" + tableBodyId + "' class='table-striped table-bordered' />");

            for (var k = list.length - 1; k >= 0; k--) {

                //+ salaryProcessedList[k]._id.$oid + 
                $("#" + tableBodyId).append("<tr id='" + list[k].idStr + "' style='cursor:pointer;' >"
                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                        + "<td 'max-width:30%;width:auto;'>" + list[k].autoGeneratedBillNumber + "</td>"
                        + "<td style=''max-width:30%;width:auto;'>" + list[k].budgetHeadName + "</td>"
                        + "<td style='max-width:10%;width:auto;'>" + '<input type="text" name="manualBillNo" style="width:88px">' + "</td>"
                        + "<td style='max-width:10%;width:auto;'>" + '<input type="text" style="width:88px" name="billNo' + k + '" id="billNo' + k + '" value="' + list[k].billDate + '" onkeydown="return false;">' + "</td>"
                        + "<td style='max-width:10%;width:auto;'>" + list[k].earnings + "</td>"
                        + "<td style='max-width:10%;width:auto;'>" + list[k].deductions + "</td>"
                        + "<td style='max-width:10%;width:auto;'>" + list[k].finalPayment + "</td>"
                        + "<td onclick=deletePopUp('deleteSalaryBillCreation','viewBillCreatedAndNotSendToAccountList','" + list[k].idStr + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                var id = "billNo" + k;
                $("#" + id).datepicker({
                    format: "dd/mm/yyyy",
                    autoclose: true
                });
            }
            $('#' + tableId).append("</table>");
            $('#' + tableId).dataTable();
            $("#" + tableId + " thead tr th:first input:checkbox").change(function () {
                $("#" + tableId + " tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
            $("#" + tableId + " tbody tr td:first-child input:checkbox").change(function () {
                var tot = $(".case").length;
                var tot_checked = $(".case:checked").length;
                if (tot != tot_checked) {
                    $("#selectall").prop('checked', false);
                }
            });

        }



        $("#displaySectionDiv1").append("<div class='col-sm-12'><center><button class='btn btn-success' onclick='salaryBillCreationSendToAccount()'>Send To Account</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button class='btn btn-warning mr5' onclick=salaryBillCreation('dashboardBodyMainDiv')>Reset</button></center></div>")
    }
}

function deleteSalaryBillCreation(id)
{
    if (checkUserPrivelege(pvDeleteSalaryBill)) {
        $.post(server_base_url + "/payroll/payrolldetails/salarybillcreation/Delete", {
            Id: id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displaySmallErrorMessages("pregsuccessBefore", "Invalid username / password");
            } else if (data == unauthorized) {
                displaySmallErrorMessages("pregsuccessBefore", unauthorizedMessage);
            } else if (data == statusException) {
                displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessages("pregsuccessBefore", "No User available");
            } else {
                displaySuccessMessages("pregsuccessBefore", deleteMessage, "");
                setTimeout(function () {
                    viewEmpSalaryProcessedList();
                }, 3000);
            }
        });
    }
}
function viewBillCreatedAndSalarySentToAccountList(list) {
    if (checkUserPrivelege(pvViewSalaryBill)) {
        $("#billCreatedSentToAccountTable").text("").append("<div id='sendToAccpanelListPanel3' class='panel panel-blue' />");
        $("#sendToAccpanelListPanel3").append("<div id='sendToAccpanelListPanel3Heading' class='panel-heading' />");
        $("#sendToAccpanelListPanel3Heading").append("<h4 id='sendToAccHeader' class='panel-title' />");
        $("#sendToAccHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Salary Bills(Transferred To Account)</center>");

        $("#sendToAccpanelListPanel3").append("<div id='collapseOne5' class='panel-collapse collapse in' />");
        $("#collapseOne5").append("<div id='listpanelMainBody2' class = 'panel-body' />");
        $("#listpanelMainBody2").append("<div id='listpanelRow2' class='row' />");
        $("#listpanelMainBody2").append("<div id='MsgDiv3'>");
        $("#listpanelRow2").append("<div id='sendToAcclistpanelRow2' class='table-responsive' />");

        $("#listpanelMainBody2").text("").append("<div id='displaySectionDiv2' class = 'panel panel-primary-head'></div>");
        $("#listpanelMainBody2").append("<table id='attendancelockmarkTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");
        $("#attendancelockmarkTable").append("<thead class=''><tr>"
                //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
                + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>AutoGenerated Bill No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Bud.Head</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Manual Bill No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Bill Date</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Earn Gross</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Total Deductions</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Netpay</th>"
                + "</tr></thead>");

        if (list != null) {


            var tableId = "attendancelockmarkTable";
            var tableBodyId = tableId + "body";
            $("#" + tableId).append("<tbody id='" + tableBodyId + "' class='table-striped table-bordered' />");

            for (var k = list.length - 1; k >= 0; k--) {

                //+ salaryProcessedList[k]._id.$oid + 
                $("#" + tableBodyId).append("<tr id='' style='cursor:pointer;' >"
                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].autoGeneratedBillNumber + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].budgetHeadName + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].manualBillNumber + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].billDate + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].earnings + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].deductions + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].finalPayment + "</td></tr>");

            }
            $('#' + tableId).append("</table>");
            $('#' + tableId).dataTable();
            $("#" + tableId + " thead tr th:first input:checkbox").change(function () {
                $("#" + tableId + " tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
            $("#" + tableId + " tbody tr td:first-child input:checkbox").change(function () {
                var tot = $(".case").length;
                var tot_checked = $(".case:checked").length;
                if (tot != tot_checked) {
                    $("#selectall").prop('checked', false);
                }
            });

        }



        $("#displaySectionDiv2").append("<div class='col-sm-12'><center><button class='btn btn-success' onclick=''>Print All</button></center></div>")
    }
}
function getHardCodedOptionsSalarybill(name, DivId) {
    $("#" + DivId).text("").append("<option value='' selected >---- Select Month  ----</option>");
    var monthsOptions = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (var i = 1; i < monthsOptions.length; i++) {
        $("#" + DivId).append("<option  value='" + i + "' >" + monthsOptions[i] + "</option>");
    }
    $("#" + DivId).val(name);
}
function Createsalarybill()
{
    if (checkUserPrivelege(pvCreateSalaryBill)) {
        var employeList = [];

        $('#salaryProcessedTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
            var row = $(this).closest('tr');
            employeList.push({
                emprowid: row.attr('id')
            });

        });

        ///
        var id = getUserSessionElement("userId");
        employeList = JSON.stringify(employeList);
        $.post(server_base_url + "/payroll/payrolldetails/salarybillcreation/SetBillNumber", {
            empListJson: employeList,
            userid: id
        }).done(function (data) {
            if (data == fail || data.statuscode == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession || data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException || data.statuscode == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            } else {
                scrolupfunction();
                viewEmpSalaryProcessedList();
                setTimeout(function () {
                    displaySuccessMessages(successMsgDivCF, successMessage, "");
                }, 1500);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }

        });
    }
}
function salaryBillCreationSendToAccount()
{
    if (checkUserPrivelege(pvCreateSalaryBill)) {
        var employeList = [];

        $('#createdBillmarkTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
            var row = $(this).closest('tr');
            employeList.push({
                emprowid: row.attr('id'),
                manualBillNo: row.find('td:eq(3) input').val(),
                billDate: row.find('td:eq(4) input').val()
            });
            $(this).closest('tr').remove();
        });
        ///payroll/payrolldetails/salarybillcreation/SalaryBillUpdateSendToAccountService
        var id = getUserSessionElement("userId");
        employeList = JSON.stringify(employeList);

        $.post(server_base_url + "payroll/payrolldetails/salarybillcreation/SalaryBillUpdateSendToAccountService", {
            empListJson: employeList,
            userid: id

        }).done(function (data) {
            if (data == fail || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession || data.statuscode == unauthorized) {
                callSessionTimeout();
            } else if (data == statusException || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            } else {

                scrolupfunction();
                viewEmpSalaryProcessedList();
                setTimeout(function () {
                    displaySuccessMessages(successMsgDivCF, successMessage, "");
                }, 1500);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }

        });
    }
}