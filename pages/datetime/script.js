function refreshTime() {
    var timeDisplay = document.getElementById("timeDate")   
    var dateString = new Date().toLocaleString("en-US");
    var formattedString = dateString.replace(", ", " | ");

    var week = new Array(6);
        week [0] = 'Sunday'
        week [1] = 'Monday'
        week [2] = 'Tuesday'
        week [3] = 'Wednesday'
        week [4] = 'Thursday'
        week [5] = 'Friday'
        week [6] = 'Saturday'
    var day = new Date().getDay()
    
    timeDisplay.innerHTML = ` ${(week[day])} | ${formattedString}`
}

setInterval(refreshTime, 1000);