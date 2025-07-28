import Header from "../components/Header.jsx";
import HeroSection from "../components/LandingPage/HeroSection.jsx";
import HeroImage from "../assets/hero.png"
import WhatSection from "../components/LandingPage/WhatSection.jsx";

const LandingPage = () => {
    return (
        <main>
            <div className="bg-transparent pb-9" style={{
                backgroundImage: `url(${HeroImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <Header />
                <HeroSection />
            </div>
            <WhatSection />
        </main>
    )
}

export default LandingPage;