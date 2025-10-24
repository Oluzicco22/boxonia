import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import BoxoniaPillarComponent from "../../components/production/AboutBoxoniaComponent/BoxoniaPillarComponent.jsx";
import InSectionLink from "../../components/production/InSectionLink.jsx";
import Marquee from "../../components/production/MarqueeComponent.jsx";

const AboutBoxoniaPage = () => {
    const types = [
        "Film", "Series", "TV Shows", "Documentaries", "Reality TV", "Animation",
        "Commercials", "Music Videos", "Corporate Videos", "Social Media/Digital Content",
        "Educational Video / Training Content", "Podcasts", "Radio Dramas", "Live Events",
        "Video Games", "Virtual / Hybrid Events",
    ];

    return (
        <>
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
