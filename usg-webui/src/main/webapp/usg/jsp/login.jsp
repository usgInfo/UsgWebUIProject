<%-- 
    Document   : login
    Created on : Aug 11, 2016, 11:39:21 AM
    Author     : Deepak Pathak
--%>
<%@page import="java.util.Calendar"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <%@include file="common.jsp" %>
    </head>
    <!--<body style="background-image: url('../images/bg_image_back.png');background-position: right;">-->
    <!--<body style="background-image: url('../images/bg_image_back.png');background-size: 100% 100%;">-->
    <body style="background-image: url('../images/bg_image_back.png');background-size: 100% 1000px;">
        <!--<div class="pull-left col-lg-4" style ="min-height: 780px;width: 480px;margin-top:0%;margin-bottom:0%;background-color: #00799a;">-->
        <!--<div class="pull-left col-lg-4" style ="min-height: 780px;background-color: #00799a;">-->
        <div class="pull-left col-lg-4" style ="height:auto;background-color: #00799a;">
            <div>
                <div class="body-content">
                    <center><span><img src="../images/su_logo.png" style=" height: 190px; width: 190px; margin-top:35px;"></span></center>
                    <br>
                    <br>

                    <div class="form-group" id="userNameDiv">
                        <div class="input-icon right"><i class="fa fa-user" style="color:#ffffff;"></i>
                            <input type="text" placeholder="Username" id="userName" name="username" class="form-control" style="background-color:#439bb3;color:#ffffff;">
                            <label class="control-label" id="userNameLabel"></label>
                        </div>
                    </div>

                    <div class="form-group" id="userPasswordDiv">
                        <div class="input-icon right"><i class="fa fa-key" style="color:#ffffff;"></i>
                            <input type="password" placeholder="Password" id="userPassword" name="password" class="form-control" style="background-color:#439bb3;color:#ffffff;">
                            <label class="control-label" id="userPasswordLabel"></label>
                        </div>
                    </div>

                    <div class="form-group pull-left">
                        <div><a href='../jsp/forgotPassword.jsp' class='btn-forgot-pwd' style="color: #ffffff;"><strong>Forgot your Password?</strong></a></div>
                    </div>
                    <div class="form-group pull-right">
                        <button type="submit" onclick=validateCredentails() id="loginButton" style="background-color: #e37a04;color: white;" class="form-control"><strong>Log In&nbsp;<i class="fa fa-chevron-circle-right"></i></strong></button>
                    </div>
                    <div class="clearfix"></div>
                    <center><span id="authenticationMsgId" style="color: red;font-weight:bolder;"></span></center>
                    <br />                    
                    <br />
                    <br />
                    <br />
                    <div class="social-auth-links text-center">
                        <center>
                            <span style="color:#ffffff;">Managed By <strong>ITI Ltd</strong></a></span>
                        </center>
                    </div><br />
                    <div class="social-auth-links text-center">
                        <center>
                            <span style="color:#ffffff;"><strong>DISCLAIMER & BROWSER COMPATIBILITY : </strong>The site is fully compatible with the following browsers: Firefox v.50 and later, Safari, Opera 41.0.2353.69 and later,and Chrome v.54.0.2840.99 and later. </strong></a></span>
                        </center>
                    </div>
                    <br />
                </div>
            </div>
        </div>
        <!--<div class="image col-lg-8">-->
        <div class="pull-right col-lg-8">
            <!--<center><div><img src="../images/saurashtra_uni.png" style="margin-left: 230px;margin-top: 45px;"></div></center>-->
            <center><div><img src="../images/saurashtra_uni.png" style="width:60%;height: auto;"></div></center>
            <!--<center><div><img src="../images/bg_image.png" style="margin-left: 20px;max-width:90%;height: auto;"></div></center>-->
            <center><div><img src="../images/bg_image.png" style="width:100%;height:auto;"></div></center>
            <!--<center><div><img src="../images/ribbon_1.png" style="margin-left: -15px;margin-top: -56px;"></div></center>-->
            <center><div><img src="../images/ribbon_1.png" style="width:100%;"></div></center>
        </div>
        <style>
            input::-webkit-input-placeholder {
                color: #ffffff !important;
            }

            input:-moz-placeholder { /* Firefox 18- */
                color: #ffffff !important;  
            }

            input::-moz-placeholder {  /* Firefox 19+ */
                color: #ffffff !important;  
            }

            input:-ms-input-placeholder {  
                color: #ffffff !important;  
            }
        </style>
        <script>

            $("#userPassword").keyup(function(e) {
                if (e.keyCode == 13 || e.which == 13) {
                    validateCredentails();
                }
            });

        </script>

    </body>
</html>
