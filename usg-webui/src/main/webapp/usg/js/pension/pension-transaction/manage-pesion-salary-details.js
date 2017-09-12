/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayManagepesionSalayDetailsPage(divId) {

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label> >> <label><a href="javascript:pensionTransactions()">Pension Transaction</a></label> >> <label>Manage Pension Salary Details</label>');


    //$("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionMasters()">Pension  Transactions</a></label> >><label>Pension Salary Details</label>');
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Manage Pension Salary Details</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<div id='pregsuccessBefore'  ></div>");
    $("#panelRow").append("<div id='pensionSalaryMessageDiv'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "required", "employeeCode", "Enter Employee Code", ""));
    $("#Row1Col1").append("<span class='input-group-btn'><button class='btn btn-info btn-flat' style='align-top:4px' onclick='getEmpByCode()' type='button'>Search</button></span>");
    $("#Row1Col2").append(getLabel_InputWithSpan("Employee Name", "required", "employeeName", "Enter Employee Name", ""));
    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel("To Month", "required") + "" + getDropDown("toMonth"));
    $("#toMonth").append("<option value='' selected>--Select Month--</option><option value='Jan'>Jan</option><option value='Feb'>Feb</option> <option value='Mar'>Mar</option> <option value='Apr'>Apr</option> <option value='May'>May</option> <option value='June'>June</option> <option value='July'>July</option> <option value='Aug'>Aug</option> <option value='Sep'>Sep</option> <option value='Oct'>Oct</option> <option value='Nov'>Nov</option> <option value='Dec'>Dec</option>");
    $("#Row2Col2").append(getLabel("To Year", "required") + "" + getDropDown("toYear"));
    salaryPensionyear('toYear');
    $("#FieldGroup").append("<div id='panelRow38' class='row' />");
    $("#panelRow38").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='pensionSalarySave' value='Save' class='btn btn-success bn'  onclick='viewSalaryDetails()'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='pensionSalaryReset' onclick='resetPensionBank()' class='btn btn-warning bn' name='reset' value='reset'>Reset</button></center></div>");
    $("#mainTabMenu").append("<div id='pensionSalaryListPanel' class='panel panel-blue' />");
    $("#pensionSalaryListPanel").append("<div id='pensionSalaryListPanelHeading' class='panel-heading' />");
    $("#pensionSalaryListPanelHeading").append("<h4 id='pensionSalaryfirstHeader1' class='panel-title' />");
    $("#pensionSalaryfirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List Of Salary Details</center>");
    $("#pensionSalaryListPanel").append("<div id='collapseOne89' class='panel-collapse collapse in' />");
    $("#collapseOne89").append("<div id='pensionSalaryPanellistpanelMainBody' class = 'panel-body' />");
    //$("#pensionSalaryPanellistpanelMainBody").append("<div id='pensionSalarylistMessageDiv'  ></div>");
    $("#pensionSalaryPanellistpanelMainBody").append("<div id='pensionSalarylistpanelRow' class='row' />");
    $("#pensionSalarylistpanelRow").append("<div id='pensionSalaryLeftstatuslistpanelRow' class='table-responsive' />");
    //viewPensionEmployee("pensionSalaryLeftstatuslistpanelRow");



}
function validateSalaryDetails() {
    var employeeCode = $("#employeeCode").val();
    var employeeName = $("#employeeName").val();
    var toMonth = $("#toMonth").val();
    var toYear = $("#toYear").val();
    if (employeeCode == "" || employeeCode == null || employeeName == "" || employeeName == null || toMonth == "" || toYear == "") {
        return false;
    } else {
        viewSalaryDetails();
    }
}

function viewSalaryDetails(divId) {
    var employeeName = $("#employeeCode").val();
    var employeeCode = $("#employeeName").val();
    var year = $("#toYear").val();
    var month = $("#toMonth").val();
    var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $("#pensionSalaryLeftstatuslistpanelRow").append("<table id='pensionSalaryListTable' class='table table-striped table-bordered'></table>");
    $("#pensionSalaryListTable").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            //  + "<th class='hidden'><i class='fa'></i>Month</th>"
            // + "<th class='table_col_width'><i class='fa'></i>Month</th>"
            + "<th class='table_col_width'><i class='fa'></i>Month</th>"
            + "<th class='table_col_width'><i class='fa'></i>Year</th>"
            + "<th class='table_col_width'><i class='fa'></i>Basic</th>"
            + "<th class='table_col_width'><i class='fa'></i>GP</th>"
            + "<th class='table_col_width'><i class='fa'></i>DA</th>"
            + "</tr></thead>");
    $("#pensionSalaryListTable").append("<tbody id='pensionSalaryListTableBody' class='table-striped table-bordered' />");
    var sno = 0;
    var index = searchStringInArray(month, monthArr);
    alert(index)
    var newMonth = monthArr[index];
    for (var i = 0; i < 10; i++) {
        newMonth = monthArr[index--];

        if (newMonth == undefined) {
            newMonth = monthArr[monthArr.length - 1];

            year = parseInt(year) - 1;


            $.get(server_base_url + "/pension/Transactions/SalaryDetails/View", {
                employeeName: employeeCode,
                employeeCode: employeeName,
                month: newMonth,
                year: year
            }).done(function (pdata) {


                if (pdata != null) {

                    $("#pensionSalaryListTableBody").append("<tr id='" + pdata[0]._id.$oid + "' class='table_row' >"
                            + "<td>" + ++sno + "</td>"
                            + "<td class='table_row'>" + pdata[0].month + "</td>"
                            + "<td class='table_row'>" + pdata[0].Year + "</td>"
                            + "<td class='table_row'>" + pdata[0].basic + "</td>"
                            + "<td class='table_row'>" + pdata[0].gp + "</td>"
                            + "<td class='table_row'>" + pdata[0].da + "</td></tr>");

                } else if (pdata == null) {
                    $("#pensionSalaryListTableBody").append("<tr  class='table_row' >"
                            + "<td>" + ++sno + "</td>"
                            + "<td class='table_row'>" + newMonth + "</td>"
                            + "<td class='table_row'>" + year + "</td>"
                            + "<td class='table_row'>" + 0.0 + "</td>"
                            + "<td class='table_row'>" + 0.0 + "</td>"
                            + "<td class='table_row'>" + 0.0 + "</td></tr>");
                }
            });

        } else if (newMonth != undefined) {

            $.get(server_base_url + "/pension/Transactions/SalaryDetails/View", {
                employeeName: employeeCode,
                employeeCode: employeeName,
                month: newMonth,
                year: year
            }).done(function (pdata) {

                if (pdata != null) {

                    $("#pensionSalaryListTableBody").append("<tr id='" + pdata[0]._id.$oid + "' class='table_row' >"
                            + "<td>" + ++sno + "</td>"
                            + "<td class='table_row'>" + pdata[0].month + "</td>"
                            + "<td class='table_row'>" + pdata[0].Year + "</td>"
                            + "<td class='table_row'>" + pdata[0].basic + "</td>"
                            + "<td class='table_row'>" + pdata[0].gp + "</td>"
                            + "<td class='table_row'>" + pdata[0].da + "</td></tr>");

                } else if (pdata == null) {
                    $("#pensionSalaryListTableBody").append("<tr  class='table_row' >"
                            + "<td>" + ++sno + "</td>"
                            + "<td class='table_row'>" + newMonth + "</td>"
                            + "<td class='table_row'>" + year + "</td>"
                            + "<td class='table_row'>" + 0.0 + "</td>"
                            + "<td class='table_row'>" + 0.0 + "</td>"
                            + "<td class='table_row'>" + 0.0 + "</td></tr>");
                }
            });

        }
    }

    $('#pensionSalaryLeftstatuslistpanelRow').append("<div class='row' id='tableButtonRow'>");
    $('#tableButtonRow').append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='pensionSalarySave' value='Save' class='btn btn-success bn'  onclick='saveSalaryDetails()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='pensionSalaryReset' onclick='resetPensionSalaryDetails()' class='btn btn-warning bn' name='reset' value='reset'>Reset</button></center></div>");
    $('#pensionSalaryListTable').dataTable();

}


function searchStringInArray(month, monthArr) {
    for (var j = 0; j < monthArr.length; j++) {
        if (monthArr[j].match(month))
            return j;
    }
    return -1;
}



function createPensionSalaryDeatils() {
    $("#dashboardTitleMainDiv").text("").append("Pension");
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>> <label><a href="javascript:pensionTransactions()">Pension Transaction></a></label><a href="javascript:displayManagepesionSalayDetailsPage()"><label>Pension Salary details</label>');
    $("#dashboardBodyMainDiv").text("").append("<div id='pensionsalaryMainDiv' class='row' />");
    $("#pensionsalaryMainDiv").text("").append("<div id='pensionsalarycolumnDiv' class='col-lg-12'  style='width:100%;' >");
    $("#pensionsalarycolumnDiv").append("<div id='pensionsalarypanelDiv' class='panel panel-blue'>");
    $("#pensionsalarypanelDiv").append("<div id='pensionsalarypanelHeadingDiv' class='panel-heading'>");
    $("#pensionsalarypanelHeadingDiv").append("<h4 id='pensionsalaryHeader' class='panel-title' />");
    $("#pensionsalaryHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Pension Salary details</center>");
    $("#pensionsalarypanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='pensionsalarypanelBodyDiv' class='panel-body pan'>");
    $("#pensionsalarypanelBodyDiv").append("<div id='pensionsalaryRowPanel' class='row'>");
    $("#pensionsalaryRowPanel").append("<div id='pregsuccessBefore'/>");
    $("#pensionsalaryRowPanel").append("<div id='FieldGroup' class='form-group' />");
    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "required", "empcode", "Enter Employee Code"));
    $("#Row1Col2").append(getLabel_InputWithSpan("Employee Name", "required", "empname", "Enter Employee Name"));
    getOneColumnInRow("FieldGroup", "Row3", "RowSearch");
    $("#RowSearch").append("<div class='col-md-1'><div class='col-md-4'><button class='btn btn-info btn-flat' style='align-top:4px' onclick='getEmpByCode()' type='button'>Search</button></span>");
    getTwoColumnInRow("FieldGroup", "Row2", "Row1Co21", "Row1Co22");
    $("#Row1Co21").append(getLabel("Month", "required") + "" + getDropDown("month"));
    $("#Row1Co22").append(getLabel("Year", "") + "required" + getDropDown("year"));
    $("#month").append("<option value='0' selected>--Select Month--</option><option value='Jan'>Jan</option><option value='Feb'>Feb</option> <option value='Mar'>Mar</option> <option value='Apr'>Apr</option> <option value='May'>May</option> <option value='June'>June</option> <option value='July'>July</option> <option value='Aug'>Aug</option> <option value='Sep'>Sep</option> <option value='Oct'>Oct</option> <option value='Nov'>Nov</option> <option value='Dec'>Dec</option>");
    $("#FieldGroup").append("<div id='panelRow7' class='row' />");
    $("#panelRow7").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='viewPensionSalaryDetails()'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='javascript(0)' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
}

function salaryPensionyear(name) {
    $('#toYear').text("").append("<option value='0' class='form-control'  selected disabled >-----------select year---------</option>");
    for (var i = new Date().getFullYear(); i > 1900; i--)
    {

        if (name == i) {
            $('#toYear').append($('<option selected/>').val(i).html(i));
        } else {
            $('#toYear').append($('<option />').val(i).html(i));
        }
    }
}
function getEmpByCode() {
    var empcode = $("#empcode").val();
    $.post(server_base_url + "/pension/master/FetchPensionEmployeeBYEmployeeCode", {
        employeeCode: empcode
    }).done(function (pdata) {


        if (pdata == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (pdata == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata == statusException) {

        } else {
            $("#empname").val(pdata[0].employeeName);
        }
    });
}