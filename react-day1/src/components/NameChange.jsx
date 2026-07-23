import { useState } from "react";

function NameChange(){
    const [name, setName] = useState("Mounika");
    const [city, setCity] = useState("Hyderabad");
    const [mode, setMode] = useState(false);
    const [input, setInput] = useState("");
    const [product, setProduct] = useState(
        {
            name: "laptop",
            price: 50000
        }
    );
    const [course, setCourse] = useState([
        "HTML",
        "CSS"
    ])
    return (
        <>
            <h1>{name}</h1>
            <button onClick={()=> setName("Ram")}>Change Name</button>
            <p>{mode ? "Dark Mode" : "Light Mode"}</p>
            <button onClick={()=> setMode(!mode)}>Toggle</button>
            <div>
                <p>You Typed: {input}</p>
                <input value={input} onChange={(e)=> setInput(e.target.value)}></input>
            </div>
            <p>Product: {product.name} Price: {product.price}</p>
            <button onClick={()=> setProduct({
                ...product,
                price: 60000

            })}>Increase Price</button>
            <p>{course}</p>
            <button onClick={()=> setCourse([
                ...course,
                "Javascript"
            ])}>Add Course</button>

        </>
    );
}

export default NameChange