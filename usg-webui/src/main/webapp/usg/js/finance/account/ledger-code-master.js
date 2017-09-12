/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function ledgerCodeMasterCreation(divId)
{
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="ledgerCodeMasterCreation()">Ledger Code Master</a>');

    $("#" + divId).text("").append('<div id="ledgerDivId"></div>');
    $("#ledgerDivId").text("").append('<div id="ledgerTabMenu" />');

    $("#ledgerTabMenu").append('<div id="ledgerMainMenu" class="row" />');
    $("#ledgerTabMenu").append('<div id="ledgerListMainMenu" class="row" />');

    if (checkUserPrivelege(pvLedgerCode)) {
        $("#ledgerMainMenu").append('<div id="ledgerMainPanel" class="panel panel-blue" />');
        $("#ledgerMainPanel").append('<div id="ledgerMainHeading" class="panel-heading" />');
        $("#ledgerMainHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Ledger Code Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="ledgerCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');

        $("#ledgerMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#ledgerCollp").click(function () {
            $("#collapseOne1").toggle();
            if ($("#ledgerCollp span").hasClass("glyphicon-minus-sign")) {
                $("#ledgerCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#ledgerCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="ledgerMainBody" class = "panel-body pan" />');
        $("#ledgerMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#ledgerMainBody").append('<center><span id="ledgerCodeMessageDiv"></span></center>');
        $("#ledgerMainBody").append('<div id="ledgerBodyDiv" class="row" />');

        $("#ledgerMainBody").append('<div class="form-group col-lg-12"><label for="governmentLedgerCode" class="col-lg-3 control-label">Ledger Name <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><select class="form-control" name="governmentLedgerCode" id="governmentLedgerCodeSelect"></select></div></div></div>');

        $("#ledgerMainBody").append('<div class="form-group col-lg-12"><label for="ledgerCode" class="col-lg-3 control-label">Ledger Code <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="ledgerCode" type="text" placeholder="Ledger Code" class="form-control"/><span id="ledgerCodeErr" class="text-danger"></span></div></div></div>');
        $("#ledgerMainBody").append('<div class="form-group col-lg-12"><label for="description" class="col-lg-3 control-label">Description<span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="description" type="text" onkeypress="return acceptAlphanumeric(event)" placeholder="Description" class="form-control"/><span id="descriptionErr" class="text-danger"></span></div></div></div>');

        $("#ledgerMainBody").append('<div class="form-group col-lg-12" id="isBudgetHeadDiv"><label for="isBudgetHead" class="col-lg-4 control-label">Is Budget Head? </label><div class="col-lg-6"><div><input id="isBudgetHead" type="checkbox" value="YES"/><span id="isBudgetHeadErr" class="text-danger"></span></div></div></div>');
        $("#ledgerMainBody").append('<div class="form-group col-lg-12"><label for="orderLevel" class="col-lg-3 control-label">Order Level <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="orderLevel" type="text" placeholder="Order Level" onkeyup=validatePhone("orderLevel","orderLevelErr") class="form-control"/><span id="orderLevelErr" class="text-danger"></span></div></div></div>');
        $("#ledgerMainBody").append("<div class='form-group' id='ledgerCodeButton'><center><button id='ledgerCodeSave' onclick=saveLedgerCode() class='btn btn-success' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetLedgerCode() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
        $("#orderLevel").attr('maxlength', '5');
        $("#ledgerCode").attr('disabled', true);


        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    }
    fetchAutoLedgerCodes();
    ledgerCodeTable();
    setTimeout(function () {
        fetchGovernmentLedgerCode();
    }, 500);


}

function fetchAutoLedgerCodes() {

    $.get(server_base_url + "/finance/AccountMaster/LedgerCode/getLedgerCodes", {
    }).done(function (data) {

        if (data == fail || data == unauthorized) {
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            $("#ledgerCode").val(data);
        }
    });
}


function saveLedgerCode()
{
    if (checkUserPrivelege(pvLedgerCode)) {
        var governmentLedgerCode = $("#governmentLedgerCodeSelect").val();
        var ledgerCode = $("#ledgerCode").val();
        var description = $("#description").val();
        if ($('#isBudgetHead').prop('checked')) {
            var budgetHead = $("#isBudgetHead").val();
        } else
        {
            budgetHead = "NO";
        }
        var orderLevel = $("#orderLevel").val();

        if (governmentLedgerCode == "" || governmentLedgerCode == "undefined" || description == "" || description == "undefined" || orderLevel == "" || orderLevel == "undefined" || ledgerCode == "" || ledgerCode == "undefined") {
            displaySmallErrorMessagesInRed("ledgerCodeMessageDiv", "Please Fill * fields" + "");
            return false;
        }

        var ledgerCodeJson = {
            governmentLedgerCode: governmentLedgerCode,
            ledgerCode: ledgerCode,
            description: description,
            budgetHead: budgetHead,
            orderLevel: orderLevel
        }

        var loginUserId = getUserSessionElement("userId");
        $.get(server_base_url + "/finance/account/LedgerCode/Save", {
            ledgerCodeJson: JSON.stringify(ledgerCodeJson),
            userid: loginUserId
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("ledgerCodeMessageDiv", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("ledgerCodeMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("ledgerCodeMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("ledgerCodeMessageDiv", "" + existed + "");
                setTimeout(function () {
                    $("#ledgerCodeMessageDiv").text("").val("");
                }, 3000);
            } else if (data != null) {
                $("#governmentLedgerCode").prop("readonly", true);
                $("#ledgerCode").prop("readonly", true);
                $("#description").prop("readonly", true);
                $("#isBudgetHead").prop("disabled", true);
                $("#orderLevel").prop("readonly", true);

                $("#ledgerCodeSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);

                displaySuccessMessages("ledgerCodeMessageDiv", successMessage, "");
                setTimeout(function () {
                    ledgerCodeMasterCreation();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("ledgerCodeMessageDiv", " Ledger Code Creation Failed" + "");
            }
        });
    }
}

function resetLedgerCode() {
    $("#governmentLedgerCodeSelect").val("0");
    $("#ledgerCode").val("");
    $("#orderLevel").val("");
    $("#description").val("");
    $("#isBudgetHead").removeAttr('checked');
    $("#ledgerMessageDiv").text("");
    $("#governmentLedgerCodeSelectErr").text("");
    $("#ledgerCodeErr").text("");
    $("#orderLevelErr").text("");
    $("#descriptionErr").text("");
    $("#ledgerCodeMessageDiv").text("");
}
function fetchGovernmentLedgerCode() {
    $("#governmentLedgerCodeSelect").text("").append("<option value='0'>---- Select Ledger Name----</option>");
    $.get(server_base_url + "/financial/account/Ledger/ViewList", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                $("#governmentLedgerCodeSelect").append("<option  value='" + mainData[i]._id.$oid + "' >" + mainData[i].ledgerName + "</option>");
            }
        }
    });
}
function ledgerCodeTable()
{
    if (checkUserPrivelege(pvViewLedgerCode)) {
        $("#ledgerListMainMenu").text("").append('<div id="ledgerCodeListPanel" class="panel panel-blue" />');
        $("#ledgerCodeListPanel").append('<div id="ledgerCodeListHeading" class="panel-heading" />');
        $("#ledgerCodeListHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Ledger Code</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="ledgerListCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');

        $("#ledgerCodeListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#ledgerListCollp").click(function () {
            $("#collapseOne2").toggle();
            if ($("#ledgerListCollp span").hasClass("glyphicon-minus-sign")) {
                $("#ledgerListCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#ledgerListCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append('<div id="ledgerCodeListBody" class = "panel-body pan" />');
        $("#ledgerCodeListBody").append('<div id="panelRow" class="row" />');

        $("#ledgerCodeListBody").append('<div id="ledgerCodeListErrorMsgId" />');
        $("#ledgerCodeListBody").append('<div id="ledgerCodeListMainBody" class="table-responsive" />');
        $("#ledgerCodeListMainBody").append('<table id="ledgerCodeTable" class="table table-bordered" />');
        $("#ledgerCodeTable").append('<thead id="ledgerCodeTableHeadId" />');
        $("#ledgerCodeTable").append('<tbody id="ledgerCodeTableBodyId" />');

        $("#ledgerCodeTableHeadId").append('<tr id="ledgerCodeTableHeadIdTrHead"><th>Sno</th><th>Ledger Name</th><th>Ledger Code</th><th>Description</th><th>Is Budget Head?</th><th>Order Level</th>');
        if (checkUserPrivelege(pvUpdateLedgerCode)) {
            $("#ledgerCodeTableHeadIdTrHead").append('<th><center>Edit</center</th>');
        }
        if (checkUserPrivelege(pvDeleteLedgerCode)) {
            $("#ledgerCodeTableHeadIdTrHead").append('<th><center>Delete</center></th>');
        }
        $.post(server_base_url + "/finance/account/LedgerCode/ViewList", {
        }).done(function (data) {

            if (data.statuscode == NoData) {
                displaySmallErrorMessagesInRed("ledgerCodeListErrorMsgId", NoDataFoundMessage + "");
            }
            if (data == fail) {
                displaySmallErrorMessagesInRed("ledgerCodeListErrorMsgId", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("ledgerCodeListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("ledgerCodeListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("ledgerCodeListErrorMsgId", "No User available" + "");
            } else if (data != null) {

                var sno = 0;
                var mainData = data.result;
                var governmentLedgerCode = mainData.governmentLedgerCode;
                for (var i = mainData.length - 1; i >= 0; i--) {
                    sno++;

                    $("#ledgerCodeTableBodyId").append("<tr id='" + mainData[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + mainData[i].governmentLedgerCode + "</td>"
                            + "<td style='cursor:pointer;'>" + mainData[i].ledgerCode + "</td>"
                            + "<td style='cursor:pointer;'>" + mainData[i].description + "</td>"
                            + "<td style='cursor:pointer;'>" + mainData[i].budgetHead + "</td>"
                            + "<td style='cursor:pointer;'>" + mainData[i].orderLevel + "</td>");
                    if (checkUserPrivelege(pvUpdateLedgerCode)) {
                        $("#" + mainData[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editLedgerCodeInfo('" + encodeURI(JSON.stringify(mainData[i])) + "','" + mainData[i]._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>");
                    }
                    if (checkUserPrivelege(pvDeleteLedgerCode)) {
                        $("#" + mainData[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteLedgerCode','ledgerCodeTable','" + mainData[i]._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");
                    }
                }
                $("#ledgerCodeTable").dataTable();
            } else {
                displaySmallErrorMessagesInRed("ledgerCodeListErrorMsgId", NoDataFoundMessage + "");
            }
        });
    }

}

function editLedgerCodeInfo(ledgerCodeData, id) {
    if (checkUserPrivelege(pvUpdateLedgerCode)) {
        if (ledgerCodeData == null || ledgerCodeData == "" || ledgerCodeData == undefined) {
            return false;
        }
        $("#ledgerCodeTableBodyId tr").css("background-color", "white");
        $("#ledgerCodeTableBodyId tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        ledgerCodeData = JSON.parse(decodeURI(ledgerCodeData));
        var budgetCheck = "";
        if (ledgerCodeData.budgetHead == "YES") {
            $("#isBudgetHead").attr('checked', true);
        } else {
            $("#isBudgetHead").attr('checked', false);
        }

        $("#governmentLedgerCodeSelect").val(ledgerCodeData.governmentLedgerCode);
        $("#ledgerCode").val(ledgerCodeData.ledgerCode);
        $("#orderLevel").val(ledgerCodeData.orderLevel);
        $("#description").val(ledgerCodeData.description);

        $("#governmentLedgerCodeSelect option:contains(" + ledgerCodeData.governmentLedgerCode + ")").attr('selected', 'selected');

        $("#ledgerCodeButton").text("").append("<div class='form-group'><center><button id='updateLedgerButton' onclick=updateLedgerInfo('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetUpdateButton' onclick='ledgerCodeMasterCreation()' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center></div>");

    }
}

function updateLedgerInfo(ledgerCodeId) {
    if (checkUserPrivelege(pvUpdateLedgerCode)) {
        var governmentLedgerCode = $("#governmentLedgerCodeSelect").val();
        var ledgerCode = $("#ledgerCode").val();
        var description = $("#description").val();
        if ($('#isBudgetHead').prop('checked')) {
            var budgetHead = $("#isBudgetHead").val();
        } else
        {
            budgetHead = "NO";
        }
        var orderLevel = $("#orderLevel").val();

        if (ledgerCode == "undefined" || ledgerCode == "" || description == "undefined" || description == "" || budgetHead == "undefined" || budgetHead == "" || orderLevel == "undefined" || orderLevel == "") {
            displaySmallErrorMessagesInRed("ledgerCodeMessageDiv", "Please Fill * fields" + "");
            return false;
        }

        var ledgerCodeUpdateJson = {
            governmentLedgerCode: governmentLedgerCode,
            ledgerCode: ledgerCode,
            description: description,
            budgetHead: budgetHead,
            orderLevel: orderLevel
        }

        var loginUserId = getUserSessionElement("userId");

        $.get(server_base_url + "/finance/account/LedgerCode/Update", {
            ledgerCodeUpdateJson: JSON.stringify(ledgerCodeUpdateJson),
            ledgerCodeId: ledgerCodeId,
            userid: loginUserId
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("ledgerCodeMessageDiv", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("ledgerCodeMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("ledgerCodeMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("ledgerCodeMessageDiv", "" + existed + "");
                setTimeout(function () {
                    $("#ledgerCodeMessageDiv").text("").val("");
                }, 3000);
            } else if (data != null) {
                $("#governmentLedgerCodeSelect").prop("disabled", true);
                $("#ledgerCode").prop("disabled", true);
                $("#description").prop("disabled", true);
                $("#isBudgetHead").prop("disabled", true);
                $("#orderLevel").prop("disabled", true);
                $("#ledgerCodeSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("ledgerCodeMessageDiv", updateMessage, "");
                setTimeout(function () {
                    ledgerCodeMasterCreation();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("ledgerCodeMessageDiv", "Ledger Code Updation Failed" + "");
            }
        });
    }
}

function deleteLedgerCode(codeLedgerId) {
    if (checkUserPrivelege(pvDeleteLedgerCode)) {
        var currentLoginUser = getUserSessionElement("userId");
        $.get(server_base_url + "/finance/account/LedgerCode/Delete", {
            currentuser: currentLoginUser,
            codeLedgerId: codeLedgerId
        }).done(function (data) {
            if (data.statuscode == fail) {
                displaySmallErrorMessagesInRed("ledgerCodeListErrorMsgId", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("ledgerCodeListErrorMsgId", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displaySmallErrorMessagesInRed("ledgerCodeListErrorMsgId", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {
                displaySuccessMessages("ledgerCodeListErrorMsgId", deleteMessage, "");
                setTimeout(function () {
                    ledgerCodeTable();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("ledgerCodeListErrorMsgId", "Ledger Code Deletion Failed" + "");
            }
        });
    }
}
