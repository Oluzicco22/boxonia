import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/production/LandingPage.jsx";
import BoxoniaStoryPage from "./pages/production/BoxoniaStoryPage.jsx";
import AboutBoxoniaPage from "./pages/production/AboutBoxoniaPage.jsx";
import ProjectPage from "./pages/production/ProjectPage.jsx";
import NewsPage from "./pages/production/NewsPage.jsx";
import ContactPage from "./pages/production/ContactPage.jsx";
import ProjectViewPage from "./pages/production/ProjectViewPage.jsx";
import HomePage from "./pages/production/HomePage.jsx";
import ParentPage from "./pages/ParentPage.jsx";
import TalentPage from "./pages/talents/TalentPage.jsx";
import TalentViewPage from "./pages/talents/TalentViewPage.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "production",
        element: <ParentPage />,
        children: [
            {
                path: "",
                element: <LandingPage />,
            },
            {
                path: "boxonia-story",
                element: <BoxoniaStoryPage />,
            },
            {
                path: "about",
                element: <AboutBoxoniaPage />,
            },
            {
                path: "projects",
                element: <ProjectPage />,
            },
            {
                path: "projects/:id",
                element: <ProjectViewPage />,
            },
            {
                path: "news",
                element: <NewsPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
        ],
    },
    {
        path: "talents",
        element: <ParentPage />,
        children: [
            {
                path: "",
                element: <TalentPage />,
            },
            {
                path: ":castName",
                element: <TalentViewPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
        ]
    },
]);

const App = () => {
    return <RouterProvider router={routes} />;
};

export default App;
