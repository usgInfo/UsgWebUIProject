/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function saveRevision() {

    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionMasters()">Pension Transaction</a></label> >><label>Pension Revision</label>');
    var employeeCode = $("#employeeCode").val();
    var status = $("#status").val();
    var employeeName = $("#employeeName").val();
    var revisionCode = $("#revisionCode").val();
    var retirementDate = $("#retirementDate").val();
    var deathDate = $("#deathDate").val();
    var lastDrawnPayWithOutDA = $("#lastDrawnPayWithOutDA").val();
    var lastDrawnPayWithDA = $("#lastDrawnPayWithDA").val();
    var newLastDrawnPayWithoutDA = $("#newLastDrawnPayWithoutDA").val();
    var newLastDrawnPayWithDA = $("#newLastDrawnPayWithDA").val();
    var dueMonth = $("#dueMonth").val();
    var dated = $("#dated").val();
    var dueYear = $("#dueYear").val();
    var remarks = $("#remarks").val();

    var qualifyingService = $("#qualifyingService").val();
    var newPaylastDrawnWithDA = $("#newPaylastDrawnWithda").val();
    var qualifyingServiceR = $("#qualifyingServiceR").val();
    var nonqualifyingServiceR = $("#nonqualifyingServiceR").val();
    var commutedPercentage = $("#commutedPercentage").val();
    var commutedAmount = $("#commutedAmount").val();
    var commFactor = $("#commFactor").val();
    var residualPension = $("#residualPension").val();
    var newPaylastDrawnWithoutdA = $("#newlastDrawnPayWithoutDA").val();
    var monthlyCommutedAmount = $("#monthlyCommutedAmount").val();
    var averageEmoluments = $("#averageEmoluments").val();
    var gratuity = $("#gratuity").val();
    var deathGratuity = $("#deathGratuity").val();
    var LessAmountFromGratuity = $("#lessAmountFromGratuity").val();
    var familyPension = $("#familyPension").val();
    var familyPensionYear = $("#familyPensionYear").val();
    var familyPensionAfterYear = $("#familyPensionAfterYear").val();
    var pension = $("#pension").val();
    var it = $("#it").val();
    var others = $("#others").val();

    var assjson = {
        employeeCode: employeeCode,
        revisionstatus: status,
        employeeName: employeeName,
        revisionCode: revisionCode,
        retirementDate: retirementDate,
        deathdate: deathDate,
        lastPayDrawWithoutDA: lastDrawnPayWithOutDA,
        newlastPayDrawWithoutDA: lastDrawnPayWithDA,
        lastPayDrawWithDA: newLastDrawnPayWithoutDA,
        newLastPayDrawWithDA: newLastDrawnPayWithDA,
        dueMonth: dueMonth,
        dated: dated,
        dueYear: dueYear,
        remarks: remarks,
        qualifyingService: qualifyingService,
        newPaylastDrawnWithDA: newPaylastDrawnWithDA,
        qualifyingServiceR: qualifyingServiceR,
        nonqualifyingServiceR: nonqualifyingServiceR,
        commutedPercentage: commutedPercentage,
        commutedAmount: commutedAmount,
        commFactor: commFactor,
        residualPension: residualPension,
        newPaylastDrawnWithoutDA: newPaylastDrawnWithoutdA,
        monthlyCommutedAmount: monthlyCommutedAmount,
        averageEmoluments: averageEmoluments,
        gratuity: gratuity,
        deathGratuity: deathGratuity,
        LessAmountFromGratuity: LessAmountFromGratuity,
        familyPension: familyPension,
        familyPensionYear: familyPensionYear,
        familyPensionAfterYear: familyPensionAfterYear,
        pension: pension,
        it: it,
        otherDeduction: others


    };

    var Assjson = JSON.stringify(assjson);

    $.post(server_base_url + "/pension/transaction/PensionRevision/Save", {
        pensionRevision: Assjson,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("pensionRevisionpregsuccessBefore", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pensionRevisionpregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pensionRevisionpregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {

            $("#employeeName").prop("disabled", true);
            $("#revisionCode").prop("disabled", true);
            $("#retirementDate").prop("disabled", true);
            $("#deathDate").prop("disabled", true);
            $("#employeeCode").prop("disabled", true);
            $("#status").prop("disabled", true);
            $("#lastDrawnPayWithOutDA").prop("disabled", true);
            $("#newLastDrawnPayWithoutDA").prop("disabled", true);
            $("#lastDrawnPayWithDA").prop("disabled", true);
            $("#newLastDrawnPayWithDA").prop("disabled", true);
            $("#dueMonth").prop("disabled", true);
            $("#dated").prop("disabled", true);
            $("#dueYear").prop("disabled", true);
            $("#remarks").prop("disabled", true);
            $("#qualifyingServiceR").prop("disabled", true);
            $("#qualifyingService").prop("disabled", true);
            $("#newPaylastDrawnWithda").prop("disabled", true);
            $("#commutedPercentage").prop("disabled", true);
            $("#nonqualifyingServiceR").prop("disabled", true);
            $("#commutedAmount").prop("disabled", true);
            $("#lastDrawnPayWithoutDA").prop("disabled", true);
            $("#monthlyCommutedAmount").prop("disabled", true);
            $("#commFactor").prop("disabled", true);
            $("#residualPension").prop("disabled", true);
            $("#averageEmoluments").prop("disabled", true);
            $("#gratuity").prop("disabled", true);
            $("#pension").prop("disabled", true);
            $("#deathGratuity").prop("disabled", true);
            $("#familyPension").prop("disabled", true);
            $("#familyPensionAfterYear").prop("disabled", true);
            $("#familyPensionYear").prop("disabled", true);
            $("#others").prop("disabled", true);
            $("#it").prop("disabled", true);
            $("#lessAmountFromGratuity").prop("disabled", true);


            $("#penCla").attr('disabled', true);
            $("#pensionRevFirReset").attr('disabled', true);
            $("#pensionREVReset").attr('disabled', true);
            $("#pensionREVSave").attr('disabled', true);
            displaySuccessMessages("pensionRevisionpregsuccessBefore", successMessage, "");
            setTimeout(function () {
                displayPensionRevision();
            }, 3000);
        }
    });

}


function updatePensionRevisionData(id) {

    var employeeCode = $("#employeeCode").val();
    var status = $("#status").val();
    var employeeName = $("#employeeName").val();
    var revisionCode = $("#revisionCode").val();
    var retirementDate = $("#retirementDate").val();
    var deathDate = $("#deathDate").val();
    var lastDrawnPayWithOutDA = $("#lastDrawnPayWithOutDA").val();
    var lastDrawnPayWithDA = $("#lastDrawnPayWithDA").val();
    var newLastDrawnPayWithoutDA = $("#newLastDrawnPayWithoutDA").val();
    var newLastDrawnPayWithDA = $("#newLastDrawnPayWithDA").val();
    var dueMonth = $("#dueMonth").val();
    var dated = $("#dated").val();
    var dueYear = $("#dueYear").val();
    var remarks = $("#remarks").val();
    var qualifyingService = $("#qualifyingService").val();
    var newPaylastDrawnWithda = $("#newPaylastDrawnWithda").val();
    var qualifyingServiceR = $("#qualifyingServiceR").val();
    var nonqualifyingServiceR = $("#nonqualifyingServiceR").val();
    var commutedPercentage = $("#commutedPercentage").val();
    var commutedAmount = $("#commutedAmount").val();
    var commFactor = $("#commFactor").val();
    var residualPension = $("#residualPension").val();
    var newPaylastDrawnWithDA = $("#newPaylastDrawnWithDA").val();
    var monthlyCommutedAmount = $("#monthlyCommutedAmount").val();
    var averageEmoluments = $("#averageEmoluments").val();
    var gratuity = $("#gratuity").val();
    var deathGratuity = $("#deathnewLastDrawnPayWithDAGratuity").val();
    var LessAmountFromGratuity = $("#lessAmountFromGratuity").val();
    var familyPension = $("#familyPension").val();
    var familyPensionYear = $("#familyPensionYear").val();
    var familyPensionAfterYear = $("#familyPensionAfterYear").val();
    var pension = $("#pension").val();
    var it = $("#it").val();
    var others = $("#others").val();

    var assjson = {
        employeeCode: employeeCode,
        revisionstatus: status,
        employeeName: employeeName,
        revisionCode: revisionCode,
        retirementDate: retirementDate,
        deathdate: deathDate,
        lastPayDrawWithoutDA: lastDrawnPayWithOutDA,
        newlastPayDrawWithoutDA: lastDrawnPayWithDA,
        lastPayDrawWithDA: newLastDrawnPayWithoutDA,
        newLastPayDrawWithDA: newLastDrawnPayWithDA,
        dueMonth: dueMonth,
        dated: dated,
        dueYear: dueYear,
        remarks: remarks,
        qualifyingService: qualifyingService,
        newPaylastDrawnWithda: newPaylastDrawnWithda,
        qualifyingServiceR: qualifyingServiceR,
        nonqualifyingServiceR: nonqualifyingServiceR,
        commutedPercentage: commutedPercentage,
        commutedAmount: commutedAmount,
        commFactor: commFactor,
        residualPension: residualPension,
        newPaylastDrawnWithDA: newPaylastDrawnWithDA,
        monthlyCommutedAmount: monthlyCommutedAmount,
        averageEmoluments: averageEmoluments,
        gratuity: gratuity,
        deathGratuity: deathGratuity,
        LessAmountFromGratuity: LessAmountFromGratuity,
        familyPension: familyPension,
        familyPensionYear: familyPensionYear,
        familyPensionAfterYear: familyPensionAfterYear,
        pension: pension,
        it: it,
        otherDeduction: others
    };

    var Assjson = JSON.stringify(assjson);

    $.post(server_base_url + "/pension/transcation/PensionRevision/Update", {
        pensionRevision: Assjson,
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {
        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionRevisionpregsuccessBefore", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionRevisionpregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionRevisionpregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {

        } else {
            $("#employeeName").prop("disabled", true);
            $("#revisionCode").prop("disabled", true);
            $("#retirementDate").prop("disabled", true);
            $("#deathDate").prop("disabled", true);
            $("#employeeCode").prop("disabled", true);
            $("#status").prop("disabled", true);
            $("#lastDrawnPayWithOutDA").prop("disabled", true);
            $("#newLastDrawnPayWithoutDA").prop("disabled", true);
            $("#lastDrawnPayWithDA").prop("disabled", true);
            $("#newLastDrawnPayWithDA").prop("disabled", true);
            $("#dueMonth").prop("disabled", true);
            $("#dated").prop("disabled", true);
            $("#dueYear").prop("disabled", true);
            $("#remarks").prop("disabled", true);
            $("#qualifyingServiceR").prop("disabled", true);
            $("#qualifyingService").prop("disabled", true);
            $("#newPaylastDrawnWithda").prop("disabled", true);
            $("#commutedPercentage").prop("disabled", true);
            $("#nonqualifyingServiceR").prop("disabled", true);
            $("#commutedAmount").prop("disabled", true);
            $("#lastDrawnPayWithoutDA").prop("disabled", true);
            $("#monthlyCommutedAmount").prop("disabled", true);
            $("#commFactor").prop("disabled", true);
            $("#residualPension").prop("disabled", true);
            $("#averageEmoluments").prop("disabled", true);
            $("#gratuity").prop("disabled", true);
            $("#pension").prop("disabled", true);
            $("#deathGratuity").prop("disabled", true);
            $("#familyPension").prop("disabled", true);
            $("#familyPensionAfterYear").prop("disabled", true);
            $("#familyPensionYear").prop("disabled", true);
            $("#others").prop("disabled", true);
            $("#it").prop("disabled", true);
            $("#lessAmountFromGratuity").prop("disabled", true);
            $("#penCla").attr('disabled', true);
            $("#pensionRevFirReset").attr('disabled', true);
            $("#pensionREVReset").attr('disabled', true);
            $("#pensionREVSave").attr('disabled', true);
            displaySuccessMessages("pensionRevisionpregsuccessBefore", updateSuccessMessage, "");
            setTimeout(function () {
                displayPensionRevision();
            }, 1000);

        }
    });
}