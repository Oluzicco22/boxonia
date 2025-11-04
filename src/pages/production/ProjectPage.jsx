import { Link } from "react-router-dom";
import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import projects from "../../data/project.json";

const ProjectPage = () => {
    return (
        <>
            <Header />
            <div className="w-[85%] mx-auto flex justify-center mb-10 md:mb-14 mt-28 md:mt-43">
                <ArticleHeader title="our projects" />
            </div>
            <div className="flex flex-col mb-12 md:mb-0 gap-12 md:gap-0">
                {projects.map((project, i) => (
                    <div key={i}>
                        <article
                            className="md:my-6 flex justify-center items-center h-[25vh] md:h-[60vh] w-[92%] mx-auto md:w-full relative rounded-xl md:rounded-none bg-black/10 bg-blend-darken bg-center bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url(${project.image})`,
                            }}
                        >
                            <div className="w-4/5 hidden md:flex gap-3 text-white flex-col mb-8">
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="text-right font-medium text-lg hover:text-[#f6b62b]"
                                >
                                    {`see more --->`}
                                </Link>
                            </div>
                        </article>

                        <div className="flex md:hidden justify-center mt-5 md:mt-0">
                            <Link
                                to={`/projects/${project.id}`}
                                className="text-center text-nowrap text-sm border-1 font-normal hover:bg-white hover:text-black border-[#989898] text-[#989898] px-9 py-2 rounded-[10px]"
                            >
                                see more
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default ProjectPage;
