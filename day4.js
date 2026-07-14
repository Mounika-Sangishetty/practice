//Question 1

//Create this object. Print all properties.
let mobile = {
    brand:"Samsung",
    model:"S24",
    price:75000
};
for(let key in mobile){
    console.log(mobile[key]);
    
}

//Question 2

//Update the price to 80000.
mobile.price = 80000;
console.log(mobile);

//Question 3

//Add color:"Black"

mobile.color = "Black";
console.log(mobile);

//Question 4

//Delete the model.
delete mobile.model;
console.log(mobile);

//Question 5

//Create
let employee = {
    name:"Rahul",
    department:"IT",
    salary:50000
};
//Print every key and value using for...in.
for(let key in employee){
    console.log(key, employee[key]);
}

//Question 6

//Print only the keys.
for(let key in employee){
    console.log(key);
}

//Question 7

//Print only the values.
for(let key in employee){
    console.log(employee[key]);
}

//Question 8

//Create an array of three students.
let data = [
{
name:"Ram",
age:20
},
{
name:"John",
age:21
},
{
name:"Sara",
age:22
}
]
/*Print

Ram
John
Sara

using a loop.*/
for(i = 0; i < data.length; i++){
    console.log(data[i].name);
    
}

//Create
let laptop = {
    brand:"HP",

    specs:{
        ram:"16GB",
        processor:"i7",
        storage:"512GB"
    }
};
/*Print

16GB
i7
512GB*/
for(let key in laptop.specs){
console.log(laptop.specs[key]);

}

//Question 10 (Mini Challenge)

//Create this object.
let product = {
    id:1,
    title:"Laptop",
    price:60000,
    stock:15
};
/*Using Object.entries(), print:

id : 1
title : Laptop
price : 60000
stock : 15*/
console.log(Object.entries(product));
//another way 
for(let key in product){
    console.log(`${key}: ${product[key]}`);
    
}


//Create a Student Management System.
let students = [
    {
        name:"Ram",
        age:20,
        course:"React",
        marks:90
    },
    {
        name:"John",
        age:22,
        course:"JavaScript",
        marks:80
    },
    {
        name:"Sara",
        age:21,
        course:"HTML",
        marks:95
    }
];
//Print all student names.
for(let i = 0; i < students.length; i++){
    console.log(students[i].name);
    
}
//Print students with marks greater than 85.
for(let i = 0; i < students.length; i++){
    if(students[i].marks > 85)
    console.log(`${students[i].name} : ${students[i].marks}`);
    
}
//Calculate the average marks.
let sum = 0;
for(let i = 0; i < students.length; i++){
    sum = sum + students[i].marks;
}
console.log(sum / (students.length));

//Add a new student.
students.push({
        name:"Mounika",
        age:29,
        course:"React",
        marks:65
})
console.log(students);

//Update one student's course.
students[0].course = "Nextjs"
console.log(students);
//Delete one student from the array.
students.pop();
console.log(students);