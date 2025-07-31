import { Link } from "react-router-dom";

const TalentCatalogue = ({ props: { firstName, lastName, info, image } }) => {

    return (
        <article className="flex flex-col gap-6 bg-black text-white rounded-xl overflow-hidden shadow-md">
            <div className="relative">
                <img
                    src={image}
                    alt={`${firstName || "Talent"} ${lastName || ""}`}
                    className="w-full h-[500px] object-center object-cover rounded-xl"
                />
                <div className="bg-black/70 absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex py-4 text-sm transition-all">
                    <Link to={`/talents/${firstName} ${lastName}?modal=${true}`}
                        className="w-2/4 mx-auto text-center border border-white font-semibold text-white rounded-md p-2 cursor-pointer lowercase">
                        Book {firstName}
                    </Link>
                </div>
            </div>
            <p className="line-clamp-10">
                <span className="capitalize font-semibold text-lg">
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
