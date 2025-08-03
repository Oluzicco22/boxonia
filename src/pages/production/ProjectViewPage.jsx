import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import projects from "../../data/project.json";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ProjectCard from "../../components/production/ProjectComponent/ProjectCard.jsx";

const ProjectViewPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(false);

    // add the async-await when we have a fetch from a remote server
    const getProject = () => {
        setLoading(true);
        try{
            const project = projects.find(p => {
                return (
                    p.id === parseInt(id)
                )
            });
            setProject(project);
        }catch (e){
            console.log(e);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProject()
    }, []);

    if(loading) return <p>Loading...</p>;

    return (
        <>
            <div className="bg-black/90 mix-blend-plus-lighter pb-1 bg-auto md:bg-cover bg-top md:bg-center bg-no-repeat min-h-100 md:min-h-130" style={{
                backgroundImage: `url(${project?.thumbnail})`
            }}>
                <Header />
                <div className="h-14 md:h-72 w-1/6 md:w-2/12 flex justify-center items-center">
                    <Link to="/production/projects" className="text-white font-bold hover:opacity-40">{`<--- Back`}</Link>
                </div>
            </div>
            <section
                className="relative grid grid-cols-1 md:grid-cols-[2fr_5fr] my-10 gap-5 md:gap-10 w-[93%] mx-auto">
                <div className="md:absolute md:-top-3/5 flex flex-col gap-5 items-center w-1/3">
                        <div className="hidden md:block w-4/6 h-full relative">
                            <img src="https://res.cloudinary.com/dybmufexj/image/upload/v1754226377/real_nolly_babes_poster_kxixpo.png" className="w-full" alt="hero" />
                        </div>
                        <button
                            className="w-full md:w-3/6 cursor-pointer py-2 border border-white rounded-sm text-white hover:text-black hover:bg-white capitalize font-bold text-xl">
                            watch trailer
                        </button>
                    </div>
                <div className="hidden md:block"></div>
                <ProjectCard props={project} />

            </section>
            <Footer />
        </>
    )
}


export default ProjectViewPage;
