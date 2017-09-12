/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function daOrRaRateMaster()
{
    scrolupfunction();
    $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=daOrRaRateMaster()>DA/MA Rate Master</a>');
    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateDaMaRate)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>DA/MA Rate Master</center>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");


        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");

        
        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");

        
        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col2").append('<label class="control-label">Defined Rate For:<span class="require"> *</span></label>');
        $("#Row1Col2").append('<div class="bankname"></div>');
        $("#Row1Col2").append('<div id="DAFieldDiv" class="">DA<input type="radio" name="ratedDefinedFor" id="da" value="DA" style="margin-left:20px;margin-right:20px;">MA<input type="radio" name="ratedDefinedFor" id="ma" value="MA" style="margin-left:20px;"></div>');
        $("#Row1Col1").append(getLabel_InputWithSpan("Paid Rate:", "required", "paidRate", "Enter Paid Rate ", "onkeypress='return numericVal(event)'"));
        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append('<label class="control-label">Effective From Date:<span class="require"> *</span></label>');
        $("#Row2Col1").append('<div class="bankname"></div>');
        $("#Row2Col1").append('<div id="DAFieldDiv" class=""><input type="text" class="form-control" onfocus="blur();" size="50" name="effFromDate" id="effFromDate"  placeholder="Effective From Date" ></div>');
       
        
       //$("#Row2Col1").append('span id="effFromDateErr"></span');
        $("#effFromDate").datepicker({
            format: "dd/mm/yyyy",
            autoclose: true
            
        });
        $("#Row2Col2").append('<label class="control-label">Effective To Date:<span class="require"> *</span></label>');
        $("#Row2Col2").append('<div class="bankname"></div>');
        $("#Row2Col2").append('<div id="DAFieldDiv" class=""><input type="text"  class="form-control" name="effToDate" onfocus="blur();" size="50"  placeholder="Effective To Date" id="effToDate" ></div>');
        //  $("#Row2Col2").append('span id="effToDateErr"></span');
        //$("#effToDate").datepicker();
        
        $("#effToDate").datepicker({
            format: "dd/mm/yyyy",
            autoclose: true
           
        });

        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel_InputWithSpan("Actual Rate: ", "required", "actualRate", "Enter Grade Actual Rate", "onkeypress='return numericVal(event)'"));
        $("#Row3Col2").append("<label class='control-label'>Is Pension Used?</label>");
        $("#Row3Col2").append('<div class="bankname"></div>');
        $("#Row3Col2").append("<input type='checkbox' id='isPensionUsed' name='isPensionUsed' value='YES' > ");
        $("#FieldGroup").append("<div id='panelRow7' class='' />");
        $("#panelRow7").append("<center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='saveDAData()'>Save</button>&nbsp;&nbsp;&nbsp;<button type='button' onclick='resetDaData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center>");
    }
    if (checkUserPrivelege(pvViewDaMaRate)) {
        viewDA();
    }

}

function saveDAData() {
    if (checkUserPrivelege(pvCreateDaMaRate)) {
        var paidRate = $("#paidRate").val();
        var actualRate = $("#actualRate").val();
        var effFromDate = $("#effFromDate").val();
        var effToDate = $("#effToDate").val();
        var isPensionUsed = $("#isPensionUsed").val();
        $("#pregsuccessBefore").text("");
        $("#paidRateErr").text("");
        $("#actualRateErr").text("");
        removeSomeClass("Row1Col1", "has-error");
        removeSomeClass("Row3Col1", "has-error");
        var definedRate = "";

        if ($('#da').is(':checked')) {
            definedRate = "DA";

        } else if ($('#ma').is(':checked')) {
            definedRate = "MA";

        }

        if (definedRate == "" || definedRate == "undefined" || definedRate == null || paidRate == "" || paidRate == "undefined" || actualRate == "" || actualRate == "undefined" || effFromDate == "" || effFromDate == "undefined" || effToDate == "" || effToDate == "undefined") {
            $("#pregsuccessBefore").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
            return false;
        } else
        {
            var flag = "y";
            if (paidRate != "") {
                // alert();
                if (!paidRate.match(numbervalidation()))
                {
                    addSomeClass("Row1Col1", "has-error");
                    $("#paidRate").focus();
                    $("#paidRateErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Paid Rate.</span>");
                    flag = "n";
                } else
                {
                    $("#paidRateErr").text("");
                    removeSomeClass("Row1Col1", "has-error");
                    //sendSectionData();
                }
            }
            if (actualRate != "") {
                // alert();
                if (!actualRate.match(numbervalidation()))
                {
                    addSomeClass("Row3Col1", "has-error");
                    $("#actualRate").focus();
                    $("#actualRateErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Actual Rate.</span>");
                    flag = "n";
                } else
                {
                    $("#actualRateErr").text("");
                    removeSomeClass("Row3Col1", "has-error");
                    //sendSectionData();
                }
            }
            if (flag == "n")
            {
                return false;
            }
        }
        //alert(definedRate+"---"+isPensionUsed+effFromDate+effToDate+actualRate+paidRate);
    //effFromDate = formatDate(effFromDate);
    // effToDate = formatDate(effToDate);
        //alert(definedRate+"---"+isPensionUsed+effFromDate+effToDate+actualRate+paidRate);
        if ($('#isPensionUsed').is(':checked')) {
            isPensionUsed = "YES";
        } else
        {
            isPensionUsed = "";
        }
        var DAjson = {
            paidRate: paidRate,
            actualRate: actualRate,
            effFromDate: effFromDate,
            effToDate: effToDate,
            isPensionUsed: isPensionUsed,
            definedRate: definedRate
    
    };
        DAjson = JSON.stringify(DAjson);

    $.post(server_base_url + "/hrms/salary/DA/Save", {
        DAMaster: DAjson,
        userid: getUserSessionElement("userId")
    }).done(function (data) {
    
        if (data == validateDateValue) {
             displaySuccessMessages("pregsuccessBefore", "Effective To Date Should be Greater than Effective From Date", "");
        } else if (data == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (data.statuscode == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else if (data == duplicate_Message) {
            displayErrorMessages("pregsuccessBefore", "" + existed + "<br/></br>");
             setTimeout(function () {
                daOrRaRateMaster();
            }, 500);
        } else if (data != null) {
            $("#paidRate").prop("disabled", true);
            $("#actualRate").prop("disabled", true);
            $("#effFromDate").prop("disabled", true);
            $("#effToDate").prop("disabled", true);
            $("#isPensionUsed").prop("disabled", true);
            $("#definedRate").prop("disabled", true);
            $("#saveupdatebutton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function () {
                daOrRaRateMaster();
            }, 4000);

            } else {
                displaySmallErrorMessagesInRed("pregsuccessBefore", failMessage, "");
            }
        });
        
    }
}
function viewDA() {
    
    if (checkUserPrivelege(pvViewDaMaRate)) {
        $("#tableHeader").append("<div id='maritalListPanel1' />");
        $("#maritalListPanel1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List Of DA/MA Defined Rate(s)</center>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body  table-responsive' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'>");
        $("#listpanelRow").append("<div id='DASubDiv1' class = 'panel panel-primary-head'></div>");
        $("#DASubDiv1").append("<table id='DATable' class='table table-striped table-bordered'></table>");
        // pqrs table header
        $("#DATable").append("<thead class=''><tr id='daRaRateMasterTableHeadId'>"
                //   + "<th style='min-width:15%;width:auto;'><i class='fa' style='font-size:21px;'></i> Sellect all</th>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Rate Defined For</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Paid Rate</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Actual Rate</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Effective From Date</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Effective TO Date</th>");
        if (checkUserPrivelege(pvUpdateDaMaRate)) {
            $("#daRaRateMasterTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteDaMaRate)) {
            $("#daRaRateMasterTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>");
        }

        // var religion = $("#religionName").val();
        $.get(server_base_url + "/hrms/salary/DA/ViewList", {
        }).done(function(pdata) {
            
            
            
            if (pdata == fail) {

                displayLargeErrorMessages("ErrorDiv", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("ErrorDiv", "" + failMessage + "<br /><br />");
            } else if (pdata.statuscode == unauthorized) {
                displayLargeErrorMessages("ErrorDiv", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("ErrorDiv", "" + unauthorizedMessage + "<br /><br />");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == statusException) {
                displayLargeSuccessMessages("ErrorDiv", "" + NoDataFound + "<br /><br />");
                displayLargeSuccessMessages("ErrorDiv", "" + NoDataFound + "<br /><br />");
            } else {
                if (pdata != null) {

                    if (pdata.length > 0) {

                        var sno = 0;
                        // pqrs table body
                        $("#DATable").append("<tbody id='DATableBody' class='table-striped table-bordered' />");

                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;

                            if (pdata[i].isPensionUsed == "Yes") {
                                $("#updateisPensionUsed").prop("checked", true);

                            }

                            var DAjson = {
                                daid: pdata[i]._id.$oid,
                                definedRate: pdata[i].definedRate,
                                paidRate: pdata[i].paidRate,
                                actualRate: pdata[i].actualRate,
                                effFromDate: pdata[i].effFromDate,
                                effToDate: pdata[i].effToDate,
                                isPensionUsed: pdata[i].isPensionUsed


                            }
                          
                          
                          
                          //alert(pdata[i].effFromDate);
                        //alert(pdata[i].effToDate);
                            DAjson = JSON.stringify(DAjson);
                            $("#DATableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].definedRate + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].paidRate + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].actualRate + "</td>"
                                   + "<td style='cursor:pointer;'>" + pdata[i].effFromDate + "</td>"
                                + "<td style='cursor:pointer;'>" + pdata[i].effToDate + "</td>");
                            if (checkUserPrivelege(pvUpdateDaMaRate)) {
                                $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editDA('" + encodeURI(DAjson) + "','" + pdata[i]._id.$oid + "')>" + '  <i class="fa fa-edit"></i>&nbsp;&nbsp;<a class="anchor_edit" style="align:center;"  >Edit</a>' + "</td>");}
                            if (checkUserPrivelege(pvDeleteDaMaRate)) {
                                $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteDAData','viewDA','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete"  style="align:center;" >Delete</a>' + "</td>");
                            }
                        }
                        $("#DATable").DataTable({
                            paging: true
                        });
                    }
                }

            }
        });
    }

}
function editDA(obj, id)
{
    if (checkUserPrivelege(pvUpdateDaMaRate)) {
        $('input[name=ratedDefinedFor]').attr('checked', false);
        $("#da").val("");
        $("#ma").val("");
        $("#paidRate").val("");
        $("#actualRate").val("");
        $("#effFromDate").val("");
        $("#effToDate").val("");
        $("#isPensionUsed").val("");


        $("#pregsuccessBefore").text("");
        $("#paidRateErr").text("");
        $("#actualRateErr").text("");
        removeSomeClass("Row1Col1", "has-error");
        removeSomeClass("Row3Col1", "has-error");

        if (obj == null || obj == "" || obj == undefined) {
            return false;
        }
        obj = JSON.parse(decodeURI(obj));

        if (obj.definedRate == 'DA') {

            $("#da").prop("checked", true);
        } else if (obj.definedRate == 'MA')
        {
            $("#ma").prop("checked", true);
        }
        var isPensionUsed1 = obj.isPensionUsed;
        //alert(isPensionUsed1)
        if (isPensionUsed1 == "YES")
        {
            $("#isPensionUsed").prop("checked", true);
            $("#isPensionUsed").val("YES");
        }
        //alert(obj.disciplineName);
        $("#paidRate").val(obj.paidRate);
        $("#actualRate").val(obj.actualRate);
        $("#effFromDate").val(obj.effFromDate);
        $("#effToDate").val(obj.effToDate);


        $("#pregsuccessBefore").text("");
        $("#paidRate").prop("readonly", false);
        $("#actualRate").prop("readonly", false);
        $("#effFromDate").prop("readonly", false);
        $("#effToDate").prop("readonly", false);
        $("#isPensionUsed").prop("readonly", false);
        $("#da").prop("readonly", false);
        $("#ma").prop("readonly", false);
        $("#panelRow7").text("").append("<center><button id='updateButton' onclick=updateDaOrMaDetails('" + id + "') class='btn btn-success mr5'>Update</button>&nbsp&nbsp&nbsp;<button  id='ddoUpdateReset' class='btn btn-warning mr5'  onclick='daOrRaRateMaster()'>Back</button></center>");
    }
}

function updateDaOrMaDetails(id)
{
    if (checkUserPrivelege(pvUpdateDaMaRate)) {
        
        
        var paidRate = $("#paidRate").val();
        var actualRate = $("#actualRate").val();
        var effFromDate = $("#effFromDate").val();
        var effToDate = $("#effToDate").val();
        var isPensionUsed = $("#isPensionUsed").val();
        //alert("---"+isPensionUsed+effFromDate+effToDate+actualRate+paidRate);
        $("#pregsuccessBefore").text("");
        $("#paidRateErr").text("");
        $("#actualRateErr").text("");
        removeSomeClass("Row1Col1", "has-error");
        removeSomeClass("Row3Col1", "has-error");
        var definedRate = "";

        if ($('#da').is(':checked')) {
            definedRate = "DA";

        } else if ($('#ma').is(':checked')) {
            definedRate = "MA";

        }


        if (definedRate == "" || definedRate == "undefined" || definedRate == null || paidRate == "" || paidRate == "undefined" || actualRate == "" || actualRate == "undefined" || effFromDate == "" || effFromDate == "undefined" || effToDate == "" || effToDate == "undefined") {
            $("#pregsuccessBefore").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
            return false;
        } else
        {
            var flag = "y";
            if (paidRate != "") {
                // alert();
                if (!paidRate.match(numbervalidation()))
                {
                    addSomeClass("Row1Col1", "has-error");
                    $("#paidRate").focus();
                    $("#paidRateErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Paid Rate.</span>");
                    flag = "n";
                } else
                {
                    $("#paidRateErr").text("");
                    removeSomeClass("Row1Col1", "has-error");
                    //sendSectionData();
                }
            }
            if (actualRate != "") {
                // alert();
                if (!actualRate.match(numbervalidation()))
                {
                    addSomeClass("Row3Col1", "has-error");
                    $("#actualRate").focus();
                    $("#actualRateErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid Actual Rate.</span>");
                    flag = "n";
                } else
                {
                    $("#actualRateErr").text("");
                    removeSomeClass("Row3Col1", "has-error");
                    //sendSectionData();
                }
            }
            if (flag == "n")
            {
                return false;
            }
        }
        if ($('#isPensionUsed').is(':checked')) {
            isPensionUsed = "YES";
        } else
        {
            isPensionUsed = "";
        }
        var DAjson = {
            paidRate: paidRate,
            actualRate: actualRate,
            effFromDate: effFromDate,
            effToDate: effToDate,
            isPensionUsed: isPensionUsed,
            definedRate: definedRate

        };
        DAjson = JSON.stringify(DAjson);

        $.post(server_base_url + "/hrms/salary/DA/Update", {
            updateDAMaster: DAjson,
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function(data) {

//alert(data);
            if (data == fail) {
                displaySmallErrorMessagesInRed("pregsuccessBefore", "" + failMessage + "<br /><br />");
                displaySmallErrorMessagesInRed("pregsuccessAfter", "" + failMessage + "<br /><br />");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
                displaySmallErrorMessagesInRed("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
                displaySmallErrorMessagesInRed("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        }else if (data == duplicate_Message) {
            displaySuccessMessages("pregsuccessBefore", "" + existed + "<br/></br>");
             setTimeout(function () {
                daOrRaRateMaster();
            }, 500);
        }  else if (data != null) {

            $("#paidRate").prop("disabled", true);
            $("#actualRate").prop("disabled", true);
            $("#effFromDate").prop("disabled", true);
            $("#effToDate").prop("disabled", true);
            $("#isPensionUsed").prop("disabled", true);
            $("#definedRate").prop("disabled", true);

            $("#saveupdatebutton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function () {
                daOrRaRateMaster();
            }, 4000);

            } else {
                displaySmallErrorMessagesInRed("pregsuccessBefore", failMessage, "");
            }
        });
        
    }
}
function deleteDA(id) {
    if (checkUserPrivelege(pvDeleteDaMaRate)) {
        if (confirm("Are you sure?")) {
            $(this).closest('tr').remove();
            deleteDAData(id);
        }
    }
}


function deleteDAData(id) {
    if (checkUserPrivelege(pvDeleteDaMaRate)) {
        $("#pregsuccessBefore").text("");
        $.post(server_base_url + "/hrms/salary/DA/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
    }).done(function (data) {

            if (data == fail) {
                displayLargeErrorMessages("ErrorDiv", "" + failMessage + "<br /><br />");
                displayLargeErrorMessages("ErrorDiv", "" + failMessage + "<br /><br />");
            } else if (data.statuscode == unauthorized) {
                displayLargeErrorMessages("ErrorDiv", "" + unauthorizedMessage + "<br /><br />");
                displayLargeErrorMessages("ErrorDiv", "" + unauthorizedMessage + "<br /><br />");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayLargeErrorMessages("ErrorDiv", "" + statusExceptionMessage + "<br /><br />");
                displayLargeErrorMessages("ErrorDiv", "" + statusExceptionMessage + "<br /><br />");

        }else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("cityListPanelMsgDiv", "This City  " + delete_map_message, "");
            setTimeout(function() {
                viewCity();
            }, 1000);
        } else {
            displaySuccessMessages("ErrorDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                viewDA();
            }, 4000);

            }
        });
    }
}
function resetDaData() {

    $('input[name=ratedDefinedFor]').attr('checked', false);
    $("#da").val("");
    $("#ma").val("");
    $("#paidRate").val("");
    $("#actualRate").val("");
    $("#effFromDate").val("");
    $("#effToDate").val("");
    var isPensionUsed = $("#isPensionUsed").val();
    if (isPensionUsed == "YES")
    {
        $("#isPensionUsed").prop("checked", false);
    }

    $("#pregsuccessBefore").text("");
    $("#paidRateErr").text("");
    $("#actualRateErr").text("");
    removeSomeClass("Row1Col1", "has-error");
    removeSomeClass("Row3Col1", "has-error");
    obj = JSON.parse(decodeURI(obj));

    $("#category").val(obj.category);
    $("#city").val(obj.city);
    $("#quarterNo").val(obj.quarterNo);
    $("#carpetArea").val(obj.carpetArea);
    $("#condition").val(obj.condition);
    $("#remarks").val(obj.remarks);

    $("#pregsuccessBefore").text("");
    $("#category").prop("readonly", false);
    $("#city").prop("readonly", false);
    $("#quarterNo").prop("readonly", false);
    $("#carpetArea").prop("readonly", false);
    $("#condition").prop("readonly", false);
    $("#remarks").prop("readonly", false);
    $("#panelRow7").text("").append("<center><button id='updateButton' onclick=updateQuarterDetails('" + id + "') class='btn btn-success'>Update</button>&nbsp&nbsp&nbsp;<button  id='ddoUpdateReset' class='btn btn-warning'  onclick='wipeAllQuarterData()'>Reset</button></center>");
}

function formatDate(input)
{
    var datePart = input.match(/\d+/g),
            month = datePart[0], // get only two digits
            day = datePart[1],
            year = datePart[2];

    return day + '/' + month + '/' + year;
}
