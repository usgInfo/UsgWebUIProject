/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayHrmsHorizontalBar() {

    $("#dashboardBodyMainDiv").text("");
    $("#side-menu").text("");
    prepareSideBar();
    $("#dashboardTitleMainDiv").text("").append('<label>HRMS</label>');
    $("#dashboardOrderListId").text("");
    $("#dashboardOrderListId").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a>');
    $("#dashboardBodyMainDiv").append('<div id="hrmsHoarizontalBarId" />');
    $("#hrmsHoarizontalBarId").append('<div id="hrmsHoarizontalMainId" class="row" />');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS Module</a>');
//    $("#hrmsHoarizontalBarSubId").append('<div id="hrmsHoarizontalMainId" style="background:#00FFFF;" class="col-lg-12"><center><h3><strong>HRMS Module</strong></h3></center></div>');
    $("#hrmsHoarizontalMainId").append('<ul id="hrmsHorizontalUlId" class="nav nav-tabs ul-edit nav-justified" />');
    if (checkUserRole(rlHRMSAdmin) || checkUserRole(rlSuperAdmin)) {
        $("#hrmsHorizontalUlId").append('<li><a href="#profile6" data-toggle="tab" onclick="hrmsCommonMasterTabs()"><strong>Common Master</strong></a></li>');

        $("#hrmsHorizontalUlId").append('<li><a href="javascript:hrmsMenuTabs()"  ><strong>Salary Master</a></strong></li>');
    }
    if (checkUserRole(rlHRMSAdmin) || checkUserRole(rlSuperAdmin) || checkUserRole(rlHRMSUser)) {
        $("#hrmsHorizontalUlId").append('<li><a href="#profile6" data-toggle="tab" onclick="hrmsEmployeeMasterTabs()"><strong>Employee Master</a></strong></li>');
    }

// analytics
//    $("#dashboardBodyMainDiv").append("<div class='row' id='displayHRMSAnalytics' />");
//    $("#displayHRMSAnalytics").append("<div class='row' id='displayEmployeeCountByFY' />");
//    $("#displayHRMSAnalytics").append("<div class='row' id='displayEmployeeCountByDDO' />");
//    $("#displayHRMSAnalytics").append("<div class='row' id='displayVacancyStatus' />");

//    $("#hrmsHoarizontalBarId").append('<br /><center><div id="analyticsRow0" class="row"><h4><b>Financial Year : ' + getUserSessionElement(seCurrentFinancialYear) + '</b></h4></div></center>');
    $("#hrmsHoarizontalBarId").append('<br /><div id="analyticRow1" class="row" />');
    $("#analyticRow1").text("").append('<center><div id="displayEmployeeCountByFY" class="col-md-6" /></center>');
    $("#analyticRow1").append('<center><div id="displayEmployeeCountByDDO" class="col-md-6" /></center>');

    $("#hrmsHoarizontalBarId").append('<br /><div id="analyticRow2" class="row" />');
    $("#analyticRow2").text("").append('<center><div id="displayVacancyStatus" class="col-md-12" /></center>');

    // displayEmployeeCountByFY
    $.get(server_base_url + "/CommonAnalytics", {
        analyticsType: "EmployeeCountByFY",
        ddo: getUserSessionElement(seDDOId)
    }).done(function (data) {
        if (data.status == "failure") {
            $("#displayEmployeeCountByFY").text("").append("<center><span>Data not available</span><center>");
        } else {

//            alert(JSON.stringify(data));
            //data = {"2017": 1, "2016": 14, "2019": 0, "2018": 0, "2020": 0, "2014": 1, "2015": 0, "2012": 0, "2013": 0};
            var chartData = [];
            $.each(data, function (index, value) {
                var temp = {"name": index,
                    "y": value
                }
                chartData.push(temp);
            });
            // Create the chart
            createColumnGraph("displayEmployeeCountByFY", chartData, "Employee count by FY");
        }

    });

    // displayEmployeeCountByDDO
    $.get(server_base_url + "/CommonAnalytics", {
        analyticsType: "EmployeeCountByDDO",
        ddo: getUserSessionElement(seDDOId)
    }).done(function (data) {
        //data = {"Mahatma Gandhi University": 4, "GAT": 0, "test": 0, "JNTU": 0, "hyderabad university": 0, "Guntur": 0, "Uttar Pradesh": 0, "VTU": 0, "ddo": 0, "Bangalore University": 0, "TEST": 0, "swaroop": 18, "KAKATIYAUNIVERSITY": 1, "ANDHRA UNIVERSITY": 2, "JNTU ANATHAPUR": 0, "punjab": 0, "REDDY": 10, "IIT Hyderabad": 5, "Gujrat": 3, "SV UNIVERSITY": 4, "ANNA UNIVERSITY": 0, "ads": 0, "IIT MADRAS": 6, "Punjab": 0}
        var chartData = [];
        $.each(data, function (index, value) {
            var temp = {
                "name": index,
                "y": value
            }
            chartData.push(temp);
        });
        // Create the chart
        createColumnGraph("displayEmployeeCountByDDO", chartData, "Employee count by DDO");

    });

    // displayVacancyStatus
    $.get(server_base_url + "/CommonAnalytics", {
        analyticsType: "VacancyStatus",
        ddo: getUserSessionElement(seDDOId)
    }).done(function (data) {
//        data = {"null": {"total": 12}, "A": {"total": 37, "filled": 2}, "OTHER": {"total": 154, "filled": 3},
//            "Qwerty": {"total": 14, "filled": 1}};
        var categories = [];
        var vacancyList = [];
        var filledList = [];
        $.each(data, function (index, value) {
            categories.push(index);
            var total = (value == null || value == "" || value == undefined || value.total == null || value.total == "" || value.total == undefined) ? 0 : parseInt(value.total);
            var filled = (value == null || value == "" || value == undefined || value.filled == null || value.filled == "" || value.filled == undefined) ? 0 : parseInt(value.filled);
            vacancyList.push((total - filled));
            filledList.push(filled);
        });
        var series = [{
                "color": 'green',
                name: 'Filled',
                data: filledList
            }, {
                "color": Highcharts.Color('#7cb5ec').brighten(0.0).get('rgb'),
                name: 'Vacany',
                data: vacancyList
            }];
        // Create the chart
        var chartdata = {
            chart: {renderTo: "displayVacancyStatus", type: 'column'},
            title: {text: 'Category wise post availability'},
            xAxis: {categories: categories},
            yAxis: {min: 0, title: {text: '# Posts'}},
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {column: {stacking: 'percent'}},
            series: series
        };
        var chart = new Highcharts.Chart(chartdata);
    });
}


function createColumnGraph(renderTo, chartData, title) {
    var chart = {
        chart: {renderTo: renderTo, type: 'column'},
        title: {text: title},
        //subtitle: {text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: '# Employees'}},
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
                colorByPoint: true,
                data: chartData
            }],
    };
//    chart.series[0].data[0].color = {radialGradient: {cx: 0.5, cy: 0.3, r: 0.7}, stops: [[0, '#00CC00'], [1, Highcharts.Color('#00CC00').brighten(-0.3).get('rgb')]]};
//    chart.series[0].data[1].color = {radialGradient: {cx: 0.5, cy: 0.3, r: 0.7}, stops: [[0, '#FFA500'], [1, Highcharts.Color('#FFA500').brighten(-0.3).get('rgb')]]};
    var chart = new Highcharts.Chart(chart);
}


function hrmsMenuTabs() {

    //prepareSideBarForHrms();
    prepareSideBar();
    if (checkUserRole(rlHRMSAdmin) || checkUserRole(rlSuperAdmin)) {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>');
        $("#dashboardBodyMainDiv").text("");
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Masters</a>');
        $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-h-square"></i><span class="menu-title">Salary Master</span><span class="fa arrow"></span></a><ul class="nav nav-second-level" id="hrmsCommonMenuUl" /></li>');
        //li-5 sub menus
        if (checkUserPrivelege(pvCreateBank) || checkUserPrivelege(pvViewBank)) {
            $("#hrmsCommonMenuUl").append('<li><a href=javascript:bankmaster("dashboardBodyMainDiv") id="bankMaster"><i class="fa fa-h-square"></i><span class="submenu-title">Bank Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateDepartment) || checkUserPrivelege(pvViewDepartment)) {
            $("#hrmsCommonMenuUl").append('<li><a href=javascript:departmentmaster("dashboardBodyMainDiv") id="departmentmaster"><i class="fa fa-h-square"></i><span class="submenu-title">Department Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateSection) || checkUserPrivelege(pvViewSection)) {
            $("#hrmsCommonMenuUl").append('<li><a href="javascript:sectionMaster()" id="sectionMaster"><i class="fa fa-h-square"></i><span class="submenu-title">Section Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateDiscipline) || checkUserPrivelege(pvViewDiscipline)) {
            $("#hrmsCommonMenuUl").append('<li><a href="javascript:disciplineMaster()" id="disciplineMaster"><i class="fa fa-h-square"></i><span class="submenu-title">Discipline Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateAssociation) || checkUserPrivelege(pvViewAssociation)) {
            $("#hrmsCommonMenuUl").append('<li><a href="javascript:displayAssociationMaster()" id="displayAssociationMaster"><i class="fa fa-h-square"></i><span class="submenu-title">Association Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateCityCategory) || checkUserPrivelege(pvViewCityCategory)) {
            $("#hrmsCommonMenuUl").append('<li><a href="javascript:cityCategoryMaster()" id="cityCategoryMaster"><i class="fa fa-h-square"></i><span class="submenu-title">City Category Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateCity) || checkUserPrivelege(pvViewCity)) {
            $("#hrmsCommonMenuUl").append('<li><a href="javascript:displayCityMaster()" id="CityMaster"><i class="fa fa-h-square"></i><span class="submenu-title">City Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateGISGroup) || checkUserPrivelege(pvViewGISGroup)) {
            $("#hrmsCommonMenuUl").append('<li><a href=javascript:displayGISgroup() id="GISgroup"><i class="fa fa-h-square"></i><span class="submenu-title">GIS Group Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateGrade) || checkUserPrivelege(pvViewGrade)) {
            $("#hrmsCommonMenuUl").append('<li><a href=javascript:grademaster("dashboardBodyMainDiv") id="grademaster"><i class="fa fa-h-square"></i><span class="submenu-title">Grade Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateClass) || checkUserPrivelege(pvViewClass)) {
            $("#hrmsCommonMenuUl").append('<li><a href=javascript:classmaster("dashboardBodyMainDiv") id="classmaster"><i class="fa fa-h-square"></i><span class="submenu-title">Class Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateDesignation) || checkUserPrivelege(pvViewDesignation)) {
            $("#hrmsCommonMenuUl").append('<li><a href=javascript:designationmaster() id="designationmaster"><i class="fa fa-h-square"></i><span class="submenu-title">Designation Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateSalaryHead) || checkUserPrivelege(pvViewSalaryHead)) {
            $("#hrmsCommonMenuUl").append('<li><a href=javascript:salaryheadmaster("dashboardBodyMainDiv") id="salaryheadmaster"><i class="fa fa-h-square"></i><span class="submenu-title">Salary Head Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateHeadSlab) || checkUserPrivelege(pvViewHeadSlab)) {
            $("#hrmsCommonMenuUl").append('<li><a href=javascript:headslabmaster("dashboardBodyMainDiv") id="headslabmaster"><i class="fa fa-h-square"></i><span class="submenu-title">Head Slab Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateQuarterCategory) || checkUserPrivelege(pvViewQuarterCategory)) {
            $("#hrmsCommonMenuUl").append('<li><a href=javascript:quartercategorymaster("dashboardBodyMainDiv") id="quartercategorymaster"><i class="fa fa-h-square"></i><span class="submenu-title">Quarter Category Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateQuarter) || checkUserPrivelege(pvViewQuarter)) {
            $("#hrmsCommonMenuUl").append('<li><a href=javascript:quartermaster("dashboardBodyMainDiv") id="quartermaster"><i class="fa fa-h-square"></i><span class="submenu-title">Quarter Master</span></a></li>');
        }
        $("#bankMaster,#departmentmaster,#sectionMaster,#disciplineMaster,#displayAssociationMaster,#cityCategoryMaster,#CityMaster,#GISgroup,#grademaster,#classmaster,#designationmaster,#salaryheadmaster,#headslabmaster,#quartercategorymaster,#quartermaster").click(function () {
            $(this).parent().siblings().children("a").css("color", "white");
            $(this).css("color", "red");
            $(this).siblings().css("color", "white");
        })
        $('#side-menu').metisMenu();
    }
}

function hrmsCommonMasterTabs() {
    // prepareSideBar();
    prepareSideBar();
    if (checkUserRole(rlHRMSAdmin) || checkUserRole(rlSuperAdmin)) {
        $("#dashboardBodyMainDiv").text("");
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>');
        // $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> > <label>Common Master</label>');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsCommonMasterTabs()">Common Masters</a>');

        $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-h-square"></i><span class="menu-title">Common Master</span><span class="fa arrow"></span></a><ul class="nav nav-second-level" id="hrmsCommonMasterMenuUl" /></li>');
        if (checkUserPrivelege(pvCreateFinancialYear) || checkUserPrivelege(pvViewFinancialYear)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href=javascript:displayBudgetFinacialYear("HRMS") id="financialYear"><i class="fa fa-h-square"></i><span class="submenu-title">Financial Year Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateFormula) || checkUserPrivelege(pvViewFormula)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:void(displayFormulaForm())" id="formulaMaster"><i class=" fa fa-h-square"></i><span class="submenu-title">Formula Master</span></a></li>');
        }
        $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:void(dispalyhrmsCommonRelation())" id="relationMaster"><i class="fa fa-h-square"></i><span class="submenu-title">Relation Master</span></a></li>');
        if (checkUserPrivelege(pvCreateMarital) || checkUserPrivelege(pvViewMarital)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:void(dispalyHrmsCommonMarital())" id="maritalMaster"><i class="fa fa-h-square"></i><span class="submenu-title">Marital Master</span></a></li>');
        }
        $("#hrmsCommonMasterMenuUl").append('<li><a href=javascript:changeFinancialYearMaster("dashboardBodyMainDiv","HRMS") id="changeFinancialYear"><i class="fa fa-h-square" id="accountSubTitleId"></i><span class="submenu-title">Change Financial Year</span></a></li>');
        if (checkUserPrivelege(pvCreateSalutation) || checkUserPrivelege(pvViewSalutation)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:void(dispalyhrmsCommonSalution())" id="salutationMaster"><i class="fa fa-h-square"></i><span class="submenu-title">Salutation Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateCategory) || checkUserPrivelege(pvViewCategory)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:dispalyHrmsCommonCategory()" id="categoryMaster"><i class="fa fa-h-square"></i><span class="submenu-title">Category Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateReligion) || checkUserPrivelege(pvViewReligion)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:void(dispalyhrmsCommonReligion())" id="religionMaster"><i class="fa fa-h-square"></i><span class="submenu-title">Religion Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateNature) || checkUserPrivelege(pvViewNature)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:void(dispalyhrmsCommonNature())" id="natureMaster"><i class="fa fa-h-square"></i><span class="submenu-title">Nature Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateLoanNature) || checkUserPrivelege(pvViewLoanNature)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:void(dispalyhrmsCommonLoanNatureMaster())" id="loanNatureMaster"><i class="fa fa-h-square"></i><span class="submenu-title">Loan Nature Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateGadNongad) || checkUserPrivelege(pvViewGadNongad)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:void(dispalyhrmsCommonLoanGadNonGadMaster())" id="gadNongadMaster"><i class=" fa fa-h-square"></i><span class="submenu-title">Gad NonGad Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateFundType) || checkUserPrivelege(pvViewFundType)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href=javascript:displayBudgetFundType("dashboardBodyMainDiv","HRMS") id="fundTypeMaster"><i class=" fa fa-h-square"></i><span class="submenu-title">Fund Type Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateBudgetHead) || checkUserPrivelege(pvViewBudgetHead)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href=javascript:dispalyhrmsCommonBudgetHeadMaster("displayHrmsHorizontalBar","HRMS","hrmsCommonMasterTabs") id="budgetHeadMaster"><i class="fa fa-h-square"></i><span class="submenu-title">Budget Head Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateFundHeadMapping) || checkUserPrivelege(pvViewFundHeadMapping)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href=javascript:dispalyhrmsCommonFundHeadMapping("displayHrmsHorizontalBar","HRMS","hrmsCommonMasterTabs") id="fundHeadMapping"><i class=" fa fa-h-square"></i><span class="submenu-title">Fund Head Mapping</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateDesgFundTypeMapping) || checkUserPrivelege(pvViewDesgFundTypeMapping)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:void(dispalyhrmsCommonDesignationFundTypeMapping())" id="fundTypeMapping"><i class=" fa fa-h-square"></i><span class="submenu-title">Designation Fund Type Mapping</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateDDODepartmentMapping) || checkUserPrivelege(pvViewDDODepartmentMapping)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:void(displayhrmsDDODepartment())" id="ddoDepartmentMaster"><i class=" fa fa-h-square"></i><span class="submenu-title">DDO Department Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreatePFType) || checkUserPrivelege(pvViewPFType)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:void(displayPFType())" id="pfTypeMaster"><i class=" fa fa-h-square"></i><span class="submenu-title">PF Type Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateSalaryBillType) || checkUserPrivelege(pvViewSalaryBillType)) {
            $("#hrmsCommonMasterMenuUl").append('<li><a href="javascript:void(createSalaryBillForm())" id="salaryBillTypeMaster"><i class=" fa fa-h-square"></i><span class="submenu-title">Salary Bill Type</span></a></li>');
        }
        $("#financialYear,#formulaMaster,#relationMaster,#maritalMaster,#changeFinancialYear,#salutationMaster,#categoryMaster,#religionMaster,#natureMaster,#loanNatureMaster,#gadNongadMaster,#fundTypeMaster,#budgetHeadMaster,#fundHeadMapping,#fundTypeMapping,#ddoDepartmentMaster,#pfTypeMaster,#salaryBillTypeMaster").click(function () {
            $(this).parent().siblings().children("a").css("color", "white");
            $(this).css("color", "red");
            $(this).siblings().css("color", "white");
        })
        $('#side-menu').metisMenu();
    }

}

function hrmsEmployeeMasterTabs() {
    prepareSideBar();
    if (checkUserRole(rlHRMSAdmin) || checkUserRole(rlSuperAdmin) || checkUserRole(rlHRMSUser)) {
        $("#dashboardBodyMainDiv").text("");
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> >> <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsEmployeeMasterTabs()">Employee Master</a>');
        $("#side-menu").append('<li><a href="javascript:void(0)"><i class="fa fa-h-square"></i><span class="menu-title">Employee Master</span><span class="fa"></span></a><ul class="nav nav-second-level" id="hrmsEmployeeMenuUl" /></li>');
        //sub menus
        if (checkUserPrivelege(pvCreateEmployee) || checkUserPrivelege(pvViewEmployee)) {
            $("#hrmsEmployeeMenuUl").append('<li><a href=javascript:employeemaster("dashboardBodyMainDiv") id="createEmployee"><i class="fa fa-h-square"></i><span class="submenu-title">Create and Manage Employee</span></a></li>');
        }
        if (checkUserPrivelege(pvViewEmployee) || checkUserPrivelege(pvUpdateEmployee) || checkUserPrivelege(pvDeleteEmployee)) {
            $("#hrmsEmployeeMenuUl").append('<li><a href=javascript:searchemployeemaster("dashboardBodyMainDiv") id="searchEmployee"><i class="fa fa-h-square"></i><span class="submenu-title" >Search Employee</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateEmployeeDemographics) || checkUserPrivelege(pvViewEmployeeDemographics)) {
            $("#hrmsEmployeeMenuUl").append('<li><a href=javascript:addDemographic() id="employeeDemographic"><i class="fa fa-h-square"></i><span class="submenu-title">Employee Demographic</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateEmployeeJob) || checkUserPrivelege(pvViewEmployeeJob)) {
            $("#hrmsEmployeeMenuUl").append('<li><a href=javascript:displayPreviousEmployeeDetails() id="previousJob"><i class="fa fa-h-square"></i><span class="submenu-title">Employee Previous Job Details</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateEmployeeDetails) || checkUserPrivelege(pvViewEmployeeDetails)) {
            $("#hrmsEmployeeMenuUl").append('<li><a href=javascript:addEmployeeNominee() id="manageEmployee"><i class="fa fa-h-square"></i><span class="submenu-title" >Manage Employee Details</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateEmployeeAssign) || checkUserPrivelege(pvViewEmployeeAsign)) {
            $("#hrmsEmployeeMenuUl").append('<li><a href=javascript:displayEmployeeHeadAssign() id="employeeHeadAssign"><i class="fa fa-h-square"></i><span class="submenu-title">Employee Head Assign</span></a></li>');
        }

      //  if (checkUserPrivelege(pvCreateEmployeeAssign) || checkUserPrivelege(pvViewEmployeeAsign)) {
            $("#hrmsEmployeeMenuUl").append('<li><a href=javascript:createEmployeeDepartmentMapping("dashboardBodyMainDiv") id="employeeDepartmentMapping"><i class="fa fa-h-square"></i><span class="submenu-title">Employee Department Mapping</span></a></li>');
     //   }


        $("#createEmployee,#searchEmployee,#employeeDemographic,#previousJob,#manageEmployee,#employeeHeadAssign,#employeeDepartmentMapping").click(function () {
            $(this).parent().siblings().children("a").css("color", "white");
            $(this).css("color", "red");
            $(this).siblings().css("color", "white");
        })
        $('#side-menu').metisMenu();
    }
}
