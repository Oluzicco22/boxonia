import {Link} from "react-router-dom";
import CArrowIcon from "../../assets/arrow-icon.svg";

const HomePage = () => {
    const images = ["https://res.cloudinary.com/dybmufexj/image/upload/v1755903110/real_prod_img_ln9vja.png", 'https://res.cloudinary.com/dybmufexj/image/upload/v1755902990/talents_img_z27jjx.png']
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-transparent relative min-w-sm">
            <img
                className="absolute left-1/2 -translate-1/2 top-1/2 md:top-auto md:bottom-1/12 w-1/2 sm:w-1/3 md:w-1/5"
                src="https://res.cloudinary.com/dybmufexj/image/upload/v1755728729/boxonia_blurprint_1_1_lfdo1w.png"
                alt="logo"
            />
            {['production', 'talents'].map((str, i) => (
                <article key={i} className="flex justify-center items-center capitalize bg-black/65 bg-blend-darken bg-no-repeat bg-cover bg-center" style={{
                    backgroundImage: `url(${images[i]})`,
                }}>
                    <Link
                        to={`/${str}`}
                        className={`group text-center font-bold flex items-center text-base md:text-xl ${i % 2 ? 'flex-row' : 'flex-row-reverse'} gap-3 hover:bg-[#F6B62B] hover:text-black bg-black text-white px-12 py-4 rounded-[10px]`}>
                        {str}
                        <img
                            src={CArrowIcon}
                            alt="arrow"
                            className={`md:w-10 ${i % 2 ? '' : 'rotate-180'} invert-0 group-hover:invert transition`}
                        />

                    </Link>

                </article>
            ))}
        </main>
    )
}

export default HomePage;
