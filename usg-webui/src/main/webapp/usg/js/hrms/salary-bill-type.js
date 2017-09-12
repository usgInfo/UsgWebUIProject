/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



//creat Form Start 


function createSalaryBillForm() {

    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>>> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>Salary Bill TypeMaster</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="salaryBillTypeMainDiv"/>');

    $("#salaryBillTypeMainDiv").text("").append("<div id='salaryBillTypecolumnDiv' >");
    if (checkUserPrivelege(pvCreateSalaryBillType)) {
        $("#salaryBillTypecolumnDiv").append("<div id='salaryBillTypeFirstPanel' class='panel panel-blue' />");
        $("#salaryBillTypeFirstPanel").append("<div id='salaryBillTypefirstPanelHeading' class='panel-heading' />");

        $("#salaryBillTypefirstPanelHeading").append("<h4 id='salaryBillTypetableHeader1' class='panel-title' />");
        $("#salaryBillTypetableHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>Salary Bill Type</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colSalaryBill'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#salaryBillTypeFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#colSalaryBill").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colSalaryBill span").hasClass("glyphicon-minus-sign")) {
                $("#colSalaryBill").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSalaryBill").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });


        $("#collapseOne2").append("<div id='salaryBillTypepanelMainBody' class = 'panel-body' />");

        $("#salaryBillTypepanelMainBody").append("<div id='salaryBillTypepanelRow' class='row' />");

        $("#salaryBillTypepanelRow").append("<div id='salaryBillTypeMessageDiv'></div>");

        $("#salaryBillTypepanelMainBody").append("<div id='salaryBillTypepanelBodyDiv' class='panel-body '>");
        $("#salaryBillTypepanelBodyDiv").append("<div id='salaryBillTypeformDiv' class='form-horizontal'>");
        $("#salaryBillTypeformDiv").append("<div id='salaryBillTypeformBodyDiv' class='form-body '>");

        $("#salaryBillTypepanelBodyDiv").append('<div class="form-group" id="salaryBillTypeGroupDiv"/>');
        $("#salaryBillTypeformBodyDiv").append('<div class="row" id="salaryBillTypeRowDiv">');
        $("#salaryBillTypeRowDiv").append('<div class="col-lg-3 control-label" id="salaryBillTypeLabelDiv"/>');
        $("#salaryBillTypeLabelDiv").append(getLabel("Description", "required"));
        $("#salaryBillTypeRowDiv").append('<div class="col-lg-9" id="salaryBillTypeInputGroupDiv">');
        $("#salaryBillTypeInputGroupDiv").append(getInput("description", "Enter Description", "", "onkeypress='return acceptAlphanumeric(event)'"));
        $("#salaryBillTypeInputGroupDiv").append("<span id='descriptionErr'></span>");

        $("#salaryBillTypeformBodyDiv").append("<div id='salaryBillTypeButtonRowDiv' class='row' />");
        $("#salaryBillTypeButtonRowDiv").append("<div  class='col-xs-12' id='salaryBillTypeButtonRow'/><center><button type='button'  id='pfSave' value='Save' class='btn btn-success bn'  onclick='validatesalaryBillType()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetSalaryBill()' class='btn btn-warning bn' id='pfReset'name='reset' value='reset'>Reset</button></center></div>");
    }
    if (checkUserPrivelege(pvViewSalaryBillType)) {
        $("#salaryBillTypecolumnDiv").append("<div id='salaryBillTypeListPanel' class='panel panel-blue' />");

        $("#salaryBillTypeListPanel").append("<div id='salaryBillTypeListPanelHeading' class='panel-heading' />");
        $("#salaryBillTypeListPanelHeading").append("<h4 id='salaryBillTypefirstHeader1' class='panel-title' />");
        $("#salaryBillTypefirstHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>List of Salary Bill Type</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colSalaryBillList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#salaryBillTypeListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colSalaryBillList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colSalaryBillList span").hasClass("glyphicon-minus-sign")) {
                $("#colSalaryBillList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSalaryBillList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });

        $("#collapseOne3").append("<div id='salaryBillTypePanellistpanelMainBody' class = 'panel-body' />");
        $("#salaryBillTypePanellistpanelMainBody").append("<div id='salaryBillTypelistMessageDiv' ></div>");
        $("#salaryBillTypePanellistpanelMainBody").append("<div id='salaryBillTypelistpanelRow' class='row' />");



        $("#salaryBillTypelistpanelRow").append("<div id='salaryBillTypeLeftstatuslistpanelRow' class='table-responsive' />");
        viewsalaryBillTypeList('salaryBillTypeLeftstatuslistpanelRow');
    }
    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

}
function resetSalaryBill() {
    $("#description").val("");
    $("#descriptionErr").text("");
    removeSomeClass("salaryBillTypeInputGroupDiv", "has-error");
}

function validatesalaryBillType() {
    var description = $('#description').val();
    $("#descriptionErr").text("");


    if (description == "") {
        $("#description").focus();
        addSomeClass("salaryBillTypeInputGroupDiv", "has-error");
        displaySmallErrorMessages("descriptionErr", "Please Enter Descrition.");
        return false;
    } else if (description != "") {
        if (!description.match((alphabetValidation()))) {

            addSomeClass("salaryBillTypeInputGroupDiv", "has-error");
            displaySmallErrorMessages("descriptionErr", "Only alphabets are allowed");
            return false;
        } else {
            saveSalaryBillTypeOrECDetails();
        }

    }

}

function saveSalaryBillTypeOrECDetails() {
    if (checkUserPrivelege(pvCreateSalaryBillType)) {
        var description = $('#description').val();

        var objJson = {
            description: description
        };
        $.post(server_base_url + "hrms/salary/SalaryBillTypeOrEC/Save", {
            objJson: JSON.stringify(objJson),
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("salaryBillTypeMessageDiv", "Invalid username / password" + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("salaryBillTypeMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("salaryBillTypeMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("salaryBillTypeMessageDiv", "No User available" + "");
            } else if (data == duplicate) {
                displayErrorMessages("salaryBillTypeMessageDiv", existed + "");
                setTimeout(function () {
                    createSalaryBillForm();
                }, 1000);

            } else if (data != null) {

                $("#description").prop("disabled", true);
                $("#salaryCancel").attr('disabled', true);
                $("#salarySumbit").attr('disabled', true);
                displaySuccessMessages("salaryBillTypeMessageDiv", successMessage, "");
                setTimeout(function () {
                    createSalaryBillForm();

                }, 4000);

            }
        });

    }
}

function viewsalaryBillTypeList(divId) {
    if (checkUserPrivelege(pvViewSalaryBillType)) {
        $("#" + divId).text("").append("<div class='tab-pane' id='viewsalaryBillType'/>");
        $("#viewsalaryBillType").append("<div class='table-responsive' id='viewsalaryBillTypeSectionTableDiv' />");
        $("#viewsalaryBillTypeSectionTableDiv").append("<table class='table table-bordered' id='displaysalaryBillTypeTable' />");
        $("#displaysalaryBillTypeTable").append("<thead><tr id='salaryBillTypeHeadId'>"

                + " <th class='sno_width'> S.No</th>"
                + "<th class='table_col_width'><i class='fa'></i>Description</th>");
        if (checkUserPrivelege(pvUpdateSalaryBillType)) {
            $("#salaryBillTypeHeadId").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteSalaryBillType)) {
            $("#salaryBillTypeHeadId").append("<th class='table_anchor_width'><i class='fa' ></i> Delete</th>");
        }

        //End Header


        $.get(server_base_url + "hrms/salary/SalaryBillTypeOrEC/ViewList", {
        }).done(function (bdata) {
            if (bdata == fail) {
                displayLargeErrorMessagesInCenterInRed("salaryBillTypelistMessageDiv", emptyListMessage + "");
            } else if (bdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("salaryBillTypelistMessageDiv", unauthorizedMessage + "");
            } else if (bdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("salaryBillTypelistMessageDiv", emptyListMessage + "");
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            }
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displaysalaryBillTypeTable").append("<tbody id='displaySalaryBillTypeOrECTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var objJson = {
                            Id: bdata[i]._id.$oid,
                            description: bdata[i].description
                        };
                        objJson = JSON.stringify(objJson);
                        $("#displaySalaryBillTypeOrECTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].description + "</td>");


                        if (checkUserPrivelege(pvUpdateSalaryBillType)) {
                            $("#" + bdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updateSalaryBillTypeOrEC('" + encodeURI(objJson) + "','" + bdata[i]._id.$oid + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");
                            if (checkUserPrivelege(pvDeleteSalaryBillType)) {
                                $("#" + bdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=deletePopUp('deleteSalaryBillTypeOrECData','createSalaryBillForm','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                            }
                        }
                    }
                    $('#displaysalaryBillTypeTable').append("</table>");
                    $('#displaysalaryBillTypeTable').dataTable();
                }
            }

        });

    }
}
function updateSalaryBillTypeOrEC(obj, id) {
    if (checkUserPrivelege(pvUpdateSalaryBillType)) {
        obj = decodeURI(obj);
        obj = JSON.parse(obj);
        $("#description").val(obj.description);
        $("#description").prop("readonly", false);
        $("#displaySalaryBillTypeOrECTableBody tr").css("background-color", "white");
        $("#displaySalaryBillTypeOrECTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#salaryBillTypeButtonRowDiv").text("").append("<center><button id='updateButton' onclick=updateSalaryBill('" + id + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='createSalaryBillForm()' class='btn btn-warning bn' >Back</button></center>");
    }
}
function updateSalaryBill(id) {
    if (checkUserPrivelege(pvUpdateSalaryBillType)) {
        var description = $('#description').val();
        var objJson = {
            description: description
        };
        $.post(server_base_url + "hrms/salary/SalaryBillTypeOrEC/Update", {
            objJson: JSON.stringify(objJson),
            Id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("salaryBillTypeMessageDiv", "Invalid username / password" + "");
            } else if (data == unauthorized) {
                displayErrorMessages("salaryBillTypeMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("salaryBillTypeMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("salaryBillTypeMessageDiv", "No User available" + "");
            } else if (data == duplicate) {
                displayErrorMessages("salaryBillTypeMessageDiv", existed + "");
                setTimeout(function () {
                    createSalaryBillForm();
                }, 1000);

            } else if (data != null) {

                $("#description").prop("disabled", true);
                $("#salaryCancel").attr('disabled', true);
                $("#salarySumbit").attr('disabled', true);
                displaySuccessMessages("salaryBillTypeMessageDiv", updateSuccessMessage, "");
                setTimeout(function () {
                    createSalaryBillForm();

                }, 4000);


            }
        });
    }
}



function deleteSalaryBillTypeOrEC(id) {
    if (checkUserPrivelege(pvDeleteSalaryBillType)) {
        if (confirm("Are you sure?")) {
            $(this).closest('tr').remove();
            deleteSalaryBillTypeOrECData(id);
        }
    }
}

function deleteSalaryBillTypeOrECData(id) {
    if (checkUserPrivelege(pvDeleteSalaryBillType)) {

        $.post(server_base_url + "hrms/salary/SalaryBillTypeOrEC/Delete", {
            Id: id,
            userid: getUserSessionElement("userId")

        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("salaryBillTypelistMessageDiv", emptyListMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("salaryBillTypelistMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("salaryBillTypelistMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                displaySuccessMessages("salaryBillTypelistMessageDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    createSalaryBillForm();
                }, 4000);

            }
        });
    }
}