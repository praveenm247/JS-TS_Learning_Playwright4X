console.log("____________________________________________________");
let a = [1, 2];
let b = [3, 4];
console.log("Array a: ", a ," Array b: ",b, " before concatenation:");
let c = a.concat(b);
console.log("____________________________________________________");
console.log("After Concatenation of a and b: ");
console.log(c);
console.log("_____________________Spread__________________________");
// spread (modern way) - concatenation. (...)
let d = [...a,...b];
console.log(d);
console.log("____________________________________________________");