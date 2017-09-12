/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Display start Category List
function dispalyHrmsCommonCategory() {
    createCategoryForm();
    //  if (checkUserPrivelege(pvViewCategory)) {
    fetchAllCategoryMasterList();
    //}
}
//Display End Category List

//creat Form Start 
function createCategoryForm() {

    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> >><label>Category Master</label>');

    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS></a></label> <label><a href="javascript:hrmsCommonMasterTabs()">Common Master</a></label> ><label>Category Master</label>');

    $("#dashboardBodyMainDiv").text("").append("<div id='categoryMainDiv' class='row' />");
    $("#categoryMainDiv").text("").append("<div id='categorycolumnDiv' class='col-lg-12'  style='width:100%;' >");
//    if (checkUserPrivelege(pvCreateCategory)) {
    $("#categorycolumnDiv").append("<div id='categorypanelDiv' class='panel panel-blue'>");
    $("#categorypanelDiv").append("<div id='categorypanelHeadingDiv' class='panel-heading'>");
    $("#categorypanelHeadingDiv").append("<h4 id='categoryHeader' class='panel-title' />");
    $("#categoryHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#collapseOne2'><center><strong>Category Master</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colCategory'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#categorypanelDiv").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
    $("#colCategory").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colCategory span").hasClass("glyphicon-minus-sign")) {
            $("#colCategory").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colCategory").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='categorypanelBodyDiv' class='panel-body pan'>");
    $("#categorypanelBodyDiv").append("<div id='categoryformDiv' class='form-horizontal'>");
    $("#categoryformDiv").append("<div id='categoryformBodyDiv' class='form-body'>");

    $("#categoryformBodyDiv").append("<center><span id='pregsuccessBefore'/><center>");
    $("#categoryformBodyDiv").append("<div id='categoryRowPanel' class='form-body pal'>");
    $("#categoryformBodyDiv").append('<div id="categoryFormGroupDiv" class="form-group"><label for="categoryName" class="col-lg-3  control-label" required>Category<span class="require">*</span></label>')
    $("#categoryFormGroupDiv").append('<div class="col-lg-9"><input id="categoryName" name="categoryName" type="text" placeholder="Category Name"  onkeypress="return acceptAlphanumeric(event)" class="form-control"><label id="CategoryError" class="text-danger"></label>');
    $("#categoryformBodyDiv").append('<div class="col-xs-12" id="buttonRow"><center><input type="hidden" id="idValue"><button id="categorySaveandUpdateButton" value="save" onclick="categoryValidation()" type="submit" class="btn btn-success bn">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\
    <button type="button" id="categoryResetButton" class="btn btn-warning bn" onclick="resetCategoryMaster()">Reset</button> </center></div>');

    $("input").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });

//    }
}
//End create Form

//Start save category Function  
function sendCategoryData()
{
//    if (checkUserPrivelege(pvCreateCategory)) {
    var loginUserId = getUserSessionElement("userId");
    var category1 = $("#categoryName").val().trim();
    $.post(server_base_url + "hrms/common/category/Save", {
        category: category1,
        loginUserId: loginUserId
    }).done(function(data) {
        console.log(data);
        if (data == fail || data.statuscode == fail) {
            categoryEnableButton();
            displayErrorMessages("pregsuccessBefore", "Invalid username / password" + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            categoryEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession || data.statuscode == invalidSession) {
            categoryEnableButton();
            callSessionTimeout();
        } else if (data == statusException || data.statuscode == statusException) {
            categoryEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            categoryEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate_Message) {
            displayErrorMessages("pregsuccessBefore", "" + existed + "");
            categoryEnableButton();
            setTimeout(function() {
                dispalyHrmsCommonCategory();
            }, 2100);
        } else {
            displaySuccessMessages("pregsuccessBefore", successMessage, "");
            setTimeout(function() {
                dispalyHrmsCommonCategory();
            }, 4000);
        }
    });
//    } else {
//        displaySmallErrorMessagesInRed("pregsuccessBefore", privilageNotExist);
//    }
}
//End Save  category Function

//Start Field Validation Function
function categoryValidation()
{
    var result = 1;
    var categoryName;
    var categoryName = $("#categoryName").val().trim();

    categoryDisableButton();
    if (categoryName == undefined || categoryName == null || categoryName == "") {
        categoryEnableButton();
        //$("#categoryFormGroupDiv").addClass("form-group state-error");
        displaySmallErrorMessagesInRed("pregsuccessBefore", "Please enter category", +"");
        $("#categoryName").focus();
        return false;
    }

    if (result != 0) {


        var buttonValue = $("#categorySaveandUpdateButton").val();
        var saveButton = "save";
        var updateButton = "update";
        if (buttonValue == saveButton) {
            sendCategoryData();
        } else if (buttonValue == updateButton) {
            sendUpdateCategoryData();

        }
    }
}

// End Field Validation  Function

//Start Delete category  Function
function deleteCategory(id)
{
    // if(confirm("Are you sure?")) {
    //  $(this).closest('tr').remove();
    deleteCategoryFromTable(id);
    //}
}

function deleteCategoryFromTable(id)
{
//    if (checkUserPrivelege(pvDeleteCategory)) {
    var loginUserId = getUserSessionElement("userId");
    $.post(server_base_url + "hrms/common/category/delete", {
        id: id,
        loginUserId: loginUserId
    }).done(function(data) {
        if (data == fail || data.statuscode == fail) {
            categoryEnableButton();
            displayErrorMessages("tablesuccessBefore", failMessage + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            categoryEnableButton();
            displayErrorMessages("tablesuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession || data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException || data.statuscode == statusException) {
            categoryEnableButton();
            displayErrorMessages("tablesuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            categoryEnableButton();
            displayErrorMessages("tablesuccessBefore", "No User available" + "");
        } else if (data == delete_map) {
            // dispalyhrmsCommonReligion();
            displayErrorMessages("tablesuccessBefore", "" + delete_map_messages, "");
            setTimeout(function() {
                $("#tablesuccessBefore").text("");
            }, 2100);
        } else {
            displaySuccessMessages("tablesuccessBefore", deleteMessage, "");
            setTimeout(function() {
                $("#categoryMasterTableListPanel").empty("");
                dispalyHrmsCommonCategory();
            }, 4000);
        }
    });
//    } else {
//        displaySuccessMessages("tablesuccessBefore", privilageNotExist);
//    }
}

//End Delete category 

//update category start 
function updateCategory(id, name)
{
    // createCategoryForm();
    //$("#categoryMasterTableListPanel").remove();
    //fetchAllCategoryMasterList();
    var category = decodeURI(name);
    $("#pregsuccessBefore").text("");

    $("#categoryName").val(category);
    $("#categoryMasterTableBody tr").css("background-color", "white");
    $("#categoryMasterTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#categorySaveandUpdateButton").text("Update");
    $("#categorySaveandUpdateButton").val("update");
    $("#categoryResetButton").text("Back");
    $("#idValue").val(id);
}
function sendUpdateCategoryData()
{
//    if (checkUserPrivelege(pvUpdateCategory)) {
    var loginUserId = getUserSessionElement("userId");
    var updatecategory = $("#categoryName").val().trim();
    var id = $("#idValue").val();
    $.post(server_base_url + "hrms/common/Category/Update", {
        category: updatecategory,
        id: id,
        loginUserId: loginUserId
    }).done(function(data) {
        console.log(data);
        if (data == fail || data.statuscode == fail) {
            categoryEnableButton();
            displayErrorMessages("pregsuccessBefore", failMessage + "");
        } else if (data == unauthorized || data.statuscode == unauthorized) {
            categoryEnableButton();
            displayErrorMessages("pregsuccessBefore", unauthorizedMessage + "");
        } else if (data == invalidSession || data.statuscode == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException || data.statuscode == statusException) {
            categoryEnableButton();
            displayErrorMessages("pregsuccessBefore", statusExceptionMessage + "");
        } else if (data == null) {
            categoryEnableButton();
            displayErrorMessages("pregsuccessBefore", "No User available" + "");
        } else if (data == duplicate_Message) {
            displayErrorMessages("pregsuccessBefore", "" + existed + "");
            categoryEnableButton();
            setTimeout(function() {
                dispalyHrmsCommonCategory();
            }, 2100);
        } else {
            // dispalyHrmsCommonCategory();
            displaySuccessMessages("pregsuccessBefore", updateMessage, "");
            //$("#pregsuccessBefore").append("<span style='color:green;'><center><strong>"+updateMessage+"</strong></center><br><br></span>");
            setTimeout(function() {
                dispalyHrmsCommonCategory();
            }, 4000);
        }
    });
//    } else {
//        displaySmallErrorMessagesInRed("pregsuccessBefore", privilageNotExist);
//    }
}

//update category end

//create category table
function fetchAllCategoryMasterList() {
//    if (checkUserPrivelege(pvViewCategory)) {
    $("#categoryMasterTableListPanel").remove("");
    $("#categorycolumnDiv").append("<div id='categoryMasterTableListPanel' class='panel panel-blue'/>");
    $("#categoryMasterTableListPanel").append("<div id='categoryMasterTableHeading' class='panel-heading' />");
    $("#categoryMasterTableHeading").append("<h4 id='categoryMasterTableHeader' class='panel-title' />");
    $("#categoryMasterTableHeader").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center><strong>List of Categories</strong></center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colCategoryList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#categoryMasterTableListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colCategoryList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colCategoryList span").hasClass("glyphicon-minus-sign")) {
            $("#colCategoryList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colCategoryList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });

    $("#collapseOne3").append("<div id='categoryListPanelTableMainDiv' class = 'panel-body' />");
    $("#categoryListPanelTableMainDiv").append("<center><span id='tablesuccessBefore'/></center>");
    $("#categoryListPanelTableMainDiv").append("<div id='categoryListPanelRow' class = 'row' />");
    $("#categoryListPanelTableMainDiv").append("<div class='tab-pane' id='viewUser'/>");
    $("#viewUser").append("<div id='categoryMastertableresponsiveDiv' class='table-responsive' />");
    $("#categoryMastertableresponsiveDiv").append('<table id="example2" class="table table-bordered">');

    //Start Header
    $("#example2").append("<thead  class=''><tr id='theadId'>"
            + " <th> S.No</th>"
            + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Category Name</th>");
//        if (checkUserPrivelege(pvUpdateCategory))
//        {
    $("#theadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
//        }
//        if (checkUserPrivelege(pvDeleteCategory)) {
    $("#theadId").append("<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>");
//        }
    $("#theadId").append("</tr></thead>");
    $.get(server_base_url + "hrms/common/Category/View", {
    }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + emptyListMessage + "");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + unauthorizedMessage + "");
            
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "" + statusExceptionMessage + "");
        } else if (data == null) {
            displayLargeErrorMessagesInCenterInRed("tablesuccessBefore", "No User available" + "");
        } else {
            if (data.length > 0) {
                var sno = 0;
                $("#example2").append("<tbody id='categoryMasterTableBody' class='table-striped table-bordered' />");

                for (var i = data.length - 1; i >= 0; i--) {
                    sno++;
                    $("#categoryMasterTableBody").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;'>"
                            + "<td>" + sno + "</td>"
                            + "<td style='cursor:pointer;'>" + data[i].categoryy + "</td>");
//                        if (checkUserPrivelege(pvUpdateCategory))
//                        {
                    $("#" + data[i]._id.$oid).append("<td> <a href='javascript:void(0);' onclick=updateCategory('" + data[i]._id.$oid + "','" + encodeURI(data[i].categoryy) + "') class='anchor_edit'><i class='fa fa-edit'>&nbsp;&nbsp;</i><span>Edit</span></a></td>");
//                        }
//                        if (checkUserPrivelege(pvDeleteCategory)) {
                    $("#" + data[i]._id.$oid).append("<td><a href='javascript:void(0);' onclick=deletePopUp('deleteCategory','fetchAllCategoryMasterList','" + data[i]._id.$oid + "')  class='anchor_delete'><i class='fa fa-trash-o'></i>&nbsp;&nbsp;<span>Delete</span></a></td></tr>");
//                        }
                    $("#" + data[i]._id.$oid).append("</tr>");
                }
            }
        }

        $("#example2").dataTable();
    });
//    }
}
//End category table

//Start Reset Function
function resetCategoryMaster() {
    $("#categoryName").val("");
    $("#pregsuccessBefore").text("");
    $("#categorySaveandUpdateButton").text("Save");
    $("#categorySaveandUpdateButton").val("save");
    $("#categoryResetButton").text("Reset");
}
//End Reset Function

//Start Button Disble and Enable Function
function categoryDisableButton() {
    $("#categorySaveandUpdateButton").attr('disabled', true);
    $("#categoryResetButton").attr('disabled', true);
}
function categoryEnableButton() {
    $("#categorySaveandUpdateButton").attr('disabled', false);
    $("#categoryResetButton").attr('disabled', false);
}
//End Button Disble and Enable Function

