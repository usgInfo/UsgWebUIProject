/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayPensionFormula() {
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionMasters()">Pension Master</a></label> >><label>Pension Formula Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="formulaMainDiv"/>');
    $("#formulaMainDiv").text("").append("<div id='formulaMainRowDiv'  >");
    $("#formulaMainRowDiv").append("<div id='formulacolumnDiv' class='row'>");
    $("#formulaMainRowDiv").append("<div id='formulaListcolumnDiv' >");
    $("#formulacolumnDiv").text("").append("<div class='col-lg-5' id='formulapanel' />");
    $("#formulacolumnDiv").append("<div class='col-lg-3' id='calculator' />");
    $("#formulacolumnDiv").append("<div class='col-lg-4' id='textpanel' />");
    $("#formulapanel").append("<div id='formulaFirstPanel' style=' height: 330px;' class='panel panel-blue' />");
    $("#formulaFirstPanel").append("<div id='formulafirstPanelHeading' class='panel-heading' />");
    $("#formulafirstPanelHeading").append("<h4 id='formulatableHeader1' class='panel-title' />");
    $("#formulatableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>Formula Master</center>");
    $("#formulaFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='formulapanelBodyDiv' class='panel-body pan'>");
    $("#formulapanelBodyDiv").append("<div id='PFTypepanelRow' class='row' />");
    $("#PFTypepanelRow").append("<div id='pensionFormulaMessageDiv' class='col-lg-12'></div>");
    $("#formulapanelBodyDiv").append("<div id='formulaformDiv' class='form-horizontal'>");
    $("#formulaformDiv").append("<div id='formulaformBodyDiv' class='form-body pal'>");
    $("#formulaformBodyDiv").append('<div class="form-group" id="formulaGroupDiv"/>');
    $("#formulaformBodyDiv").append('<div class="row" id="descriptionRowDiv">');
    $("#descriptionRowDiv").append('<div class="col-md-3 control-label" id="descriptionLabelDiv"/>');
    $("#descriptionLabelDiv").append(getLabel("Description", "required"));
    $("#descriptionRowDiv").append('<div class="col-md-9" id="descriptionInputGroupDiv">');
    $("#descriptionInputGroupDiv").append(getInput("description", "Enter Description", "", ""));
    $("#descriptionInputGroupDiv").append("<span id='descriptionErr'></span>");
    $("#formulaformBodyDiv").append('<div class="row" id="formulaRowDiv">');
    $("#formulaRowDiv").append('<div class="col-md-3 control-label" id="formulaLabelDiv"/>');
    $("#formulaLabelDiv").append(getLabel("Formula", "required"));
    $("#formulaRowDiv").append('<div class="col-md-9" id="formulaInputGroupDiv">');
    $("#formulaInputGroupDiv").append(getInput("formula", "Enter Formula", "", ""));
    $("#formulaInputGroupDiv").append("<span id='formulaErr'></span>");
    $("#formulaformBodyDiv").append('<div class="row" id="orderRowDiv">');
    $("#orderRowDiv").append('<div class="col-md-3 control-label" id="orderLabelDiv"/>');
    $("#orderLabelDiv").append(getLabel("Order", "required"));
    $("#orderRowDiv").append('<div class="col-md-9" id="orderInputGroupDiv">');
    $("#orderInputGroupDiv").append(getInput("order", "Enter Order", "", ""));
    $("#orderInputGroupDiv").append("<span id='orderErr'></span>");
    $("#formulaformBodyDiv").append("<div id='formulaButtonRowDiv' class='row' />");
    $("#formulaButtonRowDiv").append("<div  class='col-xs-12' id='formulaButtonRow'/><center><button type='button'  id='formulaSave' value='Save' class='btn btn-success bn'  onclick='validatePensionFormula()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetPensionFormula()' class='btn btn-warning bn' id='formulaReset'name='reset' value='reset'>Reset</button></center></div>");
    $("#formula").prop("disabled", true);
//calculator
    $("#calculator").append("<div id='calculatorFirstPanel' style=' height: 330px;' class='panel panel-blue' />");
    $("#calculatorFirstPanel").append("<div id='calculatorfirstPanelHeading' class='panel-heading' />");
    $("#calculatorfirstPanelHeading").append("<h4 id='calculatortableHeader1' class='panel-title' />");
    $("#calculatortableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>Calculator</center>");
    $("#calculatorFirstPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='calpanelMainBody' class = 'panel-body' />");
    $("#calpanelMainBody").append("<div id='calpanelpanelRow' class='row' />");
    $("#calpanelpanelRow").append("<div id='formulaformBodyDiv1' class='form-body pal'>");
    $("#formulaformBodyDiv1").append("<div id='calrow1' class='form-group' />");
    $("#calrow1").append("<input type='submit' value='*' onclick=a('*') class='btn col-lg-3 control-label'/>");
    $("#calrow1").append("<input type='submit' value='+' onclick=b('+') class='btn col-lg-3 control-label'/>");
    $("#calrow1").append("<input type='submit' value='-' onclick=c('-') class='btn col-lg-3 control-label'/>");
    $("#calrow1").append("<input type='submit' value='/' onclick=d('/') class='btn col-lg-3 control-label'/>");
    $("#calpanelpanelRow").append("<div id='formulaformBodyDiv2' class='form-body pal'>");
    $("#formulaformBodyDiv2").append("<div id='calrow2' class='form-group' />");
    $("#calrow2").append("<input type='submit' value='(' onclick=e('(') class='btn col-lg-3 control-label'>");
    $("#calrow2").append("<input type='submit' value=')' onclick=f(')') class='btn col-lg-3 control-label'>");
    $("#calrow2").append("<input type='submit' value='.' onclick=q('.') class='btn col-lg-3 control-label'>");
    $("#calrow2").append("<input type='submit' value='1' onclick=h('1') class='btn col-lg-3 control-label'>");
    $("#calpanelpanelRow").append("<div id='formulaformBodyDiv3' class='form-body pal'>");
    $("#formulaformBodyDiv3").append("<div id='calrow3' class='form-group' />");
    $("#calrow3").append("<input type='submit' value='2' onclick=i('2') class='btn col-lg-3 control-label'>");
    $("#calrow3").append("<input type='submit' value='3' onclick=j('3') class='btn col-lg-3 control-label'>");
    $("#calrow3").append("<input type='submit' value='4' onclick=k('4') class='btn col-lg-3 control-label'>");
    $("#calrow3").append("<input type='submit' value='5' onclick=l('5') class='btn col-lg-3 control-label'>");


    $("#calpanelpanelRow").append("<div id='formulaformBodyDiv4' class='form-body pal'>");
    $("#formulaformBodyDiv4").append("<div id='calrow4' class='form-group' />");

    $("#calrow4").append("<input type='submit' value='6' onclick=m('6') class='btn col-lg-3 control-label'>");
    $("#calrow4").append("<input type='submit' value='7' onclick=n('7') class='btn col-lg-3 control-label'>");
    $("#calrow4").append("<input type='submit' value='8' onclick=o('8') class='btn col-lg-3 control-label'>");
    $("#calrow4").append("<input type='submit' value='9' onclick=p('9') class='btn col-lg-3 control-label'>");


    $("#calpanelpanelRow").append("<div id='formulaformBodyDiv5' class='form-body pal'>");
    $("#formulaformBodyDiv5").append("<div id='calrow5' class='form-group' />");
    $("#calrow5").append("<input type='submit' value='0' onclick=g('0') class='btn col-lg-3 control-label'>");
    $("#calrow5").append("<input type='submit' value='Cl' onclick=r('cl') class='btn col-lg-3 control-label'>");
    $("#calrow5").append("<input type='submit' value='Cl All' onclick=s() class='btn col-lg-3 control-label'>");


    $("#textpanel").append("<div id='textFirstPanel' style=' height: 330px;' class='panel panel-blue' />");
    $("#textFirstPanel").append("<div id='textfirstPanelHeading' class='panel-heading' />");
    $("#textfirstPanelHeading").append("<h4 id='texttableHeader1' class='panel-title' />");
    $("#texttableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>List of Head</center>");
    $("#textFirstPanel").append("<div id='collapseOne4' class='panel-collapse collapse in' />");

    $("#collapseOne4").append("<div id='textpanelpanelMainBody' class = 'panel-body' />");
    $("#textpanelpanelMainBody").append("<div id='textpanelpanelRow' class='row' />");

    $("#textpanelpanelRow").append("<table id='example1' class='table table-bordered table-striped'></table>");
    $("#example1").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='glyphicon'></i> Id</th>"
            + "<th class='table_col_width'><i class='glyphicon'></i> Description</th>"

            + "</tr></thead>");
    $("#example1").append("<tbody id='displayRelationTableBody' class='table-striped table-bordered' />");

    $.get(server_base_url + "/pension/master/PensionFormula/GetHeadList", {
    }).done(function (bdata) {

        var sno = 0;
        bdata = JSON.stringify(bdata);
        bdata = JSON.parse(bdata);

        for (var i = bdata.length - 1; i >= 0; i--) {
            sno++;

            $("#displayRelationTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                    + "<td >" + sno + "</td>"
                    + "<td onclick=ids1(" + bdata[i].displayHeadOrder + ")>" + bdata[i].displayHeadOrder + "</td>"

                    + "<td onclick=ids1(" + bdata[i].displayHeadOrder + ")>" + bdata[i].pensionHeadName + "</td></tr>");
        }
        $("#example1").DataTable();
    });


    $("#formulaListcolumnDiv").append("<div id='formulaListPanel' class='panel panel-blue' />");
    $("#formulaListPanel").append("<div id='formulaListPanelHeading' class='panel-heading' />");
    $("#formulaListPanelHeading").append("<h4 id='formulafirstHeader1' class='panel-title' />");
    $("#formulafirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Formula</center>");
    $("#formulaListPanel").append("<div id='collapseOne6' class='panel-collapse collapse in' />");
    $("#collapseOne6").append("<div id='formulaPanellistpanelMainBody' class = 'panel-body' />");
    $("#formulaPanellistpanelMainBody").append("<div id='formulalistMessageDiv'></div>");
    $("#formulaPanellistpanelMainBody").append("<div id='list' class='row' />");
    viewPensionFormulaList('list');
}
function validatePensionFormula() {

    var description = $("#description").val();
    var formula = $("#formula").val();
    var order = $("#order").val();
    if (description == "") {
        $("#description").focus();
        addSomeClass("descriptionInputGroupDiv", "has-error");
        displaySmallErrorMessages("descriptionErr", "Please Enter Description.");
        return false;
    } else if (description != "") {
        if (!description.match((alphabetValidation()))) {
            addSomeClass("descriptionInputGroupDiv", "has-error");
            displaySmallErrorMessages("descriptionErr", "Only alphabets are allowed.");
            return false;
        }
    }
    if (formula == "") {
        $("#formula").focus();
        addSomeClass("formulaInputGroupDiv", "has-error");
        displaySmallErrorMessages("formulaErr", "Please Enter Formula");
        return false;
    }
    if (order == "") {
        $("#order").focus();
        addSomeClass("orderInputGroupDiv", "has-error");
        displaySmallErrorMessages("orderErr", "Please Enter Order");
        return false;
    }
    if (order != "") {
        if (!order.match((numericValidation()))) {
            addSomeClass("orderInputGroupDiv", "has-error");
            displaySmallErrorMessages("orderErr", "Only numbers are allowed.");
            return false;
        } else if (order == "0") {
            addSomeClass("orderInputGroupDiv", "has-error");
            displaySmallErrorMessages("orderErr", "Order Should not be Zero");
            return false;
        } else {
            savePensionFormula();
        }
    }



}

function numericValidation() {

    var sectionVatidate = /^([0-9\u0080-\u024F])*[0-9\u0080-\u024F\.\']*$/;
    return sectionVatidate;
}
function savePensionFormula() {
    var description = $("#description").val();
    var formula = $("#formula").val();
    var order = $("#order").val();

    var assjson = {
        pensionDescription: description,
        pensionFormula: formula,
        pensionOrder: order

    };
    Assjson = JSON.stringify(assjson);
    $.post(server_base_url + "/pension/master/Formula/Save", {
        pensionFormula: Assjson,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("PFTypeMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("PFTypeMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("PFTypeMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {

            $("#description").prop("disabled", true);
            $("#formula").prop("disabled", true);
            $("#order").prop("disabled", true);
            $("#formulaSave").attr('disabled', true);
            $("#formulaReset").attr('disabled', true);
            displaySuccessMessages("PFTypeMessageDiv", successMessage, "");
            setTimeout(function () {
                displayPensionFormula();
            }, 1000);
        }
    });
}
function resetPensionFormula() {
    $("#description").val("");
    $("#formula").val("");
    $("#order").val("");
    $("#descriptionErr").text("");
    $("#formulaErr").text("");
    $("#orderErr").text("");
    removeSomeClass("orderInputGroupDiv", "has-error");
    removeSomeClass("descriptionInputGroupDiv", "has-error");
    removeSomeClass("formulaInputGroupDiv", "has-error");
}

function a1(val)
{
    document.getElementById("formula").value += val;
}
function b1(val)
{
    document.getElementById("formula").value += val;
}
function c1(val)
{
    document.getElementById("formula").value += val;
}
function d1(val)
{
    document.getElementById("formula").value += val;
}
function e1(val)
{
    document.getElementById("formula").value += val;
}
function f1(val)
{
    document.getElementById("formula").value += val;
}
function g1(val)
{
    document.getElementById("formula").value += val;
}
function h1(val)
{
    document.getElementById("formula").value += val;
}
function i1(val)
{
    document.getElementById("formula").value += val;
}
function j1(val)
{
    document.getElementById("formula").value += val;
}
function k1(val)
{
    document.getElementById("formula").value += val;
}
function l1(val)
{
    document.getElementById("formula").value += val;
}
function m1(val)
{
    document.getElementById("formula").value += val;
}
function n1(val)
{
    document.getElementById("formula").value += val;
}
function o1(val)
{
    document.getElementById("formula").value += val;
}
function p1(val)
{
    document.getElementById("formula").value += val;
}
function q1(val)
{
    document.getElementById("formula").value += val;
}

function r1(val)
{
    var str = document.getElementById("formula").value;


    var string = str.substring(0, str.length - 1);

    document.getElementById("formula").value = string;
}
function s1()
{
    document.getElementById("formula").value = "";
}
function ids1(val)
{
    document.getElementById("formula").value += "#" + val + "#";
}
function viewPensionFormulaList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='viewPensionFormula'/>");
    $("#viewPensionFormula").append("<div class='table-responsive' id='viewPensionFormulaSectionTableDiv' />");
    $("#viewPensionFormulaSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayPensionFormulaTable' />");
    $("#displayPensionFormulaTable").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Description</th>"
            + "<th class='table_col_width'><i class='fa'></i>Formula</th>"
            + "<th class='table_col_width'><i class='fa'></i>Display Order</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "/pension/master/Formula/ViewList", {
    }).done(function (bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("PensionFormulalistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("PensionFormulalistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("PensionFormulalistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        }
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                $("#displayPensionFormulaTable").append("<tbody id='displayPensionFormulaTableBody' class='table-striped table-bordered' />");
                for (var i = bdata.length - 1; i >= 0; i--) {
                    sno++;
                    var objJson = {
                        Id: bdata[i]._id.$oid,
                        pensionDescription: bdata[i].pensionDescription,
                        pensionFormula: bdata[i].pensionFormula,
                        pensionOrder: bdata[i].pensionOrder
                    };
                    objJson = JSON.stringify(objJson);
                    $("#displayPensionFormulaTableBody").append("<tr id='" + bdata[i].status + "' class='table_row' >"
                            + "<td>" + sno + "</td>"
                            + "<td class='table_row'>" + bdata[i].pensionDescription + "</td>"
                            + "<td class='table_row'>" + bdata[i].pensionFormula + "</td>"
                            + "<td class='table_row'>" + bdata[i].pensionOrder + "</td>"
                            + "<td> <a href='javascript:void(0);' onclick=updatePensionFormula('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                            + "<td> <a href='javascript:void(0);' onclick=deletePopUp('deletePensionFormulaData','displayPensionFormula','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                }
                $('#displayPensionFormulaTable').append("</table>");
                $('#displayPensionFormulaTable').dataTable();
            }
        }

    });
}
function deletePensionFormula(id) {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deletePensionFormulaData(id);
    }

}

function deletePensionFormulaData(id) {
    $.post(server_base_url + "/pension/master/Formula/Delete", {
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("formulalistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("formulalistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("formulalistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("formulalistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                displayPensionFormula();
            }, 1000);

        }
    });
}

function updatePensionFormula(obj) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);

    $("#description").val(obj.pensionDescription);
    $("#formula").val(obj.pensionFormula);
    $("#order").val(obj.pensionOrder);

    $("#description").prop("readonly", false);
    $("#formula").prop("readonly", false);
    $("#order").prop("readonly", false);


    $("#formulaButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updatePensionFormulaData('" + obj.Id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayPensionFormula()'  class='btn btn-warning bn' >Back</button></center>");
}

function updatePensionFormulaData(id) {

    var description = $("#description").val();
    var formula = $("#formula").val();
    var order = $("#order").val();

    var assjson = {
        pensionDescription: description,
        pensionFormula: formula,
        pensionOrder: order

    };

    Assjson = JSON.stringify(assjson);

    $.post(server_base_url + "/pension/master/Formula/Update", {
        pensionFormula: Assjson,
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {


        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionFormulaMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionFormulaMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionFormulaMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {

        } else {

            displaySuccessMessages("pensionFormulaMessageDiv", updateSuccessMessage, "");
            setTimeout(function () {
                displayPensionFormula();
            }, 1000);

        }
    });
}
