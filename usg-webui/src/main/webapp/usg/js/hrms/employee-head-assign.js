/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function displayEmployeeHeadAssign()
{
    if (checkUserPrivelege(pvCreateEmployeeAssign)) {
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsEmployeeMasterTabs()">Employee Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="">Employee Head Assign</a>');
        scrolupfunction();
        var financialYear = getUserSessionElement(seCurrentFinancialYear);
        // $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Employee Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="">Employee Head Assign</a>');
        //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Employee Master</a></label> >> <label>Employee Head Assign</label>');

        $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
        $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
        $("#mainTabMenu").append("<div id='tableHeader' />");
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Employee Head Assign</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colEmpHeadAssign'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colEmpHeadAssign").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colEmpHeadAssign span").hasClass("glyphicon-minus-sign")) {
                $("#colEmpHeadAssign").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colEmpHeadAssign").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
//    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        $("#FieldGroup").append("<input type='hidden' id='eid' >");
        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("DDO", "required") + "" + getDropDown("employeeDDOhead"));
        //  $("#Row1Col2").append(getLabel_InputWithSpan("Employee Code", "", "headEmpCode", "Employee Code", ""));
        $("#Row1Col2").append(getLabel("Employee Code", "") + "" + getDropDown("headEmpCode"));
        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Employee Code(M)", "", "headEmpCodeM", "Employee Code(M)", "onkeypress='return validateNumber(event)'"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Employee Name ", "", "empName", "Employee Name", "onkeypress='return validatealphanumeric(event)'"));


        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Location", "") + "" + getDropDown("headLocation"));
        $("#Row3Col2").append(getLabel("Department", "") + "" + getDropDown("headDepartment"));

        //Getting LoggedIn DDO And Location
        getLoggedInDDOLocationInDropDown("employeeDDOhead", "headLocation");
        //

        getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel("Designation", "") + "" + getDropDown("headDesignation"));
        $("#Row4Col2").append(getLabel("Nature Type", "") + "" + getDropDown("headNatureType"));

        getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel("Posting City", "") + "" + getDropDown("postingCity"));
        $("#Row5Col2").append(getLabel("PF Type", "") + "" + getDropDown("pfType"));

        getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel("Employee Type", "") + "" + getDropDown("employeeType"));
        $("#Row6Col2").append(getLabel("Fund Type", "") + "" + getDropDown("fundType"));

        getTwoColumnInRow("FieldGroup", "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel("Head", "required") + "" + getDropDown("head"));
        $("#Row7Col2").append(getLabel("Salary Type", "") + "" + getDropDown("salaryType"));

        getTwoColumnInRow("FieldGroup", "Row8", "Row8Col1", "Row8Col2");
        $("#Row8Col1").append(getLabel_InputWithSpan("Head Description", "", "headDescription", "", "onkeypress='return validatealphanumeric(event)'"));
        $("#Row8Col2").append(getLabel("Budget Head", "") + "" + getDropDown("budgetType"));

        getTwoColumnInRow("FieldGroup", "Row9", "Row9Col1", "Row9Col2");
        $("#Row9Col1").append('<label class="control-label">Update Type:<span class="require"> *</span></label>');
        $("#Row9Col1").append('<div id="DAFieldDiv" class="">Overwrite<input type="radio" name="ratedDefinedFor" id="Overwrite" value="Overwrite" style="margin-left:20px;margin-right:20px;">Skip<input type="radio" name="ratedDefinedFor" id="Skip" value="Skip" style="margin-left:20px;"></div>');
        $("#Row9Col1").append('<div id="typeErr"></div>');


        $("#FieldGroup").append("<div id='row10' class='row' />");
        $("#row10").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='viewHeadAssignEmployeeListValidate()'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetEmployeeHeadAssignData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");

//    viewReDddoListForList("", "employeeDDOhead");
//    $("#employeeDDOhead").attr("onchange", "loadEmpcodeforHeadAssign();getLocationBasedOnDDOHeadAssign();getDepartmentBasedOnDDOHeadAssign();getdesignationUsingDDOHeadAssign()").trigger("onchange");
        $("#employeeDDOhead").attr("onchange", "loadEmpcodeforHeadAssign();getDepartmentBasedOnDDOHeadAssign();getdesignationUsingDDOHeadAssign()").trigger("onchange");
        $("#headEmpCode").attr("onchange", "getEmpDemodetailsforHeadAssign()");
        fetchAllNatureTypehead();
        fetchAllDesignationhead();
        fetchAllCitieshead();
        fetchAllHead();
        getbudgetheadHeadAssign();
        viewSalaryHeadListForOption("", "salaryType");
        viewOption("budget/master/FundType/View", "", "description", "fundType", "Fund Type");
        viewOption("hrms/common/Nature/View", "", "natureName", "headNatureType", "Nature");
        viewOption("hrms/salary/Class/ViewList", "", "name", "employeeType", "Employee Type");
        viewOption("hrms/salary/PFType/ViewList", "", "PFType", "pfType", "PF Type");
        // setLocation("","headLocation");
        $("#headEmpCode").keypress(function (event) {
            if (event.which == 13) {
                getEmpDemodetailsforHeadAssign();

            }
        });


        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });


        $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
        // viewEmployeeHeadAssignList("tableHeaderForList");
        setTimeout(function () {
            $("#pregsuccessBefore").text("");
        }, 2100);


    }
}
function loadEmpcodeforHeadAssign()
{
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];
    var ddo = $("#employeeDDOhead").val();
    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: ddo,
        fromDt: fromDate,
        toDate: toDate,
        location: getUserSessionElement(seLocationId)
    }).done(function (pdata) {
        pdata = JSON.parse(pdata);
        if (pdata == null || pdata == "" || pdata == 500 || pdata == 501)
        {
            $("#headEmpCode").text("").append("<option >----" + NoDataFound + "----</option>");
        } else {
            $("#headEmpCode").text("").append("<option  value='' selected >----[Employee Code]-Employee Name ----</option>");
            for (var i = 0; i < pdata.length; i++)
            {
                $("#headEmpCode").append("<option  value='" + pdata[i].employeeCode + "'>[" + pdata[i].employeeCode + "]-" + pdata[i].employeeName + "</option>");
            }
        }
//        var availablecodes = [];
//        for (var i = 0; i < pdata.length; i++)
//        {
//            availablecodes.push(pdata[i].employeeCode);
//        }
//        $("#headEmpCode").autocomplete({
//            source: availablecodes
//        });
    });
}
function getEmpDemodetailsforHeadAssign()
{
    var ecode = $("#headEmpCode").val();
    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function (pdata) {

        if (pdata == null || pdata == "" || pdata == 500)
        {
            displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
        } else {

            $('#empName').val(pdata[0].employeeName);
            $('#headEmpCodeM').val(pdata[0].employeeCodeM);
            $("#headDepartment option:contains('" + pdata[0].department + "')").attr("selected", "selected");
            $("#headDesignation option:contains('" + pdata[0].designation + "')").attr("selected", "selected");
            $("#fundType option:contains('" + pdata[0].fundType + "')").attr("selected", "selected");
            $("#headNatureType option:contains('" + pdata[0].natureType + "')").attr("selected", "selected");
            $("#pfType option:contains('" + pdata[0].pfType + "')").attr("selected", "selected");
            $("#employeeType option:contains('" + pdata[0].classMaster + "')").attr("selected", "selected");
            $("#postingCity option:contains('" + pdata[0].postingCity + "')").attr("selected", "selected");
            $("#budgetType option:contains('" + pdata[0].budgetHead + "')").attr("selected", "selected");

        }

    });
}
function getLocationBasedOnDDOHeadAssign(name) {
    var ddo = $("#employeeDDOhead").val();
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getLocationBasedOnDdo
    }).done(function (pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#headLocation").text("").append("<option value = '' selected>---- Select Location ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#headLocation").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].locationName + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#headLocation option:contains('" + name + "')").attr("selected", "selected");
            }
        } else
        {
            $("#headLocation").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}
function getDepartmentBasedOnDDOHeadAssign(name) {
    var ddo = $("#employeeDDOhead").val();
    $.get(server_base_url + "/hrms/common/DDODepartment/FetchDepartBasedonDDOService", {
        ddo: ddo
    }).done(function (pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            var deptList = pdata.deptList;
            deptList = JSON.stringify(deptList);
            deptList = JSON.parse(deptList);
            deptList = JSON.parse(deptList);
            $("#headDepartment").text("").append("<option value = ''>---- Select Department ----</option>");
            for (var k = 0; k < deptList.length; k++) {
                $("#headDepartment").append("<option  value='" + deptList[k]._id.$oid + "'>" + deptList[k].department + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#headDepartment option:contains('" + name + "')").attr("selected", "selected");
            }
        } else
        {
            $("#headDepartment").text("").append("<option value = ''>---- No Data Available ----</option>");
        }
    });
}
function getdesignationUsingDDOHeadAssign(name) {
    var ddo = $("#employeeDDOhead").val();
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getDesignationBasedOnDdo
    }).done(function (pdata) {

        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#headDesignation").text("").append("<option value = '' selected>---- Select Designation ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#headDesignation").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].designation + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#headDesignation option:contains('" + name + "')").attr("selected", "selected");
            }
        } else
        {
            $("#headDesignation").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });


}
function getbudgetheadHeadAssign() {
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function (bdata) {
        $("#budgetType").text("").append("<option value = '' selected>---- Select Budget Head ----</option>");
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#budgetType").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].budgetHead + "</option>");
            }
    });
}
function resetEmployeeHeadAssignData()
{
    $('#headEmpCode').val("");
    $('#headEmpCodeM').val("");
    $('#empName').val("");
//    $('#employeeDDOhead').val("");
//    $('#headLocation').val("");
    $('#headDepartment').val("");
    $('#headDesignation').val("");
    $('#headNatureType').val("");
    $('#postingCity').val("");
    $('#pfType').val("");
    $('#sortBy').val("");
    $('#fundType').val("");
    $('#head').val("");
    $('#salaryType').val("");
    $('#updateTypeRadio').attr("checked", false);
    $('#budgetType').val("");
    $('#employeeType').val("");
    $('#headDescription	').val("");
}
function validateEmployeeHeadAssignData()
{
    var saveorupdate = $("#saveorupdate").val();
    $("#headEmpCodeErr").text("");
    $("#headEmpCodeMErr").text("");
    $("#empNameErr").text("");
    $("#employeeDDOheadErr").text("");
    $("#headLocationErr").text("");
    $("#headDepartmentErr").text("");
    $("#headDesignationErr").text("");
    $("#headNatureTypeErr").text("");
    $("#postingCityErr").text("");
    $("#pfTypeErr").text("");
    $("#sortByErr").text("");
    $("#fundTypeErr").text("");
    $("#headErr").text("");
    $("#salaryTypeErr").text("");
    $("#updateTypeRadioErr").text("");
    $("#budgetTypeErr").text("");
    $("#employeeTypeErr").text("");
    $("#headDescription	Err").text("");

    $("#pregsuccessBefore").text("");

    var employeeCode = $("#headEmpCode").val();
    var employeeCodeM = $("#headEmpCodeM").val();
    var employeeName = $("#empName").val();
    var ddo = $("#employeeDDOhead").val();
    var location = $("#headLocation").val();
    var department = $("#headDepartment").val();
    var designation = $("#headDesignation").val();
    var natureType = $("#headNatureType").val();
    var postingCity = $("#postingCity").val();
    var pfType = $("#pfType").val();
    var sortby = $("#sortBy").val();
    var fundType = $("#fundType").val();
    var head = $("#head").val();
    var salaryType = $("#salaryType").val();
    var updateTypeRadio = $("#updateTypeRadio").val();
    var budgetHead = $("#budgetType").val();
    var employeeType = $("#employeeType").val();
    var headDescription = $("#headDescription").val();
}

function viewEmployeeHeadAssignList(divId)
{
    if (checkUserPrivelege(pvViewEmployeeAsign)) {
        $("#" + divId).text("").append("<div id='employeeHeadAssignListPanel' class='panel panel-blue' />");
        $("#employeeHeadAssignListPanel").append("<div id='employeeHeadAssignListPanelHeading' class='panel-heading' />");
        $("#employeeHeadAssignListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Employee Head Assign</center>");
        $("#employeeHeadAssignListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");
        $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayEmployeeHeadAssignTable' />");
        $("#displayEmployeeHeadAssignTable").append("<thead class=''><tr>"
                + " <th class='sno_width'> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Head Name</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Location</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Department</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Designation</th>"
//            + "<th class='table_anchor_width'><i ></i>Edit</th>"
//            + "<th class='table_anchor_width'><i  style='font-size:21px;'></i> Delete</th>"
                + "</tr></thead>");

        $.get(server_base_url + "/hrms/master/HeadAssign/View", {
        }).done(function (bdata) {
            if (bdata == fail) {
//            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
//            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />")
            } else if (bdata == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#displayEmployeeHeadAssignTable").append("<tbody id='displayEmployeeHeadAssignTableBody' class='table-striped table-bordered' />");
//                    for (var i = bdata.length-1; i >=0 ; i--) {
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var json = {
                                id: bdata[i]._id.$oid,
                                empName: bdata[i].empName,
                                headName: bdata[i].headName,
                                location: bdata[i].location,
                                empCode: bdata[i].empCode,
                                department: bdata[i].department,
                                designation: bdata[i].designation
                            };
                            json = JSON.stringify(json);

                            $("#displayEmployeeHeadAssignTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].headName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].empCode + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].empName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].location + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].department + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td>"
//                                + "<td style='cursor:pointer;' onclick=updatebank('" + encodeURI(bankjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
//                                + "<td onclick=deletebank('" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>"
                                    );
                        }
                        $('#displayEmployeeHeadAssignTable').dataTable();
                        $('#displayEmployeeHeadAssignTable').append("</table>");
                    }
                }
            }
        });
    }
}

function viewHeadAssignEmployeeListValidate() {
    var ddo = $("#employeeDDOhead").val();
    var head = $("#head").val();
    var updatetype = "";

    if ($('#Overwrite').is(':checked')) {
        updatetype = "Overwrite";

    } else if ($('#Skip').is(':checked')) {
        updatetype = "Skip";

    }
    if (ddo == null || ddo == "") {
        $("#employeeDDOhead").focus();
        displaySmallErrorMessagesInRed("employeeDDOheadErr", "Please Select DDO.");
    } else if (head == null || head == "") {
        $("#head").focus();
        $("#employeeDDOheadErr").text("");
        displaySmallErrorMessagesInRed("headErr", "Please Select Head.");
    } else if (updatetype == null || updatetype == "") {
        $("#head").focus();
        displaySmallErrorMessagesInRed("typeErr", "Please Select Type.");
    } else {
        $("#employeeDDOheadErr").text("");
        $("#headErr").text("");
        $("#typeErr").text("");
        viewHeadAssignEmployeeList();
    }
}
function viewHeadAssignEmployeeList() {
    if (checkUserPrivelege(pvViewEmployeeAsign)) {
        var ddo = $("#employeeDDOhead").val();
        var employeeCode = $("#headEmpCode").val();
        var employeeCodeM = $("#headEmpCodeM").val();
        var location = $("#headLocation").val();
        var department = $("#headDepartment").val();
        var designation = $("#headDesignation").val();
        var natureType = $("#headNatureType").val();
        var postingCity = $("#postingCity").val();
        var fundType = $("#fundType").val();
        var head = $("#head").val();
        var empStatus = $("#EmployeeStatus").val();

        $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
        // viewEmployeeHeadAssignList("tableHeaderForList");
        $("#tableHeaderForList").text("").append("<div id='employeeHeadAssignListPanel' class='panel panel-blue' />");
        $("#employeeHeadAssignListPanel").append("<div id='employeeHeadAssignListPanelHeading' class='panel-heading' />");
        $("#employeeHeadAssignListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Employee Head Assign</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colEmpHeadAssignList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#employeeHeadAssignListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colEmpHeadAssignList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colEmpHeadAssignList span").hasClass("glyphicon-minus-sign")) {
                $("#colEmpHeadAssignList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colEmpHeadAssignList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");
        $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayEmployeeHeadAssignTable' />");
        $("#displayEmployeeHeadAssignTable").append("<thead class=''><tr>"
                + "<th><input type='checkbox' id='checkbox' name='case'>All</th>"
                + "<th style='min-width:30%;width:auto;'><i></i> Employee Code</th>"
                + "<th style='min-width:30%;width:auto;'><i></i> Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i></i> Department</th>"
                + "<th style='min-width:30%;width:auto;'><i></i> Designation</th>"
                + "<th style='min-width:30%;width:auto;'><i></i> Head</th>"
                + "<th style='min-width:30%;width:auto;'><i></i> Mapping</th>"
                + "<th style='min-width:30%;width:auto;'><i></i> Amount</th>"
                + "</tr></thead>");
        var employeeSearchJSON = {
            employeeCode: employeeCode,
            employeeCodeM: employeeCodeM,
            ddo: ddo,
            location: location,
            department: department,
            designation: designation,
            natureType: natureType,
            postingCity: postingCity,
            fundType: fundType,
            head: head,
            EmployeeStatus: empStatus
        };

        employeeSearchJSON = JSON.stringify(employeeSearchJSON);

        $.get(server_base_url + "/hrms/master/HeadAssign/ViewByDDO", {
            employeeSearchJSON: employeeSearchJSON
        }).done(function (bdata) {
            $("#displayEmployeeHeadAssignTableBody").text("");
            if (bdata == fail) {
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException) {
                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else {
                if (bdata != null && bdata.length > 0) {
                    $("#displayEmployeeHeadAssignTable").append("<tbody id='displayEmployeeHeadAssignTableBody' class='table-striped table-bordered' />");

                    for (var i = bdata.length - 1; i >= 0; i--) {
                        (function (i) {
                            var inputValue = "";
                            var mapping = "";
                            var headname = $("#head option:selected").text();

                            var employeeGetHeadsJson = {
                                basic: bdata[i].basic,
                                gradePay: bdata[i].gradePay,
                                association: bdata[i].association,
                                stopGPF: bdata[i].stopGPF,
                                classMaster: bdata[i].classMaster,
                                postingCity: bdata[i].postingCity,
                                natureType: bdata[i].natureType,
                                ddo: bdata[i].ddo,
                                salaryType: bdata[i].salaryType,
                                ptApplicable: bdata[i].ptApplicable
                            };
                            $.get(server_base_url + "hrms/employee/Employee/GetSalaryHeads", {
                                employeeGetHeadsJson: JSON.stringify(employeeGetHeadsJson),
                            }).done(function (data) {
                                data = JSON.parse(data);
                                var EarningHeads = data.EarningHeads;
                                EarningHeads = JSON.parse(EarningHeads);
                                for (var j = 0; j < EarningHeads.length; j++) {
                                    if (EarningHeads[j]._id.$oid == $("#head").val()) {
                                        inputValue = EarningHeads[j].calculatedAmount;
                                        mapping = EarningHeads[j].mapping;

                                        $("#displayEmployeeHeadAssignTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;'>"
                                                + "<td><input type='checkbox' id='checkNotProcess' name='case' ></td>"
                                                + "<td style='cursor:pointer;'>" + bdata[i].employeeCode + "</td>"
                                                + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                                + "<td style='cursor:pointer;'>" + bdata[i].department + "</td>"
                                                + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td>"
                                                + "<td style='cursor:pointer;'>" + headname + "</td>"
                                                + "<td style='cursor:pointer;'>" + mapping + "</td>"
                                                + "<td style='cursor:pointer;'>" + inputValue + "</td></tr>");

                                        if (i == 0) {
                                            $('#displayEmployeeHeadAssignTable').dataTable();
                                        }
                                    }
                                }
                            });
                        })(i);
                    }

                    //  $('#displayEmployeeHeadAssignTable').dataTable();
                    $("#displayEmployeeHeadAssignTable thead tr th:first input:checkbox").change(function () {
                        $("#displayEmployeeHeadAssignTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                    });
                    $("#displayEmployeeHeadAssignTable tbody tr td:first-child input:checkbox").change(function () {
                        var tot = $(".case").length;
                        var tot_checked = $(".case:checked").length;
                        if (tot != tot_checked) {
                            $("#selectall").prop('checked', false);
                        }
                    });
                    if (checkUserPrivelege(pvCreateEmployeeAssign)) {
                        $("#displayEmployeeHeadAssignTable").append("<div class='col-xs-12'><center><button type='button' class='btn btn-success mr5' onclick='assignHeadToEmp()'>Process</button></center></div>");
                    }
                    //  $("#row10").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='viewHeadAssignEmployeeListValidate()'>View</button></center></div>");
                }

            }

        });
        // $("#displayEmployeeHeadAssignTable").append("<div class='col-xs-12'><center><button type='button'style='margin-left:10px' class='btn btn-success mr5' onclick='assignHeadToEmp()'>Process</button></center></div>");
    }
}

//function displayFinalDataHeadAssign(data, headname, mapping, inputValue)
//{
//    $("#displayEmployeeHeadAssignTableBody").append("<tr id='" + data._id.$oid + "' style='cursor:pointer;' >"
//            + "<td><input type='checkbox' id='checkNotProcess' name='case' ></td>"
//            + "<td style='cursor:pointer;'>" + data.employeeCode + "</td>"
//            + "<td style='cursor:pointer;'>" + data.employeeName + "</td>"
//            + "<td style='cursor:pointer;'>" + data.department + "</td>"
//            + "<td style='cursor:pointer;'>" + data.designation + "</td>"
//            + "<td style='cursor:pointer;'>" + headname + "</td>"
//            + "<td style='cursor:pointer;'>" + mapping + "</td>"
//            + "<td style='cursor:pointer;'>" + inputValue + "</td></tr>");
//
//    $("#displayEmployeeHeadAssignTable thead tr th:first input:checkbox").change(function() {
//        $("#displayEmployeeHeadAssignTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
//    });
//    $("#displayEmployeeHeadAssignTable tbody tr td:first-child input:checkbox").change(function() {
//        var tot = $(".case").length;
//        var tot_checked = $(".case:checked").length;
//        if (tot != tot_checked) {
//            $("#selectall").prop('checked', false);
//        }
//    });
//    $('#displayEmployeeHeadAssignTable').append("</table>");
//    $('#displayEmployeeHeadAssignTable').dataTable();
//    $("#displayEmployeeHeadAssignTable").append("<center><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='assignHeadToEmp()'>Assign</button></center>");
//
//}




function assignHeadToEmp() {
    if (checkUserPrivelege(pvCreateEmployeeAssign)) {
        var employeList = [];
        var earningHeads = [];

        $('#displayEmployeeHeadAssignTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
            var row = $(this).closest('tr');
            var date = new Date();
            var inputEffectiveDate = "01" + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            earningHeads.push({
                description: $("#head").val(),
                mapping: row.find('td:eq(6)').text(),
                amount: Number(row.find('td:eq(7)').text()),
                effectiveFromDate: inputEffectiveDate
            });
            employeList.push({
                pKey: row.attr('id'),
                earningHeads: earningHeads
            });
            $(this).closest('tr').remove();
        });
        var updatetype;
        if ($('#Overwrite').is(':checked')) {
            updatetype = "Overwrite";
        } else if ($('#Skip').is(':checked')) {
            updatetype = "Skip";
        }
        employeList = JSON.stringify(employeList);
        var id = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/master/HeadAssign/Assign", {
            empListJson: employeList,
            userid: id,
            updatetype: updatetype
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "" + failMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
            } else {
                scrolupfunction();
                displaySuccessMessages("pregsuccessBefore", updateMessage, "");
                setTimeout(function () {
                    displayEmployeeHeadAssign();
                }, 3000);
            }

        });
    }
}
function employeeHeadAssignData()
{

    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Employee Head Assign</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
//    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelRow").append("<div id='pregsuccessBefore'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup").append("<input type='hidden' id='eid' >");
    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "", "headEmpCode", "Employee Code", "onkeypress='return validateNumber(event)'"));
    $("#Row1Col2").append(getLabel_InputWithSpan("Employee Code(M)", "", "headEmpCodeM", "Employee Code(M)", "onkeypress='return validateNumber(event)'"));
    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel_InputWithSpan("Employee Name ", "", "empName", "Employee Name", "onkeypress='return validatealphanumeric(event)'"));
    $("#Row2Col2").append(getLabel("DDO", "") + "" + getDropDown("employeeDDOhead"));
    getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel("Location", "") + "" + getDropDown("headLocation"));
    $("#Row3Col2").append(getLabel("Department", "") + "" + getDropDown("headDepartment"));
    getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col1").append(getLabel("Designation", "") + "" + getDropDown("headDesignation"));
    $("#Row4Col2").append(getLabel("Nature Type", "") + "" + getDropDown("headNatureType"));
    getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
    $("#Row5Col1").append(getLabel("Posting City", "") + "" + getDropDown("postingCity"));
    $("#Row5Col2").append(getLabel("PF Type", "") + "" + getDropDown("pfType"));
    getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
    $("#Row6Col1").append(getLabel("Sort By", "") + "" + getDropDown("sortBy"));
    $("#Row6Col2").append(getLabel("Fund Type", "") + "" + getDropDown("fundType"));
    getTwoColumnInRow("FieldGroup", "Row7", "Row7Col1", "Row7Col2");
    $("#Row7Col1").append(getLabel("Head", "") + "" + getDropDown("head"));
    $("#Row7Col2").append(getLabel("Salary Type", "") + "" + getDropDown("salaryType"));
    getTwoColumnInRow("FieldGroup", "Row8", "Row8Col1", "Row8Col2");
    $("#Row8Col1").append(("<span class='col-sm-4 control-label'>Update Type</span> <div id='updateTypeRadio' class='col-sm-8' ><span  control-label'>OverWrite</span>&nbsp<input name='select1' onchange='toDisableFormulaOne()' type='radio' id='typeOne1' value='overwrite' >&nbsp&nbsp<label class=''>Skip</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type='radio' name='select1' onchange='toDisableFormulaOne()' value='skip' id='typeOne' ></div> "));
    $("#Row8Col2").append(getLabel("Budget Head", "") + "" + getDropDown("budgetType"));
    getTwoColumnInRow("FieldGroup", "Row9", "Row9Col1", "Row9Col2");
    $("#Row9Col1").append(getLabel("Employee Type", "") + "" + getDropDown("employeeType"));
    $("#Row9Col2").append(getLabel_InputWithSpan("Head Description", "", "headDescription", "", "onkeypress='return validatealphanumeric(event)'"));
    $("#FieldGroup").append("<div id='row10' class='row' />");
    $("#row10").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='viewHeadAssignEmployeeListValidate()'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetEmployeeHeadAssignData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
//    $("#tableHeader").append("<div id='associationListPanel' class='panel panel-blue' />");
//
//    $("#associationListPanel").append("<div id='associationListPanelHeading' class='panel-heading' />");
//    $("#associationListPanelHeading").append("<h4 id='associationfirstHeader1' class='panel-title' />");
//    $("#associationfirstHeader1").append("<a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#associationpanel' href='#collapseOneass2'><center>List of Employees</center></a>");
//
//    $("#associationListPanel").append("<div id='collapseOneassociationthr12' class='panel-collapse collapse in pal' />");
//    $("#collapseOneassociationthr12").append("<div id='associationpanelMainBody2' class = 'panel-body' />");
//    $("#associationpanelMainBody2").append("<center><span id='pregviewsuccessBeforeassociation'></span></center>");
//    $("#associationpanelMainBody2").append("<div id='associationpanelRow4' class='row' />");
//    ViewAssignedHead('associationpanelRow4');

    fetchAllNatureTypehead();
    fetchAllDesignationhead();
    fetchAllCitieshead();
    fetchAllHead();
    setEmployeeType("", "employeeType");
    //setLocation("","headLocation");

    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
    ViewAssignedHead('tableHeaderForList');
    setTimeout(function () {
        $("#pregsuccessBefore").text("");
    }, 2100);
}

function ViewAssignedHead(divId) {
//    $("#" + divId).text("").append("<div id='associationSubDiv1' class = 'panel panel-blue'></div>");
//    $("#associationSubDiv1").append("<table id='displayBankTable1' class='table table-striped table-bordered'></table>");
//    $("#displayBankTable1").append("<thead class=''><tr>"
    $("#" + divId).text("").append("<div id='maritalListPanel1' class='panel panel-blue' />");
    $("#maritalListPanel1").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Employees</center>");
    $("#maritalListPanel1").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").append("<div  id='ErrorDiv'/>");
    $("#listpanelRow").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
    $("#displayBankTable").append("<thead class=''><tr>"
            + " <th><input type='checkbox' id='checkbox' name='case2'></th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Head Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Department</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
//            + "<th style='min-width:30%;width:auto;'><i ></i>Edit</th>"
//            + "<th style='min-width:30%;width:auto;'><i ></i>Delete</th>"


            /*$("#" + divId).text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
             $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
             $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
             $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Banks</center>");
             $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
             $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");
             $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
             $("#listpanelRow").append("<div  id='ErrorDiv'/>");
             $("#listpanelRow").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
             $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
             $("#displayBankTable").append("<thead class=''><tr>"*/
            + "</tr></thead>");
    $.get(server_base_url + "/hrms/master/HeadAssign/View", {
    }).done(function (bdata) {

        if (bdata == fail) {
// displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");

        } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {

                    var sno = 0;
                    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var json = {
                            id: bdata[i]._id.$oid,
                            empName: bdata[i].empName,
                            headName: bdata[i].headName,
                            location: bdata[i].location,
                            empCode: bdata[i].empCode,
                            department: bdata[i].department,
                            designation: bdata[i].designation
                        }
                        json = JSON.stringify(json);
                        $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td><input type='checkbox' id='checkNotProcess' name='case2' ></td>"
                                + "<td style='cursor:pointer;'>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].headName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].empCode + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].empName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].location + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].department + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td></tr>");
                    }


                    $('#displayBankTable').append("</table>");
                    $('#displayBankTable').dataTable();
                }
            }
        }
        $("#displayBankTableBody").append("<div id='associationbuttonPanel'  class='row' align='center'/>");
        $("#associationbuttonPanel").append("<center><button id='associationSubmitBtn1'  class='btn btn-warning mr5' onclick='deleteHeadAssign()'>Delete</button></center>");
        // $("#patRegBtnDiv").append("<span id='pregsuccessAfter'></span>");
        // $("#associationBtnDiv").append("<button id='associationSubmitBtn'value='save' class='btn btn-success mr5' onclick='updateHeadAssign()'>Update</button>");
        // $("#associationSubmitBtn").append("<button id='associationSubmitBtn1' style='margin-right:100px;' align='center' class='btn btn-warning mr5' onclick='deleteHeadAssign()'>Delete</button>");
    });
}
function deleteHeadAssign() {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deleteHeadAssignData();
    }
}
function deleteHeadAssignData() {
    var rowid = [];
    $('#displayBankTable tr input[type="checkbox"][name="case2"]:checked').each(function () {
        var row = $(this).closest('tr');
        rowid.push($(this).closest('tr').attr('id'));
    });
    var Json = {};
    Json["id"] = rowid;
    Json = JSON.stringify(Json);
    $.post(server_base_url + "/hrms/master/HeadAssign/Delete", {
        id: Json
    }).done(function (data) {
        if (data == fail) {
            displayErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            employeeHeadAssignData();
            displaySuccessMessages("pregsuccessBefore", "" + successMessageDelete + "<br /><br />");
        }
    });
}

function fetchAllDDOoptionshead(name) {
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (bdata) {
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#employeeDDOhead").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].ddoName + "</option>");
            }
    });
}

function fetchAllNatureTypehead(n) {


    $.post(server_base_url + "hrms/common/Nature/View", {
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            $("#headNatureType").append("<option value = '' selected > ------------------------Select Nature Type-----------------------------------------</option>");
            for (var i = 0; i < data.length; i++) {
                if (n == data[i].natureName) {
                    $("#headNatureType").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].natureName + "</option>");
                } else {
                    $("#headNatureType").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].natureName + "</option>");
                }
            }
        }
    });
}

function fetchAllDesignationhead(name) {
    $.post(server_base_url + "hrms/salary/Designation/ViewList", {
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            $("#headDesignation").append("<option value = '' selected disabled> ------------------------Select Designation-----------------------------------------</option>");
            for (var i = 0; i < data.length; i++) {
                if (name == data[i].designation) {
                    $("#headDesignation").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].designation + "</option>");
                } else {
                    $("#headDesignation").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].designation + "</option>");
                }
            }
        }
    });
}

function fetchAllCitieshead(name) {


    $.post(server_base_url + "/hrms/salary/City/ViewList", {
    }).done(function (data) {

        if (data == fail) {
// displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
// displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            $("#postingCity").append("<option value = '' selected disabled> ----Select City----</option>");
            for (var i = 0; i < data.length; i++) {
                if (name == data[i].cityName) {
                    $("#postingCity").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].cityName + "</option>");
                } else {
                    $("#postingCity").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].cityName + "</option>");
                }
            }
        }
    });
}

function fetchAllHead(name) {
    $.get(server_base_url + "hrms/salary/SalaryHead/ViewList", {
    }).done(function (bdata) {
        $("#head").append("<option value = '' selected> ----Select Head----</option>");
        for (var i = 0; i < bdata.length; i++) {
            if (bdata[i].headType == "Earnings")
            {
                $("#head").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
            }
        }
    });
}


function setEmployeeType(name, divId) {
    var employeeType = ["Permanent Part Time", "Permanent Full Time", "Temporary Part Time", "Temporary Full Time"];
    $("#" + divId).append("<option value='' selected disabled>---- Select Employee Type ----</option>");
    for (var i = 0; i < employeeType.length; i++) {
        $("#employeeType").append("<option  value='" + employeeType[i] + "' >" + employeeType[i] + "</option>");
    }
    $("#" + divId).val(name);
}

