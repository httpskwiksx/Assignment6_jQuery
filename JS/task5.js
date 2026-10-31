$(document).ready(function () {
    $("#addButton").click(function () {
        $("#items").append("<li>New item</li>");
    });
    $("#prependButton").click(function () {
        $("#items").prepend("<li>First item</li>");
    });
    $("#removeButton").click(function () {
        $("#items li:last").remove();
    });
});
