/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Start Display Page
function dispalyhrmsCommonLoanGadNonGadMaster() {
    createGadNonGadForm();
    if (checkUserPrivelege(pvViewGadNongad)) {
        fetchGadNonGadMasterList();
    }
}
//End Display Page
//creat Form Start
function createGadNonGadForm() {
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Common Master</a></label> >><label>Gad NonGad Master</label>');

//    $("#dashboardTitleMainDiv").text("").append("HRMS");
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>><label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label>><label>Gad NonGad Master</label>');


    $("#dashboardBodyMainDiv").text("").append('<div id="gadnongadMainDiv" class="row"/>');
    if (checkUserPrivelege(pvCreateGadNongad)) {
        $("#gadnongadMainDiv").text("").append("<div id='gadnongadcolumnDiv' class='col-lg-12'>");
        $("#gadnongadcolumnDiv").append("<div id='gadnongadpanelDiv' class='panel panel-blue'>");
        $("#gadnongadpanelDiv").append("<div id='gadnongadpanelHeadingDiv' class='panel-heading'/>");
        $("#gadnongadpanelHeadingDiv").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>Gad NonGad Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colGadNongad'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#gadnongadpanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#colGadNongad").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colGadNongad span").hasClass("glyphicon-minus-sign")) {
            $("#colGadNongad").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colGadNongad").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });

    $("#collapseOne2").append("<div id='gadnongadpanelBodyDiv' class='panel-body pan'>");
    $("#gadnongadpanelBodyDiv").append("<div id='gadnongadformDiv' class='form-horizontal'>");
    $("#gadnongadformDiv").append("<div id='gadnongadformBodyDiv' class='form-body pal'>");
    $("#gadnongadformBodyDiv").append("<div id='gadnongadRowPanel' class='row'>");
    $("#gadnongadRowPanel").append("<center><div id='pregsuccessBefore'/></center>");
    $("#gadnongadformBodyDiv").append('<div class="form-group" id="gadnongadFormGroupDiv"><label for="gadnongadName" class="col-lg-3 control-label">Gad-NonGad Master<span class="require">*</span></label>')
    $("#gadnongadFormGroupDiv").append('<div class="col-lg-9"><input id="gadnongadName" name="gadnongadName" type="text" placeholder="Gad-NonGad" class="form-control" onkeypress="return acceptAlphanumeric(event)"><span id="gadnongadError" class="text-danger"></span></div>');
    $("#gadnongadformBodyDiv").append('<center><input type="hidden" id="idValue"><button id="gadnongadSaveandUpdateButton" value="save" onclick="gadnongadValidation()" type="submit" class="btn btn-success bn">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\
    <button type="button" id="gadnongadResetButton" class="btn btn-warning bn" onclick="resetGadNonGadMaster()">Reset</button></center></div>');
    }
    $("input").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });
}
//End create Form

//create Loan Type table
function fetchGadNonGadMasterList() {
    if (checkUserPrivelege(pvViewGadNongad)) {
        $("#gadnongadMasterTableListPanel").remove("");
        $("#gadnongadcolumnDiv").append("<div id='gadnongadMasterTableListPanel' class='panel panel-blue'/>");
        $("#gadnongadMasterTableListPanel").append("<div id='gadnongadMasterTableHeading' class='panel-heading' />");
        $("#gadnongadMasterTableHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>List of Gad NonGad Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colGadNongadList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#gadnongadMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colGadNongadList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colGadNongadList span").hasClass("glyphicon-minus-sign")) {
            $("#colGadNongadList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colGadNongadList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='gadnongadListPanelTableMainDiv' class = 'panel-body' />");
    $("#gadnongadListPanelTableMainDiv").append("<div id='gadnongadListPanelRow' class = 'row' />");
    $("#gadnongadListPanelTableMainDiv").append("<center><div  id='tablesuccessBefore'/></center>");
    $("#gadnongadListPanelTableMainDiv").append("<div id='gadnongadMastertableresponsiveDiv' class='table-responsive' />");
    $("#gadnongadMastertableresponsiveDiv").append('<table id="example1" class="table table-bordered">');

        //Start Header
        $("#example1").append("<thead><tr id='gadNonGadTableHeadId'>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Gazetted</th>");
        if (checkUserPrivelege(pvUpdateGadNongad)) {
            $("#gadNonGadTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteGadNongad)) {
            $("#gadNonGadTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>");
        }
        //End Header

        $.post(server_base_url + "hrms/common/Gazetted/View", {
            json: decodeURI(name)
        }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("gadnongadMastertableresponsiveDiv", "" + emptyListMessage + "<br /><br />");
            displayLargeErrorMessagesInCenterInRed("gadnongadMastertableresponsiveDiv", "" + emptyListMessage + "<br /><br />");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("gadnongadMastertableresponsiveDiv", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessagesInCenterInRed("gadnongadMastertableresponsiveDiv", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            // displaySmallErrorMessagesInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            //  displaySmallErrorMessagesInRed("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {

                var sno = 0;
                $("#example1").append("<tbody id='displayReligionTableBody' class='table-striped table-bordered' />");

            for (var i = data.length - 1; i >= 0; i--) {

                    sno++;
                    $("#displayReligionTableBody").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;' >" + data[i].gazitted + "</td>");
                    if (checkUserPrivelege(pvUpdateGadNongad)) {
                        $("#" + data[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updateGazetted('" + data[i]._id.$oid + "','" + encodeURI(data[i].gazitted) + "') class='anchor_edit'><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>");                    }
                    if (checkUserPrivelege(pvDeleteGadNongad)) {
                        $("#" + data[i]._id.$oid).append("<td><a href='javascript:void(0);'  onclick=deletePopUp('deleteGazetted','relationMasterTableListPanel','" + data[i]._id.$oid + "') class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");                    }
                }
                $('#example1').dataTable();
            }
        });
    }
}

//Start Validation
function gadnongadValidation() {
    var result = 1;
    gadnongadDisableButton();
    var gadnongadName = $("#gadnongadName").val().trim();

    if (gadnongadName == undefined || gadnongadName == null || gadnongadName == "") {
        gadnongadEnableButton();
        //  $("#gadnongadFormGroupDiv").addClass("form-group state-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please enter Gad-NonGad ");
        $("#loantypeName").focus();
        return false;
    }
//    if (gadnongadName != "") {
//        $("#pregsuccessBefore").text("");
//        if (!gadnongadName.match((alphaNumericPattern()))) {
//            gadnongadEnableButton();
//            //  $("#gadnongadFormGroupDiv").addClass("form-group state-error");
//            $("#gadnongadName").focus();
//            displaySmallErrorMessagesInRed("gadnongadError", "Please enter valid Gad non-Gad Name.");
//            result = 0;
//        }
//    }
    if (result != 0) {
        var buttonValue = $("#gadnongadSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            saveGazetted();
        } else if (buttonValue == updateButton) {
            update();
        }
    }
}
//End Validation


//Start Save Function
function  saveGazetted() {

    if (checkUserPrivelege(pvCreateGadNongad)) {
    var name = $("#gadnongadName").val().trim();
    var loginUserId = getUserSessionElement("userId");
    $.post(server_base_url + "hrms/common/Gazetted/Save", {
        name: name,
        loginUserId: loginUserId
    }).done(function(data) {

            if (data == fail) {
                gadnongadEnableButton();
            displayErrorMessages("pregsuccessBefore", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            gadnongadEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            gadnongadEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
            gadnongadEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            gadnongadEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        }
        else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function() {
                dispalyhrmsCommonLoanGadNonGadMaster();
            }, 1000);

        }
        else {
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function() {
                dispalyhrmsCommonLoanGadNonGadMaster();
            }, 4000);
        }
    });

    }
}

//End Save Function

//Start Delete Function
function deleteGazetted(id)
{
    if (checkUserPrivelege(pvDeleteGadNongad)) {
       
        deleteGazetted1(id);
    }

}
function deleteGazetted1(id) {

    if (checkUserPrivelege(pvDeleteGadNongad)) {
     var loginUserId = getUserSessionElement("userId");

    $.post(server_base_url + "hrms/common/Gazetted/Delete", {
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
            displayErrorMessages("tablesuccessBefore", " " + delete_map_messages, "");
            setTimeout(function() {
                $("#tablesuccessBefore").text("");
            }, 2100);
        } else {
            // dispalyhrmsCommonLoanGadNonGadMaster();
            displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
            // $("#tablesuccessBefore").append("<span style='color:green;'><center><strong>"+deleteMessage+"</strong></center></span><br><br>");
            setTimeout(function() {
                dispalyhrmsCommonLoanGadNonGadMaster();
            }, 2100);
        }
        setTimeout(function() {
            $("#tablesuccessBefore").text("");
        }, 4000);
    });

    }

}
//End Selete Function

//Start upDate Function
function  updateGazetted(id, name) {
    //createGadNonGadForm();
    //$("#gadnongadMasterTableListPanel").remove();
    //fetchGadNonGadMasterList();
    if (checkUserPrivelege(pvUpdateGadNongad)) {
        
        $("#pregsuccessBefore").text("");
        $("#gadnongadName").val(decodeURI(name));
    $("#displayReligionTableBody tr").css("background-color", "white");
    $("#displayReligionTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#gadnongadSaveandUpdateButton").text("Update");
    $("#gadnongadSaveandUpdateButton").val("update");
    $("#gadnongadResetButton").text("Back");
    $("#idValue").val(id);
    }
}
function update() {
    if (checkUserPrivelege(pvUpdateGadNongad)) {
    var name = $("#gadnongadName").val().trim();
    var id = $("#idValue").val();
    var loginUserId = getUserSessionElement("userId");


        $.post(server_base_url + "hrms/common/GAzetted/Update", {
            id: id,
        name: name,
        loginUserId: loginUserId
    }).done(function(data) {

        if (data == fail) {
            gadnongadEnableButton();
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            gadnongadEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {

            callSessionTimeout();
        } else if (data == statusException) {
            gadnongadEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            gadnongadEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function() {
                dispalyhrmsCommonLoanGadNonGadMaster();
            }, 1000);
        }
        else if (data != null) {
            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            setTimeout(function() {
                dispalyhrmsCommonLoanGadNonGadMaster();
            }, 4000);
        }

    });

    }
}
//End Update Function

//Start Reset Function
function resetGadNonGadMaster() {
    $("#gadnongadName").val("");
    $("#gadnongadSaveandUpdateButton").text("Save");
    $("#gadnongadSaveandUpdateButton").val("save");
    $("#gadnongadResetButton").text("Reset");
}
//End Reset Function

function gadnongadDisableButton() {
    $("#gadnongadSaveandUpdateButton").attr('disabled', true);
    $("#gadnongadResetButton").attr('disabled', true);
}
function gadnongadEnableButton() {
    $("#gadnongadSaveandUpdateButton").attr('disabled', false);
    $("#gadnongadResetButton").attr('disabled', false);
}