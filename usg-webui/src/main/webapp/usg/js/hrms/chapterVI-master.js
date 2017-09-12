/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayChapterVIForm() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>>> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>ChapterVI Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="chapterMainDiv"/>');
    $("#chapterMainDiv").text("").append("<div id='chaptercolumnDiv'>");
    if (checkUserPrivelege(pvCreateChapterVIMaster)) {
        $("#chaptercolumnDiv").append("<div id='chapterFirstPanel' class='panel panel-blue' />");
        $("#chapterFirstPanel").append("<div id='chapterfirstPanelHeading' class='panel-heading' />");
        $("#chapterfirstPanelHeading").append("<h4 id='chaptertableHeader1' class='panel-title' />");
        $("#chaptertableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>ChapterVI Type Master</center>");
        $("#chapterFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#collapseOne2").append("<div id='chapterpanelMainBody' class = 'panel-body' />");
        $("#chapterpanelMainBody").append("<div id='chapterpanelRow' class='row' />");
        $("#chapterpanelRow").append("<div id='chapterMessageDiv' ></div>");
        $("#chapterpanelMainBody").append("<div id='chapterpanelBodyDiv' class='panel-body'>");
        $("#chapterpanelBodyDiv").append("<div id='chapterformDiv' class='form-horizontal'>");
        $("#chapterformDiv").append("<div id='chapterformBodyDiv' class='form-body'>");
        $("#chapterpanelBodyDiv").append('<div class="form-group" id="chapterGroupDiv"/>');
        $("#chapterformBodyDiv").append('<div class="row" id="chapterRowDiv">');
        $("#chapterRowDiv").append('<div class="col-lg-3 control-label" id="chapterLabelDiv"/>');
        $("#chapterLabelDiv").append(getLabel("ChapterVI Type", "required"));
        $("#chapterRowDiv").append('<div class="col-lg-9" id="chapterInputGroupDiv">');
        $("#chapterInputGroupDiv").append(getInput("chapterVIType", "Enter ChapterVI Type", "", "onkeypress='return acceptAlphanumeric(event)'"));
        $("#chapterInputGroupDiv").append("<span id='chapterErr'></span>");
        $("#chapterformBodyDiv").append("<div id='chapterButtonRowDiv' class='row' />");
        $("#chapterButtonRowDiv").append("<div  class='col-xs-12' id='chapterButtonRow'/><center><button type='button'  id='chapterSave' value='Save' class='btn btn-success bn'  onclick='validatechapter()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='chapterReset()' class='btn btn-warning bn' id='chapterReset'name='reset' value='reset'>Reset</button></center></div>");
    }
    if (checkUserPrivelege(pvViewChapterVIMaster)) {
        $("#chaptercolumnDiv").append("<div id='chapterListPanel' class='panel panel-blue' />");
        $("#chapterListPanel").append("<div id='chapterListPanelHeading' class='panel-heading' />");
        $("#chapterListPanelHeading").append("<h4 id='chapterfirstHeader1' class='panel-title' />");
        $("#chapterfirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of ChapterVI Type</center>");
        $("#chapterListPanel").append("<div id='collapseOne' class='panel-collapse collapse in' />");
        $("#collapseOne").append("<div id='chapterPanellistpanelMainBody' class = 'panel-body' />");
        $("#chapterPanellistpanelMainBody").append("<div id='chapterlistMessageDiv'></div>");
        $("#chapterPanellistpanelMainBody").append("<div id='chapterlistpanelRow' class='row' />");
    viewchapterList('chapterlistpanelRow');
    }
    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });
}


function validatechapter() {
    $("#chapterVIType").text("");
    var chapterVIType = $("#chapterVIType").val();
    if (chapterVIType == "") {
        $("#chapterVIType").focus();
        addSomeClass("chapterInputGroupDiv", "has-error");
        displaySmallErrorMessages("chapterErr", "Please Enter ChapterVI Type.");
        return false;
    } else {
        saveChapterVIType();
    }

}

function saveChapterVIType() {
    if (checkUserPrivelege(pvCreateChapterVIMaster)) {
        var chapterVIType = $('#chapterVIType').val();
        var objJson = {
            chapterVIType: chapterVIType
        };
        $.post(server_base_url + "hrms/salary/ChapterVIType/Save", {
            objJson: JSON.stringify(objJson),
            userid: getUserSessionElement("userId")
        }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("chapterMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("chapterMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("chapterMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayLargeErrorMessagesInCenterInRed("chapterMessageDiv", "No User available" + "<br/><br/>");
        } else if (data == duplicate) {
            displayErrorMessages("chapterMessageDiv", existed + "<br/><br/>");
            setTimeout(function () {
                displayChapterVIForm();
            }, 1000);

        } else if (data != null) {

                $("#chapterVIType").prop("disabled", true);
                $("#chapterSave").attr('disabled', true);
                $("#chapterReset").attr('disabled', true);
                displaySuccessMessages("chapterMessageDiv", successMessage, "");
            setTimeout(function () {
                displayChapterVIForm();
            }, 4000);
        }
    });
    }
}
function chapterReset() {
    $("#chapterVIType").val("");
    $("#chapterErr").text("");
    removeSomeClass("chapterInputGroupDiv", "has-error");
}
function viewchapterList(divId) {
    if (checkUserPrivelege(pvViewChapterVIMaster)) {
        $("#" + divId).text("").append("<div class='tab-pane' id='viewchapterVIType'/>");
        $("#viewchapterVIType").append("<div class='table-responsive' id='viewchapterVITypeSectionTableDiv' />");
        $("#viewchapterVITypeSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayChapterVITypeTable' />");
        $("#displayChapterVITypeTable").append("<thead><tr id='chapterVITableHeadId'>"
                + " <th class='sno_width'> S.No</th>"
                + "<th class='table_col_width'><i class='fa'></i>ChapterVI Type</th>");
        if (checkUserPrivelege(pvUpdateChapterVIMaster)) {
            $("#chapterVITableHeadId").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteChapterVIMaster)) {
            $("#chapterVITableHeadId").append("<th class='table_anchor_width'><i class='fa' ></i> Delete</th>");
        }



        $.get(server_base_url + "hrms/salary/ChapterVIType/ViewList", {
    }).done(function (bdata) {

            if (bdata == fail) {
                displayLargeErrorMessagesInCenterInRed("chapterlistMessageDiv", emptyListMessage + "<br/><br/>");
            } else if (bdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("chapterlistMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (bdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("chapterlistMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            } else {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#displayChapterVITypeTable").append("<tbody id='displayChapterVITypeTableBody' class='table-striped table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var objJson = {
                                Id: bdata[i]._id.$oid,
                                chapterVIType: bdata[i].chapterVIType
                            };
                            objJson = JSON.stringify(objJson);
                            $("#displayChapterVITypeTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].chapterVIType + "</td>");
                            if (checkUserPrivelege(pvUpdateChapterVIMaster)) {
                                $("#" + bdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updatechapterVIType('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");
                            }
                            if (checkUserPrivelege(pvDeleteChapterVIMaster)) {
                                $("#" + bdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=deletePopUp('deletechapterVIType','displayChapterVIForm','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                            }
                        }
                        $('#displayChapterVITypeTable').append("</table>");
                        $('#displayChapterVITypeTable').dataTable();
                    }
                }
            }
        });
    }
}
function deletechapterVIType(id) {
    if (checkUserPrivelege(pvDeleteChapterVIMaster)) {

    $.post(server_base_url + "hrms/salary/ChapterVIType/Delete", {
        Id: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("chapterlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("chapterlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("chapterlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("chapterlistMessageDiv", " " + delete_map_messages, "");
            setTimeout(function () {
                $("#tablesuccessBefore").text("");
            }, 2100);
        } else {

            displaySuccessMessages("chapterlistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                displayChapterVIForm();
            }, 4000);
        }
    });
}
}
function updatechapterVIType(obj) {
    if (checkUserPrivelege(pvUpdateChapterVIMaster)) {
        obj = decodeURI(obj);
        obj = JSON.parse(obj);
        $("#chapterVIType").val(obj.chapterVIType);
        $("#chapterVIType").prop("readonly", false);
        $("#chapterButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updatechapterVITypeData('" + obj.Id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayChapterVIForm()'  class='btn btn-warning bn' >Back</button></center>");
    }
}

function updatechapterVITypeData(id) {
    if (checkUserPrivelege(pvUpdateChapterVIMaster)) {
        var chapterVIType = $('#chapterVIType').val();
        if (chapterVIType == "" || chapterVIType == undefined) {
            addSomeClass("headNameInputGroupDiv", "has-error");
            displaySmallErrorMessages("headNameErr", "Please Enter ChapterVI Type.");
            return false;
        } else {
            var objJson = {
                chapterVIType: chapterVIType
        };
            $.post(server_base_url + "hrms/salary/ChapterVIType/Update", {
                objJson: JSON.stringify(objJson),
                Id: id,
                userid: getUserSessionElement("userId")
        }).done(function (data) {

                if (data == fail) {
                    displayLargeErrorMessagesInCenterInRed("chapterMessageDiv", emptyListMessage + "<br/><br/>");
                } else if (data.statuscode == unauthorized) {
                    displayLargeErrorMessagesInCenterInRed("chapterMessageDiv", unauthorizedMessage + "<br/><br/>");
                } else if (data == statusException) {
                    displayLargeErrorMessagesInCenterInRed("chapterMessageDiv", statusExceptionMessage + "<br/><br/>");
                } else if (data == invalidSession) {
                    callSessionTimeout();
            } 
            else if (data == duplicate) {
                displayErrorMessages("chapterMessageDiv", existed + "<br/><br/>");
                setTimeout(function () {
                    displayChapterVIForm();
                }, 1000);

            }
            else if (data == null) {
                displayLargeErrorMessagesInCenterInRed("chapterMessageDiv", "No User available" + "<br/><br/>");
            } else if (data != null) {
                    $("#chapterVIType").prop("disabled", true);
                    $("#chapterSave").attr('disabled', true);
                    $("#chapterReset").attr('disabled', true);
                    displaySuccessMessages("chapterMessageDiv", updateSuccessMessage, "");
                setTimeout(function () {
                        displayChapterVIForm();
                }, 4000);

                }
            });
        }
    }

}