import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import projects from "../../data/project.json";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ProjectCard from "../../components/production/ProjectComponent/ProjectCard.jsx";

const ProjectViewPage = () => {
    const {id} = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(false);


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
                className="bg-black/90 pb-1 bg-[length:265%_85%] sm:bg-cover bg-center bg-no-repeat min-h-100 md:min-h-130"
                style={{
                    backgroundImage: `url(${project?.thumbnail})`
                }}
            >
                <Header/>

                <div className="h-52 md:h-72 w-2/6 md:w-2/12 flex justify-center items-center">
                    <Link
                        to="/projects"
                        className="text-white font-bold hover:opacity-40"
                    >
                        {`<--- Back`}
                    </Link>
                </div>
            </div>

            <section className="relative grid grid-cols-1 md:grid-cols-[2fr_5fr] mt-10 gap-3 md:gap-27 w-[95%] mx-auto">
                <div
                    className="absolute -top-44 md:-top-1/5 flex flex-col gap-12 md:gap-5 items-center w-full md:w-1/3">
                    <div className="block w-1/2 md:w-4/6 h-full z-10">
                        <img
                            src={project.cover_image}
                            alt={`Cover image for ${project.title}`}
                            className="w-full"
                        />
                    </div>
                    <a href={project.trailer_link} target="_blank" rel="noopener noreferrer"
                       className="w-fit cursor-pointer py-2 md:py-4 px-10 md:px-33 border border-[#989898] rounded-lg text-[#989898] hover:text-black hover:bg-white capitalize font-normal md:font-bold text-sm md:text-base">
                        watch trailer
                    </a>
                </div>

                <div className="block min-h-40 md:min-h-72"></div>
                <ProjectCard props={project}/>
            </section>

            <Footer/>
        </div>
    );
};

export default ProjectViewPage;
