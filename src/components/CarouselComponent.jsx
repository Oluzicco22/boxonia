import {useEffect, useState} from "react";
import {FaGreaterThan, FaLessThan} from "react-icons/fa";

const CarouselComponent = ({collections, navButon, showIndicator = false, length}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex(prev => {
            if(prev % collections.length < collections.length -1) {
                collections.push(collections[prev])
                return prev + 1
            }
            return (
                prev + 1 - collections.length
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
        <div className="w-full overflow-hidden relative h-full space-y-6">
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
                        className="w-full flex-shrink-0 object-cover md:h-[500px]"
                        loading="lazy"
                    />
                ))}
            </div>
            {showIndicator &&
                <div className="md:hidden flex justify-center space-x-5 md:space-x-10">
                    {[...Array(length)].map((_, i) => (
                        <span key={i} className={`w-1.5 h-1.5 ${i === currentIndex % length ? 'bg-yellow-400' : 'bg-white'} rounded-full`}></span>
                    ))}
                </div>
            }

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
