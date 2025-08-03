import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import WeAreBoxoniaComponent from "../../components/production/BoxoniaStory/WeAreBoxoniaComponent.jsx";
import ValuesComponent from "../../components/production/BoxoniaStory/ValuesComponent.jsx";
import BoxoniaAlumniComponent from "../../components/production/BoxoniaStory/BoxoniaAlumniComponent.jsx";

const BoxoniaStoryPage = () => {
    return (
        <div className="bg-black/60 bg-blend-darken bg-no-repeat bg-[center_right] bg-auto" style={{
            backgroundImage: `url(https://res.cloudinary.com/dybmufexj/image/upload/v1754222299/reels-img_l7djxx.png)`
        }}>
            <Header />
            <WeAreBoxoniaComponent />
            <ValuesComponent />
            <BoxoniaAlumniComponent />
            <Footer />
        </div>
    )
}

export default BoxoniaStoryPage;
