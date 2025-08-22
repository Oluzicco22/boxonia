import InSectionLink from "../InSectionLink.jsx";

const AlumniCard = ({ name, role, info, img }) => {
    return (
        <article className="grid grid-cols-[200px_1fr] gap-4">
            <div className="flex flex-col justify-between text-center text-lg">
                <img src={img} alt={`Portrait of ${name}`} className="w-fit h-auto rounded-[20px]" />
                <div>
                    <h3 className="text-yellow-400 md:text-base font-bold capitalize text-nowrap">{name}</h3>
                    <p className="text-white md:text-sm capitalize">{role}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6">
                <p className="text-[#B7B7B7] text-justify md:text-left text-base leading-relaxed line-clamp-8 whitespace-pre-line" dangerouslySetInnerHTML={{__html: info}}></p>
                <InSectionLink name="read more" path={`/production/alumni/${name}`} />
            </div>
        </article>
    )
}

export default AlumniCard
