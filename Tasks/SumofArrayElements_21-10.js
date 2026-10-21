const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);
console.log("Array values after parsing the input: ", arr);
console.log("_____________________________________________");
// Write your solution here
// Variable to store the total sum
let sum = 0;

// Loop through the array and add each element to the sum
for (let i = 0; i < n; i++) {
    sum += arr[i];
}

// Print the result
console.log("The sum of Array elements: ", sum);
console.log("_____________________________________________");