/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this tPFTypelate file, choose Tools | TPFTypelates
 * and open the tPFTypelate in the editor.
 */

function displayPFType() {

    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>>> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>PF Type Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="PFTypeMainDiv"/>');
    $("#PFTypeMainDiv").text("").append("<div id='PFTypecolumnDiv' class='row'>");
    if (checkUserPrivelege(pvCreatePFType)) {
        $("#PFTypecolumnDiv").append("<div id='PFTypeFirstPanel' class='panel panel-blue' />");
        $("#PFTypeFirstPanel").append("<div id='PFTypefirstPanelHeading' class='panel-heading' />");
        $("#PFTypefirstPanelHeading").append("<h4 id='PFTypetableHeader1' class='panel-title' />");
        $("#PFTypetableHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center>PF Type</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colPFType'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#PFTypeFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#colPFType").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colPFType span").hasClass("glyphicon-minus-sign")) {
                $("#colPFType").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colPFType").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='PFTypepanelMainBody' class = 'panel-body' />");
        $("#PFTypepanelMainBody").append("<div id='PFTypepanelRow' class='row' />");
        $("#PFTypepanelRow").append("<div id='PFTypeMessageDiv' ></div></div>");
        $("#PFTypepanelMainBody").append("<div id='PFTypepanelBodyDiv' class='panel-body '>");
        $("#PFTypepanelBodyDiv").append("<div id='PFTypeformDiv' class='form-horizontal'>");
        $("#PFTypeformDiv").append("<div id='PFTypeformBodyDiv' class='form-body'>");
        $("#PFTypepanelBodyDiv").append('<div class="form-group" id="PFTypeGroupDiv"/>');
        $("#PFTypeformBodyDiv").append('<div class="row" id="PFTypeRowDiv">');
        $("#PFTypeRowDiv").append('<div class="col-lg-3 control-label" id="PFTypeLabelDiv"/>');
        $("#PFTypeLabelDiv").append(getLabel("PF Type", "required"));
        $("#PFTypeRowDiv").append('<div class="col-lg-9" id="PFTypeInputGroupDiv">');
        $("#PFTypeInputGroupDiv").append(getInput("PFType", "Enter PF Type", "", "onkeypress='return acceptAlphanumeric(event)'"));
        $("#PFTypeInputGroupDiv").append("<span id='PFTypeErr'></span>");
        $("#PFTypeformBodyDiv").append("<div id='PFTypeButtonRowDiv' class='row' />");
        $("#PFTypeButtonRowDiv").append("<div  class='col-xs-12' id='PFTypeButtonRow'/><center><button type='button'  id='pfSave' value='save' class='btn btn-success bn'  onclick='validatePFType()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetPFType()' class='btn btn-warning bn' id='pfReset'name='reset' value='reset'>Reset</button></center></div>");
    }
    if (checkUserPrivelege(pvViewPFType)) {
        $("#PFTypecolumnDiv").append("<div id='PFTypeListPanel' class='panel panel-blue' />");
        $("#PFTypeListPanel").append("<div id='PFTypeListPanelHeading' class='panel-heading' />");
        $("#PFTypeListPanelHeading").append("<h4 id='PFTypefirstHeader1' class='panel-title' />");
        $("#PFTypefirstHeader1").append("<class='panel-title' class='panel_font' data-parent='#accordion2'><center>List of PF Type</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colPFTypeList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#PFTypeListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colPFTypeList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colPFTypeList span").hasClass("glyphicon-minus-sign")) {
                $("#colPFTypeList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colPFTypeList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='PFTypePanellistpanelMainBody' class = 'panel-body' />");
        $("#PFTypePanellistpanelMainBody").append("<div id='PFTypelistMessageDiv'></div>");

        $("#PFTypePanellistpanelMainBody").append("<div id='PFTypelistpanelRow' class='row' />");
        $("#PFTypelistpanelRow").append("<div id='PFTypeLeftstatuslistpanelRow' class='table-responsive' />");
        viewPFTypeList('PFTypeLeftstatuslistpanelRow');
        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    }
}





function resetPFType() {
    $("#PFType").val("");
    $("#PFTypeErr").text("");
    removeSomeClass("PFTypeInputGroupDiv", "has-error");
}
function viewPFTypeList() {
    if (checkUserPrivelege(pvViewPFType)) {
        $("#PFTypeLeftstatuslistpanelRow").text("").append("<div class='tab-pane' id='viewPFType'/>");
        $("#viewPFType").append("<div class='table-responsive' id='viewPFTypeSectionTableDiv' />");
        $("#viewPFTypeSectionTableDiv").append("<table class='table table-bordered table-warning mb30' id='displayPFTypeTable' />");
        $("#displayPFTypeTable").append("<thead class=''><tr id='pfTypeHeadId'>"
                + " <th class='sno_width'> S.No</th>"
                + "<th class='table_col_width'><i class='fa'></i>PF Type</th>");
        if (checkUserPrivelege(pvUpdatePFType)) {
            $("#pfTypeHeadId").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeletePfType)) {
            $("#pfTypeHeadId").append("<th class='table_anchor_width'><i class='fa' ></i> Delete</th>");
        }
        $.get(server_base_url + "hrms/salary/PFType/ViewList", {
        }).done(function (bdata) {

            if (bdata == fail) {
                displayLargeErrorMessagesInCenterInRed("PFTypelistMessageDiv", emptyListMessage + "");
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("PFTypelistMessageDiv", unauthorizedMessage + "");
            } else if (bdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("PFTypelistMessageDiv", statusExceptionMessage + "");
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            }
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayPFTypeTable").append("<tbody id='displayPFTypeTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var objJson = {
                            Id: bdata[i]._id.$oid,
                            PFType: bdata[i].PFType
                        };
                        objJson = JSON.stringify(objJson);
                        $("#displayPFTypeTableBody").append("<tr id='" + bdata[i]._id.$oid + "' class='table_row' >"
                                + "<td>" + sno + "</td>"
                                + "<td class='table_row'>" + bdata[i].PFType + "</td>");
                        if (checkUserPrivelege(pvUpdatePFType)) {
                            $("#" + bdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updatePFType('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");
                        }
                        if (checkUserPrivelege(pvDeletePfType)) {
                            $("#" + bdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=deletePopUp('deletePFTypeData','displayPFType','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                        }
                    }
                    $('#displayPFTypeTable').append("</table>");
                    $('#displayPFTypeTable').dataTable();
                }
            }

        });
    }
}
function updatePFType(obj) {
    if (checkUserPrivelege(pvUpdatePFType)) {
        obj = decodeURI(obj);
        obj = JSON.parse(obj);
        $("#PFType").val(obj.PFType);
        $("#PFType").prop("readonly", false);
        $("#displayPFTypeTableBody tr").css("background-color", "white");
        $("#displayPFTypeTableBody tr" + "#" + obj.Id).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#PFTypeButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updatePFTypeData('" + obj.Id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayPFType()'  class='btn btn-warning bn' >Back</button></center>");
    }
}

function updatePFTypeData(Id) {
    if (checkUserPrivelege(pvUpdatePFType)) {
        var PFType = $('#PFType').val();

        if (PFType == " " || PFType == undefined) {
            addSomeClass("PFTypeInputGroupDiv", "has-error");
            displaySmallErrorMessages("PFTypeMessageDiv", "Please Fill All Mandatory Fileds");
            return false;
        } else {

            var objJson = {
                PFType: PFType
            }
            $.post(server_base_url + "hrms/salary/PFType/Update", {
                objJson: JSON.stringify(objJson),
                Id: Id,
                userid: getUserSessionElement("userId")
            }).done(function (data) {


                if (data == fail) {
                    displayErrorMessages("PFTypeMessageDiv", emptyListMessage + "");
                } else if (data == unauthorized) {
                    displayErrorMessages("PFTypeMessageDiv", unauthorizedMessage + "");
                } else if (data == statusException) {
                    displayErrorMessages("PFTypeMessageDiv", statusExceptionMessage + "");
                } else if (data == invalidSession) {
                    callSessionTimeout();
                } else if (data == null) {
                    displayErrorMessages("PFTypeMessageDiv", "No User available" + "");
                } else if (data == duplicate) {
                    displayErrorMessages("PFTypeMessageDiv", existed + "");
                    setTimeout(function () {
                        displayPFType();
                    }, 1000);

                } else if (data != null) {
                    $("#PFType").prop("disabled", true);
                    $("#pfSave").attr('disabled', true);
                    $("#pfReset").attr('disabled', true);

                    displaySuccessMessages("PFTypeMessageDiv", updateSuccessMessage, "");
                    setTimeout(function () {
                        displayPFType();
                    }, 4000);

                }
            });
        }
    }
}

function deletePFType(id) {
    if (checkUserPrivelege(pvDeletePfType)) {
        if (confirm("Are you sure?")) {
            $(this).closest('tr').remove();
            deletePFTypeData(id);
        }
    }
}

function deletePFTypeData(id) {
    if (checkUserPrivelege(pvDeletePfType)) {
        $.post(server_base_url + "hrms/salary/PFType/Delete", {
            Id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("PFTypelistMessageDiv", emptyListMessage + "");
            } else if (data == unauthorized) {
                displayErrorMessages("PFTypelistMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("PFTypelistMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                displaySuccessMessages("PFTypelistMessageDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    displayPFType();
                }, 4000);

            }
        });
    }
}



function validatePFType() {
    $("#PFTypeErr").text("");
    var result = $("#pfSave").val();

    var PFType = $("#PFType").val();

    if (PFType == " ") {
        $("#PFType").focus();
        addSomeClass("PFTypeInputGroupDiv", "has-error");
        displaySmallErrorMessages("PFTypeErr", "Please Enter PF Type.");
        return false;
    } else {
        savePFType();
    }
}

function alphabetValidation() {

    var sectionVatidate = /^([a-z A-Z\u0080-\u024F])*[a-z A-Z\u0080-\u024F\.\']*$/;
    return sectionVatidate;
}
function savePFType() {
    if (checkUserPrivelege(pvCreatePFType)) {
        var PFType = $('#PFType').val();
        var objJson = {
            PFType: PFType
        };

        $.post(server_base_url + "hrms/salary/PFType/Save", {
            objJson: JSON.stringify(objJson),
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("PFTypeMessageDiv", "Invalid username / password" + "");
            } else if (data == unauthorized) {
                displayErrorMessages("PFTypeMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("PFTypeMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("PFTypeMessageDiv", "No User available" + "");
            } else if (data == duplicate) {
                displayErrorMessages("PFTypeMessageDiv", existed + "");
                setTimeout(function () {
                    displayPFType();
                }, 1000);

            } else if (data != null) {

                $("#PFType").prop("disabled", true);
                $("#pfSave").attr('disabled', true);
                $("#pfReset").attr('disabled', true);
                displaySuccessMessages("PFTypeMessageDiv", successMessage, "");
                setTimeout(function () {
                    displayPFType();
                }, 4000);
            }
        });
    }
}