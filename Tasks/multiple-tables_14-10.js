/*const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number"));
let i = num;
console.log("Table of " + i +"\n");
for (let i = num; i <= num; i++)
{
    let j = 1;
    for (let j = 1; j <= 10; j++)
    {
        console.log(i + " * " + j + " = " + (i * j));
    }
}
*/

function printMultiplicationTable(num) {
    // Edge Case Handling: Ensure the input is a valid positive number
    if (typeof num !== 'number' || isNaN(num) || num <= 0) {
        console.log("Please provide a valid positive number.");
        return;
    }

    // Generate the multiplication table from 1 to 10
    for (let i = 1; i <= 10; i++) {
        // console.log supports printf-like format specifiers (%d for integers)
        //console.log("%d x %d = %d", num, i, num * i);
        // Template literal for alternative formatting
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

// Example usage:
const prompt = require("prompt-sync")();
let number = Number(prompt("Enter a number:"));
printMultiplicationTable(number);
