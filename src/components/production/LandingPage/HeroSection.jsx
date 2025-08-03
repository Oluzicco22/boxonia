import Header from "../../Header.jsx";

const HeroSection = () => {
    return (
        <section className="w-full relative h-screen overflow-hidden">
            {/* Header on top */}
            <div className="absolute top-0 w-full z-20">
                <Header />
            </div>

            {/* Video background */}
            <div className="absolute inset-0 z-10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[750px] object-cover"
                >
                    <source
                        src="https://res.cloudinary.com/dybmufexj/video/upload/v1754054813/home_video_1_pcrddi.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Hero Text */}
            <div className="absolute bottom-64 left-10 md:left-32 flex flex-col text-white z-30">
                <h1 className="hero-font text-5xl md:text-9xl">action</h1>
                <h1 className="hero-font text-5xl md:text-9xl">everywhere</h1>
            </div>
        </section>
    );
};

export default HeroSection;
