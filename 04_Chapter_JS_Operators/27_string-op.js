let a = "Hello, "; // This line declares a variable 'a' and assigns it the string value "Hello, ".
let b = "World!"; // This line declares a variable 'b' and assigns it the string value "World!".

console.log("a =" + a + "\ttypeof a: "+ typeof a); // This line logs the value and type of variable 'a' to the console, which is "Hello, ".
console.log("b =" + b + "\ttypeof b: "+ typeof b); // This line logs the value and type of variable 'b' to the console, which is "World!".
console.log("a + b = " + (a + b) + "\ntypeof a + b: " + typeof (a + b)); // This line concatenates the strings stored in variables 'a' and 'b' and logs the result "Hello, World!" and type to the console.

//Concatenation of string and numbers using , + +=
a += "Praveen"; // This line appends the string "Praveen" to variable 'a'.
console.log("a = " + a + "\ttypeof a: " + typeof a); // This line logs the value and type of variable 'a' to the console, which is "Praveen".

console.log("Praveen", "Madiwalar"); // This line logs the strings "Praveen" and "Madiwalar" to the console. seeparate them with a comma, which will print them with a space in between.
console.log("Praveen " + " Madiwalar"); // This line logs the concatenated strings "Praveen" and "Madiwalar" by using + to the console.
console.log(1 ,2 ,3 ,4 ," Praveen" , true); // This line logs the numbers 1, 2, 3, 4 and the string "Praveen" and boolean true to the console.