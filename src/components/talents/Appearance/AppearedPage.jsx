import HeroImage from "../../../assets/hero.png";
import Header from "../../Header.jsx";
import TalentCard from "../TalentCard.jsx";
import Footer from "../../Footer.jsx";
import TalentBookingModal from "../TalentBookingModal.jsx";
import {useState} from "react";

const AppearedPage = ({talent}) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="relative">
            <div className="bg-transparent md:pb-1 md:bg-cover bg-center bg-no-repeat min-h-120 md:h-150 relative" style={{
                backgroundImage: `url(${HeroImage})`}}>
                <Header />
                <h1 className="capitalize font-bold text-7xl md:text-9xl absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    {`${talent.firstName} ${talent.lastName}`}
                </h1>
            </div>
            <section className={`${openModal ? 'flex' : 'hidden'} w-full fixed top-0 h-screen bg-black/80 bg-blend-darken justify-center items-center z-50`}>
                <TalentBookingModal onClose={() => setOpenModal(false)} />
            </section>
            <TalentCard props={talent} onBook={() => setOpenModal(true)} />
            <Footer />
        </div>
    )
}

export default AppearedPage
