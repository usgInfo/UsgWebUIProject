/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function displayEmployeeSalaryMapping()
{
    scrolupfunction();
   //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Employee Master</a></label> >> <label>Employee Salary Mapping</label>');
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Employee Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="">Employee Salary Mapping</a>');

    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Employee Salary</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
//    $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
    $("#panelRow").append("<div id='pregsuccessBefore'></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup").append("<input type='hidden' id='empid' >");
    
    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddoId"));
    $("#Row1Col1").append("<span id='ddoer'></span>");
    $("#Row1Col2").append(getLabel_InputWithSpan("Employee Name", "", "empname", "", "onkeypress='' readonly"));
    
    /*getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    //$("#Row2Col1").append(getLabel_InputWithSpan("Employee Code", "", "empcode", "", "onkeypress='return numericVal(event)'"));
    $("#Row2").append('<div id="Row2col1" class="col-md-6" />');
    $("#Row2col1").append('<label for="employeeCode"  class="col-md-12 control-label">Employee Code</label>'); 
    $("#Row2col1").append("<input type='text' id='empcode'  class='col-md-11' class='form-control'>");
    $("#Row2Col2").append(getLabel_InputWithSpan("Location", "", "location", "", "onkeypress='' readonly"));*/
   // $("#Row2col1").append('<label for="employeeCode"  class="col-md-12 control-label">Employee Code</label>');
   // $("#Row2col1").append("<input type='text' id='empcode'  class='col-md-11' class='form-control'>");
   // $("#Row2col1").append("<div class= 'input-group' <input type='text' class='form-control'> <span class='input-group-btn'><a href='javascript:'getEmpDemodetailsforEmpsalary()' class='btn submit' <i class='fa fa-search'></i>></a>></span></div>");
    
    //<button class='input-group-btn' class='col-md-1'  class= 'fa fa-search' onclick='getEmpDemodetailsforEmpsalary()' type='button'></button>
   /* $("#FieldGroup").append('<div  id="Row2"  class="row" class="col-md-12"/>');
    $("#Row2").append('<div id="Row2col1" class="col-md-6" />');
    $("#Row2col1").append('<label for="employeeCode"  class="col-md-12 control-label">Employee Code</label>');
    $("#Row2col1").append("<input type='text' id='employeeCode'  class='col-md-11' class='form-control' placeholder='Type Employee Code'>");
    $("#Row2col1").append("<button class='btn btn-blue' class='col-md-1'  onclick='getEmpPreDetails()' type='button'>Go!</button>");
    $("#Row2").append('<div id="Row2col2" class="col-md-6" />');
    $("#Row2col2").append('<label for="location"  class="col-md-6 control-label">Location</label>');
    $("#Row2col2").append("<input type='text' id='location'  class='form-control'>");*/
    
//    $("#FieldGroup").append("<div id='secondRow' class='form-group' />");
//    $("#secondRow").append("<label class='col-sm-1 control-label'>Employee Code: <span class='require'>*</span></label>");
//    $("#secondRow").append("<div id='ecode' class='col-sm-5' />");
//    $("#ecode").append("<input type='text' id='empcode' class='form-control'> ");
//    $("#secondRow").append("<span style='padding-top: 10px;padding-left: 0px;'class='col-sm-1 glyphicon glyphicon-search' onclick='getEmpDemodetailsforEmpsalary()'></span>");
//    $("#ecode").append("<span id='emplcodeer'></span>");
//    $("#secondRow").append("<label class='col-sm-2 control-label'>Location:</label>");
//    $("#secondRow").append("<div id='bhDiv' class='col-sm-6' />");
//    $("#bhDiv").append("<input type='text' id='location' class='form-control' readonly>");

//$("#FieldGroup").append('<div class="row"><div class="form-group col-lg-6"><div id ="FieldDiv"><label for="employeeCode">Employee Code <span class="require">*</span></label><input type="text" class="form-control" name="employeeCode" id="ecode"><span style="padding-top: 10px;padding-left: 0px;"class="col-sm-1 glyphicon glyphicon-search" onclick="getEmpDemodetailsforEmpsalary()"></span> </div>'
//            + '</div><div class="form-group col-lg-6"><label for="location">Location </label><input type="text" class="form-control" id="location" readonly></div></div>');
    
    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    // $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "required", "employeeCode", "Enter Employee Code", ""));
    $("#Row1Col1").append("<label style='margin-left: -14px;' class='col-sm-5 control-label'>Employee Code <span class='require'>*</span></label>");
    $("#Row1Col1").append("<div id='FieldDiv1' style='margin-left: -14px;' class='col-sm-11' />");
    $("#FieldDiv1").append("<input type='text' id='ecode' class='form-control' onkeypress='return numericVal(event)'>");
    $("#Row1Col1").append("<span style='padding-top: 10px;padding-left: 0px;'class='col-sm-1 glyphicon glyphicon-search' onclick='getEmpDemodetailsforEmpsalary()'></span>");


    $("#Row1Col2").append(getLabel_InputWithSpan("Location", "", "location", " ", "onkeypress='' readonly"));
    
    getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel_InputWithSpan("Department", "", "dept", "", "onkeypress='' readonly"));
    $("#Row3Col2").append(getLabel_InputWithSpan("Designation", "", "designa", "", "onkeypress='' readonly"));
    
    getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col1").append(getLabel_InputWithSpan("Grade", "", "grade", "", "onkeypress='' readonly"));
    $("#Row4Col2").append(getLabel_InputWithSpan("Nature", "", "nature", "", "onkeypress='' readonly"));
    
    getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
    $("#Row5Col1").append(getLabel_InputWithSpan("Posting City", "", "postcity", "", "onkeypress='' readonly"));
    $("#Row5Col2").append(getLabel_InputWithSpan("Fund Type", "", "fundtype", "", "onkeypress='' readonly"));
    
    getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
    $("#Row6Col1").append(getLabel_InputWithSpan("Budget Head", "", "budgethead", "", "onkeypress='' readonly"));
    $("#Row6Col2").append(getLabel_InputWithSpan("Discipline", "", "disciplineId", "", "onkeypress='' readonly"));
    
    getTwoColumnInRow("FieldGroup", "Row7", "Row7Col1", "Row7Col2");
    $("#Row7Col1").append(getLabel_InputWithSpan("Association", "", "associtionId", "", "onkeypress='' readonly"));
    $("#Row7Col2").append(getLabel_InputWithSpan("Bank", "", "bankId", "", "onkeypress='' readonly"));
    
    getTwoColumnInRow("FieldGroup", "Row8", "Row8Col1", "Row8Col2");
    $("#Row8Col1").append(getLabel_InputWithSpan("Account Number", "", "accountId", "", "onkeypress='' readonly"));
    $("#Row8Col2").append(getLabel_InputWithSpan("Grade Pay", "", "gradepay", "", "onkeypress='' readonly"));
    
    $("#FieldGroup").append("<div id='row9' class='row' />");
    $("#row9").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='headsbuttton' value='Heads' class='btn btn-success mr5'  onclick='addHeadforEmpsalary()' style='height:40px;width:80px'>Heads</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id='resetbackbutton' type='button' onclick='resetEmpsalary()' class='btn btn-warning mr5' name='reset' value='reset' style='height:40px;width:80px'>Reset</button></center></div>");

    $("#FieldGroup").append("<div id='EarningDeductionListPanelRow' class='row' /><br>");
    $("#EarningDeductionListPanelRow").append("<div id='EarningListTable' class='col-md-6' />");
    $("#EarningDeductionListPanelRow").append("<div id='DeductionListTable' class='col-md-6' />");
    
    $("#FieldGroup").append("<div id='row10' class='row' />");
    $("#row10").append("<div  class='col-xs-4' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='EmpSalaryValidation()' style='height:40px;width:80px'>Save</button></div><div class='col-xs-2'><button type='button' id='resetbackbutton1'onclick='addHeadforEmpsalary()' class='btn btn-warning mr5 pull-left' name='reset' value='reset' style='height:40px;width:80px'>Reset</button></div>");
    getDDOforEmpSalary();
    $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
    viewEmployeeSalaryList("tableHeaderForList");
    setTimeout(function () {
        $("#pregsuccessBefore").text("");
    }, 2100);
    
}

function addHeadforEmpsalary() {
    var id = $("#empid").val();
    viewEarningHeadsListforEmpsalary('EarningListTable', id);
    viewDeductionHeadsListforEmpsalary('DeductionListTable', id);
    if (id == null || id == "")
    {

    }
    else
    {
        $("#DeductionListTable").append("<div  id='totalRow' class='row' />");
        $("#totalRow").append("<label class='col-sm-4'>Total Earnings</label><input class='col-sm-4' type='text' id='displayTotalEarnings' readonly >");
        $("#DeductionListTable").append("<div  id='totalRow1' class='row' />");
        $("#totalRow1").append("<label class='col-sm-4'>Total Deductions</label><input class='col-sm-4' type='text' id='displayTotalDeductions' readonly >");
        $("#headsbuttton").prop("disabled", true);
    }
}

function viewEarningHeadsListforEmpsalary(DivId, id) {
    if (id == null || id == "")
    {
        alert("please select employee");
    }
    else
    {
        $("#" + DivId).text("").append("<h4><u>Earning Heads</u></h4><div class='tab-pane' id='EarningDatatablemainDiv'/>");
        $("#EarningDatatablemainDiv").append("<div class='table-responsive' id='viewEarningDataTableDiv' />");
        $("#viewEarningDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayEarningHeadTable' />");
        $("#displayEarningHeadTable").append("<thead class=''><tr>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Description</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Amount</th>"

                + "</tr></thead>");
        var sno = 0;
        $.get(server_base_url + "Hrms/EmpMaster/GetEmpHeadsHeadAssign/Search", {
            empid: id
        }).done(function(data) {

            $.get(server_base_url + "hrms/salary/SalaryHead/SearchByHeadType", {
                headType: "headType",
                value: "Earnings"
            }).done(function(pdata) {

                $("#displayEarningHeadTable").append("<tbody id='displayEarningHeadTableBody' class='table-striped table-bordered' />");
                for (var j = 0; j < data.length; j++)
                {

                    for (var i = 0; i < pdata.length; i++) {


                        if (data[j].headName == pdata[i]._id.$oid)
                        {
                            var inputValue = "0";

                            sno++;

                            $("#displayEarningHeadTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].description + "<input type='hidden' value='" + pdata[i]._id.$oid + "'></td>"
                                    + "<td style='cursor:pointer;'><input type='text' class='EarningsAmount' value='" + inputValue + "'  onkeypress='return validateFloat(event)'></td>");


                        }
                    }
                }
                $('.EarningsAmount').keyup(function() {
                    var sum = 0;
                    $('.EarningsAmount').each(function() {
                        sum += Number($(this).val());
                    });
                    $('#displayTotalEarnings').val(sum);
                });
            });

        });
    }
}
function viewDeductionHeadsListforEmpsalary(DivId, id) {
    if (id == null || id == "")
    {

    }
    else
    {
        $("#" + DivId).text("").append("<h4><u>Deduction Heads</u></h4><div class='tab-pane' id='DeductionDatatablemainDiv'/>");
        $("#DeductionDatatablemainDiv").append("<div class='table-responsive' id='viewDeductionDataTableDiv' />");
        $("#viewDeductionDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayDeductionHeadTable' />");
        $("#displayDeductionHeadTable").append("<thead class=''><tr>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Description</th>"
                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Amount</th>"
                + "</tr></thead>");
        var sno = 0;
        $.get(server_base_url + "Hrms/EmpMaster/GetEmpHeadsHeadAssign/Search", {
            empid: id
        }).done(function(data) {
            $.get(server_base_url + "hrms/salary/SalaryHead/SearchByHeadType", {
                headType: "headType",
                value: "Deductions"
            }).done(function(pdata) {

                $("#displayDeductionHeadTable").append("<tbody id='displayDeductionHeadTableBody' class='table-striped table-bordered' />");
                for (var j = 0; j < data.length; j++)
                {
                    for (var i = 0; i < pdata.length; i++) {
                        if (data[j].headName == pdata[i]._id.$oid)
                        {

                            var inputValue = "0";

                            sno++;

                            $("#displayDeductionHeadTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].description + "<input type='hidden' value='" + pdata[i]._id.$oid + "'></td>"
                                    + "<td style='cursor:pointer;'><input type='text' class='DeductionAmount' value='" + inputValue + "' onkeypress='return validateFloat(event)'></td>");

                        }
                    }
                }
                $.get(server_base_url + "hrms/salary/SalaryHead/SearchByHeadType", {
                    headType: "headType",
                    value: "Deductions"
                }).done(function(loandata) {
                    
                    
                    
                    
                    $('.DeductionAmount').keyup(function() {
                        var sum = 0;
                        $('.DeductionAmount').each(function() {
                            sum += Number($(this).val());
                        });
                        $('#displayTotalDeductions').val(sum);
                    });
                });
            });
        });
    }
}

function viewEmployeeSalaryList(divId)
{
   
    $("#" + divId).text("").append("<div id='employeeSalaryMappingListPanel' class='panel panel-blue' />");
    $("#employeeSalaryMappingListPanel").append("<div id='employeeSalaryMappingListPanelHeading' class='panel-heading' />");
    $("#employeeSalaryMappingListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Employees</center>");
    $("#employeeSalaryMappingListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").append("<div  id='ErrorDiv'/>");
    $("#listpanelRow").append("<div class='tab-pane' id='viewUser'/>");
    $("#viewUser").append("<div class='table-responsive' id='viewUserSectionTableDiv' />");
    $("#viewUserSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayEmployeeSalaryMappingTable' />");
    $("#displayEmployeeSalaryMappingTable").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i> DDO</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i> Department</th>"
            + "<th class='table_anchor_width'><i ></i>Edit</th>"
            + "<th class='table_anchor_width'><i  style='font-size:21px;'></i> Delete</th>"
            + "</tr></thead>");
    
    $.get(server_base_url + "Hrms/EmpMaster/EmpSalary/View", {
    }).done(function (bdata) {
        if (bdata == fail) {
//            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
//            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />")
        } else if (bdata == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayEmployeeSalaryMappingTable").append("<tbody id='displayEmployeeSalaryMappingTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var obj = {
                            employeeCode: bdata[i].employeeCode,
                            employeeName: bdata[i].employeeName,
                            ddo: bdata[i].ddo,
                            location: bdata[i].location,
                            department: bdata[i].department,
                            designation: bdata[i].designation,
                            grade: bdata[i].grade,
                            nature: bdata[i].nature,
                            postingCity: bdata[i].postingCity,
                            fundType: bdata[i].fundType,
                            budgetHead: bdata[i].budgetHead,
                            discipline: bdata[i].discipline,
                            association: bdata[i].association,
                            bank: bdata[i].bank,
                            acnumber: bdata[i].acnumber,
                            gradePay: bdata[i].gradePay,
                            earningHeads: bdata[i].earningHeads,
                            deductionHeads: bdata[i].deductionHeads,
                            totalEarnings: bdata[i].totalEarnings,
                            totalDeductions: bdata[i].totalDeductions,
                            id: bdata[i]._id.$oid
                        };
                        obj = JSON.stringify(obj);
                        
                        $("#displayEmployeeSalaryMappingTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].ddo + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeCode + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].department + "</td>"
                                + "<td style='cursor:pointer;' onclick=updateEmployeeSalary('" + encodeURI(obj) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>"
                                + "<td onclick=deleteEmployeeSalary('" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td></tr>");
                    }
                    $('#displayEmployeeSalaryMappingTable').dataTable();
                    $('#displayEmployeeSalaryMappingTable').append("</table>");
                    
                }
            }
        }
    });
    
}

function updateEmployeeSalary(obj)
{
    $("#pregsuccessBefore").text("");
    obj = JSON.parse(decodeURI(obj));
    
    $("#empid").val(obj.id);
    $("#empname").val(obj.employeeName);
    $("#empcode").val(obj.employeeCode);
    $("#location").val(obj.location);
    $("#dept").val(obj.department);
    $("#designa").val(obj.designation);
    $("#grade").val(obj.grade);
    $("#nature").val(obj.nature);
    $("#postcity").val(obj.postingCity);
    $("#fundtype").val(obj.fundType);
    $("#budgethead").val(obj.budgetHead);
    $("#disciplineId").val(obj.discipline);
    $("#associtionId").val(obj.association);
    $("#bankId").val(obj.bank);
    $("#accountId").val(obj.acnumber);
    $("#gradepay").val(obj.gradePay);
    $("#saveorupdate").val("update");
    $("#saveupdatebutton").text("").text("Update");
    $("#resetbackbutton").val("Back");
    $("#resetbackbutton").text("").text("Back");
    $("#resetbackbutton1").val("Back");
    $("#resetbackbutton1").text("").text("Back");
}

function EmpSalaryValidation()
{
   // alert("validation");
    var saveorupdate = $("#saveorupdate").val();
    var empcode = $("#empcode").val();
    var ddo = $("#ddoId").val();
    var result = 1;

    if (ddo == "" || ddo == "undefined") {
        $("#ddoId").focus();
        //addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("ddoerr", "Please Select DDO.");
        result = 0;
    }

    else if (empcode == "" || empcode == "undefined") {
        $("#ddoer").text("");
        $("#empcode").focus();
        //addSomeClass("acnumberFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid2", "Please enter Employee code.");
        result = 0;
    }

    else {
        $("#emplcodeer").text("");
        $("#ddoer").text("");

        //saveEmployeSalaryData();
        
        if (result != 0) {
            if (saveorupdate == "save") {
                saveEmployeSalaryData();
            } else {
                updateEmployeeSalary1();
            }
        }
    }

}

function updateEmployeeSalary1()
{
   
    var empid = $('#empid').val();
    var ddo = $('#ddoId').val();
    var employeeName = $('#empname').val();
    var employeeCode = $('#empcode').val();
    var location = $('#location').val();
    var department = $('#dept').val();
    var designation = $('#designa').val();
    var grade = $('#grade').val();
    var nature = $('#nature').val();
    var postingCity = $('#postcity').val();
    var fundType = $('#fundtype').val();
    var budgetHead = $('#budgethead').val();
    var discipline = $('#disciplineId').val();
    var bank = $('#bankId').val();
    var acnumber = $('#accountId').val();
    var gradePay = $('#gradepay').val();
    var association = $('#associtionId').val();
    var objJson = {
        ddo: ddo,
        employeeName: employeeName,
        employeeCode: employeeCode,
        location: location,
        department: department,
        designation: designation,
        grade: grade,
        nature: nature,
        postingCity: postingCity,
        fundType: fundType,
        budgetHead: acnumber,
        discipline: discipline,
        bank: bank,
        acnumber: acnumber,
        gradePay: gradePay,
        association: association
    };
    alert(empid);
    $.post(server_base_url + "hrms/EmployeeMaster/EmpSalary/Update", {
        
        objJson: JSON.stringify(objJson),
        objId: empid
        
    }).done(function (data) {
        alert(data)
        if (data == fail) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessagesInRed("pregsuccessBefore", "No User available" + "<br/><br/>");
        } else {
            disableDiv("FieldGroup");
            setTimeout(function () {
                displayEmployeeSalaryMapping();
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
            }, 4000);
        }
    });
    
}

function saveEmployeSalaryData() {
    var earningHeadsSalary = [];
    var deductionHeadsSalary = [];
    $('table#displayEarningHeadTable tbody tr').each(function() {
        earningHeadsSalary.push({
            description: $(this).find('td:eq(1) input').val(),
            amount: $(this).find('td:eq(2) input').val()

        });
    });
    $('table#displayDeductionHeadTable tbody tr').each(function() {
        deductionHeadsSalary.push({
            description: $(this).find('td:eq(1) input').val(),
            amount: $(this).find('td:eq(2) input').val()

        });
    });
    var empSalary = {
        ddo: $('#ddoId').val(),
        employeeCode: $('#empcode').val(),
        employeeName: $('#empname').val(),
        location: $('#location').val(),
        department: $('#dept').val(),
        designation: $('#designa').val(),
        grade: $('#grade').val(),
        nature: $('#nature').val(),
        postingCity: $('#postcity').val(),
        fundType: $('#fundtype').val(),
        budgetHead: $('#budgethead').val(),
        discipline: $('#disciplineId').val(),
        association: $('#associtionId').val(),
        bank: $('#bankId').val(),
        acnumber: $('#accountId').val(),
        gradePay: $('#gradepay').val(),
        earningHeads: earningHeadsSalary,
        deductionHeads: deductionHeadsSalary,
        totalEarnings: $("#displayTotalEarnings").val(),
        totalDeductions: $("#displayTotalDeductions").val()
    }
    $.post(server_base_url + "Hrms/EmpMaster/EmpSalary/Save", {
        empSalary: JSON.stringify(empSalary)
    }).done(function(data) {
        if (data == fail) {
            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
        } else if (data == unauthorized) {
            displayLargeErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "<br /><br />");
            displayLargeErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "<br /><br />");
        } else {

            displayEmployeeSalaryMapping();
            displayLargeSuccessMessages("pregsuccessBefore", "" + successMessage + "<br /><br />");
        }
    }
    );
}

function getEmpDemodetailsforEmpsalary()
{
    var ecode = $("#empcode").val();
    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function(pdata) {

        if (pdata == null || pdata == "" || pdata == 500)
        {
            displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
        }

        else {
            $('#empid').val(pdata[0]._id.$oid);
            $('#empname').val(pdata[0].employeeName);
            $('#dept').val(pdata[0].department);
            $('#designa').val(pdata[0].designation);
            $('#location').val(pdata[0].location);
            $('#nature').val(pdata[0].natureType);
            $('#grade').val(pdata[0].grade);
            $('#postcity').val(pdata[0].postingCity);
            $('#fundtype').val(pdata[0].fundType);
            $('#budgethead').val(pdata[0].budgetHead);
            $('#disciplineId').val(pdata[0].discipline);
            $('#associtionId').val(pdata[0].association);
            $('#bankId').val(pdata[0].bank);
            $('#accountId').val(pdata[0].acnumber);
            $('#gradepay').val(pdata[0].gradePay);
        }

    });
}
function deleteEmployeeSalary(id) {
    var result = confirm('Are you Sure?');
    if (result) {
        $.post(server_base_url + "hrms/EmployeeMaster/EmpSalary/Delete", {
            objId: id
        }).done(function (data) {
            if (data == fail) {
                displaySmallErrorMessagesInRed("authonticationMsgId", "Invalid username / password");
            } else if (data == unauthorized) {
                displaySmallErrorMessagesInRed("authonticationMsgId", unauthorizedMessage);
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("authonticationMsgId", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("authonticationMsgId", "No User available");
            } else {
                viewEmployeeSalaryList("tableHeaderForList");
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "Deleted Succesfully");
            }
        });
    }
}

function resetEmpsalary() {
    $('#ddoId').val("");
    $('#empname').val("");
    $('#empcode').val("");
    $('#location').val("");
    $('#dept').val("");
    $('#designa').val("");
    $('#grade').val("");
    $('#nature').val("");
    $('#postcity').val("");
    $('#fundtype').val("");
    $('#budgethead').val("");
    $('#disciplineId').val("");
    $('#associtionId').val("");
    $('#bankId').val("");
    $('#accountId').val("");
    $('#gradepay').val("");
    
    $('#ddoIdErr').text("");
    $('#empnameErr').text("");
    $('#empcodeErr').text("");
    $('#locationErr').text("");
    $('#deptErr').text("");
    $('#designaErr').text("");
    $('#gradeErr').text("");
    $('#natureErr').text("");
    $('#postcityErr').text("");
    $('#fundtypeErr').text("");
    $('#budgetheadErr').text("");
    $('#disciplineId').text("");
    $("#associtionIdErr").text("");
    $("#bankIdErr").text("");
    $("#accountIdErr").text("");
    $("#gradepayErr").text("");
    
    $('#ddoIdFieldGroup').val("");
    $('#empnameFieldGroup').val("");
    $('#empcodeFieldGroup').val("");
    $('#locationFieldGroup').val("");
    $('#deptFieldGroup').val("");
    $('#designaFieldGroup').val("");
    $('#gradeFieldGroup').val("");
    $('#natureFieldGroup').val("");
    $('#postcityFieldGroup').val("");
    $('#fundtypeFieldGroup').val("");
    $('#budgetheadFieldGroup').val("");
    $('#disciplineIdFieldGroup').val("");
    $('#associtionIdFieldGroup').val("");
    $('#bankIdFieldGroup').val("");
    $('#accountIdFieldGroup').val("");
    $('#gradepayFieldGroup').val("");
    $("#pregsuccessBefore").text("");
    $("#ErrorDiv").text("");
}
function getDDOforEmpSalary()
{
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function(pdata) {
        for (var i = 0; i < pdata.length; i++) {
            $("#ddoId").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
        }
    });
}