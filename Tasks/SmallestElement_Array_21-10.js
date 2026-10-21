const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);
console.log("Array values after parsing the input: ", arr);
console.log("_____________________________________________");
// Write your solution here

let minElement = arr[0];
for (let i = 1; i < n; i++) {
    if (arr[i] < minElement) {
        minElement = arr[i];
    }
}
console.log("Smallest Element in the give array is: ", minElement);
console.log("_____________________________________________");

/*
// Find the smallest element in the array
const minElement = Math.min(...arr);

// Print the result
console.log(minElement);
*/