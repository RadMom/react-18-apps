import React from "react";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

//layouts
import RootLayout from "./layouts/RootLayout";

//pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";

const routeDefinitions = createRoutesFromElements(
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
            path="/products"
            element={<ProductsPage />}
        />
        <Route
            path="/products/:productId"
            element={<ProductDetails />}
        />
    </Route>
);

const router = createBrowserRouter(routeDefinitions);

// const router = createBrowserRouter([
//     { path: "/", element: <HomePage /> },
//     { path: "/products", element: <ProductsPage /> },
// ]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
