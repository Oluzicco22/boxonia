import { useState } from "react";

const SponsorSection = () => {
    const sponsors = [
        {
            name: "AX Media",
            src: "https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/ax_2_ajqckf.png"
        },
        {
            name: "Layer Agency",
            src: "https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/Layer_1_2x-2_222_unmqfl.png"
        },
        {
            name: "Gap Tooth", src: "https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/gap_tooth_2_e0pptr.png"
        },
        {
            name: "Innicross", src: "https://res.cloudinary.com/dybmufexj/image/upload/v1756120824/Innicorss_2_vgy9jw.png"
        },
        {
            name: "Tech 222", src: "https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/tech_2_222_d0imaq.png"
        },
        {
            name: "USAID", src: "https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/usaid_22_tkzr61.png"
        },
        {
            name: "TOGIOS", src: "https://res.cloudinary.com/dybmufexj/image/upload/v1761556542/Togios-logo_milj7x.png"
        },
    ];

    const durationTaken = 24; // seconds
    const [isPaused, setIsPaused] = useState(false);
    const doubled = [...sponsors, ...sponsors];

    return (
        <section aria-labelledby="sponsor-heading" className="bg-white py-4 md:py-6 overflow-hidden">
            <div className="flex items-center gap-4">
                <h2 id="sponsor-heading" className="text-black font-bold text-sm md:text-xl shrink-0 px-4 md:px-12">
                    Trusted By:
                </h2>

                <div
                    className="relative w-full flex-1 overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    <div
                        style={{
                            animationName: "marquee",
                            animationTimingFunction: "linear",
                            animationIterationCount: "infinite",
                            animationDuration: `${durationTaken}s`,
                            animationPlayState: isPaused ? "paused" : "running",
                        }}
                        className="marquee-track"
                    >
                        {doubled.map((sponsor, i) => (
                            <div key={i} className="inline-flex items-center justify-center px-6 md:px-12">
                                <img
                                    src={sponsor.src}
                                    alt={`${sponsor.name} logo`}
                                    loading="lazy"
                                    className="w-24 md:w-auto cursor-pointer grayscale hover:grayscale-0 transition duration-300"
                                    style={{ height: "40px", objectFit: "contain" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorSection;