import ArticleHeader from "../ArticleHeader.jsx";
import InSectionLink from "../InSectionLink.jsx";
import pillars from "../../../data/our-work.json";

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
                    {pillars.slice(0, 3).map((pillar, i) => (
                        <div key={i} className="flex flex-col gap-6 md:gap-4 mx-auto w-full">
                            <article className={`flex flex-col justify-center ${i%2 ? "border-[#463103]" : "border-[#525252]"} gap-4 md:gap-3 border-3 min-h-60 w-[87%] md:border-none rounded-3xl text-center md:text-left`}>
                                <h3 className="text-[#f6b62b] text-sm md:text-xl font-semibold uppercase">{pillar.title}</h3>
                                <div className="text-[#B7B7B7] w-4/5 mx-auto md:w-full text-[12px] md:text-lg font-light overflow-hidden leading-normal text-ellipsis line-clamp-3 md:line-clamp-8 whitespace-pre-line">
                                    {pillar.description}
                                    {pillar.children && pillar.children.map((child, j) => (
                                        <div key={j} className="whitespace-pre-line w-full">
                                            {/*<h4 className="font-semibold">{child.title}:</h4>*/}
                                            <p>{child.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </article>
                            <div className="flex md:hidden justify-center">
                                    <InSectionLink
                                        name="read more"
                                        path="/production/about"
                                        ariaLabel="Learn more about Boxonia’s productions and services"
                                    />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hidden md:block">
                    <InSectionLink
                        name="read more"
                        path="/production/about"
                        ariaLabel="Learn more about Boxonia’s productions and services"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhatSection;
