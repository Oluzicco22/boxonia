import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

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

            {/* Left Overlay */}
            <div className="absolute left-0 top-0 h-full w-12 bg-black/50 flex items-center justify-center pointer-events-none">
                <button
                    onClick={goToPrev}
                    className="pointer-events-auto absolute left-3 top-1/2 -translate-y-1/2 border-2 border-white text-white rounded-full p-1 md:p-1.5 flex items-center justify-center group transition-colors hover:border-[#F6B62B]"
                >
                    <GoChevronLeft className="w-3 h-3 md:w-4 md:h-4 group-hover:text-[#F6B62B] transition-colors" />
                </button>
            </div>

            {/* Right Overlay */}
            <div className="absolute right-0 top-0 h-full w-12 bg-black/50 flex items-center justify-center pointer-events-none">
                <button
                    onClick={goToNext}
                    className="pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2 border-2 border-white text-white rounded-full p-1 md:p-1.5 flex items-center justify-center group transition-colors hover:border-[#F6B62B]"
                >
                    <GoChevronRight className="w-3 h-3 md:w-4 md:h-4 group-hover:text-[#F6B62B] transition-colors" />
                </button>
            </div>

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
