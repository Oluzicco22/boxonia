import ArticleHeader from "../ArticleHeader.jsx";
import CarouselComponent from "../../CarouselComponent.jsx";

const ProductionSection = () => {
    const products = [
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1753986125/BTS_0_oopczf.png", // BTS-0
            title: "Camera crew on set",
            description: "Boxonia production crew operating cameras for a live film project.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762107725/BTS_1_kgvjot.png", // BTS-1
            title: "Drone filming session",
            description: "Behind the scenes aerial drone filming for cinematic visuals.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1753986123/BTS_3_yinydv.png", // BTS-2
            title: "Director and crew",
            description: "Director and crew coordinating a film sequence on set.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762107977/BTS_2_ostr8h.png", // BTS-3
            title: "Cinematographer at work",
            description: "Boxonia cinematographer adjusting RED camera for precision shots.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1760110267/BTS_7_oquwkh.png", // BTS-4
            title: "Lighting preparation",
            description: "Film crew setting up professional lighting equipment on location.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762154402/BTS_6_wxci8r.png", // BTS-5
            title: "Drone cinematography",
            description: "Aerial drone capturing wide-angle footage for Boxonia projects.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1760110307/BTS_8_zzluki.png",
            title: "Actors and crew",
            description: "Actors and production crew working together during filming.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762155631/BTS-7-new_dv6ox7.png",
            title: "Cinematic setup",
            description: "Boxonia crew preparing cinematic shots with advanced equipment.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762155739/BTS-8-new_lpck7z.png",
            title: "On-set directing",
            description: "Director overseeing behind-the-scenes production workflow.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762155797/BTS-9-new_bfmgj6.png",
            title: "Camera crew on set",
            description: "Boxonia production crew operating cameras for a live film project.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762155794/BTS-10-new_dhopv3.png",
            title: "Director and crew",
            description: "Director and crew coordinating a film sequence on set.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762155791/BTS-11_aqjguw.png",
            title: "Cinematographer at work",
            description: "Boxonia cinematographer adjusting RED camera for precision shots.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762155792/BTS-12_a3fehq.png",
            title: "Lighting preparation",
            description: "Film crew setting up professional lighting equipment on location.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762155794/BTS-13_zyvdmp.png",
            title: "Drone cinematography",
            description: "Aerial drone capturing wide-angle footage for Boxonia projects.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1760110372/BTS_5_s4pkjc.png",
            title: "Actors and crew",
            description: "Actors and production crew working together during filming.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762155796/BTS-15_rgp4f0.png",
            title: "Cinematic setup",
            description: "Boxonia crew preparing cinematic shots with advanced equipment.",
        },
        {
            img: "https://res.cloudinary.com/dybmufexj/image/upload/v1762155822/BTS-16_dbxva7.png",
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
