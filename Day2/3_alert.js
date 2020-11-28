//JS program to alert browser type and version

var browser_details = navigator.userAgent;

var temp = browser_details.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);

var browser_type = temp[1];

var browser_version = temp[2];

alert("Browser Type : "+browser_type+"\n"+"Browser Version : "+browser_version);