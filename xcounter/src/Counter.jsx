import React,{useState} from "react";

const Counter=()=>{
    const[count,setCount]=useState(0);

    const handleClick=(type)=>{
        if(type==="increment"){
            setCount(count+1);
        }else if(type==="decrement"){
         setCount(count-1);
        }
    }
    return(
        <div>
            <h1>Counter App</h1>
         <div className="label-container">
            <label>Count: {count}</label>
            </div>
            <div className="button-container">
          <button onClick={()=>handleClick("increment")}>Increment</button>
          <button onClick={()=>handleClick("decrement")}>Decrement</button>
          </div>
        </div>
    )

}
export default Counter;