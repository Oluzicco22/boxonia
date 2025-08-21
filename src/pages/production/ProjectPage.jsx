import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import {Link} from "react-router-dom";
import projects from "../../data/project.json";

const ProjectPage = () => {
    return (
        <>
            <Header />
            <div className="w-full flex justify-center mb-10 md:mt-40">
                <ArticleHeader title="our projects" />
            </div>
            {projects.map((project, i) => (
                <article key={i}
                    className="my-10 flex justify-center items-end h-[40vh] w-full relative bg-black/10 bg-blend-darken bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${project.image})`,
                    }}>
                    <div className="w-4/5 flex gap-3 text-white flex-col mb-8">
                        {project.release_date ?
                            <Link to={`/production/projects/${project.id}`} className="text-right font-medium text-lg">{`see more --->`}</Link>
                            : <p className="text-right font-medium text-lg"> coming soon...</p>}
                    </div>
                </article>
            ))}
            <Footer />
        </>
    )
}

export default ProjectPage;
