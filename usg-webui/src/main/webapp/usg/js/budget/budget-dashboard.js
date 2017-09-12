/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayBudgetHorizontalBar() {

    $("#dashboardBodyMainDiv").text("");
    $("#side-menu").text("");
    prepareSideBar();
    $("#dashboardTitleMainDiv").text("").append('<label>Budget</label>');
    $("#dashboardOrderListId").text("");
    $("#dashboardOrderListId").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a>');
    $("#dashboardBodyMainDiv").append('<div id="budgetHoarizontalBarId" />');
    $("#budgetHoarizontalBarId").append('<div id="budgetHoarizontalMainId" class="row" />');
    $("#budgetHoarizontalMainId").append('<ul id="budgetHorizontalUlId" class="nav nav-tabs ul-edit nav-justified"/>');
    if (checkUserRole(rlBudgetAdmin) || checkUserRole(rlBudgetUser) || checkUserRole(rlSuperAdmin)) {
        $("#budgetHorizontalUlId").append('<li><a href="#profile6" data-toggle="tab" onclick="budgetCommonMenuTabs()"><strong>Common Master</strong></a></li>');
    }
    if (checkUserRole(rlBudgetAdmin) || checkUserRole(rlSuperAdmin)) {
        $("#budgetHorizontalUlId").append('<li><a href="#profile6" data-toggle="tab" onclick="budgetMenuTabs()"><strong>Budget Master</a></strong></li>');
    }
    if (checkUserRole(rlBudgetAdmin) || checkUserRole(rlBudgetUser) || checkUserRole(rlSuperAdmin)) {
        $("#budgetHorizontalUlId").append('<li><a href="#profile6" data-toggle="tab" onclick="budgetTransactionMenuTabs()"><strong>Budget Transaction</a></strong></li>');
        $("#budgetHorizontalUlId").append('<li><a href="#profile6" data-toggle="tab" onclick="budgetReportTab()"><strong>Budget Report</a></strong></li>');
    }


    $("#budgetHoarizontalBarId").append('<br /><div id="budgetAnalyticRow3" class="row" />');
    $("#budgetAnalyticRow3").text("").append('<center><div id="changeFinancialYearfin" class="col-md-12" /></center>');
    $("#changeFinancialYearfin").append("<div class=' col-lg-12 form-group'><label for='changeFinancial' class='col-sm-2 control-label'>Financial Year:</label><div class='col-sm-6 col-sm-offset-1'><select class='form-control' id='changeYearSelect'></select></div></div></div>");
    fetchYearsforFinaDashboard();

    $("#budgetHoarizontalBarId").append('<br /><div id="budgetAnalyticRow1" class="row" />');
    $("#budgetAnalyticRow1").text("").append('<center><div id="displaySanctionCountByFY" class="col-md-6" /></center>');

    setTimeout(function() {
        budgetCharts("displaySanctionCountByFY", "displayVoucherStatusByFY", "displayChequeStatusByFY");
    }, 1500);
    $("#changeYearSelect").attr("onchange", "budgetCharts('displaySanctionCountByFY','displayVoucherStatusByFY','financeAnalyticRow2');");


}
function budgetCharts(div1, div2, div3)
{
    $("#" + div1).text("").val("");
    $("#" + div2).text("").val("");
    $("#" + div3).text("").val("");
    $.get(server_base_url + "/BudgetAnalyticsService", {
        analyticsType: "SanctionCountByFY",
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
            createbudgetColumnGraph(div1, chartData, "Sanctioned Amount");
        }
    });
}
function createbudgetColumnGraph(renderTo, chartData, title) {
    var chart = {
        chart: {renderTo: renderTo, type: 'bar'},
        title: {text: title},
        //subtitle: {text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: '# Amount(Lacs)'}},
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
function budgetMenuTabs() {
    prepareSideBar();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> > <label><a href="javascript:budgetMenuTabs()">Budget Master</a></label>');
    $("#dashboardBodyMainDiv").text("");
    $("#side-menu").append('<li><a href="javascript:void(0)"><i class="fa fa-bold"></i><span class="menu-title">Budget Master</span><span class="fa"></span></a><ul class="nav nav-second-level" id="budgetCommonMenuUl" /></li>');
    //li-5 sub menus
    //$("#budgetCommonMenuUl").append('<li><a href=javascript:createSector()><i class="fa fa-eye"></i><span class="submenu-title">Sector Category Master</span></a></li>');
//    $("#budgetCommonMenuUl").append('<li><a href=javascript:createSector() id="sectorCategoryMaster"><i class="fa fa-bold"></i><span class="submenu-title">Sector Category Master</span></a></li>');
    if (checkUserPrivelege(pvCreateSector) || checkUserPrivelege(pvViewSector)) {
        $("#budgetCommonMenuUl").append('<li><a href=javascript:displaySector() id="createAndManageSectorMaster"><i class="fa fa-bold"></i><span class="submenu-title">Create and Manage Sector</span></a></li>');
    }
    if (checkUserPrivelege(pvCreateBudgetType) || checkUserPrivelege(pvViewBudgetType)) {
        $("#budgetCommonMenuUl").append('<li><a href=javascript:createBudgetType() id="createAndManageBudgetTypeMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Create and Manage Budget Type</span></a></li>');
    }
    // if (checkUserPrivelege(pvCreateBudgetType) || checkUserPrivelege(pvViewBudgetType)) {
    $("#budgetCommonMenuUl").append('<li><a href=javascript:createPreviousBudgetActualAmount("dashboardBodyMainDiv") id="createPreviousBudgetActualAmount" ><i class="fa fa-bold"></i><span class="submenu-title">Actual Budget For Previous Years</span></a></li>');
    // }



    $("#sectorCategoryMaster,#createAndManageSectorMaster,#createAndManageBudgetTypeMaster,#createPreviousBudgetActualAmount").click(function() {
        $(this).parent().siblings().children("a").css("color", "white");
        $(this).css("color", "red");
        $(this).siblings().css("color", "white");
    })
    $('#side-menu').metisMenu();
}
function budgetCommonMenuTabs() {
    prepareSideBar();
    $("#dashboardBodyMainDiv").text("");
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> >> <a href="javascript:void(0)" data-toggle="tab" onclick="budgetCommonMenuTabs()">Common Masters</a>');

    $("#side-menu").append('<li><a href="javascript:void(0)"><i class="fa fa-bold"></i><span class="menu-title">Common Master</span><span class="fa"></span></a><ul class="nav nav-second-level" id="budgetCommonMasterMenuUl" /></li>');

    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlBudgetAdmin)) {
        if (checkUserPrivelege(pvCreateFinancialYear) || checkUserPrivelege(pvViewFinancialYear)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:displayBudgetFinacialYear("BUDGET")  id="financialYear"><i class="fa fa-bold"></i><span class="submenu-title">Financial Year</span></a></li>');
        }
        if (checkUserPrivelege(pvChangeFinancialYear)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:changeFinancialYearMaster("dashboardBodyMainDiv","Budget") id="changeFinancialYear"><i class="fa fa-bold" id="accountSubTitleId"></i><span class="submenu-title">Change Financial Year</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateFundCategory) || checkUserPrivelege(pvViewFundCategory)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:financalFundCategoryMaster("BUDGET")  id="fundcategoryMaster"><i class="fa fa-bold"></i><span class="submenu-title">Fund Category Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateFundType) || checkUserPrivelege(pvViewFundType)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:displayBudgetFundType("dashboardBodyMainDiv","BUDGET")  id="fundTypeMaster"><i class="fa fa-bold"></i><span class="submenu-title">Fund Type</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateFundHeadMapping) || checkUserPrivelege(pvViewFundHeadMapping)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:dispalyhrmsCommonFundHeadMapping("displayBudgetHorizontalBar","Budget","budgetCommonMenuTabs")  id="fundHeadMappingMaster"><i class="fa fa-bold"></i><span class="submenu-title">Fund Head Mapping</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateMajorCode) || checkUserPrivelege(pvViewMajorCode)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:finMajorHeadMaster("dashboardBodyMainDiv","BUDGET")  id="majorHeadMaster"><i class="fa fa-bold"></i><span class="submenu-title">Major Head</span></a></li>');
        }
        $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:carryForwardLedger("dashboardBodyMainDiv") id="minorHeadMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Carry Forward Ledger Balance</span></a></li>');

        if (checkUserPrivelege(pvCreateMinorCode) || checkUserPrivelege(pvViewMinorCode)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:finMinorHeadMaster("dashboardBodyMainDiv","BUDGET") id="minorHeadMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Minor Head</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateSubMajorCode) || checkUserPrivelege(pvViewSubMajorCode)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:financalSubMajorHeadMaster("dashboardBodyMainDiv","BUDGET")  id="subMajorHeadMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Sub Major Head</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateSubMinorCode) || checkUserPrivelege(pvViewSubMinorCode)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:financalSubMinorHeadMaster("dashboardBodyMainDiv","BUDGET")  id="subminorHeadMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Sub Minor Head</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateHeadCode) || checkUserPrivelege(pvCreateHeadCode)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:financalSubGovtBudgetHeadHeadMaster("dashboardBodyMainDiv","BUDGET")  id="govtBudgetHeadMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Govt Budget Head</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateHeadCode) || checkUserPrivelege(pvCreateHeadCode)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:dispalyhrmsCommonBudgetHeadMaster("displayBudgetHorizontalBar","Budget","budgetCommonMenuTabs")  id="budgetHeadCodeMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Budget Head Code</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateHeadCode) || checkUserPrivelege(pvViewHeadCode)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:displayDDoHeadCodeMapping()  id="ddoHeadCodeMappingMaster" ><i class="fa fa-bold"></i><span class="submenu-title">DDO HeadCode Mapping</span></a></li>')
        }
        $("#changeFinancialYear,#financialYear,#fundcategoryMaster,#fundTypeMaster,#fundHeadMappingMaster,#majorHeadMaster,#minorHeadMaster,#subMajorHeadMaster,#subminorHeadMaster,#govtBudgetHeadMaster,#budgetHeadCodeMaster,#ddoHeadCodeMappingMaster").click(function() {
            $(this).parent().siblings().children("a").css("color", "white");
            $(this).css("color", "red");
            $(this).siblings().css("color", "white");
        })
        $('#side-menu').metisMenu();
    }
    if (checkUserRole(rlBudgetUser))
    {
        if (checkUserPrivelege(pvChangeFinancialYear)) {
            $("#budgetCommonMasterMenuUl").append('<li><a href=javascript:changeFinancialYearMaster("dashboardBodyMainDiv","Budget") id="changeFinancialYear"><i class="fa fa-bold" id="accountSubTitleId"></i><span class="submenu-title">Change Financial Year</span></a></li>');
        }
        $("#changeFinancialYear,#financialYear,#fundcategoryMaster,#fundTypeMaster,#fundHeadMappingMaster,#majorHeadMaster,#minorHeadMaster,#subMajorHeadMaster,#subminorHeadMaster,#govtBudgetHeadMaster,#budgetHeadCodeMaster,#ddoHeadCodeMappingMaster").click(function() {
            $(this).parent().siblings().children("a").css("color", "white");
            $(this).css("color", "red");
            $(this).siblings().css("color", "white");
        })
        $('#side-menu').metisMenu();
    }
}
function budgetTransactionMenuTabs() {
    prepareSideBar();
    $("#dashboardBodyMainDiv").text("");
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> >> <a href="javascript:void(0)" data-toggle="tab" onclick="budgetTransactionMenuTabs()">Budget Transactions</a>');

    $("#side-menu").append('<li><a href="javascript:void(0)"><i class="fa fa-bold"></i><span class="menu-title">Budget Transactions</span><span class="fa"></span></a><ul class="nav nav-second-level" id="BudgetTransactionMenuUl" /></li>');

    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlBudgetAdmin)) {
        if (checkUserPrivelege(pvCreateIncomeBudget) || checkUserPrivelege(pvViewIncomeBudget)) {
            $("#BudgetTransactionMenuUl").append('<li><a href=javascript:displayBudgetIncomeTransaction() id="displayBudgetIncomeTransactionMaster"><i class="fa fa-bold"></i><span class="submenu-title">Create Income Budget @ Department</span></a></li>');
        }
//    if (checkUserPrivelege(pvCreateIncomeBudget) || checkUserPrivelege(pvViewIncomeBudget)) {
        $("#BudgetTransactionMenuUl").append('<li><a href=javascript:ConsolidateDepartmentIncomeBudget("dashboardBodyMainDiv") id="ConsolidateDepartmentIncome"><i class="fa fa-bold"></i><span class="submenu-title">Consolidated Income Budget @ Department Head</span></a></li>');
//    }
        if (checkUserPrivelege(pvCreateBudgetConsolidatedIncome) || checkUserPrivelege(pvViewBudgetConsolidatedIncome)) {
            $("#BudgetTransactionMenuUl").append('<li><a href=javascript:budgetConsolidateIncomeBudgetmaster("dashboardBodyMainDiv") id="budgetConsolidateIncomeBudgetmasters" ><i class="fa fa-bold"></i><span class="submenu-title">Consolidated Income Budget @ DDO</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateIncomeBudgetUniversity) || checkUserPrivelege(pvViewIncomeBudgetUniversity)) {
            $("#BudgetTransactionMenuUl").append('<li><a href=javascript:createIncomeBudgetSanctionAtUniversity() id="incomeBudgetSanctionUniMaster"><i class="fa fa-bold"></i><span class="submenu-title">Income Budget Approval & Sanction @ DDO</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateLocationBudgetAllocation) || checkUserPrivelege(pvViewLocationBudgetAllocation)) {
            $("#BudgetTransactionMenuUl").append('<li><a href=javascript:createLocationWiseBudgetIncome() id="createLocationWiseBudgetIncomeMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Income Budget Approval @ Department Head</span></a></li>');
        }
        // if (checkUserPrivelege(pvCreateLocationBudgetAllocation) || checkUserPrivelege(pvViewLocationBudgetAllocation)) {
        $("#BudgetTransactionMenuUl").append('<li><a href=javascript:createDeptWiseBudgetIncome() id="createDeptWiseBudgetIncomeMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Income Budget Allocation @ Department</span></a></li>');
        $("#BudgetTransactionMenuUl").append('<li><a href=javascript:extraProvisionIncomeBudget() id="extraProvisionIncome" ><i class="fa fa-bold"></i><span class="submenu-title">Extra Provision Income</span></a></li>');
        // }
        if (checkUserPrivelege(pvCreateBudgetExpenses) || checkUserPrivelege(pvViewBudgetExpenses)) {
            $("#BudgetTransactionMenuUl").append('<li><a href=javascript:displayBudgetExpense() id="displayBudgetExpenseMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Create Expense Budget @ Department</span></a></li>');
        }
        //      if (checkUserPrivelege(pvCreateIncomeBudget) || checkUserPrivelege(pvViewIncomeBudget)) {
        $("#BudgetTransactionMenuUl").append('<li><a href=javascript:ConsolidateDepartmentExpenseBudget("dashboardBodyMainDiv") id="ConsolidateDepartmentExpense"><i class="fa fa-bold"></i><span class="submenu-title">Consolidated Expense Budget @ Department Head</span></a></li>');
//    }
        if (checkUserPrivelege(pvCreateBudgetConsolidatedExpenses) || checkUserPrivelege(pvViewBudgetConsolidatedExpenses)) {
            $("#BudgetTransactionMenuUl").append('<li><a href=javascript:budgetConsolidateExpensessBudgetmaster("dashboardBodyMainDiv") id="budgetConsolidateExpensessBudgetmasters" ><i class="fa fa-bold"></i><span class="submenu-title">Consolidated Expense Budget @ DDO</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateBugetExpensesUniversity) || checkUserPrivelege(pvViewBugetExpensesUniversity)) {
            $("#BudgetTransactionMenuUl").append('<li><a href=javascript:budgetSanctionExpensessBudgetmaster("dashboardBodyMainDiv") id="budgetSanctionExpensessBudgetmasters" ><i class="fa fa-bold"></i><span class="submenu-title">Expense Budget Approval & Sanction @ DDO</span></a></li>');
        }
        if (checkUserPrivelege(pvViewBudgetApprovalDDO)) {
            $("#BudgetTransactionMenuUl").append('<li><a href=javascript:approvalExpenseBudget() id="approvalExpenseBudgetMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Expense Budget Approval @ Department Head</span></a></li>');
        }
        // if (checkUserPrivelege(pvCreateLocationBudgetAllocation) || checkUserPrivelege(pvViewLocationBudgetAllocation)) {
        $("#BudgetTransactionMenuUl").append('<li><a href=javascript:createDeptWiseBudgetExpense() id="createDeptWiseBudgetExpenseMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Expense Budget Allocation @ Department</span></a></li>');
        // }
        $("#BudgetTransactionMenuUl").append('<li><a href=javascript:extraProvisionExpenseBudget() id="extraProvisionexpense" ><i class="fa fa-bold"></i><span class="submenu-title">Extra Provision Expense</span></a></li>');
        if (checkUserPrivelege(pvViewBudgetReAppropriation)) {
            $("#BudgetTransactionMenuUl").append('<li><a href=javascript:budgetReAppropriation("dashboardBodyMainDiv") id="budgetReAppropriationMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Budget Re-Appropriation</span></a></li>');
        }

        $("#budgetSanctionExpensessBudgetmasters,#approvalExpenseBudgetMaster,#extraProvisionexpense,#extraProvisionIncome,#budgetReAppropriationMaster,#createDeptWiseBudgetExpenseMaster,#displayBudgetIncomeTransactionMaster,#ConsolidateDepartmentIncome,#displayBudgetExpenseMaster,#ConsolidateDepartmentExpense,#budgetConsolidateIncomeBudgetmasters,#budgetConsolidateExpensessBudgetmasters,#incomeBudgetSanctionUniMaster,#createDeptWiseBudgetIncomeMaster,#createLocationWiseBudgetIncomeMaster,#displayBudgetExpenseMaster").click(function() {
            $(this).parent().siblings().children("a").css("color", "white");
            $(this).css("color", "red");
            $(this).siblings().css("color", "white");
        })
        $('#side-menu').metisMenu();
    }
    else if (checkUserRole(rlBudgetUser))
    {
        $.get(server_base_url + "/budget/GetDepartmentBasedOnEmployee", {
            empid: getUserSessionElement(seLoggedInEmployeeId),
            condition: "true"
        }).done(function(pdata) {
            pdata = JSON.parse(pdata);
            if (pdata == "500" || pdata == "501")
            {
                if (checkUserPrivelege(pvCreateIncomeBudget) || checkUserPrivelege(pvViewIncomeBudget)) {
                    $("#BudgetTransactionMenuUl").append('<li><a href=javascript:displayBudgetIncomeTransaction() id="displayBudgetIncomeTransactionMaster"><i class="fa fa-bold"></i><span class="submenu-title">Create Income Budget @ Department</span></a></li>');
                }
                $("#BudgetTransactionMenuUl").append('<li><a href=javascript:createDeptWiseBudgetIncome() id="createDeptWiseBudgetIncomeMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Income Budget Allocation @ Department</span></a></li>');
             //   $("#BudgetTransactionMenuUl").append('<li><a href=javascript:extraProvisionIncomeBudget() id="extraProvisionIncome" ><i class="fa fa-bold"></i><span class="submenu-title">Extra Provision Income</span></a></li>');
                if (checkUserPrivelege(pvCreateBudgetExpenses) || checkUserPrivelege(pvViewBudgetExpenses)) {
                    $("#BudgetTransactionMenuUl").append('<li><a href=javascript:displayBudgetExpense() id="displayBudgetExpenseMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Create Expense Budget @ Department</span></a></li>');
                }
                $("#BudgetTransactionMenuUl").append('<li><a href=javascript:createDeptWiseBudgetExpense() id="createDeptWiseBudgetExpenseMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Expense Budget Allocation @ Department</span></a></li>');
               // $("#BudgetTransactionMenuUl").append('<li><a href=javascript:extraProvisionExpenseBudget() id="extraProvisionexpense" ><i class="fa fa-bold"></i><span class="submenu-title">Extra Provision Expense</span></a></li>');
                $("#budgetSanctionExpensessBudgetmasters,#approvalExpenseBudgetMaster,#extraProvisionexpense,#extraProvisionIncome,#budgetReAppropriationMaster,#createDeptWiseBudgetExpenseMaster,#displayBudgetIncomeTransactionMaster,#ConsolidateDepartmentIncome,#displayBudgetExpenseMaster,#ConsolidateDepartmentExpense,#budgetConsolidateIncomeBudgetmasters,#budgetConsolidateExpensessBudgetmasters,#incomeBudgetSanctionUniMaster,#createDeptWiseBudgetIncomeMaster,#createLocationWiseBudgetIncomeMaster,#displayBudgetExpenseMaster").click(function() {
                    $(this).parent().siblings().children("a").css("color", "white");
                    $(this).css("color", "red");
                    $(this).siblings().css("color", "white");
                })
                $('#side-menu').metisMenu();
            } else
            {
                if (checkUserPrivelege(pvCreateIncomeBudget) || checkUserPrivelege(pvViewIncomeBudget)) {
                    $("#BudgetTransactionMenuUl").append('<li><a href=javascript:displayBudgetIncomeTransaction() id="displayBudgetIncomeTransactionMaster"><i class="fa fa-bold"></i><span class="submenu-title">Create Income Budget @ Department</span></a></li>');
                }
                $("#BudgetTransactionMenuUl").append('<li><a href=javascript:ConsolidateDepartmentIncomeBudget("dashboardBodyMainDiv") id="ConsolidateDepartmentIncome"><i class="fa fa-bold"></i><span class="submenu-title">Consolidated Income Budget @ Department Head</span></a></li>');
                if (checkUserPrivelege(pvCreateLocationBudgetAllocation) || checkUserPrivelege(pvViewLocationBudgetAllocation)) {
                    $("#BudgetTransactionMenuUl").append('<li><a href=javascript:createLocationWiseBudgetIncome() id="createLocationWiseBudgetIncomeMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Income Budget Approval @ Department Head</span></a></li>');
                }
                $("#BudgetTransactionMenuUl").append('<li><a href=javascript:createDeptWiseBudgetIncome() id="createDeptWiseBudgetIncomeMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Income Budget Allocation @ Department</span></a></li>');
             //   $("#BudgetTransactionMenuUl").append('<li><a href=javascript:extraProvisionIncomeBudget() id="extraProvisionIncome" ><i class="fa fa-bold"></i><span class="submenu-title">Extra Provision Income</span></a></li>');
                if (checkUserPrivelege(pvCreateBudgetExpenses) || checkUserPrivelege(pvViewBudgetExpenses)) {
                    $("#BudgetTransactionMenuUl").append('<li><a href=javascript:displayBudgetExpense() id="displayBudgetExpenseMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Create Expense Budget @ Department</span></a></li>');
                }
                $("#BudgetTransactionMenuUl").append('<li><a href=javascript:ConsolidateDepartmentExpenseBudget("dashboardBodyMainDiv") id="ConsolidateDepartmentExpense"><i class="fa fa-bold"></i><span class="submenu-title">Consolidate Expense Budget @ Department Head</span></a></li>');
                if (checkUserPrivelege(pvViewBudgetApprovalDDO)) {
                    $("#BudgetTransactionMenuUl").append('<li><a href=javascript:approvalExpenseBudget() id="approvalExpenseBudgetMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Expense Budget Approval @ Department Head</span></a></li>');
                }
                $("#BudgetTransactionMenuUl").append('<li><a href=javascript:createDeptWiseBudgetExpense() id="createDeptWiseBudgetExpenseMaster" ><i class="fa fa-bold"></i><span class="submenu-title">Expense Budget Allocation @ Department</span></a></li>');
             //   $("#BudgetTransactionMenuUl").append('<li><a href=javascript:extraProvisionExpenseBudget() id="extraProvisionexpense" ><i class="fa fa-bold"></i><span class="submenu-title">Extra Provision Expense</span></a></li>');
                $("#budgetSanctionExpensessBudgetmasters,#approvalExpenseBudgetMaster,#extraProvisionexpense,#extraProvisionIncome,#budgetReAppropriationMaster,#createDeptWiseBudgetExpenseMaster,#displayBudgetIncomeTransactionMaster,#ConsolidateDepartmentIncome,#displayBudgetExpenseMaster,#ConsolidateDepartmentExpense,#budgetConsolidateIncomeBudgetmasters,#budgetConsolidateExpensessBudgetmasters,#incomeBudgetSanctionUniMaster,#createDeptWiseBudgetIncomeMaster,#createLocationWiseBudgetIncomeMaster,#displayBudgetExpenseMaster").click(function() {
                    $(this).parent().siblings().children("a").css("color", "white");
                    $(this).css("color", "red");
                    $(this).siblings().css("color", "white");
                })
                $('#side-menu').metisMenu();

            }
        });


    }

}

function budgetReportTab() {
    prepareSideBar();

    $("#dashboardBodyMainDiv").text("");
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-bold"></i><span class="menu-title">Budget Report</span><span class="fa arrow"></span></a><ul class="nav nav-second-level" id="budgetReportMenuUl" /></li>');
    if (checkUserPrivelege(pvBudgetReportView)) {
        $("#budgetReportMenuUl").append('<li><a href=javascript:createBudgetReport("dashboardBodyMainDiv") id="budgetReportSideMenu"><i class="fa fa-bold"></i><span class="submenu-title">Budget Report</span></a></li>');
    }
    //  if (checkUserPrivelege(pvBudgetReportView)) {
    $("#budgetReportMenuUl").append('<li><a href=javascript:budgetReAppropriationReport("dashboardBodyMainDiv") id="budgetReaproReportSideMenu"><i class="fa fa-bold"></i><span class="submenu-title">Budget Re Apropriation Report</span></a></li>');
    //}
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> >><a href="javascript:void(0)" data-toggle="tab" onclick="budgetReportTab()">Budget Report</a>');
    $("#budgetReportSideMenu,#budgetReaproReportSideMenu").click(function() {
        $(this).parent().siblings().children("a").css("color", "white");
        $(this).css("color", "red");
        $(this).siblings().css("color", "white");
    });

    $('#side-menu').metisMenu();
}
