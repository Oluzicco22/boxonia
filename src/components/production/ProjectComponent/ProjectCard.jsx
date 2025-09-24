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
            <h2 className="capitalize font-bold text-3xl md:text-5xl text-center md:text-left">{props?.title}</h2>

            {keys.map((key, i) => {
                const value = checkKey(key);
                const label = key.split("_").join(" ");

                // logline block
                if (key === "logline") {
                    return (
                        <div key={i} className="flex flex-col itim-font">
                            <h3 className="text-yellow-500 font-semibold text-xl capitalize">
                                {label}
                            </h3>
                            <p className="font-normal text-lg capitalize">{value}</p>
                        </div>
                    );
                }

                // starring block (inline with colon)
                if (key === "starring") {
                    return (
                        <div key={i} className="flex gap-2 itim-font">
                            <p className="font-normal text-lg capitalize">
            <span className="text-yellow-500 font-semibold text-xl capitalize">
              {label}:{" "}
            </span>
                                {value}
                            </p>
                        </div>
                    );
                }

                // default block
                return (
                    <div key={i} className="flex gap-2 itim-font">
                        <h3 className="text-yellow-500 font-semibold text-xl capitalize">
                            {label}:
                        </h3>
                        <p className="font-normal text-lg capitalize">{value}</p>
                    </div>
                );
            })}
        </article>
    );
};

export default ProjectCard;
