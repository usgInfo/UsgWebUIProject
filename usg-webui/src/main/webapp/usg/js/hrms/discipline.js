/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function disciplineMaster() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">Discipline Master</a>');
    $("#dashboardBodyMainDiv").text("").append('<div id="disciplineMainDiv"/>');
    $("#disciplineMainDiv").text("").append("<div id='mainTabMenu'  />");
    $("#mainTabMenu").append("<div id='tableHeader'/>");
    if (checkUserPrivelege(pvCreateDiscipline)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");

        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Discipline Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colDiscipline'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#colDiscipline").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colDiscipline span").hasClass("glyphicon-minus-sign")) {
                $("#colDiscipline").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colDiscipline").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='disciplinepanelMainBody' class = 'panel-body' />");

        $("#disciplinepanelMainBody").append("<div id='disciplinepanelRow' class='row' />");

        $("#disciplinepanelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#disciplinepanelRow").append("<div id='disciplineMessageDiv'></div>");
        $("#disciplinepanelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
        $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');
        $("#formBodyPalDiv").append('<div  id="disciplineFieldDiv"  class="form-group" />');
        $("#disciplineFieldDiv").append('<label for="disciplineName"  class="col-md-3 control-label">Discipline Name<span class="require">*</span></label>');
        $("#disciplineFieldDiv").append("<span id='pregppiddiscipline'></span>");
        $("#disciplineFieldDiv").append('<div id="colmd9" class="col-md-9" />');
        $("#colmd9").append('<div  id="inputIconright" class=""/>');
        $("#inputIconright").append('<i class=""></i><input type="text"  id="disciplineName" placeholder="Discipline Name" class="form-control"/>');
        $("#colmd9").append("<span id='pregppidsection'></span>");
        $("#panelBodyDiv").append('<div id="panelRowa2" />');
        $("#panelRowa2").append('<div  id="disciplineButton" class="" />');
        $("#disciplineButton").append('<center><button id="sectionButtonSave" type="submit" onclick="saveDiscipline()" class="btn btn-success mr5">Save</button>&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetDiscipline()">Reset</button></center>');

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

    }
    if (checkUserPrivelege(pvViewDiscipline)) {
        viewdiscipline();
    }

}
function resetDiscipline()
{
    $("#disciplineName").val("");
    $("#pregppiddiscipline").text("");
    $("#disciplineMessageDiv").text("");
    removeSomeClass("disciplineFieldDiv", "has-error");
}



function saveDiscipline() {
    if (checkUserPrivelege(pvCreateDiscipline)) {
        var disciplineName = $("#disciplineName").val();
        $("#pregppidsection").text("");
        $("#disciplineMessageDiv").text("").val();
        if (disciplineName == "" || disciplineName == "undefined") {
            addSomeClass("disciplineFieldDiv", "has-error");
            $("#disciplineName").focus();
            $("#disciplineMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill the mandatory field<strong></div></center>");
            return false;
        } else if (disciplineName != "") {
        }




        $.post(server_base_url + "/hrms/salary/Discipline/Save", {
            discipline: disciplineName,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data.statuscode == fail) {
                displayErrorMessages("disciplinelistmsgDiv", "" + failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("disciplinelistmsgDiv", "" + unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displayErrorMessages("disciplinelistmsgDiv", "" + statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();

            } else if (data == duplicate_Message) {


                $("#disciplineName").prop("disabled", true);
                $("#updateButton").attr('disabled', true);
                $("#ddoUpdateReset").attr('disabled', true);
                displayErrorMessages("disciplineMessageDiv", "" + existed + "");
                setTimeout(function () {
                    disciplineMaster();
                }, 600);
            } else if (data != null) {
                $("#disciplineName").prop("disabled", true);
                $("#sectionButtonSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("disciplineMessageDiv", successMessage, "");
                setTimeout(function () {
                    disciplineMaster();
                }, 4000);

            } else {
                displayErrorMessages("disciplinelistmsgDiv", "" + failMessage + "");
            }
        });

    }
}




function viewdiscipline()
{
    if (checkUserPrivelege(pvViewDiscipline)) {
        $("#tableHeader").append("<div id='maritalListPanel1' />");
        $("#maritalListPanel1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Disciplines</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='coldisciplineList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#coldisciplineList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#coldisciplineList span").hasClass("glyphicon-minus-sign")) {
                $("#coldisciplineList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#coldisciplineList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div id='disciplinelistmsgDiv'>");
        $("#listpanelRow").append("<div id='disciplinelistpanelRow' class='table-responsive' />");
        $("#disciplinelistpanelRow").text("").append("<div id='disciplineSubDiv' class = 'panel panel-primary-head'></div>");
        $("#disciplineSubDiv").append("<table id='disciplineTable' class='table table-bordered'></table>");
        $("#disciplineTable").append("<thead><tr id='disciplineTableHeadId'>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i> Discipline</th>");
        if (checkUserPrivelege(pvUpdateDiscipline)) {
            $("#disciplineTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteDiscipline)) {
            $("#disciplineTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>");
        }


        $.get(server_base_url + "/hrms/salary/Discipline/ViewList", {
        }).done(function (pdata) {

            if (pdata == fail) {

                displayLargeErrorMessagesInCenterInRed("disciplinelistmsgDiv", "" + emptyListMessage + "");
                displayLargeErrorMessagesInCenterInRed("disciplinelistmsgDiv", "" + emptyListMessage + "");
            } else if (pdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("disciplinelistmsgDiv", "" + unauthorizedMessage + "");
                displayLargeErrorMessagesInCenterInRed("disciplinelistmsgDiv", "" + unauthorizedMessage + "");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("disciplinelistmsgDiv", "" + NoDataFound + "");
                displayLargeErrorMessagesInCenterInRed("disciplinelistmsgDiv", "" + NoDataFound + "");
            } else {
                if (pdata != null) {
                    if (pdata.length > 0) {

                        var sno = 0;
                        $("#disciplineTable").append("<tbody id='disciplineTableBody' class='table-striped table-bordered' />");

                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;
                            var json = {
                                id: pdata[i]._id.$oid,
                                discipline: pdata[i].disciplineName


                            }
                            json = JSON.stringify(json)
                            $("#disciplineTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].disciplineName + "</td>");
                            if (checkUserPrivelege(pvUpdateDiscipline)) {
                                $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editDisciplineInfo('" + pdata[i]._id.$oid + "','" + encodeURI(json) + "')>" + '<i class="fa fa-edit"></i>&nbsp;&nbsp; <a   class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteDiscipline)) {
                                $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteDisciplinedata','viewdiscipline','" + pdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                            }
                        }
                        $("#disciplineTable").DataTable();
                    }
                }

            }
        });
    }



}
function editDisciplineInfo(id, disciplineData)
{
    if (checkUserPrivelege(pvUpdateDiscipline)) {
        //alert();
        $("#pregppidsection").text("");
        $("#disciplineMessageDiv").text("");
        removeSomeClass("disciplineFieldDiv", "has-error");
        $("#disciplineName").focus();

        if (disciplineData == null || disciplineData == "" || disciplineData == undefined) {
            return false;
        }

        disciplineData = JSON.parse(decodeURI(disciplineData));
        $("#disciplineTableBody tr").css("background-color", "white");
        $("#disciplineTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#disciplineName").val(disciplineData.discipline);
        $("#disciplineMessageDiv").text("");
        $("#disciplineName").prop("readonly", false);
        $("#disciplineButton").text("").append("<center><button id='updateButton' onclick=updateDiscipline('" + id + "') class='btn btn-success mr5' >Update</button>&nbsp&nbsp&nbsp;<button  id='ddoUpdateReset' class='btn btn-warning mr5'  onclick='disciplineMaster()'>Back</button></center>");
    }
}

function updateDiscipline(id) {
    if (checkUserPrivelege(pvUpdateDiscipline)) {
        var disciplineName = $("#disciplineName").val();
        $("#pregppidsection").text("");
        $("#disciplineMessageDiv").text("").val();
        if (disciplineName == "" || disciplineName == "undefined") {
            addSomeClass("disciplineFieldDiv", "has-error");
            $("#disciplineName").focus();
            $("#disciplineMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill the mandatory field<strong></div></center>");
            return false;
        } else if (disciplineName != "") {
 
        }

        $.post(server_base_url + "/hrms/salary/Discipline/Update", {
            disciplineName: disciplineName,
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("disciplineMessageDiv", failMessage + "");
            } else if (data == unauthorized) {
                displayErrorMessages("disciplineMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("disciplineMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                $("#disciplineName").prop("disabled", true);
                $("#updateButton").attr('disabled', true);
                $("#ddoUpdateReset").attr('disabled', true);
                displayErrorMessages("disciplineMessageDiv", " " + existed + "");
                setTimeout(function () {
                    disciplineMaster();
                }, 1100);
            } else if (data != null) {
                $("#disciplineName").prop("disabled", true);
                $("#updateButton").attr('disabled', true);
                $("#ddoUpdateReset").attr('disabled', true);
                displaySuccessMessages("disciplineMessageDiv", successMessage, "");
                setTimeout(function () {
                    disciplineMaster();
                }, 4000);
            } else {
                displayErrorMessages("disciplineMessageDiv", failMessage + "");
                displayErrorMessages("disciplineMessageDiv", "Discipline Updation Failed" + "");
            }
        });

    }
}



function deleteDisciplinedemo(id)
{
    if (checkUserPrivelege(pvDeleteDiscipline)) {
        if (confirm("Are you sure?")) {
            $(this).closest('tr').remove();
            deleteDisciplinedata(id);
        }
    }
}
function deleteDisciplinedata(id)
{
    if (checkUserPrivelege(pvDeleteDiscipline)) {
        $("#disciplineMessageDiv").text("");
        $.post(server_base_url + "/hrms/salary/Discipline/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("disciplinelistmsgDiv", "" + failMessage + "");
                displayErrorMessages("disciplinelistmsgDiv", "" + failMessage + "");
            } else if (data == unauthorized) {
                displayErrorMessages("disciplinelistmsgDiv", "" + unauthorizedMessage + "");
                displayErrorMessages("disciplinelistmsgDiv", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("disciplinelistmsgDiv", "" + statusExceptionMessage + "");
                displayErrorMessages("disciplinelistmsgDiv", "" + statusExceptionMessage + "");
            } else if (data == delete_map) {
                displayErrorMessages("disciplinelistmsgDiv", " " + delete_map_messages, "");
                setTimeout(function () {
                    viewdiscipline();
                }, 1000);
            } else {
                displaySuccessMessages("disciplinelistmsgDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    viewdiscipline();
                }, 4000);
            }
        });
    }
}