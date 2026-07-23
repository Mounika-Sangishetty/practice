function Student(){
    return (
        <h2>Mounika</h2>
    );
}

function Course(){
    return(
        <p>React Developer</p>
    );
}

function Header(){
    return (
        <h1>My Website</h1>
    );
}

function Main(){
    return(
        <p>Welcome to React</p>
    );
}

function Footer(){
    return (
        <p>Copyright 2026</p>
    );
}

function Book(props){
    return (
        <>
            <p>{props.title}</p>
            <p>{props.author}</p>
        </>
    );
}

function Car ({brand, price}){
    return(
        <>
            <p>{brand}</p>
            <p>{price}</p>
        </>
    );
}

function Movie({title, rating}){
    return(
        <>
            <p>{title}</p>
            <p>{rating}</p>
        </>
    );
}

function Fruit({name,price,status}){
    return(
        <>
            <p>{name}</p>
            <p>{price}</p>
            <p>{status}</p>
        </>
    );
}

function MainCourse({name, completed}){
    return(
        <>
            <p>{name}</p>
            <p>{completed ? "Completed" : "Pending"}</p>
        </>
    );
}



function Box({children}){
    return(
            <h2>{children}</h2>
    );
}

function StudentData({name, age, course}){
    return(
        <>
            <p>{name}</p>
            <p>{age}</p>
            <p>{course}</p>
        </>
    );
}

function ShoppingData({name, price, status}){
    return(
        <>
            <p>{name}</p>
            <p>{price}</p>
            <p>{status}</p>
        </>
    );
}

function Button({children}){
    return (
        <button>{children}</button>
    );
}

function Bike({name,price}){
    return(
        <>
            <p>{name}</p>
            <p>{price}</p>
        </>
        
    );
}

function CourseStatus({name, status}){
    return (
        <>
            <p>{name}</p>
            <p>{status ? "Completed" : "pending"}</p>
        </>
    );
}

function Practice() {
    return(
        <>
            <Student />
            <Course />
            <Course />
            <Header />
            <Main />
            <Footer />
            <Book title ="Atomic Habits" author="James Clear" />
            <Car brand= "BMW" price={900000} />
            <Movie title="KGF" rating={9.2} />
            <Fruit name="Apple" price="₹120" status="In Stock" />
            <Fruit name="Orange" price="₹80" status="Out of Stock" />
            <MainCourse name="React" completed={false} />
            <Box>Inside Box</Box>
            <StudentData name="Mounika" age={24} course="React" />
            <StudentData name="Ram" age={26} course="Next.js" />
            <StudentData name="Hari" age={22} course="JavaScript" />
            <ShoppingData name="Laptop" price="₹60000" status="Available" />
            <ShoppingData name="Mouse" price="₹1000" status="Not Available" />
            <ShoppingData name="Keyboard" price="₹1500" status="Available" />
            <Button>Save</Button>
            <Button>Delete</Button>
            <Button>Update</Button>
            <Bike name="Honda" price={800000} />
            <CourseStatus name="Javascript" status={true} />
        </>
    );

}



export default Practice

/*
Tiny Quiz
Hello
Hello

Assignment 3
Ram

Assignment 4
{name}

Assignment 5
{children}

Q1
Pass data

Q2
<Student name="Ram"/>

Q3
children

*/