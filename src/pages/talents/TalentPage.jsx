import Header from "../../components/Header.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import Footer from "../../components/Footer.jsx";
import TalentData from "../../data/talents.json";
import TalentCatalogue from "../../components/talents/TalentCatalogue.jsx";

const TalentPage = () => {
    return (
        <>
            <Header />
            <div className="w-full flex justify-center my-10">
                <ArticleHeader title="talents" />
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[85%] mx-auto gap-16 items-start">
                {TalentData.map((talent, i) => (
                    <TalentCatalogue key={i} props={talent} />
                ))}
            </section>
            <Footer />
        </>
    )
}

export default TalentPage;
