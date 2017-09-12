/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function underGroupMasterCreation(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="underGroupMasterCreation()">Under Group Master</a>');

    $("#" + divId).text("").append('<div id="underGroupDivId"></div>');
    $("#underGroupDivId").text("").append('<div id="underGroupTabMenu" />');

    $("#underGroupTabMenu").append('<div id="underGroupMainMenu" class="row" />');
    $("#underGroupTabMenu").append('<div id="underGroupListMainMenu" class="row" />');

    $("#underGroupMainMenu").append('<div id="underGroupMainPanel" class="panel panel-blue" />');
    $("#underGroupMainPanel").append('<div id="underGroupMainHeading" class="panel-heading" />');
    $("#underGroupMainHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne1"><center>Under Group Master</center></a>');

    $("#underGroupMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#collapseOne1").append('<div id="underGroupMainBody" class = "panel-body pan" />');
    $("#underGroupMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#underGroupMainBody").append('<center><span id="underGroupMessageDiv"></span></center>');
    $("#underGroupMainBody").append('<div id="underGroupBodyDiv" class="form-body pal" />');

    $("#underGroupBodyDiv").append('<div class="form-group col-lg-12"><label for="underGroupName" class="col-lg-3 control-label">Under Group Name <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="underGroupName" type="text" placeholder="Under Group Name" class="form-control"/><span id="underGroupErr" class="text-danger"></span></div></div></div>');
    $("#underGroupBodyDiv").append('<div class="form-group col-lg-12"><label for="underGroupDetail" class="col-lg-3 control-label">Description </label><div class="col-lg-6 col-sm-offset-1"><div><textarea class="form-control" rows="2" id="underGroupDescription" placeholder="Please enter description..."></textarea></div></div></div>');
    $("#underGroupBodyDiv").append("<div class='form-group' id='groupButton'><center><button id='groupButtonSave' onclick=saveGroup() class='btn btn-success' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetgroup() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
    underGroupTable();

//    underGroupName
//    underGroupDescription
}

function resetgroup() {
    $("#underGroupName").val("");
    $("#underGroupDescription").val("");
    $("#underGroupMessageDiv").text("");
}

function saveGroup() {
    var groupName = $("#underGroupName").val();
    var groupRemarks = $("#underGroupDescription").val();

    if (groupName == "" || groupName == "undefined") {
        displaySmallErrorMessagesInRed("underGroupMessageDiv", "Please Fill * fields" + "");
        return false;
    }

    var groupJson = {
        groupName: groupName,
        remarks: groupRemarks
    }

    var loginUserId = getUserSessionElement("userId");

    $.get(server_base_url + "financial/account/GroupMaster/Save", {
        groupjson: JSON.stringify(groupJson),
        userid: loginUserId
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("underGroupMessageDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("underGroupMessageDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("underGroupMessageDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#underGroupName").prop("disabled", true);
            $("#underGroupDescription").prop("readonly", true);
            $("#groupButtonSave").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages("underGroupMessageDiv", successMessage, "");
            setTimeout(function() {
                underGroupMasterCreation();
            }, 500);

        }
        else {
            displaySmallErrorMessagesInRed("underGroupMessageDiv", "Location Creation Failed" + "");
        }
    });

}

function underGroupTable() {

    $("#underGroupListMainMenu").text("").append('<div id="underGroupListPanel" class="panel panel-blue" />');
    $("#underGroupListPanel").append('<div id="underGroupListHeading" class="panel-heading" />');
    $("#underGroupListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>Under Group Table</center></a>');

    $("#underGroupListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
    $("#collapseOne2").append('<div id="underGroupListBody" class = "panel-body pan" />');
    $("#underGroupListBody").append('<div id="panelRow" class="row" />');

    $("#underGroupListBody").append('<div id="underGroupListErrorMsgId" />');
    $("#underGroupListBody").append('<div id="underGroupListMainBody" class="table-responsive" />');
    $("#underGroupListMainBody").append('<table id="underGroupTable" class="table table-striped table-bordered table-hover" />');
    $("#underGroupTable").append('<thead id="underGroupTableHeadId" />');
    $("#underGroupTable").append('<tbody id="underGroupTableBodyId" />');

    $("#underGroupTableHeadId").append('<tr><th>Sno</th><th>Group Name</th><th>Description</th><th><center>Edit</center</th><th><center>Delete</center></th></tr>');

    $.post(server_base_url + "/financial/account/GroupMaster/ViewList", {
    }).done(function(data) {
        if (data.statuscode == NoData) {
            displaySmallErrorMessagesInRed("underGroupListErrorMsgId", NoDataFoundMessage + "");
        }
        if (data == fail) {
            displaySmallErrorMessagesInRed("underGroupListErrorMsgId", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("underGroupListErrorMsgId", unauthorizedMessage + "");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("underGroupListErrorMsgId", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessagesInRed("underGroupListErrorMsgId", "No User available" + "");
        } else if (data != null) {
            var sno = 0;
            var mainData = data.result;
            for (var i = mainData.length - 1; i >= 0; i--) {
                sno++;
                var subData = mainData[i];
                $("#underGroupTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.groupName + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.remarks + "</td>"
                        + "<td style='cursor:pointer;' onclick=editGroupMasterInfo('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>"
                        + "<td style='cursor:pointer;' onclick=deletePopUp('deleteGroup','underGroupTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td></tr>");
            }
            $("#underGroupTable").dataTable();
        } else {
            displaySmallErrorMessagesInRed("underGroupListErrorMsgId", NoDataFoundMessage + "");
        }
    });
}

function editGroupMasterInfo(groupData, id) {
    $("#underGroupName").focus();

    if (groupData == null || groupData == "" || groupData == undefined) {
        return false;
    }

    groupData = JSON.parse(decodeURI(groupData));
    $("#underGroupName").val(groupData.groupName);
    $("#underGroupDescription").val(groupData.remarks);
    $("#messageDiv").text("");
    $("#groupName").prop("readonly", false);
    $("#groupRemarks").prop("readonly", false);
    $("#groupButton").text("").append("<center><button id='updateButton' onclick=updateGroup('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='underGroupMasterCreation()' id='groupReset' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");
}

function updateGroup(groupId) {
    var groupName = $("#underGroupName").val();
    var groupRemarks = $("#underGroupDescription").val();

    if (groupName == "" || groupName == "undefined") {
        displaySmallErrorMessagesInRed("underGroupMessageDiv", "Please Fill * fields" + "");
        return false;
    }

    var groupUpdateJson = {
        groupName: groupName,
        remarks: groupRemarks
    }

    var loginUserId = getUserSessionElement("userId");

    $.get(server_base_url + "financial/account/GroupMaster/Update", {
        groupUpdateJson: JSON.stringify(groupUpdateJson),
        groupId: groupId,
        userid: loginUserId
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("underGroupMessageDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("underGroupMessageDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("underGroupMessageDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#underGroupName").prop("disabled", true);
            $("#underGroupDescription").prop("readonly", true);
            $("#updateButton").attr('disabled', true);
            $("#groupReset").attr('disabled', true);
            displaySuccessMessages("underGroupMessageDiv", successMessage, "");
            setTimeout(function() {
                underGroupMasterCreation();
            }, 1000);
        }
        else {
            displaySmallErrorMessagesInRed("underGroupMessageDiv", "Location Creation Failed" + "");
        }
    });

}

function deleteGroup(groupId) {
    var currentLoginUser = getUserSessionElement("userId");
    $.get(server_base_url + "/financial/account/GroupMaster/Delete", {
        currentuser: currentLoginUser,
        groupid: groupId
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("underGroupListErrorMsgId", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("underGroupListErrorMsgId", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("underGroupListErrorMsgId", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            displaySuccessMessages("underGroupListErrorMsgId", deleteMessage, "");
            setTimeout(function() {
                underGroupTable();
            }, 1000);
        }
        else {
            displaySmallErrorMessagesInRed("underGroupListErrorMsgId", "DDO Deletion Failed" + "");
        }
    });
}