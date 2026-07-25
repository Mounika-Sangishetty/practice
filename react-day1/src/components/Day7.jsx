import { useState } from "react";

function Counter({name}){
    let [count, setCount] = useState(0);

    return(
        <>
            <h1>{name}</h1>
            <p>{count}</p>
            <button onClick={()=> setCount(prev => prev + 1)}>+</button>
        </>
    );
}


function Parent(){
    let array = [
    "Ram",
    "Hari",
    "Sam"
];

let [newStudent, setNewStudent] = useState("");
let [newArray, setNewArray] = useState(array);

function handleAdd(){
       if (newStudent.trim() === "") return;

    setNewArray([
        ...newArray,
        newStudent
    ]);

    setNewStudent("");
        
}
return(
    <>
        <h1>Student List</h1>
        <input type="text" placeholder="Enter Name..." value={newStudent} onChange={(e)=>setNewStudent(e.target.value)}></input>
        <button onClick={handleAdd}>Add Student</button>
        {
            newArray.map((item,index) => (
                <Student key={index} name={item} />
            ))
        }
        
        
    </>
);
}

function Student({name}){
    return(
        <>
            <p>{name}</p>
        </>
    );
}

function Like(){
    let [count, setCount] = useState(0);
    return(
        <>
            <p>❤️ Likes</p>
            <p>{count}</p>
            <LikeButton increase={setCount} />
        </>
    );
}

function LikeButton({increase}){
    return(
        <>
            <button onClick={()=> increase(prev => prev + 1)}>+</button>
        </>
    );
}

function Cart(){
    let products = ["laptop", "mouse", "keyboard"];
    let [cart, setCart] = useState([]);

    function handleAdd(pro){
        setCart([
            ...cart,
            pro
        ]);
    }
    return(
        <>   {
                products.map((pro,index) => (
                    
                        <p key={index}>{pro} <button onClick={()=>handleAdd(pro)} >ADD</button></p>
                        
                    
                    
                ))
            }
            <CartData data={cart} />
        </>
    );
}

function CartData({data}){
    return(
        <>
           <h2>Cart</h2>
           
           
           {
           data.map((pro, index)=>(
            <p key={index}>{pro}</p>
           ))
           }
        </>
    );
}

function Button(){
    return(
        <>
            <SaveButton name = "Save" />
        </>
    );
}

function SaveButton({name}){
    return(
        <>
            <button>{name}</button>
        </>
    );
}

function NameFun(){
    return(
        <>
            <Greeting name="Ram" />
        </>
    );
}

function Greeting({name}){
    return <h2>Hello {name}</h2>;
}

function Course(){
    return(
        <>
            <Card title="React" />
        </>
    );
}

function Card({title}){
    return(
        <div style={{border: "1px solid black", borderRadius: "20px", padding: "16px", width: "5rem", marginTop: "10px", backgroundColor: "beige"}}>
            <p>{title}</p>
        </div>
    );
}

function City(){
    return(
        <>
            <CityName name = "Hyderabad" />
        </>
    );
}

function CityName({name}){
    return <p>City: {name}</p>
}

function ToDoApp(){
    let [task, setTask] = useState("");
    let [list, setList] = useState([]);
    function handleAdd(){
        if(task.trim() === "") return;
        setList([
            ...list,
            task
        ])
        setTask("")
    }
    return(
        <>
            <input type="text" placeholder="Enter Task..." value={task} onChange={(e)=> setTask(e.target.value)}></input>
            <button onClick={handleAdd}>Add</button>
            <DisplayTodo data={list} decrease={setList} />
        </>
    );
}

function DisplayTodo({data, decrease}){ 
    return(
        <>
            {
                data.map((item, index)=>(
                    <p key={index}>{item}<button onClick={() =>decrease(data.filter(task => task !== item))}>Delete</button></p>
                ))
            }
        </>
    );
}

function Day7(){
    return(
        <>
            <Counter name="Counter A" />
            <Counter name="Counter B" />
            <Parent />
            <Like />
            <Cart />
            <Button />
            <NameFun />
            <Course />
            <City />
            <ToDoApp />
        </>
    );
}

export default Day7

/*

Assignment 4

already created above Counter

Q1

Moving state to the parent component

Q2

Props

Q3

Child


*/