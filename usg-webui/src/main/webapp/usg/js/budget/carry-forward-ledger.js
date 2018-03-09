/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function carryForwardLedger(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="carryForwardLedgerBalance()">Carry Forward Ledger Balance</a>');

    $("#" + divId).text("").append('<div id="carryForwardLedgerDivId"></div>');
    $("#carryForwardLedgerDivId").text("").append('<div id="carryForwardLedgerTabMenu" />');
    $("#carryForwardLedgerTabMenu").append('<div id="carryForwardLedgerMainMenu" class="row" />');
    $("#carryForwardLedgerTabMenu").append('<div id="carryForwardLedgerListMainMenu" class="row" />');
    $("#carryForwardLedgerTabMenu").append('<div id="carryForwardLedgerListTable" class="row" />');

    $("#carryForwardLedgerMainMenu").append('<div id="carryForwardLedgerMainPanel" class="panel panel-blue" />');
    $("#carryForwardLedgerMainPanel").append('<div id="carryForwardLedgerMainHeading" class="panel-heading" />');
    $("#carryForwardLedgerMainHeading").append('<class="panel-title" data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Carry Forward Ledger Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="carryForwardLedgerCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
    $("#carryForwardLedgerMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#carryForwardLedgerCollp").click(function() {
        $("#collapseOne1").toggle();
        if ($("#carryForwardLedgerCollp span").hasClass("glyphicon-minus-sign")) {
            $("#carryForwardLedgerCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#carryForwardLedgerCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne1").append('<div id="carryForwardLedgerBalanceMainBody" class = "panel-body pan" />');
    $("#carryForwardLedgerBalanceMainBody").append('<div id="panelRow" class="form-horizontal" />');
    $("#carryForwardLedgerBalanceMainBody").append('<center><span id="carryForwardLedgerBalanceMessageDiv"></span></center>');
    $("#carryForwardLedgerBalanceMainBody").append('<div id="carryForwardLedgerBalanceBodyDiv" class="row" />');

    $("#carryForwardLedgerBalanceBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label>Ledger Name <span class="require">*</span></label><select class="form-control" name="ledger" id="ledgerId"></select>'
            + '</div><div class="form-group col-lg-6"><label>From Financial Year <span class="require">*</span></label><select class="form-control" name="financialYear" id="financialYearId"></select></div></div>');

    $("#carryForwardLedgerBalanceBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label>To Financial Year<span class="require">*</span></label><select class="form-control" name="ToYear" id="toFinancialYear"></select>'
            + '</div><div class="form-group col-lg-6"><label>Carry Forward/Lapse ? <span class="require">*</span></label><select class="form-control" name="colLapse" id="fcolLapseId"><option value="0">----Select One----</option><option>Carry Forward</option><option>Lapse</option></select></div></div>');

    $("#carryForwardLedgerBalanceBodyDiv").append("<div class='form-group'><center><button id='searchCarryForwardButton' class='btn btn-success' style='height:40px;width:80px'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetCarryForwardInfo() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");

    setTimeout(function() {
        fetchLedgerForBudget('ledgerId');
    }, 200);
    getFromAndToFinancialYear();

    $("#searchCarryForwardButton").click(function(e) {
        var parentLedgerId = $("#ledgerId").val();
        var parentLedgerName = $("#ledgerId option:selected").text();
        var financialYearId = $("#financialYearId").val();
        var financialYearId1 = $("#financialYearId option:selected").text();
        fetchLedgerBalance(parentLedgerId, parentLedgerName);
    });

}

function resetCarryForwardInfo() {
    $("#ledgerId").val('');
    $("#fcolLapseId").val('0');
    $("#carryForwardLedgerBalanceMessageDiv").text("").val();
}

function getFromAndToFinancialYear()
{
    $.get(server_base_url + "budget/master/FinancialYear/View", {
    }).done(function(pdata) {
        if (pdata == fail || pdata == unauthorized || pdata.statuscode == unauthorized || pdata == invalidSession || pdata == statusException) {
        } else {
            if (pdata != null) {
                if (pdata.length > 0) {
                    var fromYear = 0;
                    for (var i = pdata.length - 1; i >= 0; i--) {
                        if (pdata[i].active == "Yes") {
                            $("#financialYearId").append("<option value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].fromDate + "-" + pdata[i].toDate + "</option>");
//                            $("#financialYearDiv").text("").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + pdata[i].fromDate + "-" + pdata[i].toDate + "</strong></span>");
                            fromYear = parseInt(pdata[i].year) + 1;
                            for (var i = pdata.length - 1; i >= 0; i--) {
                                if (fromYear == pdata[i].year)
                                    $("#toFinancialYear").append("<option value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].year + "</option>");
                            }
                        }
                    }
                    var toYearOptionLenght = $("#toFinancialYear option").length;
                    if (toYearOptionLenght == 0) {
                        $("#toFinancialYear").append("<option  value='' selected >---" + noDataAvailable + " ----</option>");
                    }
                }
            }
        }
    });
}

function fetchLedgerBalance(parentLedgerId, parentLedgerName) {

    var ledId = $("#ledgerId").val();
    var colForward = $("#fcolLapseId").val();
    if (ledId == "" || ledId == null || colForward == '0' || colForward == "0") {
        displayErrorMessages("carryForwardLedgerBalanceMessageDiv", "Please Fill All * Fields");
        return false;
    }
    $("#carryForwardLedgerBalanceMessageDiv").text("");
    $("#carryForwardLedgerListMainMenu").text("").append('<div id="carryForwardLedgerListPanel" class="panel panel-blue" />');
    $("#carryForwardLedgerListPanel").append('<div id="carryForwardLedgerListHeading" class="panel-heading" />');
    $("#carryForwardLedgerListHeading").append('<div class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>Carry Forward Ledger Balance List</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="carryForwardLedgerColDiv1"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');
    $("#carryForwardLedgerListPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
    $("#carryForwardLedgerColDiv1").click(function() {
        $("#collapseOne3").toggle();
        if ($("#carryForwardLedgerColDiv1 span").hasClass("glyphicon-minus-sign")) {
            $("#carryForwardLedgerColDiv1").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#carryForwardLedgerColDiv1").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append('<div id="carryForwardLedgerListBody" class = "panel-body pan" />');
    $("#carryForwardLedgerListBody").append('<div id="panelRow" class="row" />');
    $("#carryForwardLedgerListBody").append('<div id="carryForwardLedgerListErrorMsgId" />');
    $("#carryForwardLedgerListBody").append('<div id="carryForwardLedgerListMainBody" class="table-responsive" />');
    $("#carryForwardLedgerListMainBody").append('<table id="carryForwardLedgerTable" class="table table-striped table-bordered table-hover" />');
    $("#carryForwardLedgerTable").append('<thead id="carryForwardLedgerHeadId" />');
    $("#carryForwardLedgerTable").append('<tbody id="carryForwardLedgerBodyId" />');
    $("#carryForwardLedgerHeadId").append('<tr><th>Sno</th><th>Ledger Name</th><th>Amount Type</th><th>Opening Balance(Amount)</th><th>Total Cr Amount</th><th>Total Dr Amount</th><th>Remaining Amount</th><th>Update</th></tr>');

    var locationId = getUserSessionElement(seLocationId);
    var ddoId = getUserSessionElement(seDDOId);
    var dateArray = getCurrentFinancialYearDateInArray();
    var fromDateStr;
    var toDateStr;
    if (dateArray.length > 0) {
        fromDateStr = dateArray[0];
        toDateStr = dateArray[1];
    }
    $.get(server_base_url + "/finance/account/CarryForwardBalance/Search", {
        ledgerId: parentLedgerId,
        ddoId: ddoId,
        locationId: locationId,
        fromDate: fromDateStr,
        toDate: toDateStr
    }).done(function(data) {
        var mainData = JSON.stringify(data);
        mainData = JSON.parse(mainData);
        if (mainData.statuscode == NoData) {
            displayErrorMessages("carryForwardLedgerListErrorMsgId", NoDataFoundMessage + "");
        } else {
            var mainData = data.result;

            var creditAmount = mainData.closingCrAmount;
            if (creditAmount == undefined || creditAmount == "undefined") {
                creditAmount = "";
            }
            var DebitAmount = mainData.closingDrAmount;
            if (DebitAmount == undefined || DebitAmount == "undefined") {
                DebitAmount = "";
            }
            var closingAmount = mainData.closingAmount;
            if (closingAmount == undefined || closingAmount == "undefined") {
                closingAmount = "";
            }

            $("#carryForwardLedgerBodyId").append('<tr><td>1</td><td>' + mainData.manageOpening.ledgerName + '</td><td>' + mainData.manageOpening.amountType + '</td><td>' + mainData.manageOpening.amount + '</td><td>' + creditAmount + '</td><td>' + DebitAmount + '</td><td>' + closingAmount + '</td><td><button type="submit" onclick = updateLedgerBalance("' + encodeURI(JSON.stringify(mainData)) + '") id="updateButton" class="btn btn-success">Update</button></td></tr>');
        }

    });
}

function updateLedgerBalance(mainData) {

    mainData = JSON.parse(decodeURI(mainData));
    var collapseOrCarryForward = $("#fcolLapseId").val();
    var yearId = $("#toFinancialYear").val();
    var year = $("#toFinancialYear").text();
    var closingAmount = mainData.closingAmount;
    var ledgerName = mainData.manageOpening.ledgerName;
    var ledgerId = mainData.manageOpening.ledgerId;

    if (collapseOrCarryForward == '0' || collapseOrCarryForward == "0") {
        displayErrorMessages("carryForwardLedgerBalanceMessageDiv", "Please select any one carry forward / Collapse");
        return false;
    } else {
        $("#carryForwardLedgerBalanceMessageDiv").text("");
    }

    var carryForwardJson = {
        closingBalance: closingAmount,
        collapseOrCarryForward: collapseOrCarryForward,
        ledgerId: ledgerId,
        ledgerName: ledgerName,
        year: year,
        yearId: yearId,
        openingBal: mainData.manageOpening.amount,
        amountType: mainData.manageOpening.amountType,
        drAmount: mainData.closingDrAmount,
        crAmount: mainData.closingCrAmount
    }
    var loginId = getUserSessionElement(seUserId);

    $.get(server_base_url + "/finance/account/CarryForward/Update", {
        carryForwardJson: JSON.stringify(carryForwardJson),
        userId: loginId
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("carryForwardLedgerListErrorMsgId", failMessage + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("carryForwardLedgerListErrorMsgId", unauthorizedMessage + "");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("carryForwardLedgerListErrorMsgId", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessagesInRed("carryForwardLedgerListErrorMsgId", "No User available" + "");
        } else if (data.result != null) {
            displaySuccessMessages("carryForwardLedgerListErrorMsgId", "Ledger Is Successfully Updated to Manage Opening Balance");
            setTimeout(function() {
                carryForwardLedgerBalance();
            }, 3000);
        }

    });
}

function fetchLedgerForBudget(divId) {
    $("#" + divId).text("").append("<option value=''>----Select Ledger Name----</option>");
    $.get(server_base_url + "/Budget/CarryForward/LedgerList/View", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        }
        if (data == 404 || data == "404") {
            displayErrorMessages("carryForwardLedgerBalanceMessageDiv", "No Data in Ledger Dropdown");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
//            var mainData = JSON.parse(data)
            for (var i = 0; i < data.length; i++) {
                var ledgerName = data[i].ledgerName;
                if (ledgerName == undefined || ledgerName == "undefined") {
                    ledgerName == "";
                }
                var ledgerCode = data[i].ledgerCode;
                if (ledgerCode == undefined || ledgerCode == "undefined") {
                    ledgerCode == "";
                }
                var ledgerId = data[i].idStr;
                if (ledgerId == undefined || ledgerId == "undefined") {
                    ledgerId == "";
                }

                $("#" + divId).append("<option  value='" + ledgerId + "' >" + ledgerName + "(" + ledgerCode + ")" + "</option>");
            }
        }
    });
}


