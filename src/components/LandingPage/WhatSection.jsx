import ArticleHeader from "../ArticleHeader.jsx";
import InSectionLink from "../InSectionLink.jsx";
import boxoniaPillars from "../../data/our-work.json";

const WhatSection = () => {
    return (
        <section className="flex flex-col py-16 w-[93%] mx-auto gap-12 items-center">
            <ArticleHeader title="what we do" />
            <div className="flex flex-col md:flex-row gap-12 w-full text-white">
                {boxoniaPillars.map(({title, description}, i) => (
                    <article key={i} className="flex gap-2 flex-col w-full md:w-1/3">
                        <h3 className="text-center text-gray-400 text-xl font-bold">{title}</h3>
                        <p className="">{description}</p>
                    </article>
                ))}
            </div>
            <InSectionLink name="read more" path="/about" />
        </section>
    )
}

export default WhatSection
