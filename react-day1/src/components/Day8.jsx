import { useEffect, useState } from "react";

function Quote(){

    let [quoteData, setQuoteData] = useState({});
    let [loading, setLoading] = useState(true);

    async function getQuote(){
        try{
            setLoading(true);
            const response = await fetch("https://dummyjson.com/quotes/random");
            const data = await response.json();
            setQuoteData(data);
        } catch(error){
            console.log(error);
            
        }finally{
            setLoading(false);
        }     
    }

    useEffect(() => {
        
        getQuote();
    },[]);

    if(loading){
        return <h2>Loading...</h2>
    }
    
    
    return(
        <>
            <button onClick={getQuote}>New Quote</button>
            
                   
                        <div key={quoteData.id}>
                            <p>{quoteData.quote}</p>
                            <p>{quoteData.author}</p>
                        </div>
            
        </>
    );
}
function Users(){

    let [users, setUsers] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(()=> {
        async function getUsers(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
                
            }catch(error){
                console.log(error);
                
            }finally{
                setLoading(false);
            }
        }
        getUsers();
    },[]);

    if(loading){
        return <h2>Loading...</h2>
    }

    return(
        <>
            {
                users.map(user =>
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.address.city}</p>
                    </div>
                )
            }
        </>
    );
}

function Products(){

    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function getProducts(){
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            }catch(error){
                console.log(error);
                
            }finally{
                setLoading(false);
            }
        }
        getProducts();
    },[])

    if(loading){
        return <h2>Loading...</h2>
    }

    return(
        <>
            {
                products.map(pro => 
                    <div key={pro.id}>
                        <img src={pro.image} alt="image" style={{width: "250px", height: "250px"}}></img>
                        <p>{pro.title}</p>
                        <p>{pro.price}</p>
                    </div>
                )
            }
        </>
    );
}

function SearchUsers(){

    let [users, setUsers] = useState([]);
    let [loading, setLoading] = useState(true);
    let [searchData, setSearchData] = useState("");

    useEffect(()=>{
        async function searchUsers(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
            }catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }
        }
        searchUsers();
    },[]);

    if(loading){
        return <h2>Loading...</h2>
    }

    const filteredData = users.filter(user => user.name.toLowerCase().includes(searchData.toLowerCase()));

    if(filteredData.length === 0){
        return <h2>No users found</h2>
    }
    return(
        <>
            <input type="text" placeholder="Enter Name..." value={searchData} onChange={(e)=>setSearchData(e.target.value)}></input>
            {
               filteredData.map(user=>(
                <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.address.city}</p>
                </div>
                
               ))
            }
        </>
    );
}

function ProductDetails(){

    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(()=>{
        async function productDetails(){
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
                
            }catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }
        }
        productDetails();
    },[]);


    if(loading){
        return <h2>Loading...</h2>
    }

    function handleShow(id){
        if(selectedId === id){
            setSelectedId(null);
        }else{
            setSelectedId(id);
        }
    }
    return(
        <>
            {
                products.map(pro =>
                    <div key={pro.id} style={{backgroundColor: "beige", border: "1px solid black", width: "15rem", padding: "1rem", marginBottom: "10px", borderRadius: "15px"}}>
                        <p>{pro.title}</p>
                        <p>{pro.price}</p>
                        {
                            pro.id === selectedId && (
                                <div>
                                    <p>{pro.description}</p>
                                    <p>{pro.category}</p>
                                    <p>{pro.rating.rate}</p>
                                </div>
                            )
                        }
                        <button onClick={()=>handleShow(pro.id)}> {selectedId === pro.id ? "Hide Details" : "Show Details"}</button>
                    </div>
                )
            }
        </>
    );
}

function Practice1() {

    useEffect(() => {
        console.log("Component Mounted");
    }, []);

    return <h2>Hello React</h2>;
}

function Practice3() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Changed");
    }, [count]);

    return (
        <>
            <h2>{count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </>
    );
}

function Day8(){
    return(
        <>
            <Quote />
            <Users />
            <Products />
            
            <SearchUsers />
            <ProductDetails />
            <Practice1 />
            <Practice3 />
        </>
    );
}

export default Day8

/*
Q1
useEffect

Q2
useEffect(() => {}, [])

Q3
loading


*/