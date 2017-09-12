/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayCityMaster() {
    scrolupfunction();
    $("#dashboardOrderListId").text("").append('<a href="javascript:void(0)" data-toggle="tab" onclick="displayHrmsHorizontalBar()">HRMS</a> > <a href="javascript:void(0)" data-toggle="tab" onclick="hrmsMenuTabs()">Salary Master</a> > <a href="javascript:void(0)" data-toggle="tab">City Master</a>');
    //$("#dashboardTitleMainDiv").text("").append('<label><a href="javascript:displayHrmsHorizontalBar()">HRMS</a></label> >> <label><a href="javascript:hrmsMenuTabs()">Salary Master</a></label> >> <label>City Master</label>');
    $("#dashboardBodyMainDiv").text("").append("<div id='testMainDivId' />");
    $("#testMainDivId").text("").append("<div id='mainTabMenu'   />");

    $("#mainTabMenu").append("<div id='tableHeader'/>");
    if (checkUserPrivelege(pvCreateCity)) {
        $("#tableHeader").append("<div id='FirstPanel' class='panel panel-blue' />");
        $("#FirstPanel").append("<div id='firstPanelHeading' class='panel-heading' />");
        $("#firstPanelHeading").append("<h4 id='tableHeader1' class='panel-title' />");
        $("#tableHeader1").append("<div class='panel-title' style='font-weight:bold;font-size:15px;' data-parent='#accordion2'><center>City Master</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colCity'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");
        $("#FirstPanel").append("<div id='collapseOne2' class='panel-collapse collapse in pal' />");
        $("#colCity").click(function () {
            $("#collapseOne2").toggle();
            if ($("#colCity span").hasClass("glyphicon-minus-sign")) {
                $("#colCity").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colCity").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#collapseOne2").append("<div id='panelMainBody' class = 'panel-body' />");
        $("#panelMainBody").append("<div id='panelRow' class='row' />");
        $("#panelRow").append("<div id='cityMessageDiv'></div>");
        $("#panelRow").append("<center><span id='pregsuccessBefore'></span></center>");
        $("#panelRow").append("<div id='FieldGroup' class='form-group' />");

        $("#FieldGroup").append("<input type='hidden' id='saveorupdate' value='save'>");
        $("#FieldGroup").append("<input type='hidden' id='bid' >");




        getTwoColumnInRow("FieldGroup", "Row1", "Row1Col1", "Row1Col2");
        $("#Row1Col1").append(getLabel("City Category", "required") + "" + getDropDown("city_Category"));
        $("#Row1Col2").append(getLabel_InputWithSpan("City Name", "required", "cityName", "Enter City Name", "onkeypress='return validatealphanumeric(event)'"));

        getTwoColumnInRow("FieldGroup", "Row2", "Row2Col1", "Row2Col2");
        $("#Row2Col1").append(getLabel_InputWithSpan("Address1 ", "", "address1", "Enter Address1", ""));
        $("#Row2Col2").append(getLabel_InputWithSpan("Address2 ", "", "address2", "Enter Address2", ""));

        $("#panelMainBody").append("<div id='citypanelRow2' class='row' />");
        $("#citypanelRow2").append("<div id='cityFieldGroup2' class='form-group' />");
        $("#cityFieldGroup2").append("<label class='col-sm-2 control-label'>Is Metro?</label>");
        $("#cityFieldGroup2").append("<div id='cityFieldDiv4' class='col-sm-4' />");
        $("#cityFieldDiv4").append("<input type='checkbox' id='checkbox' value='YES' class='subject-list'>");
        $("#cityFieldGroup2").append("<label class='col-sm-2 control-label'>Is Other?</label>");
        $("#cityFieldGroup2").append("<div id='cityFieldDiv5' class='col-sm-4'  />");
        $("#cityFieldDiv5").append("<input type='checkbox' id='checkbox1' value='YES' class='subject-list' >");
        $('.subject-list').on('change', function () {
            $('.subject-list').not(this).prop('checked', false);
        });

        $("#panelMainBody").append("<div id='cDApanelRowE' class='row' />");
        $("#cDApanelRowE").append("<div id='cDApanelRowC1' class='col-sm-2 ' />");
        $("#cDApanelRowE").append("<div id='cDApanelRowC2' class='col-sm-3 ' />");


        $("#cDApanelRowC2").append("<span id='cDAErr'></span>");


        $("#panelMainBody").append("<div id='citypanelRow3' />");
        $("#citypanelRow3").append('<div  id="cityButton" class="" />');

        $("#cityButton").append("<center><button type='button' id='cityButtonSave'  onclick='saveCity()' class='btn btn-success mr5' >Save</button>&nbsp;&nbsp;&nbsp;<button type='button' onclick='resetCityData()' class='btn btn-warning mr5' id='resetButton' name='reset' value='reset'>Reset</button></center>");
        $("input").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });


    }
    fetchAllCityCategories();
    if (checkUserPrivelege(pvViewCity)) {
        viewCity();
    }
}
function viewCity() {
    if (checkUserPrivelege(pvViewCity)) {

        $("#tableHeader").append("<div id='cityListPanel1' />");
        $("#cityListPanel1").text("").append("<div id='cityListPanel' class='panel panel-blue' />");
        $("#cityListPanel").append("<div id='cityListPanelHeading' class='panel-heading' />");
        $("#cityListPanelHeading").append("<h4 id='cityfirstHeader1' class='panel-title' />");
        $("#cityfirstHeader1").append("<center></center>");
        $("#cityfirstHeader1").append("<div class='panel-title' a data-toggle='collapse' style='font-weight:bold;font-size:15px;' data-parent='#accordion2' href='#citycollapseOne3'><center>List Of Cities</center><div class='pull-right' style='position: relative;bottom: 15px;cursor:pointer;' id='colCityList'><span class='glyphicon glyphicon-minus-sign'></span></div></div>");

        $("#cityListPanel").append("<div id='citycollapseOne3' class='panel-collapse collapse in' />");
        $("#colCityList").click(function () {
            $("#citycollapseOne3").toggle();
            if ($("#colCityList span").hasClass("glyphicon-minus-sign")) {
                $("#colCityList").text("").append("<span class='glyphicon glyphicon-plus-sign'></span>");
            } else {
                $("#colCityList").text("").append("<span class='glyphicon glyphicon-minus-sign'></span>");
            }
        });
        $("#citycollapseOne3").append("<div id='citylistpanelMainBody' class = 'panel-body table-responsive' />");
        $("#citylistpanelMainBody").append("<div id='citylistpanelRow' class='row ' />");
        $("#citylistpanelRow").append("<div  id='cityListPanelMsgDiv'>");
        $("#citylistpanelRow").append("<div id='citySubDiv1' class = 'panel panel-primary-head'></div>");
        $("#citySubDiv1").append("<table id='cityTable' class='table table-bordered'></table>");
        // pqrs table header
        $("#cityTable").append("<thead class=''><tr id='cityTableHeadId'>"

                + " <th> S.No</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>City Category</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>City Name</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Is Metro</th>"
                + "<th style='min-width:30%;width:auto;'><i class='fa'></i>Is Other</th>");
        if (checkUserPrivelege(pvUpdateCity)) {
            $("#cityTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa'></i>Edit</th>");
        }
        if (checkUserPrivelege(pvDeleteCity)) {
            $("#cityTableHeadId").append("<th style='min-width:1%;width:80px;'><i class='fa' ></i> Delete</th>");
        }
        $.get(server_base_url + "/hrms/salary/City/ViewList", {
        }).done(function (pdata) {


            if (pdata == fail) {

                displayLargeErrorMessagesInCenterInRed("cityListPanelMsgDiv", "" + emptyListMessage + "");
                displayLargeErrorMessagesInCenterInRed("cityListPanelMsgDiv", "" + emptyListMessage + "");
            } else if (pdata.statuscode == unauthorized) {
                displayLargeErrorMessagesInCenterInRed("cityListPanelMsgDiv", "" + unauthorizedMessage + "");
                displayLargeErrorMessagesInCenterInRed("cityListPanelMsgDiv", "" + unauthorizedMessage + "");
            } else if (pdata == invalidSession) {
                callSessionTimeout();
            } else if (pdata == statusException) {
                displayLargeErrorMessagesInCenterInRed("cityListPanelMsgDiv", "" + NoDataFound + "");
                displayLargeErrorMessagesInCenterInRed("cityListPanelMsgDiv", "" + NoDataFound + "");
            } else {
                if (pdata != null) {

                    if (pdata.length > 0) {

                        var sno = 0;
                        // pqrs table body
                        $("#cityTable").append("<tbody id='cityTableBody' class='table-striped table-bordered' />");

                        for (var i = pdata.length - 1; i >= 0; i--) {
                            sno++;

                            var cityjson = {
                                cityid: pdata[i]._id.$oid,
                                cityCategory: pdata[i].categoryCity,
                                cityName: pdata[i].cityName,
                                addressOne: pdata[i].addressOne,
                                addressTwo: pdata[i].addressTwo,
                                isMetro: pdata[i].isMetro,
                                isOther: pdata[i].isOther

                            }

                            cityjson = JSON.stringify(cityjson);

                            $("#cityTableBody").append("<tr id='" + pdata[i]._id.$oid + "' style='cursor:pointer;' >"
                                    + "<td>" + sno + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].categoryCityName + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].cityName + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].isMetro + "</td>"
                                    + "<td style='cursor:pointer;'>" + pdata[i].isOther + "</td>");
                            if (checkUserPrivelege(pvUpdateCity)) {
                                $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=editCity('" + encodeURI(cityjson) + "','" + pdata[i]._id.$oid + "')>" + ' <i class="fa fa-edit"></i>&nbsp;&nbsp;<a   class="anchor_edit"   >Edit</a>' + "</td>");
                            }
                            if (checkUserPrivelege(pvDeleteCity)) {
                                $("#" + pdata[i]._id.$oid).append("<td style='cursor:pointer;' onclick=deletePopUp('deleteCityData','viewCity','" + pdata[i]._id.$oid + "')>" + ' <i class="fa fa-trash-o"></i>&nbsp;&nbsp;<a type="button"  class="anchor_delete"   >Delete</a>' + "</td>");
                            }

                        }
                        $("#cityTable").DataTable({
                            paging: true
                        });
                    }
                }

            }
        });


    }
}

function editCity(obj, id) {

    //alert();
    // $("#pregppidsection").text("");
    //removeSomeClass("disciplineFieldDiv", "has-error");
    //$("#disciplineName").focus();
    if (checkUserPrivelege(pvUpdateCity)) {
        if (obj == null || obj == "" || obj == undefined) {
            return false;
        }

        obj = JSON.parse(decodeURI(obj));

        $("#city_Category").val(obj.cityCategory);
        // $("#city_Category option:contains("+ obj.cityCategory +")").attr('selected', 'selected');
        $("#cityName").val(obj.cityName);
        $("#address1").val(obj.addressOne);
        $("#address2").val(obj.addressTwo);
        $("#cityMessageDiv").text("");
        $("#disciplineName").prop("readonly", false);
        $("#cityName").prop("readonly", false);
        $("#cityTableBody tr").css("background-color", "white");
        $("#cityTableBody tr" + "#" + id).css("background-color", "rgba(10, 129, 156, 0.3)");
        $("#address1").prop("readonly", false);
        $("#address2").prop("readonly", false);
        //fetchAllUpdateCityCategories(obj.categoryCity);
        $("#cityButton").text("").append("<center><button id='updateButton' onclick=updateCityData('" + id + "') class='btn btn-success mr5'>Update</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button  id='ddoUpdateReset' class='btn btn-warning mr5'  onclick='displayCityMaster()'>Back</button></center>");

        if (obj.isMetro == 'YES') {

            $('#checkbox').not(this).prop('checked', true);
        }



        if (obj.isOther == 'YES') {

            $('#checkbox1').not(this).prop('checked', true);
        }

    }



}

function updateCityData(id) {
    if (checkUserPrivelege(pvUpdateCity)) {
        var id = id;

        var city_category = $("#city_Category").val();

        var city_name = $("#cityName").val();

        var address_one = $("#address1").val();

        var address_two = $("#address2").val();

        var is_metro = $("#checkbox").val();

        var is_other = $("#checkbox1").val();

        $("#cityMessageDiv").text("");
        if (city_category == "" || city_category == "undefined" || city_name == "" || city_name == "undefined") {
            $("#cityMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill all mandatory fields<strong></div></center>");
            return false;
        } else if (city_name != "") {
            ///alert();
            if (!city_name.match(alphaNumericPattern())) {
                addSomeClass("Row1Col2", "has-error");
                $("#cityName").focus();
                $("#cityNameErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid City Name.</span>");
                //alert("Please Enter Valid Description.");
                return false;
            }
            $("#cityNameErr").text("");

            removeSomeClass("Row1Col2", "has-error");
            //sendSectionData();
        }
        if ($('#checkbox').prop('checked')) {
            is_metro = $("#checkbox").val();
        } else
        {
            is_metro = 'NO';
        }

        if ($('#checkbox1').prop('checked')) {
            is_other = $("#checkbox1").val();
        } else
        {
            is_other = 'NO';
        }

        var updatecityjson = {
            categoryCity: city_category,
            cityName: city_name,
            addressOne: address_one,
            addressTwo: address_two,
            isMetro: is_metro,
            isOther: is_other
        };
        var userId = getUserSessionElement("userId");


        $.post(server_base_url + "/hrms/salary/City/Update", {
            updateJson: JSON.stringify(updatecityjson),
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {

            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "" + failMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + failMessage + "");
            } else if (data == unauthorized) {
                displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
            } else if (data == duplicate_Message) {
                $("#city_Category").prop("disabled", true);
                $("#cityName").prop("disabled", true);
                $("#address1").prop("disabled", true);
                $("#address2").prop("disabled", true);
                $("#updateButton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displayErrorMessages("cityMessageDiv", "This Data " + duplicate_MessagsExist + "");
                setTimeout(function () {
                    displayCityMaster();
                }, 1100);
            } else if (data != null) {
                $("#city_Category").prop("disabled", true);
                $("#cityName").prop("disabled", true);
                $("#address1").prop("disabled", true);
                $("#address2").prop("disabled", true);
                $("#updateButton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("cityMessageDiv", successMessage, "");
                setTimeout(function () {
                    displayCityMaster();
                }, 4000);

            } else {
                displayErrorMessages("cityMessageDiv", failMessage + "");

            }

        });

    }
}

function resetCityData()
{
    $("#cityName").val("");
    $("#city_Category").val("");
    $("#address1").val("");
    $("#address2").val("");
    $("#checkbox").val("");
    $("#checkbox1").val("");
    $("#checkbox").prop("checked", false);
    $("#checkbox1").prop("checked", false);
    $("#city_CategoryErr").text("");
    $("#cityNameErr").text("");
    $("#address1Err").text("");
    $("#address2Err").text("");
    $("#cDAErr").text("");
    $("#cityMessageDiv").text("");
    $("#pregsuccessBefore").text("");


}
function saveCity() {

    if (checkUserPrivelege(pvCreateCity)) {
        var city_category = $("#city_Category").val();
        var city_name = $("#cityName").val();
        var address1 = $("#address1").val();
        var address2 = $("#address2").val();
        var isMetro = $("#checkbox").val();
        var isOther = $("#checkbox1").val();
        
        $("#city_CategoryErr").text("");
        $("#cityMessageDiv").text("");
        $("#pregsuccessBefore").text("");

        if (city_category == null || city_category == "" || city_category == "undefined" || city_name == "" || city_name == "undefined") {
            $("#cityMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>Please fill all mandatory fields<strong></div></center>");
            return false;
        } else if (city_name != "") {
            if (!city_name.match(alphaNumericPattern())) {
                addSomeClass("Row1Col2", "has-error");
                $("#cityName").focus();
                $("#cityNameErr").text("").append("<span class='smallErrorMsg class='col-sm-12'  style='color:red;''>Please Enter Valid City Name.</span>");
                return false;
            }
            $("#cityNameErr").text("");

            removeSomeClass("Row1Col2", "has-error");
        }

        if ($('#checkbox').prop('checked')) {
            isMetro = $("#checkbox").val();
        } else
        {
            isMetro = 'NO';
        }
        if ($('#checkbox1').prop('checked')) {
            isOther = $("#checkbox1").val();
        } else
        {
            isOther = 'NO';
        }



        var cityjson = {
            categoryCity: city_category,
            cityName: city_name,
            addressOne: address1,
            addressTwo: address2,
            isMetro: isMetro,
            isOther: isOther


        };
        cityjson = JSON.stringify(cityjson);

        $.post(server_base_url + "/hrms/salary/City/Save", {
            cityMaster: cityjson,
            userid: getUserSessionElement("userId")
        }).done(function (data) {


            if (data == fail) {
                displayErrorMessages("pregsuccessBefore", "" + failMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + failMessage + "");
            } else if (data == unauthorized) {
                displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "");
                displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
            } else if (data == duplicate_Message) {
                displayErrorMessages("cityMessageDiv", "" + existed + "");
                setTimeout(function () {
                    displayCityMaster();
                }, 800);

            } else if (data != null) {
                $("#city_Category").prop("disabled", true);
                $("#cityName").prop("disabled", true);
                $("#address1").prop("disabled", true);
                $("#address2").prop("disabled", true);
                $("#updateButton").attr('disabled', true);
                $("#resetButton").attr('disabled', true);
                displaySuccessMessages("cityMessageDiv", successMessage, "");
                setTimeout(function () {
                    displayCityMaster();
                }, 4000);

            } else {
                $("#cityMessageDiv").text("").append("<center><div class='col-sm-12' id='errorMessage' style='color:red;'><strong>City Creation Failed<strong></div></center>");
            }
        });

    }
}


function deleteCity(id) {
    if (checkUserPrivelege(pvDeleteCity)) {
        if (confirm("Are you sure?")) {
            $(this).closest('tr').remove();
            deleteCityData(id);
        }
    }
}

function deleteCityData(id) {
    if (checkUserPrivelege(pvDeleteCity)) {
        $("#cityMessageDiv").text("");
        $.post(server_base_url + "/hrms/salary/City/Delete", {
            id: id,
            userid: getUserSessionElement("userId")
        }).done(function (data) {
            if (data == fail) {
                displayErrorMessages("cityListPanelMsgDiv", "" + failMessage + "");
                displayErrorMessages("cityListPanelMsgDiv", "" + failMessage + "");
            } else if (data == unauthorized) {
                displayErrorMessages("cityListPanelMsgDiv", "" + unauthorizedMessage + "");
                displayErrorMessages("cityListPanelMsgDiv", "" + unauthorizedMessage + "");
            } else if (data == invalidSession) {
                callSessionTimeout();
            } else if (data == statusException) {
                displayErrorMessages("cityListPanelMsgDiv", "" + statusExceptionMessage + "");
                displayErrorMessages("cityListPanelMsgDiv", "" + statusExceptionMessage + "");

            } else if (data == delete_map) {
                displayErrorMessages("cityListPanelMsgDiv", "" + delete_map_messages, "");
                setTimeout(function () {
                    viewCity();
                }, 1000);
            } else {

                displaySuccessMessages("cityListPanelMsgDiv", deleteSuccessMessage, "");
                setTimeout(function () {
                    viewCity();
                }, 4000);

            }
        });


    }
}
function fetchAllCityCategories(name) {

    $.post(server_base_url + "/hrms/salary/CityCategory/ViewList", {
    }).done(function (data) {

        if (data == fail) {
           
        } else if (data == unauthorized) {
           
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            
        } else {
            $("#city_Category").append("<option value = '' selected disabled> -----Select City Category-----</option>");
            for (var i = 0; i < data.length; i++) {
                if (name == data[i].cityCategory) {
                    $("#city_Category").append("<option  value='" + data[i]._id.$oid + "' selected>" + data[i].cityCategory + "</option>");

                } else {
                    $("#city_Category").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].cityCategory + "</option>");
                }
            }
        }
    });
}

function fetchAllUpdateCityCategories(name) {
//alert();
    $.post(server_base_url + "/hrms/salary/CityCategory/ViewList", {
    }).done(function (data) {

        if (data == fail) {
            displayErrorMessages("pregsuccessBefore", "" + failMessage + "");
            displayErrorMessages("pregsuccessAfter", "" + failMessage + "");
        } else if (data == unauthorized) {
            displayErrorMessages("pregsuccessBefore", "" + unauthorizedMessage + "");
            displayErrorMessages("pregsuccessAfter", "" + unauthorizedMessage + "");
        } else if (data == invalidSession) {
            callSessionTimeout();
        } else if (data == statusException) {
            displayErrorMessages("pregsuccessBefore", "" + statusExceptionMessage + "");
            displayErrorMessages("pregsuccessAfter", "" + statusExceptionMessage + "");
        } else {

            for (var i = 0; i < data.length; i++) {

                if (name == data[i].cityCategory) {


                    $("#city_Category").append("<option  value='" + data[i]._id.$oid + "'>" + data[i].cityCategory + "</option>");

                } else
                {
                    $("#city_Category").append("<option  value='" + data[i]._id.$oid + "' >" + data[i].cityCategory + "</option>");
                }
            }
        }

    });
}