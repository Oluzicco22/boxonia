import ArticleHeader from "../ArticleHeader.jsx";
import HeroImage from "../../assets/hero.png"

const NewsSection = () => {
    return (
        <section className="flex flex-col py-4 md:py-8 gap-5 items-center relative">
            <ArticleHeader title="news & updates" />
            <div className="grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-12 items-center">
                <img src={HeroImage} alt="hero" />
                <img src={HeroImage} className="hidden md:inline-block" alt="hero" />
            </div>

            <p className="text-gray-600 text-base md:text-2xl leading-16 font-semibold border-y-2 border-gray-600 w-[95%] md:w-3/5 text-center">Audacious, Authentic & Exportable Art forms</p>
        </section>
    )
}


export default NewsSection
