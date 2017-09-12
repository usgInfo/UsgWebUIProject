/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayDeductionType() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>>> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>Deduction TypeMaster</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="deductionTypeMainDiv"/>');
    
    $("#deductionTypeMainDiv").text("").append("<div id='deductionTypecolumnDiv' >");
    $("#deductionTypecolumnDiv").append("<div id='deductionTypeFirstPanel' class='panel panel-blue' />");
    $("#deductionTypeFirstPanel").append("<div id='deductionTypefirstPanelHeading' class='panel-heading' />");
    $("#deductionTypefirstPanelHeading").append("<h4 id='deductionTypetableHeader1' class='panel-title' />");
    $("#deductionTypetableHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne2'><center>Deduction Type Master</center>");
    $("#deductionTypeFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='deductionTypepanelMainBody' class = 'panel-body' />");
    $("#deductionTypepanelMainBody").append("<div id='deductionTypepanelRow' class='row' />");
    $("#deductionTypepanelRow").append("<div id='deductionTypeMessageDiv' ></div>");
    $("#deductionTypepanelMainBody").append("<div id='deductionTypepanelBodyDiv' class='panel-body'>");
    $("#deductionTypepanelBodyDiv").append("<div id='deductionTypeformDiv' class='form-horizontal'>");
    $("#deductionTypepanelBodyDiv").append("<div id='deductionTypeformBodyDiv' class='form-body'>");
    $("#deductionTypeformBodyDiv").append('<div class="form-group" id="deductionTypeGroupDiv"/>');
    $("#deductionTypeGroupDiv").append('<div class="row" id="deductionTypeRowDiv">');
    $("#deductionTypeRowDiv").append('<div class="col-lg-3 control-label" id="deductionTypeLabelDiv" align="right"/>');
    $("#deductionTypeLabelDiv").append(getLabel("Deduction Type", "required"));
    $("#deductionTypeRowDiv").append('<div class="col-lg-9" id="deductionTypeInputGroupDiv">');
    $("#deductionTypeInputGroupDiv").append(getInput("deductionType", "Enter Deduction Type", "", "onkeyup='return Religion(event)'"));
    $("#deductionTypeInputGroupDiv").append("<span id='deductionTypeErr'></span>");
    $("#deductionTypeformBodyDiv").append("<div id='deductionTypeButtonRowDiv' class='row' />");
    $("#deductionTypeButtonRowDiv").append("<div  class='col-xs-12' id='deductionTypeButtonRow'/><center><button type='button'  id='deductionTypeSave' value='Save' class='btn btn-success bn'  onclick='validatedeductionType()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetDeductionType()' class='btn btn-warning bn' id='deductionTypeReset'name='reset' value='reset'>Reset</button></center></div>");
    $("#deductionTypecolumnDiv").append("<div id='deductionTypeListPanel' class='panel panel-blue' />");
    $("#deductionTypeListPanel").append("<div id='deductionTypeListPanelHeading' class='panel-heading' />");
    $("#deductionTypeListPanelHeading").append("<h4 id='deductionTypefirstHeader1' class='panel-title' />");
    $("#deductionTypefirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Deduction Type</center>");
    $("#deductionTypeListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='deductionTypePanellistpanelMainBody' class = 'panel-body' />");
    $("#deductionTypePanellistpanelMainBody").append("<div id='deductionTypelistMessageDiv'  ></div>");
    $("#deductionTypePanellistpanelMainBody").append("<div id='deductionTypelistpanelRow' class='row' />");
    $("#deductionTypelistpanelRow").append("<div id='deductionTypeLeftstatuslistpanelRow' class='table-responsive' />");
    viewDeductionTypeList('deductionTypeLeftstatuslistpanelRow');
}
function viewDeductionTypeList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='viewdeductionType'/>");
    $("#viewdeductionType").append("<div class='table-responsive' id='viewdeductionTypeSectionTableDiv' />");
    $("#viewdeductionTypeSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayDeductionTypeTable' />");
    $("#displayDeductionTypeTable").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Deduction Type</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");


    $.get(server_base_url + "hrms/salary/DeductionType/ViewList", {
    }).done(function (bdata) {
       
           if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("deductionTypelistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("deductionTypelistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("deductionTypelistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayDeductionTypeTable").append("<tbody id='displayDeductionTypeTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var objJson = {
                            Id: bdata[i]._id.$oid,
                            deductionType: bdata[i].deductionType
                        };
                        objJson = JSON.stringify(objJson);
                        $("#displayDeductionTypeTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].deductionType + "</td>"
                                + "<td> <a href='javascript:void(0);' onclick=updatedeductionType('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                                + "<td> <a href='javascript:void(0);' onclick=deletePopUp('deletedeductionType','displayDeductionType','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                    }
                    $('#displayDeductionTypeTable').append("</table>");
                    $('#displayDeductionTypeTable').dataTable();
                }
            }
        }
    });
}
function updatedeductionType(obj) {

    obj = decodeURI(obj);
    obj = JSON.parse(obj);

    $("#deductionType").val(obj.deductionType);
    $("#deductionType").prop("readonly", false);

    $("#deductionTypeButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updateDeductionTypeData('" + obj.Id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayDeductionType()'  class='btn btn-warning bn' >Back</button></center>");
}
function updateDeductionTypeData(id) {
    var deductionType = $('#deductionType').val();
    if (deductionType == "" || deductionType == undefined) {
        addSomeClass("headNameInputGroupDiv", "has-error");
        displaySmallErrorMessages("headNameErr", "Please Enter Deduction Type");
        return false;
    } else {
        var objJson = {
            deductionType: deductionType
        }
        $.post(server_base_url + "hrms/salary/DeductionType/Update", {
            objJson: JSON.stringify(objJson),
            Id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayLargeErrorMessagesInCenterInRed("deductionTypeMessageDiv", emptyListMessage + "<br/><br/>");
            } else if (data == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("deductionTypeMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displayLargeErrorMessagesInCenterInRed("deductionTypeMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                $("#deductionType").prop("disabled", true);
                $("#deductionTypeSave").attr('disabled', true);
                $("#deductionTypeReset").attr('disabled', true);
                displaySuccessMessages("deductionTypeMessageDiv", updateSuccessMessage, "");
                setTimeout(function () {
                    displayDeductionType();
                }, 4000);

            }
        });
    }
}
function deletedeductionType(id) {
    
        $.post(server_base_url + "hrms/salary/DeductionType/Delete", {
            Id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayLargeErrorMessagesInCenterInRed("deductionTypelistMessageDiv", emptyListMessage + "<br/><br/>");
            } else if (data == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("deductionTypelistMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displayLargeErrorMessagesInCenterInRed("deductionTypelistMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {

                displaySuccessMessages("deductionTypelistMessageDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    displayDeductionType();
                }, 4000);
            }
        });
    }
function resetDeductionType() {
    $("#deductionType").val("");
    $("#deductionTypeErr").text("");
    removeSomeClass("deductionTypeInputGroupDiv", "has-error");
}
function validatedeductionType() {
    $("#deductionTypeErr").text("");
    var deductionType = $("#deductionType").val();

    if (deductionType == "") {
        $("#deductionType").focus();
        addSomeClass("deductionTypeInputGroupDiv", "has-error");
        displaySmallErrorMessages("deductionTypeErr", "This Field is Mandatory.");
        return false;
    } else if (deductionType != "") {
        if (!deductionType.match((alphabetValidation()))) {

            addSomeClass("deductionTypeInputGroupDiv", "has-error");
            displaySmallErrorMessages("deductionTypeErr", "Only alphabets are allowed");
            return false;
        } else {
            saveDeductionType();
        }

    }

}

function saveDeductionType() {
    var deductionType = $('#deductionType').val();
    var objJson = {
        deductionType: deductionType
    };
    $.post(server_base_url + "hrms/salary/DeductionType/Save", {
        objJson: JSON.stringify(objJson),
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("deductionTypeMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("deductionTypeMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("deductionTypeMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#deductionType").prop("disabled", true);
            $("#deductionTypeSave").attr('disabled', true);
            $("#deductionTypeReset").attr('disabled', true);
            displaySuccessMessages("deductionTypeMessageDiv", successMessage, "");
            setTimeout(function () {
                displayDeductionType();
            }, 4000);
        }
    });
}