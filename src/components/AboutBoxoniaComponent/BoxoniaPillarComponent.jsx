import boxoniaPillars from "../../data/our-work.json";
import IdeationImage from "../../assets/ideation.svg";
import End2EndImage from "../../assets/end2end-prod.svg";
import MarketingImage from "../../assets/marketing.svg";
import IpProtectionImage from "../../assets/ip-protection.svg";


const BoxoniaPillarComponent = () => {
    const images = [
        IdeationImage,
        End2EndImage,
        MarketingImage,
        IpProtectionImage
    ]
    return (
        <section className="flex flex-col py-5 px-0 w-full mx-auto items-center">
            <div className="flex flex-col w-full md:gap-10">
                {boxoniaPillars.map((pillar, idx) => (
                    <div key={idx}
                         className="flex justify-center items-center py-32 w-full relative  bg-black/60 bg-blend-darken bg-cover bg-center"
                         style={{
                             backgroundImage: `url(${images[idx]})`,
                         }}
                         >
                        <div className="w-[92%] flex gap-3 text-white flex-col">
                            <h3 className="text-xl font-semibold text-center">{pillar.title}</h3>
                            <p className="text-lg text-justify">{pillar.description}</p>
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
