import {Link} from "react-router-dom";

const FeaturedTalentCard = ({images}) => {
    return (
        <div className="grid grid-cols-2 md:flex justify-between w-fit gap-3">
            {images.map((image, i) => (
                <Link to="#" key={i}>
                    <img src={image} alt={`img-${i}`} className="w-full h-auto md:h-[255px] hover:scale-105"></img>
                </Link>
            ))}
        </div>
    )
}

export default FeaturedTalentCard
