import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import SpotlightSection from "../../components/production/LandingPage/SpotlightSection.jsx";
import { Helmet } from "react-helmet-async";

const TalentSpotlightPage = () => {

    return (
        <>
            <Helmet>
                <title>Boxonia Talent Spotlight | Featured Actors & Creatives</title>

                <meta
                    name="description"
                    content="Explore featured talents from Boxonia. Discover top actors, models, and creatives shaping African storytelling and entertainment."
                />

                <meta
                    name="keywords"
                    content="Boxonia talents, African actors, Nigerian actors, talent spotlight, film industry Nigeria"
                />

                <link rel="canonical" href="https://www.boxonia.com/talents/spotlight" />

                {/* Open Graph */}
                <meta property="og:title" content="Boxonia Talent Spotlight" />
                <meta
                    property="og:description"
                    content="Discover standout talents from Boxonia’s creative network."
                />
                <meta property="og:url" content="https://www.boxonia.com/talents/spotlight" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:title" content="Boxonia Talent Spotlight" />
                <meta
                    name="twitter:description"
                    content="Explore top Boxonia talents shaping African entertainment."
                />
            </Helmet>

            <Header/>
            <div className="mt-23">
                <SpotlightSection />
            </div>
            <Footer/>
        </>
    )
}

export default TalentSpotlightPage;