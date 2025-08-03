import Header from "../Header.jsx";
import TalentCard from "./TalentCard.jsx";
import Footer from "../Footer.jsx";
import TalentBookingModal from "./TalentBookingModal.jsx";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const AppearedPage = ({ talent }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const modalParam = searchParams.get('modal') === 'true';
    const [openModal, setOpenModal] = useState(modalParam);

    // Keep URL and state in sync
    useEffect(() => {
        setOpenModal(modalParam);
    }, [modalParam]);

    const openModalHandler = () => {
        setSearchParams({ modal: 'true' });
    };

    const closeModalHandler = () => {
        setSearchParams({}); // removes all query params
    };

    return (
        <div className="relative">
            <div className="bg-transparent md:pb-1 md:bg-cover bg-center bg-no-repeat min-h-120 md:h-150 relative" style={{
                backgroundImage: `url(${talent.thumbnail})`
            }}>
                <Header />
                <h1 className="capitalize font-bold text-7xl md:text-9xl absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    {`${talent.firstName} ${talent.lastName}`}
                </h1>
            </div>

            {/* Modal */}
            {openModal && (
                <section className="w-full absolute h-full top-0 bg-black/80 bg-blend-darken flex justify-center items-center z-50">
                    <TalentBookingModal onClose={closeModalHandler} name={talent.firstName} />
                </section>
            )}

            {/* Content */}
            <TalentCard props={talent} onBook={openModalHandler} />
            <Footer />
        </div>
    );
};

export default AppearedPage;
