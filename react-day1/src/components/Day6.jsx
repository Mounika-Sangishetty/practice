import { useState } from "react";

function Login(){

    let [isLogin, setIsLogin] = useState(false);

    
    return(
        <>
            <h4>{isLogin ? "Welcome Mounika" : "Please Login"}</h4>
            <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Logout" : "Login"}</button>
            
        </>
    );
}

function Theme(){
    let [theme, setTheme] = useState(false);
    return(
        <div style={{
                backgroundColor: theme ? "black" : "white", 
                color: theme ? "white" : "black",
            }}>
            <h2>Welcome</h2>
            <button onClick={()=> setTheme(!theme)}>{theme ? "Light Mode" : "Dark Mode"}</button>
          
        </div>
    );
}

let products = ["Laptop", "Mouse", "Keyboard"];

function ShoppingCart(){
    const [selectedProducts, setSelectedProducts] = useState([]);   

    function handleChange(pro){
        if(selectedProducts.includes(pro)){
            setSelectedProducts(selectedProducts.filter(item => item !== pro))
        }else{
            setSelectedProducts([
                ...selectedProducts,
                pro
            ])
        }
    }
    return(
        <>
        {
            products.map((pro,index) => (
                <>
                    <label key={index}>
                         <input type="checkbox" checked={selectedProducts.includes(pro)} onChange={()=>handleChange(pro)}></input>
                         {pro}
                    </label>
               
                </>
                
            ))
        }
        <h4>Selected products</h4>
        {
            selectedProducts.map((pro,index)=> (
                <p key={index}>{pro}</p>
            ))
        }
            
        </>
    );
}



function Profile(){

    let user = {
        name: "Mounika",
        age: 29
    };
    let [isShow, setIsShow] = useState(true);
    return(
        <>
            
            <button onClick={() => setIsShow(!isShow)}>{isShow ? "Hide Details" : "Show Details"}</button>
            {isShow ? 
            <>
                <p>{user.name}</p>
                <p>{user.age}</p>
            </>
            :
                <p></p>
            }
            
        </>
    );

}

function Notification(){
    let [count, setCount] = useState(0)
    return(
        <>
            <p>🔔 Notifications ({count})</p>
            <button onClick={()=> (
                setCount(count +1)
            )}>Add Notification</button>
            <p>{count > 0 ? "You have new notifications!" : ""}</p>
        </>
    );
}

function Status(){
    let [status, setStatus] = useState(true);
    return(
        <>
            <p>{status ? "Online" : "Offline"}</p>
            <button onClick={()=> setStatus(!status)}>Toggle</button>
        </>
    );
}

function Discount(){

    const discount = true;

    return(
        <>
            <h2>IPhone</h2>

            {discount && <p>40% OFF</p>}
        </>
    );
}

function ShowPara(){
    let [show, setShow] = useState(true);
    return(
        <>
            {show ?
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, adipisci. Nostrum est dicta commodi repudiandae ea deleniti architecto iusto, corporis enim? Dicta recusandae deleniti, impedit itaque inventore perspiciatis? Officia, illum!</p>
            :
                <p></p>
            }
            <button onClick={()=> setShow(!show)} >{show ? "Hide" : "Show"}</button>
        </>
    );
}

function Pass(){
    let user = {
        name: "Rohan",
        marks: 70
    };
    return(
        <>
            <p>{user.marks >= 80 ? "Pass" : "Fail"}</p>
        </>
    );
}

function Array(){
    let array = [10,20,30,40,50];
    return(
        <>
            {
                array.length != 0 ? array.map((array,index)=>( <p key={index}>{array}</p>)) : <p>No Data Found</p>
            }
        </>
    );
}
function Day6(){
    return(
        <>
            <Login />
            <Theme />
            <ShoppingCart />
            <Profile />
            <Notification />
            <Status />
            <Discount />
            <ShowPara />
            <Pass />
            <Array />
        </>
    );
}

export default Day6

/*
Q1
? :

Q2
==

Q3
useState



*/