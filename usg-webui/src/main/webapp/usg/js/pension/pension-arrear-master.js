/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayPensionArrear() {

    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionMasters()">Pension Master</a></label> >><label>Manage Pension Arrear</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="pensionArrearMainDiv"/>');
    $("#pensionArrearMainDiv").text("").append("<div id='pensionArrearcolumnDiv'>");
    $("#pensionArrearcolumnDiv").append("<div id='pensionArrearFirstPanel' class='panel panel-blue' />");
    $("#pensionArrearFirstPanel").append("<div id='pensionArrearfirstPanelHeading' class='panel-heading' />");
    $("#pensionArrearfirstPanelHeading").append("<h4 id='pensionArreartableHeader1' class='panel-title' />");

//    $("#pensionArreartableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>Pension Arrear Configuration</center>");
//    $("#pensionArrearFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
//    
    $("#pensionArreartableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Pension Arrear Configuration</center>");
    $("#pensionArreartableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colpensionarrear'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#pensionArrearFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");

    addToggleToId('colpensionarrear', 'collapseOne2');

    $("#collapseOne2").append("<div id='pensionArrearpanelMainBody' class = 'panel-body' />");
    $("#pensionArrearpanelMainBody").append("<div id='pensionArrearpanelRow'  class='row'/>");
    $("#pensionArrearpanelRow").append("<div id='pensionArrearMessageDiv' ></div>");

    $("#pensionArrearpanelMainBody").append("<div id='pensionArrearpanelBodyDiv' class='panel-body '>");
    $("#pensionArrearpanelBodyDiv").append("<div id='pensionArrearformDiv' class='form-horizontal'>");
    $("#pensionArrearformDiv").append("<div id='pensionArrearformBodyDiv' class='form-body'>");
    $("#pensionArrearformBodyDiv").append('<div class="form-group" id="pensionArrearGroupDiv"/>');
    $("#pensionArrearGroupDiv").append('<div class="row" id="pensionArrearRowDiv">');
    $("#pensionArrearRowDiv").append('<div class="col-lg-3 control-label" id="pensionArrearLabelDiv"/>');
    $("#pensionArrearLabelDiv").append(getLabel("Head", "required"));
    $("#pensionArrearRowDiv").append('<div class="col-lg-9" id="pensionArrearInputGroupDiv">');
    // $("#pensionArrearInputGroupDiv").append('<div class="form-control" id="headDiv">');
    $("#pensionArrearInputGroupDiv").append('<select id="head" class="form-control"><option value="" >----Select Head----</option></select>');
    $("#pensionArrearInputGroupDiv").append("<span id='pensionArrearErr'></span>");

    $("#pensionArrearformBodyDiv").append('<div class="row" id="pensionArrearOrderRowDiv">');
    $("#pensionArrearOrderRowDiv").append('<div class="col-lg-3 control-label" id="pensionArrearOrderLabelDiv"/>');
    $("#pensionArrearOrderLabelDiv").append(getLabel("Order", "required"));
    $("#pensionArrearOrderRowDiv").append('<div class="col-lg-9" id="pensionArrearOrderInputGroupDiv">');
    $("#pensionArrearOrderInputGroupDiv").append(getInputwithErrLabel("order", "Enter Order", "", "onkeyup=validatePhone('order','orderErr') "));
    $("#orderErr").attr("class", "text-danger");
    $("#order").attr('maxlength', '2');
//    $("#pensionArrearOrderInputGroupDiv").append("<span id='pensionArrearOrderErr'></span>");
    getAllHeadName();
    $("#pensionArrearformBodyDiv").append("<div id='pensionArrearButtonRowDiv' class='row' />");
    $("#pensionArrearButtonRowDiv").append("<div  class='col-xs-12' id='pensionArrearButtonRow'/><center><button type='button'  id='penArrearSave' value='save' class='btn btn-success bn'  onclick='validatepensionArrear()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetpensionArrear()' class='btn btn-warning bn' id='penArrearReset'name='reset' value='reset'>Reset</button></center></div>");
    $("#pensionArrearcolumnDiv").append("<div id='pensionArrearListPanel' class='panel panel-blue' />");
    $("#pensionArrearListPanel").append("<div id='pensionArrearListPanelHeading' class='panel-heading' />");
    $("#pensionArrearListPanelHeading").append("<h4 id='pensionArrearfirstHeader1' class='panel-title' />");

    //$("#pensionArrearfirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Pension Arrear Configuration</center>");
    //$("#pensionArrearListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");


    $("#pensionArrearfirstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Pension Arrear Configuration</center>");
    $("#pensionArrearfirstHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colpensionarrearlist'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#pensionArrearListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in pal' />");

    addToggleToId('colpensionarrearlist', 'collapseOne3');

    $("#collapseOne3").append("<div id='pensionArrearPanellistpanelMainBody' class = 'panel-body' />");
    $("#pensionArrearPanellistpanelMainBody").append("<div id='pensionArrearlistMessageDiv'  ></div>");
    $("#pensionArrearPanellistpanelMainBody").append("<div id='pensionArrearlistpanelRow' class='row' />");
    $("#pensionArrearlistpanelRow").append("<div id='pensionArrearLeftstatuslistpanelRow' class='table-responsive' />");
    viewpensionArrearList('pensionArrearLeftstatuslistpanelRow');
}
function validatepensionArrear() {
    var head = $("#head").val();
    var order = $("#order").val();
    if (head == "") {
        $("#head").focus();
        addSomeClass("pensionArrearInputGroupDiv", "has-error");
        displaySmallErrorMessages("pensionArrearErr", "Please Select Head Name.");
        return false;
    } else if (order == "") {
        $("#order").focus();
        addSomeClass("pensionArrearOrderInputGroupDiv", "has-error");
        displaySmallErrorMessages("pensionArrearOrderErr", "Please Enter Order.");
        return false;
    } else if (order != "") {
        if (!order.match((numberValidation()))) {
            addSomeClass("pensionArrearOrderInputGroupDiv", "has-error");
            displaySmallErrorMessages("pensionArrearOrderErr", "Only Numbers are allowed.");
            return false;
        } else {
            savePensionArrear();
        }
    }
}
function savePensionArrear() {
    var head = $('#head').val();
    var order = $('#order').val();
    var arrjson = {
        arrearOrder: order,
        headName: head
    };
    var Arrjson = JSON.stringify(arrjson);
    $.post(server_base_url + "/pension/master/ArrearConfiguration/Save", {
        association: Arrjson,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayErrorMessages("pensionArrearMessageDiv", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displayErrorMessages("pensionArrearMessageDiv", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("pensionArrearMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == duplicate) {
            displayErrorMessages("pensionArrearMessageDiv", existed + "");
            setTimeout(function () {
                displayPensionArrear();
            }, 3000);
        } else if (data != null) {

            $("#head").prop("disabled", true);
            $("#order").prop("disabled", true);
            $("#penArrearSave").attr('disabled', true);
            $("#penArrearReset").attr('disabled', true);
            displaySuccessMessages("pensionArrearMessageDiv", successMessage, "");
            setTimeout(function () {
                displayPensionArrear();
            }, 3000);
        }
    });
}
function numberValidation() {

    var sectionVatidate = /^([0-9\u0080-\u024F])*[0-9\u0080-\u024F\.\']*$/;
    return sectionVatidate;
}

function viewpensionArrearList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='viewpensionArrear'/>");
    $("#viewpensionArrear").append("<div class='table-responsive' id='viewpensionArrearSectionTableDiv' />");
    $("#viewpensionArrearSectionTableDiv").append("<table class='table table-bordered' id='displaypensionArrearTable' />");
    $("#displaypensionArrearTable").append("<thead class=''><tr>"
            + "<th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Head Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Order</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "/pension/master/ArrearConfiguration/ViewList", {
    }).done(function (bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionArrearlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionArrearlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionArrearlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        }
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                $("#displaypensionArrearTable").append("<tbody id='displaypensionArrearTableBody' class='table-striped table-bordered' />");
                for (var i = bdata.length - 1; i >= 0; i--) {
                    JSON.stringify(bdata[i])
                    sno++;
                    var assjson = {
                        aid: bdata[i]._id.$oid,
                        arrearOrder: bdata[i].arrearOrder,
                        headName: bdata[i].headName
                    }

                    assjson = JSON.stringify(assjson);
                    $("#displaypensionArrearTableBody").append("<tr id='" + bdata[i]._id.$oid + "' class='table_row' >"
                            + "<td>" + sno + "</td>"
                            + "<td class='table_row'>" + bdata[i].headName + "</td>"
                            + "<td class='table_row'>" + bdata[i].arrearOrder + "</td>"
                            + "<td> <a href='javascript:void(0);' onclick=updatepensionArrear('" + encodeURI(assjson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                            + "<td> <a href='javascript:void(0);' onclick=deletePopUp('deletePensionArreaeData','displayPensionArrear','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                }
                $('#displaypensionArrearTable').append("</table>");
                $('#displaypensionArrearTable').dataTable();
            }
        }

    });
}
function deletepensionArrear(id) {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deletePensionArreaeData(id);
    }
}
function deletePensionArreaeData(id) {
    $.post(server_base_url + "/pension/master/ArrearConfiguration/Delete", {
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionArrearlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionArrearlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionArrearlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("pensionArrearlistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                displayPensionArrear();
            }, 1000);
        }
    });
}


function updatepensionArrear(obj) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);


    $("#head").prop("readonly", false);
    $("#order").prop("readonly", false);
    $("#order").val(obj.arrearOrder);
    $("#head").val(obj.headName);
    $("#head option:contains(" + obj.headName + ")").attr('selected', 'selected');

    $("#displaypensionArrearTable tr").css("background-color", "white");
    $("#displaypensionArrearTable tr" + "#" + obj.aid).css("background-color", "rgba(10, 129, 156, 0.3)");
//    getAllHeadName();
    $("#pensionArrearButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updatePensionArrearData('" + obj.aid + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayPensionArrear()'  class='btn btn-warning bn' >Back</button></center>");
}
function getAllHeadName(name, divId) {
    $.get(server_base_url + "/pension/master/PensionArrearAdjustment/GetPensiHead", {
    }).done(function (pdata) {

        for (var i = 0; i < pdata.length; i++) {

            $("#head").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].pensionHeadName + "</option>");
        }
    });
}
function updatePensionArrearData(id) {
    var head = $('#head').val();
    var order = $('#order').val();
    var arrjson = {
        arrearOrder: order,
        headName: head
    };
    var Arrjson = JSON.stringify(arrjson);
    $.post(server_base_url + "/pension/master/ArrearConfiguration/Update", {
        association: Arrjson,
        Id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionArrearMessageDiv", emptyListMessage + "");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionArrearMessageDiv", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionArrearMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == duplicate) {
            displayErrorMessages("pensionArrearMessageDiv", existed + "");
            setTimeout(function () {
                displayPensionArrear();
            }, 3000);

        } 
        
        else if (data == null) {

        } else {
            $("#head").prop("disabled", true);
            $("#order").prop("disabled", true);
            $("#penArrearSave").attr('disabled', true);
            $("#penArrearReset").attr('disabled', true);
            displaySuccessMessages("pensionArrearMessageDiv", updateSuccessMessage, "");
            setTimeout(function () {
                displayPensionArrear();
            }, 1000);
        }
    });
}
//}