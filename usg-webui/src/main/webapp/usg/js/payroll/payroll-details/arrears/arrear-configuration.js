/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @misha thomas
 */
function arrearConfiguration(divId)
{
    scrolupfunction();
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a>><a href="javascript:void(0)" onclick="arrearProcess()" data-toggle="tab">Arrear Process</a>');
    $("#" + divId).text("").append('<div id="ArrearConfig"></div>');

    $("#ArrearConfig").text("").append("<div id='tableHeader'/>");
    if (checkUserPrivelege(pvCreateArrearConfiguration)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Arrear Configuration</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='arrearConf'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#arrearConf").click(function () {
            $("#collapseOne2").toggle();
            if ($("#arrearConf span").hasClass("glyphicon-minus-sign")) {
                $("#arrearConf").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#arrearConf").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='arrearConfigpanelMainBody' class = 'panel-body' />");
        $("#arrearConfigpanelMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#arrearConfigpanelMainBody").append("<div id='disciplinepanelRow' class='row' />");

        $("#disciplinepanelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#disciplinepanelRow").append("<div id='arrearConfigMessageDiv'></div>");
        $("#arrearConfigpanelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
        $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');
        $("#formBodyPalDiv").append('<div  id="arrearConfigFieldDiv1"  class="form-group" />');

        $("#arrearConfigFieldDiv1").append('<label for="arrearConfigName"  class="col-md-3 control-label">DDO&nbsp;<span class="require">*</span></label>');
        $("#arrearConfigFieldDiv1").append('<div id="colmd91" class="col-md-9" />');
        $("#colmd91").append('<div  id="inputIconright1" class="" />');
        $("#inputIconright1").append("<select id='ddoId' class='form-control' ></select>");
        getLoggedInDDOInDropDown("ddoId", "");
        // $("#ddoId").append("<option id=''value='0' >-------------Select DDO-----------------------------------------</option>");
        $("#colmd91").append("<span id='ddoIdErr'></span>");

        $("#formBodyPalDiv").append('<div  id="arrearConfigFieldDiv2"  class="form-group" />');
        $("#arrearConfigFieldDiv2").append('<label for="Head"  class="col-md-3 control-label">Head&nbsp;<span class="require">*</span></label>');
        $("#arrearConfigFieldDiv2").append('<div id="colmd92" class="col-md-9" />');
        $("#colmd92").append('<div  id="inputIconright2" class=""/>');
        $("#inputIconright2").append("<select id='headId' class='form-control' ></select>");
        $("#headId").append("<option id=''value='0' >-------------Select Heads-----------------------------------------</option>");
        $("#colmd92").append("<span id='headIdErr'></span>");

        $("#formBodyPalDiv").append('<div  id="arrearConfigFieldDiv3"  class="form-group" />');
        $("#arrearConfigFieldDiv3").append('<label for="orderId"  class="col-md-3 control-label">Order&nbsp;<span class="require">*</span></label>');
        $("#arrearConfigFieldDiv3").append('<div id="colmd93" class="col-md-9" />');
        $("#colmd93").append('<div  id="inputIconright3" class=""/>');
        $("#inputIconright3").append('<input type="text" id="orderId"   class="form-control" / >');
        $("#inputIconright3").append("<span id='orderIdErr'></span>");

        $("#panelBodyDiv").append('<div id="panelRowa2" />');
        $("#panelRowa2").append('<div  id="disciplineButton" class="" />');
        $("#disciplineButton").append('<center><button id="disciplineButtonSave" type="submit" onclick="ArrearconfigValidation()" class="btn btn-success mr5">Save</button>&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="clearArrearConfig()">Reset</button></center>');

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

     




        viewArrearConfigList();
        //   getDDOListforarrearConfig();
        getHeadListforarrearConfig();

    }
}
function getDDOListforarrearConfig()
{
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (pdata) {
        for (var i = 0; i < pdata.length; i++) {
            $("#ddoId").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
        }
    });
}
function getHeadListforarrearConfig()
{
    $.get(server_base_url + "hrms/salary/SalaryHead/SearchByHeadType", {
        headType: "headType",
        value: "Earnings"
    }).done(function (pdata) {
        for (var i = 0; i < pdata.length; i++) {
            $("#headId").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
        }
    });
}
function clearArrearConfig()
{

    //  $("#ddoId").val("0");
    $("#headId").val("0");
    $("#orderId").text("").val("");
    $("#ddoIdErr").text("").val("");
    $("#headIdErr").text("").val("");
    $("#orderIdErr").text("").val("");
    removeSomeClass("colmd91", "has-error");
    removeSomeClass("colmd92", "has-error");
    removeSomeClass("colmd93", "has-error");

}

function ArrearconfigValidation()
{
    removeSomeClass("colmd91", "has-error");
    removeSomeClass("colmd92", "has-error");
    removeSomeClass("colmd93", "has-error");
    $("#ddoIdErr").text("").val("");
    $("#headIdErr").text("").val("");
    $("#orderIdErr").text("").val("");
    var ddo = $("#ddoId").val();
    var head = $("#headId").val();
    var order = $("#orderId").val();
//alert(ddo+head+order);
    if (ddo == "" || ddo == 0) {
        $("#ddoId").focus();
        addSomeClass("colmd91", "has-error");
        displaySmallErrorMessages("ddoIdErr", "Please Select DDO.");
    } else if (head == "" || head == 0) {
        $("#headId").focus();
        $("#ddoIder").text("");
        addSomeClass("colmd92", "has-error");
        displaySmallErrorMessages("headIdErr", "Please Select Head.");
    } else if (order == "") {
        $("#ddoIder").text("");
        $("#headIder").text("");
        $("#orderId").focus();
        addSomeClass("colmd93", "has-error");
        displaySmallErrorMessages("orderIdErr", "Please enter Order.");
    } else if (order != "") {
        $("#ddoIder").text("");
        $("#headIder").text("");
        if (!order.match((numbervalidation()))) {
            $("#orderId").focus();
            addSomeClass("colmd93", "has-error");
            displaySmallErrorMessages("orderIdErr", "Please enter valid Order.");
        } else {

            $("#ddoIdErr").text("");
            $("#orderIdErr").text("");
            $("#headIdErr").text("");
            removeSomeClass("colmd91", "has-error");
            removeSomeClass("colmd92", "has-error");
            removeSomeClass("colmd93", "has-error");
            saveArrearConfiguration();
        }

    }




}

function saveArrearConfiguration()
{
    var ddo = $("#ddoId").val();
    var head = $("#headId").val();
    var order = $("#orderId").val();

    //alert(ddo + head + order);
    $.post(server_base_url + "Payroll/PayrollDetails/ArrearConfig/Save", {
        ddo: ddo,
        head: head,
        order: order

    }).done(function (data) {

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
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function () {
                arrearConfiguration("dashboardBodyMainDiv");
            }, 2000);
        }
    });

}
function viewArrearConfigList(divId)
{
    if (checkUserPrivelege(pvViewArrearConfiguration)) {
        var sno = 0;
        $("#tableHeader").append("<div id='associationListPanel1' />");
        $("#associationListPanel1").text("").append("<div id='associationListPanel' class='panel panel-blue' />");
        $("#associationListPanel").append("<div id='associationListPanelHeading' class='panel-heading' />");
        $("#associationListPanelHeading").append("<h4 id='associationfirstHeader1'  class='panel-title' />");
        $("#associationfirstHeader1 ").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Arrear Configurations</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='arrearConfList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#associationListPanel").append("<div id='collapseOneass2' class='panel-collapse collapse in' />");
        $("#arrearConfList").click(function () {
            $("#collapseOneass2").toggle();
            if ($("#arrearConfList span").hasClass("glyphicon-minus-sign")) {
                $("#arrearConfList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#arrearConfList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOneass2").append("<div id='associationpanelMainBody2' class = 'panel-body' />");
        $("#associationpanelMainBody2").append("<center><span id='associationMsglist'></span></center>");
        $("#associationpanelMainBody2").append("<div id='associationpanelRow5' class='table-responsive' />");
        $("#associationpanelRow5").text("").append("<div id='associationSubDiv1' class = 'panel panel-primary-head'></div>");
        $("#associationSubDiv1").append("<table id='arrearconfigtable' class='table table-bordered'></table>");

        $.get(server_base_url + "Payroll/PayrollDetails/ArrearConfig/View", {
            ddo: getUserSessionElement(seDDOId)
        }).done(function (pdata) {
            $("#arrearconfigtable").append("<thead class=''><tr>"
                    + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> S.No</th>"
                    + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> DDO</th>"
                    + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Head</th>"
                    + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> Order</th>"
                    + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
                    + "<th style='min-width:1%;width:80px;''><i class='fa' style='font-size:21px;'></i> Delete</th>"
                    + "</tr></thead>");

            $("#arrearconfigtable").append("<tbody id='arrearconfigtableBody' class='table-striped table-bordered' />");
//        alert(pdata);

            for (var i = pdata.length - 1; i >= 0; i--) {
                sno++;
                $("#arrearconfigtableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + pdata[i].ddo + "</td>"
                        + "<td style='cursor:pointer;'>" + pdata[i].head + "</td>"
                        + "<td style='cursor:pointer;'>" + pdata[i].order + "</td>"
                        + "<td style='cursor:pointer;' onclick=updateArrearConfig('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].ddo) + "','" + encodeURI(pdata[i].head) + "','" + encodeURI(pdata[i].order) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>"
                        + "<td style='cursor:pointer;'onclick=deletePopUp('deleteArrearConfiguration','viewArrearConfigList','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");

            }


            $('#arrearconfigtable').append("</table>");
            $('#arrearconfigtable').dataTable();
//        $("#arrearconfigtable").dataTable(
//                {
//                    aaSorting: [[3, 'asc']]
//                });


        });



    }
}

function  updateArrearConfig(id, ddo, head, order) {
    if (checkUserPrivelege(pvUpdateArrearConfiguration)) {
        //alert(ddo+head+order)
        $("#orderId").val(order);
        $("#arrearconfigtable tr").css("background-color", "white");
        $("#arrearconfigtable tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#ddoId option:contains(" + ddo + ")").attr('selected', 'selected');
        $("#headId option:contains(" + head + ")").attr('selected', 'selected');
        $("#disciplineButton").text("").append("<center><button id='updateButton' onclick=saveUpdateArrearConfig('" + id + "') class='btn btn-success mr5'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='arrearConfiguration()' id='ddoUpdateReset' class='btn btn-warning mr5'>Back</button></center>");
        //  $("#BtnDiv").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='ArrearconfigUpdateValidation()'>Update</button></div><div class='col-xs-2'><button type='button' onclick='arrearConfiguration()' class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Back</button></div>");

    }
}
function getDDOforupdatearrearConfig(name)
{
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (bdata) {

        if (bdata != null) {
            if (bdata.length > 0)
                for (var i = 0; i < bdata.length; i++) {
                    if (name == bdata[i].ddoName) {
                        $("#updateddoId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].ddoName + "</option>");
                    } else {
                        $("#updateddoId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].ddoName + "</option>");
                    }

                }

        }
    });
}
function getHeadforupdatearrearConfig(name)
{
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (bdata) {

        if (bdata != null) {
            if (bdata.length > 0)
                for (var i = 0; i < bdata.length; i++) {

                    if (name == bdata[i].ddoName) {
                        $("#updateheadId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].ddoName + "</option>");
                    } else {
                        $("#updateheadId").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].ddoName + "</option>");
                    }
                }

        }
    });
}

function saveUpdateArrearConfig(id)
{
    if (checkUserPrivelege(pvCreateArrearConfiguration)) {
        var ddo = $("#ddoId").val();
        var head = $("#headId").val();
        var order = $("#orderId").val();
        var id = id;


        $.post(server_base_url + "Payroll/PayrollDetails/ArrearConfig/Update", {
            ddo: ddo,
            head: head,
            order: order,
            id: id

        }).done(function (data) {

            if (data == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else {
                displaySuccessMessages("pregsuccessBefore", updateMessage, "");
                setTimeout(function () {
                    arrearConfiguration("dashboardBodyMainDiv");
                }, 2000);

            }
        });

    }
}
function deleteArrearConfiguration(id)
{
    if (checkUserPrivelege(pvDeleteArrearConfiguration)) {
        $.post(server_base_url + "Payroll/PayrollDetails/ArrearConfig/Delete", {
            id: id
        }).done(function (data) {
            if (data == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else {
                displaySuccessMessages("pregsuccessBefore", deleteMessage, "");
                setTimeout(function () {
                    arrearConfiguration("dashboardBodyMainDiv");
                }, 2000);
            }
        });
    }
}
