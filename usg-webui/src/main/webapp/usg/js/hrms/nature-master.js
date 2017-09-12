/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function dispalyhrmsCommonNature() {
    createNatureForm();
    if (checkUserPrivelege(pvViewNature)) {
        fetchAllNatureMasterList();
    }
}


//creat Form Start
function createNatureForm() {
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Common Master</a></label> >><label>Nature Master</label>');
//    $("#dashboardTitleMainDiv").text("").append("HRMS");
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>><label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> ><label>Nature Master</label>');

    $("#dashboardBodyMainDiv").text("").append('<div id="natureMainDiv" class="row"/>');
    if (checkUserPrivelege(pvCreateNature)) {
        $("#natureMainDiv").text("").append("<div id='naturecolumnDiv' class='col-lg-12'>");
        $("#naturecolumnDiv").append("<div id='naturepanelDiv' class='panel panel-blue'>");
        $("#naturepanelDiv").append("<div id='naturepanelHeadingDiv' class='panel-heading'/>");
        $("#naturepanelHeadingDiv").append("<h4 id='natureHeader' class='panel-title' />");
    $("#natureHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>Nature Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colNature'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#naturepanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#colNature").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colNature span").hasClass("glyphicon-minus-sign")) {
            $("#colNature").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colNature").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='naturepanelBodyDiv' class='panel-body pan'>");
    $("#naturepanelBodyDiv").append("<div id='natureformDiv' class='form-horizontal'>");
    $("#natureformDiv").append("<div id='natureformBodyDiv' class='form-body pal'>");
    $("#natureformBodyDiv").append("<div id='natureRowPanel' class='row'>");
    $("#natureRowPanel").append("<center><div id='pregsuccessBefore'/></center>");

        $("#natureformBodyDiv").append('<div class="form-group" id="natureFormGroupDiv"><label for="natureName" class="col-lg-3 control-label">Nature Name<span class="require">*</span></label>')
    $("#natureFormGroupDiv").append('<div class="col-lg-9"><input id="natureName" name="natureName" type="text" placeholder="Nature Name" class="form-control" onkeypress="return acceptAlphanumeric(event)"><span id="natureError" class="text-danger"></span></div>');
    $("#natureformBodyDiv").append('<center><input type="hidden" id="idValue"><button id="natureSaveandUpdateButton" value="save" onclick="natureValidation()" type="submit" class="btn btn-success bn">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\
    <button type="button" id="natureResetButton" class="btn btn-warning bn" onclick="resetNatureMaster()">Reset</button> </center></div>');
        $("input").on("keypress", function(e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

    }
}
//End create Form

//create nature table
function fetchAllNatureMasterList() {
    if (checkUserPrivelege(pvViewNature)) {
        $("#natureMasterTableListPanel").remove("");
        $("#naturecolumnDiv").append("<div id='natureMasterTableListPanel' class='panel panel-blue'/>");
        $("#natureMasterTableListPanel").append("<div id='natureMasterTableHeading' class='panel-heading' />");
        $("#natureMasterTableHeading").append("<h4 id='natureMasterTableHeader' class='panel-title' />");
    $("#natureMasterTableHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>List of Nature</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colNatureList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#natureMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colNatureList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colNatureList span").hasClass("glyphicon-minus-sign")) {
            $("#colNatureList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colNatureList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
        $("#collapseOne3").append("<div id='natureListPanelTableMainDiv' class = 'panel-body' />");
        $("#natureListPanelTableMainDiv").append("<div id='natureListPanelRow' class = 'row' />");
        $("#natureListPanelTableMainDiv").append("<center><div  id='tablesuccessBefore'/></center>");
        $("#natureListPanelTableMainDiv").append("<div id='natureMastertableresponsiveDiv' class='table-responsive' />");
    $("#natureMastertableresponsiveDiv").append('<table id="example1" class="table table-bordered">');

        //Start Header
        $("#example1").append("<thead class=''><tr id='natureTableHeadId'>"
    
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Nature Name</th>");
        if (checkUserPrivelege(pvUpdateNature)) {
            $("#natureTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }if (checkUserPrivelege(pvDeleteNature)) {
            $("#natureTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>");
        }
        //End Header
        $.post(server_base_url + "hrms/common/Nature/View", {
            json: name
        }).done(function(data) {
            if (data == fail) {
           displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + failMessage + "<br /><br />");

        } else if (data.statuscode == unauthorized||data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + unauthorizedMessage + "<br /><br />");

            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            } else if (data == null) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "No User available" + "<br/><br/>");
            } else {
                if (data != null) {
                    if (data.length > 0) {
                        var sno = 0;
                        $("#example1").append("<tbody id='displayReligionTableBody'class='table table-bordered table-striped' />");

                                for (var i = data.length - 1; i >= 0; i--) {

                                    sno++;
                                    $("#displayReligionTableBody").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                                            + "<td>" + sno + "</td>"
                                            + "<td style='cursor:pointer;' onclick=updateNature('" + data[i].natureName + "')>" + data[i].natureName + "</td>");
                                    if (checkUserPrivelege(pvUpdateNature)) {
                                        $("#" + data[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=onclick=updateNatureEdit('" + data[i]._id.$oid + "','" + encodeURI(data[i].natureName) + "') class='anchor_edit'><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>");
                                    }if (checkUserPrivelege(pvDeleteNature)) {
                                        $("#" + data[i]._id.$oid).append("<td><a href='javascript:void(0);' onclick=deletePopUp('deleteNature','natureMasterTableListPanel','" + data[i]._id.$oid + "') class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
                                    }

                                }
                            }
                        }
                    }
                $('#example1').dataTable();
        });

    }
}

//End Nature table

//Start Validation 
function natureValidation()
{
    var result = 1;
    natureDisableButton();
    var natureName = $("#natureName").val().trim();

    if (natureName == undefined || natureName == null || natureName == "") {
        natureEnableButton();
        // $("#natureFormGroupDiv").addClass("form-group state-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please enter nature name");
        $("#natureName").focus();
        return false;
    }

    if (result != 0) {
        var buttonValue = $("#natureSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            saveNature();
        } else if (buttonValue == updateButton) {
            updateNature();
        }
    }
}

//End Validation

//Start Save Function
function  saveNature() {
    if (checkUserPrivelege(pvCreateNature)) {

        var name = $("#natureName").val();
        var loginUserId = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/Nature/Save", {
            json: name,
            loginUserId: loginUserId
        }).done(function(data) {

            if (data == fail) {
                natureEnableButton();
            displayErrorMessages("pregsuccessBefore", failMessage + "");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            natureEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            natureEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
            natureEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            natureEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        }
        else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function() {
                dispalyhrmsCommonNature();
            }, 3000);

        }
        else if (data != null) {
            //dispalyhrmsCommonNature();
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            //  $("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+successMessage+"</strong></center></span><br><br>");
            setTimeout(function() {
                dispalyhrmsCommonNature();
            }, 4000);

            }

        });

    }
}
//End Save Function
//Start update Function
function  updateNatureEdit(id, name) {
//    createNatureForm();
//    $("#natureMasterTableListPanel").remove();
//    fetchAllNatureMasterList();
    var nature = decodeURI(name);
    $("#pregsuccessBefore").text("");
    $("#natureName").val(nature);
    $("#displayReligionTableBody tr").css("background-color", "white");
    $("#displayReligionTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#natureSaveandUpdateButton").text("Update");
    $("#natureResetButton").text("Back");
    $("#natureSaveandUpdateButton").val("update");
    $("#idValue").val(id);
}

function updateNature() {
    if (checkUserPrivelege(pvUpdateNature)) {

        var name = decodeURI($("#natureName").val());
        var id = $("#idValue").val();
        var loginUserId = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/NatureService/Update", {
            id: id,
            name: decodeURI(name),
            loginUserId: loginUserId
            
        }).done(function(data) {

        if (data == fail) {
            natureEnableButton();
            displayErrorMessages("pregsuccessBefore", failMessage + "");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            natureEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            natureEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
            natureEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            natureEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function() {
                dispalyhrmsCommonNature();
            }, 1000);

        } else if (data != null) {
            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            setTimeout(function() {
                dispalyhrmsCommonNature();
            }, 4000);

        }

    });

    }
}

//End Update Function


//Start Delete Function
function deleteNature(id)
{
    //if (confirm("Are you sure?")) {
    //  $(this).closest('tr').remove();
    if (checkUserPrivelege(pvDeleteNature)) {
        deleteNature1(id);
    }
    //}
}

function deleteNature1(id) {
    if (checkUserPrivelege(pvDeleteNature)) {
        var loginUserId = getUserSessionElement("userId");
        
        $.post(server_base_url + "hrms/common/NatureService/Delete", {
            id: id,
            loginUserId: loginUserId
        }).done(function(data) {
            if (data == fail) {
// natureEnableButton();
            displayErrorMessages("tablesuccessBefore", failMessage + "");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            // natureEnableButton();
            displayErrorMessages("tablesuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            // natureEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
            //   natureEnableButton();
            displayErrorMessages("tablesuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            // natureEnableButton();
            displayErrorMessages("tablesuccessBefore", "No User available" + "");
        } else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("tablesuccessBefore", " " + delete_map_messages, "");
            setTimeout(function() {
                $("#tablesuccessBefore").text("");
            }, 2100);
        } else {
            // dispalyhrmsCommonNature();
            displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
            //hidingTable(natureMasterTableListPanel);
            setTimeout(function() {
                $("#natureMasterTableListPanel").empty();
                dispalyhrmsCommonNature();
            }, 4000);
        }
        setTimeout(function() {
            $("#tablesuccessBefore").text("");
        }, 4000);

    });


    }

}
//End Delete Function

//Start Reset Button
function resetNatureMaster() {
    $("#natureName").val("");
    $("#natureSaveandUpdateButton").text("Save");
    $("#natureSaveandUpdateButton").val("save");
    $("#natureResetButton").text("Reset");
}
//End Reset Button

function natureDisableButton() {

    $("#natureSaveandUpdateButton").attr('disabled', true);
    $("#natureResetButton").attr('disabled', true);
}
function natureEnableButton() {
    $("#natureSaveandUpdateButton").attr('disabled', false);
    $("#natureResetButton").attr('disabled', false);
}