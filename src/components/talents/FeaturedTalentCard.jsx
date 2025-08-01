import {Link} from "react-router-dom";

const FeaturedTalentCard = ({images}) => {
    return (
        <div className="flex justify-between w-fit gap-10">
            {images.map((image, i) => (
                <Link to="#" key={i}>
                    <img src={image} alt={`img-${i}`} className="w-28 md:w-[19.5rem]"></img>
                </Link>
            ))}
        </div>
    )
}

export default FeaturedTalentCard
