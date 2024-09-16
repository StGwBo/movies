import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error_page/error_page";
import { MainPage } from "../pages/main_page/main_page";
import { DetailsPage } from "../pages/details_page/details_page";
import { loaderGetDetails } from "../api/index";
import { UserPage } from "../pages/user_page/user_page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/details/:id",
                element: <DetailsPage />,
                loader: loaderGetDetails,
            },
            {
                path: "/user",
                element: <UserPage />,
            },
        ],
    },
]);
