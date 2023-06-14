import { Fragment } from "react";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
//useSelector if we only need some value from our state
import { useSelector } from "react-redux";

function App() {
    //state.auth.isAuthenticated
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log(isAuthenticated);
    return (
        <Fragment>
            <Header />
            {!isAuthenticated && <Auth />}
            {isAuthenticated && <UserProfile />}
            <Counter />
        </Fragment>
    );
}

export default App;
