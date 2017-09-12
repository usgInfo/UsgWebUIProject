/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayPensionAssociation() {
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionMasters()">Pension Master</a></label> >><label>Association Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="pensionAssociationMainDiv"/>');
    $("#pensionAssociationMainDiv").text("").append("<div id='pensionAssociationcolumnDiv' >");
    $("#pensionAssociationcolumnDiv").append("<div id='pensionAssociationFirstPanel' class='panel panel-blue' />");
    $("#pensionAssociationFirstPanel").append("<div id='pensionAssociationfirstPanelHeading' class='panel-heading' />");
    $("#pensionAssociationfirstPanelHeading").append("<h4 id='pensionAssociationtableHeader1' class='panel-title' />");

    $("#pensionAssociationtableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Association Master</center>");
    $("#pensionAssociationtableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colpensionassociation'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#pensionAssociationFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");

    addToggleToId('colpensionassociation', 'collapseOne2');

    $("#collapseOne2").append("<div id='pensionAssociationpanelMainBody' class = 'panel-body' />");
    $("#pensionAssociationpanelMainBody").append("<div id='pensionAssociationpanelRow' class='row' />");
    $("#pensionAssociationpanelRow").append("<div id='pensionAssociationMessageDiv' ></div>");
    $("#pensionAssociationpanelMainBody").append("<div id='pensionAssociationpanelBodyDiv' class='panel-body '>");
    $("#pensionAssociationpanelBodyDiv").append("<div id='pensionAssociationformDiv' class='form-horizontal'>");
    $("#pensionAssociationformDiv").append("<div id='pensionAssociationformBodyDiv' class='form-body'>");
    $("#pensionAssociationpanelBodyDiv").append('<div class="form-group" id="pensionAssociationGroupDiv"/>');
    $("#pensionAssociationformBodyDiv").append('<div class="row" id="pensionAssociationRowDiv">');
    $("#pensionAssociationRowDiv").append('<div class="col-lg-3 control-label" id="pensionAssociationLabelDiv"/>');
    $("#pensionAssociationLabelDiv").append(getLabel("Association", "required"));
    $("#pensionAssociationRowDiv").append('<div class="col-lg-9" id="pensionAssociationInputGroupDiv">');
    $("#pensionAssociationInputGroupDiv").append(getInput("associationName", "Enter Pension Association", "", "onkeypress='return onlyAlphabets(event)'"));
    $("#pensionAssociationInputGroupDiv").append("<span id='pensionAssociationErr'></span>");

    $("#pensionAssociationformBodyDiv").append('<div class="row" id="pensionAssociationFeesRowDiv">');
    $("#pensionAssociationFeesRowDiv").append('<div class="col-lg-3 control-label" id="pensionAssociationFeesLabelDiv"/>');
    $("#pensionAssociationFeesLabelDiv").append(getLabel("Fees", "required"));
    $("#pensionAssociationFeesRowDiv").append('<div class="col-lg-9" id="pensionAssociationFeesInputGroupDiv">');
    $("#pensionAssociationFeesInputGroupDiv").append(getInputwithErrLabel("fees", "Enter Fees", "", "onkeyup=validateDecimalNumber('fees','feesErr') "));
    $("#feesErr").attr("class", "text-danger");
    $("#fees").attr('maxlength', '12');
    getLabelTextareaInRow("pensionAssociationformBodyDiv", "Remarks", "", "pensionAssociationRemarksRowDiv", "pensionAssociationRemarksInputGroupDiv", "remarks");

    $("#pensionAssociationformBodyDiv").append("<div id='pensionAssociationButtonRowDiv' class='row' />");
    $("#pensionAssociationButtonRowDiv").append("<div  class='col-xs-12' id='pensionAssociationButtonRow'/><center><button type='button'  id='penAssSave' value='save' class='btn btn-success bn'  onclick='validatePensionAssociationData()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetpenAssociation()' class='btn btn-warning bn' id='pfReset'name='reset' value='reset'>Reset</button></center></div>");
    $("#pensionAssociationcolumnDiv").append("<div id='pensionAssociationListPanel' class='panel panel-blue' />");
    $("#pensionAssociationListPanel").append("<div id='pensionAssociationListPanelHeading' class='panel-heading' />");
    $("#pensionAssociationListPanelHeading").append("<h4 id='pensionAssociationfirstHeader1' class='panel-title' />");
   
    $("#pensionAssociationfirstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Association(s)</center>");
    $("#pensionAssociationfirstHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colpensionassociationlist'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#pensionAssociationListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in pal' />");

    addToggleToId('colpensionassociationlist', 'collapseOne3');

    $("#collapseOne3").append("<div id='pensionAssociationPanellistpanelMainBody' class = 'panel-body' />");
    $("#pensionAssociationPanellistpanelMainBody").append("<div id='pensionAssociationlistMessageDiv'  ></div>");
    $("#pensionAssociationPanellistpanelMainBody").append("<div id='pensionAssociationlistpanelRow' class='row' />");
    $("#pensionAssociationlistpanelRow").append("<div id='pensionAssociationLeftstatuslistpanelRow' class='table-responsive' />");
    viewpensionAssociationList('pensionAssociationLeftstatuslistpanelRow');
}

function validatePensionAssociationData() {
    var associationName = $("#associationName").val();
    var fees = $("#fees").val();
    var remarks = $("#remarks").val();

    if (fees != "" && $.isNumeric(fees)) {
        if (associationName == "" || fees == "") {
            displayErrorMessages("pensionAssociationMessageDiv", "Plaese Fill the Mandatory Fields");
        } else {
            savePensionAssociationData();
        }
    } else {
        displayErrorMessages("pensionAssociationMessageDiv", "Please enter valid Numeric Data");
        return false;
    }

}
function onlyAlphabets(evt) {
    var charCode;
    if (window.event)
        charCode = window.event.keyCode;  //for IE
    else
        charCode = evt.which;  //for firefox
    if (charCode == 32) //for &lt;space&gt; symbol
        return true;
    if (charCode > 31 && charCode < 65) //for characters before 'A' in ASCII Table
        return false;
    if (charCode > 90 && charCode < 97) //for characters between 'Z' and 'a' in ASCII Table
        return false;
    if (charCode > 122) //for characters beyond 'z' in ASCII Table
        return false;
    return true;
}
function viewpensionAssociationList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='viewpensionAssociation'/>");
    $("#viewpensionAssociation").append("<div class='table-responsive' id='viewpensionAssociationSectionTableDiv' />");
    $("#viewpensionAssociationSectionTableDiv").append("<table class='table table-bordered ' id='displaypensionAssociationTable' />");
    $("#displaypensionAssociationTable").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Association Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Fees</th>"
            + "<th class='table_col_width'><i class='fa'></i>Remarks</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "/pension/master/PensionAssociation/ViewList", {
    }).done(function (bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionAssociationlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionAssociationlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionAssociationlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        }
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                $("#displaypensionAssociationTable").append("<tbody id='displaypensionAssociationTableBody' class='table-striped table-bordered' />");
                for (var i = bdata.length - 1; i >= 0; i--) {
                    sno++;
                    var assjson = {
                        id: bdata[i]._id.$oid,
                        pensionAssociationName: bdata[i].pensionAssociationName,
                        pensionFees: bdata[i].pensionFees,
                        pensionRemarks: bdata[i].pensionRemarks,
                        isPensionUsed: bdata[i].isPensionUsed

                    }
                    assjson = JSON.stringify(assjson);
                    $("#displaypensionAssociationTableBody").append("<tr id='" + bdata[i]._id.$oid + "' class='table_row' >"
                            + "<td>" + sno + "</td>"
                            + "<td class='table_row'>" + bdata[i].pensionAssociationName + "</td>"
                            + "<td class='table_row'>" + bdata[i].pensionFees + "</td>"
                            + "<td class='table_row'>" + bdata[i].pensionRemarks + "</td>"
                            + "<td> <a href='javascript:void(0);' onclick=updatePensionAssociation('" + encodeURI(assjson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                            + "<td> <a href='javascript:void(0);' onclick=deletePopUp('deletePensionAssociationData','displayPensionAssociation','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                }
                $('#displaypensionAssociationTable').append("</table>");
                $('#displaypensionAssociationTable').dataTable();
            }
        }

    });

}
function updatePensionAssociation(obj) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);

    if (obj.isPensionUsed == "YES") {
        $("#usedInPension").attr('checked', true);
    }
    $("#associationName").val(obj.pensionAssociationName);
    $("#fees").val(obj.pensionFees);
    $("#remarks").val(obj.pensionRemarks);

    $("#displaypensionAssociationTable tr").css("background-color", "white");
    $("#displaypensionAssociationTable tr" + "#" + obj.id).css("background-color", "rgba(10, 129, 156, 0.3)");

    $("#associationName").prop("readonly", false);
    $("#fees").prop("readonly", false);
    $("#remarks").prop("readonly", false);

    $("#pensionAssociationButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updatePensionAssociationData('" + obj.id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayPensionAssociation()'  class='btn btn-warning bn' >Back</button></center>");
}
function updatePensionAssociationData(id) {
    var association_name = $("#associationName").val();
    var fees = $("#fees").val();
    var remarks = $("#remarks").val();
    var assjson = {
        pensionAssociationName: association_name,
        pensionFees: fees,
        pensionRemarks: remarks

    };
    $.post(server_base_url + "/pension/master/PensionAssociation/Update", {
        assJson: JSON.stringify(assjson),
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
//displaySmallErrorMessagesInRed("pensionAssociationMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pensionAssociationMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pensionAssociationMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == duplicate_Message) {
            displayErrorMessages("pensionAssociationMessageDiv", "" + existed + "");
            setTimeout(function () {
                displayPensionAssociation("dashBoardBodyMainDiv");
            }, 3000);
        } else if (data != null) {
            $("#associationName").prop("disabled", true);
            $("#fees").prop("disabled", true);
            $("#remarks").prop("disabled", true);
            // $("#usedInPension").prop("disabled", true);
            $("#penAssSave").attr('disabled', true);
            $("#penAssReset").attr('disabled', true);
            displaySuccessMessages("pensionAssociationMessageDiv", updateSuccessMessage, "");
            setTimeout(function () {
                displayPensionAssociation();
            }, 3000);
        }
    });
}

function deletePensionAssociation(id) {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deletePensionAssociationData(id);
    }
}

function deletePensionAssociationData(id) {
    $.post(server_base_url + "/pension/master/PensionAssociation/Delete", {
        bid: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionAssociationlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionAssociationlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionAssociationlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("pensionAssociationlistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                displayPensionAssociation();
            }, 3000);
        }
    });
}


function resetpenAssociation() {
    $("#usedInPension").prop("checked", false);
    $("#associationName").val("");
    $("#fees").val("");
    $("#remarks").val("");
    $("#usedInPension").val("");
    $("#feesErr").text("");
    $("#pensionAssociationErr").text("");
    removeSomeClass("pensionAssociationInputGroupDiv", "has-error");
    removeSomeClass("pensionAssociationFeesInputGroupDiv", "has-error");
    removeSomeClass("pensionAssociationRemarksRowDiv", "has-error");
}

function savePensionAssociationData() {
    var association_name = $("#associationName").val();
    var fees = $("#fees").val();
    var remarks = $("#remarks").val();

    var assjson = {
        pensionAssociationName: association_name,
        pensionFees: fees,
        pensionRemarks: remarks

    };
    var Assjson = JSON.stringify(assjson);
    $.post(server_base_url + "/pension/master/PensionAssociation/Save", {
        association: Assjson,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("pensionAssociationMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pensionAssociationMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pensionAssociationMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == duplicate) {
            displayErrorMessages("pensionAssociationMessageDiv", "" + existed + "<br /><br />");
            setTimeout(function () {
                displayPensionAssociation();
            }, 1000);
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#associationName").prop("disabled", true);
            $("#fees").prop("disabled", true);
            $("#remarks").prop("disabled", true);
            $("#usedInPension").prop("checked", false);
            $("#penAssSave").attr('disabled', true);
            $("#penAssReset").attr('disabled', true);
            displaySuccessMessages("pensionAssociationMessageDiv", successMessage, "");
            setTimeout(function () {
                displayPensionAssociation();
            }, 3000);
        }
    });
}
