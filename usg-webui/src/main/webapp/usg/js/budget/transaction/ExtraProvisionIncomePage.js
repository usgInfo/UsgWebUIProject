/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function extraProvisionIncomeBudget() {
    scrolupfunction();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetTransactionMenuTabs()">Budget Transaction</a></label> >> <label>Extra Provision Income</label>');
    $("#dashboardBodyMainDiv").removeAttr("class", "page-content");
    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu' class='page-content'     />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#mainTabMenu").append("<div id='tableHeaderTable' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Extra Provision Income</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
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
    $("#panelMainBody").append("<div id='panelRow' class='row' />");

    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    //FinancialIncomeUniversitysBudgetCode Table

    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel("Financial Year", "required") + "" + getDropDown("financialYear"));
    $("#Row1Col2").append(getLabel("Budget Code", "") + "" + getInputwithErrSpan("budgetCode", "", "", ""));
    $("#FieldDiv").append("<span id='financialYearErr'></span>");
    $("#FieldDiv1").append("<span id='budgetCodeErr'></span>");
    //
    $("#panelMainBody").append("<div id='panelRow1' class='row' />");
    $("#panelRow1").append("<div id='FieldGroup1' class='form-group' />");
    getTwoColumnInRow("FieldGroup1", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundType"));
    $("#Row2Col2").append(getLabel("Sector", "required") + "" + getDropDown("sector"));

    $("#panelMainBody").append("<div id='panelRow2' class='row' />");
    $("#panelRow2").append("<div id='FieldGroup2' class='form-group' />");
    getTwoColumnInRow("FieldGroup2", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel("Budget Type", "required") + "" + getDropDown("budgetType"));
    $("#Row3Col2").append(getLabel("Budget Date", "required") + "" + '<div class="" /><input class="form-control" type="text" id="universityBudgetDate" onkeydown="return false;"><span id="universityBudgetDateErr"></span></input>');
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
    $('#universityBudgetDate').datepicker({
        changeYear: true,
        changeMonth: true,
        startDate: fromFinacialYear,
        endDate: toFinacialYear
    });
    $("#panelMainBody").append("<div id='panelRow3' class='row' />");
    $("#panelRow3").append("<div id='FieldGroup3' class='form-group' />");
    getTwoColumnInRow("FieldGroup3", "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col2").append(getLabel("Department", "required") + "" + getDropDown("department", "", "", ""));
    $("#Row4Col1").append(getLabel("BudgetHead", "") + "" + getDropDown("budgethead"));
    $("#panelMainBody").append("<div id='panelRow4' class='row' />");
    $("#panelRow4").append("<div  class='col-xs-12' /><center><button type='button'  value='Save' class='btn btn-success mr5'  onclick='extraProvisionIncomeValidation()'>Create</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllIncomeUniversitysBudgetCodeData()' class='btn btn-warning mr5 ' name='reset' value='reset'>Reset</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='searchPanelExtraProvisionIncome()' class='btn btn-warning mr5' name='reset' value='reset'>Search</button></div>");
    getBudgetfinancialyearForIncomeUniversity("financialYear");
    $("#budgetType").attr("onchange", " fetchDepartInExtraProvision('Department','department')");
    fetchAlSectors("", "sector", "Sector");
    viewOption("budget/master/FundType/View", "", "description", "fundType", "Fund Type");
    getBudgetTypeExtraProvision('budgetType');
    $("#budgethead").attr("onchange", " fetchDepartInExtraProvisionwithBudethead('Department','department')");
}
function getBudgetTypeExtraProvision(DivId) {
    $("#" + DivId).text("").append("<option value ='' selected>---- Select Budget Type----</option>");
    $.get(server_base_url + "/budget/master/BudgetType/View", {
    }).done(function(pdata) {
        if (pdata != null) {
            if (pdata.length > 0) {
                for (var i = pdata.length - 1; i >= 0; i--) {
                    if (pdata[i].description == "Estimated")
                    {
                        $("#" + DivId).append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].description + "</option>");
                    }
                }
            }
        }
    });
}
function fetchDepartInExtraProvision(message, DivId) {
    var result = 1;
    if ($('#financialYear').val() == null || $('#financialYear').val() == "") {
        $("#financialYear").focus();
        displaySmallErrorMessages("financialYearErr", "Please Select Financial Year.");
        result = 0;
    }
    if ($('#budgetType').val() == null || $('#budgetType').val() == "") {
        $("#budgetType").focus();
        displaySmallErrorMessages("budgetTypeErr", "Please Select Budget Type.");
        result = 0;
    }
    var budgetHead = $('#budgethead').val();
    if (budgetHead == null && budgetHead == "") {
        budgetHead = "";
    }
    if (result != 0) {
        $.get(server_base_url + "/Budget/BudgetTransaction/GetDepartmentExtraProvision", {
            budgetType: $('#budgetType').val(),
            finYear: $('#financialYear').val(),
            budgetHead: "",
            type: "Income"
        }).done(function(pdata) {
            $("#" + DivId).text("").append("<option value ='' selected>---- Select " + message + " ----</option>");
            $("#budgethead").text("").append("<option value ='' selected>---- Select BudgetHead ----</option>");
            pdata = JSON.parse(pdata);
            var data = pdata.FinalResult;
            var budgetdata = pdata.BudgetResult;
            var id = [];
            var idValue = [];
            var budgetid = [];
            var budgetValue = [];
            $.each(data, function(index, value) {
                id.push(index);
                idValue.push(value);
            });
            $.each(budgetdata, function(index, value) {
                budgetid.push(index);
                budgetValue.push(value);
            });
            for (var j = budgetid.length - 1; j >= 0; j--) {
                $("#budgethead").append("<option value='" + budgetid[j] + "'>" + budgetValue[j] + "</option>");
            }
            for (var i = id.length - 1; i >= 0; i--) {
                $("#" + DivId).append("<option value='" + id[i] + "'>" + idValue[i] + "</option>");
            }
        });
    }

}
function fetchDepartInExtraProvisionwithBudethead(message, DivId) {
    var result = 1;
    if ($('#financialYear').val() == null || $('#financialYear').val() == "") {
        $("#financialYear").focus();
        displaySmallErrorMessages("financialYearErr", "Please Select Financial Year.");
        result = 0;
    }
    if ($('#budgetType').val() == null || $('#budgetType').val() == "") {
        $("#budgetType").focus();
        displaySmallErrorMessages("budgetTypeErr", "Please Select Budget Type.");
        result = 0;
    }
    var budgetHead = $('#budgethead').val();

    if (result != 0) {
        $.get(server_base_url + "/Budget/BudgetTransaction/GetDepartmentExtraProvision", {
            budgetType: $('#budgetType').val(),
            finYear: $('#financialYear').val(),
            budgetHead: budgetHead,
            type: "Income"
        }).done(function(pdata) {
            $("#" + DivId).text("").append("<option value ='' selected>---- Select " + message + " ----</option>");
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
function fetchDepartInExtraProvisionSearch(message, DivId) {
    var result = 1;
    if ($('#financailYearSearch').val() == null || $('#financailYearSearch').val() == "") {
        $("#financailYearSearch").focus();
        displaySmallErrorMessages("financailYearSearchErr", "Please Select Financial Year.");
        result = 0;
    }
    if ($('#budgetTypeSearch').val() == null || $('#budgetTypeSearch').val() == "") {
        $("#budgetTypeSearch").focus();
        displaySmallErrorMessages("budgetTypeSearchErr", "Please Select Budget Type.");
        result = 0;
    }
    if (result != 0) {
        $.get(server_base_url + "/Budget/BudgetTransaction/GetDepartmentExtraProvision", {
            budgetType: $('#budgetTypeSearch').val(),
            finYear: $('#financailYearSearch').val(),
            budgetHead: "",
            type: "Income"
        }).done(function(pdata) {
            $("#" + DivId).text("").append("<option value ='' selected>---- Select " + message + " ----</option>");
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
function searchPanelExtraProvisionIncome() {
    $("#searchPanel").remove("");
    $("#tableHeader").append("<div id='searchPanel' class='panel panel-blue' />");
    $("#searchPanel").text("").append("<div id='searchHeading' class='panel-heading' />");
    $("#searchHeading").append("<h4 id='searcHheaderName' class='panel-title' />");
    $("#searcHheaderName").append("<div class='panel-title'  style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#Searchbody'><center>Search Criteria</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin12'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#searchPanel").append("<div id='Searchbody' class='panel-collapse collapse in pal' />");
    $("#collapseFin12").click(function() {
        $("#Searchbody").toggle();
        if ($("#collapseFin12 span").hasClass("glyphicon-minus-sign")) {
            $("#collapseFin12").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#collapseFin12").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#Searchbody").append("<div id='SearchbodyMainBody' class = 'panel-body' />");

    $("#SearchbodyMainBody").append("<div id='SearchbodyMainBodypanelRow' class='row'/>");
    $("#SearchbodyMainBodypanelRow").append("<div id='messageDiv'  ></div>");

    $("#SearchbodyMainBodypanelRow").append("<div id='row1' class='form-group' />");
    getTwoColumnInRow("row1", "Row5", "Row5Col1", "Row5Col2");
    $("#Row5Col1").append(getLabel("Financial Year", "") + "" + getDropDown("financailYearSearch"));
    $("#Row5Col2").append(getLabel("Budget Type", "required") + "" + getDropDown("budgetTypeSearch"));

    $("#SearchbodyMainBodypanelRow").append("<div id='BudegtheadSearch' class='form-group' />");
    getTwoColumnInRow("BudegtheadSearch", "Row6", "Row6Col1", "Row6Col2");
    $("#Row6Col1").append(getLabel("Department", "required") + "" + getDropDown("departmentSearch", "", "", ""));
    $("#Row6Col2").append(getLabel("Status", "required") + "" + getDropDown("status"));

    $("#SearchbodyMainBodypanelRow").append("<div id='row2' class='form-group' />");
    getTwoColumnInRow("row2", "Row7", "Row7Col1", "Row7Col2");
    $("#Row7Col1").append(getLabel("Fund Type", "required") + "" + getDropDown("fundTypeSearch"));
    $("#Row7Col2").append(getLabel("Sector", "required") + "" + getDropDown("sectorSearch"));

    $("#SearchbodyMainBodypanelRow").append("<div id='searchbut' class='form-group' />");
    $("#searchbut").append("<label class='col-sm-5 control-label'></label>");
    $("#searchbut").append("<div id='savesearchButton' class='col-sm-7' />");
    $("#savesearchButton").append("<button class='btn btn-success mr5 btn-flat' id='SearchIncomeBudgetButton' onclick='validateExtraProvisionIncomeSearch()'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp");
    $("#savesearchButton").append("<button class='btn btn-warning mr5 btn-flat' onclick='ResetIncomeSearchBudgetSanctionAtUniversity()'>Reset</button>&nbsp&nbsp&nbsp");
    getBudgetfinancialyearForIncomeUniversity("financailYearSearch");
    viewOption("budget/master/FundType/View", "", "description", "fundTypeSearch", "Fund Type");
    fetchAlSectorsincomsanction("", "sectorSearch", "Sector");
    $("#budgetTypeSearch").attr("onchange", " fetchDepartInExtraProvisionSearch('Department','departmentSearch')");
//    viewOption("budget/master/BudgetType/View", "", "description", "budgetTypeSearch", "Budget Type");
    getBudgetTypeExtraProvision('budgetTypeSearch');
    var statusOptions = ["Save", "Submit"];
    getHardCodedOptions("status", "Status", statusOptions);

}

//------------------------End Search Function Sanction Income Form -------------------

//------------------------Start Search Consolidate Income Form Validation -------------
function extraProvisionIncomeValidation() {
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv("FieldGroup");
    var result = 1;
    if ($('#financialYear').val() == null || $('#financialYear').val() == "") {
        $("#financialYear").focus();
        displaySmallErrorMessages("financialYearErr", "Please Select Financial Year.");
        result = 0;
    }
    if ($('#fundType').val() == null || $('#fundType').val() == "") {
        $("#fundType").focus();
        displaySmallErrorMessages("fundTypeErr", "Please Select Fund Type.");
        result = 0;
    }
    if ($('#sector').val() == null || $('#sector').val() == "") {
        $("#sector").focus();
        displaySmallErrorMessages("sectorErr", "Please Select Sector.");
        result = 0;
    }
    if ($('#budgetType').val() == null || $('#budgetType').val() == "") {
        $("#budgetType").focus();
        displaySmallErrorMessages("budgetTypeErr", "Please Select Budget Type.");
        result = 0;
    }
    if ($('#universityBudgetDate').val() == null || $('#universityBudgetDate').val() == "") {

        displaySmallErrorMessages("universityBudgetDateErr", "Please Select Budget Date.");
        result = 0;
    }
    if ($('#department').val() == null || $('#department').val() == "") {

        displaySmallErrorMessages("departmentErr", "Please Select Department.");
        result = 0;
    }
    if (result != 0) {
        viewExtraProvisionIncomeList();
    }
}

//------------------------Start Search Consolidate Income Form Validation -------------

//------------------------Start Display Consolidate Income Data  ----------------------

function viewExtraProvisionIncomeList(divId)
{
    var financialYear = $("#financialYear").val();
    var fundType = $("#fundType").val();
    var sector = $("#sector").val();
    var budgetType = $("#budgetType").val();
    var budgetHead = $("#budgethead").val();
    var universityBudgetDate = $("#universityBudgetDate").val();
    var department = $('#department').val();
    //For List Table
    $(".smallErrorMsg").text("");

    $("#tableHeaderTable").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Ledgers</center>");

    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").text("").append("<div id='ErrorDiv'/>");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
    $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
    $("#displayBankTable").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Estimated Amount(InLacs)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Extra Provisional Amount(In Lac)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Total Amount(In Lac)</th>"
            + "</tr></thead>");
    var searchObj = {
        financialYear: financialYear,
        fundType: fundType,
        sector: sector,
        budgetType: budgetType,
        budgetHead: budgetHead,
        department: department
    };

    $.get(server_base_url + "/budget/BudgetTransaction/ExtraProvisionSearch", {
        searchObj: JSON.stringify(searchObj),
        condition: "IncomeBudget"
    }).done(function(bdata) {
        bdata = JSON.parse(bdata);

//        alert(JSON.stringify(bdata));
        if (bdata == fail) {
        } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        var result = 1;
                        var extraProvisionAmount = 0;
                        var totalAmount = bdata[i].sanctionedAmount;
                        if (bdata[i].extraProvisionAmount == "undefined" && bdata[i].extraProvisionAmount == null)
                        {
                            extraProvisionAmount = bdata[i].extraProvisionAmount;
                        }
                        if (bdata[i].totalAmount == "undefined" && bdata[i].totalAmount == null)
                        {
                            totalAmount = bdata[i].totalAmount;
                        }
                        if (result != 0) {
                            sno++;
                            var objJson = JSON.stringify(bdata[i]);
                            $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].ledger + "<input type='hidden' value='" + bdata[i].budgetDate + "'></td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                    + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].sanctionedAmount + "' readonly></td>"
                                    + "<td style='cursor:pointer;'><input class='sactionamount' type='text' onkeypress='return validate(event)' value='" + extraProvisionAmount + "'><span id='emountErr" + sno + "'></span></td>"
                                    + "<td style='cursor:pointer;'><input type='text' value='" + totalAmount + "' readonly></td>");

                            $("#displayBankTable thead tr th:first input:checkbox").change(function() {
                                $("#displayBankTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                            });
                            $("#displayBankTable tbody tr td:first-child input:checkbox").change(function() {
                                var tot = $(".case").length;
                                var tot_checked = $(".case:checked").length;
                                if (tot != tot_checked) {
                                    $("#selectall").prop('checked', false);
                                }
                            });
                        }
                    }
                    if (sno > 0) {
                        var save = "Save";
                        var submit = "Submit";
                        $("#listpanelRow").append("<div class='row' id='saveSubmitResetPrintRow'/>");
                        $("#saveSubmitResetPrintRow").append('<center><button type="button"  value="Save" class="btn btn-success mr5 btn-flat"  onclick=saveExtraProvisionIncome("' + save + '")>Save</button>&nbsp;&nbsp;&nbsp;<button name="reset" value="reset" type="button" class="btn btn-warning mr5" onclick=ResetExtraProvisionIncome()>Reset</button></center>');
                    }

                }
            }
        }
        // $('#displayBankTable').dataTable();


        $('#displayBankTable tr input[type="text"]').change(function() {

            var row = $(this).closest('tr');
            var sanc = row.find('td:eq(3)').find('input').val();
            var extra = row.find('td:eq(4)').find('input').val();

            if (!isNaN(extra) && extra != undefined) {
                extra = parseFloat(extra);
                sanc = parseFloat(sanc);
            }

            if (sanc > 0) {
                var present = (extra + sanc);
                row.find('td:eq(5)').find('input').val(present);

            }

        });




    });
}
//------------------------End Display Consolidate Income Data  ----------------------




function saveExtraProvisionIncome(saveorsubmit) {

    var status = "false";
    var rows = $("#displayBankTable").dataTable().fnGetNodes();
    for (var i = 0; i < rows.length; i++)
    {

        i++;

        $("#emountErr" + i).text("").val("");
    }
    var rows = $("#displayBankTable").dataTable().fnGetNodes();
    for (var i = 0; i < rows.length; i++)
    {
        var row = $(rows[i]);
        var requestedAmount = row.find('td:eq(4) input').val();
        var rowId = row.find('td:eq(0)').text();
        if (requestedAmount == "")
        {
            displaySmallErrorMessages("emountErr" + rowId, "Please enter Amount");

            status = "true";
        }
    }

    if (status == "false")
    {

        var result = 1;
        var saveThisIncomeDetails = [];
        var rows = $("#displayBankTable").dataTable().fnGetNodes();
        for (var i = 0; i < rows.length; i++)
        {
            var row = $(rows[i]);
            var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
            saveThisIncomeDetails.push({
                incomeBudgetId: budgetIncomeDetails._id.$oid,
                ledger: budgetIncomeDetails.ledger,
                ledgerId: budgetIncomeDetails.ledgerId,
                budgetHeadName: budgetIncomeDetails.budgetHeadName,
                budgetHead: budgetIncomeDetails.budgetHead,
                budgetType: budgetIncomeDetails.budgetType,
                sanctionedAmount: row.find('td:eq(3) input').val(),
                extraProvisionAmount: row.find('td:eq(4) input').val(),
                totalAmount: row.find('td:eq(5) input').val(),
                financialYear: $('#financialYear').val(),
                fundType: $('#fundType').val(),
                sector: $('#sector').val(),
                department: $('#department').val()
            });

            $(this).closest('tr').remove();
        }

        if (saveThisIncomeDetails == null || saveThisIncomeDetails == "") {
            result = 0;
        }
        if (result != 0)
        {
            var id = getUserSessionElement("userId");
            $.post(server_base_url + "/Budget/BudgetTransaction/ExtraProvisionSave", {
                objJson: JSON.stringify(saveThisIncomeDetails),
                userid: id,
                status: saveorsubmit
            }).done(function(data) {
                if (data == fail) {
                    displaySmallErrorMessages("ErrorDiv", "Invalid username / password" + "<br/><br/>");
                } else if (data == unauthorized || data.statuscode == unauthorized) {
                    displaySmallErrorMessages("ErrorDiv", unauthorizedMessage + "<br/><br/>");
                } else if (data == statusException) {
                    displaySmallErrorMessages("ErrorDiv", statusExceptionMessage + "<br/><br/>");
                } else if (data == invalidSession) {
                    callSessionTimeout();
                } else if (data == null) {
                    displaySmallErrorMessages("ErrorDiv", "No User available" + "<br/><br/>");
                } else {
                    if (saveorsubmit == "Submit")
                    {
                        displaySuccessMessages("ErrorDiv", sendMessage, "");
                    } else
                    {
                        displaySuccessMessages("ErrorDiv", successMessage, "");
                    }
                    setTimeout(function() {
                        extraProvisionIncomeBudget();
                        $(".smallErrorMsg").text("");
                    }, 3000);
                    clearSuccessMessageAfterTwoSecond("ErrorDiv");
                }
            });
        } else
        {
            displayErrorMessages("ErrorDiv", selectAtleastoneRecord, "");
            setTimeout(function() {
                $("#ErrorDiv").text("");
            }, 3000);
        }
    }
}
function validateExtraProvisionIncomeSearch() {
    var result = 1;
    if ($('#financailYearSearch').val() == null || $('#financailYearSearch').val() == "") {
        $("#financailYearSearch").focus();
        displaySmallErrorMessages("financailYearSearchErr", "Please Select Financial Year.");
        result = 0;
    }
    if ($('#budgetTypeSearch').val() == null || $('#budgetTypeSearch').val() == "") {
        $("#budgetTypeSearch").focus();
        displaySmallErrorMessages("budgetTypeSearchErr", "Please Select Budget Type.");
        result = 0;
    }
    if ($('#fundTypeSearch').val() == null || $('#fundTypeSearch').val() == "") {
        $("#fundTypeSearch").focus();
        displaySmallErrorMessages("fundTypeSearchErr", "Please Select Fund Type.");
        result = 0;
    }
    if ($('#sectorSearch').val() == null || $('#sectorSearch').val() == "") {
        $("#sectorSearch").focus();
        displaySmallErrorMessages("sectorSearchErr", "Please Select Sector.");
        result = 0;
    }
    if ($('#status').val() == null || $('#status').val() == "") {
        $("#status").focus();
        displaySmallErrorMessages("statusErr", "Please Select Status.");
        result = 0;
    }
    if ($('#departmentSearch').val() == null || $('#departmentSearch').val() == "") {
        $("#departmentSearch").focus();
        displaySmallErrorMessages("departmentSearchErr", "Please Select Department.");
        result = 0;
    }
    var financialYear = $('#financailYearSearch').val();
    var budgetType = $('#budgetTypeSearch').val();
    var fundType = $('#fundTypeSearch').val();
    var status = $('#status').val();
    var sector = $('#sectorSearch').val();
    var department = $('#departmentSearch').val();
    if (result != 0) {
        var searchObj = {
            financialYear: financialYear,
            fundType: fundType,
            sector: sector,
            budgetType: budgetType,
            sentStatus: status,
            department: department
        };
        $("#maritalListPanel").remove("");
        $("#tableHeaderTable").text("").append("<div id='maritalListPanelSearch' class='panel panel-blue' />");
        $("#maritalListPanelSearch").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List Of Ledgers</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanelSearch").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#collapseFin1").click(function() {
            $("#collapseOne3").toggle();
            if ($("#collapseFin1 span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFin1").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFin1").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='listpanelRow1' class='row' />");

        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow1").text("").append("<div id='messageDiv'></div>");
        $("#listpanelRow").text("").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
        $.post(server_base_url + "/budget/BudgetTransaction/ExtraProvisionSearch", {
            searchObj: JSON.stringify(searchObj),
            condition: "searchExtra"
        }).done(function(bdata) {
            bdata = JSON.parse(bdata);
            if (bdata != null) {
                var universityBudgetStatus = $('#status').val();
                if (universityBudgetStatus == "Save") {
                    if (bdata.length > 0) {
                        $("#displayBankTable").append("<thead class=''><tr id='TableHeaderTrHeadId'>"
                                + " <th> S.No</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Estimated Amount(In Lacs)</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Extra Provision Amount(In Lacs)</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Total Amount(In Lacs)</th>");
                        $("#TableHeaderTrHeadId").append("<th style='min-width:1%;width:80px;'><i ></i>Edit</th>");
                        $("#TableHeaderTrHeadId").append("<th style='min-width:1%;width:80px;'><i ></i>Delete</th>");
                        var sno = 0;
                        $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var objJson = JSON.stringify(bdata[i]);
                            $("#displayBankTableBody").append("<tr id='" + sno + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].ledger + "<input type='hidden' value='" + bdata[i]._id.$oid + "'></td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                    + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].sanctionedAmount + "' readonly></td>"
                                    + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].extraProvisionAmount + "' readonly></td>"
                                    + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + bdata[i].totalAmount + "' readonly></td>");
                            $("#" + sno).append("<td style='cursor:pointer;' onclick=UpdateExtraProvisonIncomeData('" + encodeURI(objJson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            $("#" + sno).append("<td onclick=deletePopUp('deleteExtraProvisionIncome','nothingToDo','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                            $("#displayBankTable thead tr th:first input:checkbox").change(function() {
                                $("#displayBankTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
                            });
                            $("#displayBankTable tbody tr td:first-child input:checkbox").change(function() {
                                var tot = $(".case").length;
                                var tot_checked = $(".case:checked").length;
                                if (tot != tot_checked) {
                                    $("#selectall").prop('checked', false);
                                }
                            });


                        }
                        if (sno > 0) {
                            var submit = "Submit";
                            $("#listpanelRow").append("<div class='row' id='saveSubmitResetPrintRow'/>");
                            $("#saveSubmitResetPrintRow").append("<div class='col-sm-3'></div>");
                            $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");
                            $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-success mr5 btn-flat'  onclick='SubmitExtraProvisionIncome()'>Submit</button></div>");
                            $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-warning mr5 btn-flat' onclick=ResetIncomeUniversitysBudgetmaster()>Reset</button></div>");
                            $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");
                        }

                        $("#displayBankTable").DataTable({
                            paging: true
                        });
                    } else {
                        displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
                    }
                } else if (universityBudgetStatus == "Submit") {
                    if (bdata.length > 0) {
                        $("#displayBankTable").append("<thead class=''><tr>"
                                + " <th> S.No</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Estimated Amount(In Lacs)</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Extra Provision Amount(In Lacs)</th>"
                                + "<th style='min-width:30%;width:auto;'><i ></i>Total Amount(In Lacs)</th>"
                                + "</tr></thead>");
                        var sno = 0;
                        $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var objJson = JSON.stringify(bdata[i]);
                            $("#displayBankTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "<input type='hidden' value='" + encodeURI(objJson) + "'></td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].ledger + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].budgetHeadName + "</td>"
                                    + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].sanctionedAmount + "' readonly></td>"
                                    + "<td style='cursor:pointer;'><input type='text' value='" + bdata[i].extraProvisionAmount + "' readonly></td>"
                                    + "<td style='cursor:pointer;'><input class='approveamounts' type='text' onkeypress='return validate(event)' value='" + bdata[i].totalAmount + "' readonly></td></tr>");
                        }
                        $("#displayBankTable").DataTable({
                            paging: true
                        });
                    } else {
                        displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
                    }
                }
            } else {
                displayLargeErrorMessagesInCenterInRed("messageDiv", noDataAvailable);
            }
        });
    }
}
function UpdateExtraProvisonIncomeData(obj) {
    $("#messageDiv").text("");
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $(".smallErrorMsg").text("");
    $("#tableHeaderTable").text("").append("<div id='maritalListPanelSearch' class='panel panel-blue' />");
    $("#maritalListPanelSearch").text("").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>Update Income Sanction Budget</center>");
    $("#maritalListPanelSearch").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").append("<div id='listpanelRow1' class='row' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow1").text("").append("<div id='messageDiv'></div>");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='viewUser'/>");
    $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
    $("#displayBankTable").append("<thead class=''><tr>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Ledger </th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Budget Head</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Estimated Amount(In Lacs)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Extra Provision Amount(In Lacs)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Total Amount(In Lacs)</th>"
            + "</tr></thead>");
    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bclased' />");
    $("#displayBankTableBody").text("").append("<tr id='" + obj.status + "' style='cursor:pointer;' >"
            + "<td>1<input type='hidden' value='" + encodeURI(JSON.stringify(obj)) + "'></td>"
            + "<td style='cursor:pointer;'>" + obj.ledger + "<input type='hidden' value='" + obj._id.$oid + "'></td>"
            + "<td style='cursor:pointer;'>" + obj.budgetHeadName + "</td>"
            + "<td style='cursor:pointer;'><input type='text' value='" + obj.sanctionedAmount + "' readonly></td>"
            + "<td style='cursor:pointer;'><input type='text' onkeypress='return validate(event)' value='" + obj.extraProvisionAmount + "'></td>"
            + "<td style='cursor:pointer;'><input type='text'  value='" + obj.totalAmount + "' readonly></td>");
    $("#listpanelRow").append("<div class='row' id='saveSubmitResetPrintRow'/>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-3'></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-success mr5 btn-flat'  onclick='UpdateExtraProvisionIncomeRow()'>Update</button></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'><button class='btn btn-warning mr5 btn-flat' onclick=goBackToIncomeSearchFunction() >Back</button></div>");
    $("#saveSubmitResetPrintRow").append("<div class='col-sm-1'></div>");

    $('#displayBankTable tr input[type="text"]').change(function() {

        var row = $(this).closest('tr');
        var sanc = row.find('td:eq(3)').find('input').val();
        var extra = row.find('td:eq(4)').find('input').val();

        if (!isNaN(extra) && extra.length != 0 && extra != undefined) {
            extra = parseFloat(extra);
            sanc = parseFloat(sanc);
        }

        if (extra > 0 && extra > 0) {
            var present = (extra + sanc);
            row.find('td:eq(5)').find('input').val(present);

        }

    });

}
function UpdateExtraProvisionIncomeRow() {
    var id;
    var extraProvisionAmount;
    var totalAmount;
    $('#displayBankTable tbody tr ').each(function(i) {
        var row = $(this).closest('tr');
        var budgetIncomeDetails = JSON.parse(decodeURI(row.find('td:eq(0) input').val()));
        id = budgetIncomeDetails._id.$oid;
        extraProvisionAmount = row.find('td:eq(4) input').val();
        totalAmount = row.find('td:eq(5) input').val();
        $(this).closest('tr').remove();
    });
    $.post(server_base_url + "/Budget/BudgetTransaction/ExtraProvisionUpdate", {
        Id: id,
        extraProvisionAmount: extraProvisionAmount,
        totalAmount: totalAmount,
        userid: getUserSessionElement("userId")
    }).done(function(data) {
        if (data == fail) {
            displaySmallErrorMessages("messageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displaySmallErrorMessages("messageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessages("messageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessages("messageDiv", "No User available" + "<br/><br/>");
        } else {
            $(".smallErrorMsg").text("");
            displaySuccessMessages("messageDiv", updateMessage, "");
            $("#SearchIncomeBudgetButton").click();
            setTimeout(function() {
            }, 3000);
            displaySuccessMessages("messageDiv", updateSuccessMessage, "");
            clearSuccessMessageAfterTwoSecond("messageDiv");
        }
    });
}
function SubmitExtraProvisionIncome() {
    var result = 1;
    var saveThisConsolidateDetails = [];
    var rows = $("#displayBankTable").dataTable().fnGetNodes();
    for (var i = 0; i < rows.length; i++)
    {
        var row = $(rows[i]);
        saveThisConsolidateDetails.push({
            extraProvisionId: row.find('td:eq(1) input').val()
        });
        $(this).closest('tr').remove();
    }
    if (saveThisConsolidateDetails == null || saveThisConsolidateDetails == "") {
        result = 0;
    }
    if (result != 0)
    {
        var userid = getUserSessionElement("userId");
        $.post(server_base_url + "/Budget/BudgetTransaction/ExtraProvisionSubmit", {
            objJson: JSON.stringify(saveThisConsolidateDetails),
            userid: userid
        }).done(function(data) {

            if (data == fail) {
                displaySmallErrorMessagesInRed("messageDiv", "Invalid username / password" + "<br/><br/>");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("messageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (data == statusException) {
                displaySmallErrorMessages("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");
            } else {
                $(".smallErrorMsg").text("");
                displaySuccessMessages("messageDiv", sendMessage, "");
                setTimeout(function() {
                    $("#SearchExpenseBudgetButton").click();
                    $("#messageDiv").text("").val("");
                }, 3000);
            }
        });
    } else
    {
        displayErrorMessages("messageDiv", selectAtleastoneRecord, "");
        setTimeout(function() {
            $("#messageDiv").text("");
        }, 3000);
    }

}
function deleteExtraProvisionIncome(Id) {
    $.post(server_base_url + "/Budget/BudgetTransaction/ExtraProvisionDelete", {
        Id: Id,
        userid: getUserSessionElement("userId")
    }).done(function(data) {
        if (data == fail) {
            displaySmallErrorMessages("authonticationMsgId", "Invalid username / password");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            displaySmallErrorMessages("authonticationMsgId", unauthorizedMessage);
        } else if (data == statusException) {
            displaySmallErrorMessages("authonticationMsgId", statusExceptionMessage);
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessages("authonticationMsgId", "No User available");
        } else {
            $(".smallErrorMsg").text("");
            displaySuccessMessages("ErrorDiv", deleteMessage, "");
            setTimeout(function() {
                $("#SearchIncomeBudgetButton").click();
            }, 3000);
        }
    });
}