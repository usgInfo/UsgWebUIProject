/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function BudgetNatureMasterCreation(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0);" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="DDOMasterCreation()">Budget Nature Master</a>');

    $("#" + divId).text("").append('<div id="budgetNatureDivId"></div>');
    $("#budgetNatureDivId").text("").append('<div id="budgetNatureTabMenu" />');

    $("#budgetNatureTabMenu").append('<div id="budgetNatureMainMenu" class="row" />');
    $("#budgetNatureTabMenu").append('<div id="budgetNatureListMainMenu" class="row" />');

    $("#budgetNatureMainMenu").append('<div id="budgetNatureMainPanel" class="panel panel-blue" />');
    $("#budgetNatureMainPanel").append('<div id="budgetNatureMainHeading" class="panel-heading" />');
    $("#budgetNatureMainHeading").append('<class="panel-title" data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Budget Nature Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="budgetNatCollpse"><span class="glyphicon glyphicon-minus-sign"></span></div>');
    $("#budgetNatureMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
    $("#budgetNatCollpse").click(function() {
        $("#collapseOne1").toggle();
        if ($("#budgetNatCollpse span").hasClass("glyphicon-minus-sign")) {
            $("#budgetNatCollpse").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#budgetNatCollpse").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne1").append('<div id="budgetNatureMainBody" class = "panel-body pan" />');
    $("#budgetNatureMainBody").append('<div id="panelRow" class="form-horizontal" />');

    $("#budgetNatureMainBody").append('<center><span id="budgetNatureMessageDiv"></span></center>');
    $("#budgetNatureMainBody").append('<div id="budgetNatureBodyDiv" class="form-body pal" />');

    $("#budgetNatureBodyDiv").append('<div class="form-group col-lg-12"><label for="budgetNatureName" class="col-lg-3 control-label">Budget Nature Name <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="budgetNatureName" type="text" onkeypress="return acceptAlphanumeric(event)" placeholder="Budget Nature" class="form-control"/><span id="budgetNatureErr" class="text-danger"></span></div></div></div>');
    $("#budgetNatureBodyDiv").append('<div class="form-group col-lg-12"><label for="budgetNatureDetail" class="col-lg-3 control-label">Description </label><div class="col-lg-6 col-sm-offset-1"><div><textarea class="form-control" rows="2" id="budgetNatureDescription" placeholder="Please enter description..."></textarea></div></div></div>');
    $("#budgetNatureBodyDiv").append("<div class='form-group' id='budgetNatureButton'><center><button id='budgetNatureButtonSave' onclick=saveBudgetNature() class='btn btn-success' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetBudgetNature() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
    budgetNatureTable();
}

function resetBudgetNature() {
    $("#budgetNatureName").val("");
    $("#budgetNatureDescription").val("");
    $("#budgetNatureMessageDiv").text("");
    $("#budgetNatureErr").text("");
}

function saveBudgetNature() {

    var budgetNature = $("#budgetNatureName").val();
    var description = $("#budgetNatureDescription").val();
    if (budgetNature == "" || budgetNature == "undefined") {
        displaySmallErrorMessagesInRed("budgetNatureMessageDiv", "Please Fill * fields" + "");
        return false;
    }

    var budget = validatealphaNumeric('budgetNatureName', 'budgetNatureErr');
    if (budget) {


        var budgetNatureJson = {
            budgetNatureName: budgetNature,
            description: description
        }

        var loginUserId = getUserSessionElement("userId");

        $.get(server_base_url + "/finance/account/BudgetNature/Save", {
            budgetNatureJson: JSON.stringify(budgetNatureJson),
            userid: loginUserId
        }).done(function(data) {
            if (data.statuscode == fail) {
                displaySmallErrorMessagesInRed("budgetNatureMessageDiv", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("budgetNatureMessageDiv", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displaySmallErrorMessagesInRed("budgetNatureMessageDiv", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {
                $("#budgetNatureName").prop("disabled", true);
                $("#budgetNatureDescription").prop("readonly", true);
                $("#budgetNatureButtonSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("budgetNatureMessageDiv", successMessage, "");
                setTimeout(function() {
                    BudgetNatureMasterCreation();
                }, 3000);

            }
            else {
                displaySmallErrorMessagesInRed("budgetNatureMessageDiv", "Budget Nature Creation Failed" + "");
            }
        });
    } else {
        displaySmallErrorMessagesInRed("budgetNatureMessageDiv", "Please fill valid Entries" + "");
    }

}

function budgetNatureTable() {

    $("#budgetNatureListMainMenu").text("").append('<div id="budgetNatureListPanel" class="panel panel-blue" />');
    $("#budgetNatureListPanel").append('<div id="budgetNatureListHeading" class="panel-heading" />');
    $("#budgetNatureListHeading").append('<class="panel-title" data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Budget Nature</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="budgetNatListCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
    $("#budgetNatureListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
    $("#budgetNatListCollp").click(function() {
        $("#collapseOne2").toggle();
        if ($("#budgetNatListCollp span").hasClass("glyphicon-minus-sign")) {
            $("#budgetNatListCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#budgetNatListCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append('<div id="budgetNatureListBody" class = "panel-body pan" />');
    $("#budgetNatureListBody").append('<div id="panelRow" class="row" />');

    $("#budgetNatureListBody").append('<div id="budgetNatureListErrorMsgId" />');
    $("#budgetNatureListBody").append('<div id="budgetNatureListMainBody" class="table-responsive" />');
    $("#budgetNatureListMainBody").append('<table id="budgetNatureTable" class="table table-bordered" />');
    $("#budgetNatureTable").append('<thead id="budgetNatureTableHeadId" />');
    $("#budgetNatureTable").append('<tbody id="budgetNatureTableBodyId" />');
    $("#budgetNatureTableHeadId").append('<tr><th>Sno</th><th>Budget Nature</th><th>Description</th><th><center>Edit</center</th><th><center>Delete</center></th></tr>');

    $.post(server_base_url + "/finance/account/BudgetNature/ViewList", {
    }).done(function(data) {
        if (data.statuscode == NoData) {
            displaySmallErrorMessagesInRed("budgetNatureListErrorMsgId", NoDataFoundMessage + "");
        }
        if (data == fail) {
            displaySmallErrorMessagesInRed("budgetNatureListErrorMsgId", "Invalid username / password" + "");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("budgetNatureListErrorMsgId", unauthorizedMessage + "");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("budgetNatureListErrorMsgId", statusExceptionMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == null) {
            displaySmallErrorMessagesInRed("budgetNatureListErrorMsgId", NoDataFoundMessage + "");
        } else if (data != null) {
            var sno = 0;
            var mainData = data.result;
            for (var i = mainData.length - 1; i >= 0; i--) {
                sno++;
                var subData = mainData[i];
                $("#budgetNatureTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.budgetNatureName + "</td>"
                        + "<td style='cursor:pointer;'>" + subData.description + "</td>"
                        + "<td style='cursor:pointer;' onclick=editBudgetNatureInfo('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>"
                        + "<td style='cursor:pointer;' onclick=deletePopUp('deleteBudgetNature','budgetNatureTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td></tr>");
            }
            $("#budgetNatureTable").dataTable();
        } else {
            displaySmallErrorMessagesInRed("budgetNatureListErrorMsgId", NoDataFoundMessage + "");
        }
    });

}

function editBudgetNatureInfo(budgetNatureData, id) {
    $("#budgetNatureName").focus();

    if (budgetNatureData == null || budgetNatureData == "" || budgetNatureData == undefined) {
        return false;
    }
    $("#budgetNatureTableBodyId tr").css("background-color", "white");
    $("#budgetNatureTableBodyId tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    budgetNatureData = JSON.parse(decodeURI(budgetNatureData));
    $("#budgetNatureName").val(budgetNatureData.budgetNatureName);
    $("#budgetNatureDescription").val(budgetNatureData.description);
    $("#messageDiv").text("");
    $("#budgetNatureName").prop("readonly", false);
    $("#budgetNatureDescription").prop("readonly", false);
    $("#budgetNatureButton").text("").append("<center><button id='updateButton' onclick=updateBudgetNature('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='BudgetNatureMasterCreation()' id='budgetNatureUpdateReset' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");
}

function updateBudgetNature(id) {
    var budgetNature = $("#budgetNatureName").val();
    var description = $("#budgetNatureDescription").val();

    if (budgetNature == "" || budgetNature == "undefined" || description == "" || description == "undefined") {
        $("#budgetMasterMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please Fill All fields<strong></div></center>");
        return false;
    }

    var budget = validatealphaNumeric('budgetNatureName', 'budgetNatureErr');
    if (budget) {

        var budgetNatureUpdateJson = {
            budgetNatureName: budgetNature,
            description: description
        }

        var loginUserId = getUserSessionElement("userId");

        $.get(server_base_url + "/finance/account/BudgetNature/Update", {
            budgetNatureUpdateJson: JSON.stringify(budgetNatureUpdateJson),
            budgetNatureId: id,
            userid: loginUserId
        }).done(function(data) {
            if (data.statuscode == fail) {
                displaySmallErrorMessagesInRed("budgetNatureMessageDiv", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("budgetNatureMessageDiv", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displaySmallErrorMessagesInRed("budgetNatureMessageDiv", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {
                $("#budgetNatureName").prop("disabled", true);
                $("#budgetNatureDescription").prop("readonly", true);
                $("#budgetNatureButtonSave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("budgetNatureMessageDiv", updateMessage, "");
                setTimeout(function() {
                    BudgetNatureMasterCreation();
                }, 3000);
            }
            else {
                displaySmallErrorMessagesInRed("budgetNatureMessageDiv", "Budget Nature Creation Failed" + "");
            }
        });
    } else {
        displaySmallErrorMessagesInRed("budgetNatureMessageDiv", "Please fill valid Entries" + "");
    }
}

function deleteBudgetNature(budgetNatureId) {
    var currentLoginUser = getUserSessionElement("userId");
    $.get(server_base_url + "/finance/account/BudgetNature/Delete", {
        currentuser: currentLoginUser,
        budgetNatureId: budgetNatureId
    }).done(function(data) {
        if (data.statuscode == fail) {
            displaySmallErrorMessagesInRed("budgetNatureListErrorMsgId", failMessage + "");
        } else if (data.statuscode == unauthorized) {
            displaySmallErrorMessagesInRed("budgetNatureListErrorMsgId", unauthorizedMessage + "");
        } else if (data.statuscode == statusException) {
            displaySmallErrorMessagesInRed("budgetNatureListErrorMsgId", statusExceptionMessage + "");
        } else if (data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {
            displaySuccessMessages("budgetNatureListErrorMsgId", deleteMessage, "");
            setTimeout(function() {
                budgetNatureTable();
            }, 3000);
        }
        else {
            displaySmallErrorMessagesInRed("budgetNatureListErrorMsgId", "Budget Nature Deletion Failed" + "");
        }
    });
}
