/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createIncomeTax1(divId)
{
    if (checkUserPrivelege(pvCreateIncomeTax)) {
        var financialYear = getUserSessionElement(seCurrentFinancialYear);
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:payrollDetailsMenuTabs();" data-toggle="tab">Payroll Details</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=createIncomeTax1("dashboardBodyMainDiv")>Manage Income Tax Process</a>');
        $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
        $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
        $("#mainTabMenu").text("").append("<div id='mainTabMenuModal'   />");
        $("#mainTabMenu").append("<div id='tableHeader' />");
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Income Tax Process</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colIncomeTax'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colIncomeTax").click(function() {
            $("#collapseOne2").toggle();
            if ($("#colIncomeTax span").hasClass("glyphicon-minus-sign")) {
                $("#colIncomeTax").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colIncomeTax").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");

        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");

        $("#FieldGroup").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" name="ddo" id="ddo"></select><span id="ddoErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employeeCode">Employee Code</label><select class="form-control" id="empcode"></select></div></div>');
        getLoggedInDDOInDropDown("ddo", "");
        $("#FieldGroup").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employeeName">Employee Name </label><input type="text" class="form-control" name="employeeName" id="empname" readonly>'
                + '</div><div class="form-group col-lg-6"><label for="employeeCodeManual">Employee Code(M)</label><input type="text" class="form-control" id="empcodem" readonly></div></div>');

        $("#FieldGroup").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location</label><select class="form-control" name="location" id="location"></select>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department</label><select class="form-control" id="department"></select></div></div>');
        getLoggedInLocationInDropDown("location", "");
        $("#FieldGroup").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation</label><select class="form-control" name="designation" id="designation"></select>'
                + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type</label><select class="form-control" id="natureId"></select></div></div>');

        $("#FieldGroup").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City</label><select class="form-control" name="postingCity" id="cityid"></select>'
                + '</div><div class="form-group col-lg-6"><label for="year">Year <span class="require">*</span> </label><select class="form-control" name="year" id="yearId"></select><span id="yearIdErr" class="text-danger"></span></div></div>');


        $("#FieldGroup").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="month">Month <span class="require">*</span></label><select class="form-control" id="monthid"></select><span id="monthidErr" class="text-danger"></span></div></div>');

        $("#FieldGroup").append("<div class='form-group'><center><button onclick=validateincometax() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetButton' onclick=resetincometax() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");

        loadEmpcodeSearchFunctionalityforIncomeTax();

        getDepartmentBasedOnDDO();
        fetchDepartmentListMIT();
        fetchPostingCity1();

        fetchNatureListMIT();
        fetchDesignationListMIT();
        getFinancialYear("monthid", "yearId");

        $("#ddo").attr("onchange", "getLocationBasedOnDDO();getDepartmentBasedOnDDO();loadEmpcodeSearchFunctionalityforIncomeTax();");
        $("#empcode").attr("onchange", "getEmpDemodetailsforincometax()");

    }
}

$(document).on('change', '#yearId', function() {
    var year = $("#yearId").val();
    getFinancialMonth("monthid", year);
});
function viewOptionIdNameValues(url, name, field, DivId, message)
{
    $("#" + DivId).text("").append("<option value ='0' selected >---- Select " + message + " ----</option>");
    $.get(server_base_url + url, {
    }).done(function(bdata) {
        if (bdata != null) {

            $.each(bdata, function(index, value) {
                $.each(value, function(ind, val) {
                    if (ind == field) {
                        if (val == name) {
                            $("#" + DivId).append("<option  value='" + val + "' selected>" + val + "</option>");
                        } else {
                            $("#" + DivId).append("<option  value='" + val + "'>" + val + "</option>");
                        }
                    }
                });
            });
        }
    });
}
function viewOptionDropDownValues(url, name, field, DivId, message)
{
    $("#" + DivId).text("").append("<option value = '0'>---- Select " + message + " ----</option>");
    $.get(server_base_url + url, {
    }).done(function(bdata) {
        var id = "";
        if (bdata != null) {

            $.each(bdata, function(index, value) {
                $.each(value, function(ind, val) {
                    if (ind == "_id") {
                        id = val.$oid;
                    }
                });
                $.each(value, function(ind, val) {
                    if (ind == field) {
                        if (val == name) {
                            $("#" + DivId).append("<option  value='" + id + "' selected>" + val + "</option>");
                        } else {
                            $("#" + DivId).append("<option  value='" + id + "'>" + val + "</option>");
                        }
                    }
                });
            });
        }
    });
}


function monthList() {
    $("#monthid").text("").append("<option value='0'>----Select Month ----</option><option value='1'> January </option>"
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


function loadEmpcodeSearchFunctionalityforIncomeTax() {
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
        data = JSON.parse(data)
        if (data != null) {
            $("#empname").text("").val("");
            $("#empcodem").text("").val("");

            $("#empcode").text("");
            if (data == null || data == "" || data == 500)
            {
                $("#empcode").text("").append("<option >" + NoDataFound + "</option>");
            } else {
                $("#empcode").text("").append("<option  value='' selected >----[Employee Code]-Employee Name ----</option>");
                for (var i = 0; i < data.length; i++)
                {
                    $("#empcode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
                }
            }
        }
    });

}

function getEmpDemodetailsforincometax()
{
    var ecode = $("#empcode").val();
    $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
        employeeCode: ecode
    }).done(function(pdata) {
        $("#department option:contains('" + pdata[0].department + "')").attr("selected", "selected");
        $("#designation option:contains('" + pdata[0].designation + "')").attr("selected", "selected");
        $("#natureId option:contains('" + pdata[0].natureType + "')").attr("selected", "selected");
        $("#cityid option:contains('" + pdata[0].postingCity + "')").attr("selected", "selected");
        $("#location option:contains('" + pdata[0].location + "')").attr("selected", "selected");
        $('#empcodem').text("").val("").val(pdata[0].employeeCodeM);
        $('#empname').text("").val("").val(pdata[0].employeeName);

    });
}
function  getYearForIncometax() {

    $("#yearId").text("").append("<option value='0'>----Select Year----</option>");
    var i, yr;
    var now = new Date();
    for (i = 0; i < 10; i++) {
        yr = now.getFullYear() + i; // or whatever
        $("#yearId").append($('<option/>').val(yr).text(yr));
    }
    ;
}
function validateincometax()
{
    var result = 1;
    var ddo = $('#ddo').val();
    var month = $('#monthid').val();
    var year = $('#yearId').val();

    if (ddo == null || ddo == "" || ddo == "0") {
        $("#ddo").focus();
        displaySmallErrorMessages("ddoErr", "Please Select ddo Type");
        result = 0;
    } else if (ddo != null || ddo != "" || ddo != "0") {
        $("#ddoErr").text("");
    }
    if (month == null || month == "" || month == "0") {
        $("#monthid").focus();
        displaySmallErrorMessages("monthidErr", "Please Select Month");
        result = 0;
    } else if (month != null || month != "" || month != "0") {
        $("#monthidErr").text("");
    }
    if (year == null || year == "" || year == "0") {
        $("#yearId").focus();
        displaySmallErrorMessages("yearIdErr", "Please Select Year");
        result = 0;
    } else if (year != null || year != "" || year != "0") {
        $("#yearIdErr").text("");
    }
    if (result != 0) {

        $("#mainTabMenu").append("<div id='tableHeaderForSalaryProcessedList'/>");

        salaryProcessedTable();

        $("#mainTabMenu").append("<div id='tableHeaderForChallanSubmittedList'/>");

    }
}
function salaryProcessedTable()
{

    var month = $("#monthid").val();
    var year = $("#yearId").val();
    if (!isNaN(month) && month.length != 0) {
        month = parseFloat(month);
    }
    if (!isNaN(year) && year.length != 0) {
        year = parseFloat(year);
    }

    var EmployeeJson = {
        employeeCode: $("#empcode").val(),
        employeeCodeM: $("#empcodem").val(),
        employeeName: $("#empname").val(),
        ddo: $("#ddo").val(),
        location: $("#location").val(),
        department: $("#department").val(),
        designation: $("#designation").val(),
        natureType: $("#natureId").val(),
        postingCity: $("#cityid").val(),
        month: month,
        year: year
    }
    var loginUserId = getUserSessionElement("userId");
    $.get(server_base_url + "payroll/payrolldetails/incometax/Search", {
        processedBy: loginUserId,
        employeeJson: JSON.stringify(EmployeeJson),
        action: "view"
    }).done(function(data) {

        if (data == NoData) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", NoDataFoundMessage + "");
        } else if (data == fail || data.statuscode == fail) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", NoDataFoundMessage + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displayErrMsgInTable("pregsuccessBefore", unauthorizedMessage);
        } else if (data == statusException || data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == invalidSession || data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {

        } else {
            var mainData = data.result;
            ProcessIncomeTaxList(mainData);

        }


    });
}

function ProcessIncomeTaxList(mainData) {
    if (checkUserPrivelege(pvViewIncomeTax)) {
        $("#pregsuccessBefore").text("");
        $("#tableHeaderForChallanSubmittedList").text("").append("<div id='salaryProcessedListPanel' class='panel panel-blue' />");
        $("#salaryProcessedListPanel").append("<div id='salaryProcessedListPanelHeading' class='panel-heading' />");
        $("#salaryProcessedListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Employee(Income Tax)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colIncomeTaxEmpList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#salaryProcessedListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colIncomeTaxEmpList").click(function() {
            $("#collapseOne3").toggle();
            if ($("#colIncomeTaxEmpList span").hasClass("glyphicon-minus-sign")) {
                $("#colIncomeTaxEmpList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colIncomeTaxEmpList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody1' class = 'panel-body table-responsive' />");
        $("#listpanelMainBody1").append("<div id='listpanelRow1' class='row' />");
        $("#listpanelRow1").append("<div  id='ErrorDiv'/>");
        $("#listpanelMainBody1").append("<div class='table-responsive' id='viewUserSectionTableDiv1' />");
        $("#viewUserSectionTableDiv1").append("<table class='table table-bordered table-striped table-warning mb30' id='displaySalaryProcessedTable' />");
        $("#displaySalaryProcessedTable").append("<thead class=''><tr>"
                + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>S.No.</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Location</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Department</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>IT</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Ed.Cess</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Total</th>"
                + "</tr></thead>");


        if (mainData == NoDataFoundMessage || mainData == undefined) {
            $("#displaySalaryProcessedTable").dataTable().fnDestroy();
            displayErrMsgInTable("displaySalaryProcessedTable", NoDataFoundMessage);
        } else {
            var sno = 0;
            var processData = mainData.incometaxdata;
            var emplist = mainData.empList;
            if (processData != emptyListMessage) {
                for (var i = processData.length - 1; i >= 0; i--) {
                    sno++;
                    var subData = processData[i];
                    var incomeTaxValue = "";
                    var educationcess = "";
                    var total = "";

                    if (subData.it != undefined) {
                        incomeTaxValue = subData.it;
                    }
                    if (subData.educationcess != undefined) {
                        educationcess = subData.educationcess;
                    }
                    if (subData.total != undefined) {
                        total = subData.total;
                    }

                    $("#displaySalaryProcessedTable").append("<tr style='cursor:pointer;' >"
                            + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" value=' + subData.idStr + ' id="case" name="case" class="case"/>' + "</td>"
                            + "<td style='cursor:pointer;'>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.employeeCode + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.location + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.department + "</td>"
                            + "<td style='cursor:pointer;'><input type='text'  style='width:50px' id=" + sno + " value='" + incomeTaxValue + "' onkeypress='return validateFloat(event)'></td>"
                            + "<td style='cursor:pointer;'><input type='text'  style='width:50px'  id=" + sno + " value='" + educationcess + "' onkeypress='return validateFloat(event)'></td>"
                            + "<td style='cursor:pointer;'><input type='text'  style='width:50px'  id=" + sno + " value='" + total + "'  readonly></td></tr>");


                }
            }

            if (emplist != emptyListMessage) {
                for (var i = emplist.length - 1; i >= 0; i--) {
                    sno++;
                    var subData = emplist[i];

                    var incomeTaxValue = "";
                    var educationcess = "";
                    var total = "";

                    if (subData.it != undefined && subData.it != 0) {
                        incomeTaxValue = subData.it;
                    }
                    if (subData.educationcess != undefined && subData.educationcess != 0) {
                        educationcess = subData.educationcess;
                    }
                    if (subData.total != undefined && subData.total != 0) {
                        total = subData.total;
                    }
                    $("#displaySalaryProcessedTable").append("<tr style='cursor:pointer;' >"
                            + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center"  value=' + subData.idStr + ' type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                            + "<td style='cursor:pointer;'>" + sno + "</td>"
                            + "<td style='cursor:pointer;'<input type='text'  value=" + subData.idStr + ">" + subData.employeeCode + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.location + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.department + "</td>"
                            + "<td style='cursor:pointer;'><input type='text'  style='width:50px' id=" + sno + " value='" + incomeTaxValue + "' onkeypress='return validateFloat(event)'></td>"
                            + "<td style='cursor:pointer;'><input type='text'  style='width:50px' id=" + sno + "  value='" + educationcess + "'  onkeypress='return validateFloat(event)'></td>"
                            + "<td style='cursor:pointer;'><input type='text' style='width:50px'  id=" + sno + "  value='" + total + "' readonly></td></tr>");

                }
            }
            $("#displaySalaryProcessedTable").dataTable();
            $("#displaySalaryProcessedTable thead tr th:first input:checkbox").change(function() {
                $("#displaySalaryProcessedTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });

            $('#displaySalaryProcessedTable tr input[type="text"]').change(function() {
                var row = $(this).closest('tr');
                var it = row.find('td:eq(6)').find('input').val();
                var edcess = row.find('td:eq(7)').find('input').val();
                var total;
                if (!isNaN(it) && it.length != 0 && it != undefined) {
                    it = parseFloat(it);
                }
                if (edcess.length != 0 && edcess != undefined) {
                    edcess = parseFloat(edcess);
                }
                var total = it + edcess;
                if (total != null && total != undefined && total != "") {
                    row.find('td:eq(8)').find('input').val(total);
                }
            });
            $("#displaySalaryProcessedTable tbody tr td:first-child input:checkbox").change(function() {
                var tot = $(".case").length;
                var tot_checked = $(".case:checked").length;
                if (tot != tot_checked) {
                    $("#selectall").prop('checked', false);
                }
            });
        }


        $("#mainTabMenu").append("<div id='tableHeaderForList8'/>");
        $("#tableHeaderForList8").text("").append("<div id='ButtonId1' class='form-group' />");
        $("#ButtonId1").append("<div id='Button1'/>");
        $("#Button1").append("<center><button class='btn btn-success mr5 btn' onclick='saveSalaryProcessDetails()'>Save</button></center>");
        //$("#Button1").append("");
    }
}

function saveSalaryProcessDetails() {
    if (checkUserPrivelege(pvCreateIncomeTax)) {
        var ddo = $("#ddo").val();
        var year = $("#yearId").val();
        var month = $("#monthid").val();
        var result = 1;

        if (ddo == null || ddo == "" || ddo == "0") {
            $("#ddo").focus();
            displaySmallErrorMessages("ddoErr", "Please Select ddo Type");
            result = 0;
        } else if (ddo != null || ddo != "") {
            $("#ddoErr").text("");
        }
        if (month == null || month == "" || month == "0") {
            $("#monthid").focus();
            displaySmallErrorMessages("monthidErr", "Please Select Month");
            result = 0;
        } else if (month != null || month != "" || month != "0") {
            $("#monthidErr").text("");
        }
        if (year == null || year == "" || year == "0") {
            $("#yearId").focus();
            displaySmallErrorMessages("yearIdErr", "Please Select Year");
            result = 0;
        } else if (year != null || year != "" || year != "0") {
            $("#yearIdErr").text("");
        }
        if ($('#displaySalaryProcessedTable tr input[type="checkbox"][name="case"]:checked').size() < 1) {

            displayErrorMessages("ErrorDiv", "Please Select AtLeast One Employee");
            result = 0;
            setTimeout(function() {
                $("#ErrorDiv").text("").val("");
            }, 3000);
        }
        if (result != 0) {
            var rowid = [];
            var incometaxList = [];
            $('#displaySalaryProcessedTable tr input[type="checkbox"][name="case"]:checked').each(function() {
                var row = $(this).closest('tr');
                rowid.push($(this).closest('tr').attr('id'));
                incometaxList.push({
                    employeeCode: row.find('td:eq(2)').text(),
                    it: row.find('td:eq(6)').find('input').val(),
                    educationcess: row.find('td:eq(7)').find('input').val(),
                    total: row.find('td:eq(8)').find('input').val(),
                    idStr: row.find('td:eq(2)').find('input').val()
                });
            });

            var incometaxJson = incometaxList;


            $.get(server_base_url + "/Payroll/PayrollDetails/IncomeTaxSaveService/save", {
                incometaxJson: JSON.stringify(incometaxJson),
                month: month,
                year: year,
                ddo: ddo,
            }).done(function(bdata) {
                if (bdata == fail || bdata.statuscode == fail) {
                    displayLargeErrorMessages("ErrorDiv", "" + failMessage + "<br /><br />");
                    displayLargeErrorMessages("ErrorDiv", "" + failMessage + "<br /><br />");
                } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                    displayLargeErrorMessages("ErrorDiv", "" + unauthorizedMessage + "<br /><br />");
                    displayLargeErrorMessages("ErrorDiv", "" + unauthorizedMessage + "<br /><br />");
                } else if (bdata == invalidSession || bdata.statuscode == invalidSession) {
                    callSessionTimeout();
                } else if (bdata == statusException || bdata.statuscode == statusException) {
                    displayLargeErrorMessages("ErrorDiv", "" + statusExceptionMessage + "<br /><br />");
                    displayLargeErrorMessages("ErrorDiv", "" + statusExceptionMessage + "<br /><br />");
                } else {
                    displaySuccessMessages("ErrorDiv", successMessage, "");
                    setTimeout(function() {
                        $("#ErrorDiv").text("");
                        salaryProcessedTable();
                    }, 2000);

                }

            });
        }

    }
}
function resetincometax()
{
    $('#empcode').val("");
    $('#empname').val("");
    $('#empcodem').val("");
    $('#ddoer').text("").val("");
    //$('#ddo').val("0");
    $('#monthid').val("0");
    $('#monthid').val("0");
    $('#monthider').text("").val("");
    $('#yearIder').text("").val("");
    $('#yearId').val("0");
    $('#department').val("");
    $('#designation').val("");
    $('#natureId').val("");
    $('#fundtypeId').val("0");
    $("#pregsuccessBefore").text("");
}
function fetchLocation1() {
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

function fetchPostingCity1() {
    $("#cityid").text("").append("<option value=''>----Select Posting City----</option>");
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
                $("#cityid").append("<option value='" + subData._id.$oid + "'>" + subData.locationName + "</option>");
            }
        }
    });
}
function fetchDepartmentListMIT() {
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
function fetchDesignationListMIT() {
    $("#designation").text("").append("<option value=''>----Select Designation----</option>");
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
                $("#designation").append("<option value='" + subData._id.$oid + "'>" + subData.designation + "</option>");
            }
        }
    });
}
function  fetchNatureListMIT(name) {

    $("#natureId").text("").append('<option value="">---select nature type---</option>');
    $.get(server_base_url + "hrms/common/Nature/View", {
    }).done(function(bdata) {

        for (var i = 0; i < bdata.length; i++) {
            if (name == bdata[i].natureName)
            {
                $("#natureId").append("<option value='" + bdata[i]._id.$oid + "'selected >" + bdata[i].natureName + "</option>");
            } else {
                $("#natureId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].natureName + "</option>");
            }
        }

    });
}