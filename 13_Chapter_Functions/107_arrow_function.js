function greet(name){
    return `Hello, ${name}`;
}

const greet1 = function(name){
    return `Hello, ${name}`;
}

// Arrow Fn
const greet2 = (name2) => `Hello, ${name2}`;
// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

    console.log(greet("Praveen"));
    console.log("_________________________________________________");
    console.log(greet1("Kairavi"));
    console.log("_________________________________________________");
    console.log(greet2("Neelaganga"));
    console.log("_________________________________________________");