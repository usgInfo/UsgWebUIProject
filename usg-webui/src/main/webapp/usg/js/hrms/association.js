/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayAssociationMaster() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">Association Master</a>');
    $("#dashboardBodyMainDiv").text("").append('<div id="associationMainDiv"/>');
    $("#associationMainDiv").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;' />");
    $("#mainTabMenu").append("<div id='tableHeader'/>");
    if (checkUserPrivelege(pvCreateAssociation)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Association Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colAssociation'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#colAssociation").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colAssociation span").hasClass("glyphicon-minus-sign")) {
                $("#colAssociation").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colAssociation").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='associationpanelMainBody' class = 'panel-body' />");
        $("#associationpanelMainBody").append("<div id='disciplinepanelRow' class='row' />");
        $("#disciplinepanelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#disciplinepanelRow").append("<div id='associationMessageDiv'></div>");
        $("#associationpanelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
        $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');
        $("#formBodyPalDiv").append('<div  id="associationFieldDiv1"  class="form-group" />');
        $("#associationFieldDiv1").append('<label for="associationName"  class="col-md-3 control-label">Association Name&nbsp;<span class="require">*</span></label>');
        $("#associationFieldDiv1").append('<div id="colmd91" class="col-md-9" />');
        $("#colmd91").append('<div  id="inputIconright1" class="" />');
        $("#inputIconright1").append('<input type="text" id="associationName" onkeypress="return acceptAlphanumeric(event)"  placeholder="Association Name" class="form-control"/>');
        $("#colmd91").append("<span id='pregppidassociation1'></span>");
        $("#formBodyPalDiv").append('<div  id="associationFieldDiv2"  class="form-group" />');
        $("#associationFieldDiv2").append('<label for="fees"  class="col-md-3 control-label">Fees&nbsp;<span class="require">*</span></label>');
        $("#associationFieldDiv2").append('<div id="colmd92" class="col-md-9" />');
        $("#colmd92").append('<div  id="inputIconright2" class=""/>');
        $("#inputIconright2").append("<input type='text' id='fees' onkeypress='return numericVal(event)' class='form-control' placeholder='Fees' >");
        $("#colmd92").append("<span id='pregppidassociation2'></span>");
        $("#formBodyPalDiv").append('<div  id="associationFieldDiv3"  class="form-group" />');
        $("#associationFieldDiv3").append('<label for="remarks"  class="col-md-3 control-label">Remarks</label>');

        $("#associationFieldDiv3").append("<span id='pregppidassociation3'></span>");
        $("#associationFieldDiv3").append('<div id="colmd93" class="col-md-9" />');
        $("#colmd93").append('<div  id="inputIconright3" class=""/>');
        $("#inputIconright3").append('<textarea type="text" id="remarks"   class="form-control" / >');
        $("#formBodyPalDiv").append('<div  id="associationFieldDiv4"  class="form-group" />');
        $("#associationFieldDiv4").append('<label for="usedInPension"  class="col-md-3 control-label">Used In Pension</label>');
        $("#associationFieldDiv4").append("<span id='pregppiddiscipline'></span>");
        $("#associationFieldDiv4").append('<div id="colmd94" class="col-md-9" />');
        $("#colmd94").append('<div  id="inputIconright4" class="col-sm-9" style=" padding-top: 7px;"/>');
        $("#inputIconright4").append("<input type='checkbox' id='usedInPension' value='YES'  / >");
        $("#panelBodyDiv").append('<div id="panelRowa2" />');
        $("#panelRowa2").append('<div  id="disciplineButton" class="" />');
        $("#disciplineButton").append('<center><button id="disciplineButtonSave" type="submit" onclick="saveAssociationData()" class="btn btn-success mr5">Save</button>&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetAssociation()">Reset</button></center>');


        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

    }
    if (checkUserPrivelege(pvViewAssociation)) {
        viewAssociation();

    }
}

function  viewAssociation() {
    if (checkUserPrivelege(pvViewAssociation)) {
        $("#tableHeader").append("<div id='associationListPanel1' />");
        $("#associationListPanel1").text("").append("<div id='associationListPanel' class='panel panel-blue' />");
        $("#associationListPanel").append("<div id='associationListPanelHeading' class='panel-heading' />");
        $("#associationListPanelHeading").append("<h4 id='associationfirstHeader1'  class='panel-title' />");
        $("#associationfirstHeader1 ").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Associations</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colAssociationList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#associationListPanel").append("<div id='collapseOneass2' class='panel-collapse collapse in' />");
        $("#colAssociationList").click(function () {
            $("#collapseOneass2").toggle();
            if ($("#colAssociationList span").hasClass("glyphicon-minus-sign")) {
                $("#colAssociationList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colAssociationList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOneass2").append("<div id='associationpanelMainBody2' class = 'panel-body' />");
        $("#associationpanelMainBody2").append("<center><span id='associationMsglist'></span></center>");
        $("#associationpanelMainBody2").append("<div id='associationpanelRow5' class='table-responsive' />");
        $("#associationpanelRow5").text("").append("<div id='associationSubDiv1' class = 'panel panel-primary-head'></div>");
        $("#associationSubDiv1").append("<table id='associationTable' class='table table-bordered'></table>");
        $("#associationTable").append("<thead class=''><tr id='associationTableHeadId'>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Association Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Fees</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Remarks</th>");
        if (checkUserPrivelege(pvUpdateAssociation)) {
            $("#associationTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteAssociation)) {
            $("#associationTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i> Delete</th>");
        }

        $.get(server_base_url + "/hrms/salary/Association/ViewList", {
        }).done(function (pdata) {

            if (pdata == fail) {

                displayLargeErrorMessagesInCenterInRed("associationMsglist", "" + NoDataFoundMessage + "<br /><br />");
                displayLargeErrorMessagesInCenterInRed("associationMsglist", "" + NoDataFoundMessage + "<br /><br />");
            } else if (pdata == unauthorized || pdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("associationMsglist", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessagesInCenterInRed("associationMsglist", "" + unauthorizedMessage + "<br /><br />");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("associationMsglist", "" + NoDataFound + "<br /><br />");
                displayLargeErrorMessagesInCenterInRed("associationMsglist", "" + NoDataFound + "<br /><br />");
            } else {
                if (pdata != null) {

                    if (pdata.length > 0) {

                        var sno = 0;

                        $("#associationTable").append("<tbody id='associationTableBody' class='table-striped table-bordered' />");

                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;

                            var assjson = {
                                aid: pdata[i]._id.$oid,
                                associationName: pdata[i].associationName,
                                remarks: pdata[i].remarks,
                                fees: pdata[i].fees,
                                isPension: pdata[i].isPension

                            }
                            assjson = JSON.stringify(assjson);
                            $("#associationTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].associationName + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].fees + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].remarks + "</td>");
                            if (checkUserPrivelege(pvUpdateAssociation)) {
                                $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editAssociation('" + encodeURI(assjson) + "','" + pdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteAssociation)) {
                                $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;'onclick=deletePopUp('deleteAssociationData','viewAssociation','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td>");
                            }
                        }
                        $("#associationTable").DataTable({
                            paging: true
                        });
                    }
                }

            }
        });
    }


}

function editAssociation(associationData, id) {
    if (checkUserPrivelege(pvUpdateAssociation)) {
        $("#associationName").focus();
        $("#pregppidassociation1").text("");
        $("#pregsuccessBefore").text("");
        if (associationData == null || associationData == " " || associationData == undefined) {
            return false;
        }

        associationData = JSON.parse(decodeURI(associationData));
        $("#associationName").val(associationData.associationName);
        $("#remarks").val(associationData.remarks);
        $("#fees").val(associationData.fees);
        var isPensionUsed1 = associationData.isPension;
        if (isPensionUsed1 == "YES")
        {
            $("#usedInPension").prop("checked", true);
            $("#usedInPension").val("YES");
        }
        $("#associationTableBody tr").css("background-color", "white");
        $("#associationTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#associationMessageDiv").text("");
        $("#usedInPension").prop("readonly", false);
        $("#location").prop("readonly", false);
        $("#ddoRemarks").prop("readonly", false);
        $("#disciplineButton").text("").append("<center><button id='updateButton' onclick=updateAssociationData('" + id + "') class='btn btn-success mr5'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayAssociationMaster()' id='ddoUpdateReset' class='btn btn-warning mr5'>Back</button></center>");
    }
}
function resetAssociation()
{
    //alert();
    $("#associationName").val("");
    $("#pregsuccessBefore").text("");
    $("#fees").val("");
    $("#remarks").val("");
    var isPensionUsed = $("#usedInPension").val();
    if (isPensionUsed == "YES")
    {
        $("#usedInPension").prop("checked", false);
    }

    $("#pregppidassociation1").text("");
    $("#pregppidassociation2").text("");
    $("#pregppidassociation3").text("");
    $("#associationMessageDiv").text("");
    removeSomeClass("associationFieldDiv1", "has-error");
    removeSomeClass("associationFieldDiv2", "has-error");
    removeSomeClass("associationFieldDiv3", "has-error");


}

function deleteAssociation(id) {
    if (checkUserPrivelege(pvDeleteAssociation)) {
        if (confirm("Are you sure?")) {
            $(this).closest('tr').remove();
            deleteAssociationData(id);
        }
    }
}
function deleteAssociationData(id) {
    if (checkUserPrivelege(pvDeleteAssociation)) {
        $("#associationMessageDiv").text("");
        $.post(server_base_url + "/hrms/salary/Association/Delete", {
            bid: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displaySmallErrorMessagesInRed("associationMsglist", "" + failMessage + "<br /><br />");
                displaySmallErrorMessagesInRed("associationMsglist", "" + failMessage + "<br /><br />");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("associationMsglist", "" + unauthorizedMessage + "<br /><br />");
                displaySmallErrorMessagesInRed("associationMsglist", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("associationMsglist", "" + statusExceptionMessage + "<br /><br />");
                displaySmallErrorMessagesInRed("associationMsglist", "" + statusExceptionMessage + "<br /><br />");

            } else if (data == delete_map) {
                displayErrorMessages("associationMsglist", "" + delete_map_messages, "");
                setTimeout(function () {
                    viewAssociation();
                }, 1000);
            } else {
                displaySuccessMessages("associationMsglist", deleteSuccessMessage, "");
                setTimeout(function () {
                    viewAssociation();
                }, 4000);
            }


        });
    }


}

function saveAssociationData() {
    if (checkUserPrivelege(pvCreateAssociation)) {
        $("#pregsuccessBefore").text("");
        var association_name = $("#associationName").val();
        var fees = $("#fees").val();
        var remarks = $("#remarks").val();
        var used_in_pention = $("#usedInPension").val();
        if ($('#usedInPension').prop('checked')) {
            used_in_pention = $("#usedInPension").val();
        } else
        {
            used_in_pention = "";
        }
        $("#pregppidassociation1").text("");
        $("#associationMessageDiv").text("");
        if (association_name == "" || association_name == "undefined" || fees == "" || fees == "undefined") {
            $("#associationMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill all mandatory fields<strong></div></center>");
            return false;
        } else
        {
            var flag = "y";
            if (association_name != "") {
                if (!association_name.match(alphaNumericPattern())) {
                    addSomeClass("associationFieldDiv1", "has-error");
                    $("#associationName").focus();
                    $("#pregppidassociation1").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Association Name.</span>");
                    flag = "n";
                } else
                {
                    $("#pregppidassociation1").text("");
                    removeSomeClass("associationFieldDiv1", "has-error");
                }
            }
            if (fees != "") {
                if (!fees.match(numbervalidation())) {
                    addSomeClass("associationFieldDiv2", "has-error");
                    $("#fees").focus();
                    $("#pregppidassociation2").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid fees.</span>");
                    flag = "n";
                } else
                {
                    $("#pregppidassociation2").text("");

                    removeSomeClass("associationFieldDiv2", "has-error");
                }
            }
            if (flag == "n")
            {
                return false;
            }
        }
        var assjson = {
            associationName: association_name,
            fees: fees,
            remarks: remarks,
            isPension: used_in_pention
        };

        var Assjson = JSON.stringify(assjson);


        $.post(server_base_url + "/hrms/salary/Association/Save", {
            association: Assjson,
            userid: getUserSessionElement("userId")
        }).done(function (data) {


            if (data == fail) {
                displaySmallErrorMessagesInRed("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displaySmallErrorMessagesInRed("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displaySmallErrorMessagesInRed("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displaySmallErrorMessagesInRed("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            } else if (data == duplicate_Message) {
                displayErrorMessages("associationMessageDiv", "" + existed + "");
                setTimeout(function () {
                    displayAssociationMaster();
                }, 500);
            } else if (data == duplicateAssociation) {
                displayErrorMessages("associationMessageDiv", "" + existed + "");
                setTimeout(function () {
                    displayAssociationMaster();
                }, 500);
            } else if (data != null) {
                $("#associationName").prop("disabled", true);
                $("#fees").prop("disabled", true);
                $("#remarks").prop("disabled", true);

                $("#disciplineButtonSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("associationMessageDiv", successMessage, "");
                setTimeout(function () {
                    displayAssociationMaster();
                }, 4000);

            } else {
                displaySmallErrorMessagesInRed("associationMessageDiv", failMessage + "<br/><br/>");
            }
        });

    }
}
function updateAssociationData(id) {
    if (checkUserPrivelege(pvUpdateAssociation)) {
        var association_name = $("#associationName").val();
        var fees = $("#fees").val();
        var remarks = $("#remarks").val();
        var used_in_pention = $("#usedInPension").val();

        $("#pregppidassociation1").text("");
        $("#associationMessageDiv").text("");
        if (association_name == "" || association_name == "undefined" || fees == "" || fees == "undefined") {
            $("#associationMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
            return false;
        } else
        {
            var flag = "y";
            if (association_name != "") {
                // alert();
                if (!association_name.match(alphaNumericPattern())) {

                    addSomeClass("associationFieldDiv1", "has-error");
                    $("#associationName").focus();

                    $("#pregppidassociation1").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Association Name.</span>");

                    flag = "n";
                } else
                {
                    $("#pregppidassociation1").text("");

                    removeSomeClass("associationFieldDiv1", "has-error");

                }
            }
            if (fees != "") {

                if (!fees.match(numbervalidation())) {

                    addSomeClass("associationFieldDiv2", "has-error");
                    $("#fees").focus();

                    $("#pregppidassociation2").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid fees.</span>");

                    flag = "n";
                } else
                {
                    $("#pregppidassociation2").text("");

                    removeSomeClass("associationFieldDiv2", "has-error");
                }
            }
            if (flag == "n")
            {
                return false;
            }
        }
        if ($('#usedInPension').is(':checked')) {
            used_in_pention = "YES";
        } else
        {
            used_in_pention = "";
        }
        var assjson = {
            associationName: association_name,
            fees: fees,
            remarks: remarks,
            isPension: used_in_pention


        };
        $.post(server_base_url + "/hrms/salary/Association/Update", {
            assJson: JSON.stringify(assjson),
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {


            if (data == fail) {
                displaySmallErrorMessagesInRed("associationMessageDiv", "" + failMessage + "<br /><br />");
                displaySmallErrorMessagesInRed("associationMessageDiv", "" + failMessage + "<br /><br />");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("associationMessageDiv", "" + unauthorizedMessage + "<br /><br />");
                displaySmallErrorMessagesInRed("associationMessageDiv", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("associationMessageDiv", "" + statusExceptionMessage + "<br /><br />");
                displaySmallErrorMessagesInRed("associationMessageDiv", "" + statusExceptionMessage + "<br /><br />");

            } else if (data == duplicate_Message) {
                displayErrorMessages("associationMessageDiv", "" + existed + "");

                setTimeout(function () {
                    displayAssociationMaster();
                }, 500);
            } else if (data == duplicateAssociation) {
                displayErrorMessages("associationMessageDiv", "" + existed + "");
            } else if (data != null) {

                $("#associationName").prop("disabled", true);
                $("#fees").prop("disabled", true);
                $("#remarks").prop("disabled", true);
                $("#updateButton").attr('disabled', true);
                $("#ddoUpdateReset").attr('disabled', true);
                displaySuccessMessages("associationMessageDiv", successMessage, "");
                setTimeout(function () {
                    displayAssociationMaster();
                }, 4000);

            } else {
                $("#associationMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Association Creation Failed<strong></div></center>");
            }
        });

    }
}

function numeric(key) {

    var keycode = (key.which) ? key.which : key.keyCode;

//comparing pressed keycodes
    if (!(keycode == 8 || keycode == 12) && (keycode < 13 || keycode > 13) && (keycode < 48 || keycode > 57)) {

        return false;
    } else {

        return true;
    }
}
function numericVal(elementRef) {

    var keyCodeEntered = (event.which) ? event.which : (window.event.keyCode) ? window.event.keyCode : -1;

    if ((keyCodeEntered >= 48) && (keyCodeEntered <= 57)) {

        return true;

    }

// '.' decimal point...  

    else if (keyCodeEntered == 46) {

        if ((elementRef.value) && (elementRef.value.indexOf('.') <= 1))
            return false;

        else
            return true;
    }

    return false;

}
function assNamevalidation() {

    var assNameVatidate = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F\.\']*$/;
    return assNameVatidate;
}
