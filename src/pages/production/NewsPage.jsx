import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import SpotlightSection from "../../components/production/LandingPage/SpotlightSection.jsx";

const NewsPage = () => {

    return (
        <>
            <Header/>
            <div className="mt-23">
                <SpotlightSection />
            </div>
            <Footer/>
        </>
    )
}

export default NewsPage;
