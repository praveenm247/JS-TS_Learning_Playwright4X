// Ternary operator is a shorthand for if-else statement.
// It takes three operands: condition ? expressionIfTrue : expressionIfFalse
// Single line if-else statement can be replaced with ternary operator.
let actualStatucode = 200;
let message = (actualStatucode === 200) ? "✅ PASS" : "❌ FAIL";
console.log(message); // This line logs the result of the ternary operation to the console, which will be "✅ PASS" since actualStatucode is 200.

// Nested ternary operator can be used for multiple conditions.
let score = 85;
let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : "F";
console.log(grade); // This line logs the result of the nested ternary operation to the console, which will be "B" since score is 85.