console.log("________________every()_________________________");
// every — ALL must pass
console.log([80, 90, 85].every(i => i >= 70));
console.log([80, 60, 85].every(i => i >= 70));

console.log("________________some()___________________________");
// some — AT LEAST ONE must pass
console.log([80, 60, 85].some(s => s < 70));
console.log([80, 90, 85].some(s => s < 70)); // false
console.log("_________________________________________________");