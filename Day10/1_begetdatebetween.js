var date1='12/6/2020', date2='12/10/2020';

var date1 = new Date(date1);
var date2 = new Date(date2);
var res=[];

Date.prototype.begetdatebetween = function(){
    var diff = Math.abs(date2.getDate()-date1.getDate());
    for(var i=0; i<=diff; i++){
        var nextDate = date1.getDate() + 1
        var nextDay = String(date1.getMonth()+1)+'/'+String(nextDate)+'/'+String(date1.getFullYear());
        date1=new Date(nextDay);
        var date = date1.getDate();
        var month = date1.getMonth();
        var year = date1.getFullYear();
        var cday = String(date) +'/'+ String(month) +'/'+ String(year)
        res.push(cday);
    }
    console.log(res);
}
date1.begetdatebetween()