let student = {
    name: "Ram",
    age: 20,
    course: "React"
};
let { name: studentName, age: studentAge } = student;

console.log(studentName);
console.log(studentAge);

let name="Ram";
let age=20;

let student1={
    name,
    age
};

console.log(student1);

/*Question 1

Create:*/

let myName = "Mounika";
let city = "Hyderabad";

/*Print:

My name is Mounika and I live in Hyderabad.

using template literals.*/
console.log(`My name is ${myName} and I live in ${city}.`);

/*Question 2

Create:*/

let employee = {
    name1:"Rahul",
    salary:50000,
    department:"IT"
};

//Use object destructuring to print all values.*/

let {name1, salary, department} = employee;
console.log(name1);
console.log(salary);
console.log(department);

/*Question 3

Create:*/

let fruits = ["Apple","Banana","Orange"];

/*Use array destructuring to print:

Apple
Orange

(skip Banana)*/
let [first, , third] = fruits;
console.log(first);
console.log(third);

/*Question 4

Create:*/

let arr1=[1,2];
let arr2=[3,4];

/*Merge them using spread.

Expected:

[1,2,3,4]*/
let arr3=[...arr1,...arr2]
console.log(arr3);


/*Question 5

Create:*/

let student2={
    name:"Sara",
    age:21
};

/*Create a new object by adding:

course:"React"

using spread.*/
let student3={
    ...student2,
    course: "React"
}
console.log(student3);

/*Question 6

Create:

function multiply(multiplier, ...numbers)

Multiply every number by multiplier.

Example:

multiply(2,10,20,30);

Output:

[20,40,60]*/

function multiply(multiplier, ...numbers){
   let result = numbers.map((num) => multiplier*num);
   return result;  
}
console.log(multiply(2,10,20,30));

/*Question 7

Create:

function greet(name="Guest")

Print:

Hello Guest

when no parameter is passed.*/

function greet(name = "Guest"){
    console.log(`Hello ${name}`); 
}
greet();

/*Question 8

Create:

let address = {
    city:"Hyderabad"
};

/*Use enhanced object literals to create:

{
    city
}*/

let city1 = "Hyderabad";
let address ={
    city1
}
console.log(address);

/*Question 9

Create:*/

let user={
    name:"Ram"
};

/*Safely print:

user.company.location

using optional chaining.*/

console.log(user.company?.location);

/*Question 10

Create:*/

let score = null;

/*Print:

100

using the nullish coalescing operator.*/

console.log(score ?? 100);

//Create:

let employees = [
    {
        id:1,
        name:"Rahul",
        salary:50000
    },
    {
        id:2,
        name:"Priya",
        salary:70000
    },
    {
        id:3,
        name:"Anil",
        salary:45000
    }
];

//Print employee details using template literals.
employees.forEach(emp => {
console.log(`Employee ${emp.id}.${emp.name} ${emp.salary}`);
});


//Use destructuring to extract name and salary.
let [first1, second, third1] = employees;
console.log(first1.name, first1.salary);
console.log(second.name, second.salary);
console.log(third1.name, third1.salary);

//Create a new employee list with a 20% salary hike using spread.
function hike(employees){
    let hikeSal = employees.map((emp) => {
        return {
            ...emp,
            salary: ((20/100)*emp.salary) + emp.salary
        }
    });
    return hikeSal;
}
let updatedArray = hike(employees);
console.log(updatedArray);

//Create a function that accepts any number of salaries using rest parameters and returns the total.

function total(...numbers){
    let sum = numbers.reduce((sum, num) => sum +num, 0);
    return sum;
}
console.log(total(10,20));
console.log(total(10,20,30));

//Use a default parameter for a greeting function.
function greet(name = "Guest"){
    console.log("Hello", name);
    
}
greet();

//Add a department property to one employee using spread.
let updatedEmployees = employees.map((emp,index)=>{

    if(index===0){

        return {
            ...emp,
            department:"IT"
        };

    }

    return emp;

});

console.log(updatedEmployees);

//Use optional chaining to safely access employee.address?.city.
console.log(employees.address?.city);

//Use nullish coalescing to print "No City" when the city is missing.
console.log(employees.city ?? "No City");
