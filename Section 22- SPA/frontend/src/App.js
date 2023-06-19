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
import EventsPage from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

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
