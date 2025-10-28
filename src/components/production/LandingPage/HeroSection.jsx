import { useState } from "react";
import Header from "../../Header.jsx";

const videos = [
    "https://res.cloudinary.com/dybmufexj/video/upload/v1761578897/SOTS_Carousel_use1mx.mp4",
    "https://res.cloudinary.com/dybmufexj/video/upload/v1761578092/tld_Carousel_xy9nro.mp4"
];

const HeroSection = () => {
    const [showVideoText, setShowVideoText] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const changeVideo = (direction) => {
        setFade(true); // start fade out
        setTimeout(() => {
            let newIndex = currentIndex + direction;
            if (newIndex < 0) newIndex = videos.length - 1;
            if (newIndex >= videos.length) newIndex = 0;
            setCurrentIndex(newIndex);
            setFade(false); // fade in
            setShowVideoText(true);
            setTimeout(() => setShowVideoText(false), 3000);
        }, 400);
    };

    return (
        <section className="relative w-full overflow-hidden">
            <Header />

            <div className="relative z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    key={currentIndex}
                    className={`w-full min-h-[70vh] md:max-h-[99vh] object-cover transition-opacity duration-700 ${
                        fade ? "opacity-0" : "opacity-100"
                    }`}
                >
                    <source src={videos[currentIndex]} type="video/mp4" />
                </video>

                {/* Hero Text */}
                <div
                    className={`absolute bottom-15 md:bottom-25 left-10 md:left-28 flex flex-col text-white z-30 transition-opacity duration-1000 ${
                        showVideoText ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <h1 className="hero-font text-3xl sm:text-5xl md:text-7xl lg:text-9xl">action</h1>
                    <h1 className="hero-font text-3xl sm:text-5xl md:text-7xl lg:text-9xl">everywhere</h1>
                </div>

                {/* Arrows */}
                <button
                    onClick={() => changeVideo(-1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-40 hover:scale-125 transition"
                >
                    ‹
                </button>
                <button
                    onClick={() => changeVideo(1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-40 hover:scale-125 transition"
                >
                    ›
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => changeVideo(index - currentIndex)}
                            className={`h-3 w-3 rounded-full transition ${
                                currentIndex === index
                                    ? "bg-[#f6b62b] scale-125"
                                    : "bg-white/60 hover:bg-white"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
