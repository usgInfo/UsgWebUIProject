/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function manageOpeningBalanceMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="manageOpeningBalanceMaster()">Manage Opening Balance</a>');
    $("#" + divId).text("").append('<div id="manageOpeningBalanceDivId"></div>');
    $("#manageOpeningBalanceDivId").text("").append('<div id="manageOpeningBalanceTabMenu" />');
    $("#manageOpeningBalanceTabMenu").append('<div id="manageOpeningBalanceMainMenu" class="row" />');
    $("#manageOpeningBalanceTabMenu").append('<div id="manageOpeningBlnListMainMenu" class="row" />');
    $("#manageOpeningBalanceTabMenu").append('<div id="manageOpeningBlnListTable" class="row" />');
    if (checkUserPrivelege(pvCreateOpenBalance)) {
        $("#manageOpeningBalanceMainMenu").append('<div id="manageOpeningBalanceMainPanel" class="panel panel-blue" />');
        $("#manageOpeningBalanceMainPanel").append('<div id="manageOpeningBalanceMainHeading" class="panel-heading" />');
        $("#manageOpeningBalanceMainHeading").append('<class="panel-title" data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Manage Opening Balance Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="manageopeningBalCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
        $("#manageOpeningBalanceMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#manageopeningBalCollp").click(function () {
            $("#collapseOne1").toggle();
            if ($("#manageopeningBalCollp span").hasClass("glyphicon-minus-sign")) {
                $("#manageopeningBalCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#manageopeningBalCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="manageOpeningBalanceMainBody" class = "panel-body pan" />');
        $("#manageOpeningBalanceMainBody").append('<div id="panelRow" class="form-horizontal" />');
        $("#manageOpeningBalanceMainBody").append('<center><span id="manageOpeningBalanceMessageDiv"></span></center>');
        $("#manageOpeningBalanceMainBody").append('<div id="manageOpeningBalanceBodyDiv" class="row" />');
        $("#manageOpeningBalanceBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ledgerName">Ledger Name <span class="require">*</span></label><select class="form-control" name="ledgerName" id="ledgerNameSelect"></select>'
                + '</div><div class="form-group col-lg-6"><label for="financialYear">Financial Year <span class="require">*</span></label><select class="form-control" name="financialYear" id="financialYearSelect"></select></div></div>');
        $("#manageOpeningBalanceBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fundType">Fund Type </label><select class="form-control" name="fundType" id="fundtypeSelect"></select><span id="fundtypeErr" class="text-danger">'
                + '</div><div class="form-group col-lg-6"><label for="groupName">Under Group <span class="require">*</span></label><select class="form-control" name="groupName" id="groupNameSelect"></select><span id="displayNameErr" class="text-danger"></span></div></div>');
        $("#manageOpeningBalanceBodyDiv").append("<div class='form-group'><center><button id='searchButton' class='btn btn-success' style='height:40px;width:80px'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetOpeningBalanceInfo() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    }
    manageOpeningTable();
    setTimeout(function () {
        fetchLedgerNameInfo('ledgerNameSelect');
    }, 200);
    fetchFinancialYearInfo('financialYearSelect');
//    setTimeout(function() {
//        fetchFinancialYearInfo();
//    }, 400);

    $("#ledgerNameSelect").attr("onchange", "fetchFundTypeandGradeInfo();")
    $("#searchButton").click(function (e) {
        var parentLedgerId = $("#ledgerNameSelect").val();
        var parentLedgerName = $("#ledgerNameSelect option:selected").text();
        var finYearId = $("#financialYearSelect").val();
        var budgetType = "";
        var ledgerCategory = "";
        var sanctionedStatus = "";
        var extraProvisionStatus = "";
        var sanctionedAmount = 0;
        var extraProvisionAmount = 0;
        var finalAmount = 0.00;
        var budTypeDrCr = "";
        $.get(server_base_url + "financial/account/CheckBudgetTypeLedger", {
            ledger: parentLedgerId
        }).done(function (bdata) {
                var mainData = bdata.result;
        budgetType = (mainData.budgetType).toLowerCase();
            if(budgetType != null && budgetType != undefined && budgetType == "yes"){
                $.get(server_base_url + "financial/account/CheckLedgerCategory", {
            ledger: parentLedgerId
        }).done(function (bdata) {
                var mainData = bdata.result; 
//        ledgerCategory = mainData.ledgerCategory;alert("ledgerCategory category "+mainData);
            for (var i = mainData.length - 1; i >= 0; i--){
                var ledCategory = mainData[i];
                var ledCategoryData = JSON.stringify(ledCategory);
                ledgerCategory = mainData[i].ledgerCategory;
            }
        
        
            if(ledgerCategory != null && ledgerCategory != undefined && ledgerCategory == "Income"){
                $.get(server_base_url + "financial/account/GetSanctionedAndExtraProvisionFromIncomeBudget", {
            ledger: parentLedgerId, finYear: finYearId
        }).done(function (bdata) {
            var statusCode = bdata.statuscode;    
            
        if(statusCode == success){
        var mainData = bdata.result; 
//        ledgerCategory = mainData.ledgerCategory;alert("ledgerCategory category "+mainData);
            for (var i = mainData.length - 1; i >= 0; i--){
                sanctionedAmount = 0;
                extraProvisionAmount = 0;
                budTypeDrCr = "Cr"
                var incomeBudget = mainData[i];
                var incomeBudgetData = JSON.stringify(incomeBudget);
                sanctionedStatus = (mainData[i].isSanctioned).toLowerCase();
                extraProvisionStatus = (mainData[i].isExtraProvisioned).toLowerCase();
                if(sanctionedStatus == "true"){
                    sanctionedAmount = mainData[i].sanctionedAmount;
                    sanctionedAmount = sanctionedAmount *100000;
                }
                if(extraProvisionStatus == "true"){
                    extraProvisionAmount = mainData[i].extraProvisionAmount;
                    extraProvisionAmount = extraProvisionAmount * 100000;
                }
            
            finalAmount = finalAmount + sanctionedAmount + extraProvisionAmount;
            }
        }else{
            sanctionedStatus = "false";
            extraProvisionStatus = "false";
            sanctionedAmount = 0;
            extraProvisionAmount = 0;
        }
//        finalAmount = sanctionedAmount + extraProvisionAmount;
        displayDetailsForBudgetType(parentLedgerName, budTypeDrCr, finalAmount);    
        });
                
                
            }
            if (ledgerCategory != null && ledgerCategory != undefined && ledgerCategory == "Expense") {
//                manageOpeningListTable(parentLedgerId, parentLedgerName, finYearId);
                $.get(server_base_url + "financial/account/GetSanctionedAndExtraProvisionFromBudgetExpense", {
            ledger: parentLedgerId, finYear: finYearId
        }).done(function (bdata) {
            var statusCode = bdata.statuscode;    
            
        if(statusCode == success){
        var mainData = bdata.result; 
//        ledgerCategory = mainData.ledgerCategory;alert("ledgerCategory category "+mainData);
            for (var i = mainData.length - 1; i >= 0; i--){
                sanctionedAmount = 0;
                extraProvisionAmount = 0;
                budTypeDrCr = "Dr"
                var expenseBudget = mainData[i];
                var expenseBudgetData = JSON.stringify(expenseBudget);
                sanctionedStatus = (mainData[i].isSanctioned).toLowerCase();
                extraProvisionStatus = (mainData[i].isExtraProvisioned).toLowerCase();
                if(sanctionedStatus == "true"){
                    sanctionedAmount = mainData[i].sanctionedAmount;
                    sanctionedAmount = sanctionedAmount *100000;
                }
                if(extraProvisionStatus == "true"){
                    extraProvisionAmount = mainData[i].extraProvisionAmount;
                    extraProvisionAmount = extraProvisionAmount * 100000;
                }
            
            finalAmount = finalAmount + sanctionedAmount + extraProvisionAmount;
            }
        }else{
            sanctionedStatus = "false";
            extraProvisionStatus = "false";
            sanctionedAmount = 0;
            extraProvisionAmount = 0;
        }
        
//        finalAmount = sanctionedAmount + extraProvisionAmount;
        displayDetailsForBudgetType(parentLedgerName, budTypeDrCr, finalAmount);    
        });
            }
        });
//        displayDetailsForBudgetType(parentLedgerName, budTypeDrCr, finalAmount);
            }
            
            if (budgetType != null && budgetType != undefined && budgetType == "no") {
                manageOpeningListTable(parentLedgerId, parentLedgerName, finYearId);
            }
        });


    });
}

function resetOpeningBalanceInfo() {

    $("#ledgerNameSelect").val('');
    $("#headCodeSelect").val('');
    $("#groupNameSelect").val('');
    $("#fundtypeSelect").val('');
    $("#manageOpeningBlnListMainMenu").text('');
}

function fetchLedgerNameInfo(divId) {
    $("#" + divId).text("").append("<option value=''>----Select Ledger Name----</option>");
    $.get(server_base_url + "/finance/AccountMaster/FetchLedgerWithLedgerCategory", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = JSON.parse(data)
            for (var i = 0; i < mainData.length; i++) {
                $("#" + divId).append("<option  value='" + mainData[i].idStr + "' >" + mainData[i].ledgerName + "(" + mainData[i].ledgerCode + ")" + "</option>");
            }
        }
    });
}

function fetchFundTypeandGradeInfo() {
    $("#fundtypeSelect").text("").append("<option value=''>----Select Fund Type----</option>");
    $("#groupNameSelect").text("").append("<option value=''>----Select Group----</option>");
    $.get(server_base_url + "/financial/account/GetFundandGradeinOpeningBalService", {
        ledger: $("#ledgerNameSelect").val()
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            for (var i = 0; i < data.length; i++) {
                $("#fundtypeSelect").append("<option value='" + data[i].FundType + "' selected>" + data[i].fundTypeName + "</option>");
                $("#groupNameSelect").append("<option value='" + data[i].underGroup + "' selected>" + data[i].underGroupName + "</option>");
            }
        }
    });
}

//function fetchFinancialYearInfo(divId) {
//
//    $.get(server_base_url + "budget/master/FinancialYear/View", {
//    }).done(function (data) {
//        if (data == fail || data == unauthorized) {
////            location.href = "dashboard.jsp";
//        } else if (data == invalidSession) {
//            callSessionTimeout();
//        } else {
//            $("#" + divId).append("<option value='' selected>----Select Year----</option>");
//            for (var i = 0; i < data.length; i++) {
////                var subData = mainData[i];
//                var active = data[i].active;
//                if (active == 'Yes') {
//                    $("#" + divId).append("<option value='" + data[i]._id.$oid + "'>" + data[i].fromDate + "-" + data[i].toDate + "</option>");
//                }
//            }
//        }
//    });
//}
function fetchFinancialYearInfo(divId) {

    var id = getUserSessionElement(seCurrentFinancialYearId);
    var val = getUserSessionElement(seCurrentFinancialYear);
    $("#" + divId).append("<option value='" + id + "'>" + val + "</option>");


}
function manageOpeningListTable(parentLedgerId, parentLedgerName, finYearId) {
    if (parentLedgerId == null || parentLedgerId == undefined || parentLedgerId == "undefined" || parentLedgerId == "" || parentLedgerName == null || parentLedgerName == "") {
        displayErrorMessages("manageOpeningBalanceMessageDiv", "Please Fill * Fields");
        setTimeout(function () {
            manageOpeningBalanceMaster();
        }, 3000);
        return false;
    }
    if (checkUserPrivelege(pvViewOpenBalance)) {
        $.get(server_base_url + "/financial/account/ManageOpeningBalSearchService", {
            ledger: parentLedgerId,
            financialYear: finYearId
        }).done(function (data) {

            var groupNature = "";
            $.get(server_base_url + "financial/common/Group/ViewList", {
            }).done(function (bdata) {
                for (var i = bdata.length - 1; i >= 0; i--) {
                    if (bdata[i]._id.$oid == $("#groupNameSelect").val())
                    {
                        groupNature = bdata[i].nature;
                    }
                }
            });
            setTimeout(function () {
                if (data.result != null && data.result != undefined) {

                    var mainData = data.result;
                    var subData = mainData[0];
                    if (subData.amountType == "Dr")
                    {
                        $("#manageOpeningBlnListMainMenu").text("").append('<div id="manageOpeningBlnListPanel" class="panel panel-blue" />');
                        $("#manageOpeningBlnListPanel").append('<div id="manageOpeningBlnListHeading" class="panel-heading" />');
                        $("#manageOpeningBlnListHeading").append('<div class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>Manage Opening Balance</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="manageOpeningBalanceColDiv"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');
                        $("#manageOpeningBlnListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
                        $("#manageOpeningBalanceColDiv").click(function () {
                            $("#collapseOne2").toggle();
                            if ($("#manageOpeningBalanceColDiv span").hasClass("glyphicon-minus-sign")) {
                                $("#manageOpeningBalanceColDiv").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
                            } else {
                                $("#manageOpeningBalanceColDiv").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
                            }
                        });
                        $("#collapseOne2").append('<div id="manageOpeningBlnListBody" class = "panel-body pan" />');
                        $("#manageOpeningBlnListBody").append('<div id="panelRow" class="row" />');
                        $("#manageOpeningBlnListBody").append('<div id="manageOpeningBlnListErrorMsgId" />');
                        $("#manageOpeningBlnListBody").append('<div id="manageOpeningBlnListMainBody" class="table-responsive" />');
                        $("#manageOpeningBlnListMainBody").append('<table id="manageOpeningBlnTable" class="table table-striped table-bordered table-hover" />');
                        $("#manageOpeningBlnTable").append('<thead id="manageOpeningBlnTableHeadId" />');
                        $("#manageOpeningBlnTable").append('<tbody id="manageOpeningBlnTableBodyId" />');
                        $("#manageOpeningBlnTableHeadId").append('<tr><th>Sno</th><th>Ledger Name</th><th>Dr/Cr</th><th>Opening Balance(Amount)</th><th>Update</th></tr>');
                        $("#manageOpeningBlnTableBodyId").append('<tr><td>1</td><td>' + subData.ledgerName + '</td><td><select id="amountTypeSelect"><option>Dr</option><option>Cr</option></select></td><td><input type="text" id="openingBalanceAmt" value= ' + subData.amount + '></td><td><button type="submit" id="updateButton" class="btn btn-success">Update</button></td></tr>');
                    } else
                    {
                        $("#manageOpeningBlnListMainMenu").text("").append('<div id="manageOpeningBlnListPanel" class="panel panel-blue" />');
                        $("#manageOpeningBlnListPanel").append('<div id="manageOpeningBlnListHeading" class="panel-heading" />');
                        $("#manageOpeningBlnListHeading").append('<div class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>Manage Opening Balance</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="manageOpeningBalanceColDiv1"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');
                        $("#manageOpeningBlnListPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
                        $("#manageOpeningBalanceColDiv1").click(function () {
                            $("#collapseOne3").toggle();
                            if ($("#manageOpeningBalanceColDiv1 span").hasClass("glyphicon-minus-sign")) {
                                $("#manageOpeningBalanceColDiv1").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
                            } else {
                                $("#manageOpeningBalanceColDiv1").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
                            }
                        });
                        $("#collapseOne3").append('<div id="manageOpeningBlnListBody" class = "panel-body pan" />');
                        $("#manageOpeningBlnListBody").append('<div id="panelRow" class="row" />');
                        $("#manageOpeningBlnListBody").append('<div id="manageOpeningBlnListErrorMsgId" />');
                        $("#manageOpeningBlnListBody").append('<div id="manageOpeningBlnListMainBody" class="table-responsive" />');
                        $("#manageOpeningBlnListMainBody").append('<table id="manageOpeningBlnTable" class="table table-striped table-bordered table-hover" />');
                        $("#manageOpeningBlnTable").append('<thead id="manageOpeningBlnTableHeadId" />');
                        $("#manageOpeningBlnTable").append('<tbody id="manageOpeningBlnTableBodyId" />');
                        $("#manageOpeningBlnTableHeadId").append('<tr><th>Sno</th><th>Ledger Name</th><th>Dr/Cr</th><th>Opening Balance(Amount)</th><th>Update</th></tr>');
                        $("#manageOpeningBlnTableBodyId").append('<tr><td>1</td><td>' + subData.ledgerName + '</td><td><select id="amountTypeSelect"><option>Cr</option><option>Dr</option></select></td><td><input type="text" id="openingBalanceAmt" value= ' + subData.amount + '></td><td><button type="submit" id="updateButton" class="btn btn-success">Update</button></td></tr>');
                    }
                    $("#updateButton").click(function () {
                        var status = checkLedgerInVouchers(parentLedgerId);
                        var status1 = checkLedgerForCarryForward(parentLedgerId, finYearId);
                        if (status == true) {
                            displayErrorMessages("manageOpeningBlnListErrorMsgId", "This Ledger Can't be updated as it is used in vouchers");
                            setTimeout(function () {
                                manageOpeningBalanceMaster("dashboardBodyMainDiv");
                            }, 3000);
                        } else if (status1 == true) {
                            displayErrorMessages("manageOpeningBlnListErrorMsgId", "This Ledger Can't be updated as it is Forwarded or Lapsed");
                            setTimeout(function () {
                                manageOpeningBalanceMaster("dashboardBodyMainDiv");
                            }, 3000);
                        } else if (status == false && status1 == false)
                        {
                            openingBalanceUpdate(parentLedgerName, parentLedgerId, subData._id.$oid);
                        }


                    });
                } else
                {
                    var parentLedger = parentLedgerName;
                    if (parentLedger == undefined || parentLedger == "undefined") {
                        parentLedger = "";
                    }
                    $("#manageOpeningBlnListMainMenu").text("").append('<div id="manageOpeningBlnListPanel" class="panel panel-blue" />');
                    $("#manageOpeningBlnListPanel").append('<div id="manageOpeningBlnListHeading" class="panel-heading" />');
                    $("#manageOpeningBlnListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>Manage Opening Balance</center></a>');
                    $("#manageOpeningBlnListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
                    $("#collapseOne2").append('<div id="manageOpeningBlnListBody" class = "panel-body pan" />');
                    $("#manageOpeningBlnListBody").append('<div id="panelRow" class="row" />');
                    $("#manageOpeningBlnListBody").append('<div id="manageOpeningBlnListErrorMsgId" />');
                    $("#manageOpeningBlnListBody").append('<div id="manageOpeningBlnListMainBody" class="table-responsive" />');
                    $("#manageOpeningBlnListMainBody").append('<table id="manageOpeningBlnTable" class="table table-striped table-bordered table-hover" />');
                    $("#manageOpeningBlnTable").append('<thead id="manageOpeningBlnTableHeadId" />');
                    $("#manageOpeningBlnTable").append('<tbody id="manageOpeningBlnTableBodyId" />');
                    $("#manageOpeningBlnTableHeadId").append('<tr><th>Sno</th><th>Ledger Name</th><th>Dr/Cr</th><th>Opening Balance(Amount)</th><th>Save</th></tr>');
                    if (groupNature == "Assets" || groupNature == "Expenditure")
                    {
                        $("#manageOpeningBlnTableBodyId").append('<tr><td>1</td><td>' + parentLedger + '</td><td><select id="amountTypeSelect"><option>Dr</option><option>Cr</option></select></td><td><input type="text" id="openingBalanceAmt" /></td><td><button type="submit" id="saveButton" class="btn btn-success"><i class="fa fa-save"></i>&nbsp;Save</button></td></tr>');
                    } else if (groupNature == "Income" || groupNature == "Liability")
                    {
                        $("#manageOpeningBlnTableBodyId").append('<tr><td>1</td><td>' + parentLedger + '</td><td><select id="amountTypeSelect"><option>Cr</option><option>Dr</option></select></td><td><input type="text" id="openingBalanceAmt" /></td><td><button type="submit" id="saveButton" class="btn btn-success"><i class="fa fa-save"></i>&nbsp;Save</button></td></tr>');
                    } else
                    {
                        $("#manageOpeningBlnTableBodyId").append('<tr><td>1</td><td>' + parentLedger + '</td><td><select id="amountTypeSelect"><option>Dr</option><option>Cr</option></select></td><td><input type="text" id="openingBalanceAmt" /></td><td><button type="submit" id="saveButton" class="btn btn-success"><i class="fa fa-save"></i>&nbsp;Save</button></td></tr>');
                    }
                }
                $("#saveButton").click(function (e) {
                    openingBalance(parentLedgerName, parentLedgerId);
                });
            }, 2000);
        });
    }

}

function checkLedgerInVouchers(ledgerId) {
    var data = JSON.parse($.ajax({url: server_base_url + '/finance/CheckLedgerFromVoucher/Check', type: 'GET', data: {ledgerId: ledgerId}, dataType: "json", async: false}).responseText);
    return data.result;

}

function checkLedgerForCarryForward(ledgerId, finYearId) {
    var data = JSON.parse($.ajax({url: server_base_url + '/finance/CheckLegerForCarryForward/Check', type: 'GET', data: {ledgerId: ledgerId, financialYearId: finYearId}, dataType: "json", async: false}).responseText);
    return data.result;

}

function openingBalanceUpdate(parentLedgerName, parentLedgerId, Id)
{
    if (checkUserPrivelege(pvUpdateOpenBalance)) {
        var blnType = $("#amountTypeSelect").val();
        var openingBalanceAmt = $("#openingBalanceAmt").val();
        var json = {
            ledgerName: parentLedgerName,
            ledgerId: parentLedgerId,
            amountType: blnType,
            amount: openingBalanceAmt,
            financialYear: $("#financialYearSelect").val(),
            fundtype: $("#fundtypeSelect").val(),
            group: $("#groupNameSelect").val()
        }
        var userId = getUserSessionElement("userId");
        $.get(server_base_url + "/finance/account/ManageOpeningBal/Update", {
            json: JSON.stringify(json),
            loginuserid: userId,
            id: Id
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("manageOpeningBlnListErrorMsgId", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("manageOpeningBlnListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("manageOpeningBlnListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {

                displaySuccessMessages("manageOpeningBlnListErrorMsgId", successMessage, "");
                setTimeout(function () {
                    manageOpeningBalanceMaster("dashboardBodyMainDiv");
                }, 3000);
            }
        });
    }

}
function openingBalance(parentLedgerName, parentLedgerId) {
    if (checkUserPrivelege(pvCreateOpenBalance)) {
        var blnType = $("#amountTypeSelect").val();
        var openingBalanceAmt = $("#openingBalanceAmt").val();
        var json = {
            ledgerName: parentLedgerName,
            ledgerId: parentLedgerId,
            amountType: blnType,
            amount: openingBalanceAmt,
            financialYear: $("#financialYearSelect").val(),
            fundtype: $("#fundtypeSelect").val(),
            group: $("#groupNameSelect").val()
        }

        var userId = getUserSessionElement("userId");
        $.get(server_base_url + "/finance/account/ManageOpeningBalance/Save", {
            json: JSON.stringify(json),
            loginuserid: userId
        }).done(function (data) {
            if (data.statuscode == fail) {
                displayErrorMessages("manageOpeningBlnListErrorMsgId", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("manageOpeningBlnListErrorMsgId", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displayErrorMessages("manageOpeningBlnListErrorMsgId", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {

                displaySuccessMessages("manageOpeningBlnListErrorMsgId", successMessage, "");
                setTimeout(function () {
                    manageOpeningBalanceMaster("dashboardBodyMainDiv");
                }, 3000);
            }
        });
    }

}

function manageOpeningTable() {
    if (checkUserPrivelege(pvViewOpenBalance)) {
        $("#manageOpeningBlnListTable").text("").append('<div id="ManageBalanceListPanel" class="panel panel-blue" />');
        $("#ManageBalanceListPanel").append('<div id="ManageBalanceListHeading" class="panel-heading" />');
        $("#ManageBalanceListHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Manage Opening Balance</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="manageOpenbalListCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
        $("#ManageBalanceListPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
        $("#manageOpenbalListCollp").click(function () {
            $("#collapseOne3").toggle();
            if ($("#manageOpenbalListCollp span").hasClass("glyphicon-minus-sign")) {
                $("#manageOpenbalListCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#manageOpenbalListCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append('<div id="ManageBalanceListBody" class = "panel-body pan" />');
        $("#ManageBalanceListBody").append('<div id="panelRow" class="row" />');
        $("#ManageBalanceListBody").append('<div id="ManageBalanceListErrorMsgId" />');
        $("#ManageBalanceListBody").append('<div id="ManageBalanceListMainBody" class="table-responsive" />');
        $("#ManageBalanceListMainBody").append('<table id="ManageBalanceTable" class="table table-bordered" />');
        $("#ManageBalanceTable").append('<thead id="ManageBalanceTableHeadId" />');
        $("#ManageBalanceTable").append('<tbody id="ManageBalanceTableBodyId" />');
        $("#ManageBalanceTableHeadId").append('<tr id="ManageBalanceTableHeadIdTrHead"><th>Sno</th><th>Ledger Name</th><th>Dr/Cr</th><th>Opening Balance(Amount)</th>');
        if (checkUserPrivelege(pvDeleteOpenBalance)) {
            $("#ManageBalanceTableHeadIdTrHead").append('<th>Delete</th>');
        }
        $.post(server_base_url + "/finance/account/ManageOpeningBalance/ViewList", {
        }).done(function (data) {
            if (data.statuscode == NoData) {
                displaySmallErrorMessagesInRed("ManageBalanceListErrorMsgId", NoDataFoundMessage + "");
            }
            if (data == fail) {
                displaySmallErrorMessagesInRed("ManageBalanceListErrorMsgId", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("ManageBalanceListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("ManageBalanceListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("ManageBalanceListErrorMsgId", "No User available" + "");
            } else if (data != null) {
                var sno = 0;
                var mainData = data.result;
                for (var i = mainData.length - 1; i >= 0; i--) {
//                    sno++;
                    var subData = mainData[i];
                    var fyYear = $("#financialYearSelect").val();
                    if (fyYear == subData.financialYear) {
                        sno++;
                        var assjson = {
                            ledgerId: subData.ledgerId,
                            fincialYear: subData.financialYear

                        }
                        assjson = JSON.stringify(assjson);
                        $("#ManageBalanceTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + subData.ledgerName + "</td>"
                                + "<td style='cursor:pointer;'>" + subData.amountType + "</td>"
                                + "<td style='cursor:pointer;'>" + subData.amount + "</td>");
                        if (checkUserPrivelege(pvDeleteOpenBalance)) {
                            var deleteButton = "deleteButton" + subData._id.$oid;
//                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteManageOpeningBalance','manageOpeningTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");
                            $("#" + subData._id.$oid).append("<td style='cursor:pointer; <center><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<a  class='anchor_delete' onclick=javascript:checkdeleteinMOB('" + encodeURI(assjson) + "','" + subData._id.$oid + "') id='" + subData._id.$oid + "' style='margin-width:2%,width:100px' >Delete</a></center> </td>");
//                            var ledgerName = subData.ledgerId;
//                            var financialYear = subData.financialYear;
//                            var ledgerName = deleteButton.ledgerId;
//                            var financialYear = deleteButton.financialYear;
//                        alert("status1" + status1)

//                        $("#deleteButton").click(function() {
//                            $("#" + subData._id.$oid).click(function () {
//                                var ledgerName = subData.ledgerId;
//                                var financialYear = subData.financialYear;
////                            var status1 = checkLedgerForCarryForward(ledgerName, financialYear);
//                                var data = JSON.parse($.ajax({url: server_base_url + '/finance/CheckLegerForCarryForward/Check', type: 'GET', data: {ledgerId: ledgerName, financialYearId: financialYear}, dataType: "json", async: false}).responseText);
//                                alert("data.result" + data.result)
//                                if (data.result == true) {
//                                    displayErrorMessages("ManageBalanceListErrorMsgId", "This Ledger Can't be deleted as it is Forwarded or Lapsed");
////                            setTimeout(function() {
//////                                displayErrorMessages("ManageBalanceListErrorMsgId", "This Ledger Can't be deleted as it is Forwarded or Lapsed");
////                                manageOpeningTable();
////                            }, 3000);
//                                } else
//                                {
////                            deletePopUp(deleteManageOpeningBalance(), manageOpeningTable, subData._id.$oid);
//                                    $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteManageOpeningBalance','manageOpeningTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");
//                                }
//
//
//                            });

                        }
                    }
//                        + "<td style='cursor:pointer;' onclick=editDDoInfo('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>"
                }
                $("#ManageBalanceTable").dataTable();
            } else {
                displaySmallErrorMessagesInRed("ManageBalanceListErrorMsgId", NoDataFoundMessage + "");
            }
        });
    }
}
function checkdeleteinMOB(json, id)
{
    json = JSON.parse(decodeURI(json));

    var ledgerName = json.ledgerId;
    var financialYear = json.fincialYear;


//                            var status1 = checkLedgerForCarryForward(ledgerName, financialYear);
    var data = JSON.parse($.ajax({url: server_base_url + '/finance/CheckLegerForCarryForward/Check', type: 'GET', data: {ledgerId: ledgerName, financialYearId: financialYear}, dataType: "json", async: false}).responseText);
    if (data.result == true) {
        displayErrorMessages("ManageBalanceListErrorMsgId", "This Ledger Can't be deleted as it is Forwarded or Lapsed");
        setTimeout(function () {
            $("#ManageBalanceListErrorMsgId").text("");
        }, 3000);
    } else
    {
        deletePopUp('deleteManageOpeningBalance', 'manageOpeningTable', id);
        //   $("#" + id).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteManageOpeningBalance','manageOpeningTable','" + id + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");
    }



}
function deleteManageOpeningBalance(openingBalanceId) {
    if (checkUserPrivelege(pvDeleteOpenBalance)) {
        var currentLoginUser = getUserSessionElement("userId");
        $.get(server_base_url + "/finance/account/ManageOpeningBalance/Delete", {
            currentuser: currentLoginUser,
            openingBalanceId: openingBalanceId
        }).done(function (data) {
            if (data.statuscode == fail) {
                displaySmallErrorMessagesInRed("ManageBalanceListErrorMsgId", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("ManageBalanceListErrorMsgId", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displaySmallErrorMessagesInRed("ManageBalanceListErrorMsgId", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {
                displaySuccessMessages("ManageBalanceListErrorMsgId", deleteMessage, "");
                setTimeout(function () {
                    manageOpeningTable();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("ManageBalanceListErrorMsgId", "Manage Opening Balance Deletion Failed" + "");
            }
        });
    }
}
function getGroupNatureMOB(groupId)
{
    var result = "";
    $.get(server_base_url + "financial/common/Group/ViewList", {
    }).done(function (bdata) {
        for (var i = bdata.length - 1; i >= 0; i--) {
            if (bdata[i]._id.$oid == groupId)
            {
                result = bdata[i].nature;
            }
        }
    });
    return result;
}

function displayDetailsForBudgetType(ledgerName, drOrCr, openingBalance){
    if (drOrCr == "Dr")
                    {
                        $("#manageOpeningBlnListMainMenu").text("").append('<div id="manageOpeningBlnListPanel" class="panel panel-blue" />');
                        $("#manageOpeningBlnListPanel").append('<div id="manageOpeningBlnListHeading" class="panel-heading" />');
                        $("#manageOpeningBlnListHeading").append('<div class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>Manage Opening Balance</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="manageOpeningBalanceColDiv"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');
                        $("#manageOpeningBlnListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
                        $("#manageOpeningBalanceColDiv").click(function () {
                            $("#collapseOne2").toggle();
                            if ($("#manageOpeningBalanceColDiv span").hasClass("glyphicon-minus-sign")) {
                                $("#manageOpeningBalanceColDiv").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
                            } else {
                                $("#manageOpeningBalanceColDiv").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
                            }
                        });
                        $("#collapseOne2").append('<div id="manageOpeningBlnListBody" class = "panel-body pan" />');
                        $("#manageOpeningBlnListBody").append('<div id="panelRow" class="row" />');
                        $("#manageOpeningBlnListBody").append('<div id="manageOpeningBlnListErrorMsgId" />');
                        $("#manageOpeningBlnListBody").append('<div id="manageOpeningBlnListMainBody" class="table-responsive" />');
                        $("#manageOpeningBlnListMainBody").append('<table id="manageOpeningBlnTable" class="table table-striped table-bordered table-hover" />');
                        $("#manageOpeningBlnTable").append('<thead id="manageOpeningBlnTableHeadId" />');
                        $("#manageOpeningBlnTable").append('<tbody id="manageOpeningBlnTableBodyId" />');
                        $("#manageOpeningBlnTableHeadId").append('<tr><th>Sno</th><th>Ledger Name</th><th>Dr/Cr</th><th>Opening Balance(Amount)</th></tr>');
//                        $("#manageOpeningBlnTableBodyId").append('<tr><td>1</td><td>' + ledgerName + '</td><td><select id="amountTypeSelect"><option>Dr</option><option>Cr</option></select></td><td><input type="text" readonly="readonly" id="openingBalanceAmt" value= ' + parseFloat(openingBalance).toFixed(2) + '></td></tr>');
                        $("#manageOpeningBlnTableBodyId").append('<tr><td>1</td><td>' + ledgerName + '</td><td>Dr</td><td>' + parseFloat(openingBalance).toFixed(2) + '</td></tr>');
                    } else
                    {
                        $("#manageOpeningBlnListMainMenu").text("").append('<div id="manageOpeningBlnListPanel" class="panel panel-blue" />');
                        $("#manageOpeningBlnListPanel").append('<div id="manageOpeningBlnListHeading" class="panel-heading" />');
                        $("#manageOpeningBlnListHeading").append('<div class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>Manage Opening Balance</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="manageOpeningBalanceColDiv1"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');
                        $("#manageOpeningBlnListPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
                        $("#manageOpeningBalanceColDiv1").click(function () {
                            $("#collapseOne3").toggle();
                            if ($("#manageOpeningBalanceColDiv1 span").hasClass("glyphicon-minus-sign")) {
                                $("#manageOpeningBalanceColDiv1").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
                            } else {
                                $("#manageOpeningBalanceColDiv1").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
                            }
                        });
                        $("#collapseOne3").append('<div id="manageOpeningBlnListBody" class = "panel-body pan" />');
                        $("#manageOpeningBlnListBody").append('<div id="panelRow" class="row" />');
                        $("#manageOpeningBlnListBody").append('<div id="manageOpeningBlnListErrorMsgId" />');
                        $("#manageOpeningBlnListBody").append('<div id="manageOpeningBlnListMainBody" class="table-responsive" />');
                        $("#manageOpeningBlnListMainBody").append('<table id="manageOpeningBlnTable" class="table table-striped table-bordered table-hover" />');
                        $("#manageOpeningBlnTable").append('<thead id="manageOpeningBlnTableHeadId" />');
                        $("#manageOpeningBlnTable").append('<tbody id="manageOpeningBlnTableBodyId" />');
                        $("#manageOpeningBlnTableHeadId").append('<tr><th>Sno</th><th>Ledger Name</th><th>Dr/Cr</th><th>Opening Balance(Amount)</th></tr>');
//                        $("#manageOpeningBlnTableBodyId").append('<tr><td>1</td><td>' + ledgerName + '</td><td><select id="amountTypeSelect"><option>Cr</option><option>Dr</option></select></td><td><input type="text" readonly="readonly" id="openingBalanceAmt" value= ' + parseFloat(openingBalance).toFixed(2) + '></td></td></tr>');
                        $("#manageOpeningBlnTableBodyId").append('<tr><td>1</td><td>' + ledgerName + '</td><td>Cr</td><td>' + parseFloat(openingBalance).toFixed(2) + '</td></td></tr>');
                    }
    
}
