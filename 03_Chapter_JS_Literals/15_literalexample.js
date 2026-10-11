let count = 42; // valid identifier - starts with a letter and 42 is a number literal
let negative = -100; // valid identifier - starts with a letter and -100 is a number literal
let zero = 0; // valid identifier - starts with a letter and 0 is a number literal

let h = 0xFF; // hexadecimal literal for 255
console.log("h:", h, "typeof:", typeof h);
let color_hex = 0xFF0000; // red color in hexadecimal
console.log("color_hex:", color_hex, "typeof:", typeof color_hex);

let octal = 0o77; // base 8, octal literal
console.log("octal:", octal, "typeof:", typeof octal);
let million = 1e6; // 1 million, scientific notation
console.log("million:", million, "typeof:", typeof million);
let tiny = 1.5e-4; // 0.00015, scientific notation
console.log("tiny:", tiny, "typeof:", typeof tiny);