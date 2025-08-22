import ArticleHeader from "../ArticleHeader.jsx";
import spotlights from "../../../data/spotlight.json"
import CArrowIcon from "../../../assets/arrow-icon.svg";

const SpotlightSection = ({len = 2}) => {
    return (
        <section className="flex flex-col py-4 md:py-0 w-[85%] mx-auto gap-16 items-center relative">
            <ArticleHeader title="in the spotlight" />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-center w-full">
                {spotlights.filter((spotlight, idx) => idx < len).map(({image, info}, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <div className="px-2 py-3 md:p-0 rounded-2xl md:rounded-none bg-[#69696980] md:bg-none ">
                            <img src={image} alt={`img-${i}`} className="w-full rounded-3xl md:rounded-none" />
                        </div>
                        <p className="flex gap-4 font-normal text-lg text-white">
                            <span>{info}</span>
                            <img
                                src={CArrowIcon}
                                alt="arrow"
                                className="w-20"
                            />
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SpotlightSection
