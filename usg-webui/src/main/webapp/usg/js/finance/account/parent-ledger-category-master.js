/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function parentLedgerCategoryMasterCreation(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="parentLedgerCategoryMasterCreation()">Parent Ledger Category Master</a>');

    $("#" + divId).text("").append('<div id="parentLedgerCategoryDivId"></div>');
    $("#parentLedgerCategoryDivId").text("").append('<div id="parentLedgerCategoryTabMenu" />');

    $("#parentLedgerCategoryTabMenu").append('<div id="parentLedgerCategoryMainMenu" class="row" />');
    $("#parentLedgerCategoryTabMenu").append('<div id="parentLedgerCategoryListMainMenu" class="row" />');

    $("#parentLedgerCategoryMainMenu").append('<div id="parentLedgerCategoryMainPanel" class="panel panel-blue" />');
    $("#parentLedgerCategoryMainPanel").append('<div id="parentLedgerCategoryMainHeading" class="panel-heading" />');
    $("#parentLedgerCategoryMainHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne1"><center>Parent Ledger Category Master</center></a>');

    $("#parentLedgerCategoryMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#collapseOne1").append('<div id="parentLedgerCategoryMainBody" class = "panel-body pan" />');
    $("#parentLedgerCategoryMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#parentLedgerCategoryMainBody").append('<center><span id="parentLedgerCategoryMessageDiv"></span></center>');
    $("#parentLedgerCategoryMainBody").append('<div id="parentLedgerCategoryBodyDiv" class="form-body pal" />');

    $("#parentLedgerCategoryBodyDiv").append('<div class="form-group col-lg-12"><label for="parentLedgerCategoryName" class="col-lg-3 control-label">Parent Ledger Category <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="parentLedgerName" type="text" placeholder="Parent Ledger Name" onkeyup=validateName("parentLedgerName","parentLedgerCategoryErr") class="form-control"/><span id="parentLedgerCategoryErr" class="text-danger"></span></div></div></div>');
    $("#parentLedgerCategoryBodyDiv").append('<div class="form-group col-lg-12"><label for="parentLedgerCategoryDetail" class="col-lg-3 control-label">Description </label><div class="col-lg-6 col-sm-offset-1"><div><textarea class="form-control" rows="2" id="parentLedgerDescription" placeholder="Please enter description..."></textarea></div></div></div>');
    $("#parentLedgerCategoryBodyDiv").append("<div class='form-group' id='parentLedgerButton'><center><button id='parentLedgerButtonSave' onclick=saveParentLedger() class='btn btn-success' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetParentLedgerCategory() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
    parentLedgerCategoryTable();
}

function resetParentLedgerCategory() {
    $("#parentLedgerName").val("");
    $("#parentLedgerDescription").val("");
    $("#parentLedgerCategoryErr").text("");
    $("#parentLedgerCategoryMessageDiv").text("");
}

function saveParentLedger() {
    var parentLedgerName = $("#parentLedgerName").val();
    var description = $("#parentLedgerDescription").val();

    if (parentLedgerName == "" || parentLedgerName == "undefined") {
        displaySmallErrorMessagesInRed("parentLedgerCategoryMessageDiv", "Please Fill * fields" + "");
        return false;
    }

    var parentLedgerJson = {
        parentLedgerName: parentLedgerName,
        description: description
    }

    var loginUserId = getUserSessionElement("userId");

    $.get(server_base_url + "/finance/account/ParentLedger/Save", {
        parentledgerjson: JSON.stringify(parentLedgerJson),
        userid: loginUserId
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("parentLedgerCategoryMessageDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("parentLedgerCategoryMessageDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("parentLedgerCategoryMessageDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#parentLedgerName").prop("disabled", true);
            $("#parentLedgerDescription").prop("readonly", true);
            $("#parentLedgerButtonSave").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages("parentLedgerCategoryMessageDiv", successMessage, "");
            setTimeout(function() {
                parentLedgerCategoryMasterCreation();
            }, 500);

        }
        else {
            displaySmallErrorMessagesInRed("parentLedgerCategoryMessageDiv", "Please fill valid Entries" + "");
        }
    });

}

function parentLedgerCategoryTable() {

    $("#parentLedgerCategoryListMainMenu").text("").append('<div id="parentLedgerListPanel" class="panel panel-blue" />');
    $("#parentLedgerListPanel").append('<div id="parentLedgerListHeading" class="panel-heading" />');
    $("#parentLedgerListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>Parent Ledger Category Table</center></a>');

    $("#parentLedgerListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
    $("#collapseOne2").append('<div id="parentLedgerListBody" class = "panel-body pan" />');
    $("#parentLedgerListBody").append('<div id="panelRow" class="row" />');

    $("#parentLedgerListBody").append('<div id="parentLedgerListErrorMsgId" />');
    $("#parentLedgerListBody").append('<div id="parentLedgerListMainBody" class="table-responsive" />');
    $("#parentLedgerListMainBody").append('<table id="parentLedgerTable" class="table table-striped table-bordered table-hover" />');
    $("#parentLedgerTable").append('<thead id="parentLedgerTableHeadId" />');
    $("#parentLedgerTable").append('<tbody id="parentLedgerTableBodyId" />');

    $("#parentLedgerTableHeadId").append('<tr><th>Sno</th><th>Parent Ledger</th><th>Description</th><th><center>Edit</center</th><th><center>Delete</center></th></tr>');
    $.post(server_base_url + "/finance/account/ParentLedger/ViewList", {
    }).done(function(data) {
        if (data.statuscode == NoData) {
            displaySmallErrorMessagesInRed("parentLedgerListErrorMsgId", NoDataFoundMessage + "");
        }
        if (data == fail) {
            displaySmallErrorMessagesInRed("parentLedgerListErrorMsgId", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("parentLedgerListErrorMsgId", unauthorizedMessage + "");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("parentLedgerListErrorMsgId", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessagesInRed("parentLedgerListErrorMsgId", "No User available" + "");
        } else if (data != null) {
            var sno = 0;
            var mainData = data.result;
            for (var i = mainData.length - 1; i >= 0; i--) {
                sno++;
                var subData = mainData[i];
                $("#parentLedgerTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.parentLedgerName + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.description + "</td>"
                        + "<td style='cursor:pointer;' onclick=editParentLedgerInfo('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>"
                        + "<td style='cursor:pointer;' onclick=deletePopUp('deleteParentLedger','parentLedgerCategoryTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td></tr>");
            }
            $("#parentLedgerTable").dataTable();
        } else {
            displaySmallErrorMessagesInRed("parentLedgerListErrorMsgId", NoDataFoundMessage + "");
        }
    });

}

function editParentLedgerInfo(parentLedgerData, id) {
    $("#parentLedgerName").focus();

    if (parentLedgerData == null || parentLedgerData == "" || parentLedgerData == undefined) {
        return false;
    }

    parentLedgerData = JSON.parse(decodeURI(parentLedgerData));
    $("#parentLedgerName").val(parentLedgerData.parentLedgerName);
    $("#parentLedgerDescription").val(parentLedgerData.description);
    $("#messageDiv").text("");
    $("#parentLedgerName").prop("readonly", false);
    $("#parentLedgerDescription").prop("readonly", false);
    $("#parentLedgerButton").text("").append("<center><button id='updateButton' onclick=updateParentLedger('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='parentLedgerCategoryMasterCreation()' id='parentLedgerUpdateReset' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");
}

function updateParentLedger(id) {
    var parentLedgerName = $("#parentLedgerName").val();
    var description = $("#parentLedgerDescription").val();

    if (parentLedgerName == "" || parentLedgerName == "undefined") {
        $("#parentLedgerCategoryMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
        return false;
    }

    var updateParentLedgerJson = {
        parentLedgerName: parentLedgerName,
        description: description
    }

    var loginUserId = getUserSessionElement("userId");

    $.get(server_base_url + "/finance/account/ParentLedger/Update", {
        parentLedgerUpdateJson: JSON.stringify(updateParentLedgerJson),
        parentLedgerId: id,
        userid: loginUserId
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("parentLedgerCategoryMessageDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("parentLedgerCategoryMessageDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("parentLedgerCategoryMessageDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#parentLedgerName").prop("disabled", true);
            $("#parentLedgerDescription").prop("readonly", true);
            $("#parentLedgerButtonSave").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages("parentLedgerCategoryMessageDiv", updateMessage, "");
            setTimeout(function() {
                parentLedgerCategoryMasterCreation();
            }, 500);
        }
        else {
            displaySmallErrorMessagesInRed("parentLedgerCategoryMessageDiv", "Location Creation Failed" + "");
        }
    });
}

function deleteParentLedger(parentLedgerId) {
    var currentLoginUser = getUserSessionElement("userId");
    $.get(server_base_url + "/finance/account/ParentLedger/Delete", {
        currentuser: currentLoginUser,
        parentLedgerId: parentLedgerId
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("parentLedgerListErrorMsgId", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("parentLedgerListErrorMsgId", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("parentLedgerListErrorMsgId", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            displaySuccessMessages("parentLedgerListErrorMsgId", deleteMessage, "");
            setTimeout(function() {
                parentLedgerCategoryTable();
            }, 500);
        }
        else {
            displaySmallErrorMessagesInRed("parentLedgerListErrorMsgId", "Parent Ledger Deletion Failed" + "");
        }
    });
}



