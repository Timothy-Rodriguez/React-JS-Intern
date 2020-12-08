//JS program to clone a array

var arr=[1,2,3,4,5]; //input array
var arrClone=[];

function array_clone(arr){
    arrClone = arr.map((x) => x);
    console.log(arrClone);
}

array_clone(arr);