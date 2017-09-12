/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayBudgetIncomeTransaction() {



    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetTransactionMenuTabs()">Budget Transaction</a></label> >> <label>Create Income Budget @ Department</label>');
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetTypeMainDiv"/>');
    $("#budgetTypeMainDiv").text("").append("<div id='mainTabMenu' class='page-content'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateIncomeBudget)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>Create Income Budget @ Department</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#collapseFin").click(function() {
            $("#collapseOne2").toggle();
            if ($("#collapseFin span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='budgetIncomepanelRow' class='row'  />");
        $("#budgetIncomepanelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#budgetIncomepanelRow").append("<div id='budgetIncomeFieldGroup'  />");

        getTwoColumnInRow("budgetIncomeFieldGroup", "Row1", "Row1Col1", "Row1Col2");
        // $("#Row1Col1").append(getLabel("From DDO", "required") + "" + getDropDownWithOnChange("ddo", "onChange='getLocationBasedonDDOIncome()'"));
        $("#Row1Col1").append(getLabel("From DDO", "required") + "" + getDropDownWithOnChange("ddo"));
        $("#Row1Col2").append(getLabel("From Location", "required") + "" + getDropDown("location"));

        //
        getTwoColumnInRow("budgetIncomeFieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));
        $("#Row3Col2").append(getLabel("Sector", "required") + "" + getDropDown("sector"));

        //
        getTwoColumnInRow("budgetIncomeFieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel("Financial Year", "required") + "" + getDropDown("financialYear"));
        $("#Row2Col2").append(getLabel("Budget Code", "") + "" + getInputwithErrSpan("budgetCode", "", "", ""));
        //
        getTwoColumnInRow("budgetIncomeFieldGroup", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col2").append(getLabel("Budget Type", "required") + "" + getDropDown("budgetType"));
        $("#Row4Col1").append(getLabel("Budget Heads", "") + "" + getDropDown("budgetHead"));

        $("#sector").attr("onchange", " getBudgetHeads('budgetHead')");
        $("#fundType").attr("onchange", "clearSector()");
        //
        getTwoColumnInRow("budgetIncomeFieldGroup", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col2").append(getLabel("Department", "required") + "" + getDropDown("department", "", "", ""));
        $("#Row5Col1").append(getLabel("Budget Date", "required") + "" + getInputwithErrSpan("budgetDate", "", "", "onkeypress='return false' "));

        var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
        if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
        {
            var finyearArray = currentFinancialYear.split("~");
        }
        if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
        {
            var fromFinacialYear = finyearArray[0];
            var toFinacialYear = finyearArray[1];
        }
        $('#budgetDate').datepicker({
            changeYear: true,
            changeMonth: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear
        });

        getTwoColumnInRow("budgetIncomeFieldGroup", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel("Previous Budget", "") + "" + getDropDown("previousBudget", "", "", ""));
        document.getElementById("previousBudget").disabled = true;
        $("#budgetType").attr("onchange", " getAllSrNos('previousBudget')");
        $("#panelMainBody").append("<div id='budgetIncomepanelRow5' class='row' />");
        $("#budgetIncomepanelRow5").append('<center><button type="button"  value="Save" class="btn btn-success mr5"  onclick="validateBudgetIncome()">View</button>&nbsp;&nbsp;&nbsp;<button name="reset" value="reset" type="button" class="btn btn-warning mr5" onclick="resetBudgetIncome()">Reset</button></center>');
        getLoggedInDDOLocationInDropDown("ddo", "location");
        fetchAllSectorValues("", "sector", "Sector");
        //  fetchAllDDOValues("", "ddo", "DDO");
        var finyear = getFincialYearForAllReports();
        getFinYear("financialYear", finyear);
        fetchAllfundTypeValues("", "fundType", "Fund Type");
        fetchAllbudgetTypeValues("", "budgetType", "Budget Type");
        fetchAllDeptCreteIncome("", "department", "Department");


    }
    $("#tableHeader").append("<div id='associationListPanel' class='panel panel-blue' />");
    if (checkUserPrivelege(pvCreateIncomeBudget)) {
        $("#associationListPanel").append("<div id='associationListPanelHeading' class='panel-heading' />");
        $("#associationListPanelHeading").append("<h4 id='associationfirstHeader1' class='panel-title' />");
        $("#associationfirstHeader1").append("<div class='panel-title'  style='font-weight:bold;font-size:15px;' class='panel_font' data-parent='#accordion21'><center>List of Ledger(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin1'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#collapseFin1").click(function() {
            $("#accordion21").toggle();
            if ($("#collapseFin1 span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin1").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin1").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
    }
    if (checkUserPrivelege(pvViewIncomeBudget)) {
        $("#associationListPanel").append("<div id='accordion21' class='panel-collapse collapse in' />");
        $("#accordion21").append("<div id='incomeBudgetSaveMessage' class ='panel-body' />");
        $("#accordion21").append("<div id='associationpanelMainBody2' class = 'panel-body' />");
        //  $("#associationpanelMainBody2").append("<center><span id='pregviewsuccessBeforeassociation'></span></center>");
        $("#associationpanelMainBody2").append("<div id='associationpanelRow4' class='row' />");
        $("#associationpanelRow4").append("<center><span id='pregsuccessBefore11'></span></center>");
        $("#tableHeader").append("<div id='budgetIncomeListPanel' class='panel panel-blue' />");
        $("#budgetIncomeListPanel").append("<div id='budgetIncomeListPanelHeading' class='panel-heading' />");
        $("#budgetIncomeListPanelHeading").append("<h4 id='budgetIncomefirstHeader1' class='panel-title' />");
        //$("#budgetIncomefirstHeader1").append("<a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#associationpanel' href='#collapseOneass2'><center>List of Budget Income Request(s)</center></a>");
        $("#budgetIncomefirstHeader1").append("<div class='panel-title'  style='font-weight:bold;font-size:15px;' class='panel_font' data-parent='#accordion22'><center>List of Income Budget @ Department(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin2'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#collapseFin2").click(function() {
            $("#accordion22").toggle();
            if ($("#collapseFin2 span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin2").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin2").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#budgetIncomeListPanel").append("<div id='accordion22' class='panel-collapse collapse in' />");
        $("#accordion22").append("<div id='incomeBudgetSubmitMessage' class ='panel-body' />");
        $("#accordion22").append("<div id='budgetIncomepanelMainBody2' class = 'panel-body' />");


    }
    viewAllIncomeBudget('budgetIncomepanelMainBody2');
}
function resetBudgetIncome() {
    $("#pregsuccessBefore").text("");
    $("#budgetCode").val("");
    $("#fundType").val("0");
    $("#sector").val("");
    $("#fundTypeErr").text("");
    $("#sectorErr").text("");
    $("#budgetType").val("");
    $("#budgetDate").val("");
    $("#budgetTypeErr").text("");
    $("#budgetDateErr").text("");
    $("#budgetHeadErr").text("");
    $("#previousBudget").val("0");
    $("#budgetHead").val("");
    $("#departmentErr").text("");
    $("#department").val("");
    document.getElementById("previousBudget").disabled = true;

}
function clearSector()
{
    $("#sector").val("");
    $("#budgetHead").val("0");

}
function getFinYear(id, fromYear1)
{
    $("#" + id).append("<option value='" + fromYear1 + "'  selected> " + fromYear1 + " </option>");
}
function getBudgetHeads(divid)
{
    $('#ddoErr').text("").val("");
    $("fundTypeErr").text("");
    var ddo = $("#ddo").val();
    var fundType = $("#fundType").val();
    var sector = $("#sector").val();
    if (ddo == "" || ddo == null)
    {
        $("#ddo").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("ddoErr", "Please Select DDO");
    } else if (fundType == "" || fundType == null)
    {
        $("#fundType").focus();
        addSomeClass("budgetIncomeFieldDiv4", "has-error");
        displaySmallErrorMessages("fundTypeErr", "Please Select Fund Type");
    } else
    {
        $.get(server_base_url + "/budget/transaction/IncomeBudget/Create", {
            ddo: ddo,
            sector: sector,
            fundType: fundType
        }).done(function(pdata)
        {
            if (pdata != null)
            {

                $("#" + divid).text("").append("<option value = '' selected>----Select Budget Head ----</option>");
                if (pdata == null || pdata == "" || pdata == 500)
                {
                    $("#" + divid).text("").append("<option >" + NoDataFound + "</option>");
                } else
                {
                    for (var i = 0; i < pdata.length; i++)
                    {
                        $("#" + divid).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].budgetHead + "</option>");

                    }
                }
            }
        });
    }
}
function getAllSrNos(id)
{
    var ddo = $("#ddo").val();
    var fundType = $("#fundType").val();
    var sector = $("#sector").val();
    var location = $("#location").val();
    var finYear = $("#financialYear").val();
    var budgetType = $("#budgetType").val();
    $("#" + id).val("");
    $("#previousBudget").val("");
    if (location == "" || location == null)
    {
        $("#location").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("locationErr", "Please Select location");
        $("#budgetType").val("");
    } else
    {
        var Json = {
            ddo: ddo,
            location: location,
            sector: sector,
            fundType: fundType,
            budgetType: budgetType,
            financialYear: finYear

        }
        var Json = JSON.stringify(Json);
        //alert(Json);
        $.get(server_base_url + "/budget/transaction/IncomeBudget/getAllserNos", {
            obj: Json

        }).done(function(pdata)
        {
            if (pdata != null)
            {
                $("#" + id).text("");
                //alert(pdata);
                if (pdata == null || pdata == "" || pdata == 500 || pdata == 501)
                {
                    document.getElementById(id).disabled = true;
                    // $("#"+ id).text("").append("<option >" + NoDataFound + "</option>");
                } else
                {
                    $("#" + id).text("");
                    $("#" + id).text("").append("<option >---------- Previous Budgets-------</option>");
                    for (var i = 0; i < pdata.length; i++)
                    {
                        document.getElementById(id).disabled = false;
                        $("#" + id).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].srNo + "</option>");

                    }
                }
            }
        });
    }
}
function getLocationBasedonDDOIncome(name) {

    var ddo = $("#ddo").val();
    $("#sector").val("0");
    $("#fundType").val("0");

    $.get(server_base_url + "hrms/employee/Employee/GetDropDownValues", {
        ddo: ddo,
        condition: getLocationBasedOnDdo
    }).done(function(pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            $("#location").text("").append("<option value = '' selected>---- Select Location ----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#location").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].locationName + "</option>");
            }
            if (name != null || name != undefined || name != "") {
                $("#location option:contains('" + name + "')").attr("selected", "selected");
            }
        } else
        {
            $("#location").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}



function viewAllIncomeBudget(divId) {
    if (checkUserPrivelege(pvViewIncomeBudget)) {
        var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
        var toFinacialYear = null;
        if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
        {
            var finyearArray = currentFinancialYear.split("~");
        }
        if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
        {
            var fromFinacialYear = finyearArray[0];
            var toFinacialYear = finyearArray[1];
        }
        var department = $("#department").val();
        if (department == null || department == "")
        {
            $.get(server_base_url + "/budget/GetDepartmentBasedOnEmployee", {
                empid: getUserSessionElement(seLoggedInEmployeeId),
                condition: "false"
            }).done(function(pdata) {
                pdata = JSON.parse(pdata);
                var data = pdata.FinalResult;
                var id = [];
                var idValue = [];
                $.each(data, function(index, value) {
                    id.push(index);
                    idValue.push(value);
                });
                department = id[0];
            });
        }
        setTimeout(function() {
            $("#" + divId).text("").append("<div id='ErrorDiv'/>");
            $("#" + divId).append("<div id='listpanelRow' class='row' />");
            $("#listpanelRow").text("").append("<div class='tab-pane' id='viewList'/>");
            $("#viewList").append("<div class='table-responsive' id='budgetIncomeSubDiv2' />");
            $("#budgetIncomeSubDiv2").append("<table class='table table-striped table-bordered' id='budgetIncomeTable' />");

            $("#budgetIncomeTable").append("<thead><tr id='budgetIncomeTableTrHead'>"
                    + "<th class='sno_width'><i class='fa'></i>Select</th>"
                    + "<th class='sno_width'> S.No</th>"
                    + "<th class='sno_width'> Budget Seq.No</th>"
                    //  + "<th class='table_col_width'><i class='fa'></i>BudgetHead</th>"
                    + "<th class='table_col_width'><i class='fa'></i>Budget Type</th>"
                    + "<th class='table_col_width'><i class='fa'></i>Financial Year</th>"
                    + "<th class='table_col_width'><i class='fa'></i>Budget Date</th>"
                    + "<th class='table_col_width'><i class='fa'></i>Sector</th>"
                    + "<th class='table_col_width'><i class='fa'></i>Amount(In Lac)</th>"
                    + "<th class='hidden'></th>"
                    + "<th class='table_col_width'><i class='fa'></i>Extra Provision Amount(In Lac)</th>"
                    + "</tr></thead>");
            if (checkUserPrivelege(pvUpdateIncomeBudget)) {
                $("#budgetIncomeTableTrHead").append("<th class='table_col_width'><i class='fa'></i>Edit</th>");
            }
            if (checkUserPrivelege(pvDeleteIncomeBudget)) {
                $("#budgetIncomeTableTrHead").append("<th class='table_col_width'><i class='fa'></i>Delete</th>");
            }
            $.get(server_base_url + "/budget/transaction/IncomeBudget/FetchAll", {
                scrId: "Income",
                ddo: getUserSessionElement(seDDOId),
                location: getUserSessionElement(seLocationId),
                financialYear: fromFinacialYear,
                department: department
            }).done(function(pdata) {
                if (pdata == fail) {
                    displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                    displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
                } else if (pdata == unauthorized || pdata.statuscode == unauthorized) {
                    displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                    displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
                } else if (pdata == invalidSession) {
                    callSessionTimeout();
                } else if (pdata == statusException) {
                    displayLargeSuccessMessages("pregviewsuccessBeforeassociation", "" + NoDataFound + "<br /><br />");
                    displayLargeSuccessMessages("pregviewsuccessBeforeassociation", "" + NoDataFound + "<br /><br />");
                } else {
                    if (pdata != null && pdata.length > 0) {
                        var sno = 0;
                        $("#budgetIncomeTable").append("<tbody id='budgetIncomeTableBody' />");
                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;
                            var sentStatus = pdata[i].sentStatus;
                            var financialYear = pdata[i].financialYear;
                            var extraProvision = pdata[i].extraProvisionAmount;
                            if (financialYear == undefined || financialYear == "undefined") {
                                financialYear = "";
                            }
                            var budgetType = pdata[i].budgetType;
                            if (budgetType == undefined || budgetType == "undefined") {
                                budgetType = "";
                            }
                            if (extraProvision == undefined || extraProvision == "undefined") {
                                extraProvision = "0";
                            }
                            var assjson = {
                                budgetHead: pdata[i].budgetHead,
                                fundType: pdata[i].fundType,
                                budgetType: pdata[i].budgetType,
                                location: pdata[i].location,
                                financialYear: pdata[i].financialYear,
                                sector: pdata[i].sector,
                                ddo: pdata[i].ddo,
                                budgetCode: pdata[i].budgetCode,
                                budgetDate: pdata[i].budgetDate,
                                department: pdata[i].department,
                                srNo: pdata[i].srNo
                            }
                            assjson = JSON.stringify(assjson);
                            if (sentStatus == 'true') {
                                $("#budgetIncomeTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;'>"
                                        + "<td><input type='checkbox' id='check1'  name='case3' disabled></td>"
                                        + "<td>" + sno + "</td>"
                                        + "<td>" + pdata[i].srNo + "</td>"
                                        //  + "<td style='cursor:pointer;'>" + pdata[i].budgetHeadName + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].budgetTypeName + "</td>"
                                        + "<td style='cursor:pointer;'>" + financialYear + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].budgetDate + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].sectorName + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].requestedAmount + "</td>"
                                        + "<td style='cursor:pointer;'class='hidden'>" + pdata[i].ledgerId + "</td>"
                                        + "<td style='cursor:pointer;'>" + extraProvision + "</td></tr>");
                                if (checkUserPrivelege(pvUpdateIncomeBudget)) {
                                    $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;'><i class='fa fa-edit'></i>&nbsp;&nbsp;<a  class='anchor_edit'>Edit</a></td>");
                                }
                                if (checkUserPrivelege(pvDeleteIncomeBudget)) {
                                    $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;'><i class='fa fa-trash'></i>&nbsp;&nbsp;<a  class='anchor_delete'>Delete</a></td>");
                                }
                            } else {
                                $("#budgetIncomeTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;'>"
                                        + "<td><input type='checkbox' id='check1'  name='case3'></td>"
                                        + "<td>" + sno + "</td>"
                                        + "<td>" + pdata[i].srNo + "</td>"
                                        //  + "<td style='cursor:pointer;'>" + pdata[i].budgetHeadName + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].budgetTypeName + "</td>"
                                        + "<td style='cursor:pointer;'>" + financialYear + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].budgetDate + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].sectorName + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].requestedAmount + "</td>"
                                        + "<td style='cursor:pointer;' class='hidden'>" + pdata[i].ledgerId + "</td>"
                                        + "<td style='cursor:pointer;'>" + extraProvision + "</td></tr>");
                                if (checkUserPrivelege(pvUpdateIncomeBudget)) {
                                    $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editIncome('" + encodeURI(assjson) + "','" + pdata[i]._id.$oid + "')>" + "<i class='fa fa-edit'></i>&nbsp;&nbsp;<a  class='anchor_edit'>Edit</a></td>");
                                }
                                if (checkUserPrivelege(pvDeleteIncomeBudget)) {
                                    $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteIncomeBudgetData','viewAllIncomeBudget','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash"></i>&nbsp;&nbsp;<a  class="anchor_delete">Delete</a></td>');
                                }
                            }
                        }
                        $("#budgetIncomeTable").DataTable({paging: true});

                        $("#viewList").append("<div id='budgetIncomeSubDiv3' class='row'>");
                        $("#budgetIncomeSubDiv3").append("<div  class='col-xs-3' /><div class='col-xs-2'></div>"
                                + "<div class='col-xs-2'><center><button type='button'  value='send' class='btn btn-success  mr5'  onclick=sendIncomeBudget()>Send</button><center</div>");
                    }
                }
            });
        }, 1000);
    }
}

function editIncome(json, id)
{
    if (json == null || json == " " || json == undefined) {
        return false;
    }

    var finyear = getFincialYearForAllReports();
    getFinYear("financialYear", finyear);
    $("#budgetIncomeTableBody tr").css("background-color", "white");
    $("#budgetIncomeTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    json = JSON.parse(decodeURI(json));
    $("#financialYear").val(json.financialYear);
    $("#budgetType").val(json.budgetType);
    $("#budgetDate").val(json.budgetDate);
    $("#budgetCode").val(json.budgetCode);
    $("#department").val(json.department);
    $("#ddo").val(json.ddo);
    getLocationBasedonDDOIncome();
    setTimeout(function() {
        $("#location").val(json.location);
    }, 200);
    $("#fundType").val(json.fundType);
    $("#sector").val(json.sector);
    // getBudgetHeads('budgetHead');
    $("#budgetHead").val(json.budgetHead);
    setTimeout(function() {
        searchLedgersForEdit(json.budgetHead, json.srNo);
    }, 400);
}
function searchLedgersForEdit(budget, sno)
{
    if (checkUserPrivelege(pvCreateIncomeBudget)) {
        var ddo = $("#ddo").val();
        var sector = $("#sector").val();
        var fundType = $("#fundType").val();
        var budgetType = $("#budgetType").val();
        var location = $("#location").val();
        var department = $("#department").val();
        $.get(server_base_url + "/budget/transaction/IncomeBudget/getLedgersForEditBasedOnHeads", {
            budgetHead: budget,
            fundType: fundType,
            budgetType: budgetType,
            location: location,
            finacialYear: $("#financialYear").val(),
            ddo: ddo,
            department: department,
            srNo: sno,
            scrId: "Income"
        }).done(function(pdata)
        {
            $("#associationSubDiv1").text("");
            if (pdata == fail)
            {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (pdata == unauthorized || pdata.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == NoDataFoundMessage) {
                displaySmallErrorMessagesInRed("pregsuccessBefore11", "" + NoDataFound + "<br /><br />");
            } else {
                if (pdata != null) {
                    $("#associationpanelRow4").text("").append("<div id='associationSubDiv1' class = 'panel panel-primary-head'></div>");
                    $("#associationSubDiv1").append("<table id='budgetUpdatesubTable' class='table table-striped table-bordered'></table>");
                    $("#budgetUpdatesubTable").append("<thead><tr>"
                            //     + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                            + " <th> S.No</th>"
                            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Ledger Name</th>"
                            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Budget Head</th>"
                            + "<th style='min-width:30%;width:auto;' class='hidden'><i class='fa'></i>Head Code</th>"
                            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Previous actual Amount(In Lac)</th>"
                            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Requested Amount(In Lac)<span class='require'>&nbsp;&nbsp*</span></th>"
                            + "</tr></thead>");
                    if (pdata.length > 0) {
                        var sno = 0;
                        $("#budgetUpdatesubTable").append("<tbody id='budgetUpdatesubTableBody' class='table-striped table-bordered' />");
                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;
                            var objJson = {
                                ledgerId: pdata[i]._id.$oid,
                                ledger: pdata[i].ledgerName,
                                fundType: pdata[i].FundType,
                                displayName: pdata[i].displayName,
                                budgetHeadCode: pdata[i].budgetHeadCode,
                                budgetHeadName: pdata[i].budgetHeadName,
                                underGroup: pdata[i].underGroup,
                                remarks: pdata[i].remarks,
                                status: pdata[i].status
                            }
                            objJson = JSON.stringify(objJson);
                            var prevReqAmount = pdata[i].prevReqAmount;
                            var budgetHeadName = pdata[i].budgetHeadName;
                            if (budgetHeadName == undefined || budgetHeadName == "undefined") {
                                budgetHeadName = "";
                            }
                            if (prevReqAmount == undefined || prevReqAmount == "undefined") {
                                prevReqAmount = "0";
                            }
                            $("#budgetUpdatesubTableBody").append("<tr  id='" + pdata[i]._id.$oid + "'style='cursor:pointer;' >"
                                    //   + "<td><input type='checkbox' value='" + sno + "' name='case'></td>"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].ledger + "</td>"
                                    + "<td style='cursor:pointer;'>" + budgetHeadName + "</td>"
                                    + "<td style='cursor:pointer;'class='hidden'>" + pdata[i]._id.$oid + "</td>"
                                    + "<td style='cursor:pointer;'>" + prevReqAmount + "<input type='hidden' id='rowId' value='" + sno + "'/></td>"
                                    + "<td style='cursor:pointer;'><input type='text' onkeypress='return numericVal(event)' id='requestedAmount' value='" + pdata[i].requestedAmount + "'/><span id='emountErr" + sno + "'></span></td></tr>");
                            $("#budgetUpdatesubTable thead tr th:first input:checkbox").change(function() {
                                $("#budgetUpdatesubTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                            });
                            $("#budgetUpdatesubTable tbody tr td:first-child input:checkbox").change(function() {
                                var tot = $(".case").length;
                                var tot_checked = $(".case:checked").length;
                                if (tot != tot_checked) {
                                    $("#selectall").prop('checked', false);
                                }
                            });
                        }
                        $("#associationSubDiv1").append("<center><button type='button'  value='Save' class='btn btn-success mr5' onclick='updateIncomeBudget()'>Update</button>&nbsp&nbsp&nbsp<button type='button'  value='Back' class='btn btn-warning bn mr5' onclick='BackIncomeBudget()'>Back</button></center>");

                        $("#budgetUpdatesubTable").DataTable({
                            paging: true
                        });
                    }
                }

            }
        });
    }
}
function BackIncomeBudget()
{
    $("#associationpanelRow4").text("");
}
function editIncomeBudget() {
    var rowid = [];
    var checkedrowList = [];
    $('#budgetIncomeTable tr input[type="checkbox"][name="case3"]:checked').each(function() {
        var row = $(this).closest('tr');
        rowid.push($(this).closest('tr').attr('id'));
        checkedrowList.push({
            ledger: row.find('td:eq(3)').text(),
            budgetType: row.find('td:eq(4)').text(),
            budetHead: row.find('td:eq(3)').text(),
            sector: row.find('td:eq(7)').text(),
            financialYear: row.find('td:eq(5)').text(),
            requestedAmount: row.find('td:eq(8)').text()
        });

    });
    var checkedrowListcopy = [];
    checkedrowListcopy = JSON.stringify(checkedrowList);
    checkedrowListcopy = JSON.parse(checkedrowListcopy);
    if (checkedrowListcopy.length > 0)
    {
        $("#tableHeader").append("<div id='budgetIncomeUpdate1' />");
        $("#budgetIncomeUpdate1").text("").append("<div id='budgetIncomeUpdate' class='panel panel-blue' />");
        $("#budgetIncomeUpdate").text("").append("<div id='budgetIncomeUpdatePanel' class='panel-heading' />");
        $("#budgetIncomeUpdatePanel").text("").append("<h4 id='associationfirstHeader1' class='panel-title' />");
        $("#budgetIncomeUpdatePanel").append("<a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#associationpanel' href='#collapseOneass2'><center>List of Budget Head(s)</center></a>");
        $("#budgetIncomeUpdate").append("<div id='collapseOneassociationthr121' class='panel-collapse collapse in' />");
        $("#collapseOneassociationthr121").append("<div id='budgetIncomepanelMainBodysub' class = 'panel-body' />");
        $("#budgetIncomepanelMainBodysub").append("<center><span id='pregviewsuccessBeforeassociation'></span></center>");
        $("#budgetIncomepanelMainBodysub").append("<div id='budgetIncomepanelMainBodysubdiv' class='row' />");
        $("#budgetIncomepanelMainBodysubdiv").append("<div class='tab-pane' id='viewList1'/>");
        $("#viewList1").text("").append("<div class='table-responsive' id='budgetIncomepanelMainBodysubdiv1' />");
        $("#budgetIncomepanelMainBodysubdiv1").append("<table class='table table-bordered table-striped table-warning mb30' id='budgetUpdatesubTable' />");
        $("#budgetUpdatesubTable").append("<thead><tr>"
                + " <th> S.No</th>"
                + "<th style='min-width:1%;width:auto;'><i class='fa'>Ledger</th>"
                + "<th style='min-width:1%;width:auto;'><i class='fa'>Financial Year</th>"
                + "<th style='min-width:1%;width:auto;'><i class='fa'>Budget Type</th>"
                + "<th style='min-width:1%;width:auto;'><i class='fa'>Sector</th>"
                + "<th style='min-width:1%;width:auto;'><i class='fa'>Requested Amount(In Lac)<span class='require'>&nbsp;&nbsp;*</span></th>"
                + "</tr></thead>");
        $("#budgetUpdatesubTable").append("<tbody id='budgetUpdatesubTableBody'></tbody>");
        var sno = 1;
        for (var i = 0; i < checkedrowListcopy.length; i++) {
            var financialYear = checkedrowListcopy[i].financialYear;
            if (financialYear == undefined || financialYear == "undefined") {
                financialYear = "";
            }
            $("#budgetUpdatesubTableBody").append("<tr style='cursor:pointer;' id='" + rowid[i] + "'>"
                    + "<td style='cursor:pointer;'>" + sno++ + "</td>"
                    + "<td style='cursor:pointer;'>" + checkedrowListcopy[i].budetHead + "</td>"
                    + "<td style='cursor:pointer;'>" + checkedrowListcopy[i].financialYear + "</td>"
                    + "<td style='cursor:pointer;'>" + checkedrowListcopy[i].budgetType + "</td>"
                    + "<td style='cursor:pointer;'>" + checkedrowListcopy[i].sector + "<input type='hidden' id='rowId' value='" + sno + "'/></td>"
                    + "<td style='cursor:pointer;'><input type='text' onkeypress='return numericVal(event)' id='requestedAmount' value='" + checkedrowListcopy[i].requestedAmount + "'><div id='amountErr" + sno + "'></div></td></tr>");


            $("#budgetUpdatesubTable thead tr th:first input:checkbox").change(function() {
                $("#budgetUpdatesubTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
            $("#budgetUpdatesubTable tbody tr td:first-child input:checkbox").change(function() {
                var tot = $(".case").length;
                var tot_checked = $(".case:checked").length;
                if (tot != tot_checked) {
                    $("#selectall").prop('checked', false);
                }
            });
        }

        $("#budgetIncomepanelMainBodysub").append("<div id='budgetIncomeButtonDiv' class='row'>");
        $("#budgetIncomeButtonDiv").append("<div  class='col-xs-3' />\n\
<div class='col-xs-2'><div  class='col-xs-3' /><button type='button'  value='Save' class='btn btn-success pull-right mr5'  onclick=updateIncomeBudget()>Update</button></div>");
    }
}

function updateIncomeBudget() {
    if (checkUserPrivelege(pvUpdateIncomeBudget)) {
        var Json = [];
        var status = "false";
        $('#budgetUpdatesubTable tbody tr').each(function(i)
        {
            var status = "false";
            i++;
            $("#amountErr" + i).text("").val("");
        });
        $('#budgetUpdatesubTable tbody tr').each(function(i) {
            i++;
            var row = $(this).closest('tr');
            var reqAmount = row.find('td:eq(5)').find('input').val();
            var rowId = row.find('td:eq(4) input').val();
            if (reqAmount == "")
            {
                displaySmallErrorMessages("amountErr" + rowId, "Please enter Amount");
                status = "true";
            }
        });

        if (status == "false")
        {
            var result = 1;
            //  $('#budgetUpdatesubTable tbody tr').each(function() {
            var rows = $("#budgetUpdatesubTable").dataTable().fnGetNodes();
            for (var i = 0; i < rows.length; i++)
            {
                var row = $(rows[i]);
                Json.push({
                    id: row.attr('id'),
                    requestedAmount: row.find('td:eq(5)').find('input').val()
                });
            }
            if (Json == null || Json == "") {
                result = 0;
            }
            if (result != 0)
            {
                Json = JSON.stringify(Json);
                $.post(server_base_url + "/budget/transaction/BudgetIncome/Update", {
                    obj: Json
                }).done(function(data) {

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
                        displaySuccessMessages("incomeBudgetSaveMessage", updateMessage, "");
                        setTimeout(function() {
                            $("#incomeBudgetSaveMessage").text("").val();
                            $("#associationpanelRow4").text("");
                            // displayBudgetIncomeTransaction();
                            viewAllIncomeBudget('budgetIncomepanelMainBody2');
                        }, 3000);

                    }
                });
            }
            else
            {
                displayErrorMessages("incomeBudgetSaveMessage", selectAtleastoneRecord, "");
                setTimeout(function() {
                    $("#incomeBudgetSaveMessage").text("");
                }, 3000);
            }
        }
    }
}

function sendIncomeBudget() {
    if (checkUserPrivelege(pvCreateIncomeBudget)) {
        var result = 1;
        var rowid = [];
        $('#budgetIncomeTable tr input[type="checkbox"][name="case3"]:checked').each(function() {
            var row = $(this).closest('tr');
            rowid.push($(this).closest('tr').attr('id'));
        });

        if (rowid == null || rowid == "") {
            result = 0;
        }
        if (result != 0) {
            var Json = {};
            Json["id"] = rowid;

            Json = JSON.stringify(Json);
            $.post(server_base_url + "/budget/transaction/BudgetIncome/Send", {
                id: Json
            }).done(function(data) {

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

                    displaySuccessMessages("incomeBudgetSubmitMessage", sendMessage, "");
                    setTimeout(function() {
                        displayBudgetIncomeTransaction();
                    }, 3000);
                }
            });
        } else
        {
            displayErrorMessages("incomeBudgetSubmitMessage", selectAtleastoneRecord, "");
            setTimeout(function() {
                $("#incomeBudgetSubmitMessage").text("");
            }, 3000);
        }
    }
}

function deleteIncomeBudgetData(id) {
    if (checkUserPrivelege(pvDeleteIncomeBudget)) {
        var rowid = [];
//    $('#budgetIncomeTable tr input[type="checkbox"][name="case3"]:checked').each(function() {
//        var row = $(this).closest('tr');
//        rowid.push($(this).closest('tr').attr('id'));
//    });
//    var Json = {};
//    Json["id"] = id;
        //var id = JSON.stringify(id);
        $.post(server_base_url + "/budget/transaction/BudgetIncome/Delete", {
            id: id
        }).done(function(data) {

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
                setTimeout(function() {
                    viewAllIncomeBudget('budgetIncomepanelMainBody2');
                }, 3000);

            }
        });
    }
}

function validateBudgetIncome() {
    var result = 1;
    $('#ddoErr').text("").val("");
    $("#financialYearErr").text("").val("");
    $("#fundTypeErr").text("").val("");
    $("#sectorErr").text("").val("");
    $("#budgetHeadErr").text("").val("");
    $("#budgetTypeErr").text("").val("");
    $("#budgetDateErr").text("").val("");
    $("#departmentErr").text("").val("");
    var ddo = $("#ddo").val();
    var finacialYear = $("#financialYear").val();
    var fundType = $("#fundType").val();
    var sector = $("#sector").val();
    var budgetType = $("#budgetType").val();
    //  var budgetHead = $("#budgetHead").val();
    var location = $("#location").val();
    var budgetDate = $("#budgetDate").val();
    var department = $("#department").val();
    if (ddo == "" || ddo == null) {
        $("#ddo").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("ddoErr", "Please Select DDO");
        result = 0;
    }
    if (location == "" || location == "0") {
        $("#location").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("locationErr", "Please Select location");
        result = 0;
    }
    if (finacialYear == "" || finacialYear == "0") {
        $("#finacialYear").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("financialYearErr", "Please Select Financial Year");
        result = 0;
    }
    if (fundType == "" || fundType == null) {
        $("#fundType").focus();
        //alert("---");
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("fundTypeErr", "Please Select Fund Type");
        result = 0;
    }
    if (sector == "" || sector == null) {
        $("#sector").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("sectorErr", "Please Select Sector");
        result = 0;
    }
    if (budgetType == "" || budgetType == null) {
        $("#budgetType").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("budgetTypeErr", "Please Select Budget Type");
        result = 0;
    }
//    if (budgetHead == "" || budgetHead == null) {
//        $("#budgetHead").focus();
//        addSomeClass("budgetIncomeFieldDiv", "has-error");
//        displaySmallErrorMessages("budgetHeadErr", "Please Select Budget Head");
//        result = 0;
//    }
    if (budgetDate == "" || budgetDate == null) {
        $("#budgetDate").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("budgetDateErr", "Please Select Budget Date");
        result = 0;
    }
    if (department == "" || department == null) {
        $("#department").focus();
        addSomeClass("budgetIncomeFieldDiv", "has-error");
        displaySmallErrorMessages("departmentErr", "Please Select Department");
        result = 0;
    }
    if (result != 0) {
        searchBudgetIncome();
        viewAllIncomeBudget('budgetIncomepanelMainBody2');
    }
}

function fetchAllSectorValues(name, DivId, message) {
    $.get(server_base_url + "/budget/master/BudgetSector/View", {
    }).done(function(pdata) {

        $("#" + DivId).append("<option value ='' selected disabled>---- Select " + message + " ----</option>");
        var sno = 0;
        var mainData = pdata.result;

        for (var i = 0; i < mainData.length; i++) {
            var subData = mainData[i];
            if (name == subData.description) {
                $("#" + DivId).append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
            } else {
                $("#" + DivId).append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
            }
        }


    });

}
function fetchAllDDOValues(name, DivId, message) {

    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function(pdata) {
        if (pdata.length > 0) {
            $("#" + DivId).append("<option value ='0' selected disabled>---- Select " + message + " ----</option>");
            for (var i = 0; i < pdata.length; i++) {
                if (name == pdata[i].ddoName) {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
                } else {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
                }
            }
        }

    });
}

function fetchAllfundTypeValues(name, DivId, message) {

    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function(pdata) {
        if (pdata.length > 0) {
            $("#" + DivId).append("<option value ='0' selected disabled>---- Select " + message + " ----</option>");
            for (var i = 0; i < pdata.length; i++) {
                if (name == pdata[i].description) {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                } else {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                }
            }
        }

    });
}
function fetchAllDeptCreteIncome(name, DivId, message) {
    if (checkUserRole(rlBudgetUser) && !checkUserRole(rlBudgetAdmin) && !checkUserRole(rlSuperAdmin))
    {
        $.get(server_base_url + "/budget/GetDepartmentBasedOnEmployee", {
            empid: getUserSessionElement(seLoggedInEmployeeId),
            condition: "true"
        }).done(function(pdata) {
            pdata = JSON.parse(pdata);
            if (pdata == "500" || pdata == "501")
            {
                $.get(server_base_url + "/budget/GetDepartmentBasedOnEmployee", {
                    empid: getUserSessionElement(seLoggedInEmployeeId),
                    condition: "false"
                }).done(function(pdata) {
                    $("#" + DivId).append("<option value ='' selected>---- Select " + message + " ----</option>");
                    pdata = JSON.parse(pdata);
                    var data = pdata.FinalResult;
                    var id = [];
                    var idValue = [];
                    $.each(data, function(index, value) {
                        id.push(index);
                        idValue.push(value);
                    });

                    for (var i = id.length - 1; i >= 0; i--) {
                        $("#" + DivId).append("<option value='" + id[i] + "'>" + idValue[i] + "</option>");
                    }
                });
            } else
            {
                $("#" + DivId).append("<option value ='' selected>---- Select " + message + " ----</option>");
                var data = pdata.FinalResult;
                var id = [];
                var idValue = [];
                $.each(data, function(index, value) {
                    id.push(index);
                    idValue.push(value);
                });

                for (var i = id.length - 1; i >= 0; i--) {
                    $("#" + DivId).append("<option value='" + id[i] + "'>" + idValue[i] + "</option>");
                }
            }
        });
    }

    else
    {
        if (getUserSessionElement(seLoggedInEmployeeId) == "undefined" || getUserSessionElement(seLoggedInEmployeeId) == undefined)
        {
            $.get(server_base_url + "hrms/salary/Department/ViewList", {
            }).done(function(pdata) {
                if (pdata.length > 0) {
                    $("#" + DivId).append("<option value ='' selected>---- Select " + message + " ----</option>");
                    for (var i = 0; i < pdata.length; i++) {
                        if (name == pdata[i].department) {
                            $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].department + "</option>");
                        } else {
                            $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].department + "</option>");
                        }
                    }
                }

            });
        } else
        {

            $.get(server_base_url + "/budget/GetDepartmentBasedOnEmployee", {
                empid: getUserSessionElement(seLoggedInEmployeeId),
                condition: "true"
            }).done(function(pdata) {
                $("#" + DivId).append("<option value ='' selected>---- Select " + message + " ----</option>");
                pdata = JSON.parse(pdata);
                var data = pdata.FinalResult;
                var id = [];
                var idValue = [];
                $.each(data, function(index, value) {
                    id.push(index);
                    idValue.push(value);
                });

                for (var i = id.length - 1; i >= 0; i--) {
                    $("#" + DivId).append("<option value='" + id[i] + "'>" + idValue[i] + "</option>");
                }
            });
        }
    }
}
function fetchAllbudgetTypeValues(name, DivId, message) {

    $.get(server_base_url + "/budget/master/BudgetType/View", {
    }).done(function(pdata) {
        if (pdata.length > 0) {
            $("#" + DivId).append("<option value ='' selected disabled>---- Select " + message + " ----</option>");
            for (var i = 0; i < pdata.length; i++) {
                if (name == pdata[i].description) {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                } else {
                    $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                }
            }
        }

    });
}


function searchBudgetIncome() {
    if (checkUserPrivelege(pvCreateIncomeBudget) || checkUserPrivelege(pvViewIncomeBudget)) {
        var ddo = $("#ddo").val();
        var sector = $("#sector").val();
        var fundType = $("#fundType").val();
        var budgetHead = $("#budgetHead").val();
        var budgetType = $("#budgetType").val();
        var location = $("#location").val();
        var department = $("#department").val();

        // var religion = $("#religionName").val();
        $.get(server_base_url + "/budget/transaction/IncomeBudget/getLedgersBasedOnHeads", {
            budgetHead: budgetHead,
            fundType: fundType,
            budgetType: budgetType,
            location: location,
            finacialYear: $("#financialYear").val(),
            ddo: ddo,
            department: department
        }).done(function(pdata)
        {
            $("#associationSubDiv1").text("");
            if (pdata == fail)
            {
                displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (pdata == unauthorized || pdata.statuscode == unauthorized) {
                displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == NoDataFoundMessage) {
                displaySmallErrorMessagesInRed("pregsuccessBefore11", "" + NoDataFound + "<br /><br />");
            } else {
                if (pdata != null) {

                    if (pdata.length > 0) {
                        $("#associationpanelRow4").text("").append("<div id='associationSubDiv1' class = 'panel panel-primary-head'></div>");
                        $("#associationSubDiv1").append("<table id='associationTable1' class='table table-striped table-bordered'></table>");
                        $("#associationTable1").append("<thead><tr>"
                                //   + " <th>" + '<input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/>All' + "</th>"
                                + " <th> S.No</th>"
                                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Ledger Name</th>"
                                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Budget Head</th>"
                                + "<th style='min-width:30%;width:auto;' class='hidden'><i class='fa'></i>Head Code</th>"
                                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Previous actual Amount(In Lac)</th>"
                                + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Requested Amount(In Lac)<span class='require'>&nbsp;&nbsp*</span></th>"
                                + "</tr></thead>");
                        var sno = 0;
                        $("#associationTable1").append("<tbody id='associationTableBody' class='table-striped table-bordered' />");
                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;
                            var amount = 0;
                            var objJson = {
                                ledgerId: pdata[i]._id.$oid,
                                ledger: pdata[i].ledgerName,
                                fundType: pdata[i].FundType,
                                displayName: pdata[i].displayName,
                                budgetHeadCode: pdata[i].budgetHeadCode,
                                budgetHeadName: pdata[i].budgetHeadName,
                                underGroup: pdata[i].underGroup,
                                remarks: pdata[i].remarks,
                                status: pdata[i].status
                            }
                            objJson = JSON.stringify(objJson);
                            var prevReqAmount = pdata[i].prevReqAmount;
                            var budgetHeadName = pdata[i].budgetHeadName;
                            if (budgetHeadName == undefined || budgetHeadName == "undefined") {
                                budgetHeadName = "";
                            }
                            if (prevReqAmount == undefined || prevReqAmount == "undefined") {
                                prevReqAmount = "0";
                            }
                            $("#associationTableBody").append("<tr  style='cursor:pointer;' >"
                                    //   + "<td><input type='checkbox' value='" + sno + "' name='case'></td>"
                                    + "<td>" + sno + "<input type='hidden' value='" + pdata[i].budgetHeadCode + "'></td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].ledgerName + "</td>"
                                    + "<td style='cursor:pointer;'>" + budgetHeadName + "</td>"
                                    + "<td style='cursor:pointer;'class='hidden'>" + pdata[i]._id.$oid + "</td>"
                                    + "<td style='cursor:pointer;'>" + prevReqAmount + "<input type='hidden' id='rowId' value='" + sno + "'/></td>"
                                    + "<td style='cursor:pointer;'><input type='text' onkeypress='return numericVal(event)' id='requestedAmount' value='" + amount + "'/><span id='emountErr" + sno + "'></span></td></tr>");

                            $("#associationTable1 thead tr th:first input:checkbox").change(function() {
                                $("#associationTable1 tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                            });
                            $("#associationTable1 tbody tr td:first-child input:checkbox").change(function() {
                                var tot = $(".case").length;
                                var tot_checked = $(".case:checked").length;
                                if (tot != tot_checked) {
                                    $("#selectall").prop('checked', false);
                                }
                            });




                        }
                        $("#associationSubDiv1").append("<center><button type='button'  value='Save' class='btn btn-success mr5' onclick='saveBudgetIncome()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button'  value='Save' class='btn btn-warning mr5 ' onclick='reset1BudgetIncome()'>Reset</button></center>");

                        $("#associationTable1").DataTable({
                            paging: true

                        });
                    }
                }

            }
        });
    }
}
function reset1BudgetIncome() {
    $("#requestedAmount").val("");
}
function saveBudgetIncome() {
    if (checkUserPrivelege(pvCreateIncomeBudget)) {
        var financialYear = $("#financialYear").val();
        var budgetHead = $("#budgetHead").val();
        var budgetType = $("#budgetType").val();
        var department = $("#department").val();
        var budgetDate = $("#budgetDate").val();
        var ddo = $("#ddo").val();
        var location = $("#location").val();
        var budgetCode = $("#budgetCode").val();
        var fundType = $("#fundType").val();
        var sector = $("#sector").val();
        var previousBudget = $("#previousBudget").val();
        var requestedAmount = $("#requestedAmount").val();
        var headCode = $("#headCode").val();
        $("#emountErr").text("").val("");
        var rowid = [];
        var checkedrowList = []
        var status = "false";
        $('#associationTable1 tbody  tr').each(function(i) {
            i++;

            $("#emountErr" + i).text("").val("");
        });
        $('#associationTable1 tbody  tr ').each(function(i) {
            var row = $(this).closest('tr');
            var requestedAmount = row.find('td:eq(5) input').val();
            var rowId = row.find('td:eq(4) input').val();
            if (requestedAmount == "")
            {

                displaySmallErrorMessages("emountErr" + rowId, "Please enter Amount");
                //alert("Please entere mountErr"+rowId);
                status = "true";
            }
        });
        if (status == "false")
        {
            var result = 1;
            var rows = $("#associationTable1").dataTable().fnGetNodes();
            for (var i = 0; i < rows.length; i++)
            {
                var row = $(rows[i]);
                checkedrowList.push({
                    budgetHead: row.find("td:eq(0) input").val(),
                    ledger: row.find("td:eq(1)").text(),
                    budgetHeadName: row.find('td:eq(2)').text(),
                    ledgerId: row.find('td:eq(3)').text(),
                    requestedAmount: row.find('td:eq(5) input').val(),
                    prevReqAmount: row.find('td:eq(4)').text(),
                    financialYear: financialYear,
                    budgetType: budgetType,
                    budgetDate: budgetDate,
                    ddo: ddo,
                    location: location,
                    budgetCode: budgetCode,
                    fundType: fundType,
                    previousBudget: previousBudget,
                    sector: sector,
                    department: department
                });
                $(this).closest('tr').remove();

            }
            if (checkedrowList == null || checkedrowList == "") {
                result = 0;
            }
            if (result != 0)
            {
                $.get(server_base_url + "/budget/transaction/CreateIncomeBudget/Save", {
                    objJson: JSON.stringify(checkedrowList),
                    ddo: ddo,
                    location: location,
                    year: financialYear
                }).done(function(data) {
                    //alert(data);
                    if (data == fail) {
                        displayLargeErrorMessages("incomeBudgetSaveMessage", "" + failMessage + "<br /><br />");
                        displayLargeErrorMessages("incomeBudgetSaveMessage", "" + failMessage + "<br /><br />");
                    } else if (data == unauthorized || data.statuscode == unauthorized) {
                        displayLargeErrorMessages("incomeBudgetSaveMessage", "" + unauthorizedMessage + "<br /><br />");
                        displayLargeErrorMessages("incomeBudgetSaveMessage", "" + unauthorizedMessage + "<br /><br />");
                    } else if (data == invalidSession) {
                        callSessionTimeout();
                    } else if (data == statusException) {
                        displayLargeErrorMessages("incomeBudgetSaveMessage", "" + statusExceptionMessage + "<br /><br />");
                        displayLargeErrorMessages("incomeBudgetSaveMessage", "" + statusExceptionMessage + "<br /><br />");
                    } else {
                        displaySuccessMessages("incomeBudgetSaveMessage", successMessage, "");
                        setTimeout(function() {
                            $("#incomeBudgetSaveMessage").text("").val();
                            $("#associationpanelRow4").text("");
                            // displayBudgetIncomeTransaction();
                            viewAllIncomeBudget('budgetIncomepanelMainBody2');
                        }, 3000);
                    }
                });
            }
            else
            {
                displayErrorMessages("incomeBudgetSaveMessage", selectAtleastoneRecord, "");
                setTimeout(function() {
                    $("#incomeBudgetSaveMessage").text("");
                }, 3000);
            }
        }
    }
}

