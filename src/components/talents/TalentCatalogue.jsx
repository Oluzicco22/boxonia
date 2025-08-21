import { Link } from "react-router-dom";

const TalentCatalogue = ({ props: { firstName, lastName, image } }) => {
    return (
        <article className="flex flex-col gap-6 bg-black text-white overflow-hidden shadow-md">
            <div className="flex flex-col gap-5 items-center">
                <img
                    src={image}
                    alt={`${firstName || "Talent"} ${lastName || ""}`}
                    className="w-full md:w-fit rounded-[44px] object-cover"
                />
                <Link to={`/talents/${firstName} ${lastName}`}
                      className="w-fit px-8 mx-auto text-center border border-white font-semibold text-white hover:text-black hover:bg-white rounded-md p-2 cursor-pointer">
                    Book {firstName}
                </Link>
            </div>
        </article>
    );
};

export default TalentCatalogue;
