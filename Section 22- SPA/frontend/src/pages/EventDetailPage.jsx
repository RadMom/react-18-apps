import React from "react";
import { json, useRouteLoaderData,redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
    const eventDetails = useRouteLoaderData("event-details");

    return <EventItem event={eventDetails} />;
};

export default EventDetailPage;

//loader function

export async function eventLoader({ request, params }) {
    const id = params.eventId;

    const response = await fetch("http://localhost:8080/events/" + id);

    if (!response.ok) {
        throw json(
            {
                message: "Could not fetch event data.",
            },
            { status: 500 }
        );
    } else {
        const eventData = await response.json();
        return eventData.event;
    }
}

export async function deleteEventAction({ params, request }) {
    const eventId = params.eventId;
    const response = await fetch("http://localhost:8080/events/" + eventId, {
        method: request.method,
    });

    if (!response.ok) {
        throw json(
            { message: "Could not delete event." },
            {
                status: 500,
            }
        );
    }
    return redirect("/events");
}
