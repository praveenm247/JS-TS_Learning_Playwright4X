let browser = ["Chrome", "Webkit", "Firefox", "Opera", "Edge"];
console.log("Length of an array is: ", browser.length);
console.log("_______Traditional for loop iteration______________");

for (let i = 0; i < browser.length; i++) {
    console.log("Browser is: ", browser[i]);
}
console.log("_______for..........of loop iteration______________");

for (let j of browser) {
    console.log("Browser is: ", j);
}
console.log("___________foreach loop iteration__________________");
browser.forEach((test, index) =>
{
    console.log(`${index}: ${test}`);
});
console.log("____________entries() - index + value______________");

for (let [k, test] of browser.entries()) {
    console.log("Browser is: ", k, test);
}
console.log("____________for...in - index + value________________");

for (let brw in browser) {
    console.log(brw, " -> ", browser[brw]);
}
console.log("____________________________________________________");