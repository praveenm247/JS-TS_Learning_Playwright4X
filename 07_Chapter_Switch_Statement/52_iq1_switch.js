let day = 10;
switch (day) 
{
    case 0:
        console.log("Sunday — Rest Day");
        break;
    case 1:
        console.log("Monday — Sprint Planning");
        break;
    case 2:
        console.log("Tuesday — Development");
        break;
    case 3:
        console.log("Wednesday — Code Review")
        break;
    case 4:
        console.log("Thursday — Testing");
        break;
    case 5:
        console.log("Friday — Deployment & Retro");
        break;
    case 6:
        console.log("Saturday — Rest Day");
        break;
    default:
        console.log("Invalid day value");
}
//Since there are break statements, only the matching case (case 10) will be executed. Therefore, the output will be:
//Invalid day value