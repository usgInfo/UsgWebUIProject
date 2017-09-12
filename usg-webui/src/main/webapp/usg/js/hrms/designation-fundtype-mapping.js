/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Page Display Function
function dispalyhrmsCommonDesignationFundTypeMapping() {
    createDesignationFundtypeMapping();
    createPostForm();

    var buttonValue = $("#fundheadmappingSaveandUpdateButton").val();
    var saveButton = "save";

    if (buttonValue == saveButton) {
        fundTypes("");
        natureTypes("");
        getDesignation("");
        getDispline("");
        
        viewListTableFundHeadMapping("");
    }

}

//End Display Function

function createDesignationFundtypeMapping() {
 
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label>><label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> ><label>Designation Fund Type Mapping</label>');

    $("#dashboardBodyMainDiv").text("").append("<div id='designationfundtypemappingMainDiv' class='row'/>");
    if (checkUserPrivelege(pvCreateDesgFundTypeMapping)) {
        $("#designationfundtypemappingMainDiv").text("").append("<div id='columnDiv' class='col-lg-12'  style='width:100%;' >");
        $("#columnDiv").append("<div id='designationfundtypemappingcolumnDiv' class='col-lg-9'/>");
        $("#columnDiv").append("<div id='designationfundtypetablemappingcolumnDiv' class='col-lg-3'/>");
        $("#columnDiv").append("<div id='designationfundtypetablemappingcolumnTableDiv'/>");

        $("#designationfundtypemappingcolumnDiv").append("<div id='designationfundtypemappingpanelDiv' class='panel panel-blue'>");
        $("#designationfundtypemappingpanelDiv").append("<div id='designationfundtypemappingpanelHeadingDiv' class='panel-heading'>");
        $("#designationfundtypemappingpanelHeadingDiv").append("<h4 id='designationfundtypemappingHeader' class='panel-title' />");
        $("#designationfundtypemappingHeader").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>Designation Fund Type Mapping</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='desgFundTypeMappingCol'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#designationfundtypemappingpanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
         $("#desgFundTypeMappingCol").click(function () {
            $("#collapseOne2").toggle();
            if ($("#desgFundTypeMappingCol span").hasClass("glyphicon-minus-sign")) {
                $("#desgFundTypeMappingCol").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#desgFundTypeMappingCol").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='designationfundtypemappingpanelBodyDiv' class='panel-body pan'>");
        $("#designationfundtypemappingpanelBodyDiv").append("<div id='row1' class='row'>");

        $("#row1").append("<center><div id='pregsuccessBefore'</center></div>");
        $("#row1").append("<div id='FieldGroup' class='form-group'/><div class='form-group' id='GroupDiv'>");

        $("#GroupDiv").append('<label for="ddo" class="col-lg-3 control-label" required>DDO<span class="require">*</span></label>')
        $("#GroupDiv").append('<div class="col-lg-9"><select  class="form-control"  id="ddo"><option value="">-------------------select ddo----------------</option></select><label id="ddoError"></label></div></div></div>');


        getLoggedInDDOInDropDown("ddo", "");
        $("#designationfundtypemappingpanelBodyDiv").append("<div id='row2' class='row'><div class='form-group' id='GroupDiv1'>");


        $("#GroupDiv1").append('<label for="Designation" class="col-lg-3 control-label" required>Designation<span class="require">*</span></label>')
        $("#GroupDiv1").append('<div class="col-lg-9"><select  class="form-control"  id="designation" ><option value="">---select designation---</option></select><label id="designationError"></label></div></div></div>');

        $("#designationfundtypemappingpanelBodyDiv").append("<div id='row9' class='row'><div class='form-group' id='GroupDiv9'>");


        $("#GroupDiv9").append('<label for="Designation" class="col-lg-3 control-label" required>Grade<span class="require">*</span></label>')
        $("#GroupDiv9").append('<div class="col-lg-9"><select  class="form-control"  id="grade" ><option value="" selected>---select Grade---</option></select><label id="designationError"></label></div></div></div>');


        $("#designationfundtypemappingpanelBodyDiv").append("<div id='row3' class='row'><div class='form-group' id='GroupDiv2'>");


        $("#GroupDiv2").append('<label for="fundtype" class="col-lg-3 control-label" required>Fund Type<span class="require">*</span></label>')
        $("#GroupDiv2").append('<div class="col-lg-9"><select  class="form-control"  id="fundtype" ><option value="" selected>---select fund type---</option></select><label id="fundtypeError"></label></div></div></div>');
        $("#fundtype").attr("onchange", "getbudgetHeadDFM()");
        $("#designationfundtypemappingpanelBodyDiv").append("<div id='row4' class='row'><div class='form-group' id='GroupDiv3'>");

        $("#GroupDiv3").append('<label for="budgettype" class="col-lg-3 control-label" required>Budget Head<span class="require">*</span></label>')
        $("#GroupDiv3").append('<div class="col-lg-9"><select  class="form-control"  id="budgettype"><option value="" >---select budget type---</option></select><label id="budgettypeError"></label></div></div></div>');


        $("#designationfundtypemappingpanelBodyDiv").append("<div id='row5' class='row'><div class='form-group' id='GroupDiv4'>");

        $("#GroupDiv4").append('<label for="naturetype" class="col-lg-3 control-label" required>Nature Type<span class="require">*</span></label>')
        $("#GroupDiv4").append('<div class="col-lg-9"><select  class="form-control"  id="naturetype"><option value="" >---select nature type---</option></select><label id="naturetypeError"></label></div></div></div>');


        $("#designationfundtypemappingpanelBodyDiv").append("<div id='row6' class='row'><div class='form-group' id='GroupDiv5'>");

        $("#GroupDiv5").append('<label for="disciplinename" class="col-lg-3 control-label" required>Discipline Name<span class="require">*</span></label>')
        $("#GroupDiv5").append('<div class="col-lg-9"><select  class="form-control"  id="disciplinename"><option value="" >---select desciplinename---</option></select><label id="disciplinenameError"></label></div></div></div>');

        $("#designationfundtypemappingpanelBodyDiv").append("<div id='row7' class='row'><div class='form-group' id='GroupDiv6'>");

        $("#GroupDiv6").append('<label for="post" class="col-lg-3 control-label">Total Posts<span class="require">*</span></label>')
        $("#GroupDiv6").append('<div class="col-lg-9"><input type="text"  class="form-control"  id="postId"  value=""/ readonly><label></label></div></div></div>');

        $("#designationfundtypemappingpanelBodyDiv").append("<div id='row8' class='row'><div class='form-group' id='ButtonRow'>");

        $("#ButtonRow").append("<input type='hidden' id='idValue'><div  class='col-xs-12' id='buttonRow'/>\n\
   <center><button type='button'  id='fundheadmappingSaveandUpdateButton' value='save' class='btn btn-success bn'  onclick='designationfundheadmappingValidation()'>Save</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n\
   <button type='button' onclick='wipeAllfundheadmapping()' id='fundheadMappingResetButton' class='btn btn-warning bn' name='reset' value='reset'>Reset</button></center></div>");
    }
    $("#designation").attr("onchange", "getGradeBasedonDESIGNATION()");
}
function getGradeBasedonDESIGNATION(name)
{
    $("#grade").text("").append('<option value="" selected>---select Grade---</option>');
    var designation = $("#designation option:selected").text();
    $.get(server_base_url + "hrms/Common/FetchGradeBasedOnDesignation", {
        designation: designation

    }).done(function (pdata) {
        if (pdata != "500" && pdata != 500 && pdata != "" && pdata != null)
        {
            for (var i = 0; i < pdata.length; i++) {
                if (name == pdata[i]._id.$oid)
                {
                    $("#grade").append("<option value='" + pdata[i].grade + "'selected>" + pdata[i].gradeName + "</option>");
                } else {
                    $("#grade").append("<option value='" + pdata[i].grade + "'>" + pdata[i].gradeName + "</option>");
                }
            }
        }
    });
}
function createPostForm() {

    if (checkUserPrivelege(pvCreateDesgFundTypeMapping)) {
        $("#designationfundtypetablemappingcolumnDiv").append("<div id='posttypemappingpanelDiv'   class='panel panel-blue'>");
        $("#posttypemappingpanelDiv").append("<div id='posttypemappingpanelHeadingDiv' class='panel-heading'>");
        $("#posttypemappingpanelHeadingDiv").append("<h4 id='posttypemappingHeaders' class='panel-title' />");
        $("#posttypemappingHeaders").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' ><center>List Of Categories</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='listDesgFUndTypeCol'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#posttypemappingpanelDiv").append("<div id='collapseOne01' class='panel-collapse collapse in'/>");
        
          $("#listDesgFUndTypeCol").click(function () {
            $("#collapseOne01").toggle();
            if ($("#listDesgFUndTypeCol span").hasClass("glyphicon-minus-sign")) {
                $("#listDesgFUndTypeCol").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#listDesgFUndTypeCol").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });


        $("#collapseOne01").append("<div id='postypepanelBodyDiv' style='height:520px;overflow-y: auto;' class='panel-body'>");
        $("#postypepanelBodyDiv").append("<div id='designationfundheadMappingTableListPanelRow' class = 'row' />");
        $("#designationfundheadMappingTableListPanelRow").append("<div class='tab-pane' id='viewUser'/>");
        $("#viewUser").append("<div id='designationfundheadMappingTableMastertableresponsiveDiv' class='table-responsive' />");
        $("#designationfundheadMappingTableMastertableresponsiveDiv").append('<table id="example1" class="table table-striped table-bordered table-hover">');

       
        $("#example1").append("<thead class=''><tr>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Category</th>"
                + "<th style='min-width:1%;width:80px;'><i class='fa' ></i> Post</th>"
                + "</tr></thead>");
        $("#example1").append("<tbody id='displaycateTableBody' class='table-striped table-bordered' />");
        getCategory();
    }
}

function getCategory()
{
    $("#displaycateTableBody").text("");
    $.get(server_base_url + "hrms/common/Category/View", {
    }).done(function (bdata) {
        if (bdata == fail) {
            displayErrorMessages("displaycateTableBody", "" + NoDataFoundMessage + "");
        } else if (bdata == unauthorized) {
            displayErrorMessages("displaycateTableBody", "" + unauthorizedMessage + "");
        } else if (bdata == invalidSession) {
            callSessionTimeout();
        } else if (bdata == statusException) {
            displayErrorMessages("displaycateTableBody", "" + statusExceptionMessage + "");
        } else if (bdata == null) {
            displayErrorMessages("displaycateTableBody", "" + "No User Availbale" + "");
            
        } else {
            var sno = 0;

            for (var i = 0; i < bdata.length; i++) {
                sno++;
                $("#displaycateTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                        + "<td>" + sno + "</td>"
                        + "<td><input type='text' value='" + bdata[i]._id.$oid + "' hidden>" + bdata[i].categoryy + "</td>"
                        + "<td><input type='text' id='catpost' style='width:60px' class='catpost' onkeypress='return validateNumeric(event)' ></td></tr>");

            }
        }

        $('.catpost').keyup(function () {
            var sum = 0;
            $('.catpost').each(function () {
                sum += Number($(this).val());
            });
            $('#postId').val(sum);
        });
    });
}

function  fundTypes(name) {

    $("#fundtype").text("").append('<option value="" selected>---select fund type---</option>');
    $.get(server_base_url + "/budget/master/FundType/View", {
    }).done(function (bdata) {

        for (var i = 0; i < bdata.length; i++) {
            if (name == bdata[i].description)
            {
                $("#fundtype").append("<option value='" + bdata[i]._id.$oid + "'selected>" + bdata[i].description + "</option>");
            } else {
                $("#fundtype").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].description + "</option>");
            }
        }

    });
}

function  natureTypes(name) {

    $("#naturetype").text("").append('<option value="">---select nature type---</option>');
    $.get(server_base_url + "hrms/common/Nature/View", {
    }).done(function (bdata) {

        for (var i = 0; i < bdata.length; i++) {
            if (name == bdata[i].natureName)
            {
                $("#naturetype").append("<option value='" + bdata[i]._id.$oid + "'selected >" + bdata[i].natureName + "</option>");
            } else {
                $("#naturetype").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].natureName + "</option>");
            }
        }

    });
}

function getDesignation(name)
{

    $("#designation").text("").append('<option value="">---select designation---</option>');
    $.get(server_base_url + "hrms/salary/Designation/ViewList", {
    }).done(function (bdata) {


        for (var i = 0; i < bdata.length; i++) {
            if (name == bdata[i].designation)
            {
                $("#designation").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].designation + "</option>");
            } else {
                $("#designation").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].designation + "</option>");
            }
        }

    });
}

function getGradeDFM(name)
{
    $("#grade").text("").append('<option value="">---select Grade---</option>');
    $.get(server_base_url + "hrms/salary/Grade/ViewList", {
    }).done(function (bdata) {
        for (var i = 0; i < bdata.length; i++) {

            if (name == bdata[i]._id.$oid)
            {
                $("#grade").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].gradeName + "</option>");
            } else {
                $("#grade").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].gradeName + "</option>");
            }
        }

    });
}
function getDispline(name)
{

    $("#disciplinename").text("").append('<option value="">---select discipline---</option>');
    $.get(server_base_url + "hrms/salary/Discipline/ViewList", {
    }).done(function (bdata) {

        for (var i = 0; i < bdata.length; i++) {
            if (name == bdata[i].disciplineName)
            {
                $("#disciplinename").append("<option value='" + bdata[i]._id.$oid + "' selected>" + bdata[i].disciplineName + "</option>");
            } else {
                $("#disciplinename").append("<option value='" + bdata[i]._id.$oid + "'>" + bdata[i].disciplineName + "</option>");
            }
        }

    });

}
function getbudgetHeadDFM(name)
{
    var fundtype = $("#fundtype").val();

    $("#budgettype").text("").append('<option value="">---select Budget Head---</option>');
    $.get(server_base_url + "/hrms/Common/FundHeadMapping/GetBudgetHeadsFundhead", {
        fundtype: fundtype
    }).done(function (bdata) {
        var budgetList = bdata.budgetList;
        budgetList = JSON.stringify(budgetList);
        budgetList = JSON.parse(budgetList);
        budgetList = JSON.parse(budgetList);
        for (var k = 0; k < budgetList.length; k++) {

            if (name == budgetList[k].budgetHead)
            {
                $("#budgettype").append("<option  value='" + budgetList[k]._id.$oid + "' selected>" + budgetList[k].budgetHead + "</option>");
            } else
            {
                $("#budgettype").append("<option  value='" + budgetList[k]._id.$oid + "'>" + budgetList[k].budgetHead + "</option>");

            }
        }
    });
}
function getbudgetHeadDFMUpdate(budgethead, fundType)
{

    var fundtypeid;

    $.get(server_base_url + "budget/master/FundType/View", {
    }).done(function (bdata) {

        for (var i = 0; i < bdata.length; i++) {
            if (fundType == bdata[i].description)
            {

                fundtypeid = bdata[i]._id.$oid;
                $.get(server_base_url + "/hrms/Common/FundHeadMapping/GetBudgetHeadsFundhead", {
                    fundtype: fundtypeid
                }).done(function (bdata) {
                    var budgetList = bdata.budgetList;
                    budgetList = JSON.stringify(budgetList);
                    budgetList = JSON.parse(budgetList);
                    budgetList = JSON.parse(budgetList);
                    for (var k = 0; k < budgetList.length; k++) {

                        if (budgethead == budgetList[k].budgetHead)
                        {
                            $("#budgettype").append("<option  value='" + budgetList[k]._id.$oid + "' selected>" + budgetList[k].budgetHead + "</option>");
                        } else
                        {
                            $("#budgettype").append("<option  value='" + budgetList[k]._id.$oid + "'>" + budgetList[k].budgetHead + "</option>");

                        }
                    }
                });
            }
        }
    });
}
function getDDOforDesignationFundTypeMap(name) {

    $("#ddo").text("").append('<option value="">---select ddo---</option>');
    $.get(server_base_url + "financial/common/DDOListForOptions", {
    }).done(function (pdata) {

        for (var i = 0; i < pdata.length; i++) {

            if (name == pdata[i].ddoName)
            {
                $("#ddo").append("<option value='" + pdata[i]._id.$oid + "' selected>" + pdata[i].ddoName + "</option>");
            } else {
                $("#ddo").append("<option value='" + pdata[i]._id.$oid + "'>" + pdata[i].ddoName + "</option>");
            }

        }
    });
}

function designationfundheadmappingValidation() {
    var result = 1;
    fundTypeMappingDisableButton();
    var ddo = $("#ddo").val();
    var designation = $("#designation").val();
    var fundtype = $("#fundtype").val();
    var budgettype = $("#budgettype").val();
    var naturetype = $("#naturetype").val();
    var disciplinename = $("#disciplinename").val();
    var posts = $('#postId').val();
    var flag = 1;
    if (posts == '' && designation == 0 && ddo == 0 && fundtype == 0 && budgettype == 0 && naturetype == 0 && disciplinename == 0) {
        fundTypeMappingEnableButton();
        displaySmallErrorMessagesInRed("pregsuccessBefore", "All fields required ");
        return false;
    }
    if (ddo == 0) {
        flag = 0;
        $("#GroupDiv").addClass("form-group state-error");
        $("#ddo").change(function (e) {
            $("#GroupDiv").removeClass("form-group state-error");

            $("#GroupDiv").addClass("form-group state-success");
        });
    }
    if (designation == 0) {
        flag = 0;
        $("#GroupDiv1").addClass("form-group state-error");
        $("#designation").change(function (e) {
            $("#GroupDiv1").removeClass("form-group state-error");

            $("#GroupDiv1").addClass("form-group state-success");
        });
    }
    if (fundtype == 0) {
        flag = 0;
        $("#GroupDiv2").addClass("form-group state-error");
        $("#fundtype").change(function (e) {
            $("#GroupDiv2").removeClass("form-group state-error");

            $("#GroupDiv2").addClass("form-group state-success");
        });
    }
    if (budgettype == 0) {
        flag = 0;
        $("#GroupDiv3").addClass("form-group state-error");
        $("#budgettype").change(function (e) {
            $("#GroupDiv3").removeClass("form-group state-error");

            $("#GroupDiv3").addClass("form-group state-success");
        });
    }
    if (naturetype == 0) {
        flag = 0;
        $("#GroupDiv4").addClass("form-group state-error");
        $("#naturetype").change(function (e) {
            $("#GroupDiv4").removeClass("form-group state-error");

            $("#GroupDiv4").addClass("form-group state-success");
        });
    }
    if (disciplinename == 0) {
        flag = 0;
        $("#GroupDiv5").addClass("form-group state-error");
        $("#disciplinename").change(function (e) {
            $("#GroupDiv5").removeClass("form-group state-error");

            $("#GroupDiv5").addClass("form-group state-success");
        });
    }
    if (posts == "" || posts == undefined || posts == 0) {
        flag = 0;
        $("#GroupDiv6").addClass("form-group state-error");
        $(".catpost").change(function (e) {
            $("#GroupDiv6").removeClass("form-group state-error");

            $("#GroupDiv6").addClass("form-group state-success");
        });

    }
    if (flag == 0) {

        fundTypeMappingEnableButton();
        return false
    }
    if (flag == 1) {



        var buttonValue = $("#fundheadmappingSaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            saveDFTM();
        } else if (buttonValue == updateButton) {
            updateDFTValues();
        }
    }
}
//Start update Function      
function  updateDFYM(obj) {
    if (checkUserPrivelege(pvUpdateDesgFundTypeMapping)) {
        $("#pregsuccessBefore").text("");
        obj = decodeURI(obj);
        obj = JSON.parse(obj);
        $("#fundheadmappingSaveandUpdateButton").text("Update");
        $("#fundheadmappingSaveandUpdateButton").val("update");
        $("#fundheadMappingResetButton").text("Back");
        $("#idValue").val(obj.id);
        var catPost = obj.categoryposts;
        var postlength = catPost.length;
        getDDOforDesignationFundTypeMap(obj.ddo);
        $("#displayTablebod tr").css("background-color", "white");
        $("#displayTablebod tr" + "#" + obj.id).css("background-color", "rgba(10, 129, 156, 0.3)");
        fundTypes(obj.fundType);
        natureTypes(obj.natureType);
        getGradeDFM(obj.grade);
        getDesignation(obj.designation);
        getDispline(obj.desciplineName);
        getbudgetHeadDFMUpdate(obj.budgetHead, obj.fundType);
        $('#postId').val(obj.totalPosts);
        $('#displaycateTableBody tbody').empty();
        $.get(server_base_url + "hrms/viewcategory/designationmapping/Update", {
        }).done(function (bdata) {
            if (bdata == fail) {
            } else if (bdata == unauthorized || bdata.statuscode == unauthorized) {
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException) {
            } else if (bdata == null) {
            } else {
                var sno = 0;
                $("#displaycateTableBody").text("");

                for (var j = 0; j < bdata.length; j++) {
                    sno++;

                    var count = 0;

                    var totalCatname = bdata[j]._id.$oid;
                    for (var i = 0; i < postlength; i++) {
                        var catname = catPost[i].categoory;
                        var catid = catPost[i].categooryName;
                        if (catname == totalCatname) {
                            count = 1;
                            $("#displaycateTableBody").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'><input type='text' value='" + catname + "' hidden>" + catid + "</td>"
                                    + "<td style='cursor:pointer;'><input type='text' style='width:60px' id='catpost' value='" + catPost[i].posts + "' class='catpostupdate' onkeypress='return validateNumeric(event)'></td></tr>");
                        }
                    }

                    if (count == 0) {
                        $("#displaycateTableBody").append("<tr id='" + bdata[j]._id.$oid + "' style='cursor:pointer;' >"
                                + "<td>" + sno + "</td>"
                                + "<td><input type='text' value='" + bdata[j]._id.$oid + "' hidden>" + bdata[j].categoryy + "</td>"
                                + "<td><input type='text' id='catpost' style='width:60px' class='catpostupdate' onkeypress='return validateNumeric(event)' ></td></tr>");
                    }

                }




            }
            $('.catpostupdate').keyup(function () {
                var sum = 0;
                $('.catpostupdate').each(function () {
                    sum += Number($(this).val());
                });
                $('#postId').val(sum);
            });

        });
    }
}

function updateDFTValues() {
    if (checkUserPrivelege(pvUpdateDesgFundTypeMapping)) {
        var id = $('#idValue').val();
        var rows = [];
        var ddo = $('#ddo').val();
        var designation = $('#designation').val();
        var grade = $('#grade').val();
        var fundType = $('#fundtype').val();
        var budgetHead = $('#budgettype').val();
        var natureType = $('#naturetype').val();
        var desciplineName = $('#disciplinename').val();
        var posts = $('#postId').val();
        $('table#example1 tbody tr').each(function () {

            rows.push({
                categoory: $(this).find('td:eq(1) input').val(),
                categooryName: $(this).find('td:eq(1)').text(),
                posts: $(this).find('td:eq(2) input').val()
            });

        });


        var dftmJson = {
            ddo: ddo,
            designation: designation,
            grade: grade,
            fundType: fundType,
            budgetHead: budgetHead,
            natureType: natureType,
            desciplineName: desciplineName,
            totalPosts: posts
        }
        dftmJson["categoryposts"] = rows;

        $.post(server_base_url + "hrms/common/DesignationFundType/Update", {
            dftmJson: JSON.stringify(dftmJson),
            id: id,
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
            } else if (data == duplicate) {
                displayErrorMessages("pregsuccessBefore", "" + existed + "");
                setTimeout(function () {
                    dispalyhrmsCommonDesignationFundTypeMapping();
                }, 1000);
            } else {
                displaySuccessMessages("pregsuccessBefore", updateMessage, "");
                setTimeout(function () {
                    dispalyhrmsCommonDesignationFundTypeMapping();
                }, 4000);

            }
        });
    }
}
//End Update Function   
//Start Save Function

function saveDFTM() {
    if (checkUserPrivelege(pvCreateDesgFundTypeMapping)) {
        var rows = [];
        var ddo = $('#ddo').val();
        var designation = $('#designation').val();
        var grade = $('#grade').val();
        var fundType = $('#fundtype').val();
        var budgetHead = $('#budgettype').val();
        var natureType = $('#naturetype').val();
        var desciplineName = $('#disciplinename').val();
        var posts = $('#postId').val();
        $('table#example1 tbody tr').each(function () {

            rows.push({
                categoory: $(this).find('td:eq(1) input').val(),
                categooryName: $(this).find('td:eq(1)').text(),
                posts: $(this).find('td:eq(2) input').val()

            });

        });

        var dftmJson = {
            ddo: ddo,
            designation: designation,
            grade: grade,
            fundType: fundType,
            budgetHead: budgetHead,
            natureType: natureType,
            desciplineName: desciplineName,
            totalPosts: posts
        }
        dftmJson["categoryposts"] = rows;

        $.post(server_base_url + "hrms/common/DesignationFundTypeMapping/Save", {
            dftmJson: JSON.stringify(dftmJson),
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
                displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage);
                displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage);
            } else if (data == duplicate) {
                displayErrorMessages("pregsuccessBefore", existed, "");
                setTimeout(function () {
                    dispalyhrmsCommonDesignationFundTypeMapping();
                }, 1000);
            } else {
                displaySuccessMessages("pregsuccessBefore", successMessage, "");
                setTimeout(function () {
                    dispalyhrmsCommonDesignationFundTypeMapping();
                }, 4000);

            }

        });
    }


}
//End Save Function



function fundTypeMappingDisableButton() {

    $("#fundheadmappingSaveandUpdateButton").attr('disabled', true);
    $("#fundheadMappingResetButton").attr('disabled', true);
}
function fundTypeMappingEnableButton() {
    $("#fundheadmappingSaveandUpdateButton").attr('disabled', false);
    $("#fundheadMappingResetButton").attr('disabled', false);
}
function viewListTableFundHeadMapping() {
    if (checkUserPrivelege(pvViewDesgFundTypeMapping)) {
        $("designationfundheadMappingTableMasterTableListPanelFirst").remove();
        $("#designationfundtypetablemappingcolumnTableDiv").append("<div id='designationfundheadMappingTableMasterTableListPanelFirst' class='col-lg-12'/>");
        $("#designationfundheadMappingTableMasterTableListPanelFirst").append("<div id='designationfundheadMappingTableMasterTableListPanel' class='panel panel-blue'/>");
        $("#designationfundheadMappingTableMasterTableListPanel").append("<div id='designationfundheadMappingTableMasterTableHeading' class='panel-heading' />");
        $("#designationfundheadMappingTableMasterTableHeading").append("<h4 id='designationfundheadMappingTableMasterTableHeader' class='panel-title' />");
        $("#designationfundheadMappingTableMasterTableHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List Of Designation Fund Type Mapping</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colDesignationFundTypeMappingList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#designationfundheadMappingTableMasterTableListPanel").append("<div id='collapseOne4' class='panel-collapse collapse in' />");
        $("#colDesignationFundTypeMappingList").click(function () {
            $("#collapseOne4").toggle();
            if ($("#colDesignationFundTypeMappingList span").hasClass("glyphicon-minus-sign")) {
                $("#colDesignationFundTypeMappingList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colDesignationFundTypeMappingList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne4").append("<div id='designationfundheadMappingTableListPanelTableMainDiv' class = 'panel-body' />");
        $("#designationfundheadMappingTableListPanelTableMainDiv").append("<center><div id='tablesuccessBefore'></center></div>");
        $("#designationfundheadMappingTableListPanelTableMainDiv").append("<div id='designationfundheadMappingTableListPanelRow' class = 'row' />");
        $("#designationfundheadMappingTableListPanelTableMainDiv").append("<div class='tab-pane' id='viewUser3'/>");

        $("#viewUser3").append("<div id='designationfundheadMappingTableMastertableresponsiveDiv1' class='table-responsive' />");
        $("#designationfundheadMappingTableMastertableresponsiveDiv1").append('<table id="example2" class="table table-bordered">');


        $("#example2").append("<thead class=''><tr id='desgnFundTypeHeadId'>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> DDO</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i>Designation</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Fund Type</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Nature Type</th>"
                + "<th style='min-width:30%;width:auto;'><i ></i> Budget Head</th>");
        if (checkUserPrivelege(pvUpdateDesgFundTypeMapping)) {
            $("#desgnFundTypeHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteDesgFundTypeMapping)) {
            $("#desgnFundTypeHeadId").append("<th style='min-width:1%;width:80px;''><i class='fa' style='font-size:21px;'></i> Delete</th>");
        }
        $("#example2").append("<tbody id='displayTablebod' class='table-striped table-bordered' />");

        $.get(server_base_url + "hrms/common/DesignationFundTypeMapping/View", {
            ddo:getUserSessionElement(seDDOId)
        }).done(function (bdata) {
            if (bdata == fail) {

            } else if (bdata.statuscode == unauthorized) {
                
            } else if (bdata == invalidSession) {
                callSessionTimeout();
            } else if (bdata == statusException) {
             
            } else if (bdata == null) {
                
            } else {

                var sno = 0;
                for (var i = bdata.length - 1; i >= 0; i--) {

                    sno++;

                    var dftmJson = {
                        id: bdata[i]._id.$oid,
                        ddo: bdata[i].ddo,
                        designation: bdata[i].designation,
                        grade: bdata[i].grade,
                        fundType: bdata[i].fundType,
                        natureType: bdata[i].natureType,
                        desciplineName: bdata[i].desciplineName,
                        budgetHead: bdata[i].budgetHead,
                        totalPosts: bdata[i].totalPosts,
                        categoryposts: bdata[i].categoryposts
                    }

                    dftmJson = JSON.stringify(dftmJson);

                    $("#displayTablebod").append("<tr id='" + bdata[i]._id.$oid + "' style='cursor:pointer;' >"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].ddo + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].designation + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].fundType + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].natureType + "</td>"
                            + "<td style='cursor:pointer;'>" + bdata[i].budgetHead + "</td>");
                    if (checkUserPrivelege(pvUpdateDesgFundTypeMapping)) {
                        $("#" + bdata[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updateDFYM('" + encodeURI(dftmJson) + "') class='anchor_edit'><i class='fa fa-edit'>&nbsp;&nbsp;</i><span>Edit</span></a></td>");
                    }
                    if (checkUserPrivelege(pvDeleteDesgFundTypeMapping)) {
                        $("#" + bdata[i]._id.$oid).append("<td><a href='javascript:void(0);' onclick=deletePopUp('deleteDFYM','relationMasterTableListPanel','" + bdata[i]._id.$oid + "')  class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
                    }
                }
            }

            $('#example2').dataTable();
        });


    }
}

//Start Delete 

function deleteDFYM(id)
{
    
    deleteDesiFundType(id);
    
}
function  deleteDesiFundType(id) {
    if (checkUserPrivelege(pvDeleteDesgFundTypeMapping)) {


        $.post(server_base_url + "hrms/common/DesiginationFundTypeMapping/Delete", {
            bid: id
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("tablesuccessBefore", "" + failMessage + "");
                displayErrorMessages("tablesuccessBefore", "" + failMessage + "");
            } else if (data == unauthorized || data.statuscode == unauthorized) {
                displayErrorMessages("tablesuccessBefore", "" + unauthorizedMessage + "");
                displayErrorMessages("tablesuccessBefore", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("tablesuccessBefore", "" + statusExceptionMessage + "");
                displayErrorMessages("tablesuccessBefore", "" + statusExceptionMessage + "");
            } else {
                displaySuccessMessages("tablesuccessBefore", "" + deleteMessage + "");
               
                setTimeout(function () {
                    dispalyhrmsCommonDesignationFundTypeMapping();
                }, 4000);
            }
        });

    }

}
//End Delete

function wipeAllfundheadmapping() {
   
    $("#designation").val("");
    $("#grade").val("");
    $("#fundtype").val("");
    $("#budgettype").val("");
    $("#naturetype").val("");
    $("#disciplinename").val("");
    $("#postId").val("");
    $("#fundheadmappingSaveandUpdateButton").text("Save");
    $("#fundheadmappingSaveandUpdateButton").val("save");
    $("#fundheadMappingResetButton").text("Reset");
    dispalyhrmsCommonDesignationFundTypeMapping()
}