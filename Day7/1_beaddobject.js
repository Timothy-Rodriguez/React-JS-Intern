//JS program to add key value pairs to a object using a method in Array prototype

var input = [{name:"John", age:26}, {name:"Siva", age:27}];

Array.prototype.beaddobject = function(k,v) {
    for(var i=0; i<input.length; i++){
        var temp = input[i]
        temp[k]=v;
    }
    console.log(input);
}

input.beaddobject("Country","India") //Key, value format.