/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function ddoLocationMappingCreation() {

    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayUserManagement()">User Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="ddoLocationMappingCreation()">DDO Location Mapping Master</a>');
    $("#dashboardBodyMainDiv").text("").append('<div id="ddoLocationMainDiv"/>');
    $("#ddoLocationMainDiv").text("").append("<div id='ddoLocationcolumnDiv' >");
    if (checkUserPrivelege(pvCreateDDOLocationMapping)) {
        $("#ddoLocationcolumnDiv").append("<div id='ddoLocationFirstPanel' class='panel panel-blue' />");
        $("#ddoLocationFirstPanel").append("<div id='ddoLocationfirstPanelHeading' class='panel-heading' />");
        $("#ddoLocationfirstPanelHeading").append("<h4 id='ddoLocationtableHeader1' class='panel-title' />");
    $("#ddoLocationtableHeader1").append("<class='panel-title' class='panel_font' data-parent='#accordion2'><center>DDO Location Mapping Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colddoLocation'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#ddoLocationFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#colddoLocation").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colddoLocation span").hasClass("glyphicon-minus-sign")) {
            $("#colddoLocation").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colddoLocation").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
        $("#collapseOne2").append("<div id='ddoLocationpanelBodyDiv' class='panel-body'>");
        $("#ddoLocationpanelBodyDiv").append("<div id='ddoLocationformBodyDiv' class='form-body '>");

        $("#ddoLocationformBodyDiv").append("<div id='ddoLocationMessageDiv' ></div>");
        $("#ddoLocationformBodyDiv").append('<div class="row" id="ddoLocationGroupDiv"/>');
        $("#ddoLocationGroupDiv").append('<div class="col-md-6" id="ddoLocationGroupDiv1"/>');
        $("#ddoLocationGroupDiv1").append('<label for="ddo" class="control-label" id="control_label">DDO<span class="require">*</span></label>');
        $("#ddoLocationGroupDiv1").append('<div class="form-group" id="ddoDiv">');
        $("#ddoDiv").append('<select id="ddo" class="form-control"><option value="">----Select DDO----</option></select>');
        $("#ddoDiv").append("<span id='ddoErr'></span>");
        getDDOForLocationMapping();

        $("#ddoLocationformBodyDiv").append('<div class="row" id="ddoLocationformBodyDivRow">');
        $("#ddoLocationformBodyDivRow").append('<div class="col-md-6" id="ddoLocationformBodyDivCol">');
        $("#ddoLocationformBodyDivCol").append('<label for="inputFirstName" class="control-label">Location<span class="require">*</span></label>');
        $("#ddoLocationformBodyDiv").append("<div id='LocationsubRow' class='row' />");
        $("#LocationsubRow").append("<div id='LocationsubColf' class='col-lg-12' />");
        $("#LocationsubColf").append("<div id='LocationsubCol' class='col-lg-12' />");
        $("#LocationsubCol").append("<div id='LocationsubCol1' class='col-lg-5' />");
        $("#LocationsubCol").append("<div id='LocationsubCol2' class='col-lg-2' />");
        $("#LocationsubCol").append("<div id='LocationsubCol3' class='col-lg-5' />");
        $("#LocationsubCol1").append("<select name='from' id='multiselect' class='form-control ' size='8' multiple='multiple'></select>");
        $("#LocationsubCol2").append("<button type='button' id='multiselect_rightAll' class='btn btn-block'><i class='glyphicon glyphicon-forward'></i></button><button type='button' id='multiselect_rightSelected' class='btn btn-block'><i class='glyphicon glyphicon-chevron-right'></i></button><button type='button' id='multiselect_leftSelected' class='btn btn-block'><i class='glyphicon glyphicon-chevron-left'></i></button><button type='button' id='multiselect_leftAll' class='btn btn-block'><i class='glyphicon glyphicon-backward'></i></button>");
        $("#LocationMainDiv").append("<div id='LocationDiv' class='col-lg-4' />");
        $("#LocationsubCol3").append("<select name='to' id='multiselect_to' class='form-control col-lg-4' size='8' multiple='multiple'></select>");
        $("#LocationsubDiv").append("<span id='multiselect_toer'></span>");
        $('#multiselect').multiselect();
        addLocationformapp();
        getrightsideLocations("", "multiselect_to");

        $("#ddoLocationformBodyDiv").append("<div id='ddoLocationButtonRowDiv' class='row' />");

        $("#ddoLocationButtonRowDiv").append("<div  class='col-xs-12' id='ddoLocationButtonRow'/><center><button type='button'  id='ddoLocationSave' value='Save' class='btn btn-success bn'  onclick='validateDDOLocationMapping()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetddoLocation()' class='btn btn-warning bn' id='ddoLocationReset' name='reset' value='reset'>Reset</button></center></div>");
    }
    if (checkUserPrivelege(pvViewDDOLocationMapping)) {
        $("#ddoLocationcolumnDiv").append("<div id='ddoLocationListPanel' class='panel panel-blue' />");
        $("#ddoLocationListPanel").append("<div id='ddoLocationListPanelHeading' class='panel-heading' />");
        $("#ddoLocationListPanelHeading").append("<h4 id='ddoLocationfirstHeader1' class='panel-title' />");
    $("#ddoLocationfirstHeader1").append("<class='panel-title' class='panel_font' data-parent='#accordion2'><center>List of DDO Location </center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='ddoLocationList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#ddoLocationListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#ddoLocationList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#ddoLocationList span").hasClass("glyphicon-minus-sign")) {
            $("#ddoLocationList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#ddoLocationList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
        $("#collapseOne3").append("<div id='ddoLocationPanellistpanelMainBody' class = 'panel-body' />");
        $("#ddoLocationPanellistpanelMainBody").append("<div id='ddoLocationlistMessageDiv'></div>");
        $("#ddoLocationPanellistpanelMainBody").append("<div id='ddoLocationlistpanelRow' class='row' />");
        $("#ddoLocationlistpanelRow").append("<div id='ddoLocationlistpanelRow' class='table-responsive' />");
        viewddoLocationList('ddoLocationlistpanelRow');
    }
}

function resetddoLocation() {
    $('#ddo').val("");
    $("#pregppid").text("");
    $("#multiselect_toer").text("").val();
    $("#pregsuccessBefore").text("");
    $("#multiselect_leftAll").trigger('click');
    $("#multiselect_to").text("").val();
}

function validateDDOLocationMapping() {

    var ddo = $("#ddo").val();
    var rolesList = [];

    var abc = document.getElementById("multiselect_to");

    for (var i = 0; i < abc.options.length; i++) {
        rolesList.push(abc.options[i].value);
        rolesList.push({
            ddo: ddo,
            location: abc.options[i].value
        });
    }

    if (ddo == "" || ddo == null) {
        $("#ddo").focus();
        addSomeClass("ddoDiv", "has-error");
        displaySmallErrorMessages("ddoErr", "Please Select DDO.");
        return false;
    }
    if (rolesList == null || rolesList == "") {

        addSomeClass("LocationsubDiv", "has-error");
        displaySmallErrorMessages("multiselect_toer", "Please Select Location.");
        return false;
    } else {
        saveDDOLocationMapping();
    }
}

function saveDDOLocationMapping() {
    if (checkUserPrivelege(pvCreateDDOLocationMapping)) {
        var rolesList = [];

        var abc = document.getElementById("multiselect_to");
        for (var i = 0; i < abc.options.length; i++) {
            rolesList.push(abc.options[i].value);
        }
        var ddoJson = {
            ddo: $("#ddo").val(),
            location: rolesList
        }

        ddoJson = JSON.stringify(ddoJson);
        var id = getUserSessionElement("userId");

        $.post(server_base_url + "user/management/DDOLocationMapping/Save", {
            ddoJson: ddoJson,
            userid: id
    }).done(function (data) {

            if (data == fail) {
                displaySmallErrorMessages("ddoLocationMessageDiv", "Invalid username / password" + "<br/><br/>");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessages("ddoLocationMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displaySmallErrorMessages("ddoLocationMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == "existed") {
                displaySuccessMessages("ddoLocationMessageDiv", existed, "");
            setTimeout(function () {
                    $("#ddoLocationMessageDiv").text("");
                }, 1000);
            } else if (data == null) {
                displaySmallErrorMessages("ddoLocationMessageDiv", "No User available" + "<br/><br/>");
            } else if (data != null) {
                $("#ddo").prop("disabled", true);
                $("#multiselect").attr('disabled', true);
                $("#multiselect_to").attr('disabled', true);
                displaySuccessMessages("ddoLocationMessageDiv", successMessage, "");
            setTimeout(function () {

                    ddoLocationMappingCreation();

                }, 1000);
            }

        });
    }
}
function viewddoLocationList(divId)
{
    if (checkUserPrivelege(pvViewDDOLocationMapping)) {
        $("#" + divId).text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
        $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
        $("#viewDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayddoLocationTable' />");
        $("#displayddoLocationTable").append("<thead><tr id='ddoLocationTableHeadId'>"
                + " <th class='sno_width'> S.No</th>"
                + "<th class='table_col_width'><i class='fa'></i>DDO Name</th>"
                + "<th class='table_col_width'><i class='fa'></i>Location</th>");
        if (checkUserPrivelege(pvUpdateDDOLocationMapping)) {
            $("#ddoLocationTableHeadId").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteDDOLocationMapping)) {
            $("#ddoLocationTableHeadId").append("<th class='table_anchor_width'><i class='fa' ></i> Delete</th>");
        }
        $.get(server_base_url + "user/management/FetchAllDdoLocationMapping/View", {
    }).done(function (pdata) {

            if (pdata == 500) {
                displayLargeErrorMessagesInCenterInRed("ddoLocationlistMessageDiv", emptyListMessage + "<br/><br/>");
            } else if (pdata == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("ddoLocationlistMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (pdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("ddoLocationlistMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata != null) {
                if (pdata.length > 0) {
                    var sno = 0;
                    $("#displayddoLocationTable").append("<tbody id='displayddoLocationTableBody'/>");
                    for (var i = pdata.length - 1; i >= 0; i--) {

                        sno++;
                        var objJson = {
                            objId: pdata[i]._id.$oid,
                            ddo: pdata[i].ddo,
                            locationList: pdata[i].location
                        }
                        objJson = JSON.stringify(objJson);

                        $("#displayddoLocationTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td >" + pdata[i].ddo + "</td>"
                                + "<td >" + pdata[i].location + "</td>");
                        if (checkUserPrivelege(pvUpdateDDOLocationMapping)) {
                            $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updateDDoLocation('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");
                        }
                        if (checkUserPrivelege(pvDeleteDDOLocationMapping)) {
                            $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=deletePopUp('deleteDDOLocationData','viewddoLocationList','" + pdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i> Delete</a></td>");
                        }

                    }
                    $("#displayddoLocationTable").dataTable();
                }
            }
        });
    }
}

function updateDDoLocation(obj) {
    if (checkUserPrivelege(pvUpdateDDOLocationMapping)) {
        obj = decodeURI(obj);
        obj = JSON.parse(obj);
        $("#ddo").prop("readonly", false);
        $("#multiselect_to").prop("readonly", false);
        $("#multiselect").prop("readonly", false);
        $("#ddo option:contains(" + obj.ddo + ")").attr('selected', 'selected');
        getleftsideLocations(obj.locationList, "multiselect");
        getrightsideLocations(obj.locationList, "multiselect_to");

        $("#ddoLocationButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updateDDoLocationData('" + obj.objId + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='ddoLocationMappingCreation()' class='btn btn-warning bn' >Back</button></center>");
    }
}

function updateDDoLocationData(id) {
    if (checkUserPrivelege(pvUpdateDDOLocationMapping)) {
        var rolesList1 = [];
        var abc = document.getElementById("multiselect_to");

        for (var i = 0; i < abc.options.length; i++) {
            rolesList1.push(abc.options[i].value);
        }

        var ddoJson = {};
        ddoJson["location"] = rolesList1;
        ddoJson["ddo"] = $("#ddo").val();
        ddoJson = JSON.stringify(ddoJson);
        $.post(server_base_url + "/user/management/DdoLocationMappingService/Update", {
            ddoJson: ddoJson,
            id: id
    }).done(function (data) {
            if (data == fail) {
                displayLargeErrorMessagesInCenterInRed("ddoLocationMessageDiv", emptyListMessage + "<br/><br/>");
            } else if (data.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("ddoLocationMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displayLargeErrorMessagesInCenterInRed("ddoLocationMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                $("#ddo").focus();
                $("#ddo").prop("disabled", true);
                $("#multiselect").attr('disabled', true);
                $("#multiselect_to").attr('disabled', true);
                displaySuccessMessages("ddoLocationMessageDiv", updateSuccessMessage, "");
            setTimeout(function () {

                    ddoLocationMappingCreation();

                }, 1000);

            }
        });
    }
}

function getleftsideLocations(removeOptions, DivId) {
    $("#" + DivId).text("");
    $.get(server_base_url + "financial/account/Location/ViewList", {
    }).done(function(pdata) {
        
        var mainData = pdata.result;

        for (var i = 0; i < mainData.length; i++) {
            var result = 1;
            for (var j = 0; j < removeOptions.length; j++) {

                if (mainData[i].locationName == removeOptions[j]) {
                    result = 0;
                }
            }
            if (result != 0) {
                $("#" + DivId).append("<option  value='" + mainData[i]._id.$oid + "' >" + mainData[i].locationName + "</option>");
            }
        }

    });
}

function getrightsideLocations(name, DivId) {
    $("#" + DivId).text("");
    $.get(server_base_url + "/financial/account/Location/ViewList", {
    }).done(function (pdata) {
        var mainData = pdata.result;
        for (var i = 0; i < mainData.length; i++) {
            var result = 1;
            for (var j = 0; j < name.length; j++) {
                if (mainData[i].locationName == name[j]) {
                    $("#" + DivId).append("<option  value='" + mainData[i]._id.$oid + "' >" + mainData[i].locationName + "</option>");

                }
            }

        }

    });

}
function deleteDDOLocation(id) {
    if (checkUserPrivelege(pvDeleteDDOLocationMapping)) {
        if (confirm("Are you sure?")) {
            $(this).closest('tr').remove();
            deleteDDOLocationData(id);
        }
    }
}
function deleteDDOLocationData(id) {
    if (checkUserPrivelege(pvDeleteDDOLocationMapping)) {
        $.post(server_base_url + "user/management/DdoLocation/Delete", {
            id: id
            
    }).done(function (data) {
            
            if (data == fail) {
                displaySmallErrorMessages("ddoLocationMessageDiv", emptyListMessage + "<br/><br/>");
            } else if (data == unauthorized||data.statuscode == unauthorized) {
                displaySmallErrorMessages("ddoLocationMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displaySmallErrorMessages("ddoLocationMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == delete_map) {
                displaySuccessMessages("ddoLocationlistMessageDiv", "This DDO name  " + delete_map_message, "");
                setTimeout(function() {
                    $("#ddoLocationlistMessageDiv").text("");
                }, 1000);
            } else {
                displaySuccessMessages("ddoLocationlistMessageDiv", deleteSuccessMessage, "");
                setTimeout(function() {
                    ddoLocationMappingCreation();
                }, 1000);

            }
        });
    }
}



function getDDOForLocationMapping(name, divId) {
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (pdata) {

        for (var i = 0; i < pdata.length; i++) {

            $("#ddo").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
        }
    });
}

function addLocationformapp() {
    $.get(server_base_url + "/financial/account/Location/ViewList", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#multiselect").append("<option value='" + subData._id.$oid + "'>" + subData.locationName + "</option>");
            }
        }
    });
}








