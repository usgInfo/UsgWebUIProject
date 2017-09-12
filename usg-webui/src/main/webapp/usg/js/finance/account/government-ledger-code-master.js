/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function governmentLedgerCodeMasterCreation(divId)
{
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="governmentLedgerCodeMasterCreation()">Government Ledger Code Master</a>');

    $("#" + divId).text("").append('<div id="governmentLedgerDivId"></div>');
    $("#governmentLedgerDivId").text("").append('<div id="governmentLedgerTabMenu" />');

    $("#governmentLedgerTabMenu").append('<div id="governmentLedgerMainMenu" class="row" />');
    $("#governmentLedgerTabMenu").append('<div id="governmentLedgerListMainMenu" class="row" />');

    $("#governmentLedgerMainMenu").append('<div id="governmentLedgerMainPanel" class="panel panel-blue" />');
    $("#governmentLedgerMainPanel").append('<div id="governmentLedgerMainHeading" class="panel-heading" />');
    $("#governmentLedgerMainHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne1"><center>Government Ledger Code Master</center></a>');

    $("#governmentLedgerMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#collapseOne1").append('<div id="governmentLedgerMainBody" class = "panel-body pan" />');
    $("#governmentLedgerMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#governmentLedgerMainBody").append('<center><span id="governmentLedgerMessageDiv"></span></center>');
    $("#governmentLedgerMainBody").append('<div id="governmentLedgerBodyDiv" class="row" />');
    
//    $("#governmentLedgerBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ledgerName">Government Ledger Code <span class="require">*</span></label><input type="text" id="ledgerName"  onkeyup=validateName("ledgerName","ledgerNameErr") class="form-control"/><span id="ledgerNameErr" class="text-danger"></span>');
//            + '</div><div class="form-group col-lg-6"><label for="displayName">Display Name <span class="require">*</span></label><input type="text" id="displayName" placeholder="Display Name" onkeyup=validateName("displayName","displayNameErr") class="form-control" /><span id="displayNameErr" class="text-danger"></span></div></div>');

//    $("#governmentLedgerBodyDiv").append('<div class="form-group col-lg-12" id="governmentLedgerCodeDiv"><label for="governmentLedgerCode" class="col-lg-3 control-label">Government Ledger Code <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="governmentLedgerCode" type="text" class="form-control"/><span id="governmentLedgerCodeErr" class="text-danger"></span></div></div></div>');
    $("#governmentLedgerBodyDiv").append('<div class="form-group col-lg-12" id="governmentLedgerCodeDiv"><label for="orderLevel" class="col-lg-3 control-label">Government Ledger Code <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="governmentLedgerCode" type="text" onkeyup=validatePhone("governmentLedgerCode","governmentLedgerCodeErr") class="form-control"/><span id="governmentLedgerCodeErr" class="text-danger"></span></div></div></div>');
    $("#governmentLedgerBodyDiv").append('<div class="form-group col-lg-12" id="descriptionDiv"><label for="description" class="col-lg-3 control-label">Description <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="description" type="text" class="form-control"/><span id="descriptionErr" class="text-danger"></span></div></div></div>');
    $("#governmentLedgerBodyDiv").append('<div class="form-group col-lg-12" id="isBudgetHeadDiv"><label for="isBudgetHead" class="col-lg-4 control-label">Is Budget Head? </label><div class="col-lg-6"><div><input id="isBudgetHead" type="checkbox" value="YES"/><span id="isBudgetHeadErr" class="text-danger"></span></div></div></div>');
    $("#governmentLedgerBodyDiv").append('<div class="form-group col-lg-12" id="orderLevelDiv"><label for="orderLevel" class="col-lg-3 control-label">Order Level <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="orderLevel" type="text" onkeyup=validatePhone("orderLevel","orderLevelErr") class="form-control"/><span id="orderLevelErr" class="text-danger"></span></div></div></div>');
    $("#orderLevel").attr('maxlength', '2');
    $("#governmentLedgerMainBody").append("<div class='form-group' id='governmentLedgerButton'><center><button onclick=savegovernmentLedgerInfo() class='btn btn-success' id='governmentLedgerButton' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetButton' onclick=resetGovernmentLedger() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");

    governmentLedgerListTable();




}

function governmentLedgerListTable()
{
    $("#governmentLedgerListMainMenu").text("").append('<div id="governmentLedgerListPanel" class="panel panel-blue" />');
    $("#governmentLedgerListPanel").append('<div id="governmentLedgerListHeading" class="panel-heading" />');
    $("#governmentLedgerListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>List Of Government Ledger Code</center></a>');
    $("#governmentLedgerListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
    $("#collapseOne2").append('<div id="governmentLedgerListBody" class = "panel-body pan" />');
    $("#governmentLedgerListBody").append('<div id="panelRow" class="row" />');
    $("#governmentLedgerListBody").append('<div id="governmentLedgerListErrorMsgId" />');
    $("#governmentLedgerListBody").append('<div id="governmentLedgerListMainBody" class="table-responsive" />');
    $("#governmentLedgerListMainBody").append('<table id="governmentLedgerTable" class="table table-striped table-bordered table-hover" />');
    $("#governmentLedgerTable").append('<thead id="governmentLedgerTableHeadId" />');
    $("#governmentLedgerTable").append('<tbody id="governmentLedgerTableBodyId" />');
    $("#governmentLedgerTableHeadId").append('<tr><th>Sno</th><th>Government Ledger Code</th><th>Is Budget Head?</th><th>Description</th><th>Order Level</th><th><center>Edit</center</th><th><center>Delete</center></th></tr>');

    $.post(server_base_url + "/finance/account/GovernmentLedgerCode/ViewList", {
    }).done(function(data) {
        if (data.statuscode == NoData) {
            displaySmallErrorMessagesInRed("governmentLedgerListErrorMsgId", NoDataFoundMessage + "");
        }
        if (data == fail) {
            displaySmallErrorMessagesInRed("governmentLedgerListErrorMsgId", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("governmentLedgerListErrorMsgId", unauthorizedMessage + "");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("governmentLedgerListErrorMsgId", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessagesInRed("governmentLedgerListErrorMsgId", "No User available" + "");
        } else if (data != null) {
            var sno = 0;
            var mainData = data.result;
            for (var i = mainData.length - 1; i >= 0; i--) {
                sno++;
                var subData = mainData[i];
                $("#governmentLedgerTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.governmentLedgerCode + "</td>"
                        //+ "<td style='cursor:pointer;'>" + subData.description + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.budgetHead + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.description + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.orderLevel + "</td>"
                        + "<td style='cursor:pointer;' onclick=editGovernmentLedgerInfo('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>"
                        + "<td style='cursor:pointer;' onclick=deletePopUp('deleteGovernmentLedger','governmentLedgerListTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td></tr>");
            }
            $("#governmentLedgerTable").dataTable();
        } else {
            displaySmallErrorMessagesInRed("governmentLedgerListErrorMsgId", NoDataFoundMessage + "");
        }
    });

}

function editGovernmentLedgerInfo(governmentLedgerData, id) {

    $("#governmentLedgerCode").focus();
    if (governmentLedgerData == null || governmentLedgerData == "" || governmentLedgerData == undefined) {
        return false;
    }
    governmentLedgerData = JSON.parse(decodeURI(governmentLedgerData));
    var budgetCheck = "";
    //var mappingCheck = "";
    if (governmentLedgerData.budgetHead == "YES") {
        $("#isBudgetHead").attr('checked', true);
    } else {
        $("#isBudgetHead").attr('checked', false);
    }
    

    $("#governmentLedgerCode").val(governmentLedgerData.governmentLedgerCode);
    $("#description").val(governmentLedgerData.description);
    $("#orderLevel").val(governmentLedgerData.orderLevel);
   // $("#isBudgetHead").val(governmentLedgerData.budgetHead);
    
   // $("#ledgerCategorySelect").val(governmentLedgerData.ledgerCategory);
//    $("#budgetNatureSelect").val(ledgerData.budgetNature);
//    $("#budgetHeadCode").val(ledgerData.budgetHeadCode);
//    $("#ledgerRemarks").val(ledgerData.remarks);
    $("#governmentLedgerButton").text("").append("<div class='form-group'><center><button id='updateGovernmentLedgerButton' onclick=updateGovernmentLedgerInfo('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetUpdateButton' onclick='governmentLedgerCodeMasterCreation()' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center></div>");

}

function updateGovernmentLedgerInfo(id) {
    var governmentLedgerCode = $("#governmentLedgerCode").val();
    var description = $("#description").val();
    if ($('#isBudgetHead').prop('checked')) {
        var budgetHead = $("#isBudgetHead").val();
    } else
    {
        budgetHead = "NO";
    }
    var orderLevel = $("#orderLevel").val();
    

    if (governmentLedgerCode == "" || governmentLedgerCode == "undefined" || description == "" || description == "undefined" || budgetHead == "" || budgetHead == "undefined" ||
            orderLevel == "" || orderLevel == "undefined") {
        displaySmallErrorMessagesInRed("governmentLedgerMessageDiv", "Please Fill * fields" + "");
        return false;
    }

    var governmentLedgerCodeUpdateJson = {
        governmentLedgerCode: governmentLedgerCode,
        description: description,
        budgetHead: budgetHead,
        orderLevel: orderLevel
        
    };
    var loginUserId = getUserSessionElement("userId");

    $.get(server_base_url + "/finance/account/GovernmentLedgerCode/Update", {
        governmentLedgerCodeUpdateJson: JSON.stringify(governmentLedgerCodeUpdateJson),
        userid: loginUserId,
        governmentLedgerCodeId: id
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("governmentLedgerMessageDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("governmentLedgerMessageDiv", unauthcreateLedgerorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("governmentLedgerMessageDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#governmentLedgerCode").prop("readonly", true);
            $("#description").prop("readonly", true);
            $("#orderLevel").prop("readonly", true);
           
            $("#updateGovernmentLedgerButton").attr('disabled', true);
            $("#resetUpdateButton").attr('disabled', true);
            displaySuccessMessages("governmentLedgerMessageDiv", updateMessage, "");
            setTimeout(function() {
                governmentLedgerCodeMasterCreation();
            }, 500);
        } else {
            displaySmallErrorMessagesInRed("governmentLedgerMessageDiv", "Government Ledger Updation Failed" + "");
        }
    });

}

function deleteGovernmentLedger(governmentLedgerId) {
    var currentLoginUser = getUserSessionElement("userId");
    $.get(server_base_url + "/finance/account/GovernmentLedgerCode/Delete", {
        currentuser: currentLoginUser,
        governmentLedgerCodeId: governmentLedgerId
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("governmentLedgerListErrorMsgId", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("governmentLedgerListErrorMsgId", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("governmentLedgerListErrorMsgId", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            displaySuccessMessages("governmentLedgerListErrorMsgId", deleteMessage, "");
            setTimeout(function() {
                governmentLedgerListTable();
            }, 500);

        }
    });
}
function resetGovernmentLedger() {

    $("#governmentLedgerCode").val("");
    $("#description").val("");
//    $("#underGroupSelect").val('0');
//    $("#ledgerCategorySelect").val('0');
    $("#orderLevel").val("");
    $("#isBudgetHead").removeAttr('checked');
    $("#governmentLedgerMessageDiv").text("");
    $("#governmentLedgerCodeErr").text("");
    $("#descriptionErr").text("");
    $("#orderLevelErr").text("");
}

function savegovernmentLedgerInfo()
{
    var governmentLedgerCode = $("#governmentLedgerCode").val();
    var description = $("#description").val();
    var orderLevel = $("#orderLevel").val();
    if ($('#isBudgetHead').prop('checked')) {
        var budgetHead = $("#isBudgetHead").val();
    } else
    {
        budgetHead = "NO";
    }
    
    if (governmentLedgerCode == "" || governmentLedgerCode == "undefined" || description == "" || description == "undefined" || orderLevel == "" || orderLevel == "undefined") {
        displaySmallErrorMessagesInRed("governmentLedgerMessageDiv", "Please Fill * fields" + "");
        return false;
    }
    
    var governmentLedgerCodeJson = {
            governmentLedgerCode: governmentLedgerCode,
            description: description,
            budgetHead: budgetHead,
            orderLevel: orderLevel
        }

        var loginUserId = getUserSessionElement("userId");
    $.get(server_base_url + "/finance/account/GovernmentLedgerCode/Save", {
        governmentLedgerCodeJson: JSON.stringify(governmentLedgerCodeJson),
        userid: loginUserId
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("governmentLedgerMessageDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("governmentLedgerMessageDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("governmentLedgerMessageDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#governmentLedgerCode").prop("readonly", true);
            $("#description").prop("readonly", true);
            $("#isBudgetHead").prop("readonly", true);
            $("#orderLevel").prop("disabled", true);
            
            $("#governmentLedgerButton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            
            displaySuccessMessages("governmentLedgerMessageDiv", successMessage, "");
            setTimeout(function() {
                governmentLedgerCodeMasterCreation();
            }, 500);
        } else {
            displaySmallErrorMessagesInRed("governmentLedgerMessageDiv", " Government Ledger Creation Failed" + "");
        }
    });
}
