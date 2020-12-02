//JS program to find object value using array prototype

var input = [{name:"John", age:26}, {name:"Siva", age:27}];
var name = "name" , age = "age";
Array.prototype.befindobject = function temp(val) {
    var output = []
    for(var i=0; i<input.length; i++){
        var temp = input[i]
        output = output.concat(temp[val]);

    }
    console.log(output);
}

input.befindobject(name);