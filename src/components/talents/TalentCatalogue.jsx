const TalentCatalogue = ({ props: { firstName, lastName, image, username } }) => {
    return (
        <article className="flex flex-col gap-6 items-center bg-black text-white overflow-hidden shadow-md">
                <img
                    src={image}
                    alt={`${firstName || "Talent"} ${lastName || ""}`}
                    className="w-full md:w-fit rounded-[44px] max-h-96 object-cover"
                />
                <a href={`/talents/${firstName} ${lastName}`}
                      className="w-fit px-6 mx-auto text-center border border-white font-normal text-white hover:text-black hover:bg-white rounded-lg p-2">
                    Book {username ?? firstName}
                </a>
        </article>
    );
};

export default TalentCatalogue;
