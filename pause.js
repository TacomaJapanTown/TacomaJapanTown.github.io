
function Pause()
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
