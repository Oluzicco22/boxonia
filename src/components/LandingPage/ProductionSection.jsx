import ArticleHeader from "../ArticleHeader.jsx";
import BTSImage0 from "../../assets/BTS 0.png"
import { FaGreaterThan, FaLessThan} from "react-icons/fa";
import {useState} from "react";

const ProductionSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images);
    };

    const goToPrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images) % images);
    };

    const images = [
        BTSImage0,
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
                    className="absolute left-5 top-1/2 -translate-y-1/2 bg-gray-600 text-white cursor-pointer h-10 px-2 rounded"
                >
                    <FaLessThan />
                </button>
                <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Next image"
                    className="absolute right-5 top-1/2 -translate-y-1/2 bg-gray-600 text-white cursor-pointer h-10 px-2 rounded"
                >
                    <FaGreaterThan />
                </button>
            </div>

        </section>
    )
}


export default ProductionSection
