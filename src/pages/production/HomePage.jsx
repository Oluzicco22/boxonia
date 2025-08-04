import ProductionImage from "../../assets/production-img.svg";
import {Link} from "react-router-dom";

const HomePage = () => {
    const images = [ProductionImage, 'https://res.cloudinary.com/dybmufexj/image/upload/v1753987446/talents_img_z27jjx.png']
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-transparent">
            {['production', 'talents'].map((str, i) => (
                <article key={i} className="flex justify-center items-center capitalize bg-black/65 bg-blend-darken bg-no-repeat bg-cover bg-center" style={{
                    backgroundImage: `url(${images[i]})`,
                }}>
                    <Link
                        to={`/${str}`}
                        className={`text-center border-1 bg-blend-darken font-medium hover:bg-white hover:text-black ${!(i % 2) ? 'border-white bg-white/50' : 'border-black bg-black/65'} text-white px-14 py-2 rounded-md`}>
                        {str}
                    </Link>

                </article>
            ))}
        </main>
    )
}

export default HomePage;
