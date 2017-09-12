/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function createSector() {
    //$("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetMenuTabs()">Budget Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="createSector()">Sector Category Master</a>');
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetMenuTabs()">Budget Master</a></label> >> <label>Sector Category Master</label>');

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> > <label><a href="javascript:budgetMenuTabs()">Budget Master</a></label> > <label>Sector Category Master</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="sectorCategoryMainDiv"/>');
    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#sectorCategoryMainDiv").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");


    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");

    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' class='panel_font' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Sector Category Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
//    $("#financialYeartableHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>Financial Year Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#collapseFin").click(function () {
        $("#collapseOne2").toggle();
        if ($("#collapseFin span").hasClass("glyphicon-minus-sign")) {
            $("#collapseFin").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#collapseFin").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='sectorCategorypanelMainBody' class = 'panel-body' />");

    $("#sectorCategorypanelMainBody").append("<div id='sectorCategorypanelRow' class='row' />");

    $("#sectorCategorypanelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#sectorCategorypanelMainBody").append("<div id='sectorNameMessageDiv'></div>");
    $("#sectorCategorypanelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
//    $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');
//    $("#formBodyPalDiv").append('<div  id="sectorCategoryFieldDiv"  class="form-group" />');
//    $("#sectorCategoryFieldDiv").append('<label for="sectorName"  class="col-md-3 control-label">Sector Name<span class="require">*</span></label>');
//    $("#sectorCategoryFieldDiv").append("<span id='pregppidsectorName'></span>");
//    $("#sectorCategoryFieldDiv").append('<div id="colmd9" class="col-md-9" />');
//    $("#colmd9").append('<div  id="inputIconright" class="input-icon right"/>');
//    $("#inputIconright").append('<i class="input-icon right"></i><input type="text" id="sectorName" onkeypress="return validatealphanumeric(event)" placeholder="Enter Sector Name" class="form-control"/>');
//    $("#sectorCategoryFieldDiv").append("<span id='pregppidsection'></span>");
    $("#panelBodyDiv").append('<div class="form-group col-lg-12" id="sectorCategoryMainDiv"><label for="sectorName" class="col-lg-3 control-label">Sector Name<span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="sectorName" type="text" onkeyup=validateName("sectorName","sectorNameErr") placeholder="Sector Name" class="form-control"/><span id="sectorNameErr" class="text-danger"></span></div></div></div>');

    $("#panelBodyDiv").append('<div id="panelRowa2" />');
    $("#panelRowa2").append('<div  id="sectorCategoryButton" class="" />');
    $("#sectorCategoryButton").append('<center><button id="sectionButtonSave" type="submit" onclick="saveSectorName()" class="btn btn-success" style="height:40px;width:80px">Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id="resetButton" type="button" class="btn btn-warning" style="height:40px;width:80px" onclick="resetSectorName()">Reset</button></center>');

    $("#tableHeader").append("<div id='sectorListPanel' class='panel panel-blue' />");

    $("#sectorListPanel").append("<div id='sectorListPanelHeading' class='panel-heading' />");
    $("#sectorListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title'  style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Sector Categories</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFinTable'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#collapseFinTable").click(function () {
        $("#collapseOne3").toggle();
        if ($("#collapseFinTable span").hasClass("glyphicon-minus-sign")) {
            $("#collapseFinTable").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#collapseFinTable").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#sectorListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");

    $("#listpanelMainBody").append("<div id='pregresssuccessBefore'>");
    $("#listpanelRow").append("<div  id='ErrorDiv'/>");

    $("#listpanelRow").append("<div id='sectorCatlistpanelRow' class='table-responsive' />");


    viewSectorList('sectorCatlistpanelRow');

}

function viewSectorList(divId)
{

    $("#" + divId).text("").append("<div id='displaySectorCategorySubDiv' class = 'panel panel-primary-head'></div>");
    $("#displaySectorCategorySubDiv").append("<table id='displaySectorCategoryTable' class='table table-bordered table-warning mb30'></table>");
    // pqrs table header
    $("#displaySectorCategoryTable").append("<thead class=''><tr>"
            //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Sector Name</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>"
            + "</tr></thead>");

    // var religion = $("#religionName").val();
    $.get(server_base_url + "/budget/master/Sector/View", {
    }).done(function (data) {
        if (data.statuscode == NoData) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", NoDataFoundMessage + "");
        }
        if (data == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            //displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("pregsuccessBefore", NoDataFoundMessage);
        } else if (data == unauthorized) {
//            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
//            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
//            displayLargeSuccessMessages("pregviewsuccessBefore", "" + NoDataFound + "<br /><br />");
//            displayLargeSuccessMessages("pregviewsuccessBefore", "" + NoDataFound + "<br /><br />");
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            if (data != null) {
                if (data.length > 0) {

                    var sno = 0;
                    // pqrs table body
                    $("#displaySectorCategoryTable").append("<tbody id='displaySectorCategoryTableBody' class='table-striped table-bordered' />");

                    for (var i = data.length - 1; i >= 0; i--) {
                        sno++;
                        var json = {
                            id: data[i]._id.$oid,
                            sectorName: data[i].sectorName
                        }
                        json = JSON.stringify(json)
                        $("#displaySectorCategoryTableBody").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + data[i].sectorName + "</td>"
//                                + "<td style='cursor:pointer;' onclick=editSectorNameInfo('" + data[i]._id.$oid + "','" + encodeURI(json) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
//                                + "<td style='cursor:pointer;'  onclick=removeSectorName('" + data[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="" style="margin-width:1%,width:80px">Delete</a>' + "</td></tr>");
                                + "<td style='cursor:pointer;' onclick=editSectorNameInfo('" + data[i]._id.$oid + "','" + encodeURI(json) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                                //+ "<td onclick=removeSectorName('" + data[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                                + "<td style='cursor:pointer;' onclick=deletePopUp('removeSectorName','displaySectorCategoryTable','" + data[i]._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td></tr>");

                    }

                    $("#displaySectorCategoryTable").dataTable();
                } else {
                    displaySmallErrorMessagesInRed("pregsuccessBefore", NoDataFoundMessage + "");
                }
            }

        }
    });

}

function editSectorNameInfo(id, sectorNameData)
{

    $("#sectorName").focus();
    $("#pregppidsection").text("");
    $("#sectorNameMessageDiv").text("");
    addSomeClass("sectorCategoryFieldDiv", "has-error");
    if (sectorNameData == null || sectorNameData == "" || sectorNameData == "undefined") {
        return false;
    }
    $("#displaySectorCategoryTableBody tr").css("background-color", "white");
    $("#displaySectorCategoryTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    sectorNameData = JSON.parse(decodeURI(sectorNameData));

    $("#sectorName").val(sectorNameData.sectorName);
    $("#sectorNameMessageDiv").text("");
    $("#sectorName").prop("readonly", false);
    $("#sectorCategoryButton").text("").append("<center><a id='updateButton' onclick=updateSectorName('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a  id='ddoUpdateReset' class='btn btn-warning' style='height:40px;width:80px' onclick='resetSectorName()'>Back</a></center>");
}

function updateSectorName(id)
{
    var sectorName = $("#sectorName").val();


    if (sectorName == "" || sectorName == "undefined") {
        $("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
        return false;
    } else if (sectorName != "") {
        // alert();
        if (!sectorName.match(alphaNumericPattern())) {


            addSomeClass("sectorCategoryFieldDiv", "has-error");
            $("#cityCat").focus();
            // displaySmallErrorMessages("", );
            $("#pregppidsection").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''><center>Please Enter Valid Sector Name.</center></span>");
            // alert("Please Enter Valid Description.");
            return false;
        }
        $("#pregppidsection").text("");

        removeSomeClass("form-groupDiv", "has-error");
        //sendSectionData();
    }

    var loginUserId = getUserSessionElement("userId");

    $.post(server_base_url + "/budget/master/Sector/Update", {
        sectorName: sectorName,
        id: id
    }).done(function (data) {
        if (data.statuscode == fail) {
            $("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + failMessage + "<strong></div></center>");
        } else if (data.statuscode == unauthorized) {
            $("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + unauthorizedMessage + "<strong></div></center>");
        } else if (data.statuscode == statusException) {
            $("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + statusExceptionMessage + "<strong></div></center>");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#sectorName").prop("disabled", true);
            $("#sectorCategoryButton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            //$("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Sector Name is successfully Updated<strong></div></center>");
            displaySuccessMessages("sectorNameMessageDiv", updateMessage, "");
            setTimeout(function () {
                createSector();
            }, 3000);
        } else {
            //$("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Sector name Creation Failed<strong></div></center>");
            displaySmallErrorMessagesInRed("sectorNameMessageDiv", "Sector Creation Failed" + "");
        }
    });
}

function removeSectorName(id)
{

    $.post(server_base_url + "/budget/master/Sector/Delete", {
        id: id
    }).done(function (data) {

        if (data == fail) {
//            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
//            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("pregsuccessBefore", failMessage + "");
        } else if (data == unauthorized) {
//            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
//            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
//            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
//            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data != null) {
            displaySuccessMessages("ErrorDiv", deleteMessage, "");
            setTimeout(function () {
                createSector();
            }, 1000);
            //displayLargeSuccessMessages("pregsuccessBefore", "" + successMessageDelete + "<br /><br />");
        } else {
            displaySmallErrorMessagesInRed("pregsuccessBefore", "Sector Deletion Failed" + "");
        }
    });
}

function resetSectorName()
{
    $("#sectorName").val("");
    $("#pregppidsectorName").text("");
    removeSomeClass("sectorCategoryFieldDiv", "has-error");
}

function saveSectorName() {
    var sectorName = $("#sectorName").val();
    $("#pregppidsection").text("");
    $("#sectorNameMessageDiv").text("");
    if (sectorName == "" || sectorName == "undefined") {
        addSomeClass("sectorCategoryFieldDiv", "has-error");
        $("#sectorNamet").focus();
        $("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
        return false;
    } else if (sectorName != "") {
        // alert();
        if (!sectorName.match(alphaNumericPattern())) {

            // alert("Please Enter Valid Description.");
            addSomeClass("sectorCategoryFieldDiv", "has-error");
            $("#sectorName").focus();
            // displaySmallErrorMessages("", );
            $("#pregppidsection").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''><center>Please Enter Valid Sector Name.</center></span>");
            // alert("Please Enter Valid Description.");
            return false;
        }
        $("#pregppidsection").text("");

        removeSomeClass("form-groupDiv", "has-error");
        //sendSectionData();
    }

    var loginUserId = getUserSessionElement("userId");

    $.post(server_base_url + "/budget/master/Sector/Save", {
        sectorName: sectorName
    }).done(function (data) {
        if (data.statuscode == fail) {
            $("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + failMessage + "<strong></div></center>");
        } else if (data.statuscode == unauthorized) {
            $("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + unauthorizedMessage + "<strong></div></center>");
        } else if (data.statuscode == statusException) {
            $("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + statusExceptionMessage + "<strong></div></center>");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            $("#sectorName").prop("disabled", true);
            $("#sectorCategoryButton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            // $("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Sector Name is successfully Saved<strong></div></center>");

            //displaySuccessMessages("pregsuccessBefore", successMessage, "");
            //$("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Successfully Saved<strong></div></center>");
            displaySuccessMessages("sectorNameMessageDiv", successMessage, "");
            setTimeout(function () {
                createSector();
            }, 3000);

        } else {
            $("#sectorNameMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Sector Name Creation Failed<strong></div></center>");
        }
    });

}