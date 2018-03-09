/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function addEmployeeNominee()
{
    if (checkUserPrivelege(pvCreateEmployeeDetails)) {
        scrolupfunction();
        var financialYear = getUserSessionElement(seCurrentFinancialYear);
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>');
        $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsEmployeeMasterTabs()">Employee Master</a></label> >> <label>Manage Employee Details</label>');
        $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' class='' />");
        $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
        $("#mainTabMenu").append("<div id='tableHeader' />");
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>Employee Nominee  Details</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colEmployeeNominee'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");

        $("#colEmployeeNominee").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colEmployeeNominee span").hasClass("glyphicon-minus-sign")) {
                $("#colEmployeeNominee").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colEmployeeNominee").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });





        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='financialYearDiv' class = 'row' />");
        $("#financialYearDiv").append("<span class='pull-right' style='font-size: 15px;'><strong>Financial Year : " + financialYear + "</strong></span>");
        $("#panelMainBody").append("<br /><div id='panelRow' class='row' />");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        $("#FieldGroup").append("<label class='col-sm-2 control-label'>DDO:</label>");
        $("#FieldGroup").append("<div id='FieldDiv' class='col-sm-4' />");
        $("#FieldDiv").append("<select id='ddo' class='form-control'>");
        // $("#ddo").append("<option id=''value='' >---------------------Select DDO-----------------</option>");


        getLoggedInDDOInDropDown("ddo", "");

        $("#FieldGroup").append("<label class='col-sm-2 control-label'>Employee Code<span class='require'>*</span>  :</label>");

        $("#FieldGroup").append("<div id='FieldDiv1' class='col-sm-4' />");
        $("#FieldDiv1").append("<select  id='empcode' class='form-control' ></select>");
        getEmployeeDataForNominee();
        $("#empcode").attr("onchange", "getEmpDetails()");
        $("#FieldDiv").append("<span id='ddoError'></span>");
        $("#FieldDiv1").append("<span id='empcodeError'></span><br>");
        $("#panelMainBody").append("<div id='panelRow1' class='row' />");
        $("#panelRow1").append("<div id='FieldGroup1' class='form-group' />");
        $("#FieldGroup1").append("<label class='col-sm-2 control-label'>Employee Name  :</label>");
        $("#FieldGroup1").append("<div id='FieldDiv2' class='col-sm-4' />");
        $("#FieldDiv2").append("<input type='text' id='empname' class='form-control' size=50 maxlength=50 readonly>");
        $("#FieldGroup1").append("<label class='col-sm-2 control-label'>Department:</label>");
        $("#FieldGroup1").append("<div id='FieldDiv3' class='col-sm-4' />");
        $("#FieldDiv3").append("<input type='text' id='dept' class='form-control' size=50 maxlength=50 readonly>");
        //
        $("#FieldDiv2").append("<span id='empnameError'></span>");
        $("#FieldDiv3").append("<span id='deptError'></span><br>");
        //
        $("#panelMainBody").append("<div id='panelRow2' class='row' />");
        $("#panelRow2").append("<div id='FieldGroup2' class='form-group' />");
        $("#FieldGroup2").append("<label class='col-sm-2 control-label'>Designation  :</label>");
        $("#FieldGroup2").append("<div id='FieldDiv4' class='col-sm-4' />");
        $("#FieldDiv4").append("<input type='text' id='designation' class='form-control'size=50 maxlength=50 readonly>");
        $("#FieldGroup2").append("<label class='col-sm-2 control-label'>Remarks  :</label>");
        $("#FieldGroup2").append("<div id='FieldDiv5' class='col-sm-4' />");
        $("#FieldDiv5").append("<input type='text' id='remarks' class='form-control' size=50 maxlength=50>");
        //
        $("#FieldDiv4").append("<span id='designationError'></span>");
        $("#FieldDiv5").append("<span id='remarksError'></span><br>");
        $("#panelMainBody").append("<div id='panelRow3' class='row' />");
        $("#panelRow3").append("<div id='FieldGroup3' class='form-group' />");
        $("#FieldGroup3").append("<label><center style='font-weight:bold;font-size:15px;'>Employee Nominee Deatils</cenetr></label>");
        $("#panelMainBody").append("<div id='panelRow4' class='row' />");
        $("#panelRow4").append("<div id='FieldGroup4' class='form-group' />");
        $("#FieldGroup4").append("<label class='col-sm-2 control-label'>Nominee Name<span class='require'>*</span>   :</label>");
        $("#FieldGroup4").append("<div id='FieldDiv6' class='col-sm-4' />");
        $("#FieldDiv6").append("<input type='text' id='nominee' class='form-control' onkeypress='return validatealphanumeric(event)' size=50 maxlength=50>");
        $("#FieldDiv6").append("<span id='pregppid'></span>");
        $("#FieldGroup4").append("<label class='col-sm-2 control-label'>Relation <span class='require'>*</span>  :</label>");
        $("#FieldGroup4").append("<div id='FieldDiv7' class='col-sm-4' />");
        $("#FieldDiv7").append("<select  id='nomineerelation' class='form-control'></select>");
        $("#nomineerelation").append("<option id=''value='' >---------------------Select Relation------------------</option>");
        //
        $("#FieldDiv6").append("<span id='nomineeError'></span>");
        $("#FieldDiv7").append("<span id='relationError'></span><br>");
        $("#panelMainBody").append("<div id='panelRow5' class='row' />");
        $("#panelRow5").append("<div id='FieldGroup5' class='form-group' />");
        $("#FieldGroup5").append("<label class='col-sm-2 control-label'>Age<span class='require'>*</span>   :</label>");
        $("#FieldGroup5").append("<div id='FieldDiv8' class='col-sm-4' />");
        $("#FieldDiv8").append("<input type='text' id='age' class='form-control' onkeypress='return numericVal(event)' >");
        $("#FieldDiv8").append("<span id='pregppid1'></span>");
        $("#FieldGroup5").append("<label class='col-sm-2 control-label'>Share<span class='require'>*</span>   :</label>");
        $("#FieldGroup5").append("<div id='FieldDiv9' class='col-sm-4' />");
        $("#FieldDiv9").append("<input type='text' id='share' class='form-control' onkeypress='return numericVal(event)'  maxlength=3>");
        $("#FieldDiv9").append("<span id='pregppid2'></span>");
        //
        $("#FieldDiv8").append("<span id='ageError'></span>");
        $("#FieldDiv9").append("<span id='shareError'></span><br>");
        $("#panelMainBody").append("<div id='panelRow6' class='row' />");
        $("#panelRow6").append("<div id='FieldGroup6' class='form-group' />");
        $("#FieldGroup6").append("<label class='col-sm-2 control-label'>Is Minor  :</label>");
        $("#FieldGroup6").append("<div id='FieldDiv10' class='col-sm-4' />");
        $("#FieldDiv10").append("<input type='checkbox' id='isminor' style='pointer-events: none'/>");
        $('#isminor').attr('readonly', true);
        $("#FieldGroup6").append("<label class='col-sm-2 control-label'>Other Details  :</label>");
        $("#FieldGroup6").append("<div id='FieldDiv11' class='col-sm-4' />");
        $("#FieldDiv11").append("<input type='text' id='othdetails' class='form-control' size=50 maxlength=50>");
        $("#FieldDiv10").append("<span id='isminorError'></span>");
        $("#FieldDiv11").append("<span id='othdetailsError'></span><br>");
        $("#panelMainBody").append("<div id='panelRow7' class='row' />");
        $("#panelRow7").append("<div id='FieldGroup7' class='form-group' />");
        $("#FieldGroup7").append("<label class='col-sm-2 control-label'>Nominee Type  :</label>");
        $("#FieldGroup7").append("<div id='FieldDiv12' class='col-sm-4' />");
        $("#FieldGroup7").append("<label class='col-sm-2 control-label'>Is Primary  :</label>");
        $("#FieldGroup7").append("<div id='FieldDiv13' class='col-sm-4' />");
        $("#FieldDiv13").append("<input type='checkbox' id='isprimary'  />");
        $("#panelMainBody").append("<div id='panelRow8' class='row' />");
        $("#panelRow8").append('<center><button id="disciplineButtonSave" type="submit" onclick="nomineeValidation()" class="btn btn-success mr5">Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetempnominee()">Reset</button></center>');

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        
        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });




        $("#tableHeader").append("<div id='nomineeListTableRow'  />");
        $("#nomineeListTableRow").text("").append("<div id='nomineeListPanel' class='panel panel-blue' />");
        $("#nomineeListPanel").append("<div id='nomineeListPanelHeading' class='panel-heading' />");
        $("#nomineeListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>List of Nominee(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colEmployeeNomineeList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");

        $("#nomineeListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");

        $("#colEmployeeNomineeList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colEmployeeNomineeList span").hasClass("glyphicon-minus-sign")) {
                $("#colEmployeeNomineeList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colEmployeeNomineeList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });

        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
        $("#listpanelMainBody").append("<div id='pregsuccessBeforelist'></div>");
        getNatureType();
        addRelations();

        viewNomineeList('listpanelMainBody');
    }

    function getEmployeeDataForNominee() {

        var ddo = $("#ddo").val();
        var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
        if (currentFinancialYear != null || currentFinancialYear != "" || currentFinancialYear != undefined)
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
        }).done(function (data) {
            data = JSON.parse(data);
            if (data == fail || data == "" || data == undefined) {
                $("#empcode").text("").append("<option  value='' selected disabled>---No data available ----</option>");
            } else if (data != null) {
                $("#empcode").text("").append("<option  value='' selected disabled>----[Employee Code]-Employee Name ----</option>");
                for (var i = 0; i < data.length; i++)
                {
                    $("#empcode").append("<option  value='" + data[i].employeeCode + "'>[" + data[i].employeeCode + "]-" + data[i].employeeName + "</option>");
                }
            }

        });
    }



    if (checkUserPrivelege(pvViewEmployeeDetails)) {
        $("#tableHeader").append("<div id='nomineeDetailsListTableRow'  />");
        $("#nomineeDetailsListTableRow").append("<div id='nomineeDetailsListPanel' class='panel panel-blue' />");
        $("#nomineeDetailsListPanel").append("<div id='nomineeDetailsListPanelHeading' class='panel-heading' />");
        $("#nomineeDetailsListPanelHeading").append("<h4 id='firstHeader2' class='panel-title' />");
        $("#firstHeader2").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' ><center>List of Employee(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colEmployeeList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#nomineeDetailsListPanel").append("<div id='collapseOne4' class='panel-collapse collapse in' />");
        $("#colEmployeeList").click(function () {
            $("#collapseOne4").toggle();
            if ($("#colEmployeeList span").hasClass("glyphicon-minus-sign")) {
                $("#colEmployeeList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colEmployeeList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });





        $("#collapseOne4").append("<div id='detailslistpanelMainBody' class = 'panel-body' />");
        viewNomineeDetailsList('detailslistpanelMainBody');
    }
}

$(document).on('change', '#empcode', function () {
    getEmpDemodetails();
});
$(document).on('change', '#age', function () {

    var age = $("#age").val();
    if (age > 0 && age < 18) {
        $('#isminor').prop('checked', true);
    } else {
        $('#isminor').prop('checked', false);
    }
});
function getNatureType() {

    $.get(server_base_url + "/hrms/master/ManageNomineeDetails/GetNomineeType", {
    }).done(function (pdata) {
        
        $("#FieldDiv12").append("<div id='natureTypeCheckBoxDiv' class='row' />");
        for (var i = 0; i < pdata.length; i++) {
            var nomineetype = "nomineeType" + i;
            $("#natureTypeCheckBoxDiv").append("<div class='col-xs-4'><input type='checkbox' id='" + nomineetype + "' name='nomType'class='nomineeTypes' value='" + pdata[i].shortDescription + "'> " + pdata[i].shortDescription + "</div>");
        }
    });
}

function nomineeValidation()
{

    var ecode = $("#share").val();
    var name = $("#nominee").val();
    var age = $("#age").val();
    var share = $("#share").val();
    var relation = $("#nomineerelation").val();
    if (ddo == "" || ddo == null) {
        $("#ddoId").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("ddoError", "Please Select DDO.");
    }
    if (ecode == "" || ecode == null) {
        $("#ddoId").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("empcodeError", "Please Enter Emp code.");
    }
    if (relation == "" || relation == null) {
        $("#ddoId").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("relationError", "Please Select Relation.");
    }
    if (name == "") {
        $("#nominee").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid", "Please enter Nominee name.");
    }
    if (share == "") {
        $("#share").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid2", "Please enter Share.");
    } else if (share != "") {
        if (!share.match((numbervalidation()))) {
            addSomeClass("fnameFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("pregppid2", "Please enter valid Share.");
        }
    }

    if (age == "") {
        $("#age").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid1", "Please enter age.");
    } else if (age != "") {
        if (!age.match((numbervalidation())) || age > 100) {
            addSomeClass("fnameFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("pregppid1", "Please enter valid age.");
        } else
        {
            $("#pregppid2").text("");
            $("#pregppid").text("");
            $("#pregppid1").text("");
            $("#empcodeError").text("");
            $("#ddoError").text("");
            $("#relationError").text("");
            addNomineedata();
            $("#nominee").val("");
            $("#age").val("");
            $("#share").val("");
            $("#nomineerelation").val("");
            $("#othdetails").val("");
            $('#isprimary').prop('checked', false);
            $('#isminor').prop('checked', false);
            $('.nomineeTypes').prop('checked', false);
        }
    }

}
function addNomineedata()
{
    var nomineename = $("#nominee").val();
    var relationship = $("#nomineerelation  option:selected").text();
    var relationid = $("#nomineerelation  option:selected").val();

    var age = $("#age").val();
    var share = $("#share").val();
    var isminor;
    if ($('#isminor').prop('checked')) {
        isminor = "YES";
    } else
    {
        isminor = "NO";
    }
    var otherdetails = $("#othdetails").val();
    if ($('#nominetype').prop('checked')) {
        var nominetype = $("#nominetype").val();
    }


    var favorite = [];
    $.each($("input[name='nomType']:checked"), function () {
        favorite.push($(this).val());
    });
    var primary;
    if ($('#isprimary').prop('checked')) {
        primary = "YES";
        $("#isprimary").prop('disable', true);
    } else
    {
        primary = "NO";
    }

    $("#displayNomineeTableBody1").append("<tr style='cursor:pointer;' >"
            + "<td style='cursor:pointer;'>" + nomineename + "</td>"
            + "<td style='cursor:pointer;'><input type='hidden' value='" + relationid + "'/>" + relationship + "</td>"
            + "<td style='cursor:pointer;'>" + age + "</td>"
            + "<td style='cursor:pointer;'>" + share + "</td>"
            + "<td style='cursor:pointer;'>" + isminor + "</td>"
            + "<td style='cursor:pointer;'>" + otherdetails + "</td>"
            + "<td style='cursor:pointer;'>" + favorite + "</td>"
            + "<td style='cursor:pointer;'>" + primary + "</td>"
            + "<td> <a href='javascript:void(0);' onclick=editAdd1IndivisualNominee(this.parentNode.parentNode.rowIndex) class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
            + "<td> <a href='javascript:void(0);' onclick=deleteIndivisualNominee(this.parentNode.parentNode.rowIndex) class='anchor_delete'><i class='fa fa-trash-o'></i>Delete</a></td></tr>");


    $("#listpanelRow").append("<div id='NomineeButs'/>");
    $("#NomineeButs").append("<div id='panelRow9' class='row' />");
    $("#panelRow9").text("").append('<center><button id="disciplineButtonSave" type="submit" onclick="saveNomineeDetails()" class="btn btn-success mr5">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetNomineList()">Reset</button></center>');

}

function editAdd1IndivisualNominee(i) {
    $('table#displayNomineeTable tbody tr').each(function () {
        if ($(this).find("tr:eq(" + i + ")")) {
            var j = i - 1;

            $("#nominee").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(0)').text());
            $("#nomineerelation").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(1)').text());
            $("#age").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(2)').text());
            $("#share").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(3)').text());
            $("#isminor").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(4)').text());
            $("#othdetails").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(5)').text());
            $("#nomtypegpf").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(6)').text());
            $("#isprimary").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(7)').text());

        }
    });
    var nomineerelation = $("#nomineerelation").val();

    $("#nomineerelation option:contains(" + nomineerelation + ")").attr('selected', 'selected');

    $('table#displayNomineeTable tbody tr').each(function () {
        if ($(this).find("tr:eq(" + i + ")")) {
            var j = i - 1;

            var relation = $("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(1)').text();
            $("#nomineerelation option:contains(" + relation + ")").attr('selected', 'selected');

        }
    });
    $('table#displayNomineeTable tbody tr').each(function () {
        if ($(this).find("tr:eq(" + i + ")")) {
            var j = i - 1;

            var favorite = [];
            favorite.push($('.nomineeType').text());
            var nomineeType = [];
            nomineeType.push($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(6)').text());
            for (var i = 0; i < nomineeType.length; i++) {
                for (var k = 0; k < favorite.length; k++) {
                    if (nomineeType[i] == favorite[k]) {
                        var nomineeType = "nomineeType" + i;
                        $('#nomineeType').val(nomineeType[i]).not(this).prop('checked', false);
                    }
                }
            }
        }
    });
    var isprimary = $("#isprimary").val();
    if (isprimary == "YES") {
        $('#isprimary').not(this).prop('checked', true);
    }
    var isnominee = $("#isnominee").val();
    if (isnominee == "YES") {
        $('#isnominee').not(this).prop('checked', true);
    }

    var isminor = $("#isminor").val();
    if (isminor == "YES") {
        $('#isminor').not(this).prop('checked', true);
    }


    document.getElementById('displayNomineeTableBody1').deleteRow(i - 1);
}

function editUpdateIndivisualNominee(i) {




    $('table#displayNomineeTable tbody tr').each(function () {
        if ($(this).find("tr:eq(" + i + ")")) {
            var j = i - 1;
            $("#nominee").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(0)').text());
            $("#nomineerelation").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(1)').text());
            $("#age").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(2)').text());
            $("#share").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(3)').text());
            $("#isminor").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(4)').text());
            $("#othdetails").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(5)').text());
            $("#nomtypegpf").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(6)').text());
            $("#isprimary").val($("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(7)').text());
        }
    });


    $('table#displayNomineeTable tbody tr').each(function () {
        if ($(this).find("tr:eq(" + i + ")")) {
            var j = i - 1;

            var relation = $("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(1)').text();
            $("#nomineerelation option:contains(" + relation + ")").attr('selected', 'selected');

        }
    });
    var isprimary = $("#isprimary").val();
    if (isprimary == "YES") {
        $('#isprimary').not(this).prop('checked', true);
    }
    var isnominee = $("#isnominee").val();
    if (isnominee == "YES") {
        $('#isnominee').not(this).prop('checked', true);
    }
    var isminor = $("#isminor").val();
    if (isminor == "YES") {
        $('#isminor').not(this).prop('checked', true);
    }
    var nomineerelation = $("#nomineerelation").val();

    $("#nomineerelation option:contains(" + nomineerelation + ")").attr('selected', 'selected');

    var nomineeTypeAll = [];
    $.get(server_base_url + "/hrms/master/ManageNomineeDetails/GetNomineeType", {
    }).done(function (pdata) {
        for (var i = 0; i < pdata.length; i++) {
            var nType = pdata[i].shortDescription;
            nomineeTypeAll.push(nType);
        }
        $('table#displayNomineeTable tbody tr').each(function () {
            if ($(this).find("tr:eq(" + i + ")")) {
                var j = i - 1;
                var check = $("table#displayNomineeTable tbody tr:eq(" + j + ")").find('td:eq(6)').text();
                var nomineeType = check.split(",");
                for (var m = 0; m < nomineeType.length; i++) {
                    for (var k = 0; k < nomineeTypeAll.length; k++) {
                        if (nomineeType[m] == nomineeTypeAll[k]) {
                            var nomineeType = "nomineeType" + m;
                            $("#" + nomineeType).val(nomineeType[m]).prop("checked", true);
                        }
                    }
                }

            }
        });
    });



    document.getElementById('displayNomineeTableBody').deleteRow(i - 1);
}




function saveNomineeDetails()
{
    if (checkUserPrivelege(pvCreateEmployeeDetails)) {
        var employeeCode = $("#empcode").val();
        var employeeName = $("#empname").val();
        var ddo = $("#ddo").val();
        var designation = $("#designation").val();
        var department = $("#dept").val();
        var remarks = $("#remarks").val();
        if (employeeCode == "") {
            displaySmallErrorMessagesInRed("empcodeError", "Please Enter Employee Code");
            return false;
        }
        var rows = [];
        $('#displayNomineeTableBody1 tr').each(function () {
            var nomineetype = [];
            nomineetype.push($(this).find('td:eq(6)').text());
            rows.push({
                name: $(this).find('td:eq(0)').text(),
                relationShip: $(this).find('td:eq(1)').find('input').val(),
                nomineeAge: $(this).find('td:eq(2)').text(),
                nomineeShare: $(this).find('td:eq(3)').text(),
                isMinor: $(this).find('td:eq(4)').text(),
                otherDetails: $(this).find('td:eq(5)').text(),
                nomineePrimary: $(this).find('td:eq(7)').text(),
                nomineeType: nomineetype
            });
        });
        var nomineeJson = {
            employeeCode: employeeCode,
            employeeName: employeeName,
            ddo: ddo,
            designation: designation,
            department: department,
            remarks: remarks
        };
        if (rows.length > 0) {
            nomineeJson["nomineeList"] = rows;
            nomineeJson = JSON.stringify(nomineeJson);
            $.post(server_base_url + "hrms/common/EmployeeNominee/Save", {
                nomineeJson: nomineeJson,
                empcode: employeeCode,
                userid: getUserSessionElement("userId")
            }).done(function (data) {

                if (data == fail) {
                    displayErrorMessages("pregsuccessBefore", "" + failMessage + "");
                    displayErrorMessages("pregsuccessAfter", "" + failMessage + "");
                } else if (data == unauthorized || data.statuscode == unauthorized) {
                    displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
                    displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
                } else if (data == invalidSession) {
                    callSessionTimeout();
                } else if (data == statusException) {
                    displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "");
                    displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
                } else if (data == "duplicateEmpCode") {
                    displayErrorMessages("pregsuccessBefore", "" + duplicateEmpCode + "");
                    setTimeout(function () {
                        $("#displayNomineeTableBody tr").remove();
                        addEmployeeNominee();
                    }, 500);
                } else if (data == "duplicatePrimaries") {
                    displayErrorMessages("pregsuccessBefore", "" + duplicatePrimaries + "");
                    setTimeout(function () {
                        $("#displayNomineeTableBody tr").remove();
                        addEmployeeNominee();
                    }, 1000);
                } else if (data == "duplicateNominees") {
                    displayErrorMessages("pregsuccessBefore", "" + duplicateNominees + "");
                    setTimeout(function () {
                        $("#displayNomineeTableBody tr").remove();
                        addEmployeeNominee();
                    }, 1000);
                } else {
                    displaySuccessMessages("pregsuccessBefore", successMessage, "");
                    setTimeout(function () {
                        $("#displayNomineeTableBody tr").remove();
                        addEmployeeNominee();
                    }, 4000);
                }
            });
        }
    }
}

function viewNomineeDetailsList(divId) {
    if (checkUserPrivelege(pvViewEmployeeDetails)) {
        $("#" + divId).append("<div class='tab-pane' id='viewNomineeDetailsHead'/>");
        $("#viewNomineeDetailsHead").append("<div class='table-responsive' id='viewNomineeDetailsHeadSectionTableDiv' />");
        $("#viewNomineeDetailsHeadSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayNomineeDetailsHeadTable' />");
        $("#displayNomineeDetailsHeadTable").append("<thead class=''><tr id='displayNomineeDetailsHeadTableHeadRow'>"
                + " <th class='sno_width'> S.No</th>"
                + "<th class='table_col_width'><i class='fa'></i>Employee Code</th>"
                + "<th class='table_col_width'><i class='fa'></i>Employee Name</th>"
                + "<th class='table_col_width'><i class='fa'></i>Department</th>"
                + "<th class='table_col_width'><i class='fa'></i>Designation</th>");
        if (checkUserPrivelege(pvUpdateEmployeeDetails)) {
            $("#displayNomineeDetailsHeadTableHeadRow").append("<th class='table_anchor_width'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteEmployeeDetails)) {
            $("#displayNomineeDetailsHeadTableHeadRow").append("<th class='table_anchor_width'><i class='fa'></i>Delete</th>");
        }
        $("#displayNomineeDetailsHeadTable").append("</tr></thead>");
        $.get(server_base_url + "/hrms/master/EmployeeNomineeDetails/List", {
            ddo: getUserSessionElement(seDDOId)
        }).done(function (bdata) {

            if (bdata == fail) {
                displayLargeErrorMessagesInCenterInRed("NomineeDetailsHeadlistMessageDiv", emptyListMessage + "<br/><br/>");
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("NomineeDetailsHeadlistMessageDiv", unauthorizedMessage + "<br/><br/>");
            } else if (bdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("NomineeDetailsHeadlistMessageDiv", statusExceptionMessage + "<br/><br/>");
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            }
            if (bdata != null) {
                if (bdata.length > 0) {
                    var sno = 0;
                    $("#displayNomineeDetailsHeadTable").append("<tbody id='displayNomineeDetailsHeadTableBody' class='table-striped table-bordered' />");
                    for (var i = bdata.length - 1; i >= 0; i--) {
                        sno++;
                        var objJson = {
                            aid: bdata[i]._id.$oid,
                            employeeCode: bdata[i].employeeCode,
                            ddo: bdata[i].ddo,
                            designation: bdata[i].designation,
                            department: bdata[i].department,
                            employeeName: bdata[i].employeeName,
                            remarks: bdata[i].remarks,
                            nomineeList: bdata[i].nomineeList

                        };
                        objJson = JSON.stringify(objJson);
                        $("#displayNomineeDetailsHeadTableBody").append("<tr id='" + bdata[i]._id.$oid + "' class='table_row' >"
                                + "<td>" + sno + "</td>"
                                + "<td class='table_row'>" + bdata[i].employeeCode + "</td>"
                                + "<td class='table_row'>" + bdata[i].employeeName + "</td>"
                                + "<td class='table_row'>" + bdata[i].department + "</td>"
                                + "<td class='table_row'>" + bdata[i].designation + "</td>");
                        if (checkUserPrivelege(pvUpdateEmployeeDetails)) {
                            $("#" + bdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=editTableData('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>");
                        }
                        if (checkUserPrivelege(pvDeleteEmployeeDetails)) {
                            $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteNomineeDetailsData','addEmployeeNominee','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;&nbsp;<a  class="anchor_delete"  style="align:center;" >Delete</a>' + "</td>");
                        }
                        $("#" + bdata[i]._id.$oid).append("</tr>");
                    }
                    $('#displayNomineeDetailsHeadTable').append("</table>");
                }
            }
        });
    }
}
function deleteNomineeDetailsData(id) {
    if (checkUserPrivelege(pvDeleteEmployeeDetails)) {
        $.post(server_base_url + "/hrms/master/ManageEmployeeNomineeDetails/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage);
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                displaySuccessMessages("pregsuccessBefore", deleteSuccessMessage, "");
                setTimeout(function () {
                    addEmployeeNominee();
                }, 3000);
            }
        });
    }
}


function getDDOforempnominee() {
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (pdata) {
        for (var i = 0; i < pdata.length; i++) {
            $("#ddo").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
        }
    });
}
function loadEmpcodeSearchFunctionalityfornominee() {
    var ddo = $("#ddo").val();
    $.get(server_base_url + "hrms/EmployeeMaster/GetEmpcode", {
        ddo: ddo
    }).done(function (pdata) {

        var availablecodes = [];
        for (var i = 0; i < pdata.length; i++)
        {
            availablecodes.push(pdata[i].employeeCode);
        }
        $("#empcode").autocomplete({
            source: availablecodes
        });
    });
}
function addRelations()
{
    $.get(server_base_url + "hrms/common/Relation/View", {
    }).done(function (bdata) {

        if (bdata != null) {
            if (bdata.length > 0)
                for (var i = 0; i < bdata.length; i++) {
                    $("#nomineerelation").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].relation + "</option>");
                }
        }
    });
}

function resetempnominee()
{

    $('#ddoError').text("").val("");
    $('#nomineerelation').val("");
    $('#relationError').text("").val("");
    $('#nomineeError').text("").val("");
    $('#empcode').val("");
    $('#empname').val("");
    $('#dept').val("");
    $('#designation').val("");
    $('#remarks').val("");
    $('#nominee').val("");
    $('#age').val("");
    $('#ageError').text("").val("");
    $('#shareError').text("").val("");
    $('#othdetails').val("");
    $('#share').val("");
    $('#empcodeError').text("").val("");
    $('#pregppid').text("").val("");
    $('#pregppid1').text("").val("");
    $('#pregppid2').text("").val("");
    $("#empcodeError").text("");
    $("#ddoError").text("");
    $("#isminor").prop('checked', false);
    $("#nomtypegpf").prop('checked', false);
    $("#nomtypegis").prop('checked', false);
    $("#isprimary").prop('checked', false);
    $(".nomineeType").prop('checked', false);
}

function viewNomineeList(divId)
{
    $("#" + divId).text("").append("<div id='ErrorDiv'/>");
    $("#" + divId).text("").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#DatatablemainDiv").text("").append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayNomineeTable' />");
    $("#displayNomineeTable").append("<thead class=''><tr>"

            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Nominee Name</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Relationship</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Age</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Share</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Is Minor</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Other Details</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Nominee Type</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Primary</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>"
            + "</tr></thead>");
    $("#displayNomineeTable").append("<tbody id='displayNomineeTableBody1' class='table-striped table-bordered' />");
}

function deleteRow(i) {
    document.getElementById('displayNomineeTableBody').deleteRow(i);
}

function clearData()
{
    $("#nominee").val("");
    $("#nomineerelation").val("");
    $("#age").val("");
    $("#share").val("");
    $('#isminor').prop('checked', false);
    $('#nomtypegpf').prop('checked', false);
    $('#nomtypegis').prop('checked', false);
    $('#isprimary').prop('checked', false);
    $("#othdetails").val("");
}

function resetNomineList()
{
    viewNomineeList('listpanelRow');
}

function getEmpDetails()
{
    var ecode = $("#empcode").val();
    $.get(server_base_url + "/hrms/EmployeeMaster/getEmpDetailsUsingEmpcode", {
        ecode: ecode
    }).done(function (pdata) {

        if (pdata == null || pdata == "" || pdata == 500)
        {
            displayLargeErrorMessages("pregsuccessBefore", "" + NoDataFoundMessage + "<br /><br />");
        } else {
            $("#pregsuccessBefore").text("");
            $("#empname").val(pdata[0].employeeName);
            $("#dept").val(pdata[0].department);
            $("#designation").val(pdata[0].designation);
            $("#remarks").val(pdata[0].remarks);
        }
    });
}

function editTableData(obj) {


    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#ddo").val(obj.ddo);
    $("#empcode").val(obj.employeeCode);
    $("#empname").val(obj.employeeName);
    $("#dept").val(obj.department);
    $("#designation").val(obj.designation);
    $("#remarks").val(obj.remarks);
    $("#panelRow8").text("").append('<center><button id="disciplineButtonSave" type="submit" onclick="nomineeUpdateValidation()" class="btn btn-success mr5">Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetempnominee()">Reset</button></center>');
    $("#listpanelMainBody").text("").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
    $("#DatatablemainDiv").text("").append("<div class='table-responsive' id='viewDataTableDiv' />");
    $("#viewDataTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displayNomineeTable' />");
    $("#displayNomineeTable").append("<thead class=''><tr>"

            + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i>Nominee Name</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Relationship</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Age</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Share</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Is Minor</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Other Details</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Nominee Type</th>"
            + "<th style='min-width:10%;width:auto;'><i class='fa'></i>Primary</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i>Edit</th>"
            + "<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>"
            + "</tr></thead>");
    $("#displayNomineeTable").append("<tbody id='displayNomineeTableBody' class='table-striped table-bordered' />");
    var empCode = obj.employeeCode;
    $.get(server_base_url + "/hrms/masters/EmployeeNomineeDetails/GetNomineeList", {
        employeeCode: empCode
    }).done(function (bdata) {
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                var length = bdata.length;
                for (var i = 0; i < bdata.length; i++) {
                    sno++;
                    var objJson = {
                        name: bdata[i].name,
                        relationShip: bdata[i].relationShip,
                        nomineeAge: bdata[i].nomineeAge,
                        nomineeShare: bdata[i].nomineeShare,
                        isMinor: bdata[i].isMinor,
                        nomineeType: bdata[i].nomineeType,
                        nomineePrimary: bdata[i].nomineePrimary,
                        otherDetails: bdata[i].otherDetails
                    };
                    objJson = JSON.stringify(objJson);
                    $("#displayNomineeTableBody").append("<tr>"

                            + "<td class='table_row'>" + bdata[i].name + "</td>"
                            + "<td class='table_row'>" + bdata[i].relationShip + "</td>"
                            + "<td class='table_row'>" + bdata[i].nomineeAge + "</td>"
                            + "<td class='table_row'>" + bdata[i].nomineeShare + "</td>"
                            + "<td class='table_row'>" + bdata[i].isMinor + "</td>"
                            + "<td class='table_row'>" + bdata[i].otherDetails + "</td>"
                            + "<td class='table_row'>" + bdata[i].nomineeType + "</td>"
                            + "<td class='table_row'>" + bdata[i].nomineePrimary + "</td>"
                            + "<td> <a href='javascript:void(0);' onclick=editUpdateIndivisualNominee(this.parentNode.parentNode.rowIndex) class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                            + "<td> <a href='javascript:void(0);' onclick=deleteupdateIndivisualNominee(this.parentNode.parentNode.rowIndex) class='anchor_delete'><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                }
                $("#listpanelRow").append("<div id='NomineeButs'/>");
                $("#NomineeButs").text("").append("<center><button id='updateButton' onclick=updateNomineedetailsssss('" + obj.aid + "') class='btn btn-success mr5'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='addEmployeeNominee()' id='ddoUpdateReset' class='btn btn-warning mr5'>Back</button></center>");
            }

        }
    });
}

function deleteIndivisualNominee(i) {
    document.getElementById('displayNomineeTableBody1').deleteRow(i - 1);
}

function deleteupdateIndivisualNominee(i) {
    document.getElementById('displayNomineeTableBody').deleteRow(i - 1);
}

function updateNomineedetailsssss(id) {

    if (checkUserPrivelege(pvUpdateEmployeeDetails)) {
        var length = $('#displayNomineeTableBody tr').length;
        if (length > 0) {
            var employeeCode = $("#empcode").val();
            var employeeName = $("#empname").val();
            var ddo = $("#ddo").val();
            var designation = $("#designation").val();
            var department = $("#dept").val();
            var remarks = $("#remarks").val();
            var urows = [];
            $('#displayNomineeTableBody tr').each(function () {
                var nomineetype = [];
                nomineetype.push($(this).find('td:eq(6)').text());
                urows.push({
                    name: $(this).find('td:eq(0)').text(),
                    relationShip: $(this).find('td:eq(1)').text(),
                    nomineeAge: $(this).find('td:eq(2)').text(),
                    nomineeShare: $(this).find('td:eq(3)').text(),
                    isMinor: $(this).find('td:eq(4)').text(),
                    otherDetails: $(this).find('td:eq(5)').text(),
                    nomineeType: nomineetype,
                    nomineePrimary: $(this).find('td:eq(7)').text()
                });
            });
            // }
            var nomineeJson = {
                employeeCode: employeeCode,
                employeeName: employeeName,
                ddo: ddo,
                designation: designation,
                department: department,
                remarks: remarks
            };
            nomineeJson["nomineeList"] = urows;
            nomineeJson = JSON.stringify(nomineeJson);
            $.post(server_base_url + "/hrms/master/ManageEmployeeNomineeDetails/Update", {
                nomineeJson: nomineeJson,
                id: id,
                userid: getUserSessionElement("userId")
            }).done(function (data) {

                if (data == fail) {
                    displayErrorMessages("pregsuccessBefore", "" + failMessage + "<br");
                    displayErrorMessages("pregsuccessAfter", "" + failMessage + "");
                } else if (data == unauthorized || data.statuscode == unauthorized) {
                    displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
                    displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
                } else if (data == invalidSession) {
                    callSessionTimeout();
                } else if (data == statusException) {
                    displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "");
                    displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
                } else if (data == "duplicateEmpCode") {
                    displayErrorMessages("pregsuccessBefore", "" + duplicateEmpCode + "");
                    setTimeout(function () {
                        $("#displayNomineeTableBody tr").remove();
                        addEmployeeNominee();
                    }, 500);
                } else if (data == "duplicatePrimaries") {
                    displayErrorMessages("pregsuccessBefore", "" + duplicatePrimaries + "");
                    setTimeout(function () {
                        $("#displayNomineeTableBody tr").remove();
                        addEmployeeNominee();
                    }, 1000);
                } else if (data == "duplicateNominees") {
                    displayErrorMessages("pregsuccessBefore", "" + duplicateNominees + "");
                    setTimeout(function () {
                        $("#displayNomineeTableBody tr").remove();
                        addEmployeeNominee();
                    }, 1000);
                } else {
                    displaySuccessMessages("pregsuccessBefore", successMessage, "");
                    setTimeout(function () {
                        addEmployeeNominee();
                    }, 4000);
                }
            });
        } else {

        }
    }
}

function nomineeUpdateValidation(id) {
    var ddo = $("#share").val();
    var ecode = $("#share").val();
    var name = $("#nominee").val();
    var age = $("#age").val();
    var share = $("#share").val();
    var relation = $("#nomineerelation").val();
    if (ddo == "" || ddo == null) {
        $("#ddoId").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("ddoError", "Please Select DDO.");
    }
    if (ecode == "" || ecode == null) {
        $("#ddoId").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("empcodeError", "Please Enter Emp code.");
    }
    if (relation == "" || relation == null) {
        $("#ddoId").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("relationError", "Please Select Relation.");
    }
    if (name == "") {
        $("#nominee").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid", "Please enter Nominee name.");
    }
    if (share == "") {
        $("#share").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid2", "Please enter Share.");
    } else if (share != "") {
        if (!share.match((numbervalidation()))) {
            addSomeClass("fnameFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("pregppid2", "Please enter valid Share.");
        }
    }
    if (age == "") {
        $("#age").focus();
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregppid1", "Please enter age.");
    } else if (age != "") {
        if (!age.match((numbervalidation())) || age > 100) {
            addSomeClass("fnameFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("pregppid1", "Please enter valid age.");
        } else
        {
            $("#pregppid2").text("");
            $("#pregppid").text("");
            $("#pregppid1").text("");
            $("#empcodeError").text("");
            $("#ddoError").text("");
            $("#relationError").text("");
            updateNomineedata();
            $("#nominee").val("");
            $("#age").val("");
            $("#share").val("");
            $("#nomineerelation").val("");
            $("#othdetails").val("")
            $('#isprimary').prop('checked', false);
            $('#isprimary').prop('checked', false);
            $('.nomineeType').prop('checked', false);
        }
    }

}
function updateNomineedata() {
    var nomineename = $("#nominee").val();
    var relationship = $("#nomineerelation").val();
    var age = $("#age").val();
    var share = $("#share").val();
    var relationship = $("#nomineerelation  option:selected").text();
    var relationid = $("#nomineerelation  option:selected").val();
    var favorite = [];
    $.each($("input[name='nomType']:checked"), function () {
        favorite.push($(this).val());
    });
    var isminor
    if ($('#isminor').prop('checked')) {
        isminor = "YES";
    } else
    {
        isminor = "NO";
    }
    var otherdetails = $("#othdetails").val();
    if ($('#nominetype').prop('checked')) {
        var nominetype = $("#nominetype").val();
    }
    var primary
    if ($('#isprimary').prop('checked')) {
        primary = "YES";
    } else
    {
        primary = "NO";
    }
//

    $("#displayNomineeTableBody").append("<tr style='cursor:pointer;' >"
            + "<td style='cursor:pointer;'>" + nomineename + "</td>"
            + "<td style='cursor:pointer;'>" + relationship + "</td>"

            + "<td style='cursor:pointer;'>" + age + "</td>"
            + "<td style='cursor:pointer;'>" + share + "</td>"
            + "<td style='cursor:pointer;'>" + isminor + "</td>"
            + "<td style='cursor:pointer;'>" + otherdetails + "</td>"
            + "<td style='cursor:pointer;'>" + favorite + "</td>"
            + "<td style='cursor:pointer;'>" + primary + "</td>"
            + "<td style='cursor:pointer;' onclick=editUpdateIndivisualNominee(this.parentNode.parentNode.rowIndex)>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_edit">Edit</a>' + "</td>"
            + "<td style='cursor:pointer;' onclick=deleteupdateIndivisualNominee(this.parentNode.parentNode.rowIndex)>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");
    +"<td style='hidden'>" + relationid + "</td>"


}
