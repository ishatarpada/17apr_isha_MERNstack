$(document).ready(function () {
    $("#removeBtn").click(function () {
        $(".removeContent").remove();
    });

    $("#getParentBtn").click(function () {
        $("#demo").text($(".getParent").parent().prop("nodeName"));
    });
});