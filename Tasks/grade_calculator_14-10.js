function gradeCalculator(score) {
  if(typeof score !== 'number' || isNaN(score) || score < 1 || !Number.isInteger(score)) {
    console.log("Please provide a valid number or valid score between 0 and 100.");
    return;
  }

  switch (true) {
    case (score >= 90 && score <= 100):
      return 'A';   
      break;
    case (score >= 80 && score < 90): 
      return 'B';    
      break;
    case (score >= 70 && score < 80):
      return 'C';
      break;
    case (score >= 60 && score < 70):
      return 'D';
      break;
    case (score >= 50 && score < 60):
      return 'E';
      break;
    default: 
      return 'F';
      break;
  }
}

  const n = require('fs').readFileSync(0, 'utf8');
  console.log("Your grade is: ", gradeCalculator(Number(n)))


    /*if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else if (score >= 70 && score < 80) {
    return 'C';
  } else if (score >= 60 && score < 70) {
    return 'D';
  } else {
    return 'F';
  }
}*/
