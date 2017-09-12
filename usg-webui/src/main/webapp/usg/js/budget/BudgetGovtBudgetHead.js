/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createBudgetGovtBudgetHead()
{
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetCommonMenuTabs()">Common Master</a></label> >> <label>Govt Budget Head</label>');

    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetTypeMainDiv"/>');

    $("#budgetTypeMainDiv").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='headerName' class='panel-title' />");

    $("#headerName").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Government Budget Head</center>");

    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' class='col-md-5'/>");
    $("#panelMainBody").append('<input type="hidden" id="idValue">');
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelMainBody").append("<div id='budgetTypeMessageDiv'></div>");
    $("#panelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
    $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');
    //Major Head
    $("#formBodyPalDiv").append("<div id='fieldGroup' class='form-group' />");
    $("#fieldGroup").append("<label class='col-sm-3 control-label'>Major Head:&nbsp;<span class='require'>*</span></label>");
    $("#fieldGroup").append("<div id='fieldDiv' class='col-sm-9' />");
    $("#fieldDiv").append("<select id='majorId' class='form-control'>");
    $("#majorId").append("<option id=''value='' >-------------------------------------------------Select Major Head--------------------------------------------------------------</option>");
    $("#fieldDiv").append("<span id='majorIdErr'></span>");
    //Sub major head
    $("#formBodyPalDiv").append("<div id='desGroup' class='form-group' />");
    $("#desGroup").append("<label class='col-sm-3 control-label'>Sub Major Head:&nbsp;<span class='require'>*</span></label>");
    $("#desGroup").append("<div id='desldDiv' class='col-sm-9' />");
    $("#desldDiv").append("<select id='submajorId' class='form-control' ></select>");
    $("#submajorId").append("<option id=''value='' >-----------------------------------------------Select Sub Major Head----------------------------------------------------------</option>");
    $("#desldDiv").append("<span id='submajorIdErr'></span>");
    //Minor Head
    $("#formBodyPalDiv").append("<div id='gradGroup' class='form-group' />");
    $("#gradGroup").append("<label class='col-sm-3 control-label'>Minor Head:&nbsp;<span class='require'>*</span></label>");
    $("#gradGroup").append("<div id='graddDiv' class='col-sm-9' />");
    $("#graddDiv").append("<select id='minorId' class='form-control'></select>");
    $("#minorId").append("<option id=''value='' >--------------------------------------------------Select Minor Head--------------------------------------------------------------</option>");
    $("#graddDiv").append("<span id='minorIdErr'></span>");
    //Sub Minor Head
    $("#formBodyPalDiv").append("<div id='fundGroup' class='form-group' />");
    $("#fundGroup").append("<label class='col-sm-3 control-label'>Sub Minor Head:&nbsp;<span class='require'>*</span></label>");
    $("#fundGroup").append("<div id='fundDiv' class='col-sm-9' />");
    $("#fundDiv").append("<select id='subminorId' class='form-control'></select>");
    $("#subminorId").append("<option id=''value='' >------------------------------------------------Select Sub Minor Head----------------------------------------------------------</option>");
    $("#fundDiv").append("<span id='subminorIdErr'></span>");
    //Remarks
    $("#formBodyPalDiv").append("<div id='postGroup' class='form-group' />");
    $("#postGroup").append("<label class='col-sm-3 control-label'>Remarks:</label>");
    $("#postGroup").append("<div id='postDiv' class='col-sm-9' />");
    $("#postDiv").append("<input type='text' id='remarks' class='form-control's >");
//Order Level
    $("#formBodyPalDiv").append("<div id='orderGroup' class='form-group' />");
    $("#orderGroup").append("<label class='col-sm-3 control-label'>Order:&nbsp;<span class='require'>*</span></label>");
    $("#orderGroup").append("<div id='orderDiv' class='col-sm-9' />");
    $("#orderDiv").append("<input type='text' id='order' class='form-control's >");
    $("#orderDiv").append("<span id='pregppid'></span>");

    $("#panelMainBody").append("<div id='GovtBudgetHeadBtnDiv' class='row' />");
    $("#GovtBudgetHeadBtnDiv").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='budgetGovtValidation()'>Save</button></div><div class='col-xs-2'><button type='button' onclick='resetBudgetgovt()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Reset</button></div>");
    $("#preg_ppid").focus();



    //LIst

    $("#tableHeader").append("<div id='BudgetGovtListPanel' class='panel panel-blue' />");

    $("#BudgetGovtListPanel").append("<div id='BudgetGovtListPanelHeading' class='panel-heading' />");
    $("#BudgetGovtListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");

    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#budgetTypepanel' href='#collapseOne3'><center>List of Government Budget Heads</center></a>");

    $("#BudgetGovtListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");

    addMajorHeadforbudgetgovt();
    addSubMajorforbudgetgovt();
    addMinorforbudgetgovt();
    addSubMinorforbudgetgovt();
    viewBudgetGovtList('listpanelMainBody');
}

function addMajorHeadforbudgetgovt()
{

    $.get(server_base_url + "Budget/Common/BudgetMajorHead/View", {
    }).done(function(bdata) {


        for (var i = 0; i < bdata.length; i++) {
            $("#majorId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].majorHead + "</option>");
        }

    });
}
function addSubMajorforbudgetgovt()
{
    $.get(server_base_url + "Budget/Common/BudgetSubMajor/View", {
    }).done(function(bdata) {

        for (var i = 0; i < bdata.length; i++) {
            $("#submajorId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].subMajorHead + "</option>");
        }

    });
}
function addMinorforbudgetgovt()
{
    $.get(server_base_url + "Budget/Common/BudgetMinorHead/View", {
    }).done(function(bdata) {

        for (var i = 0; i < bdata.length; i++) {
            $("#minorId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].minorHead + "</option>");
        }

    });
}
function addSubMinorforbudgetgovt()
{
    $.get(server_base_url + "Budget/Common/BudgetSubMinor/View", {
    }).done(function(bdata) {

        for (var i = 0; i < bdata.length; i++) {
            $("#subminorId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].subMinorHead + "</option>");
        }

    });
}
function resetBudgetgovt()
{
    $("#remarks").val("");
    $("#order").val("");
    $("#pregppid").text("");
    $("#pregppid1").text("");
    $("#pregsuccessBefore").text("");
    $("#majorId").val("");
    $("#submajorId").val("");
    $("#minorId").val("");
    $("#subminorId").val("");
}


function budgetGovtValidation()
{
    var major = $("#majorId").val();
    var minor = $("#minorId").val();
    var submajor = $("#submajorId").val();
    var subminor = $("#subminorId").val();

    var order = $("#order").val();

    if (order == "") {
        $("#order").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid", "Please enter Order.");
    }
//    } else if (order != "") {
//        if (!order.match((numbervalidation()))) {
//            addSomeClass("fnameFieldGroup", "has-error");
//            displaySmallErrorMessagesInRed("pregppid", "Please enter valid Order.");
//            return false;
//        }
//    }
    else if (major == "") {
        $("#SubMinorHeadRemarks").focus();
        $("#pregppid").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("majorIdErr", "Please Select Major Code.");

    }
    else if (submajor == "") {
        $("#SubMinorHeadRemarks").focus();
        $("#majorIdErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("submajorIdErr", "Please Select Sub Major Code.");

    }
    else if (minor == "") {
        $("#SubMinorHeadRemarks").focus();
        $("#submajorIdErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("minorIdErr", "Please Select Minor Code.");

    }
    else if (subminor == "") {
        $("#SubMinorHeadRemarks").focus();
        $("#minorIdErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("subminorIdErr", "Please Select Sub Minor Code.");

    } else
    {
        $("#subminorIdErr").text("");
        removeSomeClass("fnameFieldGroup", "has-error");
        saveBudgetGovtHead();
    }
}
function saveBudgetGovtHead()
{
    var majorhead = $("#majorId").val();
    var submajorhead = $("#submajorId").val();
    var minorhead = $("#minorId").val();
    var subminorhead = $("#subminorId").val();
    var remarks = $("#remarks").val();
    var order = $("#order").val();

    var budgetgovtjson = {
        majorHead: majorhead,
        subMajorHead: submajorhead,
        minorHead: minorhead,
        subMinorHead: subminorhead,
        order: order,
        remarks: remarks
    }
    $.post(server_base_url + "Budget/Common/BudgetGovtHead/Save", {
        govtbhJson: JSON.stringify(budgetgovtjson)

    }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        }
        else {
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function() {
                createBudgetGovtBudgetHead();
            }, 500);

        }
    });

}
function viewBudgetGovtList(divId)
{

    $("#" + divId).text("").append("<div id='ErrorDiv'/>");
    $("#" + divId).append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='budgetGovttable' />");


    $.get(server_base_url + "Budget/Common/BudgetGovtHead/View", {
    }).done(function(pdata) {


        $("#budgetGovttable").append("<thead class=''><tr>"

                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Major Head</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Sub Major Head</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Minor Head</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Sub Minor Head</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Remarks</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Order Level</th>"
                + "<th style='min-width:1%;width:80px;'>Edit</th>"
                + "<th style='min-width:1%;width:80px;align:center;'> Delete</th>"
                + "</tr></thead>");


        $("#budgetGovttable").append("<tbody id='budgetGovttableBody' class='table-striped table-bordered' />");

        for (var i = pdata.length - 1; i >= 0; i--) {

            $("#budgetGovttableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"

                    + "<td style='cursor:pointer;'>" + pdata[i].majorHead + "</td>"
                    + "<td style='cursor:pointer;'>" + pdata[i].subMajorHead + "</td>"
                    + "<td style='cursor:pointer;'>" + pdata[i].minorHead + "</td>"
                    + "<td style='cursor:pointer;'>" + pdata[i].subMinorHead + "</td>"
                    + "<td style='cursor:pointer;'>" + pdata[i].remarks + "</td>"
                    + "<td style='cursor:pointer;'>" + pdata[i].order + "</td>"
                    + "<td style='cursor:pointer;' onclick=updateBudgetGovt('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].majorHead) + "','" + encodeURI(pdata[i].subMajorHead) + "','" + encodeURI(pdata[i].minorHead) + "','" + encodeURI(pdata[i].subMinorHead) + "','" + encodeURI(pdata[i].order) + "','" + encodeURI(pdata[i].remarks) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>"
                    + "<td style='cursor:pointer;' onclick=deletePopUp('deleteBudgetGovtHead','viewBudgetGovtList','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");


        }


        $("#budgetGovttable").dataTable({
            aaSorting: [[5, 'asc']]
        });

    });



}

function updateBudgetGovt(id, major, submajor, minor, subminor, order, remarks)
{
    var MajorHead = decodeURI(major);
    var subMajorHead = decodeURI(submajor);
    var MinorHead = decodeURI(minor);
    var subMinorHead = decodeURI(subminor);
    var Order = decodeURI(order);
    var Remarks = decodeURI(remarks);
    $("#tableHeader").text("").append("<div id='updateGBHFirstPanel' class='panel panel-blue' />");
    $("#updateGBHFirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='headerName' class='panel-title' />");
    $("#headerName").append("<center>Update Government Budget Head</center>");
    $("#updateGBHFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' class='col-md-5'/>");

    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelMainBody").append("<div id='budgetTypeMessageDiv'></div>");
    $("#panelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
    $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');
    //Major Head
    $("#formBodyPalDiv").append("<div id='fieldGroup' class='form-group' />");
    $("#fieldGroup").append("<label class='col-sm-3 control-label'>Major Head:</label>");
    $("#fieldGroup").append("<div id='fieldDiv' class='col-sm-9' />");
    $("#fieldDiv").append("<select id='updatemajorId' class='form-control'>");

    //Sub major head
    $("#formBodyPalDiv").append("<div id='desGroup' class='form-group' />");
    $("#desGroup").append("<label class='col-sm-3 control-label'>Sub Major Head:</label>");
    $("#desGroup").append("<div id='desldDiv' class='col-sm-9' />");
    $("#desldDiv").append("<select id='updatesubmajorId' class='form-control' ></select>");


    //Minor Head
    $("#formBodyPalDiv").append("<div id='gradGroup' class='form-group' />");
    $("#gradGroup").append("<label class='col-sm-3 control-label'>Minor Head:</label>");
    $("#gradGroup").append("<div id='graddDiv' class='col-sm-9' />");
    $("#graddDiv").append("<select id='updateminorId' class='form-control'></select>");


    //Sub Minor Head
    $("#formBodyPalDiv").append("<div id='fundGroup' class='form-group' />");
    $("#fundGroup").append("<label class='col-sm-3 control-label'>Sub Minor Head:</label>");
    $("#fundGroup").append("<div id='fundDiv' class='col-sm-9' />");
    $("#fundDiv").append("<select id='updatesubminorId' class='form-control'></select>");

    //Remarks
    $("#formBodyPalDiv").append("<div id='postGroup' class='form-group' />");
    $("#postGroup").append("<label class='col-sm-3 control-label'>Remarks:</label>");
    $("#postGroup").append("<div id='postDiv' class='col-sm-9' />");
    $("#postDiv").append("<input type='text' id='updateremarks' value='" + Remarks + "' class='form-control's >");
    $("#postDiv").append("<input type='hidden' id='GBHUpdateid' class='form-control' value=" + id + "  size=50 maxlength=50>");
//Order Level
    $("#formBodyPalDiv").append("<div id='orderGroup' class='form-group' />");
    $("#orderGroup").append("<label class='col-sm-3 control-label'>Order:</label>");
    $("#orderGroup").append("<div id='orderDiv' class='col-sm-9' />");
    $("#orderDiv").append("<input type='text' id='updateorder' value='" + Order + "' class='form-control's >");
    $("#orderDiv").append("<span id='pregppid'></span>");

    $("#panelMainBody").append("<div id='minorheadBtnDiv' class='row' />");

    $("#minorheadBtnDiv").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='budgetGovtupdateValidation()'>Update</button></div><div class='col-xs-2'><button type='button' onclick='createBudgetGovtBudgetHead()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Back</button></div>");
    $("#preg_ppid").focus();
    addMajorforUpdate(MajorHead);
    addSubMajorforUpdate(subMajorHead);
    addMinorforUpdate(MinorHead);
    addSubMinorforUpdate(subMinorHead);
}

function addMajorforUpdate(name)
{
    $.get(server_base_url + "Budget/Common/BudgetMajorHead/View", {
    }).done(function(bdata) {


        for (var i = 0; i < bdata.length; i++) {
            if (name == bdata[i].majorHead) {
                $("#updatemajorId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].majorHead + "</option>");
            } else {
                $("#updatemajorId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].majorHead + "</option>");
            }
        }

    });
}
function addSubMajorforUpdate(name)
{
    $.get(server_base_url + "Budget/Common/BudgetSubMajor/View", {
    }).done(function(bdata) {

        for (var i = 0; i < bdata.length; i++) {
            if (name == bdata[i].subMajorHead) {
                $("#updatesubmajorId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].subMajorHead + "</option>");
            } else {
                $("#updatesubmajorId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].subMajorHead + "</option>");
            }
        }
    });
}
function addMinorforUpdate(id)
{
    $.get(server_base_url + "Budget/Common/BudgetMinorHead/View", {
    }).done(function(bdata) {

        for (var i = 0; i < bdata.length; i++) {
            if (id == bdata[i].minorHead) {
                $("#updateminorId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].minorHead + "</option>");
            } else {
                $("#updateminorId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].minorHead + "</option>");
            }

        }
    });
}
function addSubMinorforUpdate(id)
{
    $.get(server_base_url + "Budget/Common/BudgetSubMinor/View", {
    }).done(function(bdata) {

        for (var i = 0; i < bdata.length; i++) {
            if (id == bdata[i].subMinorHead) {
                $("#updatesubminorId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].subMinorHead + "</option>");
            } else {
                $("#updatesubminorId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].subMinorHead + "</option>");
            }
        }
    });
}
function budgetGovtupdateValidation()
{
    var order = $("#updateorder").val();

    if (order == "") {
        $("#order").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("pregppid", "Please enter Order.");
    } else if (order != "") {
        if (!order.match((numbervalidation()))) {
            addSomeClass("fnameFieldGroup", "has-error");
            displaySmallErrorMessages("pregppid", "Please enter valid Order.");
            return false;
        }
        $("#pregppid").text("");
        removeSomeClass("fnameFieldGroup", "has-error");
        saveUpdateBudgetGovt();
    }
}
function saveUpdateBudgetGovt()
{
    var id = $("#GBHUpdateid").val();
    var majorhead = $("#updatemajorId").val();
    var submajorhead = $("#updatesubmajorId").val();
    var minorhead = $("#updateminorId").val();
    var subminorhead = $("#updatesubminorId").val();
    var remarks = $("#updateremarks").val();
    var order = $("#updateorder").val();

    var updatebudgetgovtjson = {
        majorHead: majorhead,
        subMajorHead: submajorhead,
        minorHead: minorhead,
        subMinorHead: subminorhead,
        order: order,
        remarks: remarks
    }
    $.post(server_base_url + "Budget/Common/BudgetGovtHead/Update", {
        govtbhJson: JSON.stringify(updatebudgetgovtjson),
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
        } else if (data == "existed") {
            displayLargeErrorMessages("pregsuccessBefore", "" + existMessage + "<br /><br />");
        }
        else {
            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            setTimeout(function() {
                createBudgetGovtBudgetHead();
            }, 1000);

        }
    });

}
function deleteBudgetGovtHead(id)
{
    $.post(server_base_url + "Budget/Common/BudgetGovtHead/Delete", {
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
                viewBudgetGovtList('listpanelMainBody');
            }, 1000);

        }
    });
}

