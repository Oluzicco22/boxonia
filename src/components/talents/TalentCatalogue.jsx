import {useNavigate} from "react-router-dom";

const TalentCatalogue = ({ props: { firstName, lastName, image, username, _id: id } }) => {
    const navigate = useNavigate();

    const readTalent = () => {
        navigate(`/talents/${firstName} ${lastName}`, { state: { talentId: id } });
    }


    return (
        <article id={id} className="flex flex-col gap-6 items-center bg-black text-white overflow-hidden shadow-md">
                <img
                    src={image}
                    alt={`${firstName || "Talent"} ${lastName || ""}`}
                    className="w-full md:w-fit rounded-[44px] max-h-96 object-cover"
                />
                <button type="button" onClick={readTalent}
                      className="w-fit px-6 mx-auto text-center border border-white font-normal text-white cursor-pointer hover:text-black hover:bg-white rounded-lg p-2">
                    Book {username ?? firstName}
                </button>
        </article>
    );
};

export default TalentCatalogue;
