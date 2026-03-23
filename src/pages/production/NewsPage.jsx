import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import SpotlightSection from "../../components/production/LandingPage/SpotlightSection.jsx";
import { Helmet } from "react-helmet-async";

const NewsPage = () => {

    return (
        <>
            <Helmet>
                <title>Boxonia News | Film, Talent & Entertainment Updates</title>
                <meta
                    name="description"
                    content="Stay updated with the latest news, releases and highlights from Boxonia’s films, talents and creative productions."
                />
                <link rel="canonical" href="https://www.boxonia.com/news" />

                {/* Open Graph */}
                <meta property="og:title" content="Boxonia News | Film, Talent & Entertainment Updates" />
                <meta
                    property="og:description"
                    content="Latest updates, stories and highlights from Boxonia."
                />
                <meta property="og:url" content="https://www.boxonia.com/news" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.boxonia.com/boxonia-icon.svg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Boxonia News | Film, Talent & Entertainment Updates" />
                <meta
                    name="twitter:description"
                    content="Catch up on the latest from Boxonia’s productions and talents."
                />
                <meta name="twitter:image" content="https://www.boxonia.com/boxonia-icon.svg" />
            </Helmet>

            <Header/>
            <div className="mt-23">
                <SpotlightSection />
            </div>
            <Footer/>
        </>
    )
}

export default NewsPage;