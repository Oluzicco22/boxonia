import ArticleHeader from "../ArticleHeader.jsx";
import CarouselComponent from "../../CarouselComponent.jsx";

const ProductionSection = () => {
    const images = [
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986125/BTS_0_oopczf.png",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986124/BTS_1_kgvjot.png",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986123/BTS_2_ostr8h.png",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986123/BTS_3_yinydv.png",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986207/BTS_4_ahhodz.png",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986192/BTS_5_s4pkjc.png",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986125/BTS_6_wxci8r.png",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986126/BTS_7_oquwkh.png",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986127/BTS_8_zzluki.png",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1753986131/BTS_9_thszod.png",
    ];

    return (
        <section className="flex flex-col py-8 md:py-16 gap-20 items-center relative">
            <div className="w-full flex items-center flex-col gap-5">
                <ArticleHeader title="behind the scenes" />
                <p className="w-[95%] md:w-2/3 text-center">
                    First-class footage in the best quality is our priority, which is why our team has the latest professional video equipment. We are as well able to provide aerial footage from drones. In case you need footage in the highest quality we will arrange filming with a RED film camera.
                </p>
            </div>
            <CarouselComponent images={images} navButon={true} />
        </section>
    );
};

export default ProductionSection;
