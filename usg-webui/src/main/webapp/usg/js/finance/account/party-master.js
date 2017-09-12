/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function createPartyMaster() {

    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" ">Party Master</a>');
    $("#dashboardBodyMainDiv").text("").append('<div id="partyMasterMainDiv"/>');
    $("#partyMasterMainDiv").text("").append("<div id='partyMastercolumnDiv' >");
    //  if (checkUserPrivelege(pvCreateEmployeeDepartmentMapping)) {
    $("#partyMastercolumnDiv").append("<div id='partyMasterFirstPanel' class='panel panel-blue' />");
    $("#partyMasterFirstPanel").append("<div id='partyMasterfirstPanelHeading' class='panel-heading' />");
    $("#partyMasterfirstPanelHeading").append("<h4 id='partyMastertableHeader1' class='panel-title' />");
    $("#partyMastertableHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>Party Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colPartyMaster'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#partyMasterFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#colPartyMaster").click(function () {
        $("#collapseOne2").toggle();
        if ($("#colPartyMaster span").hasClass("glyphicon-minus-sign")) {
            $("#colPartyMaster").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colPartyMaster").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='partyMasterpanelBodyDiv' class='panel-body'>");
    $("#partyMasterpanelBodyDiv").append("<div id='partyMasterformBodyDiv' class='form-body '>");
    $("#partyMasterformBodyDiv").append("<div id='partyMasterMessageDiv' ></div>");
    $("#partyMasterformBodyDiv").append("<div id='FieldGroup' class='form-group'/>");

    getTwoColumnInRow("FieldGroup", "Row0", "Row0Col1", "Row0Col2");
    $("#Row0Col1").append(getLabel_InputWithSpan("Party Name", "required", "partyName", "", ""));
    $("#Row0Col2").append(getLabel_InputWithSpan("Party Contact Number", "required", "parytContactNumber", "", "onkeypress='return numericVal(event)' maxlength='10' "));

    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Contact Person 1", "", "firstContactPerson", "", ""));
    $("#Row1Col2").append(getLabel_InputWithSpan("Contact Person 2", "", "secondContactPerson", "", ""));


    // $("#Row1Col2").append(getLabel_InputWithSpan("Contact Address 1", "", "firstContactAddress", "", ""));

    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append('<div class="form-group has-success" id="form_group_div">');
    $("#Row2Col1").append('<label for="remarks" class="control-label">Contact Address 1</label>');
    $("#Row2Col1").append('<textarea id="firstContactAddress" type="text"  class="form-control"/>');

    $("#Row2Col2").append('<div class="form-group has-success" id="form_group_div">');
    $("#Row2Col2").append('<label for="remarks" class="control-label">Contact Address 2</label>');
    $("#Row2Col2").append('<textarea id="secondContactAddress" type="text"  class="form-control"/>');

    // $("#Row2Col2").append(getLabel_InputWithSpan("Contact Address 2", "", "secondContactAddress", "", ""));



    $("#FieldGroup").append('<div class="row" id="row3">');
    $("#row3").append('<div class="col-md-6" id="Row3Col1">');
    $("#Row3Col1").append('<div class="form-group has-success" id="form_group_div">');
    $("#Row3Col1").append('<label for="remarks" class="control-label">Remarks</label>');
    $("#Row3Col1").append('<textarea id="remarks" type="text"  class="form-control"/>');
    $("#row3").append('<div class="col-md-6" id="Row3Col2">');
    $("#Row3Col2").append('<input type="hidden" id="idValue" >');


    $("#partyMasterformBodyDiv").append("<div id='partyMasterButtonRowDiv' class='row' />");

    $("#partyMasterButtonRowDiv").append("<div  class='col-xs-12' id='partyMasterButtonRow'/><center><button type='button'  id='partyMasterButton' value='Save' class='btn btn-success bn'  onclick='validatePartyMaster()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='createPartyMaster()' class='btn btn-warning bn' id='partyMasterReset' name='reset' value='reset'>Reset</button></center></div>");

//}

    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });
    
     $("textarea").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    //   if (checkUserPrivelege(pvViewPartyMaster)) {
    $("#partyMastercolumnDiv").append("<div id='partyMasterListPanel' class='panel panel-blue' />");
    $("#partyMasterListPanel").append("<div id='partyMasterListPanelHeading' class='panel-heading' />");
    $("#partyMasterListPanelHeading").append("<h4 id='partyMasterfirstHeader1' class='panel-title' />");
    $("#partyMasterfirstHeader1").append("<class='panel-title' class='panel_font' data-parent='#accordion2'><center>List of Parties</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colPartyMasterList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#partyMasterListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colPartyMasterList").click(function () {
        $("#collapseOne3").toggle();
        if ($("#colPartyMasterList span").hasClass("glyphicon-minus-sign")) {
            $("#colPartyMasterList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colPartyMasterList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });

    $("#collapseOne3").append("<div id='partyMasterPanellistpanelMainBody' class = 'panel-body' />");
    $("#partyMasterPanellistpanelMainBody").append("<div id='partyMasterlistMessageDiv'></div>");
    $("#partyMasterPanellistpanelMainBody").append("<div id='partyMasterlistpanelRow'  />");
    $("#partyMasterlistpanelRow").append("<div id='partyMasterLeftstatuslistpanelRow' class='table-responsive' />");
    viewpartyMasterList('partyMasterLeftstatuslistpanelRow');
    // }


}

function validatePartyMaster() {

    var partyName = $("#partyName").val();
    var parytContactNumber = $("#parytContactNumber").val();
    var firstContactPerson = $("#firstContactPerson").val();
    var secondContactPerson = $("#secondContactPerson").val();
    var firstContactAddress = $("#firstContactAddress").val();
    var secondContactAddress = $("#secondContactAddress").val();
    var remarks = $("#remarks").val();



    var buttonValue = $("#partyMasterButton").val();

    var result = true;

    if (partyName == "" || partyName == null || partyName == undefined || parytContactNumber == "" || parytContactNumber == null || parytContactNumber == undefined) {
        displayLargeErrorMessagesInCenterInRed("partyMasterMessageDiv", "Please fill all mandatory fields");
        result = false;

    }


    if (parytContactNumber != "") {
        if (!$("#parytContactNumber").val().match((numbervalidation()))) {
            $("#parytContactNumber").focus();
            displaySmallErrorMessages("parytContactNumberErr", "Only numbers are allowed");
            result = false;
        }

    }

    if (result == true) {

        if (buttonValue == "Save") {
            savePartyMasterData();
        } else {
            updatePartyMasterData();
        }

    }

}


function savePartyMasterData() {

    var partyName = $("#partyName").val();
    var parytContactNumber = $("#parytContactNumber").val();
    var firstContactPerson = $("#firstContactPerson").val();
    var secondContactPerson = $("#secondContactPerson").val();
    var firstContactAddress = $("#firstContactAddress").val();
    var secondContactAddress = $("#secondContactAddress").val();
    var remarks = $("#remarks").val();

    var partyMasterJson = {
        partyName: partyName,
        partyContactNumber: parytContactNumber,
        firstContactPersonName: firstContactPerson,
        secondContactPersonName: secondContactPerson,
        firstContactAddress: firstContactAddress,
        secondContactAddress: secondContactAddress,
        remarks: remarks

    };



    var partyMasterStr = JSON.stringify(partyMasterJson);

    $.post(server_base_url + "/finance/AccountMaster/PartyMaster/Save", {
        partyMasterStr: partyMasterStr,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        data = JSON.parse(data);
        if (data == fail) {
            displayErrorMessages("partyMasterMessageDiv", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displayErrorMessages("partyMasterMessageDiv", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("partyMasterMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("partyMasterMessageDiv", "No User available" + "");
        } else if (data === duplicate) {

            displayErrorMessages("partyMasterMessageDiv", existed + "");
            setTimeout(function () {
                createPartyMaster();
            }, 4000);
        } else {
            displaySuccessMessages("partyMasterMessageDiv", successMessage, "");
            setTimeout(function () {
                createPartyMaster();
            }, 4000);
        }

    });


}

function updatePartyMasterData() {

    var id = $("#idValue").val();

    var partyName = $("#partyName").val();
    var parytContactNumber = $("#parytContactNumber").val();
    var firstContactPerson = $("#firstContactPerson").val();
    var secondContactPerson = $("#secondContactPerson").val();
    var firstContactAddress = $("#firstContactAddress").val();
    var secondContactAddress = $("#secondContactAddress").val();
    var remarks = $("#remarks").val();

    var partyMasterJson = {
        partyName: partyName,
        partyContactNumber: parytContactNumber,
        firstContactPersonName: firstContactPerson,
        secondContactPersonName: secondContactPerson,
        firstContactAddress: firstContactAddress,
        secondContactAddress: secondContactAddress,
        remarks: remarks

    };

    var partyMasterStr = JSON.stringify(partyMasterJson);

    $.post(server_base_url + "/finance/AccountMaster/PartyMaster/Update", {
        partyMasterStr: partyMasterStr,
        id: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {
        data = JSON.parse(data);
        if (data == fail) {
            displayErrorMessages("partyMasterMessageDiv", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displayErrorMessages("partyMasterMessageDiv", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("partyMasterMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("partyMasterMessageDiv", "No User available" + "");
        } else if (data === duplicate) {

            displayErrorMessages("partyMasterMessageDiv", existed + "");
            setTimeout(function () {
                createPartyMaster();
            }, 4000);
        } else {
            displaySuccessMessages("partyMasterMessageDiv", successMessage, "");
            setTimeout(function () {
                createPartyMaster();
            }, 4000);
        }

    });



}

function viewpartyMasterList(divId) {

    //   if (checkUserPrivelege(pvViewPartyMaster)) {
    $("#" + divId).text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered' id='displayPartyMasterTable' />");
    $("#displayPartyMasterTable").append("<thead><tr id='PartyMasterId'>"
            + "<th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Party Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Party Contact Number</th>");


    // if (checkUserPrivelege(pvUpdatePartyMaster)) {
    $("#PartyMasterId").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
    //  }
    //  if (checkUserPrivelege(pvDeletePartyMaster)) {
    $("#PartyMasterId").append("<th class='table_anchor_width'><i class='fa' ></i> Delete</th>");
//    }
    $.get(server_base_url + "/finance/AccountMaster/PartyMaster/View", {
    }).done(function (pdata) {

        pdata = JSON.parse(pdata);

        if (pdata == "") {
            displayLargeErrorMessagesInCenterInRed("partyMasterlistMessageDiv", noDataAvailable + "");
        } else if (pdata == fail) {
            displayLargeErrorMessagesInCenterInRed("partyMasterlistMessageDiv", emptyListMessage + "");
        } else if (pdata == unauthorized) {
            displayErrorMessages("partyMasterlistMessageDiv", unauthorizedMessage + "");
        } else if (pdata == statusException) {
            displayErrorMessages("partyMasterlistMessageDiv", statusExceptionMessage + "");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata != null) {
            if (pdata.length > 0) {
                var sno = 0;
                $("#displayPartyMasterTable").append("<tbody id='displayPartyMasterTableBody'/>");
                for (var i = pdata.length - 1; i >= 0; i--) {

                    sno++;
                    var objJson = {
                        objId: pdata[i]._id.$oid,
                        partyName: pdata[i].partyName,
                        partyContactNumber: pdata[i].partyContactNumber,
                        firstContactPersonName: pdata[i].firstContactPersonName,
                        secondContactPersonName: pdata[i].secondContactPersonName,
                        firstContactAddress: pdata[i].firstContactAddress,
                        secondContactAddress: pdata[i].secondContactAddress,
                        remarks: pdata[i].remarks

                    };
                    objJson = JSON.stringify(objJson);

                    $("#displayPartyMasterTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td >" + pdata[i].partyName + "</td>"
                            + "<td >" + pdata[i].partyContactNumber + "</td>");

                    //  if (checkUserPrivelege(pvUpdatePartyMaster)) {
                    $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updatePartyMaster('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");
                    // }
                    // if (checkUserPrivelege(pvDeletePartyMaster)) {
                    $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=deletePopUp('deletePartyMasterData','createPartyMaster','" + pdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                    //  }


                }
                $("#displayPartyMasterTable").dataTable();
            }
        }
    });
    //   }

}

function deletePartyMasterData(id) {

    //if (checkUserPrivelege(pvDeletePartyMaster)) {

    $.post(server_base_url + "/finance/AccountMaster/PartyMaster/Delete", {
        id: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayErrorMessages("partyMasterlistMessageDiv", emptyListMessage + "");
        } else if (data == unauthorized) {
            displayErrorMessages("partyMasterlistMessageDiv", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("partyMasterlistMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("partyMasterlistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                createPartyMaster();
            }, 4000);
        }
    });
    // }
}

function updatePartyMaster(obj) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);


    $("#idValue").val(obj.objId);


    $("#partyName").val(obj.partyName);
    $("#parytContactNumber").val(obj.partyContactNumber);
    $("#firstContactPerson").val(obj.firstContactPersonName);
    $("#secondContactPerson").val(obj.secondContactPersonName);
    $("#firstContactAddress").val(obj.firstContactAddress);
    $("#secondContactAddress").val(obj.secondContactAddress);
    $("#remarks").val(obj.remarks);

    $("#displayPartyMasterTableBody tr").css("background-color", "white");
    $("#displayPartyMasterTableBody tr" + "#" + obj.objId).css("background-color", "rgba(10, 129, 156, 0.3)");

    $("#partyMasterButtonRowDiv").text("").append("<div  class='col-xs-12' id='partyMasterButtonRow'/><center><button type='button'  id='partyMasterButton' value='Update' class='btn btn-success bn'  onclick='validatePartyMaster()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='createPartyMaster()' class='btn btn-warning bn' id='ddoDeptReset' name='reset' value='reset'>Back</button></center></div>");
}