/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ledgerMasterCreation(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="ledgerMasterCreation()">Ledger Master</a>');

    $("#" + divId).text("").append('<div id="ledgerDivId"></div>');
    $("#ledgerDivId").text("").append('<div id="ledgerTabMenu" />');

    $("#ledgerTabMenu").append('<div id="ledgerMainMenu" class="row" />');
    $("#ledgerTabMenu").append('<div id="ledgerListMainMenu" class="row" />');

    if (checkUserPrivelege(pvCreateLedger)) {
        $("#ledgerMainMenu").append('<div id="ledgerMainPanel" class="panel panel-blue" />');
        $("#ledgerMainPanel").append('<div id="ledgerMainHeading" class="panel-heading" />');
        $("#ledgerMainHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Ledger Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="ladgermasCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
        $("#ledgerMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#ladgermasCollp").click(function () {
            $("#collapseOne1").toggle();
            if ($("#ladgermasCollp span").hasClass("glyphicon-minus-sign")) {
                $("#ladgermasCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#ladgermasCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="ledgerMainBody" class = "panel-body pan" />');
        $("#ledgerMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#ledgerMainBody").append('<center><span id="ledgerMessageDiv"></span></center>');
        $("#ledgerMainBody").append('<div id="ledgerBodyDiv" class="row" />');

        $("#ledgerBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ledgerName">Ledger Name <span class="require">*</span></label><input type="text" id="ledgerName" placeholder="Ledger Name" onkeypress="return acceptAlphanumeric(event)" class="form-control"/><span id="ledgerNameErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="displayName">Display Name <span class="require">*</span></label><input type="text" id="displayName" placeholder="Display Name" onkeypress="return acceptAlphanumeric(event)" class="form-control" /><span id="displayNameErr" class="text-danger"></span></div></div>');
        $("#ledgerBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="underGroup">Under Group <span class="require">*</span></label><select class="form-control" name="underGroup" id="underGroupSelect"></select><span id="ledgerNameErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="ledgerCategory">Fund Type <span class="require">*</span></label><select class="form-control" name="ledgerCategory" id="ledgerFundtypeSelect"></select><span id="displayNameErr" class="text-danger"></span></div></div>');
        $("#ledgerBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="budgetType">Is Budget Type ?</label>&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" value="Yes" id="budgetTypeLedger" onchange="toEnableBudgetHead()"/>'
                //   + '</div><div class="form-group col-lg-6"><label for="budgetNature">Budget Nature <span class="require">*</span></label><select class="form-control" name="budget" id="budgetNatureSelect"></select><span id="displayNameErr" class="text-danger"></span></div></div>');
                + '</div><div class="form-group col-lg-6"><label for="budgetHeadCode">Budget Head Code <span class="require"></span></label><select class="form-control" name="budgetHeadCode" id="budgetHeadCode"></select><span id="budgetHeadCodeErr" class="text-danger"></span></div></div>');

        $("#ledgerBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ledgerMapping">Is Employee Ledger Mapping ?</label>&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" value="Yes" id="budgetLedgerMapping" />'
                + '</div><div class="form-group col-lg-6"><label for="ledgerRemarks">Remarks</label><textarea class="form-control" rows="2" id="ledgerRemarks" placeholder="Please enter remarks..."></textarea><span id="displayNameErr" class="text-danger"></span></div></div>');
        // $("#ledgerBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ledgerMapping">Is Employee Ledger Mapping ?</label>&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" value="Yes" id="budgetLedgerMapping" /></div></div>');
        $("#ledgerMainBody").append("<div class='form-group' id='ledgerButton'><center><button onclick=saveLedgerInfo() class='btn btn-success' id='ledgerButton' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetButton' onclick=resetLedger() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });




    }
    ledgerListTable();
    $("#budgetHeadCode").prop("disabled", true);
    // getBugetHeadinLagerMaster();
    setTimeout(function () {
        fetchLedgerCategory();
    }, 300);
    setTimeout(function () {
        fetchUnderGroup();
    }, 400);
//    setTimeout(function() {
//        fetchBudgetNature();
//    }, 500);
}
function toEnableBudgetHead() {
    if ($('#budgetTypeLedger').is(':checked')) {
        $("#budgetHeadCode").prop("disabled", false);
        getBugetHeadinLagerMaster();
    } else
    {
        $("#budgetHeadCode").text("").val("");
        $("#budgetHeadCode").prop("disabled", true);
    }
}
function fetchLedgerCategory() {
    $("#ledgerFundtypeSelect").text("").append("<option value=''>----Select Fund Type----</option>");
    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            for (var i = data.length - 1; i >= 0; i--) {
                var subData = data[i];
                $("#ledgerFundtypeSelect").append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
            }
        }
    });
}
function getBugetHeadinLagerMaster(name) {
    $("#budgetHeadCode").text("").append("<option value=''>----Select Budget Head----</option>");
    $.get(server_base_url + "/hrms/common/BudgetHeads/List", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            for (var i = 0; i < data.length; i++) {
                if (name == data[i]._id.$oid)
                {
                    $("#budgetHeadCode").append("<option value='" + data[i]._id.$oid + "' selected>" + data[i].budgetHead + "</option>");
                } else
                {
                    $("#budgetHeadCode").append("<option value='" + data[i]._id.$oid + "'>" + data[i].budgetHead + "</option>");
                }
            }
        }
    });
}
function fetchUnderGroup() {
    $("#underGroupSelect").text("").append("<option value=''>----Select Group----</option>");
    $.get(server_base_url + "financial/common/Group/ViewList", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {

            for (var i = 0; i < data.length; i++) {

                $("#underGroupSelect").append("<option value='" + data[i]._id.$oid + "'>" + data[i].groupName + "</option>");
            }
        }
    });
}

//function fetchBudgetNature() {
//    $("#budgetNatureSelect").text("").append("<option value=''>----Select Budget Nature----</option>");
//    $.get(server_base_url + "/finance/account/BudgetNature/ViewList", {
//    }).done(function(data) {
//        if (data == fail || data == unauthorized) {
////            location.href = "dashboard.jsp";
//        } else if (data == invalidSession) {
//            callSessionTimeout();
//        } else {
//            var mainData = data.result;
//            for (var i = 0; i < mainData.length; i++) {
//                var subData = mainData[i];
//                $("#budgetNatureSelect").append("<option value='" + subData._id.$oid + "'>" + subData.budgetNatureName + "</option>");
//            }
//        }
//    });
//}

function resetLedger() {

    $("#ledgerName").val("");
    $("#displayName").val("");
    $("#underGroupSelect").val("");
    $("#ledgerFundtypeSelect").val("");
    $("#budgetTypeLedger").removeAttr('checked');
//    $("#budgetNatureSelect").val("");
    $("#budgetHeadCode").val("");
    $("#ledgerRemarks").val("");
    $("#budgetLedgerMapping").removeAttr('checked');
    $("#ledgerMessageDiv").text("");
    $("#ledgerNameErr").text("");
    $("#displayNameErr").text("");
}

function saveLedgerInfo() {
    if (checkUserPrivelege(pvCreateLedger)) {
        var ledgerName = $("#ledgerName").val();
        var displayName = $("#displayName").val();
        var underGroupSelect = $("#underGroupSelect").val();
        var ledgerFundtypeSelect = $("#ledgerFundtypeSelect").val();
        if ($('#budgetTypeLedger').prop('checked')) {
            var budgetLedgerType = $("#budgetTypeLedger").val();
        } else
        {
            budgetLedgerType = "No";
        }
        var budgetHeadCode = $("#budgetHeadCode").val();
        var remarks = $("#ledgerRemarks").val();
        if ($('#budgetLedgerMapping').prop('checked')) {
            var budgetLedgerMapping = $("#budgetLedgerMapping").val();
        } else
        {
            budgetLedgerMapping = "No";
        }

        if (ledgerName == "" || ledgerName == "undefined" || displayName == "" || displayName == "undefined" || underGroupSelect == "" || underGroupSelect == "undefined" ||
                ledgerFundtypeSelect == "" || ledgerFundtypeSelect == "undefined" || budgetLedgerType == "" || budgetLedgerType == "undefined" ||
                budgetHeadCode == "" || budgetHeadCode == "undefined" || budgetLedgerMapping == "" || budgetLedgerMapping == "undefined") {
            displaySmallErrorMessagesInRed("ledgerMessageDiv", "Please Fill * fields" + "");
            return false;
        }

        var ledgerJson = {
            ledgerName: ledgerName,
            displayName: displayName,
            underGroup: underGroupSelect,
            FundType: ledgerFundtypeSelect,
            budgetType: budgetLedgerType,
            budgetHeadCode: budgetHeadCode,
            remarks: remarks,
            ledgerMapping: budgetLedgerMapping
        }

        var userId = getUserSessionElement("userId");
        $.get(server_base_url + "/financial/account/Ledger/Save", {
            ledgerjson: JSON.stringify(ledgerJson),
            loginuserid: userId
        }).done(function (data) {

            if (data.statuscode == fail) {
                displayErrorMessages("ledgerMessageDiv", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("ledgerMessageDiv", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displayErrorMessages("ledgerMessageDiv", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("ledgerMessageDiv", "" + existed + "");
                setTimeout(function () {
                    $("#ledgerMessageDiv").text("").val("");
                }, 3000);
            } else if (data != null) {
                $("#ledgerName").prop("readonly", true);
                $("#displayName").prop("readonly", true);
                $("#budgetHeadCode").prop("readonly", true);
                $("#ledgerRemarks").prop("readonly", true);
                $("#underGroupSelect").prop("disabled", true);
                $("#ledgerFundtypeSelect").prop("disabled", true);
                $("#ledgerButton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                $("#budgetTypeLedger").prop("disabled", true);
                $("#budgetLedgerMapping").prop("disabled", true);
                displaySuccessMessages("ledgerMessageDiv", successMessage, "");
                setTimeout(function () {
                    ledgerMasterCreation();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("ledgerMessageDiv", "Ledger Creation Failed" + "");
            }
        });
    }
}

function ledgerListTable() {
    if (checkUserPrivelege(pvViewLedger)) {
        $("#ledgerListMainMenu").text("").append('<div id="ledgerListPanel" class="panel panel-blue" />');
        $("#ledgerListPanel").append('<div id="ledgerListHeading" class="panel-heading" />');
        $("#ledgerListHeading").append('<class="panel-title" data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Ledgers</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="ledgerMasListCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
        $("#ledgerListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#ledgerMasListCollp").click(function () {
            $("#collapseOne2").toggle();
            if ($("#ledgerMasListCollp span").hasClass("glyphicon-minus-sign")) {
                $("#ledgerMasListCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#ledgerMasListCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append('<div id="ledgerListBody" class = "panel-body pan" />');
        $("#ledgerListBody").append('<div id="panelRow" class="row" />');
        $("#ledgerListBody").append('<div id="ledgerListErrorMsgId" />');
        $("#ledgerListBody").append('<div id="ledgerListMainBody" class="table-responsive" />');
        $("#ledgerListMainBody").append('<table id="ledgerTable" class="table table-bordered" />');
        $("#ledgerTable").append('<thead id="ledgerTableHeadId" />');
        $("#ledgerTable").append('<tbody id="ledgerTableBodyId" />');
        $("#ledgerTableHeadId").append('<tr id="ledgerTableHeadIdTrHead"><th>Sno</th><th>Ledger Name</th><th>Display Name</th><th>Under Group</th><th>Fund Type</th>');
        if (checkUserPrivelege(pvUpdateLedger)) {
            $("#ledgerTableHeadIdTrHead").append('<th><center>Edit</center</th>');
        }
        if (checkUserPrivelege(pvDeleteLedger)) {
            $("#ledgerTableHeadIdTrHead").append('<th><center>Delete</center></th>');
        }

        $.post(server_base_url + "/financial/account/Ledger/ViewList", {
        }).done(function (data) {
            if (data.statuscode == NoData) {
                displaySmallErrorMessagesInRed("ledgerListErrorMsgId", NoDataFoundMessage + "");
            }
            if (data == fail) {
                displaySmallErrorMessagesInRed("ledgerListErrorMsgId", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("ledgerListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("ledgerListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("ledgerListErrorMsgId", "No User available" + "");
            } else if (data != null) {
                var sno = 0;
                var mainData = data.result;
                for (var i = mainData.length - 1; i >= 0; i--) {
                    sno++;
                    var subData = mainData[i];
                    var group = subData.underGroupName;
                    if (group == "undefined" || group == undefined) {
                        group = "";
                    }
                    var ledgerfuntype = subData.fundTypeName;
                    if (ledgerfuntype == "undefined" || ledgerfuntype == undefined) {
                        ledgerfuntype = "";
                    }
                    var budgetNature = subData.budgetNatureName;
                    if (budgetNature == "undefined" || budgetNature == undefined) {
                        budgetNature = "";
                    }
                    $("#ledgerTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.ledgerName + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.displayName + "</td>"
                            + "<td style='cursor:pointer;'>" + group + "</td>"
                            + "<td style='cursor:pointer;'>" + ledgerfuntype + "</td>");
                    // + "<td style='cursor:pointer;'>" + subData.budgetHeadCode + "</td>"
                    if (checkUserPrivelege(pvUpdateLedger)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=editLedgerInfo('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>");
                    }
                    if (checkUserPrivelege(pvDeleteLedger)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteLedger','ledgerListTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");
                    }
                }
                $("#ledgerTable").dataTable();
            } else {
                displaySmallErrorMessagesInRed("ledgerListErrorMsgId", NoDataFoundMessage + "");
            }
        });
    }
}

function editLedgerInfo(ledgerData, id) {

    $("#ledgerName").focus();
    if (ledgerData == null || ledgerData == "" || ledgerData == undefined) {
        return false;
    }
    ledgerData = JSON.parse(decodeURI(ledgerData));
    var budgetCheck = "";
    var mappingCheck = "";

    if (ledgerData.budgetType == "Yes") {
        $("#budgetTypeLedger").attr('checked', true);
        $("#budgetHeadCode").prop("disabled", false);
        getBugetHeadinLagerMaster(ledgerData.budgetHeadCode);
    } else {
        $("#budgetHeadCode").text("").val("");
        $("#budgetHeadCode").prop("disabled", true);
        $("#budgetTypeLedger").attr('checked', false);
    }
    if (ledgerData.ledgerMapping == "Yes") {
        $("#budgetLedgerMapping").attr('checked', true);
    } else {
        $("#budgetLedgerMapping").attr('checked', false);
    }
    $("#ledgerTableBodyId tr").css("background-color", "white");
    $("#ledgerTableBodyId tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#ledgerName").val(ledgerData.ledgerName);
    $("#displayName").val(ledgerData.displayName);
    $("#underGroupSelect").val(ledgerData.underGroup);
    $("#ledgerFundtypeSelect").val(ledgerData.FundType);
    $("#budgetHeadCode").val(ledgerData.budgetHeadCode);
    $("#ledgerRemarks").val(ledgerData.remarks);
    $("#ledgerButton").text("").append("<div class='form-group'><center><button id='updateLedgerButton' onclick=updateLedgerMaster('" + id + "')  class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetUpdateButton' onclick='ledgerMasterCreation()' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center></div>");
}

function updateLedgerMaster(ledgerId) {
    if (checkUserPrivelege(pvUpdateLedger)) {

        var ledgerName = $("#ledgerName").val();
        var displayName = $("#displayName").val();
        var underGroupSelect = $("#underGroupSelect").val();
        var ledgerFundtypeSelect = $("#ledgerFundtypeSelect").val();
        if ($('#budgetTypeLedger').prop('checked')) {
            var budgetLedgerType = $("#budgetTypeLedger").val();
        } else
        {
            budgetLedgerType = "No";
        }
        var budgetHeadCode = $("#budgetHeadCode").val();
        var remarks = $("#ledgerRemarks").val();
        if ($('#budgetLedgerMapping').prop('checked')) {
            var budgetLedgerMapping = $("#budgetLedgerMapping").val();
        } else
        {
            budgetLedgerMapping = "No";
        }

        if (ledgerName == "" || ledgerName == "undefined" || displayName == "" || displayName == "undefined" || underGroupSelect == "" || underGroupSelect == "undefined" ||
                ledgerFundtypeSelect == "" || ledgerFundtypeSelect == "undefined" || budgetLedgerType == "" || budgetLedgerType == "undefined" ||
                budgetLedgerMapping == "" || budgetLedgerMapping == "undefined") {
            displaySmallErrorMessagesInRed("ddoMessageDiv", "Please Fill * fields" + "");
            return false;
        }

        var updateLedgerJson = {
            ledgerName: ledgerName,
            displayName: displayName,
            underGroup: underGroupSelect,
            FundType: ledgerFundtypeSelect,
            budgetType: budgetLedgerType,
            budgetHeadCode: budgetHeadCode,
            remarks: remarks,
            ledgerMapping: budgetLedgerMapping
        }

        var userId = getUserSessionElement("userId");
        $.get(server_base_url + "/financial/account/Ledger/Update", {
            updateledgerjson: JSON.stringify(updateLedgerJson),
            loginuserid: userId,
            ledgerid: ledgerId
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("ledgerMessageDiv", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("ledgerMessageDiv", unauthcreateLedgerorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("ledgerMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("ledgerMessageDiv", "" + existed + "");
                setTimeout(function () {
                    $("#ledgerMessageDiv").text("").val("");
                }, 3000);
            } else if (data != null) {
                $("#ledgerName").prop("readonly", true);
                $("#displayName").prop("readonly", true);
                $("#budgetHeadCode").prop("readonly", true);
                $("#ledgerRemarks").prop("readonly", true);
                $("#underGroupSelect").prop("disabled", true);
                $("#ledgerFundtypeSelect").prop("disabled", true);
                $("#updateLedgerButton").attr('disabled', true);
                $("#resetUpdateButton").attr('disabled', true);
                displaySuccessMessages("ledgerMessageDiv", updateMessage, "");
                setTimeout(function () {
                    ledgerMasterCreation();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("ledgerMessageDiv", "Ledger Updation Failed" + "");
            }
        });
    }
}

function deleteLedger(ledgerId) {
    if (checkUserPrivelege(pvDeleteLedger)) {
        var currentLoginUser = getUserSessionElement("userId");
        $.get(server_base_url + "/financial/account/Ledger/Delete", {
            currentuser: currentLoginUser,
            ledgerid: ledgerId
        }).done(function (data) {
            if (data == fail) {
                ledgerListErrorMsgId("ledgerListErrorMsgId", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                ledgerListErrorMsgId("ledgerListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                ledgerListErrorMsgId("ledgerListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == delete_map) {
                displayErrorMessages("ledgerListErrorMsgId", delete_map_messages, "");
                setTimeout(function () {
                    $("#ledgerListErrorMsgId").text("");
                }, 3000);
            } else if (data != null) {
                displaySuccessMessages("ledgerListErrorMsgId", deleteMessage, "");
                setTimeout(function () {
                    ledgerListTable();
                }, 3000);
            }
        });
    }
}