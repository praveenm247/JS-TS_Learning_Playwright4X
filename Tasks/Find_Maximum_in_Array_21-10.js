const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);
console.log("Array values after parsing the input: ", arr);
console.log("_____________________________________________");
// Write your solution here
let maxElement = arr[0];
for (let i = 1; i < n; i++) {
    if (arr[i] > maxElement) {
        maxElement = arr[i];
    }
}
console.log("Max element in the give array is: ", maxElement);
console.log("_____________________________________________");
/*
1. Reading the Input

Copy
const data = require('fs').readFileSync(0, 'utf8');
require('fs') imports Node.js's built-in File System module.
readFileSync(0, 'utf8') reads input synchronously.
The 0 represents standard input (stdin), which is where the terminal or the judging system feeds the data.
'utf8' specifies that the data should be read as a text string rather than a raw buffer.
The entire input is stored as a single string in the variable data.
2. Tokenizing and Converting to Numbers

Copy
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
This line processes the raw string into an array of numbers through a chain of three methods:

.split(/\s+/): Splits the string into an array of substrings using a regular expression. \s+ matches one or more whitespace characters (spaces, tabs, newlines). This separates all the words/numbers in the input.
.filter(s => s.length > 0): Removes any empty strings from the array. This is a safety measure because if the input starts or ends with whitespace, .split() might create empty strings ("") at the beginning or end of the array.
.map(Number): Iterates over the array of strings and converts each one into a JavaScript Number.
The final result is an array of numbers stored in tokens.
3. Extracting n

Copy
const n = tokens[0];
In many programming problems, the first number in the input tells you how many elements follow.
This line grabs the very first number from the tokens array and assigns it to the variable n.
4. Extracting the Array

Copy
const arr = tokens.slice(1, 1 + n);
.slice(start, end) extracts a portion of an array.
1 is the starting index (skipping the first element, which was n).
1 + n is the ending index (exclusive). It ensures exactly n elements are extracted.
The resulting sub-array of n numbers is stored in the variable arr.
Example Walkthrough
If the standard input provided to this script is:

Copy
4
10 20 30 40
Here is what happens at each step:

data becomes the string "4\n10 20 30 40"
tokens becomes the array [4, 10, 20, 30, 40]
n becomes 4
arr becomes [10, 20, 30, 40] (elements from index 1 up to, but not including, index 5).
*/