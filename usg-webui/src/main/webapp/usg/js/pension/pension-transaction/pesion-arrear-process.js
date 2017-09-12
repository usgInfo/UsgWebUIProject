/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayPensionArearProcess() {
    createPensionArrearProcessForm();
}
function createPensionArrearProcessForm() {
    $("#dashboardTitleMainDiv").text("").append("Pension");


    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionTransactions()">Pension Transaction>></a></label><a href="javascript:displayPensionArearProcess()"><label>Pension Arrear Process</label>');
    $("#dashboardBodyMainDiv").text("").append("<div id='PensionarearprocessMainDiv' class='row' />");
    $("#PensionarearprocessMainDiv").text("").append("<div id='PensionarearprocesscolumnDiv' class='col-lg-12'  style='width:100%;' >");
    $("#PensionarearprocesscolumnDiv").append("<div id='PensionarearprocesspanelDiv' class='panel panel-blue'>");
    $("#PensionarearprocesspanelDiv").append("<div id='PensionarearprocesspanelHeadingDiv' class='panel-heading'>");
    $("#PensionarearprocesspanelHeadingDiv").append("<h4 id='PensionarearprocessHeader' class='panel-title' />");
    $("#PensionarearprocessHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Pension Arrear Process</center>");
    $("#PensionarearprocesspanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='PensionarearprocesspanelBodyDiv' class='panel-body pan'>");

    $("#PensionarearprocesspanelBodyDiv").append("<div id='PensionarearprocessRowPanel' class='row'>");
    $("#PensionarearprocessRowPanel").append("<div id='pregsuccessBefore'/>");


    $("#PensionarearprocessRowPanel").append("<div id='FieldGroup' class='form-group' />");

    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "", "empcode", "Enter Employee Code"));
    $("#Row1Col2").append(getLabel_InputWithSpan("Manual Employee Code", "", "mempcode", "Enter Employee Name"));

    getTwoColumnInRow("FieldGroup", "Row2", "Row1Co21", "Row1Co22");
    $("#Row1Co21").append(getLabel_InputWithSpan("Employee Name", "", "empname", "Enter Employee Name"));
    $("#Row1Co22").append(getLabel("Department", "") + "" + getDropDown("department"));

    getTwoColumnInRow("FieldGroup", "Row3", "Row1Co31", "Row1Co32");
    $("#Row1Co31").append(getLabel("Designation", "") + "" + getDropDown("designation"));
    $("#Row1Co32").append(getLabel("Pay Month", "required") + "" + getDropDown("paymonth"));

    getTwoColumnInRow("FieldGroup", "Row4", "Row1Co41", "Row1Co42");
    $("#Row1Co41").append(getLabel_InputWithSpan("Pension Order Number", "", "pensionordernumber", "Pension Order Number"));
    $("#Row1Co42").append(getLabel("Pay Year", "required") + "" + getDropDown("payyear"));

    getTwoColumnInRow("FieldGroup", "Row5", "Row1Co51", "Row1Co52");
    $("#Row1Co51").append(getLabel("Bill No", "required") + "" + getDropDown("billno"));
    $("#Row1Co52").append(getLabel_InputWithSpan("Bill Date", "", "billdate", "Bill Date", "onkeypress='return false'"));
    $("#billdate").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    });

    getTwoColumnInRow("FieldGroup", "Row6", "Row1Co61", "Row1Co62");
    $("#Row1Co61").append(getLabel_InputWithSpan("From Date", "required", "fromdate", "From Date", "onkeypress='return false'"));
    $("#Row1Co62").append(getLabel_InputWithSpan("To Date", "required", "todate", "To date", "onkeypress='return false'"));
    $("#fromdate").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    });
    $("#todate").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    });

    getTwoColumnInRow("FieldGroup", "Row7", "Row1Co71", "Row1Co72");
    $("#Row1Co71").append(getLabel("Pay Mode", "") + "" + getDropDown("paymode"));
    $("#Row1Co72").append(getLabel("Remarks", "") + "" + '<textarea class="form-control" type="text" id="remarks" placeholder="Remarks" value=""  rows="1"></textarea>');
    $("#paymonth").append("<option value='0' selected>--Select Month--</option><option  value='1'>Janaury</option> <option value='2'>February</option> <option value='3'>March</option> <option value='4'>April</option> <option value='5'>May</option> <option value='6'>June</option> <option value='7'>July</option> <option value='8'>August</option> <option value='9'>September</option> <option value='10'>October</option> <option value='11'>November</option> <option value='12'>December</option>");
    $("#paymode").append("<option value='0' selected>--Select Month--</option><option value='Bank'>Bank</option><option value='Draft'>Draft</option><option value='Cheque'>Cheque</option>");
    $("#FieldGroup").append("<div id='panelRow7' class='row' />");
    $("#panelRow7").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='fetchAllPensionProcessEmployee()'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetPensionArrear()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
    fetchallPensionProcessArearDepartment();
    $("#billno").prop("disabled", true);
    fetchallPensionProcessArearDesignation();
    //fetchallPensionProcessGrade();
    //fetchallPensionProcessemployeeCode();
    //fetchallPensionProcessBillNo();
    processPensionArearyear();



}

function fetchAllPensionProcessEmployee()
{
    var employeeCode = $("#empcode").val();
    var manualEmployeeCode = $("#mempcode").val();
    var employeeName = $("#empname").val();
    var department = $("#department").val();
    var designation = $("#designation").val();
    var payMonth = $("#paymonth").val();
    var pensionOrderNumber = $("#pensionordernumber").val();
    var payYear = $("#payyear").val();
    var billNumber = $("#billno").val();
    var billDate = $("#billdate").val();
    var fromDate = $("#fromdate").val();
    var toDate = $("#todate").val();
    var payMode = $("#paymode").val();
    var remarks = $("#remarks").val();

    $('#pregsuccessBefore').text("");
    if (payMonth == "" || payMonth == "undefined" || payMonth == null || payYear == "" || payYear == "undefined" || payYear == null || fromDate == "" || fromDate == "undefined" || fromDate == null || toDate == "" || toDate == "undefined" || toDate == null)
    {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");

        return false;

    }

    $("#PensionarearprocesscolumnDiv").append("<div id='tableHeaderForList2'/>");

    $("#tableHeaderForList2").text("").append("<div id='pensionArrearNotProcessedListPanel' class='panel panel-blue' />");
    $("#pensionArrearNotProcessedListPanel").append("<div id='pensionArrearNotProcessedListPanelHeading1' class='panel-heading' />");
    $("#pensionArrearNotProcessedListPanelHeading1").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Employee(Arrear Not Processed)</center>");

    $("#pensionArrearNotProcessedListPanel").append("<div id='collapseOne8' class='panel-collapse collapse in' />");
    $("#collapseOne8").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#relationListPanel").append("<div id='pregresssuccessBefore'>");
    $("#listpanelRow").append("<div id='sectionlistpanelRow' class='table-responsive' />");

    $("#sectionlistpanelRow").text("").append("<div id='displaySectionDiv' class = 'panel panel-primary-head'></div>");
    $("#displaySectionDiv").append("<table id='pensionArrearNotProcessedTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");

    $("#pensionArrearNotProcessedTable").append("<thead class=''><tr>"
            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
            + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>S.No.</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Designation</th>"
            + "</tr></thead>");
    var condition = "YES";
    $.get(server_base_url + "pension/transaction/PensionEmployeeArrearSearch", {
        //$.get(server_base_url + "pension/master/PensionEmploy/ViewList",{
        condition: condition

    }).done(function (pdata) {
        // alert("pdata" + pdata);
        // alert(JSON.stringify(pdata));
        if (pdata == null || pdata == "" || pdata == 500 || pdata == undefined)
        {
            // alert(NoDataFound);
            displayLargeErrorMessages("pregresssuccessBefore", "" + NoDataFound + "<br /><br />");
        } else {
            // alert("hi");
            var checkcondition = false;
            $.get(server_base_url + "pension/transaction/PensionArrearSearch", {
                payMonth: $("#paymonth").val(),
                payYear: $("#payyear").val(),
                fromDate: $("#fromdate").val(),
                toDate: $("#todate").val()
            }).done(function (data) {

                var sno = 0;
                $("#pensionArrearNotProcessedTable").append("<tbody id='pensionArrearNotProcessedTableBody' class='table-striped table-bordered' />");
                for (var i = pdata.length - 1; i >= 0; i--) {
                    //alert("data" + data);
                    if (data == "nodata" || data == null || data == "null")
                    {
                        sno++;
                        $("#pensionArrearNotProcessedTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].employeecode + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].employeeName + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].DDO + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].location + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].designation + "</td></tr>");
                    } else
                    {

                        for (var k = data.length - 1; k >= 0; k--) {
                            for (var j = 0; j < data[k].pensionArrearList.length; j++)
                            {
                                if (pdata[i].employeeCode != data[k].pensionArrearList[j].employeeCode)
                                {
                                    checkcondition = true;
                                    break;
                                }
                            }
                        }
                        if (checkcondition)
                        {
                            $("#pensionArrearNotProcessedTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].employeeCode + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].employeeName + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].DDO + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].location + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].designation + "</td></tr>");

                        }
                    }
                }
            });
            $("#pensionArrearNotProcessedTable thead tr th:first input:checkbox").change(function () {
                $("#pensionArrearNotProcessedTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
            $("#pensionArrearNotProcessedTable tbody tr td:first-child input:checkbox").change(function () {
                var tot = $(".case").length;

                var tot_checked = $(".case:checked").length;

                if (tot != tot_checked) {
                    $("#selectall").prop('checked', false);
                }
            });
            $('#pensionArrearNotProcessedTable').append("</table>");
//        $('#attendancenotmarkTable').dataTable();


        }


    });


    $("#PensionarearprocesscolumnDiv").append("<div id='tableHeaderForList8'/>");
    $("#tableHeaderForList8").text("").append("<div id='ButtonId1' class='form-group' />");
    $("#ButtonId1").append("<div id='Button1'/>");
    $("#Button1").append("<center><button class='btn btn-success mr5 btn' onclick='moveCheckedDataArrear()'>Process</button></center>");
    $("#Button1").append("");

    pensionArrearProcessedtable();
    viewEmpPensionArrearList();
}
function pensionArrearProcessedtable()
{
    $("#PensionarearprocesscolumnDiv").append("<div id='tableHeaderForList'/>");
    $("#tableHeaderForList").text("").append("<div id='pensionArrearProcessedListPanel' class='panel panel-blue' />");
    $("#pensionArrearProcessedListPanel").append("<div id='pensionArrearProcessedListPanelHeading' class='panel-heading' />");
    $("#pensionArrearProcessedListPanelHeading").append("<h4 id='firstHeader2' class='panel-title' />");
    $("#firstHeader2").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Employee(Arrear Processed)</center>");

    $("#pensionArrearProcessedListPanel").append("<div id='collapseOne4' class='panel-collapse collapse in' />");
    $("#collapseOne4").append("<div id='listpanelMainBody1' class = 'panel-body' />");
    $("#listpanelMainBody1").append("<div id='listpanelRow1' class='row' />");
    $("#listpanelMainBody1").append("<div id='pregresssuccessBefore1'>");
    $("#listpanelRow1").append("<div id='sectionlistpanelRow1' class='table-responsive' />");

    $("#sectionlistpanelRow1").text("").append("<div id='displaySectionDiv1' class = 'panel panel-primary-head'></div>");
    $("#displaySectionDiv1").append("<table id='pensionArrearProcessedTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");

    $("#pensionArrearProcessedTable").append("<thead class=''><tr>"
            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
            + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>S.No.</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Designation</th>"
            + "</tr></thead>");
    $("#pensionArrearProcessedTable").append("<tbody id='pensionArrearProcessedTableBody' class='table-striped table-bordered' />");

    $("#PensionarearprocesscolumnDiv").append("<div id='tableHeaderForList4'/>");
    $("#tableHeaderForList4").text("").append("<div id='ButtonId' class='form-group' />");
    $("#ButtonId").append("<div id='Button'/>");
    $("#Button").append("<center><button class='btn btn-success mr5 btn' onclick='moveCheckedDataArrear1()'>Process</button>&nbsp&nbsp&nbsp<button class='btn btn-warning mr5'  style='padding-left: 2px;' onclick='moveUncheckedDataArrear()'>UnProcess</button></center>");
    $("#Button").append("");


}

function viewEmpPensionArrearList()
{
    var payMonth = $("#paymonth").val();
    var payYear = $("#payyear").val();
    var fromDate = $("#fromdate").val();
    var toDate = $("#todate").val();
    $("#PensionarearprocesscolumnDiv").append("<div id='tableHeaderForList1'/>");

    $("#tableHeaderForList1").text("").append("<div id='pensionArrearLockedListPanel3' class='panel panel-blue' />");
    $("#pensionArrearLockedListPanel3").append("<div id='pensionArrearLockedListPanel3Heading' class='panel-heading' />");
    $("#pensionArrearLockedListPanel3Heading").append("<h4 id='firstHeader3' class='panel-title' />");
    $("#firstHeader3").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Employee(Arrear Locked)</center>");

    $("#pensionArrearLockedListPanel3").append("<div id='collapseOne5' class='panel-collapse collapse in' />");
    $("#collapseOne5").append("<div id='listpanelMainBody2' class = 'panel-body' />");
    $("#listpanelMainBody2").append("<div id='listpanelRow2' class='row' />");
    $("#listpanelMainBody2").append("<div id='pregresssuccessBefore2'>");
    $("#listpanelRow2").append("<div id='sectionlistpanelRow2' class='table-responsive' />");

    $("#sectionlistpanelRow2").text("").append("<div id='displaySectionDiv2' class = 'panel panel-primary-head'></div>");
    $("#displaySectionDiv2").append("<table id='pensionArrearLockTable' style='border-bottom:1px solid #ddd' class='table table-striped table-bordered table-hover'></table>");


    $("#pensionArrearLockTable").append("<thead class=''><tr>"
            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
            //   + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>S.No.</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Code</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Designation</th>"
            + "</tr></thead>");
    $("#pensionArrearLockTable").append("<tbody id='pensionArrearLockTableBody' class='table-striped table-bordered' />");
}

function moveUncheckedDataArrear()
{
    var unproclist = [];

    $('#pensionArrearProcessedTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
        var row1 = $(this).closest('tr');
        unproclist.push({
            employeecode1: row1.find('td:eq(1)').text(),
            employeeName1: row1.find('td:eq(2)').text(),
            DDO1: row1.find('td:eq(3)').text(),
            location1: row1.find('td:eq(4)').text(),
            designation1: row1.find('td:eq(5)').text()

        });
        $(this).closest('tr').remove();
    });
    var pensionArrearJson1 = {};
        pensionArrearJson1["pensionArrearList"] = rolesList2;
        pensionArrearJson1["employeeCode"] = $("#empcode").val();
        pensionArrearJson1["manualEmployeeCode"] = $("#mempcode").val();
        pensionArrearJson1["employeeName"] = $("#empname").val();
        pensionArrearJson1["department"] = $("#department").val();
        pensionArrearJson1["designation"] = $("#designation").val();
        pensionArrearJson1["payMonth"] = $("#paymonth").val();
        pensionArrearJson1["pensionOrderNumber"] = $("#pensionordernumber").val();
        pensionArrearJson1["payYear"] = $("#payyear").val();
        pensionArrearJson1["billNumber"] = $("#billno").val();
        pensionArrearJson1["billDate"] = $("#billdate").val();
        pensionArrearJson1["fromDate"] = $("#fromdate").val();
        pensionArrearJson1["toDate"] = $("#todate").val();
        pensionArrearJson1["payMode"] = $("#paymode").val();
        pensionArrearJson1["remarks"] = $("#remarks").val();
        pensionArrearJson1 = JSON.stringify(pensionArrearJson1);
        alert("pensionArrearJson1" + pensionArrearJson1);

        $.post(server_base_url + "pension/transaction/SavePensionNotProcessArrear", {
            pensionArrearJson1: pensionArrearJson1

        }).done(function (data) {
            alert("data" +data);
            if (data == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else {
                //displayLargeSuccessMessages("pregsuccessBefore", "" + successMessage + "<br /><br />");
                //displaySuccessMessages("pregresssuccessBefore","" + successMessage, "" + "<br /><br />");
                displaySuccessMessages("pregsuccessBefore", "Successfully saved");
                //  viewReDddoList('listpanelRow');
                resetPensionArrear();
                //clear
            }

        });
    for (var j = 0; j < unproclist.length; j++) {
        $("#pensionArrearNotProcessedTableBody").append("<tr style='cursor:pointer;' >"
                + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                + "<td style='cursor:pointer;'>" + unproclist[j].employeecode1 + "</td>"
                + "<td style='cursor:pointer;'>" + unproclist[j].employeeName1 + "</td>"
                + "<td style='cursor:pointer;'>" + unproclist[j].DDO1 + "</td>"
                + "<td style='cursor:pointer;'>" + unproclist[j].location1 + "</td>"
                + "<td style='cursor:pointer;'>" + unproclist[j].designation1 + "</td></tr>");
    }

}
function moveCheckedDataArrear()
{
    var rolesList = [];

    $('#pensionArrearNotProcessedTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
        var row = $(this).closest('tr');

        rolesList.push({
            employeecode: row.find('td:eq(1)').text(),
            employeeName: row.find('td:eq(2)').text(),
            DDO: row.find('td:eq(3)').text(),
            location: row.find('td:eq(4)').text(),
            designation: row.find('td:eq(5)').text()
            //sno: row.find('td:eq(6)').text()
        });
        $(this).closest('tr').remove();
    });

    $("#selectall").removeAttr("checked");
    var sno = 0;
    var rolesList1 = [];
    rolesList1 = JSON.stringify(rolesList);
    rolesList1 = JSON.parse(rolesList1);
    for (var i = 0; i < rolesList1.length; i++) {
        sno++;
        $("#pensionArrearProcessedTableBody").append("<tr style='cursor:pointer;' >"
                + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                //+ "<td>" + sno + "</td>"
                + "<td style='cursor:pointer;'>" + rolesList1[i].employeecode + "</td>"
                + "<td style='cursor:pointer;'>" + rolesList1[i].employeeName + "</td>"
                + "<td style='cursor:pointer;'>" + rolesList1[i].DDO + "</td>"
                + "<td style='cursor:pointer;'>" + rolesList1[i].location + "</td>"
                // + "<td style='cursor:pointer;'>" + rolesList1[i].designation + "</td>"
                + "<td style='cursor:pointer;'>" + rolesList1[i].designation + "</td></tr>");


    }
//      $('#attendancenotmarkTable').append("</table>");
    //$('#attendancenotmarkTable').dataTable();

    $("#pensionArrearProcessedTable thead tr th:first input:checkbox").change(function () {
        $("#pensionArrearProcessedTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
    });
    $("#pensionArrearProcessedTable tbody tr td:first-child input:checkbox").change(function () {
        var tot = $(".case").length;

        var tot_checked = $(".case:checked").length;

        if (tot != tot_checked) {
            $("#selectall").prop('checked', false);
        }
    });
alert(rolesList.length);
//    if (rolesList.length == 0)
//    {
        alert("hi");
        var rolesList2 = [];

        $('#pensionArrearProcessedTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
            var row1 = $(this).closest('tr');
            rolesList2.push({
                employeecode: row1.find('td:eq(1)').text(),
                employeeName: row1.find('td:eq(2)').text(),
                DDO: row1.find('td:eq(3)').text(),
                location: row1.find('td:eq(4)').text(),
                designation: row1.find('td:eq(5)').text()
                //salaryType: row1.find('td:eq(6)').text()
            });
            $(this).closest('tr').remove();
        });
        var pensionArrearJson = {};
        pensionArrearJson["pensionArrearList"] = rolesList2;
        pensionArrearJson["employeeCode"] = $("#empcode").val();
        pensionArrearJson["manualEmployeeCode"] = $("#mempcode").val();
        pensionArrearJson["employeeName"] = $("#empname").val();
        pensionArrearJson["department"] = $("#department").val();
        pensionArrearJson["designation"] = $("#designation").val();
        pensionArrearJson["payMonth"] = $("#paymonth").val();
        pensionArrearJson["pensionOrderNumber"] = $("#pensionordernumber").val();
        pensionArrearJson["payYear"] = $("#payyear").val();
        pensionArrearJson["billNumber"] = $("#billno").val();
        pensionArrearJson["billDate"] = $("#billdate").val();
        pensionArrearJson["fromDate"] = $("#fromdate").val();
        pensionArrearJson["toDate"] = $("#todate").val();
        pensionArrearJson["payMode"] = $("#paymode").val();
        pensionArrearJson["remarks"] = $("#remarks").val();
        pensionArrearJson = JSON.stringify(pensionArrearJson);
        alert("pensionArrearJson" + pensionArrearJson);

        $.post(server_base_url + "pension/transaction/SavePensionArrear", {
            pensionArrearJson: pensionArrearJson

        }).done(function (data) {
            alert("data" +data);
            if (data == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else {
                //displayLargeSuccessMessages("pregsuccessBefore", "" + successMessage + "<br /><br />");
                //displaySuccessMessages("pregresssuccessBefore","" + successMessage, "" + "<br /><br />");
                displaySuccessMessages("pregsuccessBefore", "Successfully saved");
                //  viewReDddoList('listpanelRow');
                resetPensionArrear();
                //clear
            }

        });
//    }


}
function moveCheckedDataArrear1()
{
    var rolesList = [];

    $('#pensionArrearProcessedTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
        var row = $(this).closest('tr');

        rolesList.push({
            employeecode: row.find('td:eq(1)').text(),
            employeeName: row.find('td:eq(2)').text(),
            DDO: row.find('td:eq(3)').text(),
            location: row.find('td:eq(4)').text(),
            designation: row.find('td:eq(5)').text(),
            //sno: row.find('td:eq(6)').text()
        });
        $(this).closest('tr').remove();
    });

    $("#selectall").removeAttr("checked");
    var sno = 0;
    var rolesList1 = [];
    rolesList1 = JSON.stringify(rolesList);
    rolesList1 = JSON.parse(rolesList1);
    for (var i = 0; i < rolesList1.length; i++) {
        sno++;
        $("#pensionArrearLockTableBody").append("<tr style='cursor:pointer;' >"
                + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                //+ "<td>" + sno + "</td>"
                + "<td style='cursor:pointer;'>" + rolesList1[i].employeecode + "</td>"
                + "<td style='cursor:pointer;'>" + rolesList1[i].employeeName + "</td>"
                + "<td style='cursor:pointer;'>" + rolesList1[i].DDO + "</td>"
                + "<td style='cursor:pointer;'>" + rolesList1[i].location + "</td>"
                // + "<td style='cursor:pointer;'>" + rolesList1[i].designation + "</td>"
                + "<td style='cursor:pointer;'>" + rolesList1[i].designation + "</td></tr>");


    }
//      $('#attendancenotmarkTable').append("</table>");
    //$('#attendancenotmarkTable').dataTable();

    $("#pensionArrearLockTable thead tr th:first input:checkbox").change(function () {
        $("#pensionArrearLockTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
    });
    $("#pensionArrearLockTable tbody tr td:first-child input:checkbox").change(function () {
        var tot = $(".case").length;

        var tot_checked = $(".case:checked").length;

        if (tot != tot_checked) {
            $("#selectall").prop('checked', false);
        }
    });

    if (rolesList.length == 0)
    {

        var rolesList2 = [];

        $('#pensionArrearLockTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
            var row1 = $(this).closest('tr');
            rolesList2.push({
                employeecode: row1.find('td:eq(1)').text(),
                employeeName: row1.find('td:eq(2)').text(),
                DDO: row1.find('td:eq(3)').text(),
                location: row1.find('td:eq(4)').text(),
                designation: row1.find('td:eq(5)').text(),
                //salaryType: row1.find('td:eq(6)').text()
            });
            $(this).closest('tr').remove();
        });

    }


}
function processPensionArearyear(name) {
    $('#payyear').text("").append("<option value='0' class='form-control'  selected disabled >-----------select year---------</option>");
    for (i = new Date().getFullYear(); i > 1900; i--)
    {
        if (name == i) {
            $('#payyear').append($('<option selected/>').val(i).html(i));
        } else {
            $('#payyear').append($('<option />').val(i).html(i));
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

function fetchallPensionProcessArearDepartment(name) {
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

function fetchallPensionProcessArearDesignation(name) {
    $("#designation").append("<option value = '0' selected disabled> ----Select Designation----</option>");
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
function resetPensionArrear()
{
    $('#empcode').val("");
    $('#mempcode').val("");
    $('#empname').val("");
    $('#department').val("");
    $('#designation').val("");
    $('#paymonth').val("");
    $('#pensionordernumber').val("");
    $('#payyear').val("");
    $('#billno').val("");
    $('#billdate').val("");
    $('#fromdate').val("");
    $('#todate').val("");
    $('#paymode').val("");
    $('#remarks').val("");
}
