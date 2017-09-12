/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function saveConfiguration() {
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionMasters()">Manage Pension Configuration</a></label> >><label>Pension Type Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="pensionConfigurationMainDiv"/>');
    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#pensionConfigurationMainDiv").text("").append("<div id='pensionConfigurationcolumnDiv' class='page-content'>");
    $("#pensionConfigurationcolumnDiv").append("<div id='pensionConfigurationFirstPanel' class='panel panel-blue' />");
    $("#pensionConfigurationFirstPanel").append("<div id='pensionConfigurationfirstPanelHeading' class='panel-heading' />");
    $("#pensionConfigurationfirstPanelHeading").append("<h4 id='pensionConfigurationtableHeader1' class='panel-title' />");
    $("#pensionConfigurationtableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>Pension Configuration</center>");
    $("#pensionConfigurationFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='pensionConfigurationpanelMainBody' class = 'panel-body' />");
    $("#pensionConfigurationpanelMainBody").append("<div id='pensionConfigurationpanelRow' class='row' />");
    $("#pensionConfigurationpanelRow").append("<div class='col-lg-4'></div><div id='pensionConfigurationMessageDiv' class='col-lg-4'></div><div class='col-lg-4'></div>");
    $("#pensionConfigurationpanelMainBody").append("<div id='pensionConfigurationpanelBodyDiv' class='panel-body '>");
    $("#pensionConfigurationpanelBodyDiv").append("<div id='pensionConfigurationformDiv' class='form-horizontal'>");
    $("#pensionConfigurationformDiv").append("<div id='pensionConfigurationformBodyDiv' class='form-body'>");
    $("#pensionConfigurationpanelBodyDiv").append('<div class="form-group" id="pensionConfigurationGroupDiv"/>');

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationfirstRowDiv">');
    $("#pensionConfigurationfirstRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationFirsetLabelDiv"/>');
    $("#pensionConfigurationFirsetLabelDiv").append(getLabel("Max.Purchased Year", "required"));
    $("#pensionConfigurationfirstRowDiv").append('<div class="col-lg-9" id="pensionConfigurationFirstInputGroupDiv">');
    $("#pensionConfigurationFirstInputGroupDiv").append(getInput("maxPurchasedYear", "Enter Max. Purchased Year", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationFirstInputGroupDiv").append("<span id='maxPurchasedYearErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationSecondRowDiv">');
    $("#pensionConfigurationSecondRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationSecondLabelDiv"/>');
    $("#pensionConfigurationSecondLabelDiv").append(getLabel("Max. Gratuity", "required"));
    $("#pensionConfigurationSecondRowDiv").append('<div class="col-lg-9" id="pensionConfigurationSecondInputGroupDiv">');
    $("#pensionConfigurationSecondInputGroupDiv").append(getInput("maxGratuity", "Enter Max. Gratuity", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationSecondInputGroupDiv").append("<span id='maxGratuityErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationThirdRowDiv">');
    $("#pensionConfigurationThirdRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationThirdLabelDiv"/>');
    $("#pensionConfigurationThirdLabelDiv").append(getLabel("Max. Commutation Amount", "required"));
    $("#pensionConfigurationThirdRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputThirdGroupDiv">');
    $("#pensionConfigurationInputThirdGroupDiv").append(getInput("maxCommutationAmount", "Enter Max. Commutation Amount", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputThirdGroupDiv").append("<span id='maxCommutationAmountErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationFourthRowDiv">');
    $("#pensionConfigurationFourthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationFourthLabelDiv"/>');
    $("#pensionConfigurationFourthLabelDiv").append(getLabel("Duration Of Computation", "required"));
    $("#pensionConfigurationFourthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputFourthGroupDiv">');
    $("#pensionConfigurationInputFourthGroupDiv").append(getInput("durationOfComputation", "Duration Of Computation", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputFourthGroupDiv").append("<span id='durationOfComputationErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationFifthRowDiv">');
    $("#pensionConfigurationFifthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationFifthLabelDiv"/>');
    $("#pensionConfigurationFifthLabelDiv").append(getLabel("Commutation Percentage", "required"));
    $("#pensionConfigurationFifthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputFifthGroupDiv">');
    $("#pensionConfigurationInputFifthGroupDiv").append(getInput("commutationPercentage", "Commutation Percentage", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputFifthGroupDiv").append("<span id='commutationPercentageErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationSixthRowDiv">');
    $("#pensionConfigurationSixthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationSixthLabelDiv"/>');
    $("#pensionConfigurationSixthLabelDiv").append(getLabel("Commutation Factor", "required"));
    $("#pensionConfigurationSixthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputSixthGroupDiv">');
    $("#pensionConfigurationInputSixthGroupDiv").append(getInput("commutationFactor", "Commutation Factor", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputSixthGroupDiv").append("<span id='commutationFactorErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationSeventhRowDiv">');
    $("#pensionConfigurationSeventhRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationSeventhLabelDiv"/>');
    $("#pensionConfigurationSeventhLabelDiv").append(getLabel("Min Pension Amount For UGC", "required"));
    $("#pensionConfigurationSeventhRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputSeventhGroupDiv">');
    $("#pensionConfigurationInputSeventhGroupDiv").append(getInput("minPensionAmountForUGC", "Min Pension Amount For UGC", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputSeventhGroupDiv").append("<span id='minPensionAmountForUGCErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationEightthRowDiv">');
    $("#pensionConfigurationEightthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationEighthLabelDiv"/>');
    $("#pensionConfigurationEighthLabelDiv").append(getLabel("Min Pension Amount For Non UGC", "required"));
    $("#pensionConfigurationEightthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputEighthGroupDiv">');
    $("#pensionConfigurationInputEighthGroupDiv").append(getInput("minPensionAmountForNonUGC", "Min Pension Amount For Non UGC", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputEighthGroupDiv").append("<span id='minPensionAmountForNonUGCErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationNinthRowDiv">');
    $("#pensionConfigurationNinthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationNinthLabelDiv"/>');
    $("#pensionConfigurationNinthLabelDiv").append(getLabel("Retirement Gratuity Divided By", "required"));
    $("#pensionConfigurationNinthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputNinthGroupDiv">');
    $("#pensionConfigurationInputNinthGroupDiv").append(getInput("retGraDivBy", "Retirement Gratuity Divided By", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputNinthGroupDiv").append("<span id='retGraDivByErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationtenthRowDiv">');
    $("#pensionConfigurationtenthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationTenthLabelDiv"/>');
    $("#pensionConfigurationTenthLabelDiv").append(getLabel("Death Gratuity Divided By", "required"));
    $("#pensionConfigurationtenthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputTenthGroupDiv">');
    $("#pensionConfigurationInputTenthGroupDiv").append(getInput("deathGraDivBy", "Retirement Gratuity Divided By", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputTenthGroupDiv").append("<span id='deathGraDivByErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationeleventhRowDiv">');
    $("#pensionConfigurationeleventhRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationeleventhLabelDiv"/>');
    $("#pensionConfigurationeleventhLabelDiv").append(getLabel("Family Pension Upto(Years)Death after Job", "required"));
    $("#pensionConfigurationeleventhRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputeleventhGroupDiv">');
    $("#pensionConfigurationInputeleventhGroupDiv").append(getInput("famPenUptoDeathafterJob", "Family Pension Upto Death after job", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputeleventhGroupDiv").append("<span id='famPenUptoDeathafterJob'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationtwelthRowDiv">');
    $("#pensionConfigurationtwelthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationtwelthLabelDiv"/>');
    $("#pensionConfigurationtwelthLabelDiv").append(getLabel("Family Pension Upto(Years)Death in Job", "required"));
    $("#pensionConfigurationtwelthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputtwelththGroupDiv">');
    $("#pensionConfigurationInputtwelththGroupDiv").append(getInput("famPenUptoDeathInJob", "Family Pension Upto Death In job", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputtwelththGroupDiv").append("<span id='famPenUptoDeathafterJob'></span>");


    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationthirteenRowDiv">');
    $("#pensionConfigurationthirteenRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationthirteenLabelDiv"/>');
    $("#pensionConfigurationthirteenLabelDiv").append(getLabel("Family Pension Upto", "required"));
    $("#pensionConfigurationthirteenRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputthirteenthGroupDiv">');
    $("#pensionConfigurationInputthirteenthGroupDiv").append(getInput("famPenUpto", "Family Pension Upto ", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputthirteenthGroupDiv").append("<span id='famPenUpto'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationfourteenRowDiv">');
    $("#pensionConfigurationfourteenRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationfourteenLabelDiv"/>');
    $("#pensionConfigurationfourteenLabelDiv").append(getLabel("Family Pension After", "required"));
    $("#pensionConfigurationfourteenRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputfourteenthGroupDiv">');
    $("#pensionConfigurationInputfourteenthGroupDiv").append(getInput("famPenAfter", "Family Pension After", "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputfourteenthGroupDiv").append("<span id='famPenAfterErr'></span>");


    $("#pensionConfigurationformBodyDiv").append("<div id='pensionConfigurationButtonRowDiv' class='row' />");
 //   $("#pensionConfigurationButtonRowDiv").append("<div  class='col-xs-12' id='pensionConfigurationButtonRow'/><center><button type='button'  id='pfSave' value='save' class='btn btn-success bn'  onclick='pensionConfiguration()'>Save</button></center></div>");
 $("#pensionConfigurationButtonRowDiv").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success bn'  onclick='pensionConfigrationSave()'>Save</button></center></div>");
    viewpensionConfigurationList('pensionConfigurationLeftstatuslistpanelRow');


}
function displayPensionConfiguration() {
    viewConfiguration();


}

function pensionConfigrationSave(){
 
    var maxPurYear = $("#maxPurchasedYear").val();
    var maxGratuity = $("#maxGratuity").val();
    var maxComAmt = $("#maxCommutationAmount").val();
    var durOfCompYear = $("#durationOfComputation").val();
    var CompPer = $("#commutationPercentage").val();
    var CompFac = $("#commutationFactor").val();
    var detGraDiv = $("#deathGraDivBy").val();
    var minPensionAmountForUgc = $("#minPensionAmountForUGC").val();
    var minPensionAmountForNonUgc = $("#minPensionAmountForNonUgc").val();
    var pensionInJob = $("#famPenUptoDeathInJob").val();
    var pensionAfterJob = $("#famPenUptoDeathafterJob").val();
    var pensionUptoPer = $("#famPenUpto").val();
    var pensionAfterPer = $("#famPenAfter").val();
    var retGraDiv = $("#retGraDivBy").val();
    var asasd = {
        maxPurYear: maxPurYear,
        maxGratuity: maxGratuity,
        maxComAmt: maxComAmt,
        durOfCompYear: durOfCompYear,
        CompPer: CompPer,
        CompFac: CompFac,
        detGraDiv: detGraDiv,
        minPensionAmountForUgc: minPensionAmountForUgc,
        minPensionAmountForNonUgc: minPensionAmountForNonUgc,
        pensionInJob: pensionInJob,
        pensionAfterPer: pensionAfterPer,
        pensionUptoPer: pensionUptoPer,
        pensionAfterJob: pensionAfterJob,
        retGraDiv: retGraDiv

    }
     $.post(server_base_url + "/pension/master/Configuartion/Save", {
        assJson: JSON.stringify(asasd),
          userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("pensionConfigurationUpdateMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pensionConfigurationUpdateMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pensionConfigurationUpdateMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {

         $("#maxPurchasedYear").prop("readonly", false);
            $("#maxGratuity").prop("readonly", false);
            $("#maxCommutationAmount").prop("readonly", false);
            $("#durationOfComputation").prop("readonly", false);
            $("#commutationPercentage").prop("readonly", false);
            $("#commutationFactor").prop("readonly", false);
            $("#deathGraDivBy").prop("readonly", false);
            $("#minPensionAmountForUGC").prop("readonly", false);
            $("#minPensionAmountForNonUgc").prop("readonly", false);
            $("#famPenUptoDeathInJob").prop("readonly", false);
            $("#famPenUptoDeathafterJob").prop("readonly", false);
            $("#famPenUpto").prop("readonly", false);
            $("#famPenUptoDeathafterJob").prop("readonly", false);
            $("#retGraDivBy").prop("readonly", false);
            
             $("#pfSave").attr('disabled', true);
            displaySuccessMessages("pensionConfigurationUpdateMessageDiv", successMessage, "");
            setTimeout(function () {
                displayPensionConfiguration();
            }, 1000);
        }
    });

}

function viewConfiguration() {
    // $("#" + divId).text("").append("<div id='associationSubDiv1' class = 'panel panel-primary-head'></div>");
    $.get(server_base_url + "/pension/master/Configuartion/ViewList", {
    }).done(function (data) {

        if (data == 501) {
            saveConfiguration();
        } else if (data == unauthorized) {
            displayLargeErrorMessages("pensionConfigurationMessageDiv", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pensionConfigurationMessageDiv", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages("pensionConfigurationMessageDiv", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pensionConfigurationMessageDiv", "" + statusExceptionMessage + "<br /><br />");
        } else {
            if (data != null) {

                if (data.length > 0) {

                    for (var i = 0; i < data.length; i++) {

                        displayUpdateConfig(data[i], data[i]._id.$oid);


                    }

                }
            }
        }
    });
}


function displayUpdateConfig(obj, id) {

    $("#dashboardBodyMainDiv").text("").append('<div id="pensionConfigurationMainDiv"/>');
    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#pensionConfigurationMainDiv").text("").append("<div id='pensionConfigurationcolumnDiv' class='page-content'>");
    $("#pensionConfigurationcolumnDiv").append("<div id='pensionConfigurationFirstPanel' class='panel panel-blue' />");
    $("#pensionConfigurationFirstPanel").append("<div id='pensionConfigurationfirstPanelHeading' class='panel-heading' />");
    $("#pensionConfigurationfirstPanelHeading").append("<h4 id='pensionConfigurationtableHeader1' class='panel-title' />");
    $("#pensionConfigurationtableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>Pension Configuration</center>");
    $("#pensionConfigurationFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='pensionConfigurationpanelMainBody' class = 'panel-body' />");
    $("#pensionConfigurationpanelMainBody").append("<div id='pensionConfigurationpanelRow' class='row' />");
    $("#pensionConfigurationpanelRow").append("<div class='col-lg-4'></div><div id='pensionConfigurationUpdateMessageDiv' class='col-lg-4'></div><div class='col-lg-4'></div>");
    $("#pensionConfigurationpanelMainBody").append("<div id='pensionConfigurationpanelBodyDiv' class='panel-body '>");
    $("#pensionConfigurationpanelBodyDiv").append("<div id='pensionConfigurationformDiv' class='form-horizontal'>");
    $("#pensionConfigurationformDiv").append("<div id='pensionConfigurationformBodyDiv' class='form-body'>");
    $("#pensionConfigurationpanelBodyDiv").append('<div class="form-group" id="pensionConfigurationGroupDiv"/>');

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationfirstRowDiv">');
    $("#pensionConfigurationfirstRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationFirsetLabelDiv"/>');
    $("#pensionConfigurationFirsetLabelDiv").append(getLabel("Max.Purchased Year", "required"));
    $("#pensionConfigurationfirstRowDiv").append('<div class="col-lg-9" id="pensionConfigurationFirstInputGroupDiv">');
    $("#pensionConfigurationFirstInputGroupDiv").append(getInput("maxPurchasedYear", "Enter Max. Purchased Year", "" + obj.maxPurYear + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationFirstInputGroupDiv").append("<span id='maxPurchasedYearErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationSecondRowDiv">');
    $("#pensionConfigurationSecondRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationSecondLabelDiv"/>'); 
    $("#pensionConfigurationSecondLabelDiv").append(getLabel("Max. Gratuity", "required"));
    $("#pensionConfigurationSecondRowDiv").append('<div class="col-lg-9" id="pensionConfigurationSecondInputGroupDiv">');
    $("#pensionConfigurationSecondInputGroupDiv").append(getInput("maxGratuity", "Enter Max. Gratuity", "" + obj.maxGratuity + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationSecondInputGroupDiv").append("<span id='maxGratuityErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationThirdRowDiv">');
    $("#pensionConfigurationThirdRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationThirdLabelDiv"/>');
    $("#pensionConfigurationThirdLabelDiv").append(getLabel("Max. Commutation Amount", "required"));
    $("#pensionConfigurationThirdRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputThirdGroupDiv">');
    $("#pensionConfigurationInputThirdGroupDiv").append(getInput("maxCommutationAmount", "Enter Max. Commutation Amount", "" + obj.maxComAmt + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputThirdGroupDiv").append("<span id='maxCommutationAmountErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationFourthRowDiv">');
    $("#pensionConfigurationFourthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationFourthLabelDiv"/>');
    $("#pensionConfigurationFourthLabelDiv").append(getLabel("Duration Of Computation", "required"));
    $("#pensionConfigurationFourthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputFourthGroupDiv">');
    $("#pensionConfigurationInputFourthGroupDiv").append(getInput("durationOfComputation", "Duration Of Computation", "" + obj.durOfCompYear + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputFourthGroupDiv").append("<span id='durationOfComputationErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationFifthRowDiv">');
    $("#pensionConfigurationFifthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationFifthLabelDiv"/>');
    $("#pensionConfigurationFifthLabelDiv").append(getLabel("Commutation Percentage", "required"));
    $("#pensionConfigurationFifthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputFifthGroupDiv">');
    $("#pensionConfigurationInputFifthGroupDiv").append(getInput("commutationPercentage", "Commutation Percentage", "" + obj.CompPer + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputFifthGroupDiv").append("<span id='commutationPercentageErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationSixthRowDiv">');
    $("#pensionConfigurationSixthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationSixthLabelDiv"/>');
    $("#pensionConfigurationSixthLabelDiv").append(getLabel("Commutation Factor", "required"));
    $("#pensionConfigurationSixthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputSixthGroupDiv">');
    $("#pensionConfigurationInputSixthGroupDiv").append(getInput("commutationFactor", "Commutation Factor", "" + obj.CompFac + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputSixthGroupDiv").append("<span id='commutationFactorErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationSeventhRowDiv">');
    $("#pensionConfigurationSeventhRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationSeventhLabelDiv"/>');
    $("#pensionConfigurationSeventhLabelDiv").append(getLabel("Min Pension Amount For UGC", "required"));
    $("#pensionConfigurationSeventhRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputSeventhGroupDiv">');
    $("#pensionConfigurationInputSeventhGroupDiv").append(getInput("minPensionAmountForUGC", "Min Pension Amount For UGC", "" + obj.minPensionAmountForUgc + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputSeventhGroupDiv").append("<span id='minPensionAmountForUGCErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationEightthRowDiv">');
    $("#pensionConfigurationEightthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationEighthLabelDiv"/>');
    $("#pensionConfigurationEighthLabelDiv").append(getLabel("Min Pension Amount For Non UGC", "required"));
    $("#pensionConfigurationEightthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputEighthGroupDiv">');
    $("#pensionConfigurationInputEighthGroupDiv").append(getInput("minPensionAmountForNonUGC", "Min Pension Amount For Non UGC", "" + obj.minPensionAmountForUgc + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputEighthGroupDiv").append("<span id='minPensionAmountForNonUGCErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationNinthRowDiv">');
    $("#pensionConfigurationNinthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationNinthLabelDiv"/>');
    $("#pensionConfigurationNinthLabelDiv").append(getLabel("Retirement Gratuity Divided By", "required"));
    $("#pensionConfigurationNinthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputNinthGroupDiv">');
    $("#pensionConfigurationInputNinthGroupDiv").append(getInput("retGraDivBy", "Retirement Gratuity Divided By", "" + obj.retGraDiv + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputNinthGroupDiv").append("<span id='retGraDivByErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationtenthRowDiv">');
    $("#pensionConfigurationtenthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationTenthLabelDiv"/>');
    $("#pensionConfigurationTenthLabelDiv").append(getLabel("Death Gratuity Divided By", "required"));
    $("#pensionConfigurationtenthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputTenthGroupDiv">');
    $("#pensionConfigurationInputTenthGroupDiv").append(getInput("deathGraDivBy", "Retirement Gratuity Divided By", "" + obj.detGraDiv + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputTenthGroupDiv").append("<span id='deathGraDivByErr'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationeleventhRowDiv">');
    $("#pensionConfigurationeleventhRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationeleventhLabelDiv"/>');
    $("#pensionConfigurationeleventhLabelDiv").append(getLabel("Family Pension Upto(Years)Death after Job", "required"));
    $("#pensionConfigurationeleventhRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputeleventhGroupDiv">');
    $("#pensionConfigurationInputeleventhGroupDiv").append(getInput("famPenUptoDeathafterJob", "Family Pension Upto Death after job", "" + obj.pensionAfterJob + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputeleventhGroupDiv").append("<span id='famPenUptoDeathafterJob'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationtwelthRowDiv">');
    $("#pensionConfigurationtwelthRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationtwelthLabelDiv"/>');
    $("#pensionConfigurationtwelthLabelDiv").append(getLabel("Family Pension Upto(Years)Death in Job", "required"));
    $("#pensionConfigurationtwelthRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputtwelththGroupDiv">');
    $("#pensionConfigurationInputtwelththGroupDiv").append(getInput("famPenUptoDeathInJob", "Family Pension Upto Death In job", "" + obj.pensionInJob + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputtwelththGroupDiv").append("<span id='famPenUptoDeathafterJob'></span>");


    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationthirteenRowDiv">');
    $("#pensionConfigurationthirteenRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationthirteenLabelDiv"/>');
    $("#pensionConfigurationthirteenLabelDiv").append(getLabel("Family Pension Upto", "required"));
    $("#pensionConfigurationthirteenRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputthirteenthGroupDiv">');
    $("#pensionConfigurationInputthirteenthGroupDiv").append(getInput("famPenUpto", "Family Pension Upto ", "" + obj.pensionUptoPer + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputthirteenthGroupDiv").append("<span id='famPenUpto'></span>");

    $("#pensionConfigurationformBodyDiv").append('<div class="row" id="pensionConfigurationfourteenRowDiv">');
    $("#pensionConfigurationfourteenRowDiv").append('<div class="col-lg-3 control-label" id="pensionConfigurationfourteenLabelDiv"/>');
    $("#pensionConfigurationfourteenLabelDiv").append(getLabel("Family Pension After", "required"));
    $("#pensionConfigurationfourteenRowDiv").append('<div class="col-lg-9" id="pensionConfigurationInputfourteenthGroupDiv">');
    $("#pensionConfigurationInputfourteenthGroupDiv").append(getInput("famPenAfter", "Family Pension After", "" + obj.pensionAfterPer + "", "onkeyup='return numericVal(event)'"));
    $("#pensionConfigurationInputfourteenthGroupDiv").append("<span id='famPenAfterErr'></span>");
    $("#pensionConfigurationformBodyDiv").append("<div id='pensionConfigurationButtonRowDiv' class='row' />");
    $("#pensionConfigurationButtonRowDiv").append("<div  class='col-xs-12' id='pensionConfigurationButtonRow'/><center><button type='button'  id='updateConfig'  class='btn btn-success bn'  onclick=dothis('" + id + "')>Update</button>");


}

function dothis(id) {

    var maxPurYear = $("#maxPurchasedYear").val();
    var maxGratuity = $("#maxGratuity").val();
    var maxComAmt = $("#maxCommutationAmount").val();
    var durOfCompYear = $("#durationOfComputation").val();
    var CompPer = $("#commutationPercentage").val();
    var CompFac = $("#commutationFactor").val();
    var detGraDiv = $("#deathGraDivBy").val();
    var minPensionAmountForUgc = $("#minPensionAmountForUGC").val();
    var minPensionAmountForNonUgc = $("#minPensionAmountForNonUgc").val();
    var pensionInJob = $("#famPenUptoDeathInJob").val();
    var pensionAfterPer = $("#famPenUptoDeathafterJob").val();
    var pensionUptoPer = $("#famPenUpto").val();
    var pensionAfterJob = $("#famPenUptoDeathafterJob").val();
    var retGraDiv = $("#retGraDivBy").val();

    var asasd = {
        maxPurYear: maxPurYear,
        maxGratuity: maxGratuity,
        maxComAmt: maxComAmt,
        durOfCompYear: durOfCompYear,
        CompPer: CompPer,
        CompFac: CompFac,
        detGraDiv: detGraDiv,
        minPensionAmountForUgc: minPensionAmountForUgc,
        minPensionAmountForNonUgc: minPensionAmountForNonUgc,
        pensionInJob: pensionInJob,
        pensionAfterPer: pensionAfterPer,
        pensionUptoPer: pensionUptoPer,
        pensionAfterJob: pensionAfterJob,
        retGraDiv: retGraDiv
    }

    $.post(server_base_url + "/pension/master/Configuration/Update", {
        assJson: JSON.stringify(asasd),
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionConfigurationUpdateMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionConfigurationUpdateMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionConfigurationUpdateMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {

        } else {
            $("#maxPurchasedYear").prop("readonly", false);
            $("#maxGratuity").prop("readonly", false);
            $("#maxCommutationAmount").prop("readonly", false);
            $("#durationOfComputation").prop("readonly", false);
            $("#commutationPercentage").prop("readonly", false);
            $("#commutationFactor").prop("readonly", false);
            $("#deathGraDivBy").prop("readonly", false);
            $("#minPensionAmountForUGC").prop("readonly", false);
            $("#minPensionAmountForNonUgc").prop("readonly", false);
            $("#famPenUptoDeathInJob").prop("readonly", false);
            $("#famPenUptoDeathafterJob").prop("readonly", false);
            $("#famPenUpto").prop("readonly", false);
            $("#famPenUptoDeathafterJob").prop("readonly", false);
            $("#retGraDivBy").prop("readonly", false);
            
             $("#updateConfig").attr('disabled', true);
            
            displaySuccessMessages("pensionConfigurationUpdateMessageDiv", updateSuccessMessage, "");
            setTimeout(function () {
               
                displayPensionConfiguration();
            }, 1000);

        }
    });



}