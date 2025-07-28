import Header from "../components/Header.jsx";
import HeroSection from "../components/LandingPage/HeroSection.jsx";
import HeroImage from "../assets/hero.png"
import WhatSection from "../components/LandingPage/WhatSection.jsx";
import SponsorSection from "../components/LandingPage/SponsorSection.jsx";
import ProjectsSection from "../components/LandingPage/ProjectsSection.jsx";
import NewsSection from "../components/LandingPage/NewsSection.jsx";
import ProductionSection from "../components/LandingPage/ProductionSection.jsx";
import Footer from "../components/Footer.jsx";

const LandingPage = () => {
    return (
        <main className="text-white">
            <div className="bg-transparent pb-9 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url(${HeroImage})`
            }}>
                <Header />
                <HeroSection />
            </div>
            <WhatSection />
            <SponsorSection />

            <ProjectsSection />
            <NewsSection />
            <ProductionSection />
            <Footer />
        </main>
    )
}

export default LandingPage;
