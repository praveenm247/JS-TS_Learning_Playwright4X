const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);
console.log("Array values after parsing the input: ", arr);
console.log("_____________________________________________");
// Write your solution here

// Array to hold the reversed elements
const reversed = [];

// Loop backwards from the last element to the first
for (let i = n - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

// Print the reversed elements separated by a space
console.log(reversed.join(' '));
console.log("_____________________________________________");