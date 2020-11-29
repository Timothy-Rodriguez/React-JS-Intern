//JS program to find sqare for each number

var input=123123; // Input here
var input = String(input);
var str='';

for(i=0;i<input.length;i++){
    str=str.concat(input[i]**2); //Squaring and joining each character to string.
}
console.log(str);