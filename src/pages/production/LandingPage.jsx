import WhatSection from "../../components/production/LandingPage/WhatSection.jsx";
import SponsorSection from "../../components/production/LandingPage/SponsorSection.jsx";
import ProjectsSection from "../../components/production/LandingPage/ProjectsSection.jsx";
import ProductionSection from "../../components/production/LandingPage/ProductionSection.jsx";
import HeroSection from "../../components/production/LandingPage/HeroSection.jsx";
import Footer from "../../components/Footer.jsx";
import SpotlightSection from "../../components/production/LandingPage/SpotlightSection.jsx";
import Header from "../../components/Header.jsx";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
    return (
        <>
            <Helmet>
                <title>Boxonia | African Stories, Films & Talent Management</title>
                <meta
                    name="description"
                    content="Boxonia is a Nigerian 360° production and talent management company telling audacious, authentic and exportable African stories through film, TV, commercials and more."
                />
                <link rel="canonical" href="https://www.boxonia.com/" />

                {/* Open Graph */}
                <meta property="og:title" content="Boxonia | African Stories, Films & Talent Management" />
                <meta
                    property="og:description"
                    content="Authentic African stories told through film, TV, commercials and more."
                />
                <meta property="og:url" content="https://www.boxonia.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.boxonia.com/boxonia-icon.svg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Boxonia | African Stories, Films & Talent Management" />
                <meta
                    name="twitter:description"
                    content="Authentic African stories told through film, TV, commercials and more."
                />
                <meta name="twitter:image" content="https://www.boxonia.com/boxonia-icon.svg" />
            </Helmet>

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