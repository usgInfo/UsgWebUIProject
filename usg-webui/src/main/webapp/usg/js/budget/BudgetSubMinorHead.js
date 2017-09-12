/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createBudgetSubMinorHead()
{
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetCommonMenuTabs()">Common Master</a></label> >> <label>Sub Minor Head</label>');

    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetTypeMainDiv"/>');

    $("#budgetTypeMainDiv").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");

    $("#tableHeader").append("<div id='BudgetSubMinorHeadFirstPanel' class='panel panel-blue' />");

    $("#BudgetSubMinorHeadFirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='firstHeader' class='panel-title' />");
     $("#firstHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Sub Minor Head</center>");

    $("#BudgetSubMinorHeadFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelMainBody").append('<input type="hidden" id="idValue">');
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelMainBody").append("<div id='budgetTypeMessageDiv'></div>");
    $("#panelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
    $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');
//for panel row
    $("#formBodyPalDiv").append("<div id='BudgetSubMinorHeadGroup' class='form-group' />");
    $("#BudgetSubMinorHeadGroup").append("<label class='col-sm-3 control-label'>Sub Minor Head Name:&nbsp;<span class='require'>*</span></label>");
    $("#BudgetSubMinorHeadGroup").append("<div id='reationFieldDiv' class='col-sm-9' />");
    $("#reationFieldDiv").append("<input type='text' id='SubMinorHeadName' class='form-control' onkeypress='return validatealphanumeric(event)'  size=50 maxlength=50>");
    $("#reationFieldDiv").append("<span id='pregppid'></span>");

    $("#formBodyPalDiv").append("<div id='BudgetSubMinorHeadGroup1' class='form-group' />");
    $("#BudgetSubMinorHeadGroup1").append("<label class='col-sm-3 control-label'>Sub Minor Head Code:&nbsp;<span class='require'>*</span></label>");
    $("#BudgetSubMinorHeadGroup1").append("<div id='reationRemarksFieldDiv' class='col-sm-9' />");
    $("#reationRemarksFieldDiv").append("<input type='text' id='SubMinorHeadRemarks'  onkeypress='return validatealphanumeric(event)' class='form-control' size=50 maxlength=50>");
    $("#reationRemarksFieldDiv").append("<span id='pregppid1'></span>");



    $("#panelMainBody").append("<div id='BudgetSubMinorHeadBtnDiv' class='row' />");
    $("#BudgetSubMinorHeadBtnDiv").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='BudgetSubMinorHeadValidation()'>Save</button></div><div class='col-xs-2'><button type='button' onclick='resetBudgsubMinorHead()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Reset</button></div>");
    $("#preg_ppid").focus();



    //LIst

    $("#tableHeader").append("<div id='BudgetSubMinorHeadListPanel' class='panel panel-blue' />");

    $("#BudgetSubMinorHeadListPanel").append("<div id='BudgetSubMinorHeadListPanelHeading' class='panel-heading' />");
    $("#BudgetSubMinorHeadListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#budgetTypepanel' href='#collapseOne3'><center>List of SubMinor Heads</center></a>");

    $("#BudgetSubMinorHeadListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    viewBudgetSubMinorHeadList('listpanelMainBody');


}

function resetBudgsubMinorHead()
{
    $("#SubMinorHeadName").val("");
    $("#SubMinorHeadRemarks").val("");
    $("#pregppid").text("");
    $("#pregppid1").text("");
    $("#pregsuccessBefore").text("");
}


function BudgetSubMinorHeadValidation()
{
    var SubMinorHead = $("#SubMinorHeadName").val();
    var SubMinorcode = $("#SubMinorHeadRemarks").val();
    if (SubMinorHead == "") {
        $("#SubMinorHeadName").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid", "Please enter Sub Minor Head.");
    } else if (SubMinorcode == "") {
        $("#SubMinorHeadRemarks").focus();
        $("#pregppid").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid1", "Please enter Sub Minor Code.");

    }
    else
    {
        $("#pregppid1").text("");
        sendBudgetSubMinorHeadData();
    }

}

function sendBudgetSubMinorHeadData()
{
    var head = $("#SubMinorHeadName").val();
    var code = $("#SubMinorHeadRemarks").val();


    $.post(server_base_url + "Budget/Common/BudgetSubMinor/Save", {
        head: head,
        code: code

    }).done(function(data) {


        if (data == fail) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", failMessage + "");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        }
        else {
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function() {
                createBudgetSubMinorHead();
            }, 500);
        }
    });

}

function viewBudgetSubMinorHeadList(divId)
{
    $("#" + divId).text("").append("<div id='ErrorDiv'/>");
    $("#" + divId).append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='subminorHeadTable' />");

    $.get(server_base_url + "Budget/Common/BudgetSubMinor/View", {
    }).done(function(pdata) {


        $("#subminorHeadTable").append("<thead class=''><tr>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Sub Minor Head Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Sub Minor Head Code</th>"
                + "<th style='min-width:1%;width:80px;'>Edit</th>"
                + "<th style='min-width:1%;width:80px;align:center;'> Delete</th>"
                + "</tr></thead>");
        var sno = 0;

        $("#subminorHeadTable").append("<tbody id='displayRelationTableBody' class='table-striped table-bordered' />");

        for (var i = pdata.length - 1; i >= 0; i--) {
            sno++;
            $("#displayRelationTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                    + "<td>" + sno + "</td>"
                    + "<td style='cursor:pointer;'>" + pdata[i].subMinorHead + "</td>"
                    + "<td style='cursor:pointer;'>" + pdata[i].subMinorHeadCode + "</td>"
                    + "<td style='cursor:pointer;' onclick=updateBudgetSubMinorHead('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].subMinorHead) + "','" + encodeURI(pdata[i].subMinorHeadCode) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>"
                    + "<td style='cursor:pointer;' onclick=deletePopUp('deleteBudgetSubMinorHead','viewBudgetSubMinorHeadList','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");
        }
        $("#subminorHeadTable").dataTable();
    });
}

function updateBudgetSubMinorHead(id, name, remarks)
{
    var namedec = decodeURI(name);
    var remarksdec = decodeURI(remarks);
//for first panel
    $("#SubMinorHeadName").val(namedec);
    $("#SubMinorHeadRemarks").val(remarksdec);
    $("#idValue").val(id);
    $("#BudgetSubMinorHeadBtnDiv").text("").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='subminorheadupdateValidation()'>Update</button></div><div class='col-xs-2'><button type='button' onclick='createBudgetSubMinorHead()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Back</button></div>");
    $("#preg_ppid").focus();
}

function subminorheadupdateValidation()
{
    var SubMinorHeadupdate = $("#SubMinorHeadName").val();
    var SubMinorcodeupdate = $("#SubMinorHeadRemarks").val();

    if (SubMinorHeadupdate == "") {
        $("#subminorheadUpdateName").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("pregppid", "Please enter Sub Minor Head.");
    } else if (SubMinorcodeupdate == "") {
        $("#subminorheadUpdateRemarks").focus();
        $("#pregppid").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("pregppid1", "Please enter Sub Minor Code.");

    }
    else
    {
        $("#pregppid1").text("");
        sendUpdateBudgetSubMinorHeadData();
    }

}




function sendUpdateBudgetSubMinorHeadData()
{

    var updatesubminorhead = $("#SubMinorHeadName").val();
    var updatesubminorheadcode = $("#SubMinorHeadRemarks").val();
    var id = $("#idValue").val();

    $.post(server_base_url + "Budget/Common/BudgetSubMinor/Update", {
        minorhead: updatesubminorhead,
        id: id,
        subminorheadcode: updatesubminorheadcode
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

            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            setTimeout(function() {
                createBudgetSubMinorHead();
            }, 1000);
        }
    });

}
function deleteBudgetSubMinorHead(id)
{
    $.post(server_base_url + "Budget/Common/BudgetSubMinor/Delete", {
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
                viewBudgetSubMinorHeadList('listpanelMainBody');
            }, 1000);
        }
    });
}


