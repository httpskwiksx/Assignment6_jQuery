$(document).ready(function () {
    $("#fadeOutButton").click(function () {
        $("#photo").fadeOut();
    });
    $("#fadeInButton").click(function () {
        $("#photo").fadeIn();
    });
    $("#fadeToggleButton").click(function () {
        $("#photo").fadeToggle();
    });
});
