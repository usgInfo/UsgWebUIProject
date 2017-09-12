/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function leaveWorkFlowMasters(divId)
{
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">LeaveManagement</a></label>>><label><a href="javascript:leaveManagementMasterTabs()">Leave Work Flow</label>');
    createForm(divId, innerDivCF, "leave Work Flow", FieldGroupForCF, successMsgDivCF);
    getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
    $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("selectDdo"));
    $("#Row0Col2").append(getLabel("class", "required") + "" + getDropDown("selectClass"));


    getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Work Flow Name", "required", "workFlowName", "", ""));
    $("#Row1Col2").append(getLabel_InputWithSpan("Description", "", "description", "", ""));


    //Work Flow Approver Details Table
    $("#innerDivCF").append("<div id='leaveWorkFlowListPanel' class='panel panel-blue' />");
    $("#leaveWorkFlowListPanel").append("<div id='leaveWorkFlowHeading' class='panel-heading' />");
    $("#leaveWorkFlowHeading").append("<h4 id='leaveWorkFlowHeader1' class='panel-title' />");
    $("#leaveWorkFlowHeader1").append("<center>Work Flow Approver Details</center>");
    $("#leaveWorkFlowListPanel").append("<div id='leaveWorkFlowcollapseTwo' class='panel-collapse collapse in' />");
    $("#leaveWorkFlowcollapseTwo").append("<div id='leaveWorkFlowPanelMainDiv' class = 'panel-body' />");
    $("#leaveWorkFlowPanelMainDiv").append("<div id='leaveWorkFlowpanelRow5' class='row' />");

    $("#innerDivCF").append("<div id='leaveWorkFlowpanelRow5' class='row' />");
    $("#leaveWorkFlowpanelRow5").append("<div id='leaveWorkFlowpanelRow5FirstHalf' class='col-sm-5' />");
    $("#leaveWorkFlowpanelRow5").append("<div id='leaveWorkFlowpanelRow5SecondHalf' class='col-sm-1' />");
    $("#leaveWorkFlowpanelRow5").append("<div id='leaveWorkFlowpanelRow5ThirdHalf' class='col-sm-5' />");
    $("#leaveWorkFlowpanelRow5").append("<div id='leaveWorkFlowpanelRow5FourthHalf' class='col-sm-1' />");
    $("#leaveWorkFlowpanelRow5FirstHalf").append("<div id='leaveWorkFlowFieldGroup4' class='form-group' />");
    $("#leaveWorkFlowpanelRow5FirstHalf").append("<label class='col-sm-3 control-label'></label>");
    $("#leaveWorkFlowpanelRow5FirstHalf").append("<div id='leaveWorkFlowFieldGroup4' class='col-sm-9'/>");
    $("#leaveWorkFlowFieldGroup4").append("<textarea type='text' id='workflow1' name='workflow1' rows='15' cols='2' class='form-control'/>");

    //multiselect button
    $("#leaveWorkFlowpanelRow5SecondHalf").append("<div id='leaveWorkFlowDiv' class='col-xs-2' />");
    $("#leaveWorkFlowDiv").append("<button type='button' id='multiselect_rightAll' style='margin-top:110px;' class='btn btn-block'><i class='glyphicon glyphicon-forward'></i>");

    $("#leaveWorkFlowpanelRow5ThirdHalf").append("<label class='col-sm-3 control-label'></label>");
    $("#leaveWorkFlowpanelRow5ThirdHalf").append("<div id='leaveWorkFlowFieldGroup5' class='col-sm-9'/>");
    $("#leaveWorkFlowFieldGroup5").append("<textarea type='text' id='workflow2' name='workflow2' rows='15' cols='2' class='form-control'/>");

    //Up and Down arrows
    $("#leaveWorkFlowpanelRow5FourthHalf").append("<div id='leaveWorkFlowDiv1' class='col-xs-2' />");
    $("#leaveWorkFlowDiv1").append("<button type='button' id='upArrow' class='btn btn-block btn-blue'><i class='glyphicon glyphicon-circle-arrow-up' ></i>");

    //$("#leaveWorkFlowpanelRow5FourthHalf").append("<div id='leaveWorkFlowDiv2' class='col-xs-2' />");
    $("#leaveWorkFlowDiv1").append("<button type='button' id='downArrow' class='btn btn-block btn-blue'><i class='glyphicon glyphicon-circle-arrow-down'></i>");
    $("#leaveWorkFlowDiv1").append("<button type='button' id='cancel' class='btn btn-block btn-blue'><span class='glyphicon glyphicon-remove-sign'></span>");
    // getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "workFlowValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
    $("#leaveWorkFlowListPanel").append("<div id='panelRow8' class='row' style='padding-bottom: 5px;' />");
    $("#panelRow8").append("<center><button type='button' id='buttonSave'  onclick='validateLeaveWorkFlowMasterDetails()' class='btn btn-success' >Save</button>&nbsp;&nbsp;&nbsp;<button type='button' onclick='resetLeaveWorkFlow()' class='btn btn-warning' id='resetButton' name='reset' value='reset'>Reset</button></center>");
    viewOption("financial/common/DDOListForOptions", "", "ddoName", "selectDdo", "DDO");
    viewOption("hrms/salary/Class/ViewList", "", "name", "selectClass", "Class");

    $("#innerDivCF").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Leave Work Flow</center>");

    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    fetchAllLeaveWorkFlowDetails('listpanelRow');

}

function validateLeaveWorkFlowMasterDetails()
{
    var selectDdo = $("#selectDdo").val();
    var selectClass = $("#selectClass").val();
    var workFlowName = $("#workFlowName").val();
    var description = $("#description").val();
    var count = 0;
    alert("---" + selectDdo + "---" + selectClass + "---" + workFlowName + "---");
    if (selectDdo == "" || selectDdo == undefined || selectDdo == null || selectClass == "undefined" || selectClass == "" || selectClass == undefined || workFlowName == null || workFlowName == "undefined" || workFlowName == "") {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else
    {
        alert();
        if (selectDdo == "" || selectDdo == undefined || selectDdo == null || selectDdo == "undefined") {
            count++;
            $("#selectDdo").focus();
            addSomeClass("Row0Col1", "has-error");
            displaySmallErrorMessages("selectDdoErr", "Please select DDO.");
            count++;
        } else if (selectDdo != null) {
            $("#selectDdoErr").text("");
            removeSomeClass("Row0Col1", "has-error");
        }

        if (selectClass == null || selectClass == undefined || selectClass == null || selectClass == "undefined") {
            count++;
            $("#selectClass").focus();
            addSomeClass("Row0Col2", "has-error");
            displaySmallErrorMessages("selectClassErr", "Please select Class.");
            count++;
        } else if (selectClass != null) {
            $("#selectClassErr").text("");
            removeSomeClass("Row0Col2", "has-error");
        }

        if (workFlowName == null || workFlowName == undefined || workFlowName == null || workFlowName == "undefined") {
            count++;
            $("#workFlowName").focus();
            addSomeClass("Row1Col1", "has-error");
            displaySmallErrorMessages("workFlowNameErr", "Please type Work flow name.");
            count++;
        } else if (selectClass != null) {
            $("#workFlowNameErr").text("");
            removeSomeClass("Row1Col1", "has-error");
        }
        alert(count);
        if (count == 0) {
            alert("count");
            saveListOfLeaveWorkFlowMaster();
        }

    }

}
function saveListOfLeaveWorkFlowMaster()
{
    alert();
    var selectDdo = $("#selectDdo").val();
    var selectClass = $("#selectClass").val();
    var workFlowName = $("#workFlowName").val();
    var description = $("#description").val();

    var leaveWorkFlowMaster = {
        ddo: selectDdo,
        class1: selectClass,
        workFlowName: workFlowName,
        description: description

    };

    leaveWorkFlowMasterJsonObj = JSON.stringify(leaveWorkFlowMaster);
    //alert(leaveWorkFlowMaster);
    $.post(server_base_url + "leavemanagement/leaveworkflowmaster/save", {
        obj: leaveWorkFlowMasterJsonObj
    }).done(function (data) {
        if (data == fail) {
            displayLargeErrorMessages(successMsgDivCF, "" + failMessage + "<br /><br />");
        } else if (data == unauthorized) {
            displayLargeErrorMessages(successMsgDivCF, "" + unauthorizedMessage + "<br /><br />");

        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages(successMsgDivCF, "" + statusExceptionMessage + "<br /><br />");

        } else {
            $("#selectDdo").prop("disabled", true);
            $("#selectClass").prop("disabled", true);
            $("#workFlowName").prop("disabled", true);
            $("#description").attr('disabled', true);
            $("#buttonSave").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages(successMsgDivCF, successMessage, "");
            setTimeout(function () {
                //alert();
                leaveWorkFlowMasters('dashboardBodyMainDiv');
            }, 500);

        }
    });
}
function fetchAllLeaveWorkFlowDetails(divId)
{
    $("#" + divId).text("").append("<div class='tab-pane' id='viewUser'/>");
    $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
//    $("#" + divId).text("").append("<div id='displayBankSubDiv' class = 'panel panel-primary'></div>");
//    $("#" + divId).text("").append("<div id='displayBankSubDiv' class = 'panel-heading '></div>");
//    $("#displayBankSubDiv").append("<table id='displayBankTable' class=' table table-striped table-bordered '>");
    $("#displayBankTable").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Class</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Work Flow Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Description</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "leavemanagement/leaveworkflowmaster/view", {
    }).done(function (bdata) {

        bdata = JSON.parse(bdata);

        if (bdata == fail) {
//            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
//            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");
//                    for (var i = bdata.length-1; i >=0 ; i--) {
                    for (var i = bdata.length - 1; i >= 0; i--) {

                        sno++;
                        var obj = {
                            ddo: bdata[i].ddo,
                            class1: bdata[i].class1,
                            workFlowName: bdata[i].workFlowName,
                            description: bdata[i].description
                        }


                        obj = JSON.stringify(obj);
//                        obj=JSON.parse(obj);
//                        alert(obj) updateLeaveWorkFlowMaster
                        $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].class1 + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].workFlowName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].description + "</td>"

                                + "<td style='cursor:pointer;' onclick=updateLeaveWorkFlow('" + encodeURI(obj) + "','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a type="button"  class="anchor_edit"    >Edit</a>' + "</td>"
                                + "<td style='cursor:pointer;' onclick=deleteLeaveWorkFlowMaster('" + bdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a type="a" class="anchor_delete">Delete</a>' + "</td></tr>");

                    }
                    $('#displayBankTable').append("</table>")
                    $('#displayBankTable').dataTable();
                }
            }
        }
    });
}

function updateLeaveWorkFlow(obj, id)
{

    if (obj == null || obj == "" || obj == undefined) {
        return false;
    }

    obj = JSON.parse(decodeURI(obj));
    //alert(obj.disciplineName);
    alert();
    //$("#selectDdo").val(obj.ddo);
    $("#selectDdo").val(obj.ddo);
//    $("#selectDdo option:contains('" + obj.ddo + "')").attr("selected", "selected");
    $("#selectClass").val(obj.class1);
    $("#workFlowName").val(obj.workFlowName);
    $("#description").val(obj.description);
    $("#" + successMsgDivCF).text("");
    $("#selectDdo").prop("readonly", false);
    $("#selectClass").prop("readonly", false);
    $("#workFlowName").prop("readonly", false);
    $("#description").prop("readonly", false);

    $("#panelRow8").text("").append("<center><button id='updateButton' onclick=updateLeaveWorkFlowData('" + id + "') class='btn btn-success'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button  id='ddoUpdateReset' class='btn btn-warning'  onclick='resetLeaveWorkFlow()'>Reset</button></center>");
}
function updateLeaveWorkFlowData(id)
{
    var id = id;

     var selectDdo = $("#selectDdo").val();
    var selectClass = $("#selectClass").val();
    var workFlowName = $("#workFlowName").val();
    var description = $("#description").val();
    var count = 0;
    alert("---" + selectDdo + "---" + selectClass + "---" + workFlowName + "---");

    if (selectDdo == "" || selectDdo == undefined || selectDdo == null || selectClass == "undefined" || selectClass == "" || selectClass == undefined || workFlowName == null || workFlowName == "undefined" || workFlowName == "") {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    }
    var obj = {
        ddo: selectDdo,
        class1: selectClass,
        workFlowName: workFlowName,
        description: description

    };
    obj = JSON.stringify(obj);
    $.post(server_base_url + "/leavemanagement/leaveworkflowmaster/update", {
        obj: obj,
        objId: id
    }).done(function (data) {
        if (data == fail) {
            displayLargeErrorMessages(successMsgDivCF, "" + failMessage + "<br /><br />");

        } else if (data == unauthorized) {
            displayLargeErrorMessages(successMsgDivCF, "" + unauthorizedMessage + "<br /><br />");

        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages(successMsgDivCF, "" + statusExceptionMessage + "<br /><br />");

        } else {
            $("#selectDdo").prop("disabled", true);
            $("#selectClass").prop("disabled", true);
            $("#workFlowName").prop("disabled", true);
            $("#description").attr('disabled', true);
            $("#buttonSave").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages(successMsgDivCF, successMessage, "");
            setTimeout(function () {
                //alert();
                leaveWorkFlowMasters('dashboardBodyMainDiv');
            }, 500);

        }
    });

}
function deleteLeaveWorkFlowMaster(id)
{

    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deleteLeaveWorkFlowDdo(id);
    }

}
function deleteLeaveWorkFlowDdo(id)
{
    $.post(server_base_url + "leavemanagement/leaveworkflowmaster/delete", {
        id: id
    }).done(function (data) {
        if (data == fail) {
            displayLargeErrorMessages(successMsgDivCF, "" + failMessage + "<br /><br />");

        } else if (data == unauthorized) {
            displayLargeErrorMessages(successMsgDivCF, "" + unauthorizedMessage + "<br /><br />");

        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages(successMsgDivCF, "" + statusExceptionMessage + "<br /><br />");

        } else {
            displayLargeSuccessMessages(successMsgDivCF, "" + successMessage + "<br /><br />");
            fetchAllLeaveWorkFlowDetails('listpanelRow');

        }
    });
}
function resetLeaveWorkFlow()
{
    $("#selectDdo").val("");
    $("#selectClass").val("");
    $("#workFlowName").val("");
    $("#description").val("");

}
