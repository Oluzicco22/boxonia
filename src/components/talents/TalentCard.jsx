import FeaturedTalentCard from "./FeaturedTalentCard.jsx";
import {FaImdb, FaInstagram } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import SymbolImage from "../../assets/symbol.svg"

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
            <div className="bg-[#181717] rounded-xl py-10 px-20">
                <h3 className="text-[#919191] text-3xl font-bold mb-6">
                    Perks of <span className="text-[#F6B62B]">{`Working with ${firstName}`}</span>
                </h3>
                <ul className="my-3 px-1">
                    {perks.map((perk, idx) => (
                        <li key={idx} className="flex items-center gap-6 my-4">
                            <img src={SymbolImage} alt="symbol" className="flex" />
                            <p className="text-white capitalize font-black text-base leading-loose">{perk}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TalentCard;
