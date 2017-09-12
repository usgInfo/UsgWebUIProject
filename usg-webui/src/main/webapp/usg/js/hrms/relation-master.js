/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Start Display page Function
function dispalyhrmsCommonRelation() {
    createRelationForm();
    if (checkUserPrivelege(pvViewRelation)) {
        fetchAllRelationMasterList();
    }
}
//End Display page Function

//Start create Form Function
function createRelationForm() {
    scrolupfunction();
// $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>Relation Master</label>');
//    $("#dashboardTitleMainDiv").text("").append("HRMS");

    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>><label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> ><label>Relation Master</label>');

    $("#dashboardBodyMainDiv").text("").append('<div id="relationMainDiv" class="row"/>');
    if (checkUserPrivelege(pvCreateRelation)) {
        $("#relationMainDiv").text("").append("<div id='relationcolumnDiv' class='col-lg-12'>");
        $("#relationcolumnDiv").append("<div id='relationpanelDiv' class='panel panel-blue'>");
        $("#relationpanelDiv").append("<div id='relationpanelHeadingDiv' class='panel-heading'/>");
        $("#relationpanelHeadingDiv").append("<h4 id='relationHeader' class='panel-title' />");
    $("#relationHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>Relation Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colRelation'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#relationpanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#colRelation").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colRelation span").hasClass("glyphicon-minus-sign")) {
            $("#colRelation").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colRelation").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='relationpanelBodyDiv' class='panel-body pan'>");
    $("#relationpanelBodyDiv").append("<div id='relationformDiv' class='form-horizontal'>");
    $("#relationformDiv").append("<div id='relationformBodyDiv' class='form-body'>");
    $("#relationformBodyDiv").append("<center><span id='pregsuccessBefore'/><center>");
    $("#relationformBodyDiv").append("<div id='relationRowPanel' class='row'>");

        $("#relationformBodyDiv").append('<div class="form-group" id="relationFormGroupDiv1"><label for="relationName" class="col-lg-3 control-label">Relation<span class="require">*</span></label>');
    $("#relationFormGroupDiv1").append('<div class="col-lg-9"><input id="relationName" name="relationName" type="text" placeholder="Relation Name" class="form-control"  onkeypress="return acceptAlphanumeric(event)")><span id="relationError" class="text-danger"></span></div></div></div>');

        $("#relationformBodyDiv").append('<div class="form-group" id="relationFormGroupDiv2"><label for="remarks" class="col-lg-3 control-label">Remarks</label>');
        $("#relationFormGroupDiv2").append('<div class="col-lg-9"><input id="relationRemarks" name="relationRemarks" type="text" placeholder="Remarks" class="form-control">');

        $("#relationformBodyDiv").append('<center><input type="hidden" id="idValue"><button id="relationSaveandUpdateButton" value="save" onclick="relationValidation()" type="submit" class="btn btn-success bn">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\
    <button type="button" id="relationResetButton" class="btn btn-warning bn" onclick="resetRelationMaster()">Reset</button> </center></div></div>');
    }
    $("input").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });
}
//End  create Form Function

//Start  Dispaly Table
function fetchAllRelationMasterList() {
    if (checkUserPrivelege(pvViewRelation)) {
        $("#relationMasterTableListPanel").remove("");
        $("#relationcolumnDiv").append("<div id='relationMasterTableListPanel' class='panel panel-blue'/>");
        $("#relationMasterTableListPanel").append("<div id='relationMasterTableHeading' class='panel-heading' />");
        $("#relationMasterTableHeading").append("<h4 id='relationMasterTableHeader' class='panel-title' />");
        $("#relationMasterTableHeader").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center><strong>List of Relations</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colRelationList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#relationMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colRelationList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colRelationList span").hasClass("glyphicon-minus-sign")) {
            $("#colRelationList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colRelationList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
        });
        $("#collapseOne3").append("<div id='relationListPanelTableMainDiv' class = 'panel-body' />");
        $("#relationListPanelTableMainDiv").append("<div id='relationListPanelRow' class = 'row' />");
        $("#relationListPanelTableMainDiv").append("<center><span  id='tablesuccessBefore'/></center>");
        $("#relationListPanelTableMainDiv").append("<div id='relationMastertableresponsiveDiv' class='table-responsive' />");
       $("#relationMastertableresponsiveDiv").append('<table id="example1" class="table-bordered">');

    //Start Header
        $("#example1").append("<thead><tr id='relationTableHeadId'>"
              
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Relation</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Remarks</th>");
        if (checkUserPrivelege(pvUpdateRelation)) {
            $("#relationTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteRelation)) {
            $("#relationTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Delete</th>");
        }
//End Header
        $.get(server_base_url + "hrms/common/Relation/View", {
        }).done(function(pdata) {
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
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "No User available" + "<br/><br/>");
            } else {
                if (pdata != null) {
                    if (pdata.length > 0) {
                        var sno = 0;
                        $("#example1").append("<tbody id='displayRelationTableBody' class='table-striped table-bordered' />");

                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;
                            $("#displayRelationTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td>" + pdata[i].relation + "</td>"
                                    + "<td>" + pdata[i].relationRemarks + "</td>");
                            if (checkUserPrivelege(pvUpdateRelation)) {
                                $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updateRelation('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].relation) + "','" + encodeURI(pdata[i].relationRemarks) + "') class='anchor_edit' ><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>");
                            }if (checkUserPrivelege(pvDeleteRelation)) {
                                $("#" + pdata[i]._id.$oid).append("<td><a href='javascript:void(0);' onclick=deletePopUp('deleteRelation','relationMasterTableListPanel','" + pdata[i]._id.$oid + "') class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
                            }
                        }

                    }

                }

            }
            $("#example1").dataTable();
        });
    }
}
//End  Display Table

//Start Relation Update Function 
function updateRelation(id, name, remarks)
{
//    alert(id);
    $("#displayRelationTableBody tr").css("background-color", "white");
    $("#displayRelationTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
//    createRelationForm();
//    $("#relationMasterTableListPanel").remove();
//    fetchAllRelationMasterList();
    if (checkUserPrivelege(pvUpdateRelation)) {
        var name1 = decodeURI(name);
        $("#pregsuccessBefore").text("");
        // var namedec = decodeURI(namedec);
        var remarksdec = decodeURI(remarks);
        $("#relationName").val(name1);
        $("#relationRemarks").val(remarksdec);
        $("#relationSaveandUpdateButton").text("Update");
        $("#relationSaveandUpdateButton").val("update");
        $("#relationResetButton").text("Back");
        $("#idValue").val(id);
    }
}

function sendUpdateRelationData()
{
    if (checkUserPrivelege(pvUpdateRelation)) {
    var loginUserId = getUserSessionElement("userId");
    var relation = $("#relationName").val().trim();
    var remarks = $("#relationRemarks").val().trim();
    var id = $("#idValue").val();


    $.post(server_base_url + "hrms/common/Relation/Update", {
        relation: relation,
        id: id,
        remarks: remarks,

        loginUserId: loginUserId
    }).done(function(data) {


            if (data == fail) {
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            relationEnableButton();
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            relationEnableButton();
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            relationEnableButton();
        } else if (data == null) {
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate_Message) {

            displayErrorMessages("pregsuccessBefore", "" + existed + "");

            relationEnableButton();
            setTimeout(function() {
                dispalyhrmsCommonRelation();
            }, 2100);
        } else {
            // dispalyhrmsCommonRelation();
            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+updateMessage+"</strong></center><br><br></span>");
            setTimeout(function() {
                dispalyhrmsCommonRelation();
            }, 4000);

            }
        });

    }
}
//End Update Relation Function

//Start Validation Function
function relationValidation()
{
    var result = 1;
    var relationName = $("#relationName").val().trim();
    relationDisableButton();
    if (relationName == undefined || relationName == null || relationName == "") {
        relationEnableButton();
        //$("#relationFormGroupDiv1").addClass("form-group state-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please Enter relation");
        $("#relationName").focus();
        return false;
    }

    if (result != 0) {
        $("#relationFormGroupDiv1").addClass("form-group");
        var buttonValue = $("#relationSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            sendRelationData();
        } else if (buttonValue == updateButton) {
            sendUpdateRelationData();
        }
    }

}
//End Validation Function

//Start Save Function
function sendRelationData()
{
    if (checkUserPrivelege(pvCreateRelation)) {
    var relation = $("#relationName").val().trim();
    var remarks = $("#relationRemarks").val().trim();
    var loginUserId = getUserSessionElement("userId");

        $.post(server_base_url + "hrms/common/Relation/Save", {
            relation: relation,
            relationRemaks: remarks,
            loginUserId: loginUserId

        }).done(function(data) {

            if (data == fail) {
            displayErrorMessages("pregsuccessBefore", failMessage + "");
            relationEnableButton();
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            relationEnableButton();
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            relationEnableButton();
        } else if (data == null) {
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate_Message) {
            displayErrorMessages("pregsuccessBefore", " " + existed + "");
            relationEnableButton();
            setTimeout(function() {
                dispalyhrmsCommonRelation();
            }, 2100);
        } else {
            // dispalyhrmsCommonRelation();
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            // $("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+successMessage+"</strong></center></span><br><br>");
            setTimeout(function() {
                dispalyhrmsCommonRelation();
            }, 4000);
        }
    });
    }

}
//End Save Function


//Start Delete Relation 
function deleteRelation(id)
{
    // if (confirm("Are you sure?")) {
    //  $(this).closest('tr').remove();
    if (checkUserPrivelege(pvUpdateRelation) || checkUserPrivelege(pvDeleteRelation)) {
        deleteRelationFormTable(id);
    }
    //}
}

function deleteRelationFormTable(id)
{
    if (checkUserPrivelege(pvDeleteRelation)) {
    var loginUserId = getUserSessionElement("userId");
    $.post(server_base_url + "hrms/common/Relation/Delete", {
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
            // dispalyhrmsCommonRelation();
            displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
            //$("#tablesuccessBefore").append("<span style='color:green;'><center><strong>"+deleteMessage+"</strong></center></span><br><br>");
            setTimeout(function() {
                $("#relationMasterTableListPanel").empty("");
                dispalyhrmsCommonRelation();
            }, 4000);

            }
        });
    }
}

//End Delete Relation 



//Start Reset Buttion
function resetRelationMaster() {
    $("#relationName").val("");
    $("#relationRemarks").val("");
    $("#relationSaveandUpdateButton").text("Save");
    $("#relationSaveandUpdateButton").val("save");
    $("#relationResetButton").text("Reset");
}

//End Reset Function

//Start Disable and Enable Function 
function relationDisableButton() {

    $("#relationSaveandUpdateButton").attr('disabled', true);
    $("#resetRelationMaster").attr('disabled', true);
}
function relationEnableButton() {
    $("#relationSaveandUpdateButton").attr('disabled', false);
    $("#resetRelationMaster").attr('disabled', false);
}
//End Disable and Enable Function