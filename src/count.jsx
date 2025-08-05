import React,{useState} from "react";
import "./count.css"


function Count(){
    const [count,setCount] = useState(0);
    const Increment = ()=> setCount(count+1);
    const Decrement = ()=>{
        if (count === 0){
            return count;
        }
        else{
            setCount(count-1);
        }
    }
    const Reset = ()=> setCount(0);
    return(
        <div className="count">
            <h2>Count: {count}</h2>
            <button id="button" onClick={Increment}>Incriment</button>
            <button id="button" onClick={Decrement}>Decrement</button>
            <button id="button" onClick={Reset}>Reset</button>
        </div>

    );
}
export default Count;