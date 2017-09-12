/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function LedgerCategoryMasterCreation(divId) {
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayFinanceHorizontalBar()">Financial Management</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="financeAccountMenuTabs()">Account Master</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="LedgerCategoryMasterCreation()">Ledger Category Master</a>');

    $("#" + divId).text("").append('<div id="ledgerCategoryDivId"></div>');
    $("#ledgerCategoryDivId").text("").append('<div id="ledgerCategoryTabMenu" />');

    $("#ledgerCategoryTabMenu").append('<div id="ledgerCategoryMainMenu" class="row" />');
    $("#ledgerCategoryTabMenu").append('<div id="ledgerCategoryListMainMenu" class="row" />');
    if (checkUserPrivelege(pvCreateLedgerCategory)) {

        $("#ledgerCategoryMainMenu").append('<div id="ledgerCategoryMainPanel" class="panel panel-blue" />');
        $("#ledgerCategoryMainPanel").append('<div id="ledgerCategoryMainHeading" class="panel-heading" />');
        $("#ledgerCategoryMainHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>Ledger Category Master</center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="ledgerCatCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
        $("#ledgerCategoryMainPanel").append('<div id="collapseOne1" class="panel-collapse collapse in pal" />');
        $("#ledgerCatCollp").click(function () {
            $("#collapseOne1").toggle();
            if ($("#ledgerCatCollp span").hasClass("glyphicon-minus-sign")) {
                $("#ledgerCatCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#ledgerCatCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne1").append('<div id="ledgerCategoryMainBody" class = "panel-body pan" />');
        $("#ledgerCategoryMainBody").append('<div id="panelRow" class="form-horizontal" />');

        $("#ledgerCategoryMainBody").append('<center><span id="ledgerCategoryMessageDiv"></span></center>');
        $("#ledgerCategoryMainBody").append('<div id="ledgerCategoryBodyDiv" class="form-body pal" />');


        $("#ledgerCategoryMainBody").append('<div class="form-group col-lg-12"><label for="parentLedger" class="col-lg-3 control-label"> Ledger Name <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><select class="form-control" name="parentLedger" id="parentLedgerSelect"></select></div></div></div>');
        $("#ledgerCategoryMainBody").append('<div class="form-group col-lg-12"><label for="ledgerCategory" class="col-lg-3 control-label">Ledger Category <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="ledgerCategory" type="text" onkeypress="return acceptAlphanumeric(event)" placeholder="Ledger Category" class="form-control"/><span id="ledgerCategoryErr" class="text-danger"></span></div></div></div>');

        $("#ledgerCategoryMainBody").append('<div class="form-group col-lg-12"><label for="orderLevel" class="col-lg-3 control-label">Order Level <span class="require">*</span></label><div class="col-lg-6 col-sm-offset-1"><div><input id="orderLevel" type="text" placeholder="Order Level" onkeyup=validatePhone("orderLevel","orderLevelErr") class="form-control"/><span id="orderLevelErr" class="text-danger"></span></div></div></div>');
        $("#ledgerCategoryMainBody").append('<div class="form-group col-lg-12"><label for="ledgerDetail" class="col-lg-3 control-label">Remarks </label><div class="col-lg-6 col-sm-offset-1"><div><textarea class="form-control" rows="2" id="ledgerDetail" placeholder="Please enter remarks..."></textarea></div></div></div>');
        $("#ledgerCategoryMainBody").append("<div class='form-group' id='ledgerCategoryButton'><center><button id='ledgerCategorySave' onclick=saveLedgerCategory() class='btn btn-success' style='height:40px;width:80px'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=resetLedgerCategory() class='btn btn-warning' id='resetButton' style='height:40px;width:80px'>Reset</button></center></div>");
        $("#orderLevel").attr('maxlength', '2');
        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });


    }

    ledgerCategoryTable();
    setTimeout(function () {
        fetchParentLedger();
    }, 500);


}

function resetLedgerCategory() {
    $("#parentLedgerSelect").val("0");
    $("#ledgerCategory").val("");
    $("#orderLevel").val("");
    $("#ledgerDetail").val("");
    $("#ledgerCategoryMessageDiv").text("");
    $("#orderLevelErr").text("");
    $("#ledgerCategoryErr").text("");
}

function fetchParentLedger() {
    $("#parentLedgerSelect").text("").append("<option value='0'>---- Select Ledger Name----</option>");
    $.get(server_base_url + "/finance/AccountMaster/FetchLedgerWithLedgerCategory", {
        dropdown: "dropdown"
    }).done(function (data) {

        var mainData = JSON.parse(data);
        if (data == fail || data == unauthorized) {
//            location.href = "dashboard.jsp";
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            //   var mainData = data.result;
            for (var i = 0; i < mainData.length; i++) {
                $("#parentLedgerSelect").append("<option  value='" + mainData[i].idStr + "' >" + mainData[i].ledgerName + "(" + mainData[i].ledgerCode + ")" + "</option>");
            }
        }
    });
}

function saveLedgerCategory() {
    if (checkUserPrivelege(pvCreateLedgerCategory)) {
        var parentLedger = $("#parentLedgerSelect").val();
        var ledgerCategory = $("#ledgerCategory").val();
        var orderLevel = $("#orderLevel").val();
        var ledgerDetail = $("#ledgerDetail").val();

        if (parentLedger == "0" || ledgerCategory == "undefined" || ledgerCategory == "" || orderLevel == "undefined" || orderLevel == "") {
            displaySmallErrorMessagesInRed("ledgerCategoryMessageDiv", "Please Fill * fields" + "");
            return false;
        }

        var ledgerCategoryJson = {
            parentLedger: parentLedger,
            ledgerCategory: ledgerCategory,
            orderLevel: orderLevel,
            ledgerDetail: ledgerDetail
        }

        var loginUserId = getUserSessionElement("userId");

        $.get(server_base_url + "/financial/account/LedgerCategory/Save", {
            ledgerCategoryJson: JSON.stringify(ledgerCategoryJson),
            userid: loginUserId
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("ledgerCategoryMessageDiv", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("ledgerCategoryMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("ledgerCategoryMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("ledgerCategoryMessageDiv", "" + existed + "");
                setTimeout(function () {
                    $("#ledgerCategoryMessageDiv").text("").val("");
                }, 3000);
            } else if (data != null) {
                $("#orderLevel").prop("disabled", true);
                $("#ledgerDetail").prop("disabled", true);
                $("#ledgerCategory").prop("disabled", true);
                $("#parentLedgerSelect").prop("disabled", true);
                $("#ledgerCategorySave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("ledgerCategoryMessageDiv", successMessage, "");
                setTimeout(function () {
                    LedgerCategoryMasterCreation();
                }, 3000);

            } else {
                displaySmallErrorMessagesInRed("ledgerCategoryMessageDiv", "DDO Creation Failed" + "");
            }
        });
    }
}

function ledgerCategoryTable() {
    if (checkUserPrivelege(pvViewLedgerCategory)) {

        $("#ledgerCategoryListMainMenu").text("").append('<div id="ledgerCategoryListPanel" class="panel panel-blue" />');
        $("#ledgerCategoryListPanel").append('<div id="ledgerCategoryListHeading" class="panel-heading" />');
        $("#ledgerCategoryListHeading").append('<class="panel-title"  data-toggle="collapse" style="font-weight:bold;font-size:15px;" data-parent="#accordion2"><center>List of Ledger Category </center><div class="pull-right" style="position: relative;bottom: 15px;cursor:pointer;" id="LedgerCatListCollp"><span class="glyphicon glyphicon-minus-sign"></span></div>');
        $("#ledgerCategoryListPanel").append('<div id="collapseOne2" class="panel-collapse collapse in pal" />');
        $("#LedgerCatListCollp").click(function () {
            $("#collapseOne2").toggle();
            if ($("#LedgerCatListCollp span").hasClass("glyphicon-minus-sign")) {
                $("#LedgerCatListCollp").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#LedgerCatListCollp").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append('<div id="ledgerCategoryListBody" class = "panel-body pan" />');
        $("#ledgerCategoryListBody").append('<div id="panelRow" class="row" />');

        $("#ledgerCategoryListBody").append('<div id="ledgerCategoryListErrorMsgId" />');
        $("#ledgerCategoryListBody").append('<div id="ledgerCategoryListMainBody" class="table-responsive" />');
        $("#ledgerCategoryListMainBody").append('<table id="ledgerCategoryTable" class="table table-bordered" />');
        $("#ledgerCategoryTable").append('<thead id="ledgerCategoryTableHeadId" />');
        $("#ledgerCategoryTable").append('<tbody id="ledgerCategoryTableBodyId" />');

        $("#ledgerCategoryTableHeadId").append('<tr id="ledgerCategoryTableHeadIdTrHead"><th>Sno</th><th>Ledger Name</th><th>Ledger Category</th><th>Order Level</th><th>Remarks</th>');
        if (checkUserPrivelege(pvUpdateLedgerCategory)) {
            $("#ledgerCategoryTableHeadIdTrHead").append('<th><center>Edit</center</th>');
        }
        if (checkUserPrivelege(pvDeleteLedgerCategory)) {
            $("#ledgerCategoryTableHeadIdTrHead").append('<th><center>Delete</center></th>');
        }
        $.post(server_base_url + "/financial/account/LedgerCategory/ViewList", {
        }).done(function (data) {
            if (data.statuscode == NoData) {
                displaySmallErrorMessagesInRed("ledgerCategoryListErrorMsgId", NoDataFoundMessage + "");
            }
            if (data == fail) {
                displaySmallErrorMessagesInRed("ledgerCategoryListErrorMsgId", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("ledgerCategoryListErrorMsgId", unauthorizedMessage + "");
            } else if (data == statusException) {
                displaySmallErrorMessagesInRed("ledgerCategoryListErrorMsgId", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displaySmallErrorMessagesInRed("ledgerCategoryListErrorMsgId", "No User available" + "");
            } else if (data != null) {
                var sno = 0;
                var mainData = data.result;
                for (var i = mainData.length - 1; i >= 0; i--) {
                    sno++;
                    var subData = mainData[i];
                    var parentLedger = subData.parentLedgerName;
                    if (parentLedger == "undefined" || parentLedger == undefined) {
                        parentLedger = "";
                    }
                    $("#ledgerCategoryTableBodyId").append("<tr id='" + subData._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + parentLedger + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.ledgerCategory + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.orderLevel + "</td>"
                            + "<td style='cursor:pointer;'>" + subData.ledgerDetail + "</td>");
                    if (checkUserPrivelege(pvUpdateLedgerCategory)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=editLedgerCategoryInfo('" + encodeURI(JSON.stringify(subData)) + "','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a></center>' + "</td>");
                    }
                    if (checkUserPrivelege(pvDeleteLedgerCategory)) {
                        $("#" + subData._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteLedgerCategory','ledgerCategoryTable','" + subData._id.$oid + "')>" + ' <center><i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a></center>' + "</td>");
                    }
                }
                $("#ledgerCategoryTable").dataTable();
            } else {
                displaySmallErrorMessagesInRed("ledgerCategoryListErrorMsgId", NoDataFoundMessage + "");
            }
        });
    }
}

function editLedgerCategoryInfo(parentLedgerData, id) {
    if (checkUserPrivelege(pvUpdateLedgerCategory)) {
        $('select[name^="parentLedger"]').focus();

        if (parentLedgerData == null || parentLedgerData == "" || parentLedgerData == undefined) {
            return false;
        }
        $("#ledgerCategoryTableBodyId tr").css("background-color", "white");
        $("#ledgerCategoryTableBodyId tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        parentLedgerData = JSON.parse(decodeURI(parentLedgerData));
        $("#parentLedgerSelect").val(parentLedgerData.parentLedger);
        $("#ledgerCategory").val(parentLedgerData.ledgerCategory);
        $("#ledgerDetail").val(parentLedgerData.ledgerDetail);
        $("#orderLevel").val(parentLedgerData.orderLevel);
        $("#messageDiv").text("");
        $("#ledgerCategoryButton").text("").append("<center><button id='updateButton' onclick=updateLedgerCategory('" + id + "') class='btn btn-success' style='height:40px;width:80px'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='LedgerCategoryMasterCreation()' id='ddoUpdateReset' class='btn btn-warning' style='height:40px;width:80px'>Back</button></center>");
    }
}

function updateLedgerCategory(ledgerCategoryId) {
    if (checkUserPrivelege(pvUpdateLedgerCategory)) {
        var parentLedger = $("#parentLedgerSelect").val();
        var ledgerCategory = $("#ledgerCategory").val();
        var orderLevel = $("#orderLevel").val();
        var ledgerDetail = $("#ledgerDetail").val();

        if (parentLedger == "0" || ledgerCategory == "undefined" || ledgerCategory == "" || orderLevel == "undefined" || orderLevel == "") {
            displaySmallErrorMessagesInRed("ledgerCategoryMessageDiv", "Please Fill * fields" + "");
            return false;
        }

        var ledgerCategoryUpdateJson = {
            parentLedger: parentLedger,
            ledgerCategory: ledgerCategory,
            orderLevel: orderLevel,
            ledgerDetail: ledgerDetail
        }

        var loginUserId = getUserSessionElement("userId");

        $.get(server_base_url + "/financial/account/LedgerCategory/Update", {
            ledgerCategoryUpdateJson: JSON.stringify(ledgerCategoryUpdateJson),
            ledgerCategoryId: ledgerCategoryId,
            userid: loginUserId
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("ledgerCategoryMessageDiv", failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("ledgerCategoryMessageDiv", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("ledgerCategoryMessageDiv", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == duplicate_Message) {
                displayErrorMessages("ledgerCategoryMessageDiv", "" + existed + "");
                setTimeout(function () {
                    $("#ledgerCategoryMessageDiv").text("").val("");
                }, 3000);
            } else if (data != null) {
                $("#orderLevel").prop("disabled", true);
                $("#ledgerDetail").prop("disabled", true);
                $("#ledgerCategory").prop("disabled", true);
                $("#parentLedgerSelect").prop("disabled", true);
                $("#ledgerCategorySave").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("ledgerCategoryMessageDiv", successMessage, "");
                setTimeout(function () {
                    LedgerCategoryMasterCreation();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("ledgerCategoryMessageDiv", "Ledger Category Updation Failed" + "");
            }
        });
    }

}

function deleteLedgerCategory(categoryLedgerId) {
    if (checkUserPrivelege(pvDeleteLedgerCategory)) {
        var currentLoginUser = getUserSessionElement("userId");
        $.get(server_base_url + "/financial/account/LedgerCategory/Delete", {
            currentuser: currentLoginUser,
            categoryLedgerId: categoryLedgerId
        }).done(function (data) {
            if (data.statuscode == fail) {
                displaySmallErrorMessagesInRed("ledgerCategoryListErrorMsgId", failMessage + "");
            } else if (data.statuscode == unauthorized) {
                displaySmallErrorMessagesInRed("ledgerCategoryListErrorMsgId", unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
                displaySmallErrorMessagesInRed("ledgerCategoryListErrorMsgId", statusExceptionMessage + "");
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
            } else if (data != null) {
                displaySuccessMessages("ledgerCategoryListErrorMsgId", deleteMessage, "");
                setTimeout(function () {
                    ledgerCategoryTable();
                }, 3000);
            } else {
                displaySmallErrorMessagesInRed("ledgerCategoryListErrorMsgId", "DDO Deletion Failed" + "");
            }
        });
    }
}