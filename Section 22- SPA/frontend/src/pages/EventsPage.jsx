import React, { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

//componenst
import EventsList from "../components/EventsList";

const EventsPage = () => {
    const { events } = useLoaderData(); //destructuring from  events: eventsLoader(), line 35

    return (
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
            <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
        </Suspense>
    );
};

export default EventsPage;

//preLoader function
//We can NOT use react hooks in loader function because they are NOT React components
async function preLoader() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        throw json({ message: "Could not fetch events." }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

//loader function . It is waiting preLoader promise to be resolved
//We use defer to show some of our content while waiting the other part of it to be loaded
export function eventsLoader() {
    return defer({
        events: preLoader(),
    });
}
