import FeaturedTalentCard from "./FeaturedTalentCard.jsx";
import {FaImdb, FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import SymbolImage from "../../assets/symbol.svg"

const TalentCard = ({talent: {firstName, lastName, info, relatedProjects, socials, perks, username}, onBook}) => {
    return (
        <section className="w-12/14 md:w-12/16 mx-auto my-15 flex flex-col gap-12 items-center">
            <p className="text-white text-justify md:text-left">

                <span className="capitalize font-semibold text-sm text-[#B7B7B7]">
                    {firstName} {lastName}
                </span>{" "}
                <span className="font-normal text-sm text-justify leading-relaxed whitespace-pre-line text-[#B7B7B7]"
                      dangerouslySetInnerHTML={{__html: info}}></span>
            </p>
            <button
                onClick={onBook}
                aria-label={`Book ${firstName} ${lastName}`}
                className="bg-[#F6B62B] text-nowrap text-xs md:text-base font-medium text-black hover:bg-white hover:text-black rounded-lg px-12 md:px-16 py-2 md:py-3 cursor-pointer capitalize">
                Book {username ?? firstName}
            </button>
            <FeaturedTalentCard images={relatedProjects}/>
            <div className="flex gap-10 text-5xl">
                <a className="hover:text-[#F6B62B]" href={socials?.imdb} target="_blank"
                   aria-label={`${firstName} ${lastName} on IMDB`}><FaImdb/></a>
                <a className="hover:text-[#F6B62B]" href={socials?.instagram} target="_blank"
                   aria-label={`${firstName} ${lastName} on Instagram`}><FaInstagram/></a>
                {socials?.twitter && (
                    <a className="hover:text-[#F6B62B]" href={socials?.twitter} target="_blank"
                       aria-label={`${firstName} ${lastName} on Instagram`}><FaXTwitter/></a>
                )}
            </div>
            <div className="bg-[#181717] rounded-xl py-7 md:py-8 px-8 md:px-20 space-y-3">
                <h3 className="text-[#919191] text-lg md:text-3xl font-semibold text-left">
                    Perks of <span className="text-[#F6B62B]">{`Working with ${firstName}`}</span>
                </h3>
                <ul className="px-1 space-y-4">
                    {perks.map((perk, idx) => (
                        <li key={idx} className="flex items-start md:items-center gap-2 md:gap-6">
                            <img src={SymbolImage} alt="checkmark icon" className="flex mt-1 md:mt-0"/>

                            <p className="text-white capitalize font-semibold md:font-bold text-sm md:text-base">{perk}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TalentCard;
