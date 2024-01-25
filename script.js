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

// Sample GeoJSON data
var data1 = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: {
                name: "Location A",
                description: "This is Location A"
            },
            geometry: {
                type: "Point",
                coordinates: [-0.09, 51.505]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Location B",
                description: "This is Location B"
            },
            geometry: {
                type: "Point",
                coordinates: [-0.1, 51.51]
            }
        }
    ]
};

// Sample GeoJSON data
var data2 = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: {
                name: "Polygon 1",
                description: "This is Polygon 1"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [[-0.08, 51.5], [-0.08, 51.52], [-0.1, 51.52], [-0.1, 51.5], [-0.08, 51.5]]
                ]
            }
        }
    ]
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
    if (selectedLayer === 'data1') {
        addGeoJSONLayer(data1);
    } else if (selectedLayer === 'data2') {
        addGeoJSONLayer(data2);
    }
});

// Initialize the map with a default GeoJSON layer
addGeoJSONLayer(data1);
