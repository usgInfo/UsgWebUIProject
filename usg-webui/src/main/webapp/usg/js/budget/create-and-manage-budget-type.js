/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createBudgetType()
{
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetMenuTabs()">Budget Master</a></label> >> <label>Create and Manage Budget Type</label>');
    //$("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetMenuTabs()">Budget Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="createBudgetType()">Create and Manage Budget Type</a>');

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetMenuTabs()">Budget Master</a></label> >> <label>Create and manage Budget Type</label>');

    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetTypeMainDiv"/>');

    $("#budgetTypeMainDiv").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");
    if (checkUserPrivelege(pvCreateBudgetType)) {

        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");

        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Budget Type</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#collapseFin").click(function () {
            $("#collapseOne2").toggle();
            if ($("#collapseFin span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#collapseOne2").append("<div id='budgetTypepanelMainBody' class = 'panel-body' />");

        $("#budgetTypepanelMainBody").append("<div id='panelRow' class='row' />");

        $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#budgetTypepanelMainBody").append("<div id='budgetTypeMessageDiv'></div>");
        $("#budgetTypepanelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
        $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');

//    $("#formBodyPalDiv").append('<div  id="budgetTypeFieldDiv1"  class="form-group" />');
//
//    $("#budgetTypeFieldDiv1").append('<label for="description"  class="col-md-3 control-label">Description&nbsp;<span class="require">*</span></label>');
//    $("#budgetTypeFieldDiv1").append("<span id='pregppidbudgetType1'></span>");
//    $("#budgetTypeFieldDiv1").append('<div id="colmd91" class="col-md-9" />');
//    $("#colmd91").append('<div  id="inputIconright1" class="input-icon right" />');
//    $("#inputIconright1").append('<input type="text" id="description" onkeypress="return validatealphanumeric(event)"  placeholder="Enter description" class="form-control"/>');
//    $("#budgetTypeFieldDiv1").append("<span id='pregppidsection'></span>");
//
//    $("#formBodyPalDiv").append('<div  id="budgetTypeFieldDiv2"  class="form-group" />');
//    $("#budgetTypeFieldDiv2").append('<label for="shortDescription"  class="col-md-3 control-label">Short description&nbsp;<span class="require">*</span></label>');
//    $("#budgetTypeFieldDiv2").append("<span id='pregppidbudgetType2'></span>");
//    $("#budgetTypeFieldDiv2").append('<div id="colmd92" class="col-md-9" />');
//    $("#colmd92").append('<div  id="inputIconright2" class="input-icon right"/>');
//    $("#inputIconright2").append("<input type='text' id='shortDescription' onkeypress='return validatealphanumeric(event)' class='form-control' placeholder='Enter Short description' >");

        $("#panelBodyDiv").append('<div class="form-group col-lg-12" id="budgetTypeMainDiv"><label for="description" class="col-lg-3 control-label">Description <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="description" type="text" onkeyup=validateName("description","descriptionErr") placeholder="Description" class="form-control"/><span id="descriptionErr" class="text-danger"></span></div></div></div>');
        $("#panelBodyDiv").append('<div class="form-group col-lg-12"><label for="shortdescription" class="col-lg-3 control-label">Short Description <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="shortdescription" type="text" onkeyup=validateName("shortdescription","shortdescriptionErr") placeholder="Short Description..." class="form-control"/><span id="shortdescriptionErr" class="text-danger"></span></div></div></div>');
        $("#panelBodyDiv").append('<div id="panelRowa2" />');
        $("#panelRowa2").append('<div  id="disciplineButton" class="" />');
        $("#disciplineButton").append('<center><button id="sectionButtonSave" type="submit" onclick="saveBudgetTypeData()" class="btn btn-success" style="height:40px;width:80px">Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id="resetButton" type="button" class="btn btn-warning" onclick="resetBudgetType()" style="height:40px;width:80px">Reset</button></center>');

//    $("#tableHeader").append("<div id='budgetTypeListPanel' class='panel panel-blue' />");
//
//    $("#budgetTypeListPanel").append("<div id='budgetTypeListPanelHeading' class='panel-heading' />");
//    $("#budgetTypeListPanelHeading").append("<h4 id='budgetTypefirstHeader1' class='panel-title' />");
//    $("#budgetTypefirstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#budgetTypepanel' href='#collapseOneass2'><center>List of Budget Types</center></a>");
//
//    $("#budgetTypeListPanel").append("<div id='collapseOnebudgetTypethr12' class='panel-collapse collapse in' />");
//    $("#collapseOnebudgetTypethr12").append("<div id='budgetTypepanelMainBody2' class = 'panel-body' />");
//    $("#budgetTypepanelMainBody2").append("<center><span id='pregviewsuccessBeforebudgetType'></span></center>");
//    $("#budgetTypepanelMainBody2").append("<div id='budgetTypepanelRow4' class='row' />");
    }

    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
    viewBudgetType("tableHeaderForList");
    setTimeout(function () {
        $("#pregsuccessBefore").text("");
    }, 2100);

}

function viewBudgetType(divId)
{
    if (checkUserPrivelege(pvViewBudgetType)) {
        $("#" + divId).text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Budget Types</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFinTable'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#collapseFinTable").click(function () {
            $("#collapseOne3").toggle();
            if ($("#collapseFinTable span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFinTable").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFinTable").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");
        $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-warning mb30' id='budgetTypeTable' />");
        $("#budgetTypeTable").append("<thead class=''><tr id='budgetTypeTableTrHead'>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Description</th>");
        if (checkUserPrivelege(pvUpdateBudgetType)) {
            $("#budgetTypeTableTrHead").append("<th style='min-width:1%;width:80px;'><i class='fa'></i> Delete</th>");
        }
        if (checkUserPrivelege(pvDeleteBudgetType)) {
            $("#budgetTypeTableTrHead").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
//                + "</tr></thead>");

        $.get(server_base_url + "/budget/master/BudgetType/View", {
        }).done(function (pdata) {

            if (pdata == fail) {

                displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
            } else if (pdata == unauthorized || pdata.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == statusException) {
                displayLargeSuccessMessages("pregviewsuccessBeforebudgetType", "" + NoDataFound + "<br /><br />");
            } else {
                if (pdata != null) {

                    if (pdata.length > 0) {

                        var sno = 0;

                        $("#budgetTypeTable").append("<tbody id='budgetTypeTableBody' class=' table-bordered' />");

                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;

                            var budgetType = {
                                btid: pdata[i]._id.$oid,
                                description: pdata[i].description,
                                shortdescription: pdata[i].shortdescription

                            };
                            budgetType = JSON.stringify(budgetType);
                            $("#budgetTypeTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].description + "</td>");
                            if (checkUserPrivelege(pvUpdateBudgetType)) {
                                $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editBudgetType('" + encodeURI(budgetType) + "','" + pdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteBudgetType)) {
                                $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteBudgetTypeData','budgetTypeTable','" + pdata[i]._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td></tr>");
                            }
                            //+ "<td style='cursor:pointer;' onclick=deleteBudgetType('" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");


                        }
                        $("#budgetTypeTable").DataTable({
                            paging: true
                        });
                    }
                }

            }
        });
    }

}

function editBudgetType(budgetTypeData, id) {
    $("#description").focus();

    if (budgetTypeData == null || budgetTypeData == "" || budgetTypeData == undefined) {
        return false;
    }

    budgetTypeData = JSON.parse(decodeURI(budgetTypeData));
    $("#description").val(budgetTypeData.description);
    $("#shortdescription").val(budgetTypeData.shortdescription);
    $("#budgetTypeMessageDiv").text("");
//    $("#usedInPension").prop("readonly", false);
//    $("#location").prop("readonly", false);
//    $("#ddoRemarks").prop("readonly", false);
    $("#budgetTypeTableBody tr").css("background-color", "white");
    $("#budgetTypeTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#disciplineButton").text("").append("<center><button id='updateButton' onclick=updateBudgetTypeData('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='createBudgetType()' id='ddoUpdateReset' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");
}

function resetBudgetType()
{
    $("#description").val("");
    $("#shortdescription").val("");
//    $("#usedInPension").val("");
    $("#pregppidbudgetType1").text("");
    $("#pregppidbudgetType2").text("");

    //removeSomeClass("associationFieldDiv", "has-error");
    removeSomeClass("budgetTypeFieldDiv1", "has-error");
    removeSomeClass("budgetTypeFieldDiv2", "has-error");

}

function deleteBudgetType(id) {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deleteBudgetTypeData(id);
    }
}

function deleteBudgetTypeData(id) {
    if (checkUserPrivelege(pvDeleteBudgetType)) {
        $.post(server_base_url + "/budget/master/BudgetType/Delete", {
            id: id,
            userId: getUserSessionElement("userId")
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
                displaySuccessMessages("ErrorDiv", deleteMessage, "");
                setTimeout(function () {
                    createBudgetType();
                }, 1000);
            }


        });
    }
}

function saveBudgetTypeData() {
    if (checkUserPrivelege(pvCreateBudgetType)) {
        var description = $("#description").val();
        var shortdescription = $("#shortdescription").val();
//    var remarks = $("#remarks").val();
//    var used_in_pention = $("#usedInPension").val();
//    if ($('#usedInPension').prop('checked')) {
//        used_in_pention = $("#usedInPension").val();
//    }
        $("#pregppidsection").text("");
        $("#budgetTypeMessageDiv").text("");
        if (description == "" || description == "undefined" || shortdescription == "" || shortdescription == "undefined") {
            $("#budgetTypeMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
            return false;
        } else if (description != "") {


            if (!description.match(alphaNumericPattern())) {
                // alert("Please Enter Valid Description.");
                addSomeClass("budgetTypeFieldDiv1", "has-error");
                $("#description").focus();
                // displaySmallErrorMessages("", );
                $("#pregppidsection").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''><center>Please Enter Valid Description Name.</center></span>");
                // alert("Please Enter Valid Description.");
                return false;
            }
            $("#pregppidsection").text("");

            removeSomeClass("budgetTypeFieldDiv1", "has-error");
            //sendSectionData();
        }


        var budgetTypejson = {
            description: description,
            shortdescription: shortdescription

        };

        var budgetTypejson = JSON.stringify(budgetTypejson);


        $.post(server_base_url + "/budget/master/BudgetType/Save", {
            budgetType: budgetTypejson,
            userId: getUserSessionElement("userId")
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

//            createBudgetType();
//            //displayLargeSuccessMessages("pregsuccessBeforebudgetType", "" + successMessage + "<br /><br />");
//            displaySuccessMessages("pregsuccessBefore", successMessage, "");
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function () {
                    createBudgetType();
                }, 500);
            }
        });
    }

}

function updateBudgetTypeData(id) {
    if (checkUserPrivelege(pvUpdateBudgetType)) {
        var description = $("#description").val();
        var shortdescription = $("#shortdescription").val();
        $("#pregppidsection").text("");
        $("#budgetTypeMessageDiv").text("");
        if (description == "" || description == "undefined" || shortdescription == "" || shortdescription == "undefined") {
            $("#budgetTypeMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
            return false;
        } else if (description != "") {

            if (!description.match(alphaNumericPattern())) {
                // alert("Please Enter Valid Description.");
                addSomeClass("budgetTypeFieldDiv1", "has-error");
                $("#description").focus();
                // displaySmallErrorMessages("", );
                $("#pregppidsection").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Description Name.</span>");
                // alert("Please Enter Valid Description.");
                return false;
            }
            $("#pregppidsection").text("");

            removeSomeClass("budgetTypeFieldDiv1", "has-error");
            //sendSectionData();
        }

        var budgetTypeJson = {
            description: description,
            shortdescription: shortdescription
        };
        $.post(server_base_url + "/budget/master/BudgetType/Update", {
            budgetType: JSON.stringify(budgetTypeJson),
            id: id,
            userId: getUserSessionElement("userId")
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
                    createBudgetType();
                }, 1000);

            }
        });
    }

}

