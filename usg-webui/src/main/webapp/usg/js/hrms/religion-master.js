/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Display start Religion List
function dispalyhrmsCommonReligion() {
    createReligionForm();
    if (checkUserPrivelege(pvViewReligion)) {
        fetchAllReligionMasterList();
    }
}
//Display End Religion List



//creat Form Start
function createReligionForm() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>><label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> ><label>Religion Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="religionMainDiv" class="row"/>');
    if (checkUserPrivelege(pvCreateReligion)) {
        $("#religionMainDiv").append("<div id='religionpanelDiv' class='panel panel-blue'>");
        $("#religionpanelDiv").append("<div id='religionpanelHeadingDiv' class='panel-heading'/>");
//    $("#religionpanelDiv").append("<div id='religionpanelBodyDiv' class='panel-body pan'>");
        $("#religionpanelHeadingDiv").append("<h4 id='religionHeader' class='panel-title' />");
    $("#religionHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>Religion Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colReligion'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#religionpanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in ' />");
     $("#colReligion").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colReligion span").hasClass("glyphicon-minus-sign")) {
            $("#colReligion").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colReligion").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='religionpanelBodyDiv' class='panel-body '>");
    $("#religionpanelBodyDiv").append("<div id='religionformDiv' class='form-horizontal'>");
    $("#religionformDiv").append("<div id='religionformBodyDiv' class='form-body pal'>");
        $("#religionformBodyDiv").append("<div id='religionRowPanel' class='row'>");
        $("#religionformBodyDiv").append("<center><div id='pregsuccessBefore'/></center>");
        $("#religionformBodyDiv").append('<div class="form-group" id="religionFormGroupDiv"><label for="religionName" class="col-lg-3 control-label">Religion Name<span class="require">*</span></label>')
    $("#religionFormGroupDiv").append('<div class="col-lg-9"><input id="religionName" name="religionName" type="text" placeholder="Religion Name" class="form-control" onkeypress="return acceptAlphanumeric(event)"><label id="religionError" class="text-danger"></label></div>');
        $("#religionformBodyDiv").append('<input type="hidden" id="idValue"><center><button id="religionSaveandUpdateButton" value="save" onclick="religionValidation()" type="submit" class="btn btn-success bn">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\
    <button type="button" id="religionResetButton" class="btn btn-warning bn" onclick="resetReligionMaster()">Reset</button></center></div>');
    }
    $("input").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

}
//End create Form

//create religion table
function fetchAllReligionMasterList() {
    $("#religionMasterTableListPanel").remove("");
    if (checkUserPrivelege(pvViewReligion)) {
        $("#religioncolumnDiv").append("<div id='religionMasterTableListPanel' class='panel panel-blue'/>");
        $("#religionMasterTableListPanel").remove("");
        $("#religionMainDiv").append("<div id='religionMasterTableListPanel' class='panel panel-blue'/>");
        $("#religionMasterTableListPanel").append("<div id='religionMasterTableHeading' class='panel-heading' />");
        $("#religionMasterTableHeading").append("<h4 id='religionMasterTableHeader' class='panel-title' />");
    $("#religionMasterTableHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>List of Religions</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colReligionList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#religionMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colReligionList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colReligionList span").hasClass("glyphicon-minus-sign")) {
            $("#colReligionList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colReligionList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='religionListPanelTableMainDiv' class = 'panel-body' />");
    $("#religionListPanelTableMainDiv").append("<div id='religionListPanelRow' class = 'row' />");
    $("#religionListPanelTableMainDiv").append("<center><div  id='tablesuccessBefore'/></center>");
    $("#religionListPanelTableMainDiv").append("<div id='religionMastertableresponsiveDiv' class='table-responsive' />");
    $("#religionMastertableresponsiveDiv").append('<table id="example1" class="table table-bordered">');

        //Start Header
        $("#example1").append("<thead><tr id='religionTableHeadId'>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Religion Name</th>");
        if (checkUserPrivelege(pvUpdateReligion)) {
            $("#religionTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteReligion)) {
            $("#religionTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa' ></i>Delete</th>");
        }
        //End Header

        $.get(server_base_url + "hrms/common/Religion/View", {
        }).done(function(pdata) {
            // alert(JSON.stringify(pdata));

            if (pdata == fail) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" +emptyListMessage + "");
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + emptyListMessage + "");
        } else if (pdata == unauthorized||pdata.statuscode == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + unauthorizedMessage + "");
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + unauthorizedMessage + "");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + statusExceptionMessage + "");
            // displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            if (pdata != null) {
                if (pdata.length > 0) {

                        var sno = 0;
                        $("#example1").append("<tbody id='displayReligionTableBody'/>");

                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;
                            $("#displayReligionTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].religion + "</td>");
                            if (checkUserPrivelege(pvUpdateRelation)) {
                                $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updateReligion('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].religion) + "') class='anchor_edit'><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>");
                            }                            if (checkUserPrivelege(pvDeleteReligion)) {
                                $("#" + pdata[i]._id.$oid).append("<td><a href='javascript:void(0);' onclick=deletePopUp('verdeleteReligion','religionMasterTableListPanel','" + pdata[i]._id.$oid + "') class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");                            }
                        }

                    }
                }

            }
            $("#example1").dataTable();
        });
    }

}
//Start Validation
function religionValidation()
{
    var result = 1;
    religionDisableButton();
    var religionName = $("#religionName").val().trim();
    if (religionName == undefined || religionName == null || religionName == "") {
        religionEnableButton();
        // $("#religionFormGroupDiv").addClass("form-group state-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please enter religion" + "<br/><br/>");
        // displaySmallErrorMessagesInRed("pregsuccessBefore", "Please enter religion");
        $("#religionName").focus();
        return false;
    }

    if (result != 0) {

        var buttonValue = $("#religionSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            sendReligionData();
        } else if (buttonValue == updateButton) {
            sendUpdateReligionData();
        }
    }
}


//Start Religion Save Function


function sendReligionData()
{
    if (checkUserPrivelege(pvCreateReligion)) {
        var religion1 = $("#religionName").val().trim();
        var loginUserId = getUserSessionElement("userId");

    $.post(server_base_url + "hrms/common/Religion/Save", {
        religion: religion1,
        loginUserId: loginUserId
    }).done(function(data) {

        if (data == fail) {
            religionEnableButton();
            displayErrorMessages("pregsuccessBefore", failMessage + "");
        } else if (data == unauthorized) {
            religionEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            religionEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
            religionEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            religionEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function() {
                dispalyhrmsCommonReligion();
            }, 1000);
        } else if (data != null) {
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function() {
                dispalyhrmsCommonReligion();
            }, 4000);
        }
    });
            }

}
//End Religion Save Function

//start update Function 

function updateReligion(id, name)
{
//    createReligionForm();
//    $("#religionMasterTableListPanel").remove();
//    fetchAllReligionMasterList();
    var religion = decodeURI(name);
    $("#pregsuccessBefore").text("");

    $("#religionName").val(religion);
    $("#displayReligionTableBody tr").css("background-color", "white");
    $("#displayReligionTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#religionSaveandUpdateButton").text("Update");
    $("#religionSaveandUpdateButton").val("update");
    $("#religionResetButton").text("Back");
    $("#idValue").val(id);

}
function sendUpdateReligionData()
{
    if (checkUserPrivelege(pvUpdateReligion)) {
        var updatereligion = $("#religionName").val();
    var id = $("#idValue").val();
    var loginUserId = getUserSessionElement("userId");
    $.post(server_base_url + "hrms/common/Religion/Update", {
        religion: updatereligion,
        id: id,
        loginUserId: loginUserId
    }).done(function(data) {

        if (data == fail) {
            religionEnableButton();
            displayErrorMessages("pregsuccessBefore", failMessage + "");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            religionEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            religionEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            religionEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        }
        else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function() {
                dispalyhrmsCommonReligion();
            }, 1000);
        }
        else if (data != null) {
            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            setTimeout(function() {
                dispalyhrmsCommonReligion();
            }, 4000);
        }
    });

            }
        }

//End Update Function 


//Start Delete Function

function verdeleteReligion(id)
{
    //if (confirm("Are you sure?")) {
    // $(this).closest('tr').remove();
    deleteReligion(id);
    // }
}
function deleteReligion(id)
{
    if (checkUserPrivelege(pvDeleteReligion)) {
        var loginUserId = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/Religion/Delete", {
            id: id,
            loginUserId: loginUserId
        }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", failMessage + "<br/><br/>");
            setTimeout(function() {
                $("#tablesuccessBefore").text("");
            }, 2100);
        } else if (data == unauthorized||data.statuscode == unauthorized) {

            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", unauthorizedMessage + "<br/><br/>");
            setTimeout(function() {
                $("#tablesuccessBefore").text("");
            }, 2100);
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", statusExceptionMessage + "<br/><br/>");
            setTimeout(function() {
                $("#tablesuccessBefore").text("");
            }, 2100);
        } else if (data == null) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "No User available" + "<br/><br/>");
            setTimeout(function() {
                $("#tablesuccessBefore").text("");
            }, 2100);

        } else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("tablesuccessBefore", "" + delete_map_messages, "");
            setTimeout(function() {
                $("#tablesuccessBefore").text("");
            }, 2100);
        } else {
            // dispalyhrmsCommonReligion();
            displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
            // $("#tablesuccessBefore").append("<span style='color:green;'><center><strong>"+deleteMessage+"</strong></center></span><br><br>");
            setTimeout(function() {
                $("#religionMasterTableListPanel").empty("");
                dispalyhrmsCommonReligion();
            }, 4000);
        }
    });

            }
            }
//End Delete Function

// start Reset Religion Master

function resetReligionMaster() {
    $("#religionName").val("");
    $("#religionSaveandUpdateButton").text("Save");
    $("#religionSaveandUpdateButton").val("save");
    $("#religionResetButton").text("Reset");
}

//End Reset Button function

function religionDisableButton() {

    $("#religionSaveandUpdateButton").attr('disabled', true);
    $("#religionResetButton").attr('disabled', true);
}
function religionEnableButton() {
    $("#religionSaveandUpdateButton").attr('disabled', false);
    $("#religionResetButton").attr('disabled', false);
}