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
                        desc: "We don't just protect a project we nurture and guide it to its best form."
                },
                {
                        title: "Transparent",
                        desc: "At Boxonia, transparency isn’t just a value it’s a cornerstone of our ethos. We believe in straightforward communication, fostering trust with " +
                            "our clients, collaborators, and stakeholders at every stage of the creative process."
                }
        ]

        return (
            <section className="flex flex-col py-5 px-3 md:px-0 w-full mx-auto items-center gap-8 mb-16">
                    <ArticleHeader title="our values" />
                    <div className="grid w-full md:w-3/5 px-3 mx-auto gap-7 text-white grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                            {values.map(({ title, desc }, i) => (
                                <article
                                    key={i}
                                    className="flex flex-col gap-2 bg-[#131313] rounded-xl p-4 text-lg"
                                >
                                        <h3 className="text-[#F6B62B] font-bold">{title}</h3>
                                        <p className="text-[#B7B7B7] leading-snug font-normal">{desc}</p>
                                </article>
                            ))}
                    </div>
            </section>
        )
}

export default ValuesComponent
