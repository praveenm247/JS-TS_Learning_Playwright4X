function getStatus(code) {
    if (code >= 200 && code < 300) {
        return "Success";
    } else if (code >= 400 && code < 500) {
        return "client error";
    } else if (code >= 500) {
        return "server error";
    } else {
        return "unknown";
    }
}

console.log(getStatus(200));
console.log("_________________________________________________"); 
console.log(getStatus(404));
console.log("_________________________________________________");
console.log(getStatus(500)); 
console.log("_________________________________________________");