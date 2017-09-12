/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayDDoHeadCodeMapping() {
    //scrolupfunction();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetCommonMenuTabs()">Common Master</a></label> >> <label>DDO HeadCode Mapping</label>');


    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   class='pal'/>");
    if (checkUserPrivelege(pvCreateHeadCode)) {
        $("#mainTabMenu").append("<div id='tableHeader' />");
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>DDO Head Code Mapping</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colDDOHeadCodeMapping'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colDDOHeadCodeMapping").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colDDOHeadCodeMapping span").hasClass("glyphicon-minus-sign")) {
                $("#colDDOHeadCodeMapping").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colDDOHeadCodeMapping").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
//    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        $("#FieldGroup").append("<input type='hidden' id='idValue' >");
        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        $("#Row1Col2").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));

        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel("Sector", "required") + "" + getDropDown("sector"));

        getOneColumnInRow("FieldGroup", "Row3", "Row2Col1a");
        $("#Row2Col1a").append(getLabel("HeadCode", "required"));

        getThreeColumnInRow("FieldGroup", "Row4", "Row2Cola", "Row2Col2a", "Row2Col3a");
        $("#Row2Cola").append("<select name='from' id='multiselect' class='form-control' size='8' multiple='multiple'></select>");
        $("#Row2Col2a").append("<button type='button' id='multiselect_rightAll' class='btn btn-block'><i class='glyphicon glyphicon-forward'></i></button>\n\
     <button type='button' id='multiselect_rightSelected' class='btn btn-block'><i class='glyphicon glyphicon-chevron-right'></i></button><button type='button' id='multiselect_leftSelected' class='btn btn-block'><i class='glyphicon glyphicon-chevron-left'></i></button><button type='button' id='multiselect_leftAll' class='btn btn-block'><i class='glyphicon glyphicon-backward'></i></button>");
        $("#Row2Col3a").append("<select name='to' id='multiselect_to' class='form-control' size='8' multiple='multiple'></select>");
        $('#multiselect').multiselect();


        $("#panelMainBody").append("<div id='saveButton' class='row' />");
        $("#saveButton").append("<div  class='col-xs-12'/><center><button type='button' value='Save' class='btn btn-success mr5 '  onclick='ddoHeadCodeMappingValidate()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetddoHeadCodeMapping()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");



    }
    if (checkUserPrivelege(pvViewHeadCode)) {
        $("#mainTabMenu").append("<div id='tableHeaderForList1'/>");
        $("#tableHeaderForList1").text("").append("<div id='mdfpanelFirstPanel' class='panel panel-blue' />");
        $("#mdfpanelFirstPanel").append("<div id='religionListPanelHeading' class='panel-heading' />");
        $("#religionListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");

        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#budgetTypepanel'><center>List of DDO Head Code Mapping Details</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colDDOHeadMappingList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");

        $("#mdfpanelFirstPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colDDOHeadMappingList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colDDOHeadMappingList span").hasClass("glyphicon-minus-sign")) {
                $("#colDDOHeadMappingList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colDDOHeadMappingList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    }
    $("#sector").attr("onchange", "getHeadCodeDDOHeadMapp()");
    $("#fundType").attr("onchange", "getHeadCodeDDOHeadMapp()");
    getLoggedInDDOInDropDown("ddo", "");
    //  getHeadCodeDDOHeadMapp();
    fundTypeDDOHeadMapp();
    //   getDDOforDDOHeadMapp();
    getSectorDDOHeadMapp();
    viewddoHeadList('listpanelMainBody');
}
function resetddoHeadCodeMapping()
{
    $('#sector').val("");
    $('#fundType').val("");
    $("#pregppid").text("");
    $("#pregppid1").text("");
    $("#pregsuccessBefore").text("");
    $("#multiselect_leftAll").trigger('click');
    $("#multiselect_to").text("").val();
}
function ddoHeadCodeMappingValidate() {

    var sector = $("#sector").val();
    var fundType = $("#fundType").val();
    var ddo = $("#ddo").val();
    if (sector == "" || sector == null) {
        $("#description").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please Select Sector.");
    } else if (fundType == "" || fundType == null) {
        $("#order").focus();
        $("#pregppid1").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please Select Fund Type.");

    } else if (ddo == "" || ddo == null) {
        $("#order").focus();
        $("#pregppid1").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please select DDO.");

    } else
    {

        $("#pregsuccessBefore").text("").val("");
        $("#pregsuccessBefore").val("");
        ddoSave();
    }

}

function viewddoHeadList(divId) {
    if (checkUserPrivelege(pvViewHeadCode)) {
        $("#" + divId).text("").append("<div id='ErrorDiv'/>");
        $("#" + divId).append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
        $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
        $("#viewDataTableDiv").append("<table class='table table-bordered' id='displayFHMTable' />");


        $("#displayFHMTable").append("<thead class=''><tr id='displayDDOHEADCODEMAPPINGTrHead'>"
                //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>DDO</th>"
                + "<th style='min-width:30%;max-width: 100px;'><i class='glyphicon'></i>Head Code</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Sector</th>");
        if (checkUserPrivelege(pvUpdateHeadCode)) {
            $("#displayDDOHEADCODEMAPPINGTrHead").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteHeadCode)) {
            $("#displayDDOHEADCODEMAPPINGTrHead").append("<th style='min-width:1%;width:80px;''><i class='fa' style='font-size:21px;'></i> Delete</th>");
        }


        $.get(server_base_url + "budget/master/ddoHeadCodeMapping/View", {
        }).done(function (pdata) {

            if (pdata != null) {
                if (pdata.length > 0) {

                    var sno = 0;

                    $("#displayFHMTable").append("<tbody id='displayFHMTableBody'/>");

                    for (var i = pdata.length - 1; i >= 0; i--) {
                        sno++;
                        var objJson = {
                            objId: pdata[i]._id.$oid,
                            ddo: pdata[i].ddo,
                            sector: pdata[i].sector,
                            fundType: pdata[i].fundType,
                            headCode: pdata[i].headCode,
                            headCodeName: pdata[i].headCodeName,
                            fundTypeId: pdata[i].fundTypeId,
                            sectorId: pdata[i].sectorId
                        }
                        objJson = JSON.stringify(objJson);
                        $("#displayFHMTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].ddo + "</td>"
                                + "<td style='cursor:pointer; word-break: break-word'>" + pdata[i].headCodeName + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].sector + "</td>");
                        if (checkUserPrivelege(pvUpdateHeadCode)) {
                            $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateddoFHM('" + encodeURI(objJson) + "','" + pdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>");
                        }
                        if (checkUserPrivelege(pvDeleteHeadCode)) {
                            $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteddoFHMdata','viewddoHeadList','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");
                        }
                    }
                    $("#displayFHMTable").dataTable();
                }
            }
        });
    }
}


function deleteddoFHMdata(id) {
    if (checkUserPrivelege(pvDeleteHeadCode)) {
        $.post(server_base_url + "/budget/master/DDOHeadCodeMapping/Delete", {
            id: id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");

            } else {
                displaySuccessMessages("ErrorDiv", deleteMessage, "");
                setTimeout(function () {
                    viewddoHeadList('listpanelMainBody');
                }, 1000);

            }


        });
    }

}
function  updateddoFHM(obj, id) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#displayFHMTable tr").css("background-color", "white");
    $("#displayFHMTable tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#FieldGroup").append("<input type='hidden' id='objId' value='" + id + "'>");
    $("#saveButton").text("").append("<div  class='col-xs-12' /><center><button type='button'  value='Update' class='btn btn-success  mr5' onclick='ddoHeadCodeUpdate()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick=displayDDoHeadCodeMapping('dashBoardBodyMainDiv') class='btn btn-warning mr5' name='reset' value='reset'>Back</button></center></div>");
    fundTypeDDOHeadMappupdate(obj.fundType);
    getDDOforDDOHeadMappupdate(obj.ddo);
    getSectorDDOHeadMappupdate(obj.sector);
    getHeadCodeDDOHeadMappupdate(obj.headCodeName, "multiselect", obj.sectorId, obj.fundTypeId);
    getHeadCodetoDDOHeadMappupdate(obj.headCode, obj.headCodeName, "multiselect_to");

}
function fundTypeDDOHeadMappupdate(name) {
    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function (bdata) {
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                if (name == bdata[i].description) {
                    $("#fundType").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].description + "</option>");
                } else {
                    $("#fundType").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
                }
            }
    });
}
function getSectorDDOHeadMappupdate(name)
{
    $.get(server_base_url + "/budget/master/BudgetSector/View", {
    }).done(function (pdata) {

        $("#sector").append("<option value =''>---- Select Sector ----</option>");
        var sno = 0;
        var mainData = pdata.result;

        for (var i = 0; i < mainData.length; i++) {
            var subData = mainData[i];
            if (name == subData.description) {
                $("#sector").append("<option value='" + subData._id.$oid + "' selected>" + subData.description + "</option>");
            } else {
                $("#sector").append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
            }
        }


    });
}
function getDDOforDDOHeadMappupdate(name)
{

    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (bdata) {
        for (var i = 0; i < bdata.length; i++) {
            if (name == bdata[i].ddoName) {
                $("#ddo").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].ddoName + "</option>");
            } else {
                $("#ddo").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].ddoName + "</option>");
            }

        }
    });
}
function getHeadCodeDDOHeadMappupdate(removeOptions, DivId, sector, fundtype) {
    $.get(server_base_url + "/Budget/BudgetCommon/BudgetBasedonFundTypeSector", {
        sector: sector,
        fundType: fundtype
    }).done(function (bdata) {
        if (bdata != null)
        {
            $("#multiselect").text("");

            for (var i = 0; i < bdata.length; i++)
            {

                var result = 1;
                for (var j = 0; j < removeOptions.length; j++) {

                    if (bdata[i].budgetHead == removeOptions[j]) {
                        result = 0;
                    }
                }
                if (result != 0) {
                    $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' >" + bdata[i].budgetHead + "</option>");
                }
            }

        }
    });
//    $.get(server_base_url + "hrms/common/BudgetHead/View", {
//    }).done(function(pdata) {
//        for (var i = 0; i < pdata.length; i++) {
//            var result = 1;
//            for (var j = 0; j < removeOptions.length; j++) {
//
//                if (pdata[i].budgetHead == removeOptions[j]) {
//                    result = 0;
//                }
//            }
//            if (result != 0) {
//                $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].budgetHead + "</option>");
//            }
//        }
//    });
}
function getHeadCodetoDDOHeadMappupdate(id, headCodeName, DivId) {
    for (var i = 0; i < headCodeName.length; i++) {
        $("#" + DivId).append("<option value='" + id[i] + "' >" + headCodeName[i] + "</option>");
    }
}
function ddoHeadCodeUpdate() {
    if (checkUserPrivelege(pvUpdateHeadCode)) {
//    $("#displayFHMTableBody tr").css("background-color", "white");
//    $("#displayFHMTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        var id = $("#objId").val();
        var rolesList = [];
        var abc = document.getElementById("multiselect_to");
        for (var i = 0; i < abc.options.length; i++) {
            rolesList.push(abc.options[i].value);
        }
        var deptJson = {};
        deptJson["headCode"] = rolesList;
        deptJson["fundType"] = $("#fundType").val();
        deptJson["sector"] = $("#sector").val();
        deptJson["ddo"] = $("#ddo").val();
        deptJson = JSON.stringify(deptJson);
        $.post(server_base_url + "/budget/master/DDOHeadCodeMapping/Update", {
            ddoJson: deptJson,
            id: id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else {

                displaySuccessMessages("pregsuccessBefore", updateMessage, "");
                setTimeout(function () {
                    displayDDoHeadCodeMapping();
                }, 1000);
            }
        });
    }
}


function ddoSave() {
    if (checkUserPrivelege(pvCreateHeadCode)) {
        var rolesList = [];
        var abc = document.getElementById("multiselect_to");
        for (var i = 0; i < abc.options.length; i++) {
            rolesList.push(abc.options[i].value);
        }
        var deptJson = {};
        deptJson["headCode"] = rolesList;
        deptJson["fundType"] = $("#fundType").val();
        deptJson["sector"] = $("#sector").val();
        deptJson["ddo"] = $("#ddo").val();
        deptJson = JSON.stringify(deptJson);
        $.post(server_base_url + "/budget/master/DDOHeadCodeMapping/Save", {
            ddoJson: deptJson,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else if (data == duplicate) {
                displaySuccessMessages("pregsuccessBefore", "" + existed + "<br /><br />");
                displaySuccessMessages("pregsuccessAfter", "" + existed + "<br /><br />");
                setTimeout(function () {
                    displayDDoHeadCodeMapping();
                }, 500);
            } else {
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function () {
                    displayDDoHeadCodeMapping();
                }, 500);
            }
        });
    }
}
function getHeadCodeDDOHeadMapp() {
    $.get(server_base_url + "/Budget/BudgetCommon/BudgetBasedonFundTypeSector", {
        sector: $("#sector").val(),
        fundType: $("#fundType").val()
    }).done(function (bdata) {

        if (bdata != null)
        {
            $("#multiselect").text("");
            if (bdata == null || bdata == "" || bdata == 500)
            {
                $("#multiselect").append("<option value=''>" + NoDataFound + "</option>");

            } else
            {
                for (var i = 0; i < bdata.length; i++)
                {
                    $("#multiselect").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].budgetHead + "</option>");

                }
            }
        }
    });
}
function fundTypeDDOHeadMapp() {
    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function (bdata) {
        $("#fundType").append("<option value=''>---------Select FundType-------------</option>");
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#fundType").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
            }
    });
}
function getSectorDDOHeadMapp()
{
    $.get(server_base_url + "/budget/master/BudgetSector/View", {
    }).done(function (bdata) {
        $("#sector").append("<option value='' selected>---------Select Sector-------------</option>");
        var sno = 0;
        var mainData = bdata.result;

        for (var i = 0; i < mainData.length; i++) {
            var subData = mainData[i];
            $("#sector").append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
        }
    });
}
function getDDOforDDOHeadMapp()
{
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (bdata) {
        $("#ddo").append("<option value=''>---------Select DDO-------------</option>");
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#ddo").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].ddoName + "</option>");
            }
    });
}