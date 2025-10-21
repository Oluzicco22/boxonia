import ArticleHeader from "../ArticleHeader.jsx";

const ValuesComponent = () => {
    const values = [
        {
            title: "Ambition",
            desc: "We want to achieve great feats in the creative space and intend to redefine film standard practices in Africa and become one of the best production houses to ever exist."
        },
        {
            title: "Exceptional",
            desc: "Boxonia is built on the foundation of excellence, this means that we are committed to quality. We carry out projects by ensuring that we attain perfection or near perfection. It is a case of either going hard or going home. We prefer the former, always."
        },
        {
            title: "Original",
            desc: "We are open to trying new methods and approaches in the creative space to achieve great results."
        },
        {
            title: "Stewardship",
            desc: "We don't just protect a project we nurture and guide it to its best form."
        },
        {
            title: "Transparent",
            desc: "At Boxonia, transparency isn’t just a value it’s a cornerstone of our ethos. We believe in straightforward communication, fostering trust with " +
                "our clients, collaborators, and stakeholders at every stage of the creative process."
        }
    ]

    return (
        <section className="relative flex flex-col px-3 md:px-0 w-full mx-auto items-center gap-16">
            <div className="absolute -bottom-24 md:-bottom-11 right-0 w-[20%] md:w-fit">
                <img src="https://res.cloudinary.com/dybmufexj/image/upload/v1754222299/reels-img_l7djxx.png"
                     alt="reels" className="w-[100%]" loading="lazy"/>
            </div>
            <div className="w-full md:w-[85%] mx-auto">
                <ArticleHeader title="our values"/>
            </div>
            <div
                className="grid w-full md:w-4/5 px-3 mx-auto gap-12 md:gap-x-20 text-white grid-cols-1 md:grid-cols-3">
                {values.map(({title, desc}, i) => (
                    <article
                        key={i}
                        className="flex flex-col gap-2 bg-[#131313] rounded-[40px] px-8 md:px-6 py-8 text-lg"
                    >
                        <h3 className="text-[#F6B62B] text-sm md:text-[20px] font-semibold">{title}</h3>
                        <p className="text-[#B7B7B7] leading-loose md:leading-9 text-sm md:text-[20px] text-justify md:text-left font-light">{desc}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ValuesComponent
