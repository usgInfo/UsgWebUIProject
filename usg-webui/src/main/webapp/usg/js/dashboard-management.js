function prepareDashboard() {
    $("#dashboardTitleMainDiv").text("").append('<label>Home Page</label>');
    $("#dashboardOrderListId").text("");
    var getLocation = decodeURI(getUserSessionElement(seLocationObjects));
    getLocation = JSON.parse(getLocation);
//    alert(getUserSessionElement(seLocationId) + "---location length-" + getLocation.length + "---location-" + getLocation);

    if (getLocation != null && getLocation != undefined && getLocation != "") {
        if (getLocation.length == 1 || (getUserSessionElement(seLocationId) != null && getUserSessionElement(seLocationId) != undefined)) {
            if (getLocation.length == 1 && getLocation != undefined) {
                setUserSessionElement(seLocationId, getLocation);
            }
            preparePage();
        } else if (getLocation.length > 1 && (getUserSessionElement(seLocationId) == null || getUserSessionElement(seLocationId) == undefined)) {
            showLocationPopup();
        } else {
            //Have to Check The User is SUPERADMIN or Not.....
            //If SUPERADMIN ==> Prepare the dashboard...
            //If Other User ==> Dont Prepare the dashboard ...Beause atleast one location has to be required...
            if (checkUserRole(rlSuperAdmin)) {
                if (getUserSessionElement(seDDOId) == null || getUserSessionElement(seDDOId) == undefined || getUserSessionElement(seDDOId) == "undefined") {
                    showDDOLocationPopUp();
                }
            } else {
                alertPopUpMessage("User Needs atleast one active Location to login.");
                setTimeout(function() {
                    callSessionTimeout();
                }, 5000);
            }
        }
    } else {
        //Have to Check The User is SUPERADMIN or Not.....
        //If SUPERADMIN ==> Prepare the dashboard...
        //If Other User ==> Dont Prepare the dashboard ...Beause atleast one location has to be required...
        if (checkUserRole(rlSuperAdmin)) {
            if (getUserSessionElement(seDDOId) == null || getUserSessionElement(seDDOId) == undefined || getUserSessionElement(seDDOId) == "undefined" || getUserSessionElement(seDDOId) == "") {
                showDDOLocationPopUp();
            } else {
                prepareUserTopMenu();
                prepareSideBar();
                prepareBody();
            }
        } else {
            alertPopUpMessage("User Needs atleast one active Location to login. <strong>Redirecting to login page</strong>");
            setTimeout(function() {
                callSessionTimeout();
            }, 5000);
        }
    }


}
function showDDOLocationPopUp() {
    $("#popUpDiv").text("");
    $("#popUpDiv").append('<div class="modal fade bs-example-modal-sm" id="alertModalBox" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-hidden="true" class="modal fade" />');
    $("#alertModalBox").append('<button type="button" data-toggle="modal" data-target="#alertModalBox" id="alertPopup" style="display:none;"></button>');
    $("#alertModalBox").append('<div class="modal-dialog" id="alertModalMainDiv" />');
    $("#alertModalMainDiv").append('<div class="modal-content" id="alertModalSubMainDiv" />');
    $("#alertModalSubMainDiv").append('<div class="modal-body" id="alertModalBody" />');
    $("#alertModalSubMainDiv").append('<div  id="ErrorDivInLocationPopUp" />');
    $("#alertModalSubMainDiv").append('<input type="hidden"  id="ValidationCheckCondition" />');
    $("#alertModalSubMainDiv").append('<div class="modal-footer" id="alertModalFooter" />');
    $("#alertModalSubMainDiv").append('<div  id="alertModalButtonDiv" />');
    $("#alertModalBody").append('<div style="text-decoration: underline;"><center><h4><strong>Select DDO &  Location</strong></h4></center></div>');
    $("#alertModalFooter").append('<div><center><select class="form-control" id="popUpDDO"><option value="">----Select DDO----</option></select><center></div><br>');
    $("#alertModalFooter").append('<div><center><select class="form-control" id="popUpLocation"><option value="">----Select Location----</option></select><center></div>');
    $("#alertModalButtonDiv").append('<center><button class="btn btn-info" onclick="DDOLocationSelection()"><strong>Select</strong></button></center><br>');

    $("#popUpDDO").attr("onchange", "getLocationOnSelectionOfDDOInPopUp()");
    getDdoListForPopUp();
//    $("#alertPopup").click();

}
function getDdoListForPopUp() {
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null && pdata != fail && pdata != delete_map && pdata != notAllowed && pdata != null && pdata != statusException && pdata != unauthorized && pdata != invalidSession) {
            $("#popUpDDO").text("").append("<option value='' selected>---- Select DDO ----</option>");
            if (pdata.length > 0) {
                var j = 0;
                for (var i = 0; i < pdata.length; i++) {
                    $("#popUpDDO").append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].ddoName + "</option>");
                    j++;
                }
                if (j < 1) {
                    prepareUserTopMenu();
                    prepareSideBar();
                    prepareBody();
                } else {
                    $("#alertPopup").click();
                }
            }
        } else {
            prepareUserTopMenu();
            prepareSideBar();
            prepareBody();
        }
    });
}
function getLocationOnSelectionOfDDOInPopUp() {
    var ddo = $("#popUpDDO").val();
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getLocationBasedOnDdo
    }).done(function(pdata) {
        if (pdata != fail && pdata != delete_map && pdata != notAllowed && pdata != null && pdata != statusException && pdata != unauthorized && pdata != invalidSession)
        {
            $("#ValidationCheckCondition").val(checkDDOLocationBoth);
            $("#popUpLocation").text("").append("<option value = '' selected>---- Select Location ----</option>");
            var j = 0;
            for (var k = 0; k < pdata.length; k++) {
                $("#popUpLocation").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].locationName + "</option>");
                j++;
            }
            if (j < 1) {
                $("#popUpLocation").text("").append("<option value = '' selected>---- No Data Available ----</option>");
                displayLargeErrorMessagesInCenterInRed("ErrorDivInLocationPopUp", "Location is Not Mapped with This DDO.");
                $("#ValidationCheckCondition").val(checkDDOOnly);
            } else {
                $("#ValidationCheckCondition").val(checkDDOLocationBoth);
            }
        } else
        {
            $("#popUpLocation").text("").append("<option value = '' selected>---- No Data Available ----</option>");
            displayLargeErrorMessagesInCenterInRed("ErrorDivInLocationPopUp", "Location is Not Mapped with This DDO.");
            $("#ValidationCheckCondition").val(checkDDOOnly);
        }
    });
}
function showLocationPopup() {
    $("#popUpDiv").text("");
    $("#popUpDiv").append('<div class="modal fade bs-example-modal-sm" id="alertModalBox" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-hidden="true" class="modal fade" />');
    $("#alertModalBox").append('<button type="button" data-toggle="modal" data-target="#alertModalBox" id="alertPopup" style="display:none;"></button>');
    $("#alertModalBox").append('<div class="modal-dialog" id="alertModalMainDiv" />');
    $("#alertModalMainDiv").append('<div class="modal-content" id="alertModalSubMainDiv" />');
    $("#alertModalSubMainDiv").append('<div class="modal-body" id="alertModalBody" />');
    $("#alertModalSubMainDiv").append('<div  id="ErrorDivInLocationPopUp" />');
    $("#alertModalSubMainDiv").append('<div class="modal-footer" id="alertModalFooter" />');
    $("#alertModalSubMainDiv").append('<div  id="alertModalButtonDiv" />');
    $("#alertModalBody").append('<div style="text-decoration: underline;"><center><h4><strong>Select Location</strong></h4></center></div>');
    $("#alertModalFooter").append('<div><center><select class="form-control" id="popUpLocation"><option value="">----Select Location----</option></select><center></div>');
    $("#alertModalButtonDiv").append('<center><button class="btn btn-info" onclick="locationSelection()"><strong>Select</strong></button></center><br>');

    var getLocation = decodeURI(getUserSessionElement(seLocationObjects));
    getLocation = JSON.parse(getLocation);
    for (var k = 0; k < getLocation.length; k++) {
        $("#popUpLocation").append(getLocation[k]);
    }
    $("#alertPopup").click();
}

function preparePage() {
    $.post(server_base_url + "user/LocationSession/Update", {
        locationId: getUserSessionElement(seLocationId),
        userId: getUserSessionElement("userId")
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessages("authenticationMsgId", "Invalid username / password");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessages("authenticationMsgId", unauthorizedMessage);
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessages("authenticationMsgId", statusExceptionMessage);
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessages("authenticationMsgId", "No User available");
        } else {
            prepareUserTopMenu();
            prepareSideBar();
            prepareBody();
        }
    });
}

function locationSelection() {
    $("#ErrorDivInLocationPopUp").text("");
    var locationValue = $("#popUpLocation").val();
    if (!preValidation(locationValue)) {
        $("#alertPopup").click();
        setUserSessionElement(seLocationId, locationValue);
        preparePage();
//        prepareUserTopMenu();
//        prepareSideBar();
//        prepareBody();

    } else {
        displayLargeErrorMessagesInCenterInRed("ErrorDivInLocationPopUp", "Please Select The Location");
    }
}
function DDOLocationSelection() {
    $("#ErrorDivInLocationPopUp").text("");
    var ValidationCheckCondition = $("#ValidationCheckCondition").val();
    var popUpLocation = $("#popUpLocation").val();
    var popUpDDO = $("#popUpDDO").val();
    if (ValidationCheckCondition == checkDDOOnly) {
        if (!preValidation(popUpDDO)) {
            $("#alertPopup").click();
            setUserSessionElement(seDDOId, popUpDDO);
            prepareUserTopMenu();
            prepareSideBar();
            prepareBody();
        } else {
            displayLargeErrorMessagesInCenterInRed("ErrorDivInLocationPopUp", "Please Select The DDO");
        }
    } else if (ValidationCheckCondition == checkDDOLocationBoth) {
        if (!preValidation(popUpDDO)) {
            if (!preValidation(popUpLocation)) {
                $("#alertPopup").click();
                setUserSessionElement(seDDOId, popUpDDO);
                setUserSessionElement(seLocationId, popUpLocation);
                preparePage();
            } else {
                displayLargeErrorMessagesInCenterInRed("ErrorDivInLocationPopUp", "Please Select The Location");
            }
        } else {
            displayLargeErrorMessagesInCenterInRed("ErrorDivInLocationPopUp", "Please Select The Location");
        }
    } else {
        displayLargeErrorMessagesInCenterInRed("ErrorDivInLocationPopUp", "Please Select The DDO & Location");
    }
}

function prepareBody() {
//    $("#dashboardBodyMainDiv").text("").append('<div id="sum_box" class="row mbl"><div class="col-sm-6 col-md-4"><div class="panel profit db mbm" style="height:200px;"><div class="panel-body"><p class="description">Profit description</p><div class="progress progress-sm mbn"></div></div></div></div></div>');
    $("#dashboardBodyMainDiv").text("");
    $("#dashboardBodyMainDiv").append('<div id="widgetMainDivId1" class="container" /><br/>');
    $("#dashboardBodyMainDiv").append('<div id="widgetMainDivId2" class="container" /><br />');
    $("#dashboardBodyMainDiv").append('<div id="widgetMainDivId3" class="container" /><br/>');
    //widget 1
    $("#widgetMainDivId1").append('<div id="widgetSubMainDivId" class"col-lg-12"/>');

    if (checkUserRole(rlHRMSAdmin) || checkUserRole(rlHRMSUser) || checkUserRole(rlSuperAdmin)) {
        //HRMS
        $("#widgetSubMainDivId").append('<div class="col-sm-6 col-md-4" id="widgetOneMainDiv"/>');
        $("#widgetOneMainDiv").append('<div id="widgetOneSubMainId" onclick="displayHrmsHorizontalBar()" />');
        $("#widgetOneSubMainId").append('<img class="img-responsive" src="../images/HRMS.png">');
    }
    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlPayrollAdmin) || checkUserRole(rlPayrollUser)) {
        //Payroll
        $("#widgetSubMainDivId").append('<div class="col-sm-6 col-md-4" id="widgetSecMainDiv"/>');
        $("#widgetSecMainDiv").append('<div id="widgetSecSubMainId" onclick="displayPayrollHorizontalBar()" />');
        $("#widgetSecSubMainId").append('<img class="img-responsive" src="../images/Payroll.png">');
    }

    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlFinancialAdmin) || checkUserRole(rlFinancialUser)) {
        //Finance
        $("#widgetSubMainDivId").append('<div class="col-sm-6 col-md-4" id="widgetThirdMainDiv"/>');
        $("#widgetThirdMainDiv").append('<div id="widgetThirdSubMainId" onclick="displayFinanceHorizontalBar()" />');
        $("#widgetThirdSubMainId").append('<img class="img-responsive" src="../images/finance.png">');
    }

    //widegets row 2

    $("#widgetMainDivId2").append('<div id="widgetSubMainDivId2" class"col-lg-12"/>');
    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlBudgetAdmin) || checkUserRole(rlBudgetUser)) {
        //Budget
        $("#widgetSubMainDivId2").append('<div class="col-sm-6 col-md-4" id="widgetOneMainDiv2"/>');
        $("#widgetOneMainDiv2").append('<div  id="widgetOneSubMainId2" onclick="displayBudgetHorizontalBar()" />');
        $("#widgetOneSubMainId2").append('<img class="img-responsive" src="../images/Budget.png">');
    }
    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlPensionAdmin)) {
        //Pension
        $("#widgetSubMainDivId2").append('<div class="col-sm-6 col-md-4" id="widgetSecMainDiv2" />');
        $("#widgetSecMainDiv2").append('<div id="widgetSecSubMainId2" onclick="displayPensionHorizontalBar()" />');
        $("#widgetSecSubMainId2").append('<img class="img-responsive" src="../images/Pension.png">');
    }
    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlLeaveAdmin)) {
        //Leave
        $("#widgetSubMainDivId2").append('<div class="col-sm-6 col-md-4" id="widgetSecMainDiv3" />');
        $("#widgetSecMainDiv3").append('<div id="widgetSecSubMainId3" onclick="displayLeaveHorizontalBar()" />');
        $("#widgetSecSubMainId3").append('<img class="img-responsive" src="../images/Leave.png">');
    }
    if (checkUserRole(rlSuperAdmin)) {
        //User Management
        $("#widgetMainDivId3").append('<div class="col-sm-6 col-md-4" id="widgetMainDiv" />');
        $("#widgetMainDiv").append('<div id="widgetMainDivThird1" onclick="displayUserManagement()" />');
        $("#widgetMainDivThird1").append('<img class="img-responsive" src="../images/user-management.png">');
    }
//    $("#widgetMainDivId3").append('<div class="col-sm-6 col-md-4" id="widgetMainDiv5" />');
//    $("#widgetMainDiv5").append('<div id="widgetMainDivThird2" onclick="displayExaminationModule()" />');
//    $("#widgetMainDivThird2").append('<img class="img-responsive" src="../images/user-management.png">');

//    $("#widgetMainDivId3").append('<div class="col-sm-6 col-md-4" id="widgetMainDiv6" />');
//    $("#widgetMainDiv6").append('<div id="widgetMainDivThird3" onclick="displayAdmissionModule()" />');
//    $("#widgetMainDivThird3").append('<img class="img-responsive" src="../images/user-management.png">');
//    if (((checkUserPrivelege(pvCreateUser)) || (checkUserPrivelege(pvViewUserList)))) {
//        //User Management
//        $("#widgetMainDivId3").append('<div class="col-sm-6 col-md-4" id="widgetMainDiv" />');
//        $("#widgetMainDiv").append('<div id="widgetMainDivThird1" onclick="displayUserManagement()" />');
//        $("#widgetMainDivThird1").append('<img class="img-responsive" src="../images/user-management.png">');
//    }
//    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlPensionAdmin)) {
//        //Pension
//        $("#widgetSubMainDivId2").append('<div class="col-sm-6 col-md-4" id="widgetSecMainDiv2" />');
//        $("#widgetSecMainDiv2").append('<div id="widgetSecSubMainId2" onclick="displayPensionHorizontalBar()" />');
//        $("#widgetSecSubMainId2").append('<img class="img-responsive" src="../images/Pension.png">');
//    }
//    if (checkUserRole(rlSuperAdmin) || checkUserRole(rlLeaveAdmin)) {
//        //Leave
//        $("#widgetSubMainDivId2").append('<div class="col-sm-6 col-md-4" id="widgetSecMainDiv3" />');
//        $("#widgetSecMainDiv3").append('<div id="widgetSecSubMainId3" onclick="displayLeaveHorizontalBar()" />');
//        $("#widgetSecSubMainId3").append('<img class="img-responsive" src="../images/Leave.png">');
//    }
//    if ((checkUserRole(rlSuperAdmin) || checkUserRole(rlBudgetAdmin) || checkUserRole(rlHRMSAdmin)|| checkUserRole(rlFinancialAdmin)|| checkUserRole(rlPayrollAdmin))) {
//    if (checkUserRole(rlSuperAdmin)) {
//        //User Management
//        $("#widgetMainDivId3").append('<div class="col-sm-8 col-md-5" id="widgetMainDiv" align="center" />');
//        $("#widgetMainDiv").append('<div id="widgetMainDivThird1" onclick="displayUserManagement()" />');
//        $("#widgetMainDivThird1").append('<img class="img-responsive" src="../images/user-management.png">');
//    }
}
function setDdoLocationIntoSessionUsingSelectedDDOLocationID() {
    var DDOId = getUserSessionElement(seDDOId);
    var LocationId = getUserSessionElement(seLocationId);
    if (DDOId == null || DDOId == undefined || DDOId == "undefined") {
        if (LocationId == null || LocationId == undefined || LocationId == "undefined") {
            return false;
        }
    }
    $.get(server_base_url + "/user/management/GetDdoLocationObjects", {
        ddoId: DDOId,
        locationId: LocationId
    }).done(function(data) {
        if (data == fail || data == unauthorized || data == statusException || data.statuscode == fail || data.statuscode == unauthorized || data.statuscode == statusException) {
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var ddoObject = data.ddoObj;
            var locationObject = data.locationObj;
            ddoObject = JSON.parse(ddoObject);
            locationObject = JSON.parse(locationObject);
            if (ddoObject != null && ddoObject != undefined && ddoObject != "") {
                if (ddoObject.ddoName != null && ddoObject.ddoName != undefined && ddoObject.ddoName != "") {
                    setUserSessionElement(seDDOName, ddoObject.ddoName);
                }
            }
            if (locationObject != null && locationObject != undefined && locationObject != "") {
                if (locationObject.locationName != null && locationObject.locationName != undefined && locationObject.locationName != "") {
                    setUserSessionElement(seLocationName, locationObject.locationName);
                }
            }
        }
    });
}

function prepareUserTopMenu() {
    setDdoLocationIntoSessionUsingSelectedDDOLocationID();
    //top right corner menu will be created here
    $("#userTopRightMenuUl").text('');
//    if (checkUserPrivelege(pvViewProfile)) {
    $("#userTopRightMenuUl").append('<li><a href="javascript:displayProfileManagementTab()"><i class="fa fa-user"></i>&nbsp;My Profile</a></li>');
//    }
//    if ((checkUserRole(rlAdmin) == true || checkUserRole(rlFinancialAdmin)) && (checkUserPrivelege(pvViewUserList))) {
//    $("#userTopRightMenuUl").append('<li><a href="javascript:displayUserManagementTab()"><i class="fa fa-group"></i>&nbsp;User Management</a></li>');
//    }
    $("#userTopRightMenuUl").append('<li class="divider"></li>');
    $("#userTopRightMenuUl").append('<li><a href="javascript:logout()"><i class="fa fa-key"></i>&nbsp;Log Out</a></li>');
}

function prepareSideBar() {
    //left menus will be created here
    $("#side-menu").text("");

    //li-1 displaying user info
    $("#side-menu").append('<li class="user-panel"><div class="info" id="userInfoMainDiv" /><div class="clearfix" /><li>');
    //display financial Year
//    var financialYear = getUserSessionElement(seCurrentFinancialYear);
////    $("#userInfoMainDiv").append("<p>" + financialYear + "</p>");
//    $("#displayFinancialYear").text(financialYear);

    //display user name
    var fName = getUserSessionElement("userFname");
    if (fName == null || fName == "") {
        location.href = "../jsp/login.jsp";
    }
    $("#userInfoMainDiv").append('<span><img src="../images/su_logo.png" style=" height: 135px; width: 135px;    margin-top: -17px;    margin-left: 20px;"></span>');

//    $("#userInfoMainDiv").append("<p>" + fName + "</p>");
    $("#displayUsername").text("Welcome  " + fName);

    //display user option like profile etc...
//    $("#userInfoMainDiv").append('<ul class="list-inline list-unstyled" id="userInfoIconsDiv" />');
//    $("#userInfoIconsDiv").append('<li><a href="javascript:displayProfileManagementTab()" data-hover="tooltip" title="Profile"><i class="fa fa-user"></i></a></li>');
//    $("#userInfoIconsDiv").append('<li><a href="javascript:logout()" data-hover="tooltip" title="Logout"><i class="fa fa-sign-out"></i></a></li>');
    //li-2 dashboard menu
    $("#side-menu").append('<li><a href="dashboard.jsp"><i class="fa fa-th"></i><span class="menu-title">Dashboard</span></a></li>');
    $('#side-menu').metisMenu();

}

function displayUserManagement() {
    prepareSideBar();
    if (((checkUserPrivelege(pvCreateUser)) || (checkUserPrivelege(pvViewUserList)))) {
        displayUserManagementTab();

        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayUserManagement()">User Management</a>');
        $("#side-menu").append('<li><a href="javascript:displayUserManagementTab()"><i class="fa fa-group"></i><span class="menu-title"><strong>User Management</strong></span><span class="fa"></span></a><ul class="nav nav-second-level" id="userManagementUlId" /></li>');
        if (checkUserPrivelege(pvCreateDDO) || checkUserPrivelege(pvViewDDO)) {
            $("#userManagementUlId").append('<li><a href=javascript:DDOMasterCreation("dashboardBodyMainDiv")><i class="fa fa-group" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;&nbsp;DDO Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateLocation) || checkUserPrivelege(pvViewLocation)) {
            $("#userManagementUlId").append('<li><a href=javascript:LocationMasterCreation("dashboardBodyMainDiv")><i class="fa fa-group" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;&nbsp;Location Master</span></a></li>');
        }
        if (checkUserPrivelege(pvCreateDDOLocationMapping) || checkUserPrivelege(pvViewDDOLocationMapping)) {
            $("#userManagementUlId").append('<li><a href=javascript:ddoLocationMappingCreation()><i class="fa fa-group" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;&nbsp;DDO Location Mapping Master</span></a></li>');
        }
//        $("#userManagementUlId").append('<li><a href=javascript:changeFinancialYearMaster("dashboardBodyMainDiv","UM")><i class="fa fa-group" id="accountSubTitleId"></i><span class="menu-subtitle">&nbsp;Change Financial Year</span></a></li>');

        $('#side-menu').metisMenu();
    }

}

$(window).bind('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) {
        switch (String.fromCharCode(event.which).toLowerCase()) {
            case 's':
                event.preventDefault();
                break;
            case 'f':
                event.preventDefault();
                break;
            case 'g':
                event.preventDefault();
                break;
        }
    }
});

$('#body_id').change(function() {
    if ($('#sidebar').height() > $('#page-wrapper').height()) {
        $('#wrapper').css('height', $('#sidebar').height());
    }
    if ($('#sidebar').height() < $('#page-wrapper').height()) {
        $('#wrapper').css('height', $('#page-wrapper').height());
    }
});
