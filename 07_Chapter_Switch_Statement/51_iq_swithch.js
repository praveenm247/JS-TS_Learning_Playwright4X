let day = 2;
switch (day) 
{
    case 0:
        console.log("Sunday — Rest Day");
    case 1:
        console.log("Monday — Sprint Planning");
    case 2:
        console.log("Tuesday — Development");
    case 3:
        console.log("Wednesday — Code Review");
    case 4:
        console.log("Thursday — Testing");
    case 5:
        console.log("Friday — Deployment & Retro");
    case 6:
        console.log("Saturday — Rest Day");
    default:
        console.log("Invalid day value");
}
//Since there are no break statements, all the cases after the matching case (case 2) will also be executed. Therefore, the output will be:
//Tuesday — Development
//Wednesday — Code Review
//Thursday — Testing
//Friday — Deployment & Retro
//Saturday — Rest Day
//Invalid day value   