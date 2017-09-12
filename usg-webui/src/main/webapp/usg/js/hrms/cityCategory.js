/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cityCategoryMaster() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">City Category Master</a>');
    $("#dashboardBodyMainDiv").text("").append('<div id="cityCategoryMainDiv"/>');
    $("#cityCategoryMainDiv").text("").append("<div id='mainTabMenu'  />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");

    if (checkUserPrivelege(pvCreateCityCategory)) {

    $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
    $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");

    $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
    $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>City Category Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colCityCategory'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in' />");
    $("#colCityCategory").click(function() {
        $("#collapseOne2").toggle();
        if ($("#colCityCategory span").hasClass("glyphicon-minus-sign")) {
            $("#colCityCategory").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colCityCategory").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne2").append("<div id='cityCategorypanelMainBody' class = 'panel-body' />");

    $("#cityCategorypanelMainBody").append("<div id='cityCategorypanelRow' class='row' />");

        $("#cityCategorypanelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#cityCategorypanelRow").append("<div id='cityCategoryMessageDiv'></div>");
        $("#cityCategorypanelMainBody").append('<div  id="panelBodyDiv" class="panel-body pan form-horizontal" />');
        $("#panelBodyDiv").append('<div  id="formBodyPalDiv"  class="form-body pal" />');
        $("#formBodyPalDiv").append('<div  id="cityCategoryFieldDiv"  class="form-group" />');
        $("#cityCategoryFieldDiv").append('<label for="citycategory"  class="col-md-3 control-label">City Category<span class="require">*</span></label>');
        $("#cityCategoryFieldDiv").append("<span id='pregppidCityCategory'></span>");
        $("#cityCategoryFieldDiv").append('<div id="colmd9" class="col-md-9" />');
        $("#colmd9").append('<div  id="inputIconright" class=""/>');
    $("#inputIconright").append('<i class=""></i><input type="text" id="cityCat"  placeholder="City Category Name" class="form-control"/>');
        $("#colmd9").append("<span id='pregppidsection'></span>");
        $("#panelBodyDiv").append('<div id="panelRowa2" />');
        $("#panelRowa2").append('<div  id="cityCategoryButton" class="" />');
        $("#cityCategoryButton").append('<center><button id="sectionButtonSave" type="submit" onclick="saveCityCategory()" class="btn btn-success mr5">Save</button>&nbsp;&nbsp;&nbsp;<button id="resetButton" type="button" class="btn btn-warning mr5" onclick="resetCityCategory()">Reset</button></center>');

    $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    }
    if (checkUserPrivelege(pvViewCityCategory)) {


    viewCityCategoryList();

    }

}

function viewCityCategoryList()
{
    if (checkUserPrivelege(pvViewCityCategory)) {
       $("#tableHeader").append("<div id='maritalListPanel1' />");
    $("#maritalListPanel1").text("").append("<div id='maritalListPanel' class='panel panel-blue' />");
    $("#maritalListPanel").append("<div id='maritalListPanelHeading' class='panel-heading' />");
    $("#maritalListPanelHeading").append("<h4 id='firstHeader1' class='panel-title' />");
    $("#firstHeader1").append("<class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>List of City Categories</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colCityCategoryList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
    $("#maritalListPanel").append("<div id='collapseOne3' class='panel-collapse collapse in' />");
    $("#colCityCategoryList").click(function() {
        $("#collapseOne3").toggle();
        if ($("#colCityCategoryList span").hasClass("glyphicon-minus-sign")) {
            $("#colCityCategoryList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
        } else {
            $("#colCityCategoryList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
        }
    });
    $("#collapseOne3").append("<div id='listpanelMainBody' class = 'panel-body table-responsive' />");
    $("#listpanelMainBody").append("<div id='listpanelRow' class='row' />");
    $("#listpanelRow").append("<div id='CityCategoryListMsgDiv'>");
    $("#listpanelRow").append("<div id='cityCatlistpanelRow' class='table-responsive' />");

       $("#cityCatlistpanelRow").text("").append("<div id='displayCityCategorySubDiv' class = 'panel panel-primary-head'></div>");
    $("#displayCityCategorySubDiv").append("<table id='displayCityCategoryTable' class='table table-bordered'></table>");
        $("#displayCityCategoryTable").append("<thead class=''><tr id='cityCategoryTableHeadId'>"
                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>City Category</th>");
        if (checkUserPrivelege(pvUpdateCityCtaegory)) {
            $("#cityCategoryTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteCityCategory)) {
            $("#cityCategoryTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa' style='font-size:21px;'></i> Delete</th>");
        }

        $.get(server_base_url + "/hrms/salary/CityCategory/ViewList", {
        }).done(function(data) {

        if (data == fail) {
            displayLargeErrorMessagesInCenterInRed("CityCategoryListMsgDiv", "" + emptyListMessage + "<br /><br />");
            displayLargeErrorMessagesInCenterInRed("CityCategoryListMsgDiv", "" + emptyListMessage + "<br /><br />");
        } else if (data == unauthorized) {
            displayLargeErrorMessagesInCenterInRed("CityCategoryListMsgDiv", "" + unauthorizedMessage + "<br /><br />");
            displayLargeErrorMessagesInCenterInRed("CityCategoryListMsgDiv", "" + unauthorizedMessage + "<br /><br />");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayLargeErrorMessagesInCenterInRed("CityCategoryListMsgDiv", "" + NoDataFound + "<br /><br />");
            displayLargeErrorMessagesInCenterInRed("CityCategoryListMsgDiv", "" + NoDataFound + "<br /><br />");
        } else {
            if (data != null) {
                if (data.length > 0) {

                        var sno = 0;
                        $("#displayCityCategoryTable").append("<tbody id='displayCityCategoryTableBody' class='table-striped table-bordered' />");

                        for (var i = data.length - 1; i >= 0; i--) {
                            sno++;
                            var json = {
                                id: data[i]._id.$oid,
                                cityCategory: data[i].cityCategory
                            }
                            json = JSON.stringify(json)
                            $("#displayCityCategoryTableBody").append("<tr id='" + data[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + data[i].cityCategory + "</td>");
                            if (checkUserPrivelege(pvUpdateCityCtaegory)) {
                                $("#" + data[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editCityCategoryInfo('" + data[i]._id.$oid + "','" + encodeURI(json) + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a  class="anchor_edit" style="margin-width:1%,width:80px" >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteCityCategory)) {
                                $("#" + data[i]._id.$oid).append("<td style='cursor:pointer;'  onclick=deletePopUp('removeCityCategory','viewCityCategoryList','" + data[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a  class="anchor_delete" style="margin-width:1%,width:80px">Delete</a>' + "</td></tr>");


                            }

                        }

                        $("#displayCityCategoryTable").DataTable();
                    }
                }

            }
        });

    }

}
function editCityCategoryInfo(id, cityCategoryData)
{
    if (checkUserPrivelege(pvUpdateCityCtaegory)) {
        // alert();
        $("#cityCat").focus();
        $("#pregppidsection").text("");
        $("#cityCategoryMessageDiv").text("");

        if (cityCategoryData == null || cityCategoryData == "" || cityCategoryData == undefined) {
            return false;
        }

    cityCategoryData = JSON.parse(decodeURI(cityCategoryData));
    $("#cityCat").val(cityCategoryData.cityCategory);
    $("#cityCategoryMessageDiv").text("");
    $("#cityCat").prop("readonly", false);
    $("#displayCityCategoryTableBody tr").css("background-color", "white");
    $("#displayCityCategoryTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
    $("#cityCategoryButton").text("").append("<center><button id='updateButton' onclick=updateCityCategory('" + id + "') class='btn btn-success mr5' >Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button  id='ddoUpdateReset' class='btn btn-warning mr5'  onclick='cityCategoryMaster()'>Back</button></center>");
}
    }
function updateCityCategory(id)
{
    if (checkUserPrivelege(pvUpdateCityCtaegory)) {
        var cityCategory = $("#cityCat").val();
        removeSomeClass("cityCategoryFieldDiv", "has-error");

        if (cityCategory == "" || cityCategory == "undefined") {
            $("#cityCategoryMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill the mandatory field<strong></div></center>");
            return false;
        } else if (cityCategory != "") {
          
        $("#pregppidsection").text("");

            removeSomeClass("form-groupDiv", "has-error");
        }



    var loginUserId = getUserSessionElement("userId");

        $.post(server_base_url + "/hrms/salary/CityCategory/Update", {
            updateCityCategory: cityCategory,
            id: id,
            userid: getUserSessionElement("userId")
    }).done(function (data) {
            if (data.statuscode == fail) {
            displayErrorMessages("cityCategoryMessageDiv",""+ failMessage + "");
            } else if (data.statuscode == unauthorized) {
               displayErrorMessages("cityCategoryMessageDiv",""+ unauthorizedMessage + "");
            } else if (data.statuscode == statusException) {
               displayErrorMessages("cityCategoryMessageDiv",""+ statusExceptionMessage + "");
               
            } else if (data.statuscode == invalidSession) {
                callSessionTimeout();
        } else if (data == duplicate_Message) {
              $("#cityCat").prop("disabled", true);
            $("#cityCategoryButton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displayErrorMessages("pregsuccessBefore",""+ existed + "");
            setTimeout(function () {
              cityCategoryMaster();
            }, 2100);
        }  else if (data != null) {

            $("#cityCat").prop("disabled", true);
            $("#cityCategoryButton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages("cityCategoryMessageDiv", updateSuccessMessage, "");
            setTimeout(function () {
                cityCategoryMaster();
            }, 4000);
        } else {
            displayErrorMessages("cityCategoryMessageDiv", failMessage + "");
        }
    });
}
}

function removeCityCategory(id)
{
    if (checkUserPrivelege(pvDeleteCityCategory)) {
        $("#cityCategoryMessageDiv").text("");
    $.post(server_base_url + "/hrms/salary/CityCategory/Delete", {
        id: id,
        userId: getUserSessionElement("userId")
    }).done(function (data) {

        if (data == fail) {
            displayErrorMessages("CityCategoryListMsgDiv", "" + failMessage + "");
            displayErrorMessages("CityCategoryListMsgDiv", "" + failMessage + "");
        } else if (data == unauthorized) {
            displayErrorMessages("CityCategoryListMsgDiv", "" + unauthorizedMessage + "");
            displayErrorMessages("CityCategoryListMsgDiv", "" + unauthorizedMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayErrorMessages("CityCategoryListMsgDiv", "" + statusExceptionMessage + "");
            displayErrorMessages("CityCategoryListMsgDiv", "" + statusExceptionMessage + "");
        } else if (data == delete_map) {
            displayErrorMessages("CityCategoryListMsgDiv", "" + delete_map_messages, "");
            setTimeout(function () {
                $("#CityCategoryListMsgDiv").text("");
            }, 2100);
        } else {


            displaySuccessMessages("CityCategoryListMsgDiv", deleteSuccessMessage, "");
            setTimeout(function () {
                viewCityCategoryList();
            }, 4000);
        }
    });
    }
}
function resetCityCategory()
{
    $("#cityCat").val("");
    $("#pregppidCityCategory").text("");
    $("#cityCategoryMessageDiv").text("");
    removeSomeClass("cityCategoryFieldDiv", "has-error");
}



function saveCityCategory() {
    if (checkUserPrivelege(pvCreateCityCategory)) {

        var cityCategory1 = $("#cityCat").val();
        $("#pregppidsection").text("");
        $("#cityCategoryMessageDiv").text("");
        if (cityCategory1 == "" || cityCategory1 == "undefined") {
            addSomeClass("cityCategoryFieldDiv", "has-error");
            $("#cityCat").focus();
            $("#cityCategoryMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill the mandatory field<strong></div></center>");
            return false;
        } else if (cityCategory1 != "") {

        $("#pregppidsection").text("");

        removeSomeClass("form-groupDiv", "has-error");
    }

    var loginUserId = getUserSessionElement("userId");

    $.post(server_base_url + "/hrms/salary/CityCategory/Save", {
        cityCategory: cityCategory1,
        userid: getUserSessionElement("userId")
    }).done(function (data) {

        if (data.statuscode == fail) {
               displayErrorMessages("CityCategoryListMsgDiv", "" + failMessage + "");
        } else if (data.statuscode == unauthorized) {
             displayErrorMessages("CityCategoryListMsgDiv", "" + unauthorizedMessage + "");
            $("#cityCategoryMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + unauthorizedMessage + "<strong></div></center>");
        } else if (data.statuscode == statusException) {
             displayErrorMessages("CityCategoryListMsgDiv", "" + statusExceptionMessage + "");
            $("#cityCategoryMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>" + statusExceptionMessage + "<strong></div></center>");
        } else if (data.statuscode == invalidSession) {
           
            callSessionTimeout();
        } else if (data == duplicate_Message) {
            displayErrorMessages("cityCategoryMessageDiv", "" + existed + "");
               setTimeout(function () {
                cityCategoryMaster();
            }, 4000);

        } else if (data != null) {
            $("#cityCat").prop("disabled", true);
            $("#cityCategoryButton").attr('disabled', true);
            $("#resetButton").attr('disabled', true);
            displaySuccessMessages("cityCategoryMessageDiv", successMessage, "");
            setTimeout(function () {
                cityCategoryMaster();
            }, 4000);

        } else {
            displayErrorMessages("cityCategoryMessageDiv", failMessage + "s");
        }
    });
}
}




