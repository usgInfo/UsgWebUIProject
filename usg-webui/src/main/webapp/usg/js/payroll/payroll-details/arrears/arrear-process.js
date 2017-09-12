/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @misha thomas
 */


function arrearProcess(divId)
{
    if (checkUserPrivelege(pvCreateArrear) || checkUserPrivelege(pvViewArrear)) {
        scrolupfunction();
        var financialYear = getUserSessionElement(seCurrentFinancialYear);
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a>><a href="javascript:void(0)" onclick="arrearProcess()" data-toggle="tab">Arrear Process</a>');
        $("#" + divId).text("").append('<div id="arrearProcessDivId"></div>');
        $("#arrearProcessDivId").text("").append('<div id="arrearProcessTabMenu" />');

        $("#arrearProcessTabMenu").append('<div id="arrearProcessMainMenu" class="row" />');
        $("#arrearProcessTabMenu").append('<div id="arrearnotprocessedDiv" class="row" />');
        $("#arrearProcessTabMenu").append('<div id="arrearprocessedButtonDiv" class="row" />');
        $("#arrearProcessTabMenu").append('<div id="arrearProcessedDiv" class="row" />');
        $("#arrearProcessTabMenu").append('<div id="arrearnotprocessedButtonDiv" class="row" />');
        $("#arrearProcessTabMenu").append('<div id="arrearLockedDiv" class="row" />');

        $("#arrearProcessTabMenu").append('<div id="arrearlockedDiv" class="row" />');
        $("#arrearProcessTabMenu").append('<div id="buttonDiv" class="row" />');

        $("#arrearProcessMainMenu").append('<div id="arrearProcessMainPanel" class="panel panel-blue" />');
        $("#arrearProcessMainPanel").append('<div id="arrearProcessMainHeading" class="panel-heading" />');
        $("#arrearProcessMainHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Arrear Process</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colArrearProcess"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#arrearProcessMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colArrearProcess").click(function () {
            $("#collapseOne1").toggle();
            if ($("#colArrearProcess span").hasClass("glyphicon-minus-sign")) {
                $("#colArrearProcess").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colArrearProcess").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="arrearProcessMainBody" class = "panel-body pan" />');
        $("#arrearProcessMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#arrearProcessMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#arrearProcessMainBody").append('<center><span id="arrearProcessMessageDiv"></span></center>');
        $("#arrearProcessMainBody").append('<div id="arrearProcessBodyDiv" class="row" />');

        $("#arrearProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6" id="ddoDiv"><label for="ddo">DDO <span class="require">*</span></label><select class="form-control" name="ddoId" id="ddoId"></select><span id="ddoErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="employCode">Employee Code </label><select  id="empcode" class="form-control"/></select><span id="empCodeErr" class="text-danger"></span></div></div>');

        getLoggedInDDOInDropDown("ddoId", "");

        $("#arrearProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="employeeName">Employee Name </label><input type="text" id="empname" class="form-control"/><span id="empNameErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="empCodeM">Employee Code(M) </label><input type="text" id="empcodem" class="form-control" /><span id="empCodeMErr" class="text-danger"></span></div></div>');
        $("#arrearProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="location">Location </label><select class="form-control" name="LocationId" id="LocationId"></select><span id="LocationIdErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="department">Department </label><select class="form-control" name="deptId" id="deptId"></select><span id="departmentErr" class="text-danger"></span></div></div>');

        getLoggedInLocationInDropDown("LocationId", "");

        $("#arrearProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="designation">Designation </label><select class="form-control" name="desiId" id="desiId"></select><span id="designationErr" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="natureType">Nature Type </label><select class="form-control" name="natureId" id="natureId"></select><span id="natureTypeErr" class="text-danger"></span></div></div>');
        $("#arrearProcessBodyDiv").append('<div class="col-lg-12"><div class="form-group col-lg-6"><label for="postingCity">Posting City </label><select class="form-control" name="cityid" id="cityid"></select><span id="postingCityError" class="text-danger"></span>'
                + '</div><div class="form-group col-lg-6"><label for="sortBy">Sort By </label><select class="form-control" name="sortBy" id="sortBy"></select><span id="sortByError" class="text-danger"></span></div></div>');

        $("#arrearProcessBodyDiv").append('<div class="col-lg-12" id="paymodeDiv">');
        $("#paymodeDiv").append("<div id='sixthRoewCol1' class='form-group col-lg-6' />");
        $("#sixthRoewCol1").append("<label>Pay Mode</label>");
        $("#sixthRoewCol1").append("<select id='paymodeId' class='form-control' />");
        $("#paymodeDiv").append("<div id='sixthRoewCol2' class='form-group col-lg-6' />");
        $("#sixthRoewCol2").append("<label>Bank</label>");
        $("#sixthRoewCol2").append("<select id='bankId' class='form-control' />");

//    $("#arrearProcessBodyDiv").append('<div class="col-lg-12" id="seventhDiv">');
//    $("#seventhDiv").append("<div id='seventhDivCol1' class='form-group col-lg-6' />");
//    $("#seventhDivCol1").append("<label>Pay Month<span class='require'> *</span></label>");
//    $("#seventhDivCol1").append("<select id='monthId' class='form-control'>");
//    $("#monthId").append("<option id=''value='0' >-------------Select Month-----------------------------------------</option>");
//    $("#seventhDivCol1").append("<span id='monthIdErr'></span>");

        $("#arrearProcessBodyDiv").append('<div class="col-lg-12" id="seventhDiv">');
        $("#seventhDiv").append("<div id='eighthDivCol1' class='form-group col-lg-6' />");
        $("#eighthDivCol1").append("<label>Pay Year<span class='require'> *</span></label>");
        $("#eighthDivCol1").append("<select id='yearId' class='form-control'>");
        $("#eighthDivCol1").append("<span id='yearIdErr'></span>");

        $("#seventhDiv").append("<div id='seventhDivCol2' class='form-group col-lg-6' />");
        $("#seventhDivCol2").append('<label class="control-label">Arrear Type:<span class="require"> *</span></label>');
//    $("#seventhDivCol2").append('<div class="bankname"></div>');
        $("#seventhDivCol2").append('<div id="DAFieldDiv" class="">Day Wise<input type="radio" name="ratedDefinedFor" id="dayWise" value="day" style="margin-left:20px;margin-right:20px;">Month Wise<input type="radio" name="ratedDefinedFor" id="monthWise" value="Month" style="margin-left:20px;"><span id="arreartypeer"></span></div>');

//    $("#arrearProcessBodyDiv").append('<div class="col-lg-12" id="eighthDiv">');
//    $("#eighthDiv").append("<div id='eighthDivCol1' class='form-group col-lg-6' />");
//    $("#eighthDivCol1").append("<label>Pay Year<span class='require'> *</span></label>");
//    $("#eighthDivCol1").append("<select id='yearId' class='form-control'>");
//    $("#eighthDivCol1").append("<span id='yearIdErr'></span>");

        $("#arrearProcessBodyDiv").append('<div class="col-lg-12" id="eighthDiv">');
        $("#eighthDiv").append("<div id='seventhDivCol1' class='form-group col-lg-6' />");
        $("#seventhDivCol1").append("<label>Pay Month<span class='require'> *</span></label>");
        $("#seventhDivCol1").append("<select id='monthId' class='form-control'>");
        $("#monthId").append("<option id=''value='0' >-------------Select Pay Month-----------------------------------------</option>");
        $("#seventhDivCol1").append("<span id='monthIdErr'></span>");

        if (financialYear != null || financialYear != "" || financialYear != undefined)
        {
            var finyearArray = financialYear.split("~");
        }
        if (finyearArray != null || finyearArray != "" || finyearArray != undefined)
        {
            var fromFinacialYear = finyearArray[0];
            var toFinacialYear = finyearArray[1];


        }

        $("#eighthDiv").append("<div id='eighthDivCol2' class='form-group col-lg-6' />");
        $("#eighthDivCol2").append('<label>From Date <span class="require">*</span></label>');
        $("#eighthDivCol2").append('<input type="text" class="form-control" id="fromdate" placeholder="">');
        $("#eighthDivCol2").append('<input type="hidden" name="month1"/>');
        $("#eighthDivCol2").append('<input type="hidden" name="year1"/>');
        $("#fromdate").datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear
        });
        $("#eighthDivCol2").append("<span id='fromdateer'></span>");

        $("#arrearProcessBodyDiv").append('<div class="col-lg-12" id="ninthDiv">');
        $("#ninthDiv").append("<div id='ninthDivCol1' class='form-group col-lg-6' />");
        $("#ninthDivCol1").append("<label>Arrear Order No</label>");
        $("#ninthDivCol1").append('<input type="text" class="form-control" id="arrearOrderId" placeholder="">');
        $("#ninthDivCol1").append("<span id='arrearOrderIdErr'></span>");

        $("#ninthDiv").append("<div id='ninthDivCol2' class='form-group col-lg-6' />");
        $("#ninthDivCol2").append('<label>To Date <span class="require">*</span></label>');
        $("#ninthDivCol2").append('<input type="text" class="form-control" id="todate" placeholder="">');
        $("#ninthDivCol2").append('<input type="hidden" name="month2"/>');
        $("#ninthDivCol2").append('<input type="hidden" name="year2"/>');
        $("#todate").datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            startDate: fromFinacialYear,
            endDate: toFinacialYear
        });
        $("#ninthDivCol2").append("<span id='todateer'></span>");

        $("#arrearProcessBodyDiv").append('<div class="col-lg-12" id="Row10">');
        $("#Row10").append("<div id='Row10Col1' class='form-group col-lg-6' />");
        $("#Row10Col1").append("<label class='control-label'>Transfer to PF</label>");
        $("#Row10Col1").append("<input type='checkbox' id='transferToPf' name='transferToPf' value='YES' style='margin-left:20px;'> ");
        getFinancialYear("monthId", "yearId");

        $("#arrearProcessBodyDiv").append("<div class='form-group col-lg-12'><center><button onclick=validatearrearprocess() class='btn btn-success' style='height:40px;width:80px'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=arrearProcess() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
        var sortByOptions = ["EmployeeCodeM", "EmployeeName"];
        getHardCodedOptions("sortBy", "Sort By", sortByOptions);
        setPayModeforArrearProcess("paymodeId");
        viewBankListForarrearprocess("", "bankId");
        $("#empname").prop("readonly", true);
        $("#empcodem").prop("readonly", true);

//    $("#empcode").keypress(function (event) {
//        if (event.which == 13) {
//            getEmpDemodetailsforEmployeeArrear()
//
//        }
//    });

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
//    setTimeout(function () {
//        employeePFTypeList();
//    }, 700);
//    setTimeout(function () {
//        employeeFundType();
//    }, 800);
        setTimeout(function () {
            //employeeMonthList();
        }, 900);
        setTimeout(function () {
            employeeBudgetHeadList();
        }, 950);
        setTimeout(function () {
            //getfinancialYearDropForArrear();
        }, 1000);


    }
}
$(document).on('change', '#yearId', function () {
    var year = $("#yearId").val();
    getFinancialMonth("monthId", year);
});

//function arrearYearList() {
//    //create year
//    $("#yearId").text("").append("<option value='0'>----Select Year----</option>");
////    var i, yr;
////    var now = new Date();
////    for (i = 0; i < 10; i++) {
////        yr = now.getFullYear() + i;
////        $("#year").append($('<option/>').val(yr).text(yr));
////    }
//
//    $.get(server_base_url + "/common/date", {
//    }).done(function(data) {
//        //alert(JSON.stringify(data));
//        var financialYear = data.finacialYear;
//        $("#yearId").append($('<option/>').val(financialYear).text(financialYear));
//    });
//
//    //create month
////    $("#month").text("").append("<option value='0'>----Select Month ----</option>");
////    $("#month").append("<option value='1'> January </option>");
////    $("#month").append("<option value='2'> February </option>");
////    $("#month").append("<option value='3'> March </option>");
////    $("#month").append("<option value='4'> April </option>");
////    $("#month").append("<option value='5'> May </option>");
////    $("#month").append("<option value='6'> June </option>");
////    $("#month").append("<option value='7'> July </option>");
////    $("#month").append("<option value='8'> August </option>");
////    $("#month").append("<option value='9'> September </option>");
////    $("#month").append("<option value='10'> October </option>");
////    $("#month").append("<option value='11'> November </option>");
////    $("#month").append("<option value='12'> December </option>");
//}
function ddoListEmployeeAttendance() {
    $("#ddoId").text("").append("<option value='0'>----Select DDO----</option>");
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (pdata) {
        for (var i = 0; i < pdata.length; i++) {
            $("#ddoId").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
        }
    });
}
function  getEmpDemodetailsforEmployeeArrear()
{
    var ecode = $("#empcode").val();
    $.get(server_base_url + "hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function (pdata) {

        if (pdata == null || pdata == "" || pdata == 500)
        {
            displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFound + "<br /><br />");
        } else {
            $('#empname').val(pdata[0].employeeName);
            $('#empcodem').val(pdata[0].employeeCodeM);
            $.get(server_base_url + "hrms/salary/Department/ViewList", {
            }).done(function (bdata) {

                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].department == bdata[i].department) {
                        $("#deptId").append("<option id=''value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].department + "</option>");
                    }
                }
            });
            $.get(server_base_url + "hrms/salary/Designation/ViewList", {
            }).done(function (bdata) {

                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].designation == bdata[i].designation) {
                        $("#desiId").append("<option id=''value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].designation + "</option>");
                    }
                }
            });
            $.get(server_base_url + "hrms/common/Nature/View", {
            }).done(function (bdata) {

                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].natureType == bdata[i].natureName) {
                        $("#natureId").append("<option id=''value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].natureName + "</option>");
                    }
                }
            });
//            $.get(server_base_url + "budget/master/FundType/View", {
//            }).done(function (bdata) {
//
//                for (var i = 0; i < bdata.length; i++) {
//                    if (pdata[0].employeeFundType == bdata[i].description) {
//                        $("#fundtypeId").append("<option id=''value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].description + "</option>");
//                    }
//                }
//            });
            $.get(server_base_url + "hrms/common/BudgetHead/View", {
            }).done(function (bdata) {
                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].budgetHead == bdata[i].budgetHead) {
                        $("#budgetheadId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].budgetHead + "</option>");
                    }
                }
            });
//            $.get(server_base_url + "hrms/salary/PFType/ViewList", {
//            }).done(function (bdata) {
//                for (var i = 0; i < bdata.length; i++) {
//                    if (pdata[0].pfType == bdata[i].PFType) {
//                        $("#pfId").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].PFType + "</option>");
//                    }
//                }
//            });
            $.get(server_base_url + "hrms/salary/City/ViewList", {
            }).done(function (bdata) {
                for (var i = 0; i < bdata.length; i++) {
                    if (pdata[0].postingCity == bdata[i].cityName) {
                        $("#cityid").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].cityName + "</option>");
                    }
                }
            });
            $('#LocationId').val(pdata[0].location);
        }

    });
}

function viewBankListForarrearprocess(name, DivId)
{
    $.get(server_base_url + "hrms/salary/Bank/ViewList", {
    }).done(function (bdata) {
        if (bdata != null) {
            $("#" + DivId).append("<option value='' selected>-------------Select Bank----------------------------------</option>");
            if (bdata.length > 0) {
                for (var i = 0; i < bdata.length; i++) {
                    // $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].bankname + "</option>");
                    $("#" + DivId).append("<option  value='" + bdata[i]._id.$oid + "' >" + bdata[i].bankname + "</option>");
                }
            }
        }
    });
}
function setPayModeforArrearProcess(name) {
    var PayMode = ["NEFT", "RTGS", " IMPS", " CASH"];
    $("#paymodeId").text("").append("<option value='0'>----Select Payment Mode----</option>");

    for (var i = 0; i < PayMode.length; i++) {
        $("#paymodeId").append("<option  value='" + PayMode[i] + "' >" + PayMode[i] + "</option>");
    }
    //$("#paymodeId").val(name);
}
function validatearrearprocess()
{
    $('#fromdateer').text("").val("");
    $('#todateer').text("").val("");
    $('#monthIdErr').text("").val("");
    $('#yearIdErr').text("").val("");
    $('#arreartypeer').text("").val("");
    $('#ddoErr').text("").val("");

    var arreartype = $("input[name=ratedDefinedFor]:checked").val();

    var ddo = $('#ddoId').val();
    var month = $('#monthId').val();
    var year = $('#yearId').val();
    var fromdt = $('#fromdate').val();
    var todate = $('#todate').val();
    var d = new Date(fromdt.split("/").reverse().join("-"));
    var d1 = new Date(todate.split("/").reverse().join("-"));
    var noOfDays = days_between(d, d1);
    if (noOfDays < 1) {
        displaySmallErrorMessages("todateer", "Please Select Valid To Date.");
        return;
    }

//alert(ddo+"-------ddo---------"+arreartype+"arreartype------month-------"+month+"-------year-----"+year+"------fromdt-----"+fromdt+"----todate-----"+todate)


    if (ddo == "" || ddo == 0) {
        $("#ddoId").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("ddoErr", "Please Select DDO.");
    } else if (year == "" || year == 0) {
        $("#yearId").focus();
        $("#monthIdErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("yearIdErr", "Please Select Pay Year.");
    } else if (month == "" || month == 0) {
        $("#monthId").focus();
        $("#ddoErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("monthIdErr", "Please Select Pay Month.");

    } else if (fromdt == "" || fromdt == null) {
        $("#fromdate").focus();
        $("#yearIdErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("fromdateer", "Please Select From Date.");
    } else if (todate == "" || todate == null) {
        $("#todate").focus();
        $("#fromdateer").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("todateer", "Please Select To Date.");
    } else if (arreartype == "" || arreartype == null || arreartype == "undefined") {

        $("#todateer").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessages("arreartypeer", "Please Select Arrear Type.");
    } else
    {
        $("#ddoErr").text("").val("");
        $("#fromdateer").text("").val("");
        $("#todateer").text("").val("");
        $("#monthIdErr").text("").val("");
        $("#yearIdErr").text("").val("");
        $('#arreartypeer').text("").val("");
        viewempsearchListforarrearprocess();
    }
}
function viewempsearchListforarrearprocess() {
//     validateArrearDate();

    var month = $("#monthId").val();
    var year = $("#yearId").val();

    var month1 = $("#month1").val();
    var year1 = $("#year1").val();

    var month2 = $("#month2").val();
    var year2 = $("#year2").val();
    if (!isNaN(month) && month.length != 0) {
        month = parseFloat(month);
    }
    if (!isNaN(year) && year.length != 0) {
        year = parseFloat(year);
    }
    var fromDate = $("#fromdate").val();
    var toDate = $("#todate").val();
    var d = new Date(fromDate.split("/").reverse().join("-"));
    var d1 = new Date(toDate.split("/").reverse().join("-"));
    var dd = d.getDate();
    var mm = d.getMonth();
    var yy = d.getFullYear();
    var dd1 = d1.getDate();
    var mm1 = d1.getMonth();
    var yy1 = d1.getFullYear();

    var arreartype = $("input[name=ratedDefinedFor]:checked").val();
    var noOfDays = days_between(d, d1)
    if (arreartype == "day")
    {


        if (parseInt(noOfDays) >= 28)
        {
//              alert("noOfDays");
            displaySmallErrorMessages("arreartypeer", "Please Select Valid Arrear Type.");
            return false;
        }
    } else if (arreartype == "Month")
    {

        if (parseInt(noOfDays + 1) <= 28)
        {
            displaySmallErrorMessages("arreartypeer", "Please Select Valid Arrear Type.");
            return false;
        }
    }
    $("#year1").val(yy);
    $("#year2").val(yy1);
    $("#month1").val(mm);
    $("#month2").val(mm1);
//alert(mm)

    var employeeSearchJSON = {
        employeeCode: $("#empcode").val(),
        employeeCodeM: $("#empcodem").val(),
        employeeName: $("#empname").val(),
        ddo: $("#ddoId").val(),
        location: $("#LocationId").val(),
        department: $("#deptId").val(),
        designation: $("#desiId").val(),
        natureType: $("#natureId").val(),
        postingCity: $("#cityid").val(),
        pfType: $("#pfId").val(),
        fundType: $("#fundtypeId").val(),
        fromMonth: mm,
        fromYear: yy,
        toMonth: mm1,
        toYear: yy1,
        payMonth: month,
        payYear: year,
        budgetHead: $("#budgetheadId").val(),
        fromDate: $("#fromdate").val(),
        toDate: $("#todate").val(),
        arrearType:$("input[name=ratedDefinedFor]:checked").val()
    }
   //alert(JSON.stringify(employeeSearchJSON));
    var loginUserId = getUserSessionElement("userId");
    $.get(server_base_url + "Payrl/PayrlDetls/Arrear/SerchEmpForArrearProces", {
        processedBy: loginUserId,
        employeeJson: JSON.stringify(employeeSearchJSON),
        action: "view",
        financialYear: getUserSessionElement(seCurrentFinancialYear)
    }).done(function (data) {
        console.log(data);
        //alert(data);
        //var data="{"msg":"SearchEmployeeList","statuscode":"200","result":{"processed":[],"lockedprocess":[],"notprocessed":[{"employeeCode":"789","employeeCodeM":"789","employeeName":"CRSITIANO","location":"57bfdacc694d24c810e29f50","department":"5796faaa694d0676c3103ff9","designation":"57d4f9cf694da6ccbbfcabb0","salaryType":"579a0166694d506fbcdbf0ab","ddo":"579a0012694df0809f7e2e29","natureType":"574df9ca44ae887b21a2a601","postingCity":"57b2e670b5e508cffc315bb6","pfType":"579a010f694d506fbcdbf088","fundType":"57b555e1d04d271d94528b6d","budgetHead":"574ec1d844ae764b46a13549","earnings":0,"deductions":0,"month":0,"year":0,"isBlocked":false,"idStr":"57e5215b573258b66156e6e6","status":"Active"}]},"status":"success"}"
        if (data == NoData) {
            // alert("NoData");
            displaySmallErrorMessagesInRed("employeeArrearProcessMessageDiv", NoDataFoundMessage + "");
        } else if (data == fail) {
            // alert("NoData11");
            displaySmallErrorMessagesInRed("employeeArrearProcessMessageDiv", NoDataFoundMessage + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            // alert("NoData22");
            displayErrMsgInTable("empSearchTable", unauthorizedMessage);
        } else if (data == statusException) {
            // alert("NoData33");
            displaySmallErrorMessagesInRed("employeeArrearProcessMessageDiv", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            // alert("NoData44");
            callSessionTimeout();
        } else if (data == null) {
            // alert();
        } else {
            //alert("NoData44");
            //alert(data);
            var dataPar = JSON.parse(data);
            var mainData = dataPar.result;
            // alert(mainData);
            var unprocessData = mainData.notprocessed;
            // alert("---"+unprocessData);
            var processData = mainData.processed;
            var lockedprocessData = mainData.lockedprocess;
        }
//        else
//{
//    alert("Aaa");
//}
        setTimeout(function () {
            if (checkUserPrivelege(pvCreateArrear) || checkUserPrivelege(pvViewArrear)) {
                unProcessArrearList(unprocessData);
            } else {
                displayLargeErrorMessagesInCenterInRed("arrearProcessMessageDiv", "You have insufficient privilege to access Process Arrear Feature");
            }
        }, 100);
        setTimeout(function () {
            if (checkUserPrivelege(pvCreateArrear) && checkUserPrivelege(pvViewArrear)) {
                ProcessArrearDiv();
            }
        }, 100);
        setTimeout(function () {
            if (checkUserPrivelege(pvViewArrear)) {
                arrearProcessed(processData);
            }
            if ((checkUserPrivelege(pvUpdateArrear) || checkUserPrivelege(pvCreateArrear)) && (checkUserPrivelege(pvViewArrear))) {
                lockedArrearDiv();
            } else {
                displayLargeErrorMessagesInCenterInRed("arrearProcessMessageDiv", "You have insufficient privilege to access UnProcess Arrear Feature");
            }
        }, 100);
        setTimeout(function () {
            if (checkUserPrivelege(pvViewArrear)) {
                lockedEmployeeArrear(lockedprocessData);
            }
        }, 100);





    });

}
function unProcessArrearList(unprocessData) {
    //alert("aaaa");
//alert("aaaa"+unprocessData);
    if (checkUserPrivelege(pvCreateArrear) || checkUserPrivelege(pvViewArrear)) {
        $("#arrearnotprocessedDiv").text("").append('<div id="empSearchListPanel" class="panel panel-blue" />');
        $("#empSearchListPanel").append('<div id="empSearchListHeading" class="panel-heading" />');
        $("#empSearchListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee(Arrear Not Processed)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colArrearNotProceed"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#empSearchListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#colArrearNotProceed").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colArrearNotProceed span").hasClass("glyphicon-minus-sign")) {
                $("#colArrearNotProceed").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colArrearNotProceed").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append('<div id="empSearchListBody" class = "panel-body pan" />');
        $("#empSearchListBody").append('<div id="panelRow" class="row" />');

        $("#empSearchListBody").append('<center><div id="empSearchListErrorMsgId" /></center>');
        $("#empSearchListBody").append('<div id="empSearchListMainBody" class="table-responsive" />');
        $("#empSearchListMainBody").append('<table id="empSearchTable" class="table table-striped table-bordered table-hover" />');
        $("#empSearchTable").append('<thead id="empSearchTableHeadId" />');
        $("#empSearchTable").append('<tbody id="empSearchTableBodyId" />');
        $("#empSearchTableHeadId").append('<tr><th><input type="checkbox" style="width:15px;height:15px;align:center" id="selectall1"/> All</th><th>Employee Code</th><th>Employee Name</th><th>DDO</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th></tr>');
        if (unprocessData == NoDataFoundMessage || unprocessData == undefined) {
            $("#empSearchTable").dataTable().fnDestroy();
            displayErrMsgInTable("empSearchTable", NoDataFoundMessage);
        } else {
            var sno;
            for (var i = unprocessData.length - 1; i >= 0; i--) {
                sno++;
                var subData = unprocessData[i];
                var subdataString = JSON.stringify(subData)
                var ddo = $("#ddoId").val();
                var empcode = subData.employeeCode
                var employeeSearchJSON = {
                    ddo: ddo,
                    employeeCode: empcode
                }
                var subdataString = JSON.stringify(subData);
                // alert(subdataString);
                $("#empSearchTableBodyId").append("<tr style='cursor:pointer;' >"
                        + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case1" name="case1" class="case1"/>' + "</td>"
                        + "<td style='cursor:pointer;'><input type='hidden' value='" + encodeURI(subdataString) + "'/>" + subData.employeeCode + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.ddoName + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.locationName + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.departmentName + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.designationName + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.salaryType + "</td></tr>");

            }
            $("#empSearchTable").dataTable();
            $("#empSearchTable thead tr th:first input:checkbox").change(function () {
                $("#empSearchTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
            });
            $("#empSearchTable tbody tr td:first-child input:checkbox").change(function () {
                var tot = $(".case1").length;
                var tot_checked = $(".case1:checked").length;
                if (tot != tot_checked) {
                    $("#selectall1").prop('checked', false);
                } else
                {
                    $("#selectall1").prop('checked', true);
                }
            });
        }

    }
}
function ProcessArrearDiv() {
    $("#arrearprocessedButtonDiv").text("").append("<div class='form-group col-lg-12'><center><button id='processedButton' onclick=processArrear() class='btn btn-success'>Process</button></center></div>");
}
function lockedArrearDiv() {
    $("#arrearnotprocessedButtonDiv").text("").append("<div class='form-group col-lg-12'><center><button id='processedButton' onclick=unProcessArrear() class='btn btn-warning'>Un Process</button></center></div>");

}
function processArrear() {
    $("#empSearchListErrorMsgId").text("");
    var attendanceJson = {};
    var checkedrowList = [];
    $('#empSearchTable tr input[type="checkbox"][name="case1"]:checked').each(function (i) {
        var row = $(this).closest('tr');
        //We are sending List to backend
        checkedrowList.push(JSON.parse(decodeURI((row.find('td:eq(1) input').val()))));
//            employeeCode: row.find('td:eq(1)').text(),
//        $(this).closest('tr').remove();
    });
    var financialYear = getUserSessionElement(seCurrentFinancialYear);
    if (checkedrowList.length > 0) {
        attendanceJson = checkedrowList;

        var arreartype = $("input[name=ratedDefinedFor]:checked").val();
        $.post(server_base_url + "Payroll/PayrollDetails/EmpArrear/Save", {
            processArrear: JSON.stringify(attendanceJson),
            payMonth: $("#monthId").val(),
            payYear: $("#yearId").val(),
            arreartype: arreartype,
            fromDate: $("#fromdate").val(),
            toDate: $("#todate").val(),
            loginId: getUserSessionElement("userId"),
            financialYear: financialYear
        }).done(function (data) {
            if (data.statuscode == NoData) {
               // alert(data);
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", NoDataFoundMessage + "");
            }
            if (data == fail) {
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", failMessage + "");
            } else if (data == unauthorized) {
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("empSearchListErrorMsgId", "No User available" + "");
            } else if (data) {
                displaySuccessMessages("empSearchListErrorMsgId", "Arrear is successfully Processed", "");
                $('#empSearchTable tr input[type="checkbox"][name="case1"]:checked').each(function (i) {
                    $(this).closest('tr').remove();
                });
                viewempsearchListforarrearprocess();
                setTimeout(function () {
                    $("#empSearchListErrorMsgId").text("");
                }, 2000);
            }
        });
    } else
    {
        displaySmallErrorMessagesInRed("empSearchListErrorMsgId", "Please select atleast one employee.");
    }
}


function arrearProcessed(processData) {

    $("#arrearProcessedDiv").text("").append('<div id="attendanceproceesedListPanel" class="panel panel-blue" />');
    $("#attendanceproceesedListPanel").append('<div id="attendanceproceesedListHeading" class="panel-heading" />');
    $("#attendanceproceesedListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee(Arrear Processed)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="ArrearProcessedList"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

    $("#attendanceproceesedListPanel").append('<div id="collapseOne3" class="panel-collapse collapse in pal" />');
    $("#ArrearProcessedList").click(function () {
        $("#collapseOne3").toggle();
        if ($("#ArrearProcessedList span").hasClass("glyphicon-minus-sign")) {
            $("#ArrearProcessedList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#ArrearProcessedList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append('<div id="attendanceproceesedListBody" class = "panel-body pan" />');
    $("#attendanceproceesedListBody").append('<div id="panelRow" class="row" />');
    $("#attendanceproceesedListBody").append('<center><div id="empSearchListErrorMsgId1" /></center>');
    $("#attendanceproceesedListBody").append('<center><div id="attendanceproceesedListErrorMsgId"/></center>');
    $("#attendanceproceesedListBody").append('<div id="attendanceproceesedListMainBody" class="table-responsive" />');
    $("#attendanceproceesedListMainBody").append('<table id="attendanceproceesedTable" class="table table-striped table-bordered table-hover" />');
    $("#attendanceproceesedTable").append('<thead id="attendanceproceesedTableHeadId" />');
    $("#attendanceproceesedTable").append('<tbody id="attendanceproceesedTableBodyId" />');

    $("#attendanceproceesedTableHeadId").append('<tr><th><input type="checkbox" style="width:15px;height:15px;align:center" id="selectall"/> All</th><th>Employee Code</th><th>Employee Name</th><th>DDO</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th></tr>');

    if (processData == NoDataFoundMessage || processData == undefined) {
        $("#attendanceproceesedTable").dataTable().fnDestroy();
        displayErrMsgInTable("attendanceproceesedTable", NoDataFoundMessage);
    } else {
        var sno;
        for (var i = processData.length - 1; i >= 0; i--) {
            sno++;
            var subData = processData[i];

            $("#attendanceproceesedTableBodyId").append("<tr style='cursor:pointer;' >"
                    + "<td>" + '<input type="checkbox" style="width:15px;height:15px;align:center" type="checkbox" id="case" name="case" class="case"/>' + "</td>"
                    + "<td style='cursor:pointer;'><input type='hidden' value='" + subData.idStr + "'/>" + subData.employeeCode + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.ddoName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.locationName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.departmentName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.designationName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.salaryType + "</td></tr>");

        }
        $("#attendanceproceesedTable").dataTable();
        $("#attendanceproceesedTable thead tr th:first input:checkbox").change(function () {
            $("#attendanceproceesedTable tbody tr td:first-child input:checkbox").prop('checked', $(this).prop("checked"));
        });
        $("#attendanceproceesedTable tbody tr td:first-child input:checkbox").change(function () {
            var tot = $(".case").length;
            var tot_checked = $(".case:checked").length;
            if (tot != tot_checked) {
                $("#selectall").prop('checked', false);
            } else
            {
                $("#selectall").prop('checked', true);
            }
        });

    }



}

function unProcessArrear() {

    $("#empSearchListErrorMsgId").text("");
    var checkrowList = [];
    var attendanceJson = {};
    $('#attendanceproceesedTable tr input[type="checkbox"][name="case"]:checked').each(function (i) {
        var row = $(this).closest('tr');
        //We are sending List to backend
        checkrowList.push({
            idStr: row.find('td:eq(1)').find('input[type="hidden"]').val(),
//        $(this).closest('tr').remove();
        });
    });
    //alert(checkrowList);
    if (checkrowList.length > 0) {
        var loginUserId = getUserSessionElement("userId");
        attendanceJson = checkrowList;
        // alert(attendanceJson);
        $.post(server_base_url + "/Payroll/arrear/Unprocess", {
            unProcessArrear: JSON.stringify(attendanceJson),
            fromDate: $("#fromdate").val(),
            toDate: $("#todate").val(),
            loginUserId: loginUserId
        }).done(function (data) {
            viewempsearchListforarrearprocess();
            setTimeout(function () {
                $("#empSearchListErrorMsgId").text("");
            }, 1000);
        });
    } else
    {
        displaySmallErrorMessagesInRed("empSearchListErrorMsgId1", "Please select atleast one employee.");
    }
}


function lockedEmployeeArrear(lockedData) {

    $("#arrearLockedDiv").text("").append('<div id="attendanceLockedListPanel" class="panel panel-blue" />');
    $("#attendanceLockedListPanel").append('<div id="attendanceLockedListHeading" class="panel-heading" />');
    $("#attendanceLockedListHeading").append('<class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Employee(Arrear Locked)</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="arrearLockedProcess"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');
    $("#attendanceLockedListPanel").append('<div id="collapseOne4" class="panel-collapse collapse in pal" />');
    $("#arrearLockedProcess").click(function () {
        $("#collapseOne4").toggle();
        if ($("#arrearLockedProcess span").hasClass("glyphicon-minus-sign")) {
            $("#arrearLockedProcess").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#arrearLockedProcess").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne4").append('<div id="attendanceLockedListBody" class = "panel-body pan" />');
    $("#attendanceLockedListBody").append('<div id="panelRow" class="row" />');
    $("#attendanceLockedListBody").append('<center><div id="attendanceLockedListErrorMsgId" /></center>');
    $("#attendanceLockedListBody").append('<div id="attendanceLockedListMainBody" class="table-responsive" />');
    $("#attendanceLockedListMainBody").append('<table id="attendanceLockedTable" class="table table-striped table-bordered table-hover" />');
    $("#attendanceLockedTable").append('<thead id="attendanceLockedTableHeadId" />');
    $("#attendanceLockedTable").append('<tbody id="attendanceLockedTableBodyId" />');
    $("#attendanceLockedTableHeadId").append('<tr><th>S.No</th><th>Employee Code</th><th>Employee Name</th><th>DDO</th><th>Location</th><th>Department</th><th>Designation</th><th>Salary Type</th></tr>');
    var sno = 0;
    if (lockedData == NoDataFoundMessage || lockedData == undefined) {

        displayErrMsgInTable("attendanceLockedTable", NoDataFoundMessage);
    } else {
        for (var i = lockedData.length - 1; i >= 0; i--) {
            sno++;
            var subData = lockedData[i];

            $("#attendanceLockedTableBodyId").append("<tr style='cursor:pointer;' >"
                    + "<td style='cursor:pointer;'>" + sno + "</td>"
                    + "<td style='cursor:pointer;'><input type='hidden' value='" + subData.idStr + "'/>" + subData.employeeCode + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.employeeName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.ddoName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.locationName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.departmentName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.designationName + "</td>"
                    + "<td style='cursor:pointer;'>" + subData.salaryType + "</td></tr>");

        }
        $("#attendanceLockedTable").dataTable();
    }
}
function resetarrearprocess()
{
    $("#fromdate").text("").val("");
    $("#todate").text("").val("");
    $('#empcode').val("");
    $('#empname').val("");
    $('#empcodem').val("");
    $('#ddoId').val("0");
    $('#').val("0");
    $('#fromdateer').text("").val("");
    $('#todateer').text("").val("");
    $('#monthIdErr').text("").val("");
    $('#yearIdErr').text("").val("");
    $('#arreartypeer').text("").val("");
    $('#ddoErr').text("").val("");
    $('#yearId').val("0");
    $('#deptId').val("0");
    $('#desiId').val("0");
    $('#natureId').val("0");
    $('#fundtypeId').val("0");
}
function validateArrearDate()
{
    var noOfDays = 0
    $("#datedErr").text("");
    $("#arreartypeer").text("");
    var fromDate = $("#fromdate").val();
    var toDate = $("#todate").val();
    var arreartype = $("input[name=ratedDefinedFor]:checked").val();
    //alert(arreartype);
    var fromDate = $("#fromdate").val();
    var toDate = $("#todate").val();
    var d = new Date(fromDate.split("/").reverse().join("-"));
    var d1 = new Date(toDate.split("/").reverse().join("-"));
    var dd = d.getDate();
    var mm = d.getMonth();
    var yy = d.getFullYear();
    var dd1 = d1.getDate();
    var mm1 = d1.getMonth();
    var yy1 = d1.getFullYear();
    // alert(mm);
    //alert(dd);
    // alert(yy);
    noOfDays = daysBetweenTheseDates(d, d1)
    if (arreartype == "day")
    {

        // alert(noOfDays);
        if (parseint(noOfDays) > 30)
        {
            displaySmallErrorMessages("arreartypeer", "Please Select different Arrear Type.");

        }
    } else if (arreartype == "Month")
    {
        //alert(noOfDays);
        if (parseint(noOfDays) < 30)
        {
            displaySmallErrorMessages("arreartypeer", "Please Select different Arrear Type.");

        }
    }
//   alert(year1);
//   alert(year2);
    $("#year1").val(year1);
    $("#year2").val(year2);
    $("#month1").val(month1);
    $("#month2").val(month2);



}
function getfinancialYearDropForArrear()
{
    var currentFinancialYear;
    var finyearArray;
    var fromFinacialYear;
    var toFinacialYear;
    var fromyear;
    var toyear;
    $("#yearId").text("").append("<option value='0'>----Select Pay Year----</option>");
    currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    //alert(currentFinancialYear);
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
        $("#yearId").append($('<option/>').val(fromyear).text(fromyear));

    }
    if (toFinacialYear != null || toFinacialYear != "" || toFinacialYear != undefined)
    {
        var toYearArr = toFinacialYear.split("/");
        toyear = toYearArr[2];
        //alert(toyear);
        $("#yearId").append($('<option/>').val(toyear).text(toyear));
    }
}

