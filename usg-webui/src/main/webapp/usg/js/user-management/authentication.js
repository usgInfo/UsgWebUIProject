/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * Document   : login
 Created on : Aug 11, 2016, 11:39:21 AM
 Author     : Deepak Pathak
 */


function validateCredentails(event) {

    var loginName = $("#userName").val();
    var loginPassword = $("#userPassword").val();

    if (loginName == "" && loginPassword == "") {
        $("#userNameDiv").addClass('has-error');
        $("#userNameLabel").text("").append("Please enter username");
        $("#userPasswordDiv").addClass('has-error');
        $("#userPasswordLabel").text("").append("Please enter password");
        return false;
    } else if (loginName == "") {
        $("#userNameDiv").addClass('has-error');
        $("#userNameLabel").text("").append("Please enter username ");
        $("#userPasswordDiv").removeClass('has-error');
        $("#userPasswordLabel").text("");
        return false;
    } else if (loginPassword == "") {
        $("#userPasswordDiv").addClass('has-error');
        $("#userPasswordLabel").text("").append("Please enter password ");
        $("#userNameDiv").removeClass('has-error');
        $("#userNameLabel").text("");
        return false;
    } else {

        $("#userNameLabel").text("");
        $("#userNameDiv").removeClass('has-error');
        $("#userPasswordLabel").text("");
        $("#userPasswordDiv").removeClass('has-error');
        $("#authonticationMsgId").text("");


        $.post(server_base_url + "Login", {
            username: loginName,
            password: loginPassword
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
                createUserSession(data);
            }
        });

    }

}
function createUserSession(data) {
    console.log(data);
    var userObject = JSON.parse(data.result.userObject);
    setUserSessionElement(seUserId, userObject._id);
    setUserSessionElement(seUserFname, userObject.fname);
    setUserSessionElement(seUserLname, userObject.lname);
    setUserSessionElement(seOrgId, userObject.orgid);
    setUserSessionElement(seDDOId, userObject.ddoId);
    setUserSessionElement(seLoggedInEmployeeId, userObject.employeeId);
    setUserSessionElement(seCurrentFinancialYear, data.result.currentFinancialYear);
    setUserSessionElement(seCurrentFinancialYearId, data.result.currentFinancialYearId);
    //To Append Locations in DropDown 
    var locationObject = JSON.parse(data.result.locationObjects);
    setUserSessionElement(seLocationObjects, encodeURI(JSON.stringify(locationObject)));

    var roleNames = "";
    var privilegeNames = "";
    var orgRole = userObject.orgRole;
    $.each(orgRole, function(objIndex, objValue) {
        var role = objValue.role;
        $.each(role, function(roleIndex, roleValue) {
            roleNames += roleValue.roleName + ",";
            var privilege = roleValue.privilege;
            $.each(privilege, function(prvIndex, prvValue) {
                privilegeNames += prvValue.name + ",";
            });
        });
    });
    roleNames = roleNames.substring(0, roleNames.length - 1);
    privilegeNames = privilegeNames.substring(0, privilegeNames.length - 1);

    setUserSessionElement(seRoles, roleNames);
    setUserSessionElement(sePrivileges, privilegeNames);
    location.href = "/usg-webui/usg/jsp/dashboard.jsp";
}

//function createUserSession(data) {
//    var result = data.result;
//    setUserSessionElement(seUserId, result._id);
//    setUserSessionElement(seUserFname, result.fname);
//    setUserSessionElement(seUserLname, result.lname);
//    setUserSessionElement(seOrgId, result.orgid);
//    setUserSessionElement(seDDOId, result.ddoId);
//    alert(JSON.stringify(result));
//    console.log(result);
//
//    var roleNames = "";
//    var privilegeNames = "";
//    var orgRole = result.orgRole;
//    $.each(orgRole, function (objIndex, objValue) {
//        var role = objValue.role;
//        $.each(role, function (roleIndex, roleValue) {
//            roleNames += roleValue.roleName + ",";
//            var privilege = roleValue.privilege;
//            $.each(privilege, function (prvIndex, prvValue) {
//                privilegeNames += prvValue.name + ",";
//            });
//        });
//    });
//    roleNames = roleNames.substring(0, roleNames.length - 1);
//    privilegeNames = privilegeNames.substring(0, privilegeNames.length - 1);
//
//    setUserSessionElement(seRoles, roleNames);
//    setUserSessionElement(sePrivileges, privilegeNames);
//    location.href = "/usg-webui/usg/jsp/dashboard.jsp";
//}

function logout() {
    $.get(server_base_url + "Logout", {
    }).done(function(data) {
        sessionStorage.clear();
        location.href = "../jsp/login.jsp";
    });
}

function forgotPassword() {
    var emailId = $("#email").val();
    if (emailId == "" && emailId == "") {
        $("#email").focus();
        $("#userEmailDiv").addClass('has-error');
        $("#userEmailLabel").text("").append("Please enter email ");
        $("#forgotPasswordMsgId").text("");
        return false;
    } else {
        $("#userEmailDiv").removeClass('has-error');
        $("#userEmailLabel").text("");
        $("#forgotPasswordButton").attr('disabled', true);

        $.post(server_base_url + "/user/management/ForgotPassword", {
            email: emailId
        }).done(function(data) {
            if (data.statuscode == fail) {
                displaySmallErrorMessages("forgotPasswordMsgId", "Invalid email");
            } else if (data == unauthorized) {
                displaySmallErrorMessages("forgotPasswordMsgId", unauthorizedMessage);
            } else if (data == statusException) {
                displaySmallErrorMessages("forgotPasswordMsgId", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessages("forgotPasswordMsgId", "No User available");
            } else {
                $("#email").prop("readonly", true);
                $("#forgotPasswordMsgId").text("");
                $("#forgotPasswordMsgId").text("").append("<center><div class='col-sm-12' style='color:green;'>Password is succesfully send to your mail</div></center>");
                setTimeout(function() {
                    location.href = "../jsp/login.jsp";
                }, 3000);
            }
        });
    }
}