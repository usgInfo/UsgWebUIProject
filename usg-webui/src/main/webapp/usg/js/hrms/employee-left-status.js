/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayEmpLeftStatus() {
    
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>>> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>Employee Left Status Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="EmpLeftStatusMainDiv"/>');

    $("#EmpLeftStatusMainDiv").text("").append("<div id='EmpLeftStatuscolumnDiv' >");
    $("#EmpLeftStatuscolumnDiv").append("<div id='empFirstPanel' class='panel panel-blue' />");
    $("#empFirstPanel").append("<div id='empfirstPanelHeading' class='panel-heading' />");

    $("#empfirstPanelHeading").append("<h4 id='emptableHeader1' class='panel-title' />");
    $("#emptableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Employee Left Status</center>");
    $("#empFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='EmpLeftStatuspanelMainBody' class = 'panel-body' />");

    $("#EmpLeftStatuspanelMainBody").append("<div id='EmpLeftStatuspanelRow' class='row' />");
    $("#EmpLeftStatuspanelMainBody").append("<div id='EmpLeftStatusMessageDiv'></div>");

    $("#EmpLeftStatuspanelMainBody").append("<div id='EmpLeftStatuspanelBodyDiv' class='panel-body pan'>");
    $("#EmpLeftStatuspanelBodyDiv").append("<div id='EmpLeftStatusformDiv' class='form-horizontal'>");
    $("#EmpLeftStatusformDiv").append("<div id='EmpLeftStatusformBodyDiv' class='form-body'>");

    $("#EmpLeftStatusformBodyDiv").append('<div class="form-group" id="EmpLeftStatusGroupDiv"/>');
    $("#EmpLeftStatusformBodyDiv").append('<div class="row" id="EmpLeftStatusRowDiv">');
    $("#EmpLeftStatusRowDiv").append('<div class="col-lg-3 control-label" id="EmpLeftStatusLabelDiv"/>');
    $("#EmpLeftStatusLabelDiv").append(getLabel("Employee Left Status", "required"));
    $("#EmpLeftStatusRowDiv").append('<div class="col-lg-9" id="EmpLeftStatusInputGroupDiv">');
    $("#EmpLeftStatusInputGroupDiv").append(getInput("empLeftStatus", "Enter Employee Left Status", "", "onkeyup='return validatealphanumeric(event)'"));
    $("#EmpLeftStatusInputGroupDiv").append("<span id='empLeftStatusErr'></span>");

    $("#EmpLeftStatusformBodyDiv").append("<div id='EmpLeftStatusButtonRowDiv' class='row' />");
    $("#EmpLeftStatusButtonRowDiv").append("<div  class='col-xs-12' id='EmpLeftStatusButtonRow'/><center><button type='button'  id='empSave' value='Save' class='btn btn-success bn'  onclick='empLeftValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='empReset()' class='btn btn-warning bn' name='reset' id='empReset'value='reset'>Reset</button></center></div>");

    $("#EmpLeftStatuscolumnDiv").append("<div id='empLeftStatusListPanel' class='panel panel-blue' />");
    $("#empLeftStatusListPanel").append("<div id='empLeftStatusListPanelHeading' class='panel-heading' />");
    $("#empLeftStatusListPanelHeading").append("<h4 id='empLeftStatusfirstHeader1' class='panel-title' />");
    $("#empLeftStatusfirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Employee Left Status</center>");
    $("#empLeftStatusListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='empLeftStatusPanellistpanelMainBody' class = 'panel-body' />");
    $("#empLeftStatusPanellistpanelMainBody").append("<div id='emplistMessageDiv'  ></div>");
    $("#empLeftStatusPanellistpanelMainBody").append("<div id='empLeftStatuslistpanelRow' class='row' />");

    $("#empLeftStatuslistpanelRow").append("<div id='empLeftstatuslistpanelRow' class='table-responsive' />");
    viewEmpLeftStatusList('empLeftstatuslistpanelRow');

}
function empReset() {
    $("#empLeftStatus").val("");
    $("#empLeftStatusErr").text("");
    removeSomeClass("EmpLeftStatusInputGroupDiv", "has-error");
}
function empLeftValidation() {

    $("#empLeftStatusErr").text("");
    var empLeftStatus = $("#empLeftStatus").val();

    if (empLeftStatus == "") {
        $("#empLeftStatus").focus();
        addSomeClass("EmpLeftStatusInputGroupDiv", "has-error");
        displaySmallErrorMessages("empLeftStatusErr", "Please Enter Employee Left Status.");
        return false;
    } else {
        saveEmpLeftStatus();
    }


}

function saveEmpLeftStatus() {
    var empLeftStatus = $('#empLeftStatus').val();
    var objJson = {
        employeeLeftStatus: empLeftStatus
    };

    $.post(server_base_url + "hrms/salary/EmployeeLeftStatus/Save", {
        objJson: JSON.stringify(objJson),
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("EmpLeftStatusMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("EmpLeftStatusMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("EmpLeftStatusMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessagesInRed("EmpLeftStatusMessageDiv", "No User available" + "<br/><br/>");
        } else if (data != null) {

            $("#empLeftStatus").prop("disabled", true);
            $("#empSave").attr('disabled', true);
            $("#empReset").attr('disabled', true);
            displaySuccessMessages("EmpLeftStatusMessageDiv", successMessage, "");
            setTimeout(function () {
                displayEmpLeftStatus();

            }, 4000);
        }
    });
}


function viewEmpLeftStatusList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='viewemployeeLeftStatus'/>");
    $("#viewemployeeLeftStatus").append("<div class='table-responsive' id='viewemployeeLeftStatusSectionTableDiv' />");
    $("#viewemployeeLeftStatusSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayEmployeeLeftStatusTable' />");
    $("#displayEmployeeLeftStatusTable").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Employee Left Status</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");


    $.get(server_base_url + "hrms/salary/EmployeeLeftStatus/ViewList", {
    }).done(function (bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("emplistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("emplistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("emplistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        }
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                $("#displayEmployeeLeftStatusTable").append("<tbody id='displayEmployeeLeftStatusTableBody' class='table-striped table-bordered' />");
                for (var i = bdata.length - 1; i >= 0; i--) {
                    sno++;
                    var objJson = {
                        Id: bdata[i]._id.$oid,
                        employeeLeftStatus: bdata[i].employeeLeftStatus
                    };
                    objJson = JSON.stringify(objJson);
                    $("#displayEmployeeLeftStatusTableBody").append("<tr id='" + bdata[i].status + "' class='table_row' >"
                            + "<td>" + sno + "</td>"
                            + "<td class='table_row'>" + bdata[i].employeeLeftStatus + "</td>"
                            + "<td> <a href='javascript:void(0);' onclick=updateemployeeLeftStatus('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                            + "<td> <a href='javascript:void(0);' onclick=deletePopUp('deleteemployeeLeftStatus','displayEmpLeftStatus','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");

                }
                $('#displayEmployeeLeftStatusTable').append("</table>");
                $('#displayEmployeeLeftStatusTable').dataTable();
            }
        }

    });
}
function updateemployeeLeftStatus(obj) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);

    $("#empLeftStatus").val(obj.employeeLeftStatus);


    $("#empLeftStatus").prop("readonly", false);

    $("#EmpLeftStatusButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updateEmployeeLeftStatusDetails('" + obj.Id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayEmpLeftStatus()'  class='btn btn-warning bn' >Back</button></center>");
}
function updateEmployeeLeftStatusDetails(id) {

    var employeeLeftStatus = $('#empLeftStatus').val();
    var objJson = {
        employeeLeftStatus: employeeLeftStatus
    }
    $.post(server_base_url + "hrms/salary/EmployeeLeftStatus/Update", {
        objJson: JSON.stringify(objJson),
        Id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {
        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("EmpLeftStatusMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("EmpLeftStatusMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("EmpLeftStatusMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            $("#empLeftStatus").prop("disabled", true);
            $("#empSave").attr('disabled', true);
            $("#empReset").attr('disabled', true);
            displaySuccessMessages("EmpLeftStatusMessageDiv", updateSuccessMessage, "");
            setTimeout(function () {
                displayEmpLeftStatus();
            }, 4000);

        }
    });
}
function deleteemployeeLeftStatus(id) {

    $.post(server_base_url + "hrms/salary/EmployeeLeftStatus/Delete", {
        Id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {
        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("emplistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("emplistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("emplistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
//                
            displaySuccessMessages("emplistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                displayEmpLeftStatus();
            }, 4000);
        }
    });
}