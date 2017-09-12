/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function displaySector()
{
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetMenuTabs()">Budget Master</a></label> >> <label>Create and Manage Sector</label>');
    //$("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetMenuTabs()">Budget Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="displaySector()">Create And Manage sector</a>');

    $("#dashboardBodyMainDiv").text("").append('<div id="sectorMainDiv"/>');

    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget Module</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> > <label><a href="javascript:budgetMenuTabs()">Budget Master</a></label> > <label><a href="javascript:displaySector()">Create and manage Budget Sector</a></label>');
    $("#sectorMainDiv").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");
    if (checkUserPrivelege(pvCreateSector)) {

        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");

        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Sector Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#collapseFin").click(function () {
            $("#collapseOne2").toggle();
            if ($("#collapseFin span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
        $("#collapseOne2").append("<div id='sectorpanelMainBody' class = 'panel-body' />");

        $("#sectorpanelMainBody").append("<div id='disciplinepanelRow' class='row' />");

        $("#disciplinepanelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#sectorpanelMainBody").append("<div id='sectorMessageDiv'></div>");
        $("#sectorpanelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
        //$("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');

        //$("#formBodyPalDiv").append('<div  id="sectorFieldDiv1"  class="form-group" />');

//    $("#sectorFieldDiv1").append('<label for="sectorCode"  class="col-md-3 control-label">Sector Code&nbsp;<span class="require">*</span></label>');
//    //$("#associationFieldDiv1").append("<span id='pregppidassociation1'></span>");
//    $("#sectorFieldDiv1").append('<div id="colmd91" class="col-md-9" />');
//    $("#colmd91").append('<div  id="inputIconright1" class="input-icon right" />');
//    $("#inputIconright1").append('<input type="text" id="sectorCode" onkeypress="return validatealphanumeric(event)"  placeholder="Enter Sector Code" class="form-control"/>');
//    $("#colmd91").append("<span id='pregppidsector1'></span>");

        $("#panelBodyDiv").append('<div class="form-group col-lg-12" id="sectorMainDiv"><label for="sectorCode" class="col-lg-3 control-label">Sector Code <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="sectorCode" type="text" placeholder="Sector Code" class="form-control"/><span id="sectorCodeErr" class="text-danger"></span></div></div></div>');
        $("#sectorCode").attr("maxlength", 100);
//    $("#formBodyPalDiv").append('<div  id="sectorFieldDiv2"  class="form-group" />');
//    $("#sectorFieldDiv2").append('<label for="description"  class="col-md-3 control-label">Description&nbsp;<span class="require">*</span></label>');
//    $("#sectorFieldDiv2").append('<div id="colmd92" class="col-md-9" />');
//    $("#colmd92").append('<div  id="inputIconright2" class="input-icon right"/>');
//    $("#inputIconright2").append("<input type='text' id='description' onkeypress='return validatealphanumeric(event)' class='form-control' placeholder='Enter Description' >");
//    $("#colmd92").append("<span id='pregppidsector2'></span>");

        $("#panelBodyDiv").append('<div class="form-group col-lg-12"><label for="description" class="col-lg-3 control-label">Description <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="description" type = "text" placeholder="Please enter description..." class="form-control"/><span id="descriptionErr" class="text-danger"></span></div></div></div>');
        $("#description").attr("maxlength", 100);
        $("#panelBodyDiv").append('<div  id="sectorFieldDiv3"  class="form-group col-lg-12" />');
        $("#sectorFieldDiv3").append('<label for="underSector"  class="col-lg-3 control-label">Under Sector</label>');
        //$("#sectorFieldDiv3").append("<span id='pregppidsector3'></span>");
        $("#sectorFieldDiv3").append('<div id="colmd93" class="col-lg-6 col-sm-offset-1" />');
        $("#colmd93").append('<div  id="inputIconright3" class="input-icon right"/>');
        $("#inputIconright3").append('<select type="text" id="underSector"   class="form-control" / >');
        $("#colmd93").append("<span id='underSectorErr'></span>");


        $("#panelBodyDiv").append('<div  id="sectorFieldDiv4"  class="form-group col-lg-12" />');
        $("#sectorFieldDiv4").append('<label for="isIncome"  class="col-lg-3 control-label">Is Income</label>');
        //$("#sectorFieldDiv4").append("<span id='pregppidsector4'></span>");
        $("#sectorFieldDiv4").append('<div id="colmd94" class="col-lg-6 col-sm-offset-1" />');
        $("#colmd94").append('<div  id="inputIconright4" class="input-icon-right"/>');
        $("#inputIconright4").append("<input type='checkbox' id='isIncome' value='YES'class='form-contro' / >");
        $("#colmd94").append("<span id='isIncomeErr'></span>");

        $("#panelBodyDiv").append('<div  id="sectorFieldDiv5"  class="form-group col-lg-12" />');
        $("#sectorFieldDiv5").append('<label for="isExpense"  class="col-lg-3 control-label">Is Expense</label>');
        //$("#sectorFieldDiv5").append("<span id='pregppidsector5'></span>");
        $("#sectorFieldDiv5").append('<div id="colmd95" class="col-lg-6 col-sm-offset-1" />');
        $("#colmd95").append('<div  id="inputIconright5" class="input-icon-right"/>');
        $("#inputIconright5").append("<input type='checkbox' id='isExpense' value='YES'class='form-contro' / >");
        $("#colmd95").append("<span id='isExpenseErr'></span>");

        $("#panelBodyDiv").append('<div id="panelRowa2" />');
        $("#panelRowa2").append('<div  id="sectorButton" class="" />');
        $("#sectorButton").append('<center><button id="sectorButtonSave" type="submit" onclick="saveSectorData()" class="btn btn-success" style="height:40px;width:80px">Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id="resetButton" type="button" class="btn btn-warning" onclick="resetSector()" style="height:40px;width:80px">Reset</button></center>');

        fetchUnderSector();
    }
    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
    viewSector("tableHeaderForList");
    setTimeout(function () {
        $("#pregsuccessBefore").text("");
    }, 2100);
}

function  viewSector(divId) {
    if (checkUserPrivelege(pvViewSector)) {
        $("#" + divId).text("").append("<div id='manageSectorListPanel' class='panel panel-blue' />");
        $("#manageSectorListPanel").append("<div id='manageSectorListPanelHeading' class='panel-heading' />");
        $("#manageSectorListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Sector(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFinTable'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#manageSectorListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");
        $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-warning mb30' id='sectorTable' />");
        $("#sectorTable").append("<thead class=''><tr id='sectorTableTrHead'>"
                + " <th> S.No</th>"
                + "<th style='min-width:25%;width:auto;'><i class='fa'></i>Sector Code</th>"
                + "<th style='min-width:25%;width:auto;'><i class='fa'></i>Description</th>"
                + "<th style='min-width:25%;width:auto;'><i class='fa'></i>Under Sector</th>");
        if (checkUserPrivelege(pvUpdateSector)) {
            $("#sectorTableTrHead").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteSector)) {
            $("#sectorTableTrHead").append("<th style='min-width:1%;width:80px;'><i class='fa'></i> Delete</th>");
        }
//                + "</tr></thead>");

        $.get(server_base_url + "/budget/master/BudgetSector/View", {
        }).done(function (pdata) {
            if (pdata == fail) {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (pdata == unauthorized || pdata.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == statusException) {
                displayLargeSuccessMessages("pregviewsuccessBeforesector", "" + NoDataFound + "<br /><br />");
                displayLargeSuccessMessages("pregviewsuccessBeforesector", "" + NoDataFound + "<br /><br />");
            } else {
                if (pdata != null) {
                    var sno = 0;
                    var mainData = pdata.result;
                    $("#sectorTable").append("<tbody id='sectorTableBody' class='table-striped table-bordered' />");
                    for (var i = mainData.length - 1; i >= 0; i--) {
                        sno++;
                        var subData = mainData[i];

                        var sectorjson = {
                            id: subData._id.$oid,
                            sectorCode: subData.sectorCode,
                            description: subData.description,
                            underSector: subData.underSector,
                            isIncome: subData.isIncome,
                            isExpense: subData.isExpense

                        };
                        var underSectorName = subData.underSectorName;
                        if (underSectorName == undefined || underSectorName == "undefined") {
                            underSectorName = "";
                        }
                        sectorjson = JSON.stringify(sectorjson);
                        $("#sectorTableBody").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + subData.sectorCode + "</td>"
                                + "<td style='cursor:pointer;'>" + subData.description + "</td>"
                                + "<td style='cursor:pointer;'>" + underSectorName + "</td>");
                        if (checkUserPrivelege(pvUpdateSector)) {
                            $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=editSectorList('" + encodeURI(sectorjson) + "','" + subData._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>");
                        }
                        if (checkUserPrivelege(pvDeleteSector)) {
                            $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteSectorListData','sectorTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td></tr>");
                        }
                        //+ "<td style='cursor:pointer;' onclick=deleteSectorList('" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");
                    }
                    $("#sectorTable").DataTable({
                        paging: true
                    });

                }
            }
        });

    }

}

function editSectorList(sectorData, id) {

    $("#sectorCode").focus();
    $("#pregppidsector1").text("");
    if (sectorData == null || sectorData == "" || sectorData == undefined) {
        return false;
    }
    $("#sectorTableBody tr").css("background-color", "white");
    $("#sectorTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    sectorData = JSON.parse(decodeURI(sectorData));
    if (sectorData.isIncome == "YES") {
        $("#isIncome").attr('checked', true);
    } else {
        $("#isIncome").attr('checked', false);
    }

    if (sectorData.isExpense == "YES") {
        $("#isExpense").attr('checked', true);
    } else {
        $("#isExpense").attr('checked', false);
    }
    $("#sectorCode").val(sectorData.sectorCode);
    $("#description").val(sectorData.description);
    $("#underSector").val(sectorData.underSector);
    $("#sectorMessageDiv").text("");
    $("#isIncome").prop("readonly", false);
    $("#isExpense").prop("readonly", false);
//    $("#ddoRemarks").prop("readonly", false);
    $("#sectorButton").text("").append("<center><button id='updateButton' onclick=updateSectorData('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='resetSector()' id='resetButton' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");
}

function resetSector()
{
    //alert();
    $("#sectorCode").val("");
    $("#description").val("");
    $("#underSector").val("");
//    $("#isIncome").val("");
//    $("#isExpense").val("");

    $("#isIncome").prop('checked', false);
    $("#isExpense").prop("checked", false);
    $("#pregppidsector1").text("");
    $("#pregppidsector2").text("");
    $("#pregppidsector3").text("");
    $("#pregppidsector4").text("");
    $("#pregppidsector5").text("");
    removeSomeClass("sectorFieldDiv1", "has-error");
    removeSomeClass("sectorFieldDiv2", "has-error");
    removeSomeClass("sectorFieldDiv3", "has-error");
    removeSomeClass("sectorFieldDiv4", "has-error");
    removeSomeClass("sectorFieldDiv5", "has-error");
}

function deleteSectorList(id) {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deleteSectorListData(id);
    }
}

function deleteSectorListData(id) {
    if (checkUserPrivelege(pvDeleteSector)) {
        $.post(server_base_url + "/budget/master/BudgetSector/Delete", {
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
//            displaySector();
//            displaySmallErrorMessagesInRed("ErrorDiv", "" + deleteMessage + "<br /><br />");
                displaySuccessMessages("ErrorDiv", deleteMessage, "");
                setTimeout(function () {
                    displaySector();
                }, 3000);
            }

        });
    }
}

function saveSectorData() {
    if (checkUserPrivelege(pvCreateSector)) {
        var sectorCode = $("#sectorCode").val();
        var description = $("#description").val();
        var underSector = $("#underSector").val();

        if ($('#isIncome').prop('checked')) {
            var isIncome = $("#isIncome").val();
        } else
        {
            isIncome = "No";
        }

        if ($('#isExpense').prop('checked')) {
            var isExpense = $("#isExpense").val();
        } else
        {
            isExpense = "No";
        }
        $("#pregppidsector1").text("");
        $("#sectorMessageDiv").text("");
        if (sectorCode == "" || sectorCode == "undefined" || description == "" || description == "undefined") {
            $("#sectorMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
            return false;
        } else
        {
            var flag = "y";
            if (sectorCode != "") {
                if (!sectorCode.match(alphaNumericPattern())) {
                    addSomeClass("sectorFieldDiv1", "has-error");
                    $("#sectorCode").focus();
                    // displaySmallErrorMessages("", );
                    $("#pregppidsector1").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Sector Code.</span>");

                    flag = "n";
                } else
                {
                    $("#pregppidsector1").text("");

                    removeSomeClass("sectorFieldDiv1", "has-error");
                }
            }
            if (description != "") {
                // alert();
                if (!description.match(alphaNumericPattern())) {
                    addSomeClass("sectorFieldDiv2", "has-error");
                    $("#description").focus();
                    // displaySmallErrorMessages("", );
                    $("#pregppidsector2").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid description.</span>");

                    flag = "n";
                } else
                {
                    $("#pregppidsector2").text("");

                    removeSomeClass("sectorFieldDiv2", "has-error");
                    //sendSectionData();
                }
            }
            if (flag == "n")
            {
                return false;
            }
        }
        var sectorjson = {
            sectorCode: sectorCode,
            description: description,
            underSector: underSector,
            isIncome: isIncome,
            isExpense: isExpense
        };

        var sectorjson = JSON.stringify(sectorjson);



        $.post(server_base_url + "/budget/master/BudgetSector/Save", {
            sector: sectorjson,
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
            } else if (data != null) {
                $("#sectorCode").prop("disabled", true);
                $("#description").prop("disabled", true);
                $("#underSector").prop("disabled", true);

                $("#sectorButtonSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                //$("#sectorMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Sector  successfully Updated<strong></div></center>");
                displaySuccessMessages("sectorMessageDiv", successMessage, "");
                setTimeout(function () {
                    displaySector();
                }, 3000);

            } else {
                $("#sectorMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Sector Updation Failed<strong></div></center>");
            }
        });

    }
}

function updateSectorData(id) {
    if (checkUserPrivelege(pvUpdateSector)) {
        var sectorCode = $("#sectorCode").val();
        var description = $("#description").val();
        var underSector = $("#underSector").val();
        var isIncome = $("#isIncome").val();
        var isExpense = $("#isExpense").val();

        if ($('#isIncome').prop('checked')) {
            isIncome = $("#isIncome").val();
        } else
        {
            isIncome = "NO";
        }

        if ($('#isExpense').prop('checked')) {
            isExpense = $("#isExpense").val();
        } else
        {
            isExpense = "NO";
        }

        $("#pregppidsector1").text("");
        $("#sectorMessageDiv").text("");
        if (sectorCode == "" || sectorCode == "undefined" || description == "" || description == "undefined") {
            $("#sectorMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
            return false;
        } else
        {
            var flag = "y";
            if (sectorCode != "") {
                // alert();
                if (!sectorCode.match(alphaNumericPattern())) {
                    // alert("Please Enter Valid Description.");
                    addSomeClass("sectorFieldDiv1", "has-error");
                    $("#sectorCode").focus();
                    // displaySmallErrorMessages("", );
                    $("#pregppidsector1").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Sector Code.</span>");
                    // alert("Please Enter Valid Description.");
                    // return false;
                    flag = "n";
                } else
                {
                    $("#pregppidsector1").text("");

                    removeSomeClass("sectorFieldDiv1", "has-error");
                    //sendSectionData();
                }
            }
            if (description != "") {
                // alert();
                if (!description.match(alphaNumericPattern())) {
                    addSomeClass("sectorFieldDiv2", "has-error");
                    $("#description").focus();
                    // displaySmallErrorMessages("", );
                    $("#pregppidsector2").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Description.</span>");

                    flag = "n";
                } else
                {
                    $("#pregppidsector2").text("");

                    removeSomeClass("sectorFieldDiv2", "has-error");
                    //sendSectionData();
                }
            }

            if (flag == "n")
            {
                return false;
            }
        }


        var sectorjson = {
            sectorCode: sectorCode,
            description: description,
            underSector: underSector,
            isIncome: isIncome,
            isExpense: isExpense

        };
        $.post(server_base_url + "/budget/master/BudgetSector/Update", {
            sector: JSON.stringify(sectorjson),
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
            } else if (data != null) {
                $("#sectorCode").prop("disabled", true);
                $("#description").prop("disabled", true);
                $("#underSector").prop("disabled", true);

                $("#updateButton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                //$("#sectorMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Sector  successfully Saved<strong></div></center>");
                displaySuccessMessages("sectorMessageDiv", updateMessage, "");
                setTimeout(function () {
                    displaySector();
                }, 3000);

            } else {
                $("#sectorMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Sector Creation Failed<strong></div></center>");
            }
        });
    }

}

function fetchUnderSector() {
    $("#underSector").text("").append("<option value=''>---- Select Under Sector ----</option>");
    $.get(server_base_url + "/budget/master/BudgetSector/View", {
    }).done(function (pdata) {
        if (pdata == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (pdata == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata == statusException) {
            displayLargeSuccessMessages("pregviewsuccessBeforesector", "" + NoDataFound + "<br /><br />");
            displayLargeSuccessMessages("pregviewsuccessBeforesector", "" + NoDataFound + "<br /><br />");
        } else {
            if (pdata != null) {

                var mainData = pdata.result;

                for (var i = mainData.length - 1; i >= 0; i--) {

                    var subData = mainData[i];
                    $("#underSector").append("<option value='" + subData._id.$oid + "'>" + subData.sectorCode + "</option>");
                }
            }
        }
    });
}