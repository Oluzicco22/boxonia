const SponsorSection = () => {
    const imagesLink = [
        'https://res.cloudinary.com/dybmufexj/image/upload/v1754223473/ax_zm9jhw.png',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1755722566/digital-music_w03pay.png',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1754223227/teeth-smile_zglx3w.png',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1753986561/innicross_qnmdfb.svg',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1755722567/tech-partners_tc4tn4.png',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1754223364/usaid_o5obry.png'
    ]

    return (
        <section className="bg-white py-6 md:py-4">
            <div className="flex items-center gap-4">
                <span className="text-black font-bold text-lg md:text-xl shrink-0 px-6 md:px-12">Trusted By:</span>

                <div className="overflow-hidden w-full flex-1">
                    <div className="flex gap-16 whitespace-nowrap animate-[marquee_5s_linear_infinite]">
                        {[...imagesLink, ...imagesLink].map((src, i) => (
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
