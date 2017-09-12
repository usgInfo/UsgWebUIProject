//HRMS >> Quarter Category Master
function quartercategorymaster(divId) {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">Quarter Category Master</a>');
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Salary Master</a></label> >> <label>Quarter Category Master</label>');
    $("#" + divId).text("").append("<div id='testMainDivId'   />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader'/>");
    if (checkUserPrivelege(pvCreateQuarterCategory)) {

        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Quarter Category Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colQuarter'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
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
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        //quartercategory 
        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        $("#FieldGroup").append("<input type='hidden' id='Id' >");

        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel_InputWithSpan("Category ", "required", "category", "Enter category ", "onkeypress='return acceptAlphanumeric(event)'"));
        $("#Row1Col2").append(getLabel("Type", "required") + "" + getDropDown("type"));

        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Carpet Area Range From", "", "carpetFrom", "Enter carpet area range from ", "onkeypress='return validateNumber(event)'"));
        $("#Row2Col2").append(getLabel_InputWithSpan("Carpet Area Range To", "", "carpetTo", "Enter carpet area range to", "onkeypress='return validateNumber(event)'"));

        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel_InputWithSpan("Total Quarters", "required", "quarters", "Enter Total Quarters  .Ex:12", "onkeypress='return validateNumber(event)'"));
        $("#Row3Col2").append(getLabel_InputWithSpan("Rent Amount", "required", "rentAmount", "Enter Rent Amount", "return validateNumber(event)'"));

        getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel_InputWithSpan("Pay Range From", "", "payFrom", "Enter Pay Range From Ex:2000", "onkeypress='return validateNumber(event)' maxlength=10"));
        $("#Row4Col2").append(getLabel_InputWithSpan("Pay Range To", "", "payTo", "Enter Pay Range to .Ex:5000", "return validateNumber(event)' maxlength=10"));

        getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel_InputWithSpan("Water Rent Amount", "required", "waterAmount", "Enter Water Rent Amount", "onkeypress='return validateNumber(event)'"));
        $("#Row5Col2").append(getLabel_InputWithSpan("Remarks", "", "remarks", "Enter remarks", ""));

        $("#FieldGroup").append("<div id='panelRow1' class='row' />");
        $("#panelRow1").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='quartercategoryValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllQuarterCategoryData()' class='btn btn-warning mr5' name='reset' id='resetBackBtnId' value='reset'>Reset</button></center></div>");

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });




    }
    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
    var TypeOption = ["Officer Level", "Assoc Prof & Asst. Prof"];
    getHardCodedOptions("type", "Type", TypeOption);
    if (checkUserPrivelege(pvViewQuarterCategory)) {
        viewQuarterCategoryList("tableHeaderForList");
    }
    setTimeout(function () {
        $("#pregsuccessBefore").text("");
    }, 2100);

}
function quartercategoryValidation() {
    $("#remarksErr").text("");
    $("#waterAmountErr").text("");
    $("#payToErr").text("");
    $("#payFromErr").text("");
    $("#rentAmountErr").text("");
    $("#quartersErr").text("");
    $("#carpetToErr").text("");
    $("#carpetFromErr").text("");
    $("#typeErr").text("");
    $("#categoryErr").text("");
    var saveorupdate = $("#saveorupdate").val();
    var result = 1;
    var category = $("#category").val();
    var type = $("#type").val();
    var carpetFrom = $("#carpetFrom").val();
    var carpetTo = $("#carpetTo").val();
    var quarters = $("#quarters").val();
    var rentAmount = $("#rentAmount").val();
    var payFrom = $("#payFrom").val();
    var payTo = $("#payTo").val();
    var waterAmount = $("#waterAmount").val();
    var remarks = $("#remarks").val();
    if (preValidation(category) || preValidation(type) || preValidation(quarters) || preValidation(rentAmount) || preValidation(waterAmount)) {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", mandatoryFieldMsg);
        return;
    } else {
        if (waterAmount == "") {
            $("#remarks").focus();
            addSomeClass("waterAmountFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("waterAmountErr", "Please enter water amount.");
            result = 0;
        } else if (waterAmount != "") {
            if (!waterAmount.match((numbervalidation()))) {
                $("#remarks").focus();
                addSomeClass("waterAmountFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("waterAmountErr", "Please enter valid  water amount.");
                result = 0;
            }
            removeSomeClass("waterAmountFieldGroup", "has-error");
        }
        if (payTo != "") {
            if (!payTo.match((numbervalidation()))) {
                $("#payTo").focus();
                addSomeClass("payToFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("payToErr", "Please enter valid pay to.");
                result = 0;
            }
            removeSomeClass("payToFieldGroup", "has-error");
        }
        if (payFrom != "") {
            if (!payFrom.match((numbervalidation()))) {
                $("#payFrom").focus();
                addSomeClass("payFromFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("payFromErr", "Please enter valid Pay from.");
                result = 0;
            }
            removeSomeClass("payFromFieldGroup", "has-error");
        }
        if (rentAmount == "") {
            $("#rentAmount").focus();
            addSomeClass("rentAmountFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("rentAmountErr", "Please enter rent amount.");
            result = 0;
        } else if (rentAmount != "") {
            if (!rentAmount.match((numbervalidation()))) {
                $("#rentAmount").focus();
                addSomeClass("rentAmountFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("rentAmountErr", "Please enter valid rent amount.");
                result = 0;
            }
            removeSomeClass("rentAmountFieldGroup", "has-error");
        }

        if (quarters == "") {
            $("#quarters").focus();
            addSomeClass("quartersFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("quartersErr", "Please enter quarters.");
            result = 0;
        } else if (quarters != "") {
            if (!quarters.match((numbervalidation()))) {
                $("#quarters").focus();
                addSomeClass("quartersFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("quartersErr", "Please enter valid quarters.");
                result = 0;
            }
            removeSomeClass("quartersFieldGroup", "has-error");
        }
        if (carpetTo != "") {
            if (!carpetTo.match((numbervalidation()))) {
                $("#carpetTo").focus();
                addSomeClass("carpetToFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("carpetToFieldGroup", "Please enter valid carpet To .");
                result = 0;
            }
            removeSomeClass("carpetToFieldGroup", "has-error");
        }
        if (carpetFrom != "") {
            if (!carpetFrom.match((numbervalidation()))) {
                $("#carpetFrom").focus();
                addSomeClass("carpetFromFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("carpetFromErr", "Please enter valid carpetFrom.");
                result = 0;
            }
            removeSomeClass("carpetFromFieldGroup", "has-error");
        }
        if (type == null || type == "") {
            $("#type").focus();
            addSomeClass("typeFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("typeErr", "Please Select type.");
            result = 0;
        } else if (type != "" && type != null) {
            $("#type").focus();
            removeSomeClass("typeFieldGroup", "has-error");
        }

        if (category == "") {
            $("#category").focus();
            addSomeClass("categoryFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("categoryErr", "Please enter category Name.");
            result = 0;
        } else if (category != "") {
            if (!category.match((alphaNumericPattern()))) {
                $("#category").focus();
                addSomeClass("categoryFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("categoryErr", "Please enter valid category name.");
                result = 0;
            }
            removeSomeClass("categoryFieldGroup", "has-error");
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveQuarterCategoryDetails();
            } else {
                updateQuarterCategoryDetails();
            }
        }
    }
}
function saveQuarterCategoryDetails() {
    if (checkUserPrivelege(pvCreateQuarterCategory)) {
        var category = $('#category').val();
        var type = $('#type').val();
        var carpetFrom = $('#carpetFrom').val();
        var carpetTo = $('#carpetTo').val();
        var quarters = $('#quarters').val();
        var rentAmount = $('#rentAmount').val();
        var payFrom = $('#payFrom').val();
        var payTo = $('#payTo').val();
        var waterAmount = $('#waterAmount').val();
        var remarks = $('#remarks').val();
        var quartercategoryJson = {
            category: category,
            type: type,
            carpetFrom: carpetFrom,
            carpetTo: carpetTo,
            quarters: quarters,
            rentAmount: rentAmount,
            payFrom: payFrom,
            payTo: payTo,
            waterAmount: waterAmount,
            remarks: remarks
        };
        $.post(server_base_url + "hrms/salary/QuarterCategory/Save", {
            quartercategoryJson: JSON.stringify(quartercategoryJson),
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
                    quartercategorymaster("dashBoardBodyMainDiv");
                }, 500);
            } else {
                disableDiv("FieldGroup");
                setTimeout(function () {
                    quartercategorymaster("dashBoardBodyMainDiv");
                    displaySuccessMessages("pregsuccessBefore", successMessage, "");
                }, 4000);
            }
        });
    }
}
function updateQuarterCategoryDetails() {
    if (checkUserPrivelege(pvUpdateQuarterCategory)) {
        var qid = $('#Id').val();
        var category = $('#category').val();
        var type = $('#type').val();
        var carpetFrom = $('#carpetFrom').val();
        var carpetTo = $('#carpetTo').val();
        var quarters = $('#quarters').val();
        var rentAmount = $('#rentAmount').val();
        var payFrom = $('#payFrom').val();
        var payTo = $('#payTo').val();
        var waterAmount = $('#waterAmount').val();
        var remarks = $('#remarks').val();
        var quartercategoryJson = {
            category: category,
            type: type,
            carpetFrom: carpetFrom,
            carpetTo: carpetTo,
            quarters: quarters,
            rentAmount: rentAmount,
            payFrom: payFrom,
            payTo: payTo,
            waterAmount: waterAmount,
            remarks: remarks
        };
        $.post(server_base_url + "hrms/salary/QuarterCategory/Update", {
            quartercategoryJson: JSON.stringify(quartercategoryJson),
            qid: qid
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function () {
                    quartercategorymaster("dashBoardBodyMainDiv");
                }, 500);
            } else if (data == null) {
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else {
                disableDiv("FieldGroup");
                setTimeout(function () {
                    quartercategorymaster("dashBoardBodyMainDiv");
                    displaySuccessMessages("pregsuccessBefore", successMessage, "");
                }, 4000);
            }
        });
    }
}
function wipeAllQuarterCategoryData() {


    $('#category').val("");
    $('#type').val("");
    $('#carpetFrom').val("");
    $('#carpetTo').val("");
    $('#quarters').val("");
    $('#rentAmount').val("");
    $('#payFrom').val("");
    $('#payTo').val("");
    $('#waterAmount').val("");
    $('#remarks').val("");




    $('#quartercategoryErr').text("");
    $("#remarksErr").text("");
    $("#waterAmountErr").text("");
    $("#payToErr").text("");
    $("#payFromErr").text("");
    $("#rentAmountErr").text("");
    $("#quartersErr").text("");
    $("#carpetToErr").text("");
    $("#carpetFromErr").text("");
    $("#typeErr").text("");
    $('#categoryErr').text("");
    $("#pregsuccessBefore").text("");
    $("#ErrorDiv").text("");
}
function viewQuarterCategoryList(divId)
{
    if (checkUserPrivelege(pvViewQuarterCategory)) {
        $("#" + divId).text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Quarter Categories</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colQuarterList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
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
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displayQuarterCategoryTable' />");
        $("#displayQuarterCategoryTable").append("<thead class=''><tr id='quarterTableHeadId'>"
                + " <th class='sno_width'> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Category Name</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Types</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Rent Amount</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Water Rent Amount</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Total Quarters</th>");
        if (checkUserPrivelege(pvUpdateQuarterCategory)) {
            $("#quarterTableHeadId").append("<th class='table_anchor_width'><i ></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteQuarterCategory)) {
            $("#quarterTableHeadId").append("<th class='table_anchor_width'><i ></i> Delete</th>");
        }
        $.get(server_base_url + "hrms/salary/QuarterCategory/ViewList", {
        }).done(function (bdata) {
            if (bdata == fail) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + noDataAvailable + "");
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + unauthorizedMessage + "");
                displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + unauthorizedMessage + "");
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + noDataAvailable + "");
            } else {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#displayQuarterCategoryTable").append("<tbody id='displayQuarterCategoryTableBody' class='table-striped table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var quartercategoryjson = {
                                Id: bdata[i]._id.$oid,
                                category: bdata[i].category,
                                type: bdata[i].type,
                                carpetFrom: bdata[i].carpetFrom,
                                carpetTo: bdata[i].carpetTo,
                                quarters: bdata[i].quarters,
                                payFrom: bdata[i].payFrom,
                                payTo: bdata[i].payTo,
                                rentAmount: bdata[i].rentAmount,
                                waterAmount: bdata[i].waterAmount,
                                remarks: bdata[i].remarks
                            };
                            quartercategoryjson = JSON.stringify(quartercategoryjson);
                            $("#displayQuarterCategoryTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"

                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].category + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].type + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].rentAmount + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].waterAmount + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].quarters + "</td>");
                            if (checkUserPrivelege(pvUpdateQuarterCategory)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatequartercategory('" + encodeURI(quartercategoryjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteQuarterCategory)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletequartercategory','','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                            }
                        }
                        $('#displayQuarterCategoryTable').dataTable();
                        $('#displayQuarterCategoryTable').append("</table>");
                    }
                }
            }
        });
    }
}
function updatequartercategory(obj) {
    if (checkUserPrivelege(pvUpdateQuarterCategory)) {
        scrolupfunction();
        $("#pregsuccessBefore").text("");
        obj = JSON.parse(decodeURI(obj));
        $("#Id").val(obj.Id);
        $("#remarks").val(obj.remarks);
        $("#waterAmount").val(obj.waterAmount);
        $("#payTo").val(obj.payTo);
        $("#payFrom").val(obj.payFrom);
        $("#rentAmount").val(obj.rentAmount);
        $("#quarters").val(obj.quarters);
        $("#carpetTo").val(obj.carpetTo);
        $("#carpetFrom").val(obj.carpetFrom);
        $("#type").val(obj.type);
        $("#type").val(obj.type);
        $("#category").val(obj.category);
        $("#displayQuarterCategoryTableBody tr").css("background-color", "white");
        $("#displayQuarterCategoryTableBody tr" + "#" + obj.Id).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#saveorupdate").val("update");
        $("#saveupdatebutton").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "quartercategorymaster('" + DashboardMainDivID + "')");
    }
}
function deletequartercategory(id) {
    if (checkUserPrivelege(pvDeleteQuarterCategory)) {

        $.post(server_base_url + "hrms/salary/QuarterCategory/Delete", {
            qid: id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("authonticationMsgId", "Invalid username / password");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("authonticationMsgId", unauthorizedMessage);
            } else if (data == statusException) {
                displayErrorMessages("authonticationMsgId", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("authonticationMsgId", "No User available");

            } else if (data == delete_map) {
                // dispalyhrmsCommonReligion();
                displayErrorMessages("authonticationMsgId", "" + delete_map_messages, "");
                setTimeout(function () {
                    $("#authonticationMsgId").text("");
                }, 2100);
            } else {

                displaySuccessMessages("ErrorDiv", "Deleted Succesfully");
                setTimeout(function () {
                    viewQuarterCategoryList("tableHeaderForList");
                }, 4000);
            }
        });
    }
}
