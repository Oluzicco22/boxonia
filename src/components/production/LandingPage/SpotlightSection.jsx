import ArticleHeader from "../ArticleHeader.jsx";
import spotlights from "../../../data/spotlight.json"

const SpotlightSection = ({len = 2}) => {
    return (
        <section className="flex flex-col py-4 md:py-12 w-[85%] mx-auto gap-8 items-center relative">
            <ArticleHeader title="in the spotlight" />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 items-center w-full">
                {spotlights.filter((spotlight, idx) => idx < len).map(({image, info}, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <img src={image} alt={`img-${i}`} />
                        <p className="font-normal text-sm text-white mt-2">{info}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SpotlightSection
