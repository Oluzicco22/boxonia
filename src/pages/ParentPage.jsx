import {Outlet} from "react-router-dom";

const ParentPage = () => {
    return (
        <main className="text-white">
            <Outlet />
        </main>
    )
}

export default ParentPage;
