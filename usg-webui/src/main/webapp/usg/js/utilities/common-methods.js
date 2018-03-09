/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Table Creation Methods

//For Two colum in a Row
function getTwoColumnInRow(DivID, rowId, firstColId, SecondColId) {
    $("#" + DivID).append('<div class="row" id="' + rowId + '" />');
    $("#" + rowId).append('<div class="col-md-6" / > <div class="form-group" id="' + firstColId + '" />');
    $("#" + rowId).append('<div class="col-md-6" / > <div class="form-group " id="' + SecondColId + '" />');

}
function getThreeColumnInRow(DivID, rowId, firstColId, SecondColId, thirdColId) {
    $("#" + DivID).append('<div class="row" id="' + rowId + '" />');
    $("#" + rowId).append('<div class="col-md-3" / > <div class="form-group" id="' + firstColId + '" />');
    $("#" + rowId).append('<div class="col-md-3" / > <div class="form-group " id="' + SecondColId + '" />');
    $("#" + rowId).append('<div class="col-md-3" / > <div class="form-group " id="' + thirdColId + '" />');
    $("#" + rowId).append('<div class="col-md-3" / > <div class="form-group " id="' + thirdColId + '" />');



}


function getThreeColumnInRow(DivID, rowId, firstColId, SecondColId, ThirdColId) {
    $("#" + DivID).append('<div class="row" id="' + rowId + '" />');
    $("#" + rowId).append('<div class="col-md-5" / > <div class="form-group" id="' + firstColId + '" />');
    $("#" + rowId).append('<div class="col-md-2" / > <div class="form-group" id="' + SecondColId + '" />');
    $("#" + rowId).append('<div class="col-md-5" / > <div class="form-group " id="' + ThirdColId + '" />');

}
function getThreeColumnInRowforSearch(DivID, rowId, firstColId, SecondColId, ThirdColId) {
    $("#" + DivID).append('<div class="row" id="' + rowId + '" />');
    $("#" + rowId).append('<div class="col-md-5" / > <div class="form-group" id="' + firstColId + '" />');
    $("#" + rowId).append('<div class="col-md-1" / > <div class="form-group" id="' + SecondColId + '" />');
    $("#" + rowId).append('<div class="col-md-6" / > <div class="form-group " id="' + ThirdColId + '" />');

}
function getThreeEqualColumnInRow(DivID, rowId, firstColId, SecondColId, ThirdColId) {
    $("#" + DivID).append('<div class="row" id="' + rowId + '" />');
    $("#" + rowId).append('<div class="col-md-4" / > <div class="form-group" id="' + firstColId + '" />');
    $("#" + rowId).append('<div class="col-md-4" / > <div class="form-group" id="' + SecondColId + '" />');
    $("#" + rowId).append('<div class="col-md-4" / > <div class="form-group " id="' + ThirdColId + '" />');

}
//For One colum in a Row
function getOneColumnInRow(DivID, rowId, firstColId) {
    $("#" + DivID).append('<div class="row" id="' + rowId + '" />');
    $("#" + rowId).append('<div class="col-md-12" / > <div class="form-group" id="' + firstColId + '" />');
}
function getOneColumnInRowForForm(DivID, rowId, firstColId, SecondColId) {
    $("#" + DivID).append('<div class="row" id="' + rowId + '" />');
    $("#" + rowId).append('<div class="col-md-3" / > <div class="form-group" id="' + firstColId + '" />');
    $("#" + rowId).append('<div class="col-md-6" / > <div class="form-group" id="' + SecondColId + '" />');
}
function    getLabelInputInRow(DivID, labelName, required, rowId, firstColId, inputId, str) {
    if (str == undefined || str == "undefined" || str == null) {
        str = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    if (required == "required") {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right">' + labelName + '<span class="require"> *</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right " >' + labelName + '</label></div>');
    }
    $("#" + rowId).append('<div class="col-md-9"> <input type="text" id="' + inputId + '" class="form-control" ' + str + ' maxlength=256><span id="' + inputIdErr + '" ></span></div>');
}
function    getLabelDropDownInRow(DivID, labelName, required, rowId, firstColId, inputId, str) {
    if (str == undefined || str == "undefined" || str == null) {
        str = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    if (required == "required") {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right">' + labelName + '<span class="require"> *</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right " >' + labelName + '</label></div>');
    }
    $("#" + rowId).append('<div class="col-md-9"> <select type="text" id="' + inputId + '" class="form-control" ' + str + '></select><span id="' + inputIdErr + '" ></span></div>');
}
function    getLabelCheckBoxInRow(DivID, labelName, required, rowId, firstColId, inputId, str, name) {
    if (str == undefined || str == "undefined" || str == null) {
        str = "";
    }
    if (name == undefined || name == "undefined" || name == null) {
        name = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    if (required == "required") {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right">' + labelName + '<span class="require"> *</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right " >' + labelName + '</label></div>');
    }
    $("#" + rowId).append('<div class="col-md-9"> <input type="checkbox" id="' + inputId + '" name="' + name + '" ' + str + '><span id="' + inputIdErr + '" ></span></div>');
}
function    getLabelRadioInRow(DivID, labelName, required, rowId, firstColId, inputId, str, name) {
    if (str == undefined || str == "undefined" || str == null) {
        str = "";
    }
    if (name == undefined || name == "undefined" || name == null) {
        name = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    if (required == "required") {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right">' + labelName + '<span class="require"> *</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right " >' + labelName + '</label></div>');
    }
    $("#" + rowId).append('<div class="col-md-9"> <input type="radio" id="' + inputId + '" name="' + name + '" ' + str + '><span id="' + inputIdErr + '" ></span></div>');
}
function    getLabelTextareaInRow(DivID, labelName, required, rowId, firstColId, inputId, str) {
    if (str == undefined || str == "undefined" || str == null) {
        str = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    if (required == "required") {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right">' + labelName + '<span class="require"> *</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right " >' + labelName + '</label></div>');
    }
    $("#" + rowId).append('<div class="col-md-9"> <textarea type="text" id="' + inputId + '" class="form-control" ' + str + '></textarea><span id="' + inputIdErr + '"></span></div>');
}
function    getLabelTextareaFullRow(DivID, labelName, required, rowId, firstColId, inputId, str) {
    if (str == undefined || str == "undefined" || str == null) {
        str = "";
    }
    var inputIdErr = inputId + "Err";
    $("#" + DivID).append('<div class="row" id="' + rowId + '" />');
    if (required == "required") {
        $("#" + rowId).append('<div class="col-md-12 form-group" ><label  class="">' + labelName + '<span class="require"> *</span></label><textarea type="text" id="' + inputId + '" class="form-control" ' + str + ' /><span id="' + inputIdErr + '" ></span></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-12 form-group" ><label  class=" " >' + labelName + '</label><textarea type="text" id="' + inputId + '" class="form-control" ' + str + ' maxlength=1000 /> <span id="' + inputIdErr + '" ></span></div>');
    }
}
function    getLabelTextareaInRow(DivID, labelName, required, rowId, firstColId, inputId, str) {
    if (str == undefined || str == "undefined" || str == null) {
        str = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    if (required == "required") {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right">' + labelName + '<span class="require"> *</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right " >' + labelName + '</label></div>');
    }
    $("#" + rowId).append('<div class="col-md-9"> <textarea type="text" id="' + inputId + '" class="form-control" ' + str + '></textarea><span id="' + inputIdErr + '"></span></div>');
}

//Get input box with passed parameter inputId, Placeholder message and value of input box
function getInput(inputId, placeholdermsg, value, str) {
    var ErrId = inputId + "Err";
    var inputStr = '<div class="" /><input class="form-control" type="text"  id="' + inputId + '" placeholder="' + placeholdermsg + '" value="' + value + '" ' + str + '><label id="' + ErrId + '"></label>';
    return inputStr
}
function getInputwithErrLabel(inputId, placeholdermsg, value, str) {
    var ErrId = inputId + "Err";
    var inputStr = '<div class="" /><input class="form-control" type="text" autocomplete="off" ondrop="return false;" oncut="return false;" onpaste="return false;" ondragstart="return false;" onselectstart="return false;" id="' + inputId + '" placeholder="' + placeholdermsg + '" value="' + value + '" ' + str + '><label id="' + ErrId + '"></label>';
    return inputStr
}
function getInputwithErrSpan(inputId, placeholdermsg, value, str) {
    var ErrId = inputId + "Err";
    var inputStr = '<div class="" /><input class="form-control" type="text"  id="' + inputId + '" placeholder="' + placeholdermsg + '" value="' + value + '" ' + str + '><span id="' + ErrId + '"></s>';
    return inputStr
}
//get Teaxarea ,error will display in label down side the textarea
function getTextareawithErrLabel(inputId, placeholdermsg, value, str) {
    var ErrId = inputId + "Err";
    var inputStr = '<div class="" /><textarea class="form-control" type="text"  id="' + inputId + '" placeholder="' + placeholdermsg + '" value="' + value + '" ' + str + '></textarea><label id="' + ErrId + '"></label>';
    return inputStr
}
//get Teaxarea ,error will display in span down side the textarea
function getTextareaWithErrSpan(inputId, placeholdermsg, value, str) {
    var ErrId = inputId + "Err";
    var inputStr = '<div class="" /><textarea class="form-control" type="text"  id="' + inputId + '" placeholder="' + placeholdermsg + '" value="' + value + '" ' + str + '></textarea><span id="' + ErrId + '"></span>';
    return inputStr
}
//Get Drop Down 
function getDropDown(dropDownId) {
    var inputIdErr = dropDownId + "Err";
    var dropDownStr = '<div class=""><select  class="form-control"  id="' + dropDownId + '"  value=""></select><span id="' + inputIdErr + '"></span></div>';
    return dropDownStr;
}
function getDropDownreadonly(dropDownId, str) {
    var inputIdErr = dropDownId + "Err";
    var dropDownStr = '<div class=""><select  class="form-control"  id="' + dropDownId + '"  value="" ' + str + '></select><span id="' + inputIdErr + '"></span></div>';
    return dropDownStr;
}
function getDropDownWithOnChange(dropDownId, str) {
    var inputIdErr = dropDownId + "Err";
    var dropDownStr = '<div class=""><select  class="form-control"  id="' + dropDownId + '" ' + str + ' value=""></select><span id="' + inputIdErr + '"></span></div>';
    return dropDownStr;
}

function getDropDownwithLabel(dropDownId) {
    var inputIdErr = dropDownId + "Err";
    var dropDownStr = '<div class=""><select  class="form-control"  id="' + dropDownId + '"  value=""></select><label id="' + inputIdErr + '"></label></div>';
    return dropDownStr;
}
function getCheckBoxwithLabel(checkBoxId) {
    var inputIdErr = checkBoxId + "Err";
    var dropDownStr = '<div class=""><input type="checkbox" id="' + checkBoxId + '" name="' + checkBoxId + '" ><label id="' + inputIdErr + '" ></label></div>';
    return dropDownStr;
}
//Get Label of input in a row
function getLabel(labelName, required) {
    var labelStr;
    if (required == "required") {
        labelStr = '<label  class="control-label">' + labelName + '<span class="require"> *</span></label>';
    } else {
        labelStr = '<label class="control-label">' + labelName + '</label>';

    }
    return labelStr;
}
function getCheckboxWithSpan(inputId, clas, str) {
    if (str == undefined || str == "undefined" || str == null) {
        str = "";
    }
    var ErrId = inputId + "Err";
    var inputStr = '<div class="" /><input class="' + clas + '" type="checkbox"  id="' + inputId + '"   ' + str + '><span id="' + ErrId + '"></span>';
    return inputStr;
}
// inputid= input along with label with passed parameters 
//required in the sense ... * mark after label 

function getLabel_InputWithSpan(labelName, required, inputId, placeholdermsg, str) {
    var label_Input_Str;
    var inputIdErr = inputId + "Err";
    if (required == "required") {
        label_Input_Str = '<label class="control-label">' + labelName + '<span class="require"> *</span></label><div class="bankname" /><input type="text" class="form-control"  id="' + inputId + '" placeholder="' + placeholdermsg + '" ' + str + '><span id="' + inputIdErr + '"></span>';
    } else {
        label_Input_Str = '<label class="control-label">' + labelName + '</label><div  class="bankname" /><input class="form-control" type="text"  id="' + inputId + '" placeholder="' + placeholdermsg + '" ' + str + ' ><span id="' + inputIdErr + '"></span>';
    }
    return label_Input_Str
}
function getLabel_Searchable_InputWithSpan(labelName, required, inputId, placeholdermsg, str, funcName) {
    var label_Input_Str;
    var inputIdErr = inputId + "Err";
    if (required == "required") {
        label_Input_Str = '<label class="control-label">' + labelName + '<span class="require"> *</span></label><div class="bankname" /><input type="text"  style="width:60%;" class="form-control"  id="' + inputId + '" placeholder="' + placeholdermsg + '" ' + str + '><span class="col-sm-1 glyphicon glyphicon-search" onclick="' + funcName + '"></span><span id="' + inputIdErr + '"></span>';
    } else {
        label_Input_Str = '<label class="control-label">' + labelName + '</label><div  class="bankname" /><input class="form-control" style="width:6%;" type="text"  id="' + inputId + '" placeholder="' + placeholdermsg + '" ' + str + ' maxlength=30/><span id="' + inputIdErr + '"></span>';
    }
    return label_Input_Str
}
function getLabel_InputWithLabel(labelName, required, inputId, placeholdermsg, str) {
    var label_Input_Str;
    var inputIdErr = inputId + "Err";
    if (required == "required") {
        label_Input_Str = '<label class="control-label">' + labelName + '<span class="require"> *</span></label><div class="" /><input type="text" class="form-control"  id="' + inputId + '" placeholder="' + placeholdermsg + '" ' + str + '><label id="' + inputIdErr + '"></label>';
    } else {
        label_Input_Str = '<label class="control-label">' + labelName + '</label><div class="" /><input class="form-control" type="text"  id="' + inputId + '" placeholder="' + placeholdermsg + '" ' + str + '><label id="' + inputIdErr + '"></label>';
    }
    return label_Input_Str
}
function disableDiv(DivId) {
    var nodes = document.getElementById(DivId).getElementsByTagName('*');
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].disabled = true;
    }
}
function enableDiv(DivId) {
    var nodes = document.getElementById(DivId).getElementsByTagName('*');
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].disabled = false;
    }
}
//fetchDropDownValues
function viewOption(url, name, field, DivId, message)
{
    $.get(server_base_url + url, {
    }).done(function(bdata) {
        var id = "";
        if (bdata != null) {
            $("#" + DivId).text("").append("<option value = '' selected>---- Select " + message + " ----</option>");
            $.each(bdata, function(index, value) {
                $.each(value, function(ind, val) {
                    if (ind == "_id") {
                        id = val.$oid;
                    }
                });
                $.each(value, function(ind, val) {
                    if (ind == field) {
                        if (val == name) {
                            $("#" + DivId).append("<option  value='" + id + "' selected>" + val + "</option>");
                        } else {
                            $("#" + DivId).append("<option  value='" + id + "'>" + val + "</option>");
                        }
                    }
                });
            });
        }
    });
}

//Validation 
//Validation Name/AlphaNumeric
function validateName(textId, divId) {
    var firstName = $("#" + textId).val();
//    var fnameReg = /^[a-zA-Z]{0,16}$/;
    var fnameReg = /^[a-zA-Z. ]+$/;
    if (!fnameReg.test(firstName)) {
        $("#" + divId).text("").append("Please enter valid Name");
        return false;
    } else {
        $("#" + divId).text("");
        return true;
    }
}

function validatealphaNumeric(textId, divId) {
    var alphaNumericName1 = $("#" + textId).val();
//    var fnameReg = /^[a-zA-Z]{0,16}$/;
    var alphaNumericReg1 = /^[0-9a-zA-Z. ]+$/;
    if (!alphaNumericReg1.test(alphaNumericName1)) {
//        displayErrorMessages(divId,"Please enter valid AlphaNumeric Values","");
          displaySmallErrorMessagesInRed(divId,"Please enter valid AlphaNumeric Values");
//        $("#" + divId).text("").append("Please enter valid AlphaNumeric Values");
        return false;
    } else {
        $("#" + divId).text("");
        return true;
    }
}
//Validation Email
function validateEmail(textId, divId) {
    var email = $("#" + textId).val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email)) {
        $("#" + divId).text("").append("Please enter valid Email");
        return false;
    } else {
        $("#" + divId).text("");
        return true;
    }
}

function scrolupfunction() {
    var body = $("body");
    var top = body.scrollTop() // Get position of the body
    if (top != 0)
    {
        body.animate({scrollTop: 0}, '500');
    }
}

//Validation for decimal number
function validateDecimalNumber(textId, divId) {
    var phoneVal = $("#" + textId).val();
    var filter = /^\d{1,9}(\.\d{1,2})?$/;
    if (!filter.test(phoneVal)) {
        $("#" + divId).text("").append("Please enter valid number");
        $("#" + textId).focus();
        return false;
    } else {
        $("#" + divId).text("");
        return true;
    }
}

//Validation Phone
function validatePhone(textId, divId) {
    var phoneVal = $("#" + textId).val();
    var filter = /^[0-9-+ ]+$/;
    if (!filter.test(phoneVal)) {
        $("#" + divId).text("").append("Please enter valid number");
        $("#" + textId).focus();
        return false;
    } else {
        $("#" + divId).text("");
        return true;
    }
}
function addSomeClass(divId, className) {
    $("#" + divId).addClass(className);
}
function removeSomeClass(divId, className) {
    $("#" + divId).removeClass(className);
}
//get desired otpions in the dropdown by sending select tag id , url pattern to get options  and particular filed name to be fetch from that dto
function viewOptionIdName(url, name, field, DivId, message)
{
    $.get(server_base_url + url, {
    }).done(function(bdata) {
        if (bdata != null) {

            $("#" + DivId).text("").append("<option value ='' selected disabled>---- Select " + message + " ----</option>");
            $.each(bdata, function(index, value) {
                $.each(value, function(ind, val) {
                    if (ind == field) {
                        if (val == name) {
                            $("#" + DivId).append("<option  value='" + val + "' selected>" + val + "</option>");
                        } else {
                            $("#" + DivId).append("<option  value='" + val + "'>" + val + "</option>");
                        }
                    }
                });
            });
        }
    });
}
//Get The Specified year range in drop downs 
function  getYearBetweenSpecifiedYear(previousYear, DivId, BeforeYear, AfterYear, message) {
    var dateToday = new Date();
    var yrRange = dateToday.getFullYear() - BeforeYear;
    var yrForward = dateToday.getFullYear() + AfterYear;
    $("#" + DivId).append("<option value='' selected disabled>---- Select " + message + " ----</option>");
    for (var i = yrRange; i < yrForward; i++) {
        $("#" + DivId).append("<option value=" + i + ">" + i + "</option>");
    }
    $("#" + DivId).val(previousYear);
}
//Send the options to be append in an array to append
function getHardCodedOptions(DivId, message, options) {
    $("#" + DivId).append("<option value='' selected>----Select " + message + " ----</option>");
    for (var i = 0; i < options.length; i++) {
        $("#" + DivId).append("<option value='" + options[i] + "'>" + options[i] + "</option>");
    }
}
function validateFloat(key)
{
    var keycode = (key.which) ? key.which : key.keyCode;
    if (!(keycode == 8 || keycode == 12) && (keycode < 13 || keycode > 13) && (keycode < 46 || keycode > 46) && (keycode < 48 || keycode > 57))
    {
        return false;
    } else {
        return true;
    }
}

function days_between(date1, date2) {
    var start = new Date(date1);
    var end = new Date(date2);
    var diff = new Date(end - start);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}

//function deletePopUp(yesFunctionName, noFunctionName, deleteId) {
//  
//    $("#popUpDiv").text("");
//    $("#popUpDiv").append('<div id="deleteModalBox" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade" />');
//    $("#deleteModalBox").append('<button type="button" data-toggle="modal"data-target="#deleteModalBox"  id="openPopup" style="display:none;"></button>');
//    $("#deleteModalBox").append('<div class="modal-dialog" id="deleteModalMainDiv" />');
//    $("#deleteModalMainDiv").append('<div class="modal-content" id="deleteModalSubMainDiv" />');
//    $("#deleteModalSubMainDiv").append('<div class="modal-body" id="deleteModalBody" />');
//    $("#deleteModalSubMainDiv").append('<div class="modal-footer" id="deleteModalFooter" />');
//    $("#deleteModalBody").append('<div>Are you sure?</div>');
//    $("#deleteModalFooter").append('<div><button type="button" data-disss="modal" class="btn btn-default" onclick="' + noFunctionName + '()">No</button><button type="button" data-dismiss="modal" class="btn btn-success" onclick=' + yesFunctionName + '("' + deleteId + '")>Yes</button></div>');
//    $("#openPopup").click();
//}

function deletePopUp(yesFunctionName, noFunctionName, deleteId) {

    $("#popUpDiv").text("");
    $("#popUpDiv").append('<div id="deleteModalBox" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade" />');
    $("#deleteModalBox").append('<button type="button" data-toggle="modal"data-target="#deleteModalBox"  id="openPopup" style="display:none;"></button>');
    $("#deleteModalBox").append('<div class="modal-dialog" id="deleteModalMainDiv" />');
    $("#deleteModalMainDiv").append('<div class="modal-content" id="deleteModalSubMainDiv" />');
    $("#deleteModalSubMainDiv").append('<div class="modal-body" id="deleteModalBody" />');
    $("#deleteModalSubMainDiv").append('<div class="modal-footer" id="deleteModalFooter" />');
    $("#deleteModalBody").append('<div>Are you sure?</div>');
    $("#deleteModalFooter").append('<div><button type="button" data-dismiss="modal" class="btn btn-default" onclick="' + noFunctionName + '()">No</button><button type="button" data-dismiss="modal" class="btn btn-success" onclick=' + yesFunctionName + '("' + deleteId + '")>Yes</button></div>');
    $("#openPopup").click();
}

function alertPopUp(yesFunctionName, alertId) {

    $("#popUpDiv").text("");
    $("#popUpDiv").append('<div id="alertModalBox" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade" />');
    $("#alertModalBox").append('<button type="button" data-toggle="modal"data-target="#alertModalBox"  id="alertPopup" style="display:none;"></button>');
    $("#alertModalBox").append('<div class="modal-dialog" id="alertModalMainDiv" />');
    $("#alertModalMainDiv").append('<div class="modal-content" id="alertModalSubMainDiv" />');
    $("#alertModalSubMainDiv").append('<div class="modal-body" id="alertModalBody" />');
    $("#alertModalSubMainDiv").append('<div class="modal-footer" id="alertModalFooter" />');
    $("#alertModalBody").append('<div>Payment Already Processed !</div>');
    $("#alertModalFooter").append('<div><button type="button" data-dismiss="modal" class="btn btn-success" onclick="' + yesFunctionName + '()">Ok</button></div>');
    $("#alertPopup").click();
}


function validateNumeric(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
}
function displayMessage(msg) {
    $("#pregsuccessBefore").append("<span style='color:green;'><center><strong>" + msg + "</strong></center></span>");
}
function displayErrorMessage(msg) {
    $("#pregsuccessBefore").append("<span style='color:red;'><center><strong>" + msg + "</strong></center></span>");
}

function    getLabeltextareaInRow(DivID, labelName, required, rowId, firstColId, inputId, str) {
    if (str == undefined || str == "undefined" || str == null) {
        str = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    if (required == "required") {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right">' + labelName + '<span class="require"> *</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right " >' + labelName + '</label></div>');
    }
    var placeholder = "Enter " + labelName;
    $("#" + rowId).append('<div class="col-md-9"> <textarea type="text" id="' + inputId + '" class="form-control" ' + str + ' placeholder ="' + placeholder + '"></textarea><span id="' + inputIdErr + '" ></span></div>');
}

function    getLabelInputInRowwithPlaceHolder(DivID, labelName, required, rowId, firstColId, inputId, str) {
    if (str == undefined || str == "undefined" || str == null) {
        str = "";
    }
    $("#" + DivID).append('<div class="row form-group" id="' + rowId + '" />');
    var inputIdErr = inputId + "Err";
    var placeholder = "Enter " + labelName;
    if (required == "required") {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right">' + labelName + '<span class="require"> *</span></label></div>');
    } else {
        $("#" + rowId).append('<div class="col-md-3" ><label  class="pull-right " >' + labelName + '</label></div>');
    }
    $("#" + rowId).append('<div class="col-md-9"> <input type="text" id="' + inputId + '" class="form-control" ' + str + ' placeholder ="' + placeholder + '"><span id="' + inputIdErr + '" ></span></div>');
}

function hidingTable(DivId) {
    $('#' + DivId).css({'display': 'block', opacity: 0.7, 'background': '#efefef'});
}

function displayErrMsgInTable(tableId, Msg) {
    $("#" + tableId).dataTable().fnDestroy();
    $("#" + tableId).dataTable({
        "language": {
            "emptyTable": Msg
        }

    });
}

function alertPopUpMessage(Message) {
    $("#popUpDiv").text("");
    $("#popUpDiv").append('<div id="alertModalBox" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade" />');
    $("#alertModalBox").append('<button type="button" data-toggle="modal"data-target="#alertModalBox"  id="alertPopup" style="display:none;"></button>');
    $("#alertModalBox").append('<div class="modal-dialog" id="alertModalMainDiv" />');
    $("#alertModalMainDiv").append('<div class="modal-content" id="alertModalSubMainDiv" />');
    $("#alertModalSubMainDiv").append('<div class="modal-body" id="alertModalBody" />');
    $("#alertModalSubMainDiv").append('<div class="modal-footer" id="alertModalFooter" />');
    $("#alertModalBody").append('<div>' + Message + '</div>');
    $("#alertModalFooter").append('<div><button type="button" data-dismiss="modal" class="btn btn-success" >Ok</button></div>');
    $("#alertPopup").click();
}

function basicIfElseForStatusCode(data, ErrorDiv) {
    if (data == fail || data.statuscode == fail) {
//    if (data == fail || data.statuscode == fail) {
        displaySmallErrorMessagesInRed(ErrorDiv, "Invalid username / password" + "<br/><br/>");
        return false;
    } else if (data == unauthorized || data.statuscode == unauthorized) {
        displaySmallErrorMessagesInRed(ErrorDiv, unauthorizedMessage + "<br/><br/>");
        return false;
    } else if (data == invalidSession || data.statuscode == invalidSession) {
        callSessionTimeout();
        return false;
    } else if (data == statusException || data.statuscode == statusException) {
        displaySmallErrorMessagesInRed(ErrorDiv, statusExceptionMessage + "<br/><br/>");
        return false;
    } else {
        return true;
    }
}

function validateResponseData(bdata, id) {

    if (bdata === null || bdata === fail || bdata === unauthorized ||
            bdata === invalidSession || bdata === statusException) {
        $("#" + id).text("").append("<center><div class='col-sm-12'  \n\
                style='color:red;'><strong>No Data Available..<strong></div></center>");
        return true;
    }

    return false;

}

function getFinancialYear(monthid, yearid) {

    var financialyear = getUserSessionElement("currentFinancialYear");
    var fromYearDate = "";
    var toyearDate = ""
    var financialyearArray = "";
    var fromYear = "";
    var toYear = "";
    if (financialyear != null && financialyear != "" && financialyear != undefined) {
        financialyearArray = financialyear.split("~");
    }
    if (financialyearArray != null && financialyearArray != "" && financialyearArray != undefined) {
        fromYearDate = financialyearArray[0].trim();
        toyearDate = financialyearArray[1].trim();
    }
    if (fromYearDate != null && fromYearDate != "" && fromYearDate != undefined) {
        var fromYearArray = fromYearDate.split("/");
        fromYear = fromYearArray[2];
    }
    if (toyearDate != null && toyearDate != "" && toyearDate != undefined) {
        var toYearArray = toyearDate.split("/");
        toYear = toYearArray[2];
    }
    var currentyear = "";
    $.get(server_base_url + "/common/date", {
    }).done(function(data) {
        currentyear = data.year;
    });
    $("#" + monthid).append("<option value='0' selected>-------Select Month---------</option>");
    $("#" + monthid).append("<option value='1'> January </option>");
    $("#" + monthid).append("<option value='2'> February </option>");
    $("#" + monthid).append("<option value='3'> March </option>");
    $("#" + monthid).append("<option value='4'> April </option>");
    $("#" + monthid).append("<option value='5'> May </option>");
    $("#" + monthid).append("<option value='6'> June </option>");
    $("#" + monthid).append("<option value='7'> July </option>");
    $("#" + monthid).append("<option value='8'> August </option>");
    $("#" + monthid).append("<option value='9'> September </option>");
    $("#" + monthid).append("<option value='10'> October </option>");
    $("#" + monthid).append("<option value='11'> November </option>");
    $("#" + monthid).append("<option value='12'> December </option>");

    $("#" + yearid).append("<option value='0' selected>-------Select Year---------</option>");
    if (currentyear == fromYear) {
        $("#" + yearid).append("<option value='" + fromYear + "'> " + fromYear + " </option>");
        $("#" + yearid).append("<option value='" + toYear + "' disabled> " + toYear + " </option>");
    } else {
        $("#" + yearid).append("<option value='" + fromYear + "'> " + fromYear + " </option>");
        $("#" + yearid).append("<option value='" + toYear + "' > " + toYear + " </option>");
    }
}

function getFinancialMonth(divid, year) {
    var financialyear = getUserSessionElement("currentFinancialYear");
    var fromYearDate = "";
    var toyearDate = ""
    var financialyearArray = "";
    var fromYear = "";
    var toYear = "";
    var month = "";
    var count = "";

    if (financialyear != null && financialyear != "" && financialyear != undefined) {
        financialyearArray = financialyear.split("~");
    }
    if (financialyearArray != null && financialyearArray != "" && financialyearArray != undefined) {
        fromYearDate = financialyearArray[0].trim();
        toyearDate = financialyearArray[1].trim();
    }
    if (fromYearDate != null && fromYearDate != "" && fromYearDate != undefined) {
        var fromYearArray = fromYearDate.split("/");
        fromYear = fromYearArray[2];
        if (year == fromYear) {
            month = fromYearArray[1];
            count = "fromYear";
        }
    }
    if (toyearDate != null && toyearDate != "" && toyearDate != undefined) {
        var toYearArray = toyearDate.split("/");
        toYear = toYearArray[2];
        if (year == toYear) {
            month = toYearArray[1];
            count = "toYear";
        }
    }
    $.get(server_base_url + "/payroll/reports/FinancialYear", {
        month: month,
        count: count,
    }).done(function(data) {
        if (data == NoData) {
            displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", NoDataFoundMessage + "");
        } else if (data == fail) {
            displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", NoDataFoundMessage + "");
        } else if (data == unauthorized) {
            displayErrMsgInTable("employeeAttendanceProcessMessageDiv", unauthorizedMessage);
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("employeeAttendanceProcessMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {

        } else {
            var mainData = data.result;
            var monthData = mainData.month;
            $("#" + divid).text("");
            if (monthData == "nodata") {
                $("#" + divid).append("<option>nodta</option>");
            } else {
                $("#" + divid).append(monthData);
            }


        }
    });
}
function getFromDateFromFinancialYear(fromFinyear, toFinacialYear)
{
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    var toFinacialYear = null;
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
    {
        var fromFinacialYear = finyearArray[0];
        var toFinacialYear = finyearArray[1];
        //alert(fromFinacialYear);
        return fromFinacialYear;
    }
}
function getFincialYearForAllReports()
{
    var financialyear = getUserSessionElement("currentFinancialYear");
    var fromYearDate = "";
    var toyearDate = ""
    var financialyearArray = "";
    var fromYear = "";
    var toYear = "";
    if (financialyear != null && financialyear != "" && financialyear != undefined) {
        financialyearArray = financialyear.split("~");
    }
    if (financialyearArray != null && financialyearArray != "" && financialyearArray != undefined) {
        fromYearDate = financialyearArray[0].trim();
        toyearDate = financialyearArray[1].trim();
    }
    if (fromYearDate != null && fromYearDate != "" && fromYearDate != undefined) {
        var fromYearArray = fromYearDate.split("/");
        fromYear = fromYearArray[2];
    }
    return fromYear;

}

function checkUserIsAuthorised(privilege) {
    if (!checkUserPrivelege(privilege)) {
        alert("You are not authorised");
    }
    return;
}
//ddoDivId -------------------------------Represent the dropdown id where logged in ddo value has to be appendeded
//locationDivId --------------------------Represent the dropdown id where logged in location value has to be appendeded
function getLoggedInDDOLocationInDropDown(ddoDivId, locationDivId) {
    var ddoId = getUserSessionElement(seDDOId);
    var ddoName = getUserSessionElement(seDDOName);
    var locationId = getUserSessionElement(seLocationId);
    var locationName = getUserSessionElement(seLocationName);
    $("#" + ddoDivId).text("").append("<option value=" + ddoId + "   selected>" + ddoName + "</option>").prop("disabled", true);
    $("#" + locationDivId).text("").append("<option value=" + locationId + "  selected>" + locationName + "</option>").prop("disabled", true);
}
//ddoDivId -------------------------------Represent the dropdown id where logged in ddo value has to be appendeded
//ddoDivIdStr ----------------------------Represt the attributes to be appended in a option tag of DDO
//locationDivId --------------------------Represent the dropdown id where logged in location value has to be appendeded
//locationDivIdStr------------------------Represt the attributes to be appended in a option tag of Location 
//Example---------------------------------getLoggedInDDOLocationInDropDownWithAttributes("ddoDivId","onchange=getDesignation():getDepartment()","locationDivId","onchange=getName()");
function getLoggedInDDOLocationInDropDownWithAttributes(ddoDivId, ddoDivIdStr, locationDivId, locationDivIdStr) {
    var ddoId = getUserSessionElement(seDDOId);
    var ddoName = getUserSessionElement(seDDOName);
    var locationId = getUserSessionElement(seLocationId);
    var locationName = getUserSessionElement(seLocationName);
    $("#" + ddoDivId).text("").append("<option value=" + ddoId + "   " + ddoDivIdStr + " selected>" + ddoName + "</option>").prop("disabled", true);
    $("#" + locationDivId).text("").append("<option value=" + locationId + "   " + locationDivIdStr + " selected>" + locationName + "</option>").prop("disabled", true);
}
//ddoDivId -------------------------------Represent the dropdown id where logged in ddo value has to be appendeded
//ddoDivIdStr ----------------------------Represt the attributes to be appended in a option tag of DDO
//Example---------------------------------getLoggedInDDOInDropDown("ddoDivId","onchange=getDesignation():getDepartment");
function getLoggedInDDOInDropDown(ddoDivId, ddoDivIdStr) {
    var ddoId = getUserSessionElement(seDDOId);
    var ddoName = getUserSessionElement(seDDOName);
    $("#" + ddoDivId).text("").append("<option value=" + ddoId + "   " + ddoDivIdStr + "  selected>" + ddoName + "</option>").prop("disabled", true);
}
//locationDivId --------------------------Represent the dropdown id where logged in location value has to be appendeded
//locationDivIdStr------------------------Represt the attributes to be appended in a option tag of Location 
//Example---------------------------------getLoggedInLocationInDropDown(,"locationDivId","onchange=getName()");
function getLoggedInLocationInDropDown(locationDivId, locationDivIdStr) {
    var locationId = getUserSessionElement(seLocationId);
    var locationName = getUserSessionElement(seLocationName);
    $("#" + locationDivId).text("").append("<option value=" + locationId + "  " + locationDivIdStr + " selected>" + locationName + "</option>").prop("disabled", true);
}
//To trigger On change method ......
//Example ----------- $("#ddoDivId").trigger("onchange");

//Converting milliseconds to normal date Format(dd/mm/yyyy)
function convertMillisecondsToDateFormat(date) {
    var date = new Date(date);
    var dateToStr = date.toLocaleDateString().split("/");
    var cleanDate = dateToStr[1] + "/" + dateToStr[0] + "/" + dateToStr[2];
    return cleanDate;
}

//get Budget Heads when you update vouchers with obj id in name  
function viewOptionsInUpdateforBudgetHead(url, name, field, DivId, message)
{
    $.get(server_base_url + url, {
    }).done(function(bdata) {
        var id = "";
        if (bdata != null) {
            $("#" + DivId).text("").append("<option value = '' selected>---- Select " + message + " ----</option>");
            $.each(bdata, function(index, value) {
                $.each(value, function(ind, val) {
                    if (ind == "_id") {
                        id = val.$oid;
                    }
                });
                $.each(value, function(ind, val) {
                    if (ind == field) {
                        if (id == name) {
                            $("#" + DivId).append("<option  value='" + id + "' selected>" + val + "</option>");
                        } else {
                            $("#" + DivId).append("<option  value='" + id + "'>" + val + "</option>");
                        }
                    }
                });
            });
        }
    });
}