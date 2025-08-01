import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/boxonia-logo.svg";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [showOptions, setShowOptions] = useState(null);
    const [activePath, setActivePath] = useState(null);

    const navLinks = [
        {
            name: "Home",
            path: '/production'
        },
        {
            name: "About Us",
            children: [
                {
                    name: "Boxonia Story",
                    path: '/production/boxonia-story',
                },
                {
                    name: "What We Do",
                    path: '/production/about',
                }
            ]
        },
        {
            name: "Projects",
            path: '/production/projects'
        },
        {
            name: "News",
            path: '/production/news'
        },
        {
            name: "Contact Us",
            path: '/production/contact'
        }
    ];

    const toggleDropdown = (name) => {
        setShowOptions(prev => prev === name ? null : name);
    };

    const isActive = (path) => location.pathname === path;

    useState(() => {
        const path = window.location.pathname.includes('production') ? 'talents' : 'production';
        setActivePath(path);
    }, [])

    return (
        <header className="w-full bg-black/40 bg-blend-darken relative">
            <div className="flex py-5 px-3 md:px-0 w-full md:w-[85%] mx-auto justify-between items-center">
                <Link to="/">
                    <img src={Logo} alt="logo" className="w-20 md:w-auto" />
                </Link>

                <nav className="hidden md:block min-w-[50%] gap-4 text-white relative">
                    <ul className={`flex ${activePath !== "production" ? "justify-between" : "justify-end"}`}>
                        {navLinks.filter(lnk => {
                            return activePath !== "production" ? lnk : lnk.name === 'Contact Us'
                        }).map((link, idx) => (
                            <li key={idx} className="relative">
                                    {link.children ? (
                                        <button
                                            onClick={() => toggleDropdown(link.name)}
                                            className={`cursor-pointer flex items-center gap-2 hover:text-yellow-400 ${link.children.some(child => isActive(child.path)) ? 'text-yellow-400' : ''}`}
                                        >
                                            {link.name} <FaCaretDown />
                                        </button>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className={`hover:text-yellow-400 ${isActive(link.path) ? 'text-yellow-400' : ''}`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}

                                    {/* Dropdown */}
                                    {link.children && showOptions === link.name && (
                                        <ul className="absolute top-full mt-2 bg-black text-white pt-2 pb-16 px-5 -left-1/4 shadow-lg rounded-md space-y-2 z-50">
                                            {link.children.map((child, i) => (
                                                <li key={i}>
                                                    <Link
                                                        to={child.path}
                                                        className={`hover:text-yellow-400 text-nowrap ${isActive(child.path) ? 'text-yellow-400' : ''}`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>))}
                    </ul>
                </nav>

                <Link to={`/${activePath}`} className="hidden md:inline-block py-2 px-12 text-white border-2 rounded-md border-white hover:bg-white hover:text-black capitalize">{activePath}</Link>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <MenuIcon />
                </button>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="absolute md:hidden w-full z-20 bg-white shadow-md pt-4 pb-6 top-0 px-5 space-y-4 rounded-md transition-all duration-300 ease-in-out">
                        <div className="flex justify-end">
                            <button className="text-black text-2xl" onClick={() => setIsOpen(!isOpen)}><FaX /></button>
                        </div>
                        <nav>
                            <ul className="flex flex-col gap-3 text-base font-medium text-gray-700">
                                {navLinks.filter(lnk => {
                                    return activePath !== "production" ? lnk : lnk.name === 'Contact Us'
                                }).map((link, idx) => (
                                    <li key={idx}>
                                        {link.children ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleDropdown(link.name)}
                                                    className={`flex justify-between w-full items-center hover:text-yellow-400 ${link.children.some(child => isActive(child.path)) ? 'text-yellow-400' : ''}`}
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
                                                                    className={`hover:text-yellow-400 ${isActive(child.path) ? 'text-yellow-400' : ''}`}
                                                                >
                                                                    {child.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                className={`hover:text-yellow-400 ${isActive(link.path) ? 'text-yellow-400' : ''}`}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <Link to={`/${activePath}`} className="block md:hidden py-2 px-12 w-fit text-black border-2 border-black hover:bg-black capitalize hover:text-white text-center mt-4">{activePath}</Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
