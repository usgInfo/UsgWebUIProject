/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function displayPensionHeadSlab(divId) {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionMasters()">Pension Masters</a></label> >><label>Pension Head Slab</label>');
//    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">Head Slab Master</a>');
    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Pension Head Slab Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colHeadSlab'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#colHeadSlab").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colHeadSlab span").hasClass("glyphicon-minus-sign")) {
            $("#colHeadSlab").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colHeadSlab").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<div id='pregsuccessBefore'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    //
    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup").append("<input type='hidden' id='Id' >");
    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel("Head Name", "required") + "" + getDropDown("headName"));
    $("#Row1Col2").append(getLabel("Based On", "required") + "" + getDropDown("basedOn"));
    $("#headName").attr("onchange", "disableFormulaOrAmountUsingPreviousRecord(); basedOnHeadSlab('', 'basedOn')");
    getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col1").append(getLabel("Class", "") + "" + getDropDown("clas"));
    //  $("#clas").prop("disabled", true);
    $("#Row4Col2").append(getLabel("Nature Type", "") + "" + getDropDown("natureType"));
    //   $("#natureType").prop("disabled", true);
    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append('<label class="control-label">Type<span class="require"> *</span></label>');
    $("#Row2Col1").append('<div class="">Amount<input onchange="toDisableFormulaTwo()" name="select" type="radio" id="typeOne" style="margin-left:20px;margin-right:20px;">Formula<input type="radio" name="select" id="typeOne1" onchange="toDisableFormulaTwo()"id="typeOne" style="margin-left:20px;"></div>');
    $("#Row2Col2").append(getLabel("Formula", "required") + "" + getDropDown("formulaOne"));
    getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
    $("#Row6Col1").append(getLabel_InputWithSpan("From Original Pension", "required", "fromOPension", "", "onkeypress='return validateNumber(event)' maxlength=20"));
    $("#Row6Col2").append(getLabel_InputWithSpan("To Original Pension", "required", "toOPension", "", "onkeypress='return validateNumber(event)' maxlength=20"));
    getTwoColumnInRow("FieldGroup", "Row8", "Row8Col1", "Row8Col2");
    $("#Row8Col1").append('<label class="control-label">Type<span class="require"> *</span></label>');
    $("#Row8Col1").append('<div class="">Amount<input onchange="toDisableFormulaTwo()" name="select" type="radio" id="typeTwo" style="margin-left:20px;margin-right:20px;">Formula<input type="radio" name="select" id="typeTwo1" onchange="toDisableFormulaTwo()"id="typeOne" style="margin-left:20px;"></div>');
    getTwoColumnInRow("FieldGroup", "Row9", "Row9Col1", "Row9Col2");
    $("#Row9Col1").append(getLabel_InputWithSpan("Amount", "required", "amount", "", "onkeypress='return validateNumber(event)' maxlength=20"));
    $("#Row9Col2").append(getLabel("Formula", "required") + "" + getDropDown("formulaTwo"));
    getTwoColumnInRow("FieldGroup", "Row10", "Row10Col1", "Row10Col2");
    $("#Row10Col1").append(getLabel_InputWithSpan("Minimum Amount", "required", "minimumAmount", "", "onkeypress='return validateNumber(event)' maxlength=20"));
    $("#Row10Col2").append(getLabel_InputWithSpan("Maximum Amount", "required", "maximumAmount", "", "onkeypress='return validateNumber(event)' maxlength=20"));
    $("#FieldGroup").append("<div id='panelRow7' class='row' />");
    $("#panelRow7").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='savePensionHeadSlabDetails()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick=resetAllValuesInSpecifiedDiv('FieldGroup','ddo') class='btn btn-warning mr5' name='reset' id='resetBackBtnId' value='reset'>Reset</button></center></div>");
    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
    viewpensionHeadSlabList("tableHeaderForList");
//    viewOption("hrms/salary/Class/ViewList", "", "name", "clas", "Class");
//    //   viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");
//    viewSalaryHeadListForOption("", "salaryType");
////    viewOption("hrms/salary/SalaryHead/ViewList", "", "description", "salaryType", "Salary Type");
//    viewOption("hrms/salary/CityCategory/ViewList", "", "cityCategory", "cityCategory", "City Category");
//    viewOption("hrms/salary/CityCategory/ViewList", "", "cityName", "city", "City");
//    viewOption("hrms/common/Nature/View", "", "natureName", "natureType", "Nature Type");
//    viewOption("hrms/common/Formula/View", "", "description", "formulaOne", "Formula");
//    viewOption("hrms/common/Formula/View", "", "description", "formulaTwo", "Formula");
//    viewOption("hrms/salaryMaster/GetSalaryHeadHeadSlabService", "", "description", "headName", "Head Name");
//    // viewOption("hrms/salary/BasedOn/ViewList", "", "basedOn", "basedOn", "Based On");
//    disableform();
//    basedOnHeadSlab("", "basedOn");
//    $("#cityCategory").attr("onchange", "viewOptionHeadSlapforCity()");
//    setTimeout(function() {
//        $("#pregsuccessBefore").text("");
//    }, 2100);

}
function viewpensionHeadSlabList(divId)
{

    $("#" + divId).text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Head Slabs</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colHeadSlabList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colHeadSlabList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colHeadSlabList span").hasClass("glyphicon-minus-sign")) {
            $("#colHeadSlabList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colHeadSlabList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' style='overflow-x:auto;' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row table-responsive' />");
    $("#listpanelRow").append("<div  id='ErrorDiv'/>");

    $("#listpanelRow").append("<div class='' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displayHeadSlabTable' />");
    $("#displayHeadSlabTable").append("<thead class=''><tr id='headSlabTableHeadId'>"
            + " <th class='sno_width'> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Head Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Class</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Nature</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Type</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>From GP</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>To GP</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Amount</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Formula</th>");
    $("#headSlabTableHeadId").append("<th class='table_anchor_width'><i ></i>Edit</th>");
    $("#headSlabTableHeadId").append("<th class='table_anchor_width'><i  style='font-size:21px;'></i> Delete</th>");

    $.get(server_base_url + "/PensionMaster/PensionHeadSlab/List", {
    }).done(function(bdata) {
        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("ErrorDiv", noDataAvailable + "");
        } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + unauthorizedMessage + "");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + noDataAvailable + "");
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayHeadSlabTable").append("<tbody id='displayHeadSlabTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var headslabjson;
                        headslabjson = JSON.stringify(bdata[i]);
                        $("#displayHeadSlabTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].pensionHeadName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].pensionClass + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].pensionNatureType + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].typeTwo + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].fromOriginalPension + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].toOriginalPension + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].amount + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].formulaTwo + "</td>");
                        $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateheadslab('" + encodeURI(headslabjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                        $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletepensionheadslab','viewpensionHeadSlabList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                    }
                    $('#displayHeadSlabTable').dataTable();
                    $('#displayHeadSlabTable').append("</table>");
                }
            }
        }
    });

}
function headslabValidation() {
    var saveorupdate = $("#saveorupdate").val();
    $("#headNameErr").text("");
    $("#basedOnErr").text("");
    $("#ddoErr").text("");
    $("#clasErr").text("");
    $("#natureTypeErr").text("");
    $("#typeOneErr").text("");
    $("#formulaOneErr").text("");
    $("#formulaTwoErr").text("");
    $("#fromGPErr").text("");
    $("#toGPErr").text("");
    $("#fromBasicErr").text("");
    $("#toBasicErr").text("");
    $("#typeTwoErr").text("");
    $("#amountErr").text("");
    $("#minimumAmountErr").text("");
    $("#maximumAmountErr").text("");
    var headName = $("#headName").val();
    var basedOn = $("#basedOn").val();
    var fromGP = $("#fromGP").val();
    var toGP = $("#toGP").val();
    var amount = $("#amount").val();
    var maxamount = $("#maximumAmount").val();
    var minamount = $("#minimumAmount").val();
    var fromBasic = $("#fromBasic").val();
    var toBasic = $("#toBasic").val();
    var count = 0;
    var typeOne;
    var typeTwo;
    if ($('#typeOne').is(':checked')) {
        typeOne = "formula";
    } else if ($('#typeOne1').is(':checked')) {
        typeOne = "amount";
    }
    if ($('#typeTwo1').is(':checked')) {
        typeTwo = "formula";
    } else if ($('#typeTwo').is(':checked')) {
        typeTwo = "amount";
    }
    var result = 1;
    if (typeTwo == "formula")
    {
        if (maxamount == "") {
            $("#maximumAmount").focus();
            addSomeClass("toGPFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("maximumAmountErr", "Please Enter To Amount.");
            result = 0;
        } else if (maxamount != "") {
            if (!maxamount.match((numbervalidation()))) {
                $("#maximumAmount").focus();
                addSomeClass("toGPFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("maximumAmountErr", "Please enter valid To Amount.");
                result = 0;
            }
            removeSomeClass("toGPFieldGroup", "has-error");
        }

        if (minamount == "") {
            $("#minimumAmount").focus();
            addSomeClass("toGPFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("minimumAmountErr", "Please Enter To Amount.");
            result = 0;
        } else if (minamount != "") {
            if (!minamount.match((numbervalidation()))) {
                $("#minimumAmount").focus();
                addSomeClass("toGPFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("minimumAmountErr", "Please enter valid To Amount.");
                result = 0;
            }
            removeSomeClass("toGPFieldGroup", "has-error");
        }
    } else
    {
        if (amount == "") {
            $("#amount").focus();
            addSomeClass("toGPFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("amountErr", "Please Enter To Amount.");
            result = 0;
        } else if (amount != "") {
            if (!amount.match((numbervalidation()))) {
                $("#minimumAmount").focus();
                addSomeClass("toGPFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("amountErr", "Please enter valid To Amount.");
                result = 0;
            }
            removeSomeClass("toGPFieldGroup", "has-error");
        }
    }
    if (toGP == "") {
        $("#toGP").focus();
        addSomeClass("toGPFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("toGPErr", "Please Enter To GP.");
        result = 0;
    } else if (toGP != "") {
        if (!toGP.match((numbervalidation()))) {
            $("#toGP").focus();
            addSomeClass("toGPFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("toGPErr", "Please enter valid To GP.");
            result = 0;
        }
        removeSomeClass("toGPFieldGroup", "has-error");
    }
    if (fromGP == "") {
        $("#fromGP").focus();
        addSomeClass("fromGPFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("fromGPErr", "Please enter From GP.");
        result = 0;
    } else if (fromGP != "") {
        if (!fromGP.match((numbervalidation()))) {
            $("#fromGP").focus();
            addSomeClass("fromGPFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("fromGPErr", "Please enter valid From GP.");
            result = 0;
        }
        removeSomeClass("fromGPFieldGroup", "has-error");
    }
    if (toBasic == "") {
        $("#toBasic").focus();
        addSomeClass("toGPFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("toBasicErr", "Please Enter To Basic.");
        result = 0;
    }

    if (fromBasic == "") {
        $("#fromBasic").focus();
        addSomeClass("toGPFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("fromBasicErr", "Please Enter From Basic.");
        result = 0;
    }
    if (basedOn == null) {
        $("#basedOn").focus();
        addSomeClass("basedOnFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("basedOnErr", "Please Select Based On.");
        result = 0;
    } else if (basedOn != null) {
        removeSomeClass("basedOnFieldGroup", "has-error");
    }
    if (headName == null) {
        $("#headName").focus();
        addSomeClass("headNameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("headNameErr", "Please Select Nature Type.");
        result = 0;
    } else if (headName != null) {
        removeSomeClass("headNameFieldGroup", "has-error");
    }
    if (result != 0) {
        if (saveorupdate == "save") {
            savePensionHeadSlabDetails();
        } else {
            updatePensionHeadSlabDetails();
        }
    }

}
function savePensionHeadSlabDetails() {

    var typeOne;
    var typeTwo;
    if ($('#typeOne').is(':checked')) {
        typeOne = "formula";
    } else if ($('#typeOne1').is(':checked')) {
        typeOne = "amount";
    }
    if ($('#typeTwo1').is(':checked')) {
        typeTwo = "formula";
    } else if ($('#typeTwo').is(':checked')) {
        typeTwo = "amount";
    }
    var headslabJson = {
        pensionHeadName: $("#headName").val(),
        pensionBasedOn: $("#basedOn").val(),
        pensionClass: $("#clas").val(),
        pensionNatureType: $("#natureType").val(),
        typeOne: typeOne,
        formulaOne: $("#formulaOne").val(),
        fromOriginalPension: $("#fromGP").val(),
        toOriginalPension: $("#toGP").val(),
        typeTwo: typeTwo,
        formulaTwo: $("#formulaTwo").val(),
        amount: $("#amount").val(),
        minAmount: $("#minimumAmount").val(),
        maxAmount: $("#maximumAmount").val()
    };
    $.post(server_base_url + "/PensionMaster/PensionHeadSlab/Save", {
        headslabJson: JSON.stringify(headslabJson),
        userId: getUserSessionElement("userId")
    }).done(function(data) {
        if (data == fail) {
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else {
            scrolupfunction();
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function() {
                displayPensionHeadSlab("dashBoardBodyMainDiv");

            }, 4000);

        }
    });
}
function updatepensionheadslab(obj) {
    scrolupfunction();
    $("#pregsuccessBefore").text("");
    obj = JSON.parse(decodeURI(obj));
    $("#basedOn option:contains(" + obj.basedOn + ")").attr('selected', 'selected');
    $("#headName option:contains(" + obj.headName + ")").attr('selected', 'selected');
    // disableParticularFiledsUsingBasedOnValueInUpdate(encodeURI(JSON.stringify(obj)));
    $("#formulaOne option:contains(" + obj.formulaOne + ")").attr('selected', 'selected');
    $("#formulaTwo option:contains(" + obj.formulaTwo + ")").attr('selected', 'selected');
    $("#typeOne1").prop('checked', true);
    if (obj.typeOne == "amount") {
        $("#typeOne").addClass('checked', true);
        $("#typeOne1").addClass('checked', false);
    } else if (obj.typeOne == "formula") {
        $("#typeOne1").addClass('checked', true);
        $("#typeOne").addClass('checked', false);
    }
    if (obj.typeTwo == "amount") {
        $("#typeTwo").prop('checked', true);
        $("#typeTwo1").prop('checked', false);
    } else if (obj.typeTwo == "formula") {
        $("#typeTwo").prop('checked', false);
        $("#typeTwo1").prop('checked', true);
    }
    $("#basedOn").val(obj.basedOn);
    $("#fromGP").val(obj.fromGP);
    $("#displayHeadSlabTableBody tr").css("background-color", "white");
    $("#displayHeadSlabTableBody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#toGP").val(obj.toGP);
    $("#amount").val(obj.amount);
    $("#Id").val(obj._id.$oid);
    $("#saveorupdate").val("update");
    $("#saveupdatebutton").text("").text("Update");
    addButtonOnclickFunction("resetBackBtnId", "Back", "displayPensionHeadSlab('" + DashboardMainDivID + "')");
    // toDisableFormulaTwoInUpdate(obj.typeTwo, encodeURI(JSON.stringify(obj)));
    setTimeout(function() {
        $("#minimumAmount").val(obj.minimumAmount);
        $("#maximumAmount").val(obj.maximumAmount);
    }, 1200);
}
function updatePensionHeadSlabDetails() {

    var Id = $("#Id").val();
    var typeOne;
    var typeTwo;
    if ($('#typeOne').is(':checked')) {
        typeOne = "formula";
    } else if ($('#typeOne1').is(':checked')) {
        typeOne = "amount";
    }
    if ($('#typeTwo1').is(':checked')) {
        typeTwo = "formula";
    } else if ($('#typeTwo').is(':checked')) {
        typeTwo = "amount";
    }
    var headslabJson = {
        pensionHeadName: $("#headName").val(),
        pensionBasedOn: $("#basedOn").val(),
        pensionClass: $("#clas").val(),
        pensionNatureType: $("#natureType").val(),
        typeOne: typeOne,
        formulaOne: $("#formulaOne").val(),
        fromOriginalPension: $("#fromGP").val(),
        toOriginalPension: $("#toGP").val(),
        typeTwo: typeTwo,
        formulaTwo: $("#formulaTwo").val(),
        amount: $("#amount").val(),
        minAmount: $("#minimumAmount").val(),
        maxAmount: $("#maximumAmount").val()
    };
    $.post(server_base_url + "/PensionMaster/PensionHeadSlab/Update", {
        headslabJson: JSON.stringify(headslabJson),
        headslabId: Id,
        userId: getUserSessionElement("userId")
    }).done(function(data) {
        if (data == fail) {
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else {
            disableDiv("FieldGroup");
            setTimeout(function() {
                headslabmaster("dashBoardBodyMainDiv");
                scrolupfunction();
                displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            }, 4000);
        }
    });
}
function deletepensionheadslab(id) {
        $.post(server_base_url + "/PensionMaster/PensionHeadSlab/Delete", {
            headslabId: id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("authonticationMsgId", "Invalid username / password");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("authonticationMsgId", unauthorizedMessage);
            } else if (data == statusException) {
                displayErrorMessages("authonticationMsgId", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("authonticationMsgId", "No User available");
            } else {
                displaySuccessMessages("ErrorDiv", "Deleted Succesfully");
                setTimeout(function () {
                    viewpensionHeadSlabList("tableHeaderForList");
                }, 4000);
            }
        });
}


