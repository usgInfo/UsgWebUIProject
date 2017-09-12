/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function quartermaster()
{
    scrolupfunction();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=quartermaster()>Quarter Master</a>');
    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateQuarter)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Quarter Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colQuarter'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colQuarter").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colQuarter span").hasClass("glyphicon-minus-sign")) {
                $("#colQuarter").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colQuarter").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
//    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        //bank name branch name
        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        //$("#FieldGroup").append("<input type='hidden' id='bid' >");

        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
//    $("#Row1Col1").append(getLabel_InputWithSpan("City", "required", "city", "Enter City", "onkeypress='return validatealphanumeric(event)'"));
        // $("#Row1Col2").append(getLabel_InputWithSpan(":", "required", "category", "Enter Quarter Category ", "onkeypress='return numericVal(event)'"));
        $("#Row1Col1").append(getLabel("City", "required") + "" + getDropDown("city"));
        $("#Row1Col2").append(getLabel("Quarter Category", "required") + "" + getDropDown("category"));

        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Quarter Number: ", "required", "quarterNo", "Enter Quarter Number", "onkeypress='return numericVal(event)'"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Carpet Area:", "required", "carpetArea", "Enter Carpet Area", "onkeypress='return numericVal(event)' size=50 maxlength=50"));

        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Quarter Condition", "required") + "" + getDropDown("condition"));
        $("#Row3Col2").append(getLabel_InputWithSpan("Remarks: ", "", "remarks", "Enter Remarks", ""));
        $("#FieldGroup").append("<div id='panelRow7' class='' />");

        $("#panelRow7").append("<center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='saveQuarterDetails()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllQuarterData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center>");

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });



    }
    viewallCategoriess();
    getConditionOption();
    viewQuarterList();
    viewOption("hrms/salary/City/ViewList", "", "cityName", "city", "City");

}
function saveQuarterDetails() {
    if (checkUserPrivelege(pvCreateQuarter)) {
        var category = $('#category').val();
        var city = $('#city').val();
        var quarterNo = $('#quarterNo').val();
        var carpetArea = $('#carpetArea').val();
        var condition = $('#condition').val();
        var remarks = $('#remarks').val();
        $("#pregsuccessBefore").text("");
        $("#categoryErr").text("");
        $("#cityErr").text("");
        $("#quarterNoErr").text("");
        $("#carpetAreaErr").text("");
        $("#conditionErr").text("");
        $("#remarksErr").text("");

        removeSomeClass("Row1Col1", "has-error");
        removeSomeClass("Row1Col2", "has-error");

        removeSomeClass("Row2Col2", "has-error");
        removeSomeClass("Row2Col2", "has-error");
        removeSomeClass("Row2Col1", "has-error");
        removeSomeClass("Row3Col1", "has-error");

        if (category == null || category == "" || category == "undefined" || city == "" || city == "undefined" || quarterNo == "" || quarterNo == "undefined" || carpetArea == "" || carpetArea == "undefined" || condition == "" || condition == "undefined" || condition == null)
        {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
            return false;
        } else
        {
            var flag = "y";
            if (city != "" && city != null) {
                // alert();
                $("#cityErr").text("");
                removeSomeClass("Row1Col1", "has-error");
            } else {
                $("#cityErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid City.</span>");
                $("#city").focus();
                flag = "n";
                addSomeClass("Row1Col1", "has-error");
            }
        }
        if (quarterNo != "") {
            // alert();
            if (!quarterNo.match(numbervalidation()))
            {
                addSomeClass("Row2Col1", "has-error");
                $("#quarterNo").focus();
                $("#quarterNoErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Quarter Number.</span>");
                flag = "n";
            } else
            {
                $("#quarterNoErr").text("");
                removeSomeClass("Row2Col1", "has-error");
                //sendSectionData();
            }
        }
        if (carpetArea != "")
        {
            // alert();
            if (!carpetArea.match(numbervalidation())) {
                // alert("Please Enter Valid Description.");
                addSomeClass("Row2Col2", "has-error");
                $("#carpetArea").focus();
                $("#carpetAreaErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Carpet Area.</span>");
                flag = "n";
            } else
            {
                $("#carpetAreaErr").text("");
                removeSomeClass("Row2Col2", "has-error");
            }
        }
        if (flag == "n")
        {
            return false;
        }
        var quarterJson = {
            category: category,
            city: city,
            quarterNo: quarterNo,
            carpetArea: carpetArea,
            condition: condition,
            remarks: remarks
        }
        $.post(server_base_url + "hrms/salary/Quarter/Save", {
            quarterJson: JSON.stringify(quarterJson),
            userId: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else if (data == duplicate_Message) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function () {
                    quartermaster();
                }, 500);
            } else if (data != null) {
                $("#category").prop("disabled", true);
                $("#city").prop("disabled", true);
                $("#quarterNo").prop("disabled", true);
                $("#carpetArea").prop("disabled", true);
                $("#condition").prop("disabled", true);
                $("#remarks").prop("disabled", true);

                $("#saveupdatebutton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function () {
                    quartermaster();
                }, 4000);

            } else {
                displayErrorMessages("pregsuccessBefore", failMessage, "");
            }
        });
    }
}
function wipeAllQuarterData() {
    $("#category").val("");
    $("#city").val("");
    $("#quarterNo").val("");
    $("#carpetArea").val("");
    $("#condition").val("");
    $("#remarks").val("");

    $("#pregsuccessBefore").text("");
    $("#categoryErr").text("");
    $("#cityErr").text("");
    $("#quarterNoErr").text("");
    $("#carpetAreaErr").text("");
    $("#conditionErr").text("");
    $("#remarksErr").text("");

    removeSomeClass("Row1Col1", "has-error");
    removeSomeClass("Row1Col2", "has-error");

    removeSomeClass("Row2Col2", "has-error");
    removeSomeClass("Row2Col2", "has-error");
    removeSomeClass("Row2Col1", "has-error");
    removeSomeClass("Row3Col1", "has-error");
}
function viewQuarterList(divId)
{
    if (checkUserPrivelege(pvViewQuarter)) {
        $("#tableHeader").append("<div id='maritalListPanel1'/>");
        $("#maritalListPanel1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Quarters</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colQuarterList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colQuarterList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colQuarterList span").hasClass("glyphicon-minus-sign")) {
                $("#colQuarterList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colQuarterList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");
        $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displayBankTable' />");
//    $("#" + divId).text("").append("<div id='displayBankSubDiv' class = 'panel panel-primary'></div>");
//    $("#" + divId).text("").append("<div id='displayBankSubDiv' class = 'panel-heading'></div>");
//    $("#displayBankSubDiv").append("<table id='displayBankTable' class='table table-striped table-bordered'></table>");
        $("#displayBankTable").append("<thead class=''><tr id='quarterTableHeadId'>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Category</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>City</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Quarter No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Carpet Area</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Condition</th>");
        if (checkUserPrivelege(pvUpdateQuarter)) {
            $("#quarterTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteQuarter)) {
            $("#quarterTableHeadId").append("<th style='min-width:1%;width:80px;''><i class='fa' style='font-size:21px;'></i> Delete</th>");
        }

        $.get(server_base_url + "hrms/salary/Quarter/ViewList", {
        }).done(function (bdata) {

            if (bdata == fail) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + noDataAvailable + "");
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + unauthorizedMessage + "");
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + noDataAvailable + "");
            } else {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var quarterjson = {
                                bid: bdata[i]._id.$oid,
                                category: bdata[i].category,
                                city: bdata[i].city,
                                quarterNo: bdata[i].quarterNo,
                                carpetArea: bdata[i].carpetArea,
                                condition: bdata[i].condition,
                                remarks: bdata[i].remarks
                            };
                            quarterjson = JSON.stringify(quarterjson);
                            $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].category + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].cityName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].quarterNo + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].carpetArea + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].condition + "</td>");
                            if (checkUserPrivelege(pvUpdateQuarter)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editQuarter('" + encodeURI(quarterjson) + "','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;&nbsp;<a   class="anchor_edit"style="align:center;"  >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteQuarter)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletequarter','','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;&nbsp;<a  class="anchor_delete"  style="align:center;" >Delete</a>' + "</td>");
                            }
                        }
                        $('#displayBankTable').dataTable();
                    }
                }
            }
        });
    }
}
function editQuarter(obj, id)
{
    if (checkUserPrivelege(pvUpdateQuarter)) {
        scrolupfunction();
        $("#category").val("");
        $("#city").val("");
        $("#quarterNo").val("");
        $("#carpetArea").val("");
        $("#condition").val("");
        $("#remarks").val("");

        $("#categoryErr").text("");
        $("#cityErr").text("");
        $("#quarterNoErr").text("");
        $("#carpetAreaErr").text("");
        $("#conditionErr").text("");
        $("#remarksErr").text("");

        removeSomeClass("Row1Col1", "has-error");
        removeSomeClass("Row1Col2", "has-error");

        removeSomeClass("Row2Col1", "has-error");
        removeSomeClass("Row2Col2", "has-error");
        //removeSomeClass("Row2Col1", "has-error");
        removeSomeClass("Row3Col1", "has-error");

        if (obj == null || obj == "" || obj == undefined) {
            return false;
        }

        obj = JSON.parse(decodeURI(obj));
        //alert(obj.disciplineName);
        $("#category").val(obj.category);
        $("#category option:contains(" + obj.category + ")").attr('selected', 'selected');
        $("#city").val(obj.city);
        $("#quarterNo").val(obj.quarterNo);
        $("#carpetArea").val(obj.carpetArea);
        $("#condition").val(obj.condition);
        $("#remarks").val(obj.remarks);
        $("#displayBankTableBody tr").css("background-color", "white");
        $("#displayBankTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");

        $("#pregsuccessBefore").text("");
        $("#category").prop("readonly", false);
        $("#city").val(obj.city).prop("readonly", false);
        $("#quarterNo").prop("readonly", false);
        $("#carpetArea").prop("readonly", false);
        $("#condition").prop("readonly", false);
        $("#remarks").prop("readonly", false);
        $("#panelRow7").text("").append("<center><button id='updateButton' onclick=updateQuarterDetails('" + id + "') class='btn btn-success mr5'>Update</button>&nbsp&nbsp&nbsp;<button  id='ddoUpdateReset' class='btn btn-warning mr5'  onclick='quartermaster()'>Back</button></center>");
    }
}

function updateQuarterDetails(id) {
    if (checkUserPrivelege(pvUpdateQuarter)) {
        var qid = id;
        var category = $('#category').val();
        var city = $('#city').val();
        var quarterNo = $('#quarterNo').val();
        var carpetArea = $('#carpetArea').val();
        var condition = $('#condition').val();
        var remarks = $('#remarks').val();

        $("#pregsuccessBefore").text("");
        $("#categoryErr").text("");
        $("#cityErr").text("");
        $("#quarterNoErr").text("");
        $("#carpetAreaErr").text("");
        $("#conditionErr").text("");
        $("#remarksErr").text("");

        removeSomeClass("Row1Col1", "has-error");
        removeSomeClass("Row1Col2", "has-error");

        removeSomeClass("Row2Col1", "has-error");
        removeSomeClass("Row2Col2", "has-error");
        //removeSomeClass("Row2Col1", "has-error");
        removeSomeClass("Row3Col1", "has-error");

        if (category == null || category == "" || category == "undefined" || city == "" || city == "undefined" || quarterNo == "" || quarterNo == "undefined" || carpetArea == "" || carpetArea == "undefined" || condition == "" || condition == "undefined" || condition == null)
        {
            //alert();
            displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
            return false;
        } else
        {
            var flag = "y";
            if (city != "" && city != null) {
                $("#cityErr").text("");
            } else {
                $("#cityErr").text("Please Enter Select City.");
                $("#city").focus();
                flag = "n";
            }
            if (quarterNo != "") {
                // alert();
                if (!quarterNo.match(numbervalidation()))
                {
                    addSomeClass("Row2Col1", "has-error");
                    $("#quarterNo").focus();
                    $("#quarterNoErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Quarter Number.</span>");
                    flag = "n";
                } else
                {
                    $("#quarterNoErr").text("");
                    removeSomeClass("Row2Col1", "has-error");
                    //sendSectionData();
                }
            }
            if (carpetArea != "")
            {
                // alert();
                if (!carpetArea.match(numbervalidation())) {
                    // alert("Please Enter Valid Description.");
                    addSomeClass("Row2Col2", "has-error");
                    $("#carpetArea").focus();
                    $("#carpetAreaErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Carpet Area.</span>");
                    flag = "n";
                } else
                {
                    $("#carpetAreaErr").text("");
                    removeSomeClass("Row2Col2", "has-error");
                }
            }
            if (flag == "n")
            {
                return false;
            }
        }
        var quarterJson = {
            category: category,
            city: city,
            quarterNo: quarterNo,
            carpetArea: carpetArea,
            condition: condition,
            remarks: remarks
        }
        // alert(qid);
        $.post(server_base_url + "hrms/salary/Quarter/Update", {
            quarterJson: JSON.stringify(quarterJson),
            qid: qid,
            userId: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else if (data == duplicate_Message) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function () {
                    quartermaster();
                }, 500);
            } else if (data != null) {
                $("#category").prop("disabled", true);
                $("#city").prop("disabled", true);
                $("#quarterNo").prop("disabled", true);
                $("#carpetArea").prop("disabled", true);
                $("#condition").prop("disabled", true);
                $("#remarks").prop("disabled", true);

                $("#saveupdatebutton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("pregsuccessBefore", updateSuccessMessage, "");
                setTimeout(function () {
                    quartermaster();
                }, 4000);

            } else {
                displayErrorMessages("pregsuccessBefore", failMessage + "");
            }
        });
    }
}
function deletequarter(id) {
    if (checkUserPrivelege(pvDeleteQuarter)) {
        $("#pregsuccessBefore").text("");
        $.post(server_base_url + "hrms/salary/Quarter/Delete", {
            qid: id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("ErrorDiv", "Invalid username / password");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("ErrorDiv", unauthorizedMessage);
            } else if (data == statusException) {
                displayErrorMessages("ErrorDiv", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("ErrorDiv", "No User available");
            } else if (data == delete_map) {
                // dispalyhrmsCommonReligion();
                displayErrorMessages("ErrorDiv", "" + delete_map_messages, "");
                setTimeout(function () {
                    $("#ErrorDiv").text("");
                }, 2100);
            } else {

                //displayLargeSuccessMessages("pregsuccessBefore", "Deleted Succesfully<br><br>");
                displaySuccessMessages("ErrorDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    viewQuarterList();
                }, 4000);
            }
        });
    }

}
function getConditionOption(condition) {
    $("#condition").append("<option value='' selected disabled>---- Select Condition ----</option>");
    if (condition == "Good") {
        $("#condition").append("<option value='Good' selected>Good</option>");
        $("#condition").append("<option value='Bad' >Bad</option>");
    } else if (condition == "Bad") {
        $("#condition").append("<option value='Good'>Good</option>");
        $("#condition").append("<option value='Bad' selected>Bad</option>");
    } else {
        $("#condition").append("<option value='Good'>Good</option>");
        $("#condition").append("<option value='Bad'>Bad</option>");
    }

}
function  viewallCategoriess(category) {
    $("#category").text("");
    $.get(server_base_url + "hrms/salary/QuarterCategory/ViewList", {
    }).done(function (bdata) {

        if (bdata == fail) {
//            displaySmallErrorMessagesInRed("pregsuccessBefore", "" + failMessage + "<br /><br />");
//            displaySmallErrorMessagesInRed("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (bdata == unauthorized) {
            displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
            displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "");
            displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
        } else {
            if (bdata != null) {
                $("#category").append("<option value='' selected disabled>---- Select Category ----</option>");
                if (bdata.length > 0)
                    for (var i = 0; i < bdata.length; i++) {
                        $("#category").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].category + "</option>");
                    }
                $("#category").val(category);

            }
        }
    });
}


