/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function reportBankReconciliation(divId)
{

    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeReportMenuTabs()">Finance Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="reportBankReconciliation()">Bank Reconcilation Report </a>');
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#mainTabMenu").append("<div id='tableHeaderList' />");
    if (checkUserPrivelege(pvViewBankReconcilationReport)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Bank Reconciliation Report</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='bankReconCollp'><span class='glyphicon glyphicon-minus-sign'></span></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#bankReconCollp").click(function () {
            $("#collapseOne2").toggle();
            if ($("#bankReconCollp span").hasClass("glyphicon-minus-sign")) {
                $("#bankReconCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#bankReconCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow1' class='row' />");
        $("#panelRow1").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + getUserSessionElement(seCurrentFinancialYear) + "</strong></span>");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");

        $("#FieldGroup").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="fromFinancialYear" class="form-control">'
                + '</div><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="currentFinancialYear" class="form-control"></div></div>');
        $("#FieldGroup").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr"><input type="hidden"   id="toFinancialYear" class="form-control">'
                + '</div></div>');

//        $("#FieldGroup").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr1"><label for="location">Start Date <span class="require">*</span> </label><input type="text"   id="startDate" placeholder="DD/MM/YYYY" class="form-control">'
//                + '</div><div class="form-group col-lg-6" id="dateerr2"><label for="location">End Date <span class="require">*</span> <span id="dateerr3"></span></label><input type="text"   id="endDate" placeholder="DD/MM/YYYY" class="form-control"></div></div>');
        $("#FieldGroup").append('<div class="col-lg-12 form-group"><div class="form-group col-lg-6" id="dateerr1"><label for="location">As On Date <span class="require">*</span> </label><input type="text"   id="startDate" placeholder="DD/MM/YYYY" class="form-control">'
                + '</div><div class="form-group col-lg-6" id="ledgererr"><label for="">Bank Name <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="bankSelect"></select></div></div>');

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

            $("#fromFinancialYear").val(fromFinacialYear);
            $("#toFinancialYear").val(toFinacialYear);

        }
        $("#currentFinancialYear").val(currentFinancialYear);

        $('#startDate').datepicker({
            changeYear: true,
            changeMonth: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear
        });

        $('#endDate').datepicker({
            changeYear: true,
            changeMonth: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear
        });

//        $("#FieldGroup").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ledgererr"><label for="">Bank Name <span class="require">*</span> </label><select class="form-control" name="chequeBankName" id="bankSelect"></select>'
//                + '</div><div class="form-group col-lg-6" id="grouperr"><label for="location"></label><select class="form-control" name="chequeBankName" id="groupId" onchange=fetchBankforBankReconcilation()></select></div></div>');
        $("#FieldGroup").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="grouperr"><label for="location"></label><select class="form-control" name="chequeBankName" id="groupId" onchange=fetchBankforBankReconcilation()></select>'
                + '</div></div>');
        $('#groupId').hide();
        $("#FieldGroup").append("<div id='row3' class='row' />");
        $("#row3").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='View' class='btn btn-success mr5'  onclick='bankReconcilationReport()'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetBankReconciliationReport()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");

        getGroupListForBankReconcilationReport("", "groupId");
        setTimeout(function () {
            fetchBankforBankReconcilation();
        }, 1000);
    }
}

function resetBankReconciliationReport() {

    $("#endDate").val("");
    $("#startDate").val("");
    $("#bankSelect").val('');
    $("#reportFormat0").prop('checked', false);
    $("#reportFormat1").prop('checked', false);
    $("#reportFormat2").prop('checked', false);
    $("#pregsuccessBefore").text("");
    $("#tableHeaderList").text("");
    $("#dateerr3").text("");
}

function getGroupListForBankReconcilationReport(name, DivId) {

    $.get(server_base_url + "/financial/account/GroupMaster/ViewList", {
    }).done(function (data) {
        if (data != null) {
            var sno = 0;
            var mainData = data.result;
            $("#" + DivId).text("");
            for (var i = mainData.length - 1; i >= 0; i--) {
                var subData = mainData[i];

                if (subData.nature == "Assets")
                {
                    if (subData.groupName == "Bank Group")
                    {

                        $("#" + DivId).append("<option value='" + subData._id.$oid + "'selected>" + subData.groupName + "</option>");
                    }
                }

            }
        }
    });
}
function bankReconcilationReport() {

    var startDate = $("#startDate").val();
    var endDate = $("#endDate").val();
    var bank = $("#bankSelect").val();
    var result = 1;
    var days = checkStartDateAndEnddate();
//    var reportFormat = $('input[name=reportFormat]:checked').val();
    if (startDate == "undefined" || startDate == "" ||  bank == "" || bank == "undefined" || bank == null) {
        displayLargeErrorMessagesInCenterInRed("pregsuccessBefore", "Please fill all mandatory fields");
        return false;
    } else
    {
        $("#pregsuccessBefore").text("");
        /*if (days < 0) {
            $("#endDate").focus();
            displaySmallErrorMessagesInRed("dateerr3", "End Date should be greater than or equal to Start Date ");
            result = 0;
        } else {
            $("#dateerr3").text("");
            viewBetweendatesDetailsForBankReconcilationReport();
        }*/
        viewBetweendatesDetailsForBankReconcilationReport();
    }

}

function viewBetweendatesDetailsForBankReconcilationReport()
{
    var fromyear = getFincialYearForAllReports();
    var toyear = parseInt(fromyear) + 1;
    var financialyear = fromyear + "-" + toyear;
    var dateArray = getCurrentFinancialYearDateInArray();
    var fromDateStr;
    var toDateStr;
    if (dateArray.length > 0) {
        fromDateStr = dateArray[0];
        toDateStr = dateArray[1];
    }
    var employeeSearchJSON = {
        fromDate: $("startDate").val(),
        toDate: $("endDate").val(),
        ledger: $("#bankSelect").val()
    }
    var startDate = $("#startDate").val();
    var endDate = $("#endDate").val();
    var bank = $("#bankSelect").val();
    var ddo = getUserSessionElement(seDDOId);
    var location = getUserSessionElement(seLocationId);
    $("#tableHeaderList").text("").append("<iframe id='iframe'  src=" + server_base_url + '/financial/account/BankReconcilation/BankReconcilationReport?fromDate=' + startDate + '&toDate=' + endDate + '&fin=' + encodeURI(financialyear) + '&ledger=' + bank + '&voucherList=' + encodeURIComponent(JSON.stringify(employeeSearchJSON)) + '&fromDateStr=' + fromDateStr + '&ddo=' + ddo + '&location=' + location  + '&finYear=' + fromyear + " height='500px' width='100%'></iframe>");
}

function fetchBankforBankReconcilation() {

    var group;
    group = $("#groupId").val();
    $.get(server_base_url + "/financial/Transaction/ReceiptVoucher/GetLedger", {
        group: group
    }).done(function (pdata) {
       

        if (pdata != "500" && pdata != "" && pdata != null)
        {
            $("#bankSelect").text("").append("<option value = '' selected>---- Select Bank----</option>");
            for (var k = 0; k < pdata.length; k++) {
                $("#bankSelect").append("<option  value='" + pdata[k].idStr + "'>" + pdata[k].ledgerName + "(" + pdata[k].ledgerCode + ")" + "</option>");
            }
        } else
        {
            $("#bankSelect").text("").append("<option value = '' selected>---- No Data Available ----</option>");
        }
    });
}

function checkStartDateAndEnddate() {
    var fDate = $("#startDate").datepicker("getDate");
    var tDate = $("#endDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}

function getCurrentFinancialYearDateInArray() {

    var financialDate = getUserSessionElement(seCurrentFinancialYear);
    var dateArray = financialDate.split("~");

    return dateArray;
}
