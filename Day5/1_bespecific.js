//JS program to put space after each character using prototype method.

String.prototype.bespecific = function name() {
    str = str.replaceAll(""," ");
    str = str.trim();
    console.log(str);
}

var str = "hello";      //Input here
str.bespecific();  