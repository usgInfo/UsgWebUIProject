/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayPensionHorizontalBar() {



    $("#dashboardBodyMainDiv").text("");
    $("#dashboardOrderListId").text("");
    $("#side-menu").text("");
    prepareSideBar();
    $("#dashboardTitleMainDiv").text("").append('<label>Pension</label>');
    //$("#dashboardOrderListId").text("");
    $("#dashboardOrderListId").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPensionHorizontalBar()">Pension</a>');
    $("#dashboardBodyMainDiv").append('<div id="pensionHoarizontalBarId" />');
    $("#pensionHoarizontalBarId").append('<div id="pensionHoarizontalMainId" class="row" />');
    $("#pensionHoarizontalMainId").append('<ul id="pensionHorizontalUlId" class="nav nav-tabs ul-edit nav-justified"/>');
    $("#pensionHorizontalUlId").append('<li><a href="#home6" data-toggle="tab" onclick="pensionMasters()"><strong>Pension Master</strong></a></li>');
    $("#pensionHorizontalUlId").append('<li><a href="#home6" data-toggle="tab" onclick="pensionTransactions()"><strong>Pension Transaction</strong></a></li>');
    $("#pensionHorizontalUlId").append('<li><a href="#home6" data-toggle="tab" onclick="pensionReports()"><strong>Pension Report</strong></a></li>');


}

function pensionMasters() {
    prepareSideBar();
    // prepareSideBarForHrms();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label> >>Pension Master</label>');
    $("#dashboardBodyMainDiv").text("");
    $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-h-square"></i><span class="menu-title">Pension Master</span><span class="fa"></span></a><ul class="nav nav-second-level" id="pensionMasterMenuUl" /></li>');
    //li-5 sub menus
    $("#pensionMasterMenuUl").append('<li><a href=javascript:displayPensionMaster("dashboardBodyMainDiv") id="pensionBankSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Pension Master</span></a></li>');
    $("#pensionMasterMenuUl").append('<li><a href=javascript:displayPensionBank("dashboardBodyMainDiv") id="pensionBankSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Bank Master</span></a></li>');
//    $("#pensionMasterMenuUl").append('<li><a href=javascript:displayPensionClassification("dashboardBodyMainDiv") id="pensionClassificationSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Pension Classification</span></a></li>');
//    $("#pensionMasterMenuUl").append('<li><a href=javascript:displayPensionType("dashboardBodyMainDiv") id="pensionTypeSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Pension Type</span></a></li>');
    $("#pensionMasterMenuUl").append('<li><a href=javascript:displayPensionAssociation("dashboardBodyMainDiv") id="pensionAssociationSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Association Master</span></a></li>');
    $("#pensionMasterMenuUl").append('<li><a href=javascript:displayPensionArrear("dashboardBodyMainDiv") id="pensionManageArrearSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Manage Pension Arrear</span></a></li>');
//    $("#pensionMasterMenuUl").append('<li><a href=javascript:displayPensionFormula("dashboardBodyMainDiv") id="pensionFormulaSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Pension Formula</span></a></li>');
//    $("#pensionMasterMenuUl").append('<li><a href=javascript:displayPensionHead("dashboardBodyMainDiv") id="pensionHeadSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Pension Head</span></a></li>');
//    $("#pensionMasterMenuUl").append('<li><a href=javascript:displayPensionHeadSlab("dashboardBodyMainDiv")><i class="fa fa-h-square"></i><span class="submenu-title">Pension Head Slab</span></a></li>');
    $("#pensionMasterMenuUl").append('<li><a href=javascript:displayPensionEmployeeDetails("dashboardBodyMainDiv") id="pensionEmployeeSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Pension Employee</span></a></li>');
//    $("#pensionMasterMenuUl").append('<li><a href=javascript:displayPensionHeadAssign("dashboardBodyMainDiv") id="pensionHeadAssignSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Pension Head Assign</span></a></li>');
//    $("#pensionMasterMenuUl").append('<li><a href=javascript:displayPensionConfiguration("dashboardBodyMainDiv") id="pensionConfigurationSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Pension Configuration</span></a></li>');

    $('#side-menu').metisMenu();
    $("#pensionBankSideMenu,#pensionClassificationSideMenu,#pensionTypeSideMenu,#pensionAssociationSideMenu,#pensionManageArrearSideMenu,\n\
    #pensionFormulaSideMenu,#pensionHeadSideMenu,#pensionEmployeeSideMenu,#pensionHeadAssignSideMenu,\n\
    #pensionConfigurationSideMenu").click(function () {
        $(this).parent().siblings().children("a").css("color", "white");
        $(this).css("color", "red");
        $(this).siblings().css("color", "white");
    });
}

function pensionTransactions() {
    prepareSideBar();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label> >>Pension Transaction</label>');

    $("#dashboardBodyMainDiv").text("");


    $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-h-square"></i><span class="menu-title">Pension Transaction</span><span class="fa"></span></a><ul class="nav nav-second-level" id="pensionTransactionsMenuUl" /></li>');
    //li-5 sub menus
    $("#pensionTransactionsMenuUl").append('<li><a href=javascript:displayProcessPensionPage() id="processPensionSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Process Pension</span></a></li>');
    $("#pensionTransactionsMenuUl").append('<li><a href=javascript:displayManagepesionSalayDetailsPage("dashboardBodyMainDiv") id="managePensionSalarySideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Manage Pension Salary Details</span></a></li>');
    $("#pensionTransactionsMenuUl").append('<li><a href=javascript:displayPensionArearProcess() id="pensionArrearSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Pension Arrear Process</span></a></li>');
    $("#pensionTransactionsMenuUl").append('<li><a href=javascript:displayManagePensionArrearAdjustment() id="managePensionArrearAdjustmentSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Manage Pension Arrear Adjustment</span></a></li>');
    $("#pensionTransactionsMenuUl").append('<li><a href=javascript:displayPensionRevision("dashboardBodyMainDiv") id="pensionRevisionSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Pension Revision</span></a></li>');
    $('#side-menu').metisMenu();
    $("#processPensionSideMenu,#managePensionSalarySideMenu,#pensionArrearSideMenu,#managePensionArrearAdjustmentSideMenu,#pensionRevisionSideMenu").click(function () {
        $(this).parent().siblings().children("a").css("color", "white");
        $(this).css("color", "red");
        $(this).siblings().css("color", "white");
    });
}
function pensionReports() {
    prepareSideBar();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label> >>Pension Reports</label>');
    $("#dashboardBodyMainDiv").text("");
    $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-h-square"></i><span class="menu-title">Pension Reports</span><span class="fa"></span></a><ul class="nav nav-second-level" id="pensionReportsMenuUl" /></li>');

    $("#pensionReportsMenuUl").append('<li><a href=javascript:displayPensionBankDetails() id="pensionBankListDetailsSideMenu"><i class="fa fa-h-square"></i><span class="submenu-title">Pension Bank List</span></a></li>');

    $('#side-menu').metisMenu();
    $("#pensionBankListDetailsSideMenu").click(function () {
        $(this).parent().siblings().children("a").css("color", "white");
        $(this).css("color", "red");
        $(this).siblings().css("color", "white");
    });

}