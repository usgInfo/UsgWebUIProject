/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayHeadNameForm() {

    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>>> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>Head Name Master</label>');

    $("#dashboardBodyMainDiv").text("").append('<div id="headNameMainDiv"/>');

    $("#headNameMainDiv").text("").append("<div id='headNamecolumnDiv' >");
    $("#headNamecolumnDiv").append("<div id='headNameFirstPanel' class='panel panel-blue' />");
    $("#headNameFirstPanel").append("<div id='headNamefirstPanelHeading' class='panel-heading' />");
    $("#headNamefirstPanelHeading").append("<h4 id='headNametableHeader1' class='panel-title' />");
    $("#headNametableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>Head Name Master</center>");
    $("#headNameFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='headNamepanelMainBody' class = 'panel-body' />");
    $("#headNamepanelMainBody").append("<div id='headNamepanelRow' class='row' />");
    $("#headNamepanelRow").append("<div id='headNameMessageDiv'></div>");
    $("#headNamepanelMainBody").append("<div id='headNamepanelBodyDiv' class='panel-body pan'>");
    $("#headNamepanelBodyDiv").append("<div id='headNameformDiv' class='form-horizontal'>");
    $("#headNameformDiv").append("<div id='headNameformBodyDiv' class='form-body'>");
    $("#headNameformBodyDiv").append('<div class="form-group" id="headNameGroupDiv"/>');


    $("#headNameformBodyDiv").append('<div class="row" id="headNameRowDiv">');
    $("#headNameRowDiv").append('<div class="col-lg-3 control-label" id="headNameLabelDiv"/>');
    $("#headNameLabelDiv").append(getLabel("Head Name", "required"));
    $("#headNameRowDiv").append('<div class="col-lg-9" id="headNameInputGroupDiv">');
    $("#headNameInputGroupDiv").append(getInput("headName", "Enter Head Name", "", "onkeyup='return Religion(event)'"));
    $("#headNameInputGroupDiv").append("<span id='headNameErr'></span>");
    $("#headNameformBodyDiv").append("<div id='headNameButtonRowDiv' class='row' />");
    $("#headNameButtonRowDiv").append("<div  class='col-xs-12' id='headNameButtonRow'/><center><button type='button'  id='headNameSave' value='Save' class='btn btn-success bn'  onclick='validateheadName()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetHeadName()' class='btn btn-warning bn' id='headNameReset'name='reset' value='reset'>Reset</button></center></div>");

    $("#headNamecolumnDiv").append("<div id='headNameListPanel' class='panel panel-blue' />");
    $("#headNameListPanel").append("<div id='headNameListPanelHeading' class='panel-heading' />");
    $("#headNameListPanelHeading").append("<h4 id='headNamefirstHeader1' class='panel-title' />");
    $("#headNamefirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Head Name</center>");
    $("#headNameListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='headNamePanellistpanelMainBody' class = 'panel-body' />");
    $("#headNamePanellistpanelMainBody").append("<div id='headNamelistMessageDiv'  ></div>");
    $("#headNamePanellistpanelMainBody").append("<div id='headNamelistpanelRow' class='row' />");

    viewheadNameList('headNamelistpanelRow');
}
function resetHeadName() {
    $("#headName").val("");
    $("#headNameErr").text("");
    removeSomeClass("headNameInputGroupDiv", "has-error");
}
function viewheadNameList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='viewheadName'/>");
    $("#viewheadName").append("<div class='table-responsive' id='viewheadNameSectionTableDiv' />");
    $("#viewheadNameSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayHeadNameTable' />");
    $("#displayHeadNameTable").append("<thead ><tr class=''>"
            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Head Name</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");

    $.get(server_base_url + "hrms/salary/HeadName/ViewList", {
    }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("headNamelistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("headNamelistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("headNamelistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        }
        if (data != null) {
            if (data.length > 0) {

                var sno = 0;
                $("#displayHeadNameTable").append("<tbody id='displayHeadNameTableBody' class='table-striped table-bordered' />");
                for (var i = data.length - 1; i >= 0; i--) {
                    sno++;

                    var objJson = {
                        Id: data[i]._id.$oid,
                        headName: data[i].headName
                    };
                    objJson = JSON.stringify(objJson);

                    $("#displayHeadNameTableBody").append("<tr id='" + data[i].status + "' class='table_body'  >"
                            + "<td>" + sno + "</td>"
                            + "<td class='table_body'>" + data[i].headName + "</td>"
                            + "<td> <a href='javascript:void(0);' onclick=updateheadName('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                            + "<td> <a href='javascript:void(0);' onclick=deletePopUp('deleteheadName','displayHeadNameForm','" + data[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");

                }
                $('#displayHeadNameTable').append("</table>");
                $('#displayHeadNameTable').dataTable();
            }
        }

    });
}
function validateheadName() {

    $("#headNameErr").text("");
    var headName = $("#headName").val();

    if (headName == "") {
        $("#headName").focus();
        addSomeClass("headNameInputGroupDiv", "has-error");
        displaySmallErrorMessages("headNameErr", "Please Enter Head Name.");
        return false;
    } else if (headName != "") {
        if (!headName.match((alphabetValidation()))) {

            addSomeClass("headNameInputGroupDiv", "has-error");
            displaySmallErrorMessages("headNameErr", "Only alphabets are allowed");
            return false;
        } else {
            saveHeadName();
        }

    }

}
function updateheadName(obj) {

    obj = decodeURI(obj);
    obj = JSON.parse(obj);

    $("#headName").val(obj.headName);


    $("#headName").prop("readonly", false);

    $("#headNameButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updateheadNameData('" + obj.Id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayHeadNameForm()'  class='btn btn-warning bn' >Back</button></center>");
}

function updateheadNameData(id) {

    var headName = $('#headName').val();
    if (headName == "" || headName == undefined) {
        addSomeClass("headNameInputGroupDiv", "has-error");
        displaySmallErrorMessages("headNameErr", "Please Enter Head Name.");
        return false;
    } else {
        var objJson = {
            headName: headName
        }
        $.post(server_base_url + "hrms/salary/HeadName/Update", {
            objJson: JSON.stringify(objJson),
            Id: id,
            userid: getUserSessionElement("userId")
        }).done(function(data) {

            if (data == fail) {
                displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", emptyListMessage + "<br/><br/>");
            } else if (data == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                $("#headName").prop("disabled", true);
                $("#headNameSave").attr('disabled', true);
                $("#headNameReset").attr('disabled', true);
                displaySuccessMessages("headNameMessageDiv", updateSuccessMessage, "");
                setTimeout(function() {
                    displayHeadNameForm();
                }, 4000);

            }
        });
    }
}
function deleteheadName(id) {

    $.post(server_base_url + "hrms/salary/HeadName/Delete", {
        Id: id,
        userid: getUserSessionElement("userId")
    }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {

            displaySuccessMessages("headNamelistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function() {
                displayHeadNameForm();
            }, 4000);
        }
    });
}

function saveHeadName() {
    var headName = $('#headName').val();
    var objJson = {
        headName: headName
    };
    $.post(server_base_url + "hrms/salary/HeadName/Save", {
        objJson: JSON.stringify(objJson),
        userid: getUserSessionElement("userId")
    }).done(function(data) {
        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", "No User available" + "<br/><br/>");
        } else if (data != null) {

            $("#headName").prop("disabled", true);
            $("#headNameSave").attr('disabled', true);
            $("#headNameReset").attr('disabled', true);
            displaySuccessMessages("headNameMessageDiv", successMessage, "");
            setTimeout(function() {
                displayHeadNameForm();
            }, 4000);
        }
    });
}