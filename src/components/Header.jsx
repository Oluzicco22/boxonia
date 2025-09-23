import {useLocation, useParams} from "react-router-dom";
import Logo from "../assets/boxonia-logo.svg";
import BackIcon from "../../src/assets/arrow-icon.svg";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [showOptions, setShowOptions] = useState(null);
    const [activePath, setActivePath] = useState(null);
    const { castName } = useParams()

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

    const isActive = (path) => pathname === path

    useState(() => {
        const path = pathname.includes('production') ? 'talents' : 'production';
        setActivePath(path);
    }, []);

    return (
        <header role="banner" className="w-full bg-black/80 bg-blend-darken top-0 fixed border-b z-[1000]">
            <div className="flex py-5 px-3 md:px-0 w-full md:w-[85%] mx-auto justify-between items-center">
                { pathname === `/talents/${encodeURIComponent(castName)}` ?
                    <button type="button" onClick={() => history.back()} className="flex gap-4 font-semibold cursor-pointer hover:opacity-40">
                        <img src={BackIcon} alt="logo" className="rotate-180" />
                        Back
                    </button> :
                    <a href="/">
                        <img src={Logo} alt="logo" className="w-20 md:w-auto" />
                    </a>
                }

                <nav className="hidden md:block min-w-[50%] gap-4 text-white relative">
                    <ul className={`flex ${activePath !== "production" ? "justify-between" : "gap-10 justify-end"}`}>
                        {navLinks.filter(lnk => {
                            return activePath !== "production" ? lnk : ['Contact Us', 'News'].includes(lnk.name)
                        }).map((link, idx) => (
                            <li key={idx} className="relative">
                                    {link.children ? (
                                        <button
                                            onClick={() => toggleDropdown(link.name)}
                                            className={`cursor-pointer flex items-center gap-2 hover:text-[#f6b62b] ${link.children.some(child => isActive(child.path)) ? 'text-[#f6b62b]' : ''}`}
                                        >
                                            {link.name} <FaCaretDown />
                                        </button>
                                    ) : (
                                        <a
                                            href={link.path}
                                            className={`hover:text-[#f6b62b] ${isActive(link.path) ? 'text-[#f6b62b]' : ''}`}
                                        >
                                            {link.name}
                                        </a>
                                    )}

                                    {/* Dropdown */}
                                    {link.children && showOptions === link.name && (
                                        <ul className="absolute top-full mt-2 bg-black text-white py-2 px-5 -left-1/4 shadow-lg rounded-md space-y-2 z-50">
                                            {link.children.map((child, i) => (
                                                <li key={i}>
                                                    <a
                                                        href={child.path}
                                                        className={`hover:text-[#f6b62b] text-nowrap ${isActive(child.path) ? 'text-[#f6b62b]' : ''}`}
                                                    >
                                                        {child.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>))}
                    </ul>
                </nav>

                <a href={`/${activePath}`} className="hidden md:inline-block py-2 px-12 bg-[#f6b62b] text-black rounded-lg hover:bg-white hover:text-black capitalize">{activePath}</a>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <MenuIcon />
                </button>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="absolute md:hidden w-full z-50 bg-white shadow-md pt-4 pb-6 top-0 px-5 space-y-4 rounded-md transition-all duration-300 ease-in-out">
                        <div className="flex justify-end">
                            <button className="text-black text-2xl" onClick={() => setIsOpen(!isOpen)}><FaX /></button>
                        </div>
                        <nav>
                            <ul className="flex flex-col gap-3 text-base font-medium text-gray-700">
                                {navLinks.filter(lnk => {
                                    return activePath !== "production" ? lnk : ['Contact Us', 'News'].includes(lnk.name)
                                }).map((link, idx) => (
                                    <li key={idx}>
                                        {link.children ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleDropdown(link.name)}
                                                    className={`flex justify-between w-full items-center hover:text-[#f6b62b] ${link.children.some(child => isActive(child.path)) ? 'text-yellow-400' : ''}`}
                                                >
                                                    {link.name}
                                                    <FaCaretDown />
                                                </button>
                                                {showOptions === link.name && (
                                                    <ul className="pl-4 mt-1 space-y-2">
                                                        {link.children.map((child, i) => (
                                                            <li key={i}>
                                                                <a
                                                                    href={child.path}
                                                                    className={`hover:text-[#f6b62b] ${isActive(child.path) ? 'text-[#f6b62b]' : ''}`}
                                                                >
                                                                    {child.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ) : (
                                            <a
                                                href={link.path}
                                                className={`hover:text-[#f6b62b] ${isActive(link.path) ? 'text-[#f6b62b]' : ''}`}
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <a href={`/${activePath}`} className="block md:hidden py-2 px-12 w-fit text-black bg-[#f6b62b] rounded-lg hover:bg-black capitalize hover:text-white text-center mt-4">{activePath}</a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
