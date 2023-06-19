import { useNavigate, Form, useActionData, json, redirect } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
    const navigate = useNavigate();
    const data = useActionData();
    function cancelHandler() {
        navigate("..");
    }

    return (
        <Form
            method={method}
            className={classes.form}
        >
            <p>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    required
                    defaultValue={event && event.title}
                />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    type="url"
                    name="image"
                    required
                    defaultValue={event && event.image}
                />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    required
                    defaultValue={event && event.date}
                />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    required
                    defaultValue={event && event.description}
                />
            </p>
            <div className={classes.actions}>
                <button
                    type="button"
                    onClick={cancelHandler}
                >
                    Cancel
                </button>
                <button>Save</button>
            </div>
        </Form>
    );
}

export default EventForm;

//action

export async function manipulateEventAction({ request, params }) {
    const method = request.method;
    console.log(method);
    const data = await request.formData();
    let url = "http://localhost:8080/events";

    const eventData = {
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description"),
    };

    if (method === "PATCH") {
        const eventId = params.eventId;
        url = "http://localhost:8080/events/" + eventId;
    }

    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
    });

    if (!response.ok) {
        throw json(
            {
                message: "Could not save event",
            },
            {
                status: 500,
            }
        );
    }

    return redirect("/events");
}
