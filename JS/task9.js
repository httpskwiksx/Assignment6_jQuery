$(document).ready(function () {
    $("#animateButton").click(function () {
        $("#box")
            .animate({ left: "150px" }, 400)
            .animate({ top: "100px" }, 400)
            .animate({ width: "50px", height: "50px" }, 400)
            .animate({ left: "0px", top: "0px", width: "90px", height: "90px" }, 400);
    });
});
