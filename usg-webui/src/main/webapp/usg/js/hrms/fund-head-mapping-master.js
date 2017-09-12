/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Start Display page
var headModuleFunctionValue;
var headModule;
var moduleFunctionValue;
function dispalyhrmsCommonFundHeadMapping(headModuleFunction, headModule, moduleFunction) {
    createFormFundHeadMapping(headModuleFunction, headModule, moduleFunction);
    if (checkUserPrivelege(pvViewFundHeadMapping)) {
        fetchAllFundHeadMappingMasterList();
    }
    headModuleFunctionValue = headModuleFunction;
    headModuleValue = headModule;
    moduleFunctionValue = moduleFunction;


}
//End Display page

function createFormFundHeadMapping(headModuleFunctionValue, headModuleValue, moduleFunctionValue) {
    scrolupfunction();
    var headFunction = headModuleFunctionValue + "()";
    var functionName = moduleFunctionValue + "()";
//    $("#dashboardTitleMainDiv").text("").append(headModule);
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:' + headFunction + '">' + headModuleValue + '</a></label>><label><a href="javascript:' + functionName + '">Common Master</a></label> ><label>Fund Head Mapping</label>');
    $("#dashboardBodyMainDiv").text("").append("<div id='fundheadmappingMainDiv' class='row'/>");
    $("#fundheadmappingMainDiv").text("").append("<div id='fundheadmappingcolumnDiv' class='col-lg-12' />");
    if (checkUserPrivelege(pvCreateFundHeadMapping)) {
        $("#fundheadmappingcolumnDiv").append("<div id='fundheadmappingpanelDiv' class='panel panel-blue'>");
        $("#fundheadmappingpanelDiv").append("<div id='fundheadmappingpanelHeadingDiv' class='panel-heading'>");
        $("#fundheadmappingpanelHeadingDiv").append("<h4 id='fundheadmappingHeader' class='panel-title' />");
        $("#fundheadmappingHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Fund Head Mapping</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colFundHeadMapping'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#fundheadmappingpanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colFundHeadMapping").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colFundHeadMapping span").hasClass("glyphicon-minus-sign")) {
                $("#colFundHeadMapping").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colFundHeadMapping").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='fundheadmappingpanelBodyDiv' class='panel-body pan'>");
        $("#fundheadmappingpanelBodyDiv").append("<div id='row1' class='row'>");

        $("#row1").append("<center><div id='pregsuccessBefore'></div></center>");
        $("#row1").append("<div id='FieldGroup' class='form-group'/>");

        getTwoColumnInRow("FieldGroup", "Row1", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundtype"));
        $("#Row2Col2").append(getLabel("Sector", "required") + "" + getDropDown("sector"));

        getOneColumnInRow("FieldGroup", "Row2", "Row2Col1a");
        $("#Row2Col1a").append(getLabel("HeadCode", "required"));

        getThreeColumnInRow("FieldGroup", "Row3", "Row2Cola", "Row2Col2a", "Row2Col3a");
        $("#Row2Cola").append("<select name='from' id='multiselect' class='form-control' size='8' multiple='multiple'></select>");
        $("#Row2Col2a").append("<button type='button' id='multiselect_rightAll' class='btn btn-block'><i class='glyphicon glyphicon-forward'></i></button>\n\
     <button type='button' id='multiselect_rightSelected' class='btn btn-block'><i class='glyphicon glyphicon-chevron-right'></i></button><button type='button' id='multiselect_leftSelected' class='btn btn-block'><i class='glyphicon glyphicon-chevron-left'></i></button><button type='button' id='multiselect_leftAll' class='btn btn-block'><i class='glyphicon glyphicon-backward'></i></button>");
        $("#Row2Col3a").append("<select name='to' id='multiselect_to' class='form-control' size='8' multiple='multiple'></select>");
        $('#multiselect').multiselect();

        $("#FieldGroup").append("<div id='ButtonRow' class='row' />");
        var buttonValue = $("#fundheadmappingSaveandUpdateButton").val();
        var updateButton = "update";
        if (buttonValue == updateButton) {

        } else {
            addFundtype();
            getbudgetheadFundheadmapping();
            getSectorType();
        }
        $("#ButtonRow").append("<input type='hidden' id='idValue'><div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='fundheadmappingSaveandUpdateButton' value='save' class='btn btn-success bn'  onclick='fundheadmappingValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
     <button type='button' onclick='wipeAllfundheadmapping1()' id='fundheadMappingResetButton' class='btn btn-warning bn' name='reset' value='reset'>Reset</button></center></div>");

    }


}
//Start Field Validation Function
function fundheadmappingValidation()
{
    var length;

    length = $('#multiselect_to option').length;

    var result = 0;
    fundHeadMappingDisableButton();
    var ftype = $("#fundtype").val();
    var sector = $("#sector").val();


    if (ftype == undefined || ftype == null || ftype == "" || ftype == 0 || sector == null || sector == "" || length == 0) {
        fundHeadMappingEnableButton();
        $("#fundheadmappingFormGroupDiv").addClass("form-group state-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please fill all(*) the fields");
        result = 1;
        return false;
        //  return false;
    }

    if (result != 1) {


        var buttonValue = $("#fundheadmappingSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            saveFundHeadMapping();
        } else if (buttonValue == updateButton) {
            saveupdateFundHeadMapping();

        }
    }
}
function fetchAllFundHeadMappingMasterList() {
    if (checkUserPrivelege(pvViewFundHeadMapping)) {
        $("fundheadmappingMasterTableListPanel").remove();
        $("#fundheadmappingcolumnDiv").append("<div id='fundheadmappingMasterTableListPanel' class='panel panel-blue'/>");
        $("#fundheadmappingMasterTableListPanel").append("<div id='fundheadmappingMasterTableHeading' class='panel-heading' />");
        $("#fundheadmappingMasterTableHeading").append("<h4 id='fundheadmappingMasterTableHeader' class='panel-title' />");
        $("#fundheadmappingMasterTableHeader").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Fund Head Mapping(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colFundHeadMappingList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#fundheadmappingMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colFundHeadMappingList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colFundHeadMappingList span").hasClass("glyphicon-minus-sign")) {
                $("#colFundHeadMappingList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colFundHeadMappingList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='fundheadmappingListPanelTableMainDiv' class = 'panel-body' />");
        $("#fundheadmappingListPanelTableMainDiv").append("<div id='tablesuccessBefore'></div>");
        $("#fundheadmappingListPanelTableMainDiv").append("<div id='fundheadmappingListPanelRow' class = 'row' />");

        $("#fundheadmappingListPanelRow").append("<center><div class='tab-pane' id='viewUser'/></center>");
        $("#viewUser").append("<div id='fundheadmappingMastertableresponsiveDiv' class='table-responsive' />");
        $("#fundheadmappingMastertableresponsiveDiv").append('<table id="example1" class="table table-bordered">');

        //Start Header
        $("#example1").append("<thead class=''><tr id='fundHeadMappingTableHeadId'>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Fund Type</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Sector</th>");
        if (checkUserPrivelege(pvUpdateFundHeadMapping)) {
            $("#fundHeadMappingTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteFundHeadMapping)) {
            $("#fundHeadMappingTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>");
        }
        //End Header
        $.get(server_base_url + "hrms/common/FundHeadMapping/View", {
        }).done(function (pdata) {

            if (pdata == fail) {
                fundHeadMappingEnableButton();
                $("#tablesuccessBefore").append('<tr class="odd"><td valign="top" colspan="4" class="dataTables_empty">' + NoDataFoundMessage + '</td></tr>');
            } else if (pdata.statuscode == unauthorized) {
                fundHeadMappingEnableButton();
                $("#displaycateTableBody").append('<tr class="odd"><td valign="top" colspan="4" class="dataTables_empty">' + unauthorizedMessage + '</td></tr>');
                //$("#displaycateTableBody").append("<tr> "+ unauthorizedMessage+"</tr>");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == statusException) {
                fundHeadMappingEnableButton();
                $("#displaycateTableBody").append('<tr class="odd"><td valign="top" colspan="4" class="dataTables_empty">' + statusExceptionMessage + '</td></tr>');
                //$("#displaycateTableBody").append("<tr> "+ unauthorizedMessage+"</tr>");
            } else if (pdata == null) {
                $("#displaycateTableBody").append('<tr class="odd"><td valign="top" colspan="4" class="dataTables_empty">No User Availbale</td></tr>');
                //$("#displaycateTableBody").append("<tr> "+ unauthorizedMessage+"</tr>");
            } else {

                if (pdata != null) {
                    if (pdata.length > 0) {

                        var sno = 0;

                        $("#example1").append("<tbody id='displayFHMTableBody'/>");

                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;
                            var objJson = {
                                objId: pdata[i]._id.$oid,
                                sector: pdata[i].sector,
                                fundType: pdata[i].fundType,
                                headCodeList: pdata[i].headCode
                            }
                            objJson = JSON.stringify(objJson);

                            $("#example1").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].fundType + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].sector + "</td>");
                            if (checkUserPrivelege(pvUpdateFundHeadMapping)) {
                                $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updateFHM('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'>&nbsp;&nbsp;</i><span>Edit</span></a></td>");
                            }
                            if (checkUserPrivelege(pvDeleteFundHeadMapping)) {
                                $("#" + pdata[i]._id.$oid).append("<td><a href='javascript:void(0);' onclick=deletePopUp('deleteFHM','relationMasterTableListPanel','" + pdata[i]._id.$oid + "')  class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
                            }


                        }

                    }
                }
            }
            $("#example1").dataTable();


        });
    }
}

function addFundtype()
{
    $("#fundtype").text("").append("<option value='0' selected>---Select Fund Type---</option>");

    //$.get(server_base_url + "hrms/common/FundType/Viewlist", {
    $.get(server_base_url + "budget/master/FundType/View", {
    }).done(function (bdata) {
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#fundtype").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");


            }
    });
}

function getbudgetheadFundheadmapping() {
    $("#multiselect").empty();
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function (bdata) {

        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#multiselect").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].budgetHead + "</option>");
            }
    });
}

function getSectorType(name) {
    $("#sector").text("").append("<option value=''>---------Select Sector-------------</option>");
    $.get(server_base_url + "/budget/master/BudgetSector/View", {
    }).done(function (bdata) {

        if (bdata != null) {

            var mainData = bdata.result;

            for (var i = mainData.length - 1; i >= 0; i--) {

                var subData = mainData[i];
                if (name == subData.description) {
                    $("#sector").append("<option value='" + subData._id.$oid + "' selected>" + subData.description + "</option>");
                } else {
                    $("#sector").append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
                }

            }
        } else {
            $("#sector").append("<option value=''>----No data available----</option>");
        }

    });

}
function saveFundHeadMapping() {

    if (checkUserPrivelege(pvCreateFundHeadMapping)) {

        var rolesList = [];
        var abc = document.getElementById("multiselect_to");

        for (var i = 0; i < abc.options.length; i++) {
            rolesList.push({
                headCode: abc.options[i].value,
                fundType: $("#fundtype").val(),
                sector: $("#sector").val()
            });
        }
        rolesList = JSON.stringify(rolesList);

        var id = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/FundHeadMapping/Save", {
            ddoJson: rolesList,
            userid: id

        }).done(function (data) {
            // alert(data)
            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "" + failMessage + "");
                fundHeadMappingEnableButton();
                // displaySmallErrorMessagesInRed("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (data.statuscode == unauthorized) {
                //displaySmallErrorMessagesInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                fundHeadMappingEnableButton();
                displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                fundHeadMappingEnableButton();
                // displaySmallErrorMessagesInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
            } else if (data == "existed") {
                displayErrorMessages("pregsuccessBefore", existed, "");
                setTimeout(function () {
                    dispalyhrmsCommonFundHeadMapping(headModuleFunctionValue, headModuleValue, moduleFunctionValue);
                }, 3000);
            } else {

                displaySuccessMessages("pregsuccessBefore", "" + successMessage + "");
                // $("#pregsuccessBefore").append("<span style='color:green;'><center><strong>" + successMessage + "</strong></center></span><br><br>");
                setTimeout(function () {
                    dispalyhrmsCommonFundHeadMapping(headModuleFunctionValue, headModuleValue, moduleFunctionValue)
                }, 3000);


            }

        });
    }
}

//Start Button Disble and Enable Function
function fundHeadMappingDisableButton() {
    $("#fundheadmappingSaveandUpdateButton").attr('disabled', true);
    $("#fundheadMappingResetButton").attr('disabled', true);
}
function fundHeadMappingEnableButton() {
    $("#fundheadmappingSaveandUpdateButton").attr('disabled', false);
    $("#fundheadMappingResetButton").attr('disabled', false);
}
//End Button Disble and Enable Function

//Start Delete Function 
function deleteFHM(id)
{
    // if (confirm("Are you sure?")) {
    //  $(this).closest('tr').remove();
    deletefundHeadMapping(id);
    // }
}
function  deletefundHeadMapping(id) {

    if (checkUserPrivelege(pvDeleteFundHeadMapping)) {

        $.post(server_base_url + "hrms/common/FundHeadMapping/Delete", {
            id: id

        }).done(function (data) {

            if (data == fail) {
                // displaySmallErrorMessagesInRed("tablesuccessBefore", "" + failMessage + "<br /><br />");
                displayErrorMessages("tablesuccessBefore", "" + failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("tablesuccessBefore", "" + unauthorizedMessage + "");
                displayErrorMessages("tablesuccessBefore", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {

                displayErrorMessages("tablesuccessBefore", "" + statusExceptionMessage + "");
            } else {

                displaySuccessMessages("tablesuccessBefore", "" + deleteMessage + "");
                //  $("#tablesuccessBefore").append("<span style='color:green;'><center><strong>" + deleteMessage + "</strong></center></span><br><br>");
                setTimeout(function () {
                    dispalyhrmsCommonFundHeadMapping(headModuleFunctionValue, headModuleValue, moduleFunctionValue);
                }, 3000);

            }
        });
    }
}

//Start Update Function
function updateFHM(obj)
{

    $("#pregsuccessBefore").text("");
    obj = decodeURI(obj);
    obj = JSON.parse(obj);

    // dispalyhrmsCommonFundHeadMapping();
    getSectorType(obj.sector);
    // $("#sector option:contains(" + obj.sector + ")").attr('selected', 'selected');
    fetchFundtypeupdateFHM(obj.fundType);
    getHeadCodesListForFHM(obj.headCodeList, "multiselect");
    getSectorListForFHM(obj.headCodeList, "multiselect_to");
    //getSectorTypeupdateFHM(obj.sector);
    $("#displayFHMTableBody tr").css("background-color", "white");
    $("#displayFHMTableBody tr" + "#" + obj.objId).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#fundheadmappingSaveandUpdateButton").text("Update");
    $("#fundheadmappingSaveandUpdateButton").val("update");
    $("#fundheadMappingResetButton").text("Back");
    $("#idValue").val(obj.objId);


}
function fetchFundtypeupdateFHM(name)
{
    $("#fundtype").text("").append("<option value='' selected>---Select fund Type----</option>");

    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function (bdata) {
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                if (name == bdata[i].description) {
                    $("#fundtype").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].description + "</option>");
                } else {
                    $("#fundtype").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
                }
            }
    });
}
function getSectorTypeupdateFHM(name)
{
    $("#sector").text("").append("<option value='' selected>---Select Sector----</option>");

    $.get(server_base_url + "/budget/master/BudgetSector/View", {
    }).done(function (bdata) {

        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                if (name == bdata[i].description) {
                    $("#sector").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].description + "</option>");
                } else {
                    $("#sector").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
                }
            }
    });
}
function getHeadCodesListForFHM(removeOptions, DivId) {

    $("#" + DivId).empty();
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function (pdata) {
        if (pdata != null) {
            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {

                    if (pdata[i]._id.$oid == removeOptions) {

                    } else {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].budgetHead + "</option>");
                    }
                }
            }
        }
    });
}
function getSectorListForFHM(name, DivId) {
    $("#" + DivId).empty();
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function (pdata) {
        if (pdata != null) {
            if (pdata.length > 0) {
                for (var i = 0; i < pdata.length; i++) {

                    if (pdata[i]._id.$oid == name) {
                        $("#" + DivId).append("<option  value='" + pdata[i]._id.$oid + "' >" + pdata[i].budgetHead + "</option>");

                    } else {
                    }
                }
            }
        }
    });


}
function saveupdateFundHeadMapping() {
    if (checkUserPrivelege(pvUpdateFundHeadMapping)) {

        var id = $("#idValue").val();

        var rolesList = [];
        var abc = document.getElementById("multiselect_to");

        for (var i = 0; i < abc.options.length; i++) {


            rolesList.push({
                headCode: abc.options[i].value,
                fundType: $("#fundtype").val(),
                sector: $("#sector").val()
            });
        }
        rolesList = JSON.stringify(rolesList);
        var userid = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/FundHeadMapping/Update", {
            fundListJson: rolesList,
            id: id,
            userid: userid
        }).done(function (data) {

            if (data == fail) {
                fundHeadMappingEnableButton();
                //  displaySmallErrorMessagesInRed("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayErrorMessages("pregsuccessAfter", "" + failMessage + "");
            } else if (data.statuscode == unauthorized) {
                fundHeadMappingEnableButton();
                //   displaySmallErrorMessagesInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                fundHeadMappingEnableButton();
                //    displaySmallErrorMessagesInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
            } else if (data == "duplicate") {
                displayErrorMessages("pregsuccessBefore", existed, "");
                setTimeout(function () {
                    dispalyhrmsCommonFundHeadMapping(headModuleFunctionValue, headModuleValue, moduleFunctionValue);
                }, 3000);
            } else {

                displaySuccessMessages("pregsuccessBefore", updateMessage, "");
                // $("#pregsuccessBefore").append("<span style='color:green;'><center><strong>" + updateMessage + "</strong></center></span><br><br>");
                setTimeout(function () {
                    dispalyhrmsCommonFundHeadMapping(headModuleFunctionValue, headModuleValue, moduleFunctionValue);
                }, 3000);
                // displaySuccessMessages("pregsuccessBefore", "" + successMessage + "<br /><br />");

            }

        });
    }
}

//End Update Function
function wipeAllfundheadmapping1() {
    dispalyhrmsCommonFundHeadMapping(headModuleFunctionValue, headModuleValue, moduleFunctionValue);
//    $('select[multiple]').empty();
//    addFundtype();
//    getbudgetheadFundheadmapping();
//    getSectorType();
}