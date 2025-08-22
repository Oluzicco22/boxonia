import Header from "../../Header.jsx";
import { useEffect, useState } from "react";

const HeroSection = () => {
    const [showVideoText, setShowVideoText] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideoText(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="w-full relative overflow-hidden">
            {/* Header on top */}
            <div className="absolute top-0 w-full z-20">
                <Header />
            </div>

            {/* Video background */}
            <div className="relative inset-0 z-10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[880px] object-cover"
                >
                    <source
                        src="https://res.cloudinary.com/dybmufexj/video/upload/v1754281184/home_video_1_pcrddi.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Hero Text with fade-out */}
                <div
                    className={`absolute bottom-16 left-10 md:left-32 flex flex-col text-white z-30 transform transition-opacity duration-1000 ease-in ${
                        showVideoText ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <h1 className="hero-font text-5xl md:text-9xl">action</h1>
                    <h1 className="hero-font text-5xl md:text-9xl">everywhere</h1>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
