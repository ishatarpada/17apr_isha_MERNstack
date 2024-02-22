const ans = document.getElementById("demo");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    ans.innerHTML = "Geolocation is not supported by this browser.";
  }
})

function showPosition(position) {
  ans.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

// function showPosition(position) {
//   let latlon = position.coords.latitude + "," + position.coords.longitude;

//   let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

//   ans.innerHTML = "<img src='" + img_url + "'>";
// }


function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      ans.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      ans.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      ans.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      ans.innerHTML = "An unknown error occurred."
      break;
  }
}