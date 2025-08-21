import WhatSection from "../../components/production/LandingPage/WhatSection.jsx";
import SponsorSection from "../../components/production/LandingPage/SponsorSection.jsx";
import ProjectsSection from "../../components/production/LandingPage/ProjectsSection.jsx";
import ProductionSection from "../../components/production/LandingPage/ProductionSection.jsx";
import HeroSection from "../../components/production/LandingPage/HeroSection.jsx";
import Footer from "../../components/Footer.jsx";
import SpotlightSection from "../../components/production/LandingPage/SpotlightSection.jsx";

const LandingPage = () => {
    return (
        <>
            <HeroSection />

            <WhatSection />
            <SponsorSection />

            <ProjectsSection />
            <SpotlightSection />
            <ProductionSection />
            <Footer />
        </>

    )
}

export default LandingPage;
