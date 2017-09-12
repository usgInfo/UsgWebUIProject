<%-- 
    Document   : dashboard
    Created on : Aug 10, 2016, 3:38:27 PM
    Author     : accure
--%>

<!DOCTYPE html>
<html lang="en">
    <head>
        <%@include file="common.jsp" %>

    </head>
    <body class="" id="body_id" onload="prepareDashboard()">
        <div>
            <!--BEGIN TOPBAR-->
            <div id="header-topbar-option-demo" class="page-header-topbar">
                <nav id="topbar" role="navigation" style="margin-bottom: 0; z-index: 2;" class="navbar navbar-default navbar-static-top">
                    <div class="navbar-header">
                        <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" class="navbar-toggle">
                            <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a id="logo" href="javascript:void(0)" class="navbar-brand">
                            <span class="fa fa-rocket"></span>
                            <span class="logo-text" style="font-size: 20px;"> SAURASHTRA UNIVERSITY</span>
                            <span style="display: none" class="logo-text-icon"><img src="../images/rajkot_logo.png" style=" height: 40px; width: 40px;    margin-top: -10px;    margin-left: -15px;"></span>
                        </a>
                    </div>

                    <div class="topbar-main">
                        <!--COLLPSABLE ICON-->
                        <a id="menu-toggle" href="javascript:void(0)" class="hidden-xs"><i class="fa fa-bars"></i></a>
                        <span style="font-size: 35px;color:#ffffff;cursor: pointer;" onclick="prepareDashboard()"><a id="menu-toggle" class="pull-right"></a><i class="fa fa-home"></i></span>
                        <ul class="nav navbar navbar-top-links navbar-right mbn">
                            <li class="dropdown topbar-user">
                                <a data-hover="dropdown" href="javascript:void(0)" class="dropdown-toggle">
                                    <!--<strong><span>Financial Year</span>&nbsp; : &nbsp; <span class="hidden-xs" id="displayFinancialYear"></span></strong>&nbsp;&nbsp;&nbsp;&nbsp;-->
                                    <strong><span class="hidden-xs" id="displayUsername"></span>&nbsp;<span class="caret"></span></strong>
                                </a>
                                <ul class="dropdown-menu dropdown-user pull-right" id="userTopRightMenuUl"></ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <!--END TOPBAR-->

            <!--BEGIN WRAPPER-->
            <div id="wrapper">
                <!--BEGIN SIDEBAR MENU-->
                <nav id="sidebar" role="navigation" class="navbar-default navbar-static-side">
                    <div class="sidebar-collapse menu-scroll">
                        <ul id="side-menu" class="nav"></ul>
                    </div>
                </nav>
                <!--END SIDEBAR MENU-->

                <!--BEGIN PAGE WRAPPER-->
                <div id="page-wrapper">
                    <!--BEGIN TITLE & BREADCRUMB PAGE-->
                    <div id="title-breadcrumb-option-demo" class="page-title-breadcrumb">
                        <div class="page-header pull-left"><div class="page-title" id="dashboardTitleMainDiv">&nbsp;</div></div>
                        <ol class="breadcrumb page-breadcrumb pull-right" id="dashboardOrderListId"></ol>
                    </div>
                    <!--END TITLE & BREADCRUMB PAGE-->


                    <!--BEGIN CONTENT-->
                    <div class="page-content" id="dashboardBodyMainDiv"></div>

                    <!--                   <div class="row">
                                        </div>-->
                    <!--END CONTENT-->
                </div>

                <!--BEGIN FOOTER-->
                <!--                <div id="footer">
                                    <div class="copyright">2016 © Accure Inc.</div>
                                </div>-->
                <!--END FOOTER-->

                <!--END PAGE WRAPPER-->
            </div>
            <!--END WRAPPER-->
        </div>
        <div id="popUpDiv">
        </div>
    </body>
</html>