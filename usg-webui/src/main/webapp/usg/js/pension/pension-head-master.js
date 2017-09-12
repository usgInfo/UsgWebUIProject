/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayPensionHead(divId) {
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayPensionHorizontalBar()">Pension</a></label>>> <label><a href="javascript:pensionMasters()">Pension Master</a></label> >><label>Pension Head Master</label>');
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center>Pension Head Master</center>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
    $("#panelMainBody").append("<div id='panelRow' class='row' />");
    $("#panelRow").append("<div id='pensionpensionHeadlistMessageDiv'  ></div>");
    $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
    $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
    $("#FieldGroup").append("<input type='hidden' id='bid' >");
    getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
    $("#Row1Col1").append(getLabel_InputWithSpan("Head Name", "required", "headName", "Enter Head Name", ""));
    $("#Row1Col2").append(getLabel_InputWithSpan("Short Name", "required", "shortName", "Enter Short Name", ""));
    getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
    $("#Row3Col1").append(getLabel("Head Type", "required") + "" + getDropDown("headType"));
    $("#Row3Col2").append(getLabel("Fixed Code", "required") + "" + getDropDown("fixedCode"));
    getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
    $("#Row2Col1").append(getLabel_InputWithSpan("Amount", "required", "pensionAmount", "Enter Amount", "onkeypress='return numericVal(event)'"));
    $("#Row2Col2").append(getLabel("Formula", "") + "" + getDropDown("pensionFormula"));
    getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
    $("#Row4Col1").append(getLabel_InputWithSpan("Display Order", "required", "displayOrder", "Enter Display Order", "onkeypress='return numericVal(event)'"));
    $("#Row4Col2").append(getLabel_InputWithSpan("Order Level", "required", "orderLevel", "Enter Order Level", "onkeypress='return numericVal(event)'"));
    $("#FieldGroup").append('<div class="row" id="row5">');
    $("#row5").append('<div class="col-md-6" id="Row5Col1">');
    $("#Row5Col1").append('<div class="form-group has-success" id="form_group_div">');
    $("#Row5Col1").append('<label for="remarks" class="control-label">Remarks</label>');
    $("#Row5Col1").append('<textarea id="remarks" type="text" placeholder="remarks" class="form-control"/>');
    $("#row5").append('<div class="col-md-6" id="Row5Col2">');
    $("#Row5Col2").append('<div class="form-group has-success" id="form_group_div1">');
    $("#Row5Col2").append('<label for="isPartOfGross" class="control-label">Is Part Of Gross</label>');
    $("#Row5Col2").append('<input id="isPartOfGross" type="checkbox"  value="YES" class="form-group" width="5px" height="5px" style="margin-right:5px"/>');
    $("#panelMainBody").append("<div id='row6' class='row' />");
    $("#row6").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='savePensionHead' value='Save' class='btn btn-success bn'  onclick='pensionHeadValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick='resetPensionHead()' class='btn btn-warning bn' id='reserPensionHead' name='reset' value='reset'>Reset</button></center></div>");
    setHeadType("", "headType");
    setFixedCode("", "fixedCode");
    getAllPensionFormulas();
    $("#mainTabMenu").append("<div id='pensionHeadListPanel' class='panel panel-blue' />");
    $("#pensionHeadListPanel").append("<div id='pensionHeadListPanelHeading' class='panel-heading' />");
    $("#pensionHeadListPanelHeading").append("<h4 id='pensionHeadfirstHeader1' class='panel-title' />");
    $("#pensionHeadfirstHeader1").append("<class='panel-title' a data-toggle='collapse' class='panel_font' data-parent='#accordion2' href='#collapseOne3'><center>List of Pension Head</center>");
    $("#pensionHeadListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#collapseOne3").append("<div id='pensionHeadPanellistpanelMainBody' class = 'panel-body' />");
    $("#pensionHeadPanellistpanelMainBody").append("<div id='pensionHeadlistMessageDiv'  ></div>");
    $("#pensionHeadPanellistpanelMainBody").append("<div id='pensionHeadlistpanelRow' class='row' />");
    $("#pensionHeadlistpanelRow").append("<div id='pensionHeadLeftstatuslistpanelRow' class='table-responsive' />");
    viewpensionHeadList('pensionHeadLeftstatuslistpanelRow');
}
$(document).on('change', '#pensionAmount', function () {
    $("#formula").prop("disabled", true);
});
$(document).on('change', '#pensionFormula', function () {
    $("#amount").prop("disabled", true);
});
function resetPensionHead() {
    $('#headName').val("");
    $('#shortName').val("");
    $('#pensionFormula').val("");
    $('#fixedCode').val("");
    $('#displayOrder').val("");
    $('#orderLevel').val("");
    $('#headType').val("");
    $('#pensionAmount').val("");
    $('#remarks').val("");
    $("#checkbox").prop("checked", false);

    $('#headNameErr').text("");
    $('#shortNameErr').text("");
    $('#headdTypeErr').text("");
    $('#fixedCodeErr').text("");
    $('#formulaErr').text("");
    $('#amountErr').text("");
    $('#displayOrderErr').text("");
    $('#remarksErr').text("");
    $('#orderLevelErr').text("");

    removeSomeClass("Row5Col2", "has-error");
    removeSomeClass("Row5Col1", "has-error");
    removeSomeClass("Row4Col2", "has-error");
    removeSomeClass("Row4Col1", "has-error");
    removeSomeClass("Row3Col2", "has-error");
    removeSomeClass("Row3Col1", "has-error");
    removeSomeClass("Row2Col2", "has-error");
    removeSomeClass("Row2Col1", "has-error");
    removeSomeClass("Row1Col2", "has-error");
    removeSomeClass("Row1Col1", "has-error");



}
function pensionHeadValidation() {
    var headName = $("#headName").val();
    var shortName = $("#shortName").val();
    var headType = $("#headType").val();
    var fixedCode = $("#fixedCode").val();
    var amount = $("#pensionAmount").val();
    var formula = $("#pensionFormula").val();
    var displayOrder = $("#displayOrder").val();
    var orderLevel = $("#orderLevel").val();

    if (headName == "" || headName == null || shortName == "" || shortName == null || headType == "" || headType == null || fixedCode == "" || fixedCode == null ||
            displayOrder == null || displayOrder == "" || orderLevel == "" || orderLevel == null) {
        displayLargeErrorMessagesInCenterInRed("pensionpensionHeadlistMessageDiv", "Please fill all mandatory fields");
        return false;
    } else if ((amount == "" || amount == undefined || amount == null) && (formula == "" || formula == undefined || formula == null)) {
        displayLargeErrorMessagesInCenterInRed("pensionpensionHeadlistMessageDiv", "Please Select Either formula or Emter amount");
        return false;
    } else {

        if (headName == "") {
            $("#headName").focus();

            displaySmallErrorMessages("headNameErr", "Please Enter Head Name.");
        } else if (headName != "") {
            if (!headName.match(alphaNumericWithSpacialCharPattern())) {
                $("#headName").focus();

                displaySmallErrorMessages("headNameErr", "Only alphabets are allowed");
                return false;
            }
        }
        if (shortName == "") {
            $("#shortName").focus();
        
            displaySmallErrorMessages("shortNameErr", "Please Enter Short Name.");
            return false;
        }

        if (headType == null) {
            $("#headType").focus();
         
            displaySmallErrorMessages("headTypeErr", "Please Select Head Type.");
        }
        if (fixedCode == null) {
            $("#fixedCode").focus();
            addSomeClass("Row3Col2", "has-error");
            displaySmallErrorMessages("fixedCodeErr", "Please Select Fixed Code.");
            return false;
        }

        if (amount == "") {
            $("#amount").focus();
          
            displaySmallErrorMessages("amountErr", "Please Enter Amount.");
            return false;
        }
        if (displayOrder == "") {
            $("#displayHeadOrder").focus();
          
            displaySmallErrorMessages("displayOrderErr", "Please Enter Order.");
            return false;
        }
        if (orderLevel == "") {
            $("#orderLevel").focus();
           
            displaySmallErrorMessages("orderLevelErr", "Please Enter Order Level.");
            return false;
        }
        if (shortName != "") {
            if (!shortName.match(alphaNumericWithSpacialCharPattern())) {
                $("#shortName").focus();
              
                displaySmallErrorMessages("shortNameErr", "Spacial Character Not allowed othar than - and space");
                return false;
            } else {
                savePensionHead();
            }
        }
    }
}
function savePensionHead() {

    var pensionHeadName = $('#headName').val();
    var pensionShortName = $('#shortName').val();
    var pensionheadType = $('#headType').val();
    var fixedCode = $('#fixedCode').val();
    var pensionAmt = $('#pensionAmount').val();
    var headFormula = $('#pensionFormula').val();
    var displayHeadOrder = $('#displayOrder').val();
    var orderLevel = $('#orderLevel').val();
    var headRemarks = $('#remarks').val();
    var partOfGross = $('#isPartOfGross').val();

    var pensionHeadjson = {
        pensionHeadName: pensionHeadName,
        pensionShortName: pensionShortName,
        pensionheadType: pensionheadType,
        fixedCode: fixedCode,
        pensionAmount: pensionAmt,
        headFormula: headFormula,
        displayHeadOrder: displayHeadOrder,
        orderLevel: orderLevel,
        headRemarks: headRemarks,
        partOfGross: partOfGross

    }

    $.post(server_base_url + "/pension/master/PensionHead/Save", {
        savePensionHeadJson: JSON.stringify(pensionHeadjson),
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("pensionpensionHeadlistMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pensionpensionHeadlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pensionpensionHeadlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {

            $("#headName").prop("disabled", true);
            $("#shortName").prop("disabled", true);
            $("#headType").prop("disabled", true);
            $("#fixedCode").prop("disabled", true);
            $("#pensionAmount").prop("disabled", true);
            $("#formula").prop("disabled", true);
            $("#displayOrder").prop("disabled", true);
            $("#orderLevel").prop("disabled", true);
            $("#remarks").prop("disabled", true);
            $("#savePensionHead").attr('disabled', true);
            $("#resetPensionHead").attr('disabled', true);
            displaySuccessMessages("pensionpensionHeadlistMessageDiv", successMessage, "");
            setTimeout(function () {
                displayPensionHead();
            }, 1000);
        }
    });

}
function numericVal(elementRef) {
    var keyCodeEntered = (event.which) ? event.which : (window.event.keyCode) ? window.event.keyCode : -1;
    if ((keyCodeEntered >= 48) && (keyCodeEntered <= 57)) {
        return true;
    } else if (keyCodeEntered == 46) {
        if ((elementRef.value) && (elementRef.value.indexOf('.') <= 1))
            return false;
        else
            return true;
    }
    return false;
}

function viewpensionHeadList(divId) {
    $("#" + divId).text("").append("<div class='tab-pane' id='viewpensionHead'/>");
    $("#viewpensionHead").append("<div class='table-responsive' id='viewpensionHeadSectionTableDiv' />");
    $("#viewpensionHeadSectionTableDiv").append("<table class='table table-bordered table-striped table-warning mb30' id='displaypensionHeadTable' />");
    $("#displaypensionHeadTable").append("<thead class=''><tr>"
            + " <th class='sno_width'> S.No</th>"
            + "<th class='table_col_width'><i class='fa'></i>Head Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Short Name</th>"
            + "<th class='table_col_width'><i class='fa'></i>Fixed Code</th>"
            + "<th class='table_col_width'><i class='fa'></i>Display Order</th>"
            + "<th class='table_col_width'><i class='fa'></i>Order Level</th>"
            + "<th class='table_anchor_width'><i class='fa'></i>Edit</th>"
            + "<th class='table_anchor_width'><i class='fa'></i> Delete</th>"
            + "</tr></thead>");
    $.get(server_base_url + "/pension/master/PensionHead/ViewList", {
    }).done(function (bdata) {

        if (bdata == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (bdata == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (bdata == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        }
        if (bdata != null) {
            if (bdata.length > 0) {
                var sno = 0;
                $("#displaypensionHeadTable").append("<tbody id='displaypensionHeadTableBody' class='table-striped table-bordered' />");
                for (var i = bdata.length - 1; i >= 0; i--) {
                    sno++;
                    var objJson = {
                        aid: bdata[i]._id.$oid,
                        pensionHeadName: bdata[i].pensionHeadName,
                        pensionShortName: bdata[i].pensionShortName,
                        fixedCode: bdata[i].fixedCode,
                        headType: bdata[i].pensionheadType,
                        headFormula: bdata[i].headFormula,
                        displayHeadOrder: bdata[i].displayHeadOrder,
                        orderLevel: bdata[i].orderLevel,
                        headRemarks: bdata[i].headRemarks,
                        partOfGross: bdata[i].partOfGross,
                        pensionAmount: bdata[i].pensionAmount
                    };
                    objJson = JSON.stringify(objJson);
                    $("#displaypensionHeadTableBody").append("<tr id='" + bdata[i].status + "' class='table_row' >"
                            + "<td>" + sno + "</td>"
                            + "<td class='table_row'>" + bdata[i].pensionHeadName + "</td>"
                            + "<td class='table_row'>" + bdata[i].pensionShortName + "</td>"
                            + "<td class='table_row'>" + bdata[i].fixedCode + "</td>"
                            + "<td class='table_row'>" + bdata[i].displayHeadOrder + "</td>"
                            + "<td class='table_row'>" + bdata[i].orderLevel + "</td>"
                            + "<td> <a href='javascript:void(0);' onclick=updatepensionHead('" + encodeURI(objJson) + "') class='anchor_edit'><i class='fa fa-edit'></i>Edit</a></td>"
                            + "<td> <a href='javascript:void(0);' onclick=deletePopUp('deletepensionHeadData','displayPensionHead','" + bdata[i]._id.$oid + "')  class='anchor_delete' ><i class='fa fa-trash-o'></i>Delete</a></td></tr>");
                }
                $('#displaypensionHeadTable').append("</table>");
                $('#displaypensionHeadTable').dataTable();
            }
        }
    });
}
function updatepensionHead(obj) {
    obj = decodeURI(obj);
    obj = JSON.parse(obj);
    $("#headName").val(obj.pensionHeadName);
    $("#shortName").val(obj.pensionShortName);
    $("#headType").val(obj.pensionheadType);
    $("#fixedCode").val(obj.fixedCode);
    $("#pensionAmount").val(obj.pensionAmount);
    $("#pensionFormula").val(obj.headFormula);
    $("#displayOrder").val(obj.displayHeadOrder);
    $("#orderLevel").val(obj.orderLevel);
    $("#IsPartOfGross").val(obj.partOfGross);
    $("#remarks").val(obj.headRemarks);
//    $("#pensionFormula option:contains(" + obj.headFormula + ")").attr('selected', 'selected');
    $("#headType option:contains(" + obj.pensionheadType + ")").attr('selected', 'selected');
    $("#headName").prop("readonly", false);
    $("#shortName").prop("readonly", false);
    $("#fixedCode").prop("readonly", false);
    $("#amount").prop("readonly", false);
    $("#formula").prop("readonly", false);
    $("#displayOrder").prop("readonly", false);
    $("#orderLevel").prop("readonly", false);
    $("#IsPartOfGross").prop("readonly", false);
    $("#headType").prop("readonly", false);
    $("#row6").text("").append("<center><button id='updateButton' onclick=updatePensionHeadData('" + obj.aid + "') class='btn btn-success bn' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick='displayPensionHead()'  class='btn btn-warning bn' >Back</button></center>");
}
function updatePensionHeadData(id) {
    var pensionHeadName = $('#headName').val();
    var pensionShortName = $('#shortName').val();
    var pensionheadType = $('#headType').val();
    var fixedCode = $('#fixedCode').val();
    var pensionAmount = $('pensionAmount').val();
    var headFormula = $('#pensionFormula').val();
    var displayHeadOrder = $('#displayOrder').val();
    var orderLevel = $('#orderLevel').val();
    var headRemarks = $('#remarks').val();
    var partOfGross = $('#isPartOfGross').val();

    var pensionHeadjson = {
        pensionHeadName: pensionHeadName,
        pensionShortName: pensionShortName,
        pensionheadType: pensionheadType,
        fixedCode: fixedCode,
        pensionAmount: pensionAmount,
        headFormula: headFormula,
        displayHeadOrder: displayHeadOrder,
        orderLevel: orderLevel,
        headRemarks: headRemarks,
        partOfGross: partOfGross
    }

    $.post(server_base_url + "/pension/master/PensionHead/Update", {
        assJson: JSON.stringify(pensionHeadjson),
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displaySmallErrorMessagesInRed("pensionpensionHeadlistMessageDiv", "Invalid username / password" + "<br/><br/>");
        } else if (data == unauthorized) {
            displaySmallErrorMessagesInRed("pensionpensionHeadlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displaySmallErrorMessagesInRed("pensionpensionHeadlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data != null) {

            $("#headName").prop("disabled", true);
            $("#shortName").prop("disabled", true);
            $("#headType").prop("disabled", true);
            $("#fixedCode").prop("disabled", true);
            $("#pesionAmount").prop("disabled", true);
            $("#pensionFormula").prop("disabled", true);
            $("#displayOrder").prop("disabled", true);
            $("#orderLevel").prop("disabled", true);
            $("#remarks").prop("disabled", true);
            $("#savePensionHead").attr('disabled', true);
            $("#resetPensionHead").attr('disabled', true);
            displaySuccessMessages("pensionpensionHeadlistMessageDiv", updateSuccessMessage, "");
            setTimeout(function () {
                displayPensionHead();
            }, 1000);
        }
    });
}
function deletepensionHead(id) {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
        deletepensionHeadData(id);
    }
}
function deletepensionHeadData(id) {
    $.post(server_base_url + "/pension/master/PensionHead/Delete", {
        id: id,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", emptyListMessage + "<br/><br/>");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", unauthorizedMessage + "<br/><br/>");
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("pensionHeadlistMessageDiv", statusExceptionMessage + "<br/><br/>");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else {
            displaySuccessMessages("pensionHeadlistMessageDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                displayPensionHead();
            }, 1000);
        }
    });
}

function getAllPensionFormulas(name, divId) {
    $.get(server_base_url + "/pension/master/Formula/ViewList", {
    }).done(function (bdata) {
        $("#pensionFormula").append("<option value=''>----Select Formula----</option>");
        for (var i = 0; i < bdata.length; i++) {
            $("#pensionFormula").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].pensionFormula + "</option>");
        }
    });
}
function setFixedCode(name, divId) {
   
     var fixedCode = ["Original Pension", "Family Pension","Residual Pension","Other"];
    $("#fixedCode").append("<option value='' selected disabled>---- Select Fixed Code ----</option>");
    for (var i = 0; i < fixedCode.length; i++) {
        $("#fixedCode").append("<option  value='" + fixedCode[i] + "' >" + fixedCode[i] + "</option>");
    }
    $("#fixedCode").val(name);
}

function setHeadType(name, divId) {
    var headType = ["Earning", "Deduction"];
    $("#" + divId).append("<option value='' selected disabled>---- Select Head Type----</option>");
    for (var i = 0; i < headType.length; i++) {
        $("#headType").append("<option  value='" + headType[i] + "' >" + headType[i] + "</option>");
    }
    $("#headType").val(name);
}

