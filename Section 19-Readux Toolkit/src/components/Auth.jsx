import classes from "./Auth.module.css";

import { authActions } from "../store/auth";
//useSelector if we need some value
//useDispatch if we have some action which will change the state
import { useDispatch } from "react-redux";

const Auth = () => {
    const dispatch = useDispatch();

    const loginHandler = (event) => {
        event.preventDefault();
        dispatch(authActions.login());
    };
    return (
        <main className={classes.auth}>
            <section>
                <form onSubmit={loginHandler}>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                        />
                    </div>
                    <button>Login</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;
