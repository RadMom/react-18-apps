import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim().length > 0;
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

    const enteredEmailIsValid = enteredEmail.includes("@");
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const nameInputBlur = (event) => {
        setEnteredNameIsTouched(true);
    };

    const emailInputBlur = (event) => {
        setEnteredEmailIsTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredName("");
        setEnteredEmail("");
        setEnteredNameIsTouched(false);
        setEnteredEmailIsTouched(false);
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
                    onBlur={nameInputBlur}
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
                    onBlur={emailInputBlur}
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
