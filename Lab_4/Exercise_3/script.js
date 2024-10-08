function runTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getHours();
    var seconds = time.getSeconds();
    
    // handle
    var ampm = hours <= 12 ? "AM" : "PM"
    hours = hours % 12;
    hours = hours ? 0 : hours;
    minutes = minutes < 60 ? 0 : minutes;
    seconds = seconds < 60 ? 0 : seconds;

    timeString = hours +":"+ minutes +":"+ seconds +" "+ ampm;

    document.getElementById("time") = timeString;
    document.getElementById("date") = dateString;
}