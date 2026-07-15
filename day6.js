/*Question 1

Create:

let colors = ["Red", "Blue", "Green"];

Use forEach() to print all colors.*/

let colors = ["Red", "Blue", "Green"];

colors.forEach((color) => {
    console.log(color);
});

/*Question 2

Create:

let numbers = [2, 4, 6, 8];

Use map() to create:

[4, 8, 12, 16]*/

let numbers = [2, 4, 6, 8];

let result = numbers.map((num) => {
    return num*2;
});
console.log(result);

/*Question 3

Create:

let ages = [12, 18, 22, 15, 30];

Use filter() to keep only adults (18 and above).

Expected:

[18, 22, 30]*/

let ages = [12, 18, 22, 15, 30];

let adult = ages.filter(age => { 
    return age >= 18;
});
console.log(adult);

/*Question 4

Create:

let users = [
    { id: 1, name: "Ram" },
    { id: 2, name: "John" },
    { id: 3, name: "Sara" }
];

Use find() to get the user with id = 2.*/

let users = [
    { id: 1, name: "Ram" },
    { id: 2, name: "John" },
    { id: 3, name: "Sara" }
];

let output = users.find(num => {
    return num.id === 2;
});
console.log(output);

/*Question 5

Create:

let prices = [100, 200, 300, 400];

Use reduce() to find the total.

Expected:

1000*/
let prices = [100, 200, 300, 400];

let total = prices.reduce((sum, num) => {
    return sum+num;
},0);

console.log(total);

/*Question 6

Create:

let students = [
    { name: "Ram", marks: 90 },
    { name: "John", marks: 70 },
    { name: "Sara", marks: 95 },
    { name: "Tom", marks: 60 }
];

Use filter() to get students with marks above 80.*/

let students = [
    { name: "Ram", marks: 90 },
    { name: "John", marks: 70 },
    { name: "Sara", marks: 95 },
    { name: "Tom", marks: 60 }
];

let highest = students.filter((num) => {
        return num.marks > 80;
});
console.log(highest);

/*Question 7

Using the same array, use map() to create:

["Ram", "John", "Sara", "Tom"]*/
let newArray = students.map((student) => {
    return student.name;
});
console.log(newArray);

/*Question 8

Using the same array, use reduce() to calculate the average marks.*/

let total1 = students.reduce((sum, num) => {
    return sum+num;
}, 0);
let average = total1 / students.length;
console.log(average);


/*Question 9

Create:

let products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 }
];

Use find() to get the product with id = 3.*/

let products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 }
];

let product = products.find((pro) => {
    return pro.id === 3;
});
console.log(product);

/*
Question 10 (Mini Challenge)

Create:*/

let employees = [
    { name: "Rahul", salary: 50000 },
    { name: "Priya", salary: 70000 },
    { name: "Anil", salary: 45000 }
];

/*Using array methods:

Print all employee names using forEach().*/

employees.forEach((emp) =>{
    console.log(emp.name);
    
});

//Create a new array of salaries increased by 10% using map().

let hikeEmployees = employees.map((emp) => {
    return emp.salary + ((10 / 100) * emp.salary); 
});
console.log(hikeEmployees);

//Get employees with salary greater than 50000 using filter().

let highSalary = employees.filter((sal) => {
    return sal.salary > 50000;
});
console.log(highSalary);

//Find Priya using find().

let findPriya = employees.find((emp) => {
    return emp.name === "Priya";
})
console.log(findPriya);


//Calculate the total salary using reduce().

let totalSalary = employees.reduce((sum,num) => {
    return sum+num.salary;
}, 0);
console.log(totalSalary);

/*Mini Project: Product Dashboard

Create:*/

let productsNew = [
    { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
    { id: 2, name: "Phone", category: "Electronics", price: 30000 },
    { id: 3, name: "Shoes", category: "Fashion", price: 2500 },
    { id: 4, name: "Watch", category: "Fashion", price: 5000 }
];

/*Build functions to:

Print all product names.*/
    productsNew.forEach((pro) => {
        console.log(pro.name);
        
    });

//Get all Electronics products.
let electronicsData = productsNew.filter((ele) => {
    return ele.category === "Electronics";
});
console.log(electronicsData);

//Find the product with id = 4.
let findProduct = productsNew.find((pro) => {
    return pro.id === 4;
});
console.log(findProduct);

//Create a new array containing only product names.
let nameArray = productsNew.map((pro) => {
    return pro.name;
});
console.log(nameArray);


//Calculate the total price of all products.
let totalPrice = productsNew.reduce((sum,num) => {
    return sum+num.price;
}, 0);
console.log(totalPrice);



//Calculate the average product price.
let avgPrice = productsNew.reduce((sum,num) => 
  sum+num.price
, 0) / productsNew.length;
console.log(avgPrice);

//Find the most expensive product.

let expensiveProduct = productsNew.reduce((max,pro) => {
    return pro.price > max.price ? pro : max;
})
console.log(expensiveProduct);

