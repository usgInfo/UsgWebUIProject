/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayBasedOnForm() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>>> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>Based On Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="basedOnMainDiv"/>');

    $("#basedOnMainDiv").text("").append("<div id='basedOncolumnDiv' >");
    $("#basedOncolumnDiv").append("<div id='basedOnFirstPanel' class='panel panel-blue' />");
    $("#basedOnFirstPanel").append("<div id='basedOnfirstPanelHeading' class='panel-heading' />");

    $("#basedOnfirstPanelHeading").append("<h4 id='basedOntableHeader1' class='panel-title' />");
    $("#basedOntableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>Based On Master</center>");
    $("#basedOnFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='basedOnpanelMainBody' class = 'panel-body' />");

    $("#basedOnpanelMainBody").append("<div id='basedOnpanelRow' class='row' />");

    $("#basedOnpanelRow").append("<div id='basedOnMessageDiv'></div>");

    $("#basedOnpanelMainBody").append("<div id='basedOnpanelBodyDiv' class='panel-body pan'>");
    $("#basedOnpanelBodyDiv").append("<div id='basedOnformDiv' class='form-horizontal'>");
    $("#basedOnformDiv").append("<div id='basedOnformBodyDiv' class='form-body pal'>");

    $("#basedOnpanelBodyDiv").append('<div class="form-group" id="basedOnGroupDiv"/>');
    $("#basedOnformBodyDiv").append('<div class="row" id="basedOnRowDiv">');
    $("#basedOnRowDiv").append('<div class="col-lg-3 control-label" id="basedOnLabelDiv"/>');
    $("#basedOnLabelDiv").append(getLabel("Based On", "required"));
    $("#basedOnRowDiv").append('<div class="col-lg-9" id="basedOnInputGroupDiv">');
    $("#basedOnInputGroupDiv").append(getInput("basedOn", "Enter Based On", "", "onkeypress='return validatealphanumeric(event)'"));
    $("#basedOnInputGroupDiv").append("<span id='basedOnErr'></span>");

    $("#basedOnformBodyDiv").append("<div id='basedOnButtonRowDiv' class='row' />");
    $("#basedOnButtonRowDiv").append("<div  class='col-xs-12' id='basedOnButtonRow'/><center><button type='button'  id='basedOnSave' value='Save' class='btn btn-success bn'  onclick='validatebasedOn()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetBasdOn()' class='btn btn-warning bn' id='basedOnReset'name='reset' value='reset'>Reset</button></center></div>");


    $("#basedOncolumnDiv").append("<div id='basedOnListPanel' class='panel panel-blue' />");

    $("#basedOnListPanel").append("<div id='basedOnListPanelHeading' class='panel-heading' />");
    $("#basedOnListPanelHeading").append("<h4 id='basedOnfirstHeader1' class='panel-title' />");
    $("#basedOnfirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Based On</center>");

    $("#basedOnListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='basedOnPanellistpanelMainBody' class = 'panel-body' />");
    $("#basedOnPanellistpanelMainBody").append("<div id='basedOnlistMessageDiv'></div>");
    $("#basedOnPanellistpanelMainBody").append("<div id='basedOnlistpanelRow' class='row' />");

    // $("#basedOnPanellistpanelMainBody").append("<div id='pregresssuccessBefore'>");

    $("#basedOnlistpanelRow").append("<div id='basedOnLeftstatuslistpanelRow' class='table-responsive' />");
    viewbasedOnList('basedOnLeftstatuslistpanelRow');

}
$("input").on("keypress", function (e) {
    if (e.which === 32 && !this.value.length)
        e.preventDefault();
});
function resetBasdOn() {
    $("#basedOn").val("");
    $("#basedOnErr").text("");
    removeSomeClass("basedOnInputGroupDiv", "has-error");
}

function viewbasedOnList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='viewbasedOn'/>");
    $("#viewbasedOn").append("<div class='table-responsive' id='viewbasedOnSectionTableDiv' />");
    $("#viewbasedOnSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBasedOnTable' />");
    $("#displayBasedOnTable").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Based On</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");


    $.get(server_base_url + "hrms/salary/BasedOn/ViewList", {
    }).done(function (bdata) {
        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("basedOnlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("basedOnlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("basedOnlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        }
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                $("#displayBasedOnTable").append("<tbody id='displayBasedOnTableBody' class='table-striped table-bordered' />");
                for (var i = bdata.length - 1; i >= 0; i--) {
                    sno++;
                    var objJson = {
                        Id: bdata[i]._id.$oid,
                        basedOn: bdata[i].basedOn
                    };
                    objJson = JSON.stringify(objJson);
                    $("#displayBasedOnTableBody").append("<tr id='" + bdata[i].status + "' class='table_body' >"
                            + "<td>" + sno + "</td>"
                            + "<td class='table_body'>" + bdata[i].basedOn + "</td>"

                            + "<td> <a href='javascript:void(0);' onclick=onclick=updatebasedOn('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                            + "<td> <a href='javascript:void(0);' onclick=onclick=deletePopUp('deletebasedOn','displayBasedOnForm','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                }
                $('#displayBasedOnTable').append("</table>");
                $('#displayBasedOnTable').dataTable();
            }
        }

    });
}
function updateBasedOnDetails(id) {
    var basedOn = $('#basedOn').val();
    if (basedOn == "") {
        $("#basedOn").focus();
        addSomeClass("basedOnInputGroupDiv", "has-error");
        displaySmallErrorMessages("basedOnErr", "This field is Mandatory.");
        return false;
    }

    var objJson = {
        basedOn: basedOn
    }
    $.post(server_base_url + "hrms/salary/BasedOn/Update", {
        objJson: JSON.stringify(objJson),
        Id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {
        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("headNameMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            $("#basedOn").prop("disabled", true);
            $("#basedOnSave").attr('disabled', true);
            $("#basedOnReset").attr('disabled', true);
            displaySuccessMessages("basedOnMessageDiv", updateSuccessMessage, "");
            setTimeout(function () {
                displayBasedOnForm();
            }, 4000);

        }
    });
}
function updatebasedOn(obj) {

    obj = decodeURI(obj);
    obj = JSON.parse(obj);

    $("#basedOn").val(obj.basedOn);


    $("#basedOn").prop("readonly", false);

    $("#basedOnButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updateBasedOnDetails('" + obj.Id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayBasedOnForm()'  class='btn btn-warning bn' >Back</button></center>");
}
function deletebasedOn(id) {

    $.post(server_base_url + "hrms/salary/BasedOn/Delete", {
        Id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {
        if (data == fail) {
            displaySmallErrorMessages("basedOnlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessages("basedOnlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessages("basedOnlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("basedOnlistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                displayBasedOnForm();
            }, 4000);


        }
    });
}
function validatebasedOn() {
    $("#headNameErr").text("");
    var basedOn = $("#basedOn").val();

    if (basedOn == "") {
        $("#basedOn").focus();
        addSomeClass("basedOnInputGroupDiv", "has-error");
        displaySmallErrorMessages("basedOnErr", "This field is Mandatory.");
        return false;
    } else {
        saveBasedOn();
    }

}



function saveBasedOn() {
    var basedOn = $('#basedOn').val();
    var objJson = {
        basedOn: basedOn
    };
    $.post(server_base_url + "hrms/salary/BasedOn/Save", {
        objJson: JSON.stringify(objJson),
        userid: getUserSessionElement("userId")
    }).done(function (data) {
        if (data == fail) {
            displaySmallErrorMessagesInRed("basedOnMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("basedOnMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("basedOnMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessagesInRed("basedOnMessageDiv", "No User available" + "<br/><br/>");
        } else if (data != null) {

            $("#basedOn").prop("disabled", true);
            $("#basedOnSave").attr('disabled', true);
            $("#basedOnReset").attr('disabled', true);
            displaySuccessMessages("basedOnMessageDiv", successMessage, "");
            setTimeout(function () {
                displayBasedOnForm();
            }, 4000);
        }
    });
}