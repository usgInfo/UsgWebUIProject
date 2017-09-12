/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayGISgroup()
{
    scrolupfunction();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=displayGISgroup()>Gis Group Master</a>');

    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateGISGroup)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>GIS Group Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colGisGroupMaster'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colGisGroupMaster").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colGisGroupMaster span").hasClass("glyphicon-minus-sign")) {
                $("#colGisGroupMaster").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colGisGroupMaster").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");

        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");

        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");


        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel_InputWithSpan("Group Name", "required", "groupName", "Enter Group Name", ""));
        $("#Row1Col2").append(getLabel_InputWithSpan("Insurance Coverage", "required", "insCoverage", "Enter insurance Coverage ", "onkeypress='return numericVal(event)'"));

        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Grade Pay From ", "required", "gradePayFrom", "Enter Grade Pay From", "onkeypress='return numericVal(event)'"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Grade Pay To", "required", "gradePayTo", "Enter Grade Pay To", "onkeypress='return numericVal(event)'"));

        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel_InputWithSpan("Rate of Subscription", "required", "rateOfSub", "Enter Rate of Subscription", "onkeypress='return numericVal(event)'"));
        $("#Row3Col2").append(getLabel_InputWithSpan("Remarks ", "", "remarks", "Enter Remarks", ""));
        $("#FieldGroup").append("<div id='panelRow7' class='' />");

        $("#panelRow7").append("<center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='saveGisMaster()'>Save</button>&nbsp&nbsp&nbsp;<button type='button' onclick='resetGis()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center>");

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    }
    if (checkUserPrivelege(pvViewGISGroup)) {



        viewGisList();

    }
}
function saveGisMaster()
{
    if (checkUserPrivelege(pvCreateGISGroup)) {
        $("#pregsuccessBefore").text("");
        var groupName = $("#groupName").val();
        var insCoverage = $("#insCoverage").val();
        var gradePayFrom = $("#gradePayFrom").val();
        var gradePayTo = $("#gradePayTo").val();
        var rateOfSub = $("#rateOfSub").val();
        var remarks = $("#remarks").val();
        $("#pregsuccessBefore").text("");
        $("#groupNameErr").text("");
        $("#insCoverageErr").text("");
        $("#gradePayFromErr").text("");
        $("#gradePayToErr").text("");
        $("#rateOfSubErr").text("");
        $("#remarksErr").text("");


        if (groupName == "" || groupName == "undefined" || insCoverage == "" || insCoverage == "undefined" || gradePayFrom == "" || gradePayFrom == "undefined" || gradePayTo == "" || gradePayTo == "undefined" || rateOfSub == "" || rateOfSub == undefined || rateOfSub == null) {

            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
            return false;
        } else
        {
            var flag = "y";
            if (groupName != "") {

                $("#groupNameErr").text("");

                removeSomeClass("Row1Col1", "has-error");



            }
            if (insCoverage != "") {

                if (!insCoverage.match(numbervalidation())) {
                    addSomeClass("Row1Col2", "has-error");
                    $("#insCoverage").focus();
                    $("#insCoverageErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Insurance Coverage.</span>");
                    flag = "n";
                } else
                {
                    $("#insCoverageErr").text("");
                    removeSomeClass("Row1Col2", "has-error");

                }
            }
            if (gradePayFrom != "") {

                if (!gradePayFrom.match(numbervalidation())) {

                    addSomeClass("Row2Col1", "has-error");
                    $("#gradePayFrom").focus();

                    $("#gradePayFromErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Grade Pay From.</span>");

                    flag = "n";
                } else
                {
                    $("#gradePayFromErr").text("");
                    removeSomeClass("Row2Col1", "has-error");
                }
            }

            if (gradePayTo != "") {

                if (!gradePayTo.match(numbervalidation())) {

                    addSomeClass("Row2Col2", "has-error");
                    $("#gradePayTo").focus();
                    $("#gradePayToErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Grade Pay To.</span>");

                    flag = "n";
                } else
                {
                    $("#gradePayToErr").text("");
                    removeSomeClass("Row2Col2", "has-error");

                }
            }

            if (rateOfSub != "") {

                if (!rateOfSub.match(numbervalidation())) {

                    addSomeClass("Row3Col1", "has-error");
                    $("#rateOfSub").focus();

                    $("#rateOfSubErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Rate of Subscription.</span>");

                    flag = "n";
                } else
                {
                    $("#rateOfSubErr").text("");
                    removeSomeClass("Row3Col1", "has-error");

                }
            }
            //alert(flag);
            if (flag == "n")
            {
                return false;
            }
        }

        var GISjson = {
            groupName: groupName,
            insCoverage: insCoverage,
            gradePayFrom: gradePayFrom,
            gradePayTo: gradePayTo,
            rateOfSub: rateOfSub,
            remarks: remarks

        };
        GISjson = JSON.stringify(GISjson);



        $.post(server_base_url + "/hrms/salary/GisGroup/Save", {
            gisgroupmaster: GISjson,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "" + failMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
            } else if (data == duplicate) {
                displayErrorMessages("pregsuccessAfter", "" + existed + "");

            } else if (data == duplicate_Message) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function () {
                    displayGISgroup();
                }, 500);
            } else if (data != null) {
                $("#groupName").prop("disabled", true);
                $("#insCoverage").prop("disabled", true);
                $("#gradePayFrom").prop("disabled", true);
                $("#gradePayTo").prop("disabled", true);
                $("#rateOfSub").prop("disabled", true);
                $("#remarks").prop("disabled", true);

                $("#saveupdatebutton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function () {
                    displayGISgroup();
                }, 4000);

            } else {
                displayErrorMessages("pregsuccessBefore", failMessage + "");
            }


        });


    }



}

function viewGisList() {
    if (checkUserPrivelege(pvViewGISGroup)) {
        $("#tableHeader").append("<div id='cityListPanel1' />");
        $("#cityListPanel1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of GIS Group</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colGisGroupMasterList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colGisGroupMasterList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colGisGroupMasterList span").hasClass("glyphicon-minus-sign")) {
                $("#colGisGroupMasterList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colGisGroupMasterList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row ' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");
        $("#listpanelRow").append("<div class='' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='gisTable' />");



        $("#gisTable").append("<thead class=''><tr id='gisTableHeadId'>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Group Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Grade Pay</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Rate of Subscription</th>");
        if (checkUserPrivelege(pvUpdateGISGroup)) {
            $("#gisTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteGISGroup)) {
            $("#gisTableHeadId").append("<th style='min-width:1%;width:80px'><i class='fa' style='font-size:21px;'></i> Delete</th>");
        }


        $.get(server_base_url + "/hrms/salary/GisGroup/ViewList", {
        }).done(function (data) {
           
            if (data == fail) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFoundMessage + "");
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFoundMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + unauthorizedMessage + "");
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFound + "");
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFound + "");
            } else if (data == NoDataFoundMessage) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFound + "");
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + NoDataFound + "");
            } else {
                if (data != null) {

                    if (data.length > 0) {

                        var sno = 0;
                     
                        $("#gisTable").append("<tbody id='gisTableBody' class='table-striped table-bordered' />");

                        for (var i = data.length - 1; i >= 0; i--) {
                            sno++;

                            var gisjson = {
                                groupName: data[i].groupName,
                                gradePayFrom: data[i].gradePayFrom,
                                gradePayTo: data[i].gradePayTo,
                                insCoverage: data[i].insCoverage,
                                rateOfSub: data[i].rateOfSub,
                                remarks: data[i].remarks
                            }
                            var resu;
                            if (data[i].gradePayFrom == '5400') {
                                resu = "Grade Pay of Rs. " + data[i].gradePayFrom + " and  Above";
                            } else if (data[i].gradePayTo == '1600') {
                                resu = "Grade Pay upto " + data[i].gradePayTo;
                            } else
                            {
                                resu = "Grade Pay of Rs. " + data[i].gradePayFrom + " to Rs. " + data[i].gradePayTo;
                            }
                            gisjson = JSON.stringify(gisjson);

                            $("#gisTableBody").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + data[i].groupName + "</td>"
                                    + "<td style='cursor:pointer;'>" + resu + "</td>"
                                    + "<td style='cursor:pointer;'>" + data[i].rateOfSub + "</td>");
                            if (checkUserPrivelege(pvUpdateGISGroup)) {
                                $("#" + data[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editGISGroup('" + encodeURI(gisjson) + "','" + data[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a type="button" class="anchor_edit" style="min-width:1%,width:80px"  >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteGISGroup)) {
                                $("#" + data[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteGISData','viewGisList','" + data[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a type="button" class="anchor_delete" style="min-width:1%,width:80px"  >Delete</a>' + "</td>");
                            }



                        }
                        $("#gisTable").DataTable();
                    }
                }

            }
        });
    }


}
function editGISGroup(obj, id)
{
    if (checkUserPrivelege(pvUpdateGISGroup)) {
        $("#groupName").val("");
        $("#insCoverage").val("");
        $("#gradePayFrom").val("");
        $("#gradePayTo").val("");
        $("#rateOfSub").val("");
        $("#remarks").val("");
        $("#groupNameErr").text("");
        $("#insCoverageErr").text("");
        $("#gradePayFromErr").text("");
        $("#gradePayToErr").text("");
        $("#rateOfSubErr").text("");
        $("#remarksErr").text("");
        $("#pregsuccessBefore").text("");
        removeSomeClass("Row1Col1", "has-error");
        removeSomeClass("Row1Col2", "has-error");

        removeSomeClass("Row2Col2", "has-error");
        removeSomeClass("Row2Col2", "has-error");
        removeSomeClass("Row2Col1", "has-error");
        removeSomeClass("Row3Col1", "has-error");

        if (obj == null || obj == "" || obj == undefined) {
            return false;
        }

        obj = JSON.parse(decodeURI(obj));
        $("#groupName").val(obj.groupName);
        $("#insCoverage").val(obj.insCoverage);
        $("#gradePayFrom").val(obj.gradePayFrom);
        $("#gradePayTo").val(obj.gradePayTo);
        $("#rateOfSub").val(obj.rateOfSub);
        $("#remarks").val(obj.remarks);
        $("#pregsuccessBefore").text("");
        $("#groupName").prop("readonly", false);
        $("#insCoverage").prop("readonly", false);
        $("#gradePayFrom").prop("readonly", false);
        $("#gradePayTo").prop("readonly", false);
        $("#gisTableBody tr").css("background-color", "white");
        $("#gisTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#rateOfSub").prop("readonly", false);
        $("#remarks").prop("readonly", false);
        $("#panelRow7").text("").append("<center><button id='updateButton' onclick=updateGis('" + id + "') class='btn btn-success mr5'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button  id='ddoUpdateReset' class='btn btn-warning mr5'  onclick='displayGISgroup()'>Back</button></center>");
    }
}
function updateGis(id)
{
    if (checkUserPrivelege(pvUpdateGISGroup)) {
        var groupName = $("#groupName").val();
        var insCoverage = $("#insCoverage").val();
        var gradePayFrom = $("#gradePayFrom").val();
        var gradePayTo = $("#gradePayTo").val();
        var rateOfSub = $("#rateOfSub").val();
        var remarks = $("#remarks").val();
        $("#groupNameErr").text("");
        $("#insCoverageErr").text("");
        $("#gradePayFromErr").text("");
        $("#gradePayToErr").text("");
        $("#rateOfSubErr").text("");
        $("#remarksErr").text("");
        $("#pregsuccessBefore").text("");


        if (groupName == "" || groupName == "undefined" || insCoverage == "" || insCoverage == "undefined" || gradePayFrom == "" || gradePayFrom == "undefined" || gradePayTo == "" || gradePayTo == "undefined" || rateOfSub == "" || rateOfSub == undefined || rateOfSub == null) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
            return false;
        } else
        {
            var flag = "y";
            if (groupName != "") {
                
                $("#groupNameErr").text("");

                removeSomeClass("Row1Col1", "has-error");
                
            }
            if (insCoverage != "") {
                if (!insCoverage.match(numbervalidation())) {
                    addSomeClass("Row1Col2", "has-error");
                    $("#insCoverage").focus();
                    $("#insCoverageErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid insCoverage.</span>");
                 
                    flag = "n";
                } else
                {
                    $("#insCoverageErr").text("");
                    removeSomeClass("Row1Col2", "has-error");
                }
            }
            if (gradePayFrom != "") {
                if (!gradePayFrom.match(numbervalidation())) {
                    $("#gradePayFrom").focus();
                    $("#gradePayFromErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid fees.</span>");
                   
                    flag = "n";
                } else
                {
                    $("#gradePayFromErr").text("");
                    removeSomeClass("Row1Co21", "has-error");
                }
            }

            if (gradePayTo != "") {
                if (!gradePayTo.match(numbervalidation())) {
                    addSomeClass("Row1Co22", "has-error");
                    $("#gradePayTo").focus();
                    $("#gradePayToErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid gradePayTo.</span>");
                   
                    flag = "n";
                } else
                {
                    $("#gradePayToErr").text("");
                    removeSomeClass("Row1Co22", "has-error");
                }
            }

            if (rateOfSub != "") {
                if (!rateOfSub.match(numbervalidation())) {
                    addSomeClass("Row1Co31", "has-error");
                    $("#rateOfSub").focus();
                    $("#rateOfSubErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid rateOfSub.</span>");
                   
                    flag = "n";
                } else
                {
                    $("#rateOfSubErr").text("");
                    removeSomeClass("Row1Co32", "has-error");
                }
            }
            if (flag == "n")
            {
                return false;
            }
        }
        var updateGISjson = {
            groupName: groupName,
            insCoverage: insCoverage,
            gradePayFrom: gradePayFrom,
            gradePayTo: gradePayTo,
            rateOfSub: rateOfSub,
            remarks: remarks


        };
        updateGISjson = JSON.stringify(updateGISjson);
        $.post(server_base_url + "/hrms/salary/GisGroup/Update", {
            updategisgroupmaster: updateGISjson,
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "" + failMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
            } else if (data == duplicate_Message) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function () {
                    displayGISgroup();
                }, 500);
            } else if (data != null) {
                $("#groupName").prop("disabled", true);
                $("#insCoverage").prop("disabled", true);
                $("#gradePayFrom").prop("disabled", true);
                $("#gradePayTo").prop("disabled", true);
                $("#rateOfSub").prop("disabled", true);
                $("#remarks").prop("disabled", true);

                $("#saveupdatebutton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function () {
                    displayGISgroup();
                }, 4000);

            } else {
                displayErrorMessages("pregsuccessBefore", "" + "Gis creation Failed" + "");
            }


        });
    }
}
function resetGis()
{
    $("#groupName").val("");
    $("#insCoverage").val("");
    $("#gradePayFrom").val("");
    $("#gradePayTo").val("");
    $("#rateOfSub").val("");
    $("#remarks").val("");
    $("#groupNameErr").text("");
    $("#insCoverageErr").text("");
    $("#gradePayFromErr").text("");
    $("#gradePayToErr").text("");
    $("#rateOfSubErr").text("");
    $("#remarksErr").text("");
    $("#pregsuccessBefore").text("");

    removeSomeClass("Row1Col1", "has-error");
    removeSomeClass("Row1Col2", "has-error");

    removeSomeClass("Row2Col2", "has-error");
    removeSomeClass("Row2Col2", "has-error");
    removeSomeClass("Row2Col1", "has-error");
    removeSomeClass("Row3Col1", "has-error");
}

function deleteGISGroup(id) {
    if (checkUserPrivelege(pvDeleteGISGroup)) {
        if (confirm("Are you sure?")) {
            $(this).closest('tr').remove();
            deleteGISData(id);
        }
    }
}
function deleteGISData(id) {
    if (checkUserPrivelege(pvDeleteGISGroup)) {

        $("#pregsuccessBefore").text("");
        $.post(server_base_url + "/hrms/salary/GisGroup/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("ErrorDiv", "" + failMessage + "");
                displayErrorMessages("ErrorDiv", "" + failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("ErrorDiv", "" + unauthorizedMessage + "");
                displayErrorMessages("ErrorDiv", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("ErrorDiv", "" + statusExceptionMessage + "");
                displayErrorMessages("ErrorDiv", "" + statusExceptionMessage + "");

            } else {


                displaySuccessMessages("ErrorDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    viewGisList();
                }, 4000);
            }
        });


    }
}