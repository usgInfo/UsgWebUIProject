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
    $("#dashboardOrderListId").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayAdmissionHorizontalBar()">Admission</a>');
    $("#dashboardBodyMainDiv").append('<div id="admissionHoarizontalBarId" />');
    $("#admissionHoarizontalBarId").append('<div id="admissionHoarizontalMainId" class="row" />');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayAdmissionHorizontalBar()">Admission Module</a>');
    $("#admissionHoarizontalMainId").append('<ul id="admissionHorizontalUlId" class="nav nav-tabs ul-edit nav-justified" />');
    $("#admissionHorizontalUlId").append('<li><a href="#profile6" data-toggle="tab" onclick="admissionMasterTabs()"><strong>Admission Master</strong></a></li>');
    $("#admissionHorizontalUlId").append('<li><a href="javascript:admissionProcessTabs()"  ><strong>Admission Process</a></strong></li>');

}

function admissionMasterTabs() {

    prepareSideBar();

    $("#dashboardBodyMainDiv").text("");
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayAdmissionHorizontalBar()">Admission</a></label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayAdmissionModule()">Admission</a> >> <a href="javascript:void(0)" data-toggle="tab" onclick="admissionMasterTabs()">Admission Masters</a>');
    $("#side-menu").append('<li class="active"><a href="javascript:void(0)"><i class="fa fa-font"></i><span class="menu-title">Admission Master</span><span class="fa arrow"></span></a><ul class="nav nav-second-level" id="admissionMasterMenuUl" /></li>');
    $("#admissionMasterMenuUl").append('<li><a href=javascript:void(0) id="financialYear"><i class="fa fa-font"></i><span class="submenu-title">Master Name</span></a></li>');

}

function  admissionProcessTabs() {

}

