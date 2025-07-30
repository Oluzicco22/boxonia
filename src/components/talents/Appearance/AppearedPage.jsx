import HeroImage from "../../../assets/hero.png";
import Header from "../../Header.jsx";
import TalentCard from "../TalentCard.jsx";
import Footer from "../../Footer.jsx";

const AppearedPage = ({talent}) => {
    return (
        <>
            <div className="bg-transparent md:pb-1 md:bg-cover bg-center bg-no-repeat min-h-120 md:h-150" style={{
                backgroundImage: `url(${HeroImage})`}}>
                <Header />
            </div>
            <TalentCard props={talent} />
            <Footer />
        </>
    )
}

export default AppearedPage
