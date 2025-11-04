import ArticleHeader from "../ArticleHeader.jsx";
import spotlights from "../../../data/spotlight.json";
import { useLocation } from "react-router-dom";

const SpotlightSection = ({ len }) => {
    const location = useLocation();
    const length = len ?? spotlights.length;

    // Hide button if we're on the Talent Spotlight page or News page
    const hideButton =
        location.pathname === "/news" || location.pathname === "/talents/spotlight";

    // Determine the correct link for "See More" button
    const seeMoreLink = location.pathname.startsWith("/talents")
        ? "/talents/spotlight"
        : "/news";

    return (
        <section className="flex flex-col py-8 md:py-20 px-4 md:px-0 md:w-[85%] mx-auto gap-10 items-center relative md:bg-transparent">
            <ArticleHeader title="in the spotlight" />

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-start w-full mt-8">
                {spotlights
                    .filter((spotlight, idx) => idx < length)
                    .map(({ image, info, link }, i) => (
                        <div key={i} className="flex flex-col gap-3 h-full">
                            <div className="md:p-0 rounded-2xl md:rounded-none">
                                <img
                                    src={image}
                                    alt={info || `Spotlight image ${i + 1}`}
                                    className="w-full rounded-3xl md:rounded-none"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex justify-center md:justify-start gap-4 font-normal text-lg text-white">
                                <a
                                    href={link}
                                    target="_blank"
                                    className="text-[#B7B7B7] flex items-center text-[12px] md:text-lg font-normal group md:font-normal hover:text-[#F6B62B] cursor-pointer"
                                >
                                    {info}
                                    <svg
                                        width="51"
                                        height="9"
                                        viewBox="0 0 51 9"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="hidden md:inline-block w-20 text-gray-500 fill-white group-hover:fill-[#F6B62B]"
                                    >
                                        <path d="M50.6358 4.05489C50.831 4.25016 50.831 4.56674 50.6358 4.762L47.4538 7.94398C47.2585 8.13924 46.942 8.13924 46.7467 7.94398C46.5514 7.74872 46.5514 7.43214 46.7467 7.23687L49.5751 4.40845L46.7467 1.58002C46.5514 1.38476 46.5514 1.06818 46.7467 0.872913C46.942 0.677651 47.2585 0.677651 47.4538 0.872913L50.6358 4.05489ZM0.120117 4.40845V3.90845H50.2822V4.40845V4.90845H0.120117V4.40845Z" />
                                    </svg>
                                </a>
                            </div>

                        </div>
                    ))}
            </div>

            {/* Conditional "See More" Button */}
            {!hideButton && (
                <a
                    href={seeMoreLink}
                    className="text-center self-center sm:self-auto -mt-3 md:mt-0 text-nowrap text-xs sm:text-sm border-1 font-normal hover:bg-white hover:text-black border-[#989898]
                    text-[#989898] px-7 sm:px-20 py-2 sm:py-3 rounded-lg cursor-pointer"
                >
                    see more
                </a>
            )}
        </section>
    );
};

export default SpotlightSection;
