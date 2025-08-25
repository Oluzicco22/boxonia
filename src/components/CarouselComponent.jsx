import {useEffect, useState} from "react";
import {FaGreaterThan, FaLessThan} from "react-icons/fa";

const CarouselComponent = ({images, navButon}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex(prev => {
            if(prev % images.length < images.length -1) {
                images.push(images[prev])
                return prev + 1
            }
            return (
                prev + 1 - images.length
            )
        });
    };

    const goToPrev = () => {
        setCurrentIndex(prev => prev - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext()
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full overflow-hidden relative h-full">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`carousel-${i}`}
                        className="w-full flex-shrink-0 object-cover md:h-[500px]"
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
