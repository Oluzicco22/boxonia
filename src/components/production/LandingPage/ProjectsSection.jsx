import ArticleHeader from "../ArticleHeader.jsx";
import InSectionLink from "../InSectionLink.jsx";

const ProjectsSection = () => {
    return (
        <section className="flex flex-col py-16 gap-12 items-center relative">
            <ArticleHeader title="projects" />
            <div className="w-full flex justify-center items-start h-[450px]" style={{
                backgroundImage: `url("https://res.cloudinary.com/dybmufexj/image/upload/v1753986407/Nolly_babes_lnzopy.png")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            </div>

            <InSectionLink name="more of our work" path="/project1" />
        </section>
    )
}

export default ProjectsSection
