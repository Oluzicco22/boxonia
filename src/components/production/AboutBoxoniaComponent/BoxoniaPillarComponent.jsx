import boxoniaPillars from "../../../data/our-work.json";
import IdeationImage from "../../../assets/ideation.svg";
import MarketingImage from "../../../assets/marketing.svg";

const BoxoniaPillarComponent = () => {
    const images = [
        IdeationImage,
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986782/end2end-prod_is6fmt.svg",
        MarketingImage,
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986783/ip-protection_v9hifb.svg",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1755887390/mgt-image_k0eukl.png"
    ]
    return (
        <section className="flex flex-col md:py-5 px-0 w-full mx-auto items-center">
            <div className="flex flex-col w-full gap-12 md:gap-20">
                {boxoniaPillars.map((pillar, idx) => (
                    <article key={idx}
                             className="flex justify-center items-center py-10 md:py-6 w-full relative bg-cover bg-center bg-no-repeat bg-blend-darken bg-black/10"
                             style={{
                                 backgroundImage: `url(${images[idx]})`,
                                 backgroundSize: "cover"
                             }}
                    >
                        <div className="w-11/12 md:w-4/5 lg:w-3/4 flex gap-4 text-white flex-col">
                            <h3 className="text-base md:text-3xl font-semibold md:text-center text-[#f6b62b] uppercase">{pillar.title}</h3>
                            <p className="text-sm md:text-lg lg:text-xl font-light text-justify leading-relaxed whitespace-pre-line"
                               dangerouslySetInnerHTML={{__html: pillar.description}}></p>
                            <div className="flex flex-col gap-8">
                                {pillar.children && pillar.children.map((child, i) => (
                                    <div key={i} className="flex flex-col gap-1">
                                        <h4 className="font-medium text-base md:text-xl text-[#f6b62b]">{child.title}</h4>
                                        <p className="text-sm md:text-lg lg:text-xl text-justify font-light">{child.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default BoxoniaPillarComponent;
