function leaveTypemaster(divId) {
    scrolupfunction();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayLeaveHorizontalBar()">Leave</a></label> >> <label><a href="javascript:leaveManagementMasterTabs()">Leave Management</a></label> >> <label>Leave Type Master</label>');
    if (checkUserPrivelege(pvCreateLeaveType)) {

        $("#" + divId).text("").append("<div id='testMainDivId' />");
        $("#testMainDivId").text("").append("<div id='tableHeader'  />");
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Leave Type Master</center>");
        $("#tableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        addToggleToId("colMaritial1", "collapseOne2");
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<center><div id='pregsuccessBefore'></center></div>");
        $("#panelRow").append("<center><span id='" + successMsgDivCF + "'></span></center>");
        $("#panelRow").append("<div id='" + FieldGroupForCF + "' class='form-group pal' />");
        $("#" + FieldGroupForCF).append("<input type='hidden' id='saveorupdate' value='save'>");
        $("#" + FieldGroupForCF).append("<input type='hidden' id='Id'>");
        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel_InputWithSpan("Leave Type", "required", "leaveType", "", ""));
        $("#Row0Col2").append(getLabel_InputWithSpan("Short Description", "required", "shortDescription", "", ""));
        getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("Leave Nature", "required") + "" + getDropDown("leaveNature"));
        $("#Row1Col2").append(getLabel("Gender", "required") + "" + getDropDown("gender"));
        var dummyHoliday = ["National Holiday", "Normal Holiday", "Restricted Holiday"];
        populateDropDown("leaveNature", "Leave Nature", dummyHoliday, "");
        getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel("Fixed Leave Type", "notrequired") + "" + getDropDown("fixedLeaveType"));
        $("#Row2Col2").append(getLabel("Remarks", "notrequired") + "" + getTextareaWithErrSpan("remarks", "", "", ""));
        //
        $("#" + FieldGroupForCF).append("<h5><u>Leave Type Details</u></h5><hr><center><span id='errorMsgForLeaveTypeAddList'></span></center><div id='panelRow2' class='row' />");
        getTwoColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Nature Type", "required") + "" + getDropDown("natureType"));
        $("#Row3Col2").append(getLabel("Off Covered", "") + "" + getCheckboxWithSpan("offCovered"));
        getTwoColumnInRow(FieldGroupForCF, "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel("Employee Category", "required") + "" + getDropDown("employeeCategory"));
        $("#Row4Col2").append(getLabel_InputWithSpan("Eligibility (In Months)", "notrequired", "eligibility", "", ""));
        getTwoColumnInRow(FieldGroupForCF, "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel_InputWithSpan("Max Leave Per Year", "required", "maxLeavePerYear", "", "onchange=validateMaxLeavePerYear()"));
        $("#Row5Col2").append(getLabel_InputWithSpan("Max Leave Balance", "required", "maxLeaveBalance", "", ""));
        getTwoColumnInRow(FieldGroupForCF, "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel("Carry Forward", "") + "" + getCheckboxWithSpan("carryForward"));
        $("#Row6Col2").append(getLabel("Cashable", "") + "" + getCheckboxWithSpan("cashable"));
        getTwoColumnInRow(FieldGroupForCF, "Row7a", "Row7aCol1", "Row7aCol2");
        $("#Row7aCol1").append(getLabel_InputWithSpan("Carry Forward Limit", "notrequired", "carryForwardLimit", "", ""));
        $("#Row7aCol2").append(getLabel_InputWithSpan("Leaves Encashment Before Retirement", "notrequired", "leaveEncashmentBeforeRetirement", "", ""));
        getTwoColumnInRow(FieldGroupForCF, "Row7b", "Row7bCol1", "Row7bCol2");
        $("#Row7bCol1").append(getLabel_InputWithSpan("Leaves Encashment After Retirement", "notrequired", "leaveEncashmentAfterRetirement", "", ""));
        $("#Row7bCol2").append(getLabel_InputWithSpan("Leave Limit Per Instance", "required", "leaveLimitPerInstance", "", "onchange=validateLeaveLimit()"));
        getTwoColumnInRow(FieldGroupForCF, "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel_InputWithSpan("Basic Pay For Full DA", "notrequired", "basicPayForFullDA", "", ""));
        $("#Row7Col2").append(getLabel("Formula", "notrequired") + "" + getDropDown("formula"));
        getTwoColumnInRow(FieldGroupForCF, "Row8", "Row8Col1", "Row8Col2");
        $("#Row8Col1").append(getLabel("Fixed Time Issue", "") + "" + getCheckboxWithSpan("fixedTimeIssue"));
        $("#Row8Col2").append(getLabel_InputWithSpan("Amount", "notrequired", "amount", "", ""));
        getTwoColumnInRow(FieldGroupForCF, "Row9", "Row9Col1", "Row9Col2");
        $("#Row9Col1").append(getLabel_InputWithSpan("Total Times Issue", "notrequired", "totalTimeIssue", "", ""));
        $("#panelMainBody").append("<div id='panelRow11' class='row' />");
        $("#panelRow11").append("<div  class='col-xs-4' /><div class='col-xs-2' ><button type='button' value='Save' class='btn btn-success pull-right mr5'  onclick=addLeaveTypeDetailsRows('displayLeaveTypeTableBody')>Add</button></div><div class='col-xs-2'><button type='button' onclick='leaveTypemaster()' class='btn btn-warning pull-left mr5' name='reset' value='reset'>Reset</button></div>");
        $("#panelMainBody").append("<br><div id='panelRow12' class='row' />");
        $("#tableHeader").append("<div id='LeaveTypeListAddPanel' class='panel panel-blue' />");
        $("#LeaveTypeListAddPanel").append("<div id='LeaveTypeListAddPanelHeading' class='panel-heading' />");
        $("#LeaveTypeListAddPanelHeading").append("<h4 id='firstHeaderOfLeaveTypeListAdd' class='panel-title' />");
        $("#firstHeaderOfLeaveTypeListAdd").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Leave Type Detail(s)</center>");
        $("#firstHeaderOfLeaveTypeListAdd").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#LeaveTypeListAddPanel").append("<div id='collapseOne31' class='panel-collapse collapse in' />");
        addToggleToId("colMaritial2", "collapseOne31");
        $("#collapseOne31").append("<div id='leaveTypeListAddlistpanelMainBody' class = 'panel-body' />");
        $("#leaveTypeListAddlistpanelMainBody").append("<div id='leaveTypelistAddpanelRow' class='row' />");
        $("#leaveTypelistAddpanelRow").append("<center><span id='listOfLeaveDetailsSuccessMeasageDiv'></span></center>");
        viewLeaveTypeAddList('leaveTypelistAddpanelRow');

        $("#leaveTypeListAddlistpanelMainBody").append("<div class='row' /><div  class='col-xs-12' id='buttonRow1'/><center><input type='hidden' id='idValue1'>\
    <button type='button' style='margin-left:10px' value='Save' id='saveUpdateBtnId' \n\
    class='btn btn-success mr5 ' onclick='leaveTypeValidation()' disabled='true'>Save</button></center>\n\
   ");

        // $("#leaveTypeListAddlistpanelMainBody").append("<div id='viewButtonRow' class='row' />");
        //$("#viewButtonRow").append("<div  class='col-xs-12' id='buttonRow1'/><center><input type='hidden' id='idValue1'><button type='button'  id='weeklyoffViewButton' value='view' class='btn btn-success mr5'  onclick='validateWeeklyOffLocation()'>Save</button></center></div>");

        getCommonHoliday();
        populateDropDown("gender", "Gender", ["Male", "Female", "Both"], "");
        viewOption("/hrms/common/Nature/View", "", "natureName", "natureType", "Nature Type");
        viewOption("hrms/common/Formula/View", "", "description", "formula", "Formula");
        $("#tableHeader").append("<div id='leaveTypeListPanel' class='panel panel-blue' />");
        $("#leaveTypeListPanel").append("<div id='leaveTypeListPanelHeading' class='panel-heading' />");
        $("#leaveTypeListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Leave Type(s)</center>");
        $("#leaveTypeListPanelHeading").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial3'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#leaveTypeListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        addToggleToId("colMaritial3", "collapseOne3");
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<center><div id='pregsuccessBefore1'></center></div>");
        //$("#eligibility").attr("disabled", true);
        $("#fixedTimeIssue").on("click", {id: "fixedTimeIssue"}, checkAndEnableEligibility);
        $("#cashable").on("click", {id: "cashable"}, checkAndEnableFormulaAndAmount);
        $("#formula").attr("disabled", true);
        $("#amount").attr("disabled", true);
        $("#formula").on("change", {id: "amount"}, disableElement);
        $("#amount").on("change", {id: "formula"}, disableElement);
        $("#totalTimeIssue").attr("disabled", true);
        $("#carryForwardLimit").attr("disabled", true);
        $("#carryForward").on("click", {id: "carryForward"}, checkAndEnableCarryForwardLimit);
        $("#maxLeavePerYear").attr("onkeypress", "return isNumberKey(event)");
        $("#maxLeaveBalance").attr("onkeypress", "return isNumberKey(event)");
        $("#carryForwardLimit").attr("onkeypress", "return isNumberKey(event)");
        $("#leaveEncashmentBeforeRetirement").attr("onkeypress", "return isNumberKey(event)");
        $("#eligibility").attr("onkeypress", "return isNumberKey(event)");
        $("#leaveLimitPerInstance").attr("onkeypress", "return isNumberKey(event)");
        $("#leaveEncashmentAfterRetirement").attr("onkeypress", "return isNumberKey(event)");
        $("#totalTimeIssue").attr("onkeypress", "return isNumberKey(event)");
        $("#amount").attr("onkeypress", "return validCheck(event)");
        $("#basicPayForFullDA").attr("onkeypress", "return validCheck(event)");
//

        //$("#totalTimeIssue").attr("disabled", false);
        $("#gender").attr("onchange", "validateLeaveType()");
        $("#maxLeavePerYear").attr("onchange", "validateLeaveLimit()");
        getEmployeeCategory();
        
          $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });


        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        
    }

    viewLeaveTypeList('listpanelRow');
}

function validateMaxLeavePerYear() {
    $("#maxLeavePerYearErr").text("");
    var maxLeavePerYear = $("#maxLeavePerYear").val();
    if (maxLeavePerYear > 365) {
        displaySmallErrorMessages("maxLeavePerYearErr", "Max leave per year sholud not be greater  than 365");
        return false;
    }
}

function validateLeaveLimit() {
    $("#leaveLimitPerInstanceErr").text("");
    var leaveLimitPerInstance = $("#leaveLimitPerInstance").val();
    var maxLeavePerYear = $("#maxLeavePerYear").val();
    if (maxLeavePerYear != "") {
        if (Number(leaveLimitPerInstance) > Number(maxLeavePerYear)) {
            displaySmallErrorMessages("leaveLimitPerInstanceErr", "Leave limit per instance should not be greater  than max leave per year");
            return false;
        }
    }

}
function getCommonHoliday() {

    var fixedLeaveTypeList = ["HOLIDAY", "HALF HOLIDAY", "LWP"];
    $("#fixedLeaveType").append("<option value=''>----Select  Fixed Leave Type----</option>");
    for (var i = 0; i < fixedLeaveTypeList.length; i++) {
        $("#fixedLeaveType").append("<option value=" + fixedLeaveTypeList[i] + ">" + fixedLeaveTypeList[i] + "</option>");
    }
}


function validateLeaveType() {

    var gender = $("#gender").val().toLowerCase();
    var leaveType = $("#leaveType").val().toLowerCase();
    if (gender === "female") {
        if (leaveType === "paternity leave") {
            displaySmallErrorMessages("genderErr", "Please Select Valid gender");
        }

    } else if (gender === "male") {
        if (leaveType === "maternity leave") {
            displaySmallErrorMessages("genderErr", "Please Select Valid gender");
        }
    }
}


function getEmployeeCategory() {
    $.post(server_base_url + "hrms/salary/Class/ViewList", {
    }).done(function (bdata) {
        $("#employeeCategory").append("<option value=''>----Select Employee Category----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#employeeCategory").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].name + "</option>");
        }
    });
}

//added on 12/10/2016
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function validCheck(e) {
    var keyCode = (e.which) ? e.which : e.keyCode;
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode === 8))
        return true;
    else if (keyCode === 46) {
        var curVal = document.activeElement.value;
        if (curVal !== null && curVal.trim().indexOf('.') === -1)
            return true;
        else
            return false;
    } else
        return false;
}

function downloadDataAndPopulateDropDown(serviceName, dropdownId, dropdownName, key) {
    $.get(server_base_url + serviceName, {}).done(function (bdata) {

        if (validateResponseData(bdata)) {
            return;
        } else {
            bdata = JSON.parse(bdata);
            $("#" + dropdownId).text("").append("<option value='' selected >---- Select  ----</option>");
            var id = "", value = "";
            for (var i = 0; i < bdata.length; i++) {
                if (bdata[i].hasOwnProperty('_id')) {
                    id = bdata[i]._id.$oid;
                } else {
                    id = bdata[i];
                }
                if (bdata[i].hasOwnProperty(key)) {
                    value = (bdata[i])[key];
                } else {
                    value = bdata[i];
                }
                if (value !== "") {
                    $("#" + dropdownId).append("<option  value='" +
                            id + "' >" + value + "</option>");
                }
            }
//$("#" + dropdownId).val(dropdownName);
        }
    });
}

function populateDropDown(dropdownId, dropdownName, bdata, key) {
    if (bdata !== undefined) {
        $("#" + dropdownId).text("").append("<option value='' selected >---- Select  " + dropdownName + "----</option>");
        var id = "", value = "";
        for (var i = 0; i < bdata.length; i++) {
            if (bdata[i].hasOwnProperty('_id')) {
                id = bdata[i]._id.$oid;
            } else {
                id = bdata[i];
            }
            if (bdata[i].hasOwnProperty(key)) {
                value = (bdata[i])[key];
            } else {
                value = bdata[i];
            }
            $("#" + dropdownId).append("<option  value='" +
                    id + "' >" + value + "</option>");
        }

    }
}

function checkAndEnableEligibility(event) {

    var isSelected = $("#" + event.data.id).prop("checked");
    if (isSelected === true) {


        $("#totalTimeIssue").attr("disabled", false);
    } else {
        //  $("#eligibility").attr("disabled", true);
        $("#totalTimeIssue").attr("disabled", true);
        $("#eligibility").val("");
        $("#totalTimeIssue").val("");
    }
}

function checkAndEnableCarryForwardLimit(event) {

    var isSelected = $("#" + event.data.id).prop("checked");
    if (isSelected === true) {

        $("#carryForwardLimit").attr("disabled", false);
    } else {
        $("#carryForwardLimit").attr("disabled", true);
        $("#carryForwardLimit").val("");
    }
}

function checkAndEnableFormulaAndAmount(event) {

    var isSelected = $("#" + event.data.id).prop("checked");
    if (isSelected === true) {

        $("#formula").attr("disabled", false);
        $("#amount").attr("disabled", false);
    } else {

        $("#formula").attr("disabled", true);
        $("#amount").attr("disabled", true);
        $("#formula").val("");
        $("#amount").val("");
    }
}

function disableElement(event) {

    $("#" + event.data.id).attr("disabled", true);
}

function enableElement(event) {

    $("#" + event.data.id).attr("disabled", false);
}

//Adding LeaveType Rows
function addLeaveTypeDetailsRows(DivId)
{
    var formula = $("#formula").val();
    var amount = $("#amount").val();







    var result = 1;
    var leaveType = $("#leaveType").val();
    var shortDescription = $("#shortDescription").val();
    var leaveNature = $("#leaveNature").val();
    var gender = $("#gender").val();
    var fixedLeaveType = $("#fixedLeaveType").val();
    var remarks = $("#remarks").val();
    var natureType = $("#natureType").val();
    var employeeCategory = $("#employeeCategory").val();
    var eligibility = $("#eligibility").val();
    var maxLeavePerYear = $("#maxLeavePerYear").val();
    var maxLeaveBalance = $("#maxLeaveBalance").val();
    var carryForwardLimit = $("#carryForwardLimit").val();
    var leaveEncashmentBeforeRetirement = $("#leaveEncashmentBeforeRetirement").val();
    var leaveLimitPerInstance = $("#leaveLimitPerInstance").val();
    var leaveEncashmentAfterRetirement = $("#leaveEncashmentAfterRetirement").val();

    var totalTimeIssue = $("#totalTimeIssue").val();
    var basicPayForFullDA = $("#basicPayForFullDA").val();
    var fixedTimeIssue = $("#fixedTimeIssue").prop("checked");
    var carryForward = $("#carryForward").prop("checked");
    var cashable = $("#cashable").prop("checked");
    var fieldsToBeChecked = ["#leaveType", "#leaveNature", "#shortDescription", "#gender",
        "#natureType", "#employeeCategory", "#maxLeavePerYear",
        "#maxLeaveBalance", "#leaveLimitPerInstance"];
    if (checkMandatoryFieldsForTextBox(fieldsToBeChecked) === 0) {
        return;
    }

    if (cashable === true) {

        if ((formula == "" || formula == undefined || formula == null) && (amount == "" || amount == undefined || amount == null)) {

            displaySmallErrorMessages("formulaErr", "please select either formula or enter amount");
            result = 0;
        } else {
            result = 1;
        }

    }
    if (leaveLimitPerInstance == "" || leaveLimitPerInstance == null) {
        $("#leaveLimitPerInstance").focus();
        displaySmallErrorMessages("leaveLimitPerInstanceErr", "Please Enter Leave Limit Per Instance");
        result = 0;
    } else if (leaveLimitPerInstance != "") {
        if (!$("#leaveLimitPerInstance").val().match((numbervalidation()))) {
            $("#leaveLimitPerInstance").focus();
            displaySmallErrorMessages("leaveLimitPerInstanceErr", "Only numbers are allowed");
            result = 0;
        } else if (Number(leaveLimitPerInstance) > Number(maxLeavePerYear)) {
            displaySmallErrorMessages("leaveLimitPerInstanceErr", "leave limit per instance should not be greater  than max leave per year");
            result = 0;
        }
    }
    if (maxLeaveBalance == "" || maxLeaveBalance == null) {
        $("#maxLeaveBalance").focus();
        displaySmallErrorMessages("maxLeaveBalanceErr", "Please Enter Max Leave Balance");
        result = 0;
    } else if (maxLeaveBalance != "") {
        if (!$("#maxLeaveBalance").val().match((numbervalidation()))) {
            $("#maxLeaveBalance").focus();
            displaySmallErrorMessages("maxLeaveBalanceErr", "Only numbers are allowed");
            result = 0;
        } else {
            var maxLeaveperYearInt = parseInt(maxLeavePerYear);
            var maxLeaveBalanceInt = parseInt(maxLeaveBalance);
            if (maxLeaveBalanceInt < maxLeaveperYearInt) {
                result = 0;
                $("#maxLeaveBalance").focus();
                displaySmallErrorMessages("maxLeaveBalanceErr", "Max Leave Balance should not be lesser than  Max Leave Per Year");
            }
        }
    }
    if (maxLeavePerYear == "" || maxLeavePerYear == null) {
        $("#maxLeavePerYear").focus();
        displaySmallErrorMessages("maxLeavePerYearErr", "Please Enter Max leave Per Year.");
        result = 0;
    } else if (maxLeavePerYear != "") {
        if (!$("#maxLeavePerYear").val().match((numbervalidation()))) {
            $("#maxLeavePerYear").focus();
            displaySmallErrorMessages("maxLeavePerYearErr", "Only numbers are allowed");
            result = 0;
        } else if (Number(maxLeavePerYear) > 365) {
            displaySmallErrorMessages("maxLeavePerYearErr", "Max leave per year should not be greater  than 365");
            result = 0;
        }
    }
    if (fixedTimeIssue === true) {

        if (totalTimeIssue == "" || totalTimeIssue == null || totalTimeIssue == undefined) {
            displaySmallErrorMessages("totalTimeIssueErr", "Please enter total time issue");
            result = 0;
        } else if (totalTimeIssue != "") {
            if (!$("#totalTimeIssue").val().match((numbervalidation()))) {
                $("#totalTimeIssue").focus();
                displaySmallErrorMessages("totalTimeIssueErr", "Only numbers are allowed");
                result = 0;
            }
        }


    }

    if (eligibility != "") {
        if (!$("#eligibility").val().match((numbervalidation()))) {
            $("#eligibility").focus();
            displaySmallErrorMessages("eligibilityErr", "Only numbers are allowed");
            result = 0;
        }
    }
    if ($("#leaveEncashmentBeforeRetirement").val() != null && $("#leaveEncashmentBeforeRetirement").val() != "" && $("#leaveEncashmentBeforeRetirement").val() != undefined) {
        if (!$("#leaveEncashmentBeforeRetirement").val().match((numbervalidation()))) {
            $("#leaveEncashmentBeforeRetirement").focus();
            displaySmallErrorMessages("leaveEncashmentBeforeRetirementErr", "Only numbers are allowed");
            result = 0;
        }
    }


    if (leaveEncashmentAfterRetirement != null && leaveEncashmentAfterRetirement != "" && leaveEncashmentAfterRetirement != undefined) {
        if (!$("#leaveEncashmentAfterRetirement").val().match((numbervalidation()))) {
            $("#leaveEncashmentAfterRetirement").focus();
            displaySmallErrorMessages("leaveEncashmentAfterRetirementErr", "Only numbers are allowed");
            result = 0;
        }
    }

    if (amount != null && amount != "" && amount != undefined) {
        if (!$("#amount").val().match((numbervalidation())) && !$("#amount").val().match((doubleValidation()))) {
            $("#amount").focus();
            displaySmallErrorMessages("amountErr", "Please enter valid amount");
            result = 0;
        }
    }

    if (basicPayForFullDA != null && basicPayForFullDA != "" && basicPayForFullDA != undefined) {
        if (!$("#basicPayForFullDA").val().match((numbervalidation())) && !$("#basicPayForFullDA").val().match((doubleValidation()))) {
            $("#basicPayForFullDA").focus();
            displaySmallErrorMessages("basicPayForFullDAErr", "Please enter valid amount");
            result = 0;
        }
    }
    if (totalTimeIssue != null && totalTimeIssue != "" && totalTimeIssue != undefined) {
        if (!$("#totalTimeIssue").val().match((numbervalidation()))) {
            $("#totalTimeIssue").focus();
            displaySmallErrorMessages("totalTimeIssueErr", "Only numbers are allowed");
            result = 0;
        }
    }

    if (carryForward === true) {
        if (carryForwardLimit == " " || carryForwardLimit == null) {
            $("#carryForwardLimit").focus();
            displaySmallErrorMessages("carryForwardLimitErr", "Please Enter Carry Forward Limit.");
            result = 0;
        } else if (carryForwardLimit != "") {
            if (!$("#carryForwardLimit").val().match((numbervalidation()))) {
                $("#carryForwardLimit").focus();
                displaySmallErrorMessages("carryForwardLimitErr", "Only numbers are allowed");
                result = 0;
            }
        }
    }
    if (employeeCategory == "" || employeeCategory == null) {
        $("#employeeCategory").focus();
        displaySmallErrorMessages("employeeCategoryErr", "Please Select Employee Category.");
        result = 0;
    } else if (employeeCategory != "") {
    }
    if (natureType == "" || natureType == null) {
        $("#natureType").focus();
        displaySmallErrorMessages("natureTypeErr", "Please select Nature Type.");
        result = 0;
    } else if (natureType != "") {
    }
    if ($("#carryForward").prop("checked") == true) {
        var carryForwardLimitVal = $("#carryForwardLimit").val();
        if (carryForwardLimitVal == null || carryForwardLimitVal == "" || carryForwardLimitVal == undefined || carryForwardLimitVal == "undefined") {
            $("#carryForwardLimit").focus();
            displaySmallErrorMessagesInRed("carryForwardLimitErr", "Please Enter carry forward limit ");
            result = 0;
        }
    }

    if (result != 0) {
        $("#carryForwardLimit").attr("disabled", false);
        $("#totalTimeIssue").attr("disabled", false);
        $("#formula").attr("disabled", false);
        $("#eligibility").attr("disabled", false);
        $("#amount").attr("disabled", false);
        var dupNatureType = false;
        //  var dupEmployeeCategory;
        var length = $('#displayLeaveTypeAddTable tbody  tr').length;
        if (length > 0) {
            dupNatureType = findInTable(natureType, employeeCategory, 8, 9, dupNatureType, rowId);
        }

        if ((dupNatureType === false)) {

            if (rowId !== 0) {
                document.getElementById('displayLeaveTypeTableBody').deleteRow(rowId - 1);
            }


            var carryForward = "No";
            var cashable = "No";
            var offCovered = "No";
            var fixedTimeIssue = "No";
            if ($("#carryForward").prop("checked") == true) {
                carryForward = "Yes";
            }
            if ($("#cashable").prop("checked") == true) {
                cashable = "Yes";
            }
            if ($("#offCovered").prop("checked") == true) {
                offCovered = "Yes";
            }
            if ($("#fixedTimeIssue").prop("checked") == true) {
                fixedTimeIssue = "Yes";
            }
            var obj = {
                natureTypeName: $("#natureType option:selected").text(),
                employeeCategoryName: $("#employeeCategory option:selected").text(),
                natureType: $("#natureType").val(),
                employeeCategory: $("#employeeCategory").val(),
                eligibility: $("#eligibility").val(),
                maxLeavePerYear: $("#maxLeavePerYear").val(),
                maxLeaveBalance: $("#maxLeaveBalance").val(),
                carryForward: carryForward,
                cashable: cashable,
                carryForwardLimit: $("#carryForwardLimit").val(),
                leaveEncashmentBeforeRetirement: $("#leaveEncashmentBeforeRetirement").val(),
                leaveLimitPerInstance: $("#leaveLimitPerInstance").val(),
                leaveEncashmentAfterRetirement: $("#leaveEncashmentAfterRetirement").val(),
                offCovered: offCovered,
                formula: $("#formula").val(),
                fixedTimeIssue: fixedTimeIssue,
                amount: $("#amount").val(),
                totalTimeIssue: $("#totalTimeIssue").val(),
                basicPayForFullDA: $("#basicPayForFullDA").val()
            };
            $("#natureTypeErr").text("");
            $("#employeeCategoryErr").text("");
            $("#eligibilityErr").text("");
            $("#maxLeavePerYearErr").text("");
            $("#maxLeaveBalanceErr").text("");
            $("#carryForwardErr").text("");
            $("#cashableErr").text("");
            $("#carryForwardLimitErr").text("");
            $("#leaveEncashmentBeforeRetirementErr").text("");
            $("#leaveLimitPerInstanceErr").text("");
            $("#leaveEncashmentAfterRetirementErr").text("");
            $("#offCoveredErr").text("");
            $("#formulaErr").text("");
            $("#fixedTimeIssueErr").text("");
            $("#amountErr").text("");
            $("#totalTimeIssueErr").text("");
            $("#basicPayForFullDAErr").text("");
            var employeeCategoryName = $("#employeeCategory option:selected").text();
            var natureTypeName = $("#natureType option:selected").text();
            var employeeCategoryId = $("#employeeCategory option:selected").val();
            var natureTypeNameId = $("#natureType option:selected").val();
            $("#" + DivId).append("<tr style='cursor:pointer;'id=" + getSerialNo() + " >"
                    + "<td>" + getSerialNo() + "</td>"
                    + "<td style='cursor:pointer;'>" + natureTypeName + "<input type='hidden' value='" + JSON.stringify(obj) + "'></td>"
                    + "<td style='cursor:pointer;'> " + employeeCategoryName + "<input type='hidden' value='" + JSON.stringify(obj) + "'> </td>"
                    + "<td style='cursor:pointer;'> " + maxLeavePerYear + " </td>"
                    + "<td style='cursor:pointer;'> " + carryForward + " </td>"
                    + "<td style='cursor:pointer;'> " + leaveLimitPerInstance + " </td>"
                    + "<td style='cursor:pointer;'> " + fixedTimeIssue + " </td>"
                    + "<td style='cursor:pointer;'> " + cashable + " </td>"
                    + "<td style='display:none;'> " + natureTypeNameId + " </td>"
                    + "<td style='display:none;'> " + employeeCategoryId + " </td>"

                    + "<td> <a href='javascript:void(0);' onclick=editThisLeaveTypeRow(this.parentNode.parentNode.rowIndex) class='anchor_edit'><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>"
                    + "<td><a href='javascript:void(0);' onclick=deleteLeaveTypeListRow(this.parentNode.parentNode.rowIndex) class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
            displaySuccessMessages(successMsgDivCF, "Successfully Saved", "");
            setTimeout(function () {
                $("#successMsgDivBeforeDivCF").text("");
            }, 2100);
            clearLeaveTypeDetailsAddData();
            if (length > 0) {
                sortTable();
            }


            if (doesTableHaveRows("displayLeaveTypeAddTable")) {
                enableElement({data: {id: "saveUpdateBtnId"}});
                enableElement({data: {id: "resetBackBtnId"}});
            } else {
                disableElement({data: {id: "saveUpdateBtnId"}});
                disableElement({data: {id: "resetBackBtnId"}});
            }

        } else {
            displayErrorMessages(successMsgDivCF, "Data Already Existed", "");
            setTimeout(function () {
                $("#successMsgDivBeforeDivCF").text("");
            }, 2100);
        }
        rowId = 0;
    }

    $("#cashable").attr("disabled", false);
    $("#formula").attr("disabled", true);
    $("#amount").attr("disabled", true);

    $("#natureType").attr("disabled", false);
    $("#employeeCategory").attr("disabled", false);

}


function findInTable(str1, str2, col1, col2, checkFlag, rowId) {

    var test_nat = [];
    var test_empCat = [];
    var row1, row2;
    $('#displayLeaveTypeAddTable tbody tr').each(function () {

        test_nat.push($(this).find('td:eq("' + col1 + '")').text().trim());
        test_empCat.push($(this).find('td:eq("' + col2 + '")').text().trim());
    });
    row1 = test_nat.indexOf(str1);
    row2 = test_empCat.indexOf(str2);
    if (row1 === -1 && row2 === -1) {
        checkFlag = false;
    } else if (row1 >= 0 || row2 >= 0) {
        if ((row1 + 1 === rowId && row2 + 1 === rowId)) { //for deffernt combination which are not there in table
            checkFlag = false;
        } else if (row1 === row2) { //if both are in same row
            checkFlag = true;
        } else {
            checkFlag = false;
        }
    }
    return checkFlag;
}





function findInTablessss(str1, str2, col1, col2, checkFlag, rowId) {


    var test_nat = [];
    var test_empCat = [];
    var row1, row2;
    $('#displayLeaveTypeAddTable tbody tr').each(function () {

        test_nat.push($(this).find('td:eq("' + col1 + '")').text().trim());
        test_empCat.push($(this).find('td:eq("' + col2 + '")').text().trim());
    });
    row1 = test_nat.indexOf(str1);
    row2 = test_empCat.indexOf(str2);
    if ((row1 === -1 && row2 === -1) || (row1 + 1 === rowId && row2 + 1 === rowId)) { //for deffernt combination which are not there in table
        checkFlag = false;
    } else if (row1 === row2) { //if both are in same row
        checkFlag = true;
    } else {
        checkFlag = false;
    }

    return checkFlag;
}

function findAllRowsInTable(str1, str2, col1, col2, checkFlag, rowId) {
    var map = {};
    if (rowId !== 0) {
        $('#displayLeaveTypeAddTable tbody tr').each(function () {
            $(this).closest('tr:eq("' + rowId + '")').remove();
        });
    }

    $('#displayLeaveTypeAddTable tbody tr').each(function () {
        map['"' + ($(this).find('td:eq("' + col1 + '")').text().trim().toString()) + '"'] = ($(this).find('td:eq("' + col2 + '")').text().trim());
    });
    if (map[str1] == str2 && map[str2] == str1) {
        checkFlag = true;
    } else {
        checkFlag = false;
    }

    return checkFlag;
}


function sortTable() {
    var rows = $('#displayLeaveTypeAddTable tbody  tr').get();
    rows.sort(function (a, b) {

        var A = $(a).children('td').eq(0).text();
        var B = $(b).children('td').eq(0).text();
        if (A < B) {
            return -1;
        }

        if (A > B) {
            return 1;
        }

        return 0;
    });
    $.each(rows, function (index, row) {
        $('#displayLeaveTypeAddTable').children('tbody').append(row);
    });
}

function  getSerialNo() {

    if (rowId !== 0) {
        return rowId;
    }
    var count = 1;
    $('table#displayLeaveTypeAddTable tbody tr').each(function () {
        count++;
    });
    return count;
}

var rowId = 0;
function  editThisLeaveTypeRow(i) {
   
    $("#natureType").attr("disabled", true);
    $("#employeeCategory").attr("disabled", true);
    rowId = i;

    // if (row)
    scrolupfunction();
    $('table#displayLeaveTypeAddTable tbody tr').each(function () {

        if ($(this).find("tr:eq(" + i + ")")) {
            var j = i - 1;
            var obj = JSON.parse(decodeURI($("table#displayLeaveTypeAddTable tbody tr:eq(" + j + ")").find('td:eq(1) input').val()));
            var saveorupdate = $("#saveorupdate").val();
            $("#natureType").val(obj.natureType);
            $("#employeeCategory").val(obj.employeeCategory);
            $("#eligibility").val(obj.eligibility);
            $("#maxLeavePerYear").val(obj.maxLeavePerYear);
            $("#maxLeaveBalance").val(obj.maxLeaveBalance);
            if (obj.carryForward == "Yes") {
                $("#carryForward").prop("checked", true);
                $("#carryForwardLimit").attr("disabled", false);
            }
//            if (obj.cashable == "Yes") {
//                $("#cashable").prop("checked", true);
//                $("#cashable").attr("disabled", true);
//            } else {
//                $("#formula").attr("disabled", true);
//                $("#amount").attr("disabled", true);
//            }
            if (obj.cashable == "Yes") {
                $("#cashable").prop("checked", true);
                $("#formula").attr("disabled", false);
                $("#amount").attr("disabled", false);
            }
//            else {
//                $("#formula").attr("disabled", true);
//                $("#amount").attr("disabled", true);
//            }

            if (obj.offCovered == "Yes") {
                $("#offCovered").prop("checked", true);
            }
            if (obj.fixedTimeIssue == "Yes") {
                $("#fixedTimeIssue").prop("checked", true);
                $("#eligibility").attr("disabled", false);
                $("#totalTimeIssue").attr("disabled", false);
            }


            if (obj.amount != "") {
                $("#amount").attr("disabled", false);
            }

            if (obj.formula != "") {
                $("#formula").attr("disabled", false);
            }

            $("#cashable").val(obj.cashable);
            $("#carryForwardLimit").val(obj.carryForwardLimit);
            $("#leaveEncashmentBeforeRetirement").val(obj.leaveEncashmentBeforeRetirement);
            $("#leaveLimitPerInstance").val(obj.leaveLimitPerInstance);
            $("#leaveEncashmentAfterRetirement").val(obj.leaveEncashmentAfterRetirement);
            $("#offCovered").val(obj.offCovered);
            $("#formula").val(obj.formula);
            $("#fixedTimeIssue").val(obj.fixedTimeIssue);
            $("#amount").val(obj.amount);
            $("#totalTimeIssue").val(obj.totalTimeIssue);
            $("#basicPayForFullDA").val(obj.basicPayForFullDA);
        }
    });

    $("#displayLeaveTypeAddTable tr").css("background-color", "white");
    $("#displayLeaveTypeAddTable tr" + "#" + i).css("background-color", "rgba(10, 129, 156, 0.3)");

    var count = 1
    $('table#displayLeaveTypeAddTable tbody tr').each(function () {
        $(this).find('td:eq(0) ').text("").text(count);
        count++;
    });
    if (doesTableHaveRows("displayLeaveTypeAddTable")) {
        enableElement({data: {id: "saveUpdateBtnId"}});
        enableElement({data: {id: "resetBackBtnId"}});
    } else {
        disableElement({data: {id: "saveUpdateBtnId"}});
        disableElement({data: {id: "resetBackBtnId"}});
    }
}

function deleteLeaveTypeListRow(i, id) {
    if ($('table#displayLeaveTypeAddTable tbody tr').length > 1) {
        $("#popUpDiv").text("");
        $("#popUpDiv").append('<div id="deleteModalBox" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade" />');
        $("#deleteModalBox").append('<button type="button" data-toggle="modal"data-target="#deleteModalBox"  id="openPopup" style="display:none;"></button>');
        $("#deleteModalBox").append('<div class="modal-dialog" id="deleteModalMainDiv" />');
        $("#deleteModalMainDiv").append('<div class="modal-content" id="deleteModalSubMainDiv" />');
        $("#deleteModalSubMainDiv").append('<div class="modal-body" id="deleteModalBody" />');
        $("#deleteModalSubMainDiv").append('<div class="modal-footer" id="deleteModalFooter" />');
        $("#deleteModalBody").append('<div>Are you sure?</div>');
        $("#deleteModalFooter").append('<div><button type="button" data-dismiss="modal" class="btn btn-default" >No</button><button type="button" data-dismiss="modal" class="btn btn-success" onclick=deleteThisRowOfLeaveType("' + i + '","' + id + '")>Yes</button></div>');
        $("#openPopup").click();
    }
}


function deleteThisRowOfLeaveType(i, id) {
    var saveorupdate = $("#saveorupdate").val();
    var j = i - 1;
    if (id !== null || id !== undefined || id !== "") {
        var natureType;
        var employeeCategory;
        $("#displayLeaveTypeAddTable tbody tr:eq('" + j + "')").each(function () {
            natureType = $(this).find('td:eq(8)').text();
            employeeCategory = $(this).find('td:eq(9)').text();
        });
        $.get(server_base_url + "/leave/leaveType/checkDuplicateAndDeleteMapService", {
            id: id,
            natureType: natureType,
            employeeCategory: employeeCategory

        }).done(function (pdata) {

            if (pdata == "true") {

                displayErrorMessages(successMsgDivCF, "" + delete_map_messages, "");
                setTimeout(function () {

                    $("#successMsgDivBeforeDivCF").text("");
                }, 3000);


            } else {

                if ($('table#displayLeaveTypeAddTable tbody tr').length > 1) {
                    document.getElementById('displayLeaveTypeTableBody').deleteRow(i - 1);
                    // if (result === 1) {
                    if (saveorupdate === "save") {
                        saveLeaveTypeDetails();
                    } else if (saveorupdate === "update") {
                        updateLeaveTypeDetails();
                    }
                }
                //   }


                displaySuccessMessages(successMsgDivCF, "Deleted Successfully");
                setTimeout(function () {
                    $("#successMsgDivBeforeDivCF").text("");
                }, 3000);
                //alert("Please Click On Save for record get Update");
                if (doesTableHaveRows("displayLeaveTypeAddTable")) {
                    enableElement({data: {id: "saveUpdateBtnId"}});
                    enableElement({data: {id: "resetBackBtnId"}});
                } else {
                    disableElement({data: {id: "saveUpdateBtnId"}});
                    disableElement({data: {id: "resetBackBtnId"}});
                }
            }

        });
    } else {
        //  alert("Please Click On Save for record get Update");

        if ($('table#displayLeaveTypeAddTable tbody tr').length > 1) {
            document.getElementById('displayLeaveTypeTableBody').deleteRow(i - 1);
            if (saveorupdate === "save") {
                saveLeaveTypeDetails();
            } else if (saveorupdate === "update") {
                updateLeaveTypeDetails();
            }
        }
        displayErrorMessages(successMsgDivCF, "Deleted Successfully");
        setTimeout(function () {
            $("#successMsgDivBeforeDivCF").text("");
        }, 3000);
        if (doesTableHaveRows("displayLeaveTypeAddTable")) {
            enableElement({data: {id: "saveUpdateBtnId"}});
            enableElement({data: {id: "resetBackBtnId"}});
        } else {
            disableElement({data: {id: "saveUpdateBtnId"}});
            disableElement({data: {id: "resetBackBtnId"}});
        }
    }

}

function clearLeaveTypeDetailsAddData() {
    $("#natureTypeErr").text("");
    $("#employeeCategoryErr").text("");
    $("#eligibilityErr").text("");
    $("#maxLeavePerYearErr").text("");
    $("#maxLeaveBalanceErr").text("");
    $("#carryForwardErr").text("");
    $("#cashableErr").text("");
    $("#carryForwardLimitErr").text("");
    $("#leaveEncashmentBeforeRetirementErr").text("");
    $("#leaveLimitPerInstanceErr").text("");
    $("#leaveEncashmentAfterRetirementErr").text("");
    $("#offCoveredErr").text("");
    $("#formulaErr").text("");
    $("#fixedTimeIssueErr").text("");
    $("#amountErr").text("");
    $("#totalTimeIssueErr").text("");
    $("#basicPayForFullDAErr").text("");
    $("#natureType").val("");
    $("#employeeCategory").val("");
    $("#eligibility").val("");
    $("#maxLeavePerYear").val("");
    $("#maxLeaveBalance").val("");
    $("#carryForward").val("");
    $("#cashable").val("");
    $("#carryForwardLimit").val("");
    $("#leaveEncashmentBeforeRetirement").val("");
    $("#leaveLimitPerInstance").val("");
    $("#leaveEncashmentAfterRetirement").val("");
    $("#offCovered").val("");
    $("#formula").val("");
    $("#fixedTimeIssue").val("");
    $("#amount").val("");
    $("#totalTimeIssue").val("");
    $("#basicPayForFullDA").val("");
    $('input:checkbox').removeAttr('checked');
    $("#pregsuccessBefore").text("");
}

function resetLeaveTypeList()
{
    $("#displayLeaveTypeTableBody").text("");
}

function  viewLeaveTypeAddList(DivId) {

    $("#" + DivId).text("").append("<div class='tab-pane' id='viewLeaveTypeAdd'/>");
    $("#viewLeaveTypeAdd").append("<div class='table-responsive' id='viewLeaveTypeAddTableDiv' />");
    $("#viewLeaveTypeAddTableDiv").append("<table class='table table-bordered' id='displayLeaveTypeAddTable' />");
    $("#displayLeaveTypeAddTable").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Nature Type</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Category</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Max leave per Year</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Carry Forward</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Leave Limit Per Instance</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Fixed Time Issue</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Cashable</th>"
            + "<th style='min-width:1%;width:80px;''><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;''><i class='fa' style='font-size:21px;'></i> Delete</th>"
            + "</tr></thead>");
    $("#displayLeaveTypeAddTable").append("<tbody id='displayLeaveTypeTableBody' class='table-striped table-bordered' />");
}

function viewLeaveTypeList(divId)
{
    if (checkUserPrivelege(pvViewLeaveType)) {

        $("#" + divId).text("").append("<div id='ErrorMessageDiv1'/>");
        $("#listpanelRow").append("<div class='tab-pane' id='viewLeaveTypeList'/>");
        $("#listpanelRow").append("<div id='ErrorMessageDiv1'/>");
        $("#viewLeaveTypeList").append("<div class='table-responsive' id='viewLeaveTypeListTableDiv' />");
        $("#viewLeaveTypeListTableDiv").append("<table class='table table-bordered table-warning mb30' id='displayLeaveTypeListTable' />");
        $("#viewLeaveTypeListTableDiv").append("<div id='dialog' title='Basic dialog'>" +
                "</div>");
        $("#displayLeaveTypeListTable").append("<thead><tr id='tableHeadID'>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Leave Type</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Short Description</th>");
        $("#tableHeadID").append("<th style='min-width:1%;width:80px;''><i class='fa'></i>Edit</th>");
//        }
        $("#tableHeadID").append("<th style='min-width:1%;width:80px;''><i class='fa' style='font-size:21px;'></i> Delete</th>");
//        }
        $("#tableHeadID").append("</tr></thead>");
        $.get(server_base_url + "leave/LeaveType/ViewList", {
        }).done(function (bdata) {

            if (bdata == fail) {
                $("#ErrorMessageDiv1").text("").append("<center><div class='col-sm-12'  style='color:red;'><strong>No Data Available..<strong></div></center>");
            } else if (bdata == unauthorized) {
                $("#ErrorMessageDiv1").text("").append("<center><div class='col-sm-12'  style='color:red;'><strong>No Data Available..<strong></div></center>");
            } else if (bdata == invalidSession) {
                $("#ErrorMessageDiv1").text("").append("<center><div class='col-sm-12'  style='color:red;'><strong>No Data Available..<strong></div></center>");
                callSessionTimeout();
            } else if (bdata == statusException) {
                $("#ErrorMessageDiv1").text("").append("<center><div class='col-sm-12'  style='color:red;'><strong>No Data Available..<strong></div></center>");
            } else {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#displayLeaveTypeListTable").append("<tbody id='displayLeaveTypeListTableBody'/>");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var obj = JSON.stringify(bdata[i]);



                            if (bdata[i].fixedLeaveType !== "") {

                                $("#displayLeaveTypeListTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                        + "<td>" + sno + "</td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].leaveType + "</td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].shortDescription + "</td>");
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateleaveType('" + encodeURI(obj) + "','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                                $("#" + bdata[i]._id.$oid).append("<td >" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a   style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                                $("#" + bdata[i]._id.$oid).append("</tr>");
                            } else {

                                $("#displayLeaveTypeListTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                        + "<td>" + sno + "</td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].leaveType + "</td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].shortDescription + "</td>");
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateleaveType('" + encodeURI(obj) + "','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteleaveType','listpanelMainBody','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                                $("#" + bdata[i]._id.$oid).append("</tr>");
                            }



                        }
                        $('#displayLeaveTypeListTable').dataTable();
                    }
                }
            }
        });
    }
}
function deleteleaveType(id) {
    if (checkUserPrivelege(pvDeleteLeaveType)) {

        $.post(server_base_url + "leave/LeaveType/Delete", {
            Id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == "502") {
                displayErrorMessages("ErrorMessageDiv1", "" + delete_map_messages, "");
                setTimeout(function () {
                    leaveTypemaster("dashBoardBodyMainDiv");
                }, 3000);
            } else if (BasicIfElseForTable(data, "ErrorMessageDiv1")) {
//                   
                displaySuccessMessages("ErrorMessageDiv1", deleteMessage, "");
                setTimeout(function () {
                    viewLeaveTypeList('listpanelRow');
                }, 2100);
            }
        });
//        }
    }
}

function leaveTypeValidation() {
    var result = 1;



    var natureType = $("#natureType").val();
    var employeeCategory = $("#employeeCategory").val();
    var eligibility = $("#eligibility").val();
    var maxLeavePerYear = $("#maxLeavePerYear").val();
    var maxLeaveBalance = $("#maxLeaveBalance").val();
    var carryForwardLimit = $("#carryForwardLimit").val();
    var leaveEncashmentBeforeRetirement = $("#leaveEncashmentBeforeRetirement").val();
    var leaveLimitPerInstance = $("#leaveLimitPerInstance").val();
    var leaveEncashmentAfterRetirement = $("#leaveEncashmentAfterRetirement").val();
    var formula = $("#formula").val();
    var amount = $("#amount").val();
    var totalTimeIssue = $("#totalTimeIssue").val();
    var basicPayForFullDA = $("#basicPayForFullDA").val();
    var maxLeaveBalance = $("#maxLeaveBalance").val();


//
    if (natureType != "" || employeeCategory != "" || eligibility != "" || maxLeavePerYear != "" || carryForwardLimit != "" || leaveEncashmentBeforeRetirement != "" || leaveLimitPerInstance != "" || leaveEncashmentAfterRetirement != "" ||
            formula != "" || amount != "" || totalTimeIssue != "" || basicPayForFullDA != "" || maxLeaveBalance != "") {

        alertPopUpMessage("Please click on Add button before save");
        result = 0;
    }



    $("#leaveTypeErr").text("");
    $("#shortDescriptionErr").text("");
    $("#leaveNatureErr").text("");
    $("#genderErr").text("");
    if ($("#gender").val() === "" || $("#gender").val() === null) {
        $("#gender").focus();
        displaySmallErrorMessages("genderErr", "Please Enter Gender ");
        result = 0;
    }
    if ($("#leaveNature").val() === "" || $("#leaveNature").val() === null) {
        $("#leaveNature").focus();
        displaySmallErrorMessages("leaveNatureErr", "Please Enter Leave Nature ");
        result = 0;
    } else if ($("#leaveNature").val() !== "") {
    }
    if ($("#shortDescription").val() === "" || $("#shortDescription").val() === null) {
        $("#shortDescription").focus();
        displaySmallErrorMessages("shortDescriptionErr", "Please Enter Short Description.");
        result = 0;
    } else if ($("#shortDescription").val() !== "") {
        if (!$("#shortDescription").val().match((alphaNumericPattern()))) {
            $("#shortDescription").focus();
            displaySmallErrorMessages("shortDescriptionErr", "Please Enter Valid Short Description");
            result = 0;
        }
    }
    if ($("#leaveType").val() === "" || $("#leaveType").val() === null) {
        $("#leaveType").focus();
        displaySmallErrorMessages("leaveTypeErr", "Please Enter Leave Type.");
        result = 0;
    } else if ($("#leaveType").val() !== "") {
        if (!$("#leaveType").val().match((alphaNumericPattern()))) {
            $("#leaveType").focus();
            displaySmallErrorMessages("leaveTypeErr", "Please Enter Valid Leave Type .");
            result = 0;
        }
    }

//changes on 22-9-2016
    var leaveType = $("#leaveType").val();
    var gender = $("#gender").val();
    if ((leaveType.toUpperCase().indexOf("MATERNITY") !== -1 && (gender.toUpperCase() === "MALE")) ||
            (leaveType.toUpperCase().indexOf("PATERNITY") !== -1 && (gender.toUpperCase() === "FEMALE"))) {
        $("#leaveType").focus();
        displaySmallErrorMessages("leaveTypeErr", "Please Enter Valid Leave Type");
        displaySmallErrorMessages("genderErr", "Please Enter Valid Gender");
        result = 0;
    }

    var saveorupdate = $("#saveorupdate").val();
    if (result === 1) {
        if (saveorupdate === "save") {
            saveLeaveTypeDetails();
        } else if (saveorupdate === "update") {
            updateLeaveTypeDetails();
        }
    }
}

function getRowsLengthForLeaveType() {
    var HowManyRows = 0;
    $('table#displayLeaveTypeAddTable tbody tr').each(function () {
        HowManyRows++;
    });
    return HowManyRows;
}

function saveLeaveTypeDetails() {
    if (checkUserPrivelege(pvCreateLeaveType)) {


        if ($('table#displayLeaveTypeAddTable tbody tr').length > 0) {

            var leaveTypeDetails = [];
            $('table#displayLeaveTypeAddTable tbody tr').each(function () {
                leaveTypeDetails.push(JSON.parse($(this).find('td:eq(1) input').val()));
            });
            var leaveTypeJson = {
                leaveType: $("#leaveType").val(),
                shortDescription: $("#shortDescription").val(),
                leaveNature: $("#leaveNature").val(),
                gender: $("#gender").val(),
                fixedLeaveType: $("#fixedLeaveType").val(),
                remarks: $("#remarks").val(),
                leaveTypeDetails: leaveTypeDetails
            };
            $.post(server_base_url + "leave/LeaveType/Save", {
                objJson: JSON.stringify(leaveTypeJson),
                userid: getUserSessionElement("userId")
            }).done(function (data) {


                if (data == "duplicate") {
                    displayErrorMessages(successMsgDivCF, existed + "");
                    setTimeout(function () {
                        leaveTypemaster("dashBoardBodyMainDiv");
                    }, 3000);
                } else {
                    saveOrUpdateCommonFunctionInLeaveType(data);
                }

            });
        }
    }
}


function saveOrUpdateCommonFunctionInLeaveType(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        displaySuccessMessages(successMsgDivCF, successMessage, "");
        setTimeout(function () {
            scrolupfunction();
            leaveTypemaster("dashBoardBodyMainDiv");
        }, 3000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function updateleaveType(obj, id) {
    if (checkUserPrivelege(pvUpdateLeaveType)) {

        obj = decodeURI(obj);
        obj = JSON.parse(obj);
        $("#leaveType").val(obj.leaveType);
        $("#shortDescription").val(obj.shortDescription);
        $("#leaveNature").val(obj.leaveNature);
        $("#gender").val(obj.gender);
        $("#fixedLeaveType").val(obj.fixedLeaveType);
        $("#remarks").val(obj.remarks);
        $("#Id").val(obj._id.$oid);
        $("#saveorupdate").text("").val("").val("update");
        UpdateLeaveTypeRows("displayLeaveTypeTableBody", obj.leaveTypeDetails, id);
        if (doesTableHaveRows("displayLeaveTypeAddTable")) {
            enableElement({data: {id: "saveUpdateBtnId"}});
            enableElement({data: {id: "resetBackBtnId"}});
        } else {
            disableElement({data: {id: "saveUpdateBtnId"}});
            disableElement({data: {id: "resetBackBtnId"}});
        }

        $("#displayLeaveTypeListTable tr").css("background-color", "white");
        $("#displayLeaveTypeListTable tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    } else {
        alertPopUpMessage("You are not authorised");
    }
}

function doesTableHaveRows(id) {
    if ($("#" + id + " " + "tr") === undefined || $("#" + id + " " + "tr").length > 1) {
        return true;
    } else {
        return false;
    }
}

function UpdateLeaveTypeRows(DivId, LeaveTypeDetailsList, id)
{

    if (LeaveTypeDetailsList !== null)
        $("#" + DivId).empty();
    var sno = 0;
    for (var j = 0; j < LeaveTypeDetailsList.length; j++) {
        sno++;
        $("#" + DivId).append("<tr style='cursor:pointer;' id=" +sno+ " >"
                + "<td>" + sno + "</td>"
                + "<td style='cursor:pointer;'>" + LeaveTypeDetailsList[j].natureTypeName + "<input type='hidden' value='" + encodeURI(JSON.stringify(LeaveTypeDetailsList[j])) + "'></td>"
                + "<td style='cursor:pointer;'>" + LeaveTypeDetailsList[j].employeeCategoryName + "<input type='hidden' value='" + encodeURI(JSON.stringify(LeaveTypeDetailsList[j])) + "'></td>"
                + "<td style='cursor:pointer;'>" + LeaveTypeDetailsList[j].maxLeavePerYear + "</td>"
                + "<td style='cursor:pointer;'>" + LeaveTypeDetailsList[j].carryForward + "</td>"
                + "<td style='cursor:pointer;'>" + LeaveTypeDetailsList[j].leaveLimitPerInstance + "</td>"
                + "<td style='cursor:pointer;'>" + LeaveTypeDetailsList[j].fixedTimeIssue + "</td>"
                + "<td style='cursor:pointer;'>" + LeaveTypeDetailsList[j].cashable + "</td>"

                + "<td style='display:none;'>" + LeaveTypeDetailsList[j].natureType + "</td>"
                + "<td style='display:none;'>" + LeaveTypeDetailsList[j].employeeCategory + "</td>"
                + "<td> <a href='javascript:void(0);' onclick=editThisLeaveTypeRow(this.parentNode.parentNode.rowIndex) class='anchor_edit'><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>"
                + "<td><a href='javascript:void(0);' onclick=deleteLeaveTypeListRow(this.parentNode.parentNode.rowIndex,'" + id + "') class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
        clearLeaveTypeDetailsAddData();
    }
}


function updateLeaveTypeDetails() {
    if (checkUserPrivelege(pvUpdateLeaveType)) {
        if ($('table#displayLeaveTypeAddTable tbody tr').length > 0) {
            var leaveTypeId = $("#Id").val();
            var leaveTypeDetails = [];
            $('table#displayLeaveTypeAddTable tbody tr').each(function () {
                leaveTypeDetails.push(JSON.parse(decodeURI($(this).find('td:eq(1) input').val())));
            });
            var leaveTypeJson = {
                leaveType: $("#leaveType").val(),
                shortDescription: $("#shortDescription").val(),
                leaveNature: $("#leaveNature").val(),
                gender: $("#gender").val(),
                fixedLeaveType: $("#fixedLeaveType").val(),
                remarks: $("#remarks").val(),
                leaveTypeDetails: leaveTypeDetails
            };
            $.post(server_base_url + "leave/LeaveType/Update", {
                objJson: JSON.stringify(leaveTypeJson),
                Id: leaveTypeId,
                userid: getUserSessionElement("userId")
            }).done(function (data) {

                if (data == "duplicate") {
                    displayErrorMessages(successMsgDivCF, existed + "");
                    setTimeout(function () {
                        leaveTypemaster("dashBoardBodyMainDiv");
                    }, 3000);
                } else {
                    saveOrUpdateCommonFunctionInLeaveType(data);
                }

            });
        }
    }
}
//Clear All Entered Data
function wipeAllLeaveTypeData() {
    $("#leaveType").val("");
    $("#shortDescription").val("");
    $("#leaveNature").val("");
    $("#gender").val("");
    $("#fixedLeaveType").val("");
    $("#remarks").val("");
    $("#leaveTypeErr").text("");
    $("#shortDescriptionErr").text("");
    $("#leaveNatureErr").text("");
    $("#genderErr").text("");
    $("#fixedLeaveTypeErr").text("");
    $("#remarksErr").text("");
    clearLeaveTypeDetailsAddData();
}

function checkMandatoryFieldsForTextBox(mandatoryFieldsIdList) {

    for (var i = 0; i < mandatoryFieldsIdList.length; i++) {
        var mandatoryFieldId = mandatoryFieldsIdList[i];
        if ($(mandatoryFieldId).val() === null || $(mandatoryFieldId).
                val() === "") {
            $(mandatoryFieldId).focus();
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
            return 0;
        } else {
            $("#pregsuccessBefore").text("");
        }
    }

    return 1;
}

