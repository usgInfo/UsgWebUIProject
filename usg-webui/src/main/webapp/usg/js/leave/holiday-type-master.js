/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayHolidayTypeMaster(divId) {
    if (checkUserPrivelege(pvCreateHolidayType)) {
        createHolidaytypeMaster(divId);
    }
    displayHolidayTypeTable();
}

function createHolidaytypeMaster(divId) {
    //Start Title Bar
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> >> <label>Holiday Type Master</label>');
    //End  Title Bar

    //Start outbox div 
    $("#" + divId).text("").append("<div id='holidaytypeMainDivId'/>");
    $("#holidaytypeMainDivId").text("").append("<div id='holidaytypemainTabMenu'/>");
    $("#holidaytypemainTabMenu").append("<div id='holidaytypetableHeader'/>");
    $("#holidaytypetableHeader").append("<div id='holidaytypeFirstPanel' class='panel panel-blue' />");
    $("#holidaytypeFirstPanel").append("<div id='holidaytypefirstPanelHeading' class='panel-heading' />");
    $("#holidaytypefirstPanelHeading").append("<h4 id='holidaytypetableHeader1' class='panel-title' />");

    $("#holidaytypetableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Holiday Type Master</center>");
    $("#holidaytypetableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#holidaytypeFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");

    addToggleToId('colMaritial1', 'collapseOne2');

    $("#collapseOne2").append("<div id='holidaytypepanelMainBody' class = 'panel-body' />");
    $("#holidaytypepanelMainBody").append("<div id='holidaytypepanelRow' class='row' />");
    $("#holidaytypepanelRow").append("<center><div id='pregsuccessBefore'></div></center>");
    $("#holidaytypepanelRow").append("<div id='holidaytypeFieldGroup' class='form-group' />");
    //End outbox div 

    //Form
    //department 

    getLabelInputInRow("holidaytypeFieldGroup", "Holiday Type", "required", "Row0", "Row0Col1", "holidaytype", "onkeypress='return validatealphanumeric(event)'");

    $("#holidaytypeFieldGroup").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue'><button type='button'  id='holidaytypeSaveandUpdateButton' value='save' class='btn btn-success mr5'  onclick='holidaytypeValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
    <button type='button' id='holidaytypeResetButton' onclick='wipeAllHolidayTypementData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");

    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });


    $("textarea").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });


}

function displayHolidayTypeTable() {
    $("#holidaytypeTableMainDiv").remove();

    $("#holidaytypemainTabMenu").append("<div id='holidaytypeTableMainDiv'/>");
    $("#holidaytypeTableMainDiv").append("<div id='holidaytypeMasterTableListPanel' class='panel panel-blue'/>");
    $("#holidaytypeMasterTableListPanel").append("<div id='holidaytypeMasterTableHeading' class='panel-heading' />");
    $("#holidaytypeMasterTableHeading").append("<h4 id='holidaytypeMasterTableHeader' class='panel-title' />");

    $("#holidaytypeMasterTableHeader").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Holiday Type(s)</center>");
    $("#holidaytypeMasterTableHeader").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#holidaytypeMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");

    addToggleToId('colMaritial2', 'collapseOne3');

    $("#collapseOne3").append("<div id='holidaytypeListPanelTableMainDiv' class = 'panel-body' />");
    $("#holidaytypeListPanelTableMainDiv").append("<div id='holidaytypeListPanelRow' class = 'row' />");
    $("#holidaytypeListPanelTableMainDiv").append("<center><div  id='tablesuccessBefore'/></center>");
    $("#holidaytypeListPanelTableMainDiv").append("<div id='holidaytypeMastertableresponsiveDiv' class='table-responsive' />");
    $("#holidaytypeMastertableresponsiveDiv").append('<table id="example1" class="table table-bordered">');

    //Start Header
    $("#example1").append("<thead><tr id='tableHeadID'>"

            + " <th style='min-width:1%;width:80px;'> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Holiday Type</th>");

    $("#tableHeadID").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");

    $("#tableHeadID").append("<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>");

    $("#tableHeadID").append("</tr></thead>");

    //End Header
    $.get(server_base_url + "/leavemanagement/holidaytype/ViewAll", {
    }).done(function (pdata) {


        if (JSON.parse(pdata) == fail) {

            $("#displaycateTableBody").append('<tr class="odd"><td valign="top" colspan="4" class="dataTables_empty">' + unauthorizedMessage + '</td></tr>');
        } else if (JSON.parse(pdata) == unauthorized) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
        } else if (JSON.parse(pdata) == invalidSession) {
            callSessionTimeout();
        } else if (JSON.parse(pdata) == statusException) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + NoDataFound + "<br /><br />");

        } else {

            var data = JSON.parse(pdata);
            if (data != null) {
                if (data.length > 0) {
                    var sno = 0;
                    $("#example1").append("<tbody id='HolidayTypeMasterTableBody' />");

                    for (var i = data.length - 1; i >= 0; i--) {
                        sno++;
                        var obj = {
                            commonMasterId: data[i]._id.$oid,
                            HolidayType: data[i].HolidayType,
                            holidayType: data[i].holidayType,
                            displayOrder: data[i].displayOrder,
                            remarks: data[i].remarks
                        };

                        obj = JSON.stringify(obj);
                        $("#HolidayTypeMasterTableBody").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"

                                + "<td style='cursor:pointer;'>" + data[i].holidayType + "</td>"
                                + "<td> <a href='javascript:void(0);' onclick=updateHolidaytypeEdit('" + encodeURI(obj) + "','" + data[i]._id.$oid + "') class='anchor_edit'><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>"
                                + "<td><a href='javascript:void(0);' onclick=checkUserAuthorization('" + data[i]._id.$oid + "') class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");

//                        $("#HolidayTypeMasterTableBody tr" + " #" + data[i]._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
                    }
                }
            }

        }

        $("#HolidayTypeMasterTableBody tr").css("background-color", "white");

        $('#example1').dataTable();
    });

}
//End Display table

function checkUserAuthorization(id) {

    if (!checkUserPrivelege(pvDeleteHolidayType)) {
        alertPopUpMessage("You are not authorised");
        return;
    } else {
        deletePopUp('deleteHolidayTypeMaster', 'relationMasterTableListPanel', id);
    }
}

//Start validation 
function holidaytypeValidation() {

    if (!checkUserPrivelege(pvCreateHolidayType)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    var result = 1;
    holidaytypeDisableButton();
    var holidaytypeName = $("#holidaytype").val().trim();

    if (holidaytypeName == undefined || holidaytypeName == null || holidaytypeName == "") {
        holidaytypeEnableButton();
        //$("#holidaytypeFieldGroup").addClass("form-group state-error");
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
        $("#holidaytype").focus();
        return false;
    }

    if (result != 0) {
        var buttonValue = $("#holidaytypeSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            saveHolidayTypeMaster();
        } else if (buttonValue == updateButton) {
            updateHolidayTypeMasterDetails();
        }
    }
}
//End Validation

//Start Save Function
function saveHolidayTypeMaster() {
    var holidayType = $('#holidaytype').val().trim();
    var HolidayTypeMasterjson = {
        holidayType: holidayType,
        userid: getUserSessionElement("userFname"),
    };
    $.post(server_base_url + "leavemanagement/holidaytype/Save", {
        obj: JSON.stringify(HolidayTypeMasterjson),
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            holidaytypeEnableButton();
            displayErrorMessages("pregsuccessBefore", failMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            holidaytypeEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            holidaytypeEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
            holidaytypeEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == null) {
            holidaytypeEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "<br/><br/>");
        } else if (JSON.parse(data) === duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function () {
                displayHolidayTypeMaster();
            }, 1000);

        } else {
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            // $("#tablesuccessBefore").append("<span style='color:green;'><center><strong>" + deleteMessage + "</strong></center></span><br><br>");
            setTimeout(function () {
                displayHolidayTypeMaster("dashboardBodyMainDiv");
            }, 2100);


        }
    });
}

//End Save Function
//Start update Function
function updateHolidayTypeMasterDetails() {
    var holidayType = $('#holidaytype').val();
    var id = $("#idValue").val();
    var updateHolidayTypeMasterjson = {
        holidayType: holidayType,
    };
    $.post(server_base_url + "leavemanagement/holidaytype/Update", {
        obj: JSON.stringify(updateHolidayTypeMasterjson),
        objId: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        if (data === fail) {
            holidaytypeEnableButton();
            displayErrorMessages("pregsuccessBefore", "" + failMessage + "");
        } else if (data === unauthorized) {
            holidaytypeEnableButton();
            displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
        } else if (data === invalidSession) {
            callSessionTimeout();
        } else if (data === statusException) {
            holidaytypeEnableButton();
            displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "");
        } else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function () {
                displayHolidayTypeMaster();
            }, 1000);

        } else {

            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            setTimeout(function () {
                displayHolidayTypeMaster("dashboardBodyMainDiv");
            }, 2100);
        }
    });
}

function  updateHolidaytypeEdit(obj, id) {
    if (!checkUserPrivelege(pvUpdateHolidayType)) {
        alertPopUpMessage("You are not authorised");
        return;
    }
    $("#pregsuccessBefore").text("");
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#holidaytype").val(obj.holidayType);
    $("#HolidayTypeMasterTableBody tr").css("background-color", "white");
    $("#HolidayTypeMasterTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#panelRow1").text("").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue'><button type='button'  id='holidaytypeSaveandUpdateButton' value='update' class='btn btn-success mr5'  onclick='holidaytypeValidation()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
    <button type='button' id='holidaytypeResetButton' onclick='displayHolidayTypeMaster()' class='btn btn-warning mr5' name='reset' value='back'>Back</button></center></div>");

    $("#idValue").val(id);
}
//End update Function
//Start delete Function

function deleteHolidayTypeMaster(id) {
    //if (confirm("Are you sure?")) {
    // $(this).closest('tr').remove();
    deleteHolidayType(id);
    // }
}
function deleteHolidayType(id) {
    $.post(server_base_url + "/leavemanagement/holidaytype/Delete", {
        id: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            //   natureEnableButton();
            displaySmallErrorMessagesInRed("tablesuccessBefore", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            // natureEnableButton();
            displaySmallErrorMessagesInRed("tablesuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            //  natureEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
            //  natureEnableButton();
            displaySmallErrorMessagesInRed("tablesuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == null) {
            //natureEnableButton();
            displaySmallErrorMessagesInRed("tablesuccessBefore", "No User available" + "<br/><br/>");
        } else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("tablesuccessBefore", "" + delete_map_messages, "");
            setTimeout(function () {
                displayHolidayTypeMaster("dashboardBodyMainDiv");
            }, 3000);
        } else {
            //$("#holidaytypeTableMainDiv").empty();

            //displayHolidayTypeTable();
            displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
            // $("#tablesuccessBefore").append("<span style='color:green;'><center><strong>" + deleteMessage + "</strong></center></span><br><br>");
            setTimeout(function () {
                displayHolidayTypeMaster("dashboardBodyMainDiv");
            }, 2100);
        }
    });

}

//End Delete Function 

//start enable and disable  function 
function holidaytypeDisableButton() {
    $("#holidaytypeSaveandUpdateButton").attr('disabled', true);
    $("#holidaytypeResetButton").attr('disabled', true);
}
function holidaytypeEnableButton() {
    $("#holidaytypeSaveandUpdateButton").attr('disabled', false);
    $("#holidaytypeResetButton").attr('disabled', false);
}
//End enable and disable function

//Start reset Button 
function wipeAllHolidayTypementData() {
    $('#holidaytype').val('');
    $("#pregsuccessBefore").text("");
    holidaytypeEnableButton();
    $("#holidaytypeSaveandUpdateButton").text("Save");
    $("#holidaytypeSaveandUpdateButton").val("save");
    $("#holidaytypeResetButton").text("Reset");
}
//End Reset Button