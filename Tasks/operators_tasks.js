// 1. Increment operator
let a = 100;
console.log(a++ + ++a +a++ + ++a); // 408
console.log(a); // 104

// 2. Decrement operator
//let b = 37;
//console.log(—b + b—);
//console.log(b);

//3. Decrement operator
let c = 5; 
let d = c-- - --c; // calculation: 5 - 3 = 2
console.log(d, c); // 2, 3

// 4. Ternary operator + increment operator
let i = 1; 
let r = i++ > 1 ? i++ : ++i; 
console.log(r, i); // 3, 3
