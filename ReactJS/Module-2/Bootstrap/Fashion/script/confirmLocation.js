    function initMap() {
        var mapOptions = {
            center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
            zoom: 12 // Set the initial zoom level
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }
