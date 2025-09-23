import {useState} from "react";

const AlumniCard = ({ name, role, info, img }) => {
    const [active, setActive] = useState(false);

    return (
        <article className="flex flex-col sm:grid sm:grid-cols-[200px_1fr] gap-7">
            <div className="flex flex-col items-start md:items-center justify-start gap-4 text-lg">
                <img src={img} alt={`Portrait of ${name}`} className="w-fit h-auto rounded-[20px]" />
                <div>
                    <h3 className="text-yellow-400 md:text-base font-bold capitalize text-nowrap">{name}</h3>
                    <p className="text-white md:text-sm capitalize">{role}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6">
                <p className={`text-[#B7B7B7] text-justify md:text-left text-base leading-relaxed ${active ? '' : 'line-clamp-8'} whitespace-pre-line`} dangerouslySetInnerHTML={{__html: info}}></p>
                <button
                    onClick={() => setActive(!active)}
                    aria-expanded={active}
                    className="text-center text-nowrap text-sm border-1 font-normal hover:bg-white hover:text-black border-[#989898]
                     text-[#989898] px-20 py-3 rounded-lg cursor-pointer">
                    {`see ${active ? 'less' : 'more'}`}
                </button>
            </div>
        </article>
    )
}

export default AlumniCard
