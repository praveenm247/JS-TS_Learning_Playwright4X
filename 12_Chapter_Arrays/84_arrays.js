const browser = ["Chrome", "Webkit", "Firefox", "Opera", "Edge"];
console.log("Length of an array is: ", browser.length);
console.log("_____________________________________________");

for (let i = 0; i < browser.length; i++) {
    console.log("Browser is: ", browser[i]);
    if (browser[i] === "Opera") {
        console.log("Opera is not supported in Automation");
        break;
    }
}
console.log("_____________________________________________");