/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayhrmsDDODepartment() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>>> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>DDO Department Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="ddoDepartmentMainDiv"/>');
    $("#ddoDepartmentMainDiv").text("").append("<div id='ddoDepartmentcolumnDiv' >");
    
    if (checkUserPrivelege(pvCreateDDODepartmentMapping)) {
        
        $("#ddoDepartmentcolumnDiv").append("<div id='ddoDepartmentFirstPanel' class='panel panel-blue' />");
        $("#ddoDepartmentFirstPanel").append("<div id='ddoDepartmentfirstPanelHeading' class='panel-heading' />");
        $("#ddoDepartmentfirstPanelHeading").append("<h4 id='ddoDepartmenttableHeader1' class='panel-title' />");
        $("#ddoDepartmenttableHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>DDO Department Mapping</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colDDODepartmentMapping'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#ddoDepartmentFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#colDDODepartmentMapping").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colDDODepartmentMapping span").hasClass("glyphicon-minus-sign")) {
                $("#colDDODepartmentMapping").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colDDODepartmentMapping").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='ddoDepartmentpanelBodyDiv' class='panel-body'>");
        $("#ddoDepartmentpanelBodyDiv").append("<div id='ddoDepartmentformBodyDiv' class='form-body '>");
        $("#ddoDepartmentformBodyDiv").append("<div id='ddoDepartmentMessageDiv' ></div>");
        $("#ddoDepartmentformBodyDiv").append('<div class="row" id="ddoDepartmentGroupDiv"/>');
        $("#ddoDepartmentGroupDiv").append('<div class="col-md-6" id="ddoDepartmentGroupDiv1"/>');
        $("#ddoDepartmentGroupDiv1").append('<label for="ddo" class="control-label" id="control_label">DDO<span class="require">*</span></label>');
        $("#ddoDepartmentGroupDiv1").append('<div class="form-group" id="ddoDiv">');
        $("#ddoDiv").append('<select id="ddo" class="form-control"></select>');
        getLoggedInDDOInDropDown("ddo", "");
        $("#ddoDiv").append("<span id='ddoErr'></span>");
        
        $("#ddoDepartmentformBodyDiv").append('<div class="row" id="ddoDepartmentformBodyDivRow">');
        $("#ddoDepartmentformBodyDivRow").append('<div class="col-md-6" id="ddoDepartmentformBodyDivCol">');
        $("#ddoDepartmentformBodyDivCol").append('<label for="inputFirstName" class="control-label">Department<span class="require">*</span></label>');
        $("#ddoDepartmentformBodyDiv").append("<div id='DeptsubRow' class='row' />");
        $("#DeptsubRow").append("<div id='DeptsubColf' class='col-lg-12' />");
        $("#DeptsubColf").append("<div id='DeptsubCol' class='col-lg-12' />");
        $("#DeptsubCol").append("<div id='DeptsubCol1' class='col-lg-5' />");
        $("#DeptsubCol").append("<div id='DeptsubCol2' class='col-lg-2' />");
        $("#DeptsubCol").append("<div id='DeptsubCol3' class='col-lg-5' />");
        $("#DeptsubCol1").append("<select name='from' id='multiselect' class='form-control ' size='8' multiple='multiple'></select>");
        $("#DeptsubCol2").append("<button type='button' id='multiselect_rightAll' class='btn btn-block'><i class='glyphicon glyphicon-forward'></i></button><button type='button' id='multiselect_rightSelected' class='btn btn-block'><i class='glyphicon glyphicon-chevron-right'></i></button><button type='button' id='multiselect_leftSelected' class='btn btn-block'><i class='glyphicon glyphicon-chevron-left'></i></button><button type='button' id='multiselect_leftAll' class='btn btn-block'><i class='glyphicon glyphicon-backward'></i></button>");
        $("#DeptMainDiv").append("<div id='DeptDiv' class='col-lg-4' />");
        $("#DeptsubCol3").append("<select name='to' id='multiselect_to' class='form-control col-lg-4' size='8' multiple='multiple'></select>");
        $("#ddoDepartmentformBodyDiv").append('<div class="row" id="ddoDepartmentErrDiv">');
        $("#ddoDepartmentErrDiv").append("<span id='multiselect_toer'></span>");
        $('#multiselect').multiselect();
        addDepartmetformapp();
        $("#ddoDepartmentformBodyDiv").append("<div id='ddoDepartmentButtonRowDiv' class='row' />");

        $("#ddoDepartmentButtonRowDiv").append("<div  class='col-xs-12' id='ddoDepartmentButtonRow'/><center><button type='button'  id='ddoDeptSave' value='Save' class='btn btn-success bn'  onclick='validateDDOMapping()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetddoDept()' class='btn btn-warning bn' id='ddoDeptReset' name='reset' value='reset'>Reset</button></center></div>");
    }
    if (checkUserPrivelege(pvViewDDODepartmentMapping)) {
        $("#ddoDepartmentcolumnDiv").append("<div id='ddoDepartmentListPanel' class='panel panel-blue' />");
        $("#ddoDepartmentListPanel").append("<div id='ddoDepartmentListPanelHeading' class='panel-heading' />");
        $("#ddoDepartmentListPanelHeading").append("<h4 id='ddoDepartmentfirstHeader1' class='panel-title' />");
        $("#ddoDepartmentfirstHeader1").append("<class='panel-title' class='panel_font' data-parent='#accordion2'><center>List of DDO Departments</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colDDODepartmentList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#ddoDepartmentListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colDDODepartmentList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colDDODepartmentList span").hasClass("glyphicon-minus-sign")) {
                $("#colDDODepartmentList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colDDODepartmentList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });

        $("#collapseOne3").append("<div id='ddoDepartmentPanellistpanelMainBody' class = 'panel-body' />");
        $("#ddoDepartmentPanellistpanelMainBody").append("<div id='ddoDepartmentlistMessageDiv'></div>");
        $("#ddoDepartmentPanellistpanelMainBody").append("<div id='ddoDepartmentlistpanelRow' class='row' />");
        $("#ddoDepartmentlistpanelRow").append("<div id='ddoDepartmentLeftstatuslistpanelRow' class='table-responsive' />");
        viewddoDepartmentList('ddoDepartmentLeftstatuslistpanelRow');
    }
}
function resetddoDept() {

    $("#pregppid").text("");
    $("#multiselect_toer").text("").val();
    $("#pregsuccessBefore").text("");
    $("#multiselect_leftAll").trigger('click');
    $("#multiselect_to").text("").val();
}
function validateDDOMapping() {

    var ddo = $("#ddo").val();

    var rolesList = [];

    var abc = document.getElementById("multiselect_to");

    for (var i = 0; i < abc.options.length; i++) {
        rolesList.push(abc.options[i].value);

    }

    if (ddo == "" || ddo == null || rolesList == null || rolesList == "") {
        $("#ddoDepartmentMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill all mandatory fields<strong></div></center>");

    } else {
        saveDDOMapping();
    }
}

function saveDDOMapping() {
    if (checkUserPrivelege(pvCreateDDODepartmentMapping)) {
        var rolesList = [];
        var abc = document.getElementById("multiselect_to");
        var ddo = $("#ddo").val();
        for (var i = 0; i < abc.options.length; i++) {
            rolesList.push(abc.options[i].value);
        }

        var json = {
            ddo: ddo,
            departmentList: rolesList
        };
        json = JSON.stringify(json);

        var id = getUserSessionElement("userId");

        $.post(server_base_url + "hrms/common/DDODepartmentMapping/Save", {
            ddoJson: json,
            userid: id
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("ddoDepartmentMessageDiv", "Invalid username / password" + "");
            } else if (data == unauthorized) {
                displayErrorMessages("ddoDepartmentMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("ddoDepartmentMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("ddoDepartmentMessageDiv", "No User available" + "");
            } else if (data == duplicate) {
                displayErrorMessages("ddoDepartmentMessageDiv", existed + "");
                setTimeout(function () {
                    displayhrmsDDODepartment();
                }, 1000);

            } else if (data != null) {
                $("#ddo").prop("disabled", true);
                $("#multiselect").attr('disabled', true);
                $("#multiselect_to").attr('disabled', true);
                displaySuccessMessages("ddoDepartmentMessageDiv", successMessage, "");
                setTimeout(function () {

                    displayhrmsDDODepartment();

                }, 4000);
            }

        });
    }
}
function viewddoDepartmentList(divId) {
    if (checkUserPrivelege(pvViewDDODepartmentMapping)) {
        $("#" + divId).text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
        $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
        $("#viewDataTableDiv").append("<table class='table table-bordered' id='displayddoDepartmentTable' />");
        $("#displayddoDepartmentTable").append("<thead><tr id='ddoDepartmentMappingHeadId'>"
                + " <th class='sno_width'> S.No</th>"
                + "<th class='table_col_width'><i class='fa'></i>DDO Name</th>"
                + "<th class='table_col_width'><i class='fa'></i>Department</th>");
        if (checkUserPrivelege(pvUpdateDDODepartmentMapping)) {
            $("#ddoDepartmentMappingHeadId").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteDDODepartmentMapping)) {
            $("#ddoDepartmentMappingHeadId").append("<th class='table_anchor_width'><i class='fa' ></i> Delete</th>");
        }
        $.get(server_base_url + "hrms/common/DdoDepartmentMapping/View", {
            ddo: getUserSessionElement(seDDOId)
        }).done(function (pdata) {

            if (pdata == 500) {
                displayLargeErrorMessagesInCenterInRed("ddoDepartmentlistMessageDiv", emptyListMessage + "");
            } else if (pdata == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("ddoDepartmentlistMessageDiv", unauthorizedMessage + "");
            } else if (pdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("ddoDepartmentlistMessageDiv", statusExceptionMessage + "");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata != null) {
                if (pdata.length > 0) {
                    var sno = 0;
                    $("#displayddoDepartmentTable").append("<tbody id='displayddoDepartmentTableBody'/>");
                    for (var i = pdata.length - 1; i >= 0; i--) {

                        sno++;
                        var objJson = {
                            objId: pdata[i]._id.$oid,
                            ddo: pdata[i].ddo,
                            departmentList: pdata[i].departmentList
                        }
                        objJson = JSON.stringify(objJson);

                        $("#displayddoDepartmentTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td >" + pdata[i].ddo + "</td>"
                                + "<td >" + pdata[i].departmentList + "</td>");
                        if (checkUserPrivelege(pvUpdateDDODepartmentMapping)) {
                            $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updateDDoDepartmet('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");
                        }
                        if (checkUserPrivelege(pvDeleteDDODepartmentMapping)) {
                            $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=deletePopUp('deleteDDODepartmentData','displayhrmsDDODepartment','" + pdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                        }


                    }
                    $("#displayddoDepartmentTable").dataTable();
                }
            }
        });
    }
}
function deleteDDODepartment(id) {
    if (checkUserPrivelege(pvDeleteDDODepartmentMapping)) {
        if (confirm("Are you sure?")) {
            $(this).closest('tr').remove();
            deleteDDODepartmentData(id);
        }
    }
}

function deleteDDODepartmentData(id) {
    if (checkUserPrivelege(pvDeleteDDODepartmentMapping)) {
        var userid = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/DDODepartmentMapping/Delete", {
            id: id,
            userId: userid
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("ddoDepartmentlistMessageDiv", emptyListMessage + "");
            } else if (data == unauthorized) {
                displayErrorMessages("ddoDepartmentlistMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("ddoDepartmentlistMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == delete_map) {
            
                displayErrorMessages("ddoDepartmentlistMessageDiv", "This Data   " + delete_map_message, "");
                setTimeout(function () {
                    $("#tablesuccessBefore").text("");
                }, 2100);
            } else {
                displaySuccessMessages("ddoDepartmentlistMessageDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    displayhrmsDDODepartment();
                }, 4000);
            }
        });
    }
}
function updateDDoDepartmet(obj) {
    if (checkUserPrivelege(pvUpdateDDODepartmentMapping)) {
        obj = decodeURI(obj);
        obj = JSON.parse(obj);
        $("#ddo").prop("readonly", false);
        $("#multiselect_to").prop("readonly", false);
        $("#multiselect").prop("readonly", false);
        getrightsideDepartments(obj.departmentList, "multiselect");
        getleftsideDepartments(obj.departmentList, "multiselect_to");
        $("#displayddoDepartmentTableBody tr").css("background-color", "white");
        $("#displayddoDepartmentTableBody tr" + "#" + obj.objId).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#ddo option:contains(" + obj.ddo + ")").attr('selected', 'selected');
        $("#ddoDepartmentButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updateDDoDepartmetData('" + obj.objId + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayhrmsDDODepartment()' class='btn btn-warning bn' >Back</button></center>");
    }
}

function addDepartmentformapp() {
    $.get(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#multiselect").append("<option value='" + subData._id.$oid + "'>" + subData.department + "</option>");
            }
        }
    });
}
function updateDDoDepartmetData(id) {
    if (checkUserPrivelege(pvUpdateDDODepartmentMapping)) {
        var rolesList = [];
        var abc = document.getElementById("multiselect_to");
        var ddo = $("#ddo").val();
        for (var i = 0; i < abc.options.length; i++) {
            rolesList.push(abc.options[i].value);
        }

        var json = {
            ddo: ddo,
            departmentList: rolesList
        };


        json = JSON.stringify(json);

        var userid = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/DDODepartMapping/Update", {
            ddoJson: json,
            id: id,
            userid: userid
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("ddoDepartmentMessageDiv", existed, "");
                setTimeout(function () {
                    $("#ddoDepartmentMessageDiv").text("");
                }, 1000);
            } else if (data == unauthorized) {
                displayErrorMessages("ddoDepartmentMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("ddoDepartmentMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate) {
                displayErrorMessages("ddoDepartmentMessageDiv", existed, "");
                setTimeout(function () {
                    displayhrmsDDODepartment();
                }, 1000);

            } else if (data != null) {
                $("#ddo").focus();
                $("#ddo").prop("disabled", true);
                $("#multiselect").attr('disabled', true);
                $("#multiselect_to").attr('disabled', true);
                displaySuccessMessages("ddoDepartmentMessageDiv", updateSuccessMessage, "");
                setTimeout(function () {

                    displayhrmsDDODepartment();

                }, 4000);

            }
        });
    }
}
function getrightsideDepartments(name, DivId) {
   
    $("#" + DivId).empty();
    $.get(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function (pdata) {

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
    });

}


function getleftsideDepartments(name, DivId)
{

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
function addDepartmetformapp()
{

    $.get(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function (bdata) {

        for (var i = 0; i < bdata.length; i++) {
            $("#multiselect").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].department + "</option>");

        }
    });
}

function getDDOfordepartmentmap(name, divId) {
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (pdata) {

        for (var i = 0; i < pdata.length; i++) {

            $("#ddo").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
        }
    });
}










