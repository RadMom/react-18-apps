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
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";


const routesDefinition = createRoutesFromElements(
    <Route
        path="/"
        element={<RootLayout />}
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
                element={<EventDetailPage />}
            />
            <Route
                path=":eventId/edit"
                element={<EditEventPage />}
            />
        </Route>
    </Route>
);

const router = createBrowserRouter(routesDefinition);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
