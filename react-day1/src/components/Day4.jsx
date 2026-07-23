import "./style.css";

let colors = ["Red","Blue","Green","Black"];
let products = [{
            name:"Laptop",
            price:60000,
            status: true
            },

            {
            name:"Mouse",
            price:1000,
            status: false
            },

            {
            name:"Keyboard",
            price:1500,
            status: true
            },

            {
            name:"Printer",
            price:5000,
            status: false
            }

];

function Index(){

    return(
        <>
            <div>
                {
                    colors.map((col, index)=>(
                        <p key={index}>{col}</p>
                    ))
                }
            </div>
            
            {
                products.map((pro, index)=> (
                    <div key={index}>
                        <p>{pro.name} ₹{pro.price}</p>
                    </div>
                ))
            }
        </>
    );
}

let students = [
    {
        name: "Mounika",
        course: "React",
        marks: 80
    },
    {
        name: "Ram",
        course: "Angular",
        marks: 85
    },
    {
        name: "Anil",
        course: "Java",
        marks: 90
    },
    {
        name: "Sunil",
        course: ".net",
        marks: 78
    }
]

function Studentcard({name, course}){
    return(
        <>
            <p>{name}</p>
            <p>{course}</p>
        </>
    );
}

function Products({name, status}){
    return(
        <>
            <p>{name}</p>
            <p>{status ? "Available" : "Out of Stock"}</p>
        </>
    );
}

function StudentMarks({name}){
    return(
        <>
            <p>{name}</p>
        </>
    );

}

let employees = [
    {
        name: "Mounika",
        salary: 50000
    },
    {
        name: "Ram",
        salary: 45000
    },
    {
        name: "Anil",
        salary: 55000
    },
    {
        name: "Suneel",
        salary: 63000
    },
    {
        name: "Raj",
        salary: 60000
    }
]

function Employee({name, salary}){
    return(
        <>
            <p>{name}</p>
            <p>{salary}</p>
        </>
    );
}

let array = ["Apple", "Mango", "Orange"];

function ShoppingList({name}){
    return(
        <>
            <p>{name} <button>Delete</button></p>
            
        </>
    );
}

let courseData = [
    {
        name: "React",
        status: true
    },
    {
        name: "HTML",
        status: false
    },
    {
        name: "Javascript",
        status: true
    },
]

function CourseStatus({name, status}){
    return(
        <>
            <p>{name}</p>
            <p>{status ? "Completed" : "Pending"}</p>
        </>
    );
}

let movieData = [
    {
        name: "KGF",
        rating: 9.2
    },
    {
        name: "Bahubali",
        rating: 9.5
    },
    {
        name: "Salaar",
        rating: 8.8
    }
]

function MovieCard({name, rating}){
    return(
        <div className="movie">
            <p>{name}</p>
            <p>{rating} ⭐</p>
        </div>
    );
}

function ProductsData({name, price, status}){
    return(
        <>
            <p>{name} ₹{price}</p>
            <p>{status ? "In Stock" : "Out Of Stock"}</p>
        </>
    );
}

let array1 = ["HTML","CSS","React"];

let studentsData = [
    {
        name: "Ram"
    },
    {
        name: "Hari"
    },
    {
        name: "Sam"
    }
]

function StudentName({name}){
    return(
        <p>{name}</p>
    );
}

let numArray = [10,25,30,40,55,60,68,72]

function Available({name, status}){
    return(
        <>
            <p>{name} is {status ? "Available" : "Unavailable"}</p>
        </>
    );
}

function Day4(){

    return (
        <>
            <Index />
            {
                students.map((stu, index) => (
                    <Studentcard
                    key={index}
                    name={stu.name}
                    course={stu.course}
                    />
                ))
            }
            {
                products.map((pro, index) => (
                    <Products
                    key={index}
                    name={pro.name}
                    status={pro.status}
                     />
                ))
            }
            {
                students.filter(stu => stu.marks > 80).map((stu,index) => <StudentMarks key={index} name={stu.name} />)
            }
            {
                employees.map((emp,index) => (
                    <Employee key={index} name={emp.name} salary={emp.salary} />
                ))
            }
            {
                array.map((fruit, index) => (
                    <ShoppingList key={index} name={fruit} />
                ))
            }
            {
                courseData.map((cou, index) => (
                    <CourseStatus key={index} name={cou.name} status={cou.status} />
                ))
            }
            {
                movieData.map((movie, index) => (
                    <MovieCard key={index} name={movie.name} rating={movie.rating} />
                ))
            }
            {
                products.map((pro,index)=> (
                    <ProductsData key={index} name={pro.name} price={pro.price} status={pro.status} />
                ))
            }
            {
                array1.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            }
            {
                studentsData.map((item, index)=>(
                    <StudentName key={index} name={item.name} />
                ))
            }
            {
                numArray.filter(num => num > 50).map((num,index) =>( <p key={index}>{num}</p>))
            }
            {
                products.map((pro,index)=>(
                    <Available key={index} name={pro.name} status={pro.status} />
                ))
            }
        </>
    );
}



export default Day4

/*
Q1
map()
Q2
Unique identity for list items
Q3
<Product />


*/