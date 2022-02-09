// Create Marks Distribution Calculator (0-32 = F, 33-39 = D, 40-49 = C, 50-59 = B, 60-69 = A-, 70-79 = A, 80-100 = A+)

let marks = 100.9785;

function gradeCalculator(marks) {
  if (marks < 0 || marks > 100) {
    console.log("Invalid Input. PLease Enter Right NUmber");
  } else if (marks >= 80) {
    console.log("You Got A+");
  } else if (marks >= 70) {
    console.log("You Got A");
  } else if (marks >= 60) {
    console.log("You Got A-");
  } else if (marks >= 50) {
    console.log("You Got B");
  } else if (marks >= 40) {
    console.log("You Got C");
  } else if (marks >= 33) {
    console.log("You Got D");
  } else {
    console.log("Failed!! Work Hard");
  }
}

gradeCalculator(parseInt(marks));
