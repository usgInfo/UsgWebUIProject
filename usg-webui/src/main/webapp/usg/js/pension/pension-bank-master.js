/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayPensionBank(divId) {


    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label> >> <label><a href="javascript:pensionMasters()">Pension Master</a></label> >> <label>Bank Master</label>');

    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");

    $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Bank Master</center>");
    $("#tableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colpensionbank'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");

    addToggleToId('colpensionbank', 'collapseOne2');

    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");

    $("#panelRow").append("<div id='pregsuccessBefore'  ></div>");
    $("#panelRow").append("<div id='pensionBanklistMessageDiv'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");

    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup").append("<input type='hidden' id='bid' >");

    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Bank Name", "required", "bankname", "Enter Bank Name", "onkeypress='return onlyAlphabets(event)'"));
    $("#Row1Col2").append(getLabel_InputWithSpan("Branch Name", "required", "branchname", "Enter Branch Name", "onkeypress='return onlyAlphabets(event)'"));

    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel_InputWithSpan("City ", "required", "city", "Enter City", "onkeypress='return validatealphanumeric(event)'"));
    $("#Row2Col2").append(getLabel("State", "required") + "" + getDropDown("state"));

    getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel_InputWithSpan("IFSC Code ", "", "ifsccode", "Enter IFSC Code", ""));
    $("#Row3Col2").append(getLabel_InputWithSpan("Micr Code ", "", "micrcode", "Enter Micr Code", "onkeypress='return validateNumber(event)' maxlength=9"));

    getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col1").append(getLabel_InputWithSpan("First Contact Person ", "", "primarycontactname", "Enter primary contact person name", "onkeypress='return validatealphanumeric(event)'"));
    $("#Row4Col2").append(getLabel_InputWithSpan("First Contact Number ", "", "primarycontactno", "Enter primary contact number", "onkeypress='return validateNumber(event)' maxlength=10"));

    getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
    $("#Row5Col1").append(getLabel_InputWithSpan("Secondary Contact Person", "", "secondarycontactname", "Enter secondary contact person name", "onkeypress='return validatealphanumeric(event)'"));
    $("#Row5Col2").append(getLabel_InputWithSpan("Secondary Contact Number", "", "secondarycontactno", "Enter secondary contact number", "onkeypress='return validateNumber(event)' maxlength=10"));

    getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
    $("#Row6Col1").append(getLabel_InputWithSpan("Account No", "required", "acnumber", "Enter account number", "onkeypress='return validateNumber(event)' maxlength=18 minlength=4"));
    $("#Row6Col2").append(getLabel_InputWithSpan("Address", "", "address", "Enter address", ""));

    //getLabelTextareaInRow("FieldGroup", "Remarks", "", "Row8", "Row7Col1", "remarks");

    $("#FieldGroup").append('<div class="row" id="row7">');
    $("#row7").append('<div class="col-md-6" id="Row7Col1">');
    $("#Row7Col1").append('<div class="form-group has-success" id="form_group_div">');
    $("#Row7Col1").append('<label for="remarks" class="control-label">Remarks</label>');
    $("#Row7Col1").append('<textarea id="remarks" type="text" placeholder="remarks" class="form-control"/>');

    $("#FieldGroup").append("<div id='panelRow7' class='row' />");
    $("#panelRow7").append("<br /><div class='col-md-12' id='buttonRow'/><center><button type='button' id='saveupdatebutton' value='Save' class='btn btn-success bn'  onclick='pensionBankValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetPensionBank()' class='btn btn-warning bn' name='reset' value='reset'>Reset</button></center></div>");
    setStates("", "state");
    $('#ifsccode').on('change', function (e) {
        this.value = this.value.toUpperCase();
    });
    $("#mainTabMenu").append("<div id='pensionBankListPanel' class='panel panel-blue' />");
    $("#pensionBankListPanel").append("<div id='pensionBankListPanelHeading' class='panel-heading' />");
    $("#pensionBankListPanelHeading").append("<h4 id='pensionBankfirstHeader1' class='panel-title' />");

    $("#pensionBankfirstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Pension Bank(s)</center>");
    $("#pensionBankfirstHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colpensionbanklist'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#pensionBankListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in pal' />");

    addToggleToId('colpensionbanklist', 'collapseOne3');

    $("#collapseOne3").append("<div id='pensionBankPanellistpanelMainBody' class = 'panel-body' />");
    $("#pensionBankPanellistpanelMainBody").append("<div id='pensionBank1listMessageDiv'  ></div>");
    $("#pensionBankPanellistpanelMainBody").append("<div id='pensionBanklistpanelRow' class='row' />");
    $("#pensionBanklistpanelRow").append("<div id='pensionBankLeftstatuslistpanelRow' class='table-responsive' />");
    viewPensionBankLists('pensionBankLeftstatuslistpanelRow');
    setTimeout(function () {
        $("#pregsuccessBefore").text("");
    }, 2100);

}

function viewPensionBankLists(divId) {

    $("#" + divId).text("").append("<div class='tab-pane' id='viewpensionBank'/>");
    $("#viewpensionBank").append("<div class='table-responsive' id='viewpensionBankSectionTableDiv' />");
    $("#viewpensionBankSectionTableDiv").append("<table class='table table-bordered' id='displaypensionBankTable' />");
    $("#displaypensionBankTable").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Bank Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Branch Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Account Number</th>"
            + "<th class='table_col_width'><i class='fa'></i>Address</th>"

            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "pension/master/PensionBank/ViewList", {
    }).done(function (bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionBank1listMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionBank1listMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionBank1listMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        }
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                $("#displaypensionBankTable").append("<tbody id='displaypensionBankTableBody' class='table-striped table-bordered' />");
                for (var i = bdata.length - 1; i >= 0; i--) {
                    sno++;
                    var bankPensionjson = {
                        id: bdata[i]._id.$oid,
                        bankName: bdata[i].bankName,
                        branchName: bdata[i].branchName,
                        city: bdata[i].city,
                        state: bdata[i].state,
                        firstContactName: bdata[i].firstContactName,
                        secondContactName: bdata[i].secondContactName,
                        firstContactNumber: bdata[i].firstContactNumber,
                        ifscCode: bdata[i].ifscCode,
                        micrCode: bdata[i].micrCode,
                        secondContactNumber: bdata[i].secondContactNumber,
                        accountNumber: bdata[i].accountNumber,
                        address: bdata[i].address,
                        remarks: bdata[i].remarks


                    };

                    bankPensionjson = JSON.stringify(bankPensionjson);
                    $("#displaypensionBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' class='table_row' >"
                            + "<td>" + sno + "</td>"
                            + "<td class='table_row'>" + bdata[i].bankName + "</td>"
                            + "<td class='table_row'>" + bdata[i].branchName + "</td>"
                            + "<td class='table_row'>" + bdata[i].accountNumber + "</td>"
                            + "<td class='table_row'>" + bdata[i].address + "</td>"
                            + "<td> <a href='javascript:void(0);' onclick=onclick=updatepensionBank('" + encodeURI(bankPensionjson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                            + "<td> <a href='javascript:void(0);' onclick=onclick=deletePopUp('deletePensionBankData','displayPensionBank','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                }
                $('#displaypensionBankTable').append("</table>");
                $('#displaypensionBankTable').dataTable();
            }
        }

    });
}
function deletepensionBank(id) {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deletePensionBankData(id);
    }
}
function deletePensionBankData(id) {
    $.post(server_base_url + "/pension/master/PensionBank/Delete", {
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionBank1listMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionBank1listMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionBank1listMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("pensionBank1listMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                displayPensionBank();
            }, 1000);

        }
    });
}
function resetPensionBank() {
    $('#bankname').val("");
    $('#branchname').val("");
    $('#city').val("");
    $('#ifsccode').val("");
    $('#micrcode').val("");
    $('#primarycontactname').val("");
    $('#primarycontactno').val("");
    $('#secondarycontactname').val("");
    $('#secondarycontactno').val("");
    $('#acnumber').val("");
    $('#address').val("");
    $('#remarks').val("");
    $('#state').val("");
    $('#banknameErr').text("");
    $('#branchnameErr').text("");
    $('#cityErr').text("");
    $('#ifsccodeErr').text("");
    $('#micrcodeErr').text("");
    $('#primarycontactnameErr').text("");
    $('#primarycontactnoErr').text("");
    $('#secondarycontactnameErr').text("");
    $('#secondarycontactnoErr').text("");
    $('#acnumberErr').text("");
    $('#addressErr').text("");
    $('#remarksErr').text("");
    $("#stateErr").text("");
    $('#banknameFieldGroup').val("");
    $('#branchnameFieldGroup').val("");
    $('#cityFieldGroup').val("");
    $('#stateFieldGroup').val("");
    $('#ifsccodeFieldGroup').val("");
    $('#micrcodeFieldGroup').val("");
    $('#primarycontactnameFieldGroup').val("");
    $('#primarycontactnoFieldGroup').val("");
    $('#secondarycontactnameFieldGroup').val("");
    $('#secondarycontactnoFieldGroup').val("");
    $('#acnumberFieldGroup').val("");
    $('#addressFieldGroup').val("");
    $('#remarksFieldGroup').val("");
    $("#pregsuccessBefore").text("");
    $("#ErrorDiv").text("");
}
function pensionBankValidation() {
    var saveorupdate = $("#saveorupdate").val();
    $("#branchnameErr").text("");
    $("#banknameErr").text("");
    $("#micrcodeErr").text("");
    $("#ifsccodeErr").text("");
    $("#remarksErr").text("");
    $("#addressErr").text("");
    $("#acnumberErr").text("");
    $("#secondarycontactnoErr").text("");
    $("#primarycontactnoErr").text("");
    $("#secondarycontactnameErr").text("");
    $("#primarycontactnameErr").text("");
    $("#pregsuccessBefore").text("");
    $("#stateErr").text("");
    $("#cityErr").text("");
    var bankname = $("#bankname").val();
    var branchname = $("#branchname").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var primarycontactname = $("#primarycontactname").val();
    var secondarycontactname = $("#secondarycontactname").val();
    var primarycontactno = $("#primarycontactno").val();
    var secondarycontactno = $("#secondarycontactno").val();
    var acnumber = $("#acnumber").val();
    var address = $("#address").val();
    var remarks = $("#remarks").val();
    var ifsccode = $("#ifsccode").val();
    var micrcode = $("#micrcode").val();
    var result = 1;
    if (bankname == "" || bankname == "undefined" || branchname == "" || branchname == "undefined" || city == "" || city == "undefined" || state == "" || state == "undefined" || acnumber == "" || acnumber == "undefined") {
//        $("#pregsuccessBefore").text("").append("<center><div class='smallErrorMsg' id='errorMessage' style='color:red;'><strong>Please fill all mandatory fields<strong></div></center>");
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
        return false;
    } else {




        if (bankname == "") {
            $("#bankname").focus();
            displaySmallErrorMessagesInRed("banknameErr", "Please enter Bank Name.");

            result = 0;
        } else if (bankname != "") {
            if (!bankname.match((alphaNumericPattern()))) {
                $("#bankname").focus();
                displaySmallErrorMessagesInRed("banknameErr", "Please enter valid Bank name.");
                return false;
                result = 0;
            }
        }
        if (branchname == "") {
            $("#branchname").focus();
            displaySmallErrorMessagesInRed("branchnameErr", "Please enter Branch Name.");
            return false;
            result = 0;
        } else if (branchname != "") {
            if (!branchname.match((alphaNumericPattern()))) {
                $("#branchname").focus();
                displaySmallErrorMessagesInRed("branchnameErr", "Please enter valid Branch name.");
                return false;
                result = 0;
            }
        }
        if (city == "") {
            $("#city").focus();
            displaySmallErrorMessagesInRed("cityErr", "Please enter city Name.");
            return false;
            result = 0;
        } else if (city != "") {
            if (!city.match((alphaNumericPattern()))) {
                $("#city").focus();
                displaySmallErrorMessagesInRed("cityErr", "Please enter valid city name.");
                return false;
                result = 0;
            }
        }
        if (state == null || state == "") {
            $("#state").focus();
            displaySmallErrorMessagesInRed("stateErr", "Please select state.");
            return false;
            result = 0;
        }
        if (ifsccode != "") {
            if (!ifsccode.match((ifscCodeValidation()))) {
                $("#ifsccode").focus();
                displaySmallErrorMessagesInRed("ifsccodeErr", "Please enter valid  IFSC code.");
                return false;
                result = 0;
            } else if (ifsccode.length != 11) {
                $("#ifsccode").focus();
                displaySmallErrorMessagesInRed("ifsccodeErr", "Please enter valid 11 digit IFSC CODE.");
                return false;
                result = 0;
            }
        }
        if (micrcode != "") {
            if (!micrcode.match((numbervalidation()))) {
                $("#micrcode").focus();
                displaySmallErrorMessagesInRed("micrcodeErr", "Please enter valid MICR CODE.");
                return false;
                result = 0;
            } else if (micrcode.length != 9) {
                $("#micrcode").focus();
                displaySmallErrorMessagesInRed("micrcodeErr", "Please enter valid 9 digit MICR CODE.");
                return false;
                result = 0;
            }
        }
        if (primarycontactno != "") {
            if (!primarycontactno.match((numbervalidation()))) {
                $("#primarycontactno").focus();
                displaySmallErrorMessagesInRed("primarycontactnoErr", "Please enter valid Contact person Number.");
                return false;
                result = 0;
            } else if (primarycontactno.length != 10) {
                $("#primarycontactno").focus();
                displaySmallErrorMessagesInRed("primarycontactnoErr", "Please enter valid 10 digits.");
                return false;
                result = 0;
            }
        }
        if (primarycontactname != "") {
            if (!primarycontactname.match((alphaNumericPattern()))) {
                $("#primarycontactname").focus();
                displaySmallErrorMessagesInRed("primarycontactnameErr", "Please enter valid primary contact name .");
                return false;
                result = 0;
            }
        }
        if (secondarycontactno != "") {
            if (!secondarycontactno.match((numbervalidation()))) {
                $("#secondarycontactno").focus();
                displaySmallErrorMessagesInRed("secondarycontactnoErr", "Please enter valid Secondary contact number.");
                return false;
                result = 0;
            } else if (secondarycontactno.length != 10) {
                $("#secondarycontactno").focus();
                displaySmallErrorMessagesInRed("secondarycontactnoErr", "Please enter valid 10 digits.");
                return false;
                result = 0;
            }
        }
        if (secondarycontactname != "") {
            if (!secondarycontactname.match((alphaNumericPattern()))) {
                $("#secondarycontactname").focus();
                displaySmallErrorMessagesInRed("secondarycontactnameErr", "Please enter valid Secondary contact name.");
                return false;
                result = 0;
            }
        }
        if (acnumber == "") {
//            $(".Row1Col1").addClass("has-error");

            displaySmallErrorMessagesInRed("acnumberErr", "Please enter Account Number.");
        } else if (acnumber != "") {
            if (!acnumber.match((numbervalidation()))) {
//    $("#Row6Col1").addClass("has-error");
                $("#acnumber").focus();
                displaySmallErrorMessagesInRed("acnumberErr", "Please enter valid Account Number.");
                return false;
                result = 0;
            } else if (acnumber.length < 4 || acnumber.length > 18) {
                $("#acnumber").focus();
                displaySmallErrorMessagesInRed("acnumberErr", "Account Number should be grater than 4 digits and less than 19 digits ");
                return false;
                result = 0;
            } else {
                savePensionBankDetails();
            }
        }


    }
}
function savePensionBankDetails() {
    var bankname = $('#bankname').val();
    var branchname = $('#branchname').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var ifsccode = $('#ifsccode').val();
    var micrcode = $('#micrcode').val();
    var primarycontactname = $('#primarycontactname').val();
    var secondarycontactname = $('#secondarycontactname').val();
    var primarycontactno = $('#primarycontactno').val();
    var secondarycontactno = $('#secondarycontactno').val();
    var acnumber = $('#acnumber').val();
    var address = $('#address').val();
    var remarks = $('#remarks').val();
    var bankjson = {
        bankName: bankname,
        branchName: branchname,
        city: city,
        state: state,
        ifscCode: ifsccode,
        micrCode: micrcode,
        firstContactName: primarycontactname,
        secondContactName: secondarycontactname,
        firstContactNumber: primarycontactno,
        secondContactNumber: secondarycontactno,
        accountNumber: acnumber,
        address: address,
        remarks: remarks
    }

    $.post(server_base_url + "/pension/master/PensionBank/Save", {
        bankJson: JSON.stringify(bankjson),
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == duplicate_Message) {
            displayErrorMessages("pregsuccessBefore", "" + existed + "");
            setTimeout(function () {
                displayPensionBank();
            }, 1000);
        } else {
            disableDiv("FieldGroup");
            setTimeout(function () {
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
            }, 1000);
            displayPensionBank("dashBoardBodyMainDiv");
        }
    });
}
function updatePensionBankDetails(id) {


    var bankname = $('#bankname').val();
    var branchname = $('#branchname').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var ifsccode = $('#ifsccode').val();
    var micrcode = $('#micrcode').val();
    var primarycontactname = $('#primarycontactname').val();
    var secondarycontactname = $('#secondarycontactname').val();
    var primarycontactno = $('#primarycontactno').val();
    var secondarycontactno = $('#secondarycontactno').val();
    var acnumber = $('#acnumber').val();
    var address = $('#address').val();
    var remarks = $('#remarks').val();
    var bankjson = {
        bankName: bankname,
        branchName: branchname,
        city: city,
        state: state,
        ifscCode: ifsccode,
        micrCode: micrcode,
        firstContactName: primarycontactname,
        secondContactName: secondarycontactname,
        firstContactNumber: primarycontactno,
        secondContactNumber: secondarycontactno,
        accountNumber: acnumber,
        address: address,
        remarks: remarks
    };
    bankjson = JSON.stringify(bankjson);
    $.post(server_base_url + "/pension/master/PensionBank/Update", {
        pensionbankupdateJson: bankjson,
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {
        if (data == fail) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");
        } else if (data == duplicate_Message) {
            displayErrorMessages("pregsuccessBefore", "" + existed + "");
            setTimeout(function () {
                displayPensionBank("dashBoardBodyMainDiv");
            }, 500);
        } else {
            disableDiv("FieldGroup");
            setTimeout(function () {
                displaySuccessMessages("pregsuccessBefore", updateSuccessMessage, "");
            }, 1000);
            displayPensionBank("dashBoardBodyMainDiv");
        }
    });
}

function updatepensionBank(obj) {

    obj = JSON.parse(decodeURI(obj));
    $("#bankname").val(obj.bankName);
    $("#branchname").val(obj.branchName);
    $("#city").val(obj.city);
    $("#state").val(obj.state);
    $("#ifsccode").val(obj.ifscCode);
    $("#micrcode").val(obj.micrCode);
    $("#primarycontactname").val(obj.firstContactName);
    $("#secondarycontactname").val(obj.secondContactName);
    $("#primarycontactno").val(obj.firstContactNumber);
    $("#secondarycontactno").val(obj.secondContactNumber);
    $("#acnumber").val(obj.accountNumber);
    $("#address").val(obj.address);
    $("#remarks").val(obj.remarks);

    $("#displaypensionBankTable tr").css("background-color", "white");
    $("#displaypensionBankTable tr" + "#" + obj.id).css("background-color", "rgba(10, 129, 156, 0.3)");


    $("#bankname").prop("readonly", false);
    $("#branchname").prop("readonly", false);
    $("#city").prop("readonly", false);
    $("#state").prop("readonly", false);
    $("#ifsccode").prop("readonly", false);
    $("#micrcode").prop("readonly", false);
    $("#primarycontactname").prop("readonly", false);
    $("#secondarycontactname").prop("readonly", false);
    $("#primarycontactno").prop("readonly", false);
    $("#secondarycontactno").prop("readonly", false);
    $("#acnumber").prop("readonly", false);
    $("#address").prop("readonly", false);
    $("#remarks").prop("readonly", false);
    $("#panelRow7").text("").append("<br /><center><button id='updateButton' onclick=updatePensionBankDetails('" + obj.id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayPensionBank()'  class='btn btn-warning bn' >Back</button></center>");
}

