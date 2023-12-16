import React, { useEffect, useRef } from 'react';

const Reference = () => {
    const ref=useRef()
    const onClick=()=>{
        ref.current.focus()
    }
    

    // console.log('render');
    return (
        <div>
            <input ref={ref}/>
            <button onClick={onClick}>Click</button>
        </div>
    );
};

export default Reference;