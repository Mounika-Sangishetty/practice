import { useState } from "react";

function Count(){
    const [count, setCount] = useState(0);
    const [likeCount, setLikeCount] = useState(0);
    return(
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => {
                    if(count > 0){
                        setCount(count - 1);
                    }
                }
            }>Decrease</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <h1>❤️{likeCount}</h1>
            <button onClick={()=>setLikeCount(likeCount + 1)}>Like</button>
        </>
    );
}

export default Count