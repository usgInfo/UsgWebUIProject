<%-- 
    Document   : forgotPassword
    Created on : Aug 11, 2016, 12:16:22 PM
    Author     : Deepak Pathak
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <%@include file="common.jsp" %>
    </head>
    <body style="background-image: url('../images/bg_image_back.png');background-size: 100% 100%;background-repeat: no-repeat;">
        <div class="page-form" style ="background-color: #00799a;">
            <div>
                <!--<div class="header-content"><h1>Saurashtra University</h1></div>-->
                <div class="body-content">
                    <span><img src="../images/su_logo.png" style=" height: 190px; width: 190px;margin-left:80px;"></span>
                    <br>
                    <br>
                    <br>
                    <br>
                    <h3 style="color: #ffffff;">Forgot your Password?</h3>
                    <div class="form-group" id="userEmailDiv">
                        <div class="input-icon right"><i class="fa fa-envelope" style="color:#ffffff;"></i>
                            <input type="text" placeholder="Please enter your email" name="username" id="email" class="form-control" style="background-color:#439bb3;color:#ffffff;">
                            <strong><label class="control-label" id="userEmailLabel"></label></strong>
                        </div>
                    </div>
                    <br /><br />
                    <center><span id="forgotPasswordMsgId" style="color: red;font-weight:bolder;"></span></center>
                    <br /><br />
                    <div class="form-group mbn"><a href='../jsp/login.jsp' class="btn btn-warning"><i
                                class="fa fa-chevron-circle-left"></i>&nbsp;
                            Back</a>
                        <button type="submit" id="forgotPasswordButton" onclick="forgotPassword()" class="btn btn-success pull-right">Submit
                            &nbsp;<i class="fa fa-chevron-circle-right"></i></button>
                    </div>
                    <div class="clearfix"></div>

                </div>
            </div>
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
    </body>
</html>
