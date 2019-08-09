//Special thanks to these tutorials and tools:
//http://duspviz.mit.edu/web-map-workshop/map-symbolization/
//http://maptimediliman.github.io/jsonlet-intro/
//geojson.io

//Making the map
var mymap = L.map('mapid').setView([47.256105, -122.443722], 14);
//Basemap
var Gray = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.light',
  accessToken: 'pk.eyJ1Ijoic2FyYWhwOTgiLCJhIjoiY2p0ZzdoaXE2MDB1ZjQzcGZpMWY0eThpMCJ9.mjYzBhlOz8aG8-14z99Uyg'
//}).addTo(mymap);

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
//});

var schools = L.icon({
  iconUrl: 'images/schools.png', //icon from https://mapicons.mapsmarker.com/
  iconSize: [30, 35],
});
var homes = L.icon({
  iconUrl: 'images/homes.png', //icon from https://mapicons.mapsmarker.com/
  iconSize: [30, 35],
});
var associations = L.icon({
  iconUrl: 'images/associations.png', //icon from https://mapicons.mapsmarker.com/
  iconSize: [30, 35],
});
var businesses = L.icon({
  iconUrl: 'images/businesses.png', //icon from https://mapicons.mapsmarker.com/
  iconSize: [30, 35],
});
var churches = L.icon({
  iconUrl: 'images/churches.png', //icon from https://mapicons.mapsmarker.com/
  iconSize: [30, 35],
});
var government = L.icon({
  iconUrl: 'images/government.png', //icon from https://mapicons.mapsmarker.com/
  iconSize: [30, 35],
});
var recreation = L.icon({
  iconUrl: 'images/recreation.png', //icon from https://mapicons.mapsmarker.com/
  iconSize: [30, 35],
});
var transportation = L.icon({
  iconUrl: 'images/train.png', //icon from https://mapicons.mapsmarker.com/
  iconSize: [30, 35],
});

var Associations = $.getJSON("data/associations.geojson",function(data){
  pathStops = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Notes: '+feature.properties.Notes+'</p><p>Source: '+feature.properties.Source+'</p><p>Photo:'+feature.properties.Photo+'</p>');
    }, pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng,{icon: associations});
      return marker;
    }
  }).addTo(mymap);
})

var Businesses = $.getJSON("data/businesses.geojson",function(data){
  pathStops = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Notes: '+feature.properties.Notes+'</p><p>Source: '+feature.properties.Source+'</p><p>Photo:'+feature.properties.Photo+'</p>');
    }, pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng,{icon: businesses});
      return marker;
    }
  }).addTo(mymap);
})

var Churches = $.getJSON("data/churches.geojson",function(data){
  pathStops = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Notes: '+feature.properties.Notes+'</p><p>Source: '+feature.properties.Source+'</p><p>Photo:'+feature.properties.Photo+'</p>');
    }, pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng,{icon: churches});
      return marker;
    }
  }).addTo(mymap);
})

var Homes = $.getJSON("data/homes.geojson",function(data){
  pathStops = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Notes: '+feature.properties.Notes+'</p><p>Source: '+feature.properties.Source+'</p><p>'+feature.properties.Photo+'</p>');
    }, pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng,{icon: homes});
      return marker;
    }
  }).addTo(mymap);
})

var Recreation = $.getJSON("data/recreation.geojson",function(data){
  pathStops = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Notes: '+feature.properties.Notes+'</p><p>Source: '+feature.properties.Source+'</p><p>'+feature.properties.Photo+'</p>');
    }, pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng,{icon: recreation});
      return marker;
    }
  }).addTo(mymap);
})

var Schools = $.getJSON("data/schools.geojson",function(data){
  pathStops = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Notes: '+feature.properties.Notes+'</p><p>Source: '+feature.properties.Source+'</p><p>'+feature.properties.Photo+'</p>');
    }, pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng,{icon: schools});
      return marker;
    }
  }).addTo(mymap);
})

var Transportation = $.getJSON("data/transportation.geojson",function(data){
  pathStops = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Notes: '+feature.properties.Notes+'</p><p>Source: '+feature.properties.Source+'</p><p>'+feature.properties.Photo+'</p>');
    }, pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng,{icon: transportation});
      return marker;
    }
  }).addTo(mymap);
})

var baseMaps = {
    "Gray": gray,
    "Satellite": Esri_WorldImagery
};

var overlayMaps = {
    "Homes": Homes
    "Businesses": Businesses
    "Schools": Schools
    "Churches": Churches
    "Associations": Associations
    "Recreation": Recreation
    "Transportation": Transportation
};

L.control.layers(baseMaps, overlayMaps).addTo(mymap);
