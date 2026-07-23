import { useState } from "react";

function Theme(){
    const [theme, setTheme] = useState(false);
    const [number, setNumber] = useState(100);
    const [city,setCity] = useState("Hyderabad");
    const [array, setArray] = useState([
        "React"
    ]);
    const [employee, setEmployee] = useState({
        name: "Mounika",
        salary: 50000
    })

    return(
        <>
            <p>Theme: {theme ? "Dark" : "Light"}</p>
            <button onClick={()=> setTheme(!theme)}>Click</button>
            <p>{number}</p>
            <button onClick={()=>setNumber(110)}>Click</button>
            <p>{city}</p>
            <button onClick={()=>setCity("Delhi")}>Click</button>
            <p>{array}</p>
            <button onClick={()=> setArray([
                ...array,
                "Angular"
            ])}>Click</button>
            <p>Name: {employee.name} Salary: {employee.salary}</p>
            <button onClick={()=> setEmployee({
                ...employee,
                salary: 55000
            })}>Click</button>
        </>
    );
}

export default Theme


/*
Assignment 2
true
Q1
useState
Q2
setCount(5)
Q3
...

*/