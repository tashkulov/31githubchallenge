import React,{useEffect, useState} from 'react';

const Effect = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("component mount");
        return ()=>{
            console.log('component unmount');
        }
    },[])

    console.log('component render')

    return (
        <div>
            <div>
            COMPONENT 
            </div>
            <div>
                <span>{count}</span>
                <button 
                onClick={()=>setCount(prev=>++prev)}>+</button>
            </div>
        </div>
    );
};

export default Effect;