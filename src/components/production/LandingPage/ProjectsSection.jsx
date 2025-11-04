import ArticleHeader from "../ArticleHeader.jsx";
import CarouselComponent from "../../CarouselComponent.jsx";

const ProjectsSection = () => {
    const projects = [
        {
            title: "Son of the Soil",
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762185302/son_of_d_soil_vevinh.png",
            description: "A cultural exploration film showcasing African heritage.",
        },
        {
            title: "Nolly Babes",
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1753986407/Nolly_babes_lnzopy.png",
            description: "A contemporary Nollywood drama series by Boxonia.",
        },
        {
            title: "Beta Food, Beta Life",
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1755734539/BFBL_big_cover_towzge.png",
            description: "An experimental project merging art, film, and innovation.",
        },
    ];

    return (
        <section className="flex flex-col mt-8 md:mt-0 gap-10 items-center relative"
                 aria-labelledby="projects-heading"
        >
            <div className="md:w-[85%] w-full">
                <ArticleHeader title="Our Projects" id="projects-heading"/>
            </div>
            <CarouselComponent
                collections={projects}
                navButon={false}
                length={projects.length}
                showIndicator={true}
            />
            <a href="/projects"
               className="text-center text-nowrap text-sm border-1 font-normal hover:bg-white hover:text-black border-[#989898] text-[#989898] px-8 md:px-20 py-2 md:py-3 -mt-6 md:mt-1 rounded-lg md:rounded-lg">
               more of our works
            </a>
        </section>
    )
}

export default ProjectsSection
