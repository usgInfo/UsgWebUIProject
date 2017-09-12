/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function fdrDetailsMaster(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="fdrDetailsMaster()">Fixed Deposit Details</a>');
    $("#" + divId).text("").append('<div id="fdrDetailsDivId"></div>');
    $("#fdrDetailsDivId").text("").append('<div id="fdrDetailsTabMenu" />');
    $("#fdrDetailsTabMenu").append('<div id="fdrDetailsMainMenu" class="row" />');
    $("#fdrDetailsTabMenu").append('<div id="fdrDetailsListMainMenu" class="row" />');
    $("#fdrDetailsMainMenu").append('<div id="fdrDetailsMainPanel" class="panel panel-blue" />');
    $("#fdrDetailsMainPanel").append('<div id="fdrDetailsMainHeading" class="panel-heading" />');
    $("#fdrDetailsMainHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Fixed Deposit Details Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="fixedDepCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
    $("#fdrDetailsMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#fixedDepCollp").click(function () {
        $("#collapseOne1").toggle();
        if ($("#fixedDepCollp span").hasClass("glyphicon-minus-sign")) {
            $("#fixedDepCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#fixedDepCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne1").append('<div id="fdrDetailsMainBody" class = "panel-body pan" />');
    $("#fdrDetailsMainBody").append('<div id="panelRow" class="form-horizontal" />');
    $("#fdrDetailsMainBody").append('<center><span id="fdrDetailsMessageDiv"></span></center>');
    $("#fdrDetailsMainBody").append('<div id="fdrDetailsBodyDiv" class="row" />');
    $("#fdrDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fundType">Fund Type <span class="require">*</span></label><select class="form-control" name="fundTypeSelect" id="fundTypeSelect"></select><span id="fundTypeErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="voucherNumber">Voucher Number <span class="require">*</span></label><input type="text" class="form-control" id="voucherNumber" placeholder="Voucher Nunber"><span id="voucherNumberErr" class="text-danger"></span></div></div>');
    $("#fdrDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="bankName">Bank Name <span class="require">*</span></label><select class="form-control" name="bankNameSelect" id="bankNameSelect"></select><span id="bankNameErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="voucherNumber">Date <span class="require">*</span></label><input type="text" class="form-control" id="fixedDepositDate" placeholder="MM/DD/YYYY"></div></div>');
    $("#fixedDepositDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd/mm/yy",
        yearRange: '-0:+50',
        minDate: '+0D'
    });
    $("#fdrDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fdrNo">FDR No. <span class="require">*</span></label><input type="text" class="form-control" id="fdrNumber" onkeyup=validatePhone("fdrNumber","fdrNumberErr") placeholder="FDR Number"><span id="fdrNumberErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="amount">Amount <span class="require">*</span></label><input type="text" class="form-control" onkeyup=validatePhone("fdrAmount","fdrAmountErr") id="fdrAmount" placeholder="Amount"><span id="fdrAmountErr" class="text-danger"></span></div></div>');
    $("#fdrDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="periods">Periods (in Days) <span class="require">*</span></label><input type="text" class="form-control" onkeyup=validatePhone("periods","periodsErr") id="periods" placeholder="No of Days"><span id="periodsErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="interest">Rate of Interest (%) <span class="require">*</span></label><input type="text" class="form-control" id="interestRate" onkeyup=validatePhone("interestRate","interestRateErr") placeholder="Intrest Rate"><span id="interestRateErr" class="text-danger"></span></div></div>');
    $("#fdrDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fdrNo">FDR No. <span class="require">*</span></label><select class="form-control" name="statusSelect" id="statusSelect"><option value="0">----Select Status----</option><option>Active</option><option>Inactive</option><option>Mature</option><option>Withdrawl</option></select>'
            + '</div><div class="form-group col-lg-6"><label for="remarks">Remarks </label><textarea class="form-control" rows="2" id="remarks" placeholder="Remarks.."></textarea></div></div>');
    $("#fdrDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="refernce">Reference to FDR <span class="require">*</span></label><input type="text" class="form-control" onkeyup=validatePhone("referenceFDRNumber","referenceFDRNumberErr") id="referenceFDRNumber" placeholder="FDR Number"><span id="referenceFDRNumberErr" class="text-danger"></span></div></div>');
    $("#fdrDetailsBodyDiv").append('<div class="form-group"><center><button onclick=calculateInterest() class="btn btn-success" style="height:40px;width:150px"><strong>Calculate</strong></button></center></div>');
    $("#fdrDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="interestAmount">Interest Amount <span class="require">*</span></label><input type="text" class="form-control" id="interestAmount" placeholder="Interest Amount"><span id="interestAmountErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="maturityAmount">Maturity Amount <span class="require">*</span></label><input type="text" class="form-control" id="maturityAmount" placeholder="Maturity Amount"><span id="maturityAmountErr" class="text-danger"></span></div></div>');
    $("#fdrDetailsBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="maturityDate">Maturity Date <span class="require">*</span></label><input type="text" class="form-control" id="maturityDate" placeholder="MM/DD/YYYY"></div></div>');
    $("#maturityDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd/mm/yy",
        yearRange: '-0:+50',
        minDate: '+0D'
    });
    $("#fdrDetailsBodyDiv").append("<div class='form-group' id='FixedDepositButtonDivId'><center><button id='fdrSaveButton' onclick=saveFixedDeposits() class='btn btn-success' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetButton' onclick=resetFixedDeposit() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
    $("#interestAmount").prop("readonly", true);
    $("#maturityAmount").prop("readonly", true);
    fdrDetailsTable();
    setTimeout(function () {
        fetchAllFundType();
    }, 1000);
    setTimeout(function () {
        bankNameInfo();
    }, 1000);
}

function resetFixedDeposit() {

    $("#fundTypeSelect").val('0');
    $("#voucherNumber").val("");
    $("#bankNameSelect").val('0');
    $("#fixedDepositDate").val("");
    $("#fdrNumber").val("");
    $("#fdrAmount").val("");
    $("#periods").val("");
    $("#interestRate").val("");
    $("#statusSelect").val('0');
    $("#remarks").val("");
    $("#referenceFDRNumber").val("");
    $("#interestAmount").val("");
    $("#maturityAmount").val("");
    $("#maturityDate").val("");
    $("#fdrNumberErr").text("");
    $("#fdrAmountErr").text("");
    $("#periodsErr").text("");
    $("#interestRateErr").text("");
    $("#referenceFDRNumberErr").text("");
    $("#fdrDetailsMessageDiv").text("");
}

function fetchAllFundType() {
    $("#fundTypeSelect").text("").append("<option value='0'>----Select Fund Type----</option>");
    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            for (var i = 0; i < data.length; i++) {
                var subData = data[i];
                $("#fundTypeSelect").append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
            }
        }
    });
}

function bankNameInfo() {
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

function calculateInterest() {
    var principal = $("#fdrAmount").val();
    var ciRate = $("#interestRate").val();
    var ciPeriods = $("#periods").val();
    if (principal == undefined || principal == "" || ciRate == undefined || ciRate == "" || ciPeriods == undefined || ciPeriods == "") {
        displayLargeErrorMessagesInCenterInRed("fdrDetailsMessageDiv", "Please Fill periods,rate of interest and amount");
    } else {
        var numOfDays = ciPeriods / 365;
        var ciAmount = calculateCompoundInterest(principal, ciRate, numOfDays);
        var ciMaturityAmount = (parseFloat(principal) + parseFloat(ciAmount));
        $("#interestAmount").val("").val(ciAmount);
        $("#maturityAmount").val("").val(ciMaturityAmount);
    }


}

function saveFixedDeposits() {

    var fundtypeName = $("#fundTypeSelect").val();
    var voucherNumber = $("#voucherNumber").val();
    var bankName = $("#bankNameSelect").val();
    var date = $("#fixedDepositDate").val();
    var fdrNumber = $("#fdrNumber").val();
    var amount = $("#fdrAmount").val();
    var periods = $("#periods").val();
    var rate = $("#interestRate").val();
    var status = $("#statusSelect").val();
    var remarks = $("#remarks").val();
    var fdrRefNumber = $("#referenceFDRNumber").val();
    var intAmount = $("#interestAmount").val();
    var maturityAmount = $("#maturityAmount").val();
    var maturityDate = $("#maturityDate").val();
    if (fundtypeName == "" || fundtypeName == "undefined" || voucherNumber == "" || voucherNumber == "undefined" || bankName == "" || bankName == "undefined" ||
            date == "" || date == "undefined" || fdrNumber == "" || fdrNumber == "undefined" || amount == "" || amount == "undefined" ||
            periods == "" || periods == "undefined" || rate == "" || rate == "undefined" || status == "" || status == "undefined" || fdrRefNumber == "" || fdrRefNumber == "undefined" || intAmount == "" || intAmount == "undefined" ||
            maturityAmount == "" || maturityAmount == "undefined" || maturityDate == "" || maturityDate == "undefined") {
        displaySmallErrorMessagesInRed("fdrDetailsMessageDiv", "Please Fill * fields" + "");
        return false;
    }

    var fdrJson = {
        fundType: fundtypeName,
        voucherNo: voucherNumber,
        bank: bankName,
        date: date,
        fdrNumber: fdrNumber,
        amount: amount,
        periods: periods,
        rate: rate,
        fdrStatus: status,
        remarks: remarks,
        RefToFdr: fdrRefNumber,
        interestAmount: intAmount,
        maturityAmount: maturityAmount,
        maturityDate: maturityDate
    }

    var userId = getUserSessionElement("userId");
    $.get(server_base_url + "/financial/account/FixedDeposit/Save", {
        fdrJson: JSON.stringify(fdrJson),
        loginuserid: userId
    }).done(function (data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("fdrDetailsMessageDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("fdrDetailsMessageDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("fdrDetailsMessageDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#fundTypeSelect").prop("disabled", true);
            $("#bankNameSelect").prop("disabled", true);
            $("#voucherNumber").prop("readonly", true);
            $("#fixedDepositDate").prop("disabled", true);
            $("#fdrNumber").prop("readonly", true);
            $("#fdrAmount").prop("readonly", true);
            $("#periods").prop("readonly", true);
            $("#interestRate").prop("readonly", true);
            $("#statusSelect").prop("disabled", true);
            $("#referenceFDRNumber").prop("readonly", true);
            $("#remarks").prop("readonly", true);
            $("#interestAmount").prop("readonly", true);
            $("#maturityAmount").prop("readonly", true);
            $("#maturityDate").prop("disabled", true);
            $("#fdrSaveButton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages("fdrDetailsMessageDiv", successMessage, "");
            setTimeout(function () {
                fdrDetailsMaster();
            }, 3000);
        }
    });
}

function fdrDetailsTable() {

    $("#fdrDetailsListMainMenu").text("").append('<div id="fdrDetailsListPanel" class="panel panel-blue" />');
    $("#fdrDetailsListPanel").append('<div id="fdrDetailsListHeading" class="panel-heading" />');
    $("#fdrDetailsListHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Fixed Deposit Details </center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="fixedDeposListCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
    $("#fdrDetailsListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
    $("#fixedDeposListCollp").click(function () {
        $("#collapseOne2").toggle();
        if ($("#fixedDeposListCollp span").hasClass("glyphicon-minus-sign")) {
            $("#fixedDeposListCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#fixedDeposListCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append('<div id="fdrDetailsListBody" class = "panel-body pan" />');
    $("#fdrDetailsListBody").append('<div id="panelRow" class="row" />');
    $("#fdrDetailsListBody").append('<div id="fdrDetailsListErrorMsgId" />');
    $("#fdrDetailsListBody").append('<div id="fdrDetailsListMainBody" class="table-responsive" />');
    $("#fdrDetailsListMainBody").append('<table id="fdrDetailsTable" class="table table-bordered" />');
    $("#fdrDetailsTable").append('<thead id="fdrDetailsTableHeadId" />');
    $("#fdrDetailsTable").append('<tbody id="fdrDetailsTableBodyId" />');
    $("#fdrDetailsTableHeadId").append('<tr><th>Sno</th><th>Fund Type</th><th>Voucher No.</th><th>Bank Name</th><th>FDR Number</th><th>Amount</th><th>Periods(In days)</th><th>Rate(%)</th><th>Interest Amount</th><th>Maturity Amount</th><th><center>Edit</center</th><th><center>Delete</center></th></tr>');
    $.post(server_base_url + "/financial/account/FixedDeposit/ViewList", {
    }).done(function (data) {
        if (data.statuscode == NoData) {
            displaySmallErrorMessagesInRed("fdrDetailsListErrorMsgId", NoDataFoundMessage + "");
        }
        if (data == fail) {
            displaySmallErrorMessagesInRed("fdrDetailsListErrorMsgId", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("fdrDetailsListErrorMsgId", unauthorizedMessage + "");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("fdrDetailsListErrorMsgId", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessagesInRed("fdrDetailsListErrorMsgId", "No User available" + "");
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
                var fundType = subData.fundTypeName;
                if (fundType == "undefined" || fundType == undefined) {
                    fundType = "";
                }
                $("#fdrDetailsTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + fundType + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.voucherNo + "</td>"
                        + "<td style='cursor:pointer;'>" + bank + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.fdrNumber + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.amount + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.periods + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.rate + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.interestAmount + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.maturityAmount + "</td>"
                        + "<td style='cursor:pointer;' onclick=editFixedDeposits('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>"
                        + "<td style='cursor:pointer;' onclick=deletePopUp('deleteFixedDeposits','fdrDetailsTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td></tr>");
            }
            $("#fdrDetailsTable").dataTable();
        } else {
            displaySmallErrorMessagesInRed("fdrDetailsListErrorMsgId", NoDataFoundMessage + "");
        }
    });
}

function editFixedDeposits(fixedDepositData, fixedDepositId) {
    $('select[name^="fundTypeSel"]').focus();
    if (fixedDepositData == null || fixedDepositData == "" || fixedDepositData == undefined) {
        return false;
    }
    $("#fdrDetailsTableBodyId tr").css("background-color", "white");
    $("#fdrDetailsTableBodyId tr" + "#" + fixedDepositId).css("background-color", "rgba(10, 129, 156, 0.3)");
    fixedDepositData = JSON.parse(decodeURI(fixedDepositData));
    $("#fundTypeSelect").val(fixedDepositData.fundType);
    $("#voucherNumber").val(fixedDepositData.voucherNo);
    $("#bankNameSelect").val(fixedDepositData.bank);
    $("#fixedDepositDate").val(fixedDepositData.date);
    $("#fdrNumber").val(fixedDepositData.fdrNumber);
    $("#fdrAmount").val(fixedDepositData.amount);
    $("#periods").val(fixedDepositData.periods);
    $("#interestRate").val(fixedDepositData.rate);
    $("#statusSelect").val(fixedDepositData.fdrStatus);
    $("#remarks").val(fixedDepositData.remarks);
    $("#referenceFDRNumber").val(fixedDepositData.RefToFdr);
    $("#interestAmount").val(fixedDepositData.interestAmount);
    $("#maturityAmount").val(fixedDepositData.maturityAmount);
    $("#maturityDate").val(fixedDepositData.maturityDate);
    $("#FixedDepositButtonDivId").text("").append("<center><button id='updateButton' onclick=updateFixedDepositsInfo('" + fixedDepositId + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetUpdateButton' onclick='fdrDetailsMaster()' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");
}

function updateFixedDepositsInfo(fixedDepositId) {

    var fundtypeName = $("#fundTypeSelect").val();
    var voucherNumber = $("#voucherNumber").val();
    var bankName = $("#bankNameSelect").val();
    var date = $("#fixedDepositDate").val();
    var fdrNumber = $("#fdrNumber").val();
    var amount = $("#fdrAmount").val();
    var periods = $("#periods").val();
    var rate = $("#interestRate").val();
    var status = $("#statusSelect").val();
    var remarks = $("#remarks").val();
    var fdrRefNumber = $("#referenceFDRNumber").val();
    var intAmount = $("#interestAmount").val();
    var maturityAmount = $("#maturityAmount").val();
    var maturityDate = $("#maturityDate").val();
    if (fundtypeName == "" || fundtypeName == "undefined" || voucherNumber == "" || voucherNumber == "undefined" || bankName == "" || bankName == "undefined" ||
            date == "" || date == "undefined" || fdrNumber == "" || fdrNumber == "undefined" || amount == "" || amount == "undefined" ||
            periods == "" || periods == "undefined" || rate == "" || rate == "undefined" || status == "" || status == "undefined" || fdrRefNumber == "" || fdrRefNumber == "undefined" || intAmount == "" || intAmount == "undefined" ||
            maturityAmount == "" || maturityAmount == "undefined" || maturityDate == "" || maturityDate == "undefined") {
        displaySmallErrorMessagesInRed("fdrDetailsMessageDiv", "Please Fill * fields" + "");
        return false;
    }

    var fdrUpdateJson = {
        fundType: fundtypeName,
        voucherNo: voucherNumber,
        bank: bankName,
        date: date,
        fdrNumber: fdrNumber,
        amount: amount,
        periods: periods,
        rate: rate,
        fdrStatus: status,
        remarks: remarks,
        RefToFdr: fdrRefNumber,
        interestAmount: intAmount,
        maturityAmount: maturityAmount,
        maturityDate: maturityDate
    }
    var loginId = getUserSessionElement("userId");
    $.get(server_base_url + "/financial/account/FixedDeposit/Update", {
        fdrUpdateJson: JSON.stringify(fdrUpdateJson),
        userid: loginId,
        fixedDepositsId: fixedDepositId
    }).done(function (data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("fdrDetailsMessageDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("fdrDetailsMessageDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("fdrDetailsMessageDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#fundTypeSelect").prop("disabled", true);
            $("#bankNameSelect").prop("disabled", true);
            $("#voucherNumber").prop("readonly", true);
            $("#fixedDepositDate").prop("disabled", true);
            $("#fdrNumber").prop("readonly", true);
            $("#fdrAmount").prop("readonly", true);
            $("#periods").prop("readonly", true);
            $("#interestRate").prop("readonly", true);
            $("#statusSelect").prop("disabled", true);
            $("#referenceFDRNumber").prop("readonly", true);
            $("#remarks").prop("readonly", true);
            $("#interestAmount").prop("readonly", true);
            $("#maturityAmount").prop("readonly", true);
            $("#maturityDate").prop("disabled", true);
            $("#fdrSaveButton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages("fdrDetailsMessageDiv", updateMessage, "");
            setTimeout(function () {
                fdrDetailsMaster();
            }, 3000);
        }
    });
}

function deleteFixedDeposits(fixedDepositId) {
    var currentLoginUser = getUserSessionElement("userId");
    $.get(server_base_url + "/financial/account/FixedService/Delete", {
        currentuser: currentLoginUser,
        fixedDepositId: fixedDepositId
    }).done(function (data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("fdrDetailsListErrorMsgId", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("fdrDetailsListErrorMsgId", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("fdrDetailsListErrorMsgId", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            displaySuccessMessages("fdrDetailsListErrorMsgId", deleteMessage, "");
            setTimeout(function () {
                fdrDetailsTable();
            }, 3000);
        }
    });
}
