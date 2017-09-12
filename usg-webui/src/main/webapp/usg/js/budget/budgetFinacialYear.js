/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayBudgetFinacialYear(screenId) {
    // alert(screenId);

    if (screenId == "HRMS")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> ');
        $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >> <label>Financial Year</label>');
    } else if (screenId == "FINANCE")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayFinanceHorizontalBar()">Financial Management</a></label> ');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=financeFinancialYearMaster("dashboardBodyMainDiv")>Financial Year</a>');

    } else if (screenId == "BUDGET")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
        $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> >> <label><a href="javascript:budgetCommonMenuTabs()">Common Master</a></label> >> <label>Financial Year</label>');

    }
    $("#dashboardBodyMainDiv").text("").append('<div id="budgetFinancialYearMain"/>');

    $("#budgetFinancialYearMain").text("").append("<div id='yearMainDiv' class='page-content'  />");
//for panel group  
    $("#yearMainDiv").append('<input type="hidden" id="screenId">');
    $("#screenId").val(screenId);
    $("#yearMainDiv").append("<div id='financialYearFirstPanel' class='panel panel-blue' />");
    $("#financialYearFirstPanel").append("<div id='financialYearfirstPanelHeading' class='panel-heading' />");

    $("#financialYearfirstPanelHeading").append("<h4 id='financialYeartableHeader1' class='panel-title' />");
    $("#financialYeartableHeader1").append("<div class='panel-title' class='panel_font' data-parent='#accordion2'><center><strong>Financial Year Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFin'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#financialYearFirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");

    $("#collapseFin").click(function() {
        $("#collapseOne2").toggle();
        if ($("#collapseFin span").hasClass("glyphicon-minus-sign")) {
            $("#collapseFin").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#collapseFin").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });

    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    if (checkUserPrivelege(pvCreateFinancialYear)) {
        $("#panelMainBody").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#panelMainBody").append('<div class="form-body pal" id="form_body">');
        $("#form_body").append('<input type="hidden" id="idValue">');
        //first row
        $("#form_body").append('<div class="row" id="MessageDiv">');
        $("#form_body").append('<div class="row" id="form_row">');
        $("#form_row").append('<div class="col-md-6" id="form_col">');
        $("#form_col").append('<div class="form-group has-success" id="form_group">');
        $("#form_col").append('<label for="Year" class="control-label" id="control_label">Year<span class="require">*</span></label>');
        $("#form_col").append('<div class="form-group" id="yearGroup">');
        $("#yearGroup").append('<select id="selectYear" class="form-control"></select>');
        $("#yearGroup").append("<span id='yearErr'></span>");
        $("#selectYear").attr("onchange", "getdatesinBudgetFY()");

        $("#form_body").append('<div class="row" id="form_row_div">');
        $("#form_row_div").append('<div class="col-md-6" id="form_col_div">');
        $("#form_col_div").append('<div class="form-group has-success" id="form_group_div">');
        $("#form_col_div").append('<label for="inputFirstName" class="control-label">From Date<span class="require">*</span></label>');
        $("#form_col_div").append('<input id="finyearfromdate" type="text" placeholder="DD/MM/YYYY" class="form-control" readonly/>');
        $("#form_col_div").append("<span id='DateErr'></span>");


        $("#form_row_div").append('<div class="col-md-6" id="form_col_div1">');
        $("#form_col_div1").append('<div class="form-group has-success" id="form_group_div1">');
        $("#form_col_div1").append('<label for="inputFirstName" class="control-label">To Date<span class="require">*</span></label>');
        $("#form_col_div1").append('<input id="finyeartodate" type="text" placeholder="DD/MM/YYYY" class="form-control" readonly/>');
        $("#form_col_div1").append("<span id='toDateErr'></span>");

    }

    if (checkUserPrivelege(pvViewFinancialYear)) {
        $("#panelMainBody").append("<div id='yearBtnDiv' class='row' />");
        $("#yearBtnDiv").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button' value='Save' class='btn btn-success mr5 '  onclick='budgetfinancialYearValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetbudgetYear()' class='btn btn-warning mr5 ' name='reset' value='reset'>Reset</button></center></div>");
        $("#preg_ppid").focus();
        //list
        $("#yearMainDiv").append("<div id='yearListPanel' class='panel panel-blue' />");
        $("#yearListPanel").append("<div id='yearlistPanelHeading' class='panel-heading' />");
        $("#yearlistPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Financial Year(s)</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='collapseFinTable'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#yearListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");

        $("#collapseFinTable").click(function() {
            $("#collapseOne3").toggle();
            if ($("#collapseFinTable span").hasClass("glyphicon-minus-sign")) {
                $("#collapseFinTable").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#collapseFinTable").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });

        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body' />");
    }

    fetchallBudgetYear();
    viewBudgetFinancialYearList('listpanelMainBody');
}

function resetbudgetYear() {
    $("#selectYear").val("");
    $("#finyearfromdate").val("");
    $("#finyeartodate").val("");
    $("#yearErr").text("");
    $("#DateErr").text("");
    $("#toDateErr").text("");
    $("#pregsuccessBefore").text("");


}
function getdatesinBudgetFY() {

    var year = $("#selectYear").val();
    var fromyear = parseInt(year);
    var toyear = fromyear + 1;
    $("#finyearfromdate").val("01/04/" + fromyear);
    $("#finyeartodate").val("31/03/" + toyear);

}
function budgetfinancialYearValidation()
{
    var year = $("#selectYear").val();
    var fromDate = $("#finyearfromdate").val();
    var toDate = $("#finyeartodate").val();
    var cal = budgetdays_between(fromDate, toDate);
    if (year == null)
    {
        $("#selectYear").focus();
        addSomeClass("yearFieldDiv", "has-error");
        displaySmallErrorMessagesInRed("yearErr", "Please Select Year.");
    } else if (fromDate == "") {
        $("#MinorHeadRemarks").focus();
        $("#yearErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("DateErr", "Please select From Date.");

    } else if (toDate == "") {
        $("#MinorHeadRemarks").focus();
        $("#DateErr").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("toDateErr", "Please Select Date.");

    } else if (cal > 365) {
        $("#finyearfromdate").focus();
        $("#pregppid1").text("");
        addSomeClass("fnameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please give proper finacial year");
    } else {
        $("#toDateErr").text("");
        saveBudgetFinancialYear();
    }

}
function fetchallBudgetYear(name) {
    $('#selectYear').text("");
    var largest;
    $.get(server_base_url + "/budget/master/FinancialYear/View", {
    }).done(function(pdata) {

        if (pdata != null && pdata != 501)
        {
            largest = parseInt(pdata[0].year);
            for (var i = 1; i < pdata.length; i++)
            {
                if (parseInt(pdata[i].year) > largest)
                {
                    largest = parseInt(pdata[i].year);
                }
            }
            $('#selectYear').append("<option value='' class='form-control' selected disabled >----Select Year----</option>");
            for (var i = largest + 1; i > largest - 4; i--)
            {
                if (name == i)
                {
                    $('#selectYear').append("<option value='" + i + "' selected>" + i + "</option>");
                } else
                {
                    $('#selectYear').append("<option value='" + i + "'>" + i + "</option>");
                }
            }
        } else
        {
            $('#selectYear').append("<option value='' class='form-control' selected disabled >----Select Year----</option>");
            var i = new Date().getFullYear();
            $('#selectYear').append("<option value='" + i + "'>" + i + "</option>");
        }
    });
}
function viewBudgetFinancialYearList(divId)
{
    if (checkUserPrivelege(pvViewFinancialYear)) {
        $("#" + divId).text("").append("<div id='ErrorDiv'/>");
        $("#" + divId).append("<div id='listpanelRow' class='row' />");
        $("#listpanelRow").text("").append("<div class='tab-pane' id='DatatablemainDiv'/>");
        $("#DatatablemainDiv").append("<div class='table-responsive' id='viewDataTableDiv' />");
        $("#viewDataTableDiv").append("<table class='table table-bordered table-warning mb30' id='financialyeartable' />");
        $.get(server_base_url + "/budget/master/FinancialYear/View", {
        }).done(function(pdata) {
            if (pdata == fail) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", emptyListMessage + "");
            } else if (pdata == unauthorized || pdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", unauthorizedMessage + "");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", statusExceptionMessage + "");
            } else {
                if (pdata != null) {
                    if (pdata.length > 0) {

                        $("#financialyeartable").append("<thead class=''><tr id='financialyeartableTrHeadhrmsbudgetfinance'>"

                                + " <th> S.No</th>"
                                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> From Date</th>"
                                + "<th style='min-width:30%;width:auto;'><i class='glyphicon'></i> To Date</th>"
                                + "<th style='min-width:30%;width:80px;'><i class='glyphicon'></i> Active</th>");
                        if (checkUserPrivelege(pvUpdateFinancialYear)) {
                            $("#financialyeartableTrHeadhrmsbudgetfinance").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
                        }
                        if (checkUserPrivelege(pvDeleteFinancialYear)) {
                            $("#financialyeartableTrHeadhrmsbudgetfinance").append("<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>");
                        }
                        $("#financialyeartable").append("<tbody id='financialyearTableBody' class='table-striped table-bordered' />");
                        var sno = 0;
                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;
                            var json = {
                                id: pdata[i]._id.$oid,
                                year: pdata[i].year,
                                fromDate: pdata[i].fromDate,
                                toDate: pdata[i].toDate
                            }
                            json = JSON.stringify(json);
                            var active = pdata[i].active;
                            if (active == 'Yes')
                            {
                                $("#financialyearTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                        + "<td>" + sno + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].fromDate + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].toDate + "</td>"
                                        + "<td style='cursor:pointer;'class='activebut'>" + ' <button type="button" class="btn btn-success mr5" style="align:center;color:white"><center>Active</center></button>' + "</td>");
                                if (checkUserPrivelege(pvUpdateFinancialYear)) {
                                    $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>");
                                }
                                if (checkUserPrivelege(pvDeleteFinancialYear)) {
                                    $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=checkingActiveFinancialYearDelete()>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td>");
                                }
                                //  + "<td style='cursor:pointer;' onclick=updateRelation('" + pdata[i]._id.$oid + "','" + pdata[i].relation + "',,'" + pdata[i].relationRemarks + "')>" + ' <button type="button" class="removebutton" style="align:center;color:red" title="Edit this Relation" >EDIT</button>' + "</td>"
                                //  + "<td style='cursor:pointer;' onclick=checkingActiveFinancialYearDelete()" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");
                            } else
                            {
                                $("#financialyearTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                        + "<td>" + sno + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].fromDate + "</td>"
                                        + "<td style='cursor:pointer;'>" + pdata[i].toDate + "</td>"
                                        + "<td style='cursor:pointer;' class='activebut'>" + ' <button type="button" class="btn btn-danger mr5" style="align:center;color:white"><center>In Active</center></button>' + "</td>");
                                //  + "<td style='cursor:pointer;' onclick=updateRelation('" + pdata[i]._id.$oid + "','" + pdata[i].relation + "',,'" + pdata[i].relationRemarks + "')>" + ' <button type="button" class="removebutton" style="align:center;color:red" title="Edit this Relation" >EDIT</button>' + "</td>"
                                if (checkUserPrivelege(pvUpdateFinancialYear)) {
                                    $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateBudgetFinancialyear('" + pdata[i]._id.$oid + "','" + encodeURI(json) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit">Edit</a>' + "</td>");
                                }
                                if (checkUserPrivelege(pvDeleteFinancialYear)) {
                                    $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteBudgetFinancialYear','viewBudgetFinancialYearList','" + pdata[i]._id.$oid + "')>" + '<i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a class="anchor_delete">Delete</a>' + "</td></tr>");
                                }
                                //     + "<td style='cursor:pointer;'>" + ' <input type="radio" id="myCheck" name="finyearcheck">' + "</td></tr>");


                            }
                        }


                        $("#financialyeartable").dataTable();
                        $("#financialyeartable tbody tr td.activebut").click(function() {

                            var id = $(this).closest('tr[id]').attr('id');
                            $.post(server_base_url + "/budget/master/FinancialYear/Change", {
                                id: id
                            }).done(function(data) {
                                var mdata = JSON.parse(data);
                                if (mdata.statuscode == fail) {
                                    displayErrorMessages("pregsuccessBefore", failMessage + "");
                                } else if (mdata.statuscode == unauthorized) {
                                    displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
                                } else if (mdata.statuscode == statusException) {
                                    displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
                                } else if (mdata.statuscode == invalidSession) {
                                    callSessionTimeout();
                                } else {
//                                
//                                alert(mdata.statuscode);

//                                    changeFinancialYearInSession(mdata.result);
                                    var currentFinancialYear = mdata.result.fromDate + "~" + mdata.result.toDate;
                                    changeFinancialYearInSession(mdata.result._id.$oid, currentFinancialYear);
                                    displaySuccessMessages("pregsuccessBefore", updateMessage, "");
                                    setTimeout(function() {
                                        viewBudgetFinancialYearList('listpanelMainBody');
//                                    changeFinancialYearInSession();
                                    }, 3000);



                                }
                            });
                        });
                    }

                }

            }
        });
    }
}



function dateConversion(date) {
    var date1 = date / 1000;
    var d = new Date(0);
    d.setUTCSeconds(date1);
    var tempDate = new Date(d);
    var temp = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear();
    d = temp;
    return d;
}


function updateBudgetFinancialyear(id, obj)
{
    if (checkUserPrivelege(pvUpdateFinancialYear)) {
        obj = decodeURI(obj);
        obj = JSON.parse(obj);

        $("#finyearfromdate").val(obj.fromDate);
        $("#finyeartodate").val(obj.toDate);
        $("#idValue").val(id);
        fetchallBudgetYear(obj.year);
        $("#financialyearTableBody tr").css("background-color", "white");
        $("#financialyearTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        var screenId = $("#screenId").val();

        $("#yearBtnDiv").text("").append("<div  class='col-xs-3' /><div class='col-xs-2'><button type='button'  value='Save' class='btn btn-success mr5 pull-right' onclick='sendBudgetUpdateYearData()'>Update</button></div><div class='col-xs-2'><button type='button' onclick=displayBudgetFinacialYear('" + screenId + "') class='btn btn-warning mr5 pull-left' name='reset' value='reset'>Back</button></div>");

        $("#preg_ppid").focus();
    }
}



function sendBudgetUpdateYearData()
{
    if (checkUserPrivelege(pvUpdateFinancialYear)) {
        var updatefromdat = $("#finyearfromdate").val();
        var screenId = $("#screenId").val();
        var updatetodat = $("#finyeartodate").val();
        var updateyear = $("#selectYear").val();
        var id = $("#idValue").val();
        var json = {
            year: updateyear,
            fromDate: updatefromdat,
            toDate: updatetodat
        }
        var fundcategoryJson = JSON.stringify(json);
        $.post(server_base_url + "/budget/master/FinancialYear/Update", {
            fyJson: fundcategoryJson,
            id: id,
            userId: getUserSessionElement("userId")
        }).done(function(data) {
            if (data.statuscode == fail) {
                displayErrorMessages("pregsuccessBefore", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate) {
                displayErrorMessages("pregsuccessBefore", existed + "");
                setTimeout(function() {
                    displayBudgetFinacialYear(screenId);
                }, 3000);
            } else if (data != null) {
                displaySuccessMessages("pregsuccessBefore", updateMessage, "");
                setTimeout(function() {
                    displayBudgetFinacialYear(screenId);
                }, 3000);
            }
        });
    }
}

function deleteBudgetFinancialYear(id)
{
    if (checkUserPrivelege(pvDeleteFinancialYear)) {
        $.post(server_base_url + "/budget/master/FinancialYear/Delete", {
            id: id
        }).done(function(data) {

            if (data.statuscode == fail) {
                displayErrorMessages("ErrorDiv", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("ErrorDiv", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displayErrorMessages("ErrorDiv", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == delete_map) {
                // dispalyhrmsCommonReligion();
                displayErrorMessages("ErrorDiv", "" + delete_map_messages, "");
                setTimeout(function() {
                    $("#ErrorDiv").text("");
                }, 3000);
            } else if (data == null) {
                displayErrorMessages("ErrorDiv", "FinancilaYear Deletion Failed" + "");
            } else {

                displaySuccessMessages("ErrorDiv", deleteMessage, "");
                setTimeout(function() {
                    viewBudgetFinancialYearList('listpanelMainBody');
                }, 3000);
            }


        });
    }
}


function budgetdays_between(date1, date2) {

    var start = new Date(date1);
    var end = new Date(date2);
    var diff = new Date(end - start);
    var days = diff / 1000 / 60 / 60 / 24;
    return days;
}


function resetBudgetYear()
{
    $("#finyearfromdate").val("");
    $("#finyeartodate").val("");
    $("#pregppid").text("");
    $("#pregppid1").text("");
    $("#pregsuccessBefore").text("");
}


function saveBudgetFinancialYear()
{
    if (checkUserPrivelege(pvCreateFinancialYear)) {
        var year = $("#selectYear").val();
        var fromDate = $("#finyearfromdate").val();
        var toDate = $("#finyeartodate").val();
        var screenId = $("#screenId").val();
        var financialYear = {
            year: year,
            fromDate: fromDate,
            toDate: toDate
        };
        financialYear = JSON.stringify(financialYear);
        $.post(server_base_url + "/budget/master/FinanceYear/Save", {
            financialYear: financialYear,
            userId: getUserSessionElement("userId")
        }).done(function(data) {
            // alert(data)
            if (data.statuscode == fail) {
                displayErrorMessages("pregsuccessBefore", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate) {
                displayErrorMessages("pregsuccessBefore", existed + "");
                setTimeout(function() {
                    displayBudgetFinacialYear(screenId);
                }, 3000);

            } else if (data != null) {
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function() {
                    displayBudgetFinacialYear(screenId);
                }, 3000);

            }
        });
    }
}

function checkingActiveFinancialYearDelete() {
    displayErrorMessages("ErrorDiv", "Active Financial Year cannot be deleted", "");
    setTimeout(function() {
        $("#ErrorDiv").text("");
    }, 3000);
}

function changeFinancialYearInSession(financialYearId, financialYear) {
    if (checkUserPrivelege(pvChangeFinancialYear) || checkUserPrivelege(pvUpdateFinancialYear)) {
        setUserSessionElement(seCurrentFinancialYear, financialYear);
        setUserSessionElement(seCurrentFinancialYearId, financialYearId);
        $.get(server_base_url + "/financial/account/FinancialYear/Change", {
            changeFinancialYear: financialYear,
            changeFinancialYearId: financialYearId
        }).done(function(data) {
            if (data.statuscode == fail || data.statuscode == unauthorized || data.statuscode == statusException) {
                $("#pregsuccessBefore").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Financial Year Updation Failed<strong></div></center>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                displaySuccessMessages("pregsuccessBefore", "Financial Year SuccessFully Changed", "");
                setTimeout(function() {
                    $("#pregsuccessBefore").text("");
                }, 5000);
                // $("#pregsuccessBefore").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Financial Year SuccessFully Changed<strong></div></center>");
            }
        });
    }
}