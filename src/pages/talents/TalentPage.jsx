import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import TalentCatalogue from "../../components/talents/TalentCatalogue.jsx";
import SpotlightSection from "../../components/production/LandingPage/SpotlightSection.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Server from "../../services/indexApi.js"

const server = new Server();

const TalentSkeleton = () => (
    <div className="flex flex-col items-center space-y-3 w-full">
        <div
            className="w-full h-72 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-3xl animate-pulse"></div>
        <div
            className="h-4 w-3/4 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded animate-pulse"></div>
        <div
            className="h-4 w-1/2 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded animate-pulse"></div>
    </div>
)


const TalentPage = () => {
    const [talents, setTalents] = useState([]);
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTalents = async () => {
        setLoading(true);
        try {
            const res = await server.readTalents();
            setTalents(res.data);

            const allProjects = res.data.flatMap(talent => talent.relatedProjects || []);
            setProjects(allProjects);
            // eslint-disable-next-line no-unused-vars
        } catch (_) {
            setError("Failed to load talents.");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchTalents();
    }, []);

    return (
        <div className="grid gap-8 md:gap-16 mt-26 md:mt-40">
            <Header showBackButton={false} />
            <div className="w-[85%] mx-auto flex justify-center">
                <ArticleHeader title="boxonia talents"/>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}


            <p className="w-[90%] md:w-4/6 mx-auto mb-6 md:mb-0 text-justify md:text-left text-xs md:text-xl font-semibold text-[#B7B7B7]">
                At Boxonia, Talent Management is a comprehensive and dynamic process designed to nurture and advance the
                careers of industry professionals.
                Our approach begins with identifying top-tier talent whose skills and potential align with our
                values.<br/><br/>
                Through collaboration, strategy, and tailored career growth, we cultivate long-term relationships that
                drive both personal and industry-wide innovation.
            </p>

            <section
                className="grid grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[65%] mx-auto gap-y-11 gap-x-6 md:gap-16 items-start">
                {loading ?
                    [...Array(3)].map((_, index) => (
                        <TalentSkeleton key={index}/>
                    ))
                    : talents.map((talent, i) => (
                        <TalentCatalogue key={i} props={talent}/>
                    ))
                }
            </section>

            <section className="flex flex-col items-center gap-16 mt-6 pb-15">
                <ArticleHeader title="selected works" />

                {/* Scrollable Container */}
                <div
                    className="relative w-full overflow-x-auto scroll-smooth cursor-grab"
                    style={{
                        scrollbarWidth: "none", // Hides scrollbar in Firefox
                        msOverflowStyle: "none", // Hides scrollbar in IE/Edge
                    }}
                >
                    {/* Hide scrollbar in Webkit browsers */}
                    <style>
                        {`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}
                    </style>

                    <div className="flex gap-1 no-scrollbar px-4">
                        {loading ? (
                            <div className="w-[90%] mx-auto space-x-1 flex justify-center">
                                {[...Array(6)].map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-[calc(100%/6)] h-[10rem] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-lg animate-pulse flex-shrink-0"
                                    ></div>
                                ))}
                            </div>
                        ) : (
                            projects &&
                            projects.map((tal, idx) => (
                                <Link to="#" key={`${idx}`} className="flex-shrink-0">
                                    <img
                                        src={tal}
                                        alt={`img-${idx}`}
                                        className="w-[12rem] h-[15rem] object-contain rounded-lg cursor-grab"
                                    />
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </section>

            <div className="flex flex-col items-center md:gap-16 bg-[#131313] md:bg-transparent pb-12 md:pb-0">
                <SpotlightSection/>
            </div>

            <div className="flex justify-center items-center mt-10">
                <a href="/talents/contact"
                   className="hover:bg-white bg-yellow-500 py-2 px-7 w-fit rounded-md text-black">Join Boxonia
                    Talents</a>
            </div>
            <Footer/>
        </div>
    )
}

export default TalentPage;
