import FeaturedTalentCard from "./FeaturedTalentCard.jsx";
import {FaImdb, FaInstagram } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import SymbolImage from "../../assets/symbol.svg"

const TalentCard = ({ talent: { firstName, lastName, info, relatedProjects, socials, perks, username }, onBook }) => {
    return (
        <section className="w-11/12 md:w-12/16 mx-auto my-2 md:my-10 flex flex-col gap-12 items-center">
            <p className="text-white text-center md:text-left">

                <span className="capitalize font-semibold text-lg text-[#B7B7B7]">
                    {firstName} {lastName}
                </span>{" "}
                <span className="font-normal text-justify leading-relaxed whitespace-pre-line text-[#B7B7B7]" dangerouslySetInnerHTML={{__html: info}}></span>
            </p>
            <button
                onClick={onBook}
                aria-label={`Book ${firstName} ${lastName}`}
                className="w-1/2 md:w-fit mx-auto bg-[#F6B62B] font-medium text-black hover:bg-white hover:text-black rounded-lg px-16 py-3 cursor-pointer capitalize">
                Book {username ?? firstName}
            </button>
            <FeaturedTalentCard images={relatedProjects} />
            <div className="flex gap-10 text-5xl">
                <a className="hover:text-[#F6B62B]" href={socials?.imdb} target="_blank" aria-label={`${firstName} ${lastName} on IMDB`}><FaImdb /></a>
                <a className="hover:text-[#F6B62B]" href={socials?.instagram} target="_blank" aria-label={`${firstName} ${lastName} on Instagram`}><FaInstagram /></a>
                    {socials.twitter && (
                    <a className="hover:text-[#F6B62B]" href={socials?.twitter} target="_blank" aria-label={`${firstName} ${lastName} on Instagram`}><FaXTwitter /></a>
                )}
            </div>
            <div className="bg-[#181717] rounded-xl py-8 px-3 md:px-20">
                <h3 className="text-[#919191] text-3xl font-semibold text-left mb-6">
                    Perks of <span className="text-[#F6B62B]">{`Working with ${firstName}`}</span>
                </h3>
                <ul className="my-3 px-1">
                    {perks.map((perk, idx) => (
                        <li key={idx} className="flex items-center gap-6 mt-4">
                            <img src={SymbolImage} alt="checkmark icon" className="flex" />
                            <p className="text-white capitalize font-bold text-base leading-loose">{perk}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TalentCard;
