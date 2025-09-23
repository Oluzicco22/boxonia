import { Link } from "react-router-dom";
import CArrowIcon from "../../assets/arrow-icon.svg";

const HomePage = () => {
    const images = [
        "https://res.cloudinary.com/dybmufexj/image/upload/v1755903110/real_prod_img_ln9vja.png",
        "https://res.cloudinary.com/dybmufexj/image/upload/v1755902990/talents_img_z27jjx.png"
    ];

    const sections = [
        {
            slug: "production",
            title: "Film & TV Production",
            description:
                "Explore Boxonia’s world-class film and television productions crafted for local and global audiences."
        },
        {
            slug: "talents",
            title: "Talent Management",
            description:
                "Discover and connect with talented African creatives represented by Boxonia."
        }
    ];

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-transparent relative min-w-sm">
            <img
                className="absolute left-1/2 -translate-1/2 top-1/2 md:top-auto md:bottom-1/12 w-1/2 sm:w-1/3 md:w-1/5"
                src="https://res.cloudinary.com/dybmufexj/image/upload/v1755728729/boxonia_blurprint_1_1_lfdo1w.png"
                alt="Boxonia Blueprint Logo"
            />

            {sections.map((item, i) => (
                <section
                    key={item.slug}
                    className="flex justify-center items-center capitalize bg-black/65 bg-blend-darken bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${images[i]})`
                    }}
                >
                    <article className="text-center">
                        <h2 className="sr-only">{item.title}</h2>
                        <p className="sr-only">{item.description}</p>

                        <Link
                            to={`/${item.slug}`}
                            className={`group text-center font-bold flex items-center text-base md:text-xl ${
                                i % 2 ? "flex-row" : "flex-row-reverse"
                            } gap-3 hover:bg-[#F6B62B] hover:text-black bg-black text-white px-12 py-4 rounded-[10px]`}
                            aria-label={`Explore ${item.title}`}
                        >
                            {item.slug}
                            <img
                                src={CArrowIcon}
                                alt="arrow icon"
                                className={`md:w-10 ${i % 2 ? "" : "rotate-180"} invert-0 group-hover:invert transition`}
                            />
                        </Link>
                    </article>
                </section>
            ))}
        </main>
    );
};

export default HomePage;
