//Question 1

//Create an array of five colors.

//Print all colors.

let colorBox = ["red", "yellow", "green", "blue", "orange"];

for(let color of colorBox){
    console.log(color);
}

//Question 2

//Replace the third color with Black.

colorBox[2] = "Black";
console.log(colorBox);

//Question 3

//Add Purple at the end.
colorBox.push("Purple");
console.log(colorBox);

//Question 4

//Remove the last element.
colorBox.pop();
console.log(colorBox);

//Question 5

//Print the first and last element.
console.log(colorBox[0]);
console.log(colorBox[colorBox.length - 1]);

//Question 6

//Find whether Mango exists in the array.|
console.log(colorBox.includes("Mango"));

//Question 7

//Print all elements using a loop.
for(let color of colorBox){
    console.log(color);
}

//Question 8

//Print only fruits whose name length is greater than 5.
let fruits1 = ["Apple", "Banana", "Mango", "Orange", "Kiwi"];
for(let fruit of fruits1){
    if(fruit.length > 5){
        console.log(fruit);
        
    }
}
//Print only the city names whose length is greater than 5.
let cities = ["Hyderabad", "Goa", "Delhi", "Mumbai", "Pune"];
for(let city of cities){
    if(city.length > 5){
        console.log(city);
        
    }
}
//Question 9

//Create an array of numbers Print their sum.
let numbers = [10,20,30,40,50];
let sum = 0;
for(let num of numbers){
    sum = sum + num;
}
console.log(sum);


//Question 10

//Find the largest number.
let largest = numbers[0];
for(let num of numbers){
    if(num > largest){
        largest = num;
    }
}
console.log(largest);



let students = [
    "Rahul",
    "Priya",
    "John",
    "Mounika"
];
//Add "David"
students.push("David");
console.log(students);
//Remove "Rahul"
students.shift();
console.log(students);
//Replace "John" with "Ravi"
students[2] = "Ravi";
console.log(students);
//Print all students
for(let student of students){
    console.log(student);
}
//Print total students
console.log(students.length);

//Reverse an array (using a loop).
for(let i = numbers.length - 1; i >=0 ; i--){
    console.log(numbers[i]);
    
}

//Find the smallest number in an array.

let smallest = numbers[0];
for(let num of numbers){
    if(num < smallest){
        smallest = num;
    }
}
console.log(smallest);

//Count even numbers.
let count = 0;
for(let num of numbers){
    if(num % 2 === 0){
        count++;
    }
}
console.log(count);

//Count odd numbers.
let countOdd = 0;
for(let num of numbers){
    if(num % 2 != 0){
        countOdd++;
    }
}
console.log(countOdd);

//Print duplicate values if any.
let numbers5 = [10, 20, 30, 20, 40, 10, 50];
for(let i = 0; i <  numbers5.length; i++){
    for (let j = i+1; j <numbers5.length; j++){
        if(numbers5[i] === numbers5[j]){
            console.log(numbers5[i]);
            
        }
    }
}


//Remove duplicate values.

let unique = [];
for(let num of numbers5){
    if(!unique.includes(num)){
        unique.push(num);
    }
}
console.log(unique);
