import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    }
])

const App = () => {
    return (
        <RouterProvider router={routes}></RouterProvider>
    )
}

export default App;