function getGenderOption(name, DivId) {
    var gender = ["Male", "Female"];
    $("#" + DivId).text("").append("<option value='' selected >---- Select Gender ----</option>");
    for (var i = 0; i < gender.length; i++) {
        $("#" + DivId).append("<option  value='" + gender[i] + "' >" + gender[i] + "</option>");
    }
    $("#" + DivId).val(name);
}
function viewSalutationListForOption(name, DivId) {
    $.get(server_base_url + "hrms/common/Salutation/View", {
    }).done(function(pdata) {
        if (pdata != null) {
            if (pdata.length > 0) {
                $("#" + DivId).text("").append("<option value = '' selected disabled>-Select-</option>");
                for (var i = 0; i < pdata.length; i++) {
                    if (name == pdata[i].salutation) {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].salutation + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].salutation + "</option>");
                    }
                }
            }
        }
    });
}
function getEmployeeLeftStatusOption(name, DivId, message) {
    var reason = ["Retirement", "Termination", "Death", "Resignation","Voluntary Retirement"];
    $("#" + DivId).text("").append("<option value='' selected >--- Select " + message + "-------</option>");
    for (var i = 0; i < reason.length; i++) {
        $("#" + DivId).append("<option  value='" + reason[i] + "' >" + reason[i] + "</option>");
    }
    $("#" + DivId).val(name);
}
function viewReligionListForOption(name) {
    $.get(server_base_url + "hrms/common/Religion/View", {
    }).done(function(pdata) {
        if (pdata != null) {
            $("#religion").text("").append("<option value = '' selected>---- Select Religion ----</option>");
            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {
                    if (name == pdata[i].religion) {
                        $("#religion").append("<option  value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].religion + "</option>");
                    } else {
                        $("#religion").append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].religion + "</option>");
                    }
                }
            }

        }
    });
}
function viewMaritalListForOption(name) {
    $.get(server_base_url + "hrms/coomon/MaritalStatus/View", {
    }).done(function(pdata) {
        if (pdata != null) {
            if (pdata.length > 0) {
                $("#maritalStatus").append("<option value = '' selected disabled>---- Select Marital Status ----</option>");
                for (var i = 0; i < pdata.length; i++) {
                    if (name == pdata[i].maritalStatus) {
                        $("#maritalStatus").append("<option  value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].maritalStatus + "</option>");
                    } else {
                        $("#maritalStatus").append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].maritalStatus + "</option>");
                    }
                }
            }
        }
    });
}

function setPayMode(name) {
    var PayMode = [EmployeePayModeBank, EmployeePayModeCash, EmployeePayModeCheque];
    $("#payMode").append("<option value='' selected>---- Select Pay Mode ----</option>");

    for (var i = 0; i < PayMode.length; i++) {
        $("#payMode").append("<option  value='" + PayMode[i] + "' >" + PayMode[i] + "</option>");
    }
    $("#payMode").val(name);
}
function viewBankListForOption(name, DivId) {
    $.get(server_base_url + "hrms/salary/Bank/ViewList", {
    }).done(function(bdata) {
        if (bdata != null) {
            $("#" + DivId).append("<option value='' selected disabled>---- Select Bank Name ----</option>");
            if (bdata.length > 0) {
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].bankname) {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].bankname + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' >" + bdata[i].bankname + "</option>");
                    }
                }
            }
        }
    });
}
function viewReDddoListForList(name, DivId) {
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function(pdata) {
        if (pdata != null) {
            $("#" + DivId).text("").append("<option value='' selected>---- Select DDO ----</option>");
            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {
                    if (name == pdata[i].ddoName) {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].ddoName + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].ddoName + "</option>");
                    }
                }
            }
        }
    });
}
function viewFROMDddoListForListINUPDATE(previous, DivId) {
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function(pdata) {
        if (pdata != null) {
            $("#" + DivId).text("").append("<option value='' selected>---- Select DDO ----</option>");
            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {
                    $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].ddoName + "</option>");
                }
                $("#fromDDO").val(previous);

            }
        }
    });
}
function viewDepartmentForOption(name) {
    $.get(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function(data) {
        if (data != null) {
            $("#department").append("<option value='' selected disabled>---- Select Department ----</option>");
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (name == data[i].department) {
                        $("#department").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].department + "</option>");
                    } else {
                        $("#department").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].department + "</option>");
                    }
                }
            }
        }
    });
}
function viewDisciplineForOption(name) {
    $.get(server_base_url + "hrms/salary/Discipline/ViewList", {
    }).done(function(pdata) {
        if (pdata != null) {
            $("#discipline").append("<option value='' selected disabled>---- Select Discipline ----</option>");
            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {
                    if (name == pdata[i].disciplineName) {
                        $("#discipline").append("<option  value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].disciplineName + "</option>");
                    } else {
                        $("#discipline").append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].disciplineName + "</option>");
                    }
                }
            }
        }
    });
}
function fetchAllNaturesTypeForOption(name) {
    $.post(server_base_url + "hrms/common/Nature/View", {
    }).done(function(data) {
        if (data != null) {
            $("#natureType").append("<option value='' selected disabled>---- Select Nature Type ----</option>");

            for (var i = 0; i < data.length; i++) {
                if (name == data[i].natureName) {
                    $("#natureType").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].natureName + "</option>");
                } else {
                    $("#natureType").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].natureName + "</option>");
                }
            }
        }

    });
}
function fetchAllNaturesTypeForOptionv2(divId) {
    $.post(server_base_url + "hrms/common/Nature/View", {
    }).done(function(data) {
        if (data != null) {
            $("#" + divId).append("<option value='0' selected >---- Select Nature Type ----</option>");

            for (var i = 0; i < data.length; i++) {
                $("#" + divId).append("<option  value='" + data[i]._id.$oid + "' >" + data[i].natureName + "</option>");
            }
        }

    });
}
function fetchAllFundsForOption(name) {
    $.post(server_base_url + "budget/master/FundType/View", {
    }).done(function(data) {
        if (data != null) {
            $("#fundType").append("<option value='' selected disabled>---- Select Fund Type ----</option>");
            for (var i = 0; i < data.length; i++) {
                if (name == data[i].description) {
                    $("#fundType").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].description + "</option>");
                } else {
                    $("#fundType").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].description + "</option>");
                }
            }
        }
    });
}
function  viewBudgetHeadForOption(name) {
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function(data) {
        if (data != null) {
            $("#budgetHead").append("<option value='' selected disabled>---- Select Budget Head ----</option>");
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (name == data[i].budgetHead) {
                        $("#budgetHead").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].budgetHead + "</option>");
                    } else {
                        $("#budgetHead").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].budgetHead + "</option>");
                    }
                }
            }
        }
    });
}
function viewSalaryHeadListForOption(name, DivId) {

    var salarytype = ["New pension Scheme", "GPF Scheme", "CPF Scheme"];
    $("#" + DivId).append("<option value='' selected >----Select Salary Type ----</option>");
    for (var i = 0; i < salarytype.length; i++) {
        if (name == salarytype[i])
        {
            $("#" + DivId).append("<option  value='" + salarytype[i] + "'selected>" + salarytype[i] + "</option>");
        } else
        {
            $("#" + DivId).append("<option  value='" + salarytype[i] + "' >" + salarytype[i] + "</option>");
        }
    }
    $("#" + DivId).val(name);
}
function viewCityForOption(name, DivId) {

    $.get(server_base_url + "hrms/salary/City/ViewList", {
    }).done(function(pdata) {
        if (pdata != null) {
            if (pdata.length > 0) {
                $("#" + DivId).append("<option value = '0' selected>---- Select City ----</option>");
                for (var i = 0; i < pdata.length; i++) {
                    if (name == pdata[i].cityName) {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].cityName + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].cityName + "</option>");
                    }
                }
            }
        }

    });
}
function viewDesignationListForOption(name, DivId, message) {
    $.get(server_base_url + "hrms/salary/Designation/ViewList", {
    }).done(function(bdata) {
        if (bdata != null) {
            $("#" + DivId).append("<option value = '0' selected >---- Select " + message + " ----</option>");
            if (bdata.length > 0) {
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].designation) {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].designation + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' >" + bdata[i].designation + "</option>");
                    }
                }
            }
        }
    });
}
function getAssociationFoorOption(name, DivId, message) {
//    $.get(server_base_url + "FetchAllAssociation", {
//    }).done(function (bdata) {
//        if (bdata != null) {
//            $("#" + DivId).append("<option value = '' selected disabled>---- Select " + message + " ----</option>");
//            if (bdata.length > 0) {
//                for (var i = 0; i < bdata.length; i++) {
//                    if (name == bdata[i].designation) {
//                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].associationName + "</option>");
//                    } else {
//                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' >" + bdata[i].associationName + "</option>");
//                    }
//                }
//            }
//        }
//    });
    viewOption("hrms/salary/Association/ViewList", name, "associationName", DivId, message);
}
function getCategoryForOption(name, DivId, message) {
    var category = ["GENERAL", "OBC", "SE", "ST", "Category-1"];
    $("#" + DivId).append("<option value='' selected disabled>---- Select " + message + " ----</option>");

    for (var i = 0; i < category.length; i++) {
        $("#" + DivId).append("<option  value='" + category[i] + "' >" + category[i] + "</option>");
    }
    $("#" + DivId).val(name);
}
function viewQuarterListForOption(name, DivId, message) {
    //var name = $("#employeeCode").val();

    $.get(server_base_url + "payroll/transaction/Quarter/ViewList", {
        ddo: getUserSessionElement(seDDOId)
    }).done(function(bdata) {
        if (bdata != null) {
            if (bdata.length > 0) {
                $("#" + DivId).append("<option value = '' selected disabled>---- Select " + message + " ----</option>");
                $("#" + DivId).text("");
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].employeeCode) {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].quaterNumber + "</option>");
                    }

                }
            }
        }
    });

}
function viewCityCategoryListForOption(name, DivId, message) {
    $.get(server_base_url + "hrms/salary/CityCategory/ViewList", {
    }).done(function(bdata) {
        if (bdata != null) {
            if (bdata.length > 0) {
                $("#" + DivId).append("<option value = '' selected disabled>----Select " + message + " ----</option>");
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].cityCategory) {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].cityCategory + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' >" + bdata[i].cityCategory + "</option>");
                    }
                }
            }
        }
    });
}
function viewFormulaListForOption(name, DivId, message) {
    $.get(server_base_url + "hrms/common/Formula/View", {
    }).done(function(bdata) {
        if (bdata != null) {
            $("#" + DivId).append("<option value = '' selected disabled>----Select " + message + " ----</option>");
            if (bdata.length > 0) {
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].description) {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].description + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' >" + bdata[i].description + "</option>");
                    }

                }
            }
        }
    });
}
function  getMonthsForOption(name, DivId, message) {
    var options = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $("#" + DivId).append("<option value='' selected disabled >---- Select " + message + " ----</option>");
    for (var i = 0; i < options.length; i++) {
        $("#" + DivId).append("<option value=" + options[i] + ">" + options[i] + "</option>");
    }
    $("#" + DivId).val(name);
}
function  getYearForOption(val, DivId, message) {
    var dateToday = new Date();
    var yrRange = dateToday.getFullYear();
    var yrForward = yrRange + 50;

    $("#" + DivId).append("<option value='' selected disabled>---- Select " + message + " ----</option>");

    for (var i = yrRange; i < yrForward; i++) {
        $("#" + DivId).append("<option value=" + i + ">" + i + "</option>");
    }
    $("#" + DivId).val(val);
}
function getCategoryOptionsForTables(name, DivId, message) {
    $.get(server_base_url + "hrms/common/Category/View", {
    }).done(function(bdata) {
        if (bdata != null) {
            $("#" + DivId).text("").append("<option value ='' selected>---- Select " + message + " ----</option>");
            if (bdata.length > 0) {
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].categoryy) {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].categoryy + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' >" + bdata[i].categoryy + "</option>");
                    }
                }
            }
        }
    });
}
//Save id same as name/value
function getEmployeeNameEmployeeCodeAsOptions(name, DivId, message) {
    $.get(server_base_url + "hrms/salary/Employee/ViewName", {
    }).done(function(bdata) {
        if (bdata != null) {
            $("#" + DivId).text("").append("<option value = '' selected disabled> [Employee Code] -" + message + " </option>");
            if (bdata.length > 0) {
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].employeeName) {
                        $("#" + DivId).append("<option  value='" + bdata[i].employeeCode + "' selected >[" + bdata[i].employeeCode + "] - " + bdata[i].employeeName + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + bdata[i].employeeCode + "' >[" + bdata[i].employeeCode + "] - " + bdata[i].employeeName + "</option>");
                    }
                }
            }
        }
    });
}
function getAllLocationForOptions(name, DivId, message) {
    $.get(server_base_url + "hrms/salary/Employee/LocationForOptions", {
    }).done(function(bdata) {
        if (bdata != null) {
            $("#" + DivId).text("").append("<option value = '' selected disabled> ----" + message + " ---- </option>");
            if (bdata.length > 0) {
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].locationName) {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].locationName + "</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' >" + bdata[i].locationName + "</option>");
                    }
                }
            }
        }
    });
}
function getAllReportingToForOptions(name, DivId, message) {
    $.get(server_base_url + "/hrms/Employee/GetReportingToNames", {
        ddoId: getUserSessionElement(seDDOId),
        locationId: getUserSessionElement(seLocationId),
    }).done(function(bdata) {
        if (bdata != null) {
            $("#" + DivId).text("").append("<option value = '' selected disabled> ----" + message + " ---- </option>");
            if (bdata.length > 0) {
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].employeeName) {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].employeeName + "--[ " + bdata[i].designation + " ]</option>");
                    } else {
                        $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' >" + bdata[i].employeeName + "--[ " + bdata[i].designation + " ]</option>");
                    }
                }
            }
        }
    });
}
//On Change Functions to get Fund Typo,,BudgetHead,,Nature type,,Descipline
function getdatatoemployeeUsingDDO(name) {
    var ddo = $("#ddo").val();
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getDesignationBasedOnDdo
    }).done(function(pdata) {

        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#designation").text("").append("<option value = '' selected>---- Select Designation ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#designation").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].designation + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#designation option:contains('" + name + "')").attr("selected", "selected");
            }
        } else
        {
            $("#designation").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });


}
function getDesignationUsingDDOInUpdate(ddo, name) {
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getDesignationBasedOnDdo
    }).done(function(pdata) {
        $("#designation").text("").append("<option value = '' selected>---- Select Designation ----</option>");
        for (var k = 0; k < pdata.length; k++) {
            $("#designation").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].designation + "</option>");
        }
        if (name != null || name != undefined || name != "") {
            $("#designation").val(name);
        }
    });
}
function getFTGradeClassBasedOnDDODESIGNATION(name) {
    var ddo = $("#ddo").val();
    var designation = $("#designation").val();
    $("#fundType").val("");
    $("#budgetHead").val("");
    $("#natureType").val("");
    $("#discipline").val("");
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        designation: designation,
        condition: getFTGradeClassBasedOnDdoDesignation
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            var fundType = pdata.fundType;
            fundType = JSON.parse(fundType);
            $("#fundType").text("").append("<option value = '' selected>---- Select Fund Type ----</option>");
            for (var k = 0; k < fundType.length; k++) {
                $("#fundType").append("<option  value='" + fundType[k]._id.$oid + "'>" + fundType[k].description + "</option>");
            }
            var clas = pdata.classDeatils;
            clas = JSON.parse(clas);
            $("#class").text("").append("<option  value='" + clas._id.$oid + "'>" + clas.name + "</option>");
            $("#class").val(clas._id.$oid).prop("disabled", true);
            var grade = pdata.gradeDeatils;
            grade = JSON.parse(grade);
            $("#grade").text("").append("<option value = '' selected>---- Select Grade ----</option>");
            $("#gradePromo").text("").append("<option value = '' selected>---- Select Grade ----</option>");
            for (var k = 0; k < grade.length; k++) {
                $("#grade").append("<option  value='" + grade[k]._id.$oid + "'>" + grade[k].gradeName + "</option>");
                $("#gradePromo").append("<option  value='" + grade[k]._id.$oid + "'>" + grade[k].gradeName + "</option>")
            }
//            $("#grade").text("").append("<option  value='" + grade._id.$oid + "'>" + grade.gradeName + "</option>")
//            $("#gradePromo").text("").append("<option  value='" + grade._id.$oid + "'>" + grade.gradeName + "</option>")
//   
//        $("#grade").val(grade._id.$oid).prop("disabled", false);
//            $("#gradePay").val(grade.gradePay).prop("disabled", true);
            if (name != null || name != undefined || name != "") {
                $("#fundType option:contains('" + name + "')").attr("selected", "selected");
            }
        } else
        {
            $("#fundType").text("").append("<option value = '' selected>----No Data Available ----</option>");
            $("#class").text("").append("<option value = '' selected>----No Data Available ----</option>");
            $("#grade").text("").append("<option  value = '' selected>----No Data Available ----</option>")
            $("#gradePromo").text("").append("<option  value = '' selected>----No Data Available ----</option>")
        }
    });
//    viewOption("hrms/common/FundType/Viewlist", "", "fundName", "fundType", "Fund Type");
}
function getFTGradeClassBasedOnDDODESIGNATIONInUpdate(ddo, designation, name, name1) {
    $("#fundType").val("");
    $("#budgetHead").val("");
    $("#natureType").val("");
    $("#discipline").val("");
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        designation: designation,
        condition: getFTGradeClassBasedOnDdoDesignation
    }).done(function(pdata) {
        var fundType = pdata.fundType;
        fundType = JSON.parse(fundType);
        $("#fundType").text("").append("<option value = '' selected>---- Select Fund Type ----</option>");
        for (var k = 0; k < fundType.length; k++) {
            if (name == fundType[k]._id.$oid)
            {
                $("#fundType").append("<option  value='" + fundType[k]._id.$oid + "' selected>" + fundType[k].description + "</option>");
            } else
            {
                $("#fundType").append("<option  value='" + fundType[k]._id.$oid + "'>" + fundType[k].description + "</option>");
            }
        }
        var clas = pdata.classDeatils;
        clas = JSON.parse(clas);
        $("#class").text("").append("<option  value='" + clas._id.$oid + "'>" + clas.name + "</option>");
        $("#class").val(clas._id.$oid).prop("disabled", true);
        var grade = pdata.gradeDeatils;
        grade = JSON.parse(grade);
        $("#grade").text("");
        $("#gradePromo").text("");
        for (var k = 0; k < grade.length; k++) {
            if (name1 == grade[k]._id.$oid)
            {
                $("#grade").append("<option  value='" + grade[k]._id.$oid + "' selected>" + grade[k].gradeName + "</option>");
                $("#gradePromo").append("<option  value='" + grade[k]._id.$oid + "'selected>" + grade[k].gradeName + "</option>")
            } else
            {
                $("#grade").append("<option  value='" + grade[k]._id.$oid + "'>" + grade[k].gradeName + "</option>");
                $("#gradePromo").append("<option  value='" + grade[k]._id.$oid + "'>" + grade[k].gradeName + "</option>")
            }
        }

        if (name != null || name != undefined || name != "") {
            $("#fundType").val(name);
        }

    });
//    viewOption("hrms/common/FundType/Viewlist", "", "fundName", "fundType", "Fund Type");
}
function getDesignationCopytoSecondDesignation() {
    var designation = $("#designation").val();
    $.get(server_base_url + "hrms/salary/Designation/ViewList", {
    }).done(function(bdata) {
        for (var k = 0; k < bdata.length; k++) {
            if (bdata[k]._id.$oid == designation)
            {
                $("#seconddesignation").append("<option  value='" + bdata[k]._id.$oid + "' selected>" + bdata[k].designation + "</option>");
            }
        }
    });
}
function getDesignationCopytoSecondDesignationInUpdate(designation) {
    $.get(server_base_url + "hrms/salary/Designation/ViewList", {
    }).done(function(bdata) {
        for (var k = 0; k < bdata.length; k++) {
            if (bdata[k]._id.$oid == designation)
            {
                $("#seconddesignation").append("<option  value='" + bdata[k]._id.$oid + "' selected>" + bdata[k].designation + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#seconddesignation").val(designation);
            }
        }
    });
}
function getempRetirementDate() {
    var designation = $("#designation").val();
    var dob = $("#dob").val();

    $.get(server_base_url + "hrms/Common/Designation/FetchRetirementDate", {
        designation: designation,
        dob: dob
    }).done(function(bdata) {
        var deptList = bdata.retirementdate;

        deptList = JSON.stringify(deptList);
        deptList = JSON.parse(deptList);
        deptList = JSON.parse(deptList);
        $("#dateOfRetirement").val(deptList);
    });

}
function getBudgetHeadBasedOnDDODesignationFundType(name) {
    var ddo = $("#ddo").val();
    var designation = $("#designation").val();
    var fundType = $("#fundType").val();
    $("#budgetHead").val("");
    $("#natureType").val("");
    $("#discipline").val("");
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        designation: designation,
        fundType: fundType,
        condition: getBudgetHeadBasedOnDdoDesignationFT
    }).done(function(pdata) {
        $("#budgetHead").text("").append("<option value = '' selected>---- Select Budget Head ----</option>");
        for (var k = 0; k < pdata.length; k++) {
            $("#budgetHead").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].budgetHead + "</option>");
        }
        if (name != null || name != undefined || name != "") {
            $("#budgetHead option:contains('" + name + "')").attr("selected", "selected");
        }
    });
//    viewOption("hrms/common/BudgetHead/View", "", "budgetHead", "budgetHead", "Budget Head");
}
function getBudgetHeadBasedOnDDODesignationFundTypeInUpdate(ddo, designation, fundType, name) {
    $("#budgetHead").val("");
    $("#natureType").val("");
    $("#discipline").val("");
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        designation: designation,
        fundType: fundType,
        condition: getBudgetHeadBasedOnDdoDesignationFT
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#budgetHead").text("").append("<option value = '' selected>---- Select Budget Head ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#budgetHead").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].budgetHead + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#budgetHead").val(name);
            }
        } else
        {
            $("#budgetHead").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
//    viewOption("hrms/common/BudgetHead/View", "", "budgetHead", "budgetHead", "Budget Head");
}
function getNatureTypeBasedOnDDODesignationFundTypeBudgetHead(name) {
    var ddo = $("#ddo").val();
    var designation = $("#designation").val();
    var fundType = $("#fundType").val();
    var budgetHead = $("#budgetHead").val();
    $("#natureType").val("");
    $("#naturePromo").val("");
    $("#discipline").val("");
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        designation: designation,
        fundType: fundType,
        budgetHead: budgetHead,
        condition: getNatureBasedOnDdoDesignationFT_BH
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#natureType").text("").append("<option value = '' selected>---- Select Nature Type ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#natureType").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].natureName + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#natureType option:contains('" + name + "')").attr("selected", "selected");
            }
        } else
        {
            $("#natureType").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
//    viewOption("hrms/common/Nature/View", "", "natureName", "natureType", "Nature Type");
}
function getNatureTypeBasedOnDDODesignationFundTypeBudgetHeadInUpdate(ddo, designation, fundType, budgetHead, name) {
    $("#natureType").val("");
    $("#discipline").val("");
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        designation: designation,
        fundType: fundType,
        budgetHead: budgetHead,
        condition: getNatureBasedOnDdoDesignationFT_BH
    }).done(function(pdata) {
        $("#natureType").text("").append("<option value = '' selected>---- Select Nature Type ----</option>");
        $("#naturePromo").text("").append("<option value = '' selected>---- Select Nature Type ----</option>");
        for (var k = 0; k < pdata.length; k++) {
            $("#natureType").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].natureName + "</option>");
            $("#naturePromo").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].natureName + "</option>");
        }
        if (name != null || name != undefined || name != "") {
            $("#natureType").val(name);
        }
    });
//    viewOption("hrms/common/Nature/View", "", "natureName", "natureType", "Nature Type");
}
function getDesciplineBasedOnDDODesignationFundTypeBudgetHeadNatureType(name) {
    var ddo = $("#ddo").val();
    var designation = $("#designation").val();
    var fundType = $("#fundType").val();
    var budgetHead = $("#budgetHead").val();
    var natureType = $("#natureType").val();
    $("#discipline").val("");
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        designation: designation,
        fundType: fundType,
        budgetHead: budgetHead,
        natureType: natureType,
        condition: getDesciplineBasedOnDdoDesignation
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#discipline").text("").append("<option value = '' selected>---- Select Discipline ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#discipline").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].disciplineName + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#discipline option:contains('" + name + "')").attr("selected", "selected");
            }
        } else
        {
            $("#discipline").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
//    viewOption("hrms/salary/Discipline/ViewList", "", "disciplineName", "discipline", "Discipline");
}
function getDisciplineBasedOnDDODesignationFundTypeBudgetHeadNatureTypeInUpdate(ddo, designation, fundType, budgetHead, natureType, name) {
    $("#discipline").val("");
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        designation: designation,
        fundType: fundType,
        budgetHead: budgetHead,
        natureType: natureType,
        condition: getDesciplineBasedOnDdoDesignation
    }).done(function(pdata) {
        $("#discipline").text("").append("<option value = '' selected>---- Select Discipline ----</option>");
        for (var k = 0; k < pdata.length; k++) {
            $("#discipline").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].disciplineName + "</option>");
        }
        if (name != null || name != undefined || name != "") {
            $("#discipline").val(name);
        }

    });
//    viewOption("hrms/salary/Discipline/ViewList", "", "disciplineName", "discipline", "Discipline");
}
function getLocationBasedOnDDO(name) {
    var ddo = $("#ddo").val();
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getLocationBasedOnDdo
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#location").text("").append("<option value = '' selected>---- Select Location ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#location").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].locationName + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#location option:contains('" + name + "')").attr("selected", "selected");
            }
        } else
        {
            $("#location").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}
function getLocationBasedOnDDOInUpdate(ddo, name) {
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getLocationBasedOnDdo
    }).done(function(pdata) {
        $("#location").text("").append("<option value = '' selected>---- Select Location ----</option>");
        for (var k = 0; k < pdata.length; k++) {
            $("#location").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].locationName + "</option>");
        }
        if (name != null || name != undefined || name != "") {
            $("#location").val(name);
        }
    });
}
function getDepartmentBasedOnDDO(name) {
    var ddo = $("#ddo").val();
    $.get(server_base_url + "/hrms/common/DDODepartment/FetchDepartBasedonDDOService", {
        ddo: ddo
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            var deptList = pdata.deptList;
            deptList = JSON.stringify(deptList);
            deptList = JSON.parse(deptList);
            deptList = JSON.parse(deptList);
            $("#department").text("").append("<option value = ''>---- Select Department ----</option>");
            for (var k = 0; k < deptList.length; k++) {
                $("#department").append("<option  value='" + deptList[k]._id.$oid + "'>" + deptList[k].department + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#department option:contains('" + name + "')").attr("selected", "selected");
            }
        } else
        {
            $("#department").text("").append("<option value = ''>---- No Data Available ----</option>");
        }
    });
}
function getDepartmentBasedOnDDOInUpdate(ddo, name) {
    $.get(server_base_url + "/hrms/common/DDODepartment/FetchDepartBasedonDDOService", {
        ddo: ddo
    }).done(function(pdata) {
        var deptList = pdata.deptList;
        deptList = JSON.stringify(deptList);
        deptList = JSON.parse(deptList);
        deptList = JSON.parse(deptList);
        $("#department").text("").append("<option value = ''>---- Select Department ----</option>");
        for (var k = 0; k < deptList.length; k++) {
            $("#department").append("<option  value='" + deptList[k]._id.$oid + "'>" + deptList[k].department + "</option>");
        }
        if (name != null || name != undefined || name != "") {
            $("#department").val(name);
        }
    });
}

function getGradePayValueinemployee() {
    var id = getUserSessionElement("userId");
    $.get(server_base_url + "hrms/salary/Designation/getGradepayValue", {
        id: $("#grade").val(),
        userId: id
    }).done(function(data) {
        if (data != null) {
            // alert(data);
            var bdata = JSON.parse(data);
            // alert(bdata.gradePay);
            $("#gradePay").val(bdata.gradePay);
        }
    });
}

function disableEnableBankAccNumberDropDown() {
    var payMode = $("#payMode").val();
    if (payMode == EmployeePayModeBank) {
        $("#bank").prop("disabled", false);
        $("#acnumber").prop("disabled", false);
    } else if (payMode == EmployeePayModeCash) {
        $("#bank").val("").prop("disabled", true);
        $("#acnumber").val("").prop("disabled", true);
    } else if (payMode = EmployeePayModeCheque) {
        $("#bank").prop("disabled", false);
        $("#acnumber").prop("disabled", false);
    }
}

var getDesignationBasedOnDdo = "GetDesignationBasedOnDdo";
var getFTGradeClassBasedOnDdoDesignation = "getFTGradeClassBasedOnDdoDesignation";
var getBudgetHeadBasedOnDdoDesignationFT = "GetBudgetHeadBasedOnDdoDesignationFT";
var getNatureBasedOnDdoDesignationFT_BH = "GetNatureBasedOnDdoDesignationFT_BH";
var getDesciplineBasedOnDdoDesignation = "GetDesciplineBasedOnDdoDesignationFT_BH_Nature";
var getLocationBasedOnDdo = "GetLocationBasedOnDdo";
var getDepartmentBasedOnDdo = "GetDepartmentBasedOnDdo";
var getGradeBssedOnDesignation = "getGradeBssedOnDesignation";
var EmployeePayModeBank = "Bank";
var EmployeePayModeCash = "Cash";
var EmployeePayModeCheque = "Cheque";
var NoPostAvailableForThisCategory = "NoPostAvailableForThisCategory";
//function getdatatoemployeeUsingDDO() {
//    var ddo = $("#ddo").val();
//    $.get(server_base_url + "hrms/Common/DesignationFundtype/GetDatafromDFMforEmp", {
//        ddo: ddo
//    }).done(function (pdata) {
//        var designationList = pdata.designationList;
//        designationList = JSON.stringify(designationList);
//        designationList = JSON.parse(designationList);
//        designationList = JSON.parse(designationList);
//        var locationList = pdata.locationList;
//        locationList = JSON.stringify(locationList);
//        locationList = JSON.parse(locationList);
//        locationList = JSON.parse(locationList);
//        $("#designation").text("").append("<option value = '' selected>---- Select Designation ----</option>");
//        for (var k = 0; k < designationList.length; k++) {
//            $("#designation").append("<option  value='" + designationList[k]._id.$oid + "'>" + designationList[k].designation + "</option>");
//        }
//        $("#location").text("").append("<option value = '' selected>---- Select Location ----</option>");
//        for (var k = 0; k < locationList.length; k++) {
//            $("#location").append("<option  value='" + locationList[k]._id.$oid + "'>" + locationList[k].locationName + "</option>");
//        }
//    });
