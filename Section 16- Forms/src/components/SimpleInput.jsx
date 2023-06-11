import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim().length > 0;
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

    let formIsValid = false;

    if (enteredNameIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const nameInputBlur = (event) => {
        setEnteredNameIsTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredName("");
        setEnteredNameIsTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";

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
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
