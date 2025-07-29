import ArticleHeader from "../ArticleHeader.jsx";
import ProductionImage from "../../assets/production-img.svg"
import { FaGreaterThan, FaLessThan} from "react-icons/fa";

const ProductionSection = () => {
    return (
        <section className="flex flex-col py-8 md:py-16 gap-12 items-center relative">
            <div className="w-full flex items-center flex-col gap-5">
                <ArticleHeader title="behind the scenes" />
                <p className="w-[95%] md:w-2/3 text-center">First-class footage in the best quality is our priority, which is why  our team has the latest professional video equipment. We are as well
                    able to provide aerial footage from drones. In case you need footage in  the highest quality we will arrange filming with a RED film camera.
                </p>
            </div>

            <div className="w-full relative h-full">
                <img
                    src={ProductionImage}
                    alt="Behind-the-scenes production setup"
                    className="w-full h-auto"
                />                <button
                    type="button"
                    aria-label="Previous image"
                    className="absolute left-5 top-1/2 -translate-y-1/2 bg-gray-600 text-white cursor-pointer h-10 px-2 rounded"
                >
                    <FaLessThan />
                </button>
                <button
                    type="button"
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
