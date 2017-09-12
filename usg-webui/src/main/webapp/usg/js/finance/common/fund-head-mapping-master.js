/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author Asif
 */

function  financialfundHeadMappingBody(DivId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financialfundHeadMappingBody("dashboardBodyMainDiv")>Fund Head Mapping</a>');
    createForm(DivId, innerDivCF, "Fund Head Mapping", FieldGroupForCF, successMsgDivCF);
    getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
    $("#Row0Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));
    $("#Row0Col2").append(getLabel("Sector", "required") + "" + getDropDown("sector"));

    getThreeColumnInRow(FieldGroupForCF, "Row1", "Row1Col", "Row1Col2", "Row1Col3");
    $("#Row1Col").append(getLabel("Head Code", "") + "<select name='from' id='multiselect' class='form-control' size='8' multiple='multiple'></select>");
    $("#Row1Col2").append("<br/><br/><button type='button' id='multiselect_rightAll' class='btn btn-block'><i class='glyphicon glyphicon-forward'></i></button>\n\
     <button type='button' id='multiselect_rightSelected' class='btn btn-block'><i class='glyphicon glyphicon-chevron-right'></i></button><button type='button' id='multiselect_leftSelected' class='btn btn-block'><i class='glyphicon glyphicon-chevron-left'></i></button><button type='button' id='multiselect_leftAll' class='btn btn-block'><i class='glyphicon glyphicon-backward'></i></button>");
    $("#Row1Col3").append("<br/><select name='to' id='multiselect_to' class='form-control' size='8' multiple='multiple'></select>");
    $('#multiselect').multiselect();
    getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "validateFinancialFundHead()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "')");
    //viewOption("financial/common/FundType/ViewList", "", "description", "fundType", "Fund Type");
    viewOption("budget/master/FundType/View", "", "description", "fundType", "Fund Type");
    viewOption("budget/master/Sector/View", "", "sectorName", "sector", "Sector");
    getHeadCodesListForFinancialFundType("", "multiselect");
    viewFinancialFundHeadList('viewFinancialFundHeadList');
}
function validateFinancialFundHead()
{
    var result = 1;
    var sector = $("#sector").val();
    var fundType = $("#fundType").val();
    var saveorupdate = $("#saveorupdate").val();
    if (fundType == "" || fundType == null || fundType == "undefined" || sector == "" || sector == null || sector == "undefined") {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {
        if (fundType == null) {
            $("#fundType").focus();
            addSomeClass("fundTypeFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("fundTypeErr", "Please Select Fund Type.");
            result = 0;
        }
        if (sector == null) {
            $("#sector").focus();
            addSomeClass("sectorFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("sectorErr", "Please Select Sector.");
            result = 0;
        }
        if (result != 0) {
            if (saveorupdate == "save")
                saveFinancialFundHeadMapping();
            else if (saveorupdate == "update")
                updateFinancialFundHeadMapping();
        }
    }

}
function saveFinancialFundHeadMapping() {
    var rolesList = [];
    var abc = document.getElementById("multiselect_to");
    for (var i = 0; i < abc.options.length; i++) {
        rolesList.push(abc.options[i].value);
    }
    var obj = {};
    obj["headCodeList"] = rolesList;
    obj["fundType"] = $("#fundType").val();
    obj["sector"] = $("#sector").val();
    obj = JSON.stringify(obj);
    $.post(server_base_url + "financial/common/FundHeadMapping/Save", {
        obj: obj
    }).done(function(data) {
        saveOrUpdateCommonFunctionFundHeadMapping(data);
    });
}
function  saveOrUpdateCommonFunctionFundHeadMapping(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        setTimeout(function() {
            scrolupfunction();
            financialfundHeadMappingBody("dashBoardBodyMainDiv");
            displaySuccessMessages(successMsgDivCF, successMessage, "");
        }, 1000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function updateFinancialFundHeadMapping() {
    var objId = $("#Id").val();
    var rolesList = [];
    var abc = document.getElementById("multiselect_to");
    for (var i = 0; i < abc.options.length; i++) {
        rolesList.push(abc.options[i].value);
    }
    var obj = {};
    obj["headCodeList"] = rolesList;
    obj["fundType"] = $("#fundType").val();
    obj["sector"] = $("#sector").val();
    obj = JSON.stringify(obj);
    $.post(server_base_url + "financial/common/FundHeadMapping/Update", {
        objId: objId,
        obj: obj
    }).done(function(data) {
        saveOrUpdateCommonFunctionFundHeadMapping(data);
    });
}
function viewFinancialFundHeadList(divId) {
    var columNames = ["Fund Type", "Sector"];
    createTable(innerDivCF, "List of Fund Head Mapping", divId, MsgDivInTableCF, columNames);
    $.get(server_base_url + "financial/common/FundHeadMapping/ViewList", {
    }).done(function(pdata) {
        if (pdata == fail) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "No Data Found.");
        } else if (pdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
        } else {
            if (pdata != null) {
                if (pdata.length > 0) {
                    var sno = 0;
                    var TbodyId = divId + "body";
                    $("#" + divId).append("<tbody id='" + TbodyId + "'/>");
                    for (var i = pdata.length - 1; i >= 0; i--) {
                        sno++;
                        var obj;
                        obj = JSON.stringify(pdata[i]);
                        $("#" + TbodyId).append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].fundType + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].sector + "</td>"
                                + "<td style='cursor:pointer;' onclick=updateFFHM12345('" + encryptBase64String(encodeURI(obj)) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                                + "<td onclick=deletePopUp('deleteFFHM','viewFinancialFundHeadList','" + pdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                    }
                    $("#" + divId).dataTable();
                }
            }
        }
    });
}
function  updateFFHM12345(obj) {
    obj = JSON.parse(decodeURI(decryptBase64String(obj)));
    resetAllValuesInSpecifiedDiv(FieldGroupForCF);
    $("#fundType option:contains('" + obj.fundType + "')").attr("selected", "selected");
    $("#sector option:contains('" + obj.sector + "')").attr("selected", "selected");
    $("#Id").val(obj._id.$oid);
    $("#saveorupdate").val("update");
    $("#saveUpdateBtnId").text("").text("Update");
    addButtonOnclickFunction("resetBackBtnId", "Back", "financialfundHeadMappingBody('" + DashboardMainDivID + "')");
    $("#multiselect").text("");
    $("#multiselect_to").text("");
    getHeadCodesListForFinancialFundType(obj.headCodeList, "multiselect");
    getSectorListForFundType(obj.headCodeList, "multiselect_to");
}
function getSectorListForFundType(name, DivId) {
    for (var i = 0; i < name.length; i++) {
        $("#" + DivId).append("<option>" + name[i] + "</option>");
    }
}
function getHeadCodesListForFinancialFundType(removeOptions, DivId) {
    $.get(server_base_url + "financial/common/BudgetHeadCode/ViewList", {
    }).done(function(pdata) {
        if (pdata != null) {
            $("#" + DivId).text("");
            if (pdata.length > 0) {
                var str = [];
                for (var i = 0; i < pdata.length; i++) {
                    str[i] = pdata[i].budgetHead;
                }
                str.sort();
                for (var i = 0; i < str.length; i++) {
                    var result = 1;
                    for (var j = 0; j < removeOptions.length; j++) {
                        if (str[i] == removeOptions[j]) {
                            result = 0;
                        }
                    }
                    if (result != 0) {
                        $("#" + DivId).append("<option  value='" + str[i] + "' >" + str[i] + "</option>");
                    }
                }
            }
        }
    });
}
function getSectorforFundType(name, DivId, message) {
    var options = ["Sector 1", "Sector 2"];
    $("#" + DivId).append("<option value='' selected disabled>---- Select " + message + " ----</option>");
    for (var i = 0; i < options.length; i++) {
        $("#" + DivId).append("<option  value='" + options[i] + "' >" + options[i] + "</option>");
    }
    $("#" + DivId).val(name);
}
function  deleteFFHM(id) {

    $.post(server_base_url + "financial/common/FundHeadMapping/Delete", {
        objId: id
    }).done(function(data) {
        if (BasicIfElseForTable(data, MsgDivInTableCF)) {
            financialfundHeadMappingBody(DashboardMainDivID);
            displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
            clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
        }
    });
}

