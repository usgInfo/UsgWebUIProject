/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createHrmsFinancialYear() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>>> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>Financial Year Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="hrmsFinancialYearMain"/>');

    $("#hrmsFinancialYearMain").text("").append("<div id='yearMainDiv' />");
//for panel group
    if (checkUserPrivelege(pvCreateFinancialYear)) {
        $("#yearMainDiv").append("<div id='financialYearFirstPanel' class='panel panel-blue' />");
        $("#financialYearFirstPanel").append("<div id='financialYearfirstPanelHeading' class='panel-heading' />");

        $("#financialYearfirstPanelHeading").append("<h4 id='financialYeartableHeader1' class='panel-title' />");
        $("#financialYeartableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>Financial Year Master</center>");
        $("#financialYearFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#collapseOne2").append("<div id='financialYearpanelMainBody' class = 'panel-body' />");

        $("#financialYearpanelMainBody").append('<div class="form-body pal" id="form_body">');
        //first row
        $("#form_body").append('<div class="row" id="MessageDiv">');
        $("#form_body").append('<div class="row" id="form_row">');
        $("#form_row").append('<div class="col-md-6" id="form_col">');
        $("#form_col").append('<div class="form-group has-success" id="form_group">');
        $("#form_col").append('<label for="Year" class="control-label" id="control_label">Year<span class="require">*</span></label>');
        $("#form_col").append('<div class="form-group" id="form_group1">');
        $("#form_group1").append('<select id="selectYear" class="form-control"></select>');
        $("#form_group1").append("<span id='yearErr'></span>");
        $("#selectYear").attr("onchange", "getdates()");
        //second row
        $("#form_body").append('<div class="row" id="form_row_div">');
        $("#form_row_div").append('<div class="col-md-6" id="form_col_div">');
        $("#form_col_div").append('<div class="form-group has-success" id="form_group_div">');
        $("#form_col_div").append('<label for="inputFirstName" class="control-label" >From date<span class="required" style="color:red">*</span></label>');
        $("#form_col_div").append('<input id="fromDate" type="text" placeholder="dd/mm/yyyy" class="form-control" readonly/>');
        $("#form_col_div").append('<span id="fromDateErr"></span>');


        $("#form_row_div").append('<div class="col-md-6" id="form_col_div1">');
        $("#form_col_div1").append('<div class="form-group has-success" id="form_group_div1">');
        $("#form_col_div1").append('<label for="inputFirstName" class="control-label" >To date<span class="required" style="color:red">*</span></label>');
        $("#form_col_div1").append('<input id="toDate" type="text" placeholder="dd/mm/yyyy" class="form-control" readonly/>');
        $("#form_col_div1").append('<span id="toDateErr"></span>');

        $("#financialYearpanelMainBody").append('<div  id="button_div" align="center">');
        $("#button_div").append('<button type="submit" class="btn btn-success bn" id="submit_button" onclick="financialYearValidation()">Save</button> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type="button" id="cancel_button" class="btn btn-warning bn" onclick="resetYear()">Reset</button>');
        fetchAllYear();
    }
    if (checkUserPrivelege(pvViewFinancialYear)) {
        $("#yearMainDiv").append(' <div class="panel panel-blue" id="panel_blue1">');
        $("#panel_blue1").append("<div id='financiallistYearFirstPanel' class='panel panel-blue' />");
        $("#financiallistYearFirstPanel").append("<div id='financiallistYearfirstPanelHeading' class='panel-heading' />");

        $("#financiallistYearfirstPanelHeading").append("<h4 id='financiallistYeartableHeader1' class='panel-title' />");
        $("#financiallistYeartableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>List of Financial Year</center>");
        $("#financiallistYearFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#collapseOne2").append("<div id='financialliatYearpanelMainBody' class = 'panel-body' />");

        $("#financialliatYearpanelMainBody").append("<center><span id='pregviewsuccessBefore'></span></center>");

        $("#panel_blue1").append("<div id='financialliatYearpanelMainBodyRow'  />");

        viewFinancialYearList('financialliatYearpanelMainBodyRow');
    }
}
function fetchAllYear() {
    var largest;
    $.get(server_base_url + "hrms/common/FinancialYear/View", {
    }).done(function (pdata) {

        if (pdata != null && pdata != 501)
        {
            largest = parseInt(pdata[0].year);
            for (var i = 1; i < pdata.length; i++)
            {
                if (parseInt(pdata[i].year) > largest)
                {
                    largest = parseInt(pdata[i].year);
                }
            }
            $('#selectYear').append("<option value='' class='form-control' selected disabled >----Select Year----</option>");
            for (var i = largest + 1; i > largest - 4; i--)
            {

                $('#selectYear').append("<option value='" + i + "'>" + i + "</option>");
            }
        } else
        {
            $('#selectYear').append("<option value='' class='form-control' selected disabled >----Select Year----</option>");
            var i = new Date().getFullYear();
            $('#selectYear').append("<option value='" + i + "'>" + i + "</option>");
        }
    });
}
function getdates() {

    var year = $("#selectYear").val();
    var fromyear = parseInt(year);
    var toyear = fromyear + 1;
    $("#fromDate").val("01/04/" + fromyear);
    $("#toDate").val("31/03/" + toyear);

}
function resetYear() {

    $("#selectYear").val("");
    $("#fromDate").val("");
    $("#toDate").val("");
}
function viewFinancialYearList(divId)
{
    if (checkUserPrivelege(pvViewFinancialYear)) {
        $("#" + divId).text("").append("<div class='tab-pane' id='viewfinanceYear'/>");
        $("#viewfinanceYear").append("<div class='table-responsive' id='viewfinanceYearSectionTableDiv' />");
        $("#viewfinanceYearSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='financialyeartable' />");
        $("#financialyeartable").append("<thead><tr id='financialYeadHeadId'>"

                + " <th class='sno_width'> S.No</th>"
                + "<th class='table_col_width'><i class='glyphicon'></i> From Date</th>"
                + "<th class='table_col_width'><i class='glyphicon'></i> To Date</th>"
                + "<th class='table_anchor_width'><i class='glyphicon'></i> Active</th>");
        if (checkUserPrivelege(pvUpdateFinancialYear)) {
            $("#financialYeadHeadId").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteFinancialYear)) {
            $("#financialYeadHeadId").append("<th class='table_anchor_width'><i class='fa' ></i> Delete</th>");
        }

        $.get(server_base_url + "hrms/common/FinancialYear/View", {
    }).done(function (pdata) {

            if (pdata == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (pdata == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == statusException) {

            } else {
                if (pdata != null) {
                    if (pdata.length > 0) {


                        var sno = 0;

                        $("#financialyeartable").append("<tbody id='financialyearTableBody' class='table-striped table-bordered' />");

                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;
                            var active = pdata[i].active;

                            if (active == 'Yes')
                            {
                                $("#financialyearTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                        + "<td>" + sno + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].fromDate + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].toDate + "</td>"
                                        + "<td style='cursor:pointer;'class='activebut'>" + ' <button type="button" class="btn btn-success mr5" style="align:center;color:white"><center>Active</center></button>' + "</td>");
                                if (checkUserPrivelege(pvUpdateFinancialYear)) {
                                    $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);'  class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");
                                }
                                if (checkUserPrivelege(pvDeleteFinancialYear)) {
                                    $("#" + pdata[i]._id.$oid).append("<td><a href='javascript:void(0);'  class='anchor_delete' id='btn-btn-delete'><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                                }
                            } else
                            {
                                $("#financialyearTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                        + "<td>" + sno + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].fromDate + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].toDate + "</td>"
                                        + "<td style='cursor:pointer;' class='activebut'>" + ' <button type="button" class="btn btn-danger mr5" style="align:center;color:white"><center>In Active</center></button>' + "</td>");
                                if (checkUserPrivelege(pvUpdateFinancialYear)) {
                                    $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=editFinancialYear('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].fromDate) + "','" + encodeURI(pdata[i].toDate) + "','" + encodeURI(pdata[i].year) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");                                }
                                if (checkUserPrivelege(pvDeleteFinancialYear)) {
                                    $("#" + pdata[i]._id.$oid).append("<td><a href='javascript:void(0);' onclick=deleteFianan('" + pdata[i]._id.$oid + "') class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");                                }
                            }
                        }


                        $("#financialyeartable").dataTable();

                    $("#financialyeartable tbody tr td.activebut").click(function () {

                            var id = $(this).closest('tr[id]').attr('id');

                            $.post(server_base_url + "hrms/common/FinancialYear/Change", {
                                id: id
                        }).done(function (data) {

                                if (data == fail) {
                                    displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                                    displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
                                } else if (data.statuscode == unauthorized) {
                                    displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                                    displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
                                } else if (data == invalidSession) {
                                    callSessionTimeout();
                                } else if (data == statusException) {
                                    displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                                    displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
                                } else {
                                    createHrmsFinancialYear('listpanelRow');
                                    displayLargeSuccessMessages("pregsuccessBefore", "" + successMessageUpdate + "<br /><br />");

                                }
                            });
                        });

                    }

                }

            }
        });
    }
}
function formatDate(input) {
    var datePart = input.match(/\d+/g),
            month = datePart[0], // get only two digits
            day = datePart[1], year = datePart[2];

    return day + '/' + month + '/' + year;
}

function financialYearValidation() {
    var year = $("#selectYear").val();
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    if (year == "" || year == null) {
        addSomeClass("form_group1", "has-error");
        displaySmallErrorMessages("yearErr", "Please Select Year");
    } else if (fromDate == "") {
        addSomeClass("form_col_div", "has-error");
        displaySmallErrorMessages("fromDateErr", "Please Select the from Date");
    } else if (toDate == "") {
        addSomeClass("form_col_div1", "has-error");
        displaySmallErrorMessages("toDateErr", "Please Select the To date");
    } else {
        saveFinancialYear();
    }

}
function editFinancialYear(id, fromDate, todate, Year) {
    if (checkUserPrivelege(pvUpdateFinancialYear)) {
        $("#fromdat").focus();

        var fromdate = decodeURI(fromDate);
        var toDate = decodeURI(todate);
        var year = decodeURI(Year);

        $("#selectYear").val(year);
        $("#fromDate").val(fromdate);
        $("#toDate").val(toDate);
        $("#year option:contains(" + year + ")").attr('selected', 'selected');
        $("#messageDiv").text("");
        $("#fromdate").prop("readonly", false);
        $("#todate").prop("readonly", false);
        $("#year").prop("readonly", false);
        $("#button_div").text("").append("<center><button id='updateButton' onclick=updateFinancilaYear('" + id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='createHrmsFinancialYear()' id='ddoUpdateReset' class='btn btn-warning bn' >Back</button></center>");
    }
}


function updateFinancilaYear(id) {
    if (checkUserPrivelege(pvUpdateFinancialYear)) {
        var year = $("#selectYear").val();
        var updatefromdat = $("#fromDate").val();
        var updatetodat = $("#toDate").val();
        var userid = getUserSessionElement("userId");

    var Json = {
        fromDate: updatefromdat,
        toDate: updatetodat,
        year: year
    }
    var json = JSON.stringify(Json)
    $.post(server_base_url + "hrms/common/FinancialYear/Update", {
        id: id,
        userid: userid,
        json: json
    }).done(function (data) {
     
        if (data == fail) {
            displayLargeErrorMessages("MessageDiv", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("MessageDiv", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized) {
            displayLargeErrorMessages("MessageDiv", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("MessageDiv", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages("MessageDiv", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("MessageDiv", "" + statusExceptionMessage + "<br /><br />");
        } else if (data != null) {

                $("#selectYear").prop("disabled", true);
                $("#fromDate").prop("disabled", true);
                $("#toDate").prop("disabled", true);
                $("#cancel_button").attr('disabled', true);
                $("#submit_button").attr('disabled', true);


                displaySuccessMessages("MessageDiv", updateSuccessMessage, "");
            setTimeout(function () {
                createHrmsFinancialYear();
            }, 4000);
        }
    });
    }
}




function saveFinancialYear()
{
    if (checkUserPrivelege(pvCreateFinancialYear)) {
        var year = $("#selectYear").val();
        var fromDate = $("#fromDate").val();
        var toDate = $("#toDate").val();

        var id = getUserSessionElement("userId");

    var Json = {
        year: year,
        fromdate: fromDate,
        todate: toDate
    };
    var json = JSON.stringify(Json);
    $.post(server_base_url + "hrms/common/FinancialYear/Save", {
        json: json,
        userId: id
    }).done(function (data) {
        alert(data);
            if (data == fail) {
                displayLargeErrorMessages("MessageDiv", "" + failMessage + "<br /><br />");

            } else if (data.statuscode == unauthorized) {
                displayLargeErrorMessages("MessageDiv", "" + unauthorizedMessage + "<br /><br />");

            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("MessageDiv", "" + statusExceptionMessage + "<br /><br />");

        } else if (data == duplicate) {
            displaySuccessMessages("MessageDiv", existed, "");
            setTimeout(function () {
                createHrmsFinancialYear();
            }, 1000);
        } else if (data != null) {

                $("#selectYear").prop("disabled", true);
                $("#fromDate").prop("disabled", true);
                $("#toDate").prop("disabled", true);
                $("#cancel_button").attr('disabled', true);
                $("#submit_button").attr('disabled', true);
                displaySuccessMessages("MessageDiv", successMessage, "");
            setTimeout(function () {
                createHrmsFinancialYear();
            }, 4000);
        }
    });
    }
}

function deleteFianan(id)
{
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deleteFianandata(id);
    }
}
function deleteFianandata(id) {

    if (checkUserPrivelege(pvDeleteFinancialYear)) {
        $.post(server_base_url + "hrms/common/Financialyear/Delete", {
        id: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

            if (data == fail) {
                displaySmallErrorMessages("pregsuccessBefore", emptyListMessage + "<br/><br/>");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                createHrmsFinancialYear('listpanelRow');
                displaySuccessMessages("pregsuccessBefore", "" + successMessageDelete + "<br /><br />");

            }
        });
    }



}