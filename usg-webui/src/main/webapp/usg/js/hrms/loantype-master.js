/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Display End LoanType List
function dispalyhrmsCommonLoanType() {
    createLoanTypeForm();
    fetchAllLoanTypeMasterList();
}
//Display End Loan List

//creat Form Start
function createLoanTypeForm() {
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Common Master</a></label> >><label>Loan Type Master</label>');
//     $("#dashboardTitleMainDiv").text("").append("HRMS");
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>><label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> ><label>Loan Type Master</label>');
     
    
    $("#dashboardBodyMainDiv").text("").append('<div id="loantypeMainDiv" class="row"/>');
    $("#loantypeMainDiv").text("").append("<div id='loantypecolumnDiv' class='col-lg-12'>");
    $("#loantypecolumnDiv").append("<div id='loantypepanelDiv' class='panel panel-blue'>");
    $("#loantypepanelDiv").append("<div id='loantypepanelHeadingDiv' class='panel-heading'>");
    $("#loantypepanelHeadingDiv").append("<h4 id='tableHeader1' class='panel-title' />");
     $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Loan Type Master</center>");
    $("#loantypepanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='loantypepanelBodyDiv' class='panel-body pan'>");
    $("#loantypepanelBodyDiv").append("<div id='loantypeformDiv' class='form-horizontal'>");
    $("#loantypeformDiv").append("<div id='loantypeformBodyDiv' class='form-body pal'>");
     $("#loantypeformBodyDiv").append("<div id='loantypeRowPanel' class='row'>");
    $("#loantypeRowPanel").append("<center><div id='pregsuccessBefore'/></center>");
    $("#loantypeformBodyDiv").append('<div class="form-group" id="loantypeFormGroupDiv"><label for="loantypeName" class="col-lg-3 control-label">Loan Type<span class="require">*</span></label>')
    $("#loantypeFormGroupDiv").append('<div class="col-lg-9"><input id="loantypeName" name="loantypeName" type="text" placeholder="Loan Type" class="form-control" onkeypress="return validatealphanumeric(event)"><span id="loantypeError" class="text-danger"></span></div>');
    $("#loantypeformBodyDiv").append('<center><input type="hidden" id="idValue"><button id="loantypeSaveandUpdateButton" value="save" onclick="loantypeValidation()" type="submit" class="btn btn-success bn">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\
    <button type="button" id="loantypeResetButton" class="btn btn-warning bn" onclick="resetLoanTypeMasterValues()">Reset</button></center></div>');
   $("input").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
                 e.preventDefault();
    });
}
//End create Form

//create Loan Type table
function fetchAllLoanTypeMasterList() {
      $("#loantypeMasterTableListPanel").remove();
    $("#loantypecolumnDiv").append("<div id='loantypeMasterTableListPanel' class='panel panel-blue'/>");
    $("#loantypeMasterTableListPanel").append("<div id='loantypeMasterTableHeading' class='panel-heading' />");
    $("#loantypeMasterTableHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Loan Types</center>");
    $("#loantypeMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='loantypeListPanelTableMainDiv' class = 'panel-body' />");
    $("#loantypeListPanelTableMainDiv").append("<div id='loantypeListPanelRow' class = 'row' />");
    $("#loantypeListPanelTableMainDiv").append("<center><div  id='tablesuccessBefore'/><center>");
    $("#loantypeListPanelTableMainDiv").append("<div id='loantypeMastertableresponsiveDiv' class='table-responsive' />");
    $("#loantypeMastertableresponsiveDiv").append('<table id="example1" class="table table-striped table-bordered table-hover">');

    //Start Header
    $("#example1").append("<thead class=''><tr>"

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Loan Type</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>"
            + "</tr></thead>");
    //End Header
    $.get(server_base_url + "hrms/Common/LoanType/View", {
    }).done(function (pdata) {
        if (pdata == fail) {
          //  displaySmallErrorMessagesInRed("tablesuccessBefore", "" + failMessage + "<br /><br />");

        } else if (pdata == unauthorized) {
            //displaySmallErrorMessagesInRed("tablesuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            
        } else if (pdata == invalidSession) {
            callSessionTimeout();
        } else if (pdata == statusException) {
            //displaySmallErrorMessagesInRed("tablesuccessBefore", "" + statusExceptionMessage + "<br /><br />");
        } else if (pdata == null) {
            //displaySmallErrorMessagesInRed("tablesuccessBefore", "No User available" + "<br/><br/>");
        } else{
        var sno = 0;

        $("#example1").append("<tbody id='LoanTypeTableBody' class='table-striped table-bordered' />");

        for (var i = pdata.length - 1; i >= 0; i--) {
            sno++;
            $("#LoanTypeTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                    + "<td>" + sno + "</td>"
                    + "<td style='cursor:pointer;'>" + pdata[i].loanType + "</td>"
                    + "<td> <a href='javascript:void(0);'  onclick=updateLoanType('" + pdata[i]._id.$oid + "','" + encodeURI(pdata[i].loanType) + "') class='anchor_edit'><i class='fa fa-edit'></i>&nbsp;&nbsp;<span>Edit</span></a></td>"
                    + "<td><a href='javascript:void(0);'   onclick=deletePopUp('deleteLoanTy','fetchAllLoanTypeMasterList','" + pdata[i]._id.$oid + "') class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
            }
        
    
        }
        $("#example1").dataTable();
        
    });
//    setTimeout(function () {
//        $("#tablesuccessBefore").text("");
//    }, 3000);
}
//End Display Table

//Start Validation
function loantypeValidation() {
    var result=1;
    loantypeDisableButton();
    var loanTypeName = $("#loantypeName").val();
   
    if (loanTypeName == undefined || loanTypeName == null || loanTypeName == "") {
        loantypeEnableButton();
       // $("#loantypeFormGroupDiv").addClass("form-group state-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please enter Loan Type");
        $("#loantypeName").focus();
        return false;
    } 
     
        if(result != 0){
    var buttonValue = $("#loantypeSaveandUpdateButton").val();
    var saveButton = "save";
    var updateButton = "update";
    if (buttonValue == saveButton) {
        saveLoanTypeData();
    } else if (buttonValue == updateButton) {
        saveUpdateLoanTypeData();
    }
        }
}
//End Validation

//Start Save Function
function saveLoanTypeData()
{
    var loantype = $("#loantypeName").val();

    $.post(server_base_url + "hrms/Common/LoanType/Save", {
        loantype: loantype
    }).done(function (data) {

           if (data == fail) {
            loantypeEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", failMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            loantypeEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == invalidSession) {
               loantypeEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
               loantypeEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == null) {
           loantypeEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");
        }  else {
            //dispalyhrmsCommonLoanType();
             displaySuccessMessages("pregsuccessBefore", successMessage, "");
             
            //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+successMessage+"</strong></center></span><br><br>");
            setTimeout(function () {
        //$("#pregsuccessBefore").text("");
        dispalyhrmsCommonLoanType();
    }, 4000);
        }
    });

}
//End Save Function

//Start Update Button



function updateLoanType(id, name)
{
//    createLoanTypeForm();
//    $("#loantypeMasterTableListPanel").remove();
//    fetchAllLoanTypeMasterList();
$("#pregsuccessBefore").text("");
    var loanType = decodeURI(name);

    $("#loantypeName").val(loanType);

    $("#loantypeSaveandUpdateButton").text("Update");
    $("#loantypeSaveandUpdateButton").val("update");
    $("#loantypeResetButton").text("Back");
    $("#idValue").val(id);
}
function saveUpdateLoanTypeData()
{

    var updateloantype = $("#loantypeName").val();

    var id = $("#idValue").val();

    $.post(server_base_url + "hrms/Common/LoanType/Update", {
        updateloantype: updateloantype,
        id: id

    }).done(function (data) {

       if (data == fail) {
            loantypeEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", failMessage + "<br/><br/>");
        } else if (data == unauthorized) {
           loantypeEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == invalidSession) {
              loantypeEnableButton();
            callSessionTimeout();
        } else if (data == statusException) {
              loantypeEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == null) {
          loantypeEnableButton();
            displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");
        }  else {
           // dispalyhrmsCommonLoanType();
             displaySuccessMessages("pregsuccessBefore", updateMessage, "");
             //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+updateMessage+"</strong></center></span><br><br>");
            setTimeout(function () {
       dispalyhrmsCommonLoanType();
    }, 4000);
        
        }
    });

}
//End Update Button

//Start Delete Button
function deleteLoanTy(id)
{

   // if (confirm("Are you sure?")) {
        //$(this).closest('tr').remove();
        deleteLoanType(id);
   // }
}
function deleteLoanType(id)
{

    $.post(server_base_url + "hrms/Common/LoanType/Delete", {
        id: id
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("tablesuccessBefore", "" + failMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("tablesuccessBefore", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("tablesuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("tablesuccessBefore", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("tablesuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displaySmallErrorMessagesInRed("tablesuccessBefore", "" + statusExceptionMessage + "<br /><br />");
        } else {
           displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
              //$('#loantypeMasterTableListPanel').css({'display': 'block', opacity: 0.7,'background': '#efefef'});
            //$("#tablesuccessBefore").append("<span style='color:green;'><center><strong>"+deleteMessage+"</strong></center></span><br><br>");
           setTimeout(function () {
              
          dispalyhrmsCommonLoanType();
    }, 4000);
        }
    });
}
//End Delete Button

//Start Reset Button
function resetLoanTypeMasterValues() {
    $("#loantypeName").val("");
    $("#loantypeSaveandUpdateButton").text("Save");
    $("#loantypeSaveandUpdateButton").val("save");
    $("#loantypeResetButton").text("Reset");

}
//End Reset Button

function loantypeDisableButton(){
     
            $("#loantypeSaveandUpdateButton").attr('disabled', true);
            $("#loantypeResetButton").attr('disabled', true);
}
function loantypeEnableButton(){
       $("#loantypeSaveandUpdateButton").attr('disabled', false);
       $("#loantypeResetButton").attr('disabled', false);
}