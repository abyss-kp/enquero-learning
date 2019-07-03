function getDayName(dateString) {
    let dayName;
    // Write your code here
    var s = dateString.split("/");
        s[0]--;
    var date = new Date(s[2], s[0], s[1]);
    date=date.getDay();
    if (date == 0)
        dayName = "Sunday";
    else if (date == 1)
        dayName = "Monday";
    else if (date == 2)
        dayName = "Tuesday";
    else if (date == 3)
        dayName = "Wednesday";
    else if (dayName == 4)
        dayName = "Thursday";
    else if (date == 5)
        dayName = "Friday";
    else if(date==6)
        dayName = "Saturday";
    console.log(dayName);
}


getDayName("10/11/2009")