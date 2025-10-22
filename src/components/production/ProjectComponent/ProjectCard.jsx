const ProjectCard = ({props}) => {
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

    const keys = Object.keys({...props}).filter(
        (key) => !["id", "title", "cover_image", "thumbnail", "image", "trailer_link"].includes(key)
    );

    return (
        <article className="flex flex-col justify-end gap-4">
            <h2 className="uppercase text-[#B7B7B7] mt-6 md:mt-6 mb-6 md:mb-0 font-semibold text-2xl md:text-5xl pl-6 md:pl-0 text-left">{props?.title}</h2>

            <div className="flex flex-col gap-4 pl-6 md:pl-0 w-[90%] md:w-3/4">
                {keys.map((key, i) => {
                    const value = checkKey(key);
                    const label = key.split("_").join(" ");

                    // logline block
                    if (key === "Logline") {
                        return (
                            <div key={i} className="flex flex-col itim-font space-y-2">
                                <h3 className="text-[#F6B62B] font-normal md:font-semibold text-sm md:text-xl">
                                    {label}
                                </h3>
                                <p className="text-[#B7B7B7] font-normal text-sm md:text-lg">{value}</p>
                            </div>
                        );
                    }

                    // starring block (inline with colon)
                    if (key === "starring") {
                        return (
                            <div key={i} className="flex gap-2 itim-font">
                                <p className="font-normal text-sm md:text-lg capitalize text-[#B7B7B7]">
                                <span
                                    className="text-[#F6B62B] font-normal md:font-semibold text-sm md:text-xl capitalize">
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
                            <h3 className="text-[#F6B62B] font-normal md:font-semibold text-sm md:text-xl capitalize">
                                {label}:
                            </h3>
                            <p className="font-normal text-sm md:text-lg capitalize text-[#B7B7B7]">{value}</p>
                        </div>
                    );
                })}
            </div>
        </article>
    );
};

export default ProjectCard;
