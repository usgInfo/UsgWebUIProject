/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Start Display page
function dispalyHrmsCommonMarital() {
    createMaritalForm();
    if (checkUserPrivelege(pvViewMarital)) {
        fetchAllMaritalMasterList();
    }
}
//End Display page

//Start Create Form
function createMaritalForm() {
    // $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Common Master</a></label> >><label>Marital Master</label>');
//    $("#dashboardTitleMainDiv").text("").append("HRMS");
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>><label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label>><label>Marital Master</label>');

    $("#dashboardBodyMainDiv").text("").append('<div id="maritalMainDiv" class="row"/>');
    $("#maritalMainDiv").text("").append("<div id='maritalcolumnDiv' class='col-lg-12'>");
    $("#maritalcolumnDiv").append("<div id='maritalpanelDiv' class='panel panel-blue'>");
    $("#maritalpanelDiv").append("<div id='maritalpanelHeadingDiv' class='panel-heading'/>");
    if (checkUserPrivelege(pvCreateMarital)) {
        $("#maritalpanelHeadingDiv").append("<h4 id='maritalHeader' class='panel-title' />");
    $("#maritalHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>Marital Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalpanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");

    $("#colMaritial").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colMaritial span").hasClass("glyphicon-minus-sign")) {
            $("#colMaritial").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colMaritial").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='maritalpanelBodyDiv' class='panel-body pan'>");
    $("#maritalpanelBodyDiv").append("<div id='maritalformDiv' class='form-horizontal'>");
    $("#maritalformDiv").append("<div id='maritalformBodyDiv' class='form-body pal'>");
    $("#maritalformBodyDiv").append("<center><span id='pregsuccessBefore'/></center>");
    $("#maritalformBodyDiv").append("<div id='maritalRowPanel' class='row'>");

        $("#maritalformBodyDiv").append('<div class="form-group" id="maritalFormGroupDiv"><label for="maritalName" class="col-lg-3 control-label">Marital Status<span class="require">*</span></label>')
    $("#maritalFormGroupDiv").append('<div class="col-lg-9"><input id="maritalName" name="maritalName" type="text" placeholder="Marital Status" class="form-control" onkeypress="return acceptAlphanumeric(event)"><span id="maritalError" class="text-danger"></span>');
    $("#maritalformBodyDiv").append('<center><input type="hidden" id="idValue"><button id="maritalSaveandUpdateButton" value="save" onclick="maritalValidation()" type="submit" class="btn btn-success bn">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\
    <button type="button" id="maritalResetButton" class="btn btn-warning bn" onclick="resetMaritalMaster()">Reset</button></center></div>');
    }
    $("input").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

}
//End Create Form

//Start Display Table

function fetchAllMaritalMasterList() {
    if (checkUserPrivelege(pvViewMarital)) {
    $("#maritalMasterTableListPanel").remove("");
    $("#maritalcolumnDiv").append("<div id='maritalMasterTableListPanel' class='panel panel-blue'/>");
    $("#maritalMasterTableListPanel").append("<div id='maritalMasterTableHeading' class='panel-heading' />");
    $("#maritalMasterTableHeading").append("<h4 id='maritalMasterTableHeader' class='panel-title' />");
    $("#maritalMasterTableHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>List of Marital Status</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritialList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colMaritialList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colMaritialList span").hasClass("glyphicon-minus-sign")) {
            $("#colMaritialList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colMaritialList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='maritalListPanelTableMainDiv' class = 'panel-body' />");
    $("#maritalListPanelTableMainDiv").append("<center><div  id='tablesuccessBefore'/></center>");
    $("#maritalListPanelTableMainDiv").append("<div id='maritalListPanelRow' class = 'row' />");

    $("#maritalListPanelTableMainDiv").append("<div id='maritalMastertableresponsiveDiv' class='table-responsive' />");
    $("#maritalMastertableresponsiveDiv").append('<table id="example1" class="table-striped table-bordered">');
   
        //Start Header
        $("#example1").append("<thead><tr id='maritialHeadId'>"
        
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Marital Status</th>");
        if (checkUserPrivelege(pvUpdateMarital)) {
            $("#maritialHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteMarital)) {
            $("#maritialHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>");
        }
        //End Header

        $.get(server_base_url + "hrms/coomon/MaritalStatus/View", {
        }).done(function(pdata) {
            // alert(JSON.stringify(pdata));

            if (pdata == fail) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + NoDataFoundMessage + "");

            } else if (pdata == unauthorized||pdata.statuscode == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + unauthorizedMessage + "");
                ;
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + statusExceptionMessage + "");
            } else if (pdata == null) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "No User available" + "");
            } else {
                if (pdata != null) {
                    if (pdata.length > 0) {

                        var sno = 0;
                        // pqrs table body
                        $("#example1").append("<tbody id='displayMaritalTableBody'/>");

                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;
                            $("#displayMaritalTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].maritalStatus + "</td>");
                            if (checkUserPrivelege(pvUpdateMarital)) {
                                $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);'onclick=updateMaritalStatus('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].maritalStatus) + "') class='anchor_edit'><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>");
                            }
                            if (checkUserPrivelege(pvDeleteMarital)) {
                                $("#" + pdata[i]._id.$oid).append("<td><a href='javascript:void(0);' onclick=deletePopUp('deleteMarital','fetchAllMaritalMasterList','" + pdata[i]._id.$oid + "') class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
                            }



                        }

                    }
            }

                }
                $("#example1").dataTable();
        });

    }
}

//start Validation
function maritalValidation() {
    var result = 1;

    var maritalName = $("#maritalName").val().trim();
    maritalDisableButton();
    if (maritalName == undefined || maritalName == null || maritalName == "") {
        maritalEnableButton();
        // $("#maritalFormGroupDiv").addClass("form-group state-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please enter marital status" + "");
        $("#maritalName").focus();
        return false;
    }

    if (result != 0) {
        var buttonValue = $("#maritalSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            sendMaritalData();
        } else if (buttonValue == updateButton) {
            sendUpdateMaritalData();
        }
    }
}

//End Validation

//Start Save Function

function sendMaritalData()
{
    if (checkUserPrivelege(pvCreateMarital)) {
        var marital1 = $("#maritalName").val();
        var loginUserId = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/MaritalStatus/Save", {
            marital: marital1,
        loginUserId: loginUserId
        }).done(function(data) {
            // alert(JSON.stringify(data));
            if (data == fail) {
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            maritalEnableButton();
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            maritalEnableButton();
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            maritalEnableButton();
        } else if (data == null) {
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
                maritalEnableButton();
        } else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
                //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+successMessage+"</strong></center></span><br><br>");
                setTimeout(function() {
                    dispalyHrmsCommonMarital();
                }, 2100);
        } else {
            //dispalyHrmsCommonMarital();
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+successMessage+"</strong></center></span><br><br>");
            setTimeout(function() {
                dispalyHrmsCommonMarital();
            }, 4000);
        }
    });

    }
}
//End Save Function


//Start update Function
function updateMaritalStatus(id, name)
{
    createMaritalForm();
    $("#maritalMasterTableListPanel").remove();
    fetchAllMaritalMasterList();
    var maritalname = decodeURI(name);

    $("#maritalName").val(maritalname);
    $("#displayMaritalTableBody tr").css("background-color", "white");
    $("#displayMaritalTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#maritalSaveandUpdateButton").text("Update");

    $("#maritalSaveandUpdateButton").val("update");
    $("#maritalResetButton").text("Back");
    $("#idValue").val(id);
}

function sendUpdateMaritalData()
{
    if (checkUserPrivelege(pvUpdateMarital)) {
        var updatemarital = $("#maritalName").val();

    var id = $("#idValue").val();
        var loginUserId = getUserSessionElement("userId");

    $.post(server_base_url + "hrms/common/MaritalStatus/Update", {
        marital: updatemarital,
        id: id,
        loginUserId: loginUserId
    }).done(function(data) {

        if (data == fail) {
            maritalEnableButton();
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            maritalEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            maritalEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            maritalEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+successMessage+"</strong></center></span><br><br>");
            setTimeout(function() {
                dispalyHrmsCommonMarital();
            }, 2100);
        } else {
            // dispalyHrmsCommonMarital();
            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+updateMessage+"</strong></center></span><br><br>");
            setTimeout(function() {
                dispalyHrmsCommonMarital();
            }, 4000);
        }
    });

            }
            }
//End Update Function

//Start Delete Function
function deleteMarital(id)
{
    //if (confirm("Are you sure?")) {
    //$(this).closest('tr').remove();
    if (checkUserPrivelege(pvDeleteMarital)) {
        deleteMaritalStatus(id);
    }
    //}
}

function deleteMaritalStatus(id)
{
    if (checkUserPrivelege(pvDeleteMarital)) {
        var loginUserId = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/MaritalStatus/Delete", {
            id: id,
            loginUserId: loginUserId
        }).done(function(data) {
            if (data == fail) {
            displayErrorMessages("tablesuccessBefore", "Invalid username / password" + "");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            displayErrorMessages("tablesuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayErrorMessages("tablesuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            displayErrorMessages("tablesuccessBefore", "No User available" + "");
        } else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("tablesuccessBefore", "" + delete_map_message, "");
        } else {
            displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
            setTimeout(function() {
                dispalyHrmsCommonMarital();
            }, 1000);
    }
        setTimeout(function() {
            $("#tablesuccessBefore").text("");
        }, 4000);
    });
    }
}
//End Delete Function

//Reset Button
function resetMaritalMaster() {
    $("#maritalError").text("");
    $("#pregsuccessBefore").text("");
    $("#maritalName").val("");
    $("#maritalSaveandUpdateButton").text("Save");
    $("#maritalSaveandUpdateButton").val("save");
    $("#maritalResetButton").text("Reset");
}
//End Reset Button

//Start Disbale and Enable Button Function
function maritalDisableButton() {

    $("#maritalSaveandUpdateButton").attr('disabled', true);
    $("#maritalResetButton").attr('disabled', true);
}
function maritalEnableButton() {
    $("#maritalSaveandUpdateButton").attr('disabled', false);
    $("#maritalResetButton").attr('disabled', false);
}
//End Disbale and Enable Button Function