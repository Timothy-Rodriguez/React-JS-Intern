//JS program to put comma in numbers by creating js prototype function.

//input: 90324114.32

//output: 90,324,114.32

__proto__.comma = function(val){
    console.log(val.toLocaleString())
}

comma(83283628);