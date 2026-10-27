//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 


function name1() {
    console.log("Hi")
}
console.log(name1());
console.log("_________________________________________________");

(function(){
    console.log("Anonymous Fn");
})();
console.log("_________________________________________________");
(function () {
    console.log("Staging")
})();
console.log("_________________________________________________");

(() => {
    console.log("Setup complete");
})();
console.log("_________________________________________________");