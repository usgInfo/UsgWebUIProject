/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function finMajorHeadMaster(divId, screenId)
{
    if (screenId == "FINANCE")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayFinanceHorizontalBar()">Financial Management</a></label> ');
        // $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=displayBudgetFundType("dashboardBodyMainDiv")>Fund Type Master</a>');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a>><a href="javascript:void(0)" data-toggle="tab">Major Head</a>');

    } else if (screenId == "BUDGET")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
        //$("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetCommonMenuTabs()">Common Masters</a>><a href="javascript:void(0)" data-toggle="tab" onclick=displayBudgetFundType("dashboardBodyMainDiv")>Fund Type Master</a>');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetCommonMenuTabs()">Common Master</a>><a href="javascript:void(0)" data-toggle="tab">Major Head</a>');

    }
    // $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayFinanceHorizontalBar()">Finance</a></label> >> <label><a href="javascript:financeCommonMenuTabs()">Common Master</a></label> >> <label>Major Head</label>');
    $("#" + divId).text("").append('<div id="sectionMainDiv"/>');
//   $("#dashboardBodyMainDiv").removeAttr("class","page-content");
    $("#sectionMainDiv").text("").append("<div id='mainTabMenu'  />");
    $("#mainTabMenu").append("<div id='tableHeader'/>");
    if (checkUserPrivelege(pvCreateMajorCode)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");

        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Major Head</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMajorHead'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");

        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#colMajorHead").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colMajorHead span").hasClass("glyphicon-minus-sign")) {
                $("#colMajorHead").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colMajorHead").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class ='panel-body' />");
        $("#colFinMajHead").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colFinMajHead span").hasClass("glyphicon-minus-sign")) {
                $("#colFinMajHead").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colFinMajHead").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });

        $("#panelMainBody").append("<div id='MajorHeadMessageDiv'></div>");
        $("#panelMainBody").append('<div  id="formBodyPalDiv"  class="panel-body pan form-horizontal"/>');

        //$("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');
        $("#formBodyPalDiv").append('<div  id="majHeadNameDiv"  class="form-group" />');
        $("#majHeadNameDiv").append('<label for="MajorHeadName"  class="col-md-3 control-label">Major Head Name:<span class="require">*</span></label>');
        $("#majHeadNameDiv").append('<div id="colmd9" class="col-md-9" />');
        $("#colmd9").append('<div  id="inputIconright" />');
        $("#inputIconright").append('<i class=""></i><input type="text" id="majorHeadName" placeholder="Major Head Name" class="form-control" maxlength="256"/>');
        $("#colmd9").append("<span id='pregppidsection'></span>");

        $("#formBodyPalDiv").append('<div  id="majHeadCodeDiv"  class="form-group" />');
        $("#majHeadCodeDiv").append('<label for="majorHeadCode"  class="col-md-3 control-label">Major Head Code:<span class="require">*</span></label>');
        $("#majHeadCodeDiv").append('<div id="colmd91" class="col-md-9" />');
        $("#colmd91").append('<div  id="inputIconright1" />');
        $("#inputIconright1").append('<input type="text" id="majorHeadCode" placeholder="Major Head Code" class="form-control" maxlength="256"/>');
        $("#colmd91").append("<span id='pregppidsection1'></span>");

        $("#panelMainBody").append('<div id="panelRowa2" />');
        $("#panelRowa2").append('<div  id="MajorHeadBtnDiv" class=""/>');
        $("#MajorHeadBtnDiv").append('<center><button id="MajorHeadBtnSave" type="submit" onclick="sendMajorHeadData()" class="btn btn-success mr5">Save</button>&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetMajorHead()">Reset</button></center>');


        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

    }

    viewMajorHeadList();



}
function sendMajorHeadData()
{
    if (checkUserPrivelege(pvCreateMajorCode)) {
        var head = $("#majorHeadName").val();
        var code = $("#majorHeadCode").val();

        $("#pregppidsection").text("");
        $("#MajorHeadMessageDiv").text("").val();


        removeSomeClass("majHeadNameDiv", "has-error");
        removeSomeClass("majHeadCodeDiv", "has-error");


        if (head == "" || head == "undefined" || code == "" || code == "undefined") {
            addSomeClass("majHeadNameDiv", "has-error");
            addSomeClass("majHeadCodeDiv", "has-error");
            $("#discription").focus();
            $("#MajorHeadMessageDiv").text("").append("<center><div class='smallErrorMsg' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
            return false;
        }
        $("#pregppidsection").text("");
        removeSomeClass("majHeadNameDiv", "has-error");
        removeSomeClass("majHeadCodeDiv", "has-error");

        $.post(server_base_url + "financial/common/MajorHead/Save", {
            head: head,
            code: code,
            userId: getUserSessionElement("userId")

        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("MajorHeadMessageDiv", "" + failMessage + "<br /><br />");
                displayErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("MajorHeadMessageDiv", "" + unauthorizedMessage + "<br /><br />");
                displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                //displaySmallErrorMessagesInRed("MajorHeadMessageDiv", "" + statusExceptionMessage + "<br /><br />");
                //displaySmallErrorMessagesInRed("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else if (data == duplicate_Message) {
                // displaySmallErrorMessagesInRed("MajorHeadMessageDiv", "" + existMessage + "<br /><br />");
                displayErrorMessages("MajorHeadMessageDiv", existed, "");
                //$("#MajorHeadMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Section is successfully Saved<strong></div></center>");
                setTimeout(function () {
                    finMajorHeadMaster('dashboardBodyMainDiv');
                }, 3000);

            } else if (data != null) {
                $("#majorHeadName").prop("disabled", true);
                $("#majorHeadCode").prop("disabled", true);
                $("#MajorHeadBtnSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("MajorHeadMessageDiv", successMessage, "");
                //$("#MajorHeadMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Section is successfully Saved<strong></div></center>");
                setTimeout(function () {
                    finMajorHeadMaster('dashboardBodyMainDiv');
                }, 3000);

            } else {
                displaySuccessMessages("MajorHeadMessageDiv", successMessage, "");
                // $("#MajorHeadMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Section Creation Failed<strong></div></center>");
            }
        });
    }
}
function resetMajorHead()
{
    $("#majorHeadName").val("");
    $("#majorHeadCode").val("");

    $("#MajorHeadMessageDiv").text("");
    $("#MajorHeadMessageDiv").text("").val();


    removeSomeClass("majHeadNameDiv", "has-error");
    removeSomeClass("majHeadCodeDiv", "has-error");
}
function viewMajorHeadList()
{
    if (checkUserPrivelege(pvViewMajorCode)) {
        $("#tableHeader").append("<div id='maritalListPanel1' />");
        $("#maritalListPanel1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Major Heads</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMajorHeadList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colMajorHeadList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colMajorHeadList span").hasClass("glyphicon-minus-sign")) {
                $("#colMajorHeadList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colMajorHeadList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div id='ErrorDiv'>");
        $("#listpanelRow").append("<div id='sectionlistpanelRow' />");
        $("#sectionlistpanelRow").append("<div class='tab-pane' id='DatatablemainDiv'/>");
        $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
        $("#viewDataTableDiv").append("<table class='table table-bordered' id='majorHeadTable' />");
        $.get(server_base_url + "financial/common/MajorHead/ViewList", {
        }).done(function (pdata) {
            if (BasicIfElseForTable(pdata, "ErrorDiv")) {

                $("#majorHeadTable").append("<thead class=''><tr id='majorHeadTableTrHead'>"
                        //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
                        + " <th> S.No</th>"
                        + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Major Head Name</th>"
                        + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Major Head Code</th>");
                if (checkUserPrivelege(pvUpdateMajorCode)) {
                    $("#majorHeadTableTrHead").append("<th style='min-width:1%;width:80px;'>Edit</th>");
                }
                if (checkUserPrivelege(pvDeleteMajorCode)) {
                    $("#majorHeadTableTrHead").append("<th style='min-width:1%;width:80px;align:center;'> Delete</th>");
                }
                var sno = 0;
                $("#majorHeadTable").append("<tbody id='majorHeadTableBody' class='table-striped table-bordered' />");
                for (var i = pdata.length - 1; i >= 0; i--) {
                    sno++;
                    $("#majorHeadTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].majorHead + "</td>"
                            + "<td style='cursor:pointer;'>" + pdata[i].majorHeadCode + "</td>");
                    if (checkUserPrivelege(pvUpdateMajorCode)) {
                        $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editMajorHead('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].majorHead) + "','" + encodeURI(pdata[i].majorHeadCode) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                    }
                    if (checkUserPrivelege(pvDeleteMajorCode)) {
                        $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteMajorHeadData','viewMajorHeadList','" + pdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                    }
                    //  + "<td style='cursor:pointer;' onclick=updateRelation('" + pdata[i]._id.$oid + "','" + pdata[i].relation + "',,'" + pdata[i].relationRemarks + "')>" + ' <button type="button" class="removebutton" style="align:center;color:red" title="Edit this Relation" >EDIT</button>' + "</td>"

                }
                $("#majorHeadTable").dataTable();
            }
        });
    }
}
function editMajorHead(id, name, code)
{

    id = decodeURI(id);
    name = decodeURI(name);
    code = decodeURI(code);
    $("#pregppidsection").text("");
    $("#majorHeadTableBody tr").css("background-color", "white");
    $("#majorHeadTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    removeSomeClass("majHeadNameDiv", "has-error");
    removeSomeClass("majHeadCodeDiv", "has-error");
    $("#majorHeadName").focus();


    if (id == null || id == "" || id == undefined) {
        return false;
    }


    $("#majorHeadName").val(name);
    $("#majorHeadCode").val(code);
    $("#MajorHeadMessageDiv").text("");
    $("#majorHeadName").prop("readonly", false);
    $("#majorHeadCode").prop("readonly", false);
    //majorHeadTableBody

    $("#majorHeadTableBody tr").css("background-color", "white");
    $("#majorHeadTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#MajorHeadBtnDiv").text("").append("<center><button id='updateButton' onclick=updateMajorHead('" + id + "') class='btn btn-success' >Update</button>&nbsp&nbsp&nbsp;<button  id='ddoUpdateReset' class='btn btn-warning'  onclick='finMajorHeadMaster()'>Back</button></center>");
}
function updateMajorHead(id)
{
    if (checkUserPrivelege(pvUpdateMajorCode)) {
        var majorHeadName = $("#majorHeadName").val();
        var majorHeadCode = $("#majorHeadCode").val();
        if (majorHeadName == "" || majorHeadName == "undefined" || majorHeadCode == "" || majorHeadCode == "undefined") {
            addSomeClass("majHeadNameDiv", "has-error");
            addSomeClass("majHeadCodeDiv", "has-error");
            $("#majorHeadName").focus();
            $("#majorHeadName").focus();
            $("#MajorHeadMessageDiv").text("").append("<center><div class='smallErrorMsg' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
            return false;
        }
        $.post(server_base_url + "financial/common/MajorHead/Update", {
            majorhead: majorHeadName,
            id: id,
            majorheadcode: majorHeadCode,
            userId: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("MajorHeadMessageDiv", "" + failMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("MajorHeadMessageDiv", "" + unauthorizedMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("MajorHeadMessageDiv", "" + statusExceptionMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
            } else if (data == duplicate_Message) {
                // displaySmallErrorMessagesInRed("MinorrHeadMessageDiv", "" + existMessage + "<br /><br />");
                displayErrorMessages("MajorHeadMessageDiv", existed, "");
                //$("#MajorHeadMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Section is successfully Saved<strong></div></center>");
                setTimeout(function () {
                    finMajorHeadMaster('dashboardBodyMainDiv');
                }, 3000);
            } else if (data != null) {
                $("#majorHeadName").prop("disabled", true);
                $("#majorHeadCode").prop("disabled", true);
                $("#MajorHeadBtnSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("MajorHeadMessageDiv", updateSuccessMessage, "");
                //$("#MajorHeadMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Section is successfully Saved<strong></div></center>");
                setTimeout(function () {
                    finMajorHeadMaster('dashboardBodyMainDiv');
                }, 3000);

            } else {
                // displaySuccessMessages("MajorHeadMessageDiv",successMessage,"");
                displayErrorMessages("MajorHeadMessageDiv", +failMessage + "");
                // $("#MajorHeadMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Section Creation Failed<strong></div></center>");
            }
        });
    }
}


function deleteMajorHeadData(id)

{
    if (checkUserPrivelege(pvDeleteMajorCode)) {
        $("#MajorHeadMessageDiv").text("");
        removeSomeClass("majHeadNameDiv", "has-error");
        removeSomeClass("majHeadCodeDiv", "has-error");
        $.post(server_base_url + "financial/common/MajorHead/Delete", {
            id: id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {

                displayLargeErrorMessages("MajorHeadMessageDiv", "" + failMessage + "");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "");
            } else if (data == unauthorized) {

                displayLargeErrorMessages("MajorHeadMessageDiv", "" + unauthorizedMessage + "");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {

                callSessionTimeout();
            } else if (data == statusException) {

                displayLargeErrorMessages("MajorHeadMessageDiv", "" + statusExceptionMessage + "");
                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
            } else if (data == delete_map) {
                displayErrorMessages("ErrorDiv", delete_map_messages);
                setTimeout(function () {
                    viewMajorHeadList();

                }, 3000);

            } else {
                displaySuccessMessages("ErrorDiv", "Deleted Succesfully");
                setTimeout(function () {
                    viewMajorHeadList();

                }, 3000);

            }
        });
    }
}