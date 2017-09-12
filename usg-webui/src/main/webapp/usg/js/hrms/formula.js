/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function displayFormulaForm() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>>> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>Formula Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="formulaMainDiv"/>');
    $("#formulaMainDiv").text("").append("<div id='formulaMainRowDiv'  >");
    if (checkUserPrivelege(pvCreateFormula)) {
        $("#formulaMainRowDiv").append("<div id='formulacolumnDiv' class='row'>");
        $("#formulaMainRowDiv").append("<div id='formulaListcolumnDiv' >");
        $("#formulacolumnDiv").text("").append("<div class='col-lg-5' id='formulapanel'  />");
        $("#formulacolumnDiv").append("<div class='col-lg-3' id='calculator' />");
        $("#formulacolumnDiv").append("<div class='col-lg-4' id='textpanel'  />");

        $("#formulapanel").append("<div id='formulaFirstPanel'  class='panel panel-blue' />");
        $("#formulaFirstPanel").append("<div id='formulafirstPanelHeading' class='panel-heading' />");
        $("#formulafirstPanelHeading").append("<h4 id='formulatableHeader1' class='panel-title' />");
        $("#formulatableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;'  class='panel_font' data-parent='#accordion2'><center>Formula Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colformulamasterdiv'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#formulaFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");

        $("#colformulamasterdiv").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colformulamasterdiv span").hasClass("glyphicon-minus-sign")) {
                $("#colformulamasterdiv").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colformulamasterdiv").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });

        $("#collapseOne2").append("<div id='formulapanelBodyDiv' style=' height: 330px;' class='panel-body'>");
        $("#formulapanelBodyDiv").append("<div id='PFTypepanelRow' class='row' />");
        $("#PFTypepanelRow").append("<div id='formulaMessageDiv' class='col-lg-12'></div>");
        $("#formulapanelBodyDiv").append("<div id='formulaformDiv' class='form-horizontal'>");
        $("#formulaformDiv").append("<div id='formulaformBodyDiv' class='form-body pal'>");
        $("#formulaformBodyDiv").append('<div class="form-group" id="formulaGroupDiv"/>');
        $("#formulaformBodyDiv").append('<div class="row" id="descriptionRowDiv">');
        $("#descriptionRowDiv").append('<div class="col-md-3 control-label" id="descriptionLabelDiv"/>');
        $("#descriptionLabelDiv").append(getLabel("Description", "required"));
        $("#descriptionRowDiv").append('<div class="col-md-9" id="descriptionInputGroupDiv">');
        $("#descriptionInputGroupDiv").append(getInput("description", "Enter Description", "", "onkeyup='return Religion(event)'"));
        $("#descriptionInputGroupDiv").append("<span id='descriptionErr'></span>");
        $("#formulaformBodyDiv").append('<input type="hidden" id="hidformula">');
        $("#formulaformBodyDiv").append('<div class="row" id="formulaRowDiv">');
        $("#formulaRowDiv").append('<div class="col-md-3 control-label" id="formulaLabelDiv"/>');
        $("#formulaLabelDiv").append(getLabel("Formula", "required"));
        $("#formulaRowDiv").append('<div class="col-md-9" id="formulaInputGroupDiv">');
        $("#formulaInputGroupDiv").append(getInput("formula", "Enter Formula", "", "onkeyup='return Religion(event)'"));
        $("#formulaInputGroupDiv").append("<span id='formulaErr'></span>");

        $("#formulaformBodyDiv").append('<div class="row" id="orderRowDiv">');
        $("#orderRowDiv").append('<div class="col-md-3 control-label" id="orderLabelDiv"/>');
        $("#orderLabelDiv").append(getLabel("Order", "required"));
        $("#orderRowDiv").append('<div class="col-md-9" id="orderInputGroupDiv">');
        $("#orderInputGroupDiv").append(getInput("order", "Enter Order", "", "onkeyup='return Religion(event)'"));
        $("#orderInputGroupDiv").append("<span id='orderErr'></span>");

        $("#formulaformBodyDiv").append("<div id='formulaButtonRowDiv' class='row' />");
        $("#formulaButtonRowDiv").append("<div  class='col-xs-12' id='formulaButtonRow'/><center><button type='button'  id='formulaSave' value='Save' class='btn btn-success bn'  onclick='validateFormula()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetFormula()' class='btn btn-warning bn' id='formulaReset'name='reset' value='reset'>Reset</button></center></div>");
        $("#formula").prop("disabled", true);
//calculator
        $("#calculator").append("<div id='calculatorFirstPanel'  class='panel panel-blue' />");
        $("#calculatorFirstPanel").append("<div id='calculatorfirstPanelHeading' class='panel-heading' />");
        $("#calculatorfirstPanelHeading").append("<h4 id='calculatortableHeader1' class='panel-title' />");
        $("#calculatortableHeader1").append("<div class='panel-title' a data-toggle='collapse'style='font-weight:bold;font-size:15px;' class='panel_font' data-parent='#accordion2' ><center>Calculator</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='coldivforcalculator'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#calculatorFirstPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");

        $("#coldivforcalculator").click(function () {
            $("#collapseOne3").toggle();
            if ($("#coldivforcalculator span").hasClass("glyphicon-minus-sign")) {
                $("#coldivforcalculator").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#coldivforcalculator").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='calpanelMainBody' style=' height: 330px;'  class = 'panel-body' />");
        $("#calpanelMainBody").append("<div id='calpanelpanelRow' class='row' />");

        //$("#calpanelpanelRow").append("<div id='formulaformDiv1' class='form-horizontal'>");
        $("#calpanelpanelRow").append("<div id='formulaformBodyDiv1' class='form-body pal'>");
        $("#formulaformBodyDiv1").append("<div id='calrow1' class='form-group' />");

        $("#calrow1").append("<input type='submit' value='*' onclick=a('*') class='btn col-lg-3 control-label'/>");
        $("#calrow1").append("<input type='submit' value='+' onclick=b('+') class='btn col-lg-3 control-label'/>");
        $("#calrow1").append("<input type='submit' value='-' onclick=c('-') class='btn col-lg-3 control-label'/>");
        $("#calrow1").append("<input type='submit' value='/' onclick=d('/') class='btn col-lg-3 control-label'/>");

        //$("#calpanelpanelRow").append("<div id='formulaformDiv2' class='form-horizontal'>");
        $("#calpanelpanelRow").append("<div id='formulaformBodyDiv2' class='form-body pal'>");
        $("#formulaformBodyDiv2").append("<div id='calrow2' class='form-group' />");

        $("#calrow2").append("<input type='submit' value='(' onclick=e('(') class='btn col-lg-3 control-label'>");
        $("#calrow2").append("<input type='submit' value=')' onclick=f(')') class='btn col-lg-3 control-label'>");
        $("#calrow2").append("<input type='submit' value='.' onclick=q('.') class='btn col-lg-3 control-label'>");
        $("#calrow2").append("<input type='submit' value='1' onclick=h('1') class='btn col-lg-3 control-label'>");

        // $("#calpanelpanelRow").append("<div id='formulaformDiv3' class='form-horizontal'>");
        $("#calpanelpanelRow").append("<div id='formulaformBodyDiv3' class='form-body pal'>");
        $("#formulaformBodyDiv3").append("<div id='calrow3' class='form-group' />");

        $("#calrow3").append("<input type='submit' value='2' onclick=i('2') class='btn col-lg-3 control-label'>");
        $("#calrow3").append("<input type='submit' value='3' onclick=j('3') class='btn col-lg-3 control-label'>");
        $("#calrow3").append("<input type='submit' value='4' onclick=k('4') class='btn col-lg-3 control-label'>");
        $("#calrow3").append("<input type='submit' value='5' onclick=l('5') class='btn col-lg-3 control-label'>");

        //  $("#calpanelpanelRow").append("<div id='formulaformDiv4' class='form-horizontal'>");
        $("#calpanelpanelRow").append("<div id='formulaformBodyDiv4' class='form-body pal'>");
        $("#formulaformBodyDiv4").append("<div id='calrow4' class='form-group' />");

        $("#calrow4").append("<input type='submit' value='6' onclick=m('6') class='btn col-lg-3 control-label'>");
        $("#calrow4").append("<input type='submit' value='7' onclick=n('7') class='btn col-lg-3 control-label'>");
        $("#calrow4").append("<input type='submit' value='8' onclick=o('8') class='btn col-lg-3 control-label'>");
        $("#calrow4").append("<input type='submit' value='9' onclick=p('9') class='btn col-lg-3 control-label'>");

        // $("#calpanelpanelRow").append("<div id='formulaformDiv5' class='form-horizontal'>");
        $("#calpanelpanelRow").append("<div id='formulaformBodyDiv5' class='form-body pal'>");
        $("#formulaformBodyDiv5").append("<div id='calrow5' class='form-group' />");
        $("#calrow5").append("<input type='submit' value='0' onclick=g('0') class='btn col-lg-3 control-label'>");
        // $("#calrow5").append("<input type='submit' value='Cl' onclick=r('cl') class='btn col-lg-3 control-label'>");
        $("#calrow5").append("<input type='submit' value='Cl' onclick=r('cl') class='btn col-lg-3 control-label'>");
        $("#calrow5").append("<input type='submit' value='Cl All' onclick=s() class='btn col-lg-3 control-label'>");


        $("#textpanel").append("<div id='textFirstPanel' class='panel panel-blue' />");
        $("#textFirstPanel").append("<div id='textfirstPanelHeading' class='panel-heading' />");
        $("#textfirstPanelHeading").append("<h4 id='texttableHeader1' class='panel-title' />");
        $("#texttableHeader1").append("<div class='panel-title' a data-toggle='collapse' class='panel_font' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>List of Head(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colforSalHeadList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#textFirstPanel").append("<div id='collapseOne4' class='panel-collapse collapse in' />");
        //colforSalHeadList
        $("#colforSalHeadList").click(function () {
            $("#collapseOne4").toggle();
            if ($("#colforSalHeadList span").hasClass("glyphicon-minus-sign")) {
                $("#colforSalHeadList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colforSalHeadList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });

        $("#collapseOne4").append("<div id='textpanelpanelMainBody' style=' height: 330px;'  class = 'panel-body' />");
        $("#textpanelpanelMainBody").append("<div id='textpanelpanelRow'   class='row' />");

        $("#textpanelpanelRow").append("<table id='formula_head_table' style='overflow-y:scroll;overflow-x:hidden;display: inline-block;'    class='table table-bordered table-striped'></table>");
        $("#formula_head_table").append("<thead class=''><tr>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Id</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Description</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Type</th>"
                + "</tr></thead>");
        $("#formula_head_table").append("<tbody id='displayRelationTableBody'  class='table-striped table-bordered' />");

        $.get(server_base_url + "hrms/salary/SalaryHead/ViewList", {
        }).done(function (bdata) {
            var sno = 0;
            bdata = JSON.stringify(bdata);
            bdata = JSON.parse(bdata);

            for (var i = 0; i < bdata.length; i++) {
                if (bdata[i].headType == "Earnings")
                {
                    sno++;
                    $("#displayRelationTableBody").append("<tr id='" + bdata[i].status + "'  >"
                            + "<td style='cursor:pointer;width:20%;'>" + sno + "</td>"
                            + "<td  style='cursor:pointer;width:20%;' onclick=ids(" + bdata[i].displayLevel + ",'" + bdata[i]._id.$oid + "')>" + bdata[i].displayLevel + "</td>"
                            + "<td  style='cursor:pointer;width:20%;' onclick=ids(" + bdata[i].displayLevel + ",'" + bdata[i]._id.$oid + "')>" + bdata[i].description + "</td>"
                            + "<td  style='cursor:pointer;width:20%;' onclick=ids(" + bdata[i].displayLevel + ",'" + bdata[i]._id.$oid + "')>" + bdata[i].headType + "</td></tr>");
                }
            }
            //$('#formula_head_table table').scrollTableBody();

        });

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

    }
    if (checkUserPrivelege(pvViewFormula)) {
        $("#formulaListcolumnDiv").append("<div id='formulaListPanel' class='panel panel-blue' />");
        $("#formulaListPanel").append("<div id='formulaListPanelHeading' class='panel-heading' />");
        $("#formulaListPanelHeading").append("<h4 id='formulafirstHeader1' class='panel-title' />");
        $("#formulafirstHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>List of Formula(s)</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFormulaList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#formulaListPanel").append("<div id='collapseOne6' class='panel-collapse collapse in' />");

        $("#collapseFormulaList").click(function () {
            $("#collapseOne6").toggle();
            if ($("#collapseFormulaList span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFormulaList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFormulaList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne6").append("<div id='formulaPanellistpanelMainBody' class = 'panel-body' />");
        $("#formulaPanellistpanelMainBody").append("<div id='formulalistMessageDiv' align='center'></div>");
        $("#formulaPanellistpanelMainBody").append("<div id='list' class='row' />");
        viewFormulaList('list');
    }

}
function resetFormula()
{
    $("#description").val("");
    $("#formula").val("");
    $("#hidformula").val("");
    $("#order").val("");
    $("#descriptionErr").text("");
    $("#formulaErr").text("");
    $("#orderErr").text("");
    removeSomeClass("orderInputGroupDiv", "has-error");
    removeSomeClass("descriptionInputGroupDiv", "has-error");
    removeSomeClass("formulaInputGroupDiv", "has-error");
}
function validateFormula() {

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
            saveFormula();
        }
    }

}

function saveFormula()
{
    if (checkUserPrivelege(pvCreateFormula)) {
        var description = $("#description").val();
        var formula = $("#formula").val();
        var order = $("#order").val();
        var formulahideen = $("#hidformula").val();

        var Json = {
            description: description,
            formula: formula,
            order: order,
            hiddenformula: formulahideen
        };

        var json = JSON.stringify(Json);
        var userid = getUserSessionElement("userId");

        $.post(server_base_url + "hrms/common/formula/Save", {
            json: json,
            userid: userid
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("formulaMessageDiv", "Invalid username / password" + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("formulaMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("formulaMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("formulaMessageDiv", "No User available" + "");
            } else if (data == duplicate) {
                displayErrorMessages("formulaMessageDiv", existed + "");
                setTimeout(function () {
                    displayFormulaForm();
                }, 1000);

            } else if (data != null) {

                $("#description").prop("disabled", true);
                $("#formula").prop("disabled", true);
                $("#order").prop("disabled", true);
                $("#formulaSave").attr('disabled', true);
                $("#formulaReset").attr('disabled', true);
                displaySuccessMessages("formulaMessageDiv", successMessage, "");
                setTimeout(function () {
                    displayFormulaForm();
                }, 4000);

                //$("#salaryMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;' ><strong>Successfully Saved<strong></div></center>");
            }
        });
    }
}

function a(val)
{

    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function b(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function c(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function d(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function e(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function f(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function g(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function h(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function i(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function j(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function k(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function l(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function m(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function n(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function o(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function p(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function q(val)
{
    document.getElementById("formula").value += val;
    document.getElementById("hidformula").value += val;
}
function ids(val, value)
{

    document.getElementById("formula").value += "#" + val + "#";
    document.getElementById("hidformula").value += "#" + value + "#";
}
//function ids1(val)
//{
//    alert(val);
//
//    document.getElementById("hidformula").value += "#" + val + "#";
//}
function r(val)
{
    var str = document.getElementById("formula").value;
    var hidstr = document.getElementById("hidformula").value;
    var string;
    if (str.charAt(str.length - 1) == "#")
    {
        string = str.substring(0, str.length - 3);
    } else
    {
        string = str.substring(0, str.length - 1);
    }
    var hidstring;
    if (hidstr.charAt(hidstr.length - 1) == "#")
    {
        hidstring = hidstr.substring(0, hidstr.length - 26);
    } else
    {
        hidstring = hidstr.substring(0, hidstr.length - 1);
    }
    document.getElementById("formula").value = string;
    document.getElementById("hidformula").value = hidstring;
}
function s()
{
    document.getElementById("formula").value = "";
    document.getElementById("hidformula").value = "";
}

function viewFormulaList(divId) {
    if (checkUserPrivelege(pvViewFormula)) {
        $("#" + divId).text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
        $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
        $("#viewDataTableDiv").append("<table class='table table-bordered table-warning mb30' id='formulamaintable' />");


        $.get(server_base_url + "hrms/common/Formula/View", {
        }).done(function (pdata) {


            if (pdata == fail) {
                displayLargeErrorMessagesInCenterInRed("formulalistMessageDiv", "" + emptyListMessage + "");
                displayLargeErrorMessagesInCenterInRed("formulalistMessageDiv", "" + emptyListMessage + "");
            } else if (pdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("formulalistMessageDiv", "" + unauthorizedMessage + "");
                displayLargeErrorMessagesInCenterInRed("formulalistMessageDiv", "" + unauthorizedMessage + "");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else {
                if (pdata != null) {
                    if (pdata.length > 0) {

                        $("#formulamaintable").append("<thead><tr id='formulaTableHeadId'>"


                                + " <th class='sno_width'> S.No</th>"
                                + "<th class='table_col_width'><i class='fa'></i>Description</th>"
                                + "<th class='table_col_width'><i class='fa'></i>Formula</th>"
                                + "<th class='table_col_width'><i class='fa'></i>Order</th>");
                        if (checkUserPrivelege(pvUpdateFormula)) {
                            $("#formulaTableHeadId").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
                        }
                        if (checkUserPrivelege(pvDeleteFormula)) {
                            $("#formulaTableHeadId").append("<th class='table_anchor_width'><i class='fa' ></i> Delete</th>");
                        }

                        $("#formulamaintable").append("<tbody id='formulaTableBody' class='table-striped table-bordered' />");
                        var sno = 0;
                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;

                            $("#formulaTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td style='cursor:pointer;'>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].description + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].formula + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].order + "</td>");
                            if (checkUserPrivelege(pvUpdateFormula)) {
                                $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updateFormula('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].description) + "','" + encodeURI(pdata[i].formula) + "','" + encodeURI(pdata[i].order) + "','" + encodeURI(pdata[i].hiddenformula) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");
                            }
                            if (checkUserPrivelege(pvDeleteFormula)) {
                                $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=deletePopUp('deleteFormulaData','viewFormulaList','" + pdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                            }
                        }

                        $("#formulamaintable").dataTable();

                    }

                }

            }
        });
    }
}
function updateFormula(id, obj1, obj2, obj3, obj4) {
    obj1 = decodeURI(obj1);
    obj2 = decodeURI(obj2);
    obj3 = decodeURI(obj3);
    obj4 = decodeURI(obj4);
    $("#description").val(obj1);
    $("#formula").val(obj2);
    $("#order").val(obj3);
    $("#hidformula").val(obj4);
    $("#description").prop("readonly", false);
    $("#formula").prop("readonly", false);
    $("#order").prop("readonly", false);
    $("#formulaTableBody tr").css("background-color", "white");
    $("#formulaTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#formulaButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updateFormulaData('" + id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayFormulaForm()'  class='btn btn-warning bn' >Back</button></center>");
}
function updateFormulaData(id) {

    if (checkUserPrivelege(pvUpdateFormula)) {
        var description = $("#description").val();
        var formula = $("#formula").val();
        var order = $("#order").val();
        var formulahideen = $("#hidformula").val();

        var Json = {
            description: description,
            formula: formula,
            order: order,
            hiddenformula: formulahideen
        };

        var json = JSON.stringify(Json);

        $.post(server_base_url + "hrms/common/Formula/Update", {
            id: id,
            json: json,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("formulaMessageDiv", emptyListMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("formulaMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("formulaMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate) {
                displayErrorMessages("formulaMessageDiv", existed + "");
                setTimeout(function () {
                    displayFormulaForm();
                }, 1000);

            } else if (data != null) {
                $("#description").prop("disabled", true);
                $("#formula").prop("disabled", true);
                $("#order").prop("disabled", true);
                $("#formulaSave").attr('disabled', true);
                $("#formulaReset").attr('disabled', true);
                displaySuccessMessages("formulaMessageDiv", updateSuccessMessage, "");
                setTimeout(function () {
                    displayFormulaForm();
                }, 4000);

            }
        });
    }
}
function formuladelete(id) {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deleteFormulaData(id);
    }

}

function deleteFormulaData(id) {
    if (checkUserPrivelege(pvDeleteFormula)) {
        $.post(server_base_url + "hrms/common/Formula/Delete", {
            id: id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("formulalistMessageDiv", emptyListMessage + "");
            } else if (data == unauthorized) {
                displayErrorMessages("formulalistMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("formulalistMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == delete_map) {
                // dispalyhrmsCommonReligion();
                displayErrorMessages("formulalistMessageDiv", "" + delete_map_messages, "");
                setTimeout(function () {
                    $("#formulalistMessageDiv").text("");
                }, 2100);
            } else {
                displaySuccessMessages("formulalistMessageDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    displayFormulaForm();
                }, 4000);

            }
        });
    }
}