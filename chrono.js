var startTime = 0 ;
var start = 0 ;
var end = 0 ;
var diff = 0 ;
var timerID = 0 ;

function chrono()                           // Chronomètre
{
    end = new Date() ;
    diff = end - start ;
    diff = new Date(diff) ; 
    var msec = diff.getMilliseconds() ;
    var sec = diff.getSeconds() ;
    var min = diff.getMinutes() ;
    var hr = diff.getHours()-1 ;
    if (min < 10)
    {
        min = "0" + min ;
    }
    if (sec < 10)
    {
        sec = "0" + sec ;
    }
    if(msec < 10)
    {
        msec = "00" +msec ;
    }
    else if(msec < 100)
    {
        msec = "0" +msec ;
    }

    document.getElementById("chronotime").innerHTML = min + ":" + sec + ":" + msec;
    document.getElementById("chronotime2").innerHTML = min + ":" + sec + ":" + msec;
    timerID = setTimeout("chrono()", 10);
}

function chronoStart()                  // Lance le Chronomètre
{
    start = new Date();
    chrono();
}

function chronoContinue()               // Relance le Chronomètre
{
    start = new Date()-diff;
    start = new Date(start);
    chrono();
}

function chronoReset()                  // Reset le Chronomètre
{
    document.getElementById("chronotime").innerHTML = "0:00:00:000"; 
    start = new Date()
}

function chronoStopReset()              // Stop & Reset le Chronomètre
{
    document.getElementById("chronotime").innerHTML = "0:00:00:000"
    document.chronoForm.startstop.onclick = chronoStart
}

function chronoStop()                   // Stop le Chronomètre
{
    clearTimeout(timerID)
}

