import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import WeAreBoxoniaComponent from "../../components/production/BoxoniaStory/WeAreBoxoniaComponent.jsx";
import ValuesComponent from "../../components/production/BoxoniaStory/ValuesComponent.jsx";
import BoxoniaAlumniComponent from "../../components/production/BoxoniaStory/BoxoniaAlumniComponent.jsx";

const BoxoniaStoryPage = () => {
    return (
        <div className="bg-black/60 bg-blend-darken bg-no-repeat bg-[center_right] bg-auto">
            <Header/>
            <div className="mt-24 mb-16 md:mb-0 md:mt-32 grid gap-[100px]">
                <WeAreBoxoniaComponent/>
                <ValuesComponent/>
                <BoxoniaAlumniComponent/>
            </div>
            <Footer/>
        </div>
    )
}

export default BoxoniaStoryPage;
