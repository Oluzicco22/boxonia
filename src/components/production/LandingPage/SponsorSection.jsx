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
        <section className="bg-white flex justify-center items-center gap-4 md:gap-16 py-6 md:py-4">
            <span className="text-black font-bold text-xl">Trusted By:</span>
            {imagesLink.map((src, i) =>
                <img
                    src={src}
                    alt={`img-${i}`}
                    key={i}
                    className="w-24 md:w-auto cursor-pointer grayscale hover:grayscale-0 transition duration-300"
                />
            )}
        </section>
    )
}

export default SponsorSection
