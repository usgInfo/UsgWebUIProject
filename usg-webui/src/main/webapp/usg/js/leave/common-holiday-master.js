/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Start Display page start
var displayOrder = [];
function displayCommonHolidaysMaster(divid) {

    if (checkUserPrivelege(pvViewCommonHolidayMaster)) {
        createCommonHolidayForm(divid);
        displayCommonHolidayTable();
    }
}
//End Display page

//Start create form Function
function createCommonHolidayForm(divId) {
//Start Title Bar
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> >> <label>Common Holidays Master</label>');
    //End  Title Bar

    //Start outbox div 
    $("#" + divId).text("").append("<div id='commonholidayeMainDivId' />");
    $("#commonholidayeMainDivId").text("").append("<div id='commonholidayemainTabMenu'/>");
    $("#commonholidayemainTabMenu").append("<div id='commonholidayetableHeader'/>");
    $("#commonholidayetableHeader").append("<div id='commonholidayeFirstPanel' class='panel panel-blue' />");
    $("#commonholidayeFirstPanel").append("<div id='commonholidayefirstPanelHeading' class='panel-heading' />");
    $("#commonholidayefirstPanelHeading").append("<h4 id='commonholidayetableHeader1' class='panel-title' />");

    $("#commonholidayetableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Common Holidays Master</center>");
    $("#commonholidayetableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#commonholidayeFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");

    addToggleToId("colMaritial1", "collapseOne2");

    $("#collapseOne2").append("<div id='commonholidayepanelMainBody' class = 'panel-body' />");
    $("#commonholidayepanelMainBody").append("<div id='commonholidayepanelRow' class='row' />");
    $("#commonholidayepanelRow").append("<center><div id='pregsuccessBefore'></div></center>");
    $("#commonholidayepanelRow").append("<div id='commonholidayeFieldGroup' class='form-group' />");
    //End outbox div 

    getLabelDropDownInRow("commonholidayeFieldGroup", "Holiday Type", "required", "Row0", "Row0Col1", "holidaytype", "");
    getLabelInputInRowwithPlaceHolder("commonholidayeFieldGroup", "Common Holiday", "required", "Row1", "Row0Col2", "commonholiday", "onkeypress='return acceptAlphanumeric(event)'");
    getLabelInputInRowwithPlaceHolder("commonholidayeFieldGroup", "Display Order", "required", "Row2", "Row0Col3", "order", "onkeypress='return validateNumber(event)' maxlength=10");
    getLabeltextareaInRow("commonholidayeFieldGroup", "Remarks", "", "Row3", "Row0Col4", "remarks", "");
    viewHolidayType("");
    $("#commonholidayeFieldGroup").append("<div id='panelRow1' class='row' />");

    $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue'><button type='button'  id='commonholidaySaveandUpdateButton' value='save' class='btn btn-success mr5'  onclick='commonholidayValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
    <button type='button' id='commonholidayResetButton' onclick='wipeAllCommonHolidaymentData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });


    $("textarea").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

}
function viewHolidayType(name) {
    $.get(server_base_url + "/leavemanagement/holidaytype/ViewAll", {
    }).done(function (pdata) {
        var data = JSON.parse(pdata);
        if (data != null) {

            $("#holidaytype").text("").append("<option value='0' selected disabled>---- Select Holiday Type ----</option>");
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (name === data[i].holidayType) {

                        $("#holidaytype").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].holidayType + "</option>");
                    } else {
                        $("#holidaytype").append("<option  value='" + data[i]._id.$oid + "'>" + data[i].holidayType + "</option>");
                    }

                }
            }
        }
    });
}

//End create form function

function displayCommonHolidayTable() {
    $("#commonholidayTableMainDiv").remove("");

    $("#commonholidayemainTabMenu").append("<div id='commonholidayTableMainDiv'/>");
    $("#commonholidayTableMainDiv").append("<div id='commonholidayMasterTableListPanel' class='panel panel-blue'/>");
    $("#commonholidayMasterTableListPanel").append("<div id='commonholidayMasterTableHeading' class='panel-heading' />");
    $("#commonholidayMasterTableHeading").append("<h4 id='commonholidayMasterTableHeader' class='panel-title' />");

    $("#commonholidayMasterTableHeader").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Common Holiday(s)</center>");
    $("#commonholidayMasterTableHeader").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#commonholidayMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");

    addToggleToId("colMaritial2", "collapseOne3");

    $("#collapseOne3").append("<div id='commonholidayListPanelTableMainDiv' class = 'panel-body' />");
    $("#commonholidayListPanelTableMainDiv").append("<div id='commonholidayListPanelRow' class = 'row' />");
    $("#commonholidayListPanelRow").append("<div class='tab-pane' id='viewCommonHolidayList'/>");
    $("#commonholidayListPanelRow").append("<div id='ErrorMessageDiv1'/>");
    $("#commonholidayListPanelTableMainDiv").append("<center><div  id='tablesuccessBefore'/></center>");
    $("#commonholidayListPanelTableMainDiv").append("<div id='commonholidayMastertableresponsiveDiv' class='table-responsive' />");
    $("#commonholidayMastertableresponsiveDiv").append('<table id="example1" class="table table-bordered">');
    //Start Header
    $("#example1").append("<thead class=''><tr>"

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Common Holiday</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Holiday Type</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Display Order</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");
    //End Header

    $.get(server_base_url + "leavemanagement/commonholidaysmaster/FetchAll", {
    }).done(function (pdata) {
        pdata = JSON.parse(pdata);
        if (pdata == "") {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + noDataAvailable + "");
        }
        if (pdata === fail) {
            displayErrorMessages("tablesuccessBefore", "" + noDataAvailable + "");
            displayErrorMessages("tablesuccessBefore", "" + noDataAvailable + "");
        } else if (pdata === unauthorized) {
            displayErrorMessages("tablesuccessBefore", "" + unauthorizedMessage + "");
            displayErrorMessages("tablesuccessBefore", "" + unauthorizedMessage + "");
        } else if (pdata === invalidSession) {
            callSessionTimeout();
        } else if (pdata === statusException) {
            displayErrorMessages("tablesuccessBefore", "" + statusExceptionMessage + "");
        } else {

            var data = pdata;
            if (data !== null) {

                displayOrder.pop();
                if (data.length > 0) {
                    var sno = 0;
                    $("#example1").append("<tbody id='commonHolidaysMasterTableBody'/>");
//                    for (var i = data.length - 1; i >= 0; i--) {
                    for (var i = 0; i < data.length; i++) {
                        sno++;
                        displayOrder.push(data[i].displayOrder);
                        var obj = {
                            commonMasterId: data[i].id,
                            commonHoliday: data[i].commonHoliday,
                            holidayType: data[i].holidayType,
                            displayOrder: data[i].displayOrder,
                            remarks: data[i].remarks,
                        }

                        obj = JSON.stringify(obj);
                        $("#commonHolidaysMasterTableBody").append("<tr id='" + data[i].id + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].commonHoliday + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].holidayType + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].displayOrder + "</td>"
                                + "<td> <a href='javascript:void(0);' onclick=updateCommonHolidayMaster('" + encodeURI(obj) + "','" + data[i].id + "') class='anchor_edit'><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>"
                                + "<td><a href='javascript:void(0);' onclick=isAuthorisedToDelete('" + data[i].id + "') class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
                    }
                    $("#example1").dataTable();

                }
            }

        }

    });
}

function isAuthorisedToDelete(id) {

    if (!checkUserPrivelege(pvDeleteCommonHolidayMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    deletePopUp('deleteCommonHolidayMaster', 'relationMasterTableListPanel', id);
}

//Start validation 
function commonholidayValidation() {

    if (!checkUserPrivelege(pvCreateCommonHolidayMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    var result = 1;
    $("#holidaytypeErr").text('');
    $("#commonholidayErr").text('');
    $("#orderErr").text('');
    var holidaytypeName = $("#holidaytype").val();
    var commonholiday = $("#commonholiday").val();
    var order = $("#order").val();
    //alert(order);
    if (preValidation(holidaytypeName) || preValidation(commonholiday) || preValidation(order))
    {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
        result = 0;
    }

//    var commonHolidayValidation = validateAlphabets('commonholiday', 'commonholidayErr');
    if (order !== undefined && order !== null && order !== "")
    {
        if (!order.match((numberValidation()))) {
            //addSomeClass("pensionArrearOrderInputGroupDiv", "has-error");
            displaySmallErrorMessages("orderErr", "Only Numbers are allowed.");
            result = 0;
        }

    }

    if (commonholiday !== undefined && commonholiday !== null && commonholiday !== "")
    {
        if (!commonholiday.match((alphaNumericPatterns()))) {
            //   addSomeClass("pensionArrearOrderInputGroupDiv", "has-error");
            displaySmallErrorMessages("commonholidayErr", "Only alphabets and numbers are allowed.");
            result = 0;
        }

    }

    if (result != 0) {
        var buttonValue = $("#commonholidaySaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
//            if (commonHolidayValidation) {
            saveCommonHolidaysMaster();
//        }
        } else if (buttonValue == updateButton) {
            updateCommonHolidaysMaster();
        }
    }
}
//End Validation
function saveCommonHolidaysMaster() {
    var holidayType = $('#holidaytype').val();
    var commonHoliday = $('#commonholiday').val();
    var order = $('#order').val();
    var remarks = $('#remarks').val();
    var commonHolidaysMasterjson = {
        holidayType: holidayType,
        commonHoliday: commonHoliday,
        displayOrder: order,
        remarks: remarks
    };
    commonHolidaysMasterJson = JSON.stringify(commonHolidaysMasterjson);
    $.post(server_base_url + "/leavemanagement/commonholidaysmaster/Save", {
        commonHolidaysMaster: commonHolidaysMasterJson,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        data = JSON.parse(data);

        if (data === fail) {
            commonHolidayEnableButton();
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
        } else if (data === unauthorized) {
            commonHolidayEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data === invalidSession) {
            commonHolidayEnableButton();
            callSessionTimeout();
        } else if (data === statusException) {
            commonHolidayEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data === null) {
            commonHolidayEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function () {
                displayCommonHolidaysMaster("dashboardBodyMainDiv");
            }, 1000);

        } else {
            displaySuccessMessages("pregsuccessBefore", successMessage, "");

        }

        setTimeout(function () {
            displayCommonHolidaysMaster("dashboardBodyMainDiv");
        }, 2100);
        scrolupfunction();

    });

    commonHolidayEnableButton();
}


//----------------------------------------Start Delete------------------------------------------------
function deleteCommonHolidayMaster(id) {
//if (confirm("Are you sure?")) {
//   $(this).closest('tr').remove();
    deleteCommonHoliday(id);
    //}
}

function deleteCommonHoliday(id) {
    $.post(server_base_url + "/leavemanagement/commonholidaymaster/Delete", {
        id: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
// natureEnableButton();
            displaySmallErrorMessagesInRed("tablesuccessBefore", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
//natureEnableButton();
            displaySmallErrorMessagesInRed("tablesuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == invalidSession) {
//natureEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
// natureEnableButton();
            displaySmallErrorMessagesInRed("tablesuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == null) {
//natureEnableButton();
            displaySmallErrorMessagesInRed("tablesuccessBefore", "No User available" + "<br/><br/>");
        } else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("tablesuccessBefore", "" + delete_map_messages, "");
            setTimeout(function () {
                displayCommonHolidaysMaster("dashboardBodyMainDiv");
            }, 3000);
        } else {
//            $("#commonholidayTableMainDiv").empty();
//            wipeAllCommonHolidaymentData();
//            displayCommonHolidayTable();
//            $("#tablesuccessBefore").append("<span style='color:green;'><center><strong>" + deleteMessage + "</strong></center></span><br><br>");
//            setTimeout(function () {
//                $("#tablesuccessBefore").text("");
//            }, 2100);
            displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
            //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+updateMessage+"</strong></center><br><br></span>");
            setTimeout(function () {
                displayCommonHolidaysMaster("dashboardBodyMainDiv");
            }, 2100);
        }
    });
}

//-------------------------------------------------------------End Delete--------------------------------------


//start enable and disable  function 
function commonHolidayDisableButton() {
    $("#commonholidaySaveandUpdateButton").attr('disabled', true);
    $("#commonholidayResetButton").attr('disabled', true);
}
function commonHolidayEnableButton() {
    $("#commonholidaySaveandUpdateButton").attr('disabled', false);
    $("#commonholidayResetButton").attr('disabled', false);
}
//End enable and disable function

//Start reset Button 
function wipeAllCommonHolidaymentData() {
    $('select>option:eq(0)').attr('selected', true);
    $("#pregsuccessBefore").text("");
    $("#commonholiday").val('');
    $("#order").val('');
    $("#remarks").val('');
    $("#holidaytypeErr").text('');
    $("#commonholidayErr").text('');
    $("#orderErr").text('');
    $("#pregsuccessBefore").text("");
    $("#holidaytypeErr").text("");

    commonHolidayEnableButton();
    $("#commonholidayResetButton").text("Reset");
    $("#commonholidaySaveandUpdateButton").text("Save");
    $("#commonholidaySaveandUpdateButton").val("save");
}
//End Reset Button


//--------------------------------------------------Start update--------------------------------
function updateCommonHolidayMaster(obj, id) {

    if (!checkUserPrivelege(pvUpdateCommonHolidayMaster)) {
        alertPopUpMessage("You are not authorised");
        return;

    }

    $("#pregsuccessBefore").text("");
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $('#commonholiday').val(obj.commonHoliday);
    $('#order').val(obj.displayOrder);
    $('#remarks').val(obj.remarks);
    viewHolidayType(obj.holidayType);

    $("#panelRow1").text("").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue'><button type='button'  id='commonholidaySaveandUpdateButton' value='update' class='btn btn-success mr5'  onclick='commonholidayValidation()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
    <button type='button' id='commonholidayResetButton' onclick='displayCommonHolidaysMaster()' class='btn btn-warning mr5' name='reset' value='reset'>Back</button></center></div>");
    $("#idValue").val(id);

    $("#commonHolidaysMasterTableBody tr").css("background-color", "white");
    $("#commonHolidaysMasterTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
}
function updateCommonHolidaysMaster() {

    var holidayType = $('#holidaytype').val();
    var commonHoliday = $('#commonholiday').val();
    var order = $('#order').val();
    var remarks = $('#remarks').val();
    var id = $("#idValue").val();

//    var commonHolidayValidation = validateAlphabets('commonholiday', 'commonholidayErr');

//    if(commonHolidayValidation){
    var obj = {
        holidayType: holidayType,
        commonHoliday: commonHoliday,
        displayOrder: order,
        remarks: remarks
    };
    obj = JSON.stringify(obj);
    $.post(server_base_url + "/leavemanagement/commonholidaysmaster/Update", {
        obj: obj,
        objId: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {
        
        if (data === fail) {
            displayErrorMessages("pregsuccessBefore", "" + failMessage + "");
            displayErrorMessages("pregsuccessBefore", "" + failMessage + "");
        } else if (data === unauthorized) {
            displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
            displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
        } else if (data === invalidSession) {
            callSessionTimeout();
        } else if (data === statusException) {
            displayErrorMessages("pregsuccessBefore", "" + NoDataFound + "");
            displayErrorMessages("pregsuccessBefore", "" + NoDataFound + "");
        } else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function () {
                displayCommonHolidaysMaster("dashboardBodyMainDiv");
            }, 1000);

        } else {

            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            setTimeout(function () {
                displayCommonHolidaysMaster("dashboardBodyMainDiv");
            }, 2100);
        }
    });
//    }
}

function validateAlphabets(textId, divId) {
    var firstName = $("#" + textId).val();
//    var fnameReg = /^[a-zA-Z]{0,16}$/;
    var fnameReg = /^[a-zA-Z. ]+$/;
    if (!fnameReg.test(firstName)) {
        displaySmallErrorMessagesInRed(divId, "Only alphabets and space are allowed");
        return false;
    } else {
        $("#" + divId).text("");
        return true;
    }
}
//--------------------------------------------------End update--------------------------------