/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function sectionMaster() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">Section Master</a>');
    $("#dashboardBodyMainDiv").text("").append('<div id="sectionMainDiv"/>');
    $("#sectionMainDiv").text("").append("<div id='mainTabMenu'  />");
    $("#mainTabMenu").append("<div id='tableHeader'/>");
    if (checkUserPrivelege(pvCreateSection)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");

        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Section Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colSection'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#colSection").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colSection span").hasClass("glyphicon-minus-sign")) {
                $("#colSection").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSection").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class ='panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");

        $("#panelRow").append("<div id='sectionMessageDiv'></div>");
        $("#panelMainBody").append('<div  id="formBodyPalDiv"  class="panel-body pan form-horizontal" />');
        $("#formBodyPalDiv").append('<div  id="formBodyPalDiv1"  class="form-body pal" />');
        $("#formBodyPalDiv1").append('<div  id="form-groupDiv"  class="form-group" />');
        $("#form-groupDiv").append('<label for="discription"  class="col-md-3 control-label">Description<span class="require">*</span></label>');
        $("#form-groupDiv").append('<div id="colmd9" class="col-md-9" />');
        $("#colmd9").append('<div  id="inputIconright" class=""/>');
        $("#inputIconright").append('<i class=""></i><input type="text" id="discription" onkeypress="return acceptAlphanumeric(event)" placeholder="Description" class="form-control" maxlength="100"/>');
        $("#colmd9").append("<span id='pregppidsection'></span>");
        $("#panelMainBody").append('<div id="panelRowa2" />');
        $("#panelRowa2").append('<div  id="sectionButton"  class="" />');
        $("#sectionButton").append('<center><button id="sectionButtonSave" type="submit" onclick="saveSection()" class="btn btn-success mr5">Save</button>&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetSection()">Reset</button></center>');

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    }
    if (checkUserPrivelege(pvViewSection)) {
        viewSection();
    }

}

function resetSection()
{
    $("#discription").val("");
    removeSomeClass("form-groupDiv", "has-error");
    $("#sectionMessageDiv").text("");
}


function saveSection() {
    if (checkUserPrivelege(pvCreateSection)) {

        var discription = $("#discription").val();
        $("#pregppidsection").text("");
        $("#sectionMessageDiv").text("").val();
        var json = {
            description: discription
        }

        if (discription == "" || discription == "undefined") {
            addSomeClass("form-groupDiv", "has-error");
            $("#discription").focus();
            $("#sectionMessageDiv").text("").append("<center><div class='smallErrorMsg' id='errorMessage' style='color:red;'><strong>Please fill the mandatory field<strong></div></center>");
            return false;
        } else if (discription != "") {
        }
        var loginUserId = getUserSessionElement("userId");

        $.get(server_base_url + "/hrms/salary/Section/Save", {
            discription: JSON.stringify(json),
            loginID: loginUserId
        }).done(function (data) {
            
            if (data.statuscode == fail) {
                displayErrorMessages("sectionMessageDiv", "" + failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("sectionMessageDiv", "" + unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displayErrorMessages("sectionMessageDiv", "" + statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("sectionMessageDiv", "" + existed + "");
                setTimeout(function () {
                    sectionMaster();
                }, 4000);

            } else if (data != null) {
                $("#discription").prop("disabled", true);
                $("#sectionButtonSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("sectionMessageDiv", successMessage, "");
                setTimeout(function () {
                    sectionMaster();
                }, 4000);

            } else {
                displayErrorMessages("sectionMessageDiv", failMessage + "");
            }
        });

    }
}



function viewSection() {
    if (checkUserPrivelege(pvViewSection)) {
        $("#tableHeader").append("<div id='maritalListPanel1' />");
        $("#maritalListPanel1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Sections</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colSectionList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");

        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colSectionList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colSectionList span").hasClass("glyphicon-minus-sign")) {
                $("#colSectionList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSectionList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body ' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelMainBody").append("<div id='sectionListMessageDiv'>");
        $("#listpanelMainBody").append('<div id="sectionlistpanelRow" class="table-responsive" />');
        $("#sectionlistpanelRow").text("").append("<table id='example1' style='border-bottom:1px solid #ddd' class='table table-bordered'></table>");
        $("#example1").append("<thead><tr id='sectionTableHeadId'>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i> Description</th>");
        if (checkUserPrivelege(pvUpdateSection)) {
            $("#sectionTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteSection)) {
            $("#sectionTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>");
        }

        $.get(server_base_url + "/hrms/salary/Section/ViewList", {
        }).done(function (data) {

            if (data == fail) {
                displayLargeErrorMessagesInCenterInRed("sectionListMessageDiv", "" + emptyListMessage + "");
                displayLargeErrorMessagesInCenterInRed("sectionListMessageDiv", "" + emptyListMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("sectionListMessageDiv", "" + unauthorizedMessage + "");
                displayLargeErrorMessagesInCenterInRed("sectionListMessageDiv", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessagesInCenterInRed("sectionListMessageDiv", "" + NoDataFound + "");
                displayLargeErrorMessagesInCenterInRed("sectionListMessageDiv", "" + NoDataFound + "");
            } else {
                if (data != null) {
                    if (data.length > 0) {

                        var sno = 0;
//                 

                        $("#example1").append("<tbody id='displaySectionTableBody' class='table-striped table-bordered' />");

                        for (var i = data.length - 1; i >= 0; i--) {
                            sno++;
                            var json = {
                                id: data[i]._id.$oid,
                                description: data[i].description

                            }
                            json = JSON.stringify(json);
                            $("#displaySectionTableBody").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + data[i].description + "</td>");
                            if (checkUserPrivelege(pvUpdateSection)) {
                                $("#" + data[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editSectionInfo('" + data[i]._id.$oid + "','" + encodeURI(json) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a type="button"  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteSection)) {
                                $("#" + data[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteSection','viewSection','" + data[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a type="button" class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                            }
                        }
                        $("#example1").DataTable();
                    }
                }

            }
        });
    }



}
function editSectionInfo(id, sectionData)
{
    if (checkUserPrivelege(pvUpdateSection)) {
        $("#pregppidsection").text("");
        $("#sectionMessageDiv").text("").val();
        removeSomeClass("form-groupDiv", "has-error");
        $("#description").focus();

        if (sectionData == null || sectionData == "" || sectionData == undefined) {
            return false;
        }

        sectionData = JSON.parse(decodeURI(sectionData));
        $("#discription").val(sectionData.description);
        $("#sectionMessageDiv").text("");
        $("#displaySectionTableBody tr").css("background-color", "white");
        $("#displaySectionTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#discription").prop("readonly", false);
        $("#sectionButton").text("").append("<center><button id='updateButton' onclick=updateSection('" + id + "') class='btn btn-success mr5' >Update</button>&nbsp&nbsp&nbsp;<button  id='ddoUpdateReset' class='btn btn-warning mr5'  onclick='sectionMaster()'>Back</button></center>");
    }
}

function updateSection(id) {
    if (checkUserPrivelege(pvUpdateSection)) {
        var description = $("#discription").val();
        if (description == "" || description == "undefined") {
            addSomeClass("form-groupDiv", "has-error");
            $("#discription").focus();
            $("#sectionMessageDiv").text("").append("<center><div class='smallErrorMsg' id='errorMessage' style='color:red;'><strong>Please fill the mandatory field<strong></div></center>");
            return false;
        } else if (description != "") {
        }

        if (description == "" || description == "undefined") {
            $("#sectionMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill the mandatory field<strong></div></center>");
            return false;
        }

        var sectionUpdateJson = {
            description: description
        }

        var loginUserId = getUserSessionElement("userId");

        $.get(server_base_url + "/hrms/salary/Section/Update", {
            description: description,
            id: id,
            loginID: loginUserId
        }).done(function (data) {
            if (data.statuscode == fail) {
                displayErrorMessages("sectionMessageDiv", "" + failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("sectionMessageDiv", "" + unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displayErrorMessages("sectionMessageDiv", "" + statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                $("#discription").prop("disabled", true);
                $("#sectionButtonSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displayErrorMessages("sectionMessageDiv", "" + existed + "");
                setTimeout(function () {
                    sectionMaster();
                }, 2100);
            } else if (data != null) {
                $("#discription").prop("disabled", true);
                $("#sectionButtonSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("sectionMessageDiv", successMessage, "");
                setTimeout(function () {
                    sectionMaster();
                }, 4000);
            } else {
                displayErrorMessages("sectionMessageDiv", failMessage + "");
            }
        });

    }
}

function deleteSectiondemo(id)
{
    if (checkUserPrivelege(pvDeleteSection)) {
        if (confirm("Are you sure?")) {
            $(this).closest('tr').remove();
            deleteSection(id);
        }
    }
}
function  deleteSection(id)
{
    if (checkUserPrivelege(pvDeleteSection)) {
        $("#sectionMessageDiv").text("")
        $.post(server_base_url + "/hrms/salary/Section/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("sectionMessageDiv", "" + failMessage + "");
                displayErrorMessages("sectionMessageDiv", "" + failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("sectionMessageDiv", "" + unauthorizedMessage + "");
                displayErrorMessages("sectionMessageDiv", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("sectionMessageDiv", "" + statusExceptionMessage + "");
                displayErrorMessages("sectionMessageDiv", "" + statusExceptionMessage + "");
            } else if (data == delete_map) {
                displayErrorMessages("sectionListMessageDiv", " " + delete_map_messages, "");
                setTimeout(function () {
                    viewSection();
                }, 1000);
            } else {
                displaySuccessMessages("sectionListMessageDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    viewSection();
                }, 4000);
            }
        });
    }
}


