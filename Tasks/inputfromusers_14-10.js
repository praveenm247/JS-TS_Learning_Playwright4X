const data = require('fs').readFileSync(0, 'utf8');
//console.log("Hello, " + data + "!");
console.log(`Hello, ${data}!`)
const data1 = require('fs').readFileSync(0, 'utf8');
//console.log("Hello, " + data1 + "!");
console.log(`Hello, ${data1}!`)

/*
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function greetUser() {
    const rl = readline.createInterface({ input, output });

    // The question automatically waits for user input and returns it
    const inputName = await rl.question('Please enter your name: ');
    const userName = inputName.trim();

    if (userName === '') {
        console.log("Hello, stranger!");
    } else {
        console.log(`Hello, ${userName}!`);
    }

    rl.close();
}

greetUser();
*/
/*
// Configure the standard input stream to read text properly
process.stdin.setEncoding('utf-8');

console.log("Please enter your name:");

// Listen for a single 'data' event to capture the user's input
process.stdin.once('data', (input) => {
    // Clean up the input by removing the trailing newline character and extra spaces
    const userName = input.trim();

    // Edge Case Handling: Check if the input is empty or only whitespace
    if (userName === '') {
        console.log("Hello, stranger! (You didn't enter a name.)");
    } else {
        // Use a template literal to greet the user
        console.log(`Hello, ${userName}!`);
    }

    // Terminate the process cleanly so the program doesn't hang
    process.exit();
});
*/
