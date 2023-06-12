import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputIsInvalid,
        valueChangeHandler: nameInputChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: resetNameInput,
    } = useInput((enteredName) => enteredName.trim().length > 0);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputIsInvalid,
        valueChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmailInput,
    } = useInput((enteredEmail) => enteredEmail.includes("@"));

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        resetNameInput();
        resetEmailInput();
        nameInputBlurHandler;
        emailInputBlurHandler;
    };

    const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";
    const emailInputClasses = emailInputIsInvalid ? "form-control invalid" : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && <p className="error-text">Enter name !!!</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailInputIsInvalid && <p className="error-text">Enter valid email !!!</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
