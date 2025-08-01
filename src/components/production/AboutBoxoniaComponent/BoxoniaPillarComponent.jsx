import boxoniaPillars from "../../../data/our-work.json";
import IdeationImage from "../../../assets/ideation.svg";
import MarketingImage from "../../../assets/marketing.svg";

const BoxoniaPillarComponent = () => {
    const images = [
        IdeationImage,
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986782/end2end-prod_is6fmt.svg",
        MarketingImage,
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986783/ip-protection_v9hifb.svg"
    ]
    return (
        <section className="flex flex-col py-5 px-0 w-full mx-auto items-center">
            <div className="flex flex-col w-full md:gap-10">
                {boxoniaPillars.map((pillar, idx) => (
                    <div key={idx}
                         className="flex justify-center items-center py-32 w-full relative bg-black/30 bg-blend-darken bg-cover bg-center bg-no-repeat"
                         style={{
                             backgroundImage: `url(${images[idx]})`,
                         }}
                         >
                        <div className="w-11/15 flex gap-3 text-white flex-col">
                            <h3 className="text-3xl font-bold text-center">{pillar.title}</h3>
                            <p className="text-lg font-normal text-justify">{pillar.description}</p>
                            {pillar.children && pillar.children.map((child, i) => (
                                <div key={i}>
                                    <h4 className="italic font-medium text-lg">{child.title}</h4>
                                    <p className="text-justify">{child.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BoxoniaPillarComponent;
