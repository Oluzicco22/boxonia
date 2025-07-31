const AlumniCard = ({ name, role, info, img }) => {
    return (
        <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 items-start">
            <div className="grid grid-cols-1 gap-1 justify-items-center text-center">
                <img src={img} alt={`Portrait of ${name}`} className="w-auto md:w-48 h-auto rounded-lg" />
                <h3 className="text-yellow-400 text-base font-bold capitalize text-nowrap">{name}</h3>
                <p className="text-white text-sm capitalize">{role}</p>
            </div>
            <p className="text-[#B7B7B7] text-justify md:text-left text-lg leading-6">{info}</p>
        </article>
    )
}

export default AlumniCard
