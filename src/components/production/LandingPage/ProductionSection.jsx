import ArticleHeader from "../ArticleHeader.jsx";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useEffect, useState } from "react";

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

    const [currentIndex, setCurrentIndex] = useState(1);
    const [transition, setTransition] = useState(true);

    const totalImages = images.length;
    const extendedImages = [images[totalImages - 1], ...images, images[0]];

    const goToNext = () => {
        setCurrentIndex(prev => prev + 1);
    };

    const goToPrev = () => {
        setCurrentIndex(prev => prev - 1);
    };

    const handleTransitionEnd = () => {
        if (currentIndex === extendedImages.length - 1) {
            setTransition(false);
            setCurrentIndex(1);
        }

        if (currentIndex === 0) {
            setTransition(false);
            setCurrentIndex(extendedImages.length - 2);
        }
    };

    useEffect(() => {
        if (!transition) {
            requestAnimationFrame(() => setTransition(true));
        }
    }, [transition]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <section className="flex flex-col py-8 md:py-16 gap-20 items-center relative">
            <div className="w-full flex items-center flex-col gap-5">
                <ArticleHeader title="behind the scenes" />
                <p className="w-[95%] md:w-2/3 text-center">
                    First-class footage in the best quality is our priority, which is why our team has the latest professional video equipment. We are as well able to provide aerial footage from drones. In case you need footage in the highest quality we will arrange filming with a RED film camera.
                </p>
            </div>

            <div className="w-full overflow-hidden relative h-[450px]">
                <div
                    className={`flex ${transition ? 'transition-transform duration-700 ease-in-out' : ''}`}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedImages.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`carousel-${i}`}
                            className="w-full flex-shrink-0 object-cover h-full"
                            loading="lazy"
                        />
                    ))}
                </div>

                <button onClick={goToPrev} className="absolute left-5 top-1/2 -translate-y-1/2 bg-black text-white cursor-pointer h-10 px-2 rounded opacity-65 hover:opacity-100">
                    <FaLessThan />
                </button>
                <button onClick={goToNext} className="absolute right-5 top-1/2 -translate-y-1/2 bg-black text-white cursor-pointer h-10 px-2 rounded opacity-65 hover:opacity-100">
                    <FaGreaterThan />
                </button>
            </div>
        </section>
    );
};

export default ProductionSection;
