const ProjectCard = ({props}) => {
    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            weekday: "long",
            month: "long",
            year: "numeric"
        }).format(new Date(date))
    }

    return (
        <article className="flex flex-col justify-end gap-4">
            <h2 className="capitalize font-bold text-5xl">{props?.title}</h2>
            <div className="flex gap-2">
                <h3 className="text-yellow-500 font-semibold text-xl">Longline:</h3>
                <p className="font-normal text-lg capitalize">{props?.desc}</p>
            </div>
            <div className="flex gap-2">
                <h3 className="text-yellow-500 font-semibold text-xl">Cast:</h3>
                <p className="font-normal text-lg capitalize">{`${props?.casts.join(", ")}.`}</p>
            </div>
            <div className="flex gap-2">
                <h3 className="text-yellow-500 font-semibold text-xl">Director:</h3>
                <p className="font-normal text-lg capitalize">{props?.director}</p>
            </div>

            <div className="flex gap-2">
                <h3 className="text-yellow-500 font-semibold text-xl">Producer:</h3>
                <p className="font-normal text-lg capitalize">{props?.producer}</p>
            </div>
            <div className="flex gap-2">
                <h3 className="text-yellow-500 font-semibold text-xl text-nowrap">Producer Companies:</h3>
                <p className="font-normal text-lg capitalize">{props?.publisher}</p>
            </div>
            <div className="flex gap-2">
                <h3 className="text-yellow-500 font-semibold text-xl">Release Date:</h3>

                <p className="font-normal text-lg">{props?.releaseDate ? formatDate(props?.releaseDate) : 'TBC'}</p>
            </div>

        </article>
    )
}

export default ProjectCard;
