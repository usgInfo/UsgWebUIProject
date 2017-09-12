

function displaySmallErrorMessages(divId, dispMessage) {
    $("#" + divId).text("").append("<span class='smallErrorMsg' style='color:brown;'>" + dispMessage + "</span>");
}
function displaySmallErrorMessagesInRed(divId, dispMessage) {
    $("#" + divId).text("").append("<span class='smallErrorMsg class='col-sm-12' style='color:brown;'>" + dispMessage + "</span>");
}
function displaySmallSuccessMessages(divId, dispMessage) {
    $("#" + divId).text("").append("<span class='smallSuccessMsg' style='color:green;'><strong>" + dispMessage + "</strong></span>");
}
function displayLargeErrorMessages(divId, dispMessage) {
    $("#" + divId).text("").append("<span class='largeErrorMsg' style='color:brown;'><strong>" + dispMessage + "</strong></span>");
}
function displayLargeErrorMessagesInCenterInRed(divId, dispMessage) {
    $("#" + divId).text("").append("<center><div class='smallErrorMsg' id='errorMessage' style='color:red;'><strong>" + dispMessage + "<strong></div></center>");
}
function displayLargeSuccessMessages(divId, dispMessage) {
    $("#" + divId).text("").append("<span class='largeSuccessMsg'>" + dispMessage + "</span>");
}

function encryptBase64String(input) {
    if (input != null && input != "null" && input != undefined && input != "undefined" && input != "") {
        return window.btoa(input);
    } else {
        return input;
    }
}

function decryptBase64String(input) {
    if (input != null && input != "null" && input != undefined && input != "undefined" && input != "") {
        return window.atob(input);
    } else {
        return input;
    }
}

function setUserSessionElement(key, value) {
    sessionStorage.setItem(window.btoa(key), window.btoa(value));
}

function getUserSessionElement(element) {
    var elementResult = sessionStorage.getItem(window.btoa(element));
    if (elementResult != null && elementResult != "null" && elementResult != undefined && elementResult != "undefined" && elementResult != "") {
        return window.atob(elementResult);
    } else {
        return elementResult;
    }
}

function removeUserSessionElement(key) {
    sessionStorage.removeItem(window.btoa(key));
}

function callSessionTimeout() {
    logout();
}

function checkUserRole(role) {
    var roles = getUserSessionElement(seRoles);
    if (roles.match(role)) {
        return true;
    } else {
        return false;
    }
}

function checkUserPrivelege(privilege) {
    var privileges = getUserSessionElement(sePrivileges);
    if (privileges.match(privilege)) {
        return true;
    } else {
        return false;
    }
}
//For any kind of Success Messages
function displaySuccessMessages(divId, dispStrongMessage, dispMessage) {
    if (dispMessage == "" || dispMessage == null || dispMessage == undefined || dispMessage == "undefined") {
        dispMessage = "";
    }
    $("#" + divId).text("").append('<div class="alert alert-success" style="color:green"><center><strong>' + dispStrongMessage + '!</strong>' + dispMessage + '</center></div>');
}
//For Any kind of error Messages
function displayErrorMessages(divId, dispStrongMessage, dispMessage) {
    if (dispMessage == "" || dispMessage == null || dispMessage == undefined || dispMessage == "undefined") {
        dispMessage = "";
    }
    $("#" + divId).text("").append('<div class="alert alert-warning"><center><strong>' + dispStrongMessage + '!</strong>' + dispMessage + '</center></div>');
}

function addSomeClass(divId, className) {
    $("#" + divId).addClass(className);
}

function removeSomeClass(divId, className) {
    $("#" + divId).removeClass(className);
}
function displayLargeErrorMessagesInTable(divId, dispMessage) {
    $("#" + divId).text("").append('<tbody><tr class="odd"><td valign="top" colspan="8">' + dispMessage + '</td></tr></tbody>');
}

function displayLoader(divId) {
    $("#" + divId).text("").append('<center><br /><br /><img src="../../assets/vendors/pageloader/images/loader1.GIF" /><br /><h3>Please wait while loading...</h3><br></center>');
}
function displayLoaderImage(divId) {
    $("#" + divId).text("").append('<center><img src="../../assets/vendors/pageloader/images/loader1.GIF" /></center>');
}
$('input[type=checkbox]').iCheck({
checkboxClass: 'icheckbox_square-blue'
});
$('input[type=radio').iCheck({
radioClass: 'iradio_square-blue'
});