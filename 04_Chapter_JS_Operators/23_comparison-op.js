// Comparison Operator (will always result in the boolean, true or false)

// > , < , >= , <= 
console.log(3 > 4);
console.log(3 < 4);
console.log(4 >= 4); // (4 > 4 or 4 == 4, or gate)

//  ==, ===

// pizza == pizza // (value only)
// domin === pizzahut // (type and content)
console.log(5 == "5"); // loose check - only value - returns true, because 5 and "5" are equal in value
console.log(5 === "5"); // strict check - value + datatype - returns false, because 5 is a number and "5" is a string, so they are not equal in type

// === Strict check we will check for both the datatype and value
// == Loose check we will check for only value, not the datatype

// ! -> not symbol, it will reverse the boolean value
console.log(5 != "5"); // loose check - only value - returns false, because 5 and "5" are equal in value
console.log(5 !== "5"); // strict check - value + datatype - returns true, because 5 is a number and "5" is a string, so they are not equal in type 

console.log(5 === 5); // true - same value and same datatype