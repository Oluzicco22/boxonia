import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import WeAreBoxoniaComponent from "../../components/production/BoxoniaStory/WeAreBoxoniaComponent.jsx";
import ValuesComponent from "../../components/production/BoxoniaStory/ValuesComponent.jsx";
import BoxoniaAlumniComponent from "../../components/production/BoxoniaStory/BoxoniaAlumniComponent.jsx";

const BoxoniaStoryPage = () => {
    return (
        <>
            <Header />
            <WeAreBoxoniaComponent />
            <ValuesComponent />
            <BoxoniaAlumniComponent />
            <Footer />
        </>
    )
}

export default BoxoniaStoryPage;
