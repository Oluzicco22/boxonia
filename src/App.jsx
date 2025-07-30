import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import BoxoniaStoryPage from "./pages/BoxoniaStoryPage.jsx";
import AboutBoxoniaPage from "./pages/AboutBoxoniaPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import NewPage from "./pages/NewPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProjectViewPage from "./pages/ProjectViewPage.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/boxonia-story",
        element: <BoxoniaStoryPage />
    },
    {
        path: "/about",
        element: <AboutBoxoniaPage />
    },
    {
        path: "/projects",
        element: <ProjectPage />
    },
    {
        path: "/projects/:id",
        element: <ProjectViewPage />
    },
    {
        path: "/news",
        element: <NewPage />
    },
    {
        path: "/contact",
        element: <ContactPage />
    }
])

const App = () => {
    return (
        <RouterProvider router={routes}></RouterProvider>
    )
}

export default App;
