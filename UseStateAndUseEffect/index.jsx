import { useEffect, useState } from "react";
import React  from 'react';

const Counter = () => {
    const [count,setCount]=useState(0)
    const plus=()=>{setCount((prev)=>prev+1)}
    const minus=()=>{setCount(prev=>prev-1)}
    useEffect(()=>{
        return ()=>{
            console.log('component unmount');
        }
    },[count])
    return (
        <div>
            <button onClick={plus}>+</button>
            {count}
            <button onClick={minus}>-</button>

        </div>
    );
};

export default Counter;