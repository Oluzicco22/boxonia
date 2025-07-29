import {Link} from "react-router-dom";

const InSectionLink = ({name, path}) => {
    return (
        <Link to={path} className="text-center border-2 font-medium hover:bg-white hover:text-black border-white text-white px-14 py-2 rounded-md">{name}</Link>
    )
}

export default InSectionLink
