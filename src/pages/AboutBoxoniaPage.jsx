import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ArticleHeader from "../components/ArticleHeader.jsx";
import BoxoniaPillarComponent from "../components/AboutBoxoniaComponent/BoxoniaPillarComponent.jsx";

const AboutBoxoniaPage = () => {
    return (
        <main className="text-white">
            <Header />
            <div className="w-full flex justify-center my-8">
                <ArticleHeader title="what we do" />
            </div>
            <BoxoniaPillarComponent />
            <Footer />
        </main>
    )
}

export default AboutBoxoniaPage;
