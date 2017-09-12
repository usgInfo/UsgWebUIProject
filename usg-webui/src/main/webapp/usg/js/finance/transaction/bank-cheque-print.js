/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function bankChequePrintmaster1(divId)
{
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeTransactionMenuTabs()">Transaction Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="bankChequePrintmaster1()">Bank Cheque Print</a>');

    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").text("").append("<div id='mainTabMenuModal'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvSearchBankCheque)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Bank Cheque Print</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='bankChequePrintColDiv'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        //bankChequePrintColDiv
        $("#bankChequePrintColDiv").click(function () {
            $("#collapseOne2").toggle();
            if ($("#bankChequePrintColDiv span").hasClass("glyphicon-minus-sign")) {
                $("#bankChequePrintColDiv").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#bankChequePrintColDiv").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
//    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        //bank name branch name
        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        $("#FieldGroup").append("<input type='hidden' id='bid' >");

        $("#FieldGroup").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="bankChequePrintAgainst">Bank Cheque Print Against <span class="require">*</span></label><select class="form-control" name="bankChequePrintAgainst" id="bankChequePrintAgainst"></select>'
                + '</div><div class="form-group col-lg-6"><label for="chequePayOrderNumber">Cheque Pay Order Number <span class="require">*</span></label><input type="text" class="form-control" id="chequePayOrderNo"></div></div>');

        $("#FieldGroup").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="fromDate">From Date </label><input type="text" class="form-control" id="fromDate" placeholder="MM/DD/YYYY"><span id="fromDateErr" class="text-danger"></span></div>'
                + '<div class="form-group col-lg-6"><label for="toDate">To Date </label><input type="text" class="form-control" id="toDate" placeholder="MM/DD/YYYY"><span id="toDateErr" class="text-danger"></span></div></div>');
        $("#fromDate").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy",
            yearRange: '-0:+50',
            minDate: '+0D'
        });

        $("#toDate").datepicker({
            changeYear: true,
            changeMonth: true,
            dateFormat: "dd/mm/yy",
            yearRange: '-0:+50',
            minDate: '+0D'
        });

        $("#FieldGroup").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="bank">Bank</label><select class="form-control" name="bank" id="bank"></select>');

        $("#FieldGroup").append("<div class='form-group' id='changeButton'><center><button onclick=bankChequePrintValidation() id='postSearch' class='btn btn-success' style='height:40px;width:80px'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetButton' onclick=wipeAllBankData() class='btn btn-warning' style='height:40px;width:80px'>Reset</button></center></div>");

        $("#mainTabMenu").append("<div id='tableHeaderForList'/>");

        //viewBankList("tableHeaderForList");
        $("#tableHeaderForList").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeadersforlist' class='panel-title' />");
        $("#firstHeadersforlist").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3' ><center>List of Bank Cheque Detail(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='listOfBankChequeDetailsCol'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        //listOfBankChequeDetailsCol
        $("#listOfBankChequeDetailsCol").click(function () {
            $("#collapseOne3").toggle();
            if ($("#listOfBankChequeDetailsCol span").hasClass("glyphicon-minus-sign")) {
                $("#listOfBankChequeDetailsCol").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#listOfBankChequeDetailsCol").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        viewBankChequePrintList('listpanelRow');
    }
}

function bankChequePrintValidation() {

}
function viewBankChequePrintList(DivId) {

}