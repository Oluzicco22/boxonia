import {useNavigate} from "react-router-dom";

const TalentCatalogue = ({props: {firstName, lastName, image, _id: id}}) => {
    const navigate = useNavigate();

    const readTalent = () => {
        navigate(`/talents/${firstName} ${lastName}`, {state: {talentId: id}});
    }


    return (
        <article id={id} className="flex flex-col gap-4 md:gap-6 items-center text-white overflow-hidden shadow-md">
            <img
                src={image}
                alt={`${firstName || "Talent"} ${lastName || ""}`}
                className="w-full md:w-fit rounded-2xl md:rounded-[44px] h-52 md:h-96 object-fill md:object-cover"
            />
            <button type="button" onClick={readTalent}
                    className="w-fit px-4 md:px-6 py-2 mx-auto text-center text-xs md:text-base border border-[#989898] font-normal
                    text-[#989898] cursor-pointer hover:text-black hover:bg-white rounded-lg">
                Book {firstName}
            </button>
        </article>
    );
};

export default TalentCatalogue;
