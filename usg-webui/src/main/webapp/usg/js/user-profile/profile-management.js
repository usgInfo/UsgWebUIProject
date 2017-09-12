/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function displayProfileManagementTab() {
//    if (checkUserPrivelege(pvViewProfile)) {
//  For giving tittle
        $("#dashboardTitleMainDiv").text("").append("Profile Management");
        $("#dashboardBodyMainDiv").text("");
        $("#dashboardOrderListId").text("");
        $("#dashboardBodyMainDiv").append('<div class="row"><div id="profileManagementMainDivId" class="col-lg-12" /></div>');
        $("#profileManagementMainDivId").append('<div id="userProfileMainDiv" class="row" />');

//  Sub div started
        $("#userProfileMainDiv").append('<div class="col-lg-3" id="userProfileSubMainDiv" /><div id="editUserProfileDiv" class="col-lg-9" />');
        $("#userProfileSubMainDiv").append('<div class="form-group"><div class="text-center mbl"><label><h4><strong>User Profile</strong></h4></label></div></div>');



//  Edit div started
        $("#editUserProfileDiv").append('<div id="editProfileMainTab" />');
        $("#editProfileMainTab").append('<ul id="editProfileUlTag" class="nav nav-tabs ul-edit responsive"/>');
        $("#editProfileUlTag").append('<li class="active"><a href="#tab-edit" data-toggle="tab"><i class="fa fa-edit"></i>&nbsp;Edit Profile</a></li>');
        $("#editProfileMainTab").append('<div id="editProfileMainBody" class="tab-content" />');
        $("#editProfileMainBody").append('<div id="editProfileSubMainBody" class="tab-pane fade in active" />');
        $("#editProfileSubMainBody").append('<div id="profileMainBody" class="row" />');

//  Distribution of main div into sub div
        $("#profileMainBody").append('<div id="editProfileMainDiv" class="col-lg-9" />');
        $("#profileMainBody").append('<div id="settingProfileMainDiv" class="col-lg-3" />');

//  For edit profile div
        $("#editProfileMainDiv").append('<div id="profileDiv" class="tab-content" />');
        $("#profileDiv").append('<div id="profileSubDiv" class="tab-pane fade in active" />');
        $("#profileSubDiv").append('<center><div id="profileMsgDivId" /></center>');
        $("#profileSubDiv").append('<br /><br /><div id="profileSubDivId" class="form-horizontal" />');


//  For the right side div used for setting
        $("#settingProfileMainDiv").append('<ul id="profileSettingUlTab" class="nav nav-pills nav-stacked" />');
//        if (checkUserPrivelege(pvUpdateProfile)) {
            $("#profileSettingUlTab").append('<li onclick="displayProfileManagementTab()" class="active"><a href="javascript:void(0)" data-toggle="tab"><i class="fa fa-folder-open"></i>&nbsp;Profile Setting</a></li>');
//        }
//        if (checkUserPrivelege(pvChangePassword)) {
            $("#profileSettingUlTab").append('<li onclick="accountSetting()"><a href="javascript:void(0)" data-toggle="tab"><i class="fa fa-cogs"></i>&nbsp;Account Setting</a></li>');
//        }

        //  For fetching the user information from backend
        var loginId = getUserSessionElement("userId");
        $.get(server_base_url + "/user/management/Profile/View", {
            userid: loginId
        }).done(function(data) {
            if (data == fail || data == unauthorized) {
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {

//          Table start
                var mainData = JSON.parse(data.result);
                $("#userProfileSubMainDiv").append('<table class="table table-striped table-hover"><tbody id="userProfileTableBody"></tbody></table>');
                $("#userProfileTableBody").append("<tr><td>First Name</td><td>" + ((mainData.fname == null || mainData.fname == "" || mainData.fname == undefined) ? "Na" : mainData.fname) + "</td></tr>");
                $("#userProfileTableBody").append("<tr><td>Last Name</td><td>" + ((mainData.lname == null || mainData.lname == "" || mainData.lname == undefined) ? "Na" : mainData.lname) + "</td></tr>");
                $("#userProfileTableBody").append("<tr><td>Email</td><td>" + ((mainData.email == null || mainData.email == "" || mainData.email == undefined) ? "Na" : mainData.email) + "</td></tr>");
                $("#userProfileTableBody").append("<tr><td>Mobile</td><td>" + ((mainData.mobile == null || mainData.mobile == "" || mainData.mobile == undefined) ? "Na" : mainData.mobile) + "</td></tr>");
//          Table end

//          Edit form start
                $("#profileSubDivId").append('<div class="form-group"><label class="col-lg-3 control-label">First Name</label><div class="col-lg-9 controls"><input type="text" onkeyup=validateName("fname","fNameErr") placeholder="first name" id="fname" class="form-control" /><span id="fNameErr" class="text-danger"></span></div></div>');
                $("#profileSubDivId").append('<div class="form-group"><label class="col-lg-3 control-label">Last Name</label><div class="col-lg-9 controls"><input type="text" onkeyup=validateName("lname","lNameErr") placeholder="last name" id="lname" class="form-control"/><span id="lNameErr" class="text-danger"></span></div></div>');
                $("#profileSubDivId").append('<div class="form-group"><label class="col-lg-3 control-label">Email</label><div class="col-lg-9 controls"><input type="text" placeholder="Email" id="email" onkeyup=validateEmail("email","emailErr") class="form-control"/><span id="emailErr" class="text-danger"></span></div></div>');
                $("#profileSubDivId").append('<div class="form-group"><label class="col-lg-3 control-label">Mobile</label><div class="col-lg-9 controls"><input type="text" placeholder="mobile" id="mobile" onkeyup=validatePhone("mobile","mobileErr") class="form-control"/><span id="mobileErr" class="text-danger"></span></div></div>');
                $("#profileSubDivId").append('<div class="form-group mbn" id="editProfileButton"><label class="col-lg-3 control-label"></label><div class="col-lg-9 controls"><button type="submit" onclick="editUserProfile();" class="btn btn-info"><i class="fa fa-pencil"></i>&nbsp;Edit</button>&nbsp; &nbsp;'
//                        + '<a href="#" class="btn btn-default">Cancel</a>'
                        + '</div></div>');
                $("#mobile").attr('maxlength', '10');

//          Disabling the element
                $("#fname").prop("readonly", true);
                $("#lname").prop("readonly", true);
                $("#mobile").prop("readonly", true);
                $("#email").prop("readonly", true);
//          Edit form end

//          Appending the value from backend
                $("#fname").val(mainData.fname);
                $("#lname").val(mainData.lname);
                $("#email").val(mainData.email);
                $("#mobile").val(mainData.mobile);

            }
        });
//    }
}

// For change passowrd i.e account setting
function accountSetting() {
//    if (checkUserPrivelege(pvChangePassword)) {
        $("#profileSubDivId").text("").append('<div class="form-group"><label class="col-lg-3 control-label">Old Password</label><div class="col-lg-9 controls"><input type="password" placeholder="old password" id="oldPassword" class="form-control"/></div></div>');
        $("#profileSubDivId").append('<div class="form-group"><label class="col-lg-3 control-label">New Password</label><div class="col-lg-9 controls"><input type="password" placeholder="new password" id="newPassword" class="form-control"/></div></div>');
        $("#profileSubDivId").append('<div class="form-group"><label class="col-lg-3 control-label">Re-Type New Password</label><div class="col-lg-9 controls"><input type="password" placeholder="confirm new password" id="reNewPassword" class="form-control"/></div></div>');
        $("#profileSubDivId").append('<div class="form-group mbn"><label class="col-lg-3 control-label"></label><div class="col-lg-9 controls"><button type="submit" id="passwordButton" onclick="UserChangePassword()" class="btn btn-success"><i class="fa fa-save"></i>&nbsp;Submit</button>&nbsp; &nbsp;'
//                + '<a href="#" class="btn btn-default">Cancel</a>'
                + '</div></div>');
//    }
}

function editUserProfile() {
    $("#fname").prop("readonly", false);
    $("#lname").prop("readonly", false);
    $("#mobile").prop("readonly", false);
    $("#email").prop("readonly", false);
    $("#editProfileButton").text("").append('<div class="form-group mbn" id="updateProfileButton"><label class="col-lg-3 control-label"></label><div class="col-lg-9 controls"><button type="submit" onclick="updateUserProfile();" class="btn btn-success"><i class="fa fa-save"></i>&nbsp;Update</button>&nbsp; &nbsp;'
//            + '<a href="#" class="btn btn-default">Cancel</a>'
            + '</div></div>');
}


function updateUserProfile() {

    var firstName = validateName("fname", "fNameErr");
    var lastName = validateName("lname", "lNameErr");
    var emailId = validateEmail("email", "emailErr");
    var phone = validatePhone("mobile", "mobileErr");

    if (firstName && lastName && emailId && phone) {
         
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var mobile = $("#mobile").val();

        if (fname == "" || fname == "undefined" || lname == "" || lname == "undefined" || email == "" || email == "undefined" || mobile == "" || mobile == "undefined") {
            $("#profileMsgDivId").text("").append('<center><strong><div class="col-lg-12" style="color:red;">Please fill all fields</div></strong></center>');
            return false;
        }

        var updateUserJson = {
            fname: fname,
            lname: lname,
            email: email,
            mobile: mobile
        }
        var userId = getUserSessionElement("userId");
        $.get(server_base_url + "/user/management/Profile/Update", {
            userjson: JSON.stringify(updateUserJson),
            userid: userId
        }).done(function(data) {
            if (data.statuscode == fail) {
                $("#profileMsgDivId").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + failMessage + "<strong></div></center>");
            } else if (data.statuscode == unauthorized) {
                $("#profileMsgDivId").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + unauthorizedMessage + "<strong></div></center>");
            } else if (data.statuscode == statusException) {
                $("#profileMsgDivId").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + statusExceptionMessage + "<strong></div></center>");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else {
                $("#fname").attr('readonly', true);
                $("#lname").attr('readonly', true);
                $("#email").attr('readonly', true);
                $("#mobile").attr('readonly', true);
                $("#editProfileButton").text("").append('<div class="form-group mbn" id="editProfileButton"><label class="col-lg-3 control-label"></label><div class="col-lg-9 controls"><button type="submit" onclick="editUserProfile();" class="btn btn-info"><i class="fa fa-pencil"></i>&nbsp;Edit</button>&nbsp; &nbsp;'
                        + '<a href="#" class="btn btn-default">Cancel</a>'
                        + '</div></div>');
                $("#profileMsgDivId").text("").append("<center><div class='col-sm-12' style='color:green;'><strong>Your Profile is successfully Updated</strong></div></center>");
                setTimeout(function() {
                    displayProfileManagementTab();
                }, 1000);
            }
        });
    } else {
        $("#profileMsgDivId").text("").append('<center><strong><div class="col-lg-12" style=>Please Enter valid entries</div></strong></center>');
        return false;
    }

}

function UserChangePassword() {

    var oldPassword = $("#oldPassword").val();
    var newPassword = $("#newPassword").val();
    var newRePassword = $("#reNewPassword").val();


    if (oldPassword == "" || oldPassword == "undefined" || newPassword == "" || newPassword == "undefined" || newRePassword == "" || newRePassword == "undefined") {
        $("#profileMsgDivId").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill all fields</strong></div></center>");
        return false;
    }

    if (oldPassword == newPassword) {
        $("#profileMsgDivId").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Old Password should not be same as New Password</strong></div></center>");
        return false;
    }

    if (newPassword == newRePassword) {
        var userId = getUserSessionElement("userId");
        if (newPassword == newRePassword) {
            $.get(server_base_url + "/user/management/Profile/ChangePassword", {
                oldpass: oldPassword,
                newpass: newPassword,
                userid: userId
            }).done(function(data) {
                if (data.statuscode == fail || data.statuscode == unauthorized) {
                    $("#profileMsgDivId").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Your Old Password is not correct</strong></div></center>");
                }
                else if (data.statuscode == statusException) {
                    $("#profileMsgDivId").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Your Old Password is not correct</strong></div></center>");
                } else if (data == invalidSession) {
                    callSessionTimeout();
                } else {
                    $("#oldPassword").prop('readonly', true);
                    $("#newPassword").prop('readonly', true);
                    $("#reNewPassword").prop('readonly', true);
                    $("#passwordButton").attr('disabled', true);
                    $("#profileMsgDivId").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Your Password is successfully Changed</strong></div></center>");
                    setTimeout(function() {
                        location.href = "../../usg/jsp/login.jsp";
                    }, 1000);
                }
            });
        }
    } else {
        $("#profileMsgDivId").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Your New Password is not Matching</strong></div></center>");
    }
}

