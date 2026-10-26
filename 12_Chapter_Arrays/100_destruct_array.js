let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);    // 10
console.log(b);    // 20
console.log(rest); // [30, 40, 50]


let [, , thirdOnly] = [10, 20, 30];
console.log(thirdOnly);