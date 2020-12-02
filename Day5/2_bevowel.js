//JS program to find vowels using prototype method.


String.prototype.bevowel = function name() {
  var ans="";
  var n = str.length;
  for(var i=0;i<=n;i++)
 {
    var vow = str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u";
    if(vow)
  {
    ans=ans+str[i];
  }
   
 }
 console.log(ans);
   
}

var str = "hello"  //Input here
str.bevowel(); 
