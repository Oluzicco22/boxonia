const SponsorSection = () => {
    const imagesLink = [
        'https://res.cloudinary.com/dybmufexj/image/upload/v1753986561/innicross_qnmdfb.svg',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1753986562/teeth-smile_zglx3w.svg',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1753986562/ax_zm9jhw.svg',
        'https://res.cloudinary.com/dybmufexj/image/upload/v1753986564/usaid_o5obry.svg'
    ]

    return (
        <section className="bg-white flex justify-center gap-4 md:gap-16 py-6 md:py-10">
            {imagesLink.map((src, i) =>
                <img src={src} alt={`img-${i}`} key={i} className="w-28 md:w-auto"></img>
            )}
        </section>
    )
}

export default SponsorSection
