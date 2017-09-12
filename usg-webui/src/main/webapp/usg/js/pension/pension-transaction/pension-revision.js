/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function editPensionRevision(obj) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);

    $("#employeeName").val(obj.employeeName);
    $("#revisionCode").val(obj.revisionCode);

    $("#retirementDate").val(obj.retirementDate);
    $("#deathDate").val(obj.deathdate);
    $("#employeeCode").val(obj.employeeCode);
    $("#status").val(obj.PFType);
    $("#lastDrawnPayWithOutDA").val(obj.lastPayDrawWithoutDA);
    $("#newLastDrawnPayWithoutDA").val(obj.newLastPayDrawWithDA);
    $("#lastDrawnPayWithDA").val(obj.lastPayDrawWithDA);
    $("#newLastDrawnPayWithDA").val(obj.newlastPayDrawWithoutDA);
    $("#dueMonth").val(obj.dueMonth);
    $("#dated").val(obj.dated);
    $("#dueYear").val(obj.dueYear);
    $("#remarks").val(obj.remarks);
    $("#qualifyingServiceR").val(obj.qualifyingServiceR);
    $("#newPaylastDrawnWithda").val(obj.newPaylastDrawnWithda);
    $("#qualifyingService").val(obj.qualifyingService);
    $("#newPaylastDrawnWithda").val(obj.newPaylastDrawnWithda);
    $("#commutedPercentage").val(obj.commutedPercentage);
    $("#nonqualifyingServiceR").val(obj.qualifyingServiceR);
    $("#commutedAmount").val(obj.commutedAmount);
    $("#lastDrawnPayWithoutDA").val(obj.lastDrawnPayWithoutDA);
    $("#monthlyCommutedAmount").val(obj.monthlyCommutedAmount);
    $("#commFactor").val(obj.commFactor);
    $("#residualPension").val(obj.residualPension);
    $("#averageEmoluments").val(obj.averageEmoluments);
    $("#gratuity").val(obj.gratuity);
    $("#pension").val(obj.pension);
    $("#deathGratuity").val(obj.deathGratuity);
    $("#familyPension").val(obj.familyPension);
    $("#familyPensionAfterYear").val(obj.familyPensionAfterYear);
    $("#familyPensionYear").val(obj.familyPensionYear);
    $("#others").val(obj.otherDeduction);
    $("#it").val(obj.it);
    $("#lessAmountFromGratuity").val(obj.LessAmountFromGratuity);
    $("#newlastDrawnPayWithoutDA").val(obj.newPaylastDrawnWithoutDA);
    $("#newPaylastDrawnWithda").val(obj.newPaylastDrawnWithDA);



    $("#employeeName").prop("readonly", false);
    $("#revisionCode").prop("readonly", false);
    $("#retirementDate").prop("readonly", false);
    $("#deathDate").prop("readonly", false);
    $("#employeeCode").prop("readonly", false);
    $("#status").prop("readonly", false);
    $("#lastDrawnPayWithOutDA").prop("readonly", false);
    $("#newLastDrawnPayWithoutDA").prop("readonly", false);
    $("#lastDrawnPayWithDA").prop("readonly", false);
    $("#newLastDrawnPayWithDA").prop("readonly", false);
    $("#dueMonth").prop("readonly", false);
    $("#dated").prop("readonly", false);
    $("#dueYear").prop("readonly", false);
    $("#remarks").prop("readonly", false);
    $("#qualifyingServiceR").prop("readonly", false);
    $("#qualifyingService").prop("readonly", false);
    $("#newPaylastDrawnWithda").prop("readonly", false);
    $("#commutedPercentage").prop("readonly", false);
    $("#nonqualifyingServiceR").prop("readonly", false);
    $("#commutedAmount").prop("readonly", false);
    $("#lastDrawnPayWithoutDA").prop("readonly", false);
    $("#monthlyCommutedAmount").prop("readonly", false);
    $("#commFactor").prop("readonly", false);
    $("#residualPension").prop("readonly", false);
    $("#averageEmoluments").prop("readonly", false);
    $("#gratuity").prop("readonly", false);
    $("#pension").prop("readonly", false);
    $("#deathGratuity").prop("readonly", false);
    $("#familyPension").prop("readonly", false);
    $("#familyPensionAfterYear").prop("readonly", false);
    $("#familyPensionYear").prop("readonly", false);
    $("#others").prop("readonly", false);
    $("#it").prop("readonly", false);
    $("#lessAmountFromGratuity").prop("readonly", false);
    $("#panelRow8").text("").append("<center><button id='updateButton' onclick=updatePensionRevisionData('" + obj.id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayPensionRevisionType()'  class='btn btn-warning bn' >Back</button></center>");
}






function displayPensionRevision(divId) {
    
    
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label> >> <label><a href="javascript:pensionTransactions()">Pension Transaction</a></label> >> <label>Pension Revision</label>');

    
    
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Pension Revision</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");

    $("#panelRow").append("<div id='pregsuccessBefore' ></div>");
    $("#panelRow").append("<div id='pensionEmployeeMessageDiv'></div>");
    $("#panelRow").append("<div id='FieldGroup1' class='form-group' />");

    getTwoColumnInRow("FieldGroup1", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "required", "employeeCode", "Enter Employee Code", "onchange='validateEmpCode()'"));
    $("#Row1Col2").append(getLabel("Status", "required") + "" + getDropDown("status"));
    getAllStatus("", "status");

    getTwoColumnInRow("FieldGroup1", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel_InputWithSpan("Employee Name", "", "employeeName", "Enter Employee Name", "onkeypress='return validatealphanumeric(event)'"));
    $("#Row2Col2").append(getLabel_InputWithSpan("Revision Code", "required", "revisionCode", "Enter Revision Code", "onkeypress='return validateNumber(event)'"));

    getTwoColumnInRow("FieldGroup1", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel_InputWithSpan("Retirement Date", "required", "retirementDate", "Enter Retirement Date", ""));
    $("#Row3Col2").append(getLabel_InputWithSpan("Death Date", "", "deathDate", "Enter Death Date", ""));
    $("#deathDate").datepicker();
    $("#retirementDate").datepicker();

    getTwoColumnInRow("FieldGroup1", "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col1").append(getLabel_InputWithSpan("Last Pay Drawn  Without DA", "", "lastDrawnPayWithOutDA", "Enter Last Drawn Pay Without DA", "onkeypress='return validateNumber(event)'"));
    $("#Row4Col2").append(getLabel_InputWithSpan("New Last  Pay Drawn Without DA", "required", "newLastDrawnPayWithoutDA", "Enter New Last Drawn Pay Without DA", "onkeypress='return validateNumber(event)' "));

    getTwoColumnInRow("FieldGroup1", "Row5", "Row5Col1", "Row5Col2");
    $("#Row5Col1").append(getLabel_InputWithSpan("Last Pay Drawn  With DA", "", "lastDrawnPayWithDA", "Enter Last Drawn Pay With DA", "onkeypress='return validateNumber(event)'"));
    $("#Row5Col2").append(getLabel_InputWithSpan("New Last  Pay Drawn With DA", "required", "newLastDrawnPayWithDA", "Enter New Last Drawn Pay With DA", "onkeypress='return validateNumber(event)' "));

    getTwoColumnInRow("FieldGroup1", "Row6", "Row6Col1", "Row6Col2");
    $("#Row6Col1").append(getLabel("Due Month", "required") + "" + getDropDown("dueMonth"));
    $("#Row6Col2").append(getLabel_InputWithSpan("Dated", "required", "dated", "Enter Dated", ""));
    $("#dated").datepicker();
    getAllMonth();

    getTwoColumnInRow("FieldGroup1", "Row7", "Row7Col1", "Row7Col2");
    $("#Row7Col1").append(getLabel("Due Year", "required") + "" + getDropDown("dueYear"));
    $("#Row7Col2").append(getLabel_InputWithSpan("Remarks", "", "remarks", "Enter Remarks", ""));
    fetchallPensionRevisionYear();

    $("#FieldGroup1").append("<div id='panelRow9' class='row' />");
    $("#panelRow9").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='penCla' value='penCla' class='btn btn-success'  onclick='calculate()'>Calculate Pension</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='pensionRevFirReset' onclick='resetPensionFirstRevision()' class='btn btn-warning bn' name='reset' value='reset'>Reset</button></center></div>");

    getTwoColumnInRow("FieldGroup1", "Row21", "Row21Col1", "Row21Col2");
    $("#Row21Col1").append(getLabel_InputWithSpan("Qualifying Service", "required", "qualifyingService", "Enter Qualifying Service", ""));
    $("#Row21Col2").append(getLabel_InputWithSpan("New Pay Last Drawn With DA", "required", "newPaylastDrawnWithda", "Enter Last Drawn Pay Without DA", "onkeypress='return numericVal(event)'"));
    $("#qualifyingService").datepicker();

    getTwoColumnInRow("FieldGroup1", "Row22", "Row22Col1", "Row22Col2");
    $("#Row22Col1").append(getLabel_InputWithSpan("Qualifying Service(Round Years)", "required", "qualifyingServiceR", "Enter Non Qualifying Service", ""));
    $("#Row22Col2").append(getLabel_InputWithSpan("Commuted Percentage", "required", "commutedPercentage", "Commuted Percentage", "onkeypress='return numericVal(event)'"));
    $("#qualifyingServiceR").datepicker();

    getTwoColumnInRow("FieldGroup1", "Row23", "Row23Col1", "Row23Col2");
    $("#Row23Col1").append(getLabel_InputWithSpan("Non Qualifying Service(Round Years)", "required", "nonqualifyingServiceR", "Enter Qualifying Service", ""));
    $("#Row23Col2").append(getLabel_InputWithSpan("Commuted Amount", "required", "commutedAmount", "Commuted Amount", "onkeypress='return numericVal(event)'"));
    $("#nonqualifyingServiceR").datepicker();


    getTwoColumnInRow("FieldGroup1", "Row24", "Row24Col1", "Row24Col2");
    $("#Row24Col1").append(getLabel_InputWithSpan("New Pay Last Drawn Without DA", "required", "newlastDrawnPayWithoutDA", "Enter Last Drawn Pay Without DA", "onkeypress='return numericVal(event)'"));
    $("#Row24Col2").append(getLabel_InputWithSpan("Monthly Commuted Amount", "required", "monthlyCommutedAmount", "Enter Monthly Commuted Amount", "onkeypress='return numericVal(event)'"));

    getTwoColumnInRow("FieldGroup1", "Row25", "Row25Col1", "Row25Col2");
    $("#Row25Col1").append(getLabel_InputWithSpan("Comm. Factor", "required", "commFactor", "Enter Comm. Factor", "onkeypress='return numericVal(event)'"));
    $("#Row25Col2").append(getLabel_InputWithSpan("Residual Pension", "required", "residualPension", "Enter Residual Pension", "onkeypress='return numericVal(event)'"));

    getTwoColumnInRow("FieldGroup1", "Row26", "Row26Col1", "Row26Col2");
    $("#Row26Col1").append(getLabel_InputWithSpan("Average Emoluments", "required", "averageEmoluments", "Enter Average Emoluments", "onkeypress='return numericVal(event)'"));
    $("#Row26Col2").append(getLabel_InputWithSpan("Gratuity", "required", "gratuity", "Enter Gratuity", "onkeypress='return numericVal(event)'"));
    getTwoColumnInRow("FieldGroup1", "Row27", "Row27Col1", "Row27Col2");

    $("#Row27Col1").append(getLabel_InputWithSpan("Pension", "required", "pension", "Enter Pension", "onkeypress='return numericVal(event)'"));
    $("#Row27Col2").append(getLabel_InputWithSpan("Death Gratuity", "required", "deathGratuity", "Enter Death Gratuity", "onkeypress='return numericVal(event)'"));
    getTwoColumnInRow("FieldGroup1", "Row28", "Row28Col1", "Row28Col2");

    $("#Row28Col1").append(getLabel_InputWithSpan("Family Pension", "required", "familyPension", "Enter Family Pension", "required", "onkeypress='return numericVal(event)'"));
    $("#Row28Col2").append(getLabel_InputWithSpan("Less Amount From Gratuity", "", "lessAmountFromGratuity", "Enter Less Amount From Gratuity", "onkeypress='return numericVal(event)'"));
    getTwoColumnInRow("FieldGroup1", "Row29", "Row29Col1", "Row29Col2");

    $("#Row29Col1").append(getLabel_InputWithSpan("Family Pension After Year", "required", "familyPensionAfterYear", "Enter Family Pension After Year", "onkeypress='return numericVal(event)'"));
    $("#Row29Col2").append(getLabel_InputWithSpan("IT", "", "it", "Enter IT", "onkeypress='return numericVal(event)'"));
    getTwoColumnInRow("FieldGroup1", "Row30", "Row30Col1", "Row30Col2");
    $("#Row30Col1").append(getLabel_InputWithSpan("Family Pension Year", "required", "familyPensionYear", "Family Pension Year", "onkeypress='return numericVal(event)'"));
    $("#Row30Col2").append(getLabel_InputWithSpan("others", "", "others", "others", "onkeypress='return numericVal(event)'"));
    $("#FieldGroup1").append("<div id='panelRow8' class='row' />");
    $("#panelRow8").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='pensionREVSave' value='Save' class='btn btn-success bn'  onclick='saveRevision()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='pensionREVReset' onclick='resetPensionPensionRevision()' class='btn btn-warning bn' name='reset' value='reset'>Reset</button></center></div>");


    $("#mainTabMenu").append("<div id='pensionPensionRevisionListPanel' class='panel panel-blue' />");
    $("#pensionPensionRevisionListPanel").append("<div id='pensionPensionRevisionListPanelHeading' class='panel-heading' />");
    $("#pensionPensionRevisionListPanelHeading").append("<h4 id='pensionPensionRevisionfirstHeader1' class='panel-title' />");
    $("#pensionPensionRevisionfirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Pension Revision</center>");
    $("#pensionPensionRevisionListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='pensionPensionRevisionPanellistpanelMainBody' class = 'panel-body' />");
    $("#pensionPensionRevisionPanellistpanelMainBody").append("<div id='pensionPensionRevision1listMessageDiv'></div>");
    $("#pensionPensionRevisionPanellistpanelMainBody").append("<div id='pensionPensionRevisionlistpanelRow' class='row' />");
    $("#pensionPensionRevisionlistpanelRow").append("<div id='pensionPensionRevisionLeftstatuslistpanelRow' class='table-responsive' />");
    viewPensionPensionRevisionList("pensionPensionRevisionLeftstatuslistpanelRow");
    setTimeout(function () {
        $("#pregsuccessBefore").text("");
    }, 2100);
}
function validateEmpCode() {
    var employeeCode = $("#employeeCode").val();
    $.post(server_base_url + "/pension/Transactions/FetchPensionRevisionBYEmployeeCode", {
        employeeCode: employeeCode
    }).done(function (pdata) {

        if (pdata == null) {

        } else {

            $("#manualCode").val(pdata[0].employeeCodeM);
            $("#employeeName").val(pdata[0].employeeName);
            $("#designation").val(pdata[0].designation);
            $("#bankName").val(pdata[0].bank);
            $("#fatherName").val(pdata[0].fatherName);
            $("#accNumber").val(pdata[0].acnumber);
            $("#dob").val(pdata[0].dob);
            $("#ddo").val(pdata[0].ddo);
            $("#appointmentDate").val(pdata[0].dateOfAppointment);
            $("#department").val(pdata[0].department);
            $("#grade").val(pdata[0].grade);
            $("#religion").val(pdata[0].religion);

            $("#ddo option:contains(" + pdata[0].ddo + ")").attr('selected', 'selected');
            $("#designation option:contains(" + pdata[0].designation + ")").attr('selected', 'selected');
            $("#department option:contains(" + pdata[0].department + ")").attr('selected', 'selected');
            $("#bankName option:contains(" + pdata[0].bank + ")").attr('selected', 'selected');
        }
    });







}
function viewPensionPensionRevisionList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='viewPensionRevision'/>");
    $("#viewPensionRevision").append("<div class='table-responsive' id='viewPensionRevisionSectionTableDiv' />");
    $("#viewPensionRevisionSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayPensionRevisionTable' />");
    $("#displayPensionRevisionTable").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Employee Code</th>"
            + "<th class='table_col_width'><i class='fa'></i>Employee Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Status</th>"
            + "<th class='table_col_width'><i class='fa'></i>Pension</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "/pension/transaction/PensionRevision/View", {
    }).done(function (bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionPensionRevision1listMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionPensionRevision1listMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionPensionRevision1listMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        }
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                $("#displayPensionRevisionTable").append("<tbody id='displayPensionRevisionTableBody' class='table-striped table-bordered' />");
                for (var i = bdata.length - 1; i >= 0; i--) {
                    sno++;
                    var pensionRevisionjson = {
                        id: bdata[i]._id.$oid,
                        employeeCode: bdata[i].employeeCode,
                        revisionstatus: bdata[i].revisionstatus,
                        employeeName: bdata[i].employeeName,
                        revisionCode: bdata[i].revisionCode,
                        retirementDate: bdata[i].retirementDate,
                        deathdate: bdata[i].deathdate,
                        lastPayDrawWithoutDA: bdata[i].lastPayDrawWithoutDA,
                        newlastPayDrawWithoutDA: bdata[i].newlastPayDrawWithoutDA,
                        lastPayDrawWithDA: bdata[i].lastPayDrawWithDA,
                        newLastPayDrawWithDA: bdata[i].newLastPayDrawWithDA,
                        dueMonth: bdata[i].dueMonth,
                        dated: bdata[i].dated,
                        dueYear: bdata[i].dueYear,
                        remarks: bdata[i].remarks,
                        qualifyingService: bdata[i].qualifyingService,
                        newPaylastDrawnWithda: bdata[i].newPaylastDrawnWithda,
                        qualifyingServiceR: bdata[i].qualifyingServiceR,
                        nonqualifyingServiceR: bdata[i].nonqualifyingServiceR,
                        commutedPercentage: bdata[i].commutedPercentage,
                        commutedAmount: bdata[i].commutedAmount,
                        commFactor: bdata[i].commFactor,
                        newPaylastDrawnWithDA: bdata[i].newPaylastDrawnWithDA,
                        monthlyCommutedAmount: bdata[i].monthlyCommutedAmount,
                        averageEmoluments: bdata[i].averageEmoluments,
                        gratuity: bdata[i].gratuity,
                        deathGratuity: bdata[i].deathGratuity,
                        LessAmountFromGratuity: bdata[i].LessAmountFromGratuity,
                        familyPension: bdata[i].familyPension,
                        familyPensionYear: bdata[i].familyPensionYear,
                        familyPensionAfterYear: bdata[i].familyPensionAfterYear,
                        pension: bdata[i].pension,
                        it: bdata[i].it,
                        otherDeduction: bdata[i].otherDeduction,
                        residualPension: bdata[i].residualPension,
                        newPaylastDrawnWithoutDA: bdata[i].newPaylastDrawnWithoutDA,
                    }

                    pensionRevisionjson = JSON.stringify(pensionRevisionjson);

                    $("#displayPensionRevisionTableBody").append("<tr id='" + bdata[i].status + "' class='table_row' >"
                            + "<td>" + sno + "</td>"
                            + "<td class='table_row'>" + bdata[i].employeeCode + "</td>"
                            + "<td class='table_row'>" + bdata[i].employeeName + "</td>"
                            + "<td class='table_row'>" + bdata[i].revisionstatus + "</td>"
                            + "<td class='table_row'>" + bdata[i].pension + "</td>"
                            + "<td> <a href='javascript:void(0);' onclick=onclick=editPensionRevision('" + encodeURI(pensionRevisionjson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                            + "<td> <a href='javascript:void(0);' onclick=deletePopUp('deletePensionRevision','viewPensionPensionRevisionList','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                }
                $('#displayPensionRevisionTable').append("</table>");
                $('#displayPensionRevisionTable').dataTable();
            }
        }

    });
}
function deletePensionRevision(id) {
    $.post(server_base_url + "/pension/transaction/PensionRevision/Delete", {
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionPensionRevision1listMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionPensionRevision1listMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionPensionRevision1listMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("pensionPensionRevision1listMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                displayPensionRevision();
            }, 1000);

        }
    });
}
function getAllStatus(name, divId) {
    var states = ["status"];
    $("#" + divId).append("<option value='' selected disabled>---- Select Status----</option>");
    for (var i = 0; i < states.length; i++) {
        $("#status").append("<option  value='" + states[i] + "' >" + states[i] + "</option>");
    }
    $("#" + divId).val(name);
}

function fetchallPensionRevisionYear() {

    $("#dueYear").empty();

    $('#dueYear').append("<option value='' class='form-control' selected disabled >----select year----</option>");
    for (i = new Date().getFullYear(); i > 1900; i--)
    {
        $('#dueYear').append($('<option />').val(i).html(i));
    }

}

function getAllMonth(name, divId) {
    var states = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $("#dueMonth").append("<option value='' selected disabled>---- Select Month----</option>");
    for (var i = 0; i < states.length; i++) {
        $("#dueMonth").append("<option  value='" + states[i] + "' >" + states[i] + "</option>");
    }
    $("#" + divId).val(name);
}

