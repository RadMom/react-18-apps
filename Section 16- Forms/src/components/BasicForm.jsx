import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    const {
        value: enteredFisrtName,
        isValid: firstNameIsValid,
        hasError: firstNameIsInvalid,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput((enteredFirstName) => enteredFirstName.trim() !== "");

    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        hasError: lastNameIsInvalid,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLasttName,
    } = useInput((enteredLastName) => enteredLastName.trim() !== "");

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailIsInvalid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput((enteredEmail) => enteredEmail.includes("@"));

    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }
        console.log(enteredFisrtName, enteredLastName, enteredEmail);

        resetFirstName();
        firstNameBlurHandler;
        resetLasttName();
        lastNameBlurHandler;
        resetEmail();
        emailBlurHandler;
    };

    const firstNameInputClasses = firstNameIsInvalid ? "form-control invalid" : "form-control";
    const lastNameInputClasses = lastNameIsInvalid ? "form-control invalid" : "form-control";
    const emailInputClasses = emailIsInvalid ? "form-control invalid" : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="control-group">
                <div className={firstNameInputClasses}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        value={enteredFisrtName}
                    />
                    {firstNameIsInvalid && <p className="error-text">Enter valid Fist Name</p>}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                        value={enteredLastName}
                    />
                    {lastNameIsInvalid && <p className="error-text">Enter valid Last Name</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">E-Mail Address</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailIsInvalid && <p className="error-text">Enter valid Email</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
