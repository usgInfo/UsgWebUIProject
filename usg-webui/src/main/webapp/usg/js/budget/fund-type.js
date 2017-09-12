/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayBudgetFundType(divId, screenId) {

    scrolupfunction();
    if (screenId == "HRMS")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> ');
        $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> > <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >> <label>Fund Type Master</label>');
    } else if (screenId == "FINANCE")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayFinanceHorizontalBar()">Financial Management</a></label> ');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeCommonMenuTabs()">Common Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick=displayBudgetFundType("dashboardBodyMainDiv")>Fund Type Master</a>');

    } else if (screenId == "BUDGET")
    {
        $("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayBudgetHorizontalBar()">Budget</a></label>');
        $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayBudgetHorizontalBar()">Budget</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="budgetCommonMenuTabs()">Common Masters</a>><a href="javascript:void(0)" data-toggle="tab" onclick=displayBudgetFundType("dashboardBodyMainDiv")>Fund Type Master</a>');

    }

    $("#" + divId).text("").append('<div id="fundTypeDivId"></div>');
    $("#fundTypeDivId").text("").append('<div id="fundTypeMainTabMenu"></div>');
    $("#fundTypeMainTabMenu").append('<input type="hidden" id="screenId">');
    $("#screenId").val(screenId);
    $("#fundTypeMainTabMenu").append('<div id="fundTypeMainMenu" class="row" />');
    $("#fundTypeMainTabMenu").append('<div id="fundTypeListMainMenu" class="row" />');
    if (checkUserPrivelege(pvCreateFundType)) {

        $("#fundTypeMainMenu").append('<div id="fundTypeMainPanel" class="panel panel-blue" />');
        $("#fundTypeMainPanel").append('<div id="fundTypeMainHeading" class="panel-heading" />');
        $("#fundTypeMainHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center><strong>Fund Type Master</strong></center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colFundType"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#fundTypeMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#colFundType").click(function () {
            $("#collapseOne1").toggle();
            if ($("#colFundType span").hasClass("glyphicon-minus-sign")) {
                $("#colFundType").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colFundType").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="fundTypeMainBody" class = "panel-body pan" />');
        $("#fundTypeMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#fundTypeMainBody").append('<center><span id="fundTypeMessageDiv"></span></center>');
        $("#fundTypeMainBody").append('<div id="fundTypeBodyDiv" class="row" />');

        $("#fundTypeBodyDiv").append('<div class="form-group col-lg-12"><label for="ddoName" class="col-lg-3 control-label">Description <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="description" type="text" placeholder="Description" onkeypress="return acceptAlphanumeric(event)" class="form-control"/><span id="descriptionErr" class="text-danger"></span></div></div></div>');
        $("#fundTypeBodyDiv").append('<div class="form-group col-lg-12"><label for="underFundType" class="col-lg-3 control-label">Under Fund Type </label><div class="col-lg-6 col-sm-offset-1"><div><select class="form-control" name="fundtype" id="fundtype"></select></div></div></div>');
        $("#fundTypeBodyDiv").append('<div class="form-group col-lg-12"><label for="orderBy" class="col-lg-3 control-label">Order By <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="orderBy" type="text" placeholder="Order By" onkeyup=validatePhone("orderBy","orderByErr") class="form-control"/><span id="orderByErr" class="text-danger"></span></div></div></div>');
        $("#orderBy").attr('maxlength', '3');
        $("#fundTypeBodyDiv").append("<div class='form-group' id='fundTypeButton'><center><button id='ledgerCategorySave' onclick=saveFundType() class='btn btn-success'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetFundType() class='btn btn-warning' id='resetButton'>Reset</button></center></div>");
    }
    fundTypeTable();
    setTimeout(function () {
        fetchUnderFundType();
    }, 3000);

    $("input").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

}

function fetchUnderFundType() {
    $("#fundtype").text("").append("<option value='0'>----Select Fund Type----</option>");
    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function (data) {
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {

            for (var i = 0; i < data.length; i++) {
                var subData = data[i];
                $("#fundtype").append("<option value='" + subData._id.$oid + "'>" + subData.description + "</option>");
            }
        }
    });
}


function resetFundType() {
    $("#description").val("");
    $("#fundtype").val("0");
    $("#orderBy").val("");
    $("#descriptionErr").text("");
    $("#orderByErr").text("");
    $("#fundTypeMessageDiv").text();
}


function saveFundType() {
    if (checkUserPrivelege(pvCreateFundType)) {
        var description = $("#description").val();
        var underFundType = $("#fundtype").val();
        var orderBy = $("#orderBy").val();

        if (description == "" || description == undefined || description == "undefined" || orderBy == "" || orderBy == undefined || orderBy == "undefined") {
            displaySmallErrorMessagesInRed("fundTypeMessageDiv", "Please Fill * fields" + "");
            return false;
        }
        var fundType = validatealphaNumeric('description', 'descriptionErr');
        var order = validatePhone("orderBy", "orderByErr");
        if (fundType && order) {

            var fundcategoryJson = {
                description: description,
                underFundType: underFundType,
                order: orderBy
            };

            var loginUserId = getUserSessionElement("userId");

            fundcategoryJson = JSON.stringify(fundcategoryJson);

            $.post(server_base_url + "/budget/master/FundType/Save", {
                fundType: fundcategoryJson,
                userId: loginUserId

            }).done(function (data) {
                if (data == duplicate) {
                    displayErrorMessages("fundTypeMessageDiv", existed + "");
                    setTimeout(function () {
                        var screenId = $("#screenId").val();
                        displayBudgetFundType("dashboardBodyMainDiv", screenId);
                    }, 3000);
                } else if (data.statuscode == fail) {
                    displayErrorMessages("fundTypeMessageDiv", failMessage + "");
                } else if (data.statuscode == unauthorized) {
                    displayErrorMessages("fundTypeMessageDiv", unauthorizedMessage + "");
                } else if (data.statuscode == statusException) {
                    displayErrorMessages("fundTypeMessageDiv", statusExceptionMessage + "");
                } else if (data.statuscode == invalidSession) {
                    callSessionTimeout();
                } else {
                    $("#description").prop("disabled", true);
                    $("#fundtype").prop("disabled", true);
                    $("#orderBy").prop("disabled", true);
                    $("#updateButton").attr('disabled', true);
                    $("#resetButton").attr('disabled', true);
                    displaySuccessMessages("fundTypeMessageDiv", successMessage, "");
                    setTimeout(function () {
                        var screenId = $("#screenId").val();
                        displayBudgetFundType("dashboardBodyMainDiv", screenId);
                    }, 3000);
                }
            });
        } else {
            displayErrorMessages("fundTypeMessageDiv", "Please fill valid Entries" + "");
        }
    }
}

function fundTypeTable() {
    if (checkUserPrivelege(pvViewFundType)) {

        $("#fundTypeListMainMenu").text("").append('<div id="fundTypeListPanel" class="panel panel-blue" />');
        $("#fundTypeListPanel").append('<div id="fundTypeListHeading" class="panel-heading" />');
        $("#fundTypeListHeading").append('<div class="panel-title" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center><strong>List of Fund Type(s)</strong></center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="colFundTypeList"><span class="glyphicon glyphicon-minus-sign"></span></div></div>');

        $("#fundTypeListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#colFundTypeList").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colFundTypeList span").hasClass("glyphicon-minus-sign")) {
                $("#colFundTypeList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colFundTypeList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append('<div id="fundTypeListBody" class = "panel-body pan" />');
        $("#fundTypeListBody").append('<div id="panelRow" class="row" />');

        $("#fundTypeListBody").append('<div id="fundTypeListErrorMsgId" />');
        $("#fundTypeListBody").append('<div id="fundTypeListMainBody" class="table-responsive" />');
        $("#fundTypeListMainBody").append('<table id="fundTypeTable" class="table table-bordered" />');
        $("#fundTypeTable").append('<thead id="fundTypeTableHeadId" />');
        $("#fundTypeTable").append('<tbody id="fundTypeTableBodyId" />');

        $("#fundTypeTableHeadId").append('<tr id="fundTypeTableHeadIdTrHeadCommon"><th>Sno</th><th>Description</th><th>Under Fund Type</th><th>Order</th>');
        if (checkUserPrivelege(pvUpdateFundType)) {
            $("#fundTypeTableHeadIdTrHeadCommon").append('<th><center>Edit</center</th>');
        }
        if (checkUserPrivelege(pvDeleteFundType)) {
            $("#fundTypeTableHeadIdTrHeadCommon").append('<th><center>Delete</center></th>');
        }

        $.post(server_base_url + "/budget/master/FundType/View", {
        }).done(function (data) {
            if (data.statuscode == NoData) {
                displayLargeErrorMessagesInCenterInRed("fundTypeListErrorMsgId", NoDataFoundMessage + "");
            }
            if (data == fail) {
                displayLargeErrorMessagesInCenterInRed("fundTypeListErrorMsgId", emptyListMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("fundTypeListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayLargeErrorMessagesInCenterInRed("fundTypeListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayLargeErrorMessagesInCenterInRed("fundTypeListErrorMsgId", "No User available" + "");
            } else if (data != null) {
                var sno = 0;
                for (var i = data.length - 1; i >= 0; i--) {
                    sno++;
                    var subData = data[i];
                    var fundTypeName = subData.fundTypeName;
                    if (fundTypeName == "undefined" || fundTypeName == undefined) {
                        fundTypeName = "";
                    }

                    $("#fundTypeTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.description + "</td>"
                            + "<td style='cursor:pointer;'>" + fundTypeName + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.order + "</td>");
                    if (checkUserPrivelege(pvUpdateFundType)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=editFundTypeInfo('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>");
                    }
                    if (checkUserPrivelege(pvDeleteFundType)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteFundTypeData','fundTypeTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");
                    }
                }
                $("#fundTypeTable").dataTable();
            } else {
                displayLargeErrorMessagesInCenterInRed("fundTypeListErrorMsgId", NoDataFoundMessage + "");
            }
        });
    }
}

function editFundTypeInfo(fundTypeData, fundTypeId) {
    if (checkUserPrivelege(pvUpdateFundType)) {
        displaySmallErrorMessagesInRed("fundTypeMessageDiv", "" + "");
        $("#description").focus();
        if (fundTypeData == null || fundTypeData == "" || fundTypeData == undefined) {
            return false;
        }

        fundTypeData = JSON.parse(decodeURI(fundTypeData));
        $("#description").val(fundTypeData.description);
        $("#fundtype").val(fundTypeData.underFundType);
        $("#orderBy").val(fundTypeData.order);
        $("#fundTypeTable tr").css("background-color", "white");
        $("#fundTypeTable tr" + "#" + fundTypeId).css("background-color", "rgba(10, 129, 156, 0.3)");
        var screenId = $("#screenId").val();
//                   displayBudgetFundType("dashboardBodyMainDiv",screenId);
        $("#fundTypeButton").text("").append("<center><button id='updateButton' onclick=updateFundTypeData('" + fundTypeId + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayBudgetFundType()' id='ddoUpdateReset' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");
    }
}

function updateFundTypeData(fundTypeId) {
    if (checkUserPrivelege(pvUpdateFundType)) {
        var description = $("#description").val();
        var fundtype = $("#fundtype").val();
        var orderBy = $("#orderBy").val();

        if (description == "" || description == undefined || description == "undefined" || orderBy == "" || orderBy == undefined || orderBy == "undefined") {
            displaySmallErrorMessagesInRed("fundTypeMessageDiv", "Please Fill * fields" + "");
            return false;
        }
        var fundType = validatealphaNumeric('description', 'descriptionErr');
        var order = validatePhone("orderBy", "orderByErr");
        if (fundType && order) {

            var fundTypeJson = {
                description: description,
                underFundType: fundtype,
                order: orderBy
            }

            var loginUserId = getUserSessionElement("userId");

            fundTypeJson = JSON.stringify(fundTypeJson);
            $.post(server_base_url + "/budget/master/FundType/Update", {
                fundType: fundTypeJson,
                id: fundTypeId,
                loginUserId: loginUserId

            }).done(function (data) {
                if (data == duplicate) {
                    displayErrorMessages("fundTypeMessageDiv", existed + "");
                    setTimeout(function () {
                        var screenId = $("#screenId").val();
                        displayBudgetFundType("dashboardBodyMainDiv", screenId);
                    }, 3000);
                } else if (data == fail) {
                    displayErrorMessages("fundTypeMessageDiv", failMessage + "");
                } else if (data == unauthorized || data.statuscode == unauthorized) {
                    displayErrorMessages("fundTypeMessageDiv", unauthorizedMessage + "");
                } else if (data == statusException) {
                    displayErrorMessages("fundTypeMessageDiv", statusExceptionMessage + "");
                } else if (data == invalidSession) {
                    callSessionTimeout();
                } else if (data == "success" || data == success) {
                    displaySuccessMessages("fundTypeMessageDiv", updateMessage, "");
                    $("#description").prop("disabled", true);
                    $("#fundtype").prop("disabled", true);
                    $("#orderBy").prop("disabled", true);
                    $("#saveButton").attr('disabled', true);
                    $("#resetButton").attr('disabled', true);
                    setTimeout(function () {
                        var screenId = $("#screenId").val();
                        displayBudgetFundType("dashboardBodyMainDiv", screenId);
                    }, 3000);
                }
            });
        } else {
            displayErrorMessages("fundTypeMessageDiv", "Please fill valid Entries" + "");
        }
    }
}

function deleteFundTypeData(id) {
    if (checkUserPrivelege(pvDeleteFundType)) {
        var userId = getUserSessionElement("userId");
        $.post(server_base_url + "/budget/master/FundType/Delete", {
            id: id,
            userId: userId
        }).done(function (data) {

            if (data.statuscode == fail) {
                displayErrorMessages("fundTypeListErrorMsgId", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displayErrorMessages("fundTypeListErrorMsgId", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displayErrorMessages("fundTypeListErrorMsgId", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data == delete_map) {
                // dispalyhrmsCommonReligion();
                displayErrorMessages("fundTypeListErrorMsgId", "This Fund Type name  " + delete_map_message, "");
                setTimeout(function () {
                    fundTypeTable();
                }, 3000);
            } else if (data != null) {
                displaySuccessMessages("fundTypeListErrorMsgId", deleteMessage, "");
                setTimeout(function () {
                    fundTypeTable();
                }, 3000);
            } else {
                displayErrorMessages("fundTypeListErrorMsgId", "Fund Type Deletion Failed" + "");
            }


        });

    }
}

