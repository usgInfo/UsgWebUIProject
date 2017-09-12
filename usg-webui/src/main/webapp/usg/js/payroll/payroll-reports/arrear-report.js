/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function arrearReport(divId)
{
    if (checkUserPrivelege(pvViewArrearReport)) {
        //alert(divId);
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll </a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollReportsMenuTabs()">Payroll Reports</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="arrearReport()">Arrear Report</a>');
        // $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll Reports</a> ><label><a href="javascript:payrollReportsMenuTabs()"Arrear Report</label>');
        $("#" + divId).text("").append('<div id="arreaReportDivId"></div>');
        $("#arreaReportDivId").text("").append('<div id="arreaReportTabMenu" />');

        $("#arreaReportTabMenu").append('<div id="arreaReportMainMenu" class="row" />');
        $("#arreaReportTabMenu").append('<div id="arrearReportListDiv" class="row" />');
        $("#arreaReportTabMenu").append('<div id="headListDiv" class="row" />');

        $("#arreaReportMainMenu").append('<div id="arreaReportMainPanel" class="panel panel-blue" />');
        $("#arreaReportMainPanel").append('<div id="arreaReportMainHeading" class="panel-heading" />');
        $("#arreaReportMainHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" ><center>Arrear Report</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colArrearReportCollapse"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');
        $("#arreaReportMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colArrearReportCollapse").click(function () {
            $("#collapseOne1").toggle();
            if ($("#colArrearReportCollapse span").hasClass("glyphicon-minus-sign")) {
                $("#colArrearReportCollapse").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colArrearReportCollapse").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="arreaReportMainBody" class = "panel-body pan" />');
        $("#arreaReportMainBody").append('<div id="panelRow" class="form-horizontal" />');
        $("#arreaReportMainBody").append('<center><span id="arreaReportMessageDiv"></span></center>');
        $("#arreaReportMainBody").append('<div id="arreaReportBodyDiv" class="row" />')
        $("#arreaReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ddoDiv"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" name="ddoId" id="ddoId"></select><span id="ddoIdErr" class="text-danger"></span>'
                // + '</div><div class="form-group col-lg-6"><label for="employCode">Employee Code </label><input type="text" id="empcode" placeholder="Employee Code" class="form-control"/></select><span id="empcodeErr" class="text-danger"></span></div></div>');
                + '</div><div class="form-group col-lg-6"><label for="employCode">Employee Code </label><select class="form-control" name="empcode" id="empcode"></select><span id="empcodeErr" class="text-danger"></span></div></div>');
        $("#arreaReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employeeName">Employee Name </label><input type="text" id="empname" class="form-control"/><span id="empNameErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="empCodeM">Employee Code(M) </label><input type="text" id="empcodem" class="form-control" /><span id="empCodeMErr" class="text-danger"></span></div></div>');
        $("#arreaReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="LocationId" id="LocationId"></select><span id="LocationIdErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="deptId" id="deptId"></select><span id="departmentErr" class="text-danger"></span></div></div>');
        $("#arreaReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="desiId" id="desiId"></select><span id="designationErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureId" id="natureId"></select><span id="natureTypeErr" class="text-danger"></span></div></div>');
        $("#arreaReportBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="cityid" id="cityid"></select><span id="postingCityError" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="sortBy">Sort By </label><select class="form-control" name="sortBy" id="sortBy"></select><span id="sortByError" class="text-danger"></span></div></div>');
        $("#arreaReportBodyDiv").append('<div class="col-lg-12" id="row4">');
        $("#row4").append("<div id='seventhDivCol2' class='form-group col-lg-6' />");
        $("#row4").append("<div id='row4col1' class='form-group col-lg-6' />");
        $("#row4col1").append("<label>Month</label>");
        $("#row4col1").append('<select class="form-control" name="frommonthid" id="frommonthid"></select>');
        $("#row4col1").append("<span id='frommonthidErr'></span>");

        $("#seventhDivCol2").append("<label>Year</label>");
        $("#seventhDivCol2").append('<select class="form-control" name="fromyearId" id="fromyearId"></select>');
        $("#seventhDivCol2").append("<span id='fromyearIdErr'></span>");
        $("#arreaReportBodyDiv").append("<div class='form-group col-lg-12'><center><button onclick=validatearrReport() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetArrearAdj() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
        var sortByOptions = ["EmployeeCodeM", "EmployeeName"];
        getHardCodedOptions("sortBy", "Sort By", sortByOptions);
        getFinancialYear("frommonthid", "fromyearId");
        $("#empname").prop("readonly", true);
        $("#empcodem").prop("readonly", true);
        $("#ddoId").attr("onchange", "loadEmpcodeforArrearReport();").trigger("onchange");
        $("#empcode").attr("onchange", "getEmpDemodetailsforEmployeeAttendance()");
//        $("#empcode").keypress(function(event) {
//            if (event.which == 13) {
//                getEmpDemodetailsforEmployeeAttendance()
//
//            }
//        });

        $("#empcode").keypress(function (event) {
            if (event.which == 13) {
                getEmpDemodetailsforEmployeeAttendance()

            }
        });
//        setTimeout(function() {
//            ddoListEmployeeAttendance();
//        }, 100);
//        setTimeout(function() {
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
            employeeBudgetHeadList();
        }, 950);

        getLoggedInDDOLocationInDropDown("ddoId", "LocationId");
        //   viewReDddoListForList("", "ddoId");
    }
}
$(document).on('change', '#fromyearId', function () {
    var year = $("#fromyearId").val();
    getFinancialMonth("frommonthid", year);
});
function validatearrReport()
{

    var ddo = $('#ddoId').val();
    var empcode = $('#empcode').val();
    var payMonth = $('#frommonthid').val();
    var payYear = $('#fromyearId').val();
    if (ddo == "" || ddo == 0) {
        $("#ddoId").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("ddoIdErr", "Please Select DDO.");
    } else if (payYear == "" || payYear == 0)
    {
        $("#fromyearId").focus();
        $("#tomonthidErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("fromyearIdErr", "Please Select From Year.");
    } else if (payMonth == "" || payMonth == 0) {
        $("#frommonthid").focus();
        $("#empcodeErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("frommonthidErr", "Please Select From Month.");
    } else
    {
        $("#ddoIdErr").text("").val("");
        $("#empcodeErr").text("").val("");
        $("#frommonthidErr").text("").val("");
        $('#fromyearIder').text("").val("");
        viewEmpArrearReportList();
    }
}
function viewEmpArrearReportList()
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
    var sortBy = $("#sortBy").val();
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
        payMonth: frommonth,
        payYear: fromyear,
        postingCity: $("#cityid").val(),
        natureType: natureType,
        sortBy: sortBy
    }
    //alert(employeeSearchJSON);
    var loginUserId = getUserSessionElement("userId");
    $.get(server_base_url + "payroll/Report/ArrearReportViewService", {
        processedBy: loginUserId,
        employeeJson: JSON.stringify(employeeSearchJSON),
        sortBy: sortBy,
        action: "view"
    }).done(function (data) {
        console.log(data);
        //alert(data);
        //var data="{"msg":"SearchEmployeeList","statuscode":"200","result":{"processed":[],"lockedprocess":[],"notprocessed":[{"employeeCode":"789","employeeCodeM":"789","employeeName":"CRSITIANO","location":"57bfdacc694d24c810e29f50","department":"5796faaa694d0676c3103ff9","designation":"57d4f9cf694da6ccbbfcabb0","salaryType":"579a0166694d506fbcdbf0ab","ddo":"579a0012694df0809f7e2e29","natureType":"574df9ca44ae887b21a2a601","postingCity":"57b2e670b5e508cffc315bb6","pfType":"579a010f694d506fbcdbf088","fundType":"57b555e1d04d271d94528b6d","budgetHead":"574ec1d844ae764b46a13549","earnings":0,"deductions":0,"month":0,"year":0,"isBlocked":false,"idStr":"57e5215b573258b66156e6e6","status":"Active"}]},"status":"success"}"
        if (data == NoData) {
            //alert("NoData");
            displaySmallErrorMessagesInRed("arreaReportMessageDiv", NoDataFoundMessage + "");
        } else if (data == fail) {
            //alert("NoData11");
            displaySmallErrorMessagesInRed("arreaReportMessageDiv", NoDataFoundMessage + "");
        } else if (data == unauthorized) {
            //alert("NoData22");
        } else if (data == statusException) {
            //alert("NoData33");
            displaySmallErrorMessagesInRed("arreaReportMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            //alert("NoData44");
            callSessionTimeout();
        } else {

        }

        var dataPar = JSON.parse(data);
        var mainData = dataPar.result;
        arrearProcessedREportList(mainData, data);


    });
}
function arrearProcessedREportList(data)
{
    if (checkUserPrivelege(pvViewArrearReport)) {
        //alert(data);
        //$("#headListDiv").text("");
        $("#headListDiv").text("");
        $("#arrearReportListDiv").text("").append("<input type='hidden' name='adata' id='adata'>");
        $("#adata").val(data)
        $("#arrearReportListDiv").append('<div id="arrearReportListDivListPanel" class="panel panel-blue" />');
        $("#arrearReportListDivListPanel").append('<div id="empSearchListHeading" class="panel-heading" />');
        $("#empSearchListHeading").append('<class="panel-title" a data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2" href="#collapseOne2"><center>List of Employee(Arrear  Processed)</center></a>');

        $("#arrearReportListDivListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#collapseOne2").append('<div id="empSearchListBody" class = "panel-body pan" />');
        $("#empSearchListBody").append('<div id="panelRow" class="row table-responsive" />');

        $("#empSearchListBody").append('<center><div id="empSearchListErrorMsgId" /></center>');
        $("#empSearchListBody").append('<div id="empSearchListMainBody" class="table-responsive" />');
        $("#empSearchListMainBody").append('<table id="empSearchTable" class="table table-striped table-bordered table-hover" />');
        $("#empSearchTable").append('<thead id="empSearchTableHeadId" />');
        $("#empSearchTable").append('<tbody id="empSearchTableBodyId" />');
        $("#empSearchTableHeadId").append('<tr><th>Employee Code</th><th>Employee Name</th><th>DDO</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th></tr>');
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
                $("#empSearchTableBodyId").append("<tr style='cursor:pointer;' >"
                        + "<td style='cursor:pointer;'><input type='hidden' value='" + data + "'/>" + data1.employeeCode + "</td>"
                        + "<td style='cursor:pointer;'>" + data1.employeeName + "</td>"
                        + "<td style='cursor:pointer;'>" + data1.ddoName + "</td>"
                        + "<td style='cursor:pointer;'>" + data1.locationName + "</td>"
                        + "<td style='cursor:pointer;'>" + data1.departmentName + "</td>"
                        + "<td style='cursor:pointer;'>" + data1.designationName + "</td>"
                        + "<td style='cursor:pointer;'>" + data1.salaryType + "</td> </tr>");

            }
            $("#empSearchTable").dataTable();

//    $("#headListDiv").text("");
            $("#arrearReportListDiv").append("<div id='panelRow8' class='row' style='padding-bottom: 7px;' />");
            $("#panelRow8").append("<div  class='col-xs-3' /><div class='col-xs-3'><button type='button'  value='Preview' class='btn btn-success  pull-right mr5'  onclick='prviewArrearReport(" + data + ")'>Preview</button></div>");
        }
    }
}
function prviewArrearReport(data)
{

    var month = $('#frommonthid').val();
    var year = $('#fromyearId').val();
    var ddo = $('#ddoId').val();
    // var employeeSearchJSON=JSON.stringify(data);
    // var dataPar=JSON.parse(data); 
    //alert(data);
    var ids = [];
    for (var i = data.length - 1; i >= 0; i--)
    {
        ids[i] = data[i]._id.$oid;



    }
    //  alert("-----"+employeeSearchJSON);
//      var dataPar=JSON.parse(employeeSearchJSON); 
//       alert("-----"+dataPar);
    // $("#headListDiv").append("<iframe id='iframe'  src=" + server_base_url + '/Payroll/PayrollDetails/previewArrearReport?month=' + month + '&year=' + year + '&employeeSearchJSON='+encodeURI(JSON.stringify(employeeSearchJSON)) + "height='500px' width='100%'></iframe>");
    $("#headListDiv").text("").append("<iframe id='iframe'  height='500px' width='100%' src=" + server_base_url + '/Payroll/PayrollDetails/previewArrearReport?ddo=' + ddo + '&month=' + month + '&year=' + year + '&employeeSearchJSON=' + JSON.stringify(ids) + "></iframe>");

}
function loadEmpcodeforArrearReport()
{
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];
    var ddo = $("#ddoId").val();
    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: ddo,
        fromDt: fromDate,
        toDate: toDate,
        location: getUserSessionElement(seLocationId)
    }).done(function(pdata) {
        pdata = JSON.parse(pdata);
        if (pdata == null || pdata == "" || pdata == 500 || pdata == 501)
        {
            $("#empcode").text("").append("<option >----" + NoDataFound + "----</option>");
        } else {
            $("#empcode").text("").append("<option  value='' selected >----[Employee Code]-Employee Name ----</option>");
            for (var i = 0; i < pdata.length; i++)
            {
                $("#empcode").append("<option  value='" + pdata[i].employeeCode + "'>[" + pdata[i].employeeCode + "]-" + pdata[i].employeeName + "</option>");
            }
        }

    });
}