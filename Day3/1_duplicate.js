// JS program that returns true if input number is repeated and returns false if input number is not repeated.

var val = 12345; //Input here
var val = String(val);
var duplicate_counter=0;

function duplicate(val){
    for(i=0;i<val.length;i++){
        if(val.indexOf(val[i]) != val.lastIndexOf(val[i])){
            //Increasing the counter if duplicate found
            duplicate_counter++
        }
    }
    if(duplicate_counter > 0){
        console.log("Number repeated : "+true);
    }
    else{
        console.log("Number repeated : "+false);
    }
}

duplicate(val);