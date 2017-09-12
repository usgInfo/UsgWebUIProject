/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function createPreviousBudgetActualAmount() {


    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetMenuTabs()">Budget Master</a></label> >> <label>Actual  Budget for Previous Years</label>');

    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#dashboardBodyMainDiv").text("").append('<div id="previousBudgetAmountMainDiv"/>');

    $("#previousBudgetAmountMainDiv").text("").append("<div id='mainTabMenu' class='page-content' style='width:100%;' />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");
    //if (checkUserPrivelege(pvCreateBudgetType)) {

    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");

    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>Actual  Budget for Previous Years</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colPreviousBudgetAmountDetails'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#colPreviousBudgetAmountDetails").click(function () {
        $("#collapseOne2").toggle();
        if ($("#colPreviousBudgetAmountDetails span").hasClass("glyphicon-minus-sign")) {
            $("#collapseFin").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#collapseFin").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#collapseOne2").append("<div id='previousBudgetAmountpanelMainBody' class = 'panel-body' />");

    $("#previousBudgetAmountpanelMainBody").append("<div id='successMessageDiv' ></div>");
    $("#previousBudgetAmountpanelMainBody").append("<div id='FieldGroup' class='form-group'/>");

    getTwoColumnInRow("FieldGroup", "Row0", "Row0Col1", "Row0Col2");
    $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
    $("#Row0Col2").append(getLabel("Location", "required") + "" + getDropDown("location"));
    getLoggedInDDOInDropDown("ddo", "");
    getLoggedInLocationInDropDown("location", "");

    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));
    $("#Row1Col2").append(getLabel("Sector", "required") + "" + getDropDown("sector"));

    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel("Financial Year", "required") + "" + getDropDown("financialYear"));
    $("#Row2Col2").append(getLabel("Budget Head", "required") + "" + getDropDown("budgetHead"));

    getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel("Budget Type", "required") + "" + getDropDown("budgetType"));
    $("#Row3Col2").append(getLabel_InputWithSpan("Actual Budget Amount", "required", "actualBudgetAmount", "", "onkeypress='return numericVal(event)'  maxlength='15'"));
    $("#Row3Col2").append('<input type="hidden" id="idValue" >');


    $("#previousBudgetAmountpanelMainBody").append("<div id='previousBudgetAmountButtonRowDiv' class='row' />");

    $("#previousBudgetAmountButtonRowDiv").append("<div  class='col-xs-12' id='previousBudgetAmountButtonRowDivButtonRow'/><center><button type='button'  id='previousBudgetAmountButton' value='Save' class='btn btn-success bn'  onclick='validatePreviousBudgetActualAmount()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='createPreviousBudgetActualAmount()' class='btn btn-warning bn' id='previousBudgetAmountReset' name='reset' value='reset'>Reset</button></center></div>");

    fundTypeDDOHeadMapp();
    getSectorDDOHeadMapp();
    getAllActiveBudgetHead();
    getAllBudgetType();
    getPreviousYear();

    // }
    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

//   if (checkUserPrivelege(pvViewpreviousBudgetAmount)) {
    $("#tableHeader").append("<div id='previousBudgetAmountListPanel' class='panel panel-blue' />");
    $("#previousBudgetAmountListPanel").append("<div id='previousBudgetAmountListPanelHeading' class='panel-heading' />");
    $("#previousBudgetAmountListPanelHeading").append("<h4 id='previousBudgetAmountfirstHeader1' class='panel-title' />");
    $("#previousBudgetAmountfirstHeader1").append("<class='panel-title' class='panel_font' data-parent='#accordion2'><center>List of Actual  Budget for Previous Years</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colpreviousBudgetAmountList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#previousBudgetAmountListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colpreviousBudgetAmountList").click(function () {
        $("#collapseOne3").toggle();
        if ($("#colpreviousBudgetAmountList span").hasClass("glyphicon-minus-sign")) {
            $("#colpreviousBudgetAmountList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colpreviousBudgetAmountList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });

    $("#collapseOne3").append("<div id='previousBudgetAmountPanellistpanelMainBody' class = 'panel-body' />");
    $("#previousBudgetAmountPanellistpanelMainBody").append("<div id='previousBudgetAmountlistMessageDiv'></div>");
    $("#previousBudgetAmountPanellistpanelMainBody").append("<div id='previousBudgetAmountlistpanelRow'  />");
    $("#previousBudgetAmountlistpanelRow").append("<div id='previousBudgetAmountLeftstatuslistpanelRow' class='table-responsive' />");
    viewpreviousBudgetAmountList('previousBudgetAmountLeftstatuslistpanelRow');
    // }



}

function getPreviousYear() {
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear !== null || currentFinancialYear !== "" || currentFinancialYear !== undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var date = fromDate.split("/");
    var currentYear = date[2];
    var year = parseInt(currentYear) - 1;
    $("#financialYear").text("").append("<option value=''>----Select Financial Year----</option>");
    $("#financialYear").append("<option value='" + year + "'>" + year + "</option>");


}

function getAllPreviousYear() {

    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear !== null || currentFinancialYear !== "" || currentFinancialYear !== undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var date = fromDate.split("/");
    var currentYear = date[2];

    var yearsArr = [];

    $.get(server_base_url + "/budget/master/FinancialYear/View", {
    }).done(function (bdata) {
        $("#financialYear").text("").append("<option value=''>----Select Financial Year----</option>");
        if (bdata.length > 0) {
            for (var i = 0; i < bdata.length; i++) {
                if (parseInt(bdata[i].year) < parseInt(currentYear)) {
                    yearsArr.push(bdata[i].year);
                } else if (parseInt(bdata[i].year) == parseInt(currentYear) && yearsArr.length == 0) {
                    var year = parseInt(currentYear) - 1;
                    yearsArr.push(year);
                }
            }
            for (var i = 0; i < yearsArr.length; i++) {
                $("#financialYear").append("<option value='" + yearsArr[i] + "'>" + yearsArr[i] + "</option>");

            }
        }
    });

}

function getAllBudgetType() {

    var budgetType = ["Actual"];
    $("#budgetType").text("").append("<option value=''>----Select Budget Type----</option>");
    for (var i = 0; i < budgetType.length; i++) {
        $("#budgetType").append("<option value='" + budgetType[i] + "'>" + budgetType[i] + "</option>");
    }
}

function getAllActiveBudgetHead() {
    $.get(server_base_url + "hrms/common/BudgetHead/View", {
    }).done(function (bdata) {
        $("#budgetHead").text("").append("<option value=''>----Select Budget Head----</option>");
        if (bdata.length > 0)
            for (var i = 0; i < bdata.length; i++) {
                $("#budgetHead").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].budgetHead + "</option>");
            }
    });
}


function validatePreviousBudgetActualAmount() {
    var result = true;
    var buttonValue = $("#previousBudgetAmountButton").val();
    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var sector = $("#sector").val();
    var fundType = $("#fundType").val();
    var financialYear = $("#financialYear").val();
    var budgetHead = $("#budgetHead").val();
    var budgetType = $("#budgetType").val();
    var actualBudgetAmount = $("#actualBudgetAmount").val();


    if (ddo == "" || ddo == undefined || ddo == null || location == "" || location == undefined || location == null || sector == "" || sector == undefined || sector == null || fundType == "" || fundType == undefined || fundType == null || financialYear == "" || financialYear == undefined || financialYear == null
            || budgetHead == "" || budgetHead == undefined || budgetHead == null || budgetType == "" || budgetType == undefined || budgetType == null || actualBudgetAmount == "" || actualBudgetAmount == undefined || actualBudgetAmount == null) {
       
                    displayLargeErrorMessagesInCenterInRed("successMessageDiv", "Please fill all mandatory fields");

        result = false;
    }

    if (actualBudgetAmount != "") {
        if (!$("#actualBudgetAmount").val().match((numbervalidation()))) {
            $("#actualBudgetAmount").focus();
            displaySmallErrorMessages("actualBudgetAmountErr", "Only numbers are allowed");
            result = false;
        }

    }

    if (result != false) {
        if (buttonValue == "Save") {
            savePreviousBudgetActualAmount();
        } else {
            updatePreviousBudgetActualAmountData();
        }
    }

}

function savePreviousBudgetActualAmount() {

    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var sector = $("#sector").val();
    var fundType = $("#fundType").val();
    var financialYear = $("#financialYear").val();
    var budgetHead = $("#budgetHead").val();
    var budgetType = $("#budgetType").val();
    var actualBudgetAmount = $("#actualBudgetAmount").val();

    var json = {
        ddo: ddo,
        location: location,
        sector: sector,
        fundType: fundType,
        financialYear: financialYear,
        budgetHead: budgetHead,
        budgetType: budgetType,
        actualAmount: actualBudgetAmount
    };

    var preBudgetActualAmount = JSON.stringify(json);

    $.post(server_base_url + "/budget/BudgetMaster/PreviousBudgetAmountDetails/Save", {
        preBudgetActualAmount: preBudgetActualAmount,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        data = JSON.parse(data);
        if (data == fail) {
            displayErrorMessages("successMessageDiv", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displayErrorMessages("successMessageDiv", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("successMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("successMessageDiv", "No User available" + "");
        } else if (data === duplicate) {

            displayErrorMessages("successMessageDiv", existed + "");
            setTimeout(function () {
                createpreviousBudgetAmount();
            }, 4000);
        } else {
            displaySuccessMessages("successMessageDiv", successMessage, "");
            setTimeout(function () {
                createPreviousBudgetActualAmount();
            }, 4000);
        }

    });


}

function updatePreviousBudgetActualAmountData() {

    var id = $("#idValue").val();

    var ddo = $("#ddo").val();
    var location = $("#location").val();
    var sector = $("#sector").val();
    var fundType = $("#fundType").val();
    var financialYear = $("#financialYear").val();
    var budgetHead = $("#budgetHead").val();
    var budgetType = $("#budgetType").val();
    var actualBudgetAmount = $("#actualBudgetAmount").val();

    var json = {
        ddo: ddo,
        location: location,
        sector: sector,
        fundType: fundType,
        financialYear: financialYear,
        budgetHead: budgetHead,
        budgetType: budgetType,
        actualAmount: actualBudgetAmount
    };

    var preBudgetActualAmount = JSON.stringify(json);

    $.post(server_base_url + "/budget/BudgetMaster/PreviousBudgetAmountDetails/Update", {
        preBudgetActualAmount: preBudgetActualAmount,
        userId: getUserSessionElement("userId"),
        id: id
    }).done(function (data) {

        data = JSON.parse(data);
        if (data == fail) {
            displayErrorMessages("successMessageDiv", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displayErrorMessages("successMessageDiv", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("successMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displayErrorMessages("successMessageDiv", "No User available" + "");
        } else if (data === duplicate) {

            displayErrorMessages("successMessageDiv", existed + "");
            setTimeout(function () {
                createpreviousBudgetAmount();
            }, 4000);
        } else {
            displaySuccessMessages("successMessageDiv", successMessage, "");
            setTimeout(function () {
                createPreviousBudgetActualAmount();
            }, 4000);
        }

    });


}

function deletePreviousBudgetActualAmount(id) {
//if (checkUserPrivelege(pvDeletepreviousBudgetAmount)) {

    $.post(server_base_url + "/budget/budgetMaster/PreviousBudgetAmountDetails/Delete", {
        id: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayErrorMessages("previousBudgetAmountlistMessageDiv", emptyListMessage + "");
        } else if (data == unauthorized) {
            displayErrorMessages("previousBudgetAmountlistMessageDiv", unauthorizedMessage + "");
        } else if (data == statusException) {
            displayErrorMessages("previousBudgetAmountlistMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("previousBudgetAmountlistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                createPreviousBudgetActualAmount();
            }, 4000);
        }
    });
    // }
}

function updatepreviousBudgetAmount(obj) {

    obj = decodeURI(obj);
    obj = JSON.parse(obj);


    $("#idValue").val(obj.objId);

    getLoggedInDDOInDropDown("ddo", "");
    getLoggedInLocationInDropDown("location", "");


    $("#sector").val(obj.sector);
    $("#fundType").val(obj.fundType);
    $("#financialYear").val(obj.financialYear);
    $("#budgetHead option:contains(" + obj.budgetHead + ")").attr('selected', 'selected');

    $("#budgetType").val(obj.budgetType);
    $("#actualBudgetAmount").val(obj.actualAmount);

    $("#displaypreviousBudgetAmountTableBody tr").css("background-color", "white");
    $("#displaypreviousBudgetAmountTableBody tr" + "#" + obj.objId).css("background-color", "rgba(10, 129, 156, 0.3)");

    $("#previousBudgetAmountButtonRowDiv").text("").append("<div  class='col-xs-12' id='previousBudgetAmountButtonRowDivButtonRow'/><center><button type='button'  id='previousBudgetAmountButton' value='Update' class='btn btn-success bn'  onclick='validatePreviousBudgetActualAmount()'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='createPreviousBudgetActualAmount()' class='btn btn-warning bn' id='previousBudgetAmountReset' name='reset' value='reset'>Back</button></center></div>");



}

function viewpreviousBudgetAmountList(divId) {

    $("#" + divId).text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered' id='displaypreviousBudgetAmountTable' />");
    $("#displaypreviousBudgetAmountTable").append("<thead><tr id='previousBudgetAmountId'>"
            + "<th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>DDO</th>"
            + "<th class='table_col_width'><i class='fa'></i>Financial Year</th>"
            + "<th class='table_col_width'><i class='fa'></i>Budget Head</th>"
            + "<th class='table_col_width'><i class='fa'></i>Actual Budget Amount</th>");


    // if (checkUserPrivelege(pvUpdatepreviousBudgetAmount)) {
    $("#previousBudgetAmountId").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
    //  }
    //  if (checkUserPrivelege(pvDeletepreviousBudgetAmount)) {
    $("#previousBudgetAmountId").append("<th class='table_anchor_width'><i class='fa' ></i>Delete</th>");
//    }


    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear !== null || currentFinancialYear !== "" || currentFinancialYear !== undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var date = fromDate.split("/");
    var currentYear = date[2];
    var year = parseInt(currentYear) - 1;

    $.get(server_base_url + "/budget/BudgetMaster/PreviousBudgetAmountDetails/View", {
        ddo: getUserSessionElement(seDDOId),
        location: getUserSessionElement(seLocationId),
        year:year
    }).done(function (pdata) {

        pdata = JSON.parse(pdata);

        if (pdata == "") {
            displayLargeErrorMessagesInCenterInRed("previousBudgetAmountlistMessageDiv", noDataAvailable + "");
        } else if (pdata == fail) {
            displayErrorMessages("previousBudgetAmountlistMessageDiv", emptyListMessage + "");
        } else if (pdata == unauthorized) {
            displayErrorMessages("previousBudgetAmountlistMessageDiv", unauthorizedMessage + "");
        } else if (pdata == statusException) {
            displayErrorMessages("previousBudgetAmountlistMessageDiv", statusExceptionMessage + "");
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata != null) {
            if (pdata.length > 0) {
                var sno = 0;
                $("#displaypreviousBudgetAmountTable").append("<tbody id='displaypreviousBudgetAmountTableBody'/>");
                for (var i = pdata.length - 1; i >= 0; i--) {

                    sno++;
                    var objJson = {
                        objId: pdata[i]._id.$oid,
                        ddo: pdata[i].ddo,
                        location: pdata[i].location,
                        sector: pdata[i].sector,
                        fundType: pdata[i].fundType,
                        financialYear: pdata[i].financialYear,
                        budgetHead: pdata[i].budgetHead,
                        budgetType: pdata[i].budgetType,
                        actualAmount: pdata[i].actualAmount

                    };
                    objJson = JSON.stringify(objJson);

                    $("#displaypreviousBudgetAmountTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td >" + pdata[i].ddo + "</td>"
                            + "<td >" + pdata[i].financialYear + "</td>"
                            + "<td >" + pdata[i].budgetHead + "</td>"
                            + "<td >" + pdata[i].actualAmount + "</td>");

                    //  if (checkUserPrivelege(pvUpdatepreviousBudgetAmount)) {
                    $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updatepreviousBudgetAmount('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");
                    // }
                    // if (checkUserPrivelege(pvDeletepreviousBudgetAmount)) {
                    $("#" + pdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=deletePopUp('deletePreviousBudgetActualAmount','createpreviousBudgetAmount','" + pdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                    //  }


                }
                $("#displaypreviousBudgetAmountTable").dataTable();
            }
        }
    });
    //   }

}