import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

//layouts
import RootLayout from "./layouts/RootLayout";
import EventsLayout from "./layouts/EventsLayout";
//pages
import HomePage from "./pages/HomePage";
import EventsPage, { eventsLoader } from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage, { eventLoader } from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/ErrorPage";

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
            />
            <Route
                path=":eventId"
                id="event-details" //We use it in useRouteLoaderData("event-details") where we need it
                loader={eventLoader}
            >
                <Route
                    index
                    element={<EventDetailPage />}
                />
                <Route
                    path="edit"
                    element={<EditEventPage />}
                />
            </Route>
        </Route>
    </Route>
);

const router = createBrowserRouter(routesDefinition);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
