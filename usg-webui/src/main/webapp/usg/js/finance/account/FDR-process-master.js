/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function fdrProcessMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="fdrProcessMaster()">FDR Process</a>');
    $("#" + divId).text("").append('<div id="fdrProcessDivId"></div>');
    $("#fdrProcessDivId").text("").append('<div id="fdrProcessTabMenu" />');
    $("#fdrProcessTabMenu").append('<div id="fdrProcessMainMenu" class="row" />');
    $("#fdrProcessTabMenu").append('<div id="fdrProcessListMainMenu" class="row" />');
    if (checkUserPrivelege(pvCreateFDRProcess)) {
        $("#fdrProcessMainMenu").append('<div id="fdrProcessMainPanel" class="panel panel-blue" />');
        $("#fdrProcessMainPanel").append('<div id="fdrProcessMainHeading" class="panel-heading" />');
        $("#fdrProcessMainHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>FDR Process Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="fdrProcessCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
        $("#fdrProcessMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#fdrProcessCollp").click(function () {
            $("#collapseOne1").toggle();
            if ($("#fdrProcessCollp span").hasClass("glyphicon-minus-sign")) {
                $("#fdrProcessCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#fdrProcessCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="fdrProcessMainBody" class = "panel-body pan" />');
        $("#fdrProcessMainBody").append('<div id="panelRow" class="form-horizontal" />');
        $("#fdrProcessMainBody").append('<center><span id="fdrProcessMessageDiv"></span></center>');
        $("#fdrProcessMainBody").append('<div id="fdrProcessBodyDiv" class="row" />');
//    $("#fdrProcessBodyDiv").append('');
        $("#fdrProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="budgetNatureName">Fixed Deposit Type</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="radio" id="newId" name="depositType" value="New" />&nbsp;&nbsp;'
                + '<label for="New">New</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="radio" id="reinvestmentId" name="depositType" value="ReInvestment" />&nbsp;&nbsp;<label for="ReInvestment">Re Investment</label></div>'
                + '<div class="form-group col-lg-6"><label for="fixedDepositNature">Fixed Deposit Nature</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="radio" id="investmentId" name="depositNature" value="Investment" />&nbsp;&nbsp;'
                + '<label for="Investment">Investment</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="radio" id="securityId" name="depositNature" value="Security" />&nbsp;&nbsp;<label for="Security">Security</label></div></div>');
        $("#fdrProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="underGroup">Mode of Payment <span class="require">*</span></label><select class="form-control" name="paymentMode" id="paymentModeSelect"><option value="0">----Select Mode of Payment----</option>'
                + '<option>Cash</option>'
                + '<option>Debit Card</option>'
                + '<option>Cheque</option>'
                + '<option>Credit Card</option>'
                + '<option>NetBanking</option>'
                + '<option>ON-ACC</option>'
                + '<option>Bank Draft</option>'
                + '<option>Postal Order</option>'
                + '<option>Money Order</option>'
                + '<option>Bill of Exchange</option>'
                + '<option>Telegraphic Transfer</option>'
                + '<option>Bank transfers</option>'
                + '</select><span id="ledgerNameErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="bankName">Bank Name <span class="require">*</span></label><select class="form-control" id="bankNameSelect"></select></div></div>');
        $("#fdrProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fdDate">FD Date <span class="require">*</span></label><input type="text" class="form-control" id="fdDate" placeholder="DD/MM/YYYY"><span id="fdDateErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="fixedDepositNo">Fixed Deposit Number <span class="require">*</span></label><input type="text" class="form-control" id="fixedDepositNumber" onkeyup=validatePhone("fixedDepositNumber","fdNumberErr") placeholder="Fixed Deposit No"><span id="fdNumberErr" class="text-danger"></span></div></div>');
        $("#fdDate").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy",
            yearRange: '-0:+50',
            minDate: '+0D'
        });
        $("#fdrProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fdAmount">Amount <span class="require">*</span></label><input type="text" class="form-control" id="fdAmount" onkeyup=validatePhone("fdAmount","fdAmountErr") placeholder="FD Amount"><span id="fdAmountErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="fdPeriod">Period <span class="require">*</span></label><input type="text" class="form-control" onkeyup=validatePhone("fdPeriod","fdPeriodErr") id="fdPeriod" placeholder="In Days "><span id="fdPeriodErr" class="text-danger"></span></div></div>');
//        $("#fdrProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fdRate">Rate of Interest <span class="require">*</span></label><input type="text" class="form-control" onkeyup=validatePhone("fdRate","fdRateErr") id="fdRate"><span id="fdRateErr" class="text-danger"></span>'
//                + '</div><div class="form-group col-lg-6"><center><button onclick=calculateFDRInterest() class="btn btn-success" style="height:40px;width:300px;"><strong>Calculate Maturity Amount</strong></button></center></div></div>');
//        $("#fdrProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fdInterest">Interest <span class="require">*</span></label><input type="text" class="form-control" id="fdInterestAmount" placeholder="Interest"><span id="fdInterestAmountErr" class="text-danger"></span>'
//                + '</div><div class="form-group col-lg-6"><label for="maturityAmount">Maturity Amount <span class="require">*</span></label><input type="text" class="form-control" id="fdMaturityAmount" placeholder="Maturity Amount"><span id="fdMaturityAmountErr" class="text-danger"></span></div></div>');
        $("#fdrProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="enCashmentDate">Encashment Date <span class="require">*</span></label><input type="text" class="form-control" id="encashmentDate" placeholder="DD/MM/YYYY"><span id="encashmentDateErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="maturityAmount">Maturity Amount <span class="require">*</span></label><input type="text" class="form-control" id="fdMaturityAmount" onkeyup=validatePhone("fdMaturityAmount","fdMaturityAmountErr") placeholder="Maturity Amount"><span id="fdMaturityAmountErr" class="text-danger"></span></div></div>');
        $("#encashmentDate").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy",
            yearRange: '-0:+50',
            minDate: '+0D'
        });
//        $("#fdrProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="maturityDate">Maturity Date <span class="require">*</span> <span id="maturityDateErr"></span></label><input type="text" class="form-control" id="fdMaturityDate" placeholder="DD/MM/YYYY"><span id="fdMaturityDateErr" class="text-danger"></span>'
//                + '</div><div class="form-group col-lg-6"><label for="fdDetails">Remarks </label><textarea class="form-control" rows="2" id="fdDetials" placeholder="Please enter Remarks..."></textarea></div></div>');
        $("#fdrProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="maturityDate">Maturity Date <span class="require">*</span> <span id="maturityDateErr"></span></label><input type="text" class="form-control" id="fdMaturityDate" placeholder="DD/MM/YYYY"><span id="fdMaturityDateErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="encashmentAmount">Encashment Amount <span class="require">*</span></label><input type="text" class="form-control" id="fdEncashmentAmount" onkeyup=validatePhone("fdEncashmentAmount","fdEncashmentAmountErr") placeholder="Encashment Amount"><span id="fdEncashmentAmountErr" class="text-danger"></span></div></div>');
        $("#fdrProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fdDetails">Remarks </label><textarea class="form-control" rows="2" id="fdDetials" placeholder="Please enter Remarks..."></textarea></div></div>');
        $("#fdMaturityDate").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy",
            yearRange: '-0:+50',
            minDate: '+0D'
        });
        $("#fdrProcessBodyDiv").append("<div class='form-group' id='fdrProcessButtonDivId'><center><button onclick=createFdrProcess() id='saveButton' class='btn btn-success' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetFDRProcess() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
//        $("#fdInterestAmount").prop("readonly", true);
//        $("#fdMaturityAmount").prop("readonly", true);

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

    }
    fdrProcessTable();
    setTimeout(function () {
        bankInfo();
    }, 300);
}

function bankInfo() {
    $("#bankNameSelect").text("").append("<option value='0'>----Select Bank Name----</option>");
    $.get(server_base_url + "/financial/account/BankName/ViewList", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
//            data = JSON.parse(data);
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#bankNameSelect").append("<option value='" + subData._id.$oid + "'>" + subData.bankName + "</option>");
            }
        }
    });
}

//function calculateFDRInterest() {
//    var principal = $("#fdAmount").val();
//    var rate = $("#fdRate").val();
//    var periods = $("#fdPeriod").val();
//    if (principal == undefined || principal == "" || rate == undefined || rate == "" || periods == undefined || periods == "") {
//        displayLargeErrorMessagesInCenterInRed("fdrProcessMessageDiv", "Please Fill amount,period and rate of interest");
//    } else {
//        var numOfDays = periods / 365;
//        var fdrAmounts = calculateCompoundInterest(principal, rate, numOfDays);
//        var maturityAmount = (parseFloat(principal) + parseFloat(fdrAmounts));
//        $("#fdInterestAmount").val("").val(fdrAmounts);
//        $("#fdMaturityAmount").val("").val(maturityAmount);
//    }
//
//
//}

function calculateCompoundInterest(PresentAmount, InterestRate, NumberOfYears) {
    var timescompound = 1;
    var AnnualInterestRate = (InterestRate / 100) / timescompound;
    var Years = NumberOfYears;
    var ciPeriods = timescompound * Years;
    var Prin = PresentAmount;
//    var MonthPayment = Math.floor((Prin) * (Math.pow((1 + AnnualInterestRate), (Periods))) * 100) / 100;
    var DayPayment = (Prin * (Math.pow((1 + AnnualInterestRate), ciPeriods) - 1));
    var cInterestAmount = DayPayment;
    cInterestAmount = cInterestAmount.toFixed(4);
    return cInterestAmount;
}

function resetFDRProcess() {

    $("#newId").removeAttr('checked');
    $("#reinvestmentId").removeAttr('checked');
    $("#securityId").removeAttr('checked');
    $("#investmentId").removeAttr('checked');
    $("#paymentModeSelect").val('0');
    $("#fdDate").val("");
    $("#fixedDepositNumber").val("");
    $("#fdAmount").val("");
    $("#fdPeriod").val("");
    $("#fdRate").val("");
    $("#fdInterestAmount").val("");
    $("#fdMaturityAmount").val("");
    $("#fdEncashmentAmount").val("");
    $("#fdMaturityDate").val("");
    $("#fdDetials").val("");
    $("#fdDateErr").text("");
    $("#fdNumberErr").text("");
    $("#fdMaturityAmountErr").text("");
    $("#fdEncashmentAmountErr").text("");
    $("#fdAmountErr").text("");
    $("#fdPeriodErr").text("");
    $("#fdRateErr").text("");
    $("#fdrProcessMessageDiv").text("");
    $("#maturityDateErr").text("");
}

function fdrProcessTable() {
    if (checkUserPrivelege(pvViewFDRProcess)) {
        $("#fdrProcessListMainMenu").text("").append('<div id="fdrProcessListPanel" class="panel panel-blue" />');
        $("#fdrProcessListPanel").append('<div id="fdrProcessListHeading" class="panel-heading" />');
        $("#fdrProcessListHeading").append('<class="panel-title" data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of FDR Process</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="fdrProcessListCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
        $("#fdrProcessListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#fdrProcessListCollp").click(function () {
            $("#collapseOne2").toggle();
            if ($("#fdrProcessListCollp span").hasClass("glyphicon-minus-sign")) {
                $("#fdrProcessListCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#fdrProcessListCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append('<div id="fdrProcessListBody" class = "panel-body pan" />');
        $("#fdrProcessListBody").append('<div id="panelRow" class="row" />');
        $("#fdrProcessListBody").append('<div id="fdrProcessListErrorMsgId" />');
        $("#fdrProcessListBody").append('<div id="fdrProcessListMainBody" class="table-responsive" />');
        $("#fdrProcessListMainBody").append('<table id="fdrProcessTable" class="table table-bordered" />');
        $("#fdrProcessTable").append('<thead id="fdrProcessTableHeadId" />');
        $("#fdrProcessTable").append('<tbody id="fdrProcessTableBodyId" />');
        $("#fdrProcessTableHeadId").append('<tr id="fdrProcessTableHeadIdTrHead"><th>Sno</th><th>Payment Mode</th><th>Bank Name</th><th>FDR Number</th><th>Amount</th><th>Encashment Date</th><th>Periods</th><th>Maturity Amount</th><th>Encashment Amount</th><th>FD Date</th><th>Maturity Date</th>');
        if (checkUserPrivelege(pvUpdateFDRProcess)) {
            $("#fdrProcessTableHeadIdTrHead").append('<th><center>Edit</center</th>');
        }
        if (checkUserPrivelege(pvDeleteFDRProcess)) {
            $("#fdrProcessTableHeadIdTrHead").append('<th><center>Delete</center></th>');
        }
        $.post(server_base_url + "/financial/account/FDRProcess/ViewList", {
        }).done(function (data) {
            if (data.statuscode == NoData) {
                displaySmallErrorMessagesInRed("fdrProcessListErrorMsgId", NoDataFoundMessage + "");
            }
            if (data == fail) {
                displaySmallErrorMessagesInRed("fdrProcessListErrorMsgId", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("fdrProcessListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("fdrProcessListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("fdrProcessListErrorMsgId", "No User available" + "");
            } else if (data != null) {
                var sno = 0;
                var mainData = data.result;
                for (var i = mainData.length - 1; i >= 0; i--) {
                    sno++;
                    var subData = mainData[i];
                    var bank = subData.bankName;
                    if (bank == "undefined" || bank == undefined) {
                        bank = "";
                    }
                    var encashmentDate = subData.fdEncashmentDate;
                    if (encashmentDate == "undefined" || encashmentDate == undefined) {
                        encashmentDate = "";
                    }
                    $("#fdrProcessTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.paymentMode + "</td>"
                            + "<td style='cursor:pointer;'>" + bank + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.fdNumber + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.fdAmount + "</td>"
                            + "<td style='cursor:pointer;'>" + encashmentDate + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.fdPeriod + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.fdMaturityAmount + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.fdEncashmentAmount + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.fdDate + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.fdMaturityDate + "</td>");
                    if (checkUserPrivelege(pvUpdateFDRProcess)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=editFDRProcess('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>");
                    }
                    if (checkUserPrivelege(pvDeleteFDRProcess)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=onclick=deletePopUp('deleteFDRProcess','fdrProcessTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");
                    }
                }
                $("#fdrProcessTable").dataTable();
            } else {
                displaySmallErrorMessagesInRed("fdrProcessListErrorMsgId", NoDataFoundMessage + "");
            }
        });
    }
}

function editFDRProcess(fdrProcessData, fdrProcessId) {
    $('select[name^="paymentMode"]').focus();
    if (fdrProcessData == null || fdrProcessData == "" || fdrProcessData == undefined) {
        return false;
    }
    $("#fdrProcessTableBodyId tr").css("background-color", "white");
    $("#fdrProcessTableBodyId tr" + "#" + fdrProcessId).css("background-color", "rgba(10, 129, 156, 0.3)");
    fdrProcessData = JSON.parse(decodeURI(fdrProcessData));
    if (fdrProcessData.fdType != null && fdrProcessData.fdType != "" && fdrProcessData.fdType != undefined && fdrProcessData.fdType.length > 0) {
        if (fdrProcessData.fdType == 'New') {
            $("#newId").attr('checked', true);
        } else if (fdrProcessData.fdType == 'ReInvestment') {
            $("#reinvestmentId").attr('checked', true);
        }
    }
    if (fdrProcessData.fdNature != null && fdrProcessData.fdNature != "" && fdrProcessData.fdNature != undefined && fdrProcessData.fdNature.length > 0) {
        if (fdrProcessData.fdNature == 'Investment') {
            $("#investmentId").attr('checked', true);
        } else if (fdrProcessData.fdNature == 'Security') {
            $("#securityId").attr('checked', true);
        }
    }

    $("#paymentModeSelect").val(fdrProcessData.paymentMode);
    $("#bankNameSelect").val(fdrProcessData.bank);
    $("#fdDate").val(fdrProcessData.fdDate);
    $("#fdMaturityDate").val(fdrProcessData.fdMaturityDate);
    $("#fixedDepositNumber").val(fdrProcessData.fdNumber);
    $("#fdAmount").val(fdrProcessData.fdAmount);
    $("#fdPeriod").val(fdrProcessData.fdPeriod);
    $("#encashmentDate").val(fdrProcessData.fdEncashmentDate);

    $("#fdMaturityAmount").val(fdrProcessData.fdMaturityAmount);
    $("#fdEncashmentAmount").val(fdrProcessData.fdEncashmentAmount);
    $("#fdDetials").val(fdrProcessData.fdRemarks);
    $("#fdrProcessButtonDivId").text("").append("<center><button id='updateButton' onclick=updateFDRProcessInfo('" + fdrProcessId + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetUpdateButton' onclick='fdrProcessMaster()' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");
}

function createFdrProcess() {

    if (checkUserPrivelege(pvCreateFDRProcess)) {
        var fixedDeposit = $("input[name='depositType']:checked").val();
        var fixedDepositNature = $("input[name='depositNature']:checked").val();
        var fdPaymentMode = $("#paymentModeSelect").val();
        var fdBank = $("#bankNameSelect").val();
        var fdDate = $("#fdDate").val();
        var fdNumber = $("#fixedDepositNumber").val();
        var fdAmount = $("#fdAmount").val();
        var fdPeriod = $("#fdPeriod").val();
//        var fdRate = $("#fdRate").val();
//        var fdInterestAmount = $("#fdInterestAmount").val();
        var fdMaturityAmount = $("#fdMaturityAmount").val();
        var fdEncashmentAmount = $("#fdEncashmentAmount").val();
        var fdMaturityDate = $("#fdMaturityDate").val();
        var encashmentDate = $("#encashmentDate").val();
        var fdRemarks = $("#fdDetials").val();
        var result = 1;
        var days = checkFromDateAndToDateFDRMaster();
        var mAmountAndeAmountDiff = checkMatAmountAndEncAmount();
        if (fixedDeposit == "" || fixedDeposit == "undefined" || fixedDepositNature == "" || fixedDepositNature == "undefined" || fdPaymentMode == "" || fdPaymentMode == "undefined" ||
                fdBank == "" || fdBank == "undefined" || fdDate == "" || fdDate == "undefined" || fdNumber == "" || fdNumber == "undefined" ||
                fdAmount == "" || fdAmount == "undefined" || fdPeriod == "" || fdPeriod == "undefined" || fdMaturityAmount == "" || fdMaturityAmount == "undefined" || fdMaturityDate == "" || fdMaturityDate == "undefined" || encashmentDate == "" || encashmentDate == "undefined" || fdEncashmentAmount == "" || fdEncashmentAmount == "undefined") {
            displaySmallErrorMessagesInRed("fdrProcessMessageDiv", "Please Fill * fields" + "");
            return false;
        }
        
//    if (compareTwoDates("fdDate", "fdMaturityDate") === 1) {
//        return;
//    }

        else {
            if (days < 0) {
                $("#fdMaturityDate").focus();
                displaySmallErrorMessagesInRed("maturityDateErr", "Maturity Date should be greater than or equal to FD Date ");
                result = 0;
            } 
            else if(mAmountAndeAmountDiff < 0)
            {
                $("#fdEncashmentAmount").focus();
                displaySmallErrorMessagesInRed("fdEncashmentAmountErr", "Encashment Amount should be less than or equal to Maturity Amount ");
                result = 0;
            }else {
                $("#maturityDateErr").text("");
                $("#fdEncashmentAmountErr").text("");
                var fdJson = {
                    fdType: fixedDeposit,
                    fdNature: fixedDepositNature,
                    paymentMode: fdPaymentMode,
                    bank: fdBank,
                    fdDate: fdDate,
                    fdNumber: fdNumber,
                    fdAmount: fdAmount,
                    fdPeriod: fdPeriod,
                    fdEncashmentDate: encashmentDate,
                    fdMaturityAmount: fdMaturityAmount,
                    fdEncashmentAmount: fdEncashmentAmount,
                    fdMaturityDate: fdMaturityDate,
                    fdRemarks: fdRemarks

                }

                var userId = getUserSessionElement("userId");
                $.get(server_base_url + "/financial/account/FDRProcess/Save", {
                    fdrJson: JSON.stringify(fdJson),
                    loginuserid: userId
                }).done(function (data) {
                    if (data.statuscode == fail) {
                        displaySmallErrorMessagesInRed("fdrProcessMessageDiv", failMessage + "");
                    } else if (data.statuscode == unauthorized) {
                        displaySmallErrorMessagesInRed("fdrProcessMessageDiv", unauthorizedMessage + "");
                    } else if (data.statuscode == statusException) {
                        displaySmallErrorMessagesInRed("fdrProcessMessageDiv", statusExceptionMessage + "");
                    } else if (data.statuscode == invalidSession) {
                        callSessionTimeout();
                    } else if (data != null) {
                        $("input[type=radio]").attr('disabled', true);
                        $("#paymentModeSelect").prop("disabled", true);
                        $("#bankNameSelect").prop("disabled", true);
                        $("#fdDate").prop("disabled", true);
                        $("#encashmentDate").prop("disabled", true);
                        $("#fdMaturityDate").prop("disabled", true);
                        $("#fixedDepositNumber").prop("readonly", true);
                        $("#fdAmount").prop("readonly", true);
                        $("#fdPeriod").prop("readonly", true);
                        $("#fdMaturityAmount").prop("readonly", true);
                        $("#fdEncashmentAmount").prop("readonly", true);
                        $("#fdDetials").prop("readonly", true);
                        $("#saveButton").attr('disabled', true);
                        $("#resetButton").attr('disabled', true);
                        displaySuccessMessages("fdrProcessMessageDiv", successMessage, "");
                        setTimeout(function () {
                            fdrProcessMaster();
                        }, 3000);
                    }
                });
            }
        }
    }
}

function updateFDRProcessInfo(fdrProcessId) {

    if (checkUserPrivelege(pvUpdateFDRProcess)) {
        var fixedDeposit = $("input[name='depositType']:checked").val();
        var fixedDepositNature = $("input[name='depositNature']:checked").val();
        var fdPaymentMode = $("#paymentModeSelect").val();
        var fdBank = $("#bankNameSelect").val();
        var fdDate = $("#fdDate").val();
        var fdNumber = $("#fixedDepositNumber").val();
        var fdAmount = $("#fdAmount").val();
        var fdPeriod = $("#fdPeriod").val();
        var fdEncashmentDate = $("#encashmentDate").val();
        var fdMaturityAmount = $("#fdMaturityAmount").val();
        var fdEncashmentAmount = $("#fdEncashmentAmount").val();
        var fdMaturityDate = $("#fdMaturityDate").val();
        var fdRemarks = $("#fdDetials").val();
        var mAmountAndeAmountDiff = checkMatAmountAndEncAmount();
        var fdDateArr = fdDate.split("/");
        var fdMatDateArr = fdMaturityDate.split("/");
        var fdDate1 = new Date(fdDateArr[2], fdDateArr[1] - 1, fdDateArr[0]);
        var fdMaturityDate1 = new Date(fdMatDateArr[2], fdMatDateArr[1] - 1, fdMatDateArr[0]);
        if (fdDate1 < fdMaturityDate1) {
            $("#fdMaturityDate").focus();
            displaySmallErrorMessagesInRed("maturityDateErr", "Maturity Date should be greater than or equal to FD Date ");
        }

        if (fixedDeposit == "" || fixedDeposit == "undefined" || fixedDepositNature == "" || fixedDepositNature == "undefined" || fdPaymentMode == "" || fdPaymentMode == "undefined" ||
                fdBank == "" || fdBank == "undefined" || fdDate == "" || fdDate == "undefined" || fdNumber == "" || fdNumber == "undefined" ||
                fdAmount == "" || fdAmount == "undefined" || fdPeriod == "" || fdPeriod == "undefined" || fdEncashmentDate == "" || fdEncashmentDate == "undefined" || fdMaturityAmount == "" || fdMaturityAmount == "undefined" || fdMaturityDate == "" || fdMaturityDate == "undefined" || fdEncashmentAmount == "" || fdEncashmentAmount == "undefined") {
            displaySmallErrorMessagesInRed("fdrProcessMessageDiv", "Please Fill * fields" + "");
            return false;
        } else {
            if (fdDate1 > fdMaturityDate1) {
                $("#fdMaturityDate").focus();
                displaySmallErrorMessagesInRed("maturityDateErr", "Maturity Date should be greater than or equal to FD Date ");
                return;
            } 
            else if(mAmountAndeAmountDiff < 0)
            {
                $("#fdEncashmentAmount").focus();
                displaySmallErrorMessagesInRed("fdEncashmentAmountErr", "Encashment Amount should be less than or equal to Maturity Amount ");
                return false;
            }
            
            else {
                $("#maturityDateErr").text("");
                $("#fdEncashmentAmountErr").text("");

                var fdUpdateJson = {
                    fdType: fixedDeposit,
                    fdNature: fixedDepositNature,
                    paymentMode: fdPaymentMode,
                    bank: fdBank,
                    fdDate: fdDate,
                    fdNumber: fdNumber,
                    fdAmount: fdAmount,
                    fdPeriod: fdPeriod,
                    fdEncashmentDate: fdEncashmentDate,
                    fdMaturityAmount: fdMaturityAmount,
                    fdEncashmentAmount: fdEncashmentAmount,
                    fdMaturityDate: fdMaturityDate,
                    fdRemarks: fdRemarks

                }

                var userId = getUserSessionElement("userId");
                $.get(server_base_url + "/financial/account/FDRProcess/Update", {
                    fdUpdateJson: JSON.stringify(fdUpdateJson),
                    userid: userId,
                    fdrProcessId: fdrProcessId
                }).done(function (data) {
                    if (data.statuscode == fail) {
                        displaySmallErrorMessagesInRed("fdrProcessMessageDiv", failMessage + "");
                    } else if (data.statuscode == unauthorized) {
                        displaySmallErrorMessagesInRed("fdrProcessMessageDiv", unauthorizedMessage + "");
                    } else if (data.statuscode == statusException) {
                        displaySmallErrorMessagesInRed("fdrProcessMessageDiv", statusExceptionMessage + "");
                    } else if (data.statuscode == invalidSession) {
                        callSessionTimeout();
                    } else if (data != null) {
                        $("input[type=radio]").attr('disabled', true);
                        $("#paymentModeSelect").prop("disabled", true);
                        $("#bankNameSelect").prop("disabled", true);
                        $("#fdDate").prop("disabled", true);
                        $("#encashmentDate").prop("readonly", true);
                        $("#fdMaturityDate").prop("readonly", true);
                        $("#fixedDepositNumber").prop("readonly", true);
                        $("#fdAmount").prop("readonly", true);
                        $("#fdPeriod").prop("readonly", true);
                        $("#fdMaturityAmount").prop("readonly", true);
                        $("#fdEncashmentAmount").prop("readonly", true);
                        $("#fdDetials").prop("readonly", true);
                        $("#updateButton").attr('disabled', true);
                        $("#resetButton").attr('disabled', true);
                        displaySuccessMessages("fdrProcessMessageDiv", updateMessage, "");
                        setTimeout(function () {
                            fdrProcessMaster();
                        }, 3000);
                    }
                });
            }
        }
    }
}

function deleteFDRProcess(fdrProcessId) {
    if (checkUserPrivelege(pvDeleteFDRProcess)) {
        var currentLoginUser = getUserSessionElement("userId");
        $.get(server_base_url + "/financial/account/FDRProcess/Delete", {
            currentuser: currentLoginUser,
            fdrProcessId: fdrProcessId
        }).done(function (data) {
            if (data.statuscode == fail) {
                displaySmallErrorMessagesInRed("fdrProcessListErrorMsgId", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("fdrProcessListErrorMsgId", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displaySmallErrorMessagesInRed("fdrProcessListErrorMsgId", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {
                displaySuccessMessages("fdrProcessListErrorMsgId", deleteMessage, "");
                setTimeout(function () {
                    fdrProcessTable();
                }, 3000);
            }
        });
    }
}
function checkFromDateAndToDateFDRMaster() {
    var fDate = $("#fdDate").datepicker("getDate");
    var tDate = $("#fdMaturityDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}
function checkMatAmountAndEncAmount() {
    var mAmount = $("#fdMaturityAmount").val();
    var eAmount = $("#fdEncashmentAmount").val();
    var mAmountAndeAmountDiff = mAmount - eAmount;
    return mAmountAndeAmountDiff;
}
function checkFDRDateAndMaturityDateForFDRMaster() {

    var fDate = $("#fdDate").datepicker("getDate");
    var tDate = $("#fdMaturityDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var updateDays = diff / 1000 / 60 / 60 / 24;
    return updateDays;
}
//function checkFDRDateAndMaturityDateForFDRMaster(date1, date2) {
//    alert(date1);
//    alert(date2);
//    // The number of milliseconds in one day
//    var ONE_DAY = 1000 * 60 * 60 * 24
//
//    // Convert both dates to milliseconds
//    var date1_ms = date1.getTime()
//    var date2_ms = date2.getTime()
//alert()
//    // Calculate the difference in milliseconds
//    var difference_ms = Math.abs(date1_ms - date2_ms)
//    alert(Math.round(difference_ms / ONE_DAY));
//    // Convert back to days and return
//    return Math.round(difference_ms / ONE_DAY)
//
//}