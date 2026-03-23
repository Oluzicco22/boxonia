import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import BoxoniaPillarComponent from "../../components/production/AboutBoxoniaComponent/BoxoniaPillarComponent.jsx";
import InSectionLink from "../../components/production/InSectionLink.jsx";
import Marquee from "../../components/production/MarqueeComponent.jsx";
import { Helmet } from "react-helmet-async";

const AboutBoxoniaPage = () => {
    const types = [
        "Documentaries", "Series", "TV Shows", "Films", "Reality TV", "Animation",
        "Commercials", "Music Videos", "Corporate Videos", "Social Media/Digital Content",
        "Educational Video / Training Content", "Podcasts", "Radio Dramas", "Live Events",
        "Video Games", "Virtual / Hybrid Events",
    ];

    return (
        <>
            <Helmet>
                <title>About Boxonia | African Film Production & Talent Management</title>
                <meta
                    name="description"
                    content="Learn about Boxonia, a Nigerian production and talent management company creating bold African stories across film, TV, documentaries, commercials, and digital media."
                />
                <link rel="canonical" href="https://www.boxonia.com/about" />

                {/* Open Graph */}
                <meta property="og:title" content="About Boxonia | African Film Production & Talent Management" />
                <meta
                    property="og:description"
                    content="Discover Boxonia’s mission, creative pillars, and the wide range of productions we bring to life."
                />
                <meta property="og:url" content="https://www.boxonia.com/about" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.boxonia.com/boxonia-icon.svg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Boxonia | African Film Production & Talent Management" />
                <meta
                    name="twitter:description"
                    content="Discover the story, vision and creative pillars behind Boxonia."
                />
                <meta name="twitter:image" content="https://www.boxonia.com/boxonia-icon.svg" />
            </Helmet>

            <Header/>
            <div className="w-full md:w-[85%] mx-auto flex justify-center mb-8 mt-28 md:mt-43">
                <ArticleHeader title="what we do"/>
            </div>
            <BoxoniaPillarComponent/>

            <section className="flex flex-col gap-10 items-center my-24">
                <div className="w-full md:w-[85%] mx-auto">
                    <ArticleHeader title="project types we handle"/>
                </div>
                <div className="flex flex-col items-center gap-11 md:gap-9 w-full">
                    <Marquee items={types}/>
                    <Marquee reverse={true} items={types}/>
                </div>
                <InSectionLink name="work with us" path="/contact"/>
            </section>
            <Footer/>
        </>
    )
}

export default AboutBoxoniaPage;