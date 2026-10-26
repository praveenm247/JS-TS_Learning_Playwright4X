### Explain this - console.log(arr.slice(-3,-5));

// Slice & Combining

``` javascript
let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) = index = 0
// Don't give the end, it will automatically 
// take from start to end.

// console.log(arr.slice(1, 3));
console.log(arr);

// console.log(arr.slice(2));

// console.log(arr.slice(-2));
// console.log(arr.slice(-3));

// console.log(arr.slice(0));

// console.log(arr.slice(-5));

console.log(arr.slice(-3,-5));
```

It prints `[]`, an empty array, because the start ends up after the end. Here's why, step by step.

**1. Negative numbers count back from the end.** `arr` has 5 items, and a negative index means "length plus that number":

| Value | 1 | 2 | 3 | 4 | 5 |
|:--|:-:|:-:|:-:|:-:|:-:|
| Normal index | 0 | 1 | 2 | 3 | 4 |
| Negative index | -5 | -4 | -3 | -2 | -1 |

- `-3` → `5 + (-3)` = **2**
- `-5` → `5 + (-5)` = **0**

**2. So `arr.slice(-3, -5)` is the same as `arr.slice(2, 0)`.**

**3. `slice` only moves forward.** It copies from the start index up to, but not including, the end index. A start of 2 and an end of 0 is backwards, so there is nothing to copy. `slice` never reverses and never throws an error; it just returns `[]`.

**To get `[1, 2]`, put the smaller number first:**

```js
arr.slice(-5, -3);   // [ 1, 2 ]  same as slice(0, 2)
arr.slice(-3);       // [ 3, 4, 5 ]  from index 2 to the end
arr.slice(-3, -1);   // [ 3, 4 ]  stops before the last item
```

**Rule of thumb:** convert any negative number to `length + n`. If the start isn't smaller than the end, you get an empty array.