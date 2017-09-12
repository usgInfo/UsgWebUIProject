/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function fdrStatementReportPage(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" \n\
    data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > \n\
    <a href="javascript:void(0)" data-toggle="tab" onclick="financeReportMenuTabs()">\n\
    Finance Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="fdrStatementReportPage\n\
    (dashboardBodyMainDiv)">FDR Statement Report</a>');
    scrolupfunction();
    $("#" + divId).text("").append("<div id='fdrStatementReportMainDivId' />");
    $("#fdrStatementReportMainDivId").append("<div id='fdrStatementReportFilter' class='row'/>");
    $("#fdrStatementReportFilter").append("<div id='tableHeader'/>");
    if (checkUserPrivelege(pvViewFDRStatementReport)) {
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");

    $("#tableHeader1").append("<class='panel-title' a style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>FDR Statement Report</center>");
    $("#tableHeader1").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colMaritial'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");

    addToggleToId("colMaritial", "collapseOne2");

    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    }

    $("#panelRow").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + getUserSessionElement(seCurrentFinancialYear) + "</strong></span>");

    //start of from date & to date
    $("#panelRow").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fromDate">From Date \n\
    </label><input type="text" id="fromDate" placeholder="MM/DD/YYYY" \n\
    class="form-control"/><span id="fromDateErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="toDate">To Date <span id="toDateErr1"></span></label>\n\
    <input type="text" id="toDate" placeholder="MM/DD/YYYY"  \n\
    class="form-control" /><span id="toDateErr" class="text-danger"></span></div></div>');
    $("#fromDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "mm/dd/yy",
        yearRange: '-0:+50',
        minDate: '+0D'
    });
    $("#toDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "mm/dd/yy",
        yearRange: '-0:+50',
        minDate: '+0D'
    });
    //End of from date & to date

    //Start of maturity from date & to date
    $("#panelRow").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="maturityFromDate">Maturity From Date \n\
    </label><input type="text" id="maturityFromDate" placeholder="MM/DD/YYYY" \n\
    class="form-control"/><span id="maturityFromDateErr" class="text-danger"></span>'
            + '</div><div class="form-group col-lg-6"><label for="toDate">Maturity To Date <span id="toDateErr2"></span></label>\n\
    <input type="text" id="maturityToDate" placeholder="MM/DD/YYYY"  \n\
    class="form-control" /><span id="maturityToDateErr" class="text-danger"></span></div></div>');
    $("#maturityFromDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "mm/dd/yy",
        yearRange: '-0:+50',
        minDate: '+0D'
    });
    $("#maturityToDate").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "mm/dd/yy",
        yearRange: '-0:+50',
        minDate: '+0D'
    });
    //End of maturity from date & to date

    //Start of fixed deposit Type & fixed deposit nature
    $("#panelRow").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fixedDepositType">Fixed Deposit Type \n\
    </label><select class="form-control" name="fixedDepositType" id="fixedDepositType"><option value="">----Select Fixed Deposit Type----</option>\n\
    <option value="New">New</option><option value="ReInvestment">Re Investment</option></select>'
            + '<span id="fixedDepositTypeErr" class="text-danger"></span></div><div class="form-group col-lg-6"><label for="fixedDepositNature">Fixed Deposit Nature \n\
    </label><select class="form-control" name="fixedDepositNature" id="fixedDepositNature"><option value="">----Select Fixed Deposit Nature----</option>\n\
    <option value="Investment">Investment</option><option value="Security">Security</option></select>\n\
    <span id="fixedDepositNatureErr" class="text-danger"></span></div></div>');
    //End of fund Type & Voucher No

    //Start of view & reset
    $("#panelMainBody").append("<div id='viewRow1' class='row' />");
    $("#viewRow1").append("<div id='viewGroup1' class='form-group' />");
    $("#viewGroup1").append("<center><button type='button' \n\
    style='margin-left:10px' value='View' class='btn btn-success mr5' onclick='queryFdrProcessTable()'>\n\
    VIEW</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick=resetAllFields('panelRow') \n\
    class='btn btn-warning mr5' name='reset' value='reset' >RESET</button></center>");
    //End of view & reset
}

function resetAllFields(id) {

    $("#toDateErr1").text("");
    $("#toDateErr2").text("");
    wipeAllDropDownsInDiv(id);
    wipeAllTextBoxesInDiv(id);
}

function queryFdrProcessTable() {

    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    var fdMatFromDate = $("#maturityFromDate").val();
    var fdMatToDate = $("#maturityToDate").val();
    var result = 1;
    var days = checkFromDateAndToDateForFDRReport();
    var days1 = checkFromDateAndToDate1();
    
    if(fromDate != "" && toDate != "" && fdMatFromDate != "" && fdMatToDate != ""){
        if(days < 0){
            $("#toDate").focus();
        displaySmallErrorMessagesInRed("toDateErr1", "To Date should be greater than or equal to From Date ");
        result = 0;
        }
        if(days1 < 0){
            $("#maturityToDate").focus();
        displaySmallErrorMessagesInRed("toDateErr2", "Maturity To Date should be greater than or equal to Maturity From Date ");
        result = 0;
        }
        if(days < 0 && days1 >= 0){
            $("#toDateErr2").text("");
        }
        if(days1 < 0 && days >= 0){
            $("#toDateErr1").text("");
        }
        if(days >= 0 && days1 >= 0){
            $("#toDateErr1").text("");
            $("#toDateErr2").text("");
        var fdrProcessCriteria = {
        fdFromDate: $("#fromDate").val(),
        fdToDate: $("#toDate").val(),
        fdMaturityFromDate: $("#maturityFromDate").val(),
        fdMaturityToDate: $("#maturityToDate").val(),
        fdType: $("#fixedDepositType option:selected").val(),
        fdNature: $("#fixedDepositNature option:selected").val()
    };
    $("#iframe").remove();
    $("#dashboardBodyMainDiv").append("<iframe id='iframe' "
            + "name='FDR Statement Report' title='FDR Statement Report' src=" +
            server_base_url + "FetchFdrRecords?fdrCriteria=" + encodeURI(
                    JSON.stringify(fdrProcessCriteria)) + " \n\
                    height='500px' width='100%'></iframe>");
        }
    }
    else if(fromDate != "" && toDate != ""){
        if(days < 0){
            $("#toDate").focus();
        displaySmallErrorMessagesInRed("toDateErr1", "To Date should be greater than or equal to From Date ");
        result = 0;
        }else{
            $("#toDateErr1").text("");
    var fdrProcessCriteria = {
        fdFromDate: $("#fromDate").val(),
        fdToDate: $("#toDate").val(),
        fdMaturityFromDate: $("#maturityFromDate").val(),
        fdMaturityToDate: $("#maturityToDate").val(),
        fdType: $("#fixedDepositType option:selected").val(),
        fdNature: $("#fixedDepositNature option:selected").val()
    };
    $("#iframe").remove();
    $("#dashboardBodyMainDiv").append("<iframe id='iframe' "
            + "name='FDR Statement Report' title='FDR Statement Report' src=" +
            server_base_url + "FetchFdrRecords?fdrCriteria=" + encodeURI(
                    JSON.stringify(fdrProcessCriteria)) + " \n\
                    height='500px' width='100%'></iframe>");
        }
    }
    
    else if(fdMatFromDate != "" && fdMatToDate != ""){
        if(days1 < 0){
            $("#maturityToDate").focus();
        displaySmallErrorMessagesInRed("toDateErr2", "Maturity To Date should be greater than or equal to Maturity From Date ");
        result = 0;
        }else{
            $("#toDateErr2").text("");
    var fdrProcessCriteria = {
        fdFromDate: $("#fromDate").val(),
        fdToDate: $("#toDate").val(),
        fdMaturityFromDate: $("#maturityFromDate").val(),
        fdMaturityToDate: $("#maturityToDate").val(),
        fdType: $("#fixedDepositType option:selected").val(),
        fdNature: $("#fixedDepositNature option:selected").val()
    };
    $("#iframe").remove();
    $("#dashboardBodyMainDiv").append("<iframe id='iframe' "
            + "name='FDR Statement Report' title='FDR Statement Report' src=" +
            server_base_url + "FetchFdrRecords?fdrCriteria=" + encodeURI(
                    JSON.stringify(fdrProcessCriteria)) + " \n\
                    height='500px' width='100%'></iframe>");
        }
    }
    
    else{
        var fdrProcessCriteria = {
        fdFromDate: $("#fromDate").val(),
        fdToDate: $("#toDate").val(),
        fdMaturityFromDate: $("#maturityFromDate").val(),
        fdMaturityToDate: $("#maturityToDate").val(),
        fdType: $("#fixedDepositType option:selected").val(),
        fdNature: $("#fixedDepositNature option:selected").val()
    };
    $("#iframe").remove();
    $("#dashboardBodyMainDiv").append("<iframe id='iframe' "
            + "name='FDR Statement Report' title='FDR Statement Report' src=" +
            server_base_url + "FetchFdrRecords?fdrCriteria=" + encodeURI(
                    JSON.stringify(fdrProcessCriteria)) + " \n\
                    height='500px' width='100%'></iframe>");
    }

}
function checkFromDateAndToDateForFDRReport() {
    var fDate = $("#fromDate").datepicker("getDate");
    var tDate = $("#toDate").datepicker("getDate");
    var diff = new Date(tDate - fDate);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}

function checkFromDateAndToDate1() {
    var fDate1 = $("#maturityFromDate").datepicker("getDate");
    var tDate1 = $("#maturityToDate").datepicker("getDate");
    var diff1 = new Date(tDate1 - fDate1);
    var days1 = diff1 / 1000 / 60 / 60 / 24;
    return days1;
}
