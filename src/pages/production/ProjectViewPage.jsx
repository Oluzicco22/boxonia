import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../../data/project.json";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ProjectCard from "../../components/production/ProjectComponent/ProjectCard.jsx";

const ProjectViewPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(false);

    // 🔗 Step 1: Map of project IDs to trailer links
    const trailerLinks = {
        2: "https://youtu.be/HKW0g0bNF7k?si=9X5awetBWX24afP1",
    };

    const getProject = () => {
        setLoading(true);
        try {
            const found = projects.find((p) => p.id === parseInt(id));
            setProject(found);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProject();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!project) return <p>Project not found.</p>;

    return (
        <div>
            <div
                className="bg-black/90 pb-1 bg-auto md:bg-cover bg-top md:bg-center bg-no-repeat min-h-100 md:min-h-130"
                style={{
                    backgroundImage: `url(${project?.thumbnail})`
                }}
            >
                <Header />

                <img
                    src={project.thumbnail}
                    alt={`Hero background for ${project.title}`}
                    className="hidden"
                />

                <div className="h-14 md:h-72 w-1/6 md:w-2/12 flex justify-center items-center">
                    <Link
                        to="/production/projects"
                        className="text-white font-bold hover:opacity-40"
                    >
                        {`<--- Back`}
                    </Link>
                </div>
            </div>

            <section className="relative grid grid-cols-1 md:grid-cols-[2fr_5fr] my-10 gap-5 md:gap-10 w-[93%] mx-auto">
                <div className="absolute -top-44 md:-top-3/5 flex flex-col gap-5 items-center w-full md:w-1/3">
                    <div className="block w-1/2 md:w-4/6 h-full z-10">
                        <img
                            src={project.cover_image}
                            alt={`Cover image for ${project.title}`}
                            className="w-full"
                        />
                    </div>

                    {trailerLinks[project.id] && (
                        <a
                            href={trailerLinks[project.id]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit cursor-pointer py-2 px-8 border border-white rounded-lg md:rounded-sm text-white hover:text-black hover:bg-white capitalize font-bold text-xl"
                        >
                            watch trailer
                        </a>
                    )}
                </div>

                <div className="block min-h-72"></div>
                <ProjectCard props={project} />
            </section>

            <Footer />
        </div>
    );
};

export default ProjectViewPage;
