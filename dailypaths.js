
//<!--For the pause button-->
document.getElementById("pauseButtonClick").addEventListener("click", pauseButtonClick);

//The coordinates for each person's daily paths
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


//Centering the map
var map = L.map('paths').setView([47.244323, -122.445536], 14);

//Picking the basemap
var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

map.fitBounds(FumiSato);
/////////////////////////////////////////////////////////////////////////////////////////////////
//The pause function
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

//The pause button
L.easyButton( 'fas fa-pause', function(){
  pauseButtonClick;
}).addTo(map);



  //Harue Osaki's path
  var marker2 = L.Marker.movingMarker(
    HarueOzaki,
  8000, {autostart: true}).addTo(map);

  marker2.addStation(5, 1000);

  marker2.on('click', function() {
      marker2.bindPopup('<b>"I went home with Mom. Sometimes we took the Tacoma streetcar down 17th street. And we’d walk down that street to the streetcar and then rode it to the end. And then walked from there through the park a little bit to our house."<br>-Harue Ozaki, September 15, 2004</b>', {closeOnClick: false})
      .openPopup();
  })

  L.polyline(HarueOzaki,
    {color: 'green'}).addTo(map);
  ////////////////////////////////

  //June Mieko's path
  var marker3 = L.Marker.movingMarker(
    JuneMieko,
  8000, {autostart: true}).addTo(map);

  marker3.addStation(6, 1000);

  marker3.on('click', function() {
      marker3.bindPopup('<b>"we would walk down the street, and we would cross the street, and we would walk a little bit more, and we would cross the street.  I mean, we would do this like a lot of times, and I said. Dad, why are we doing this?  And he would never say anything. And so, it wasn’t until years and years later that I realized that because they would spit at us, or because they would call us names, or confront my father, that he just didn’t want this, and so he just avoided it."<br>-June Mieko, January 27th, 2005</b>', {closeOnClick: false})
      .openPopup();
  })

  L.polyline(JuneMieko,
    {color: 'blue'}).addTo(map);
  ////////////////////////////////

  //Fumi Sato's path
  var marker4 = L.Marker.movingMarker(
    FumiSato,
  8000, {autostart: true}).addTo(map);

  marker4.addStation(9, 1000);

  marker4.on('click', function() {
      marker4.bindPopup('<b>"I remember when we went to high school we took a streetcar. But then we’d go to Japanese school afterwards, and I knew my girlfriend who lived in town, she and I would walk to her house, and her mother would have baked yams on those stoves, you know, and we would have that and then go out to Japanese school"<br>-Fumi Sato, January 27th, 2005</b>', {closeOnClick: false})
      .openPopup();
  })

  L.polyline(FumiSato,
    {color: 'red'}).addTo(map);
  ////////////////////////////////

  //Ryo Munekata's path
  var marker5 = L.Marker.movingMarker(
    RyoMunekata,
  8000, {autostart: true}).addTo(map);

  marker5.addStation(8, 1000);

  marker5.on('click', function() {
      marker5.bindPopup('<b>"And then between three and four we either had to go home and then go to Language School or we went directly. And if we did go home, we’d find time to pick up something to munch on.  And you’d pick it up, and then start walking to school, and whatever you had in your hand, you’re eating it, and I well remember our teacher saying, “It’s not proper to be standing, let alone walking, to be eating food.” And so sometimes we’d cheat and we’d put something in our mouth, and walking the street, you’d try not to move your jaws. (laughter)"<br>-Ryo Munekata, August 7, 2003</b>', {closeOnClick: false})
      .openPopup();
  })

  L.polyline(RyoMunekata,
    {color: 'black'}).addTo(map);
  ////////////////////////////////

  //Masaye Jinguji's path
  var marker6 = L.Marker.movingMarker(
    MasayeJinguji,
  8000, {autostart: true}).addTo(map);

  marker6.addStation(3, 1000);

  marker6.on('click', function() {
      marker6.bindPopup('<b>"So, between 3:30 and 4:00, we would stop by our home, which is on Market Street and which is not too far on the way to the Japanese school, and we would have a little bite to eat.  Generally, it was boiled sweet potatoes. But it was enough to take us to Japanese school, which started at four o’clock."<br>-Masaye Jinguji</b>', {closeOnClick: false})
      .openPopup();
  })

  L.polyline(MasayeJinguji,
    {color: 'orange'}).addTo(map);
