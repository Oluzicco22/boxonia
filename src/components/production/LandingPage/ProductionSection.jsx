import ArticleHeader from "../ArticleHeader.jsx";
import BTSImage0 from "../../../assets/BTS 0.png"
import BTSImage1 from "../../../assets/BTS 1.png"
import BTSImage2 from "../../../assets/BTS 2.png"
import BTSImage3 from "../../../assets/BTS 3.png"
import BTSImage4 from "../../../assets/BTS 4.png"
import BTSImage5 from "../../../assets/BTS 5.png"
import BTSImage6 from "../../../assets/BTS 6.png"
import BTSImage7 from "../../../assets/BTS 7.png"
import BTSImage8 from "../../../assets/BTS 8.png"
import BTSImage9 from "../../../assets/BTS 9.png"

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
        BTSImage0,
        BTSImage1,
        BTSImage2,
        BTSImage3,
        BTSImage4,
        BTSImage5,
        BTSImage6,
        BTSImage7,
        BTSImage8,
        BTSImage9,
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
