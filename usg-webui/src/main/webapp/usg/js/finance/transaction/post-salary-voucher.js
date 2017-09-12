/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function PostsalaryVoucherMaster1()
{
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeTransactionMenuTabs()">Transaction Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="PostsalaryVoucherMaster1()">Post Salary Voucher</a>');

    $("#dashboardBodyMainDiv").text("").append('<div id="postSalaryVoucherDivId"></div>');
    $("#postSalaryVoucherDivId").text("").append('<div id="postSalaryVoucherTabMenu" />');

    $("#postSalaryVoucherTabMenu").append('<div id="postSalaryVoucherMainMenu" class="row" />');
    $("#postSalaryVoucherTabMenu").append('<div id="postSalaryVoucherListMainMenu" class="row" />');
    $("#postSalaryVoucherTabMenu").append('<div id="postSalaryVoucherListMainMenu1" class="row" />');
    if (checkUserPrivelege(pvSearchPostSalaryVoucher)) {
        $("#postSalaryVoucherMainMenu").append('<div id="postSalaryVoucherMainPanel" class="panel panel-blue" />');
        $("#postSalaryVoucherMainPanel").append('<div id="postSalaryVoucherMainHeading" class="panel-heading" />');
        $("#postSalaryVoucherMainHeading").append('<div class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne1"><center>Salary Posting</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="postSalVoucherCol"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');
        $("#postSalaryVoucherMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        //postSalVoucherCol
        $("#postSalVoucherCol").click(function () {
            $("#collapseOne1").toggle();
            if ($("#postSalVoucherCol span").hasClass("glyphicon-minus-sign")) {
                $("#postSalVoucherCol").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#postSalVoucherCol").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="postSalaryVoucherMainBody" class = "panel-body pan" />');
        $("#postSalaryVoucherMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#postSalaryVoucherMainBody").append('<center><span id="postSalaryVoucherMessageDiv"></span></center>');
        $("#postSalaryVoucherMainBody").append('<div id="postSalaryVoucherBodyDiv" class="row" />');
        $("#postSalaryVoucherBodyDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#postSalaryVoucherBodyDiv").append("<input type='hidden' id='saveorupdate' value='save'>");

        $("#postSalaryVoucherBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="location" id="location"></select>'
                + '</div><div class="form-group col-lg-6"><label for="year">Year </label><select class="form-control" id="year"></select></div></div>');

        $("#postSalaryVoucherBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="month">Month </label><select class="form-control" name="month" id="month"></select>'
                + '</div><div class="form-group col-lg-6"><label for="billType">Bill Type </label><select class="form-control" id="billType"></select></div></div>');

        $("#postSalaryVoucherBodyDiv").append("<div class='form-group' id='changeButton'><center><button onclick=ViewPostSalaryVoucher() id='postSearch' class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetButton' onclick=WipeAllViewSalaryDetails() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");

        getYearForPostSalaryVoucher("", "year", "Year");
        getMonthsForOption("", "month", "Month");
//    var locationOptions = ["Location 1", "Location 2"];
//    getHardCodedOptions("location", "Location", locationOptions);
        var billTypeOptions = ["HRMS", "Voucher "];
        getHardCodedOptions("billType", "Bill Type", billTypeOptions);

        getLoggedInDDOLocationInDropDown("", "location");
    }
}

function ViewPostSalaryVoucher()
{
    $("#postSalaryVoucherListMainMenu").text("").append('<div id="postSalaryVoucherListPanel" class="panel panel-blue" />');
    $("#postSalaryVoucherListPanel").append('<div id="postSalaryVoucherListHeading" class="panel-heading" />');
    $("#postSalaryVoucherListHeading").append('<div class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>List of Bill(s)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="postSalVoucherListCol"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');
    $("#postSalaryVoucherListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
    //postSalVoucherListCol
    $("#postSalVoucherListCol").click(function () {
        $("#collapseOne2").toggle();
        if ($("#postSalVoucherListCol span").hasClass("glyphicon-minus-sign")) {
            $("#postSalVoucherListCol").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#postSalVoucherListCol").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").append("<div id='pregresssuccessBefore'>");
    $("#listpanelMainBody").append("<div id='ErrorMessageDiv'  />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").append("<div id='postSalaryVoucherlistpanelRow' class='table-responsive' />");

    $("#postSalaryVoucherlistpanelRow").text("").append("<div class='tab-pane' id='viewUser'/>");
    $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayListOfBillsTable' />");
    $("#displayListOfBillsTable").append("<thead class=''><tr>"

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Bill No.</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Dated</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Month</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Year</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Voucher Posting Status</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>View Details</th>"
//            + "<th style='min-width:30%;width:auto;'><i ></i>Narration</th>"
//            + "<th style='min-width:1%;width:80px;''><i class='fa'></i>View</th>"
            + "</tr></thead>");

    $("#displayListOfBillsTable").append("<tbody id='displayListOfBillsTableBody' class='table-striped table-bordered' />");

    $.get(server_base_url + "Payroll/PayrollDetails/EmpAutoSalary/Search", {
        ddo: "577254cdfc91b9e4fb9430c0",
        month: "Jan",
        year: "2016"
    }).done(function (pdata) {
        var sno = 0;
        var billNo = 0;
        for (var k = pdata.length - 1; k >= 0; k--) {
            sno++;
            billNo++;
            for (var j = 0; j < pdata[k].salaryList.length; j++)
            {
                var time = new Date().setTime(pdata[k].createDate);
                var date1 = new Date(time);

                $("#displayListOfBillsTableBody").append("<tr id='" + pdata[k]._id.$oid + "' style='cursor:pointer;' >"
                        + "<td style='cursor:pointer;'>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + billNo + "</td>"
                        + "<td style='cursor:pointer;'>" + date1.getDate() + "-" + date1.getMonth() + "-" + date1.getFullYear() + "</td>"
                        + "<td style='cursor:pointer;'>" + pdata[k].month + "</td>"
                        + "<td style='cursor:pointer;'>" + pdata[k].year + "</td>"
                        + "<td style='cursor:pointer;'>" + pdata[k].salaryList[j].designation + "</td>"
                        + "<td onclick=viewBillDetailsInTable('" + encodeURI(JSON.stringify(pdata[k].salaryList)) + "','" + pdata[k]._id.$oid + "')>" + ' <button type="button" class="btn btn-danger "   style="align:center;color:white" >View Details</button>' + "</td></tr>");
            }
        }
    });
}

function viewBillDetailsInTable(pdata, Id) {
    pdata = decodeURI(pdata);
    pdata = JSON.parse(pdata);
//    $("#postSalaryVoucherListMainMenu1").text("").append("<div id='TableListPanel' class='panel panel-primary' />");
//
//    $("#TableListPanel").append("<div id='TableListPanelHeading' class='panel-heading' />");
//    $("#TableListPanelHeading").append("<h4 id='TableListPanelHead' class='panel-title' />");
//    $("#TableListPanelHead").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne6'><center>List of Bills</center>");
//
//    $("#TableListPanel").append("<div id='collapseOne6' class='panel-collapse collapse in' />");
//    $("#collapseOne6").append("<div id='TableListPanelMainBody' class = 'panel-body' />");
//    $("#TableListPanelMainBody").append("<div id='TableListPanelrow' class='row' />");
//    $("#TableListPanelrow").text("").append("<div class='tab-pane' id='TableListDatatable'/>");
//    $("#TableListDatatable").append("<div class='table-responsive' id='TableListDatatableView' />");
//    $("#TableListDatatableView").append("<table class='table table-bordered table-striped table-warning mb30' id='TableListDatatableViewTable' />");
    $("#postSalaryVoucherListMainMenu1").text("").append('<div id="postSalaryVoucherListPanel1" class="panel panel-blue" />');
    $("#postSalaryVoucherListPanel1").append('<div id="postSalaryVoucherListHeading1" class="panel-heading" />');
    $("#postSalaryVoucherListHeading1").append('<div class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2" id="viewDetailsCol"><center>List of Bill(s)</center></div>');
//viewDetailsCol
    $("#postSalaryVoucherListPanel1").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
    $("#viewDetailsCol").click(function () {
        $("#collapseOne2").toggle();
        if ($("#viewDetailsCol span").hasClass("glyphicon-minus-sign")) {
            $("#viewDetailsCol").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#viewDetailsCol").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='listpanelMainBody1' class = 'panel-body' />");
    $("#listpanelMainBody1").append("<div id='pregresssuccessBefore'>");
    $("#listpanelMainBody1").append("<div id='ErrorMessageDiv'  />");
    $("#listpanelMainBody1").append("<div id='listpanelRow1' class='row' />");
    $("#listpanelRow1").append("<div id='postSalaryVoucherlistpanelRow1' class='table-responsive' />");

    $("#postSalaryVoucherlistpanelRow1").text("").append("<div class='tab-pane' id='viewUser1'/>");
    $("#viewUser1").append("<div class='table-responsive' id='viewUserSectionTableDiv1' />");
    $("#viewUserSectionTableDiv1").append("<table class='table table-bordered table-striped table-warning mb30' id='TableListDatatableViewTable1' />");
    $("#TableListDatatableViewTable1").append("<thead class=''><tr>"

//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>S.No</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code.</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name </th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Location</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Department</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Salry Type</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon' ></i>Designation</th>"
//            + "</tr></thead>");

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code.</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Department</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Salary Type</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
//            + "<th style='min-width:30%;width:auto;'><i ></i>Narration</th>"
//            + "<th style='min-width:1%;width:80px;''><i class='fa'></i>View</th>"
            + "</tr></thead>");
    $("#TableListDatatableViewTable1").append("<tbody id='TableListDatatableViewTable1Body' class='table-striped table-bordered' />");

    var sno = 0;



    for (var k = 0; k < pdata.length; k++)
    {
        sno++;
        $("#TableListDatatableViewTable1Body").append("<tr id='" + sno + "' style='cursor:pointer;' >"
                + "<td style='cursor:pointer;'>" + sno + "</td>"
                + "<td style='cursor:pointer;'>" + pdata[k].employeeCodeM + "</td>"
                + "<td style='cursor:pointer;'>" + pdata[k].employeeName + "</td>"
                + "<td style='cursor:pointer;'>" + pdata[k].location + "</td>"
                + "<td style='cursor:pointer;'>" + pdata[k].department + "</td>"
                + "<td style='cursor:pointer;'>" + pdata[k].salaryType + "</td>"
                + "<td style='cursor:pointer;'>" + pdata[k].designation + "</td>");
    }
    $("#TableListDatatableViewTable1Body").append("<div id='ApproveButtonRow' class='row'>");
    if (checkUserPrivelege(pvPostSalaryVoucherDetails)) {
        $("#ApproveButtonRow").append("<div class='col-sm-12'><center><button type='button'  value='Save' class='btn btn-success'  onclick=PostThisBill('" + Id + "')>Approve Bill</button></center></div>");
    }
}

function viewToApproveBill(obj)
{
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
}
function WipeAllViewSalaryDetails()
{
    $("#location").val("");
    $("#year").val("");
    $("#month").val("");
    $("#billType").val("");
}
function PostThisBill(Id) {
    if (checkUserPrivelege(pvPostSalaryVoucherDetails)) {
        alert(Id);
    }

}
function  getYearForPostSalaryVoucher(val, DivId, message) {
    var dateToday = new Date();
    var yrRange = dateToday.getFullYear();
    var yrForward = yrRange + 50;
    $("#" + DivId).append("<option value='' selected disabled>---- Select " + message + " ----</option>");
    for (var i = yrRange; i < yrForward; i++) {
        $("#" + DivId).append("<option value=" + i + ">" + i + "</option>");
    }
    $("#" + DivId).val(val);
}
function toISODate(milliseconds) {
    var date = new Date(milliseconds);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    m = (m < 10) ? '0' + m : m;
    d = (d < 10) ? '0' + d : d;
    return [y, m, d].join('-');
}