import { useState } from "react";

function Password(){
    const [isShow, setIsShow] = useState(false);
    const [quantity, setQuantity] = useState(1);
    return(
        <>
            <p>Password</p>
            <input type={isShow ? "text" : "password"}></input>
            <button onClick={()=> setIsShow(!isShow)}>{isShow ? "Hide" : "Show"}</button>
            <p>laptop</p>
            <button onClick={()=> {
                if(quantity > 0){
                    setQuantity( quantity - 1);
                }
            }}>-</button>
            {quantity}
            <button onClick={()=> setQuantity(quantity + 1)}>+</button>

        </>
    );
}

export default Password