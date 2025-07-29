import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import WeAreBoxoniaComponent from "../components/BoxoniaStory/WeAreBoxoniaComponent.jsx";
import ValuesComponent from "../components/BoxoniaStory/ValuesComponent.jsx";
import BoxoniaAlumniComponent from "../components/BoxoniaStory/BoxoniaAlumniComponent.jsx";

const BoxoniaStoryPage = () => {
    return (
        <main className="text-white">
            <Header />
            <WeAreBoxoniaComponent />
            <ValuesComponent />
            <BoxoniaAlumniComponent />
            <Footer />
        </main>
    )
}

export default BoxoniaStoryPage;
