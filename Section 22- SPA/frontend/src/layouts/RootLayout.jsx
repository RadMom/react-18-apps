import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navigations/MainNavigation";

const RootLayout = () => {
    // const navigation = useNavigation();
    return (
        <>
            <MainNavigation />
            {/* {navigation.state === "loading" && <p>Loading...</p>} */}
            <main>{<Outlet />}</main>
        </>
    );
};

export default RootLayout;
