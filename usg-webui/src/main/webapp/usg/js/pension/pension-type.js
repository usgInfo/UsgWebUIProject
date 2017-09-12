/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayPensionType() {
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionMasters()">Pension Master</a></label> >><label>Pension Type Master</label>');

    $("#dashboardBodyMainDiv").text("").append('<div id="pensionTypeMainDiv"/>');

    $("#pensionTypeMainDiv").text("").append("<div id='pensionTypecolumnDiv' >");
    $("#pensionTypecolumnDiv").append("<div id='pensionTypeFirstPanel' class='panel panel-blue' />");
    $("#pensionTypeFirstPanel").append("<div id='pensionTypefirstPanelHeading' class='panel-heading' />");
    $("#pensionTypefirstPanelHeading").append("<h4 id='pensionTypetableHeader1' class='panel-title' />");
    $("#pensionTypetableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>Pension Type</center>");
    $("#pensionTypeFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='pensionTypepanelMainBody' class = 'panel-body' />");
    $("#pensionTypepanelMainBody").append("<div id='pensionTypepanelRow' class='row' />");
    $("#pensionTypepanelRow").append("</div><div id='pensionTypeMessageDiv' ></div>");
    $("#pensionTypepanelMainBody").append("<div id='pensionTypepanelBodyDiv' class='panel-body '>");
    $("#pensionTypepanelBodyDiv").append("<div id='pensionTypeformDiv' class='form-horizontal'>");
    $("#pensionTypeformDiv").append("<div id='pensionTypeformBodyDiv' class='form-body'>");
    $("#pensionTypepanelBodyDiv").append('<div class="form-group" id="pensionTypeGroupDiv"/>');
    $("#pensionTypeformBodyDiv").append('<div class="row" id="pensionTypeRowDiv">');
    $("#pensionTypeRowDiv").append('<div class="col-lg-3 control-label" id="pensionTypeLabelDiv"/>');
    $("#pensionTypeLabelDiv").append(getLabel("Pension Type", "required"));
    $("#pensionTypeRowDiv").append('<div class="col-lg-9" id="pensionTypeInputGroupDiv">');
    $("#pensionTypeInputGroupDiv").append(getInput("pensionType", "Enter Pension Type", "", ""));
    $("#pensionTypeInputGroupDiv").append("<span id='pensionTypeErr'></span>");

    $("#pensionTypeformBodyDiv").append("<div id='pensionTypeButtonRowDiv' class='row' />");
    $("#pensionTypeButtonRowDiv").append("<div  class='col-xs-12' id='pensionTypeButtonRow'/><center><button type='button'  id='penTypeSave' value='save' class='btn btn-success bn'  onclick='validatepensionType()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetpensionType()' class='btn btn-warning bn' id='penTypeReset'name='reset' value='reset'>Reset</button></center></div>");
    $("#pensionTypecolumnDiv").append("<div id='pensionTypeListPanel' class='panel panel-blue' />");
    $("#pensionTypeListPanel").append("<div id='pensionTypeListPanelHeading' class='panel-heading' />");
    $("#pensionTypeListPanelHeading").append("<h4 id='pensionTypefirstHeader1' class='panel-title' />");
    $("#pensionTypefirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Pension Types</center>");
    $("#pensionTypeListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='pensionTypePanellistpanelMainBody' class = 'panel-body' />");
    $("#pensionTypePanellistpanelMainBody").append("<div id='pensionTypelistMessageDiv'  ></div>");
    $("#pensionTypePanellistpanelMainBody").append("<div id='pensionTypelistpanelRow' class='row' />");
    $("#pensionTypelistpanelRow").append("<div id='pensionTypeLeftstatuslistpanelRow' class='table-responsive' />");
    viewpensionTypeList('pensionTypeLeftstatuslistpanelRow');
}
function viewpensionTypeList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='viewpensionType'/>");
    $("#viewpensionType").append("<div class='table-responsive' id='viewpensionTypeSectionTableDiv' />");
    $("#viewpensionTypeSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displaypensionTypeTable' />");
    $("#displaypensionTypeTable").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Pension Type</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "/pension/master/PensionType/View", {
    }).done(function (bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionTypelistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionTypelistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionTypelistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        }
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                $("#displaypensionTypeTable").append("<tbody id='displaypensionTypeTableBody' class='table-striped table-bordered' />");
                for (var i = bdata.length - 1; i >= 0; i--) {
                    sno++;
                    var objJson = {
                        Id: bdata[i]._id.$oid,
                        pensionType: bdata[i].pensionType
                    };
                    objJson = JSON.stringify(objJson);
                    $("#displaypensionTypeTableBody").append("<tr id='" + bdata[i].status + "' class='table_row' >"
                            + "<td>" + sno + "</td>"
                            + "<td class='table_row'>" + bdata[i].pensionType + "</td>"
                            + "<td> <a href='javascript:void(0);' onclick=onclick=updatepensionType('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                            + "<td> <a href='javascript:void(0);' onclick=onclick=deletePopUp('deletePensionTypeData','viewpensionTypeList','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                }
                $('#displaypensionTypeTable').append("</table>");
                $('#displaypensionTypeTable').dataTable();
            }
        }

    });
}
function updatepensionType(obj) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#pensionType").val(obj.pensionType);
    $("#pensionType").prop("readonly", false);
    $("#pensionTypeButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updatePensionTypeData('" + obj.Id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayPensionType()'  class='btn btn-warning bn' >Back</button></center>");
}
function updatePensionTypeData(id) {
    var pensionType = $('#pensionType').val();
    if (pensionType == "" || pensionType == undefined) {
        addSomeClass("pensionTypeMessageDiv", "has-error");
        displaySmallErrorMessages("pensionTypeErr", "Please Enter Pension Classification Type.");
        return false;
    } else if (pensionType != "") {
        if (!pensionType.match((alphabetValidation()))) {
            addSomeClass("pensionTypeMessageDiv", "has-error");
            displaySmallErrorMessages("pensionTypeErr", "Only alphabets are allowed.");
            return false;
        } else {
            $.post(server_base_url + "/pension/master/PensionType/Update", {
                pensionType: pensionType,
                id: id,
                userid: getUserSessionElement("userId")
            }).done(function (data) {
                if (data == fail) {
                    displayLargeErrorMessagesInCenterInRed("pensionTypeMessageDiv", emptyListMessage + "<br/><br/>");
                } else if (data == unauthorized) {
                    displayLargeErrorMessagesInCenterInRed("pensionTypeMessageDiv", unauthorizedMessage + "<br/><br/>");
                } else if (data == statusException) {
                    displayLargeErrorMessagesInCenterInRed("pensionTypeMessageDiv", statusExceptionMessage + "<br/><br/>");
                } else if (data == invalidSession) {
                    callSessionTimeout();
                } else if (data == null) {

                } else {
                    $("#pensionType").prop("disabled", true);
                    $("#penTyoeSave").attr('disabled', true);
                    $("#penTypeReset").attr('disabled', true);
                    displaySuccessMessages("pensionTypeMessageDiv", updateSuccessMessage, "");
                    setTimeout(function () {
                        displayPensionType();
                    }, 1000);

                }
            });
        }
    }
}


function deletepensionType(id) {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deletePensionTypeData(id);
    }
}

function deletePensionTypeData(id) {
    $.post(server_base_url + "/pension/master/PensionType/Delete", {
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionTypelistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionTypelistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionTypelistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("pensionTypelistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                displayPensionType();
            }, 1000);

        }
    });
}



function resetpensionType() {
    $("#pensionType").val("");
    $("#pensionTypeErr").text("");
    removeSomeClass("pensionTypeInputGroupDiv", "has-error");
}
function validatepensionType() {

    $("#pensionType").text("");
    var result = $("#penClaSave").val();

    var pensionType = $("#pensionType").val();

    if (pensionType == "") {
        $("#pensionType").focus();
        addSomeClass("pensionTypeInputGroupDiv", "has-error");
        displaySmallErrorMessages("pensionTypeErr", "Please Enter Pension Classification.");
        return false;
    } else if (pensionType != "") {
        if (!pensionType.match((alphabetValidation()))) {
            addSomeClass("pensionTypeInputGroupDiv", "has-error");
            displaySmallErrorMessages("pensionTypeErr", "Only alphabets are allowed.");
            return false;
        } else {
            savePensionType();
        }
    }
}

function savePensionType() {
    var pensionType = $("#pensionType").val();
    $.post(server_base_url + "/pension/master/PensionType/Save", {
        pensionType: pensionType,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("pensionTypeMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pensionTypeMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pensionTypeMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {

            $("#pensionType").prop("disabled", true);
            $("#penTyoeSave").attr('disabled', true);
            $("#penTypeReset").attr('disabled', true);
            displaySuccessMessages("pensionTypeMessageDiv", successMessage, "");
            setTimeout(function () {
                displayPensionType();
            }, 1000);
        }
    });
}