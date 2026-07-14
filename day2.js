let a = 10;
let b = 20;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

let age = 25;
let hasAadhar1 = true;

console.log(age >= 18 && hasAadhar1);

console.log(age < 18 || hasAadhar1);

console.log(!hasAadhar1);

let age3 = 25;
let hasAadhar = true;

console.log(age3 >= 18 && hasAadhar);

console.log(age3 < 18 || hasAadhar);

console.log(!hasAadhar);

let age2 = 20;

if(age2 >= 18){
    console.log("Eligible for voting");
}

let marks1 = 80;

if(marks1 >= 35){
    console.log("Pass");
}

let age1 = 15;

if(age1 >= 18){
    console.log("Adult");
}else{
    console.log("Minor");
}

let password = "12345";

if(password === "admin123"){
    console.log("Login Success");
}else{
    console.log("Invalid Password");
}

let marks = 82;

if(marks >= 90){
    console.log("Grade A");
}else if(marks >= 75){
    console.log("Grade B");
}else if(marks >= 60){
    console.log("Grade C");
}else if(marks >= 35){
    console.log("Pass");
}else{
    console.log("Fail");
}

let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}

let age4 = 22;

console.log(age4 >= 18 ? "Adult" : "Minor");

let number = 10;
if(number > 0){
    console.log("Positive Number");
}

let number1 = 8;
if(number1 / 2){
    console.log("Even");
}else{
    console.log("Odd");
}

let a1 = 50;
let b1 = 70;
console.log(a1 > b1 ? a1 : b1);

let user = {
    age: 25,
    hasAAdhar: true
}
console.log(user.age >=18 && user.hasAAdhar === true ? "Eligible" : "Not Eligible");

let marks2 = 68;
if(marks2 > 90){
    console.log("Grade A");
}else if(marks2 > 80){
    console.log("Grade B");
}else if(marks2 > 70){
    console.log("Grade C");
}else if(marks2 > 60){
    console.log("Grade D");
}else if(marks2 > 35){
    console.log("Pass");
}else if(marks2 < 35){
    console.log("Fail");
}else{
    console.log("Invalid marks");
}

let month = 7;

switch(month){
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("Febuary");
        break;

    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
}

let username = "mounika";
let password1 = "12345";

if(username === "mounika" && password1 === "12345"){
    console.log("Login Successful");
}else{
    console.log("Invalid Credentials");
}

let amount = 3500;

if(amount >= 3000){
    console.log("20% Discount");
}else if(amount >= 2000){
    console.log("10% Discount");
}else{
    console.log("No Discount");
}

let signal = "Red";

switch(signal){
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Wait");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

//Check if a person is eligible to vote.
let user1 = {
    age: 19,
    hasAAdhar: true
}
console.log(user1.age >=18 && user1.hasAAdhar === true ? "Eligible" : "Not Eligible");

//Check if a number is even or odd.
let number2 = 13;
if(number2 / 2){
    console.log("Even");
}else{
    console.log("Odd");
}

//Find the largest of two numbers.
let a2 = 24;
let b2 = 16;
console.log(a2 > b2 ? `${a2} is largest` : `${b2} is largest`);

//Find the largest of three numbers.
let a3 = 40;
let b3 = 50;
let c3 = 60;
if(a3 > b3 && a3 > c3){
    console.log(a3, " is largest");
}else if(b3 >a3 && b3 > c3){
    console.log(b3, " is largest");
}else{
    console.log(c3, " is largest");
}

//Check whether a year is a leap year.
let year = 2024;
if(year % 4 === 0 && year % 100 !== 0 && year % 400 === 0 ){
console.log("leap year");
}else{
    console.log("not a leap year");
    
}
 
//Print grades based on marks.
let marks3 = 84;
if(marks3 > 90){
    console.log("Grade A");
}else if(marks3 > 80){
    console.log("Grade B");
}else if(marks3 > 70){
    console.log("Grade C");
}else if(marks3 > 60){
    console.log("Grade D");
}else if(marks3 > 35){
    console.log("Pass");
}else if(marks3 < 35){
    console.log("Fail");
}else{
    console.log("Invalid marks");
}

//Check if a user can log in (username & password).
let username3 = "sai";
let password3 = "1234";
if(username3 === "sai" && password3 ==="1234"){
    console.log("User can log in");
    
}else{
    console.log("Invalid credentials");
    
}
//Print the day name using switch.
let day01 = 5;

switch(day01){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}

//Print the month name using switch.
let month1 = 5;

switch(month1){
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("Febuary");
        break;

    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
}

//Check if a number is positive, negative, or zero.
let num = 6;
if(num > 0){
    console.log(num," is Positive");
}else if(num < 0){
    console.log(num," is Negative");
}else{
    console.log(num, "is Zero");
}