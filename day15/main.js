
import { multiply, divide } from "./math.js";
import hello from "./math.js";
import greet from "./message.js";

console.log(multiply(5,6));
console.log(divide(10,2));
hello();
greet();

let data = {

name:"Ram",

city:"Hyderabad"

};

let array =["HTML","CSS","JavaScript"];

localStorage.setItem("user", JSON.stringify(data));
let result = JSON.parse(localStorage.getItem("user"));
console.log(result.name);

console.log(result.city);

localStorage.setItem("arr", JSON.stringify(array));
let arrayData = JSON.parse(localStorage.getItem("arr"));
arrayData.forEach((arr)=>{
    console.log(arr);
    
});

//Mini Project 1

let input = document.getElementById("input");
let button = document.getElementById("btn");
let clearButton = document.getElementById("btn1");
let text = document.getElementById("text");

let savedName = localStorage.getItem("inputValue");

function display(name){
    text.innerText = `Welcome ${name}`;
}
if(savedName){
display(savedName);
}

button.addEventListener("click", ()=>{
    localStorage.setItem("inputValue", input.value);
    display(input.value);
});

clearButton.addEventListener("click", ()=>{
    input.value= "";
    text.innerText = "";
    localStorage.removeItem("inputValue");
    input.focus();
});


//Mini Project 2

let input1 = document.getElementById("input1");
let button1 = document.getElementById("btn2");
let ul = document.getElementById("ul");
let array1 = JSON.parse(localStorage.getItem("listArray")) || [];


if(array1.length > 0){
    array1.forEach((arr)=>{
        let li = document.createElement("li");
        li.innerText = arr;
        ul.appendChild(li);
    })
}

button1.addEventListener("click", ()=>{
    if(input1.value.trim() !== ""){
        let li = document.createElement("li");
        array1.push(input1.value);
        li.innerText = input1.value;
        ul.appendChild(li);
        input1.value = "";
        input1.focus();  
        localStorage.setItem("listArray", JSON.stringify(array1));
    }
    

});

//Assignment 1

localStorage.setItem("data", "JavaScript");
let result1 = localStorage.getItem("data");
console.log(result1);


//Assignment 2
let obj1= {

course:"React",

duration:"3 Months"
}

let obj1Data = localStorage.setItem("object1",JSON.stringify(obj1));
let result2 = JSON.parse(localStorage.getItem("object1"));
console.log(result2.course);
console.log(result2.duration);

/*

Assignment 3

10

Assignment 4

string

Assignment 5

Ram
*/