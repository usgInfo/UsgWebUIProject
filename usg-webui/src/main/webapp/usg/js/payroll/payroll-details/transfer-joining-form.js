/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function employeeJoiningForm(divId)
{
    if (checkUserPrivelege(pvCreateTransferForm)) {
        scrolupfunction();
        var financialYear = getUserSessionElement(seCurrentFinancialYear);
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a>><a href="javascript:void(0)" data-toggle="tab">Transfer Joining Form</a>');
        $("#" + divId).text("").append("<div id='testMainDivId'/>");
        $("#testMainDivId").text("").append("<div id='mainTabMenu' class='col-md-6' style='width:100%;' />");
        $("#mainTabMenu").append("<div id='firstHeader'/>");
        $("#mainTabMenu").append("<div id='viewlist'/>");
        $("#firstHeader").append("<div id='joiningPanel' class='panel panel-blue' />");
        $("#joiningPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Transfer Joining Form</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='transferJoiningForm'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#joiningPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#transferJoiningForm").click(function () {
            $("#collapseOne2").toggle();
            if ($("#transferJoiningForm span").hasClass("glyphicon-minus-sign")) {
                $("#transferJoiningForm").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#transferJoiningForm").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        viewEmployeeJoiningFormList('listpanelRow');
    }
}

function viewEmployeeJoiningFormList(divId) {
    if (checkUserPrivelege(pvViewTransferForm)) {
        $("#" + divId).text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
        $("#DatatablemainDiv").append("<div class='table-responsive' style='overflow-x:auto;' id='viewDataTableDiv'/>");
        $("#viewDataTableDiv").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#viewDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayEmployeeJoiningTable' />");
        $("#displayEmployeeJoiningTable").append("<thead class=''><tr>"
                + "<th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>From DDO</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Designation</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Work Details</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Transfer Date</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Has Joined?</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Date</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Remarks</th>"
                + "</tr></thead></table>");


        $.get(server_base_url + "/hrms/payroll/TransferJoiningForm/ViewAll", {
             ddo: getUserSessionElement(seDDOId),
            
        }).done(function (pdata) {
           
            if (pdata == fail || pdata.statuscode == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + NoDataFound + "<br /><br />");
            } else if (pdata == unauthorized || pdata.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (pdata == invalidSession || pdata.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (pdata == statusException || pdata.statuscode == statusException) {
                //  displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                //  displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else {
                if (pdata != null) {

                    if (pdata.length > 0) {

                        var sno = 0;
                        $("#displayEmployeeJoiningTable").append("<tbody id='displayJoiningTableBody' class='table-striped table-bordered' />");
//                    for (var i = 0; i < Tdata.length-1; i++) {
                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;
                            var obj = {
                                employeePromotionId: pdata[i]._id.$oid,
                                employeeId: pdata[i].employeeId,
                                employeeCode: pdata[i].employeeCode,
                                employeeName: pdata[i].employeeName,
                                dueMonth: pdata[i].dueMonth,
                                dueYear: pdata[i].dueYear,
                                promOrTransCode: pdata[i].promOrTransCode,
                                status: pdata[i].status,
                                ddo: pdata[i].ddo,
                                location: pdata[i].location,
                                department: pdata[i].department,
                                designation: pdata[i].designation,
                                grade: pdata[i].grade,
                                nature: pdata[i].nature,
                                postingCity: pdata[i].postingCity,
                                fundType: pdata[i].fundType,
                                budgetHead: pdata[i].budgetHead,
                                discipline: pdata[i].discipline,
                                association: pdata[i].association,
                                bank: pdata[i].bank,
                                acnumber: pdata[i].acnumber,
                                basic: pdata[i].basic,
                                gradePay: pdata[i].gradePay,
                                incrementPercentage: pdata[i].incrementPercentage,
                                dated: pdata[i].dated,
                                remarks: pdata[i].remarks
                            }
                            if (pdata[i].workDetails == null || pdata[i].workDetails == undefined) {
                                pdata[i].workDetails = "";
                            }
                            if (pdata[i].ddo == null || pdata[i].ddo == undefined) {
                                pdata[i].ddo = "";
                            }
                            if (pdata[i].designation == null || pdata[i].designation == undefined) {
                                pdata[i].designation = "";
                            }
                            obj = JSON.stringify(obj);
                            $("#displayJoiningTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].empCode + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].empName + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].ddo + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].designation + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].workDetails + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].promotedDate + "</td>"
                                    + "<td><input type='checkbox' id='joined' name='joined'></td>"
                                    + "<td><input type='text' class='form-control' id='formDate" + sno + "'></input></td>"
                                    + "<td><input type='text' id='remarks' style='height:35px'></td>");
                            $('#formDate' + sno).datepicker({
                                changeYear: true,
                                changeMonth: true,
                                dateFormat: "dd-mm-yy",
                                yearRange: '-100:+100'
                            });


                        }
                        $("#displayEmployeeJoiningTable").dataTable();
                    }
                }

            }
        });

        $("#" + divId).append("<div id='groupButtonId' class='form-group'/>");
        $("#groupButtonId").append("<div id='saveButtonId' />");
        $("#saveButtonId").append("<center><button class='btn btn-success mr5' onclick='saveEmployeeJoiningTableValidation()'>Save</button>&nbsp&nbsp&nbsp<button class='btn btn-warning mr5' onclick='resetJoiningTable()'>Reset</button></center>");

    }
}


function saveEmployeeJoiningTableValidation()
{
    saveEmployeeJoiningTable();
}

function saveEmployeeJoiningTable() {
    if (checkUserPrivelege(pvCreateTransferForm)) {
        var jsonArrayObject = [];
        var joiningJsonObj = {};
        var TableRows = $('table#displayEmployeeJoiningTable').find('tbody').find('tr');
        for (var i = 0; i < TableRows.length; i++) {
            jsonArrayObject.push({
                sno: $(TableRows[i]).find('td:eq(0)').html(),
                empCode: $(TableRows[i]).find('td:eq(0)').html(),
                empName: $(TableRows[i]).find('td:eq(2)').html(),
                fromDDO: $(TableRows[i]).find('td:eq(3)').html(),
                designation: $(TableRows[i]).find('td:eq(4)').html(),
                workDetails: $(TableRows[i]).find('td:eq(5)').html(),
                transferDate: $(TableRows[i]).find('td:eq(6)').html(),
                hasJoined: $(TableRows[i]).find('td:eq(7)').find('input[type="checkbox"]').is(':checked'),
                date: $(TableRows[i]).find('td:eq(8)').find('input').val(),
                remarks: $(TableRows[i]).find('td:eq(9)').find('input').val(),
            });
        }
        joiningJsonObj["employeeTransferJoiningFormList"] = jsonArrayObject;
        joiningJsonObj = JSON.stringify(joiningJsonObj);
      
        console.log(joiningJsonObj);
        $.post(server_base_url + "/hrms/payroll/TransferJoiningForm/Save", {
            joiningJsonObj: joiningJsonObj
        }).done(function (data) {
            if (data == fail||data.statuscode == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized||data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession||data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException||data.statuscode == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else {

                displaySuccessMessages("pregsuccessBefore", "" + successMessage + "<br /><br />");
                setTimeout(function () {
                    employeeJoiningForm('dashBoardBodyMainDiv');
                }, 2000);
            }
        }
        );
    }
}
function resetJoiningTable() {
    var TableRows = $('table#displayEmployeeJoiningTable').find('tbody').find('tr');
    for (var i = 0; i < TableRows.length; i++) {
        $(TableRows[i]).find('td:eq(8)').find('input').val("");
        $(TableRows[i]).find('td:eq(9)').find('input').val("");
        $('input:checkbox').removeAttr('checked');
    }

}