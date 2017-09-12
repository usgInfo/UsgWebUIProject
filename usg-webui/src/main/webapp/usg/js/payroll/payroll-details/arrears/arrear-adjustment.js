/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @misha thomas
 */

function arrearAdjustment(divId)
{
    //alert(divId);
    scrolupfunction();
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a>><a href="javascript:void(0)" onclick="arreaAdjustment()" data-toggle="tab">Arrear Process</a>');
    $("#" + divId).text("").append('<div id="arreaAdjustmentDivId"></div>');
    $("#arreaAdjustmentDivId").text("").append('<div id="arreaAdjustmentTabMenu" />');


    $("#arreaAdjustmentTabMenu").append('<div id="arreaAdjustmentMainMenu" class="row" />');
    $("#arreaAdjustmentTabMenu").append('<div id="arrearAdjDiv" class="row" />');
    $("#arreaAdjustmentTabMenu").append('<div id="headListDiv" class="row" />');
    if (checkUserPrivelege(pvCreateArrearAdjustment) || checkUserPrivelege(pvViewArrearAdjustment)) {

        $("#arreaAdjustmentMainMenu").append('<div id="arreaAdjustmentMainPanel" class="panel panel-blue" />');
        $("#arreaAdjustmentMainPanel").append('<div id="arreaAdjustmentMainHeading" class="panel-heading" />');
        $("#arreaAdjustmentMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Arrear Adjustment</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colArrearAdjustment"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');
        $("#arreaAdjustmentMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colArrearAdjustment").click(function () {
            $("#collapseOne1").toggle();
            if ($("#colArrearAdjustment span").hasClass("glyphicon-minus-sign")) {
                $("#colArrearAdjustment").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colArrearAdjustment").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="arreaAdjustmentMainBody" class = "panel-body pan" />');
        $("#arreaAdjustmentMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#arreaAdjustmentMainBody").append('<div id="panelRow" class="form-horizontal" />');
        $("#arreaAdjustmentMainBody").append('<center><span id="arreaAdjustmentMessageDiv"></span></center>');
        $("#arreaAdjustmentMainBody").append('<div id="arreaAdjustmentBodyDiv" class="row" />')


        $("#arreaAdjustmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ddoDiv"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" name="ddoId" id="ddoId"></select><span id="ddoIdErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employCode">Employee Code </label><select id="empcode"  class="form-control"></select><span id="empcodeErr" class="text-danger"></span></div></div>');
        $("#arreaAdjustmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employeeName">Employee Name </label><input type="text" id="empname" class="form-control"/><span id="empNameErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="empCodeM">Employee Code(M) </label><input type="text" id="empcodem" class="form-control" /><span id="empCodeMErr" class="text-danger"></span></div></div>');
        $("#arreaAdjustmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="LocationId" id="LocationId"></select><span id="LocationIdErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="deptId" id="deptId"></select><span id="departmentErr" class="text-danger"></span></div></div>');
        $("#arreaAdjustmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="desiId" id="desiId"></select><span id="designationErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureId" id="natureId"></select><span id="natureTypeErr" class="text-danger"></span></div></div>');
        $("#arreaAdjustmentBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="cityid" id="cityid"></select><span id="postingCityError" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="sortBy">Sort By </label><select class="form-control" name="sortBy" id="sortBy"></select><span id="sortByError" class="text-danger"></span></div></div>');





        $("#arreaAdjustmentBodyDiv").append('<div class="col-lg-12" id="row4">');
        $("#row4").append("<div id='row5col1' class='form-group col-lg-6' />");
        $("#row5col1").append("<label>Pay Year</label>");
        $("#row5col1").append('<select class="form-control" name="fromyearId" id="fromyearId"></select>');

//      $("#frommonthid").append("<option id=''value='0' >-------------Select Pay Month-----------------------------------------</option>");
//     $("#frommonthid").append("<option id=''value='1' >Jan</option><option id=''value='2'>Feb</option><option id=''value='3'>Mar</option><option id=''value='4'>Apr</option>");
//    $("#frommonthid").append("<option id=''value='5' >May</option><option id=''value='6'>Jun</option><option id=''value='7'>Jul</option><option id=''value='8'>Aug</option>");
//    $("#frommonthid").append("<option id=''value='9' >Sep</option><option id=''value='10'>Oct</option><option id=''value='11'>Nov</option><option id=''value='12'>Dec</option>");
        $("#row5col1").append("<span id='fromyearIdErr'></span>");

        $("#row4").append("<div id='seventhDivCol2' class='form-group col-lg-6' />");
        $("#seventhDivCol2").append('<label class="control-label">Arrear Type:<span class="require"> *</span></label>');
        $("#seventhDivCol2").append('<div id="DAFieldDiv" class="">Day Wise<input type="radio" name="ratedDefinedFor" id="dayWise" value="day" style="margin-left:20px;margin-right:20px;">Month Wise<input type="radio" name="ratedDefinedFor" id="monthWise" value="Month" style="margin-left:20px;"><span id="arreartypeer"></span></div>');

        $("#arreaAdjustmentBodyDiv").append('<div class="col-lg-12" id="row5">');
        $("#row5").append("<div id='row4col1' class='form-group col-lg-6' />");
        $("#row4col1").append("<label>Pay Month</label>");
        $("#row4col1").append('<select class="form-control" name="frommonthid" id="frommonthid"></select>');
        getLoggedInDDOInDropDown("ddoId", "");
        getLoggedInLocationInDropDown("LocationId", "");
//      $("#arreaAdjustmentBodyDiv").append('<div class="col-lg-12" id="row5">');
//     $("#row5").append("<div id='row5col1' class='form-group col-lg-6' />");
//     $("#row5col1").append("<label>Pay Year</label>");
//     $("#row5col1").append('<select class="form-control" name="fromyearId" id="fromyearId"></select>');
        //arrearAdjYearList();
        //getfinancialYearDropForArrearAdj();
        $("#row4col1").append("<span id='frommonthidErr'></span>");
        $("#arreaAdjustmentBodyDiv").append("<div class='form-group col-lg-12'><center><button onclick=validatearrearadj() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=arrearAdjustment() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
        var sortByOptions = ["EmployeeCodeM", "EmployeeName"];
        getHardCodedOptions("sortBy", "Sort By", sortByOptions);
        getFinancialYear("frommonthid", "fromyearId");
        $("#empname").prop("readonly", true);
        $("#empcodem").prop("readonly", true);

//    $("#empcode").keypress(function (event) {
//        if (event.which == 13) {
//            getEmpDemodetailsforEmployeeAttendance()
//
//        }
//    });
        // $("#ddo").attr("onchange", "getEmployeeDateInQTUsingEmp()");
        getEmployeeDataInSalIncDateWise();
        $("#ddoId").attr("onchange", "getEmployeeDataInSalIncDateWise()");
        $("#empcode").attr("onchange", "getEmpDemodetailsforEmployeeAttendance()");
//        setTimeout(function () {
//            ddoListEmployeeAttendance();
//        }, 100);
//        setTimeout(function () {
//            locationEmployeeList();
//        }, 200);
        setTimeout(function () {
            employeeDepartmentList();
        }, 300);
        setTimeout(function () {
            employeeDesignationList();
        }, 400);
        setTimeout(function () {
            employeeNatureTypeList();
        }, 500);
        setTimeout(function () {
            employeeCityList();
        }, 600);
        setTimeout(function () {
            employeePFTypeList();
        }, 700);
        setTimeout(function () {
            employeeFundType();
        }, 800);
        setTimeout(function () {
            employeeMonthList();
        }, 900);
        setTimeout(function () {
            employeeBudgetHeadList();
        }, 950);
        setTimeout(function () {
            employeeYearList();
        }, 1000);

//getBudgetfinancialyearForConsolidateExpense("finyearId");
        //viewReDddoListForList("", "ddoId");
    }
}
$(document).on('change', '#fromyearId', function () {
    var year = $("#fromyearId").val();
    getFinancialMonth("frommonthid", year);
});
function arrearAdjYearList() {
    //create year
    $("#fromyearId").text("").append("<option value='0'>----Select Pay Year----</option>");
//    var i, yr;
//    var now = new Date();
//    for (i = 0; i < 10; i++) {
//        yr = now.getFullYear() + i;
//        $("#year").append($('<option/>').val(yr).text(yr));
//    }

    $.get(server_base_url + "/common/date", {
    }).done(function (data) {
        //alert(JSON.stringify(data));
        var financialYear = data.finacialYear;
        $("#fromyearId").append($('<option/>').val(financialYear).text(financialYear));
    });

    //create month
//    $("#month").text("").append("<option value='0'>----Select Month ----</option>");
//    $("#month").append("<option value='1'> January </option>");
//    $("#month").append("<option value='2'> February </option>");
//    $("#month").append("<option value='3'> March </option>");
//    $("#month").append("<option value='4'> April </option>");
//    $("#month").append("<option value='5'> May </option>");
//    $("#month").append("<option value='6'> June </option>");
//    $("#month").append("<option value='7'> July </option>");
//    $("#month").append("<option value='8'> August </option>");
//    $("#month").append("<option value='9'> September </option>");
//    $("#month").append("<option value='10'> October </option>");
//    $("#month").append("<option value='11'> November </option>");
//    $("#month").append("<option value='12'> December </option>");
}
function validatearrearadj()
{
    $('#fromyearIdErr').text("").val("");
    $('#ddoIdErr').text("").val("");
    $('#frommonthidErr').text("").val("");
    $('#arreartypeer').text("").val("");

    var ddo = $('#ddoId').val();
    var empcode = $('#empcode').val();
    var payMonth = $('#frommonthid').val();
    var payYear = $('#fromyearId').val();
    var arreartype = $("input[name=ratedDefinedFor]:checked").val();
    if (ddo == "" || ddo == 0) {
        $("#ddoId").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("ddoIdErr", "Please Select DDO.");
    }

//    else if (empcode == "" || empcode == 0) {
//        $("#empcode").focus();
//        $("#finyearIder").text("");
//        addSomeClass("fnameFieldGroup", "has-error");
//        displaySmallErrorMessages("empcodeErr", "Please Select Employee Code.");
//    }

    else if (payYear == "" || payYear == 0) {
        $("#fromyearId").focus();
        $("#tomonthidErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("fromyearIdErr", "Please Select Pay Year.");
    } else if (payMonth == "" || payMonth == 0) {
        $("#frommonthid").focus();
        $("#empcodeErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("frommonthidErr", "Please Select Pay Month.");
    } else if (arreartype == "" || arreartype == null || arreartype == "undefined") {

        $("#todateer").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("arreartypeer", "Please Select Arrear Type.");
    } else
    {
        $("#ddoIdErr").text("").val("");
        $("#empcodeErr").text("").val("");
        $("#frommonthidErr").text("").val("");
        $('#fromyearIder').text("").val("");
        viewEmpArrearAdj();
    }
}
function resetArrearAdj()
{
    $("#empcodeErr").text("").val("");
    $('#empcode').val("");
    $('#desigId').val("");
    $('#dept').val("");
    $('#empname').val("");
    $('#empcodem').val("");

    // $('#ddoId').val("0");
    $('#frommonthid').val("0");
    $('#tomonthid').val("0");
    $('#fromyearIder').text("").val("");
    $('#toyearIder').text("").val("");
    $('#ddoIdErr').text("").val("");
    $('#frommonthidErr').text("").val("");
    $('#fromyearId').val("0");
    $('#openibalIdErr').text("").val("");
    $('#dateIdErr').text("").val("");
}
function viewEmpArrearAdj()
{
    var ddo = $('#ddoId').val();
    var empcode = $('#empcode').val();
    var frommonth = $('#frommonthid').val();
    var fromyear = $('#fromyearId').val();
    var location = $("#LocationId").val();
    var department = $("#deptId").val();
    var designation = $("#desiId").val();
    var natureType = $("#natureId").val();
    var employeeCodeM = $("#empcodem").val();
//     var pfType= $("#pfId").val();
//     var  fundType= $("#fundtypeId").val();
    var arreartype = $("input[name=ratedDefinedFor]:checked").val();

    var employeeSearchJSON = {
        ddo: ddo,
        employeeCode: empcode,
        employeeCodeM: employeeCodeM,
        employeeName: $("#empname").val(),
        designation: designation,
        location: location,
        arrearType: arreartype,
        department: department,
        fromMonth: frommonth,
        fromYear: fromyear,
        postingCity: $("#cityid").val(),
        natureType: natureType
    }
    //alert(employeeSearchJSON);
    var loginUserId = getUserSessionElement("userId");
    $.get(server_base_url + "Payrl/PayrlDetls/Arrear/SearchEmplForArrearEditProcess", {
        processedBy: loginUserId,
        employeeJson: JSON.stringify(employeeSearchJSON),
        action: "view"
    }).done(function (data) {
       
        console.log(data);
        //alert(data);
        //var data="{"msg":"SearchEmployeeList","statuscode":"200","result":{"processed":[],"lockedprocess":[],"notprocessed":[{"employeeCode":"789","employeeCodeM":"789","employeeName":"CRSITIANO","location":"57bfdacc694d24c810e29f50","department":"5796faaa694d0676c3103ff9","designation":"57d4f9cf694da6ccbbfcabb0","salaryType":"579a0166694d506fbcdbf0ab","ddo":"579a0012694df0809f7e2e29","natureType":"574df9ca44ae887b21a2a601","postingCity":"57b2e670b5e508cffc315bb6","pfType":"579a010f694d506fbcdbf088","fundType":"57b555e1d04d271d94528b6d","budgetHead":"574ec1d844ae764b46a13549","earnings":0,"deductions":0,"month":0,"year":0,"isBlocked":false,"idStr":"57e5215b573258b66156e6e6","status":"Active"}]},"status":"success"}"
        if (data == NoData) {
            //alert("NoData");
            displaySmallErrorMessagesInRed("employeeArrearProcessMessageDiv", NoDataFoundMessage + "");
        } else if (data == fail || data.statuscode == fail) {
            //alert("NoData11");
            displaySmallErrorMessagesInRed("employeeArrearProcessMessageDiv", NoDataFoundMessage + "");
        } else if (data == unauthorized || data.statuscode == fail) {
            //alert("NoData22");
            displayErrMsgInTable("empSearchTable", unauthorizedMessage);
        } else if (data == statusException || data.statuscode == fail) {
            //alert("NoData33");
            displaySmallErrorMessagesInRed("employeeArrearProcessMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession || data.statuscode == fail) {
            //alert("NoData44");
            callSessionTimeout();
        } else {
            //alert("NoData44");
            //alert(data);


        }
        setTimeout(function ()
        {
            var dataPar = JSON.parse(data);
            var mainData = dataPar.result;
            arrearProcessedList1(mainData);
        }, 100);

    });
}
function arrearProcessedList1(data)
{
    //alert();
    if (checkUserPrivelege(pvViewArrearAdjustment)) {
        $("#headListDiv").text("");
        $("#arrearAdjDiv").text("").append('<div id="arrearAdjDivListPanel" class="panel panel-blue" />');
        $("#arrearAdjDivListPanel").append('<div id="empSearchListHeading" class="panel-heading" />');
        $("#empSearchListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee(Arrear Not Processed)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="arrearNotProcessed"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#arrearAdjDivListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#arrearNotProcessed").click(function () {
            $("#collapseOne2").toggle();
            if ($("#arrearNotProcessed span").hasClass("glyphicon-minus-sign")) {
                $("#arrearNotProcessed").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#arrearNotProcessed").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append('<div id="empSearchListBody" class = "panel-body pan" />');
        $("#empSearchListBody").append('<div id="panelRow" class="row table-responsive" />');

        $("#empSearchListBody").append('<center><div id="empSearchListErrorMsgId" /></center>');
        $("#empSearchListBody").append('<div id="empSearchListMainBody" class="table-responsive" />');
        $("#empSearchListMainBody").append('<table id="empSearchTable" class="table table-striped table-bordered table-hover" />');
        $("#empSearchTable").append('<thead id="empSearchTableHeadId" />');
        $("#empSearchTable").append('<tbody id="empSearchTableBodyId" />');
        if (checkUserPrivelege(pvUpdateArrearAdjustment)) {
            $("#empSearchTableHeadId").append('<tr><th>Employee Code</th><th>Employee Name</th><th>DDO</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th><th>Edit</th></tr>');
        } else {
            $("#empSearchTableHeadId").append('<tr><th>Employee Code</th><th>Employee Name</th><th>DDO</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th></tr>');
        }
        if (data == NoDataFoundMessage || data == undefined) {
            $("#empSearchTable").dataTable().fnDestroy();
            displayErrMsgInTable("empSearchTable", NoDataFoundMessage);
        } else {

            var str = '"employeeCode":"123","employeeCodeM":"123","employeeName":"SWAROOP","ddo":"57e38096e4b00d098329c072","location":"57e38789e4b09e2ad9244d99","department":"57e36095e4b0f7c0d6d6525f","designation":"57e2890be4b00209f5b4d0a5","salaryType":"GPF Scheme","natureType":"57e29da4e4b0f7c0d6d65245","postingCity":"57e3626ce4b0f7c0d6d652bc","pfType":"57e3669ae4b0f7c0d6d6531a","fundType":"57e36833e4b0f7c0d6d6534c","budgetHead":"57e3a1c1e4b09e2ad9244f02","earnings":0,"deductions":0,"month":0,"year":0,"isLocked":false,"sendToAccounts":false,"billNo":0,"idStr":"57ebcb12207ce6a3e74804e7","status":"Processed"';
            var dataPar = JSON.parse(data);
            //alert(dataPar);
            var sno;
            for (var i = dataPar.length - 1; i >= 0; i--) {
                sno++;

                var data1 = dataPar[i];

                var data2 = JSON.stringify(data1);
                $("#empSearchTableBodyId").append("<tr id='" + i + "' style='cursor:pointer;' >"
                        + "<td style='cursor:pointer;'><input type='hidden' value='" + data + "'/>" + data1.employeeCode + "</td>"
                        + "<td style='cursor:pointer;'>" + data1.employeeName + "</td>"
                        + "<td style='cursor:pointer;'>" + data1.ddoName + "</td>"
                        + "<td style='cursor:pointer;'>" + data1.locationName + "</td>"
                        + "<td style='cursor:pointer;'>" + data1.departmentName + "</td>"
                        + "<td style='cursor:pointer;'>" + data1.designationName + "</td>"
                        + "<td style='cursor:pointer;'>" + data1.salaryType + "</td>");
                if (checkUserPrivelege(pvUpdateArrearAdjustment)) {
                    $("#" + i).append("<td style='cursor:pointer;' onclick=editArrearProcess('" + encodeURI(data2) + "')><i class='fa fa-edit'><a  class='anchor_edit'>CHANGE</a></i></td>");
                }

            }
            $("#empSearchTable").dataTable();


        }

    }
}
function editArrearProcess(data1)
{
    //alert(data1);
    var data = decodeURI(data1)
    var dataPar = JSON.parse(data);
    // alert("dataaa"+data);
    var earningHeads = dataPar.earningHeads;
    var dedHeads = dataPar.deductionHeads;
    var totEar = dataPar.totalEarnings;
    var totDed = dataPar.totalDeductions;
    var netPay = dataPar.netPay;
    var id = dataPar.idStr;
    var ddo = dataPar.ddo;
    var empCode = dataPar.employeeCode;
    $("#headListDiv").text("").append('<div id="arrearheadListDivPanel" class="panel panel-blue" />');
    $("#arrearheadListDivPanel").text("").append('<div id="arrearheadListDivHeading" class="panel-heading" />');
    $("#arrearheadListDivHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Heads</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="HeadList"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

    $("#arrearheadListDivPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
    $("#HeadList").click(function () {
        $("#collapseOne3").toggle();
        if ($("#HeadList span").hasClass("glyphicon-minus-sign")) {
            $("#HeadList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#HeadList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append('<div id="headListDivBody" class = "panel-body pan" />');
    $("#headListDivBody").append('<div id="panelRow" class="row table-responsive" />');

    $("#headListDivBody").append('<center><div id="headlistErrorMsgId" /></center>');
    $("#headListDivBody").append('<div id="listMainBody" class="table-responsive" />');

//    $("#collapseOne1").append('<div id="arreaAdjustmentMainBody" class = "panel-body pan" />');
//    $("#arreaAdjustmentMainBody").append('<div id="panelRow" class="form-horizontal" />');
//    $("#arreaAdjustmentMainBody").append('<center><span id="arreaAdjustmentMessageDiv"></span></center>');
//    $("#arreaAdjustmentMainBody").append('<div id="arreaAdjustmentBodyDiv" class="row" />')

    $("#listMainBody").append('<div class="col-lg-12" id="row1">');
    $("#row1").append("<div id='row1col1' class='form-group col-lg-6' />");
    $("#row1col1").append("<label>Month and Year</label>");
    $("#row1col1").append("<select id='monthAndYear' class='form-control' style='width:44%;'>");

    //$("#monthAndYear").text("").append("<option value ='"+value+"' selected >"+option+"</option>");
    getDropDownForMonthAndYear('monthAndYear', ddo, empCode);


    //$("#monthAndYear option:contains('" + value + "')").attr("selected", "selected");

    $("#row1col1").append("<span id='monthAndYearErr'></span>");
    $("#row1").append("<div id='row1col2' class='form-group col-lg-6' />");
    $("#row1col2").append("<label>Arrear Type</label>");
    $("#row1col2").append("<input type='text' id='arrearType' class='form-control' readonly style='width:44%;'>");
    $("#row1col2").append("<span id='finyearIdErr'></span>");
    setTimeout(function () {
        var month = dataPar.month;
        var year = dataPar.year;
        var arrearType = dataPar.arrearType;
        //alert(arrearType);
        var value = month + '-' + year;
        $("#monthAndYear").val(value);
        $("#arrearType").val(arrearType);
        //alert(value);

    }, 600);
    displayEarningHeads(data1);
}
function displayEarningHeads(data)
{
    //alert("data11"+data);
    var data1 = decodeURI(data)
    //alert("data12"+data1);
    var dataPar = JSON.parse(data1);
    //alert("data13"+dataPar);
    var earningHeads = dataPar.earningHeads;
    var dedHeads = dataPar.deductionHeads;
    var totEar = dataPar.totalEarnings;
    var totDed = dataPar.totalDeductions;
    var netPay = dataPar.netPay;
    var id = dataPar.idStr;
    $("#arrearType").val(dataPar.arrearType);
    $("#listMainBody").append('<div id="headsDiv">');
//         $("#headsDiv").text("");
    $("#headsDiv").text("").append('<div class="col-lg-12" id="row2">');
    $("#row2").text("").append("<div id='row2col1' class='form-group col-lg-6' />");
    $("#row2").append("<div id='row2col11' class='form-group col-lg-6' />");
    $("#row2col11").append('<input type="hidden" name="employeeCode" id="employeeCode" value="' + dataPar.employeeCode + '">');
    $("#row2col11").append('<input type="hidden" name="ddo"  id="ddo" value="' + dataPar.ddo + '">');
    $("#row2col1").text("").append('<table id="empheadsTable" class="table table-striped table-bordered table-hover" />');
    $("#empheadsTable").append('<thead id="empheadsTableHeadId" />');
    $("#empheadsTable").append('<tbody id="empheadsTableBodyId" />');
    $("#empheadsTableHeadId").text("").append('<tr><th>SL No</th><th>Description</th><th>Arrear Amount</th><th>To Be Paid </th></tr>');
    var sno = 0;
    var totalEarnings = 0;
    var totalDeductions = 0;
    if (earningHeads != null)
    {
//        for (var i = earningHeads.length - 1; i >= 0; i--) {
        $("#empheadsTableBodyId").text("");
        for (var i = 0; i < earningHeads.length; i++) {
            sno++;

            var data1 = earningHeads[i];
            totalEarnings = totalEarnings + parseInt(data1.amount);
//           var data2=JSON.stringify(data1);
            $("#empheadsTableBodyId").append("<tr style='cursor:pointer;' >"
                    + "<td style='cursor:pointer;'><input type='hidden' value='" + data1.description + "'/>" + sno + "</td>"
                    + "<td style='cursor:pointer;'>" + data1.headName + "</td>"
                    + "<td style='cursor:pointer;'>" + data1.amount.toFixed(2) + "</td>"
                    + "<td style='cursor:pointer;'><input type='text' class='EarningAmount' name='paidAmount'  value='" + data1.amount.toFixed(2) + "'/></td></tr>");
        }
//    $("#empheadsTable").dataTable();
    }
    $("#row2").append("<div id='row2col2' class='form-group col-lg-6' />");
    $("#row2col2").append('<table id="empheadsDedTable" class="table table-striped table-bordered table-hover" />');
    $("#empheadsDedTable").append('<thead id="empheadsDedTableHeadId" />');
    $("#empheadsDedTable").append('<tbody id="empheadsDedTableBodyId" />');
    $("#empheadsDedTableHeadId").text("").append('<tr><th>SL No</th><th>Description</th><th>Arrear Amount</th><th>To Be Paid</th></tr>');
    var sno = 0;
    if (dedHeads != null)
    {
        $("#empheadsDedTableBodyId").text("");


        for (var i = 0; i < dedHeads.length; i++)
        {
            sno++;

            var data1 = dedHeads[i];
            //alert(data1);
//           var data2=JSON.stringify(data1);
            totalDeductions = totalDeductions + parseInt(data1.amount);
            $("#empheadsDedTableBodyId").append("<tr style='cursor:pointer;' >"
                    + "<td style='cursor:pointer;'><input type='hidden' value='" + data1.description + "'/>" + sno + "</td>"
                    + "<td style='cursor:pointer;'>" + data1.headName + "</td>"
                    + "<td style='cursor:pointer;'>" + data1.amount.toFixed(2) + "</td>"
                    + "<td style='cursor:pointer;'><input type='text' class='DeductionAmount' name='paidAmount' value='" + data1.amount.toFixed(2) + "'/></td></tr></table>");
        }
    } else
    {
        $("#empheadsDedTableBodyId").text("");
        $("#empheadsDedTableBodyId").append("<tr style='cursor:pointer;'>No Data Found</tr></table>");
    }
    $("#listMainBody").append('<div class="col-lg-12" id="row3">');
    $("#row3").text("").append("<div id='row3col1' class='form-group col-lg-6' />");
    $("#row3").append("<div id='row3col2' class='form-group col-lg-6'  />");
    $("#row3col2").text("").append("<label>Total Earnings</label>");
    $("#row3col2").append('<input type="text" class="form-control" readonly name="netEarnings" id="netEarnings" value="' + totalEarnings.toFixed(2) + '" style="width:44%;">');
    $("#row3col2").append("<span id='netEarningsErr'></span>");

    $("#listMainBody").append('<div class="col-lg-12" id="row4">');
    $("#row3").append("<div id='row4col1' class='form-group col-lg-6' />");
    $("#row3").append("<div id='row4col2' class='form-group col-lg-6' />");
    $("#row4col2").text("").append("<label>Total Deductions</label>");
    $("#row4col2").append('<input type="text" class="form-control" readonly name="netDeductions" id="netDeductions" value="' + totalDeductions.toFixed(2) + '" style="width:44%;">');
    $("#row4col2").append("<span id='netDeductionsErr'></span>");

    $("#listMainBody").append('<div class="col-lg-12" id="row5">');
    $("#row3").append("<div id='row5col1' class='form-group col-lg-6' />");
    $("#row3").append("<div id='row5col2' class='form-group col-lg-6'  />");
    $("#row5col2").text("").append("<label>net Pay</label>");
    var netPay = parseInt(parseInt(totalEarnings) - parseInt(totalDeductions));
    $("#row5col2").append('<input class="form-control" type="text" readonly name="netPay" id="netPay"  value="' + netPay.toFixed(2) + '"  style="width:44%;"></select>');
    $("#row5col2").append("<span id='netPayErr'></span>");
    $("#listMainBody").append("<div id='buttonDiv' class='form-group col-lg-12'>");
    $("#buttonDiv").text("").append("<center><button onclick=updatedatas('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='#' class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
    $("#monthAndYear").attr("onchange", "getHeadDetailsbasedOnMonthAndYear()");
    $('.DeductionAmount').keyup(function () {
        var sum = 0;
        $('.DeductionAmount').each(function () {
            sum += Number($(this).val());

        });

        $('#netDeductions').val(sum);
        getNetVal();
        $(".DeductionAmount").trigger("keyup");

    });


    $('.EarningAmount').keyup(function () {
        var sum = 0;
        $('.EarningAmount').each(function () {
            sum += Number($(this).val());
        });
        $('#netEarnings').val(sum);
        getNetVal();
        $(".EarningAmount").trigger("keyup");

    });


}
function getNetVal()
{

    var netSum = 0;
    var netDeductions = $('#netDeductions').val();
//       alert(netDeductions);
    var netEarnings = $('#netEarnings').val();
//        alert(netEarnings);
    netSum = parseInt(netEarnings) - parseInt(netDeductions);
//           alert(netSum);
    $('#netPay').val(netSum);
}
function getDropDownForMonthAndYear(id, ddo, empCode)
{
    var arrearData;
    var loginUserId = getUserSessionElement("userId");
    $.get(server_base_url + "Payrl/PayrlDetls/Arrear/getEmpPayMonthAndyear", {
        processedBy: loginUserId,
        ddo: ddo,
        empCode: empCode
    }).done(function (Demdata) {
        //alert(Demdata);
        if (Demdata != null)
        {

            arrearData = JSON.parse(Demdata);
            //alert("arrearData111"+arrearData);
            var arrearData11 = JSON.parse(arrearData);
            //alert("arrearData"+arrearData11);
            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            for (var i = 0; i < arrearData11.length; i++)
            {
                var month = arrearData11[i].month;
                var year = arrearData11[i].year;
//             alert(month);
//             alert(year);
                month--;
                var fromday = new Date(year, month, 1);
                // alert(fromday);
                var item = new Option(monthNames[fromday.getMonth()] + '-' + fromday.getFullYear(), (fromday.getMonth() + 1) + '-' + fromday.getFullYear());
                document.getElementById(id).options.add(item);
            }
        }
    });
}
function getHeadDetailsbasedOnMonthAndYear()
{
    //alert();
    var ddo = $('#ddo').val();
    var empCode = $('#employeeCode').val();
    var monthAndYear = $('#monthAndYear').val();
    monthAndYear = monthAndYear.split("-");
    var month = monthAndYear[0];
    var year = monthAndYear[1];

    var employeeSearchJSON = {
        ddo: ddo,
        employeeCode: empCode,
        month: month,
        year: year
    }
    //alert(employeeSearchJSON);
    var loginUserId = getUserSessionElement("userId");
    $.get(server_base_url + "/PayrlDetails/Arrear/getEmpHeadsForEmp", {
        processedBy: loginUserId,
        employeeJson: JSON.stringify(employeeSearchJSON)
    }).done(function (data) {
        console.log(data);
        //alert(data);
        //var data="{"msg":"SearchEmployeeList","statuscode":"200","result":{"processed":[],"lockedprocess":[],"notprocessed":[{"employeeCode":"789","employeeCodeM":"789","employeeName":"CRSITIANO","location":"57bfdacc694d24c810e29f50","department":"5796faaa694d0676c3103ff9","designation":"57d4f9cf694da6ccbbfcabb0","salaryType":"579a0166694d506fbcdbf0ab","ddo":"579a0012694df0809f7e2e29","natureType":"574df9ca44ae887b21a2a601","postingCity":"57b2e670b5e508cffc315bb6","pfType":"579a010f694d506fbcdbf088","fundType":"57b555e1d04d271d94528b6d","budgetHead":"574ec1d844ae764b46a13549","earnings":0,"deductions":0,"month":0,"year":0,"isBlocked":false,"idStr":"57e5215b573258b66156e6e6","status":"Active"}]},"status":"success"}"
        if (data == NoData) {
            // alert("NoData");
            displaySmallErrorMessagesInRed("employeeArrearProcessMessageDiv", NoDataFoundMessage + "");
        } else if (data == fail) {
            //alert("NoData11");
            displaySmallErrorMessagesInRed("employeeArrearProcessMessageDiv", NoDataFoundMessage + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            //alert("NoData22");
            displayErrMsgInTable("empSearchTable", unauthorizedMessage);
        } else if (data == statusException) {
            //alert("NoData33");
            displaySmallErrorMessagesInRed("employeeArrearProcessMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            //alert("NoData44");
            callSessionTimeout();
        } else {

            var dataPar = JSON.parse(data);
            var data1 = dataPar.result;
            //alert("result"+data1);
            var dataPar = JSON.parse(data1);
            var dataaa = dataPar[0];
            //alert("dataaa"+dataaa);
            var data2 = JSON.stringify(dataaa);
            //alert(data2);
            displayEarningHeads(encodeURI(data2));

        }
//          setTimeout(function () 
//          {
//                var dataPar=JSON.parse(data); 
//            var mainData = dataPar.result;
//                arrearProcessedList1(mainData);
//            }, 100);

    });






}
function updatedatas(id)
{
    var earningHeads = [];
    var deductionHeads = [];
    var totalDedcutions = 0;
    var totalEarnings = 0;
    $('table#empheadsTable tbody tr').each(function () {
        var row = $(this).closest('tr');
        earningHeads.push({
            description: row.find('td:eq(0) input').val(),
            amount: Number(row.find('td:eq(3) input').val())
        });
        totalEarnings = totalEarnings + Number(row.find('td:eq(2) input').val());
    });
    //alert("----earningHeads"+earningHeads);
    $('table#empheadsDedTable tbody tr').each(function () {
        var row = $(this).closest('tr');
        deductionHeads.push({
            description: row.find('td:eq(0) input').val(),
            amount: Number(row.find('td:eq(3) input').val())
        });

//            totalDedcutions = totalDedcutions + Number(row.find('td:eq(2) input').val());
    });
    //alert(deductionHeads);
//         alert(id);
    if (deductionHeads != null || earningHeads != null)
    {

        updateHeads(earningHeads, deductionHeads, id)
    }

}
function updateHeads(earningHeads, deductionHeads, id)
{

    var employeeJson = {
        earningHeads: earningHeads,
        deductionHeads: deductionHeads,
        totalEarnings: $('#netEarnings').val(),
        totalDeductions: $('#netDeductions').val(),
        netPay: $('#netPay').val()
    }
    var loginUserId = getUserSessionElement("userId");
    $.get(server_base_url + "Payrl/PayrlDetls/Arrear/SaveArrearHeads",
            {
                processedBy: loginUserId,
                employeeJson: JSON.stringify(employeeJson),
                id: id
            }).done(function (data) {
        console.log(data);
        //alert(data);
        //var data="{"msg":"SearchEmployeeList","statuscode":"200","result":{"processed":[],"lockedprocess":[],"notprocessed":[{"employeeCode":"789","employeeCodeM":"789","employeeName":"CRSITIANO","location":"57bfdacc694d24c810e29f50","department":"5796faaa694d0676c3103ff9","designation":"57d4f9cf694da6ccbbfcabb0","salaryType":"579a0166694d506fbcdbf0ab","ddo":"579a0012694df0809f7e2e29","natureType":"574df9ca44ae887b21a2a601","postingCity":"57b2e670b5e508cffc315bb6","pfType":"579a010f694d506fbcdbf088","fundType":"57b555e1d04d271d94528b6d","budgetHead":"574ec1d844ae764b46a13549","earnings":0,"deductions":0,"month":0,"year":0,"isBlocked":false,"idStr":"57e5215b573258b66156e6e6","status":"Active"}]},"status":"success"}"
        if (data == NoData) {
            //alert("NoData");
            displaySmallErrorMessagesInRed("employeeArrearProcessMessageDiv", NoDataFoundMessage + "");
        } else if (data == fail) {
            //alert("NoData11");
            displaySmallErrorMessagesInRed("employeeArrearProcessMessageDiv", NoDataFoundMessage + "");
        } else if (data == unauthorized) {
            //alert("NoData22");
            displayErrMsgInTable("empSearchTable", unauthorizedMessage);
        } else if (data == statusException) {
            //alert("NoData33");
            displaySmallErrorMessagesInRed("employeeArrearProcessMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            //alert("NoData44");
            callSessionTimeout();
        } else {
            viewEmpArrearAdj();


        }


    });
}

function getfinancialYearDropForArrearAdj()
{
    var currentFinancialYear;
    var finyearArray;
    var fromFinacialYear;
    var toFinacialYear;
    var fromyear;
    var toyear;
    $("#fromyearId").text("").append("<option value='0'>----Select Pay Year----</option>");
    currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    // alert(currentFinancialYear);
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        finyearArray = currentFinancialYear.split("~");
    }
    if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
    {
        fromFinacialYear = finyearArray[0];
        toFinacialYear = finyearArray[1];

    }
    if (fromFinacialYear != null || fromFinacialYear != "" || fromFinacialYear != undefined)
    {
        var fromYearArray = fromFinacialYear.split("/");
        fromyear = fromYearArray[2];
        //alert(fromyear);
        $("#fromyearId").append($('<option/>').val(fromyear).text(fromyear));

    }
    if (toFinacialYear != null || toFinacialYear != "" || toFinacialYear != undefined)
    {
        var toYearArr = toFinacialYear.split("/");
        toyear = toYearArr[2];
        //alert(toyear);
        $("#fromyearId").append($('<option/>').val(toyear).text(toyear));
    }
}
