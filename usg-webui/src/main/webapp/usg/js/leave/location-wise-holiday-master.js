/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var displayOrder = [];
function displayLocationWiseHolidaysMaster(divid) {
    if (checkUserPrivelege(pvViewLocationWiseHolidayMaster)) {
        createLocationWiseHolidaysMaterForm(divid);
        displayHolidayLocationwiseTable();
    }
}

//Start create form Function
function createLocationWiseHolidaysMaterForm(divId) {
    //Start Title Bar
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> >> <label>Location Wise Holidays Master</label>');
    //End  Title Bar

    //Start outbox div 
    $("#" + divId).text("").append("<div id='locationwiseholidayMainDivId' />");
    $("#locationwiseholidayMainDivId").text("").append("<div id='locationwiseholidaymainTabMenu'/>");
    $("#locationwiseholidaymainTabMenu").append("<div id='locationwiseholidaytableHeader'/>");

    $("#locationwiseholidaytableHeader").append("<div id='locationwiseholidayFirstPanel' class='panel panel-blue' />");
    $("#locationwiseholidayFirstPanel").append("<div id='locationwiseholidayfirstPanelHeading' class='panel-heading' />");
    $("#locationwiseholidayfirstPanelHeading").append("<h4 id='locationwiseholidaytableHeader1' class='panel-title' />");

    $("#locationwiseholidaytableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Location Wise Holidays Master</center>");
    $("#locationwiseholidaytableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#locationwiseholidayFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");

    addToggleToId("colMaritial1", "collapseOne2");

    $("#collapseOne2").append("<div id='locationwiseholidaypanelMainBody' class = 'panel-body' />");
    $("#locationwiseholidaypanelMainBody").append("<div id='locationwiseholidaypanelRow' class='row' />");
    $("#locationwiseholidaypanelRow").append("<center><div id='pregsuccessBefore'></center></div>");
    $("#locationwiseholidaypanelRow").append("<div id='locationwiseholidayFieldGroup' class='form-group' />");
    $("#locationwiseholidaypanelRow").append("<input type='hidden' id='fromdateVal'>");
    $("#locationwiseholidaypanelRow").append("<input type='hidden' id='todateVal'>");
    //End outbox div 
    //Form

    getLabelDropDownInRow("locationwiseholidayFieldGroup", "Holiday Location", "required", "Row0", "Row0Col1", "holidayLocation", "");
    getLabelDropDownInRow("locationwiseholidayFieldGroup", "Year", "required", "Row1", "Row0Col2", "year", "");
    $("#locationwiseholidayFieldGroup").append("<div id='panelRow1' class='row' />");
    appendHolidayLocation("");
    //locationwiseholidaysyear("");
    $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue'><button type='button'  id='locationwiseholidaySaveandUpdateButton' value='view' class='btn btn-success mr5'  onclick='locationwiseholidayValidation(locationwiseholidaySaveandUpdateButton)'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
    <button type='button' id='locationwiseholidayResetButton' onclick='wipeAllLocationWisementData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");


    $("input").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });


    $("textarea").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    $("#locationwiseholidaymainTabMenu").append("<div id='locationwiseholidayTypetableHeader'/>");

    //    getFinancialYear("", "year");
    fetchYearListForLocationWiseHolidayMaster();
}
//dropdown location data
function appendHolidayLocation(name) {


    $.post(server_base_url + "/Leave/LeaveManagement/LocationWiseHolidayMaster/GetLocationBasedOnDDo", {
        ddo: getUserSessionElement(seDDOId)
    }).done(function(pdata) {

        var bdata = JSON.parse(pdata)
        if (bdata != null) {

            if (bdata.length > 0) {
                $('#holidayLocation').text("").append("<option value='0' class='form-control' selected disabled >-----------Select Holiday Location---------</option>");
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].holidayLocation) {
                        $("#holidayLocation").append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].locationName + "</option>");
                    } else {
                        $("#holidayLocation").append("<option  value='" + bdata[i]._id.$oid + "'>" + bdata[i].locationName + "</option>");
                    }
                }
            }
        }
    });

}
function locationwiseholidaysyear(name) {


    $('#year').text("").append("<option value='0' class='form-control'  selected disabled >-----------select year---------</option>");

    $('#year').append($('<option selected/>').val(name).html(name));



}


function displayHolidayLocationwiseTable() {


    $("#collapseOne3").append("<div id='locationwiseholidayListPanelTableMainDiv' class = 'panel-body' />");
    $("#locationwiseholidayListPanelTableMainDiv").append("<div id='locationwiseholidayListPanelRow' class = 'row' />");
    $("#locationwiseholidayListPanelTableMainDiv").append("<div  id='tablesuccessBefore'/>");
    $("#locationwiseholidayListPanelTableMainDiv").append("<div id='locationwiseholidayMastertableresponsiveDiv1' class='table-responsive' />");
    $("#locationwiseholidayMastertableresponsiveDiv1").append('<table id="listOfHolidaysHeadingRow" class="table table-striped table-bordered table-hover">');
    $("#locationwiseholidayMastertableresponsiveDiv1").append('<table id="listOfHolidaysHeadingRowList" class="table table-striped table-bordered table-hover">');
    $("#locationwiseholidayListPanelTableMainDiv").append("<div id='locationwiseholidayMastertableresponsiveDiv' class='table-responsive' />");
    $("#locationwiseholidayMastertableresponsiveDiv").append('<table id="example1" class="table table-striped table-bordered table-hover">');

    $("#locationwiseholidaymainTabMenu").append("<div id='locationwiseupdateholidayTableMainDiv'/>");
    $("#locationwiseupdateholidayTableMainDiv").append("<div id='locationwiseupdateholidayMasterTableListPanel' class='panel panel-blue'/>");
    $("#locationwiseupdateholidayMasterTableListPanel").append("<div id='locationwiseupdateholidayMasterTableHeading' class='panel-heading' />");
    $("#locationwiseupdateholidayMasterTableHeading").append("<h4 id='locationwiseupdateholidayMasterTableHeader' class='panel-title' />");

    $("#locationwiseupdateholidayMasterTableHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>List of Location wise Holidays</center>");
    $("#locationwiseupdateholidayMasterTableHeader").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial3'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#locationwiseupdateholidayMasterTableListPanel").append("<div id='collapseOne4' class='panel-collapse collapse in' />");

    addToggleToId("colMaritial3", "collapseOne4");

    $("#collapseOne4").append("<div id='locationwiseupdateholidayListPanelTableMainDiv' class = 'panel-body' />");
    $("#locationwiseupdateholidayListPanelTableMainDiv").append("<div id='locationwiseupdateholidayListPanelRow' class = 'row' />");
    $("#locationwiseupdateholidayListPanelTableMainDiv").append("<div  id='tablesuccessBefore1'/>");
    $("#locationwiseupdateholidayListPanelTableMainDiv").append("<div id='locationwiseupdateholidayMastertableresponsiveDiv' class='table-responsive' />");
    $("#locationwiseupdateholidayMastertableresponsiveDiv").append('<table id="example2" class="table table-bordered">');

    $("#example2").append("<thead class=''><tr>"

            + "<th>S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Holiday Location </th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Year</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' ></i>Delete</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' ></i> Print</th>"
            + "</tr></thead>");

    $("#locationwiseholidaymainTabMenu").append('<div id="locationWiseHolidayReportMenu" class="row" />');

    $.get(server_base_url + "leavemanagement/locationWiseHoliday/View", {
        ddo: getUserSessionElement(seDDOId)
    }).done(function(data) {

        if (JSON.parse(data) === unauthorized) {
            displayErrorMessages("tablesuccessBefore1", "" + unauthorizedMessage, "");
        } else if (JSON.parse(data) === invalidSession) {
            callSessionTimeout();
        }

        else {

            var sno = 0;
            var pdata = $.parseJSON(data);
            if (pdata !== null) {

                for (var i = 0; i < pdata.length; i++) {
                    var obj = JSON.stringify(pdata[i]);

                    $("#example2").append("<tbody id='locationWiseHolidayMasterTableBody1' />");
                    sno++;
                    $("#locationWiseHolidayMasterTableBody1").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "<input type='hidden' value='" + pdata[i]._id.$oid + "'></td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].locationWiseHoliday + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].year + "</td>"
                            );
                    $("#" + pdata[i]._id.$oid).append("<td id='" + pdata[i]._id.$oid + "AnchorTag' onclick=updateLocationwiseHolidayMaster('" + encodeURI(obj) + "','" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].locationWiseHoliday) + "','" + encodeURI(pdata[i].year) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                    $("#" + pdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteLocationwiseHolidayMaster','','" + pdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                    $("#" + pdata[i]._id.$oid).append("<td  onclick=viewLocationWiseHolidayMasterReport('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].locationWiseHoliday) + "','" + pdata[i].year + "')>" + ' <i class="fa fa-print"></i>&nbsp;&nbsp;<a  class="" style="margin-width:1%,width:80px" >Print</a>' + "</td></tr>");



                }

            }
        }
        $("#example2").dataTable();
    });
}

function viewLocationWiseHolidayMasterReport(primaryId, location, year)
{
    var year1 = $("#year").val();

    var fromDate = $("#fromdateVal").val();
    var toDate = $("#todateVal").val();

    $("#locationwiseholidayTypetableHeader").text("");
    $("#locationWiseHolidayReportMenu").text("").append("<iframe  class ='panel-body pan' id='iframe' style='border:1px solid #666CCC' title='PDF in an i-Frame' scrolling='auto' src=" + server_base_url + 'Leave/LeaveManagement/LocationwiseHolidayMasterReport?id=' + primaryId + '&location=' + location + '&year=' + year1 + '&financialyearStart=' + fromDate + '&financialyearEnd=' + toDate + " height='500px' width='100%'></iframe>");

}

//----------------------delete-------------------------------
function deleteLocationwiseHolidayMaster(id) {

    deleteLocationwiseHolidayLocationdata(id);

}

function deleteLocationwiseHolidayMaster(id) {

    $.post(server_base_url + "leavemanagement/locationwiseholidaymaster/Delete", {
        id: id
    }).done(function(data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("tablesuccessBefore1", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("tablesuccessBefore1", unauthorizedMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("tablesuccessBefore1", statusExceptionMessage + "<br/><br/>");
        } else if (data == null) {
            displaySmallErrorMessagesInRed("tablesuccessBefore1", "No User available" + "<br/><br/>");
        } else {
            displaySuccessMessages("tablesuccessBefore1", deleteMessage, "");
            setTimeout(function() {
                displayLocationWiseHolidaysMaster("dashboardBodyMainDiv");
            }, 2100);

        }
    });
}

//start enable and disable  function 
function locationwiseDisableButton() {
    $("#locationwiseholidaySaveandUpdateButton").attr('disabled', true);
    $("#locationwiseholidayResetButton").attr('disabled', true);
    $("#locationwiseholidaySaveButton").attr('disabled', true);
    $("#locationwiseupdateholidaySaveButton").attr('disabled', true);
    $("#locationwiseholidayResetButton1").attr('disabled', true);
    $("#locationwiseholidayResetButton2").attr('disabled', true);
}
function locationwiseEnableButton() {
    $("#locationwiseholidaySaveandUpdateButton").attr('disabled', false);
    $("#locationwiseholidayResetButton1").attr('disabled', false);
    $("#locationwiseholidayResetButton").attr('disabled', false);
    $("#locationwiseholidaySaveButton").attr('disabled', false);
    $("#locationwiseupdateholidaySaveButton").attr('disabled', false);
    $("#locationwiseholidayResetButton2").attr('disabled', false);
}
//End enable and disable function

//Start reset Button 
function wipeAllLocationWisementData() {
    $('select>option:eq(0)').attr('selected', true);
    $('#year>option:eq(0)').attr('selected', true);
    $("#pregsuccessBefore").text("");

    $("#pregsuccessBefore").text("");

    $("#locationwiseholidayResetButton").text("Reset");
    $("#locationwiseholidayMasterTableBody").text("");
    $("#saveButtonRow").text("");
    $("#locationWiseHolidayReportMenu").text("");
}
//End Reset Button
//------------------------------ update --------------------------
function updateLocationwiseHolidayMaster(obj, id, location, year) {
    $("#locationWiseHolidayReportMenu").text("");

    $("#locationwiseholidayTypetableHeader").text("").append("<div id='locationwiseholidayTableMainDiv'/>");
    $("#locationwiseholidayTableMainDiv").append("<div id='locationwiseholidayMasterTableListPanel' class='panel panel-blue'/>");
    $("#locationwiseholidayMasterTableListPanel").append("<div id='locationwiseholidayMasterTableHeading' class='panel-heading' />");
    $("#locationwiseholidayMasterTableHeading").append("<h4 id='locationwiseholidayMasterTableHeader' class='panel-title' />");

    $("#locationwiseholidayMasterTableHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>List of Holidays</center>");
    $("#locationwiseholidayMasterTableHeader").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#locationwiseholidayMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");

    addToggleToId("colMaritial2", "collapseOne3");


    $("#collapseOne3").append("<div id='locationwiseholidayListPanelTableMainDiv' class = 'panel-body' />");
    $("#locationwiseholidayListPanelTableMainDiv").append("<div id='locationwiseholidayListPanelRow' class = 'row' />");
    $("#locationwiseholidayListPanelTableMainDiv").append("<div  id='tablesuccessBefore'/>");
    $("#locationwiseholidayListPanelTableMainDiv").append("<div id='locationwiseholidayMastertableresponsiveDiv1' class='table-responsive' />");
    $("#locationwiseholidayMastertableresponsiveDiv1").append('<table id="listOfHolidaysHeadingRow" class="table table-striped table-bordered table-hover">');
    $("#locationwiseholidayMastertableresponsiveDiv1").append('<table id="listOfHolidaysHeadingRowList" class="table table-striped table-bordered table-hover">');
    $("#locationwiseholidayListPanelTableMainDiv").append("<div id='locationwiseholidayMastertableresponsiveDiv' class='table-responsive' />");
    $("#locationwiseholidayMastertableresponsiveDiv").append('<table id="example1" class="table table-striped table-bordered table-hover">');



    $("#locationwiseholidayMastertableresponsiveDiv1").text("");
    $("#example1").append("<thead><tr>"

            + "<th>S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Common Holiday</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Holiday Type</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Year</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>From Date</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>To Date</th>"

            + "</tr></thead>");

    $("#pregsuccessBefore").text("");
    $("#locationwiseholidayMasterTableBody").empty();

    $("#locationwiseupdateholidayMasterTableBody").empty();

    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    location = decodeURI(location);
    year = decodeURI(year);
    id = decodeURI(id);
    $("#idValue").val(id);

    $("#holidayLocation option:contains(" + location + ")").attr('selected', 'selected');

    $("#year option:contains(" + year + ")").attr('selected', 'selected');
    $("#holidayLocation").attr('disabled', true);
    $("#year").attr('disabled', true);
    $("#locationwiseholidaySaveandUpdateButton").attr('disabled', true);
    $("#locationwiseholidayResetButton").attr('disabled', true);

    $("#example1").append("<tbody id='locationwiseupdateholidayMasterTableBody' class='table-striped table-bordered' />");

    $("#locationwiseupdateholidayMasterTableBody").text("");

    var existingHolidayIds = [];
    var j = 1;
    for (var i = 0; i < obj.locationWiseHolidayFormList.length; i++) {
//        displayOrder.push(obj.locationWiseHolidayFormList[i].);
        existingHolidayIds.push(obj.locationWiseHolidayFormList[i].commonHolidayId);
        var datePickerId = i + "datepicker";
        var datePickerId1 = i + "datepicker1";

        var data = "<tr id='" + i + "' style='cursor:pointer;' >"

                + "<td style='display:none' ><input type='text' value='" + obj.locationWiseHolidayFormList[i].commonHolidayId + "'></td>"
//                + "<td>" + obj.locationWiseHolidayFormList[i].sno + "</td>"
                + "<td>" + j++ + "</td>"
                + "<td>" + obj.locationWiseHolidayFormList[i].commonHoliday + "</td>"
                + "<td>" + obj.locationWiseHolidayFormList[i].holidayType + "</td>"
                + "<td>" + obj.locationWiseHolidayFormList[i].location + "</td>"
                + "<td>" + obj.locationWiseHolidayFormList[i].year + "</td>"
                + "<td><input type='text' value='" + obj.locationWiseHolidayFormList[i].fromDate + "' id=" + datePickerId + "></td>"
                + "<td><input type='text' value='" + obj.locationWiseHolidayFormList[i].toDate + "' id=" + datePickerId1 + "></td>";
        $("#locationwiseupdateholidayMasterTableBody").append(data);

        $("#" + datePickerId).datepicker({
            startDate: $("#fromdateVal").val(),
            endDate: $("#todateVal").val()
        });
        $("#" + datePickerId1).datepicker({
            startDate: $("#fromdateVal").val(),
            endDate: $("#todateVal").val()
        });
    }
    setTimeout(function() {
        var continuationSNO = existingHolidayIds.length;
        $.post(server_base_url + "/leavemanagement/commonholidaysmaster/FetchAll", {})
                .done(function(rdata) {
                    rdata = JSON.parse(rdata);
                    if (!validateResponseData(rdata, "")) {
                        var data = rdata;
                        var newData = {_id: 0, commonHoliday: "", holidayType: "", commonHolidayId: ""};
                        if (data !== null) {
                            $("#locationwiseholidayMasterTableBody").empty();
                            $("#example1").append("<tbody id='locationwiseholidayMasterTableBody' class='table-striped table-bordered' />");

                            if (data.length > 0) {
                                var sno = 0;
                                for (var j = data.length - 1; j >= 0; j--) {
                                    sno++;
                                    var containsCH = $.inArray(data[j].commonHoliday, commonHolidayArray);
                                    var containsHT = $.inArray(data[j].holidayType, holidayTypeArray);
                                    var containsCHID = $.inArray(data[j].id, commonHolidayId);
                                    if (containsCH === -1 || containsHT === -1 || containsCHID === -1) {
                                        newData._id = "NA";
                                        newData.commonHoliday = data[j].commonHoliday;
                                        newData.holidayType = data[j].holidayType;
                                        newData.commonHolidayId = data[j].id;
                                        if (existingHolidayIds.indexOf(newData.commonHolidayId) < 0) {
                                            pushDataIntoTable(newData, (++continuationSNO), j, "locationwiseholidayMasterTableBody");
                                        }

                                        $("#locationwiseholidayMasterTableBody" + sno + "lwhmfd").datepicker({
                                            startDate: $("#fromdateVal").val(),
                                            endDate: $("#todateVal").val()
                                        });
                                        $("#locationwiseholidayMasterTableBody" + sno + "lwhmtd").datepicker({
                                            startDate: $("#fromdateVal").val(),
                                            endDate: $("#todateVal").val()
                                        });
                                        commonHolidayArray[j] = data[j].commonHoliday;
                                        holidayTypeArray[j] = data[j].holidayTypeArray;
                                    }

                                }

                            }
                        }

//                        locationwiseEnableButton();
                        $("#locationwiseholidaySaveButton").attr('disabled', false);
                        $("#locationwiseholidayResetButton1").attr('disabled', false);
                        commonHolidayArray = [];
                        holidayTypeArray = [];
                    } else {
                        locationwiseEnableButton();
                    }
                });
    }, 10);

    $("#saveButtonRow").text("");
    $("#locationwiseholidayListPanelTableMainDiv").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue'><button type='button'"
            + "id='locationwiseholidaySaveButton' value='update' class='btn btn-success mr5' "
            + "onclick='locationwiseholidayValidation(locationwiseholidaySaveButton)' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
            + "<button type='button' id='locationwiseholidayResetButton1' value='back' "
            + " class='btn btn-warning mr5' onclick=removeAllRowsFromTable('example1') "
            + ">Back</button></center></div>");


    $("#locationWiseHolidayMasterTableBody1 tr").css("background-color", "white");
    $("#locationWiseHolidayMasterTableBody1 tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");

}

function pushDataIntoTable1(data, sno, i, tableParentId) {
    var location = $('#holidayLocation option:selected').text();
    var holidayLocation;
    var year1;
    var year = $('#year option:selected').text();
    if (data.holidayLocation === undefined || data.year === undefined) {
        holidayLocation = $("#holidayLocation").val();
        year1 = $("#year").val();
    } else {
        holidayLocation = data.holidayLocation;
        year1 = data.year1;
    }
    $("#" + tableParentId).append("<tr id='" + data._id + "' style='cursor:pointer;' >"
            + "<td style='display:none' ><input type='text' value='" + data.commonHolidayId + "'></td>"
            + "<td>" + sno + "</td>"
            + "<td>" + data.commonHoliday + "</td>"
            + "<td>" + data.holidayType + "</td>"
            + "<td style='cursor:pointer;'>" + location + "</td>"
            + "<td style='cursor:pointer;'>" + year + "</td>"

            + "<td><input type='text' value='" + data.locationWiseHolidayFormList.fromDate + "' id='" + tableParentId + sno + "lwhmfd'></td>"
            + "<td><input type='text' value='" + data.locationWiseHolidayFormList.toDate + "' id='" + tableParentId + sno + "lwhmfd'></td>");
}

function updateLocationwiseHolidayMasterData() {

    var location = $("#holidayLocation").val();
    var year = $("#year").val();
    var id = $("#idValue").val();

    var jsonArrayObject = [];

    var locationWiseHolidayMasterJsonObj = {};
    var TableRows = $('table#example1').find('tbody').find('tr');
    for (var i = 0; i < TableRows.length; i++) {
        var todates = $(TableRows[i]).find('td:eq(7) input').val().split("/");
        var fromDates = $(TableRows[i]).find('td:eq(6) input').val().split("/");
        var fromdt = new Date(fromDates[1] + "/" + fromDates[0] + "/" + fromDates[2]);
        var todt = new Date(todates[1] + "/" + todates[0] + "/" + todates[2]);
        var diffBtwDates = days_betweenToDates(fromdt, todt);
        if (diffBtwDates < 0) {
            alertPopUpMessage("To Date should be greater than or equal to From Date");
            $("#locationwiseholidaySaveButton").attr("disabled", false);
            $("#locationwiseholidayResetButton1").attr("disabled", false);
            return;
        }
        if (diffBtwDates >= 15) {
            alertPopUpMessage("From date and To date should not be greater than 15 days");
            $("#locationwiseholidaySaveButton").attr("disabled", false);
            $("#locationwiseholidayResetButton1").attr("disabled", false);
            return;
        }
        if ((fromDates == "" && todates != "") || (fromDates != "" && todates == ""))
        {
            alertPopUpMessage("Please enter both From Date and To Date");
            $("#locationwiseholidaySaveButton").attr("disabled", false);
            $("#locationwiseholidayResetButton1").attr("disabled", false);
            return false;
        }
        if (fromDates != "" && todates != "") {
            jsonArrayObject.push({
                commonHolidayId: $(TableRows[i]).find('td:eq(0) input').val(),
                sno: $(TableRows[i]).find('td:eq(1)').html(),
                commonHoliday: $(TableRows[i]).find('td:eq(2)').text(),
                holidayType: $(TableRows[i]).find('td:eq(3)').text(),
                location: $(TableRows[i]).find('td:eq(4)').text(),
                year: $(TableRows[i]).find('td:eq(5)').text(),
                fromDate: $(TableRows[i]).find('td:eq(6) input').val(),
                toDate: $(TableRows[i]).find('td:eq(7) input').val()
            });
            var count = 1;
            for (var j = 0; j < i; j++)
            {
                if (($(TableRows[i]).find('td:eq(6) input').val() == $(TableRows[j]).find('td:eq(6) input').val()) && ($(TableRows[i]).find('td:eq(7) input').val() == $(TableRows[j]).find('td:eq(7) input').val()))
                {
                    count++;

                }
                if (count > 2)
                {
                    alertPopUpMessage("Same From Date and To Date should not be equal for more than two");
                    $("#locationwiseholidaySaveButton").attr("disabled", false);
                    $("#locationwiseholidayResetButton1").attr("disabled", false);
                    return false;
                }
//                i++;
            }
        }


    }

    locationWiseHolidayMasterJsonObj["locationWiseHolidayFormList"] = jsonArrayObject;
    locationWiseHolidayMasterJsonObj = JSON.stringify(locationWiseHolidayMasterJsonObj);

    $.post(server_base_url + "/leavemanagement/locationwiseholidaymaster/Update", {
        obj: locationWiseHolidayMasterJsonObj,
        locationWiseHoliday: location,
        year: year,
        objId: id,
        userId: getUserSessionElement("userId")
    }).done(function(data) {
        if (data === fail) {
            locationwiseEnableButton();
            displayErrorMessages("pregsuccessBefore", failMessage, "");
        } else if (data === unauthorized) {
            locationwiseEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage, "");
        } else if (data === invalidSession) {
            locationwiseEnableButton();
            callSessionTimeout();
        } else if (data === statusException) {
            locationwiseEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage, "");
        } else if (data === null) {
            locationwiseEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available", "");
        } else if (data == "success") {
            scrolupfunction();
            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            setTimeout(function() {
                displayLocationWiseHolidaysMaster("dashboardBodyMainDiv");
            }, 2100);

        } else if (JSON.parse(data) == "duplicate") {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function() {
                displayLocationWiseHolidaysMaster();
            }, 3000);
        }
    });
}

//---------------------------------- Start Validation -----------------------------------------------
function locationwiseholidayValidation(id) {





    var result = 1;
    locationwiseDisableButton();
    var holidayLocation = $("#holidayLocation").val();
    var year = $("#year").val();


    if (holidayLocation == undefined || holidayLocation == null || holidayLocation == "" || holidayLocation == 0 || year == 0 || year == undefined || year == null || year == "") {
        locationwiseEnableButton();
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory Fields");
        result = 0;
        return false;
    }
    $("#pregsuccessBefore").text("");
    var buttonValue = $(id).val();
    var updateButton = "update";
    if (buttonValue === updateButton) {
        locationwiseholidayUpdateValidation(id);
    } else if (checkdataisThereOrnot()) {
        if (result !== 0) {
            var buttonValue = $(id).val();
            var saveButton = "save";
            var viewButton = "view";
            if (buttonValue === saveButton) {
                saveLocationwiseHolidayMaster("listOfHolidaysHeadingRow", "locationwiseholidayListPanelTableMainDiv1");
            } else if (buttonValue === updateButton) {
                updateLocationwiseHolidayMasterData();
            } else if (buttonValue === viewButton) {
                viewLocationWiseHolidayMasterDate(holidayLocation, year);
            }
        }
    }
}
function locationwiseholidayUpdateValidation(id) {
    var result = 1;
    locationwiseDisableButton();
    var holidayLocation = $("#holidayLocation").val();
    var year = $("#year").val();


    if (holidayLocation == undefined || holidayLocation == null || holidayLocation == "" || holidayLocation == 0 || year == 0 || year == undefined || year == null || year == "") {
        locationwiseEnableButton();
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please select mandatory Fields");
        result = 0;
        return false;
    }
    if (result !== 0) {
        $("#pregsuccessBefore").text("");
        var buttonValue = $(id).val();
        var updateButton = "update";
        var saveButton = "save";
        var viewButton = "view";
        if (buttonValue === saveButton) {

            saveLocationwiseHolidayMaster("listOfHolidaysHeadingRow", "locationwiseholidayListPanelTableMainDiv1");
        } else if (buttonValue === updateButton) {
            updateLocationwiseHolidayMasterData();
        } else if (buttonValue === viewButton) {
            viewLocationWiseHolidayMasterDate(holidayLocation, year);
        }

    }
}
function checkdataisThereOrnot() {
    var holi = $("#holidayLocation option:selected").text();
    var holiYear = $("#year option:selected").text();

    var TableRows = $("#example2").find('tbody').find('tr');
    for (var i = 0; i < TableRows.length; i++) {
        var holidayLoc = $(TableRows[i]).find('td:eq(1)').text();
        var yearLoc = $(TableRows[i]).find('td:eq(2)').text();
        var anchortagId = $(TableRows[i]).find('td:eq(0) input').val();
        if (holidayLoc == holi) {
            if (holiYear = yearLoc) {
                $("#" + anchortagId + "AnchorTag").click();
                return false;
            }
        }
    }
    return true;
}

function saveLocationwiseHolidayMaster(tableId, showErrorInDivId) {
    if (!checkUserPrivelege(pvCreateLocationWiseHolidayMaster)) {
        alertPopUpMessage("You are not authorised");
        return;
    }

    var holidayLocation = $("#holidayLocation").val();
    var year = $("#year").val();
    var tablearray = [];
    var locationWiseHolidayMasterJsonObj = {};

    var sno1 = 1;
//    var count = 0;
    var TableRows = $("#" + tableId).find('tbody').find('tr');
    for (var i = 0; i < TableRows.length; i++) {
        var todates = $(TableRows[i]).find('td:eq(7) input').val().split("/");
        var fromDates = $(TableRows[i]).find('td:eq(6) input').val().split("/");
        var fromdt = new Date(fromDates[1] + "/" + fromDates[0] + "/" + fromDates[2]);
        var todt = new Date(todates[1] + "/" + todates[0] + "/" + todates[2]);
        var diffBtwDates = days_betweenToDates(fromdt, todt);
        console.log(diffBtwDates);
        if (diffBtwDates < 0) {
            alertPopUpMessage("To Date should be greater than or equal to From Date");
            $("#locationwiseholidaySaveButton").attr("disabled", false);
            $("#locationwiseholidayResetButton1").attr("disabled", false);
            return;
        }
        if (diffBtwDates >= 15) {
            alertPopUpMessage("From date and To date should not be greater than 15 days");
            $("#locationwiseholidaySaveButton").attr("disabled", false);
            $("#locationwiseholidayResetButton1").attr("disabled", false);
            return;
        }
        if ((fromDates == "" && todates != "") || (fromDates != "" && todates == ""))
        {
            alertPopUpMessage("Please enter both From Date and To Date");
            $("#locationwiseholidaySaveButton").attr("disabled", false);
            $("#locationwiseholidayResetButton1").attr("disabled", false);
            return false;
        }

        if (fromDates != "" && todates != "") {
            tablearray.push({
                commonHolidayId: $(TableRows[i]).find('td:eq(0) input').val(),
                sno: sno1++,
                commonHoliday: $(TableRows[i]).find('td:eq(2)').text(),
                holidayType: $(TableRows[i]).find('td:eq(3)').text(),
                location: $(TableRows[i]).find('td:eq(4)').text(),
                year: $(TableRows[i]).find('td:eq(5)').text(),
                fromDate: $(TableRows[i]).find('td:eq(6) input').val(),
                toDate: $(TableRows[i]).find('td:eq(7) input').val()

            });
            var count = 1;
            for (var j = 0; j < i; j++)
            {
                if (($(TableRows[i]).find('td:eq(6) input').val() == $(TableRows[j]).find('td:eq(6) input').val()) && ($(TableRows[i]).find('td:eq(7) input').val() == $(TableRows[j]).find('td:eq(7) input').val()))
                {
                    count++;

                }
                if (count > 2)
                {
                    alertPopUpMessage("Same From Date and To Date should not be equal for more than two");
                    $("#locationwiseholidaySaveButton").attr("disabled", false);
                    $("#locationwiseholidayResetButton1").attr("disabled", false);
                    return false;
                }
//                i++;
            }
        }
    }
    locationWiseHolidayMasterJsonObj["locationWiseHolidayFormList"] = tablearray;

    locationWiseHolidayMasterJsonObj = JSON.stringify(locationWiseHolidayMasterJsonObj);
    $.post(server_base_url + "leavemanagement/locationwiseholidaymaster/Save", {
        obj: locationWiseHolidayMasterJsonObj,
        locationWiseHoliday: holidayLocation,
        year: year,
        userId: getUserSessionElement("userId")
    }).done(function(data) {

        if (data === fail) {
            locationwiseEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
        } else if (data === unauthorized) {
            locationwiseEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data === invalidSession) {
            locationwiseEnableButton();
            callSessionTimeout();
        } else if (data === statusException) {
            locationwiseEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data === null) {
            locationwiseEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");
        } else if (JSON.parse(data) === "duplicate") {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function() {
                displayLocationWiseHolidaysMaster();
            }, 3000);
        } else {

            var holidayLocation = $("#holidayLocation").val();
            var year = $("#year").val();
            viewLocationWiseHolidayMasterDate(holidayLocation, year);
            setTimeout(function() {
                locationwiseEnableButton();
            }, 2100);
            scrolupfunction();
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function() {
                displayLocationWiseHolidaysMaster("dashboardBodyMainDiv");
            }, 2100);

        }
    });

}

function dropdownTableData(holidayLocation, year) {

    var tableDataRange = [];

    $("#example1").append("<tbody id='locationwiseholidayMasterTableBody' class='table-striped table-bordered' />");
    $("#locationwiseholidayMasterTableBody").append("<tr id='NA' style='cursor:pointer;' >"
            + "<td>" + 1 + "</td>"
            + "<td style='cursor:pointer;'>" + holidayLocation + "</td>"
            + "<td style='cursor:pointer;'>" + year + "</td>"
            + "<td style='cursor:pointer;'>"
            + "<input id='1lwhmfd' type=\"text\" data-date-format=\"mm-dd-yyyy\" placeholder=\"mm-dd-yyyy\" class=\"datepicker-default \"/>"
            + "<td style='cursor:pointer;'>"
            + "<input id='1lwhmtd' type=\"text\" data-date-format=\"mm-dd-yyyy\" placeholder=\"mm-dd-yyyy\" class=\"datepicker-default \"/>"
            );

    tableDataRange[i] = "#" + "1lwhmfd";
    tableDataRange[i + 1] = "#" + "1lwhmtd";

    locationwiseEnableButton();

    for (i = 0; i < tableDataRange.length; i++) {
        $(tableDataRange[i]).datepicker();

    }

}
var commonHolidayId = [];
function populateLocationWiseTableWithCommonAndHolidayType() {
    $.post(server_base_url + "/leavemanagement/commonholidaysmaster/FetchAll", {})
            .done(function(rdata) {
                rdata = JSON.parse(rdata);
                if (!validateResponseData(rdata, "")) {
                    var data = rdata;
                    var newData = {_id: 0, commonHoliday: "", holidayType: "", commonHolidayId: ""};
                    if (data !== null) {
                        $("#locationwiseholidayMasterTableBody").empty();

                        $("#listOfHolidaysHeadingRow").append("<tbody id='locationwiseholidayMasterTableBody' class='table-striped table-bordered' />");
                        if (data.length > 0) {

                            var sno = 0;
                            for (var i = data.length - 1; i >= 0; i--) {


                                sno++;
                                var containsCH = $.inArray(data[i].commonHoliday, commonHolidayArray);
                                var containsHT = $.inArray(data[i].holidayType, holidayTypeArray);
                                var containsCHID = $.inArray(data[i].id, commonHolidayId);

                                if (containsCH === -1 || containsHT === -1 || containsCHID === -1) {
                                    newData._id = "NA";
                                    newData.commonHoliday = data[i].commonHoliday;
                                    newData.holidayType = data[i].holidayType;
                                    newData.commonHolidayId = data[i].id;
                                    pushDataIntoTable(newData, sno, i, "locationwiseholidayMasterTableBody");
                                    $("#locationwiseholidayMasterTableBody" + sno + "lwhmfd").datepicker({
                                        startDate: $("#fromdateVal").val(),
                                        endDate: $("#todateVal").val()
                                    });
                                    $("#locationwiseholidayMasterTableBody" + sno + "lwhmtd").datepicker({
                                        startDate: $("#fromdateVal").val(),
                                        endDate: $("#todateVal").val()
                                    });
                                    commonHolidayArray[i] = data[i].commonHoliday;
                                    holidayTypeArray[i] = data[i].holidayTypeArray;
                                }
                            }

                        }
                    }

                    locationwiseEnableButton();
                    commonHolidayArray = [];
                    holidayTypeArray = [];
                } else {
                    locationwiseEnableButton();
                }
            });

}

function pushDataIntoTable(data, sno, i, tableParentId) {
    var location = $('#holidayLocation option:selected').text();
    var holidayLocation;
    var year1;
    var year = $('#year option:selected').text();
    if (data.holidayLocation === undefined || data.year === undefined) {
        holidayLocation = $("#holidayLocation").val();
        year1 = $("#year").val();
    } else {
        holidayLocation = data.holidayLocation;
        year1 = data.year1;
    }
//
    $("#" + tableParentId).append("<tr id='" + data._id + "' style='cursor:pointer;' >"
            + "<td style='display:none' ><input type='text' value='" + data.commonHolidayId + "'></td>"
            + "<td>" + sno + "</td>"
            + "<td>" + data.commonHoliday + "</td>"
            + "<td>" + data.holidayType + "</td>"
            + "<td style='cursor:pointer;'>" + location + "</td>"
            + "<td style='cursor:pointer;'>" + year + "</td>"
            + "<td style='cursor:pointer;'>"
            + "<input id='" + tableParentId + sno + "lwhmfd' type=\"text\" />"
            + "<td style='cursor:pointer;'>"
            + "<input id='" + tableParentId + sno + "lwhmtd' type=\"text\" />");
}

var commonHolidayArray = [];
var holidayTypeArray = [];

function viewLocationWiseHolidayMasterDate(holidayLocation, year) {

    $("#locationwiseholidayTypetableHeader").text("").append("<div id='locationwiseholidayTableMainDiv'/>");
    $("#locationwiseholidayTableMainDiv").append("<div id='locationwiseholidayMasterTableListPanel' class='panel panel-blue'/>");
    $("#locationwiseholidayMasterTableListPanel").append("<div id='locationwiseholidayMasterTableHeading' class='panel-heading' />");
    $("#locationwiseholidayMasterTableHeading").append("<h4 id='locationwiseholidayMasterTableHeader' class='panel-title' />");

    $("#locationwiseholidayMasterTableHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>List of Holidays</center>");
    $("#locationwiseholidayMasterTableHeader").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#locationwiseholidayMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");

    addToggleToId("colMaritial2", "collapseOne3");


    $("#collapseOne3").append("<div id='locationwiseholidayListPanelTableMainDiv' class = 'panel-body' />");
    $("#locationwiseholidayListPanelTableMainDiv").append("<div id='locationwiseholidayListPanelRow' class = 'row' />");
    $("#locationwiseholidayListPanelTableMainDiv").append("<div  id='tablesuccessBefore'/>");
    $("#locationwiseholidayListPanelTableMainDiv").append("<div id='locationwiseholidayMastertableresponsiveDiv1' class='table-responsive' />");
    $("#locationwiseholidayMastertableresponsiveDiv1").append('<table id="listOfHolidaysHeadingRow" class="table table-striped table-bordered table-hover">');


    $("#listOfHolidaysHeadingRow").append("<thead><tr>"

            + "<th>S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Common Holiday</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Holiday Type</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Year</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>From Date</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>To Date</th>"

            + "</tr></thead>");
    $("#locationwiseholidayListPanelTableMainDiv").append("<div id='saveButtonRow' class='form-group' />");
    $("#saveButtonRow").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue'><button type='button'"
            + "id='locationwiseholidaySaveButton' value='save' class='btn btn-success mr5' "
            + "onclick='locationwiseholidayValidation(locationwiseholidaySaveButton)' >Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
            + "<button type='button' id='locationwiseholidayResetButton1' value='reset' "
            + " class='btn btn-warning mr5' onclick='removeAllRowsFromTable()' "
            + ">Reset</button></center></div>");
    $.post(server_base_url + "/leavemanagement/locationwiseholidaymaster/View", {
        holidaylocation: holidayLocation,
        year: year
    }).done(function(rdata) {

        $("#locationwiseupdateholidayMasterTableBody").empty();
        rdata = JSON.parse(rdata);
        populateLocationWiseTableWithCommonAndHolidayType();

    });

}

function removeAllRowsFromTable() {

    $("#locationwiseholidayMasterTableBody tr").each(function() {
        var row = $(this).closest('tr');
        row.find('td:eq(6) input').val("");
        row.find('td:eq(7) input').val("");
    });
    $("#locationwiseupdateholidayMasterTableBody").text("");

    if ($("#locationwiseholidayResetButton1").text() === "Back")
    {
        displayLocationWiseHolidaysMaster("dashboardBodyMainDiv");
    }
}

function validateTableDates(id) {

    var isInvalid = false;
    $("#" + id + " tr").each(function() {
        var row = $(this).closest('tr');
        var fromDate = row.find('td:eq(5) input').val();
        var toDate = row.find('td:eq(6) input').val();

        if (fromDate === "" || toDate === "") {
            isInvalid = true;
            return false;
        }
    });

    return isInvalid;
}

function fetchYearListForLocationWiseHolidayMaster() {
    $.get(server_base_url + "/Leave/FinancialYear/View", {
        value: "view"
    }).done(function(pdata) {
        pdata = JSON.parse(pdata)
        if (pdata != null && pdata != 501 && pdata != "501" && pdata != "500")
        {
            largest = parseInt(pdata[0].year);

            var count = 0;
            for (var i = 0; i < pdata.length; i++)
            {
                if (pdata[i].isActive == "Yes") {
                    count++;
                    $("#year").append("<option value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].year + "</option>");
                    $("#fromdateVal").val(pdata[i].fromDate);
                    $("#todateVal").val(pdata[i].toDate);

                }
            }
            if (count == 0)
                $('#year').append("<option value='' selected>---No Active Leave Financila Year----</option>");
        }
    });
}

function convertDateToMillis(date1) {
    var fromDates = date1.split("/");
    var fromdt = new Date(fromDates[1] + "/" + fromDates[0] + "/" + fromDates[2]);
    var n = fromdt.getTime();
    return n;
}
