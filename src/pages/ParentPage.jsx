import {Outlet} from "react-router-dom";

const ParentPage = () => {
    return (
        <main className="text-white min-w-sm">
            <Outlet />
        </main>
    )
}

export default ParentPage;
