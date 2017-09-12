/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var budgetheadModuleFunctionValue;
var budgetheadModule;
var budgetmoduleFunctionValue;

function dispalyhrmsCommonBudgetHeadMaster(headModuleFunctionValue, headModuleValue, moduleFunctionValue) {
    createBudgetHeadForm(headModuleFunctionValue, headModuleValue, moduleFunctionValue);
    SearchBhdgetHeadForm();
    displayTable();
    budgetheadModuleFunctionValue = headModuleFunctionValue;
    budgetheadModule = headModuleValue;
    budgetmoduleFunctionValue = moduleFunctionValue;
}
function displayTable() {
    scrolupfunction();
    if (checkUserPrivelege(pvViewBudgetHead)) {
        $("#tableHeaderForList1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>List of Budget Head(s)</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colBudgetHeadList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colBudgetHeadList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colBudgetHeadList span").hasClass("glyphicon-minus-sign")) {
                $("#colBudgetHeadList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colBudgetHeadList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");

        $("#listpanelMainBody").append("<div  id='ErrorDiv'/>");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");


        $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displayBudgetHeadTable' />");
        $("#displayBudgetHeadTable").append("<thead class=''><tr>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Govt Budget Head</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Fund Type</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Fund Category</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Budget Head Description</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Is Active?</th>"
                + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
                + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>"
                + "</tr></thead>");
        var sno = 0;
        ///hrms/common/BudgetHead/Fetchall
        $.get(server_base_url + "/hrms/common/BudgetHeads/List", {
        }).done(function (bdata) {

            for (var i = 0; i < bdata.length; i++) {

                sno++;
                var bHMJson = {
                    bid: bdata[i]._id.$oid,
                    govtBudgetHead: bdata[i].govtBudgetHead,
                    fundType: bdata[i].fundType,
                    fundCategory: bdata[i].fundCategory,
                    budgetHead: bdata[i].budgetHead,
                    budgetHeadDescription: bdata[i].budgetHeadDescription,
                    underBudgetHead: bdata[i].underBudgetHead,
                    remarks: bdata[i].remarks,
                    isActive: bdata[i].isActive
                };

                bHMJson = JSON.stringify(bHMJson);
                $("#displayBudgetHeadTable").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].govtBudgetHead + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].budgetHead + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].fundType + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].fundCategory + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadDescription + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].isActive + "</td>");
                if (checkUserPrivelege(pvUpdateBudgetHead)) {
                    $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateBHM('" + encodeURI(bHMJson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                }
                if (checkUserPrivelege(pvDeleteBudgetHead)) {
                    $("#" + bdata[i]._id.$oid).append("<td onclick=onclick=deletePopUp('deleteBHM','displayTable','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                }

            }
            $('#displayBudgetHeadTable').dataTable();

        });

    }


}
function createBudgetHeadForm(headModuleFunctionValue, headModuleValue, moduleFunctionValue) {
    var headFunction = headModuleFunctionValue + "()";
    var functionName = moduleFunctionValue + "()";
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:' + headFunction + '">' + headModuleValue + '</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:' + headFunction + '">' + headModuleValue + '</a></label>><label><a href="javascript:' + functionName + '">Common Master</a></label> ><label>Budget Head Master</label>');

    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   class='pal'/>");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateBudgetHead)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center><strong>Budget Head Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseBudgetHead'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#collapseBudgetHead").click(function () {
            $("#collapseOne2").toggle();
            if ($("#collapseBudgetHead span").hasClass("glyphicon-minus-sign")) {
                $("#collapseBudgetHead").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseBudgetHead").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        $("#FieldGroup").append("<input type='hidden' id='idValue' >");


        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");

        $("#Row1Col1").append(getLabel("Government Budget Head", "required") + "" + getDropDown("GovernmentBudgetHead"));
        $("#Row1Col2").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));

        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");

        $("#Row2Col1").append(getLabel("Fund Category", "required") + "" + getDropDown("fundCategory"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Budget Head", "required", "budgetHead", "Enter Budget Head", ""));

        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");

        $("#Row3Col1").append(getLabel_InputWithSpan("Budget Head Description", "required", "budgetHeadDes", "Enter Budget Head Description", ""));
        $("#Row3Col2").append(getLabel("Under Budget Head", "") + "" + getDropDown("underBudgetHead"));

        getfundTypes("");
        GovtBudgetHeadForBudgetHead("");
        getFundcategoryforbudgethead("");
        getUnderBudgetHead("");

        getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append('<label for="remarks" class="control-label">Remarks</label>');
        $("#Row4Col1").append('<textarea id="remarks" type="text"  class="form-control"/>');

        $("#Row4Col2").append(getLabel("Is Active", "") + "" + getCheckBoxwithLabel("isActive"));

        $("#FieldGroup").append("<div id='panelRow1' class='row' />");
        $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='BudgetHeadSaveandUpdateButton' value='save' class='btn btn-success'  onclick='budgetHeadValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='wipereset' onclick='wipeAllBudgetHead()' class='btn btn-warning' name='reset' value='reset'>Reset</button></center></div>");

        $("input").on("keypress", function (e) {
            if (e.keyCode == 32 && !this.value.length) {
                e.preventDefault();
            }
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

    }
    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");


    setTimeout(function () {
        fetchUnderBudgetHead();
    }, 1000);
}


function fetchUnderBudgetHead() {
    $("#underBudgetHead").text("").append("<option value='0'>----Select Budget Head----</option>");
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function (data) {

        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {

            for (var i = 0; i < data.length; i++) {
                var subData = data[i];
                $("#underBudgetHead").append("<option value='" + subData._id.$oid + "'>" + subData.budgetHead + "</option>");
            }
        }
    });
}


function SearchBhdgetHeadForm() {
    if (checkUserPrivelege(pvViewBudgetHead)) {
        $("#tableHeaderForList").append("<div id='searchFirstPanel' class='panel panel-blue ' />");
        $("#searchFirstPanel").append("<div id='searchfirstPanelHeading' class='panel-heading' />");
        $("#searchfirstPanelHeading").append("<h4 id='searchtableHeader1' class='panel-title' />");
        $("#searchtableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Search Criteria</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colSearchBudgetHead'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#searchFirstPanel").append("<div id='searchcollapseOne2' class='panel-collapse collapse in pal' />");
        $("#colSearchBudgetHead").click(function () {
            $("#searchcollapseOne2").toggle();
            if ($("#colSearchBudgetHead span").hasClass("glyphicon-minus-sign")) {
                $("#colSearchBudgetHead").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSearchBudgetHead").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#searchcollapseOne2").append("<div id='searchpanelMainBody' class = 'panel-body' />");
        $("#searchpanelMainBody").append("<div id='searchpanelRow' class='row' />");
//    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#searchpanelRow").append("<div id='pregsuccessBefore'></div>");
        $("#searchpanelRow").append("<div id='searchFieldGroup' class='form-group' />");

        getTwoColumnInRow("searchFieldGroup", "Row1a", "Row1Col1a", "Row1Col2a");

        $("#Row1Col1a").append(getLabel("Government Budget Head", "") + "" + getDropDownwithLabel("searchGovernmentBudgetHead"));
        $("#Row1Col2a").append(getLabel("Fund Type", "") + "" + getDropDownwithLabel("searchfundType"));

        getTwoColumnInRow("searchFieldGroup", "Row2a", "Row1Col1a", "Row1Col2");

        $("#Row1Col1a").append(getLabel("Fund Category", "") + "" + getDropDownwithLabel("searchfundCategory"));
        $("#Row1Col2a").append(getLabel_InputWithSpan("Budget Head", "", "searchbudgetHead", "Enter Budget Head", ""));

        getTwoColumnInRow("searchFieldGroup", "Row3a", "Row1Col1a", "Row1Col2a");

        $("#Row1Col1a").append(getLabel_InputWithSpan("Budget Head Description", "", "searchbudgetHeadDes", "Enter Budget Head Description", ""));

        $("#searchFieldGroup").append("<div id='searchpanelRow1' class='row' />");
        $("#searchpanelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='searchbutton' value='Save' class='btn btn-success'  onclick='searchBudget()'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllserachBudgetHead()' class='btn btn-warning' name='reset' value='reset'>Reset</button></center></div>");

    }
    $("#mainTabMenu").append("<div id='tableHeaderForList1'/>");

}


function  getFundcategoryforbudgethead(name) {
    $("#fundCategory").text("").append("<option value='' selected>---Select fund category----</option>");

    $.get(server_base_url + "financial/common/FundCategory/ViewList", {
    }).done(function (bdata) {
        $("#searchfundCategory").text("").append("<option value='' selected>---Select fund category----</option>");

        for (var i = 0; i < bdata.length; i++) {

            if (name == bdata[i].category) {
                $("#fundCategory").append("<option  value='" + bdata[i]._id.$oid + "'selected>" + bdata[i].category + "</option>");
            } else {
                $("#searchfundCategory").append("<option  value='" + bdata[i]._id.$oid + "'>" + bdata[i].category + "</option>");
                $("#fundCategory").append("<option  value='" + bdata[i]._id.$oid + "'>" + bdata[i].category + "</option>");
            }


        }
    });
}
function  GovtBudgetHeadForBudgetHead(name) {
    $("#GovernmentBudgetHead").text("").append("<option value='' selected>---Select Government Budget Head---</option>");
    $("#searchGovernmentBudgetHead").text("").append("<option value='' selected>---Select Government Budget Head---</option>");
    $.get(server_base_url + "financial/common/GovtBudgetHead/ViewList", {
    }).done(function (bdata) {
        $("#searchGovernmentBudgetHead").text("").append("<option value='' selected>---Select Government Budget Head---</option>");

        for (var i = 0; i < bdata.length; i++) {
            // var value = "+ bdata[i].majorHead + " - " + bdata[i].subMajorHead + " - " + bdata[i].minorHead + " - " + bdata[i].subMinorHead +" - " + bdata[i].order +";
            var value1 = bdata[i].majorHead;
            var value2 = "-" + bdata[i].subMajorHead;
            var value3 = "-" + bdata[i].minorHead;
            var value4 = "-" + bdata[i].subMinorHead;
            var value5 = "-" + bdata[i].order;
            var value = value1 + value2 + value3 + value4 + value5;


            if (name == value) {
                $("#GovernmentBudgetHead").append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].majorHead + "-" + bdata[i].subMajorHead + "-" + bdata[i].minorHead + "-" + bdata[i].subMinorHead + "-" + bdata[i].order + "</option>");
            } else {
                $("#GovernmentBudgetHead").append("<option  value='" + bdata[i]._id.$oid + "'>" + bdata[i].majorHead + "-" + bdata[i].subMajorHead + "-" + bdata[i].minorHead + "-" + bdata[i].subMinorHead + "-" + bdata[i].order + "</option>");
                $("#searchGovernmentBudgetHead").append("<option  value='" + bdata[i]._id.$oid + "'>" + bdata[i].majorHead + "-" + bdata[i].subMajorHead + "-" + bdata[i].minorHead + "-" + bdata[i].subMinorHead + "-" + bdata[i].order + "</option>");
            }
        }
    });
}

function  getfundTypes(name) {
    $("#fundType").text("").append("<option value='' selected>---Select Fund Type---</option>");

    $.get(server_base_url + "budget/master/FundType/View", {
    }).done(function (bdata) {
        $("#searchfundType").text("").append("<option value='' selected>---Select Fund Type---</option>");
        for (var i = 0; i < bdata.length; i++) {

            if (name == bdata[i].description) {
                $("#fundType").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].description + "</option>");
            } else {
                $("#searchfundType").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
                $("#fundType").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
            }


        }
    });
}
function getUnderBudgetHead(name) {

    $("#underBudgetHead").text("").append("<option value='' selected>---Select Budegt Head---</option>");

    $.get(server_base_url + "financial/common/UnderBudgetHead/ViewList", {
    }).done(function (bdata) {
        $("#searchunderBudgetHead").text("").append("<option value='' selected>---Select BudgetHead---</option>");
        for (var i = 0; i < bdata.length; i++) {

            if (name == bdata[i]._id.$oid) {
                $("#underBudgetHead").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].underBudgetHead + "</option>");
            } else {
                $("#searchunderBudgetHead").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].underBudgetHead + "</option>");
                $("#underBudgetHead").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].underBudgetHead + "</option>");
            }


        }
    });
}
function budgetHeadValidation() {
    var result = 1;
    if ($('#budgetHeadDes').val() == null || $('#budgetHeadDes').val() == "") {
        $("#budgetHeadDes").focus();
        $("#budgetHeadErr").text("").val();
        $("#underBudgetHeadErr").text("").val();
        displaySmallErrorMessagesInRed("budgetHeadDesErr", "Please Enter Budget Head Description.");
        result = 0;
    } else if ($('#budgetHeadDes').val() != null || $('#budgetHeadDes').val() != "") {
    }

    if ($('#budgetHead').val() == null || $('#budgetHead').val() == "") {
        $("#budgetHead").focus();
        $("#fundCategoryErr").text("").val();
        $("#budgetHeadDesErr").text("").val();
        displaySmallErrorMessagesInRed("budgetHeadErr", "Please Enter Budget Head.");
        result = 0;
    } else if ($('#grade').val() != null || $('#grade').val() != "") {
    }
    if ($('#fundCategory').val() == null || $('#fundCategory').val() == "") {
        $("#fundCategory").focus();
        $("#fundTypeErr").text("").val();
        $("#budgetHeadErr").text("").val();
        displaySmallErrorMessagesInRed("fundCategoryErr", "Please Select Fund Category.");
        result = 0;
    } else if ($('#fundCategory').val() != null || $('#fundCategory').val() != "") {
    }
    if ($('#fundType').val() == null || $('#fundType').val() == "") {
        $("#GovernmentBudgetHeadErr").text("").val();
        $("#fundType").focus();
        $("#fundCategoryErr").text("").val();
        displaySmallErrorMessagesInRed("fundTypeErr", "Please Select FundType.");
        result = 0;
    } else if ($('#fundType').val() != null || $('#fundType').val() != "") {
    }
    if ($('#GovernmentBudgetHead').val() == null || $('#GovernmentBudgetHead').val() == "") {
        $("#GovernmentBudgetHead").focus();
        $("#fundTypeErr").text("").val();
        displaySmallErrorMessagesInRed("GovernmentBudgetHeadErr", "Please Select Govt.Budget Head.");
        result = 0;
    } else if ($('#GovernmentBudgetHead').val() != null || $('#GovernmentBudgetHead').val() != "") {
    }
    if (result != 0) {
        $("#underBudgetHeadErr").text("").val();
        var buttonValue = $("#BudgetHeadSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            saveBudgetHeadinhrms();
        } else if (buttonValue == updateButton) {
            updateValues();

        }
    }
}

function saveBudgetHeadinhrms() {
    if (checkUserPrivelege(pvCreateBudgetHead)) {
        var govtBudgetHead = $('#GovernmentBudgetHead').val();
        var funfType = $('#fundType').val();
        var fundCategory = $('#fundCategory').val();
        var budgetHead = $('#budgetHead').val();
        var budgetHeadDes = $('#budgetHeadDes').val();
        var underBudgetHead = $('#underBudgetHead').val();
        var remarks = $('#remarks').val();
        var isActive = "";
        if ($('#isActive').prop('checked')) {
            isActive = "Yes"
        } else
        {
            isActive = "No";
        }

        var bJson = {
            govtBudgetHead: govtBudgetHead,
            fundType: funfType,
            fundCategory: fundCategory,
            budgetHead: budgetHead,
            budgetHeadDescription: budgetHeadDes,
            underBudgetHead: underBudgetHead,
            remarks: remarks,
            isActive: isActive
        }

        var id = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/BudgetHead/Save", {
            bJson: JSON.stringify(bJson),
            userid: id

        }).done(function (data) {
            if (data == fail) {
                categoryEnableButton();
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                categoryEnableButton();
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == invalidSession) {
                categoryEnableButton();
                callSessionTimeout();
            } else if (data == statusException) {
                categoryEnableButton();
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == duplicate) {

                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function () {
                    dispalyhrmsCommonBudgetHeadMaster(budgetheadModuleFunctionValue, budgetheadModule, budgetmoduleFunctionValue);

                }, 3000);
            } else if (data == null) {
                categoryEnableButton();
                displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");
            } else if (data == duplicate) {
                displayErrorMessages("pregsuccessBefore", existed + "<br/><br/>");
                setTimeout(function () {
                    dispalyhrmsCommonBudgetHeadMaster(budgetheadModuleFunctionValue, budgetheadModule, budgetmoduleFunctionValue);
                }, 3000);

            } else if (data != null) {
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function () {
                    dispalyhrmsCommonBudgetHeadMaster(budgetheadModuleFunctionValue, budgetheadModule, budgetmoduleFunctionValue);

                }, 3000);

            }

        });
    }


}

function wipeAllBudgetHead() {

    if ($('#wipereset').val() == "Back")
    {
        dispalyhrmsCommonBudgetHeadMaster(budgetheadModuleFunctionValue, budgetheadModule, budgetmoduleFunctionValue);
    } else
    {
        $('#GovernmentBudgetHead').val("");
        $('#fundType').val("");
        $('#fundCategory').val("");
        $('#budgetHead').val("");
        $('#budgetHeadDes').val("");
        $('#underBudgetHead').val("");
        $('#remarks').val("");
        $('#isActive').prop('checked', false);
        dispalyhrmsCommonBudgetHeadMaster(budgetheadModuleFunctionValue, budgetheadModule, budgetmoduleFunctionValue);
    }
}

function wipeAllserachBudgetHead() {
    // dispalyhrmsCommonBudgetHeadMaster();
    dispalyhrmsCommonBudgetHeadMaster(budgetheadModuleFunctionValue, budgetheadModule, budgetmoduleFunctionValue);
//    $('#wipeAllserachBudgetHead').text("");
//    $('#searchGovernmentBudgetHead').val("");
//    $('#searchfundType').val("");
//    $('#searchfundCategory').val("");
//    $('#searchbudgetHead').val("");
//    $('#searchbudgetHeadDes').val("");

}
function deleteBHM(id)
{
    //if (confirm("Are you sure?")) {
    //$(this).closest('tr').remove();
    deletebudgethead(id);
    //}
}
function deletebudgethead(id)
{
    if (checkUserPrivelege(pvDeleteBudgetHead)) {
        var loginUserId = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/BudgetHead/Delete", {
            id: id,
            userId: loginUserId
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("ErrorDiv", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("ErrorDiv", unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("ErrorDiv", statusExceptionMessage + "");
            } else if (data == delete_map) {
                // dispalyhrmsCommonReligion();
                displaySuccessMessages("ErrorDiv", "This Data   " + delete_map_message, "");
                setTimeout(function () {
                    $("#ErrorDiv").text("");
                }, 2100);
            } else if (data == null) {
                displayErrorMessages("ErrorDiv", "No User available" + "");
            } else {
//            scrolupfunction();
                displaySuccessMessages("ErrorDiv", deleteMessage, "");
                setTimeout(function () {
                    dispalyhrmsCommonBudgetHeadMaster(budgetheadModuleFunctionValue, budgetheadModule, budgetmoduleFunctionValue);
                }, 3000);
            }
        });
    }
}


function budgetHeadDisbleButton() {
    $("#BudgetHeadSaveandUpdateButton").attr('disabled', true);
    $("#wipereset").attr('disabled', true);
}
function budgetHeadEnableButton() {
    $("#BudgetHeadSaveandUpdateButton").attr('disabled', false);
    $("#wipereset").attr('disabled', false);
}

//start Search Ciriteria
function validatesearchBudget()
{

    var searchGovernmentBudgetHead = $("#searchGovernmentBudgetHead").val();
    var searchfundType = $("#searchfundType").val();
    var searchfundCategory = $("#searchfundCategory").val();
    if (searchGovernmentBudgetHead == "") {

        displaySmallErrorMessagesInRed("searchGovernmentBudgetHeadErr", "Please select GovernmentBudgetHead .");
    } else if (searchfundType == "") {
        displaySmallErrorMessagesInRed("searchfundTypeErr", "Please select FundType.");
        ;
    } else if (searchfundCategory == "") {
        displaySmallErrorMessagesInRed("searchfundCategoryErr", "Please select FundCategory");

    } else {
        searchBudget();
    }
}

function searchBudget() {

    var head = $('#searchGovernmentBudgetHead').val();
    var fundtype = $('#searchfundType').val();
    var fundcat = $('#searchfundCategory').val();
    var budgetHeadDesc = $('#searchbudgetHeadDes').val();
    var budgetHead = $('#searchbudgetHead').val();

    var Json = {
        govtBudgetHead: head,
        fundType: fundtype,
        fundCategory: fundcat,
        budgetHead: budgetHead,
        budgetHeadDescription: budgetHeadDesc
    };
    var jsonStr = JSON.stringify(Json);


    $.post(server_base_url + "hrms/common/BudgetHead/Search", {
        budgetHead: jsonStr
    }).done(function (data) {
        displaysearchTableBody(data);
    });

}

//start Search Ciriteria

function  updateBHM(obj) {
    if (checkUserPrivelege(pvUpdateBudgetHead)) {
        $("#pregsuccessBefore").text("");
        obj = decodeURI(obj);
        obj = JSON.parse(obj);

        getfundTypes(obj.fundType);
        GovtBudgetHeadForBudgetHead(obj.govtBudgetHead);
        getFundcategoryforbudgethead(obj.fundCategory);
        getUnderBudgetHead(obj.underBudgetHead);
        var activeVal = obj.isActive;

        if (activeVal == "Yes")
        {
            $('#isActive').prop('checked', true);
        } else
        {
            $('#isActive').prop('checked', false);
        }
        $("#displayBudgetHeadTable tr").css("background-color", "white");
        $("#displayBudgetHeadTable tr" + "#" + obj.bid).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#BudgetHeadSaveandUpdateButton").text("Update");
        $("#BudgetHeadSaveandUpdateButton").val("update");
        $("#wipereset").text("Back");
        $("#wipereset").val("Back");
        $("#idValue").val(obj.bid);
        $("#budgetHead").val(obj.budgetHead);
        $("#remarks").val(obj.remarks);
        $("#budgetHeadDes").val(obj.budgetHeadDescription);
        scrolupfunction();
    }
}

function  updateValues() {
    if (checkUserPrivelege(pvUpdateBudgetHead)) {
        var id = $('#idValue').val();
        var govtBudgetHead = $('#GovernmentBudgetHead').val();
        var fundType = $('#fundType').val();
        var fundCategory = $('#fundCategory').val();
        var budgetHead = $('#budgetHead').val();
        var budgetHeadDes = $('#budgetHeadDes').val();
        var underBudgetHead = $('#underBudgetHead').val();
        var remarks = $('#remarks').val();
        var isActive = "";
        if ($('#isActive').prop('checked')) {
            isActive = "Yes"
        } else
        {
            isActive = "No";
        }
        var uJson = {
            govtBudgetHead: govtBudgetHead,
            fundType: fundType,
            fundCategory: fundCategory,
            budgetHead: budgetHead,
            budgetHeadDescription: budgetHeadDes,
            underBudgetHead: underBudgetHead,
            remarks: remarks,
            isActive: isActive

        };
        var userid = getUserSessionElement("userId");
        $.post(server_base_url + "hrms/common/BudgetHead/Update", {
            uJson: JSON.stringify(uJson),
            id: id,
            userid: userid
        }).done(function (data) {

            if (data == fail) {
                categoryEnableButton();
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                categoryEnableButton();
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                categoryEnableButton();
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == duplicate) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function () {
                    dispalyhrmsCommonBudgetHeadMaster(budgetheadModuleFunctionValue, budgetheadModule, budgetmoduleFunctionValue);
                }, 3000);
            } else if (data == null) {
                categoryEnableButton();
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else {
                scrolupfunction();
                displaySuccessMessages("pregsuccessBefore", updateMessage, "");
                setTimeout(function () {
                    dispalyhrmsCommonBudgetHeadMaster(budgetheadModuleFunctionValue, budgetheadModule, budgetmoduleFunctionValue);
                }, 3000);
            }
        });
    }

}
function displaysearchTableBody(bdata) {
    if (checkUserPrivelege(pvViewBudgetHead)) {
        bdata = JSON.parse(bdata);
        $("#tableHeaderForList1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>Search Budget Head Code</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colbudgetHeadSearch'><span class='glyphicon glyphicon-minus-sign'></span></div><div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colbudgetHeadSearch").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colbudgetHeadSearch span").hasClass("glyphicon-minus-sign")) {
                $("#colbudgetHeadSearch").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colbudgetHeadSearch").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");

        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelMainBody").append("<div  id='ErrorDiv'/>");

        $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBudgetHeadTable' />");
        $("#displayBudgetHeadTable").append("<thead class=''><tr>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Govt Budget Head</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Fund Type</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Fund Category</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Budget Head Description</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Is Active?</th>"
                + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
                + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>"
                + "</tr></thead>");
        var sno = 0;
        $("#displayBudgetHeadTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered'/>");
        for (var i = 0; i < bdata.length; i++) {

            sno++;
            var bHMJson = {
                bid: bdata[i]._id.$oid,
                govtBudgetHead: bdata[i].govtBudgetHead,
                fundType: bdata[i].fundType,
                fundCategory: bdata[i].fundCategory,
                budgetHead: bdata[i].budgetHead,
                budgetHeadDescription: bdata[i].budgetHeadDescription,
                underBudgetHead: bdata[i].underBudgetHead,
                remarks: bdata[i].remarks,
                isActive: bdata[i].isActive
            }

            bHMJson = JSON.stringify(bHMJson);
            $("#displayBudgetHeadTable").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                    + "<td>" + sno + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].govtBudgetHead + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].budgetHead + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].fundType + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].fundCategory + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadDescription + "</td>"
                    + "<td style='cursor:pointer;'>" + bdata[i].isActive + "</td>"
                    + "<td style='cursor:pointer;' onclick=updateBHM('" + encodeURI(bHMJson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                    + "<td onclick=onclick=deletePopUp('deleteBHM','displayTable','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");

        }
        $('#displayBudgetHeadTable').dataTable();
    }
}
