import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? classes.active : undefined)}
                            end
                            // style={({ isActive }) => ({
                            //     color: isActive ? "red" : "blue",
                            // })}
                        >
                            Home Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) => (isActive ? classes.active : undefined)}
                            // end
                        >
                            Products Page
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
