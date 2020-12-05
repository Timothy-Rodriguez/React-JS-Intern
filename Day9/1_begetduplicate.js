//JS program to return duplicate values in array using a method in Array prototype

var input = [1,2,3,4,4,5,10,10,12,13,14,13]; //Input here
var temp=[];
var result = []

Array.prototype.begetduplicate = function(k) {
    for(var i=0; i<input.length; i++){
        if(temp.indexOf(input[i]) === -1){
            temp.push(input[i])
        }
        else{
            result.push(input[i])
        }
        }
    }
console.log(result);


input.begetduplicate()