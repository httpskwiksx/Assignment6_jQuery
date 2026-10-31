$(document).ready(function () {
    $("#animateButton").click(function () {
        $("#box").animate({
            opacity: 0.4,
            width: "150px",
            height: "150px",
            left: "150px",
            top: "50px"
        }, 1000);
    });
});
