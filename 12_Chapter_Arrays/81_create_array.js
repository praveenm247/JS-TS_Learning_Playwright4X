let arr = ["Test", 20, null]; //Create an array directly by assigning values
let arr1 = new Array(3); //Create an empty array * 3
let arr2 = new Array(1, 2, 3); // Create an array with values assigned
console.log("_____________________________________________");
console.log("Length of arr is: ", arr.length); //Length of arr is:  3
console.log("Length of arr1 is: ", arr1.length);// Length of arr1 is:  3
console.log("Length of arr2 is:", arr2.length); //Length of arr2 is: 3
console.log("_____________________________________________");
console.log("arr values: ", arr);//Result: [ 'Test', 20, null ]
console.log("arr1 values: ", arr1);// Result: [ <3 empty items> ]
console.log('arr2 values: ', arr2); //Result: [ 1, 2, 3 ]
console.log("_____________________________________________");
let test = Array.of(1, 2, 3, 4, 5); //Create an array with values assigned
console.log("test array values: ", test);//result: [ 1, 2, 3, 4, 5 ]
console.log("_____________________________________________");
//Array.from string
let arr3 = Array.from("Praveen");
console.log("Values of arr3: ", arr3); //result: ['P', 'r', 'a', 'v',  'e', 'e', 'n']