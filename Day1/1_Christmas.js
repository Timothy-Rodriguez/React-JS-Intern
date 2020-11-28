//JS progarm to calculate number of days left until next Christmas.

var d = new Date();

//Getting today's date (mm/dd/yyyy)
var today = String(d.getMonth()+1)+'/'+String(d.getDate())+'/'+String(d.getFullYear());

//Getting this year Christmas date (mm/dd/yyyy)
var christmas = String(12)+'/'+String(25)+'/'+String(d.getFullYear());

//Initializing the dates to Date() Object
var today = new Date(today);
var christmas = new Date(christmas);

// Subtracting dates (christmas - today) will give time in milliseconds
var diffTimeMilliSec = Math.abs(christmas - today);

//Converting milliseconds to days
var diffDays = Math.ceil(diffTimeMilliSec / (1000 * 60 * 60 * 24)); 

if(diffDays > 1){
    console.log("Christmas in " + diffDays + " days");
}
else{
    console.log("Christmas in " + diffDays + " day");
}