import ArticleHeader from "../ArticleHeader.jsx";

const NewsSection = () => {
    const elements = [{
        image: "https://res.cloudinary.com/dybmufexj/image/upload/v1754224523/chuks_police_real_img_fdsjj6.png",
        info: "Chuks Joseph stars in Kizz Daniel’s Police Video"
    },{
        image: "https://res.cloudinary.com/dybmufexj/image/upload/v1754224470/Freedom_way_real_img_mphamw.png",
        info: "Taye Arimoro’s Lead Role in New cinema movie."
    }]

    return (
        <section className="flex flex-col py-4 md:py-12 gap-5 items-center relative">
            <ArticleHeader title="news & updates" />
            <div className="grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-6 items-center mt-8 mb-16 w-full">
                {elements.map(({image, info}, i) => (
                    <div
                        key={i}
                        className="h-86 relative bg-no-repeat bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
                        <span className={`absolute left-16 font-normal ${i % 2 === 0 ? "text-3xl bottom-5" : "text-2xl w-1/2 bottom-1"} text-white z-10 transition duration-200 hover:scale-105`}>
                            {info}
                        </span>

                    </div>

                ))}
            </div>

            <p className="text-gray-600 text-base md:text-4xl leading-16 font-regular border-y-2 border-gray-600 w-[95%] md:w-3/5 text-center mb-4">Audacious, Authentic & Exportable Art forms</p>
        </section>
    )
}


export default NewsSection
