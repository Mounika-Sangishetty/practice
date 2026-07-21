class Car {
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }
    show(){
        console.log(this.brand);
        console.log(this.price);  
    }
};
let c1 = new Car("ford", 900000);

c1.show();

class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    bonus(){
        let bonus = (this.salary)*10/100;
        console.log(`Salary : ${this.salary}`);
        console.log(`Bonus : ${bonus}`); 
    }
}
let e1 = new Employee("Ram", 50000);
e1.bonus();

class Rectangle {
    constructor(length1, width){
        this.length1 = length1;
        this.width = width;
    }
    area(){
        let area = this.length1 * this.width;
        console.log(`Area = ${area}`);
    }
}

let r1 = new Rectangle(10,20);
r1.area();

//Mini Project 1

class BankAccount{
    constructor(accountName, balance){
        this.accountName = accountName;
        this.balance = balance;
    }
    deposite(amount){
        this.balance = this.balance + amount;
    }
    withdraw(amount){
        this.balance = this.balance - amount;
    }
    showBalance(){
        console.log(`Balance = ${this.balance}`); 
    }
}

let b1 = new BankAccount("Ram",1000);
b1.deposite(500);
b1.withdraw(200);
b1.showBalance();

//Mini Project 2

class ShoppingCart {
    constructor(){
        this.items = [];
        this.total = 0;
    }
    addItem(name, price){
        this.items.push({
            name: name,
            price: price
        });
        this.total += price;
    }
    showItems(){
        for (let item of this.items){
            console.log(`${item.name} - ${item.price}`);
        }
    }
    showTotal(){
        console.log(`Total : ${this.total}`); 
    }
    removeItem(name){
        let index = (this.items).findIndex((item)=>{
            return name === item.name;
        });
        if (index !== -1) {
           let removedItem = this.items[index];
            this.total -= removedItem.price;
            this.items.splice(index,1);
            
        }  
    }
}
let s1 = new ShoppingCart();
s1.addItem("Laptop", 60000);
s1.addItem("Mouse", 1000);
s1.addItem("Keyboard", 1000);
s1.showItems();
s1.showTotal();
s1.removeItem("Mouse");
s1.showItems();
s1.showTotal();


//Practice 4

class Person{
    constructor(name){
        this.name = name;
    }
}

class Teacher extends Person{
    constructor(name, subject){
        super(name);
        this.subject = subject;
    }
    teach(){
        console.log("Teaching...");
        
    }
}

let t1 = new Teacher("Mounika","javascript");
console.log(t1.name);
console.log(t1.subject);

t1.teach();

//Assignment 1

class Mobile {
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }
    details(){
        console.log(this.brand);
        console.log(this.price);
        
        
    }
}
let m1 = new Mobile("Samsung", 25000);
m1.details();

/*
Assignment 2
Hello

Assignment 3
Hi

Assignment 4
Animal

Assignment 5
it calls the parent and returns the value

Q1
new

Q2
Current object

Q3
extends
*/
