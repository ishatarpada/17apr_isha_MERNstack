$(document).ready(function(){
    $("#hideBtn").click(function(){
        $(".hideContent").hide();
    });

    $("#showBtn").click(function(){
        $(".showContent").show();
    });

    $("#styleBtn").click(function(){
        $(".styleContent").css("font-size","35px");
        $(".styleContent").css("color","red");
        $(".styleContent").css("text-transform","capitalize");
    });
});