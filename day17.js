//Practice 1
try{
    console.log(x);
    
}catch (error) {
    console.log("Something went wrong");
    
}

//Practice 2

try{
    console.log(x);
    
}catch (error){
    console.log(error.message);
    
}

//Practice 3

try{
    console.log("Hello");
    
}catch(error){
    console.log(error);
    
}finally{
    console.log("Finished");
    
}

//Practice 4

let age = 16;

try{
    if(age < 18){
        throw new Error("Not Eligilble");
    }
    console.log("Eligible");
    
}catch(error){
    console.log(error.message);
    
}

//Mini Project 1

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById("button");

function divide(){
    try{
        if(parseFloat(input2.value) === 0){
            throw new Error("Cannot divide by zero");
        }
        let result = input1.value / input2.value;
        console.log(`Result = ${result}`);
        
    }catch(error){
        console.log(error.message);
        
    }
    

}

button.addEventListener("click", ()=>{
    divide();
});

//Mini Project 2

let input3 = document.getElementById("input3"); 
let button1 = document.getElementById("button1");

button1.addEventListener("click", ()=>{
    try{
        if(input3.value.length < 6){
            throw new Error("Password must contain at least 6 characters");
            
        }
        console.log("Password Accepted");
        
    }catch(error){
        console.log(error.message);
        
    }
})



/*

Assignment 1
Hello

Assignment 2
Caught

Assignment 3
Wrong

Assignment 4
*/
let number = -1;
try{
    if(number < 0){
        throw new Error("Negative Number");
    }
    console.log("Positive Number");
    
}catch(error){
    console.log(error.message);
    
}
//Assignment 5

try{
    console.log("hello");
    
}catch(error){
    console.log(error);
    
}finally{
    console.log("Finished");
    
}

/*
Q1
finally
Q2
throw
Q3
error


*/