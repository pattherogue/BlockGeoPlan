// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Initialize the geocoder control and add it to the map
var geocoder = L.Control.geocoder({
    defaultMarkGeocode: false, // We'll handle the geocoding result manually
});
geocoder.addTo(map);

// Event listener for the geocoding result
geocoder.on('markgeocode', function (event) {
    var location = event.geocode.center; // Get the coordinates of the selected location

    // Center and zoom the map to the selected location
    map.setView(location, 15); // You can adjust the zoom level as needed
});

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', function () {
    var searchQuery = document.getElementById('search-input').value;

    // Trigger the geocoding process
    geocoder.geocode(searchQuery);
});
