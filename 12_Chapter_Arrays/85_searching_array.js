let res = ["Pass", "Fail", "Error", "Block", "Inprogress"]
console.log("_____________________________________________");
console.log("Length of res array is: ", res.length);
console.log("Values of res array are: ", res);
console.log("____________Index of an element__________________");
// Index of an element
console.log(res.indexOf("Fail")); // returns 1
console.log(res.indexOf("Error")); // returns 2
console.log("____________Index of an last element_____________");
//Index of an last element
console.log(res.lastIndexOf("Pass"));
console.log(res.lastIndexOf("Inprogress"));
console.log("____________Includes returns boolean_____________");
console.log(res.includes("Block"));
console.log("_________________________________________________");