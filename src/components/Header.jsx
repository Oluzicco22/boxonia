import {Link} from "react-router-dom";
import Logo from "../assets/boxonia-logo.svg";
import {MenuIcon} from "lucide-react";
import {useState} from "react";
import {FaX} from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
    const navLinks = [
        {
            name: "Home",
            path: '/'
        },
        {
            name: "About Us",
            children: [
                {
                    name: "Boxonia Story",
                    path: '/boxonia-story',
                },
                {
                    name: "What We Do",
                    path: '/about',
                }
            ]
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

    const [isOpen, setIsOpen] = useState(false)
    const [showOptions, setShowOptions] = useState(null)

    const toggleDropdown = (name) => {
        setShowOptions(prev => prev === name ? null : name);
    };

    return (
        <header className="w-full bg-black/20 bg-blend-darken relative">
            <div className="flex py-5 px-3 md:px-0 w-full md:w-[93%] mx-auto justify-between items-center">
                <Link to="/">
                    <img src={Logo} alt="logo" className="w-20 md:w-auto" />
                </Link>

                <nav className="hidden md:block w-2/6 text-white relative">
                    <ul className="flex justify-between">
                        {navLinks.map((link, idx) => (
                            <li key={idx} className="relative hover:text-yellow-400">
                                {link.children ? (
                                    <button
                                        onClick={() => toggleDropdown(link.name)}
                                        className=" cursor-pointer flex items-center gap-2"
                                    >
                                        {link.name} <FaCaretDown />
                                    </button>
                                ) : (
                                    <Link to={link.path}>
                                        {link.name}
                                    </Link>
                                )}

                                {/* Dropdown */}
                                {link.children && showOptions === link.name && (
                                    <ul className="absolute top-full mt-2 bg-black text-white p-2 shadow-lg rounded-md space-y-2 z-50">
                                        {link.children.map((child, i) => (
                                            <li key={i}>
                                                <Link
                                                    to={child.path}
                                                    className="hover:text-yellow-400 text-nowrap"
                                                >
                                                    {child.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <Link to="/#" className="hidden md:inline-block py-2 px-12 text-white border-2 border-white hover:bg-white hover:text-black">Talents</Link>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <MenuIcon />
                </button>

                {isOpen &&
                    <div className={`absolute md:hidden w-full bg-white shadow-md pt-4 pb-6 top-0 px-5 space-y-4 rounded-md transition-all duration-300 ease-in-out ${
                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                    }`}>
                        <div className="flex justify-end">
                            <button className="text-black text-2xl" onClick={() => setIsOpen(!isOpen)}><FaX /></button>
                        </div>
                        <nav>
                            <ul className="flex flex-col gap-3 text-base font-medium text-gray-700">
                                {navLinks.map((link, idx) => (
                                    <li key={idx}>
                                        {link.children ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleDropdown(link.name)}
                                                    className="flex justify-between w-full items-center hover:text-indigo-600"
                                                >
                                                    {link.name}
                                                    <FaCaretDown />
                                                </button>
                                                {showOptions === link.name && (
                                                    <ul className="pl-4 mt-1 space-y-2">
                                                        {link.children.map((child, i) => (
                                                            <li key={i}>
                                                                <Link
                                                                    to={child.path}
                                                                    className="hover:text-indigo-600"
                                                                >
                                                                    {child.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ) : (
                                            <Link to={link.path} className="hover:text-indigo-600">
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <Link to="/#" className="hidden md:inline-block py-2 px-12 text-white border-2 border-white hover:bg-white hover:text-black">Talents</Link>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header
