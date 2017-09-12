/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function salaryIncrement(divId)
{
    scrolupfunction();
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a>><a href="javascript:void(0)" data-toggle="tab">Salary Increment DateWise</a>');
    if (checkUserPrivelege(pvCreateSalaryIncrement)) {
        $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
        $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
        $("#mainTabMenu").append("<div id='tableHeader' />");
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Salary Increment DateWise</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colSalaryIncreament'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colSalaryIncreament").click(function() {
            $("#collapseOne2").toggle();
            if ($("#colSalaryIncreament span").hasClass("glyphicon-minus-sign")) {
                $("#colSalaryIncreament").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSalaryIncreament").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");

        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");

        $("#FieldGroup").append("<input type='hidden' id='employeeId'>");
        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        //for ddo

        getTwoColumnInRow("FieldGroup", "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddoId"));
        getLoggedInDDOInDropDown("ddoId", "");
        getEmployeeDataInSalIncDateWise();
        //   $("#Row0Col2").append(getLabel_InputWithSpan("Employee Code", "", "empcode", "", ""));
        $("#Row0Col2").append(getLabel("Employee Code", "required") + "" + getDropDown("empcode"));
        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel_InputWithSpan("Employee Name", "", "empname", "", "readonly"));
        $("#Row1Col2").append(getLabel_InputWithSpan("Employee Code(M)", "", "empcodem", "", "readonly"));
        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append('<input type="hidden" id="empData">');
        $("#Row2Col1").append(getLabel("Location", "") + "" + getDropDown("location"));
        getLoggedInLocationInDropDown("location", "");
        $("#Row2Col2").append(getLabel("Department", "") + "" + getDropDown("deptId"));
        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Designation", "") + "" + getDropDown("desiId"));
        $("#Row3Col2").append(getLabel("Nature Type", "") + "" + getDropDown("natureId"));
        getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel("Posting City", "") + "" + getDropDown("cityid"));
        $("#Row4Col2").append(getLabel("Fund type", "") + "" + getDropDown("fundtypeId"));
//    getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
//    $("#Row5Col1").append(getLabel("Primary Filter By", "") + "" + getDropDown("primaryfiltId"));
//    $("#Row5Col2").append(getLabel("Secondary Sort By", "") + "" + getDropDown("secondarysortId"));
        getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel_InputWithSpan("Transaction Date", "required", "transadate", "", ""));
        $("#Row6Col2").append(getLabel("PF Type", "") + "" + getDropDown("pftypeid"));
        $('#transadate').datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy"});
        getTwoColumnInRow("FieldGroup", "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel_InputWithSpan("From Date", "required", "fromdate", "", ""));
        $("#Row7Col2").append(getLabel_InputWithSpan("To Date", "required", "todate", "", ""));
        $('#fromdate').datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy"});
        $('#todate').datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy"});
        getTwoColumnInRow("FieldGroup", "Row8", "Row8Col1", "Row8Col2");
        $("#Row8Col1").append(getLabel("Employee Type", "") + "" + getDropDown("emptypeId"));
        getSaveResetUpdateBackButton("FieldGroup", "saveOrUpdateRowId", "View", "saveUpdateBtnId", "validateSalaryIncrement()", "Reset", "resetBackBtnId", "resetSalaryIncrement('" + FieldGroupForCF + "')");
        //$("#ddoId").attr("onchange", "loadEmpcodeSearchFunctionalitysalaryincrement();getLocationBasedOnDDOInSalaryIncre();");
        $("#ddoId").attr("onchange", "getEmployeeDataInSalIncDateWise()");
        $("#empcode").attr("onchange", "getEmpDemodetailsforsalaryincrement()");
        // viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddoId", "DDO");
        viewOption("hrms/salary/Department/ViewList", "", "department", "deptId", "Department");
        viewOption("hrms/salary/Designation/ViewList", "", "designation", "desiId", "Designation");
        viewOption("budget/master/FundType/View", "", "description", "fundtypeId", "Fund Type");
        viewOption("hrms/common/Nature/View", "", "natureName", "natureId", "Nature");
        viewOption("hrms/salary/Class/ViewList", "", "name", "emptypeId", "Employee Type");
        viewOption("hrms/salary/PFType/ViewList", "", "PFType", "pftypeid", "PF Type");
        viewOption("hrms/salary/City/ViewList", "", "cityName", "cityid", "Posting City");
        $("#empcode").keypress(function(event) {
            if (event.which == 13) {
                getEmpDemodetailsforsalaryincrement();

            }
        });
    }
}
function getEmployeeDataInSalIncDateWise() {
    var ddo = $("#ddoId").val();
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];
    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: ddo,
        location: getUserSessionElement(seLocationId),
        fromDt: fromDate,
        toDate: toDate
    }).done(function(data) {
        data = JSON.parse(data)
        if (data == fail || data == "" || data == undefined) {
            $("#empcode").text("").append("<option  value='' selected disabled>---No data available ----</option>");

        } else if (data != null) {
            $("#empcode").text("").append("<option  value='' selected disabled>----[Employee Code]-Employee Name ----</option>");
            for (var i = 0; i < data.length; i++)
            {
                $("#empcode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
            }
        }
    });
}
function getEmpDemodetailsforsalaryincrement()
{
    var ecode = $("#empcode").val();
    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function(pdata) {

        if (pdata == null || pdata == "" || pdata == 500)
        {
            displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
        } else {
//location
//            getLocationBasedOnDDOInSalaryIncre();
//            setTimeout(function() {
//                $("#location").val(pdata[0].location);
//                // $("#employeeCode option:contains(" + obj.empCode + ")").attr('selected', 'selected');
//                $("#location option:contains('" + pdata[0].location + "')").attr("selected", "selected");
//            }, 1000);
            //viewOption("budget/master/FundType/View", "", "description", "fundtypeId", "Fund Type");
//              setTimeout(function () {
//                $("#fundtypeId").val(pdata[0].location);
//                // $("#employeeCode option:contains(" + obj.empCode + ")").attr('selected', 'selected');
//                $("#fundtypeId option:contains('" + pdata[0].fundType + "')").attr("selected", "selected");
//            }, 2000);
            $('#empname').val(pdata[0].employeeName);
            $('#empcodem').val(pdata[0].employeeCodeM);
            $("#deptId option:contains('" + pdata[0].department + "')").attr("selected", "selected");
            $("#location option:contains('" + pdata[0].location + "')").attr("selected", "selected");
            $("#desiId option:contains('" + pdata[0].designation + "')").attr("selected", "selected");
            $("#fundtypeId option:contains('" + pdata[0].fundType + "')").attr("selected", "selected");
            $("#natureId option:contains('" + pdata[0].natureType + "')").attr("selected", "selected");
            $("#pftypeid option:contains('" + pdata[0].pfType + "')").attr("selected", "selected");
            $("#emptypeId option:contains('" + pdata[0].classMaster + "')").attr("selected", "selected");
            $("#cityid option:contains('" + pdata[0].postingCity + "')").attr("selected", "selected");

        }

    });
}
function loadEmpcodeSearchFunctionalitysalaryincrement() {
    var ddo = $("#ddoId").val();
    $.get(server_base_url + "hrms/EmployeeMaster/GetEmpcode", {
        ddo: ddo
    }).done(function(pdata) {

        var availablecodes = [];
        for (var i = 0; i < pdata.length; i++)
        {
            availablecodes.push(pdata[i].employeeCode);
        }
        $("#empcode").autocomplete({
            source: availablecodes
        });
    });
}

function validateSalaryIncrement()
{
    var ddo = $('#ddoId').val();
    var transdate = $('#transadate').val();
    var fromdt = $('#fromdate').val();
    var todate = $('#todate').val();
    var result = 1;
    var days = checkFromDateAndToDateSalaryincrementDatewise();
    if (ddo == "" || ddo == 0) {
        $("#ddoId").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("ddoIdErr", "Please Select DDO.");
    } else if (transdate == "" || transdate == null) {
        $("#transadate").focus();
        $("#ddoIdErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("transadateErr", "Please Enter Date.");
    } else if (fromdt == "" || fromdt == null) {
        $("#fromdate").focus();
        $("#transadateErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("fromdateErr", "Please Select Date.");
    } else if (todate == "" || todate == null) {
        $("#todate").focus();
        $("#fromdateErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("todateErr", "Please Select Date.");
    } else
    {        
        if(days < 0){
            $("#todate").focus();
        displaySmallErrorMessages("todateErr", "To Date should be greater than or equal to From Date ");
        result = 0;
        }else{
        $("#ddoIdErr").text("").val("");
        $("#fromdateErr").text("").val("");
        $("#todateErr").text("").val("");
        $("#transadateErr").text("").val("");
        viewempListforsalaryincrement();
    }
    }
}
function resetSalaryIncrement()
{
    $("#fromdate").text("").val("");
    $("#todate").text("").val("");
    $('#empcode').val("");
    $('#empname').val("");
    $('#empcodem').val("");
    $('#transadate').val("");

    $('#fromdateer').text("").val("");
    $('#todateer').text("").val("");
    $("#transadateer").text("").val("");
    $("#transadate").text("");

    $('#deptId').val("");
    $('#desiId').val("");
    $('#natureId').val("");
    $('#fundtypeId').val("");
    $('#pftypeid').val("");
    $('#emptypeId').val("");
    $('#cityid').val("");
    $("#todateErr").text("").val("");
}
function viewempListforsalaryincrement()
{
    if (checkUserPrivelege(pvViewSalaryIncrement)) {
        $("#tableHeader").append("<div id='maritalListPanelStart'/>");
        $("#maritalListPanelStart").text("").append("<div id='maritalListPanel' class='panel panel-blue'/>");
        $("#maritalListPanel").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Employee(Increment Due)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='salaryIncreamentList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#salaryIncreamentList").click(function() {
            $("#collapseOne3").toggle();
            if ($("#salaryIncreamentList span").hasClass("glyphicon-minus-sign")) {
                $("#salaryIncreamentList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#salaryIncreamentList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").text("").append("<div id='ErrorDiv'/>");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").text("").append("<div class='tab-pane' id='viewList'/>");
        $("#viewList").append("<div class='table-responsive' id='viewSectionTableDiv' />");
        $("#viewSectionTableDiv").append('<table id="empsalaryDueTable" class="table table-striped table-bordered table-hover">');
        $("#empsalaryDueTable").append("<thead class=''><tr>"
                //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
                + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>DDO</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Designation</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Current Basic</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Inc.Percentage</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Inc.Date</th>"
                + "</tr></thead>");
        var employeeSearchJSON = {
            employeeCode: $("#empcode").val(),
            employeeCodeM: $("#empcodem").val(),
            empName: $("#empname").val(),
            ddo: $("#ddoId").val(),
            location: $("#location").val(),
            department: $("#deptId").val(),
            designation: $("#desiId").val(),
            natureType: $("#natureId").val(),
            postingCity: $("#cityid").val(),
            fundType: $("#fundtypeId").val(),
            pfType: $("#pftypeid").val(),
            empType: $("#emptypeId").val()
        }

        $.get(server_base_url + "payroll/PayrollDetails/SalaryIncrement/Search", {
            employeeSearchJSON: JSON.stringify(employeeSearchJSON),
            fromdate: $("#fromdate").val(),
            todate: $("#todate").val()
        }).done(function(pdata) {
            var empSalaryDueList = pdata.empList;
            var incProcessedList = pdata.salaryIncDueList;
            empSalaryDueList = JSON.stringify(empSalaryDueList);
            empSalaryDueList = JSON.parse(empSalaryDueList);
            empSalaryDueList = JSON.parse(empSalaryDueList);
            incProcessedList = JSON.stringify(incProcessedList);
            incProcessedList = JSON.parse(incProcessedList);
            incProcessedList = JSON.parse(incProcessedList);
            incrementProcessed(incProcessedList);
            if (pdata == null || pdata == "" || pdata == 500 || pdata == undefined || pdata.statuscode == unauthorized)
            {
                // alert(NoDataFound);
                displayLargeErrorMessages("pregresssuccessBefore", "" + NoDataFound + "<br /><br />");
            }

            $("#empsalaryDueTable").append("<tbody id='empsalaryDueTableBody' class='table-striped table-bordered' />");
            for (var i = empSalaryDueList.length - 1; i >= 0; i--) {
                var checkcondition = false;
                if (incProcessedList == null || incProcessedList == "" || incProcessedList == 501)
                {

                    $("#empsalaryDueTableBody").append("<tr id='" + empSalaryDueList[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                            + "<td style='cursor:pointer;'>" + empSalaryDueList[i].employeeCode + "</td>"
                            + "<td style='cursor:pointer;'>" + empSalaryDueList[i].employeeName + "</td>"
                            + "<td style='cursor:pointer;'>" + empSalaryDueList[i].ddo + "</td>"
                            + "<td style='cursor:pointer;'>" + empSalaryDueList[i].designation + "</td>"
                            + "<td style='cursor:pointer;'>" + empSalaryDueList[i].basic + "</td>"
                            + "<td style='cursor:pointer;'>" + empSalaryDueList[i].incrementPercentage + "</td>"
                            + "<td style='cursor:pointer;'>" + empSalaryDueList[i].IncrementDueDate + "</td></tr>");
                } else
                {

                    for (var k = incProcessedList.length - 1; k >= 0; k--) {
                        if (empSalaryDueList[i].employeeCode == incProcessedList[k].employeeCode)
                        {
                            checkcondition = true;
                            break;
                        }

                    }
                    if (checkcondition == false)
                    {
                        $("#empsalaryDueTableBody").append("<tr id='" + empSalaryDueList[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                                + "<td style='cursor:pointer;'>" + empSalaryDueList[i].employeeCode + "</td>"
                                + "<td style='cursor:pointer;'>" + empSalaryDueList[i].employeeName + "</td>"
                                + "<td style='cursor:pointer;'>" + empSalaryDueList[i].ddo + "</td>"
                                + "<td style='cursor:pointer;'>" + empSalaryDueList[i].designation + "</td>"
                                + "<td style='cursor:pointer;'>" + empSalaryDueList[i].basic + "</td>"
                                + "<td style='cursor:pointer;'>" + empSalaryDueList[i].incrementPercentage + "</td>"
                                + "<td style='cursor:pointer;'>" + empSalaryDueList[i].IncrementDueDate + "</td></tr>");
                    }
                }

                $("#empsalaryDueTable thead tr th:first input:checkbox").change(function() {
                    $("#empsalaryDueTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                });
                $("#empsalaryDueTable tbody tr td:first-child input:checkbox").change(function() {
                    var tot = $(".case").length;
                    var tot_checked = $(".case:checked").length;
                    if (tot != tot_checked) {
                        $("#selectall").prop('checked', false);
                    }
                });
            }
            $("#empsalaryDueTable").DataTable({
                paging: true
            });
        });

        $("#listpanelRow").append("<div  class='col-xs-3' /><div class='col-xs-3'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='saveIncrementList()'>Save</button></div>");


        // });

    }
}

function incrementProcessed(incrementMakedList)
{

    if (checkUserPrivelege(pvCreateSalaryIncrement)) {
        $("#tableHeader").append("<div id='incrementProceedPanelStart'/>");
        $("#incrementProceedPanelStart").text("").append("<div id='incrementProceedListPanel' class='panel panel-blue'/>");
        $("#incrementProceedListPanel").text("").append("<div id='incrementProceedListPanelHeading' class='panel-heading' />");
        $("#incrementProceedListPanelHeading").append("<h4 id='incrementfirstHeader' class='panel-title' />");
        $("#incrementfirstHeader").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Employee(Increment Made)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='increamentProcessed'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#incrementProceedListPanel").append("<div id='inccollapseOne' class='panel-collapse collapse in' />");
        $("#increamentProcessed").click(function() {
            $("#inccollapseOne").toggle();
            if ($("#increamentProcessed span").hasClass("glyphicon-minus-sign")) {
                $("#increamentProcessed").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#increamentProcessed").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#inccollapseOne").append("<div id='inclistpanelMainBody' class = 'panel-body' />");
        $("#inclistpanelMainBody").text("").append("<div id='incErrorDiv'/>");
        $("#inclistpanelMainBody").append("<div id='inclistpanelRow' class='row' />");
        $("#inclistpanelRow").text("").append("<div class='tab-pane' id='incviewList'/>");
        $("#incviewList").append("<div class='table-responsive' id='viewIncTableDiv' />");
        $("#viewIncTableDiv").append('<table id="empsalaryMakedTable" class="table table-striped table-bordered table-hover">');
        $("#empsalaryMakedTable").append("<thead class=''><tr>"
                //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
                + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>DDO</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Increment Percentage</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Basic</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Increment Date</th>"
                + "</tr></thead>");
        $("#empsalaryMakedTable").append("<tbody id='empsalaryMakedTableBody' class='table-striped table-bordered' />");
        for (var i = incrementMakedList.length - 1; i >= 0; i--) {
            $("#empsalaryMakedTableBody").append("<tr id='" + incrementMakedList[i]._id.$oid + "' style='cursor:pointer;' >"
                    + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" value="' + incrementMakedList[i].emprowid + '" type="checkbox" id="inccheck_id" name="case" class="case"/>' + "</td>"
                    + "<td style='cursor:pointer;'>" + incrementMakedList[i].employeeCode + "</td>"
                    + "<td style='cursor:pointer;'>" + incrementMakedList[i].employeeName + "</td>"
                    + "<td style='cursor:pointer;'>" + incrementMakedList[i].ddo + "</td>"
                    + "<td style='cursor:pointer;'>" + incrementMakedList[i].incrementPercentage + "</td>"
                    + "<td style='cursor:pointer;'>" + incrementMakedList[i].Incbasic + "</td>"
                    + "<td style='cursor:pointer;'>" + incrementMakedList[i].incrementStrDate + "</td></tr>");
        }
        $("#empsalaryMakedTable thead tr th:first input:checkbox").change(function() {
            $("#empsalaryMakedTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
        });
        $("#empsalaryMakedTable tbody tr td:first-child input:checkbox").change(function() {
            var tot = $(".case").length;
            var tot_checked = $(".case:checked").length;
            if (tot != tot_checked) {
                $("#selectall").prop('checked', false);
            }
        });

        $("#empsalaryMakedTable").DataTable({
            paging: true
        });


        $("#inclistpanelRow").append("<div  class='col-xs-3' /><div class='col-xs-3'><button type='button' onclick='deleteSalaryInc()' class='btn btn-warning mr5 pull-right' name='reset' value='reset'>Delete</button></div>");

    }
}

function saveIncrementList()
{
    if (checkUserPrivelege(pvCreateSalaryIncrement)) {
        var employeList = [];

        $('#empsalaryDueTable tr input[type="checkbox"][name="case"]:checked').each(function(i) {
            var row = $(this).closest('tr');
            employeList.push({
                emprowid: row.attr('id'),
                employeeCode: row.find('td:eq(1)').text(),
                employeeName: row.find('td:eq(2)').text(),
                basic: row.find('td:eq(5)').text(),
                incrementPercentage: row.find('td:eq(6)').text(),
                incrementStrDate: row.find('td:eq(7)').text(),
                ddo: $("#ddoId").val()
            });
            $(this).closest('tr').remove();
        });
        employeList = JSON.stringify(employeList);

        var id = getUserSessionElement("userId");
        $.post(server_base_url + "/payroll/PayrollDetails/SalaryIncrementDateWise/Save", {
            empListJson: employeList,
            userid: id
        }).done(function(data) {
            if (data == fail || data.statuscode == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession || data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException || data.statuscode == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            } else {
                displaySuccessMessages("ErrorDiv", successMessage, "");
                setTimeout(function() {
                    $("#saveUpdateBtnId").attr("onclick", validateSalaryIncrement());
                    // salaryIncrement(dashboardBodyMainDiv);

                    $("#pregsuccessBefore").text("");
                }, 2100);

            }

        });
    }
}
function deleteSalaryInc()
{
    if (checkUserPrivelege(pvDeleteSalaryIncrement)) {
        var employesalaryIncList = [];

        $('#empsalaryMakedTable tr input[type="checkbox"][name="case"]:checked').each(function(i) {
            var row = $(this).closest('tr');
            employesalaryIncList.push({
                salincrowid: row.attr('id'),
                employeeCode: row.find('td:eq(1)').text(),
                employeeName: row.find('td:eq(2)').text(),
                incrementPercentage: row.find('td:eq(4)').text(),
                emprowid: $('#inccheck_id').val()
            });
            $(this).closest('tr').remove();
        });
        employesalaryIncList = JSON.stringify(employesalaryIncList);

        var id = getUserSessionElement("userId");
        $.post(server_base_url + "/payroll/PayrollDetails/SalaryIncrementDateWise/Delete", {
            empListJson: employesalaryIncList,
            userid: id
        }).done(function(data) {
            if (data == null) {
                $("#saveUpdateBtnId").attr("onclick", validateSalaryIncrement());
            } else if (data == fail || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession || data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException || data.statuscode == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            } else {
                displayLargeErrorMessagesInCenterInRed("incErrorDiv", "Deleted Succesfully");
                setTimeout(function() {
                    $("#saveUpdateBtnId").attr("onclick", validateSalaryIncrement());
                    $("#incErrorDiv").text("");
                }, 2000);
            }

        });
    }
}
function dateConversioninSalary(date) {
    var date1 = date / 1000;
    var d = new Date(0);
    d.setUTCSeconds(date1);
    var tempDate = new Date(d);
    var temp = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear();
    d = temp;
    return d;
}
function getLocationBasedOnDDOInSalaryIncre(name) {
    var ddo = $("#ddoId").val();
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getLocationBasedOnDdo
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#location").text("").append("<option value = '' selected>---- Select Location ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#location").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].locationName + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#location option:contains('" + name + "')").attr("selected", "selected");
            }
        } else
        {
            $("#location").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}

function checkFromDateAndToDateSalaryincrementDatewise() {
    var fDate = $("#fromdate").datepicker("getDate");
    var tDate = $("#todate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
