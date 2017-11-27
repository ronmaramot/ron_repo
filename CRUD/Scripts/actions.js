function requestXHR(data, method, url, async) {
    var xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open(method, url, async);
    xhr.send(data);
    return xhr;
}

$(function () {
    $("#addDOB").datepicker({
        onSelect: function (value, ui) {
            var today = new Date(),
                dob = new Date(value),
                age = new Date(today - dob).getFullYear() - 1970;

            //alert($('#addAge').value);
            $('#addAge').val(age);
        },
        maxDate: '+0d',
        yearRange: '1920:' + (new Date()).getFullYear(),
        changeMonth: true,
        changeYear: true
    });
});