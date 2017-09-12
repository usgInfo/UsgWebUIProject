/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ddoOnChangeFunction() {
    getEmployeeDataCode("ddoSelect");
    //  getLocationDDOCommon("ddoSelect");
    getDepartmentBasedOnDDOCommon("ddoSelect");
}

function getEmployeeDataCode(ddoid) {
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];
    var ddo = $("#" + ddoid).val();
    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: ddo,
        fromDt: fromDate,
        toDate: toDate,
        location: getUserSessionElement(seLocationId)
    }).done(function(data) {
        data = JSON.parse(data);
        if (data != "500" && data != 500 && data != "501" && data != 501 && data != "" && data != null)
        {
            $("#employeeCode").text("").append("<option  value='' selected >----[Employee Code]-Employee Name ----</option>");
            for (var i = 0; i < data.length; i++)
            {
                $("#employeeCode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
            }

        } else {
            $("#employeeCode").text("").append("<option >" + NoDataFound + "</option>");
        }
    });
}


function getLocationDDOCommon(ddo) {
    var ddo = $("#" + ddo).val();
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getLocationBasedOnDdo
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#locationSelect").text("").append("<option value = '' selected>---- Select Location ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#locationSelect").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].locationName + "</option>");
            }

        } else
        {
            $("#locationSelect").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}
function getDepartmentBasedOnDDOCommon(ddo) {
    var ddo = $("#" + ddo).val();
    $.get(server_base_url + "/hrms/common/DDODepartment/FetchDepartBasedonDDOService", {
        ddo: ddo
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            var deptList = pdata.deptList;
            deptList = JSON.stringify(deptList);
            deptList = JSON.parse(deptList);
            deptList = JSON.parse(deptList);
            $("#departmentSelect").text("").append("<option value = ''>---- Select Department ----</option>");
            for (var k = 0; k < deptList.length; k++) {
                $("#departmentSelect").append("<option  value='" + deptList[k]._id.$oid + "'>" + deptList[k].department + "</option>");
            }

        } else
        {
            $("#departmentSelect").text("").append("<option value = ''>---- No Data Available ----</option>");
        }
    });
}

function fetchAllNaturesTypeForOptionCommon(divID) {
    $("#" + divID).text("");
    $.post(server_base_url + "hrms/common/Nature/View", {
    }).done(function(data) {
        if (data != null) {
            $("#" + divID).append("<option value='' selected disabled>---- Select Nature Type ----</option>");

            for (var i = 0; i < data.length; i++) {
                $("#" + divID).append("<option  value='" + data[i]._id.$oid + "' >" + data[i].natureName + "</option>");
            }
        }

    });
}
function getBudgetHeadBasedOnDDOFundTypeCommon() {
    var ddo = $("#ddoSelect").val();
    var fundType = $("#fundTypeSelect").val();
    $.get(server_base_url + "/finance/report/BudgetHead", {
        ddo: ddo,
        fundType: fundType,
    }).done(function(pdata) {
        pdata = JSON.parse(pdata);
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#budgetHeadSelect").text("").append("<option value = '' selected>---- Select Budget Head ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#budgetHeadSelect").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].budgetHead + "</option>");
            }
        } else
        {
            $("#budgetHeadSelect").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}