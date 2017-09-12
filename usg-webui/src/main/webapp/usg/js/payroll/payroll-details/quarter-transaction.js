/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @author 
 */
function payrollquarterTranasctionMaster(divId) {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayPayrollHorizontalBar()">Payroll</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="payrollDetailsMenuTabs()">Payroll Details</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=payrollquarterTranasctionMaster("dashboardBodyMainDiv")>Quarter Transaction</a>');
    createFormWithPrivilage(divId, innerDivCF, "Quarter Transaction", FieldGroupForCF, successMsgDivCF, pvCreateQuarterTransaction);
    if (checkUserPrivelege(pvCreateQuarterTransaction)) {
        getTwoColumnInRow(FieldGroupForCF, "Row0", "Row0Col1", "Row0Col2");
        $("#Row0Col1").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));

        getLoggedInDDOInDropDown("ddo", "");
        getEmployeeDateInQTUsingEmp();

        $("#Row0Col2").append(getLabel("Employee Code", "required") + "" + getDropDown("employeeCode"));
        getTwoColumnInRow(FieldGroupForCF, "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel_InputWithSpan("Employee Name", "", "employeeName", "", "readonly"));
        $("#Row1Col2").append(getLabel_InputWithSpan("Department", "", "department", "", "readonly"));

        getTwoColumnInRow(FieldGroupForCF, "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Designation", "required", "designation", "", "readonly"));
        $("#Row2Col2").append(getLabel("City", "required") + "" + getDropDown("city"));

        getTwoColumnInRow(FieldGroupForCF, "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Quarter Category", "required") + "" + getDropDown("quaterCategory"));
        $("#Row3Col2").append(getLabel("Quarter Number", "required") + "" + getDropDown("quaterNumber"));

        getTwoColumnInRow(FieldGroupForCF, "Row4", "Row4Col1", "Row4Col2");
        $("#Row4").append('<input type="hidden" id="empData"/>');
        $("#Row4Col1").append(getLabel_InputWithSpan("Allocation Date", "required", "allowcationDate", "", "onkeypress=return false"));
        $("#allowcationDate").datepicker({
            format: "dd/mm/yyyy",
            autoclose: true
        });
        var allowcationDate = new Date($("#allowcationDate").val());

        $("#Row4Col2").append(getLabel_InputWithSpan("Leave Date", "", "leaveDate", "", "onkeypress=return false"));
        $("#leaveDate").datepicker({
            format: "dd/mm/yyyy",
            autoclose: true
        });

        //viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");
        viewOption("hrms/salary/City/ViewList", "", "cityName", "city", "city");

        $("#ddo").attr("onchange", "getEmployeeDateInQTUsingEmp()");
        $("#employeeCode").attr("onchange", "setEmployeeDetailsInQT()");
        $("#city").attr("onchange", "getQuarterCategory()");
        $("#quaterCategory").attr("onchange", "getQuarterNumber()");

        $("#employeeCode").attr("onchange", "setEmployeeDetailsInQT()");
        getSaveResetUpdateBackButton(FieldGroupForCF, "saveOrUpdateRowId", "Save", "saveUpdateBtnId", "quarterTranasctionValidation()", "Reset", "resetBackBtnId", "resetAllValuesInSpecifiedDiv('" + FieldGroupForCF + "','ddo')");

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });


        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });


    }
    if (checkUserPrivelege(pvViewQuarterTransaction)) {
        viewFinancialquarterTranasctionList("viewFinancialquarterTranasctionList");
    }

}

function getQuarterCategory() {
    var city = $("#city").val();
    // var ddo = $("#ddo").val();
    $.get(server_base_url + "payroll/PayrollDetails/GetQuarterCategory", {
        city: city
    }).done(function (data) {

        data = JSON.parse(data);

        if (data == NoData) {
            displaySmallErrorMessagesInRed("cityErr", "No Quarter Category available for this city .Please select valid One");
        }
        if (data != null) {

            $("#quaterCategory").text("").append("<option  value='' selected disabled>----Select Quarter Category ----</option>");
            for (var i = 0; i < data.length; i++)
            {
                $("#quaterCategory").append("<option  value='" + data[i]._id.$oid + "'>" + data[i].category + "</option>");
            }
        }
    });
}

function getQuarterNumber() {
    var city = $("#city").val();
    var category = $("#quaterCategory").val();
    $.get(server_base_url + "/payroll/PayrollDetails/GetQuarterNumber", {
        city: city,
        category: category
    }).done(function (data) {
        data = JSON.parse(data);
        if (data.length > 0) {
            $("#quaterNumber").text("").append("<option  value='' >----Select Quarter Number ----</option>");
            for (var i = 0; i < data.length; i++)
            {
                $("#quaterNumber").append("<option  value='" + data[i]._id.$oid + "'>" + data[i].quarterNo + "</option>");
            }
        }
    });
}

function setEmployeeDetailsInQT() {
    var employeeCode = $("#employeeCode").val();
    $.post(server_base_url + "/payroll/transactions/QuarterTransactions/getQuarterEmployee", {
        employeeCode: employeeCode
    }).done(function (data) {
        data = data[0];
        $("#department").val(data.department);
        $("#designation").val(data.designation);
        $("#employeeName").val(data.employeeName);
    });
}
function getEmployeeDateInQTUsingEmp() {

    var ddo = $("#ddo").val();
    var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
    if (currentFinancialYear !== null || currentFinancialYear !== "" || currentFinancialYear !== undefined)
    {
        var finyearArray = currentFinancialYear.split("~");
    }
    var fromDate = finyearArray[0];
    var toDate = finyearArray[1];

    $.get(server_base_url + "/hrms/Employee/GetEmployeeCodeDropDownValuesBasedOnDDOandLocation", {
        ddo: ddo,
        fromDt: fromDate,
        toDate: toDate,
        location: getUserSessionElement(seLocationId)
                //    location: getUserSessionElement(seLocationId)
    }).done(function (data) {
        data = JSON.parse(data);

        if (data === fail || data === "" || data === undefined) {
            $("#employeeCode").text("").append("<option  value='' selected disabled>---No data available ----</option>");
        } else if (data !== null) {
            $("#employeeCode").text("").append("<option  value='' selected disabled>----[Employee Code]-Employee Name ----</option>");
            for (var i = 0; i < data.length; i++)
            {
                $("#employeeCode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
            }
        }

    });
}
function setEmployeeDetailsInQT() {
    var employeeCode = $("#employeeCode").val();
    $.get(server_base_url + "hrms/salary/Employee/SearchByEmployeeCode", {
        employeeCode: employeeCode
    }).done(function (data) {
        data = data[0];
        $("#department").val(data.department);
        $("#designation").val(data.designation);
        $("#employeeName").val(data.employeeName);
    });
}
function quarterTranasctionValidation() {
    resetOnlySpanErrorsAndSuccessMsgSpecifiedDiv(FieldGroupForCF);
    var result = 1;
    var ddo = $("#ddo").val();
    var employeeCode = $("#employeeCode").val();
    var employeeName = $("#employeeName").val();
    var city = $("#city").val();
    var quaterCategory = $("#quaterCategory").val();
    var quaterNumber = $("#quaterNumber").val();
    var designation = $("#designation").val();
    var allocationDate = $("#allowcationDate").val();
    var leaveDate = $("#leaveDate").val();
    var saveorupdate = $("#saveorupdate").val();
    if (allocationDate == "undefined" || allocationDate == "" || designation == "undefined" || designation == null || employeeName == "" || employeeName == "undefined" || employeeName == null || ddo == "" || ddo == "undefined" || ddo == null || employeeCode == "" || employeeCode == "undefined" || employeeCode == null || quaterNumber == "" || quaterNumber == "undefined" || quaterNumber == null || quaterCategory == "" || quaterCategory == "undefined" || quaterCategory == null || city == "" || city == "undefined" || city == null) {
        displayLargeErrorMessagesInCenterInRed(successMsgDivCF, "Please fill all mandatory fields");
        return false;
    } else {

        if (allocationDate == "") {
            $("#allocationDate").focus();
            displaySmallErrorMessagesInRed("allocationDateErr", "Please enter allocation date.");
            result = 0;
        }
        if (quaterCategory == "" || quaterCategory == null) {
            $("#quaterCategory").focus();
            displaySmallErrorMessagesInRed("quaterCategoryErr", "Please select quater category.");
            result = 0;
        }
        if (city == "" || city == null) {
            $("#city").focus();
            displaySmallErrorMessagesInRed("cityErr", "Please select city.");
            result = 0;
        }
        if (employeeCode == "" || employeeCode == null) {
            $("#employeeCode").focus();
            displaySmallErrorMessagesInRed("employeeCodeErr", "Please select employee code.");
            result = 0;
        }
        if (ddo == "" || ddo == null) {
            $("#ddo").focus();
            displaySmallErrorMessagesInRed("ddoErr", "Please select ddo.");
            result = 0;
        }
        if (result != 0) {
            if (saveorupdate == "save") {
                saveFinancialquarterTranasctionDetails();
            } else if (saveorupdate == "update") {
                updateFinancialquarterTranasctionDetails();
            }
        }
    }

}
function saveFinancialquarterTranasctionDetails() {
    if (checkUserPrivelege(pvCreateQuarterTransaction)) {
        var ddo = $("#ddo").val();
        var employeeCode = $("#employeeCode").val();
        var employeeName = $("#employeeName").val();
        var city = $("#city").val();
        var quaterCategory = $("#quaterCategory").val();
        var department = $("#department").val();
        var quaterNumber = $("#quaterNumber").val();
        var designation = $("#designation").val();
        var allocationDate = $("#allowcationDate").val();
        var leaveDate = $("#leaveDate").val();
        var allowcationDate = $("#allowcationDate").val();

        var obj = {
            ddo: ddo,
            city: city,
            quaterNumber: quaterNumber,
            quaterCategory: quaterCategory,
            employeeName: employeeName,
            employeeCode: employeeCode,
            designation: designation,
            department: department,
            allowcationDate: allocationDate,
            leaveDate: leaveDate
        };
        $.post(server_base_url + "/payroll/transaction/Quarter/Save", {
            quaterTransaction: JSON.stringify(obj),
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == duplicateQuarterNumber) {
                displaySmallErrorMessagesInRed("quaterNumberErr", "This Quarter is already allocated", "");
            } else if (data == validateDateValue) {
                displaySmallErrorMessagesInRed("leaveDateErr", "Leave Date Should be gratter than allocation Date", "");
            } else {
                saveOrUpdateCommonFunctionInquarterTranasction(data);
            }

        });
    }
}
function  saveOrUpdateCommonFunctionInquarterTranasction(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        displaySuccessMessages(successMsgDivCF, successMessage, "");
        setTimeout(function () {
            var successmessagetobedisplayed = successMessage;
            if ($("#saveorupdate").val() == "update" || $("#saveorupdate").val() == "Update") {
                successmessagetobedisplayed = updateMessage;
            }
            payrollquarterTranasctionMaster("dashBoardBodyMainDiv");
            displaySuccessMessages(successMsgDivCF, successmessagetobedisplayed, "");
        }, 3000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function  updateCommonFunctionInquarterTranasction(data) {
    if (BasicIfElseForSaveUpdateResponseData(data, successMsgDivCF)) {
        disableDiv(FieldGroupForCF);
        displaySuccessMessages(successMsgDivCF, updateMessage, "");

        setTimeout(function () {
            payrollquarterTranasctionMaster("dashBoardBodyMainDiv");
        }, 3000);
        clearSuccessMessageAfterTwoSecond(successMsgDivCF);
    }
}
function viewFinancialquarterTranasctionList(divId) {
    if (checkUserPrivelege(pvViewQuarterTransaction)) {
        var columsName = ["DDO", "Employee Code", "Employee Name", "Allocation Date", "Leave Date"];
        createTableWithEditDeletePrivilage(innerDivCF, "List of Quarter Transactions", divId, MsgDivInTableCF, columsName, pvUpdateQuarterTransaction, pvDeleteQuarterTransaction);
        $.get(server_base_url + "payroll/transaction/Quarter/ViewList", {
            ddo: getUserSessionElement(seDDOId)
        }).done(function (data) {

            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                if (data != null) {
                    if (data.length > 0) {
                        var sno = 0;
                        var divIdBody = divId + "body";
                        $("#" + divId).append("<tbody id='" + divIdBody + "' class='table-striped table-bordered' />");
                        for (var i = data.length - 1; i >= 0; i--) {
                            sno++;
                            var obj = JSON.stringify(data[i]);
                            $("#" + divIdBody).append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + data[i].ddo + "</td>"
                                    + "<td style='cursor:pointer;'>" + data[i].employeeCode + "</td>"
                                    + "<td style='cursor:pointer;'>" + data[i].employeeName + "</td>"
                                    + "<td style='cursor:pointer;'>" + data[i].allowcationDate + "</td>"
                                    + "<td style='cursor:pointer;'>" + data[i].leaveDate + "</td>");
                            if (checkUserPrivelege(pvUpdateQuarterTransaction)) {
                                $("#" + data[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updatefinancialquarterTranasction('" + encryptBase64String(encodeURI(obj)) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteQuarterTransaction)) {
                                $("#" + data[i]._id.$oid).append("<td onclick=deletePopUp('deletefinancialquarterTranasction','viewFinancialquarterTranasctionList','" + encryptBase64String(data[i]._id.$oid) + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                            }
                            $("#" + data[i]._id.$oid).append("</tr>");
                        }

                        $('#' + divId).append("</table>");
                        $('#' + divId).dataTable();
                    }
                }
            }
        });
    }
}
function updatefinancialquarterTranasction(obj) {
    if (checkUserPrivelege(pvUpdateQuarterTransaction)) {
        obj = JSON.parse(decodeURI(decryptBase64String(obj)));
        resetAllValuesInSpecifiedDiv(FieldGroupForCF);

        // $("#ddo").val(obj.ddo);
        setEmployeeDetailsInQT();

        $("#city").val(obj.city);


        setTimeout(function () {
            $("#employeeCode").val(obj.employeeCode);
            $("#employeeCode option:contains(" + obj.employeeCode + ")").attr('selected', 'selected');

        }, 3000);

        setTimeout(function () {
            $("#employeeName").val(obj.employeeName);
            $("#department").val(obj.department);
            $("#designation").val(obj.designation);

        }, 1000);

        getQuarterCategory();

        setTimeout(function () {
            $("#quaterCategory").val(obj.quaterCategory);
            $("#quaterCategory option:contains(" + obj.quaterCategory + ")").attr('selected', 'selected');
            getQuarterNumber();
            setTimeout(function () {
                $("#quaterNumber").val(obj.quaterNumber);
                $("#quaterNumber option:contains(" + obj.quaterNumber + ")").attr('selected', 'selected');
            }, 3000);

        }, 3000);

        $("#viewFinancialquarterTranasctionList tr").css("background-color", "white");
        $("#viewFinancialquarterTranasctionList tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#ddo option:contains(" + obj.ddo + ")").attr('selected', 'selected');

        getEmployeeDateInQTUsingEmp(obj.ddo);

        $("#allowcationDate").val(obj.allowcationDate);
        $("#leaveDate").val(obj.leaveDate);

        $("#Id").val(obj._id.$oid);
        $("#empData").val(encryptBase64String(encodeURI(JSON.stringify(obj))));
        $("#saveorupdate").val("update");
        $("#saveUpdateBtnId").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "payrollquarterTranasctionMaster('" + DashboardMainDivID + "')");
    }
}
function updateFinancialquarterTranasctionDetails() {
    if (checkUserPrivelege(pvUpdateQuarterTransaction)) {
        var empData = JSON.parse(decodeURI(decryptBase64String($("#empData").val())));
        var id = $("#Id").val();
        var city = $("#city").val();
        var quaterCategory = $("#quaterCategory").val();
        var ddo = $("#ddo").val();
        var quaterNumber = $("#quaterNumber").val();
        var allocationDate = $("#allowcationDate").val();
        var leaveDate = $("#leaveDate").val();
        var obj = {
            ddo: ddo,
            city: city,
            quaterNumber: quaterNumber,
            quaterCategory: quaterCategory,
            employeeName: empData.employeeName,
            employeeCode: empData.employeeCode,
            designation: empData.designation,
            department: empData.department,
            allowcationDate: allocationDate,
            leaveDate: leaveDate
        };
        $.post(server_base_url + "/payroll/transaction/Quarter/Update", {
            quaterTransaction: JSON.stringify(obj),
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == duplicateQuarterNumber) {
                displaySmallErrorMessagesInRed("quaterNumberErr", "This Quarter is already allocated", "");

            } else if (data == validateDateValue) {
                displaySmallErrorMessagesInRed("leaveDateErr", "Leave Date Should be gratter than allocation Date", "");
            } else {
                updateCommonFunctionInquarterTranasction(data);
            }
        });
    }
}
function deletefinancialquarterTranasction(Id) {
    if (checkUserPrivelege(pvDeleteQuarterTransaction)) {
        Id = decryptBase64String(Id);
        $.post(server_base_url + "/payroll/transaction/Quarter/Delete", {
            id: Id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (BasicIfElseForTable(data, MsgDivInTableCF)) {
                payrollquarterTranasctionMaster(DashboardMainDivID);
                displaySuccessMessages(MsgDivInTableCF, deleteMessage, "");
                clearSuccessMessageAfterTwoSecond(MsgDivInTableCF);
            }
        });
    }
}


