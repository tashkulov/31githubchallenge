import React, { useRef } from 'react';

const TextInput = () => {
    const inputRef = useRef();

    const InputChange = () => {
        labelRef.current.textContent = inputRef.current.value;
    };
    const FnCleat = () => {
        labelRef.current.value = '';
        inputRef.current.value=''
        labelRef.current.textContent = '';
    };
    const labelRef = useRef();


    return (
        <div>
            <input
                type="text"
                ref={inputRef}  
                onChange={InputChange}
            />

            <button onClick={FnCleat}>Очистить</button>

            <label ref={labelRef}></label>
        </div>
    );
};

export default TextInput;