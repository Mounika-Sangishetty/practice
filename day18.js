
function greet(name){
    console.log("Hello " + name);
}

function processUser(callback){
    callback("Mounika");
}

processUser(greet);

//Practice 1

function sayBye(name){
    console.log("Bye " + name);  
}
function execute(callback){
    callback("Ram");
}

execute(sayBye);

//Practice 2

function calculate(a,b,operation){
    return operation(a,b);
}
function multiplay(a,b){
    return a*b;
}
console.log(calculate(4,5,multiplay));


//Practice 3

function score(){
    let score = 0;
    return function(){
        score += 10;
        console.log(score);
        
    }
}

let c = score();
c();
c();
c();

//Practice 4

let array = [50,10,100,30];
array.sort((a,b)=> a-b);
console.log(array);
array.sort((a,b)=>b-a);
console.log(array);


//practice 5

let numbers = [20,-5,30,26,42];
console.log(numbers.every(num=> num>=0));

//Practice 6

let marks = [80,70,60,40,30,91];
console.log(marks.some(num=>num> 90));

//Practice 7

let products = [

{name:"Laptop"},

{name:"Mouse"},

{name:"Keyboard"},

{name:"Printer"},

{name:"CPU"},
];


let result = products.find(pro=>pro.name==="Laptop");
console.log(result);

//Practice 8

console.log(products.findIndex(pro => pro.name === "Keyboard"));

//Practice 9

let array1 = [[10],[20],[30]];
console.log(array1.flat());


let employee={

name:"Mounika",

salary:50000

};
console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));


//Mini Project 1

let students=[
{name:"Ram",marks:95},

{name:"Hari",marks:65},

{name:"Sam",marks:80},

{name:"John",marks:40}

]
/*let highMark = students[0].marks;
let highest = students.find((stu)=>{
    if(stu.marks > highMark){
        highMark = stu.marks;  
    }
    return stu;
});
console.log(highest.name);*/

let highest = students.reduce((max,stu)=>{
    return stu.marks > max.marks ? stu : max;
},students[0]);
console.log(highest, "high");

console.log(students.every(stu=> stu.marks >= 35));
console.log(students.some(stu => stu.marks > 90));


class ShoppingCart {
    constructor(items,total){
        this.items = [];
        this.total = 0;
    }
    addItem(name,price){
        this.items.push({
            name: name,
            price: price
        });
        this.total += price;
    }
    searchItem(name){
        let searchItem = this.items.find(item => item.name === name);
        console.log(searchItem);
    }
    removeItem(name){
        let index = this.items.findIndex(item => item.name === name);
        if (index !== -1) {
           let removedItem = this.items[index];
            this.total -= removedItem.price;
            this.items.splice(index,1);
            
        } 
        console.log(this.items);
        
    }
    sort(){
        this.items.sort((a,b)=>a.price-b.price);
        
    }
}
let s1 = new ShoppingCart();
s1.addItem("laptop", 50000);
s1.addItem("keyboard", 1500);
s1.addItem("Mouse", 1000);
s1.searchItem("Mouse");
s1.sort();
s1.removeItem("Keyboard");

/*
// Assignment 1

[3,5,8]

Assignment 2
true

Assignment 3
true

Assignment 4
{a,b}

Assignment 5
[1,2,3]

Q1
every()
Q2
filter()

Q3
A function remembering its outer variables

*/