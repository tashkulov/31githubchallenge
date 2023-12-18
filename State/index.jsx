import React,{useState} from 'react';

const StateComp = () => {
    const [count,setCount]=useState(0)
    const decrement=()=>{
        setCount(count -1)

    }
    const increment=()=>{
        setCount((prev)=>{
            if(prev<1010){
                return prev+1
            }else{
                return prev
            }
        })
    }
    const mult=()=>{
        setCount(count*2)
    }
    const delenie=()=>{setCount((prev)=>prev/2)}

    return (
        <div>
            <button onClick={decrement}>-</button>
            <button onClick={mult}>*</button>
            {count}
            <button onClick={increment}>+</button>
            <button onClick={delenie}>/</button>

        </div>
    );
};
export default StateComp
