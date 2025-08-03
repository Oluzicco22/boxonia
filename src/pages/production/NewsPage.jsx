import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import FreedomImage from "../../assets/freedom-way.svg"
import {Link} from "react-router-dom";

const NewsPage = () => {
    const elements = [{
        image: "https://res.cloudinary.com/dybmufexj/image/upload/v1753986253/news-img1_ax1owj.svg",
        info: "Chuks Joseph stars in Kizz Daniel’s Police Video"
    },{
        image: FreedomImage,
        info: "Taye Arimoro’s Lead Role in New cinema movie."
    }]
    return (
        <>
            <Header />
            <div className="w-full flex justify-center my-10">
                <ArticleHeader title="news" />
            </div>

            <section className="grid grid-cols-1 my-16 md:grid-cols-2 w-[88%] mx-auto gap-16 items-center">
                {elements.map(({image, info}, i) => (
                    <article key={i} className="flex flex-col gap-5 items-center">
                        <div
                            className="relative h-72 md:h-[40vh] w-full bg-black/10 bg-blend-darken bg-contain bg-no-repeat md:bg-cover bg-center"
                            style={{ backgroundImage: `url(${image})` }}>
                            <div className="absolute inset-0 bg-black/30 mix-blend-darken"></div>

                        </div>
                        <p className="flex text-xl font-normal">{info}</p>
                        <Link to="/#" className="inline-block font-medium text-base py-2 px-24 text-white border border-white hover:bg-white hover:text-black rounded-md">watch</Link>

                    </article>
                ))}
            </section>
            <Footer />
        </>
    )
}

export default NewsPage;
