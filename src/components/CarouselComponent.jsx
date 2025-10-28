import { useState } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const CarouselComponent = ({ collections = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prev) =>
            prev === collections.length - 1 ? 0 : prev + 1
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? collections.length - 1 : prev - 1
        );
    };

    return (
        <div className="w-full overflow-hidden relative h-full space-y-6">
            {/* Images container */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {collections.map((collection, i) => (
                    <img
                        key={i}
                        src={collection.img}
                        alt={collection.description}
                        title={collection.title}
                        className="w-full flex-shrink-0 object-cover h-auto md:h-[600px]"
                        loading="lazy"
                    />
                ))}
            </div>

            {/* Prev Button */}
            <button
                onClick={goToPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black text-white cursor-pointer h-5 md:h-10 px-2 rounded opacity-100 md:opacity-65 hover:opacity-100"
            >
                <FaLessThan className="w-3 md:w-5 h-3 md:h-5" />
            </button>

            {/* Next Button */}
            <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white cursor-pointer h-5 md:h-10 px-2 rounded opacity-100 md:opacity-65 hover:opacity-100"
            >
                <FaGreaterThan className="w-3 md:w-5 h-3 md:h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-0.5 md:bottom-0.5 left-1/2 -translate-x-1/2 flex gap-3">
                {collections.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition ${
                            currentIndex === index
                                ? "bg-[#f6b62b] scale-125"
                                : "bg-[#bfbfbf] hover:bg-white"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CarouselComponent;
