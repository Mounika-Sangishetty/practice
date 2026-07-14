let name1 = "mounika";
let age = 29;
var city = "Hyderabad";
const isWorking = true;
let salary = 23000;

console.log(name1);
console.log(age);
console.log(city);
console.log(isWorking);
console.log(salary);

console.log(typeof name1);
console.log(typeof age);
console.log(typeof city);
console.log(typeof isWorking);
console.log(typeof salary);

const person = {
    name: "mounika",
    age: 29,
    skills: ["html", "css", "javascript"]
}

console.log(person);

const fruits = ["apple", "banana", "orange", "papaya"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

const fruits1 = ["Apple", "Banana", "Orange", "Mango"];
const colors = ["Red", "Blue", "Green", "Yellow"];
const numbers = [5, 10, 15, 20, 25];
const details = ["Mounika", 24, true, "Frontend Developer"];

for(i = 0; i < fruits1.length; i++){
    console.log(fruits1[i]);
}

for(i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

for(i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

for(i = 0; i < details.length; i++){
    console.log(details[i]);
}

const movies = ["athadu", "pokiri", "aagadu", "nijam", "svsc"];

console.log(movies[0]);
console.log(movies.length - 1);
console.log(movies.length);
for(i = 0; i < movies.length; i++){
    console.log(movies[i]);
}

let score = 50;
console.log(score);

score = 80;
console.log(score);

const company = "Google";
//company = "microsoft";
//console.log(company);
//TypeError: Assignment to constant variable.

const name2 = "Mounika";
let age1 = 29;
let isFrontendDeveloper = true;
let favouriteProgLanguage = "next.js";
let experience = 2;

console.log(`Hi, my name is ${name2}.
I am ${age1} years old.
I have ${experience} years of experience.
My favorite language is ${favouriteProgLanguage}.`);