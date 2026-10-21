
// map() - Calls a defined callback function on each element of an array, and returns an array that contains the results.
console.log("__________________map()______________________________");

let scores = [45, 53, 82, 91, 73];
let grades = scores.map(i => i > 70 ? "Pass" : "Fail");
console.log(grades);
console.log("__________________filter()____________________________");

let filter = scores.filter( j => j > 80);
console.log(filter);
console.log("____________________________________________________");
