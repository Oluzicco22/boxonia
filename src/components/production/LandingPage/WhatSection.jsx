import ArticleHeader from "../ArticleHeader.jsx";
import InSectionLink from "../InSectionLink.jsx";
import boxoniaPillars from "../../../data/our-work.json";

const WhatSection = () => {
    return (
        <section className="bg-black/90 bg-blend-darken bg-no-repeat bg-[center_right]" style={{
            backgroundImage: `url("https://res.cloudinary.com/dybmufexj/image/upload/v1754222029/WWD_bg-img_wxyu9m.png")`,
            backgroundSize: "550px",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="flex flex-col py-8 md:py-16 w-[85%] mx-auto gap-12 items-center mt-12">
                <ArticleHeader title="what we do" id="what-we-do" />
                <div
                    aria-labelledby="what-we-do"
                    className="flex flex-col md:flex-row gap-12 w-full text-white"
                >
                    {boxoniaPillars.slice(0, 3).map((pillar, i) => (
                        <article key={i} className="flex gap-2 flex-col w-full md:w-1/3">
                            <h3 className="text-center text-[#B7B7B7] text-3xl font-bold">{pillar.title}</h3>
                            <p className="text-white text-lg font-extralight overflow-hidden text-ellipsis line-clamp-8">
                                {pillar.description}
                                {pillar.children && pillar.children.map((child, j) => (
                                    <span key={j}><br /> <br />
                                        {" "}
                                        <span className="font-normal italic">{child.title}:</span>{" "}<br />
                                        {child.description}
                                </span>
                                ))}
                            </p>
                        </article>
                    ))}
                </div>
                <InSectionLink name="read more" path="/production/about" />
            </div>
        </section>
    );
};

export default WhatSection;
