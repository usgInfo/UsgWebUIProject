/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayPensionHeadAssign(divId) {
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionMasters()">Pension Master</a></label> >><label>Pension Head Assign</label>');
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Pension Head Assign</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");

    $("#panelRow").append("<div id='pregsuccessBefore'/>");
    $("#panelRow").append("<div id='pensionBanklistMessageDiv'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");

    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup").append("<input type='hidden' id='bid' >");

    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "", "employeeCode", "Enter Employee Code", ""));
    $("#Row1Col2").append(getLabel_InputWithSpan("Employee Code(M)", "", "employeeCodeM", "Enter Employee Code(M)", ""));

    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel_InputWithSpan("Employee Name ", "", "employeeName", "Enter Employee Name", ""));
    $("#Row2Col2").append(getLabel("Department", "") + "" + getDropDown("department"));
    getAllDepartment();
    getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel("Designation", "") + "" + getDropDown("designation"));
    $("#Row3Col2").append(getLabel("Head", "required") + "" + getDropDown("head"));
    getAllDesignation();
    getAllHead();
    $("#panelMainBody").append("<div id='row6' class='row' />");
    $("#row6").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='savePensionHead' value='Save' class='btn btn-success bn'  onclick='viewPensionHeadAssign()'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetPensionHeadAssign()' class='btn btn-warning bn' id='reserPensionHead' name='reset' value='reset'>Reset</button></center></div>");

    $("#mainTabMenu").append("<div id='pensionHeadListPanel'  />");
    $("#pensionHeadListPanel").append("<div id='pensionHeadListPanel1' class='panel panel-blue' />");
    $("#pensionHeadListPanel1").append("<div id='pensionHeadListPanelHeading1' class='panel-heading' />");
    $("#pensionHeadListPanelHeading1").append("<h4 id='pensionHeadfirstHeader2' class='panel-title' />");
    $("#pensionHeadfirstHeader2").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Pension Head Assign</center>");
    $("#pensionHeadListPanel1").append("<div id='collapseOne4' class='panel-collapse collapse in' />");
    $("#collapseOne4").append("<div id='pensionHeadPanellistpanelMainBody1' class = 'panel-body' />");
    ViewAssignedList('pensionHeadPanellistpanelMainBody1');

}
function resetPensionHeadAssign() {
    $("employeeCode").val("");
    $("employeeCodeM").val("");
    $("employeeName").val("");
    $("department").val("");
    $("designation").val("");
    $("head").val("");
}

function ViewAssignedList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='viewpensionHead'/>");
    $("#viewpensionHead").append("<div class='table-responsive' id='viewpensionHeadSectionTableDiv' />");
    $("#viewpensionHeadSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displaypensionHeadTable' />");
    $("#displaypensionHeadTable").append("<thead class=''><tr>"
            + " <th class='sno_width'>Select All</th>"
            + "<th class='table_col_width'><i class='fa'></i>Employee Code</th>"
            + "<th class='table_col_width'><i class='fa'></i>Employee Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Department</th>"
            + "<th class='table_col_width'><i class='fa'></i>Designation</th>"
            + "<th class='table_col_width'><i class='fa'></i>Head Name</th>"
            + "</tr></thead>");
    $.get(server_base_url + "/pension/master/PensionHeadAssign/View", {
    }).done(function(bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        }
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                $("#displaypensionHeadTable").append("<tbody id='displaypensionHeadTableBody' class='table-striped table-bordered' />");
                for (var i = bdata.length - 1; i >= 0; i--) {
                    sno++;
                    var objJson = {
                        aid: bdata[i]._id.$oid,
                        empCode: bdata[i].empCode,
                        empManualCode: bdata[i].empManualCode,
                        empName: bdata[i].empName,
                        designation: bdata[i].designation,
                        department: bdata[i].department,
                        headName: bdata[i].headName,
                    };
                    objJson = JSON.stringify(objJson);
                    $("#displaypensionHeadTableBody").append("<tr id='" + bdata[i]._id.$oid + "' class='table_row' >"
                            + "<td><input type='checkbox' name='case2' id='checkbox2'/></td>"
                            + "<td class='table_row'>" + bdata[i].empCode + "</td>"
                            + "<td class='table_row'>" + bdata[i].empName + "</td>"
                            + "<td class='table_row'>" + bdata[i].department + "</td>"
                            + "<td class='table_row'>" + bdata[i].designation + "</td>"
                            + "<td class='table_row'>" + bdata[i].headName + "</td></tr>");

                }
                $('#displaypensionHeadTable').append("</table>");
                $('#displaypensionHeadTable').dataTable();

                $("#pensionHeadPanellistpanelMainBody1").append("<div class='row' id='assignAndReturn1'>");
                $("#assignAndReturn1").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='savePensionHead' value='Save' class='btn btn-success bn'  onclick='updatePensionHeadAssign()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='deletePensionHeadAssign()' class='btn btn-warning bn' id='' name='reset' value='reset'>Delete</button></center></div>");
            }
        }
    });
}
//displayPensionHeadAssign
function deletePensionHeadAssign() {

    var rowid = [];
    // var head = $("#head").val();
    $('table#displaypensionHeadTable tbody tr input[type="checkbox"][name="case2"]:checked').each(function() {
        rowid.push($(this).closest('tr').attr('id'));
    });
    var Json = {};
    Json["id"] = rowid;
    Json = JSON.stringify(Json);
    $.post(server_base_url + "/pension/master/PensionHeadAssign/Delete", {
        idlist: Json
    }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized) {
            displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
        } else {
            displayPensionHeadAssign();
            displayLargeSuccessMessages("pregsuccessBefore", "" + successMessage + "<br /><br />");
        }
    });
}


function updatePensionHeadAssign() {

    var rowid = [];
    var head = $("#head").val();
    if (head == "" || head == undefined || head == null) {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
        return false;
    } else {
        $('table#displaypensionHeadTable tbody tr input[type="checkbox"][name="case2"]:checked').each(function() {
            rowid.push($(this).closest('tr').attr('id'));
        });
        var Json = {};
        Json["id"] = rowid;
        Json = JSON.stringify(Json);
        $.post(server_base_url + "/pension/master/PensionHeadAssign/Update", {
            idlist: Json,
            head: head
        }).done(function(data) {

            if (data == fail) {
                displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized) {
                displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("pensionProcesspregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            } else {
                displayPensionHeadAssign();
                displayLargeSuccessMessages("pregsuccessBefore", "" + successMessage + "<br /><br />");
            }
        });
    }
}
function resetPensionHeadAssign() {
    $("#employeeCode").val("");
    $("#employeeCodeM").val("");
    $("#employeeName").val("");
    $("#department").val("");
    $("#head").val("");
    $("#designation").val("");
}
function viewPensionHeadAssign() {
    var department = $("#department").val();
    var designation = $("#designation").val();
    var employeeCode = $("#employeeCode").val();
    var manualCode = $("#employeeCodeM").val();
    var employeeName = $("#employeeName").val();
    //$("#pensionHeadListPanel").append("<div id='pensionHeadListPanel' class='row' />");
    $("#pensionHeadListPanel").text("").append("<div id='pensionHeadListPanelpanel' class='panel panel-blue' />");
    $("#pensionHeadListPanelpanel").append("<div id='pensionHeadListPanelHeading' class='panel-heading' />");
    $("#pensionHeadListPanelHeading").append("<h4 id='pensionHeadfirstHeader1' class='panel-title' />");
    $("#pensionHeadfirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Pension Employee</center>");
    $("#pensionHeadListPanelpanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='pensionHeadPanellistpanelMainBody' class = 'panel-body' />");
    $("#pensionHeadPanellistpanelMainBody").append("<div id='pensionHeadlistMessageDiv'></div>");
    $("#pensionHeadPanellistpanelMainBody").append("<div id='pensionHeadlistpanelRow' class='row' />");
    $("#pensionHeadlistpanelRow").append("<div id='pensionHeadLeftstatuslistpanelRow' class='table-responsive' />");
    $("#pensionHeadLeftstatuslistpanelRow").append("<table id='pensionEmployeeListTable' class='table table-striped table-bordered'></table>");
    $("#pensionEmployeeListTable").append("<thead class=''><tr>"

            + " <th class='sno_width'>Select All<input type='checkbox' id='selectAll' name='case1'/></th>"
            + "<th class='table_col_width'><i class='fa'></i>Employee Code</th>"
            + "<th class='table_col_width'><i class='fa'></i>Employee Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Designation</th>"
            + "<th class='table_col_width'><i class='fa'></i>Department</th>"
            // + "<th class='table_col_width'><i class='fa'></i>Pension Type</th>"
            + "</tr></thead>");

    var employeeJson = {
        department: department,
        designation: designation,
        employeecode: employeeCode,
        manualCode: manualCode,
        employeeName: employeeName
    }
    employeeJson = JSON.stringify(employeeJson);
    $.get(server_base_url + "/pension/master/HeadAssign/GetListOfEmployee", {
        pensionEmployee: employeeJson

    }).done(function(pdata) {
        if (pdata == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (pdata == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            if (pdata != null) {
                if (pdata.length > 0) {
                    var sno = 0;
                    $("#pensionEmployeeListTable").append("<tbody id='pensionEmployeeListTableBody' class='table-striped table-bordered' />");
                    for (var i = pdata.length - 1; i >= 0; i--) {
                        sno++;
                        var assjson = {
                            aid: pdata[i]._id.$oid,
                            pensionType: pdata[i].pensionType,
                            pensionClassification: pdata[i].pensionClassification,
                            motherName: pdata[i].motherName,
                            penStartDate: pdata[i].penStartDate,
                            comMatDate: pdata[i].comMatDate,
                            bank: pdata[i].bank,
                            incDate: pdata[i].incDate,
                            height: pdata[i].height,
                            empStatus: pdata[i].empStatus,
                            deathDate: pdata[i].deathDate,
                            empReligion: pdata[i].empReligion,
                            ageOnNextDob: pdata[i].ageOnNextDob,
                            association: pdata[i].association,
                            corrAddress: pdata[i].corrAddress,
                            permanentAddress: pdata[i].permanentAddress,
                            contactNOC: pdata[i].contactNOC,
                            contactNOP: pdata[i].contactNOP,
                            date: pdata[i].date,
                            pensionOrderNum: pdata[i].pensionOrderNum,
                            pensionLeftStatus: pdata[i].pensionLeftStatus,
                            leftDate: pdata[i].leftDate,
                            idMarks: pdata[i].idMarks,
                            remarksemarks: pdata[i].remarksemarks,
                            stopPension: pdata[i].stopPension,
                            lastDrawnPayWithDA: pdata[i].lastDrawnPayWithDA,
                            commutedPension: pdata[i].commutedPension,
                            commutedAmount: pdata[i].commutedAmount,
                            lastDrawnPayWithoutDA: pdata[i].lastDrawnPayWithoutDA,
                            monthlyCommutedAmount: pdata[i].monthlyCommutedAmount,
                            commFact: pdata[i].commFact,
                            residualPension: pdata[i].residualPension,
                            AverageEmoluments: pdata[i].AverageEmoluments,
                            gratuity: pdata[i].gratuity,
                            pension: pdata[i].pension,
                            deathGratuity: pdata[i].deathGratuity,
                            familyPension: pdata[i].familyPension,
                            lessAmountFromGratuity: pdata[i].lessAmountFromGratuity,
                            famPensionAfterYear: pdata[i].famPensionAfterYear,
                            it: pdata[i].it,
                            familyPensionYearly: pdata[i].familyPensionYearly,
                            pensionStartDate: pdata[i].pensionStartDate,
                            retDate: pdata[i].retDate,
                            otherDeduction: pdata[i].otherDeduction,
                            dateofBirth: pdata[i].dateofBirth,
                            location: pdata[i].location,
                            religion: pdata[i].religion,
                            grade: pdata[i].grade,
                            appointmentDate: pdata[i].appointmentDate,
                            designation: pdata[i].designation,
                            department: pdata[i].department,
                            employeeName: pdata[i].employeeName,
                            employeecode: pdata[i].employeecode,
                            DDO: pdata[i].DDO
                        }
                        assjson = JSON.stringify(assjson);
                        $("#pensionEmployeeListTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td><input type='checkbox' id='empid' name='case1'></td>"
                                + "<td >" + pdata[i].employeecode + "</td>"
                                + "<td >" + pdata[i].employeeName + "</td>"
                                + "<td >" + pdata[i].designation + "</td>"
                                + "<td >" + pdata[i].department + "</td></tr>");
                        // + "<td >" + pdata[i].pensionType + "</td></tr>");
                    }
                    $("#pensionEmployeeListTable").DataTable({
                        paging: true
                    });
                }
            }
            $("#pensionHeadlistpanelRow").append("<div class='row' id='assignAndReturn'>");
            $("#assignAndReturn").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='savePensionHead' value='Save' class='btn btn-success bn'  onclick='assignPensionHeadAssign()'>Assign</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='displayPensionHeadAssign()' class='btn btn-warning bn' id='' name='reset' value='reset'>Return</button></center></div>");
        }
    }
    );
}

function assignPensionHeadAssign() {

    var userId = getUserSessionElement("userId");
    alert(userId);
    var rowid = [];
    var head = $("#head").val();
    if (head == "" || head == undefined || head == null) {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
        return false;
    } else {

        $('table#pensionEmployeeListTable tbody tr input[type="checkbox"][name="case1"]:checked').each(function() {
            rowid.push($(this).closest('tr').attr('id'));
        });
        var Json = {};
        Json["id"] = rowid;
        Json = JSON.stringify(Json);
        $.post(server_base_url + "/pension/transactions/PensionHeadAssign/Save", {
            list: Json,
            head: head,
            userid: userId
        }).done(function(data) {

            if (data == fail) {
                displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", "" + statusExceptionMessage + "<br /><br />");
            } else {
                displaySuccessMessages("pensionHeadlistMessageDiv", "" + successMessage + "<br /><br />");
                setTimeout(function() {
                    displayPensionHeadAssign();
                }, 1000);
            }

        });

    }
}

//if (data == fail) {
//            displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", emptyListMessage + "<br/><br/>");
//        } else if (data == unauthorized) {
//            displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", unauthorizedMessage + "<br/><br/>");
//        } else if (data == statusException) {
//            displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", statusExceptionMessage + "<br/><br/>");
//        } else if (data == invalidSession) {
//            callSessionTimeout();
//        } else if (data == null) {
//
//        } else {
//            $("#head").prop("disabled", true);
//            $("#order").prop("disabled", true);
//            $("#penArrearSave").attr('disabled', true);
//            $("#penArrearReset").attr('disabled', true);
//            displaySuccessMessages("pensionArrearMessageDiv", updateSuccessMessage, "");
//            setTimeout(function () {
function getAllHead() {
    $.get(server_base_url + "/pension/master/PensionHead/ViewList", {
    }).done(function(bdata) {
        $("#head").append("<option value=''>----Select Head----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#head").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].pensionHeadName + "</option>");
        }
    });
}