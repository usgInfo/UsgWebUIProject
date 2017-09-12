/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayPensionClassification() {
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionMasters()">Pension Master</a></label> >><label>Pension Classification Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="pensionClassificationMainDiv"/>');
    $("#pensionClassificationMainDiv").text("").append("<div id='pensionClassificationcolumnDiv' >");
    $("#pensionClassificationcolumnDiv").append("<div id='pensionClassificationFirstPanel' class='panel panel-blue' />");
    $("#pensionClassificationFirstPanel").append("<div id='pensionClassificationfirstPanelHeading' class='panel-heading' />");
    $("#pensionClassificationfirstPanelHeading").append("<h4 id='pensionClassificationtableHeader1' class='panel-title' />");
    $("#pensionClassificationtableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>Pension Classification</center>");
    $("#pensionClassificationFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='pensionClassificationpanelMainBody' class = 'panel-body' />");
    $("#pensionClassificationpanelMainBody").append("<div id='pensionClassificationpanelRow' class='row' />");
    $("#pensionClassificationpanelRow").append("<div id='pensionClassificationMessageDiv' ></div>");
    $("#pensionClassificationpanelMainBody").append("<div id='pensionClassificationpanelBodyDiv' class='panel-body '>");
    $("#pensionClassificationpanelBodyDiv").append("<div id='pensionClassificationformDiv' class='form-horizontal'>");
    $("#pensionClassificationformDiv").append("<div id='pensionClassificationformBodyDiv' class='form-body'>");
    $("#pensionClassificationpanelBodyDiv").append('<div class="form-group" id="pensionClassificationGroupDiv"/>');
    $("#pensionClassificationformBodyDiv").append('<div class="row" id="pensionClassificationRowDiv">');
    $("#pensionClassificationRowDiv").append('<div class="col-lg-3 control-label" id="pensionClassificationLabelDiv"/>');
    $("#pensionClassificationLabelDiv").append(getLabel("Pension Classification", "required"));
    $("#pensionClassificationRowDiv").append('<div class="col-lg-9" id="pensionClassificationInputGroupDiv">');
    $("#pensionClassificationInputGroupDiv").append(getInput("pensionClassification", "Enter Pension Classification", "", ""));
    $("#pensionClassificationInputGroupDiv").append("<span id='pensionClassificationErr'></span>");
    $("#pensionClassificationformBodyDiv").append("<div id='pensionClassificationButtonRowDiv' class='row' />");
    $("#pensionClassificationButtonRowDiv").append("<div  class='col-xs-12' id='pensionClassificationButtonRow'/><center><button type='button'  id='penClaSave' value='save' class='btn btn-success bn'  onclick='validatepensionClassification()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetpensionClassification()' class='btn btn-warning bn' id='penClaReset'name='reset' value='reset'>Reset</button></center></div>");
    $("#pensionClassificationcolumnDiv").append("<div id='pensionClassificationListPanel' class='panel panel-blue' />");
    $("#pensionClassificationListPanel").append("<div id='pensionClassificationListPanelHeading' class='panel-heading' />");
    $("#pensionClassificationListPanelHeading").append("<h4 id='pensionClassificationfirstHeader1' class='panel-title' />");
    $("#pensionClassificationfirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Pension Classifactions</center>");
    $("#pensionClassificationListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='pensionClassificationPanellistpanelMainBody' class = 'panel-body' />");
    $("#pensionClassificationPanellistpanelMainBody").append("</div><div id='pensionClassificationlistMessageDiv'  ></div>");
    $("#pensionClassificationPanellistpanelMainBody").append("<div id='pensionClassificationlistpanelRow' class='row' />");
    $("#pensionClassificationlistpanelRow").append("<div id='pensionClassificationLeftstatuslistpanelRow' class='table-responsive' />");
    viewpensionClassificationList('pensionClassificationLeftstatuslistpanelRow');
}
function viewpensionClassificationList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='viewpensionClassification'/>");
    $("#viewpensionClassification").append("<div class='table-responsive' id='viewpensionClassificationSectionTableDiv' />");
    $("#viewpensionClassificationSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displaypensionClassificationTable' />");
    $("#displaypensionClassificationTable").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Pension Classification</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "/pension/master/PensionClassification/View", {
    }).done(function (bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionClassificationlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionClassificationlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionClassificationlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        }
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                $("#displaypensionClassificationTable").append("<tbody id='displaypensionClassificationTableBody' class='table-striped table-bordered' />");
                for (var i = bdata.length - 1; i >= 0; i--) {
                    sno++;
                    var objJson = {
                        Id: bdata[i]._id.$oid,
                        pensionClassification: bdata[i].pensionClassification
                    };
                    objJson = JSON.stringify(objJson);
                    $("#displaypensionClassificationTableBody").append("<tr id='" + bdata[i].status + "' class='table_row' >"
                            + "<td>" + sno + "</td>"
                            + "<td class='table_row'>" + bdata[i].pensionClassification + "</td>"
                            + "<td> <a href='javascript:void(0);' onclick=onclick=updatepensionClassification('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                            + "<td> <a href='javascript:void(0);' onclick=deletePopUp('deletePensionClassificationData','displayPensionClassification','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                }
                $('#displaypensionClassificationTable').append("</table>");
                $('#displaypensionClassificationTable').dataTable();
            }
        }

    });
}
function updatepensionClassification(obj) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#pensionClassification").val(obj.pensionClassification);
    $("#pensionClassification").prop("readonly", false);
    $("#pensionClassificationButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updatePensionClassificationData('" + obj.Id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayPensionClassification()'  class='btn btn-warning bn' >Back</button></center>");
}
//function updatePensionClassificationData(id) {
//    var pensionClassification = $('#pensionClassification').val();
//    if (pensionClassification == "" || pensionClassification == undefined) {
//        addSomeClass("pensionClassificationMessageDiv", "has-error");
//        displaySmallErrorMessages("pensionClassificationErr", "Please Enter Pension Classification Type.");
//        return false;
//    } else if (pensionClassification != "") {
//        if (!pensionClassification.match((alphabetValidation()))) {
//            addSomeClass("pensionClassificationMessageDiv", "has-error");
//            displaySmallErrorMessages("pensionClassificationErr", "Only alphabets are allowed.");
//            return false;
//        } else {
//            $.post(server_base_url + "pension/master/PensionClassification/Update", {
//                pensionClassification: pensionClassification,
//                id: id,
//                userid: getUserSessionElement("userId")
//            }).done(function (data) {
//                alert(data)
//                if (data == fail) {
//                    displayLargeErrorMessagesInCenterInRed("pensionClassificationMessageDiv", emptyListMessage + "<br/><br/>");
//                } else if (data == unauthorized) {
//                    displayLargeErrorMessagesInCenterInRed("pensionClassificationMessageDiv", unauthorizedMessage + "<br/><br/>");
//                } else if (data == statusException) {
//                    displayLargeErrorMessagesInCenterInRed("pensionClassificationMessageDiv", statusExceptionMessage + "<br/><br/>");
//                } else if (data == invalidSession) {
//                    callSessionTimeout();
//                } else if (data == null) {
//
//                } else {
//                    $("#pensionClassification").prop("disabled", true);
//                    $("#penClaSave").attr('disabled', true);
//                    $("#penClaReset").attr('disabled', true);
//                  
//                    displaySuccessMessages("pensionClassificationMessageDiv", updateSuccessMessage, "");
//                    setTimeout(function () {
//                        displayPensionClassification();
//                    }, 1000);
//
//                }
//            });
//        }
//    }
//}

function updatePensionClassificationData(id) {
     var pensionClassification = $("#pensionClassification").val();

    $.post(server_base_url + "/pension/master/PensionClassification/Update", {
        pensionClassification: pensionClassification,
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionClassificationMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionClassificationMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionClassificationMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {

        } else {
            $("#pensionClassification").prop("disabled", true);
            $("#penClaSave").attr('disabled', true);
            $("#penClaReset").attr('disabled', true);

            displaySuccessMessages("pensionClassificationMessageDiv", updateSuccessMessage, "");
            setTimeout(function () {
                displayPensionClassification();
            }, 1000);

        }
    });
}


function deletepensionClassification(id) {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deletePensionClassificationData(id);
    }
}

function deletePensionClassificationData(id) {
    $.post(server_base_url + "/pension/master/PensionClassification/Delete", {
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionClassificationlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionClassificationlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionClassificationlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("pensionClassificationlistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                displayPensionClassification();
            }, 1000);

        }
    });
}
function validatepensionClassification() {

    $("#pensionClassification").text("");
    var result = $("#penClaSave").val();

    var pensionClassification = $("#pensionClassification").val();

    if (pensionClassification == "") {
        $("#pensionClassification").focus();
        addSomeClass("pensionClassificationInputGroupDiv", "has-error");
        displaySmallErrorMessages("pensionClassificationErr", "Please Enter Pension Classification.");
        return false;
    } else if (pensionClassification != "") {
        if (!pensionClassification.match((alphabetValidation()))) {
            displaySmallErrorMessages("pensionClassificationErr", "Only alphabets are allowed.");
            return false;
        } else {
            savePensionClassification();
        }
    }
}
function savePensionClassification() {
    var pensionClassification = $("#pensionClassification").val();
    $.post(server_base_url + "/pension/master/PensionClassification/Save", {
        pensionClassification: pensionClassification,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("pensionClassificationMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pensionClassificationMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pensionClassificationMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {

            $("#pensionClassification").prop("disabled", true);
            $("#penClaSave").attr('disabled', true);
            $("#penClaReset").attr('disabled', true);
            displaySuccessMessages("pensionClassificationMessageDiv", successMessage, "");
            setTimeout(function () {
                displayPensionClassification();
            }, 1000);
        }
    });
}
function resetpensionClassification()
{
    $("#pensionClassification").val("");
    $("#pensionClassificationErr").text("");
    removeSomeClass("pensionClassificationInputGroupDiv", "has-error");
}