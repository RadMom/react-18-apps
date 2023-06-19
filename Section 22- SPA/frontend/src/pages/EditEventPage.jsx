import React from "react";
import { useRouteLoaderData } from "react-router-dom";

//components
import EventForm from "../components/EventForm";

const EditEventPage = () => {
    const event = useRouteLoaderData("event-details");
   
    return <EventForm method="PATCH" event={event} />;
};

export default EditEventPage;
