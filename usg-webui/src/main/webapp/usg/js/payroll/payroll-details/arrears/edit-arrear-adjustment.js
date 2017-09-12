/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//function editArrearProcess(data1)
//{
//    var data=decodeURI(data1)
//    alert(data);
//     var dataPar=JSON.parse(data); 
//      alert(dataPar.employeeCode);
//   $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a>><a href="javascript:void(0)" onclick="editArreaAdjustment()" data-toggle="tab">Arrear Process</a>');
//    $("#dashboardBodyMainDiv").text("").append('<div id="editArreaAdjustmentDivId"></div>');
//    $("#editArreaAdjustmentDivId").text("").append('<div id="editArreaAdjustmentTabMenu" />');
//
//   
//    $("#editArreaAdjustmentTabMenu").append('<div id="editArreaAdjustmentMainMenu" class="row" />');
//    $("#editArreaAdjustmentTabMenu").append('<div id="arrearAdjDiv" class="row" />');
//    $("#editArreaAdjustmentTabMenu").append('<div id="arrearprocessedButtonDiv" class="row" />');
//    $("#editArreaAdjustmentTabMenu").append('<div id="arrearprocessedDiv" class="row" />');
//   
//    $("#editArreaAdjustmentTabMenu").append('<div id="arrearlockedDiv" class="row" />');
//     $("#editArreaAdjustmentTabMenu").append('<div id="buttonDiv" class="row" />');
//    
//    $("#editArreaAdjustmentMainMenu").append('<div id="editArreaAdjustmentMainPanel" class="panel panel-blue" />');
//    $("#editArreaAdjustmentMainPanel").append('<div id="editArreaAdjustmentMainHeading" class="panel-heading" />');
//    $("#editArreaAdjustmentMainHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne1"><center>Arrear Adjustment</center></a>');
//    $("#editArreaAdjustmentMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
//    $("#collapseOne1").append('<div id="editArreaAdjustmentMainBody" class = "panel-body pan" />');
//    $("#editArreaAdjustmentMainBody").append('<div id="panelRow" class="form-horizontal" />');
//    $("#editArreaAdjustmentMainBody").append('<center><span id="editArreaAdjustmentMessageDiv"></span></center>');
//    $("#editArreaAdjustmentMainBody").append('<div id="editArreaAdjustmentBodyDiv" class="row" />')
//
// 
//     var ddo=dataPar.ddo;
//     //FinancialConsolidateExpenseBudgetCode Table
//     $("#editArreaAdjustmentBodyDiv").append('<div class="col-lg-12" id="row1">');
//     $("#row1").append("<div id='row1col1' class='form-group col-lg-6' />");
//     $("#row1col1").append("<label>DDO</label>");
//     $("#row1col1").append("<select id='ddoId' class='form-control'>");
//     $("#row1col1").append("<span id='ddoIdErr'></span>");
//     $("#ddoId option:contains('"+ddo+"')").attr("selected", "selected");
//     
//      
//      $("#row1").append("<div id='row1col2' class='form-group col-lg-6' />");
//     $("#row1col2").append("<label>Financial Year</label>");
//     $("#row1col2").append("<select id='finyearId' class='form-control'>");
//     $("#row1col2").append("<span id='finyearIdErr'></span>");
//      $("#finyearId option:contains('" + dataPar.finacialYear + "')").attr("selected", "selected");
//    // $('#finyearId').val(dataPar.finacialYear);
//     
//     $("#editArreaAdjustmentBodyDiv").append('<div class="col-lg-12" id="row2">');
//     $("#row2").append("<div id='row2col1' class='form-group col-lg-6' />");
//     $("#row2col1").append("<label>Employee Code11</label>");
//     $("#row2col1").append('<input type="text" id="empcode" placeholder="Employee Code" class="form-control"/>');
//     $("#row2col1").append("<span id='empcodeErr'></span>");
//     $('#empcode').val(dataPar.employeeCode);
//     
//      $("#row2").append("<div id='row2col2' class='form-group col-lg-6' />");
//     $("#row2col2").append("<label>Employee Name</label>");
//     $("#row2col2").append('<input type="text" id="empname" class="form-control" readonly/>');
//     $("#row2col2").append("<span id='empnameErr'></span>");
//      $('#empname').val(dataPar.employeeName);
//     
//      $("#editArreaAdjustmentBodyDiv").append('<div class="col-lg-12" id="row3">');
//     $("#row3").append("<div id='row3col1' class='form-group col-lg-6' />");
//     $("#row3col1").append("<label>Designation</label>");
//     $("#row3col1").append('<select class="form-control" name="desiId" id="desiId"></select>');
//     $("#row3col1").append("<span id='desiIdErr'></span>");
//     $("#desiId").val(dataPar.designation);
//      $("#row3").append("<div id='row3col2' class='form-group col-lg-6' />");
//     $("#row3col2").append("<label>Department</label>");
//     $("#row3col2").append('<select class="form-control" name="deptId" id="deptId"></select>');
//     $("#row3col2").append("<span id='deptIdErr'></span>");
//    // $("#deptId").val(dataPar.department);
//      $("#deptId option:contains('" + dataPar.department + "')").attr("selected", "selected");
//     
//      $("#editArreaAdjustmentBodyDiv").append('<div class="col-lg-12" id="row6">');
//    $("#row6").append("<div id='row6Col1' class='form-group col-lg-6' />");
//    $("#row6Col1").append("<label>Openning Balance</label>");
//    $("#row6Col1").append('<input type="text" id="openibalId" class="form-control">');
//    $("#row6Col1").append("<span id='openibalIdErr'></span>");
//    $('#openibalId').val(dataPar.openBalance);
//    
//    $("#row6").append("<div id='row6Col2' class='form-group col-lg-6' />");
//    $("#row6Col2").append('<label>Arrear Date <span class="require">*</span></label>');
//    $("#row6Col2").append('<input type="text" class="form-control" id="dateId" placeholder="">');
//    $("#dateId").datepicker({
//        format: "dd/mm/yyyy",
//        autoclose: true
//        });
//    $('#dateId').val(dataPar.arrearDate); 
//   
//    
//   $("#row6Col2").append("<span id='dateIdErr'></span>");
//   $("#editArreaAdjustmentBodyDiv").append('<div class="col-lg-12" id="row7">');
//   $("#row7").append("<div id='row7Col1' class='form-group col-lg-6' />");
//   $("#row7Col1").append("<label>Fund Type</label>");
//   $("#row7Col1").append("<select id='fundtypeId' class='form-control'>");
//   $("#fundtypeId").append("<option id=''value='0' >-------------Select Fund Type-----------------------------------------</option>");
//   $("#row7Col1").append("<span id='fundTypeErr'></span>");
//  // $("#fundtypeId").val(dataPar.fundType);
//   $("#fundtypeId option:contains('" + dataPar.fundType + "')").attr("selected", "selected");
//	
//    $("#row7").append("<div id='row7Col2' class='form-group col-lg-6' />");
//    $("#row7Col2").append('<label class="control-label">PF Type<span class="require"> *</span></label>');
//     $("#row7Col2").append("<select id='pfId' class='form-control'>");
//    $("#pfId").append("<option id=''value='0' >-------------Select PF Type-----------------------------------------</option>");
//    $("#row7Col2").append("<span id='pfTypeErr'></span>");
//    //$("#pfId").val(dataPar.pfType);
//     $("#pfId option:contains('" + dataPar.pfType + "')").attr("selected", "selected");
//    
//    $("#editArreaAdjustmentBodyDiv").append('<div class="col-lg-12" id="eighthDiv">');
//    $("#eighthDiv").append("<div id='eighthDivCol1' class='form-group col-lg-6' />");
//    $("#eighthDivCol1").append("<label>Nature Type</label>");
//    $("#eighthDivCol1").append("<select id='natureId' class='form-control'>");
//    $("#natureId").append("<option id=''value='0' >-------------Select Year-----------------------------------------</option>");
//    $("#eighthDivCol1").append("<span id='natureTypeErr'></span>");
//    //$("#natureId").val(dataPar.natureType);
//     $("#natureId option:contains('" + dataPar.natureType + "')").attr("selected", "selected");
//    
//    $("#eighthDiv").append("<div id='eighthDivCol2' class='form-group col-lg-6' />");
//    $("#eighthDivCol2").append("<label>Remarks</label>");
//    $("#eighthDivCol2").append('<input type="text" id="remarks" class="form-control">');
//
//    $("#editArreaAdjustmentBodyDiv").append("<div class='form-group col-lg-12'><center><button onclick=validatearrearadj() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetAttendanceReset() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
//   
//   
//    $("#empname").prop("readonly", true);
//    $("#empcodem").prop("readonly", true);
//
//  getEmpDemodetailsforEmployeeAttendance();
//   
//   
//    
//    
//    
//    
//    
//    
//   
//   
//    setTimeout(function () {
//        ddoListEmployeeAttendance();
//    }, 100);
//    setTimeout(function () {
//        locationEmployeeList();
//    }, 200);
//    setTimeout(function () {
//        employeeDepartmentList();
//    }, 300);
//    setTimeout(function () {
//        employeeDesignationList();
//    }, 400);
//    setTimeout(function () {
//        employeeNatureTypeList();
//    }, 500);
//    setTimeout(function () {
//        employeeCityList();
//    }, 600);
//    setTimeout(function () {
//        employeePFTypeList();
//    }, 700);
//    setTimeout(function () {
//        employeeFundType();
//    }, 800);
//    setTimeout(function () {
//        employeeMonthList();
//    }, 900);
//    setTimeout(function () {
//        employeeBudgetHeadList();
//    }, 950);
//    setTimeout(function () {
//        employeeYearList();
//    }, 1000);
//
//getBudgetfinancialyearForConsolidateExpense("finyearId");
//    viewReDddoListForList("", "ddoId");
//}
//

