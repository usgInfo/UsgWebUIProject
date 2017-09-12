/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function  displayBudgetHead() {
    alert("data1");

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetCommonMenuTabs()">Common Master</a></label> >> <label>Head Code</label>');

    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   class='page-content'/>");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Budget Head Master</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
//    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelRow").append("<div id='pregsuccessBefore'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    $("#FieldGroup").append("<input type='hidden' id='idValue' >");


    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");

    $("#Row1Col1").append(getLabel("Government Budget Head", "required") + "" + getDropDown("ddoId"));
    $("#Row1Col2").append(getLabel("Fund Type", "required") + "" + getDropDown("ftId"));

    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");

    $("#Row2Col1").append(getLabel_InputWithLabel("Budget Head", "required", "bhId", "Enter Budget Head", ""));
    $("#Row2Col2").append(getLabel_InputWithLabel("Display Budget Head", "required", "bhdId", "", ""));

    getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");

    $("#Row3Col1").append(getLabel_InputWithSpan("Budget Head Description", "required", "bhdIddes", "Enter Budget Head Description", ""));
    $("#Row3Col2").append(getLabel("Under Budget Head", "required") + "" + getDropDown("bhd1Id"));



    getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");

    $("#Row4Col1").append(getLabel_InputWithLabel("Remarks", "", "rem", "", ""));
    $("#Row4Col2").append(getLabel("Is Active", "") + "" + getCheckBoxwithLabel("check_id"));

    $("#FieldGroup").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='BudgetHeadSaveandUpdateButton' value='save' class='btn btn-success mr5'  onclick='saveBudgetHeadvalidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='wipereset' onclick='resetBudgetHeadcodes()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");

    //for search

    $("#tableHeaderForList").append("<div id='searchFirstPanel' class='panel panel-blue ' />");
    $("#searchFirstPanel").append("<div id='searchfirstPanelHeading' class='panel-heading' />");
    $("#searchfirstPanelHeading").append("<h4 id='searchtableHeader1' class='panel-title' />");
    $("#searchtableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Search Criteria</center>");
    $("#searchFirstPanel").append("<div id='searchcollapseOne2' class='panel-collapse collapse in pal' />");
    $("#searchcollapseOne2").append("<div id='searchpanelMainBody' class = 'panel-body' />");
    $("#searchpanelMainBody").append("<div id='searchpanelRow' class='row' />");
//    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#searchpanelRow").append("<div id='pregsuccessBefore'></div>");
    $("#searchpanelRow").append("<div id='searchFieldGroup' class='form-group' />");

    getTwoColumnInRow("searchFieldGroup", "Row1a", "Row1Col1a", "Row1Col2a");

    $("#Row1Col1a").append(getLabel("Government Budget Head", "required") + "" + getDropDownwithLabel("searchbhead"));
    $("#Row1Col2a").append(getLabel("Fund Type", "required") + "" + getDropDownwithLabel("searchftype"));

    getTwoColumnInRow("searchFieldGroup", "Row2a", "Row1Col1a", "Row1Col2a");


    $("#Row1Col1a").append(getLabel_InputWithSpan("Budget Head", "required", "bheadid", "Enter Budget Head", "onkeypress='return validatealphanumeric(event)'"));
    $("#Row1Col2a").append(getLabel_InputWithSpan("Budget Head Description", "required", "bheaddesc", "Enter Budget Head Description", "onkeypress='return validatealphanumeric(event)'"));

    $("#searchFieldGroup").append("<div id='searchpanelRow1' class='row' />");
    $("#searchpanelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='searchbutton' value='Save' class='btn btn-success mr5 '  onclick='validatesearchBudget()'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllBudgetHead()' class='btn btn-warning mr5 ' name='reset' value='reset'>Reset</button></center></div>");
    $("#mainTabMenu").append("<div id='tableHeaderForList1'/>");

    $("#tableHeaderForList1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Budget Head Code</center>");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");

    GovtBudgetHeadForBudgetHeads();
    getallfundType();
    viewHeadCode('listpanelMainBody');

}

function saveBudgetHeadvalidation()
{
    var govtBudget = $("#ddoId").val();
    var budgethead = $("#bhId").val();
    var fundtype = $("#ftId").val();

    if (govtBudget == "" || govtBudget == null) {
        $("#description").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please Select Govt Budget Head.");
    }
    else if (budgethead == "" || budgethead == null) {
        $("#order").focus();
        $("#pregppid1").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please enter BudgetHead.");

    }
    else if (fundtype == "" || fundtype == null) {
        $("#order").focus();
        $("#pregppid1").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please select fundtype.");

    }
    else
    {

        $("#pregsuccessBefore").text("").val("");
        $("#pregsuccessBefore").val("");
        saveBudgetHead();
    }
}
function  resetBudgetHeadcodes() {
    $('#ddoId').val("");
    $('#ftId').val("");
    $('#fcId').val("");
    $('#bhId').val("");
    $('#bhdId').val("");
    $('#bhd1Id').val("");
    $('#rem').val("");
    $("#check_id").prop('checked', false);
    $("#pregsuccessBefore").text("").val("");
    $("#pregsuccessBefore").val("");
}
function  searchBudget1()
{

    var head = $('#searchbhead').val();
    var fundtype = $('#searchftype').val();
  

    $.post(server_base_url + "budget/common/Headcode/Search", {
        bJson: head,
        ftype: fundtype
     

    }).done(function(sedata) {
        sedata = JSON.parse(sedata);

        if (sedata == fail || sedata == 501) {
            displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");

        } else {
            displayLargeSuccessMessages("pregsuccessBefore", "" + successMessage + "<br /><br />");

            resetSearch();
            $("#relationListPanel").text("").append("<div id='relationListPanelHeading' class='panel-heading' />");
            $("#relationListPanelHeading").append("<h4 id='secondHeader1' class='panel-title' />");
            $("#secondHeader1").append("<center> List of Search Budget Head</center>");

            $("#relationListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
            $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
            $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
            $("#listpanelRow").append("<div class='tab-pane' id='DatatablemainDiv'/>");
            $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");

            $("#viewDataTableDiv").append("<table id='displayseaTable' class='table table-striped table-bordered'></table>");

            $("#displayseaTable").append("<thead class=''><tr>"

                    + " <th> S.No</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i>Govt Budget Head</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i>Fund Type</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i> Fund Categeroy</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i> Budget Head Description</th>"
                    + "<th style='min-width:30%;width:auto;'><i ></i> Is Active?</th>"
                    + "</tr></thead>");
            var sno = 0;

            $("#displayseaTable").append("<tbody id='displaysearTableBody' class='table-striped table-bordered'/>");


            for (var i = 0; i < sedata.length; i++) {

                sno++;

                $("#displaysearTableBody").append("<tr id='" + sedata[i].status + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + sedata[i].govtBudgetHead + "</td>"
                        + "<td style='cursor:pointer;'>" + sedata[i].budgetHead + "</td>"
                        + "<td style='cursor:pointer;'>" + sedata[i].fundType + "</td>"
                        + "<td style='cursor:pointer;'>" + sedata[i].fundCategory + "</td>"

                        + "<td style='cursor:pointer;'>" + sedata[i].budgetHeadDescription + "</td>"


                        + "<td style='cursor:pointer;'>" + sedata[i].isActive + "</td></tr>");


            }
            $('#displayseaTable').dataTable();

        }

    });
}
function  GovtBudgetHeadForBudgetHeads() {
    $.get(server_base_url + "Budget/Common/BudgetGovtHead/View", {
    }).done(function(bdata) {
        $("#ddoId").text("").append("<option value = ''>---- Select Govt Budget Head ----</option>");
        $("#searchbhead").text("").append("<option value = ''>---- Select Govt Budget Head ----</option>");

        for (var i = 0; i < bdata.length; i++) {
            $("#ddoId").append("<option  value='" + bdata[i].majorHead + "-" + bdata[i].subMajorHead + "-" + bdata[i].minorHead + "-" + bdata[i].subMinorHead + "'>" + bdata[i].majorHead + "-" + bdata[i].subMajorHead + "-" + bdata[i].minorHead + "-" + bdata[i].subMinorHead + "</option>");
            $("#searchbhead").append("<option  value='" + bdata[i].majorHead + "-" + bdata[i].subMajorHead + "-" + bdata[i].minorHead + "-" + bdata[i].subMinorHead + "'>" + bdata[i].majorHead + "-" + bdata[i].subMajorHead + "-" + bdata[i].minorHead + "-" + bdata[i].subMinorHead + "</option>");
        }
    });
}

function  getallfundType() {
    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function(bdata) {

        $("#ftId").text("").append("<option value = '' selected disabled>------------------- Select Fund Type ---------</option>");
        $("#searchftype").text("").append("<option value = '' selected disabled>----------------- Select Fund Type--- -----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#ftId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
            $("#searchftype").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
            $("#editftId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
        }
    });
}


function viewHeadCode(divId) {
    $("#" + divId).text("").append("<div id='ErrorDiv'/>");
    $("#" + divId).append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");


    $("#displayBankTable").append("<thead class=''><tr>"

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Govt Budget Head</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Fund Type</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i> Budget Head Description</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>"
            + "</tr></thead>");
//FetchAllBudgetMapping

    $.get(server_base_url + "/budget/master/HeadCode/View", {
    }).done(function(bdata) {

        if (bdata.length > 0) {

            var sno = 0;

            $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered'/>");


            for (var i = bdata.length - 1; i >= 0; i--) {

                sno++;

                var bHMJson = {
                    bid: bdata[i]._id.$oid,
                    govtBudgetHead: bdata[i].govtBudgetHead,
                    fundType: bdata[i].fundType,
                    budgetHeadDisplay: bdata[i].budgetHeadDisplay,
                    budgetHead: bdata[i].budgetHead,
                    budgetHeadDescription: bdata[i].budgetHeadDesc,
                    underBudgetHead: bdata[i].underBudgetHead,
                    remarks: bdata[i].remarks,
                    activeStatus: bdata[i].activeStatus
                }

                bHMJson = JSON.stringify(bHMJson);
                $("#displayBankTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].govtBudgetHead + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].budgetHead + "</td>"
                        + "<td style='cursor:pointer;'>" + bdata[i].fundType + "</td>"


                        + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadDesc + "</td>"


                        + "<td style='cursor:pointer;' onclick=updateBudgetHeadforbudget('" + encodeURI(bHMJson) + "','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>"

                        + "<td onclick=deletePopUp('deleteBudgetHeadDelateData','viewHeadCode','" + bdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");

            }
            $('#displayBankTable').dataTable();
        }

    });

}

function deleteBudgetHeadDelateData(id) {

    $.post(server_base_url + "/budget/master/HeadCode/Delete", {
        id: id
    }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");

        } else {

            displaySuccessMessages("ErrorDiv", deleteMessage, "");
            setTimeout(function() {
                viewHeadCode('listpanelMainBody');
            }, 1000);
        }


    });

}


function saveBudgetHead() {
    var govtBudgetHead = $('#ddoId').val();
    var fundType = $('#ftId').val();
    var budgetHead = $('#bhId').val();
    var displaybudgetHead = $('#bhdId').val();
    var budgetHeadDesc = $('#bhdIddes').val();
    var underBudgetHead = $('#bhd1Id').val();
    var remarks = $('#rem').val();
    var isActive = $("#check_id").val();
    if ($('#check_id').prop('checked')) {
        isActive = "Yes";
    } else
    {
        isActive = "No";
    }

    var bJson = {
        govtBudgetHead: govtBudgetHead,
        fundType: fundType,
        budgetHead: budgetHead,
        budgetHeadDisplay: displaybudgetHead,
        budgetHeadDesc: budgetHeadDesc,
        underBudgetHead: underBudgetHead,
        remarks: remarks,
        activeStatus: isActive
    }


    $.post(server_base_url + "/budget/master/HeadCode/Save", {
        bJson: JSON.stringify(bJson)

    }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            // displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            //  displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else if (data == "existed") {
            displayLargeErrorMessages("pregsuccessBefore", "" + existMessage + "<br /><br />");
        } else {


            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function() {
                displayBudgetHead();
            }, 500);

        }

    });


}

function deleteBudgetHead(id)
{
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deletebudgethead(id);
    }
}

function  updateBudgetHeadforbudget(obj) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);

    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   class='pal'/>");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Budget Head Master</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");

    $("#panelRow").append("<div id='pregsuccessBefore'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    $("#FieldGroup").append("<input type='hidden' id='idValue' >");

    $("#FieldGroup").append(" <input type='hidden' value=" + obj.bid + " id='bid'>");
    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");

    $("#Row1Col1").append(getLabel("Government Budget Head", "required") + "" + getDropDownwithLabel("ddoId"));
    $("#Row1Col2").append(getLabel("Fund Type", "required") + "" + getDropDownwithLabel("ftId"));

    getTwoColumnInRow("FieldGroup", "Row2", "Row1Col1", "Row1Col2");

    $("#Row1Col1").append(getLabel_InputWithLabel("Budget Head", "required", "bhId", "Enter Budget Head", ""));
    $("#Row1Col2").append(getLabel_InputWithLabel("Display Budget Head", "required", "bhdId", "", ""));

    getTwoColumnInRow("FieldGroup", "Row3", "Row1Col1", "Row1Col2");

    $("#Row1Col1").append(getLabel_InputWithSpan("Budget Head Description", "required", "bhdIddes", "Enter Budget Head Description", ""));
    $("#Row1Col2").append(getLabel("Under Budget Head", "required") + "" + getDropDownwithLabel("bhd1Id"));



    getTwoColumnInRow("FieldGroup", "Row4", "Row1Col1", "Row1Col2");

    $("#Row1Col1").append(getLabel_InputWithLabel("Remarks", "", "rem", "", ""));
    $("#Row1Col2").append(getLabel("Is Active", "") + "" + getCheckBoxwithLabel("check_id"));

    $("#FieldGroup").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='BudgetHeadSaveandUpdateButton' value='save' class='btn btn-success'  onclick='updateBudgetHeadinbudget()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' id='wipereset' onclick='displayBudgetHead()' class='btn btn-warning' name='reset' value='reset'>Back</button></center></div>");

    //$("#ddoId").val(obj.govtBudgetHead);

    // $("#ddoId").append("<option value='" + obj.govtBudgetHead + "' selected>" + obj.govtBudgetHead + "</option>");
    //  $("#ftId").append("<option value='" + obj.fundType + "' selected>" + obj.fundType + "</option>");
    //  $("#ftId").val(obj.fundType);
    $("#bhId").val(obj.budgetHead);
    $("#bhdId").val(obj.budgetHeadDisplay);
    $("#bhdIddes").val(obj.budgetHeadDescription);
    $("#bhd1Id").val(obj.underBudgetHead);
    $("#rem").val(obj.remarks);
    $("#check_id").val(obj.activeStatus);
    if (obj.activeStatus == "Yes") {

        $('#check_id').not(this).prop('checked', true);
    }

    GovtBudgetHeadForBudgetHeadsupdate(obj.govtBudgetHead);
    getallfundTypeBudgetHeadsupdate(obj.fundType);
}
function GovtBudgetHeadForBudgetHeadsupdate(name)
{

    $.get(server_base_url + "Budget/Common/BudgetGovtHead/View", {
    }).done(function(bdata) {

        for (var i = 0; i < bdata.length; i++) {
            var value = '"+ bdata[i].majorHead + "-" + bdata[i].subMajorHead + "-" + bdata[i].minorHead + "-" + bdata[i].subMinorHead +"';

            if (name == value) {
                $("#ddoId").append("<option value='" + bdata[i].majorHead + "-" + bdata[i].subMajorHead + "-" + bdata[i].minorHead + "-" + bdata[i].subMinorHead + "' selected>" + bdata[i].majorHead + "-" + bdata[i].subMajorHead + "-" + bdata[i].minorHead + "-" + bdata[i].subMinorHead + "</option>");
            } else {
                $("#ddoId").append("<option value='" + bdata[i].majorHead + "-" + bdata[i].subMajorHead + "-" + bdata[i].minorHead + "-" + bdata[i].subMinorHead + "'>" + bdata[i].majorHead + "-" + bdata[i].subMajorHead + "-" + bdata[i].minorHead + "-" + bdata[i].subMinorHead + "</option>");
            }
        }
    });
}
function getallfundTypeBudgetHeadsupdate(name)
{
    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function(bdata) {

        for (var i = 0; i < bdata.length; i++) {

            if (name == bdata[i].description) {
                $("#ftId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].description + "</option>");
            } else {
                $("#ftId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
            }
        }
    });
}
function updateBudgetHeadinbudget() {

    var id = $("#bid").val();

    var govtBudgetHead = $('#ddoId').val();
    var fundType = $('#ftId').val();
    var fundCategory = $('#fcId').val();
    var budgetHead = $('#bhId').val();
    var budgetHeadDes = $('#bhdId').val();
    var underBudgetHead = $('#bhd1Id').val();
    var remarks = $('#rem').val();
    var isActive = $("#check_id").val();
    if ($('#check_id').prop('checked')) {
        isActive = $("#check_id").val();
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

    }
    $.post(server_base_url + "/budget/master/HeadCode/Update", {
        headcode: JSON.stringify(uJson),
        id: id
    }).done(function(data) {

        if (data == fail) {
            //displaySmallErrorMessages("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessages("pregsuccessBefore", "No User available" + "<br/><br/>");
        } else {


            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            setTimeout(function() {
                displayBudgetHead();
            }, 1000);
        }
    });

}