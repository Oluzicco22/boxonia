import {Link} from "react-router-dom";

const InSectionLink = ({name, path}) => {
    return (
        <Link to={path} className="text-center border-2 border-white text-white px-14 py-2 rounded-md">{name}</Link>
    )
}

export default InSectionLink
