import ArticleHeader from "../ArticleHeader.jsx";
import spotlights from "../../../data/spotlight.json"
import CArrowIcon from "../../../assets/arrow-icon.svg";

const SpotlightSection = ({len = 2}) => {
    return (
        <section className="bg-[#131313] md:bg-transparent py-10 md:py-0">
            <div className="flex flex-col py-4 md:py-0 w-[93%] md:w-[85%] mx-auto gap-16 items-center relative">
                <ArticleHeader title="in the spotlight"/>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-center w-full">
                    {spotlights.filter((spotlight, idx) => idx < len).map(({image, info}, i) => (
                        <div key={i} className="flex flex-col gap-4 md:gap-2">
                            <div className="px-2 p-0 rounded-2xl md:rounded-none">
                                <img
                                    src={image}
                                    alt={info || `Spotlight image ${i + 1}`}
                                    className="w-full rounded-3xl md:rounded-none"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex justify-center md:justify-start gap-4 font-normal text-lg text-white">
                                <h3 className="text-white text-xs md:text-lg font-normal md:font-semibold">{info}</h3>
                                <img
                                    src={CArrowIcon}
                                    alt=""
                                    className="w-20 hidden md:flex"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SpotlightSection
