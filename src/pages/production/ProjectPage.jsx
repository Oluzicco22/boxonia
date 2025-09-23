import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import projects from "../../data/project.json";

const ProjectPage = () => {
    return (
        <>
            <Header />
            <div className="w-full flex justify-center mb-10 mt-40">
                <ArticleHeader title="our projects" />
            </div>
            {projects.map((project, i) => (
                <article key={i}
                    className="my-10 flex justify-center items-end h-[25vh] md:h-[50vh] w-full relative bg-black/10 bg-blend-darken bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${project.image})`,
                    }}>
                    <img
                        src={project.image}
                        alt={`Preview of project ${project.title}`}
                        className="hidden"
                    />
                    <div className="w-4/5 flex gap-3 text-white flex-col mb-8">
                            <a href={`/production/projects/${project.id}`} className="text-right font-medium text-lg hover:text-[#f6b62b]">{`see more --->`}</a>
                    </div>
                </article>
            ))}
            <Footer />
        </>
    )
}

export default ProjectPage;
