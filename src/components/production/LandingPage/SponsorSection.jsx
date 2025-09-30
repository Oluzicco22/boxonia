const SponsorSection = () => {

  const sponsors = [
        {
            name: "AX Media",
            src: "https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/ax_2_ajqckf.png",
        },
        {
            name: "Layer Agency",
            src: "https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/Layer_1_2x-2_222_unmqfl.png",
        },
        {
            name: "Gap Tooth",
            src: "https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/gap_tooth_2_e0pptr.png",
        },
        {
            name: "Innicorss",
            src: "https://res.cloudinary.com/dybmufexj/image/upload/v1756120824/Innicorss_2_vgy9jw.png",
        },
        {
            name: "Tech 222",
            src: "https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/tech_2_222_d0imaq.png",
        },
        {
            name: "USAID",
            src: "https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/usaid_22_tkzr61.png",
        },
    ];

    return (
        <section aria-labelledby="sponsor-heading" className="bg-white py-6 md:py-6">
            <div className="flex items-center gap-4">
                <h2 id="sponsor-heading" className="text-black font-bold text-sm md:text-xl shrink-0 px-4 md:px-12">
                    Trusted By:
                </h2>
                <div className="overflow-hidden w-full flex-1">
                    <div className="flex gap-4 md:gap-16 whitespace-nowrap animate-[marquee_5s_linear_infinite] hover:[animation-play-state:paused]">
                        {Array(10)
                            .fill(sponsors)
                            .flat()
                            .map((sponsor, i) => (
                                <img
                                    src={sponsor.src}
                                    alt={`${sponsor.name} logo`}
                                    key={i}
                                    loading="lazy"
                                    className="w-24 md:w-auto cursor-pointer grayscale hover:grayscale-0 transition duration-300"
                                />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SponsorSection
