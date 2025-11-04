import WhatSection from "../../components/production/LandingPage/WhatSection.jsx";
import SponsorSection from "../../components/production/LandingPage/SponsorSection.jsx";
import ProjectsSection from "../../components/production/LandingPage/ProjectsSection.jsx";
import ProductionSection from "../../components/production/LandingPage/ProductionSection.jsx";
import HeroSection from "../../components/production/LandingPage/HeroSection.jsx";
import Footer from "../../components/Footer.jsx";
import SpotlightSection from "../../components/production/LandingPage/SpotlightSection.jsx";
import Header from "../../components/Header.jsx";

const LandingPage = () => {
    return (
        <>
            <div className="flex flex-col">
                <Header/>
                <div className="flex flex-col gap-16 md:gap-25">
                    <HeroSection/>

                    <WhatSection/>
                    <SponsorSection/>

                    <ProjectsSection/>
                    <section className="flex flex-col items-center justify-center gap-6 bg-[#131313] md:bg-transparent">
                        <SpotlightSection len={2}/>
                    </section>
                    <div className="md:h-auto flex justify-center items-center mb-6 md:mb-12 md:mt-0">
                        <p className="lemon-font text-black md:text-[#F6B62B] bg-[#F6B62B] md:bg-transparent text-sm md:text-2xl
                        lg:text-4xl rounded-md md:rounded-none py-3 md:py-0 px-3 md:px-5 leading-5 md:leading-22 font-normal md:border-y-2
                        border-[#4D4D4D] w-2/3 md:w-fit text-center md:text-nowrap">
                            Audacious, Authentic & Exportable Art forms
                        </p>
                    </div>
                    <ProductionSection/>
                </div>
                <Footer/>
            </div>

        </>
    )
}

export default LandingPage;
