//HRMS >> Class Master
function classmaster(divId) {
     $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">Class Master</a>');
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Salary Master</a></label> >> <label>Class Master</label>');
    $("#" + divId).text("").append("<div id='testMainDivId'  />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    if (checkUserPrivelege(pvCreateClass)) {
        $("#mainTabMenu").append("<div id='tableHeader'/>");
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Class Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colClass'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#colClass").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colClass span").hasClass("glyphicon-minus-sign")) {
            $("#colClass").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colClass").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<div id='pregsuccessBefore'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    //class 
    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup").append("<input type='hidden' id='id' >");
    getLabelInputInRow("FieldGroup", "Class", "required", "Row0", "Row0Col1", "name");
    getLabelDropDownInRow("FieldGroup", "Gad-Nongad", "required", "Row1", "Row1Col1", "gadNonGad");
    getLabelRadioInRow("FieldGroup", "Is Teaching", "", "Row2", "Row2Col1", "teaching", "", "name");
    getLabelRadioInRow("FieldGroup", "Is Non Teaching", "", "Row3", "Row3Col1", "nonTeaching", "", "name");
    $("#FieldGroup").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='classValidation()'>Save</button>&nbsp&nbsp&nbsp;<button type='button' onclick= resetAllValuesInSpecifiedDiv('FieldGroup'); class='btn btn-warning mr5' name='reset' id='resetBackBtnId' value='reset'>Reset</button></center></div>");

     $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    
    }
    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
    viewOption("hrms/common/Gazetted/View", "", "gazitted", "gadNonGad", "Gad-Nongad");
    if (checkUserPrivelege(pvViewClass)) {
    viewClassList("tableHeaderForList");}
    setTimeout(function() {
        $("#pregsuccessBefore").text("");
    }, 50);
}
function classValidation() {
    var saveorupdate = $("#saveorupdate").val();
    if ($('#teaching').is(':checked')) {
        var teaching = "Yes";
        var nonTeaching = "No";
    } else if ($('#nonTeaching').is(':checked')) {
        var teaching = "No";
        var nonTeaching = "Yes";
    }
    var name = $("#name").val();
    var gadNonGad = $("#gadNonGad").val();
    var result = 1;
    if (teaching == "") {
        $("#teaching").focus();
        displaySmallErrorMessagesInRed("teachingErr", "Please select the  option .");
        result = 0;
    } else if (teaching != "") {
        $("#teachingErr").text("");
    }
    if (nonTeaching == "") {
        $("#nonTeaching").focus();
        displaySmallErrorMessagesInRed("nonTeachingErr", "Please select the  option .");
        result = 0;
    } else if (nonTeaching != "") {
        $("#nonTeachingErr").text("");
    }
    //(gadNonGad);
    if (gadNonGad == null || gadNonGad =="") {
        $("#gadNonGad").focus();
        displaySmallErrorMessagesInRed("gadNonGadErr", "Please select the  option .");
        result = 0;
    } else if (gadNonGad != null) {
    }
    if (name == "") {
        $("#name").focus();
        displaySmallErrorMessagesInRed("nameErr", "Please enter Name.");
        result = 0;
    } else if (name != "") {
        if (!name.match((alphaNumericPattern()))) {
            displaySmallErrorMessagesInRed("nameErr", "Please enter valid name.");
            result = 0;
        }
        $("#nameErr").text("");
    }
    if (result != 0) {
        if (saveorupdate == "save") {
            saveClassDetails();
        } else {
            updateClassDetails();
        }
    }
}
function saveClassDetails() {
    if (checkUserPrivelege(pvCreateClass)) {
        var name = $("#name").val();
        var gadNonGad = $("#gadNonGad").val();
        var teaching = "No";
        var nonTeaching = "No";
        if ($('#teaching').is(':checked')) {
            teaching = "Yes";
            nonTeaching = "No";
        } else if ($('#nonTeaching').is(':checked')) {
            teaching = "No";
            nonTeaching = "Yes";
    }

    var classJson = {
        name: name,
        gadNonGad: gadNonGad,
        teaching: teaching,
        nonTeaching: nonTeaching
    };
    $.post(server_base_url + "hrms/salary/Class/Save", {
        classJson: JSON.stringify(classJson),
        userId: getUserSessionElement("userId")
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
            displayErrorMessages("pregsuccessBefore", "" + existed + "");
             setTimeout(function () {
                 classmaster("dashBoardBodyMainDiv");
            }, 2000);
        }  else {
            disableDiv("FieldGroup");
            setTimeout(function () {
                classmaster("dashBoardBodyMainDiv");
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
            }, 2000);
        }
        });
    }
}
function updateClassDetails() {
    if (checkUserPrivelege(pvUpdateClass)) {
        var id = $("#id").val();
        var name = $("#name").val();
        var gadNonGad = $("#gadNonGad").val();
        var teaching = "No";
        var nonTeaching = "No";
        if ($('#teaching').is(':checked')) {
            teaching = "Yes";
            nonTeaching = "No";
        } else if ($('#nonTeaching').is(':checked')) {
            teaching = "No";
            nonTeaching = "Yes";
    }
    var classJson = {
        name: name,
        gadNonGad: gadNonGad,
        teaching: teaching,
        nonTeaching: nonTeaching
    };
    $.post(server_base_url + "hrms/salary/Class/Update", {
        classJson: JSON.stringify(classJson),
        id: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {
        //alert(data);
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
        }  else if (data == duplicate_Message) {
            displayErrorMessages("pregsuccessBefore", "" + existed + "");
             setTimeout(function () {
                 classmaster("dashBoardBodyMainDiv");
            }, 5000);
        } else {
            disableDiv("FieldGroup");
            setTimeout(function () {
                classmaster("dashBoardBodyMainDiv");
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
            }, 4000);
        }
        });
    }
}
function wipeAllClassData() {

    $('#name').val("");
    $('#gadNonGad').val("");
}
function viewClassList(divId)
{


    if (checkUserPrivelege(pvViewClass)) {
        $("#" + divId).text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Classes</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colClassList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colClassList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colClassList span").hasClass("glyphicon-minus-sign")) {
            $("#colClassList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colClassList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");
        $("#listpanelRow").append("<div class='' id='viewUserSectionTableDiv' />");
       $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displayClassTable' />");
        $("#displayClassTable").append("<thead class=''><tr id='classTableHeadId'>"
                + " <th class='sno_width'> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Class Name</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Gad-Nongad</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Is Teaching?</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Is Non Teaching</th>");
        if (checkUserPrivelege(pvUpdateClass)) {
            $("#classTableHeadId").append("<th class='table_anchor_width'><i ></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteClass)) {
            $("#classTableHeadId").append("<th class='table_anchor_width'><i ></i> Delete</th>");
        }
        $.get(server_base_url + "hrms/salary/Class/ViewList", {
    }).done(function (bdata) {
            if (bdata == fail) { 
            displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFoundMessage + "<br /><br />");
            displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFoundMessage + "<br /><br />")
        } else if (bdata.statuscode == unauthorized) {
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
                        $("#displayClassTable").append("<tbody id='displayClassTableBody' class='table-striped table-bordered' />");
//                    for (var i = bdata.length-1; i >=0 ; i--) {
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var classjson = {
                                id: bdata[i]._id.$oid,
                                name: bdata[i].name,
                                gadNonGad: bdata[i].gadNonGad,
                                teaching: bdata[i].teaching,
                                nonTeaching: bdata[i].nonTeaching
                            };
                            classjson = JSON.stringify(classjson);
                            $("#displayClassTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].name + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].gadNonGad + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].teaching + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].nonTeaching + "</td>");
                           
                    if (checkUserPrivelege(pvUpdateClass)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateclass('" + encodeURI(classjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }if (checkUserPrivelege(pvDeleteClass)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteclass','viewClassList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                            }
                        }
                        $('#displayClassTable').dataTable();
                        $('#displayClassTable').append("</table>");
                    }
                }
            }
        });
    }
}
function updateclass(obj) {
    scrolupfunction();
    if (checkUserPrivelege(pvUpdateClass)) {
        $("#pregsuccessBefore").text("");
        obj = JSON.parse(decodeURI(obj));
        $("#name").val(obj.name);
        $("#id").val(obj.id);
        if (obj.teaching == "Yes")
            $("#teaching").prop("checked", "checked");
        if (obj.nonTeaching == "Yes")
            $("#nonTeaching").prop("checked", "checked");

        $("#gadNonGad option:contains(" + obj.gadNonGad + ")").attr('selected', 'selected');
    $("#displayClassTableBody tr").css("background-color", "white");
    $("#displayClassTableBody tr" + "#" + obj.id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#saveorupdate").val("update");
    $("#saveupdatebutton").text("").text("Update");
     
  addButtonOnclickFunction("resetBackBtnId", "Back", "classmaster('" + DashboardMainDivID + "')");
  
    }
}
function deleteclass(id) {
    if (checkUserPrivelege(pvDeleteClass)) {

    
        $.post(server_base_url + "hrms/salary/Class/Delete", {
            id: id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("authonticationMsgId", "Invalid username / password");
            } else if (data == unauthorized) {
                displayErrorMessages("authonticationMsgId", unauthorizedMessage);
            } else if (data == statusException) {
                displayErrorMessages("authonticationMsgId", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("authonticationMsgId", "No User available");

            }else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("ErrorDiv", "" + delete_map_messages, "");
            setTimeout(function () {
                $("#authonticationMsgId").text("");
            }, 1000);
        } else {
//                setTimeout(function () {

                displaySuccessMessages("ErrorDiv", "Deleted Succesfully");
                setTimeout(function() {
                    viewClassList("tableHeaderForList");
            }, 4000);
//                }, 1000);

            }
        });
    }
}
