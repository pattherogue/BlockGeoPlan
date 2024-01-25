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

// Sample GeoJSON data URLs
var dataUrls = {
    data1: 'data1.geojson',
    data2: 'data2.geojson'
};

// Function to add GeoJSON layer to the map
function addGeoJSONLayer(layerData) {
    L.geoJSON(layerData, {
        onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.name) {
                layer.bindPopup(feature.properties.name);
            }
        }
    }).addTo(map);
}

// Event listener for changing the selected GIS data layer
document.getElementById('select-layer').addEventListener('change', function () {
    var selectedLayer = this.value;
    map.eachLayer(function (layer) {
        if (layer instanceof L.GeoJSON) {
            map.removeLayer(layer);
        }
    });
    document.getElementById('loading-indicator').classList.remove('hidden');
    document.getElementById('error-message').classList.add('hidden');
    setTimeout(function () {
        fetch(dataUrls[selectedLayer])
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(function (data) {
                addGeoJSONLayer(data);
                document.getElementById('loading-indicator').classList.add('hidden');
            })
            .catch(function (error) {
                console.error('There was a problem with the fetch operation:', error);
                document.getElementById('loading-indicator').classList.add('hidden');
                document.getElementById('error-message').classList.remove('hidden');
            });
    }, 1000); // Simulate loading delay
});

// Initialize the map with a default GeoJSON layer
addGeoJSONLayer(data1);
