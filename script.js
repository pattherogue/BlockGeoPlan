// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Initialize the geocoder control and add it to the map
var geocoder = L.Control.geocoder({ defaultMarkGeocode: false }).addTo(map);

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', function () {
    var searchQuery = document.getElementById('search-input').value;
    geocoder.geocode({ query: searchQuery }, function(results) {
        if (results.length > 0) {
            var location = results[0].center;
            map.setView(location, 15);
        }
    });
});

// Function to fetch GIS data from Flask backend
function fetchGISData() {
    fetch('/api/gis')
        .then(response => response.json())
        .then(data => {
            console.log('GIS Data:', data.gis_data);
        })
        .catch(error => {
            console.error('Error fetching GIS data:', error);
        });
}

// Function to fetch Blockchain data from Flask backend
function fetchBlockchainData() {
    fetch('/api/blockchain')
        .then(response => response.json())
        .then(data => {
            console.log('Blockchain Data:', data.blockchain_data);
        })
        .catch(error => {
            console.error('Error fetching Blockchain data:', error);
        });
}

// Call the fetchGISData and fetchBlockchainData functions
fetchGISData();
fetchBlockchainData();
