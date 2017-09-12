/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function finMinorHeadMaster(divId,screenId)
{
     if (screenId == "FINANCE")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayFinanceHorizontalBar()">Financial Management</a></label> ');
       // $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=displayBudgetFundType("dashboardBodyMainDiv")>Fund Type Master</a>');
          $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a>><a href="javascript:void(0)" data-toggle="tab">Minor Head</a>');
 
 // $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a>><a href="javascript:void(0)" data-toggle="tab">Major Head</a>');

    } else if (screenId == "BUDGET")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
        //$("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetCommonMenuTabs()">Common Masters</a>><a href="javascript:void(0)" data-toggle="tab" onclick=displayBudgetFundType("dashboardBodyMainDiv")>Fund Type Master</a>');
         $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetCommonMenuTabs()">Common Master</a>><a href="javascript:void(0)" data-toggle="tab">Minor Head</a>');

    }
    $("#" + divId).text("").append('<div id="sectionMainDiv"/>');
    $("#sectionMainDiv").text("").append("<div id='mainTabMenu'  />");
    $("#mainTabMenu").append("<div id='tableHeader'/>");
    if (checkUserPrivelege(pvCreateMinorCode)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Minor Head</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMinorHead'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#colMinorHead").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colMinorHead span").hasClass("glyphicon-minus-sign")) {
                $("#colMinorHead").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colMinorHead").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });

        $("#collapseOne2").append("<div id='panelMainBody' class ='panel-body' />");
        $("#panelMainBody").append("<div id='MinorrHeadMessageDiv'></div>");
        $("#panelMainBody").append('<div  id="formBodyPalDiv"  class="panel-body pan form-horizontal" />');
        $("#formBodyPalDiv").append('<div  id="majHeadNameDiv"  class="form-group" />');
        $("#majHeadNameDiv").append('<label for="MinorHeadName"  class="col-md-3 control-label">Minor Head Name:<span class="require">*</span></label>');
        $("#majHeadNameDiv").append('<div id="colmd9" class="col-md-9" />');
        $("#colmd9").append('<div  id="inputIconright" class=""/>');
        $("#inputIconright").append('<i class=""></i><input type="text" id="minorHeadName" placeholder="Minor Head Name" class="form-control" maxlength="256"/>');
        $("#colmd9").append("<span id='pregppidsection'></span>");
        $("#formBodyPalDiv").append('<div  id="majHeadCodeDiv"  class="form-group" />');
        $("#majHeadCodeDiv").append('<label for="minorHeadCode"  class="col-md-3 control-label">Minor Head Code:<span class="require">*</span></label>');
        $("#majHeadCodeDiv").append('<div id="colmd91" class="col-md-9" />');
        $("#colmd91").append('<div  id="inputIconright1" class=""/>');
        $("#inputIconright1").append('<i class=""></i><input type="text" id="minorHeadCode" placeholder="Minor Head Code" class="form-control" maxlength="256"/>');
        $("#colmd91").append("<span id='pregppidsection1'></span>");
        $("#panelMainBody").append('<div id="panelRowa2" />');
        $("#panelRowa2").append('<div  id="MinorHeadBtnDiv"  />');
        $("#MinorHeadBtnDiv").append('<center><button id="MinorHeadBtnSave" type="submit" onclick="sendMinorHeadData()" class="btn btn-success mr5">Save</button>&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetMinorHead()">Reset</button></center>');

  $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    
    
    
    }
    viewMinorHeadList();
}
function sendMinorHeadData()
{
    if (checkUserPrivelege(pvCreateMinorCode)) {
        var head = $("#minorHeadName").val();
        var code = $("#minorHeadCode").val();
        $("#pregppidsection").text("");
        $("#MinorrHeadMessageDiv").text("").val();
        removeSomeClass("majHeadNameDiv", "has-error");
        removeSomeClass("majHeadCodeDiv", "has-error");
        if (head == "" || head == "undefined" || code == "" || code == "undefined") {
            addSomeClass("majHeadNameDiv", "has-error");
            addSomeClass("majHeadCodeDiv", "has-error");
            $("#discription").focus();
            $("#MinorrHeadMessageDiv").text("").append("<center><div class='smallErrorMsg' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
            return false;
        }
        $("#pregppidsection").text("");
        removeSomeClass("majHeadNameDiv", "has-error");
        removeSomeClass("majHeadCodeDiv", "has-error");
        $.post(server_base_url + "financial/common/MinorHead/Save", {
            head: head,
            code: code,
            userId: getUserSessionElement("userId")

        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("MinorrHeadMessageDiv", "" + failMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("MinorrHeadMessageDiv", "" + unauthorizedMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                //displaySmallErrorMessagesInRed("MinorrHeadMessageDiv", "" + statusExceptionMessage + "<br /><br />");
                //displaySmallErrorMessagesInRed("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else if (data == duplicate_Message) {
                displayErrorMessages("MinorrHeadMessageDiv", existed, "");
                setTimeout(function () {
                    finMinorHeadMaster('dashboardBodyMainDiv');
                }, 3000);
            } else if (data != null) {
                $("#minorHeadName").prop("disabled", true);
                $("#minorHeadCode").prop("disabled", true);
                $("#MinorHeadBtnSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("MinorrHeadMessageDiv", successMessage, "");
                //$("#MinorrHeadMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Section is successfully Saved<strong></div></center>");
                setTimeout(function () {
                    finMinorHeadMaster('dashboardBodyMainDiv');
                }, 3000);
            } else {
                displaySuccessMessages("MinorrHeadMessageDiv", successMessage, "");
                // $("#MinorrHeadMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Section Creation Failed<strong></div></center>");
            }
        });
    }
}
function resetMinorHead()
{
    $("#minorHeadName").val("");
    $("#minorHeadCode").val("");
    $("#MinorrHeadMessageDiv").text("");
    $("#MinorrHeadMessageDiv").text("").val();
    removeSomeClass("majHeadNameDiv", "has-error");
    removeSomeClass("majHeadCodeDiv", "has-error");
}
function viewMinorHeadList()
{
    if (checkUserPrivelege(pvViewMinorCode)) {
        $("#tableHeader").append("<div id='maritalListPanel1'  />");
        $("#maritalListPanel1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Minor Heads</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMinorHeadList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colMinorHeadList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colMinorHeadList span").hasClass("glyphicon-minus-sign")) {
                $("#colMinorHeadList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colMinorHeadList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div id='ErrorDiv'>");
        $("#listpanelRow").append("<div id='sectionlistpanelRow' class='table-responsive' />");
        $("#sectionlistpanelRow").append("<div class='tab-pane' id='DatatablemainDiv'/>");
        $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
        $("#viewDataTableDiv").append("<table class='table table-bordered' id='minorHeadTable' />");
        $.get(server_base_url + "financial/common/MinorHead/ViewList", {
        }).done(function (pdata) {
            if (BasicIfElseForTable(pdata, "ErrorDiv")) {

                $("#minorHeadTable").append("<thead class=''><tr id='minorHeadTableTrHead'>"
                        //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
                        + " <th> S.No</th>"
                        + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Minor Head Name</th>"
                        + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Minor Head Code</th>");
                if (checkUserPrivelege(pvUpdateMinorCode)) {
                    $("#minorHeadTableTrHead").append("<th style='min-width:1%;width:80px;'>Edit</th>");
                }
                if (checkUserPrivelege(pvDeleteMinorCode)) {
                    $("#minorHeadTableTrHead").append("<th style='min-width:1%;width:80px;align:center;'> Delete</th>");
                }
                var sno = 0;
                $("#minorHeadTable").append("<tbody id='minorHeadTableBody' class='table-striped table-bordered' />");
                for (var i = pdata.length - 1; i >= 0; i--) {
                    sno++;
                    $("#minorHeadTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].minorHead + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].minorHeadCode + "</td>");
                    if (checkUserPrivelege(pvUpdateMinorCode)) {
                        $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editMinorHead('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].minorHead) + "','" + encodeURI(pdata[i].minorHeadCode) + "')>" + ' <i class="fa fa-edit"><a type="button" class="anchor_edit" style="align:center;" >&nbsp;&nbsp;Edit</button>' + "</td>");
                    }
                    if (checkUserPrivelege(pvDeleteMinorCode)) {
                        $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteMinorHead','viewMinorHeadList','" + pdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"><a  id="deletebutton" class="anchor_delete" style="align:center;">&nbsp;&nbsp;Delete</a>' + "</td></tr>");
                    }
                    //  + "<td style='cursor:pointer;' onclick=updateRelation('" + pdata[i]._id.$oid + "','" + pdata[i].relation + "',,'" + pdata[i].relationRemarks + "')>" + ' <button type="button" class="removebutton" style="align:center;color:red" title="Edit this Relation" >EDIT</button>' + "</td>"

                }
                $("#minorHeadTable").dataTable();
            }
        });
    }
}
function editMinorHead(id, name, code)
{
    name = decodeURI(name);
    code = decodeURI(code);
    $("#pregppidsection").text("");
    removeSomeClass("majHeadNameDiv", "has-error");
    removeSomeClass("majHeadCodeDiv", "has-error");
    $("#minorHeadName").focus();
    if (id == null || id == "" || id == undefined) {
        return false;
    }
    $("#minorHeadTableBody tr").css("background-color", "white");
    $("#minorHeadTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");

    $("#minorHeadName").val(name);
    $("#minorHeadCode").val(code);
    $("#MinorrHeadMessageDiv").text("");
    $("#minorHeadName").prop("readonly", false);
    $("#minorHeadCode").prop("readonly", false);
    //viewDataTableDiv
    $("#minorHeadTableBody tr").css("background-color", "white");
    $("#minorHeadTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#MinorHeadBtnDiv").text("").append("<center><button id='updateButton' onclick=updateMinorHead('" + id + "') class='btn btn-success mr5' >Update</button>&nbsp&nbsp&nbsp;<button  id='ddoUpdateReset' class='btn btn-warning mr5'  onclick='finMinorHeadMaster()'>Back</button></center>");
}
function updateMinorHead(id)
{
    if (checkUserPrivelege(pvUpdateMinorCode)) {
        var minorHeadName = $("#minorHeadName").val();
        var minorHeadCode = $("#minorHeadCode").val();
        if (minorHeadName == "" || minorHeadName == "undefined" || minorHeadCode == "" || minorHeadCode == "undefined") {
            addSomeClass("majHeadNameDiv", "has-error");
            addSomeClass("majHeadCodeDiv", "has-error");
            $("#minorHeadName").focus();
            $("#minorHeadName").focus();
            $("#MinorrHeadMessageDiv").text("").append("<center><div class='smallErrorMsg' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
            return false;
        }
        $.post(server_base_url + "financial/common/MinorHead/Update", {
            minorhead: minorHeadName,
            id: id,
            minorheadcode: minorHeadCode,
            userId: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("MinorrHeadMessageDiv", "" + failMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("MinorrHeadMessageDiv", "" + unauthorizedMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("MinorrHeadMessageDiv", "" + statusExceptionMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
            } else if (data == duplicate_Message) {
                displayErrorMessages("MinorrHeadMessageDiv", existed, "");
                //$("#MinorrHeadMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Section is successfully Saved<strong></div></center>");
                setTimeout(function () {
                    finMinorHeadMaster('dashboardBodyMainDiv');
                }, 3000);
            } else if (data != null) {
                $("#minorHeadName").prop("disabled", true);
                $("#minorHeadCode").prop("disabled", true);
                $("#MinorHeadBtnSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("MinorrHeadMessageDiv", updateSuccessMessage, "");
                //$("#MinorrHeadMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Section is successfully Saved<strong></div></center>");
                setTimeout(function () {
                    finMinorHeadMaster('dashboardBodyMainDiv');
                }, 3000);
            } else {
                // displaySuccessMessages("MinorrHeadMessageDiv",successMessage,"");
                displayErrorMessages("MinorrHeadMessageDiv", +failMessage + "");
                // $("#MinorrHeadMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Section Creation Failed<strong></div></center>");
            }
        });
    }
}
//function deleteMajohead(id)
//{
//   
//    if (confirm("Are you sure?")) {
//        $(this).closest('tr').remove();
//        //alert(id);
//        deleteMinorHead(id);
//    }
//}
function deleteMinorHead(id)
{
    if (checkUserPrivelege(pvDeleteMinorCode)) {
        $.post(server_base_url + "financial/common/MinorHead/Delete", {
            id: id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("ErrorDiv", "" + failMessage + "");
                displayErrorMessages("ErrorDiv", "" + failMessage + "");
            } else if (data == delete_map) {
                displayErrorMessages("ErrorDiv", delete_map_messages, "");
                setTimeout(function () {
                    finMinorHeadMaster('listpanelRow');
                }, 3000);
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("ErrorDiv", "" + unauthorizedMessage + "");
                displayErrorMessages("ErrorDiv", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("ErrorDiv", "" + statusExceptionMessage + "");
                displayErrorMessages("ErrorDiv", "" + statusExceptionMessage + "");
            } else {
                displaySuccessMessages("ErrorDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    finMinorHeadMaster('listpanelRow');
                }, 3000);
                //scrolupfunction();

            }
        });
    }
}/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


