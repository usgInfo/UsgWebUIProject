/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function fetchDDOValues(divid) {
    $("#" + divid).text("").append("<option value='0'>----Select DDO----</option>");
    $.get(server_base_url + "/financial/account/DDO/ViewList", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#" + divid).append("<option value='" + subData._id.$oid + "'>" + subData.ddoName + "</option>");
            }
        }
    });
}

function getLocationDDO(ddo,id) {
//    var ddo = $("#ddo").val();
    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getLocationBasedOnDdo
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#"+id).text("").append("<option value = '' selected>---- Select Location ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#"+id).append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].locationName + "</option>");
            }
            
        }
        else
        {
            $("#location").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}


function fetchFundTypeValues(divid) {
    $("#" + divid).text("").append("<option value='0'>----Select Fund Type----</option>");
    $.get(server_base_url + "/payroll/SalarySlip/Report", {
        action: "fundType"
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#" + divid).append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
            }
        }
    });
}

function getBudgetHeadBasedOnDDOFundType(ddo,fundType,id) {
    $.get(server_base_url + "/finance/report/BudgetHead", {
        ddo: ddo,
        fundType: fundType,
    }).done(function(pdata) {
       pdata=JSON.parse(pdata);
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#"+id).text("").append("<option value = '' selected>---- Select Budget Head ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#"+id).append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].budgetHead + "</option>");
            }
        }
        else
        {
            $("#"+id).text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}