// Finding HTML Elements by Tag Name
var selectTagName = $("span");

// Finding HTML Elements by Class Name
var selectClassName = $(".demo");

// Finding HTML Elements by ID Name
var selectIdName = $("#demo");

// Manipulating elements
var text = "The Text is : " + selectClassName.html() + "  " + selectIdName.html(); 

selectTagName.text(text);
