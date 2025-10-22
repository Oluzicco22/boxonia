import ArticleHeader from "../ArticleHeader.jsx";
import CarouselComponent from "../../CarouselComponent.jsx";

const ProductionSection = () => {
    const products = [
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1753986125/BTS_0_oopczf.png",
            title: "Camera crew on set",
            description: "Boxonia production crew operating cameras for a live film project.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1753986124/BTS_1_kgvjot.png",
            title: "Drone filming session",
            description: "Behind the scenes aerial drone filming for cinematic visuals.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1760110407/BTS_2_ostr8h.png",
            title: "Director and crew",
            description: "Director and crew coordinating a film sequence on set.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1753986123/BTS_3_yinydv.png",
            title: "Cinematographer at work",
            description: "Boxonia cinematographer adjusting RED camera for precision shots.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1761064247/BTS_4_ahhodz.png",
            title: "Lighting preparation",
            description: "Film crew setting up professional lighting equipment on location.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1760110372/BTS_5_s4pkjc.png",
            title: "Drone cinematography",
            description: "Aerial drone capturing wide-angle footage for Boxonia projects.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1761064260/BTS_6_wxci8r.png",
            title: "Actors and crew",
            description: "Actors and production crew working together during filming.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1760110267/BTS_7_oquwkh.png",
            title: "Cinematic setup",
            description: "Boxonia crew preparing cinematic shots with advanced equipment.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1760110307/BTS_8_zzluki.png",
            title: "On-set directing",
            description: "Director overseeing behind-the-scenes production workflow.",
        },
    ];

    return (
        <section aria-labelledby="production-heading" className="flex flex-col mb-6 md:mb-0 py-0 gap-10 items-center relative">
            <div className="w-full flex items-center flex-col gap-10">
                <div className="md:w-[85%] w-full">
                    <ArticleHeader title="Behind the Scenes" id="production-heading"/>
                </div>
            </div>
            <CarouselComponent
                collections={products}
                navButon={false}
                length={products.length}
                showIndicator={true}
            />
        </section>
    );
};

export default ProductionSection;
