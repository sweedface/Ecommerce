import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
// import Page from '../pages/Home/Organismo_Page/Page';
import Layout from '../layout/Layout'
import Admin from '../pages/Admin/Admin'
// import Navbar from "../pages/Home/ComponentesNavbar/Molecula/Navbar";
// import Header from "../pages/Home/ComponentesHeader/Moleculas/Header";


export const router = createBrowserRouter([
    // primera interaccion
    // {
    //     path:"/",
    //     element: <Home/>
    // },
    // {
    //     path: "Admin",
    //     element: <Admin/>
    // },
    // segunda interaccion
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                 path:"/Home",
                 element: <Home />,
            },
            {
                path: "Admin",
                element: <Admin />
            },
      ],
    },
]);

export default router
