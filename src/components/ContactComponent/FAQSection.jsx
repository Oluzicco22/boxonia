import FAQArticle from "./FAQArticle.jsx";
import Faqs from "../../data/faq.json";
import ArticleHeader from "../ArticleHeader.jsx";


const FAQSection = () => {
    return (
        <section id="faq" className="flex flex-col items-center my-12 justify-between gap-16">
                <ArticleHeader title="FAQ" />
                <div className="flex flex-col gap-2 w-5/6 md:w-2/3">
                    <FAQArticle articles={Faqs} />
                </div>

        </section>
    )
}

export default FAQSection;
