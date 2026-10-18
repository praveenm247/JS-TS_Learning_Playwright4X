function tiangletype(side1, side2, side3) {
    // Edge Case Handling: Reject if ANY of the 3 sides is null, undefined, or not a valid number
    if (
        !Number.isFinite(side1) ||
        !Number.isFinite(side2) ||
        !Number.isFinite(side3)
    ) {
        return "Not a Triangle";
    }

    // Compare all 3 sides of Triangle
    if (side1 === side2 && side2 === side3 && side1 === side3) {
        return "Equilateral Triangle";
    }
    else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return "Isosceles Triangle";
    }
    else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
        return "Scalene Triangle";
    }
    else {
        return "Not a Triangle";
    }
}

// Example usage:
const prompt = require("prompt-sync")();
let s1 = Number(prompt("Enter side1:"));
let s2 = Number(prompt("Enter side2:"));
let s3 = Number(prompt("Enter side3:"));
console.log("Triange type is: ", tiangletype(s1, s2, s3));


/*const data = require(`fs`).readFileSync(0,`utf-8`);
let sidesTriangle = data.split("");

if(sidesTriangle.length !==3)
{
    console.log("Not a Triangle");
}
else
{
    let side1 = Number(sidesTriangle[0]);
    let side2 = Number(sidesTriangle[1]);
    let side3 = Number(sidesTriangle[2]);
    
    // Compare all 3 sides of Triangle
    if (side1 === side2 && side2 === side3 && side1 === side3) {
        console.log("Equilateral Triangle");
    }
    else if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log("Isosceles Triangle");
    }
    else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
        console.log("Scalene Triangle");
    }
   
}*/


