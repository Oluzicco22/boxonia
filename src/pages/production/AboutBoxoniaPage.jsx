import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import BoxoniaPillarComponent from "../../components/production/AboutBoxoniaComponent/BoxoniaPillarComponent.jsx";

const AboutBoxoniaPage = () => {
    return (
        <>
            <Header />
            <div className="w-full flex justify-center my-8">
                <ArticleHeader title="what we do" />
            </div>
            <BoxoniaPillarComponent />
            <Footer />
        </>
    )
}

export default AboutBoxoniaPage;
