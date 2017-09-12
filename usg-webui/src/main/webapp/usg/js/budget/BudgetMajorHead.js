/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createBudgetMajorHead()
{

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetCommonMenuTabs()">Common Master</a></label> >> <label>Major Head</label>');

    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetTypeMainDiv"/>');

    $("#budgetTypeMainDiv").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");

//for first panel
    $("#tableHeader").append("<div id='BudgetMajorHeadFirstPanel' class='panel panel-blue' />");

    $("#BudgetMajorHeadFirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='firstHeader' class='panel-title' />");
    $("#firstHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Major Head</center>");

    $("#BudgetMajorHeadFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelMainBody").append('<input type="hidden" id="idValue">');
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelMainBody").append("<div id='budgetTypeMessageDiv'></div>");
    $("#panelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
    $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');

    //  $("#formBodyPalDiv").append('<div  id="budgetTypeFieldDiv1"  class="form-group" />');
//for panel row
    $("#formBodyPalDiv").append("<div id='BudgetMajorHeadGroup' class='form-group' />");
    $("#BudgetMajorHeadGroup").append('<label class="col-sm-3 control-label">Major Head Name:&nbsp;<span class="require">*</span></label>');
    $("#BudgetMajorHeadGroup").append("<div id='reationFieldDiv' class='col-sm-9' />");
    $("#reationFieldDiv").append("<input type='text' id='MajorHeadName' onkeypress='return acceptAlphanumeric(event)' class='form-control' size=50 maxlength=50>");
    $("#reationFieldDiv").append("<span id='pregppid'></span>");

    $("#formBodyPalDiv").append("<div id='BudgetMajorHeadGroup1' class='form-group' />");
    $("#BudgetMajorHeadGroup1").append("<label class='col-sm-3 control-label'>Major Head Code:&nbsp;<span class='require'>*</span></label>");
    $("#BudgetMajorHeadGroup1").append("<div id='reationRemarksFieldDiv' class='col-sm-9' />");
    $("#reationRemarksFieldDiv").append("<input type='text' id='MajorHeadRemarks' class='form-control' onkeypress='return validatealphanumeric(event)' size=50 maxlength=50>");
    $("#reationRemarksFieldDiv").append("<span id='pregppid1'></span>");



    $("#panelMainBody").append("<div id='BudgetMajorHeadBtnDiv' class='row' />");
    $("#BudgetMajorHeadBtnDiv").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='BudgetMajorHeadValidation()'>Save</button></div><div class='col-xs-2'><button type='button' onclick='resetBudgetMajorHead()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Reset</button></div>");
    $("#preg_ppid").focus();

    //LIst

    $("#tableHeader").append("<div id='BudgetMajorHeadListPanel' class='panel panel-blue' />");

    $("#BudgetMajorHeadListPanel").append("<div id='BudgetMajorHeadListPanelHeading' class='panel-heading' />");
    $("#BudgetMajorHeadListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#budgetTypepanel' href='#collapseOne3'><center>List of Major Heads</center></a>");

    $("#BudgetMajorHeadListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");

    viewBudgetMajorHeadList('listpanelMainBody');

}

function resetBudgetMajorHead()
{
    $("#MajorHeadName").val("");
    $("#MajorHeadRemarks").val("");
    $("#pregppid").text("");
    $("#pregppid1").text("");
    $("#pregsuccessBefore").text("");
}


function BudgetMajorHeadValidation()
{
    var MajorHead = $("#MajorHeadName").val();
    var Majorcode = $("#MajorHeadRemarks").val();
    if (MajorHead == "") {
        $("#MajorHeadName").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid", "Please enter Major Head.");

    } else if (Majorcode == "") {
        $("#MajorHeadRemarks").focus();
        $("#pregppid").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid1", "Please enter Major Code.");

    }
    else
    {
        $("#pregppid1").text("");
        sendBudgetMajorHeadData();
    }

}

function sendBudgetMajorHeadData()
{
    var head = $("#MajorHeadName").val();
    var code = $("#MajorHeadRemarks").val();


    $.post(server_base_url + "Budget/Common/BudgetHead/Save", {
        head: head,
        code: code

    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        }
        else {
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function() {
                createBudgetMajorHead();
            }, 500);
        }
    });

}

function viewBudgetMajorHeadList(divId)
{

    $("#" + divId).text("").append("<div id='ErrorDiv'/>");
    $("#" + divId).append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='budgetMajorrHeadTable' />");

    $("#budgetMajorrHeadTable").append("<thead class=''><tr>"
            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Major Head Name</th>"
            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Major Head Code</th>"
            + "<th style='min-width:1%;width:80px;'>Edit</th>"
            + "<th style='min-width:1%;width:80px;align:center;'> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "Budget/Common/BudgetMajorHead/View", {
    }).done(function(pdata) {
        var sno = 0;

        $("#budgetMajorrHeadTable").append("<tbody id='budgetMajorHeadTableBody' class='table-striped table-bordered' />");

        for (var i = pdata.length - 1; i >= 0; i--) {
            sno++;
            $("#budgetMajorHeadTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                    + "<td>" + sno + "</td>"
                    + "<td style='cursor:pointer;'>" + pdata[i].majorHead + "</td>"
                    + "<td style='cursor:pointer;'>" + pdata[i].majorHeadCode + "</td>"
                    //  + "<td style='cursor:pointer;' onclick=updateRelation('" + pdata[i]._id.$oid + "','" + pdata[i].relation + "',,'" + pdata[i].relationRemarks + "')>" + ' <button type="button" class="removebutton" style="align:center;color:red" title="Edit this Relation" >EDIT</button>' + "</td>"
                    + "<td style='cursor:pointer;' onclick=updateBudgetMajorHead('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].majorHead) + "','" + encodeURI(pdata[i].majorHeadCode) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>"

                    + "<td style='cursor:pointer;' onclick=deletePopUp('deleteBudgetMajorHead','viewBudgetMajorHeadList','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");

        }

        $("#budgetMajorHeadTable").dataTable();
    });
}


function deleteBudgetMajorHead(id)
{

    $.post(server_base_url + "Budget/Common/BudgetMajorHead/Delete", {
        id: id
    }).done(function(data) {

        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("ErrorDiv", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("ErrorDiv", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("ErrorDiv", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("ErrorDiv", deleteMessage, "");
            setTimeout(function() {
                viewBudgetMajorHeadList('listpanelMainBody');
            }, 1000);
        }
    });
}
function updateBudgetMajorHead(id, name, remarks)
{

    var namedec = decodeURI(name);
    var remarksdec = decodeURI(remarks);
//for first panel
    $("#MajorHeadName").val(namedec);
    $("#MajorHeadRemarks").val(remarksdec);
    $("#idValue").val(id);
    $("#BudgetMajorHeadBtnDiv").text("").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='budgetMajorrheadupdateValidation()'>Update</button></div><div class='col-xs-2'><button type='button' onclick='createBudgetMajorHead()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Back</button></div>");
    $("#preg_ppid").focus();
}



function budgetMajorrheadupdateValidation()
{
    var MajorHeadupdate = $("#MajorHeadName").val();
    var Majorcodeupdate = $("#MajorHeadRemarks").val();

    if (MajorHeadupdate == "") {
        $("#majorheadUpdateName").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("pregppid", "Please enter Major Head.");
    } else if (Majorcodeupdate == "") {
        $("#majorheadUpdateRemarks").focus();
        $("#pregppid").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("pregppid1", "Please enter Major Code.");

    }
    else
    {
        $("#pregppid1").text("");
        sendUpdateBudgetMajorHeadData();
    }

}
function sendUpdateBudgetMajorHeadData()
{

    var updatemajorhead = $("#MajorHeadName").val();
    var updatemajorheadcode = $("#MajorHeadRemarks").val();
    var id = $("#idValue").val();
    $.post(server_base_url + "Budget/Common/BudgetMajorHead/Update", {
        majorhead: updatemajorhead,
        id: id,
        majorheadcode: updatemajorheadcode
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            setTimeout(function() {
                createBudgetMajorHead();
            }, 1000);
        }
    });

}


