import ArticleHeader from "../ArticleHeader.jsx";
import InSectionLink from "../InSectionLink.jsx";
import CarouselComponent from "../../CarouselComponent.jsx";

const ProjectsSection = () => {
    const projects = [
        {
            title: "Nolly Babes",
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1753986407/Nolly_babes_lnzopy.png",
            description: "A contemporary Nollywood drama series by Boxonia.",
        },
        {
            title: "Son of the Soil",
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1753986408/son_of_d_soil_vevinh.png",
            description: "A cultural exploration film showcasing African heritage.",
        },
        {
            title: "Group 3803",
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1755734039/Group_3803_jujazi.png",
            description: "An experimental project merging art, film, and innovation.",
        },
    ];

    return (
        <section className="flex flex-col gap-10 items-center relative"
                 aria-labelledby="projects-heading"
        >
            <ArticleHeader title="Our Projects" id="projects-heading" />
            <CarouselComponent
                collections={projects}
                navButon={false}
                length={projects.length}
                showIndicator={true}
            />
            <InSectionLink
                ariaLabel="Browse more Boxonia film, TV, and creative projects"
                name="more of our works"
                path="/production/projects"
            />
        </section>
    )
}

export default ProjectsSection
