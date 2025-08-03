import { Link } from "react-router-dom";

const TalentCatalogue = ({ props: { firstName, lastName, info, image } }) => {
    return (
        <article className="ml-8 flex flex-col gap-6 bg-black text-white overflow-hidden shadow-md">
            <div className="relative">
                <img
                    src={image}
                    alt={`${firstName || "Talent"} ${lastName || ""}`}
                    className="w-fit h-[650px] rounded-[44px] object-cover"
                />
                <div className="bg-black/90 absolute -bottom-1 h-1/7 rounded-b-[44px] w-full flex items-center text-sm">
                    <Link to={`/talents/${firstName} ${lastName}?modal=${true}`}
                        className="w-3/5 mx-auto text-center border border-white font-semibold text-white hover:text-black hover:bg-white rounded-md p-2 cursor-pointer">
                        Book {firstName}
                    </Link>
                </div>
            </div>
            <p className="line-clamp-10">
                <span className="font-semibold text-lg">
                    {firstName} {lastName}
                </span>{" "}
                {info}
            </p>
            <div className="w-full flex justify-end px-4 pb-4">
                <Link to={`/talents/${firstName} ${lastName}?modal=${false}`} className="italic font-light underline">
                    See more...
                </Link>
            </div>
        </article>
    );
};

export default TalentCatalogue;
