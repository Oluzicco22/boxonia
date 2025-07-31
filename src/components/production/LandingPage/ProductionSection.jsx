import ArticleHeader from "../ArticleHeader.jsx";

import { FaGreaterThan, FaLessThan} from "react-icons/fa";
import {useState} from "react";

const ProductionSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

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
        <section className="flex flex-col py-8 md:py-16 gap-12 items-center relative">
            <div className="w-full flex items-center flex-col gap-5">
                <ArticleHeader title="behind the scenes" />
                <p className="w-[95%] md:w-2/3 text-center">First-class footage in the best quality is our priority, which is why  our team has the latest professional video equipment. We are as well
                    able to provide aerial footage from drones. In case you need footage in  the highest quality we will arrange filming with a RED film camera.
                </p>
            </div>

            <div className="w-full relative h-full transition-shadow duration-300">
                <img
                    src={images[currentImageIndex]}
                    alt={`Behind-the-scenes-${currentImageIndex + 1}`}
                    className="w-full h-auto transition-opacity duration-300"
                    loading="lazy"
                />
                <button
                    type="button"
                    onClick={goToPrev}
                    aria-label="Previous image"
                    className="absolute left-5 top-1/2 -translate-y-1/2 bg-black text-white cursor-pointer h-15 px-2 rounded-xs opacity-65"
                >
                    <FaLessThan />
                </button>
                <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Next image"
                    className="absolute right-5 top-1/2 -translate-y-1/2 bg-black text-white cursor-pointer h-15 px-2 rounded-xs opacity-65"
                >
                    <FaGreaterThan />
                </button>
            </div>

        </section>
    )
}


export default ProductionSection
