/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Start Display page
function dispalyhrmsCommonParentHeadMaster() {
    createParentHeadForm();
    fetchAllparentHeadMasterList();
}
//End Display page

function createParentHeadForm() {
    scrolupfunction();
    //  $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Common Master</a></label> >><label>Parent Head Master</label>');
    $("#dashboardTitleMainDiv").text("").append("HRMS");

    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>><label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> ><label>Parent Head Master</label>');


    $("#dashboardBodyMainDiv").text("").append('<div id="parentheadMainDiv" class="row"/>');
    $("#parentheadMainDiv").text("").append("<div id='parentheadcolumnDiv'class='col-lg-12'>");
    $("#parentheadcolumnDiv").append("<div id='parentheadpanelDiv' class='panel panel-blue'>");
    $("#parentheadpanelDiv").append("<div id='parentheadpanelHeadingDiv' class='panel-heading'>");
    $("#parentheadpanelHeadingDiv").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Parent Head Master</center>");
    $("#parentheadpanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='parentheadpanelBodyDiv' class='panel-body pan'>");
    $("#parentheadpanelBodyDiv").append("<div id='parentheadformDiv' class='form-horizontal'>");
    $("#parentheadformDiv").append("<div id='parentheadformBodyDiv' class='form-body pal'>");
    $("#parentheadformBodyDiv").append("<div id='parentheadRowPanel' class='row'>");
    $("#parentheadRowPanel").append("<center><div id='pregsuccessBefore'/></center>");
    $("#parentheadformBodyDiv").append('<div class="form-group" id="parentheadFormGroupDiv"><label for="parentheadName" class="col-lg-3 control-label">Parent Head<span class="require">*</span></label>')
    $("#parentheadFormGroupDiv").append('<div class="col-lg-9"><input id="parentheadName" name="parentheadName" type="text" placeholder="Parent Head " class="form-control" onkeyup=validateName("parentheadName","parentheadError")><span id="parentheadError" class="text-danger"></span></div>');
    $("#parentheadformBodyDiv").append('<center><input type="hidden" id="idValue"><button id="parentheadSaveandUpdateButton" value="save" onclick="parentheadValidation()" type="submit" class="btn btn-success bn">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\
    <button type="button" id="parentheadResetButton" class="btn btn-warning bn" onclick="resetParentHeadMaster()">Reset</button></center></div>');

}


//Start  Dispaly Table
function fetchAllparentHeadMasterList() {
    
    $("#parentheadMasterTableListPanel").remove("");
    
    $("#parentheadcolumnDiv").append("<div id='parentheadMasterTableListPanel' class='panel panel-blue'/>");
    $("#parentheadMasterTableListPanel").append("<div id='parentheadMasterTableHeading' class='panel-heading' />");
    $("#parentheadMasterTableHeading").append("<h4 id='parentheadMasterTableHeader' class='panel-title' />");
    $("#parentheadMasterTableHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Parent Head</center>");
    $("#parentheadMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='parentheadListPanelTableMainDiv' class = 'panel-body' />");
    $("#parentheadListPanelTableMainDiv").append("<div id='parentheadListPanelRow' class = 'row' />");
    $("#parentheadListPanelTableMainDiv").append("<center><div  id='tablesuccessBefore'/></center>");
    $("#parentheadListPanelTableMainDiv").append("<div id='parentheadMastertableresponsiveDiv' class='table-responsive' />");
    $("#parentheadMastertableresponsiveDiv").append('<table id="example1" class="table table-striped table-bordered table-hover">');

    //Start Header
    $("#example1").append("<thead class=''><tr>"

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Relation</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");
    //End Header
    $.get(server_base_url + "hrms/salary/ParentHead/ViewList", {
    }).done(function (bdata) {
        if (bdata == fail) {
            displayLargeErrorMessages("tablesuccessBefore", "" + failMessage + "<br /><br />");

        } else if (bdata == unauthorized) {
            displayLargeErrorMessages("tablesuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            ;
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayLargeErrorMessages("tablesuccessBefore", "" + statusExceptionMessage + "<br /><br />");
        } else if (bdata == null) {
            displaySmallErrorMessagesInRed("tablesuccessBefore", "No User available" + "<br/><br/>");
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#example1").append("<tbody id='displayParentHeadTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var objJson = {
                            Id: bdata[i]._id.$oid,
                            parentHead: bdata[i].parentHead
                        };
                        objJson = JSON.stringify(objJson);
                        $("#displayParentHeadTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].parentHead + "</td>"
                                + "<td> <a href='javascript:void(0);' onclick=updateparentHead('" + encodeURI(objJson) + "') class='anchor_edit' ><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>"
                                + "<td><a href='javascript:void(0);' onclick=deletePopUp('deleteparentHead','fetchAllparentHeadMasterList','" + bdata[i]._id.$oid + "') class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
                    }
                    $('#example1').append("</table>")
                   
                }
            }
        } $('#example1').dataTable();
    });
    setTimeout(function () {
        $("#tablesuccessBefore").text("");
    }, 2100);
}
//Start Delete  Function
function deleteparentHead(id) {
   // var result = confirm('Are you Sure?');
    //if (result) {
        var userID = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/salary/ParentHead/Delete", {
            Id: id,
            userid: userID
        }).done(function (data) {
            if (data == fail) {
                displaySmallErrorMessagesInRed("tablesuccessBefore", failMessage+ "<br/><br/>");
            } else if (data == unauthorized) {
                displaySmallErrorMessagesInRed("tablesuccessBefore", unauthorizedMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("tablesuccessBefore", statusExceptionMessage + "<br/><br/>");
            } else if (data == null) {
                displaySmallErrorMessagesInRed("tablesuccessBefore", "No User available" + "<br/><br/>");
            } else {
                displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
              //  $("#tablesuccessBefore").append("<span style='color:green;'><center><strong>" + deleteMessage + "</strong></center></span>");
                setTimeout(function () {
                     dispalyhrmsCommonParentHeadMaster();
                }, 4000);
            }
        });
   // }
}

//End Delete Function

//Start Validation Function
function parentheadValidation()
{
    var result = 1;

    var parentheadName = $("#parentheadName").val();
    parentheadDisableButton();
    if (parentheadName == undefined || parentheadName == null || parentheadName == "") {
        parentheadEnableButton();
        //$("#parentheadFormGroupDiv1").addClass("form-group state-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please enter Parent Head");
        $("#parentheadName").focus();
        return false;
    }
    
    if (result != 0) {
        $("#parentheadFormGroupDiv1").addClass("form-group");
        var buttonValue = $("#parentheadSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            saveParentHeadDetails();
        } else if (buttonValue == updateButton) {
            updateParentHeadDetails();
        }
    }

}
//End Validation Function

//Save Method
function saveParentHeadDetails() {

    var parentHead = $('#parentheadName').val();
    var objJson = {
        parentHead: parentHead
    };
    var userID = getUserSessionElement("userId");


    $.post(server_base_url + "hrms/salary/ParentHead/Save", {
        objJson: JSON.stringify(objJson),
        userid: userID
    }).done(function (data) {
        if (data == fail) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", failMessage + "<br/><br/>");
            parentheadEnableButton();
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
            parentheadEnableButton();
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
            parentheadEnableButton();
        } else if (data == null) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");
        } else {
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
              //  $("#tablesuccessBefore").append("<span style='color:green;'><center><strong>" + deleteMessage + "</strong></center></span>");
                setTimeout(function () {
                     dispalyhrmsCommonParentHeadMaster();
                }, 4000);

        }
    });
}
//End Save Function

//Start Disable and Enable Function 
function parentheadDisableButton() {

    $("#parentheadSaveandUpdateButton").attr('disabled', true);
    $("#parentheadResetButton").attr('disabled', true);
}
function parentheadEnableButton() {
    $("#parentheadSaveandUpdateButton").attr('disabled', false);
    $("#parentheadResetButton").attr('disabled', false);
}
//End Disable and Enable Function

//Start Reset Buttion
function resetParentHeadMaster() {
    $("#parentheadName").val("");

    $("#parentheadSaveandUpdateButton").text("Save");
    $("#parentheadSaveandUpdateButton").val("save");
    $("#parentheadResetButton").text("Reset");
    
}

//End Reset Function

//Update Method

function updateparentHead(obj) {
    $("#pregsuccessBefore").text("");
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    //dispalyhrmsCommonParentHeadMaster();
    $("#parentheadName").val(obj.parentHead);
    $("#parentheadSaveandUpdateButton").text("Update");
    $("#parentheadSaveandUpdateButton").val("update");
    $("#parentheadResetButton").text("Back");
    $("#idValue").val(obj.Id);
}
function updateParentHeadDetails() {
    var Id = $('#idValue').val();
    var parentHead = $('#parentheadName').val();
    var objJson = {
        parentHead: parentHead
    }
    var userID = getUserSessionElement("userId");

    $.post(server_base_url + "hrms/salary/ParentHead/Update", {
        objJson: JSON.stringify(objJson),
        Id: Id,
        userid: userID
    }).done(function (data) {
        if (data == fail) {
            displaySmallErrorMessages("pregsuccessBefore", failMessage+ "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessages("pregsuccessBefore", "No User available" + "<br/><br/>");
        } else {
            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
              //  $("#tablesuccessBefore").append("<span style='color:green;'><center><strong>" + deleteMessage + "</strong></center></span>");
                setTimeout(function () {
                     dispalyhrmsCommonParentHeadMaster();
                }, 4000);

        }
    });
}