/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var exportData;

function displayEmployeeImportandExportPage(divid) {
    createsearchEmployeeForm(divid);
    createimportForm();

}
function createimportForm() {
    
    if (checkUserPrivelege(pvViewEmployeeImport)) {
        $("#employeeimportsearchMainDivId").append("<div id='employeeimportFormcolumnDiv'>");
        $("#employeeimportFormcolumnDiv").append("<div id='employeeimportFormpanelDiv' class='panel panel-blue'>");
        $("#employeeimportFormpanelDiv").append("<div id='employeeimportFormpanelHeadingDiv' class='panel-heading'>");
        $("#employeeimportFormpanelHeadingDiv").append("<h4 id='employeeimportFormHeader' class='panel-title' />");
    $("#employeeimportFormHeader").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Employee Import Details</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colEmpImportExport'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#employeeimportFormpanelDiv").append("<div id='collapseOne4' class='panel-collapse collapse in pal' />");
    $("#colEmpImportExport").click(function() {
        $("#collapseOne4").toggle();
        if ($("#colEmpImportExport span").hasClass("glyphicon-minus-sign")) {
            $("#colEmpImportExport").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colEmpImportExport").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne4").append("<div id='employeeimportFormpanelBodyDiv' class='panel-body pan'>");
    $("#employeeimportFormpanelBodyDiv").append("<div id='employeeimportformDiv' class='form-horizontal'>");
    $("#employeeimportformDiv").append("<div id='employeeimportformDiv' class='form-body'>");
    $("#employeeimportformDiv").append("<div id='employeeimportFormRowPanel' class='row'>");
    $("#employeeimportFormRowPanel").append("<div id='pregsuccessBeforeImport'/>");

    $("#employeeimportFormpanelBodyDiv").append('<div id="employeeimportFormFormGroupDiv" class="form-group"><label for="employeeimportFormName" class="col-lg-3 control-label" required>Select Employee File<span class="require">*</span></label>')
    $("#employeeimportFormFormGroupDiv").append('<div class="col-lg-7"><input type="file" id="importFile" class="form-control" accept=".xls,.xlsx"  placeholder="Please choose the File xls Format  only"></input><label id="importError"></label>');

    // $("#employeeimportFormFormGroupDiv").append("<div id='panelRow1' class='row' />");

    $("#employeeimportFormFormGroupDiv").append("<div class='col-lg-2'><a href='../../usg/DownloadFiles/Sample_Structure.xlsx' download><u><span style='color:green'>Sample Template</span></a>");

        $("#employeeimportFormpanelBodyDiv").append('<div class="col-xs-12" id="buttonRow"><center><input type="hidden" id="idValue"><button id="employeeimpotButton" value="save"  onclick="importFileValidation()" type="submit" class="btn btn-success bn">import</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\
    <button type="button" id="employeeimportFormResetButton" class="btn btn-warning bn" onclick="importResetButton()">Reset</button> </center></div>');
    }
}

function  createsearchEmployeeForm(divid) {
//Start Title Bar
    $("#dashboardTitleMainDiv").text("").append("Payroll Reports");
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> ><label><a href="javascript:payrollReportsMenuTabs()">Employee Import and Export</label>');
    //End  Title Bar
    //End  Title Bar

    //Start outbox div 
    $("#" + divid).text("").append("<div id='employeeimportsearchMainDivId' />");
    $("#employeeimportsearchMainDivId").text("").append("<div id='employeeimportsearchmainTabMenu'/>");
    if (checkUserPrivelege(pvViewEmployeeImport) || checkUserPrivelege(pvViewEmployeeExport)) {
        $("#employeeimportsearchmainTabMenu").append("<div id='employeeimportsearchtableHeader'/>");
        $("#employeeimportsearchtableHeader").append("<div id='employeeimportsearchFirstPanel' class='panel panel-blue' />");
        $("#employeeimportsearchFirstPanel").append("<div id='employeeimportsearchfirstPanelHeading' class='panel-heading' />");
        $("#employeeimportsearchfirstPanelHeading").append("<h4 id='employeeimportsearchtableHeader1' class='panel-title' />");
        $("#employeeimportsearchtableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Employee Export & Import</center>");
        $("#employeeimportsearchFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#collapseOne2").append("<div id='employeeimportsearchpanelMainBody' class = 'panel-body' />");
        $("#employeeimportsearchpanelMainBody").append("<div id='employeeimportsearchpanelRow' class='row' />");
        $("#employeeimportsearchpanelRow").append("<div id='pregsuccessBefore'></div>");
        $("#employeeimportsearchpanelRow").append("<div id='employeeimportsearchFieldGroup' class='form-group' />");
        //End outbox div 

        getTwoColumnInRow("employeeimportsearchFieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "", "empcode", "Enter Employee Code(Ex:ORKGEMP-97)", ""));
        $("#Row1Col2").append(getLabel_InputWithSpan("Manual Employee Code", "", "manualempcode", "Enter Manual employee code(Ex:ORKGEMP-97)", ""));
        getTwoColumnInRow("employeeimportsearchFieldGroup", "Row2", "Row1Col21", "Row1Co22");
        $("#Row1Col21").append(getLabel_InputWithSpan("Employee Name", "", "empname", "Enter Employee Code(Ex:ORKGEMP-97)", "onkeypress='return validatealphanumeric(event)'"));
        $("#Row1Co22").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        getTwoColumnInRow("employeeimportsearchFieldGroup", "Row3", "Row1Col31", "Row1Col32");
        $("#Row1Col31").append(getLabel("Location", "") + "" + getDropDown("location"));
        $("#Row1Col32").append(getLabel("Department", "") + "" + getDropDown("department"));
        getTwoColumnInRow("employeeimportsearchFieldGroup", "Row4", "Row1Col41", "Row1Col42");
        $("#Row1Col41").append(getLabel("Designation", "") + "" + getDropDown("designation"));
        $("#Row1Col42").append(getLabel("Nature Type", "") + "" + getDropDown("naturetype"));
        getTwoColumnInRow("employeeimportsearchFieldGroup", "Row5", "Row1Col51", "Row1Col52");
        $("#Row1Col51").append(getLabel("Posting City", "") + "" + getDropDown("postingcity"));
        $("#Row1Col52").append(getLabel("Sort By", "") + "" + getDropDown("sortBy"));
        viewReDddoListForExport("", "ddo");
        viewDepartmentForExport();
        viewDesignationListForExport("", "designation", "Designation");
        fetchAllNaturesTypeForExport();
        viewCityForExport("", "postingcity");
        viewLocationForExport("", "location");
        viewSortBy("", "sortBy");
        $("#employeeimportsearchFieldGroup").append("<div id='panelRow1' class='row' />");
        $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><input type='hidden' id='idValue'><button type='button'  id='employeeimportsearchSaveandUpdateButton' value='view' class='btn btn-success mr5'  onclick='validationsearchEmployeeData1()'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
    <button type='button' id='employeeimportsearchResetButton' onclick='wipeAllemployeeimportsearchData1()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
    }
}
//start validatio
function validationsearchEmployeeData1() {
    $("#pregsuccessBefore").text("");
    var ddo = $("#ddo").val();
    var result = 0;
    if (ddo == null || ddo == '' || ddo == undefined || ddo == 0) {
        displayLargeErrorMessagesInCenterInRed("ddoErr", "Please  select DDO");
        result = 1;
        $("#ddo").focus();
        $("#ddo").change(function(e) {
            $("#errorMessage").empty();
        });
        return false;
    }
    if (result != 1) {
        $("#employeeimportsearchTableMainDiv").remove();
        displayemployeeSearchTable();
    }
}
//End Validation

function displayemployeeSearchTable() {
    $("#employeeimportsearchMainDivId").append("<div id='employeeimportsearchTableMainDiv'/>");
    $("#employeeimportsearchTableMainDiv").append("<div id='employeeimportsearchMasterTableListPanel' class='panel panel-blue'/>");
    $("#employeeimportsearchMasterTableListPanel").append("<div id='employeeimportsearchMasterTableHeading' class='panel-heading' />");
    $("#employeeimportsearchMasterTableHeading").append("<h4 id='employeeimportsearchMasterTableHeader' class='panel-title' />");
    $("#employeeimportsearchMasterTableHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Employee</center>");
    $("#employeeimportsearchMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='employeeimportsearchListPanelTableMainDiv' class = 'panel-body' />");
    $("#employeeimportsearchListPanelTableMainDiv").append("<div id='employeeimportsearchListPanelRow' class = 'row' />");
    $("#employeeimportsearchListPanelRow").append("<div  id='tablesuccessBefore'/>");
    $('#employeeimportsearchListPanelTableMainDiv').append('<div class="btn-group mtm mbm"><a href="#" data-toggle="dropdown"   class="btn btn-success btn-sm dropdown-toggle">\n\
                    <i class="fa fa-wrench"> Export</a><ul class="dropdown-menu" id="exportDiv">');
    $("#exportDiv").append("<a href='javascript:void(0);' onclick='exportDataintoExcelSheet();'><img src='../../assets/vendors/tableExport/icon/xls.png' width='24px' class='mrx'/>Export  to Excel</a></li>");
    $("#employeeimportsearchListPanelTableMainDiv").append("<div id='employeeimportsearchMastertableresponsiveDiv' class='table-responsive' />");
    $("#employeeimportsearchMastertableresponsiveDiv").append('<table id="example1" class="table table-striped table-bordered table-hover">');
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
    var condition = "yes";
    var ddo = $("#ddo").val();
    if (ddo != null) {
        condition = "No";
    }
    var employeeSearchJSON = {
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
        sortby: $("#sortby").val(),
        EmployeeStatus: $("#EmployeeStatus").val()
    }
    $.get(server_base_url + "hrms/salary/Employee/Search", {
        condition: condition,
        employeeSearchJSON: JSON.stringify(employeeSearchJSON)
    }).done(function(bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
            displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + NoDataFound + "<br /><br />");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {


            if (bdata != null) {
                if (bdata.length > 0) {
                    exportData = bdata;
                    var sno = 0;
                    $("#example1").append("<tbody id='example1Body' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var checkboxID = "case" + sno;
                        $("#example1Body").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="' + checkboxID + '" name="case" class="case" value=' + bdata[i]._id.$oid + '>' + "</td>"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeCodeM + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].location + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].department + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].salaryType + "</td></tr>");
                    }
                    $('#example1').append("</table>");
                    // $('#employeeimportsearchListPanelTableMainDiv').append("<div class='col-xs-6'><button type='button' id='export'  value='Save' class='btn btn-success  pull-right mr5'  onclick='exportDataintoExcelSheet()'>Export</button></div>");






                    var sortby = $("#sortby").val();
                }
            }
        }
        var sortby = $("#sortBy").val();
        if (sortby != '' || sortby != undefined || sortby != null) {
            $("#example1").dataTable(
                    {
                        aaSorting: [[sortby, 'asc']]
                    });
        } else {
            ("#example1").dataTable();
        }
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
function viewSortBy(name, DivId) {
    $("#" + DivId).append("<option id=''value='2'>Employee Code</option><option id='' value='3'>Employee Name</option><option id=''value='4'>Location</option>\n\
     <option id=''value='5'>Department</option><option id=''value='6'>Designation</option><option id=''value='7'>Salary Type</option>");
}
function viewReDddoListForExport(name, DivId) {
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (pdata) {
        if (pdata != null) {
            $("#" + DivId).text("").append("<option value='' selected disabled>---- Select DDO ----</option>");
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

function viewDepartmentForExport(name) {
    $.get(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function (data) {
        if (data != null) {
            $("#department").text("").append("<option value='0' selected disabled>---- Select Department ----</option>");
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
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

function viewDesignationListForExport(name, DivId, message)
{
    $.get(server_base_url + "hrms/salary/Designation/ViewList", {
    }).done(function(bdata) {
        if (bdata != null) {
            $("#" + DivId).text("").append("<option value = '0' selected disabled>---- Select " + message + " ----</option>");
            if (bdata.length > 0) {
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].designation) {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].designation + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' >" + bdata[i].designation + "</option>");
                    }
                }
            }
        }
    });
}

function fetchAllNaturesTypeForExport(name) {
    $.post(server_base_url + "hrms/common/Nature/View", {
    }).done(function(data) {
        if (data != null) {
            $("#naturetype").text("").append("<option value='0' selected disabled>---- Select Nature Type ----</option>");
            for (var i = 0; i < data.length; i++) {
                if (name == data[i].natureName) {
                    $("#naturetype").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].natureName + "</option>");
                } else {
                    $("#naturetype").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].natureName + "</option>");
                }
            }
        }

    });
}

function viewCityForExport(name, DivId) {

    $.get(server_base_url + "hrms/salary/City/ViewList", {
    }).done(function(pdata) {
        if (pdata != null) {
            if (pdata.length > 0) {
                $("#" + DivId).text("").append("<option value = '0' selected disabled>---- Select City ----</option>");
                for (var i = 0; i < pdata.length; i++) {
                    if (name == pdata[i].cityName) {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].cityName + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].cityName + "</option>");
                    }
                }
            }
        }

    });
}
function viewLocationForExport(name, DivId) {

    $.get(server_base_url + "/financial/account/Location/ViewList", {
    }).done(function(pdata) {
        var mainData = pdata.result;
        if (mainData != null) {
            if (mainData.length > 0) {
                $("#" + DivId).text("").append("<option value = '0' selected disabled>---- Select Location ----</option>");
                for (var i = 0; i < mainData.length; i++) {
                    if (name == mainData[i].cityName) {
                        $("#" + DivId).append("<option  value='" + mainData[i]._id.$oid + "' selected>" + mainData[i].locationName + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + mainData[i]._id.$oid + "' >" + mainData[i].locationName + "</option>");
                    }
                }
            }
        }

    });
}
function searchEmployeeData() {
    displayemployeeSearchTable();
}


function importFileValidation() {
    $("#employeeimpotButton").attr('disabled', true);
    if ($('#importFile').get(0).files.length === 0) {
        addSomeClass("FieldDivImport", "has-error");
        displaySmallErrorMessages("importError", "Please choose File .");
        $("#employeeimpotButton").attr('disabled', false);
        return false;
    }

    var form_data = new FormData();
    var importFileCount = document.getElementById("importFile").files.length;
    for (i = 0; i < importFileCount; i++) {
        form_data.append("file", document.getElementById("importFile").files[i]);
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", server_base_url + "/payroll/employee/Import", true);
    if (importFileCount == 1) {
        xhr.send(form_data);
    } else {
        xhr.send();
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var responseMsg = xhr.responseText;
                if (responseMsg == success) {
                    $("#employeeimpotButton").attr('disabled', false);
                    $("#pregsuccessBeforeImport").append("<span style='color:green;'><center><strong>Successfully Saved</strong></center><br><br></span>");
                    setTimeout(function() {
                        $("#pregsuccessBeforeImport").text("");
                    }, 2100);
                    $('#importFile').val('');
                } else if (NoData == NoData) {
                    $("#employeeimpotButton").attr('disabled', false);
                    displaySmallErrorMessagesInRed("pregsuccessBeforeImport", "Incorrect Data" + "<br/><br/>");
                    $('#importFile').val('');
                } else {
                    $("#employeeimpotButton").attr('disabled', false);
                    displaySmallErrorMessagesInRed("pregsuccessBeforeImport", "Failure" + "<br/><br/>");
                    $('#importFile').val('');
                }
            }
        }
    }



}

$('input[type=file]').change(function() {
    var val = $(this).val().toLowerCase();
    var regex = new RegExp("(.*?)\.(xlsx)$");
    if (!(regex.test(val))) {
        $(this).val('');
        alert('Please select correct file format');
    }
});
function importResetButton() {
    $('#importFile').val('');
}

function wipeAllemployeeimportsearchData1() {
    displayEmployeeImportandExportPage("dashboardBodyMainDiv");
}

//export data
function exportDataintoExcelSheet() {
    if (exportData != null || exportData != "" || exportData != undefined) {
        var jsonArrayData = [];
        var EmployeeJsonObj = {};
        var sno = 0;
        var count = 0;
        var length = $('#example1Body tr input[type="checkbox"][name="case"]:checked').length;
        if (length > 0) {

            $('#example1 tr input[type="checkbox"][name="case"]:checked').each(function() {

                for (var key in exportData) {
                    if (exportData[key]._id.$oid == $(this).val())
                    {
                        if (exportData.hasOwnProperty(key)) {
                            sno++;
                            jsonArrayData.push({
//                            sno: sno,
//                            employeeCodeM: exportData[count].employeeCodeM,
//                            employeeName: exportData[count].employeeName,
//                            location: exportData[count].location,
//                            department: exportData[count].department,
//                            salaryType: exportData[count].salaryType,
//                            designation: exportData[count].designation,
                                exportData: exportData
                            });
                        }
                    }
                }
                count++;
            });
            EmployeeJsonObj = jsonArrayData;
            var obj = JSON.stringify(EmployeeJsonObj);
            $.post(server_base_url + "payroll/manageemployeexportandimport/Export", {
                obj: obj,
            }).done(function(data) {
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