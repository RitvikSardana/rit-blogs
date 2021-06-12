import { useState } from "react";

const Home = () => {
    
    let name = "mario";
    let [userName,setUserName] = useState(name);
    let[count,setCount] = useState(0);
    const clickHandler = (name,e) =>{
        console.log("Hello", name,e.target)
        setUserName(name);
        count++;
        setCount(count);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{userName}</p>
            <button onClick = {(e)=>clickHandler("ritvik",e)}>Click me</button> {count}
        </div>
     );
}
export default Home;