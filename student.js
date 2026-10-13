let studentName = "Mabior";

let assignment = 86;
let midterm = 80;
let finalExam = 91;

let score = (assignment * 0.30) + (midterm * 0.30) + (finalExam * 0.40);

let grade;

if (score >= 85) {
    grade = "A";
} else if (score >= 75) {
    grade = "B";
} else if (score >= 65) {
    grade = "C";
} else if (score >= 50) {
    grade = "D";
} else {
    grade = "F";
}

let status;

if (score >= 70) {
    status = "Passed";
} else {
    status = "Failed";
}

console.log("Student: " + studentName);
console.log("Final Score: " + score);
console.log("Grade: " + grade);
console.log("Status: " + status)