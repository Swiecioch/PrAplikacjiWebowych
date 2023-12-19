import About from "../pages/About"
import Homepage from "../pages/homepage"


interface RouteItem{
    path: string
    name: string
    element: React.JSX.Element
}

export const routes: Array<RouteItem> = [
    {
        path: "/",
        name: "Homepage",
        element: <Homepage/>,
    },
    {
        path: "/about",
        name: "About",
        element: <About/>,
    },
];