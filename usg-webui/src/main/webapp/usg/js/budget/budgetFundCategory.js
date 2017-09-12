/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayBudgetFundCategory() {
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetCommonMenuTabs()">Common Master</a></label> >> <label>Fund Category</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetFinancialYearMain"/>');

    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetTypeMainDiv"/>');

    $("#budgetTypeMainDiv").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='fundCategorypanel'/>");


    $("#fundCategorypanel").append("<div id='fundCategoryFirstPanel' class='panel panel-blue' />");
    $("#fundCategoryFirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='firstHeader' class='panel-title' />");
    $("#firstHeader").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>Fund Category Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colFundCategory'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");

    $("#fundCategoryFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#colFundCategory").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colFundCategory span").hasClass("glyphicon-minus-sign")) {
            $("#colFundCategory").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colFundCategory").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");

    $("#panelMainBody").append("<div id='budgetTypeMessageDiv'></div>");
    $("#panelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
    $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');
    $("#panelMainBody").append('<input type="hidden" id="idValue">');

    $("#formBodyPalDiv").append("<div id='fundCategoryGroup' class='form-group' />");
    $("#fundCategoryGroup").append("<label class='col-sm-3 control-label'>Fund Category:&nbsp;<span class='require'>*</span></label>");
    $("#fundCategoryGroup").append("<div id='fundCategoryFieldDiv' class='col-sm-9' />");
    $("#fundCategoryFieldDiv").append("<input type='text' id='fundCategory' class='form-control' size=50 maxlength=50>");
    $("#fundCategoryFieldDiv").append("<span id='fundCategoryErr'></span>");
    $("#formBodyPalDiv").append("<div id='fundCategoryGroup1' class='form-group' />");
    $("#fundCategoryGroup1").append("<label class='col-sm-3 control-label'>Remarks</label>");
    $("#fundCategoryGroup1").append("<div id='fundCategoryDiv1' class='col-sm-9' />");
    $("#fundCategoryDiv1").append("<input type='text' id='remarks' class='form-control' size=50 maxlength=50>");
    $("#fundCategoryDiv1").append("<span id='remarksErr'></span>");
    $("#panelMainBody").append("<div id='fundCategoryBtnDiv' class='row' />");
    $("#fundCategoryBtnDiv").append("<div  class='col-xs-3' /><div class='col-xs-2'><center><button type='button' value='Save' class='btn btn-success mr5 pull-right' onclick='budgetfundcategoryValidation()'>Save</button></center></div><div class='col-xs-2'><center><button type='button' onclick='clearFundCategory()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Reset</button></center></div>");
    $("#preg_ppid").focus();

    $("#fundCategorypanel").append("<div id='fundCategoryListPanel' class='panel panel-blue' />");
    $("#fundCategoryListPanel").append("<div id='fundCategoryListPanelHeading' class='panel-heading' />");
    $("#fundCategoryListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>List of Fund Categories</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colFundCategoryList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#fundCategoryListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colFundCategoryList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colFundCategoryList span").hasClass("glyphicon-minus-sign")) {
            $("#colFundCategoryList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colFundCategoryList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });

    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");


    viewFundcategory('listpanelMainBody');
}
function updateFundCategory(id, obj) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#fundCategory").val(obj.fundCategory);
    $("#remarks").val(obj.remarks);
    $("#idValue").val(id);
    $("#displayRelationTableBody tr").css("background-color", "white");
    $("#displayRelationTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");

    $("#fundCategoryBtnDiv").text("").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Update' class='btn btn-success mr5 pull-right' onclick='budgetfundcategoryUpdateValidation()'>Update</button></div><div class='col-xs-2'><button type='button' onclick='displayBudgetFundCategory()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Back</button></div>");
    $("#preg_ppid").focus();
}
function deleteFundCategoryData(id) {

    $.post(server_base_url + "/budget/master/FundCategory/Delete", {
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
                viewFundcategory('listpanelMainBody');
            }, 500);
        }

    });


}
function budgetfundcategoryUpdateValidation() {

    var fundCategory = $("#fundCategory").val();

    if (fundCategory == "") {
        $("#fundcategory").focus();
        addSomeClass("fundCategoryFieldDiv", "has-error");
        displaySmallErrorMessagesInRed("fundCategoryErr", "Please Enter Fund Category.");
    } else
    {
        sendFundCategoryUpdateData();
    }
}

function sendFundCategoryUpdateData() {
    var id = $("#idValue").val();
    var fundCategory = $("#fundCategory").val();
    var remarks = $("#remarks").val();

    var fundcategoryJson = {
        fundCategory: fundCategory,
        remarks: remarks
    }

    fundcategoryJson = JSON.stringify(fundcategoryJson);
    $.post(server_base_url + "/budget/master/FundCategory/Update", {
        fundcategoryJson: fundcategoryJson,
        id: id

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
                displayBudgetFundCategory();
            }, 1000);
        }
    });

}
function viewFundcategory(divId) {

    $("#" + divId).text("").append("<div id='ErrorDiv'/>");
    $("#" + divId).append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered' id='example1' />");


    $.get(server_base_url + "/budget/master/FundCategory/View", {
    }).done(function(pdata) {
        if (pdata == fail) {
            displaySmallErrorMessagesInRed("ErrorDiv", failMessage + "");

        } else if (pdata == unauthorized) {

            displaySmallErrorMessagesInRed("ErrorDiv", unauthorizedMessage + "");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata == statusException) {
            displaySmallErrorMessagesInRed("ErrorDiv", statusExceptionMessage + "");
        }

        else {
            if (pdata != null) {
                if (pdata.length > 0) {

                    $("#example1").append("<thead class=''><tr>"
                            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
                            + " <th> S.No</th>"
                            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Fund Category</th>"
                            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Remarks</th>"
                            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
                            + "<th style='min-width:1%;width:80px;''><i class='fa' style='font-size:21px;'></i> Delete</th>"
                            + "</tr></thead>");
                    var sno = 0;

                    $("#example1").append("<tbody id='displayRelationTableBody' class='table-striped table-bordered' />");

                    for (var i = pdata.length - 1; i >= 0; i--) {
                        sno++;
                        var assjson = {
                            aid: pdata[i]._id.$oid,
                            fundCategory: pdata[i].fundCategory,
                            remarks: pdata[i].remarks


                        }

                        assjson = JSON.stringify(assjson);

                        $("#displayRelationTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].fundCategory + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].remarks + "</td>"
                                //  + "<td style='cursor:pointer;' onclick=updateRelation('" + pdata[i]._id.$oid + "','" + pdata[i].relation + "',,'" + pdata[i].relationRemarks + "')>" + ' <button type="button" class="removebutton" style="align:center;color:red" title="Edit this Relation" >EDIT</button>' + "</td>"
                                + "<td style='cursor:pointer;' onclick=updateFundCategory('" + pdata[i]._id.$oid + "','" + encodeURI(assjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>"
                                + "<td style='cursor:pointer;' onclick=deletePopUp('deleteFundCategoryData','viewFundcategory','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");
                    }


                    $("#example1").dataTable();
                }

            }

        }
    });


}
function clearFundCategory() {
    $("#fundCategory").val("");
    $("#remarks").val("");
    $("#fundCategoryErr").text("");
    $("#remarkErr").text("");
    $("#pregsuccessBefore").text("");
}
function budgetfundcategoryValidation() {

    var fundCategory = $("#fundCategory").val();

    if (fundCategory == "") {
        $("#fundcategory").focus();
        addSomeClass("fundCategoryFieldDiv", "has-error");
        displaySmallErrorMessagesInRed("fundCategoryErr", "Please Enter Fund Category.");
    }
    else {
        sendFundCategoryData();
    }
}

function sendFundCategoryData() {

    var fundCategory = $("#fundCategory").val();
    var remarks = $("#remarks").val();

    var fundcategoryJson = {
        fundCategory: fundCategory,
        remarks: remarks
    }

    fundcategoryJson = JSON.stringify(fundcategoryJson);
    $.post(server_base_url + "/budget/master/FundCategory/Save", {
        fundcategoryJson: fundcategoryJson

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
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            ;
            setTimeout(function() {
                displayBudgetFundCategory();
            }, 1000);
        }

    });

}