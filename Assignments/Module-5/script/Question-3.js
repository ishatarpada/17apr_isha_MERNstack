$(document).ready(function () {
  $("#animateBtn").click(function () {
    // create the variable
    var slider = $("#slider-container");

    // create the array for images.
    var images = [
      'url("https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630")',
      'url("https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg")',
      'url("https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-sunset-mountain-scenery-with-inversion-free-photo.jpg?w=600&quality=80")',
      'url("https://deep-image.ai/blog/content/images/2022/09/underwater-magic-world-8tyxt9yz.jpeg")',
    ];

    //  index for track the image.
    var index = 0;

    // Function to change the background image with fade effect
    function changeImage() {
      slider.animate({ opacity: 0 }, "slow", function () {
        slider.css("background-image", images[index]);
        slider.animate({ opacity: 1 }, "slow");
      });

      index = (index + 1) % images.length;
    }

    // call the function for change image
    changeImage();

    // Set interval to change image every 5 seconds
    var interval = setInterval(changeImage, 5000);

    // // Stop the interval when we click the image
    $("#animateBtn").click(function () {
      clearInterval(interval);
    });
  });
});
