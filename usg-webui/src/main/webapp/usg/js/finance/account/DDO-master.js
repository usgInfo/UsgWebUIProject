function DDOMasterCreation(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayUserManagement()">User Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="DDOMasterCreation()">DDO Master</a>');

    $("#" + divId).text("").append('<div id="ddoDivId"></div>');
    $("#ddoDivId").text("").append('<div id="ddoTabMenu" />');

    $("#ddoTabMenu").append('<div id="ddoMainMenu" class="row" />');
    $("#ddoTabMenu").append('<div id="ddoListMainMenu" class="row" />');
    if (checkUserPrivelege(pvCreateDDO)) {
        
        $("#ddoMainMenu").append('<div id="ddoMainPanel" class="panel panel-blue" />');
        $("#ddoMainPanel").append('<div id="ddoMainHeading" class="panel-heading" />');
        $("#ddoMainHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>DDO Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colDDO"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#ddoMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colDDO").click(function() {
        $("#collapseOne1").toggle();
        if ($("#colDDO span").hasClass("glyphicon-minus-sign")) {
            $("#colDDO").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colDDO").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne1").append('<div id="ddoMainBody" class = "panel-body pan" />');
    $("#ddoMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#ddoMainBody").append('<center><span id="ddoMessageDiv"></span></center>');
        $("#ddoMainBody").append('<div id="ddoBodyDiv" class="form-body pal" />');

        $("#ddoBodyDiv").append('<div class="form-group col-lg-12"><label for="ddoName" class="col-lg-3 control-label">DDO Name <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="ddoName" type="text" onkeyup=validatealphaNumeric("ddoName","ddoErr") placeholder="DDO Name"  class="form-control"/><span id="ddoErr" class="text-danger"></span></div></div></div>');
        $("#ddoName").attr('maxlength', '100');
        $("#ddoBodyDiv").append('<div class="form-group col-lg-12"><label for="ddoCode" class="col-lg-3 control-label">DDO Code <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="ddoCode" type="text" onkeyup=validatealphaNumeric("ddoCode","ddoCodeErr") placeholder="DDO Code"  class="form-control"/><span id="ddoCodeErr" class="text-danger"></span></div></div></div>');
        $("#ddoCode").attr('maxlength', '4');
//    $("#ddoBodyDiv").append('<div class="form-group col-lg-12"><label for="ddoLocation" class="col-lg-3 control-label">Location <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div id="locationDiv"><select class="form-control" name="ddoLocation" id="ddoLocation"></select></div></div></div>');
        $("#ddoBodyDiv").append('<div class="form-group col-lg-12"><label for="ddoDetail" class="col-lg-3 control-label">Remarks </label><div class="col-lg-6 col-sm-offset-1"><div><textarea class="form-control" rows="2" id="ddoRemarks" placeholder="Please enter remarks..."></textarea></div></div></div>');
        $("#ddoBodyDiv").append("<div class='form-group col-lg-12' id='ddoButton'><center><button id='ddoButtonSave' onclick=saveDdo() class='btn btn-success' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetddo() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
    }
    if (checkUserPrivelege(pvViewDDO)) {
        ddoListTable();
    }
}

function resetddo() {
    $("#ddoName").val("");
    $("#ddoCode").val("");
    $("#ddoRemarks").val("");
//    $("#ddoLocation").val('0');
    $("#ddoErr").text("");
    $("#ddoMessageDiv").text("");
}

//function fetchLocation() {
//    $("#ddoLocation").text("").append("<option value='0'>----Select Location----</option>");
//    $.get(server_base_url + "/financial/account/Location/ViewList", {
//    }).done(function(data) {
//        if (data == fail || data == unauthorized) {
////            location.href = "dashboard.jsp";
//        } else if (data == invalidSession) {
//            callSessionTimeout();
//        } else {
//            var mainData = data.result;
//            for (var i = 0; i < mainData.length; i++) {
//                var subData = mainData[i];
//                $("#ddoLocation").append("<option value='" + subData._id.$oid + "'>" + subData.locationName + "</option>");
//            }
//        }
//    });
//}

function ddoListTable() {
    if (checkUserPrivelege(pvViewDDO)) {
        
        $("#ddoListMainMenu").text("").append('<div id="ddoListPanel" class="panel panel-blue" />');
        $("#ddoListPanel").append('<div id="ddoListHeading" class="panel-heading" />');
    $("#ddoListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of DDO</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colDDOList"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#ddoListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
    $("#colDDOList").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colDDOList span").hasClass("glyphicon-minus-sign")) {
            $("#colDDOList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colDDOList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
        $("#collapseOne2").append('<div id="ddoListBody" class = "panel-body pan" />');
        $("#ddoListBody").append('<div id="panelRow" class="row" />');

        $("#ddoListBody").append('<div id="ddoListErrorMsgId" />');
        $("#ddoListBody").append('<div id="ddoListMainBody" class="table-responsive" />');
    $("#ddoListMainBody").append('<table id="ddoTable" class="table table-bordered" />');
        $("#ddoTable").append('<thead id="ddoTableHeadId" />');
        $("#ddoTable").append('<tbody id="ddoTableBodyId" />');
        $("#ddoTableHeadId").append('<tr id="ddoListHeadId"><th>Sno</th><th>DDO</th><th>DDO Code</th><th>Remarks</th>');
        if (checkUserPrivelege(pvUpdateDDO)) {
            $("#ddoListHeadId").append('<th><center>Edit</center</th>');
        }
        if (checkUserPrivelege(pvDeleteDDO)) {
            $("#ddoListHeadId").append('<th><center>Delete</center</th>');
        }

    $.post(server_base_url + "/financial/account/DDO/ViewList", {
    }).done(function(data) {
        if (data.statuscode == NoData) {
            displaySmallErrorMessagesInRed("ddoListErrorMsgId", NoDataFoundMessage + "");
        }
            if (data == fail) {
                displaySmallErrorMessagesInRed("ddoListErrorMsgId", failMessage + "");
            } else if (data == unauthorized||data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("ddoListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("ddoListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("ddoListErrorMsgId", "No User available" + "");
            } else if (data != null) {
                var sno = 0;
                var mainData = data.result;
                for (var i = mainData.length - 1; i >= 0; i--) {
                    sno++;
                    var subData = mainData[i];
                    var location = subData.locationName;

                    var code = subData.code;
                    if (code == "undefined" || code == undefined) {
                        code = "";
                    }
                    $("#ddoTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.ddoName + "</td>"
                            + "<td style='cursor:pointer;'>" + code + "</td>"
//                        + "<td style='cursor:pointer;'>" + location + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.remarks + "</td>");
                    if (checkUserPrivelege(pvUpdateDDO)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=editDDoInfo('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>");
                    }if (checkUserPrivelege(pvDeleteDDO)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteDDO','ddoListTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");}
                }
                $("#ddoTable").dataTable();
            } else {
                displaySmallErrorMessagesInRed("ddoListErrorMsgId", NoDataFoundMessage + "");
            }
        });

    }
}


function saveDdo() {
    if (checkUserPrivelege(pvCreateDDO)) {
        var ddoName = $("#ddoName").val();
        var ddoCode = $("#ddoCode").val();
//    var location = $("#ddoLocation").val();
        var remarks = $("#ddoRemarks").val();

        if (ddoName == "" || ddoName == "undefined" || ddoCode == "" || ddoCode == "undefined") {
//        $("#locationDiv").addClass('has-error');
            displaySmallErrorMessagesInRed("ddoMessageDiv", "Please Fill * fields" + "");
            return false;
        }

        var ddo = validatealphaNumeric('ddoName', 'ddoErr');
        var ddoC = validatealphaNumeric('ddoCode', 'ddoCodeErr');
        if (ddo && ddoC) {
            var ddoJson = {
                ddoName: ddoName,
                code: ddoCode,
                remarks: remarks
            }

            var loginUserId = getUserSessionElement("userId");

            $.get(server_base_url + "/financial/account/DDO/Save", {
                ddojson: JSON.stringify(ddoJson),
                userid: loginUserId
            }).done(function(data) {
                if (data.statuscode == fail) {
                    displaySmallErrorMessagesInRed("ddoMessageDiv", failMessage + "");
                } else if (data.statuscode == unauthorized) {
                    displaySmallErrorMessagesInRed("ddoMessageDiv", unauthorizedMessage + "");
                } else if (data.statuscode == statusException) {
                    displaySmallErrorMessagesInRed("ddoMessageDiv", statusExceptionMessage + "");
                } else if (data.statuscode == invalidSession) {
                    callSessionTimeout();
                } else if (data != null) {
                    $("#ddoName").prop("disabled", true);
                    $("#ddoCode").prop("disabled", true);
//            $("#ddoLocation").prop("disabled", true);
                    $("#ddoRemarks").prop("readonly", true);
                    $("#ddoButtonSave").attr('disabled', true);
                    $("#resetButton").attr('disabled', true);
                    displaySuccessMessages("ddoMessageDiv", successMessage, "");
                    setTimeout(function() {
                        DDOMasterCreation();
                }, 3000);

                }
                else {
                    displaySmallErrorMessagesInRed("ddoMessageDiv", "DDO Creation Failed" + "");
                }
            });
    } else {
        displaySmallErrorMessagesInRed("ddoMessageDiv", "Please fill valid Entries" + "");
        }

    }
}

function editDDoInfo(ddoData, id) {
    if (checkUserPrivelege(pvUpdateDDO)) {
        $("#ddoName").focus();

        if (ddoData == null || ddoData == "" || ddoData == undefined) {
            return false;
        }
    $("#ddoTableBodyId tr").css("background-color", "white");
    $("#ddoTableBodyId tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        ddoData = JSON.parse(decodeURI(ddoData));
        $("#ddoName").val(ddoData.ddoName);
        $("#ddoCode").val(ddoData.code);
//    $("#ddoLocation").val(ddoData.location);
        $("#ddoRemarks").val(ddoData.remarks);
        $("#messageDiv").text("");
        $("#ddoName").prop("readonly", false);
        $("#ddoCode").prop("readonly", false);
        $("#location").prop("readonly", false);
        $("#ddoRemarks").prop("readonly", false);
        $("#ddoButton").text("").append("<center><button id='updateButton' onclick=updateDDO('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='DDOMasterCreation()' id='ddoUpdateReset' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");
    }
}

function updateDDO(id) {
    if (checkUserPrivelege(pvUpdateDDO)) {
        var ddoName = $("#ddoName").val();
        var code = $("#ddoCode").val();
//    var location = $("#ddoLocation").val();
        var remarks = $("#ddoRemarks").val();
        
        if (ddoName == "" || ddoName == "undefined") {
            displaySmallErrorMessagesInRed("ddoMessageDiv", "failMessage" + "");
            return false;
    }

    var ddoUpdateJson = {
        ddoName: ddoName,
        code: code,
        remarks: remarks
    }

    var loginUserId = getUserSessionElement("userId");

    $.get(server_base_url + "/financial/account/DDO/Update", {
        ddoUpdateJson: JSON.stringify(ddoUpdateJson),
        ddoid: id,
        userid: loginUserId
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("ddoMessageDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("ddoMessageDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("ddoMessageDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#ddoName").prop("disabled", true);
            $("#ddoCode").prop("disabled", true);
//            $("#ddoLocation").prop("disabled", true);
            $("#ddoRemarks").prop("readonly", true);
            $("#updateButton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages("ddoMessageDiv", updateMessage, "");
            setTimeout(function() {
                DDOMasterCreation();
            }, 3000);
        }
            else {
                displaySmallErrorMessagesInRed("ddoMessageDiv", "DDO Updation Failed" + "");
            }
        });

    }
}

function deleteDDO(ddoId) {
    if (checkUserPrivelege(pvDeleteDDO)) {
        var currentLoginUser = getUserSessionElement("userId");
        $.get(server_base_url + "/financial/account/DDO/Delete", {
            currentuser: currentLoginUser,
            ddoid: ddoId
        }).done(function(data) {
            if (data.statuscode == fail) {
                displaySmallErrorMessagesInRed("ddoListErrorMsgId", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("ddoListErrorMsgId", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displaySmallErrorMessagesInRed("ddoListErrorMsgId", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == delete_map) {
                // dispalyhrmsCommonReligion();
                displaySuccessMessages("ddoListErrorMsgId", "This DDO " + delete_map_message, "");
                setTimeout(function() {
                    ddoListTable();
                }, 1000);
            } else if (data != null) {
                displaySuccessMessages("ddoListErrorMsgId", deleteMessage, "");
                setTimeout(function() {
                    ddoListTable();
                }, 1000);
            }
            else {
                displaySmallErrorMessagesInRed("ddoListErrorMsgId", "DDO Deletion Failed" + "");
            }
        });
    }
}