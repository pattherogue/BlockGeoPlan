// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (you can use different map providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Example marker
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A sample marker')
    .openPopup();
