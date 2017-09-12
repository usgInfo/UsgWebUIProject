/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var searchFieldFromDate;
var searchFieldToDate;

function leaveTransactionReport(divId)
{
    scrolupfunction();
    //alert();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementReportTab()">Leave Report</a></label> >> <label>Leave Transaction Report</label>');
    // $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">LeaveManagement</a></label>>><label><a href="javascript:leaveManagementReportTab()">Leave Transaction Report</label>');
    createForm(divId, innerDivCF, "Leave Transaction Report", FieldGroupForCF, successMsgDivCF);
    $("#innerDivCF").append("<div  id='relationListPanelDiv' />");
     $("#innerDivCF").append('<div id="listOfMastersReportListMainMenu11" class="row" />');

    getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
    $("#Row0Col1").append(getLabel_InputWithSpan("Employee Code", "", "employeeCode", "", ""));
    $("#Row0Col2").append(getLabel_InputWithSpan("Employee Code(M)", "", "", "employeeCodeM", "", ""));


    getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Name", "", "employeeName", "", ""));
    $("#Row1Col2").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));

    getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel("Location", "") + "" + getDropDown("location"));
    $("#Row2Col2").append(getLabel("Department", "") + "" + getDropDown("department"));
      getLoggedInDDOInDropDown("ddo", "");
    getTwoColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel("Designation") + "" + getDropDown("designation"));
    $("#Row3Col2").append(getLabel("Nature Type") + "" + getDropDown("natureType"));

    getTwoColumnInRow(FieldGroupForCF, "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col1").append(getLabel("Posting City", "") + "" + getDropDown("postingCity"));
    $("#Row4Col2").append(getLabel("Sort By", "") + "" + getDropDown("sortBy"));

    getTwoColumnInRow(FieldGroupForCF, "Row5", "Row5Col1", "Row5Col2");
    $("#Row5Col1").append(getLabel_InputWithSpan("From Date", "required", "fromDate", "", ""));
    $("#fromDate").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    });
    $("#Row5Col2").append(getLabel_InputWithSpan("To Date", "required", "toDate", "", ""));
    $("#toDate").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    });
    getFromAndToYearForLeaveReport();
    getTwoColumnInRow(FieldGroupForCF, "Row6", "Row6Col1");
    $("#Row6Col1").append(getLabel("Report Type*", "required") + "" + getDropDown("reportType"));
    getSaveResetUpdateBackButton(FieldGroupForCF, "findRowId", "Find", "findBtnId", "viewLeaveTransReport()", "Reset", "resetBackBtnId", "leaveTransactionReport()");
   // viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");
    //getAllLocationForOptions("", "locationId", "Location");
     getLoggedInLocationInDropDown("location", "");
     
   // viewOption("hrms/salary/Employee/LocationForOptions", "", "locationName", "location", "Location");
    viewOption("hrms/common/Nature/View", "", "natureName", "natureType", "Nature Type");
    viewDepartmentForOption();
    viewDesignationListForOption("", "designation", "Designation");
    viewCityForOption("", "postingCity");

    var reportTypeOptions = ["Leave Transaction Details"];
    getHardCodedOptions("reportType", "Report Type", reportTypeOptions);

    var sortByOptions = ["EmployeeCodeM", "EmployeeName", "Department"];
    getHardCodedOptions("sortBy", "Sort By", sortByOptions);
}
function getFromAndToYearForLeaveReport()
{
    $.get(server_base_url + "/Leave/FinancialYear/View", {
    }).done(function(pdata) {
        pdata = JSON.parse(pdata);
        if (pdata == fail || pdata == unauthorized || pdata.statuscode == unauthorized || pdata == invalidSession || pdata == statusException) {
        } else {
            if (pdata != null) {
                if (pdata.length > 0) {
                    var fromYear = 0;
                    for (var i = pdata.length - 1; i >= 0; i--) {
                        if (pdata[i].isActive == "Yes") {
                            $("#financialYearDiv").text("").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + pdata[i].fromDate + "-" + pdata[i].toDate + "</strong></span>");
                            fromYear = parseInt(pdata[i].year) + 1;
//                            for (var i = pdata.length - 1; i >= 0; i--) {
//                                if (fromYear == pdata[i].year)
//                            }
                        }
                    }
                }
            }
        }
    });
}
function viewDepartmentForOption(name) {
    $.get(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function(data) {
        if (data != null) {
            $("#department").append("<option value=>---- Select Department ----</option>");
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (name == data[i].department) {
                        $("#department").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].department + "</option>");
                    } else {
                        $("#department").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].department + "</option>");
                    }
                }
            }
        }
    });
}

function viewLeaveTransReport() 
{
    //alert();
    $("#toDateErr").text("");
    $("#fromDateErr").text("");
    $("#ddoErr").text("");
    $("#reportTypeErr").text("");

    var ddo = $("#ddo").val();
    //alert(ddo)
    var fromDate1 = $("#fromDate").val();
    var fromDate1 = fromDate1.split("/");
    var fromDate = fromDate1[0] + "-" + fromDate1[1] + "-" + fromDate1[2];
    ////alert(newFrom);
    var toDate1 = $("#toDate").val();
    var toDate1 = toDate1.split("/");
    var toDate = toDate1[0] + "-" + toDate1[1] + "-" + toDate1[2];
    var reportType = $("#reportType").val();
    var result = 1;
    if (ddo == "" || ddo == undefined || ddo == null || fromDate == "undefined" || fromDate == "" || fromDate == undefined || toDate == null || toDate == "undefined" || toDate == "" || reportType == null || reportType == "undefined" || reportType == "") {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else
    {
        //alert("--else--");
        if ($('#ddo').val() == null) 
        {
            $("#ddo").focus();
            displaySmallErrorMessages("ddoErr", "Please Select  DDO .");
            result = 0;
        } else if ($('#ddo').val() != null) {
            
        }
        if ($('#reportType').val() == null)
        {
            $("#reportType").focus();
            displaySmallErrorMessages("reportTypeErr", "Please Select  Report Type .");
            result = 0;
        } else if ($('#reportType').val() != null)
        {
            
        }

        if ($('#toDate').val() == "")
        {

            $("#toDate").focus();
            displaySmallErrorMessages("toDateErr", "Please Select  To Date .");
            result = 0;
        } else if ($('#toDate').val() != null) {
        }
        if ($('#fromDate').val() == "") {

            $("#fromDate").focus();
            displaySmallErrorMessages("fromDateErr", "Please Select  From Date .");
            result = 0;
        } else if ($('#fromDate').val() != null) {
        }
         var days = checkFromDateAndToDateLeaveTransac();
    if (days < 0)
    {
        displaySmallErrorMessagesInRed("toDateErr", "To Date should be greater than or equal to From Date ");
        result = 0;
    } else
    {
        $("#toDateErr").text("");
    }
        //alert(result);
        if (result != 0) 
        {
            viewEmployeeListmTransReport('listpanelRow');
            // LeaveAssignedListTable("AssignedTableRow");
        }
    }
}
function viewEmployeeListmTransReport(divId)
{
    //alert();
    var ddo = $("#ddo").val();
    var fromDate1 = $("#fromDate").val();
//    var fromDate1=fromDate1.split("/");
//    var fromDate=fromDate1[0]+"-"+fromDate1[1]+"-"+fromDate1[2];
    //alert(newFrom);
    var toDate1 = $("#toDate").val();
//    var toDate1=toDate1.split("/");
//    var toDate=toDate1[0]+"-"+toDate1[1]+"-"+toDate1[2];
    var reportType = $("#reportType").val();
    var sortby = $("#sortBy").val();

    var employeeSearchJSON = {
        employeeCode: $("#employeeCode").val(),
        employeeCodeM: $("#employeeCodeM").val(),
        employeeName: $("#employeeName").val(),
        ddo: $("#ddo").val(),
        location: $("#location").val(),
        department: $("#department").val(),
        designation: $("#designation").val(),
        natureType: $("#natureType").val(),
        postingCity: $("#postingCity").val(),
        reportType: $("#reportType").val(),
        fromDate: fromDate1,
        sortby: $("#sortby").val(),
        toDate: toDate1
    }
     //alert(JSON.stringify(employeeSearchJSON));
    var condition = "No";

    //alert(ddo+"-------"+fromDate+"-------"+toDate+reportType);
//    if (ddo != null || fromDate != null || toDate != null || reportType != null) {
//        condition = "No";
//    }
    $.get(server_base_url + "/leavemanagement/EmployeeTransactionReportMaster/View", {
        condition: condition,
        sortby: sortby,
        employeeSearchJSON: JSON.stringify(employeeSearchJSON)
    }).done(function(bdata) {
        //alert(bdata);
       // bdata = JSON.parse(bdata);
        // alert(bdata);
//        $.get(server_base_url + "EmployeeManagerSearch", {
//        }).done(function (bdata) {

        if (bdata === fail) {
//            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
//            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (bdata === unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (bdata === invalidSession) {
            callSessionTimeout();
        } else if (bdata === statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            if (bdata !== null) {
                if (bdata.length > 0) {

                    searchFieldFromDate = $("#fromDate").val();
                    searchFieldToDate = $("#toDate").val();

                    $("#relationListPanelDiv").text("").append("<div id='relationListPanel' class='panel panel-blue' />");
                    $("#relationListPanel").append("<div id='relationListPanelHeading' class='panel-heading' />");
                    $("#relationListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
                    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Employees</center>");

                    $("#relationListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
                    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
                    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
                    $("#relationListPanel").append("<div id='pregresssuccessBefore'>");
                    $("#listpanelRow").append("<div id='sectionlistpanelRow' class='table-responsive' />");

                    $("#sectionlistpanelRow").text("").append("<div id='displaySectionDiv' class = 'panel panel-primary-head'></div>");
                    $("#displaySectionDiv").append("<table id='displayBankTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");
                    // pqrs table header
                    $("#displayBankTable").append("<thead class=''><tr>"
                            + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                            + " <th> S.No</th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code(M)</th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Location</th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Department</th>"
                            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
                            + "</tr></thead>");
                    var sno = 0;
                    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var employeejson = {
                            _id: bdata[i].id,
                            employeeId: bdata[i].employeeId,
                            fromDate: bdata[i].fromDate,
                            toDate: bdata[i].toDate,
                            employeeCode: bdata[i].employeeCode,
                            employeeCodeM: bdata[i].employeeCodeM,
                            employeeName: bdata[i].employeeName,
                            designation: bdata[i].designation,
                            department: bdata[i].department,
                            location: bdata[i].locationName,
                            leaveTypeDescription: bdata[i].leaveTypeDescription,
                            dateRemarksAndIsHalfDay: bdata[i].dateRemarksAndIsHalfDay,
                            /*
                             ddo: bdata[i].ddo,
                             leaveType: bdata[i].leaveType,
                             natureType: bdata[i].natureType,
                             postingCity: bdata[i].postingCity,
                             eligibilityLeaves: bdata[i].eligibilityLeaves,
                             earnedLeaves: bdata[i].earnedLeaves,
                             totalAppliedLeaves: bdata[i].earnedLeaves,
                             totalBalanceLeaves: bdata[i].totalBalanceLeaves,
                             fromDate: bdata[i].fromDate,
                             toDate: bdata[i].toDate,
                             contactNumber: bdata[i].contactNumber,
                             reasonForLeave: bdata[i].reasonForLeave,
                             totalLeaveDays: bdata[i].totalLeaveDays,
                             requestingDate: bdata[i].requestingDate,
                             createDate: bdata[i].createDate,
                             updateDate: bdata[i].updateDate,
                             status: bdata[i].status,
                             createdBy: bdata[i].createdBy,
                             fromDateinMillisecond: bdata[i].fromDateinMillisecond,
                             toDateinMillisecond: bdata[i].toDateinMillisecond,*/
                        };

                        employeejson = JSON.stringify(employeejson);
                        $("#displayBankTableBody").append("<tr id='" + bdata[i].id + "' style='cursor:pointer;' >"
                                + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeCodeM + "<input type='hidden' value='" + encodeURI(employeejson) + "'></td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeName + '<input name="fromDateval" type="hidden" value=' + fromDate1 + '></td>'
                                + "<td style='cursor:pointer;'>" + bdata[i].locationName + '<input name="toDateval" type="hidden" value=' + toDate1 + '></td>'
                                + "<td style='cursor:pointer;'>" + bdata[i].department + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td></tr>");
                    }
                    $('#displayBankTable').append("</table>");
                    $("#relationListPanel").append("<div id='panelRow8' class='row' style='padding-bottom: 7px;' />");
                    $("#panelRow8").append("<div  class='col-xs-3' /><div class='col-xs-3'><button type='button'  value='Preview' class='btn btn-success  pull-right mr5'  onclick='prviewLeaveTransReport()'>Preview</button></div>");
                    $('#displayBankTable').dataTable();
                    $("#displayBankTable thead tr th:first input:checkbox").change(function() {
                        $("#displayBankTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                    });
                    $("#displayBankTable tbody tr td:first-child input:checkbox").change(function() {
                        var tot = $(".case").length;
                        var tot_checked = $(".case:checked").length;
                        if (tot !== tot_checked) {
                            $("#selectall").prop('checked', false);
                        }
                    });
                }
            }
        }
    });

}

//function prviewLeaveTransReport()
//{
//
////    var checkedrowList = [];
////    $('#displayBankTable tr input[type="checkbox"][name="case"]:checked').each(function(i) {
////        var row = $(this).closest('tr');
////        var dataRow = JSON.parse(decodeURI(row.find('td:eq(2) input').val()));
////        checkedrowList.push(dataRow);
////
////        fromDateVal = $("#fromDate").val();
////        toDateVal = $("#toDate").val();
////
////    });
////
////    if (checkedrowList.length >= 1) {
//
//         var employeeSearchJSON = {
//        employeeCode: $("#employeeCode").val(),
//        employeeCodeM: $("#employeeCodeM").val(),
//        employeeName: $("#employeeName").val(),
//        ddo: $("#ddo").val(),
//        location: $("#location").val(),
//        department: $("#department").val(),
//        designation: $("#designation").val(),
//        natureType: $("#natureType").val(),
//        postingCity: $("#postingCity").val(),
//        reportType: $("#reportType").val(),
//        fromDate: $("#fromDate").val(),
//        sortby: $("#sortby").val(),
//        toDate: $("#toDate").val()
//    }
//        $("#dashboardBodyMainDiv").append("<iframe id='iframe' "
//                + "name='Hello' title='Hello' src=" + server_base_url + "/leavemanagement/"
//                + "LeaveTransactionReport/View?leaveTransReportJson="
//                + encodeURI(JSON.stringify(employeeSearchJSON)) + "&fromDateVal=" + $("#fromDate").val()
//                + "&toDateVal=" + $("#toDate").val() + " height='500px' width='100%'></iframe>");
//
////        $.get(server_base_url + "/leavemanagement/LeaveTransactionReport/View", {
////            leaveTransReportJson: JSON.stringify(checkedrowList),
////            fromDateVal: fromDateVal,
////            toDateVal: toDateVal
////        }).done(function (bdata) {
////
////        });
//   // }
//
//
//
//
//
//
//}
function prviewLeaveTransReport()
{
   // //alert("working");
    var fromDateVal="";
  var toDateVal ="";
    var checkedrowList = [];
    $('#displayBankTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
        // //alert("working.......");
        var row = $(this).closest('tr');
        checkedrowList.push(JSON.parse(decodeURI(row.find('td:eq(2) input').val())));
//                {
//          
//            employeeCode: row.find('td:eq(1) ').text(),
//            employeeName: row.find('td:eq(2) ').val(),
//            location: row.find('td:eq(3) ').val(),
//            department: row.find('td:eq(4) ').val(),
//            designation: row.find('td:eq(5) ').val()
//            
//            
//            
////            employeeDetails: decodeURI(row.find('td:eq(2) input').val())
//
//        }
fromDateVal=row.find('td:eq(3) input').val();
 toDateVal =row.find('td:eq(4) input').val();
 // //alert(fromDateVal);
  // //alert(toDateVal);
  
    });

    if (checkedrowList.length >= 1) {
         {
            //$("#listOfMastersReportMessageDiv").text("");
        $("#listOfMastersReportListMainMenu11").text("").append("<iframe id='iframe' name='Hello' title='Hello' src=" + server_base_url + '/leavemanagement/LeaveTransactionReport/View?leaveTransReportJson=' + encodeURI(JSON.stringify(checkedrowList)) + '&fromDateVal=' + fromDateVal +'&toDateVal=' + toDateVal + " height='500px' width='100%'></iframe>");

    }
        ////alert(JSON.stringify(checkedrowList));
//        $.get(server_base_url + "/leavemanagement/LeaveTransactionReport/View", {
//            leaveTransReportJson: JSON.stringify(checkedrowList),
//            fromDateVal:fromDateVal,
//            toDateVal:toDateVal
//        }).done(function (bdata) {
//            //alert(bdata);
//        });
    }






}