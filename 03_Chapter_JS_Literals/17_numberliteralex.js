// --------------------------------------------------------
// 3. NUMERIC SEPARATORS (ES2021+)
// --------------------------------------------------------


let million = 1_000_000; // valid identifier - starts with a letter and 1_000_000 is a number literal with numeric separators
let billion = 1_000_000_000; // valid identifier - starts with a letter and 1_000_000_000 is a number literal with numeric separators
let binarySep = 0b1010_0001; // valid identifier - starts with a letter and 0b1010_0001 is a number literal with numeric separators
let hexSep = 0xFF_FF; // valid identifier - starts with a letter and 0xFF_FF is a number literal with numeric separators


// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------

let big = 123456789012345678901234567890n; // valid identifier - starts with a letter and 123456789012345678901234567890n is a BigInt literal
let big2 = BigInt("123456789012345678901234567890"); // valid identifier - starts with a letter and "123456789012345678901234567890" is a string literal
let bigFromNum = BigInt(42); // valid identifier - starts with a letter and 42 is a number literal 

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigFromNum);
console.log("typeof BigInt:", typeof big); // "bigint"