import ArticleHeader from "../ArticleHeader.jsx";

const ValuesComponent = () => {
        const values = [
                {
                        title: "Ambitious",
                        desc: "We want to achieve great feats in the creative space and intend to " +
                            "redefine film standard practices in Africa and become one of the best " +
                            "production houses to ever exist."
                },
                {
                        title: "Passionate",
                        desc: "Our passion for film and other forms of art propel us to approach every" +
                            "project we are on with dedication and giving more than a hundred percent."
                },
                {
                        title: "Original",
                        desc: "We are open to trying new methods and approaches in the creative space to achieve great results."
                },
                {
                        title: "Exceptional",
                        desc: "Boxonia is built on the foundation of excellence, this means that we are " +
                            "committed to quality. We carry out projects by ensuring that we attain " +
                            "perfection or near perfection. It is a case of either going hard or going home. We prefer the former, always."
                },
                {
                        title: "Transparent",
                        desc: "At Boxonia, transparency isn’t just a value it’s a cornerstone of our ethos. We believe in straightforward communication, fostering trust with " +
                            "our clients, collaborators, and stakeholders at every stage of the creative process."
                }
        ]

        return (
            <section className="flex flex-col py-5 px-3 md:px-0 w-full mx-auto items-center gap-16 mb-16 md:mb-36">
                    <ArticleHeader title="values" />
                    <div className="flex flex-col gap-12 w-full md:w-9/15 px-3 mx-auto text-white">
                            {values.map(({title, desc}, i) => (
                                    <article key={i} className="flex flex-col gap-2">
                                            <h3 className="text-white text-xl font-bold">{title}</h3>
                                            <p className="text-[#B7B7B7] text-lg leading-9 font-light">{desc}</p>
                                    </article>
                            ))}
                    </div>
            </section>
        )
}

export default ValuesComponent
