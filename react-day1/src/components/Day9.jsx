import { useState } from "react";

function ToDo(){
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    function handleAdd(){
        if(task.trim()=== "") return;
        if (isEdit) {
            const updated = [...taskList];
            updated[editIndex] = task;
            setTaskList(updated);

            setTask("");
            setIsEdit(false);
            setEditIndex(null);
        }
        else {
            setTaskList([
                ...taskList,
                task
            ]);
            setTask("");
        }
    }

    function handleDelete(index){
        const filteredTaskList = taskList.filter((item, i)=> i!==index);
        setTaskList(filteredTaskList);
    }

    function handleEdit(index){
            setTask(taskList[index]);
            setEditIndex(index);
            setIsEdit(true);

    }

    return(
        <>  
            <h1>Task</h1>
            <input type="text" value={task} placeholder="Enter Task Here..." onChange={(e)=>setTask(e.target.value)} />
            <button onClick={handleAdd}>{isEdit ? "Update" : "Add"}</button>
            <button onClick={() => setTask("")} style={{marginLeft: "10px"}}>Clear</button>
       
            {
                taskList.map((item, index) => (
                    <div key={index} style={{
                                                display: "flex",
                                                gap: "10px",
                                                alignItems: "center",
                                                marginTop: "10px"
                                            }}>
                        <p>{item}</p>
                        <button onClick={()=>handleEdit(index)}>Edit</button>
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                    </div>
                ))
            }
            
        </>
    );
}


function EmployeeManager(){

    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [employeeData, setEmployeeData] = useState([]);

    function clear(){
            setName("");
            setSalary("");
            setIsEdit(false)
            setEditIndex(null);
    }

    function handleAdd(){
        if(name.trim() === "" || salary.trim() === "") return;
        if(isEdit){
            const updated = [...employeeData];
            updated[editIndex] = {
                name: name,
                salary: salary
            }
            setEmployeeData(updated);
            clear();
            
        }else{
            setEmployeeData([
                ...employeeData,
                {
                    name: name,
                    salary: salary
                }
            ]);
            clear();
        }
        
    }

    function handleDelete(index){
        const filteredData = employeeData.filter((item, i)=> i!==index);
        setEmployeeData(filteredData);
    }

    function handleEdit(index){
        setName(employeeData[index].name);
        setSalary(employeeData[index].salary);
        setIsEdit(true);
        setEditIndex(index)
    }

    return(
        <>
            <input type="text" placeholder="Enter Employee Name..." value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="number" placeholder="Enter Salary..." value={salary} onChange={(e)=>setSalary(e.target.value)}/>
            <button onClick={handleAdd}>{isEdit ? "Update Employee" : "Add Employee"}</button>
            {isEdit && <button onClick={clear}>Cancel</button>}

            {
                employeeData.map((emp, index) => (
                    <div key={index}>
                        <p>{emp.name}</p>
                        <p>{emp.salary}</p>
                        <div>
                            <button onClick={()=>handleDelete(index)}>Delete</button>
                            <button onClick={()=>handleEdit(index)} style={{marginLeft: "10px"}}>Edit</button>
                        </div>
                    </div>
                ))
            }
        </>
        
    );
}

function ShoppingCart(){

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productData, setProductData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
  

    const total = productData.reduce((sum,pro) => (sum+pro.price),0);

    function clear(){
        setProductName("");
        setProductPrice("");
        setIsEdit(false);
        setEditIndex(null);
    }

    function handleAdd(){
        if(productName.trim() === "" || productPrice.trim() === "") return;
        if(isEdit){
            const updated = [...productData];
            updated[editIndex] = {
                name: productName,
                price: productPrice
            };
           setProductData(updated);
           clear();

        }else{
            setProductData([
                ...productData,
                {
                    name: productName,
                    price: Number(productPrice)
                }
            ]);
            clear();
        }
    }

    function handleDelete(index){
        const filtered = productData.filter((item, i) => i!==index);
        setProductData(filtered);
    }

    function handleEdit(index){
        setIsEdit(true);
        setProductName(productData[index].name);
        setProductPrice(productData[index].price);
        setEditIndex(index);
    }

    return(
        <>
            <input type="text" placeholder="Enter Product..." value={productName} onChange={(e)=> setProductName(e.target.value)} />
            <input type="number" placeholder="Enter Price..." value={productPrice} onChange={(e)=> setProductPrice(e.target.value)} />
            <button onClick={handleAdd}>{isEdit ? "Update Product" : "Add Product"}</button>
            {
                productData.map((pro, index) => (
                    <div key={index}>
                        <p>{pro.name} ₹{pro.price}</p>
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                        <button onClick={()=>handleEdit(index)} style={{marginLeft: "10px"}}>Edit</button>
                    </div>
                ))
            }
            <h4>Total : ₹{total.toFixed(2)}</h4>
        </>
    );
}

function NotesApp(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [data, setData] = useState([]);

    function clear(){
        setTitle("");
        setDescription("");
        setIsEdit(false);
        setEditIndex(null);
    }

    function handleAdd(){
        if(title.trim() === "" || description.trim() === "") return;
        if(isEdit){
            const updated = [...data];
            updated[editIndex] = {
                title: title,
                description: description
            };
            setData(updated);
            clear();
        }else{
            setData([
                ...data,
                {
                    title: title,
                    description: description
                }
            ]);
            clear();
        }

    }

    function handleEdit(index){
        setTitle(data[index].title);
        setDescription(data[index].description);
        setIsEdit(true);
        setEditIndex(index);
    }

    function handleDelete(index){
        const filtered = data.filter((item, i)=> i!==index);
        setData(filtered);
    }

    return(
        <>
            <input type="text" placeholder="Enter title..." value={title} onChange={(e)=> setTitle(e.target.value)} />
            <input type="text" placeholder="Enter Description..." value={description} onChange={(e)=> setDescription(e.target.value)} />
            <button onClick={handleAdd}>{isEdit ? "Update Note" : "Add Note"}</button>
            {
                data.map((note, index) => (
                    <div key={index}>
                        <p>{note.title}</p>
                        <p>{note.description}</p>
                        <button onClick={()=>handleEdit(index)}>Edit</button>
                        <button onClick={()=>handleDelete(index)} style={{marginLeft: "10px"}}>Delete</button>
                    </div>
                    
                ))
            }
        </>
    );
}

function Even(){

    let data = [10,15,20,25,30,35,40,45,50,55,60];

    const filtered = data.filter(num => num%2 === 0);
   
    return(
        <>
            {
                filtered.map((num,index)=>(
                    <div key={index}>
                        <p>{num}</p>
                    </div>
                ))
            }
        </>
    );
}

function Product(){
   const [data, setData] = useState([{
            name: "Laptop",
            price: 50000
        },
        {
            name: "Keyboard",
            price: 1500
        }]);
   


    function handleDelete(index){
        const filtered = data.filter((item, i)=>i!==index);
        setData(filtered);
    }

    return(
        <>
            {
                data.map((pro, index) =>(
                    <div key={index}>
                        <p>{pro.name}</p>
                        <p>₹{pro.price}</p>
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                    </div>
                ))
            }
            
        </>
    );
}

function Day9(){
    return(
        <>
            <ToDo />
            <section>
                <EmployeeManager />
            </section>
            <section>
                <ShoppingCart />
            </section>
            <section>
                <NotesApp />
            </section>
            <Even />
            <Product />
        </>
    );
}

export default Day9