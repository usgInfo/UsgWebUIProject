/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var exportData;

function displaypageSalaryExport(divid) {
    $("#dashboardTitleMainDiv").text("").append("Payroll Reports");
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> ><label><a href="javascript:displaypageSalaryExport()">Manage Export</label>');
    createSearchForm(divid);
    //displaySalaryTable();

}
function displaySalaryTable() {
    $("#salaryexportsearchMainDivId").append("<div id='salaryexportTableMainDiv'/>");
    $("#salaryexportTableMainDiv").append("<div id='salaryexportMasterTableListPanel' class='panel panel-blue'/>");
    $("#salaryexportMasterTableListPanel").append("<div id='salaryexportMasterTableHeading' class='panel-heading' />");
    $("#salaryexportMasterTableHeading").append("<h4 id='salaryexportMasterTableHeader' class='panel-title' />");
    $("#salaryexportMasterTableHeader").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Employee</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colManageSalary'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#salaryexportMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colManageSalary").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colManageSalary span").hasClass("glyphicon-minus-sign")) {
            $("#colManageSalary").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colManageSalary").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='salaryexportListPanelTableMainDiv' class = 'panel-body' />");
    $("#salaryexportListPanelTableMainDiv").append("<div id='salaryexportListPanelRow' class = 'row' />");
    $("#salaryexportListPanelRow").append("<div  id='tablesuccessBefore'/>");
    $('#salaryexportListPanelTableMainDiv').append('<div class="btn-group mtm mbm"><a href="#" data-toggle="dropdown"   class="btn btn-success btn-sm dropdown-toggle">\n\
     <i class="fa fa-wrench"> Export</a><ul class="dropdown-menu" id="exportDiv">');
    $("#exportDiv").append("<li><a href='javascript:void(0);' onclick='exportsalaryDataintoExcelSheet();'><img src='../../assets/vendors/tableExport/icon/xls.png' width='24px' class='mrx'/>Export  to Excel</a></li>");
    //  $("#exportDiv").append('<li><a href="#" onclick="downloadPDFFile();"><img  src="../../assets/vendors/tableExport/icon/pdf.png" width="24px" class="mrx"/>Export   to Pdf</a></li>');




    $("#salaryexportListPanelTableMainDiv").append("<div id='salaryexportMastertableresponsiveDiv' class='table-responsive' />");
    $("#salaryexportMastertableresponsiveDiv").append('<table id="example1" class="table table-striped table-bordered table-hover">');

    //Start Header
    $("#example1").append("<thead class=''><tr>"
            + " <th style='min-width:30%;width:auto;'>" + '<input type="checkbox" id="selectall"/>All' + "</th>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Employee Code(M)</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Department</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Designation</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Salary Type</th>"
            + "</tr></thead>");

    var salarySearchJSON = {
        employeeCode: $("#empcode").val(),
        employeeCodeM: $("#manualempcode").val(),
        employeeName: $("#empname").val(),
        ddo: $("#ddo").val(),
        location: $("#location").val(),
        department: $("#department").val(),
        designation: $("#designation").val(),
        natureType: $("#naturetype").val(),
        postingCity: $("#postingcity").val(),
        fundType: $("#fundtype").val(),
        budgetHead: $("#budgethead").val(),
    }

    $.get(server_base_url + "/payroll/salaryexport/Search", {
        ddo: $("#ddo").val(),
        month: $("#month").val(),
        year: $("#year").val(),
        salarySearchJSON: JSON.stringify(salarySearchJSON)

    }).done(function (bdata) {

        if (bdata == null || bdata == "" || bdata == 500)
        {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
        } else {


            if (bdata != null) {



                if (bdata.length > 0) {
                    exportData = bdata;
                    var sno = 0;
                    for (var key in bdata) {
                        if (bdata.hasOwnProperty(key)) {
                            var salaryData = [];
                            salaryData = bdata[key].salaryList;



                            $("#example1").append("<tbody id='displaySalaryTableBody' class='table-striped table-bordered' />");
                            for (var i = salaryData.length - 1; i >= 0; i--) {
                                sno++;
                                $("#displaySalaryTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case" value=' + bdata[key]._id.$oid + '>' + "</td>"
                                        + "<td>" + sno + "</td>"
                                        + "<td style='cursor:pointer;'>" + salaryData[i].employeeCodeM + "</td>"
                                        + "<td style='cursor:pointer;'>" + salaryData[i].employeeName + "</td>"
                                        + "<td style='cursor:pointer;'>" + salaryData[i].location + "</td>"
                                        + "<td style='cursor:pointer;'>" + salaryData[i].department + "</td>"
                                        + "<td style='cursor:pointer;'>" + salaryData[i].designation + "</td>"
                                        + "<td style='cursor:pointer;'>" + salaryData[i].salaryType + "</td></tr>");
                            }
                        }
                    }
                    $('#example1').append("</table>");



                }
            }
        }
        $("#example1").dataTable();

    });

    $("#example1 thead tr th:first input:checkbox").change(function () {
        $("#example1 tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
    });
    $("#example1 tbody tr td:first-child input:checkbox").change(function () {
        var tot = $(".case").length;

        var tot_checked = $(".case:checked").length;

        if (tot != tot_checked) {
            $("#selectall").prop('checked', false);
        }
    });
}

function  createSearchForm(divId) {
    //Start outbox div 
    $("#" + divId).text("").append("<div id='salaryexportsearchMainDivId' />");
    $("#salaryexportsearchMainDivId").text("").append("<div id='salaryexportsearchmainTabMenu'/>");
    $("#salaryexportsearchmainTabMenu").append("<div id='salaryexportsearchtableHeader'/>");
    $("#salaryexportsearchtableHeader").append("<div id='salaryexportsearchFirstPanel' class='panel panel-blue' />");
    $("#salaryexportsearchFirstPanel").append("<div id='salaryexportsearchfirstPanelHeading' class='panel-heading' />");
    $("#salaryexportsearchfirstPanelHeading").append("<h4 id='salaryexportsearchtableHeader1' class='panel-title' />");
    $("#salaryexportsearchtableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Salary Export </center>");
    $("#salaryexportsearchFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='salaryexportsearchpanelMainBody' class = 'panel-body' />");
    $("#salaryexportsearchpanelMainBody").append("<div id='salaryexportsearchpanelRow' class='row' />");
    $("#salaryexportsearchpanelRow").append("<div id='pregsuccessBefore'></div>");
    $("#salaryexportsearchpanelRow").append("<div id='salaryexportsearchFieldGroup' class='form-group' />");
    //End outbox div 

    getTwoColumnInRow("salaryexportsearchFieldGroup", "Row1", "Row1Col1", "Row1Col2");

    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "", "empcode", "Enter Employee Code(Ex:ORKGEMP-97)", ""));
    $("#Row1Col2").append(getLabel_InputWithSpan("Manual Employee Code", "", "manualempcode", "Enter Manual employee code(Ex:ORKGEMP-97)", ""));

    getTwoColumnInRow("salaryexportsearchFieldGroup", "Row2", "Row1Col21", "Row1Co22");

    $("#Row1Col21").append(getLabel_InputWithSpan("Employee Name", "", "empname", "Enter Employee Code(Ex:ORKGEMP-97)", "onkeypress='return validatealphanumeric(event)'"));
    $("#Row1Co22").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
    $("#empcode").keypress(function (event) {
        if (event.which == 13) {
            getEmpDemodetailsforsalaryexport()

        }
    });

    getTwoColumnInRow("salaryexportsearchFieldGroup", "Row3", "Row1Col31", "Row1Col32");
    $("#Row1Col31").append(getLabel("Location", "") + "" + getDropDown("location"));
    $("#Row1Col32").append(getLabel("Department", "") + "" + getDropDown("department"));

    getTwoColumnInRow("salaryexportsearchFieldGroup", "Row4", "Row1Col41", "Row1Col42");
    $("#Row1Col41").append(getLabel("Designation", "") + "" + getDropDown("designation"));
    $("#Row1Col42").append(getLabel("Nature Type", "") + "" + getDropDown("naturetype"));


    getTwoColumnInRow("salaryexportsearchFieldGroup", "Row5", "Row1Col51", "Row1Col52");
    $("#Row1Col51").append(getLabel("Posting City", "") + "" + getDropDown("postingcity"));
    $("#Row1Col52").append(getLabel("Budget Head", "") + "" + getDropDown("budgethead"));

    getTwoColumnInRow("salaryexportsearchFieldGroup", "Row6", "Row1Col61", "Row1Col62");
    $("#Row1Col61").append(getLabel("PF Type", "") + "" + getDropDown("pfType"));
    $("#Row1Col62").append(getLabel("Fund Type", "") + "" + getDropDown("fundtype"));

    getTwoColumnInRow("salaryexportsearchFieldGroup", "Row7", "Row1Col71", "Row1Col72");

    $("#Row1Col71").append(getLabel("Year", "required") + "" + getDropDown("year"));
    $("#Row1Col72").append(getLabel("Month", "required") + "" + getDropDown("month"));

    $("#month").append("<option id=''value='0' >---Select Month---</option>");
//    $("#month").append("<option id=''value='1' >Jan</option><option id=''value='2'>Feb</option><option id=''value='3'>Mar</option><option id=''value='4'>Apr</option>");
//    $("#month").append("<option id=''value='5' >May</option><option id=''value='6'>Jun</option><option id=''value='7'>Jul</option><option id=''value='8'>Aug</option>");
//    $("#month").append("<option id=''value='9' >Sep</option><option id=''value='10'>Oct</option><option id=''value='11'>Nov</option><option id=''value='12'>Dec</option>");
//
    $("#year").append("<option id=''value='0' >---Select Year---</option>");
//    <option id=''value='2016' >2016</option><option id=''value='2017'>2017</option><option id=''value='2018'>2018</option><option id=''value='2019'>2019</option>");
    getFinancialYear("month", "year");


    viewSalaryReDddoListForExport("", "ddo");
    viewSalaryDepartmentForExport();
    viewSalaryDesignationListForExport("", "designation", "Designation");
    fetchSalaryAllNaturesTypeForExport();
    viewSalaryCityForExport("", "postingcity");
    viewSalaryLocationForExport("", "location");
    // viewSalarySortBy("", "sortBy");
    getSalaryfundtypeExportsalary("", "fundtype");
    getbudgetheadExportsalary("", "budgethead");
    viewPFType("", "pfType");

    $("#salaryexportsearchFieldGroup").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue'><button type='button'  id='salaryexportButton' value='view' class='btn btn-success mr5'  onclick='validatesalaryexport()'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
    <button type='button' id='ResetButton' onclick='resetsalaryExport()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");


}
$(document).on('change', '#year', function () {
    var year = $("#year").val();
    getFinancialMonth("month", year);
});

function getSalaryfundtypeExportsalary(name, DivId) {
    $("#" + DivId).text("").append("<option value='0' selected>---- Select FundType ----</option>");
    $.get(server_base_url + "budget/master/FundType/View", {
    }).done(function (pdata) {
        if (pdata != null) {

            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {
                    var description = pdata[i].description;
                    if (description != undefined && description != '' && description != null) {
                        if (name == pdata[i].PFType) {
                            $("#" + DivId).append("<option  value='" + description + "' selected>" + description + "</option>");
                        } else {
                            $("#" + DivId).append("<option  value='" + description + "' >" + description + "</option>");
                        }
                    }
                }
            }
        }
    });
}
function viewPFType(name, DivId) {
    $("#" + DivId).text("").append("<option value='0' selected>---- Select PFType ----</option>");
    $.get(server_base_url + "hrms/salary/PFType/ViewList", {
    }).done(function (pdata) {
        if (pdata != null) {

            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {
                    var PFType = pdata[i].PFType;
                    if (PFType != undefined && PFType != '' && PFType != null) {
                        if (name == pdata[i].PFType) {
                            $("#" + DivId).append("<option  value='" + PFType + "' selected>" + PFType + "</option>");
                        } else {
                            $("#" + DivId).append("<option  value='" + PFType + "' >" + PFType + "</option>");
                        }
                    }
                }
            }
        }
    });
}
//function viewSalarySortBy(name, DivId) {
//    $("#" + DivId).append("<option id=''value='2'>Employee Code</option><option id='' value='3'>Employee Name</option><option id=''value='4'>Location</option>\n\
//     <option id=''value='5'>Department</option><option id=''value='6'>Designation</option><option id=''value='7'>Salary Type</option>");
//}
function viewSalaryReDddoListForExport(name, DivId) {
    $("#" + DivId).text("").append("<option value='0' selected>---- Select DDO ----</option>");
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (pdata) {
        if (pdata != null) {

            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {
                    if (name == pdata[i].ddoName) {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].ddoName + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].ddoName + "</option>");
                    }
                }
            }
        }
    });
}

function viewSalaryDepartmentForExport(name) {
    $("#department").text("").append("<option value='0' selected>---- Select Department ----</option>");
    $.get(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function (data) {
        if (data != null) {

            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (name == data[i].department) {
                        $("#department").append("<option  value='" + data[i].department + "' selected>" + data[i].department + "</option>");
                    } else {
                        $("#department").append("<option  value='" + data[i].department + "' >" + data[i].department + "</option>");
                    }
                }
            }
        }
    });
}

function viewSalaryDesignationListForExport(name, DivId, message)
{
    $("#" + DivId).text("").append("<option value = '0' selected>---- Select " + message + " ----</option>");
    $.get(server_base_url + "hrms/salary/Designation/ViewList", {
    }).done(function (bdata) {
        if (bdata != null) {

            if (bdata.length > 0) {
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].designation) {
                        $("#" + DivId).append("<option  value='" + bdata[i].designation + "' selected>" + bdata[i].designation + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + bdata[i].designation + "' >" + bdata[i].designation + "</option>");
                    }
                }
            }
        }
    });
}

function fetchSalaryAllNaturesTypeForExport(name) {
    $("#naturetype").text("").append("<option value='0' selected >---- Select Nature Type ----</option>");
    $.post(server_base_url + "hrms/common/Nature/View", {
    }).done(function (data) {
        if (data != null) {


            for (var i = 0; i < data.length; i++) {
                if (name == data[i].natureName) {
                    $("#naturetype").append("<option  value='" + data[i].natureName + "' selected>" + data[i].natureName + "</option>");
                } else {
                    $("#naturetype").append("<option  value='" + data[i].natureName + "' >" + data[i].natureName + "</option>");
                }
            }
        }

    });
}

function viewSalaryCityForExport(name, DivId) {
    $("#" + DivId).text("").append("<option value = '0' selected >---- Select City ----</option>");
    $.get(server_base_url + "hrms/salary/City/ViewList", {
    }).done(function (pdata) {
        if (pdata != null) {
            if (pdata.length > 0) {

                for (var i = 0; i < pdata.length; i++) {

                    var cityname = pdata[i].cityName;
                    if (cityname != undefined && cityname != '' && cityname != null) {
                        if (name == pdata[i].cityName) {
                            $("#" + DivId).append("<option  value='" + cityname + "' selected>" + cityname + "</option>");
                        } else {
                            $("#" + DivId).append("<option  value='" + cityname + "' >" + cityname + "</option>");
                        }
                    }
                }
            }
        }


    });
}
function getbudgetheadExportsalary(name, DivId) {
    $("#" + DivId).text("").append("<option value = '0' selected>---- Select Budget type----</option>");
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function (pdata) {

        if (pdata != null) {
            if (pdata.length > 0) {

                for (var i = 0; i < pdata.length; i++) {

                    var budgetHead = pdata[i].budgetHead;
                    if (budgetHead != undefined && budgetHead != '' && budgetHead != null) {
                        if (name == pdata[i].cityName) {
                            $("#" + DivId).append("<option  value='" + budgetHead + "' selected>" + budgetHead + "</option>");
                        } else {
                            $("#" + DivId).append("<option  value='" + budgetHead + "' >" + budgetHead + "</option>");
                        }
                    }
                }
            }
        }

    });
}
function viewSalaryLocationForExport(name, DivId) {

    $("#" + DivId).text("").append("<option value = '0' selected >---- Select Location ----</option>");
    $.get(server_base_url + "/financial/account/Location/ViewList", {
    }).done(function (pdata) {
        var mainData = pdata.result;
        if (mainData != null) {
            if (mainData.length > 0) {

                for (var i = 0; i < mainData.length; i++) {
                    if (name == mainData[i].cityName) {
                        $("#" + DivId).append("<option  value='" + mainData[i].locationName + "' selected>" + mainData[i].locationName + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + mainData[i].locationName + "' >" + mainData[i].locationName + "</option>");
                    }
                }
            }
        }

    });
}

function getfundtypeExportsalary(name, DivId) {
    $("#" + DivId).text("").append("<option value = '0' selected>---- Select Fund Type ----</option>");
    $.get(server_base_url + "budget/master/FundType/View", {
    }).done(function (pdata) {

        if (pdata != null) {
            if (pdata.length > 0) {

                for (var i = 0; i < pdata.length; i++) {
                    if (name == pdata[i].cityName) {
                        $("#" + DivId).append("<option  value='" + pdata[i].description + "' selected>" + pdata[i].description + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + pdata[i].description + "' >" + pdata[i].description + "</option>");
                    }
                }
            }
        }
    });
}
function getbudgetheadExportsalary(name, DivId) {
    $("#" + DivId).text("").append("<option value = '0' selected>---- Select Fund Type ----</option>");
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function (pdata) {

        if (pdata != null) {
            if (pdata.length > 0) {

                for (var i = 0; i < pdata.length; i++) {
                    if (name == pdata[i].cityName) {
                        $("#" + DivId).append("<option  value='" + pdata[i].budgetHead + "' selected>" + pdata[i].budgetHead + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + pdata[i].budgetHead + "' >" + pdata[i].budgetHead + "</option>");
                    }
                }
            }
        }
    });
}

function getEmpDemodetailsforsalaryexport()
{
    var ecode = $("#empcode").val();
    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function (pdata) {
        if (pdata == null || pdata == "" || pdata == 500)
        {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
        } else {

            $('#empname').val(pdata[0].employeeName);
            $('#empcodem').val(pdata[0].employeeCodeM);

        }

    });
}

function validatesalaryexport()
{
    $("#pregsuccessBefore").text("");
    var ddo = $('#ddo').val();
    var month = $('#month').val();
    var year = $('#year').val();
    var result = 0;

    if (ddo == "" || ddo == 0 || ddo == null) {
        result = 1;
        displayLargeErrorMessagesInCenterInRed("ddoErr", "Please  select DDO");
        $("#ddo").focus();
        $("#ddo").change(function (e) {
            $("#ddoErr").empty();

        });
    }

    if (month == "" || month == 0 || month == null) {
        result = 1;
        displayLargeErrorMessagesInCenterInRed("monthErr", "Please  select month");
        $("#month").focus();
        $("#month").change(function (e) {
            $("#monthErr").empty();

        });

    }
    if (year == "" || year == 0 || year == null) {
        result = 1;
        displayLargeErrorMessagesInCenterInRed("yearErr", "Please  select year");
        $("#year").focus();
        $("#year").change(function (e) {
            $("#yearErr").empty();
        });
    }
    if (result == 1) {
        return false;

    } else {
        $("#salaryexportTableMainDiv").remove();
        displaySalaryTable();
    }
}
function resetsalaryExport()
{

    $('#empcode').val("");
    $('#empname').val("");
    $('#manualempcode').val("");

    $('#ddo').val("0");
    $('#month').val("0");

    $('#year').text("").val("");

    $('#department').val("0");
    $('#location').val("0");
    $('#naturetype').val("0");
    $('#fundtype').val("0");
    $('#budgethead').val("0");

}

function downloadFile() {

    var count = [];
    $('#example1 tr input[type="checkbox"][name="case"]:not(":checked")').each(function () {
        count.push($(this).closest('tr').index());
    });
    var len = count.length;
    var tbllength = $("#example1 tbody tr").length;
    if (len == tbllength) {
        alert("please check  the row  checkbox");
        return false;
    } else {
        var value = JSON.stringify(count);
        $('#example1').tableExport({
            type: 'excel',
            escape: 'false',
            ignoreRow: value,
            ignoreColumn: [0],
            // here i have ignored 2nd and 3rd column
        });
    }
}

//function downloadPDFFile(){
//    var count = [];
//    $('#example1 tr input[type="checkbox"][name="case"]:not(":checked")').each(function () {
//        count.push($(this).closest('tr').index());
//    });
//    var len = count.length;
//    var tbllength = $("#example1 tbody tr").length;
//    if (len == tbllength) {
//        alert("please check  the row  checkbox");
//        return false;
//    } else {
//        var value = JSON.stringify(count);
//        $('#example1').tableExport({
//            type: 'pdf',
//            escape: 'false',
//            ignoreRow: value,
//            ignoreColumn: [0],
//            // here i have ignored 2nd and 3rd column
//        });
//    }
//}


function exportsalaryDataintoExcelSheet() {
    if (exportData != null || exportData != "" || exportData != undefined) {
        var jsonArrayData = [];
        var EmployeeJsonObj = {};
        var bdata = exportData;
        var obj;
        var sno = 0;
        var length = $('#displaySalaryTableBody tr input[type="checkbox"][name="case"]:checked').length;
        if (length > 0) {
            $('#example1 tr input[type="checkbox"][name="case"]:checked').each(function (i) {
                for (var key in bdata) {
                    if (bdata[key]._id.$oid == $(this).val())
                    {
                        if (bdata.hasOwnProperty(key)) {
                            var salaryData = [];
                            salaryData = bdata[key].salaryList;
                            for (var i = salaryData.length - 1; i >= 0; i--) {

                                sno++;
                                jsonArrayData.push({
                                    sno: sno,
                                    nature: bdata[key].nature,
                                    month: bdata[key].month,
                                    year: bdata[key].year,
                                    fundType: bdata[key].fundType,
                                    budgetHead: bdata[key].budgetHead,
                                    employeeCodeM: salaryData[i].employeeCodeM,
                                    employeeName: salaryData[i].employeeName,
                                    location: salaryData[i].location,
                                    department: salaryData[i].department,
                                    salaryType: salaryData[i].salaryType,
                                    designation: salaryData[i].designation,
                                    salaryPostStatus: salaryData[i].salaryPostStatus,
                                });
                                EmployeeJsonObj = jsonArrayData;
                                obj = JSON.stringify(EmployeeJsonObj);
                            }
                        }
                    }
                }
            });


            $.post(server_base_url + "payroll/salary/Export", {
                obj: obj,
            }).done(function (data) {
                if (data == fail) {
                    displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + failMessage + "<br /><br />");
                    displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + failMessage + "<br /><br />");
                } else if (data == unauthorized) {
                    displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                    displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
                } else if (data == invalidSession) {
                    callSessionTimeout();
                } else if (data == statusException) {
                    displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                    displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
                } else {
                    fileName = JSON.parse(data);
                    console.log(fileName);
                    var elemIF = document.createElement("iframe");
                    elemIF.src = server_base_url + "payroll/downloadservice/Download?fileName=" + data + "";
                    elemIF.style.display = "none";
                    document.body.appendChild(elemIF);
                    $('input[type=checkbox]').attr('checked', false);

                }
            });
        } else {
            alert("please select row checkbox");
        }
    } else {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
    }
}