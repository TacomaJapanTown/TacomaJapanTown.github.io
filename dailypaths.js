//Special thanks to these tutorials and tools:
//http://duspviz.mit.edu/web-map-workshop/map-symbolization/
//http://maptimediliman.github.io/leaflet-intro/
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

//The pause/play function for the button
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

//Images by Dave Gandy from https://www.flaticon.com/free-icon/circle-shape-outline_25477#term=circle%20outline&page=1&position=1 (I believe this is actually a Font Awesome icon)
var green = L.icon({
  iconUrl: 'images/green.png',
  iconSize: [20, 20],
});

var blue = L.icon({
  iconUrl: 'images/blue.png',
  iconSize: [20, 20],
});

var purple = L.icon({
  iconUrl: 'images/purple.png',
  iconSize: [20, 20],
});

var red = L.icon({
  iconUrl: 'images/red.png',
  iconSize: [20, 20],
});

var orange = L.icon({
  iconUrl: 'images/orange.png',
  iconSize: [20, 20],
});

var blackFill = L.icon({
  iconUrl: 'images/black-fill.png',
  iconSize: [20, 20],
})

//Putting the legend on the mao
var legend = L.control({position: 'bottomleft'});
legend.onAdd = function (mymap) {
  var div = L.DomUtil.create('div', 'info legend');
  div.innerHTML = "<img src=images/legend.jpg style='width: 15em;'></img>";
  return div;
};
legend.addTo(mymap);

//loading the geojson of homes along the paths
$.getJSON("data/pathstopshomes.geojson",function(data){
  pathStops = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Notes: '+feature.properties.Notes+'</p><p>Source: '+feature.properties.Source+'</p>');
    }, pointToLayer: function (feature, latlng,{icon: blackFill}) {
      var marker = L.marker(latlng);
      return marker;
    }
  }).addTo(mymap);

  //loading the geojson of schools along the paths
  $.getJSON("data/pathstopsschools.geojson",function(data){
    L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Source: '+feature.properties.Source+'</p><p>'+feature.properties.Photo+'</p>');
      }, pointToLayer: function (feature, latlng,{icon: blackFill}) {
        var marker = L.marker(latlng);
        return marker;
      }
    }).addTo(mymap);

    //loading the geojson of the JLS
    $.getJSON("data/jls.geojson",function(data){
      L.geoJson(data, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup('<p>Name: '+feature.properties.Name+'</p><p>Address: '+feature.properties.Address+'</p><p>Source: '+feature.properties.Source+'</p><a href=https://www.loc.gov/item/wa0563/ target=_blank><img src=images/jls.jpg width=125em>');
        }, pointToLayer: function (feature, latlng) {
          var marker = L.marker(latlng,{icon: blackFill});
          return marker;
        }
      }).addTo(mymap);

    })
  })
})
