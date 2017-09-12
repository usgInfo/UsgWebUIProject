/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function displayFixedHeadForm() {


    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>>> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>Fixed Head Master</label>');

    $("#dashboardBodyMainDiv").text("").append('<div id="fixedHeadMainDiv"/>');

    $("#fixedHeadMainDiv").text("").append("<div id='fixedHeadcolumnDiv' >");
    if (checkUserPrivelege(pvCreateFixedHead)) {
        $("#fixedHeadcolumnDiv").append("<div id='fixedHeadFirstPanel' class='panel panel-blue' />");
        $("#fixedHeadFirstPanel").append("<div id='fixedHeadfirstPanelHeading' class='panel-heading' />");
        $("#fixedHeadfirstPanelHeading").append("<h4 id='fixedHeadtableHeader1' class='panel-title' />");
        $("#fixedHeadtableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>Fixed Head Master</center>");
        $("#fixedHeadFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#collapseOne2").append("<div id='fixedHeadpanelMainBody' class = 'panel-body' />");
        $("#fixedHeadpanelMainBody").append("<div id='fixedHeadpanelRow' class='row' />");
        $("#fixedHeadpanelRow").append("<div id='fixedHeadMessageDiv'></div>");
        $("#fixedHeadpanelMainBody").append("<div id='fixedHeadpanelBodyDiv' class='panel-body pan'>");
        $("#fixedHeadpanelBodyDiv").append("<div id='fixedHeadformDiv' class='form-horizontal'>");
        $("#fixedHeadformDiv").append("<div id='fixedHeadformBodyDiv' class='form-body pal'>");
        $("#fixedHeadpanelBodyDiv").append('<div class="form-group" id="fixedHeadGroupDiv"/>');
        $("#fixedHeadformBodyDiv").append('<div class="row" id="fixedHeadRowDiv">');
        $("#fixedHeadRowDiv").append('<div class="col-lg-3 control-label" id="fixedHeadLabelDiv"/>');
        $("#fixedHeadLabelDiv").append(getLabel("Fixed Head", "required"));
        $("#fixedHeadRowDiv").append('<div class="col-lg-9" id="fixedHeadInputGroupDiv">');
       $("#fixedHeadInputGroupDiv").append(getInput("fixedHead", "Enter Fixed Head", "", "onkeypress='return acceptAlphanumeric(event)'"));
        $("#fixedHeadInputGroupDiv").append("<span id='fixedHeadErr'></span>");
        $("#fixedHeadformBodyDiv").append("<div id='fixedHeadButtonRowDiv' class='row' />");
        $("#fixedHeadButtonRowDiv").append("<div  class='col-xs-12' id='fixedHeadButtonRow'/><center><button type='button'  id='fixedHeadSave' value='Save' class='btn btn-success bn'  onclick='validatefixedHead()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetFixedHead()' class='btn btn-warning bn' id='fixedHeadReset'name='reset' value='reset'>Reset</button></center></div>");
    }
    if (checkUserPrivelege(pvViewFixedHead)) {
        $("#fixedHeadcolumnDiv").append("<div id='fixedHeadListPanel' class='panel panel-blue' />");
        $("#fixedHeadListPanel").append("<div id='fixedHeadListPanelHeading' class='panel-heading' />");
        $("#fixedHeadListPanelHeading").append("<h4 id='fixedHeadfirstHeader1' class='panel-title' />");
        $("#fixedHeadfirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Fixed Head</center>");
        $("#fixedHeadListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#collapseOne3").append("<div id='fixedHeadPanellistpanelMainBody' class = 'panel-body' />");
        $("#fixedHeadPanellistpanelMainBody").append("<div id='fixedHeadlistMessageDiv'  ></div>");
        $("#fixedHeadPanellistpanelMainBody").append("<div id='fixedHeadlistpanelRow' class='row' />");
        viewFixedHeadList('fixedHeadlistpanelRow');
    }
    $("input").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });
}
function viewFixedHeadList(divId)
{
    if (checkUserPrivelege(pvViewFixedHead)) {
        $("#" + divId).text("").append("<div class='tab-pane' id='viewfixedHead'/>");
        $("#viewfixedHead").append("<div class='table-responsive' id='viewfixedHeadSectionTableDiv' />");
        $("#viewfixedHeadSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayFixedHeadTable' />");
        $("#displayFixedHeadTable").append("<thead><tr id='fixedHeadTableId'>"
                + " <th class='sno_width'> S.No</th>"
                + "<th class='table_col_width'><i class='fa'></i>Fixed Head</th>");
        if (checkUserPrivelege(pvUpdateFixedHead)) {
            $("#fixedHeadTableId").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteFixedHead)) {
            $("#fixedHeadTableId").append("<th class='table_anchor_width'><i class='fa' ></i> Delete</th>");
        }

    $.get(server_base_url + "hrms/salary/FixedHead/ViewList", {
    }).done(function(bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("fixedHeadlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("fixedHeadlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("fixedHeadlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        }
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayFixedHeadTable").append("<tbody id='displayFixedHeadTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var objJson = {
                            Id: bdata[i]._id.$oid,
                            fixedHead: bdata[i].fixedHead
                        };
                        objJson = JSON.stringify(objJson);
                        $("#displayFixedHeadTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].fixedHead + "</td>");
                        if (checkUserPrivelege(pvUpdateFixedHead)) {
                            $("#" + bdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updatefixedHead('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");
                        }
                        if (checkUserPrivelege(pvDeleteFixedHead)) {
                            $("#" + bdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=deletePopUp('deletefixedHead','displayFixedHeadForm','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                        }

                }
                $('#displayFixedHeadTable').append("</table>");
                $('#displayFixedHeadTable').dataTable();
            }
            }

        });
    }
}
function updatefixedHead(obj) {
    
    if (checkUserPrivelege(pvUpdateFixedHead)) {
        obj = decodeURI(obj);
        obj = JSON.parse(obj);

        $("#fixedHead").val(obj.fixedHead);


        $("#fixedHead").prop("readonly", false);

        $("#fixedHeadButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updatefixedHeadData('" + obj.Id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayFixedHeadForm()'  class='btn btn-warning bn' >Back</button></center>");
    }
}
function updatefixedHeadData(id) {
    if (checkUserPrivelege(pvUpdateFixedHead)) {
        var fixedHead = $('#fixedHead').val();
        if (fixedHead == "" || fixedHead == undefined) {
            addSomeClass("fixedHeadInputGroupDiv", "has-error");
            displaySmallErrorMessages("fixedHeadErr", "This Field is Mandatory");
            return false;
        } else {
            var objJson = {
                fixedHead: fixedHead
        };
        $.post(server_base_url + "hrms/salary/FixedHead/Update", {
            objJson: JSON.stringify(objJson),
            Id: id,
            userid: getUserSessionElement("userId")
        }).done(function(data) {

                if (data == fail) {
                    displayLargeErrorMessagesInCenterInRed("fixedHeadMessageDiv", emptyListMessage + "<br/><br/>");
            } else if (data.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("fixedHeadMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displayLargeErrorMessagesInCenterInRed("fixedHeadMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            }
            else if (data == duplicate) {
                displayErrorMessages("fixedHeadMessageDiv", existed + "<br/><br/>");
                setTimeout(function() {
                    displayFixedHeadForm();
                }, 1000);

            }
            else if (data != null) {
                $("#fixedHead").prop("disabled", true);
                $("#fixedHeadSave").attr('disabled', true);
                $("#fixedHeadReset").attr('disabled', true);
                displaySuccessMessages("fixedHeadMessageDiv", updateSuccessMessage, "");
                setTimeout(function() {
                    displayFixedHeadForm();
                }, 4000);

                }
            });
        }
    }
}
function deletefixedHead(id) {
    if (checkUserPrivelege(pvDeleteFixedHead)) {
       $.post(server_base_url + "hrms/salary/FixedHead/Delete", {
        Id: id,
        userId: getUserSessionElement("userId")
    }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("fixedHeadlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("fixedHeadlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("fixedHeadlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == delete_map) {

            displayErrorMessages("fixedHeadlistMessageDiv", "" + delete_map_messages, "");
            setTimeout(function() {
                $("#fixedHeadlistMessageDiv").text("");
            }, 2100);
        } else {
            displaySuccessMessages("fixedHeadlistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function() {
                displayFixedHeadForm();
            }, 4000);
        }
    });
    }
}



function resetFixedHead() {
    $("#fixedHead").val("");
    $("#fixedHeadErr").text("");
    removeSomeClass("fixedHeadInputGroupDiv", "has-error");
}
function validatefixedHead() {
    $("#fixedHeadErr").text("");
    var fixedHead = $("#fixedHead").val();

    if (fixedHead == "") {
        $("#fixedHead").focus();
        addSomeClass("fixedHeadInputGroupDiv", "has-error");
        displaySmallErrorMessages("fixedHeadErr", "This Field is Mandatory");
        return false;
    } else if (fixedHead != "") {
        if (!fixedHead.match((alphabetValidation()))) {

            addSomeClass("fixedHeadInputGroupDiv", "has-error");
            displaySmallErrorMessages("fixedHeadErr", "Only alphabets are allowed");
            return false;
        } else {
            saveFixedHead();
        }

    }

}

function saveFixedHead() {
    if (checkUserPrivelege(pvCreateFixedHead)) {
        var fixedHead = $('#fixedHead').val();
        var objJson = {
            fixedHead: fixedHead
        };
        $.post(server_base_url + "hrms/salary/FixedHead/Save", {
            objJson: JSON.stringify(objJson),
            userid: getUserSessionElement("userId")
        }).done(function(data) {
            if (data == fail) {
                displayLargeErrorMessagesInCenterInRed("fixedHeadMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data.statuscode == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("fixedHeadMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("fixedHeadMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayLargeErrorMessagesInCenterInRed("fixedHeadMessageDiv", "No User available" + "<br/><br/>");
        } else if (data == duplicate) {
            displayErrorMessages("fixedHeadMessageDiv", existed + "<br/><br/>");
            setTimeout(function() {
                displayFixedHeadForm();
            }, 1000);

        } else if (data != null) {

                $("#fixedHead").prop("disabled", true);
                $("#fixedHeadSave").attr('disabled', true);
                $("#fixedHeadReset").attr('disabled', true);
                displaySuccessMessages("fixedHeadMessageDiv", successMessage, "");
                setTimeout(function() {
                    displayFixedHeadForm();
            }, 4000);
        }
    });
    }
}