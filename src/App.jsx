import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import BoxoniaStoryPage from "./pages/BoxoniaStoryPage.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/boxonia-story",
        element: <BoxoniaStoryPage />
    }
])

const App = () => {
    return (
        <RouterProvider router={routes}></RouterProvider>
    )
}

export default App;
