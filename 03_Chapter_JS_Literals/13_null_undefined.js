// ============================================================
// Topic: null vs undefined in JavaScript
// ============================================================

/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns 
                "no value" or "empty".
                 It is intentional absence of any value.
*/

var x;
console.log("x:", x); // undefined, because x is declared but not assigned any value

var audi = null;
console.log("audi:", audi); // null, because audi is explicitly assigned a value of null, indicating no value

// --------------------------------------------------------
// 1. undefined
// --------------------------------------------------------

let userName; // declared but not assigned
console.log("userName:", userName);
console.log("typeof userName:",typeof userName);

// function greet() {
//     // no return statement
// }
// console.log(greet()); // undefined is returned by default when no return statement is present

x = 10;
console.log("x:", x);

// --------------------------------------------------------
// 2. null
// --------------------------------------------------------
let profilePicture = null;
console.log("profilePicture:", profilePicture);
console.log("typeof profilePicture:", typeof profilePicture); // "object"   <-- known JS quirk!

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison       | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false
