/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function bankReconcilationEntryCreation(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="bankReconcilationEntry()">Bank Reconcilation Entry</a>');
    $("#" + divId).text("").append('<div id="bankReconciliationEntryDivId"></div>');
    $("#bankReconciliationEntryDivId").text("").append('<div id="bankReconciliationEntryTabMenu" />');
    $("#bankReconciliationEntryTabMenu").append('<div id="bankReconciliationEntryMainMenu" class="row" />');
    $("#bankReconciliationEntryTabMenu").append('<div id="bankReconciliationEntryListMainMenu" class="row" />');
    if (checkUserPrivelege(pvViewBankReconcilationEntry)) {
        $("#bankReconciliationEntryMainMenu").append('<div id="bankReconciliationEntryMainPanel" class="panel panel-blue" />');
        $("#bankReconciliationEntryMainPanel").append('<div id="bankReconciliationEntryMainHeading" class="panel-heading" />');
        $("#bankReconciliationEntryMainHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Bank Reconcilation Entry Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="bankReconEntryCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
        $("#bankReconciliationEntryMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#bankReconEntryCollp").click(function () {
            $("#collapseOne1").toggle();
            if ($("#bankReconEntryCollp span").hasClass("glyphicon-minus-sign")) {
                $("#bankReconEntryCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#bankReconEntryCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="bankReconciliationEntryMainBody" class = "panel-body pan" />');
        $("#bankReconciliationEntryMainBody").append('<div id="panelRow" class="form-horizontal" />');
        $("#bankReconciliationEntryMainBody").append('<center><span id="bankReconciliationEntryMessageDiv"></span></center>');
        $("#bankReconciliationEntryMainBody").append('<div id="bankReconciliationEntryBodyDiv" class="row" />');
        $("#bankReconciliationEntryBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fromDate">From Date <span class="require">*</span></label><input type="text" class="form-control" id="fromDate" placeholder="DD/MM/YYYY"></div>'
                + '<div class="form-group col-lg-6"><label for="toDate">To Date <span class="require">*</span><span id="toDateErr"></span></label><input type="text" class="form-control" id="toDate" placeholder="DD/MM/YYYY"></div></div>');
//        $("#fromDate").datepicker({
//            changeYear: true,
//            changeMonth: true,
//            dateFormat: "dd/mm/yy",
//            yearRange: '-0:+50',
//            minDate: '+0D'
//        });
//
//        $("#toDate").datepicker({
//            changeYear: true,
//            changeMonth: true,
//            dateFormat: "dd/mm/yy",
//            yearRange: '-0:+50',
//            minDate: '+0D'
//        });
var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    var toFinacialYear = null;
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
    {
        var fromFinacialYear = finyearArray[0];
        var toFinacialYear = finyearArray[1];

        $("#fromFinancialYear").val(fromFinacialYear);
        $("#toFinancialYear").val(toFinacialYear);

    }
    $("#currentFinancialYear").val(currentFinancialYear);
    $('#fromDate').datepicker({
        changeYear: true,
        changeMonth: true,
        startDate: fromFinacialYear,
        endDate: toFinacialYear
    });
        
        $('#toDate').datepicker({
            changeYear: true,
            changeMonth: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear
        });
        
    $("#fromDate").keypress(function (event) {
        event.preventDefault();
    });
    $("#toDate").keypress(function (event) {
        event.preventDefault();
    });
        $("#bankReconciliationEntryBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location <span class="require">*</span></label><select class="form-control" name="locationSelect" id="locationSelect"></select>'
                + '</div><div class="form-group col-lg-6"><label for="ledger">Ledger <span class="require">*</span></label><select class="form-control" id="ledgerSelect"></select></div></div>');
        $("#bankReconciliationEntryBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="status">Status <span class="require">*</span></label><select class="form-control" name="locationSelect" id="statusSelect"><option value="0">----Select Status----</option><option>All Entries</option><option>Cleared Entries</option><option>Uncleared Entries</option></select></div></div>');
        $("#bankReconciliationEntryBodyDiv").append("<div class='form-group' id='changeButton'><center><button id='saveButton' onclick='bankReconcilationEntry()' class='btn btn-success' style='height:40px;width:80px'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetButton' onclick='resetBankReconciliationEntry()' class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");
        // bankReconciliationEntryTable();
        setTimeout(function () {
            fetchLedgerInfo();
        }, 200);

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

//    setTimeout(function() {
//        fetchAllLocation();
//    }, 300);
        getLoggedInDDOLocationInDropDown("", "locationSelect");
    }
}

function checkFromDateAndToDateForBankReconcillation() {
    var fDate = $("#fromDate").datepicker("getDate");
    var tDate = $("#toDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}

function resetBankReconciliationEntry() {

    $("#toDate").val("");
    $("#toDateErr").text("");
    $("#fromDate").val("");
    $("#ledgerSelect").val('0');
    $("#statusSelect").val('0');
    $("#bankReconciliationEntryMessageDiv").text("");
}

function fetchLedgerInfo() {
    $("#ledgerSelect").text("").append("<option value='0'>----Select Ledger----</option>");
    $.get(server_base_url + "/finance/accountMaster/GetLedgerForbankRecancellation", {
        group: "Bank Group"
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
        
            var mainData = JSON.parse(data);
            
//            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#ledgerSelect").append("<option value='" + subData.idStr + "'>" + subData.ledgerName + "(" + subData.ledgerCode +")"+ "</option>");
            }
        }
    });
}

function fetchAllLocation() {
    $("#locationSelect").text("").append("<option value='0'>----Select Location----</option>");
    $.get(server_base_url + "/financial/account/Location/ViewList", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#locationSelect").append("<option value='" + subData._id.$oid + "'>" + subData.locationName + "</option>");
            }
        }
    });
}

function bankReconcilationEntry() {
    var noOfDays = checkFromDateAndToDateForBankReconcillation();

    if (checkUserPrivelege(pvViewBankReconcilationEntry)) {
        if (noOfDays < 0) {
            $("#toDate").focus();
            displaySmallErrorMessagesInRed("toDateErr", "To date should be greater than from Date" + "");
        } else {
            $("#bankReconciliationEntryMessageDiv").text("");

            $("#bankReconciliationEntryListMainMenu").text("").append('<div id="bankReconciliationEntryListPanel" class="panel panel-blue" />');
            $("#bankReconciliationEntryListPanel").append('<div id="bankReconciliationEntryListHeading" class="panel-heading" />');
            $("#bankReconciliationEntryListHeading").append('<class="panel-title" data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Bank Reconcilation Entry</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="bankReconEntrListCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
            $("#bankReconciliationEntryListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
            $("#bankReconEntrListCollp").click(function () {
                $("#collapseOne2").toggle();
                if ($("#bankReconEntrListCollp span").hasClass("glyphicon-minus-sign")) {
                    $("#bankReconEntrListCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
                } else {
                    $("#bankReconEntrListCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
                }
            });
            $("#collapseOne2").append('<div id="bankReconciliationEntryListBody" class = "panel-body pan" />');
            $("#bankReconciliationEntryListBody").append('<div id="panelRow" class="row" />');
            $("#bankReconciliationEntryListBody").append('<div id="bankReconciliationEntryListErrorMsgId" />');
            $("#bankReconciliationEntryListBody").append('<div id="bankReconciliationEntryListMainBody" class="table-responsive" />');
            $("#bankReconciliationEntryTableHeadId").append('<tr><th><input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All</th><th>Voucher No</th><th>Voucher Date</th><th>Ledger Category</th><th>Fund Type</th><th>Status</th></tr>');
            $("#bankReconciliationEntryListMainBody").append('<table id="bankReconciliationEntryTable" class="table table-striped table-bordered table-hover">');
            $("#bankReconciliationEntryTable").append("<thead class=''><tr>"
                    //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
                    + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                    + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Voucher No</th>"
                    + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Voucher Date</th>"
                    + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Ledger Category</th>"
                    + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Fund Type</th>"
                    + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Status</th>"
                    + "</tr></thead>");
            $("#bankReconciliationEntryTable").append('<tbody id="bankReconciliationEntryTableBodyId" />');

            var fromDate = $("#fromDate").val();
            var toDate = $("#toDate").val();
            var location = $("#locationSelect").val();
            var ledger = $("#ledgerSelect").val();
            var status = $("#statusSelect").val();
            if (location == 0 || ledger == 0 || status == 0 || fromDate == "undefined" || fromDate == "" || toDate == "undefined" || toDate == "") {
                displaySmallErrorMessagesInRed("bankReconciliationEntryMessageDiv", "Please Fill * fields" + "");
                return false;
            }

            var entryJson = {
                fromDate: fromDate,
                toDate: toDate,
                location: location,
                ledger: ledger,
                reconcilationStatus: status
            }
            var userId = getUserSessionElement("userId");
            $.get(server_base_url + "/financial/account/BankReconcilation/Save", {
                reconcilationJson: JSON.stringify(entryJson),
                loginuserid: userId
            }).done(function (data) {

                var voucherList = data.voucherList;
                voucherList = JSON.stringify(voucherList);
                voucherList = JSON.parse(voucherList);
                voucherList = JSON.parse(voucherList);
                if (voucherList != "" && voucherList != null)
                {
                    for (var i = voucherList.length - 1; i >= 0; i--) {
                        if (voucherList[i].entryStatus == "Cleared Entries")
                        {
                            $("#bankReconciliationEntryTableBodyId").append("<tr id='" + voucherList[i].voucherId + "' style='cursor:pointer;' >"
                                    + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                                    + "<td style='cursor:pointer;'>" + voucherList[i].voucherNo + "</td>"
                                    + "<td style='cursor:pointer;'>" + voucherList[i].voucherDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + voucherList[i].voucherName + "</td>"
                                    + "<td style='cursor:pointer;'>" + voucherList[i].fundType + "</td>"
                                    + "<td style='cursor:pointer;'><select class='form-control' id='" + voucherList[i].voucherId + "'><option>Cleared Entries</option><option>Uncleared Entries</option></select></td>");
                        } else if (voucherList[i].entryStatus == "Uncleared Entries")
                        {
                            $("#bankReconciliationEntryTableBodyId").append("<tr id='" + voucherList[i].voucherId + "' style='cursor:pointer;' >"
                                    + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                                    + "<td style='cursor:pointer;'>" + voucherList[i].voucherNo + "</td>"
                                    + "<td style='cursor:pointer;'>" + voucherList[i].voucherDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + voucherList[i].voucherName + "</td>"
                                    + "<td style='cursor:pointer;'>" + voucherList[i].fundType + "</td>"
                                    + "<td style='cursor:pointer;'><select class='form-control' id='statusSelectval" + voucherList[i].voucherId + "'><option>Uncleared Entries</option><option>Cleared Entries</option></select></td>");
                        }

                    }
                    $("#bankReconciliationEntryTable").dataTable();
                    $("#bankReconciliationEntryTable thead tr th:first input:checkbox").change(function () {
                        $("#bankReconciliationEntryTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                    });
                    $("#bankReconciliationEntryTable tbody tr td:first-child input:checkbox").change(function () {
                        var tot = $(".case").length;
                        var tot_checked = $(".case:checked").length;
                        if (tot != tot_checked) {
                            $("#selectall").prop('checked', false);
                        }
                    });
                } else {
                    displaySmallErrorMessagesInRed("bankReconciliationEntryListErrorMsgId", NoDataFoundMessage + "");
                }



            });
            if (checkUserPrivelege(pvCreateBankReconcilationEntry)) {
                $("#bankReconciliationEntryListBody").append("<div  class='col-xs-3' /><div class='col-xs-3'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='saveChangeBankRecon()'>Save</button></div>");
            }
        }
    }
}




function saveChangeBankRecon() {
    if (checkUserPrivelege(pvCreateBankReconcilationEntry)) {
        var voucherList = [];

        $('#bankReconciliationEntryTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
            var row = $(this).closest('tr');
            voucherList.push({
                voucherId: row.attr('id'),
                entryStatus: $("#statusSelectval" + row.attr('id')).val(),
                voucherName: row.find('td:eq(3)').text()
            });

        });
        var userId = getUserSessionElement("userId");
        $.get(server_base_url + "financial/account/BankReconcilation/Update", {
            voucherList: JSON.stringify(voucherList),
            loginuserid: userId
        }).done(function (data) {
            if (data.statuscode == fail) {
                displaySmallErrorMessagesInRed("bankReconciliationEntryMessageDiv", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("bankReconciliationEntryMessageDiv", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displaySmallErrorMessagesInRed("bankReconciliationEntryMessageDiv", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {
                $("#toDate").prop("disabled", true);
                $("#fromDate").prop("disabled", true);
                $("#locationSelect").prop("disabled", true);
                $("#ledgerSelect").prop("disabled", true);
                $("#statusSelect").prop("disabled", true);
                $("#saveButton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("bankReconciliationEntryMessageDiv", updateMessage, "");
                setTimeout(function () {
                    bankReconcilationEntryCreation();
                }, 3000);
            }
        });
    }
}


