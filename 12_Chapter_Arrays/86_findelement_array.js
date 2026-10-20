let num = [10, 25, 35, 43, 49, 50];
console.log("Length of an array num is: ", num.length);
console.log("Values of an array num are: ", num);
console.log("___________Find a value from array_______________");
let res = num.find(temp => temp > 20);
console.log("Find result is: ", res); // Returns the first occurance of temp > 20 value
console.log("_____________Find index of element________________");
console.log ("Index of the find result is: ", num.findIndex(temp => temp > 35));
console.log("_______Find index and last element________________");
console.log("Last element find result is: ", num.findLast(temp => temp > 20));
console.log("Last index from find result is: ", num.findLastIndex(temp => temp > 20));
console.log("___________________________________________________");

