import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

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
                Component: CategoryNews
            }
        ]
    },
    {
        path:"/auth",
        element: <h1>Authentication LAyout</h1>
    },
    {
        path:"/news",
        element: <h1>News Layout</h1>
    },
    {
        path:"/*",
        element: <h1>404 ERROR</h1>
    }
])

export default router;