import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {  //We use React.forwadRef to have accsess ref prop
    const inputRef = useRef();

    const activate = () => {            //We choose the name activate
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            focus: activate,            //We choose the name focus and use it in Login.jsx
        };
    });

    return (
        <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ""}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;
