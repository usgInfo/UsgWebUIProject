/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayManagePensionArrearAdjustment() {
    createPensionArrearAdjustmentForm();
}
function createPensionArrearAdjustmentForm() {
    $("#dashboardTitleMainDiv").text("").append("Pension");

    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionTransactions()">Pension Transaction>></a></label><a href="javascript:displayManagePensionArrearAdjustment()"><label>Manage Pension Arrear Adjustment</label>');

    $("#dashboardBodyMainDiv").text("").append("<div id='processpensionarearadjMainDiv' class='row' />");
    $("#processpensionarearadjMainDiv").text("").append("<div id='processpensionarearadjcolumnDiv' class='col-lg-12'  style='width:100%;' >");
    $("#processpensionarearadjcolumnDiv").append("<div id='processpensionarearadjpanelDiv' class='panel panel-blue'>");
    $("#processpensionarearadjpanelDiv").append("<div id='processpensionarearadjpanelHeadingDiv' class='panel-heading'>");
    $("#processpensionarearadjpanelHeadingDiv").append("<h4 id='processpensionarearadjHeader' class='panel-title' />");
    $("#processpensionarearadjHeader").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Manage Pension Arrear Adjustment</center>");
    $("#processpensionarearadjpanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='processpensionarearadjpanelBodyDiv' class='panel-body pan'>");

    $("#processpensionarearadjpanelBodyDiv").append("<div id='processpensionarearadjRowPanel' class='row'>");
    $("#processpensionarearadjRowPanel").append("<div id='pregsuccessBefore'/>");
    $("#processpensionarearadjRowPanel").append("<div id='FieldGroup' class='form-group' />");

    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Employee Code", "", "empcode", "Enter Employee Code"));
    $("#Row1Col2").append(getLabel_InputWithSpan("Manual Employee Code", "", "mempcode", "Enter Employee Name"));


    getTwoColumnInRow("FieldGroup", "Row2", "Row1Co21", "Row1Co22");
    $("#Row1Co21").append(getLabel_InputWithSpan("Employee Name", "", "empname", "Enter Employee Name"));
    $("#Row1Co22").append(getLabel("Department", "") + "" + getDropDown("department"));

    getTwoColumnInRow("FieldGroup", "Row3", "Row1Co31", "Row1Co32");
    $("#Row1Co31").append(getLabel("Designation", "") + "" + getDropDown("designation"));
    $("#Row1Co32").append(getLabel("Sort By", "") + "" + getDropDown("sortby"));

    getTwoColumnInRow("FieldGroup", "Row3", "Row1Co31", "Row1Co32");
    $("#Row1Co31").append(getLabel("Pay Month", "required") + "" + getDropDown("paymonth"));
    $("#Row1Co32").append(getLabel("Pay Year", "required") + "" + getDropDown("payyear"));
     $("#FieldGroup").append("<div id='panelRow7' class='row' />");
    $("#panelRow7").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='fetchAllPensionProcessEmployee()'>View</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetPensionArear()' class='btn btn-warning mr5' name='reset' value='reset'>Reset</button></center></div>");
    $("#paymonth").append("<option value='0' selected>--Select Month--</option><option  value='1'>Janaury</option> <option value='2'>February</option> <option value='3'>March</option> <option value='4'>April</option> <option value='5'>May</option> <option value='6'>June</option> <option value='7'>July</option> <option value='8'>August</option> <option value='9'>September</option> <option value='10'>October</option> <option value='11'>November</option> <option value='12'>December</option>");
    payyear("");
    fetchallPensionProcessArearDepartmentAdj("");
    fetchallPensionProcessArearDesignationAdj();
}

function fetchallPensionProcessArearDesignationAdj(name) {
    $("#designation").append("<option value = '0' selected disabled> ----Select Designation----</option>");
    $.post(server_base_url + "/hrms/salary/Designation/ViewList", {
    }).done(function (data) {
        for (var i = 0; i < data.length; i++) {
            var designation = data[i].designation;
            if (designation != '' || designation != null || designation != 0 || designation != undefined) {
                if (name == data[i].designation) {
                    $("#designation").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].designation + "</option>");

                } else {
                    $("#designation").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].designation + "</option>");
                }
            }
        }

    });
}


function fetchallPensionProcessArearDepartmentAdj(name) {
    $("#department").append("<option value = '0' selected> ----Select Department----</option>");
    $.post(server_base_url + "hrms/salary/Department/ViewList", {
    }).done(function (data) {
        if (data == fail) {
        } else {
            for (var i = 0; i < data.length; i++) {
                var department = data[i].department;
                if (department != '' || department != null || department != 0 || department != undefined) {
                    if (name == data[i].department) {
                        $("#department").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].department + "</option>");

                    } else {
                        $("#department").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].department + "</option>");
                    }
                }
            }
        }
    });
}


function payyear(name) {
    $('#payyear').text("").append("<option value='0' class='form-control'  selected disabled >-----------select year---------</option>");
    for (i = new Date().getFullYear(); i > 1900; i--)
    {
        if (name == i) {
            $('#payyear').append($('<option selected/>').val(i).html(i));
        } else {
            $('#payyear').append($('<option />').val(i).html(i));
        }
    }


}