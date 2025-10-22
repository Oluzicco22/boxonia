import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import SpotlightSection from "../../components/production/LandingPage/SpotlightSection.jsx";

const TalentSpotlightPage = () => {

    return (
        <>
            <Header/>
            <div className="mt-23">
                <SpotlightSection len="9"/>
            </div>
            <Footer/>
        </>
    )
}

export default TalentSpotlightPage;
