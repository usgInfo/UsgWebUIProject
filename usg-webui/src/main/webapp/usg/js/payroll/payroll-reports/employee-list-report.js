/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function employeeListReport(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="employeeListReport()">Employee List</a>');

    $("#" + divId).text("").append('<div id="employeeListDivId"></div>');
    $("#employeeListDivId").text("").append('<div id="employeeListTabMenu" />');
    $("#employeeListTabMenu").append('<div id="employeeListMainMenu" class="row" />');
    $("#employeeListTabMenu").append('<div id="employeeListListMainMenu" class="row" />');
    $("#employeeListTabMenu").append('<div id="PreviewList" class="row" />');

    if (checkUserPrivelege(pvViewEmployeeList)) {
        $("#employeeListMainMenu").append('<div id="employeeListMainPanel" class="panel panel-blue" />');
        $("#employeeListMainPanel").append('<div id="employeeListMainHeading" class="panel-heading" />');
        $("#employeeListMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Employee List</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colEmpList"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#employeeListMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colEmpList").click(function() {
            $("#collapseOne1").toggle();
            if ($("#colEmpList span").hasClass("glyphicon-minus-sign")) {
                $("#colEmpList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colEmpList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="employeeListMainBody" class = "panel-body pan" />');
        $("#employeeListMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#employeeListMainBody").append('<center><span id="employeeListMessageDiv"></span></center>');
        $("#employeeListMainBody").append('<div id="employeeListBodyDiv" class="row" />');


        $("#employeeListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employName">Employee Name</label><input type="text" id="employeeNameEE" placeholder="Employee Name" class="form-control" /><span id="employeeNameEEErr" class="text-danger">'
                + '</div><div class="form-group col-lg-6" id="ddoDIV"><label for="ddo">DDO<span class="require">*<span></label><select class="form-control" id="ddoSelect"></select><span id="ddoSelectErr" class="text-danger"></span></div></div>');

        $("#employeeListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employCode">Employee Code </label><select type="text" id="employeeCode" placeholder="Employee Code" class="form-control"></select><span id="employeeCodeErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employCodeM">Employee Code(M)</label><input type="text" id="employeeCodeMEE" placeholder="Employee Code(M)" class="form-control" /><span id="employeeCodeMEEErr" class="text-danger"></span></div></div>');


        $("#employeeListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="locationSelect" id="locationSelectEE"></select><span id="locationSelectEEErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="departmentSelect" id="departmentSelectEE"></select><span id="departmentSelectEEErr" class="text-danger"></span></div></div>');

        $("#employeeListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="designationSelect" id="designationSelectEE"></select><span id="designationSelectEEErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="grade">Grade </label><select class="form-control" name="gradeSelect" id="gradeSelectEE"></select><span id="gradeSelectEEErr" class="text-danger"></span></div></div>');

        $("#employeeListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="postingCitySelectEE" id="postingCitySelectEE"></select><span id="postingCitySelectEEErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureTypeSelect" id="natureTypeSelectEE"></select><span id="natureTypeSelectEEErr" class="text-danger"></span></div></div>');

        $("#employeeListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="budgetHead">Budget Head </label><select class="form-control" name="budgetHeadSelectEE" id="budgetHeadSelectEE"></select><span id="budgetHeadSelectEEErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="fundType">Fund Type </label><select class="form-control" name="fundTypeSelectEE" id="fundTypeSelectEE"></select><span id="fundTypeSelectEEErr" class="text-danger"></span></div></div>');

        $("#employeeListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="sortbyDIV"><label for="sortBy">Sort By </label><select class="form-control" name="sortBySelect" id="sortBySelectEE"></select><span id="sortBySelectEEErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="pfType">PF Type </label><select class="form-control" name="pfTypeSelect" id="pfTypeSelectEE"></select><span id="pfTypeSelectEEErr" class="text-danger"></span></div></div>');

        $("#employeeListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fromDOB">From DOB : </label><input type="text" class="form-control" name="fromDOB" id="fromDOB" placeholder="MM/DD/YYYY" onkeydown="return false;"/>'
                + '</div><div class="form-group col-lg-6"><label for="toDOB">To DOB : </label><input type="text" class="form-control" name="toDOB" id="toDOB" placeholder="MM / DD / YYYY"  onkeydown="return false;" /></div></div>');
        $("#fromDOB").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy",
            yearRange: '-0:+50',
            minDate: '+0D',
            maxDate: new Date()
        });
        $("#toDOB").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy",
            yearRange: '-0:+50',
            minDate: '+0D',
            maxDate: new Date()
        });
        // $("#sortbyDIV").attr("disabled",true);
        $("#sortbyDIV").children().prop('disabled', true);
        $("#employeeListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fromDOJ">From DOJ : </label><input type="text" class="form-control" name="fromDOJ" id="fromDOJ" placeholder="MM/DD/YYYY" onkeydown="return false;" />'
                + '</div><div class="form-group col-lg-6"><label for="toDOJ">To DOJ : </label><input type="text" class="form-control" name="toDOJ" id="toDOJ" placeholder="MM / DD / YYYY"  onkeydown="return false;" /></div></div>');
        $("#fromDOJ").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy",
            yearRange: '-0:+50',
            minDate: '+0D',
            maxDate: new Date()
        });
        $("#toDOJ").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yyyy",
            yearRange: '-0:+50',
            minDate: '+0D',
            maxDate: new Date()
        });
        $("#employeeListBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fromDOR">From DOR : </label><input type="text" class="form-control" name="fromDOR" id="fromDOR" placeholder="MM/DD/YYYY" onkeydown="return false;" />'
                + '</div><div class="form-group col-lg-6"><label for="toDOR">To DOR : </label><input type="text" class="form-control" name="toDOJ" id="toDOR" placeholder="MM / DD / YYYY" onkeydown="return false;" /></div></div>');
        $("#fromDOR").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yyyy",
            yearRange: '-0:+50',
            minDate: '+0D'
        });
        $("#toDOR").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yyyy",
            yearRange: '-0:+50',
            minDate: '+0D'
        });
        $("#employeeListBodyDiv").append("<div class='form-group'><center><button onclick=validateEmployeeSearchReportForm() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetEmployeeForm() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    }
    getLoggedInDDOLocationInDropDown("ddoSelect", "locationSelectEE");
    $("#ddoSelect").attr("onchange", "ddoOnChangeFunction()").trigger("onchange");
    fetchEmployeeData();
    employeeForBudgetHeadList();

}

function  employeeForBudgetHeadList() {
    $("#budgetHeadSelectEE").text("").append("<option value='0'>----Select Budget Head----</option>");
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function(bdata) {

        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#budgetHeadSelectEE").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].budgetHead + "</option>");
            }
    });
}


function fetchEmployeeData() {
    $.get(server_base_url + "/payroll/ListOfEmployee/Report", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;

            $("#ddoSelect").append("<option value='0'>----Select DDO----</option>");
            $("#ddoSelect").append(mainData.ddo);
            $("#locationSelectEE").append("<option value='0'>----Select Location----</option>");
            $("#locationSelectEE").append(mainData.location);
            $("#departmentSelectEE").append("<option value='0'>----Select Department----</option>");
            $("#departmentSelectEE").append(mainData.department);
            $("#designationSelectEE").append("<option value='0'>----Select Designation----</option>");
            $("#designationSelectEE").append(mainData.designation);
            $("#gradeSelectEE").append("<option value='0'>----Select Grade----</option>");
            $("#gradeSelectEE").append(mainData.grade);
            $("#postingCitySelectEE").append("<option value='0'>----Select Posting City----</option>");
            $("#postingCitySelectEE").append(mainData.postingCity);
            $("#fundTypeSelectEE").append("<option value='0'>----Select FundType----</option>");
            $("#fundTypeSelectEE").append(mainData.fundType);
            $("#pfTypeSelectEE").append("<option value='0'>----Select PF Type----</option>");
            $("#pfTypeSelectEE").append(mainData.pfType);
            $("#natureTypeSelectEE").append("<option value='0'>----Select Nature Type----</option>");
            $("#natureTypeSelectEE").append(mainData.nature);


        }
    });
}


function resetEmployeeForm() {
    $("#employeeCode").val("");
    $("#employeeCodeMEE").val("");
    $("#employeeNameEE").val("");
//    $("#ddoSelect").val("0");
//    $("#locationSelectEE").val("0");
    $("#departmentSelectEE").val("0");
    $("#designationSelectEE").val("0");
    $("#natureTypeSelectEE").val("0");
    $("#postingCitySelectEE").val("0");
    $("#gradeSelectEE").val("0");
    $("#sortBySelectEE").val("0");
    $("#fundTypeSelectEE").val("0");
    $("#monthSelectBS").val("0");
    $("#budgetHeadSelectEE").val("0");
    $("#pfTypeSelectEE").val("0");
    $("#PreviewList").text("");

}

function validateEmployeeSearchReportForm() {
    if (checkUserPrivelege(pvViewSalarySlip)) {
        $("#PreviewList").text("");
        var ddo = $("#ddoSelect").val();
        if (ddo == undefined || ddo == "" || ddo == null || ddo == "0") {
            $("#employeeListMessageDiv").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please select (*)mandatory fields</strong><h5></div></center>");
            $("#ddoDIV").addClass('has-error');
        } else {
            $("#employeeListMessageDiv").text("");
            $("#ddoDiv").removeClass('has-error');
            viewEmployeeReportList();
        }
    }
}

function viewEmployeeReportList() {

    if (checkUserPrivelege(pvViewEmployeeList)) {
        $("#employeeListListMainMenu").text("").append('<div id="employeeListListPanel" class="panel panel-blue" />');
        $("#employeeListListPanel").append('<div id="employeeListListHeading" class="panel-heading" />');
        $("#employeeListListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne3"><center>List of Employee</center></a>');
        $("#employeeListListPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
        $("#collapseOne3").append('<div id="employeeListListBody" class = "panel-body pan" />');
        $("#employeeListListBody").append('<div id="panelRow" class="row" />');
        $("#employeeListListBody").append('<center><div id="employeeListListErrorMsgId"/></center>');
        $("#employeeListListBody").append('<div id="employeeListListMainBody" class="table-responsive" />');
        $("#employeeListListMainBody").append('<table id="employeeListTable" class="table table-striped table-bordered table-hover" />');
        $("#employeeListTable").append('<thead id="employeeListTableHeadId" />');
        $("#employeeListTable").append('<tbody id="employeeListTableBodyId" />');
        $("#employeeListTableHeadId").append('<tr><th>S.NO.</th>\n\
    <th>Employee Code</th>\n\
    <th>Employee Name</th>\n\
    <th>DDO</th>\n\
    <th>Location</th>\n\
    <th>Designation</th>\n\
    <th>Fund Type</th>\n\
    <th>Budget Head</th>\n\</tr>');
        var salarySearchSearchJSON = {
            employeeCode: $("#employeeCode").val(),
            employeeCodeM: $("#employeeCodeMEE").val(),
            employeeName: $("#employeeNameEE").val(),
            ddo: $("#ddoSelect").val(),
            location: $("#locationSelectEE").val(),
            department: $("#departmentSelectEE").val(),
            designation: $("#designationSelectEE").val(),
            natureType: $("#natureTypeSelectEE").val(),
            postingCity: $("#postingCitySelectEE").val(),
            pfType: $("#fundTypeSelectEE").val(),
            fundType: $("#fundTypeSelectEE").val(),
            fromDOB: $("#fromDOB").val(),
            toDOB: $("#toDOB").val(),
            fromDOJ: $("#fromDOJ").val(),
            toDOJ: $("#toDOJ").val(),
            fromDOR: $("#fromDOR").val(),
            toDOR: $("#toDOR").val(),
            budgetHead: $("#budgetHeadSelect").val(),
            grade: $("#gradeSelectEE").val(),
        }
        $.get(server_base_url + "payroll/reports/employee/Search", {
            employeeSearchJSON: JSON.stringify(salarySearchSearchJSON),
        }).done(function(data) {


            if (data == NoData) {
                displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", NoDataFoundMessage + "");
            } else if (data == fail) {
                displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", NoDataFoundMessage + "");
            } else if (data == unauthorized) {
                displayErrMsgInTable("employeeAttendanceProcessMessageDiv", unauthorizedMessage);
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {

            } else {
                data = JSON.parse(data);
                if (data == "No Data" || data == "" || data == 500 || data == undefined)
                {

                    displayLargeErrorMessages("employeeListMessageDiv", "" + NoDataFound + "<br /><br />");
                } else {
                    data = JSON.parse(data);

                    var sno = 0;
                    for (var i = data.length - 1; i >= 0; i--) {
                        sno++;
                        $("#employeeListTableBodyId").append("<tr  style='cursor:pointer;' >"
                                + "<td style='cursor:pointer;'>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].employeeCode + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].employeeName + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].ddo + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].location + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].designation + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].fundType + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].budgetHead + "</td></tr>");

                    }

                }
                $("#employeeListTable").dataTable();
            }
        });
        $("#employeeListListMainBody").append("<div class='form-group'><center><button onclick=employeeListPreview() class='btn btn-success' style='height:40px;width:80px'>Preview</button></center></div>");

    }

}
function employeeListPreview() {

    var ddo = $("#ddoSelect").val();
    if (ddo == undefined || ddo == "" || ddo == null || ddo == "0") {
        $("#employeeListMessageDiv").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please select DDO </strong><h5></div></center>");
        $("#ddoDIV").addClass('has-error');
    } else {
        $("#employeeListMessageDiv").text("");
        $("#ddoDiv").removeClass('has-error');
        var checkrowList = [];
        var ddo = $("#ddoSelect").val();
        var length = $('#employeeListTableBodyId tr').length;
        if (length > 0) {
            $('#employeeListTableBodyId tr').each(function(i) {
                var row = $(this).closest('tr');
                checkrowList.push({
                    employeeCode: row.find('td:eq(1)').text(),
                });
            });
        }
        var fromyear = getFincialYearForAllReports();
        var toyear = parseInt(fromyear) + 1;
        var financialyear = fromyear + "-" + toyear;
        $("#PreviewList").text("").append("<iframe  class ='panel-body pan' id='iframe' style='border:1px solid #666CCC' title='PDF in an i-Frame' scrolling='auto' src=" + server_base_url + '/payroll/reports/employee/EmployeeReport?employeeList=' + JSON.stringify(checkrowList) + '&ddo=' + ddo + '&fin=' + encodeURI(financialyear) + " height='500px' width='100%'></iframe>");
    }
}
