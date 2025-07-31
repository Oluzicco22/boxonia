import FeaturedTalentCard from "./FeaturedTalentCard.jsx";
import {FaImdb, FaInstagram } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const TalentCard = ({ props: { firstName, lastName, info, relatedProjects, perks }, onBook }) => {
    return (
        <section className="w-15/16 mx-auto my-10 flex flex-col gap-12 items-center">
            <p className="text-white">
                <span className="capitalize font-semibold text-lg">
                    {firstName} {lastName}
                </span>{" "}
                {info}
            </p>
            <button
                onClick={onBook}
                className="w-1/2 md:w-1/5 mx-auto border border-white font-semibold text-white rounded-md p-2 cursor-pointer lowercase">
                Book {firstName}
            </button>
            <FeaturedTalentCard images={relatedProjects} />
            <div className="flex gap-10 text-5xl">
                <a href="#"><FaImdb /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaXTwitter /></a>
            </div>
            <div className="bg-neutral-700 rounded-xl py-4 px-20">
                <h3 className="text-gray-400 text-3xl font-bold">
                    Perks of <span className="text-yellow-500">{`Working with ${firstName}`}</span>
                </h3>
                <ul className="my-3 px-1">
                    {perks.map((perk, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                            <FaImdb className="text-yellow-500" />
                            <p className="text-white capitalize font-black text-base leading-loose">{perk}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TalentCard;
