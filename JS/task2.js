$(document).ready(function () {
    $("#hideButton").click(function () {
        $("#message").hide();
    });
    $("#showButton").click(function () {
        $("#message").show();
    });
    $("#toggleButton").click(function () {
        $("#message").toggle();
    });
});
