// Initialize map
const gedungSateCoor = [-6.9025, 107.6191];
const myMap = L.map('map', {
  zoom: 15,
  center: gedungSateCoor,
  scrollWheelZoom: false,
});

// Set base map
const osmTileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmTile = L.tileLayer(osmTileUrl, {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
});
osmTile.addTo(myMap);

// Add MapTiler layer
const mtLayer = L.maptilerLayer({
  apiKey: 'ErGFiVn55KJX6kxW97rW',
  style: 'https://api.maptiler.com/maps/01970c95-c7f0-76f6-8ca1-e5a190dcd35d/style.json?key=ErGFiVn55KJX6kxW97rW', // Optional
});
mtLayer.addTo(myMap);
