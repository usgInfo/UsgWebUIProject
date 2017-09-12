/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Start Display Page
function dispalyhrmsCommonSalution() {
    createSalutationForm();
    if (checkUserPrivelege(pvViewSalutation)) {
        fetchAllSalutationMasterList();
    }
}
//End Display Page

//Start create form
function createSalutationForm() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>><label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label>><label>salutation Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="salutationMainDiv" class="row"/>');
    if (checkUserPrivelege(pvCreateSalutation)) {
        $("#salutationMainDiv").append("<div id='salutationpanelDiv' class='panel panel-blue'>");
        $("#salutationpanelDiv").append("<div id='salutationpanelHeadingDiv' class='panel-heading'/>");
        $("#salutationpanelHeadingDiv").append("<h4 id='salutionHeader' class='panel-title' />");
        $("#salutionHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>Salution Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colSalutation'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#salutationpanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#colSalutation").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colSalutation span").hasClass("glyphicon-minus-sign")) {
                $("#colSalutation").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSalutation").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='salutationpanelBodyDiv' class='panel-body '>");

        $("#salutationpanelBodyDiv").append("<div id='salutationformDiv' class='form-horizontal'>");

        $("#salutationformBodyDiv").append("<div id='salutionRowPanel' class='row'>");
        $("#salutationformDiv").append("<div id='salutationformBodyDiv' class='form-body'>");

        $("#salutationformBodyDiv").append("<center><div id='pregsuccessBefore'/></center>");

        $("#salutationformBodyDiv").append('<div class="form-group" id="salutationFormGroupDiv1"><label for="salutationName" class="col-lg-3 control-label">Salutation<span class="require">*</span></label>')
        $("#salutationFormGroupDiv1").append('<div class="col-lg-9"><input id="salutationName" name="salutationName" type="text" placeholder="Salutation"  class="form-control"><span id="salutionError" class="text-danger"></span>');

        $("#salutationformBodyDiv").append('<div class="form-group" id="salutationFormGroupDiv2"><label for="remarks" class="col-lg-3 control-label">Remarks</label>');
        $("#salutationFormGroupDiv2").append('<div class="col-lg-9"><input id="salutationRemarks" name="salutationRemarks" type="text" placeholder="Remarks" class="form-control"></div>');

        $("#salutationformDiv").append('<center><input type="hidden" id="idValue"><button id="salutationSaveandUpdateButton" value="save" onclick="salutationValidation()" type="submit" class="btn btn-success bn">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\
    <button type="button" id="salutationResetButton" class="btn btn-warning bn" onclick="resetSalutationMaster()">Reset</button></center></div>');

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

    }

}
function fetchAllSalutationMasterList()
{

    if (checkUserPrivelege(pvViewSalutation)) {
        $("#salutationMasterTableListPanel").remove("");
        $("#salutationMainDiv").append("<div id='salutationMasterTableListPanel' class='panel panel-blue'/>");
        $("#salutationMasterTableListPanel").append("<div id='salutationMasterTableHeading' class='panel-heading' />");
        $("#salutationMasterTableHeading").append("<h4 id='salutationMasterTableHeader' class='panel-title' />");
        $("#salutationMasterTableHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>List of Salutations</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colSalutationList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#salutationMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colSalutationList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colSalutationList span").hasClass("glyphicon-minus-sign")) {
                $("#colSalutationList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSalutationList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='salutationListPanelTableMainDiv' class = 'panel-body' />");

        $("#salutationListPanelTableMainDiv").append("<div id='salutionListPanelRow' class = 'row' />");
        $("#salutationListPanelTableMainDiv").append("<div  id='tablesuccessBefore'/>");

        $("#salutationListPanelTableMainDiv").append("<div id='salutationMastertableresponsiveDiv' class='table-responsive' />");
        $("#salutationMastertableresponsiveDiv").append('<table id="salexample1" class="table table-bordered">');

        //Start Header
        $("#salexample1").append("<thead><tr id='salutationTableHeadId'>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Salutation Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Remarks</th>");
        if (checkUserPrivelege(pvUpdateSalutation)) {
            $("#salutationTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteSalutation)) {
            $("#salutationTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Delete</th>");
        }
        //End Header

        $.get(server_base_url + "hrms/common/Salutation/View", {
        }).done(function (pdata) {
            // alert(JSON.stringify(pdata));

            if (pdata == fail) {
                salutionEnableButton();
                displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", NoDataFoundMessage + "");
            } else if (pdata == unauthorized || pdata.statuscode == unauthorized) {
                salutionEnableButton();
                displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", unauthorizedMessage + "");
            } else if (pdata == invalidSession) {
                salutionEnableButton();
                callSessionTimeout();
            } else if (pdata == statusException) {
                categoryEnableButton();
                displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", statusExceptionMessage + "");
            } else if (pdata == null) {
                salutionEnableButton();
                displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "No User available" + "");
            } else if (pdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + statusExceptionMessage + "");
                // displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");

            } else {
                if (pdata != null) {
                    if (pdata.length > 0) {

                        var sno = 0;
                        // pqrs table body
                        $("#salexample1").append("<tbody id='displaySalutationTableBody' class='table-striped table-bordered' />");

                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;
                            $("#displaySalutationTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td>" + pdata[i].salutation + "</td>"
                                    + "<td>" + pdata[i].salutationRemarks + "</td>");
                            //  + "<td style='cursor:pointer;' onclick=updateRelation('" + pdata[i]._id.$oid + "','" + pdata[i].relation + "',,'" + pdata[i].relationRemarks + "')>" + ' <button type="button" class="removebutton" style="align:center;color:red" title="Edit this Relation" >EDIT</button>' + "</td>"
                            if (checkUserPrivelege(pvUpdateSalutation)) {
                                $("#" + pdata[i]._id.$oid).append("<td><a href='javascript:void(0);' onclick=updateSalutation('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].salutation) + "','" + encodeURI(pdata[i].salutationRemarks) + "') class='anchor_edit'><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>");
                            }
                            if (checkUserPrivelege(pvDeleteSalutation)) {
                                $("#" + pdata[i]._id.$oid).append("<td><a href = 'javascript:void(0);' onclick=deletePopUp('checkdeleteSalutation','salutationMasterTableListPanel','" + pdata[i]._id.$oid + "')  class ='anchor_delete'><i class ='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td >");
                            }
                        }


                    }
                }

            }
            $("#salexample1").dataTable();
        });

    }
}
//End Display Table

//Start Validation
function salutationValidation() {
    var result = 1;
    salutionDisableButton();
    var salutionName = $("#salutationName").val().trim();
    if (salutionName == undefined || salutionName == null || salutionName == "") {
        salutionEnableButton();
        // $("#salutationFormGroupDiv1").addClass("form-group state-error");
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please enter salutation" + "");
        $("#salutionName").focus();
        return false;
    }

    if (result != 0) {
        var buttonValue = $("#salutationSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            sendSalutationData();
        } else if (buttonValue == updateButton) {
            sendUpdateSalutationData();
        }
    }

}
//End Validation


//Start Save Function
function sendSalutationData()
{
    if (checkUserPrivelege(pvCreateSalutation)) {
        var salutation = $("#salutationName").val();
        var remarks = $("#salutationRemarks").val();
        var Json = {
            salutation: salutation,
            salutationRemarks: remarks
        };

        var json = JSON.stringify(Json);
        $.post(server_base_url + "hrms/common/Salutation/Save", {
            loginUserId: getUserSessionElement("userId"),
            json: json

        }).done(function (data) {

            if (data == fail) {
                salutionEnableButton();
                displayErrorMessages("pregsuccessBefore", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                salutionEnableButton();
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == invalidSession) {
                salutionEnableButton();
                callSessionTimeout();
            } else if (data == statusException) {
                salutionEnableButton();
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == null) {
                salutionEnableButton();
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else if (data == duplicate) {
                displayErrorMessages("pregsuccessBefore", existed + "");
                setTimeout(function () {
                    dispalyhrmsCommonSalution();
                }, 1000);
            } else if (data != null) {
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function () {
                    dispalyhrmsCommonSalution();
                }, 4000);
            }
        });

    }
}
//End Save Function

//Start Update Function
function updateSalutation(id, name, remarks)
{

    $("#pregsuccessBefore").text("");
    var category = decodeURI(name);
    var namedec = decodeURI(namedec);
    var remarksdec = decodeURI(remarks);
    $("#salutationName").val(category);
    $("#salutationRemarks").val(remarksdec);
    $("#displaySalutationTableBody tr").css("background-color", "white");
    $("#displaySalutationTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#salutationSaveandUpdateButton").text("Update");
    $("#salutationSaveandUpdateButton").val("update");
    $("#salutationResetButton").text("Back");
    $("#idValue").val(id);
}

function sendUpdateSalutationData()
{
    if (checkUserPrivelege(pvUpdateSalutation)) {
        var updatesalutation = $("#salutationName").val();
        var remarks = $("#salutationRemarks").val();
        var id = $("#idValue").val();
        var Json = {
            salutation: updatesalutation,
            salutationRemarks: remarks
        };
        var json = JSON.stringify(Json);

        $.post(server_base_url + "hrms/common/Salutation/Update", {
            id: id,
            json: json,
            loginUserId: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                salutionEnableButton();
                displayErrorMessages("pregsuccessBefore", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                salutionEnableButton();
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                salutionEnableButton();
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == null) {
                salutionEnableButton();
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else if (data == duplicate) {
                displayErrorMessages("pregsuccessBefore", existed + "");
                setTimeout(function () {
                    dispalyhrmsCommonSalution();
                }, 1000);
            } else {
                displaySuccessMessages("pregsuccessBefore", updateMessage, "");
                setTimeout(function () {
                    dispalyhrmsCommonSalution();
                }, 4000);
            }
        });
    }
}

//End Update Function

//Start Delete Function
function checkdeleteSalutation(id)
{
    deleteSalutation(id);

}

function deleteSalutation(id)
{
    if (checkUserPrivelege(pvDeleteSalutation)) {
        var loginUserId = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/Salutation/Delete", {
            id: id,
            loginUserId: loginUserId
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("tablesuccessBefore", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("tablesuccessBefore", unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("tablesuccessBefore", statusExceptionMessage + "");
            } else if (data == null) {
                displayErrorMessages("tablesuccessBefore", "No User available" + "");
            } else if (data == delete_map) {
                // dispalyhrmsCommonReligion();
                displayErrorMessages("tablesuccessBefore", "This salutation name  " + delete_map_messages, "");
            } else {
                // dispalyhrmsCommonSalution();
                displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
                setTimeout(function () {
                    $("#salutationMasterTableListPanel").empty("");
                    dispalyhrmsCommonSalution();
                }, 500);
            }
            setTimeout(function () {
                $("#tablesuccessBefore").text("");
            }, 4000);
        });
    }
}

//End Delete Function


//Start Reset Button
function resetSalutationMaster() {
    $("#salutationName").val("");
    $("#salutationRemarks").val("");
    $("#salutationSaveandUpdateButton").text("Save");
    $("#salutationSaveandUpdateButton").val("save");
    $("#salutationResetButton").text("Reset");
}
//End Reset Button

function salutionDisableButton() {
    $("#salutationSaveandUpdateButton").attr('disabled', true);
    $("#salutationResetButton").attr('disabled', true);
}
function salutionEnableButton() {
    $("#salutationSaveandUpdateButton").attr('disabled', false);
    $("#salutationResetButton").attr('disabled', false);
}