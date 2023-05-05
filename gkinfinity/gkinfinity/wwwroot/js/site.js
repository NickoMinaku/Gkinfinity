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

$(document).ready(function () {
    $("div.semki-money-item:first-of-type").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#spend-popup")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#spend-popup").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $("div.semki-money-item:first-of-type + .semki-money-item").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#stonk-popup")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#stonk-popup").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $("div.semki-money-item:first-of-type + .semki-money-item + .semki-money-item").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#clear-popup")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#clear-popup").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".semki-price-block button:first-of-type").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#semki-partnership-list")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#semki-partnership-list").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".semki-price-block button:first-of-type + button").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#semki-description")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#semki-description").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".semki-price-block button:first-of-type + button + button").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#semki-questions")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#semki-questions").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $("div.semki-deal-item:first-of-type").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#semki-call-description")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#semki-call-description").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $("div.semki-deal-item:first-of-type + div.semki-deal-item").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#semki-deal")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#semki-deal").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $("div.semki-deal-item:first-of-type + div.semki-deal-item + div.semki-deal-item").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#semki-car")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#semki-car").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $("div.semki-deal-item:first-of-type + div.semki-deal-item + div.semki-deal-item + div.semki-deal-item").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#semki-manager")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#semki-manager").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $("a.golden-cat-send-request").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-goldencat").fadeIn(297, function () {
            $("#goldencat-send-request-form")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-goldencat").click(function () {
        $("#goldencat-send-request-form").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-goldencat").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $("a.goldencat-spend-button").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-goldencat").fadeIn(297, function () {
            $("#goldencat-spend-description")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-goldencat").click(function () {
        $("#goldencat-spend-description").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-goldencat").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $("div.send-request").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-magnum").fadeIn(297, function () {
            $("#send-request-form")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#magnum-popup-cross, #dark-overlay-magnum").click(function () {
        $("#send-request-form").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-magnum").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $("#advantages-bt1").click(function (event) {
        event.preventDefault();
        num = Array.from(document.querySelector('.advantages-text').classList)[Array.from(document.querySelector('.advantages-text').classList).length - 1];
        document.querySelector('.advantages-text').classList.replace(num,'p1');
    });
});

$(document).ready(function () {
    $("#advantages-bt2").click(function (event) {
        event.preventDefault();
        num = Array.from(document.querySelector('.advantages-text').classList)[Array.from(document.querySelector('.advantages-text').classList).length - 1];
        document.querySelector('.advantages-text').classList.replace(num, 'p2');
    });
});

$(document).ready(function () {
    $("#advantages-bt3").click(function (event) {
        event.preventDefault();
        num = Array.from(document.querySelector('.advantages-text').classList)[Array.from(document.querySelector('.advantages-text').classList).length - 1];
        document.querySelector('.advantages-text').classList.replace(num, 'p3');
    });
});

$(document).ready(function () {
    $("#advantages-bt4").click(function (event) {
        event.preventDefault();
        num = Array.from(document.querySelector('.advantages-text').classList)[Array.from(document.querySelector('.advantages-text').classList).length - 1];
        document.querySelector('.advantages-text').classList.replace(num, 'p4');
    });
});

$(document).ready(function () {
    $("#advantages-bt5").click(function (event) {
        event.preventDefault();
        num = Array.from(document.querySelector('.advantages-text').classList)[Array.from(document.querySelector('.advantages-text').classList).length - 1];
        document.querySelector('.advantages-text').classList.replace(num, 'p5');
    });
});

$(document).ready(function () {
    $("#advantages-bt6").click(function (event) {
        event.preventDefault();
        num = Array.from(document.querySelector('.advantages-text').classList)[Array.from(document.querySelector('.advantages-text').classList).length - 1];
        document.querySelector('.advantages-text').classList.replace(num, 'p6');
    });
});

$(document).ready(function () {
    $("#advantages-bt7").click(function (event) {
        event.preventDefault();
        num = Array.from(document.querySelector('.advantages-text').classList)[Array.from(document.querySelector('.advantages-text').classList).length - 1];
        document.querySelector('.advantages-text').classList.replace(num, 'p7');
    });
});

class Accordion {
    constructor(el) {
        this.el = el;
        this.isAnimating = false;
        $(el).click(function (event) {
            event.preventDefault();
            if (this.className == "semki-details raleway-900fw-20px-black off" && !this.isAnimating) {
                $(this).toggleClass("off");
                $(this).toggleClass("on");
                this.isAnimating = true;
                $(this).animate({
                height: `${$(this).get(0).scrollHeight + 25}px`
                }, "fast", function () {
                    this.isAnimating = false;
            });
            }
            else if (this.className == "semki-details raleway-900fw-20px-black on" && !this.isAnimating) {
                event.preventDefault();
                $(this).toggleClass("off");
                $(this).toggleClass("on");
                this.isAnimating = true;
                $(this).animate({
                    height: "50px"
                }, "fast", function () {
                    this.isAnimating = false;
                });
            }

            
        });

        
    }
}

class Accordion2 {
    constructor(el) {
        this.el = el;
        this.isAnimating = false;
        $(el).click(function (event) {
            event.preventDefault();
            if (this.className == "magnum-details raleway-900fw-18px-white off" && !this.isAnimating) {
                $(this).toggleClass("off");
                $(this).toggleClass("on");
                this.isAnimating = true;
                $(this).animate({
                    height: `${$(this).get(0).scrollHeight + 15}px`
                }, "fast", function () {
                    this.isAnimating = false;
                });
            }
            else if (this.className == "magnum-details raleway-900fw-18px-white on" && !this.isAnimating) {
                event.preventDefault();
                $(this).toggleClass("off");
                $(this).toggleClass("on");
                this.isAnimating = true;
                $(this).animate({
                    height: "60px"
                }, "fast", function () {
                    this.isAnimating = false;
                });
            }

        });


    }
}

class Accordion3 {
    constructor(el) {
        this.el = el;
        this.isAnimating = false;
        $(el).click(function (event) {
            event.preventDefault();
            if (this.className == "raleway-900fw-18px-white magnum-details2 off" && !this.isAnimating) {
                $(this).toggleClass("off");
                $(this).toggleClass("on");
                this.isAnimating = true;
                $(this).animate({
                    height: `${$(this).get(0).scrollHeight + 20}px`
                }, "fast", function () {
                    this.isAnimating = false;
                });
            }
            else if (this.className == "raleway-900fw-18px-white magnum-details2 on" && !this.isAnimating) {
                event.preventDefault();
                $(this).toggleClass("off");
                $(this).toggleClass("on");
                this.isAnimating = true;
                $(this).animate({
                    height: "51px"
                }, "fast", function () {
                    this.isAnimating = false;
                });
            }

        });


    }
}

document.querySelectorAll('.semki-details').forEach(el => {
    new Accordion(el)
})

document.querySelectorAll('.magnum-details').forEach(el => {
    new Accordion2(el)
})

document.querySelectorAll('.magnum-details2').forEach(el => {
    new Accordion3(el)
})