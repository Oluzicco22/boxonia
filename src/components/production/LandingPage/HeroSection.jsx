const HeroSection = () => {
    return (
        <section className="h-[500px] flex w-[85%] mx-auto items-end">
            <div className="flex flex-col h-50 text-white transition-all delay-100 hover:text-white/60 cursor-pointer">
                <h1 className="hero-font text-5xl md:text-9xl">action</h1>
                <h1 className="hero-font text-5xl md:text-9xl">everywhere</h1>
            </div>
        </section>
    )
}

export default HeroSection
