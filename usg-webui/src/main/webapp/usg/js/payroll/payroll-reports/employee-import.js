/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayEmployeeImportPage(divid){
    createimportEmployeeForm(divid);
}
function createimportEmployeeForm(divid){
     //Start Title Bar
    $("#dashboardTitleMainDiv").text("").append("Payroll Reports");
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> ><label><a href="javascript:payrollReportsMenuTabs()">Employee Import</label>');
    //End  Title Bar

    //Start outbox div 
    $("#" + divid).text("").append("<div id='employeeimportMainDivId' />");
    $("#employeeimportMainDivId").text("").append("<div id='employeeimportmainTabMenu'/>");
    $("#employeeimportmainTabMenu").append("<div id='employeeimporttableHeader'/>");
    $("#employeeimporttableHeader").append("<div id='employeeimportFirstPanel' class='panel panel-blue' />");
    $("#employeeimportFirstPanel").append("<div id='employeeimportfirstPanelHeading' class='panel-heading' />");
    $("#employeeimportfirstPanelHeading").append("<h4 id='employeeimporttableHeader1' class='panel-title' />");
    $("#employeeimporttableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Employee Import</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colEmpImport'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#employeeimportFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#colEmpImport").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colEmpImport span").hasClass("glyphicon-minus-sign")) {
            $("#colEmpImport").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colEmpImport").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='employeeimportpanelMainBody' class = 'panel-body' />");
      $("#employeeimportpanelMainBody").append("<div id='employeeimportformDiv' class='form-horizontal'>");
    
   
    $("#employeeimportformDiv").append("<div id='employeeimportpanelRow' class='row' />");
    $("#employeeimportpanelRow").append("<div id='pregsuccessBefore'></div>");
    $("#employeeimportpanelRow").append("<div id='employeeimportFieldGroup' class='form-group' />");
    //End outbox div 

    $("#employeeimportformDiv").append('<div id="employeeimportFormFormGroupDiv" class="form-group"><label for="employeeimportFormName" class="col-lg-3 control-label" required>Select Employee File<span class="require">*</span></label>')
    $("#employeeimportFormFormGroupDiv").append('<div class="col-lg-7"><input type="file" id="importFile" class="form-control" accept=".xls,.xlsx"  placeholder="Please choose the File xls Format  only"></input><label id="importError"></label>');
    
   // $("#employeeimportFormFormGroupDiv").append("<div id='panelRow1' class='row' />");

    $("#employeeimportFormFormGroupDiv").append("<div class='col-lg-2'><a href='../../usg/DownloadFiles/Sample_Structure.xlsx' download><u><span style='color:green'>Sample Template</span></a>");

    
    $("#employeeimportformDiv").append('<div class="col-xs-12" id="buttonRow"><center><input type="hidden" id="idValue"><button id="employeeimpotButton" value="save"  onclick="importEmployeeFileValidation()" type="submit" class="btn btn-success bn">import</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\
    <button type="button" id="employeeimportFormResetButton" class="btn btn-warning bn" onclick="importResetButton()">Reset</button> </center></div>');

}

$('input[type=file]').change(function () {
var val = $(this).val().toLowerCase();
var regex = new RegExp("(.*?)\.(xlsx)$");
 if(!(regex.test(val))) {
 $(this).val('');
alert('Please select correct file format');
} });

function employeeimportFormResetButton(){
    $('#importFile').val('');
}

function importEmployeeFileValidation(){
    $("#employeeimpotButton").attr('disabled', true);
   if ($('#importFile').get(0).files.length === 0) {
  //  addSomeClass("FieldDivImport", "has-error");
    displaySmallErrorMessages("importError", "Please choose File .");
    $("#employeeimpotButton").attr('disabled', false);
    return false;
   }
        
    var form_data = new FormData();
    var importFileCount = document.getElementById("importFile").files.length;
    for (i = 0; i < importFileCount; i++) {
        form_data.append("file", document.getElementById("importFile").files[i]);
    }
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", server_base_url+"/payroll/employee/Import", true);
    if (importFileCount == 1) {
        xhr.send(form_data);
    } else {
        xhr.send();
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var responseMsg=xhr.responseText;
                if(responseMsg == success){
                    $("#employeeimpotButton").attr('disabled', false);
                 $("#pregsuccessBefore").append("<span style='color:green;'><center><strong>Successfully Saved</strong></center><br><br></span>");
             setTimeout(function () {
                $("#pregsuccessBefore").text("");
             }, 2100);
                 $('#importFile').val('');
                }else if(NoData==NoData){
                    $("#employeeimpotButton").attr('disabled', false);
                 displaySmallErrorMessagesInRed("pregsuccessBefore", "Incorrect Data" + "<br/><br/>");
                 $('#importFile').val('');
             }
             else{
                 $("#employeeimpotButton").attr('disabled', false);
                  displaySmallErrorMessagesInRed("pregsuccessBefore", "Failure" + "<br/><br/>");
                  $('#importFile').val('');
             }
               }
            }
           
        
    }
       
       }


