/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function narationMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="narationMaster()">Narration Master</a>');


    $("#" + divId).text("").append('<div id="narationDivId"></div>');
    $("#narationDivId").text("").append('<div id="narationTabMenu" />');

    $("#narationTabMenu").append('<div id="narationMainMenu" class="row" />');
    $("#narationTabMenu").append('<div id="narationListMainMenu" class="row" />');
    if (checkUserPrivelege(pvCreateStandardNarration)) {
        $("#narationMainMenu").append('<div id="narationMainPanel" class="panel panel-blue" />');
        $("#narationMainPanel").append('<div id="narationMainHeading" class="panel-heading" />');
        $("#narationMainHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Narration Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="narationCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
        $("#narationMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#narationCollp").click(function () {
            $("#collapseOne1").toggle();
            if ($("#narationCollp span").hasClass("glyphicon-minus-sign")) {
                $("#narationCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#narationCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="narationMainBody" class = "panel-body pan" />');
        $("#narationMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#narationMainBody").append('<center><span id="narationMessageDiv"></span></center>');
        $("#narationMainBody").append('<div id="narationBodyDiv" class="form-body pal" />');
        $("#narationBodyDiv").append('<div class="form-group col-lg-12"><label for="narationType" class="col-lg-3 control-label">Narration Type <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><select class="form-control" name="naration" id="narationTypeSelect"><option value="0">----Select Narration Type----</option>'

                + '<option>Common</option>'
                + '<option>Contra Voucher</option>'
                + '<option>Journal Voucher</option>'
                + '<option>Payment Voucher</option>'
                + '<option>Receipt Voucher</option>'
                + '</select></div></div></div>');
        $("#narationBodyDiv").append('<div class="form-group col-lg-12"><label for="narationDetails" class="col-lg-3 control-label">Narration Details<span class="require">*</span> </label><div class="col-lg-6 col-sm-offset-1"><div><textarea class="form-control" rows="2" id="narationDetials" placeholder="Please enter narration details"></textarea></div></div></div>');
        $("#narationBodyDiv").append("<div class='form-group' id='narationButton'><center><button onclick=createNaration() id='saveButton' class='btn btn-success' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetNarations() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });


    }
    narationList();
}

function resetNarations() {
    $("#narationTypeSelect").val('0');
    $("#narationDetials").val("");
    $("#narationMessageDiv").text("");
}

function createNaration() {
    if (checkUserPrivelege(pvCreateStandardNarration)) {
        var loginId = getUserSessionElement("userId");
        var narationType = $("#narationTypeSelect").val();
        var narationDetails = $("#narationDetials").val();

        if (narationType == 0 || narationDetails == "" || narationDetails == null || narationDetails == undefined) {
            displaySmallErrorMessagesInRed("narationMessageDiv", "Please Fill * fields" + "");
            return false;
        }

        var narationJson = {
            narationType: narationType,
            narationDetail: narationDetails
        }

        $.get(server_base_url + "financial/account/Naration/Save", {
            narationJson: JSON.stringify(narationJson),
            loginuserid: loginId
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("narationMessageDiv", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("narationMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("narationMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("narationMessageDiv", "" + existed + "");
                setTimeout(function () {
                    $("#narationMessageDiv").text("").val("");
                }, 3000);
            } else if (data != null) {
                $("#narationTypeSelect").prop("disabled", true);
                $("#narationDetials").prop("readonly", true);
                $("#resetButton").attr('disabled', true);
                $("#saveButton").attr('disabled', true);
                displaySuccessMessages("narationMessageDiv", successMessage, "");
                setTimeout(function () {
                    narationMaster();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("ddoMessageDiv", "Naration Creation Failed" + "");
            }
        });
    }
}

function narationList() {
    if (checkUserPrivelege(pvViewStandardNarration)) {
        $("#narationListMainMenu").text("").append('<div id="narationListPanel" class="panel panel-blue" />');
        $("#narationListPanel").append('<div id="narationListHeading" class="panel-heading" />');
        $("#narationListHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Narrations</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="narationListCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');

        $("#narationListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#narationListCollp").click(function () {
            $("#collapseOne2").toggle();
            if ($("#narationListCollp span").hasClass("glyphicon-minus-sign")) {
                $("#narationListCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#narationListCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append('<div id="narationListBody" class = "panel-body pan" />');
        $("#narationListBody").append('<div id="panelRow" class="row" />');

        $("#narationListBody").append('<div id="narationListErrorMsgId" />');
        $("#narationListBody").append('<div id="narationListMainBody" class="table-responsive" />');
        $("#narationListMainBody").append('<table id="narationTable" class="table table-bordered" />');
        $("#narationTable").append('<thead id="narationTableHeadId" />');
        $("#narationTable").append('<tbody id="narationTableBodyId" />');
        $("#narationTableHeadId").append('<tr id="narationTableHeadIdTrHead"><th>Sno</th><th>Narration Type</th><th>Description</th>');
        if (checkUserPrivelege(pvUpdateStandardNarration)) {
            $("#narationTableHeadIdTrHead").append('<th><center>Edit</center</th>');
        }
        if (checkUserPrivelege(pvDeleteStandardNarration)) {
            $("#narationTableHeadIdTrHead").append('<th><center>Delete</center></th>');
        }
        $.post(server_base_url + "/financial/account/Naration/ViewList", {
        }).done(function (data) {
            if (data.statuscode == NoData) {
                displaySmallErrorMessagesInRed("narationListErrorMsgId", NoDataFoundMessage + "");
            }
            if (data == fail) {
                displaySmallErrorMessagesInRed("narationListErrorMsgId", "Invalid username / password" + "");
            } else if (data == unauthorized) {
                displaySmallErrorMessagesInRed("narationListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("narationListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("narationListErrorMsgId", "No User available" + "");
            } else if (data != null) {
                var sno = 0;
                var mainData = data.result;
                for (var i = mainData.length - 1; i >= 0; i--) {
                    sno++;
                    var subData = mainData[i];
                    $("#narationTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.narationType + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.narationDetail + "</td>");
                    if (checkUserPrivelege(pvUpdateStandardNarration)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=editNarationInfo('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>");
                    }
                    if (checkUserPrivelege(pvDeleteStandardNarration)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteNaration','narationList','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");
                    }
                }
                $("#narationTable").dataTable();
            } else {
                displaySmallErrorMessagesInRed("narationListErrorMsgId", NoDataFoundMessage + "");
            }
        });
    }
}

function editNarationInfo(narationData, id) {
    $('select[name^="naration"]').focus();

    if (narationData == null || narationData == "" || narationData == undefined) {
        return false;
    }
    $("#narationTableBodyId tr").css("background-color", "white");
    $("#narationTableBodyId tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    narationData = JSON.parse(decodeURI(narationData));
    $("#narationTypeSelect").val(narationData.narationType);
    $("#narationDetials").val(narationData.narationDetail);
    $("#narationTypeSelect").prop("disabled", false);
    $("#narationDetials").prop("readonly", false);
    $("#narationButton").text("").append("<center><button id='updateButton' onclick=updateNaration('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetUpdateButton' onclick='narationMaster()' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");


}

function updateNaration(id) {
    if (checkUserPrivelege(pvUpdateStandardNarration)) {
        var loginId = getUserSessionElement("userId");
        var narationType = $("#narationTypeSelect").val();
        var narationDetails = $("#narationDetials").val();

        if (narationType == 0 || narationDetails == "" || narationDetails == null || narationDetails == undefined) {
            displaySmallErrorMessagesInRed("narationMessageDiv", "Please Fill * fields" + "");
            return false;
        }

        var narationUpdateJson = {
            narationType: narationType,
            narationDetail: narationDetails,
        }

        $.get(server_base_url + "/financial/account/Naration/Update", {
            narationUpdateJson: JSON.stringify(narationUpdateJson),
            loginuserid: loginId,
            narationId: id
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("narationMessageDiv", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("narationMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("narationMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("narationMessageDiv", "" + existed + "");
                setTimeout(function () {
                    $("#narationMessageDiv").text("").val("");
                }, 3000);
            } else if (data != null) {
                $("#narationTypeSelect").prop("disabled", true);
                $("#narationDetials").prop("readonly", true);
                $("#resetUpdateButton").attr('disabled', true);
                $("#updateButton").attr('disabled', true);
                displaySuccessMessages("narationMessageDiv", updateMessage, "");
                setTimeout(function () {
                    narationMaster();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("narationMessageDiv", "Naration Updation Failed" + "");
            }
        });
    }
}

function deleteNaration(narationId) {
    if (checkUserPrivelege(pvDeleteStandardNarration)) {
        var currentLoginUser = getUserSessionElement("userId");
        $.get(server_base_url + "/financial/account/Naraion/Delete", {
            currentuser: currentLoginUser,
            narationid: narationId
        }).done(function (data) {
            if (data.statuscode == fail) {
                displaySmallErrorMessagesInRed("narationListErrorMsgId", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("narationListErrorMsgId", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displaySmallErrorMessagesInRed("narationListErrorMsgId", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {
                displaySuccessMessages("narationListErrorMsgId", deleteMessage, "");
                setTimeout(function () {
                    narationList();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("narationListErrorMsgId", "Naration Deletion Failed" + "");
            }
        });
    }
}
