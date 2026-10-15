const prompt = require("prompt-sync")();
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