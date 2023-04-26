$(document).ready(function () {
    $("button.schedule-button").click(function (event) {
        event.preventDefault();
        $("#dark-overlay").fadeIn(297, function () {
            $("#schedule-popup")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#main-screen-popup-cross, #dark-overlay").click(function () {
        $("#schedule-popup").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay").fadeOut(297);
        });
    });
});