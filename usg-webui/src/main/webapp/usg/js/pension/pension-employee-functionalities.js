/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//function checkdataisThereOrnotInThePensionEmployeeList(employeeCode) {
//    
//  
//
//    var TableRows = $("#pensionEmployeeListTable").find('tbody').find('tr');
//    for (var i = 0; i < TableRows.length; i++) {
//        var empCode = $(TableRows[i]).find('td:eq(1)').text();
//        //var yearLoc = $(TableRows[i]).find('td:eq(2)').text();
//        var anchortagId = $(TableRows[i]).find('td:eq(0) input').val();
//        if (employeeCode == empCode) {
//            //if (holiYear = yearLoc) {
//                $("#" + anchortagId).click();
//                return false;
//           // }
//        }
//    }
//    return true;
//    
//    
//    
//    
//}

function validatePensionFormula() {
    $("#formulaErr").text("");
    var formula = $("#formula").val();
    var pensionType = $("#pensionType").val();

    if ((pensionType === "Family Pension") && (formula !== "Family Pension")) {
        displaySmallErrorMessages("formulaErr", "Please select valid formula");

    }


}

function resetPensionNominee() {
    $("#memberName").val("");
    $("#nomineedateOfBirth").val("");
    $("#remarks").val("");
    $("#relation").val("");
    $("#ifNoNominee").prop("checked", false);
    $("#pensionNominee1listMessageDiv").text("");

}



function disabledMandatoryField() {
    if ($('#ifNoNominee').prop('checked')) {
        $("#memberName").prop("disabled", true);
        $("#nomineedateOfBirth").prop("disabled", true);
        $("#remarks").prop("disabled", true);
        $("#relation").prop("disabled", true);

    } else
    {
        $("#memberName").prop("disabled", false);
        $("#nomineedateOfBirth").prop("disabled", false);
        $("#remarks").prop("disabled", false);
        $("#relation").prop("disabled", false);

    }

}


function validateEmployeeStatus() {

    var employeeStatus = $("#employeeStatus").val().trim();

    if (employeeStatus === "Alive") {

        $("#deathDate").attr("disabled", true);

        $("#ageOnNextBirtthday").attr("disabled", false);

    } else if (employeeStatus == "Dead") {
        $("#ageOnNextBirtthday").attr("disabled", true);
        $("#deathDate").attr("disabled", false);
    }
    //  validateDates()
}




function validatePensionEmployee() {
    var result = 1;

    var employeeCode = $("#employeeCode").val();
    var manualCode = $("#manualCode").val();
    var pensionType = $("#pensionType").val();
    var pensionClassification = $("#pensionClassification").val();
    var pension = $("#pension").val();
    var AccountNumber = $("#accNum").val();
    var payMode;
    var ddo = $("#ddo").val();
    var employeeName = $("#employeeName").val();
    var bankName = $("#bankName").val();
    var fatherName = $("#fatherName").val();
    var accNumber = $("#accNumber").val();
    var motherName = $("#motherName").val();
    var dob = $("#dob").val();
    var appointmentDate = $("#appointmentDate").val();
    var location = $("#location").val();
    var retirementDate = $("#retirementDate").val();
    var department = $("#department").val();
    var pensionStartDate = $("#pensionStartDate").val();
    var designation = $("#designation").val();
    var commutedMaturedDate = $("#commutedMaturedDate").val();
    var grade = $("#grade").val();
    var incrementDate = $("#incrementDate").val();
    var height = $("#height").val();
    var employeeStatus = $("#employeeStatus").val();
    var Gender;
    var deathDate = $("#deathDate").val();
    var religion = $("#religion").val();
    var ageOnNextBirthday = $("#ageOnNextBirthday").val();
    var category = $("#category").val();
    var corrsAddress = $("#corrsAddress").val();
    var association = $("#association").val();
    var permanentAddress = $("#permanentAddress").val();
    var contactNumberC = $("#contactNumberC").val();
    var contactNumberP = $("#contactNumberP").val();
    var date = $("#date").val();
    var pensionOrderNumber = $("#pensionOrderNumber").val();
    var pensionLeftStatus = $("#pensionLeftStatus").val();
    var indentationMark = $("#indentationMark").val();
    var leftDate = $("#leftDate").val();

    var qualifyingService = $("#qualifyingService").val();
    var lastDrawnPayWithDA = $("#lastDrawnPayWithDA").val();
    var qualifyingServiceR = $("#qualifyingServiceR").val();
    var nonqualifyingServiceR = $("#nonqualifyingServiceR").val();
    var commFactor = $("#commFactor").val();
    var residualPension = $("#residualPension").val();
    var lastDrawnPayWithoutDA = $("#lastDrawnPayWithoutDA").val();
    var monthlyCommutedAmount = $("#monthlyCommutedAmount").val();
    var averageEmoluments = $("#averageEmoluments").val();
    var gratuity = $("#gratuity").val();
    var deathGratuity = $("#deathGratuity").val();
    var LessAmountFromGratuity = $("#lessAmountFromGratuity").val();
    var familyPension = $("#familyPension").val();
    var familyPensionYear = $("#familyPensionYear").val();
    var familyPensionAfterYear = $("#familyPensionAfterYear").val();
    var commutedPercentage = $("#commutedPercentage").val();
    var commutedAmount = $("#commutedAmount").val();
    var pensionRemarks = $("#pensionRemarks").val();
    var pensionType = $("#pensionType").val();
    var it = $("#it").val();
    var others = $("#others").val();
    var payBand = $("#payBand").val();
    var formula = $("#formula").val();
    var ageOnNextBirtthday = $("#ageOnNextBirtthday").val();

    var stopPension;

    if ($('#stopPension').prop('checked')) {
        stopPension = "YES"
    } else
    {
        stopPension = "NO";
    }

    var gradePay = $("#gradePay").val();
    if ($('#male').is(':checked')) {
        Gender = "male";

    } else if ($('#female').is(':checked')) {
        Gender = "female";

    }
    if ($('#bank').is(':checked')) {
        payMode = "bank";

    } else if ($('#cheque').is(':checked')) {
        payMode = "cheque";

    } else if ($('#draft').is(':checked')) {
        payMode = "draft";

    }



    if (preValidation(employeeCode) || preValidation(pensionType) || preValidation(employeeName) || preValidation(AccountNumber) || preValidation(motherName) || preValidation(ddo) || preValidation(dob) || preValidation(appointmentDate) || preValidation(retirementDate) || preValidation(designation) || preValidation(department) || preValidation(pensionStartDate) || preValidation(association) || preValidation(category) || preValidation(religion) || preValidation(pensionLeftStatus) || preValidation(grade) || preValidation(gradePay) || preValidation(payBand) || preValidation(formula)) {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", MandoryFieldMsg);
        result = 0;
        return false;
    }



    if (preValidation(employeeStatus)) {
        displaySmallErrorMessages("employeeStatusErr", "Please Select Employee Status");
        result = 0;
    } else if (employeeStatus !== "") {
        if (employeeStatus == "Alive") {
            if (preValidation(ageOnNextBirtthday)) {
                displaySmallErrorMessages("ageOnNextBirtthdayErr", "Please enter age on next birthday");
                result = 0;
            } else if (ageOnNextBirtthday != "") {
                if (!$("#ageOnNextBirtthday").val().match((numbervalidation()))) {
                    displaySmallErrorMessages("ageOnNextBirtthdayErr", "Only numbers are allowed");
                    result = 0;
                }
            }

        } else if (employeeStatus == "Dead") {
            if (preValidation(deathDate)) {
                displaySmallErrorMessages("deathDateErr", "Please select death date");
                result = 0;
            }

        }

    }


    if ($("#pensionStartDate").val() != "" && $("#incrementDate").val() != "") {
        var fDate = $("#pensionStartDate").datepicker("getDate");
        var tDate = $("#incrementDate").datepicker("getDate");
        var diff = new Date(tDate - fDate);
        var days = diff / 1000 / 60 / 60 / 24;
        if (days < 1) {
            displaySmallErrorMessages("incrementDateErr", "Increment Date should be greater than Pension start date");
            result = 0;

        }
    }

    if ($("#pensionStartDate").val() != "" && $("#incrementDate").val() != "") {
        var fDate = $("#pensionStartDate").datepicker("getDate");
        var t0Date = $("#retirementDate").val();
        var tDate = new Date(t0Date)

        var diff = new Date(tDate - fDate);
        var days = diff / 1000 / 60 / 60 / 24;
        if (days < 0) {
            displaySmallErrorMessages("incrementDateErr", "Pension start date should be greater than or equals to retirement date");
            result = 0;

        }
    }

    if (result !== 0) {
        var rows = [];
        $('table#pensiondisplayNomineeTable tbody tr').each(function () {
            var row = $(this).closest('tr');
            rows.push({
                memberName: $(this).find('td:eq(1)').text(),
                DateOfBirth: $(this).find('td:eq(2)').text(),
                remarks: $(this).find('td:eq(6)').text(),
                relation: $(this).find('td:eq(7)').text(),
                nonominee: $(this).find('td:eq(5)').text(),
            });

        });

        var pensionEmployeeJson = {
            employeecode: employeeCode,
            pensionType: pensionType,
            pensionClassification: pensionClassification,
            manualCode: manualCode,
            payMode: payMode,
            employeeName: employeeName,
            bank: bankName,
            fatherName: fatherName,
            motherName: motherName,
            accountNumber: $("#accNum").val(),
            dateofBirth: dob,
            DDO: ddo,
            appointmentDate: appointmentDate,
            location: location,
            retDate: retirementDate,
            department: department,
            pensionStartDate: pensionStartDate,
            designation: designation,
            gender: Gender,
            comMatDate: commutedMaturedDate,
            incDate: incrementDate,
            height: height,
            empStatus: employeeStatus,
            deathDate: deathDate,
            religion: religion,
            ageOnNextDob: $("#ageOnNextBirtthday").val(),
            casteCategory: category,
            association: association,
            corrAddress: corrsAddress,
            permanentAddress: permanentAddress,
            contactNOC: contactNumberC,
            contactNOP: contactNumberP,
            date: date,
            pensionOrderNum: pensionOrderNumber,
            pensionLeftStatus: pensionLeftStatus,
            leftDate: leftDate,
            indentationMark: indentationMark,
            remarks: pensionRemarks,
            stopPension: stopPension,
            grade: grade,
            gradePay: gradePay,
            pension: $("#pension").val(),
            familyPension: $("#familyPension").val(),
            correspondingPayScale: payBand,
            formula: formula


        };

        pensionEmployeeJson["pensionEmployeenomineeList"] = rows;
        pensionEmployeeJson = JSON.stringify(pensionEmployeeJson);

        $.post(server_base_url + "/pension/master/PensionEmployee/Save", {
            userId: getUserSessionElement("userId"),
            pensionEmployeeJson: pensionEmployeeJson,
            employeecode: employeeCode

        }).done(function (data) {

            if (data == fail) {
                displaySmallErrorMessagesInRed("pensionEmployeeMessageDiv", "Invalid username / password" + "<br/><br/>");
            } else if (data == unauthorized) {
                displaySmallErrorMessagesInRed("pensionEmployeeMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("pensionEmployeeMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate) {
                displayErrorMessages("pensionEmployeeMessageDiv", existed, "");
                setTimeout(function () {
                    $("#pensionEmployeeMessageDiv").focus();
                    displayPensionEmployeeDetails("dashboardBodyMainDiv");
                }, 5000);
            } else if (data != null) {

                displaySuccessMessages("pensionEmployeeMessageDiv", successMessage, "");
                setTimeout(function () {
                    $("#pensionEmployeeMessageDiv").focus();
                    displayPensionEmployeeDetails("dashboardBodyMainDiv");
                }, 5000);
            }

        });
    }

}

function resetPensionEmployee() {

    displayPensionEmployeeDetails("dashboardBodyMainDiv");
}