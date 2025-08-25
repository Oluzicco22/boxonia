const SponsorSection = () => {
    const imagesLink = [
        'https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/ax_2_ajqckf.png',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/Layer_1_2x-2_222_unmqfl.png',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/gap_tooth_2_e0pptr.png',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1756120824/Innicorss_2_vgy9jw.png',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/tech_2_222_d0imaq.png',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1756120823/usaid_22_tkzr61.png'
    ]

    return (
        <section className="bg-white py-6 md:py-6">
            <div className="flex items-center gap-4">
                <span className="text-black font-bold text-lg md:text-xl shrink-0 px-6 md:px-12">Trusted By:</span>

                <div className="overflow-hidden w-full flex-1">
                    <div className="flex gap-16 whitespace-nowrap animate-[marquee_5s_linear_infinite]">
                        {[...imagesLink, ...imagesLink, ...imagesLink, ...imagesLink, ...imagesLink,
                            ...imagesLink, ...imagesLink, ...imagesLink, ...imagesLink, ...imagesLink,
                            ...imagesLink, ...imagesLink].map((src, i) => (
                            <img
                                src={src}
                                alt={`img-${i}`}
                                key={i}
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
