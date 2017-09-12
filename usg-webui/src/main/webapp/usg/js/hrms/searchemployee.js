/* 
 *Employee Master....Curd Operation
 */

//TO Search And Update Employee
function searchemployeemaster(divId) {
    scrolupfunction();
    if (checkUserPrivelege(pvViewEmployee)) {
        var financialYear = getUserSessionElement(seCurrentFinancialYear);
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>');
//    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsEmployeeMasterTabs()">Employee Master</a></label> >> <label>Search Employee</label>');
        $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS ></a></label> <label><a href="javascript:hrmsEmployeeMasterTabs()"> Employee Master</a></label> > <label> Search Employee</label>');

        $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
        $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
        $("#mainTabMenu").append("<div id='tableHeader' />");
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Search Employee </center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colSearchEmployee'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colSearchEmployee").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colSearchEmployee span").hasClass("glyphicon-minus-sign")) {
                $("#colSearchEmployee").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colSearchEmployee").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });



        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<div id='pregsuccessBeforeInSearch'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        //Employee Table
        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("Employee Code", "") + "" + getInputwithErrSpan("employeeCode", "", "", ""));
        $("#Row1Col2").append(getLabel("Manual Employee Code", "") + "" + getInputwithErrSpan("employeeCodeM", "", "", ""));
        //
        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel("Employee Name", "") + "" + getInputwithErrSpan("employeeName", "", "", ""));
        $("#Row2Col2").append(getLabel("DDO", "required") + "" + getDropDown("ddo"));
        //
        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("Location", "") + "" + getDropDown("location"));
        $("#Row3Col2").append(getLabel("Department", "") + "" + getDropDown("department"));
        getLoggedInDDOLocationInDropDown("ddo", "location");
        //
        getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel("Designation", "") + "" + getDropDown("designation"));
        $("#Row4Col2").append(getLabel("Fund Type", "") + "" + getDropDown("fundType"));
        //
        getTwoColumnInRow("FieldGroup", "Row5", "Row5Col1", "Row5Col2");
        $("#Row5Col1").append(getLabel("Budget Head", "") + "" + getDropDown("budgetHead"));
        $("#Row5Col2").append(getLabel("Nature Type", "") + "" + getDropDown("natureType"));
        //
        getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel("Posting City", "") + "" + getDropDown("postingCity"));
//    $("#Row6Col2").append(getLabel("Sort By", "") + "" + getDropDown("sortby"));

        //
//    getTwoColumnInRow("FieldGroup", "Row7", "Row7Col1", "Row7Col2");
//    $("#Row7Col1").append(getLabel("Employee Status", "") + "" + getDropDown("EmployeeStatus"));


        $("#panelMainBody").append("<div id='panelRow7' class='row' />");
        $("#panelRow7").append("<div  class='col-xs-12'/><center><button type='button' value='Save' class='btn btn-success glyphicon glyphicon-search mr5 '  onclick='searchEmployee()'>Search</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='wipeAllEmployeeSearchData()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        
        
        
        $("#tableHeader").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne3'><center>List of Employee(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colListOfSearchEmployee'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colListOfSearchEmployee").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colListOfSearchEmployee span").hasClass("glyphicon-minus-sign")) {
                $("#colListOfSearchEmployee").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colListOfSearchEmployee").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });



        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");

//    viewReDddoListForList("", "ddo");
        viewCityForOption("", "postingCity");
        //////////////////////On Change methods////////////////////////////////////////////
        $("#ddo").attr("onchange", "getdatatoemployeeUsingDDO();getDepartmentBasedOnDDO();").trigger("onchange");
//        $("#ddo").attr("onchange", "getdatatoemployeeUsingDDO();getLocationBasedOnDDO();getDepartmentBasedOnDDO();");
        $("#designation").attr("onchange", "getFTGradeClassBasedOnDDODESIGNATION();getDesignationCopytoSecondDesignation();getempRetirementDate()");
        $("#fundType").attr("onchange", "getBudgetHeadBasedOnDDODesignationFundType()");
        $("#budgetHead").attr("onchange", "getNatureTypeBasedOnDDODesignationFundTypeBudgetHead()");
        $("#natureType").attr("onchange", "getDesciplineBasedOnDDODesignationFundTypeBudgetHeadNatureType()");

//    viewDepartmentForOption();
//    viewDesignationListForOption("", "designation", "Designation");
//    fetchAllNaturesTypeForOption();
//    viewBudgetHeadForOption();
//    fetchAllFundsForOption();
//    getAllLocationForOptions("", "location", "Location");
        $("#listpanelMainBody").append("<div id='ErrorDiv'/>");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");

//    viewEmployeeListmasterSearch('listpanelMainBody');
    }
}

function  searchEmployee() {
    $("#employeeCodeErr").text("");
    $("#ddoErr").text("");
    var result = 1;
    if ($('#ddo').val() == null) {
        $("#ddo").focus();
        addSomeClass("ddoFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("ddoErr", "Please Select  DDO .");
        result = 0;
    } else if ($('#ddo').val() != null) {
        removeSomeClass("ddoFieldGroup", "has-error");
    }
    if (result != 0) {
        viewEmployeeListmasterSearch('listpanelRow');

    }
}
function searchemployeefunction() {

    $("#tableHeader").append("<div id='maritalListPanel' class='panel panel-primary' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<center>List of Employee(s)</center>");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    $("#listpanelMainBody").text("").append("<div id='ErrorDiv'/>");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='viewList'/>");
    $("#viewList").append("<div class='table-responsive' id='viewSectionTableDiv' />");
    $("#viewSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
    $("#displayBankTable").append("<thead class=''><tr>"

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code(M)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Department</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Salary Type</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Edit</th>"
            + "<th style='min-width:15%;width:auto;align:center;'><i class='fa' style='font-size:21px;'></i> Delete</th>"
            + "</tr></thead>");
    var employeeSearchJSON = {
        employeeCode: $("#employeeCode").val(),
        employeeCodeM: $("#employeeCodeM").val(),
        employeeName: $("#employeeName").val(),
        ddo: $("#ddo").val(),
        location: $("#location").val(),
        department: $("#department").val(),
        designation: $("#designation").val(),
        natureType: $("#natureType").val(),
        postingCity: $("#postingCity").val(),
        fundType: $("#fundType").val(),
        budgetHead: $("#budgetHead").val(),
        sortby: $("#sortby").val(),
        EmployeeStatus: $("#EmployeeStatus").val()
    }
    $.get(server_base_url + "hrms/salary/Employee/Search", {
        employeeSearchJSON: JSON.stringify(employeeSearchJSON)
    }).done(function (bdata) {
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");
                for (var i = bdata.length - 1; i >= 0; i--) {
                    sno++;
                    var employeesjson = {
                        employeeId: bdata[i]._id.$oid,
                        employeeCode: bdata[i].employeeCode,
                        employeeCodeM: bdata[i].employeeCodeM,
                        salutationOption: bdata[i].salutationOption,
                        employeeName: bdata[i].employeeName,
                        fatherName: bdata[i].fatherName,
                        gender: bdata[i].gender,
                        category: bdata[i].category,
                        religion: bdata[i].religion,
                        maritalStatus: bdata[i].maritalStatus,
                        dob: bdata[i].dob,
                        email: bdata[i].email,
                        panNo: bdata[i].panNo,
                        remarks: bdata[i].remarks,
                        payMode: bdata[i].payMode,
                        acnumber: bdata[i].acnumber,
                        ddo: bdata[i].ddo,
                        location: bdata[i].location,
                        department: bdata[i].department,
                        discipline: bdata[i].discipline,
                        natureType: bdata[i].natureType,
                        bank: bdata[i].bank,
                        fundType: bdata[i].fundType,
                        budgetHead: bdata[i].budgetHead,
                        reportingTo: bdata[i].reportingTo,
                        pfBank: bdata[i].pfBank,
                        pfNumber: bdata[i].pfNumber,
                        pfBalance: bdata[i].pfBalance,
                        siPremNo: bdata[i].siPremNo,
                        ptApplicable: bdata[i].ptApplicable,
                        stopGPF: bdata[i].stopGPF,
                        auditNumber: bdata[i].auditNumber,
                        workDetails: bdata[i].workDetails,
                        welfareNo: bdata[i].welfareNo,
                        isPgTeacher: bdata[i].isPgTeacher,
                        pgCode: bdata[i].pgCode,
                        postingDDO: bdata[i].postingDDO,
                        dateOfJoining: bdata[i].dateOfJoining,
                        lastAppointmentDate: bdata[i].lastAppointmentDate,
                        lastJoiningDate: bdata[i].lastJoiningDate,
                        EmployeeLeftStatus: bdata[i].EmployeeLeftStatus,
                        EmployeeLeftReason: bdata[i].EmployeeLeftReason,
                        LeavingDate: bdata[i].LeavingDate,
                        LeavingRemarks: bdata[i].LeavingRemarks,
                        IncrementDueDate: bdata[i].IncrementDueDate,
                        onDeputation: bdata[i].onDeputation,
                        fromDDO: bdata[i].fromDDO,
                        association: bdata[i].association,
                        isHandicapped: bdata[i].isHandicapped,
                        stopSalary: bdata[i].stopSalary,
                        isGazetted: bdata[i].isGazetted,
                        personalFileNo: bdata[i].personalFileNo,
                        salaryType: bdata[i].salaryType,
                        designation: bdata[i].designation,
                        pfType: bdata[i].pfType,
                        grade: bdata[i].grade,
                        basic: bdata[i].basic,
                        postingCity: bdata[i].postingCity,
                        postedDesignation: bdata[i].postedDesignation,
                        quarterNo: bdata[i].quarterNo,
                        gradePay: bdata[i].gradePay,
                        incrementPercentage: bdata[i].incrementPercentage,
                        salaryBillType: bdata[i].salaryBillType,
                        headSlab: bdata[i].headSlab

                    }
                    employeesjson = JSON.stringify(employeesjson);

                    $("#displayBankTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].employeeCodeM + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].location + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].department + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].salaryType + "</td>"
                            + "<td style='cursor:pointer;' onclick=updateemployeemaster('" + encodeURI(employeesjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>"

                            + "<td onclick=deletePopUp('deleteemployeemaster','','" + bdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");
                }
                $('#displayBankTable').dataTable();
            }
        }
    });
}

function  disablereason(name) {
    if ($("#EmployeeLeftStatusYesNo").val() == "No") {
        $("#EmployeeLeftStatus").prop("disabled", true);
        $("#EmployeeLeftStatus").val("");
    } else {
        $("#EmployeeLeftStatus").prop("disabled", false);
        viewOption("hrms/salary/EmployeeLeftStatus/ViewList", name, "employeeLeftStatus", "EmployeeLeftStatus", "Employee Left Status");
    }
}

function viewEmployeeListmaster(divId)
{
    $("#" + divId).text("").append("<div class='tab-pane' id='viewList'/>");
    $("#viewList").append("<div class='table-responsive' id='viewSectionTableDiv' />");
    $("#viewSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
    $("#displayBankTable").append("<thead class=''><tr>"

            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code(M)</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Location</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Department</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
            + "<th style='min-width:30%;width:auto;'><i ></i>Salary Type</th>"
            + "<th style='min-width:1%;width:80px;''><i class='fa'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;''><i class='fa' style='font-size:21px;'></i> Delete</th>"

            + "</tr></thead>");
    $.get(server_base_url + "hrms/salary/Employee/ViewList", {
    }).done(function (bdata) {

        if (bdata == fail) {
//            displayLargeErrorMessages("pregsuccessBefore", "" + failMessage + "<br /><br />");
//            displayLargeErrorMessages("pregsuccessAfter", "" + failMessage + "<br /><br />");
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
                    $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");
//                    for (var i = 0; i < bdata.length; i++) {
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var employeejson = {
                            employeeId: bdata[i]._id.$oid,
                            employeeCode: bdata[i].employeeCode,
                            employeeCodeM: bdata[i].employeeCodeM,
                            salutationOption: bdata[i].salutationOption,
                            employeeName: bdata[i].employeeName,
                            fatherName: bdata[i].fatherName,
                            gender: bdata[i].gender,
                            category: bdata[i].category,
                            religion: bdata[i].religion,
                            maritalStatus: bdata[i].maritalStatus,
                            dob: bdata[i].dob,
                            email: bdata[i].email,
                            panNo: bdata[i].panNo,
                            remarks: bdata[i].remarks,
                            payMode: bdata[i].payMode,
                            acnumber: bdata[i].acnumber,
                            ddo: bdata[i].ddo,
                            location: bdata[i].location,
                            department: bdata[i].department,
                            discipline: bdata[i].discipline,
                            natureType: bdata[i].natureType,
                            bank: bdata[i].bank,
                            fundType: bdata[i].fundType,
                            budgetHead: bdata[i].budgetHead,
                            reportingTo: bdata[i].reportingTo,
                            pfBank: bdata[i].pfBank,
                            pfNumber: bdata[i].pfNumber,
                            pfBalance: bdata[i].pfBalance,
                            siPremNo: bdata[i].siPremNo,
                            ptApplicable: bdata[i].ptApplicable,
                            stopGPF: bdata[i].stopGPF,
                            auditNumber: bdata[i].auditNumber,
                            workDetails: bdata[i].workDetails,
                            welfareNo: bdata[i].welfareNo,
                            isPgTeacher: bdata[i].isPgTeacher,
                            pgCode: bdata[i].pgCode,
                            postingDDO: bdata[i].postingDDO,
                            dateOfJoining: bdata[i].dateOfJoining,
                            lastAppointmentDate: bdata[i].lastAppointmentDate,
                            lastJoiningDate: bdata[i].lastJoiningDate,
                            EmployeeLeftStatus: bdata[i].EmployeeLeftStatus,
                            EmployeeLeftReason: bdata[i].EmployeeLeftReason,
                            LeavingDate: bdata[i].LeavingDate,
                            LeavingRemarks: bdata[i].LeavingRemarks,
                            IncrementDueDate: bdata[i].IncrementDueDate,
                            onDeputation: bdata[i].onDeputation,
                            fromDDO: bdata[i].fromDDO,
                            association: bdata[i].association,
                            isHandicapped: bdata[i].isHandicapped,
                            stopSalary: bdata[i].stopSalary,
                            isGazetted: bdata[i].isGazetted,
                            personalFileNo: bdata[i].personalFileNo,
                            salaryType: bdata[i].salaryType,
                            designation: bdata[i].designation,
                            pfType: bdata[i].pfType,
                            grade: bdata[i].grade,
                            basic: bdata[i].basic,
                            postingCity: bdata[i].postingCity,
                            postedDesignation: bdata[i].postedDesignation,
                            quarterNo: bdata[i].quarterNo,
                            gradePay: bdata[i].gradePay,
                            incrementPercentage: bdata[i].incrementPercentage,
                            salaryBillType: bdata[i].salaryBillType,
                            headSlab: bdata[i].headSlab
                        };
                        employeejson = JSON.stringify(employeejson);
                        $("#displayBankTableBody").append("<tr id='" + bdata[i].status + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeCodeM + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].location + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].department + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td>"
                                + "<td style='cursor:pointer;'>" + bdata[i].salaryType + "</td>"
                                + "<td style='cursor:pointer;' onclick=updateemployeemaster('" + encodeURI(employeejson) + "')>" + ' <button type="button"  class="btn btn-primary mr5"style="align:center;color:white"  >EDIT</button>' + "</td>"

                                + "<td onclick=deletePopUp('deleteemployeemaster','viewEmployeeListmasterSearch','" + bdata[i]._id.$oid + "')>" + ' <button type="button" class="btn btn-danger mr5"  style="align:center;color:white" >DELETE</button>' + "</td></tr>");

                    }
                    $('#displayBankTable').dataTable();

                }
            }
        }
        ;
        window.confirm = function (message, callback, caption) {
            caption = caption || 'Confirmation'

            $(document.createElement('div')).attr({
                title: caption,
                'class': 'dialog'
            }).html(message).dialog({
                position: ['center', 100],
                dialogClass: 'fixed',
                buttons: {
                    "OK": function () {
                        $(this).dialog('close');
                        callback()
                        return true;
                    },
                    "Cancel": function () {
                        $(this).dialog('close');
                        return false;
                    }
                },
                close: function () {
                    $(this).remove();
                },
                draggable: false,
                modal: true,
                resizable: false,
                width: 'auto'
            });
        };

        confirm('dd', function () {
            //what every needed to be done on confirmation has to be done here
            console.log('confirmed')
        })
    });
}
function viewEmployeeListmasterSearch(divId)
{
    if (checkUserPrivelege(pvViewEmployee)) {
        $("#pregsuccessBeforeInSearch").text("");
//    $("#" + divId).text("").append("<div id='ErrorDiv'/>");
        $("#" + divId).text("").append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").text("").append("<div class='tab-pane' id='viewList'/>");
        $("#viewList").append("<div class='table-responsive' id='viewSectionTableDiv' />");
        $("#viewList").append("<div id='ErrorDivInSearch' />");
        $("#viewSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayBankTable' />");
        $("#displayBankTable").append("<thead class=''><tr id='searchResultTableHeadRow'>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Employee Code(M)</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Employee Name</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Location</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Department</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Salary Type</th>");
        if (checkUserPrivelege(pvUpdateEmployee)) {
            $("#searchResultTableHeadRow").append("<th style='min-width:1%;width:80px;'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteEmployee)) {
            $("#searchResultTableHeadRow").append("<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>");
        }
        $("#searchResultTableHeadRow").append("</tr></thead>");
        var employeeSearchJSON = {
            employeeCode: $("#employeeCode").val(),
            employeeCodeM: $("#employeeCodeM").val(),
            employeeName: $("#employeeName").val(),
            ddo: $("#ddo").val(),
            location: $("#location").val(),
            department: $("#department").val(),
            designation: $("#designation").val(),
            natureType: $("#natureType").val(),
            postingCity: $("#postingCity").val(),
            fundType: $("#fundType").val(),
            budgetHead: $("#budgetHead").val(),
            sortby: $("#sortby").val(),
            EmployeeStatus: $("#EmployeeStatus").val()
        }
        var ddo = $("#ddo").val();
        if (preValidation(ddo)) {
            displayLargeErrorMessagesInCenterInRed("pregsuccessBeforeInSearch", mandatoryFieldMsg);
            return;
        } else {
            $.get(server_base_url + "hrms/salary/Employee/Search", {
                condition: "No",
                employeeSearchJSON: JSON.stringify(employeeSearchJSON)
            }).done(function (bdata) {

                if (bdata == fail || bdata.statuscode == fail) {
                    displayLargeErrorMessagesInCenterInRed("ErrorDivInSearch", "" + NoDataFound + "<br /><br />");
                } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                    displayLargeErrorMessages("ErrorDivInSearch", "" + unauthorizedMessage + "<br /><br />");
                } else if (bdata == invalidSession || bdata.statuscode == invalidSession) {
                    callSessionTimeout();
                } else if (bdata == statusException || bdata.statuscode == statusException) {
                    displayLargeErrorMessagesInCenterInRed("ErrorDivInSearch", "" + NoDataFound + "<br /><br />");
                } else if (bdata == null) {
                    displayLargeErrorMessagesInCenterInRed("ErrorDivInSearch", "" + NoDataFound + "<br /><br />");
                } else {
                    if (bdata != null) {
                        if (bdata.length > 0) {
                            var sno = 0;
                            $("#displayBankTable").append("<tbody id='displayBankTableBody' class='table-striped table-bordered' />");
                            for (var i = bdata.length - 1; i >= 0; i--) {
                                sno++;
                                $("#displayBankTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                        + "<td>" + sno + "</td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].employeeCodeM + "</td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].employeeName + "</td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].location + "</td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].department + "</td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td>"
                                        + "<td style='cursor:pointer;'>" + bdata[i].salaryType + "</td>");
                                if (checkUserPrivelege(pvUpdateEmployee)) {
                                    $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=fetchEmployeeJsonForUpdateInSearch('" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>");
                                }
                                if (checkUserPrivelege(pvDeleteEmployee)) {
                                    $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteemployeemaster','','" + bdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td>");
                                }
                                $("#" + bdata[i]._id.$oid).append("</tr>");
                            }
                            $('#displayBankTable').append("</table>");
                            $('#displayBankTable').dataTable();
                        } else {
                            displayLargeErrorMessagesInCenterInRed("ErrorDivInSearch", "" + NoDataFound + "<br /><br />");
                        }
                    }
                }
            });
        }
    }
}
//                                + "<td style='cursor:pointer;' onclick=updatebank('" + bdata[i]._id.$oid + "','" + bdata[i].bankname + "','" + bdata[i].branchname + "','" + bdata[i].employeeName + "','" + bdata[i].state + "','" + bdata[i].ifsccode + "','" + bdata[i].micrcode + "','" + bdata[i].primarycontactname + "','" + bdata[i].primarycontactno + "','" + bdata[i].secondarycontactname + "','" + bdata[i].secondarycontactno + "','" + bdata[i].acnumber + "','" + bdata[i].address + "','" + bdata[i].remarks + "')>" + ' <button type="button" class="removebutton" style="align:center;color:red" title="Edit this Religion" >EDIT</button>' + "</td>"
//Sava Bank Details
function deleteemployeemaster(employeeId) {
    if (checkUserPrivelege(pvDeleteEmployee)) {

        $.post(server_base_url + "hrms/salary/Employee/Delete", {
            employeeId: employeeId,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail || data.statuscode == unauthorized) {
                displaySmallErrorMessages("authonticationMsgId", "Invalid username / password");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessages("authonticationMsgId", unauthorizedMessage);
            } else if (data == statusException || data.statuscode == unauthorized) {
                displaySmallErrorMessages("authonticationMsgId", statusExceptionMessage);
            } else if (data == invalidSession || data.statuscode == unauthorized) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessages("authonticationMsgId", "No User available");
            } else {
//                wipeAllEmployeeData();

                displaySuccessMessages("ErrorDiv", deleteMessage, "");
                setTimeout(function () {
                    viewEmployeeListmasterSearch('listpanelMainBody');
                }, 4000);

            }
        });

    }

}
function employeeValidation() {
    $("#employeeCodeErr").text("");
    $("#employeeCodeMErr").text("");
    $("#employeeNameErr").text("");
    $("#fatherNameErr").text("");
    $("#genderErr").text("");
    $("#religionErr").text("");
    $("#maritalStatusErr").text("");
    $("#dobErr").text("");
    $("#emailErr").text("");
    $("#panNoErr").text("");
    $("#remarksErr").text("");
    $("#payModeErr").text("");
    $("#acnumberErr").text("");
    $("#bankErr").text("");
    $("#ddoErr").text("");
    $("#locationErr").text("");
    $("#departmentErr").text("");
    $("#disciplineErr").text("");
    $("#natureTypeErr").text("");
    $("#fundTypeErr").text("");
    $("#budgetHeadErr").text("");
    $("#reportingToErr").text("");
    $("#pfBankErr").text("");
    $("#pfNumberErr").text("");
    $("#pfBalanceErr").text("");
    $("#siPremNoErr").text("");
    $("#ptApplicableErr").text("");
    $("#stopGPFErr").text("");
    $("#auditNumberErr").text("");
    $("#workDetailsErr").text("");
    $("#welfareNoErr").text("");
    $("#isPgTeacherErr").text("");
    $("#pgCodeErr").text("");
    $("#postingDDOErr").text("");
    $("#dateOfAppointmentErr").text("");
    $("#dateOfJoiningErr").text("");
    $("#lastAppointmentDateErr").text("");
    $("#lastJoiningDateErr").text("");
    $("#EmployeeLeftStatusErr").text("");
    $("#EmployeeLeftReasonErr").text("");
    $("#LeavingDateErr").text("");
    $("#LeavingRemarksErr").text("");
    $("#IncrementDueDateErr").text("");
    $("#onDeputationErr").text("");
    $("#fromDDOErr").text("");
    $("#associationErr").text("");
    $("#isHandicappedErr").text("");
    $("#stopSalaryErr").text("");
    $("#isGazettedErr").text("");
    $("#personalFileNoErr").text("");
    $("#salaryTypeErr").text("");
    $("#designationErr").text("");
    $("#pfTypeErr").text("");
    $("#gradeErr").text("");
    $("#basicErr").text("");
    $("#postingCityErr").text("");
    $("#postedDesignationErr").text("");
    $("#quarterNoErr").text("");
    $("#gradePayErr").text("");
    $("#incrementPercentageErr").text("");
    $("#salaryBillTypeErr").text("");
    $("#headSlabErr").text("");

    var count = 0;
    var result = 1;
    var saveorupdate = $('#saveorupdate').val();
    if ($('#headSlab').val() == "" || $('#headSlab').val() == null) {
        $("#headSlab").focus();
        displaySmallErrorMessages("headSlabErr", "Please Select Head Slab.");
        result = 0;
    }
    if ($('#basic').val() == "") {
        $("#basic").focus();
        addSomeClass("basicFieldGroup", "has-error");
        displaySmallErrorMessages("basicErr", "Please enter basic.");
        result = 0;
    } else if ($('#basic').val() != "") {
        if (!$('#basic').val().match((numbervalidation()))) {
            $("#basic").focus();
            addSomeClass("basicFieldGroup", "has-error");
            displaySmallErrorMessages("basicErr", "Please enter valid  basic.");
            result = 0;
        }
        removeSomeClass("basicFieldGroup", "has-error");
        count++;
    }
    if ($('#gradePay').val() != "") {
        if (!$('#gradePay').val().match((numbervalidation()))) {
            $("#gradePay").focus();
            addSomeClass("gradePayFieldGroup", "has-error");
            displaySmallErrorMessages("gradePayErr", "Please enter valid  Grade Pay.");
            result = 0;
        }
        removeSomeClass("gradePayFieldGroup", "has-error");
    }
    if ($('#grade').val() == null || $('#grade').val() == "") {
        $("#grade").focus();
        addSomeClass("gradeFieldGroup", "has-error");
        displaySmallErrorMessages("gradeErr", "Please Select grade.");
        result = 0;
    } else if ($('#grade').val() != null || $('#grade').val() != "") {
        removeSomeClass("gradeFieldGroup", "has-error");
        count++;
    }
    if ($('#pfType').val() == null || $('#pfType').val() == "") {
        $("#pfType").focus();
        addSomeClass("pfTypeFieldGroup", "has-error");
        displaySmallErrorMessages("pfTypeErr", "Please Select PF Type.");
        result = 0;
    } else if ($('#pfType').val() != null || $('#pfType').val() != "") {
        removeSomeClass("pfTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#postedDesignation').val() == null) {
        $("#postedDesignation").focus();
        addSomeClass("postedDesignationFieldGroup", "has-error");
        displaySmallErrorMessages("postedDesignationErr", "Please Select Posted Designation.");
        result = 0;
    } else if ($('#postedDesignation').val() != null) {
        removeSomeClass("postedDesignationFieldGroup", "has-error");
        count++;
    }
    if ($('#designation').val() == null) {
        $("#designation").focus();
        addSomeClass("designationFieldGroup", "has-error");
        displaySmallErrorMessages("designationErr", "Please Select  Designation.");
        result = 0;
    } else if ($('#designation').val() != null) {
        removeSomeClass("designationFieldGroup", "has-error");
        count++;
    }
    if ($('#postingCity').val() == null) {
        $("#postingCity").focus();
        addSomeClass("postingCityFieldGroup", "has-error");
        displaySmallErrorMessages("postingCityErr", "Please Select  Posting City.");
        result = 0;
    } else if ($('#postingCity').val() != null) {
        removeSomeClass("postingCityFieldGroup", "has-error");
        count++;
    }
//    if ($('#postingDDO').val() == null) {
//        $("#postingDDO").focus();
//        addSomeClass("postingDDOFieldGroup", "has-error");
//        displaySmallErrorMessages("postingDDOErr", "Please Select  Posting DDO .");
//    } else if ($('#postingDDO').val() != null) {
//        removeSomeClass("postingDDOFieldGroup", "has-error");
//        count++;
//    }
    if ($('#salaryBillType').val() == null || $('#salaryBillType').val() == "") {
        $("#salaryBillType").focus();
        displaySmallErrorMessages("salaryBillTypeErr", "Please Select  Salary Bill Type.");
        result = 0;
    } else if ($('#salaryBillType').val() != null) {
        count++;
    }
    if ($('#salaryType').val() == null) {
        $("#salaryType").focus();
        addSomeClass("salaryTypeFieldGroup", "has-error");
        displaySmallErrorMessages("salaryTypeErr", "Please Select  Salary Type.");
        result = 0;
    } else if ($('#salaryType').val() != null) {
        removeSomeClass("salaryTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#budgetHead').val() == null) {
        $("#budgetHead").focus();
        addSomeClass("budgetHeadFieldGroup", "has-error");
        displaySmallErrorMessages("budgetHeadErr", "Please Select Budget Head.");
        result = 0;
    } else if ($('#budgetHead').val() != null) {
        removeSomeClass("budgetHeadFieldGroup", "has-error");
        count++;
    }
    if ($('#fundType').val() == null) {
        $("#fundType").focus();
        addSomeClass("fundTypeFieldGroup", "has-error");
        displaySmallErrorMessages("fundTypeErr", "Please Select  Fund Type.");
        result = 0;
    } else if ($('#fundType').val() != null) {
        removeSomeClass("fundTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#natureType').val() == null) {
        $("#natureType").focus();
        addSomeClass("natureTypeFieldGroup", "has-error");
        displaySmallErrorMessages("natureTypeErr", "Please Select Nature Type.");
        result = 0;
    } else if ($('#natureType').val() != null) {
        removeSomeClass("natureTypeFieldGroup", "has-error");
        count++;
    }
    if ($('#discipline').val() == null) {
        $("#discipline").focus();
        addSomeClass("disciplineFieldGroup", "has-error");
        displaySmallErrorMessages("disciplineErr", "Please Select Discipline.");
        result = 0;
    } else if ($('#discipline').val() != null) {
        removeSomeClass("disciplineFieldGroup", "has-error");
        count++;
    }
    if ($('#department').val() == null) {
        $("#department").focus();
        addSomeClass("departmentFieldGroup", "has-error");
        displaySmallErrorMessages("departmentErr", "Please Select Department.");
        result = 0;
    } else if ($('#department').val() != null) {
        removeSomeClass("departmentFieldGroup", "has-error");
        count++;
    }
    if ($('#location').val() == "" || $('#location').val() == null) {
        $("#location").focus();
        addSomeClass("locationFieldGroup", "has-error");
        displaySmallErrorMessages("locationErr", "Please Select Location.");
        result = 0;
    } else if ($('#location').val() != "" || $('#location').val() != null) {
        removeSomeClass("locationFieldGroup", "has-error");
    }
    if ($('#ddo').val() == null) {
        $("#ddo").focus();
        addSomeClass("ddoFieldGroup", "has-error");
        displaySmallErrorMessages("ddoErr", "Please enter DDO.");
        result = 0;
    } else if ($('#ddo').val() != null) {
        removeSomeClass("ddoFieldGroup", "has-error");
        count++;
    }
    if ($('#payMode').val() == null) {
        $("#payMode").focus();
        addSomeClass("payModeFieldGroup", "has-error");
        displaySmallErrorMessages("payModeErr", "Please Select Pay Mode.");
        result = 0;
    } else if ($('#payMode').val() != null) {
        removeSomeClass("payModeFieldGroup", "has-error");
        count++;
    }
    if ($('#panNo').val() != "") {
        if (!$('#panNo').val().match((PanNumberValidation()))) {
            $("#panNo").focus();
            addSomeClass("panNoFieldGroup", "has-error");
            displaySmallErrorMessages("panNoErr", "Please enter valid Pan Number .");
            result = 0;
        }
        removeSomeClass("panNoFieldGroup", "has-error");
        count++;
    }
    if ($('#email').val() == "") {
        $("#email").focus();
        addSomeClass("emailFieldGroup", "has-error");
        displaySmallErrorMessages("emailErr", "Please enter email.");
        result = 0;
    } else if ($('#email').val() != "") {
        if (!$('#email').val().match((EmailValidation()))) {
            $("#email").focus();
            addSomeClass("emailFieldGroup", "has-error");
            displaySmallErrorMessages("emailErr", "Please enter valid Email .");
            result = 0;
        }
        removeSomeClass("emailFieldGroup", "has-error");
        count++;
    }
    if ($('#dob').val() == null) {
        $("#dob").focus();
        addSomeClass("dobFieldGroup", "has-error");
        displaySmallErrorMessages("dobErr", "Please enter date.");
        result = 0;
    } else if ($('#dob').val() != "") {
        removeSomeClass("dobFieldGroup", "has-error");
        count++;
    }
    if ($('#maritalStatus').val() == null) {
        $("#maritalStatus").focus();
        addSomeClass("maritalStatusFieldGroup", "has-error");
        displaySmallErrorMessages("maritalStatusErr", "Please Select Marital Status.");
        result = 0;
    } else if ($('#maritalStatus').val() != null) {
        removeSomeClass("maritalStatusFieldGroup", "has-error");
        count++;
    }
    if ($('#religion').val() == null) {
        $("#religion").focus();
        addSomeClass("religionFieldGroup", "has-error");
        displaySmallErrorMessages("religionErr", "Please Select Religion.");
        result = 0;
    } else if ($('#religion').val() != null) {
        removeSomeClass("religionFieldGroup", "has-error");
        count++;
    }
    if ($('#category').val() == null) {
        $("#category").focus();
        addSomeClass("categoryFieldGroup", "has-error");
        displaySmallErrorMessages("categoryErr", "Please Select Category .");
    } else if ($('#category').val() != null) {
        removeSomeClass("categoryFieldGroup", "has-error");
        count++;
    }
    if ($('#gender').val() == null) {
        $("#gender").focus();
        addSomeClass("genderFieldGroup", "has-error");
        displaySmallErrorMessages("genderErr", "Please Select Gender.");
        result = 0;
    } else if ($('#gender').val() != null) {
        removeSomeClass("genderFieldGroup", "has-error");
        count++;
    }
    if ($('#employeeCodeM').val() == "") {
        $("#employeeCodeM").focus();
        addSomeClass("employeeCodeMFieldGroup", "has-error");
        displaySmallErrorMessages("employeeCodeMErr", "Please Enter Employee Code(M) .");
        result = 0;
    } else if ($('#employeeCodeM').val() != "") {
        removeSomeClass("employeeCodeMFieldGroup", "has-error");
        count++;
    }
    if ($('#employeeCode').val() == "") {
        $("#employeeCode").focus();
        addSomeClass("employeeCodeFieldGroup", "has-error");
        displaySmallErrorMessages("employeeCodeErr", "Please Enter Employee Code.");
        result = 0;
    } else if ($('#employeeCodeM').val() != "") {
        removeSomeClass("employeeCodeMFieldGroup", "has-error");
        count++;
    }
//    var filesize = document.getElementById("employeePic").files[0].size;
//    alert(filesize);
//    if (filesize < 102401) {
//        alert(102401 + "=" + filesize);
//    } else {
//        alert("Not Uploading");
//        result = 0;
//    }
    if (result != 0) {
        if (count > 17) {
            if (saveorupdate == "save") {
                saveEmployeeDetails();
            } else if (saveorupdate == "update") {
                updateEmployeeDetailsmaster();
            }
        }
    }
}
function updateEmployeeDetailsmaster() {
    var conditionOFHeads = checkSalaryCalculationDetailsIsChangedOrNot();
    if (conditionOFHeads == false) {
        return;
    } else {
        var employeeId = $("#employeeId").val();
        var onDeputation = "No";
        var ptApplicable = "No";
        var isHandicapped = "No";
        var stopGPF = "No";
        var isGazetted = "No";
        var isPgTeacher = "No";
        var stopSalary = "No";
        var fromDdo;
        var undepuDt;
        var res = $("#IncrementDueDate").val().substring(0, 2);
        var incDueDate = $("#IncrementDueDate").val().replace(res, "01");
        if ($("#onDeputation").prop("checked") == true && $("#fromDDO").val() != null)
        {
            var d = new Date();
            var n = d.getTime();
            undepuDt = n;
        }
        if ($("#onDeputation").prop("checked") == true) {
            onDeputation = "Yes";
            fromDdo = $("#fromDDO").val();
        }
        if ($("#ptApplicable").prop("checked") == true) {
            ptApplicable = "Yes";
        }
        if ($("#isHandicapped").prop("checked") == true) {
            isHandicapped = "Yes";
        }
        if ($("#isGazetted").prop("checked") == true) {
            isGazetted = "Yes";
        }
        if ($("#stopGPF").prop("checked") == true) {
            stopGPF = "Yes";
        }
        if ($("#isPgTeacher").prop("checked") == true) {
            isPgTeacher = "Yes";
        }
        if ($("#stopSalary").prop("checked") == true) {
            stopSalary = "Yes";
        }
        var earningHeads = [];
        var deductionHeads = [];
        var totalDedcutions = 0;
        var totalEarnings = 0;
        $('table#displayEarningHeadTable tbody tr input[type="checkbox"][name="case"]:checked').each(function () {
            var row = $(this).closest('tr');
            earningHeads.push({
                description: row.find('td:eq(2) input').val(),
                mapping: row.find('td:eq(3)').text(),
                amount: Number(row.find('td:eq(4) input').val()),
                effectiveFromDate: row.find('td:eq(5) input').val()
            });
            totalEarnings = totalEarnings + Number(row.find('td:eq(4) input').val());
        });
        $('table#displayDeductionHeadTable tbody tr input[type="checkbox"][name="case"]:checked').each(function () {
            var row = $(this).closest('tr');
            deductionHeads.push({
                description: row.find('td:eq(2) input').val(),
                mapping: row.find('td:eq(3)').text(),
                amount: Number(row.find('td:eq(4) input').val()),
                effectiveFromDate: row.find('td:eq(5) input').val()
            });
            totalDedcutions = totalDedcutions + Number(row.find('td:eq(4) input').val());
        });
        var employeeJson = {
            employeeCode: $("#employeeCode").val(),
            employeeCodeM: $("#employeeCodeM").val(),
            salutationOption: $("#salutationOption").val(),
            employeeName: $("#employeeName").val(),
            fatherName: $("#fatherName").val(),
            gender: $("#gender").val(),
            category: $("#category").val(),
            religion: $("#religion").val(),
            maritalStatus: $("#maritalStatus").val(),
            dob: $("#dob").val(),
            email: $("#email").val(),
            panNo: $("#panNo").val(),
            remarks: $("#remarks").val(),
            payMode: $("#payMode").val(),
            acnumber: $("#acnumber").val(),
            bank: $("#bank").val(),
            ddo: $("#ddo").val(),
            location: $("#location").val(),
            department: $("#department").val(),
            discipline: $("#discipline").val(),
            natureType: $("#natureType").val(),
            fundType: $("#fundType").val(),
            budgetHead: $("#budgetHead").val(),
            reportingTo: $("#reportingTo").val(),
            pfBank: $("#pfBank").val(),
            pfNumber: $("#pfNumber").val(),
            pfBalance: $("#pfBalance").val(),
            siPremNo: $("#siPremNo").val(),
            ptApplicable: ptApplicable,
            stopGPF: stopGPF,
            auditNumber: $("#auditNumber").val(),
            workDetails: $("#workDetails").val(),
            welfareNo: $("#welfareNo").val(),
            isPgTeacher: isPgTeacher,
            pgCode: $("#pgCode").val(),
            postingDDO: $("#postingDDO").val(),
            dateOfJoining: $("#dateOfJoining").val(),
            lastAppointmentDate: $("#lastAppointmentDate").val(),
            dateOfAppointment: $("#dateOfAppointment").val(),
            lastJoiningDate: $("#lastJoiningDate").val(),
            EmployeeLeftStatus: $("#EmployeeLeftStatusYesNo").val(),
            EmployeeLeftReason: $("#EmployeeLeftStatus").val(),
            LeavingDate: $("#LeavingDate").val(),
            LeavingRemarks: $("#LeavingRemarks").val(),
            IncrementDueDate: incDueDate,
            onDeputation: onDeputation,
            fromDDO: fromDdo,
            dateOfUnDeputationInMillisecond: undepuDt,
            association: $("#association").val(),
            isHandicapped: isHandicapped,
            stopSalary: stopSalary,
            isGazetted: isGazetted,
            personalFileNo: $("#personalFileNo").val(),
            salaryType: $("#salaryType").val(),
            designation: $("#designation").val(),
            pfType: $("#pfType").val(),
            grade: $("#grade").val(),
            basic: $("#basic").val(),
            postingCity: $("#postingCity").val(),
            postedDesignation: $("#postedDesignation").val(),
            quarterNo: $("#quarterNo").val(),
            gradePay: $("#gradePay").val(),
            incrementPercentage: $("#incrementPercentage").val(),
            salaryBillType: $("#salaryBillType").val(),
            earningHeads: earningHeads,
            deductionHeads: deductionHeads,
            totalEarnings: totalEarnings,
            totalDeductions: totalDedcutions,
            dateOfRetirement: $("#dateOfRetirement").val(),
            classMaster: $("#class").val()
        };
        $("#basicErr").text("");
        var form_data = new FormData();
        var imageCount = document.getElementById("employeePic").files.length;
        for (i = 0; i < imageCount; i++) {
            form_data.append("file", document.getElementById("employeePic").files[i]);
        }
//    var filesize = document.getElementById("employeePic").files[0].size;
//    alert(filesize);
//    if (filesize < 102, 401) {
//        alert("Yes 100 Kb");
//    } else {
//        alert("No More than 100 kb");
//        return;
//    }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/usg-server/hrms/salary/Employee/Update", true);
        xhr.setRequestHeader("employeeJson", JSON.stringify(employeeJson));
        xhr.setRequestHeader("employeeId", employeeId);
        xhr.setRequestHeader("userId", getUserSessionElement("userId"));
        if (imageCount == 1) {
            xhr.send(form_data);
        } else {
            xhr.send();
        }
        disableDiv("mainTabMenu");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var responseObj = JSON.parse(xhr.response);
                    if (responseObj == NoPostAvailableForThisCategory) {
                        displayErrorMessages("pregsuccessBefore", "No Post available", "");
                        enableEmployeeDiv("mainTabMenu");
                        scrolupfunction();
                        clearSuccessMessageAfterFourSecond("pregsuccessBefore");
                        return;
                    }
                    if (responseObj == "Email Already Existed") {
                        displayErrorMessages("pregsuccessBefore", "Email Already Existed", "");
                        enableEmployeeDiv("mainTabMenu");
                        scrolupfunction();
                        clearSuccessMessageAfterFourSecond("pregsuccessBefore");
                        return;
                    }
                    if (responseObj == "PAN Already Existed") {
                        displayErrorMessages("pregsuccessBefore", "PAN Already Existed", "");
                        enableEmployeeDiv("mainTabMenu");
                        scrolupfunction();
                        clearSuccessMessageAfterFourSecond("pregsuccessBefore");
                        return;
                    }
                    if (responseObj == "Updated" || xhr.response == "updated") {
                        setTimeout(function () {
                            employeemaster("dashBoardBodyMainDiv");
                            enableEmployeeDiv("mainTabMenu");
                            scrolupfunction();
                            displaySuccessMessages("pregsuccessBefore", updateSuccessMessage, "");
                        }, 1000);
                        clearSuccessMessageAfterFourSecond("pregsuccessBefore");
                    } else {
                        scrolupfunction();
                        displayErrorMessages("pregsuccessBefore", "Employee Not Updated.");
                        enableEmployeeDiv("mainTabMenu");
                    }
                }
            }
        }
    }
}
//Clear All Entered Data
function wipeAllEmployeeSearchData() {
    $("#employeeCode").val("");
    $("#employeeCodeM").val("");
    $("#employeeName").val("");
//    $("#ddo").val("");
//    $("#location").val("");
    $("#department").val("");
    $("#designation").val("");
    $("#natureType").val("");
    $("#postingCity").val("");
    $("#fundType").val("");
    $("#budgetHead").val("");
    $("#sortby").val("");
    $("#EmployeeStatus").val("");
    $("#salaryBillType").val("");
    $("#headSlab").val("");
    $("#employeeCodeErr").text("");
    $("#employeeCodeMErr").text("");
    $("#employeeNameErr").text("");
    $("#ddoErr").text("");
    $("#locationErr").text("");
    $("#departmentErr").text("");
    $("#designationErr").text("");
    $("#natureTypeErr").text("");
    $("#postingCityErr").text("");
    $("#fundTypeErr").text("");
    $("#budgetHeadErr").text("");
    $("#sortbyErr").text("");
    $("#EmployeeStatusErr").text("");
    $("#salaryBillTypeErr").text("");
    $("#headSlabErr").text("");
}

function fetchEmployeeJsonForUpdateInSearch(employeeId) {
    if (checkUserPrivelege(pvUpdateEmployee)) {
        employeemaster(DashboardMainDivID);
        $.get(server_base_url + "hrms/EmployeeMaster/Employee/getEmployeeForUpdate", {
            employeeId: employeeId
        }).done(function (pdata) {
            pdata = encodeURI(JSON.stringify(pdata));
            updateemployeemaster(pdata);
        });
    }
}















function validate(key)
{
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    //comparing pressed keycodes
    if (!(keycode == 8 || keycode == 12) && (keycode < 13 || keycode > 13) && (keycode < 48 || keycode > 57))
    {
        return false;
    } else {
        return true;
    }
}
//Function to allow only alpha numeric to textbox
function validatealphanumeric(key) {

    var keycode = (key.which) ? key.which : key.keyCode;
//comparing pressed keycodes
    if (!(keycode == 8 || keycode == 12) && (keycode < 13 || keycode > 13) && (keycode < 32 || keycode > 33) && (keycode < 65 || keycode > 90) && (keycode < 97 || keycode > 122)) {
        return false;
    } else {

        return true;
    }
}

