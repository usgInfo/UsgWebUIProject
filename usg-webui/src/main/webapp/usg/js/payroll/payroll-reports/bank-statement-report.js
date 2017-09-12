/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function bankStatementReport(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="bankStatementReport()">Bank Statement</a>');
    $("#" + divId).text("").append('<div id="bankStatementDivId"></div>');
    $("#bankStatementDivId").text("").append('<div id="bankStatementTabMenu" />');
    $("#bankStatementTabMenu").append('<div id="bankStatementMainMenu" class="row" />');
    $("#bankStatementTabMenu").append('<div id="bankStatementListMainMenu" class="row" />');

    if (checkUserPrivelege(pvViewBankStatement)) {
        $("#bankStatementMainMenu").append('<div id="bankStatementMainPanel" class="panel panel-blue" />');
        $("#bankStatementMainPanel").append('<div id="bankStatementMainHeading" class="panel-heading" />');
        $("#bankStatementMainHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Bank Statement</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colBankStatement"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#bankStatementMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colBankStatement").click(function() {
            $("#collapseOne1").toggle();
            if ($("#colBankStatement span").hasClass("glyphicon-minus-sign")) {
                $("#colBankStatement").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colBankStatement").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="bankStatementMainBody" class = "panel-body pan" />');
        $("#bankStatementMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#bankStatementMainBody").append('<center><span id="bankStatementMessageDiv"></span></center>');
        $("#bankStatementMainBody").append('<div id="bankStatementBodyDiv" class="row" />');

        $("#bankStatementBodyDiv").append('<div class="col-lg-12"> <div class="form-group col-lg-6"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" id="ddo"></select><span id="ddoErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employCode">Employee Code</label><select class="form-control" id="employeeCodeBS" onchange="setEmployeeDetailsInBankStatement()"></select><span id="employeeCodeBSErr" class="text-danger"></span></div></div>');

        $("#bankStatementBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employCodeM">Employee Code(M)</label><input type="text" id="employeeCodeMBS" placeholder="Employee Code(M)" class="form-control" /><span id="employeeCodeMBSErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employName">Employee Name </label><input type="text" id="employeeNameBS" placeholder="Employee Name" class="form-control" /><span id="employeeNameBSErr" class="text-danger"></span></div></div>');

        $("#bankStatementBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="location" id="location"></select><span id="locationErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="department" id="department"></select><span id="departmentErr" class="text-danger"></span></div></div>');

        $("#bankStatementBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="designationSelectBS" id="designationSelectBS"></select><span id="designationSelectBSErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureTypeSelectBS" id="natureTypeSelectBS"><option>----Select Nature----</option><option>ONE</option><option>TWO</option></select><span id="natureTypeSelectBSErr" class="text-danger"></span></div></div>');

        $("#bankStatementBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="bankName">Bank Name </label><select class="form-control" name="budgetHeadSelectDD" id="bankNameSelectBS"></select><span id="bankNameSelectBSErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="fundType">Fund Type </label><select class="form-control" name="fundTypeSelectBS" id="fundTypeSelectBS"></select><span id="fundTypeSelectBSErr" class="text-danger"></span></div></div>');

        $("#bankStatementBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="year">Year <span class="require">*</span></label><select class="form-control" name="yearSelectBS" id="yearSelectBS"></select><span id="yearSelectDDErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="budgetHead">Budget Head </label><select class="form-control" name="budgetHeadSelectDD" id="budgetHeadSelectBS"></select><span id="budgetHeadSelectBSErr" class="text-danger"></span></div></div>');

        $("#bankStatementBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="month">Month <span class="require">*</span></label><select class="form-control" name="monthSelectDD" id="monthSelectBS"></select><span id="monthSelectBSErr" class="text-danger"></span></div> </div>');

        $("#bankStatementBodyDiv").append("<div class='form-group'><center><button onclick=viewBankStatementValidation() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetBankStatementReport() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");

    }
    getLoggedInDDOLocationInDropDown("ddo", "location");
    $("#ddo").attr("onchange", "getDepartmentBasedOnDDO();getEmployeeDatainBankStatement();").trigger("onchange");
    fetchNatureListBS();
    fetchFundTypeListBS();
    fetchBudgetHeadListBS();
    fetchDesignationListBS();
    fetchDepartmentListBS();
//    fetchLocationListBS();
//    fetchDDOListBS();
    fetchBankNameListBS();
    // $("#ddo").attr("onchange", "getLocationBasedOnDDO();getDepartmentBasedOnDDO();getEmployeeDatainBankStatement();");
//    yearListofBankSatement();
//    monthListofBankStatement();
    getFinancialYear("monthSelectBS", "yearSelectBS");
    $(document).on('change', '#yearSelectBS', function() {
        var year = $("#yearSelectBS").val();
        getFinancialMonth("monthSelectBS", year);
    });
}

function resetBankStatementReport() {
    $("#employeeCodeBS").val("");
    $("#employeeCodeMBS").val("");
    $("#employeeNameBS").val("");
//    $("#ddo").val("");
//    $("#location").val("");
    $("#department").val("");
    $("#designationSelectBS").val("");
    $("#natureTypeSelectBS").val("");
    $("#postingCitySelectBS").val("");
    $("#pfTypeSelectBS").val("");
    $("#sortBySelectBS").val("");
    $("#fundTypeSelectBS").val("");
    $("#monthSelectBS").val("0");
    $("#yearSelectBS").val("0");
    $("#budgetHeadSelectBS").val("");
    $("#bankNameSelectBS").val("");
    $("#bankStatementListMainMenu").text("").val("");

}

function fetchDDOListBS() {
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
function  fetchNatureListBS(name) {

    $("#natureTypeSelectBS").text("").append('<option value="">---select nature type---</option>');
    $.get(server_base_url + "hrms/common/Nature/View", {
    }).done(function(bdata) {

        for (var i = 0; i < bdata.length; i++) {
            if (name == bdata[i].natureName)
            {
                $("#natureTypeSelectBS").append("<option value='" + bdata[i]._id.$oid + "'selected >" + bdata[i].natureName + "</option>");
            } else {
                $("#natureTypeSelectBS").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].natureName + "</option>");
            }
        }

    });
}
function fetchLocationListBS() {
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

function yearListofBankSatement() {
    $("#yearSelectBS").text("").append("<option value=''>----Select Year----</option>");
    var i, yr;
    var now = new Date();
    for (i = 0; i < 10; i++) {
        yr = now.getFullYear() + i; // or whatever
        $("#yearSelectBS").append($('<option/>').val(yr).text(yr));
    }
}
function monthListofBankStatement() {
    $("#monthSelectBS").text("").append("<option value=''>----Select Month ----</option><option value='1'> January </option>"
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

function fetchDepartmentListBS() {
    $("#department").text("").append("<option value=''>----Select Department----</option>");
    $.get(server_base_url + "/payroll/BankStatement/Report", {
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

function fetchDesignationListBS() {
    $("#designationSelectBS").text("").append("<option value=''>----Select Designation----</option>");
    $.get(server_base_url + "/payroll/BankStatement/Report", {
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
                $("#designationSelectBS").append("<option value='" + subData._id.$oid + "'>" + subData.designation + "</option>");
            }
        }
    });
}


function fetchFundTypeListBS() {
    $("#fundTypeSelectBS").text("").append("<option value=''>----Select Fund Type----</option>");
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
                $("#fundTypeSelectBS").append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
            }
        }
    });
}
function fetchBudgetHeadListBS() {
    $("#budgetHeadSelectBS").text("").append("<option value=''>----Select Budget Head----</option>");
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
                $("#budgetHeadSelectBS").append("<option value='" + subData._id.$oid + "'>" + subData.budgetHead + "</option>");
            }
        }
    });
}


function fetchBankNameListBS() {
    $("#bankNameSelectBS").text("").append("<option value=''>----Select Bank----</option>");
    $.get(server_base_url + "/payroll/BankStatement/Report", {
        action: "bankName"
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            $("#bankNameSelectBS").append(mainData);
        }
    });
}
function getEmployeeDatainBankStatement() {
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
            $("#employeeCodeMBS").val("");
            $("#employeeNameBS").val("");
            $("#department").val("");
            $("#designationSelectBS").val("");
            $("#natureTypeSelectBS").val("");
            $("#postingCitySelectBS").val("");
            $("#pfTypeSelectBS").val("");
            $("#sortBySelectBS").val("");
            $("#fundTypeSelectBS").val("");
            $("#monthSelectBS").val("");
            $("#budgetHeadSelectBS").val("");
            $("#bankNameSelectBS").val("");

            if (data == null || data == "" || data == 500 || data == 501)
            {
                $("#employeeCodeBS").text("").append("<option >"+"--- " + NoDataFound +" ---"+ "</option>");
            } else {
                $("#employeeCodeBS").text("").append("<option  value='' selected >----[Employee Code]-Employee Name ----</option>");
                for (var i = 0; i < data.length; i++)
                {
                    $("#employeeCodeBS").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
                }
            }
        }
    });
}
function setEmployeeDetailsInBankStatement() {
    var employeeCode = $("#employeeCodeBS").val();
    $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
        employeeCode: employeeCode
    }).done(function(pdata) {

        $("#department option:contains('" + pdata[0].department + "')").attr("selected", "selected");
        $("#designationSelectBS option:contains('" + pdata[0].designation + "')").attr("selected", "selected");
        $("#fundTypeSelectBS option:contains('" + pdata[0].fundType + "')").attr("selected", "selected");
        $("#natureTypeSelectBS option:contains('" + pdata[0].natureType + "')").attr("selected", "selected");
        $("#budgetHeadSelectBS option:contains('" + pdata[0].budgetHead + "')").attr("selected", "selected");
        $("#bankNameSelectBS option:contains('" + pdata[0].bank + "')").attr("selected", "selected");
        //   $("#location option:contains('" + pdata[0].location + "')").attr("selected", "selected");
        $('#employeeCodeMBS').text("").val("").val(pdata[0].employeeCodeM);
        $('#employeeNameBS').text("").val("").val(pdata[0].employeeName);
    });
}
function viewBankStatementValidation()
{
    var ddo = $('#ddo').val();
    var month = $('#monthSelectBS').val();
    var year = $('#yearSelectBS').val();
    if (ddo == "" || ddo == 0) {
        $("#ddo").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("ddoErr", "Please Select DDO.");
    }
    else if (month == "" || month == null) {
        $("#transadate").focus();
        $("#ddoErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("monthSelectBSErr", "Please Select Month.");
    }
    else if (year == "" || year == null) {
        $("#fromdate").focus();
        $("#monthSelectBSErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("yearSelectDDErr", "Please Select Year.");
    }

    else
    {

        $("#ddoErr").text("").val("");
        $("#monthSelectBSErr").text("").val("");
        $("#yearSelectDDErr").text("").val("");
        viewBankStatementReport();
    }
}
function viewBankStatementReport()
{
    if (checkUserPrivelege(pvViewBankStatement)) {
        var fromyear = getFincialYearForAllReports();
        var toyear = parseInt(fromyear) + 1;
        var financialyear = fromyear + "-" + toyear;
        var employeeSearchJSON = {
            employeeCode: $("#employeeCodeBS").val(),
            employeeCodeM: $("#employeeCodeMBS").val(),
            employeeName: $("#employeeNameBS").val(),
            ddo: $("#ddo").val(),
            location: $("#location").val(),
            department: $("#department").val(),
            designation: $("#designationSelectBS").val(),
            natureType: $("#natureTypeSelectBS").val(),
            budgetHead: $("#budgetHeadSelectBS").val(),
            fundType: $("#fundTypeSelectBS").val()


        }
        var bank;
        if ($("#bankNameSelectBS").val() == null || $("#bankNameSelectBS").val() == "")
        {
            bank = null;
        } else
        {
            bank = $("#bankNameSelectBS option:selected").text();
        }
        var month = $("#monthSelectBS").val();
        var year = $("#yearSelectBS").val();

        $("#bankStatementListMainMenu").text("").append("<iframe id='iframe'  src=" + server_base_url + '/Payroll/PayrollReports/BankStatementReportService?month=' + month + '&year=' + year + '&bank=' + encodeURI(bank) + '&fin=' + encodeURI(financialyear) + '&employeeSearchJSON=' + encodeURI(JSON.stringify(employeeSearchJSON)) + " height='500px' width='100%'></iframe>");

    }
}