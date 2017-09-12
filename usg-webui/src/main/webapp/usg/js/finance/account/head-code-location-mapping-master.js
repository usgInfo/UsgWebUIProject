/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function headCodeLocationMappingMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="headCodeLocationMappingMaster()">Head Code Location Mapping</a>');


    $("#" + divId).text("").append('<div id="headCodeLocationMappingDivId"></div>');
    $("#headCodeLocationMappingDivId").text("").append('<div id="headCodeLocationMappingTabMenu" />');

    $("#headCodeLocationMappingTabMenu").append('<div id="headCodeLocationMappingMainMenu" class="row" />');
    $("#headCodeLocationMappingTabMenu").append('<div id="headCodeLocationMappingListMainMenu" class="row" />');
    if (checkUserPrivelege(pvCreateHeadCodeLocMapping)) {

        $("#headCodeLocationMappingMainMenu").append('<div id="headCodeLocationMappingMainPanel" class="panel panel-blue" />');
        $("#headCodeLocationMappingMainPanel").append('<div id="headCodeLocationMappingMainHeading" class="panel-heading" />');
        $("#headCodeLocationMappingMainHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Head Code Location Mapping Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="headcodeCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
        $("#headCodeLocationMappingMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#headcodeCollp").click(function() {
            $("#collapseOne1").toggle();
            if ($("#headcodeCollp span").hasClass("glyphicon-minus-sign")) {
                $("#headcodeCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#headcodeCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="headCodeLocationMappingMainBody" class = "panel-body pan" />');
        $("#headCodeLocationMappingMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#headCodeLocationMappingMainBody").append('<center><span id="headCodeLocationMappingMessageDiv"></span></center>');
        $("#headCodeLocationMappingMainBody").append('<div id="headCodeLocationMappingBodyDiv" class="form-body pal" />');
        $("#headCodeLocationMappingBodyDiv").append('<div class="form-group col-lg-12"><label for="ddo" class="col-lg-3 control-label">DDO <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><select class="form-control" name="ddo" id="ddo"></select></div></div></div>');
        $("#headCodeLocationMappingBodyDiv").append('<div class="form-group col-lg-12"><label for="location" class="col-lg-3 control-label">Location <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><select class="form-control" name="location" id="location"></select></div></div></div>');
        $("#headCodeLocationMappingBodyDiv").append('<div class="form-group col-lg-12"><label for="budgetHead" class="col-lg-3 control-label">Budget Head <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><select class="form-control" name="budgetHead" id="budgetHeadSelect"></select></div></div></div>');
        $("#headCodeLocationMappingBodyDiv").append("<div class='form-group' id='footerHeadCodeDivId'><center><button id='saveHeadMappingButton' onclick=saveHeadMappingInfo() class='btn btn-success' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetHeadMappingButton'onclick=resetHeadCodeLocationMapping() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
        $("#ddo").attr("onchange", "getLocationBasedOnDDO();");
        //getLoggedInDDOLocationInDropDown("ddo", "location");
    }
    headCodeLocationMappingTable();
    setTimeout(function() {
        fetchDDOInfo();
    }, 300);
    setTimeout(function() {
        fetchBudgetHeadInfo();
    }, 400);



}

function resetHeadCodeLocationMapping() {
    $("#location").val('');
    $("#ddo").val('0');
    $("#budgetHeadSelect").val('0');
    $("#headCodeLocationMappingMessageDiv").text("");
}

function fetchDDOInfo() {
    $("#ddo").text("").append("<option value='0'>----Select DDO----</option>");
    $.get(server_base_url + "financial/account/DDO/ViewList", {
    }).done(function(data) {
        if (data.statuscode == NoData) {
            $("#messageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + NoDataFound + "<strong></div></center>");
        } else if (data.statuscode == fail) {
            $("#messageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + failMessage + "<strong></div></center>");
        } else if (data.statuscode == unauthorized) {
            $("#messageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + unauthorizedMessage + "<strong></div></center>");
        } else if (data.statuscode == statusException) {
            $("#messageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + statusExceptionMessage + "<strong></div></center>");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#ddo").append("<option value='" + subData._id.$oid + "'>" + subData.ddoName + "</option>");
            }
        }
    });
}


function fetchLocationInfo() {
    $("#location").text("").append("<option value='0'>----Select Location----</option>");
    $.get(server_base_url + "/financial/account/Location/ViewList", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#location").append("<option value='" + subData._id.$oid + "'>" + subData.locationName + "</option>");
            }
        }
    });
}


function fetchBudgetHeadInfo() {
    $("#budgetHeadSelect").text("").append("<option value='0'>----Select Budget Head----</option>");
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            // var mainData = data.result;
            for (var i = 0; i < data.length; i++) {
                //     var subData = mainData[i];
                $("#budgetHeadSelect").append("<option value='" + data[i]._id.$oid + "'>" + data[i].budgetHead + "</option>");
            }
        }
    });
}

function saveHeadMappingInfo() {
    if (checkUserPrivelege(pvCreateHeadCodeLocMapping)) {
        var location = $("#location").val();
        var ddo = $("#ddo").val();
        var budgetHead = $("#budgetHeadSelect").val();
        if (location == 0 || ddo == 0 || budgetHead == 0) {
            displaySmallErrorMessagesInRed("headCodeLocationMappingMessageDiv", "Please Fill * fields" + "");
            return false;
        }

        var headCodeJson = {
            location: location,
            ddo: ddo,
            budgetHead: budgetHead
        }
        var userId = getUserSessionElement("userId");
        $.get(server_base_url + "/financial/account/HeadCodeLocationMapping/Save", {
            headcodejson: JSON.stringify(headCodeJson),
            loginuserid: userId
        }).done(function(data) {
            if (data == fail) {
                displayErrorMessages("headCodeLocationMappingMessageDiv", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("headCodeLocationMappingMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("headCodeLocationMappingMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("headCodeLocationMappingMessageDiv", "" + existed + "");
                setTimeout(function() {
                    $("#headCodeLocationMappingMessageDiv").text("").val("");
                }, 3000);
            } else if (data != null) {
                $("#location").prop("disabled", true);
                $("#ddo").prop("disabled", true);
                $("#budgetHeadSelect").prop("disabled", true);
                $("#saveHeadMappingButton").attr('disabled', true);
                $("#resetHeadMappingButton").attr('disabled', true);
                displaySuccessMessages("headCodeLocationMappingMessageDiv", successMessage, "");
                setTimeout(function() {
                    headCodeLocationMappingMaster();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("headCodeLocationMappingMessageDiv", "Head Code Location Mapping Creation Failed" + "");
            }
        });
    }

}
function editHeadCodeInfo(headCodeData, id) {
    // $('select[name^="location"]').focus();
    if (headCodeData == null || headCodeData == "" || headCodeData == undefined) {
        return false;
    }
    $("#headCodeLocationMappingTableBodyId tr").css("background-color", "white");
    $("#headCodeLocationMappingTableBodyId tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    headCodeData = JSON.parse(decodeURI(headCodeData));
    $("#location").val(headCodeData.location);
    $("#ddo").val(headCodeData.ddo);
    $("#budgetHeadSelect").val(headCodeData.budgetHead);
    $("#MessageDiv").text("");
    $("#location").prop("disabled", false);
    $("#ddo").prop("disabled", false);
    $("#budgetHeadSelect").prop("disabled", false);
    $("#footerHeadCodeDivId").text("").append("<center><button id='updateButton' onclick=updateHeadMappingInfo('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetUpdateButton' onclick='headCodeLocationMappingMaster()' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");
}

function updateHeadMappingInfo(id) {
    if (checkUserPrivelege(pvUpdateHeadCodeLocMapping)) {
        var location = $("#location").val();
        var ddo = $("#ddo").val();
        var budgetHead = $("#budgetHeadSelect").val();
        if (location == 0 || ddo == 0 || budgetHead == 0) {
            displaySmallErrorMessagesInRed("ddoMessageDiv", "Please Fill * fields" + "");
            return false;
        }
        var loginUserId = getUserSessionElement("userId");
        var updateheadCodeJson = {
            location: location,
            ddo: ddo,
            budgetHead: budgetHead
        }

        $.get(server_base_url + "/financial/account/HeadCodeLocationMapping/Update", {
            headcodejson: JSON.stringify(updateheadCodeJson),
            loginuserid: loginUserId,
            headcodeid: id
        }).done(function(data) {
            if (data == fail) {
                displayErrorMessages("headCodeLocationMappingMessageDiv", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("headCodeLocationMappingMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("headCodeLocationMappingMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("headCodeLocationMappingMessageDiv", "" + existed + "");
                setTimeout(function() {
                    $("#headCodeLocationMappingMessageDiv").text("").val("");
                }, 3000);
            } else if (data != null) {
                $("#location").prop("disabled", true);
                $("#ddo").prop("disabled", true);
                $("#budgetHeadSelect").prop("disabled", true);
                $("#updateButton").attr('disabled', true);
                $("#resetUpdateButton").attr('disabled', true);
                displaySuccessMessages("headCodeLocationMappingMessageDiv", updateMessage, "");
                setTimeout(function() {
                    headCodeLocationMappingMaster();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("headCodeLocationMappingMessageDiv", "Head Code Location Updation Failed" + "");
            }
        });
    }
}

function deleteHeadCode(headCodeId) {
    if (checkUserPrivelege(pvDeleteHeadCodeLocMapping)) {
        var currentLoginUser = getUserSessionElement("userId");
        $.get(server_base_url + "financial/account/HeadCodeLocationMapping/Delete", {
            currentuser: currentLoginUser,
            headcodeid: headCodeId
        }).done(function(data) {
            if (data.statuscode == fail) {
                displaySmallErrorMessagesInRed("headCodeLocationMappingListErrorMsgId", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("headCodeLocationMappingListErrorMsgId", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displaySmallErrorMessagesInRed("headCodeLocationMappingListErrorMsgId", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {
                displaySuccessMessages("headCodeLocationMappingListErrorMsgId", deleteMessage, "");
                setTimeout(function() {
                    headCodeLocationMappingTable();
                }, 3000);
            }
        });
    }
}

function headCodeLocationMappingTable() {
    if (checkUserPrivelege(pvViewHeadCodeLocMapping)) {
        $("#headCodeLocationMappingListMainMenu").text("").append('<div id="headCodeLocationMappingListPanel" class="panel panel-blue" />');
        $("#headCodeLocationMappingListPanel").append('<div id="headCodeLocationMappingListHeading" class="panel-heading" />');
        $("#headCodeLocationMappingListHeading").append('<class="panel-title" data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Head Code Location</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="headCodeListCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
        $("#headCodeLocationMappingListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#headCodeListCollp").click(function() {
            $("#collapseOne2").toggle();
            if ($("#headCodeListCollp span").hasClass("glyphicon-minus-sign")) {
                $("#headCodeListCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#headCodeListCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append('<div id="headCodeLocationMappingListBody" class = "panel-body pan" />');
        $("#headCodeLocationMappingListBody").append('<div id="panelRow" class="row" />');

        $("#headCodeLocationMappingListBody").append('<div id="headCodeLocationMappingListErrorMsgId" />');
        $("#headCodeLocationMappingListBody").append('<div id="headCodeLocationMappingListMainBody" class="table-responsive" />');
        $("#headCodeLocationMappingListMainBody").append('<table id="headCodeLocationMappingTable" class="table table-bordered" />');
        $("#headCodeLocationMappingTable").append('<thead id="headCodeLocationMappingTableHeadId" />');
        $("#headCodeLocationMappingTable").append('<tbody id="headCodeLocationMappingTableBodyId" />');

        $("#headCodeLocationMappingTableHeadId").append('<tr id="headCodeLocationMappingTableHeadIdTrHead"><th>Sno</th><th>Location</th><th>DDO</th><th>Budget Head</th>');
        if (checkUserPrivelege(pvUpdateHeadCodeLocMapping)) {
            $("#headCodeLocationMappingTableHeadIdTrHead").append('<th><center>Edit</center</th>');
        }
        if (checkUserPrivelege(pvDeleteHeadCodeLocMapping)) {
            $("#headCodeLocationMappingTableHeadIdTrHead").append('<th><center>Delete</center></th>');
        }
        var ddoLocationMap = {
            ddo: $("#ddo").val(),
            location: $("#location").val()
        };

        $.post(server_base_url + "/financial/account/HeadCodeLocationMapping/ViewList", {
            filter: JSON.stringify(ddoLocationMap)}).done(function(data) {
            if (data.statuscode == NoData) {
                displaySmallErrorMessagesInRed("headCodeLocationMappingListErrorMsgId", NoDataFoundMessage + "");
            }
            if (data == fail) {
                displaySmallErrorMessagesInRed("headCodeLocationMappingListErrorMsgId", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("headCodeLocationMappingListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("headCodeLocationMappingListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("headCodeLocationMappingListErrorMsgId", "No User available" + "");
            } else if (data != null) {
                var sno = 0;
                var mainData = data.result;
                for (var i = mainData.length - 1; i >= 0; i--) {
                    sno++;
                    var subData = mainData[i];
                    var location = subData.locationName;
                    if (location == "undefined" || location == undefined) {
                        location = "";
                    }
                    var ddo = subData.ddoName;
                    if (ddo == "undefined" || ddo == undefined) {
                        ddo = "";
                    }
                    var budgetHead = subData.budgetHeadName;
                    if (budgetHead == "undefined" || budgetHead == undefined) {
                        budgetHead = "";
                    }
                    $("#headCodeLocationMappingTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + location + "</td>"
                            + "<td style='cursor:pointer;'>" + ddo + "</td>"
                            + "<td style='cursor:pointer;'>" + budgetHead + "</td>");
                    if (checkUserPrivelege(pvUpdateHeadCodeLocMapping)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=editHeadCodeInfo('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>");
                    }
                    if (checkUserPrivelege(pvDeleteHeadCodeLocMapping)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteHeadCode','headCodeLocationMappingTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");
                    }
                }
                $("#headCodeLocationMappingTable").dataTable();
            } else {
                displaySmallErrorMessagesInRed("headCodeLocationMappingListErrorMsgId", NoDataFoundMessage + "");
            }
        });
    }
}