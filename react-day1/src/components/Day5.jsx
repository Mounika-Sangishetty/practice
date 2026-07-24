import { useState } from "react";

function greet(name){
    alert(`Hello ${name}`)
}

function course(name){
        alert(`Course: ${name}`);
    }

function City(){
    let [city, setCity] = useState("");
    return(
        <>
            City: <input value={city} onChange={(e)=> setCity(e.target.value)}></input>
            <h2>{city}</h2>
        </>
    );
}

function Product(){
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    return(
        <>
            <input value={name} onChange={(e)=> setName(e.target.value)}></input>
            <input value={price} onChange={(e)=> setPrice(e.target.value)}></input>
            <p>{name}</p>
            <p>{price}</p>
        </>
    );
}

function Validation(){
    let [age, setAge] = useState();
    function submit(e){
        e.preventDefault();
        if(age >= 18){
            alert("Welcome");
        }else{
            alert("Not Eligible");
        }
    }
    return(
        <>
            <form onSubmit={submit}>
                <input value={age} onChange={(e)=> setAge(e.target.value)}></input>
                <button>Submit</button>
            </form>
        </>
    );
}

function Login(){
    let [name, setName] = useState("");
    let [age, setAge] = useState("");

    function submit(e){
        e.preventDefault();
        alert(`Name: ${name}\nAge: ${age}`);
    }
    return(
        <>
            <form onSubmit={submit}>
                <input value={name} onChange={(e)=> setName(e.target.value)}></input>
                <input value={age} onChange={(e)=> setAge(e.target.value)}></input>
                <button>Submit</button>
            </form>
        </>
    );
}

function LoginForm(){

    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    function submit(e){
        e.preventDefault();
        if(userName === "" || password === ""){
            alert("Please fill all fields");
        }else{
            alert("Login Successful")
        }

    }

    return(
        <>
            <form onSubmit={submit}>
                    <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}></input>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button>Login</button>
            </form>
        </>
    );
}

function Feedback(){
    let [name, setName] = useState("");
    let [feedback, setFeedback] = useState("");

    function submit(e){
        e.preventDefault();
        alert(`Thank you ${name}! \n Feedback:\n ${feedback}`)
    }

    return(
        <>
            <form onSubmit={submit}>
                <input value={name} onChange={(e)=> setName(e.target.value)}></input>
                <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
                <button>Submit</button>
            </form>
        </>
    );
}

 const products=[

    "Laptop",

    "Mouse",

    "Keyboard",

    "Printer",

    "Monitor"

    ];


function ProductSearch(){
    let [searchValue, setSearchValue] = useState("");

    const filteredProducts = products.filter((pro) => 
        pro.toLowerCase().includes(searchValue.toLowerCase())
    );
   
    return(
        <>
            Enter: <input placeholder="Search Here..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
            
            {
                filteredProducts.map((pro, index)=>(
                    <p key={index}>{pro}</p>
                ))
            }
            
        </>
    );
}

function Registration(){
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    function submit(e){
        e.preventDefault();
        if(name.trim() === ""){
            alert("Name required");
        }else if(email.trim() === ""){
            alert("Email required");
        }else if(password.trim().length <6){
            alert("Password minimum 6 characters");
        }else{
            alert("Registration Successful");
        }
    }

    return(
        <>
            <form onSubmit={submit}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <button>Submit</button>
            </form>
        </>
    );
}

function ToDoForm(){

    let [task, setTask] = useState("");
    let [list, setList] = useState([]);

    function submit(e){
        e.preventDefault();
        if(task.trim() === ""){
            return;
        }
        setList([
            ...list,
            task
        ]) 
        setTask("");
        
    }

    return(
        <>
            <form onSubmit={submit}>
                <input type="text" value={task} onChange={(e)=> setTask(e.target.value)}></input>
                <button>Add</button>
                
            </form>
            {
                    list.map((item, index)=> (
                        <p key={index}>{item}</p>
                    ))
            }
        </>
    );
}

function Message(){
    function show(text){
        alert(text);
    }
    return(
        <>
            <button onClick={()=> show("React is Awesome!")}>Show Message</button>
        </>
    );
}

function Input(){
    let [text, setText] = useState("");
    return(
        <>
            <input value={text} onChange={(e)=> setText(e.target.value)}></input>
            <p>{text}</p>
        </>
    );
}

function Email(){

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    return(
        <>
            <input value={email} type="email" onChange={(e)=> setEmail(e.target.value)}></input>
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
            <p>{email}</p>
            <p>{password}</p>
        </>
    );

}

function SubmitForm(){
    function submit(e){
        e.preventDefault();
        alert("Submitted")
    }
    return(
        <>
            <form onSubmit={submit}>
                <button>Submit</button>
            </form>
        </>
    );

}

function PasswordFunction(){
    let [password, setPassword] = useState("");
    function submit(e){
        e.preventDefault();
        if(password.trim().length < 8){
            alert("Password must be 8 characters")
        }else{
            alert("Welcome")
        }
    }
    return(
        <>
            <form onSubmit={submit}>
                <input value={password} type="password" onChange={(e)=> setPassword(e.target.value)}></input>
                <button>Login</button>
            </form>
        </>
    );
}

function Day5(){
    return(
        <>
            <button onClick={()=> greet("Mounika")}>Click</button>
            <button onClick={()=> course("HTML")}>Click me</button>
            <button onClick={()=> course("CSS")}>Click me</button>
            <button onClick={()=> course("React")}>Click me</button>
            <section>
                <City />
                <Product />
                <Login />
                <Validation />
                <LoginForm />
                <Feedback />
                <ProductSearch />
                <Registration />
                <ToDoForm />
                <Message />
                <Input />
                <Email />
                <SubmitForm />
                <PasswordFunction />
            </section>
            
        </>
    );
}

export default Day5

/*
Q1
onChange

Q2
preventDefault()

Q3
onClick={save}


*/