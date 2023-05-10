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
    $("div.send-request").click(function (event) {
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
    $(".waterlife-about-b2 div div:nth-of-type(1)").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#waterlife-modal1")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#waterlife-modal1").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".waterlife-about-b2 div div:nth-of-type(2)").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#waterlife-modal2")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#waterlife-modal2").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".waterlife-about-b2 div div:nth-of-type(3)").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#waterlife-modal3")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#waterlife-modal3").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".waterlife-price div div:nth-of-type(1)").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#waterlife-modal4")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#waterlife-modal4").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".waterlife-price div div:nth-of-type(2)").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#waterlife-modal5")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#waterlife-modal5").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-semki").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".waterlife-price div div:nth-of-type(3)").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-semki").fadeIn(297, function () {
            $("#waterlife-modal6")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-semki").click(function () {
        $("#waterlife-modal6").animate({ opacity: 0 }, 198, function () {
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
    $(".magnum-send-request-block div button:first-of-type").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-magnum").fadeIn(297, function () {
            $("#magnum-whatinside-popup")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#magnum-popup-cross, #dark-overlay-magnum").click(function () {
        $("#magnum-whatinside-popup").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-magnum").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".magnum-send-request-block div button:last-of-type").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-magnum").fadeIn(297, function () {
            $("#magnum-questions")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#magnum-popup-cross, #dark-overlay-magnum").click(function () {
        $("#magnum-questions").animate({ opacity: 0 }, 198, function () {
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

$(document).ready(function () {
    $(".magnum-partnership .card-info:nth-of-type(1) button").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-magnum").fadeIn(297, function () {
            $("#semki-call-description")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-magnum").click(function () {
        $("#semki-call-description").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-magnum").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".magnum-partnership .card-info:nth-of-type(2) button").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-magnum").fadeIn(297, function () {
            $("#semki-deal")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-magnum").click(function () {
        $("#semki-deal").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-magnum").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".magnum-partnership .card-info:nth-of-type(3) button").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-magnum").fadeIn(297, function () {
            $("#semki-car")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-magnum").click(function () {
        $("#semki-car").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-magnum").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".magnum-partnership .card-info:nth-of-type(4) button").click(function (event) {
        event.preventDefault();
        $("#dark-overlay-magnum").fadeIn(297, function () {
            $("#semki-manager")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#semki-popup-cross, #dark-overlay-magnum").click(function () {
        $("#semki-manager").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#dark-overlay-magnum").fadeOut(297);
        });
    });
});

$(document).ready(function () {
    $(".waterlife-partnership .card-info:nth-of-type(1) button").click(function (event) {
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
    $(".waterlife-partnership .card-info:nth-of-type(2) button").click(function (event) {
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
    $(".waterlife-partnership .card-info:nth-of-type(3) button").click(function (event) {
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
    $(".waterlife-partnership .card-info:nth-of-type(4) button").click(function (event) {
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
    $(".policy").click(function (event) {
        event.preventDefault();
        $("#overlay").fadeIn(297, function () {
            $("#policy")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#popup-cross, #overlay").click(function () {
        $("#policy").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#overlay").fadeOut(297);
        });
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

class Accordion4 {
    constructor(el) {
        this.el = el;
        this.isAnimating = false;
        $(el).click(function (event) {
            event.preventDefault();
            if (this.className == "waterlife-details raleway-900fw-18px-black off" && !this.isAnimating) {
                $(this).toggleClass("off");
                $(this).toggleClass("on");
                this.isAnimating = true;
                $(this).animate({
                    height: `${$(this).get(0).scrollHeight + 25}px`
                }, "fast", function () {
                    this.isAnimating = false;
                });
            }
            else if (this.className == "waterlife-details raleway-900fw-18px-black on" && !this.isAnimating) {
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

document.querySelectorAll('.semki-details').forEach(el => {
    new Accordion(el)
})

document.querySelectorAll('.magnum-details').forEach(el => {
    new Accordion2(el)
})

document.querySelectorAll('.magnum-details2').forEach(el => {
    new Accordion3(el)
})

document.querySelectorAll('.waterlife-details').forEach(el => {
    new Accordion4(el)
})

$(document).ready(function () {
    $(function () {
        $('#form').validate({
            rules: {
                "sendrequest.Name": {
                    required: true,
                    minlength: 2
                }
                ,
                "sendrequest.PhoneNumber": {
                    required: true,
                    rangelength: [10, 12],
                    digits: true
                }
                ,
                "sendrequest.City": {
                    required: true,
                    minlength: 2
                }
                ,
                checkmark: { required: true }
            },
            errorPlacement: function (error, element) {
                error.insertBefore(element);
            }
            ,
            messages: {
                "sendrequest.Name": {
                    required: "Поле \"Имя\" обязательно к заполнению",
                    minlength: "Введите не менее 2-х символов в поле 'Имя'"
                },
                "sendrequest.PhoneNumber": {
                    required: "Поле \"Номер телефона\" обязательно к заполнению",
                    rangelength: "Неверный формат номера",
                    digits: "Неверный формат номера"
                },
                "sendrequest.City": {
                    required: "Поле \"Город\" обязательно к заполнению",
                    minlength: "Введите не менее 2-х символов в поле \"Город\""
                },
                checkmark: {required: "Пожалуйста, подтвердите согласие на обработку персональных данных"}
            }
        });
    });
});