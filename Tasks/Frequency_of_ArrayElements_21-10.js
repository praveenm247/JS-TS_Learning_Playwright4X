const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);
console.log("Array values after parsing the input: ", arr);
console.log("_____________________________________________");
// Write your solution here

// Object to store the frequency of each element
const freq = {};

// Count frequencies
for (let i = 0; i < n; i++) {
    if (freq[arr[i]]) {
        freq[arr[i]]++;
    } else {
        freq[arr[i]] = 1;
    }
}
console.log(freq);
console.log("_____________________________________________");
// Print the results in the order of first appearance
const seen = new Set();
for (let i = 0; i < n; i++) {
    if (!seen.has(arr[i])) {
        console.log(`${arr[i]} appears ${freq[arr[i]]} times`);
        seen.add(arr[i]);
    }
}
console.log("_____________________________________________");


/*
// Map to store frequencies while preserving insertion order
const freqMap = new Map();

for (let i = 0; i < n; i++) {
    if (freqMap.has(arr[i])) {
        freqMap.set(arr[i], freqMap.get(arr[i]) + 1);
    } else {
        freqMap.set(arr[i], 1);
    }
}

// Iterate over the Map and print
for (const [num, count] of freqMap) {
    console.log(`${num} appears ${count} times`);
}
    */