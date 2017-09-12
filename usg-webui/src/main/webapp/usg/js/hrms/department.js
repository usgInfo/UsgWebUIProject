//HRMS >> Department Master
function departmentmaster(divId) {
    
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">Department Master</a>');
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Salary Master</a></label> >> <label>Department Master</label>');

    $("#" + divId).text("").append("<div id='testMainDivId' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    if (checkUserPrivelege(pvCreateDepartment)) {
       $("#mainTabMenu").append("<div id='tableHeader'/>");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Department Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colDepartment'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#colDepartment").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colDepartment span").hasClass("glyphicon-minus-sign")) {
            $("#colDepartment").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colDepartment").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<div id='pregsuccessBefore'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    //department 
    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup").append("<input type='hidden' id='dId' >");
    getLabelInputInRow("FieldGroup", "Department", "required", "Row0", "Row0Col1", "department", "onkeypress='return acceptAlphanumeric(event)'");

        $("#FieldGroup").append("<div id='panelRow1' class='row' />");
        $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='departmentValidation()'>Save</button>&nbsp&nbsp&nbsp;<button type='button' onclick='wipeAllDepartmentData()' class='btn btn-warning mr5' name='reset'   id='resetBackBtnId' value='reset'>Reset</button></center></div>");
    }
    
     $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

   
    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
    viewDepartmentList("tableHeaderForList");
    setTimeout(function () {
        $("#pregsuccessBefore").text("");
    }, 2100);
//  $("input").on("keypress", function(e) {
//    if (e.which === 32 && !this.value.length)
//    e.preventDefault();
//    });

}
function departmentValidation() {
    var saveorupdate = $("#saveorupdate").val();
    $("#departmentErr").text("");
    $("#pregsuccessBefore").text("");
    var department = $("#department").val();
    var result = 1;
    if (preValidation(department)) {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
        return false;
    } else {

        if (department != "") {
//            if (!department.match((Category()))) {
//                $("#department").focus();
//                displaySmallErrorMessagesInRed("departmentErr", "Please enter valid department name.");
//                result = 0;
//            }
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveDepartmentDetails();
            } else {
                updateDepartmentDetails();
            }
        }
    }
}
function saveDepartmentDetails() {
    if (checkUserPrivelege(pvCreateDepartment)) {
        var department = $('#department').val();
        $.post(server_base_url + "hrms/salary/Department/Save", {
            department: department,
            userid: getUserSessionElement("userId")
    }).done(function (data) {
      
        if (data == fail) {
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate_Message) {
           displayErrorMessages("pregsuccessBefore"," "+ existed+ "");
            //categoryEnableButton();
            setTimeout(function () {
               departmentmaster("dashBoardBodyMainDiv");
            }, 2100);


           } else {
                disableDiv("FieldGroup");
            setTimeout(function () {
                departmentmaster("dashBoardBodyMainDiv");
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
            }, 4000);
        }
    });
    }
}
function updateDepartmentDetails() {
    if (checkUserPrivelege(pvUpdateDepartment)) {
        var id = $('#dId').val();
        var department = $('#department').val();
        $.post(server_base_url + "hrms/salary/Department/Update", {
            department: department,
            id: id,
            userid: getUserSessionElement("userId")
    }).done(function (data) {
       // alert(data);
        if (data == fail) {
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
        } else if (data == unauthorized||data.statuscode==unauthorized) {
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate_Message) {
            displayErrorMessages("pregsuccessBefore",""+ existed + "");
            //categoryEnableButton();
            setTimeout(function () {
               departmentmaster("dashBoardBodyMainDiv");
            }, 2100);
        } else {
            disableDiv("FieldGroup");
            setTimeout(function () {
                departmentmaster("dashBoardBodyMainDiv");
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
            }, 4000);
        }
    });
    }
}
function wipeAllDepartmentData() {
    $('#department').val("");
    $('#departmentErr').text("");
    $("#pregsuccessBefore").text("");
    $("#ErrorDiv").text("");
}
function viewDepartmentList(divId)
{
    if (checkUserPrivelege(pvViewDepartment)) {
        $("#" + divId).text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Departments</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colDepartmentList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colDepartmentList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colDepartmentList span").hasClass("glyphicon-minus-sign")) {
            $("#colDepartmentList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colDepartmentList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-reponsive' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");
        $("#listpanelRow").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displayDepartmentTable' />");
        $("#displayDepartmentTable").append("<thead><tr id='departmentTableHeadId'>"
                + " <th class='sno_width'> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i> Department Name</th>");
        if (checkUserPrivelege(pvUpdateDepartment)) {
            $("#departmentTableHeadId").append("<th class='table_anchor_width'><i ></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteDepartment)) {
            $("#departmentTableHeadId").append("<th class='table_anchor_width'><i ></i> Delete</th>");
        }
        $.get(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function (bdata) {
        if (bdata == fail) {
           displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFoundMessage + "<br /><br />");
           displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + NoDataFoundMessage + "<br /><br />")
        } else if (bdata == unauthorized||bdata.statuscode == unauthorized) {
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
                    var sno = 0;
                    $("#displayDepartmentTable").append("<tbody id='displayDepartmentTableBody' class='table-striped table-bordered' />");
//                    for (var i = bdata.length-1; i >=0 ; i--) {
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var departmentjson = {
                                dId: bdata[i]._id.$oid,
                                department: bdata[i].department
                            };
                            departmentjson = JSON.stringify(departmentjson);
                            $("#displayDepartmentTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].department + "</td>");
                       if (checkUserPrivelege(pvUpdateDepartment)) {
                                $("#"+ bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatedepartment('" + encodeURI(departmentjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                       }if (checkUserPrivelege(pvDeleteDepartment)) {
                                $("#"+ bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletedepartment','','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");}
                    }
                    $('#displayDepartmentTable').dataTable();
                    $('#displayDepartmentTable').append("</table>");
                }
            }
        }
        });
    }
}
function updatedepartment(obj) {
    if (checkUserPrivelege(pvUpdateDepartment)) {
        $("#pregsuccessBefore").text("");
        obj = JSON.parse(decodeURI(obj));
        $("#department").val(obj.department);
        $("#dId").val(obj.dId);
    $("#displayDepartmentTableBody tr").css("background-color", "white");
    $("#displayDepartmentTableBody tr" + "#" + obj.dId).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#saveorupdate").val("update");
    $("#saveupdatebutton").text("").text("Update");
    addButtonOnclickFunction("resetBackBtnId", "Back", "departmentmaster('" + DashboardMainDivID + "')");
    }
}
function deletedepartment(id) {
    if (checkUserPrivelege(pvDeleteDepartment)) {
        $.post(server_base_url + "hrms/salary/Department/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
    }).done(function (data) {
        if (data == fail) {
            displayErrorMessages("authonticationMsgId", "Invalid username / password");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            displayErrorMessages("authonticationMsgId", unauthorizedMessage);
        } else if (data == statusException) {
            displayErrorMessages("authonticationMsgId", statusExceptionMessage);
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("authonticationMsgId", "No User available");
        } else if (data ==delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("ErrorDiv", "" + delete_map_messages, "");
            setTimeout(function() {
                 viewDepartmentList("tableHeaderForList");
            }, 1000);
        } else {

                displaySuccessMessages("ErrorDiv", "Deleted Succesfully");
            setTimeout(function () {
                viewDepartmentList("tableHeaderForList");
            }, 4000);
        }
    });
    }
}
