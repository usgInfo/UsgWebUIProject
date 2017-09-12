/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createBudgetMinorHead()
{

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetCommonMenuTabs()">Common Master</a></label> >> <label>Minor Head</label>');

    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetTypeMainDiv"/>');

    $("#budgetTypeMainDiv").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");

//for first panel
    $("#tableHeader").append("<div id='BudgetMinorHeadFirstPanel' class='panel panel-blue' />");

    $("#BudgetMinorHeadFirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='firstHeader' class='panel-title' />");
    $("#firstHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Minor Head</center>");

    $("#BudgetMinorHeadFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelMainBody").append('<input type="hidden" id="idValue">');
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelMainBody").append("<div id='budgetTypeMessageDiv'></div>");
    $("#panelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
    $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');
//for panel row
    $("#formBodyPalDiv").append("<div id='BudgetMinorHeadGroup' class='form-group' />");
    $("#BudgetMinorHeadGroup").append("<label class='col-sm-3 control-label'>Minor Head Name:&nbsp;<span class='require'>*</span></label>");
    $("#BudgetMinorHeadGroup").append("<div id='reationFieldDiv' class='col-sm-9' />");
    $("#reationFieldDiv").append("<input type='text' id='MinorHeadName' class='form-control' onkeypress='return validatealphanumeric(event)' size=50 maxlength=50>");
    $("#reationFieldDiv").append("<span id='pregppid'></span>");

    $("#formBodyPalDiv").append("<div id='BudgetMinorHeadGroup1' class='form-group' />");
    $("#BudgetMinorHeadGroup1").append("<label class='col-sm-3 control-label'>Minor Head Code:&nbsp;<span class='require'>*</span></label>");
    $("#BudgetMinorHeadGroup1").append("<div id='reationRemarksFieldDiv' class='col-sm-9' />");
    $("#reationRemarksFieldDiv").append("<input type='text' id='MinorHeadRemarks' onkeypress='return validatealphanumeric(event)' class='form-control' size=50 maxlength=50>");
    $("#reationRemarksFieldDiv").append("<span id='pregppid1'></span>");



    $("#panelMainBody").append("<div id='BudgetMinorHeadBtnDiv' class='row' />");
    $("#BudgetMinorHeadBtnDiv").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='BudgetMinorHeadValidation()'>Save</button></div><div class='col-xs-2'><button type='button' onclick='resetBudgetMinorHead()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Reset</button></div>");
    $("#preg_ppid").focus();



    //LIst

    $("#tableHeader").append("<div id='BudgetMinorHeadListPanel' class='panel panel-blue' />");

    $("#BudgetMinorHeadListPanel").append("<div id='BudgetMinorHeadListPanelHeading' class='panel-heading' />");
    $("#BudgetMinorHeadListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#budgetTypepanel' href='#collapseOne3'><center>List of Minor Heads</center></a>");

    $("#BudgetMinorHeadListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");

    viewBudgetMinorHeadList('listpanelMainBody');


}

function resetBudgetMinorHead()
{
    $("#MinorHeadName").val("");
    $("#MinorHeadRemarks").val("");
    $("#pregppid").text("");
    $("#pregppid1").text("");
    $("#pregsuccessBefore").text("");
}


function BudgetMinorHeadValidation()
{
    var MinorHead = $("#MinorHeadName").val();
    var Minorcode = $("#MinorHeadRemarks").val();
    if (MinorHead == "") {
        $("#MinorHeadName").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid", "Please enter Minor Head.");
    } else if (Minorcode == "") {
        $("#MinorHeadRemarks").focus();
        $("#pregppid").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid1", "Please enter Minor Code.");

    }
    else
    {
        $("#pregppid1").text("");
        sendBudgetMinorHeadData();
    }

}

function sendBudgetMinorHeadData()
{
    var head = $("#MinorHeadName").val();
    var code = $("#MinorHeadRemarks").val();


    $.post(server_base_url + "Budget/Common/BudgetMinorHead/Save", {
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
                createBudgetMinorHead();
            }, 500);

        }
    });

}

function viewBudgetMinorHeadList(divId)
{
    $("#" + divId).text("").append("<div id='ErrorDiv'/>");
    $("#" + divId).append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='BudgetminorHeadTable' />");


    $.get(server_base_url + "Budget/Common/BudgetMinorHead/View", {
    }).done(function(pdata) {
        if (pdata == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (pdata == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        }
        else {
            if (pdata != null) {
                if (pdata.length > 0) {

                    $("#BudgetminorHeadTable").append("<thead class=''><tr>"
                            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
                            + " <th> S.No</th>"
                            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Minor Head Name</th>"
                            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Minor Head Code</th>"
                            + "<th style='min-width:1%;width:80px;'>Edit</th>"
                            + "<th style='min-width:1%;width:80px;align:center;'> Delete</th>"
                            + "</tr></thead>");
                    var sno = 0;

                    $("#BudgetminorHeadTable").append("<tbody id='displayRelationTableBody' class='table-striped table-bordered' />");

                    for (var i = pdata.length - 1; i >= 0; i--) {
                        sno++;
                        $("#displayRelationTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].minorHead + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].minorHeadCode + "</td>"
                                //  + "<td style='cursor:pointer;' onclick=updateRelation('" + pdata[i]._id.$oid + "','" + pdata[i].relation + "',,'" + pdata[i].relationRemarks + "')>" + ' <button type="button" class="removebutton" style="align:center;color:red" title="Edit this Relation" >EDIT</button>' + "</td>"
                                + "<td style='cursor:pointer;' onclick=updateBudgetMinorHead('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].minorHead) + "','" + encodeURI(pdata[i].minorHeadCode) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>"
                                + "<td style='cursor:pointer;' onclick=deletePopUp('deleteBudgetMinorHead','viewBudgetMinorHeadList','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");


                    }


                    $("#BudgetminorHeadTable").dataTable();
                }

            }

        }
    });



}


function updateBudgetMinorHead(id, name, remarks)
{
    var namedec = decodeURI(name);
    var remarksdec = decodeURI(remarks);
//for first panel
    $("#MinorHeadName").val(namedec);
    $("#MinorHeadRemarks").val(remarksdec);
    $("#idValue").val(id);
    $("#BudgetMinorHeadBtnDiv").text("").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='BudgetminorheadupdateValidation()'>Update</button></div><div class='col-xs-2'><button type='button' onclick='createBudgetMinorHead()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Back</button></div>");
    $("#preg_ppid").focus();
}



function BudgetminorheadupdateValidation()
{
    var MinorHeadupdate = $("#MinorHeadName").val();
    var Minorcodeupdate = $("#MinorHeadRemarks").val();

    if (MinorHeadupdate == "") {
        $("#minorheadUpdateName").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("pregppid", "Please enter Minor Head.");
    } else if (Minorcodeupdate == "") {
        $("#minorheadUpdateRemarks").focus();
        $("#pregppid").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("pregppid1", "Please enter Minor Code.");

    }
    else
    {
        $("#pregppid1").text("");
        sendUpdateBudgetMinorHeadData();
    }

}




function sendUpdateBudgetMinorHeadData()
{

    var updateminorhead = $("#MinorHeadName").val();
    var updateminorheadcode = $("#MinorHeadRemarks").val();
    var id = $("#idValue").val();

    $.post(server_base_url + "Budget/Common/BudgetMinorHead/Update", {
        minorhead: updateminorhead,
        id: id,
        minorheadcode: updateminorheadcode
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
                createBudgetMinorHead();
            }, 1000);
        }
    });

}
function deleteBudgetMinorHead(id)
{
    $.post(server_base_url + "Budget/Common/BudgetMinorHead/Delete", {
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
                viewBudgetMinorHeadList('listpanelMainBody');
            }, 1000);

        }
    });
}

