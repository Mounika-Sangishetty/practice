/*Create a function named welcome().
Print

Welcome to JavaScript

Call it 3 times.*/

function welcome(){
    console.log("Welcome to JavaScript");   
}
for(let i =1; i <=3; i++){
    welcome();
}

/*Question 2

Create a function

function multiply(a,b)

Print the multiplication.*/

const multiply = (a,b) => a*b;
console.log(multiply(4,5));

/*Question 3

Create

function fullName(first,last) */

const fullName = (first,last) => first+" "+last;
console.log(fullName("Mounika","Sangishetty"));

/*Question 4

Create

function isAdult(age)

If age is 18 or more

Print

Adult

Else

Minor*/

const isAdult = (age) => {
    if(age >= 18){
        console.log("Adullt");
        
    }else{
        console.log("Minor");
        
    }
}
isAdult(24);

/*Question 5

Create

function square(number)

Return the square.*/

const square = (number) => number * number;
console.log(square(5));

/*Question 6

Create

function largest(a,b)

Return the largest number.*/

const largest = (a,b) => {
   if(a> b){
    return a;
    
   }else{
    return b;
   }
   
  //console.log(`${a}>${b} ? ${a} : ${b}`);
    
}
console.log(largest(20,10));

/*Question 7

Convert this to an arrow function.

function greet(name){
    return "Hello " + name;
}*/

const greet = (name) => {
    return "Hello " +name;
}
console.log(greet("Mounika"));

/*Question 8

Create an array

let numbers = [10,20,30,40];

Create a function

sumArray(numbers)

Return the total.*/
let numbers = [10,20,30,40];

const sumArray = () => {
    let sum = 0;
    for(let i=0; i< numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}
console.log(sumArray(numbers));

/*Create a function

countEven(numbers)

Return how many even numbers are in the array.

Example

[10,15,20,25,30]*/

let numberSet = [10,15,20,25,30];
const countEven = () => {
    let count = 0;
    for(let i =0; i< numberSet.length; i++){
        if(numberSet[i] % 2 === 0){
            count++;    
        }
    }
    return count;
}
console.log(countEven(numberSet));

/*Question 10 (Mini Challenge)

Create a calculator function.
calculator(a,b,operation)*/

const calculator = (a,b,opearion) =>  {
    if(opearion === "+"){
        return a+b;
    }else if(opearion === "-"){
        return a-b;
    }else if(opearion === "*"){
        return a*b;
    }else if(opearion === "/"){
        return a/b;
    }else{
        console.log("Invalid");
        
    }
}

console.log(calculator(10,20,"+"));
console.log(calculator(10,20,"-"));
console.log(calculator(10,20,"*"));
console.log(calculator(10,20,"/"));

//Mini Project

//Build a Student Result System.
let students = [
    {
        name:"Ram",
        marks:90
    },
    {
        name:"John",
        marks:75
    },
    {
        name:"Sara",
        marks:95
    }
];
//Print all student names.
const fun = (data)=>{
    for(let i=0; i<data.length;i++){
        console.log(data[i].name);
        
    } 
}
fun(students);

//Find the average marks.
const avgFun = (data) => {
    let sum = 0;
    for(let i=0;i<data.length;i++){
        sum = sum + data[i].marks;
    }
    let average = sum / data.length;
    return average;
}
console.log(avgFun(students));

//Find the highest marks.
const highestFun = (data) => {
     let largest = data[0].marks;
    for(let i =0; i< data.length; i++){
       if(data[i].marks>largest){
        largest = data[i].marks;
       }
    }
    return largest;
}
highestFun(students);

//Print only students who scored above 80.
const scoreFun = (data) => {
    for(let i=0; i<data.length; i++){
        if(data[i].marks > 80){
            console.log(data[i].name);
            
        }
    }
}
scoreFun(students);

//Add a new student.
const addFun = (data)=>{
    data.push({
        name:"Mounika",
        marks:85
    });

    return data;
}
console.log(addFun(students));


//Count how many students scored above 90.
const highScore = (data) => {
    let highScoreCount = 0;
    for(let i=0; i<data.length ; i++){
        if(data[i].marks > 90){
            highScoreCount++;
        }
    }
    return highScoreCount;
}
console.log(highScore(students));

