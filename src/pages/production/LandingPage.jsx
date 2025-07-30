import WhatSection from "../../components/production/LandingPage/WhatSection.jsx";
import SponsorSection from "../../components/production/LandingPage/SponsorSection.jsx";
import ProjectsSection from "../../components/production/LandingPage/ProjectsSection.jsx";
import NewsSection from "../../components/production/LandingPage/NewsSection.jsx";
import ProductionSection from "../../components/production/LandingPage/ProductionSection.jsx";
import HeroImage from "../../assets/hero.png";
import Header from "../../components/Header.jsx";
import HeroSection from "../../components/production/LandingPage/HeroSection.jsx";
import Footer from "../../components/Footer.jsx";

const LandingPage = () => {
    return (
        <>
            <div className="bg-transparent pb-1 bg-cover bg-center bg-no-repeat h-150" style={{
                backgroundImage: `url(${HeroImage})`}}>
                <Header />
                <HeroSection />
            </div>

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
