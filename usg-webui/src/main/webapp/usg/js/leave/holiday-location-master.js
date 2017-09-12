/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayHolidayLocationMaster(divid) {
    if (checkUserPrivelege(pvViewHolidayLocationMaster)) {
        createHolidayLoactionForm(divid);
        displayHolidayLocationTable();
    }
}

//Start create form Function
function createHolidayLoactionForm(divId) {
    //Start Title Bar
    $("#dashboardTitleMainDiv").text("").append("Leave Management");
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">LeaveManagement</a></label>><label><a href="javascript:leaveManagementMasterTabs()">Holiday Location</label>');
    //End  Title Bar

    //Start outbox div 
    $("#" + divId).text("").append("<div id='holidaylocationMainDivId' />");
    $("#holidaylocationMainDivId").text("").append("<div id='holidaylocationmainTabMenu'/>");
    $("#holidaylocationmainTabMenu").append("<div id='holidaylocationtableHeader'/>");
    $("#holidaylocationtableHeader").append("<div id='holidaylocationFirstPanel' class='panel panel-blue' />");
    $("#holidaylocationFirstPanel").append("<div id='holidaylocationfirstPanelHeading' class='panel-heading' />");
    $("#holidaylocationfirstPanelHeading").append("<h4 id='holidaylocationtableHeader1' class='panel-title' />");
    $("#holidaylocationtableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Holiday Location Mater</center>");
    $("#holidaylocationFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='holidaylocationpanelMainBody' class = 'panel-body' />");
    $("#holidaylocationpanelMainBody").append("<div id='holidaylocationpanelRow' class='row' />");
    $("#holidaylocationpanelRow").append("<center><div id='pregsuccessBefore'></center></div>");
    $("#holidaylocationpanelRow").append("<div id='holidaylocationFieldGroup' class='form-group' />");
    //End outbox div 




    getLabelInputInRowwithPlaceHolder("holidaylocationFieldGroup", "Holiday Location", "required", "Row1", "Row0Col2", "holidaylocation", "onkeypress='return validatealphanumeric(event)'");

    getLabelInputInRowwithPlaceHolder("holidaylocationFieldGroup", "Display Order", "required", "Row2", "Row0Col3", "order", "onkeypress='return validateNumeric(event)'");

    getLabeltextareaInRow("holidaylocationFieldGroup", "Remarks", "", "Row3", "Row0Col4", "remarks", "");

    $("#holidaylocationFieldGroup").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue'><button type='button'  id='holidaylocationSaveandUpdateButton' value='save' class='btn btn-success mr5'  onclick='holidaylocationValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
    <button type='button' id='holidaylocationResetButton' onclick='wipeAllHolidayLocationmentData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
}

function displayHolidayLocationTable() {
    $("#holidaylocationTableMainDiv").remove("");

    $("#holidaylocationmainTabMenu").append("<div id='holidaylocationTableMainDiv'/>");
    $("#holidaylocationTableMainDiv").append("<div id='holidaylocationMasterTableListPanel' class='panel panel-blue'/>");
    $("#holidaylocationMasterTableListPanel").append("<div id='holidaylocationMasterTableHeading' class='panel-heading' />");
    $("#holidaylocationMasterTableHeading").append("<h4 id='holidaylocationMasterTableHeader' class='panel-title' />");
    $("#holidaylocationMasterTableHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Holiday Location(s)</center>");
    $("#holidaylocationMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='holidaylocationListPanelTableMainDiv' class = 'panel-body' />");
    $("#holidaylocationListPanelTableMainDiv").append("<div id='holidaylocationListPanelRow' class = 'row' />");
    $("#holidaylocationListPanelTableMainDiv").append("<center><div  id='tablesuccessBefore'/></center>");
    $("#holidaylocationListPanelTableMainDiv").append("<div id='holidaylocationMastertableresponsiveDiv' class='table-responsive' />");
    $("#holidaylocationMastertableresponsiveDiv").append('<table id="example1" class="table table-bordered">');

    //Start Header
    $("#example1").append("<thead><tr>"

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Display Order</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");

    //End Header
    $.get(server_base_url + "/leavemanagement/holidaylocationmaster/View", {
    }).done(function (pdata) {
        if (JSON.parse(pdata) === fail) {
            displayErrorMessages("pregsuccessBefore", "" + failMessage + "");

        } else if (JSON.parse(pdata) === unauthorized) {
            displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");

        } else if (JSON.parse(pdata) === invalidSession) {
            callSessionTimeout();
        } else if (JSON.parse(pdata) === statusException) {
            displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "");
        } else {

            var data = JSON.parse(pdata);
            if (data !== null) {
                if (data.length > 0) {
                    var sno = 0;
                    $("#example1").append("<tbody id='holidayLocationMasterTableBody'/>");

                    for (var i = data.length - 1; i >= 0; i--) {
                        sno++;
                        var obj = {
                            holidayLocationMasterId: data[i]._id.$oid,
                            holidayLocation: data[i].holidayLocation,
                            displayOrder: data[i].displayOrder,
                            remarks: data[i].remarks,
                        }

                        obj = JSON.stringify(obj);
                        $("#holidayLocationMasterTableBody").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].holidayLocation + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].displayOrder + "</td>"
                                + "<td> <a href='javascript:void(0);' onclick=updateLocationHolidayMaster('" + encodeURI(obj) + "','" + data[i]._id.$oid + "') class='anchor_edit'><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>"
                                + "<td><a href='javascript:void(0);' onclick=checkUserAuthorisation('" + data[i]._id.$oid + "') class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
                    }

                }
            }

        }
        $("#example1").dataTable();
    });
}

function checkUserAuthorisation(id) {

    if (!checkUserPrivelege(pvDeleteHolidayLocationMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    deletePopUp('deleteLocationHolidayMaster', 'relationMasterTableListPanel', id);

}

//Start validation 
function holidaylocationValidation() {
    var result = 1;
    holidayLocationDisableButton();

    var holidaylocation = $("#holidaylocation").val();
    var order = $("#order").val();

    if ((holidaylocation === undefined || holidaylocation === null || holidaylocation === "") && (order === undefined || order === null || order === "")) {
        holidayLocationEnableButton();
        //$("#holidaytypeFieldGroup").addClass("form-group state-error");
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
        return false;
    }
   

    if (result !== 0) {
        var buttonValue = $("#holidaylocationSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue === saveButton) {

            saveholidaysLocationMaster();
        } else if (buttonValue === updateButton) {
            updateholidaysLocationMaster();
        }
    }
}
function updateLocationHolidayMaster(obj, id) {

    if (!checkUserPrivelege(pvUpdateHolidayLocationMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    $("#pregsuccessBefore").text("");
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $('#holidaylocation').val(obj.holidayLocation);
    $('#order').val(obj.displayOrder);

    $('#remarks').val(obj.remarks);

    viewHolidayType(obj.holidayType);
    $("#holidaylocationSaveandUpdateButton").text("Update");
    $("#holidaylocationSaveandUpdateButton").val("update");
    $("#holidaylocationResetButton").text("Back");
    $("#idValue").val(id);

    $("#holidayLocationMasterTableBody tr").css("background-color", "white");
    $("#holidayLocationMasterTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");

}
function updateholidaysLocationMaster() {
    var holidayLocation = $("#holidaylocation").val();
    var displayOrder = $("#order").val();
    var remarks = $("#remarks").val();
    var id = $("#idValue").val();


    var obj = {
        holidayLocation: holidayLocation,
        displayOrder: displayOrder,
        remarks: remarks
    };
    obj = JSON.stringify(obj);


    $.post(server_base_url + "leavemanagement/holidaylocationmaster/Update", {
        obj: obj,
        objId: id
    }).done(function (data) {
        if (data == fail) {
            holidayLocationEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + failMessage + "<br /><br />");
            // displaySmallErrorMessagesInRed("pregsuccessBefore", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized) {
            holidayLocationEnableButton();
            //displaySmallErrorMessagesInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            holidayLocationEnableButton();
            // displaySmallErrorMessagesInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
        } else {

            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            setTimeout(function () {
                displayHolidayLocationMaster("dashboardBodyMainDiv");
            }, 2100);


        }
    });
}
//End Validation
function saveholidaysLocationMaster() {

    if (!checkUserPrivelege(pvCreateHolidayLocationMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    var holidayLocation = $("#holidaylocation").val();
    var displayOrder = $("#order").val();
    var remarks = $("#remarks").val();
    var HolidayLocationMasterjson = {
        holidayLocation: holidayLocation,
        displayOrder: displayOrder,
        remarks: remarks
    };
    HolidayLocationMasterJsonObj = JSON.stringify(HolidayLocationMasterjson);


    $.post(server_base_url + "leavemanagement/holidaylocationmaster/Save", {
        obj: HolidayLocationMasterJsonObj
    }).done(function (data) {
        if (data == fail) {
            holidayLocationEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized) {
            holidayLocationEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            holidayLocationEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
        } else {
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+updateMessage+"</strong></center><br><br></span>");
            setTimeout(function () {
                displayHolidayLocationMaster("dashboardBodyMainDiv");
            }, 2100);

        }
    });
}
//-------------------------------------------Delete-------------------------------------------------------------
function deleteLocationHolidayMaster(id) {
    // if (confirm("Are you sure?")) {
    // $(this).closest('tr').remove();
    deleteHolidayLocation(id);
    //}
}
function deleteHolidayLocation(id) {
    $.post(server_base_url + "leavemanagement/holidaylocationmaster/Delete", {
        id: id
    }).done(function (data) {
        if (data == fail) {

            displaySmallErrorMessagesInRed("tablesuccessBefore", "Invalid username / password" + "<br/><br/>");
            //$("#tablesuccessBefore").append("<span style='color:red;'><center><strong>Invalid username / password</strong></center></span><br><br>");
        } else if (data == unauthorized) {
            //  $("#tablesuccessBefore").append("<span style='color:red;'><center><strong>'" + unauthorizedMessage + "'</strong></center></span><br><br>");
            displaySmallErrorMessagesInRed("tablesuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            // natureEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
            //natureEnableButton();
            displaySmallErrorMessagesInRed("tablesuccessBefore", statusExceptionMessage + "<br/><br/>");
            // $("#tablesuccessBefore").append("<span style='color:red;'><center><strong>'" + statusExceptionMessage + "'</strong></center></span><br><br>");
        } else if (data == null) {
            // natureEnableButton();
            displaySmallErrorMessagesInRed("tablesuccessBefore", "No User available" + "<br/><br/>");
            // $("#tablesuccessBefore").append("<span style='color:red;'><center><strong>No User available</strong></center></span><br><br>");
        } else {
            displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
            //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+updateMessage+"</strong></center><br><br></span>");
            setTimeout(function () {
                displayHolidayLocationMaster("dashboardBodyMainDiv");
            }, 2100);
        }


    });
}

//start enable and disable  function 
function holidayLocationDisableButton() {
    $("#holidaylocationSaveandUpdateButton").attr('disabled', true);
    $("#holidaylocationResetButton").attr('disabled', true);
}
function holidayLocationEnableButton() {
    $("#holidaylocationSaveandUpdateButton").attr('disabled', false);
    $("#holidaylocationResetButton").attr('disabled', false);
}
//End enable and disable function

//Start reset Button 
function wipeAllHolidayLocationmentData() {

    $("#pregsuccessBefore").text("");
    $("#holidaylocation").val('');
    $("#order").val('');
    $("#remarks").val('');
    $("#holidaylocationErr").text("");
    $("#orderErr").text("");
    $("#pregsuccessBefore").text("");
    holidayLocationEnableButton();
    $("#holidaylocationSaveandUpdateButton").text("save");
    $("#holidaylocationSaveandUpdateButton").val("save");
    $("holidaylocationResetButton").text("Reset");
}
//End Reset Button