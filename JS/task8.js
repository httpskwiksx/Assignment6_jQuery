$(document).ready(function () {
    $("#animateButton").click(function () {
        $("#box").animate({
            width: "150px",
            height: "150px",
            left: "150px",
            top: "50px"
        }, 800);
    });
});
