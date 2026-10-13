let age = 3;

if (age >= 0 && age <= 5) {
    console.log("Toddler");
} else if (age >= 6 && age <= 12){
    console.log("Child");
} else if (age >= 13 && age <= 17){
    console.log("Teenager");
} else if (age >= 18 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior");
} else {
    console.log("Invaild age")
}