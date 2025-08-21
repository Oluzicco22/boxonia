import ArticleHeader from "../ArticleHeader.jsx";
import InSectionLink from "../InSectionLink.jsx";
import spotlights from "../../../data/spotlight.json"

const SpotlightSection = () => {
    return (
        <section className="flex flex-col py-4 md:py-12 w-[85%] mx-auto gap-5 items-center relative">
            <ArticleHeader title="in the spotlight" />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-2 items-center w-full">
                {spotlights.filter((spotlight, idx) => idx < 2).map(({image, info}, i) => (
                    <div>
                        <img src={image} alt={`img-${i}`} />
                        <p className="font-normal text-sm text-white mt-2">{info}</p>
                    </div>
                ))}
            </div>
            <InSectionLink name="see more" path="/production/news" />

            <p className="text-[#F6B62B] text-base md:text-4xl leading-16 font-normal border-y-2 border-[#4D4D4D] w-[95%] md:w-3/5 text-center mt-12">
                Audacious, Authentic & Exportable Art forms
            </p>
        </section>
    )
}

export default SpotlightSection
