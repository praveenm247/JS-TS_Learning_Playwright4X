let arr = [1, 2, 3];
console.log("Lenght of arr is: ", arr.length);
console.log("arr values: ", arr);
console.log("_____________________________________________");
// Add/Append an element at the end of an array
arr.push(4);
console.log("Lenght of arr after push : ", arr.length);
console.log("arr values after push : ", arr);
console.log("_____________________________________________");
// Remove an element at the end of an array
arr.pop();
console.log("Lenght of arr after pop : ", arr.length);
console.log("arr values after pop : ", arr);
console.log("_____________________________________________");
// Add/Append an element at the begging of an array
arr.unshift(0);
console.log("Lenght of arr after unshift : ", arr.length);
console.log("arr values after unshift : ", arr);
console.log("_____________________________________________");
// Remove an element at the begging of an array
arr.shift();
console.log("Lenght of arr after shift : ", arr.length);
console.log("arr values after shift : ", arr);
console.log("_____________________________________________");
// Removes specified element(s) from the specified index of an array
arr.splice(2, 1); // remove 1 element from the index 2 of an array
console.log("Lenght of arr after splice : ", arr.length);
console.log("arr values after splice : ", arr);
console.log("_____________________________________________");
// Add specified element(s) from the specified index of an array
arr.splice(1, 0, 3); // Add 1 element '3' from the index 2 of an array
console.log("Lenght of arr after splice : ", arr.length);
console.log("arr values after splice : ", arr);
console.log("_____________________________________________");
// Add specified element(s) from the specified index of an array
arr.splice(1, 2, 2, 3); // Replace 2 element '2, 3' from the index 1 of an array and 3, 2 removed
console.log("Lenght of arr after splice : ", arr.length);
console.log("arr values after splice : ", arr);
console.log("_____________________________________________");
/* splice() structure
@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount
The number of elements to remove. If value of this argument is either a negative number, zero, 
undefined, or a type that cannot be converted to an integer, the function will evaluate the 
argument as zero and not remove any elements.

@param items — Elements to insert into the array in place of the deleted elements.

@returns — An array containing the elements that were deleted.*/