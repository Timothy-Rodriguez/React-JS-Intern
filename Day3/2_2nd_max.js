//JS program to

var ar = [1,2,3,4,5]; //array input here

max = Math.max.apply(null,ar);

max_index = ar.indexOf(max);

ar.splice(max_index,1); //Finding and removing 1st largest number in array

console.log("Second largest number in list : "+Math.max.apply(null,ar)); //Displaying the largest number after removing