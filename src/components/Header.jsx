import {Link} from "react-router-dom";
import Logo from "../assets/boxonia-logo.svg";


const navLinks = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About Us",
        path: '/about'
    },
    {
        name: "Projects",
        path: '/projects'
    },
    {
        name: "News",
        path: '/news'
    },
    {
        name: "Contact Us",
        path: '/contact'
    }
]

const Header = () => {
    return (
        <header className="flex py-5 w-[93%] mx-auto justify-between items-center">
            <Link to="/">
                <img src={Logo} alt="logo" className="w-12 md:w-auto" />
            </Link>

            <nav className="block w-2/6 text-white">
                <ul className="flex justify-between">
                    {navLinks.map((link, idx) => (
                        <li key={idx}>
                            <Link to={link.path} className="hover:text-yellow-400">{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <Link to="/#" className="py-2 px-12 text-white border-2 border-white hover:bg-white hover:text-black">Talents</Link>
        </header>
    )
}

export default Header