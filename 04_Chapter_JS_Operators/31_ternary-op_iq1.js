let isCI = true;
let browerMode = isCI ? "headless" : "headed";
console.log("Launching browser in " +browerMode+ "mode"); // This line logs the result of the ternary operation to the console, which will be "headless" since isCI is true.