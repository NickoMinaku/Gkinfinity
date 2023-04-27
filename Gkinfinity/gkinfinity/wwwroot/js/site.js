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

$(document).ready(function () {
    $("a.send-request").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#send-request-form")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#send-request-form").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});