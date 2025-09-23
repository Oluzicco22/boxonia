import {Outlet} from "react-router-dom";

const ParentPage = () => {
    return (
        <main id="main-content" role="main" className="text-white min-w-sm">
            <Outlet />
        </main>
    )
}

export default ParentPage;
