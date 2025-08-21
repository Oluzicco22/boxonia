import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import spotlights from "../../data/spotlight.json";

const NewsPage = () => {

    return (
        <>
            <Header />
            <div className="w-full flex justify-center mb-10 md:mt-40">
                <ArticleHeader title="in the spotlight" />
            </div>

            <section className="grid grid-cols-1 my-16 md:grid-cols-2 w-11/12 mx-auto gap-8 items-center">
                {spotlights.map(({image, info}, i) => (
                    <article key={i} className="flex flex-col gap-2">
                        <img src={image} className="w-auto" alt={`img-${i}`} />
                        <p className="font-normal text-sm text-white mt-2">{info}</p>
                    </article>
                ))}
            </section>
            <Footer />
        </>
    )
}

export default NewsPage;
