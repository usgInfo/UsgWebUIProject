/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function createEmployeeDepartmentMapping() {

    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>>> <label><a href="javascript:hrmsCommonMasterTabs()">Employee Master</a></label> >><label>Employee Department Mapping Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="employeeDepartmentMappingMainDiv"/>');
    $("#employeeDepartmentMappingMainDiv").text("").append("<div id='employeeDepartmentMappingcolumnDiv' >");
    //  if (checkUserPrivelege(pvCreateEmployeeDepartmentMapping)) {
    $("#employeeDepartmentMappingcolumnDiv").append("<div id='employeeDepartmentMappingFirstPanel' class='panel panel-blue' />");
    $("#employeeDepartmentMappingFirstPanel").append("<div id='employeeDepartmentMappingfirstPanelHeading' class='panel-heading' />");
    $("#employeeDepartmentMappingfirstPanelHeading").append("<h4 id='employeeDepartmentMappingtableHeader1' class='panel-title' />");
    $("#employeeDepartmentMappingtableHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>Employee Department Mapping</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colEmployeeDepartmentMapping'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#employeeDepartmentMappingFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#colEmployeeDepartmentMapping").click(function () {
        $("#collapseOne2").toggle();
        if ($("#colEmployeeDepartmentMapping span").hasClass("glyphicon-minus-sign")) {
            $("#colEmployeeDepartmentMapping").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colEmployeeDepartmentMapping").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='employeeDepartmentMappingpanelBodyDiv' class='panel-body'>");
    $("#employeeDepartmentMappingpanelBodyDiv").append("<div id='employeeDepartmentMappingformBodyDiv' class='form-body '>");
    $("#employeeDepartmentMappingformBodyDiv").append("<div id='employeeDepartmentMappingMessageDiv' ></div>");

    $("#employeeDepartmentMappingformBodyDiv").append("<div id='FieldGroup' class='form-group'/>");

    getTwoColumnInRow("FieldGroup", "Row0", "Row0Col1", "Row0Col2");
    $("#Row0Col1").append(getLabel("Employee Code", "required") + "" + getDropDown("employeeCode"));


    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
    $("#Row1Col2").append(getLabel("Location", "required") + "" + getDropDown("location"));
    getLoggedInDDOInDropDown("ddo", "");
    getLoggedInLocationInDropDown("location", "");

    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    $("#Row1Col1").append("<input type='hidden' id='idValue' >");


    $("#employeeDepartmentMappingformBodyDiv").append('<div class="row" id="employeeDepartmentMappingformBodyDivRow">');
    $("#employeeDepartmentMappingformBodyDivRow").append('<div class="col-md-6" id="employeeDepartmentMappingformBodyDivCol">');
    $("#employeeDepartmentMappingformBodyDivCol").append('<label for="inputFirstName" class="control-label">Department<span class="require">*</span></label>');
    $("#employeeDepartmentMappingformBodyDiv").append("<div id='DeptsubRow' class='row' />");
    $("#DeptsubRow").append("<div id='DeptsubColf' class='col-lg-12' />");
    $("#DeptsubColf").append("<div id='DeptsubCol' class='col-lg-12' />");
    $("#DeptsubCol").append("<div id='DeptsubCol1' class='col-lg-5' />");
    $("#DeptsubCol").append("<div id='DeptsubCol2' class='col-lg-2' />");
    $("#DeptsubCol").append("<div id='DeptsubCol3' class='col-lg-5' />");
    $("#DeptsubCol1").append("<select name='from' id='multiselect' class='form-control ' size='8' multiple='multiple'></select>");
    $("#DeptsubCol2").append("<button type='button' id='multiselect_rightAll' class='btn btn-block'><i class='glyphicon glyphicon-forward'></i></button><button type='button' id='multiselect_rightSelected' class='btn btn-block'><i class='glyphicon glyphicon-chevron-right'></i></button><button type='button' id='multiselect_leftSelected' class='btn btn-block'><i class='glyphicon glyphicon-chevron-left'></i></button><button type='button' id='multiselect_leftAll' class='btn btn-block'><i class='glyphicon glyphicon-backward'></i></button>");
    $("#DeptMainDiv").append("<div id='DeptDiv' class='col-lg-4' />");
    $("#DeptsubCol3").append("<select name='to' id='multiselect_to' class='form-control col-lg-4' size='8' multiple='multiple'></select>");
    $("#employeeDepartmentMappingformBodyDiv").append('<div class="row" id="employeeDepartmentMappingErrDiv">');
    $("#employeeDepartmentMappingErrDiv").append("<span id='multiselect_toer'></span>");
    $('#multiselect').multiselect();
    getDepartmetsfromDDODepartmentMapping();
    getEmployeeCodeForEmployeeDepartmentMapping();
    $("#employeeDepartmentMappingformBodyDiv").append("<div id='employeeDepartmentMappingButtonRowDiv' class='row' />");

    $("#employeeDepartmentMappingButtonRowDiv").append("<div  class='col-xs-12' id='employeeDepartmentMappingButtonRow'/><center><button type='button'  id='empDeptButton' value='Save' class='btn btn-success bn'  onclick='validateEmployeeDepartmentMapping()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='createEmployeeDepartmentMapping()' class='btn btn-warning bn' id='ddoDeptReset' name='reset' value='reset'>Reset</button></center></div>");
    // }
    //   if (checkUserPrivelege(pvViewEmployeeDepartmentMapping)) {
    $("#employeeDepartmentMappingcolumnDiv").append("<div id='employeeDepartmentMappingListPanel' class='panel panel-blue' />");
    $("#employeeDepartmentMappingListPanel").append("<div id='employeeDepartmentMappingListPanelHeading' class='panel-heading' />");
    $("#employeeDepartmentMappingListPanelHeading").append("<h4 id='employeeDepartmentMappingfirstHeader1' class='panel-title' />");
    $("#employeeDepartmentMappingfirstHeader1").append("<class='panel-title' class='panel_font' data-parent='#accordion2'><center>List of Employeee Department Mapping(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colEmployeeDDODepartmentList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#employeeDepartmentMappingListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colEmployeeDDODepartmentList").click(function () {
        $("#collapseOne3").toggle();
        if ($("#colEmployeeDDODepartmentList span").hasClass("glyphicon-minus-sign")) {
            $("#colEmployeeDDODepartmentList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colEmployeeDDODepartmentList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });

    $("#collapseOne3").append("<div id='employeeDepartmentMappingPanellistpanelMainBody' class = 'panel-body' />");
    $("#employeeDepartmentMappingPanellistpanelMainBody").append("<div id='employeeDepartmentMappinglistMessageDiv'></div>");
    $("#employeeDepartmentMappingPanellistpanelMainBody").append("<div id='employeeDepartmentMappinglistpanelRow'  />");
    $("#employeeDepartmentMappinglistpanelRow").append("<div id='employeeDepartmentMappingLeftstatuslistpanelRow' class='table-responsive' />");
    viewemployeeDepartmentMappingList('employeeDepartmentMappingLeftstatuslistpanelRow');
    // }
}

function viewemployeeDepartmentMappingList(divId) {

    //   if (checkUserPrivelege(pvViewEmployeeDepartmentMapping)) {
    $("#" + divId).text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered' id='displayEmpDepartmentTable' />");
    $("#displayEmpDepartmentTable").append("<thead><tr id='EmployeeDepartmentMappingHeadId'>"
            + "<th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>DDO Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Location Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Department</th>"
            + "<th class='table_col_width'><i class='fa'></i>Employee Code</th>");

    // if (checkUserPrivelege(pvUpdateEmployeeDepartmentMapping)) {
    $("#EmployeeDepartmentMappingHeadId").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
    //  }
    //  if (checkUserPrivelege(pvDeleteEmployeeDepartmentMapping)) {
    $("#EmployeeDepartmentMappingHeadId").append("<th class='table_anchor_width'><i class='fa' ></i> Delete</th>");
//    }
    $.get(server_base_url + "/hrms/EmployeeMaster/EmployeeDepartmentMapping/View", {
        ddo: getUserSessionElement(seDDOId),
        location: getUserSessionElement(seLocationId)
    }).done(function (pdata) {

        pdata = JSON.parse(pdata)

        if (pdata == "") {
            displayLargeErrorMessagesInCenterInRed("employeeDepartmentMappinglistMessageDiv", noDataAvailable + "");
        } else if (pdata == fail) {
            displayErrorMessages("employeeDepartmentMappinglistMessageDiv", emptyListMessage + "");
        } else if (pdata == unauthorized) {
            displayErrorMessages("employeeDepartmentMappinglistMessageDiv", unauthorizedMessage + "");
        } else if (pdata == statusException) {
            displayErrorMessages("employeeDepartmentMappinglistMessageDiv", statusExceptionMessage + "");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata != null) {
            if (pdata.length > 0) {
                var sno = 0;
                $("#displayEmpDepartmentTable").append("<tbody id='displayEmpDepartmentTableBody'/>");
                for (var i = pdata.length - 1; i >= 0; i--) {

                    sno++;
                    var objJson = {
                        objId: pdata[i]._id.$oid,
                        ddo: pdata[i].ddo,
                        department: pdata[i].department,
                        location: pdata[i].location,
                        employeeCode: pdata[i].employeeCode,
                        employeeId: pdata[i].employeeId

                    };
                    objJson = JSON.stringify(objJson);

                    $("#displayEmpDepartmentTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td >" + pdata[i].ddo + "</td>"
                            + "<td >" + pdata[i].location + "</td>"
                            + "<td >" + pdata[i].department + "</td>"
                            + "<td >" + pdata[i].employeeCode + "</td>");
                    //  if (checkUserPrivelege(pvUpdateEmployeeDepartmentMapping)) {
                    $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updateEmployeeDepartmet('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");
                    // }
                    // if (checkUserPrivelege(pvDeleteEmployeeDepartmentMapping)) {
                    $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=deletePopUp('deleteEmployeeDepartmentData','createEmployeeDepartmentMapping','" + pdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                    //  }


                }
                $("#displayEmpDepartmentTable").dataTable();
            }
        }
    });
    //   }


}

function updateEmployeeDepartmet(obj) {

    obj = decodeURI(obj);
    obj = JSON.parse(obj);

    $("#employeeCode").val(obj.employeeCode);
    $("#idValue").val(obj.objId);
    getLoggedInDDOInDropDown("ddo", "");
    getLoggedInLocationInDropDown("location", "");
    getleftsideEmployeeDepartments(obj.department, "multiselect_to");
    getrightsideEmployeeDepartments(obj.department, "multiselect");
    $("#displayEmpDepartmentTableBody tr").css("background-color", "white");
    $("#displayEmpDepartmentTableBody tr" + "#" + obj.objId).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#employeeDepartmentMappingButtonRowDiv").text("").append("<div  class='col-xs-12' id='employeeDepartmentMappingButtonRow'/><center><button type='button'  id='empDeptButton' value='Update' class='btn btn-success bn'  onclick='validateEmployeeDepartmentMapping()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='createEmployeeDepartmentMapping()' class='btn btn-warning bn' id='ddoDeptReset' name='reset' value='reset'>Back</button></center></div>");


}


function getrightsideEmployeeDepartments(name, DivId) {

    $("#" + DivId).empty();
    $.get(server_base_url + "/hrms/EmployeeMaster/EmployeeDDODeptMapping/GetDDODepartment", {
        ddo: getUserSessionElement(seDDOId)
    }).done(function (pdata) {
        if (pdata != null) {
            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {
                    var flag = true;
                    for (var j = 0; j < name.length; j++) {
                        if (pdata[i].department == name[j]) {
                            flag = false;
                        }
                    }
                    if (flag == true) {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].department + "</option>");
                    }
                }
            }
        }
    });

}

function getleftsideEmployeeDepartments(name, DivId) {

    $("#" + DivId).empty();
    $.get(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function (pdata) {
        if (pdata != null) {
            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {
                    for (var j = 0; j < name.length; j++) {
                        if (pdata[i].department == name[j]) {
                            $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].department + "</option>");
                        }
                    }
                }
            }
        }
    });

}
function deleteEmployeeDepartmentData(id) {
    //if (checkUserPrivelege(pvDeleteEmployeeDepartmentMapping)) {
    var userid = getUserSessionElement("userId");
    $.post(server_base_url + "/hrms/EmployeeMaster/EmployeeDepartmentMapping/Delete", {
        id: id,
        userId: userid
    }).done(function (data) {

        if (data == fail) {
            displayErrorMessages("employeeDepartmentMappinglistMessageDiv", emptyListMessage + "");
        } else if (data == unauthorized) {
            displayErrorMessages("employeeDepartmentMappinglistMessageDiv", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("employeeDepartmentMappinglistMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("employeeDepartmentMappinglistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                createEmployeeDepartmentMapping();
            }, 4000);
        }
    });
    // }
}







function validateEmployeeDepartmentMapping() {

    var result = 1;
    var employeeCode = $("#employeeCode").val();
    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var deptList = [];
    var department = document.getElementById("multiselect_to");
    for (var i = 0; i < department.options.length; i++) {
        deptList.push(department.options[i].value);
    }

    if (employeeCode == null || employeeCode == "" || employeeCode == undefined || ddo == null || ddo == "" || ddo == undefined || location == "" || location == null || location == undefined || deptList.length === 0) {

        displayLargeErrorMessagesInCenterInRed("employeeDepartmentMappingMessageDiv", "Please fill all mandatory fields");
        result = 0;
    }

    if (result !== 0) {
        if ($("#empDeptButton").val() == "Save") {
            saveEmployeeDepartmentMapping();
        } else {
            updateEmployeeDepartmentMapping();
        }
    }

}

function updateEmployeeDepartmentMapping() {

    var employeeCode = $("#employeeCode").val();
    var ddo = $("#ddo").val();
    var id = $("#idValue").val();
    var location = $("#location").val();
    var deptList = [];
    var department = document.getElementById("multiselect_to");
    for (var i = 0; i < department.options.length; i++) {
        deptList.push(department.options[i].value);
    }

    var empDeptJson = {
        employeeCode: employeeCode,
        ddo: ddo,
        location: location,
        department: deptList
    };

    var empDeptStr = JSON.stringify(empDeptJson);

    $.post(server_base_url + "/hrms/EmployeeMaster/EmployeeDepartmentMapping/Update", {
        empDeptStr: empDeptStr,
        userId: getUserSessionElement("userId"),
        id: id
    }).done(function (data) {
        data = JSON.parse(data);
        if (data == fail) {
            displayErrorMessages("employeeDepartmentMappingMessageDiv", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displayErrorMessages("employeeDepartmentMappingMessageDiv", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("employeeDepartmentMappingMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("employeeDepartmentMappingMessageDiv", "No User available" + "");
        } else if (data == duplicate) {
            displayErrorMessages("employeeDepartmentMappingMessageDiv", existed + "");
            setTimeout(function () {
                createEmployeeDepartmentMapping();
            }, 1000);
        } else if (data != null) {
            displaySuccessMessages("employeeDepartmentMappingMessageDiv", successMessage, "");
            setTimeout(function () {
                createEmployeeDepartmentMapping();
            }, 4000);
        }

    });


}


function saveEmployeeDepartmentMapping() {

    var employeeCode = $("#employeeCode").val();
    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var deptList = [];
    var department = document.getElementById("multiselect_to");
    for (var i = 0; i < department.options.length; i++) {
        deptList.push(department.options[i].value);
    }

    var empDeptJson = {
        employeeCode: employeeCode,
        ddo: ddo,
        location: location,
        department: deptList
    };

    var empDeptStr = JSON.stringify(empDeptJson);

    $.post(server_base_url + "/hrms/EmployeeMaster/EmployeeDepartmentMapping/Save", {
        empDeptStr: empDeptStr,
        userId: getUserSessionElement("userId")
    }).done(function (data) {
        data = JSON.parse(data);
        if (data == fail) {
            displayErrorMessages("employeeDepartmentMappingMessageDiv", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displayErrorMessages("employeeDepartmentMappingMessageDiv", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("employeeDepartmentMappingMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("employeeDepartmentMappingMessageDiv", "No User available" + "");
        } else if (data === duplicate) {

            displayErrorMessages("employeeDepartmentMappingMessageDiv", existed + "");
            setTimeout(function () {
                createEmployeeDepartmentMapping();
            }, 4000);
        } else {
            displaySuccessMessages("employeeDepartmentMappingMessageDiv", successMessage, "");
            setTimeout(function () {
                createEmployeeDepartmentMapping();
            }, 4000);
        }

    });
}



function getDepartmetsfromDDODepartmentMapping() {
    $.get(server_base_url + "/hrms/EmployeeMaster/EmployeeDDODeptMapping/GetDDODepartment", {
        ddo: getUserSessionElement(seDDOId)
    }).done(function (bdata) {

        for (var i = 0; i < bdata.length; i++) {
            $("#multiselect").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].department + "</option>");

        }
    });

}
function getEmployeeCodeForEmployeeDepartmentMapping() {

    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear !== null || currentFinancialYear !== "" || currentFinancialYear !== undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];
    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: getUserSessionElement(seDDOId),
        fromDt: fromDate,
        toDate: toDate,
        location: getUserSessionElement(seLocationId)

    }).done(function (data) {
        data = JSON.parse(data);

        if (data === fail || data === "" || data === undefined) {
            $("#employeeCode").text("").append("<option  value='' selected disabled>---No data available ----</option>");
        } else if (data !== null) {
            $("#employeeCode").text("").append("<option  value='' selected disabled>----[Employee Code]-Employee Name ----</option>");
            for (var i = 0; i < data.length; i++)
            {
                $("#employeeCode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
            }
        }

    });
}
