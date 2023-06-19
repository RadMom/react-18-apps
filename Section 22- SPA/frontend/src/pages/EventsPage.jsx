import React from "react";
import { useLoaderData } from "react-router-dom";

//componenst
import EventsList from "../components/EventsList";

const EventsPage = () => {
    const events = useLoaderData();

    return <EventsList events={events} />;
};

export default EventsPage;

//loader function
export async function eventsLoader() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        //...
    } else {
        const resData = await response.json();
        console.log(resData);
        return resData.events;
    }
}
