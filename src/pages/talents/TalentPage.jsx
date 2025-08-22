import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import TalentData from "../../data/talents.json";
import TalentCatalogue from "../../components/talents/TalentCatalogue.jsx";
import SpotlightSection from "../../components/production/LandingPage/SpotlightSection.jsx";
import InSectionLink from "../../components/production/InSectionLink.jsx";
import {Link} from "react-router-dom";

const TalentPage = () => {
    return (
        <div className="grid gap-16 mt-20 md:mt-40">
            <Header />
            <div className="w-full flex justify-center">
                <ArticleHeader title="boxonia talents" />
            </div>

            <p className="w-[90%] md:w-3/5 mx-auto">
                At Boxonia, Talent Management is a comprehensive and dynamic process designed to nurture and advance the careers of industry professionals.
                Our approach begins with identifying top-tier talent whose skills and potential align with our values.<br /><br />
                Through collaboration, strategy, and tailored career growth, we cultivate long-term relationships that drive both personal and industry-wide innovation.
            </p>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[65%] mx-auto gap-16 items-start">
                {TalentData.map((talent, i) => (
                    <TalentCatalogue key={i} props={talent} />
                ))}
            </section>

            <section className="flex flex-col items-center gap-16 mt-6">
                <ArticleHeader title="selected works" />
                <div className="relative w-full overflow-x-scroll" style={{ scrollbarWidth: "none"}}>
                    <div className="flex gap-2 animate-[marquee_8s_linear_infinite]">
                        {[...TalentData, ...TalentData].map((talent, i) =>
                            talent.relatedProjects.map((tal, idx) => (
                                <Link to="#" key={`${i}-${idx}`} className="flex-shrink-0">
                                    <img src={tal} alt={`img-${i}-${idx}`} className="w-[15rem]" />
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </section>

            <div className="flex flex-col items-center gap-16">
                <SpotlightSection />
                <InSectionLink name="see more" path="/production/news" />
            </div>

            <div className="flex justify-center items-center mt-10">
                <Link to="#" className="hover:bg-white bg-yellow-500 py-2 px-7 w-fit rounded-md text-black">Join Boxonia Talents</Link>
            </div>
            <Footer />
        </div>
    )
}

export default TalentPage;
