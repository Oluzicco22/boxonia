import ArticleHeader from "../ArticleHeader.jsx";
import Wingonia from "../../../assets/alumni/wingonia.svg";
import Victoria from "../../../assets/alumni/victoria.svg";
import Opeyemi from "../../../assets/alumni/opeyemi.svg";
import Oluwafunke from "../../../assets/alumni/oluwafunke.svg";
import AlumniCard from "./AlumniCard.jsx";

const BoxoniaAlumniComponent = () => {
        const alumni = [
                {
                        name: "wingonia ikpi",
                        role: "founder",
                        info: "Wingonia Ikpi is a film enthusiast and passionate storyteller with years of\n" +
                            "experience in different areas of the entertainment value chain. A lover of\n" +
                            "cinema and all its excesses, Wingonia values nuance, production quality\n" +
                            "and ambition as an essential benchmark in the world of filmmaking.\n" +
                            "\n" +
                            "Wingonia’s footprints have been on various platforms, adding valuable\n" +
                            "contributions to numerous aspects of productions. With a skill set\n" +
                            "spanning ideating, production, direction and general management,\n" +
                            "contributing to the entertainment industry’s growth and international\n" +
                            "recognition.\n" +
                            "\n" +
                            "Her work experience extends across numerous brands like Access Bank,\n" +
                            "Unilever, Urban Vision, Standard Chartered Bank, and FilmOne Limited.\n" +
                            "She has contributed to staple African TV series like Tinsel and Halita and\n" +
                            "has also produced numerous Box Office hits like Toyin Abraham’s\n" +
                            "Ijakumo, and Okey Bakassi’s Bank Alert. Wingonia Ikpi’s projects are\n" +
                            "available on top streaming platforms - Netflix, Prime Video, Showmax.\n" +
                            "Wingonia Ikpi’s deep love for cinema and relatable storytelling continues\n" +
                            "to manifest in her career trajectory and her approach to filmmaking.",
                        img: Wingonia
                },
                {
                        name: "victoia popoola",
                        role: "director, finance",
                        info: "Victoria Popoola is a finance professional with a solid background in data\n" +
                            "analytics, venture capital and debt financing, and, most recently, creative\n" +
                            "industry financing. She has invested in and supported early-stage start-\n" +
                            "ups across various industries in Africa and beyond. Her current focus is\n" +
                            "on the African creative space where she successfully built financing and\n" +
                            "investment products at scale for the region. To date, she has raised and\n" +
                            "managed over 700 million naira in film portfolios with a goal to\n" +
                            "standardize and overall increase commercial investment in the sector.\n" +
                            "\n" +
                            "She has a long time passion for creative media, which drives support for\n" +
                            "creatives who are telling unique, positive African stories. She also\n" +
                            "believes that storytelling isn’t just entertainment. It’s a way to reshape\n" +
                            "narratives and celebrate African culture on a global scale. In her new role\n" +
                            "at Boxonia, she is keen to continue supporting African filmmakers and\n" +
                            "creators, and to amplify voices that matter.",
                        img: Victoria
                },
                {
                        name: "Iredumare Opeyemi",
                        role: "Director, Legal",
                        info: "Iredumare Opeyemi, is a Managing Partner at Technolawgical Partners,\n" +
                            "brings extensive experience from roles at Transssion, Transsnet, and\n" +
                            "MTN Group. He’s overseen 2000 plus business partners and managed\n" +
                            "five hundred million dollars plus investments across 12 Middle Eastern\n" +
                            "and African markets for music business. (2016-2023).\n" +
                            "\n" +
                            "Notably, he resolved a two million dollars copyright infringement lawsuit\n" +
                            "and prioritized team collaboration and employee empowerment. Ire is the\n" +
                            "author of Music Commerce in Africa. He is dedicated to advancing\n" +
                            "human infrastructure in Africa’s creative industries, driven by passion for\n" +
                            "results and resilience in the face of challenges.",
                        img: Opeyemi
                },
                {
                        name: "Onajite Oluwafunke O.",
                        role: "Legal & Business Consultant",
                        info: "Onajite Oluwafunke Odiete is a seasoned Film and TV business\n" +
                            "executive, entertainment and media lawyer with expertise in film law,\n" +
                            "content licensing, acquisition, and distribution for both on-demand and\n" +
                            "pay-TV platforms. Over the years, she has actively secured licensing\n" +
                            "deals, such as placing a title on Airtel TV, showcasing her ability to\n" +
                            "navigate both the business and legal aspects of content placement on\n" +
                            "major platforms. Onajite started her career as a content acquisition intern\n" +
                            "at Premium Box Office TV, a premier TV network on StarTimes. She\n" +
                            "currently is a legal and business consultant with Boxonia Blueprint. In\n" +
                            "this role, she handles a wide range of legal affairs related to film,\n" +
                            "television, and entertainment, supporting the company’s diverse media\n" +
                            "ventures across production, and distribution.\n" +
                            "\n" +
                            "With an impressive track record in the media, film, and entertainment\n" +
                            "industries, Onajite has extensive knowledge of both local and\n" +
                            "international business and legal frameworks. Her work has contributed to\n" +
                            "projects that have been featured on major platforms such as Netflix and\n" +
                            "Amazon Prime. Onajite has provided legal expertise for a variety of\n" +
                            "productions, including short films, sequels, series, and feature films.\n" +
                            "\n" +
                            "Some of her notable works include <i>Balls, NollyBabes, In a Pod, Gracie,\n" +
                            "Christmas in Lagos, Blood Sisters (Season 2), Last Cab Home, The One\n" +
                            "for Sarah, After 30, Oloture: The Journey, Dust to Dreams,</i> and the\n" +
                            "feature film The Weekend, which was selected for prestigious film\n" +
                            "festivals worldwide and received 16 nominations at the Africa Movie\n" +
                            "Academy Awards (AMAA).\n" +
                            "In addition to her production accomplishments, Onajite is deeply\n" +
                            "committed to elevating local talent within the industry. This is showcased\n" +
                            "through her contributions to a significant film festival in Nigeria, where\n" +
                            "she works closely with the programming team to curate a lineup of films\n" +
                            "that align with the festival's vision while ensuring all legal requirements\n" +
                            "are met.",
                        img: Oluwafunke
                }
        ]

    return (
        <section className="flex flex-col py-8 px-3 md:px-0 w-full md:w-[90%] mx-auto items-center gap-16">
            <ArticleHeader title="Boxonians" />
            <div className="flex flex-col gap-10 w-full">
                   {alumni.map((props, i) => <AlumniCard key={i} {...props} /> )}
                </div>
        </section>
    )
}

export default BoxoniaAlumniComponent
