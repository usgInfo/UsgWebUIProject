/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function displayPensionBankDetails() {
    createPensionBankDetailsForm();
}

function createPensionBankDetailsForm() {

    $("#dashboardTitleMainDiv").text("").append("Pension");

    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>><label><a href="javascript:pensionReports()">Pension Reports>></a></label>Pension Bank List</label>');

    $("#dashboardBodyMainDiv").append("<div id='processpensionMainDiv' class='row' />");
    $("#dashboardBodyMainDiv").append("<div id='processpensionReportMainDiv' class='row' />");
    $("#processpensionMainDiv").append("<div id='processpensioncolumnDiv' class='col-lg-12'  style='width:100%;' >");
    $("#processpensionMainReportDiv").append("<div id='processpensioncolumnDiv' class='col-lg-12'  style='width:100%;' >");

    $("#processpensioncolumnDiv").append("<div id='processpensionpanelDiv' class='panel panel-blue'>");
    $("#processpensionpanelDiv").append("<div id='processpensionpanelHeadingDiv' class='panel-heading'>");
    $("#processpensionpanelHeadingDiv").append("<h4 id='processpensionHeader' class='panel-title' />");

    $("#processpensionHeader").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Pension Bank List</center>");
    $("#processpensionHeader").append("<div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colpensionbanklistscreen'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#processpensionpanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");

    addToggleToId('colpensionbanklistscreen', 'collapseOne2');


    $("#collapseOne2").append("<div id='processpensionpanelBodyDiv' class='panel-body pan'>");

    $("#processpensionpanelBodyDiv").append("<div id='processpensionRowPanel' class='row'>");
    $("#processpensionRowPanel").append("<div id='pregsuccessBefore'/>");


    $("#processpensionRowPanel").append("<div id='FieldGroup' class='form-group' />");
    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup").append("<input type='hidden' id='Id' >");

    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "", "empcode", "Enter Employee Code"));
    $("#Row1Col2").append(getLabel_InputWithSpan("Employee Name", "", "empname", "Enter Employee Name"));

    getTwoColumnInRow("FieldGroup", "Row2", "Row1Co21", "Row1Co22");
    $("#Row1Co21").append(getLabel("Department", "") + "" + getDropDown("department"));
    $("#Row1Co22").append(getLabel("Designation", "") + "" + getDropDown("designation"));

    getTwoColumnInRow("FieldGroup", "Row3", "Row1Co31", "Row1Co32");
    $("#Row1Co31").append(getLabel("Grade", "") + "" + getDropDown("grade"));
    $("#Row1Co32").append(getLabel_InputWithSpan("Row In a Page", "", "rows", "Enter number of rows"));

    getTwoColumnInRow("FieldGroup", "Row5", "Row1Co51", "Row1Co52");
    $("#Row1Co51").append(getLabel("Year", "required") + "" + getDropDown("year"));
    $("#Row1Co52").append(getLabel("Month", "required") + "" + getDropDown("month"));


    getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
    $("#Row6Col1").append('<label class="control-label">Pay Mode<span class=""></label>');
    $("#Row6Col1").append('<div class=""></div>');
    $("#Row6Col1").append('<div id="DAFieldDiv" class="">Bank<input type="radio" name="payMode" id="bank" value="bank" style="margin-left:20px;margin-right:20px;">Cheque<input type="radio" name="payMode" id="cheque" value="cheque" style="margin-left:20px;margin-right:20px">Draft<input type="radio" name="payMode" id="draft" value="draft" style="margin-left:20px;"></div>');
    $("#Row6Col2").append(getLabel("Bank Name", "") + "" + getDropDown("bankName"));
    getAllPensionBank();

    $("#FieldGroup").append("<div id='panelRow7' class='row' />");
    $("#panelRow7").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='viewPensionBankList()'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetPensionData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
    $("#billno").prop("disabled", true);
    $("#month").append("<option value='0' selected>--Select Month--</option><option  value='1'>Janaury</option> <option value='2'>February</option> <option value='3'>March</option> <option value='4'>April</option> <option value='5'>May</option> <option value='6'>June</option> <option value='7'>July</option> <option value='8'>August</option> <option value='9'>September</option> <option value='10'>October</option> <option value='11'>November</option> <option value='12'>December</option>");
    fetchallPensionProcessDepartment();
    fetchallPensionProcessDesignation();
    fetchallPensionProcessGrade();
    //fetchallPensionProcessemployeeCode();
    //fetchallPensionProcessBillNo();
    processPensionyear();

    $("#department").attr("onchange", "loadEmpcodeSearchFunctionalityforempPension()");
    $("#empcode").attr("onkeypress", "getDetails()");

}

function getDetails()

{
    //alert();
    if (event.which == 13) {
        getEmpDemoDetailsForPension()

    }
}

function viewPensionBankList() {
    var bankName = $("#bankName").val();
    var empcode = $("#empcode").val();
    var month = $("#month").val();
    var year = $("#year").val();

    $("#processpensionReportMainDiv").text("").append("<iframe id='iframe'  src=" + server_base_url + '/pension/master/PensionReports/PensionReportBankList?bankName=' + bankName + '&empcode=' + empcode + '&month=' + month + '&year=' + year + " height='500px' width='100%'></iframe>");
}

function getAllPensionBank() {
    $.get(server_base_url + "/pension/master/PensionBank/ViewList", {
    }).done(function (bdata) {
        $("#bankName").append("<option value=''>----Select Pension Bank----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#bankName").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].bankName + "</option>");

        }
    });
}

//function viewPensionBankList(){
//    $.get(server_base_url + "/pension/master/PensionReports/PensionReportBankList", {
//        bankName: $("#bankName").val(),
//        empcode: $("#empcode").val(),
//        month: $("#month").val(),
//        year: $("#year").val()
//    }).done(function(bdata) {
//        
//    
//    });
//}
