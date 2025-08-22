import ProductionImage from "../../assets/production-img.svg";
import {Link} from "react-router-dom";
import CArrowIcon from "../../assets/arrow-icon.svg";

const HomePage = () => {
    const images = [ProductionImage, 'https://res.cloudinary.com/dybmufexj/image/upload/v1753987446/talents_img_z27jjx.png']
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-transparent relative">
            <img className="absolute left-1/2 -translate-1/2 top-1/2 md:w-[20%]" src="https://res.cloudinary.com/dybmufexj/image/upload/v1755728729/boxonia_blurprint_1_1_lfdo1w.png" alt="logo" />
            {['production', 'talents'].map((str, i) => (
                <article key={i} className="flex justify-center items-center capitalize bg-black/65 bg-blend-darken bg-no-repeat bg-cover bg-center" style={{
                    backgroundImage: `url(${images[i]})`,
                }}>
                    <Link
                        to={`/${str}`}
                        className={`group text-center font-bold flex items-center text-2xl ${i % 2 ? 'flex-row' : 'flex-row-reverse'} gap-3 hover:bg-white hover:text-black bg-black text-white px-14 py-3 rounded-md`}>
                        {str}
                        <img
                            src={CArrowIcon}
                            alt="arrow"
                            className={`w-20 ${i % 2 ? '' : 'rotate-180'} invert-0 group-hover:invert transition`}
                        />

                    </Link>

                </article>
            ))}
        </main>
    )
}

export default HomePage;
