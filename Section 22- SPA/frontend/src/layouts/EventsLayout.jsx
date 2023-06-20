import React from "react";
import { Outlet } from "react-router-dom";

//components
import EventsNavigation from "../components/navigations/EventsNavigation";

const EventsLayout = () => {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
};

export default EventsLayout;
