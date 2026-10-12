let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(category); // This line logs the result of the nested ternary operation to the console, which will be "Client Error" since statusCode is 404.