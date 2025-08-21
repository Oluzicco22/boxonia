import ArticleHeader from "../ArticleHeader.jsx";
import InSectionLink from "../InSectionLink.jsx";
import CarouselComponent from "../../CarouselComponent.jsx";

const ProjectsSection = () => {
    const images = [
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986407/Nolly_babes_lnzopy.png",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986408/son_of_d_soil_vevinh.png",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1755734039/Group_3803_jujazi.png"
    ]

    return (
        <section className="flex flex-col py-0 gap-12 items-center relative">
            <ArticleHeader title="our projects" />
            <CarouselComponent images={images} navButon={false} />

            <InSectionLink name="more of our work" path="/production/projects" />
        </section>
    )
}

export default ProjectsSection
