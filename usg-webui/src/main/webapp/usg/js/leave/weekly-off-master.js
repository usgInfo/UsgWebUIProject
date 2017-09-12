/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayWeeklyOffMaster(divid) {

    if (checkUserPrivelege(pvViewWeeklyOffMaster)) {
        createWeeklyOffForm(divid);
        // displayWeeklyOffDetails();
        displayWeeklyOffTable();
        weeklyoffDisableButton();
    }


}
//Start create form Function
function createWeeklyOffForm(divId) {
    //Start Title Bar
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> >> <label>Weekly Off Master</label>');
    //End  Title Bar

    //Start outbox div 
    $("#" + divId).text("").append("<div id='weeklyoffMainDivId' />");
    $("#weeklyoffMainDivId").text("").append("<div id='weeklyoffmainTabMenu'/>");
    $("#weeklyoffmainTabMenu").append("<div id='weeklyofftableHeader'/>");
    $("#weeklyofftableHeader").append("<div id='weeklyoffFirstPanel' class='panel panel-blue' />");
    $("#weeklyoffFirstPanel").append("<div id='weeklyofffirstPanelHeading' class='panel-heading' />");
    $("#weeklyofffirstPanelHeading").append("<h4 id='weeklyofftableHeader1' class='panel-title' />");

    $("#weeklyofftableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Weekly Off Master</center>");
    $("#weeklyofftableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#weeklyoffFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");

    addToggleToId("colMaritial1", "collapseOne2");

    $("#collapseOne2").append("<div id='weeklyoffpanelMainBody' class = 'panel-body' />");
    $("#weeklyoffpanelMainBody").append("<div id='weeklyoffpanelRow' class='row' />");
    $("#weeklyoffpanelRow").append("<center><div id='pregsuccessBefore'></center></div>");
    $("#weeklyoffpanelRow").append("<div id='weeklyoffFieldGroup' class='form-group' />");
    //End outbox div 
    getLabelDropDownInRow("weeklyoffFieldGroup", "Weekly Off Location", "required", "Row0", "Row0Col1", "weeklyofflocation", "");

    appendWeeklyLocation("");

    $("#weeklyoffpanelMainBody").append("<div id='viewButtonRow' class='row' />");
    $("#viewButtonRow").append("<div  class='col-xs-12' id='buttonRow1'/><center><input type='hidden' id='idValue1'><button type='button'  id='weeklyoffViewButton' value='view' class='btn btn-success mr5'  onclick='validateWeeklyOffLocation()'>View</button></center></div>");

    $("#weeklyoffmainTabMenu").append("<div id='weeklyofftable1TableMainDiv1'/>");


}

//dropdown location data
function appendWeeklyLocation(name) {

    $.get(server_base_url + "/Leave/LeaveManagement/LocationWiseHolidayMaster/GetLocationBasedOnDDo", {
        ddo: getUserSessionElement(seDDOId)
    }).done(function (bdata) {
        var data = JSON.parse(bdata)
        if (data === unauthorized) {
            displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage, "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data === statusException) {
            displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage, "");
        } else {
            if (data !== null) {
                
                $('#weeklyofflocation').text("").append('<option value="" class="form-control" selected >-----------Select Weekly Off Location---------</option>');
                for (var i = 0; i < data.length; i++) {
                   // var subData = mainData[i];
                    $("#weeklyofflocation").append("<option value='" + data[i]._id.$oid + "'>" + data[i].locationName + "</option>");
                }
            }
        }
    });
}

function  displayWeeklyOffDetails() {

    $("#weeklyofftable1TableMainDiv1").text("").append("<div id='weeklyoffTableMainDiv'/>");
    $("#weeklyoffTableMainDiv").append("<div id='weeklyoffMasterTableListPanel' class='panel panel-blue'/>");
    $("#weeklyoffMasterTableListPanel").append("<div id='weeklyoffMasterTableHeading' class='panel-heading' />");
    $("#weeklyoffMasterTableHeading").append("<h4 id='weeklyoffMasterTableHeader' class='panel-title' />");

    $("#weeklyoffMasterTableHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>Weekly Off Details</center>");
    $("#weeklyoffMasterTableHeader").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#weeklyoffMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");

    addToggleToId("colMaritial2", "collapseOne3");

    $("#collapseOne3").append("<div id='weeklyoffListPanelTableMainDiv' class = 'panel-body' />");
    $("#weeklyoffListPanelTableMainDiv").append("<div id='weeklyoffListPanelRow' class = 'row' />");
    $("#weeklyoffListPanelTableMainDiv").append("<div id='weeklyoffMastertableresponsiveDiv' class='table-responsive' />");
    $("#weeklyoffMastertableresponsiveDiv").append('<table id="example2" class="table table-bordered">');

    //Start Header
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var sCount = 1
    $("#example2").append("<thead class=''><tr>"

            + "<th> S.No</th>"
            + "<th ><i class='fa'></i>Day</th>"
            + "<th ><i class='fa'></i>1st</th>"
            + "<th ><i class='fa'></i>2nd</th>"
            + "<th><i class='fa'></i>3rd</th>"
            + "<th><i class='fa' ></i>4th</th>"
            + "<th ><i class='fa' ></i>5th</th>"
            + "</tr></thead>");

    //End Header
    $("#example2").append("<tbody id='weeklyMasterMasterTableBody' class='table-striped table-bordered'/>");
    for (var i = 0; i < days.length; i++) {
        $("#weeklyMasterMasterTableBody").append("<tr id='" + i + "'  >"
                + "<td >" + sCount + "</td>"
                + "<td >" + days[i] + "</td>"
                + "<td  ><select class='form-control'><option value='None'>None</option><option value='HalfDay'>HalfDay</option><option value='Fullday'>FullDay</option></select></td>"
                + "<td ><select class='form-control'><option value='None'>None</option><option value='HalfDay'>HalfDay</option><option value='Fullday'>FullDay</option></select></td>"
                + "<td ><select class='form-control'><option value='None'>None</option><option value='HalfDay'>HalfDay</option><option value='Fullday'>FullDay</option></select></td>"
                + "<td ><select class='form-control'><option value='None'>None</option><option value='HalfDay'>HalfDay</option><option value='Fullday'>FullDay</option></select></td>"
                + "<td  ><select class='form-control'><option value='None'>None</option><option value='HalfDay'>HalfDay</option><option value='Fullday'>FullDay</option></select></td></tr>");
        sCount++;
    }
    $("#weeklyoffListPanelTableMainDiv").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue'><button type='button'  id='weeklyoffSaveandUpdateButton' value='save' class='btn btn-success mr5'  onclick='weeklyoffValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
    <button type='button' id='weeklyoffResetButton' onclick='displayWeeklyOffMaster()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
}
function displayWeeklyOffTable() {
    $("#weeklyofftable1TableMainDiv").remove("");
    $("#weeklyoffmainTabMenu").append("<div id='weeklyofftable1TableMainDiv'/>");
    $("#weeklyofftable1TableMainDiv").append("<div id='weeklyofftable1MasterTableListPanel' class='panel panel-blue'/>");
    $("#weeklyofftable1MasterTableListPanel").append("<div id='weeklyofftable1MasterTableHeading' class='panel-heading' />");
    $("#weeklyofftable1MasterTableHeading").append("<h4 id='weeklyofftable1MasterTableHeader' class='panel-title' />");

    $("#weeklyofftable1MasterTableHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>List of Weekly Off Detail(s)</center>");
    $("#weeklyofftable1MasterTableHeader").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial3'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#weeklyofftable1MasterTableListPanel").append("<div id='collapseOne4' class='panel-collapse collapse in' />");

    addToggleToId("colMaritial3", "collapseOne4");

    $("#collapseOne4").append("<div id='weeklyofftable1ListPanelTableMainDiv' class = 'panel-body' />");
    $("#weeklyofftable1ListPanelTableMainDiv").append("<div id='weeklyofftable1ListPanelRow' class = 'row' />");
    $("#weeklyofftable1ListPanelTableMainDiv").append("<div  id='tablesuccessBefore'/>");
    $("#weeklyofftable1ListPanelTableMainDiv").append("<div id='weeklyofftable1MastertableresponsiveDiv' class='table-responsive' />");
    $("#weeklyofftable1MastertableresponsiveDiv").append('<table id="example1" class="table table-bordered">');

    //Start Header
    $("#example1").append("<thead><tr>"

            + " <th style='min-width:1%;width:80px;'> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Weekly Off Location</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");

    //End Header
    $.get(server_base_url + "leavemanagement/weekoffmaster/View", {
         ddo: getUserSessionElement(seDDOId),
        //viewLocation: "viewLocation",
    }).done(function (data) {

        if (JSON.parse(data) === unauthorized) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + "No Data Available", "");
        } else if (JSON.parse(data) === invalidSession) {
            callSessionTimeout();
        } else if (JSON.parse(data) === statusException) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + "No Data Available", "");
        } else {

            var sno = 0;
            var pdata = $.parseJSON(data);
            if (pdata !== null) {

                for (var i = 0; i < pdata.length; i++) {
                    var obj = JSON.stringify(pdata[i]);

                    $("#example1").append("<tbody id='weekoffMasterTableBody1' />");
                    sno++;
                    $("#weekoffMasterTableBody1").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
//                            + "<td>" + sno + "</td>"
                            + "<td style='min-width:1%;width:80px;'>" + sno + "<input type='hidden' value='" + pdata[i]._id.$oid + "'></td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].weeklyOffLocation + "</td>");
                    if (checkUserPrivelege(pvUpdateWeeklyOffMaster)) {
                        $("#" + pdata[i]._id.$oid).append("<td  onclick=updateofweekOffMaster('" + encodeURI(obj) + "','" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].weeklyOffLocation) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                    }
                    if (checkUserPrivelege(pvDeleteWeeklyOffMaster)) {
                        $("#" + pdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteWeekOffMaster','displayWeeklyOffTable','" + pdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                    }

                }

            }
        }
        $("#example1").dataTable();
    });

}

function checkAuthorisation(id) {
    if (!checkUserPrivelege(pvDeleteWeeklyOffMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    deletePopUp('deleteWeekOffMaster', 'displayWeeklyOffTable', id);
}

//start enable and disable  function 
function weeklyoffDisableButton() {
    $("#weeklyoffSaveandUpdateButton").attr('disabled', true);
    $("#weeklyoffResetButton").attr('disabled', true);
}
function weeklyoffEnableButton() {
    $("#weeklyoffSaveandUpdateButton").attr('disabled', false);
    $("#weeklyoffResetButton").attr('disabled', false);
}
//End enable and disable function

//Start reset Button 
function wipeAllWeeklyOffmentData() {
    createWeeklyOffForm("dashboardBodyMainDiv");
    displayWeeklyOffDetails();
    displayWeeklyOffTable();

}
//End Reset Button


//start validation 

function weeklyoffValidation() {
    var result = 1;
    weeklyoffDisableButton();
    var weeklyoffLocation = $("#weeklyofflocation").val();


    if ((weeklyoffLocation === undefined || weeklyoffLocation === null || weeklyoffLocation === "" || weeklyoffLocation === 0)) {
        weeklyoffEnableButton();

        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill mandatory fields");
        $("#weeklyofflocation").focus();
        return false;
    }
    if (result !== 0) {
        $("#pregsuccessBefore").text("");
        var buttonValue = $("#weeklyoffSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        var viewButton = "view";
        if (buttonValue === saveButton) {

            saveWeeklyOffMasterDetails();
        } else if (buttonValue === updateButton) {
            updateWeeklyOffMasterDetails();
        }
//        else if (buttonValue === viewButton) {
//
//            alert();
//        }
    }
}

function validateWeeklyOffLocation() {
    var result = 1;
    var weeklyoffLocation = $("#weeklyofflocation").val();

    if ((weeklyoffLocation === undefined || weeklyoffLocation === null || weeklyoffLocation === "" || weeklyoffLocation === 0)) {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
        $("#weeklyofflocation").focus();
        return false;
    }
    if (result !== 0) {
        $("#pregsuccessBefore").text("");
        weeklyoffEnableButton();
        viewLocationWiseHolidayMasterData(weeklyoffLocation);

    }
}

function viewLocationWiseHolidayMasterData(weeklyoffLocation)
{
    $.post(server_base_url + "/Leave/LeaveManagement/WeeklyOffMasterViewService", {
        viewLocation: "viewLocation",
        weeklyOffLocation: weeklyoffLocation
    }).done(function (rdata) {

        rdata = JSON.parse(rdata);
        rdata = JSON.parse(rdata);

        if (rdata !== null) {

            $("#weeklyofflocation").attr("disabled", true);

            $("#weeklyofftable1TableMainDiv1").text("").append("<div id='weeklyoffTableMainDiv'/>");
            $("#weeklyoffTableMainDiv").append("<div id='weeklyoffMasterTableListPanel' class='panel panel-blue'/>");
            $("#weeklyoffMasterTableListPanel").append("<div id='weeklyoffMasterTableHeading' class='panel-heading' />");
            $("#weeklyoffMasterTableHeading").append("<h4 id='weeklyoffMasterTableHeader' class='panel-title' />");

            $("#weeklyoffMasterTableHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>Weekly Off Details</center>");
            $("#weeklyoffMasterTableHeader").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
            $("#weeklyoffMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");

            addToggleToId("colMaritial2", "collapseOne3");

            $("#collapseOne3").append("<div id='weeklyoffListPanelTableMainDiv' class = 'panel-body' />");
            $("#weeklyoffListPanelTableMainDiv").append("<div id='weeklyoffListPanelRow' class = 'row' />");
            $("#weeklyoffListPanelTableMainDiv").append("<div id='weeklyoffMastertableresponsiveDiv' class='table-responsive' />");
            $("#weeklyoffMastertableresponsiveDiv").append('<table id="example2" class="table table-bordered">');

            //Start Header

            $("#example2").append("<thead class=''><tr>"

                    + "<th> S.No</th>"
                    + "<th ><i class='fa'></i>Day</th>"
                    + "<th><i class='fa'></i>1st</th>"
                    + "<th><i class='fa'></i>2nd</th>"
                    + "<th ><i class='fa'></i>3rd</th>"
                    + "<th ><i class='fa' ></i>4th</th>"
                    + "<th ><i class='fa' ></i>5th</th>"
                    + "</tr></thead>");

            //End Header
            $("#example2").append("<tbody id='weeklyMasterMasterTableBody' class='table-striped table-bordered'/>");


            for (var i = 0; i < rdata[0].weeklyoffFormList.length; i++) {

                var data = "<tr id='" + i + "' style='cursor:pointer;' >"
                        + "<td>" + rdata[0].weeklyoffFormList[i].sno + "</td>"
                        + "<td>" + rdata[0].weeklyoffFormList[i].day + "</td>";
                if (rdata[0].weeklyoffFormList[i].first == 'HalfDay') {
                    data += "<td><select class='form-control'><option value='HalfDay' selected>HalfDay</option><option value='FullDay'>FullDay</option><option value='None'>None</option></select></td>";
                } else if (rdata[0].weeklyoffFormList[i].first == 'None') {
                    data += "<td><select class='form-control'><option value='None' selected>None</option><option value='HalfDay'>HalfDay</option><option value='FullDay'>FullDay</option></select></td>";
                } else if (rdata[0].weeklyoffFormList[i].first == 'FullDay') {
                    data += "<td><select class='form-control'><option value='FullDay' selected>FullDay</option><option value='None'>None</option><option value='HalfDay' >HalfDay</option></select></td>";
                }

                if (rdata[0].weeklyoffFormList[i].second == 'HalfDay') {
                    data += "<td><select class='form-control'><option value='HalfDay' selected>HalfDay</option><option value='FullDay'>FullDay</option><option value='None'>None</option></select></td>";
                } else if (rdata[0].weeklyoffFormList[i].second == 'None') {
                    data += "<td><select class='form-control'><option value='None' selected>None</option><option value='HalfDay'>HalfDay</option><option value='FullDay'>FullDay</option></select></td>";
                } else if (rdata[0].weeklyoffFormList[i].second == 'FullDay') {
                    data += "<td><select class='form-control'><option value='FullDay' selected>FullDay</option><option value='None'>None</option><option value='HalfDay' >HalfDay</option></select></td>";
                }

                if (rdata[0].weeklyoffFormList[i].third == 'HalfDay') {
                    data += "<td><select class='form-control'><option value='HalfDay' selected>HalfDay</option><option value='FullDay'>FullDay</option><option value='None'>None</option></select></td>";
                } else if (rdata[0].weeklyoffFormList[i].third == 'None') {
                    data += "<td><select class='form-control'><option value='None' selected>None</option><option value='HalfDay'>HalfDay</option><option value='FullDay'>FullDay</option></select></td>";
                } else if (rdata[0].weeklyoffFormList[i].third == 'FullDay') {
                    data += "<td><select class='form-control'><option value='FullDay' selected>FullDay</option><option value='None'>None</option><option value='HalfDay' >HalfDay</option></select></td>";
                }

                if (rdata[0].weeklyoffFormList[i].fourth == 'HalfDay') {
                    data += "<td><select class='form-control'><option value='HalfDay' selected>HalfDay</option><option value='FullDay'>FullDay</option><option value='None'>None</option></select></td>";
                } else if (rdata[0].weeklyoffFormList[i].fourth == 'None') {
                    data += "<td><select class='form-control'><option value='None' selected>None</option><option value='HalfDay'>HalfDay</option><option value='FullDay'>FullDay</option></select></td>";
                } else if (rdata[0].weeklyoffFormList[i].fourth == 'FullDay') {
                    data += "<td><select class='form-control'><option value='FullDay' selected>FullDay</option><option value='None'>None</option><option value='HalfDay' >HalfDay</option></select></td>";
                }

                if (rdata[0].weeklyoffFormList[i].fifth == 'HalfDay') {
                    data += "<td><select class='form-control'><option value='HalfDay' selected>HalfDay</option><option value='FullDay'>FullDay</option><option value='None'>None</option></select></td></tr>";
                } else if (rdata[0].weeklyoffFormList[i].fifth == 'None') {
                    data += "<td><select class='form-control'><option value='None' selected>None</option><option value='HalfDay'>HalfDay</option><option value='FullDay'>FullDay</option></select></td></tr>";
                } else if (rdata[0].weeklyoffFormList[i].fifth == 'FullDay') {
                    data += "<td><select class='form-control'><option value='FullDay' selected>FullDay</option><option value='None'>None</option><option value='HalfDay' >HalfDay</option></select></td>";
                }
                $("#weeklyMasterMasterTableBody").append(data);
            }
            $("#weeklyoffListPanelTableMainDiv").append("<div id='panelRow1' class='row' />");
            $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue' value='" + rdata[0]._id.$oid + "'><button type='button'  id='weeklyoffSaveandUpdateButton' value='update' class='btn btn-success mr5'  onclick='weeklyoffValidation()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
    <button type='button' id='weeklyoffResetButton' onclick='displayWeeklyOffMaster()' class='btn btn-warning mr5' name='reset' value='reset'>Back</button></center></div>");
        } else {
            displayWeeklyOffDetails();
        }
    });

}

function saveWeeklyOffMasterDetails() {

    if (!checkUserPrivelege(pvCreateWeeklyOffMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    var weekoffMasterLocation = $("#weeklyofflocation").val();
    var jsonArrayObject = [];
    var weeklyoffMasterJsonObj = {};
    var TableRows = $('table#example2').find('tbody').find('tr');
    for (var i = 0; i < TableRows.length; i++) {
        jsonArrayObject.push({
            sno: $(TableRows[i]).find('td:eq(0)').html(),
            day: $(TableRows[i]).find('td:eq(1)').html(),
            first: $(TableRows[i]).find('td:eq(2)').find('select option:selected').text(),
            second: $(TableRows[i]).find('td:eq(3)').find('select option:selected').text(),
            third: $(TableRows[i]).find('td:eq(4)').find('select option:selected').text(),
            fourth: $(TableRows[i]).find('td:eq(5)').find('select option:selected').text(),
            fifth: $(TableRows[i]).find('td:eq(6)').find('select option:selected').text(),
        });
    }
    weeklyoffMasterJsonObj["weeklyoffFormList"] = jsonArrayObject;
    weeklyoffMasterJsonObj = JSON.stringify(weeklyoffMasterJsonObj);
    console.log(weeklyoffMasterJsonObj);
    $.post(server_base_url + "leavemanagement/weeklyoffmaster/Save", {
        obj: weeklyoffMasterJsonObj,
        weeklyOffLocation: weekoffMasterLocation,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        if (data === fail) {
            weeklyoffEnableButton();
            displayErrorMessages("pregsuccessBefore", failMessage, "");
        } else if (data === unauthorized) {
            weeklyoffEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage, "");
        } else if (data === invalidSession) {
            weeklyoffEnableButton();
            callSessionTimeout();
        } else if (data === statusException) {
            weeklyoffEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage, "");
        } else if (data === null) {
            weeklyoffEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available", "");
        } else if (data === "duplicate") {
            displayErrorMessages("pregsuccessBefore", "Data Already Existed", "");
            setTimeout(function () {
                displayWeeklyOffMaster("dashboardBodyMainDiv");
            }, 2100);
        } else {
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function () {
                displayWeeklyOffMaster("dashboardBodyMainDiv");
            }, 2100);
        }
    }
    );
}

function deleteWeekOffMaster(id) {
    //if(confirm("Are you sure?")) {
    // $(this).closest('tr').remove();
    deleteWeekOffMasterData(id);
    //}
}
function deleteWeekOffMasterData(id) {
    $.post(server_base_url + "leavemanagement/weeklyOffMaster/Delete", {
        id: id,
        userId: getUserSessionElement("userId")

    }).done(function (data) {
        if (data == fail) {
            // natureEnableButton();
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            //natureEnableButton();
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            //natureEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
            // natureEnableButton();
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", statusExceptionMessage + "<br/><br/>");
        }
        if (data == "502") {
            displayErrorMessages("tablesuccessBefore", "" + delete_map_messages, "");
            setTimeout(function () {
                displayWeeklyOffMaster("dashboardBodyMainDiv");
            }, 3000);
        } else if (data == null) {
            //natureEnableButton();
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "No User available" + "<br/><br/>");
        } else {
            displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
            //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+updateMessage+"</strong></center><br><br></span>");
            setTimeout(function () {
                displayWeeklyOffMaster("dashboardBodyMainDiv");
            }, 2100);
        }
    });
}

function updateofweekOffMaster(obj, id, location) {

    weeklyoffEnableButton();
    $("#pregsuccessBefore").text("");
    obj = decodeURI(obj);

    obj = JSON.parse(obj);

    location = decodeURI(location);

    $("#weeklyofftable1TableMainDiv1").text("").append("<div id='weeklyoffTableMainDiv'/>");
    $("#weeklyoffTableMainDiv").append("<div id='weeklyoffMasterTableListPanel' class='panel panel-blue'/>");
    $("#weeklyoffMasterTableListPanel").append("<div id='weeklyoffMasterTableHeading' class='panel-heading' />");
    $("#weeklyoffMasterTableHeading").append("<h4 id='weeklyoffMasterTableHeader' class='panel-title' />");

    $("#weeklyoffMasterTableHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>Weekly Off Details</center>");
    $("#weeklyoffMasterTableHeader").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#weeklyoffMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");

    addToggleToId("colMaritial2", "collapseOne3");

    $("#collapseOne3").append("<div id='weeklyoffListPanelTableMainDiv' class = 'panel-body' />");
    $("#weeklyoffListPanelTableMainDiv").append("<div id='weeklyoffListPanelRow' class = 'row' />");
    $("#weeklyoffListPanelTableMainDiv").append("<div id='weeklyoffMastertableresponsiveDiv' class='table-responsive' />");
    $("#weeklyoffMastertableresponsiveDiv").append('<table id="example2" class="table table-bordered">');
    $("#idValue").val(obj._id.$oid);
    //Start Header

    $("#example2").append("<thead class=''><tr>"

            + "<th> S.No</th>"
            + "<th ><i class='fa'></i>Day</th>"
            + "<th ><i class='fa'></i>1st</th>"
            + "<th ><i class='fa'></i>2nd</th>"
            + "<th><i class='fa'></i>3rd</th>"
            + "<th ><i class='fa' ></i>4th</th>"
            + "<th ><i class='fa' ></i>5th</th>"
            + "</tr></thead>");

    //End Header
    // $("#example2").append("<tbody id='weeklyMasterMasterTableBody' class='table-striped table-bordered'/>");

    //End Header
    $("#example2").append("<tbody id='weeklyMasterMasterTableBody' class='table-striped table-bordered'/>");
    for (var i = 0; i < obj.weeklyoffFormList.length; i++) {
        //$("#weeklyMasterMasterTableBody").text("").append("<tr id='" + i + "' style='cursor:pointer;' >"
        var data = "<tr id='" + i + "' style='cursor:pointer;' >"
                + "<td>" + obj.weeklyoffFormList[i].sno + "</td>"
                + "<td>" + obj.weeklyoffFormList[i].day + "</td>";
        if (obj.weeklyoffFormList[i].first == 'HalfDay') {
            data += "<td><select class='form-control'><option value='HalfDay' selected>HalfDay</option><option value='FullDay'>FullDay</option><option value='None'>None</option></select></td>";
        } else if (obj.weeklyoffFormList[i].first == 'None') {
            data += "<td><select class='form-control'><option value='None' selected>None</option><option value='HalfDay'>HalfDay</option><option value='FullDay'>FullDay</option></select></td>";
        } else if (obj.weeklyoffFormList[i].first == 'FullDay') {
            data += "<td><select class='form-control'><option value='FullDay' selected>FullDay</option><option value='None'>None</option><option value='HalfDay' >HalfDay</option></select></td>";
        }

        if (obj.weeklyoffFormList[i].second == 'HalfDay') {
            data += "<td><select class='form-control'><option value='HalfDay' selected>HalfDay</option><option value='FullDay'>FullDay</option><option value='None'>None</option></select></td>";
        } else if (obj.weeklyoffFormList[i].second == 'None') {
            data += "<td><select class='form-control'><option value='None' selected>None</option><option value='HalfDay'>HalfDay</option><option value='FullDay'>FullDay</option></select></td>";
        } else if (obj.weeklyoffFormList[i].second == 'FullDay') {
            data += "<td><select class='form-control'><option value='FullDay' selected>FullDay</option><option value='None'>None</option><option value='HalfDay' >HalfDay</option></select></td>";
        }

        if (obj.weeklyoffFormList[i].third == 'HalfDay') {
            data += "<td><select class='form-control'><option value='HalfDay' selected>HalfDay</option><option value='FullDay'>FullDay</option><option value='None'>None</option></select></td>";
        } else if (obj.weeklyoffFormList[i].third == 'None') {
            data += "<td><select class='form-control'><option value='None' selected>None</option><option value='HalfDay'>HalfDay</option><option value='FullDay'>FullDay</option></select></td>";
        } else if (obj.weeklyoffFormList[i].third == 'FullDay') {
            data += "<td><select class='form-control'><option value='FullDay' selected>FullDay</option><option value='None'>None</option><option value='HalfDay' >HalfDay</option></select></td>";
        }

        if (obj.weeklyoffFormList[i].fourth == 'HalfDay') {
            data += "<td><select class='form-control'><option value='HalfDay' selected>HalfDay</option><option value='FullDay'>FullDay</option><option value='None'>None</option></select></td>";
        } else if (obj.weeklyoffFormList[i].fourth == 'None') {
            data += "<td><select class='form-control'><option value='None' selected>None</option><option value='HalfDay'>HalfDay</option><option value='FullDay'>FullDay</option></select></td>";
        } else if (obj.weeklyoffFormList[i].fourth == 'FullDay') {
            data += "<td><select class='form-control'><option value='FullDay' selected>FullDay</option><option value='None'>None</option><option value='HalfDay' >HalfDay</option></select></td>";
        }

        if (obj.weeklyoffFormList[i].fifth == 'HalfDay') {
            data += "<td><select class='form-control'><option value='HalfDay' selected>HalfDay</option><option value='FullDay'>FullDay</option><option value='None'>None</option></select></td></tr>";
        } else if (obj.weeklyoffFormList[i].fifth == 'None') {
            data += "<td><select class='form-control'><option value='None' selected>None</option><option value='HalfDay'>HalfDay</option><option value='FullDay'>FullDay</option></select></td></tr>";
        } else if (obj.weeklyoffFormList[i].fifth == 'FullDay') {
            data += "<td><select class='form-control'><option value='FullDay' selected>FullDay</option><option value='None'>None</option><option value='HalfDay' >HalfDay</option></select></td>";
        }
        $("#weeklyMasterMasterTableBody").append(data);

    }
    $("#weeklyoffListPanelTableMainDiv").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue' value='" + obj._id.$oid + "'><button type='button'  id='weeklyoffSaveandUpdateButton' value='update' class='btn btn-success mr5'  onclick='weeklyoffValidation()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
    <button type='button' id='weeklyoffResetButton' onclick='displayWeeklyOffMaster()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
    $("#weeklyofflocation option:contains(" + location + ")").attr('selected', 'selected');
    $("#weeklyofflocation").attr('disabled', true);
    $("#weeklyoffSaveandUpdateButton").text("Update");
    $("#weeklyoffSaveandUpdateButton").val("update");
    $("#weeklyoffResetButton").text("Back");
    $("#idValue").val(id);
    $("#weekoffMasterTableBody1 tr").css("background-color", "white");
    $("#weekoffMasterTableBody1 tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
}

function updateWeeklyOffMasterDetails() {

    var weekoffMasterLocation = $("#weeklyofflocation").val();
    var id = $("#idValue").val();
    var jsonArrayObject = [];
    var weeklyoffMasterJsonObj = {};
    var TableRows = $('table#example2').find('tbody').find('tr');
    for (var i = 0; i < TableRows.length; i++) {
        jsonArrayObject.push({
            sno: $(TableRows[i]).find('td:eq(0)').html(),
            day: $(TableRows[i]).find('td:eq(1)').html(),
            first: $(TableRows[i]).find('td:eq(2)').find('select option:selected').text(),
            second: $(TableRows[i]).find('td:eq(3)').find('select option:selected').text(),
            third: $(TableRows[i]).find('td:eq(4)').find('select option:selected').text(),
            fourth: $(TableRows[i]).find('td:eq(5)').find('select option:selected').text(),
            fifth: $(TableRows[i]).find('td:eq(6)').find('select option:selected').text(),
        });
    }
    weeklyoffMasterJsonObj["weeklyoffFormList"] = jsonArrayObject;
    weeklyoffMasterJsonObj = JSON.stringify(weeklyoffMasterJsonObj);
    console.log(weeklyoffMasterJsonObj);
    $.post(server_base_url + "/leavemanagement/weeklyoffmaster/Update", {
        obj: weeklyoffMasterJsonObj,
        location: weekoffMasterLocation,
        objId: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {
        if (data === fail) {
            weeklyoffEnableButton();
            displayErrorMessages("pregsuccessBefore", failMessage, "");
        } else if (data === unauthorized) {
            weeklyoffEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage, "");
        } else if (data === invalidSession) {
            weeklyoffEnableButton();
            callSessionTimeout();
        } else if (data === statusException) {
            weeklyoffEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage, "");
        } else if (data === null) {
            weeklyoffEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available", "");
        } else if (data === "duplicate") {
            displayErrorMessages("pregsuccessBefore", "Data Already Existed", "");
            setTimeout(function () {
                displayWeeklyOffMaster("dashboardBodyMainDiv");
            }, 2100);
        } else {
            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            setTimeout(function () {
                displayWeeklyOffMaster("dashboardBodyMainDiv");
            }, 2100);
        }
    });
}