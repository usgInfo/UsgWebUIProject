//HRMS >> SalaryHead Master
var orderLeverData = [];
var displayLevelData = [];
function salaryheadmaster(divId) {
    scrolupfunction();
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Salary Master</a></label> >> <label>Salary Head Master</label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">Salary Head Master</a>');
    $("#" + divId).text("").append("<div id='testMainDivId'  />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateSalaryHead)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Salary Head Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colSalaryHead'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colSalaryHead").click(function() {
            $("#collapseOne2").toggle();
            if ($("#colSalaryHead span").hasClass("glyphicon-minus-sign")) {
                $("#colSalaryHead").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSalaryHead").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        //salaryhead 
        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        $("#FieldGroup").append("<input type='hidden' id='Id' >");

        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel_InputWithSpan("Description", "required", "description", "Enter description", "onkeypress='return validatealphanumeric(event)'"));
        $("#Row1Col2").append(getLabel("Interest Calculated", "") + "" + getCheckboxWithSpan("InterestCalculated", "", ""));

        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Short Description ", "required", "shortDescription", "Enter short description", "onkeypress='return validatealphanumeric(event)'"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Interest Percentage ", "", "interestPercentage", "Enter interest percentage", "onkeypress='return validateNumber(event)'"));

        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Head Type", "required") + "" + getDropDown("headType"));
        $("#Row3Col2").append(getLabel("Parent Head", "") + "" + getDropDown("parentHead"));

        getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel("Deduction Type", "") + "" + getDropDown("deductionType"));
        $("#Row4Col2").append(getLabel("Rounding", "required") + "" + getDropDown("rounding"));

        getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel("Effect Type", "") + "" + getDropDown("effectType"));
        getTwoColumnInRow("Row5Col2", "mappingRefundableFlagRow", "mappingFlagCol", "refundableFlagCol");
        $("#mappingFlagCol").append(getLabel("Mapping", "") + "" + getCheckboxWithSpan("mapping", "", ""));
        $("#refundableFlagCol").append(getLabel("Is Refundable", "") + "" + getCheckboxWithSpan("isRefundable", "", ""));
        $("#mapping").attr("onclick", "disableFormulaAmountInSHBasedOnMapping()");
//    getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
//    $("#Row5Col1").append(getLabel("Effect Type", "") + "" + getDropDown("effectType"));
//    $("#Row5Col2").append(getLabel("Mapping", "") + "" + getCheckboxWithSpan("mapping", "", ""));
//    $("#mapping").attr("onclick", "disableFormulaAmountInSHBasedOnMapping()");

        getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel("Formula", "") + "" + getDropDown("formula"));
        $("#Row6Col2").append(getLabel("Is Basic", "") + "" + getCheckboxWithSpan("isBasic", "", ""));
        $("#isBasic").attr("onchange", "isBasicCondition()")

        getTwoColumnInRow("FieldGroup", "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel_InputWithSpan("Amount", "", "amount", "Enter amount", "onkeypress='return validateNumber(event)' maxlength=10"));
        $("#Row7Col2").append(getLabel("Part Of Gross", "") + "" + getCheckboxWithSpan("partOfGross", "", ""));

        getTwoColumnInRow("FieldGroup", "Row8", "Row8Col1", "Row8Col2");
        $("#Row8Col1").append(getLabel_InputWithSpan("Display Level", "required", "displayLevel", "Enter display level", "onkeypress='return validateNumber(event)' maxlength=3"));
        $("#Row8Col2").append(getLabel("Present Dependent", "") + "" + getCheckboxWithSpan("presentDependent", "", ""));

        getTwoColumnInRow("FieldGroup", "Row9", "Row9Col1", "Row9Col2");
        $("#Row9Col1").append(getLabel_InputWithSpan("Order Level", "required", "orderLevel", "Enter order level", "onkeypress='return validateNumber(event)' maxlength=3"));
        $("#Row9Col2").append(getLabel("Half on Suspended", "") + "" + getCheckboxWithSpan("halfOnSuspended", "", ""));

        getTwoColumnInRow("FieldGroup", "Row11", "Row11Col1", "Row11Col2");
        $("#Row11Col1").append(getLabel("Taxable", "required") + "" + getDropDown("taxable"));
        $("#Row11Col2").append(getLabel("Show On Register", "") + "" + getCheckboxWithSpan("showOnRegister", "", ""));

        getTwoColumnInRow("FieldGroup", "Row12", "Row12Col1", "Row12Col2");
        $("#Row12Col1").append(getLabel_InputWithSpan("Partially Taxable Limit", "", "partiallyTaxableLimit", "Enter partially taxable limit", "onkeypress='return validateNumber(event)' maxlength=10"));
        $("#Row12Col2").append(getLabel("Show On Salary Slip", "") + "" + getCheckboxWithSpan("showOnSalarySlip", "", ""));

        getTwoColumnInRow("FieldGroup", "Row13", "Row13Col1", "Row13Col2");
        $("#Row13Col1").append(getLabel("Fixed Head", "") + "" + getDropDown("fixedHead"));
        $("#Row13Col2").append(getLabel("Show On Arrear Report", "") + "" + getCheckboxWithSpan("showOnArrearReport", "", ""));

        getTwoColumnInRow("FieldGroup", "Row14", "Row14Col1", "Row14Col2");
        $("#Row14Col1").append(getLabel("ChapterVI Type", "") + "" + getDropDown("chapterType"));
        $("#Row14Col2").append(getLabel("Calculate on Increment", "") + "" + getCheckboxWithSpan("calculateOnIncrement", "", ""));

        getTwoColumnInRow("FieldGroup", "Row15", "Row15Col1", "Row15Col2");
        $("#Row15Col1").append(getLabel("Section Part", "") + "" + getDropDown("sectionPart"));
        $("#Row15Col2").append(getLabel("Block Summation", "") + "" + getCheckboxWithSpan("blockSummation", "", ""));
        // $("#Row15Col2").append(getLabel("Use In Pension", "") + "" + getCheckboxWithSpan("useInPension", "", ""));

        //getTwoColumnInRow("FieldGroup", "Row16", "Row16Col1", "Row16Col2");
//    $("#Row16Col1").append(getLabel_InputWithSpan("Import Desc", "required", "importDesc", "Enter import description", "maxlength=45"));
        $("#Row16Col2").append(getLabel("Block Summation", "") + "" + getCheckboxWithSpan("blockSummation", "", ""));

        getTwoColumnInRow("FieldGroup", "Row17", "Row17Col1", "Row17Col2");
        $("#Row17Col1").append(getLabel("Category") + "" + getDropDown("category"));
        $("#Row17Col2").append(getLabel("Active", "") + "" + getCheckboxWithSpan("active", "", ""));

        getTwoColumnInRow("FieldGroup", "Row18", "Row18Col1", "Row18Col2");
        $("#Row18Col1").append(getLabel("Remarks", "") + "" + getTextareaWithErrSpan("remarks", "Enter Remarks", "", "maxlength=100"));
        $("#Row18Col2").append(getLabel("For Nominee", "") + "" + getCheckboxWithSpan("forNominee", "", ""));

        $("#FieldGroup").append("<div id='panelRow2' class='row' />");
        $("#panelRow2").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='salaryheadValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllSalaryHeadData()' class='btn btn-warning mr5' name='reset' id='resetBackBtnId' value='reset'>Reset</button></center></div>");
    
    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    $("textarea").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });
    
    
    
    
    }
    var headtypeOptions = ["Earnings", "Deductions"];
    getHardCodedOptions("headType", "Head Type", headtypeOptions);
    viewOption("hrms/salarymaster/salaryhead/Earning/View", "", "description", "parentHead", "Parent Head");
    //  viewOption("hrms/salary/DeductionType/ViewList", "", "deductionType", "deductionType", "Deduction Type");
    var roundingOptions = ["None", "50 Paise", "1 Rupees", "10 Rupees"];
    var deductionTypeOptions = ["Loan", "Advance", "Insurance", "Others"];
    getHardCodedOptions("rounding", "Rounding", roundingOptions);
    var effectTypeOptions = ["Monthly", "Annualy"];
    getHardCodedOptions("effectType", "Effect Type", effectTypeOptions);
    var taxableOptions = ["Taxable", "Non Taxable", "Partial Taxable"];
    getHardCodedOptions("deductionType", "Deduction Type", deductionTypeOptions);
    getHardCodedOptions("taxable", "Taxable", taxableOptions);
    viewOption("hrms/salary/FixedHead/ViewList", "", "fixedHead", "fixedHead", "Fixed Head");
    viewOption("hrms/salary/ChapterVIType/ViewList", "", "chapterVIType", "chapterType", "ChapterVI Type");
    viewOption("/hrms/salary/Section/ViewList", "", "description", "sectionPart", "Section Part");
    viewOption("hrms/common/Category/View", "", "categoryy", "category", "Category");
    viewOption("hrms/common/Formula/View", "", "description", "formula", "Formula");
    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
    $("#partiallyTaxableLimit").attr("disabled", true);
    $("#chapterType").attr("disabled", true);
    $("#deductionType").attr("disabled", true);
    $("#InterestCalculated").attr("disabled", true);
    $("#interestPercentage").attr("disabled", true);
    $("#isRefundable").attr("disabled", true);
    $("#forNominee").attr("disabled", true);
    checkingIsBasic();
    if (checkUserPrivelege(pvViewSalaryHead)) {
        viewSalaryHeadList("tableHeaderForList");
    }
    setTimeout(function() {
        $("#pregsuccessBefore").text("");
    }, 2100);
    $("#formula").attr("onchange", "onchangeOfFormula()");
    $("#amount").attr("onchange", "onchangeOfAmount()");
}


function isBasicCondition() {
    if ($("#isBasic").prop("checked") == true) {
        $("#formula").val("").prop("disabled", true);
        $("#amount").val("").prop("disabled", true);
        $("#mapping").val("").prop("disabled", true);
    }
}
function isBasicConditionInUpdate(isBasic) {
    if (isBasic == "Yes" || isBasic == "yes") {
        $("#formula").val("").prop("disabled", true);
        $("#amount").val("").prop("disabled", true);
        $("#mapping").val("").prop("disabled", true);
    }
}
function salaryheadValidation() {
    var saveorupdate = $("#saveorupdate").val();
    $("#descriptionErr").text("");
    $("#InterestCalculatedErr").text("");
    $("#shortDescriptionErr").text("");
    $("#interestPercentageErr").text("");
    $("#headTypeErr").text("");
    $("#parentHeadErr").text("");
    $("#deductionTypeErr").text("");
    $("#roundingErr").text("");
    $("#mappingErr").text("");
    $("#effectTypeErr").text("");
    $("#formulaErr").text("");
    $("#isBasicErr").text("");
    $("#amountErr").text("");
    $("#partOfGrossErr").text("");
    $("#displayLevelErr").text("");
    $("#presentDependentErr").text("");
    $("#orderLevelErr").text("");
    $("#halfOnSuspendedErr").text("");
    $("#taxableErr").text("");
    $("#showOnRegisterErr").text("");
    $("#partiallyTaxableLimitErr").text("");
    $("#showOnSalarySlipErr").text("");
    $("#fixedHeadErr").text("");
    $("#showOnArrearReportErr").text("");
    $("#calculateOnIncrementErr").text("");
    $("#sectionPartErr").text("");
    $("#useInPensionErr").text("");
    $("#importDescErr").text("");
    $("#blockSummationErr").text("");
    $("#categoryErr").text("");
    $("#activeErr").text("");
    $("#remarksErr").text("");
    $("#forNomineeErr").text("");
    var description = $("#description").val();
    var interestPercentage = $("#interestPercentage").val();
    var shortDescription = $("#shortDescription").val();
    var headType = $("#headType").val();
    var rounding = $("#rounding").val();
    var displayLevel = $("#displayLevel").val();
    var orderLevel = $("#orderLevel").val();
    var taxable = $("#taxable").val();
    // var importDesc = $("#importDesc").val();
    var result = 1;

    if (preValidation(description) || preValidation(shortDescription) || preValidation(headType) || preValidation(rounding) || preValidation(displayLevel) || preValidation(orderLevel) || preValidation(taxable)) {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", mandatoryFieldMsg);
        return false;
    } else {
//    if (importDesc == "") {
//        $("#importDesc").focus();
//        addSomeClass("importDescFieldGroup", "has-error");
//        displaySmallErrorMessagesInRed("importDescErr", "Please enter description.");
//        result = 0;
//    } else
//      if (importDesc != "") {
//        if (!importDesc.match((alphaNumericPattern()))) {
//            $("#importDesc").focus();
//            addSomeClass("importDescFieldGroup", "has-error");
//            displaySmallErrorMessagesInRed("importDescErr", "Please enter description.");
//            result = 0;
//        }
//        removeSomeClass("shortDescriptionFieldGroup", "has-error");
//    }
        if (taxable == "" || taxable == null) {
            $("#taxable").focus();
            addSomeClass("taxableFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("taxableErr", "Please select option.");
            result = 0;
        } else if (taxable != "") {
            removeSomeClass("taxableFieldGroup", "has-error");
        }
        if (orderLevel == "") {
            $("#orderLevel").focus();
            addSomeClass("orderLevelFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("orderLevelErr", "Please enter order level.");
            result = 0;
        } else if (orderLevel != "") {
            if (orderLevel.match((numbervalidation()))) {
                if (saveorupdate == "save")
                    for (var k = 0; k <= orderLeverData.length; k++) {
                        console.log(orderLeverData[k]);
                        var insertedorder = orderLeverData[k];
                        var order = $("#orderLevel").val();
                        if (insertedorder == order) {
                            addSomeClass("orderLevelFieldGroup", "has-error");
                            displaySmallErrorMessagesInRed("orderLevelErr", "Already Saved please try to insert Different level.");
                            result = 0;
                            break;

                        }
                    }
            }
        } else {
            $("#orderLevel").focus();
            addSomeClass("orderLevelFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("orderLevelErr", "Please enter valid order level.");
            result = 0;

        }


        if (displayLevel == "") {
            $("#displayLevel").focus();
            addSomeClass("displayLevelFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("displayLevelErr", "Please enter display level.");
            result = 0;
        } else if (displayLevel != "") {
            if (displayLevel.match((numbervalidation()))) {
                if (saveorupdate == "save") {
                    for (var k = 0; k <= displayLevelData.length; k++) {
                        var insertedorder = displayLevelData[k];
                        var order = $("#displayLevel").val();
                        if (insertedorder == order) {
                            addSomeClass("displayLevelFieldGroup", "has-error");
                            displaySmallErrorMessagesInRed("displayLevelErr", "Already Saved please try to insert Different level.");
                            result = 0;
                            break;

                        }
                    }
                }
            } else {
                $("#displayLevel").focus();
                addSomeClass("displayLevelFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("displayLevelErr", "Please enter display level.");
                result = 0;
            }
            removeSomeClass("displayLevelFieldGroup", "has-error");
        }
        if (rounding == "" || rounding == null) {
            $("#rounding").focus();
            addSomeClass("roundingFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("roundingErr", "Please select rounding.");
            result = 0;
        }
        if (headType == null || headType == "") {
            $("#headType").focus();
            addSomeClass("headTypeFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("headTypeErr", "Please select head type.");
            result = 0;
        } else if (headType != null) {
            removeSomeClass("headTypeFieldGroup", "has-error");
        }
        if (interestPercentage != "") {
            if (!interestPercentage.match((numbervalidation()))) {
                $("#interestPercentage").focus();
                addSomeClass("interestPercentageFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("interestPercentageErr", "Please enter valid Interest Percentage 0-100.");
                result = 0;
            } else if (interestPercentage.match((numbervalidation()))) {
                var interestPercentageval = parseInt(interestPercentage);
                if (interestPercentageval >= 0 && interestPercentageval <= 100) {
                    removeSomeClass("shortDescriptionFieldGroup", "has-error");
                } else {
                    addSomeClass("interestPercentageFieldGroup", "has-error");
                    $("#interestPercentage").focus();
                    displaySmallErrorMessagesInRed("interestPercentageErr", "Please enter valid Interest Percentage 0-100.");
                    result = 0;
                }
            }
            removeSomeClass("shortDescriptionFieldGroup", "has-error");
        }
        if (shortDescription == "") {
            $("#shortDescription").focus();
            addSomeClass("shortDescriptionFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("shortDescriptionErr", "Please enter short description.");
            result = 0;
        } else if (shortDescription != "") {
            if (!shortDescription.match((alphaNumericPattern()))) {
                $("#shortDescription").focus();
                addSomeClass("shortDescriptionFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("shortDescriptionErr", "Please enter valid short description.");
                result = 0;
            }
            removeSomeClass("shortDescriptionFieldGroup", "has-error");
        }
        if (description == "") {
            $("#description").focus();
            addSomeClass("descriptionFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("descriptionErr", "Please enter description.");
            result = 0;
        } else if (description != "") {
            if (!description.match((alphaNumericPattern()))) {
                $("#description").focus();
                addSomeClass("descriptionFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("descriptionErr", "Please enter valid description.");
                result = 0;
            }
            removeSomeClass("descriptionFieldGroup", "has-error");
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveSalaryHeadDetails();
            } else {
                updateSalaryHeadDetails();
            }
        }
    }
}
function saveSalaryHeadDetails() {
    if (checkUserPrivelege(pvCreateSalaryHead)) {
        var mapping = "No";
        var InterestCalculated = "No";
        var isBasic = "No";
        var partOfGross = "No";
        var presentDependent = "No";
        var halfOnSuspended = "No";
        var showOnRegister = "No";
        var showOnArrearReport = "No";
        var showOnSalarySlip = "No";
        var calculateOnIncrement = "No";
        //var useInPension = "No";
        var blockSummation = "No";
        var active = "No";
        var forNominee = "No";
        if ($("#mapping").prop("checked") == true) {
            mapping = "Yes";
        }
        if ($("#InterestCalculated").prop("checked") == true) {
            InterestCalculated = "Yes";
        }
        if ($("#isBasic").prop("checked") == true) {
            isBasic = "Yes";
        }
        if ($("#partOfGross").prop("checked") == true) {
            partOfGross = "Yes";
        }
        if ($("#presentDependent").prop("checked") == true) {
            presentDependent = "Yes";
        }
        if ($("#halfOnSuspended").prop("checked") == true) {
            halfOnSuspended = "Yes";
        }
        if ($("#showOnRegister").prop("checked") == true) {
            showOnRegister = "Yes";
        }
        if ($("#showOnSalarySlip").prop("checked") == true) {
            showOnSalarySlip = "Yes";
        }
        if ($("#showOnArrearReport").prop("checked") == true) {
            showOnArrearReport = "Yes";
        }
        if ($("#calculateOnIncrement").prop("checked") == true) {
            calculateOnIncrement = "Yes";
        }
        if ($("#blockSummation").prop("checked") == true) {
            blockSummation = "Yes";
        }
        if ($("#active").prop("checked") == true) {
            active = "Yes";
        }
//    if ($("#useInPension").prop("checked") == true) {
//        useInPension = "Yes";
//    }
        if ($("#forNominee").prop("checked") == true) {
            forNominee = "Yes";
        }
        var description = $("#description").val();
        var shortDescription = $("#shortDescription").val();
        var interestPercentage = $("#interestPercentage").val();
        var headType = $("#headType").val();
        var parentHead = $("#parentHead").val();
        var deductionType = $("#deductionType").val();
        var rounding = $("#rounding").val();
        var effectType = $("#effectType").val();
        var formula = $("#formula").val();
        var amount = $("#amount").val();
        var displayLevel = $("#displayLevel").val();
        var orderLevel = $("#orderLevel").val();
        var taxable = $("#taxable").val();
        var partiallyTaxableLimit = $("#partiallyTaxableLimit").val();
        var fixedHead = $("#fixedHead").val();
        var chapterType = $("#chapterType").val();
        var sectionPart = $("#sectionPart").val();
        //   var importDesc = $("#importDesc").val();
        var category = $("#category").val();
        var remarks = $("#remarks").val();
        var isRefundable = "No";
        if (deductionType == "Loan"||deductionType == "Advance") {
            if ($("#isRefundable").prop("checked") == true) {
                isRefundable = "Yes";
            }

        }
        var salaryheadjson = {
            description: description,
            InterestCalculated: InterestCalculated,
            shortDescription: shortDescription,
            interestPercentage: interestPercentage,
            headType: headType,
            parentHead: parentHead,
            deductionType: deductionType,
            rounding: rounding,
            mapping: mapping,
            effectType: effectType,
            formula: formula,
            isBasic: isBasic,
            amount: amount,
            partOfGross: partOfGross,
            displayLevel: displayLevel,
            presentDependent: presentDependent,
            orderLevel: orderLevel,
            halfOnSuspended: halfOnSuspended,
            taxable: taxable,
            isRefundable: isRefundable,
            partiallyTaxableLimit: partiallyTaxableLimit,
            showOnSalarySlip: showOnSalarySlip,
            fixedHead: fixedHead,
            showOnArrearReport: showOnArrearReport,
            chapterType: chapterType,
            calculateOnIncrement: calculateOnIncrement,
            sectionPart: sectionPart,
            //    useInPension: useInPension,
            showOnRegister: showOnRegister,
            //  importDesc: importDesc,
            blockSummation: blockSummation,
            category: category,
            active: active,
            remarks: remarks,
            forNominee: forNominee
        };
        $.post(server_base_url + "hrms/salary/SalaryHead/Save", {
            salaryheadJson: JSON.stringify(salaryheadjson),
            userId: getUserSessionElement("userId")
        }).done(function(data) {
            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else if (data == duplicate_Message) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function() {
                    salaryheadmaster("dashBoardBodyMainDiv");
                }, 2000);
            } else {
                disableDiv("FieldGroup");
                setTimeout(function() {
                    salaryheadmaster("dashBoardBodyMainDiv");
                    scrolupfunction();
                    displaySuccessMessages("pregsuccessBefore", successMessage, "");
                }, 4000);
            }
        });
    }
}
function updateSalaryHeadDetails() {
    if (checkUserPrivelege(pvUpdateSalaryHead)) {
        var Id = $('#Id').val();
        var mapping = "No";
        var InterestCalculated = "No";
        var isBasic = "No";
        var partOfGross = "No";
        var presentDependent = "No";
        var halfOnSuspended = "No";
        var showOnRegister = "No";
        var showOnArrearReport = "No";
        var showOnSalarySlip = "No";
        var calculateOnIncrement = "No";
        // var useInPension = "No";
        var blockSummation = "No";
        var active = "No";
        var forNominee = "No";
        if ($("#mapping").prop("checked") == true) {
            mapping = "Yes";
        }
        if ($("#InterestCalculated").prop("checked") == true) {
            InterestCalculated = "Yes";
        }
        if ($("#isBasic").prop("checked") == true) {
            isBasic = "Yes";
        }
        if ($("#partOfGross").prop("checked") == true) {
            partOfGross = "Yes";
        }
        if ($("#presentDependent").prop("checked") == true) {
            presentDependent = "Yes";
        }
        if ($("#halfOnSuspended").prop("checked") == true) {
            halfOnSuspended = "Yes";
        }
        if ($("#showOnRegister").prop("checked") == true) {
            showOnRegister = "Yes";
        }
        if ($("#showOnSalarySlip").prop("checked") == true) {
            showOnSalarySlip = "Yes";
        }
        if ($("#showOnArrearReport").prop("checked") == true) {
            showOnArrearReport = "Yes";
        }
        if ($("#calculateOnIncrement").prop("checked") == true) {
            calculateOnIncrement = "Yes";
        }
        if ($("#blockSummation").prop("checked") == true) {
            blockSummation = "Yes";
        }
        if ($("#active").prop("checked") == true) {
            active = "Yes";
        }
//    if ($("#useInPension").prop("checked") == true) {
//        useInPension = "Yes";
//    }
        if ($("#forNominee").prop("checked") == true) {
            forNominee = "Yes";
        }
        var description = $("#description").val();
        var shortDescription = $("#shortDescription").val();
        var interestPercentage = $("#interestPercentage").val();
        var headType = $("#headType").val();
        var parentHead = $("#parentHead").val();
        var deductionType = $("#deductionType").val();
        var rounding = $("#rounding").val();
        var effectType = $("#effectType").val();
        var formula = $("#formula").val();
        var amount = $("#amount").val();
        var displayLevel = $("#displayLevel").val();
        var orderLevel = $("#orderLevel").val();
        var taxable = $("#taxable").val();
        var partiallyTaxableLimit = $("#partiallyTaxableLimit").val();
        var fixedHead = $("#fixedHead").val();
        var chapterType = $("#chapterType").val();
        var sectionPart = $("#sectionPart").val();
        //var importDesc = $("#importDesc").val();
        var category = $("#category").val();
        var remarks = $("#remarks").val();
        var isRefundable = "No";
        if (deductionType == "Loan" || deductionType == "Advance") {
            if ($("#isRefundable").prop("checked") == true) {
                isRefundable = "Yes";
            }
        }

        var salaryheadJson = {
            description: description,
            InterestCalculated: InterestCalculated,
            shortDescription: shortDescription,
            interestPercentage: interestPercentage,
            headType: headType,
            parentHead: parentHead,
            deductionType: deductionType,
            isRefundable: isRefundable,
            rounding: rounding,
            mapping: mapping,
            effectType: effectType,
            formula: formula,
            isBasic: isBasic,
            amount: amount,
            partOfGross: partOfGross,
            displayLevel: displayLevel,
            presentDependent: presentDependent,
            orderLevel: orderLevel,
            halfOnSuspended: halfOnSuspended,
            taxable: taxable,
            showOnRegister: showOnRegister,
            partiallyTaxableLimit: partiallyTaxableLimit,
            showOnSalarySlip: showOnSalarySlip,
            fixedHead: fixedHead,
            showOnArrearReport: showOnArrearReport,
            chapterType: chapterType,
            calculateOnIncrement: calculateOnIncrement,
            sectionPart: sectionPart,
            // useInPension: useInPension,
            // importDesc: importDesc,
            blockSummation: blockSummation,
            category: category,
            active: active,
            remarks: remarks,
            forNominee: forNominee
        };
        $.post(server_base_url + "hrms/salary/SalaryHead/Update", {
            salaryheadJson: JSON.stringify(salaryheadJson),
            salaryheadId: Id,
            userId: getUserSessionElement("userId")
        }).done(function(data) {
            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else if (data == duplicate_Message) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function() {
                    salaryheadmaster("dashBoardBodyMainDiv");
                }, 2000);
            } else {
                disableDiv("FieldGroup");
                setTimeout(function() {
                    salaryheadmaster("dashBoardBodyMainDiv");
                    scrolupfunction();
                    displaySuccessMessages("pregsuccessBefore", successMessage, "");
                }, 4000);
            }
        });
    }
}
function wipeAllSalaryHeadData() {
    resetAllValuesInSpecifiedDiv("FieldGroup");
    $("#pregsuccessBefore").text("");
    $("#ErrorDiv").text("");
}
function viewSalaryHeadList(divId)
{
    if (checkUserPrivelege(pvViewSalaryHead)) {
        $("#" + divId).text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Salary Heads</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colSalaryHeadList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colSalaryHeadList").click(function() {
            $("#collapseOne3").toggle();
            if ($("#colSalaryHeadList span").hasClass("glyphicon-minus-sign")) {
                $("#colSalaryHeadList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSalaryHeadList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");
        $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displaySalaryHeadTable' />");
        $("#displaySalaryHeadTable").append("<thead class=''><tr id=salaryHeadTableId>"
                + " <th class='sno_width'> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Description </th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Short Description</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Head Type</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Mapping</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Order Level</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Display Level</th>");
        if (checkUserPrivelege(pvUpdateSalaryHead)) {
            $("#salaryHeadTableId").append("<th class='table_anchor_width'><i ></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteSalaryHead)) {
            $("#salaryHeadTableId").append("<th class='table_anchor_width'><i  style='font-size:21px;'></i> Delete</th>");
        }

        $.get(server_base_url + "hrms/salary/SalaryHead/ViewList", {
        }).done(function(bdata) {
            if (bdata == fail) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + noDataAvailable + "");

//            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />")
            } else if (bdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + unauthorizedMessage + "");
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + noDataAvailable + "");
            } else {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#displaySalaryHeadTable").append("<tbody id='displaySalaryHeadTableBody' class='table-striped table-bordered' />");
//                    for (var i = bdata.length-1; i >=0 ; i--) {
                        for (var i = 0; i <= bdata.length - 1; i++) {
                            sno++;
                            var salaryheadjson = "";
                            salaryheadjson = JSON.stringify(bdata[i]);
                            $("#displaySalaryHeadTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].description + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].shortDescription + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].headType + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].mapping + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].orderLevel + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].displayLevel + "</td>");

                            if (checkUserPrivelege(pvUpdateSalaryHead)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatesalaryhead('" + encodeURI(salaryheadjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteSalaryHead)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletesalaryhead','','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                            }
                        }
                        $('#displaySalaryHeadTable').dataTable();
                        $('#displaySalaryHeadTable').append("</table>");
                    }
                }
            }
        });
    }
}

function updatesalaryhead(obj) {
    if (checkUserPrivelege(pvUpdateSalaryHead)) {
        scrolupfunction();
        $("#pregsuccessBefore").text("");
        $("#isBasic").prop("checked", "");
        obj = JSON.parse(decodeURI(obj));
//    isBasicConditionInUpdate(obj.isBasic);
        $("#description").val(obj.description);
        $("#shortDescription").val(obj.shortDescription);
        $("#interestPercentage").val(obj.interestPercentage);
        $("#amount").val(obj.amount);
        $("#displayLevel").val(obj.displayLevel);
        $("#orderLevel").val(obj.orderLevel);
        $("#partiallyTaxableLimit").val(obj.partiallyTaxableLimit);
        // $("#importDesc").val(obj.importDesc);
        $("#remarks").val(obj.remarks);
        $("#isBasic").attr("disabled", false);
        $("#displaySalaryHeadTableBody tr").css("background-color", "white");
        $("#displaySalaryHeadTableBody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
        //DropDowns
        $("#headType").val(obj.headType);
//    $("#headType option:contains(" + obj.headType + ")").attr('selected', 'selected');
        $("#effectType").val(obj.effectType);
//    $("#effectType option:contains(" + obj.effectType + ")").attr('selected', 'selected');
//    $("#parentHead option:contains(" + obj.parentHead + ")").attr('selected', 'selected');
        $("#parentHead").val(obj.parentHead);
        $("#deductionType").val(obj.deductionType);
//    $("#deductionType option:contains(" + obj.deductionType + ")").attr('selected', 'selected');
        $("#rounding").val(obj.rounding);
//    $("#rounding option:contains(" + obj.rounding + ")").attr('selected', 'selected');
//    if (obj.formula != "" || obj.formula != null)
//        $("#formula option:contains(" + obj.formula + ")").attr('selected', 'selected');
        $("#taxable").val(obj.taxable);
//    $("#taxable option:contains(" + obj.taxable + ")").attr('selected', 'selected');
        $("#fixedHead").val(obj.fixedHead);
//    $("#fixedHead option:contains(" + obj.fixedHead + ")").attr('selected', 'selected');
        $("#chapterType").val(obj.chapterType);
//    $("#chapterType option:contains(" + obj.chapterType + ")").attr('selected', 'selected');
        $("#sectionPart").val(obj.sectionPart);
//    $("#sectionPart option:contains(" + obj.sectionPart + ")").attr('selected', 'selected');
//    $("#category option:contains(" + obj.category + ")").attr('selected', 'selected');
        $("#category").val(obj.category);
        var headTypeValue = $("#headType").val();
        var dropdownvalue = "Deductions";
        if (headTypeValue == dropdownvalue) {
            $("#forNominee").prop("disabled", false);
            $("#deductionType").prop("disabled", false);
        } else {
            $("#deductionType").prop("disabled", true);
            $("#forNominee").prop("disabled", true);
        }

        var taxableValue = $("#taxable").val();
        var dropdownvalue = "Partial Taxable";
        var dropdownvaluetax = "Taxable";
        //Validation

        if (taxableValue == dropdownvaluetax) {
            $("#chapterType").attr("disabled", false);
        } else if (taxableValue == dropdownvalue) {
            $("#partiallyTaxableLimit").attr("disabled", false);
            $("#chapterType").attr("disabled", false);
        } else {
            $("#chapterType").attr("disabled", true);
            $("#partiallyTaxableLimit").attr("disabled", true);
        }
        $("#InterestCalculated").prop("checked", "");
        $("#showOnRegister").prop("checked", "");
        $("#isRefundable").prop("checked", "");
        $("#isBasic").prop("checked", "");
        $("#partOfGross").prop("checked", "");
        $("#presentDependent").prop("checked", "");
        $("#showOnSalarySlip").prop("checked", "");
        $("#showOnArrearReport").prop("checked", "");
        $("#calculateOnIncrement").prop("checked", "");
        $("#blockSummation").prop("checked", "");
        $("#active").prop("checked", "");
        $("#forNominee").prop("checked", "");
        var headTypeValue = $("#deductionType").val();
        var dropdownvalue = "Loan";
        if (headTypeValue == dropdownvalue) {
            $("#InterestCalculated").attr("disabled", false);
            $("#interestPercentage").attr("disabled", false);
        } else {
            $("#InterestCalculated").attr("disabled", true);
            $("#interestPercentage").attr("disabled", true);
        }
//Validation
//Checkbox  
        if (obj.InterestCalculated == "Yes")
            $("#InterestCalculated").prop("checked", "checked");
        if (obj.isRefundable == "Yes")
            $("#isRefundable").prop("checked", "checked");
        if (obj.mapping == "Yes")
            $("#mapping").prop("checked", "checked");
        if (obj.mapping == "No")
            $("#mapping").prop("checked", false);
        if (obj.isBasic == "Yes")
            $("#isBasic").prop("checked", "checked");
        if (obj.partOfGross == "Yes")
            $("#partOfGross").prop("checked", "checked");
        if (obj.presentDependent == "Yes")
            $("#presentDependent").prop("checked", "checked");
        if (obj.halfOnSuspended == "Yes")
            $("#halfOnSuspended").prop("checked", "checked");
        if (obj.showOnRegister == "Yes")
            $("#showOnRegister").prop("checked", "checked");
        if (obj.showOnSalarySlip == "Yes")
            $("#showOnSalarySlip").prop("checked", "checked");
        if (obj.showOnArrearReport == "Yes")
            $("#showOnArrearReport").prop("checked", "checked");
        if (obj.calculateOnIncrement == "Yes")
            $("#calculateOnIncrement").prop("checked", "checked");
//    if (obj.useInPension == "Yes")
//        $("#useInPension").prop("checked", "checked");
        if (obj.blockSummation == "Yes")
            $("#blockSummation").prop("checked", "checked");
        if (obj.active == "Yes")
            $("#active").prop("checked", "checked");
        if (obj.forNominee == "Yes")
            $("#forNominee").prop("checked", "checked");
        checkingIsBasicforUpdate(obj.isBasic);
        $("#Id").val(obj._id.$oid);
        $("#saveorupdate").val("update");
        $("#saveupdatebutton").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "salaryheadmaster('" + DashboardMainDivID + "')");
        var shortDescription = $("#shortDescription").val();
        $.post(server_base_url + "/hrms/SalaryHead/CheckSalaryHeadInEmp", {
            description: shortDescription
        }).done(function(data) {
            if (data.result == true) {
                if (obj.mapping == "Yes" || obj.mapping == "yes") {
                    $("#formula").val("").prop("disabled", true);
                    $("#amount").val("").prop("disabled", true);
                } else if (obj.mapping == "No" || obj.mapping == "no") {
                    if ((obj.formula == "" || obj.formula == undefined || obj.formula == null) && (obj.amount != "" || obj.amount != null || obj.amount != undefined)) {
                        $("#formula").val("").prop("disabled", true);
                        $("#amount").val("").prop("disabled", false).val(obj.amount);
                    } else if ((obj.amount == "" || obj.amount == undefined || obj.amount == null) && (obj.formula != "" || obj.formula != null || obj.formula != undefined)) {
                        $("#formula").val("").prop("disabled", false).val(obj.formula);
                        $("#formula").val(obj.formula);
                        $("#amount").val("").prop("disabled", true).val("");
                    } else {
                        $("#formula").val("").prop("disabled", false);
                        $("#amount").val("").prop("disabled", false);
                    }
                }
            } else {
                if (obj.mapping == "Yes" || obj.mapping == "yes") {
                    $("#formula").val("").prop("disabled", true);
                    $("#amount").val("").prop("disabled", true);
                } else if (obj.mapping == "No" || obj.mapping == "no") {
                    if ((obj.formula == "" || obj.formula == undefined || obj.formula == null) && (obj.amount != "" || obj.amount != null || obj.amount != undefined)) {
                        $("#formula").val("").prop("disabled", false);
                        $("#amount").val("").prop("disabled", false).val(obj.amount);
                    } else if ((obj.amount == "" || obj.amount == undefined || obj.amount == null) && (obj.formula != "" || obj.formula != null || obj.formula != undefined)) {
                        $("#formula").val("").prop("disabled", false).val(obj.formula);
                        $("#formula").val(obj.formula);
                        $("#amount").val("").prop("disabled", false).val("");
                    } else {
                        $("#formula").val("").prop("disabled", false);
                        $("#amount").val("").prop("disabled", false);
                    }
                }

            }
        });
//        if (obj.mapping == "Yes" || obj.mapping == "yes") {
//            $("#formula").val("").prop("disabled", true);
//            $("#amount").val("").prop("disabled", true);
//        } else if (obj.mapping == "No" || obj.mapping == "no") {
//            if ((obj.formula == "" || obj.formula == undefined || obj.formula == null) && (obj.amount != "" || obj.amount != null || obj.amount != undefined)) {
//                $("#formula").val("").prop("disabled", true);
//                $("#amount").val("").prop("disabled", false).val(obj.amount);
//            } else if ((obj.amount == "" || obj.amount == undefined || obj.amount == null) && (obj.formula != "" || obj.formula != null || obj.formula != undefined)) {
//                $("#formula").val("").prop("disabled", false).val(obj.formula);
//                $("#formula").val(obj.formula);
//                $("#amount").val("").prop("disabled", true).val("");
//            } else {
//                $("#formula").val("").prop("disabled", false);
//                $("#amount").val("").prop("disabled", false);
//            }
//        }
        setTimeout(function() {
            $("#isBasic").trigger("onchange");
        }, 2000);
//        onchangeOfFormulaInUpdate(obj.formula);

    }
}




function deletesalaryhead(id) {
    if (checkUserPrivelege(pvDeleteSalaryHead)) {
        $.post(server_base_url + "hrms/salary/SalaryHead/Delete", {
            salaryheadId: id,
            userId: getUserSessionElement("userId")
        }).done(function(data) {

            if (data == fail) {
                displayErrorMessages("ErrorDiv",delete_map_messages);
                setTimeout(function() {
                    viewSalaryHeadList("tableHeaderForList");
                }, 1000);
            } else if (data == unauthorized) {
                displayErrorMessages("ErrorDiv", unauthorizedMessage);
            } else if (data == statusException) {
                displayErrorMessages("ErrorDiv", " " + delete_map_messages, "");
                setTimeout(function() {
                    viewSalaryHeadList("tableHeaderForList");
                }, 1000);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("ErrorDiv", "No User available");
            } else {
                displaySuccessMessages("ErrorDiv", "Deleted Succesfully");
                setTimeout(function() {
                    viewSalaryHeadList("tableHeaderForList");
                }, 4000);
            }
        });
    }
}
// --------------------------------- Validation Condition------------------------------
$(document).on('change', '#headType', function() {

    var headTypeValue = $("#headType").val();
    var dropdownvalue = "Deductions";
    if (headTypeValue == dropdownvalue) {
        $("#deductionType").val("");
        $("#forNominee").prop("disabled", false);
        $("#deductionType").prop("disabled", false);
    } else {
        $("#deductionType").val("");
        $("#deductionType").prop("disabled", true);
        $("#forNominee").prop("disabled", true);
    }
});
function onchangeOfFormula() {
    if ($("#formula").val() != "") {
        $("#amount").prop("disabled", true).val("");
    } else if ($("#formula").val() == "") {
        $("#amount").prop("disabled", false);
    }
}
function onchangeOfAmount() {
    if ($("#amount").val() != "") {
        $("#formula").prop("disabled", true);
        $('select formula[value="1"]').attr("selected", true);
    } else if ($("#amount").val() == "") {
        $("#formula").prop("disabled", false);
    }
}
function onchangeOfFormulaInUpdate(formula) {
    if (formula != "" || formula != null || formula != undefined) {
        $("#amount").prop("disabled", true);
    } else if (formula == "" || formula == undefined || formula == null) {
        $("#amount").prop("disabled", false);
    }
}
function onchangeOfAmountInUpdate(amount) {
    if (amount != "" || amount != undefined || amount != null) {
        $("#formula").prop("disabled", true);
    } else if (amount == "" || amount == undefined || amount == null) {
        $("#formula").prop("disabled", false);
    }
}

//$(document).on('change', '#formula', function () {
//    if ($("#formula").val() != "") {
//        $("#amount").prop("disabled", true);
//    } else {
//        $("#amount").prop("disabled", false);
//    }
//    event.stopImmediatePropagation();
//});

$(document).on('change', '#taxable', function() {
    var taxableValue = $("#taxable").val();
    var dropdownvalue = "Partial Taxable";
    var dropdownvaluetax = "Taxable";
    if (taxableValue == dropdownvaluetax) {
        $("#chapterType").val("");
        $("#chapterType").attr("disabled", false);
        $("#partiallyTaxableLimit").attr("disabled", true);
    } else if (taxableValue == dropdownvalue) {
        $("#chapterType").val("");
        $("#partiallyTaxableLimit").val("");
        $("#partiallyTaxableLimit").attr("disabled", false);
        $("#chapterType").attr("disabled", false);
    } else {
        $("#chapterType").val("");
        $("#partiallyTaxableLimit").val("");
        $("#chapterType").attr("disabled", true);
        $("#partiallyTaxableLimit").attr("disabled", true);
    }
});
$(document).on('change', '#deductionType', function() {
    $("#InterestCalculated").prop("checked", "");
    var headTypeValue = $("#deductionType").val();
    var dropdownvalue = "Loan";
    if (headTypeValue == dropdownvalue) {
        $("#InterestCalculated").val("");
        $("#interestPercentage").val("");
        $("#isRefundable").prop("checked", "");
        $("#InterestCalculated").attr("disabled", false);
        $("#interestPercentage").attr("disabled", false);
        $("#isRefundable").attr("disabled", false);
    } else if (headTypeValue == "Advance") {
        $("#InterestCalculated").val("");
        $("#interestPercentage").val("");
        $("#isRefundable").prop("checked", "");
        $("#InterestCalculated").attr("disabled", false);
        $("#interestPercentage").attr("disabled", false);
        $("#isRefundable").attr("disabled", false);
    } else {
        $("#InterestCalculated").val("");
        $("#interestPercentage").val("");
        $("#isRefundable").prop("checked", "");
        $("#InterestCalculated").attr("disabled", true);
        $("#interestPercentage").attr("disabled", true);
        $("#isRefundable").attr("disabled", true);
    }
});
function checkingIsBasic() {
    $.get(server_base_url + "hrms/salary/SalaryHead/ViewList", {
    }).done(function(bdata) {

        if (bdata != null) {
            for (var i = bdata.length - 1; i >= 0; i--) {
                orderLeverData.push(bdata[i].orderLevel);
                displayLevelData.push(bdata[i].displayLevel)
            }

            var status = "Yes";
            for (var i = bdata.length - 1; i >= 0; i--) {
                if (bdata[i].isBasic == status) {
                    $("#isBasic").attr("disabled", true);
                    return;
                }
            }
        }
    });
    $("#isBasic").attr("disabled", false);
}


function checkingIsBasicforUpdate(val) {
    $.get(server_base_url + "hrms/salary/SalaryHead/ViewList", {
    }).done(function(bdata) {

        if (bdata != null) {
            for (var i = bdata.length - 1; i >= 0; i--) {
                orderLeverData.push(bdata[i].orderLevel);
                displayLevelData.push(bdata[i].displayLevel)
            }
            var status = "Yes";
            for (var i = bdata.length - 1; i >= 0; i--) {

                if (bdata[i].isBasic == status && val != "Yes") {
                    $("#isBasic").attr("disabled", true);
                    return;
                }
            }
        }
    });
    $("#isBasic").attr("disabled", false);
}

function disableFormulaAmountInSHBasedOnMapping() {
    if ($("#mapping").prop("checked") == true) {
        $("#formula").val("");
        $("#amount").val("");
        $("#formula").prop("disabled", true);
        $("#amount").prop("disabled", true);
    } else if ($("#mapping").prop("checked") == false) {
        $("#formula").val("");
        $("#amount").val("");
        $("#formula").prop("disabled", false);
        $("#amount").prop("disabled", false);
    }
}
