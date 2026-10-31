$(document).ready(function () {
    $("#slideUpButton").click(function () {
        $("#panel").slideUp();
    });
    $("#slideDownButton").click(function () {
        $("#panel").slideDown();
    });
    $("#slideToggleButton").click(function () {
        $("#panel").slideToggle();
    });
});
