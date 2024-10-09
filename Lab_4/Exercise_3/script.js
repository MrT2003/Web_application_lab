function runTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getHours();
    var seconds = time.getSeconds();
    
    // handle
    var ampm = hours <= 12 ? "AM" : "PM"
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0"+minutes : minutes;
    seconds = seconds < 10 ? "0"+seconds : seconds;

    var timeString = hours+":"+minutes+":"+seconds +" "+ampm;

    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var day = days[time.getDay()];
    var month = months[time.getMonth()];
    var dateOfMonth = time.getDate();
    var year = time.getFullYear();

    var dayString = day+" "+month+" "+dateOfMonth+" "+year; 

    document.getElementById("time").innerHTML = timeString;
    document.getElementById("date").innerHTML = dayString;
}

setInterval(runTime, 1000);
runTime();