import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/boxonia-logo.svg";
import BackIcon from "../../src/assets/arrow-icon.svg";
import {MenuIcon} from "lucide-react";
import {useState} from "react";
import { useEffect } from "react";
import {FaX} from "react-icons/fa6";
import {FaCaretDown} from "react-icons/fa";

const Header = ( ) => {
    const {pathname} = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [showOptions, setShowOptions] = useState(null);
    const [activePath, setActivePath] = useState(null);
    const navigate = useNavigate();

    const showBackButton = pathname.startsWith("/talents/spotlight")
                                    || pathname.startsWith("/talents/contact")
                                    || pathname.startsWith("/talents/")

    const navLinks = pathname.startsWith("/talents")
        ? [
            {
                name: "Spotlight",
                path: "/talents/spotlight",
            },
            {
                name: "Contact Us",
                path: "/talents/contact",
            },
            ]
        : [
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
            name: "Spotlight",
            path: '/news'
        },
        {
            name: "Contact Us",
            path: '/contact'
        }
    ];

    const toggleDropdown = (name) => {
        setShowOptions(prev => prev === name ? null : name);
    };

    const isActive = (path) => {
        if (path === "/production") {
            return location.pathname === "/production";
        }
        if (path === "/talents") {
            return location.pathname === "/talents";
        }
        return location.pathname === path || location.pathname.startsWith(path + "/");
    };

    useEffect(() => {
        if (pathname.startsWith("/talents")) {
            setActivePath("production");
        } else {
            setActivePath("talents");
        }
    }, [pathname]);

    return (
        <header role="banner" className="w-full bg-black/80 bg-blend-darken top-0 left-0 fixed border-b z-999">
            <div className="flex py-5 px-3 md:px-0 w-full md:w-[85%] mx-auto justify-between items-center">
                {/*{(pathname.includes("/talents/spotlight") || pathname.includes("/talents/contact")) ? (*/}
                {showBackButton ? (
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="flex gap-4 font-semibold cursor-pointer hover:text-[#F6B62B]"
                    >
                        <img src={BackIcon} alt="back" className="rotate-180"/>
                        Back
                    </button>
                ) : (
                    <a href="/">
                        <img src={Logo} alt="logo" className="w-20 md:w-auto"/>
                    </a>
                )}

                <nav className="hidden md:block min-w-[50%] gap-4 text-white font-medium relative">
                    <ul className={`flex ${activePath === "talents" ? "justify-between" : "gap-10 justify-end"}`}>
                        {navLinks.filter(lnk => {
                            // When on the Talents section, show only Spotlight and Contact Us
                            if (pathname.startsWith("/talents")) {
                                return ["Spotlight", "Contact Us"].includes(lnk.name);
                            }
                            // Otherwise, show all links normally
                            return true;
                        }).map((link, idx) => (

                            <li key={idx} className="relative">
                                {link.children ? (
                                    <button
                                        onClick={() => toggleDropdown(link.name)}
                                        className={`cursor-pointer flex items-center gap-2 hover:text-[#f6b62b] ${link.children.some(child => isActive(child.path)) ? 'text-[#f6b62b]' : ''}`}
                                    >
                                        {link.name} <FaCaretDown/>
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

                <a href={pathname.startsWith("/talents") ? "/" : "/talents"}
                   className="hidden md:inline-block py-2 px-12 bg-[#f6b62b] text-black rounded-lg hover:bg-white hover:text-black capitalize">{`${activePath !== 'talents' ? 'production' : 'talents'}`}</a>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <MenuIcon color="white"/>
                </button>

                {/* Mobile Nav */}
                {isOpen && (
                    <div
                        className="absolute md:hidden w-full bg-black left-0 top-0 transition-all duration-300 ease-in-out h-screen">
                        <div
                            className="space-y-9 w-[85%] mx-auto py-9">
                            <div className="flex justify-end -mr-3">
                                <button className="text-white" onClick={() => setIsOpen(!isOpen)}><FaX size="25"/>
                                </button>
                            </div>
                            <nav>
                                <ul className="flex flex-col pl-2 gap-9 font-light text-lg text-gray-700">
                                    {navLinks.filter(lnk => {
                                        if (pathname.startsWith("/talents")) {
                                            return ["Spotlight", "Contact Us"].includes(lnk.name);
                                        }
                                        return true;
                                    }).map((link, idx) => (

                                        <li key={idx}>
                                            {link.children ? (
                                                <div>
                                                    <button
                                                        onClick={() => toggleDropdown(link.name)}
                                                        className={`flex gap-12 w-full items-center text-white hover:text-[#f6b62b] ${link.children.some(child => isActive(child.path)) ? 'text-yellow-400' : ''}`}
                                                    >
                                                        {link.name}
                                                        <FaCaretDown/>
                                                    </button>
                                                    {showOptions === link.name && (
                                                        <ul className="pl-4 mt-5 space-y-5">
                                                            {link.children.map((child, i) => (
                                                                <li key={i}>
                                                                    <a
                                                                        href={child.path}
                                                                        className={`text-sm hover:text-[#f6b62b] ${isActive(child.path) ? 'text-[#f6b62b]' : 'text-white'}`}
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
                                                    className={`hover:text-[#f6b62b] ${isActive(link.path) ? 'text-[#f6b62b]' : 'text-white'}`}
                                                >
                                                    {link.name}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <a href={pathname.startsWith("/talents") ? "/" : "/talents"}

                               className="block md:hidden py-2 px-8 w-fit text-black bg-[#f6b62b] rounded-lg hover:bg-white capitalize font-semibold text-sm hover:text-black text-center mt-20 ml-2">
                                {`${activePath !== 'talents' ? 'production' : 'talents'}`}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
