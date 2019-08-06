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
  var markerList = [marker1, marker2, marker3, marker4, marker5];
  for (i in markerList)
  {
    if (markerList[i].isPaused())
    markerList[i].start();
    else
    markerList[i].pause();
  }
}

var greenIcon = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//loading the geojson of homes along the paths
$.getJSON("data/pathstopshomes.geojson",function(data){
  L.geoJson(data, {
  pointToLayer: function(feature,latlng){
     var marker = L.marker(latlng,{icon: greenIcon});
     onEachFeature: function (feature, layer) {
     layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Notes: '+feature.properties.Notes+'</p><p>Source: '+feature.properties.Source+'</p>');
     return marker
    }
  }).addTo(mymap);

  //loading the geojson of schools along the paths
  $.getJSON("data/pathstopsschools.geojson",function(data){
    L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Source: '+feature.properties.Source+'</p><p>'+feature.properties.Photo+'</p>');
      }
    }).addTo(mymap);

    //loading the geojson of the JLS
    $.getJSON("data/jls.geojson",function(data){
      L.geoJson(data, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Source: '+feature.properties.Source+'</p><a href=https://www.loc.gov/item/wa0563/ target=_blank><img src=images/jls.jpg width=125em>');
        }
      }).addTo(mymap);

    })
})
})
