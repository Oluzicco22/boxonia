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
            <HeroSection />

            <WhatSection />
            <SponsorSection />

            <ProjectsSection />
            <div className="flex flex-col items-center justify-center">
                <SpotlightSection />
                <InSectionLink name="see more" path="/production/news" />
                <p className="text-[#F6B62B] text-base md:text-4xl leading-16 font-normal border-y-2 border-[#4D4D4D] w-[95%] md:w-3/5 text-center mt-12">
                    Audacious, Authentic & Exportable Art forms
                </p>
            </div>
            <ProductionSection />
            <Footer />
        </>

    )
}

export default LandingPage;
