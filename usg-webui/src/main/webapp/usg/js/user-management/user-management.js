/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function displayUserManagementTab() {
//    if ((checkUserRole(rlAdmin) == true || checkUserRole(rlFinancialAdmin)) && (checkUserPrivelege(pvViewUserList))) {
    $("#dashboardTitleMainDiv").text("").append("User Management");
    $("#dashboardBodyMainDiv").text("");

    $("#dashboardBodyMainDiv").append('<div id="UserManagementMainTabId" />');
    $("#UserManagementMainTabId").append('<div id="UserManagementMainTab" class="row" />');
    $("#UserManagementMainTab").append('<ul id="UserManagementMainUlId" class="nav nav-tabs ul-edit nav-justified"/>');
//    if ((checkUserRole(rlSuperAdmin) == true || checkUserRole(rlHRMSAdmin) || checkUserRole(rlHRMSUser) || checkUserRole(rlPayrollAdmin) || checkUserRole(rlPayrollUser) || checkUserRole(rlFinancialAdmin) || checkUserRole(rlFinancialUser) || checkUserRole(rlBudgetAdmin) || checkUserRole(rlBudgetUser) || checkUserRole(rlLeaveAdmin) || checkUserRole(rlPensionAdmin)) && (checkUserPrivelege(pvViewUserList))) {
    if ((checkUserPrivelege(pvViewUserList))) {
        $("#UserManagementMainUlId").append('<li onclick="viewUserList()" class="active"><a href="javascript:void(0)" data-toggle="tab"><strong>User List</strong></a></li>');
    }
    if ((checkUserPrivelege(pvCreateUser))) {
        $("#UserManagementMainUlId").append('<li onclick="addNewUserTab()"><a href="javascript:void(0)" data-toggle="tab"><strong>Create New User</a></strong></li>');
    }
    $("#UserManagementMainTab").append('<div id="UserManagementSubMainTab" />');
    $("#UserManagementSubMainTab").append('<div id="viewUserMainTabId"  class="tab-pane fade in active"/>');
    $("#UserManagementSubMainTab").append('<div id="createUserMainTabId" />');
    viewUserList();
//    }
}

function viewUserList() {
    if ((checkUserRole(rlHRMSAdmin) || checkUserRole(rlPayrollAdmin) || checkUserRole(rlFinancialAdmin) | checkUserRole(rlBudgetAdmin) || checkUserRole(rlBudgetAdmin) || checkUserRole(rlSuperAdmin)) && (checkUserPrivelege(pvViewUserList))) {
        $("#viewUserMainTabId").text("").append('<div id="viewUserDiv" />');
        $("#viewUserDiv").append('<div id="viewUserSubDiv" class="panel" />');
        $("#viewUserSubDiv").append('<div id="viewUserErrorMsgId" />');
        $("#viewUserSubDiv").append('<div id="viewUserMainBodyDiv" class="panel-body" />');
        $("#viewUserMainBodyDiv").append('<div id="viewUserMainBody" class="table-responsive" />');
        $("#viewUserMainBody").append('<table id="userTable" class="table table-striped table-bordered table-hover" />');
        $("#userTable").append('<thead id="userTableHeadId" />');
        $("#userTable").append('<tbody id="userTableBodyId" />');
        $("#userTableHeadId").append('<tr id="userTableListId"><th>Sno</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Email</th><th>Mobile</th><th>DDO</th><th>Location</th><th style="width: 100px;">User Role</th>');
//        $("#userTableHeadId").append('<tr id="userTableListId"><th>Sno</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Email</th><th>Mobile</th><th>DDO</th><th>Location</th><th>User Role</th>');
        if ((checkUserPrivelege(pvUpdateUser))) {
            $("#userTableListId").append('<th><center>Edit</center</th>');
        }
        if ((checkUserPrivelege(pvDeleteExistingUser))) {
            $("#userTableListId").append('<th><center>Delete</center></th>');
        }
        var loginUserId = getUserSessionElement(seUserId);
        $.get(server_base_url + "/user/management/ViewList", {
        }).done(function (data) {
            if (data == fail || data == unauthorized) {
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                var sno = 0;
                var mainData = data.result;

                for (var i = mainData.length - 1; i >= 0; i--) {
                    sno++;
                    var subData = mainData[i];
                    var roleNames = "";
                    var orgRole = subData.orgRole;
                    if (orgRole != undefined || orgRole != null || orgRole != "null" || orgRole != "undefined" || orgRole != "")
                        $.each(orgRole, function (objIndex, objValue) {
                            var role = objValue.role;
                            var noOfRolesCount = 0;
                            $.each(role, function (roleIndex, roleValue) {
                                noOfRolesCount++;
                                if (noOfRolesCount < 2) {
                                    roleNames = roleNames + roleValue.roleName + ",";
                                } else if (noOfRolesCount >= 2)
                                    roleNames = roleNames + roleValue.roleName + ",\n";
                                noOfRolesCount == 0;
                            });
                        });
                    roleNames = roleNames.substring(0, roleNames.length - 1);
                    //For Location
                    var locationNames = subData.locationNames;
                    var namesOfLocation = "";
                    var noOfLocationCounts = 0;
                    if (locationNames != -null || locationNames != undefined || locationNames != "" || locationNames != "undefined" || locationNames != null || locationNames != "null") {
                        for (var j = 0; j < locationNames.length; j++) {
                            noOfLocationCounts++;
                            if (noOfLocationCounts < 1) {
                                namesOfLocation = namesOfLocation + locationNames[j] + ",";
                            } else if (noOfLocationCounts >= 1) {
                                namesOfLocation = namesOfLocation + locationNames[j] + ",\n";
                                noOfLocationCounts == 0;
                            }
                        }
                    }
                    namesOfLocation = namesOfLocation.substring(0, namesOfLocation.length - 1);

                    var mobile = subData.mobile;
                    if (mobile == "undefined" || mobile == undefined) {
                        mobile = "";
                    }
                    var ddoName = subData.ddoName;
                    if (ddoName == "undefined" || ddoName == undefined) {
                        ddoName = "";
                    }

                    $("#userTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.fname + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.lname + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.loginid + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.email + "</td>"
                            + "<td style='cursor:pointer;'>" + mobile + "</td>"
                            + "<td style='cursor:pointer;'>" + ddoName + "</td>"
                            + "<td style='cursor:pointer;'>" + namesOfLocation + "</td>"
                            + "<td style='width: 100px;' >" + roleNames + "</td>");
//                            + "<td style='cursor:pointer;'>" + roleNames + "</td>");
                    if ((checkUserPrivelege(pvUpdateUser))) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=editUserInformation('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>");
                    }
                    if ((checkUserPrivelege(pvDeleteExistingUser))) {
                        if (loginUserId != subData._id.$oid) {
                            $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=onclick=deletePopUp('deleteUser','viewUserList','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");
                        } else {
                            $("#" + subData._id.$oid).append("<td style='cursor:pointer;'>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" disable >Delete</a></center>' + "</td>");
                        }
                    }
                }
                $("#userTable").dataTable();
            }
        });
    }
}

function deleteUser(userId) {

    var currentLoginUser = getUserSessionElement("userId");
    $.get(server_base_url + "/user/management/User/Delete", {
        currentuser: currentLoginUser,
        userid: userId
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("viewUserErrorMsgId", deleteMessage, "");
            setTimeout(function () {
                viewUserList();
            }, 1000);

        }
    });
}

function editUserInformation(userData, id) {
    if ((checkUserPrivelege(pvUpdateUser))) {
        if (userData == null || userData == "" || userData == undefined) {
            return false;
        }

        userData = JSON.parse(decodeURI(userData));
        var userLocation = "";
        if (userData.orgRole != null && userData.orgRole != "" && userData.orgRole != undefined && userData.orgRole.length > 0) {
            $.each(userData.orgRole, function (index, value) {
                userLocation = value.location;
            });
        }

        var ddo = userData.ddoId;
        if (ddo == undefined || ddo == "undefined" || ddo == "" || ddo == null) {
            ddo = "";
        }

        var address = userData.address;
        if (address == "undefined" || address == undefined) {
            address = "";
        }
        var city = userData.city;
        if (city == "undefined" || city == undefined) {
            city = "";
        }
        var country = userData.country;
        if (country == "undefined" || country == undefined) {
            country = "";
        }
        $("#viewUserMainTabId").text("").append('<div id="editUserProfileMainDiv" class="form-group panel" />');
        $("#editUserProfileMainDiv").append('<a href=javascript:resetUserPassword("' + id + '") class="text-primary bg-info" style="float:right;"><b>Reset password</b></a>');
        $("#editUserProfileMainDiv").append('<div id="editProfileHeaderDiv" class="mbxl text-center" />');
        $("#editProfileHeaderDiv").append('<h3><i class="fa fa-edit"></i>&nbsp;&nbsp;Edit User Profile</h3>');
        $("#editUserProfileMainDiv").append('<div id="editUserProfileErrorMsg" class="mbxl text-center"/>');
        $("#editUserProfileMainDiv").append('<div id="editUserMainBodyDiv" class="portlet-body" />');
        $("#editUserMainBodyDiv").append('<div id="editUserSubMainBodyDiv" class="row" />');
        $("#editUserMainBodyDiv").append('<div id="editUserBodyDiv" class="row" />');
        $("#editUserSubMainBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="firstName">First Name <span class="require">*</span></label><input type="text" id="fName" placeholder="Enter the first name.." onkeyup=validateName("fName","fNameErr") class="form-control" value="' + userData.fname + '"/><span id="fNameErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="lastName">Last Name <span class="require">*</span></label><input type="text" id="lName" placeholder="Enter the last name.." onkeyup=validateName("lName","lNameErr") class="form-control" value="' + userData.lname + '" /><span id="lNameErr" class="text-danger"></span></div></div>');
        $("#editUserSubMainBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="gender">Gender</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="radio" id="user_male" name="user_gender" value="Male" />&nbsp;&nbsp;'
                + '<label for="male">Male</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="radio" id="user_female" name="user_gender" value="Female" />&nbsp;&nbsp;<label for="female">Female</label></div>'
                + '<div class="form-group col-lg-6" id="mobileDiv"><label for="mobile">Mobile <span class="require">*</span></label><input type="text" id="mobile" class="form-control" value="' + userData.mobile + '" /><span id="mobileErr" class="text-danger"></span></div></div>');
        if (userData.gender != 'undefined') {
            if (userData.gender == "Male") {
                $('input[name=user_gender]').val([userData.gender]);
                $("#user_female").removeClass("active");
                $("#user_male").addClass("active");
            } else if (userData.gender == "Female") {
                $('input[name=user_gender]').val([userData.gender]);
                $("#user_male").removeClass("active");
                $("#user_female").addClass("active");
            } else {
                $("#user_male").removeClass("active");
                $("#user_female").removeClass("active");
            }
        }
        $('input[name=user_gender]').iCheck({
            radioClass: 'iradio_square-blue'
        });
        $("#editUserSubMainBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ddo">DDO</label><select class="form-control" name="ddo" id="ddo"></select></div>'
                + '<div class="form-group col-lg-6"><label for="location">Location <span class="require">*</span></label><select multiple="true" id="userLocation" class="select2-multi-value form-control"></select></div>');
        $("#userLocation").select2({
            placeholder: "----Select Location----",
            allowClear: true
        });
        $("#editUserSubMainBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="email">Email</label><input type="text" id="email" placeholder="Enter the email.." onkeyup=validateEmail("email","emailErr") class="form-control" value="' + userData.email + '" /><span id="emailErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="address">Address</label><textarea class="form-control" rows="2" id="address" placeholder="Enter address...">' + address + '</textarea><span id="addressErr" class="text-danger"></span></div></div>');
        $("#editUserSubMainBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="city">City <span class="require">*</span></label><input type="text" id="city" placeholder="Enter the city.." onkeyup=validateName("city","cityErr") class="form-control" value="' + city + '" /><span id="cityErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="state">State</label><select class="form-control" id="state"></select></div></div>');
        $("#editUserSubMainBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="pincode">Pincode</label><input type="text" id="zipCode" placeholder="Enter the pin code.." class="form-control" value="' + userData.zipcode + '" /><span id="pinCodeErr" class="text-danger"></span></div>'
                + '<div class="form-group col-lg-6"><label for="country">Country</label><input type="text" id="country" placeholder="Enter the country.." onkeyup=validateName("country","countryErr") class="form-control" value="' + country + '" /><span id="countryErr" class="text-danger"></span></div></div>');
        $("#editUserSubMainBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="country">Login Id</label><input type="text" id="loginId" placeholder="loginId" class="form-control" value="' + userData.loginid + '" /></div></div>');
        $("#editUserSubMainBodyDiv").append('<div class="col-lg-12" id="userRoleDiv">');
        $("#userRoleDiv").append('<div class="form-group col-lg-12"><label for="roles">Roles:</label></div>');

        //Calling role Service to fetch role from backend
        $.get(server_base_url + "/usermanagement/Roles/List", {
            loginUserObjectId: getUserSessionElement(seUserId)
        }).done(function (data) {
            if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                var mainData = data.result;
                if (mainData != null && mainData != "") {
                    $.each(mainData, function (objIndex, objValue) {
                        var roleName = objValue.roleName;
                        if (roleName != undefined && roleName != "" && roleName != "SuperAdmin") {
                            $("#userRoleDiv").append('<div class="col-md-2"><input name="roles" id=' + roleName + ' value=' + roleName + ' type="checkbox" />&nbsp;&nbsp;<label for=' + roleName + '>' + roleName + '</label></div>');
                        }
                    });
                    $('input[name=roles]').iCheck({
                        checkboxClass: 'icheckbox_square-blue'
                    });

                    if (userData.orgRole != null && userData.orgRole != "" && userData.orgRole != undefined && userData.orgRole.length > 0) {
                        $.each(userData.orgRole, function (index, value) {
                            $.each(value.role, function (ind, val) {
                                $("#" + val.roleName).iCheck('check');
                                $("#" + val.roleName).attr('checked', true);
                            });
                        });
                    }
                }
            }
        });

        $("#editUserSubMainBodyDiv").append('<div class="form-group"><center><button onclick=updateUserInformation("' + id + '") id="updateUserInfoButton" class="btn btn-success">Update</button></center></div>');
    }
    $("#loginId").prop("readonly", true);
    setuserStates(userData.state);
    $("#mobile").mask("(999) 999-9999");
    $("#zipCode").mask("999999");
    $("#ddo").append("<option value='" + userData.ddoId + "'>" + userData.ddoName + "</option>");
    $("#ddo").prop("disabled", true);
    fetchUserLocation(userLocation);
}

function fetchUserLocation(userlocationId) {
    var ddoId = $("#ddo").val();
    $.get(server_base_url + "/userManagement/LocationBasedOnDDO/List", {
        ddoId: ddoId
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#userLocation").append("<option value='" + subData._id.$oid + "'>" + subData.locationName + "</option>");
            }
            $("#userLocation").select2('val', userlocationId);
        }
    });
}

function resetUserPassword(userId) {
    $.get(server_base_url + "/user/management/ResetPassword", {
        loginid: userId
    }).done(function (data) {
        if (data == success || data.statuscode == success) {
            displaySuccessMessages("editUserProfileErrorMsg", "Password is Successfully Reset & send to user email", "");
            setTimeout(function () {
                viewUserList();
            }, 3500);
        } else if (data == fail) {
            displayLargeErrorMessages("ViewUserSelectionMainDivHeader", "<center>" + failMessage + "</center>");
        } else if (data == unauthorized) {
            displayLargeErrorMessages("ViewUserSelectionMainDivHeader", "<center>" + unauthorizedMessage + "</center>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        }
    });
}

function setuserStates(name) {
    $("#state").text("");
    var states = ["Andhra Pradesh", "Arunachal Pradesh", " Assam", " Bihar", " Chhattisgarh", " Goa", " Gujarat", " Haryana", " Himachal Pradesh", " Jammu and Kashmir", " Jharkhand", " Karnataka", " Kerala", " Madhya Pradesh", " Maharashtra", " Manipur", " Meghalaya", " Mizoram", " Nagaland", " Odisha", " Punjab", " Rajasthan", " Sikkim", " Tamilnadu", " Telangana", " Tripura", " Uttar Pradesh", " Uttarakhand", " West Bengal"];
    for (var i = 0; i < states.length; i++) {
        var state = states[i].trim();
        $("#state").append("<option value='" + state + "' >" + state + "</option>");
    }
    $("#state").val("").val(name);
}

function updateUserInformation(userId) {
    if ((checkUserPrivelege(pvUpdateUser))) {
        var validateNumber = $("#mobile").val();
        if (validateNumber.length < 10) {
            $("#editUserProfileErrorMsg").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please enter valid mobile number</strong><h5></div></center>");
            $("#mobileDiv").addClass('has-error');
            $("#mobileErr").append("Mobile Number should not be less then 10 digits");
            return false;
        } else {
            $("#mobileDiv").removeClass('has-error');
            $("#mobileErr").text("");
        }

        var userLocation = $("#userLocation").val();
        var fName = validateName('fname', 'fNameErr');
        var lName = validateName('lname', 'lNameErr');
        var email = validateEmail('email', 'emailErr');
        var city = validateName('city', 'cityErr');

        if (fName && lName && email && city) {
            $("#editUserProfileErrorMsg").text("");
            var fname = $("#fName").val();
            var lname = $("#lName").val();
            var gender = $("input[type='radio'][name='user_gender']:checked").val();
            var mobile = $("#mobile").val();
            var address = $("#address").val();
            var city = $("#city").val();
            var state = $("#state").val();
            var zipcode = $("#zipCode").val();
            var country = $("#country").val();
            var loginid = $("#loginid").val();
            var email = $("#email").val();
            var userDDO = $("#userDDO").val();
            var userLocation = $("#userLocation").val();
            if (userLocation == null || userLocation.length < 0) {
                $("#editUserProfileErrorMsg").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please select atleast one location</strong><h5></div></center>");
            } else {
                $("#editUserProfileErrorMsg").text("");
            }

            var rolesList = [];
            var roles = "";

            $.each($("input[name='roles']:checked"), function () {
                rolesList.push($(this).val());
            });

            var userJson = {
                fname: fname,
                lname: lname,
                gender: gender,
                mobile: mobile,
                address: address,
                city: city,
                state: state,
                zipcode: zipcode,
                country: country,
                loginid: loginid,
                email: email,
                ddo: userDDO
            }

            var loginUser = getUserSessionElement("userId");
            $.get(server_base_url + "/user/management/User/Update", {
                userjson: JSON.stringify(userJson),
                userid: userId,
                userroles: rolesList,
                location: userLocation,
                loginuserId: loginUser
            }).done(function (data) {
                if (data == fail || data == unauthorized) {
                } else if (data == invalidSession) {
                    callSessionTimeout();
                } else {
                    $("#editUserProfileErrorMsg").text("");
                    $("#fName").prop("readonly", true);
                    $("#lName").prop("readonly", true);
                    $("#mobile").prop("readonly", true);
                    $("#city").prop("readonly", true);
                    $("#email").prop("readonly", true);
                    $("#country").prop("readonly", true);
                    $("#zipCode").prop("readonly", true);
                    $("#address").prop("readonly", true);
                    $("#state").prop("disabled", true);
                    $("#updateUserInfoButton").attr("disabled", true);
                    displaySuccessMessages("editUserProfileErrorMsg", "User Information is successfully Updated", "");
                    setTimeout(function () {
                        viewUserList();
                    }, 2000);

                }
            });
        } else {
            $("#editUserProfileErrorMsg").text("").append("<center><div class='col-sm-12 text-primary' id='errorMessage'><h5><strong>Please fill <span class='require'>*</span> Entries</strong><h5></div></center>");
        }
    }
}

function addNewUserTab() {
//    if ((checkUserRole(rlAdmin) == true || checkUserRole(rlFinancialAdmin)) && (checkUserPrivelege(pvCreateUser))) {
    if ((checkUserRole(rlSuperAdmin) == true || checkUserRole(rlHRMSAdmin) || checkUserRole(rlPayrollAdmin) || checkUserRole(rlFinancialAdmin) || checkUserRole(rlBudgetAdmin) || checkUserRole(rlLeaveAdmin) || checkUserRole(rlPensionAdmin)) && (checkUserPrivelege(pvCreateUser))) {
        $("#viewUserMainTabId").text("").append('<div id="addNewUserMainDiv" class="form-group panel" />');
        $("#addNewUserMainDiv").append('<div id="addUserHeaderDiv" class="mbxl text-center" />');
        $("#addUserHeaderDiv").append('<h3><i class="fa fa-plus-circle"></i>&nbsp;&nbsp;Add New User</h3>');
        $("#addNewUserMainDiv").append('<div id="addUserErrorMsg" class="mbxl text-center"/>');
        $("#addNewUserMainDiv").append('<div id="addUserMainBodyDiv" class="portlet-body" />');
        $("#addUserMainBodyDiv").append('<div id="addUserSubMainBodyDivSearchButton" class="row" />');
        $("#addUserMainBodyDiv").append('<div id="addUserSubMainBodyDiv" class="row pal" />');
        $("#addUserSubMainBodyDivSearchButton").append('<div class="form-group col-lg-12"><h4 class="block-heading">&nbsp;&nbsp;&nbsp;Search Employee..</h4><div><div class="col-lg-12 mbm"><div class="input-group"><input type="search" class="form-control" placeholder="Search Employee.." id="searchId" onkeyup="ifEmptySearch()" onblur="ifEmptySearch()" /><span class="input-group-btn"><button type="button" class="btn btn-blue" onclick="loadSearchData()">Search</button></span></div></div></div></div>');
    }

}
function loadSearchData() {
    if ((checkUserPrivelege(pvCreateUser))) {
        $("#addUserErrorMsg").text("");
        $("#addUserSubMainBodyDiv").text("");
        var name = $("#searchId").val();
        if (name == "" || name == undefined) {
            displayLargeErrorMessagesInCenterInRed("addUserErrorMsg", "Please Enter Name");
            return false;
        }
        $.get(server_base_url + "/user/management/User/SearchEmploy", {
            name: name, sindex: "0", limit: "1000",
            locationId: getUserSessionElement(seLocationId),
            ddoId: getUserSessionElement(seDDOId)
        }).done(function (data) {
            if (data == fail || data == unauthorized || data == statusException) {
                $("#SearchEmployeeBodyId").text("");
                displayLargeErrorMessagesInCenterInRed("addUserSubMainBodyDiv", NoDataFound);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                $("#addUserSubMainBodyDiv").append('<div id="EmploySearchHeaderDiv" class="mbxl text-center" />');
                $("#EmploySearchHeaderDiv").text("").append('<br /><h4><strong>Search Employee List</strong></h4>');
                $("#addUserSubMainBodyDiv").append('<div id="viewUserSearchDiv" class="panel"/>');
                $("#viewUserSearchDiv").append('<div id="viewUserSearchError" />');
                $("#viewUserSearchDiv").text("").append('<div id="viewUserSearchMainDiv" class="panel-body" />');
                $("#viewUserSearchMainDiv").append('<div id="viewUserSearchMainBodyDiv" class="table-responsive" />');
                $("#viewUserSearchMainBodyDiv").append('<table id="SearchEmployeetable" class="table table-striped table-bordered table-hover" />');
                $("#SearchEmployeetable").append('<thead id="SearchEmployeeHeadId" />');
                $("#SearchEmployeetable").append('<tbody id="SearchEmployeeBodyId" />');
                $("#SearchEmployeeHeadId").append('<tr><th>Sno</th><th>Employee Name</th><th>Employee Code</th><th>Employee CodeM</th><th>DDO</th><th>Email</th><th><center>Edit</center</th></tr>');

                var sno = 0;
                var loggedInEmployeeId = "";
                if ((loggedInEmployeeId != "" || loggedInEmployeeId != null || loggedInEmployeeId != undefined || loggedInEmployeeId != "undefined")) {
                    loggedInEmployeeId = getUserSessionElement(seLoggedInEmployeeId);
                }
                for (var i = 0; i < data.length; i++) {
                    if (loggedInEmployeeId != data[i]._id.$oid) {
                        sno++;
                        $("#SearchEmployeeBodyId").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].employeeName + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].employeeCode + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].employeeCodeM + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].ddoName + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].email + "</td>"
                                + "<td style='cursor:pointer;' onclick=editEmployeeInformation('" + encodeURI(JSON.stringify(data[i])) + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td></tr>");
                    }
                }
                $("#SearchEmployeetable").DataTable();

            }
        });
    }
}

function editEmployeeInformation(employeeData) {
    if ((checkUserPrivelege(pvCreateUser))) {
        if (employeeData == null || employeeData == "" || employeeData == undefined) {
            return false;
        }
        var employeeData = JSON.parse(decodeURI(employeeData));
        var locationId = employeeData.location;
        $("#viewUserMainTabId").text("").append('<div id="employeeEditMainDiv" class="form-group panel" />');
        $("#employeeEditMainDiv").append('<div id="editEmployeeHeaderDiv" class="mbxl text-center" />');
        $("#editEmployeeHeaderDiv").append('<h3><i class="fa fa-edit"></i>&nbsp;&nbsp;Edit Employee Information</h3>');
        $("#employeeEditMainDiv").append('<div id="editEmployeeInfoErrorMsg" class="mbxl text-center" />');
        $("#employeeEditMainDiv").append('<div id="editEmployeeMainBodyDiv" class="portlet-body" />');
        $("#editEmployeeMainBodyDiv").append('<div id="editEmployeeSubMainBodyDiv" class="row" />');
        $("#editEmployeeMainBodyDiv").append('<input type ="hidden" id="employeeId" class="row" />');
        $("#editEmployeeSubMainBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employeeName">Employee Name</label><input type="text" id="empName" placeholder="Employee Name" class="form-control" value="' + employeeData.employeeName + '"/><span id="empNameErr"></span>'
                + '</div><div class="form-group col-lg-6"><label for="lastName">Employee Code</label><input type="text" id="employeeCode" placeholder="Employee Code" class="form-control" value="' + employeeData.employeeCode + '" /><span id="empCodeErr"></span></div></div>');
        $("#editEmployeeSubMainBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="firstName">Gender</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="radio" id="employ_male" name="Employ_gender" value="Male" />&nbsp;&nbsp;'
                + '<label for="employ_male">Male</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="radio" id="employ_female" name="Employ_gender" value="Female" />&nbsp;&nbsp;<label for="employ_female">Female</label></div>'
                + '<div class="form-group col-lg-6"><label for="employeeCodeM">Employee Code(M)</label><input type="text" id="employeeCodeM" placeholder="Employee Code(M)" class="form-control" value="' + employeeData.employeeCodeM + '" /><span id="empCodeMErr"></span></div></div>');
        $("#employeeId").val(employeeData._id.$oid);
        if (employeeData.gender != 'undefined') {
            if (employeeData.gender == "Male") {
                $('input[name=Employ_gender]').val([employeeData.gender]);
                $("#employ_female").removeClass("active");
                $("#employ_male").addClass("active");
            } else if (employeeData.gender == "Female") {
                $('input[name=Employ_gender]').val([employeeData.gender]);
                $("#employ_male").removeClass("active");
                $("#employ_female").addClass("active");
            } else {
                $("#employ_male").removeClass("active");
                $("#employ_female").removeClass("active");
            }
        }

        //gender
        $('input[name=Employ_gender]').iCheck({
            radioClass: 'iradio_square-blue'
        });
        $("#editEmployeeSubMainBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="email">Email Id</label><input type="text" id="empEmail" onkeyup=validateEmail("empEmail","emailErr") placeholder="loginId" class="form-control" value="' + employeeData.email + '" /><span id="emailErr" class="text-danger"></span></div>'
                + '<div class="form-group col-lg-6"><label for="accountNo">Account Number</label><input type="text" id="empAccount" placeholder="Account NO." class="form-control" value="' + employeeData.acnumber + '" /></div>');
        $("#editEmployeeSubMainBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="ddo">DDO</label><select class="form-control" name="ddoSelect" id="ddoSelect"></select></div>'
                + '<div class="form-group col-lg-6"><label for="location">Location</label><select multiple="true" id="location" class="select2-multi-value form-control"></select></div>');
        $("#editEmployeeSubMainBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="loginId">Login Id</label><input type="text" id="loginId" placeholder="loginId" class="form-control"/><span id="emailErr" class="text-danger"></span></div>'
                + '<div class="form-group col-lg-6"><label for="password">Password</label><input type="password" id="passwordId" placeholder="Password" class="form-control"/></div>');
        $("#editEmployeeSubMainBodyDiv").append('<div class="col-lg-12" id="roleDiv" />');
        $("#roleDiv").append('<div class="form-group col-lg-12"><label for="roles">Roles:</label></div>');
        //Calling role Service to fetch role from backend
        $.get(server_base_url + "/usermanagement/Roles/List", {
            loginUserObjectId: getUserSessionElement(seUserId)
        }).done(function (data) {
            if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                var mainData = data.result;
                if (mainData != null && mainData != "") {
                    $.each(mainData, function (objIndex, objValue) {
                        var roleName = objValue.roleName;
                        if (roleName == "SuperAdmin") {
                            roleName = "";
                        }
                        if (roleName != undefined && roleName != "") {
                            $("#roleDiv").append('<div class="col-md-2"><input name="roles" id="' + roleName + '" value="' + roleName + '" type="checkbox"/>&nbsp;&nbsp;<label>' + roleName + '</label></div>');
                        }
                    });
                    $('input[name=roles]').iCheck({
                        checkboxClass: 'icheckbox_square-blue'
                    });
                }
            }
        });

        $("#editEmployeeSubMainBodyDiv").append('<div class="form-group"><center><button onclick=createUser() id="submitUser" class="btn btn-success">Create User</button></center></div>');
        $("#location").select2({
            placeholder: "----Select Location----",
            allowClear: true
        });
        $("#ddoSelect").append("<option value='" + employeeData.ddo + "'>" + employeeData.ddoName + "</option>");
        $("#ddoSelect").prop("disabled", true);
        fetchLocation(locationId);
//        fetchRoles();
    }
}

function fetchLocation(locationId) {
    var ddoId = $("#ddoSelect").val();

    $.get(server_base_url + "/userManagement/LocationBasedOnDDO/List", {
        ddoId: ddoId
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#location").append("<option value='" + subData._id.$oid + "'>" + subData.locationName + "</option>");
            }
            $("#location").select2('val', locationId);
        }
    });
}

function createUser() {
    if ((checkUserPrivelege(pvCreateUser))) {
//    Demographics
        var employeeId = $("#employeeId").val();
        var employName = $("#empName").val();
        var empCode = $("#employeeCode").val();
        var empCodeM = $("#employeeCodeM").val();
        var gender = $("input[name='Employ_gender']:checked").val();
        var empEmail = $("#empEmail").val();
        var ddo = $("#ddoSelect").val();

//    Credentials
        var loginId = $("#loginId").val();
        var passwordId = $("#passwordId").val();

        if (loginId == null || loginId == "" || passwordId == null || passwordId == "") {
            $("#editEmployeeInfoErrorMsg").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill loginId and Password<strong></div></center>")
            return false;
        }

        if (passwordId.indexOf(" ") >= 0) {
            $("#editEmployeeInfoErrorMsg").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Password Should not contains space<strong></div></center>")
            return false;
        }

//    Roles & Locations
        var locations = $("#location").val();
        if (locations == null || locations.length <= 0 || locations == "") {
            $("#editEmployeeInfoErrorMsg").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please select atleast one location<strong></div></center>")
            return false;
        }
        var empRolesList = [];
        $.each($("input[name='roles']:checked"), function () {
            empRolesList.push($(this).val());
        });

        if (empRolesList.length <= 0 || empRolesList == "") {
            $("#editEmployeeInfoErrorMsg").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please select atleast one role<strong></div></center>")
            return false;
        }

        var userLoginId = getUserSessionElement(seUserId);
        var employJson = {
            pKey: employeeId,
            employeeName: employName,
            employeeCode: empCode,
            employeeCodeM: empCodeM,
            gender: gender,
            email: empEmail,
            ddo: ddo
        }

        $.get(server_base_url + "/user/management/User/Create", {
            employjson: JSON.stringify(employJson),
            employroles: empRolesList,
            locations: locations,
            loginUserId: userLoginId,
            loginid: loginId,
            password: passwordId
        }).done(function (data) {
            var statuscode = data.statuscode;
            if (statuscode == fail || statuscode == unauthorized) {
            } else if (statuscode == invalidSession) {
                callSessionTimeout();
            } else if (statuscode == success) {
                displaySuccessMessages("editEmployeeInfoErrorMsg", "User is succesfully created.", "");
                $("#empName").prop("readonly", true);
                $("input[type=radio]").attr('disabled', true);
                $("input[type=checkbox]").attr('disabled', true);
                $("#employeeCode").prop("readonly", true);
                $("#employeeCodeM").prop("readonly", true);
                $("#empEmail").prop("readonly", true);
                $("#empAccount").prop("readonly", true);
                $("#ddo").prop("readonly", true);
                $("#submitUser").attr('disabled', true);
                $("#location").attr('disable');
                $("#loginId").prop("readonly", true);
                $("#passwordId").prop("readonly", true);
                $("roles").attr("disabled", true);
                setTimeout(function () {
                    viewUserList();
                }, 2000);
            }
        });
    }
}

