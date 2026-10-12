let environment = "staging";
let apiUrl = (environment === "production") ? "https://api.example.com" : "https://staging-api.example.com";
console.log(apiUrl); // This line logs the result of the ternary operation to the console, which will be "https://staging-api.example.com" since environment is "staging".