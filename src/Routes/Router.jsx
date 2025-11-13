import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path:"/",
        Component: HomeLayout
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