import FAQArticle from "./FAQArticle.jsx";
import Faqs from "../../../data/faq.json";
import ArticleHeader from "../ArticleHeader.jsx";

const FAQSection = () => {
    return (
        <section id="faq" className="flex flex-col items-center justify-between gap-10 md:gap-16">
            <div className="tracking-[0.1em] w-full">
                <ArticleHeader title="FAQs"/>
            </div>
            <div className="flex flex-col gap-2 w-[90%] md:w-5/6">
                <FAQArticle articles={Faqs}/>
            </div>

        </section>
    )
}

export default FAQSection;
