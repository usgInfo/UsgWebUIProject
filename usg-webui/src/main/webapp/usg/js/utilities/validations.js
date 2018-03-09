/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validateNumber(key)
{
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    //comparing pressed keycodes
    if (!(keycode == 8 || keycode == 12) && (keycode < 13 || keycode > 13) && (keycode < 48 || keycode > 57))
    {
        return false;
    } else {
        return true;
    }
}
//Function to allow only alpha numeric to textbox
function validatealphanumeric(key) {
    var keycode = (key.which) ? key.which : key.keyCode;
//comparing pressed keycodes
    if (!(keycode == 8 || keycode == 12) && (keycode < 13 || keycode > 13) && (keycode < 32 || keycode > 33) && (keycode < 65 || keycode > 90) && (keycode < 97 || keycode > 122)) {
        return false;
    } else {
        return true;
    }
}
function alphaNumericPattern() {
    var pattern = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F\.\']*$/
    return pattern;
}

function alphaNumericPatterns() {
    var pattern = /^([a-z0-9A-Z\u0080-\u024F]+(?:. |-| |'))*[a-z0-9A-Z\u0080-\u024F\.\']*$/
    return pattern;
}


function alphaNumericWithSpacialCharPattern() {
    var pattern = /^([a-z - A-Z\u0080-\u024F]+(?:. |-| |'))*[a-z A-Z\u0080-\u024F\.\']*$/
    return pattern;
}
function numbervalidation() {
//    var numberpattern = /^[0-9]/;
    var numberpattern = /^[0-9]\d*$/;
    return numberpattern;
}
function doubleValidation() {
    var pattern = /^[0-9]*\.[0-9]{1,2}$/;
    return pattern;
}

function Phonevalidation() {
    var phonepattern = /^\d{10}$/;
    return phonepattern;
}
function  ifscCodeValidation() {
    var ifscCodePattern = /^[^\s]{4}\d{7}$/;
    return ifscCodePattern;

}
function PanNumberValidation() {
    var numberpattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
    return numberpattern;
}
function EmailValidation() {
//    var numberpattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    var numberpattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return numberpattern;
}

function alphabetsWithSpace() {

}

//accept only numbers
function acceptNumeric(key) {
    var keycode = (key.which) ? key.which : key.keyCode;
    if ((keycode >= 48 && keycode <= 57)) {
        return true;
    } else {
        return false;
    }
}

function acceptAlphanumeric(key) {
    var keycode = (key.which) ? key.which : key.keyCode;
//comparing pressed keycodes
    //  if ((keycode > 64 && keycode < 91) || (keycode > 96 && keycode < 123) )
    if ((keycode >= 48 && keycode <= 57) || (keycode >= 65 && keycode <= 90) || (keycode >= 97 && keycode <= 122) || keycode == 32)
    {
        // if (!(keycode == 8 || keycode == 12) && (keycode < 13 || keycode > 13) && (keycode < 32 || keycode > 33) && (keycode < 65 || keycode > 90) && (keycode < 97 || keycode > 122)) {
        return true;
    } else {
        return false;
    }
}
//function PFNumber() {
////    var numberpattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
//     var numberpattern = /^([a-zA-Z]{2})(\d{12})$/;
//    return numberpattern;
//}
function Category() {
    var pattern = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F\.\']*$/;
    return pattern;
}

function isNumberKeyValidation(el, evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    var number = el.value.split('.');
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    if (number.length > 1 && charCode == 46) {
        return false;
    }
    var caratPos = getSelectionStart(el);
    var dotPos = el.value.indexOf(".");
    if (caratPos > dotPos && dotPos > -1 && (number[1].length > 1)) {
        return false;
    }
    return true;
}

function getSelectionStart(o) {
    if (o.createTextRange) {
        var r = document.selection.createRange().duplicate()
        r.moveEnd('character', o.value.length)
        if (r.text == '')
            return o.value.length
        return o.value.lastIndexOf(r.text)
    } else
        return o.selectionStart
}

function AlphaNumericWithDot(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    if (key.length == 0)
        return;
    ///^[ A-Za-z0-9_@./#&+-]*$/
    var regex = /^[ A-Za-z0-9.,\b]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault)
            theEvent.preventDefault();
    }
}