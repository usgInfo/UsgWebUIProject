/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayFinanceHorizontalBar() {
    $("#dashboardBodyMainDiv").text("");
    prepareSideBar();
    $("#dashboardTitleMainDiv").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a>');
    $("#dashboardOrderListId").text("");
    $("#dashboardOrderListId").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a>');
    $("#dashboardBodyMainDiv").append('<div id="financeHoarizontalBarId" />');
    $("#financeHoarizontalBarId").append('<div id="financeHoarizontalMainId" class="row" />');
    $("#financeHoarizontalMainId").append('<ul id="financeHorizontalUlId" class="nav nav-tabs ul-edit nav-justified" />');
    if (checkUserRole(rlFinancialAdmin) || checkUserRole(rlSuperAdmin) || checkUserRole(rlFinancialUser)) {
        $("#financeHorizontalUlId").append('<li><a href="#profile6" onclick="financeCommonMenuTabs()" data-toggle="tab"><strong>Common Master</strong></a></li>');
    }
    if (checkUserRole(rlFinancialAdmin) || checkUserRole(rlSuperAdmin) || checkUserRole(rlFinancialUser)) {
        $("#financeHorizontalUlId").append('<li onclick="financeAccountMenuTabs()"><a href="javascript:financeAccountMenuTabs()" data-toggle="tab" ><strong>Account Master</a></strong></li>');
    }
    //$("#financeHorizontalUlId").append('<li class="dropdown"><a href="#" data-toggle="tab"><strong>Employee Master</a></strong></li>');
    if (checkUserRole(rlFinancialAdmin) || checkUserRole(rlSuperAdmin) || checkUserRole(rlFinancialUser)) {
        //$("#financeHorizontalUlId").append('<li class="dropdown"><a href="#" data-toggle="tab"><strong>Transaction Master</a></strong></li>');
        $("#financeHorizontalUlId").append('<li onclick="financeTransactionMenuTabs()"><a href="javascript:financeTransactionMenuTabs()" data-toggle="tab" ><strong>Transaction Master</a></strong></li>');
    }
    if (checkUserRole(rlFinancialAdmin) || checkUserRole(rlSuperAdmin) || checkUserRole(rlFinancialUser)) {
        $("#financeHorizontalUlId").append('<li onclick="financeReportMenuTabs()"><a href="javascript:financeReportsMenuTabs()" data-toggle="tab" ><strong>Finance Reports</a></strong></li>');
    }



    $("#financeHoarizontalBarId").append('<br /><div id="financeAnalyticRow3" class="row" />');
    $("#financeAnalyticRow3").text("").append('<center><div id="changeFinancialYearfin" class="col-md-12" /></center>');
    $("#changeFinancialYearfin").append("<div class=' col-lg-12 form-group'><label for='changeFinancial' class='col-sm-2 control-label'>Financial Year:</label><div class='col-sm-6 col-sm-offset-1'><select class='form-control' id='changeYearSelect'></select></div></div></div>");
    //  $("#changeFinancialYearfin").append("<center><button onclick=changeFinancialYearforFinacialDashboard() class='btn btn-success' style='height:40px;width:80px' id='changeButton'>Change</button></center>");
    fetchYearsforFinaDashboard();

    $("#financeHoarizontalBarId").append('<br /><div id="financeAnalyticRow1" class="row" />');
    $("#financeAnalyticRow1").text("").append('<center><div id="displayVoucherCountByFY" class="col-md-6" /></center>');
    $("#financeAnalyticRow1").append('<center><div id="displayVoucherStatusByFY" class="col-md-6" /></center>');

    $("#financeHoarizontalBarId").append('<br /><div id="financeAnalyticRow2" class="row" />');
    $("#financeAnalyticRow2").text("").append('<center><div id="displayChequeStatusByFY" class="col-md-12" /></center>');
    setTimeout(function() {
        finacialCharts("displayVoucherCountByFY", "displayVoucherStatusByFY", "displayChequeStatusByFY");
    }, 1500);
    $("#changeYearSelect").attr("onchange", "finacialCharts('displayVoucherCountByFY','displayVoucherStatusByFY','financeAnalyticRow2');");
}
function finacialCharts(div1, div2, div3)
{
    $("#" + div1).text("").val("");
    $("#" + div2).text("").val("");
    $("#" + div3).text("").val("");
    $.get(server_base_url + "/FinancialAnalyticsService", {
        analyticsType: "VoucherCountByFY",
        year: $("#changeYearSelect").val(),
        ddo: getUserSessionElement(seDDOId),
        location: getUserSessionElement(seLocationId)
    }).done(function(data) {
        if (data.status == "failure") {
            $("#" + div1).text("").append("<center><span>Data not available</span><center>");
        } else {

            var chartData = [];
            $.each(data, function(index, value) {
                var temp = {"name": index,
                    "y": value
                }
                chartData.push(temp);
            });
            // Create the chart
            createFinacialColumnGraph(div1, chartData, "Voucher count by FY");
        }

    });


    $.get(server_base_url + "/FinancialAnalyticsService", {
        analyticsType: "VoucherStatus",
        year: $("#changeYearSelect").val(),
        ddo: getUserSessionElement(seDDOId),
        location: getUserSessionElement(seLocationId)
    }).done(function(data) {
//        data = {"null": {"total": 12}, "A": {"total": 37, "filled": 2}, "OTHER": {"total": 154, "filled": 3},
//            "Qwerty": {"total": 14, "filled": 1}};
        var voucherList = [];
        var newList = [];
        var postedList = [];
        $.each(data, function(index, value) {
            voucherList.push(index);
            var total = (value == null || value == "" || value == undefined || value.new == null || value.new == "" || value.new == undefined) ? 0 : parseInt(value.new);
            var filled = (value == null || value == "" || value == undefined || value.posted == null || value.posted == "" || value.posted == undefined) ? 0 : parseInt(value.posted);
            newList.push(total);
            postedList.push(filled);
        });
        var series = [{
                "color": 'green',
                name: 'Approved',
                data: postedList
            }, {
                "color": Highcharts.Color('#7cb5ec').brighten(0.0).get('rgb'),
                name: 'Disapproved',
                data: newList
            }];
        // Create the chart
        var chartdata = {
            chart: {renderTo: div2, type: 'column'},
            title: {text: 'DDO wise Voucher Status'},
            xAxis: {categories: voucherList},
            yAxis: {min: 0, title: {text: ''}},
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {column: {stacking: 'percent'}},
            series: series
        };
        var chart = new Highcharts.Chart(chartdata);
    });


    $.get(server_base_url + "/FinancialAnalyticsService", {
        analyticsType: "ChequeStatus",
        year: $("#changeYearSelect").val(),
        ddo: getUserSessionElement(seDDOId),
        location: getUserSessionElement(seLocationId)
    }).done(function(data) {

        var voucherList = [];
        var newList = [];
        var postedList = [];
        $.each(data, function(index, value) {
            voucherList.push(index);
            var total = (value == null || value == "" || value == undefined || value.new == null || value.new == "" || value.new == undefined) ? 0 : parseInt(value.new);
            var filled = (value == null || value == "" || value == undefined || value.posted == null || value.posted == "" || value.posted == undefined) ? 0 : parseInt(value.posted);
            newList.push(total);
            postedList.push(filled);
        });
        var series = [{
                "color": 'green',
                name: 'Approved',
                data: postedList
            }, {
                "color": Highcharts.Color('#B91919').brighten(0.0).get('rgb'),
                name: 'Pending',
                data: newList
            }];
        // Create the chart
        var chartdata = {
            chart: {renderTo: div3, type: 'column'},
            title: {text: 'Cheque Status'},
            xAxis: {categories: voucherList},
            yAxis: {min: 0, title: {text: ''}},
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {column: {stacking: 'percent'}},
            series: series
        };
        var chart = new Highcharts.Chart(chartdata);
    });


    //    var chart = {
//        chart: {renderTo: renderTo, type: 'pie'},
//        title: {text: title},
//        tooltip: {
//            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//        },
//        plotOptions: {
//               pie: {
//                allowPointSelect: true,
//                cursor: 'pointer',
//                dataLabels: {
//                    enabled: true,
//                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//                    style: {
//                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                    }
//                }
//            }
//        },
//        series: [{
//                data: chartData
//            }],
//    };
//    var chart = new Highcharts.Chart(chart);
}




function createFinacialColumnGraph(renderTo, chartData, title) {
    var chart = {
        chart: {renderTo: renderTo, type: 'column'},
        title: {text: title},
        //subtitle: {text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: '# No.Vouchers'}},
        legend: {enabled: false},
        plotOptions: {
            series: {borderWidth: 0,
                dataLabels: {enabled: true, format: '{point.y}'}
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}'
        },
        series: [{
                data: chartData
            }],
    };
    var chart = new Highcharts.Chart(chart);
}
function financeCommonMenuTabs() {
    prepareSideBar();
//    $("#" + innerDivCF).text("");
    $("#dashboardBodyMainDiv").text("");
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a>');
    $("#side-menu").append('<li><a href="javascript:void(0)"><i class="fa fa-rupee"></i><span class="menu-title"><strong>Common Master</strong></span><span class="fa"></span></a><ul class="nav nav-second-level" id="financeCommonMenuUl" /></li>');

    //li-5 sub menus
    if (checkUserPrivelege(pvCreateFinancialYear) || checkUserPrivelege(pvViewFinancialYear)) {
        $("#financeCommonMenuUl").append('<li><a href=javascript:displayBudgetFinacialYear("FINANCE") id="financeFinancialYear"><i class="fa fa-rupee"></i><span class="submenu-title">Financial Year Master</span></a></li>');
    }
    if (checkUserPrivelege(pvChangeFinancialYear)) {
        $("#financeCommonMenuUl").append('<li><a href=javascript:changeFinancialYearMaster("dashboardBodyMainDiv","FM") id="financeChangeFinancialYear"><i class="fa fa-rupee"></i><span class="submenu-title">Change Financial Year</span></a></li>');
    }

    //$("#financeCommonMenuUl").append('<li><a href=javascript:financialFundTypeMaster("dashboardBodyMainDiv")><i class="fa fa-rupee"></i><span class="submenu-title">Fund Type Master</span></a></li>');
    if (checkUserPrivelege(pvCreateFundType) || checkUserPrivelege(pvViewFundType)) {
        $("#financeCommonMenuUl").append('<li><a href=javascript:displayBudgetFundType("dashboardBodyMainDiv","FINANCE") id="financeFundType"><i class="fa fa-rupee"></i><span class="submenu-title">Fund Type Master</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateFundCategory) || checkUserPrivelege(pvViewFundCategory)) {
        $("#financeCommonMenuUl").append('<li><a href=javascript:financalFundCategoryMaster("FINANCE") id="financeFundCategory"><i class="fa fa-rupee"></i><span class="submenu-title">Fund Category Master</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateFundHeadMapping) || checkUserPrivelege(pvViewFundHeadMapping)) {
        $("#financeCommonMenuUl").append('<li><a href=javascript:dispalyhrmsCommonFundHeadMapping("displayFinanceHorizontalBar","Financial&nbsp;Management","financeCommonMenuTabs") id="financeFundHeadMapping"><i class="fa fa-rupee"></i><span class="submenu-title">Fund Head Mapping</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateGroup) || checkUserPrivelege(pvViewGroup)) {
        $("#financeCommonMenuUl").append('<li><a href=javascript:financalAccountGroupMaster("dashboardBodyMainDiv") id="groupMaster"><i class="fa fa-rupee"></i><span class="submenu-title">Group Master</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateMajorCode) || checkUserPrivelege(pvViewMajorCode)) {
        $("#financeCommonMenuUl").append('<li><a href=javascript:finMajorHeadMaster("dashboardBodyMainDiv","FINANCE") id="financeMajorHead"><i class="fa fa-rupee"></i><span class="submenu-title">Major Head</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateMinorCode) || checkUserPrivelege(pvViewMinorCode)) {
        $("#financeCommonMenuUl").append('<li><a href=javascript:finMinorHeadMaster("dashboardBodyMainDiv","FINANCE") id="financeMinorHead"><i class="fa fa-rupee"></i><span class="submenu-title">Minor Head</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateSubMajorCode) || checkUserPrivelege(pvViewSubMajorCode)) {
        $("#financeCommonMenuUl").append('<li><a href=javascript:financalSubMajorHeadMaster("dashboardBodyMainDiv","FINANCE") id="financeSubMajorHead"><i class="fa fa-rupee"></i><span class="submenu-title">Sub Major Head</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateSubMinorCode) || checkUserPrivelege(pvViewSubMinorCode)) {
        $("#financeCommonMenuUl").append('<li><a href=javascript:financalSubMinorHeadMaster("dashboardBodyMainDiv","FINANCE") id="financeSubMinorHead"><i class="fa fa-rupee"></i><span class="submenu-title">Sub Minor Head</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateGovernmentBudgetHead) || checkUserPrivelege(pvViewGovernmentBudgetHead)) {
        $("#financeCommonMenuUl").append('<li><a href=javascript:financalSubGovtBudgetHeadHeadMaster("dashboardBodyMainDiv","FINANCE") id="finaceGovtBudgetHead"><i class="fa fa-rupee"></i><span class="submenu-title">Government Budget Head</span></a></li>');
    }
//    $("#financeCommonMenuUl").append('<li><a href=javascript:financalUnderGroupMaster("dashboardBodyMainDiv")><i class="fa fa-rupee"></i><span class="submenu-title">Under Group Master</span></a></li>');

    if (checkUserPrivelege(pvCreateBudgetHead) || checkUserPrivelege(pvViewBudgetHead)) {
        $("#financeCommonMenuUl").append('<li><a href=javascript:dispalyhrmsCommonBudgetHeadMaster("displayFinanceHorizontalBar","Financial&nbsp;Management","financeCommonMenuTabs") id="financebudgetHeadCode"><i class="fa fa-rupee"></i><span class="submenu-title">Budget Head Code Master</span></a></li>');
    }
    // $("#financeCommonMenuUl").append('<li><a href=javascript:financalUnderBudgetHeadMaster("dashboardBodyMainDiv")><i class="fa fa-rupee"></i><span class="submenu-title">Under Budget Head</span></a></li>');
//    if (checkUserPrivelege(pvCreateChequeConfiguation) || checkUserPrivelege(pvViewChequeConfiguation)) {
//        $("#financeCommonMenuUl").append('<li><a href=javascript:financialBankChequeConfigurationMaster("dashboardBodyMainDiv") id="bankCheque"><i class="fa fa-rupee"></i><span class="submenu-title">Bank Cheque Configuration</span></a></li>');
//    }
    //if (checkUserPrivelege(pvCreateBankName) || checkUserPrivelege(pvViewBankName)) {
    $("#financeCommonMenuUl").append('<li><a href=javascript:banknamemaster("dashboardBodyMainDiv") id="financeBank"><i class="fa fa-rupee"></i><span class="submenu-title">Bank Master</span></a></li>');
    // }
    $("#financeFinancialYear,#financeChangeFinancialYear,#financeFundType,#financeFundCategory,#financeFundHeadMapping,#groupMaster,#financeMajorHead,#financeMinorHead,#financeSubMajorHead,#financeSubMinorHead,#finaceGovtBudgetHead,#financebudgetHeadCode,#bankCheque,#financeBank").click(function() {
        $(this).parent().siblings().children("a").css("color", "white");
        $(this).css("color", "red");
        $(this).siblings().css("color", "white");
    });
    $('#side-menu').metisMenu();
}
function makeCollapsable(divId) {
    var getClass = $("#financeCommonMenuUl").attr("class");
    var count = 0;
    var arrayOfClass = getClass.split(" ");
    for (var j = 0; j < arrayOfClass.length; j++) {
        if (arrayOfClass[j] == "in") {
            count++;
        }
        if (count != 0) {
            $("#financeCommonMenuUl").attr("class", "nav nav-second-level collapse");
        } else {
            $("#financeCommonMenuUl").attr("class", "nav nav-second-level collapse in");
        }
    }

    $('#side-menu').metisMenu();

}

function financeAccountMenuTabs() {
    prepareSideBar();
    $("#dashboardBodyMainDiv").text("");
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a>');
    $("#side-menu").append('<li><a href="javascript:void(0)"><i class="fa fa-rupee"></i><span class="menu-title"><strong>Account Master</strong></span><span class="fa"></span></a><ul class="nav nav-second-level" id="financeAccountMenuUl" /></li>');
    //Sub Menus
    if (checkUserPrivelege(pvCreateLedger) || checkUserPrivelege(pvViewLedger)) {
        $("#financeAccountMenuUl").append('<li><a href=javascript:ledgerMasterCreation("dashboardBodyMainDiv") id="ledgerMaster"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Ledger Master</span></a></li>');
    }
    //   $("#financeAccountMenuUl").append('<li><a href=javascript:BudgetNatureMasterCreation("dashboardBodyMainDiv") id="budgetNature"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Budget Nature Master</span></a></li>');
//    $("#financeAccountMenuUl").append('<li><a href=javascript:underGroupMasterCreation("dashboardBodyMainDiv")><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Under Group Master</span></a></li>');
//    $("#financeAccountMenuUl").append('<li><a href=javascript:parentLedgerCategoryMasterCreation("dashboardBodyMainDiv")><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Parent Ledger Category Master</span></a></li>');
//    $("#financeAccountMenuUl").append('<li><a href=javascript:governmentLedgerCodeMasterCreation("dashboardBodyMainDiv")><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Government Ledger Code Master</span></a></li>');
    if (checkUserPrivelege(pvLedgerCode) || checkUserPrivelege(pvViewLedgerCode)) {
        $("#financeAccountMenuUl").append('<li><a href=javascript:ledgerCodeMasterCreation("dashboardBodyMainDiv") id="ledgercode"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Ledger Code Master</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateLedgerCategory) || checkUserPrivelege(pvViewLedgerCategory)) {
        $("#financeAccountMenuUl").append('<li><a href=javascript:LedgerCategoryMasterCreation("dashboardBodyMainDiv") id="ledgercategory"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Ledger Category Master</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateOpenBalance) || checkUserPrivelege(pvViewOpenBalance)) {
        $("#financeAccountMenuUl").append('<li><a href=javascript:manageOpeningBalanceMaster("dashboardBodyMainDiv") id="openingbal"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Manage Opening Balance</span></a></li>');
    }
    $("#financeAccountMenuUl").append('<li><a href=javascript:carryForwardLedgerBalance("dashboardBodyMainDiv") id="carryForwardLedger"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Carry Forward Ledger Balance</span></a></li>');
    if (checkUserPrivelege(pvCreateStandardNarration) || checkUserPrivelege(pvViewStandardNarration)) {
        $("#financeAccountMenuUl").append('<li><a href=javascript:narationMaster("dashboardBodyMainDiv") id="narationmaster"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Narration Master</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateHeadCodeLocMapping) || checkUserPrivelege(pvViewHeadCodeLocMapping)) {
        $("#financeAccountMenuUl").append('<li><a href=javascript:headCodeLocationMappingMaster("dashboardBodyMainDiv") id="headcodeloc"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Head Code Location Mapping</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateFDRProcess) || checkUserPrivelege(pvViewFDRProcess)) {
        $("#financeAccountMenuUl").append('<li><a href=javascript:fdrProcessMaster("dashboardBodyMainDiv") id="fdrprocess"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;FDR Process</span></a></li>');
    }
    //    $("#financeAccountMenuUl").append('<li><a href=javascript:fdrDetailsMaster("dashboardBodyMainDiv") id="fdrdetails"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Fixed Deposit Details Master</span></a></li>');
    if (checkUserPrivelege(pvCreateBankReconcilationEntry) || checkUserPrivelege(pvViewBankReconcilationEntry)) {
        $("#financeAccountMenuUl").append('<li><a href=javascript:bankReconcilationEntryCreation("dashboardBodyMainDiv") id="bankReconEntry"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Bank Reconciliation Entry</span></a></li>');
    }
    
   //  if (checkUserPrivelege(pvCreateBankReconcilationEntry) || checkUserPrivelege(pvViewBankReconcilationEntry)) {
        $("#financeAccountMenuUl").append('<li><a href=javascript:createPartyMaster("dashboardBodyMainDiv") id="partyMasterId"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Party Master</span></a></li>');
   // }
    
    
//    $("#financeAccountMenuUl").append('<li><a href=javascript:reportBankReconciliation("dashboardBodyMainDiv") id="bankReconreport"><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Bank Reconciliation Report</span></a></li>');
    $("#ledgerMaster,#budgetNature,#ledgercode,#ledgercategory,#openingbal,#carryForwardLedger,#narationmaster,#headcodeloc,#fdrprocess,#fdrdetails,#bankReconEntry,#partyMasterId").click(function() {
        $(this).parent().siblings().children("a").css("color", "white");
        $(this).css("color", "red");
        $(this).siblings().css("color", "white");
    })
    $('#side-menu').metisMenu();
}

function financeTransactionMenuTabs() {
    prepareSideBar();
    $("#dashboardBodyMainDiv").text("");
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeTransactionMenuTabs()">Transaction Master</a>');
    $("#side-menu").append('<li><a href="javascript:void(0)"><i class="fa fa-rupee"></i><span class="menu-title"><strong>Transaction Master</strong></span><span class="fa"></span></a><ul class="nav nav-second-level" id="financeTransactionMenuUl" /></li>');
    //Sub Menus
    if (checkUserPrivelege(pvCreateReceiptVoucher) || checkUserPrivelege(pvViewReceiptVoucher)) {
        $("#financeTransactionMenuUl").append('<li><a href=javascript:receiptVoucherMaster("dashboardBodyMainDiv") id="receiptVoucher"><i class="fa fa-rupee" id="transactionSubTitleId"></i><span class="menu-subtitle">&nbsp;Receipt Voucher</span></a></li>');
    }
    if (checkUserPrivelege(pvCreatePaymentVoucher) || checkUserPrivelege(pvViewPaymentVoucher)) {
        $("#financeTransactionMenuUl").append('<li><a href=javascript:paymentVoucherMaster("dashboardBodyMainDiv") id="paymentVoucher"><i class="fa fa-rupee" id="transactionSubTitleId"></i><span class="menu-subtitle">&nbsp;Payment Voucher</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateContraVoucher) || checkUserPrivelege(pvViewContraVoucher)) {
        $("#financeTransactionMenuUl").append('<li><a href=javascript:contraVoucherMaster("dashboardBodyMainDiv") id="contraVoucher"><i class="fa fa-rupee" id="transactionSubTitleId"></i><span class="menu-subtitle">&nbsp;Contra Voucher</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateJournalVoucher) || checkUserPrivelege(pvViewJournalVoucher)) {
        $("#financeTransactionMenuUl").append('<li><a href=javascript:journalVoucherMaster1("dashboardBodyMainDiv") id="journalVoucher"><i class="fa fa-rupee" id="transactionSubTitleId"></i><span class="menu-subtitle">&nbsp;Journal Voucher</span></a></li>');
    }
    if (checkUserPrivelege(pvSaveVoucherPosting) || checkUserPrivelege(pvViewVoucherPosting)) {
        $("#financeTransactionMenuUl").append('<li><a href=javascript:PostingVoucherMaster1("dashboardBodyMainDiv") id="voucherPosting"><i class="fa fa-rupee"></i><span class="menu-subtitle">&nbsp;Voucher Approval</span></a></li>');
    }
    if (checkUserPrivelege(pvSaveVoucherUnPosting) || checkUserPrivelege(pvViewVoucherUnPosting)) {
        $("#financeTransactionMenuUl").append('<li><a href=javascript:UnPostingVoucherMaster1("dashboardBodyMainDiv") id="voucherunPosting"><i class="fa fa-rupee" id="transactionSubTitleId"></i><span class="menu-subtitle">&nbsp;Voucher UN-Posting</span></a></li>');
    }
    if (checkUserPrivelege(pvSearchBankCheque) || checkUserPrivelege(pvPrintBankCheque)) {
//    $("#financeTransactionMenuUl").append('<li><a href=javascript:bankChequePrintmaster1("dashboardBodyMainDiv") id="bankChequePrint"><i class="fa fa-rupee" id="transactionSubTitleId"></i><span class="menu-subtitle">&nbsp;Bank Cheque Print</span></a></li>');
    }
    if (checkUserPrivelege(pvSearchPostSalaryVoucher) || checkUserPrivelege(pvPostSalaryVoucherDetails)) {
//    $("#financeTransactionMenuUl").append('<li><a href=javascript:PostsalaryVoucherMaster1("dashboardBodyMainDiv") id="postSalaryVoucher"><i class="fa fa-rupee" id="transactionSubTitleId"></i><span class="menu-subtitle">&nbsp;Post Salary Voucher</span></a></li>');
    }
    //$("#financeAccountMenuUl").append('<li><a href=javascript:narationMaster("dashboardBodyMainDiv")><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Naration Master</span></a></li>');

    $("#receiptVoucher,#paymentVoucher,#contraVoucher,#journalVoucher,#voucherPosting,#voucherunPosting,#bankChequePrint,#postSalaryVoucher").click(function() {
        $(this).parent().siblings().children("a").css("color", "white");
        $(this).css("color", "red");
        $(this).siblings().css("color", "white");
    });




    $('#side-menu').metisMenu();

}

function financeReportMenuTabs() {
    prepareSideBar();
    if (checkUserRole(rlFinancialAdmin) || checkUserRole(rlSuperAdmin) || checkUserRole(rlFinancialUser)) {
        $("#dashboardBodyMainDiv").text("");
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeReportMenuTabs()">Finance Reports</a>');
        $("#side-menu").append('<li><a href="javascript:void(0)"><i class="fa fa-rupee"></i><span class="menu-title"><strong>Finance Reports</strong></span><span class="fa"></span></a><ul class="nav nav-second-level" id="financeReportMenuUl" /></li>');
        //Sub Menus
        if (checkUserPrivelege(pvViewCashBookReport)) {
            $("#financeReportMenuUl").append('<li><a href=javascript:cashBookReport("dashboardBodyMainDiv") id="cashBookReport"><i class="fa fa-rupee" id="reportSubTitleId"></i><span class="menu-subtitle">&nbsp;Cash Book(Ledgerwise)</span></a></li>');
        }
        if (checkUserPrivelege(pvViewBankBookReport)) {
            $("#financeReportMenuUl").append('<li><a href=javascript:bankBookReport("dashboardBodyMainDiv") id="bankBookReport"><i class="fa fa-rupee" id="reportSubTitleId"></i><span class="menu-subtitle">&nbsp;Bank Book(Ledgerwise)</span></a></li>');
        }
//    $("#financeReportMenuUl").append('<li><a href=javascript:trialBalanceSheet("dashboardBodyMainDiv")><i class="fa fa-rupee" id="reportSubTitleId"></i><span class="menu-subtitle">&nbsp;Trial Balance Sheet</span></a></li>');

        if (checkUserPrivelege(pvViewLedgerBookReport)) {
            $("#financeReportMenuUl").append('<li><a href=javascript:ledgerBookReport("dashboardBodyMainDiv") id="ledgerBookReport"><i class="fa fa-rupee" id="reportSubTitleId"></i><span class="menu-subtitle">&nbsp;Ledger Book Report</span></a></li>');
        }
        if (checkUserPrivelege(pvViewChequeIssueRegisterReport)) {
            $("#financeReportMenuUl").append('<li><a href=javascript:chequeIssueRegisterReport("dashboardBodyMainDiv") id="chequeIssueRegisterReport"><i class="fa fa-rupee" id="reportSubTitleId"></i><span class="menu-subtitle">&nbsp;Cheque Issue Register</span></a></li>');
        }
        if (checkUserPrivelege(pvViewBankReconcilationReport)) {
            $("#financeReportMenuUl").append('<li><a href=javascript:reportBankReconciliation("dashboardBodyMainDiv") id="bankReconciliationReport"><i class="fa fa-rupee" id="reportSubTitleId"></i><span class="menu-subtitle">&nbsp;Bank Reconciliation Report</span></a></li>');
        }
        if (checkUserPrivelege(pvViewFDRStatementReport)) {
            $("#financeReportMenuUl").append('<li><a href=javascript:fdrStatementReportPage("dashboardBodyMainDiv") id="fdrReport"><i class="fa fa-rupee" id="fdrReport"></i><span class="menu-subtitle">&nbsp;FDR Statement Report</span></a></li>');
//        $("#financeReportMenuUl").append('<li><a href=javascript:trialBalanceReportPage("dashboardBodyMainDiv") id="trialBalanceLedgerwise"><i class="fa fa-rupee" id="trialBalanceLedgerwise"></i><span class="menu-subtitle">&nbsp;Trial Balance Ledgerwise</span></a></li>');
            //$("#financeAccountMenuUl").append('<li><a href=javascript:narationMaster("dashboardBodyMainDiv")><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Naration Master</span></a></li>');
//    $("#financeReportMenuUl").append('<li><a href=javascript:fdrStatementReportPage("dashboardBodyMainDiv") id="fdrReport"><i class="fa fa-rupee" id="fdrReport"></i><span class="menu-subtitle">&nbsp;FDR Statement Report</span></a></li>');
        }
        if (checkUserPrivelege(pvViewTrialBalanceLedgerwiseReport)) {
            $("#financeReportMenuUl").append('<li><a href=javascript:trialBalanceReportPage("dashboardBodyMainDiv") id="trialBalanceLedgerwise"><i class="fa fa-rupee" id="trialBalanceLedgerwise"></i><span class="menu-subtitle">&nbsp;Trial Balance Ledgerwise</span></a></li>');
        }
        $("#financeReportMenuUl").append('<li><a href=javascript:depositReport("dashboardBodyMainDiv") id="depositReport"><i class="fa fa-rupee" id="reportSubTitleId"></i><span class="menu-subtitle">&nbsp;Deposit Report</span></a></li>');
        //$("#financeAccountMenuUl").append('<li><a href=javascript:narationMaster("dashboardBodyMainDiv")><i class="fa fa-rupee" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Naration Master</span></a></li>');
        $("#cashBookReport,#bankBookReport,#ledgerBookReport,#chequeIssueRegisterReport,#bankReconciliationReport,#fdrReport,#trialBalanceLedgerwise,#depositReport").click(function() {
            $(this).parent().siblings().children("a").css("color", "white");
            $(this).css("color", "red");
            $(this).siblings().css("color", "white");
        });
        $('#side-menu').metisMenu();
    }

}

//function changeFinancialYearforFinacialDashboard() {
//    var validChangeDate = $("#changeYearSelect").val();
//    if (validChangeDate == 0) {
//        $("#MessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill all fields</strong></div></center>");
//        return false;
//    }
//
//    $("#changeButton").attr('disabled', true);
//    $("#changeYearSelect").prop("disabled", true);
//    var changeFinancialYearDate = $("#changeYearSelect option:selected").text();
//    setUserSessionElement(seCurrentFinancialYear, changeFinancialYearDate);
//    $.get(server_base_url + "/financial/account/FinancialYear/Change", {
//        changeYearfin: changeFinancialYearDate,
//    }).done(function(data) {
//        if (data.statuscode == fail || data.statuscode == unauthorized || data.statuscode == statusException) {
//            $("#changeFinancialYearMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Financial Year Updation Failed<strong></div></center>");
//        } else if (data == invalidSession) {
//            callSessionTimeout();
//        } else {
//            displayFinanceHorizontalBar();
//        }
//    });
//}
function fetchYearsforFinaDashboard() {
    $("#changeYearSelect").text("").append("<option value='0'>----Select Current Financial Year----</option>");
    $.get(server_base_url + "/financial/account/FinancialYear/AllYear", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
//            var data = JSON.parse(data);"active" : "Yes",
            var mainData = data.result;
            mainData = JSON.parse(mainData);
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                var fromyear = subData.fromDate;
                fromyear = fromyear.substring(fromyear.length - 4, fromyear.length);
                var toyear = subData.toDate;
                toyear = toyear.substring(toyear.length - 4, toyear.length);
                if (subData.active == "Yes")
                {
                    $("#changeYearSelect").append("<option value='" + subData.year + "' selected>" + fromyear + " - " + toyear + "</option>");
                } else
                {
                    $("#changeYearSelect").append("<option value='" + subData.year + "'>" + fromyear + " - " + toyear + "</option>");
                }
            }
        }
    });
}