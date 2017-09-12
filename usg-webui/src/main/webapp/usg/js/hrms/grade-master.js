//grade master
function grademaster(divId) {
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Salary Master</a></label> >> <label>Grade Master</label>');
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">Grade Master</a>');
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateGrade)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Grade Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colGrade'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#colGrade").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colGrade span").hasClass("glyphicon-minus-sign")) {
            $("#colGrade").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colGrade").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<div id='pregsuccessBefore'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    //
    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup").append("<input type='hidden' id='Id' >");

        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel_InputWithSpan("Grade Name", "required", "gradeName", "Enter Grade Name", ""));
        $("#Row1Col2").append(getLabel_InputWithSpan("Grade Pay", "required", "gradePay", "Enter Grade Pay", "onkeypress='return validateNumber(event)' maxlength=10"));

        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel("Increment Type", "required") + "" + getDropDown("incrementType"));
        $("#Row2Col2").append(getLabel("Remarks", "") + "" + getTextareaWithErrSpan("remarks", "Enter Remarks", "", "maxlength=100"));

        $("#panelMainBody").append("<h4><u>Grade Amount Details</u></h4><hr><center><span id='errorMsgForGradeAddList'></span></center><div id='panelRow2' class='row' />");
        $("#panelRow2").append("<div id='FieldGroup2' class='form-group' />");
        //G1 G2
        getTwoColumnInRow("FieldGroup2", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel_InputWithSpan("Grade-1", "required", "gradeOne", "Enter Grade 1", "onkeypress='return validateNumber(event)' maxlength=10"));
        $("#Row3Col2").append(getLabel_InputWithSpan("Grade-2", "required", "gradeTwo", "Enter Grade 2", "onkeypress='return validateNumber(event)' maxlength=10"));
//G3 Order
        getTwoColumnInRow("FieldGroup2", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel_InputWithSpan("Grade-3", "required", "gradeThree", "Enter Grade 3", "onkeypress='return validateNumber(event)' maxlength=10"));
        $("#Row4Col2").append(getLabel_InputWithSpan("Order", "required", "order", "Enter Order", "onkeypress='return validateNumber(event)' maxlength=10"));

        $("#panelMainBody").append("<div id='panelRow4' class='row' />");
        $("#panelRow4").append("<div  class='col-xs-12'><center><button type='button'  value='Save' class='btn btn-success  mr5'  onclick=addGradeRows('displayGradeAddTableBody')>Add</button>&nbsp&nbsp&nbsp;<button type='button' onclick= resetAllValuesInSpecifiedDiv('FieldGroup2'); class='btn btn-warning  mr5' name='reset' value='reset'>Reset</button></center></div>");
        $("#panelMainBody").append("<br><div id='panelRow5' class='row' />");
        $("#panelRow5").append("<div  class='col-xs-12' /><center><button type='button'  value='Save' id='saveupdatebutton' class='btn btn-success  mr5 ' onclick='gradeValidation()'>Save</button>&nbsp&nbsp&nbsp;<button type='button' onclick='resetGradeList()' class='btn btn-warning mr5 'id='resetBackBtnId' name='reset' value='reset'>Reset</button></center></div>");
   
    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

    $("textarea").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });
    
    
    }
    var Option = ["Fixed Amount", "Percentage"];
    getHardCodedOptions("incrementType", "Increment Type", Option);
    //For Grade
    $("#tableHeader").append("<div id='GradeListAddPanel' class='panel panel-blue' />");
    $("#GradeListAddPanel").append("<div id='GradeListAddPanelHeading' class='panel-heading' />");
    $("#GradeListAddPanelHeading").append("<h4 id='firstHeaderOfGradeListAdd' class='panel-title' />");
    $("#firstHeaderOfGradeListAdd").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Grade Amount Details</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colGradeList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#GradeListAddPanel").append("<div id='collapseOne31' class='panel-collapse collapse in' />");
    $("#colGradeList").click(function() {
        $("#collapseOne31").toggle();
        if ($("#colGradeList span").hasClass("glyphicon-minus-sign")) {
            $("#colGradeList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colGradeList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne31").append("<div id='gradeListAddlistpanelMainBody' class = 'panel-body' />");
    $("#gradeListAddlistpanelMainBody").append("<div id='gradelistAddpanelRow' class='row' />");
    viewGradeAddList('gradelistAddpanelRow');
    //For List
    $("#tableHeader").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Grades</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colGradeList2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colGradeList2").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colGradeList2 span").hasClass("glyphicon-minus-sign")) {
            $("#colGradeList2").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colGradeList2").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");

    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    if (checkUserPrivelege(pvViewGrade)) {
        viewGradeList('listpanelRow');
    }
    setTimeout(function() {
        $("#pregsuccessBefore").text("");
    }, 2100);


}
//Adding Grade Rows
function addGradeRows(DivId)
{
    $("#gradeOne").attr('readonly', true);
    $("#gradeOneErr").text("");
    $("#gradeTwoErr").text("");
    $("#gradeThreeErr").text("");
    $("#orderErr").text("");
    var gradeOne = $("#gradeOne").val();
    var gradeTwo = $("#gradeTwo").val();
    var gradeThree = $("#gradeThree").val();

    $("#gradeOne").val(gradeThree);

    var order = $("#order").val();
    var result = 1;

    if (order == "") {
        $("#order").focus();
        addSomeClass("orderFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("orderErr", "Please enter order.");
        result = 0;
    } else if (order != "") {
        if (!order.match((numbervalidation()))) {
            $("#order").focus();
            addSomeClass("orderFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("orderErr", "Please enter valid  order.");
            result = 0;
        }
        removeSomeClass("orderFieldGroup", "has-error");
    }
    if (gradeThree == "") {
        $("#gradeThree").focus();
        addSomeClass("gradeThreeFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("gradeThreeErr", "Please enter grade 3.");
        result = 0;
    } else if (gradeThree != "") {
        if (!gradeThree.match((numbervalidation()))) {
            $("#gradeThree").focus();
            addSomeClass("gradeThreeFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("gradeThreeErr", "Please enter valid   grade 3.");
            result = 0;
        }
    }
    if (gradeTwo == "") {
        $("#gradeTwo").focus();
        addSomeClass("gradeTwoFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("gradeTwoErr", "Please enter  grade 2.");
        result = 0;
    } else if (gradeTwo != "") {
        if (!gradeTwo.match((numbervalidation()))) {
            $("#gradeTwo").focus();
            addSomeClass("gradeTwoFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("gradeTwoErr", "Please enter valid   grade 2 .");
            result = 0;
        }
        removeSomeClass("gradeTwoFieldGroup", "has-error");
    }
    if (gradeOne == "") {
        $("#gradeOne").focus();
        addSomeClass("gradeOneFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("gradeOneErr", "Please  grade 1.");
        result = 0;
    } else if (gradeOne != "") {
        if (!gradeOne.match((numbervalidation()))) {
            $("#gradeOne").focus();
            addSomeClass("gradeOneFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("gradeOneErr", "Please enter valid   grade 1.");
            result = 0;
        }
        removeSomeClass("gradeOneFieldGroup", "has-error");
    }

    if (result != 0) {


        $("#" + DivId).append("<tr style='cursor:pointer;' >"
                + "<td style='cursor:pointer;'>" + gradeOne + "</td>"
                + "<td style='cursor:pointer;'>" + gradeTwo + "</td>"
                + "<td style='cursor:pointer;'>" + gradeThree + "</td>"
                + "<td style='cursor:pointer;'>" + order + "</td>"




                + "<td style='cursor:pointer;'>" + ' <i class="fa fa-edit"></i><a class="anchor_edit" href="javascript:void(0)" onclick=editThisGradeRow(this.parentNode.parentNode.rowIndex) > Edit</a>' + "</td>"
                + "<td style='cursor:pointer;' onclick=deleteGradeListRow(this.parentNode.parentNode.rowIndex)>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a type="" class="anchor_delete" id="deleteGradeListRow" class="btn mr5 btn-danger">Delete</button>' + "</td></tr>");
        $("#displayGradeAddTable").dataTable();
        clearGradeDetailsAddData();
        
    }
}
function  editThisGradeRow(i) {
    $('table#displayGradeAddTable tbody tr').each(function() {

        if ($(this).find("tr:eq(" + i + ")")) {
            var j = i - 1;
            $("#gradeOne").val($("table#displayGradeAddTable tbody tr:eq(" + j + ")").find('td:eq(0)').text());
            $("#gradeTwo").val($("table#displayGradeAddTable tbody tr:eq(" + j + ")").find('td:eq(1)').text());
            $("#gradeThree").val($("table#displayGradeAddTable tbody tr:eq(" + j + ")").find('td:eq(2)').text());
            $("#order").val($("table#displayGradeAddTable tbody tr:eq(" + j + ")").find('td:eq(3)').text());
        }
    });
    document.getElementById('displayGradeAddTableBody').deleteRow(i - 1);
}
function deleteGradeListRow(i) {
    document.getElementById('displayGradeAddTableBody').deleteRow(i - 1);
}
function clearGradeDetailsAddData() {
    //$("#gradeOne").val("");
    $("#gradeTwo").val("");
    $("#gradeThree").val("");
    $("#order").val("");
    $("#errorMsgForGradeAddList").text("");
}
function resetGradeList()
{
    $("#pregsuccessBefore").text("");
    $("#displayGradeAddTableBody").text("");
    $("#ErrorDiv").text("");
    resetAllValuesInSpecifiedDiv("FieldGroup");
    resetAllValuesInSpecifiedDiv("FieldGroup2");
}
function  viewGradeAddList(DivId) {
    $("#" + DivId).text("").append("<div class='tab-pane' id='viewGradeAdd'/>");
    $("#viewGradeAdd").append("<div class='table-responsive' id='viewGradeAddTableDiv' />");
    $("#viewGradeAddTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayGradeAddTable' />");
    $("#displayGradeAddTable").append("<thead class=''><tr>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Grade 1</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Grade 2</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Grade 3</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Order</th>"
            + "<th style='min-width:1%;width:80px;''><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;''><i class='fa' style='font-size:21px;'></i> Delete</th>"
            + "</tr></thead>");
    $("#displayGradeAddTable").append("<tbody id='displayGradeAddTableBody' class='table-striped table-bordered' />");
}
function viewGradeList(divId)
{
    $("#" + divId).text("").append("<div  id='ErrorDiv'/>");
//    $("#" + divId).append("<div class='tab-pane' id='viewUser'/>");
    $("#" + divId).append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displayGradeTable' />");
    $("#displayGradeTable").append("<thead class=''><tr id='gradeTableHeadId'>"

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Grade Details</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Grade Pay</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Increment Type</th>");
    if (checkUserPrivelege(pvUpdateGrade)) {
        $("#gradeTableHeadId").append("<th style='min-width:1%;width:80px;''><i class='fa'></i>Edit</th>");
    }
    if (checkUserPrivelege(pvDeleteGrade)) {
        $("#gradeTableHeadId").append("<th style='min-width:1%;width:80px;''><i class='fa' style='font-size:21px;'></i> Delete</th>");
    }
    $.get(server_base_url + "hrms/salary/Grade/ViewList", {
    }).done(function(bdata) {
        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + noDataAvailable + "<br /><br />");
        } else if (bdata.statuscode == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessAfter", "" + noDataAvailable + "<br /><br />");
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayGradeTable").append("<tbody id='displayGradeTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var gradejson = {
                            Id: bdata[i]._id.$oid,
                            gradeName: bdata[i].gradeName,
                            gradePay: bdata[i].gradePay,
                            incrementType: bdata[i].incrementType,
                            remarks: bdata[i].remarks,
                            GradeDetailsList: bdata[i].GradeDetailsList
                        };
                        var grades = "";
                        for (var j = 0; j < bdata[i].GradeDetailsList.length; j++) {
                            if (bdata[i].GradeDetailsList.length > 1) {
                                grades += bdata[i].GradeDetailsList[j].gradeOne + "-" + bdata[i].GradeDetailsList[j].gradeTwo + "-";
                                if (j == bdata[i].GradeDetailsList.length - 1) {
                                    grades += bdata[i].GradeDetailsList[ bdata[i].GradeDetailsList.length - 1].gradeThree;
                                }
                            } else {
                                grades += bdata[i].GradeDetailsList[j].gradeOne + "-" + bdata[i].GradeDetailsList[j].gradeTwo + "-" + bdata[i].GradeDetailsList[j].gradeThree + "";
                            }
                        }
                        gradejson = JSON.stringify(gradejson);
                        $("#displayGradeTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
//                                + "<td style='cursor:pointer;'>" + bdata[i].gradeOne + "-" + bdata[i].gradeTwo + "-" + bdata[i].gradeThree + "-" + bdata[i].order + "</td>"
                                + "<td style='cursor:pointer;'>" + grades + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].gradePay + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].incrementType + "</td>");
                        if (checkUserPrivelege(pvUpdateGrade)) {
                            $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updategrade('" + encodeURI(gradejson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit"  >Edit</a>' + "</td>");
//                                + "<td style='cursor:pointer;' onclick=updategrade('" + encodeURI(gradejson) + "')>" + ' <button type="button"  class="btn btn-primary mr5"style="align:center;color:white"  >EDIT</button>' + "</td>"
                        }
                        if (checkUserPrivelege(pvDeleteGrade)) {
                            $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deletegrade','','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" >Delete</a>' + "</td>");
                        }
//                        +"<td onclick=deletegrade('" + bdata[i]._id.$oid + "')>" + ' <button type="button" class="btn btn-danger mr5"  style="align:center;color:white" >DELETE</button>' + "</td></tr>");
                    }
                    $('#displayGradeTable').dataTable();
                }
            }
        }
    });
}
function deletegrade(Id) {
    if (checkUserPrivelege(pvDeleteGrade)) {
//    var result = confirm('Are you Sure?');
//    if (result) {
        $.post(server_base_url + "hrms/salary/Grade/Delete", {
            gradeId: Id,
            userId: getUserSessionElement("userId")
        }).done(function(data) {
            if (data == fail) {
            displayErrorMessages("authonticationMsgId", "Invalid username / password");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            displayErrorMessages("authonticationMsgId", unauthorizedMessage);
        } else if (data == statusException) {
            displayErrorMessages("authonticationMsgId", statusExceptionMessage);
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("authonticationMsgId", "No User available");
        } else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("ErrorDiv", "" + delete_map_message, "");
            setTimeout(function() {
                $("#ErrorDiv").text("");
            }, 1000);
        } else {
            if (BasicIfElseForTable(data, "ErrorDiv")) {
                viewGradeList('listpanelRow');
                displaySuccessMessages("ErrorDiv", deleteMessage, "");
                clearSuccessMessageAfterTwoSecond("ErrorDiv");
            }
        }
    });

    }
//    }
}

function gradeValidation() {
    $("#pregsuccessBefore").text("");
    $("#orderErr").text("");
    $("#gradeThreeErr").text("");
    $("#gradeTwoErr").text("");
    $("#gradeOneErr").text("");
    $("#incrementTypeErr").text("");
    $("#gradePayErr").text("");
    $("#gradeNameErr").text("");
    var saveorupdate = $("#saveorupdate").val();
    var gradePay = $("#gradePay").val();
    var gradeName = $("#gradeName").val();
    var incrementType = $("#incrementType").val();
    var remarks = $("#remarks").val();
    if (gradeName == "" || gradeName == "undefined" || gradePay == "" || gradePay == "undefined" || incrementType == "" || incrementType == "undefined") {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
        return false;
    } else {

        var count = 0;
        var result = 1;
        if (incrementType == null || incrementType == "") {
            $("#incrementType").focus();
            addSomeClass("incrementTypeFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("incrementTypeErr", "Please select increment Type");
            result = 0;
        } else if (incrementType != null || incrementType != "") {
            removeSomeClass("incrementTypeFieldGroup", "has-error");
        }
        if (gradePay == "") {
            $("#gradePay").focus();
            addSomeClass("gradePayFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("gradePayErr", "Please enter grade Pay.");
            result = 0;
        } else if (gradePay != "") {
            if (!gradePay.match((numbervalidation()))) {
                $("#gradePay").focus();
                addSomeClass("gradePayFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("gradePayErr", "Please enter valid grade pay.");
                result = 0;
            }
            removeSomeClass("gradePayFieldGroup", "has-error");
        }
        if (gradeName == "") {
            $("#gradeName").focus();
            addSomeClass("gradeNameFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("gradeNameErr", "Please enter Grade Name.");
            result = 0;
        }
//        } else if (gradeName != "") {
//            if (!gradeName.match((alphaNumericPattern()))) {
//                $("#gradeName").focus();
//                addSomeClass("gradeNameFieldGroup", "has-error");
//                displaySmallErrorMessagesInRed("gradeNameErr", "Please enter valid Grade name.");
//                result = 0;
//            }
//
//            removeSomeClass("gradeNameFieldGroup", "has-error");
//        }
        var HowManyRows = getRowsLengthForGrade();
        if (HowManyRows == 0) {
            $("#errorMsgForGradeAddList").text("");
            displayLargeErrorMessagesInCenterInRed("errorMsgForGradeAddList", "Please Add Atleast 1 Grade Amount Details");
            $("#gradeOne").focus();
        }
        if (HowManyRows > 0) {
            if (result != 0) {
                if (saveorupdate == "save") {
                    saveGradeDetails();
                } else {
                    updateGradeDetails();
                }
            }
        }
    }
}
function getRowsLengthForGrade() {
    var HowManyRows = 0;
    $('table#displayGradeAddTable tbody tr').each(function() {
        HowManyRows++;
    });

    return HowManyRows;
}
function saveGradeDetails() {
    if (checkUserPrivelege(pvCreateGrade)) {
        var gradeName = $('#gradeName').val();
        var gradePay = $('#gradePay').val();
        var incrementType = $('#incrementType').val();
        var remarks = $('#remarks').val();
        var GradeDetailsList = [];

        $('table#displayGradeAddTable tbody tr').each(function() {
            GradeDetailsList.push({
                gradeOne: $(this).find('td:eq(0)').text(),
                gradeTwo: $(this).find('td:eq(1)').text(),
                gradeThree: $(this).find('td:eq(2)').text(),
                order: $(this).find('td:eq(3)').text(),
            });
        });
        var gradeJson = {
            gradeName: gradeName,
            gradePay: gradePay,
            incrementType: incrementType,
            remarks: remarks,
            GradeDetailsList: GradeDetailsList
    }
    $.post(server_base_url + "hrms/salary/Grade/Save", {
        gradeJson: JSON.stringify(gradeJson),
        userId:getUserSessionElement("userId")
    }).done(function(data) {

        if (data == fail) {
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
        } else if (data.statuscode == unauthorized) {
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException||data.statuscode == statusException) {
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("pregsuccessBefore", "No User available" + "<br/><br/>");
        } else if (data == duplicate_Message) {
            displayErrorMessages("pregsuccessBefore", "" + existed + "");
            setTimeout(function() {
                grademaster("dashBoardBodyMainDiv");
            }, 500);
        } else {
            disableDiv("FieldGroup");
            disableDiv("FieldGroup2");
            setTimeout(function() {
                grademaster("dashBoardBodyMainDiv");
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
            }, 4000);
        }
        });
    }
}
function updategrade(obj) {
    if (checkUserPrivelege(pvUpdateGrade)) {
        obj = decodeURI(obj);
        obj = JSON.parse(obj);
        $("#pregsuccessBefore").text("");
        $("#gradeName").val(obj.gradeName);
        $("#Id").val(obj.Id);
        $("#gradePay").val(obj.gradePay);
        $("#incrementType").val(obj.incrementType);
        $("#remarks").val(obj.remarks);
        viewGradeAddList('gradelistAddpanelRow');
        UpdateGradeRows("displayGradeAddTableBody", obj.GradeDetailsList);
    $("#displayGradeTableBody tr").css("background-color", "white");
    $("#displayGradeTableBody tr" + "#" + obj.Id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#saveorupdate").val("update");
    $("#saveupdatebutton").text("").text("Update");
    addButtonOnclickFunction("resetBackBtnId", "Back", "grademaster('" + DashboardMainDivID + "')");
}
}
function UpdateGradeRows(DivId, GradeDetailsList)
{
    $("#gradeOne").attr('readonly', true);
    for (var j = 0; j < GradeDetailsList.length; j++) {
        var grade = GradeDetailsList[GradeDetailsList.length - 1].gradeThree;
        $("#gradeOne").val(grade);

        $("#" + DivId).append("<tr style='cursor:pointer;' >"
                + "<td style='cursor:pointer;'>" + GradeDetailsList[j].gradeOne + "</td>"
                + "<td style='cursor:pointer;'>" + GradeDetailsList[j].gradeTwo + "</td>"
                + "<td style='cursor:pointer;'>" + GradeDetailsList[j].gradeThree + "</td>"
                + "<td style='cursor:pointer;'>" + GradeDetailsList[j].order + "</td>"
                + "<td style='cursor:pointer;'>" + ' <button type="button" class="btn mr5 btn-info" onclick=editThisGradeRow(this.parentNode.parentNode.rowIndex) style="align:center;color:white">EDIT</button>' + "</td>"
                + "<td style='cursor:pointer;' >" + ' <button type="button" id="deleteGradeListRow" onclick=deleteGradeListRow(this.parentNode.parentNode.rowIndex) class="btn mr5 btn-danger" style="align:center;color:white">DELETE</button>' + "</td></tr>");
        $("#displayGradeAddTable").dataTable();
        clearGradeDetailsAddData();
    }
}
function updateGradeDetails() {
    if (checkUserPrivelege(pvUpdateGrade)) {
        var gradeId = $('#Id').val();
        var gradeName = $('#gradeName').val();
        var gradePay = $('#gradePay').val();
        var incrementType = $('#incrementType').val();
        var remarks = $('#remarks').val();
        var GradeDetailsList = [];
        $('table#displayGradeAddTable tbody tr').each(function() {
            GradeDetailsList.push({
                gradeOne: $(this).find('td:eq(0)').text(),
                gradeTwo: $(this).find('td:eq(1)').text(),
                gradeThree: $(this).find('td:eq(2)').text(),
                order: $(this).find('td:eq(3)').text(),
            });
        });
        var gradeJson = {
            gradeName: gradeName,
            gradePay: gradePay,
            incrementType: incrementType,
            remarks: remarks,
            GradeDetailsList: GradeDetailsList
    }
    $.post(server_base_url + "hrms/salary/Grade/Update", {
        gradeJson: JSON.stringify(gradeJson),
        gradeId: gradeId,
        userId:getUserSessionElement("userId")
    }).done(function(data) {
        if (data == fail) {
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
        } else if (data == unauthorized||data.statuscode == unauthorized) {
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate_Message) {
            displayErrorMessages("pregsuccessBefore", "" + existed + "");
            setTimeout(function() {
                grademaster("dashBoardBodyMainDiv");
            }, 500);
        } else {
            disableDiv("FieldGroup");
            disableDiv("FieldGroup2");
            setTimeout(function() {
                grademaster("dashBoardBodyMainDiv");
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
            }, 4000);
        }
        });
    }
}
//Clear All Entered Data
function wipeAllGradeData() {
    $("#order").val("");
    $("#gradeThree").val("");
    $("#gradeTwo").val("");
    $("#gradeOne").val("");
    $("#incrementType").val("");
    $("#gradePay").val("");
    $("#gradeName").val("");
    $("#orderErr").text("");
    $("#gradeThreeErr").text("");
    $("#gradeTwoErr").text("");
    $("#gradeOneErr").text("");
    $("#incrementTypeErr").text("");
    $("#gradePayErr").text("");
    $("#gradeNameErr").text("");
    $("#errorMsgForGradeAddList").text("");
    $("#pregsuccessBefore").text("");
}


