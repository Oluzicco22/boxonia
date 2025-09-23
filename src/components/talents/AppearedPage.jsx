import Header from "../Header.jsx";
import TalentCard from "./TalentCard.jsx";
import Footer from "../Footer.jsx";
import TalentBookingModal from "./TalentBookingModal.jsx";
import { useState } from "react";
import { Helmet } from "react-helmet";


const AppearedPage = ({ talent }) => {
    const [openModal, setOpenModal] = useState(false);


    return (
        <div className="relative">

            <div className="bg-transparent md:pb-1 bg-cover bg-center bg-no-repeat min-h-90 md:h-150 relative" style={{
                backgroundImage: `url(${talent.thumbnail})`
            }}>
                <Header />
                <h1 className="capitalize font-bold text-3xl sm:text-5xl md:text-9xl absolute -bottom-1 md:-bottom-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    {`${talent.username ?? talent.firstName} ${talent.lastName}`}
                </h1>

            </div>
            <Helmet>
                <title>{`${talent.firstName} ${talent.lastName} | Boxonia Talents`}</title>
                <meta name="description" content={`Discover ${talent.firstName} ${talent.lastName}'s work and book them through Boxonia Talent Management.`} />
            </Helmet>

            {/* Modal */}
            {openModal && (
                <section
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="booking-title"
                    className="w-full absolute h-full top-0 bg-black/80 bg-blend-darken flex justify-center items-center z-50">
                    <TalentBookingModal onClose={() => setOpenModal(false)} name={talent.firstName} />
                </section>
            )}

            {/* Content */}
            <TalentCard talent={talent} onBook={() => setOpenModal(true)} />
            <Footer />
        </div>
    );
};

export default AppearedPage;
