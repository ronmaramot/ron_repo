var rgxDate = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;

function requestXHR(data, method, url, async) {
    var xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open(method, url, async);
    xhr.send(data);
    return xhr;
}

$(function () {
    // Displays date picker for DOB in adding person
    $("#addDOB").datepicker({
        // Calculates for the age of person
        onSelect: function (value, ui) {
            var today = new Date(),
                dob = new Date(value),
                age = new Date(today - dob).getFullYear() - 1970;
            
            $('#addAge').val(age);

            if (!$("#err_dob").hasClass("hidden"))
                $("#err_dob").toggleClass("hidden");
        },

        maxDate: '+0d',
        yearRange: '1920:' + (new Date()).getFullYear(),
        changeMonth: true,
        changeYear: true
    });

    // Validates the date picker for DOB in adding person
    $("#addDOB").change(function () {
        var dob = document.getElementById("addDOB");
        if (!rgxDate.test(dob.value)) {
            dob.value = "";
            if ($("#err_dob").hasClass("hidden"))
                $("#err_dob").toggleClass("hidden");
        } else {
            if (!$("#err_dob").hasClass("hidden"))
                $("#err_dob").toggleClass("hidden");
        }
    });

    // Displays date picker for DOB in editing person
    $("#editDOB").datepicker({
        // Calculates for the age of person
        onSelect: function (value, ui) {
            var today = new Date(),
                dob = new Date(value),
                age = new Date(today - dob).getFullYear() - 1970;
            
            $('#editAge').val(age);
        },

        maxDate: '+0d',
        yearRange: '1920:' + (new Date()).getFullYear(),
        changeMonth: true,
        changeYear: true
    });

    // Validates the date picker for DOB in editing person
    $("#editDOB").change(function () {
        var dob = document.getElementById("editDOB");
        if (!rgxDate.test(dob.value)) {
            dob.value = "";
        }
    });
});