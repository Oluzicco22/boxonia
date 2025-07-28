import ArticleHeader from "../ArticleHeader.jsx";
import InSectionLink from "../InSectionLink.jsx";

const WhatSection = () => {
    const articles = [
        {
            title: "Ideation",
            description: "At Boxonia, we create, develop and brainstorm on unique story ideas/concepts deeply rooted in the African culture with enthralling\n" +
                "themes and write scripts with well layered dialogue and groundbreaking plots. We have a story bank where most of these ideas are developed and\n" +
                "stored for future purposes. These ideas, our IP, are properly protected."
        },
        {
            title: "End to End Production",
            description: "We run end to end production and everything in-between. Our end to end\n" +
                "production cut across the following: " +
                "Pre-production.\t" +
                "Our pre-production process starts from crafting compelling high stakes\n" +
                "stories to ensure they appeal to target audiences. After the story\n" +
                "development and scripting stage is done, we ensure to provide a detailed\n" +
                "budget according to the script, as well as hiring crew (including a post\n" +
                "production team) and cast members that further enhance the production\n" +
                "value. The Boxonia team also begins marketing conversations during this\n" +
                "time.\n"
        },
        {
            title: "Marketing",
            description: "At Boxonia, marketing is more than a skill—it’s our superpower. Our\n" +
                "team excels at crafting strategies that are carefully tailored to each\n" +
                "platform, ensuring maximum impact and success.\n" +
                "From traditional approaches to cutting-edge digital campaigns, and even\n" +
                "bold experimental strategies, we leverage every tool in the marketing\n" +
                "arsenal. This versatility allows us to adapt, innovate, and consistently\n" +
                "deliver results that resonate with diverse audiences. With Boxonia, every\n" +
                "story finds its perfect audience."
        }
    ]

    return (
        <section className="flex flex-col py-16 w-[93%] mx-auto gap-12 items-center">
            <ArticleHeader title="what we do" />
            <div className="flex flex-col md:flex-row gap-12 w-full text-white">
                {articles.map(({title, description}, i) => (
                    <article key={i} className="flex gap-2 flex-col w-full md:w-1/3">
                        <h3 className="text-center text-gray-400 text-xl font-bold">{title}</h3>
                        <p className="">{description}</p>
                    </article>
                ))}
            </div>
            <InSectionLink name="read more" path="/about" />
        </section>
    )
}

export default WhatSection
