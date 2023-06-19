import React from "react";
import {Link} from "react-router-dom";

const DUMMY_EVENTS = [
    { id: "e1", title: "Dummy event one" },
    { id: "e2", title: "Dummy event two" },
];

const EventsPage = () => {
    return (
        <>
            <h1>Events Page</h1>
            <ul>
                {DUMMY_EVENTS.map((event) => (
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default EventsPage;
