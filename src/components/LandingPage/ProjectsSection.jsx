import ArticleHeader from "../ArticleHeader.jsx";
import InSectionLink from "../InSectionLink.jsx";
import ProjectImage from "../../assets/Nolly babes.png"

const ProjectsSection = () => {
    return (
        <section className="flex flex-col py-16 gap-12 items-center relative">
            <div className="w-full flex justify-center items-start h-[450px]" style={{
                backgroundImage: `url(${ProjectImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <ArticleHeader title="projects" />
            </div>

            <InSectionLink name="more of our work" path="/project1" />
        </section>
    )
}

export default ProjectsSection
