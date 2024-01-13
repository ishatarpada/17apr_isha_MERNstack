$(document).ready(function () {
    $("#btn").click(function () {
        $('#content').css('color', 'green');
    });
});

$(document).ready(function () {
    $("#btn1").click(function () {
        $('#content1').css({
            'color': 'darkslategrey',
            'font-size': '35px'
        });
    });
});

$(document).ready(function () {
    $("#btn2").click(function () {
        $("h3, h4").addClass("color");
        $("h4").addClass("size");
    });
});

$(document).ready(function () {
    $("#btn3").click(function () {
        $("#w-1").remove();
        $("#w-2").remove();
    });
});

$(document).ready(function () {
    $("#btn4").click(function () {
        $("b, i").toggleClass("toggle");
    });
});

$(document).ready(function () {
    $("#btn5").click(function () {
        $(".animation").animate({ left: '250px' });
    });
});

$(document).ready(function () {
    $("#btn6").click(function () {
        $(".animation").animate({ left: '0px' });
    });
});