const ProjectCard = ({ props }) => {
    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            weekday: "long",
            month: "long",
            year: "numeric",
        }).format(new Date(date));
    };

    const checkKey = (key) => {
        let value;

        switch (key) {
            case "starring":
                value = `${props[key].join(", ")}.`;
                break;
            case "releaseDate":
                value = formatDate(props[key]);
                break;
            default:
                value = props[key];
                break;
        }
        return value;
    };

    const keys = Object.keys({ ...props }).filter(
        (key) => !["id", "title", "cover_image", "thumbnail", "image"].includes(key)
    );

    return (
        <article className="flex flex-col justify-end gap-4">
            <h2 className="capitalize font-bold text-5xl">{props?.title}</h2>
            {keys.map((key, i) => (
                key === 'logline' ?
                    <div key={i} className="flex flex-col itim-font">
                        <h3 className="text-yellow-500 font-semibold text-xl capitalize">{key}</h3>
                        <p className="font-normal text-lg capitalize">{checkKey(key)}</p>
                    </div>
                    :
                    key === 'starring' ?
                        <div key={i} className="flex gap-2 itim-font">
                            <p className="font-normal text-lg capitalize">
                                <span className="text-yellow-500 font-semibold text-xl capitalize">
                                {`${key.split("_").join(" ")}: `}
                                </span>
                                {checkKey(key)}</p>
                        </div> :
                        <div key={i} className="flex gap-2 itim-font">
                            <h3 className="text-yellow-500 font-semibold text-xl capitalize">
                                {`${key.split("_").join(" ")}:`}
                            </h3>
                            <p className="font-normal text-lg capitalize">{checkKey(key)}</p>
                        </div>
            ))}
        </article>
    );
};

export default ProjectCard;
