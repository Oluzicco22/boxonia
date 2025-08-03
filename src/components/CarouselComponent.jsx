import {useEffect, useState} from "react";
import {FaGreaterThan, FaLessThan} from "react-icons/fa";

const CarouselComponent = ({images, navButon}) => {
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
        <div className="w-full overflow-hidden relative h-auto">
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

            {navButon &&
                <>
                    <button onClick={goToPrev} className="absolute left-5 top-1/2 -translate-y-1/2 bg-black text-white cursor-pointer h-10 px-2 rounded opacity-65 hover:opacity-100">
                        <FaLessThan />
                    </button>
                    <button onClick={goToNext} className="absolute right-5 top-1/2 -translate-y-1/2 bg-black text-white cursor-pointer h-10 px-2 rounded opacity-65 hover:opacity-100">
                        <FaGreaterThan />
                    </button>
                </>
            }
        </div>
    )
}

export default CarouselComponent
