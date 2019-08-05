//Student paths
//These coordinates are the points the markers and polylines follow
var HarueOzaki = [
  [47.248295, -122.440435], //Home
  [47.255138, -122.442024], //Turn
  [47.254538, -122.447838], //Turn
  [47.257605, -122.448565], //Turn
  [47.256114, -122.463016], //Turn
  [47.255749, -122.463670], //Jason Lee MS
  [47.256114, -122.463016], //Turn
  [47.257605, -122.448565], //Turn
  [47.254537, -122.447865], //Turn
  [47.254806, -122.444915], //Turn
  [47.245565, -122.442819]  //JLS
];
var JuneMieko = [
  [47.248426, -122.441958], //Home
  [47.257200, -122.443926], //Turn
  [47.258641, -122.443280], //Turn
  [47.264113, -122.447121], //Turn
  [47.264618, -122.448435], //Turn
  [47.265535, -122.447791], //Turn
  [47.265756, -122.448481], //Stadium HS
  [47.265591, -122.447797], //Turn
  [47.264618, -122.448435], //Turn
  [47.264098, -122.447111], //Turn
  [47.245565, -122.442819]  //JLS
];
var FumiSato = [
  [47.250073, -122.417610], //Home
  [47.251465, -122.422822], //Turn
  [47.253271, -122.424217], //Turn
  [47.254735, -122.427575], //Turn
  [47.254495, -122.428412], //Turn
  [47.253336, -122.439389], //Turn
  [47.257967, -122.440451], //Turn
  [47.261113, -122.442543], //Turn
  [47.264737, -122.445950], //Turn
  [47.265734, -122.448353], //Stadium HS
  [47.265591, -122.447797], //Turn
  [47.264610, -122.448481], //Turn
  [47.264091, -122.447089], //Turn
  [47.245565, -122.442819]  //JLS
];
var RyoMunekata = [
  [47.250574, -122.439497], //Home
  [47.255260, -122.440854], //Turn
  [47.255129, -122.442007], //Turn
  [47.257474, -122.442518], //Turn
  [47.262286, -122.445746], //Turn
  [47.264091, -122.447089], //Turn
  [47.264610, -122.448481], //Turn
  [47.265591, -122.447797], //Turn
  [47.265734, -122.448353], //Stadium HS
  [47.265591, -122.447797], //Turn
  [47.264610, -122.448481], //Turn
  [47.264091, -122.447089], //Turn
  [47.245565, -122.442819]  //JLS
];
var MasayeJinguji = [
  [47.252052, -122.441321], //Home
  [47.255131, -122.442013], //Turn
  [47.254847, -122.444914], //Turn
  [47.256418, -122.445319], //Central
  [47.245565, -122.442819]  //JLS
];

//Making the map
var mymap = L.map('mapid').setView([47.256105, -122.443722], 14);
//Basemap
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.light',
  accessToken: 'pk.eyJ1Ijoic2FyYWhwOTgiLCJhIjoiY2p0ZzdoaXE2MDB1ZjQzcGZpMWY0eThpMCJ9.mjYzBhlOz8aG8-14z99Uyg'
}).addTo(mymap);

//The pause/play function
function pauseButtonClick()
{
    var markerList = [marker2, marker3, marker4, marker5, marker6];
    for (i in markerList)
    {
        if (markerList[i].isPaused())
            markerList[i].start();
        else
            markerList[i].pause();
    }
}

//loading the geojson of homes along the paths
$.getJSON("data/pathstopshomes.geojson",function(data){
  L.geoJson(data, {
    style: function (feature) {
        return {color: feature.properties.color};
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Notes: '+feature.properties.Notes+'</p><p>Source: '+feature.properties.Source+'</p>');
    }
}).addTo(mymap);

//loading the geojson of schools along the paths
$.getJSON("data/pathstopsschools.geojson",function(data){
  L.geoJson(data, {
    style: function (feature) {
        return {color: feature.properties.color};
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Source: '+feature.properties.Source+'</p>');
    }
}).addTo(mymap);

//loading the geojson of the JLS
$.getJSON("data/jls.geojson",function(data){
  L.geoJson(data, {
    style: function (feature) {
        return {color: feature.properties.color};
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Source: '+feature.properties.Source+'</p><a href=https://www.loc.gov/item/wa0563/ target=_blank><img src=images/jls.jpg width=125em>');
    }
}).addTo(mymap);
//I know it's not very technically efficient to load these seperate jsons but it was the quickest way for me
