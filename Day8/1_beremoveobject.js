//JS program to delete key value pairs from a object using a method in Array prototype

var input = [{name:"John", age:26, Country:"India"}, {name:"Siva", age:27, Country:"India"}];

Array.prototype.beremoveobject = function(k) {
    for(var i=0; i<input.length; i++){
        var temp = input[i]
        delete temp[k];
    }
    console.log(input);
}

input.beremoveobject("Country") //Enter the Key name here to remove from oject.