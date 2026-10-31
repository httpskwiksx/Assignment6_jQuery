$(document).ready(function () {
    $("#changeImage").click(function () {
        $("#picture").attr("src", "images/image2.svg");
    });
    $("#changeLink").click(function () {
        $("#website").attr("href", "https://jquery.com/");
        $("#website").text("jQuery Website");
    });
});
