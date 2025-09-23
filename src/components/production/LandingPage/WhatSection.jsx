import ArticleHeader from "../ArticleHeader.jsx";
import InSectionLink from "../InSectionLink.jsx";
import boxoniaPillars from "../../../data/our-work.json";

const WhatSection = () => {
    return (
        <section className="bg-black/90 bg-blend-darken bg-no-repeat bg-[center_right]" style={{
            backgroundImage: `url("https://res.cloudinary.com/dybmufexj/image/upload/v1754222029/WWD_bg-img_wxyu9m.png")`,
            backgroundSize: "550px",
        }}>
            <div className="flex flex-col py-8 md:py-0 w-[85%] mx-auto gap-10 items-center">
                <ArticleHeader title="what we do" id="what-we-do" />
                <div
                    aria-labelledby="what-we-do"
                    className="flex flex-col md:flex-row gap-12 w-full text-white"
                >
                    {boxoniaPillars.slice(0, 3).map((pillar, i) => (
                        <article key={i} className="flex gap-2 flex-col w-full md:w-1/3 text-center md:text-left">
                            <h3 className="text-[#f6b62b] md:text-xl font-semibold uppercase">{pillar.title}</h3>
                            <div className="text-white text-lg font-extralight overflow-hidden text-ellipsis line-clamp-8 whitespace-pre-line">
                                {pillar.description}
                                {pillar.children && pillar.children.map((child, j) => (
                                    <div key={j} className="whitespace-pre-line">
                                        <h4 className="font-normal">{child.title}:</h4>
                                        <p>{child.description}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
                <InSectionLink
                    name="read more"
                    path="/production/about"
                    ariaLabel="Learn more about Boxonia’s productions and services"
                />
            </div>
        </section>
    );
};

export default WhatSection;
