//JS program to find sign.

var n1='1',n2='2',n3='+3';
var minus , plus;

function get_sign(n1,n2,n3){

    minus = n1.indexOf('-') != -1 || n2.indexOf('-') != -1 || n3.indexOf('-') != -1;
    plus = n1.indexOf('+') != -1 || n2.indexOf('+') != -1 || n3.indexOf('+') != -1;

    if(minus && plus){
        alert('+ & -');
    }
    else if(plus){
        alert('+');
    }
    else if(minus){
        alert('-');
    }
    else{
        alert('Welcome');
    }
}

get_sign(n1,n2,n3);
