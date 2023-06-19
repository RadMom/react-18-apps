import React from "react";
import { useLoaderData, json } from "react-router-dom";

//componenst
import EventsList from "../components/EventsList";

const EventsPage = () => {
    const events = useLoaderData();

    return <EventsList events={events} />;
};

export default EventsPage;

//loader function
//We can NOT use react hooks in loader function because they are NOT React components
export async function eventsLoader() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        throw json({ message: "Could not fetch events." }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
    }
}
