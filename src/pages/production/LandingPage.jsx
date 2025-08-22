import WhatSection from "../../components/production/LandingPage/WhatSection.jsx";
import SponsorSection from "../../components/production/LandingPage/SponsorSection.jsx";
import ProjectsSection from "../../components/production/LandingPage/ProjectsSection.jsx";
import ProductionSection from "../../components/production/LandingPage/ProductionSection.jsx";
import HeroSection from "../../components/production/LandingPage/HeroSection.jsx";
import Footer from "../../components/Footer.jsx";
import SpotlightSection from "../../components/production/LandingPage/SpotlightSection.jsx";
import InSectionLink from "../../components/production/InSectionLink.jsx";

const LandingPage = () => {
    return (
        <>
            <div className="flex flex-col gap-25">
                <HeroSection />

                <WhatSection />
                <SponsorSection />

                <ProjectsSection />
                <div className="flex flex-col items-center justify-center gap-6">
                    <SpotlightSection />
                    <InSectionLink name="see more" path="/production/news" />
                    <p className="lemon-font text-black md:text-[#F6B62B] bg-[#F6B62BB0] md:bg-transparent text-2xl mx-auto
                md:text-4xl rounded-md md:rounded-none py-3 md:py-0 leading-10 md:leading-22 font-normal md:border-y-2 border-[#4D4D4D] w-3/5 text-center md:text-nowrap mt-10 md:mt-20">
                        Audacious, Authentic & Exportable Art forms
                    </p>
                </div>
                <ProductionSection />
            </div>
            <Footer />
        </>
    )
}

export default LandingPage;
