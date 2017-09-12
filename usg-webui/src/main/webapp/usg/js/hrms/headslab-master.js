//HRMS >> HeadSlab Master
function headslabmaster(divId) {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">Head Slab Master</a>');
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Salary Master</a></label> >> <label>HeadSlab Master</label>');
    $("#" + divId).text("").append("<div id='testMainDivId' class='' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");
    $("#mainTabMenu").append("<div id='tableHeader' />");
    if (checkUserPrivelege(pvCreateHeadSlab)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue ' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Head Slab Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colHeadSlab'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colHeadSlab").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colHeadSlab span").hasClass("glyphicon-minus-sign")) {
                $("#colHeadSlab").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colHeadSlab").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<div id='pregsuccessBefore'></div>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");
        //
        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        $("#FieldGroup").append("<input type='hidden' id='Id' >");
        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("Head Name", "required") + "" + getDropDown("headName"));
        $("#Row1Col2").append(getLabel("Based On", "required") + "" + getDropDown("basedOn"));
        $("#headName").attr("onchange", "disableFormulaOrAmountUsingPreviousRecord(); basedOnHeadSlab('', 'basedOn')");
        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel("DDO", "") + "" + getDropDown("ddo"));
        $("#ddo").prop("disabled", true);
        $("#Row2Col2").append(getLabel("Salary Type", "") + "" + getDropDown("salaryType"));
        $("#salaryType").prop("disabled", true);
        getTwoColumnInRow("FieldGroup", "Row3", "Row3Col1", "Row3Col2");
        $("#Row3Col1").append(getLabel("City Category", "") + "" + getDropDown("cityCategory"));
        $("#cityCategory").prop("disabled", true);
        $("#Row3Col2").append(getLabel("City", "") + "" + getDropDown("city"));
        $("#city").prop("disabled", true);
        getTwoColumnInRow("FieldGroup", "Row4", "Row4Col1", "Row4Col2");
        $("#Row4Col1").append(getLabel("Class", "") + "" + getDropDown("clas"));
        $("#clas").prop("disabled", true);
        $("#Row4Col2").append(getLabel("Nature Type", "") + "" + getDropDown("natureType"));
        $("#natureType").prop("disabled", true);
        getTwoColumnInRow("FieldGroup", "Row6", "Row6Col1", "Row6Col2");
        $("#Row6Col1").append(getLabel_InputWithSpan("From GP", "required", "fromGP", "", "onkeypress='return validateNumber(event)' maxlength=20"));
        $("#Row6Col2").append(getLabel_InputWithSpan("To GP", "required", "toGP", "", "onkeypress='return validateNumber(event)' maxlength=20"));
        getTwoColumnInRow("FieldGroup", "Row7", "Row7Col1", "Row7Col2");
        $("#Row7Col1").append(getLabel_InputWithSpan("From Basic", "required", "fromBasic", "", "onkeypress='return validateNumber(event)' maxlength=20"));
        $("#Row7Col2").append(getLabel_InputWithSpan("To Basic", "required", "toBasic", "", "onkeypress='return validateNumber(event)' maxlength=20"));
        getTwoColumnInRow("FieldGroup", "Row8", "Row8Col1", "Row8Col2");
        $("#Row8Col1").append('<label class="control-label">Type<span class="require"> *</span></label>');
        $("#Row8Col1").append('<div class="">Amount<input onchange="toDisableFormulaTwo()" name="select" type="radio" id="typeTwo" style="margin-left:20px;margin-right:20px;">Formula<input type="radio" name="select" id="typeTwo1" onchange="toDisableFormulaTwo()"id="typeOne" style="margin-left:20px;"></div>');
        $("#Row8Col2").append(getLabel("Formula", "required") + "" + getDropDown("formulaTwo"));
        getTwoColumnInRow("FieldGroup", "Row9", "Row9Col1", "Row9Col2");
        $("#Row9Col1").append(getLabel_InputWithSpan("Amount", "required", "amount", "", "onkeypress='return validateNumber(event)' maxlength=20"));
        $("#Row9Col2").append(getLabel_InputWithSpan("Minimum Amount", "required", "minimumAmount", "", "onkeypress='return validateNumber(event)' maxlength=20"));
        getTwoColumnInRow("FieldGroup", "Row10", "Row10Col1", "Row10Col2");
        $("#Row10Col1").append(getLabel_InputWithSpan("Maximum Amount", "required", "maximumAmount", "", "onkeypress='return validateNumber(event)' maxlength=20"));
        $("#FieldGroup").append("<div id='panelRow7' class='row' />");
        $("#panelRow7").append("<div  class='col-xs-12' id='buttonRow'/><center><button type='button'  id='saveupdatebutton' value='Save' class='btn btn-success mr5'  onclick='headslabValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type='button' onclick=resetAllValuesInSpecifiedDiv('FieldGroup','ddo') class='btn btn-warning mr5' name='reset' id='resetBackBtnId' value='reset'>Reset</button></center></div>");
        $("#mainTabMenu").append("<div id='tableHeaderForList'/>");
        viewHeadSlabList("tableHeaderForList");
        viewOption("hrms/salary/Class/ViewList", "", "name", "clas", "Class");
        //   viewOption("financial/common/DDOListForOptions", "", "ddoName", "ddo", "DDO");
        viewSalaryHeadListForOption("", "salaryType");
//    viewOption("hrms/salary/SalaryHead/ViewList", "", "description", "salaryType", "Salary Type");
        viewOption("hrms/salary/CityCategory/ViewList", "", "cityCategory", "cityCategory", "City Category");
        viewOption("hrms/salary/CityCategory/ViewList", "", "cityName", "city", "City");
        viewOption("hrms/common/Nature/View", "", "natureName", "natureType", "Nature Type");
        viewOption("hrms/common/Formula/View", "", "description", "formulaOne", "Formula");
        viewOption("hrms/common/Formula/View", "", "description", "formulaTwo", "Formula");
        viewOption("hrms/salaryMaster/GetSalaryHeadHeadSlabService", "", "description", "headName", "Head Name");
        // viewOption("hrms/salary/BasedOn/ViewList", "", "basedOn", "basedOn", "Based On");
        disableform();
        basedOnHeadSlab("", "basedOn");
        $("#cityCategory").attr("onchange", "viewOptionHeadSlapforCity()");
        setTimeout(function () {
            $("#pregsuccessBefore").text("");
        }, 2100);

        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("textarea").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    }
}

function viewOptionHeadSlapforCity(name, catId)
{

    var id = $("#cityCategory").val();
    if (id == null || id == "")
    {
        id = catId;
    }
    $.get(server_base_url + "hrms/salarymaster/headslap/CityList", {
        idValue: id
    }).done(function (pdata) {

        $("#city").text("").append("<option value = '' selected>---- Select City ----</option>");
        for (var k = 0; k < pdata.length; k++) {
            if (name == pdata[k].cityName)
            {
                $("#city").append("<option  value='" + pdata[k]._id.$oid + "'selected>" + pdata[k].cityName + "</option>");
            } else
            {
                $("#city").append("<option  value='" + pdata[k]._id.$oid + "'>" + pdata[k].cityName + "</option>");
            }
        }

    });
}
function headslabValidation() {
    var saveorupdate = $("#saveorupdate").val();
    $("#headNameErr").text("");
    $("#basedOnErr").text("");
    $("#ddoErr").text("");
    $("#salaryTypeErr").text("");
    $("#cityCategoryErr").text("");
    $("#cityErr").text("");
    $("#clasErr").text("");
    $("#natureTypeErr").text("");
    $("#typeOneErr").text("");
    $("#formulaOneErr").text("");
    $("#formulaTwoErr").text("");
    $("#fromGPErr").text("");
    $("#toGPErr").text("");
    $("#fromBasicErr").text("");
    $("#toBasicErr").text("");
    $("#typeTwoErr").text("");
    $("#amountErr").text("");
    $("#minimumAmountErr").text("");
    $("#maximumAmountErr").text("");
    var headName = $("#headName").val();
    var basedOn = $("#basedOn").val();
    var fromGP = $("#fromGP").val();
    var toGP = $("#toGP").val();
    var amount = $("#amount").val();
    var maxamount = $("#maximumAmount").val();
    var minamount = $("#minimumAmount").val();
    var fromBasic = $("#fromBasic").val();
    var toBasic = $("#toBasic").val();
    var count = 0;
    var typeOne;
    var typeTwo;
    if ($('#typeOne').is(':checked')) {
        typeOne = "formula";
    } else if ($('#typeOne1').is(':checked')) {
        typeOne = "amount";
    }
    if ($('#typeTwo1').is(':checked')) {
        typeTwo = "formula";
    } else if ($('#typeTwo').is(':checked')) {
        typeTwo = "amount";
    }
    var result = 1;
    if (typeTwo == "formula")
    {
        if (maxamount == "") {
            $("#maximumAmount").focus();
            addSomeClass("toGPFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("maximumAmountErr", "Please Enter To Amount.");
            result = 0;
        } else if (maxamount != "") {
            if (!maxamount.match((numbervalidation()))) {
                $("#maximumAmount").focus();
                addSomeClass("toGPFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("maximumAmountErr", "Please enter valid To Amount.");
                result = 0;
            }
            removeSomeClass("toGPFieldGroup", "has-error");
        }

        if (minamount == "") {
            $("#minimumAmount").focus();
            addSomeClass("toGPFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("minimumAmountErr", "Please Enter To Amount.");
            result = 0;
        } else if (minamount != "") {
            if (!minamount.match((numbervalidation()))) {
                $("#minimumAmount").focus();
                addSomeClass("toGPFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("minimumAmountErr", "Please enter valid To Amount.");
                result = 0;
            }
            removeSomeClass("toGPFieldGroup", "has-error");
        }
    } else
    {
        if (amount == "") {
            $("#amount").focus();
            addSomeClass("toGPFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("amountErr", "Please Enter To Amount.");
            result = 0;
        } else if (amount != "") {
            if (!amount.match((numbervalidation()))) {
                $("#minimumAmount").focus();
                addSomeClass("toGPFieldGroup", "has-error");
                displaySmallErrorMessagesInRed("amountErr", "Please enter valid To Amount.");
                result = 0;
            }
            removeSomeClass("toGPFieldGroup", "has-error");
        }
    }
    if (toGP == "") {
        $("#toGP").focus();
        addSomeClass("toGPFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("toGPErr", "Please Enter To GP.");
        result = 0;
    } else if (toGP != "") {
        if (!toGP.match((numbervalidation()))) {
            $("#toGP").focus();
            addSomeClass("toGPFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("toGPErr", "Please enter valid To GP.");
            result = 0;
        }
        removeSomeClass("toGPFieldGroup", "has-error");
    }
    if (fromGP == "") {
        $("#fromGP").focus();
        addSomeClass("fromGPFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("fromGPErr", "Please enter From GP.");
        result = 0;
    } else if (fromGP != "") {
        if (!fromGP.match((numbervalidation()))) {
            $("#fromGP").focus();
            addSomeClass("fromGPFieldGroup", "has-error");
            displaySmallErrorMessagesInRed("fromGPErr", "Please enter valid From GP.");
            result = 0;
        }
        removeSomeClass("fromGPFieldGroup", "has-error");
    }
    if (toBasic == "") {
        $("#toBasic").focus();
        addSomeClass("toGPFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("toBasicErr", "Please Enter To Basic.");
        result = 0;
    }

    if (fromBasic == "") {
        $("#fromBasic").focus();
        addSomeClass("toGPFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("fromBasicErr", "Please Enter From Basic.");
        result = 0;
    }
    if (basedOn == null) {
        $("#basedOn").focus();
        addSomeClass("basedOnFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("basedOnErr", "Please Select Based On.");
        result = 0;
    } else if (basedOn != null) {
        removeSomeClass("basedOnFieldGroup", "has-error");
    }
    if (headName == null) {
        $("#headName").focus();
        addSomeClass("headNameFieldGroup", "has-error");
        displaySmallErrorMessagesInRed("headNameErr", "Please Select Nature Type.");
        result = 0;
    } else if (headName != null) {
        removeSomeClass("headNameFieldGroup", "has-error");
    }
    if (result != 0) {
        if (saveorupdate == "save") {
            saveHeadSlabDetails();
        } else {
            updateHeadSlabDetails();
        }
    }

}
function saveHeadSlabDetails() {
    if (checkUserPrivelege(pvCreateHeadSlab)) {
        var typeOne;
        var typeTwo;
        if ($('#typeOne').is(':checked')) {
            typeOne = "formula";
        } else if ($('#typeOne1').is(':checked')) {
            typeOne = "amount";
        }
        if ($('#typeTwo1').is(':checked')) {
            typeTwo = "formula";
        } else if ($('#typeTwo').is(':checked')) {
            typeTwo = "amount";
        }
        var headslabJson = {
            headName: $("#headName").val(),
            basedOn: $("#basedOn").val(),
            ddo: $("#ddo").val(),
            salaryType: $("#salaryType").val(),
            cityCategory: $("#cityCategory").val(),
            city: $("#city").val(),
            clas: $("#clas").val(),
            natureType: $("#natureType").val(),
            typeOne: typeOne,
            formulaOne: $("#formulaOne").val(),
            fromGP: $("#fromGP").val(),
            toGP: $("#toGP").val(),
            fromBasic: $("#fromBasic").val(),
            toBasic: $("#toBasic").val(),
            typeTwo: typeTwo,
            formulaTwo: $("#formulaTwo").val(),
            amount: $("#amount").val(),
            minimumAmount: $("#minimumAmount").val(),
            maximumAmount: $("#maximumAmount").val()
        };
        $.post(server_base_url + "hrms/salary/HeadSlab/Save", {
            headslabJson: JSON.stringify(headslabJson),
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            } else if (data == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else {
                scrolupfunction();
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function () {
                    headslabmaster("dashBoardBodyMainDiv");

                }, 4000);

            }
        });
    }
}
function updateHeadSlabDetails() {
    if (checkUserPrivelege(pvUpdateHeadSlab)) {
        var Id = $("#Id").val();
        var typeOne;
        var typeTwo;
        if ($('#typeOne').is(':checked')) {
            typeOne = "formula";
        } else if ($('#typeOne1').is(':checked')) {
            typeOne = "amount";
        }
        if ($('#typeTwo1').is(':checked')) {
            typeTwo = "formula";
        } else if ($('#typeTwo').is(':checked')) {
            typeTwo = "amount";
        }
        var headslabJson = {
            headName: $("#headName").val(),
            basedOn: $("#basedOn").val(),
            ddo: $("#ddo").val(),
            salaryType: $("#salaryType").val(),
            cityCategory: $("#cityCategory").val(),
            city: $("#city").val(),
            clas: $("#clas").val(),
            natureType: $("#natureType").val(),
            typeOne: typeOne,
            formulaOne: $("#formulaOne").val(),
            fromGP: $("#fromGP").val(),
            toGP: $("#toGP").val(),
            fromBasic: $("#fromBasic").val(),
            toBasic: $("#toBasic").val(),
            typeTwo: typeTwo,
            formulaTwo: $("#formulaTwo").val(),
            amount: $("#amount").val(),
            minimumAmount: $("#minimumAmount").val(),
            maximumAmount: $("#maximumAmount").val()
        };
        $.post(server_base_url + "hrms/salary/HeadSlab/Update", {
            headslabJson: JSON.stringify(headslabJson),
            headslabId: Id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("pregsuccessBefore", "No User available" + "");
            } else {
                disableDiv("FieldGroup");
                setTimeout(function () {
                    headslabmaster("dashBoardBodyMainDiv");
                    scrolupfunction();
                    displaySuccessMessages("pregsuccessBefore", updateMessage, "");
                }, 4000);
            }
        });
    }
}
function wipeAllHeadSlabData() {
    resetAllValuesInSpecifiedDiv("FieldGroup")
    $("#formulaOne").removeAttr("disabled");
    $("#formulaTwo").removeAttr("disabled");
}
function viewHeadSlabList(divId)
{
    if (checkUserPrivelege(pvViewHeadSlab)) {
        $("#" + divId).text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
        $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
        $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
        $("#firstHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of Head Slab</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colHeadSlabList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
        $("#colHeadSlabList").click(function () {
            $("#collapseOne3").toggle();
            if ($("#colHeadSlabList span").hasClass("glyphicon-minus-sign")) {
                $("#colHeadSlabList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colHeadSlabList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' style='overflow-x:auto;' />");
        $("#listpanelMainBody").append("<div id='listpanelRow' class='row table-responsive' />");
        $("#listpanelRow").append("<div  id='ErrorDiv'/>");

        $("#listpanelRow").append("<div class='' id='viewUserSectionTableDiv' />");
        $("#viewUserSectionTableDiv").append("<table class='table table-bordered' id='displayHeadSlabTable' />");
        $("#displayHeadSlabTable").append("<thead class=''><tr id='headSlabTableHeadId'>"
                + " <th class='sno_width'> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Head Name</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>DDO</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Salary Type</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>City Category</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>City</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Class</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Nature</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Type</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>From GP</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>To GP</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Amount</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Formula</th>");
        if (checkUserPrivelege(pvUpdateHeadSlab)) {
            $("#headSlabTableHeadId").append("<th class='table_anchor_width'><i ></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteHeadSlab)) {
            $("#headSlabTableHeadId").append("<th class='table_anchor_width'><i  style='font-size:21px;'></i> Delete</th>");
        }
        $.get(server_base_url + "hrms/salary/HeadSlab/ViewList", {
        }).done(function (bdata) {
            if (bdata == fail) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", noDataAvailable + "");
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + unauthorizedMessage + "");
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("ErrorDiv", "" + noDataAvailable + "");
            } else {
                if (bdata != null) {
                    if (bdata.length > 0) {
                        var sno = 0;
                        $("#displayHeadSlabTable").append("<tbody id='displayHeadSlabTableBody' class='table-striped table-bordered' />");
                        for (var i = bdata.length - 1; i >= 0; i--) {
                            sno++;
                            var headslabjson;
                            headslabjson = JSON.stringify(bdata[i]);
                            $("#displayHeadSlabTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].headName + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].ddo + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].salaryType + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].cityCategory + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].city + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].clas + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].natureType + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].typeTwo + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].fromGP + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].toGP + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].amount + "</td>"
                                    + "<td style='cursor:pointer;'>" + bdata[i].formulaTwo + "</td>");
                            if (checkUserPrivelege(pvUpdateHeadSlab)) {
                                $("#" + bdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=updateheadslab('" + encodeURI(headslabjson) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteHeadSlab)) {
                                $("#" + bdata[i]._id.$oid).append("<td onclick=deletePopUp('deleteheadslab','viewHeadSlabList','" + bdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px" >Delete</a>' + "</td>");
                            }
                        }
                        $('#displayHeadSlabTable').dataTable();
                        $('#displayHeadSlabTable').append("</table>");
                    }
                }
            }
        });
    }
}
function updateheadslab(obj) {
    //  disableform();

    if (checkUserPrivelege(pvUpdateHeadSlab)) {
        scrolupfunction();
        $("#pregsuccessBefore").text("");
        obj = JSON.parse(decodeURI(obj));
        $("#basedOn option:contains(" + obj.basedOn + ")").attr('selected', 'selected');
        $("#headName option:contains(" + obj.headName + ")").attr('selected', 'selected');
        disableParticularFiledsUsingBasedOnValueInUpdate(encodeURI(JSON.stringify(obj)));
        $("#formulaOne option:contains(" + obj.formulaOne + ")").attr('selected', 'selected');
        $("#formulaTwo option:contains(" + obj.formulaTwo + ")").attr('selected', 'selected');
        $("#typeOne1").prop('checked', true);
        if (obj.typeOne == "amount") {
            $("#typeOne").addClass('checked', true);
            $("#typeOne1").addClass('checked', false);
        } else if (obj.typeOne == "formula") {
            $("#typeOne1").addClass('checked', true);
            $("#typeOne").addClass('checked', false);
        }
        if (obj.typeTwo == "amount") {
            $("#typeTwo").prop('checked', true);
            $("#typeTwo1").prop('checked', false);
        } else if (obj.typeTwo == "formula") {
            $("#typeTwo").prop('checked', false);
            $("#typeTwo1").prop('checked', true);
        }
        $("#basedOn").val(obj.basedOn);
//    $("#cityName").val(obj.city);
        $("#city").val(obj.city);
        $("#fromGP").val(obj.fromGP);
        $("#displayHeadSlabTableBody tr").css("background-color", "white");
        $("#displayHeadSlabTableBody tr" + "#" + obj._id.$oid).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#toGP").val(obj.toGP);
        $("#fromBasic").val(obj.fromBasic);
        $("#toBasic").val(obj.toBasic);
        $("#amount").val(obj.amount);
        $("#Id").val(obj._id.$oid);
        $("#saveorupdate").val("update");
        $("#saveupdatebutton").text("").text("Update");
        addButtonOnclickFunction("resetBackBtnId", "Back", "headslabmaster('" + DashboardMainDivID + "')");
        toDisableFormulaTwoInUpdate(obj.typeTwo, encodeURI(JSON.stringify(obj)));
        setTimeout(function () {
            $("#minimumAmount").val(obj.minimumAmount);
            $("#maximumAmount").val(obj.maximumAmount);
        }, 1200);
    }

}
function deleteheadslab(id) {
    if (checkUserPrivelege(pvDeleteHeadSlab)) {

        $.post(server_base_url + "hrms/salary/HeadSlab/Delete", {
            headslabId: id,
            userId: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("authonticationMsgId", "Invalid username / password");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("authonticationMsgId", unauthorizedMessage);
            } else if (data == statusException) {
                displayErrorMessages("authonticationMsgId", statusExceptionMessage);
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == null) {
                displayErrorMessages("authonticationMsgId", "No User available");
            } else {
                displaySuccessMessages("ErrorDiv", "Deleted Succesfully");
                setTimeout(function () {
                    viewHeadSlabList("tableHeaderForList");
                }, 4000);
            }
        });
    }
}
function toDisableFormulaOne() {
    if ($('#typeOne').is(':checked')) {
        $("#formulaOne").prop("disabled", false);
    } else if ($('#typeOne1').is(':checked')) {
        $("#formulaOne").prop("disabled", true);
        $("#formulaOne").val("");
    }
}
function toDisableFormulaTwo() {
    if ($('#typeTwo').is(':checked')) {
        $("#formulaTwo").prop("disabled", true);
        $("#amount").prop("disabled", false);
        $("#maximumAmount").val("");
        $("#maximumAmount").prop("disabled", true);
        $("#minimumAmount").val("");
        $("#minimumAmount").prop("disabled", true);
        $("#formulaTwo").val("");
    } else if ($('#typeTwo1').is(':checked')) {
        $("#formulaTwo").prop("disabled", false);
        $("#amount").prop("disabled", true);
        $("#maximumAmount").val("");
        $("#minimumAmount").val("");
        $("#maximumAmount").prop("disabled", false);
        $("#minimumAmount").prop("disabled", false);
        $("#amount").text("");
        $("#amount").val("");
    }
}
function toDisableFormulaTwoInUpdate(typeTwo, obj) {
    obj = JSON.parse(decodeURI(obj));
    if (typeTwo == "Amount" || typeTwo == "amount") {
        $("#formulaTwo").prop("disabled", true);
        $("#amount").prop("disabled", false).val(obj.amount);
        $("#maximumAmount").val("");
        $("#maximumAmount").prop("disabled", true);
        $("#minimumAmount").val("");
        $("#minimumAmount").prop("disabled", true);
        $("#formulaTwo").val("");
    } else if (typeTwo == "formula" || typeTwo == "Formula") {
        $("#formulaTwo").prop("disabled", false);
        $("#amount").prop("disabled", true);
        $("#maximumAmount").val(obj.maximumAmount);
        $("#minimumAmount").val(obj.minimumAmount);
        $("#maximumAmount").prop("disabled", false);
        $("#minimumAmount").prop("disabled", false);
        $("#amount").text("");
        $("#amount").val("");
    }
}

function basedOnHeadSlab(name, DivId) {

    var head = $("#headName").val();
    $.post(server_base_url + "hrms/salary/HeadSlab/ViewList", {
    }).done(function (data) {
        $("#" + DivId).text("");
        if (data == fail) {
            displayErrorMessages("authonticationMsgId", "Invalid username / password");
        } else if (data == unauthorized) {
            displayErrorMessages("authonticationMsgId", unauthorizedMessage);
        } else if (data == statusException) {
            var basedonlist = ["DDO", "City-CityCategory", "Salary Type", "Class", "Nature Type", "DDO-City-CityCategory", "DDO-Salary Type", "DDO-Class", "DDO-Nature Type", "City-CityCategory-Salary Type", "City-CityCategory-Class", "City-CityCategory-Nature Type", "Salary Type-Class", "Salary Type-Nature Type", "Class-Nature Type", "DDO-City-CityCategory-Salary Type", "DDO-City-CityCategory-Class", "DDO-City-CityCategory-Nature Type", "City-CityCategory-Salary Type-Class", "City-CityCategory-Salary Type-Nature Type", "Salary Type-Class-Nature Type", "DDO-City-CityCategory-Salary Type-Class", "DDO-City-CityCategory-Salary Type-Nature Type", "City-CityCategory-Salary Type-Class-Nature Type", "DDO-City-CityCategory-Salary Type-Class-Nature Type"];
            $("#" + DivId).append("<option value='' selected disabled>---- Select BasedOn ----</option>");
            for (var i = 0; i < basedonlist.length; i++) {
                if (name == basedonlist[i])
                {
                    $("#" + DivId).append("<option  value='" + basedonlist[i] + "'selected>" + basedonlist[i] + "</option>");
                } else
                {
                    $("#" + DivId).append("<option  value='" + basedonlist[i] + "' >" + basedonlist[i] + "</option>");
                }
            }
            $("#" + DivId).val(name);
        } else if (data == null) {
            displayErrorMessages("authonticationMsgId", "No User available");
        } else {
            if (data != null) {
                if (data.length > 0) {
                    var result = 0;
                    var basedList = [];
                    for (var i = data.length - 1; i >= 0; i--) {
                        if (head == data[i].headId)
                        {

                            basedList.push(data[i].basedOn);
                            result = 1;

                            if (data[i].typeTwo == "amount" || data[i].typeTwo === amount)
                            {

                                $("#typeTwo").prop('checked', true);
                                $("#typeTwo1").attr('readonly', true);
                                $("#typeTwo1").attr('disabled', 'disabled');
                                $("#typeTwo1").attr('readonly', 'readonly');
                            } else if (data[i].typeTwo == "formula" || data[i].typeTwo === formula)
                            {
                                $("#typeTwo1").prop('checked', true);
                                $("#typeTwo").attr('readonly', true);
                                $("#typeTwo").attr('disabled', 'disabled');
                                $("#typeTwo").attr('readonly', 'readonly');
                            }
                        }
                    }

                    var uniqueNames = [];
                    $.each(basedList, function (i, el) {
                        if ($.inArray(el, uniqueNames) === -1)
                            uniqueNames.push(el);
                    });
                    $("#" + DivId).append("<option  value=''>-----------Select Based On---------</option>");
                    for (var j = uniqueNames.length - 1; j >= 0; j--)
                    {
                        $("#" + DivId).append("<option  value='" + uniqueNames[j] + "'>" + uniqueNames[j] + "</option>");
                        disableform();

                    }

                    if (result == 0)
                    {
                        var basedonlist = ["DDO", "City-CityCategory", "Salary Type", "Class", "Nature Type", "DDO-City-CityCategory", "DDO-Salary Type", "DDO-Class", "DDO-Nature Type", "City-CityCategory-Salary Type", "City-CityCategory-Class", "City-CityCategory-Nature Type", "Salary Type-Class", "Salary Type-Nature Type", "Class-Nature Type", "DDO-City-CityCategory-Salary Type", "DDO-City-CityCategory-Class", "DDO-City-CityCategory-Nature Type", "City-CityCategory-Salary Type-Class", "City-CityCategory-Salary Type-Nature Type", "Salary Type-Class-Nature Type", "DDO-City-CityCategory-Salary Type-Class", "DDO-City-CityCategory-Salary Type-Nature Type", "City-CityCategory-Salary Type-Class-Nature Type", "DDO-City-CityCategory-Salary Type-Class-Nature Type"];
                        $("#" + DivId).append("<option value='' selected disabled>---- Select BasedOn ----</option>");
                        for (var i = 0; i < basedonlist.length; i++) {
                            if (name == basedonlist[i])
                            {
                                $("#" + DivId).append("<option  value='" + basedonlist[i] + "'selected>" + basedonlist[i] + "</option>");
                            } else
                            {
                                $("#" + DivId).append("<option  value='" + basedonlist[i] + "' >" + basedonlist[i] + "</option>");
                            }
                        }
                        $("#" + DivId).val(name);
                    }
                }
            }
        }
    });

}
function disableform() {

    //  $(function () {
    $("#basedOn").change(function () {
        if ($(this).val() == "DDO" || $(this).val() == "DDO-City-CityCategory" || $(this).val() == "DDO-Salary Type" || $(this).val() == "DDO-Class" || $(this).val() == "DDO-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type" || $(this).val() == "DDO-City-CityCategory-Class" || $(this).val() == "DDO-City-CityCategory-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type-Class" || $(this).val() == "DDO-City-CityCategory-Salary Type-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type-Class-Nature Type") {
            var ddoId = getUserSessionElement(seDDOId);
            var ddoName = getUserSessionElement(seDDOName);
            $("#ddo").text("").append("<option value=" + ddoId + " selected>" + ddoName + "</option>").prop("disabled", true);
        } else
            $("#ddo").prop("disabled", true).val("");
    });
    $("#basedOn").change(function () {
        if ($(this).val() == "City-CityCategory" || $(this).val() == "DDO-City-CityCategory" || $(this).val() == "City-CityCategory-Salary Type" || $(this).val() == "City-CityCategory-Class" || $(this).val() == "City-CityCategory-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type" || $(this).val() == "DDO-City-CityCategory-Class" || $(this).val() == "DDO-City-CityCategory-Nature Type" || $(this).val() == "City-CityCategory-Salary Type-Class" || $(this).val() == "City-CityCategory-Salary Type-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type-Class" || $(this).val() == "DDO-City-CityCategory-Salary Type-Nature Type" || $(this).val() == "City-CityCategory-Salary Type-Class-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type-Class-Nature Type") {
            $("#city,#cityCategory").prop("disabled", false);
        } else
            $("#city,#cityCategory").prop("disabled", true).val("");
    });
    $("#basedOn").change(function () {
        if ($(this).val() == "Salary Type" || $(this).val() == "DDO-Salary Type" || $(this).val() == "City-CityCategory-Salary Type" || $(this).val() == "Salary Type-Class" || $(this).val() == "Salary Type-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type" || $(this).val() == "City-CityCategory-Salary Type-Class" || $(this).val() == "City-CityCategory-Salary Type-Nature Type" || $(this).val() == "Salary Type-Class-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type-Class" || $(this).val() == "DDO-City-CityCategory-Salary Type-Nature Type" || $(this).val() == "City-CityCategory-Salary Type-Class-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type-Class-Nature Type") {
            $("#salaryType").prop("disabled", false);
        } else
            $("#salaryType").prop("disabled", true).val("");
    });
    $("#basedOn").change(function () {
        if ($(this).val() == "Class" || $(this).val() == "DDO-Class" || $(this).val() == "City-CityCategory-Class" || $(this).val() == "Salary Type-Class" || $(this).val() == "Class-Nature Type" || $(this).val() == "DDO-City-CityCategory-Class" || $(this).val() == "City-CityCategory-Salary Type-Class" || $(this).val() == "Salary Type-Class-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type-Class" || $(this).val() == "City-CityCategory-Salary Type-Class-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type-Class-Nature Type") {
            $("#clas").prop("disabled", false);
        } else
            $("#clas").prop("disabled", true).val("");
    });
    $("#basedOn").change(function () {
        if ($(this).val() == "Nature Type" || $(this).val() == "DDO-Nature Type" || $(this).val() == "City-CityCategory-Nature Type" || $(this).val() == "Salary Type-Nature Type" || $(this).val() == "Class-Nature Type" || $(this).val() == "DDO-City-CityCategory-Nature Type" || $(this).val() == "City-CityCategory-Salary Type-Nature Type" || $(this).val() == "Salary Type-Class-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type-Nature Type" || $(this).val() == "City-CityCategory-Salary Type-Class-Nature Type" || $(this).val() == "DDO-City-CityCategory-Salary Type-Class-Nature Type") {
            $("#natureType").prop("disabled", false);
        } else
            $("#natureType").prop("disabled", true).val("");
    });
    //  });
}

function disableParticularFiledsUsingBasedOnValueInUpdate(obj) {
    obj = JSON.parse(decodeURI(obj));
    var basedOnValue = obj.basedOn;
//    $(function () {
    if (basedOnValue == "DDO" || basedOnValue == "DDO-City-CityCategory" || basedOnValue == "DDO-Salary Type" || basedOnValue == "DDO-Class" || basedOnValue == "DDO-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type" || basedOnValue == "DDO-City-CityCategory-Class" || basedOnValue == "DDO-City-CityCategory-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type-Class" || basedOnValue == "DDO-City-CityCategory-Salary Type-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type-Class-Nature Type") {
        $("#ddo").prop("disabled", false);
        $("#ddo option:contains(" + obj.ddo + ")").attr('selected', 'selected');
    } else
        $("#ddo").prop("disabled", true).val("");
    if (basedOnValue == "City-CityCategory" || basedOnValue == "DDO-City-CityCategory" || basedOnValue == "City-CityCategory-Salary Type" || basedOnValue == "City-CityCategory-Class" || basedOnValue == "City-CityCategory-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type" || basedOnValue == "DDO-City-CityCategory-Class" || basedOnValue == "DDO-City-CityCategory-Nature Type" || basedOnValue == "City-CityCategory-Salary Type-Class" || basedOnValue == "City-CityCategory-Salary Type-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type-Class" || basedOnValue == "DDO-City-CityCategory-Salary Type-Nature Type" || basedOnValue == "City-CityCategory-Salary Type-Class-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type-Class-Nature Type") {
        $("#city,#cityCategory").prop("disabled", false);
        viewOptionHeadSlapforCity(obj.city, obj.cityCategoryId);
        $("#cityCategory option:contains(" + obj.cityCategory + ")").attr('selected', 'selected');
        $("#city option:contains(" + obj.city + ")").attr('selected', 'selected');
    } else
        $("#city,#cityCategory").prop("disabled", true).val("");
    if (basedOnValue == "Salary Type" || basedOnValue == "DDO-Salary Type" || basedOnValue == "City-CityCategory-Salary Type" || basedOnValue == "Salary Type-Class" || basedOnValue == "Salary Type-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type" || basedOnValue == "City-CityCategory-Salary Type-Class" || basedOnValue == "City-CityCategory-Salary Type-Nature Type" || basedOnValue == "Salary Type-Class-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type-Class" || basedOnValue == "DDO-City-CityCategory-Salary Type-Nature Type" || basedOnValue == "City-CityCategory-Salary Type-Class-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type-Class-Nature Type") {
        $("#salaryType").prop("disabled", false);
        $("#salaryType option:contains(" + obj.salaryType + ")").attr('selected', 'selected');
    } else
        $("#salaryType").prop("disabled", true).val("");
    if (basedOnValue == "Class" || basedOnValue == "DDO-Class" || basedOnValue == "City-CityCategory-Class" || basedOnValue == "Salary Type-Class" || basedOnValue == "Class-Nature Type" || basedOnValue == "DDO-City-CityCategory-Class" || basedOnValue == "City-CityCategory-Salary Type-Class" || basedOnValue == "Salary Type-Class-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type-Class" || basedOnValue == "City-CityCategory-Salary Type-Class-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type-Class-Nature Type") {
        $("#clas").prop("disabled", false);
        $("#clas option:contains(" + obj.clas + ")").attr('selected', 'selected');
    } else
        $("#clas").prop("disabled", true).val("");
    if (basedOnValue == "Nature Type" || basedOnValue == "DDO-Nature Type" || basedOnValue == "City-CityCategory-Nature Type" || basedOnValue == "Salary Type-Nature Type" || basedOnValue == "Class-Nature Type" || basedOnValue == "DDO-City-CityCategory-Nature Type" || basedOnValue == "City-CityCategory-Salary Type-Nature Type" || basedOnValue == "Salary Type-Class-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type-Nature Type" || basedOnValue == "City-CityCategory-Salary Type-Class-Nature Type" || basedOnValue == "DDO-City-CityCategory-Salary Type-Class-Nature Type") {
        $("#natureType").prop("disabled", false);
        $("#natureType option:contains(" + obj.natureType + ")").attr('selected', 'selected');
    } else
        $("#natureType").prop("disabled", true).val("");
    //   });
}
function disableFormulaOrAmountUsingPreviousRecord() {
    var headId = $("#headName").val();
    $.post(server_base_url + "hrms/salary/SalaryHead/DisableFormulaAmount", {
        headId: headId
    }).done(function (data) {
        var whatToDo = data.result;
        if (whatToDo == "formula") {
            $("#typeTwo").prop('checked', false);
            $("#typeTwo1").prop('checked', true);
        } else if (whatToDo == "amount") {
            $("#typeTwo").prop('checked', true);
            $("#typeTwo1").prop('checked', false);
        }
        toDisableFormulaTwo();
    });
}
//
//        if (whatToDo == "formula") {
//            $("#formulaTwo").prop("disabled", false);
//            $("#formulaTwo").val("");
//            $("#amount").prop("disabled", true);
//            $("#amount").val("");
//        } else if (whatToDo == "amount") {
//            $("#formulaTwo").prop("disabled", true);
//            $("#formulaTwo").val("");
//            $("#amount").prop("disabled", false);
//            $("#amount").val("");
//        } else if (whatToDo == NoDataFoundMessage) {
//            $("#formulaTwo").prop("disabled", false);
//            $("#amount").prop("disabled", false);
//        }