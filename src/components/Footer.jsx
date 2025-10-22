import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter, FaYoutube, FaTiktok} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer role="contentinfo" className="flex flex-col py-12 md:py-12 md:mt-32 w-[80%] h-fit md:w-[93%] mx-auto gap-6 md:gap-12
        items-center bg-black/10 bg-blend-darken bg-[length:100%_90%] md:bg-auto bg-no-repeat bg-bottom" style={{
            backgroundImage: "url(https://res.cloudinary.com/dybmufexj/image/upload/v1755730598/view-3d-film-reel_1_vhfwry.png)"
        }}>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between text-gray-400 w-full md:w-3/4">
                <p className="text-[#F6B62B] font-bold text-xl">Contact Us</p>

                {/*<!---------- Mobile Nav  ----------->*/}
                <nav className="md:hidden flex gap-3 my-5 text-3xl justify-between">
                    <a href="https://instagram.com/boxoniablueprint" target="_blank"
                       className="hover:text-yellow-300"><FaInstagram/></a>
                    <a href="https://x.com/BoxoniaBlue" target="_blank" className="hover:text-yellow-300"><FaXTwitter/></a>
                    <a href="https://linkedin.com/in/boxonia-blueprint-37a79a327" target="_blank"><FaLinkedinIn
                        className="text-transparent stroke-gray-400 stroke-[30] hover:stroke-yellow-400"/></a>
                    <a href="https://www.tiktok.com/@boxonia.blueprint?_t=ZS-90gN8vTgf2H&_r=1" target="_blank"><FaTiktok
                        className="text-transparent stroke-gray-400 stroke-[30] hover:stroke-yellow-400"/></a>
                    <a href="https://web.facebook.com/boxoniablueprint/?_rdc=1&_rdr" target="_blank"><FaFacebookF
                        className="text-transparent stroke-gray-400 stroke-[30] hover:stroke-yellow-400"/></a>
                    <a href="https://www.youtube.com/@boxoniablue" target="_blank"><FaYoutube
                        className="text-transparent stroke-gray-400 stroke-[30] hover:stroke-yellow-400"/></a>
                </nav>

                <div className="leading-loose md:leading-8">
                    <a className="hover:text-yellow-400" href="mailto:hq@boxonia.com"
                       target="_blank">hq@boxonia.com</a>
                </div>

                <p>Lagos, Nigeria</p>

                {/*<!---------- Desktop Nav  ----------->*/}
                <nav className="hidden md:flex gap-3 text-3xl">
                    <a href="https://instagram.com/boxoniablueprint" target="_blank"
                       className="hover:text-yellow-300"><FaInstagram/></a>
                    <a href="https://x.com/BoxoniaBlue" target="_blank" className="hover:text-yellow-300"><FaXTwitter/></a>
                    <a href="https://linkedin.com/in/boxonia-blueprint-37a79a327" target="_blank"><FaLinkedinIn
                        className="text-transparent stroke-gray-400 stroke-[30] hover:stroke-yellow-400"/></a>
                    <a href="https://www.tiktok.com/@boxonia.blueprint?_t=ZS-90gN8vTgf2H&_r=1" target="_blank"><FaTiktok
                        className="text-transparent stroke-gray-400 stroke-[30] hover:stroke-yellow-400"/></a>
                    <a href="https://web.facebook.com/boxoniablueprint/?_rdc=1&_rdr" target="_blank"><FaFacebookF
                        className="text-transparent stroke-gray-400 stroke-[30] hover:stroke-yellow-400"/></a>
                    <a href="https://www.youtube.com/@boxoniablue" target="_blank"><FaYoutube
                        className="text-transparent stroke-gray-400 stroke-[30] hover:stroke-yellow-400"/></a>
                </nav>

            </div>

            <div className="flex flex-col md:items-center gap-8 text-gray-400 text-sm w-full md:w-3/4">
                <div className="h-[2px] w-full flex-grow bg-white"></div>
                <img
                    src="https://res.cloudinary.com/dybmufexj/image/upload/v1755728729/boxonia_blurprint_1_1_lfdo1w.png"
                    alt="footer-boxonia" className="w-50 md:w-auto"/>
            </div>
        </footer>
    )
}

export default Footer
