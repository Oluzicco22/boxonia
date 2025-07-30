import Criminal from "../../assets/talents/criminal.svg";
import Afamefuna from "../../assets/talents/ahemefuma.svg";
import DNA from "../../assets/talents/dna.svg";
import LoveStrikes from "../../assets/talents/love-strikes.svg";
import Masquerade from "../../assets/talents/masquerade.svg";
import {Link} from "react-router-dom";

const FeaturedTalentCard = ({images}) => {
    const staticImages = [
        Criminal,
        Afamefuna,
        DNA,
        LoveStrikes,
        Masquerade
    ]
    return (
        <div className="flex justify-between w-full">
            {[...Array(5)].map((_, i) => (
                <Link to="#" key={i}>
                    <img src={staticImages[i]} alt={`img-${i}`} className="w-28 md:w-[19.5rem]"></img>
                </Link>
            ))}
        </div>
    )
}

export default FeaturedTalentCard
