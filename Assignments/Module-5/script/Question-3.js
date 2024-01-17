$(document).ready(function () {
  function animateBox() {
    $("#animatedBox").animate({
      left: '250px',
      opacity: '0.5',
      height: '250px',
      width: '250px'
    }, 2000, function () {
    });
  }

  animateBox();
});