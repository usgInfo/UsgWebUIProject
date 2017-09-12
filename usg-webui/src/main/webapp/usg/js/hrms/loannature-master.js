/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Start Display Page
function dispalyhrmsCommonLoanNatureMaster() {
    createLoanNatureForm();
    fetchAllLoanNatureMasterList();
}
//End Display Page

//Start create form
function createLoanNatureForm() {
    // $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Common Master</a></label> >><label>Loan Nature Master</label>');
//    $("#dashboardTitleMainDiv").text("").append("HRMS");
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>><label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label>><label>Loan Nature Master</label>');

    $("#dashboardBodyMainDiv").text("").append('<div id="loannatureMainDiv" class="row"/>');
    $("#loannatureMainDiv").text("").append("<div id='loannaturecolumnDiv' class='col-lg-12'>");
    $("#loannaturecolumnDiv").append("<div id='loannaturepanelDiv' class='panel panel-blue'>");
    $("#loannaturepanelDiv").append("<div id='loannaturepanelHeadingDiv' class='panel-heading'></div>");
    if (checkUserPrivelege(pvCreateLoanNature)) {
    $("#loannaturepanelHeadingDiv").append("<h4 id='loannatureHeader' class='panel-title' />");
    $("#loannatureHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>Loan Nature Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colLoanNature'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#loannaturepanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#colLoanNature").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colLoanNature span").hasClass("glyphicon-minus-sign")) {
            $("#colLoanNature").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colLoanNature").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });



        $("#collapseOne2").append("<div id='loannaturepanelBodyDiv' class='panel-body pan'>");
        $("#loannaturepanelBodyDiv").append("<div id='loannatureformDiv' class='form-horizontal'>");
        $("#loannatureformDiv").append("<div id='loannatureformBodyDiv' class='form-body pal'>");
        $("#loannatureformBodyDiv").append("<div id='loannatureRowPanel' class='row'>");
        $("#loannatureRowPanel").append("<center><div id='pregsuccessBefore'/></center>");

        $("#loannatureformBodyDiv").append('<div class="form-group" id="loannatureFormGroupDiv1"><label for="loannatureName" class="col-lg-3 control-label">Loan Nature Master<span class="require">*</span></label>')
    $("#loannatureFormGroupDiv1").append('<div class="col-lg-9"><input id="loannatureName" name="loannatureName" type="text" placeholder="Enter Loan Nature Master" class="form-control" onkeypress="return acceptAlphanumeric(event)"><span id="loannatureErr" class="text-danger"></span></div></div></div>');

        $("#loannatureformBodyDiv").append('<div class="form-group" id="loannatureFormGroupDiv2"><label for="refundable" class="col-lg-3 control-label">Is Refundable?</label>');
        $("#loannatureFormGroupDiv2").append('<div class="col-lg-9"><input type="checkbox" value="YES" id="check-id" style="height: 1.5em; width: 1.5em"/></div>');

        $("#loannatureformBodyDiv").append('<center><input type="hidden" id="idValue"><button id="loannatureSaveandUpdateButton" value="save" onclick="loannatureValidation()" type="submit" class="btn btn-success bn">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\
    <button type="button" id="loannatureResetButton" class="btn btn-warning bn" onclick="resetLoanNatureMaster()">Reset</button></center></div>');
    }
    $("input").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });
}
//End Create Form

//Start Display Table
function fetchAllLoanNatureMasterList() {
    $("#loannatureMasterTableListPanel").remove("");
    $("#loannaturecolumnDiv").append("<div id='loannatureMasterTableListPanel' class='panel panel-blue'/>");
    $("#loannatureMasterTableListPanel").append("<div id='loannatureMasterTableHeading' class='panel-heading' />");
    $("#loannatureMasterTableHeading").append("<h4 id='loannatureMasterTableHeader' class='panel-title' />");
    $("#loannatureMasterTableHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>List of Loan Nature</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colLoanNatureList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#loannatureMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colLoanNatureList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colLoanNatureList span").hasClass("glyphicon-minus-sign")) {
            $("#colLoanNatureList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colLoanNatureList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='loannatureListPanelTableMainDiv' class = 'panel-body' />");
    $("#loannatureListPanelTableMainDiv").append("<div id='loannatureListPanelRow' class = 'row' />");
    $("#loannatureListPanelTableMainDiv").append("<center><div  id='tablesuccessBefore'/></center>");
    $("#loannatureListPanelTableMainDiv").append("<div id='loannatureMastertableresponsiveDiv' class='table-responsive' />");
    $("#loannatureMastertableresponsiveDiv").append('<table id="example1" class="table table-bordered">');

    //Start Header
    $("#example1").append("<thead class=''><tr id='loanNatureTableHeadId'>"

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Loan Name</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>IsRefundable? </th>");
    if (checkUserPrivelege(pvUpdateLoanNature)) {
        $("#loanNatureTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
    }
    if (checkUserPrivelege(pvDeleteLoanNature)) {
        $("#loanNatureTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>");
    }
    //End Header
    $.post(server_base_url + "hrms/common/LoanNature/View", {
        json: name

    }).done(function(data) {
        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("loannatureMastertableresponsiveDiv", "" + emptyListMessage + "");
            //  displaySmallErrorMessagesInRed("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("loannatureMastertableresponsiveDiv", "" + unauthorizedMessage + "");
            //  displaySmallErrorMessagesInRed("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("loannatureMastertableresponsiveDiv", "" + statusExceptionMessage + "");
            // displaySmallErrorMessagesInRed("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {

            var sno = 0;
            $("#example1").append("<tbody id='displayReligionTableBody' class='table-striped table-bordered' />");

            for (var i = data.length - 1; i >= 0; i--) {
                var loannaturejson = {
                    Id: data[i]._id.$oid,
                    loanName: data[i].loanName,
                    isRefundable: data[i].isRefundable

                }
                loannaturejson = JSON.stringify(loannaturejson);
                sno++;
                $("#displayReligionTableBody").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;' >" + data[i].loanName + "</td>"
                        + "<td style='cursor:pointer;' >" + data[i].isRefundable + "</td>");
                //+ "<td style='cursor:pointer;' onclick=updateLoanNature1('" + data[i].createdate+ "')>" + data[i].createdate + "</td>"
                if (checkUserPrivelege(pvUpdateLoanNature)) {
                    $("#" + data[i]._id.$oid).append("<td><a href='javascript:void(0);' onclick=updateLoanNature('" + encodeURI(loannaturejson) + "') class='anchor_edit'><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>");
                }
                if (checkUserPrivelege(pvDeleteLoanNature)) {
                    $("#" + data[i]._id.$oid).append("<td><a href='javascript:void(0);'  onclick=deletePopUp('DeleteLoanNature','relationMasterTableListPanel','" + data[i]._id.$oid + "')  class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
                }
            }

            $('#example1').dataTable();
        }
    });

}
//End Dipsplay Table

//Start Validation
function loannatureValidation() {
    var result = 1;
    loannatureDisableButton();
    var loannatureName = $("#loannatureName").val();

    if (loannatureName == undefined || loannatureName == null || loannatureName == "") {
        loannatureEnableButton();
        // $("#loannatureFormGroupDiv1").addClass("form-group state-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please enter Loan Nature Master");
        $("#loannatureName").focus();
        return false;
    }

    if (result != 0) {
        var buttonValue = $("#loannatureSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            saveLoanNature();
        } else if (buttonValue == updateButton) {
            updateLoan();
        }
    }
}
//End Validation

//Start save Function
function saveLoanNature() {
    if (checkUserPrivelege(pvCreateLoanNature)) {
        var ckb = "No";
        if ($("#check-id").prop("checked") == true) {
            ckb = "Yes";
        }
        var name = $("#loannatureName").val();

    var Json = {
        loanName: name,
        isRefundable: ckb
    };
    var json = JSON.stringify(Json);

    $.post(server_base_url + "hrms/common/LoanNature/Save", {
        json: json,
        loginUserId: getUserSessionElement("userId")
    }).done(function(data) {

        if (data == fail) {
            loannatureEnableButton();
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            loannatureEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            loannatureEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
            loannatureEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            loannatureEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function() {
                dispalyhrmsCommonLoanNatureMaster();
            }, 1000);

        } else if (data != null) {

            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            // $("#pregsuccessBefore").append("<span style='color:green;'><center><strong>" + successMessage + "</strong></center></span><br><br>");
            setTimeout(function() {
                // $("#pregsuccessBefore").fadeOut('slow');
                dispalyhrmsCommonLoanNatureMaster();
            }, 4000);
        }
    });
    }

}
//End Save Function

//Start update Function
function updateLoanNature(obj) {
//    createLoanNatureForm();
//    $("#loannatureMasterTableListPanel").remove();
//    fetchAllLoanNatureMasterList();
    if (checkUserPrivelege(pvUpdateLoanNature)) {
        $("#pregsuccessBefore").text("");
        obj = decodeURI(obj);
        obj = JSON.parse(obj);

        if (obj.isRefundable == "Yes") {
            $('#check-id').prop('checked', true);
        }
        $("#loannatureName").val(obj.loanName);
    $("#displayReligionTableBody tr").css("background-color", "white");
    $("#displayReligionTableBody tr" + "#" +  obj.Id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#loannatureSaveandUpdateButton").text("Update");
    $("#loannatureSaveandUpdateButton").val("update");
    $("#loannatureResetButton").text("Back");
    $("#idValue").val(obj.Id);

    }
}

function  updateLoan() {
    if (checkUserPrivelege(pvUpdateLoanNature)) {
        var rfund = "No";
        if ($("#check-id").prop("checked") == true) {
            rfund = "Yes";
        }
        var lname = $("#loannatureName").val();

        var id = $("#idValue").val();
        var date = $("#date_id").val();

    var Json = {
        loanName: lname,
        isRefundable: rfund
    };

    var json = JSON.stringify(Json);

    $.post(server_base_url + "hrms/common/LoanNature/Update", {
        id: id,
        json: json,
        userid: getUserSessionElement("userId")
    }).done(function(data) {
        if (data == fail) {
            loannatureEnableButton();
            displayErrorMessages("pregsuccessBefore", failMessage + "");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            loannatureEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            loannatureEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
            loannatureEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            loannatureEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate) {
            displayErrorMessages("pregsuccessBefore", existed + "");
            setTimeout(function() {
                dispalyhrmsCommonLoanNatureMaster();
            }, 1000);

        } else if (data != null) {

            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>" + updateMessage + "</strong></center></span><br><br>");
            setTimeout(function() {
                dispalyhrmsCommonLoanNatureMaster();
            }, 4000);
        }

    });

    }
}

//Start Delete Function
function DeleteLoanNature(id)
{
    //if (confirm("Are you sure?")) {
    //  $(this).closest('tr').remove();
    if (checkUserPrivelege(pvDeleteLoanNature)) {
        deleteLoanNature1(id);
    }
    //}
}


function  deleteLoanNature1(id) {

    if (checkUserPrivelege(pvDeleteLoanNature)) {
        
        $.post(server_base_url + "hrms/common/LoanNature/Delete", {
            id: id,
            userId: getUserSessionElement("userId")
        }).done(function(data) {
            if (data == fail) {
                // natureEnableButton();
                displayErrorMessages("tablesuccessBefore", failMessage + "");
            } else if (data == unauthorized||data.statuscode == unauthorized) {
                // natureEnableButton();
            displayErrorMessages("tablesuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            // natureEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
            //   natureEnableButton();
            displayErrorMessages("tablesuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            // natureEnableButton();
            displayErrorMessages("tablesuccessBefore", "No User available" + "");
        } else {

            displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
            // $("#tablesuccessBefore").append("<span style='color:green;'><center><strong>" + deleteMessage + "</strong></center></span><br><br>");
            setTimeout(function() {
                dispalyhrmsCommonLoanNatureMaster();
            }, 4000);
        }
    });


    }
}

//End Delete Function
//End update Function

//Start Reset Button
function resetLoanNatureMaster() {
    $("#loannatureName").val("");
    $('#check-id').prop('checked', false);
    $("#loannatureSaveandUpdateButton").text("Save");
    $("#loannatureSaveandUpdateButton").val("save");
    $("#loannatureResetButton").text("Reset");
}
//End Reset Button

function loannatureDisableButton() {

    $("#loannatureSaveandUpdateButton").attr('disabled', true);
    $("#loannatureResetButton").attr('disabled', true);
}
function loannatureEnableButton() {
    $("#loannatureSaveandUpdateButton").attr('disabled', false);
    $("#loannatureResetButton").attr('disabled', false);
}