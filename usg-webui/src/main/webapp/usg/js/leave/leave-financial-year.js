/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayLeaveFinancialYearMaster(divId) {

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> >> <label>Financial Year Master</label>');


    $("#dashboardBodyMainDiv").text("").append('<div id="leaveFinancialYearMain"/>');
    $("#leaveFinancialYearMain").text("").append("<div id='leaveYearMainDiv' class='page-content'/>");
//for panel group  
    $("#leaveYearMainDiv").append('<input type="hidden" id="screenId">');
    $("#leaveYearMainDiv").append("<div id='leavefinancialYearFirstPanel' class='panel panel-blue' />");
    $("#leavefinancialYearFirstPanel").append("<div id='leavefinancialYearfirstPanelHeading' class='panel-heading' />");
    $("#leavefinancialYearfirstPanelHeading").append("<h4 id='leavefinancialYeartableHeader1' class='panel-title' />");
    $("#leavefinancialYeartableHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>Financial Year Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#leavefinancialYearFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseFin").click(function() {
        $("#collapseOne2").toggle();
        if ($("#collapseFin span").hasClass("glyphicon-minus-sign")) {
            $("#collapseFin").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#collapseFin").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelMainBody").append('<div class="form-body pal" id="form_body">');
    $("#form_body").append('<input type="hidden" id="idValue">');
    //first row
    $("#form_body").append('<div class="row" id="MessageDiv">');
    $("#form_body").append('<div class="row" id="form_row">');
    $("#form_row").append('<div class="col-md-6" id="form_col">');
    $("#form_col").append('<div class="form-group has-success" id="form_group">');
    $("#form_col").append('<label for="Year" class="control-label" id="control_label">Year<span class="require">*</span></label>');
    $("#form_col").append('<div class="form-group" id="yearGroup">');
    $("#yearGroup").append('<select id="year" class="form-control"></select>');
    $("#yearGroup").append("<span id='yearErr'></span>");
    $("#year").attr("onchange", "getDatesInLeaveFY()");
    $("#form_body").append('<div class="row" id="form_row_div">');
    $("#form_row_div").append('<div class="col-md-6" id="form_col_div">');
    $("#form_col_div").append('<div class="form-group has-success" id="form_group_div">');
    $("#form_col_div").append('<label for="inputFirstName" class="control-label">From Date<span class="require">*</span></label>');
    $("#form_col_div").append('<input id="fromdate" type="text" placeholder="DD/MM/YYYY" class="form-control" readonly/>');
    $("#form_col_div").append("<span id='DateErr'></span>");
    $("#form_row_div").append('<div class="col-md-6" id="form_col_div1">');
    $("#form_col_div1").append('<div class="form-group has-success" id="form_group_div1">');
    $("#form_col_div1").append('<label for="inputFirstName" class="control-label">To Date<span class="require">*</span></label>');
    $("#form_col_div1").append('<input id="todate" type="text" placeholder="DD/MM/YYYY" class="form-control" readonly/>');
    $("#form_col_div1").append("<span id='toDateErr'></span>");
    $("#panelMainBody").append("<div id='yearBtnDiv' class='row' />");
    $("#yearBtnDiv").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button' value='Save' class='btn btn-success mr5 '  onclick='leaveFinancialYearSave()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='displayLeaveFinancialYearMaster()' class='btn btn-warning mr5 ' name='reset' value='reset'>Reset</button></center></div>");
    $("#preg_ppid").focus();
    //list
    $("#leaveYearMainDiv").append("<div id='yearListPanel' class='panel panel-blue' />");
    $("#yearListPanel").append("<div id='yearlistPanelHeading' class='panel-heading' />");
    $("#yearlistPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Financial Year(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFinTable'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#yearListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseFinTable").click(function() {
        $("#collapseOne3").toggle();
        if ($("#collapseFinTable span").hasClass("glyphicon-minus-sign")) {
            $("#collapseFinTable").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#collapseFinTable").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    fetchallLeaveFY();
    viewLeaveFinancialYearList('listpanelMainBody');
}

function viewLeaveFinancialYearList(divId)
{
    $("#" + divId).text("").append("<div id='ErrorDiv'/>");
    $("#" + divId).append("<div id='listpanelRow' class='row' />");
    //$("#listpanelRow").text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#" + divId).append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered table-warning mb30' id='financialyeartable' />");
    $.get(server_base_url + "/Leave/FinancialYear/View", {
        value: "view"
    }).done(function(pdata) {

        pdata = JSON.parse(pdata);
        if (pdata == fail) {
            displayLargeErrorMessagesInCenterInRed("ErrorDiv", emptyListMessage + "");
        } else if (pdata == unauthorized || pdata.statuscode == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("ErrorDiv", unauthorizedMessage + "");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("ErrorDiv", statusExceptionMessage + "");
        } else {
            if (pdata != null) {
                if (pdata.length > 0) {

                    $("#financialyeartable").append("<thead class=''><tr id='financialyeartableTrHeadhrmsbudgetfinance'>"

                            + " <th> S.No</th>"
                            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> From Date</th>"
                            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> To Date</th>"
                            + "<th style='min-width:30%;width:80px;'><i class='glyphicon'></i> Active</th>");
                    $("#financialyeartableTrHeadhrmsbudgetfinance").append("<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>");
                    $("#financialyeartable").append("<tbody id='financialyearTableBody' class='table-striped table-bordered' />");
                    var sno = 0;
                    for (var i = pdata.length - 1; i >= 0; i--) {
                        sno++;
                        var json = {
                            id: pdata[i]._id.$oid,
                            year: pdata[i].year,
                            fromDate: pdata[i].fromDate,
                            toDate: pdata[i].toDate
                        };
                        json = JSON.stringify(json);
                        var active = pdata[i].isActive;
                        if (active == 'Yes')
                        {
                            var financialYear = pdata[i].fromDate + "~" + pdata[i].toDate;
                            setUserSessionElement(seLeaveCurrentFinancialYear, financialYear);
                            $("#financialyearTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].fromDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].toDate + "</td>"
                                    + "<td style='cursor:pointer;'class='activebut'>" + ' <button type="button" class="btn btn-success mr5" style="align:center;color:white"><center>Active</center></button>' + "</td>"
                                    + "<td onclick=checkingActiveFinancialYearDelete() style='cursor:pointer;' >" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td>");
                        } else
                        {

                            $("#financialyearTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].fromDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].toDate + "</td>"
                                    + "<td style='cursor:pointer;' onclick=madeItActive('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].fromDate) + "','" + encodeURI(pdata[i].toDate) + "')>" + ' <button type="button" class="btn btn-danger mr5" style="align:center;color:white"><center>In Active</center></button>' + "</td>"
                                    + "<td style='cursor:pointer;' onclick=deletePopUp('deleteLeaveFinancialYear','displayLeaveFinancialYearMaster','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");
                        }
                    }
                    $("#financialyeartable").dataTable();
                }
            }
        }
    });
}

function madeItActive(id, fromDt, toDt) {
    var finalDt = decodeURI(fromDt) + "~" + decodeURI(toDt);
    $.post(server_base_url + "/Leave/FinancialYear/Active", {
        id: id,
        userId: getUserSessionElement("userId"),
        finalDt: finalDt
    }).done(function(data) {
        if (data.statuscode == fail) {
            displayErrorMessages("ErrorDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displayErrorMessages("ErrorDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displayErrorMessages("ErrorDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("ErrorDiv", updateMessage, "");
            setTimeout(function() {
                displayLeaveFinancialYearMaster('listpanelMainBody');
            }, 3000);
        }


    });
}
function deleteLeaveFinancialYear(id) {

    $.post(server_base_url + "/Leave/FinancialYear/Delete", {
        id: id,
        userId: getUserSessionElement("userId")
    }).done(function(data) {

        if (data.statuscode == fail) {
            displayErrorMessages("ErrorDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displayErrorMessages("ErrorDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displayErrorMessages("ErrorDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (JSON.parse(data) == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("ErrorDiv", "" + delete_map_messages, "");
            setTimeout(function() {
                displayLeaveFinancialYearMaster('listpanelMainBody');
            }, 3000);
        } else if (JSON.parse(data) == null) {
            displayErrorMessages("ErrorDiv", "FinancilaYear Deletion Failed" + "");
        } else {

            displaySuccessMessages("ErrorDiv", deleteMessage, "");
            setTimeout(function() {
                displayLeaveFinancialYearMaster('listpanelMainBody');
            }, 3000);
        }

    });
}

function leaveFinancialYearSave() {

    var year = $("#year").val();
    var fromDate = $("#fromdate").val();
    var toDate = $("#todate").val();
    if (year === "" || year === undefined || year === null) {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
    } else {
        var json = {
            year: year,
            fromDate: fromDate,
            toDate: toDate
        };
        var financialYear = JSON.stringify(json);
        $.post(server_base_url + "/Leave/FinancialYear/Save", {
            financialYear: financialYear,
            userId: getUserSessionElement("userId")
        }).done(function(data) {

            if (data.statuscode === fail) {
                displayErrorMessages("pregsuccessBefore", failMessage + "");
            } else if (data.statuscode === unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data.statuscode === statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data.statuscode === invalidSession) {
                callSessionTimeout();
            } else if (JSON.parse(data) == "duplicate") {
                displayErrorMessages("pregsuccessBefore", existed + "");
                setTimeout(function() {
                    displayLeaveFinancialYearMaster();
                }, 3000);
            } else {
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function() {
                    displayLeaveFinancialYearMaster();
                }, 3000);
            }
        });
    }
}
function fetchallLeaveFY(name) {
    $('#year').text("");
    var largest;
    $.get(server_base_url + "/Leave/FinancialYear/View", {
        value: "dropdown"
    }).done(function(pdata) {

        pdata = JSON.parse(pdata);

        if (pdata.length > 0)
        {
            largest = parseInt(pdata[0].year);
            for (var i = 1; i < pdata.length; i++)
            {
                if (parseInt(pdata[i].year) > largest)
                {
                    largest = parseInt(pdata[i].year);
                }
            }
            $('#year').append("<option value='' class='form-control' selected disabled >----Select Year----</option>");
            for (var i = largest + 1; i >= parseInt(pdata[0].year); i--)
            {
                if (name == i)
                {
                    $('#year').append("<option value='" + i + "' selected>" + i + "</option>");
                } else
                {
                    $('#year').append("<option value='" + i + "'>" + i + "</option>");
                }
            }
        } else
        {
            $('#year').append("<option value='' class='form-control' selected disabled >----Select Year----</option>");
            var i = new Date().getFullYear();

            for (var j = 0; j < 5; j++) {
                $('#year').append("<option value='" + i + "'>" + i + "</option>");
                i = i - 1;

            }


        }
    });
}

function getDatesInLeaveFY() {

    var year = $("#year").val();
    var fromyear = parseInt(year);
    var toyear = fromyear;
    $("#fromdate").val("01/01/" + fromyear);
    $("#todate").val("31/12/" + toyear);
}