/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function displayAdmissionModule() {
    $("#dashboardBodyMainDiv").text("");
    $("#side-menu").text("");
    prepareSideBar();
    $("#dashboardTitleMainDiv").text("").append('<label>Admission</label>');
    $("#dashboardOrderListId").text("");
    $("#dashboardOrderListId").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayAdmissionModule()">Admission</a>');
    $("#dashboardBodyMainDiv").append('<div id="admissionHoarizontalBarId" />');
    $("#admissionHoarizontalBarId").append('<div id="admissionHoarizontalMainId" class="row" />');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayAdmissionHorizontalBar()">Admission Module</a>');
    $("#admissionHoarizontalMainId").append('<ul id="admissionHorizontalUlId" class="nav nav-tabs ul-edit nav-justified" />');
    $("#admissionHorizontalUlId").append('<li><a href="#profile6" data-toggle="tab" onclick="admissionMasterTabs()"><strong>Admission Master</strong></a></li>');
    $("#admissionHorizontalUlId").append('<li><a href="javascript:admissionProcessTabs()" ><strong>Admission Process</a></strong></li>');

}

function admissionMasterTabs() {

    prepareSideBar();

    $("#dashboardBodyMainDiv").text("");
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayAdmissionModule()">Admission</a></label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayAdmissionModule()">Admission</a> >> <a href="javascript:void(0)" data-toggle="tab" onclick="admissionMasterTabs()">Admission Masters</a>');
    $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-font"></i><span class="menu-title">Admission Master</span><span class="fa arrow"></span></a><ul class="nav nav-second-level" id="admissionMasterMenuUl" /></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:createCourseMaster("dashboardBodyMainDiv") id="courseMaster"><i class="fa fa-font"></i><span class="submenu-title">Course Master</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:createFacultyMaster() id="facultyMaster"><i class="fa fa-font"></i><span class="submenu-title">Faculty Master</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:createSubjectMaster() id="subjectMaster"><i class="fa fa-font"></i><span class="submenu-title">Subject Master</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:void(0) id="subjectGroupMaster"><i class="fa fa-font"></i><span class="submenu-title">Subject Group Master</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:createPeriodMaster() id="periodMaster"><i class="fa fa-font"></i><span class="submenu-title">Period Master</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:createProgramTypeMaster() id="programTypeMaster"><i class="fa fa-font"></i><span class="submenu-title">Program Type Master</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:void(0) id="programMaster"><i class="fa fa-font"></i><span class="submenu-title">Program Master</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:void(0) id="programSubjectMaster"><i class="fa fa-font"></i><span class="submenu-title">Program Subject Master</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:void(0) id="studySessionMaster"><i class="fa fa-font"></i><span class="submenu-title">Study Session Master</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:learningCentreMaster("dashboardBodyMainDiv") id="learningCentre"><i class="fa fa-font"></i><span class="submenu-title">Learning Centre</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:void(0) id="learningCenterProgramMapping"><i class="fa fa-font"></i><span class="submenu-title">Learning Center Program Mapping</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:boardMaster("dashboardBodyMainDiv") id="boardMaster"><i class="fa fa-font"></i><span class="submenu-title">Board Master</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:collegeMaster("dashboardBodyMainDiv") id="collegeMaster"><i class="fa fa-font"></i><span class="submenu-title">School/College Master</span></a></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:specialClaimMaster("dashboardBodyMainDiv") id="specialClaimMaster"><i class="fa fa-font"></i><span class="submenu-title">Special Claim Master</span></a></li>');
    
    $("#courseMaster,#facultyMaster,#subjectMaster,#subjectGroupMaster,#periodMaster,#programTypeMaster,#programMaster,#programSubjectMaster,#studySessionMaster,#learningCenterProgramMapping,#boardMaster,#collegeMaster,#specialClaimMaster,#learningCentre").click(function () {
        $(this).parent().siblings().children("a").css("color", "white");
        $(this).css("color", "red");
        $(this).siblings().css("color", "white");
    });
    $('#side-menu').metisMenu();



}

function  admissionProcessTabs() {

    prepareSideBar();
    $("#dashboardBodyMainDiv").text("");
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayAdmissionHorizontalBar()">Admission</a></label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayAdmissionModule()">Admission</a> >> <a href="javascript:void(0)" data-toggle="tab" onclick="admissionMasterTabs()">Admission Process</a>');
    $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-font"></i><span class="menu-title">Admission Process</span><span class="fa arrow"></span></a><ul class="nav nav-second-level" id="admissionProcessMenuUI" /></li>');
    $("#admissionProcessMenuUI").append('<li><a href=javascript:applicationForm("dashboardBodyMainDiv") id="applicationForm"><i class="fa fa-font"></i><span class="submenu-title">Application Form</span></a></li>');
}

