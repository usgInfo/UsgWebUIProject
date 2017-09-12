/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function  displayProcessPensionPage() {
    createPensionProcessForm();
}

function createPensionProcessForm() {
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    if (financialYear != null || financialYear != "" || financialYear != undefined)
    {
        var finyearArray = financialYear.split("~");
    }
    if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
    {
        var fromFinacialYear = finyearArray[0];
        var toFinacialYear = finyearArray[1];


    }

    $("#dashboardTitleMainDiv").text("").append("Pension");



    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionTransactions()">Pension Transaction>></a></label><a href="javascript:displayProcessPensionPage()"><label>Pension Process</label>');

    $("#dashboardBodyMainDiv").text("").append("<div id='processpensionMainDiv' class='row' />");

    $("#processpensionMainDiv").text("").append("<div id='processpensioncolumnDiv' class='col-lg-12'  style='width:100%;' >");

    $("#processpensioncolumnDiv").append("<div id='processpensionpanelDiv' class='panel panel-blue'>");
    $("#processpensioncolumnDiv").append('<div id="pensionnotprocessedDiv"  />');
    $("#processpensioncolumnDiv").append('<div id="pensionprocessedButtonDiv"  class="row"/>');
    $("#processpensioncolumnDiv").append('<div id="pensionProcessedDiv" />');
    $("#processpensioncolumnDiv").append('<div id="pensionnotprocessedButtonDiv" class="row" />');
    $("#processpensioncolumnDiv").append('<div id="pensionLockedDiv"  />');
    $("#processpensionpanelDiv").append("<div id='processpensionpanelHeadingDiv' class='panel-heading'>");
    $("#processpensionpanelHeadingDiv").append("<h4 id='processpensionHeader' class='panel-title' />");
    
    $("#processpensionHeader").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Pension Process</center>");
    $("#processpensionHeader").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colpensionprocessscreen'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#processpensionpanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");

    addToggleToId('colpensionprocessscreen', 'collapseOne2');

    $("#collapseOne2").append("<div id='processpensionpanelBodyDiv' class='panel-body pan'>");

    $("#processpensionpanelBodyDiv").append("<div id='processpensionRowPanel' class='row'>");
    $("#processpensionRowPanel").append("<div id='pregsuccessBefore'/>");


    $("#processpensionRowPanel").append("<div id='FieldGroup' class='form-group' />");
    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup").append("<input type='hidden' id='Id' >");

    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "", "empcode", "Enter Employee Code"));
    $("#Row1Col2").append(getLabel_InputWithSpan("Employee Name", "", "empname", "Enter Employee Name"));

    getTwoColumnInRow("FieldGroup", "Row2", "Row1Co21", "Row1Co22");
    $("#Row1Co21").append(getLabel("Department", "") + "" + getDropDown("department"));
    $("#Row1Co22").append(getLabel("Designation", "") + "" + getDropDown("designation"));

    getTwoColumnInRow("FieldGroup", "Row3", "Row1Co31", "Row1Co32");
    $("#Row1Co31").append(getLabel("Grade", "") + "" + getDropDown("grade"));
    $("#Row1Co32").append(getLabel("Sort By", "required") + "" + getDropDown("sortby"));

    getTwoColumnInRow("FieldGroup", "Row5", "Row1Co51", "Row1Co52");
    $("#Row1Co52").append(getLabel("Month", "required") + "" + getDropDown("month"));
    $("#Row1Co51").append(getLabel("Year", "required") + "" + getDropDown("year"));
    getFinancialYear("month", "year");
    getTwoColumnInRow("FieldGroup", "Row6", "Row1Co61", "Row1Co62");
    $("#Row1Co61").append(getLabel("Bill No", "required") + "" + getDropDown("billno"));
    $("#Row1Co62").append(getLabel_InputWithSpan("Dated", "required", "date", "Date", "onkeypress='return false'"));
    $("#date").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        startDate: fromFinacialYear,
        endDate: toFinacialYear
    });

    $("#FieldGroup").append("<div id='panelRow7' class='row' />");
    $("#panelRow7").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='viewEmpSearchList1()'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='displayProcessPensionPage()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
    $("#billno").prop("disabled", true);
    //$("#month").append("<option value='0' selected>--Select Month--</option><option  value='1'>Janaury</option> <option value='2'>February</option> <option value='3'>March</option> <option value='4'>April</option> <option value='5'>May</option> <option value='6'>June</option> <option value='7'>July</option> <option value='8'>August</option> <option value='9'>September</option> <option value='10'>October</option> <option value='11'>November</option> <option value='12'>December</option>");
    fetchallPensionProcessDepartment();
    fetchallPensionProcessDesignation();
    fetchallPensionProcessGrade();
    var sortByOptions = ["EmployeeCodeM", "EmployeeName", "Department"];
    getHardCodedOptions("sortby", "Sort By", sortByOptions);
    //fetchallPensionProcessemployeecode();
    //fetchallPensionProcessBillNo();
    //processPensionyear();

    $("#department").attr("onchange", "loadEmpcodeSearchFunctionalityforempPension()");
    $("#empcode").attr("onkeypress", "getDetails()");

}
$(document).on('change', '#year', function () {
    var year = $("#year").val();
    getFinancialMonth("monthId", year);
});
function getDetails()

{
    //////alert();
    if (event.which == 13) {
        getEmpDemoDetailsForPension()

    }
}
function loadEmpcodeSearchFunctionalityforempPension() {
    var department = $("#department").val();
    // ////alert(ddo+"--------");
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];
    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: department,
        fromDt: fromDate,
        toDate: toDate,
        location: getUserSessionElement(seLocationId)
    }).done(function (pdata) {
        pdata = JSON.parse(pdata);
        var availablecodes = [];
        for (var i = 0; i < pdata.length; i++)
        {
            availablecodes.push(pdata[i].employeecode);
        }
        $("#empcode").autocomplete({
            source: availablecodes
        });
    });

}
function getEmpDemoDetailsForPension()
{
    var ecode = $("#empcode").val();
    //////alert(ecode);
    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function (pdata) {

        if (pdata == null || pdata == "" || pdata == 500)
        {
            displayLargeErrorMessages("pregsuccessBefore", "" + noDataAvailable + "<br /><br />");
        } else {

            $('#empname').val(pdata[0].employeeName);
            $('#empcode').val(pdata[0].employeecode);

        }

    });
}

function viewEmpSearchList1()
{
    // ////alert();
    var startDate = $("#date").val();
    var billNo = $("#billno").val();
    var sortBy = $("#sortby").val();
    var employeecode = $("#empcode").val();
    var employeeName = $("#empname").val();
    var department = $("#department").val();
    var designation = $("#designation").val();
    var month = $("#month").val();
    var year = $("#year").val();
//////alert(month+year);
    $('#pregsuccessBefore').text("");
//    if (department == "" || department == "undefined" || department == null || month == "" || month == "undefined" || month == null || year == "" || year == "undefined" || year == null)
//    {
    if (preValidation(month) || preValidation(year) || preValidation(startDate) || preValidation(sortBy))
    {
        //////alert("First");
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
        //addSomeClass("form-groupDiv", "has-error");
        // $("#discription").focus();
        return false;

    }
//////alert();
//    pensionProcessedtable();
//    viewEmpPensionList($("#department").val(), $("#month").val(), $("#year").val());

//    $("#processpensioncolumnDiv").append("<div id='tableHeaderForList2'/>");
//
//    $("#tableHeaderForList2").text("").append("<div id='pensionNotProcessedListPanel' class='panel panel-blue' />");
//    $("#pensionNotProcessedListPanel").append("<div id='pensionNotProcessedListPanelHeading1' class='panel-heading' />");
//    $("#pensionNotProcessedListPanelHeading1").append("<h4 id='firstHeader1' class='panel-title' />");
//    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Employee(Pension Not Processed)</center>");
//
//    $("#pensionNotProcessedListPanel").append("<div id='collapseOne8' class='panel-collapse collapse in' />");
//    $("#collapseOne8").append("<div id='listpanelMainBody' class = 'panel-body' />");
//    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
//    $("#relationListPanel").append("<div id='pregresssuccessBefore'>");
//    $("#listpanelRow").append("<div id='sectionlistpanelRow' class='table-responsive' />");
//
//    $("#sectionlistpanelRow").text("").append("<div id='displaySectionDiv' class = 'panel panel-primary-head'></div>");
//    $("#displaySectionDiv").append("<table id='pensionNotProcessedTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");
//    // pqrs table header
//
//
//
//
//    $("#pensionNotProcessedTable").append("<thead class=''><tr>"
//            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
//            + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>S.No.</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>DDO</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Location</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Designation</th>"
//            + "</tr></thead>");
    //$("#pensionNotProcessedTable").append("<tbody id='pensionNotProcessedTableBody' class='table-striped table-bordered' />");

//    var employeeSearchJSON = {
//        employeecode: $("#empcode").val(),
//        employeeName: $("#empname").val(),
//        //ddo: $("#ddoId").val(),
//        //location: $("#locationId").val(),
//        department: $("#department").val(),
//        designation: $("#designation").val(),
//        grade: $("#grade").val()
//
//    }
//    //////alert("aaaaaa");
    var employeeSearchJSON = {
        employeecode: $("#empcode").val(),
        employeeName: $("#empname").val(),
        ddo: $("#ddoId").val(),
        location: $("#LocationId").val(),
        department: $("#department").val(),
        designation: $("#designation").val(),
        month: month,
        year: year,
        grade: $("#grade").val(),
        budgetHead: $("#budgetheadId").val(),
        fromDate: $("#fromdate").val(),
        toDate: $("#todate").val()
    }
    var condition = "NO";
    $.get(server_base_url + "pension/transaction/PensionEmployeeSearch", {
        //$.get(server_base_url + "pension/master/PensionEmploy/ViewList",{
        sortBy: sortBy,
        employeeSearchJSON: JSON.stringify(employeeSearchJSON),
        ddo: getUserSessionElement(seDDOId),
        location: getUserSessionElement(seLocationId)
    }).done(function (data) {
        ////alert("pdata" + data);
        // ////alert(JSON.stringify(pdata));
        if (data == null || data == "" || data == 500 || data == undefined)
        {
            // ////alert(NoDataFound);
            displayLargeErrorMessages("pregresssuccessBefore", "" + NoDataFound + "<br /><br />");
        } else {
            // ////alert("hi");
            var checkcondition = false;
//            $.get(server_base_url + "pension/transaction/ProcessPensionSearch", {
//                employeeSearchJSON: JSON.stringify(employeeSearchJSON),
//                month: $("#month").val(),
//                year: $("#year").val()
//            }).done(function(data) {
//            //////alert(data);
            if (data == NoData) {
                // ////alert("NoData");
                displaySmallErrorMessagesInRed("pregresssuccessBefore", NoDataFoundMessage + "");
            } else if (data == fail) {
                // ////alert("NoData11");
                displaySmallErrorMessagesInRed("pregresssuccessBefore", NoDataFoundMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                // ////alert("NoData22");
                displayErrMsgInTable("empSearchTable", unauthorizedMessage);
            } else if (data == statusException) {
                // ////alert("NoData33");
                displaySmallErrorMessagesInRed("pregresssuccessBefore", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                // ////alert("NoData44");
                callSessionTimeout();
            } else if (data == null) {
                // ////alert();
            } else {
                ////alert(data);
                // var dataPar = JSON.parse(data);
                //////alert(data);
                var mainData = data.result;
                // ////alert(mainData);
                var unprocessData = mainData.notprocessed;
                // ////alert("---"+unprocessData);
                var processData = mainData.processed;
                ////alert("-processData--"+JSON.stringify(processData));
                var lockedprocessData = mainData.lockedprocess;
                ////alert("--lockedprocessData-"+JSON.stringify(lockedprocessData));
                setTimeout(function () {
                    //  if (checkUserPrivelege(pvCreatePension) || checkUserPrivelege(pvViewPension)) {
                    unProcessPensionList(unprocessData);
                    // } else {
                    displayLargeErrorMessagesInCenterInRed("pregresssuccessBefore", "You have insufficient privilege to access Process Pension Feature");
                    // }
                }, 100);
                setTimeout(function () {
                    //if (checkUserPrivelege(pvCreatePension) && checkUserPrivelege(pvViewPension)) {
                    ProcessPensionDiv();
                    // }
                }, 100);
                setTimeout(function () {
                    //  if (checkUserPrivelege(pvViewPension)) {
                    pensionProcessed(processData);
                    // }
                    // if ((checkUserPrivelege(pvUpdatePension) || checkUserPrivelege(pvCreatePension)) && (checkUserPrivelege(pvViewPension))) {
                    lockedPensionDiv();
                    //  } else {
                    displayLargeErrorMessagesInCenterInRed("pregresssuccessBefore", "You have insufficient privilege to access UnProcess Pension Feature");
                    //  }
                }, 100);
                setTimeout(function () {
                    //if (checkUserPrivelege(pvViewPension)) {
                    lockedEmployeePension(lockedprocessData);
                    //}
                }, 100);
            }
            // });
        }
    });
}
function unProcessPensionList(unprocessData) {
    //////alert("aaaa");
////alert("aaaa"+unprocessData);

    //if (checkUserPrivelege(pvCreatePension) || checkUserPrivelege(pvViewPension)) {
    $("#pensionnotprocessedDiv").text("").append('<div id="empSearchListPanel" class="panel panel-blue" />');
    $("#empSearchListPanel").append('<div id="empSearchListHeading" class="panel-heading" />');
    $("#empSearchListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee(Pension Not Processed)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colPensionNotProceed"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

    $("#empSearchListPanel").append('<div id="collapseOne21" class="panel-collapse collapse in pal" />');
    $("#colPensionNotProceed").click(function () {
        $("#collapseOne21").toggle();
        if ($("#colPensionNotProceed span").hasClass("glyphicon-minus-sign")) {
            $("#colPensionNotProceed").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colPensionNotProceed").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne21").append('<div id="empSearchListBody" class = "panel-body pan" />');
    $("#empSearchListBody").append('<div id="panelRow" class="row" />');

    $("#empSearchListBody").append('<center><div id="empSearchListErrorMsgId" /></center>');
    $("#empSearchListBody").append('<div id="empSearchListMainBody" class="table-responsive" />');
    $("#empSearchListMainBody").append('<table id="empSearchTable" class="table table-striped table-bordered table-hover" />');
    $("#empSearchTable").append('<thead id="empSearchTableHeadId" />');
    $("#empSearchTable").append('<tbody id="empSearchTableBodyId" />');
    $("#empSearchTableHeadId").append('<tr><th><input type="checkbox" style="width:15px;height:15px;align:center" id="selectall1"/> All</th><th>Employee Code</th><th>Employee Name</th><th>DDO</th><th>Location</th><th>Department</th><th>Designation</th></tr>');
    if (unprocessData == NoDataFoundMessage || unprocessData == undefined) {
        $("#empSearchTable").dataTable().fnDestroy();
        displayErrMsgInTable("empSearchTable", NoDataFoundMessage);
    } else {
        var sno;
        for (var i = unprocessData.length - 1; i >= 0; i--) {
            sno++;
            var subData = unprocessData[i];
            var subdataString = JSON.stringify(subData)
            var ddo = $("#ddoId").val();
            var empcode = subData.employeecode
            var employeeSearchJSON = {
                ddo: ddo,
                employeecode: empcode
            }
            var subdataString = JSON.stringify(subData);
            // //alert(subdataString);
            $("#empSearchTableBodyId").append("<tr style='cursor:pointer;' >"
                    + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case1" name="case1" class="case1"/>' + "</td>"
                    + "<td style='cursor:pointer;'><input type='hidden' value='" + encodeURI(subdataString) + "'/>" + subData.employeecode + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.DDOName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.locationName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.departmentName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.designationName + "</td>"
                    + "</tr>");

        }
        $("#empSearchTable").dataTable();
        $("#empSearchTable thead tr th:first input:checkbox").change(function () {
            $("#empSearchTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
        });
        $("#empSearchTable tbody tr td:first-child input:checkbox").change(function () {
            var tot = $(".case1").length;
            var tot_checked = $(".case1:checked").length;
            if (tot != tot_checked) {
                $("#selectall1").prop('checked', false);
            } else
            {
                $("#selectall1").prop('checked', true);
            }
        });
    }

    // }
}

function ProcessPensionDiv() {
    $("#pensionprocessedButtonDiv").text("").append("<div class='form-group col-lg-12'><center><button id='processedButton' onclick=processPension() class='btn btn-success'>Process</button></center></div>");
}
function lockedPensionDiv() {
    $("#pensionnotprocessedButtonDiv").text("").append("<div class='form-group col-lg-12'><center><button id='processedButton' onclick=unProcessPension() class='btn btn-warning'>Un Process</button></center></div>");

}
function processPension() {
    $("#empSearchListErrorMsgId").text("");
    var attendanceJson = {};
    var checkedrowList = [];
    $('#empSearchTable tr input[type="checkbox"][name="case1"]:checked').each(function (i) {
        var row = $(this).closest('tr');
        //We are sending List to backend
        checkedrowList.push(JSON.parse(decodeURI((row.find('td:eq(1) input').val()))));
//            employeecode: row.find('td:eq(1)').text(),
//        $(this).closest('tr').remove();
    });
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    if (checkedrowList.length > 0) {
        attendanceJson = checkedrowList;

        //var pensiontype = $("input[name=ratedDefinedFor]:checked").val();
        $.post(server_base_url + "pension/transaction/SaveProcessPension", {
            processPensionJson: JSON.stringify(attendanceJson),
            month: $("#month").val(),
            year: $("#year").val(),
            // pensiontype: pensiontype,
//            fromDate: $("#fromdate").val(),
//            toDate: $("#todate").val(),
            loginId: getUserSessionElement("userId"),
            financialYear: financialYear
        }).done(function (data) {
            if (data.statuscode == NoData) {
                // //alert(data);
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", NoDataFoundMessage + "");
            }
            if (data == fail) {
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", failMessage + "");
            } else if (data == unauthorized) {
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", "No User available" + "");
            } else if (data) {
                displaySuccessMessages("empSearchListErrorMsgId", "Pension is successfully Processed", "");
                $('#empSearchTable tr input[type="checkbox"][name="case1"]:checked').each(function (i) {
                    $(this).closest('tr').remove();
                });
                viewEmpSearchList1();
                setTimeout(function () {
                    $("#empSearchListErrorMsgId").text("");
                }, 2000);
            }
        });
    } else
    {
        displaySmallErrorMessagesInRed("empSearchListErrorMsgId", "Please select atleast one employee.");
    }
}


function pensionProcessed(processData) {

    $("#pensionProcessedDiv").text("").append('<div id="attendanceproceesedListPanel" class="panel panel-blue" />');
    $("#attendanceproceesedListPanel").append('<div id="attendanceproceesedListHeading" class="panel-heading" />');
    $("#attendanceproceesedListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee(Pension Processed)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="PensionProcessedList"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

    $("#attendanceproceesedListPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
    $("#PensionProcessedList").click(function () {
        $("#collapseOne3").toggle();
        if ($("#PensionProcessedList span").hasClass("glyphicon-minus-sign")) {
            $("#PensionProcessedList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#PensionProcessedList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append('<div id="attendanceproceesedListBody" class = "panel-body pan" />');
    $("#attendanceproceesedListBody").append('<div id="panelRow" class="row" />');
    $("#attendanceproceesedListBody").append('<center><div id="empSearchListErrorMsgId1" /></center>');
    $("#attendanceproceesedListBody").append('<center><div id="attendanceproceesedListErrorMsgId"/></center>');
    $("#attendanceproceesedListBody").append('<div id="attendanceproceesedListMainBody" class="table-responsive" />');
    $("#attendanceproceesedListMainBody").append('<table id="attendanceproceesedTable" class="table table-striped table-bordered table-hover" />');
    $("#attendanceproceesedTable").append('<thead id="attendanceproceesedTableHeadId" />');
    $("#attendanceproceesedTable").append('<tbody id="attendanceproceesedTableBodyId" />');

    $("#attendanceproceesedTableHeadId").append('<tr><th><input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/> All</th><th>Employee Code</th><th>Employee Name</th><th>DDO</th><th>Location</th><th>Department</th><th>Designation</th></tr>');

    if (processData == NoDataFoundMessage || processData == undefined) {
        $("#attendanceproceesedTable").dataTable().fnDestroy();
        displayErrMsgInTable("attendanceproceesedTable", NoDataFoundMessage);
    } else {
        var sno;
        for (var i = processData.length - 1; i >= 0; i--) {
            sno++;
            var subData = processData[i];

            $("#attendanceproceesedTableBodyId").append("<tr style='cursor:pointer;' >"
                    + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                    + "<td style='cursor:pointer;'><input type='hidden' value='" + subData.idStr + "'/>" + subData.employeecode + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.DDOName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.locationName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.departmentName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.designationName + "</td>"
                    + "</tr>");

        }
        $("#attendanceproceesedTable").dataTable();
        $("#attendanceproceesedTable thead tr th:first input:checkbox").change(function () {
            $("#attendanceproceesedTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
        });
        $("#attendanceproceesedTable tbody tr td:first-child input:checkbox").change(function () {
            var tot = $(".case").length;
            var tot_checked = $(".case:checked").length;
            if (tot != tot_checked) {
                $("#selectall").prop('checked', false);
            } else
            {
                $("#selectall").prop('checked', true);
            }
        });

    }



}

function unProcessPension() {

    $("#empSearchListErrorMsgId").text("");
    var checkrowList = [];
    var attendanceJson = {};
    $('#attendanceproceesedTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
        var row = $(this).closest('tr');
        //We are sending List to backend
        checkrowList.push({
            idStr: row.find('td:eq(1)').find('input[type="hidden"]').val(),
//        $(this).closest('tr').remove();
        });
    });
    ////alert(checkrowList);
    if (checkrowList.length > 0) {
        var loginUserId = getUserSessionElement("userId");
        attendanceJson = checkrowList;
        // ////alert(attendanceJson);
        $.post(server_base_url + "pension/transaction/ProcessPension/Unprocess", {
            id: JSON.stringify(attendanceJson),
            loginUserId: loginUserId
        }).done(function (data) {
            viewEmpSearchList1();
            setTimeout(function () {
                $("#empSearchListErrorMsgId").text("");
            }, 1000);
        });
    } else
    {
        displaySmallErrorMessagesInRed("empSearchListErrorMsgId1", "Please select atleast one employee.");
    }
}


function lockedEmployeePension(lockedData) {

    $("#pensionLockedDiv").text("").append('<div id="attendanceLockedListPanel" class="panel panel-blue" />');
    $("#attendanceLockedListPanel").append('<div id="attendanceLockedListHeading" class="panel-heading" />');
    $("#attendanceLockedListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee(Pension Locked)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="pensionLockedProcess"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');
    $("#attendanceLockedListPanel").append('<div id="collapseOne4" class="panel-collapse collapse in pal" />');
    $("#pensionLockedProcess").click(function () {
        $("#collapseOne4").toggle();
        if ($("#pensionLockedProcess span").hasClass("glyphicon-minus-sign")) {
            $("#pensionLockedProcess").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#pensionLockedProcess").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne4").append('<div id="attendanceLockedListBody" class = "panel-body pan" />');
    $("#attendanceLockedListBody").append('<div id="panelRow" class="row" />');
    $("#attendanceLockedListBody").append('<center><div id="attendanceLockedListErrorMsgId" /></center>');
    $("#attendanceLockedListBody").append('<div id="attendanceLockedListMainBody" class="table-responsive" />');
    $("#attendanceLockedListMainBody").append('<table id="attendanceLockedTable" class="table table-striped table-bordered table-hover" />');
    $("#attendanceLockedTable").append('<thead id="attendanceLockedTableHeadId" />');
    $("#attendanceLockedTable").append('<tbody id="attendanceLockedTableBodyId" />');
    $("#attendanceLockedTableHeadId").append('<tr><th>S.No</th><th>Employee Code</th><th>Employee Name</th><th>DDO</th><th>Location</th><th>Department</th><th>Designation</th></tr>');
    var sno = 0;
    if (lockedData == NoDataFoundMessage || lockedData == undefined) {

        displayErrMsgInTable("attendanceLockedTable", NoDataFoundMessage);
    } else {
        for (var i = lockedData.length - 1; i >= 0; i--) {
            sno++;
            var subData = lockedData[i];

            $("#attendanceLockedTableBodyId").append("<tr style='cursor:pointer;' >"
                    + "<td style='cursor:pointer;'>" + sno + "</td>"
                    + "<td style='cursor:pointer;'><input type='hidden' value='" + subData.idStr + "'/>" + subData.employeecode + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.DDOName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.locationName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.departmentName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.designationName + "</td>"
                    + "</tr>");

        }
        $("#attendanceLockedTable").dataTable();
    }
}

//function pensionProcessedtable()
//{
//    $("#processpensioncolumnDiv").append("<div id='tableHeaderForList'/>");
//
//    /*$("#tableHeaderForList").append("<div id='pensionProcessListFirstPanel' class='panel panel-primary' />");
//     $("#pensionProcessListFirstPanel").append("<div id='pensionProcessFirstPanelHeading' class='panel-heading' />");
//     $("#pensionProcessFirstPanelHeading").append("<h4 id='pensionProcessFirstHeader1' class='panel-title' />");
//     $("#pensionProcessFirstHeader1").append("<center>List of Employee(Pension Not Processed)</center>");
//     $("#pensionProcessListFirstPanel").append("<div id='pensionProcessFirstcollapseOne3' class='panel-collapse collapse in' />");
//     $("#pensionProcessFirstcollapseOne3").append("<div id='pensionProcesslistpanelMainBody' class = 'panel-body' />");
//     $("#pensionProcesslistpanelMainBody").append("<div id='pensionProcessFirstlistpanelRow' class='row' />");*/
//
//    $("#tableHeaderForList").text("").append("<div id='pensionNotProcessedListPanel' class='panel panel-blue' />");
//    $("#pensionNotProcessedListPanel").append("<div id='pensionNotProcessedListPanelHeading' class='panel-heading' />");
//    $("#pensionNotProcessedListPanelHeading").append("<h4 id='firstHeader2' class='panel-title' />");
//    $("#firstHeader2").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Employee(Pension Processed)</center>");
//
//    $("#pensionNotProcessedListPanel").append("<div id='collapseOne4' class='panel-collapse collapse in' />");
//    $("#collapseOne4").append("<div id='listpanelMainBody1' class = 'panel-body' />");
//    $("#listpanelMainBody1").append("<div id='listpanelRow1' class='row' />");
//    $("#listpanelMainBody1").append("<div id='pregresssuccessBefore1'>");
//    $("#listpanelRow1").append("<div id='sectionlistpanelRow1' class='table-responsive' />");
//
//    $("#sectionlistpanelRow1").text("").append("<div id='displaySectionDiv1' class = 'panel panel-primary-head'></div>");
//    $("#displaySectionDiv1").append("<table id='pensionProcessedTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");
//
//
//    $("#pensionProcessedTable").append("<thead class=''><tr>"
//            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
//            + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>S.No.</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>DDO</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Location</th>"
//            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Designation</th>"
//            + "</tr></thead>");
//    $("#pensionProcessedTable").append("<tbody id='pensionProcessedTableBody' class='table-striped table-bordered' />");
//
//
//
//    $("#processpensioncolumnDiv").append("<div id='tableHeaderForList8'/>");
//    $("#tableHeaderForList8").text("").append("<div id='ButtonId1' class='form-group' />");
//    $("#ButtonId1").append("<div id='Button1'/>");
//    $("#Button1").append("<center><button class='btn btn-success mr5 btn' onclick='moveCheckData()'>Process</button></center>");
//    $("#Button1").append("");
////attendance locked
//
//}

function viewEmpPensionList(department, Month, Year)
{
    $("#processpensioncolumnDiv").append("<div id='tableHeaderForList1'/>");

    $("#tableHeaderForList1").text("").append("<div id='pensionLockedListPanel3' class='panel panel-blue' />");
    $("#pensionLockedListPanel3").append("<div id='pensionLockedListPanel3Heading' class='panel-heading' />");
    $("#pensionLockedListPanel3Heading").append("<h4 id='firstHeader3' class='panel-title' />");
    $("#firstHeader3").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Employee(Pension Locked)</center>");

    $("#pensionLockedListPanel3").append("<div id='collapseOne5' class='panel-collapse collapse in' />");
    $("#collapseOne5").append("<div id='listpanelMainBody2' class = 'panel-body' />");
    $("#listpanelMainBody2").append("<div id='listpanelRow2' class='row' />");
    $("#listpanelMainBody2").append("<div id='pregresssuccessBefore2'>");
    $("#listpanelRow2").append("<div id='sectionlistpanelRow2' class='table-responsive' />");

    $("#sectionlistpanelRow2").text("").append("<div id='displaySectionDiv2' class = 'panel panel-primary-head'></div>");
    $("#displaySectionDiv2").append("<table id='pensionlockmarkTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");


    $("#pensionlockmarkTable").append("<thead class=''><tr>"
            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
            //   + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>S.No.</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Designation</th>"
            + "</tr></thead>");
    $("#pensionlockmarkTable").append("<tbody id='pensionlockmarkTableBody' class='table-striped table-bordered' />");

    /*$.get(server_base_url + "pension/transaction/ProcessPensionSearch", {
     department: department,
     month: Month,
     year: Year
     }).done(function (pdata) {
     // pdata=JSON.stringify(pdata);
     // pdata = JSON.parse(data);
     //////alert(pdata);
     var sno = 0;
     for (var k = pdata.length - 1; k >= 0; k--) {
     sno++;
     for (var j = 0; j < pdata[k].pensionList.length; j++)
     {
     //  ////alert(pdata[k].attendanceList.length);
     $("#pensionlockmarkTableBody").append("<tr id='" + pdata[k]._id.$oid + "' style='cursor:pointer;' >"
     //  + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
     + "<td>" + sno + "</td>"
     + "<td style='cursor:pointer;'>" + pdata[k].pensionList[j].employeecode + "</td>"
     + "<td style='cursor:pointer;'>" + pdata[k].pensionList[j].employeeName + "</td>"
     + "<td style='cursor:pointer;'>" + pdata[k].pensionList[j].DDO + "</td>"
     + "<td style='cursor:pointer;'>" + pdata[k].pensionList[j].location + "</td>"
     + "<td style='cursor:pointer;'>" + pdata[k].pensionList[j].designation + "</td></tr>");
     }
     
     }
     $('#pensionlockmarkTable').append("</table>");
     //  $('#attendancelockmarkTable').dataTable();
     
     });*/
//     $("#processpensioncolumnDiv").append("<div id='tableHeaderForList4'/>");
//     $("#tableHeaderForList4").text("").append("<div id='ButtonId' class='form-group' />");
//     $("#ButtonId").append("<div id='Button'/>");
//     $("#Button").append("<center><button class='btn btn-success mr5 btn' onclick='moveCheckData()'>Process</button>&nbsp&nbsp&nbsp<button class='btn btn-warning mr5'  style='padding-left: 2px;' onclick='moveUncheckData()'>UnProcess</button></center>");
//     $("#Button").append("");

}


function processPensionyear(name) {
    $('#year').text("").append("<option value='0' class='form-control'  selected disabled >-----------select year---------</option>");
    for (i = new Date().getFullYear(); i > 1900; i--)
    {
        if (name == i) {
            $('#year').append($('<option selected/>').val(i).html(i));
        } else {
            $('#year').append($('<option />').val(i).html(i));
        }
    }


}

function fetchallPensionProcessBillNo(name) {
    $("#billno").append("<option value = '' selected disabled> ---Select Bill No---</option>");
    $.post(server_base_url + "/pension/master/PensionEmploy/ViewList", {
    }).done(function (data) {
        for (var i = 0; i < data.length; i++) {
            var pensionOrderNum = data[i].pensionOrderNum;
            if (pensionOrderNum != '' || pensionOrderNum != null || pensionOrderNum != 0 || pensionOrderNum != undefined) {
                if (name == data[i].pensionOrderNum) {
                    $("#billno").append("<option  value='" + data[i].pensionOrderNum + "' selected>" + data[i].pensionOrderNum + "</option>");

                } else {
                    $("#billno").append("<option  value='" + data[i].pensionOrderNum + "' >" + data[i].pensionOrderNum + "</option>");
                }
            }
        }
    });
}

function fetchallPensionProcessDepartment(name) {
    $("#department").append("<option value = '0' selected> ----Select Department----</option>");
    $.post(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function (data) {
        if (data == fail) {
        } else {
            for (var i = 0; i < data.length; i++) {
                var department = data[i].department;
                if (department != '' || department != null || department != 0 || department != undefined) {
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

function fetchallPensionProcessDesignation(name) {
    $("#designation").append("<option value = '0' selected > ----Select Designation----</option>");
    $.post(server_base_url + "/hrms/salary/Designation/ViewList", {
    }).done(function (data) {
        for (var i = 0; i < data.length; i++) {
            var designation = data[i].designation;
            if (designation != '' || designation != null || designation != 0 || designation != undefined) {
                if (name == data[i].designation) {
                    $("#designation").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].designation + "</option>");

                } else {
                    $("#designation").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].designation + "</option>");
                }
            }
        }

    });
}

function fetchallPensionProcessGrade(name) {
    $("#grade").append("<option value = '0' selected> ----Select Grade---</option>");
    $.post(server_base_url + "/hrms/salary/Grade/ViewList", {
    }).done(function (data) {


        for (var i = 0; i < data.length; i++) {
            var gradeName = data[i].gradeName;
            if (gradeName != '' || gradeName != null || gradeName != 0 || gradeName != undefined) {
                if (name == data[i].gradeName) {
                    $("#grade").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].gradeName + "</option>");

                } else {
                    $("#grade").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].gradeName + "</option>");
                }
            }
        }
    });
}

function resetPensionData()
{
    $('#empcode').val("");
    $('#empname').val("");
    $('#department').val("");
    $('#designation').val("");
    $('#grade').val("");
    $('#sortby').val("");
    $('#month').val("");
    $('#year').val("");
    $('#billno').val("");
    $('#date').val("");
    $('#pregsuccessBefore').text("");
}

/*function fetchAllPensionProcessEmployee() {
 var startDate = $("#date").val();
 var billNo = $("#billno").val();
 //var sortBy = $("#sortby").val();
 var employeecode = $("#empcode").val();
 var employeeName = $("#empname").val();
 var department = $("#department").val();
 var designation = $("#designation").val();
 var month = $("#month").val();
 var year = $("#year").val();
 
 
 $("#dashBoardBodyMainDiv").text("").append("<div id='pensionProcessReg' />");
 
 $("#pensionProcessReg").text("").append("<div id='pensionProcessMainDiv' class='col-md-6' style='width:100%;' />");
 
 $("#pensionProcessMainDiv").text("").append("<div class='panel-group' id='pensionProcesspanel' />");
 
 $("#pensionProcesspanel").append("<div id='pensionProcessFirstPanel' class='panel panel-primary' />");
 $("#pensionProcessFirstPanel").append("<div id='pensionProcessfirstPanelHeading' class='panel-heading' />");
 $("#pensionProcessfirstPanelHeading").append("<h4 id='pensionProcesstableHeader1' class='panel-title' />");
 $("#pensionProcesstableHeader1").append("<center>Pension Process</center>");
 $("#pensionProcessFirstPanel").append("<div id='pensionprocesscollapseOne2' class='panel-collapse collapse in' />");
 $("#pensionprocesscollapseOne2").append("<div id='pensionProcesspanelMainBody' class = 'panel-body' />");
 $("#pensionProcesspanelMainBody").append("<div id='pensionProcesspanelRow' class='row' />");
 $("#pensionProcesspanelRow").append("<center><span id='pensionProcesspregsuccessBefore'></span></center>");
 
 $("#pensionProcesspanelRow").append("<div id='pensionProcessFieldGroup' class='form-group' />");
 // $("#pensionProcessFieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
 $("#pensionProcessFieldGroup").append("<label class='col-sm-2 control-label'>Employee Code</label>");
 $("#pensionProcessFieldGroup").append("<div id='pensionProcessFieldDiv' class='col-sm-4' >");
 $("#pensionProcessFieldDiv").append("<input type='text' id='employeecode' name='employeecode'  value='" + employeecode + "' class='form-control' placeholder='Employee Code' size=50 maxlength=50/>");
 $("#pensionProcessFieldGroup").append("<label class='col-sm-2 control-label'>Employee Name</label>");
 $("#pensionProcessFieldGroup").append("<div id='pensionProcessFieldDiv1' class='col-sm-4' />");
 $("#pensionProcessFieldDiv1").append("<input type='text' id='employeeName' name='employeeName'  value='" + employeeName + "' class='form-control' placeholder='Employee Name' size=50 maxlength=50/>");
 
 //
 $("#pensionProcessFieldDiv").append("<span id='employeecodeErr'></span>");
 $("#pensionProcessFieldDiv1").append("<span id='employeeNameNameErr'></span><br>");
 //
 $("#pensionProcesspanelMainBody").append("<div id='pensionProcesspanelRow1' class='row' />");
 $("#pensionProcesspanelRow1").append("<div id='pensionProcessFieldGroup1' class='form-group' />");
 $("#pensionProcessFieldGroup1").append("<label class='col-sm-2 control-label'>Department</label>");
 $("#pensionProcessFieldGroup1").append("<div id='pensionProcessFieldDiv2' class='col-sm-4' />");
 $("#pensionProcessFieldDiv2").append("<select  id='department'  class='form-control' value='" + department + "'></select>");
 $("#department").append("<option id='updatecatCity' value='" + department + "'>" + department + "</option>");
 $("#pensionProcessFieldGroup1").append("<label class='col-sm-2 control-label'>Designation</label>");
 $("#pensionProcessFieldGroup1").append("<div id='pensionProcessFieldDiv3' class='col-sm-4' />");
 $("#pensionProcessFieldDiv3").append("<select  id='designation'  class='form-control' value='" + designation + "'></select>");
 $("#designation").append("<option  value='" + designation + "'>" + designation + "</option>");
 //
 $("#pensionProcessFieldDiv2").append("<span id='departmentErr'></span>");
 $("#pensionProcessFieldDiv3").append("<span id='designationErr'></span><br>");
 //
 $("#pensionProcesspanelMainBody").append("<div id='pensionProcesspanelRow2' class='row' />");
 $("#pensionProcesspanelRow2").append("<div id='pensionProcessFieldGroup2' class='form-group' />");
 $("#pensionProcessFieldGroup2").append("<label class='col-sm-2 control-label'>Grade</label>");
 $("#pensionProcessFieldGroup2").append("<div id='pensionProcessFieldDiv4' class='col-sm-4' />");
 $("#pensionProcessFieldDiv4").append("<select  id='grade'  class='form-control'></select>");
 $("#pensionProcessFieldGroup2").append("<label class='col-sm-2 control-label'>Sort By</label>");
 $("#pensionProcessFieldGroup2").append("<div id='pensionProcessFieldDiv5' class='col-sm-4' />");
 //    $("#pensionProcessFieldDiv5").append("<select  id='sortBy'  class='form-control' value='" + sortBy + "'></select>");
 //    $("#sortBy").append("<option value='" + sortBy + "'>" + sortBy + "</option>");
 //
 $("#pensionProcessFieldDiv4").append("<span id='gradeErr'></span>");
 $("#pensionProcessFieldDiv5").append("<span id='sortByErr'></span><br>");
 
 $("#pensionProcesspanelMainBody").append("<div id='pensionProcesspanelRow3' class='row' />");
 $("#pensionProcesspanelRow3").append("<div id='pensionProcessFieldGroup3' class='form-group' />");
 $("#pensionProcessFieldGroup3").append("<label class='col-sm-2 control-label' readonly>Month<em>*</em></label>");
 $("#designation").append("<option  value='" + designation + "'>" + designation + "</option>");
 $("#pensionProcessFieldGroup3").append("<div id='pensionProcessFieldDiv6' class='col-sm-4' />");
 $("#pensionProcessFieldDiv6").append("<select  id='month'  class='form-control' value='" + month + "'></select>");
 $("#month").append("<option  value='" + month + "'>" + month + "</option>");
 $("#pensionProcessFieldGroup3").append("<label class='col-sm-2 control-label' readonly>Year</label>");
 $("#pensionProcessFieldGroup3").append("<div id='pensionProcessFieldDiv7' class='col-sm-4' />");
 
 $("#pensionProcessFieldDiv7").append("<select  id='year'  class='form-control' value='" + year + "'></select>");
 $("#year").append("<option  value='" + year + "'>" + year + "</option>");
 $("#pensionProcessFieldDiv6").append("<span id='monthErr'></span>");
 $("#pensionProcessFieldDiv7").append("<span id='yearErr'></span><br>");
 //
 $("#pensionProcesspanelMainBody").append("<div id='pensionProcesspanelRow4' class='row' />");
 $("#pensionProcesspanelRow4").append("<div id='pensionProcessFieldGroup4' class='form-group' />");
 $("#pensionProcessFieldGroup4").append("<label class='col-sm-2 control-label'>Bill No</label>");
 $("#pensionProcessFieldGroup4").append("<div id='pensionProcessFieldDiv8' class='col-sm-4' />");
 $("#pensionProcessFieldDiv8").append("<select  id='billNo'  class='form-control'  value='" + year + "'></select>");
 $("#billNo").append("<option  value='" + year + "'>" + year + "</option>");
 $("#pensionProcessFieldGroup4").append("<label class='col-sm-2 control-label'>Dated</label>");
 $("#pensionProcessFieldGroup4").append("<div id='pensionProcessFieldDiv9' class='col-sm-4'  />");
 $("#pensionProcessFieldDiv9").append("<input type='text' id='dated' name='dated' class='form-control' value='" + startDate + "'placeholder='dd/mm/yyyy' size=50 maxlength=50/>");
 $("#dated").datepicker();
 $("#pensionProcessFieldDiv8").append("<span id='billNoErr'></span>");
 $("#pensionProcessFieldDiv9").append("<span id='datedErr'></span><br>");
 //
 
 $("#pensionProcesspanelMainBody").append("<div id='pensionProcesspanelRow5' class='row' />");
 $("#pensionProcesspanelRow5").append("<div  class='col-xs-3' />\n\
 <div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success pull-right mr5'  onclick='fetchAllPensionProcessEmployee()'>View</button></div>\n\
 <div class='col-xs-2'><button type='button' onclick='resetPensionBank()' class='btn btn-warning pull-left mr5' name='reset' value='reset'>Reset</button></div>");
 fetchallPensionProcessDepartment();
 fetchallPensionProcessDesignation();
 fetchallPensionProcessGrade();
 //fetchallPensionProcessemployeecode();
 fetchallPensionProcessBillNo();
 
 
 $("#pensionProcessMainDiv").append("<div id='pensionProcessListFirstPanel' class='panel panel-primary' />");
 $("#pensionProcessListFirstPanel").append("<div id='pensionProcessFirstPanelHeading' class='panel-heading' />");
 $("#pensionProcessFirstPanelHeading").append("<h4 id='pensionProcessFirstHeader1' class='panel-title' />");
 $("#pensionProcessFirstHeader1").append("<center>List of Employee(Pension Not Processed)</center>");
 $("#pensionProcessListFirstPanel").append("<div id='pensionProcessFirstcollapseOne3' class='panel-collapse collapse in' />");
 $("#pensionProcessFirstcollapseOne3").append("<div id='pensionProcesslistpanelMainBody' class = 'panel-body' />");
 $("#pensionProcesslistpanelMainBody").append("<div id='pensionProcessFirstlistpanelRow' class='row' />");
 
 $("#pensionProcessMainDiv").append("<div id='pensionProcessListSecondPanel' class='panel panel-primary' />");
 $("#pensionProcessListSecondPanel").append("<div id='pensionProcessSecondPanelHeading' class='panel-heading' />");
 $("#pensionProcessSecondPanelHeading").append("<h4 id='pensionProcessSecondHeader1' class='panel-title' />");
 $("#pensionProcessSecondHeader1").append("<center>List of Employee(Pension Processed)</center>");
 $("#pensionProcessListSecondPanel").append("<div id='pensionProcessSecondcollapseOne3' class='panel-collapse collapse in' />");
 $("#pensionProcessSecondcollapseOne3").append("<div id='pensionProcessSecondlistpanelMainBody' class = 'panel-body' />");
 $("#pensionProcessSecondlistpanelMainBody").append("<div id='pensionProcessSecondlistpanelRow' class='row' />");
 
 $("#pensionProcessMainDiv").append("<div id='pensionProcessListThirdPanel' class='panel panel-primary' />");
 $("#pensionProcessListThirdPanel").append("<div id='pensionProcessThirdPanelHeading' class='panel-heading' />");
 $("#pensionProcessThirdPanelHeading").append("<h4 id='pensionProcessThirdHeader1' class='panel-title' />");
 $("#pensionProcessThirdHeader1").append("<center>List of Employee(Pension Locked)</center>");
 $("#pensionProcessListThirdPanel").append("<div id='pensionProcessThirdcollapseOne3' class='panel-collapse collapse in' />");
 $("#pensionProcessThirdcollapseOne3").append("<div id='pensionProcessThirdlistpanelMainBody' class = 'panel-body' />");
 $("#pensionProcessThirdlistpanelMainBody").append("<div id='pensionProcessThirdlistpanelRow' class='row' />");
 
 $("#pensionProcessMainDiv").append("<div id='pensionProcesspanelbutton'  />");
 $("#pensionProcesspanelbutton").append("<div  class='col-xs-3' />\n\
 <div class='col-xs-2'><button type='button'  id='process'value='process' style='width:100px;'class='btn btn-warning pull-right '  onclick='pensionProcessFunction()'>PROCESS</button></div>\n\
 <div class='col-xs-2'><button type='button'  style='width:100px;' onclick='pensionUnProcessFunction()' class='btn btn-warning pull-left mr5' >UNPROCESS</button></div>");
 //viewallpensionNotProcessEmployee('pensionProcessFirstlistpanelRow', startDate, billNo, employeecode);
 // viewallpensionProcessEmployee('pensionProcessSecondlistpanelRow', startDate, billNo, employeecode);
 //  viewallpensionLockProcessEmployee('pensionProcessThirdlistpanelRow', startDate, billNo, employeecode);
 
 }*/




//function moveUncheckData()
//{
//    var unproclist = [];
//
//    $('#pensionProcessedTable tr input[type="checkbox"][name="case"]:checked').each(function(i) {
//        var row1 = $(this).closest('tr');
//        unproclist.push({
//            employeecode1: row1.find('td:eq(1)').text(),
//            employeeName1: row1.find('td:eq(2)').text(),
//            DDO1: row1.find('td:eq(3)').text(),
//            location1: row1.find('td:eq(4)').text(),
//            designation1: row1.find('td:eq(5)').text()
//
//        });
//        $(this).closest('tr').remove();
//    });
//    for (var j = 0; j < unproclist.length; j++) {
//        $("#pensionNotProcessedTableBody").append("<tr style='cursor:pointer;' >"
//                + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
//                + "<td style='cursor:pointer;'>" + unproclist[j].employeecode1 + "</td>"
//                + "<td style='cursor:pointer;'>" + unproclist[j].employeeName1 + "</td>"
//                + "<td style='cursor:pointer;'>" + unproclist[j].DDO1 + "</td>"
//                + "<td style='cursor:pointer;'>" + unproclist[j].location1 + "</td>"
//                + "<td style='cursor:pointer;'>" + unproclist[j].designation1 + "</td></tr>");
//    }
//
//}
//
//function moveCheckData()
//{
//    var rolesList = [];
//
//    $('#pensionNotProcessedTable tr input[type="checkbox"][name="case"]:checked').each(function(i) {
//        var row = $(this).closest('tr');
//
//        rolesList.push({
//            employeecode: row.find('td:eq(2)').text(),
//            employeeName: row.find('td:eq(3)').text(),
//            DDO: row.find('td:eq(4)').text(),
//            location: row.find('td:eq(5)').text(),
//            designation: row.find('td:eq(6)').text(),
//            //sno: row.find('td:eq(6)').text()
//        });
//        $(this).closest('tr').remove();
//    });
//
//    $("#selectall").removeAttr("checked");
//    var sno = 0;
//    var rolesList1 = [];
//    rolesList1 = JSON.stringify(rolesList);
//    rolesList1 = JSON.parse(rolesList1);
//    for (var i = 0; i < rolesList1.length; i++) {
//        sno++;
//        $("#pensionProcessedTableBody").append("<tr style='cursor:pointer;' >"
//                + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
//                //+ "<td>" + sno + "</td>"
//                + "<td style='cursor:pointer;'>" + rolesList1[i].employeecode + "</td>"
//                + "<td style='cursor:pointer;'>" + rolesList1[i].employeeName + "</td>"
//                + "<td style='cursor:pointer;'>" + rolesList1[i].DDO + "</td>"
//                + "<td style='cursor:pointer;'>" + rolesList1[i].location + "</td>"
//                // + "<td style='cursor:pointer;'>" + rolesList1[i].designation + "</td>"
//                + "<td style='cursor:pointer;'>" + rolesList1[i].designation + "</td></tr>");
//
//
//    }
////      $('#attendancenotmarkTable').append("</table>");
//    //$('#attendancenotmarkTable').dataTable();
//
//    $("#pensionProcessedTable thead tr th:first input:checkbox").change(function() {
//        $("#pensionProcessedTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
//    });
//    $("#pensionProcessedTable tbody tr td:first-child input:checkbox").change(function() {
//        var tot = $(".case").length;
//
//        var tot_checked = $(".case:checked").length;
//
//        if (tot != tot_checked) {
//            $("#selectall").prop('checked', false);
//        }
//    });
//
//    if (rolesList.length == 0)
//    {
//
//        var rolesList2 = [];
//
//        $('#pensionProcessedTable tr input[type="checkbox"][name="case"]:checked').each(function(i) {
//            var row1 = $(this).closest('tr');
//            rolesList2.push({
//                employeecode: row1.find('td:eq(2)').text(),
//                employeeName: row1.find('td:eq(3)').text(),
//                DDO: row1.find('td:eq(4)').text(),
//                location: row1.find('td:eq(5)').text(),
//                designation: row1.find('td:eq(6)').text(),
//                //salaryType: row1.find('td:eq(6)').text()
//            });
//            $(this).closest('tr').remove();
//        });
//        var pensionJson = {};
//        pensionJson["pensionList"] = rolesList2;
//        pensionJson["employeecode"] = $("#empcode").val();
//        pensionJson["employeeName"] = $("#empname").val();
//        pensionJson["designation"] = $("#designation").val();
//        pensionJson["grade"] = $("#grade").val();
//        pensionJson["sortBy"] = $("#sortby").val();
//        pensionJson["billNo"] = $("#billno").val();
//        pensionJson["dated"] = $("#date").val();
//        pensionJson["month"] = $("#month").val();
//        pensionJson["year"] = $("#year").val();
//        pensionJson["department"] = $("#department").val();
//        pensionJson = JSON.stringify(pensionJson);
//        ////alert(pensionJson);
//
//        $.post(server_base_url + "pension/transaction/SaveProcessPension", {
//            pensionJson: pensionJson
//
//        }).done(function(data) {
//            //////alert(data);
//            if (data == fail) {
//                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
//                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
//            } else if (data == unauthorized) {
//                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
//                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
//            } else if (data == invalidSession) {
//                callSessionTimeout();
//            } else if (data == statusException) {
//                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
//                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
//            } else {
//                //displayLargeSuccessMessages("pregsuccessBefore", "" + successMessage + "<br /><br />");
//                //displaySuccessMessages("pregresssuccessBefore","" + successMessage, "" + "<br /><br />");
//                displaySuccessMessages("pregsuccessBefore", "Successfully saved");
//                //  viewReDddoList('listpanelRow');
//                resetPensionData();
//                //clear
//            }
//
//        });
//    }
//
//
//}
//function moveCheckData1()
//{
//    var rolesList = [];
//
//    $('#pensionProcessedTable tr input[type="checkbox"][name="case"]:checked').each(function(i) {
//        var row = $(this).closest('tr');
//
//        rolesList.push({
//            employeecode: row.find('td:eq(1)').text(),
//            employeeName: row.find('td:eq(2)').text(),
//            DDO: row.find('td:eq(3)').text(),
//            location: row.find('td:eq(4)').text(),
//            designation: row.find('td:eq(5)').text(),
//            //sno: row.find('td:eq(6)').text()
//        });
//        $(this).closest('tr').remove();
//    });
//
//    $("#selectall").removeAttr("checked");
//    var sno = 0;
//    var rolesList1 = [];
//    rolesList1 = JSON.stringify(rolesList);
//    rolesList1 = JSON.parse(rolesList1);
//    for (var i = 0; i < rolesList1.length; i++) {
//        sno++;
//        $("#pensionlockmarkTableBody").append("<tr style='cursor:pointer;' >"
//                + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
//                //+ "<td>" + sno + "</td>"
//                + "<td style='cursor:pointer;'>" + rolesList1[i].employeecode + "</td>"
//                + "<td style='cursor:pointer;'>" + rolesList1[i].employeeName + "</td>"
//                + "<td style='cursor:pointer;'>" + rolesList1[i].DDO + "</td>"
//                + "<td style='cursor:pointer;'>" + rolesList1[i].location + "</td>"
//                // + "<td style='cursor:pointer;'>" + rolesList1[i].designation + "</td>"
//                + "<td style='cursor:pointer;'>" + rolesList1[i].designation + "</td></tr>");
//
//
//    }
////      $('#attendancenotmarkTable').append("</table>");
//    //$('#attendancenotmarkTable').dataTable();
//
//    $("#pensionlockmarkTable thead tr th:first input:checkbox").change(function() {
//        $("#pensionlockmarkTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
//    });
//    $("#pensionlockmarkTable tbody tr td:first-child input:checkbox").change(function() {
//        var tot = $(".case").length;
//
//        var tot_checked = $(".case:checked").length;
//
//        if (tot != tot_checked) {
//            $("#selectall").prop('checked', false);
//        }
//    });
//
//    if (rolesList.length == 0)
//    {
//
//        var rolesList2 = [];
//
//        $('#pensionlockmarkTable tr input[type="checkbox"][name="case"]:checked').each(function(i) {
//            var row1 = $(this).closest('tr');
//            rolesList2.push({
//                employeecode: row1.find('td:eq(1)').text(),
//                employeeName: row1.find('td:eq(2)').text(),
//                DDO: row1.find('td:eq(3)').text(),
//                location: row1.find('td:eq(4)').text(),
//                designation: row1.find('td:eq(5)').text(),
//                //salaryType: row1.find('td:eq(6)').text()
//            });
//            $(this).closest('tr').remove();
//        });
////        var pensionJson = {};
////        pensionJson["pensionList"] = rolesList2;
////        pensionJson["employeecode"] = $("#empcode").val();
////        pensionJson["employeeName"] = $("#empname").val();
////        pensionJson["designation"] = $("#designation").val();
////        pensionJson["grade"] = $("#grade").val();
////        pensionJson["sortBy"] = $("#sortby").val();
////        pensionJson["billNo"] = $("#billno").val();
////        pensionJson["dated"] = $("#date").val();
////        pensionJson["month"] = $("#month").val();
////        pensionJson["year"] = $("#year").val();
////        pensionJson["department"] = $("#department").val();
////        pensionJson = JSON.stringify(pensionJson);
////        ////alert(pensionJson);
////
////        $.post(server_base_url + "pension/transaction/SaveProcessPension", {
////            pensionJson: pensionJson
////
////        }).done(function (data) {
////            //////alert(data);
////            if (data == fail) {
////                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
////                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
////            } else if (data == unauthorized) {
////                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
////                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
////            } else if (data == invalidSession) {
////                callSessionTimeout();
////            } else if (data == statusException) {
////                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
////                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
////            } else {
////                //displayLargeSuccessMessages("pregsuccessBefore", "" + successMessage + "<br /><br />");
////                //displaySuccessMessages("pregresssuccessBefore","" + successMessage, "" + "<br /><br />");
////                displaySuccessMessages("pregsuccessBefore", "Successfully saved");
////                //  viewReDddoList('listpanelRow');
////                resetPensionData();
////                //clear
////            }
////
////        });
//    }
//
//
//}
