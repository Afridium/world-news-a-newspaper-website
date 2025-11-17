import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsCard from "../components/NewsCard/NewsCard";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import PrivateRoute from "../AuthProvider/PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        Component: HomeLayout,
        children: [
            {
              index:true,
              Component: Home
            },
            {
                path:"/catnews/:id",
                loader: () => fetch('/news.json'),
                Component: CategoryNews,
                hydrateFallbackElement: <p>Loading.....</p>
            }
        ]
    },
    {
        path:"/auth",
        Component: AuthLayout,
        children: [
            {
                path:'/auth/login',
                Component: LoginPage
            },
            {
                path:'/auth/register',
                Component: Register
            }
        ]
    },
    {
        path:"/newsdetail/:id",
        loader: () => fetch('/news.json'),
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        hydrateFallbackElement: <p>Loading.....</p>
    },
    {
        path:"/*",
        element: <h1>404 ERROR</h1>
    }
])

export default router;