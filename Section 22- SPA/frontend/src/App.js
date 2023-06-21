import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

//layouts
import RootLayout from "./layouts/RootLayout";
import EventsLayout from "./layouts/EventsLayout";
//pages + loaders & actions
import HomePage from "./pages/HomePage";
import EventsPage, { eventsLoader } from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage, { deleteEventAction, eventLoader } from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/ErrorPage";
import { manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { newsletterAction } from "./pages/NewsletterPage";

const routesDefinition = createRoutesFromElements(
    <Route
        path="/"
        element={<RootLayout />}
        errorElement={<ErrorPage />}
    >
        <Route
            index
            element={<HomePage />}
        />
        <Route
            path="events"
            element={<EventsLayout />}
        >
            <Route
                index
                element={<EventsPage />}
                loader={eventsLoader}
            />
            <Route
                path="new"
                element={<NewEventPage />}
                action={manipulateEventAction}
            />
            <Route
                path=":eventId"
                id="event-details" //We use it in useRouteLoaderData("event-details") where we need it
                loader={eventLoader}
            >
                <Route
                    index
                    element={<EventDetailPage />}
                    action={deleteEventAction}
                />
                <Route
                    path="edit"
                    element={<EditEventPage />}
                    action={manipulateEventAction}
                />
            </Route>
        </Route>
        <Route
            path="newsletter"
            element={<NewsletterPage />}
            action={newsletterAction}
        />
    </Route>
);

const router = createBrowserRouter(routesDefinition);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
