const ans = document.getElementById("demo");
const btn = document.getElementById("btn");

function showPosition(position) {
    ans.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

btn.addEventListener("click" , function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        ans.innerHTML += "Geolocation is not supported by this browser."
    }
});