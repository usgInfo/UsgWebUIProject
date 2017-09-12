//HRMS >> Bank Master
function bankmaster(divId) {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">Bank Master</a>');
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Salary Master</a></label> >> <label>Bank Master</label>');

    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    if (checkUserPrivelege(pvCreateBank)) {
        $("#mainTabMenu").text("").append("<div id='mainTabMenuModal'   />");
        $("#mainTabMenu").append("<div id='tableHeader' />");
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>Bank Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colBankMaster'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colBankMaster").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colBankMaster span").hasClass("glyphicon-minus-sign")) {
                $("#colBankMaster").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colBankMaster").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
//    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        //bank name branch name
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

        getLabelTextareaFullRow("FieldGroup", "Remarks", "", "Row8", "Row7Col1", "remarks");

        $("#FieldGroup").append("<div id='panelRow7' class='row' />");
        $("#panelRow7").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='bankValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='resetBackBtnId' onclick='wipeAllBankData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
    }
    setStates("", "state");
    $('#ifsccode').on('change', function (e) {
        this.value = this.value.toUpperCase();
    });
    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
    setTimeout(function () {
        viewBankList("tableHeaderForList");
    }, 300);
    setTimeout(function () {
        makeWrapperToProperHeight();
    }, 1000);
    setTimeout(function () {
        $("#pregsuccessBefore").text("");
    }, 2100);


    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    $("textarea").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

//    var pageHeight = $(".page-content").height();
//    var wrapperHeightMustBe = pageHeight + 120;
//    $("#wrapper").css({'height': wrapperHeightMustBe});

}

function bankValidation() {
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
                saveBankDetails();
            } else {
                updateHrmsBankDetails();
            }
        }
    }
}
function saveBankDetails() {
    if (checkUserPrivelege(pvCreateBank)) {
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
            bankname: bankname,
            branchname: branchname,
            city: city,
            state: state,
            ifsccode: ifsccode,
            micrcode: micrcode,
            primarycontactname: primarycontactname,
            secondarycontactname: secondarycontactname,
            primarycontactno: primarycontactno,
            secondarycontactno: secondarycontactno,
            acnumber: acnumber,
            address: address,
            remarks: remarks
        };
        $.post(server_base_url + "hrms/salary/Bank/Save", {
            bankJson: JSON.stringify(bankjson),
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
            } else if (data == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");
            } else if (data == duplicate_Message) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function () {
                    bankmaster("dashBoardBodyMainDiv");
                }, 500);
            } else {
                disableDiv("FieldGroup");
                setTimeout(function () {
                    bankmaster("dashBoardBodyMainDiv");
                    displaySuccessMessages("pregsuccessBefore", successMessage, "");
                }, 4000);
            }
        });
    }
}
function updateHrmsBankDetails() {
    if (checkUserPrivelege(pvUpdateBank)) {
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
        var bankjson = {
            bankname: bankname,
            branchname: branchname,
            city: city,
            state: state,
            ifsccode: ifsccode,
            micrcode: micrcode,
            primarycontactname: primarycontactname,
            secondarycontactname: secondarycontactname,
            primarycontactno: primarycontactno,
            secondarycontactno: secondarycontactno,
            acnumber: acnumber,
            address: address,
            remarks: remarks
        };
        $.post(server_base_url + "hrms/salary/Bank/Update", {
            bankJson: JSON.stringify(bankjson),
            bid: bid,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
            } else if (data == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");
            } else if (data == duplicate_Message) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function () {
                    bankmaster("dashBoardBodyMainDiv");
                }, 500);
            } else {
                disableDiv("FieldGroup");
                setTimeout(function () {
                    bankmaster("dashBoardBodyMainDiv");
                    displaySuccessMessages("pregsuccessBefore", successMessage, "");
                }, 4000);
            }
        });
    }
}
function wipeAllBankData() {
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
function viewBankList(divId)
{
    if (checkUserPrivelege(pvViewBank)) {
        $("#" + divId).text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>List of Banks</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colBankList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colBankList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colBankList span").hasClass("glyphicon-minus-sign")) {
                $("#colBankList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colBankList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");
        $("#listpanelRow").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
        $("#displayBankTable").append("<thead><tr id='bankTableHeadId'>"
                + " <th class='sno_width'> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Bank Name</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Branch Name</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>City</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> State</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Account Number</th>");
        if (checkUserPrivelege(pvUpdateBank)) {
            $("#bankTableHeadId").append("<th class='table_anchor_width'><i ></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteBank)) {
            $("#bankTableHeadId").append("<th class='table_anchor_width'><i  style='font-size:21px;'></i> Delete</th>");
        }
        $.get(server_base_url + "hrms/salary/Bank/ViewList", {
        }).done(function (bdata) {
            if (bdata == fail) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFoundMessage + "<br /><br />");
            } else if (bdata == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
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
                                bankname: bdata[i].bankname,
                                branchname: bdata[i].branchname,
                                city: bdata[i].city,
                                state: bdata[i].state,
                                ifsccode: bdata[i].ifsccode,
                                micrcode: bdata[i].micrcode,
                                primarycontactname: bdata[i].primarycontactname,
                                secondarycontactname: bdata[i].secondarycontactname,
                                primarycontactno: bdata[i].primarycontactno,
                                secondarycontactno: bdata[i].secondarycontactno,
                                acnumber: bdata[i].acnumber,
                                address: bdata[i].address,
                                remarks: bdata[i].remarks
                            };
                            bankjson = JSON.stringify(bankjson);
                            $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].bankname + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].branchname + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].city + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].state + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].acnumber + "</td>");
                            if (checkUserPrivelege(pvUpdateBank)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatebank('" + encodeURI(bankjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteBank)) {
                                $("#" + bdata[i]._id.$oid).append("<td>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a onclick=deletePopUp("deletebank","","' + bdata[i]._id.$oid + '")   class="anchor_delete"  style="margin-width:1%,width:80px" >Delete</a>' + "</td>");

//                                + "<td >" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a onclick=deleteConfirmationPopup("' + bdata[i]._id.$oid + '","deletebank","noFunctionName")  class="anchor_delete"  style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                            }
                        }
//                    $('#displayBankTable').ataTable({
//                        responsive: true
//                    });
                        $('#displayBankTable').append("</table>");
                        $('#displayBankTable').dataTable();
                    }
                }
            }
        });
    }
}
function makeWrapperToProperHeight() {
    var pageHeight = $(".page-content").height();
    var wrapperHeightMustBe = pageHeight + 120;
    $("#wrapper").css({'height': wrapperHeightMustBe});
}
function updatebank(obj) {
    if (checkUserPrivelege(pvUpdateBank)) {
        $("#pregsuccessBefore").text("");
        obj = JSON.parse(decodeURI(obj));
        $("#bankname").val(obj.bankname);
        $("#branchname").val(obj.branchname);
        $("#city").val(obj.city);
        $("#state").val(obj.state);
        $("#ifsccode").val(obj.ifsccode);
        $("#micrcode").val(obj.micrcode);
        $("#primarycontactname").val(obj.primarycontactname);
        $("#secondarycontactname").val(obj.secondarycontactname);
        $("#primarycontactno").val(obj.primarycontactno);
        $("#secondarycontactno").val(obj.secondarycontactno);
        $("#displayBankTableBody tr").css("background-color", "white");
        $("#displayBankTableBody tr" + "#" + obj.bid).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#acnumber").val(obj.acnumber);
        $("#address").val(obj.address);
        $("#remarks").val(obj.remarks);
        $("#bid").val(obj.bid);
        $("#saveorupdate").val("update");
        $("#saveupdatebutton").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "bankmaster('" + DashboardMainDivID + "')");
    }
}
function noFunctionName() {
    alert();
}
function deletebank(id) {
//    var result = confirm('Are you Sure?');
//    if (result) {
    if (checkUserPrivelege(pvDeleteBank)) {
        $.post(server_base_url + "hrms/salary/Bank/Delete", {
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
                displaySmallErrorMessagesInRed("authonticationMsgId", "No User available");
            } else if (data == delete_map) {
                // dispalyhrmsCommonReligion();
                displayErrorMessages("ErrorDiv", "" + delete_map_messages, "");
                setTimeout(function () {
                    $("#ErrorDiv").text("");
                }, 1000);
            } else {

                displaySuccessMessages("ErrorDiv", "Deleted Succesfully");
                setTimeout(function () {
                    viewBankList("tableHeaderForList");
                }, 4000);
            }
        });
    }
//    }
}
function setStates(name, divId) {
    var states = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", " Assam", " Bihar", " Chandigarh", " Chhattisgarh", " Dadra and Nagar Haveli", " Daman and Diu", " Delhi", " Goa", " Gujarat", " Haryana", " Himachal Pradesh", " Jammu and Kashmir", " Jharkhand", " Karnataka", " Kerala", " Lakshadweep", " Madhya Pradesh", " Maharashtra", " Manipur", " Meghalaya", " Mizoram ", "Nagaland", " Odisha", " Puducherry", " Punjab", " Rajasthan", " Sikkim", " Tamil Nadu", " Telangana", " Tripura", " Uttar Pradesh", " Uttarakhand", " West Bengal"];
    $("#" + divId).append("<option value='' selected disabled>---- Select State ----</option>");
    for (var i = 0; i < states.length; i++) {
        $("#state").append("<option  value='" + states[i] + "' >" + states[i] + "</option>");
    }
    $("#" + divId).val(name);
}
function returnOk() {
    alert("Hi");
}

function dataModal() {
    alert();
    $("#mainTabMenuModal").append('<div id="modal-confirm" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-body">Are you sure?</div>\<div class="modal-footer"><button type="button" data-dismiss="modal" class="btn btn-default">Cancel</button><button type="button" data-dismiss="modal" class="btn btn-primary">Ok</button></div></div></div></div>');
//    document.write("                <div id=\"modal-confirm\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" class=\"modal fade\">");
//    document.write("                    <div class=\"modal-dialog\">");
//    document.write("                        <div class=\"modal-content\">");
//    document.write("                            <div class=\"modal-body\">Are you sure?<\/div>");
//    document.write("                            <div class=\"modal-footer\">");
//    document.write("                               <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel<\/button>");
//    document.write("                                <button type=\"button\" onclick=deletebank('" + Id + "') data-dismiss=\"modal\" class=\"btn btn-primary\">Ok<\/button>");
//    document.write("                            <\/div>");
//    document.write("                        <\/div>");
//    document.write("                    <\/div>");
//    document.write("                <\/div>");


//    $("#soapPopup").text("").append("<div class='modal fade' id='soapInputModel' tabindex='-1' role='dialog' aria-labelledby='mybmiInputModelLabel' aria-hidden='true' data-backdrop='static' data-keyboard='false' />");
//    $("#soapInputModel").text("").append("<div id='soapSelection' data-toggle='modal' data-target='#soapInputModel' />");
//    $("#soapInputModel").append("<div id='soapInputModelDialog' class='modal-dialog' />");
//    $("#soapInputModelDialog").append("<div id='soapInputModelContent' class='modal-content' />");
//    $("#soapInputModelContent").append("<div class='modal-header'><center><h4 class='modal-title' id='mybmiInputModelLabel'>Are you sure you want to delete ?</h4></center></div>");
//    $("#soapInputModelContent").append("<div class='modal-footer'><button class='btn btn-success' onclick='" + yesFunctionName + "('" + Id + "')'><b>Yes</b></button>&nbsp;<button class='btn btn-warning' onclick='" + noFunctionName + "()'><b>No</b></button></div>");
}
