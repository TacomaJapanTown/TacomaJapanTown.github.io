//Special thanks to these tutorials and tools:
//http://duspviz.mit.edu/web-map-workshop/map-symbolization/
//http://maptimediliman.github.io/jsonlet-intro/
//geojson.io

//Making the map
var mymap = L.map('mapid').setView([47.256105, -122.443722], 14);
//Basemap
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.light',
  accessToken: 'pk.eyJ1Ijoic2FyYWhwOTgiLCJhIjoiY2p0ZzdoaXE2MDB1ZjQzcGZpMWY0eThpMCJ9.mjYzBhlOz8aG8-14z99Uyg'
}).addTo(mymap);


//Images by Dave Gandy from https://www.flaticon.com/free-icon/circle-shape-outline_25477#term=circle%20outline&page=1&position=1 (I believe this is actually a Font Awesome icon)
var jsonIcon = L.icon({
  iconUrl: 'images/square.png',
  iconSize: [20, 20],
});

$.getJSON("data/allbuildings.geojson",function(data){
  pathStops = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Notes: '+feature.properties.Notes+'</p><p>Source: '+feature.properties.Source+'</p>');
    }, pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng,{icon: jsonIcon});
      return marker;
    }
  }).addTo(mymap);
})
