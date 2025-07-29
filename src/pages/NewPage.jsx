import Header from "../components/Header.jsx";
import ArticleHeader from "../components/ArticleHeader.jsx";
import Footer from "../components/Footer.jsx";
import HeroImage from "../assets/hero.png";
import {Link} from "react-router-dom";

const NewPage = () => {
    return (
        <main className="text-white">
            <Header />
            <div className="w-full flex justify-center my-10">
                <ArticleHeader title="news" />
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 w-[88%] mx-auto gap-16 items-center">
                {[...Array(2).keys()].map((_, i) => (
                    <article key={i} className="flex flex-col gap-5 items-start">
                        <div
                            className="relative h-[40vh] w-full bg-black/70 bg-blend-darken bg-cover bg-center"
                            style={{ backgroundImage: `url(${HeroImage})` }}>
                            <div className="absolute inset-0 bg-black/30 mix-blend-darken"></div>

                        </div>
                        <p className="text-xl font-normal w-3/6">Chuks Joseph stars in Kizz Daniel’s Police Video</p>
                        <Link to="/#" className="inline-block font-medium text-base py-2 px-24 text-white border border-white hover:bg-white hover:text-black rounded-md">watch</Link>

                    </article>
                ))}
            </section>
            <Footer />
        </main>
    )
}

export default NewPage;
