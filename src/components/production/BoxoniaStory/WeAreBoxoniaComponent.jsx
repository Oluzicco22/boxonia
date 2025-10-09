import ArticleHeader from "../ArticleHeader.jsx";

const WeAreBoxoniaComponent = () => {
    return (
        <section
            className="flex flex-col px-3 md:px-0 md:py-12 w-full text-center mx-auto items-center gap-1 md:gap-8"
            style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/dybmufexj/image/upload/v1753987268/we-are-boxonia_img_pcmsxm.png')",
            }}>
            <div className="w-full md:w-[85%] mx-auto my-12">
                <ArticleHeader title="the boxonia story"/>
            </div>
            <div className="w-full flex justify-center text-left py-3 md:py-6">
                <div
                    className="text-[#B7B7B7] leading-8 text-justify md:text-left text-sm md:text-lg w-[95%] md:w-9/15">
                    <p>
                        In 2019, Wingonia Ikpi identified a gap in the narrative landscape an urgent need to
                        tell original stories that authentically represent Nigerian and African realities. This
                        industry-wide need laid the foundation for what would become a transformative force in
                        African cinema: Boxonia Blueprint.
                    </p>

                    <p className="mt-6">
                        After a brief hiatus to recalibrate strategies, Boxonia reemerged in March 2024, fully
                        operational and poised to deliver groundbreaking media. In the months since, Boxonia
                        Blueprint has produced and co-produced across extensive niches, spanning international
                        collaborations like Son of the Soil and NollyBabes, to dynamic reenactments of classics
                        such as The Godfather and Inglorious Bastards. The portfolio also includes a radio
                        drama on nutrition for INNICROSS/USAID and visually compelling video art for global
                        brands like Unilever and British American Tobacco.
                    </p>
                    <p className="mt-6">
                        As a film and video production powerhouse, Boxonia Blueprint is
                        committed to creating deeply rooted, immersive experiences. The
                        company’s mission is clear: to craft audacious, authentic, and
                        exportable African stories through cinema and other forms of media.
                        With a keen focus on storytelling that resonates across demographics,
                        Boxonia aspires to achieve both cultural impact and commercial success.
                    </p>

                    <p className="mt-6">
                        Boxonia’s core values—ambition, audacity, creativity, innovation, and
                        transparency—have propelled it to become one of the fastest-growing
                        production companies in Africa. Beyond its storytelling expertise, the
                        company operates as a comprehensive hub for film production, offering
                        services such as story development, scripting, intellectual property
                        protection, end-to-end production, marketing, talent management,
                        licensing, and consultancy.
                    </p>

                    <p className="mt-6">
                        Whether it’s working with international collaborators or shaping
                        homegrown narratives, Boxonia Blueprint continues to define itself as a
                        trailblazer in African cinema.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WeAreBoxoniaComponent
