import FooterImage from "../assets/footer-boxonia.svg"
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="flex flex-col py-12 md:py-20 w-[95%] md:w-[93%] mx-auto gap-6 md:gap-12 items-center">
            <div className="flex items-center gap-16 text-gray-400 text-sm w-5/6">
                <div className="h-[2px] flex-grow bg-gray-600"></div>
                <img src={FooterImage} alt="footer-boxonia" className="w-32 md:w-auto text-center" />
                <div className="h-[2px] flex-grow bg-gray-600"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center text-gray-400 w-full md:w-3/4">
                <p className="text-[#525252] header-font text-5xl">Contact Us</p>
                <p>Lagos, Nigeria</p>
                <div>
                    <a className="hover:text-yellow-400" href="#">boxonialblueprint@gmail.com</a>
                    <p>+2348092222071</p>
                </div>

                <nav className="flex gap-3 text-3xl">
                    <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
                    <a href="#" className="hover:text-yellow-400"><FaXTwitter /></a>
                    <a href="#" className="hover:text-yellow-400"><FaLinkedin /></a>
                    <a href="#" className="hover:text-yellow-400"><FaYoutube /></a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
