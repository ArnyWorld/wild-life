var map = L.map('map').setView([-16.571352, -68.083493], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([-16.571352, -68.083493]).addTo(map);
marker.bindPopup("<b>Welcome!</b><br>Vesty Pakos").openPopup();
