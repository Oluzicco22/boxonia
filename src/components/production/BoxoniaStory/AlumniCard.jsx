import {useState} from "react";

const AlumniCard = ({name, role, info, img}) => {
    const [active, setActive] = useState(false);

    return (
        <article className="grid grid-cols-[120px_1fr] sm:grid-cols-[200px_1fr] gap-4 sm:gap-7">
            <div className="flex flex-col items-start md:items-center justify-start gap-4 text-lg">
                <img src={img} alt={`Portrait of ${name}`}
                     className="w-fit h-44 sm:h-auto object-cover sm:object-contain rounded-[20px]"/>
                <div className="text-sm sm:text-base">
                    <h3 className="text-yellow-400 font-bold capitalize">{name}</h3>
                    <p className="text-white capitalize">{role}</p>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-6">
                <p className={`text-[#B7B7B7] text-justify md:text-left text-xs sm:text-base leading-relaxed ${active ? '' : 'line-clamp-8'} whitespace-pre-line`}
                   dangerouslySetInnerHTML={{__html: info}}>

                </p>
                <button
                    onClick={() => setActive(!active)}
                    aria-expanded={active}
                    className="text-center self-end sm:self-auto text-nowrap text-xs sm:text-sm border-1 font-normal hover:bg-white hover:text-black border-[#989898]
                     text-[#989898] px-7 sm:px-20 py-2 sm:py-3 rounded-lg cursor-pointer">
                    {`see ${active ? 'less' : 'more'}`}
                </button>
            </div>
        </article>
    )
}

export default AlumniCard
