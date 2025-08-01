import ArticleHeader from "../ArticleHeader.jsx";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useEffect, useState, useRef, useCallback } from "react";

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

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const intervalRef = useRef(null);

    const goToNext = useCallback(() => {
        if (currentImageIndex === images.length - 1) {
            setIsTransitioning(false);
            setCurrentImageIndex(0);
            setTimeout(() => setIsTransitioning(true), 50);
        } else {
            setCurrentImageIndex((prevIndex) => prevIndex + 1);
        }
    }, [currentImageIndex, images.length]);

    const goToPrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        intervalRef.current = setInterval(goToNext, 3000);
        return () => clearInterval(intervalRef.current);
    }, [currentImageIndex, goToNext]);

    return (
        <section className="flex flex-col py-8 md:py-16 gap-20 items-center relative">
            <div className="w-full flex items-center flex-col gap-5">
                <ArticleHeader title="behind the scenes" />
                <p className="w-[95%] md:w-2/3 text-center">
                    First-class footage in the best quality is our priority, which is why our team has the latest professional video equipment. We are as well able to provide aerial footage from drones. In case you need footage in the highest quality we will arrange filming with a RED film camera.
                </p>
            </div>

            <div className="w-full overflow-hidden relative">
                <div
                    className={`flex ${
                        isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
                    }`}
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Behind-the-scenes-${index + 1}`}
                            className="w-full flex-shrink-0 object-cover h-full"
                            loading="lazy"
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={goToPrev}
                    aria-label="Previous image"
                    className="absolute left-5 top-1/2 -translate-y-1/2 bg-black text-white cursor-pointer h-10 px-2 rounded opacity-65 hover:opacity-100"
                >
                    <FaLessThan />
                </button>
                <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Next image"
                    className="absolute right-5 top-1/2 -translate-y-1/2 bg-black text-white cursor-pointer h-10 px-2 rounded opacity-65 hover:opacity-100"
                >
                    <FaGreaterThan />
                </button>
            </div>
        </section>
    );
};

export default ProductionSection;
