
/**
 * @author Misha Thomas
 */
function arrearBillCreation(divId) {
    scrolupfunction();
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a>><a href="javascript:void(0)" data-toggle="tab">Arrear Bill Creation</a>');
    createFormWithPrivilage(divId, innerDivCF, "Arrear Bill Creation", FieldGroupForCF, successMsgDivCF, pvCreateArrearBill);
    if (checkUserPrivelege(pvViewArrearBill)) {
        $("#" + innerDivCF).append("<div  id='arrearBillNotCreatedListPanelDiv' />");
        $("#" + innerDivCF).append("<div  id='arrearBillCreatedNotSentToAccountTable' />");
        $("#" + innerDivCF).append("<div  id='arrearBillCreatedSentToAccountTable'  />");

    }
    if (checkUserPrivelege(pvCreateArrearBill)) {
        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        $("#Row0Col2").append(getLabel("Sort By", "required") + "" + getDropDown("sortBy"));
        $("#Row6Col1").append(getLabel("Month", "required") + "" + getDropDown("month"));
        $("#sortBy").append("<option id=''value='' >---- Select Sort By ----</option>");
        $("#sortBy").append("<option id=''value='employeeCode' >Employee Code</option><option id=''value='employeeName'>Employee Name</option>");
        //  $("#sortBy").append("<option id=''value='5' >Department</option><option id=''value='6'>Jun</option>");
        //$("#month").append("<option id=''value='9' >Sep</option><option id=''value='10'>Oct</option>");
        getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col2").append(getLabel("Month", "required") + "" + getDropDown("month"));
        $("#Row1Col1").append(getLabel("Year", "required") + "" + getDropDown("year"));
        //getfinancialYearDrop();
        // viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");

//    getHardCodedOptionsyybill("", "month");
//    getYearBetweenSpecifiedYear("", "year", 3, 1, "Year");
        getLoggedInDDOInDropDown("ddo", "");

        getFinancialYear("month", "year");
        $("#ddo").attr("onchange", "loadEmpcodeSearchFunctionalityforempatd()");
//     var sortByOptions = ["EmployeeCode", "EmployeeName", "Department"];
//    getHardCodedOptions("sortBy", "Sort By", sortByOptions);


        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "View", "saveUpdateBtnId", "validateArrearBill()", "Reset", "resetBackBtnId", "resetempattendance('" + FieldGroupForCF + "','ddo')");
        //loadEmpcodeSearchFunctionalityforempatd();

    }
}
function validateArrearBill() {
    var ddo = $('#ddo').val();
    var month = $('#month').val();
    var year = $('#year').val();
    var sortBy = $('#sortBy').val();
    if (preValidation(ddo) || preValidation(month) || preValidation(year) || preValidation(sortBy)) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, mandatoryFieldMsg);
        return false;
    } else {
        viewEmpArrearProcessedList();
    }
}
function viewEmpArrearProcessedList() {
    if (checkUserPrivelege(pvViewArrearBill)) {
        $("#arrearBillNotCreatedListPanelDiv").text("").append("<div id='EmpArrearProcessedPanel' class='panel panel-blue' />");
        $("#EmpArrearProcessedPanel").append("<div id='EmpArrearProcessedPanelHeading' class='panel-heading' />");
        $("#EmpArrearProcessedPanelHeading").append("<h4 id='arrearProcessedHeader' class='panel-title' />");
        $("#arrearProcessedHeader").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2's><center>List of Employee(Arrear Processed)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='arrearBillCreationList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#EmpArrearProcessedPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#arrearBillCreationList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#arrearBillCreationList span").hasClass("glyphicon-minus-sign")) {
                $("#arrearBillCreationList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#arrearBillCreationList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='arrearProcessedlistpanelMainBody' class = 'panel-body' />");
        $("#arrearProcessedlistpanelMainBody").append("<div id='arrearProcessedlistpanelRow' class='row' />");
        $("#EmpArrearProcessedPanel").append("<div id='MsgDiv1'>");
        $("#arrearProcessedlistpanelRow").append("<div id='arrearProcessedlistpanelRow' class='table-responsive' />");
        $("#arrearProcessedlistpanelRow").append("<div id='displayArrearProcessedDiv' class = 'panel panel-primary-head'></div>");
        $("#displayArrearProcessedDiv").append("<table id='arrearProcessedTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");
//Table Header
        $("#arrearProcessedTable").append("<thead class=''><tr>"
                + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Sl No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Budget Head</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Fund Type</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Total Earnings</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Total Deductions</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Net Pay</th>"

                + "</tr></thead>");

        var ddo = $('#ddo').val();
        var Month = $('#month').val();
        var year = $('#year').val();
        var sortBy = $('#sortBy').val();
        $.get(server_base_url + "payroll/payrolDetails/arrearbillcreation/GetListService", {
            ddo: ddo,
            month: Month,
            year: year,
            sortBy: sortBy
        }).done(function (bdata) {
            bdata = JSON.parse(bdata);
            var arrearProcessedList = bdata.ArrearProcessedList;

            arrearProcessedList = JSON.stringify(arrearProcessedList);
            //alert(arrearProcessedList);
            arrearProcessedList = JSON.parse(arrearProcessedList);
            arrearProcessedList = JSON.parse(arrearProcessedList);

            var notTransfertoAccctList = bdata.NotTranferredToAccounts;
            notTransfertoAccctList = JSON.stringify(notTransfertoAccctList);
            notTransfertoAccctList = JSON.parse(notTransfertoAccctList);
            notTransfertoAccctList = JSON.parse(notTransfertoAccctList);



            var transfertoAccountList = bdata.TranferredToAccounts;
            transfertoAccountList = JSON.stringify(transfertoAccountList);
            transfertoAccountList = JSON.parse(transfertoAccountList);
            transfertoAccountList = JSON.parse(transfertoAccountList);
//        alert(arrearProcessedList);
//        alert(notTransfertoAccctList);
//        alert(transfertoAccountList);


            if (BasicIfElseForTable(bdata, MsgDivInTableCF)) {

                if (arrearProcessedList != null) {
                    var tableId = "arrearProcessedTable";
                    var tableBodyId = tableId + "body";
                    $("#" + tableId).append("<tbody id='" + tableBodyId + "' class='table-striped table-bordered' />");
                    var slNo = 0;
                    for (var k = arrearProcessedList.length - 1; k >= 0; k--) {
                        slNo++;
                        $("#" + tableBodyId).append("<tr id='" + arrearProcessedList[k].idStr + "' style='cursor:pointer;' >"
                                + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                                + "<td style='cursor:pointer;'>" + slNo + "</td>"
                                + "<td style='cursor:pointer;'>" + arrearProcessedList[k].employeeCode + "</td>"
                                + "<td style='cursor:pointer;'>" + arrearProcessedList[k].employeeName + "</td>"
//                            + "<td style='cursor:pointer;'>" + arrearProcessedList[k].locationName + "</td>"
//                            + "<td style='cursor:pointer;'>" + arrearProcessedList[k].departmentName + "</td>"
//                            + "<td style='cursor:pointer;'>" + arrearProcessedList[k].designationName + "</td>"
                                //  + "<td style='cursor:pointer;'>" + arrearProcessedList[k].fundTypeName + "</td>"
                                + "<td style='cursor:pointer;'>" + arrearProcessedList[k].budgetHeadName + "</td>"
                                + "<td style='cursor:pointer;'>" + arrearProcessedList[k].fundTypeName + "</td>"
                                + "<td style='cursor:pointer;'>" + arrearProcessedList[k].totalEarnings + "</td>"
                                + "<td style='cursor:pointer;'>" + arrearProcessedList[k].totalDeductions + "</td>"
                                + "<td style='cursor:pointer;'>" + arrearProcessedList[k].netPay + "</td></tr>");

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
                        } else
                        {
                            $("#selectall").prop('checked', true);
                        }
                    });

                }
                viewArrearBillCreatedAndNotSendToAccountList(notTransfertoAccctList);
                viewArrearBillCreatedAndArrearSentToAccountList(transfertoAccountList);
            }
        });
        $("#displayArrearProcessedDiv").append("<div class='col-sm-12'><center><button class='btn btn-success' onclick='Createarrearbill()'>Create Arrear Bill</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button class='btn btn-warning mr5' onclick='returnOk()'>Reset</button></center></div>")

    }
}
function viewArrearBillCreatedAndNotSendToAccountList(list) {
    if (checkUserPrivelege(pvViewArrearBill)) {
        $("#arrearBillCreatedNotSentToAccountTable").text("").append("<div id='createdBillmarkpanelListPanel' class='panel panel-blue' />");
        $("#createdBillmarkpanelListPanel").append("<div id='createdBillmarkpanelListPanelHeading' class='panel-heading' />");
        $("#createdBillmarkpanelListPanelHeading").append("<h4 id='createdBillHeader' class='panel-title' />");
        $("#createdBillHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Arrear Bills(Not Tranaferred To Account)</center>");

        $("#createdBillmarkpanelListPanel").append("<div id='collapseOne4' class='panel-collapse collapse in' />");
        $("#collapseOne4").append("<div id='listpanelMainBody1' class = 'panel-body' />");
        $("#listpanelMainBody1").append("<div id='listpanelRow1' class='row' />");
        $("#listpanelMainBody1").append("<div id='MsgDiv2'>");
        $("#listpanelRow1").append("<div id='createdBilllistpanelRow1' class='table-responsive' />");

        $("#createdBilllistpanelRow1").append("<div id='displaySectionDiv1' class = 'panel panel-primary-head'></div>");
        $("#displaySectionDiv1").append("<table id='createdArrearBillmarkTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");


        $("#createdArrearBillmarkTable").append("<thead class=''><tr>"
                + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall2"/>All' + "</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Sl No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Auto Generated Bill No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Budget Head</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Fund Type</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Manual Bill No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Bill Date</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Total Earnings</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Total Deductions</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Net Pay</th>"
                + "</tr></thead>");

        if (list != null) {


            var tableId = "createdArrearBillmarkTable";
            var tableBodyId = tableId + "body";
            $("#" + tableId).append("<tbody id='" + tableBodyId + "' class='table-striped table-bordered' />");
            var slNo = 0;
            for (var k = list.length - 1; k >= 0; k--) {
                slNo++;
                //+ arrearProcessedList[k]._id.$oid + 
                $("#" + tableBodyId).append("<tr id='" + list[k].idStr + "' style='cursor:pointer;' >"
                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case2" name="case2" class="case2"/>' + "</td>"
                        + "<td style='cursor:pointer;'>" + slNo + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].employeeCode + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].autoGeneratedBillNo + "</td>"
//                    + "<td style='cursor:pointer;'>" + list[k].locationName + "</td>"
//                    + "<td style='cursor:pointer;'>" + list[k].departmentName + "</td>"
//                    + "<td style='cursor:pointer;'>" + list[k].designationName + "</td>"
//                    + "<td style='cursor:pointer;'>" + list[k].fundTypeName + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].budgetHeadName + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].fundTypeName + "</td>"
                        + "<td>" + '<input type="text" name="manualBillNo" >' + "</td>"
                        + "<td>" + '<input type="text" name="billNo' + k + '" id="billNo' + k + '">' + "</td>"
                        + "<td style='cursor:pointer;'>" + Math.ceil(list[k].totalEarnings) + "</td>"
                        + "<td style='cursor:pointer;'>" + Math.ceil(list[k].totalDeductions) + "</td>"
                        + "<td style='cursor:pointer;'>" + Math.ceil(list[k].netPay) + "</td></tr>");
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
                var tot = $(".case2").length;
                var tot_checked = $(".case2:checked").length;
                if (tot != tot_checked) {
                    $("#selectall2").prop('checked', false);
                } else
                {
                    $("#selectall2").prop('checked', true);
                }
            });

        }



        $("#displaySectionDiv1").append("<div class='col-sm-12'><center><button class='btn btn-success' onclick='arrearBillCreationSendToAccount()'>Send To Account</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button class='btn btn-warning mr5' onclick='returnOk()'>Reset</button></center></div>")

    }
}
function viewArrearBillCreatedAndArrearSentToAccountList(list) {
    if (checkUserPrivelege(pvViewArrearBill)) {
        $("#arrearBillCreatedSentToAccountTable").text("").append("<div id='sendToAccpanelListPanel3' class='panel panel-blue' />");
        $("#sendToAccpanelListPanel3").append("<div id='sendToAccpanelListPanel3Heading' class='panel-heading' />");
        $("#sendToAccpanelListPanel3Heading").append("<h4 id='sendToAccHeader' class='panel-title' />");
        $("#sendToAccHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Arrear Bills(Transferred To Account)</center>");

        $("#sendToAccpanelListPanel3").append("<div id='collapseOne5' class='panel-collapse collapse in' />");
        $("#collapseOne5").append("<div id='listpanelMainBody2' class = 'panel-body' />");
        $("#listpanelMainBody2").append("<div id='listpanelRow2' class='row' />");
        $("#listpanelMainBody2").append("<div id='MsgDiv3'>");
        $("#listpanelRow2").append("<div id='sendToAcclistpanelRow2' class='table-responsive' />");

        $("#sendToAcclistpanelRow2").text("").append("<div id='displaySectionDiv2' class = 'panel panel-primary-head'></div>");
        $("#displaySectionDiv2").append("<table id='attendancelockmarkTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");
        $("#attendancelockmarkTable").append("<thead class=''><tr>"
                //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
                + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall1"/>All' + "</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Budget Head</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Fund Type</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Total Earnings</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Total Deductions</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Net Pay</th>"
                + "</tr></thead>");

        if (list != null) {


            var tableId = "attendancelockmarkTable";
            var tableBodyId = tableId + "body";
            $("#" + tableId).append("<tbody id='" + tableBodyId + "' class='table-striped table-bordered' />");

            for (var k = list.length - 1; k >= 0; k--) {

                //+ arrearProcessedList[k]._id.$oid + 
                $("#" + tableBodyId).append("<tr id='' style='cursor:pointer;' >"
                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case1" name="case1" class="case1"/>' + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].employeeCode + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].employeeName + "</td>"
//                    + "<td style='cursor:pointer;'>" + list[k].locationName + "</td>"
//                    + "<td style='cursor:pointer;'>" + list[k].departmentName + "</td>"
//                    + "<td style='cursor:pointer;'>" + list[k].designationName + "</td>"
//                    + "<td style='cursor:pointer;'>" + list[k].fundTypeName + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].budgetHeadName + "</td>"
                        + "<td style='cursor:pointer;'>" + list[k].fundTypeName + "</td>"
//                      + "<td style='cursor:pointer;'>" + list[k].budgetHeadName + "</td>"
                        + "<td style='cursor:pointer;'>" + Math.ceil(list[k].totalEarnings) + "</td>"
                        + "<td style='cursor:pointer;'>" + Math.ceil(list[k].totalDeductions) + "</td>"
                        + "<td style='cursor:pointer;'>" + Math.ceil(list[k].netPay) + "</td></tr>");

            }
            $('#' + tableId).append("</table>");
            $('#' + tableId).dataTable();
            $("#" + tableId + " thead tr th:first input:checkbox").change(function () {
                $("#" + tableId + " tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
            $("#" + tableId + " tbody tr td:first-child input:checkbox").change(function () {
                var tot = $(".case1").length;
                var tot_checked = $(".case1:checked").length;
                if (tot != tot_checked) {
                    $("#selectall1").prop('checked', false);
                } else
                {
                    $("#selectall1").prop('checked', true);
                }
            });

        }



        $("#displaySectionDiv2").append("<div class='col-sm-12'><center><button class='btn btn-success' onclick='returnOk()'>Print All</button></center></div>")

    }
}
function getHardCodedOptionsArrearbill(name, DivId) {
    $("#" + DivId).text("").append("<option value='' selected >---- Select Month  ----</option>");
    var monthsOptions = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (var i = 1; i < monthsOptions.length; i++) {
        $("#" + DivId).append("<option  value='" + i + "' >" + monthsOptions[i] + "</option>");
    }
    $("#" + DivId).val(name);
}
function Createarrearbill()
{
    if (checkUserPrivelege(pvCreateArrearBill)) {
        var employeList = [];

        $('#arrearProcessedTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
            var row = $(this).closest('tr');
            employeList.push({
                emprowid: row.attr('id')
            });

        });

        ///
        var id = getUserSessionElement("userId");
        employeList = JSON.stringify(employeList);
        $.post(server_base_url + "payroll/payrollDetails/arrearBillCreation/SetBillNumber", {
            empListJson: employeList,
            userid: id
        }).done(function (data) {
            //alert(data);
            if (data == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            } else {
                scrolupfunction();
                viewEmpArrearProcessedList();
                setTimeout(function () {
                    displaySuccessMessages(successMsgDivCF, successMessage, "");
                }, 1500);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }

        });
    }
}
function arrearBillCreationSendToAccount()
{
    if (checkUserPrivelege(pvUpdateArrearBill)) {
        var employeList = [];

        $('#createdArrearBillmarkTable tr input[type="checkbox"][name="case2"]:checked').each(function (i) {
            var row = $(this).closest('tr');
            employeList.push({
                emprowid: row.attr('id'),
                manualBillNo: row.find('td:eq(6) input').val(),
                billDate: row.find('td:eq(7) input').val()
            });
            // alert(employeList);
            $(this).closest('tr').remove();
        });

        ///payroll/payrolldetails/arrearbillcreation/ArrearBillUpdateSendToAccountService
        var id = getUserSessionElement("userId");
        employeList = JSON.stringify(employeList);
        //alert(employeList);
        $.post(server_base_url + "payroll/payrollDetails/arrearBillcreation/ArrearBilLSendToAccountService", {
            empListJson: employeList,
            userid: id

        }).done(function (data) {
            if (data == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            } else {

                scrolupfunction();
                viewEmpArrearProcessedList();
                setTimeout(function () {
                    displaySuccessMessages(successMsgDivCF, successMessage, "");
                }, 1500);
                clearSuccessMessageAfterTwoSecond(successMsgDivCF);
            }

        });
    }
}