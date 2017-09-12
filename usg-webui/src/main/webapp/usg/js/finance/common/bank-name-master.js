//Finance >> Bank Name Master
function banknamemaster(divId) {

    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=banknamemaster("dashboardBodyMainDiv")>Bank Master</a>');
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").text("").append("<div id='mainTabMenuModal'   />");
    //  if (checkUserPrivelege(pvCreateBankName)) {
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<div class='panel-title'  style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>Bank Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='bankNameColDiv'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");

    $("#bankNameColDiv").click(function () {
        $("#collapseOne2").toggle();
        if ($("#bankNameColDiv span").hasClass("glyphicon-minus-sign")) {
            $("#bankNameColDiv").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#bankNameColDiv").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<div id='pregsuccessBefore'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup").append("<input type='hidden' id='bid' >");

    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Bank Name", "required", "bankname", "Enter Bank Name", "onkeypress='return acceptAlphanumeric(event)'"));
    $("#Row1Col2").append(getLabel_InputWithSpan("Branch Name", "required", "branchname", "Enter Branch Name", "onkeypress='return acceptAlphanumeric(event)'"));

    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel_InputWithSpan("City ", "required", "city", "Enter City", "onkeypress='return acceptAlphanumeric(event)'"));
    $("#Row2Col2").append(getLabel("State", "required") + "" + getDropDown("state"));

    getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel_InputWithSpan("IFSC Code ", "", "ifsccode", "Enter IFSC Code", "maxlength=11"));
    $("#Row3Col2").append(getLabel_InputWithSpan("MICR Code ", "", "micrcode", "Enter MICR Code", "onkeypress='return validateNumber(event)' maxlength=9"));

    getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col1").append(getLabel_InputWithSpan("First Contact Person ", "", "primarycontactname", "Enter primary contact person name", "onkeypress='return acceptAlphanumeric(event)'"));
    $("#Row4Col2").append(getLabel_InputWithSpan("First Contact Number ", "", "primarycontactno", "Enter primary contact number", "onkeypress='return validateNumber(event)' maxlength=10"));

    getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
    $("#Row5Col1").append(getLabel_InputWithSpan("Secondary Contact Person", "", "secondarycontactname", "Enter secondary contact person name", "onkeypress='return acceptAlphanumeric(event)'"));
    $("#Row5Col2").append(getLabel_InputWithSpan("Secondary Contact Number", "", "secondarycontactno", "Enter secondary contact number", "onkeypress='return validateNumber(event)' maxlength=10"));

    getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
    $("#Row6Col1").append(getLabel_InputWithSpan("Account No", "required", "acnumber", "Enter account number", "onkeypress='return validateNumber(event)' maxlength=18"));
    $("#Row6Col2").append(getLabel_InputWithSpan("Address", "", "address", "Enter address", ""));

    $("#FieldGroup").append('<div class="row" id="row7">');
    $("#row7").append('<div class="col-md-6" id="Row7Col1">');
    $("#Row7Col1").append('<div class="form-group has-success" id="form_group_div">');
    $("#Row7Col1").append('<label for="remarks" class="control-label">Remarks</label>');
    $("#Row7Col1").append('<textarea id="remarks" type="text" placeholder="remarks" class="form-control"/>');
    $("#row7").append('<div class="col-md-6" id="Row7Col2">');
    $("#Row7Col2").append('<div class="form-group has-success" id="form_group_div1">');
    $("#Row7Col2").append('<label for="remarks" class="control-label">Is Used In Ledger</label>');
    $("#Row7Col2").append('<div claa="col-sm-1"/><input type="checkbox" id="usedInLedger" name="ledger /><div claa="col-sm-1"/>');

    $("#FieldGroup").append("<div id='panelRow7' class='row' />");
    $("#FieldGroup").append("<div id='panelRow8' class='row' />");
    $("#panelRow7").append('<div class="form-group has-success" id="form_group_div1">');
    $("#panelRow8").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='accountBankValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='resetBackBtnId' onclick='wipeAllAccountBankData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
    setStates("", "state");
    $('#ifsccode').on('change', function (e) {
        this.value = this.value.toUpperCase();
    });
    //  }


    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    $("textarea").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
    // setTimeout(function () {
    viewAccountBankList("tableHeaderForList");
    // }, 3000);

    setTimeout(function () {
        $("#pregsuccessBefore").text("");
    }, 3000);

}

function accountBankValidation() {
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
        if (acnumber == "") {
//            $(".Row1Col1").addClass("has-error");

            displaySmallErrorMessagesInRed("acnumberErr", "Please enter Account Number.");
        } else if (acnumber != "") {
            if (!acnumber.match((numbervalidation()))) {
//    $("#Row6Col1").addClass("has-error");
                $("#acnumber").focus();
                displaySmallErrorMessagesInRed("acnumberErr", "Please enter valid Account Number.");
                result = 0;
            } else if (acnumber.length < 9) {
                $("#acnumber").focus();
                displaySmallErrorMessagesInRed("acnumberErr", "Invalid! Account No. Must be minimum 9 digits.");
                result = 0;
            } else if (acnumber.length > 18) {
                $("#acnumber").focus();
                displaySmallErrorMessagesInRed("acnumberErr", "Invalid! Account No. Must be below 18 digits");
                result = 0;
            }
        }
        if (secondarycontactno != "") {
            if (!secondarycontactno.match((numbervalidation()))) {
                $("#secondarycontactno").focus();
                displaySmallErrorMessagesInRed("secondarycontactnoErr", "Please enter valid Secondary contact number.");
                result = 0;
            } else if (secondarycontactno.length != 10) {
                $("#secondarycontactno").focus();
                displaySmallErrorMessagesInRed("secondarycontactnoErr", "Please enter valid 10 digits.");
                result = 0;
            }
        }
        if (secondarycontactname != "") {
            if (!secondarycontactname.match((alphaNumericPattern()))) {
                $("#secondarycontactname").focus();
                displaySmallErrorMessagesInRed("secondarycontactnameErr", "Please enter valid Secondary contact name.");
                result = 0;
            }
        }
        if (primarycontactno != "") {
            if (!primarycontactno.match((numbervalidation()))) {
                $("#primarycontactno").focus();
                displaySmallErrorMessagesInRed("primarycontactnoErr", "Please enter valid Contact person Number.");
                result = 0;
            } else if (primarycontactno.length != 10) {
                $("#primarycontactno").focus();
                displaySmallErrorMessagesInRed("primarycontactnoErr", "Please enter valid 10 digits.");
                result = 0;
            }
        }
        if (primarycontactname != "") {
            if (!primarycontactname.match((alphaNumericPattern()))) {
                $("#primarycontactname").focus();
                displaySmallErrorMessagesInRed("primarycontactnameErr", "Please enter valid primary contact name .");
                result = 0;
            }
        }
        if (micrcode != "") {
            if (!micrcode.match((numbervalidation()))) {
                $("#micrcode").focus();
                displaySmallErrorMessagesInRed("micrcodeErr", "Please enter valid MICR CODE.");
                result = 0;
            } else if (micrcode.length != 9) {
                $("#micrcode").focus();
                displaySmallErrorMessagesInRed("micrcodeErr", "Please enter valid 9 digit MICR CODE.");
                result = 0;
            }
        }
        if (ifsccode != "") {
            if (!ifsccode.match((ifscCodeValidation()))) {
                $("#ifsccode").focus();
                displaySmallErrorMessagesInRed("ifsccodeErr", "Please enter valid  IFSC code.");
                result = 0;
            } else if (ifsccode.length != 11) {
                $("#ifsccode").focus();
                displaySmallErrorMessagesInRed("ifsccodeErr", "Please enter valid 11 digit IFSC CODE.");
                result = 0;
            }
        }
        if (state == null || state == "") {
            $("#state").focus();
            displaySmallErrorMessagesInRed("stateErr", "Please select state.");
            result = 0;
        }
        if (city == "") {
            $("#city").focus();
            displaySmallErrorMessagesInRed("cityErr", "Please enter city Name.");
            result = 0;
        } else if (city != "") {
            if (!city.match((alphaNumericPattern()))) {
                $("#city").focus();
                displaySmallErrorMessagesInRed("cityErr", "Please enter valid city name.");
                result = 0;
            }
        }

        if (branchname == "") {
            $("#branchname").focus();
            displaySmallErrorMessagesInRed("branchnameErr", "Please enter Branch Name.");
            result = 0;
        } else if (branchname != "") {
            if (!branchname.match((alphaNumericPattern()))) {
                $("#branchname").focus();
                displaySmallErrorMessagesInRed("branchnameErr", "Please enter valid Branch name.");
                result = 0;
            }
        }
        if (bankname == "") {
            $("#bankname").focus();
            displaySmallErrorMessagesInRed("banknameErr", "Please enter Bank Name.");
            result = 0;
        } else if (bankname != "") {
            if (!bankname.match((alphaNumericPattern()))) {
                $("#bankname").focus();
                displaySmallErrorMessagesInRed("banknameErr", "Please enter valid Bank name.");
                result = 0;
            }
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveAccountBankDetails();
            } else {
                updateAccountBankDetails();
            }
        }
    }
}
function saveAccountBankDetails() {
    // if (checkUserPrivelege(pvCreateBankName)) {
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
    var usedInLedger;
    if ($('#usedInLedger').prop('checked')) {
        usedInLedger = true;
    } else
    {
        usedInLedger = false;
    }

    var bankjson = {
        bankName: bankname,
        branchName: branchname,
        city: city,
        state: state,
        ifscCode: ifsccode,
        micrCode: micrcode,
        primaryContactName: primarycontactname,
        secondaryContactName: secondarycontactname,
        primaryContactNo: primarycontactno,
        secondaryContactNo: secondarycontactno,
        accNumber: acnumber,
        address: address,
        remarks: remarks,
        usedInLedger: usedInLedger
    };
    $.post(server_base_url + "financial/common/BankName/Save", {
        bankJson: JSON.stringify(bankjson),
        userId: getUserSessionElement("userId")
    }).done(function (data) {
        if (data == IFSC_CODE_EXISTED) {
            $("#ifsccode").focus();
            displaySmallErrorMessagesInRed("ifsccodeErr", "IFSC Code is already existed");
            return;
        } else if (data == MICR_CODE_EXISTED) {
            $("#micrcode").focus();
            displaySmallErrorMessagesInRed("micrcodeErr", "MICR Code is already existed");
            return;
        } else if (data == ACCOUNT_NUMBER_EXISTED) {
            $("#acnumber").focus();
            displaySmallErrorMessagesInRed("acnumberErr", "Account Number is already existed");
            return;
        } else if (data == INVALID_ACCOUNT_NUMBER) {
            $("#acnumber").focus();
            displaySmallErrorMessagesInRed("acnumberErr", "Account Number is not valid");
            return;
        } else if (data == fail || data.statuscode == fail) {
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate_Message) {
            displayErrorMessages("pregsuccessBefore", "" + existed + "");
            setTimeout(function () {
                banknamemaster("dashBoardBodyMainDiv");
            }, 3000);
        } else {
            disableDiv("FieldGroup");
            setTimeout(function () {
                banknamemaster("dashBoardBodyMainDiv");
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
            }, 3000);
        }
    });
    // }
}
function updateAccountBankDetails() {
    //if (checkUserPrivelege(pvUpdateBankName)) {
    var bid = $('#bid').val();
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
    var usedInLedger;
    if ($('#usedInLedger').prop('checked')) {
        usedInLedger = true;
    } else
    {
        usedInLedger = false;
    }
    var bankjson = {
        bankName: bankname,
        branchName: branchname,
        city: city,
        state: state,
        ifscCode: ifsccode,
        micrCode: micrcode,
        primaryContactName: primarycontactname,
        secondaryContactName: secondarycontactname,
        primaryContactNo: primarycontactno,
        secondaryContactNo: secondarycontactno,
        accNumber: acnumber,
        address: address,
        remarks: remarks,
        usedInLedger: usedInLedger
    };
    $.post(server_base_url + "financial/common/BankName/Update", {
        bankJson: JSON.stringify(bankjson),
        bid: bid,
        userId: getUserSessionElement("userId")
    }).done(function (data) {
        if (data == IFSC_CODE_EXISTED) {
            $("#ifsccode").focus();
            displaySmallErrorMessagesInRed("ifsccodeErr", "IFSC Code is already existed");
            return;
        } else if (data == MICR_CODE_EXISTED) {
            $("#micrcode").focus();
            displaySmallErrorMessagesInRed("micrcodeErr", "MICR Code is already existed");
            return;
        } else if (data == ACCOUNT_NUMBER_EXISTED) {
            $("#acnumber").focus();
            displaySmallErrorMessagesInRed("acnumberErr", "Account Number is already existed");
            return;
        } else if (data == INVALID_ACCOUNT_NUMBER) {
            $("#acnumber").focus();
            displaySmallErrorMessagesInRed("acnumberErr", "Account Number is not valid");
            return;
        } else if (data == fail) {
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate_Message) {
            displayErrorMessages("pregsuccessBefore", "" + existed + "");
            setTimeout(function () {
                banknamemaster("dashBoardBodyMainDiv");
            }, 3000);
        } else {
            disableDiv("FieldGroup");
            setTimeout(function () {
                banknamemaster("dashBoardBodyMainDiv");
                displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            }, 3000);
        }
    });
    //   }
}
function wipeAllAccountBankData() {
    $('#bankname').val("");
    $('#branchname').val("");
    $('#city').val("");
    $('#ifsccode').val("");
    $('#usedInLedger').prop('checked', false);
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
function viewAccountBankList(divId)
{
    //   if (checkUserPrivelege(pvViewBankName)) {

    $("#" + divId).text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<div class='panel-title'  style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>List of Bank(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colBankNameList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colBankNameList").click(function () {
        $("#collapseOne3").toggle();
        if ($("#colBankNameList span").hasClass("glyphicon-minus-sign")) {
            $("#colBankNameList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colBankNameList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").append("<div  id='ErrorDiv'/>");
    $("#listpanelRow").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displayBankTable' />");
    $("#displayBankTable").append("<thead class=''><tr id='displayBankTableFinanceModuleTrHead'>"
            + " <th class='sno_width'> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i> Bank Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Branch Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>City</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i> State</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i> Account Number</th>");
    //  if (checkUserPrivelege(pvUpdateBankName)) {
    $("#displayBankTableFinanceModuleTrHead").append("<th class='table_anchor_width'><i ></i>Edit</th>");
    //  }
    //   if (checkUserPrivelege(pvDeleteBankName)) {
    $("#displayBankTableFinanceModuleTrHead").append("<th class='table_anchor_width'><i  style='font-size:21px;'></i> Delete</th>");
    //   }

    $.get(server_base_url + "financial/common/BankName/ViewList", {
    }).done(function (bdata) {
        if (bdata == fail) {
            displayErrorMessages("ErrorDiv", "" + NoDataFoundMessage + "");
        } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
            displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "");
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");
//                    for (var i = bdata.length-1; i >=0 ; i--) {
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var bankjson = {
                            bid: bdata[i]._id.$oid,
                            bankName: bdata[i].bankName,
                            branchName: bdata[i].branchName,
                            city: bdata[i].city,
                            state: bdata[i].state,
                            ifscCode: bdata[i].ifscCode,
                            micrCode: bdata[i].micrCode,
                            primaryContactName: bdata[i].primaryContactName,
                            secondaryContactName: bdata[i].secondaryContactName,
                            primaryContactNo: bdata[i].primaryContactNo,
                            secondaryContactNo: bdata[i].secondaryContactNo,
                            accNumber: bdata[i].accNumber,
                            address: bdata[i].address,
                            remarks: bdata[i].remarks,
                            usedInLedger: bdata[i].usedInLedger
                        };
                        bankjson = JSON.stringify(bankjson);
                        $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].bankName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].branchName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].city + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].state + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].accNumber + "</td>");
                        //if (checkUserPrivelege(pvUpdateBankName)) {
                        $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateAccountbank('" + encodeURI(bankjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                        //  }
                        // if (checkUserPrivelege(pvDeleteBankName)) {
                        $("#" + bdata[i]._id.$oid).append("<td>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a onclick=deletePopUp("deleteAccountbank","","' + bdata[i]._id.$oid + '")   class="anchor_delete"  style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                        // }
                    }
                    $('#displayBankTable').append("</table>");
                    $('#displayBankTable').dataTable();
                }
            }
        }
    });
    // }
}

function updateAccountbank(obj) {
    //  if (checkUserPrivelege(pvUpdateBankName)) {
    $("#pregsuccessBefore").text("");
    obj = JSON.parse(decodeURI(obj));

    if (obj.usedInLedger == true) {
        $('#usedInLedger').prop('checked', true);
    }
    $("#bankname").val(obj.bankName);
    $("#branchname").val(obj.branchName);
    $("#city").val(obj.city);
    $("#state").val(obj.state);
    $("#ifsccode").val(obj.ifscCode);
    $("#micrcode").val(obj.micrCode);
    $("#primarycontactname").val(obj.primaryContactName);
    $("#secondarycontactname").val(obj.secondaryContactName);
    $("#primarycontactno").val(obj.primaryContactNo);
    $("#secondarycontactno").val(obj.secondaryContactNo);
    $("#displayBankTableBody tr").css("background-color", "white");
    $("#displayBankTableBody tr" + "#" + obj.bid).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#acnumber").val(obj.accNumber);
    $("#address").val(obj.address);
    $("#remarks").val(obj.remarks);
    $("#bid").val(obj.bid);

    $("#saveorupdate").val("update");
    $("#saveupdatebutton").text("").text("Update");
    //displayBankTableBody
    addButtonOnclickFunction("resetBackBtnId", "Back", "banknamemaster('" + DashboardMainDivID + "')");
    //  }
}

function deleteAccountbank(id) {
    // if (checkUserPrivelege(pvDeleteBankName)) {
    $.post(server_base_url + "financial/common/BankName/Delete", {
        bid: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayErrorMessages("authonticationMsgId", "Invalid username / password");
        } else if (data == unauthorized) {
            displayErrorMessages("authonticationMsgId", unauthorizedMessage);
        } else if (data == statusException) {
            displayErrorMessages("authonticationMsgId", statusExceptionMessage);
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("authonticationMsgId", "No User available");
        } else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("ErrorDiv", delete_map_messages, "");
            setTimeout(function () {
                $("#ErrorDiv").text("");
            }, 3000);
        } else {

            displaySuccessMessages("ErrorDiv", "Deleted Succesfully");
            setTimeout(function () {
                banknamemaster("tableHeaderForList");
            }, 3000);
        }
    });
    //  }
}
function setStates(name, divId) {
    var states = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", " Assam", " Bihar", " Chandigarh", " Chhattisgarh", " Dadra and Nagar Haveli", " Daman and Diu", " Delhi", " Goa", " Gujarat", " Haryana", " Himachal Pradesh", " Jammu and Kashmir", " Jharkhand", " Karnataka", " Kerala", " Lakshadweep", " Madhya Pradesh", " Maharashtra", " Manipur", " Meghalaya", " Mizoram ", "Nagaland", " Odisha", " Puducherry", " Punjab", " Rajasthan", " Sikkim", " Tamil Nadu", " Telangana", " Tripura", " Uttar Pradesh", " Uttarakhand", " West Bengal"];
    $("#" + divId).append("<option value='' selected disabled>---- Select State ----</option>");
    for (var i = 0; i < states.length; i++) {
        $("#state").append("<option  value='" + states[i] + "' >" + states[i] + "</option>");
    }
    $("#" + divId).val(name);
}

