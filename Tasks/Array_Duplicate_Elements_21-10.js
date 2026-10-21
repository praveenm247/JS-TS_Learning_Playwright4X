const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);
console.log("Array values after parsing the input: ", arr);
console.log("_____________________________________________");
// Write your solution here

const seen = new Set();
const duplicates = [];
// Find all duplicate elements
for (let i = 0; i < n; i++) {
    if (seen.has(arr[i])) {
        // If we already saw it, check if it's already in our duplicates list
        if (!duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    } else {
        // First time seeing this element
        seen.add(arr[i]);
    }
}
console.log("_____________________________________________");
// Print the results
if (duplicates.length === 0) {
    console.log("No duplicates found");
} else {
    for (let i = 0; i < duplicates.length; i++) {
        console.log(duplicates[i]);
    }
}
console.log("_____________________________________________");