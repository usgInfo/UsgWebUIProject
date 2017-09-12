/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function changeFinancialYearMaster(divId, screenId) {
    scrolupfunction();
    if (checkUserPrivelege(pvChangeFinancialYear)) {
        if (screenId == "HRMS")
        {
            $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> ');
            $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> > <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> > <label>Change Financial Year</label>');
        }
        if (screenId == "Budget")
        {
            $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> ');
            $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label> > <label><a href="javascript:budgetCommonMenuTabs()">Common Master</a></label> > <label>Change Financial Year</label>');
        } else if (screenId == "FM")
        {
            $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayFinanceHorizontalBar()">Financial Management</a></label> ');
            $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="changeFinancialYearMaster()">Change Financial Year</a>');

        }
        //$("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="changeFinancialYearMaster()">Change Financial Year</a>');

        $("#" + divId).text("").append('<div id="changeFinancialYearDivId"></div>');
        $("#changeFinancialYearDivId").text("").append('<div id="changeFinancialYearTabMenu" />');
        $("#changeFinancialYearTabMenu").append('<input type="hidden" id="screenId">');
        $("#screenId").val(screenId);
        $("#changeFinancialYearTabMenu").append('<div id="changeFinancialYearMainMenu" class="row" />');
        $("#changeFinancialYearTabMenu").append('<div id="changeFinancialYearListMainMenu" class="row" />');

        $("#changeFinancialYearMainMenu").append('<div id="changeFinancialYearMainPanel" class="panel panel-blue" />');
        $("#changeFinancialYearMainPanel").append('<div id="changeFinancialYearMainHeading" class="panel-heading" />');
        $("#changeFinancialYearMainHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Change Financial Year</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colChangeFinancialYear"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#changeFinancialYearMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#collapseOne1").append('<div id="changeFinancialYearMainBody" class = "panel-body pan" />');
        $("#colChangeFinancialYear").click(function() {
            $("#collapseOne1").toggle();
            if ($("#colChangeFinancialYear span").hasClass("glyphicon-minus-sign")) {
                $("#colChangeFinancialYear").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colChangeFinancialYear").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#changeFinancialYearMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#changeFinancialYearMainBody").append('<center><span id="changeFinancialYearMessageDiv"></span></center>');
        $("#changeFinancialYearMainBody").append('<div id="changeFinancialYearBodyDiv" class="form-body pal" />');

        $("#changeFinancialYearBodyDiv").append('<div class="form-group col-lg-12"><label for="FinancialYear" class="col-lg-2 control-label">Current Financial Year</label><div class="col-lg-6 col-sm-offset-1"><input id="changeFinancialYearId" type="text" class="form-control"/></div></div></div>');
        var currentFinancialYear = getUserSessionElement(seCurrentFinancialYear);
        $("#changeFinancialYearId").val(currentFinancialYear);
        $("#changeFinancialYearId").prop("readonly", true);
        $("#changeFinancialYearBodyDiv").append("<div class=' col-lg-12 form-group'><label for='changeFinancial' class='col-sm-2 control-label'>Change Financial Year To</label><div class='col-sm-6 col-sm-offset-1'><select class='form-control' id='changeYearSelect'></select></div></div></div>");
        $("#changeFinancialYearBodyDiv").append("<center><button onclick=changeFinancialYear() class='btn btn-success' style='height:40px;width:80px' id='changeButton'>Change</button></center>");
        fetchFinancialYears();
    }
}

function fetchFinancialYears() {
    $("#changeYearSelect").text("").append("<option value='0'>----Select Financial Year----</option>");
    $.get(server_base_url + "/financial/account/FinancialYear/AllYear", {
    }).done(function(data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
//            var data = JSON.parse(data);
            var mainData = data.result;
            mainData = JSON.parse(mainData);
            for (var i = 0; i < mainData.length; i++) {
                var subData = mainData[i];
                $("#changeYearSelect").append("<option value='" + subData._id.$oid + "'>" + subData.fromDate + " ~ " + subData.toDate + "</option>");
            }
        }
    });
}
function changeFinancialYear() {
    if (checkUserPrivelege(pvChangeFinancialYear)) {
        var screenId = $("#screenId").val();
        var validChangeDate = $("#changeYearSelect").val();
        if (validChangeDate == 0) {
            $("#MessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill all fields</strong></div></center>");
            return false;
        }

        $("#changeButton").attr('disabled', true);
        $("#changeYearSelect").prop("disabled", true);
        var changeFinancialYearDate = $("#changeYearSelect option:selected").text();
        var changeFinancialYearDateId = $("#changeYearSelect option:selected").val();
        setUserSessionElement(seCurrentFinancialYear, changeFinancialYearDate);
        setUserSessionElement(seCurrentFinancialYearId, changeFinancialYearDateId);

        $.get(server_base_url + "/financial/account/FinancialYear/Change", {
            changeFinancialYear: changeFinancialYearDate,
            changeFinancialYearId: changeFinancialYearDateId
        }).done(function(data) {
            if (data.statuscode == fail || data.statuscode == unauthorized || data.statuscode == statusException) {
                $("#changeFinancialYearMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Financial Year Updation Failed<strong></div></center>");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else {
                $("#changeFinancialYearMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:green;'><strong>Financial Year SuccessFully Changed for this particular session<strong></div></center>");
                setTimeout(function() {
                    changeFinancialYearMaster("dashboardBodyMainDiv", screenId);
                }, 1000);
//            window.setTimeout('location.reload()', 2000);
            }
        });
    }
}