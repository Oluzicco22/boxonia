import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import SpotlightSection from "../../components/production/LandingPage/SpotlightSection.jsx";

const NewsPage = () => {

    return (
        <>
            <Header/>
            <div className="mt-20">
                <SpotlightSection len="7"/>
            </div>
            <Footer/>
        </>
    )
}

export default NewsPage;
