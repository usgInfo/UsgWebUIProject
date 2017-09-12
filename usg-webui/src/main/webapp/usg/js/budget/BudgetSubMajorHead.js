/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createBudgetSubMajorHead()
{

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetCommonMenuTabs()">Common Master</a></label> >> <label>Sub Major Head</label>');

    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetTypeMainDiv"/>');

    $("#budgetTypeMainDiv").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");
//for first panel
    $("#tableHeader").append("<div id='BudgetSubMajorHeadFirstPanel' class='panel panel-blue' />");

    $("#BudgetSubMajorHeadFirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='firstHeader' class='panel-title' />");
    $("#firstHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Sub Major Head</center>");

    $("#BudgetSubMajorHeadFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelMainBody").append('<input type="hidden" id="idValue">');
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelMainBody").append("<div id='budgetTypeMessageDiv'></div>");
    $("#panelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
    $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');
//for panel row
    $("#formBodyPalDiv").append("<div id='BudgetSubMajorHeadGroup' class='form-group' />");
    $("#BudgetSubMajorHeadGroup").append("<label class='col-sm-3 control-label'>Sub Major Head Name:&nbsp;<span class='require'>*</span></label>");
    $("#BudgetSubMajorHeadGroup").append("<div id='reationFieldDiv' class='col-sm-9' />");
    $("#reationFieldDiv").append("<input type='text' id='SubMajorHeadName' class='form-control' onkeypress='return validatealphanumeric(event)'  size=50 maxlength=50>");
    $("#reationFieldDiv").append("<span id='pregppid'></span>");

    $("#formBodyPalDiv").append("<div id='BudgetSubMajorHeadGroup1' class='form-group' />");
    $("#BudgetSubMajorHeadGroup1").append("<label class='col-sm-3 control-label'>Sub Major Head Code:&nbsp;<span class='require'>*</span></label>");
    $("#BudgetSubMajorHeadGroup1").append("<div id='reationRemarksFieldDiv' class='col-sm-9' />");
    $("#reationRemarksFieldDiv").append("<input type='text' id='SubMajorHeadRemarks' class='form-control' onkeypress='return validatealphanumeric(event)' size=50 maxlength=50>");
    $("#reationRemarksFieldDiv").append("<span id='pregppid1'></span>");

    $("#panelMainBody").append("<div id='BudgetSubMajorHeadBtnDiv' class='row' />");
    $("#BudgetSubMajorHeadBtnDiv").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='BudgetSubMajorHeadValidation()'>Save</button></div><div class='col-xs-2'><button type='button' onclick='resetBudgetSubMahorhead()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Reset</button></div>");
    $("#preg_ppid").focus();
    //LIst

    $("#tableHeader").append("<div id='BudgetSubMajorHeadListPanel' class='panel panel-blue' />");

    $("#BudgetSubMajorHeadListPanel").append("<div id='BudgetSubMajorHeadListPanelHeading' class='panel-heading' />");
    $("#BudgetSubMajorHeadListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#budgetTypepanel' href='#collapseOne3'><center>List of SubMajor Heads</center></a>");

    $("#BudgetSubMajorHeadListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    viewBudgetSubMajorHeadList('listpanelMainBody');
}

function resetBudgetSubMahorhead()
{
    $("#SubMajorHeadName").val("");
    $("#SubMajorHeadRemarks").val("");
    $("#pregppid").text("");
    $("#pregppid1").text("");
    $("#pregsuccessBefore").text("");
}


function BudgetSubMajorHeadValidation()
{
    var SubMajorHead = $("#SubMajorHeadName").val();
    var SubMajorcode = $("#SubMajorHeadRemarks").val();
    if (SubMajorHead == "") {
        $("#SubMajorHeadName").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid", "Please enter Sub Major Head.");
    } else if (SubMajorcode == "") {
        $("#SubMajorHeadRemarks").focus();
        $("#pregppid").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid1", "Please enter Sub Major Code.");

    }
    else
    {
        $("#pregppid1").text("");
        sendBudgetSubMajorHeadData();
    }

}

function sendBudgetSubMajorHeadData()
{
    var head = $("#SubMajorHeadName").val();
    var code = $("#SubMajorHeadRemarks").val();


    $.post(server_base_url + "Budget/Common/BudgetSubMajor/Save", {
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
                createBudgetSubMajorHead();
            }, 500);
        }
    });

}

function viewBudgetSubMajorHeadList(divId)
{
    $("#" + divId).text("").append("<div id='ErrorDiv'/>");
    $("#" + divId).append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='submajorHeadTable' />");

    $.get(server_base_url + "Budget/Common/BudgetSubMajor/View", {
    }).done(function(pdata) {
        if (pdata == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (pdata == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else {
            if (pdata != null) {
                if (pdata.length > 0) {

                    $("#submajorHeadTable").append("<thead class=''><tr>"
                            + " <th> S.No</th>"
                            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Sub Major Head Name</th>"
                            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Sub Major Head Code</th>"
                            + "<th style='min-width:1%;width:80px;'>Edit</th>"
                            + "<th style='min-width:1%;width:80px;align:center;'> Delete</th>"
                            + "</tr></thead>");
                    var sno = 0;

                    $("#submajorHeadTable").append("<tbody id='displayRelationTableBody' class='table-striped table-bordered' />");

                    for (var i = pdata.length - 1; i >= 0; i--) {
                        sno++;
                        $("#displayRelationTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].subMajorHead + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].subMajorHeadCode + "</td>"
                                + "<td style='cursor:pointer;' onclick=updateBudgetSubMajorHead('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].subMajorHead) + "','" + encodeURI(pdata[i].subMajorHeadCode) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>"
                                + "<td style='cursor:pointer;' onclick=deletePopUp('deleteBudgetSubMajorHead','viewBudgetSubMajorHeadList','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");
                    }
                    $("#submajorHeadTable").dataTable();
                }

            }

        }
    });
}




function updateBudgetSubMajorHead(id, name, remarks)
{
    var namedec = decodeURI(name);
    var remarksdec = decodeURI(remarks);
//for first panel
    $("#SubMajorHeadName").val(namedec);
    $("#SubMajorHeadRemarks").val(remarksdec);
    $("#idValue").val(id);
    $("#BudgetSubMajorHeadBtnDiv").text("").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='submajorheadupdateValidation()'>Update</button></div><div class='col-xs-2'><button type='button' onclick='createBudgetSubMajorHead()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Back</button></div>");
    $("#preg_ppid").focus();
}



function submajorheadupdateValidation()
{
    var SubMajorHeadupdate = $("#SubMajorHeadName").val();
    var SubMajorcodeupdate = $("#SubMajorHeadRemarks").val();

    if (SubMajorHeadupdate == "") {
        $("#submajorheadUpdateName").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("pregppid", "Please enter Sub Major Head.");
    } else if (SubMajorcodeupdate == "") {
        $("#submajorheadUpdateRemarks").focus();
        $("#pregppid").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("pregppid1", "Please enter Sub Major Code.");

    }
    else
    {
        $("#pregppid1").text("");
        sendUpdateBudgetSubMajorHeadData();
    }

}

function sendUpdateBudgetSubMajorHeadData()
{

    var updatesubmajorhead = $("#SubMajorHeadName").val();
    var updatesubmajorheadcode = $("#SubMajorHeadRemarks").val();
    var id = $("#idValue").val();

    $.post(server_base_url + "Budget/Common/BudgetSubMajor/Update", {
        submajorhead: updatesubmajorhead,
        id: id, submajorheadcode: updatesubmajorheadcode
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
                createBudgetSubMajorHead();
            }, 1000);
        }
    });

}

function deleteBudgetSubMajorHead(id)
{

    $.post(server_base_url + "Budget/Common/BudgetSubMajor/Delete", {
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
                viewBudgetSubMajorHeadList('listpanelMainBody');
            }, 1000);

        }
    });
}


