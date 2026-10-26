console.log("___________________Normal sort______________________");
let nums = [10,1,21,2];
console.log("Before sort: ", nums);
nums.sort((a,b) => a-b);
console.log(nums);
nums.sort((a,b) => b-a);
console.log(nums);
console.log("____________________________________________________");

let fruits = ['apple','banana',"cherry"];
console.log("Before sort: ", fruits);
fruits.sort((a, b) => a.localeCompare(b))
console.log(fruits);
console.log("____________________________________________________");
