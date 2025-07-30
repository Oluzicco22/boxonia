import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ArticleHeader from "../../components/production/ArticleHeader.jsx";
import BoxoniPillarComponent from "../../components/production/AboutBoxoniaComponent/BoxoniPillarComponent.jsx";
import HeroImage from "../../assets/hero.png"

const AboutBoxoniaPage = () => {
    return (
        <>
            <Header />
            <div className="w-full flex justify-center mt-24">
                <ArticleHeader title="what we do" />
            </div>
            <BoxoniPillarComponent />
            <section
                className="my-10 flex justify-center items-center py-32 w-full relative  bg-black/80 bg-blend-darken bg-cover bg-center"
                style={{
                    backgroundImage: `url(${HeroImage})`,
                }}>
                <div className="w-[92%] flex gap-3 text-white flex-col">
                    <h3 className="text-2xl font-semibold text-center">IP Protection: Safeguarding Creativity at Boxonia</h3>
                    <div className="flex gap-0 font-medium text-lg flex-col">
                        <p>
                            At Boxonia, our commitment extends beyond production—we prioritize the legal security of every project. Partnering with a network of expert
                            legal consultants, we protect intellectual property, ensuring that contracts,
                            rights, and licenses are properly structured and managed.
                        </p>
                        <p>
                            From initial development to final distribution, we navigate the
                            complexities of entertainment law to guarantee that your creative works
                            meet industry standards. At Boxonia, safeguarding your vision is as
                            important as bringing it to life.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutBoxoniaPage;
