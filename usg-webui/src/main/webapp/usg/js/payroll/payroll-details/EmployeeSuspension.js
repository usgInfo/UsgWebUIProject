/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function employeeSuspension(divId)
{
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=employeeSuspension("dashboardBodyMainDiv")>Employee Suspension</a>');
    createFormWithPrivilage(divId, innerDivCF, "Employee Suspension", FieldGroupForCF, successMsgDivCF, pvCreateEmployeePromotion);
    if (checkUserPrivelege(pvCreateEmployeePromotion)) {
        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        getLoggedInDDOInDropDown("ddo", "");
        $("#Row0Col2").append(getLabel("Employee Code", "required") + "" + getDropDown("employeeCode"));
        $("#ddo").attr("onchange", "getEmpCodeEmployeeSuspension()");
        $("#employeeCode").attr("onchange", "setEmployeeDetailsInEmployeeSuspension()");
        $("#" + FieldGroupForCF).append("<input type='hidden' id='empsusId' >");
        getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel_InputWithSpan("Employee Name", "", "employeeName", "", "readonly"));
        $("#Row1Col2").append(getLabel_InputWithSpan("Employee Code(M)", "", "employeecodeM", "", "readonly"));
        $("#" + FieldGroupForCF).append("<input type='hidden' id='employeeId' >");
        getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Department", "", "department", "", "readonly"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Designation", "", "designation", "", "readonly"));
        getTwoColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Location", "") + "" + getDropDown("location"));
        $("#Row3Col2").append(getLabel_InputWithSpan("PostingCity", "", "city", "", "readonly"));
        getLoggedInLocationInDropDown("location", "");
        getTwoColumnInRow(FieldGroupForCF, "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel_InputWithSpan("Nature ", "", "nature", "", "readonly"));
        $("#Row4Col2").append(getLabel_InputWithSpan("Grade", "", "grade", "", "readonly"));
        getTwoColumnInRow(FieldGroupForCF, "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel_InputWithSpan("Dated", "", "date", "", ""));
        $("#Row5Col2").append(getLabel("Remarks", "") + "" + getTextareaWithErrSpan("remarks", "", "", ""));
        $("#date").datepicker();
        getEmpCodeEmployeeSuspension();
        $("#panelMainBody").append("<div id='SuspensionButtonRow' class='row' />");
        $("#SuspensionButtonRow").append("<div  class='col-xs-12'><center><button type='button'  id='saveOrUpdateRowId' value='Save' class='btn btn-success mr5' onclick='EmployeeSuspensionValidation()'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button'  id='resetBackBtnId' onclick=resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "','ddo','location') class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></div>");

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });


        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });



        //viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");
    }
}

function setEmployeeDetailsInEmployeeSuspension() {
    var employeeCode = $("#employeeCode").val();
    $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
        employeeCode: employeeCode
    }).done(function (pdata) {

        $('#errorIdMsg').text("").val("");
        $('#employeeId').val(pdata[0]._id.$oid);
        $('#employeeName').text("").val("").val(pdata[0].employeeName);
        $('#employeecodeM').text("").val("").val(pdata[0].employeeCodeM);
        $('#department').text("").val("").val(pdata[0].department);
        $('#designation').text("").val("").val(pdata[0].designation);
        //  $('#location').text("").val("").val(pdata[0].location);
        $('#city').text("").val("").val(pdata[0].postingCity);
        $('#nature').text("").val("").val(pdata[0].natureType);
        $('#grade').text("").val("").val(pdata[0].grade);
        $('#remarks').text("").val("").val(pdata[0].remarks);
    });
}
function getEmpCodeEmployeeSuspension()
{
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
        location: getUserSessionElement(seLocationId),
        fromDt: fromDate,
        toDate: toDate
    }).done(function (data) {
        data = JSON.parse(data)
        if (data != null) {
            $('#employeeId').text("").val("");
            $('#employeeName').text("").val("");
            $('#employeecodeM').text("").val("");
            $('#department').text("").val("");
            $('#designation').text("").val("");
            // $('#location').text("").val("");
            $('#city').text("").val("");
            $('#nature').text("").val("");
            $('#grade').text("").val("");
            $('#date').text("").val("");
            $('#remarks').text("").val("");
            $("#employeeCode").text("");
            if (data == null || data == "" || data == 500 || data == 501)
            {
                $("#employeeCode").text("").append("<option >----" + NoDataFound + "----</option>");
            } else {
                $("#employeeCode").text("").append("<option  value='' selected >----[Employee Code]-Employee Name ----</option>");
                for (var i = 0; i < data.length; i++)
                {
                    $("#employeeCode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
                }
            }
        }
    });
}
function EmployeeSuspensionValidation()
{
    var ddo = $('#ddo').val();
    var date = $('#date').val();
    var empcode = $('#employeeCode').val();
    if (ddo == "" || ddo == 0) {
        $("#ddo").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("ddoErr", "Please Select DDO.");
    } else if (empcode == "" || empcode == null) {
        $("#employeeCode").focus();
        $("#ddoErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("employeeCodeErr", "Please Select EmployeeCode.");
    } else if (date == "" || date == null) {
        $("#date").focus();
        $("#employeeCodeErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("dateErr", "Please Enter Date.");
    } else
    {
        $("#ddoErr").text("").val("");
        $("#employeeCodeErr").text("").val("");
        $("#dateErr").text("").val("");
        viewListEmpSuspension();
    }
}
function viewListEmpSuspension()
{
    if (checkUserPrivelege(pvCreateEmployeePromotion) || checkUserPrivelege(pvViewEmployeePromotion)) {
        $("#tableHeader").append("<div id='empsuspensionPanelStart'/>");
        $("#empsuspensionPanelStart").text("").append("<div id='empsuspensionListPanel' class='panel panel-blue'/>");
        $("#empsuspensionListPanel").text("").append("<div id='empsuspensionListPanelHeading' class='panel-heading' />");
        $("#empsuspensionListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Employee</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='empSuspensionList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#empsuspensionListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#empSuspensionList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#empSuspensionList span").hasClass("glyphicon-minus-sign")) {
                $("#empSuspensionList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#empSuspensionList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").text("").append("<div id='ErrorDiv'/>");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").text("").append("<div class='tab-pane' id='viewList'/>");
        $("#viewList").append("<div class='table-responsive' id='viewSectionTableDiv' />");
        $("#viewSectionTableDiv").append('<table id="empSuspensionTable" class="table table-striped table-bordered table-hover">');
        $("#empSuspensionTable").append("<thead class=''><tr>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>DDO</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Designation</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Location</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Is Suspended</th>"
                + "</tr></thead>");
        var employeeCode = $("#employeeCode").val();
        $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
            employeeCode: employeeCode
        }).done(function (pdata) {

            if (pdata == null || pdata == "" || pdata == 500 || pdata == undefined || pdata.statuscode == unauthorized)
            {

                displayLargeErrorMessages("pregresssuccessBefore", "" + NoDataFound + "<br /><br />");
            }
            $("#empSuspensionTable").append("<tbody id='empSuspensionTableBody' class='table-striped table-bordered' />");
            for (var i = pdata.length - 1; i >= 0; i--) {
                var check = pdata[i].isSuspended;

                if (check == true)
                {

                    $("#empsusId").text("").val("").val(pdata[i].empSuspendedId);

                    $("#empSuspensionTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td style='cursor:pointer;'>" + pdata[i].employeeCode + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].employeeName + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].ddo + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].designation + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].location + "</td>"
                            + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case" checked/>' + "</td></tr>");


                } else
                {
                    $("#empSuspensionTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td style='cursor:pointer;'>" + pdata[i].employeeCode + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].employeeName + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].ddo + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].designation + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].location + "</td>"
                            + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td></tr>");
                }
            }
            $("#empSuspensionTable").DataTable({
                paging: true
            });
        });
        $("#listpanelRow").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='saveSuspendedEmployee()'>Save</button></div>");
    } else {
        displayLargeErrorMessagesInCenterInRed("pregresssuccessBefore", privilageNotExist);
    }
}
function saveSuspendedEmployee()
{
    if (checkUserPrivelege(pvCreateEmployeePromotion)) {
        var condition;
        var empid;
        var empSusId = $("#empsusId").val();
        if ($('#empSuspensionTable tbody tr:eq(0)').find('td:eq(5) input').is(':checked'))
        {
            condition = true;
        } else
        {
            condition = false;
        }
        if (condition == true || condition == false && empSusId != "")
        {
            $('#empSuspensionTable tbody tr').each(function () {
                empid = $(this).closest('tr').attr('id');
            });

            var employeData = {
                employeeCode: $("#employeeCode").val(),
                employeeCodeM: $("#employeecodeM").val(),
                employeeName: $("#employeeName").val(),
                ddo: $("#ddo").val(),
                location: $("#location").val(),
                department: $("#department").val(),
                designation: $("#designation").val(),
                isSuspended: condition,
                dated: $("#date").val(),
                remarks: $("#remarks").val()
            }
            employeData = JSON.stringify(employeData);
            var id = getUserSessionElement("userId");
            $.post(server_base_url + "/payroll/PayrollDetails/EmployeeSuspension/Save", {
                empJson: employeData,
                userid: id,
                empid: empid,
                empsusId: empSusId
            }).done(function (data) {
                if (data == fail || data.statuscode == fail) {
                    displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                } else if (data == unauthorized || data.statuscode == unauthorized) {
                    displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                } else if (data == invalidSession || data.statuscode == invalidSession) {
                    callSessionTimeout();
                } else if (data == statusException || data.statuscode == statusException) {
                    displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                } else {
                    scrolupfunction();
                    displaySuccessMessages(successMsgDivCF, successMessage, "");
                    setTimeout(function () {
                        employeeSuspension("dashBoardBodyMainDiv");
                    }, 4000);
                }

            });
        } else
        {
            displaySmallErrorMessagesInRed("ErrorDiv", "Please Check IsSuspension");
        }
    }
}