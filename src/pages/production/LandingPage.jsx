import WhatSection from "../../components/production/LandingPage/WhatSection.jsx";
import SponsorSection from "../../components/production/LandingPage/SponsorSection.jsx";
import ProjectsSection from "../../components/production/LandingPage/ProjectsSection.jsx";
import NewsSection from "../../components/production/LandingPage/NewsSection.jsx";
import ProductionSection from "../../components/production/LandingPage/ProductionSection.jsx";
import HeroSection from "../../components/production/LandingPage/HeroSection.jsx";
import Footer from "../../components/Footer.jsx";

const LandingPage = () => {
    return (
        <>
            <HeroSection />

            <WhatSection />
            <SponsorSection />

            <ProjectsSection />
            <NewsSection />
            <ProductionSection />
            <Footer />
        </>

    )
}

export default LandingPage;
