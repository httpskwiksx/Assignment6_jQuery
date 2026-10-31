$(document).ready(function () {
    $("#name").on("input", function () {
        $("#nameOutput").text($("#name").val());
    });
    $("#email").on("input", function () {
        $("#emailOutput").text($("#email").val());
    });
});
