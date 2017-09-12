/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function LocationMasterCreation(divId, usermgmtType) {
    if (usermgmtType === "usermanagement") {
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayUserManagement()">User Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="LocationMasterCreation()">Location Master</a>');
    } else if (usermgmtType === "leavemanagement") {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
        $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> >> <label>Location Master</label>');
    }

    $("#" + divId).text("").append('<div id="locationDivId"></div>');
    $("#locationDivId").text("").append('<div id="locationTabMenu" />');

    $("#locationTabMenu").append('<div id="locationMainMenu" class="row" />');
    $("#locationTabMenu").append('<div id="locationListMainMenu" class="row" />');

    $("#locationMainMenu").append('<div id="locationMainPanel" class="panel panel-blue" />');
    $("#locationMainPanel").append('<div id="locationMainHeading" class="panel-heading" />');
    $("#locationMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Location Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colLocation"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

    $("#locationMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#colLocation").click(function () {
        $("#collapseOne1").toggle();
        if ($("#colLocation span").hasClass("glyphicon-minus-sign")) {
            $("#colLocation").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colLocation").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne1").append('<div id="locationMainBody" class = "panel-body pan" />');
    $("#locationMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#locationMainBody").append('<center><span id="locationMessageDiv"></span></center>');
    $("#locationMainBody").append('<div id="locationBodyDiv" class="form-body pal" />');

//    $("#locationBodyDiv").append('<div class="form-group col-lg-12" id="locationMainDiv"><label for="locationName" class="col-lg-3 control-label">Location Name <span class="require">*</span></label><div><input id="locationName" type="text" onkeypress="return validatealphanumeric(event)" placeholder="Location Name" class="form-control"/><span id="locationErr" class="text-danger"></span></div></div></div>');
//    $("#locationBodyDiv").append('<div class="form-group col-lg-12" id="locationMainDiv"><label for="locationCode" class="col-lg-3 control-label">Location Code <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="locationCode" type="text"   placeholder="Location Code" class="form-control"/><span id="locationCodeErr" class="text-danger"></span></div></div></div>');
//    $("#locationBodyDiv").append('<div class="form-group col-lg-12"><label for="locationDetail" class="col-lg-3 control-label">Description </label><div class="col-lg-6 col-sm-offset-1"><div><textarea class="form-control" rows="2" id="locationDescription" maxlength="250" placeholder="Please enter description..."></textarea></div></div></div>');
    getLabelInputInRowwithPlaceHolder("locationBodyDiv", "Location Name", "required", "Row1", "Row0Col2", "locationName");
    getLabelInputInRowwithPlaceHolder("locationBodyDiv", "Location Code", "required", "Row2", "Row0Col2", "locationCode");
    getLabeltextareaInRow("locationBodyDiv", "Description", "", "Row3", "Row0Col4", "locationDescription", "");
    $("#locationBodyDiv").append("<div class='form-group' id='locationButton'><center><button id='locationButtonSave' onclick=saveLocation() class='btn btn-success' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetLocation() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });


    $("textarea").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });
    locationListTable();
}

function resetLocation() {
    $("#locationName").val("");
    $("#locationCode").val("");
    $("#locationDescription").val("");
    $("#locationErr").text("");
    $("#locationCodeErr").text("");
    $("#locationNameErr").text("");
    $("#locationMessageDiv").text("");
}

function saveLocation() {

    var locationName = $("#locationName").val();
    var locationCode = $("#locationCode").val();
    var description = $("#locationDescription").val();
    if (locationName === "" || locationName === "undefined") {
        displayLargeErrorMessagesInCenterInRed("locationMessageDiv", "Please fill all mandatory fields" + "");
        return false;
    }
    if (locationCode === "" || locationCode === "undefined") {
        displayLargeErrorMessagesInCenterInRed("locationMessageDiv", "Please fill mandatory fields" + "");
        return false;
    }
    var location = validatealphaNumeric('locationName', 'locationNameErr');
    var locationC = validatealphaNumeric('locationCode', 'locationCodeErr');
    if (location && locationC) {

        var locationJson = {
            locationName: locationName,
            locationCode: locationCode,
            description: description
        };

        var loginUserId = getUserSessionElement("userId");

        $.get(server_base_url + "/financial/account/Location/Save", {
            locationjson: JSON.stringify(locationJson),
            userid: loginUserId
        }).done(function (data) {

            if (data.statuscode === fail) {
                displayErrorMessages("locationMessageDiv", failMessage + "");
            } else if (data.statuscode === unauthorized) {
                displayErrorMessages("locationMessageDiv", unauthorizedMessage + "");
            } else if (data.statuscode === statusException) {
                displayErrorMessages("locationMessageDiv", statusExceptionMessage + "");
            } else if (data.statuscode === invalidSession) {
                callSessionTimeout();
            } else if (data.statuscode === "duplicate") {
                displayErrorMessages("locationMessageDiv", existed, "");
                setTimeout(function () {
                    LocationMasterCreation();
                }, 3000);
            } else if (data !== null) {
                $("#locationName").prop("disabled", true);
                $("#locationCode").prop("disabled", true);
                $("#locationDescription").prop("readonly", true);
                $("#locationButtonSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("locationMessageDiv", successMessage, "");
                setTimeout(function () {
                    LocationMasterCreation();
                }, 3000);

            } else {
                displayErrorMessages("locationMessageDiv", "Location Creation Failed" + "");
            }
        });
    } else {
        displaySmallErrorMessagesInRed("locationMessageDiv", "Please fill valid Entries" + "");
    }

}

function locationListTable() {

    $("#locationListMainMenu").text("").append('<div id="locationListPanel" class="panel panel-blue" />');
    $("#locationListPanel").append('<div id="locationListHeading" class="panel-heading" />');
    $("#locationListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List Of Location(s)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colLocationList"><span class="glyphicon glyphicon-minus-sign"></span></div>');
    $("#locationListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
    $("#colLocationList").click(function () {
        $("#collapseOne2").toggle();
        if ($("#colLocationList span").hasClass("glyphicon-minus-sign")) {
            $("#colLocationList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colLocationList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });

    $("#collapseOne2").append('<div id="locationListBody" class = "panel-body pan" />');
    $("#locationListBody").append('<div id="panelRow" class="row" />');

    $("#locationListBody").append('<div id="locationListErrorMsgId" />');
    $("#locationListBody").append('<div id="locationListMainBody" class="table-responsive" />');
    $("#locationListMainBody").append('<table id="locationTable" class="table table-bordered" />');
    $("#locationTable").append('<thead id="locationTableHeadId" />');
    $("#locationTable").append('<tbody id="locationTableBodyId" />');
    $("#locationTableHeadId").append('<tr><th>S.No</th><th>Location</th><th>Location Code</th><th>Description</th><th><center>Edit</center</th><th><center>Delete</center></th></tr>');
    $.post(server_base_url + "/financial/account/Location/ViewList", {
    }).done(function (data) {
        if (data.statuscode == NoData) {
            displaySmallErrorMessagesInRed("locationListErrorMsgId", NoDataFoundMessage + "");
        }
        if (data == fail) {
            displaySmallErrorMessagesInRed("locationListErrorMsgId", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("locationListErrorMsgId", unauthorizedMessage + "");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("locationListErrorMsgId", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessagesInRed("locationListErrorMsgId", "No User available" + "");
        } else if (data != null) {
            var sno = 0;
            var mainData = data.result;
            for (var i = mainData.length - 1; i >= 0; i--) {
                sno++;
                var subData = mainData[i];
                var locationCode = subData.locationCode;
                if (locationCode == "undefined" || locationCode == undefined) {
                    locationCode = "";
                }
                $("#locationTableBodyId").append("<tr id='" + subData._id.$oid + "'class='table_row'>"
                        + "<td>" + sno + "</td>"
                        + "<td class='table_row'>" + subData.locationName + "</td>"
                        + "<td class='table_row'>" + locationCode + "</td>"
                        + "<td class='table_row'>" + subData.description + "</td>"
                        + "<td style='cursor:pointer;' onclick=editLocationInfo('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>"
                        + "<td style='cursor:pointer;' onclick=deletePopUp('deleteLocation','locationListTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td></tr>");
            }
            $("#locationTable").dataTable();
        } else {
            displaySmallErrorMessagesInRed("locationListErrorMsgId", NoDataFoundMessage + "");
        }
    });

}

function editLocationInfo(locationData, id) {
    $("#locationName").focus();

    if (locationData == null || locationData == "" || locationData == undefined) {
        return false;
    }
    $("#locationTableBodyId tr").css("background-color", "white");
    $("#locationTableBodyId tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    locationData = JSON.parse(decodeURI(locationData));
    $("#locationName").val(locationData.locationName);
    $("#locationCode").val(locationData.locationCode);
    $("#locationDescription").val(locationData.description);
    $("#messageDiv").text("");
    $("#locationName").prop("readonly", false);
    $("#locationDescription").prop("readonly", false);
    $("#locationButton").text("").append("<center><button id='updateButton' onclick=updateLocation('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='LocationMasterCreation()' id='locationUpdateReset' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");
}

function updateLocation(id) {
    var locationName = $("#locationName").val();
    var code = $("#locationCode").val();
    var description = $("#locationDescription").val();

    if (locationName === "" || locationName === "undefined") {
        displaySmallErrorMessagesInRed("locationMessageDiv", "Please Fill * fields" + "");
        return false;
    }
    if (code === "" || code === "undefined") {
        displaySmallErrorMessagesInRed("locationMessageDiv", "Please Fill * fields" + "");
        return false;
    }

//    var location = validateName('locationName', 'locationErr');
//    if (location) {

    var location = validatealphaNumeric('locationName', 'locationNameErr');
    var locationC = validatealphaNumeric('locationCode', 'locationCodeErr');
    if (location && locationC) {
        var updateLocationJson = {
            locationName: locationName,
            locationCode: code,
            description: description
        };

        var loginUserId = getUserSessionElement("userId");
        $.get(server_base_url + "/financial/account/Location/Update", {
            locationUpdateJson: JSON.stringify(updateLocationJson),
            locationid: id,
            userid: loginUserId
        }).done(function (data) {

            if (data.statuscode === fail) {
                displayErrorMessages("locationMessageDiv", failMessage + "");
            } else if (data.statuscode === unauthorized) {
                displayErrorMessages("locationMessageDiv", unauthorizedMessage + "");
            } else if (data.statuscode === statusException) {
                displayErrorMessages("locationMessageDiv", statusExceptionMessage + "");
            } else if (data.statuscode === invalidSession) {
                callSessionTimeout();
            } else if (data.statuscode === "duplicate") {
                displayErrorMessages("locationMessageDiv", existed, "");
                setTimeout(function () {
                    LocationMasterCreation();
                }, 3000);
            } else if (data !== null) {
                $("#locationName").prop("disabled", true);
                $("#locationCode").prop("disabled", true);
                $("#locationDescription").prop("readonly", true);
                $("#locationButtonSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("locationMessageDiv", updateMessage, "");
                setTimeout(function () {
                    LocationMasterCreation();
                }, 3000);
            } else {
                displayErrorMessages("locationMessageDiv", "Location Creation Failed" + "");
            }
        });
    } else {
        displaySmallErrorMessagesInRed("locationMessageDiv", "Please fill valid Entries" + "");
    }
}

function deleteLocation(locationId) {
    var currentLoginUser = getUserSessionElement("userId");
    $.get(server_base_url + "/financial/account/Location/Delete", {
        currentuser: currentLoginUser,
        locationid: locationId
    }).done(function (data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("locationListErrorMsgId", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("locationListErrorMsgId", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("locationListErrorMsgId", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("locationListErrorMsgId", "This Location " + delete_map_message, "");
            setTimeout(function () {
                LocationMasterCreation();
            }, 3000);
        } else if (data != null) {
            displaySuccessMessages("locationListErrorMsgId", deleteMessage, "");
            setTimeout(function () {
                LocationMasterCreation();
            }, 3000);
        } else {
            displaySmallErrorMessagesInRed("locationListErrorMsgId", "DDO Deletion Failed" + "");
        }
    });
}



