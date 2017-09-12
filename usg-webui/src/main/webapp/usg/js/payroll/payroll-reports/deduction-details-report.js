/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function deductionDetailsReport(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="deductionDetailsReport()">Deduction Details Report</a>');
    if (checkUserPrivelege(pvViewDeductionView)) {
        $("#" + divId).text("").append('<div id="deductionDetailsDivId"></div>');
        $("#deductionDetailsDivId").text("").append('<div id="deductionDetailsTabMenu" />');

        $("#deductionDetailsTabMenu").append('<div id="deductionDetailsMainMenu" class="row" />');
        $("#deductionDetailsTabMenu").append('<div id="deductionDetailsListMainMenu" class="row" />');

        $("#deductionDetailsMainMenu").append('<div id="deductionDetailsMainPanel" class="panel panel-blue" />');
        $("#deductionDetailsMainPanel").append('<div id="deductionDetailsMainHeading" class="panel-heading" />');
        $("#deductionDetailsMainHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Deduction Details Report</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colDeductionReport"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#deductionDetailsMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colDeductionReport").click(function() {
            $("#collapseOne1").toggle();
            if ($("#colDeductionReport span").hasClass("glyphicon-minus-sign")) {
                $("#colDeductionReport").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colDeductionReport").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="deductionDetailsMainBody" class = "panel-body pan" />');
        $("#deductionDetailsMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#deductionDetailsMainBody").append('<center><span id="deductionDetailsMessageDiv"></span></center>');
        $("#deductionDetailsMainBody").append('<div id="deductionDetailsBodyDiv" class="row" />');

        $("#deductionDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" id="ddo"></select><span id="ddoErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employCode">Employee Code</label><select class="form-control" id="employeeCodeDD" onchange="setEmployeeDetailsInDeductionReport()"></select></div></div>');
        $("#deductionDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employCodeM">Employee Code(M)</label><input type="text" id="employeeCodeMDD" placeholder="Employee Code(M)" class="form-control" />'
                + '</div><div class="form-group col-lg-6"><label for="employName">Employee Name </label><input type="text" id="employeeNameDD" placeholder="Employee Name" class="form-control" /></div></div>');

        $("#deductionDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="location" id="location"></select><span id="locationErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="department" id="department"></select><span id="departmentErr" class="text-danger"></span></div></div>');
        $("#deductionDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="designationSelectDD" id="designationSelectDD"></select><span id="designationSelectDDErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureTypeSelect" id="natureTypeSelectDD"></select><span id="natureTypeSelectDDErr" class="text-danger"></span></div></div>');
        $("#deductionDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="postingCitySelectDD" id="postingCitySelectDD"></select><span id="postingCitySelectDDErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="pfType">PF Type </label><select class="form-control" name="pfTypeSelectDD" id="pfTypeSelectDD"></select><span id="pfTypeSelectDDErr" class="text-danger"></span></div></div>');

        $("#deductionDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fundType">Fund Type </label><select class="form-control" name="fundTypeSelectDD" id="fundTypeSelectDD"></select>'
                + '</div><div class="form-group col-lg-6"><label for="budgetHead">Budget Head </label><select class="form-control" name="budgetHeadSelectDD" id="budgetHeadSelectDD"></select></div></div>');
        $("#deductionDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="year">Year <span class="require">*</span></label><select class="form-control" name="yearSelectDD" id="yearSelectDD"></select><span id="yearSelectDDErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="month">Month <span class="require">*</span></label><select class="form-control" name="monthSelectDD" id="monthSelectDD"></select><span id="monthSelectDDErr" class="text-danger"></span></div></div>');
        $("#deductionDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="deductionType">Deduction Type <span class="require">*</span></label><select class="form-control" name="reportTypeSelect" onchange="fetchDeductionHeadDD()" id="deductionTypeSelectDD"></select><span id="deductionTypeSelectDDErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="deductionHead">Deduction Head <span class="require">*</span></label><select class="form-control" name="deductionHeadSelectDD" id="deductionHeadSelectDD"></select><span id="deductionHeadSelectDDErr" class="text-danger"></span></div></div>');
        $("#deductionDetailsBodyDiv").append("<div class='form-group'><center><button onclick=viewDeductionReportValidation() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetDeductionDetailsReport() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
        getFinancialYear("monthSelectDD", "yearSelectDD");
        //$("#deductionTypeSelectDD").attr("onchange", "getDeductionHead()");
        var deductionTypesInDDReport = ["Loan", "Advance", "Insurance", "Others", "IncomeTax"];
        //  $("#ddo").attr("onchange", "getDepartmentBasedOnDDO();getEmployeeDatainDeductionReport();");
        getHardCodedOptions("deductionTypeSelectDD", "Deduction Type", deductionTypesInDDReport);
        getLoggedInDDOLocationInDropDown("ddo", "location");
        $("#ddo").attr("onchange", "getDepartmentBasedOnDDO();getEmployeeDatainDeductionReport();").trigger("onchange");
        fetchBudgetHeadListDD();
        AllMonthDD();
        fetchFundTypeListDD();
        fetchPfTypeListDD();
        fetchPostingCityListDD();
        fetchDesignationListDD();
        // fetchDDOListDD();
        fetchNatureListDD();
    }
}
$(document).on('change', '#yearSelectDD', function() {
    var year = $("#yearSelectDD").val();
    getFinancialMonth("monthSelectDD", year);
});

function getDeductionHead()
{

}
function resetDeductionDetailsReport() {
    $("#employeeCodeDD").val("");
    $("#employeeCodeMDD").val("");
    $("#employeeNameDD").val("");
//    $("#ddo").val("");
//    $("#location").val("");
    $("#department").val("");
    $("#designationSelectDD").val("");
    $("#natureTypeSelectDD").val("");
    $("#postingCitySelectDD").val("");
    $("#pfTypeSelectDD").val("");
    $("#fundTypeSelectDD").val("");
    $("#monthSelectDD").val("0");
    $("#yearSelectDD").val("0");
    $("#budgetHeadSelectDD").val("");
    $("#deductionTypeSelectDD").val("");
    $("#deductionHeadSelectDD").val("");
}
function getEmployeeDatainDeductionReport() {
    var ddo = $("#ddo").val();
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];
    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: ddo,
        fromDt: fromDate,
        toDate: toDate,
        location: getUserSessionElement(seLocationId)
    }).done(function(data) {
        if (data != null) {
            data = JSON.parse(data);
            $("#employeeCodeMDD").val("");
            $("#employeeNameDD").val("");
            $("#department").val("");
            $("#designationSelectDD").val("");
            $("#natureTypeSelectDD").val("");
            $("#postingCitySelectDD").val("");
            $("#pfTypeSelectDD").val("");
            $("#fundTypeSelectDD").val("");
            $("#monthSelectDD").val("");
            $("#budgetHeadSelectDD").val("");
            $("#yearSelectDD").val("0");
            $("#deductionTypeSelectDD").val("");
            $("#deductionHeadSelectDD").val("");

            if (data == null || data == "" || data == 500)
            {
                $("#employeeCodeDD").text("").append("<option >" + NoDataFound + "</option>");
            } else {
                $("#employeeCodeDD").text("").append("<option  value='' selected >----[Employee Code]-Employee Name ----</option>");
                for (var i = 0; i < data.length; i++)
                {
                    $("#employeeCodeDD").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
                }
            }
        }
    });
}

function setEmployeeDetailsInDeductionReport() {
    var employeeCode = $("#employeeCodeDD").val();
    $("#deductionTypeSelectDD").val("");
    $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
        employeeCode: employeeCode
    }).done(function(pdata) {
        $("#employeeCodeMDD").val("");
        $("#employeeNameDD").val("");
        $("#department").val("");
        $("#designationSelectDD").val("");
        $("#natureTypeSelectDD").val("");
        $("#postingCitySelectDD").val("");
        $("#pfTypeSelectDD").val("");
        $("#fundTypeSelectDD").val("");
        $("#monthSelectDD").val("");
        $("#budgetHeadSelectDD").val("");
        $("#deductionTypeSelectDD").val("");
        $("#deductionHeadSelectDD").val("");
        $("#department option:contains('" + pdata[0].department + "')").attr("selected", "selected");
        $("#designationSelectDD option:contains('" + pdata[0].designation + "')").attr("selected", "selected");
        $("#fundTypeSelectDD option:contains('" + pdata[0].fundType + "')").attr("selected", "selected");
        $("#natureTypeSelectDD option:contains('" + pdata[0].natureType + "')").attr("selected", "selected");
        $("#budgetHeadSelectDD option:contains('" + pdata[0].budgetHead + "')").attr("selected", "selected");
        $("#pfTypeSelectDD option:contains('" + pdata[0].pfType + "')").attr("selected", "selected");
        //   $("#location option:contains('" + pdata[0].location + "')").attr("selected", "selected");
        $('#employeeCodeMDD').text("").val("").val(pdata[0].employeeCodeM);
        $('#employeeNameDD').text("").val("").val(pdata[0].employeeName);
        $("#postingCitySelectDD option:contains('" + pdata[0].postingCity + "')").attr("selected", "selected");
    });
}
function fetchDDOListDD() {
    $("#ddo").text("").append("<option value=''>----Select DDO----</option>");
    $.get(server_base_url + "/financial/account/DDO/ViewList", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#ddo").append("<option value='" + subData._id.$oid + "'>" + subData.ddoName + "</option>");
            }
        }
    });
}

function  fetchNatureListDD(name) {

    $("#natureTypeSelectDD").text("").append('<option value="">---select nature type---</option>');
    $.get(server_base_url + "hrms/common/Nature/View", {
    }).done(function(bdata) {

        for (var i = 0; i < bdata.length; i++) {
            if (name == bdata[i].natureName)
            {
                $("#natureTypeSelectDD").append("<option value='" + bdata[i]._id.$oid + "'selected >" + bdata[i].natureName + "</option>");
            } else {
                $("#natureTypeSelectDD").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].natureName + "</option>");
            }
        }

    });
}

function fetchLocationListDD() {
    $("#location").text("").append("<option value=''>----Select Location----</option>");
    $.get(server_base_url + "/financial/account/Location/ViewList", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#location").append("<option value='" + subData._id.$oid + "'>" + subData.locationName + "</option>");
            }
        }
    });
}

function fetchYearListDD() {
    $("#yearSelectDD").text("").append("<option value=''>----Select Year----</option>");
    var i, yr;
    var now = new Date();
    for (i = 0; i < 10; i++) {
        yr = now.getFullYear() + i; // or whatever
        $("#yearSelectDD").append($('<option/>').val(yr).text(yr));
    }
    ;

}
function fetchDeductionHeadDD() {
    var dedType = $("#deductionTypeSelectDD").val();
    var empCode = $("#employeeCodeDD").val();
    // alert(empCode);
    if ($("#deductionTypeSelectDD").val() == 'IncomeTax')
    {

        $("#deductionHeadSelectDD").text("").append("<option value='IT'>IT</option>");
    }
    else
    {
        $("#deductionHeadSelectDD").text("").append("<option value=''>----Select Deduction Head----</option>");
        $.get(server_base_url + "/payroll/payrollReports/getDeductionHeadsInDeductionReport", {
            deductionType: $("#deductionTypeSelectDD").val(),
            empCode: empCode
        }).done(function(data) {
            if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {

                for (var i = 0; i < data.length; i++) {

                    $("#deductionHeadSelectDD").append("<option value='" + data[i]._id.$oid + "'>" + data[i].shortDescription + "</option>");
                }
            }
        });
    }
}
function fetchDepartmentListDD() {
    $("#department").text("").append("<option value=''>----Select Department----</option>");
    $.get(server_base_url + "/payroll/DeductionDetails/Report", {
        action: "department"
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#department").append("<option value='" + subData._id.$oid + "'>" + subData.department + "</option>");
            }
        }
    });
}

function fetchDesignationListDD() {
    $("#designationSelectDD").text("").append("<option value=''>----Select Designation----</option>");
    $.get(server_base_url + "/payroll/DeductionDetails/Report", {
        action: "designation"
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#designationSelectDD").append("<option value='" + subData._id.$oid + "'>" + subData.designation + "</option>");
            }
        }
    });
}

function fetchPostingCityListDD() {
    $("#postingCitySelectDD").text("").append("<option value=''>----Select Posting City----</option>");
    $.get(server_base_url + "hrms/salary/City/ViewList", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {

            for (var i = 0; i < data.length; i++) {

                $("#postingCitySelectDD").append("<option value='" + data[i]._id.$oid + "'>" + data[i].cityName + "</option>");
            }
        }
    });
}

function fetchPfTypeListDD() {
    $("#pfTypeSelectDD").text("").append("<option value=''>----Select PF Type----</option>");
    $.get(server_base_url + "/payroll/SalarySlip/Report", {
        action: "pfType"
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#pfTypeSelectDD").append("<option value='" + subData._id.$oid + "'>" + subData.PFType + "</option>");
            }
        }
    });
}

function fetchFundTypeListDD() {
    $("#fundTypeSelectDD").text("").append("<option value=''>----Select Fund Type----</option>");
    $.get(server_base_url + "/payroll/BankStatement/Report", {
        action: "fundType"
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#fundTypeSelectDD").append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
            }
        }
    });
}

function AllMonthDD() {
    $("#monthSelectDD").text("").append("<option value=''>----Select Month----</option><option value='1'> January </option>"
            + "<option value='2'> February </option>"
            + "<option value='3'> March </option>"
            + "<option value='4'> April </option>"
            + "<option value='5'> May </option>"
            + "<option value='6'> June </option>"
            + "<option value='7'> July </option>"
            + "<option value='8'> August </option>"
            + "<option value='9'> September </option>"
            + "<option value='10'> October </option>"
            + "<option value='11'> November </option>"
            + "<option value='12'> December </option>");
}

function fetchBudgetHeadListDD() {
    $("#budgetHeadSelectDD").text("").append("<option value=''>----Select Budget Head----</option>");
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
        action: "budgetHead"
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#budgetHeadSelectDD").append("<option value='" + subData._id.$oid + "'>" + subData.budgetHead + "</option>");
            }
        }
    });
}

function viewDeductionReportValidation()
{
    var ddo = $("#ddo").val();
    var month = $("#monthSelectDD").val();
    var year = $("#yearSelectDD").val();
    var deductionType = $("#deductionTypeSelectDD").val();
    var deductionHead = $("#deductionHeadSelectDD").val();

    if (ddo == "" || ddo == null) {
        $("#ddoSelectBS").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("ddoErr", "Please Select DDO.");
    }
    else if (month == "0" || month == null) {
        $("#transadate").focus();
        $("#ddoErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("monthSelectDDErr", "Please Select Month.");
    }
    else if (year == "0" || year == null) {
        $("#fromdate").focus();
        $("#monthSelectDDErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("yearSelectDDErr", "Please Select Year.");
    }
    else if (deductionType == "" || deductionType == null) {
        $("#fromdate").focus();
        $("#yearSelectDDErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("deductionTypeSelectDDErr", "Please Select Deduction Type.");
    }
    else if (deductionHead == "" || deductionHead == null) {
        $("#fromdate").focus();
        $("#deductionTypeSelectDDErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("deductionHeadSelectDDErr", "Please Select Deduction Head.");
    }

    else
    {

        $("#ddoErr").text("").val("");
        $("#monthSelectDDErr").text("").val("");
        $("#yearSelectDDErr").text("").val("");
        $("#deductionTypeSelectDDErr").text("").val("");
        $("#deductionHeadSelectDDErr").text("").val("");
        viewDeductionDetailsReport();
    }
}

function viewDeductionDetailsReport()
{
    if (checkUserPrivelege(pvViewDeductionView)) {
        var fromyear = getFincialYearForAllReports();
        var toyear = parseInt(fromyear) + 1;
        var financialyear = fromyear + "-" + toyear;
        var employeeSearchJSON = {
            employeeCode: $("#employeeCodeDD").val(),
            employeeCodeM: $("#employeeCodeMDD").val(),
            employeeName: $("#employeeNameDD").val(),
            ddo: $("#ddo").val(),
            location: $("#location").val(),
            department: $("#department").val(),
            designation: $("#designationSelectDD").val(),
            natureType: $("#natureTypeSelectDD").val(),
            budgetHead: $("#budgetHeadSelectDD").val(),
            fundType: $("#fundTypeSelectDD").val()
        }
        var month = $("#monthSelectDD").val();
        var year = $("#yearSelectDD").val();
        var deductionType = $("#deductionTypeSelectDD").val();
        var deductionHead = $("#deductionHeadSelectDD").val();
//alert(JSON.stringify(employeeSearchJSON));
        $("#deductionDetailsListMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + '/Payroll/PayrollReports/DeductionDetailsService?month=' + month + '&year=' + year + '&fin=' + encodeURI(financialyear) + '&employeeSearchJSON=' + encodeURI(JSON.stringify(employeeSearchJSON)) + '&deductionType=' + deductionType + '&deductionHead=' + deductionHead + " height='500px' width='100%'></iframe>");
    }
}